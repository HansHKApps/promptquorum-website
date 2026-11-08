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
          '**Cloud extras the site advertises.** Real phone numbers for SMS and two-factor codes, persistent logins and "stealth" so apps see a person; PromptQuorum has not checked these.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Handling',
        content: [
          '**The privacy policy (last updated 3 November 2026) covers phone-harness.com and Phone Harness Cloud, and says that when you or your agent use a cloud phone it automatically logs the activity: commands and their inputs, text entered, taps, apps and pages used, and session details.** The stated purposes are running, securing and improving the service and preventing abuse. It also collects your name and email from sign-in, billing records and session logs; card details go to Stripe.',
          'The policy names Clerk (sign-in), Stripe (payments), Amazon Web Services (hosting in the United States), Vercel, PostHog (analytics, only with consent) and Loops (email) as processors. Temporary Android phones are wiped when the session ends; saved Android phones and cloud iPhones keep apps, logins and files until you reset them, and a cloud iPhone is erased within 7 days after the subscription ends. The README adds that the CLI prints a one-line notice when a new version exists, which an environment variable switches off.',
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
          '**Mac owners who want iPhone control** without a jailbreak or an app on the phone.',
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
}
