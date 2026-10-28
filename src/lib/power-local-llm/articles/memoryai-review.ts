// MemoryAI Review: Free Offline AI Chat for iPhone and Android
// Slug: memoryai-review
// Companion to: private-mind-review, pocketpal-ai-review, off-grid-ai-review, google-ai-edge-gallery-review,
// best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026
// Sources: App Store + Google Play listings, the developer's website / privacy policy and the public feedback
// repository, all checked 2026-10-19 and re-checked 2026-10-23 (both stores on 1.0.56; App Store on 1.0.60 since 2026-10-25, re-checked 2026-10-28) — no hands-on testing. The developer wrote to PromptQuorum on 2026-10-18 asking
// for inclusion; every fact below was re-checked against those primary sources, not taken from the message.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-en.webp',
    title: 'MemoryAI Review: Free Offline AI Chat for iPhone and Android',
    seoTitle: 'MemoryAI Review: Free Offline AI Chat App for Phones',
    intro:
      'MemoryAI is an offline chat app for iPhone and Android from Alessandro Facchini (trading as Facchinits), an independent developer in Italy. It runs open-weight language models on the phone through two engines, llama.cpp and Google\'s LiteRT, and was first released on the App Store on 30 March 2026. This review reflects its store listings, website and privacy policy as checked on 23 October 2026.',
    metaDescription:
      'MemoryAI review: free, closed-source offline AI chat for iPhone and Android with document Q&A, editable Agent Memory and voice. Privacy and limits.',
    twitterDescription:
      'MemoryAI review: a free, closed-source offline AI chat app for iPhone and Android with document Q&A, editable on-device memory, hands-free voice and parental controls. What the listings and privacy policy say.',
    audience:
      'iPhone and Android users who want a free chat app that runs language models on the device, and who need to know what stays offline, what it sends out, and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI review',
    targetKeywords: [
      'memoryai app review',
      'memoryai offline private ai',
      'offline ai chat app iphone android',
      'on-device ai agent memory',
      'offline ai chat app for kids',
      'gguf import mobile app',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (version 1.0.60 on Android and iPhone as of 25 October 2026) pairs an editable on-device memory with a PIN-locked Kid Mode in a free chat app that needs no account.** Models are downloaded once from Hugging Face and then run offline. Usage events and crash reports without chat content do leave the phone, so read the privacy section before relying on the "no tracking" wording.',
    quickAnswerTop: {
      en: {
        question: 'Is MemoryAI really offline and free?',
        answer:
          'Per its listings, yes for the core features: after a one-time model download, chat, document questions and voice run on the phone, with no ads and no in-app purchases. Its privacy policy adds that usage events and crash reports without chat content are sent out.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) and the [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat with GGUF and LiteRT models such as Gemma, Qwen, Llama, Phi and DeepSeek.',
          'Optional Agent Memory that you can view, edit and delete, plus document and image questions.',
          'Parental controls with a PIN, a content filter and a locked model.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is MemoryAI?', anchor: 'what-is-memoryai' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Kid Mode', anchor: 'kid-mode' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
      { label: 'From the Maker', anchor: 'from-the-maker' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
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
            text: 'MemoryAI is a closed-source iPhone and Android app that keeps an editable Agent Memory on the device and adds document questions, hands-free voice and parental controls.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, download a model once, and then chat, talk or ask about your own PDFs without an account; the optional memory it keeps about you lives on the phone, where you can read and delete it.',
          },
        ],
        items: [
          'Developer: Alessandro Facchini, a single developer publishing as Facchinits, with no company behind it beyond that and no public source code.',
          'Maintenance: the App Store shows a release on 22 October 2026 and Google Play an update on 25 October 2026, so no stale-project warning applies.',
          'Reach: Google Play shows 1K+ downloads and the App Store shows no ratings yet, so the app has little public track record.',
          'Platforms: iPhone (iOS 16.4 or later) and Android; the App Store also lists Macs with Apple M1 or later, marked "not verified for macOS".',
          'Languages: the app is available in English, Italian, German, French, Spanish and Portuguese.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store and Google Play listings, the developer\'s website and privacy policy, and the public feedback repository, checked on 23 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'What Is MemoryAI?',
        content: [
          '**MemoryAI is a mobile chat app that runs open-weight language models locally instead of calling a cloud service.** According to its listings, no model is bundled: you pick one from the in-app list or import any compatible GGUF file from Hugging Face, and the first run needs a network connection to download it. Two inference engines are offered, llama.cpp for GGUF models and Google\'s LiteRT (MediaPipe) for models in LiteRT format. The developer says LiteRT is not limited to Gemma: it also runs Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B and Phi-4 Mini.',
          'The App Store listing is titled "MemoryAI: Offline Private AI" in the US, Japanese and Korean storefronts, "MemoryAI: Private Offline-KI" in Germany and "MemoryAI: a IA que lembra" in Brazil; the Google Play package is com.ts.memoryai. Its "Agent Memory" is a feature of this app, not a separate product.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**MemoryAI is installed from the two mobile stores; no desktop build, source code or sideloaded file is offered.** Both store links below are the ones the developer\'s site and listings use.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'iPhone',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 or later, 198.7 MB)',
          },
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/) (English, Italian version linked there; last updated 20 October 2026)',
          },
          {
            'Platform': 'Bug reports',
            'Where to get it': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues) (feedback only, no source code)',
          },
        ],
        note: 'Versions listed: 1.0.60 on Android (Google Play listing, updated 25 October 2026) and 1.0.60 on iOS (App Store listing, released 25 October 2026). The review text was written against 1.0.56 and extended with the 1.0.60 Google Play notes. The developer states that Android 9 or later is required; the Google Play text read shows no minimum Android version.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setup follows the order described in the store listings; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download MemoryAI from the App Store or Google Play; the listings say no account is required and the phone should have 4 GB of RAM or more.',
          },
          {
            title: 'Download a model on Wi-Fi',
            whyItMatters: 'Models are 0.3 to 4 GB each per the listings. The 18 October 2026 update says the first suggested model is now the lightest one that runs well on your phone, and that its download continues if you leave the screen. The 1.0.56 notes add that the app shows a model\'s size and the expected download time before you start, shows how much is left while it downloads, and picks the download up again by itself if the connection drops. The 1.0.60 notes on Google Play and the App Store add that the first model\'s download now starts by itself on Wi-Fi (Skip pauses it), that models are grouped by what fits your device with the too-big ones hidden until you ask, and that downloads cut by the network pick up where they left off.',
          },
          {
            title: 'Chat or talk',
            whyItMatters: 'Type, dictate, or switch on the continuous voice mode, in which the app listens, answers and reads the answer aloud without taps.',
          },
          {
            title: 'Add documents or images',
            whyItMatters: 'Import PDF, TXT or Markdown files, or pick photos, and ask questions about them.',
          },
          {
            title: 'Optionally turn on Agent Memory',
            whyItMatters: 'It is off by default and needs an embedding model; once on, you can open, edit or delete what it has stored.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store and Google Play descriptions or the privacy policy.**',
        ],
        items: [
          '**Two engines and custom models.** Choose llama.cpp or Google\'s MediaPipe/LiteRT per model, import any compatible GGUF file from Hugging Face, save a Hugging Face token for gated models, pause and resume downloads, and adjust temperature, top-k, top-p and maximum tokens per model.',
          '**Agent Memory.** Optional; the AI stores what you tell it in your own words on the device, and you can view, edit or delete each memory. The 1.0.52 notes say requests such as "write an email" are no longer saved as memories.',
          '**Documents and images.** Questions about PDF, TXT and Markdown files, image analysis with vision models (several images at once), and text recognition on photos through Google ML Kit.',
          '**Voice.** On-device voice input, text-to-speech, and a continuous hands-free mode.',
          '**Everyday tools.** Chat search, 20 persona templates, a speed benchmark in tokens per second, a context-window display, a screen showing whether the loaded model runs on the GPU or CPU, and backup to Google Drive on Android or iCloud on iPhone.',
        ],
        note: 'The two store descriptions are near-identical but not the same; for example, the iOS text mentions iCloud backup and the Android text Google Drive. The installed build is the final authority.',
      },
      kidMode: {
        id: 'kid-mode',
        title: 'Kid Mode',
        content: [
          '**The app offers a PIN-protected mode for children that its store descriptions present as a headline feature.** Everything below comes from those descriptions; PromptQuorum has not tested how well the mode holds up.',
        ],
        items: [
          '**Parent PIN.** A parent sets a PIN that guards the mode and its settings.',
          '**Locked model.** The active model is fixed, so a child cannot switch models or change settings.',
          '**Content filter.** Inappropriate words are blocked before they reach the model, and a safety prompt guides age-appropriate replies.',
          '**Import warnings.** The app warns before an unverified imported model can run in this mode.',
          '**Parental unlock.** Settings and documents can be opened temporarily from the chat screen without ending the mode.',
          '**No notifications.** The privacy policy says notifications are off while Kid Mode is active, and that turning the mode off restores the parent\'s choice. It also says usage statistics and crash reports may still be collected in this mode.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**Chats, documents and memories stay on the device by default, and the developer says the app has no AI servers and sends no chat text.** The Google Play Data safety section declares no data shared with third parties, with possible collection of app info and performance and of device or other IDs, encrypted in transit. The App Store privacy label lists search history, device ID and product interaction for analytics, and device ID, crash and performance data for app functionality, all marked not linked to you.',
          'The [privacy policy](https://alessandrofacchini.github.io/memoryai-privacy/), updated on 20 October 2026, names what leaves the phone: usage events to TelemetryDeck, crash reports to Sentry, and model downloads from Hugging Face. Push notifications through OneSignal start only if you accept the in-app "Notifications" prompt, and turning them off in Settings unsubscribes the device. Google Analytics for Firebase, which recorded two events (onboarding completed, message sent) for ad-campaign measurement, ran only on Android versions before 1.0.55, and only if the earlier in-app prompt was accepted; version 1.0.55 and later do not contain it, and the policy says it is not used on iOS. Backup to your own Google Drive or iCloud is optional. The developer adds that usage events carry no chat content (for example, "a model was loaded") and that crash reports carry no chat or document content. The policy also says local data is not encrypted by the app and relies on the device\'s own protection, and that conversations leave the app only when you export them.',
          'The store descriptions say "no in-app purchases", and the developer confirmed to PromptQuorum that the app has none; an earlier paragraph about purchases in the privacy policy was out of date and has been corrected. The "no tracking" wording does not mean that nothing leaves the phone: the analytics and crash reporting above still apply.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic. Anyone handling confidential data, or configuring parental controls for a child, should verify behavior on their own device.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'Alessandro Facchini, the developer of MemoryAI, checked the draft of this review and sent the note below. It is presented as the developer\'s own words, not as PromptQuorum\'s independent editorial assessment. The corrections in the same message on purchases, data flows, engines and the Android version are applied in this review:',
          '"I built MemoryAI for people who want an AI assistant without handing their words to a server. Once a model is downloaded, it answers with no internet connection, and the conversation stays on the phone.',
          'Two ideas shape it. The first is a memory you can see: the app can remember what you tell it, in your own words, and you can open that memory, correct it or delete it at any time. The second is family use: Kid Mode locks the model and the settings behind a parent PIN and keeps replies age-appropriate.',
          'It is free, with no account and no ads, and it speaks six languages. I build it in Italy with a small team, and two testers try new builds on real Android phones and iPhones. Next on the list: tools the model can use on the phone, now in testing, and on iPhone the faster first answer that Android users already have."',
        ],
        note: '— Alessandro Facchini, developer',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who want a phone assistant that remembers them without a cloud account.** The Agent Memory is stored locally and editable.',
          '**Parents who want a child-facing offline chat.** Parental controls are included, with the caveat that their strength is unverified.',
          '**People who want to question their own PDFs and photos privately.** Document and image questions are included.',
          '**Users who like to bring their own models.** GGUF import and two engines suit anyone who already has a favorite model.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** PromptQuorum did not run the app, so speed, battery use, answer quality and the real strength of the parental controls are not assessed.',
          '**Source code and license.** The app is closed source; the feedback repository holds only a README and an issue tracker.',
          '**Analytics and traffic.** The app is closed source and PromptQuorum has not audited its network traffic, so the data flows above are the account of the developer and the policy.',
          '**Android requirements.** The developer states Android 9 or later, which the Google Play text read does not show; the iOS minimum is 16.4.',
          '**Track record.** The app has been out for about seven months, with 1K+ Google Play downloads and no App Store ratings yet; the sources give no support commitment.',
          '**Not for users who need very large models.** The downloadable models are small, so heavier work belongs on a computer.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A and benchmarks',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source on-device chat client with its own model library',
          },
          {
            'App': '[Off Grid](/power-local-llm/off-grid-ai-review)',
            'Platforms': 'iOS, Android, Mac, Windows',
            'Price / license': 'Freemium / MIT',
            'Key difference': 'Open-source offline AI suite on phones and desktops',
          },
          {
            'App': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Open-source on-device app from Google\'s AI Edge team',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing. Of these four, MemoryAI is the only closed-source app.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Who makes MemoryAI?',
            a: 'Alessandro Facchini, who publishes under the name Facchinits; the privacy policy names Facchinits as the data controller.',
          },
          {
            q: 'Can I edit what the AI remembers?',
            a: 'Yes. Agent Memory is optional, stored on the device in your own words, and each entry can be viewed, edited or deleted. It needs an embedding model to work.',
          },
          {
            q: 'Can I use my own models?',
            a: 'Yes. You can import compatible GGUF files from Hugging Face and run them on the llama.cpp engine; the LiteRT engine runs Gemma and, per the developer, also Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B and Phi-4 Mini in LiteRT format.',
          },
          {
            q: 'Does it work on a Mac?',
            a: 'The App Store lists Macs with Apple M1 or later but marks the app "Designed for iPhone. Not verified for macOS", and there is no separate desktop build.',
          },
          {
            q: 'Where do I report a problem?',
            a: 'In the developer\'s public [feedback repository](https://github.com/alessandrofacchini/memoryai-feedback/issues) on GitHub, or by the support email on the Google Play listing.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'MemoryAI is a free offline mobile chat app that keeps an editable memory of the user on the device and offers parental controls, alongside document and image questions, hands-free voice and two inference engines. It is also frequently updated, with a release the day before this review was checked. Against that, it is closed source, new, small in reach, limited to small on-device models, and its privacy claims cannot be checked in code. It suits readers who want these specific features and accept a young, closed app; readers who want auditable code can compare [Private Mind](/power-local-llm/private-mind-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[MemoryAI on the App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — price, version history, requirements, privacy label and description, checked 23 October 2026.',
          '[MemoryAI on Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — description, download count, Data safety section and last-updated date, checked 23 October 2026.',
          '[MemoryAI website](https://alessandrofacchini.github.io/memoryai/) — the developer\'s English and Italian product page on offline use, Kid Mode, features and supported models, checked 20 October 2026.',
          '[MemoryAI website and privacy policy](https://alessandrofacchini.github.io/memoryai-privacy/) — data handling, network use, permissions and third-party services, policy last updated 20 October 2026.',
          '[memoryai-feedback on GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — the developer\'s public issue tracker.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Off Grid Review](/power-local-llm/off-grid-ai-review) — an open-source offline AI suite for phones and desktops.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s open-source on-device AI app.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'MemoryAI Review: Free Offline AI Chat for iPhone and Android',
      description:
        'MemoryAI review: a free, closed-source offline AI chat app for iPhone and Android with document Q&A, editable Agent Memory, voice mode and parental controls. Privacy, limits and what the sources do not confirm.',
      url: 'https://www.promptquorum.com/power-local-llm/memoryai-review',
      inLanguage: 'en',
      datePublished: '2026-10-19',
      dateModified: '2026-10-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'iPhone and Android users evaluating a free offline AI chat app' },
      about: [
        { '@type': 'Thing', name: 'MemoryAI' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/memoryai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'MemoryAI Review', item: 'https://www.promptquorum.com/power-local-llm/memoryai-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-de.webp',
    title: 'MemoryAI-Rezension: Kostenlose Offline-KI-Chat-App für iPhone und Android',
    seoTitle: 'MemoryAI-Rezension: Kostenlose Offline-KI-Chat-App',
    intro:
      'MemoryAI ist eine Offline-Chat-App für iPhone und Android von Alessandro Facchini (Handelsname Facchinits), einem unabhängigen Entwickler in Italien. Sie führt Open-Weight-Sprachmodelle über zwei Engines auf dem Telefon aus, llama.cpp und Googles LiteRT, und wurde am 30. März 2026 erstmals im App Store veröffentlicht. Diese Rezension gibt die Store-Einträge, die Website und die Datenschutzerklärung wieder, wie am 23. Oktober 2026 geprüft.',
    metaDescription:
      'MemoryAI-Rezension: kostenlose, nicht quelloffene Offline-KI-Chat-App für iPhone und Android mit Dokumenten-Q&A, Agent Memory, Sprache. Datenschutz.',
    twitterDescription:
      'MemoryAI-Rezension: kostenlose, nicht quelloffene Offline-KI-Chat-App für iPhone und Android mit Dokumenten-Q&A, editierbarem Gerätegedächtnis, freihändiger Sprache und Kindersicherung. Was die Quellen sagen.',
    audience:
      'iPhone- und Android-Nutzer, die eine kostenlose Chat-App wünschen, die Sprachmodelle auf dem Gerät ausführt, und die wissen müssen, was offline bleibt, was nach außen gesendet wird und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI Rezension',
    targetKeywords: [
      'memoryai app test',
      'memoryai offline private ki',
      'offline ki chat app iphone android',
      'agent memory ki auf dem gerät',
      'offline ki chat app für kinder',
      'gguf import mobile app',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (Version 1.0.60 unter Android und iPhone, Stand 25. Oktober 2026) verbindet in einer kostenlosen Chat-App ohne Konto ein editierbares Gedächtnis auf dem Gerät mit einem per PIN gesperrten Kindermodus.** Modelle werden einmal von Hugging Face heruntergeladen und laufen danach offline. Nutzungsereignisse und Absturzberichte ohne Chat-Inhalte verlassen das Telefon allerdings; lesen Sie daher den Abschnitt zum Datenschutz, bevor Sie sich auf die Formulierung „kein Tracking“ verlassen.',
    quickAnswerTop: {
      de: {
        question: 'Läuft MemoryAI wirklich offline und kostenlos?',
        answer:
          'Laut den Einträgen ja, für die Kernfunktionen: Nach einem einmaligen Modell-Download laufen Chat, Dokumentenfragen und Sprache auf dem Telefon, ohne Werbung und ohne In-App-Käufe. Die Datenschutzerklärung ergänzt, dass Nutzungsereignisse und Absturzberichte ohne Chat-Inhalte gesendet werden.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) und im [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat mit GGUF- und LiteRT-Modellen wie Gemma, Qwen, Llama, Phi und DeepSeek.',
          'Optionaler Agent Memory, den Sie ansehen, bearbeiten und löschen können, dazu Fragen zu Dokumenten und Bildern.',
          'Kindersicherung mit PIN, Inhaltsfilter und gesperrtem Modell.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist MemoryAI?', anchor: 'what-is-memoryai' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Kindermodus', anchor: 'kid-mode' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
      { label: 'Vom Entwickler', anchor: 'from-the-maker' },
      { label: 'Für wen sich die App eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
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
            text: 'MemoryAI ist eine nicht quelloffene iPhone- und Android-App, die einen editierbaren Agent Memory auf dem Gerät führt und Dokumentenfragen, freihändige Sprache und eine Kindersicherung bietet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, laden einmal ein Modell herunter und chatten, sprechen oder fragen dann ohne Konto zu Ihren eigenen PDFs; das optionale Gedächtnis, das sie über Sie führt, liegt auf dem Telefon, wo Sie es lesen und löschen können.',
          },
        ],
        items: [
          'Entwickler: Alessandro Facchini, ein einzelner Entwickler, der unter dem Namen Facchinits veröffentlicht, ohne dahinterstehendes Unternehmen und ohne öffentlichen Quellcode.',
          'Pflege: Der App Store zeigt eine Veröffentlichung am 22. Oktober 2026 und Google Play eine Aktualisierung am 25. Oktober 2026; eine Warnung vor einem veralteten Projekt entfällt daher.',
          'Reichweite: Google Play zeigt 1K+ Downloads, und der App Store zeigt noch keine Bewertungen; die App hat also bislang wenig öffentliche Erfolgsbilanz.',
          'Plattformen: iPhone (iOS 16.4 oder neuer) und Android; der App Store führt außerdem Macs mit Apple M1 oder neuer auf, markiert mit „nicht für macOS verifiziert“.',
          'Sprachen: Die App ist auf Englisch, Italienisch, Deutsch, Französisch, Spanisch und Portugiesisch verfügbar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Einträge im App Store und bei Google Play, die Website und Datenschutzerklärung des Entwicklers sowie das öffentliche Feedback-Repository, geprüft am 23. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'Was ist MemoryAI?',
        content: [
          '**MemoryAI ist eine mobile Chat-App, die Open-Weight-Sprachmodelle lokal ausführt, statt einen Cloud-Dienst aufzurufen.** Laut Einträgen ist kein Modell mitgeliefert: Sie wählen eines aus der Liste in der App oder importieren eine beliebige kompatible GGUF-Datei von Hugging Face, und der erste Start braucht eine Netzwerkverbindung für den Download. Angeboten werden zwei Inferenz-Engines, llama.cpp für GGUF-Modelle und Googles LiteRT (MediaPipe) für Modelle im LiteRT-Format. Laut Entwickler ist LiteRT nicht auf Gemma beschränkt: Es führt auch Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B und Phi-4 Mini aus.',
          'Der App-Store-Eintrag heißt in den Stores für die USA, Japan und Korea „MemoryAI: Offline Private AI“, in Deutschland „MemoryAI: Private Offline-KI“ und in Brasilien „MemoryAI: a IA que lembra“; das Google-Play-Paket lautet com.ts.memoryai. Der „Agent Memory“ (Agentengedächtnis) ist eine Funktion dieser App, kein eigenes Produkt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**MemoryAI wird über die beiden mobilen Stores installiert; weder ein Desktop-Build noch Quellcode noch eine Sideload-Datei werden angeboten.** Die beiden Store-Links unten sind die, die die Website und die Einträge des Entwicklers verwenden.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'iPhone',
            'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 oder neuer, 198,7 MB)',
          },
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/) (Englisch, italienische Fassung dort verlinkt; Stand 20. Oktober 2026)',
          },
          {
            'Plattform': 'Fehlermeldungen',
            'Bezugsquelle': '[GitHub Issues](https://github.com/alessandrofacchini/memoryai-feedback/issues) (nur Feedback, kein Quellcode)',
          },
        ],
        note: 'Gelistete Versionen: 1.0.60 unter Android (Google-Play-Eintrag, aktualisiert am 25. Oktober 2026) und 1.0.60 unter iOS (App-Store-Eintrag, veröffentlicht am 25. Oktober 2026). Der Reviewtext wurde anhand von 1.0.56 verfasst und um die Hinweise zu 1.0.60 aus Google Play ergänzt. Laut Entwickler wird Android 9 oder neuer benötigt; im gelesenen Google-Play-Text ist keine Mindestversion von Android angegeben.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Einrichtung folgt der Reihenfolge, die die Store-Einträge beschreiben; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie MemoryAI aus dem App Store oder von Google Play herunter; laut Einträgen ist kein Konto nötig, und das Telefon sollte 4 GB RAM oder mehr haben.',
          },
          {
            title: 'Modell per WLAN herunterladen',
            whyItMatters: 'Laut Einträgen umfassen Modelle je 0,3 bis 4 GB. Das Update vom 18. Oktober 2026 nennt als erstes vorgeschlagenes Modell nun das leichteste, das auf Ihrem Telefon gut läuft, und der Download läuft weiter, wenn Sie den Bildschirm verlassen. Laut den Hinweisen zu 1.0.56 zeigt die App vor dem Start die Größe und die voraussichtliche Dauer eines Modell-Downloads an, während des Downloads die verbleibende Menge, und setzt ihn bei abgebrochener Verbindung von selbst fort. Die Hinweise zu 1.0.60 in Google Play und im App Store ergänzen, dass der Download des ersten Modells nun im WLAN von selbst startet (Überspringen pausiert ihn), dass Modelle danach gruppiert sind, was auf Ihr Gerät passt, wobei zu große erst auf Nachfrage erscheinen, und dass durch das Netzwerk unterbrochene Downloads dort weiterlaufen, wo sie aufgehört haben.',
          },
          {
            title: 'Chatten oder sprechen',
            whyItMatters: 'Tippen Sie, diktieren Sie oder schalten Sie den kontinuierlichen Sprachmodus ein, in dem die App zuhört, antwortet und die Antwort ohne Antippen vorliest.',
          },
          {
            title: 'Dokumente oder Bilder hinzufügen',
            whyItMatters: 'Importieren Sie PDF-, TXT- oder Markdown-Dateien oder wählen Sie Fotos aus und stellen Sie Fragen dazu.',
          },
          {
            title: 'Optional Agent Memory einschalten',
            whyItMatters: 'Er ist standardmäßig aus und braucht ein Embedding-Modell; ist er an, können Sie ansehen, bearbeiten oder löschen, was er gespeichert hat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus den Beschreibungen im App Store und bei Google Play oder aus der Datenschutzerklärung.**',
        ],
        items: [
          '**Zwei Engines und eigene Modelle.** Wählen Sie je Modell llama.cpp oder Googles MediaPipe/LiteRT, importieren Sie eine beliebige kompatible GGUF-Datei von Hugging Face, speichern Sie ein Hugging-Face-Token für geschützte Modelle, pausieren und setzen Sie Downloads fort und passen Sie Temperatur, Top-k, Top-p und maximale Tokenzahl je Modell an.',
          '**Agent Memory.** Optional; die KI speichert, was Sie ihr in Ihren eigenen Worten sagen, auf dem Gerät, und Sie können jede Erinnerung ansehen, bearbeiten oder löschen. Die Hinweise zu 1.0.52 besagen, dass Anfragen wie „schreibe eine E-Mail“ nicht mehr als Erinnerungen gespeichert werden.',
          '**Dokumente und Bilder.** Fragen zu PDF-, TXT- und Markdown-Dateien, Bildanalyse mit Vision-Modellen (mehrere Bilder gleichzeitig) und Texterkennung auf Fotos über Google ML Kit.',
          '**Sprache.** Spracheingabe auf dem Gerät, Sprachausgabe und ein kontinuierlicher freihändiger Modus.',
          '**Alltagswerkzeuge.** Chat-Suche, 20 Persona-Vorlagen, ein Geschwindigkeits-Benchmark in Token pro Sekunde, eine Anzeige des Kontextfensters, eine Ansicht, ob das geladene Modell auf GPU oder CPU läuft, und Backup bei Google Drive unter Android oder iCloud auf dem iPhone.',
        ],
        note: 'Die beiden Store-Beschreibungen sind nahezu identisch, aber nicht gleich; so erwähnt der iOS-Text das iCloud-Backup und der Android-Text Google Drive. Maßgeblich ist letztlich die installierte Version.',
      },
      kidMode: {
        id: 'kid-mode',
        title: 'Kindermodus',
        content: [
          '**Die App bietet einen PIN-geschützten Modus für Kinder, den ihre Store-Beschreibungen als zentrale Funktion darstellen.** Alles Folgende stammt aus diesen Beschreibungen; PromptQuorum hat nicht getestet, wie gut der Modus standhält.',
        ],
        items: [
          '**Eltern-PIN.** Ein Elternteil legt eine PIN fest, die den Modus und seine Einstellungen schützt.',
          '**Gesperrtes Modell.** Das aktive Modell ist fest vorgegeben, sodass ein Kind weder das Modell wechseln noch Einstellungen ändern kann.',
          '**Inhaltsfilter.** Unangemessene Wörter werden blockiert, bevor sie das Modell erreichen, und ein Sicherheitsprompt steuert altersgerechte Antworten.',
          '**Importwarnungen.** Die App warnt, bevor ein nicht verifiziertes importiertes Modell in diesem Modus laufen kann.',
          '**Eltern-Entsperrung.** Einstellungen und Dokumente lassen sich vom Chatbildschirm aus vorübergehend öffnen, ohne den Modus zu beenden.',
          '**Keine Benachrichtigungen.** Laut Datenschutzerklärung sind Benachrichtigungen bei aktivem Kindermodus ausgeschaltet; beim Beenden des Modus gilt wieder die Wahl der Eltern. Nutzungsstatistiken und Absturzberichte können laut Erklärung auch in diesem Modus erfasst werden.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Chats, Dokumente und Erinnerungen bleiben standardmäßig auf dem Gerät, und der Entwickler gibt an, dass die App keine KI-Server hat und keinen Chattext sendet.** Der Abschnitt „Datensicherheit“ bei Google Play erklärt, dass keine Daten an Dritte weitergegeben werden, mit möglicher Erhebung von App-Informationen und Leistungsdaten sowie von Geräte- oder anderen Kennungen, bei verschlüsselter Übertragung. Das Datenschutzlabel im App Store führt Suchverlauf, Geräte-ID und Produktinteraktion für Analysen sowie Geräte-ID, Absturz- und Leistungsdaten für die App-Funktionalität auf, jeweils als nicht mit Ihnen verknüpft markiert.',
          'Die [Datenschutzerklärung](https://alessandrofacchini.github.io/memoryai-privacy/), aktualisiert am 20. Oktober 2026, nennt, was das Telefon tatsächlich verlässt: Nutzungsereignisse an TelemetryDeck, Absturzberichte an Sentry und Modell-Downloads von Hugging Face. Push-Benachrichtigungen über OneSignal starten nur, wenn Sie die In-App-Abfrage „Benachrichtigungen“ annehmen; schalten Sie sie in den Einstellungen aus, wird das Gerät abgemeldet. Google Analytics for Firebase, das zwei Ereignisse (Onboarding abgeschlossen, Nachricht gesendet) zur Messung von Werbekampagnen erfasste, lief nur unter Android-Versionen vor 1.0.55 und nur, wenn die frühere In-App-Abfrage angenommen wurde; Version 1.0.55 und neuer enthalten es nicht, und unter iOS wird es laut Erklärung nicht verwendet. Ein Backup in Ihr eigenes Google Drive oder iCloud ist optional. Der Entwickler ergänzt, dass die Nutzungsereignisse keine Chat-Inhalte enthalten (etwa „ein Modell wurde geladen“) und die Absturzberichte keine Chat- oder Dokumentinhalte. Die Erklärung besagt außerdem, dass lokale Daten von der App nicht verschlüsselt werden und auf den eigenen Schutz des Geräts vertrauen und dass Unterhaltungen die App nur beim Export verlassen.',
          'Die Store-Beschreibungen sagen „keine In-App-Käufe“, und der Entwickler hat PromptQuorum bestätigt, dass die App keine hat; ein früherer Absatz zu Käufen in der Datenschutzerklärung war veraltet und wurde korrigiert. Die Formulierung „kein Tracking“ heißt nicht, dass nichts das Telefon verlässt: Die oben genannte Analyse und die Absturzberichte gelten weiterhin.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, daher lässt sich keine dieser Angaben im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht geprüft. Wer vertrauliche Daten verarbeitet oder die Kindersicherung für ein Kind einrichtet, sollte das Verhalten auf dem eigenen Gerät überprüfen.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Vom Entwickler',
        content: [
          'Alessandro Facchini, der Entwickler von MemoryAI, hat den Entwurf dieser Rezension geprüft und die folgende Notiz geschickt. Sie wird als eigene Worte des Entwicklers wiedergegeben, nicht als unabhängige redaktionelle Einschätzung von PromptQuorum. Die Korrekturen aus derselben Nachricht zu Käufen, Datenflüssen, Engines und Android-Version sind in diese Rezension eingearbeitet:',
          '„Ich habe MemoryAI für Menschen gebaut, die einen KI-Assistenten wollen, ohne ihre Worte einem Server zu überlassen. Sobald ein Modell heruntergeladen ist, antwortet es ohne Internetverbindung, und das Gespräch bleibt auf dem Telefon.',
          'Zwei Ideen prägen die App. Die erste ist ein Gedächtnis, das man sehen kann: Die App kann sich merken, was Sie ihr sagen, in Ihren eigenen Worten, und Sie können dieses Gedächtnis jederzeit öffnen, korrigieren oder löschen. Die zweite ist die Nutzung in der Familie: Der Kindermodus sperrt Modell und Einstellungen hinter einer Eltern-PIN und hält die Antworten altersgerecht.',
          'Sie ist kostenlos, ohne Konto und ohne Werbung, und sie spricht sechs Sprachen. Ich entwickle sie in Italien mit einem kleinen Team, und zwei Tester probieren neue Versionen auf echten Android-Telefonen und iPhones aus. Als Nächstes stehen Werkzeuge an, die das Modell auf dem Telefon nutzen kann (derzeit in der Testphase), und auf dem iPhone die schnellere erste Antwort, die Android-Nutzer bereits haben.“',
        ],
        note: '— Alessandro Facchini, Entwickler',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die einen Telefon-Assistenten wünschen, der sich ohne Cloud-Konto an sie erinnert.** Der Agent Memory wird lokal gespeichert und ist editierbar.',
          '**Eltern, die einen Offline-Chat für ihr Kind wünschen.** Eine Kindersicherung ist enthalten, wobei ihre Stärke nicht verifiziert ist.',
          '**Menschen, die ihre eigenen PDFs und Fotos privat befragen möchten.** Fragen zu Dokumenten und Bildern sind enthalten.',
          '**Nutzer, die gern eigene Modelle mitbringen.** GGUF-Import und zwei Engines passen zu allen, die bereits ein Lieblingsmodell haben.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch, Antwortqualität und die tatsächliche Stärke der Kindersicherung wurden daher nicht bewertet.',
          '**Quellcode und Lizenz.** Die App ist nicht quelloffen; das Feedback-Repository enthält nur eine README und einen Issue-Tracker.',
          '**Analyse und Datenverkehr.** Die App ist nicht quelloffen und PromptQuorum hat ihren Netzwerkverkehr nicht geprüft; die oben beschriebenen Datenflüsse stammen daher vom Entwickler und aus der Datenschutzerklärung.',
          '**Android-Anforderungen.** Der Entwickler nennt Android 9 oder neuer, was der gelesene Google-Play-Text nicht zeigt; unter iOS ist das Minimum 16.4.',
          '**Erfolgsbilanz.** Die App ist seit etwa sieben Monaten erhältlich, mit 1K+ Downloads bei Google Play und noch ohne Bewertungen im App Store; die Quellen enthalten keine Zusage zur Unterstützung.',
          '**Nicht für Nutzer, die sehr große Modelle brauchen.** Die herunterladbaren Modelle sind klein, schwerere Aufgaben gehören daher auf einen Computer.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumenten-Q&A auf dem Gerät und Benchmarks',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener On-Device-Chat-Client mit eigener Modellbibliothek',
          },
          {
            'App': '[Off Grid](/de/power-local-llm/off-grid-ai-review)',
            'Plattformen': 'iOS, Android, Mac, Windows',
            'Preis / Lizenz': 'Freemium / MIT',
            'Wesentlicher Unterschied': 'Quelloffene Offline-KI-Suite für Telefone und Desktops',
          },
          {
            'App': '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Quelloffene On-Device-App vom AI-Edge-Team von Google',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag. Von diesen vier ist MemoryAI die einzige App, die nicht quelloffen ist.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wer entwickelt MemoryAI?',
            a: 'Alessandro Facchini, der unter dem Namen Facchinits veröffentlicht; die Datenschutzerklärung nennt Facchinits als Verantwortlichen für die Datenverarbeitung.',
          },
          {
            q: 'Kann ich bearbeiten, woran sich die KI erinnert?',
            a: 'Ja. Der Agent Memory ist optional, wird in Ihren eigenen Worten auf dem Gerät gespeichert, und jeder Eintrag lässt sich ansehen, bearbeiten oder löschen. Er braucht dafür ein Embedding-Modell.',
          },
          {
            q: 'Kann ich eigene Modelle verwenden?',
            a: 'Ja. Sie können kompatible GGUF-Dateien von Hugging Face importieren und auf der llama.cpp-Engine ausführen; die LiteRT-Engine führt Gemma und laut Entwickler auch Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B und Phi-4 Mini im LiteRT-Format aus.',
          },
          {
            q: 'Funktioniert sie auf einem Mac?',
            a: 'Der App Store führt Macs mit Apple M1 oder neuer auf, markiert die App aber mit „Für iPhone entwickelt. Nicht für macOS verifiziert“, und es gibt keinen separaten Desktop-Build.',
          },
          {
            q: 'Wo melde ich ein Problem?',
            a: 'Im öffentlichen [Feedback-Repository](https://github.com/alessandrofacchini/memoryai-feedback/issues) des Entwicklers auf GitHub oder über die Support-E-Mail im Google-Play-Eintrag.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'MemoryAI ist eine kostenlose mobile Offline-Chat-App, die ein editierbares Gedächtnis über den Nutzer auf dem Gerät führt und neben Fragen zu Dokumenten und Bildern, freihändiger Sprache und zwei Inferenz-Engines eine Kindersicherung bietet. Sie wird zudem häufig aktualisiert, mit einer Veröffentlichung am Tag vor der Prüfung dieser Rezension. Dagegen steht: Sie ist nicht quelloffen, neu, in der Reichweite klein, auf kleine Modelle auf dem Gerät begrenzt, und ihre Datenschutzangaben lassen sich nicht im Code prüfen. Sie eignet sich für Leser, die genau diese Funktionen wollen und eine junge, geschlossene App akzeptieren; wer prüfbaren Code möchte, kann [Private Mind](/de/power-local-llm/private-mind-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[MemoryAI im App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — Preis, Versionshistorie, Anforderungen, Datenschutzlabel und Beschreibung, geprüft am 23. Oktober 2026.',
          '[MemoryAI bei Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — Beschreibung, Download-Zahl, Abschnitt „Datensicherheit“ und Datum der letzten Aktualisierung, geprüft am 23. Oktober 2026.',
          '[MemoryAI-Website](https://alessandrofacchini.github.io/memoryai/) — die englische und italienische Produktseite des Entwicklers zu Offline-Nutzung, Kindermodus, Funktionen und unterstützten Modellen, geprüft am 20. Oktober 2026.',
          '[MemoryAI-Website und Datenschutzerklärung](https://alessandrofacchini.github.io/memoryai-privacy/) — Datenverarbeitung, Netzwerknutzung, Berechtigungen und Drittanbieterdienste, Erklärung zuletzt aktualisiert am 20. Oktober 2026.',
          '[memoryai-feedback auf GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — der öffentliche Issue-Tracker des Entwicklers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
          '[Off-Grid-Rezension](/de/power-local-llm/off-grid-ai-review) — eine quelloffene Offline-KI-Suite für Telefone und Desktops.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles quelloffene On-Device-KI-App.',
          '[Die besten lokalen LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — die breitere Übersicht für Android.',
          '[Die besten lokalen LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-es.webp',
    title: 'Análisis de MemoryAI: chat de IA offline y gratuito para iPhone y Android',
    seoTitle: 'Análisis de MemoryAI: app de chat de IA offline gratis',
    intro:
      'MemoryAI es una app de chat sin conexión para iPhone y Android de Alessandro Facchini (que opera como Facchinits), un desarrollador independiente de Italia. Ejecuta modelos de lenguaje de pesos abiertos en el teléfono mediante dos motores, llama.cpp y LiteRT de Google, y salió por primera vez en la App Store el 30 de marzo de 2026. Este análisis refleja sus fichas de las tiendas, su sitio web y su política de privacidad, consultados el 23 de octubre de 2026.',
    metaDescription:
      'Análisis de MemoryAI: chat de IA offline, gratuito y de código cerrado para iPhone y Android, con memoria editable y voz. Privacidad y límites.',
    twitterDescription:
      'Análisis de MemoryAI: una app de chat de IA offline, gratuita y de código cerrado para iPhone y Android con preguntas sobre documentos, memoria editable en el dispositivo, voz con manos libres y controles parentales. Lo que dicen las fichas y la política de privacidad.',
    audience:
      'Usuarios de iPhone y Android que quieren una app de chat gratuita que ejecute modelos de lenguaje en el dispositivo, y que necesitan saber qué se queda offline, qué envía fuera la app y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de MemoryAI',
    targetKeywords: [
      'opiniones app memoryai',
      'memoryai offline private ai',
      'app de chat de ia offline iphone android',
      'memoria de agente de ia en el dispositivo',
      'app de chat de ia offline para niños',
      'importar gguf app móvil',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (versión 1.0.60 en Android y iPhone a fecha del 25 de octubre de 2026) combina una memoria editable en el dispositivo con un Kid Mode protegido con PIN en una app de chat gratuita que no necesita cuenta.** Los modelos se descargan una sola vez desde Hugging Face y después se ejecutan sin conexión. Los eventos de uso y los informes de fallos sin contenido de los chats sí salen del teléfono, así que lee la sección de privacidad antes de fiarte de la frase «sin rastreo».',
    quickAnswerTop: {
      es: {
        question: '¿MemoryAI es realmente offline y gratuita?',
        answer:
          'Según sus fichas, sí en las funciones principales: tras una descarga única del modelo, el chat, las preguntas sobre documentos y la voz se ejecutan en el teléfono, sin anuncios y sin compras dentro de la app. Su política de privacidad añade que se envían al exterior eventos de uso e informes de fallos sin contenido de los chats.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) y en la [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat con modelos GGUF y LiteRT como Gemma, Qwen, Llama, Phi y DeepSeek.',
          'Agent Memory opcional que puedes ver, editar y borrar, además de preguntas sobre documentos e imágenes.',
          'Controles parentales con PIN, filtro de contenido y modelo bloqueado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es MemoryAI?', anchor: 'what-is-memoryai' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Kid Mode', anchor: 'kid-mode' },
      { label: 'Privacidad y uso de la red', anchor: 'privacy' },
      { label: 'La palabra del desarrollador', anchor: 'from-the-maker' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
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
            text: 'MemoryAI es una app de código cerrado para iPhone y Android que mantiene en el dispositivo una Agent Memory editable y añade preguntas sobre documentos, voz con manos libres y controles parentales.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas, descargas un modelo una sola vez y después chateas, hablas o preguntas sobre tus propios PDF sin cuenta; la memoria opcional que guarda sobre ti vive en el teléfono, donde puedes leerla y borrarla.',
          },
        ],
        items: [
          'Desarrollador: Alessandro Facchini, un único desarrollador que publica como Facchinits, sin ninguna empresa detrás aparte de eso ni código fuente público.',
          'Mantenimiento: la App Store muestra una versión el 22 de octubre de 2026 y Google Play una actualización el 25 de octubre de 2026, así que no se aplica ningún aviso de proyecto abandonado.',
          'Alcance: Google Play muestra más de 1 mil descargas y la App Store aún no muestra valoraciones, por lo que la app tiene poco historial público.',
          'Plataformas: iPhone (iOS 16.4 o posterior) y Android; la App Store también incluye Mac con Apple M1 o posterior, marcado como «no verificado para macOS».',
          'Idiomas: la app está disponible en inglés, italiano, alemán, francés, español y portugués.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en las fichas de App Store y Google Play, el sitio web y la política de privacidad del desarrollador y el repositorio público de comentarios, consultados el 23 de octubre de 2026. PromptQuorum no ha instalado, probado ni evaluado con pruebas comparativas la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: '¿Qué es MemoryAI?',
        content: [
          '**MemoryAI es una app de chat para móvil que ejecuta modelos de lenguaje de pesos abiertos en local en lugar de llamar a un servicio en la nube.** Según sus fichas, no incluye ningún modelo: eliges uno de la lista de la app o importas cualquier archivo GGUF compatible de Hugging Face, y la primera ejecución necesita conexión de red para descargarlo. Ofrece dos motores de inferencia: llama.cpp para modelos GGUF y LiteRT (MediaPipe) de Google para modelos en formato LiteRT. Según el desarrollador, LiteRT no se limita a Gemma: también ejecuta Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B y Phi-4 Mini.',
          'La ficha de la App Store se titula «MemoryAI: Offline Private AI» en las tiendas de EE. UU., Japón y Corea, «MemoryAI: Private Offline-KI» en Alemania y «MemoryAI: a IA que lembra» en Brasil; el paquete de Google Play es com.ts.memoryai. Su «Agent Memory» es una función de esta app, no un producto aparte.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**MemoryAI se instala desde las dos tiendas móviles; no se ofrece ninguna versión de escritorio, código fuente ni archivo para instalación manual.** Los dos enlaces de tienda siguientes son los que usan el sitio web y las fichas del desarrollador.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 o posterior, 198.7 MB)',
          },
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/) (inglés e italiano; actualizada el 20 oct 2026)',
          },
          {
            'Plataforma': 'Informes de errores',
            'Dónde obtenerla': '[Incidencias en GitHub](https://github.com/alessandrofacchini/memoryai-feedback/issues) (solo feedback, sin código)',
          },
        ],
        note: 'Versiones listadas: 1.0.60 en Android (ficha de Google Play, actualizada el 25 de octubre de 2026) y 1.0.60 en iOS (ficha de la App Store, publicada el 25 de octubre de 2026). El texto del análisis se redactó sobre la 1.0.56 y se amplió con las notas de la 1.0.60 de Google Play. El desarrollador indica que se requiere Android 9 o posterior; el texto de Google Play consultado no muestra ninguna versión mínima de Android.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración sigue el orden descrito en las fichas de las tiendas; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga MemoryAI desde la App Store o Google Play; las fichas dicen que no hace falta cuenta y que el teléfono debería tener 4 GB de RAM o más.',
          },
          {
            title: 'Descarga un modelo con Wi-Fi',
            whyItMatters: 'Los modelos pesan de 0.3 a 4 GB cada uno según las fichas. La actualización del 18 de octubre de 2026 dice que el primer modelo sugerido es ahora el más ligero que funciona bien en tu teléfono y que su descarga continúa si sales de la pantalla. Las notas de la 1.0.56 añaden que la app muestra el tamaño de un modelo y el tiempo aproximado de descarga antes de empezar, indica cuánto queda mientras se descarga y, si se corta la conexión, retoma la descarga por sí sola. Las notas de la 1.0.60 en Google Play y la App Store añaden que la descarga del primer modelo ahora empieza sola con Wi-Fi (Omitir la pausa), que los modelos se agrupan según lo que cabe en tu dispositivo y los demasiado grandes quedan ocultos hasta que los pidas, y que las descargas cortadas por la red continúan donde se quedaron.',
          },
          {
            title: 'Chatea o habla',
            whyItMatters: 'Escribe, dicta o activa el modo de voz continuo, en el que la app escucha, responde y lee la respuesta en voz alta sin tocar la pantalla.',
          },
          {
            title: 'Añade documentos o imágenes',
            whyItMatters: 'Importa archivos PDF, TXT o Markdown, o elige fotos, y hazles preguntas.',
          },
          {
            title: 'Activa Agent Memory si quieres',
            whyItMatters: 'Está desactivada por defecto y necesita un modelo de embeddings; una vez activada, puedes abrir, editar o borrar lo que ha guardado.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de las descripciones de la App Store y Google Play o de la política de privacidad.**',
        ],
        items: [
          '**Dos motores y modelos propios.** Elige llama.cpp o MediaPipe/LiteRT de Google para cada modelo, importa cualquier archivo GGUF compatible de Hugging Face, guarda un token de Hugging Face para modelos restringidos, pausa y reanuda descargas, y ajusta la temperatura, top-k, top-p y el máximo de tokens por modelo.',
          '**Agent Memory.** Opcional; la IA guarda en el dispositivo, con tus propias palabras, lo que le cuentas, y puedes ver, editar o borrar cada recuerdo. Las notas de la versión 1.0.52 dicen que peticiones como «escribe un correo» ya no se guardan como recuerdos.',
          '**Documentos e imágenes.** Preguntas sobre archivos PDF, TXT y Markdown, análisis de imágenes con modelos de visión (varias imágenes a la vez) y reconocimiento de texto en fotos mediante Google ML Kit.',
          '**Voz.** Entrada de voz en el dispositivo, síntesis de voz y un modo continuo con manos libres.',
          '**Herramientas del día a día.** Búsqueda en los chats, 20 plantillas de personaje, una prueba de velocidad en tokens por segundo, una vista de la ventana de contexto, una pantalla que indica si el modelo cargado se ejecuta en la GPU o en la CPU, y copia de seguridad en Google Drive en Android o en iCloud en iPhone.',
        ],
        note: 'Las dos descripciones de las tiendas son casi idénticas, pero no iguales; por ejemplo, el texto de iOS menciona la copia de seguridad en iCloud y el de Android, Google Drive. La compilación instalada tiene la última palabra.',
      },
      kidMode: {
        id: 'kid-mode',
        title: 'Kid Mode',
        content: [
          '**La app ofrece un modo protegido con PIN para niños que las descripciones de sus tiendas presentan como una función destacada.** Todo lo que sigue procede de esas descripciones; PromptQuorum no ha probado hasta qué punto resiste el modo.',
        ],
        items: [
          '**PIN parental.** Un padre o una madre establece un PIN que protege el modo y sus ajustes.',
          '**Modelo bloqueado.** El modelo activo queda fijo, de modo que un niño no puede cambiar de modelo ni modificar los ajustes.',
          '**Filtro de contenido.** Las palabras inapropiadas se bloquean antes de que lleguen al modelo, y un mensaje de seguridad orienta respuestas adecuadas a la edad.',
          '**Avisos de importación.** La app avisa antes de que un modelo importado no verificado pueda ejecutarse en este modo.',
          '**Desbloqueo parental.** Los ajustes y los documentos se pueden abrir de forma temporal desde la pantalla del chat sin terminar el modo.',
          '**Sin notificaciones.** Según la política de privacidad, las notificaciones están desactivadas mientras el Kid Mode está activo, y al desactivar el modo vuelve a regir la elección de los padres. La política añade que las estadísticas de uso y los informes de fallos aún pueden recopilarse en este modo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**Los chats, los documentos y los recuerdos se quedan en el dispositivo por defecto, y el desarrollador dice que la app no tiene servidores de IA y no envía texto de los chats.** La sección Seguridad de los datos de Google Play declara que no se comparten datos con terceros, con posible recopilación de información de la app y de rendimiento y de identificadores de dispositivo u otros, cifrados en tránsito. La etiqueta de privacidad de la App Store enumera el historial de búsqueda, el identificador de dispositivo y la interacción con el producto para analítica, y el identificador de dispositivo y los datos de fallos y de rendimiento para el funcionamiento de la app, todos marcados como no vinculados a ti.',
          'La [política de privacidad](https://alessandrofacchini.github.io/memoryai-privacy/), actualizada el 20 de octubre de 2026, indica lo que sí sale del teléfono: eventos de uso a TelemetryDeck, informes de fallos a Sentry y descargas de modelos desde Hugging Face. Las notificaciones push con OneSignal solo empiezan si aceptas el aviso «Notificaciones» de la app, y al desactivarlas en Ajustes se da de baja el dispositivo. Google Analytics para Firebase, que registraba dos eventos (onboarding completado y mensaje enviado) para medir campañas publicitarias, solo funcionaba en versiones de Android anteriores a la 1.0.55 y solo si se había aceptado el aviso anterior de la app; la versión 1.0.55 y las posteriores no lo incluyen, y según la política no se usa en iOS. La copia de seguridad en tu propio Google Drive o iCloud es opcional. El desarrollador añade que los eventos de uso no llevan contenido de los chats (por ejemplo, «se cargó un modelo») y que los informes de fallos no incluyen contenido de chats ni de documentos. También dice que la app no cifra los datos locales y que depende de la protección del propio dispositivo, y que las conversaciones solo salen de la app cuando las exportas.',
          'Las descripciones de las tiendas dicen «sin compras dentro de la app» y el desarrollador confirmó a PromptQuorum que la app no tiene ninguna; un párrafo anterior sobre compras en la política de privacidad estaba desactualizado y se ha corregido. La frase «sin rastreo» no significa que nada salga del teléfono: la analítica y los informes de fallos descritos arriba siguen vigentes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, por lo que ninguna de estas afirmaciones se puede comprobar en el código, y PromptQuorum no ha auditado el tráfico de red. Quien maneje datos confidenciales, o configure los controles parentales para un niño, debería verificar el comportamiento en su propio dispositivo.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'La palabra del desarrollador',
        content: [
          'Alessandro Facchini, desarrollador de MemoryAI, revisó el borrador de este análisis y envió la siguiente nota. Se presenta como las propias palabras del desarrollador, no como una evaluación editorial independiente de PromptQuorum. Las correcciones del mismo mensaje sobre compras, flujos de datos, motores y versión de Android se han aplicado en este análisis:',
          '«Creé MemoryAI para quienes quieren un asistente de IA sin entregar sus palabras a un servidor. Una vez descargado un modelo, responde sin conexión a internet y la conversación se queda en el teléfono.',
          'Dos ideas le dan forma. La primera es una memoria que puedes ver: la app puede recordar lo que le cuentas, con tus propias palabras, y puedes abrir esa memoria, corregirla o borrarla en cualquier momento. La segunda es el uso en familia: el Kid Mode bloquea el modelo y los ajustes tras un PIN de madre o padre y mantiene las respuestas adecuadas a la edad.',
          'Es gratuita, sin cuenta ni anuncios, y habla seis idiomas. La desarrollo en Italia con un equipo pequeño, y dos testers prueban las versiones nuevas en teléfonos Android y iPhone reales. Lo siguiente en la lista: herramientas que el modelo pueda usar en el teléfono, ahora en pruebas, y en iPhone la primera respuesta más rápida que ya tienen los usuarios de Android.»',
        ],
        note: '— Alessandro Facchini, desarrollador',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que quieren un asistente en el teléfono que las recuerde sin una cuenta en la nube.** Agent Memory se guarda en local y se puede editar.',
          '**Padres que quieren un chat offline pensado para niños.** Los controles parentales están incluidos, con la salvedad de que su solidez no está verificada.',
          '**Personas que quieren hacer preguntas sobre sus propios PDF y fotos de forma privada.** Las preguntas sobre documentos e imágenes están incluidas.',
          '**Usuarios a los que les gusta traer sus propios modelos.** La importación de GGUF y los dos motores van bien a quien ya tiene un modelo favorito.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería, la calidad de las respuestas ni la eficacia real de los controles parentales.',
          '**Código fuente y licencia.** La app es de código cerrado; el repositorio de comentarios solo contiene un README y un gestor de incidencias.',
          '**Analítica y tráfico de red.** La app es de código cerrado y PromptQuorum no ha auditado su tráfico de red, así que los flujos de datos descritos arriba son la versión del desarrollador y de la política.',
          '**Requisitos de Android.** El desarrollador indica Android 9 o posterior, algo que el texto de Google Play que leímos no muestra; el mínimo de iOS es 16.4.',
          '**Historial.** La app lleva unos siete meses en el mercado, con más de 1 mil descargas en Google Play y sin valoraciones en la App Store todavía; las fuentes no ofrecen ningún compromiso de soporte.',
          '**No es para quien necesita modelos muy grandes.** Los modelos descargables son pequeños, así que el trabajo más pesado corresponde a un ordenador.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat offline de código abierto con preguntas sobre documentos en el dispositivo y pruebas de rendimiento',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente de chat de código abierto en el dispositivo con su propia biblioteca de modelos',
          },
          {
            'App': '[Off Grid](/es/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'iOS, Android, Mac, Windows',
            'Precio / licencia': 'Freemium / MIT',
            'Diferencia clave': 'Suite de IA offline de código abierto para teléfonos y ordenadores de escritorio',
          },
          {
            'App': '[Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'App de código abierto en el dispositivo del equipo de AI Edge de Google',
          },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha. De estas cuatro, MemoryAI es la única app de código cerrado.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Quién hace MemoryAI?',
            a: 'Alessandro Facchini, que publica con el nombre Facchinits; la política de privacidad nombra a Facchinits como responsable del tratamiento de los datos.',
          },
          {
            q: '¿Puedo editar lo que recuerda la IA?',
            a: 'Sí. Agent Memory es opcional, se guarda en el dispositivo con tus propias palabras y cada entrada se puede ver, editar o borrar. Necesita un modelo de embeddings para funcionar.',
          },
          {
            q: '¿Puedo usar mis propios modelos?',
            a: 'Sí. Puedes importar archivos GGUF compatibles de Hugging Face y ejecutarlos con el motor llama.cpp; el motor LiteRT ejecuta Gemma y, según el desarrollador, también Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B y Phi-4 Mini en formato LiteRT.',
          },
          {
            q: '¿Funciona en un Mac?',
            a: 'La App Store incluye Mac con Apple M1 o posterior, pero marca la app como «Diseñada para iPhone. No verificada para macOS», y no existe una versión de escritorio aparte.',
          },
          {
            q: '¿Dónde informo de un problema?',
            a: 'En el [repositorio público de comentarios](https://github.com/alessandrofacchini/memoryai-feedback/issues) del desarrollador en GitHub, o por el correo de soporte que aparece en la ficha de Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'MemoryAI es una app de chat móvil offline y gratuita que guarda en el dispositivo una memoria editable del usuario y ofrece controles parentales, junto con preguntas sobre documentos e imágenes, voz con manos libres y dos motores de inferencia. También se actualiza con frecuencia, con una versión el día anterior a la consulta de este análisis. En contra, es de código cerrado, reciente, de alcance reducido y limitada a modelos pequeños en el dispositivo, y sus afirmaciones de privacidad no se pueden comprobar en el código. Encaja con quienes quieren estas funciones concretas y aceptan una app joven y cerrada; quienes quieran código auditable pueden comparar [Private Mind](/es/power-local-llm/private-mind-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[MemoryAI en la App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — precio, historial de versiones, requisitos, etiqueta de privacidad y descripción, consultados el 23 de octubre de 2026.',
          '[MemoryAI en Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — descripción, número de descargas, sección Seguridad de los datos y fecha de la última actualización, consultados el 23 de octubre de 2026.',
          '[Sitio web de MemoryAI](https://alessandrofacchini.github.io/memoryai/) — la página del producto del desarrollador, en inglés e italiano, sobre uso sin conexión, modo infantil, funciones y modelos compatibles, consultada el 20 de octubre de 2026.',
          '[Sitio web y política de privacidad de MemoryAI](https://alessandrofacchini.github.io/memoryai-privacy/) — tratamiento de datos, uso de la red, permisos y servicios de terceros; política actualizada por última vez el 20 de octubre de 2026.',
          '[memoryai-feedback en GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — el gestor público de incidencias del desarrollador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita y con licencia MIT para iPhone y Android.',
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat en el dispositivo gratuito y de código abierto para iOS y Android.',
          '[Análisis de Off Grid](/es/power-local-llm/off-grid-ai-review) — una suite de IA offline de código abierto para teléfonos y ordenadores de escritorio.',
          '[Análisis de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de IA en el dispositivo de código abierto de Google.',
          '[Las mejores apps de LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — la selección más amplia para Android.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la selección más amplia para iPhone.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-fr.webp',
    title: 'Avis MemoryAI : chat IA gratuit hors ligne pour iPhone et Android',
    seoTitle: 'Avis MemoryAI : appli de chat IA gratuite hors ligne',
    intro:
      'MemoryAI est une application de chat hors ligne pour iPhone et Android, créée par Alessandro Facchini (sous le nom Facchinits), développeur indépendant en Italie. Elle exécute des modèles de langage à poids ouverts sur le téléphone grâce à deux moteurs, llama.cpp et LiteRT de Google, et a été publiée pour la première fois sur l\'App Store le 30 mars 2026. Cet avis reflète ses fiches de boutique, son site et sa politique de confidentialité, consultés le 23 octobre 2026.',
    metaDescription:
      'Avis MemoryAI : appli de chat IA gratuite, code fermé, hors ligne, sur iPhone et Android, avec Q&R sur documents, Agent Memory, voix et contrôle parental.',
    twitterDescription:
      'Avis MemoryAI : une appli de chat IA gratuite et à code fermé pour iPhone et Android, avec Q&R sur documents, mémoire modifiable sur l\'appareil, voix mains libres et contrôle parental. Ce que disent les fiches et la politique de confidentialité.',
    audience:
      'Utilisateurs d\'iPhone et d\'Android qui veulent une application de chat gratuite exécutant des modèles de langage sur l\'appareil, et qui ont besoin de savoir ce qui reste hors ligne, ce qu\'elle envoie à l\'extérieur et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis MemoryAI',
    targetKeywords: [
      'avis application memoryai',
      'memoryai ia privée hors ligne',
      'application chat ia hors ligne iphone android',
      'mémoire d\'agent ia sur l\'appareil',
      'application chat ia hors ligne pour enfants',
      'importer gguf application mobile',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (version 1.0.60 sur Android et iPhone au 25 octobre 2026) associe une mémoire modifiable sur l\'appareil à un Kid Mode verrouillé par code PIN dans une application de chat gratuite qui ne demande aucun compte.** Les modèles sont téléchargés une seule fois depuis Hugging Face, puis exécutés hors ligne. Des événements d\'usage et des rapports de plantage, sans contenu des conversations, quittent bien le téléphone : lisez la section sur la confidentialité avant de vous fier à la mention « aucun suivi ».',
    quickAnswerTop: {
      fr: {
        question: 'MemoryAI fonctionne-t-elle vraiment hors ligne et gratuitement ?',
        answer:
          'Selon ses fiches, oui pour les fonctions de base : après un téléchargement unique de modèle, le chat, les questions sur documents et la voix s\'exécutent sur le téléphone, sans publicité et sans achat intégré. Sa politique de confidentialité ajoute que des événements d\'usage et des rapports de plantage, sans contenu des conversations, sont envoyés à l\'extérieur.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) et l\'[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat avec des modèles GGUF et LiteRT tels que Gemma, Qwen, Llama, Phi et DeepSeek.',
          'Agent Memory facultative que vous pouvez consulter, modifier et supprimer, ainsi que des questions sur documents et images.',
          'Contrôle parental avec code PIN, filtre de contenu et modèle verrouillé.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que MemoryAI ?', anchor: 'what-is-memoryai' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Kid Mode', anchor: 'kid-mode' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
      { label: 'Le mot du développeur', anchor: 'from-the-maker' },
      { label: 'À qui elle convient', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MemoryAI est une application à code source fermé pour iPhone et Android, qui conserve sur l\'appareil une Agent Memory modifiable et ajoute des questions sur documents, la voix mains libres et le contrôle parental.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez, téléchargez un modèle une seule fois, puis discutez, parlez ou posez des questions sur vos propres PDF sans compte ; la mémoire facultative qu\'elle garde à votre sujet reste sur le téléphone, où vous pouvez la lire et la supprimer.',
          },
        ],
        items: [
          'Développeur : Alessandro Facchini, développeur unique qui publie sous le nom Facchinits, sans société derrière l\'application et sans code source public.',
          'Maintenance : l\'App Store affiche une version le 22 octobre 2026 et Google Play une mise à jour le 25 octobre 2026 ; aucun avertissement de projet inactif ne s\'applique donc.',
          'Audience : Google Play affiche plus de 1 000 téléchargements et l\'App Store n\'affiche encore aucune note ; l\'application a donc peu d\'historique public.',
          'Plateformes : iPhone (iOS 16.4 ou version ultérieure) et Android ; l\'App Store mentionne aussi les Mac avec puce Apple M1 ou ultérieure, avec la mention « non vérifiée pour macOS ».',
          'Langues : l\'application est disponible en anglais, italien, allemand, français, espagnol et portugais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur les fiches de l\'App Store et de Google Play, le site du développeur et sa politique de confidentialité, ainsi que le dépôt public de retours, consultés le 23 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni évalué l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'Qu\'est-ce que MemoryAI ?',
        content: [
          '**MemoryAI est une application de chat mobile qui exécute des modèles de langage à poids ouverts en local, au lieu d\'appeler un service cloud.** Selon ses fiches, aucun modèle n\'est fourni avec l\'application : vous en choisissez un dans la liste intégrée ou vous importez n\'importe quel fichier GGUF compatible depuis Hugging Face, et le premier lancement nécessite une connexion pour le télécharger. Deux moteurs d\'inférence sont proposés : llama.cpp pour les modèles GGUF et LiteRT (MediaPipe) de Google pour les modèles au format LiteRT. Selon le développeur, LiteRT ne se limite pas à Gemma : il exécute aussi Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B et Phi-4 Mini.',
          'La fiche de l\'App Store s\'intitule « MemoryAI: Offline Private AI » dans les boutiques américaine, japonaise et coréenne, « MemoryAI: Private Offline-KI » en Allemagne et « MemoryAI: a IA que lembra » au Brésil ; le paquet Google Play est com.ts.memoryai. Son « Agent Memory » est une fonction de cette application, et non un produit distinct.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**MemoryAI s\'installe depuis les deux boutiques mobiles ; aucune version pour ordinateur, aucun code source ni fichier à installer manuellement n\'est proposé.** Les deux liens de boutique ci-dessous sont ceux qu\'utilisent le site du développeur et les fiches.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'iPhone',
            'Où la trouver': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 ou version ultérieure, 198,7 Mo)',
          },
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            'Plateforme': 'Confidentialité',
            'Où la trouver': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/) (versions anglaise et italienne ; mise à jour le 20 octobre 2026)',
          },
          {
            'Plateforme': 'Signaler un bug',
            'Où la trouver': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues) (retours uniquement, sans code source)',
          },
        ],
        note: 'Versions affichées : 1.0.60 sur Android (fiche Google Play, mise à jour le 25 octobre 2026) et 1.0.60 sur iOS (fiche App Store, publiée le 25 octobre 2026). Le texte du test a été rédigé sur la 1.0.56 et complété par les notes de la 1.0.60 de Google Play. Le développeur indique qu\'Android 9 ou une version ultérieure est requis ; le texte de Google Play consulté n\'affiche aucune version minimale d\'Android.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La configuration suit l\'ordre décrit dans les fiches des boutiques ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez MemoryAI depuis l\'App Store ou Google Play ; selon les fiches, aucun compte n\'est requis et le téléphone doit disposer de 4 Go de RAM ou plus.',
          },
          {
            title: 'Télécharger un modèle en Wi-Fi',
            whyItMatters: 'Les modèles pèsent de 0,3 à 4 Go chacun selon les fiches. La mise à jour du 18 octobre 2026 indique que le premier modèle suggéré est désormais le plus léger qui fonctionne bien sur votre téléphone, et que son téléchargement se poursuit si vous quittez l\'écran. Les notes de la 1.0.56 ajoutent que l\'application affiche la taille d\'un modèle et la durée approximative du téléchargement avant de commencer, indique ce qu\'il reste pendant le téléchargement et le reprend d\'elle-même si la connexion est coupée. Les notes de la 1.0.60 sur Google Play et l\'App Store ajoutent que le téléchargement du premier modèle démarre désormais tout seul en Wi-Fi (Ignorer le met en pause), que les modèles sont regroupés selon ce qui convient à votre appareil, les trop volumineux restant masqués tant que vous ne les demandez pas, et que les téléchargements coupés par le réseau reprennent là où ils s\'étaient arrêtés .',
          },
          {
            title: 'Discuter ou parler',
            whyItMatters: 'Saisissez du texte, dictez, ou activez le mode vocal continu, dans lequel l\'application écoute, répond et lit la réponse à voix haute sans aucun appui.',
          },
          {
            title: 'Ajouter des documents ou des images',
            whyItMatters: 'Importez des fichiers PDF, TXT ou Markdown, ou choisissez des photos, puis posez des questions à leur sujet.',
          },
          {
            title: 'Activer l\'Agent Memory, si souhaité',
            whyItMatters: 'Elle est désactivée par défaut et nécessite un modèle d\'embedding ; une fois activée, vous pouvez ouvrir, modifier ou supprimer ce qu\'elle a enregistré.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient des descriptions de l\'App Store et de Google Play ou de la politique de confidentialité.**',
        ],
        items: [
          '**Deux moteurs et des modèles personnalisés.** Choisissez llama.cpp ou MediaPipe/LiteRT de Google pour chaque modèle, importez n\'importe quel fichier GGUF compatible depuis Hugging Face, enregistrez un jeton Hugging Face pour les modèles à accès restreint, mettez les téléchargements en pause et reprenez-les, et réglez la température, le top-k, le top-p et le nombre maximal de tokens par modèle.',
          '**Agent Memory.** Facultative ; l\'IA enregistre sur l\'appareil, avec vos propres mots, ce que vous lui dites, et vous pouvez consulter, modifier ou supprimer chaque souvenir. Les notes de la version 1.0.52 indiquent que des demandes telles que « écris un e-mail » ne sont plus enregistrées comme souvenirs.',
          '**Documents et images.** Questions sur des fichiers PDF, TXT et Markdown, analyse d\'images avec des modèles de vision (plusieurs images à la fois) et reconnaissance de texte sur des photos via Google ML Kit.',
          '**Voix.** Saisie vocale sur l\'appareil, synthèse vocale et mode continu mains libres.',
          '**Outils du quotidien.** Recherche dans les conversations, 20 modèles de personas, un test de vitesse en tokens par seconde, un affichage de la fenêtre de contexte, un écran indiquant si le modèle chargé s\'exécute sur le GPU ou le CPU, et une sauvegarde sur Google Drive sur Android ou sur iCloud sur iPhone.',
        ],
        note: 'Les deux descriptions des boutiques sont presque identiques mais pas tout à fait ; par exemple, le texte iOS mentionne la sauvegarde iCloud et le texte Android Google Drive. La build installée fait foi.',
      },
      kidMode: {
        id: 'kid-mode',
        title: 'Kid Mode',
        content: [
          '**L\'application propose un mode protégé par code PIN pour les enfants, que ses descriptions de boutique présentent comme une fonction phare.** Tout ce qui suit provient de ces descriptions ; PromptQuorum n\'a pas testé la solidité de ce mode.',
        ],
        items: [
          '**Code PIN parental.** Un parent définit un code PIN qui protège le mode et ses réglages.',
          '**Modèle verrouillé.** Le modèle actif est figé : un enfant ne peut ni changer de modèle ni modifier les réglages.',
          '**Filtre de contenu.** Les mots inappropriés sont bloqués avant d\'atteindre le modèle, et une consigne de sécurité guide des réponses adaptées à l\'âge.',
          '**Avertissements à l\'import.** L\'application avertit avant qu\'un modèle importé non vérifié puisse s\'exécuter dans ce mode.',
          '**Déverrouillage parental.** Les réglages et les documents peuvent être ouverts temporairement depuis l\'écran de chat sans mettre fin au mode.',
          '**Pas de notifications.** Selon la politique de confidentialité, les notifications sont désactivées tant que le Kid Mode est actif, et désactiver le mode rétablit le choix du parent. La politique ajoute que des statistiques d\'usage et des rapports de plantage peuvent encore être collectés dans ce mode.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Les conversations, les documents et les souvenirs restent par défaut sur l\'appareil, et le développeur affirme que l\'application n\'a aucun serveur d\'IA et n\'envoie aucun texte de conversation.** La section Sécurité des données de Google Play déclare qu\'aucune donnée n\'est partagée avec des tiers, avec une collecte possible d\'informations sur l\'application et de performances ainsi que d\'identifiants d\'appareil ou autres, chiffrés en transit. Le libellé de confidentialité de l\'App Store répertorie l\'historique de recherche, l\'identifiant d\'appareil et l\'interaction avec le produit pour l\'analytique, ainsi que l\'identifiant d\'appareil et les données de plantage et de performance pour le fonctionnement de l\'application, le tout marqué comme non lié à vous.',
          'La [politique de confidentialité](https://alessandrofacchini.github.io/memoryai-privacy/), mise à jour le 20 octobre 2026, précise ce qui quitte le téléphone : des événements d\'usage envoyés à TelemetryDeck, des rapports de plantage envoyés à Sentry et des téléchargements de modèles depuis Hugging Face. Les notifications push via OneSignal ne démarrent que si vous acceptez l\'invite « Notifications » de l\'application, et les désactiver dans les Réglages désinscrit l\'appareil. Google Analytics pour Firebase, qui enregistrait deux événements (onboarding terminé, message envoyé) pour mesurer des campagnes publicitaires, ne fonctionnait que sur les versions d\'Android antérieures à la 1.0.55 et seulement si l\'invite précédente de l\'application avait été acceptée ; la version 1.0.55 et les suivantes ne l\'incluent pas, et d\'après la politique il n\'est pas utilisé sur iOS. La sauvegarde vers votre propre Google Drive ou iCloud est facultative. Le développeur ajoute que les événements d\'usage ne contiennent aucun contenu de conversation (par exemple « un modèle a été chargé ») et que les rapports de plantage ne contiennent aucun contenu de conversation ni de document. Elle indique aussi que les données locales ne sont pas chiffrées par l\'application et reposent sur la protection propre de l\'appareil, et que les conversations ne quittent l\'application que si vous les exportez.',
          'Les descriptions des boutiques disent « aucun achat intégré », et le développeur a confirmé à PromptQuorum que l\'application n\'en propose aucun ; un ancien paragraphe de la politique sur les achats était obsolète et a été corrigé. La mention « aucun suivi » ne signifie pas que rien ne quitte le téléphone : l\'analytique et les rapports de plantage décrits ci-dessus s\'appliquent toujours.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'application étant à code source fermé, aucune de ces affirmations ne peut être vérifiée dans le code, et PromptQuorum n\'a pas audité le trafic réseau. Quiconque traite des données confidentielles, ou configure le contrôle parental pour un enfant, devrait vérifier le comportement sur son propre appareil.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Le mot du développeur',
        content: [
          'Alessandro Facchini, développeur de MemoryAI, a relu le brouillon de cet avis et envoyé la note ci-dessous. Elle est présentée comme les propres mots du développeur, et non comme une évaluation éditoriale indépendante de PromptQuorum. Les corrections du même message sur les achats, les flux de données, les moteurs et la version d\'Android sont appliquées dans cet avis :',
          '« J\'ai créé MemoryAI pour les personnes qui veulent un assistant IA sans confier leurs mots à un serveur. Une fois un modèle téléchargé, il répond sans connexion internet, et la conversation reste sur le téléphone.',
          'Deux idées la façonnent. La première est une mémoire que l\'on peut voir : l\'application peut retenir ce que vous lui dites, avec vos propres mots, et vous pouvez ouvrir cette mémoire, la corriger ou la supprimer à tout moment. La seconde est l\'usage en famille : le Kid Mode verrouille le modèle et les réglages derrière un code PIN parental et garde des réponses adaptées à l\'âge.',
          'Elle est gratuite, sans compte et sans publicité, et elle parle six langues. Je la développe en Italie avec une petite équipe, et deux testeurs essaient les nouvelles versions sur de vrais téléphones Android et iPhone. Prochaines étapes : des outils que le modèle peut utiliser sur le téléphone, actuellement en test, et sur iPhone la première réponse plus rapide dont bénéficient déjà les utilisateurs Android. »',
        ],
        note: '— Alessandro Facchini, développeur',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les personnes qui veulent un assistant sur téléphone qui se souvient d\'elles sans compte cloud.** L\'Agent Memory est stockée en local et modifiable.',
          '**Les parents qui veulent un chat hors ligne destiné à un enfant.** Le contrôle parental est inclus, avec la réserve que sa solidité n\'est pas vérifiée.',
          '**Les personnes qui veulent interroger leurs propres PDF et photos en toute confidentialité.** Les questions sur documents et images sont incluses.',
          '**Les utilisateurs qui aiment apporter leurs propres modèles.** L\'import GGUF et les deux moteurs conviennent à quiconque a déjà un modèle favori.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Performances en pratique.** PromptQuorum n\'a pas exécuté l\'application : la vitesse, la consommation de batterie, la qualité des réponses et la solidité réelle du contrôle parental ne sont donc pas évaluées.',
          '**Code source et licence.** L\'application est à code source fermé ; le dépôt de retours ne contient qu\'un README et un outil de suivi des problèmes.',
          '**Analytique et trafic réseau.** L\'application est à code source fermé et PromptQuorum n\'a pas audité son trafic réseau : les flux de données décrits ci-dessus reflètent donc le récit du développeur et de la politique.',
          '**Prérequis Android.** Le développeur indique Android 9 ou ultérieur, ce que le texte Google Play lu ne montre pas ; le minimum iOS est 16.4.',
          '**Historique.** L\'application est sortie depuis environ sept mois, avec plus de 1 000 téléchargements sur Google Play et aucune note sur l\'App Store pour l\'instant ; les sources ne font état d\'aucun engagement de support.',
          '**Pas adaptée à ceux qui ont besoin de très gros modèles.** Les modèles téléchargeables sont petits : les usages plus lourds relèvent d\'un ordinateur.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Chat hors ligne open source avec Q&R sur documents sur l\'appareil et benchmarks',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Client de chat open source sur l\'appareil, avec sa propre bibliothèque de modèles',
          },
          {
            'Application': '[Off Grid](/fr/power-local-llm/off-grid-ai-review)',
            'Plateformes': 'iOS, Android, Mac, Windows',
            'Prix / licence': 'Freemium / MIT',
            'Différence clé': 'Suite d\'IA hors ligne open source sur téléphones et ordinateurs',
          },
          {
            'Application': '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / Apache 2.0',
            'Différence clé': 'Application open source sur l\'appareil de l\'équipe Google AI Edge',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche. Parmi ces quatre, MemoryAI est la seule application à code source fermé.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qui développe MemoryAI ?',
            a: 'Alessandro Facchini, qui publie sous le nom Facchinits ; la politique de confidentialité désigne Facchinits comme responsable du traitement des données.',
          },
          {
            q: 'Puis-je modifier ce dont l\'IA se souvient ?',
            a: 'Oui. L\'Agent Memory est facultative, stockée sur l\'appareil avec vos propres mots, et chaque entrée peut être consultée, modifiée ou supprimée. Elle nécessite un modèle d\'embedding pour fonctionner.',
          },
          {
            q: 'Puis-je utiliser mes propres modèles ?',
            a: 'Oui. Vous pouvez importer des fichiers GGUF compatibles depuis Hugging Face et les exécuter avec le moteur llama.cpp ; le moteur LiteRT exécute Gemma et, selon le développeur, aussi Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B et Phi-4 Mini au format LiteRT.',
          },
          {
            q: 'Fonctionne-t-elle sur Mac ?',
            a: 'L\'App Store mentionne les Mac avec puce Apple M1 ou ultérieure, mais indique pour l\'application « Designed for iPhone. Not verified for macOS » ; il n\'existe pas de version distincte pour ordinateur.',
          },
          {
            q: 'Où signaler un problème ?',
            a: 'Dans le [dépôt de retours](https://github.com/alessandrofacchini/memoryai-feedback/issues) public du développeur sur GitHub, ou à l\'adresse e-mail de support indiquée sur la fiche Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'MemoryAI est une application de chat mobile gratuite et hors ligne qui conserve sur l\'appareil une mémoire modifiable de l\'utilisateur et propose le contrôle parental, avec des questions sur documents et images, la voix mains libres et deux moteurs d\'inférence. Elle est aussi mise à jour fréquemment, avec une version la veille de la date de consultation de cet avis. En contrepartie, elle est à code source fermé, récente, de portée limitée, restreinte à de petits modèles sur l\'appareil, et ses affirmations de confidentialité ne peuvent pas être vérifiées dans le code. Elle convient aux lecteurs qui veulent ces fonctions précises et acceptent une application jeune et fermée ; ceux qui souhaitent un code auditable peuvent comparer [Private Mind](/fr/power-local-llm/private-mind-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[MemoryAI sur l\'App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — prix, historique des versions, prérequis, libellé de confidentialité et description, consultés le 23 octobre 2026.',
          '[MemoryAI sur Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — description, nombre de téléchargements, section Sécurité des données et date de dernière mise à jour, consultés le 23 octobre 2026.',
          '[Site web de MemoryAI](https://alessandrofacchini.github.io/memoryai/) — la page produit du développeur, en anglais et en italien, sur l\'usage hors ligne, le mode enfant, les fonctions et les modèles pris en charge, consultée le 20 octobre 2026.',
          '[Site web et politique de confidentialité de MemoryAI](https://alessandrofacchini.github.io/memoryai-privacy/) — traitement des données, usage du réseau, autorisations et services tiers, politique mise à jour pour la dernière fois le 20 octobre 2026.',
          '[memoryai-feedback sur GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — l\'outil public de suivi des problèmes du développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source gratuit sur l\'appareil pour iOS et Android.',
          '[Avis Off Grid](/fr/power-local-llm/off-grid-ai-review) — une suite d\'IA hors ligne open source pour téléphones et ordinateurs.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application d\'IA open source sur l\'appareil de Google.',
          '[Les meilleures applications de LLM local pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le comparatif Android plus large.',
          '[Les meilleures applications de LLM local pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif iPhone plus large.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-ja.webp',
    title: 'MemoryAIレビュー:iPhone・Android向けの無料オフラインAIチャット',
    seoTitle: 'MemoryAIレビュー:無料のオフラインAIチャットアプリ',
    intro:
      'MemoryAIは、イタリアの個人開発者Alessandro Facchini(Facchinitsの名義で活動)が提供する、iPhone・Android向けのオフラインチャットアプリです。llama.cppとGoogleのLiteRTという2つのエンジンで、オープンウェイトの言語モデルを端末上で動かします。App Storeでの最初のリリースは2026年3月30日でした。本レビューは、2026年10月23日に確認したストアの掲載情報、ウェブサイト、プライバシーポリシーに基づいています。',
    metaDescription:
      'MemoryAIレビュー:ドキュメントQ&A、編集可能なAgent Memory、音声、ペアレンタルコントロールを備えた無料のオフラインAIチャット。プライバシーと制約を解説します。',
    twitterDescription:
      'MemoryAIレビュー:ドキュメントQ&A、編集可能な端末内メモリ、ハンズフリー音声、ペアレンタルコントロールを備えた、iPhone・Android向けの無料・ソース非公開のオフラインAIチャットアプリ。ストアの掲載情報とプライバシーポリシーの内容を解説します。',
    audience:
      '言語モデルを端末上で動かす無料のチャットアプリを求めるiPhoneとAndroidのユーザーで、何がオフラインのままなのか、何が外部に送信されるのか、情報源が何を確認していないのかを知りたい方向け。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI レビュー',
    targetKeywords: [
      'memoryai アプリ レビュー',
      'memoryai offline private ai',
      'オフライン aiチャット アプリ iphone android',
      '端末内 ai エージェントメモリ',
      'お子さま向け オフライン aiチャット アプリ',
      'gguf インポート モバイルアプリ',
      'memoryai private mind 比較',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI(2026年10月25日時点でAndroidとiPhoneの両方でバージョン1.0.60)は、編集可能な端末内メモリとPINで保護されたキッズモードを組み合わせた、アカウント不要の無料チャットアプリです。** モデルはHugging Faceから一度ダウンロードすれば、その後はオフラインで動作します。チャットの内容を含まない利用イベントとクラッシュレポートは端末の外に送られるため、「トラッキングなし」という表記を当てにする前に、プライバシーの項を読んでください。',
    quickAnswerTop: {
      ja: {
        question: 'MemoryAIは本当にオフラインで動き、無料で使えますか?',
        answer:
          '掲載情報によれば、中核機能についてはその通りです。モデルを一度ダウンロードしたあとは、チャット、ドキュメントへの質問、音声が端末上で動作し、広告もアプリ内課金もありません。プライバシーポリシーには、チャットの内容を含まない利用イベントとクラッシュレポートが外部に送信されることが書かれています。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)と[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586)で無料。',
          'Gemma、Qwen、Llama、Phi、DeepSeekなどのGGUFおよびLiteRTモデルでチャットできる。',
          '表示・編集・削除できるオプションのAgent Memory、ドキュメントや画像についての質問。',
          'PIN、コンテンツフィルター、ロックされたモデルを備えたペアレンタルコントロール。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'MemoryAIとは?', anchor: 'what-is-memoryai' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'キッズモード', anchor: 'kid-mode' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
      { label: '開発者より', anchor: 'from-the-maker' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替アプリ', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'MemoryAIは、ソース非公開のiPhone・Androidアプリで、編集可能なAgent Memoryを端末上に保持し、ドキュメントへの質問、ハンズフリー音声、ペアレンタルコントロールを備えている。',
          },
          {
            type: 'plain-terms',
            text: 'アプリをインストールし、モデルを一度ダウンロードすれば、アカウントなしでチャットや会話、手元のPDFについての質問ができます。アプリが保持するオプションのメモリは端末上にあり、読むことも削除することもできます。',
          },
        ],
        items: [
          '開発元:Facchinitsの名義で公開している個人開発者Alessandro Facchini。それ以外に背後の企業はなく、ソースコードも公開されていない。',
          'メンテナンス:App Storeには2026年10月22日のリリース、Google Playには2026年10月25日の更新が表示されているため、更新停止の警告は当てはまらない。',
          '利用実績:Google Playのダウンロード数は1K+で、App Storeにはまだ評価がないため、公開されている実績は少ない。',
          'プラットフォーム:iPhone(iOS 16.4以降)とAndroid。App StoreにはApple M1以降のMacも表示されているが、「macOSでは未検証」と記されている。',
          '言語:アプリは英語、イタリア語、ドイツ語、フランス語、スペイン語、ポルトガル語で利用できる。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月23日に確認したApp StoreとGoogle Playの掲載情報、開発者のウェブサイトとプライバシーポリシー、公開されているフィードバック用リポジトリに基づいています。PromptQuorumはアプリのインストール、テスト、ベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'MemoryAIとは?',
        content: [
          '**MemoryAIは、クラウドサービスを呼び出す代わりに、オープンウェイトの言語モデルをローカルで動かすモバイル向けチャットアプリです。** 掲載情報によれば、モデルは同梱されておらず、アプリ内のリストから選ぶか、Hugging Faceから互換性のある任意のGGUFファイルをインポートします。初回の実行にはダウンロードのためのネットワーク接続が必要です。推論エンジンは2種類で、GGUFモデル向けのllama.cppと、LiteRT形式のモデル向けのGoogleのLiteRT(MediaPipe)です。開発者によれば、LiteRTはGemmaに限られず、Qwen 2.5 1.5B、DeepSeek R1 Distill 1.5B、Phi-4 Miniも動作します。',
          'App Storeの掲載タイトルは、米国・日本・韓国のストアでは「MemoryAI: Offline Private AI」、ドイツでは「MemoryAI: Private Offline-KI」、ブラジルでは「MemoryAI: a IA que lembra」です。Google Playのパッケージ名はcom.ts.memoryaiです。「Agent Memory」(エージェントメモリ)はこのアプリの機能であり、別個の製品ではありません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**MemoryAIは2つのモバイルストアから入手します。デスクトップ版、ソースコード、サイドロード用ファイルは提供されていません。** 以下の2つのストアリンクは、開発者のサイトと掲載情報が使っているものです。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'iPhone',
            '入手先': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586)(iOS 16.4以降、198.7 MB)',
          },
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)(英語、イタリア語版へのリンクあり。最終更新2026年10月20日)',
          },
          {
            'プラットフォーム': '不具合の報告',
            '入手先': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues)(フィードバック専用、ソースコードなし)',
          },
        ],
        note: '掲載されているバージョン:Androidは1.0.60(Google Playの掲載情報、2026年10月25日更新)、iOSは1.0.60(App Storeの掲載情報、2026年10月25日リリース)です。本レビューの本文は1.0.56を基に執筆し、Google Playの1.0.60のリリースノートで補足しています。開発者はAndroid 9以降が必要と述べていますが、確認できたGoogle Playの文面には最低Androidバージョンの記載はありません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**セットアップはストアの掲載情報に書かれた順序に沿っています。PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'App StoreまたはGoogle PlayからMemoryAIをダウンロードします。掲載情報によれば、アカウントは不要で、端末のRAMは4 GB以上が望ましいとされています。',
          },
          {
            title: 'Wi-Fiでモデルをダウンロードする',
            whyItMatters: '掲載情報によれば、モデルは各0.3〜4 GBです。2026年10月18日のアップデートでは、最初に提案されるモデルが、お使いの端末で問題なく動作する中で最も軽いものになり、画面を離れてもダウンロードが続くとされています。1.0.56のリリースノートでは、開始前にモデルのサイズとおおよその所要時間が表示され、ダウンロード中は残りの量が表示され、接続が切れた場合はアプリが自動的に再開するとされています。Google PlayとApp Storeの1.0.60のリリースノートでは、最初のモデルのダウンロードがWi-Fi接続時に自動で始まること(「スキップ」で一時停止)、モデルが端末に適合するかどうかでグループ分けされ、大きすぎるものは求めるまで非表示になること、ネットワークで中断したダウンロードが途中から再開することが追記されています。',
          },
          {
            title: 'チャットまたは会話する',
            whyItMatters: '入力するか、音声入力を使うか、連続音声モードをオンにします。このモードでは、アプリが聞き取り、回答し、その回答をタップなしで読み上げます。',
          },
          {
            title: 'ドキュメントや画像を追加する',
            whyItMatters: 'PDF、TXT、Markdownファイルをインポートするか、写真を選んで、それらについて質問します。',
          },
          {
            title: '必要に応じてAgent Memoryをオンにする',
            whyItMatters: '既定ではオフで、埋め込みモデルが必要です。オンにすると、保存された内容を開いて編集または削除できます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、App StoreとGoogle Playの説明文またはプライバシーポリシーに基づくものです。**',
        ],
        items: [
          '**2つのエンジンとカスタムモデル。** モデルごとにllama.cppまたはGoogleのMediaPipe/LiteRTを選べます。Hugging Faceから互換性のある任意のGGUFファイルをインポートでき、制限付きモデル向けにHugging Faceトークンを保存でき、ダウンロードの一時停止と再開ができ、モデルごとにtemperature、top-k、top-p、最大トークン数を調整できます。',
          '**Agent Memory。** オプションの機能です。AIはユーザーが伝えた内容をユーザー自身の言葉で端末上に保存し、各メモリを表示、編集、削除できます。1.0.52のリリースノートによれば、「メールを書いて」のような依頼はメモリとして保存されなくなりました。',
          '**ドキュメントと画像。** PDF、TXT、Markdownファイルについての質問、ビジョンモデルによる画像分析(複数の画像を同時に)、Google ML Kitを通じた写真のテキスト認識に対応しています。',
          '**音声。** 端末内の音声入力、読み上げ(text-to-speech)、連続のハンズフリーモードがあります。',
          '**日常的なツール。** チャット検索、20種類のペルソナテンプレート、1秒あたりのトークン数で示す速度ベンチマーク、コンテキストウィンドウの表示、読み込んだモデルがGPUとCPUのどちらで動いているかを示す画面、AndroidではGoogle Drive、iPhoneではiCloudへのバックアップがあります。',
        ],
        note: '2つのストアの説明文はほぼ同じですが、同一ではありません。たとえばiOS版のテキストはiCloudバックアップに、Android版のテキストはGoogle Driveに触れています。最終的な判断基準は、インストールしたビルドです。',
      },
      kidMode: {
        id: 'kid-mode',
        title: 'キッズモード',
        content: [
          '**このアプリには、お子さま向けのPIN保護モードがあり、ストアの説明文はこれを主要機能として紹介しています。** 以下の内容はすべてその説明文に基づくもので、PromptQuorumはこのモードの実際の有効性をテストしていません。',
        ],
        items: [
          '**保護者用PIN。** 保護者がPINを設定し、モードとその設定を保護します。',
          '**ロックされたモデル。** 使用中のモデルが固定されるため、お子さまはモデルの切り替えや設定の変更ができません。',
          '**コンテンツフィルター。** 不適切な単語はモデルに届く前にブロックされ、安全プロンプトが年齢にふさわしい回答を導きます。',
          '**インポート時の警告。** 未検証のインポートモデルをこのモードで実行する前に、アプリが警告を表示します。',
          '**保護者用ロック解除。** チャット画面から、モードを終了せずに設定とドキュメントを一時的に開けます。',
          '**通知なし。** プライバシーポリシーによれば、キッズモードの間は通知がオフになり、モードをオフにすると保護者の選択に戻ります。同ポリシーは、このモードでも利用統計とクラッシュレポートが収集される場合があるとも述べています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**チャット、ドキュメント、メモリは既定で端末上にとどまり、開発者によれば、アプリにはAIサーバーがなく、チャットのテキストも送信しません。** Google PlayのData safetyセクションでは、第三者と共有されるデータはなく、アプリ情報とパフォーマンス、デバイスまたはその他のIDが収集される可能性があり、通信中は暗号化されると申告されています。App Storeのプライバシーラベルには、分析用として検索履歴、デバイスID、製品の操作が、アプリの機能用としてデバイスID、クラッシュとパフォーマンスのデータが挙げられており、いずれも「ユーザーに関連付けられない」とされています。',
          '[プライバシーポリシー](https://alessandrofacchini.github.io/memoryai-privacy/)(2026年10月20日更新)は、端末の外に出るものとして、TelemetryDeckへの利用イベント、Sentryへのクラッシュレポート、Hugging Faceからのモデルのダウンロードを挙げています。OneSignalによるプッシュ通知は、アプリ内の「通知」の確認を承諾した場合にのみ開始され、設定でオフにすると端末は配信リストから外れます。広告キャンペーンの効果測定のために2つのイベント(オンボーディング完了、メッセージ送信)を記録していたGoogle Analytics for Firebaseは、1.0.55より前のAndroid版でのみ、かつ以前のアプリ内の確認を承諾した場合にのみ動作していました。バージョン1.0.55以降には含まれておらず、iOSでは使われていないとポリシーに記されています。ご自身のGoogle DriveまたはiCloudへのバックアップはオプションです。開発者によれば、利用イベントにはチャットの内容が含まれず(たとえば「モデルを読み込んだ」)、クラッシュレポートにもチャットやドキュメントの内容は含まれません。また、ローカルのデータはアプリによって暗号化されず、端末自体の保護に依存すること、会話がアプリの外に出るのはユーザーがエクスポートしたときだけであることも記されています。',
          'ストアの説明文は「アプリ内課金なし」としており、開発者もPromptQuorumに対してアプリ内課金はないと確認しました。プライバシーポリシーにあった課金に関する以前の記述は古くなっていたため、修正されています。「トラッキングなし」という表記は、端末の外に何も出ないという意味ではありません。上記の分析機能とクラッシュレポートは引き続き該当します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アプリはソース非公開のため、これらの主張をコードで確認することはできず、PromptQuorumはネットワーク通信の監査も行っていません。機密データを扱う方や、お子さまのためにペアレンタルコントロールを設定する方は、ご自身の端末で動作を確認してください。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発者より',
        content: [
          'MemoryAIの開発者であるAlessandro Facchini氏が、このレビューの草稿を確認し、以下のメモを送ってくれました。以下は開発者自身の言葉として提示するものであり、PromptQuorumによる独立した編集上の評価ではありません。同じメッセージにあった課金、データの流れ、エンジン、Androidのバージョンに関する訂正は、このレビューに反映済みです:',
          '「私がMemoryAIを作ったのは、自分の言葉をサーバーに渡さずにAIアシスタントを使いたい人のためです。モデルをダウンロードすれば、インターネット接続なしで応答し、会話は端末の中にとどまります。',
          'このアプリには2つの考え方があります。1つ目は、目に見えるメモリです。アプリは、あなたが伝えたことをあなた自身の言葉で記憶でき、そのメモリはいつでも開いて、修正したり削除したりできます。2つ目は家族での利用です。キッズモードは、モデルと設定を保護者用PINの内側にロックし、年齢にふさわしい返答を保ちます。',
          '無料で、アカウントも広告もなく、6言語に対応しています。私はイタリアで小さなチームとともに開発しており、2人のテスターが実際のAndroid端末とiPhoneで新しいビルドを試しています。次の予定は、端末上でモデルが使えるツール(現在テスト中)と、iPhoneでの、Androidではすでに実現している、より速い最初の応答です。」',
        ],
        note: '— Alessandro Facchini氏、開発者',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**クラウドアカウントなしで、自分のことを覚えていてくれるスマートフォンのアシスタントを求める人。** Agent Memoryは端末内に保存され、編集できます。',
          '**お子さま向けのオフラインチャットを求める保護者。** ペアレンタルコントロールは含まれていますが、その強度は未検証です。',
          '**自分のPDFや写真についてプライベートに質問したい人。** ドキュメントと画像への質問が含まれています。',
          '**自分のモデルを持ち込みたいユーザー。** GGUFのインポートと2つのエンジンは、すでにお気に入りのモデルがある人に向いています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、回答の品質、ペアレンタルコントロールの実際の強度は評価していません。',
          '**ソースコードとライセンス。** アプリはソース非公開で、フィードバック用リポジトリにはREADMEとイシュートラッカーしかありません。',
          '**分析機能と通信内容。** アプリはソース非公開で、PromptQuorumは通信を監査していません。上記のデータの流れは、開発者とポリシーの説明によるものです。',
          '**Androidの要件。** 開発者はAndroid 9以降と述べていますが、確認できたGoogle Playのテキストには示されていません。iOSの最低バージョンは16.4です。',
          '**実績。** アプリの公開からおよそ7か月で、Google Playのダウンロード数は1K+、App Storeにはまだ評価がなく、情報源にサポートの確約もありません。',
          '**非常に大きなモデルが必要な人には向きません。** ダウンロードできるモデルは小型のものなので、より重い作業はコンピューターで行うのが適切です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '端末内ドキュメントQ&Aとベンチマークを備えた、オープンソースのオフラインチャット',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '独自のモデルライブラリを持つ、オープンソースの端末内チャットクライアント',
          },
          {
            'アプリ': '[Off Grid](/ja/power-local-llm/off-grid-ai-review)',
            'プラットフォーム': 'iOS、Android、Mac、Windows',
            '価格 / ライセンス': 'フリーミアム / MIT',
            '主な違い': 'スマートフォンとデスクトップで使えるオープンソースのオフラインAIスイート',
          },
          {
            'アプリ': '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'GoogleのAI Edgeチームによるオープンソースの端末内アプリ',
          },
        ],
        note: '競合アプリの詳細は頻繁に変わります。現在の価格、ライセンス、対応プラットフォームは、各アプリの掲載ページで確認してください。この4つのうち、ソースが非公開なのはMemoryAIだけです。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'MemoryAIは誰が作っていますか?',
            a: 'Facchinitsの名前で公開しているAlessandro Facchiniです。プライバシーポリシーは、Facchinitsをデータ管理者として挙げています。',
          },
          {
            q: 'AIが覚えている内容を編集できますか?',
            a: 'はい。Agent Memoryはオプションで、ユーザー自身の言葉で端末上に保存され、各項目を表示、編集、削除できます。動作には埋め込みモデルが必要です。',
          },
          {
            q: '自分のモデルを使えますか?',
            a: 'はい。Hugging Faceから互換性のあるGGUFファイルをインポートして、llama.cppエンジンで実行できます。LiteRTエンジンはGemmaのほか、開発者によればLiteRT形式のQwen 2.5 1.5B、DeepSeek R1 Distill 1.5B、Phi-4 Miniも実行します。',
          },
          {
            q: 'Macでも動きますか?',
            a: 'App StoreにはApple M1以降のMacが表示されていますが、アプリには「iPhone向けに設計。macOSでは未検証」と記されており、独立したデスクトップ版はありません。',
          },
          {
            q: '問題はどこに報告すればよいですか?',
            a: 'GitHubにある開発者の公開[フィードバック用リポジトリ](https://github.com/alessandrofacchini/memoryai-feedback/issues)か、Google Playの掲載情報にあるサポート用メールアドレスに報告してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'MemoryAIは、ユーザーに関する編集可能なメモリを端末上に保持し、ペアレンタルコントロールを提供する無料のオフラインモバイルチャットアプリで、ドキュメントと画像への質問、ハンズフリー音声、2つの推論エンジンも備えています。更新も頻繁で、本レビューの確認日の前日にもリリースがありました。その一方で、ソースは非公開で、公開から間もなく、利用規模は小さく、端末上の小型モデルに限られ、プライバシーに関する主張をコードで確認することはできません。これらの機能を求め、新しくソース非公開のアプリを受け入れられる方に向いています。検証可能なコードを求める方は、[Private Mind](/ja/power-local-llm/private-mind-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較してみてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのMemoryAI](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — 価格、バージョン履歴、要件、プライバシーラベル、説明文。2026年10月23日に確認。',
          '[Google PlayのMemoryAI](https://play.google.com/store/apps/details?id=com.ts.memoryai) — 説明文、ダウンロード数、Data safetyセクション、最終更新日。2026年10月23日に確認。',
          '[MemoryAIのウェブサイト](https://alessandrofacchini.github.io/memoryai/) — 開発者による英語・イタリア語の製品ページ。オフライン利用、キッズモード、機能、対応モデルについて。2026年10月20日確認。',
          '[MemoryAIのウェブサイトとプライバシーポリシー](https://alessandrofacchini.github.io/memoryai-privacy/) — データの扱い、ネットワーク利用、権限、第三者サービス。ポリシーの最終更新は2026年10月20日。',
          '[GitHubのmemoryai-feedback](https://github.com/alessandrofacchini/memoryai-feedback) — 開発者の公開イシュートラッカー。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhone・Android向けの無料でMITライセンスのオフラインチャットアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOS・Android向けの無料のオープンソース端末内チャットクライアント。',
          '[Off Gridレビュー](/ja/power-local-llm/off-grid-ai-review) — スマートフォンとデスクトップ向けのオープンソースのオフラインAIスイート。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleのオープンソースの端末内AIアプリ。',
          '[2026年版 Android向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けのより幅広いまとめ。',
          '[2026年版 iPhone向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより幅広いまとめ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-pt.webp',
    title: 'MemoryAI: Análise do App Gratuito de Chat de IA Offline para iPhone e Android',
    seoTitle: 'Análise do MemoryAI: App Grátis de Chat de IA Offline',
    intro:
      'O MemoryAI é um app de chat offline para iPhone e Android de Alessandro Facchini (que atua como Facchinits), desenvolvedor independente na Itália. Ele roda modelos de linguagem de peso aberto no celular por dois motores, o llama.cpp e o LiteRT do Google, e foi lançado na App Store em 30 de março de 2026. Esta análise reflete as fichas das lojas, o site e a política de privacidade, consultados em 23 de outubro de 2026.',
    metaDescription:
      'Análise do MemoryAI: chat de IA offline, grátis e de código fechado para iPhone e Android, com perguntas sobre documentos, memória editável e voz.',
    twitterDescription:
      'Análise do MemoryAI: app de chat de IA offline, gratuito e de código fechado, para iPhone e Android, com perguntas sobre documentos, memória editável no dispositivo, voz com as mãos livres e controles parentais. O que dizem as fichas e a política de privacidade.',
    audience:
      'Usuários de iPhone e Android que querem um app de chat gratuito que rode modelos de linguagem no dispositivo e que precisam saber o que fica offline, o que é enviado para fora e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do MemoryAI',
    targetKeywords: [
      'memoryai app análise',
      'memoryai ia offline privada',
      'app de chat de ia offline iphone android',
      'memória de agente de ia no dispositivo',
      'app de chat de ia offline para crianças',
      'importar gguf app de celular',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**O MemoryAI (versão 1.0.60 no Android e no iPhone em 25 de outubro de 2026) combina uma memória editável no dispositivo com um Modo Criança protegido por PIN em um app de chat gratuito que não exige conta.** Os modelos são baixados uma vez do Hugging Face e depois rodam offline. Eventos de uso e relatórios de falhas, sem o conteúdo das conversas, saem sim do celular, então leia a seção de privacidade antes de confiar na frase "sem rastreamento".',
    quickAnswerTop: {
      pt: {
        question: 'O MemoryAI é mesmo offline e gratuito?',
        answer:
          'Segundo as fichas, sim para os recursos principais: depois de um download único do modelo, o chat, as perguntas sobre documentos e a voz rodam no celular, sem anúncios e sem compras no app. A política de privacidade acrescenta que eventos de uso e relatórios de falhas, sem o conteúdo das conversas, são enviados para fora.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) e na [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat com modelos GGUF e LiteRT como Gemma, Qwen, Llama, Phi e DeepSeek.',
          'Agent Memory opcional que você pode ver, editar e apagar, além de perguntas sobre documentos e imagens.',
          'Controles parentais com PIN, filtro de conteúdo e modelo bloqueado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o MemoryAI?', anchor: 'what-is-memoryai' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Modo Criança', anchor: 'kid-mode' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
      { label: 'A palavra do desenvolvedor', anchor: 'from-the-maker' },
      { label: 'Para quem é indicado', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
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
            text: 'O MemoryAI é um app de código fechado para iPhone e Android que mantém no dispositivo uma Agent Memory editável e acrescenta perguntas sobre documentos, voz com as mãos livres e controles parentais.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app, baixa um modelo uma vez e depois conversa, fala ou faz perguntas sobre seus próprios PDFs sem conta; a memória opcional que ele guarda sobre você fica no celular, onde você pode lê-la e apagá-la.',
          },
        ],
        items: [
          'Desenvolvedor: Alessandro Facchini, um único desenvolvedor que publica como Facchinits, sem empresa por trás além disso e sem código-fonte público.',
          'Manutenção: a App Store mostra uma versão em 22 de outubro de 2026 e o Google Play uma atualização em 25 de outubro de 2026, então não se aplica aviso de projeto abandonado.',
          'Alcance: o Google Play mostra mais de 1 mil downloads e a App Store ainda não mostra avaliações, então o app tem pouco histórico público.',
          'Plataformas: iPhone (iOS 16.4 ou posterior) e Android; a App Store também lista Macs com Apple M1 ou posterior, marcados como "não verificado para macOS".',
          'Idiomas: o app está disponível em inglês, italiano, alemão, francês, espanhol e português.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia nas fichas da App Store e do Google Play, no site e na política de privacidade do desenvolvedor e no repositório público de feedback, consultados em 23 de outubro de 2026. A PromptQuorum não instalou, não testou nem fez benchmarks do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'O que é o MemoryAI?',
        content: [
          '**O MemoryAI é um app de chat para celular que roda modelos de linguagem de peso aberto localmente, em vez de chamar um serviço na nuvem.** Segundo as fichas, nenhum modelo vem incluído: você escolhe um na lista do app ou importa qualquer arquivo GGUF compatível do Hugging Face, e a primeira execução precisa de conexão com a rede para baixá-lo. São oferecidos dois motores de inferência, o llama.cpp para modelos GGUF e o LiteRT (MediaPipe) do Google para modelos no formato LiteRT. Segundo o desenvolvedor, o LiteRT não se limita ao Gemma: ele também roda Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B e Phi-4 Mini.',
          'A ficha da App Store tem o título "MemoryAI: Offline Private AI" nas lojas dos EUA, do Japão e da Coreia, "MemoryAI: Private Offline-KI" na Alemanha e "MemoryAI: a IA que lembra" no Brasil; o pacote do Google Play é com.ts.memoryai. A "Agent Memory" é um recurso deste app, não um produto separado.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O MemoryAI é instalado pelas duas lojas de apps para celular; não há versão para computador, código-fonte nem arquivo para instalação manual.** Os dois links das lojas abaixo são os que o site e as fichas do desenvolvedor usam.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 ou posterior, 198.7 MB)',
          },
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/) (inglês, com link para a versão italiana; atualizada em 20 de outubro de 2026)',
          },
          {
            'Plataforma': 'Relatos de bugs',
            'Onde obter': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues) (só feedback, sem código-fonte)',
          },
        ],
        note: 'Versões listadas: 1.0.60 no Android (ficha do Google Play, atualizada em 25 de outubro de 2026) e 1.0.60 no iOS (ficha da App Store, lançada em 25 de outubro de 2026). O texto da análise foi escrito sobre a 1.0.56 e complementado com as notas da 1.0.60 do Google Play. O desenvolvedor afirma que o Android 9 ou superior é necessário; o texto do Google Play consultado não mostra versão mínima do Android.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A configuração segue a ordem descrita nas fichas das lojas; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Baixe o MemoryAI na App Store ou no Google Play; segundo as fichas, não é necessário conta e o celular deve ter 4 GB de RAM ou mais.',
          },
          {
            title: 'Baixar um modelo no Wi-Fi',
            whyItMatters: 'Segundo as fichas, os modelos têm de 0.3 a 4 GB cada. A atualização de 18 de outubro de 2026 diz que o primeiro modelo sugerido agora é o mais leve que roda bem no seu celular e que o download continua se você sair da tela. As notas da 1.0.56 acrescentam que o app mostra o tamanho de um modelo e o tempo aproximado de download antes de você começar, mostra quanto falta durante o download e o retoma sozinho se a conexão cair. As notas da 1.0.60 no Google Play e na App Store acrescentam que o download do primeiro modelo agora começa sozinho no Wi-Fi (Pular o pausa), que os modelos são agrupados pelo que cabe no seu aparelho, com os grandes demais ocultos até você pedir, e que downloads interrompidos pela rede continuam de onde pararam',
          },
          {
            title: 'Conversar ou falar',
            whyItMatters: 'Digite, dite ou ative o modo de voz contínuo, no qual o app escuta, responde e lê a resposta em voz alta sem toques.',
          },
          {
            title: 'Adicionar documentos ou imagens',
            whyItMatters: 'Importe arquivos PDF, TXT ou Markdown, ou escolha fotos, e faça perguntas sobre eles.',
          },
          {
            title: 'Ativar a Agent Memory, se quiser',
            whyItMatters: 'Ela vem desativada por padrão e precisa de um modelo de embedding; depois de ativada, você pode abrir, editar ou apagar o que ela guardou.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm das descrições da App Store e do Google Play ou da política de privacidade.**',
        ],
        items: [
          '**Dois motores e modelos personalizados.** Escolha o llama.cpp ou o MediaPipe/LiteRT do Google para cada modelo, importe qualquer arquivo GGUF compatível do Hugging Face, salve um token do Hugging Face para modelos com acesso restrito, pause e retome downloads e ajuste temperatura, top-k, top-p e o máximo de tokens por modelo.',
          '**Agent Memory.** Opcional; a IA guarda no dispositivo, em suas próprias palavras, o que você conta a ela, e você pode ver, editar ou apagar cada memória. As notas da versão 1.0.52 dizem que pedidos como "escreva um e-mail" deixaram de ser salvos como memórias.',
          '**Documentos e imagens.** Perguntas sobre arquivos PDF, TXT e Markdown, análise de imagens com modelos de visão (várias imagens ao mesmo tempo) e reconhecimento de texto em fotos pelo Google ML Kit.',
          '**Voz.** Entrada de voz no dispositivo, conversão de texto em fala e um modo contínuo com as mãos livres.',
          '**Ferramentas do dia a dia.** Busca nas conversas, 20 modelos de persona, um benchmark de velocidade em tokens por segundo, a exibição da janela de contexto, uma tela que mostra se o modelo carregado roda na GPU ou na CPU e backup no Google Drive no Android ou no iCloud no iPhone.',
        ],
        note: 'As duas descrições das lojas são quase idênticas, mas não iguais; por exemplo, o texto do iOS menciona o backup no iCloud e o do Android, o Google Drive. A versão instalada é a palavra final.',
      },
      kidMode: {
        id: 'kid-mode',
        title: 'Modo Criança',
        content: [
          '**O app oferece um modo protegido por PIN para crianças, que as descrições das lojas apresentam como um recurso de destaque.** Tudo o que segue vem dessas descrições; a PromptQuorum não testou o quão bem o modo se sustenta.',
        ],
        items: [
          '**PIN dos pais.** Um dos pais define um PIN que protege o modo e suas configurações.',
          '**Modelo bloqueado.** O modelo ativo fica fixo, então a criança não pode trocar de modelo nem alterar as configurações.',
          '**Filtro de conteúdo.** Palavras inadequadas são bloqueadas antes de chegarem ao modelo, e um prompt de segurança orienta respostas adequadas à idade.',
          '**Avisos de importação.** O app avisa antes de um modelo importado não verificado poder rodar neste modo.',
          '**Desbloqueio dos pais.** As configurações e os documentos podem ser abertos temporariamente a partir da tela de chat sem encerrar o modo.',
          '**Sem notificações.** Segundo a política de privacidade, as notificações ficam desativadas enquanto o Modo Criança está ativo, e desligar o modo restaura a escolha dos responsáveis. A política acrescenta que estatísticas de uso e relatórios de falhas ainda podem ser coletados nesse modo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**Conversas, documentos e memórias ficam no dispositivo por padrão, e o desenvolvedor diz que o app não tem servidores de IA e não envia o texto das conversas.** A seção Segurança dos dados do Google Play declara que nenhum dado é compartilhado com terceiros, com possível coleta de informações do app e de desempenho e de IDs do dispositivo ou outros, criptografados em trânsito. O rótulo de privacidade da App Store lista histórico de pesquisa, ID do dispositivo e interação com o produto para análises, e ID do dispositivo e dados de falhas e desempenho para o funcionamento do app, todos marcados como não vinculados a você.',
          'A [política de privacidade](https://alessandrofacchini.github.io/memoryai-privacy/), atualizada em 20 de outubro de 2026, nomeia o que sai do celular: eventos de uso para o TelemetryDeck, relatórios de falhas para o Sentry e downloads de modelos do Hugging Face. As notificações push via OneSignal só começam se você aceitar o aviso "Notificações" do app, e desativá-las em Configurações cancela o registro do dispositivo. O Google Analytics para Firebase, que registrava dois eventos (onboarding concluído e mensagem enviada) para medir campanhas de anúncios, só rodava em versões do Android anteriores à 1.0.55 e apenas se o aviso anterior do app tivesse sido aceito; a versão 1.0.55 e as posteriores não o incluem, e, segundo a política, ele não é usado no iOS. O backup no seu próprio Google Drive ou iCloud é opcional. O desenvolvedor acrescenta que os eventos de uso não trazem conteúdo das conversas (por exemplo, "um modelo foi carregado") e que os relatórios de falhas não trazem conteúdo de conversas nem de documentos. Ela também diz que os dados locais não são criptografados pelo app e dependem da proteção do próprio dispositivo, e que as conversas só saem do app quando você as exporta.',
          'As descrições das lojas dizem "sem compras no app", e o desenvolvedor confirmou à PromptQuorum que o app não tem nenhuma; um parágrafo antigo sobre compras na política de privacidade estava desatualizado e foi corrigido. A frase "sem rastreamento" não significa que nada sai do celular: as análises de uso e os relatórios de falhas descritos acima continuam valendo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser conferida no código, e a PromptQuorum não auditou o tráfego de rede. Quem lida com dados confidenciais, ou configura os controles parentais para uma criança, deve verificar o comportamento no próprio aparelho.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'A palavra do desenvolvedor',
        content: [
          'Alessandro Facchini, desenvolvedor do MemoryAI, revisou o rascunho desta análise e enviou a nota abaixo. Ela é apresentada como as palavras do próprio desenvolvedor, não como uma avaliação editorial independente da PromptQuorum. As correções da mesma mensagem sobre compras, fluxos de dados, motores e versão do Android foram aplicadas nesta análise:',
          '"Criei o MemoryAI para quem quer um assistente de IA sem entregar suas palavras a um servidor. Depois que um modelo é baixado, ele responde sem conexão com a internet, e a conversa fica no celular.',
          'Duas ideias o moldam. A primeira é uma memória que você pode ver: o app pode lembrar o que você conta, com as suas próprias palavras, e você pode abrir essa memória, corrigi-la ou apagá-la a qualquer momento. A segunda é o uso em família: o Modo Criança trava o modelo e as configurações atrás de um PIN dos responsáveis e mantém as respostas adequadas à idade.',
          'É gratuito, sem conta e sem anúncios, e fala seis idiomas. Eu o desenvolvo na Itália com uma equipe pequena, e dois testadores experimentam as novas versões em celulares Android e iPhones reais. O que vem a seguir: ferramentas que o modelo pode usar no celular, agora em teste, e, no iPhone, a primeira resposta mais rápida que os usuários de Android já têm."',
        ],
        note: '— Alessandro Facchini, desenvolvedor',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Pessoas que querem um assistente no celular que se lembre delas sem uma conta na nuvem.** A Agent Memory é guardada localmente e é editável.',
          '**Pais que querem um chat offline para crianças.** Os controles parentais estão incluídos, com a ressalva de que sua força não foi verificada.',
          '**Pessoas que querem fazer perguntas sobre seus próprios PDFs e fotos com privacidade.** Perguntas sobre documentos e imagens estão incluídas.',
          '**Usuários que gostam de trazer os próprios modelos.** A importação de GGUF e os dois motores servem a quem já tem um modelo favorito.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria, qualidade das respostas e a força real dos controles parentais não foram avaliados.',
          '**Código-fonte e licença.** O app é de código fechado; o repositório de feedback contém apenas um README e um rastreador de problemas.',
          '**Análises de uso e tráfego de rede.** O app é de código fechado e a PromptQuorum não auditou o tráfego de rede dele; os fluxos de dados descritos acima são, portanto, o relato do desenvolvedor e da política.',
          '**Requisitos do Android.** O desenvolvedor informa Android 9 ou superior, o que o texto lido do Google Play não mostra; o mínimo no iOS é 16.4.',
          '**Histórico.** O app está disponível há cerca de sete meses, com mais de 1 mil downloads no Google Play e sem avaliações na App Store ainda; as fontes não indicam nenhum compromisso de suporte.',
          '**Não é para quem precisa de modelos muito grandes.** Os modelos para download são pequenos, então trabalhos mais pesados cabem melhor em um computador.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline de código aberto com perguntas sobre documentos no dispositivo e benchmarks',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente de chat de código aberto no dispositivo, com biblioteca de modelos própria',
          },
          {
            'App': '[Off Grid](/pt/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'iOS, Android, Mac, Windows',
            'Preço / licença': 'Freemium / MIT',
            'Diferença principal': 'Suíte de IA offline de código aberto para celulares e computadores',
          },
          {
            'App': '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'App de código aberto no dispositivo da equipe de AI Edge do Google',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais de cada app na ficha dele. Entre esses quatro, o MemoryAI é o único app de código fechado.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quem faz o MemoryAI?',
            a: 'Alessandro Facchini, que publica com o nome Facchinits; a política de privacidade nomeia a Facchinits como controladora dos dados.',
          },
          {
            q: 'Posso editar o que a IA lembra?',
            a: 'Sim. A Agent Memory é opcional, fica guardada no dispositivo em suas próprias palavras, e cada entrada pode ser vista, editada ou apagada. Ela precisa de um modelo de embedding para funcionar.',
          },
          {
            q: 'Posso usar meus próprios modelos?',
            a: 'Sim. Você pode importar arquivos GGUF compatíveis do Hugging Face e rodá-los no motor llama.cpp; o motor LiteRT roda o Gemma e, segundo o desenvolvedor, também Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B e Phi-4 Mini em formato LiteRT.',
          },
          {
            q: 'Funciona em um Mac?',
            a: 'A App Store lista Macs com Apple M1 ou posterior, mas marca o app como "Designed for iPhone. Not verified for macOS" ("Projetado para iPhone. Não verificado para macOS"), e não há versão separada para computador.',
          },
          {
            q: 'Onde relato um problema?',
            a: 'No [repositório de feedback](https://github.com/alessandrofacchini/memoryai-feedback/issues) público do desenvolvedor no GitHub, ou pelo e-mail de suporte que consta na ficha do Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O MemoryAI é um app de chat móvel offline e gratuito que mantém no dispositivo uma memória editável do usuário e oferece controles parentais, além de perguntas sobre documentos e imagens, voz com as mãos livres e dois motores de inferência. Ele também é atualizado com frequência, com uma versão no dia anterior à consulta desta análise. Em contrapartida, é de código fechado, recente, de alcance pequeno, limitado a modelos pequenos no dispositivo, e suas afirmações de privacidade não podem ser conferidas no código. Serve a quem quer esses recursos específicos e aceita um app jovem e fechado; quem quer código auditável pode comparar o [Private Mind](/pt/power-local-llm/private-mind-review) ou o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[MemoryAI na App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — preço, histórico de versões, requisitos, rótulo de privacidade e descrição, consultados em 23 de outubro de 2026.',
          '[MemoryAI no Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — descrição, número de downloads, seção Segurança dos dados e data da última atualização, consultados em 23 de outubro de 2026.',
          '[Site do MemoryAI](https://alessandrofacchini.github.io/memoryai/) — a página do produto do desenvolvedor, em inglês e italiano, sobre uso offline, modo infantil, recursos e modelos compatíveis, consultada em 20 de outubro de 2026.',
          '[Site e política de privacidade do MemoryAI](https://alessandrofacchini.github.io/memoryai-privacy/) — tratamento de dados, uso da rede, permissões e serviços de terceiros, política atualizada em 20 de outubro de 2026.',
          '[memoryai-feedback no GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — o rastreador público de problemas do desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat no dispositivo, gratuito e de código aberto, para iOS e Android.',
          '[Análise do Off Grid](/pt/power-local-llm/off-grid-ai-review) — uma suíte de IA offline de código aberto para celulares e computadores.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de IA no dispositivo, de código aberto, do Google.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-ar.webp',
    title: 'مراجعة MemoryAI: تطبيق دردشة ذكاء اصطناعي مجاني دون اتصال لـ iPhone وأندرويد',
    seoTitle: 'مراجعة MemoryAI: دردشة ذكاء اصطناعي مجانية دون اتصال',
    intro:
      'MemoryAI تطبيق دردشة يعمل دون اتصال لأجهزة iPhone وأندرويد من أليساندرو فاكيني (باسم Facchinits)، وهو مطوّر مستقل في إيطاليا. يشغّل نماذج لغوية مفتوحة الأوزان على الهاتف عبر محرّكين هما llama.cpp و LiteRT من Google، وصدر أول إصدار منه على App Store في 30 مارس 2026. تعكس هذه المراجعة صفحتي المتجر والموقع وسياسة الخصوصية كما جرى التحقق منها في 23 أكتوبر 2026.',
    metaDescription:
      'مراجعة MemoryAI: تطبيق دردشة مجاني ومغلق المصدر دون اتصال لـ iPhone وأندرويد مع أسئلة على المستندات وذاكرة قابلة للتعديل وصوت. الخصوصية والقيود.',
    twitterDescription:
      'مراجعة MemoryAI: تطبيق دردشة مجاني ومغلق المصدر دون اتصال لـ iPhone وأندرويد مع أسئلة على المستندات وذاكرة قابلة للتعديل على الجهاز ووضع صوتي دون لمس ورقابة أبوية. ما تقوله صفحتا المتجر وسياسة الخصوصية.',
    audience:
      'مستخدمو iPhone وأندرويد الذين يريدون تطبيق دردشة مجانياً يشغّل النماذج اللغوية على الجهاز، ويحتاجون إلى معرفة ما يبقى دون اتصال، وما الذي يرسله إلى الخارج، وما الذي لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة MemoryAI',
    targetKeywords: [
      'مراجعة تطبيق memoryai',
      'memoryai ذكاء اصطناعي خاص دون اتصال',
      'تطبيق دردشة ذكاء اصطناعي دون اتصال iphone أندرويد',
      'ذاكرة وكيل ذكاء اصطناعي على الجهاز',
      'تطبيق دردشة ذكاء اصطناعي دون اتصال للأطفال',
      'استيراد gguf في تطبيق للهاتف',
      'memoryai مقابل private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (الإصدار 1.0.60 على أندرويد وiPhone اعتباراً من 25 أكتوبر 2026) يجمع بين ذاكرة قابلة للتعديل على الجهاز ووضع للأطفال محمي برقم PIN في تطبيق دردشة مجاني لا يتطلب حساباً.** تُنزَّل النماذج مرة واحدة من Hugging Face ثم تعمل دون اتصال. لكن أحداث الاستخدام وتقارير الأعطال، دون محتوى المحادثات، تغادر الهاتف فعلاً، لذا اقرأ قسم الخصوصية قبل الاعتماد على عبارة «بلا تتبّع».',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل MemoryAI فعلاً دون اتصال وبلا أي تكلفة؟',
        answer:
          'بحسب صفحتيه، نعم بالنسبة للميزات الأساسية: فبعد تنزيل النموذج مرة واحدة تعمل الدردشة والأسئلة عن المستندات والصوت على الهاتف، ودون إعلانات أو مشتريات داخل التطبيق. وتضيف سياسة الخصوصية أن أحداث استخدام وتقارير أعطال، دون محتوى المحادثات، تُرسل إلى الخارج.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) و[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'دردشة مع نماذج GGUF و LiteRT مثل Gemma و Qwen و Llama و Phi و DeepSeek.',
          'ميزة Agent Memory اختيارية يمكنك عرضها وتعديلها وحذفها، إضافة إلى أسئلة عن المستندات والصور.',
          'رقابة أبوية برقم PIN ومرشّح محتوى ونموذج مقفل.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو MemoryAI؟', anchor: 'what-is-memoryai' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'وضع الأطفال', anchor: 'kid-mode' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
      { label: 'من مطوّر التطبيق', anchor: 'from-the-maker' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
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
            text: 'MemoryAI تطبيق مغلق المصدر لأجهزة iPhone وأندرويد، يحتفظ بميزة Agent Memory (ذاكرة الوكيل) القابلة للتعديل على الجهاز ويضيف أسئلة عن المستندات، وصوتاً دون لمس، ورقابة أبوية.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته وتنزّل نموذجاً مرة واحدة، ثم تدردش أو تتحدث أو تسأل عن ملفات PDF الخاصة بك دون حساب؛ أما الذاكرة الاختيارية التي يحتفظ بها عنك فتبقى على الهاتف، حيث يمكنك قراءتها وحذفها.',
          },
        ],
        items: [
          'المطوّر: أليساندرو فاكيني، مطوّر واحد ينشر باسم Facchinits، دون شركة وراءه غير ذلك ودون كود مصدري عام.',
          'الصيانة: يُظهر App Store إصداراً في 22 أكتوبر 2026، وتُظهر Google Play تحديثاً في 25 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'الانتشار: تُظهر Google Play أكثر من ألف تنزيل، ولا تُظهر App Store أي تقييمات بعد، لذا فسجلّ التطبيق العام قليل.',
          'المنصات: iPhone (iOS 16.4 أو أحدث) وأندرويد؛ كما تدرج App Store أجهزة Mac بمعالج Apple M1 أو أحدث، مع عبارة «غير مجرَّب على macOS».',
          'اللغات: التطبيق متاح بالإنجليزية والإيطالية والألمانية والفرنسية والإسبانية والبرتغالية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحتي App Store و Google Play وإلى موقع المطوّر وسياسة الخصوصية والمستودع العام للملاحظات، جرى التحقق منها في 23 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'ما هو MemoryAI؟',
        content: [
          '**MemoryAI تطبيق دردشة للهاتف يشغّل نماذج لغوية مفتوحة الأوزان محلياً بدلاً من الاتصال بخدمة سحابية.** وبحسب صفحتيه، لا يتضمن التطبيق أي نموذج: بل تختار واحداً من القائمة داخل التطبيق أو تستورد أي ملف GGUF متوافق من Hugging Face، ويحتاج التشغيل الأول إلى اتصال بالشبكة لتنزيله. ويتوفر محرّكا استدلال: llama.cpp لنماذج GGUF، و LiteRT (MediaPipe) من Google للنماذج بصيغة LiteRT. ويقول المطوّر إن LiteRT لا يقتصر على Gemma، فهو يشغّل أيضاً Qwen 2.5 1.5B وDeepSeek R1 Distill 1.5B وPhi-4 Mini.',
          'يحمل التطبيق على App Store العنوان «MemoryAI: Offline Private AI» في المتاجر الأمريكي والياباني والكوري، و«MemoryAI: Private Offline-KI» في ألمانيا، و«MemoryAI: a IA que lembra» في البرازيل؛ وحزمته على Google Play هي com.ts.memoryai. أما Agent Memory فهي ميزة في هذا التطبيق وليست منتجاً منفصلاً.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت MemoryAI من متجري الهواتف؛ ولا تتوفر نسخة لسطح المكتب ولا كود مصدري ولا ملف للتثبيت الجانبي.** الرابطان أدناه هما اللذان يستخدمهما موقع المطوّر وصفحتا المتجر.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'iPhone',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 أو أحدث، 198.7 MB)',
          },
          {
            'المنصة': 'أندرويد',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/) (إنجليزية/إيطالية؛ آخر تحديث 20 أكتوبر 2026)',
          },
          {
            'المنصة': 'الإبلاغ عن الأخطاء',
            'مكان الحصول عليه': '[مشكلات GitHub](https://github.com/alessandrofacchini/memoryai-feedback/issues) (للملاحظات فقط)',
          },
        ],
        note: 'الإصدارات المدرجة: 1.0.60 على أندرويد (صفحة Google Play، حُدّثت في 25 أكتوبر 2026) و1.0.60 على iOS (صفحة App Store، صدر في 25 أكتوبر 2026). كُتب نص المراجعة على أساس 1.0.56 وأُضيفت إليه ملاحظات 1.0.60 من Google Play. ويقول المطوّر إن أندرويد 9 أو أحدث مطلوب؛ ولا يظهر في نص Google Play الذي جرت قراءته حد أدنى لإصدار أندرويد.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**يتبع الإعداد الترتيب الوارد في صفحتي المتجر؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل MemoryAI من App Store أو Google Play؛ وتقول صفحتا المتجر إنه لا يلزم حساب، وإن ذاكرة الهاتف ينبغي أن تكون 4 جيجابايت أو أكثر.',
          },
          {
            title: 'نزّل نموذجاً عبر Wi-Fi',
            whyItMatters: 'يبلغ حجم كل نموذج من 0.3 إلى 4 جيجابايت بحسب صفحتي المتجر. ويذكر تحديث 18 أكتوبر 2026 أن أول نموذج مقترح صار الأخف بين ما يعمل جيداً على هاتفك، وأن تنزيله يستمر إذا غادرت الشاشة. وتضيف ملاحظات الإصدار 1.0.56 أن التطبيق يعرض حجم النموذج والمدة التقريبية للتنزيل قبل أن تبدأ، ويعرض ما تبقّى أثناء التنزيل، ويستأنف التنزيل من تلقاء نفسه إذا انقطع الاتصال. وتضيف ملاحظات الإصدار 1.0.60 في Google Play وApp Store أن تنزيل النموذج الأول يبدأ الآن من تلقاء نفسه عبر Wi-Fi (يوقفه «تخطّي»)، وأن النماذج تُجمَّع بحسب ما يناسب جهازك مع إخفاء الأكبر من اللازم حتى تطلبها، وأن التنزيلات التي تقطعها الشبكة تستكمل من حيث توقفت',
          },
          {
            title: 'دردش أو تحدّث',
            whyItMatters: 'اكتب، أو أملِ، أو فعّل الوضع الصوتي المستمر الذي يستمع فيه التطبيق ويجيب ويقرأ الإجابة بصوت مسموع دون لمس.',
          },
          {
            title: 'أضف مستندات أو صوراً',
            whyItMatters: 'استورد ملفات PDF أو TXT أو Markdown، أو اختر صوراً، واسأل عنها.',
          },
          {
            title: 'فعّل Agent Memory عند الرغبة',
            whyItMatters: 'هي معطّلة افتراضياً وتحتاج إلى نموذج تضمين؛ وبعد تفعيلها يمكنك فتح ما خزّنته وتعديله أو حذفه.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من وصفَي App Store و Google Play أو من سياسة الخصوصية.**',
        ],
        items: [
          '**محرّكان ونماذج مخصصة.** اختر llama.cpp أو MediaPipe/LiteRT من Google لكل نموذج، واستورد أي ملف GGUF متوافق من Hugging Face، واحفظ رمز Hugging Face للنماذج المقيّدة، وأوقف التنزيلات مؤقتاً واستأنفها، واضبط درجة الحرارة و top-k و top-p والحد الأقصى للرموز لكل نموذج.',
          '**Agent Memory.** اختيارية؛ يخزّن الذكاء الاصطناعي ما تخبره به بكلماتك على الجهاز، ويمكنك عرض كل ذاكرة أو تعديلها أو حذفها. وتذكر ملاحظات الإصدار 1.0.52 أن طلبات مثل «اكتب بريداً إلكترونياً» لم تعد تُحفظ كذكريات.',
          '**المستندات والصور.** أسئلة عن ملفات PDF و TXT و Markdown، وتحليل الصور بنماذج الرؤية (عدة صور في آن واحد)، والتعرّف على النص في الصور عبر Google ML Kit.',
          '**الصوت.** إدخال صوتي على الجهاز، وتحويل النص إلى كلام، ووضع مستمر دون لمس.',
          '**أدوات يومية.** بحث في المحادثات، و20 قالب شخصية، واختبار سرعة بالرموز في الثانية، وعرض لنافذة السياق، وشاشة تبيّن إن كان النموذج المحمّل يعمل على GPU أو CPU، ونسخ احتياطي إلى Google Drive على أندرويد أو iCloud على iPhone.',
        ],
        note: 'وصفا المتجر متقاربان لكنهما غير متطابقين؛ فمثلاً يذكر نص iOS النسخ الاحتياطي إلى iCloud ويذكر نص أندرويد Google Drive. والنسخة المثبّتة هي المرجع الأخير.',
      },
      kidMode: {
        id: 'kid-mode',
        title: 'وضع الأطفال',
        content: [
          '**يقدّم التطبيق ميزة محمية برقم PIN مخصصة للأطفال، وتعرضها أوصاف المتجر ميزة رئيسية.** كل ما يلي مصدره هذه الأوصاف؛ ولم تختبر PromptQuorum مدى صمود هذا الوضع.',
        ],
        items: [
          '**رقم PIN للوالدين.** يضبط أحد الوالدين رقم PIN يحمي هذه الميزة وإعداداتها.',
          '**نموذج مقفل.** النموذج النشط ثابت، فلا يستطيع الطفل تبديل النماذج أو تغيير الإعدادات.',
          '**مرشّح المحتوى.** تُحجب الكلمات غير اللائقة قبل وصولها إلى النموذج، وتوجّه تعليمات الأمان الردود لتناسب العمر.',
          '**تحذيرات الاستيراد.** يحذّر التطبيق قبل تشغيل نموذج مستورد غير موثّق في هذا الوضع.',
          '**الفتح الوالدي.** يمكن فتح الإعدادات والمستندات مؤقتاً من شاشة الدردشة دون إنهاء الوضع.',
          '**لا إشعارات.** بحسب سياسة الخصوصية، تكون الإشعارات متوقفة أثناء تفعيل وضع الأطفال، وعند إيقاف الوضع يعود اختيار الوالدين. وتضيف السياسة أنه قد يستمر جمع إحصاءات الاستخدام وتقارير الأعطال في هذا الوضع.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**تبقى المحادثات والمستندات والذكريات على الجهاز افتراضياً، ويقول المطوّر إن التطبيق لا يملك خوادم ذكاء اصطناعي ولا يرسل نص المحادثات.** ويصرّح قسم أمان البيانات في Google Play بعدم مشاركة أي بيانات مع أطراف ثالثة، مع احتمال جمع معلومات التطبيق والأداء ومعرّفات الجهاز أو غيرها، مشفّرة أثناء النقل. وتسرد بطاقة الخصوصية في App Store سجل البحث ومعرّف الجهاز والتفاعل مع المنتج لأغراض التحليلات، ومعرّف الجهاز وبيانات الأعطال والأداء لوظائف التطبيق، وكلها مصنّفة على أنها غير مرتبطة بهويتك.',
          'تحدد [سياسة الخصوصية](https://alessandrofacchini.github.io/memoryai-privacy/)، المحدَّثة في 20 أكتوبر 2026، ما يغادر الهاتف فعلاً: أحداث استخدام إلى TelemetryDeck، وتقارير أعطال إلى Sentry، وتنزيلات النماذج من Hugging Face. ولا تبدأ الإشعارات الفورية عبر OneSignal إلا إذا قبلت نافذة «الإشعارات» داخل التطبيق، وإيقافها من الإعدادات يلغي تسجيل الجهاز. أما Google Analytics for Firebase، الذي كان يسجّل حدثين (إكمال التهيئة الأولية وإرسال رسالة) لقياس الحملات الإعلانية، فكان يعمل فقط على إصدارات أندرويد السابقة للإصدار 1.0.55 وفقط إذا قُبلت النافذة السابقة داخل التطبيق؛ والإصدار 1.0.55 وما بعده لا يتضمنه، وتقول السياسة إنه لا يُستخدم على iOS. والنسخ الاحتياطي إلى حسابك على Google Drive أو iCloud اختياري. ويضيف المطوّر أن أحداث الاستخدام لا تتضمن محتوى المحادثات (مثل «جرى تحميل نموذج»)، وأن تقارير الأعطال لا تتضمن محتوى المحادثات أو المستندات. وتقول السياسة أيضاً إن البيانات المحلية لا يشفّرها التطبيق بل يعتمد على حماية الجهاز نفسه، وإن المحادثات لا تغادر التطبيق إلا عندما تصدّرها أنت.',
          'يقول وصفا المتجر «بلا مشتريات داخل التطبيق»، وقد أكد المطوّر لـ PromptQuorum أن التطبيق لا يتضمن أي مشتريات؛ أما فقرة سابقة عن المشتريات في سياسة الخصوصية فكانت قديمة وجرى تصحيحها. وعبارة «بلا تتبّع» لا تعني أنه لا يغادر الهاتف شيء: فالتحليلات وتقارير الأعطال المذكورة أعلاه ما زالت سارية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، لذا لا يمكن التحقق من أي من هذه الادعاءات في الكود، ولم تدقق PromptQuorum حركة الشبكة. وينبغي لمن يتعامل مع بيانات سرية، أو يضبط الرقابة الأبوية لطفل، أن يتحقق من السلوك على جهازه.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من مطوّر التطبيق',
        content: [
          'راجع Alessandro Facchini، مطوّر MemoryAI، مسودة هذه المراجعة وأرسل الملاحظة التالية. تُعرض بوصفها كلمات المطوّر نفسه، وليست تقييماً تحريرياً مستقلاً من PromptQuorum. وقد طُبّقت في هذه المراجعة التصحيحات الواردة في الرسالة نفسها بشأن المشتريات وتدفقات البيانات والمحرّكات وإصدار أندرويد:',
          '«بنيتُ MemoryAI لمن يريدون مساعداً بالذكاء الاصطناعي دون تسليم كلماتهم إلى خادم. فبعد تنزيل النموذج يجيب دون اتصال بالإنترنت، وتبقى المحادثة على الهاتف.',
          'تشكّله فكرتان. الأولى ذاكرة يمكنك رؤيتها: يستطيع التطبيق أن يتذكر ما تخبره به، بكلماتك أنت، ويمكنك فتح هذه الذاكرة وتصحيحها أو حذفها في أي وقت. والثانية الاستخدام العائلي: يقفل وضع الأطفال النموذج والإعدادات خلف رمز PIN للوالدين ويُبقي الردود مناسبة للعمر.',
          'التطبيق مجاني، بلا حساب ولا إعلانات، ويدعم ست لغات. أطوّره في إيطاليا مع فريق صغير، ويجرّب مختبِران الإصدارات الجديدة على هواتف أندرويد وiPhone حقيقية. وما يلي في القائمة: أدوات يستطيع النموذج استخدامها على الهاتف وهي قيد الاختبار الآن، وعلى iPhone الإجابة الأولى الأسرع التي يحصل عليها مستخدمو أندرويد بالفعل.»',
        ],
        note: '— Alessandro Facchini، مطوّر التطبيق',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يريد مساعداً على الهاتف يتذكره دون حساب سحابي.** تُخزَّن Agent Memory محلياً وهي قابلة للتعديل.',
          '**الآباء الذين يريدون دردشة دون اتصال موجّهة للأطفال.** تتوفر رقابة أبوية، مع التنبيه إلى أن قوتها غير مؤكدة.',
          '**من يريد طرح أسئلة على ملفات PDF وصوره الخاصة بخصوصية.** تتوفر أسئلة المستندات والصور.',
          '**المستخدمون الذين يحبون إحضار نماذجهم الخاصة.** يناسب استيراد GGUF ووجود محرّكين كل من لديه نموذج مفضّل.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة واستهلاك البطارية وجودة الإجابات والقوة الفعلية للرقابة الأبوية.',
          '**الكود المصدري والترخيص.** التطبيق مغلق المصدر؛ ولا يحتوي مستودع الملاحظات إلا على ملف README ونظام تتبع للمشكلات.',
          '**التحليلات وحركة الشبكة.** التطبيق مغلق المصدر ولم تدقّق PromptQuorum حركة الشبكة فيه، لذا فإن تدفقات البيانات المذكورة أعلاه هي رواية المطوّر والسياسة.',
          '**متطلبات أندرويد.** يذكر المطوّر أندرويد 9 أو أحدث، وهو ما لا يعرضه نص Google Play الذي قرأناه؛ والحد الأدنى في iOS هو 16.4.',
          '**السجل العام.** مضى على صدور التطبيق نحو سبعة أشهر، مع أكثر من ألف تنزيل على Google Play ودون تقييمات على App Store بعد؛ ولا تقدّم المصادر أي التزام بالدعم.',
          '**لا يناسب من يحتاج إلى نماذج كبيرة جداً.** النماذج القابلة للتنزيل صغيرة، لذا فالأعمال الأثقل مكانها الحاسوب.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وأندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة على المستندات داخل الجهاز واختبارات سرعة',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وأندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز مع مكتبة نماذج خاصة به',
          },
          {
            'التطبيق': '[Off Grid](/ar/power-local-llm/off-grid-ai-review)',
            'المنصات': 'iOS وأندرويد وMac وWindows',
            'السعر / الترخيص': 'مجاني جزئياً (Freemium) / MIT',
            'الفرق الرئيسي': 'مجموعة ذكاء اصطناعي مفتوحة المصدر تعمل دون اتصال على الهواتف وأجهزة سطح المكتب',
          },
          {
            'التطبيق': '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)',
            'المنصات': 'iOS وأندرويد',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'تطبيق مفتوح المصدر على الجهاز من فريق AI Edge في Google',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيراً؛ فتأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته. ومن بين هذه التطبيقات الأربعة، MemoryAI هو الوحيد المغلق المصدر.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'من يصنع MemoryAI؟',
            a: 'أليساندرو فاكيني، الذي ينشر باسم Facchinits؛ وتسمّي سياسة الخصوصية Facchinits بوصفه المسؤول عن معالجة البيانات.',
          },
          {
            q: 'هل يمكنني تعديل ما يتذكره الذكاء الاصطناعي؟',
            a: 'نعم. ميزة Agent Memory اختيارية، وتُخزَّن على الجهاز بكلماتك أنت، ويمكن عرض كل إدخال أو تعديله أو حذفه. وهي تحتاج إلى نموذج تضمين لتعمل.',
          },
          {
            q: 'هل يمكنني استخدام نماذجي الخاصة؟',
            a: 'نعم. يمكنك استيراد ملفات GGUF متوافقة من Hugging Face وتشغيلها على محرّك llama.cpp؛ ويشغّل محرّك LiteRT نموذج Gemma، وبحسب المطوّر أيضاً Qwen 2.5 1.5B وDeepSeek R1 Distill 1.5B وPhi-4 Mini بصيغة LiteRT.',
          },
          {
            q: 'هل يعمل على Mac؟',
            a: 'تدرج App Store أجهزة Mac بمعالج Apple M1 أو أحدث لكنها تصف التطبيق بعبارة «مصمَّم لـ iPhone. غير مجرَّب على macOS»، ولا توجد نسخة منفصلة لسطح المكتب.',
          },
          {
            q: 'أين أبلّغ عن مشكلة؟',
            a: 'في [مستودع الملاحظات](https://github.com/alessandrofacchini/memoryai-feedback/issues) العام للمطوّر على GitHub، أو عبر البريد الإلكتروني للدعم المذكور في صفحة Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'MemoryAI تطبيق دردشة مجاني على الهاتف يعمل دون اتصال، يحتفظ بذاكرة قابلة للتعديل عن المستخدم على الجهاز ويقدّم رقابة أبوية، إلى جانب أسئلة المستندات والصور وصوت دون لمس ومحرّكي استدلال. كما أنه يُحدَّث كثيراً، إذ صدر إصدار قبل يوم من التحقق من هذه المراجعة. في المقابل، هو مغلق المصدر وحديث وضيق الانتشار ومقتصر على نماذج صغيرة على الجهاز، ولا يمكن التحقق من ادعاءاته الخاصة بالخصوصية في الكود. وهو يناسب القراء الذين يريدون هذه الميزات تحديداً ويقبلون تطبيقاً حديثاً ومغلقاً؛ أما من يريد كوداً قابلاً للتدقيق فيمكنه مقارنة [Private Mind](/ar/power-local-llm/private-mind-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[MemoryAI على App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — السعر وسجل الإصدارات والمتطلبات وبطاقة الخصوصية والوصف، جرى التحقق منها في 23 أكتوبر 2026.',
          '[MemoryAI على Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — الوصف وعدد التنزيلات وقسم أمان البيانات وتاريخ آخر تحديث، جرى التحقق منها في 23 أكتوبر 2026.',
          '[موقع MemoryAI](https://alessandrofacchini.github.io/memoryai/) — صفحة المنتج التي أعدّها المطوّر بالإنجليزية والإيطالية عن الاستخدام دون اتصال ووضع الأطفال والميزات والنماذج المدعومة، اطُّلع عليها في 20 أكتوبر 2026.',
          '[موقع MemoryAI وسياسة الخصوصية](https://alessandrofacchini.github.io/memoryai-privacy/) — التعامل مع البيانات واستخدام الشبكة والأذونات والخدمات الخارجية، وآخر تحديث للسياسة في 20 أكتوبر 2026.',
          '[memoryai-feedback على GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — نظام تتبع المشكلات العام للمطوّر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني بترخيص MIT يعمل دون اتصال لـ iPhone وأندرويد.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامي iOS وأندرويد.',
          '[مراجعة Off Grid](/ar/power-local-llm/off-grid-ai-review) — مجموعة ذكاء اصطناعي مفتوحة المصدر تعمل دون اتصال على الهواتف وأجهزة سطح المكتب.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق Google المفتوح المصدر للذكاء الاصطناعي على الجهاز.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لأندرويد في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — الدليل الأشمل لأندرويد.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الدليل الأشمل لـ iPhone.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-zh.webp',
    title: 'MemoryAI 评测:适用于 iPhone 和 Android 的免费离线 AI 聊天应用',
    seoTitle: 'MemoryAI 评测:适用于手机的免费离线 AI 聊天应用',
    intro:
      'MemoryAI 是一款适用于 iPhone 和 Android 的离线聊天应用,由意大利独立开发者 Alessandro Facchini(以 Facchinits 名义发布)开发。它通过 llama.cpp 和 Google 的 LiteRT 两个引擎在手机上运行开放权重语言模型,首次在 App Store 发布是在 2026 年 3 月 30 日。本评测反映其应用商店页面、网站和隐私政策在 2026 年 10 月 23 日的情况。',
    metaDescription:
      'MemoryAI 评测:免费、闭源的 iPhone 和 Android 离线 AI 聊天应用,支持文档问答、可编辑 Agent Memory、语音模式与家长控制。涵盖隐私与局限。',
    twitterDescription:
      'MemoryAI 评测:免费、闭源的 iPhone 和 Android 离线 AI 聊天应用——文档问答、可编辑的设备端记忆、免动手语音和家长控制。应用商店页面与隐私政策怎么说。',
    audience:
      '希望使用免费聊天应用在设备上运行语言模型的 iPhone 和 Android 用户,并且需要了解哪些内容保持离线、应用会向外发送什么,以及哪些内容来源并未确认。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI 评测',
    targetKeywords: [
      'memoryai 应用评测',
      'memoryai 离线私密 ai',
      '离线 ai 聊天应用 iphone android',
      '设备端 ai 代理记忆',
      '适合孩子的离线 ai 聊天应用',
      'gguf 导入 手机应用',
      'memoryai 与 private mind 对比',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI(截至 2026 年 10 月 25 日,Android 和 iPhone 版本均为 1.0.60)将可编辑的设备端记忆与带 PIN 锁的儿童模式结合在一款无需账号的免费聊天应用中。** 模型只需从 Hugging Face 下载一次,之后即可离线运行。不含聊天内容的使用事件和崩溃报告确实会离开手机,因此在依赖“无追踪”的说法之前,请先阅读隐私部分。',
    quickAnswerTop: {
      zh: {
        question: 'MemoryAI 真的能离线运行并且免费吗?',
        answer:
          '根据其应用商店页面,核心功能确实如此:一次性下载模型后,聊天、文档问答和语音均在手机上运行,也没有广告和内购。其隐私政策补充说明,应用会发送不含聊天内容的使用事件和崩溃报告。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) 和 [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) 免费获取。',
          '可与 Gemma、Qwen、Llama、Phi 和 DeepSeek 等 GGUF 和 LiteRT 模型聊天。',
          '可选的 Agent Memory,可查看、编辑和删除,另支持文档和图片提问。',
          '家长控制带 PIN、内容过滤器和锁定的模型。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'MemoryAI 是什么?', anchor: 'what-is-memoryai' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '儿童模式', anchor: 'kid-mode' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '来自开发者', anchor: 'from-the-maker' },
      { label: '适合哪些人使用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
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
            text: 'MemoryAI 是一款闭源的 iPhone 和 Android 应用,在设备上保存可编辑的 Agent Memory,并提供文档问答、免动手语音和家长控制。',
          },
          {
            type: 'plain-terms',
            text: '安装应用,下载一次模型,之后无需账号即可聊天、对话,或针对你自己的 PDF 提问;它为你保存的可选记忆存放在手机上,你可以查看并删除。',
          },
        ],
        items: [
          '开发者:Alessandro Facchini,以 Facchinits 名义发布的个人开发者,除此之外背后没有公司,也没有公开的源代码。',
          '维护情况:App Store 显示 2026 年 10 月 22 日有新版本发布,Google Play 显示 2026 年 10 月 25 日有更新,因此不适用项目停滞警告。',
          '影响范围:Google Play 显示下载量 1K+,App Store 暂无评分,因此该应用的公开口碑记录很少。',
          '平台:iPhone(iOS 16.4 或更高版本)和 Android;App Store 还列出搭载 Apple M1 或更新芯片的 Mac,并标注“未针对 macOS 验证”。',
          '语言:该应用提供英语、意大利语、德语、法语、西班牙语和葡萄牙语版本。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 App Store 和 Google Play 页面、开发者网站与隐私政策,以及公开的反馈代码仓库,核实日期为 2026 年 10 月 23 日。PromptQuorum 并未安装、测试该应用,也未对其进行基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'MemoryAI 是什么?',
        content: [
          '**MemoryAI 是一款在本地运行开放权重语言模型的手机聊天应用,而不是调用云服务。** 根据其应用商店页面,应用不内置任何模型:你可以从应用内列表中选择一个,或从 Hugging Face 导入任何兼容的 GGUF 文件,首次运行需要联网下载。应用提供两个推理引擎:用于 GGUF 模型的 llama.cpp,以及用于 LiteRT 格式模型的 Google LiteRT(MediaPipe)。开发者表示,LiteRT 不限于 Gemma,也能运行 Qwen 2.5 1.5B、DeepSeek R1 Distill 1.5B 和 Phi-4 Mini。',
          'App Store 页面标题在美国、日本和韩国商店为“MemoryAI: Offline Private AI”,在德国为“MemoryAI: Private Offline-KI”,在巴西为“MemoryAI: a IA que lembra”;Google Play 包名为 com.ts.memoryai。其“Agent Memory”是该应用的一项功能,而不是单独的产品。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**MemoryAI 通过两大手机应用商店安装;不提供桌面版、源代码或旁加载文件。** 下方两个商店链接均为开发者网站和应用商店页面所使用的链接。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'iPhone',
            '获取方式': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586)(iOS 16.4 或更高,198.7 MB)',
          },
          {
            '平台': 'Android',
            '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            '平台': '网站',
            '获取方式': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)(含英语,另链接意大利语版;最后更新于 2026 年 10 月 20 日)',
          },
          {
            '平台': '问题反馈',
            '获取方式': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues)(仅限反馈,无源代码)',
          },
        ],
        note: '页面所列版本:Android 为 1.0.60(Google Play 页面,2026 年 10 月 25 日更新),iOS 为 1.0.60(App Store 页面,2026 年 10 月 25 日发布)。评测正文基于 1.0.56 撰写,并补充了 Google Play 上 1.0.60 的更新说明。开发者称需要 Android 9 或更高版本;所读取的 Google Play 页面文字中未显示最低 Android 版本。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**设置顺序遵循应用商店页面中的描述;PromptQuorum 并未实际执行这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从 App Store 或 Google Play 下载 MemoryAI;页面称无需账号,且手机应有 4 GB 或更多内存。',
          },
          {
            title: '在 Wi-Fi 下下载模型',
            whyItMatters: '据页面所述,每个模型为 0.3 至 4 GB。2026 年 10 月 18 日的更新称,首个推荐模型现在是最适合你手机运行的最轻量模型,并且即使离开该界面,下载仍会继续。1.0.56 的更新说明称,应用会在开始前显示模型大小和大致下载时间,下载过程中显示剩余量,并在连接中断后自动继续下载。Google Play 和 App Store 上 1.0.60 的更新说明补充称:首个模型的下载现在会在 Wi-Fi 下自动开始(点“跳过”可暂停),模型按设备能否运行分组,过大的模型在你要求之前保持隐藏,被网络中断的下载会从中断处继续。',
          },
          {
            title: '聊天或对话',
            whyItMatters: '可以打字、听写,或开启连续语音模式,应用会在无需点按的情况下聆听、回答并朗读答案。',
          },
          {
            title: '添加文档或图片',
            whyItMatters: '导入 PDF、TXT 或 Markdown 文件,或选择照片,然后针对它们提问。',
          },
          {
            title: '可选:开启 Agent Memory',
            whyItMatters: '默认关闭,并且需要一个嵌入模型;开启后,你可以打开、编辑或删除它已存储的内容。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项均来自 App Store 和 Google Play 的描述或隐私政策。**',
        ],
        items: [
          '**两个引擎与自定义模型。** 可按模型选择 llama.cpp 或 Google 的 MediaPipe/LiteRT,从 Hugging Face 导入任何兼容的 GGUF 文件,为受限模型保存 Hugging Face 令牌,暂停和恢复下载,并按模型调整 temperature、top-k、top-p 和最大 token 数。',
          '**Agent Memory。** 可选;AI 会以你自己的话把你告诉它的内容存储在设备上,你可以查看、编辑或删除每一条记忆。1.0.52 版本的更新说明称,诸如“写一封邮件”之类的请求不再被保存为记忆。',
          '**文档与图片。** 针对 PDF、TXT 和 Markdown 文件提问,使用视觉模型分析图片(可同时处理多张),并通过 Google ML Kit 识别照片中的文字。',
          '**语音。** 设备端语音输入、文本转语音,以及连续的免动手模式。',
          '**日常工具。** 聊天搜索、20 个角色模板、以每秒 token 数计的速度基准测试、上下文窗口显示、显示已加载模型运行在 GPU 还是 CPU 上的界面,以及备份(Android 上到 Google Drive,iPhone 上到 iCloud)。',
        ],
        note: '两个应用商店的描述几乎相同,但并不完全一致;例如,iOS 文字提到 iCloud 备份,而 Android 文字提到 Google Drive。最终以已安装的版本为准。',
      },
      kidMode: {
        id: 'kid-mode',
        title: '儿童模式',
        content: [
          '**该应用提供一种受 PIN 保护、面向孩子的模式,其应用商店描述将其作为主打功能。** 以下内容均来自这些描述;PromptQuorum 未测试该模式的实际防护效果。',
        ],
        items: [
          '**家长 PIN。** 家长设置 PIN,用于保护该模式及其设置。',
          '**锁定的模型。** 当前模型被固定,孩子无法切换模型或更改设置。',
          '**内容过滤器。** 不当词语在到达模型之前被拦截,并由安全提示词引导生成适合该年龄的回复。',
          '**导入警告。** 在未经验证的导入模型于该模式下运行之前,应用会发出警告。',
          '**家长解锁。** 可在聊天界面临时打开设置和文档,而不会结束该模式。',
          '**无通知。** 据隐私政策,儿童模式开启期间通知处于关闭状态,关闭该模式后将恢复家长的选择。政策还称,该模式下仍可能收集使用统计和崩溃报告。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**聊天、文档和记忆默认保存在设备上,开发者称该应用没有 AI 服务器,也不发送聊天文本。** Google Play 的数据安全部分声明未与第三方共享数据,可能收集应用信息、性能数据以及设备或其他 ID,且传输时加密。App Store 隐私标签列出:用于数据分析的搜索历史、设备 ID 和产品交互,以及用于应用功能的设备 ID、崩溃和性能数据,均标注为未与你关联。',
          '[隐私政策](https://alessandrofacchini.github.io/memoryai-privacy/)(2026 年 10 月 20 日更新)列出了确实会离开手机的内容:发送至 TelemetryDeck 的使用事件、发送至 Sentry 的崩溃报告,以及来自 Hugging Face 的模型下载。通过 OneSignal 发送的推送通知,仅在你接受应用内的“通知”提示后才会启动,在设置中关闭后设备即被取消订阅。Google Analytics for Firebase 曾为衡量广告活动效果而记录两个事件(完成引导、发送消息),仅在 1.0.55 之前的 Android 版本中、且仅在接受过早先的应用内提示时运行;1.0.55 及之后的版本不再包含它,政策称它不用于 iOS。备份到你自己的 Google Drive 或 iCloud 是可选的。开发者补充说,使用事件不含聊天内容(例如“已加载模型”),崩溃报告也不含聊天或文档内容。政策还称,本地数据不由应用加密,而是依赖设备自身的保护,并且对话仅在你导出时才会离开应用。',
          '应用商店描述称“无内购”,开发者也向 PromptQuorum 确认应用没有内购;隐私政策中此前关于内购的一段已过时,现已更正。“无追踪”的说法并不意味着没有任何数据离开手机:上述数据分析和崩溃报告依然适用。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用为闭源,因此这些说法均无法通过代码核查,PromptQuorum 也未审计其网络流量。处理机密数据的人,或为孩子配置家长控制的人,应在自己的设备上核实其行为。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '来自开发者',
        content: [
          'MemoryAI 的开发者 Alessandro Facchini 审阅了本评测的草稿,并发来以下说明。以下内容以开发者自己的话呈现,并非 PromptQuorum 独立的编辑评估。同一封邮件中关于内购、数据流向、引擎和 Android 版本的更正已体现在本评测中:',
          '“我做 MemoryAI,是为了那些想要 AI 助手、却不想把自己的话交给服务器的人。模型下载完成后,它无需联网即可回答,对话也留在手机上。',
          '它由两个理念塑造。第一是看得见的记忆:应用可以用你自己的话记住你告诉它的内容,你可以随时打开这份记忆,修改或删除它。第二是家庭使用:儿童模式把模型和设置锁在家长 PIN 之后,并让回复适合孩子的年龄。',
          '它免费,无需账号,没有广告,支持六种语言。我在意大利与一个小团队一起开发它,两位测试人员会在真实的 Android 手机和 iPhone 上试用新版本。接下来的计划:让模型在手机上使用的工具(目前在测试中),以及在 iPhone 上实现 Android 用户已经拥有的更快的首次回答。”',
        ],
        note: '— Alessandro Facchini,开发者',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**想要一个无需云账号就能记住自己的手机助手的人。** Agent Memory 存储在本地,且可编辑。',
          '**想要面向孩子的离线聊天的家长。** 应用包含家长控制,但其强度未经验证。',
          '**想要私密地查询自己的 PDF 和照片的人。** 已包含文档和图片提问。',
          '**喜欢自带模型的用户。** GGUF 导入和两个引擎适合已经有喜爱模型的人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际使用性能。** PromptQuorum 没有运行该应用,因此速度、耗电、回答质量以及家长控制的真实效果均未评估。',
          '**源代码与许可证。** 该应用为闭源;反馈代码仓库仅包含 README 和问题追踪器。',
          '**数据分析与网络流量。** 该应用为闭源,PromptQuorum 未审计其网络流量,因此上述数据流来自开发者和隐私政策的说明。',
          '**Android 要求。** 开发者称需要 Android 9 或更高版本,所读取的 Google Play 文字中未显示这一点;iOS 最低版本为 16.4。',
          '**口碑记录。** 该应用上线约七个月,Google Play 下载量 1K+,App Store 暂无评分;来源未给出任何支持承诺。',
          '**不适合需要超大模型的用户。** 可下载的模型都比较小,因此更重的工作应放在电脑上进行。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天,支持设备端文档问答和基准测试',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源设备端聊天客户端,自带模型库',
          },
          {
            '应用': '[Off Grid](/zh/power-local-llm/off-grid-ai-review)',
            '平台': 'iOS、Android、Mac、Windows',
            '价格 / 许可证': '免费增值 / MIT',
            '主要区别': '覆盖手机和桌面的开源离线 AI 套件',
          },
          {
            '应用': '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '来自 Google AI Edge 团队的开源设备端应用',
          },
        ],
        note: '竞品信息变化频繁;请在各应用自己的页面上确认其当前价格、许可证和平台。这四款应用中,MemoryAI 是唯一闭源的。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'MemoryAI 是谁开发的?',
            a: 'Alessandro Facchini,以 Facchinits 名义发布;隐私政策将 Facchinits 列为数据控制者。',
          },
          {
            q: '我可以编辑 AI 记住的内容吗?',
            a: '可以。Agent Memory 为可选功能,以你自己的话存储在设备上,每一条都可以查看、编辑或删除。它需要一个嵌入模型才能工作。',
          },
          {
            q: '我可以使用自己的模型吗?',
            a: '可以。你可以从 Hugging Face 导入兼容的 GGUF 文件,并在 llama.cpp 引擎上运行;LiteRT 引擎可运行 Gemma,据开发者称还能运行 LiteRT 格式的 Qwen 2.5 1.5B、DeepSeek R1 Distill 1.5B 和 Phi-4 Mini。',
          },
          {
            q: '它能在 Mac 上使用吗?',
            a: 'App Store 列出了搭载 Apple M1 或更新芯片的 Mac,但将该应用标注为“为 iPhone 设计。未针对 macOS 验证”,并且没有单独的桌面版。',
          },
          {
            q: '在哪里报告问题?',
            a: '可在开发者位于 GitHub 的公开[反馈代码仓库](https://github.com/alessandrofacchini/memoryai-feedback/issues)中提交,或通过 Google Play 页面上的支持邮箱联系。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'MemoryAI 是一款免费的离线手机聊天应用,在设备上保存用户的可编辑记忆,并提供家长控制,同时支持文档和图片提问、免动手语音以及两个推理引擎。它的更新也很频繁,在本评测核实的前一天还有一次发布。另一方面,它是闭源的、上线时间短、影响范围小、只能运行设备端的小型模型,因此无法通过代码核查其隐私说法。它适合想要这些特定功能并能接受一款年轻的闭源应用的读者;想要可审计代码的读者可以比较 [Private Mind](/zh/power-local-llm/private-mind-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 MemoryAI](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — 价格、版本历史、系统要求、隐私标签和描述,核实于 2026 年 10 月 23 日。',
          '[Google Play 上的 MemoryAI](https://play.google.com/store/apps/details?id=com.ts.memoryai) — 描述、下载量、数据安全部分和最后更新日期,核实于 2026 年 10 月 23 日。',
          '[MemoryAI 网站](https://alessandrofacchini.github.io/memoryai/) — 开发者提供的英语和意大利语产品页面,介绍离线使用、儿童模式、功能和支持的模型,查阅于 2026 年 10 月 20 日。',
          '[MemoryAI 网站与隐私政策](https://alessandrofacchini.github.io/memoryai-privacy/) — 数据处理、网络使用、权限和第三方服务,政策最后更新于 2026 年 10 月 20 日。',
          '[GitHub 上的 memoryai-feedback](https://github.com/alessandrofacchini/memoryai-feedback) — 开发者的公开问题追踪器。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费、MIT 许可的离线聊天应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[Off Grid 评测](/zh/power-local-llm/off-grid-ai-review) — 覆盖手机和桌面的开源离线 AI 套件。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google 的开源设备端 AI 应用。',
          '[2026 年 Android 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用盘点。',
          '[2026 年 iPhone 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 应用盘点。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-ko.webp',
    title: 'MemoryAI 리뷰: iPhone·Android용 무료 오프라인 AI 채팅 앱',
    seoTitle: 'MemoryAI 리뷰: 무료 오프라인 AI 채팅 앱',
    intro:
      'MemoryAI는 이탈리아의 독립 개발자 Alessandro Facchini(Facchinits라는 이름으로 활동)가 만든 iPhone·Android용 오프라인 채팅 앱입니다. llama.cpp와 Google의 LiteRT라는 두 엔진으로 오픈 웨이트 언어 모델을 휴대폰에서 실행하며, App Store 첫 출시일은 2026년 3월 30일입니다. 이 리뷰는 2026년 10월 23일에 확인한 스토어 게재 정보, 웹사이트, 개인정보 처리방침을 반영합니다.',
    metaDescription:
      'MemoryAI 리뷰: 문서 Q&A, 편집 가능한 Agent Memory, 음성 모드, 자녀 보호 기능을 갖춘 iPhone·Android용 무료 비공개 소스 오프라인 AI 앱. 개인정보와 한계.',
    twitterDescription:
      'MemoryAI 리뷰: 문서 Q&A, 편집 가능한 온디바이스 메모리, 핸즈프리 음성, 자녀 보호 기능을 갖춘 iPhone·Android용 무료 비공개 소스 오프라인 AI 채팅 앱. 스토어 게재 정보와 개인정보 처리방침의 내용을 다룹니다.',
    audience:
      '기기에서 언어 모델을 실행하는 무료 채팅 앱을 찾는 iPhone·Android 이용자로, 무엇이 오프라인에 머무는지, 무엇을 외부로 보내는지, 출처가 무엇을 확인해 주지 않는지 알아야 하는 분들.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI 리뷰',
    targetKeywords: [
      'memoryai 앱 리뷰',
      'memoryai 오프라인 프라이빗 ai',
      '오프라인 ai 채팅 앱 아이폰 안드로이드',
      '온디바이스 ai 에이전트 메모리',
      '어린이용 오프라인 ai 채팅 앱',
      'gguf 가져오기 모바일 앱',
      'memoryai private mind 비교',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI(2026년 10월 25일 기준 Android와 iPhone 모두 버전 1.0.60)는 편집 가능한 온디바이스 메모리와 PIN으로 잠그는 키즈 모드를 갖춘, 계정이 필요 없는 무료 채팅 앱입니다.** 모델은 Hugging Face에서 한 번 내려받은 뒤 오프라인으로 실행됩니다. 채팅 내용이 없는 사용 이벤트와 오류 보고서는 휴대폰 밖으로 전송되므로, "추적 없음"이라는 문구에 의존하기 전에 개인정보 항목을 읽어 보시기 바랍니다.',
    quickAnswerTop: {
      ko: {
        question: 'MemoryAI는 정말 오프라인으로 실행되며 무료입니까?',
        answer:
          '게재 정보에 따르면 핵심 기능은 그렇습니다. 모델을 한 번 내려받은 뒤에는 채팅, 문서 질문, 음성이 휴대폰에서 실행되며 광고와 앱 내 구입이 없습니다. 개인정보 처리방침에는 채팅 내용이 없는 사용 이벤트와 오류 보고서가 외부로 전송된다고 적혀 있습니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)와 [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586)에서 무료.',
          'Gemma, Qwen, Llama, Phi, DeepSeek 같은 GGUF·LiteRT 모델로 채팅할 수 있습니다.',
          '이용자가 보고, 편집하고, 삭제할 수 있는 선택형 Agent Memory와 문서·이미지 질문.',
          'PIN, 콘텐츠 필터, 잠긴 모델을 갖춘 자녀 보호 기능.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'MemoryAI란 무엇인가?', anchor: 'what-is-memoryai' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '키즈 모드', anchor: 'kid-mode' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
      { label: '개발자의 말', anchor: 'from-the-maker' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MemoryAI는 편집 가능한 Agent Memory를 기기에 보관하고 문서 질문, 핸즈프리 음성, 자녀 보호 기능을 더한 비공개 소스 iPhone·Android 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 모델을 한 번 내려받으면 계정 없이 채팅하고, 대화하고, 내 PDF에 대해 질문할 수 있습니다. 앱이 이용자에 관해 보관하는 선택형 메모리는 휴대폰에 저장되며, 직접 읽고 삭제할 수 있습니다.',
          },
        ],
        items: [
          '개발자: Facchinits라는 이름으로 배포하는 개인 개발자 Alessandro Facchini이며, 그 외에 뒤에 있는 회사는 없고 공개된 소스 코드도 없습니다.',
          '유지보수: App Store에는 2026년 10월 22일 릴리스가, Google Play에는 2026년 10월 25일 업데이트가 표시되므로 방치된 프로젝트 경고는 해당되지 않습니다.',
          '도달 범위: Google Play 다운로드는 1K+이고 App Store에는 아직 평점이 없어, 공개된 이력이 많지 않은 앱입니다.',
          '플랫폼: iPhone(iOS 16.4 이상)과 Android이며, App Store에는 Apple M1 이상 Mac도 표시되어 있으나 "macOS용으로 검증되지 않음"이라고 되어 있습니다.',
          '언어: 앱은 영어, 이탈리아어, 독일어, 프랑스어, 스페인어, 포르투갈어로 제공됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 App Store·Google Play 게재 정보, 개발자의 웹사이트와 개인정보 처리방침, 공개 피드백 저장소를 2026년 10월 23일에 확인한 내용을 근거로 합니다. PromptQuorum은 앱을 설치하거나 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'MemoryAI란 무엇인가?',
        content: [
          '**MemoryAI는 클라우드 서비스를 호출하는 대신 오픈 웨이트 언어 모델을 로컬에서 실행하는 모바일 채팅 앱입니다.** 게재 정보에 따르면 모델은 앱에 포함되어 있지 않으며, 앱 내 목록에서 고르거나 Hugging Face의 호환 GGUF 파일을 가져와야 하고, 처음 실행할 때는 내려받기 위해 네트워크 연결이 필요합니다. 추론 엔진은 두 가지로, GGUF 모델에는 llama.cpp, LiteRT 형식 모델에는 Google의 LiteRT(MediaPipe)를 제공합니다. 개발자에 따르면 LiteRT는 Gemma에 한정되지 않으며 Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B, Phi-4 Mini도 실행합니다.',
          'App Store 게재 제목은 미국·일본·한국 스토어에서 "MemoryAI: Offline Private AI", 독일에서 "MemoryAI: Private Offline-KI", 브라질에서 "MemoryAI: a IA que lembra"이며, Google Play 패키지는 com.ts.memoryai입니다. 이 앱의 "Agent Memory"는 별도 제품이 아니라 이 앱의 기능입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**MemoryAI는 두 모바일 스토어에서 설치하며, 데스크톱 빌드, 소스 코드, 사이드로드 파일은 제공되지 않습니다.** 아래 두 스토어 링크는 개발자의 사이트와 게재 정보가 사용하는 것입니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'iPhone',
            '받는 곳': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 이상, 198.7 MB)',
          },
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[alessandrofacchini.github.io/memoryai](https://alessandrofacchini.github.io/memoryai/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/) (영어, 이탈리아어판 링크 있음, 2026년 10월 20일 개정)',
          },
          {
            '플랫폼': '버그 신고',
            '받는 곳': '[GitHub 이슈](https://github.com/alessandrofacchini/memoryai-feedback/issues) (피드백 전용, 소스 코드 없음)',
          },
        ],
        note: '게재된 버전은 Android 1.0.60(Google Play 게재 정보, 2026년 10월 25일 업데이트)과 iOS 1.0.60(App Store 게재 정보, 2026년 10월 25일 출시)입니다. 리뷰 본문은 1.0.56을 기준으로 작성했으며 Google Play의 1.0.60 업데이트 노트로 보완했습니다. 개발자는 Android 9 이상이 필요하다고 밝혔으나 확인한 Google Play 문구에는 최소 Android 버전이 표시되지 않습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**설정은 스토어 게재 정보에 설명된 순서를 따른 것이며, PromptQuorum은 이 단계를 직접 실행하지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'App Store 또는 Google Play에서 MemoryAI를 내려받습니다. 게재 정보에는 계정이 필요 없으며 휴대폰 RAM이 4 GB 이상이어야 한다고 되어 있습니다.',
          },
          {
            title: 'Wi-Fi에서 모델 내려받기',
            whyItMatters: '게재 정보에 따르면 모델은 각각 0.3~4 GB입니다. 2026년 10월 18일 업데이트 노트에는 처음 추천되는 모델이 이제 이용자의 휴대폰에서 잘 실행되는 가장 가벼운 모델이며, 화면을 벗어나도 다운로드가 계속된다고 적혀 있습니다. 1.0.56 업데이트 노트에는 시작 전에 모델 크기와 예상 소요 시간을, 내려받는 동안 남은 양을 보여 주고, 연결이 끊기면 앱이 스스로 이어서 받는다고 적혀 있습니다. Google Play와 App Store의 1.0.60 업데이트 노트에는 첫 모델 다운로드가 Wi-Fi에서 자동으로 시작되고(건너뛰기로 일시 중지), 모델이 기기에 맞는지에 따라 묶여 너무 큰 모델은 요청하기 전까지 숨겨지며, 네트워크로 끊긴 다운로드는 멈춘 지점부터 이어진다고 추가되어 있습니다.',
          },
          {
            title: '채팅 또는 대화',
            whyItMatters: '입력하거나 받아쓰기를 하거나, 앱이 듣고 답하고 그 답을 소리 내어 읽어 주는 연속 음성 모드를 켜서 터치 없이 사용합니다.',
          },
          {
            title: '문서나 이미지 추가',
            whyItMatters: 'PDF, TXT, Markdown 파일을 가져오거나 사진을 골라 그에 대해 질문합니다.',
          },
          {
            title: '필요하면 Agent Memory 켜기',
            whyItMatters: '기본값은 꺼짐이며 임베딩 모델이 필요합니다. 켜면 저장된 내용을 열어 보고, 편집하고, 삭제할 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 App Store·Google Play 설명 또는 개인정보 처리방침에서 가져온 것입니다.**',
        ],
        items: [
          '**두 엔진과 사용자 지정 모델.** 모델별로 llama.cpp 또는 Google의 MediaPipe/LiteRT를 선택하고, Hugging Face의 호환 GGUF 파일을 가져오며, 제한 접근 모델용 Hugging Face 토큰을 저장하고, 다운로드를 일시 중지·재개하며, 모델별로 temperature, top-k, top-p, 최대 토큰 수를 조절할 수 있습니다.',
          '**Agent Memory.** 선택 사항이며, AI가 이용자가 말한 내용을 이용자 자신의 표현으로 기기에 저장하고, 각 메모리를 보고 편집하거나 삭제할 수 있습니다. 1.0.52 노트에는 "이메일 써 줘" 같은 요청은 더 이상 메모리로 저장되지 않는다고 되어 있습니다.',
          '**문서와 이미지.** PDF, TXT, Markdown 파일에 대한 질문, 비전 모델을 이용한 이미지 분석(여러 장 동시 가능), Google ML Kit를 통한 사진 속 텍스트 인식.',
          '**음성.** 온디바이스 음성 입력, 텍스트 음성 변환, 연속 핸즈프리 모드.',
          '**일상 도구.** 채팅 검색, 페르소나 템플릿 20개, 초당 토큰 수로 보여 주는 속도 벤치마크, 컨텍스트 윈도우 표시, 불러온 모델이 GPU와 CPU 중 어디서 실행되는지 보여 주는 화면, Android의 Google Drive 또는 iPhone의 iCloud 백업.',
        ],
        note: '두 스토어 설명은 거의 같지만 동일하지는 않습니다. 예를 들어 iOS 설명에는 iCloud 백업이, Android 설명에는 Google Drive가 언급됩니다. 최종 기준은 설치된 빌드입니다.',
      },
      kidMode: {
        id: 'kid-mode',
        title: '키즈 모드',
        content: [
          '**이 앱은 스토어 설명에서 핵심 기능으로 내세우는, PIN으로 보호되는 어린이용 모드를 제공합니다.** 아래 내용은 모두 그 설명에서 나온 것이며, PromptQuorum은 이 모드가 얼마나 견고한지 테스트하지 않았습니다.',
        ],
        items: [
          '**부모 PIN.** 부모가 PIN을 설정하면 이 모드와 그 설정이 보호됩니다.',
          '**잠긴 모델.** 사용 중인 모델이 고정되어 있어 아이가 모델을 바꾸거나 설정을 변경할 수 없습니다.',
          '**콘텐츠 필터.** 부적절한 단어가 모델에 닿기 전에 걸러지며, 안전 프롬프트가 연령에 맞는 답변을 유도합니다.',
          '**가져오기 경고.** 검증되지 않은 가져온 모델이 이 모드에서 실행되기 전에 앱이 경고합니다.',
          '**부모 잠금 해제.** 모드를 끝내지 않고 채팅 화면에서 설정과 문서를 잠시 열 수 있습니다.',
          '**알림 없음.** 개인정보 처리방침에 따르면 키즈 모드가 켜져 있는 동안 알림은 꺼지며, 모드를 끄면 부모의 선택으로 돌아갑니다. 정책은 이 모드에서도 사용 통계와 오류 보고서가 수집될 수 있다고 덧붙입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**채팅, 문서, 메모리는 기본적으로 기기에 머물며, 개발자는 이 앱에 AI 서버가 없고 채팅 텍스트를 보내지 않는다고 밝힙니다.** Google Play 데이터 보안 항목에는 제3자와 공유하는 데이터가 없다고 되어 있고, 앱 정보와 성능, 기기 또는 기타 ID가 수집될 수 있으며 전송 중 암호화된다고 표시되어 있습니다. App Store 개인정보 보호 라벨에는 분석 목적으로 검색 기록, 기기 ID, 제품 상호작용이, 앱 기능 목적으로 기기 ID, 오류 및 성능 데이터가 나열되어 있으며 모두 이용자와 연결되지 않음으로 표시되어 있습니다.',
          '[개인정보 처리방침](https://alessandrofacchini.github.io/memoryai-privacy/)(2026년 10월 20일 개정)은 휴대폰 밖으로 나가는 것을 명시합니다. TelemetryDeck로 보내는 사용 이벤트, Sentry로 보내는 오류 보고서, Hugging Face에서의 모델 내려받기입니다. OneSignal을 통한 푸시 알림은 이용자가 앱 내 "알림" 안내를 수락한 경우에만 시작되며, 설정에서 끄면 기기의 구독이 해지됩니다. 광고 캠페인 효과 측정을 위해 두 가지 이벤트(온보딩 완료, 메시지 전송)를 기록하던 Google Analytics for Firebase는 1.0.55 이전 Android 버전에서, 그리고 이전의 앱 내 안내를 수락한 경우에만 작동했습니다. 1.0.55 이후 버전에는 포함되어 있지 않으며, 정책에 따르면 iOS에서는 사용되지 않습니다. 이용자 본인의 Google Drive 또는 iCloud로의 백업은 선택 사항입니다. 개발자는 사용 이벤트에 채팅 내용이 포함되지 않으며(예: "모델을 불러왔음") 오류 보고서에도 채팅이나 문서 내용이 포함되지 않는다고 덧붙입니다. 또한 로컬 데이터는 앱이 암호화하지 않고 기기 자체의 보호에 의존하며, 대화는 이용자가 내보낼 때만 앱 밖으로 나간다고 밝힙니다.',
          '스토어 설명에는 "앱 내 구입 없음"이라고 되어 있고, 개발자도 PromptQuorum에 앱 내 구입이 없다고 확인해 주었습니다. 처리방침에 있던 구입 관련 이전 단락은 오래된 내용이어서 수정되었습니다. "추적 없음"이라는 문구가 휴대폰 밖으로 아무것도 나가지 않는다는 뜻은 아닙니다. 위의 분석과 오류 보고는 여전히 적용됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 소스 코드가 공개되어 있지 않아 위 주장은 어느 것도 코드에서 확인할 수 없으며, PromptQuorum은 네트워크 트래픽을 감사하지 않았습니다. 기밀 데이터를 다루는 분이나 자녀 보호 기능을 설정하는 분은 본인 기기에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '개발자의 말',
        content: [
          'MemoryAI의 개발자 Alessandro Facchini가 이 리뷰의 초안을 확인하고 아래 메모를 보내왔습니다. 개발자 본인의 말로 제시하는 것이며, PromptQuorum의 독립적인 편집 평가가 아닙니다. 같은 메시지에 담긴 결제, 데이터 흐름, 엔진, Android 버전에 관한 정정은 이 리뷰에 반영되었습니다:',
          '"저는 자신의 말을 서버에 넘기지 않고 AI 어시스턴트를 쓰고 싶은 사람들을 위해 MemoryAI를 만들었습니다. 모델을 내려받고 나면 인터넷 연결 없이 답하며, 대화는 휴대폰에 남습니다.',
          '이 앱을 이루는 아이디어는 두 가지입니다. 첫째는 눈으로 볼 수 있는 메모리입니다. 앱은 여러분이 말한 내용을 여러분 자신의 표현으로 기억할 수 있고, 그 메모리를 언제든 열어 고치거나 삭제할 수 있습니다. 둘째는 가족 사용입니다. 키즈 모드는 모델과 설정을 부모 PIN 뒤에 잠그고 답변을 나이에 맞게 유지합니다.',
          '무료이며 계정과 광고가 없고 6개 언어를 지원합니다. 저는 이탈리아에서 작은 팀과 함께 개발하고 있으며, 테스터 두 명이 실제 Android 폰과 iPhone에서 새 빌드를 시험합니다. 다음 계획은 모델이 휴대폰에서 쓸 수 있는 도구(현재 테스트 중)와, Android 사용자가 이미 누리는 더 빠른 첫 답변을 iPhone에도 제공하는 것입니다."',
        ],
        note: '— Alessandro Facchini, 개발자',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**클라우드 계정 없이 자신을 기억하는 휴대폰 어시스턴트를 원하는 분.** Agent Memory는 로컬에 저장되며 편집할 수 있습니다.',
          '**아이가 쓸 오프라인 채팅을 원하는 부모.** 자녀 보호 기능이 포함되어 있지만 그 강도는 검증되지 않았습니다.',
          '**자신의 PDF와 사진에 대해 비공개로 질문하고 싶은 분.** 문서·이미지 질문이 포함되어 있습니다.',
          '**자신의 모델을 가져와 쓰고 싶은 이용자.** GGUF 가져오기와 두 엔진은 이미 좋아하는 모델이 있는 분께 맞습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**직접 사용해 본 성능.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 배터리 사용량, 답변 품질, 자녀 보호 기능의 실제 강도는 평가하지 않았습니다.',
          '**소스 코드와 라이선스.** 앱은 소스 코드가 공개되어 있지 않으며, 피드백 저장소에는 README와 이슈 트래커만 있습니다.',
          '**분석과 네트워크 트래픽.** 앱은 소스 코드가 공개되어 있지 않고 PromptQuorum은 네트워크 트래픽을 감사하지 않았으므로, 위의 데이터 흐름은 개발자와 처리방침의 설명입니다.',
          '**Android 요구 사항.** 개발자는 Android 9 이상이라고 밝혔으나 읽은 Google Play 설명에는 나와 있지 않으며, iOS 최소 버전은 16.4입니다.',
          '**이력.** 앱이 나온 지 약 7개월이며, Google Play 다운로드는 1K+이고 App Store 평점은 아직 없습니다. 출처에는 지원 약속이 나와 있지 않습니다.',
          '**매우 큰 모델이 필요한 분께는 맞지 않습니다.** 내려받는 모델은 작으므로, 더 무거운 작업은 컴퓨터에서 하는 편이 맞습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '온디바이스 문서 Q&A와 벤치마크를 갖춘 오픈 소스 오프라인 채팅',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '자체 모델 라이브러리를 갖춘 오픈 소스 온디바이스 채팅 클라이언트',
          },
          {
            '앱': '[Off Grid](/ko/power-local-llm/off-grid-ai-review)',
            '플랫폼': 'iOS, Android, Mac, Windows',
            '가격 / 라이선스': '프리미엄 / MIT',
            '핵심 차이': '휴대폰과 데스크톱에서 쓰는 오픈 소스 오프라인 AI 모음',
          },
          {
            '앱': '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'Google AI Edge 팀이 만든 오픈 소스 온디바이스 앱',
          },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하시기 바랍니다. 이 네 앱 중 MemoryAI만 소스 코드가 공개되어 있지 않습니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'MemoryAI는 누가 만들었나요?',
            a: 'Facchinits라는 이름으로 배포하는 Alessandro Facchini이며, 개인정보 처리방침은 Facchinits를 개인정보 처리자(data controller)로 명시합니다.',
          },
          {
            q: 'AI가 기억하는 내용을 편집할 수 있나요?',
            a: '예. Agent Memory는 선택 사항이며 이용자 자신의 표현으로 기기에 저장되고, 각 항목을 보고, 편집하고, 삭제할 수 있습니다. 작동하려면 임베딩 모델이 필요합니다.',
          },
          {
            q: '내 모델을 쓸 수 있나요?',
            a: '예. Hugging Face의 호환 GGUF 파일을 가져와 llama.cpp 엔진에서 실행할 수 있고, LiteRT 엔진은 Gemma와, 개발자에 따르면 LiteRT 형식의 Qwen 2.5 1.5B, DeepSeek R1 Distill 1.5B, Phi-4 Mini도 실행합니다.',
          },
          {
            q: 'Mac에서도 작동하나요?',
            a: 'App Store에는 Apple M1 이상 Mac이 표시되어 있지만 앱은 "iPhone용으로 설계됨. macOS용으로 검증되지 않음"으로 표시되어 있고, 별도의 데스크톱 빌드는 없습니다.',
          },
          {
            q: '문제는 어디에 신고하나요?',
            a: 'GitHub에 있는 개발자의 공개 [피드백 저장소](https://github.com/alessandrofacchini/memoryai-feedback/issues)나 Google Play 게재 정보에 있는 지원 이메일로 신고하시면 됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'MemoryAI는 이용자에 관한 편집 가능한 메모리를 기기에 보관하고 자녀 보호 기능을 제공하는 무료 오프라인 모바일 채팅 앱이며, 문서·이미지 질문, 핸즈프리 음성, 두 가지 추론 엔진도 갖추고 있습니다. 또한 업데이트가 잦아서, 이 리뷰를 확인하기 하루 전에도 릴리스가 있었습니다. 반면 소스 코드가 공개되어 있지 않고, 출시된 지 얼마 되지 않았으며, 도달 범위가 작고, 모델이 작은 온디바이스 모델로 제한되며, 개인정보 주장을 코드에서 확인할 수 없습니다. 이 특정 기능들을 원하고 젊은 비공개 소스 앱을 감수할 수 있는 분께 맞으며, 검증 가능한 코드를 원하는 분은 [Private Mind](/ko/power-local-llm/private-mind-review)나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해 보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 MemoryAI](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — 가격, 버전 기록, 요구 사항, 개인정보 보호 라벨, 설명. 2026년 10월 23일 확인.',
          '[Google Play의 MemoryAI](https://play.google.com/store/apps/details?id=com.ts.memoryai) — 설명, 다운로드 수, 데이터 보안 항목, 마지막 업데이트 날짜. 2026년 10월 23일 확인.',
          '[MemoryAI 웹사이트](https://alessandrofacchini.github.io/memoryai/) — 개발자가 제공하는 영어·이탈리아어 제품 페이지. 오프라인 사용, 키즈 모드, 기능, 지원 모델을 설명합니다. 2026년 10월 20일 확인.',
          '[MemoryAI 웹사이트와 개인정보 처리방침](https://alessandrofacchini.github.io/memoryai-privacy/) — 데이터 처리, 네트워크 사용, 권한, 제3자 서비스. 처리방침은 2026년 10월 20일 개정.',
          '[GitHub의 memoryai-feedback](https://github.com/alessandrofacchini/memoryai-feedback) — 개발자의 공개 이슈 트래커.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone·Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS·Android용 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[Off Grid 리뷰](/ko/power-local-llm/off-grid-ai-review) — 휴대폰과 데스크톱용 오픈 소스 오프라인 AI 모음.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 오픈 소스 온디바이스 AI 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 전반을 다룬 종합 정리.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 전반을 다룬 종합 정리.',
        ],
      },
    },
  },
}
