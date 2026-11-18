// Sokuji Review: Live Two-Way Speech Translation for Meetings, Cloud or On Your Own Device
// Slug: sokuji-review
// Companion to: buzz-captions-review, sablate-review, minutes-review, rescript-review
// Sources (all read 2026-11-18, no hands-on testing): official website (home page, /download, /local-ai, /privacy summary, /docs/privacy dated 14 November 2026, /docs/terms),
// GitHub repository kizuna-ai-lab/sokuji (API metadata, README, LICENSE, releases v0.50.1 to v0.50.4 with asset lists, commits, docs/privacy-policy.html dated 3 June 2025).
// The request came from the site owner, not from the maker.
// Last upstream update 2026-11-18 (last commit on main; latest release v0.50.4 on 2026-11-16) => no stale warning.
// Theme: 'Voice, Speech & Multimodal' (as rescript-review). HQ flag: JP (Terms of Service name the laws of Japan and the courts of Tokyo; set per the owner's standing HQ-flag rule).
// Licence: AGPL-3.0. The maker's account server is not open source (privacy page).
// No typed star counts in the text; starsFor() is not needed because no count is quoted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-en.webp',
    title: 'Sokuji Review: Live Two-Way Speech Translation for Meetings',
    seoTitle: 'Sokuji Review: Live Speech Translation for Meetings',
    intro:
      'Sokuji 0.50.4 is an open-source desktop app and Chrome and Edge extension that translates speech live in both directions for bilingual meetings. It works with cloud AI providers or, according to the maker, with recognition, translation and speech models that run on your own device. The licence is AGPL-3.0. This review is based on the official website, the GitHub repository with its releases, and the privacy and terms pages, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Sokuji is an open-source live speech translation app for bilingual meetings, with cloud providers or on-device models. What is confirmed and what is not.',
    twitterDescription:
      'Sokuji: an open-source live speech translation app for bilingual meetings, as a desktop app and a Chrome and Edge extension, with cloud AI providers or on-device models. What is confirmed.',
    audience:
      'People in bilingual meetings and calls, teams that want live subtitles in another language, and privacy-minded users who want to try on-device recognition, translation and speech',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sokuji review',
    targetKeywords: [
      'Sokuji review',
      'live speech translation app',
      'real-time meeting translation',
      'offline speech translation',
      'virtual microphone translator',
      'open-source live translator',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Sokuji is an open-source (AGPL-3.0) app that translates speech live in both directions for bilingual meetings, using cloud AI providers or, according to the maker, on-device models.** It runs as a desktop app for Windows, macOS and Linux and as a Chrome and Edge extension, and it acts as a virtual microphone for Zoom, Google Meet, Microsoft Teams and other apps. According to the maker, the app is free; cloud use is billed by the provider or from a prepaid Kizuna AI balance. PromptQuorum has not tested the app.',
    quickAnswerTop: {
      en: {
        question: 'What is Sokuji and who is it for?',
        answer:
          'Sokuji is a live speech translation app for meetings, developed in the open on GitHub by Kizuna AI Lab. It suits people who talk across a language barrier and want translated voice or subtitles in the apps they already use.',
        bullets: [
          'Licensed under AGPL-3.0; the app is free, and according to the maker on-device models need no account and no API key.',
          'According to the maker, a two-way mode detects which of two chosen languages is spoken and translates in both directions, as a translated voice or as live subtitles.',
          'Works with cloud providers such as OpenAI, Google Gemini, Soniox, Palabra.ai and Doubao AST 2.0, or with on-device models; cloud use is billed by the provider or from a prepaid Kizuna AI balance.',
          'The desktop app acts as a virtual microphone on Windows, macOS and Linux; the Chrome and Edge extension works on supported meeting sites.',
          'Version 0.50.4 was released on 16 November 2026 and the last commit on the main branch was on 18 November 2026.',
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
            text: 'Sokuji is an open-source app that translates speech live in both directions for bilingual meetings, using cloud AI providers or, according to the maker, models that run on your own device.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as an interpreter between you and your meeting app: it listens, translates, and either speaks the result through a virtual microphone or shows it as subtitles. You choose whether recognition, translation and speech come from a cloud provider or from models stored on your computer.',
          },
        ],
        items: [
          'Install a desktop app from the GitHub releases page (setup EXE for Windows, PKG for macOS, DEB or AppImage for Linux), or add the extension for Chrome or Edge from the store.',
          'Pick a provider: your own API key, a prepaid Kizuna AI account, or on-device models that, according to the maker, need no account and no key.',
          'The maker says meeting content goes straight from your device to the provider you picked, and with only on-device models it stays on your computer; its privacy page lists the exceptions, among them Microsoft online engines.',
          'Usage statistics and error reports go to PostHog, and the current privacy policy says the apps have no in-app switch to turn them off.',
          'PromptQuorum has not tested the app, so recognition accuracy, translation quality, latency and on-device speed are unverified.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The privacy page says that with on-device models meeting content never leaves your computer once the models are downloaded. PromptQuorum did not inspect network traffic, so it cannot confirm this beyond what the maker writes.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Sokuji is a live speech translation app by Kizuna AI Lab, released as a desktop app for Windows, macOS and Linux and as a browser extension for Chrome and Edge under the AGPL-3.0 licence.**',
          'It is developed in the open at [github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji). The repository was created in April 2025, version 0.50.4 appeared on 16 November 2026 and the last commit on the main branch was on 18 November 2026, so development is active and no stale-project warning applies. The terms of service name Kizuna AI Lab as the provider and are governed by the laws of Japan, with the courts of Tokyo as exclusive venue. The maker’s [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) page, which the maker presents as a notice under Japanese law, lists Kizuna AI Lab as the operator and says its address and phone number are disclosed on request; PromptQuorum found no published company address or registration number. According to the maker, its account server is not open source.',
          'According to the maker, Sokuji sits between you and your meeting app like a microphone: your speech is recognised, translated and spoken or shown as subtitles in the other language, and what the other side says comes back as subtitles or read aloud to you. A two-way mode detects which of two chosen languages is spoken and translates in both directions. The README and the maker’s documentation list OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, OpenAI-compatible endpoints, a Kizuna AI account and on-device Local Inference as ways to do this.',
          'PromptQuorum has not run the app and has not checked recognition accuracy, translation quality, latency or the speed of the on-device models.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You can install Sokuji as a desktop app from the packages on its GitHub releases page, or add its extension to Chrome or Edge from the store; the maker’s download page lists both.**',
          'The v0.50.4 release lists a setup EXE for Windows, PKG installers for macOS on Apple silicon and on Intel, DEB packages and AppImages for Linux on x64 and arm64, and the extension as a ZIP. The download page says the Windows installer is code-signed through the SignPath Foundation and the macOS app is signed and notarized.',
        ],
        columns: ['Platform', 'Package'],
        rows: [
          { 'Platform': 'Windows', 'Package': 'Setup EXE (VB-CABLE installed separately)' },
          { 'Platform': 'macOS (Apple silicon)', 'Package': 'PKG' },
          { 'Platform': 'macOS (Intel)', 'Package': 'PKG (x64)' },
          { 'Platform': 'Linux (x64, arm64)', 'Package': 'DEB or AppImage' },
          { 'Platform': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', 'Package': 'Extension from the Chrome Web Store' },
          { 'Platform': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', 'Package': 'Extension from Edge Add-ons' },
        ],
        note: 'Download from the [GitHub releases page](https://github.com/kizuna-ai-lab/sokuji/releases/latest) or the maker’s [download page](https://sokuji.kizuna.ai/download). PromptQuorum did not run the installers and did not check whether they are signed or notarized; those statements are the maker’s.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**Sokuji needs Windows, macOS or Linux for the desktop app, or Chromium 116 or newer for the extension; the maker publishes no memory or GPU minimum.**',
          'The maker’s [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) page lists Windows 10 or later, macOS 13 or later and Linux (Ubuntu 20.04 or later recommended) for the desktop app, and also lists a stable broadband connection and a microphone; its Local AI page says on-device models work with the network off once downloaded. According to the download page, the Windows virtual microphone needs VB-CABLE, installed separately; on macOS the audio driver ships inside the installer; on Linux the app creates the virtual microphone through PulseAudio or PipeWire and needs pulseaudio-utils. The extension works only on supported meeting sites; for anything else you need the desktop app. On-device models are downloaded once, and the maker says the app detects your GPU and downloads the engine package built for it. PromptQuorum did not measure memory use or speed.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'Desktop', 'Stated figure': 'Windows 10+, macOS 13+, Ubuntu 20.04+ (recommended)' },
          { 'Item': 'Extension', 'Stated figure': 'Chrome and Edge, Chromium 116 or newer' },
          { 'Item': 'Windows audio', 'Stated figure': 'VB-CABLE, installed separately' },
          { 'Item': 'Linux audio', 'Stated figure': 'PulseAudio or PipeWire, pulseaudio-utils' },
          { 'Item': 'On-device models', 'Stated figure': 'Downloaded once; no expensive GPU needed (README)' },
          { 'Item': 'Memory and GPU', 'Stated figure': 'Not published' },
        ],
        note: 'A provider is needed for translation: on-device models, your own API key or a Kizuna AI account. The maker says none of them is required to install, and that no account is needed to use Sokuji with your own key or on-device models.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Sokuji is built around live speech translation in meetings; the virtual microphone, subtitles and provider choice sit around it.** All items below are maker claims from the website and README.',
        ],
        items: [
          'Two-way translation: set two languages and Sokuji detects which one is spoken and translates in both directions; the README attributes this mode to Soniox and says it covers more than 60 languages.',
          'Translate your voice: the other side hears the translation through a virtual microphone in Zoom, Google Meet, Microsoft Teams, Discord or any app that lets you pick a microphone.',
          'Translate what others say: the extension translates the audio of the meeting tab and the desktop app translates system audio, shown as live subtitles or read aloud to you.',
          'Subtitle mode and caption sharing: translated text on screen, optionally shared so the other side can read along.',
          'On-device models: speech recognition with Whisper-family and other models, translation with Opus-MT language pairs and multilingual language models such as Qwen and TranslateGemma, and speech synthesis with engines such as Piper and Coqui, run through WASM and WebGPU.',
          'Cloud providers: OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, OpenAI-compatible endpoints (desktop only) and a Kizuna AI account; the README lists voice cloning for Palabra.ai, Doubao AST 2.0 and Soniox.',
          'Audio tools: AI noise suppression, echo cancellation and a passthrough to monitor your own voice.',
          'Interface: 30 interface languages, a Simple Mode for setup and an Advanced Mode with waveform display.',
          'Meeting notes: with a Kizuna AI account the maker offers notes written from the session transcript, which passes through its server to OpenAI and is not kept, according to the privacy page.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Translating a meeting means sending other people’s speech to the provider you choose, and voice cloning processes a person’s voice. Tell participants before you use it, check your employer’s and the meeting platform’s rules, and get consent before cloning anyone’s voice. This is general information, not legal advice.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**According to the maker, meeting content goes straight from your device to the AI provider you choose, never through Kizuna AI, and with only on-device models it stays on your computer; PromptQuorum did not inspect network traffic and cannot confirm this.**',
          'The privacy page, dated 14 November 2026, lists the exceptions. With a Kizuna AI account, a voice sample recorded for voice cloning passes through the maker’s server on its way to Soniox and is discarded afterwards, and the transcript text of a session for which Kizuna AI writes meeting notes passes through its server to OpenAI and is not kept. Without an account you use your own key or on-device models.',
          'The “Online” engines in local inference, Edge TTS for speech and Bing Translator, do not run on your computer. According to the maker they are used automatically when no on-device model is ready, or when you choose them, and the text to be spoken or translated is then sent to Microsoft. Other connections that carry no meeting content are model downloads, update checks, latency checks against the Soniox or Qwen service you use, and usage statistics and error reports.',
          'Usage statistics and error reports go to PostHog in the United States and, once you sign in, are linked to your account ID, email and name, according to the maker; the policy says there is currently no in-app switch to turn them off. A Kizuna AI account stores an email address, sign-in records, balance and usage, and payment details received from Stripe; the maker states that it does not sell or rent data and does not train models on it.',
          'The source code of the apps is public on GitHub, so the data flow can be audited; the maker’s account server is not open source.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Sokuji fits people who talk across a language barrier and want translation inside the meeting apps they already use.**',
        ],
        items: [
          'People in bilingual meetings who want the other side to hear a translated voice through a virtual microphone, in any app and not only in a browser.',
          'Listeners at lectures, talks or videos who want live translated subtitles of what they hear.',
          'Speakers who want their audience to read translated subtitles of their own talk.',
          'Privacy-minded users who want to try recognition, translation and speech on their own device without a key, according to the maker.',
          'Readers who prefer an app whose code is public under AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Sokuji is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: situations where a mistranslation matters. The maker’s own page says a large hosted model is still ahead of on-device models on accuracy and latency, and that for a high-stakes call you will probably want one.',
          'Not a fit: anyone who needs usage statistics switched off. The privacy policy dated 14 November 2026 says there is currently no in-app setting to disable them.',
          'Unverified: recognition accuracy, translation quality, latency and the speed of the on-device models on typical laptops. PromptQuorum has not run the app.',
          'Unverified: the claim that nothing leaves the device with on-device models, next to the Microsoft online engines, model downloads, update checks and usage statistics; PromptQuorum did not inspect network traffic.',
          'Unverified: whether the Windows installer is code-signed and the macOS app is notarized; these are the maker’s statements.',
          'Unclear: the repository still contains an extension privacy policy file dated 3 June 2025 that describes analytics as opt-in with an in-app switch, while the current policy says there is no switch; PromptQuorum treats the current policy as the one that applies.',
          'Unverified: the privacy policy mentions a mobile application, but neither the download page nor the README lists a mobile download, so PromptQuorum treats Sokuji as desktop and browser only.',
          'Unverified: company details beyond the name Kizuna AI Lab (the Commerce Disclosure page says the address is disclosed on request; no registration number found), user numbers and independent reviews; PromptQuorum did not look for independent reviews.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokuji vs Alternatives',
        itemHeadings: true,
        content: [
          '**Sokuji overlaps with tools that transcribe or subtitle speech, but it is built for live translation in meetings; PromptQuorum has not compared it with them hands-on.** The tools below are in the directory and are described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Sokuji', 'Noted in sources': 'AGPL-3.0; desktop + browser; live two-way translation' },
          { 'Tool': '[Buzz](/power-local-llm/buzz-captions-review)', 'Noted in sources': 'MIT; Mac/Windows/Linux; local Whisper transcription' },
          { 'Tool': '[Sablate](/power-local-llm/sablate-review)', 'Noted in sources': 'Closed source; Windows/Mac; subtitles and translation' },
          { 'Tool': '[Minutes](/power-local-llm/minutes-review)', 'Noted in sources': 'MIT; Mac/Windows; meeting notes from transcription' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Does Sokuji work offline?',
            a: 'According to the maker, yes once the on-device models are downloaded: recognition, translation and speech then run on your computer without a network. According to the privacy page, the “Online” engines, Edge TTS and Bing Translator, need the network and send text to Microsoft, and the app still makes update and statistics connections. PromptQuorum did not test this.',
          },
          {
            q: 'Is Sokuji free?',
            a: 'The app is free and open source under AGPL-3.0, according to the maker, and on-device models cost nothing. Cloud providers are billed by the provider when you use your own key, or from a prepaid balance in US dollars when you use a Kizuna AI account.',
          },
          {
            q: 'Which meeting apps does Sokuji work with?',
            a: 'The desktop app registers as a microphone, so any app that lets you choose a microphone can use it. According to the download page, the extension is built for Zoom, Google Meet, Microsoft Teams, Slack, Discord, Jitsi Meet, Whereby, Gather Town and Yandex Telemost.',
          },
          {
            q: 'Does Sokuji send my meetings to Kizuna AI?',
            a: 'According to the maker, no: meeting content goes straight to the provider you picked. The exceptions it lists are voice-clone samples and meeting-note transcripts when you use a Kizuna AI account, which pass through its server and are not kept. PromptQuorum did not inspect network traffic.',
          },
          {
            q: 'Can I turn off usage statistics?',
            a: 'The privacy policy dated 14 November 2026 says there is currently no in-app switch to turn them off. An older privacy policy file in the repository describes an opt-out, so check the setting in the app before you rely on either.',
          },
          {
            q: 'How often does Sokuji update?',
            a: 'GitHub lists version 0.50.1 on 10 November 2026, 0.50.2 on 11 November 2026, 0.50.3 on 14 November 2026 and 0.50.4 on 16 November 2026, and the last commit on the main branch was on 18 November 2026.',
          },
          {
            q: 'Which systems does Sokuji run on?',
            a: 'According to the maker’s Commerce Disclosure page, the desktop app needs Windows 10 or later, macOS 13 or later, or Linux (Ubuntu 20.04 or later recommended). The Chrome and Edge extension needs Chromium 116 or newer. The maker publishes no memory or GPU minimum, and PromptQuorum did not measure memory use or speed.',
          },
          {
            q: 'Do I need an account or an API key for Sokuji?',
            a: 'According to the maker, no account is needed to use Sokuji with your own API key or with on-device models, and neither is required just to install it. To translate you need one of three sources: on-device models, your own API key for a cloud provider, or a prepaid Kizuna AI account.',
          },
          {
            q: 'Which translation providers does Sokuji support?',
            a: 'The README and the maker’s documentation list OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, OpenAI-compatible endpoints (desktop only), a Kizuna AI account and on-device Local Inference. Voice cloning is listed for Palabra.ai, Doubao AST 2.0 and Soniox. According to the maker, meeting content then goes to the provider you pick.',
          },
          {
            q: 'What does two-way mode do?',
            a: 'According to the maker, you set two languages and Sokuji detects which one is spoken and translates in both directions, as a translated voice or as live subtitles. The README attributes this mode to Soniox and says it covers more than 60 languages. PromptQuorum did not test the language detection or the translation quality.',
          },
          {
            q: 'Does Sokuji need extra audio software?',
            a: 'According to the download page, the Windows virtual microphone needs VB-CABLE, which is installed separately; on macOS the audio driver ships inside the installer; on Linux the app creates the virtual microphone through PulseAudio or PipeWire and needs pulseaudio-utils. The extension works only on supported meeting sites, so for other apps you need the desktop app.',
          },
          {
            q: 'How good are the on-device models compared with cloud models?',
            a: 'PromptQuorum has not measured this. The maker’s own Local AI page says a large hosted model is still ahead of on-device models on accuracy and latency, and that for a high-stakes call you will probably want one. On-device models are downloaded once and, according to the README, need no expensive GPU.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Sokuji is worth a look if you hold bilingual meetings and want live two-way translation from a desktop app or a browser extension, with a choice between cloud providers and, according to the maker, on-device models.**',
          'On paper it covers a lot: a virtual microphone for any app, subtitles, two-way language detection, several cloud providers, local models and an open code base. Development is active, with four releases between 10 and 16 November 2026.',
          'The trade-offs are real: the maker itself says on-device quality trails large hosted models, the current policy says usage statistics cannot be switched off in the app, and PromptQuorum has not tested anything. Try it on a low-stakes call and check recognition and translation in both languages before you rely on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Sokuji website](https://sokuji.kizuna.ai) — features and scenarios, checked 18 November 2026.',
          '[Download page](https://sokuji.kizuna.ai/download) — platforms, install requirements and signing statements, checked 18 November 2026.',
          '[Local AI page](https://sokuji.kizuna.ai/local-ai) — on-device models and the maker’s comparison with cloud models, checked 18 November 2026.',
          '[Privacy summary](https://sokuji.kizuna.ai/privacy) — where meeting content goes, checked 18 November 2026.',
          '[Privacy Policy](https://sokuji.kizuna.ai/docs/privacy) — data collected and retention, dated 14 November 2026, checked 18 November 2026.',
          '[Terms of Service](https://sokuji.kizuna.ai/docs/terms) — provider, balance, governing law and venue, checked 18 November 2026.',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — operator, prepaid balance terms and system requirements, presented by the maker as a notice under Japanese law, checked 18 November 2026.',
          '[GitHub repository](https://github.com/kizuna-ai-lab/sokuji) — licence, creation date and last commit, checked 18 November 2026.',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — features, providers, install and privacy notes, checked 18 November 2026.',
          '[GitHub releases](https://github.com/kizuna-ai-lab/sokuji/releases) — release dates and packages for v0.50.4, checked 18 November 2026.',
          '[Older privacy policy file](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — extension privacy policy dated 3 June 2025, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Buzz Review](/power-local-llm/buzz-captions-review) — local Whisper transcription on the desktop.',
          '[Sablate Review](/power-local-llm/sablate-review) — subtitles and translation for video on Windows and Mac.',
          '[Minutes Review](/power-local-llm/minutes-review) — meeting notes from transcription, free and open source.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-de.webp',
    title: 'Sokuji-Rezension: Live-Sprachübersetzung in beide Richtungen für Meetings',
    seoTitle: 'Sokuji-Rezension: Live-Sprachübersetzung für Meetings',
    intro:
      'Sokuji 0.50.4 ist eine quelloffene Desktop-App und Erweiterung für Chrome und Edge, die Sprache für zweisprachige Meetings live in beide Richtungen übersetzt. Sie arbeitet mit Cloud-KI-Anbietern oder laut Hersteller mit Modellen für Spracherkennung, Übersetzung und Sprachausgabe, die auf Ihrem eigenen Gerät laufen. Die Lizenz ist AGPL-3.0. Diese Rezension stützt sich auf die offizielle Website, das GitHub-Repository mit seinen Releases sowie die Datenschutz- und Nutzungsbedingungen, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Sokuji ist eine quelloffene App für Live-Sprachübersetzung in zweisprachigen Meetings, per Cloud oder auf dem Gerät. Was belegt ist und was nicht.',
    twitterDescription:
      'Sokuji: quelloffene App für Live-Sprachübersetzung in zweisprachigen Meetings, als Desktop-App und Erweiterung für Chrome und Edge, mit Cloud-KI-Anbietern oder Modellen auf dem Gerät. Was belegt ist.',
    audience:
      'Personen in zweisprachigen Meetings und Telefonaten, Teams, die Live-Untertitel in einer anderen Sprache wünschen, und datenschutzbewusste Nutzer, die Spracherkennung, Übersetzung und Sprachausgabe auf dem Gerät ausprobieren möchten',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sokuji Rezension',
    targetKeywords: [
      'Sokuji Rezension',
      'Live-Sprachübersetzung App',
      'Meeting in Echtzeit übersetzen',
      'Sprachübersetzung offline',
      'Übersetzer mit virtuellem Mikrofon',
      'quelloffener Live-Übersetzer',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Sokuji ist eine quelloffene App (AGPL-3.0), die Sprache für zweisprachige Meetings live in beide Richtungen übersetzt, mit Cloud-KI-Anbietern oder laut Hersteller mit Modellen auf dem Gerät.** Sie läuft als Desktop-App für Windows, macOS und Linux sowie als Erweiterung für Chrome und Edge und dient als virtuelles Mikrofon für Zoom, Google Meet, Microsoft Teams und andere Apps. Laut Hersteller ist die App kostenlos; Cloud-Nutzung wird vom Anbieter oder über ein vorausbezahltes Kizuna-AI-Guthaben abgerechnet. PromptQuorum hat die App nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Sokuji, und für wen ist es gedacht?',
        answer:
          'Sokuji ist eine App für Live-Sprachübersetzung in Meetings, die Kizuna AI Lab offen auf GitHub entwickelt. Sie eignet sich für Personen, die über Sprachgrenzen hinweg sprechen und übersetzte Stimme oder Untertitel in den Apps haben möchten, die sie ohnehin nutzen.',
        bullets: [
          'Lizenziert unter AGPL-3.0; die App ist kostenlos, und laut Hersteller brauchen Modelle auf dem Gerät weder Konto noch API-Schlüssel.',
          'Laut Hersteller erkennt ein Zwei-Wege-Modus, welche von zwei gewählten Sprachen gesprochen wird, und übersetzt in beide Richtungen, als übersetzte Stimme oder als Live-Untertitel.',
          'Funktioniert mit Cloud-Anbietern wie OpenAI, Google Gemini, Soniox, Palabra.ai und Doubao AST 2.0 oder mit Modellen auf dem Gerät; Cloud-Nutzung wird vom Anbieter oder über ein vorausbezahltes Kizuna-AI-Guthaben abgerechnet.',
          'Die Desktop-App dient unter Windows, macOS und Linux als virtuelles Mikrofon; die Erweiterung für Chrome und Edge funktioniert auf unterstützten Meeting-Seiten.',
          'Version 0.50.4 erschien am 16. November 2026, der letzte Commit auf dem Hauptzweig stammt vom 18. November 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
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
            text: 'Sokuji ist eine quelloffene App, die Sprache für zweisprachige Meetings live in beide Richtungen übersetzt, mit Cloud-KI-Anbietern oder laut Hersteller mit Modellen, die auf Ihrem eigenen Gerät laufen.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich einen Dolmetscher zwischen Ihnen und Ihrer Meeting-App vor: Sokuji hört zu, übersetzt und spricht das Ergebnis entweder über ein virtuelles Mikrofon oder zeigt es als Untertitel an. Sie wählen, ob Erkennung, Übersetzung und Sprachausgabe von einem Cloud-Anbieter oder von Modellen auf Ihrem Rechner kommen.',
          },
        ],
        items: [
          'Installieren Sie eine Desktop-App von der GitHub-Releases-Seite (Setup-EXE für Windows, PKG für macOS, DEB oder AppImage für Linux) oder fügen Sie die Erweiterung für Chrome oder Edge aus dem Store hinzu.',
          'Wählen Sie einen Anbieter: Ihren eigenen API-Schlüssel, ein vorausbezahltes Kizuna-AI-Konto oder Modelle auf dem Gerät, die laut Hersteller weder Konto noch Schlüssel brauchen.',
          'Laut Hersteller gehen Meeting-Inhalte direkt von Ihrem Gerät zum gewählten Anbieter, und mit ausschließlich Modellen auf dem Gerät bleiben sie auf Ihrem Rechner; die Datenschutzseite nennt die Ausnahmen, darunter Online-Engines von Microsoft.',
          'Nutzungsstatistiken und Fehlerberichte gehen an PostHog, und die aktuelle Datenschutzerklärung sagt, dass die Apps keinen Schalter zum Abschalten haben.',
          'PromptQuorum hat die App nicht getestet; Erkennungsgenauigkeit, Übersetzungsqualität, Latenz und Geschwindigkeit der Modelle auf dem Gerät sind daher nicht überprüft.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Datenschutzseite sagt, dass Meeting-Inhalte mit Modellen auf dem Gerät Ihren Rechner nie verlassen, sobald die Modelle heruntergeladen sind. PromptQuorum hat den Netzwerkverkehr nicht untersucht und kann das daher nur als Angabe des Herstellers wiedergeben.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Sokuji ist eine App für Live-Sprachübersetzung von Kizuna AI Lab, veröffentlicht als Desktop-App für Windows, macOS und Linux sowie als Browser-Erweiterung für Chrome und Edge unter der Lizenz AGPL-3.0.**',
          'Sie wird offen auf [github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji) entwickelt. Das Repository wurde im April 2025 angelegt, Version 0.50.4 erschien am 16. November 2026 und der letzte Commit auf dem Hauptzweig stammt vom 18. November 2026; die Entwicklung ist also aktiv, und es gilt keine Warnung vor einem verwaisten Projekt. Die Nutzungsbedingungen nennen Kizuna AI Lab als Anbieter und unterliegen japanischem Recht, ausschließlicher Gerichtsstand sind die Gerichte in Tokio. Die Seite [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) des Herstellers, die der Hersteller als Angabe nach japanischem Recht bezeichnet, nennt Kizuna AI Lab als Betreiber und sagt, Anschrift und Telefonnummer würden auf Anfrage mitgeteilt; PromptQuorum hat keine veröffentlichte Firmenanschrift und keine Registernummer gefunden. Laut Hersteller ist der Konto-Server nicht quelloffen.',
          'Laut Hersteller sitzt Sokuji wie ein Mikrofon zwischen Ihnen und Ihrer Meeting-App: Ihre Sprache wird erkannt, übersetzt und in der anderen Sprache gesprochen oder als Untertitel angezeigt, und was die Gegenseite sagt, kommt als Untertitel oder vorgelesen zu Ihnen zurück. Ein Zwei-Wege-Modus erkennt, welche von zwei gewählten Sprachen gesprochen wird, und übersetzt in beide Richtungen. README und Dokumentation des Herstellers nennen OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, OpenAI-kompatible Endpunkte, ein Kizuna-AI-Konto und die Inferenz auf dem Gerät („Local Inference“) als Möglichkeiten dafür.',
          'PromptQuorum hat die App nicht ausgeführt und weder Erkennungsgenauigkeit, Übersetzungsqualität, Latenz noch die Geschwindigkeit der Modelle auf dem Gerät geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie können Sokuji als Desktop-App aus den Paketen auf der GitHub-Releases-Seite installieren oder die Erweiterung für Chrome oder Edge aus dem Store hinzufügen; die Download-Seite des Herstellers nennt beides.**',
          'Das Release v0.50.4 listet eine Setup-EXE für Windows, PKG-Installer für macOS auf Apple Silicon und Intel, DEB-Pakete und AppImages für Linux auf x64 und arm64 sowie die Erweiterung als ZIP. Die Download-Seite sagt, der Windows-Installer sei über die SignPath Foundation codesigniert und die macOS-App signiert und notarisiert.',
        ],
        columns: ['Plattform', 'Paket'],
        rows: [
          { 'Plattform': 'Windows', 'Paket': 'Setup-EXE (VB-CABLE separat installieren)' },
          { 'Plattform': 'macOS (Apple Silicon)', 'Paket': 'PKG' },
          { 'Plattform': 'macOS (Intel)', 'Paket': 'PKG (x64)' },
          { 'Plattform': 'Linux (x64, arm64)', 'Paket': 'DEB oder AppImage' },
          { 'Plattform': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', 'Paket': 'Erweiterung aus dem Chrome Web Store' },
          { 'Plattform': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', 'Paket': 'Erweiterung aus Edge Add-ons' },
        ],
        note: 'Laden Sie die App von der [GitHub-Releases-Seite](https://github.com/kizuna-ai-lab/sokuji/releases/latest) oder der [Download-Seite](https://sokuji.kizuna.ai/download) des Herstellers herunter. PromptQuorum hat die Installer nicht ausgeführt und nicht geprüft, ob sie signiert oder notarisiert sind; diese Angaben stammen vom Hersteller.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Sokuji braucht für die Desktop-App Windows, macOS oder Linux, für die Erweiterung Chromium 116 oder neuer; der Hersteller nennt kein Minimum für Arbeitsspeicher oder GPU.**',
          'Die Seite [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) des Herstellers nennt für die Desktop-App Windows 10 oder neuer, macOS 13 oder neuer und Linux (Ubuntu 20.04 oder neuer empfohlen) und führt außerdem eine stabile Breitbandverbindung und ein Mikrofon auf; seine Seite zu lokaler KI sagt, dass Modelle auf dem Gerät nach dem Download ohne Netzwerk funktionieren. Laut Download-Seite braucht das virtuelle Mikrofon unter Windows VB-CABLE, das separat installiert wird; unter macOS ist der Audiotreiber im Installer enthalten; unter Linux legt die App das virtuelle Mikrofon über PulseAudio oder PipeWire an und braucht pulseaudio-utils. Die Erweiterung funktioniert nur auf unterstützten Meeting-Seiten; für alles andere brauchen Sie die Desktop-App. Modelle auf dem Gerät werden einmal heruntergeladen, und laut Hersteller erkennt die App Ihre GPU und lädt das passende Engine-Paket. PromptQuorum hat weder Speicherbedarf noch Geschwindigkeit gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'Desktop', 'Angegebener Wert': 'Windows 10+, macOS 13+, Ubuntu 20.04+ (empfohlen)' },
          { 'Punkt': 'Erweiterung', 'Angegebener Wert': 'Chrome und Edge, Chromium 116 oder neuer' },
          { 'Punkt': 'Windows-Audio', 'Angegebener Wert': 'VB-CABLE, separat installiert' },
          { 'Punkt': 'Linux-Audio', 'Angegebener Wert': 'PulseAudio oder PipeWire, pulseaudio-utils' },
          { 'Punkt': 'Modelle auf dem Gerät', 'Angegebener Wert': 'Einmal geladen; keine teure GPU nötig (README)' },
          { 'Punkt': 'Speicher und GPU', 'Angegebener Wert': 'Nicht angegeben' },
        ],
        note: 'Für die Übersetzung wird ein Anbieter gebraucht: Modelle auf dem Gerät, Ihr eigener API-Schlüssel oder ein Kizuna-AI-Konto. Laut Hersteller ist keiner davon zur Installation nötig, und für die Nutzung mit eigenem Schlüssel oder Modellen auf dem Gerät braucht es kein Konto.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Sokuji ist auf Live-Sprachübersetzung in Meetings ausgelegt; virtuelles Mikrofon, Untertitel und Anbieterauswahl ergänzen das.** Alle folgenden Punkte sind Angaben des Herstellers aus Website und README.',
        ],
        items: [
          'Zwei-Wege-Übersetzung: Sie legen zwei Sprachen fest, und Sokuji erkennt, welche gesprochen wird, und übersetzt in beide Richtungen; die README ordnet diesen Modus Soniox zu und nennt mehr als 60 Sprachen.',
          'Die eigene Stimme übersetzen: Die Gegenseite hört die Übersetzung über ein virtuelles Mikrofon in Zoom, Google Meet, Microsoft Teams, Discord oder jeder App, in der Sie ein Mikrofon wählen können.',
          'Übersetzen, was andere sagen: Die Erweiterung übersetzt den Ton des Meeting-Tabs, die Desktop-App den Systemton, als Live-Untertitel oder vorgelesen.',
          'Untertitelmodus und Untertitel teilen: übersetzter Text auf dem Bildschirm, auf Wunsch geteilt, damit die Gegenseite mitlesen kann.',
          'Modelle auf dem Gerät: Spracherkennung mit Modellen der Whisper-Familie und anderen, Übersetzung mit Opus-MT-Sprachpaaren und mehrsprachigen Sprachmodellen wie Qwen und TranslateGemma sowie Sprachsynthese mit Engines wie Piper und Coqui laufen über WASM und WebGPU.',
          'Cloud-Anbieter: OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, OpenAI-kompatible Endpunkte (nur Desktop) und ein Kizuna-AI-Konto; die README nennt Stimmklonen für Palabra.ai, Doubao AST 2.0 und Soniox.',
          'Audiowerkzeuge: KI-Rauschunterdrückung, Echounterdrückung und eine Durchleitung, um die eigene Stimme mitzuhören.',
          'Oberfläche: 30 Oberflächensprachen, ein einfacher Modus für die Einrichtung und ein erweiterter Modus mit Wellenformanzeige.',
          'Meeting-Notizen: Mit einem Kizuna-AI-Konto bietet der Hersteller Notizen, die aus dem Sitzungstranskript erstellt werden; der Text läuft laut Datenschutzseite über seinen Server zu OpenAI und wird nicht gespeichert.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wer ein Meeting übersetzt, sendet die Sprache anderer Personen an den gewählten Anbieter, und beim Stimmklonen wird die Stimme einer Person verarbeitet. Informieren Sie die Teilnehmenden vorab, prüfen Sie die Regeln Ihres Arbeitgebers und der Meeting-Plattform und holen Sie die Einwilligung ein, bevor Sie die Stimme einer Person klonen. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Hersteller gehen Meeting-Inhalte direkt von Ihrem Gerät zum gewählten KI-Anbieter, nie über Kizuna AI, und mit ausschließlich Modellen auf dem Gerät bleiben sie auf Ihrem Rechner; PromptQuorum hat den Netzwerkverkehr nicht untersucht und kann das nicht bestätigen.**',
          'Die Datenschutzseite vom 14. November 2026 nennt die Ausnahmen. Mit einem Kizuna-AI-Konto läuft eine für das Stimmklonen aufgenommene Stimmprobe über den Server des Herstellers zu Soniox und wird danach verworfen, und der Transkripttext einer Sitzung, für die Kizuna AI Meeting-Notizen schreibt, läuft über den Server zu OpenAI und wird nicht gespeichert. Ohne Konto nutzen Sie Ihren eigenen Schlüssel oder Modelle auf dem Gerät.',
          'Die „Online“-Engines der lokalen Inferenz, Edge TTS für Sprache und Bing Translator, laufen nicht auf Ihrem Rechner. Laut Hersteller werden sie automatisch genutzt, wenn kein Modell auf dem Gerät bereit ist oder wenn Sie sie wählen, und der zu sprechende oder zu übersetzende Text geht dann an Microsoft. Weitere Verbindungen ohne Meeting-Inhalte sind Modell-Downloads, Update-Prüfungen, Latenzmessungen gegenüber dem genutzten Soniox- oder Qwen-Dienst sowie Nutzungsstatistiken und Fehlerberichte.',
          'Nutzungsstatistiken und Fehlerberichte gehen laut Hersteller an PostHog in den USA und werden nach der Anmeldung mit Konto-ID, E-Mail-Adresse und Namen verknüpft; die Erklärung sagt, es gebe derzeit keinen Schalter in der App, um sie abzuschalten. Ein Kizuna-AI-Konto speichert E-Mail-Adresse, Anmeldeprotokolle, Guthaben und Nutzung sowie von Stripe erhaltene Zahlungsdaten; der Hersteller gibt an, Daten weder zu verkaufen oder zu vermieten noch Modelle damit zu trainieren.',
          'Der Quellcode der Apps ist auf GitHub öffentlich, sodass sich der Datenfluss prüfen lässt; der Konto-Server des Herstellers ist nicht quelloffen.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Sokuji passt zu Personen, die über Sprachgrenzen hinweg sprechen und eine Übersetzung in den Meeting-Apps wünschen, die sie ohnehin nutzen.**',
        ],
        items: [
          'Personen in zweisprachigen Meetings, die möchten, dass die Gegenseite über ein virtuelles Mikrofon eine übersetzte Stimme hört, in jeder App und nicht nur im Browser.',
          'Zuhörer bei Vorlesungen, Vorträgen oder Videos, die live übersetzte Untertitel des Gehörten wünschen.',
          'Vortragende, deren Publikum übersetzte Untertitel des eigenen Vortrags lesen soll.',
          'Datenschutzbewusste Nutzer, die laut Hersteller Spracherkennung, Übersetzung und Sprachausgabe ohne Schlüssel auf dem eigenen Gerät ausprobieren möchten.',
          'Leser, die eine App bevorzugen, deren Code unter AGPL-3.0 öffentlich ist.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Sokuji passt in manchen Situationen schlecht, und mehrere Angaben sind nicht überprüft.**',
        ],
        items: [
          'Nicht geeignet: Situationen, in denen eine Fehlübersetzung zählt. Die Seite des Herstellers sagt selbst, ein großes gehostetes Modell sei bei Genauigkeit und Latenz Modellen auf dem Gerät noch voraus, und für ein folgenreiches Gespräch werde man wohl eines davon wollen.',
          'Nicht geeignet: wer Nutzungsstatistiken abgeschaltet haben muss. Die Datenschutzerklärung vom 14. November 2026 sagt, es gebe derzeit keine Einstellung in der App, um sie zu deaktivieren.',
          'Nicht überprüft: Erkennungsgenauigkeit, Übersetzungsqualität, Latenz und Geschwindigkeit der Modelle auf dem Gerät auf üblichen Laptops. PromptQuorum hat die App nicht ausgeführt.',
          'Nicht überprüft: die Angabe, dass mit Modellen auf dem Gerät nichts das Gerät verlässt, neben den Online-Engines von Microsoft, Modell-Downloads, Update-Prüfungen und Nutzungsstatistiken; PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          'Nicht überprüft: ob der Windows-Installer codesigniert und die macOS-App notarisiert ist; das sind Angaben des Herstellers.',
          'Unklar: Im Repository liegt noch eine Datenschutzdatei für die Erweiterung vom 3. Juni 2025, die Analysen als Opt-in mit Schalter in der App beschreibt, während die aktuelle Erklärung sagt, es gebe keinen Schalter; PromptQuorum behandelt die aktuelle Erklärung als maßgeblich.',
          'Nicht überprüft: Die Datenschutzerklärung erwähnt eine mobile Anwendung, aber weder die Download-Seite noch die README nennen einen mobilen Download; PromptQuorum behandelt Sokuji daher als reine Desktop- und Browser-Anwendung.',
          'Nicht überprüft: Firmendetails über den Namen Kizuna AI Lab hinaus (laut Seite Commerce Disclosure wird die Anschrift auf Anfrage mitgeteilt; keine Registernummer gefunden), Nutzerzahlen und unabhängige Tests; PromptQuorum hat nicht nach unabhängigen Tests gesucht.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokuji im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Sokuji überschneidet sich mit Werkzeugen, die Sprache transkribieren oder untertiteln, ist aber für Live-Übersetzung in Meetings gebaut; PromptQuorum hat es nicht praktisch mit ihnen verglichen.** Die folgenden Werkzeuge stehen im Verzeichnis und werden anhand ihrer eigenen Rezensionen beschrieben.',
        ],
        columns: ['Werkzeug', 'In Quellen genannt'],
        rows: [
          { 'Werkzeug': 'Sokuji', 'In Quellen genannt': 'AGPL-3.0; Desktop + Browser; Live-Übersetzung in beide Richtungen' },
          { 'Werkzeug': '[Buzz](/de/power-local-llm/buzz-captions-review)', 'In Quellen genannt': 'MIT; Mac/Windows/Linux; lokale Whisper-Transkription' },
          { 'Werkzeug': '[Sablate](/de/power-local-llm/sablate-review)', 'In Quellen genannt': 'Closed Source; Windows/Mac; Untertitel und Übersetzung' },
          { 'Werkzeug': '[Minutes](/de/power-local-llm/minutes-review)', 'In Quellen genannt': 'MIT; Mac/Windows; Meeting-Notizen aus Transkription' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Funktioniert Sokuji offline?',
            a: 'Laut Hersteller ja, sobald die Modelle auf dem Gerät heruntergeladen sind: Erkennung, Übersetzung und Sprachausgabe laufen dann ohne Netzwerk auf Ihrem Rechner. Laut Datenschutzseite brauchen die „Online“-Engines Edge TTS und Bing Translator das Netzwerk und senden Text an Microsoft, und die App baut weiterhin Verbindungen für Updates und Statistiken auf. PromptQuorum hat das nicht getestet.',
          },
          {
            q: 'Ist Sokuji kostenlos?',
            a: 'Laut Hersteller ist die App kostenlos und quelloffen unter AGPL-3.0, und Modelle auf dem Gerät kosten nichts. Cloud-Anbieter rechnen bei eigenem Schlüssel selbst ab, bei einem Kizuna-AI-Konto wird ein vorausbezahltes Guthaben in US-Dollar belastet.',
          },
          {
            q: 'Mit welchen Meeting-Apps funktioniert Sokuji?',
            a: 'Die Desktop-App meldet sich als Mikrofon an, sodass jede App, in der Sie ein Mikrofon wählen können, sie nutzen kann. Laut Download-Seite ist die Erweiterung für Zoom, Google Meet, Microsoft Teams, Slack, Discord, Jitsi Meet, Whereby, Gather Town und Yandex Telemost gebaut.',
          },
          {
            q: 'Schickt Sokuji meine Meetings an Kizuna AI?',
            a: 'Laut Hersteller nein: Meeting-Inhalte gehen direkt zum gewählten Anbieter. Die genannten Ausnahmen sind Stimmproben zum Klonen und Transkripte für Meeting-Notizen bei einem Kizuna-AI-Konto; sie laufen über den Server des Herstellers und werden nicht gespeichert. PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            q: 'Kann ich Nutzungsstatistiken abschalten?',
            a: 'Die Datenschutzerklärung vom 14. November 2026 sagt, es gebe derzeit keinen Schalter in der App, um sie abzuschalten. Eine ältere Datenschutzdatei im Repository beschreibt ein Opt-out; prüfen Sie daher die Einstellung in der App, bevor Sie sich auf eine der beiden Angaben verlassen.',
          },
          {
            q: 'Wie oft wird Sokuji aktualisiert?',
            a: 'GitHub listet Version 0.50.1 vom 10. November 2026, 0.50.2 vom 11. November 2026, 0.50.3 vom 14. November 2026 und 0.50.4 vom 16. November 2026; der letzte Commit auf dem Hauptzweig stammt vom 18. November 2026.',
          },
          {
            q: 'Auf welchen Systemen läuft Sokuji?',
            a: 'Laut der Seite „Commerce Disclosure“ des Herstellers braucht die Desktop-App Windows 10 oder neuer, macOS 13 oder neuer oder Linux (Ubuntu 20.04 oder neuer empfohlen). Die Erweiterung für Chrome und Edge braucht Chromium 116 oder neuer. Der Hersteller nennt keine Mindestwerte für Arbeitsspeicher oder GPU, und PromptQuorum hat weder Speicherverbrauch noch Geschwindigkeit gemessen.',
          },
          {
            q: 'Brauche ich für Sokuji ein Konto oder einen API-Schlüssel?',
            a: 'Laut Hersteller ist für die Nutzung mit eigenem API-Schlüssel oder mit Modellen auf dem Gerät kein Konto nötig, und für die bloße Installation ist keines von beidem erforderlich. Zum Übersetzen brauchen Sie eine von drei Quellen: Modelle auf dem Gerät, Ihren eigenen API-Schlüssel für einen Cloud-Anbieter oder ein vorausbezahltes Kizuna-AI-Konto.',
          },
          {
            q: 'Welche Übersetzungsanbieter unterstützt Sokuji?',
            a: 'Die README und die Dokumentation des Herstellers nennen OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, OpenAI-kompatible Endpunkte (nur Desktop), ein Kizuna-AI-Konto und lokale Inferenz auf dem Gerät. Stimmklonen wird für Palabra.ai, Doubao AST 2.0 und Soniox aufgeführt. Laut Hersteller gehen Meeting-Inhalte dann an den von Ihnen gewählten Anbieter.',
          },
          {
            q: 'Was macht der Zwei-Wege-Modus?',
            a: 'Laut Hersteller stellen Sie zwei Sprachen ein, und Sokuji erkennt, welche gesprochen wird, und übersetzt in beide Richtungen, als übersetzte Stimme oder als Live-Untertitel. Die README ordnet diesen Modus Soniox zu und nennt mehr als 60 Sprachen. PromptQuorum hat weder die Spracherkennung noch die Übersetzungsqualität getestet.',
          },
          {
            q: 'Braucht Sokuji zusätzliche Audio-Software?',
            a: 'Laut Download-Seite braucht das virtuelle Mikrofon unter Windows VB-CABLE, das separat installiert wird; unter macOS liegt der Audiotreiber dem Installer bei; unter Linux erzeugt die App das virtuelle Mikrofon über PulseAudio oder PipeWire und benötigt pulseaudio-utils. Die Erweiterung funktioniert nur auf unterstützten Meeting-Seiten, für andere Apps brauchen Sie die Desktop-App.',
          },
          {
            q: 'Wie gut sind die Modelle auf dem Gerät im Vergleich zu Cloud-Modellen?',
            a: 'PromptQuorum hat das nicht gemessen. Die Local-AI-Seite des Herstellers sagt selbst, dass ein großes gehostetes Modell bei Genauigkeit und Latenz noch vor den Modellen auf dem Gerät liegt und dass Sie für ein wichtiges Gespräch wahrscheinlich eines wollen. Modelle auf dem Gerät werden einmal heruntergeladen und brauchen laut README keine teure GPU.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Sokuji ist einen Blick wert, wenn Sie zweisprachige Meetings führen und eine Live-Übersetzung in beide Richtungen per Desktop-App oder Browser-Erweiterung möchten, mit der Wahl zwischen Cloud-Anbietern und laut Hersteller Modellen auf dem Gerät.**',
          'Auf dem Papier deckt es viel ab: ein virtuelles Mikrofon für jede App, Untertitel, laut Hersteller die Erkennung der gesprochenen Sprache in beide Richtungen, mehrere Cloud-Anbieter, lokale Modelle und eine offene Codebasis. Die Entwicklung ist aktiv, mit vier Releases zwischen dem 10. und 16. November 2026.',
          'Die Kompromisse sind real: Der Hersteller selbst sagt, die Qualität auf dem Gerät liege hinter großen gehosteten Modellen, die aktuelle Erklärung sagt, Nutzungsstatistiken ließen sich in der App nicht abschalten, und PromptQuorum hat nichts getestet. Probieren Sie es in einem Gespräch ohne viel Gewicht aus und prüfen Sie Erkennung und Übersetzung in beiden Sprachen, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Sokuji-Website](https://sokuji.kizuna.ai) — Funktionen und Einsatzszenarien, geprüft am 18. November 2026.',
          '[Download-Seite](https://sokuji.kizuna.ai/download) — Plattformen, Installationsvoraussetzungen und Angaben zur Signierung, geprüft am 18. November 2026.',
          '[Seite zu lokaler KI](https://sokuji.kizuna.ai/local-ai) — Modelle auf dem Gerät und der Vergleich des Herstellers mit Cloud-Modellen, geprüft am 18. November 2026.',
          '[Datenschutz-Zusammenfassung](https://sokuji.kizuna.ai/privacy) — wohin Meeting-Inhalte gehen, geprüft am 18. November 2026.',
          '[Datenschutzerklärung](https://sokuji.kizuna.ai/docs/privacy) — erhobene Daten und Speicherdauer, Stand 14. November 2026, geprüft am 18. November 2026.',
          '[Nutzungsbedingungen](https://sokuji.kizuna.ai/docs/terms) — Anbieter, Guthaben, anwendbares Recht und Gerichtsstand, geprüft am 18. November 2026.',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — Betreiber, Bedingungen des Guthabens und Systemanforderungen, vom Hersteller als Angabe nach japanischem Recht bezeichnet, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/kizuna-ai-lab/sokuji) — Lizenz, Erstellungsdatum und letzter Commit, geprüft am 18. November 2026.',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — Funktionen, Anbieter, Installation und Datenschutzhinweise, geprüft am 18. November 2026.',
          '[GitHub Releases](https://github.com/kizuna-ai-lab/sokuji/releases) — Release-Daten und Pakete zu v0.50.4, geprüft am 18. November 2026.',
          '[Ältere Datenschutzdatei](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — Datenschutzerklärung der Erweiterung vom 3. Juni 2025, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Speech-to-Text und Sprachagenten nebeneinander.',
          '[Buzz-Rezension](/de/power-local-llm/buzz-captions-review) — lokale Whisper-Transkription auf dem Desktop.',
          '[Sablate-Rezension](/de/power-local-llm/sablate-review) — Untertitel und Übersetzung für Video unter Windows und Mac.',
          '[Minutes-Rezension](/de/power-local-llm/minutes-review) — Meeting-Notizen aus Transkription, kostenlos und quelloffen.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-fr.webp',
    title: 'Avis sur Sokuji : traduction vocale en direct dans les deux sens pour vos réunions',
    seoTitle: 'Avis sur Sokuji : traduction vocale en direct en réunion',
    intro:
      'Sokuji 0.50.4 est une application de bureau et une extension Chrome et Edge, à code source ouvert, qui traduit la parole en direct dans les deux sens pour des réunions bilingues. Elle fonctionne avec des fournisseurs d’IA cloud ou, selon l’éditeur, avec des modèles de reconnaissance, de traduction et de synthèse vocale exécutés sur votre propre appareil. La licence est AGPL-3.0. Cet avis s’appuie sur le site officiel, le dépôt GitHub et ses versions, ainsi que les pages de confidentialité et de conditions d’utilisation, consultés le 18 novembre 2026. PromptQuorum n’a pas testé l’application.',
    metaDescription:
      'Sokuji, application open source de traduction vocale en direct pour réunions bilingues, avec cloud ou modèles sur l’appareil. Ce qui est confirmé.',
    twitterDescription:
      'Sokuji : appli open source de traduction vocale en direct pour réunions bilingues, en application de bureau et extension Chrome et Edge. Ce qui est confirmé.',
    audience:
      'Personnes en réunion ou en appel bilingue, équipes qui veulent des sous-titres en direct dans une autre langue, et utilisateurs soucieux de leur vie privée qui veulent essayer la reconnaissance, la traduction et la synthèse vocale sur l’appareil',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis sur Sokuji',
    targetKeywords: [
      'avis sur Sokuji',
      'application de traduction vocale en direct',
      'traduction de réunion en temps réel',
      'traduction vocale hors ligne',
      'traducteur à micro virtuel',
      'traducteur en direct open source',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Sokuji est une application à code source ouvert (AGPL-3.0) qui traduit la parole en direct dans les deux sens pour des réunions bilingues, avec des fournisseurs d’IA cloud ou, selon l’éditeur, des modèles sur l’appareil.** Elle existe en application de bureau pour Windows, macOS et Linux et en extension Chrome et Edge, et joue le rôle de micro virtuel pour Zoom, Google Meet, Microsoft Teams et d’autres applications. Selon l’éditeur, l’application est gratuite ; l’usage cloud est facturé par le fournisseur ou depuis un solde Kizuna AI prépayé. PromptQuorum n’a pas testé l’application.',
    quickAnswerTop: {
      fr: {
        question: 'Qu’est-ce que Sokuji et à qui s’adresse-t-il ?',
        answer:
          'Sokuji est une application de traduction vocale en direct pour les réunions, développée ouvertement sur GitHub par Kizuna AI Lab. Elle convient à celles et ceux qui parlent par-delà une barrière de langue et veulent une voix traduite ou des sous-titres dans les applications qu’ils utilisent déjà.',
        bullets: [
          'Sous licence AGPL-3.0 ; l’application est gratuite et, selon l’éditeur, les modèles sur l’appareil ne demandent ni compte ni clé d’API.',
          'Selon l’éditeur, un mode bidirectionnel détecte laquelle de deux langues choisies est parlée et traduit dans les deux sens, en voix traduite ou en sous-titres en direct.',
          'Fonctionne avec des fournisseurs cloud comme OpenAI, Google Gemini, Soniox, Palabra.ai et Doubao AST 2.0, ou avec des modèles sur l’appareil ; l’usage cloud est facturé par le fournisseur ou depuis un solde Kizuna AI prépayé.',
          'L’application de bureau joue le rôle de micro virtuel sous Windows, macOS et Linux ; l’extension Chrome et Edge fonctionne sur les sites de réunion pris en charge.',
          'La version 0.50.4 est sortie le 16 novembre 2026 et le dernier commit sur la branche principale date du 18 novembre 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l’obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Sokuji est une application à code source ouvert qui traduit la parole en direct dans les deux sens pour des réunions bilingues, avec des fournisseurs d’IA cloud ou, selon l’éditeur, des modèles exécutés sur votre propre appareil.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un interprète placé entre vous et votre application de réunion : elle écoute, traduit, puis prononce le résultat par un micro virtuel ou l’affiche en sous-titres. Vous choisissez si la reconnaissance, la traduction et la voix viennent d’un fournisseur cloud ou de modèles stockés sur votre ordinateur.',
          },
        ],
        items: [
          'Installez une application de bureau depuis la page des versions GitHub (EXE d’installation pour Windows, PKG pour macOS, DEB ou AppImage pour Linux), ou ajoutez l’extension pour Chrome ou Edge depuis la boutique.',
          'Choisissez un fournisseur : votre propre clé d’API, un compte Kizuna AI prépayé, ou des modèles sur l’appareil qui, selon l’éditeur, ne demandent ni compte ni clé.',
          'Selon l’éditeur, le contenu des réunions va directement de votre appareil au fournisseur choisi et, avec des modèles sur l’appareil uniquement, reste sur votre ordinateur ; sa page de confidentialité liste les exceptions, dont les moteurs en ligne de Microsoft.',
          'Les statistiques d’usage et les rapports d’erreurs vont à PostHog, et la politique de confidentialité actuelle indique que les applications n’ont aucun réglage pour les désactiver.',
          'PromptQuorum n’a pas testé l’application : la précision de la reconnaissance, la qualité de la traduction, la latence et la vitesse des modèles sur l’appareil ne sont donc pas vérifiées.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La page de confidentialité indique qu’avec des modèles sur l’appareil, le contenu des réunions ne quitte jamais votre ordinateur une fois les modèles téléchargés. PromptQuorum n’a pas inspecté le trafic réseau et ne peut donc le confirmer au-delà de ce que l’éditeur écrit.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Sokuji est une application de traduction vocale en direct de Kizuna AI Lab, publiée en application de bureau pour Windows, macOS et Linux et en extension de navigateur pour Chrome et Edge, sous licence AGPL-3.0.**',
          'Elle est développée ouvertement sur [github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji). Le dépôt a été créé en avril 2025, la version 0.50.4 est parue le 16 novembre 2026 et le dernier commit sur la branche principale date du 18 novembre 2026 : le développement est donc actif et aucun avertissement de projet délaissé ne s’applique. Les conditions d’utilisation désignent Kizuna AI Lab comme fournisseur et sont soumises au droit japonais, avec compétence exclusive des tribunaux de Tokyo. La page [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) de l’éditeur, que celui-ci présente comme une mention prévue par le droit japonais, désigne Kizuna AI Lab comme exploitant et indique que l’adresse et le numéro de téléphone sont communiqués sur demande ; PromptQuorum n’a trouvé ni adresse d’entreprise publiée ni numéro d’immatriculation. Selon l’éditeur, son serveur de comptes n’est pas à code source ouvert.',
          'Selon l’éditeur, Sokuji se place comme un micro entre vous et votre application de réunion : votre voix est reconnue, traduite, puis prononcée ou affichée en sous-titres dans l’autre langue, et ce que dit l’interlocuteur vous revient en sous-titres ou lu à voix haute. Un mode bidirectionnel détecte laquelle de deux langues choisies est parlée et traduit dans les deux sens. Le README et la documentation de l’éditeur citent OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, des points d’accès compatibles OpenAI, un compte Kizuna AI et l’inférence sur l’appareil (« Local Inference ») pour y parvenir.',
          'PromptQuorum n’a pas exécuté l’application et n’a vérifié ni la précision de la reconnaissance, ni la qualité de la traduction, ni la latence, ni la vitesse des modèles sur l’appareil.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l’obtenir',
        content: [
          '**Vous pouvez installer Sokuji comme application de bureau à partir des paquets de la page des versions GitHub, ou ajouter son extension à Chrome ou Edge depuis la boutique ; la page de téléchargement de l’éditeur indique les deux.**',
          'La version v0.50.4 propose un EXE d’installation pour Windows, des installateurs PKG pour macOS sur Apple silicon et sur Intel, des paquets DEB et des AppImage pour Linux en x64 et arm64, ainsi que l’extension en ZIP. La page de téléchargement indique que l’installateur Windows est signé via la SignPath Foundation et que l’application macOS est signée et notariée.',
        ],
        columns: ['Plateforme', 'Paquet'],
        rows: [
          { 'Plateforme': 'Windows', 'Paquet': 'EXE d’installation (VB-CABLE à part)' },
          { 'Plateforme': 'macOS (Apple silicon)', 'Paquet': 'PKG' },
          { 'Plateforme': 'macOS (Intel)', 'Paquet': 'PKG (x64)' },
          { 'Plateforme': 'Linux (x64, arm64)', 'Paquet': 'DEB ou AppImage' },
          { 'Plateforme': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', 'Paquet': 'Extension du Chrome Web Store' },
          { 'Plateforme': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', 'Paquet': 'Extension d’Edge Add-ons' },
        ],
        note: 'Téléchargez depuis la [page des versions GitHub](https://github.com/kizuna-ai-lab/sokuji/releases/latest) ou la [page de téléchargement](https://sokuji.kizuna.ai/download) de l’éditeur. PromptQuorum n’a pas exécuté les installateurs et n’a pas vérifié s’ils sont signés ou notariés ; ces indications viennent de l’éditeur.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Sokuji demande Windows, macOS ou Linux pour l’application de bureau, ou Chromium 116 ou plus récent pour l’extension ; l’éditeur ne publie aucun minimum de mémoire ni de GPU.**',
          'La page [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) de l’éditeur indique Windows 10 ou plus récent, macOS 13 ou plus récent et Linux (Ubuntu 20.04 ou plus récent recommandé) pour l’application de bureau, et cite aussi une connexion haut débit stable et un micro ; sa page IA locale dit que les modèles sur l’appareil fonctionnent sans réseau une fois téléchargés. Selon la page de téléchargement, le micro virtuel demande VB-CABLE sous Windows, installé à part ; sous macOS, le pilote audio est inclus dans l’installateur ; sous Linux, l’application crée le micro virtuel via PulseAudio ou PipeWire et demande pulseaudio-utils. L’extension ne fonctionne que sur les sites de réunion pris en charge ; pour tout le reste, il faut l’application de bureau. Les modèles sur l’appareil sont téléchargés une fois et, selon l’éditeur, l’application détecte votre GPU et télécharge le paquet de moteur adapté. PromptQuorum n’a mesuré ni l’usage mémoire ni la vitesse.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'Bureau', 'Valeur indiquée': 'Windows 10+, macOS 13+, Ubuntu 20.04+ (recommandé)' },
          { 'Élément': 'Extension', 'Valeur indiquée': 'Chrome et Edge, Chromium 116 ou plus récent' },
          { 'Élément': 'Audio Windows', 'Valeur indiquée': 'VB-CABLE, installé à part' },
          { 'Élément': 'Audio Linux', 'Valeur indiquée': 'PulseAudio ou PipeWire, pulseaudio-utils' },
          { 'Élément': 'Modèles sur l’appareil', 'Valeur indiquée': 'Téléchargés une fois ; GPU coûteux inutile (README)' },
          { 'Élément': 'Mémoire et GPU', 'Valeur indiquée': 'Non publiés' },
        ],
        note: 'Un fournisseur est nécessaire pour traduire : modèles sur l’appareil, votre propre clé d’API ou un compte Kizuna AI. Selon l’éditeur, aucun n’est requis pour installer, et aucun compte n’est nécessaire pour utiliser Sokuji avec votre propre clé ou des modèles sur l’appareil.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Sokuji est conçu autour de la traduction vocale en direct en réunion ; le micro virtuel, les sous-titres et le choix du fournisseur s’y ajoutent.** Tous les points ci-dessous sont des affirmations de l’éditeur, tirées du site et du README.',
        ],
        items: [
          'Traduction bidirectionnelle : vous fixez deux langues, Sokuji détecte laquelle est parlée et traduit dans les deux sens ; le README attribue ce mode à Soniox et cite plus de 60 langues.',
          'Traduire votre voix : l’interlocuteur entend la traduction par un micro virtuel dans Zoom, Google Meet, Microsoft Teams, Discord ou toute application où vous pouvez choisir un micro.',
          'Traduire ce que disent les autres : l’extension traduit le son de l’onglet de réunion et l’application de bureau le son du système, en sous-titres en direct ou lu à voix haute.',
          'Mode sous-titres et partage des sous-titres : texte traduit à l’écran, partageable pour que l’autre côté puisse suivre.',
          'Modèles sur l’appareil : reconnaissance vocale avec des modèles de la famille Whisper et d’autres, traduction avec des paires de langues Opus-MT et des modèles de langage multilingues comme Qwen et TranslateGemma, synthèse vocale avec des moteurs comme Piper et Coqui, via WASM et WebGPU.',
          'Fournisseurs cloud : OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, points d’accès compatibles OpenAI (bureau uniquement) et un compte Kizuna AI ; le README mentionne le clonage de voix pour Palabra.ai, Doubao AST 2.0 et Soniox.',
          'Outils audio : suppression de bruit par IA, annulation d’écho et un retour pour s’entendre soi-même.',
          'Interface : 30 langues d’interface, un mode simple pour la configuration et un mode avancé avec affichage de la forme d’onde.',
          'Notes de réunion : avec un compte Kizuna AI, l’éditeur propose des notes rédigées à partir de la transcription de la session, qui transite par son serveur vers OpenAI sans être conservée, selon la page de confidentialité.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Traduire une réunion revient à envoyer la parole d’autres personnes au fournisseur que vous choisissez, et le clonage vocal traite la voix d’une personne. Prévenez les participants avant de l’utiliser, vérifiez les règles de votre employeur et de la plateforme de réunion, et obtenez un consentement avant de cloner la voix de quiconque. Ce sont des informations générales, pas un conseil juridique.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon l’éditeur, le contenu des réunions va directement de votre appareil au fournisseur d’IA choisi, jamais via Kizuna AI, et avec des modèles sur l’appareil uniquement il reste sur votre ordinateur ; PromptQuorum n’a pas inspecté le trafic réseau et ne peut pas le confirmer.**',
          'La page de confidentialité, datée du 14 novembre 2026, liste les exceptions. Avec un compte Kizuna AI, un échantillon de voix enregistré pour le clonage transite par le serveur de l’éditeur vers Soniox puis est supprimé, et le texte de la transcription d’une session dont Kizuna AI rédige les notes de réunion transite par son serveur vers OpenAI sans être conservé. Sans compte, vous utilisez votre propre clé ou des modèles sur l’appareil.',
          'Les moteurs « Online » de l’inférence locale, Edge TTS pour la voix et Bing Translator, ne s’exécutent pas sur votre ordinateur. Selon l’éditeur, ils sont utilisés automatiquement quand aucun modèle sur l’appareil n’est prêt, ou quand vous les choisissez, et le texte à prononcer ou à traduire est alors envoyé à Microsoft. D’autres connexions sans contenu de réunion sont les téléchargements de modèles, les vérifications de mises à jour, les mesures de latence vers le service Soniox ou Qwen utilisé, ainsi que les statistiques d’usage et les rapports d’erreurs.',
          'Selon l’éditeur, les statistiques d’usage et les rapports d’erreurs vont à PostHog aux États-Unis et, une fois connecté, sont liés à l’identifiant de compte, à l’e-mail et au nom ; la politique indique qu’il n’existe actuellement aucun réglage dans l’application pour les désactiver. Un compte Kizuna AI conserve une adresse e-mail, des journaux de connexion, le solde et l’usage, ainsi que les détails de paiement reçus de Stripe ; l’éditeur déclare ne ni vendre ni louer les données et ne pas entraîner de modèles avec elles.',
          'Le code source des applications est public sur GitHub, ce qui permet de vérifier le flux de données ; le serveur de comptes de l’éditeur n’est pas à code source ouvert.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Sokuji convient à celles et ceux qui parlent par-delà une barrière de langue et veulent une traduction dans les applications de réunion qu’ils utilisent déjà.**',
        ],
        items: [
          'Les personnes en réunion bilingue qui veulent que l’autre côté entende une voix traduite par un micro virtuel, dans n’importe quelle application et pas seulement dans un navigateur.',
          'Les auditeurs de cours, d’exposés ou de vidéos qui veulent des sous-titres traduits en direct de ce qu’ils entendent.',
          'Les intervenants dont le public doit pouvoir lire des sous-titres traduits de leur propre exposé.',
          'Les utilisateurs soucieux de leur vie privée qui veulent, selon l’éditeur, essayer la reconnaissance, la traduction et la synthèse vocale sur leur appareil sans clé.',
          'Les lecteurs qui préfèrent une application dont le code est public sous AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        content: [
          '**Sokuji convient mal à certaines situations, et plusieurs points restent à vérifier.**',
        ],
        items: [
          'Ne convient pas : les situations où une erreur de traduction compte. La page de l’éditeur dit elle-même qu’un grand modèle hébergé reste devant les modèles sur l’appareil en précision et en latence, et que pour un appel à enjeux élevé on voudra probablement l’un d’eux.',
          'Ne convient pas : qui doit désactiver les statistiques d’usage. La politique de confidentialité du 14 novembre 2026 indique qu’il n’existe actuellement aucun réglage dans l’application pour les désactiver.',
          'Non vérifié : la précision de la reconnaissance, la qualité de la traduction, la latence et la vitesse des modèles sur l’appareil sur des portables courants. PromptQuorum n’a pas exécuté l’application.',
          'Non vérifié : l’affirmation que rien ne quitte l’appareil avec des modèles sur l’appareil, face aux moteurs en ligne de Microsoft, aux téléchargements de modèles, aux vérifications de mises à jour et aux statistiques d’usage ; PromptQuorum n’a pas inspecté le trafic réseau.',
          'Non vérifié : si l’installateur Windows est signé et l’application macOS notariée ; ce sont des déclarations de l’éditeur.',
          'Flou : le dépôt contient encore un fichier de politique de confidentialité de l’extension daté du 3 juin 2025, qui décrit les analyses comme facultatives avec un réglage dans l’application, alors que la politique actuelle indique qu’il n’y a aucun réglage ; PromptQuorum considère la politique actuelle comme celle qui s’applique.',
          'Non vérifié : la politique de confidentialité mentionne une application mobile, mais ni la page de téléchargement ni le README n’indiquent de téléchargement mobile ; PromptQuorum traite donc Sokuji comme une application de bureau et de navigateur uniquement.',
          'Non vérifié : les détails de l’entreprise au-delà du nom Kizuna AI Lab (selon la page Commerce Disclosure, l’adresse est communiquée sur demande ; aucun numéro d’immatriculation trouvé), le nombre d’utilisateurs et les avis indépendants ; PromptQuorum n’a pas cherché d’avis indépendants.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokuji face aux alternatives',
        itemHeadings: true,
        content: [
          '**Sokuji recoupe des outils qui transcrivent ou sous-titrent la parole, mais il est conçu pour la traduction en direct en réunion ; PromptQuorum ne l’a pas comparé à eux en pratique.** Les outils ci-dessous figurent dans l’annuaire et sont décrits d’après leurs propres avis.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'Sokuji', 'Selon les sources': 'AGPL-3.0 ; bureau + navigateur ; traduction en direct bidirectionnelle' },
          { 'Outil': '[Buzz](/fr/power-local-llm/buzz-captions-review)', 'Selon les sources': 'MIT ; Mac/Windows/Linux ; transcription Whisper locale' },
          { 'Outil': '[Sablate](/fr/power-local-llm/sablate-review)', 'Selon les sources': 'Code fermé ; Windows/Mac ; sous-titres et traduction' },
          { 'Outil': '[Minutes](/fr/power-local-llm/minutes-review)', 'Selon les sources': 'MIT ; Mac/Windows ; notes de réunion depuis la transcription' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Sokuji fonctionne-t-il hors ligne ?',
            a: 'Selon l’éditeur, oui une fois les modèles sur l’appareil téléchargés : reconnaissance, traduction et voix s’exécutent alors sur votre ordinateur sans réseau. Selon la page de confidentialité, les moteurs « Online », Edge TTS et Bing Translator, ont besoin du réseau et envoient du texte à Microsoft, et l’application établit encore des connexions pour les mises à jour et les statistiques. PromptQuorum ne l’a pas testé.',
          },
          {
            q: 'Sokuji est-il gratuit ?',
            a: 'Selon l’éditeur, l’application est gratuite et à code source ouvert sous AGPL-3.0, et les modèles sur l’appareil ne coûtent rien. Les fournisseurs cloud facturent eux-mêmes avec votre propre clé, ou depuis un solde prépayé en dollars américains avec un compte Kizuna AI.',
          },
          {
            q: 'Avec quelles applications de réunion Sokuji fonctionne-t-il ?',
            a: 'L’application de bureau s’enregistre comme un micro : toute application où vous pouvez choisir un micro peut donc l’utiliser. Selon la page de téléchargement, l’extension est conçue pour Zoom, Google Meet, Microsoft Teams, Slack, Discord, Jitsi Meet, Whereby, Gather Town et Yandex Telemost.',
          },
          {
            q: 'Sokuji envoie-t-il mes réunions à Kizuna AI ?',
            a: 'Selon l’éditeur, non : le contenu des réunions va directement au fournisseur choisi. Les exceptions citées sont les échantillons de clonage de voix et les transcriptions pour notes de réunion avec un compte Kizuna AI, qui transitent par son serveur sans être conservés. PromptQuorum n’a pas inspecté le trafic réseau.',
          },
          {
            q: 'Puis-je désactiver les statistiques d’usage ?',
            a: 'La politique de confidentialité du 14 novembre 2026 indique qu’il n’existe actuellement aucun réglage dans l’application pour les désactiver. Un ancien fichier de politique dans le dépôt décrit une désactivation possible ; vérifiez donc le réglage dans l’application avant de vous fier à l’une ou l’autre indication.',
          },
          {
            q: 'À quelle fréquence Sokuji est-il mis à jour ?',
            a: 'GitHub liste la version 0.50.1 du 10 novembre 2026, la 0.50.2 du 11 novembre 2026, la 0.50.3 du 14 novembre 2026 et la 0.50.4 du 16 novembre 2026 ; le dernier commit sur la branche principale date du 18 novembre 2026.',
          },
          {
            q: 'Sur quels systèmes Sokuji fonctionne-t-il ?',
            a: 'Selon la page « Commerce Disclosure » de l’éditeur, l’application de bureau nécessite Windows 10 ou une version plus récente, macOS 13 ou plus récent, ou Linux (Ubuntu 20.04 ou plus récent recommandé). L’extension Chrome et Edge nécessite Chromium 116 ou plus récent. L’éditeur ne publie aucun minimum de mémoire ni de GPU, et PromptQuorum n’a mesuré ni l’utilisation de la mémoire ni la vitesse.',
          },
          {
            q: 'Faut-il un compte ou une clé API pour Sokuji ?',
            a: 'Selon l’éditeur, aucun compte n’est nécessaire pour utiliser Sokuji avec votre propre clé API ou avec des modèles sur l’appareil, et ni l’un ni l’autre n’est requis pour simplement l’installer. Pour traduire, il faut l’une de ces trois sources : des modèles sur l’appareil, votre propre clé API auprès d’un fournisseur cloud, ou un compte Kizuna AI prépayé.',
          },
          {
            q: 'Quels fournisseurs de traduction Sokuji prend-il en charge ?',
            a: 'Le README et la documentation de l’éditeur citent OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, des points d’accès compatibles OpenAI (application de bureau uniquement), un compte Kizuna AI et l’inférence locale sur l’appareil. Le clonage de voix est indiqué pour Palabra.ai, Doubao AST 2.0 et Soniox. Selon l’éditeur, le contenu des réunions va alors au fournisseur que vous avez choisi.',
          },
          {
            q: 'À quoi sert le mode bidirectionnel ?',
            a: 'Selon l’éditeur, vous définissez deux langues, et Sokuji détecte laquelle est parlée et traduit dans les deux sens, sous forme de voix traduite ou de sous-titres en direct. Le README attribue ce mode à Soniox et indique qu’il couvre plus de 60 langues. PromptQuorum n’a testé ni la détection de la langue ni la qualité de la traduction.',
          },
          {
            q: 'Sokuji nécessite-t-il un logiciel audio supplémentaire ?',
            a: 'Selon la page de téléchargement, le micro virtuel sous Windows nécessite VB-CABLE, installé séparément ; sous macOS, le pilote audio est fourni dans l’installateur ; sous Linux, l’application crée le micro virtuel via PulseAudio ou PipeWire et a besoin de pulseaudio-utils. L’extension ne fonctionne que sur les sites de réunion pris en charge ; pour les autres applications, il faut l’application de bureau.',
          },
          {
            q: 'Que valent les modèles sur l’appareil par rapport aux modèles cloud ?',
            a: 'PromptQuorum ne l’a pas mesuré. La page Local AI de l’éditeur indique elle-même qu’un grand modèle hébergé reste devant les modèles sur l’appareil en précision et en latence, et que pour un appel à enjeux élevés, vous en voudrez probablement un. Les modèles sur l’appareil se téléchargent une seule fois et, selon le README, ne demandent pas de GPU coûteux.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Sokuji mérite un coup d’œil si vous tenez des réunions bilingues et voulez une traduction en direct dans les deux sens depuis une application de bureau ou une extension de navigateur, avec le choix entre fournisseurs cloud et, selon l’éditeur, modèles sur l’appareil.**',
          'Sur le papier, il couvre beaucoup : un micro virtuel pour toute application, des sous-titres, la détection de la langue parlée dans les deux sens, plusieurs fournisseurs cloud, des modèles locaux et un code ouvert. Le développement est actif, avec quatre versions entre le 10 et le 16 novembre 2026.',
          'Les compromis sont réels : l’éditeur dit lui-même que la qualité sur l’appareil reste derrière les grands modèles hébergés, la politique actuelle indique que les statistiques d’usage ne se désactivent pas dans l’application, et PromptQuorum n’a rien testé. Essayez-le lors d’un appel sans grand enjeu et vérifiez la reconnaissance et la traduction dans les deux langues avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Sokuji](https://sokuji.kizuna.ai) — fonctionnalités et scénarios, consulté le 18 novembre 2026.',
          '[Page de téléchargement](https://sokuji.kizuna.ai/download) — plateformes, prérequis d’installation et déclarations de signature, consultée le 18 novembre 2026.',
          '[Page IA locale](https://sokuji.kizuna.ai/local-ai) — modèles sur l’appareil et comparaison de l’éditeur avec les modèles cloud, consultée le 18 novembre 2026.',
          '[Résumé de confidentialité](https://sokuji.kizuna.ai/privacy) — où va le contenu des réunions, consulté le 18 novembre 2026.',
          '[Politique de confidentialité](https://sokuji.kizuna.ai/docs/privacy) — données collectées et durées de conservation, datée du 14 novembre 2026, consultée le 18 novembre 2026.',
          '[Conditions d’utilisation](https://sokuji.kizuna.ai/docs/terms) — fournisseur, solde, droit applicable et juridiction, consultées le 18 novembre 2026.',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — exploitant, conditions du solde prépayé et configuration requise, présentée par l’éditeur comme une mention prévue par le droit japonais, consultée le 18 novembre 2026.',
          '[Dépôt GitHub](https://github.com/kizuna-ai-lab/sokuji) — licence, date de création et dernier commit, consulté le 18 novembre 2026.',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — fonctionnalités, fournisseurs, installation et notes de confidentialité, consulté le 18 novembre 2026.',
          '[Versions GitHub](https://github.com/kizuna-ai-lab/sokuji/releases) — dates de publication et paquets de la v0.50.4, consultées le 18 novembre 2026.',
          '[Ancien fichier de politique de confidentialité](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — politique de confidentialité de l’extension datée du 3 juin 2025, consultée le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Outils vocaux et audio locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Avis sur Buzz](/fr/power-local-llm/buzz-captions-review) — transcription Whisper locale sur le bureau.',
          '[Avis sur Sablate](/fr/power-local-llm/sablate-review) — sous-titres et traduction de vidéos sous Windows et Mac.',
          '[Avis sur Minutes](/fr/power-local-llm/minutes-review) — notes de réunion à partir de la transcription, gratuit et à code source ouvert.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-es.webp',
    title: 'Reseña de Sokuji: traducción de voz en directo en ambos sentidos para reuniones',
    seoTitle: 'Reseña de Sokuji: voz traducida en directo en reuniones',
    intro:
      'Sokuji 0.50.4 es una aplicación de escritorio y una extensión para Chrome y Edge, de código abierto, que traduce la voz en directo en ambos sentidos para reuniones bilingües. Funciona con proveedores de IA en la nube o, según el desarrollador, con modelos de reconocimiento, traducción y síntesis de voz que se ejecutan en tu propio dispositivo. La licencia es AGPL-3.0. Esta reseña se basa en el sitio web oficial, el repositorio de GitHub con sus versiones y las páginas de privacidad y condiciones, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la aplicación.',
    metaDescription:
      'Sokuji es una app de código abierto de traducción de voz en directo para reuniones bilingües, en la nube o en el dispositivo. Qué está confirmado.',
    twitterDescription:
      'Sokuji: app de código abierto de traducción de voz en directo para reuniones bilingües, de escritorio y extensión de Chrome y Edge. Qué está confirmado.',
    audience:
      'Personas en reuniones y llamadas bilingües, equipos que quieren subtítulos en directo en otro idioma y usuarios atentos a la privacidad que quieren probar reconocimiento, traducción y voz en el dispositivo',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Sokuji',
    targetKeywords: [
      'reseña de Sokuji',
      'app de traducción de voz en directo',
      'traducción de reuniones en tiempo real',
      'traducción de voz sin conexión',
      'traductor con micrófono virtual',
      'traductor en directo de código abierto',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Sokuji es una aplicación de código abierto (AGPL-3.0) que traduce la voz en directo en ambos sentidos para reuniones bilingües, con proveedores de IA en la nube o, según el desarrollador, modelos en el dispositivo.** Funciona como aplicación de escritorio para Windows, macOS y Linux y como extensión de Chrome y Edge, y actúa como micrófono virtual para Zoom, Google Meet, Microsoft Teams y otras aplicaciones. Según el desarrollador, la app es gratuita; el uso en la nube lo factura el proveedor o se descuenta de un saldo prepago de Kizuna AI. PromptQuorum no ha probado la aplicación.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Sokuji y para quién es?',
        answer:
          'Sokuji es una aplicación de traducción de voz en directo para reuniones, desarrollada en abierto en GitHub por Kizuna AI Lab. Sirve a quienes hablan a través de una barrera de idioma y quieren voz traducida o subtítulos en las aplicaciones que ya usan.',
        bullets: [
          'Con licencia AGPL-3.0; la app es gratuita y, según el desarrollador, los modelos en el dispositivo no necesitan cuenta ni clave de API.',
          'Según el desarrollador, un modo bidireccional detecta cuál de dos idiomas elegidos se está hablando y traduce en ambos sentidos, como voz traducida o como subtítulos en directo.',
          'Funciona con proveedores en la nube como OpenAI, Google Gemini, Soniox, Palabra.ai y Doubao AST 2.0, o con modelos en el dispositivo; el uso en la nube lo factura el proveedor o se descuenta de un saldo prepago de Kizuna AI.',
          'La aplicación de escritorio actúa como micrófono virtual en Windows, macOS y Linux; la extensión de Chrome y Edge funciona en los sitios de reuniones compatibles.',
          'La versión 0.50.4 salió el 16 de noviembre de 2026 y el último commit de la rama principal es del 18 de noviembre de 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
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
            text: 'Sokuji es una aplicación de código abierto que traduce la voz en directo en ambos sentidos para reuniones bilingües, con proveedores de IA en la nube o, según el desarrollador, modelos que se ejecutan en tu propio dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un intérprete entre tú y tu aplicación de reuniones: escucha, traduce y dice el resultado por un micrófono virtual o lo muestra como subtítulos. Tú eliges si el reconocimiento, la traducción y la voz vienen de un proveedor en la nube o de modelos guardados en tu equipo.',
          },
        ],
        items: [
          'Instala una aplicación de escritorio desde la página de versiones de GitHub (EXE de instalación para Windows, PKG para macOS, DEB o AppImage para Linux) o añade la extensión para Chrome o Edge desde la tienda.',
          'Elige un proveedor: tu propia clave de API, una cuenta prepago de Kizuna AI o modelos en el dispositivo que, según el desarrollador, no necesitan cuenta ni clave.',
          'El desarrollador dice que el contenido de las reuniones va directamente de tu dispositivo al proveedor elegido y que, con solo modelos en el dispositivo, se queda en tu equipo; su página de privacidad lista las excepciones, entre ellas los motores en línea de Microsoft.',
          'Las estadísticas de uso y los informes de errores van a PostHog, y la política de privacidad actual dice que las apps no tienen un ajuste para desactivarlos.',
          'PromptQuorum no ha probado la aplicación, así que la precisión del reconocimiento, la calidad de la traducción, la latencia y la velocidad de los modelos en el dispositivo no están verificadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La página de privacidad dice que con modelos en el dispositivo el contenido de las reuniones nunca sale de tu equipo una vez descargados los modelos. PromptQuorum no inspeccionó el tráfico de red, así que no puede confirmarlo más allá de lo que escribe el desarrollador.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Sokuji es una aplicación de traducción de voz en directo de Kizuna AI Lab, publicada como aplicación de escritorio para Windows, macOS y Linux y como extensión de navegador para Chrome y Edge, con licencia AGPL-3.0.**',
          'Se desarrolla en abierto en [github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji). El repositorio se creó en abril de 2025, la versión 0.50.4 apareció el 16 de noviembre de 2026 y el último commit de la rama principal es del 18 de noviembre de 2026, así que el desarrollo está activo y no se aplica ningún aviso de proyecto abandonado. Las condiciones de servicio nombran a Kizuna AI Lab como proveedor y se rigen por la ley de Japón, con los tribunales de Tokio como fuero exclusivo. La página [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) del desarrollador, que este presenta como un aviso conforme a la ley japonesa, nombra a Kizuna AI Lab como operador y dice que la dirección y el teléfono se facilitan bajo petición; PromptQuorum no encontró una dirección de empresa publicada ni un número de registro. Según el desarrollador, su servidor de cuentas no es de código abierto.',
          'Según el desarrollador, Sokuji se coloca como un micrófono entre tú y tu aplicación de reuniones: tu voz se reconoce, se traduce y se dice o se muestra como subtítulos en el otro idioma, y lo que dice la otra parte te llega como subtítulos o leído en voz alta. Un modo bidireccional detecta cuál de dos idiomas elegidos se habla y traduce en ambos sentidos. El README y la documentación del desarrollador citan OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, puntos de acceso compatibles con OpenAI, una cuenta de Kizuna AI y la inferencia en el dispositivo («Local Inference») como formas de lograrlo.',
          'PromptQuorum no ha ejecutado la aplicación y no ha comprobado la precisión del reconocimiento, la calidad de la traducción, la latencia ni la velocidad de los modelos en el dispositivo.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**Puedes instalar Sokuji como aplicación de escritorio desde los paquetes de la página de versiones de GitHub o añadir su extensión a Chrome o Edge desde la tienda; la página de descargas del desarrollador indica ambas opciones.**',
          'La versión v0.50.4 incluye un EXE de instalación para Windows, instaladores PKG para macOS en Apple silicon y en Intel, paquetes DEB y AppImage para Linux en x64 y arm64, y la extensión como ZIP. La página de descargas dice que el instalador de Windows está firmado a través de la SignPath Foundation y que la app de macOS está firmada y notarizada.',
        ],
        columns: ['Plataforma', 'Paquete'],
        rows: [
          { 'Plataforma': 'Windows', 'Paquete': 'EXE de instalación (VB-CABLE aparte)' },
          { 'Plataforma': 'macOS (Apple silicon)', 'Paquete': 'PKG' },
          { 'Plataforma': 'macOS (Intel)', 'Paquete': 'PKG (x64)' },
          { 'Plataforma': 'Linux (x64, arm64)', 'Paquete': 'DEB o AppImage' },
          { 'Plataforma': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', 'Paquete': 'Extensión de Chrome Web Store' },
          { 'Plataforma': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', 'Paquete': 'Extensión de Edge Add-ons' },
        ],
        note: 'Descarga desde la [página de versiones de GitHub](https://github.com/kizuna-ai-lab/sokuji/releases/latest) o la [página de descargas](https://sokuji.kizuna.ai/download) del desarrollador. PromptQuorum no ejecutó los instaladores y no comprobó si están firmados o notarizados; esas indicaciones son del desarrollador.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Sokuji necesita Windows, macOS o Linux para la aplicación de escritorio, o Chromium 116 o posterior para la extensión; el desarrollador no publica un mínimo de memoria ni de GPU.**',
          'La página [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) del desarrollador indica Windows 10 o posterior, macOS 13 o posterior y Linux (se recomienda Ubuntu 20.04 o posterior) para la aplicación de escritorio, y menciona también una conexión de banda ancha estable y un micrófono; su página de IA local dice que los modelos en el dispositivo funcionan sin red una vez descargados. Según la página de descargas, el micrófono virtual en Windows necesita VB-CABLE, que se instala aparte; en macOS el controlador de audio viene dentro del instalador; en Linux la app crea el micrófono virtual mediante PulseAudio o PipeWire y necesita pulseaudio-utils. La extensión solo funciona en los sitios de reuniones compatibles; para cualquier otra cosa hace falta la aplicación de escritorio. Los modelos en el dispositivo se descargan una vez y, según el desarrollador, la app detecta tu GPU y descarga el paquete de motor adecuado. PromptQuorum no midió el uso de memoria ni la velocidad.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'Escritorio', 'Dato indicado': 'Windows 10+, macOS 13+, Ubuntu 20.04+ (recomendado)' },
          { 'Elemento': 'Extensión', 'Dato indicado': 'Chrome y Edge, Chromium 116 o posterior' },
          { 'Elemento': 'Audio en Windows', 'Dato indicado': 'VB-CABLE, instalado aparte' },
          { 'Elemento': 'Audio en Linux', 'Dato indicado': 'PulseAudio o PipeWire, pulseaudio-utils' },
          { 'Elemento': 'Modelos en el dispositivo', 'Dato indicado': 'Descarga única; sin GPU cara (README)' },
          { 'Elemento': 'Memoria y GPU', 'Dato indicado': 'No publicado' },
        ],
        note: 'Para traducir hace falta un proveedor: modelos en el dispositivo, tu propia clave de API o una cuenta de Kizuna AI. Según el desarrollador, ninguno es necesario para instalar y no hace falta cuenta para usar Sokuji con tu propia clave o con modelos en el dispositivo.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Sokuji está pensado para traducir la voz en directo en reuniones; el micrófono virtual, los subtítulos y la elección de proveedor lo rodean.** Todos los puntos siguientes son afirmaciones del desarrollador, tomadas del sitio web y del README.',
        ],
        items: [
          'Traducción bidireccional: fijas dos idiomas y Sokuji detecta cuál se habla y traduce en ambos sentidos; el README atribuye este modo a Soniox y menciona más de 60 idiomas.',
          'Traducir tu voz: la otra parte oye la traducción por un micrófono virtual en Zoom, Google Meet, Microsoft Teams, Discord o cualquier aplicación que te deje elegir un micrófono.',
          'Traducir lo que dicen los demás: la extensión traduce el audio de la pestaña de la reunión y la aplicación de escritorio el audio del sistema, como subtítulos en directo o leído en voz alta.',
          'Modo de subtítulos y compartir subtítulos: texto traducido en pantalla, que puede compartirse para que la otra parte lo lea.',
          'Modelos en el dispositivo: reconocimiento de voz con modelos de la familia Whisper y otros, traducción con pares de idiomas Opus-MT y modelos de lenguaje multilingües como Qwen y TranslateGemma, y síntesis de voz con motores como Piper y Coqui, mediante WASM y WebGPU.',
          'Proveedores en la nube: OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, puntos de acceso compatibles con OpenAI (solo escritorio) y una cuenta de Kizuna AI; el README menciona la clonación de voz para Palabra.ai, Doubao AST 2.0 y Soniox.',
          'Herramientas de audio: supresión de ruido con IA, cancelación de eco y un retorno para oír tu propia voz.',
          'Interfaz: 30 idiomas de interfaz, un modo sencillo para la configuración y un modo avanzado con forma de onda.',
          'Notas de reunión: con una cuenta de Kizuna AI, el desarrollador ofrece notas redactadas a partir de la transcripción de la sesión, que pasa por su servidor hacia OpenAI y no se conserva, según la página de privacidad.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Traducir una reunión significa enviar la voz de otras personas al proveedor que elijas, y la clonación de voz procesa la voz de una persona. Avisa a los participantes antes de usarlo, consulta las normas de tu empleador y de la plataforma de reuniones, y obtén consentimiento antes de clonar la voz de nadie. Esta es información general, no asesoramiento jurídico.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según el desarrollador, el contenido de las reuniones va directamente de tu dispositivo al proveedor de IA que elijas, nunca a través de Kizuna AI, y con solo modelos en el dispositivo se queda en tu equipo; PromptQuorum no inspeccionó el tráfico de red y no puede confirmarlo.**',
          'La página de privacidad, fechada el 14 de noviembre de 2026, enumera las excepciones. Con una cuenta de Kizuna AI, una muestra de voz grabada para clonar la voz pasa por el servidor del desarrollador de camino a Soniox y se descarta después, y el texto de la transcripción de una sesión cuyas notas de reunión escribe Kizuna AI pasa por su servidor hacia OpenAI y no se conserva. Sin cuenta usas tu propia clave o modelos en el dispositivo.',
          'Los motores «Online» de la inferencia local, Edge TTS para voz y Bing Translator, no se ejecutan en tu equipo. Según el desarrollador, se usan automáticamente cuando no hay un modelo en el dispositivo listo, o cuando los eliges, y el texto que se va a decir o traducir se envía entonces a Microsoft. Otras conexiones sin contenido de reuniones son las descargas de modelos, las comprobaciones de actualizaciones, las mediciones de latencia hacia el servicio de Soniox o Qwen que uses, y las estadísticas de uso y los informes de errores.',
          'Según el desarrollador, las estadísticas de uso y los informes de errores van a PostHog en Estados Unidos y, una vez que inicias sesión, se vinculan a tu ID de cuenta, correo y nombre; la política dice que actualmente no hay un ajuste en la app para desactivarlos. Una cuenta de Kizuna AI guarda una dirección de correo, registros de inicio de sesión, saldo y uso, y datos de pago recibidos de Stripe; el desarrollador afirma que no vende ni alquila datos y que no entrena modelos con ellos.',
          'El código fuente de las apps es público en GitHub, así que el flujo de datos puede auditarse; el servidor de cuentas del desarrollador no es de código abierto.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Sokuji encaja con quienes hablan a través de una barrera de idioma y quieren traducción dentro de las aplicaciones de reuniones que ya usan.**',
        ],
        items: [
          'Personas en reuniones bilingües que quieren que la otra parte oiga una voz traducida por un micrófono virtual, en cualquier aplicación y no solo en un navegador.',
          'Oyentes de clases, charlas o vídeos que quieren subtítulos traducidos en directo de lo que oyen.',
          'Ponentes que quieren que su público lea subtítulos traducidos de su propia charla.',
          'Usuarios atentos a la privacidad que quieren probar, según el desarrollador, reconocimiento, traducción y voz en su propio dispositivo sin clave.',
          'Lectores que prefieren una aplicación cuyo código es público con licencia AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Sokuji encaja mal en algunas situaciones, y varios datos siguen sin verificar.**',
        ],
        items: [
          'No encaja: situaciones en las que importa una mala traducción. La propia página del desarrollador dice que un modelo grande alojado sigue por delante de los modelos en el dispositivo en precisión y latencia, y que para una llamada de mucho peso probablemente querrás uno de ellos.',
          'No encaja: quien necesite desactivar las estadísticas de uso. La política de privacidad del 14 de noviembre de 2026 dice que actualmente no hay ningún ajuste en la app para desactivarlas.',
          'Sin verificar: la precisión del reconocimiento, la calidad de la traducción, la latencia y la velocidad de los modelos en el dispositivo en portátiles habituales. PromptQuorum no ha ejecutado la aplicación.',
          'Sin verificar: la afirmación de que con modelos en el dispositivo nada sale del equipo, frente a los motores en línea de Microsoft, las descargas de modelos, las comprobaciones de actualizaciones y las estadísticas de uso; PromptQuorum no inspeccionó el tráfico de red.',
          'Sin verificar: si el instalador de Windows está firmado y la app de macOS notarizada; son afirmaciones del desarrollador.',
          'No está claro: el repositorio todavía contiene un archivo de política de privacidad de la extensión fechado el 3 de junio de 2025 que describe las analíticas como opcionales con un ajuste en la app, mientras que la política actual dice que no hay ajuste; PromptQuorum trata la política actual como la vigente.',
          'Sin verificar: la política de privacidad menciona una aplicación móvil, pero ni la página de descargas ni el README indican una descarga móvil; por eso PromptQuorum trata Sokuji como una herramienta de escritorio y navegador.',
          'Sin verificar: datos de la empresa más allá del nombre Kizuna AI Lab (según la página Commerce Disclosure, la dirección se facilita bajo petición; no se encontró número de registro), cifras de usuarios y reseñas independientes; PromptQuorum no buscó reseñas independientes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokuji frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Sokuji se solapa con herramientas que transcriben o subtitulan voz, pero está pensado para la traducción en directo en reuniones; PromptQuorum no lo ha comparado con ellas en la práctica.** Las herramientas siguientes están en el directorio y se describen a partir de sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'Sokuji', 'Según las fuentes': 'AGPL-3.0; escritorio + navegador; traducción en directo bidireccional' },
          { 'Herramienta': '[Buzz](/es/power-local-llm/buzz-captions-review)', 'Según las fuentes': 'MIT; Mac/Windows/Linux; transcripción Whisper local' },
          { 'Herramienta': '[Sablate](/es/power-local-llm/sablate-review)', 'Según las fuentes': 'Código cerrado; Windows/Mac; subtítulos y traducción' },
          { 'Herramienta': '[Minutes](/es/power-local-llm/minutes-review)', 'Según las fuentes': 'MIT; Mac/Windows; notas de reunión desde la transcripción' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Sokuji sin conexión?',
            a: 'Según el desarrollador, sí una vez descargados los modelos en el dispositivo: el reconocimiento, la traducción y la voz se ejecutan entonces en tu equipo sin red. Según la página de privacidad, los motores «Online», Edge TTS y Bing Translator, necesitan red y envían texto a Microsoft, y la app sigue haciendo conexiones de actualización y estadísticas. PromptQuorum no lo probó.',
          },
          {
            q: '¿Es gratuito Sokuji?',
            a: 'Según el desarrollador, la app es gratuita y de código abierto con licencia AGPL-3.0, y los modelos en el dispositivo no cuestan nada. Los proveedores en la nube facturan ellos mismos si usas tu propia clave, o se descuenta de un saldo prepago en dólares estadounidenses si usas una cuenta de Kizuna AI.',
          },
          {
            q: '¿Con qué aplicaciones de reuniones funciona Sokuji?',
            a: 'La aplicación de escritorio se registra como un micrófono, así que cualquier aplicación que te deje elegir un micrófono puede usarla. Según la página de descargas, la extensión está pensada para Zoom, Google Meet, Microsoft Teams, Slack, Discord, Jitsi Meet, Whereby, Gather Town y Yandex Telemost.',
          },
          {
            q: '¿Sokuji envía mis reuniones a Kizuna AI?',
            a: 'Según el desarrollador, no: el contenido de las reuniones va directamente al proveedor elegido. Las excepciones que indica son las muestras de clonación de voz y las transcripciones para notas de reunión con una cuenta de Kizuna AI, que pasan por su servidor y no se conservan. PromptQuorum no inspeccionó el tráfico de red.',
          },
          {
            q: '¿Puedo desactivar las estadísticas de uso?',
            a: 'La política de privacidad del 14 de noviembre de 2026 dice que actualmente no hay ningún ajuste en la app para desactivarlas. Un archivo de política más antiguo del repositorio describe una opción para desactivarlas, así que comprueba el ajuste en la app antes de fiarte de una u otra indicación.',
          },
          {
            q: '¿Cada cuánto se actualiza Sokuji?',
            a: 'GitHub lista la versión 0.50.1 del 10 de noviembre de 2026, la 0.50.2 del 11 de noviembre de 2026, la 0.50.3 del 14 de noviembre de 2026 y la 0.50.4 del 16 de noviembre de 2026; el último commit de la rama principal es del 18 de noviembre de 2026.',
          },
          {
            q: '¿En qué sistemas funciona Sokuji?',
            a: 'Según la página «Commerce Disclosure» del desarrollador, la aplicación de escritorio requiere Windows 10 o posterior, macOS 13 o posterior, o Linux (se recomienda Ubuntu 20.04 o posterior). La extensión de Chrome y Edge requiere Chromium 116 o posterior. El desarrollador no publica mínimos de memoria ni de GPU, y PromptQuorum no midió el uso de memoria ni la velocidad.',
          },
          {
            q: '¿Necesito una cuenta o una clave de API para Sokuji?',
            a: 'Según el desarrollador, no hace falta cuenta para usar Sokuji con tu propia clave de API o con modelos en el dispositivo, y tampoco se necesita ninguna de las dos solo para instalarlo. Para traducir necesitas una de tres fuentes: modelos en el dispositivo, tu propia clave de API de un proveedor en la nube o una cuenta de Kizuna AI de prepago.',
          },
          {
            q: '¿Qué proveedores de traducción admite Sokuji?',
            a: 'El README y la documentación del desarrollador mencionan OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, endpoints compatibles con OpenAI (solo en escritorio), una cuenta de Kizuna AI y la inferencia local en el dispositivo. La clonación de voz figura para Palabra.ai, Doubao AST 2.0 y Soniox. Según el desarrollador, el contenido de las reuniones va entonces al proveedor que elijas.',
          },
          {
            q: '¿Qué hace el modo bidireccional?',
            a: 'Según el desarrollador, defines dos idiomas y Sokuji detecta cuál se habla y traduce en ambos sentidos, como voz traducida o como subtítulos en directo. El README atribuye este modo a Soniox y dice que cubre más de 60 idiomas. PromptQuorum no probó la detección del idioma ni la calidad de la traducción.',
          },
          {
            q: '¿Necesita Sokuji software de audio adicional?',
            a: 'Según la página de descargas, el micrófono virtual en Windows necesita VB-CABLE, que se instala aparte; en macOS el controlador de audio viene dentro del instalador; en Linux la app crea el micrófono virtual mediante PulseAudio o PipeWire y necesita pulseaudio-utils. La extensión solo funciona en los sitios de reuniones compatibles, así que para otras aplicaciones necesitas la app de escritorio.',
          },
          {
            q: '¿Qué tal son los modelos en el dispositivo frente a los modelos en la nube?',
            a: 'PromptQuorum no lo midió. La propia página Local AI del desarrollador dice que un modelo grande alojado sigue por delante de los modelos en el dispositivo en precisión y latencia, y que para una llamada importante probablemente querrás uno. Los modelos en el dispositivo se descargan una vez y, según el README, no necesitan una GPU cara.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Sokuji merece un vistazo si haces reuniones bilingües y quieres traducción en directo en ambos sentidos desde una aplicación de escritorio o una extensión de navegador, con elección entre proveedores en la nube y, según el desarrollador, modelos en el dispositivo.**',
          'Sobre el papel cubre mucho: un micrófono virtual para cualquier aplicación, subtítulos, detección del idioma hablado en ambos sentidos, varios proveedores en la nube, modelos locales y un código abierto. El desarrollo está activo, con cuatro versiones entre el 10 y el 16 de noviembre de 2026.',
          'Las contrapartidas son reales: el propio desarrollador dice que la calidad en el dispositivo queda por detrás de los grandes modelos alojados, la política actual dice que las estadísticas de uso no se pueden desactivar en la app y PromptQuorum no ha probado nada. Pruébalo en una llamada de poco riesgo y comprueba el reconocimiento y la traducción en ambos idiomas antes de depender de él.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Sokuji](https://sokuji.kizuna.ai) — funciones y escenarios, consultado el 18 de noviembre de 2026.',
          '[Página de descargas](https://sokuji.kizuna.ai/download) — plataformas, requisitos de instalación y afirmaciones sobre la firma, consultada el 18 de noviembre de 2026.',
          '[Página de IA local](https://sokuji.kizuna.ai/local-ai) — modelos en el dispositivo y la comparación del desarrollador con los modelos en la nube, consultada el 18 de noviembre de 2026.',
          '[Resumen de privacidad](https://sokuji.kizuna.ai/privacy) — adónde va el contenido de las reuniones, consultado el 18 de noviembre de 2026.',
          '[Política de privacidad](https://sokuji.kizuna.ai/docs/privacy) — datos recogidos y plazos de conservación, fechada el 14 de noviembre de 2026, consultada el 18 de noviembre de 2026.',
          '[Condiciones de servicio](https://sokuji.kizuna.ai/docs/terms) — proveedor, saldo, ley aplicable y fuero, consultadas el 18 de noviembre de 2026.',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — operador, condiciones del saldo prepago y requisitos del sistema, presentado por el desarrollador como un aviso conforme a la ley japonesa, consultada el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/kizuna-ai-lab/sokuji) — licencia, fecha de creación y último commit, consultado el 18 de noviembre de 2026.',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — funciones, proveedores, instalación y notas de privacidad, consultado el 18 de noviembre de 2026.',
          '[Versiones de GitHub](https://github.com/kizuna-ai-lab/sokuji/releases) — fechas de publicación y paquetes de la v0.50.4, consultadas el 18 de noviembre de 2026.',
          '[Archivo de política de privacidad anterior](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — política de privacidad de la extensión fechada el 3 de junio de 2025, consultada el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — síntesis de voz, reconocimiento de voz y agentes de voz lado a lado.',
          '[Reseña de Buzz](/es/power-local-llm/buzz-captions-review) — transcripción Whisper local en el escritorio.',
          '[Reseña de Sablate](/es/power-local-llm/sablate-review) — subtítulos y traducción de vídeo en Windows y Mac.',
          '[Reseña de Minutes](/es/power-local-llm/minutes-review) — notas de reunión a partir de la transcripción, gratuito y de código abierto.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-pt.webp',
    title: 'Análise do Sokuji: tradução de voz ao vivo nos dois sentidos para reuniões',
    seoTitle: 'Análise do Sokuji: tradução de voz ao vivo em reuniões',
    intro:
      'O Sokuji 0.50.4 é um aplicativo de desktop e uma extensão para Chrome e Edge, de código aberto, que traduz a fala ao vivo nos dois sentidos em reuniões bilíngues. Ele funciona com provedores de IA na nuvem ou, segundo o desenvolvedor, com modelos de reconhecimento, tradução e síntese de voz que rodam no seu próprio dispositivo. A licença é AGPL-3.0. Esta análise se baseia no site oficial, no repositório do GitHub com suas versões e nas páginas de privacidade e de termos, consultados em 18 de novembro de 2026. A PromptQuorum não testou o aplicativo.',
    metaDescription:
      'O Sokuji é um app de código aberto de tradução de voz ao vivo para reuniões bilíngues, na nuvem ou no dispositivo. O que está confirmado.',
    twitterDescription:
      'Sokuji: app de código aberto de tradução de voz ao vivo para reuniões bilíngues, para desktop e extensão do Chrome e Edge. O que está confirmado.',
    audience:
      'Pessoas em reuniões e chamadas bilíngues, equipes que querem legendas ao vivo em outro idioma e usuários atentos à privacidade que querem experimentar reconhecimento, tradução e voz no dispositivo',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Sokuji',
    targetKeywords: [
      'análise do Sokuji',
      'aplicativo de tradução de voz ao vivo',
      'tradução de reuniões em tempo real',
      'tradução de voz offline',
      'tradutor com microfone virtual',
      'tradutor ao vivo de código aberto',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Sokuji é um aplicativo de código aberto (AGPL-3.0) que traduz a fala ao vivo nos dois sentidos em reuniões bilíngues, com provedores de IA na nuvem ou, segundo o desenvolvedor, modelos no dispositivo.** Ele roda como aplicativo de desktop para Windows, macOS e Linux e como extensão para Chrome e Edge, e funciona como microfone virtual para Zoom, Google Meet, Microsoft Teams e outros aplicativos. Segundo o desenvolvedor, o app é gratuito; o uso na nuvem é cobrado pelo provedor ou debitado de um saldo pré-pago da Kizuna AI. A PromptQuorum não testou o aplicativo.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Sokuji e para quem ele serve?',
        answer:
          'O Sokuji é um aplicativo de tradução de voz ao vivo para reuniões, desenvolvido às claras no GitHub pela Kizuna AI Lab. Serve para quem conversa além de uma barreira de idioma e quer voz traduzida ou legendas nos aplicativos que já usa.',
        bullets: [
          'Licenciado sob AGPL-3.0; o app é gratuito e, segundo o desenvolvedor, os modelos no dispositivo não exigem conta nem chave de API.',
          'Segundo o desenvolvedor, um modo bidirecional detecta qual de dois idiomas escolhidos está sendo falado e traduz nos dois sentidos, como voz traduzida ou como legendas ao vivo.',
          'Funciona com provedores na nuvem como OpenAI, Google Gemini, Soniox, Palabra.ai e Doubao AST 2.0, ou com modelos no dispositivo; o uso na nuvem é cobrado pelo provedor ou debitado de um saldo pré-pago da Kizuna AI.',
          'O aplicativo de desktop funciona como microfone virtual no Windows, macOS e Linux; a extensão para Chrome e Edge funciona nos sites de reunião compatíveis.',
          'A versão 0.50.4 saiu em 16 de novembro de 2026 e o último commit no ramo principal é de 18 de novembro de 2026.',
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
            text: 'O Sokuji é um aplicativo de código aberto que traduz a fala ao vivo nos dois sentidos em reuniões bilíngues, com provedores de IA na nuvem ou, segundo o desenvolvedor, modelos que rodam no seu próprio dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um intérprete entre você e o seu aplicativo de reuniões: ele escuta, traduz e fala o resultado por um microfone virtual ou o mostra como legenda. Você escolhe se reconhecimento, tradução e voz vêm de um provedor na nuvem ou de modelos guardados no seu computador.',
          },
        ],
        items: [
          'Instale um aplicativo de desktop pela página de versões do GitHub (EXE de instalação para Windows, PKG para macOS, DEB ou AppImage para Linux) ou adicione a extensão para Chrome ou Edge pela loja.',
          'Escolha um provedor: sua própria chave de API, uma conta pré-paga da Kizuna AI ou modelos no dispositivo que, segundo o desenvolvedor, não exigem conta nem chave.',
          'O desenvolvedor diz que o conteúdo das reuniões vai direto do seu dispositivo para o provedor escolhido e que, com apenas modelos no dispositivo, ele fica no seu computador; a página de privacidade dele lista as exceções, entre elas os mecanismos online da Microsoft.',
          'Estatísticas de uso e relatórios de erros vão para o PostHog, e a política de privacidade atual diz que os apps não têm um botão para desativá-los.',
          'A PromptQuorum não testou o aplicativo, então a precisão do reconhecimento, a qualidade da tradução, a latência e a velocidade dos modelos no dispositivo não foram verificadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A página de privacidade diz que, com modelos no dispositivo, o conteúdo das reuniões nunca sai do seu computador depois que os modelos são baixados. A PromptQuorum não inspecionou o tráfego de rede, então só pode repetir o que o desenvolvedor escreve.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Sokuji é um aplicativo de tradução de voz ao vivo da Kizuna AI Lab, lançado como aplicativo de desktop para Windows, macOS e Linux e como extensão de navegador para Chrome e Edge, sob a licença AGPL-3.0.**',
          'Ele é desenvolvido às claras em [github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji). O repositório foi criado em abril de 2025, a versão 0.50.4 saiu em 16 de novembro de 2026 e o último commit no ramo principal é de 18 de novembro de 2026; o desenvolvimento, portanto, está ativo e nenhum aviso de projeto abandonado se aplica. Os termos de serviço nomeiam a Kizuna AI Lab como provedora e são regidos pelas leis do Japão, com os tribunais de Tóquio como foro exclusivo. A página [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) do desenvolvedor, que ele apresenta como um aviso previsto na lei japonesa, nomeia a Kizuna AI Lab como operadora e diz que o endereço e o telefone são informados mediante solicitação; a PromptQuorum não encontrou endereço da empresa publicado nem número de registro. Segundo o desenvolvedor, o servidor de contas não é de código aberto.',
          'Segundo o desenvolvedor, o Sokuji fica entre você e o seu aplicativo de reuniões como um microfone: a sua fala é reconhecida, traduzida e falada ou mostrada como legenda no outro idioma, e o que o outro lado diz volta para você como legenda ou lido em voz alta. Um modo bidirecional detecta qual de dois idiomas escolhidos está sendo falado e traduz nos dois sentidos. O README e a documentação do desenvolvedor citam OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, endpoints compatíveis com a OpenAI, uma conta da Kizuna AI e a inferência no dispositivo (“Local Inference”) como formas de fazer isso.',
          'A PromptQuorum não executou o aplicativo e não verificou a precisão do reconhecimento, a qualidade da tradução, a latência nem a velocidade dos modelos no dispositivo.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você pode instalar o Sokuji como aplicativo de desktop pelos pacotes da página de versões do GitHub ou adicionar a extensão ao Chrome ou ao Edge pela loja; a página de download do desenvolvedor lista as duas opções.**',
          'A versão v0.50.4 lista um EXE de instalação para Windows, instaladores PKG para macOS em Apple silicon e em Intel, pacotes DEB e AppImages para Linux em x64 e arm64, e a extensão como ZIP. A página de download diz que o instalador do Windows é assinado pela SignPath Foundation e que o app do macOS é assinado e notarizado.',
        ],
        columns: ['Plataforma', 'Pacote'],
        rows: [
          { 'Plataforma': 'Windows', 'Pacote': 'EXE de instalação (VB-CABLE à parte)' },
          { 'Plataforma': 'macOS (Apple silicon)', 'Pacote': 'PKG' },
          { 'Plataforma': 'macOS (Intel)', 'Pacote': 'PKG (x64)' },
          { 'Plataforma': 'Linux (x64, arm64)', 'Pacote': 'DEB ou AppImage' },
          { 'Plataforma': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', 'Pacote': 'Extensão da Chrome Web Store' },
          { 'Plataforma': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', 'Pacote': 'Extensão do Edge Add-ons' },
        ],
        note: 'Baixe pela [página de versões do GitHub](https://github.com/kizuna-ai-lab/sokuji/releases/latest) ou pela [página de download](https://sokuji.kizuna.ai/download) do desenvolvedor. A PromptQuorum não executou os instaladores e não verificou se eles são assinados ou notarizados; essas indicações são do desenvolvedor.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O Sokuji exige Windows, macOS ou Linux para o aplicativo de desktop, ou Chromium 116 ou mais recente para a extensão; o desenvolvedor não publica mínimo de memória nem de GPU.**',
          'A página [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) do desenvolvedor indica Windows 10 ou mais recente, macOS 13 ou mais recente e Linux (Ubuntu 20.04 ou mais recente recomendado) para o aplicativo de desktop, e também cita uma conexão de banda larga estável e um microfone; a página de IA local dele diz que os modelos no dispositivo funcionam sem rede depois de baixados. Segundo a página de download, o microfone virtual no Windows exige o VB-CABLE, instalado à parte; no macOS o driver de áudio vem dentro do instalador; no Linux o app cria o microfone virtual por PulseAudio ou PipeWire e exige pulseaudio-utils. A extensão só funciona nos sites de reunião compatíveis; para qualquer outra coisa é preciso o aplicativo de desktop. Os modelos no dispositivo são baixados uma vez e, segundo o desenvolvedor, o app detecta a sua GPU e baixa o pacote de motor adequado. A PromptQuorum não mediu uso de memória nem velocidade.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Desktop', 'Valor informado': 'Windows 10+, macOS 13+, Ubuntu 20.04+ (recomendado)' },
          { 'Item': 'Extensão', 'Valor informado': 'Chrome e Edge, Chromium 116 ou mais recente' },
          { 'Item': 'Áudio no Windows', 'Valor informado': 'VB-CABLE, instalado à parte' },
          { 'Item': 'Áudio no Linux', 'Valor informado': 'PulseAudio ou PipeWire, pulseaudio-utils' },
          { 'Item': 'Modelos no dispositivo', 'Valor informado': 'Baixados uma vez; sem GPU cara (README)' },
          { 'Item': 'Memória e GPU', 'Valor informado': 'Não publicado' },
        ],
        note: 'Para traduzir é preciso um provedor: modelos no dispositivo, sua própria chave de API ou uma conta da Kizuna AI. Segundo o desenvolvedor, nenhum deles é necessário para instalar, e não é preciso conta para usar o Sokuji com sua própria chave ou com modelos no dispositivo.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Sokuji é feito em torno da tradução de voz ao vivo em reuniões; o microfone virtual, as legendas e a escolha de provedor ficam ao redor disso.** Todos os itens abaixo são afirmações do desenvolvedor, tiradas do site e do README.',
        ],
        items: [
          'Tradução bidirecional: você define dois idiomas e o Sokuji detecta qual está sendo falado e traduz nos dois sentidos; o README atribui esse modo ao Soniox e cita mais de 60 idiomas.',
          'Traduzir a sua voz: o outro lado ouve a tradução por um microfone virtual no Zoom, Google Meet, Microsoft Teams, Discord ou em qualquer aplicativo em que você possa escolher um microfone.',
          'Traduzir o que os outros dizem: a extensão traduz o áudio da aba da reunião e o aplicativo de desktop traduz o áudio do sistema, como legendas ao vivo ou lido em voz alta.',
          'Modo de legendas e compartilhamento de legendas: texto traduzido na tela, que pode ser compartilhado para o outro lado acompanhar.',
          'Modelos no dispositivo: reconhecimento de voz com modelos da família Whisper e outros, tradução com pares de idiomas Opus-MT e modelos de linguagem multilíngues como Qwen e TranslateGemma, e síntese de voz com motores como Piper e Coqui, via WASM e WebGPU.',
          'Provedores na nuvem: OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, endpoints compatíveis com a OpenAI (somente desktop) e uma conta da Kizuna AI; o README cita clonagem de voz para Palabra.ai, Doubao AST 2.0 e Soniox.',
          'Ferramentas de áudio: supressão de ruído por IA, cancelamento de eco e um retorno para ouvir a própria voz.',
          'Interface: 30 idiomas de interface, um modo simples para a configuração e um modo avançado com forma de onda.',
          'Notas de reunião: com uma conta da Kizuna AI, o desenvolvedor oferece notas escritas a partir da transcrição da sessão, que passa pelo servidor dele até a OpenAI e não é guardada, segundo a página de privacidade.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Traduzir uma reunião significa enviar a fala de outras pessoas ao provedor que você escolher, e a clonagem de voz processa a voz de uma pessoa. Avise os participantes antes de usar, confira as regras do seu empregador e da plataforma de reuniões e obtenha consentimento antes de clonar a voz de alguém. Esta é uma informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo o desenvolvedor, o conteúdo das reuniões vai direto do seu dispositivo para o provedor de IA escolhido, nunca pela Kizuna AI, e com apenas modelos no dispositivo ele fica no seu computador; a PromptQuorum não inspecionou o tráfego de rede e não pode confirmar isso.**',
          'A página de privacidade, datada de 14 de novembro de 2026, lista as exceções. Com uma conta da Kizuna AI, uma amostra de voz gravada para clonagem passa pelo servidor do desenvolvedor a caminho do Soniox e é descartada depois, e o texto da transcrição de uma sessão cujas notas de reunião a Kizuna AI escreve passa pelo servidor até a OpenAI e não é guardado. Sem conta, você usa sua própria chave ou modelos no dispositivo.',
          'Os mecanismos “Online” da inferência local, Edge TTS para voz e Bing Translator, não rodam no seu computador. Segundo o desenvolvedor, eles são usados automaticamente quando nenhum modelo no dispositivo está pronto, ou quando você os escolhe, e o texto a ser falado ou traduzido é então enviado à Microsoft. Outras conexões sem conteúdo de reunião são downloads de modelos, verificações de atualização, medições de latência para o serviço Soniox ou Qwen em uso, e estatísticas de uso e relatórios de erros.',
          'Segundo o desenvolvedor, estatísticas de uso e relatórios de erros vão para o PostHog nos Estados Unidos e, depois que você entra na conta, são vinculados ao seu ID de conta, e-mail e nome; a política diz que atualmente não há botão no app para desativá-los. Uma conta da Kizuna AI guarda um endereço de e-mail, registros de login, saldo e uso, e dados de pagamento recebidos da Stripe; o desenvolvedor afirma que não vende nem aluga dados e não treina modelos com eles.',
          'O código-fonte dos apps é público no GitHub, então o fluxo de dados pode ser auditado; o servidor de contas do desenvolvedor não é de código aberto.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Sokuji serve para quem conversa além de uma barreira de idioma e quer tradução dentro dos aplicativos de reunião que já usa.**',
        ],
        items: [
          'Pessoas em reuniões bilíngues que querem que o outro lado ouça uma voz traduzida por um microfone virtual, em qualquer aplicativo e não só no navegador.',
          'Ouvintes de aulas, palestras ou vídeos que querem legendas traduzidas ao vivo do que ouvem.',
          'Palestrantes que querem que o público leia legendas traduzidas da própria fala.',
          'Usuários atentos à privacidade que querem experimentar, segundo o desenvolvedor, reconhecimento, tradução e voz no próprio dispositivo sem chave.',
          'Leitores que preferem um aplicativo cujo código é público sob AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Sokuji serve mal em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: situações em que uma tradução errada importa. A própria página do desenvolvedor diz que um modelo grande hospedado ainda está à frente dos modelos no dispositivo em precisão e latência, e que para uma chamada de alto risco você provavelmente vai querer um deles.',
          'Não serve: quem precisa desativar as estatísticas de uso. A política de privacidade de 14 de novembro de 2026 diz que atualmente não há nenhuma configuração no app para desativá-las.',
          'Não verificado: a precisão do reconhecimento, a qualidade da tradução, a latência e a velocidade dos modelos no dispositivo em notebooks comuns. A PromptQuorum não executou o aplicativo.',
          'Não verificado: a afirmação de que, com modelos no dispositivo, nada sai do aparelho, ao lado dos mecanismos online da Microsoft, dos downloads de modelos, das verificações de atualização e das estatísticas de uso; a PromptQuorum não inspecionou o tráfego de rede.',
          'Não verificado: se o instalador do Windows é assinado e o app do macOS é notarizado; essas são afirmações do desenvolvedor.',
          'Pouco claro: o repositório ainda contém um arquivo de política de privacidade da extensão datado de 3 de junho de 2025, que descreve as análises como opcionais, com um botão no app, enquanto a política atual diz que não há botão; a PromptQuorum trata a política atual como a que vale.',
          'Não verificado: a política de privacidade menciona um aplicativo móvel, mas nem a página de download nem o README listam um download móvel; por isso a PromptQuorum trata o Sokuji como ferramenta só de desktop e navegador.',
          'Não verificado: dados da empresa além do nome Kizuna AI Lab (segundo a página Commerce Disclosure, o endereço é informado mediante solicitação; nenhum número de registro encontrado), números de usuários e análises independentes; a PromptQuorum não procurou análises independentes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokuji versus alternativas',
        itemHeadings: true,
        content: [
          '**O Sokuji se sobrepõe a ferramentas que transcrevem ou legendam fala, mas foi feito para tradução ao vivo em reuniões; a PromptQuorum não o comparou com elas na prática.** As ferramentas abaixo estão no diretório e são descritas a partir das próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'Sokuji', 'Segundo as fontes': 'AGPL-3.0; desktop + navegador; tradução ao vivo bidirecional' },
          { 'Ferramenta': '[Buzz](/pt/power-local-llm/buzz-captions-review)', 'Segundo as fontes': 'MIT; Mac/Windows/Linux; transcrição Whisper local' },
          { 'Ferramenta': '[Sablate](/pt/power-local-llm/sablate-review)', 'Segundo as fontes': 'Código fechado; Windows/Mac; legendas e tradução' },
          { 'Ferramenta': '[Minutes](/pt/power-local-llm/minutes-review)', 'Segundo as fontes': 'MIT; Mac/Windows; notas de reunião da transcrição' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Sokuji funciona offline?',
            a: 'Segundo o desenvolvedor, sim, depois que os modelos no dispositivo são baixados: reconhecimento, tradução e voz passam a rodar no seu computador sem rede. Segundo a página de privacidade, os mecanismos “Online”, Edge TTS e Bing Translator, precisam de rede e enviam texto à Microsoft, e o app ainda faz conexões de atualização e de estatísticas. A PromptQuorum não testou isso.',
          },
          {
            q: 'O Sokuji é gratuito?',
            a: 'Segundo o desenvolvedor, o app é gratuito e de código aberto sob AGPL-3.0, e os modelos no dispositivo não custam nada. Os provedores na nuvem cobram por conta própria se você usa sua própria chave, ou debitam de um saldo pré-pago em dólares americanos se você usa uma conta da Kizuna AI.',
          },
          {
            q: 'Com quais aplicativos de reunião o Sokuji funciona?',
            a: 'O aplicativo de desktop se registra como um microfone, então qualquer aplicativo em que você possa escolher um microfone pode usá-lo. Segundo a página de download, a extensão foi feita para Zoom, Google Meet, Microsoft Teams, Slack, Discord, Jitsi Meet, Whereby, Gather Town e Yandex Telemost.',
          },
          {
            q: 'O Sokuji envia minhas reuniões para a Kizuna AI?',
            a: 'Segundo o desenvolvedor, não: o conteúdo das reuniões vai direto para o provedor escolhido. As exceções que ele lista são amostras de clonagem de voz e transcrições para notas de reunião com uma conta da Kizuna AI, que passam pelo servidor dele e não são guardadas. A PromptQuorum não inspecionou o tráfego de rede.',
          },
          {
            q: 'Posso desativar as estatísticas de uso?',
            a: 'A política de privacidade de 14 de novembro de 2026 diz que atualmente não há botão no app para desativá-las. Um arquivo de política mais antigo no repositório descreve uma opção de desativar, então confira a configuração no app antes de confiar em qualquer uma das duas indicações.',
          },
          {
            q: 'Com que frequência o Sokuji é atualizado?',
            a: 'O GitHub lista a versão 0.50.1 de 10 de novembro de 2026, a 0.50.2 de 11 de novembro de 2026, a 0.50.3 de 14 de novembro de 2026 e a 0.50.4 de 16 de novembro de 2026; o último commit no ramo principal é de 18 de novembro de 2026.',
          },
          {
            q: 'Em quais sistemas o Sokuji funciona?',
            a: 'Segundo a página “Commerce Disclosure” do desenvolvedor, o aplicativo de desktop exige Windows 10 ou posterior, macOS 13 ou posterior, ou Linux (Ubuntu 20.04 ou posterior recomendado). A extensão para Chrome e Edge exige Chromium 116 ou posterior. O desenvolvedor não publica mínimos de memória nem de GPU, e a PromptQuorum não mediu o uso de memória nem a velocidade.',
          },
          {
            q: 'Preciso de uma conta ou de uma chave de API para usar o Sokuji?',
            a: 'Segundo o desenvolvedor, não é preciso conta para usar o Sokuji com sua própria chave de API ou com modelos no dispositivo, e nenhuma das duas é exigida só para instalá-lo. Para traduzir, você precisa de uma de três fontes: modelos no dispositivo, sua própria chave de API de um provedor na nuvem ou uma conta da Kizuna AI pré-paga.',
          },
          {
            q: 'Quais provedores de tradução o Sokuji suporta?',
            a: 'O README e a documentação do desenvolvedor listam OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, endpoints compatíveis com OpenAI (somente no desktop), uma conta da Kizuna AI e a inferência local no dispositivo. A clonagem de voz aparece para Palabra.ai, Doubao AST 2.0 e Soniox. Segundo o desenvolvedor, o conteúdo das reuniões vai então para o provedor que você escolher.',
          },
          {
            q: 'O que o modo bidirecional faz?',
            a: 'Segundo o desenvolvedor, você define dois idiomas e o Sokuji detecta qual deles está sendo falado e traduz nos dois sentidos, como voz traduzida ou como legendas ao vivo. O README atribui esse modo ao Soniox e diz que ele cobre mais de 60 idiomas. A PromptQuorum não testou a detecção de idioma nem a qualidade da tradução.',
          },
          {
            q: 'O Sokuji precisa de algum software de áudio adicional?',
            a: 'Segundo a página de download, o microfone virtual no Windows precisa do VB-CABLE, instalado separadamente; no macOS o driver de áudio vem dentro do instalador; no Linux o app cria o microfone virtual por meio do PulseAudio ou do PipeWire e precisa do pulseaudio-utils. A extensão só funciona em sites de reunião compatíveis, então para outros aplicativos você precisa do app de desktop.',
          },
          {
            q: 'Como são os modelos no dispositivo em comparação com os modelos na nuvem?',
            a: 'A PromptQuorum não mediu isso. A própria página Local AI do desenvolvedor diz que um grande modelo hospedado ainda está à frente dos modelos no dispositivo em precisão e latência, e que para uma chamada importante você provavelmente vai querer um. Os modelos no dispositivo são baixados uma vez e, segundo o README, não exigem uma GPU cara.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Sokuji merece uma olhada se você faz reuniões bilíngues e quer tradução ao vivo nos dois sentidos por um aplicativo de desktop ou uma extensão de navegador, com escolha entre provedores na nuvem e, segundo o desenvolvedor, modelos no dispositivo.**',
          'No papel ele cobre bastante coisa: um microfone virtual para qualquer aplicativo, legendas, detecção do idioma falado nos dois sentidos, vários provedores na nuvem, modelos locais e um código aberto. O desenvolvimento está ativo, com quatro versões entre 10 e 16 de novembro de 2026.',
          'As concessões são reais: o próprio desenvolvedor diz que a qualidade no dispositivo fica atrás dos grandes modelos hospedados, a política atual diz que as estatísticas de uso não podem ser desativadas no app, e a PromptQuorum não testou nada. Experimente em uma chamada de baixo risco e confira o reconhecimento e a tradução nos dois idiomas antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Sokuji](https://sokuji.kizuna.ai) — recursos e cenários, consultado em 18 de novembro de 2026.',
          '[Página de download](https://sokuji.kizuna.ai/download) — plataformas, requisitos de instalação e afirmações sobre assinatura, consultada em 18 de novembro de 2026.',
          '[Página de IA local](https://sokuji.kizuna.ai/local-ai) — modelos no dispositivo e a comparação do desenvolvedor com os modelos na nuvem, consultada em 18 de novembro de 2026.',
          '[Resumo de privacidade](https://sokuji.kizuna.ai/privacy) — para onde vai o conteúdo das reuniões, consultado em 18 de novembro de 2026.',
          '[Política de privacidade](https://sokuji.kizuna.ai/docs/privacy) — dados coletados e prazos de retenção, datada de 14 de novembro de 2026, consultada em 18 de novembro de 2026.',
          '[Termos de serviço](https://sokuji.kizuna.ai/docs/terms) — provedor, saldo, lei aplicável e foro, consultados em 18 de novembro de 2026.',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — operadora, condições do saldo pré-pago e requisitos do sistema, apresentado pelo desenvolvedor como um aviso previsto na lei japonesa, consultada em 18 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/kizuna-ai-lab/sokuji) — licença, data de criação e último commit, consultado em 18 de novembro de 2026.',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — recursos, provedores, instalação e notas de privacidade, consultado em 18 de novembro de 2026.',
          '[Versões do GitHub](https://github.com/kizuna-ai-lab/sokuji/releases) — datas de lançamento e pacotes da v0.50.4, consultadas em 18 de novembro de 2026.',
          '[Arquivo de política de privacidade anterior](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — política de privacidade da extensão datada de 3 de junho de 2025, consultada em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — síntese de voz, reconhecimento de voz e agentes de voz lado a lado.',
          '[Análise do Buzz](/pt/power-local-llm/buzz-captions-review) — transcrição Whisper local no desktop.',
          '[Análise do Sablate](/pt/power-local-llm/sablate-review) — legendas e tradução de vídeo no Windows e no Mac.',
          '[Análise do Minutes](/pt/power-local-llm/minutes-review) — notas de reunião a partir da transcrição, gratuito e de código aberto.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-ja.webp',
    title: 'Sokujiレビュー：会議向け双方向音声翻訳',
    seoTitle: 'Sokujiレビュー：会議向けリアルタイム音声翻訳',
    intro:
      'Sokuji 0.50.4は、バイリンガル会議で音声を双方向にリアルタイム翻訳する、オープンソースのデスクトップアプリとChrome・Edge拡張機能です。クラウドAIプロバイダーのほか、開発元の説明では、音声認識・翻訳・音声合成のモデルを自分の端末で動かすこともできます。ライセンスはAGPL-3.0です。このレビューは、公式サイト、GitHubリポジトリとそのリリース、プライバシーと利用規約のページをもとに、2026年11月18日に確認した内容です。PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'Sokujiはバイリンガル会議向けのオープンソースのリアルタイム音声翻訳アプリで、クラウドまたはオンデバイスモデルで動きます。確認できたことと未確認の点をまとめました。',
    twitterDescription:
      'Sokuji：バイリンガル会議向けのオープンソースのリアルタイム音声翻訳アプリ。デスクトップアプリとChrome・Edge拡張機能があり、クラウドAIまたはオンデバイスモデルで動きます。確認できたことをまとめました。',
    audience:
      'バイリンガルの会議や通話に参加する人、別の言語でリアルタイム字幕を使いたいチーム、音声認識・翻訳・音声合成を端末内で試したいプライバシー重視の人',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sokujiレビュー',
    targetKeywords: [
      'Sokujiレビュー',
      'リアルタイム音声翻訳アプリ',
      '会議 同時通訳 アプリ',
      'オフライン音声翻訳',
      '仮想マイク 翻訳',
      'オープンソース 同時翻訳',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Sokujiは、バイリンガル会議で音声を双方向にリアルタイム翻訳するオープンソース（AGPL-3.0）のアプリで、クラウドAIプロバイダー、または開発元の説明ではオンデバイスモデルを使います。** Windows・macOS・Linux向けデスクトップアプリとChrome・Edge拡張機能があり、Zoom、Google Meet、Microsoft Teamsなどに対して仮想マイクとして働きます。開発元によれば、アプリは無料で、クラウド利用の費用はプロバイダーへの支払い、またはKizuna AIのプリペイド残高から差し引かれます。PromptQuorumはこのアプリを試していません。',
    quickAnswerTop: {
      ja: {
        question: 'Sokujiとは何で、どんな人向けですか？',
        answer:
          'Sokujiは会議向けのリアルタイム音声翻訳アプリで、Kizuna AI LabがGitHubで公開開発しています。言語の壁を越えて話す人が、普段使っているアプリの中で翻訳音声や字幕を使いたい場合に向いています。',
        bullets: [
          'ライセンスはAGPL-3.0です。アプリは無料で、開発元によればオンデバイスモデルにはアカウントもAPIキーも不要です。',
          '開発元によれば、双方向モードは選んだ2つの言語のどちらが話されているかを検出し、翻訳音声またはリアルタイム字幕として双方向に翻訳します。',
          'OpenAI、Google Gemini、Soniox、Palabra.ai、Doubao AST 2.0などのクラウドプロバイダー、またはオンデバイスモデルで動きます。クラウド利用の費用はプロバイダー、またはKizuna AIのプリペイド残高から差し引かれます。',
          'デスクトップアプリはWindows・macOS・Linuxで仮想マイクとして働き、Chrome・Edge拡張機能は対応する会議サイトで動きます。',
          'バージョン0.50.4は2026年11月16日にリリースされ、メインブランチの最新コミットは2026年11月18日です。',
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
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '代替ツール', anchor: 'alternatives' },
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
            text: 'Sokujiは、バイリンガル会議で音声を双方向にリアルタイム翻訳するオープンソースのアプリで、クラウドAIプロバイダー、または開発元の説明では自分の端末で動くモデルを使います。',
          },
          {
            type: 'plain-terms',
            text: '自分と会議アプリの間に入る通訳のようなものです。聞き取って翻訳し、結果を仮想マイクで音声として流すか、字幕として表示します。音声認識・翻訳・音声合成をクラウドプロバイダーにするか、パソコンに保存したモデルにするかは自分で選べます。',
          },
        ],
        items: [
          'GitHubのリリースページからデスクトップアプリ（Windowsはセットアップ用EXE、macOSはPKG、LinuxはDEBまたはAppImage）を入れるか、ストアからChromeまたはEdgeの拡張機能を追加します。',
          'プロバイダーを選びます。自分のAPIキー、プリペイド式のKizuna AIアカウント、または開発元によればアカウントもキーも不要なオンデバイスモデルです。',
          '開発元によれば、会議の内容は端末から選んだプロバイダーへ直接送られ、オンデバイスモデルだけを使う場合は自分のパソコンの外に出ません。プライバシーページには、Microsoftのオンラインエンジンなどの例外が挙げられています。',
          '利用統計とエラーレポートはPostHogに送られ、現在のプライバシーポリシーには、アプリ内でオフにする設定はないと書かれています。',
          'PromptQuorumはアプリを試していないため、認識精度、翻訳品質、遅延、オンデバイスモデルの速度は未確認です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'プライバシーページには、オンデバイスモデルを使う場合、モデルのダウンロード後は会議の内容がパソコンの外に出ないと書かれています。PromptQuorumはネットワーク通信を調べていないため、開発元の記述以上のことは確認できません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Sokujiは、Kizuna AI Labによるリアルタイム音声翻訳アプリで、Windows・macOS・Linux向けデスクトップアプリとChrome・Edge向けブラウザ拡張機能として、AGPL-3.0ライセンスで公開されています。**',
          '開発は[github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji)で公開されています。リポジトリは2025年4月に作成され、バージョン0.50.4は2026年11月16日に登場し、メインブランチの最新コミットは2026年11月18日です。開発は活発で、放置プロジェクトの警告は当てはまりません。利用規約はKizuna AI Labを提供者とし、日本法を準拠法、東京の裁判所を専属的な管轄としています。開発元の[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce)ページ（開発元は日本法に基づく表記としています）には、事業者がKizuna AI Labと記載され、住所と電話番号は請求があれば開示するとされています。PromptQuorumは、公開されている会社の住所も登記番号も見つけられませんでした。開発元によれば、アカウント用サーバーはオープンソースではありません。',
          '開発元によれば、Sokujiは自分と会議アプリの間でマイクのように働きます。自分の音声を認識して翻訳し、もう一方の言語で音声として流すか字幕として表示します。相手の発言は字幕または読み上げで返ってきます。双方向モードでは、選んだ2つの言語のどちらが話されているかを検出し、双方向に翻訳します。READMEと開発元のドキュメントには、OpenAI、Google Gemini、Palabra.ai、Doubao AST 2.0、Soniox、Qwen LiveTranslate、OpenAI互換エンドポイント、Kizuna AIアカウント、オンデバイス推論（Local Inference）が挙げられています。',
          'PromptQuorumはアプリを実行しておらず、認識精度、翻訳品質、遅延、オンデバイスモデルの速度は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Sokujiは、GitHubのリリースページにあるパッケージからデスクトップアプリとして入れるか、ストアからChromeまたはEdgeに拡張機能を追加して使えます。開発元のダウンロードページにも両方が載っています。**',
          'v0.50.4のリリースには、Windows用のセットアップEXE、Apple siliconとIntel向けのmacOS用PKGインストーラー、x64とarm64向けのLinux用DEBパッケージとAppImage、ZIP形式の拡張機能が含まれています。ダウンロードページによれば、WindowsインストーラーはSignPath Foundation経由でコード署名され、macOSアプリは署名・公証されています。',
        ],
        columns: ['プラットフォーム', 'パッケージ'],
        rows: [
          { 'プラットフォーム': 'Windows', 'パッケージ': 'セットアップEXE（VB-CABLEは別途）' },
          { 'プラットフォーム': 'macOS（Apple silicon）', 'パッケージ': 'PKG' },
          { 'プラットフォーム': 'macOS（Intel）', 'パッケージ': 'PKG（x64）' },
          { 'プラットフォーム': 'Linux（x64、arm64）', 'パッケージ': 'DEBまたはAppImage' },
          { 'プラットフォーム': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', 'パッケージ': 'Chromeウェブストアの拡張機能' },
          { 'プラットフォーム': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', 'パッケージ': 'Edgeアドオンの拡張機能' },
        ],
        note: '[GitHubのリリースページ](https://github.com/kizuna-ai-lab/sokuji/releases/latest)または開発元の[ダウンロードページ](https://sokuji.kizuna.ai/download)から入手します。PromptQuorumはインストーラーを実行しておらず、署名や公証の有無も確認していません。これらは開発元の記述です。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**SokujiのデスクトップアプリにはWindows、macOS、Linuxのいずれかが、拡張機能にはChromium 116以降が必要です。開発元はメモリやGPUの最低要件を公表していません。**',
          '開発元の[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce)ページには、デスクトップアプリの対象としてWindows 10以降、macOS 13以降、Linux（Ubuntu 20.04以降を推奨）が挙げられ、安定したブロードバンド接続とマイクも要件として記載されています。ローカルAIのページには、オンデバイスモデルはダウンロード後ネットワークなしで動くと書かれています。ダウンロードページによれば、Windowsの仮想マイクにはVB-CABLEが別途必要で、macOSではオーディオドライバーがインストーラーに含まれ、LinuxではアプリがPulseAudioまたはPipeWireで仮想マイクを作り、pulseaudio-utilsが必要です。拡張機能は対応する会議サイトでのみ動き、それ以外にはデスクトップアプリが必要です。オンデバイスモデルは一度ダウンロードし、開発元によれば、アプリがGPUを検出して合ったエンジンパッケージをダウンロードします。PromptQuorumはメモリ使用量も速度も測定していません。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'デスクトップ', '記載されている内容': 'Windows 10以降、macOS 13以降、Ubuntu 20.04以降（推奨）' },
          { '項目': '拡張機能', '記載されている内容': 'ChromeとEdge、Chromium 116以降' },
          { '項目': 'Windowsの音声', '記載されている内容': 'VB-CABLE（別途インストール）' },
          { '項目': 'Linuxの音声', '記載されている内容': 'PulseAudioまたはPipeWire、pulseaudio-utils' },
          { '項目': 'オンデバイスモデル', '記載されている内容': '一度ダウンロード。高価なGPUは不要（README）' },
          { '項目': 'メモリとGPU', '記載されている内容': '公表なし' },
        ],
        note: '翻訳にはプロバイダーが必要です。オンデバイスモデル、自分のAPIキー、Kizuna AIアカウントのいずれかです。開発元によれば、インストールにはどれも不要で、自分のキーやオンデバイスモデルで使うならアカウントも不要です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Sokujiは会議でのリアルタイム音声翻訳を軸に作られており、仮想マイク、字幕、プロバイダーの選択がそれを取り囲みます。** 以下はすべて、公式サイトとREADMEにある開発元の記述です。',
        ],
        items: [
          '双方向翻訳：2つの言語を設定すると、Sokujiがどちらが話されているかを検出し、双方向に翻訳します。READMEはこのモードをSonioxによるものとし、60を超える言語に対応すると書いています。',
          '自分の声を翻訳：相手は、Zoom、Google Meet、Microsoft Teams、Discordなど、マイクを選べるアプリで、仮想マイクを通じて翻訳音声を聞きます。',
          '相手の発言を翻訳：拡張機能は会議タブの音声を、デスクトップアプリはシステム音声を翻訳し、リアルタイム字幕または読み上げで届けます。',
          '字幕モードと字幕の共有：翻訳テキストを画面に表示し、必要に応じて共有して相手にも読んでもらえます。',
          'オンデバイスモデル：Whisper系などの音声認識、Opus-MTの言語ペアやQwen、TranslateGemmaなどの多言語モデルによる翻訳、PiperやCoquiなどのエンジンによる音声合成を、WASMとWebGPUで動かします。',
          'クラウドプロバイダー：OpenAI、Google Gemini、Palabra.ai、Doubao AST 2.0、Soniox、OpenAI互換エンドポイント（デスクトップのみ）、Kizuna AIアカウント。READMEは、Palabra.ai、Doubao AST 2.0、Sonioxの声のクローンを挙げています。',
          '音声ツール：AIノイズ抑制、エコーキャンセル、自分の声を確認するパススルー。',
          'インターフェース：30のインターフェース言語、設定用のシンプルモード、波形表示付きの詳細モード。',
          '会議メモ：Kizuna AIアカウントでは、セッションの文字起こしからメモを作る機能があり、プライバシーページによれば、そのテキストは開発元のサーバー経由でOpenAIに送られ、保存されません。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '会議を翻訳するということは、他の参加者の音声を選んだプロバイダーに送ることを意味し、音声クローンは個人の声を処理します。使う前に参加者へ知らせ、勤務先や会議プラットフォームのルールを確認し、誰かの声をクローンする前には同意を得てください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**開発元によれば、会議の内容は端末から選んだAIプロバイダーへ直接送られ、Kizuna AIを経由することはなく、オンデバイスモデルだけを使う場合は自分のパソコンの外に出ません。PromptQuorumはネットワーク通信を調べておらず、これを確認できません。**',
          '2026年11月14日付のプライバシーページに、例外が挙げられています。Kizuna AIアカウントでは、声のクローン用に録音した音声サンプルが開発元のサーバーを経由してSonioxに渡り、その後破棄されます。また、Kizuna AIが会議メモを書くセッションの文字起こしテキストは、サーバー経由でOpenAIに送られ、保存されません。アカウントなしでは、自分のキーかオンデバイスモデルを使います。',
          'ローカル推論の「Online」エンジン、つまり音声のEdge TTSとBing Translatorは、自分のパソコン上では動きません。開発元によれば、使えるオンデバイスモデルがないとき、または自分で選んだときに自動的に使われ、読み上げや翻訳の対象テキストがMicrosoftに送られます。会議の内容を含まない通信としては、モデルのダウンロード、更新の確認、利用中のSonioxまたはQwenサービスへの遅延測定、利用統計とエラーレポートがあります。',
          '開発元によれば、利用統計とエラーレポートは米国のPostHogに送られ、サインインするとアカウントID、メールアドレス、名前に紐づきます。ポリシーには、現在アプリ内でこれをオフにする設定はないと書かれています。Kizuna AIアカウントには、メールアドレス、サインイン記録、残高と利用状況、Stripeから受け取る支払い情報が保存されます。開発元は、データを販売も貸与もせず、それでモデルを学習することもしないと述べています。',
          'アプリのソースコードはGitHubで公開されているため、データの流れを確認できます。開発元のアカウント用サーバーはオープンソースではありません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Sokujiは、言語の壁を越えて話し、普段使っている会議アプリの中で翻訳を使いたい人に向いています。**',
        ],
        items: [
          'バイリンガル会議で、ブラウザだけでなくどのアプリでも、相手に仮想マイクで翻訳音声を聞かせたい人。',
          '講義、講演、動画で、聞いている内容のリアルタイム翻訳字幕がほしい人。',
          '自分の講演について、聴衆に翻訳字幕を読んでもらいたい人。',
          '開発元によれば、キーなしで音声認識・翻訳・音声合成を自分の端末で試したいプライバシー重視の人。',
          'AGPL-3.0でコードが公開されているアプリを好む人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Sokujiが合わない場面があり、未確認の点もいくつかあります。**',
        ],
        items: [
          '向かない場面：誤訳が許されない場面。開発元自身のページに、大規模なホスト型モデルは精度と遅延でオンデバイスモデルをまだ上回り、重要な通話ではおそらくそちらを使いたくなると書かれています。',
          '向かない場面：利用統計をオフにしたい場合。2026年11月14日付のプライバシーポリシーには、現在アプリ内でオフにする設定はないと書かれています。',
          '未確認：認識精度、翻訳品質、遅延、一般的なノートパソコンでのオンデバイスモデルの速度。PromptQuorumはアプリを実行していません。',
          '未確認：オンデバイスモデルなら何も端末の外に出ないという記述。Microsoftのオンラインエンジン、モデルのダウンロード、更新の確認、利用統計と並んで書かれています。PromptQuorumはネットワーク通信を調べていません。',
          '未確認：Windowsインストーラーがコード署名され、macOSアプリが公証されているかどうか。これらは開発元の記述です。',
          '不明確：リポジトリには、分析をオプトインとし、アプリ内に切り替えがあると説明する2025年6月3日付の拡張機能向けプライバシーポリシーのファイルが残っていますが、現在のポリシーには切り替えがないと書かれています。PromptQuorumは現在のポリシーが適用されるものとして扱います。',
          '未確認：プライバシーポリシーにはモバイルアプリへの言及がありますが、ダウンロードページにもREADMEにもモバイル版のダウンロードはありません。そのためPromptQuorumは、Sokujiをデスクトップとブラウザ向けのツールとして扱います。',
          '未確認：Kizuna AI Lab以外の会社情報（Commerce Disclosureページによれば住所は請求があれば開示されます。登記番号は見つかりません）、ユーザー数、第三者によるレビュー。PromptQuorumは第三者のレビューを探していません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokujiと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Sokujiは音声を文字起こしまたは字幕化するツールと重なる部分がありますが、会議でのリアルタイム翻訳のために作られています。PromptQuorumは実機でこれらと比較していません。** 以下のツールはディレクトリに掲載されており、それぞれのレビューをもとに説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Sokuji', '情報源での記載': 'AGPL-3.0、デスクトップ＋ブラウザ、双方向のリアルタイム翻訳' },
          { 'ツール': '[Buzz](/ja/power-local-llm/buzz-captions-review)', '情報源での記載': 'MIT、Mac/Windows/Linux、ローカルのWhisper文字起こし' },
          { 'ツール': '[Sablate](/ja/power-local-llm/sablate-review)', '情報源での記載': 'クローズドソース、Windows/Mac、字幕と翻訳' },
          { 'ツール': '[Minutes](/ja/power-local-llm/minutes-review)', '情報源での記載': 'MIT、Mac/Windows、文字起こしからの会議メモ' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Sokujiはオフラインで使えますか？',
            a: '開発元によれば、オンデバイスモデルをダウンロードした後は使えます。音声認識、翻訳、音声合成がネットワークなしでパソコン上で動きます。プライバシーページによれば、「Online」エンジンのEdge TTSとBing Translatorはネットワークが必要で、テキストをMicrosoftに送ります。また、アプリは更新確認や統計のための通信を行います。PromptQuorumはこれを試していません。',
          },
          {
            q: 'Sokujiは無料ですか？',
            a: '開発元によれば、アプリは無料のオープンソース（AGPL-3.0）で、オンデバイスモデルに費用はかかりません。クラウドプロバイダーは、自分のキーを使う場合はプロバイダーが請求し、Kizuna AIアカウントを使う場合は米ドルのプリペイド残高から差し引かれます。',
          },
          {
            q: 'どの会議アプリで使えますか？',
            a: 'デスクトップアプリはマイクとして登録されるため、マイクを選べるアプリならどれでも使えます。ダウンロードページによれば、拡張機能はZoom、Google Meet、Microsoft Teams、Slack、Discord、Jitsi Meet、Whereby、Gather Town、Yandex Telemost向けに作られています。',
          },
          {
            q: 'Sokujiは会議の内容をKizuna AIに送りますか？',
            a: '開発元によれば、送りません。会議の内容は選んだプロバイダーへ直接送られます。挙げられている例外は、Kizuna AIアカウントでの声のクローン用サンプルと会議メモ用の文字起こしで、これらは開発元のサーバーを経由しますが保存されません。PromptQuorumはネットワーク通信を調べていません。',
          },
          {
            q: '利用統計をオフにできますか？',
            a: '2026年11月14日付のプライバシーポリシーには、現在アプリ内でオフにする設定はないと書かれています。リポジトリにある古いプライバシーポリシーのファイルにはオプトアウトの記述があるため、どちらかを頼りにする前に、アプリ内の設定を確認してください。',
          },
          {
            q: 'Sokujiはどのくらいの頻度で更新されますか？',
            a: 'GitHubには、2026年11月10日のバージョン0.50.1、11月11日の0.50.2、11月14日の0.50.3、11月16日の0.50.4が載っており、メインブランチの最新コミットは2026年11月18日です。',
          },
          {
            q: 'Sokujiはどのシステムで動きますか？',
            a: '開発元の「Commerce Disclosure」ページによれば、デスクトップアプリにはWindows 10以降、macOS 13以降、またはLinux（Ubuntu 20.04以降を推奨）が必要です。ChromeとEdgeの拡張機能にはChromium 116以降が必要です。開発元はメモリやGPUの最小要件を公表しておらず、PromptQuorumはメモリ使用量も速度も測定していません。',
          },
          {
            q: 'SokujiにアカウントやAPIキーは必要ですか？',
            a: '開発元によれば、自分のAPIキーまたはオンデバイスモデルでSokujiを使うのにアカウントは不要で、インストールするだけならどちらも必要ありません。翻訳するには、オンデバイスモデル、クラウドプロバイダーの自分のAPIキー、プリペイドのKizuna AIアカウントのいずれかが必要です。',
          },
          {
            q: 'Sokujiはどの翻訳プロバイダーに対応していますか？',
            a: 'READMEと開発元のドキュメントには、OpenAI、Google Gemini、Palabra.ai、Doubao AST 2.0、Soniox、Qwen LiveTranslate、OpenAI互換エンドポイント（デスクトップのみ）、Kizuna AIアカウント、オンデバイスのローカル推論が挙げられています。声のクローンはPalabra.ai、Doubao AST 2.0、Sonioxで挙げられています。開発元によれば、会議の内容は選んだプロバイダーへ送られます。',
          },
          {
            q: '双方向モードとは何ですか？',
            a: '開発元によれば、2つの言語を設定すると、Sokujiはどちらが話されているかを検出し、翻訳音声またはライブ字幕として双方向に翻訳します。READMEはこのモードをSonioxによるものとしており、60を超える言語に対応するとしています。PromptQuorumは言語検出も翻訳品質も試していません。',
          },
          {
            q: 'Sokujiに追加のオーディオソフトは必要ですか？',
            a: 'ダウンロードページによれば、Windowsの仮想マイクには別途インストールするVB-CABLEが必要です。macOSではオーディオドライバーがインストーラーに含まれています。Linuxではアプリが PulseAudio または PipeWire を通じて仮想マイクを作成し、pulseaudio-utils が必要です。拡張機能は対応する会議サイトでのみ動くため、それ以外のアプリにはデスクトップアプリが必要です。',
          },
          {
            q: 'オンデバイスモデルはクラウドモデルと比べてどうですか？',
            a: 'PromptQuorumは測定していません。開発元のLocal AIページ自体が、大きなホスト型モデルは精度と遅延の面でオンデバイスモデルをまだ上回っており、重要な通話ではおそらくそちらを使いたくなると述べています。オンデバイスモデルは一度ダウンロードするだけで、READMEによれば高価なGPUは不要です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Sokujiは、バイリンガル会議があり、デスクトップアプリかブラウザ拡張機能で双方向のリアルタイム翻訳を使いたい人なら試す価値があります。クラウドプロバイダーと、開発元の説明ではオンデバイスモデルのどちらかを選べます。**',
          '書面上は幅広くカバーしています。どのアプリでも使える仮想マイク、字幕、話されている言語の双方向検出、複数のクラウドプロバイダー、ローカルモデル、公開されたコードです。開発は活発で、2026年11月10日から16日の間に4回リリースされています。',
          'トレードオフは現実的です。開発元自身が、オンデバイスの品質は大規模なホスト型モデルに及ばないと述べています。現在のポリシーでは、利用統計をアプリ内でオフにできません。そしてPromptQuorumは何も試していません。重要度の低い通話で試し、頼る前に両方の言語で認識と翻訳を確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Sokuji公式サイト](https://sokuji.kizuna.ai) — 機能と利用シーン、2026年11月18日に確認。',
          '[ダウンロードページ](https://sokuji.kizuna.ai/download) — プラットフォーム、インストール要件、署名に関する記述、2026年11月18日に確認。',
          '[ローカルAIのページ](https://sokuji.kizuna.ai/local-ai) — オンデバイスモデルと、クラウドモデルとの比較に関する開発元の説明、2026年11月18日に確認。',
          '[プライバシーの概要](https://sokuji.kizuna.ai/privacy) — 会議の内容の行き先、2026年11月18日に確認。',
          '[プライバシーポリシー](https://sokuji.kizuna.ai/docs/privacy) — 収集するデータと保存期間、2026年11月14日付、2026年11月18日に確認。',
          '[利用規約](https://sokuji.kizuna.ai/docs/terms) — 提供者、残高、準拠法と管轄、2026年11月18日に確認。',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — 事業者、プリペイド残高の条件、動作環境（開発元は日本法に基づく表記としています）、2026年11月18日に確認。',
          '[GitHubリポジトリ](https://github.com/kizuna-ai-lab/sokuji) — ライセンス、作成日、最新コミット、2026年11月18日に確認。',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — 機能、プロバイダー、インストール、プライバシーに関する記述、2026年11月18日に確認。',
          '[GitHubのリリース](https://github.com/kizuna-ai-lab/sokuji/releases) — v0.50.4のリリース日とパッケージ、2026年11月18日に確認。',
          '[以前のプライバシーポリシーのファイル](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — 2025年6月3日付の拡張機能向けプライバシーポリシー、2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声ツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Buzzレビュー](/ja/power-local-llm/buzz-captions-review) — デスクトップでのローカルWhisper文字起こし。',
          '[Sablateレビュー](/ja/power-local-llm/sablate-review) — WindowsとMacでの動画の字幕と翻訳。',
          '[Minutesレビュー](/ja/power-local-llm/minutes-review) — 文字起こしからの会議メモ。無料でオープンソース。',
          '[ローカルLLMソフトウェア一覧](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-zh.webp',
    title: 'Sokuji 解读：面向会议的双向实时语音翻译（基于公开资料）',
    seoTitle: 'Sokuji 解读：面向会议的双向实时语音翻译应用',
    intro:
      'Sokuji 0.50.4 是一款开源的桌面应用，同时提供 Chrome 和 Edge 扩展，可在双语会议中双向实时翻译语音。它既能使用云端 AI 服务商，据开发者称也能运行在你自己设备上的语音识别、翻译和语音合成模型。许可证为 AGPL-3.0。本解读基于官方网站、GitHub 仓库及其发布版本，以及隐私和条款页面，核对日期为 2026 年 11 月 18 日。PromptQuorum 没有实际测试过这款应用。',
    metaDescription:
      'Sokuji 是面向双语会议的开源实时语音翻译应用，可用云端服务商或设备端模型。梳理哪些信息已由官方来源确认、哪些尚未核实，并说明隐私与数据流向。',
    twitterDescription:
      'Sokuji：面向双语会议的开源实时语音翻译应用，提供桌面应用和 Chrome、Edge 扩展，可用云端 AI 服务商或设备端模型。已确认的内容汇总。',
    audience:
      '参加双语会议和通话的人、需要另一种语言实时字幕的团队，以及想在设备上试用语音识别、翻译和语音合成的注重隐私的用户',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sokuji 解读',
    targetKeywords: [
      'Sokuji 解读',
      '实时语音翻译应用',
      '会议实时翻译',
      '离线语音翻译',
      '虚拟麦克风翻译',
      '开源实时翻译工具',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Sokuji 是一款开源（AGPL-3.0）应用，可在双语会议中双向实时翻译语音，使用云端 AI 服务商，据开发者称也可使用设备端模型。** 它提供 Windows、macOS 和 Linux 桌面应用以及 Chrome 和 Edge 扩展，并作为虚拟麦克风用于 Zoom、Google Meet、Microsoft Teams 等应用。据开发者称，应用本身免费；云端使用由服务商计费，或从预付的 Kizuna AI 余额中扣除。PromptQuorum 没有测试过这款应用。',
    quickAnswerTop: {
      zh: {
        question: 'Sokuji 是什么，适合谁？',
        answer:
          'Sokuji 是面向会议的实时语音翻译应用，由 Kizuna AI Lab 在 GitHub 上公开开发。适合需要跨语言沟通、想在已在使用的应用里获得翻译语音或字幕的人。',
        bullets: [
          '许可证为 AGPL-3.0；应用免费，据开发者称设备端模型不需要账号，也不需要 API 密钥。',
          '据开发者称，双向模式会检测所选两种语言中正在使用的是哪一种，并以翻译语音或实时字幕的形式双向翻译。',
          '可使用 OpenAI、Google Gemini、Soniox、Palabra.ai 和 Doubao AST 2.0 等云端服务商，或设备端模型；云端使用由服务商计费，或从预付的 Kizuna AI 余额中扣除。',
          '桌面应用在 Windows、macOS 和 Linux 上作为虚拟麦克风工作；Chrome 和 Edge 扩展适用于受支持的会议网站。',
          '0.50.4 版本于 2026 年 11 月 16 日发布，主分支最近一次提交在 2026 年 11 月 18 日。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '系统要求', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
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
            text: 'Sokuji 是一款开源应用，可在双语会议中双向实时翻译语音，使用云端 AI 服务商，据开发者称也可使用运行在你自己设备上的模型。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成你和会议应用之间的口译员：它听取、翻译，然后通过虚拟麦克风说出结果，或以字幕显示。语音识别、翻译和语音合成来自云端服务商，还是来自存放在你电脑上的模型，由你选择。',
          },
        ],
        items: [
          '从 GitHub 发布页安装桌面应用（Windows 为安装程序 EXE，macOS 为 PKG，Linux 为 DEB 或 AppImage），或从商店添加 Chrome 或 Edge 扩展。',
          '选择一种服务商：你自己的 API 密钥、预付费的 Kizuna AI 账号，或据开发者称不需要账号和密钥的设备端模型。',
          '开发者称，会议内容直接从你的设备发送到你所选的服务商，仅使用设备端模型时则留在你的电脑上；其隐私页面列出了例外情况，其中包括 Microsoft 的在线引擎。',
          '使用统计和错误报告会发送给 PostHog，现行隐私政策称应用内没有关闭它们的开关。',
          'PromptQuorum 没有测试这款应用，因此识别准确度、翻译质量、延迟和设备端模型的速度均未核实。',
        ],
        callouts: [
          {
            type: 'note',
            text: '隐私页面称，使用设备端模型时，模型下载完成后会议内容不会离开你的电脑。PromptQuorum 没有检查网络流量，因此只能转述开发者的说法，无法进一步确认。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Sokuji 是 Kizuna AI Lab 开发的实时语音翻译应用，以 AGPL-3.0 许可证发布，提供 Windows、macOS 和 Linux 桌面应用以及 Chrome 和 Edge 浏览器扩展。**',
          '它在 [github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji) 上公开开发。仓库创建于 2025 年 4 月，0.50.4 版本于 2026 年 11 月 16 日发布，主分支最近一次提交在 2026 年 11 月 18 日，因此开发活跃，不适用“项目已停更”的警告。服务条款将 Kizuna AI Lab 列为提供方，适用日本法律，专属管辖法院为东京的法院。开发者的 [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) 页面（开发者称其为依据日本法律的披露）将 Kizuna AI Lab 列为运营方，并称地址和电话号码在收到请求后提供；PromptQuorum 没有找到已公布的公司地址或注册号。据开发者称，其账号服务器不是开源的。',
          '据开发者称，Sokuji 像麦克风一样位于你和会议应用之间：你的语音被识别、翻译，再以另一种语言说出或以字幕显示，对方说的话则以字幕或朗读的形式回到你这里。双向模式会检测所选两种语言中正在使用的是哪一种，并双向翻译。README 和开发者文档列出的实现方式有 OpenAI、Google Gemini、Palabra.ai、Doubao AST 2.0、Soniox、Qwen LiveTranslate、OpenAI 兼容端点、Kizuna AI 账号，以及设备端推理（Local Inference）。',
          'PromptQuorum 没有运行这款应用，也没有核实识别准确度、翻译质量、延迟或设备端模型的速度。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**你可以从 GitHub 发布页的安装包安装 Sokuji 桌面应用，也可以从商店为 Chrome 或 Edge 添加其扩展；开发者的下载页同时列出了这两种方式。**',
          'v0.50.4 版本提供 Windows 安装程序 EXE、适用于 Apple silicon 和 Intel 的 macOS PKG 安装包、适用于 x64 和 arm64 的 Linux DEB 包和 AppImage，以及 ZIP 格式的扩展。下载页称，Windows 安装程序通过 SignPath Foundation 进行了代码签名，macOS 应用已签名并经过公证。',
        ],
        columns: ['平台', '安装包'],
        rows: [
          { '平台': 'Windows', '安装包': '安装程序 EXE（VB-CABLE 需另装）' },
          { '平台': 'macOS（Apple silicon）', '安装包': 'PKG' },
          { '平台': 'macOS（Intel）', '安装包': 'PKG（x64）' },
          { '平台': 'Linux（x64、arm64）', '安装包': 'DEB 或 AppImage' },
          { '平台': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', '安装包': 'Chrome 应用商店扩展' },
          { '平台': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', '安装包': 'Edge 加载项扩展' },
        ],
        note: '可从 [GitHub 发布页](https://github.com/kizuna-ai-lab/sokuji/releases/latest)或开发者的[下载页](https://sokuji.kizuna.ai/download)下载。PromptQuorum 没有运行这些安装程序，也没有核实它们是否已签名或公证；这些说法来自开发者。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**桌面应用需要 Windows、macOS 或 Linux，扩展需要 Chromium 116 或更高版本；开发者没有公布内存或 GPU 的最低要求。**',
          '开发者的 [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) 页面列出桌面应用支持 Windows 10 或更高、macOS 13 或更高以及 Linux（推荐 Ubuntu 20.04 或更高），并要求稳定的宽带连接和麦克风；其本地 AI 页面称，设备端模型下载后无需网络即可运行。据下载页说明，Windows 上的虚拟麦克风需要另外安装 VB-CABLE；macOS 的音频驱动包含在安装程序中；Linux 上应用通过 PulseAudio 或 PipeWire 创建虚拟麦克风，并需要 pulseaudio-utils。扩展只在受支持的会议网站上工作，其他场景需要使用桌面应用。设备端模型只需下载一次，据开发者称，应用会检测你的 GPU 并下载适配的引擎包。PromptQuorum 没有测量内存占用或速度。',
        ],
        columns: ['项目', '记载内容'],
        rows: [
          { '项目': '桌面端', '记载内容': 'Windows 10+、macOS 13+、Ubuntu 20.04+（推荐）' },
          { '项目': '扩展', '记载内容': 'Chrome 和 Edge，Chromium 116 或更高' },
          { '项目': 'Windows 音频', '记载内容': 'VB-CABLE，需另行安装' },
          { '项目': 'Linux 音频', '记载内容': 'PulseAudio 或 PipeWire、pulseaudio-utils' },
          { '项目': '设备端模型', '记载内容': '下载一次；无需昂贵 GPU（README）' },
          { '项目': '内存和 GPU', '记载内容': '未公布' },
        ],
        note: '翻译需要一种服务商：设备端模型、你自己的 API 密钥或 Kizuna AI 账号。据开发者称，安装时三者都不需要，用自己的密钥或设备端模型使用 Sokuji 也不需要账号。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Sokuji 围绕会议中的实时语音翻译而设计，虚拟麦克风、字幕和服务商选择都围绕它展开。** 以下各项均为开发者在网站和 README 中的说法。',
        ],
        items: [
          '双向翻译：设置两种语言后，Sokuji 会检测正在说的是哪一种，并双向翻译；README 将此模式归功于 Soniox，并称支持 60 多种语言。',
          '翻译你的声音：对方通过虚拟麦克风听到翻译，可用于 Zoom、Google Meet、Microsoft Teams、Discord，或任何能选择麦克风的应用。',
          '翻译他人所说的话：扩展翻译会议标签页的音频，桌面应用翻译系统音频，以实时字幕或朗读的形式呈现。',
          '字幕模式与字幕共享：翻译文本显示在屏幕上，也可共享，让对方一起阅读。',
          '设备端模型：Whisper 系列等模型负责语音识别，Opus-MT 语言对以及 Qwen、TranslateGemma 等多语言模型负责翻译，Piper、Coqui 等引擎负责语音合成，通过 WASM 和 WebGPU 运行。',
          '云端服务商：OpenAI、Google Gemini、Palabra.ai、Doubao AST 2.0、Soniox、OpenAI 兼容端点（仅桌面端）和 Kizuna AI 账号；README 列出了 Palabra.ai、Doubao AST 2.0 和 Soniox 的声音克隆功能。',
          '音频工具：AI 降噪、回声消除，以及用于监听自己声音的直通功能。',
          '界面：30 种界面语言，用于设置的简单模式，以及带波形显示的高级模式。',
          '会议纪要：使用 Kizuna AI 账号时，开发者提供根据会话文字记录生成的纪要；据隐私页面，该文本会经其服务器转发给 OpenAI，且不会保留。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '翻译会议意味着把其他人的语音发送给你所选的服务商，而语音克隆会处理个人的声音。使用前请告知参会者，核对所在单位和会议平台的规定，并在克隆任何人的声音之前取得其同意。以上为一般性信息，不构成法律意见。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据开发者称，会议内容直接从你的设备发送到你选择的 AI 服务商，不经过 Kizuna AI，仅使用设备端模型时则留在你的电脑上；PromptQuorum 没有检查网络流量，无法确认这一点。**',
          '2026 年 11 月 14 日的隐私页面列出了例外情况。使用 Kizuna AI 账号时，为克隆声音录制的语音样本会经开发者的服务器转发给 Soniox，之后被丢弃；Kizuna AI 为其撰写会议纪要的会话，其文字记录会经其服务器转发给 OpenAI，且不会保留。没有账号时，你使用自己的密钥或设备端模型。',
          '本地推理中的“Online”引擎，即用于语音的 Edge TTS 和 Bing Translator，并不在你的电脑上运行。据开发者称，当没有就绪的设备端模型或你主动选择时会自动使用，待朗读或待翻译的文本随后会发送给 Microsoft。不含会议内容的其他连接包括模型下载、更新检查、对你所用 Soniox 或 Qwen 服务的延迟检测，以及使用统计和错误报告。',
          '据开发者称，使用统计和错误报告会发送到美国的 PostHog，登录后与你的账号 ID、邮箱和姓名关联；政策称目前应用内没有关闭它们的开关。Kizuna AI 账号会保存邮箱地址、登录记录、余额和用量，以及从 Stripe 收到的支付信息；开发者声明不出售、不出租数据，也不用其训练模型。',
          '应用的源代码在 GitHub 上公开，因此数据流向可以审查；开发者的账号服务器不是开源的。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Sokuji 适合需要跨语言沟通、想在已在使用的会议应用里获得翻译的人。**',
        ],
        items: [
          '参加双语会议的人，希望对方通过虚拟麦克风听到翻译语音，在任何应用里都能用，而不只是在浏览器里。',
          '听讲座、演讲或视频的人，希望获得所听内容的实时翻译字幕。',
          '做演讲的人，希望听众能阅读自己演讲的翻译字幕。',
          '注重隐私的用户，想按开发者的说法，不用密钥就在自己的设备上试用语音识别、翻译和语音合成。',
          '偏好代码以 AGPL-3.0 公开的应用的读者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Sokuji 在某些情况下并不合适，也有几处细节尚未核实。**',
        ],
        items: [
          '不适合：翻译出错代价很高的场合。开发者自己的页面称，大型托管模型在准确度和延迟上仍领先于设备端模型，重要通话你多半会想用前者。',
          '不适合：需要关闭使用统计的人。2026 年 11 月 14 日的隐私政策称，目前应用内没有可关闭它们的设置。',
          '未核实：识别准确度、翻译质量、延迟，以及设备端模型在常见笔记本电脑上的速度。PromptQuorum 没有运行这款应用。',
          '未核实：使用设备端模型时没有任何内容离开设备的说法，而同时还有 Microsoft 在线引擎、模型下载、更新检查和使用统计；PromptQuorum 没有检查网络流量。',
          '未核实：Windows 安装程序是否已代码签名、macOS 应用是否已公证；这些是开发者的说法。',
          '不明确：仓库中仍有一份 2025 年 6 月 3 日的扩展隐私政策文件，称分析数据需用户同意，应用内可开关，而现行政策称没有开关；PromptQuorum 以现行政策为准。',
          '未核实：隐私政策提到了移动应用，但下载页和 README 都没有列出移动端下载，因此 PromptQuorum 将 Sokuji 视为仅限桌面和浏览器。',
          '未核实：除 Kizuna AI Lab 这一名称之外的公司信息（据 Commerce Disclosure 页面，地址在收到请求后提供；未找到注册号）、用户数量和独立点评；PromptQuorum 没有查找独立点评。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokuji 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Sokuji 与转写或为语音加字幕的工具有重叠，但它是为会议中的实时翻译而设计的；PromptQuorum 没有实际将它与这些工具比较过。** 以下工具均在目录中，描述依据各自的解读页面。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'Sokuji', '来源中的记载': 'AGPL-3.0；桌面 + 浏览器；双向实时翻译' },
          { '工具': '[Buzz](/zh/power-local-llm/buzz-captions-review)', '来源中的记载': 'MIT；Mac/Windows/Linux；本地 Whisper 转写' },
          { '工具': '[Sablate](/zh/power-local-llm/sablate-review)', '来源中的记载': '闭源；Windows/Mac；字幕与翻译' },
          { '工具': '[Minutes](/zh/power-local-llm/minutes-review)', '来源中的记载': 'MIT；Mac/Windows；由转写生成会议纪要' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Sokuji 可以离线使用吗？',
            a: '据开发者称，设备端模型下载完成后可以：语音识别、翻译和语音合成随后无需网络，在你的电脑上运行。据隐私页面，“Online”引擎 Edge TTS 和 Bing Translator 需要网络，会把文本发送给 Microsoft，而且应用仍会建立更新和统计相关的连接。PromptQuorum 没有测试这一点。',
          },
          {
            q: 'Sokuji 免费吗？',
            a: '据开发者称，应用免费，并以 AGPL-3.0 开源，设备端模型不收费。使用自己的密钥时，云端服务商自行计费；使用 Kizuna AI 账号时，则从以美元计的预付余额中扣除。',
          },
          {
            q: 'Sokuji 能用于哪些会议应用？',
            a: '桌面应用会注册为麦克风，因此任何能选择麦克风的应用都可以使用它。据下载页说明，扩展针对 Zoom、Google Meet、Microsoft Teams、Slack、Discord、Jitsi Meet、Whereby、Gather Town 和 Yandex Telemost 开发。',
          },
          {
            q: 'Sokuji 会把我的会议发送给 Kizuna AI 吗？',
            a: '据开发者称不会：会议内容直接发送到你所选的服务商。它列出的例外是使用 Kizuna AI 账号时的声音克隆样本和会议纪要的文字记录，它们会经过其服务器，但不会保留。PromptQuorum 没有检查网络流量。',
          },
          {
            q: '可以关闭使用统计吗？',
            a: '2026 年 11 月 14 日的隐私政策称，目前应用内没有关闭它们的开关。仓库中较早的一份隐私政策文件描述了可选择退出，因此在依赖任何一种说法之前，请先在应用里查看相关设置。',
          },
          {
            q: 'Sokuji 多久更新一次？',
            a: 'GitHub 列出了 2026 年 11 月 10 日的 0.50.1 版本、11 月 11 日的 0.50.2、11 月 14 日的 0.50.3 和 11 月 16 日的 0.50.4，主分支最近一次提交在 2026 年 11 月 18 日。',
          },
          {
            q: 'Sokuji 可以在哪些系统上运行？',
            a: '据开发者的“Commerce Disclosure”页面，桌面应用需要 Windows 10 或更高版本、macOS 13 或更高版本，或 Linux（推荐 Ubuntu 20.04 或更高版本）。Chrome 和 Edge 扩展需要 Chromium 116 或更高版本。开发者没有公布内存或 GPU 的最低要求，PromptQuorum 也没有测量内存占用或速度。',
          },
          {
            q: '使用 Sokuji 需要账号或 API 密钥吗？',
            a: '据开发者称，使用自己的 API 密钥或设备端模型时无需账号，仅安装也不需要二者之一。要进行翻译，需要三种来源之一：设备端模型、你自己在云端服务商处获得的 API 密钥，或预付的 Kizuna AI 账号。',
          },
          {
            q: 'Sokuji 支持哪些翻译服务商？',
            a: 'README 和开发者文档列出了 OpenAI、Google Gemini、Palabra.ai、Doubao AST 2.0、Soniox、Qwen LiveTranslate、兼容 OpenAI 的端点（仅桌面版）、Kizuna AI 账号以及设备端本地推理。声音克隆在 Palabra.ai、Doubao AST 2.0 和 Soniox 下列出。据开发者称，会议内容随后会发送到你所选的服务商。',
          },
          {
            q: '双向模式有什么作用？',
            a: '据开发者称，你设置两种语言后，Sokuji 会检测当前说的是哪一种，并以翻译语音或实时字幕的形式双向翻译。README 将该模式归于 Soniox，并称其覆盖 60 多种语言。PromptQuorum 没有测试语言检测或翻译质量。',
          },
          {
            q: 'Sokuji 需要额外的音频软件吗？',
            a: '据下载页说明，Windows 上的虚拟麦克风需要另行安装 VB-CABLE；macOS 上音频驱动随安装包提供；Linux 上应用通过 PulseAudio 或 PipeWire 创建虚拟麦克风，并需要 pulseaudio-utils。扩展只能在受支持的会议网站上使用，其他应用则需要桌面应用。',
          },
          {
            q: '设备端模型和云端模型相比表现如何？',
            a: 'PromptQuorum 没有测量过。开发者自己的 Local AI 页面称，大型托管模型在准确度和延迟上仍领先于设备端模型，重要通话你很可能会想用前者。设备端模型只需下载一次，据 README 称不需要昂贵的 GPU。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你经常开双语会议，想通过桌面应用或浏览器扩展获得双向实时翻译，Sokuji 值得一试；你可以在云端服务商和据开发者称的设备端模型之间选择。**',
          '从资料上看它覆盖面很广：适用于任何应用的虚拟麦克风、字幕、对所说语言的双向检测、多个云端服务商、本地模型和公开的代码。开发活跃，2026 年 11 月 10 日至 16 日之间发布了四个版本。',
          '取舍也是实实在在的：开发者自己说设备端质量落后于大型托管模型，现行政策称应用内无法关闭使用统计，而 PromptQuorum 什么都没有测试。请先在无关紧要的通话里试用，并核对两种语言的识别和翻译，再决定是否依赖它。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Sokuji 官方网站](https://sokuji.kizuna.ai) — 功能与使用场景，2026 年 11 月 18 日查阅。',
          '[下载页](https://sokuji.kizuna.ai/download) — 平台、安装要求和签名说法，2026 年 11 月 18 日查阅。',
          '[本地 AI 页面](https://sokuji.kizuna.ai/local-ai) — 设备端模型，以及开发者对其与云端模型的比较，2026 年 11 月 18 日查阅。',
          '[隐私概要](https://sokuji.kizuna.ai/privacy) — 会议内容的去向，2026 年 11 月 18 日查阅。',
          '[隐私政策](https://sokuji.kizuna.ai/docs/privacy) — 收集的数据和保存期限，日期为 2026 年 11 月 14 日，2026 年 11 月 18 日查阅。',
          '[服务条款](https://sokuji.kizuna.ai/docs/terms) — 提供方、余额、适用法律和管辖，2026 年 11 月 18 日查阅。',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — 运营方、预付余额条款和系统要求（开发者称其为依据日本法律的披露），2026 年 11 月 18 日查阅。',
          '[GitHub 仓库](https://github.com/kizuna-ai-lab/sokuji) — 许可证、创建日期和最近提交，2026 年 11 月 18 日查阅。',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — 功能、服务商、安装和隐私说明，2026 年 11 月 18 日查阅。',
          '[GitHub 发布页](https://github.com/kizuna-ai-lab/sokuji/releases) — v0.50.4 的发布日期和安装包，2026 年 11 月 18 日查阅。',
          '[较早的隐私政策文件](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — 日期为 2025 年 6 月 3 日的扩展隐私政策，2026 年 11 月 18 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 语音合成、语音识别和语音智能体并排对比。',
          '[Buzz 解读](/zh/power-local-llm/buzz-captions-review) — 桌面端的本地 Whisper 转写。',
          '[Sablate 解读](/zh/power-local-llm/sablate-review) — Windows 和 Mac 上的视频字幕与翻译。',
          '[Minutes 解读](/zh/power-local-llm/minutes-review) — 由转写生成会议纪要，免费开源。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-ko.webp',
    title: 'Sokuji 리뷰: 회의용 양방향 음성 번역',
    seoTitle: 'Sokuji 리뷰: 회의용 양방향 실시간 음성 번역',
    intro:
      'Sokuji 0.50.4는 이중 언어 회의에서 음성을 양방향으로 실시간 번역하는 오픈소스 데스크톱 앱이자 Chrome·Edge 확장 프로그램입니다. 클라우드 AI 제공업체와 함께 쓸 수 있고, 개발사 설명에 따르면 음성 인식, 번역, 음성 합성 모델을 사용자 기기에서 직접 실행할 수도 있습니다. 라이선스는 AGPL-3.0입니다. 이 리뷰는 공식 웹사이트, GitHub 저장소와 릴리스, 개인정보 및 이용약관 페이지를 바탕으로 2026년 11월 18일에 확인한 내용입니다. PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Sokuji는 이중 언어 회의를 위한 오픈소스 실시간 음성 번역 앱으로, 클라우드 또는 기기 내 모델을 지원합니다. 확인된 내용과 미확인 내용을 정리했습니다.',
    twitterDescription:
      'Sokuji: 이중 언어 회의를 위한 오픈소스 실시간 음성 번역 앱. 데스크톱 앱과 Chrome·Edge 확장 프로그램을 제공하며 클라우드 AI 또는 기기 내 모델을 지원합니다. 확인된 내용을 정리했습니다.',
    audience:
      '이중 언어 회의와 통화에 참여하는 사람, 다른 언어로 실시간 자막이 필요한 팀, 기기에서 음성 인식·번역·음성 합성을 시험해 보고 싶은 개인정보 중시 사용자',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Sokuji 리뷰',
    targetKeywords: [
      'Sokuji 리뷰',
      '실시간 음성 번역 앱',
      '회의 실시간 번역',
      '오프라인 음성 번역',
      '가상 마이크 번역',
      '오픈소스 실시간 번역기',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Sokuji는 이중 언어 회의에서 음성을 양방향으로 실시간 번역하는 오픈소스(AGPL-3.0) 앱으로, 클라우드 AI 제공업체 또는 개발사 설명에 따르면 기기 내 모델을 사용합니다.** Windows, macOS, Linux용 데스크톱 앱과 Chrome·Edge 확장 프로그램으로 제공되며, Zoom, Google Meet, Microsoft Teams 등에서 가상 마이크로 동작합니다. 개발사 설명에 따르면 앱은 무료이며, 클라우드 사용 비용은 제공업체가 청구하거나 선불 Kizuna AI 잔액에서 차감됩니다. PromptQuorum은 앱을 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Sokuji는 무엇이며 누구에게 적합합니까?',
        answer:
          'Sokuji는 회의용 실시간 음성 번역 앱으로, Kizuna AI Lab이 GitHub에서 공개적으로 개발합니다. 언어 장벽을 넘어 대화하면서 이미 쓰는 앱 안에서 번역 음성이나 자막을 쓰고 싶은 분에게 적합합니다.',
        bullets: [
          '라이선스는 AGPL-3.0이며 앱은 무료입니다. 개발사에 따르면 기기 내 모델에는 계정도 API 키도 필요하지 않습니다.',
          '개발사에 따르면 양방향 모드는 선택한 두 언어 중 어느 쪽으로 말하는지 감지하고, 번역 음성 또는 실시간 자막으로 양방향 번역합니다.',
          'OpenAI, Google Gemini, Soniox, Palabra.ai, Doubao AST 2.0 같은 클라우드 제공업체 또는 기기 내 모델과 함께 동작하며, 클라우드 사용 비용은 제공업체가 청구하거나 선불 Kizuna AI 잔액에서 차감됩니다.',
          '데스크톱 앱은 Windows, macOS, Linux에서 가상 마이크로 동작하고, Chrome·Edge 확장 프로그램은 지원되는 회의 사이트에서 동작합니다.',
          '버전 0.50.4는 2026년 11월 16일에 출시되었고, 메인 브랜치의 마지막 커밋은 2026년 11월 18일입니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보 보호와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
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
            text: 'Sokuji는 이중 언어 회의에서 음성을 양방향으로 실시간 번역하는 오픈소스 앱으로, 클라우드 AI 제공업체 또는 개발사 설명에 따르면 사용자 기기에서 실행되는 모델을 사용합니다.',
          },
          {
            type: 'plain-terms',
            text: '나와 회의 앱 사이에 있는 통역사라고 생각하면 됩니다. 듣고 번역한 뒤 결과를 가상 마이크로 말해 주거나 자막으로 보여 줍니다. 음성 인식, 번역, 음성 합성을 클라우드 제공업체에서 받을지, 내 컴퓨터에 저장한 모델로 처리할지는 직접 선택합니다.',
          },
        ],
        items: [
          'GitHub 릴리스 페이지에서 데스크톱 앱(Windows는 설치용 EXE, macOS는 PKG, Linux는 DEB 또는 AppImage)을 설치하거나, 스토어에서 Chrome 또는 Edge 확장 프로그램을 추가합니다.',
          '제공업체를 고릅니다. 직접 발급한 API 키, 선불 Kizuna AI 계정, 또는 개발사에 따르면 계정도 키도 필요 없는 기기 내 모델 중에서 선택합니다.',
          '개발사에 따르면 회의 내용은 기기에서 선택한 제공업체로 바로 전송되며, 기기 내 모델만 쓰면 컴퓨터 밖으로 나가지 않습니다. 개인정보 페이지에는 Microsoft 온라인 엔진 등 예외가 나열되어 있습니다.',
          '사용 통계와 오류 보고서는 PostHog로 전송되며, 현재 개인정보 처리방침에는 앱에 이를 끄는 설정이 없다고 적혀 있습니다.',
          'PromptQuorum은 앱을 테스트하지 않았으므로 인식 정확도, 번역 품질, 지연 시간, 기기 내 모델의 속도는 확인되지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '개인정보 페이지에는 기기 내 모델을 쓰면 모델을 내려받은 뒤 회의 내용이 컴퓨터 밖으로 나가지 않는다고 적혀 있습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으므로 개발사의 설명 이상은 확인할 수 없습니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Sokuji는 Kizuna AI Lab이 만든 실시간 음성 번역 앱으로, Windows, macOS, Linux용 데스크톱 앱과 Chrome·Edge용 브라우저 확장 프로그램으로 AGPL-3.0 라이선스에 따라 배포됩니다.**',
          '[github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji)에서 공개적으로 개발되고 있습니다. 저장소는 2025년 4월에 만들어졌고, 버전 0.50.4는 2026년 11월 16일에 나왔으며, 메인 브랜치의 마지막 커밋은 2026년 11월 18일이므로 개발이 활발하고 방치된 프로젝트 경고는 해당되지 않습니다. 이용약관은 Kizuna AI Lab을 제공자로 명시하고 일본 법률을 준거법으로 하며, 도쿄의 법원을 전속 관할로 정하고 있습니다. 개발사의 [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) 페이지(개발사는 일본 법률에 따른 고지라고 밝힘)에는 Kizuna AI Lab이 운영자로 적혀 있고 주소와 전화번호는 요청 시 공개한다고 되어 있습니다. PromptQuorum은 공개된 회사 주소나 등록번호를 찾지 못했습니다. 개발사에 따르면 계정 서버는 오픈소스가 아닙니다.',
          '개발사에 따르면 Sokuji는 나와 회의 앱 사이에서 마이크처럼 동작합니다. 내 음성을 인식하고 번역해 다른 언어로 말하거나 자막으로 보여 주고, 상대방의 말은 자막이나 읽어 주는 음성으로 돌아옵니다. 양방향 모드는 선택한 두 언어 중 어느 쪽으로 말하는지 감지해 양방향으로 번역합니다. README와 개발사 문서에는 OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, OpenAI 호환 엔드포인트, Kizuna AI 계정, 기기 내 추론(Local Inference)이 그 방법으로 나열되어 있습니다.',
          'PromptQuorum은 앱을 실행하지 않았으며 인식 정확도, 번역 품질, 지연 시간, 기기 내 모델의 속도를 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Sokuji는 GitHub 릴리스 페이지의 패키지로 데스크톱 앱을 설치하거나, 스토어에서 Chrome 또는 Edge에 확장 프로그램을 추가해 사용할 수 있습니다. 개발사의 다운로드 페이지에 두 방법이 모두 나와 있습니다.**',
          'v0.50.4 릴리스에는 Windows용 설치 EXE, Apple silicon과 Intel용 macOS PKG 설치 파일, x64와 arm64용 Linux DEB 패키지와 AppImage, ZIP 형식의 확장 프로그램이 들어 있습니다. 다운로드 페이지에 따르면 Windows 설치 프로그램은 SignPath Foundation을 통해 코드 서명되었고 macOS 앱은 서명 및 공증되었습니다.',
        ],
        columns: ['방법', '패키지'],
        rows: [
          { '방법': 'Windows', '패키지': '설치 EXE (VB-CABLE은 별도 설치)' },
          { '방법': 'macOS (Apple silicon)', '패키지': 'PKG' },
          { '방법': 'macOS (Intel)', '패키지': 'PKG (x64)' },
          { '방법': 'Linux (x64, arm64)', '패키지': 'DEB 또는 AppImage' },
          { '방법': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', '패키지': 'Chrome 웹 스토어 확장 프로그램' },
          { '방법': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', '패키지': 'Edge 추가 기능 확장 프로그램' },
        ],
        note: '[GitHub 릴리스 페이지](https://github.com/kizuna-ai-lab/sokuji/releases/latest) 또는 개발사의 [다운로드 페이지](https://sokuji.kizuna.ai/download)에서 내려받습니다. PromptQuorum은 설치 프로그램을 실행하지 않았고 서명이나 공증 여부도 확인하지 않았으며, 이 내용은 개발사의 설명입니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**Sokuji 데스크톱 앱에는 Windows, macOS 또는 Linux가, 확장 프로그램에는 Chromium 116 이상이 필요합니다. 개발사는 메모리나 GPU 최소 사양을 공개하지 않습니다.**',
          '개발사의 [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) 페이지에는 데스크톱 앱 사양으로 Windows 10 이상, macOS 13 이상, Linux(Ubuntu 20.04 이상 권장)가 나열되어 있고 안정적인 광대역 연결과 마이크도 요구 사항으로 적혀 있습니다. 로컬 AI 페이지에는 기기 내 모델이 내려받은 뒤 네트워크 없이 동작한다고 되어 있습니다. 다운로드 페이지에 따르면 Windows의 가상 마이크에는 VB-CABLE을 별도로 설치해야 하고, macOS에서는 오디오 드라이버가 설치 파일에 포함되며, Linux에서는 앱이 PulseAudio 또는 PipeWire로 가상 마이크를 만들고 pulseaudio-utils가 필요합니다. 확장 프로그램은 지원되는 회의 사이트에서만 동작하며, 그 밖의 경우에는 데스크톱 앱이 필요합니다. 기기 내 모델은 한 번 내려받으며, 개발사에 따르면 앱이 GPU를 감지해 맞는 엔진 패키지를 내려받습니다. PromptQuorum은 메모리 사용량과 속도를 측정하지 않았습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': '데스크톱', '명시된 내용': 'Windows 10 이상, macOS 13 이상, Ubuntu 20.04 이상(권장)' },
          { '항목': '확장 프로그램', '명시된 내용': 'Chrome 및 Edge, Chromium 116 이상' },
          { '항목': 'Windows 오디오', '명시된 내용': 'VB-CABLE, 별도 설치' },
          { '항목': 'Linux 오디오', '명시된 내용': 'PulseAudio 또는 PipeWire, pulseaudio-utils' },
          { '항목': '기기 내 모델', '명시된 내용': '한 번 다운로드, 고가 GPU 불필요(README)' },
          { '항목': '메모리와 GPU', '명시된 내용': '공개되지 않음' },
        ],
        note: '번역에는 제공업체가 필요합니다. 기기 내 모델, 직접 발급한 API 키, Kizuna AI 계정 중 하나입니다. 개발사에 따르면 설치에는 셋 다 필요하지 않으며, 자신의 키나 기기 내 모델로 Sokuji를 쓰는 데는 계정이 필요하지 않습니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Sokuji는 회의에서의 실시간 음성 번역을 중심으로 만들어졌으며, 가상 마이크, 자막, 제공업체 선택이 그 주변을 구성합니다.** 아래 항목은 모두 웹사이트와 README에 나온 개발사의 설명입니다.',
        ],
        items: [
          '양방향 번역: 두 언어를 설정하면 Sokuji가 어느 언어로 말하는지 감지해 양방향으로 번역합니다. README는 이 모드를 Soniox 기반이라고 밝히며 60개가 넘는 언어를 지원한다고 적고 있습니다.',
          '내 목소리 번역: 상대방은 Zoom, Google Meet, Microsoft Teams, Discord 등 마이크를 고를 수 있는 모든 앱에서 가상 마이크를 통해 번역 음성을 듣습니다.',
          '상대방의 말 번역: 확장 프로그램은 회의 탭의 오디오를, 데스크톱 앱은 시스템 오디오를 번역해 실시간 자막이나 읽어 주는 음성으로 전달합니다.',
          '자막 모드와 자막 공유: 번역된 텍스트를 화면에 표시하고, 원하면 공유해 상대방도 함께 읽을 수 있습니다.',
          '기기 내 모델: Whisper 계열 등의 음성 인식, Opus-MT 언어 쌍과 Qwen, TranslateGemma 같은 다국어 언어 모델을 이용한 번역, Piper와 Coqui 등의 엔진을 이용한 음성 합성이 WASM과 WebGPU로 실행됩니다.',
          '클라우드 제공업체: OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, OpenAI 호환 엔드포인트(데스크톱 전용), Kizuna AI 계정. README는 Palabra.ai, Doubao AST 2.0, Soniox의 음성 복제를 나열합니다.',
          '오디오 도구: AI 노이즈 억제, 에코 제거, 내 목소리를 확인하는 패스스루.',
          '인터페이스: 30개 인터페이스 언어, 설정용 간단 모드, 파형 표시가 있는 고급 모드.',
          '회의 노트: Kizuna AI 계정에서는 개발사가 세션 전사본으로 노트를 작성해 주며, 개인정보 페이지에 따르면 그 텍스트는 개발사 서버를 거쳐 OpenAI로 전달되고 저장되지 않습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '회의를 번역한다는 것은 다른 참석자의 음성을 선택한 제공업체로 보낸다는 뜻이며, 음성 복제는 개인의 목소리를 처리합니다. 사용하기 전에 참석자에게 알리고, 소속 기관과 회의 플랫폼의 규정을 확인하며, 누군가의 목소리를 복제하기 전에는 동의를 받으십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**개발사에 따르면 회의 내용은 기기에서 선택한 AI 제공업체로 바로 전송되며 Kizuna AI를 거치지 않고, 기기 내 모델만 쓰면 컴퓨터 밖으로 나가지 않습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으므로 이를 확인할 수 없습니다.**',
          '2026년 11월 14일자 개인정보 페이지에 예외가 나열되어 있습니다. Kizuna AI 계정을 쓰면 음성 복제를 위해 녹음한 음성 샘플이 개발사 서버를 거쳐 Soniox로 전달된 뒤 폐기되고, Kizuna AI가 회의 노트를 작성하는 세션의 전사 텍스트는 서버를 거쳐 OpenAI로 전달되며 저장되지 않습니다. 계정이 없으면 직접 발급한 키나 기기 내 모델을 사용합니다.',
          '로컬 추론의 “Online” 엔진, 즉 음성용 Edge TTS와 Bing Translator는 컴퓨터에서 실행되지 않습니다. 개발사에 따르면 준비된 기기 내 모델이 없거나 사용자가 직접 선택하면 자동으로 사용되며, 이때 읽거나 번역할 텍스트가 Microsoft로 전송됩니다. 회의 내용이 없는 그 밖의 연결로는 모델 다운로드, 업데이트 확인, 사용 중인 Soniox 또는 Qwen 서비스에 대한 지연 시간 측정, 사용 통계와 오류 보고서가 있습니다.',
          '개발사에 따르면 사용 통계와 오류 보고서는 미국의 PostHog로 전송되며, 로그인하면 계정 ID, 이메일, 이름과 연결됩니다. 처리방침에는 현재 앱에 이를 끄는 설정이 없다고 적혀 있습니다. Kizuna AI 계정에는 이메일 주소, 로그인 기록, 잔액과 사용량, Stripe에서 받은 결제 정보가 저장되며, 개발사는 데이터를 판매하거나 대여하지 않고 모델 학습에 쓰지 않는다고 밝힙니다.',
          '앱의 소스 코드는 GitHub에 공개되어 있어 데이터 흐름을 점검할 수 있습니다. 개발사의 계정 서버는 오픈소스가 아닙니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Sokuji는 언어 장벽을 넘어 대화하면서 이미 쓰는 회의 앱 안에서 번역을 쓰고 싶은 분께 적합합니다.**',
        ],
        items: [
          '이중 언어 회의에서 브라우저뿐 아니라 어떤 앱에서든 상대방이 가상 마이크로 번역 음성을 듣도록 하고 싶은 분.',
          '강의, 발표, 영상에서 듣는 내용의 실시간 번역 자막이 필요한 분.',
          '자신의 발표에 대해 청중이 번역 자막을 읽도록 하고 싶은 분.',
          '개발사의 설명대로 키 없이 자기 기기에서 음성 인식, 번역, 음성 합성을 시험해 보고 싶은 개인정보 중시 사용자.',
          'AGPL-3.0으로 코드가 공개된 앱을 선호하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Sokuji가 맞지 않는 상황이 있으며, 확인되지 않은 세부 사항도 여러 가지입니다.**',
        ],
        items: [
          '적합하지 않음: 오역이 중요한 상황. 개발사 자신의 페이지에 대형 호스팅 모델이 정확도와 지연 시간에서 기기 내 모델보다 여전히 앞서며, 중요한 통화에는 아마 그쪽을 원하게 될 것이라고 적혀 있습니다.',
          '적합하지 않음: 사용 통계를 꺼야 하는 분. 2026년 11월 14일자 개인정보 처리방침에는 현재 앱에 이를 끄는 설정이 없다고 적혀 있습니다.',
          '확인되지 않음: 인식 정확도, 번역 품질, 지연 시간, 일반 노트북에서의 기기 내 모델 속도. PromptQuorum은 앱을 실행하지 않았습니다.',
          '확인되지 않음: 기기 내 모델을 쓰면 아무것도 기기를 떠나지 않는다는 설명. Microsoft 온라인 엔진, 모델 다운로드, 업데이트 확인, 사용 통계와 함께 적혀 있습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          '확인되지 않음: Windows 설치 프로그램의 코드 서명과 macOS 앱의 공증 여부. 이는 개발사의 설명입니다.',
          '불분명함: 저장소에는 분석을 옵트인으로 설명하고 앱 안에 전환 설정이 있다고 적은 2025년 6월 3일자 확장 프로그램 개인정보 처리방침 파일이 아직 남아 있지만, 현재 처리방침에는 전환 설정이 없다고 적혀 있습니다. PromptQuorum은 현재 처리방침을 적용되는 문서로 봅니다.',
          '확인되지 않음: 개인정보 처리방침에는 모바일 애플리케이션이 언급되어 있지만, 다운로드 페이지와 README 어디에도 모바일 다운로드는 나와 있지 않습니다. 그래서 PromptQuorum은 Sokuji를 데스크톱과 브라우저 전용으로 취급합니다.',
          '확인되지 않음: Kizuna AI Lab이라는 이름 외의 회사 정보(Commerce Disclosure 페이지에 따르면 주소는 요청 시 공개되며, 등록번호는 찾지 못함), 사용자 수, 독립 리뷰. PromptQuorum은 독립 리뷰를 찾지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokuji와 대안 비교',
        itemHeadings: true,
        content: [
          '**Sokuji는 음성을 전사하거나 자막을 만드는 도구와 겹치는 부분이 있지만, 회의에서의 실시간 번역을 위해 만들어졌습니다. PromptQuorum은 이 도구들과 직접 비교하지 않았습니다.** 아래 도구들은 디렉터리에 있으며 각자의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Sokuji', '출처에 기재된 내용': 'AGPL-3.0, 데스크톱 + 브라우저, 양방향 실시간 번역' },
          { '도구': '[Buzz](/ko/power-local-llm/buzz-captions-review)', '출처에 기재된 내용': 'MIT, Mac/Windows/Linux, 로컬 Whisper 전사' },
          { '도구': '[Sablate](/ko/power-local-llm/sablate-review)', '출처에 기재된 내용': '비공개 소스, Windows/Mac, 자막과 번역' },
          { '도구': '[Minutes](/ko/power-local-llm/minutes-review)', '출처에 기재된 내용': 'MIT, Mac/Windows, 전사 기반 회의 노트' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Sokuji는 오프라인에서 작동합니까?',
            a: '개발사에 따르면 기기 내 모델을 내려받은 뒤에는 가능합니다. 음성 인식, 번역, 음성 합성이 네트워크 없이 컴퓨터에서 실행됩니다. 개인정보 페이지에 따르면 “Online” 엔진인 Edge TTS와 Bing Translator는 네트워크가 필요하고 텍스트를 Microsoft로 보내며, 앱은 업데이트와 통계를 위한 연결도 계속 만듭니다. PromptQuorum은 이를 테스트하지 않았습니다.',
          },
          {
            q: 'Sokuji는 무료입니까?',
            a: '개발사에 따르면 앱은 AGPL-3.0의 무료 오픈소스이며 기기 내 모델에는 비용이 들지 않습니다. 직접 발급한 키를 쓰면 클라우드 제공업체가 직접 청구하고, Kizuna AI 계정을 쓰면 미국 달러 선불 잔액에서 차감됩니다.',
          },
          {
            q: '어떤 회의 앱에서 쓸 수 있습니까?',
            a: '데스크톱 앱은 마이크로 등록되므로 마이크를 고를 수 있는 앱이면 어디서든 쓸 수 있습니다. 다운로드 페이지에 따르면 확장 프로그램은 Zoom, Google Meet, Microsoft Teams, Slack, Discord, Jitsi Meet, Whereby, Gather Town, Yandex Telemost용으로 만들어졌습니다.',
          },
          {
            q: 'Sokuji가 회의 내용을 Kizuna AI로 보냅니까?',
            a: '개발사에 따르면 보내지 않습니다. 회의 내용은 선택한 제공업체로 바로 전송됩니다. 개발사가 밝힌 예외는 Kizuna AI 계정에서의 음성 복제 샘플과 회의 노트용 전사본으로, 개발사 서버를 거치지만 저장되지 않습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          },
          {
            q: '사용 통계를 끌 수 있습니까?',
            a: '2026년 11월 14일자 개인정보 처리방침에는 현재 앱에 이를 끄는 설정이 없다고 적혀 있습니다. 저장소에 있는 오래된 개인정보 처리방침 파일에는 옵트아웃이 설명되어 있으므로, 어느 쪽에도 의존하기 전에 앱의 설정을 확인하십시오.',
          },
          {
            q: 'Sokuji는 얼마나 자주 업데이트됩니까?',
            a: 'GitHub에는 2026년 11월 10일의 0.50.1, 11월 11일의 0.50.2, 11월 14일의 0.50.3, 11월 16일의 0.50.4 버전이 올라와 있으며, 메인 브랜치의 마지막 커밋은 2026년 11월 18일입니다.',
          },
          {
            q: 'Sokuji는 어떤 시스템에서 실행됩니까?',
            a: '개발사의 “Commerce Disclosure” 페이지에 따르면 데스크톱 앱에는 Windows 10 이상, macOS 13 이상 또는 Linux(Ubuntu 20.04 이상 권장)가 필요합니다. Chrome과 Edge 확장 프로그램에는 Chromium 116 이상이 필요합니다. 개발사는 메모리나 GPU 최소 사양을 공개하지 않았으며, PromptQuorum은 메모리 사용량도 속도도 측정하지 않았습니다.',
          },
          {
            q: 'Sokuji를 쓰려면 계정이나 API 키가 필요합니까?',
            a: '개발사에 따르면 직접 발급한 API 키나 기기 내 모델로 Sokuji를 쓸 때는 계정이 필요 없으며, 설치만 하는 데에는 둘 다 필요하지 않습니다. 번역하려면 기기 내 모델, 클라우드 제공업체의 직접 발급 API 키, 선불 Kizuna AI 계정 중 하나가 필요합니다.',
          },
          {
            q: 'Sokuji는 어떤 번역 제공업체를 지원합니까?',
            a: 'README와 개발사 문서에는 OpenAI, Google Gemini, Palabra.ai, Doubao AST 2.0, Soniox, Qwen LiveTranslate, OpenAI 호환 엔드포인트(데스크톱 전용), Kizuna AI 계정, 기기 내 로컬 추론이 나와 있습니다. 음성 복제는 Palabra.ai, Doubao AST 2.0, Soniox에 대해 기재되어 있습니다. 개발사에 따르면 회의 내용은 이후 선택한 제공업체로 전송됩니다.',
          },
          {
            q: '양방향 모드는 무엇을 합니까?',
            a: '개발사에 따르면 두 언어를 설정하면 Sokuji가 어느 언어로 말하는지 감지하여 번역 음성이나 실시간 자막으로 양방향 번역합니다. README는 이 모드를 Soniox의 기능으로 소개하며 60개가 넘는 언어를 지원한다고 밝힙니다. PromptQuorum은 언어 감지도 번역 품질도 테스트하지 않았습니다.',
          },
          {
            q: 'Sokuji에는 추가 오디오 소프트웨어가 필요합니까?',
            a: '다운로드 페이지에 따르면 Windows의 가상 마이크에는 별도로 설치하는 VB-CABLE이 필요하고, macOS에서는 오디오 드라이버가 설치 프로그램에 포함되어 있으며, Linux에서는 앱이 PulseAudio 또는 PipeWire를 통해 가상 마이크를 만들고 pulseaudio-utils가 필요합니다. 확장 프로그램은 지원되는 회의 사이트에서만 작동하므로 다른 앱에는 데스크톱 앱이 필요합니다.',
          },
          {
            q: '기기 내 모델은 클라우드 모델과 비교해 어떻습니까?',
            a: 'PromptQuorum은 이를 측정하지 않았습니다. 개발사의 Local AI 페이지 자체에서, 대형 호스팅 모델이 정확도와 지연 시간에서 아직 기기 내 모델보다 앞서며 중요한 통화에는 그쪽이 필요할 가능성이 크다고 밝힙니다. 기기 내 모델은 한 번만 내려받으면 되며, README에 따르면 값비싼 GPU가 필요하지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**Sokuji는 이중 언어 회의를 하면서 데스크톱 앱이나 브라우저 확장 프로그램으로 양방향 실시간 번역을 쓰고 싶다면 살펴볼 만합니다. 클라우드 제공업체와 개발사 설명에 따른 기기 내 모델 중에서 고를 수 있습니다.**',
          '문서상으로는 범위가 넓습니다. 어떤 앱에서도 쓸 수 있는 가상 마이크, 자막, 말하는 언어의 양방향 감지, 여러 클라우드 제공업체, 로컬 모델, 공개된 코드가 있습니다. 개발은 활발하여 2026년 11월 10일부터 16일 사이에 네 차례 릴리스되었습니다.',
          '절충점도 분명합니다. 개발사 스스로 기기 내 모델의 품질이 대형 호스팅 모델에 못 미친다고 밝히고, 현재 처리방침에 따르면 앱에서 사용 통계를 끌 수 없으며, PromptQuorum은 아무것도 테스트하지 않았습니다. 중요도가 낮은 통화에서 먼저 써 보고 두 언어의 인식과 번역을 확인한 뒤에 의존하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Sokuji 웹사이트](https://sokuji.kizuna.ai) — 기능과 사용 시나리오, 2026년 11월 18일 확인.',
          '[다운로드 페이지](https://sokuji.kizuna.ai/download) — 플랫폼, 설치 요구 사항, 서명 관련 설명, 2026년 11월 18일 확인.',
          '[로컬 AI 페이지](https://sokuji.kizuna.ai/local-ai) — 기기 내 모델과 클라우드 모델에 대한 개발사의 비교, 2026년 11월 18일 확인.',
          '[개인정보 요약](https://sokuji.kizuna.ai/privacy) — 회의 내용이 가는 곳, 2026년 11월 18일 확인.',
          '[개인정보 처리방침](https://sokuji.kizuna.ai/docs/privacy) — 수집 데이터와 보관 기간, 2026년 11월 14일자, 2026년 11월 18일 확인.',
          '[이용약관](https://sokuji.kizuna.ai/docs/terms) — 제공자, 잔액, 준거법과 관할, 2026년 11월 18일 확인.',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — 운영자, 선불 잔액 조건, 시스템 요구 사항(개발사는 일본 법률에 따른 고지라고 밝힘), 2026년 11월 18일 확인.',
          '[GitHub 저장소](https://github.com/kizuna-ai-lab/sokuji) — 라이선스, 생성일, 마지막 커밋, 2026년 11월 18일 확인.',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — 기능, 제공업체, 설치, 개인정보 관련 설명, 2026년 11월 18일 확인.',
          '[GitHub 릴리스](https://github.com/kizuna-ai-lab/sokuji/releases) — v0.50.4의 릴리스 날짜와 패키지, 2026년 11월 18일 확인.',
          '[이전 개인정보 처리방침 파일](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — 2025년 6월 3일자 확장 프로그램 개인정보 처리방침, 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Buzz 리뷰](/ko/power-local-llm/buzz-captions-review) — 데스크톱에서의 로컬 Whisper 전사.',
          '[Sablate 리뷰](/ko/power-local-llm/sablate-review) — Windows와 Mac에서의 영상 자막과 번역.',
          '[Minutes 리뷰](/ko/power-local-llm/minutes-review) — 전사 기반 회의 노트, 무료 오픈소스.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/sokuji-review-hero-ar.webp',
    title: 'مراجعة Sokuji: ترجمة صوتية فورية في الاتجاهين للاجتماعات',
    seoTitle: 'مراجعة Sokuji: ترجمة صوتية فورية للاجتماعات',
    intro:
      'إصدار Sokuji 0.50.4 تطبيق مفتوح المصدر لسطح المكتب مع إضافة لمتصفحي Chrome وEdge، يترجم الكلام فوريًا في الاتجاهين في الاجتماعات ثنائية اللغة. يعمل مع مزوّدي ذكاء اصطناعي سحابيين، وبحسب المطوّر يمكنه أيضًا تشغيل نماذج التعرّف على الكلام والترجمة وتوليد الصوت على جهازك أنت. الترخيص هو AGPL-3.0. تستند هذه المراجعة إلى الموقع الرسمي ومستودع GitHub وإصداراته وصفحتي الخصوصية والشروط، وقد راجعناها في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'Sokuji تطبيق مفتوح المصدر للترجمة الصوتية الفورية في الاجتماعات ثنائية اللغة، بمزوّدين سحابيين أو نماذج على الجهاز. ما تأكد وما لم يتأكد.',
    twitterDescription:
      'Sokuji: تطبيق مفتوح المصدر للترجمة الصوتية الفورية في الاجتماعات ثنائية اللغة، كتطبيق لسطح المكتب وإضافة لمتصفحي Chrome وEdge، بمزوّدي ذكاء اصطناعي سحابيين أو نماذج على الجهاز. ما تأكد.',
    audience:
      'المشاركون في اجتماعات ومكالمات ثنائية اللغة، والفرق التي تريد ترجمة نصية فورية بلغة أخرى، والمستخدمون المهتمون بالخصوصية الذين يريدون تجربة التعرّف على الكلام والترجمة وتوليد الصوت على الجهاز',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Sokuji',
    targetKeywords: [
      'مراجعة Sokuji',
      'تطبيق ترجمة صوتية فورية',
      'ترجمة الاجتماعات في الوقت الفعلي',
      'ترجمة صوتية بدون اتصال',
      'مترجم بميكروفون افتراضي',
      'مترجم فوري مفتوح المصدر',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Sokuji تطبيق مفتوح المصدر (AGPL-3.0) يترجم الكلام فوريًا في الاتجاهين في الاجتماعات ثنائية اللغة، بمزوّدي ذكاء اصطناعي سحابيين أو، بحسب المطوّر، بنماذج على الجهاز.** يعمل كتطبيق لأنظمة Windows وmacOS وLinux وكإضافة لمتصفحي Chrome وEdge، ويؤدي دور ميكروفون افتراضي لتطبيقات Zoom وGoogle Meet وMicrosoft Teams وغيرها. بحسب المطوّر، التطبيق مجاني؛ أما الاستخدام السحابي فيحاسب عليه المزوّد أو يُخصم من رصيد Kizuna AI المدفوع مسبقًا. لم تختبر PromptQuorum التطبيق.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Sokuji ولمن هو؟',
        answer:
          'Sokuji تطبيق للترجمة الصوتية الفورية في الاجتماعات، تطوّره Kizuna AI Lab علنًا على GitHub. يناسب من يتحدثون عبر حاجز لغوي ويريدون صوتًا مترجمًا أو ترجمة نصية داخل التطبيقات التي يستخدمونها أصلًا.',
        bullets: [
          'الترخيص AGPL-3.0؛ التطبيق مجاني، وبحسب المطوّر لا تحتاج النماذج على الجهاز إلى حساب ولا إلى مفتاح API.',
          'بحسب المطوّر، يكتشف وضع الاتجاهين أيًّا من اللغتين المختارتين يُتحدَّث بها ويترجم في الاتجاهين، بصوت مترجم أو بترجمة نصية فورية.',
          'يعمل مع مزوّدين سحابيين مثل OpenAI وGoogle Gemini وSoniox وPalabra.ai وDoubao AST 2.0، أو مع نماذج على الجهاز؛ ويحاسب على الاستخدام السحابي المزوّد أو يُخصم من رصيد Kizuna AI المدفوع مسبقًا.',
          'يعمل تطبيق سطح المكتب كميكروفون افتراضي على Windows وmacOS وLinux؛ وتعمل إضافة Chrome وEdge على مواقع الاجتماعات المدعومة.',
          'صدر الإصدار 0.50.4 في 16 نوفمبر 2026، وكان آخر commit في الفرع الرئيسي في 18 نوفمبر 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
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
            text: 'Sokuji تطبيق مفتوح المصدر يترجم الكلام فوريًا في الاتجاهين في الاجتماعات ثنائية اللغة، بمزوّدي ذكاء اصطناعي سحابيين أو، بحسب المطوّر، بنماذج تعمل على جهازك أنت.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله مترجمًا فوريًا بينك وبين تطبيق الاجتماعات: يستمع ويترجم، ثم ينطق النتيجة عبر ميكروفون افتراضي أو يعرضها ترجمةً نصية. وأنت تختار هل يأتي التعرّف على الكلام والترجمة وتوليد الصوت من مزوّد سحابي أم من نماذج مخزّنة على حاسوبك.',
          },
        ],
        items: [
          'ثبّت تطبيق سطح المكتب من صفحة إصدارات GitHub (ملف EXE للتثبيت على Windows، وPKG على macOS، وDEB أو AppImage على Linux)، أو أضف إضافة Chrome أو Edge من المتجر.',
          'اختر مزوّدًا: مفتاح API الخاص بك، أو حساب Kizuna AI مدفوعًا مسبقًا، أو نماذج على الجهاز لا تحتاج بحسب المطوّر إلى حساب ولا إلى مفتاح.',
          'يقول المطوّر إن محتوى الاجتماعات يذهب مباشرة من جهازك إلى المزوّد الذي اخترته، وإنه يبقى على حاسوبك إذا استخدمت نماذج على الجهاز فقط؛ وتسرد صفحة الخصوصية لديه الاستثناءات، ومنها محركات Microsoft عبر الإنترنت.',
          'تُرسَل إحصاءات الاستخدام وتقارير الأخطاء إلى PostHog، وتقول سياسة الخصوصية الحالية إنه لا يوجد في التطبيقات مفتاح لإيقافها.',
          'لم تختبر PromptQuorum التطبيق، لذا فإن دقة التعرّف وجودة الترجمة وزمن الاستجابة وسرعة النماذج على الجهاز غير متحقَّق منها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تقول صفحة الخصوصية إن محتوى الاجتماعات لا يغادر حاسوبك أبدًا عند استخدام نماذج على الجهاز بعد تنزيلها. لم تفحص PromptQuorum حركة الشبكة، لذلك لا تستطيع تأكيد ذلك بما يتجاوز ما يكتبه المطوّر.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Sokuji تطبيق للترجمة الصوتية الفورية من Kizuna AI Lab، يصدر كتطبيق لأنظمة Windows وmacOS وLinux وكإضافة لمتصفحي Chrome وEdge بترخيص AGPL-3.0.**',
          'يُطوَّر علنًا على [github.com/kizuna-ai-lab/sokuji](https://github.com/kizuna-ai-lab/sokuji). أُنشئ المستودع في أبريل 2025، وظهر الإصدار 0.50.4 في 16 نوفمبر 2026، وكان آخر commit في الفرع الرئيسي في 18 نوفمبر 2026، فالتطوير نشط ولا ينطبق تحذير المشروع المهجور. تسمّي شروط الخدمة Kizuna AI Lab مزوِّدًا للخدمة وتخضع لقوانين اليابان، مع اختصاص حصري لمحاكم طوكيو؛ وتسرد صفحة [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) لدى المطوّر، والتي يقدّمها المطوّر بوصفها إشعارًا بموجب القانون الياباني، Kizuna AI Lab بوصفها الجهة المشغِّلة وتقول إن العنوان ورقم الهاتف يُكشف عنهما عند الطلب؛ ولم تجد PromptQuorum عنوانًا منشورًا للشركة ولا رقم تسجيل. وبحسب المطوّر فإن خادم الحسابات لديه ليس مفتوح المصدر.',
          'بحسب المطوّر، يقف Sokuji بينك وبين تطبيق الاجتماعات كما يفعل الميكروفون: يُتعرَّف على كلامك ويُترجم ثم يُنطق أو يُعرض ترجمةً نصية باللغة الأخرى، وما يقوله الطرف الآخر يعود إليك ترجمةً نصية أو مقروءًا بصوت عالٍ. ويكتشف وضع الاتجاهين أيًّا من لغتين مختارتين يُتحدَّث بها ويترجم في الاتجاهين. وتذكر وثائق README ووثائق المطوّر كلًّا من OpenAI وGoogle Gemini وPalabra.ai وDoubao AST 2.0 وSoniox وQwen LiveTranslate ونقاط وصول متوافقة مع OpenAI وحساب Kizuna AI والاستدلال على الجهاز (Local Inference) وسائل لذلك.',
          'لم تشغّل PromptQuorum التطبيق ولم تتحقق من دقة التعرّف ولا جودة الترجمة ولا زمن الاستجابة ولا سرعة النماذج على الجهاز.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يمكنك تثبيت Sokuji كتطبيق لسطح المكتب من الحزم الموجودة في صفحة إصدارات GitHub، أو إضافة إضافته إلى Chrome أو Edge من المتجر؛ وتسرد صفحة التنزيل لدى المطوّر الطريقتين.**',
          'يضم الإصدار v0.50.4 ملف EXE للتثبيت على Windows، ومثبّتات PKG لنظام macOS على Apple silicon وعلى Intel، وحزم DEB وملفات AppImage لنظام Linux على x64 وarm64، والإضافة بصيغة ZIP. تقول صفحة التنزيل إن مثبّت Windows موقَّع رقميًا عبر SignPath Foundation وإن تطبيق macOS موقَّع وموثَّق (notarized).',
        ],
        columns: ['الطريقة', 'الحزمة'],
        rows: [
          { 'الطريقة': 'Windows', 'الحزمة': 'EXE للتثبيت (VB-CABLE يُثبَّت منفصلًا)' },
          { 'الطريقة': 'macOS (Apple silicon)', 'الحزمة': 'PKG' },
          { 'الطريقة': 'macOS (Intel)', 'الحزمة': 'PKG (x64)' },
          { 'الطريقة': 'Linux (x64 وarm64)', 'الحزمة': 'DEB أو AppImage' },
          { 'الطريقة': '[Chrome](https://chromewebstore.google.com/detail/sokuji-extension/ppmihnhelgfpjomhjhpecobloelicnak)', 'الحزمة': 'إضافة من Chrome Web Store' },
          { 'الطريقة': '[Edge](https://microsoftedge.microsoft.com/addons/detail/sokuji-ai-meeting-trans/dcmmcdkeibkalgdjlahlembodjhijhkm)', 'الحزمة': 'إضافة من Edge Add-ons' },
        ],
        note: 'نزّل من [صفحة إصدارات GitHub](https://github.com/kizuna-ai-lab/sokuji/releases/latest) أو من [صفحة التنزيل](https://sokuji.kizuna.ai/download) لدى المطوّر. لم تشغّل PromptQuorum المثبّتات ولم تتحقق من كونها موقَّعة أو موثَّقة؛ هذه الأقوال من المطوّر.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يحتاج Sokuji إلى Windows أو macOS أو Linux لتطبيق سطح المكتب، وإلى Chromium 116 أو أحدث للإضافة؛ ولا ينشر المطوّر حدًّا أدنى للذاكرة أو لوحدة GPU.**',
          'تسرد صفحة [Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) لدى المطوّر لتطبيق سطح المكتب نظام Windows 10 أو أحدث وmacOS 13 أو أحدث وLinux (يُوصى بـ Ubuntu 20.04 أو أحدث)، وتذكر كذلك اتصال نطاق عريض مستقرًا وميكروفونًا؛ وتقول صفحة الذكاء الاصطناعي المحلي لديه إن النماذج على الجهاز تعمل دون شبكة بعد تنزيلها. بحسب صفحة التنزيل، يحتاج الميكروفون الافتراضي على Windows إلى VB-CABLE يُثبَّت منفصلًا؛ وعلى macOS يأتي مشغّل الصوت داخل المثبّت؛ وعلى Linux ينشئ التطبيق الميكروفون الافتراضي عبر PulseAudio أو PipeWire ويحتاج إلى pulseaudio-utils. وتعمل الإضافة على مواقع الاجتماعات المدعومة فقط؛ أما لأي استخدام آخر فتحتاج إلى تطبيق سطح المكتب. تُنزَّل النماذج على الجهاز مرة واحدة، وبحسب المطوّر يكتشف التطبيق وحدة GPU لديك وينزّل حزمة المحرك المناسبة لها. لم تقِس PromptQuorum استهلاك الذاكرة ولا السرعة.',
        ],
        columns: ['البند', 'القيمة المعلنة'],
        rows: [
          { 'البند': 'سطح المكتب', 'القيمة المعلنة': 'Windows 10+ وmacOS 13+ وUbuntu 20.04+ (موصى به)' },
          { 'البند': 'الإضافة', 'القيمة المعلنة': 'Chrome وEdge، Chromium 116 أو أحدث' },
          { 'البند': 'صوت Windows', 'القيمة المعلنة': 'VB-CABLE يُثبَّت منفصلًا' },
          { 'البند': 'صوت Linux', 'القيمة المعلنة': 'PulseAudio أو PipeWire وpulseaudio-utils' },
          { 'البند': 'النماذج على الجهاز', 'القيمة المعلنة': 'تنزيل مرة واحدة؛ دون GPU باهظة (README)' },
          { 'البند': 'الذاكرة وGPU', 'القيمة المعلنة': 'غير منشورة' },
        ],
        note: 'تحتاج الترجمة إلى مزوّد: نماذج على الجهاز أو مفتاح API الخاص بك أو حساب Kizuna AI. وبحسب المطوّر لا يلزم أي منها للتثبيت، ولا يلزم حساب لاستخدام Sokuji بمفتاحك أو بنماذج على الجهاز.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**بُني Sokuji حول الترجمة الصوتية الفورية في الاجتماعات، وتحيط به الميزات الأخرى: الميكروفون الافتراضي والترجمة النصية واختيار المزوّد.** كل ما يلي أقوال من المطوّر مأخوذة من الموقع ومن README.',
        ],
        items: [
          'الترجمة في الاتجاهين: تحدّد لغتين فيكتشف Sokuji أيًّا منهما يُتحدَّث بها ويترجم في الاتجاهين؛ وينسب README هذا الوضع إلى Soniox ويذكر أنه يغطي أكثر من 60 لغة.',
          'ترجمة صوتك: يسمع الطرف الآخر الترجمة عبر ميكروفون افتراضي في Zoom وGoogle Meet وMicrosoft Teams وDiscord أو أي تطبيق يتيح لك اختيار ميكروفون.',
          'ترجمة ما يقوله الآخرون: تترجم الإضافة صوت علامة تبويب الاجتماع ويترجم تطبيق سطح المكتب صوت النظام، ترجمةً نصية فورية أو بقراءة بصوت عالٍ.',
          'وضع الترجمة النصية ومشاركتها: نص مترجم على الشاشة، يمكن مشاركته ليقرأه الطرف الآخر معك.',
          'نماذج على الجهاز: تعرّف على الكلام بنماذج من عائلة Whisper وغيرها، وترجمة بأزواج لغات Opus-MT ونماذج لغوية متعددة اللغات مثل Qwen وTranslateGemma، وتوليد صوت بمحركات مثل Piper وCoqui، وتعمل عبر WASM وWebGPU.',
          'مزوّدون سحابيون: OpenAI وGoogle Gemini وPalabra.ai وDoubao AST 2.0 وSoniox ونقاط وصول متوافقة مع OpenAI (لسطح المكتب فقط) وحساب Kizuna AI؛ ويذكر README استنساخ الصوت لدى Palabra.ai وDoubao AST 2.0 وSoniox.',
          'أدوات الصوت: كتم الضوضاء بالذكاء الاصطناعي وإلغاء الصدى وتمرير مباشر لسماع صوتك أنت.',
          'الواجهة: 30 لغة للواجهة، ووضع بسيط للإعداد ووضع متقدم مع عرض الموجة الصوتية.',
          'ملاحظات الاجتماعات: مع حساب Kizuna AI يقدّم المطوّر ملاحظات تُكتب من نص الجلسة، ويمرّ هذا النص عبر خادمه إلى OpenAI ولا يُحتفظ به، بحسب صفحة الخصوصية.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'ترجمة اجتماع تعني إرسال كلام الآخرين إلى المزوّد الذي تختاره، كما أن استنساخ الصوت يعالج صوت شخص ما. أبلغ المشاركين قبل الاستخدام، وراجع قواعد جهة عملك ومنصة الاجتماعات، واحصل على موافقة قبل استنساخ صوت أي شخص. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب المطوّر، يذهب محتوى الاجتماعات مباشرة من جهازك إلى مزوّد الذكاء الاصطناعي الذي تختاره ولا يمرّ عبر Kizuna AI، ويبقى على حاسوبك إذا استخدمت نماذج على الجهاز فقط؛ لم تفحص PromptQuorum حركة الشبكة ولا تستطيع تأكيد ذلك.**',
          'تسرد صفحة الخصوصية المؤرخة في 14 نوفمبر 2026 الاستثناءات. مع حساب Kizuna AI تمرّ عيّنة الصوت المسجَّلة لاستنساخ الصوت عبر خادم المطوّر في طريقها إلى Soniox ثم تُتلَف، ويمرّ نص جلسة تكتب Kizuna AI ملاحظات اجتماعها عبر خادمه إلى OpenAI ولا يُحتفظ به. وبدون حساب تستخدم مفتاحك أو نماذج على الجهاز.',
          'محركات «Online» في الاستدلال المحلي، أي Edge TTS للصوت وBing Translator، لا تعمل على حاسوبك. وبحسب المطوّر تُستخدم تلقائيًا حين لا يكون هناك نموذج على الجهاز جاهز، أو حين تختارها، ثم يُرسَل النص المراد نطقه أو ترجمته إلى Microsoft. أما الاتصالات الأخرى التي لا تحمل محتوى اجتماعات فهي تنزيل النماذج وفحص التحديثات وقياس زمن الاستجابة إلى خدمة Soniox أو Qwen التي تستخدمها، وإحصاءات الاستخدام وتقارير الأخطاء.',
          'بحسب المطوّر، تُرسَل إحصاءات الاستخدام وتقارير الأخطاء إلى PostHog في الولايات المتحدة، وبعد تسجيل الدخول تُربَط بمعرّف حسابك وبريدك واسمك؛ وتقول السياسة إنه لا يوجد حاليًا مفتاح داخل التطبيق لإيقافها. ويخزّن حساب Kizuna AI عنوان بريد إلكتروني وسجلات تسجيل الدخول والرصيد والاستخدام وبيانات الدفع الواردة من Stripe؛ ويذكر المطوّر أنه لا يبيع البيانات ولا يؤجّرها ولا يدرّب نماذج عليها.',
          'الشيفرة المصدرية للتطبيقات علنية على GitHub، لذا يمكن تدقيق تدفق البيانات؛ أما خادم الحسابات لدى المطوّر فليس مفتوح المصدر.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Sokuji من يتحدثون عبر حاجز لغوي ويريدون ترجمة داخل تطبيقات الاجتماعات التي يستخدمونها أصلًا.**',
        ],
        items: [
          'المشاركون في اجتماعات ثنائية اللغة الذين يريدون أن يسمع الطرف الآخر صوتًا مترجمًا عبر ميكروفون افتراضي، في أي تطبيق وليس في المتصفح وحده.',
          'المستمعون إلى المحاضرات أو الكلمات أو مقاطع الفيديو الذين يريدون ترجمة نصية فورية لما يسمعونه.',
          'المتحدثون الذين يريدون أن يقرأ جمهورهم ترجمة نصية لحديثهم هم.',
          'المستخدمون المهتمون بالخصوصية الذين يريدون، بحسب المطوّر، تجربة التعرّف على الكلام والترجمة وتوليد الصوت على جهازهم دون مفتاح.',
          'القرّاء الذين يفضّلون تطبيقًا شيفرته علنية بترخيص AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب Sokuji بعض الحالات، وتبقى عدة تفاصيل غير متحقَّق منها.**',
        ],
        items: [
          'لا يناسب: الحالات التي يهمّ فيها خطأ الترجمة. تقول صفحة المطوّر نفسه إن النموذج الكبير المستضاف لا يزال متقدّمًا على النماذج على الجهاز في الدقة وزمن الاستجابة، وإنك في مكالمة عالية الأهمية سترغب غالبًا في أحدها.',
          'لا يناسب: من يحتاج إلى إيقاف إحصاءات الاستخدام. تقول سياسة الخصوصية المؤرخة في 14 نوفمبر 2026 إنه لا يوجد حاليًا إعداد داخل التطبيق لتعطيلها.',
          'غير متحقَّق منه: دقة التعرّف وجودة الترجمة وزمن الاستجابة وسرعة النماذج على الجهاز على الحواسيب المحمولة المعتادة. لم تشغّل PromptQuorum التطبيق.',
          'غير متحقَّق منه: القول إنه لا شيء يغادر الجهاز عند استخدام نماذج على الجهاز، إلى جانب محركات Microsoft عبر الإنترنت وتنزيل النماذج وفحص التحديثات وإحصاءات الاستخدام؛ لم تفحص PromptQuorum حركة الشبكة.',
          'غير متحقَّق منه: هل مثبّت Windows موقَّع رقميًا وهل تطبيق macOS موثَّق؛ هذه أقوال المطوّر.',
          'غير واضح: لا يزال المستودع يحتوي على ملف سياسة خصوصية للإضافة مؤرخ في 3 يونيو 2025 يصف التحليلات بأنها اختيارية مع مفتاح داخل التطبيق، بينما تقول السياسة الحالية إنه لا يوجد مفتاح؛ وتعامل PromptQuorum السياسة الحالية على أنها السارية.',
          'غير متحقَّق منه: تشير سياسة الخصوصية إلى تطبيق جوال، لكن لا صفحة التنزيل ولا README تسردان تنزيلًا للجوال، لذلك تعامل PromptQuorum أداة Sokuji على أنها لسطح المكتب والمتصفح فقط.',
          'غير متحقَّق منه: تفاصيل الشركة بخلاف اسم Kizuna AI Lab (بحسب صفحة Commerce Disclosure يُكشف عن العنوان عند الطلب؛ ولم نجد رقم تسجيل)، وأعداد المستخدمين والمراجعات المستقلة؛ ولم تبحث PromptQuorum عن مراجعات مستقلة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Sokuji مقابل البدائل',
        itemHeadings: true,
        content: [
          '**يتقاطع Sokuji مع أدوات تفرّغ الكلام نصًّا أو تضيف إليه ترجمة نصية، لكنه مصمَّم للترجمة الفورية في الاجتماعات؛ ولم تقارنه PromptQuorum بها عمليًا.** الأدوات التالية موجودة في الدليل، وتُوصَف اعتمادًا على مراجعاتها الخاصة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'Sokuji', 'المذكور في المصادر': 'AGPL-3.0؛ سطح مكتب + متصفح؛ ترجمة فورية في الاتجاهين' },
          { 'الأداة': '[Buzz](/ar/power-local-llm/buzz-captions-review)', 'المذكور في المصادر': 'MIT؛ Mac/Windows/Linux؛ تفريغ Whisper محلي' },
          { 'الأداة': '[Sablate](/ar/power-local-llm/sablate-review)', 'المذكور في المصادر': 'مغلق المصدر؛ Windows/Mac؛ ترجمات مصاحبة وترجمة' },
          { 'الأداة': '[Minutes](/ar/power-local-llm/minutes-review)', 'المذكور في المصادر': 'MIT؛ Mac/Windows؛ ملاحظات اجتماعات من التفريغ' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Sokuji دون اتصال بالإنترنت؟',
            a: 'بحسب المطوّر، نعم بعد تنزيل النماذج على الجهاز: يعمل التعرّف على الكلام والترجمة وتوليد الصوت حينها على حاسوبك دون شبكة. وبحسب صفحة الخصوصية، فمحركات «Online»، أي Edge TTS وBing Translator، تحتاج إلى الشبكة وترسل نصًّا إلى Microsoft، ولا يزال التطبيق يجري اتصالات للتحديثات والإحصاءات. لم تختبر PromptQuorum ذلك.',
          },
          {
            q: 'هل Sokuji مجاني؟',
            a: 'بحسب المطوّر، التطبيق مجاني ومفتوح المصدر بترخيص AGPL-3.0، ولا تكلّف النماذج على الجهاز شيئًا. ويحاسب المزوّدون السحابيون بأنفسهم إذا استخدمت مفتاحك، أو يُخصم من رصيد مدفوع مسبقًا بالدولار الأمريكي إذا استخدمت حساب Kizuna AI.',
          },
          {
            q: 'مع أي تطبيقات اجتماعات يعمل Sokuji؟',
            a: 'يسجّل تطبيق سطح المكتب نفسه ميكروفونًا، فيمكن لأي تطبيق يتيح لك اختيار ميكروفون أن يستخدمه. وبحسب صفحة التنزيل، صُممت الإضافة لتطبيقات Zoom وGoogle Meet وMicrosoft Teams وSlack وDiscord وJitsi Meet وWhereby وGather Town وYandex Telemost.',
          },
          {
            q: 'هل يرسل Sokuji اجتماعاتي إلى Kizuna AI؟',
            a: 'بحسب المطوّر، لا: يذهب محتوى الاجتماعات مباشرة إلى المزوّد الذي اخترته. والاستثناءات التي يذكرها هي عيّنات استنساخ الصوت ونصوص الجلسات الخاصة بملاحظات الاجتماعات مع حساب Kizuna AI، وتمرّ عبر خادمه ولا يُحتفظ بها. لم تفحص PromptQuorum حركة الشبكة.',
          },
          {
            q: 'هل يمكنني إيقاف إحصاءات الاستخدام؟',
            a: 'تقول سياسة الخصوصية المؤرخة في 14 نوفمبر 2026 إنه لا يوجد حاليًا مفتاح داخل التطبيق لإيقافها. ويصف ملف سياسة أقدم في المستودع خيارًا للانسحاب، فتحقق من الإعداد داخل التطبيق قبل أن تعتمد على أيٍّ من القولين.',
          },
          {
            q: 'كم مرة يُحدَّث Sokuji؟',
            a: 'يسرد GitHub الإصدار 0.50.1 في 10 نوفمبر 2026، والإصدار 0.50.2 في 11 نوفمبر 2026، والإصدار 0.50.3 في 14 نوفمبر 2026، والإصدار 0.50.4 في 16 نوفمبر 2026، وكان آخر commit في الفرع الرئيسي في 18 نوفمبر 2026.',
          },
          {
            q: 'على أي أنظمة يعمل Sokuji؟',
            a: 'بحسب صفحة «Commerce Disclosure» لدى المطوّر، يتطلب تطبيق سطح المكتب Windows 10 أو أحدث، أو macOS 13 أو أحدث، أو Linux (يُوصى بـ Ubuntu 20.04 أو أحدث). وتتطلب إضافة Chrome وEdge إصدار Chromium 116 أو أحدث. لا ينشر المطوّر حدًا أدنى للذاكرة أو لوحدة GPU، ولم تقس PromptQuorum استهلاك الذاكرة ولا السرعة.',
          },
          {
            q: 'هل أحتاج إلى حساب أو مفتاح API لاستخدام Sokuji؟',
            a: 'بحسب المطوّر، لا حاجة إلى حساب لاستخدام Sokuji بمفتاح API خاص بك أو بنماذج على الجهاز، ولا يلزم أيٌّ منهما لمجرد التثبيت. وللترجمة تحتاج إلى أحد ثلاثة مصادر: نماذج على الجهاز، أو مفتاح API خاص بك لدى مزوّد سحابي، أو حساب Kizuna AI مدفوع مسبقًا.',
          },
          {
            q: 'ما مزوّدو الترجمة الذين يدعمهم Sokuji؟',
            a: 'يذكر ملف README ووثائق المطوّر كلًّا من OpenAI وGoogle Gemini وPalabra.ai وDoubao AST 2.0 وSoniox وQwen LiveTranslate، ونقاط وصول متوافقة مع OpenAI (على سطح المكتب فقط)، وحساب Kizuna AI، والاستدلال المحلي على الجهاز. ويُذكر استنساخ الصوت لـ Palabra.ai وDoubao AST 2.0 وSoniox. وبحسب المطوّر، يذهب محتوى الاجتماعات بعدها إلى المزوّد الذي تختاره.',
          },
          {
            q: 'ماذا يفعل الوضع ثنائي الاتجاه؟',
            a: 'بحسب المطوّر، تحدّد لغتين فيتعرّف Sokuji على اللغة المنطوقة ويترجم في الاتجاهين، بصوت مترجم أو بترجمة نصية فورية. ينسب ملف README هذا الوضع إلى Soniox ويقول إنه يغطي أكثر من 60 لغة. لم تختبر PromptQuorum التعرّف على اللغة ولا جودة الترجمة.',
          },
          {
            q: 'هل يحتاج Sokuji إلى برامج صوت إضافية؟',
            a: 'بحسب صفحة التنزيل، يحتاج الميكروفون الافتراضي على Windows إلى VB-CABLE الذي يُثبَّت بشكل منفصل؛ وعلى macOS يأتي مشغّل الصوت ضمن المثبّت؛ وعلى Linux ينشئ التطبيق الميكروفون الافتراضي عبر PulseAudio أو PipeWire ويحتاج إلى pulseaudio-utils. وتعمل الإضافة فقط على مواقع الاجتماعات المدعومة، لذا تحتاج إلى تطبيق سطح المكتب مع التطبيقات الأخرى.',
          },
          {
            q: 'ما مدى جودة النماذج على الجهاز مقارنة بالنماذج السحابية؟',
            a: 'لم تقس PromptQuorum ذلك. وتقول صفحة Local AI لدى المطوّر نفسه إن النموذج الكبير المستضاف لا يزال متقدمًا على النماذج على الجهاز في الدقة وزمن الاستجابة، وإنك على الأرجح ستريد واحدًا منها لمكالمة عالية الأهمية. تُنزَّل النماذج على الجهاز مرة واحدة، وبحسب ملف README لا تحتاج إلى وحدة GPU باهظة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Sokuji نظرة إذا كنت تعقد اجتماعات ثنائية اللغة وتريد ترجمة فورية في الاتجاهين عبر تطبيق لسطح المكتب أو إضافة للمتصفح، مع الاختيار بين مزوّدين سحابيين و، بحسب المطوّر، نماذج على الجهاز.**',
          'على الورق يغطي الكثير: ميكروفون افتراضي لأي تطبيق، وترجمة نصية، واكتشاف اللغة المنطوقة في الاتجاهين، وعدة مزوّدين سحابيين، ونماذج محلية، وشيفرة مفتوحة. التطوير نشط، مع أربعة إصدارات بين 10 و16 نوفمبر 2026.',
          'المقايضات حقيقية: يقول المطوّر نفسه إن جودة النماذج على الجهاز تتأخر عن النماذج الكبيرة المستضافة، وتقول السياسة الحالية إنه لا يمكن إيقاف إحصاءات الاستخدام داخل التطبيق، ولم تختبر PromptQuorum أي شيء. جرّبه في مكالمة قليلة الأهمية وتحقق من التعرّف والترجمة في اللغتين قبل أن تعتمد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Sokuji](https://sokuji.kizuna.ai) — الميزات وسيناريوهات الاستخدام، روجع في 18 نوفمبر 2026.',
          '[صفحة التنزيل](https://sokuji.kizuna.ai/download) — المنصات ومتطلبات التثبيت وأقوال التوقيع، روجعت في 18 نوفمبر 2026.',
          '[صفحة الذكاء الاصطناعي المحلي](https://sokuji.kizuna.ai/local-ai) — النماذج على الجهاز ومقارنة المطوّر بينها وبين النماذج السحابية، روجعت في 18 نوفمبر 2026.',
          '[ملخص الخصوصية](https://sokuji.kizuna.ai/privacy) — وجهة محتوى الاجتماعات، روجع في 18 نوفمبر 2026.',
          '[سياسة الخصوصية](https://sokuji.kizuna.ai/docs/privacy) — البيانات المجمَّعة ومدد الاحتفاظ، مؤرخة في 14 نوفمبر 2026، روجعت في 18 نوفمبر 2026.',
          '[شروط الخدمة](https://sokuji.kizuna.ai/docs/terms) — مزوِّد الخدمة والرصيد والقانون الواجب التطبيق والاختصاص، روجعت في 18 نوفمبر 2026.',
          '[Commerce Disclosure](https://sokuji.kizuna.ai/docs/commerce) — الجهة المشغِّلة وشروط الرصيد المدفوع مسبقًا ومتطلبات النظام (يقدّمه المطوّر بوصفه إشعارًا بموجب القانون الياباني)، روجعت في 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/kizuna-ai-lab/sokuji) — الترخيص وتاريخ الإنشاء وآخر commit، روجع في 18 نوفمبر 2026.',
          '[README](https://github.com/kizuna-ai-lab/sokuji#readme) — الميزات والمزوّدون والتثبيت وملاحظات الخصوصية، روجع في 18 نوفمبر 2026.',
          '[إصدارات GitHub](https://github.com/kizuna-ai-lab/sokuji/releases) — تواريخ الإصدار وحزم v0.50.4، روجعت في 18 نوفمبر 2026.',
          '[ملف سياسة الخصوصية الأقدم](https://github.com/kizuna-ai-lab/sokuji/blob/main/docs/privacy-policy.html) — سياسة خصوصية الإضافة المؤرخة في 3 يونيو 2025، روجعت في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أدوات الصوت والكلام المحلية مقارنةً](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والتعرّف على الكلام ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Buzz](/ar/power-local-llm/buzz-captions-review) — تفريغ Whisper محلي على سطح المكتب.',
          '[مراجعة Sablate](/ar/power-local-llm/sablate-review) — ترجمات مصاحبة وترجمة للفيديو على Windows وMac.',
          '[مراجعة Minutes](/ar/power-local-llm/minutes-review) — ملاحظات اجتماعات من التفريغ، مجاني ومفتوح المصدر.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
}
