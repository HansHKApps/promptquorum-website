// Phone Harness Review: Let a Coding Agent Use Your iPhone or Android Phone
// Slug: phone-harness-review
// Companion to: phoneclaw-review, open-interpreter-review, local-operator-review
// Sources: the official site phone-harness.com (homepage, docs, privacy policy last updated 2026-11-03), the GitHub repository
// phone-harness/phone-harness (README, install.md, repository metadata via the GitHub API) and PyPI (phone-harness 0.3.3), all read
// 2026-11-08 — no hands-on testing. Cloud prices are listed in US dollars only on the site and are carried as USD in every locale
// (no storefront prices exist; docs/geo-translation.md: never FX-convert). The repository moved from ShawnPana/phone-harness.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-en.webp',
    title: 'Phone Harness Review: Let a Coding Agent Use Your iPhone or Android Phone',
    seoTitle: 'Phone Harness Review: Agent Control for iPhone and Android',
    intro:
      'Phone Harness is an MIT-licensed command-line tool from Phone Harness Inc. that, per its own pages, lets a coding agent such as Claude Code or Codex tap, type and scroll a real iPhone or Android phone, with optional hosted cloud phones. This review reflects the maker\'s site, privacy policy, repository and PyPI listing as checked on 8 November 2026.',
    metaDescription:
      'Phone Harness review: open-source CLI that lets a coding agent operate an iPhone or Android phone. Setup, cloud pricing, privacy policy and open questions.',
    twitterDescription:
      'Phone Harness review: an MIT-licensed CLI for driving a real iPhone or Android phone from a coding agent. Requirements, cloud prices and what is unverified.',
    audience:
      'Developers who use a coding agent and want to know what Phone Harness needs, what its cloud phones cost, what its privacy policy says and which statements the sources leave unconfirmed.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Phone Harness review',
    targetKeywords: [
      'phone harness review',
      'phone-harness',
      'ai agent control iphone',
      'ai agent control android adb',
      'claude code phone automation',
      'iphone mirroring ai agent',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**Phone Harness (version 0.3.3, released 2 November 2026) is a free, MIT-licensed command-line tool that, per its maker, lets a coding agent such as Claude Code or Codex read and operate a real iPhone or Android phone, plus a paid cloud service for hosted phones.** Every behavior and privacy statement in this review comes from the maker\'s own pages and repository; PromptQuorum has not installed or tested it.',
    quickAnswerTop: {
      en: {
        question: 'What do I need to run Phone Harness?',
        answer:
          'A computer with uv and Python 3.12, plus a phone. An iPhone needs macOS 15 or newer with iPhone Mirroring; an Android needs adb with USB debugging on macOS, Linux or Windows; a cloud phone needs only an account.',
        bullets: [
          'Reads the screen with Apple Vision OCR on iPhone and the accessibility tree on Android.',
          'Connects to any MCP client, with plugins for Hermes Agent and OpenClaw.',
          'Offers hosted Android and iPhone phones as a separate paid service.',
          'Cannot do multi-touch, camera or Face ID flows, and OCR sees text but not icons.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Phone Harness?', anchor: 'what-is-phone-harness' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'What You Need', anchor: 'requirements' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Data Handling', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'Limits and What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
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
            text: 'Phone Harness is an open-source command-line tool that gives a coding agent taps, typing and screen reading on a real iPhone or Android phone.',
          },
          {
            type: 'plain-terms',
            text: 'Your agent writes short scripts such as open an app, tap a word, type text; Phone Harness turns them into real touches and reports back what is on the screen.',
          },
        ],
        items: [
          'Maintenance: the repository was created on 7 August 2026, release 0.3.3 followed on 2 November and the last code push was on 3 November 2026, so it is under active development and no stale-project warning applies.',
          'License: MIT, with the source on GitHub.',
          'Reach: Android works on macOS, Linux and Windows; iPhone control needs a Mac.',
          'Cost: the tool is free; the hosted cloud phones are a paid service.',
          'Basis: the maker\'s site, repository and PyPI listing, read on 8 November 2026, with no hands-on testing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed, tested or benchmarked Phone Harness. Behavior, reliability and privacy statements below are the maker\'s own.',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: 'What Is Phone Harness?',
        content: [
          '**Phone Harness is a command-line "harness" that lets an AI agent use a phone the way a person does: it taps, types, scrolls and reads the screen, with no jailbreak, no Xcode and nothing installed on the phone, per the README.** It is published by Phone Harness Inc., and its homepage says the company is backed by Y Combinator. The repository was first published under the GitHub user ShawnPana and now sits in the phone-harness organization.',
          'The agent pipes short Python scripts into the phone-harness command, using helpers such as opening an app, tapping text, typing text and reading the screen. On an iPhone it captures the iPhone Mirroring window on a Mac, reads it with Apple Vision OCR and sends input as events; on Android it uses adb for screenshots and input and the accessibility tree for text, over USB or Wi-Fi. The same helpers drive a hosted cloud phone, so a script written for one phone runs on the others.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Phone Harness installs from the terminal with one command: `uv tool install --python 3.12 --upgrade --force phone-harness`.** The maker\'s recommended route is to send its setup prompt to your coding agent, which installs the CLI, asks which phone to use and walks you through the steps that need your hands.',
        ],
        columns: ['Channel', 'Link'],
        rows: [
          { 'Channel': 'Website', 'Link': '[phone-harness.com](https://phone-harness.com)' },
          { 'Channel': 'Documentation', 'Link': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { 'Channel': 'Privacy policy', 'Link': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { 'Channel': 'Source code (MIT)', 'Link': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { 'Channel': 'PyPI package', 'Link': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { 'Channel': 'Cloud phones', 'Link': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: 'Version reviewed: 0.3.3, uploaded to PyPI and released on GitHub on 2 November 2026; the latest upstream update at the time of checking was a code push on 3 November 2026. A terminal and a developer setup (uv, Python 3.12) are required: there is no installer, App Store or Google Play listing, and the GitHub releases carry no downloadable files.',
      },
      requirements: {
        id: 'requirements',
        title: 'What You Need',
        content: [
          '**What the phone needs depends on which mode you pick; the README and install guide list four.**',
        ],
        columns: ['Phone', 'Needs'],
        rows: [
          { 'Phone': 'Your iPhone', 'Needs': 'macOS 15+, iPhone Mirroring, iOS 18+ phone' },
          { 'Phone': 'Your Android', 'Needs': 'adb and USB debugging; macOS, Linux or Windows' },
          { 'Phone': 'Cloud Android', 'Needs': 'Account, adb, outbound TCP to the phone' },
          { 'Phone': 'Cloud iPhone', 'Needs': 'Account; driven over HTTPS from any OS' },
        ],
        note: 'For an iPhone on your own Mac, Accessibility and Screen Recording permission are also required, and the package itself accepts Python 3.10 or newer. A built-in doctor command checks the setup.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**The command-line tool is free under the MIT license; Phone Harness Cloud is the paid part, with Android billed by the minute or by subscription and iPhones on a flat monthly subscription.** The site is marked "Open beta" for the cloud service.',
        ],
        columns: ['Plan', 'Price (USD)'],
        rows: [
          { 'Plan': 'Basic (cloud Android)', 'Price (USD)': '$0/mo + 5¢ per phone-minute' },
          { 'Plan': 'Plus (cloud Android)', 'Price (USD)': '$20/mo incl. 1,000 min, then 4¢/min' },
          { 'Plan': 'Cloud iPhone', 'Price (USD)': '$80/mo, or $64/mo billed annually' },
          { 'Plan': 'Cloud iPhone with eSIM', 'Price (USD)': '$100/mo, or $80/mo billed annually' },
          { 'Plan': 'Scale (dedicated phones)', 'Price (USD)': 'Contact the maker' },
        ],
        note: 'Read from phone-harness.com on 8 November 2026. The site lists prices in US dollars only; they are set by the maker and can change. New accounts start with $5 of credit, per the homepage.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s site or the repository README.**',
        ],
        items: [
          '**One set of helpers for every phone.** A script written for an iPhone, an Android or a cloud phone runs on the others, and a default phone is chosen with a config setting.',
          '**Agent integrations.** The setup prompt targets Claude Code and Codex; a hosted MCP endpoint serves any MCP client (cloud phones only for now), and plugins exist for Hermes Agent and OpenClaw.',
          '**Self-extending helpers.** The agent saves helpers it writes to a workspace folder in your home directory that upgrades do not wipe.',
          '**Cloud phones.** Temporary Android phones, saved Android phones that keep apps and logins, and dedicated real iPhones, with a live view in the browser while the agent works.',
          '**Cloud extras the site advertises.** Real phone numbers for SMS and two-factor codes, persistent logins and "stealth" so apps see a person; PromptQuorum has not checked these, and automating other apps can conflict with their terms of service.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Handling',
        content: [
          '**The privacy policy (last updated 3 November 2026) covers phone-harness.com and Phone Harness Cloud, and says that when you or your agent use a cloud phone it automatically logs the activity: commands and their inputs, text entered, taps, apps and pages used, and session details.** The stated purposes are running, securing and improving the service and preventing abuse. It also collects your name and email from sign-in, billing records and session logs; card details go to Stripe.',
          'The policy names Clerk (sign-in), Stripe (payments), Amazon Web Services (hosting in the United States), Vercel, PostHog (analytics, only with consent) and Loops (email) as the services it uses. Temporary Android phones are wiped when the session ends; saved Android phones and cloud iPhones keep apps, logins and files until you reset them, and a cloud iPhone is erased within 7 days after the subscription ends. The README adds that the CLI prints a one-line notice when a new version exists, which an environment variable switches off.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements. PromptQuorum has not audited the service or the CLI\'s network traffic, and the policy describes the website and cloud service, not a phone you connect yourself.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Developers who already run a coding agent** and want it to operate a real phone.',
          '**Mac owners who want iPhone control** that, per the README, needs no jailbreak or app on the phone.',
          '**Teams who need many phones** and are fine with a hosted, paid cloud.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limits and What We Could Not Verify',
        items: [
          '**Limits the README lists.** Unlocking an iPhone pauses mirroring, a PIN-locked Android needs you, OCR sees text but not icons, there is no multi-touch, camera or Face ID support, DRM video renders black and connecting the phone is always your job.',
          '**Hands-on reliability.** PromptQuorum did not run Phone Harness, and the sources publish no benchmark or success-rate figures.',
          '**Local models.** The sources name Claude Code, Codex and "any agent" but do not say whether a local model, for example through Ollama, can drive it.',
          '**Cloud claims.** Stealth, real phone numbers, Y Combinator backing and the open-beta service were read from the maker\'s own pages only.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[PhoneClaw](/power-local-llm/phoneclaw-review)', 'Platforms': 'macOS', 'Price / license': 'Free / Apache-2.0', 'Key difference': 'macOS app that lets an AI agent control and automate your phone' },
          { 'App': '[Open Interpreter](/power-local-llm/open-interpreter-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free / Apache-2.0', 'Key difference': 'Lets a local LLM control your computer and execute code, not a phone' },
          { 'App': '[Local Operator](/power-local-llm/local-operator-review)', 'Platforms': 'macOS, Windows, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Desktop agent that writes and runs code on your computer, with a local or hosted model' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need to jailbreak the iPhone or install an app on it?',
            a: 'No, per the README. An iPhone is driven through the iPhone Mirroring window on a Mac, so nothing is installed on the phone.',
          },
          {
            q: 'How do I update Phone Harness?',
            a: 'Run its update command. The CLI also prints one line when a newer version exists; setting PHONE_HARNESS_NO_UPDATE_CHECK=1 silences that notice.',
          },
          {
            q: 'Where do the helpers my agent writes end up?',
            a: 'In ~/.phone-harness/agent-workspace, outside the install, so an upgrade keeps them; an existing workspace is left untouched.',
          },
          {
            q: 'Why does the repository link redirect?',
            a: 'It was first published as ShawnPana/phone-harness and now lives at phone-harness/phone-harness; the old address redirects.',
          },
          {
            q: 'How long does a cloud session last?',
            a: 'The README says the start command runs a session for 15 minutes by default, adjustable with a duration flag, and the stop command ends it, writing a saved Android back.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Phone Harness is a free, MIT-licensed tool that, per its maker, gives a coding agent real taps, typing and screen reading on an iPhone or Android phone, with no jailbreak and nothing installed on the phone, plus paid hosted phones. It was updated days before this check and has a published privacy policy. Against that, the project is under three months old at version 0.3.3, iPhone control needs a Mac, OCR misses unlabeled icons, the cloud service logs phone activity by its own account and every behavior claim comes from the maker. It suits developers who already drive a coding agent and want phone access; readers who want a different approach can compare [PhoneClaw](/power-local-llm/phoneclaw-review) or [Open Interpreter](/power-local-llm/open-interpreter-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Phone Harness](https://phone-harness.com) — maker homepage: description, cloud plans and prices, checked 8 November 2026.',
          '[Phone Harness privacy policy](https://phone-harness.com/privacy) and [documentation](https://phone-harness.com/docs) — data handling, processors and phone retention.',
          '[phone-harness on GitHub](https://github.com/phone-harness/phone-harness) — README, install guide, MIT license, release and push dates.',
          '[phone-harness on PyPI](https://pypi.org/project/phone-harness/) — version 0.3.3 and upload date.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PhoneClaw Review](/power-local-llm/phoneclaw-review) — a macOS app for letting an AI agent control a phone.',
          '[Open Interpreter Review](/power-local-llm/open-interpreter-review) — a tool that lets a local LLM control your computer.',
          '[Local Operator Review](/power-local-llm/local-operator-review) — a desktop agent that writes and runs code.',
          '[Local LLM Code & Development Compared](/power-local-llm/local-llm-code-development-compared) — the category comparison for coding and agent tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Phone Harness Review: Let a Coding Agent Use Your iPhone or Android Phone',
      description:
        'Phone Harness review: an MIT-licensed CLI that lets a coding agent operate a real iPhone or Android phone, with optional cloud phones. Setup, prices, privacy policy and what the sources leave unconfirmed.',
      url: 'https://promptquorum.com/power-local-llm/phone-harness-review',
      inLanguage: 'en',
      datePublished: '2026-11-08',
      dateModified: '2026-11-08',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating phone control for AI coding agents' },
      about: [
        { '@type': 'Thing', name: 'Phone Harness' },
        { '@type': 'Thing', name: 'AI agent phone control' },
        { '@type': 'Thing', name: 'iPhone Mirroring and Android adb automation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/phone-harness-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Phone Harness Review', item: 'https://promptquorum.com/power-local-llm/phone-harness-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-de.webp',
    title: 'Phone-Harness-Rezension: Ein Coding-Agent bedient Ihr iPhone oder Android-Telefon',
    seoTitle: 'Phone-Harness-Rezension: Agent steuert iPhone und Android',
    intro:
      'Phone Harness ist ein MIT-lizenziertes Kommandozeilenwerkzeug von Phone Harness Inc., mit dem ein Coding-Agent wie Claude Code oder Codex laut eigenen Angaben ein echtes iPhone oder Android-Telefon antippen, bedienen und scrollen kann, optional mit gehosteten Cloud-Telefonen. Diese Rezension gibt Website, Datenschutzerklärung, Repository und PyPI-Eintrag des Herstellers wieder, wie sie am 8. November 2026 geprüft wurden.',
    metaDescription:
      'Phone-Harness-Rezension: Open-Source-CLI, mit der ein Coding-Agent iPhone oder Android bedient. Einrichtung, Cloud-Preise, Datenschutz, offene Punkte.',
    twitterDescription:
      'Phone-Harness-Rezension: MIT-lizenzierte CLI, die ein echtes iPhone oder Android-Telefon aus einem Coding-Agent steuert. Bedarf, Cloud-Preise, Ungeprüftes.',
    audience:
      'Entwickler, die einen Coding-Agent nutzen und wissen möchten, was Phone Harness benötigt, was die Cloud-Telefone kosten, was die Datenschutzerklärung sagt und welche Aussagen die Quellen unbestätigt lassen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Phone Harness Rezension',
    targetKeywords: [
      'phone harness rezension',
      'phone-harness',
      'ki agent iphone steuern',
      'ki agent android adb steuern',
      'claude code telefon automatisierung',
      'iphone mirroring ki agent',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**Phone Harness (Version 0.3.3, veröffentlicht am 2. November 2026) ist laut Hersteller ein kostenloses, MIT-lizenziertes Kommandozeilenwerkzeug, mit dem ein Coding-Agent wie Claude Code oder Codex ein echtes iPhone oder Android-Telefon lesen und bedienen kann, dazu ein kostenpflichtiger Cloud-Dienst für gehostete Telefone.** Alle Angaben zu Verhalten und Datenschutz in dieser Rezension stammen von den Seiten und dem Repository des Herstellers; PromptQuorum hat das Werkzeug weder installiert noch getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was brauche ich, um Phone Harness auszuführen?',
        answer:
          'Einen Computer mit uv und Python 3.12 sowie ein Telefon. Ein iPhone benötigt macOS 15 oder neuer mit iPhone-Synchronisierung (iPhone Mirroring); ein Android benötigt adb mit USB-Debugging unter macOS, Linux oder Windows; ein Cloud-Telefon braucht nur ein Konto.',
        bullets: [
          'Liest den Bildschirm per Apple-Vision-OCR auf dem iPhone und über den Bedienungshilfen-Baum auf Android.',
          'Verbindet sich mit jedem MCP-Client, mit Plugins für Hermes Agent und OpenClaw.',
          'Bietet gehostete Android- und iPhone-Telefone als separaten kostenpflichtigen Dienst.',
          'Kann keine Multi-Touch-, Kamera- oder Face-ID-Abläufe, und OCR erkennt Text, aber keine Symbole.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Phone Harness?', anchor: 'what-is-phone-harness' },
      { label: 'Bezugsquellen', anchor: 'get-it' },
      { label: 'Was Sie benötigen', anchor: 'requirements' },
      { label: 'Preis', anchor: 'pricing' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Datenverarbeitung', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Grenzen und was wir nicht prüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Konkurrenten und Alternativen', anchor: 'vs-alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
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
            text: 'Phone Harness ist ein Open-Source-Kommandozeilenwerkzeug, das einem Coding-Agent Tippen, Texteingabe und Bildschirmlesen auf einem echten iPhone oder Android-Telefon ermöglicht.',
          },
          {
            type: 'plain-terms',
            text: 'Ihr Agent schreibt kurze Skripte wie „App öffnen, ein Wort antippen, Text eingeben“; Phone Harness setzt sie in echte Berührungen um und meldet zurück, was auf dem Bildschirm steht.',
          },
        ],
        items: [
          'Pflege: Das Repository wurde am 7. August 2026 angelegt, Release 0.3.3 folgte am 2. November und der letzte Code-Push am 3. November 2026; das Projekt wird also aktiv entwickelt, eine Warnung vor veralteten Projekten entfällt.',
          'Lizenz: MIT, der Quellcode liegt auf GitHub.',
          'Reichweite: Android funktioniert unter macOS, Linux und Windows; die iPhone-Steuerung braucht einen Mac.',
          'Kosten: Das Werkzeug ist kostenlos; die gehosteten Cloud-Telefone sind ein kostenpflichtiger Dienst.',
          'Grundlage: Website, Repository und PyPI-Eintrag des Herstellers, gelesen am 8. November 2026, ohne eigenen Test.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat Phone Harness weder installiert, getestet noch bewertet. Aussagen zu Verhalten, Zuverlässigkeit und Datenschutz stammen vom Hersteller.',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: 'Was ist Phone Harness?',
        content: [
          '**Phone Harness ist ein Kommandozeilen-„Harness“, mit dem ein KI-Agent ein Telefon so bedient wie ein Mensch: Er tippt, gibt Text ein, scrollt und liest den Bildschirm, laut README ohne Jailbreak, ohne Xcode und ohne etwas auf dem Telefon zu installieren.** Veröffentlicht wird es von Phone Harness Inc.; laut Startseite wird das Unternehmen von Y Combinator unterstützt. Das Repository wurde zuerst unter dem GitHub-Nutzer ShawnPana veröffentlicht und liegt jetzt in der Organisation phone-harness.',
          'Der Agent leitet kurze Python-Skripte an den Befehl phone-harness weiter und nutzt Helfer wie App öffnen, Text antippen, Text eingeben und Bildschirm lesen. Auf einem iPhone erfasst es das iPhone-Mirroring-Fenster auf einem Mac, liest es mit Apple-Vision-OCR und sendet Eingaben als Ereignisse; auf Android nutzt es adb für Screenshots und Eingaben sowie den Bedienungshilfen-Baum für Text, per USB oder WLAN. Dieselben Helfer steuern ein gehostetes Cloud-Telefon, sodass ein für ein Telefon geschriebenes Skript auch auf den anderen läuft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Phone Harness wird mit einem Befehl im Terminal installiert: `uv tool install --python 3.12 --upgrade --force phone-harness`.** Der Hersteller empfiehlt, den Einrichtungs-Prompt an Ihren Coding-Agent zu schicken; dieser installiert die CLI, fragt, welches Telefon genutzt werden soll, und führt Sie durch die Schritte, die Ihre Hände brauchen.',
        ],
        columns: ['Kanal', 'Link'],
        rows: [
          { 'Kanal': 'Website', 'Link': '[phone-harness.com](https://phone-harness.com)' },
          { 'Kanal': 'Dokumentation', 'Link': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { 'Kanal': 'Datenschutzerklärung', 'Link': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { 'Kanal': 'Quellcode (MIT)', 'Link': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { 'Kanal': 'PyPI-Paket', 'Link': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { 'Kanal': 'Cloud-Telefone', 'Link': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: 'Geprüfte Version: 0.3.3, am 2. November 2026 auf PyPI hochgeladen und auf GitHub veröffentlicht; das jüngste Upstream-Update zum Prüfzeitpunkt war ein Code-Push am 3. November 2026. Ein Terminal und eine Entwicklerumgebung (uv, Python 3.12) sind nötig: Es gibt weder ein Installationsprogramm noch einen App-Store- oder Google-Play-Eintrag, und die GitHub-Releases enthalten keine herunterladbaren Dateien.',
      },
      requirements: {
        id: 'requirements',
        title: 'Was Sie benötigen',
        content: [
          '**Was das Telefon braucht, hängt vom gewählten Modus ab; README und Installationsanleitung nennen vier.**',
        ],
        columns: ['Telefon', 'Voraussetzungen'],
        rows: [
          { 'Telefon': 'Ihr iPhone', 'Voraussetzungen': 'macOS 15+, iPhone Mirroring, iOS-18+-Telefon' },
          { 'Telefon': 'Ihr Android', 'Voraussetzungen': 'adb und USB-Debugging; macOS, Linux oder Windows' },
          { 'Telefon': 'Cloud-Android', 'Voraussetzungen': 'Konto, adb, ausgehendes TCP zum Telefon' },
          { 'Telefon': 'Cloud-iPhone', 'Voraussetzungen': 'Konto; Steuerung per HTTPS von jedem Betriebssystem' },
        ],
        note: 'Für ein iPhone am eigenen Mac sind zusätzlich die Berechtigungen Bedienungshilfen und Bildschirmaufnahme nötig, und das Paket selbst akzeptiert Python 3.10 oder neuer. Ein eingebauter Doctor-Befehl prüft die Einrichtung.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preis',
        content: [
          '**Das Kommandozeilenwerkzeug ist unter der MIT-Lizenz kostenlos; Phone Harness Cloud ist der kostenpflichtige Teil, mit Android nach Minuten oder im Abonnement und iPhones im monatlichen Pauschalabonnement.** Die Seite kennzeichnet den Cloud-Dienst als „Open beta“.',
        ],
        columns: ['Tarif', 'Preis (USD)'],
        rows: [
          { 'Tarif': 'Basic (Cloud-Android)', 'Preis (USD)': '$0/Monat + 5¢ pro Telefonminute' },
          { 'Tarif': 'Plus (Cloud-Android)', 'Preis (USD)': '$20/Monat inkl. 1.000 Min., danach 4¢/Min.' },
          { 'Tarif': 'Cloud-iPhone', 'Preis (USD)': '$80/Monat oder $64/Monat bei Jahresabrechnung' },
          { 'Tarif': 'Cloud-iPhone mit eSIM', 'Preis (USD)': '$100/Monat oder $80/Monat bei Jahresabrechnung' },
          { 'Tarif': 'Scale (dedizierte Telefone)', 'Preis (USD)': 'Hersteller kontaktieren' },
        ],
        note: 'Am 8. November 2026 von phone-harness.com gelesen. Die Seite nennt Preise nur in US-Dollar; sie werden vom Hersteller festgelegt und können sich ändern. Neue Konten starten laut Startseite mit $5 Guthaben.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von der Website des Herstellers oder aus der README des Repositorys.**',
        ],
        items: [
          '**Ein Satz Helfer für jedes Telefon.** Ein Skript für ein iPhone, ein Android oder ein Cloud-Telefon läuft auch auf den anderen, und das Standardtelefon wird per Konfigurationseinstellung gewählt.',
          '**Agent-Integrationen.** Der Einrichtungs-Prompt zielt auf Claude Code und Codex; ein gehosteter MCP-Endpunkt bedient jeden MCP-Client (vorerst nur Cloud-Telefone), und für Hermes Agent und OpenClaw gibt es Plugins.',
          '**Selbst erweiterbare Helfer.** Der Agent speichert selbst geschriebene Helfer in einem Arbeitsordner in Ihrem Home-Verzeichnis, den Upgrades nicht löschen.',
          '**Cloud-Telefone.** Temporäre Android-Telefone, gespeicherte Android-Telefone mit erhaltenen Apps und Anmeldungen sowie dedizierte echte iPhones, mit Live-Ansicht im Browser, während der Agent arbeitet.',
          '**Cloud-Extras laut Website.** Echte Telefonnummern für SMS und Zwei-Faktor-Codes, dauerhafte Anmeldungen und „Stealth“, damit Apps eine Person sehen; PromptQuorum hat dies nicht geprüft; das Automatisieren fremder Apps kann gegen deren Nutzungsbedingungen verstoßen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenverarbeitung',
        content: [
          '**Die Datenschutzerklärung (zuletzt aktualisiert am 3. November 2026) gilt für phone-harness.com und Phone Harness Cloud und besagt, dass bei Nutzung eines Cloud-Telefons durch Sie oder Ihren Agent die Aktivität automatisch protokolliert wird: Befehle und ihre Eingaben, eingegebener Text, Antippen, genutzte Apps und Seiten sowie Sitzungsdetails.** Als Zwecke werden Betrieb, Absicherung und Verbesserung des Dienstes sowie Missbrauchsabwehr genannt. Außerdem erhebt der Dienst Name und E-Mail-Adresse aus der Anmeldung, Abrechnungsdaten und Sitzungsprotokolle; Kartendaten gehen an Stripe.',
          'Die Erklärung nennt Clerk (Anmeldung), Stripe (Zahlungen), Amazon Web Services (Hosting in den USA), Vercel, PostHog (Analyse, nur mit Einwilligung) und Loops (E-Mail) als eingesetzte Dienstleister. Temporäre Android-Telefone werden am Ende der Sitzung gelöscht; gespeicherte Android-Telefone und Cloud-iPhones behalten Apps, Anmeldungen und Dateien, bis Sie sie zurücksetzen, und ein Cloud-iPhone wird innerhalb von 7 Tagen nach Ende des Abonnements gelöscht. Die README ergänzt, dass die CLI einen einzeiligen Hinweis ausgibt, wenn eine neue Version vorliegt, den eine Umgebungsvariable abschaltet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Aussagen des Herstellers. PromptQuorum hat weder den Dienst noch den Netzwerkverkehr der CLI geprüft, und die Erklärung beschreibt die Website und den Cloud-Dienst, nicht ein Telefon, das Sie selbst anschließen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**Entwickler, die bereits einen Coding-Agent nutzen** und ihn ein echtes Telefon bedienen lassen möchten.',
          '**Mac-Besitzer, die das iPhone steuern möchten,** wofür laut README weder Jailbreak noch eine App auf dem Telefon nötig ist.',
          '**Teams, die viele Telefone brauchen** und mit einer gehosteten, kostenpflichtigen Cloud einverstanden sind.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Grenzen und was wir nicht prüfen konnten',
        items: [
          '**Grenzen laut README.** Das Entsperren eines iPhones pausiert die Spiegelung, ein per PIN gesperrtes Android braucht Sie, OCR erkennt Text, aber keine Symbole, es gibt keine Multi-Touch-, Kamera- oder Face-ID-Unterstützung, DRM-Videos erscheinen schwarz, und das Verbinden des Telefons bleibt immer Ihre Aufgabe.',
          '**Zuverlässigkeit in der Praxis.** PromptQuorum hat Phone Harness nicht ausgeführt, und die Quellen nennen keine Benchmark- oder Erfolgsquoten.',
          '**Lokale Modelle.** Die Quellen nennen Claude Code, Codex und „any agent“, sagen aber nicht, ob ein lokales Modell, etwa über Ollama, es steuern kann.',
          '**Cloud-Aussagen.** Stealth, echte Telefonnummern, die Unterstützung durch Y Combinator und der Open-Beta-Dienst wurden nur den eigenen Seiten des Herstellers entnommen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Konkurrenten und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[PhoneClaw](/de/power-local-llm/phoneclaw-review)', 'Plattformen': 'macOS', 'Preis / Lizenz': 'Kostenlos / Apache-2.0', 'Wichtigster Unterschied': 'macOS-App, mit der ein KI-Agent Ihr Telefon steuern und automatisieren kann' },
          { 'App': '[Open Interpreter](/de/power-local-llm/open-interpreter-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Kostenlos / Apache-2.0', 'Wichtigster Unterschied': 'Lässt ein lokales LLM Ihren Computer steuern und Code ausführen, kein Telefon' },
          { 'App': '[Local Operator](/de/power-local-llm/local-operator-review)', 'Plattformen': 'macOS, Windows, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Desktop-Agent, der auf Ihrem Computer Code schreibt und ausführt, mit lokalem oder gehostetem Modell' },
        ],
        note: 'Details der Konkurrenten ändern sich oft; prüfen Sie aktuellen Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Muss ich das iPhone jailbreaken oder eine App darauf installieren?',
            a: 'Nein, laut README. Ein iPhone wird über das iPhone-Mirroring-Fenster auf einem Mac gesteuert, sodass nichts auf dem Telefon installiert wird.',
          },
          {
            q: 'Wie aktualisiere ich Phone Harness?',
            a: 'Führen Sie den Update-Befehl aus. Die CLI gibt außerdem eine Zeile aus, wenn eine neuere Version vorliegt; mit PHONE_HARNESS_NO_UPDATE_CHECK=1 schalten Sie diesen Hinweis ab.',
          },
          {
            q: 'Wo landen die Helfer, die mein Agent schreibt?',
            a: 'In ~/.phone-harness/agent-workspace, außerhalb der Installation, sodass ein Upgrade sie behält; ein vorhandener Arbeitsordner bleibt unangetastet.',
          },
          {
            q: 'Warum leitet der Repository-Link weiter?',
            a: 'Es wurde zuerst als ShawnPana/phone-harness veröffentlicht und liegt jetzt unter phone-harness/phone-harness; die alte Adresse leitet weiter.',
          },
          {
            q: 'Wie lange dauert eine Cloud-Sitzung?',
            a: 'Laut README startet der Start-Befehl standardmäßig eine Sitzung von 15 Minuten, einstellbar über ein Dauer-Flag, und der Stopp-Befehl beendet sie und schreibt ein gespeichertes Android zurück.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Phone Harness ist ein kostenloses, MIT-lizenziertes Werkzeug, das laut Hersteller einem Coding-Agent echtes Antippen, Texteingabe und Bildschirmlesen auf einem iPhone oder Android-Telefon gibt, ohne Jailbreak und ohne etwas auf dem Telefon zu installieren, dazu kostenpflichtige gehostete Telefone. Es wurde wenige Tage vor dieser Prüfung aktualisiert und hat eine veröffentlichte Datenschutzerklärung. Dagegen ist das Projekt mit Version 0.3.3 jünger als drei Monate, die iPhone-Steuerung braucht einen Mac, OCR übersieht Symbole ohne Beschriftung, der Cloud-Dienst protokolliert Telefonaktivität nach eigener Angabe, und jede Verhaltensangabe stammt vom Hersteller. Es eignet sich für Entwickler, die bereits einen Coding-Agent einsetzen und Telefonzugriff wollen; wer einen anderen Ansatz sucht, kann [PhoneClaw](/de/power-local-llm/phoneclaw-review) oder [Open Interpreter](/de/power-local-llm/open-interpreter-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Phone Harness](https://phone-harness.com) — Startseite des Herstellers: Beschreibung, Cloud-Tarife und Preise, geprüft am 8. November 2026.',
          '[Datenschutzerklärung von Phone Harness](https://phone-harness.com/privacy) und [Dokumentation](https://phone-harness.com/docs) — Datenverarbeitung, Auftragsverarbeiter und Speicherung auf dem Telefon.',
          '[phone-harness auf GitHub](https://github.com/phone-harness/phone-harness) — README, Installationsanleitung, MIT-Lizenz, Release- und Push-Daten.',
          '[phone-harness auf PyPI](https://pypi.org/project/phone-harness/) — Version 0.3.3 und Upload-Datum.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PhoneClaw-Rezension](/de/power-local-llm/phoneclaw-review) — eine macOS-App, mit der ein KI-Agent ein Telefon steuern kann.',
          '[Open-Interpreter-Rezension](/de/power-local-llm/open-interpreter-review) — ein Werkzeug, mit dem ein lokales LLM Ihren Computer steuert.',
          '[Local-Operator-Rezension](/de/power-local-llm/local-operator-review) — ein Desktop-Agent, der Code schreibt und ausführt.',
          '[Lokale LLMs für Code und Entwicklung im Vergleich](/de/power-local-llm/local-llm-code-development-compared) — der Kategorievergleich für Coding- und Agent-Werkzeuge.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-fr.webp',
    title: 'Avis Phone Harness : laisser un agent de code utiliser votre iPhone ou téléphone Android',
    seoTitle: 'Avis Phone Harness : un agent pilote iPhone et Android',
    intro:
      'Phone Harness est un outil en ligne de commande sous licence MIT, édité par Phone Harness Inc., qui permet, selon ses propres pages, à un agent de code comme Claude Code ou Codex de toucher, saisir du texte et faire défiler l\'écran d\'un vrai iPhone ou téléphone Android, avec des téléphones cloud hébergés en option. Cet avis reflète le site, la politique de confidentialité, le dépôt et la fiche PyPI de l\'éditeur, tels que consultés le 8 novembre 2026.',
    metaDescription:
      'Avis Phone Harness : CLI open source qui permet à un agent de code de piloter un iPhone ou un Android. Installation, prix du cloud, confidentialité.',
    twitterDescription:
      'Avis Phone Harness : un CLI sous licence MIT pour piloter un vrai iPhone ou téléphone Android depuis un agent de code. Prérequis, prix du cloud, points non vérifiés.',
    audience:
      'Développeurs qui utilisent un agent de code et souhaitent savoir ce que requiert Phone Harness, combien coûtent ses téléphones cloud, ce que dit sa politique de confidentialité et quelles affirmations les sources laissent non confirmées.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis Phone Harness',
    targetKeywords: [
      'avis phone harness',
      'phone-harness',
      'agent ia contrôler iphone',
      'agent ia contrôler android adb',
      'automatisation téléphone claude code',
      'iphone mirroring agent ia',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**Phone Harness (version 0.3.3, publiée le 2 novembre 2026) est un outil en ligne de commande gratuit sous licence MIT qui, selon son éditeur, permet à un agent de code comme Claude Code ou Codex de lire et de piloter un vrai iPhone ou téléphone Android, complété par un service cloud payant de téléphones hébergés.** Chaque affirmation sur le comportement et la confidentialité dans cet avis provient des pages et du dépôt de l\'éditeur ; PromptQuorum ne l\'a ni installé ni testé.',
    quickAnswerTop: {
      fr: {
        question: 'De quoi ai-je besoin pour utiliser Phone Harness ?',
        answer:
          'D\'un ordinateur avec uv et Python 3.12, plus un téléphone. Un iPhone exige macOS 15 ou plus récent avec iPhone Mirroring ; un Android exige adb avec le débogage USB sous macOS, Linux ou Windows ; un téléphone cloud demande seulement un compte.',
        bullets: [
          'Lit l\'écran avec l\'OCR Apple Vision sur iPhone et l\'arbre d\'accessibilité sur Android.',
          'Se connecte à tout client MCP, avec des plugins pour Hermes Agent et OpenClaw.',
          'Propose des téléphones Android et iPhone hébergés comme service payant distinct.',
          'Ne gère ni le multitouch, ni la caméra, ni Face ID, et l\'OCR voit le texte mais pas les icônes.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Phone Harness ?', anchor: 'what-is-phone-harness' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et traitement des données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Limites et points non vérifiés', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
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
            text: 'Phone Harness est un outil open source en ligne de commande qui donne à un agent de code la possibilité de toucher, saisir du texte et lire l\'écran d\'un vrai iPhone ou téléphone Android.',
          },
          {
            type: 'plain-terms',
            text: 'Votre agent écrit de courts scripts, par exemple ouvrir une appli, toucher un mot, saisir du texte ; Phone Harness les transforme en vrais appuis et indique ce qui s\'affiche à l\'écran.',
          },
        ],
        items: [
          'Maintenance : le dépôt a été créé le 7 août 2026, la version 0.3.3 a suivi le 2 novembre et le dernier push de code date du 3 novembre 2026 ; le projet est donc activement développé et aucun avertissement de projet délaissé ne s\'applique.',
          'Licence : MIT, avec le code source sur GitHub.',
          'Portée : Android fonctionne sous macOS, Linux et Windows ; le pilotage d\'un iPhone exige un Mac.',
          'Coût : l\'outil est gratuit ; les téléphones cloud hébergés sont un service payant.',
          'Base : le site, le dépôt et la fiche PyPI de l\'éditeur, lus le 8 novembre 2026, sans test pratique.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n\'a ni installé, ni testé, ni évalué Phone Harness. Les affirmations ci-dessous sur le comportement, la fiabilité et la confidentialité sont celles de l\'éditeur.',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: 'Qu\'est-ce que Phone Harness ?',
        content: [
          '**Phone Harness est un « harnais » en ligne de commande qui permet à un agent IA d\'utiliser un téléphone comme le ferait une personne : il touche, saisit, fait défiler et lit l\'écran, sans jailbreak, sans Xcode et sans rien installer sur le téléphone, selon le README.** Il est publié par Phone Harness Inc., dont la page d\'accueil indique qu\'elle est soutenue par Y Combinator. Le dépôt a d\'abord été publié sous l\'utilisateur GitHub ShawnPana et se trouve désormais dans l\'organisation phone-harness.',
          'L\'agent envoie de courts scripts Python à la commande phone-harness, avec des fonctions d\'aide pour ouvrir une appli, toucher du texte, saisir du texte et lire l\'écran. Sur un iPhone, l\'outil capture la fenêtre iPhone Mirroring sur un Mac, la lit avec l\'OCR Apple Vision et envoie les actions sous forme d\'événements ; sur Android, il utilise adb pour les captures d\'écran et la saisie, et l\'arbre d\'accessibilité pour le texte, en USB ou en Wi-Fi. Les mêmes fonctions pilotent un téléphone cloud hébergé : un script écrit pour un téléphone fonctionne donc sur les autres.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Phone Harness s\'installe depuis le terminal avec une seule commande : `uv tool install --python 3.12 --upgrade --force phone-harness`.** La voie recommandée par l\'éditeur consiste à envoyer son prompt d\'installation à votre agent de code, qui installe le CLI, demande quel téléphone utiliser et vous guide dans les étapes qui nécessitent vos mains.',
        ],
        columns: ['Canal', 'Lien'],
        rows: [
          { 'Canal': 'Site web', 'Lien': '[phone-harness.com](https://phone-harness.com)' },
          { 'Canal': 'Documentation', 'Lien': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { 'Canal': 'Politique de confidentialité', 'Lien': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { 'Canal': 'Code source (MIT)', 'Lien': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { 'Canal': 'Paquet PyPI', 'Lien': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { 'Canal': 'Téléphones cloud', 'Lien': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: 'Version examinée : 0.3.3, mise en ligne sur PyPI et publiée sur GitHub le 2 novembre 2026 ; la dernière mise à jour en amont au moment de la vérification était un push de code le 3 novembre 2026. Un terminal et un environnement de développement (uv, Python 3.12) sont nécessaires : il n\'existe ni installeur, ni fiche App Store ou Google Play, et les versions GitHub ne contiennent aucun fichier à télécharger.',
      },
      requirements: {
        id: 'requirements',
        title: 'Prérequis',
        content: [
          '**Ce dont le téléphone a besoin dépend du mode choisi ; le README et le guide d\'installation en listent quatre.**',
        ],
        columns: ['Téléphone', 'Prérequis'],
        rows: [
          { 'Téléphone': 'Votre iPhone', 'Prérequis': 'macOS 15+, iPhone Mirroring, iPhone iOS 18+' },
          { 'Téléphone': 'Votre Android', 'Prérequis': 'adb et débogage USB ; macOS, Linux ou Windows' },
          { 'Téléphone': 'Android cloud', 'Prérequis': 'Compte, adb, TCP sortant vers le téléphone' },
          { 'Téléphone': 'iPhone cloud', 'Prérequis': 'Compte ; piloté en HTTPS depuis tout OS' },
        ],
        note: 'Pour un iPhone sur votre propre Mac, les autorisations Accessibilité et Enregistrement de l\'écran sont également requises, et le paquet lui-même accepte Python 3.10 ou plus récent. Une commande doctor intégrée vérifie la configuration.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**L\'outil en ligne de commande est gratuit sous licence MIT ; Phone Harness Cloud est la partie payante, avec Android facturé à la minute ou par abonnement et les iPhone en abonnement mensuel forfaitaire.** Le site indique « Open beta » pour le service cloud.',
        ],
        columns: ['Offre', 'Prix (USD)'],
        rows: [
          { 'Offre': 'Basic (Android cloud)', 'Prix (USD)': '$0/mois + 5¢ par minute de téléphone' },
          { 'Offre': 'Plus (Android cloud)', 'Prix (USD)': '$20/mois, 1,000 min incluses, puis 4¢/min' },
          { 'Offre': 'iPhone cloud', 'Prix (USD)': '$80/mois, ou $64/mois facturé annuellement' },
          { 'Offre': 'iPhone cloud avec eSIM', 'Prix (USD)': '$100/mois, ou $80/mois facturé annuellement' },
          { 'Offre': 'Scale (téléphones dédiés)', 'Prix (USD)': 'Contacter l\'éditeur' },
        ],
        note: 'Relevé sur phone-harness.com le 8 novembre 2026. Le site n\'indique les prix qu\'en dollars américains ; ils sont fixés par l\'éditeur et peuvent changer. Les nouveaux comptes démarrent avec $5 de crédit, selon la page d\'accueil.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du site de l\'éditeur ou du README du dépôt.**',
        ],
        items: [
          '**Un seul jeu de fonctions pour tous les téléphones.** Un script écrit pour un iPhone, un Android ou un téléphone cloud fonctionne sur les autres, et le téléphone par défaut se choisit via un paramètre de configuration.',
          '**Intégrations d\'agents.** Le prompt d\'installation cible Claude Code et Codex ; un point d\'accès MCP hébergé sert tout client MCP (téléphones cloud uniquement pour l\'instant), et des plugins existent pour Hermes Agent et OpenClaw.',
          '**Fonctions d\'aide extensibles.** L\'agent enregistre les fonctions qu\'il écrit dans un dossier de travail de votre répertoire personnel, que les mises à jour n\'effacent pas.',
          '**Téléphones cloud.** Téléphones Android temporaires, téléphones Android enregistrés qui conservent applis et connexions, et vrais iPhone dédiés, avec une vue en direct dans le navigateur pendant que l\'agent travaille.',
          '**Options cloud annoncées par le site.** Vrais numéros de téléphone pour les SMS et les codes à deux facteurs, connexions persistantes et « stealth » pour que les applis voient une personne ; PromptQuorum ne l\'a pas vérifié, et automatiser d\'autres applis peut entrer en conflit avec leurs conditions d\'utilisation.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et traitement des données',
        content: [
          '**La politique de confidentialité (dernière mise à jour le 3 novembre 2026) couvre phone-harness.com et Phone Harness Cloud, et indique que lorsque vous ou votre agent utilisez un téléphone cloud, l\'activité est journalisée automatiquement : commandes et leurs entrées, texte saisi, appuis, applis et pages utilisées, et détails de session.** Les finalités annoncées sont l\'exploitation, la sécurisation et l\'amélioration du service ainsi que la prévention des abus. Elle collecte aussi votre nom et votre e-mail à la connexion, les données de facturation et les journaux de session ; les données de carte vont à Stripe.',
          'La politique cite Clerk (connexion), Stripe (paiements), Amazon Web Services (hébergement aux États-Unis), Vercel, PostHog (analyse d\'audience, uniquement avec consentement) et Loops (e-mail) comme prestataires utilisés. Les téléphones Android temporaires sont effacés à la fin de la session ; les téléphones Android enregistrés et les iPhone cloud conservent applis, connexions et fichiers jusqu\'à leur réinitialisation, et un iPhone cloud est effacé dans les 7 jours suivant la fin de l\'abonnement. Le README ajoute que le CLI affiche une ligne d\'avis lorsqu\'une nouvelle version existe, ce qu\'une variable d\'environnement désactive.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l\'éditeur. PromptQuorum n\'a audité ni le service ni le trafic réseau du CLI, et la politique décrit le site web et le service cloud, pas un téléphone que vous connectez vous-même.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        items: [
          '**Développeurs qui utilisent déjà un agent de code** et veulent qu\'il pilote un vrai téléphone.',
          '**Propriétaires de Mac qui veulent piloter un iPhone,** ce qui, selon le README, ne demande ni jailbreak ni appli sur le téléphone.',
          '**Équipes ayant besoin de nombreux téléphones** et à l\'aise avec un cloud hébergé et payant.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites et points non vérifiés',
        items: [
          '**Limites indiquées par le README.** Déverrouiller un iPhone met la recopie en pause, un Android verrouillé par code PIN exige votre intervention, l\'OCR voit le texte mais pas les icônes, le multitouch, la caméra et Face ID ne sont pas pris en charge, les vidéos protégées par DRM s\'affichent en noir et la connexion du téléphone reste toujours à votre charge.',
          '**Fiabilité en pratique.** PromptQuorum n\'a pas exécuté Phone Harness, et les sources ne publient ni benchmark ni taux de réussite.',
          '**Modèles locaux.** Les sources citent Claude Code, Codex et « tout agent » mais ne précisent pas si un modèle local, par exemple via Ollama, peut le piloter.',
          '**Affirmations sur le cloud.** Le stealth, les vrais numéros de téléphone, le soutien de Y Combinator et le service en open beta ont été lus uniquement sur les pages de l\'éditeur.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Appli': '[PhoneClaw](/fr/power-local-llm/phoneclaw-review)', 'Plateformes': 'macOS', 'Prix / licence': 'Gratuit / Apache-2.0', 'Différence clé': 'Appli macOS qui permet à un agent IA de contrôler et d\'automatiser votre téléphone' },
          { 'Appli': '[Open Interpreter](/fr/power-local-llm/open-interpreter-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Gratuit / Apache-2.0', 'Différence clé': 'Permet à un LLM local de contrôler votre ordinateur et d\'exécuter du code, pas un téléphone' },
          { 'Appli': '[Local Operator](/fr/power-local-llm/local-operator-review)', 'Plateformes': 'macOS, Windows, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Agent de bureau qui écrit et exécute du code sur votre ordinateur, avec un modèle local ou hébergé' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Dois-je faire un jailbreak de l\'iPhone ou y installer une appli ?',
            a: 'Non, selon le README. Un iPhone est piloté via la fenêtre iPhone Mirroring sur un Mac, donc rien n\'est installé sur le téléphone.',
          },
          {
            q: 'Comment mettre à jour Phone Harness ?',
            a: 'Lancez sa commande update. Le CLI affiche aussi une ligne lorsqu\'une version plus récente existe ; définir PHONE_HARNESS_NO_UPDATE_CHECK=1 supprime cet avis.',
          },
          {
            q: 'Où se retrouvent les fonctions d\'aide écrites par mon agent ?',
            a: 'Dans ~/.phone-harness/agent-workspace, en dehors de l\'installation, de sorte qu\'une mise à jour les conserve ; un espace de travail existant n\'est pas modifié.',
          },
          {
            q: 'Pourquoi le lien du dépôt redirige-t-il ?',
            a: 'Il a d\'abord été publié sous ShawnPana/phone-harness et se trouve désormais à phone-harness/phone-harness ; l\'ancienne adresse redirige.',
          },
          {
            q: 'Combien de temps dure une session cloud ?',
            a: 'Le README indique que la commande de démarrage lance une session de 15 minutes par défaut, réglable avec une option de durée, et que la commande d\'arrêt y met fin en réécrivant un Android enregistré.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Phone Harness est un outil gratuit sous licence MIT qui, selon son éditeur, donne à un agent de code de vrais appuis, la saisie et la lecture de l\'écran sur un iPhone ou un téléphone Android, sans jailbreak et sans rien installer sur le téléphone, avec en plus des téléphones hébergés payants. Il a été mis à jour quelques jours avant cette vérification et dispose d\'une politique de confidentialité publiée. En revanche, le projet a moins de trois mois en version 0.3.3, le pilotage d\'un iPhone exige un Mac, l\'OCR rate les icônes sans libellé, le service cloud journalise l\'activité du téléphone selon ses propres termes et chaque affirmation sur le comportement vient de l\'éditeur. Il convient aux développeurs qui pilotent déjà un agent de code et veulent un accès au téléphone ; ceux qui préfèrent une autre approche peuvent comparer [PhoneClaw](/fr/power-local-llm/phoneclaw-review) ou [Open Interpreter](/fr/power-local-llm/open-interpreter-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Phone Harness](https://phone-harness.com) — page d\'accueil de l\'éditeur : description, offres cloud et prix, consultée le 8 novembre 2026.',
          '[Politique de confidentialité de Phone Harness](https://phone-harness.com/privacy) et [documentation](https://phone-harness.com/docs) — traitement des données, sous-traitants et conservation sur les téléphones.',
          '[phone-harness sur GitHub](https://github.com/phone-harness/phone-harness) — README, guide d\'installation, licence MIT, dates de version et de push.',
          '[phone-harness sur PyPI](https://pypi.org/project/phone-harness/) — version 0.3.3 et date de mise en ligne.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis PhoneClaw](/fr/power-local-llm/phoneclaw-review) — une appli macOS pour laisser un agent IA contrôler un téléphone.',
          '[Avis Open Interpreter](/fr/power-local-llm/open-interpreter-review) — un outil qui permet à un LLM local de contrôler votre ordinateur.',
          '[Avis Local Operator](/fr/power-local-llm/local-operator-review) — un agent de bureau qui écrit et exécute du code.',
          '[Local LLM Code & Development Compared](/fr/power-local-llm/local-llm-code-development-compared) — la comparaison de catégorie pour les outils de code et d\'agents.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-ja.webp',
    title: 'Phone Harness レビュー:コーディングエージェントでiPhoneやAndroidを操作する',
    seoTitle: 'Phone Harness レビュー:iPhone・Android操作',
    intro:
      'Phone Harnessは、Phone Harness Inc.が公開しているMITライセンスのコマンドラインツールです。公式ページによると、Claude CodeやCodexなどのコーディングエージェントが実機のiPhoneやAndroidをタップ・入力・スクロールでき、ホスト型のクラウドフォンも任意で利用できます。このレビューは、2026年11月8日に確認した提供元のサイト、プライバシーポリシー、リポジトリ、PyPIの掲載内容に基づいています。',
    metaDescription:
      'Phone Harnessのレビュー。コーディングエージェントでiPhoneやAndroidを操作できるオープンソースCLI。セットアップ、クラウド料金、プライバシーポリシー、未確認点を解説。',
    twitterDescription:
      'Phone Harnessのレビュー。コーディングエージェントから実機のiPhoneやAndroidを操作するMITライセンスのCLI。必要環境、クラウド料金、未確認の点をまとめました。',
    audience:
      'コーディングエージェントを使っていて、Phone Harnessに何が必要か、クラウドフォンの料金、プライバシーポリシーの内容、情報源で確認できていない点を知りたい開発者の方。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Phone Harness レビュー',
    targetKeywords: [
      'phone harness レビュー',
      'phone-harness',
      'AIエージェント iPhone 操作',
      'AIエージェント Android adb 操作',
      'claude code スマホ 自動化',
      'iphone mirroring AIエージェント',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**Phone Harness(バージョン0.3.3、2026年11月2日リリース)は、提供元によると、Claude CodeやCodexなどのコーディングエージェントが実機のiPhoneやAndroidを読み取り・操作できる、無料のMITライセンスのコマンドラインツールです。ホスト型の電話を提供する有料のクラウドサービスも別にあります。** このレビューの動作やプライバシーに関する記述はすべて提供元のページとリポジトリに基づくもので、PromptQuorumはインストールも検証も行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Phone Harnessを動かすには何が必要ですか?',
        answer:
          'uvとPython 3.12が入ったコンピューターと、スマートフォンが必要です。iPhoneにはiPhoneミラーリングを使えるmacOS 15以降が、AndroidにはmacOS・Linux・WindowsのいずれかでUSBデバッグを有効にしたadbが必要です。クラウドフォンならアカウントだけで利用できます。',
        bullets: [
          '画面の読み取りは、iPhoneではApple VisionのOCR、Androidではアクセシビリティツリーを使います。',
          '任意のMCPクライアントに接続でき、Hermes AgentとOpenClaw向けのプラグインもあります。',
          'ホスト型のAndroidとiPhoneは、別の有料サービスとして提供されています。',
          'マルチタッチ、カメラ、Face IDを使う操作はできず、OCRは文字を読めてもアイコンは読めません。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'クイック回答', anchor: 'quick-answer' },
      { label: 'Phone Harnessとは?', anchor: 'what-is-phone-harness' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '必要な環境', anchor: 'requirements' },
      { label: '料金', anchor: 'pricing' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'プライバシーとデータの扱い', anchor: 'privacy' },
      { label: 'こんな方におすすめ', anchor: 'who-should-use' },
      { label: '制限事項と未確認の点', anchor: 'who-should-not-use' },
      { label: '競合と代替ツール', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
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
            text: 'Phone Harnessは、コーディングエージェントに実機のiPhoneやAndroidでのタップ、入力、画面の読み取りをさせるオープンソースのコマンドラインツールです。',
          },
          {
            type: 'plain-terms',
            text: 'エージェントが「アプリを開く」「文字をタップする」「テキストを入力する」といった短いスクリプトを書き、Phone Harnessがそれを実際のタッチ操作に変えて、画面に表示されている内容を返します。',
          },
        ],
        items: [
          'メンテナンス状況:リポジトリは2026年8月7日に作成され、11月2日にリリース0.3.3、11月3日に最新のコードプッシュがありました。活発に開発されており、更新停止の警告は該当しません。',
          'ライセンス:MIT。ソースコードはGitHubで公開されています。',
          '対応範囲:AndroidはmacOS・Linux・Windowsで動作し、iPhoneの操作にはMacが必要です。',
          '費用:ツール自体は無料で、ホスト型のクラウドフォンは有料サービスです。',
          '根拠:提供元のサイト、リポジトリ、PyPIの掲載内容を2026年11月8日に確認したもので、実機での検証は行っていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはPhone Harnessをインストール、検証、ベンチマークしていません。以下の動作、信頼性、プライバシーに関する記述は提供元の説明です。',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: 'Phone Harnessとは?',
        content: [
          '**Phone Harnessは、AIエージェントが人と同じようにスマートフォンを使えるようにするコマンドラインの「ハーネス」です。READMEによると、タップ、入力、スクロール、画面の読み取りができ、脱獄(ジェイルブレイク)もXcodeも不要で、スマートフォン側には何もインストールしません。** 提供元はPhone Harness Inc.で、ホームページにはY Combinatorの支援を受けていると記載されています。リポジトリは当初GitHubユーザーのShawnPanaのもとで公開され、現在はphone-harness組織に移っています。',
          'エージェントは、アプリを開く、テキストをタップする、テキストを入力する、画面を読み取るといったヘルパーを使った短いPythonスクリプトをphone-harnessコマンドに渡します。iPhoneではMac上のiPhoneミラーリングのウィンドウをキャプチャし、Apple VisionのOCRで読み取って、入力をイベントとして送ります。Androidでは、スクリーンショットと入力にadb、テキストの取得にアクセシビリティツリーを使い、USBまたはWi-Fiで接続します。同じヘルパーでホスト型のクラウドフォンも操作できるため、ある電話向けに書いたスクリプトは他の電話でも動きます。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Phone Harnessは、ターミナルで1つのコマンド `uv tool install --python 3.12 --upgrade --force phone-harness` を実行するだけでインストールできます。** 提供元が推奨するのは、セットアップ用プロンプトをコーディングエージェントに送る方法です。エージェントがCLIをインストールし、使う電話を尋ね、手作業が必要な手順を案内してくれます。',
        ],
        columns: ['入手先', 'リンク'],
        rows: [
          { '入手先': '公式サイト', 'リンク': '[phone-harness.com](https://phone-harness.com)' },
          { '入手先': 'ドキュメント', 'リンク': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { '入手先': 'プライバシーポリシー', 'リンク': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { '入手先': 'ソースコード(MIT)', 'リンク': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { '入手先': 'PyPIパッケージ', 'リンク': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { '入手先': 'クラウドフォン', 'リンク': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: '確認したバージョン:0.3.3。2026年11月2日にPyPIへアップロードされ、GitHubでリリースされました。確認時点での最新のアップストリーム更新は、2026年11月3日のコードプッシュです。ターミナルと開発者向けの環境(uv、Python 3.12)が必要です。インストーラー、App Store、Google Playの掲載はなく、GitHubのリリースにもダウンロード用ファイルは含まれていません。',
      },
      requirements: {
        id: 'requirements',
        title: '必要な環境',
        content: [
          '**電話に必要なものは選ぶモードによって異なり、READMEとインストールガイドには4つのモードが記載されています。**',
        ],
        columns: ['電話', '必要なもの'],
        rows: [
          { '電話': '手元のiPhone', '必要なもの': 'macOS 15以降、iPhoneミラーリング、iOS 18以降' },
          { '電話': '手元のAndroid', '必要なもの': 'adbとUSBデバッグ。macOS・Linux・Windows' },
          { '電話': 'クラウドAndroid', '必要なもの': 'アカウント、adb、電話への外向きTCP接続' },
          { '電話': 'クラウドiPhone', '必要なもの': 'アカウント。どのOSからでもHTTPSで操作' },
        ],
        note: '自分のMacでiPhoneを操作する場合は、アクセシビリティと画面収録の権限も必要です。パッケージ自体はPython 3.10以降を受け付けます。内蔵のdoctorコマンドでセットアップを確認できます。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**コマンドラインツールはMITライセンスで無料です。有料なのはPhone Harness Cloudの部分で、Androidは従量課金またはサブスクリプション、iPhoneは月額定額制です。** サイトでは、クラウドサービスに「Open beta」と表示されています。',
        ],
        columns: ['プラン', '料金(USD)'],
        rows: [
          { 'プラン': 'Basic(クラウドAndroid)', '料金(USD)': '$0/月 + 電話1分あたり5¢' },
          { 'プラン': 'Plus(クラウドAndroid)', '料金(USD)': '$20/月(1,000分込み)、超過後は4¢/分' },
          { 'プラン': 'クラウドiPhone', '料金(USD)': '$80/月、年払いは$64/月' },
          { 'プラン': 'eSIM付きクラウドiPhone', '料金(USD)': '$100/月、年払いは$80/月' },
          { 'プラン': 'Scale(専有の電話)', '料金(USD)': '提供元に問い合わせ' },
        ],
        note: '2026年11月8日にphone-harness.comで確認しました。サイトの価格は米ドル表記のみで、提供元が設定しており変更される可能性があります。ホームページによると、新規アカウントには$5分のクレジットが付与されます。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべて、提供元のサイトまたはリポジトリのREADMEに記載されている内容です。**',
        ],
        items: [
          '**すべての電話に共通のヘルパー。** iPhone、Android、クラウドフォンのどれ向けに書いたスクリプトも他の電話で動作し、既定の電話は設定で選べます。',
          '**エージェントとの連携。** セットアップ用プロンプトはClaude CodeとCodexが対象です。ホスト型のMCPエンドポイントが任意のMCPクライアントに対応し(現時点ではクラウドフォンのみ)、Hermes AgentとOpenClaw向けのプラグインもあります。',
          '**自己拡張するヘルパー。** エージェントが書いたヘルパーは、ホームディレクトリ内のワークスペースフォルダに保存され、アップグレードしても消えません。',
          '**クラウドフォン。** 一時的なAndroid、アプリやログインを保持する保存型Android、専有の実機iPhoneがあり、エージェントの作業中はブラウザでライブ表示できます。',
          '**サイトが掲げるクラウドの追加機能。** SMSや二要素認証コード用の実電話番号、ログインの保持、アプリから人に見える「ステルス」機能。PromptQuorumはこれらを確認していません。なお、他のアプリを自動操作すると、そのアプリの利用規約に抵触する場合があります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの扱い',
        content: [
          '**プライバシーポリシー(最終更新2026年11月3日)の対象はphone-harness.comとPhone Harness Cloudです。ユーザーまたはエージェントがクラウドフォンを使うと、コマンドとその入力、入力されたテキスト、タップ、使用したアプリやページ、セッションの詳細といった操作内容が自動的に記録されると説明されています。** 記録の目的は、サービスの運営、保護、改善と不正利用の防止とされています。このほか、サインイン時の氏名とメールアドレス、課金記録、セッションログも収集されます。カード情報はStripeに送られます。',
          'ポリシーでは、Clerk(サインイン)、Stripe(決済)、Amazon Web Services(米国でのホスティング)、Vercel、PostHog(分析。同意がある場合のみ)、Loops(メール)が利用サービスとして挙げられています。一時的なAndroidはセッション終了時に消去されます。保存型AndroidとクラウドiPhoneは、リセットするまでアプリ、ログイン、ファイルが残り、クラウドiPhoneはサブスクリプション終了後7日以内に消去されます。READMEによると、CLIは新しいバージョンがあると1行の通知を表示し、環境変数でオフにできます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の説明です。PromptQuorumはサービスもCLIのネットワーク通信も監査していません。また、ポリシーが説明しているのはウェブサイトとクラウドサービスであり、ユーザーが自分で接続した電話については述べていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'こんな方におすすめ',
        items: [
          '**すでにコーディングエージェントを使っている開発者**で、実機のスマートフォンを操作させたい方。',
          '**iPhoneを操作したいMacユーザー**で、脱獄もスマートフォン側のアプリも避けたい方。',
          '**多数の電話が必要なチーム**で、ホスト型の有料クラウドで問題ない方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '制限事項と未確認の点',
        items: [
          '**READMEが挙げる制限。** iPhoneのロックを解除するとミラーリングが一時停止すること、PINでロックされたAndroidはユーザーの操作が必要なこと、OCRは文字を読めてもアイコンは読めないこと、マルチタッチ、カメラ、Face IDには非対応であること、DRM動画は黒く表示されること、電話の接続は常にユーザーの作業であること。',
          '**実際の信頼性。** PromptQuorumはPhone Harnessを実行しておらず、情報源にベンチマークや成功率の数値は掲載されていません。',
          '**ローカルモデル。** 情報源にはClaude Code、Codex、「任意のエージェント」と記載されていますが、たとえばOllama経由のローカルモデルで操作できるかどうかは書かれていません。',
          '**クラウドに関する主張。** ステルス、実電話番号、Y Combinatorの支援、オープンベータのサービスは、提供元自身のページでのみ確認しています。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[PhoneClaw](/ja/power-local-llm/phoneclaw-review)', 'プラットフォーム': 'macOS', '価格 / ライセンス': '無料 / Apache-2.0', '主な違い': 'AIエージェントにスマートフォンの操作と自動化をさせるmacOSアプリ' },
          { 'アプリ': '[Open Interpreter](/ja/power-local-llm/open-interpreter-review)', 'プラットフォーム': 'macOS、Windows、Linux', '価格 / ライセンス': '無料 / Apache-2.0', '主な違い': 'ローカルLLMにコンピューターを操作させ、コードを実行させるもの。スマートフォンは対象外' },
          { 'アプリ': '[Local Operator](/ja/power-local-llm/local-operator-review)', 'プラットフォーム': 'macOS、Windows、Linux', '価格 / ライセンス': '無料 / MIT', '主な違い': 'ローカルまたはホスト型のモデルで、コンピューター上でコードを書いて実行するデスクトップエージェント' },
        ],
        note: '競合の情報は頻繁に変わります。各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'iPhoneを脱獄したり、アプリをインストールしたりする必要はありますか?',
            a: 'READMEによると、必要ありません。iPhoneはMac上のiPhoneミラーリングのウィンドウ経由で操作するため、スマートフォン側には何もインストールしません。',
          },
          {
            q: 'Phone Harnessはどうやって更新しますか?',
            a: '更新コマンドを実行します。新しいバージョンがあると、CLIが1行の通知を表示します。PHONE_HARNESS_NO_UPDATE_CHECK=1を設定すると、この通知は表示されなくなります。',
          },
          {
            q: 'エージェントが書いたヘルパーはどこに保存されますか?',
            a: 'インストール先とは別の ~/.phone-harness/agent-workspace に保存されるため、アップグレードしても残ります。既存のワークスペースには手を加えません。',
          },
          {
            q: 'なぜリポジトリのリンクがリダイレクトされるのですか?',
            a: '最初はShawnPana/phone-harnessとして公開され、現在はphone-harness/phone-harnessにあります。古いアドレスは新しいほうへ転送されます。',
          },
          {
            q: 'クラウドのセッションはどのくらい続きますか?',
            a: 'READMEによると、開始コマンドは既定で15分のセッションを実行し、時間指定のフラグで調整できます。停止コマンドで終了すると、保存型のAndroidは書き戻されます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Phone Harnessは、提供元によると、脱獄もスマートフォン側へのインストールも不要で、コーディングエージェントに実機のiPhoneやAndroidでのタップ、入力、画面の読み取りをさせる無料のMITライセンスのツールで、有料のホスト型電話も用意されています。確認の数日前に更新されており、プライバシーポリシーも公開されています。一方で、プロジェクトは公開から3か月未満でバージョンは0.3.3、iPhoneの操作にはMacが必要で、OCRはラベルのないアイコンを読めず、クラウドサービスは提供元自身の説明で電話の操作内容を記録し、動作に関する主張はすべて提供元によるものです。すでにコーディングエージェントを使っていて電話へのアクセスが欲しい開発者に向いています。別のアプローチを検討したい方は、[PhoneClaw](/ja/power-local-llm/phoneclaw-review)や[Open Interpreter](/ja/power-local-llm/open-interpreter-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Phone Harness](https://phone-harness.com) — 提供元のホームページ。説明、クラウドのプランと料金。2026年11月8日に確認。',
          '[Phone Harnessのプライバシーポリシー](https://phone-harness.com/privacy)と[ドキュメント](https://phone-harness.com/docs) — データの扱い、処理委託先、電話のデータ保持。',
          '[GitHubのphone-harness](https://github.com/phone-harness/phone-harness) — README、インストールガイド、MITライセンス、リリース日とプッシュ日。',
          '[PyPIのphone-harness](https://pypi.org/project/phone-harness/) — バージョン0.3.3とアップロード日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PhoneClawのレビュー](/ja/power-local-llm/phoneclaw-review) — AIエージェントにスマートフォンを操作させるmacOSアプリ。',
          '[Open Interpreterのレビュー](/ja/power-local-llm/open-interpreter-review) — ローカルLLMにコンピューターを操作させるツール。',
          '[Local Operatorのレビュー](/ja/power-local-llm/local-operator-review) — コードを書いて実行するデスクトップエージェント。',
          '[ローカルLLMのコード・開発ツール比較](/ja/power-local-llm/local-llm-code-development-compared) — コーディングおよびエージェントツールのカテゴリ比較。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-zh.webp',
    title: 'Phone Harness 评测：让编程智能体使用你的 iPhone 或 Android 手机',
    seoTitle: 'Phone Harness评测：让智能体操控iPhone与Android手机',
    intro:
      'Phone Harness 是 Phone Harness Inc. 推出的 MIT 许可命令行工具。据其官方页面介绍，它能让 Claude Code 或 Codex 等编程智能体点击、输入并滚动真实的 iPhone 或 Android 手机，并可选用托管的云手机。本评测依据 2026 年 11 月 8 日查阅的厂商网站、隐私政策、代码仓库和 PyPI 页面。',
    metaDescription:
      'Phone Harness评测：开源命令行工具，让编程智能体操作iPhone或Android手机。介绍安装要求、云端价格、隐私政策及未经证实的事项。',
    twitterDescription:
      'Phone Harness 评测：一款 MIT 许可的命令行工具，可让编程智能体操控真实的 iPhone 或 Android 手机。涵盖使用要求、云端价格及未经证实的内容。',
    audience:
      '正在使用编程智能体的开发者：想了解 Phone Harness 的使用要求、云手机价格、隐私政策内容，以及哪些说法在资料中尚未得到证实。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Phone Harness 评测',
    targetKeywords: [
      'phone harness 评测',
      'phone-harness',
      'ai 智能体控制 iphone',
      'ai 智能体控制 android adb',
      'claude code 手机自动化',
      'iphone 镜像 ai 智能体',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**Phone Harness（版本 0.3.3，2026 年 11 月 2 日发布）是一款免费的 MIT 许可命令行工具，据厂商称，它能让 Claude Code 或 Codex 等编程智能体读取并操作真实的 iPhone 或 Android 手机；另有付费的云服务提供托管手机。** 本评测中的所有行为和隐私说法均来自厂商自己的页面和代码仓库；PromptQuorum 未安装也未测试过它。',
    quickAnswerTop: {
      zh: {
        question: '运行 Phone Harness 需要什么？',
        answer:
          '一台装有 uv 和 Python 3.12 的电脑，外加一部手机。iPhone 需要 macOS 15 或更高版本并启用 iPhone 镜像；Android 需要在 macOS、Linux 或 Windows 上使用 adb 并开启 USB 调试；云手机只需一个账号。',
        bullets: [
          'iPhone 上用 Apple Vision OCR 读取屏幕，Android 上读取无障碍树。',
          '可连接任何 MCP 客户端，并提供 Hermes Agent 和 OpenClaw 插件。',
          '托管的 Android 和 iPhone 手机属于另一项付费服务。',
          '不支持多点触控、相机或 Face ID 流程，OCR 能识别文字但识别不了图标。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Phone Harness 是什么？', anchor: 'what-is-phone-harness' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '使用要求', anchor: 'requirements' },
      { label: '价格', anchor: 'pricing' },
      { label: '资料证实的功能', anchor: 'key-features' },
      { label: '隐私与数据处理', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '局限与我们无法验证的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phone Harness 是一款开源命令行工具，让编程智能体能在真实的 iPhone 或 Android 手机上点击、输入并读取屏幕。',
          },
          {
            type: 'plain-terms',
            text: '你的智能体编写简短脚本，例如打开应用、点击某个词、输入文字；Phone Harness 把它们变成真实触控，并回报屏幕上的内容。',
          },
        ],
        items: [
          '维护情况：代码仓库创建于 2026 年 8 月 7 日，0.3.3 版本于 11 月 2 日发布，最近一次代码推送在 2026 年 11 月 3 日，因此仍在积极开发，不适用项目停更警告。',
          '许可证：MIT，源代码在 GitHub 上。',
          '适用范围：Android 可在 macOS、Linux 和 Windows 上使用；控制 iPhone 需要 Mac。',
          '费用：工具本身免费；托管的云手机是付费服务。',
          '依据：厂商网站、代码仓库和 PyPI 页面，查阅于 2026 年 11 月 8 日，未做实际测试。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 未安装、测试或评测过 Phone Harness。以下关于行为、可靠性和隐私的说法均来自厂商。',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: 'Phone Harness 是什么？',
        content: [
          '**Phone Harness 是一个命令行“harness”（框架），让 AI 智能体像人一样使用手机：点击、输入、滚动并读取屏幕，据 README 称无需越狱、无需 Xcode，手机上也无需安装任何东西。** 它由 Phone Harness Inc. 发布，其首页称公司获得 Y Combinator 支持。代码仓库最初发布在 GitHub 用户 ShawnPana 名下，现已移至 phone-harness 组织。',
          '智能体把简短的 Python 脚本通过管道传给 phone-harness 命令，使用打开应用、点击文字、输入文字和读取屏幕等辅助函数。在 iPhone 上，它截取 Mac 上的 iPhone 镜像窗口，用 Apple Vision OCR 读取内容，并以事件形式发送输入；在 Android 上，它通过 adb 获取截图并发送输入，用无障碍树获取文字，可走 USB 或 Wi-Fi。同样的辅助函数也能驱动托管的云手机，因此为一部手机写的脚本可以在其他手机上运行。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Phone Harness 只需一条终端命令即可安装：`uv tool install --python 3.12 --upgrade --force phone-harness`。** 厂商推荐的方式是把它的设置提示发给你的编程智能体，由智能体安装命令行工具、询问使用哪部手机，并带你完成需要亲自动手的步骤。',
        ],
        columns: ['渠道', '链接'],
        rows: [
          { '渠道': '官方网站', '链接': '[phone-harness.com](https://phone-harness.com)' },
          { '渠道': '文档', '链接': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { '渠道': '隐私政策', '链接': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { '渠道': '源代码（MIT）', '链接': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { '渠道': 'PyPI 软件包', '链接': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { '渠道': '云手机', '链接': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: '评测版本：0.3.3，于 2026 年 11 月 2 日上传至 PyPI 并在 GitHub 发布；查阅时的最新上游更新是 2026 年 11 月 3 日的一次代码推送。需要终端和开发环境（uv、Python 3.12）：没有安装程序，也没有 App Store 或 Google Play 页面，GitHub 发布页也没有可下载文件。',
      },
      requirements: {
        id: 'requirements',
        title: '使用要求',
        content: [
          '**手机需要满足什么条件取决于你选择的模式；README 和安装指南列出了四种。**',
        ],
        columns: ['手机', '要求'],
        rows: [
          { '手机': '你自己的 iPhone', '要求': 'macOS 15+、iPhone 镜像、iOS 18+ 手机' },
          { '手机': '你自己的 Android', '要求': 'adb 与 USB 调试；macOS、Linux 或 Windows' },
          { '手机': '云端 Android', '要求': '账号、adb、可出站连接手机的 TCP' },
          { '手机': '云端 iPhone', '要求': '账号；任意系统通过 HTTPS 驱动' },
        ],
        note: '在自己的 Mac 上控制 iPhone 时，还需要授予辅助功能和屏幕录制权限，软件包本身支持 Python 3.10 或更高版本。内置的 doctor 命令可检查设置。',
      },
      pricing: {
        id: 'pricing',
        title: '价格',
        content: [
          '**命令行工具在 MIT 许可下免费；付费的是 Phone Harness Cloud：Android 按分钟或订阅计费，iPhone 为固定月度订阅。** 网站将该云服务标注为“Open beta”（公开测试）。',
        ],
        columns: ['方案', '价格（USD）'],
        rows: [
          { '方案': 'Basic（云端 Android）', '价格（USD）': '$0/月 + 每手机分钟 5¢' },
          { '方案': 'Plus（云端 Android）', '价格（USD）': '$20/月含 1,000 分钟，之后 4¢/分钟' },
          { '方案': '云端 iPhone', '价格（USD）': '$80/月，按年付费 $64/月' },
          { '方案': '云端 iPhone（含 eSIM）', '价格（USD）': '$100/月，按年付费 $80/月' },
          { '方案': 'Scale（专用手机）', '价格（USD）': '请联系厂商' },
        ],
        note: '2026 年 11 月 8 日读取自 phone-harness.com。网站仅以美元标价；价格由厂商设定，可能变动。据首页称，新账号起始赠送 $5 额度。',
      },
      features: {
        id: 'key-features',
        title: '资料证实的功能',
        content: [
          '**以下每一项均来自厂商网站或代码仓库的 README。**',
        ],
        items: [
          '**所有手机共用一套辅助函数。** 为 iPhone、Android 或云手机编写的脚本可在其他手机上运行，默认手机通过配置项设定。',
          '**智能体集成。** 设置提示面向 Claude Code 和 Codex；托管的 MCP 端点可服务任何 MCP 客户端（目前仅限云手机），并提供 Hermes Agent 和 OpenClaw 插件。',
          '**可自我扩展的辅助函数。** 智能体把自己编写的辅助函数保存到主目录下的工作区文件夹，升级不会清除。',
          '**云手机。** 包括临时 Android 手机、保留应用和登录状态的已保存 Android 手机，以及专用的真实 iPhone；智能体工作时可在浏览器中实时查看。',
          '**网站宣传的云端附加功能。** 用于短信和双重验证码的真实手机号、持久登录，以及让应用“把你当作真人”的“stealth”（隐身）功能；PromptQuorum 未核实这些内容；自动化操作其他应用可能违反其服务条款。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据处理',
        content: [
          '**隐私政策（最后更新于 2026 年 11 月 3 日）涵盖 phone-harness.com 和 Phone Harness Cloud，并称当你或你的智能体使用云手机时，它会自动记录活动：命令及其输入、输入的文字、点击、使用的应用和页面，以及会话详情。** 所述目的是运营、保护和改进服务并防止滥用。它还会收集你登录时提供的姓名和电子邮件、账单记录和会话日志；银行卡信息交由 Stripe 处理。',
          '政策列出的数据处理方包括 Clerk（登录）、Stripe（支付）、Amazon Web Services（托管于美国）、Vercel、PostHog（分析，仅在获得同意时使用）和 Loops（电子邮件）。临时 Android 手机在会话结束时清除数据；已保存的 Android 手机和云端 iPhone 会保留应用、登录和文件，直到你重置，云端 iPhone 在订阅结束后 7 天内抹除。README 补充说，有新版本时命令行工具会输出一行提示，可通过环境变量关闭。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上为厂商的说法。PromptQuorum 未审计该服务或命令行工具的网络流量，且该政策描述的是网站和云服务，而非你自行连接的手机。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**已在使用编程智能体的开发者**，想让它操作真实手机。',
          '**想控制 iPhone 的 Mac 用户**，不想越狱，也不想在手机上装应用。',
          '**需要大量手机的团队**，且接受托管的付费云服务。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '局限与我们无法验证的内容',
        items: [
          '**README 列出的局限。** 解锁 iPhone 会暂停镜像，设有 PIN 码的 Android 需要你亲自操作，OCR 能识别文字但识别不了图标，不支持多点触控、相机或 Face ID，DRM 视频会显示为黑屏，连接手机始终是你的工作。',
          '**实际可靠性。** PromptQuorum 没有运行过 Phone Harness，资料中也没有公布基准测试或成功率数据。',
          '**本地模型。** 资料提到 Claude Code、Codex 和“任何智能体”，但未说明本地模型（例如通过 Ollama）能否驱动它。',
          '**云端说法。** 隐身、真实手机号、Y Combinator 支持以及公开测试服务，均只读取自厂商自己的页面。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[PhoneClaw](/zh/power-local-llm/phoneclaw-review)', '平台': 'macOS', '价格 / 许可证': '免费 / Apache-2.0', '主要区别': '让 AI 智能体控制并自动化你手机的 macOS 应用' },
          { '应用': '[Open Interpreter](/zh/power-local-llm/open-interpreter-review)', '平台': 'macOS、Windows、Linux', '价格 / 许可证': '免费 / Apache-2.0', '主要区别': '让本地 LLM 控制你的电脑并执行代码，而非手机' },
          { '应用': '[Local Operator](/zh/power-local-llm/local-operator-review)', '平台': 'macOS、Windows、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '在你的电脑上编写并运行代码的桌面智能体，可搭配本地或托管模型' },
        ],
        note: '竞品信息变动频繁；请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '需要给 iPhone 越狱或在上面安装应用吗？',
            a: '据 README，不需要。iPhone 是通过 Mac 上的 iPhone 镜像窗口驱动的，因此手机上不安装任何东西。',
          },
          {
            q: '如何更新 Phone Harness？',
            a: '运行它的更新命令。有新版本时，命令行工具也会输出一行提示；设置 PHONE_HARNESS_NO_UPDATE_CHECK=1 可关闭该提示。',
          },
          {
            q: '智能体编写的辅助函数保存在哪里？',
            a: '保存在 ~/.phone-harness/agent-workspace，位于安装目录之外，因此升级后仍会保留；已有的工作区不会被改动。',
          },
          {
            q: '为什么代码仓库链接会跳转？',
            a: '它最初发布为 ShawnPana/phone-harness，现位于 phone-harness/phone-harness；旧地址会重定向。',
          },
          {
            q: '云会话能持续多久？',
            a: 'README 称启动命令默认运行 15 分钟的会话，可用时长参数调整，停止命令会结束会话，并把已保存的 Android 写回。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '据厂商称，Phone Harness 是一款免费的 MIT 许可工具，让编程智能体在 iPhone 或 Android 手机上进行真实的点击、输入和屏幕读取，无需越狱，手机上也无需安装任何东西，另有付费的托管手机。它在本次查阅前几天刚更新过，并已发布隐私政策。但另一方面，该项目诞生不到三个月，版本为 0.3.3，控制 iPhone 需要 Mac，OCR 会漏掉没有文字标签的图标，云服务按其自述会记录手机活动，且所有行为说法均来自厂商。它适合已在使用编程智能体、想让它操作手机的开发者；想尝试其他思路的读者可以对比 [PhoneClaw](/zh/power-local-llm/phoneclaw-review) 或 [Open Interpreter](/zh/power-local-llm/open-interpreter-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Phone Harness](https://phone-harness.com) — 厂商首页：产品介绍、云端方案和价格，查阅于 2026 年 11 月 8 日。',
          '[Phone Harness 隐私政策](https://phone-harness.com/privacy)和[文档](https://phone-harness.com/docs) — 数据处理、数据处理方和手机数据保留。',
          '[GitHub 上的 phone-harness](https://github.com/phone-harness/phone-harness) — README、安装指南、MIT 许可证、发布和推送日期。',
          '[PyPI 上的 phone-harness](https://pypi.org/project/phone-harness/) — 0.3.3 版本及上传日期。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[PhoneClaw 评测](/zh/power-local-llm/phoneclaw-review) — 一款让 AI 智能体控制手机的 macOS 应用。',
          '[Open Interpreter 评测](/zh/power-local-llm/open-interpreter-review) — 一款让本地 LLM 控制你电脑的工具。',
          '[Local Operator 评测](/zh/power-local-llm/local-operator-review) — 一款编写并运行代码的桌面智能体。',
          '[本地 LLM 代码与开发工具对比](/zh/power-local-llm/local-llm-code-development-compared) — 编程与智能体工具的类别对比。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-es.webp',
    title: 'Reseña de Phone Harness: deja que un agente de programación use tu iPhone o Android',
    seoTitle: 'Reseña de Phone Harness: IA que controla iPhone y Android',
    intro:
      'Phone Harness es una herramienta de línea de comandos con licencia MIT de Phone Harness Inc. que, según sus propias páginas, permite que un agente de programación como Claude Code o Codex toque, escriba y se desplace en un iPhone o un teléfono Android reales, con teléfonos en la nube alojados como opción. Esta reseña refleja el sitio, la política de privacidad, el repositorio y la ficha de PyPI del fabricante, revisados el 8 de noviembre de 2026.',
    metaDescription:
      'Reseña de Phone Harness: CLI de código abierto para que un agente de programación use un iPhone o un Android. Instalación, precios en la nube y privacidad.',
    twitterDescription:
      'Reseña de Phone Harness: una CLI con licencia MIT para manejar un iPhone o un Android reales desde un agente de programación. Requisitos, precios y lo no verificado.',
    audience:
      'Desarrolladores que usan un agente de programación y quieren saber qué necesita Phone Harness, cuánto cuestan sus teléfonos en la nube, qué dice su política de privacidad y qué afirmaciones dejan sin confirmar las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Phone Harness',
    targetKeywords: [
      'reseña phone harness',
      'phone-harness',
      'agente de ia controla iphone',
      'agente de ia controla android adb',
      'automatización de teléfono con claude code',
      'iphone mirroring agente de ia',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**Phone Harness (versión 0.3.3, publicada el 2 de noviembre de 2026) es una herramienta de línea de comandos gratuita y con licencia MIT que, según su fabricante, permite que un agente de programación como Claude Code o Codex lea y maneje un iPhone o un teléfono Android reales, además de un servicio de pago en la nube con teléfonos alojados.** Todas las afirmaciones sobre el comportamiento y la privacidad de esta reseña proceden de las páginas y del repositorio del propio fabricante; PromptQuorum no la ha instalado ni probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué necesito para usar Phone Harness?',
        answer:
          'Un ordenador con uv y Python 3.12, más un teléfono. Un iPhone necesita macOS 15 o posterior con iPhone Mirroring; un Android necesita adb con depuración USB en macOS, Linux o Windows; un teléfono en la nube solo necesita una cuenta.',
        bullets: [
          'Lee la pantalla con el OCR Apple Vision en iPhone y con el árbol de accesibilidad en Android.',
          'Se conecta a cualquier cliente MCP, con plugins para Hermes Agent y OpenClaw.',
          'Ofrece teléfonos Android y iPhone alojados como un servicio de pago aparte.',
          'No admite multitáctil, cámara ni flujos de Face ID, y el OCR ve texto pero no iconos.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Phone Harness?', anchor: 'what-is-phone-harness' },
      { label: 'Cómo conseguirlo', anchor: 'get-it' },
      { label: 'Qué necesitas', anchor: 'requirements' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y tratamiento de datos', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Límites y lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'vs-alternatives' },
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
            text: 'Phone Harness es una herramienta de línea de comandos de código abierto que da a un agente de programación toques, escritura y lectura de pantalla en un iPhone o un teléfono Android reales.',
          },
          {
            type: 'plain-terms',
            text: 'Tu agente escribe scripts cortos como abrir una app, tocar una palabra o escribir texto; Phone Harness los convierte en toques reales y te informa de lo que hay en la pantalla.',
          },
        ],
        items: [
          'Mantenimiento: el repositorio se creó el 7 de agosto de 2026, la versión 0.3.3 llegó el 2 de noviembre y el último envío de código fue el 3 de noviembre de 2026, así que está en desarrollo activo y no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia: MIT, con el código fuente en GitHub.',
          'Alcance: Android funciona en macOS, Linux y Windows; el control del iPhone requiere un Mac.',
          'Coste: la herramienta es gratuita; los teléfonos alojados en la nube son un servicio de pago.',
          'Base: el sitio, el repositorio y la ficha de PyPI del fabricante, leídos el 8 de noviembre de 2026, sin pruebas propias.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado, probado ni medido Phone Harness. Las afirmaciones sobre comportamiento, fiabilidad y privacidad que siguen son del propio fabricante.',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: '¿Qué es Phone Harness?',
        content: [
          '**Phone Harness es un "harness" de línea de comandos que permite que un agente de IA use un teléfono como lo haría una persona: toca, escribe, se desplaza y lee la pantalla, sin jailbreak, sin Xcode y sin instalar nada en el teléfono, según el README.** Lo publica Phone Harness Inc., y su página principal dice que la empresa cuenta con el respaldo de Y Combinator. El repositorio se publicó primero bajo el usuario de GitHub ShawnPana y ahora está en la organización phone-harness.',
          'El agente envía scripts cortos de Python al comando phone-harness mediante funciones auxiliares como abrir una app, tocar texto, escribir texto y leer la pantalla. En un iPhone captura la ventana de iPhone Mirroring en un Mac, la lee con el OCR Apple Vision y envía la entrada como eventos; en Android usa adb para las capturas y la entrada, y el árbol de accesibilidad para el texto, por USB o Wi-Fi. Las mismas funciones manejan un teléfono alojado en la nube, de modo que un script escrito para un teléfono funciona en los demás.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**Phone Harness se instala desde la terminal con un solo comando: `uv tool install --python 3.12 --upgrade --force phone-harness`.** La vía que recomienda el fabricante es enviar su prompt de configuración a tu agente de programación, que instala la CLI, te pregunta qué teléfono usar y te guía en los pasos que requieren tus manos.',
        ],
        columns: ['Canal', 'Enlace'],
        rows: [
          { 'Canal': 'Sitio web', 'Enlace': '[phone-harness.com](https://phone-harness.com)' },
          { 'Canal': 'Documentación', 'Enlace': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { 'Canal': 'Política de privacidad', 'Enlace': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { 'Canal': 'Código fuente (MIT)', 'Enlace': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { 'Canal': 'Paquete en PyPI', 'Enlace': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { 'Canal': 'Teléfonos en la nube', 'Enlace': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: 'Versión revisada: 0.3.3, subida a PyPI y publicada en GitHub el 2 de noviembre de 2026; la última actualización upstream en el momento de la revisión fue un envío de código el 3 de noviembre de 2026. Hacen falta una terminal y un entorno de desarrollo (uv, Python 3.12): no hay instalador, ni ficha en App Store o Google Play, y las versiones de GitHub no incluyen archivos descargables.',
      },
      requirements: {
        id: 'requirements',
        title: 'Qué necesitas',
        content: [
          '**Lo que necesita el teléfono depende del modo que elijas; el README y la guía de instalación enumeran cuatro.**',
        ],
        columns: ['Teléfono', 'Requisitos'],
        rows: [
          { 'Teléfono': 'Tu iPhone', 'Requisitos': 'macOS 15+, iPhone Mirroring, iPhone con iOS 18+' },
          { 'Teléfono': 'Tu Android', 'Requisitos': 'adb y depuración USB; macOS, Linux o Windows' },
          { 'Teléfono': 'Android en la nube', 'Requisitos': 'Cuenta, adb, TCP saliente hacia el teléfono' },
          { 'Teléfono': 'iPhone en la nube', 'Requisitos': 'Cuenta; se maneja por HTTPS desde cualquier SO' },
        ],
        note: 'Para un iPhone en tu propio Mac también se necesitan los permisos de Accesibilidad y de Grabación de pantalla, y el propio paquete admite Python 3.10 o posterior. Un comando doctor integrado comprueba la configuración.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**La herramienta de línea de comandos es gratuita con licencia MIT; Phone Harness Cloud es la parte de pago, con Android facturado por minuto o por suscripción y los iPhone con una suscripción mensual fija.** El sitio marca el servicio en la nube como "Open beta".',
        ],
        columns: ['Plan', 'Precio (USD)'],
        rows: [
          { 'Plan': 'Basic (Android en la nube)', 'Precio (USD)': '$0/mes + 5¢ por minuto de teléfono' },
          { 'Plan': 'Plus (Android en la nube)', 'Precio (USD)': '$20/mes con 1,000 min, luego 4¢/min' },
          { 'Plan': 'iPhone en la nube', 'Precio (USD)': '$80/mes, o $64/mes con pago anual' },
          { 'Plan': 'iPhone en la nube con eSIM', 'Precio (USD)': '$100/mes, o $80/mes con pago anual' },
          { 'Plan': 'Scale (teléfonos dedicados)', 'Precio (USD)': 'Contactar con el fabricante' },
        ],
        note: 'Consultado en phone-harness.com el 8 de noviembre de 2026. El sitio muestra los precios solo en dólares estadounidenses; los fija el fabricante y pueden cambiar. Las cuentas nuevas empiezan con $5 de crédito, según la página principal.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede del sitio del fabricante o del README del repositorio.**',
        ],
        items: [
          '**Un único conjunto de funciones para todos los teléfonos.** Un script escrito para un iPhone, un Android o un teléfono en la nube funciona en los demás, y el teléfono predeterminado se elige con un ajuste de configuración.',
          '**Integraciones con agentes.** El prompt de configuración apunta a Claude Code y Codex; un endpoint MCP alojado sirve a cualquier cliente MCP (por ahora solo teléfonos en la nube) y existen plugins para Hermes Agent y OpenClaw.',
          '**Funciones auxiliares que se amplían solas.** El agente guarda las funciones que escribe en una carpeta de trabajo dentro de tu directorio personal que las actualizaciones no borran.',
          '**Teléfonos en la nube.** Teléfonos Android temporales, teléfonos Android guardados que conservan apps y sesiones, e iPhone reales dedicados, con una vista en directo en el navegador mientras trabaja el agente.',
          '**Extras de la nube que anuncia el sitio.** Números de teléfono reales para SMS y códigos de doble factor, sesiones persistentes y "stealth" para que las apps vean a una persona; PromptQuorum no ha comprobado estos puntos, y automatizar otras apps puede entrar en conflicto con sus condiciones de uso.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y tratamiento de datos',
        content: [
          '**La política de privacidad (última actualización: 3 de noviembre de 2026) abarca phone-harness.com y Phone Harness Cloud, y dice que cuando tú o tu agente usan un teléfono en la nube se registra automáticamente la actividad: comandos y sus entradas, texto introducido, toques, apps y páginas usadas, y datos de la sesión.** Los fines declarados son operar, proteger y mejorar el servicio y prevenir abusos. También recopila tu nombre y correo del inicio de sesión, registros de facturación y registros de sesión; los datos de la tarjeta van a Stripe.',
          'La política nombra como proveedores de servicios a Clerk (inicio de sesión), Stripe (pagos), Amazon Web Services (alojamiento en Estados Unidos), Vercel, PostHog (analítica, solo con consentimiento) y Loops (correo). Los teléfonos Android temporales se borran al terminar la sesión; los teléfonos Android guardados y los iPhone en la nube conservan apps, sesiones y archivos hasta que los restableces, y un iPhone en la nube se borra en los 7 días posteriores al fin de la suscripción. El README añade que la CLI muestra un aviso de una línea cuando hay una versión nueva, que una variable de entorno desactiva.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas son afirmaciones del fabricante. PromptQuorum no ha auditado el servicio ni el tráfico de red de la CLI, y la política describe el sitio web y el servicio en la nube, no un teléfono que conectas tú mismo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Desarrolladores que ya usan un agente de programación** y quieren que maneje un teléfono real.',
          '**Dueños de un Mac que quieren controlar un iPhone,** algo que, según el README, no requiere jailbreak ni una app en el teléfono.',
          '**Equipos que necesitan muchos teléfonos** y aceptan una nube alojada y de pago.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Límites y lo que no pudimos verificar',
        items: [
          '**Límites que indica el README.** Desbloquear un iPhone pausa el mirroring, un Android con PIN necesita tu intervención, el OCR ve texto pero no iconos, no hay compatibilidad con multitáctil, cámara ni Face ID, el vídeo con DRM se ve en negro y conectar el teléfono siempre es cosa tuya.',
          '**Fiabilidad en la práctica.** PromptQuorum no ejecutó Phone Harness, y las fuentes no publican cifras de rendimiento ni de tasa de éxito.',
          '**Modelos locales.** Las fuentes nombran Claude Code, Codex y "any agent", pero no dicen si un modelo local, por ejemplo mediante Ollama, puede manejarlo.',
          '**Afirmaciones sobre la nube.** El modo stealth, los números de teléfono reales, el respaldo de Y Combinator y el servicio en open beta se leyeron solo en las páginas del propio fabricante.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[PhoneClaw](/es/power-local-llm/phoneclaw-review)', 'Plataformas': 'macOS', 'Precio / licencia': 'Gratis / Apache-2.0', 'Diferencia clave': 'App de macOS que permite que un agente de IA controle y automatice tu teléfono' },
          { 'App': '[Open Interpreter](/es/power-local-llm/open-interpreter-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Gratis / Apache-2.0', 'Diferencia clave': 'Permite que un LLM local controle tu ordenador y ejecute código, no un teléfono' },
          { 'App': '[Local Operator](/es/power-local-llm/local-operator-review)', 'Plataformas': 'macOS, Windows, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Agente de escritorio que escribe y ejecuta código en tu ordenador, con un modelo local o alojado' },
        ],
        note: 'Los detalles de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Tengo que hacer jailbreak al iPhone o instalar una app en él?',
            a: 'No, según el README. Un iPhone se maneja a través de la ventana de iPhone Mirroring en un Mac, así que no se instala nada en el teléfono.',
          },
          {
            q: '¿Cómo actualizo Phone Harness?',
            a: 'Ejecuta su comando de actualización. La CLI también muestra una línea cuando existe una versión más reciente; definir PHONE_HARNESS_NO_UPDATE_CHECK=1 silencia ese aviso.',
          },
          {
            q: '¿Dónde acaban las funciones auxiliares que escribe mi agente?',
            a: 'En ~/.phone-harness/agent-workspace, fuera de la instalación, de modo que una actualización las conserva; un espacio de trabajo existente no se toca.',
          },
          {
            q: '¿Por qué redirige el enlace del repositorio?',
            a: 'Se publicó primero como ShawnPana/phone-harness y ahora está en phone-harness/phone-harness; la dirección antigua redirige.',
          },
          {
            q: '¿Cuánto dura una sesión en la nube?',
            a: 'El README dice que el comando de inicio ejecuta una sesión de 15 minutos por defecto, ajustable con un indicador de duración, y que el comando de parada la termina y vuelve a escribir en un Android guardado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Phone Harness es una herramienta gratuita con licencia MIT que, según su fabricante, da a un agente de programación toques, escritura y lectura de pantalla reales en un iPhone o un teléfono Android, sin jailbreak y sin instalar nada en el teléfono, además de teléfonos alojados de pago. Se actualizó pocos días antes de esta revisión y tiene una política de privacidad publicada. En contra, el proyecto tiene menos de tres meses en la versión 0.3.3, el control del iPhone requiere un Mac, el OCR no detecta iconos sin etiqueta, el servicio en la nube registra la actividad del teléfono según su propia descripción y toda afirmación sobre su comportamiento procede del fabricante. Encaja con desarrolladores que ya manejan un agente de programación y quieren acceso al teléfono; quien busque otro enfoque puede comparar [PhoneClaw](/es/power-local-llm/phoneclaw-review) u [Open Interpreter](/es/power-local-llm/open-interpreter-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Phone Harness](https://phone-harness.com) — página principal del fabricante: descripción, planes en la nube y precios, consultada el 8 de noviembre de 2026.',
          '[Política de privacidad de Phone Harness](https://phone-harness.com/privacy) y [documentación](https://phone-harness.com/docs) — tratamiento de datos, encargados y conservación en el teléfono.',
          '[phone-harness en GitHub](https://github.com/phone-harness/phone-harness) — README, guía de instalación, licencia MIT, fechas de versión y de envío.',
          '[phone-harness en PyPI](https://pypi.org/project/phone-harness/) — versión 0.3.3 y fecha de subida.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PhoneClaw](/es/power-local-llm/phoneclaw-review) — una app de macOS para que un agente de IA controle un teléfono.',
          '[Reseña de Open Interpreter](/es/power-local-llm/open-interpreter-review) — una herramienta que permite que un LLM local controle tu ordenador.',
          '[Reseña de Local Operator](/es/power-local-llm/local-operator-review) — un agente de escritorio que escribe y ejecuta código.',
          '[Local LLM Code & Development Compared](/es/power-local-llm/local-llm-code-development-compared) — la comparativa de la categoría de herramientas de programación y agentes.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-pt.webp',
    title: 'Análise do Phone Harness: deixe um agente de programação usar seu iPhone ou Android',
    seoTitle: 'Análise do Phone Harness: agente no iPhone e no Android',
    intro:
      'O Phone Harness é uma ferramenta de linha de comando com licença MIT, da Phone Harness Inc., que, segundo as próprias páginas, permite que um agente de programação como o Claude Code ou o Codex toque, digite e role a tela de um iPhone ou celular Android de verdade, com celulares hospedados na nuvem como opção. Esta análise reflete o site, a política de privacidade, o repositório e a página do PyPI do fabricante, conferidos em 8 de novembro de 2026.',
    metaDescription:
      'Análise do Phone Harness: CLI de código aberto para um agente operar iPhone ou Android. Instalação, preços da nuvem, privacidade e dúvidas em aberto.',
    twitterDescription:
      'Análise do Phone Harness: uma CLI com licença MIT para controlar um iPhone ou Android de verdade a partir de um agente de programação. Requisitos, preços da nuvem e o que não foi verificado.',
    audience:
      'Desenvolvedores que usam um agente de programação e querem saber o que o Phone Harness exige, quanto custam seus celulares na nuvem, o que diz a política de privacidade e quais afirmações as fontes deixam sem confirmação.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise Phone Harness',
    targetKeywords: [
      'análise phone harness',
      'phone-harness',
      'agente de ia controlar iphone',
      'agente de ia controlar android adb',
      'automação de celular com claude code',
      'iphone mirroring agente de ia',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**O Phone Harness (versão 0.3.3, lançada em 2 de novembro de 2026) é uma ferramenta de linha de comando gratuita, com licença MIT, que, segundo o fabricante, permite que um agente de programação como o Claude Code ou o Codex leia e opere um iPhone ou celular Android de verdade, além de um serviço de nuvem pago com celulares hospedados.** Todas as afirmações desta análise sobre comportamento e privacidade vêm das páginas e do repositório do próprio fabricante; a PromptQuorum não instalou nem testou a ferramenta.',
    quickAnswerTop: {
      pt: {
        question: 'O que preciso para executar o Phone Harness?',
        answer:
          'Um computador com uv e Python 3.12, além de um celular. Um iPhone exige macOS 15 ou mais recente com iPhone Mirroring; um Android exige adb com depuração USB no macOS, Linux ou Windows; um celular na nuvem exige apenas uma conta.',
        bullets: [
          'Lê a tela com o OCR Apple Vision no iPhone e com a árvore de acessibilidade no Android.',
          'Conecta-se a qualquer cliente MCP, com plugins para o Hermes Agent e o OpenClaw.',
          'Oferece celulares Android e iPhone hospedados como um serviço pago à parte.',
          'Não faz fluxos com multitoque, câmera ou Face ID, e o OCR enxerga texto, mas não ícones.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Phone Harness?', anchor: 'what-is-phone-harness' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'O que você precisa', anchor: 'requirements' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e tratamento de dados', anchor: 'privacy' },
      { label: 'Para quem é indicado', anchor: 'who-should-use' },
      { label: 'Limites e o que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Phone Harness é uma ferramenta de linha de comando de código aberto que dá a um agente de programação toques, digitação e leitura de tela em um iPhone ou celular Android de verdade.',
          },
          {
            type: 'plain-terms',
            text: 'Seu agente escreve scripts curtos, como abrir um app, tocar em uma palavra ou digitar um texto; o Phone Harness os transforma em toques reais e informa o que está na tela.',
          },
        ],
        items: [
          'Manutenção: o repositório foi criado em 7 de agosto de 2026, a versão 0.3.3 saiu em 2 de novembro e o último push de código foi em 3 de novembro de 2026; ou seja, o desenvolvimento está ativo e nenhum aviso de projeto desatualizado se aplica.',
          'Licença: MIT, com o código-fonte no GitHub.',
          'Alcance: o Android funciona no macOS, Linux e Windows; o controle do iPhone exige um Mac.',
          'Custo: a ferramenta é gratuita; os celulares hospedados na nuvem são um serviço pago.',
          'Base: o site, o repositório e a página do PyPI do fabricante, lidos em 8 de novembro de 2026, sem testes práticos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não instalou, testou nem mediu o desempenho do Phone Harness. As afirmações abaixo sobre comportamento, confiabilidade e privacidade são do próprio fabricante.',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: 'O que é o Phone Harness?',
        content: [
          '**O Phone Harness é um "harness" de linha de comando que permite que um agente de IA use um celular como uma pessoa usaria: ele toca, digita, rola e lê a tela, sem jailbreak, sem Xcode e sem nada instalado no celular, segundo o README.** É publicado pela Phone Harness Inc., e a página inicial diz que a empresa tem o apoio da Y Combinator. O repositório foi publicado primeiro sob o usuário do GitHub ShawnPana e hoje está na organização phone-harness.',
          'O agente envia scripts curtos em Python para o comando phone-harness, usando auxiliares como abrir um app, tocar em um texto, digitar um texto e ler a tela. No iPhone, ele captura a janela do iPhone Mirroring em um Mac, lê o conteúdo com o OCR Apple Vision e envia a entrada como eventos; no Android, usa o adb para capturas de tela e entrada e a árvore de acessibilidade para o texto, por USB ou Wi-Fi. Os mesmos auxiliares controlam um celular hospedado na nuvem, de modo que um script escrito para um celular roda nos demais.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Phone Harness é instalado pelo terminal com um único comando: `uv tool install --python 3.12 --upgrade --force phone-harness`.** O caminho recomendado pelo fabricante é enviar o prompt de configuração ao seu agente de programação, que instala a CLI, pergunta qual celular usar e orienta você nas etapas que exigem as suas mãos.',
        ],
        columns: ['Canal', 'Link'],
        rows: [
          { 'Canal': 'Site', 'Link': '[phone-harness.com](https://phone-harness.com)' },
          { 'Canal': 'Documentação', 'Link': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { 'Canal': 'Política de privacidade', 'Link': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { 'Canal': 'Código-fonte (MIT)', 'Link': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { 'Canal': 'Pacote no PyPI', 'Link': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { 'Canal': 'Celulares na nuvem', 'Link': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: 'Versão analisada: 0.3.3, enviada ao PyPI e lançada no GitHub em 2 de novembro de 2026; a atualização mais recente do projeto no momento da verificação foi um push de código em 3 de novembro de 2026. É necessário um terminal e um ambiente de desenvolvimento (uv, Python 3.12): não há instalador, página na App Store nem no Google Play, e os lançamentos do GitHub não trazem arquivos para baixar.',
      },
      requirements: {
        id: 'requirements',
        title: 'O que você precisa',
        content: [
          '**O que o celular exige depende do modo escolhido; o README e o guia de instalação listam quatro.**',
        ],
        columns: ['Celular', 'Requisitos'],
        rows: [
          { 'Celular': 'Seu iPhone', 'Requisitos': 'macOS 15+, iPhone Mirroring, iPhone com iOS 18+' },
          { 'Celular': 'Seu Android', 'Requisitos': 'adb e depuração USB; macOS, Linux ou Windows' },
          { 'Celular': 'Android na nuvem', 'Requisitos': 'Conta, adb, TCP de saída até o celular' },
          { 'Celular': 'iPhone na nuvem', 'Requisitos': 'Conta; controlado por HTTPS em qualquer SO' },
        ],
        note: 'Para um iPhone no seu próprio Mac, também são necessárias as permissões de Acessibilidade e de Gravação de Tela, e o pacote em si aceita Python 3.10 ou mais recente. Um comando doctor integrado verifica a configuração.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**A ferramenta de linha de comando é gratuita sob a licença MIT; o Phone Harness Cloud é a parte paga, com o Android cobrado por minuto ou por assinatura e os iPhones em uma assinatura mensal fixa.** O site marca o serviço de nuvem como "Open beta".',
        ],
        columns: ['Plano', 'Preço (USD)'],
        rows: [
          { 'Plano': 'Basic (Android na nuvem)', 'Preço (USD)': '$0/mês + 5¢ por minuto de celular' },
          { 'Plano': 'Plus (Android na nuvem)', 'Preço (USD)': '$20/mês com 1.000 min, depois 4¢/min' },
          { 'Plano': 'iPhone na nuvem', 'Preço (USD)': '$80/mês, ou $64/mês com cobrança anual' },
          { 'Plano': 'iPhone na nuvem com eSIM', 'Preço (USD)': '$100/mês, ou $80/mês com cobrança anual' },
          { 'Plano': 'Scale (celulares dedicados)', 'Preço (USD)': 'Fale com o fabricante' },
        ],
        note: 'Lido em phone-harness.com em 8 de novembro de 2026. O site lista preços apenas em dólares americanos; eles são definidos pelo fabricante e podem mudar. Contas novas começam com US$ 5 de crédito, segundo a página inicial.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm do site do fabricante ou do README do repositório.**',
        ],
        items: [
          '**Um único conjunto de auxiliares para todos os celulares.** Um script escrito para um iPhone, um Android ou um celular na nuvem roda nos outros, e o celular padrão é escolhido por uma configuração.',
          '**Integrações com agentes.** O prompt de configuração tem como alvo o Claude Code e o Codex; um endpoint MCP hospedado atende qualquer cliente MCP (por enquanto, apenas celulares na nuvem), e existem plugins para o Hermes Agent e o OpenClaw.',
          '**Auxiliares que se ampliam sozinhos.** O agente salva os auxiliares que escreve em uma pasta de trabalho no seu diretório pessoal, que as atualizações não apagam.',
          '**Celulares na nuvem.** Celulares Android temporários, celulares Android salvos que mantêm apps e logins e iPhones reais dedicados, com uma visualização ao vivo no navegador enquanto o agente trabalha.',
          '**Extras da nuvem anunciados pelo site.** Números de telefone reais para SMS e códigos de dois fatores, logins persistentes e "stealth" para que os apps vejam uma pessoa; a PromptQuorum não verificou esses itens, e automatizar outros apps pode conflitar com os termos de uso deles.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e tratamento de dados',
        content: [
          '**A política de privacidade (atualizada pela última vez em 3 de novembro de 2026) abrange o phone-harness.com e o Phone Harness Cloud e afirma que, quando você ou seu agente usam um celular na nuvem, a atividade é registrada automaticamente: comandos e suas entradas, texto digitado, toques, apps e páginas usados e detalhes da sessão.** As finalidades declaradas são operar, proteger e melhorar o serviço e prevenir abusos. A política também coleta seu nome e e-mail a partir do login, registros de cobrança e registros de sessão; os dados do cartão vão para a Stripe.',
          'A política cita Clerk (login), Stripe (pagamentos), Amazon Web Services (hospedagem nos Estados Unidos), Vercel, PostHog (análise de uso, somente com consentimento) e Loops (e-mail) como prestadores de serviço. Os celulares Android temporários são apagados quando a sessão termina; os celulares Android salvos e os iPhones na nuvem mantêm apps, logins e arquivos até você redefini-los, e um iPhone na nuvem é apagado em até 7 dias após o fim da assinatura. O README acrescenta que a CLI exibe um aviso de uma linha quando existe uma nova versão, que pode ser desativado por uma variável de ambiente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são afirmações do fabricante. A PromptQuorum não auditou o serviço nem o tráfego de rede da CLI, e a política descreve o site e o serviço de nuvem, não um celular que você conecta por conta própria.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Desenvolvedores que já usam um agente de programação** e querem que ele opere um celular de verdade.',
          '**Donos de Mac que querem controlar o iPhone,** o que, segundo o README, dispensa jailbreak e app instalado no celular.',
          '**Equipes que precisam de muitos celulares** e aceitam uma nuvem hospedada e paga.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites e o que não conseguimos verificar',
        items: [
          '**Limites listados no README.** Desbloquear um iPhone pausa o espelhamento, um Android protegido por PIN precisa de você, o OCR enxerga texto, mas não ícones, não há suporte a multitoque, câmera ou Face ID, vídeos com DRM aparecem pretos e conectar o celular é sempre tarefa sua.',
          '**Confiabilidade na prática.** A PromptQuorum não executou o Phone Harness, e as fontes não publicam números de benchmark nem de taxa de sucesso.',
          '**Modelos locais.** As fontes citam o Claude Code, o Codex e "qualquer agente", mas não dizem se um modelo local, por exemplo via Ollama, consegue controlá-lo.',
          '**Afirmações sobre a nuvem.** Stealth, números de telefone reais, o apoio da Y Combinator e o serviço em open beta foram lidos apenas nas páginas do próprio fabricante.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Principal diferença'],
        rows: [
          { 'App': '[PhoneClaw](/pt/power-local-llm/phoneclaw-review)', 'Plataformas': 'macOS', 'Preço / licença': 'Grátis / Apache-2.0', 'Principal diferença': 'App para macOS que permite a um agente de IA controlar e automatizar seu celular' },
          { 'App': '[Open Interpreter](/pt/power-local-llm/open-interpreter-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Grátis / Apache-2.0', 'Principal diferença': 'Permite que um LLM local controle seu computador e execute código, não um celular' },
          { 'App': '[Local Operator](/pt/power-local-llm/local-operator-review)', 'Plataformas': 'macOS, Windows, Linux', 'Preço / licença': 'Grátis / MIT', 'Principal diferença': 'Agente de desktop que escreve e executa código no seu computador, com modelo local ou hospedado' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais de cada app na própria página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso fazer jailbreak no iPhone ou instalar um app nele?',
            a: 'Não, segundo o README. Um iPhone é controlado pela janela do iPhone Mirroring em um Mac, então nada é instalado no celular.',
          },
          {
            q: 'Como atualizo o Phone Harness?',
            a: 'Execute o comando de atualização dele. A CLI também exibe uma linha quando existe uma versão mais nova; definir PHONE_HARNESS_NO_UPDATE_CHECK=1 silencia esse aviso.',
          },
          {
            q: 'Onde ficam os auxiliares que meu agente escreve?',
            a: 'Em ~/.phone-harness/agent-workspace, fora da instalação, então uma atualização os preserva; uma pasta de trabalho existente não é alterada.',
          },
          {
            q: 'Por que o link do repositório redireciona?',
            a: 'Ele foi publicado primeiro como ShawnPana/phone-harness e hoje fica em phone-harness/phone-harness; o endereço antigo redireciona.',
          },
          {
            q: 'Quanto tempo dura uma sessão na nuvem?',
            a: 'O README diz que o comando de início executa uma sessão de 15 minutos por padrão, ajustável com uma opção de duração, e que o comando de parada a encerra, gravando de volta um Android salvo.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Phone Harness é uma ferramenta gratuita, com licença MIT, que, segundo o fabricante, dá a um agente de programação toques, digitação e leitura de tela reais em um iPhone ou celular Android, sem jailbreak e sem nada instalado no celular, além de celulares hospedados pagos. Foi atualizado poucos dias antes desta verificação e tem uma política de privacidade publicada. Em contrapartida, o projeto tem menos de três meses na versão 0.3.3, o controle do iPhone exige um Mac, o OCR não enxerga ícones sem rótulo, o serviço de nuvem registra a atividade do celular segundo a própria política e toda afirmação sobre comportamento vem do fabricante. Serve para desenvolvedores que já controlam um agente de programação e querem acesso ao celular; quem prefere outra abordagem pode comparar o [PhoneClaw](/pt/power-local-llm/phoneclaw-review) ou o [Open Interpreter](/pt/power-local-llm/open-interpreter-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Phone Harness](https://phone-harness.com) — página inicial do fabricante: descrição, planos e preços da nuvem, conferidos em 8 de novembro de 2026.',
          '[Política de privacidade do Phone Harness](https://phone-harness.com/privacy) e [documentação](https://phone-harness.com/docs) — tratamento de dados, operadores e retenção nos celulares.',
          '[phone-harness no GitHub](https://github.com/phone-harness/phone-harness) — README, guia de instalação, licença MIT, datas de lançamento e de push.',
          '[phone-harness no PyPI](https://pypi.org/project/phone-harness/) — versão 0.3.3 e data de envio.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do PhoneClaw](/pt/power-local-llm/phoneclaw-review) — um app para macOS que permite a um agente de IA controlar um celular.',
          '[Análise do Open Interpreter](/pt/power-local-llm/open-interpreter-review) — uma ferramenta que permite a um LLM local controlar seu computador.',
          '[Análise do Local Operator](/pt/power-local-llm/local-operator-review) — um agente de desktop que escreve e executa código.',
          '[Local LLM Code & Development Compared](/pt/power-local-llm/local-llm-code-development-compared) — a comparação da categoria de ferramentas de programação e agentes.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-ar.webp',
    title: 'مراجعة Phone Harness: دع وكيل البرمجة يستخدم هاتف iPhone أو Android',
    seoTitle: 'مراجعة Phone Harness: تحكم الوكيل في iPhone وAndroid',
    intro:
      'Phone Harness أداة سطر أوامر مفتوحة المصدر بترخيص MIT من شركة Phone Harness Inc.، وبحسب صفحاتها الخاصة تتيح لوكيل برمجة مثل Claude Code أو Codex النقر والكتابة والتمرير على هاتف iPhone أو Android حقيقي، مع هواتف سحابية مستضافة اختيارية. تعكس هذه المراجعة موقع الجهة المطورة وسياسة الخصوصية والمستودع وصفحة PyPI كما جرى فحصها في 8 نوفمبر 2026.',
    metaDescription:
      'مراجعة Phone Harness: أداة سطر أوامر مفتوحة المصدر تتيح لوكيل برمجة تشغيل iPhone أو Android. الإعداد وأسعار السحابة وسياسة الخصوصية والنقاط غير المؤكدة.',
    twitterDescription:
      'مراجعة Phone Harness: أداة سطر أوامر بترخيص MIT لتشغيل هاتف iPhone أو Android حقيقي من وكيل برمجة. المتطلبات وأسعار السحابة وما لم يتم التحقق منه.',
    audience:
      'مطورون يستخدمون وكيل برمجة ويريدون معرفة ما يحتاجه Phone Harness وتكلفة هواتفه السحابية وما تقوله سياسة الخصوصية وأي العبارات تركتها المصادر دون تأكيد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Phone Harness',
    targetKeywords: [
      'مراجعة phone harness',
      'phone-harness',
      'وكيل ذكاء اصطناعي يتحكم في iphone',
      'وكيل ذكاء اصطناعي يتحكم في android عبر adb',
      'أتمتة الهاتف مع claude code',
      'iphone mirroring ووكيل ذكاء اصطناعي',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**Phone Harness (الإصدار 0.3.3، صدر في 2 نوفمبر 2026) أداة سطر أوامر مجانية بترخيص MIT تتيح، بحسب الجهة المطورة، لوكيل برمجة مثل Claude Code أو Codex قراءة هاتف iPhone أو Android حقيقي وتشغيله، إضافةً إلى خدمة سحابية مدفوعة لهواتف مستضافة.** كل ما يرد في هذه المراجعة عن السلوك والخصوصية مصدره صفحات الجهة المطورة ومستودعها؛ ولم تقم PromptQuorum بتثبيته أو اختباره.',
    quickAnswerTop: {
      ar: {
        question: 'ما الذي أحتاجه لتشغيل Phone Harness؟',
        answer:
          'جهاز كمبيوتر عليه uv وPython 3.12، إضافةً إلى هاتف. يحتاج iPhone إلى macOS 15 أو أحدث مع iPhone Mirroring؛ ويحتاج Android إلى adb مع تفعيل USB debugging على macOS أو Linux أو Windows؛ أما الهاتف السحابي فيحتاج حسابًا فقط.',
        bullets: [
          'يقرأ الشاشة عبر Apple Vision OCR على iPhone وعبر شجرة إمكانية الوصول على Android.',
          'يتصل بأي عميل MCP، مع إضافات لـ Hermes Agent وOpenClaw.',
          'يقدّم هواتف Android وiPhone مستضافة كخدمة مدفوعة منفصلة.',
          'لا يدعم اللمس المتعدد ولا مسارات الكاميرا أو Face ID، ويقرأ OCR النص لكنه لا يرى الأيقونات.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Phone Harness؟', anchor: 'what-is-phone-harness' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'ما الذي تحتاجه', anchor: 'requirements' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية ومعالجة البيانات', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'القيود وما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
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
            text: 'Phone Harness أداة سطر أوامر مفتوحة المصدر تمنح وكيل برمجة القدرة على النقر والكتابة وقراءة الشاشة على هاتف iPhone أو Android حقيقي.',
          },
          {
            type: 'plain-terms',
            text: 'يكتب وكيلك نصوصًا برمجية قصيرة مثل فتح تطبيق أو النقر على كلمة أو كتابة نص؛ ويحوّلها Phone Harness إلى لمسات حقيقية ويعيد إليه ما يظهر على الشاشة.',
          },
        ],
        items: [
          'الصيانة: أُنشئ المستودع في 7 أغسطس 2026، وتبعه الإصدار 0.3.3 في 2 نوفمبر، وكانت آخر دفعة شيفرة في 3 نوفمبر 2026، فهو قيد تطوير نشط ولا ينطبق تحذير المشروع المهجور.',
          'الترخيص: MIT، والشيفرة المصدرية على GitHub.',
          'النطاق: يعمل Android على macOS وLinux وWindows؛ أما التحكم في iPhone فيحتاج إلى جهاز Mac.',
          'التكلفة: الأداة مجانية؛ أما الهواتف السحابية المستضافة فخدمة مدفوعة.',
          'الأساس: موقع الجهة المطورة ومستودعها وصفحة PyPI، قُرئت في 8 نوفمبر 2026، دون اختبار عملي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تقم PromptQuorum بتثبيت Phone Harness أو اختباره أو قياس أدائه. العبارات الواردة أدناه عن السلوك والموثوقية والخصوصية هي عبارات الجهة المطورة نفسها.',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: 'ما هو Phone Harness؟',
        content: [
          '**Phone Harness أداة سطر أوامر من نوع "harness" تتيح لوكيل ذكاء اصطناعي استخدام الهاتف كما يفعل الشخص: ينقر ويكتب ويمرر ويقرأ الشاشة، دون jailbreak ودون Xcode ودون تثبيت أي شيء على الهاتف، بحسب ملف README.** تنشره شركة Phone Harness Inc.، وتذكر صفحتها الرئيسية أن الشركة مدعومة من Y Combinator. نُشر المستودع أولًا تحت مستخدم GitHub باسم ShawnPana، وهو الآن ضمن منظمة phone-harness.',
          'يمرر الوكيل نصوص Python قصيرة إلى أمر phone-harness، مستخدمًا دوال مساعدة مثل فتح تطبيق والنقر على نص وكتابة نص وقراءة الشاشة. على iPhone يلتقط الأداة نافذة iPhone Mirroring على جهاز Mac ويقرؤها بواسطة Apple Vision OCR ويرسل المدخلات كأحداث؛ وعلى Android يستخدم adb للقطات الشاشة والإدخال وشجرة إمكانية الوصول للنصوص، عبر USB أو Wi-Fi. وتشغّل الدوال نفسها هاتفًا سحابيًا مستضافًا، فيعمل النص المكتوب لهاتف واحد على بقية الهواتف.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Phone Harness من الطرفية بأمر واحد: `uv tool install --python 3.12 --upgrade --force phone-harness`.** الطريقة الموصى بها من الجهة المطورة هي إرسال موجّه الإعداد الخاص بها إلى وكيل البرمجة لديك، فيثبّت أداة سطر الأوامر ويسأل عن الهاتف المطلوب ويرشدك في الخطوات التي تحتاج إلى يديك.',
        ],
        columns: ['القناة', 'الرابط'],
        rows: [
          { 'القناة': 'الموقع الرسمي', 'الرابط': '[phone-harness.com](https://phone-harness.com)' },
          { 'القناة': 'التوثيق', 'الرابط': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { 'القناة': 'سياسة الخصوصية', 'الرابط': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { 'القناة': 'الشيفرة المصدرية (MIT)', 'الرابط': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { 'القناة': 'حزمة PyPI', 'الرابط': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { 'القناة': 'الهواتف السحابية', 'الرابط': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: 'الإصدار الذي جرت مراجعته: 0.3.3، رُفع إلى PyPI وصدر على GitHub في 2 نوفمبر 2026؛ وكان آخر تحديث لدى المصدر وقت الفحص دفعة شيفرة في 3 نوفمبر 2026. يلزم وجود طرفية وإعداد للمطورين (uv وPython 3.12): لا يوجد مثبّت ولا صفحة في App Store أو Google Play، ولا تتضمن إصدارات GitHub أي ملفات قابلة للتنزيل.',
      },
      requirements: {
        id: 'requirements',
        title: 'ما الذي تحتاجه',
        content: [
          '**ما يحتاجه الهاتف يعتمد على الوضع الذي تختاره؛ ويسرد ملف README ودليل التثبيت أربعة أوضاع.**',
        ],
        columns: ['الهاتف', 'المتطلبات'],
        rows: [
          { 'الهاتف': 'iPhone الخاص بك', 'المتطلبات': 'macOS 15+ وiPhone Mirroring وهاتف iOS 18+' },
          { 'الهاتف': 'Android الخاص بك', 'المتطلبات': 'adb وUSB debugging؛ macOS أو Linux أو Windows' },
          { 'الهاتف': 'Android سحابي', 'المتطلبات': 'حساب وadb واتصال TCP صادر إلى الهاتف' },
          { 'الهاتف': 'iPhone سحابي', 'المتطلبات': 'حساب؛ يُدار عبر HTTPS من أي نظام' },
        ],
        note: 'لاستخدام iPhone على جهاز Mac الخاص بك يلزم أيضًا منح إذن Accessibility وإذن Screen Recording، وتقبل الحزمة نفسها Python 3.10 أو أحدث. ويتحقق أمر doctor المدمج من الإعداد.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**أداة سطر الأوامر مجانية بترخيص MIT؛ أما Phone Harness Cloud فهو الجزء المدفوع، حيث يُحتسب Android بالدقيقة أو باشتراك، وتُقدَّم هواتف iPhone باشتراك شهري ثابت.** ويُوسَم الموقع بعبارة "Open beta" بالنسبة للخدمة السحابية.',
        ],
        columns: ['الخطة', 'السعر (USD)'],
        rows: [
          { 'الخطة': 'Basic (Android سحابي)', 'السعر (USD)': '$0 شهريًا + 5¢ لكل دقيقة هاتف' },
          { 'الخطة': 'Plus (Android سحابي)', 'السعر (USD)': '$20 شهريًا تشمل 1,000 دقيقة، ثم 4¢ للدقيقة' },
          { 'الخطة': 'iPhone سحابي', 'السعر (USD)': '$80 شهريًا، أو $64 شهريًا عند الدفع السنوي' },
          { 'الخطة': 'iPhone سحابي مع eSIM', 'السعر (USD)': '$100 شهريًا، أو $80 شهريًا عند الدفع السنوي' },
          { 'الخطة': 'Scale (هواتف مخصصة)', 'السعر (USD)': 'تواصل مع الجهة المطورة' },
        ],
        note: 'قُرئت من phone-harness.com في 8 نوفمبر 2026. يعرض الموقع الأسعار بالدولار الأمريكي فقط؛ وتحددها الجهة المطورة وقد تتغير. تبدأ الحسابات الجديدة برصيد 5 دولارات، بحسب الصفحة الرئيسية.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل عنصر أدناه مصدره موقع الجهة المطورة أو ملف README في المستودع.**',
        ],
        items: [
          '**مجموعة دوال واحدة لكل الهواتف.** النص المكتوب لـ iPhone أو Android أو هاتف سحابي يعمل على البقية، ويُختار الهاتف الافتراضي عبر إعداد في التكوين.',
          '**تكاملات الوكلاء.** يستهدف موجّه الإعداد Claude Code وCodex؛ وتخدم نقطة MCP مستضافة أي عميل MCP (للهواتف السحابية فقط حاليًا)، وتوجد إضافات لـ Hermes Agent وOpenClaw.',
          '**دوال مساعدة تتوسع ذاتيًا.** يحفظ الوكيل الدوال التي يكتبها في مجلد عمل داخل مجلد المستخدم لا تمحوه الترقيات.',
          '**الهواتف السحابية.** هواتف Android مؤقتة، وهواتف Android محفوظة تحتفظ بالتطبيقات وتسجيلات الدخول، وهواتف iPhone حقيقية مخصصة، مع عرض مباشر في المتصفح أثناء عمل الوكيل.',
          '**إضافات سحابية يعلن عنها الموقع.** أرقام هواتف حقيقية للرسائل النصية ورموز التحقق بخطوتين، وتسجيلات دخول دائمة، وميزة "stealth" كي ترى التطبيقات شخصًا؛ ولم تتحقق PromptQuorum من هذه الادعاءات، وقد تتعارض أتمتة تطبيقات أخرى مع شروط استخدامها.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية ومعالجة البيانات',
        content: [
          '**تغطي سياسة الخصوصية (آخر تحديث في 3 نوفمبر 2026) الموقع phone-harness.com وخدمة Phone Harness Cloud، وتنص على أنه عندما تستخدم أنت أو وكيلك هاتفًا سحابيًا فإنها تسجّل النشاط تلقائيًا: الأوامر ومدخلاتها والنصوص المكتوبة والنقرات والتطبيقات والصفحات المستخدمة وتفاصيل الجلسة.** والأغراض المعلنة هي تشغيل الخدمة وتأمينها وتحسينها ومنع إساءة الاستخدام. كما تجمع اسمك وبريدك الإلكتروني من تسجيل الدخول وسجلات الفوترة وسجلات الجلسات؛ وتذهب بيانات البطاقة إلى Stripe.',
          'تذكر السياسة الجهات التالية بوصفها خدمات تستعين بها: Clerk (تسجيل الدخول) وStripe (المدفوعات) وAmazon Web Services (الاستضافة في الولايات المتحدة) وVercel وPostHog (التحليلات، بموافقتك فقط) وLoops (البريد الإلكتروني). تُمسح هواتف Android المؤقتة عند انتهاء الجلسة؛ أما هواتف Android المحفوظة وهواتف iPhone السحابية فتحتفظ بالتطبيقات وتسجيلات الدخول والملفات إلى أن تعيد ضبطها، ويُمسح iPhone السحابي خلال 7 أيام من انتهاء الاشتراك. ويضيف ملف README أن أداة سطر الأوامر تطبع إشعارًا من سطر واحد عند وجود إصدار جديد، ويمكن إيقافه بمتغير بيئة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه عبارات الجهة المطورة. لم تقم PromptQuorum بتدقيق الخدمة أو حركة الشبكة الخاصة بأداة سطر الأوامر، وتصف السياسة الموقع والخدمة السحابية لا هاتفًا توصله بنفسك.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المطورون الذين يشغّلون وكيل برمجة بالفعل** ويريدون أن يتحكم في هاتف حقيقي.',
          '**مالكو أجهزة Mac الراغبون في التحكم في iPhone،** وهو ما لا يتطلب، بحسب README، jailbreak ولا تطبيقًا على الهاتف.',
          '**الفرق التي تحتاج إلى هواتف كثيرة** ولا تمانع سحابة مستضافة مدفوعة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'القيود وما لم نتمكن من التحقق منه',
        items: [
          '**القيود التي يسردها README.** فتح قفل iPhone يوقف المرآة مؤقتًا، وهاتف Android المقفل برمز PIN يحتاج إليك، ويقرأ OCR النص لكنه لا يرى الأيقونات، ولا يوجد دعم للمس المتعدد أو الكاميرا أو Face ID، ويظهر فيديو DRM أسود، وتوصيل الهاتف مهمتك دائمًا.',
          '**الموثوقية العملية.** لم تشغّل PromptQuorum أداة Phone Harness، ولا تنشر المصادر أي أرقام قياس أو نسب نجاح.',
          '**النماذج المحلية.** تذكر المصادر Claude Code وCodex و"أي وكيل"، لكنها لا تقول هل يستطيع نموذج محلي، مثلًا عبر Ollama، تشغيله.',
          '**الادعاءات السحابية.** قُرئت ميزة stealth والأرقام الحقيقية والدعم من Y Combinator والخدمة التجريبية المفتوحة من صفحات الجهة المطورة وحدها.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          { 'التطبيق': '[PhoneClaw](/ar/power-local-llm/phoneclaw-review)', 'المنصات': 'macOS', 'السعر / الترخيص': 'مجاني / Apache-2.0', 'الفرق الرئيسي': 'تطبيق macOS يتيح لوكيل ذكاء اصطناعي التحكم في هاتفك وأتمتته' },
          { 'التطبيق': '[Open Interpreter](/ar/power-local-llm/open-interpreter-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الترخيص': 'مجاني / Apache-2.0', 'الفرق الرئيسي': 'يتيح لنموذج LLM محلي التحكم في جهاز الكمبيوتر وتنفيذ الشيفرة، وليس الهاتف' },
          { 'التطبيق': '[Local Operator](/ar/power-local-llm/local-operator-review)', 'المنصات': 'macOS وWindows وLinux', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الرئيسي': 'وكيل سطح مكتب يكتب الشيفرة ويشغّلها على جهازك، بنموذج محلي أو مستضاف' },
        ],
        note: 'تفاصيل المنافسين تتغير كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى jailbreak لهاتف iPhone أو إلى تثبيت تطبيق عليه؟',
            a: 'لا، بحسب README. يُدار iPhone عبر نافذة iPhone Mirroring على جهاز Mac، فلا يُثبَّت شيء على الهاتف.',
          },
          {
            q: 'كيف أحدّث Phone Harness؟',
            a: 'شغّل أمر التحديث الخاص به. وتطبع الأداة أيضًا سطرًا واحدًا عند وجود إصدار أحدث؛ وضبط PHONE_HARNESS_NO_UPDATE_CHECK=1 يوقف هذا الإشعار.',
          },
          {
            q: 'أين تُحفظ الدوال المساعدة التي يكتبها وكيلي؟',
            a: 'في ~/.phone-harness/agent-workspace، خارج مجلد التثبيت، فتبقى بعد الترقية؛ ولا يُمس مجلد العمل الموجود.',
          },
          {
            q: 'لماذا يعيد رابط المستودع التوجيه؟',
            a: 'نُشر أولًا باسم ShawnPana/phone-harness وهو الآن في phone-harness/phone-harness؛ ويعيد العنوان القديم التوجيه.',
          },
          {
            q: 'كم تستمر الجلسة السحابية؟',
            a: 'يذكر README أن أمر البدء يشغّل جلسة لمدة 15 دقيقة افتراضيًا، ويمكن تعديلها بخيار المدة، وأن أمر الإيقاف ينهيها ويعيد كتابة هاتف Android المحفوظ.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Phone Harness أداة مجانية بترخيص MIT تمنح وكيل برمجة، بحسب الجهة المطورة، نقرًا وكتابةً وقراءةً للشاشة حقيقية على هاتف iPhone أو Android، دون jailbreak ودون تثبيت أي شيء على الهاتف، إضافةً إلى هواتف مستضافة مدفوعة. وقد حُدّثت قبل أيام من هذا الفحص ولها سياسة خصوصية منشورة. في المقابل، عمر المشروع أقل من ثلاثة أشهر عند الإصدار 0.3.3، والتحكم في iPhone يحتاج إلى جهاز Mac، ولا يلتقط OCR الأيقونات غير الموسومة، وتسجّل الخدمة السحابية نشاط الهاتف بحسب ما تذكره هي، ويأتي كل ادعاء عن السلوك من الجهة المطورة. يناسب المطورين الذين يشغّلون وكيل برمجة بالفعل ويريدون الوصول إلى الهاتف؛ ومن يريد نهجًا مختلفًا يمكنه مقارنة [PhoneClaw](/ar/power-local-llm/phoneclaw-review) أو [Open Interpreter](/ar/power-local-llm/open-interpreter-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Phone Harness](https://phone-harness.com) — الصفحة الرئيسية للجهة المطورة: الوصف وخطط السحابة وأسعارها، فُحصت في 8 نوفمبر 2026.',
          '[سياسة خصوصية Phone Harness](https://phone-harness.com/privacy) و[التوثيق](https://phone-harness.com/docs) — معالجة البيانات وجهات المعالجة والاحتفاظ بالبيانات على الهاتف.',
          '[phone-harness على GitHub](https://github.com/phone-harness/phone-harness) — README ودليل التثبيت وترخيص MIT وتواريخ الإصدار والدفع.',
          '[phone-harness على PyPI](https://pypi.org/project/phone-harness/) — الإصدار 0.3.3 وتاريخ الرفع.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PhoneClaw](/ar/power-local-llm/phoneclaw-review) — تطبيق macOS يتيح لوكيل ذكاء اصطناعي التحكم في هاتف.',
          '[مراجعة Open Interpreter](/ar/power-local-llm/open-interpreter-review) — أداة تتيح لنموذج LLM محلي التحكم في جهاز الكمبيوتر.',
          '[مراجعة Local Operator](/ar/power-local-llm/local-operator-review) — وكيل سطح مكتب يكتب الشيفرة ويشغّلها.',
          '[مقارنة أدوات الشيفرة والتطوير للنماذج المحلية](/ar/power-local-llm/local-llm-code-development-compared) — المقارنة التصنيفية لأدوات البرمجة والوكلاء.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-08',
    dateModified: '2026-11-08',
    next_refresh_due: '2027-05-08',
    theme: 'Overview & Reference',
    heroImage: '/images/phone-harness-review-hero-ko.webp',
    title: 'Phone Harness 리뷰: 코딩 에이전트가 iPhone과 Android 폰을 사용하게 하다',
    seoTitle: 'Phone Harness 리뷰: iPhone·Android 제어',
    intro:
      'Phone Harness는 Phone Harness Inc.가 공개한 MIT 라이선스 명령줄 도구로, 자체 페이지에 따르면 Claude Code나 Codex 같은 코딩 에이전트가 실제 iPhone 또는 Android 폰을 탭하고 입력하고 스크롤할 수 있게 하며, 호스팅형 클라우드 폰도 선택할 수 있습니다. 이 리뷰는 2026년 11월 8일에 확인한 제작사의 사이트, 개인정보 처리방침, 저장소, PyPI 등록 정보를 바탕으로 합니다.',
    metaDescription:
      'Phone Harness 리뷰: 코딩 에이전트가 iPhone과 Android 폰을 조작하게 하는 오픈소스 CLI. 설치, 클라우드 요금, 개인정보 처리방침, 미확인 사항을 정리했습니다.',
    twitterDescription:
      'Phone Harness 리뷰: 코딩 에이전트로 실제 iPhone·Android 폰을 조작하는 MIT 라이선스 CLI. 요구 사항, 클라우드 요금, 미확인 사항을 다룹니다.',
    audience:
      '코딩 에이전트를 사용하며 Phone Harness에 무엇이 필요한지, 클라우드 폰 요금은 얼마인지, 개인정보 처리방침은 무엇을 말하는지, 어떤 내용이 출처에서 확인되지 않았는지 알고 싶은 개발자.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Phone Harness 리뷰',
    targetKeywords: [
      'phone harness 리뷰',
      'phone-harness',
      'ai 에이전트 iphone 제어',
      'ai 에이전트 android adb 제어',
      'claude code 폰 자동화',
      'iphone 미러링 ai 에이전트',
    ],
    current_hardware_mentioned: ['iPhone', 'Android phone', 'Mac with iPhone Mirroring'],
    leadAnswerBlock:
      '**Phone Harness(버전 0.3.3, 2026년 11월 2일 릴리스)는 제작사에 따르면 Claude Code나 Codex 같은 코딩 에이전트가 실제 iPhone 또는 Android 폰을 읽고 조작할 수 있게 하는 무료 MIT 라이선스 명령줄 도구이며, 호스팅형 폰을 제공하는 유료 클라우드 서비스가 별도로 있습니다.** 이 리뷰의 모든 동작 및 개인정보 관련 설명은 제작사의 자체 페이지와 저장소에서 가져온 것이며, PromptQuorum은 직접 설치하거나 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Phone Harness를 실행하려면 무엇이 필요합니까?',
        answer:
          'uv와 Python 3.12가 설치된 컴퓨터와 폰이 필요합니다. iPhone은 iPhone 미러링이 가능한 macOS 15 이상, Android는 macOS·Linux·Windows에서 USB 디버깅이 켜진 adb, 클라우드 폰은 계정만 있으면 됩니다.',
        bullets: [
          'iPhone에서는 Apple Vision OCR로, Android에서는 접근성 트리로 화면을 읽습니다.',
          '모든 MCP 클라이언트와 연결되며 Hermes Agent와 OpenClaw용 플러그인이 있습니다.',
          '호스팅형 Android·iPhone 폰은 별도의 유료 서비스로 제공됩니다.',
          '멀티터치, 카메라, Face ID 흐름은 처리할 수 없으며, OCR은 텍스트만 인식하고 아이콘은 인식하지 못합니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Phone Harness란?', anchor: 'what-is-phone-harness' },
      { label: '구하는 방법', anchor: 'get-it' },
      { label: '필요한 환경', anchor: 'requirements' },
      { label: '요금', anchor: 'pricing' },
      { label: '출처에서 확인된 기능', anchor: 'key-features' },
      { label: '개인정보 및 데이터 처리', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '한계와 확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
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
            text: 'Phone Harness는 코딩 에이전트에게 실제 iPhone 또는 Android 폰에서의 탭, 입력, 화면 읽기 기능을 제공하는 오픈소스 명령줄 도구입니다.',
          },
          {
            type: 'plain-terms',
            text: '에이전트가 앱 열기, 단어 탭하기, 텍스트 입력하기 같은 짧은 스크립트를 작성하면, Phone Harness가 이를 실제 터치로 바꾸고 화면에 무엇이 있는지 알려 줍니다.',
          },
        ],
        items: [
          '유지 관리: 저장소는 2026년 8월 7일에 만들어졌고 0.3.3 릴리스가 11월 2일, 마지막 코드 푸시가 2026년 11월 3일이므로 활발히 개발되고 있으며 방치된 프로젝트 경고는 해당되지 않습니다.',
          '라이선스: MIT이며 소스는 GitHub에 있습니다.',
          '지원 범위: Android는 macOS, Linux, Windows에서 작동하며, iPhone 제어에는 Mac이 필요합니다.',
          '비용: 도구는 무료이며, 호스팅형 클라우드 폰은 유료 서비스입니다.',
          '근거: 2026년 11월 8일에 읽은 제작사의 사이트, 저장소, PyPI 등록 정보이며 직접 테스트는 하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 Phone Harness를 설치, 테스트, 벤치마크하지 않았습니다. 아래의 동작, 안정성, 개인정보 관련 설명은 제작사의 주장입니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-phone-harness',
        title: 'Phone Harness란?',
        content: [
          '**Phone Harness는 AI 에이전트가 사람처럼 폰을 사용하게 하는 명령줄 “하니스”입니다. README에 따르면 탈옥, Xcode, 폰에 설치할 앱 없이 탭하고, 입력하고, 스크롤하고, 화면을 읽습니다.** 발행처는 Phone Harness Inc.이며, 홈페이지에는 Y Combinator의 투자를 받고 있다고 되어 있습니다. 저장소는 처음 GitHub 사용자 ShawnPana 아래에 공개되었고 현재는 phone-harness 조직에 있습니다.',
          '에이전트는 앱 열기, 텍스트 탭하기, 텍스트 입력하기, 화면 읽기 같은 헬퍼를 사용하는 짧은 Python 스크립트를 phone-harness 명령에 파이프로 전달합니다. iPhone에서는 Mac의 iPhone 미러링 창을 캡처해 Apple Vision OCR로 읽고 입력을 이벤트로 보냅니다. Android에서는 스크린샷과 입력에 adb를, 텍스트에 접근성 트리를 USB 또는 Wi-Fi로 사용합니다. 같은 헬퍼가 호스팅형 클라우드 폰도 제어하므로, 한 폰용으로 작성한 스크립트가 다른 폰에서도 실행됩니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: [
          '**Phone Harness는 터미널에서 한 줄 명령으로 설치합니다: `uv tool install --python 3.12 --upgrade --force phone-harness`.** 제작사가 권장하는 방법은 설정 프롬프트를 코딩 에이전트에 보내는 것으로, 에이전트가 CLI를 설치하고 사용할 폰을 묻고 사용자가 직접 해야 하는 단계를 안내합니다.',
        ],
        columns: ['채널', '링크'],
        rows: [
          { '채널': '웹사이트', '링크': '[phone-harness.com](https://phone-harness.com)' },
          { '채널': '문서', '링크': '[phone-harness.com/docs](https://phone-harness.com/docs)' },
          { '채널': '개인정보 처리방침', '링크': '[phone-harness.com/privacy](https://phone-harness.com/privacy)' },
          { '채널': '소스 코드 (MIT)', '링크': '[github.com/phone-harness/phone-harness](https://github.com/phone-harness/phone-harness)' },
          { '채널': 'PyPI 패키지', '링크': '[pypi.org/project/phone-harness](https://pypi.org/project/phone-harness/)' },
          { '채널': '클라우드 폰', '링크': '[Phone Harness Cloud](https://phone-harness.com/dashboard)' },
        ],
        note: '검토한 버전: 0.3.3, 2026년 11월 2일에 PyPI에 업로드되고 GitHub에서 릴리스되었습니다. 확인 시점의 최신 업스트림 업데이트는 2026년 11월 3일의 코드 푸시였습니다. 터미널과 개발 환경(uv, Python 3.12)이 필요합니다. 설치 프로그램, App Store, Google Play 등록은 없으며 GitHub 릴리스에도 내려받을 파일이 없습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '필요한 환경',
        content: [
          '**폰에 필요한 조건은 선택하는 모드에 따라 다르며, README와 설치 가이드에는 네 가지가 나와 있습니다.**',
        ],
        columns: ['폰', '필요 조건'],
        rows: [
          { '폰': '내 iPhone', '필요 조건': 'macOS 15+, iPhone 미러링, iOS 18+ 폰' },
          { '폰': '내 Android', '필요 조건': 'adb와 USB 디버깅, macOS·Linux·Windows' },
          { '폰': '클라우드 Android', '필요 조건': '계정, adb, 폰으로의 아웃바운드 TCP' },
          { '폰': '클라우드 iPhone', '필요 조건': '계정, 모든 OS에서 HTTPS로 제어' },
        ],
        note: '내 Mac에서 iPhone을 사용하려면 손쉬운 사용 및 화면 기록 권한도 필요하며, 패키지 자체는 Python 3.10 이상을 지원합니다. 내장 doctor 명령으로 설정을 점검할 수 있습니다.',
      },
      pricing: {
        id: 'pricing',
        title: '요금',
        content: [
          '**명령줄 도구는 MIT 라이선스로 무료이며, 유료 부분은 Phone Harness Cloud입니다. Android는 분 단위 또는 구독으로, iPhone은 월 정액 구독으로 과금됩니다.** 사이트에는 클라우드 서비스가 “Open beta”로 표시되어 있습니다.',
        ],
        columns: ['플랜', '가격 (USD)'],
        rows: [
          { '플랜': 'Basic (클라우드 Android)', '가격 (USD)': '$0/월 + 폰 1분당 5¢' },
          { '플랜': 'Plus (클라우드 Android)', '가격 (USD)': '$20/월, 1,000분 포함, 이후 분당 4¢' },
          { '플랜': '클라우드 iPhone', '가격 (USD)': '$80/월, 연간 결제 시 $64/월' },
          { '플랜': 'eSIM 포함 클라우드 iPhone', '가격 (USD)': '$100/월, 연간 결제 시 $80/월' },
          { '플랜': 'Scale (전용 폰)', '가격 (USD)': '제작사에 문의' },
        ],
        note: '2026년 11월 8일 phone-harness.com에서 확인했습니다. 사이트는 가격을 미국 달러로만 표시하며, 가격은 제작사가 정하고 변경될 수 있습니다. 홈페이지에 따르면 신규 계정은 $5 크레딧으로 시작합니다.',
      },
      features: {
        id: 'key-features',
        title: '출처에서 확인된 기능',
        content: [
          '**아래 항목은 모두 제작사 사이트 또는 저장소 README에서 가져온 것입니다.**',
        ],
        items: [
          '**모든 폰에 하나의 헬퍼 세트.** iPhone, Android, 클라우드 폰용으로 작성한 스크립트가 서로 다른 폰에서도 실행되며, 기본 폰은 설정으로 지정합니다.',
          '**에이전트 연동.** 설정 프롬프트는 Claude Code와 Codex를 대상으로 하며, 호스팅형 MCP 엔드포인트가 모든 MCP 클라이언트를 지원하고(현재는 클라우드 폰만), Hermes Agent와 OpenClaw용 플러그인이 있습니다.',
          '**스스로 확장하는 헬퍼.** 에이전트가 작성한 헬퍼는 홈 디렉터리의 작업 공간 폴더에 저장되며 업그레이드해도 지워지지 않습니다.',
          '**클라우드 폰.** 임시 Android 폰, 앱과 로그인을 유지하는 저장형 Android 폰, 전용 실제 iPhone이 있으며, 에이전트가 작업하는 동안 브라우저에서 실시간 화면을 볼 수 있습니다.',
          '**사이트가 내세우는 클라우드 부가 기능.** SMS와 2단계 인증 코드를 위한 실제 전화번호, 지속되는 로그인, 앱이 사람으로 인식하게 하는 “stealth”가 있으며, PromptQuorum은 이를 확인하지 않았습니다. 또한 다른 앱을 자동으로 조작하면 해당 앱의 이용약관과 충돌할 수 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 및 데이터 처리',
        content: [
          '**개인정보 처리방침(최종 업데이트 2026년 11월 3일)은 phone-harness.com과 Phone Harness Cloud를 대상으로 하며, 사용자나 에이전트가 클라우드 폰을 사용하면 명령과 입력값, 입력한 텍스트, 탭, 사용한 앱과 페이지, 세션 정보 등의 활동이 자동으로 기록된다고 밝힙니다.** 명시된 목적은 서비스 운영, 보안 유지, 개선과 악용 방지입니다. 또한 로그인 시 이름과 이메일, 결제 기록, 세션 로그를 수집하며, 카드 정보는 Stripe로 전달됩니다.',
          '방침은 이용 서비스로 Clerk(로그인), Stripe(결제), Amazon Web Services(미국 내 호스팅), Vercel, PostHog(분석, 동의한 경우에만), Loops(이메일)를 명시합니다. 임시 Android 폰은 세션이 끝나면 초기화되고, 저장형 Android 폰과 클라우드 iPhone은 사용자가 초기화할 때까지 앱, 로그인, 파일이 유지되며, 클라우드 iPhone은 구독 종료 후 7일 이내에 삭제됩니다. README에는 새 버전이 있으면 CLI가 한 줄 안내를 출력하며 환경 변수로 끌 수 있다고 추가로 적혀 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 제작사의 주장입니다. PromptQuorum은 서비스나 CLI의 네트워크 트래픽을 감사하지 않았으며, 방침은 웹사이트와 클라우드 서비스를 설명할 뿐 사용자가 직접 연결한 폰은 다루지 않습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**이미 코딩 에이전트를 운영 중인 개발자**로, 에이전트가 실제 폰을 조작하기를 원하는 경우.',
          '**탈옥이나 폰 앱 설치 없이 iPhone을 제어하고 싶은 Mac 사용자.**',
          '**많은 폰이 필요한 팀**으로, 호스팅형 유료 클라우드를 받아들일 수 있는 경우.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '한계와 확인하지 못한 사항',
        items: [
          '**README에 나와 있는 한계.** iPhone 잠금을 해제하면 미러링이 일시 중지되고, PIN이 걸린 Android는 사용자가 직접 풀어야 하며, OCR은 텍스트만 인식하고 아이콘은 인식하지 못합니다. 멀티터치, 카메라, Face ID는 지원되지 않고, DRM 영상은 검게 표시되며, 폰 연결은 항상 사용자의 몫입니다.',
          '**실제 사용 시 안정성.** PromptQuorum은 Phone Harness를 실행하지 않았으며, 출처에는 벤치마크나 성공률 수치가 없습니다.',
          '**로컬 모델.** 출처는 Claude Code, Codex, “any agent”를 언급하지만 Ollama 등을 통한 로컬 모델로 구동할 수 있는지는 밝히지 않습니다.',
          '**클라우드 관련 주장.** stealth, 실제 전화번호, Y Combinator 투자, 오픈 베타 서비스는 제작사의 자체 페이지에서만 확인했습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이점'],
        rows: [
          { '앱': '[PhoneClaw](/ko/power-local-llm/phoneclaw-review)', '플랫폼': 'macOS', '가격 / 라이선스': '무료 / Apache-2.0', '주요 차이점': 'AI 에이전트가 폰을 제어하고 자동화하게 하는 macOS 앱' },
          { '앱': '[Open Interpreter](/ko/power-local-llm/open-interpreter-review)', '플랫폼': 'macOS, Windows, Linux', '가격 / 라이선스': '무료 / Apache-2.0', '주요 차이점': '로컬 LLM이 폰이 아닌 컴퓨터를 제어하고 코드를 실행하게 함' },
          { '앱': '[Local Operator](/ko/power-local-llm/local-operator-review)', '플랫폼': 'macOS, Windows, Linux', '가격 / 라이선스': '무료 / MIT', '주요 차이점': '로컬 또는 호스팅 모델로 컴퓨터에서 코드를 작성하고 실행하는 데스크톱 에이전트' },
        ],
        note: '경쟁 제품의 세부 정보는 자주 바뀌므로 각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'iPhone을 탈옥하거나 앱을 설치해야 합니까?',
            a: 'README에 따르면 그렇지 않습니다. iPhone은 Mac의 iPhone 미러링 창을 통해 제어되므로 폰에는 아무것도 설치되지 않습니다.',
          },
          {
            q: 'Phone Harness는 어떻게 업데이트합니까?',
            a: '업데이트 명령을 실행합니다. 새 버전이 있으면 CLI가 한 줄을 출력하며, PHONE_HARNESS_NO_UPDATE_CHECK=1로 설정하면 이 안내가 꺼집니다.',
          },
          {
            q: '에이전트가 작성한 헬퍼는 어디에 저장됩니까?',
            a: '설치 경로 밖의 ~/.phone-harness/agent-workspace에 저장되므로 업그레이드해도 유지되며, 기존 작업 공간은 그대로 둡니다.',
          },
          {
            q: '저장소 링크가 왜 리디렉션됩니까?',
            a: '처음에는 ShawnPana/phone-harness로 공개되었고 현재는 phone-harness/phone-harness에 있으며, 이전 주소는 리디렉션됩니다.',
          },
          {
            q: '클라우드 세션은 얼마나 지속됩니까?',
            a: 'README에 따르면 시작 명령은 기본적으로 15분 동안 세션을 실행하며 시간 옵션으로 조정할 수 있고, 중지 명령으로 세션을 끝내면 저장형 Android는 다시 기록됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Phone Harness는 제작사에 따르면 탈옥 없이, 폰에 아무것도 설치하지 않고 코딩 에이전트에게 iPhone 또는 Android 폰에서의 실제 탭, 입력, 화면 읽기를 제공하는 무료 MIT 라이선스 도구이며, 유료 호스팅형 폰도 제공합니다. 이번 확인 며칠 전에 업데이트되었고 개인정보 처리방침도 공개되어 있습니다. 반면 프로젝트는 3개월이 채 되지 않은 버전 0.3.3이고, iPhone 제어에는 Mac이 필요하며, OCR은 라벨 없는 아이콘을 놓치고, 클라우드 서비스는 자체 설명에 따라 폰 활동을 기록하며, 모든 동작 관련 주장은 제작사에서 나왔습니다. 이미 코딩 에이전트를 운영하며 폰 접근이 필요한 개발자에게 적합하며, 다른 접근 방식을 원하신다면 [PhoneClaw](/ko/power-local-llm/phoneclaw-review) 또는 [Open Interpreter](/ko/power-local-llm/open-interpreter-review)와 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Phone Harness](https://phone-harness.com) — 제작사 홈페이지: 설명, 클라우드 플랜과 가격. 2026년 11월 8일 확인.',
          '[Phone Harness 개인정보 처리방침](https://phone-harness.com/privacy) 및 [문서](https://phone-harness.com/docs) — 데이터 처리, 처리자, 폰 데이터 보관.',
          '[GitHub의 phone-harness](https://github.com/phone-harness/phone-harness) — README, 설치 가이드, MIT 라이선스, 릴리스 및 푸시 날짜.',
          '[PyPI의 phone-harness](https://pypi.org/project/phone-harness/) — 버전 0.3.3과 업로드 날짜.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PhoneClaw 리뷰](/ko/power-local-llm/phoneclaw-review) — AI 에이전트가 폰을 제어하게 하는 macOS 앱.',
          '[Open Interpreter 리뷰](/ko/power-local-llm/open-interpreter-review) — 로컬 LLM이 컴퓨터를 제어하게 하는 도구.',
          '[Local Operator 리뷰](/ko/power-local-llm/local-operator-review) — 코드를 작성하고 실행하는 데스크톱 에이전트.',
          '[로컬 LLM 코드·개발 도구 비교](/ko/power-local-llm/local-llm-code-development-compared) — 코딩 및 에이전트 도구 카테고리 비교.',
        ],
      },
    },
  },
}
