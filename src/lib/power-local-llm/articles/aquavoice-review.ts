// AquaVoice Review: voice dictation for AI prompts
// Slug: aquavoice-review
// Category: Voice, Speech & Multimodal
// DISCLOSURE: AquaVoice gave PromptQuorum free access to the product. No payment, no commission.
// Every locale block carries `disclosureNote` (rendered under the third-party-link banner) and
// `affiliateDisclosure: true`. Do NOT add sponsoredSlot or affiliateLinks; do not say "sponsored"
// or "affiliate" — neither is true. Links to aquavoice.com get rel="sponsored nofollow" via
// SPONSORED_HOSTS in PowerLocalLLMPostClient.tsx.
// Product facts verified on 2026-10-03 against aquavoice.com, its privacy policy (effective
// 2026-07-29), its terms of service and its iOS App Store listing. The company is "Aqua Voice, Inc."
// (terms: binding arbitration in Delaware, US; third-party profiles: San Francisco, YC W24). No
// source states Singapore — do NOT write Singapore. No page states where data is hosted or
// processed, no EU hosting is mentioned anywhere, and sub-processors for transcription are not
// named. The review says exactly that and tells readers to assess confidential data individually.
// Usage claims are the author's own informal experience, not a benchmark.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Voice, Speech & Multimodal',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-03',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    educationalLevel: 'Beginner',
    audience: 'People who write many AI prompts and messages and want to dictate them instead of typing',
    primaryTerm: 'AquaVoice',
    affiliateDisclosure: true,
    disclosureNote: 'Disclosure: AquaVoice gave PromptQuorum free access to the product for this review. PromptQuorum receives no payment and no commission from AquaVoice. The opinions and the usage described here are the author\'s own.',
    title: 'AquaVoice Review: Voice Dictation for AI Prompts',
    seoTitle: 'AquaVoice Review: Voice Dictation for AI',
    intro: "AquaVoice (Aqua) is a voice-dictation app at [aquavoice.com](https://aquavoice.com/) that turns speech into text in real time and inserts it into the app you are working in. This review comes from the author's own daily use for dictating prompts into Claude Code and messages into WhatsApp. Its central argument is simple: speaking is faster than typing, so a dictated request carries more context, and more context gives an AI a better answer.",
    metaDescription: 'AquaVoice review: dictating prompts into Claude Code and WhatsApp, why speaking gives AI more context, multilingual results, and the limits found in daily use.',
    readTime: '7 min read',
    targetKeywords: [
      'aquavoice review',
      'aqua voice review',
      'voice dictation for ai prompts',
      'dictate prompts claude code',
      'speech to text for ai context',
    ],
    current_models_mentioned: ['Avalon'],
    current_hardware_mentioned: [],
    leadAnswerBlock: "**AquaVoice is a voice-dictation app that inserts what you say, as text, into whichever app is active — and for AI work its value is context: you speak far more detail per request than you would type.** In the author's own use on a MacBook it was stable, handled German, English, French and Russian, and had two quirks: the target window must be active, and it occasionally drifted into translation mode until the language was locked in settings.",
    quickAnswerTop: {
      en: {
        question: 'Is AquaVoice worth using to dictate AI prompts?',
        answer: "In the author's own daily use, yes: dictation is faster than typing, so each prompt to an AI carries more context, and more context produces better answers. The text capture was reliable; the two things to know are that the target window must be active and that the language should be locked to avoid occasional translation-mode drift.",
        bullets: [
          'Use: dictating prompts into Claude Code and messages into WhatsApp, basic dictation features only, on a MacBook running macOS',
          'Stability: works perfectly on the author\'s Mac; voice-to-text capture was reliable',
          'Languages: German and English used regularly; French and Russian tried and understood; the site lists 49 languages',
          'Quirk 1: the window you want the text to land in must be active, or the text has nowhere to go',
          'Quirk 2: two or three times it slipped into translation mode; locking the language in settings reduced this a lot',
          'Privacy: your voice data leaves your device; the hosting location is not published and no EU hosting is stated, so confidential data needs an individual review first',
          'Pricing: a free allowance of 1,000 words, then paid tiers; current prices are on [aquavoice.com](https://aquavoice.com/)',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Is AquaVoice?', anchor: 'what-is-aquavoice' },
      { label: 'Why Dictation Gives AI More Context', anchor: 'why-dictation-gives-ai-more-context' },
      { label: 'Daily Use: What Works and What Does Not', anchor: 'daily-use' },
      { label: 'Pricing', anchor: 'aquavoice-pricing' },
      { label: 'Download AquaVoice', anchor: 'download-aquavoice' },
      { label: 'Platforms and Privacy', anchor: 'platforms-privacy' },
      { label: 'Who Should Use AquaVoice', anchor: 'who-should-use-aquavoice' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'Common Mistakes', anchor: 'common-mistakes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR: AquaVoice for AI Dictation',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AquaVoice is a voice-dictation app that inserts spoken text into the active app, and its main benefit for AI work is that speaking lets you give a model much more context per request than typing does.' },
          { type: 'plain-terms', text: 'You talk, AquaVoice types for you in whatever window is active, such as Claude Code or WhatsApp. Because talking is quicker than typing, you explain more, and an AI that knows more about your situation answers better.' },
        ],
        items: [
          'Core idea: speaking is faster than typing and lets you express your views better, so each AI request carries more context and gets a better result',
          'Author use: basic dictation into Claude Code, WhatsApp and other AI tools on a MacBook; works perfectly, with reliable voice-to-text capture',
          'Languages: German, English, French and Russian all understood in the author\'s tests',
          'Limits: the target window must be active; occasional drift into translation mode, reduced by locking the language in settings',
          'Privacy: audio and text are sent to AquaVoice\'s servers; where they are hosted is not published and EU hosting is not stated, so check confidential use individually first',
          'Free allowance of 1,000 words; paid tiers listed on [aquavoice.com](https://aquavoice.com/)',
        ],
        callouts: [
          { type: 'note', text: 'AquaVoice gave PromptQuorum free access for this review and pays nothing else. If you prefer fully local speech-to-text, see the [MacWhisper review](/power-local-llm/macwhisper-review).' },
        ],
      },
      overview: {
        id: 'what-is-aquavoice',
        title: 'What Is AquaVoice?',
        content: "AquaVoice, branded Aqua, is a dictation app at [aquavoice.com](https://aquavoice.com/). Its site describes it as turning your voice into clear text in real time, \"for everything from AI prompts to essays\", using its own speech model called Avalon. On Mac you hold the space key and speak; on other devices you press and speak. The text then appears in the app you are using, including editors and AI tools such as Claude, Cursor and ChatGPT, plus messaging apps.",
        items: [
          'Real-time dictation: speech becomes text as you talk, inserted into the active app',
          'Languages: the site states 49 supported languages',
          'Platforms: macOS (primary), iOS, Android and Windows, per the site',
          'Tiers: Free (1,000 words), Pro (unlimited words, custom instructions), Max (adds Realtime Mode and voice commands), Business (team plans)',
          'Privacy: dictation is sent to AquaVoice\'s servers; an optional Privacy Mode limits storage of transcripts, and the hosting location is not published',
        ],
        note: 'Feature list taken from [aquavoice.com](https://aquavoice.com/) on 2026-10-03. The author used only the basic dictation function; Realtime Mode, voice commands and custom instructions were not tested for this review.',
      },
      whyDictation: {
        id: 'why-dictation-gives-ai-more-context',
        title: 'Why Dictation Gives AI More Context',
        content: "**Speaking is faster than typing, and most people express their views better out loud than in writing, so a dictated prompt contains more of what the AI needs to know.** A model can only work with the context in the request. When writing is slow, people shorten the request, leave out background and constraints, and get a more generic answer. When speaking is easy, they explain the situation, the goal, what they already tried and what matters — a bigger context, which tends to give better information and a better result.",
        items: [
          'Typing pressure: slow typing makes you cut background and detail from a prompt',
          'Speaking habit: you naturally explain the situation, the reason and the goal',
          'Result: more context in each request, so the AI has less to guess',
          'Where it helps most: long coding tasks in Claude Code, messages that need nuance, and any prompt where the "why" matters',
        ],
        note: "This is the author's reasoning from daily use, not a measured study. AquaVoice's own site cites roughly 230 words per minute for dictation versus about 40 for typing; that is the vendor's figure and was not independently verified.",
      },
      dailyUse: {
        id: 'daily-use',
        title: 'Daily Use: What Works and What Does Not',
        content: "The author uses AquaVoice on a MacBook running macOS for basic dictation: speaking text and having it inserted into WhatsApp, Claude Code and other AI tools. It works perfectly on that setup. This is informal daily use on the basic functions, not a benchmark.",
        subsections: [
          {
            title: 'What works',
            list: [
              'Stability: no problems in the author\'s daily use on the MacBook; the tool runs totally stable',
              'Capture: the copying of the voice text works perfectly',
              'Languages: German and English without problems; French understood in light testing; Russian also understood',
            ],
          },
          {
            title: 'What to watch for',
            list: [
              'Active window: the window where the text should go must be active. If it is not, AquaVoice does not know where to put the text',
              'Translation drift: two or three times, while dictating in one language, the output came out translated into another. The cause is not yet known to the author',
              'Fix that helped: AquaVoice has settings to lock dictation to one language, and doing so reduces the drift a lot',
            ],
          },
        ],
        note: 'These observations are from one person\'s informal use and may not match your setup. The author\'s platform is a MacBook on macOS; other platforms, versions and language mixes may behave differently.',
      },
      pricing: {
        id: 'aquavoice-pricing',
        itemHeadings: true,
        title: 'How Much Does AquaVoice Cost?',
        content: "**AquaVoice has a free allowance and paid tiers; the only prices found are the in-app purchase prices on its iOS App Store listing, so check [aquavoice.com](https://aquavoice.com/) for current desktop pricing.** The free tier gives 1,000 words with the Avalon model.",
        columns: ['Tier', 'What the site says'],
        rows: [
          { 'Tier': 'Free', 'What the site says': '1,000 free words with Avalon transcription' },
          { 'Tier': 'Pro', 'What the site says': 'Unlimited words with custom instructions; iOS App Store: $12.99 monthly or $119 per year (US store)' },
          { 'Tier': 'Max', 'What the site says': 'Pro features plus Realtime Mode and voice commands; iOS App Store: $39.99 monthly or $374.99 per year (US store)' },
          { 'Tier': 'Business', 'What the site says': 'Team plans with SSO/SAML, advanced reporting, zero data retention' },
        ],
        note: 'Tier descriptions from [aquavoice.com](https://aquavoice.com/) and prices from the US iOS App Store listing, both checked on 2026-10-03. Desktop prices were not stated on the pages reviewed and may differ from the iOS prices.',
      },
      downloads: {
        id: 'download-aquavoice',
        title: 'Download AquaVoice',
        content: "**Sign up and download from the official site.** This review links to AquaVoice's own pages; always confirm you are on the official domain before signing in.",
        columns: ['What', 'Link'],
        rows: [
          { 'What': 'Official site', 'Link': '[aquavoice.com](https://aquavoice.com/)' },
          { 'What': 'Sign up and download', 'Link': '[app.aquavoice.com/sign-up](https://app.aquavoice.com/sign-up)' },
        ],
        note: 'PromptQuorum has no commercial arrangement beyond free access to the product; these are plain links and earn no commission.',
      },
      platformsPrivacy: {
        id: 'platforms-privacy',
        itemHeadings: true,
        title: 'Platforms and Privacy',
        content: "**AquaVoice lists macOS, iOS, Android and Windows, and it is a service that sends your voice data to its servers, so treat confidential content with care.** The author runs it on a MacBook under macOS, where it works perfectly. The company is Aqua Voice, Inc.; its terms of service place disputes in binding arbitration in Delaware, United States, and public company profiles describe a San Francisco base. None of AquaVoice's own pages reviewed state where its servers are or where audio and transcripts are processed, no EU hosting or data-residency option is mentioned, and the speech and AI sub-processors involved in transcription are not named.",
        columns: ['Question', 'What the published pages say'],
        rows: [
          { 'Question': 'Does data leave my device?', 'What the published pages say': 'Yes: the privacy policy refers to transcript data stored on AquaVoice\'s servers when Privacy Mode is disabled, and the iOS App Store labels list audio data as user content linked to you' },
          { 'Question': 'Where is it hosted?', 'What the published pages say': 'Not stated: no hosting provider, country or region is published' },
          { 'Question': 'Is EU hosting offered?', 'What the published pages say': 'Not stated anywhere reviewed' },
          { 'Question': 'Which company is responsible?', 'What the published pages say': 'Aqua Voice, Inc.; terms point to arbitration in Delaware, US; registered address not published' },
          { 'Question': 'Is my audio used to train AI models?', 'What the published pages say': 'The terms say content is not used to train, or allowed to be used by third parties to train, AI models unless you explicitly agree' },
          { 'Question': 'What does Privacy Mode do?', 'What the published pages say': 'With it enabled, transcript data is not collected; the default setting is not stated' },
          { 'Question': 'Zero data retention?', 'What the published pages say': 'Listed for the Business plan; not stated for individual plans' },
        ],
        note: 'Based on [aquavoice.com](https://aquavoice.com/), its privacy policy (effective 2026-07-29), its terms of service and its iOS App Store listing, checked on 2026-10-03. For confidential, client, health or personal data, do not assume it is safe to use: review it individually before use. Ask AquaVoice for its data-processing terms, hosting location, sub-processor list and international-transfer safeguards, involve your data-protection officer where GDPR applies, and enable Privacy Mode. This is not legal advice. For fully on-device transcription see [MacWhisper](/power-local-llm/macwhisper-review).',
      },
      whoShouldUse: {
        id: 'who-should-use-aquavoice',
        title: 'Who Should Use AquaVoice?',
        content: "**AquaVoice suits people who write many prompts or messages and want to give AI more context without typing it all.** It is a poor fit if your data must stay on your device or in a specific jurisdiction, unless an individual review says otherwise.",
        subsections: [
          {
            title: 'Use AquaVoice if',
            list: [
              'You work with AI tools such as Claude Code and want to give longer, richer requests',
              'You send many messages (for example in WhatsApp) and prefer talking to typing',
              'You switch between languages such as German and English',
            ],
          },
          {
            title: 'Avoid AquaVoice if',
            list: [
              'Your content is confidential, regulated or must stay in the EU; AquaVoice sends data to servers whose location is not published, so review it individually first or use a local tool',
              'You expect text to land in an app that is not active; the target window must be in front',
            ],
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives',
        content: "AquaVoice is a dictation tool. MacWhisper is the closest same-category review on this site, but it targets a different job: local transcription of files and meetings, plus dictation on Mac. The open-source options below are developer tools.",
        columns: ['Tool', 'Main job', 'Where it runs', 'Platforms'],
        rows: [
          { 'Tool': 'AquaVoice', 'Main job': 'Real-time dictation into any app', 'Where it runs': 'AquaVoice servers (location not published)', 'Platforms': 'macOS, iOS, Android, Windows' },
          { 'Tool': '[MacWhisper](/power-local-llm/macwhisper-review)', 'Main job': 'Local transcription of files and meetings, plus dictation', 'Where it runs': 'On your Mac', 'Platforms': 'macOS' },
          { 'Tool': '[whisper.cpp](/power-local-llm/whisper-cpp-review)', 'Main job': 'Developer speech-to-text library', 'Where it runs': 'On your device', 'Platforms': 'Mac, Windows, Linux' },
          { 'Tool': '[faster-whisper](/power-local-llm/faster-whisper-review)', 'Main job': 'Python speech-to-text library', 'Where it runs': 'On your device', 'Platforms': 'Mac, Windows, Linux' },
        ],
        note: 'The author has used AquaVoice but did not run a head-to-head test against the others, so this table compares what each tool is for, not which is better.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Using AquaVoice',
        content: 'Most problems come from the active-window rule and from leaving the language on automatic.',
        subsections: [
          {
            title: 'Mistake 1: Dictating while another window is active',
            content: 'The text goes to the active window. Click into the app where the text should land before you start speaking.',
          },
          {
            title: 'Mistake 2: Leaving the language unlocked when you only use one',
            content: 'Occasional translation-mode drift happened in the author\'s use. Locking dictation to one language in settings reduced it a lot.',
          },
          {
            title: 'Mistake 3: Treating it as a local or EU-hosted tool',
            content: 'Your voice data is sent to AquaVoice\'s servers, their location is not published and no EU hosting is stated. Review confidential use individually, check the privacy documentation and enable Privacy Mode before dictating sensitive content.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Why dictate prompts instead of typing them?', a: 'Speaking is faster than typing, so you give the AI more context per request, and more context generally gives a better result.' },
          { q: 'Does AquaVoice work in German and French?', a: 'In the author\'s use it handled German and English well and understood French and Russian; the site lists 49 languages.' },
          { q: 'Why did my dictation come out in another language?', a: 'The author saw this two or three times; locking dictation to a single language in settings reduced it a lot. The cause is not yet known.' },
          { q: 'Why did the text not appear anywhere?', a: 'The window where the text should go must be active; otherwise AquaVoice does not know where to put it.' },
          { q: 'Is AquaVoice free?', a: 'It has a free allowance of 1,000 words; unlimited use needs a paid tier, with current prices on [aquavoice.com](https://aquavoice.com/).' },
          { q: 'Is my dictated data sent to the cloud, and where is it hosted?', a: 'Yes, it is sent to AquaVoice\'s servers; the hosting location is not published and EU hosting is not stated, so review confidential use individually first.' },
          { q: 'Can I dictate confidential data with AquaVoice?', a: 'Not by default: assess it individually first, including its data-processing terms, hosting location and sub-processors, and enable Privacy Mode.' },
          { q: 'Was this review paid for?', a: 'AquaVoice gave PromptQuorum free access to the product; PromptQuorum receives no payment and no commission.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://aquavoice.com/', title: 'AquaVoice official site', description: 'Product description, platforms, tiers, languages and Privacy Mode.' },
          { url: 'https://app.aquavoice.com/sign-up', title: 'AquaVoice sign-up', description: 'Official sign-up and download entry point.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[MacWhisper Review: Local Speech-to-Text for Mac](/power-local-llm/macwhisper-review) — fully local transcription and dictation on Mac.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — free, open-source speech-to-text for developers.',
          '[faster-whisper Review](/power-local-llm/faster-whisper-review) — a Python speech-to-text library.',
        ],
      },
    },
  },
}
