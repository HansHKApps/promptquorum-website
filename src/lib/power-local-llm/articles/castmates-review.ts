// Castmates Review: Offline AI Character Chat for iPhone
// Slug: castmates-review
// Companion to: sillytavern-review, private-mind-review, pocketpal-ai-review, memoryai-review,
// best-local-llm-apps-iphone-2026
// Sources: App Store listing (US/DE/ES/FR/JP/BR storefronts) and iTunes lookup record, the developer's website
// (get-castmates.com), its privacy policy and its content-and-safety page, all checked 2026-10-19 — no hands-on
// testing. Storefront prices: US $6.99/$29.99/$44.99, DE/ES/FR €7.99/€34.99/€49.99, JP ¥1,100/¥5,000/¥7,000,
// BR R$ 49,90/R$ 199,90/R$ 299,90; the KR storefront page returned 404 (no Korean price verified).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-en.webp',
    title: 'Castmates Review: Offline AI Character Chat for iPhone',
    seoTitle: 'Castmates Review: Offline AI Character Chat for iPhone',
    intro:
      'Castmates: AI Characters is an iPhone app for roleplay and character chat, listed on the App Store under the seller name Josip Markovic and, according to its privacy policy, developed and operated from Croatia. It was first released on 6 July 2026. This review reflects its App Store listing, website and privacy policy as checked on 19 October 2026.',
    metaDescription:
      'Castmates review: free offline iPhone app with 32 AI characters, custom characters and no account. Pricing, privacy and what the sources do not confirm.',
    twitterDescription:
      'Castmates review: a free, closed-source iPhone app that says it runs AI character chat on the phone after a one-time model download. Pricing, privacy and age controls from the listing and policy.',
    audience:
      'Adult iPhone users who want an offline AI roleplay app, and who need to know what it costs, what leaves the phone and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Castmates review',
    targetKeywords: [
      'castmates app review',
      'offline ai character chat iphone',
      'on-device ai roleplay app',
      'ai companion app no account',
      'castmates ai characters privacy',
      'offline roleplay chat ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**Castmates (version 1.1.7 as of 19 October 2026) is a free iPhone app that, per its listing, runs a character-chat AI on the phone after a one-time model download of about 1.9 GB, with 32 ready-made characters and no account.** Its in-app Pro plan removes the daily message cap and unlocks an optional adults-only Mature mode. The app is closed source; the developer names the model as Impish Llama 3B (Llama 3 based, quantized to Q4_K_M) running through llama.cpp, so the on-device claim still rests on the developer\'s word.',
    quickAnswerTop: {
      en: {
        question: 'Is Castmates really offline and free?',
        answer:
          'Per its listing and website, the app is free to download and, once the model is installed, chats are generated on the phone without a connection. The free tier is capped, and Pro lifts the cap. Anonymous usage statistics still leave the phone, according to the privacy policy.',
        bullets: [
          'Free on the [App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) for iPhone and iPad, iOS 17.0 or later.',
          '32 hand-written characters in 8 genres, plus characters you create yourself.',
          'Session summaries let characters remember you across chats.',
          'English only; no Android or desktop version is mentioned.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Castmates?', anchor: 'what-is-castmates' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
      { label: 'Age Rating and Content Controls', anchor: 'content-safety' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'From the Maker', anchor: 'from-the-maker' },
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
            text: 'Castmates is a closed-source iPhone app for roleplay with AI characters that says its model runs on the phone, with no account and a capped free tier.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, download a model once, and then chat with ready-made or self-made characters; the developer says the conversations are generated and stored on the phone.',
          },
        ],
        items: [
          'Developer: a single App Store seller, with no company named on the website and no public source code.',
          'Maintenance: the version history shows 11 releases between 6 July and 19 October 2026, so no stale-project warning applies.',
          'Reach: the App Store shows a 4.2 average from 5 ratings, so the app has little public track record.',
          'Platforms: iPhone and iPad on iOS or iPadOS 17.0 or later, in English only.',
          'Age: the listing rates it 18+ and the Mature mode sits behind Pro and a date-of-birth check.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store listing, the developer\'s website and its privacy and content pages, checked on 19 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: 'What Is Castmates?',
        content: [
          '**Castmates is a roleplay app where you chat with fictional characters, each with a backstory, an opening line and three scenarios.** The website lists 32 hand-written characters across eight genres (Companions, Romance, Fantasy, Sci-Fi, Anime, Historical, Mystery & Horror and Adventure), 96 scenarios in all, and says characters reply with actions and scene-setting rather than one-liners. You can also create a character with a name, tagline, persona, greeting, appearance, tone, tags and an opening scenario, and pick a style such as Friendship, Romance, Mentorship, Rivalry or Adventure.',
          'The App Store subtitle is "Private, offline story chat", and the app takes its name from its cast of characters, the "castmates".',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Castmates is installed from the App Store; no Android build, desktop build or source code is offered.** The links below are the ones the listing and the developer\'s site use.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          { 'Platform': 'iPhone and iPad', 'Where to get it': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) (iOS or iPadOS 17.0 or later, 35.6 MB)' },
          { 'Platform': 'Website', 'Where to get it': '[get-castmates.com](https://get-castmates.com)' },
          { 'Platform': 'Privacy policy', 'Where to get it': '[get-castmates.com/privacy](https://get-castmates.com/privacy) (updated 10 October 2026)' },
          { 'Platform': 'Content and safety', 'Where to get it': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { 'Platform': 'Terms', 'Where to get it': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: 'Version reviewed: 1.1.7, released on 19 October 2026 per the App Store listing. The developer says the app needs an iPhone with 6 GB of RAM or more; phones with 4 GB or less get an explanation instead of the model download, so check your iPhone before you install. The model is Impish Llama 3B (Llama 3 based, Q4_K_M, about 1.9 GB), run through llama.cpp with a 4,096-token context.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**Castmates is free to download, and Pro is sold as a monthly or annual subscription or as a one-time lifetime purchase.** The prices below are from the US App Store as of 19 October 2026 and differ by storefront. Subscriptions renew until you cancel in the App Store.',
        ],
        columns: ['Plan', 'What it includes', 'US price'],
        rows: [
          { 'Plan': 'Free', 'What it includes': '30 messages a day, 1 custom character', 'US price': '$0' },
          { 'Plan': 'Pro monthly', 'What it includes': 'Unlimited messages and characters, Mature mode', 'US price': '$6.99/month' },
          { 'Plan': 'Pro annual', 'What it includes': 'Same as monthly', 'US price': '$29.99/year' },
          { 'Plan': 'Pro lifetime', 'What it includes': 'Same as monthly, bought once', 'US price': '$44.99' },
        ],
        note: 'The German, Spanish and French stores show €7.99, €34.99 and €49.99; the Japanese store ¥1,100, ¥5,000 and ¥7,000; the Brazilian store R$ 49,90, R$ 199,90 and R$ 299,90. The free tier includes the whole standard cast and needs no account.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setup follows the order described on the website and listing; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download Castmates from the App Store; the website says no sign-up, email or profile is needed.',
          },
          {
            title: 'Download the model on Wi-Fi',
            whyItMatters: 'The first run fetches a one-time model file of about 1.9 GB, which you can delete later to free space. After that, the developer says the app works without a connection.',
          },
          {
            title: 'Pick or create a character',
            whyItMatters: 'Choose one of the ready-made characters and a scenario, or build your own; the free tier allows one custom character.',
          },
          {
            title: 'Optionally unlock Pro',
            whyItMatters: 'Pro removes the daily limit and is required for the Mature mode, which uses the same model and needs no extra download.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store listing, the website or the privacy policy.**',
        ],
        items: [
          '**Session memory.** The app summarizes past sessions so characters can recall you; the privacy policy says memories are stored on the phone and can be cleared by deleting a conversation\'s memory.',
          '**Returning to a chat.** The 1.1.7 release notes add a "Previously" recap and tappable suggestion chips after a character\'s first reply.',
          '**Custom avatars.** A custom character can take its avatar from your photo library.',
          '**Model control.** Settings include on-device model management, a content-lock PIN and the Mature-mode switch.',
          '**Battery use.** The FAQ says replies draw power much like a game and that nothing runs in the background.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The developer says conversations, custom characters, avatars and memories stay on the iPhone and that the company never receives, sees or stores them.** The policy names one remote download: the one-time model file, hosted on Cloudflare R2.',
          'The App Store label reads "Data Not Linked to You", in line with the [privacy policy](https://get-castmates.com/privacy), last updated on 10 October 2026, which says anonymous usage events go to Mixpanel (app opens, onboarding progress, paywall views and message counts, tied to a random on-device identifier, with IP-based location disabled) and that RevenueCat tracks subscription status through an anonymized app-user ID. The policy says these events hold no message content and nothing that identifies you, and it does not state how long Mixpanel keeps them. Purchases go through Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic. Anyone handling confidential data should verify the behavior on their own device.',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: 'Age Rating and Content Controls',
        content: [
          '**The App Store rates Castmates 18+ and flags frequent sexual content or nudity and suggestive themes; the developer\'s content page calls it safe-for-work by default.** The details below come from that page, and PromptQuorum has not tested how well the controls hold up.',
        ],
        items: [
          '**Default mode.** Romance and mature themes appear, but an on-device guard fades intimate scenes to black; the page says "Castmates is not a pornography app".',
          '**Mature mode.** Optional and for adults: it needs an active Pro plan, a one-time date-of-birth check (entries under 18 are refused), the PIN if one is set, and enough device memory for the mature model.',
          '**Content-lock PIN.** A parent or guardian can set a PIN in Settings; it is stored only as a salted hash.',
          '**Always blocked.** An on-device filter on chat messages and created characters blocks any sexualization of minors and other clearly illegal content in every mode.',
          '**Reporting.** Every AI message and character has a Report action.',
          '**Fiction only.** Characters are fictional and not a source of medical, legal or psychological advice, including coach or mentor personas.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Adults who want character roleplay without creating an account.** The free tier covers the standard cast.',
          '**People who prefer chats kept on the phone.** The developer says nothing is uploaded, with the caveats in the privacy section.',
          '**Hobby writers who want their own characters.** Custom characters have their own persona, tone and opening scenario fields.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the app, so reply quality, speed, battery use and the real strength of the content filter are not assessed.',
          '**Source code and license.** The app is closed source and no public repository was found.',
          '**Traffic.** PromptQuorum has not audited network traffic, so the analytics described in the policy are not independently verified.',
          '**Company details.** The website shows only "© 2026 Castmates" and a hidden support email; the privacy policy gives no legal entity.',
          '**Track record.** The app is about three months old and the sources give no support commitment.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[SillyTavern](/local-llms/sillytavern-review)', 'Platforms': 'Windows, macOS, Linux, web', 'Price / license': 'Free / AGPL 3.0', 'Key difference': 'Open-source roleplay front end that connects to model backends you run' },
          { 'App': '[Private Mind](/power-local-llm/private-mind-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source offline chat with document Q&A, not roleplay-focused' },
          { 'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source on-device client where you pick your own models' },
          { 'App': '[MemoryAI](/power-local-llm/memoryai-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / closed source', 'Key difference': 'Offline chat with editable memory and a PIN-locked Kid Mode' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Castmates have voice chat?',
            a: 'Neither the website nor the App Store description mentions voice features; Castmates is described as a text chat with actions and scene-setting.',
          },
          {
            q: 'Does it work without an internet connection?',
            a: 'Per the developer, yes once the model is installed. The model download, purchases and the anonymous usage statistics described in the privacy policy involve the network.',
          },
          {
            q: 'Can I use it on an iPad or an Android phone?',
            a: 'The listing allows iPhone and iPad on version 17.0 or later; none of the sources mention an Android version.',
          },
          {
            q: 'Is my chat used to train a model?',
            a: 'The privacy policy says the company never receives, sees or stores conversations, and it contrasts this with cloud AI apps that log chats. PromptQuorum has not verified this.',
          },
          {
            q: 'Can I delete the model?',
            a: 'Yes, the website says the model file can be deleted to free space; it is downloaded again when you want to chat.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'Josip Markovic, the developer behind Castmates, shared the following about the app and the reasons for building it. It is presented as the developer\'s own words, lightly edited for readability, not as PromptQuorum\'s independent editorial assessment:',
          '"I built Castmates because every character app I tried wanted an account and sent every message to a server. A 3B model on a phone sounded too small for real stories, so most of the work went into making it hold a scene: session summaries so characters remember you, guards that catch the model breaking character, and a lot of eval runs on a Mac before anything ships. Next up is a faster first download and seasonal characters, starting with three Halloween ones."',
        ],
        note: '— Josip Markovic, developer',
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Castmates is a free iPhone roleplay app that says its character chat runs on the device, with 32 ready-made characters, custom characters, session memory and age controls for its optional Mature mode. It is also actively updated, with a release on the day this review was checked. Against that, it is closed source, about three months old, rated by few users, English only, and it needs an iPhone with 6 GB of RAM or more. It suits adults who want account-free character chat and accept a young, closed app; readers who want open code and their own models can compare [SillyTavern](/local-llms/sillytavern-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Castmates on the App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — price, version history, requirements, age rating and privacy label, checked 19 October 2026.',
          '[Castmates website](https://get-castmates.com) — features, pricing, on-device claims and FAQ, checked 19 October 2026.',
          '[Castmates privacy policy](https://get-castmates.com/privacy) — data handling, analytics and model hosting, last updated 10 October 2026.',
          '[Castmates content and safety page](https://get-castmates.com/age-suitability) — age gating, Mature mode and content filter.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[SillyTavern Review](/local-llms/sillytavern-review) — the open-source roleplay front end.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[MemoryAI Review](/power-local-llm/memoryai-review) — a free offline chat app with editable memory.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Castmates Review: Offline AI Character Chat for iPhone',
      description:
        'Castmates review: a free, closed-source iPhone app for offline AI character chat with 32 characters, custom characters and no account. Pricing, privacy, age controls and what the sources do not confirm.',
      url: 'https://www.promptquorum.com/power-local-llm/castmates-review',
      inLanguage: 'en',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Adult iPhone users evaluating an offline AI character chat app' },
      about: [
        { '@type': 'Thing', name: 'Castmates' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'AI roleplay' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/castmates-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Castmates Review', item: 'https://www.promptquorum.com/power-local-llm/castmates-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-de.webp',
    title: 'Castmates-Rezension: Offline-KI-Charakterchat für das iPhone',
    seoTitle: 'Castmates-Rezension: Offline-KI-Charakterchat fürs iPhone',
    intro:
      'Castmates: AI Characters ist eine iPhone-App für Rollenspiele und Charakterchats, die im App Store unter dem Verkäufernamen Josip Markovic geführt wird und laut Datenschutzerklärung in Kroatien entwickelt und betrieben wird. Sie erschien erstmals am 6. Juli 2026. Diese Rezension gibt den App-Store-Eintrag, die Website und die Datenschutzerklärung wieder, wie am 19. Oktober 2026 geprüft.',
    metaDescription:
      'Castmates-Rezension: kostenlose Offline-iPhone-App mit 32 KI-Charakteren, eigenen Charakteren und ohne Konto. Preise, Datenschutz und offene Punkte.',
    twitterDescription:
      'Castmates-Rezension: eine kostenlose, nicht quelloffene iPhone-App, die laut Entwickler KI-Charakterchats nach einem einmaligen Modell-Download auf dem Telefon ausführt. Preise, Datenschutz und Altersfreigabe laut Eintrag und Erklärung.',
    audience:
      'Erwachsene iPhone-Nutzer, die eine Offline-KI-Rollenspiel-App suchen und wissen müssen, was sie kostet, was das Telefon verlässt und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Castmates Rezension',
    targetKeywords: [
      'castmates app test',
      'offline ki charakter chat iphone',
      'ki rollenspiel app auf dem gerät',
      'ki begleiter app ohne konto',
      'castmates ai characters datenschutz',
      'offline rollenspiel chat ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**Castmates (Version 1.1.7, Stand 19. Oktober 2026) ist eine kostenlose iPhone-App, die laut Eintrag nach einem einmaligen Modell-Download von etwa 1,9 GB eine Charakterchat-KI auf dem Telefon ausführt, mit 32 fertigen Charakteren und ohne Konto.** Der In-App-Tarif Pro hebt das tägliche Nachrichtenlimit auf und schaltet einen optionalen Mature-Modus nur für Erwachsene frei. Die App ist nicht quelloffen; der Entwickler nennt als Modell Impish Llama 3B (auf Llama 3 basierend, Q4_K_M) mit llama.cpp als Laufzeit, die Aussage zur Ausführung auf dem Gerät beruht daher weiterhin auf dem Wort des Entwicklers.',
    quickAnswerTop: {
      de: {
        question: 'Läuft Castmates wirklich offline und kostenlos?',
        answer:
          'Laut Eintrag und Website ist die App kostenlos ladbar, und sobald das Modell installiert ist, werden Chats ohne Verbindung auf dem Telefon erzeugt. Die kostenlose Stufe ist begrenzt, Pro hebt das Limit auf. Anonyme Nutzungsstatistiken verlassen laut Datenschutzerklärung dennoch das Telefon.',
        bullets: [
          'Kostenlos im [App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) für iPhone und iPad, ab iOS 17.0.',
          '32 handgeschriebene Charaktere in 8 Genres sowie selbst erstellte Charaktere.',
          'Sitzungszusammenfassungen lassen Charaktere sich über Chats hinweg an Sie erinnern.',
          'Nur Englisch; eine Android- oder Desktop-Version wird nicht erwähnt.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Castmates?', anchor: 'what-is-castmates' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Preise', anchor: 'pricing' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
      { label: 'Altersfreigabe und Inhaltskontrollen', anchor: 'content-safety' },
      { label: 'Für wen sich die App eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Vom Entwickler', anchor: 'from-the-maker' },
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
            text: 'Castmates ist eine nicht quelloffene iPhone-App für Rollenspiele mit KI-Charakteren, deren Modell laut Entwickler auf dem Telefon läuft, ohne Konto und mit begrenzter kostenloser Stufe.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, laden einmal ein Modell herunter und chatten dann mit fertigen oder selbst erstellten Charakteren; laut Entwickler werden die Gespräche auf dem Telefon erzeugt und gespeichert.',
          },
        ],
        items: [
          'Entwickler: ein einzelner App-Store-Verkäufer, ohne auf der Website genanntes Unternehmen und ohne öffentlichen Quellcode.',
          'Pflege: Die Versionshistorie zeigt 11 Veröffentlichungen zwischen dem 6. Juli und dem 19. Oktober 2026, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Reichweite: Der App Store zeigt einen Durchschnitt von 4,2 aus 5 Bewertungen, die App hat also kaum öffentliche Erfahrungswerte.',
          'Plattformen: iPhone und iPad ab iOS bzw. iPadOS 17.0, nur auf Englisch.',
          'Alter: Der Eintrag ordnet sie ab 18 ein, und der Mature-Modus liegt hinter Pro und einer Geburtsdatumsprüfung.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den App-Store-Eintrag, die Website des Entwicklers sowie dessen Datenschutz- und Inhaltsseiten, geprüft am 19. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder gemessen.',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: 'Was ist Castmates?',
        content: [
          '**Castmates ist eine Rollenspiel-App, in der Sie mit fiktiven Charakteren chatten, die jeweils eine Hintergrundgeschichte, einen Eröffnungssatz und drei Szenarien haben.** Die Website nennt 32 handgeschriebene Charaktere in acht Genres (Begleiter, Romantik, Fantasy, Sci-Fi, Anime, Historisch, Mystery & Horror und Abenteuer), insgesamt 96 Szenarien, und sagt, die Charaktere antworteten mit Handlungen und Szenenbeschreibungen statt mit Einzeilern. Sie können auch einen Charakter mit Name, Tagline, Persona, Begrüßung, Aussehen, Tonfall, Tags und Eröffnungsszenario anlegen und einen Stil wie Freundschaft, Romantik, Mentoring, Rivalität oder Abenteuer wählen.',
          'Der Untertitel im App Store lautet „Private, offline story chat“, und die App trägt ihren Namen nach ihrer Besetzung aus Charakteren, den „Castmates“.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Castmates wird über den App Store installiert; ein Android-Build, ein Desktop-Build oder Quellcode werden nicht angeboten.** Die folgenden Links sind die, die Eintrag und Entwickler-Website verwenden.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          { 'Plattform': 'iPhone und iPad', 'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) (ab iOS bzw. iPadOS 17.0, 35,6 MB)' },
          { 'Plattform': 'Website', 'Bezugsquelle': '[get-castmates.com](https://get-castmates.com)' },
          { 'Plattform': 'Datenschutzerklärung', 'Bezugsquelle': '[get-castmates.com/privacy](https://get-castmates.com/privacy) (Stand 10. Oktober 2026)' },
          { 'Plattform': 'Inhalte und Sicherheit', 'Bezugsquelle': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { 'Plattform': 'Nutzungsbedingungen', 'Bezugsquelle': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: 'Geprüfte Version: 1.1.7, laut App-Store-Eintrag am 19. Oktober 2026 veröffentlicht. Laut Entwickler ist ein iPhone mit mindestens 6 GB RAM nötig; Telefone mit 4 GB oder weniger erhalten statt des Modell-Downloads eine Erklärung, prüfen Sie Ihr iPhone daher vor der Installation. Das Modell ist Impish Llama 3B (auf Llama 3 basierend, Q4_K_M, etwa 1,9 GB) und läuft über llama.cpp mit 4.096 Token Kontext.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**Castmates ist kostenlos ladbar, und Pro wird als Monats- oder Jahresabo oder als einmaliger Lifetime-Kauf verkauft.** Die Preise stammen aus dem deutschen App Store (Stand 19. Oktober 2026) und unterscheiden sich je nach Storefront. Abos verlängern sich, bis Sie im App Store kündigen.',
        ],
        columns: ['Tarif', 'Enthalten', 'Preis (DE-Store)'],
        rows: [
          { 'Tarif': 'Kostenlos', 'Enthalten': '30 Nachrichten pro Tag, 1 eigener Charakter', 'Preis (DE-Store)': '0 €' },
          { 'Tarif': 'Pro monatlich', 'Enthalten': 'Unbegrenzt Nachrichten und Charaktere, Mature-Modus', 'Preis (DE-Store)': '7,99 €/Monat' },
          { 'Tarif': 'Pro jährlich', 'Enthalten': 'Wie monatlich', 'Preis (DE-Store)': '34,99 €/Jahr' },
          { 'Tarif': 'Pro Lifetime', 'Enthalten': 'Wie monatlich, einmalig gekauft', 'Preis (DE-Store)': '49,99 €' },
        ],
        note: 'Der US-Store zeigt 6,99 $, 29,99 $ und 44,99 $. Die kostenlose Stufe enthält die gesamte Standardbesetzung und erfordert kein Konto.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Einrichtung folgt der auf Website und Eintrag beschriebenen Reihenfolge; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie Castmates aus dem App Store; laut Website sind weder Registrierung noch E-Mail oder Profil nötig.',
          },
          {
            title: 'Modell per WLAN laden',
            whyItMatters: 'Beim ersten Start wird eine einmalige Modelldatei von etwa 1,9 GB geladen, die Sie später löschen können, um Speicher freizugeben. Danach funktioniert die App laut Entwickler ohne Verbindung.',
          },
          {
            title: 'Charakter wählen oder erstellen',
            whyItMatters: 'Wählen Sie einen fertigen Charakter samt Szenario oder bauen Sie einen eigenen; die kostenlose Stufe erlaubt einen eigenen Charakter.',
          },
          {
            title: 'Optional Pro freischalten',
            whyItMatters: 'Pro hebt das Tageslimit auf und ist für den Mature-Modus nötig, der dasselbe Modell nutzt und keinen zusätzlichen Download braucht.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus dem App-Store-Eintrag, der Website oder der Datenschutzerklärung.**',
        ],
        items: [
          '**Sitzungsgedächtnis.** Die App fasst frühere Sitzungen zusammen, damit sich Charaktere an Sie erinnern; laut Datenschutzerklärung liegen die Erinnerungen auf dem Telefon und lassen sich löschen, indem man das Gedächtnis einer Unterhaltung entfernt.',
          '**Rückkehr in einen Chat.** Die Release Notes zu 1.1.7 ergänzen eine „Previously“-Zusammenfassung und antippbare Vorschlags-Chips nach der ersten Antwort eines Charakters.',
          '**Eigene Avatare.** Ein eigener Charakter kann seinen Avatar aus Ihrer Fotomediathek beziehen.',
          '**Modellverwaltung.** Die Einstellungen enthalten die Verwaltung des Modells auf dem Gerät, eine Inhaltssperre per PIN und den Schalter für den Mature-Modus.',
          '**Akkuverbrauch.** Laut FAQ verbrauchen Antworten ähnlich viel Strom wie ein Spiel, und im Hintergrund läuft nichts.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Laut Entwickler bleiben Gespräche, eigene Charaktere, Avatare und Erinnerungen auf dem iPhone, und das Unternehmen erhält, sieht oder speichert sie nie.** Die Erklärung nennt einen Fremd-Download: die einmalige Modelldatei, die bei Cloudflare R2 liegt.',
          'Das App-Store-Label lautet „Nicht mit dir verknüpfte Daten“, passend zur [Datenschutzerklärung](https://get-castmates.com/privacy) (zuletzt aktualisiert am 10. Oktober 2026), die angibt, dass anonyme Nutzungsereignisse an Mixpanel gehen (App-Starts, Onboarding-Fortschritt, Paywall-Aufrufe und Nachrichtenzahlen, verknüpft mit einer zufälligen Kennung auf dem Gerät, bei deaktivierter IP-basierter Ortung) und dass RevenueCat den Abostatus über eine anonymisierte App-Nutzer-ID verwaltet. Die Erklärung sagt, diese Ereignisse enthielten keine Nachrichteninhalte und nichts, was Sie identifiziert, und nennt keine Speicherdauer bei Mixpanel. Käufe laufen über Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, daher lassen sich diese Angaben nicht im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht geprüft. Wer vertrauliche Daten verarbeitet, sollte das Verhalten auf dem eigenen Gerät prüfen.',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: 'Altersfreigabe und Inhaltskontrollen',
        content: [
          '**Der App Store stuft Castmates ab 18 ein und nennt häufige sexuelle Inhalte oder Nacktheit sowie anzügliche Themen; die Inhaltsseite des Entwicklers nennt die App standardmäßig jugendfrei.** Die Details stammen von dieser Seite, und PromptQuorum hat nicht getestet, wie gut die Kontrollen greifen.',
        ],
        items: [
          '**Standardmodus.** Romantik und reife Themen kommen vor, doch eine Schutzfunktion auf dem Gerät blendet intime Szenen ab; die Seite sagt „Castmates is not a pornography app“.',
          '**Mature-Modus.** Optional und für Erwachsene: Er erfordert ein aktives Pro-Abo, eine einmalige Geburtsdatumsprüfung (Angaben unter 18 werden abgelehnt), die PIN, falls gesetzt, und genug Gerätespeicher für das Mature-Modell.',
          '**PIN-Inhaltssperre.** Eltern oder Erziehungsberechtigte können in den Einstellungen eine PIN setzen; sie wird nur als gesalzener Hash gespeichert.',
          '**Immer gesperrt.** Ein Filter auf dem Gerät für Chatnachrichten und erstellte Charaktere blockiert in jedem Modus jede Sexualisierung Minderjähriger und andere eindeutig illegale Inhalte.',
          '**Melden.** Jede KI-Nachricht und jeder Charakter hat eine Melden-Funktion.',
          '**Nur Fiktion.** Die Charaktere sind fiktiv und keine Quelle für medizinische, rechtliche oder psychologische Beratung, auch nicht als Coach- oder Mentor-Personas.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Erwachsene, die Charakter-Rollenspiele ohne Konto wollen.** Die kostenlose Stufe deckt die Standardbesetzung ab.',
          '**Menschen, die Chats lieber auf dem Telefon behalten.** Laut Entwickler wird nichts hochgeladen, mit den Einschränkungen im Datenschutzabschnitt.',
          '**Hobbyautoren, die eigene Charaktere möchten.** Eigene Charaktere haben Felder für Persona, Tonfall und Eröffnungsszenario.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität im Praxistest.** PromptQuorum hat die App nicht ausgeführt; Antwortqualität, Geschwindigkeit, Akkuverbrauch und die tatsächliche Stärke des Inhaltsfilters sind nicht bewertet.',
          '**Quellcode und Lizenz.** Die App ist nicht quelloffen, ein öffentliches Repository wurde nicht gefunden.',
          '**Datenverkehr.** PromptQuorum hat den Netzwerkverkehr nicht geprüft; die in der Erklärung beschriebenen Analysen sind daher nicht unabhängig verifiziert.',
          '**Unternehmensangaben.** Die Website zeigt nur „© 2026 Castmates“ und eine verborgene Support-E-Mail; die Datenschutzerklärung nennt keine juristische Person.',
          '**Erfahrungswerte.** Die App ist etwa drei Monate alt, und die Quellen machen keine Support-Zusage.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[SillyTavern](/de/local-llms/sillytavern-review)', 'Plattformen': 'Windows, macOS, Linux, Web', 'Preis / Lizenz': 'Kostenlos / AGPL 3.0', 'Hauptunterschied': 'Quelloffene Rollenspiel-Oberfläche für Modell-Backends, die Sie selbst betreiben' },
          { 'App': '[Private Mind](/de/power-local-llm/private-mind-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Quelloffener Offline-Chat mit Dokumenten-Q&A, nicht auf Rollenspiel ausgerichtet' },
          { 'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Quelloffener On-Device-Client mit eigener Modellwahl' },
          { 'App': '[MemoryAI](/de/power-local-llm/memoryai-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Kostenlos / nicht quelloffen', 'Hauptunterschied': 'Offline-Chat mit editierbarem Gedächtnis und PIN-gesperrtem Kindermodus' },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Hat Castmates Sprachchat?',
            a: 'Weder die Website noch die App-Store-Beschreibung erwähnt Sprachfunktionen; Castmates wird als Text-Chat mit Handlungen und Szenenbeschreibungen dargestellt.',
          },
          {
            q: 'Funktioniert sie ohne Internetverbindung?',
            a: 'Laut Entwickler ja, sobald das Modell installiert ist. Der Modell-Download, Käufe und die in der Datenschutzerklärung beschriebenen anonymen Nutzungsstatistiken benötigen das Netzwerk.',
          },
          {
            q: 'Kann ich sie auf einem iPad oder Android-Telefon nutzen?',
            a: 'Der Eintrag erlaubt iPhone und iPad ab Version 17.0; keine der Quellen erwähnt eine Android-Version.',
          },
          {
            q: 'Wird mein Chat zum Training eines Modells verwendet?',
            a: 'Die Datenschutzerklärung sagt, das Unternehmen erhalte, sehe oder speichere Gespräche nie, und grenzt sich von Cloud-KI-Apps ab, die Chats protokollieren. PromptQuorum hat das nicht überprüft.',
          },
          {
            q: 'Kann ich das Modell löschen?',
            a: 'Ja, laut Website lässt sich die Modelldatei löschen, um Speicher freizugeben; sie wird erneut geladen, wenn Sie chatten möchten.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Vom Entwickler',
        content: [
          'Josip Markovic, der Entwickler hinter Castmates, hat Folgendes zur App und zu den Gründen für ihre Entwicklung mitgeteilt. Es wird als eigene Worte des Entwicklers wiedergegeben, zur besseren Lesbarkeit leicht redigiert, nicht als unabhängige redaktionelle Einschätzung von PromptQuorum:',
          '„Ich habe Castmates gebaut, weil jede Charakter-App, die ich ausprobiert habe, ein Konto wollte und jede Nachricht an einen Server schickte. Ein 3B-Modell auf einem Telefon klang zu klein für echte Geschichten, deshalb ging der Großteil der Arbeit darauf, es eine Szene halten zu lassen: Sitzungszusammenfassungen, damit sich Charaktere an Sie erinnern, Schutzmechanismen, die erkennen, wenn das Modell aus der Rolle fällt, und viele Eval-Läufe auf einem Mac, bevor etwas erscheint. Als Nächstes kommen ein schnellerer erster Download und saisonale Charaktere, beginnend mit drei Halloween-Charakteren.“',
        ],
        note: '— Josip Markovic, Entwickler',
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Castmates ist eine kostenlose iPhone-Rollenspiel-App, die laut Entwickler ihren Charakterchat auf dem Gerät ausführt, mit 32 fertigen Charakteren, eigenen Charakteren, Sitzungsgedächtnis und Alterskontrollen für den optionalen Mature-Modus. Sie wird zudem aktiv aktualisiert, mit einer Veröffentlichung am Tag der Prüfung dieser Rezension. Dagegen steht: Sie ist nicht quelloffen, etwa drei Monate alt, von wenigen Nutzern bewertet, nur auf Englisch, und sie braucht ein iPhone mit mindestens 6 GB RAM. Sie eignet sich für Erwachsene, die Charakterchat ohne Konto wollen und eine junge, geschlossene App akzeptieren; wer offenen Code und eigene Modelle möchte, kann [SillyTavern](/de/local-llms/sillytavern-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Castmates im App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — Preis, Versionshistorie, Anforderungen, Altersfreigabe und Datenschutzlabel, geprüft am 19. Oktober 2026.',
          '[Castmates-Website](https://get-castmates.com) — Funktionen, Preise, Angaben zur Ausführung auf dem Gerät und FAQ, geprüft am 19. Oktober 2026.',
          '[Castmates-Datenschutzerklärung](https://get-castmates.com/privacy) — Datenverarbeitung, Analysen und Modell-Hosting, zuletzt aktualisiert am 10. Oktober 2026.',
          '[Castmates-Seite zu Inhalten und Sicherheit](https://get-castmates.com/age-suitability) — Altersprüfung, Mature-Modus und Inhaltsfilter.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[SillyTavern-Rezension](/de/local-llms/sillytavern-review) — die quelloffene Rollenspiel-Oberfläche.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
          '[MemoryAI-Rezension](/de/power-local-llm/memoryai-review) — eine kostenlose Offline-Chat-App mit editierbarem Gedächtnis.',
          '[Die besten lokalen LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-es.webp',
    title: 'Reseña de Castmates: chat de personajes con IA sin conexión para iPhone',
    seoTitle: 'Reseña de Castmates: chat de personajes con IA offline',
    intro:
      'Castmates: AI Characters es una app para iPhone de rol y chat con personajes, publicada en el App Store con el nombre de vendedor Josip Markovic y, según su política de privacidad, desarrollada y operada desde Croacia. Se lanzó por primera vez el 6 de julio de 2026. Esta reseña refleja su ficha del App Store, su sitio web y su política de privacidad tal como se comprobaron el 19 de octubre de 2026.',
    metaDescription:
      'Reseña de Castmates: app gratis para iPhone sin conexión con 32 personajes de IA, personajes propios y sin cuenta. Precios, privacidad y dudas abiertas.',
    twitterDescription:
      'Reseña de Castmates: una app gratuita para iPhone, de código cerrado, que dice ejecutar el chat de personajes con IA en el teléfono tras una descarga única del modelo. Precios, privacidad y controles de edad según la ficha y la política.',
    audience:
      'Usuarios adultos de iPhone que quieren una app de rol con IA sin conexión y necesitan saber cuánto cuesta, qué sale del teléfono y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Castmates',
    targetKeywords: [
      'reseña castmates app',
      'chat de personajes ia sin conexión iphone',
      'app de rol con ia en el dispositivo',
      'app de compañero ia sin cuenta',
      'castmates ai characters privacidad',
      'chat de rol offline ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**Castmates (versión 1.1.7 a 19 de octubre de 2026) es una app gratuita para iPhone que, según su ficha, ejecuta una IA de chat de personajes en el teléfono tras una descarga única del modelo de unos 1.9 GB, con 32 personajes listos para usar y sin cuenta.** Su plan Pro dentro de la app elimina el límite diario de mensajes y desbloquea un modo Mature opcional solo para adultos. La app es de código cerrado; el desarrollador nombra el modelo como Impish Llama 3B (basado en Llama 3, Q4_K_M) ejecutado con llama.cpp, así que la afirmación sobre el funcionamiento en el dispositivo sigue apoyándose en su palabra.',
    quickAnswerTop: {
      es: {
        question: '¿Castmates funciona de verdad sin conexión y es gratis?',
        answer:
          'Según su ficha y su sitio web, la app se descarga gratis y, una vez instalado el modelo, los chats se generan en el teléfono sin conexión. El nivel gratuito tiene límites y Pro los elimina. Según la política de privacidad, las estadísticas de uso anónimas sí salen del teléfono.',
        bullets: [
          'Gratis en el [App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) para iPhone y iPad, con iOS 17.0 o posterior.',
          '32 personajes escritos a mano en 8 géneros, más personajes que creas tú.',
          'Los resúmenes de sesión permiten que los personajes te recuerden entre chats.',
          'Solo en inglés; no se menciona versión para Android ni para escritorio.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Castmates?', anchor: 'what-is-castmates' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de red', anchor: 'privacy' },
      { label: 'Clasificación por edad y controles de contenido', anchor: 'content-safety' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'vs-alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'La voz del creador', anchor: 'from-the-maker' },
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
            text: 'Castmates es una app de código cerrado para iPhone de rol con personajes de IA cuyo modelo, según el desarrollador, se ejecuta en el teléfono, sin cuenta y con un nivel gratuito limitado.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas, descargas un modelo una vez y chateas con personajes ya hechos o creados por ti; el desarrollador dice que las conversaciones se generan y se guardan en el teléfono.',
          },
        ],
        items: [
          'Desarrollador: un único vendedor del App Store, sin empresa nombrada en el sitio web y sin código fuente público.',
          'Mantenimiento: el historial de versiones muestra 11 lanzamientos entre el 6 de julio y el 19 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Alcance: el App Store muestra una media de 4.2 con 5 valoraciones, por lo que la app tiene poco historial público.',
          'Plataformas: iPhone y iPad con iOS o iPadOS 17.0 o posterior, solo en inglés.',
          'Edad: la ficha la clasifica para mayores de 18 y el modo Mature queda tras Pro y una comprobación de fecha de nacimiento.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la ficha del App Store, el sitio web del desarrollador y sus páginas de privacidad y contenido, comprobados el 19 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: '¿Qué es Castmates?',
        content: [
          '**Castmates es una app de rol en la que chateas con personajes ficticios, cada uno con una historia, una frase de apertura y tres escenarios.** El sitio web enumera 32 personajes escritos a mano en ocho géneros (Compañeros, Romance, Fantasía, Ciencia ficción, Anime, Histórico, Misterio y terror y Aventura), 96 escenarios en total, y dice que los personajes responden con acciones y ambientación en lugar de frases sueltas. También puedes crear un personaje con nombre, lema, personalidad, saludo, aspecto, tono, etiquetas y un escenario inicial, y elegir un estilo como Amistad, Romance, Mentoría, Rivalidad o Aventura.',
          'El subtítulo en el App Store es «Private, offline story chat», y la app toma su nombre de su reparto de personajes, los «castmates».',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Castmates se instala desde el App Store; no se ofrece versión para Android, para escritorio ni código fuente.** Los enlaces de abajo son los que usan la ficha y el sitio del desarrollador.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          { 'Plataforma': 'iPhone y iPad', 'Dónde conseguirla': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) (iOS o iPadOS 17.0 o posterior, 35.6 MB)' },
          { 'Plataforma': 'Sitio web', 'Dónde conseguirla': '[get-castmates.com](https://get-castmates.com)' },
          { 'Plataforma': 'Política de privacidad', 'Dónde conseguirla': '[get-castmates.com/privacy](https://get-castmates.com/privacy) (actualizada el 10 de octubre de 2026)' },
          { 'Plataforma': 'Contenido y seguridad', 'Dónde conseguirla': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { 'Plataforma': 'Términos', 'Dónde conseguirla': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: 'Versión revisada: 1.1.7, publicada el 19 de octubre de 2026 según la ficha del App Store. Según el desarrollador, hace falta un iPhone con 6 GB de RAM o más; los teléfonos con 4 GB o menos reciben una explicación en lugar de la descarga del modelo, así que comprueba tu iPhone antes de instalar. El modelo es Impish Llama 3B (basado en Llama 3, Q4_K_M, unos 1,9 GB) y se ejecuta con llama.cpp con un contexto de 4096 tokens.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**Castmates se descarga gratis, y Pro se vende como suscripción mensual o anual o como compra única de por vida.** Los precios de abajo son del App Store de España a 19 de octubre de 2026 y varían según la tienda. Las suscripciones se renuevan hasta que las canceles en el App Store.',
        ],
        columns: ['Plan', 'Qué incluye', 'Precio (tienda ES)'],
        rows: [
          { 'Plan': 'Gratis', 'Qué incluye': '30 mensajes al día, 1 personaje propio', 'Precio (tienda ES)': '0 €' },
          { 'Plan': 'Pro mensual', 'Qué incluye': 'Mensajes y personajes ilimitados, modo Mature', 'Precio (tienda ES)': '7,99 €/mes' },
          { 'Plan': 'Pro anual', 'Qué incluye': 'Igual que el mensual', 'Precio (tienda ES)': '34,99 €/año' },
          { 'Plan': 'Pro de por vida', 'Qué incluye': 'Igual que el mensual, pago único', 'Precio (tienda ES)': '49,99 €' },
        ],
        note: 'La tienda de EE. UU. muestra 6,99 $, 29,99 $ y 44,99 $. El nivel gratuito incluye todo el reparto estándar y no requiere cuenta.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración sigue el orden descrito en el sitio web y la ficha; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga Castmates desde el App Store; según el sitio web, no hace falta registro, correo ni perfil.',
          },
          {
            title: 'Descarga el modelo con Wi-Fi',
            whyItMatters: 'El primer arranque descarga un archivo de modelo único de unos 1.9 GB, que puedes borrar después para liberar espacio. Luego, según el desarrollador, la app funciona sin conexión.',
          },
          {
            title: 'Elige o crea un personaje',
            whyItMatters: 'Escoge uno de los personajes listos y un escenario, o crea el tuyo; el nivel gratuito permite un personaje propio.',
          },
          {
            title: 'Desbloquea Pro si quieres',
            whyItMatters: 'Pro elimina el límite diario y es necesario para el modo Mature, que usa el mismo modelo y no requiere otra descarga.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede de la ficha del App Store, del sitio web o de la política de privacidad.**',
        ],
        items: [
          '**Memoria de sesión.** La app resume sesiones anteriores para que los personajes te recuerden; la política de privacidad dice que los recuerdos se guardan en el teléfono y se pueden borrar eliminando la memoria de una conversación.',
          '**Volver a un chat.** Las notas de la versión 1.1.7 añaden un resumen «Previously» y botones de sugerencia tras la primera respuesta de un personaje.',
          '**Avatares propios.** Un personaje propio puede tomar su avatar de tu fototeca.',
          '**Control del modelo.** Los ajustes incluyen la gestión del modelo en el dispositivo, un bloqueo de contenido con PIN y el interruptor del modo Mature.',
          '**Uso de batería.** Las preguntas frecuentes dicen que las respuestas consumen energía como un juego y que nada se ejecuta en segundo plano.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de red',
        content: [
          '**El desarrollador dice que las conversaciones, los personajes propios, los avatares y los recuerdos permanecen en el iPhone y que la empresa nunca los recibe, ve ni almacena.** La política nombra una descarga remota: el archivo de modelo único, alojado en Cloudflare R2.',
          'La etiqueta del App Store dice «Datos no vinculados contigo», en línea con la [política de privacidad](https://get-castmates.com/privacy), actualizada por última vez el 10 de octubre de 2026, que dice que los eventos de uso anónimos van a Mixpanel (aperturas de la app, progreso de incorporación, vistas del muro de pago y recuento de mensajes, ligados a un identificador aleatorio del dispositivo, con la ubicación por IP desactivada) y que RevenueCat gestiona el estado de la suscripción mediante un ID de usuario de app anonimizado. La política afirma que estos eventos no contienen mensajes ni nada que te identifique, y no indica cuánto tiempo los conserva Mixpanel. Las compras pasan por Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, así que ninguna de estas afirmaciones puede comprobarse en el código, y PromptQuorum no ha auditado el tráfico de red. Quien maneje datos confidenciales debería verificar el comportamiento en su propio dispositivo.',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: 'Clasificación por edad y controles de contenido',
        content: [
          '**El App Store clasifica Castmates para mayores de 18 y señala contenido sexual o desnudez frecuentes y temas sugerentes; la página de contenido del desarrollador la describe como apta para todos los públicos por defecto.** Los detalles proceden de esa página, y PromptQuorum no ha probado la eficacia de los controles.',
        ],
        items: [
          '**Modo predeterminado.** Aparecen romance y temas maduros, pero una protección en el dispositivo funde a negro las escenas íntimas; la página dice «Castmates is not a pornography app».',
          '**Modo Mature.** Opcional y para adultos: requiere un plan Pro activo, una comprobación única de fecha de nacimiento (se rechazan fechas de menores de 18), el PIN si hay uno y memoria suficiente en el dispositivo para el modelo maduro.',
          '**Bloqueo de contenido con PIN.** Un padre, madre o tutor puede fijar un PIN en Ajustes; solo se guarda como hash con sal.',
          '**Siempre bloqueado.** Un filtro en el dispositivo para mensajes y personajes creados bloquea cualquier sexualización de menores y otros contenidos claramente ilegales en todos los modos.',
          '**Denuncias.** Cada mensaje de la IA y cada personaje tiene una acción Denunciar.',
          '**Solo ficción.** Los personajes son ficticios y no son fuente de consejo médico, legal ni psicológico, tampoco los de tipo coach o mentor.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Adultos que quieren rol con personajes sin crear una cuenta.** El nivel gratuito cubre el reparto estándar.',
          '**Quienes prefieren que los chats se queden en el teléfono.** El desarrollador dice que no se sube nada, con las salvedades de la sección de privacidad.',
          '**Escritores aficionados que quieren sus propios personajes.** Los personajes propios tienen campos de personalidad, tono y escenario inicial.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en el uso real.** PromptQuorum no ejecutó la app, así que no se evalúan la calidad de las respuestas, la velocidad, el uso de batería ni la eficacia real del filtro de contenido.',
          '**Código fuente y licencia.** La app es de código cerrado y no se encontró ningún repositorio público.',
          '**Tráfico.** PromptQuorum no ha auditado el tráfico de red, por lo que la analítica descrita en la política no está verificada de forma independiente.',
          '**Datos de la empresa.** El sitio web solo muestra «© 2026 Castmates» y un correo de soporte oculto; la política de privacidad no indica una entidad legal.',
          '**Historial.** La app tiene unos tres meses y las fuentes no dan ningún compromiso de soporte.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[SillyTavern](/es/local-llms/sillytavern-review)', 'Plataformas': 'Windows, macOS, Linux, web', 'Precio / licencia': 'Gratis / AGPL 3.0', 'Diferencia clave': 'Interfaz de rol de código abierto para backends de modelos que ejecutas tú' },
          { 'App': '[Private Mind](/es/power-local-llm/private-mind-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Chat sin conexión de código abierto con preguntas sobre documentos, no centrado en rol' },
          { 'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Cliente en el dispositivo de código abierto donde eliges tus modelos' },
          { 'App': '[MemoryAI](/es/power-local-llm/memoryai-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / código cerrado', 'Diferencia clave': 'Chat sin conexión con memoria editable y modo infantil con PIN' },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Castmates tiene chat de voz?',
            a: 'Ni el sitio web ni la descripción del App Store mencionan funciones de voz; Castmates se presenta como un chat de texto con acciones y ambientación.',
          },
          {
            q: '¿Funciona sin conexión a internet?',
            a: 'Según el desarrollador, sí una vez instalado el modelo. La descarga del modelo, las compras y las estadísticas de uso anónimas descritas en la política de privacidad usan la red.',
          },
          {
            q: '¿Puedo usarla en un iPad o en un teléfono Android?',
            a: 'La ficha permite iPhone y iPad con la versión 17.0 o posterior; ninguna fuente menciona una versión para Android.',
          },
          {
            q: '¿Se usa mi chat para entrenar un modelo?',
            a: 'La política de privacidad dice que la empresa nunca recibe, ve ni almacena las conversaciones, y lo contrasta con las apps de IA en la nube que registran chats. PromptQuorum no lo ha verificado.',
          },
          {
            q: '¿Puedo borrar el modelo?',
            a: 'Sí, el sitio web dice que el archivo del modelo puede borrarse para liberar espacio; se vuelve a descargar cuando quieras chatear.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'La voz del creador',
        content: [
          'Josip Markovic, el desarrollador de Castmates, compartió lo siguiente sobre la app y los motivos por los que la creó. Se presenta como las propias palabras del desarrollador, ligeramente editadas para facilitar la lectura, no como una evaluación editorial independiente de PromptQuorum:',
          '«Creé Castmates porque todas las apps de personajes que probé querían una cuenta y enviaban cada mensaje a un servidor. Un modelo de 3B en un teléfono parecía demasiado pequeño para historias de verdad, así que la mayor parte del trabajo consistió en lograr que mantuviera una escena: resúmenes de sesión para que los personajes te recuerden, protecciones que detectan cuando el modelo rompe el personaje y muchas pruebas de evaluación en un Mac antes de publicar nada. Lo siguiente son una primera descarga más rápida y personajes de temporada, empezando por tres de Halloween.»',
        ],
        note: '— Josip Markovic, desarrollador',
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Castmates es una app gratuita de rol para iPhone que, según el desarrollador, ejecuta su chat de personajes en el dispositivo, con 32 personajes listos, personajes propios, memoria de sesión y controles de edad para su modo Mature opcional. Además se actualiza activamente, con un lanzamiento el día en que se comprobó esta reseña. En contra: es de código cerrado, tiene unos tres meses, pocas valoraciones, solo está en inglés y requiere un iPhone con 6 GB de RAM o más. Encaja con adultos que quieren chat de personajes sin cuenta y aceptan una app joven y cerrada; quien quiera código abierto y sus propios modelos puede comparar [SillyTavern](/es/local-llms/sillytavern-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Castmates en el App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — precio, historial de versiones, requisitos, clasificación por edad y etiqueta de privacidad, comprobados el 19 de octubre de 2026.',
          '[Sitio web de Castmates](https://get-castmates.com) — funciones, precios, afirmaciones sobre el funcionamiento en el dispositivo y preguntas frecuentes, comprobados el 19 de octubre de 2026.',
          '[Política de privacidad de Castmates](https://get-castmates.com/privacy) — tratamiento de datos, analítica y alojamiento del modelo, actualizada por última vez el 10 de octubre de 2026.',
          '[Página de contenido y seguridad de Castmates](https://get-castmates.com/age-suitability) — verificación de edad, modo Mature y filtro de contenido.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de SillyTavern](/es/local-llms/sillytavern-review) — la interfaz de rol de código abierto.',
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión gratuita con licencia MIT para iPhone y Android.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat en el dispositivo gratuito y de código abierto para iOS y Android.',
          '[Reseña de MemoryAI](/es/power-local-llm/memoryai-review) — una app de chat sin conexión gratuita con memoria editable.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen más amplio para iPhone.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-fr.webp',
    title: 'Test de Castmates : chat de personnages IA hors ligne pour iPhone',
    seoTitle: 'Test de Castmates : chat de personnages IA hors ligne',
    intro:
      'Castmates: AI Characters est une application iPhone de jeu de rôle et de chat avec des personnages, publiée sur l\'App Store sous le nom de vendeur Josip Markovic et, selon sa politique de confidentialité, développée et exploitée depuis la Croatie. Elle est sortie pour la première fois le 6 juillet 2026. Ce test reflète sa fiche App Store, son site web et sa politique de confidentialité tels que vérifiés le 19 octobre 2026.',
    metaDescription:
      'Test de Castmates : appli iPhone gratuite hors ligne, 32 personnages IA, personnages perso, sans compte. Prix, vie privée et points non confirmés.',
    twitterDescription:
      'Test de Castmates : une appli iPhone gratuite et propriétaire qui dit exécuter le chat de personnages IA sur le téléphone après un téléchargement unique du modèle. Prix, vie privée et contrôles d\'âge selon la fiche et la politique.',
    audience:
      'Utilisateurs adultes d\'iPhone qui cherchent une appli de jeu de rôle IA hors ligne et veulent savoir ce qu\'elle coûte, ce qui quitte le téléphone et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Castmates',
    targetKeywords: [
      'test castmates appli',
      'chat personnages ia hors ligne iphone',
      'appli jeu de rôle ia sur l\'appareil',
      'appli compagnon ia sans compte',
      'castmates ai characters confidentialité',
      'chat jeu de rôle hors ligne ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**Castmates (version 1.1.7 au 19 octobre 2026) est une application iPhone gratuite qui, selon sa fiche, exécute une IA de chat de personnages sur le téléphone après un téléchargement unique du modèle d\'environ 1.9 Go, avec 32 personnages prêts à l\'emploi et sans compte.** Son abonnement Pro intégré supprime la limite quotidienne de messages et débloque un mode Mature optionnel réservé aux adultes. L\'appli est propriétaire ; le développeur indique que le modèle est Impish Llama 3B (basé sur Llama 3, Q4_K_M), exécuté via llama.cpp : l\'affirmation d\'un fonctionnement sur l\'appareil repose donc toujours sur sa parole.',
    quickAnswerTop: {
      fr: {
        question: 'Castmates fonctionne-t-elle vraiment hors ligne et gratuitement ?',
        answer:
          'D\'après sa fiche et son site, l\'appli se télécharge gratuitement et, une fois le modèle installé, les chats sont générés sur le téléphone sans connexion. Le niveau gratuit est limité, Pro lève la limite. Selon la politique de confidentialité, des statistiques d\'usage anonymes quittent tout de même le téléphone.',
        bullets: [
          'Gratuite sur l\'[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) pour iPhone et iPad, iOS 17.0 ou plus récent.',
          '32 personnages écrits à la main dans 8 genres, plus des personnages que vous créez.',
          'Des résumés de session permettent aux personnages de se souvenir de vous d\'un chat à l\'autre.',
          'En anglais uniquement ; aucune version Android ou bureau n\'est mentionnée.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Castmates ?', anchor: 'what-is-castmates' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Vie privée et usage du réseau', anchor: 'privacy' },
      { label: 'Classification d\'âge et contrôles de contenu', anchor: 'content-safety' },
      { label: 'À qui s\'adresse-t-elle', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Le mot du développeur', anchor: 'from-the-maker' },
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
            text: 'Castmates est une appli iPhone propriétaire de jeu de rôle avec des personnages IA dont le modèle, selon le développeur, tourne sur le téléphone, sans compte et avec un niveau gratuit limité.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez, téléchargez un modèle une fois, puis discutez avec des personnages prêts à l\'emploi ou créés par vous ; le développeur dit que les conversations sont générées et stockées sur le téléphone.',
          },
        ],
        items: [
          'Développeur : un vendeur unique sur l\'App Store, sans société nommée sur le site et sans code source public.',
          'Maintenance : l\'historique des versions montre 11 publications entre le 6 juillet et le 19 octobre 2026, donc aucun avertissement de projet abandonné ne s\'applique.',
          'Audience : l\'App Store affiche une moyenne de 4.2 sur 5 notes, l\'appli a donc peu d\'historique public.',
          'Plateformes : iPhone et iPad sous iOS ou iPadOS 17.0 ou plus récent, en anglais uniquement.',
          'Âge : la fiche la classe 18+ et le mode Mature est réservé à Pro et à une vérification de la date de naissance.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur la fiche App Store, le site du développeur et ses pages de confidentialité et de contenu, vérifiés le 19 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni mesuré l\'appli.',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: 'Qu\'est-ce que Castmates ?',
        content: [
          '**Castmates est une appli de jeu de rôle où vous discutez avec des personnages fictifs, chacun doté d\'un passé, d\'une phrase d\'ouverture et de trois scénarios.** Le site recense 32 personnages écrits à la main dans huit genres (Compagnons, Romance, Fantasy, Science-fiction, Anime, Historique, Mystère et horreur, Aventure), soit 96 scénarios au total, et affirme que les personnages répondent par des actions et des descriptions de scène plutôt que par des phrases isolées. Vous pouvez aussi créer un personnage avec un nom, un slogan, une personnalité, un message d\'accueil, une apparence, un ton, des étiquettes et un scénario d\'ouverture, et choisir un style comme Amitié, Romance, Mentorat, Rivalité ou Aventure.',
          'Le sous-titre sur l\'App Store est « Private, offline story chat », et l\'appli tire son nom de sa distribution de personnages, les « castmates ».',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**Castmates s\'installe depuis l\'App Store ; aucune version Android, aucune version bureau ni code source n\'est proposé.** Les liens ci-dessous sont ceux qu\'utilisent la fiche et le site du développeur.',
        ],
        columns: ['Plateforme', 'Où la télécharger'],
        rows: [
          { 'Plateforme': 'iPhone et iPad', 'Où la télécharger': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) (iOS ou iPadOS 17.0 ou plus récent, 35.6 Mo)' },
          { 'Plateforme': 'Site web', 'Où la télécharger': '[get-castmates.com](https://get-castmates.com)' },
          { 'Plateforme': 'Politique de confidentialité', 'Où la télécharger': '[get-castmates.com/privacy](https://get-castmates.com/privacy) (mise à jour le 10 octobre 2026)' },
          { 'Plateforme': 'Contenu et sécurité', 'Où la télécharger': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { 'Plateforme': 'Conditions', 'Où la télécharger': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: 'Version examinée : 1.1.7, publiée le 19 octobre 2026 d\'après la fiche App Store. Selon le développeur, il faut un iPhone avec 6 Go de RAM ou plus ; les téléphones avec 4 Go ou moins reçoivent une explication au lieu du téléchargement du modèle, vérifiez donc votre iPhone avant d\'installer. Le modèle est Impish Llama 3B (basé sur Llama 3, Q4_K_M, environ 1,9 Go), exécuté via llama.cpp avec un contexte de 4 096 jetons.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**Castmates se télécharge gratuitement, et Pro se vend en abonnement mensuel ou annuel, ou en achat unique à vie.** Les prix ci-dessous viennent de l\'App Store français au 19 octobre 2026 et varient selon la boutique. Les abonnements se renouvellent jusqu\'à résiliation dans l\'App Store.',
        ],
        columns: ['Offre', 'Contenu', 'Prix (boutique FR)'],
        rows: [
          { 'Offre': 'Gratuit', 'Contenu': '30 messages par jour, 1 personnage perso', 'Prix (boutique FR)': '0 €' },
          { 'Offre': 'Pro mensuel', 'Contenu': 'Messages et personnages illimités, mode Mature', 'Prix (boutique FR)': '7,99 €/mois' },
          { 'Offre': 'Pro annuel', 'Contenu': 'Comme le mensuel', 'Prix (boutique FR)': '34,99 €/an' },
          { 'Offre': 'Pro à vie', 'Contenu': 'Comme le mensuel, achat unique', 'Prix (boutique FR)': '49,99 €' },
        ],
        note: 'La boutique américaine affiche 6,99 $, 29,99 $ et 44,99 $. Le niveau gratuit inclut toute la distribution standard et ne demande aucun compte.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La mise en route suit l\'ordre décrit sur le site et la fiche ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'appli',
            whyItMatters: 'Téléchargez Castmates depuis l\'App Store ; selon le site, ni inscription, ni e-mail, ni profil ne sont nécessaires.',
          },
          {
            title: 'Télécharger le modèle en Wi-Fi',
            whyItMatters: 'Le premier lancement récupère un fichier de modèle unique d\'environ 1.9 Go, que vous pouvez supprimer ensuite pour libérer de l\'espace. Ensuite, selon le développeur, l\'appli fonctionne sans connexion.',
          },
          {
            title: 'Choisir ou créer un personnage',
            whyItMatters: 'Choisissez un personnage prêt à l\'emploi et un scénario, ou créez le vôtre ; le niveau gratuit autorise un personnage perso.',
          },
          {
            title: 'Débloquer Pro si besoin',
            whyItMatters: 'Pro supprime la limite quotidienne et il est requis pour le mode Mature, qui utilise le même modèle et ne demande aucun téléchargement supplémentaire.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la fiche App Store, du site web ou de la politique de confidentialité.**',
        ],
        items: [
          '**Mémoire de session.** L\'appli résume les sessions passées pour que les personnages se souviennent de vous ; la politique indique que les souvenirs sont stockés sur le téléphone et peuvent être effacés en supprimant la mémoire d\'une conversation.',
          '**Reprendre un chat.** Les notes de version 1.1.7 ajoutent un récapitulatif « Previously » et des suggestions à toucher après la première réponse d\'un personnage.',
          '**Avatars personnalisés.** Un personnage perso peut prendre son avatar dans votre photothèque.',
          '**Contrôle du modèle.** Les réglages comprennent la gestion du modèle sur l\'appareil, un verrou de contenu par code PIN et l\'interrupteur du mode Mature.',
          '**Consommation de batterie.** La FAQ indique que les réponses consomment à peu près comme un jeu et que rien ne tourne en arrière-plan.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Vie privée et usage du réseau',
        content: [
          '**Le développeur dit que les conversations, les personnages personnalisés, les avatars et les souvenirs restent sur l\'iPhone et que la société ne les reçoit, ne les voit ni ne les stocke jamais.** La politique cite un téléchargement distant : le fichier de modèle unique, hébergé sur Cloudflare R2.',
          'L\'étiquette de l\'App Store indique « Données non liées à vous », en accord avec la [politique de confidentialité](https://get-castmates.com/privacy), mise à jour le 10 octobre 2026, qui dit que des événements d\'usage anonymes sont envoyés à Mixpanel (ouvertures de l\'appli, progression de l\'onboarding, vues du paywall et nombre de messages, associés à un identifiant aléatoire de l\'appareil, la localisation par IP étant désactivée) et que RevenueCat suit l\'état de l\'abonnement via un identifiant d\'utilisateur anonymisé. La politique affirme que ces événements ne contiennent aucun message ni rien qui vous identifie, et n\'indique pas combien de temps Mixpanel les conserve. Les achats passent par Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'appli est propriétaire : aucune de ces affirmations ne peut être vérifiée dans le code, et PromptQuorum n\'a pas audité le trafic réseau. Quiconque traite des données confidentielles devrait vérifier le comportement sur son propre appareil.',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: 'Classification d\'âge et contrôles de contenu',
        content: [
          '**L\'App Store classe Castmates 18+ et signale du contenu sexuel ou de la nudité fréquents ainsi que des thèmes suggestifs ; la page de contenu du développeur la présente comme tout public par défaut.** Les détails ci-dessous viennent de cette page, et PromptQuorum n\'a pas testé l\'efficacité des contrôles.',
        ],
        items: [
          '**Mode par défaut.** Romance et thèmes matures apparaissent, mais une protection sur l\'appareil fait un fondu au noir sur les scènes intimes ; la page affirme « Castmates is not a pornography app ».',
          '**Mode Mature.** Optionnel et réservé aux adultes : il exige un abonnement Pro actif, une vérification unique de la date de naissance (les dates de moins de 18 ans sont refusées), le code PIN s\'il est défini et assez de mémoire sur l\'appareil pour le modèle mature.',
          '**Verrou de contenu par PIN.** Un parent ou tuteur peut définir un code PIN dans les Réglages ; il n\'est stocké que sous forme de hachage salé.',
          '**Toujours bloqué.** Un filtre sur l\'appareil, appliqué aux messages et aux personnages créés, bloque toute sexualisation de mineurs et les autres contenus clairement illégaux dans tous les modes.',
          '**Signalement.** Chaque message de l\'IA et chaque personnage dispose d\'une action Signaler.',
          '**Fiction uniquement.** Les personnages sont fictifs et ne constituent pas une source de conseils médicaux, juridiques ou psychologiques, y compris les personas de coach ou de mentor.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-elle',
        items: [
          '**Les adultes qui veulent du jeu de rôle avec personnages sans créer de compte.** Le niveau gratuit couvre la distribution standard.',
          '**Ceux qui préfèrent garder leurs chats sur le téléphone.** Le développeur dit que rien n\'est envoyé, avec les réserves de la section sur la vie privée.',
          '**Les auteurs amateurs qui veulent leurs propres personnages.** Les personnages perso ont des champs de personnalité, de ton et de scénario d\'ouverture.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Qualité à l\'usage.** PromptQuorum n\'a pas exécuté l\'appli : la qualité des réponses, la vitesse, la consommation de batterie et la robustesse réelle du filtre de contenu ne sont pas évaluées.',
          '**Code source et licence.** L\'appli est propriétaire et aucun dépôt public n\'a été trouvé.',
          '**Trafic.** PromptQuorum n\'a pas audité le trafic réseau ; les analyses décrites dans la politique ne sont donc pas vérifiées de façon indépendante.',
          '**Informations sur la société.** Le site n\'affiche que « © 2026 Castmates » et une adresse de support masquée ; la politique de confidentialité ne donne aucune entité juridique.',
          '**Historique.** L\'appli a environ trois mois et les sources ne donnent aucun engagement de support.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Appli': '[SillyTavern](/fr/local-llms/sillytavern-review)', 'Plateformes': 'Windows, macOS, Linux, web', 'Prix / licence': 'Gratuit / AGPL 3.0', 'Différence clé': 'Interface de jeu de rôle open source pour des moteurs de modèles que vous faites tourner' },
          { 'Appli': '[Private Mind](/fr/power-local-llm/private-mind-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Chat hors ligne open source avec questions sur documents, pas centré sur le jeu de rôle' },
          { 'Appli': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Client open source sur l\'appareil où vous choisissez vos modèles' },
          { 'Appli': '[MemoryAI](/fr/power-local-llm/memoryai-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / propriétaire', 'Différence clé': 'Chat hors ligne avec mémoire modifiable et mode enfant protégé par PIN' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque appli.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Castmates propose-t-elle un chat vocal ?',
            a: 'Ni le site ni la description de l\'App Store ne mentionnent de fonctions vocales ; Castmates est présentée comme un chat textuel avec actions et descriptions de scène.',
          },
          {
            q: 'Fonctionne-t-elle sans connexion internet ?',
            a: 'Selon le développeur, oui une fois le modèle installé. Le téléchargement du modèle, les achats et les statistiques d\'usage anonymes décrites dans la politique de confidentialité utilisent le réseau.',
          },
          {
            q: 'Puis-je l\'utiliser sur un iPad ou un téléphone Android ?',
            a: 'La fiche autorise iPhone et iPad à partir de la version 17.0 ; aucune source ne mentionne de version Android.',
          },
          {
            q: 'Mon chat sert-il à entraîner un modèle ?',
            a: 'La politique de confidentialité dit que la société ne reçoit, ne voit ni ne stocke jamais les conversations, et l\'oppose aux applis d\'IA dans le cloud qui journalisent les chats. PromptQuorum ne l\'a pas vérifié.',
          },
          {
            q: 'Puis-je supprimer le modèle ?',
            a: 'Oui, le site indique que le fichier du modèle peut être supprimé pour libérer de l\'espace ; il est retéléchargé quand vous voulez discuter.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Le mot du développeur',
        content: [
          'Josip Markovic, le développeur de Castmates, a partagé ce qui suit au sujet de l\'application et des raisons pour lesquelles il l\'a créée. Ce texte est présenté comme les propres mots du développeur, légèrement retouchés pour la lisibilité, et non comme une évaluation éditoriale indépendante de PromptQuorum :',
          '« J\'ai créé Castmates parce que chaque appli de personnages que j\'ai essayée exigeait un compte et envoyait chaque message à un serveur. Un modèle de 3B sur un téléphone semblait trop petit pour de vraies histoires ; l\'essentiel du travail a donc consisté à lui faire tenir une scène : des résumés de session pour que les personnages se souviennent de vous, des garde-fous qui repèrent quand le modèle sort de son rôle, et de nombreuses séries d\'évaluation sur un Mac avant toute publication. Prochaines étapes : un premier téléchargement plus rapide et des personnages saisonniers, en commençant par trois personnages d\'Halloween. »',
        ],
        note: '— Josip Markovic, développeur',
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Castmates est une appli iPhone gratuite de jeu de rôle qui, selon le développeur, exécute son chat de personnages sur l\'appareil, avec 32 personnages prêts à l\'emploi, des personnages personnalisés, une mémoire de session et des contrôles d\'âge pour son mode Mature optionnel. Elle est aussi mise à jour activement, avec une publication le jour où ce test a été vérifié. En contrepartie, elle est propriétaire, vieille d\'environ trois mois, peu notée, en anglais uniquement et nécessite un iPhone avec 6 Go de RAM ou plus. Elle convient aux adultes qui veulent un chat de personnages sans compte et acceptent une appli jeune et fermée ; ceux qui veulent du code ouvert et leurs propres modèles peuvent comparer [SillyTavern](/fr/local-llms/sillytavern-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Castmates sur l\'App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — prix, historique des versions, prérequis, classification d\'âge et étiquette de confidentialité, vérifiés le 19 octobre 2026.',
          '[Site web de Castmates](https://get-castmates.com) — fonctions, tarifs, affirmations sur le fonctionnement sur l\'appareil et FAQ, vérifiés le 19 octobre 2026.',
          '[Politique de confidentialité de Castmates](https://get-castmates.com/privacy) — traitement des données, analyses et hébergement du modèle, mise à jour le 10 octobre 2026.',
          '[Page contenu et sécurité de Castmates](https://get-castmates.com/age-suitability) — vérification d\'âge, mode Mature et filtre de contenu.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de SillyTavern](/fr/local-llms/sillytavern-review) — l\'interface de jeu de rôle open source.',
          '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une appli de chat hors ligne gratuite sous licence MIT pour iPhone et Android.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source et gratuit sur l\'appareil pour iOS et Android.',
          '[Test de MemoryAI](/fr/power-local-llm/memoryai-review) — une appli de chat hors ligne gratuite avec mémoire modifiable.',
          '[Les meilleures applis de LLM local pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large pour iPhone.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-ja.webp',
    title: 'Castmatesレビュー：iPhone向けオフラインAIキャラクターチャット',
    seoTitle: 'Castmatesレビュー：オフラインAIキャラクターチャット',
    intro:
      'Castmates: AI Charactersは、ロールプレイとキャラクターチャット向けのiPhoneアプリです。App Storeでは販売元名Josip Markovicで掲載され、プライバシーポリシーによればクロアチアで開発・運営されています。初回リリースは2026年7月6日です。本レビューは、2026年10月19日に確認したApp Storeの掲載情報、公式サイト、プライバシーポリシーに基づいています。',
    metaDescription:
      'Castmatesレビュー：32体のAIキャラクターとカスタムキャラクターを備え、アカウント不要で使える無料のオフラインiPhoneアプリ。料金、プライバシー、未確認事項を整理します。',
    twitterDescription:
      'Castmatesレビュー：モデルを一度ダウンロードした後、端末上でAIキャラクターチャットを動かすと説明する無料のクローズドソースiPhoneアプリ。掲載情報とポリシーに基づく料金、プライバシー、年齢制限。',
    audience:
      'オフラインのAIロールプレイアプリを探している成人のiPhoneユーザーで、料金、端末から出ていくデータ、情報源が確認していない点を知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Castmates レビュー',
    targetKeywords: [
      'castmates アプリ レビュー',
      'オフライン AI キャラクターチャット iphone',
      'オンデバイス AI ロールプレイ アプリ',
      'アカウント不要 AI コンパニオン',
      'castmates プライバシー',
      'オフライン ロールプレイ チャット ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**Castmates（2026年10月19日時点のバージョン1.1.7）は、掲載情報によると、約1.9 GBのモデルを一度ダウンロードした後に端末上でキャラクターチャットAIを動かす無料のiPhoneアプリで、32体の用意済みキャラクターを備え、アカウントは不要です。** アプリ内のProプランで1日のメッセージ上限が解除され、成人向けの任意のMatureモードが使えます。アプリはクローズドソースで、開発者はモデルをImpish Llama 3B（Llama 3ベース、Q4_K_M）、実行環境をllama.cppと説明しており、端末上で動作するという主張は引き続き開発者の説明に依拠しています。',
    quickAnswerTop: {
      ja: {
        question: 'Castmatesは本当にオフラインで無料で使えますか？',
        answer:
          '掲載情報と公式サイトによれば、アプリは無料でダウンロードでき、モデルのインストール後は通信なしで端末上にチャットが生成されます。無料枠には上限があり、Proで解除されます。プライバシーポリシーによると、匿名の利用統計は端末の外に送信されます。',
        bullets: [
          '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694)でiPhoneとiPad向けに無料、iOS 17.0以降。',
          '手書きの32キャラクター（8ジャンル）と、自分で作るキャラクター。',
          'セッション要約により、キャラクターが過去のチャットを覚えています。',
          '英語のみ。Androidやデスクトップ版についての記載はありません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Castmatesとは', anchor: 'what-is-castmates' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '料金', anchor: 'pricing' },
      { label: 'はじめ方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
      { label: '年齢区分とコンテンツ制御', anchor: 'content-safety' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '競合と代替', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '開発者から', anchor: 'from-the-maker' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'Castmatesは、AIキャラクターとロールプレイするクローズドソースのiPhoneアプリで、開発者によればモデルは端末上で動作し、アカウント不要、無料枠には上限があります。',
          },
          {
            type: 'plain-terms',
            text: 'インストールしてモデルを一度ダウンロードすると、用意済みまたは自作のキャラクターとチャットできます。開発者は、会話は端末上で生成・保存されると説明しています。',
          },
        ],
        items: [
          '開発者：App Storeの単一の販売元で、公式サイトに会社名はなく、ソースコードも公開されていません。',
          '保守状況：バージョン履歴には2026年7月6日から10月19日までに11回のリリースがあり、放置プロジェクトの警告は該当しません。',
          '利用実績：App Storeの評価は5件で平均4.2と、公開された実績はまだ少ないです。',
          '対応環境：iOS／iPadOS 17.0以降のiPhoneとiPad、英語のみ。',
          '年齢：掲載情報は18歳以上で、MatureモードはProと生年月日の確認が必要です。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月19日に確認したApp Storeの掲載情報、開発者の公式サイトとそのプライバシー・コンテンツのページに基づいています。PromptQuorumはアプリをインストールしておらず、テストも計測もしていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: 'Castmatesとは',
        content: [
          '**Castmatesは、背景設定、最初のセリフ、3つのシナリオを持つ架空のキャラクターとチャットするロールプレイアプリです。** 公式サイトによると、手書きの32キャラクターが8ジャンル（コンパニオン、ロマンス、ファンタジー、SF、アニメ、歴史、ミステリー＆ホラー、冒険）に分かれ、シナリオは合計96。キャラクターは一言ではなく、動作や場面描写を交えて返答するとされています。名前、キャッチコピー、ペルソナ、あいさつ、外見、口調、タグ、最初のシナリオを指定して自分のキャラクターを作り、友情、ロマンス、メンター、ライバル、冒険といったスタイルを選ぶこともできます。',
          'App Storeのサブタイトルは「Private, offline story chat」で、アプリ名は登場キャラクター（「castmates」）に由来します。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**CastmatesはApp Storeからインストールします。Android版、デスクトップ版、ソースコードは提供されていません。** 以下のリンクは、掲載情報と開発者サイトが使っているものです。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          { 'プラットフォーム': 'iPhone・iPad', '入手先': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694)（iOS／iPadOS 17.0以降、35.6 MB）' },
          { 'プラットフォーム': '公式サイト', '入手先': '[get-castmates.com](https://get-castmates.com)' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手先': '[get-castmates.com/privacy](https://get-castmates.com/privacy)（2026年10月10日更新）' },
          { 'プラットフォーム': 'コンテンツと安全', '入手先': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { 'プラットフォーム': '利用規約', '入手先': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: '確認したバージョン：1.1.7。App Storeの掲載情報では2026年10月19日にリリースされています。開発者によると、RAM 6 GB以上のiPhoneが必要で、4 GB以下の端末にはモデルのダウンロードの代わりに説明が表示されるため、インストール前にお使いのiPhoneを確認してください。モデルはImpish Llama 3B（Llama 3ベース、Q4_K_M、約1.9 GB）で、llama.cppで動作し、コンテキストは4,096トークンです。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**Castmatesは無料でダウンロードでき、Proは月額・年額のサブスクリプションか、買い切りの永久版として販売されています。** 以下の価格は2026年10月19日時点の日本のApp Storeのもので、ストアによって異なります。サブスクリプションは、App Storeで解約するまで更新されます。',
        ],
        columns: ['プラン', '内容', '価格（日本ストア）'],
        rows: [
          { 'プラン': '無料', '内容': '1日30メッセージ、自作キャラ1体', '価格（日本ストア）': '¥0' },
          { 'プラン': 'Pro 月額', '内容': 'メッセージ・キャラ無制限、Matureモード', '価格（日本ストア）': '¥1,100/月' },
          { 'プラン': 'Pro 年額', '内容': '月額と同じ', '価格（日本ストア）': '¥5,000/年' },
          { 'プラン': 'Pro 買い切り', '内容': '月額と同じ、一度の購入', '価格（日本ストア）': '¥7,000' },
        ],
        note: '米国ストアでは$6.99、$29.99、$44.99です。無料枠には標準キャラクター全員が含まれ、アカウントは不要です。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'はじめ方',
        content: [
          '**手順は公式サイトと掲載情報に書かれた順序に従っています。PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'App StoreからCastmatesをダウンロードします。公式サイトによると、サインアップ、メール、プロフィールは不要です。',
          },
          {
            title: 'Wi-Fiでモデルをダウンロードする',
            whyItMatters: '初回起動時に約1.9 GBのモデルファイルを一度だけ取得します。後で削除して容量を空けることもできます。その後は、開発者によれば通信なしで動作します。',
          },
          {
            title: 'キャラクターを選ぶか作る',
            whyItMatters: '用意済みのキャラクターとシナリオを選ぶか、自分で作成します。無料枠では自作キャラクターは1体までです。',
          },
          {
            title: '必要ならProを解除する',
            whyItMatters: 'Proで1日の上限が外れ、Matureモードにも必要です。Matureモードは同じモデルを使うため、追加のダウンロードは不要です。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、App Storeの掲載情報、公式サイト、プライバシーポリシーに基づいています。**',
        ],
        items: [
          '**セッションメモリ。** 過去のセッションを要約し、キャラクターがあなたを覚えられるようにします。プライバシーポリシーによれば、記憶は端末に保存され、会話のメモリを削除すれば消せます。',
          '**チャットへの復帰。** 1.1.7のリリースノートで、「Previously」の要約と、キャラクターの最初の返答後にタップできる提案チップが加わりました。',
          '**カスタムアバター。** 自作キャラクターのアバターには、フォトライブラリの画像を使えます。',
          '**モデル管理。** 設定には、端末上のモデル管理、PINによるコンテンツロック、Matureモードの切り替えがあります。',
          '**バッテリー消費。** FAQによると、返答時の消費電力はゲームと同程度で、バックグラウンドでは何も動きません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**開発者は、会話、自作キャラクター、アバター、メモリはiPhoneの中にとどまり、同社がそれらを受け取ったり、見たり、保存したりすることはないと述べています。** ポリシーが挙げるリモートダウンロードは、Cloudflare R2にホストされた一度きりのモデルファイルの1件です。',
          'App Storeのラベルは「ユーザに関連付けられないデータ」で、2026年10月10日更新の[プライバシーポリシー](https://get-castmates.com/privacy)の内容と一致しています。同ポリシーは、匿名の利用イベントがMixpanelに送られ（アプリの起動、オンボーディングの進行、ペイウォールの表示、メッセージ数。端末上のランダムな識別子に紐づき、IPによる位置情報は無効）、RevenueCatが匿名化されたアプリユーザーIDでサブスクリプション状態を管理すると説明しています。ポリシーは、これらのイベントにメッセージの内容や個人を特定できる情報は含まれないとし、Mixpanelでの保持期間は示していません。購入はAppleを通じて行われます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アプリはクローズドソースのため、これらの主張をコードで確認することはできず、PromptQuorumはネットワーク通信を監査していません。機密データを扱う場合は、ご自身の端末で動作を確認してください。',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: '年齢区分とコンテンツ制御',
        content: [
          '**App StoreはCastmatesを18歳以上とし、頻繁な性的コンテンツや露出、きわどいテーマを挙げています。開発者のコンテンツページでは、初期状態は全年齢向け（SFW）とされています。** 以下の詳細はそのページに基づいており、PromptQuorumは制御がどれほど機能するかをテストしていません。',
        ],
        items: [
          '**標準モード。** ロマンスや大人向けのテーマは登場しますが、端末上のガードが親密な場面をフェードアウトさせます。ページには「Castmates is not a pornography app」とあります。',
          '**Matureモード。** 任意で成人向けです。有効なProプラン、一度きりの生年月日の確認（18歳未満の入力は拒否）、PINが設定されていればそのPIN、そしてMature用モデルを動かせるだけの端末メモリが必要です。',
          '**PINによるコンテンツロック。** 保護者は設定でPINを設定できます。PINはソルト付きハッシュとしてのみ保存されます。',
          '**常にブロック。** チャットメッセージと作成したキャラクターに適用される端末上のフィルターは、未成年者の性的描写やその他の明らかに違法なコンテンツを、すべてのモードでブロックします。',
          '**報告。** すべてのAIメッセージとキャラクターに「報告」アクションがあります。',
          '**フィクションのみ。** キャラクターは架空の存在であり、コーチやメンターのペルソナも含め、医療・法律・心理に関する助言の情報源ではありません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**アカウントを作らずにキャラクターとのロールプレイを楽しみたい成人。** 無料枠で標準キャラクターを利用できます。',
          '**チャットを端末内にとどめたい人。** 開発者は何もアップロードされないと述べています。ただしプライバシーの節の注意点があります。',
          '**自分のキャラクターを作りたい趣味の書き手。** 自作キャラクターにはペルソナ、口調、最初のシナリオの欄があります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**実際の使用感。** PromptQuorumはアプリを実行していないため、返答の質、速度、バッテリー消費、コンテンツフィルターの実際の強度は評価していません。',
          '**ソースコードとライセンス。** アプリはクローズドソースで、公開リポジトリは見つかりませんでした。',
          '**通信。** ネットワーク通信は監査していないため、ポリシーに記載された分析は独立して検証されていません。',
          '**会社情報。** 公式サイトには「© 2026 Castmates」と隠されたサポートメールしかなく、プライバシーポリシーにも法人名はありません。',
          '**実績。** アプリは公開から約3か月で、情報源にサポートの約束はありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        columns: ['アプリ', '対応環境', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[SillyTavern](/ja/local-llms/sillytavern-review)', '対応環境': 'Windows、macOS、Linux、Web', '価格／ライセンス': '無料／AGPL 3.0', '主な違い': '自分で動かすモデルバックエンドにつなぐオープンソースのロールプレイ用フロントエンド' },
          { 'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)', '対応環境': 'iOS、Android', '価格／ライセンス': '無料／MIT', '主な違い': '文書Q&A付きのオープンソースのオフラインチャット。ロールプレイ特化ではない' },
          { 'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)', '対応環境': 'iOS、Android', '価格／ライセンス': '無料／MIT', '主な違い': '好きなモデルを選べるオープンソースのオンデバイスクライアント' },
          { 'アプリ': '[MemoryAI](/ja/power-local-llm/memoryai-review)', '対応環境': 'iOS、Android', '価格／ライセンス': '無料／クローズドソース', '主な違い': '編集可能なメモリとPIN付きキッズモードを備えたオフラインチャット' },
        ],
        note: '競合の詳細は頻繁に変わります。各アプリの最新の価格、ライセンス、対応環境は、それぞれの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Castmatesに音声チャットはありますか？',
            a: '公式サイトにもApp Storeの説明にも音声機能の記載はなく、Castmatesは動作や場面描写を交えたテキストチャットとして紹介されています。',
          },
          {
            q: 'インターネット接続なしで動きますか？',
            a: '開発者によれば、モデルのインストール後は動作します。モデルのダウンロード、購入、プライバシーポリシーにある匿名の利用統計には、ネットワークが関わります。',
          },
          {
            q: 'iPadやAndroidスマートフォンで使えますか？',
            a: '掲載情報はバージョン17.0以降のiPhoneとiPadを対象としています。Android版に触れている情報源はありません。',
          },
          {
            q: 'チャットがモデルの学習に使われますか？',
            a: 'プライバシーポリシーは、同社が会話を受け取ったり、見たり、保存したりすることはないとし、チャットを記録するクラウドAIアプリと対比しています。PromptQuorumはこれを検証していません。',
          },
          {
            q: 'モデルを削除できますか？',
            a: 'はい。公式サイトによると、容量を空けるためにモデルファイルを削除でき、再びチャットしたいときに再ダウンロードされます。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発者から',
        content: [
          'Castmatesの開発者であるJosip Markovic氏が、このアプリと開発の理由について次のように述べています。以下は、読みやすさのために軽く編集した開発者自身の言葉として提示するものであり、PromptQuorumによる独立した編集上の評価ではありません:',
          '「私がCastmatesを作ったのは、これまで試したキャラクターアプリがどれもアカウントを求め、すべてのメッセージをサーバーに送っていたからです。スマートフォン上の3Bモデルでは本格的な物語には小さすぎるように思えたため、作業の大半は、場面を保たせることに費やしました。キャラクターが自分のことを覚えているためのセッション要約、モデルがキャラクターを崩したときに検知するガード、そして公開前にMacで重ねた多数の評価実行です。次は、初回ダウンロードの高速化と季節限定キャラクターで、最初はハロウィンの3キャラクターを予定しています。」',
        ],
        note: '— Josip Markovic氏、開発者',
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Castmatesは、開発者によればキャラクターチャットを端末上で動かす無料のiPhoneロールプレイアプリで、用意済みの32キャラクター、自作キャラクター、セッションメモリ、任意のMatureモード向けの年齢制御を備えています。また、本レビューを確認した当日にリリースがあるなど、活発に更新されています。一方で、クローズドソースで、公開から約3か月、評価した人は少なく、英語のみ、RAM 6 GB以上のiPhoneが必要です。アカウントなしでキャラクターチャットをしたく、新しくてクローズドなアプリを受け入れられる成人に向いています。オープンなコードと自分のモデルを求める方は、[SillyTavern](/ja/local-llms/sillytavern-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比べてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのCastmates](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — 価格、バージョン履歴、要件、年齢区分、プライバシーラベル。2026年10月19日確認。',
          '[Castmates公式サイト](https://get-castmates.com) — 機能、料金、端末上での動作に関する主張、FAQ。2026年10月19日確認。',
          '[Castmatesプライバシーポリシー](https://get-castmates.com/privacy) — データの扱い、分析、モデルのホスティング。2026年10月10日更新。',
          '[Castmatesのコンテンツと安全のページ](https://get-castmates.com/age-suitability) — 年齢確認、Matureモード、コンテンツフィルター。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[SillyTavernレビュー](/ja/local-llms/sillytavern-review) — オープンソースのロールプレイ用フロントエンド。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けの無料でMITライセンスのオフラインチャットアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの無料でオープンソースのオンデバイスチャットクライアント。',
          '[MemoryAIレビュー](/ja/power-local-llm/memoryai-review) — 編集可能なメモリを備えた無料のオフラインチャットアプリ。',
          '[2026年のiPhone向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い比較。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-pt.webp',
    title: 'Análise do Castmates: chat de personagens com IA offline para iPhone',
    seoTitle: 'Análise do Castmates: chat de personagens com IA offline',
    intro:
      'O Castmates: AI Characters é um app para iPhone de roleplay e chat com personagens, listado na App Store com o nome de vendedor Josip Markovic e, segundo sua política de privacidade, desenvolvido e operado na Croácia. Foi lançado pela primeira vez em 6 de julho de 2026. Esta análise reflete a página da App Store, o site e a política de privacidade conforme verificados em 19 de outubro de 2026.',
    metaDescription:
      'Análise do Castmates: app grátis e offline para iPhone com 32 personagens de IA, personagens próprios, sem conta. Preços, privacidade e pontos em aberto.',
    twitterDescription:
      'Análise do Castmates: um app gratuito e de código fechado para iPhone que diz executar o chat de personagens com IA no aparelho após um download único do modelo. Preços, privacidade e controles de idade segundo a página e a política.',
    audience:
      'Usuários adultos de iPhone que querem um app de roleplay com IA offline e precisam saber quanto custa, o que sai do aparelho e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Castmates',
    targetKeywords: [
      'análise castmates app',
      'chat de personagens ia offline iphone',
      'app de roleplay com ia no aparelho',
      'app de companhia ia sem conta',
      'castmates ai characters privacidade',
      'chat de roleplay offline ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**O Castmates (versão 1.1.7 em 19 de outubro de 2026) é um app gratuito para iPhone que, segundo sua página, executa uma IA de chat de personagens no aparelho após um download único do modelo de cerca de 1.9 GB, com 32 personagens prontos e sem conta.** O plano Pro dentro do app remove o limite diário de mensagens e libera um modo Mature opcional só para adultos. O app é de código fechado; o desenvolvedor informa que o modelo é o Impish Llama 3B (baseado no Llama 3, Q4_K_M), executado com llama.cpp, então a afirmação de funcionamento no aparelho continua dependendo da palavra dele.',
    quickAnswerTop: {
      pt: {
        question: 'O Castmates é mesmo offline e gratuito?',
        answer:
          'Segundo a página e o site, o app é gratuito para baixar e, depois que o modelo é instalado, os chats são gerados no aparelho sem conexão. O nível gratuito tem limite e o Pro o remove. De acordo com a política de privacidade, estatísticas de uso anônimas ainda saem do aparelho.',
        bullets: [
          'Gratuito na [App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) para iPhone e iPad, com iOS 17.0 ou posterior.',
          '32 personagens escritos à mão em 8 gêneros, mais personagens que você mesmo cria.',
          'Resumos de sessão permitem que os personagens se lembrem de você entre chats.',
          'Somente em inglês; nenhuma versão para Android ou desktop é mencionada.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Castmates?', anchor: 'what-is-castmates' },
      { label: 'Onde baixar', anchor: 'get-it' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso de rede', anchor: 'privacy' },
      { label: 'Classificação etária e controles de conteúdo', anchor: 'content-safety' },
      { label: 'Para quem é', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'A palavra do criador', anchor: 'from-the-maker' },
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
            text: 'O Castmates é um app de código fechado para iPhone de roleplay com personagens de IA cujo modelo, segundo o desenvolvedor, roda no aparelho, sem conta e com um nível gratuito limitado.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala, baixa um modelo uma vez e conversa com personagens prontos ou criados por você; o desenvolvedor diz que as conversas são geradas e armazenadas no aparelho.',
          },
        ],
        items: [
          'Desenvolvedor: um único vendedor da App Store, sem empresa nomeada no site e sem código-fonte público.',
          'Manutenção: o histórico de versões mostra 11 lançamentos entre 6 de julho e 19 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Alcance: a App Store mostra média de 4.2 em 5 avaliações, então o app tem pouco histórico público.',
          'Plataformas: iPhone e iPad com iOS ou iPadOS 17.0 ou posterior, somente em inglês.',
          'Idade: a página o classifica como 18+ e o modo Mature fica atrás do Pro e de uma verificação de data de nascimento.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página da App Store, no site do desenvolvedor e em suas páginas de privacidade e conteúdo, verificados em 19 de outubro de 2026. A PromptQuorum não instalou, testou nem mediu o app.',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: 'O que é o Castmates?',
        content: [
          '**O Castmates é um app de roleplay em que você conversa com personagens fictícios, cada um com uma história, uma fala de abertura e três cenários.** O site lista 32 personagens escritos à mão em oito gêneros (Companheiros, Romance, Fantasia, Ficção científica, Anime, Histórico, Mistério e terror e Aventura), 96 cenários no total, e diz que os personagens respondem com ações e descrição de cena, em vez de frases curtas. Você também pode criar um personagem com nome, slogan, persona, saudação, aparência, tom, tags e um cenário inicial, e escolher um estilo como Amizade, Romance, Mentoria, Rivalidade ou Aventura.',
          'O subtítulo na App Store é "Private, offline story chat", e o app tira o nome do seu elenco de personagens, os "castmates".',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde baixar',
        content: [
          '**O Castmates é instalado pela App Store; não há versão para Android, para desktop nem código-fonte.** Os links abaixo são os que a página e o site do desenvolvedor usam.',
        ],
        columns: ['Plataforma', 'Onde baixar'],
        rows: [
          { 'Plataforma': 'iPhone e iPad', 'Onde baixar': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) (iOS ou iPadOS 17.0 ou posterior, 35.6 MB)' },
          { 'Plataforma': 'Site', 'Onde baixar': '[get-castmates.com](https://get-castmates.com)' },
          { 'Plataforma': 'Política de privacidade', 'Onde baixar': '[get-castmates.com/privacy](https://get-castmates.com/privacy) (atualizada em 10 de outubro de 2026)' },
          { 'Plataforma': 'Conteúdo e segurança', 'Onde baixar': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { 'Plataforma': 'Termos', 'Onde baixar': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: 'Versão analisada: 1.1.7, lançada em 19 de outubro de 2026 segundo a página da App Store. Segundo o desenvolvedor, é preciso um iPhone com 6 GB de RAM ou mais; aparelhos com 4 GB ou menos recebem uma explicação em vez do download do modelo, então confira seu iPhone antes de instalar. O modelo é o Impish Llama 3B (baseado no Llama 3, Q4_K_M, cerca de 1,9 GB), executado com llama.cpp e contexto de 4.096 tokens.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O Castmates é gratuito para baixar, e o Pro é vendido como assinatura mensal ou anual ou como compra única vitalícia.** Os preços abaixo são da App Store do Brasil em 19 de outubro de 2026 e variam conforme a loja. As assinaturas renovam até você cancelar na App Store.',
        ],
        columns: ['Plano', 'O que inclui', 'Preço (loja BR)'],
        rows: [
          { 'Plano': 'Grátis', 'O que inclui': '30 mensagens por dia, 1 personagem próprio', 'Preço (loja BR)': 'R$ 0' },
          { 'Plano': 'Pro mensal', 'O que inclui': 'Mensagens e personagens ilimitados, modo Mature', 'Preço (loja BR)': 'R$ 49,90/mês' },
          { 'Plano': 'Pro anual', 'O que inclui': 'Igual ao mensal', 'Preço (loja BR)': 'R$ 199,90/ano' },
          { 'Plano': 'Pro vitalício', 'O que inclui': 'Igual ao mensal, compra única', 'Preço (loja BR)': 'R$ 299,90' },
        ],
        note: 'A loja dos EUA mostra US$ 6,99, US$ 29,99 e US$ 44,99. O nível gratuito inclui todo o elenco padrão e não exige conta.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A configuração segue a ordem descrita no site e na página; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o Castmates na App Store; segundo o site, não é preciso cadastro, e-mail nem perfil.',
          },
          {
            title: 'Baixe o modelo no Wi-Fi',
            whyItMatters: 'Na primeira execução, o app busca um arquivo de modelo único de cerca de 1.9 GB, que você pode apagar depois para liberar espaço. Depois disso, segundo o desenvolvedor, o app funciona sem conexão.',
          },
          {
            title: 'Escolha ou crie um personagem',
            whyItMatters: 'Escolha um personagem pronto e um cenário, ou crie o seu; o nível gratuito permite um personagem próprio.',
          },
          {
            title: 'Libere o Pro, se quiser',
            whyItMatters: 'O Pro remove o limite diário e é necessário para o modo Mature, que usa o mesmo modelo e não exige outro download.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da página da App Store, do site ou da política de privacidade.**',
        ],
        items: [
          '**Memória de sessão.** O app resume sessões anteriores para que os personagens se lembrem de você; a política diz que as memórias ficam no aparelho e podem ser apagadas excluindo a memória de uma conversa.',
          '**Voltar a um chat.** As notas da versão 1.1.7 acrescentam um resumo "Previously" e botões de sugestão tocáveis após a primeira resposta de um personagem.',
          '**Avatares personalizados.** Um personagem próprio pode usar como avatar uma imagem da sua biblioteca de fotos.',
          '**Controle do modelo.** As configurações incluem o gerenciamento do modelo no aparelho, um bloqueio de conteúdo por PIN e a chave do modo Mature.',
          '**Uso de bateria.** O FAQ diz que as respostas consomem energia como um jogo e que nada roda em segundo plano.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso de rede',
        content: [
          '**O desenvolvedor diz que conversas, personagens próprios, avatares e memórias ficam no iPhone e que a empresa nunca os recebe, vê ou armazena.** A política cita um download remoto: o arquivo de modelo único, hospedado no Cloudflare R2.',
          'O rótulo da App Store diz "Dados não vinculados a você", em linha com a [política de privacidade](https://get-castmates.com/privacy), atualizada em 10 de outubro de 2026, que diz que eventos de uso anônimos vão para o Mixpanel (aberturas do app, progresso da integração, visualizações do paywall e contagem de mensagens, ligados a um identificador aleatório do aparelho, com a localização por IP desativada) e que o RevenueCat gerencia o status da assinatura por meio de um ID de usuário do app anonimizado. A política afirma que esses eventos não contêm conteúdo de mensagens nem nada que identifique você, e não informa por quanto tempo o Mixpanel os guarda. As compras passam pela Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser verificada no código, e a PromptQuorum não auditou o tráfego de rede. Quem lida com dados confidenciais deve verificar o comportamento no próprio aparelho.',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: 'Classificação etária e controles de conteúdo',
        content: [
          '**A App Store classifica o Castmates como 18+ e aponta conteúdo sexual ou nudez frequentes e temas sugestivos; a página de conteúdo do desenvolvedor o descreve como seguro para todos os públicos por padrão.** Os detalhes abaixo vêm dessa página, e a PromptQuorum não testou a eficácia dos controles.',
        ],
        items: [
          '**Modo padrão.** Aparecem romance e temas maduros, mas uma proteção no aparelho escurece cenas íntimas; a página diz "Castmates is not a pornography app".',
          '**Modo Mature.** Opcional e para adultos: exige um plano Pro ativo, uma verificação única de data de nascimento (datas de menores de 18 são recusadas), o PIN, se houver, e memória suficiente no aparelho para o modelo maduro.',
          '**Bloqueio de conteúdo por PIN.** Um responsável pode definir um PIN em Ajustes; ele é armazenado apenas como hash com salt.',
          '**Sempre bloqueado.** Um filtro no aparelho para mensagens e personagens criados bloqueia qualquer sexualização de menores e outros conteúdos claramente ilegais em todos os modos.',
          '**Denúncia.** Cada mensagem da IA e cada personagem tem uma ação Denunciar.',
          '**Apenas ficção.** Os personagens são fictícios e não são fonte de aconselhamento médico, jurídico ou psicológico, inclusive as personas de coach ou mentor.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Adultos que querem roleplay com personagens sem criar uma conta.** O nível gratuito cobre o elenco padrão.',
          '**Quem prefere manter os chats no aparelho.** O desenvolvedor diz que nada é enviado, com as ressalvas da seção de privacidade.',
          '**Escritores amadores que querem os próprios personagens.** Os personagens próprios têm campos de persona, tom e cenário inicial.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade no uso real.** A PromptQuorum não executou o app, então qualidade das respostas, velocidade, uso de bateria e a força real do filtro de conteúdo não foram avaliados.',
          '**Código-fonte e licença.** O app é de código fechado e nenhum repositório público foi encontrado.',
          '**Tráfego.** A PromptQuorum não auditou o tráfego de rede, então as análises descritas na política não foram verificadas de forma independente.',
          '**Dados da empresa.** O site mostra apenas "© 2026 Castmates" e um e-mail de suporte oculto; a política de privacidade não informa uma entidade legal.',
          '**Histórico.** O app tem cerca de três meses e as fontes não dão nenhum compromisso de suporte.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[SillyTavern](/pt/local-llms/sillytavern-review)', 'Plataformas': 'Windows, macOS, Linux, web', 'Preço / licença': 'Grátis / AGPL 3.0', 'Diferença principal': 'Interface de roleplay de código aberto para backends de modelos que você mesmo executa' },
          { 'App': '[Private Mind](/pt/power-local-llm/private-mind-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Chat offline de código aberto com perguntas sobre documentos, sem foco em roleplay' },
          { 'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Cliente no aparelho de código aberto em que você escolhe seus modelos' },
          { 'App': '[MemoryAI](/pt/power-local-llm/memoryai-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / código fechado', 'Diferença principal': 'Chat offline com memória editável e modo infantil com PIN' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Castmates tem chat de voz?',
            a: 'Nem o site nem a descrição da App Store mencionam recursos de voz; o Castmates é apresentado como um chat de texto com ações e descrição de cena.',
          },
          {
            q: 'Funciona sem conexão com a internet?',
            a: 'Segundo o desenvolvedor, sim, depois que o modelo é instalado. O download do modelo, as compras e as estatísticas de uso anônimas descritas na política de privacidade usam a rede.',
          },
          {
            q: 'Posso usar em um iPad ou em um celular Android?',
            a: 'A página permite iPhone e iPad na versão 17.0 ou posterior; nenhuma fonte menciona uma versão para Android.',
          },
          {
            q: 'Meu chat é usado para treinar um modelo?',
            a: 'A política de privacidade diz que a empresa nunca recebe, vê ou armazena conversas, e contrasta isso com apps de IA na nuvem que registram chats. A PromptQuorum não verificou isso.',
          },
          {
            q: 'Posso apagar o modelo?',
            a: 'Sim, o site diz que o arquivo do modelo pode ser apagado para liberar espaço; ele é baixado de novo quando você quiser conversar.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'A palavra do criador',
        content: [
          'Josip Markovic, o desenvolvedor do Castmates, compartilhou o seguinte sobre o aplicativo e os motivos de tê-lo criado. É apresentado como as próprias palavras do desenvolvedor, levemente editadas para facilitar a leitura, não como uma avaliação editorial independente da PromptQuorum:',
          '"Criei o Castmates porque todo app de personagens que experimentei exigia uma conta e enviava cada mensagem a um servidor. Um modelo de 3B em um celular parecia pequeno demais para histórias de verdade, então a maior parte do trabalho foi fazê-lo sustentar uma cena: resumos de sessão para que os personagens se lembrem de você, proteções que detectam quando o modelo sai do personagem e muitas rodadas de avaliação em um Mac antes de qualquer lançamento. Os próximos passos são um primeiro download mais rápido e personagens sazonais, começando por três de Halloween."',
        ],
        note: '— Josip Markovic, desenvolvedor',
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Castmates é um app gratuito de roleplay para iPhone que, segundo o desenvolvedor, executa o chat de personagens no aparelho, com 32 personagens prontos, personagens próprios, memória de sessão e controles de idade para o modo Mature opcional. Também é atualizado com frequência, com um lançamento no dia em que esta análise foi verificada. Em contrapartida, é de código fechado, tem cerca de três meses, poucas avaliações, só está em inglês e exige um iPhone com 6 GB de RAM ou mais. Serve para adultos que querem chat de personagens sem conta e aceitam um app jovem e fechado; quem quer código aberto e os próprios modelos pode comparar o [SillyTavern](/pt/local-llms/sillytavern-review) ou o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Castmates na App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — preço, histórico de versões, requisitos, classificação etária e rótulo de privacidade, verificados em 19 de outubro de 2026.',
          '[Site do Castmates](https://get-castmates.com) — recursos, preços, afirmações sobre o funcionamento no aparelho e FAQ, verificados em 19 de outubro de 2026.',
          '[Política de privacidade do Castmates](https://get-castmates.com/privacy) — tratamento de dados, análises e hospedagem do modelo, atualizada em 10 de outubro de 2026.',
          '[Página de conteúdo e segurança do Castmates](https://get-castmates.com/age-suitability) — verificação de idade, modo Mature e filtro de conteúdo.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do SillyTavern](/pt/local-llms/sillytavern-review) — a interface de roleplay de código aberto.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito com licença MIT para iPhone e Android.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat no aparelho gratuito e de código aberto para iOS e Android.',
          '[Análise do MemoryAI](/pt/power-local-llm/memoryai-review) — um app de chat offline gratuito com memória editável.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-ar.webp',
    title: 'مراجعة Castmates: دردشة شخصيات بالذكاء الاصطناعي دون إنترنت لـ iPhone',
    seoTitle: 'مراجعة Castmates: دردشة شخصيات ذكاء اصطناعي دون إنترنت',
    intro:
      'Castmates: AI Characters تطبيق iPhone للعب الأدوار ودردشة الشخصيات، مدرج في App Store باسم البائع Josip Markovic، وتفيد سياسة الخصوصية بأنه يُطوَّر ويُدار من كرواتيا. صدر لأول مرة في 6 يوليو 2026. تعكس هذه المراجعة صفحة App Store والموقع وسياسة الخصوصية كما جرى التحقق منها في 19 أكتوبر 2026.',
    metaDescription:
      'مراجعة Castmates: تطبيق iPhone مجاني دون إنترنت بـ 32 شخصية ذكاء اصطناعي وشخصيات مخصصة ودون حساب. الأسعار والخصوصية وما لم تؤكده المصادر بعد.',
    twitterDescription:
      'مراجعة Castmates: تطبيق iPhone مجاني ومغلق المصدر يقول إنه يشغّل دردشة الشخصيات بالذكاء الاصطناعي على الهاتف بعد تنزيل النموذج مرة واحدة. الأسعار والخصوصية وضوابط العمر وفق الصفحة والسياسة.',
    audience:
      'مستخدمو iPhone البالغون الذين يريدون تطبيق لعب أدوار بالذكاء الاصطناعي دون إنترنت ويحتاجون إلى معرفة تكلفته وما يغادر الهاتف وما لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Castmates',
    targetKeywords: [
      'مراجعة تطبيق castmates',
      'دردشة شخصيات ذكاء اصطناعي دون إنترنت iphone',
      'تطبيق لعب أدوار بالذكاء الاصطناعي على الجهاز',
      'تطبيق رفيق ذكاء اصطناعي دون حساب',
      'خصوصية castmates',
      'دردشة لعب أدوار دون إنترنت ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**Castmates (الإصدار 1.1.7 حتى 19 أكتوبر 2026) تطبيق iPhone مجاني يشغّل، وفق صفحته، ذكاءً اصطناعيًا لدردشة الشخصيات على الهاتف بعد تنزيل النموذج مرة واحدة بحجم نحو 1.9 GB، مع 32 شخصية جاهزة ودون حساب.** تزيل خطة Pro داخل التطبيق الحد اليومي للرسائل وتفتح وضع Mature الاختياري للبالغين فقط. التطبيق مغلق المصدر؛ ويذكر المطوّر أن النموذج هو Impish Llama 3B (مبني على Llama 3، بتكميم Q4_K_M) ويعمل عبر llama.cpp، لذا يبقى ادعاء التشغيل على الجهاز قائمًا على كلام المطوّر.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Castmates فعلًا دون إنترنت وبالمجان؟',
        answer:
          'وفق صفحته وموقعه، التطبيق مجاني للتنزيل، وبعد تثبيت النموذج تُولَّد الدردشات على الهاتف دون اتصال. الفئة المجانية محدودة وتزيل Pro الحد. وتقول سياسة الخصوصية إن إحصاءات استخدام مجهولة لا تزال تغادر الهاتف.',
        bullets: [
          'مجاني على [App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) لأجهزة iPhone وiPad بنظام iOS 17.0 أو أحدث.',
          '32 شخصية مكتوبة يدويًا في 8 أنواع، إضافةً إلى شخصيات تنشئها بنفسك.',
          'تتيح ملخصات الجلسات للشخصيات تذكّرك عبر الدردشات.',
          'بالإنجليزية فقط؛ ولا يُذكر إصدار لـ Android أو لسطح المكتب.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Castmates؟', anchor: 'what-is-castmates' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'ميزات أكدتها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
      { label: 'التصنيف العمري وضوابط المحتوى', anchor: 'content-safety' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'من صانع التطبيق', anchor: 'from-the-maker' },
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
            text: 'Castmates تطبيق iPhone مغلق المصدر للعب الأدوار مع شخصيات ذكاء اصطناعي، يقول المطوّر إن نموذجه يعمل على الهاتف، دون حساب وبفئة مجانية محدودة.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت التطبيق وتنزّل نموذجًا مرة واحدة ثم تدردش مع شخصيات جاهزة أو من صنعك؛ ويقول المطوّر إن المحادثات تُولَّد وتُخزَّن على الهاتف.',
          },
        ],
        items: [
          'المطوّر: بائع واحد في App Store دون شركة مذكورة في الموقع ودون شفرة مصدرية عامة.',
          'الصيانة: يُظهر سجل الإصدارات 11 إصدارًا بين 6 يوليو و19 أكتوبر 2026، فلا ينطبق تحذير المشروع المهجور.',
          'الانتشار: يعرض App Store متوسط 4.2 من 5 تقييمات، فسجله العام ضئيل.',
          'المنصات: iPhone وiPad بنظام iOS أو iPadOS 17.0 أو أحدث، وبالإنجليزية فقط.',
          'العمر: تصنّفه الصفحة 18+ ويقع وضع Mature خلف Pro وتحقق من تاريخ الميلاد.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة App Store وموقع المطوّر وصفحتي الخصوصية والمحتوى فيه، وقد جرى التحقق منها في 19 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: 'ما هو Castmates؟',
        content: [
          '**Castmates تطبيق للعب الأدوار تدردش فيه مع شخصيات خيالية، لكل منها قصة خلفية وجملة افتتاحية وثلاثة سيناريوهات.** يسرد الموقع 32 شخصية مكتوبة يدويًا في ثمانية أنواع (الرفاق، الرومانسية، الفانتازيا، الخيال العلمي، الأنمي، التاريخي، الغموض والرعب، المغامرة)، بمجموع 96 سيناريو، ويقول إن الشخصيات تردّ بأفعال ووصف للمشهد بدل جمل قصيرة. ويمكنك أيضًا إنشاء شخصية باسم وشعار وشخصية وتحية ومظهر ونبرة ووسوم وسيناريو افتتاحي، واختيار أسلوب مثل الصداقة أو الرومانسية أو الإرشاد أو التنافس أو المغامرة.',
          'العنوان الفرعي في App Store هو "Private, offline story chat"، ويستمد التطبيق اسمه من طاقم شخصياته، أي "castmates".',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Castmates من App Store؛ ولا يُقدَّم إصدار لـ Android ولا إصدار لسطح المكتب ولا شفرة مصدرية.** الروابط أدناه هي التي تستخدمها الصفحة وموقع المطوّر.',
        ],
        columns: ['المنصة', 'كيف تحصل عليه'],
        rows: [
          { 'المنصة': 'iPhone وiPad', 'كيف تحصل عليه': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) (iOS أو iPadOS 17.0 أو أحدث، 35.6 MB)' },
          { 'المنصة': 'الموقع', 'كيف تحصل عليه': '[get-castmates.com](https://get-castmates.com)' },
          { 'المنصة': 'سياسة الخصوصية', 'كيف تحصل عليه': '[get-castmates.com/privacy](https://get-castmates.com/privacy) (محدّثة في 10 أكتوبر 2026)' },
          { 'المنصة': 'المحتوى والأمان', 'كيف تحصل عليه': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { 'المنصة': 'الشروط', 'كيف تحصل عليه': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: 'الإصدار الذي جرت مراجعته: 1.1.7، صدر في 19 أكتوبر 2026 وفق صفحة App Store. يقول المطوّر إن التطبيق يحتاج إلى iPhone بذاكرة 6 GB أو أكثر؛ أما الهواتف ذات 4 GB أو أقل فتتلقى شرحًا بدل تنزيل النموذج، فتحقق من هاتفك قبل التثبيت. النموذج هو Impish Llama 3B (مبني على Llama 3، Q4_K_M، نحو 1.9 GB) ويعمل عبر llama.cpp بسياق 4096 رمزًا.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**تنزيل Castmates مجاني، وتُباع Pro باشتراك شهري أو سنوي أو بشراء لمرة واحدة مدى الحياة.** الأسعار أدناه من App Store الأمريكي حتى 19 أكتوبر 2026 وتختلف بحسب المتجر. تتجدد الاشتراكات حتى تلغيها في App Store.',
        ],
        columns: ['الخطة', 'ما تشمله', 'السعر (المتجر الأمريكي)'],
        rows: [
          { 'الخطة': 'مجاني', 'ما تشمله': '30 رسالة يوميًا، شخصية مخصصة واحدة', 'السعر (المتجر الأمريكي)': '$0' },
          { 'الخطة': 'Pro شهري', 'ما تشمله': 'رسائل وشخصيات غير محدودة، وضع Mature', 'السعر (المتجر الأمريكي)': '$6.99/شهر' },
          { 'الخطة': 'Pro سنوي', 'ما تشمله': 'مثل الشهري', 'السعر (المتجر الأمريكي)': '$29.99/سنة' },
          { 'الخطة': 'Pro مدى الحياة', 'ما تشمله': 'مثل الشهري، شراء لمرة واحدة', 'السعر (المتجر الأمريكي)': '$44.99' },
        ],
        note: 'تعرض متاجر ألمانيا وإسبانيا وفرنسا €7.99 و€34.99 و€49.99، والمتجر الياباني ¥1,100 و¥5,000 و¥7,000، والمتجر البرازيلي R$ 49,90 وR$ 199,90 وR$ 299,90. تشمل الفئة المجانية كل الشخصيات القياسية ولا تتطلب حسابًا.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**يتبع الإعداد الترتيب الموصوف في الموقع والصفحة؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل Castmates من App Store؛ ويقول الموقع إنه لا حاجة إلى تسجيل أو بريد إلكتروني أو ملف شخصي.',
          },
          {
            title: 'نزّل النموذج عبر Wi-Fi',
            whyItMatters: 'يجلب التشغيل الأول ملف نموذج لمرة واحدة بحجم نحو 1.9 GB يمكنك حذفه لاحقًا لتوفير المساحة. بعد ذلك يعمل التطبيق دون اتصال بحسب المطوّر.',
          },
          {
            title: 'اختر شخصية أو أنشئ واحدة',
            whyItMatters: 'اختر شخصية جاهزة وسيناريو، أو أنشئ شخصيتك؛ وتسمح الفئة المجانية بشخصية مخصصة واحدة.',
          },
          {
            title: 'افتح Pro إن أردت',
            whyItMatters: 'تزيل Pro الحد اليومي وهي مطلوبة لوضع Mature الذي يستخدم النموذج نفسه ولا يحتاج إلى تنزيل إضافي.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'ميزات أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من صفحة App Store أو الموقع أو سياسة الخصوصية.**',
        ],
        items: [
          '**ذاكرة الجلسات.** يلخّص التطبيق الجلسات السابقة لتتذكرك الشخصيات؛ وتقول سياسة الخصوصية إن الذكريات تُخزَّن على الهاتف ويمكن مسحها بحذف ذاكرة المحادثة.',
          '**العودة إلى دردشة.** تضيف ملاحظات الإصدار 1.1.7 ملخص "Previously" وأزرار اقتراح قابلة للّمس بعد أول رد من الشخصية.',
          '**صور رمزية مخصصة.** يمكن للشخصية المخصصة أخذ صورتها الرمزية من مكتبة الصور لديك.',
          '**التحكم في النموذج.** تتضمن الإعدادات إدارة النموذج على الجهاز وقفل محتوى برمز PIN ومفتاح وضع Mature.',
          '**استهلاك البطارية.** تقول الأسئلة الشائعة إن الردود تستهلك الطاقة كما تفعل لعبة وإن شيئًا لا يعمل في الخلفية.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**يقول المطوّر إن المحادثات والشخصيات المخصصة والصور الرمزية والذكريات تبقى على iPhone وإن الشركة لا تتلقاها ولا تراها ولا تخزّنها أبدًا.** وتذكر السياسة تنزيلًا بعيدًا واحدًا: ملف النموذج لمرة واحدة، المستضاف على Cloudflare R2.',
          'تقول بطاقة App Store "بيانات غير مرتبطة بك"، وهذا يتوافق مع [سياسة الخصوصية](https://get-castmates.com/privacy) المحدّثة في 10 أكتوبر 2026 التي تذكر أن أحداث استخدام مجهولة تُرسل إلى Mixpanel (فتح التطبيق وتقدم الإعداد الأولي ومشاهدات شاشة الدفع وعدد الرسائل، مرتبطة بمعرّف عشوائي على الجهاز مع تعطيل تحديد الموقع عبر IP) وأن RevenueCat يدير حالة الاشتراك عبر معرّف مستخدم مجهول للتطبيق. وتقول السياسة إن هذه الأحداث لا تحتوي على محتوى الرسائل ولا على ما يحدد هويتك، ولا تذكر مدة احتفاظ Mixpanel بها. وتتم عمليات الشراء عبر Apple.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، لذا لا يمكن التحقق من هذه الادعاءات في الشفرة، ولم تدقّق PromptQuorum حركة الشبكة. على من يتعامل مع بيانات سرية أن يتحقق من السلوك على جهازه.',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: 'التصنيف العمري وضوابط المحتوى',
        content: [
          '**يصنّف App Store تطبيق Castmates 18+ ويشير إلى محتوى جنسي أو عري متكرر وموضوعات إيحائية؛ وتصفه صفحة المحتوى لدى المطوّر بأنه مناسب للجميع افتراضيًا.** التفاصيل أدناه مأخوذة من تلك الصفحة، ولم تختبر PromptQuorum مدى فعالية الضوابط.',
        ],
        items: [
          '**الوضع الافتراضي.** تظهر الرومانسية والموضوعات الناضجة، لكن حاجزًا على الجهاز يُخفت المشاهد الحميمة؛ وتقول الصفحة "Castmates is not a pornography app".',
          '**وضع Mature.** اختياري وللبالغين: يتطلب خطة Pro نشطة، وتحققًا لمرة واحدة من تاريخ الميلاد (تُرفض الإدخالات لأقل من 18)، ورمز PIN إن وُجد، وذاكرة كافية على الجهاز للنموذج الناضج.',
          '**قفل المحتوى برمز PIN.** يمكن لولي الأمر ضبط PIN في الإعدادات؛ ويُخزَّن فقط على شكل تجزئة مملّحة.',
          '**محظور دائمًا.** يحجب مرشّح على الجهاز لرسائل الدردشة والشخصيات المنشأة أي تصوير جنسي للقاصرين وغيره من المحتوى غير القانوني بوضوح في كل الأوضاع.',
          '**الإبلاغ.** لكل رسالة من الذكاء الاصطناعي ولكل شخصية إجراء إبلاغ.',
          '**خيال فقط.** الشخصيات خيالية وليست مصدرًا لنصيحة طبية أو قانونية أو نفسية، بما في ذلك شخصيات المدرّب أو المرشد.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**البالغون الذين يريدون لعب أدوار مع شخصيات دون إنشاء حساب.** تغطي الفئة المجانية الشخصيات القياسية.',
          '**من يفضّلون إبقاء الدردشات على الهاتف.** يقول المطوّر إن شيئًا لا يُرفع، مع التحفظات الواردة في قسم الخصوصية.',
          '**الكتّاب الهواة الذين يريدون شخصياتهم الخاصة.** للشخصيات المخصصة حقول للشخصية والنبرة والسيناريو الافتتاحي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة عمليًا.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم جودة الردود ولا السرعة ولا استهلاك البطارية ولا القوة الفعلية لمرشّح المحتوى.',
          '**الشفرة المصدرية والترخيص.** التطبيق مغلق المصدر ولم يُعثر على مستودع عام.',
          '**الحركة على الشبكة.** لم تدقّق PromptQuorum حركة الشبكة، لذا فالتحليلات الواردة في السياسة غير موثّقة بشكل مستقل.',
          '**بيانات الشركة.** لا يعرض الموقع سوى "© 2026 Castmates" وبريد دعم مخفي؛ ولا تذكر سياسة الخصوصية كيانًا قانونيًا.',
          '**السجل.** عمر التطبيق نحو ثلاثة أشهر ولا تقدّم المصادر أي التزام بالدعم.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          { 'التطبيق': '[SillyTavern](/ar/local-llms/sillytavern-review)', 'المنصات': 'Windows وmacOS وLinux وويب', 'السعر / الترخيص': 'مجاني / AGPL 3.0', 'الفرق الرئيسي': 'واجهة لعب أدوار مفتوحة المصدر تتصل بخلفيات نماذج تشغّلها بنفسك' },
          { 'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)', 'المنصات': 'iOS وAndroid', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون إنترنت مع أسئلة عن المستندات، وليست موجهة للعب الأدوار' },
          { 'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)', 'المنصات': 'iOS وAndroid', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الرئيسي': 'عميل مفتوح المصدر على الجهاز تختار فيه نماذجك' },
          { 'التطبيق': '[MemoryAI](/ar/power-local-llm/memoryai-review)', 'المنصات': 'iOS وAndroid', 'السعر / الترخيص': 'مجاني / مغلق المصدر', 'الفرق الرئيسي': 'دردشة دون إنترنت بذاكرة قابلة للتعديل ووضع أطفال محمي برمز PIN' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل في Castmates دردشة صوتية؟',
            a: 'لا يذكر الموقع ولا وصف App Store أي ميزات صوتية؛ ويُقدَّم Castmates كدردشة نصية بأفعال ووصف للمشاهد.',
          },
          {
            q: 'هل يعمل دون اتصال بالإنترنت؟',
            a: 'بحسب المطوّر، نعم بعد تثبيت النموذج. أما تنزيل النموذج وعمليات الشراء والإحصاءات المجهولة الواردة في سياسة الخصوصية فتستخدم الشبكة.',
          },
          {
            q: 'هل يمكنني استخدامه على iPad أو هاتف Android؟',
            a: 'تتيح الصفحة iPhone وiPad بالإصدار 17.0 أو أحدث؛ ولا يذكر أي مصدر إصدارًا لـ Android.',
          },
          {
            q: 'هل تُستخدم دردشتي لتدريب نموذج؟',
            a: 'تقول سياسة الخصوصية إن الشركة لا تتلقى المحادثات ولا تراها ولا تخزّنها أبدًا، وتقابل ذلك بتطبيقات الذكاء الاصطناعي السحابية التي تسجّل الدردشات. لم تتحقق PromptQuorum من ذلك.',
          },
          {
            q: 'هل يمكنني حذف النموذج؟',
            a: 'نعم، يقول الموقع إن ملف النموذج يمكن حذفه لتوفير المساحة؛ ويُنزَّل من جديد عندما تريد الدردشة.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من صانع التطبيق',
        content: [
          'شارك Josip Markovic، مطوّر Castmates، ما يلي عن التطبيق وأسباب بنائه. يُعرض هنا بوصفه كلمات المطوّر نفسه بعد تحرير طفيف لتسهيل القراءة، وليس تقييمًا تحريريًا مستقلًا من PromptQuorum:',
          '"بنيت Castmates لأن كل تطبيق شخصيات جربته كان يطلب حسابًا ويرسل كل رسالة إلى خادم. بدا لي نموذج بحجم 3B على الهاتف أصغر من أن يروي قصصًا حقيقية، لذلك ذهب معظم العمل إلى جعله يحافظ على المشهد: ملخصات للجلسات كي تتذكرك الشخصيات، وضوابط تلتقط اللحظة التي يخرج فيها النموذج عن الشخصية، وكثير من جولات التقييم على جهاز Mac قبل إطلاق أي شيء. الخطوة التالية هي تنزيل أول أسرع وشخصيات موسمية، بدءًا بثلاث شخصيات لعيد الهالوين."',
        ],
        note: '— Josip Markovic، مطوّر',
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Castmates تطبيق iPhone مجاني للعب الأدوار يقول مطوّره إنه يشغّل دردشة الشخصيات على الجهاز، مع 32 شخصية جاهزة وشخصيات مخصصة وذاكرة جلسات وضوابط عمرية لوضع Mature الاختياري. وهو يُحدَّث بنشاط، مع إصدار في اليوم الذي جرى فيه التحقق من هذه المراجعة. في المقابل هو مغلق المصدر، وعمره نحو ثلاثة أشهر، وقيّمه قلة من المستخدمين، وبالإنجليزية فقط، ويتطلب iPhone بذاكرة 6 GB أو أكثر. يناسب البالغين الذين يريدون دردشة شخصيات دون حساب ويقبلون تطبيقًا حديثًا ومغلقًا؛ ومن يريد شفرة مفتوحة ونماذجه الخاصة يمكنه مقارنة [SillyTavern](/ar/local-llms/sillytavern-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Castmates على App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — السعر وسجل الإصدارات والمتطلبات والتصنيف العمري وبطاقة الخصوصية، جرى التحقق منها في 19 أكتوبر 2026.',
          '[موقع Castmates](https://get-castmates.com) — الميزات والأسعار وادعاءات التشغيل على الجهاز والأسئلة الشائعة، جرى التحقق منها في 19 أكتوبر 2026.',
          '[سياسة خصوصية Castmates](https://get-castmates.com/privacy) — معالجة البيانات والتحليلات واستضافة النموذج، محدّثة في 10 أكتوبر 2026.',
          '[صفحة المحتوى والأمان في Castmates](https://get-castmates.com/age-suitability) — التحقق من العمر ووضع Mature ومرشّح المحتوى.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة SillyTavern](/ar/local-llms/sillytavern-review) — واجهة لعب الأدوار مفتوحة المصدر.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون إنترنت بترخيص MIT لـ iPhone وAndroid.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامي iOS وAndroid.',
          '[مراجعة MemoryAI](/ar/power-local-llm/memoryai-review) — تطبيق دردشة مجاني دون إنترنت بذاكرة قابلة للتعديل.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — النظرة الأوسع على iPhone.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-zh.webp',
    title: 'Castmates 评测：iPhone 离线 AI 角色聊天',
    seoTitle: 'Castmates 评测：iPhone 离线 AI 角色聊天应用',
    intro:
      'Castmates: AI Characters 是一款面向角色扮演和角色聊天的 iPhone 应用，在 App Store 中以卖家名称 Josip Markovic 上架，据其隐私政策，由位于克罗地亚的开发者开发并运营。它于 2026 年 7 月 6 日首次发布。本评测基于 2026 年 10 月 19 日核对的 App Store 页面、官网和隐私政策。',
    metaDescription:
      'Castmates 评测：免费离线 iPhone 应用，内置 32 个 AI 角色，可自建角色，无需账号。价格、隐私以及来源未能证实的内容。',
    twitterDescription:
      'Castmates 评测：一款免费、闭源的 iPhone 应用，称一次性下载模型后即在手机上运行 AI 角色聊天。依据商店页面和政策的价格、隐私与年龄控制。',
    audience:
      '想用离线 AI 角色扮演应用的成年 iPhone 用户，需要了解它的价格、哪些数据会离开手机，以及来源未能证实的内容。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Castmates 评测',
    targetKeywords: [
      'castmates 应用评测',
      'iphone 离线 ai 角色聊天',
      '本地 ai 角色扮演应用',
      '无需账号 ai 陪伴应用',
      'castmates 隐私',
      'ios 离线角色扮演聊天',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**Castmates（截至 2026 年 10 月 19 日为 1.1.7 版）是一款免费 iPhone 应用，据其商店页面，一次性下载约 1.9 GB 的模型后，角色聊天 AI 在手机上运行，内置 32 个现成角色，无需账号。** 应用内的 Pro 方案取消每日消息上限，并解锁仅限成年人的可选 Mature 模式。该应用闭源；开发者称所用模型为 Impish Llama 3B（基于 Llama 3，Q4_K_M 量化），通过 llama.cpp 运行，因此“在设备上运行”的说法仍来自开发者自述。',
    quickAnswerTop: {
      zh: {
        question: 'Castmates 真的能离线且免费使用吗？',
        answer:
          '据商店页面和官网，应用可免费下载，模型安装后，聊天内容在手机上生成，无需联网。免费版有额度限制，Pro 可取消限制。隐私政策称，匿名使用统计仍会离开手机。',
        bullets: [
          '在 [App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) 免费提供，支持 iPhone 和 iPad，需 iOS 17.0 或更高版本。',
          '手写的 32 个角色，分属 8 个类型，另可自建角色。',
          '会话摘要让角色在多次聊天之间记住你。',
          '仅支持英语；未提及 Android 或桌面版本。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Castmates 是什么？', anchor: 'what-is-castmates' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '价格', anchor: 'pricing' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源确认的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '年龄分级与内容控制', anchor: 'content-safety' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '来自开发者', anchor: 'from-the-maker' },
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
            text: 'Castmates 是一款闭源的 iPhone 应用，用于与 AI 角色进行角色扮演，开发者称模型在手机上运行，无需账号，免费版有额度限制。',
          },
          {
            type: 'plain-terms',
            text: '安装后一次性下载模型，就能和现成或自建的角色聊天；开发者称对话在手机上生成并保存。',
          },
        ],
        items: [
          '开发者：App Store 上的单一卖家，官网未列出公司名称，也没有公开源代码。',
          '维护情况：版本历史显示 2026 年 7 月 6 日至 10 月 19 日共 11 次发布，因此不适用“项目停更”警告。',
          '覆盖面：App Store 显示 5 条评分、平均 4.2，公开的使用记录很少。',
          '平台：iPhone 和 iPad，需 iOS 或 iPadOS 17.0 及以上，仅支持英语。',
          '年龄：商店页面标注 18+，Mature 模式需要 Pro 并通过出生日期验证。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 19 日核对的 App Store 页面、开发者官网及其隐私和内容页面。PromptQuorum 没有安装、测试或评测该应用。',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: 'Castmates 是什么？',
        content: [
          '**Castmates 是一款角色扮演应用，你可以与虚构角色聊天，每个角色都有背景故事、开场白和三个场景。** 官网列出 32 个手写角色，分属八个类型（陪伴、浪漫、奇幻、科幻、动漫、历史、悬疑与恐怖、冒险），场景共 96 个，并称角色会用动作和场景描写来回应，而不是只回一两句话。你也可以通过名称、标语、人设、问候语、外貌、语气、标签和开场场景来创建角色，并选择友谊、浪漫、导师、对手或冒险等风格。',
          'App Store 副标题为“Private, offline story chat”，应用名称取自其角色阵容“castmates”。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Castmates 通过 App Store 安装，不提供 Android 版、桌面版或源代码。** 下面的链接就是商店页面和开发者官网所用的链接。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': 'iPhone 和 iPad', '获取方式': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694)（iOS 或 iPadOS 17.0 及以上，35.6 MB）' },
          { '平台': '官网', '获取方式': '[get-castmates.com](https://get-castmates.com)' },
          { '平台': '隐私政策', '获取方式': '[get-castmates.com/privacy](https://get-castmates.com/privacy)（2026 年 10 月 10 日更新）' },
          { '平台': '内容与安全', '获取方式': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { '平台': '服务条款', '获取方式': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: '评测版本：1.1.7，App Store 页面显示发布于 2026 年 10 月 19 日。开发者称需要 6 GB 或以上内存的 iPhone；内存为 4 GB 或更少的手机只会看到说明，而不会开始模型下载，因此安装前请先确认你的 iPhone。模型为 Impish Llama 3B（基于 Llama 3，Q4_K_M，约 1.9 GB），通过 llama.cpp 运行，上下文为 4,096 个 token。',
      },
      pricing: {
        id: 'pricing',
        title: '价格',
        content: [
          '**Castmates 可免费下载，Pro 以月度或年度订阅，或一次性买断的方式销售。** 以下为 2026 年 10 月 19 日美国 App Store 的价格，各地区商店价格不同。订阅会持续续费，直到你在 App Store 中取消。',
        ],
        columns: ['方案', '包含内容', '美国商店价格'],
        rows: [
          { '方案': '免费', '包含内容': '每天 30 条消息，1 个自建角色', '美国商店价格': '$0' },
          { '方案': 'Pro 月度', '包含内容': '消息和角色不限，含 Mature 模式', '美国商店价格': '$6.99/月' },
          { '方案': 'Pro 年度', '包含内容': '同月度', '美国商店价格': '$29.99/年' },
          { '方案': 'Pro 买断', '包含内容': '同月度，一次性购买', '美国商店价格': '$44.99' },
        ],
        note: '德国、西班牙和法国的商店显示 €7.99、€34.99 和 €49.99，日本商店显示 ¥1,100、¥5,000 和 ¥7,000，巴西商店显示 R$ 49,90、R$ 199,90 和 R$ 299,90。免费版包含全部标准角色，且无需账号。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**设置顺序遵循官网和商店页面的描述；PromptQuorum 没有执行过这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从 App Store 下载 Castmates；官网称无需注册、邮箱或个人资料。',
          },
          {
            title: '用 Wi-Fi 下载模型',
            whyItMatters: '首次运行会获取一个约 1.9 GB 的一次性模型文件，之后可以删除以释放空间。此后，据开发者称，应用无需联网即可运行。',
          },
          {
            title: '选择或创建角色',
            whyItMatters: '选择一个现成角色和场景，或自己创建；免费版允许一个自建角色。',
          },
          {
            title: '按需解锁 Pro',
            whyItMatters: 'Pro 取消每日限制，也是 Mature 模式的前提；Mature 模式使用同一个模型，无需额外下载。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: [
          '**以下每一项都来自 App Store 页面、官网或隐私政策。**',
        ],
        items: [
          '**会话记忆。** 应用会总结过往会话，让角色记住你；隐私政策称记忆保存在手机上，删除某次对话的记忆即可清除。',
          '**回到聊天。** 1.1.7 的更新说明新增了“Previously”回顾，以及角色首次回复后可点按的建议按钮。',
          '**自定义头像。** 自建角色可以使用照片库中的图片作为头像。',
          '**模型管理。** 设置包括设备上的模型管理、PIN 内容锁和 Mature 模式开关。',
          '**耗电。** 常见问题称，回复时的耗电与玩游戏相当，后台不运行任何内容。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**开发者称，对话、自建角色、头像和记忆都留在 iPhone 上，公司从不接收、查看或存储它们。** 政策提到一项远程下载：一次性模型文件，托管在 Cloudflare R2 上。',
          'App Store 标签写的是“未关联到你的数据”，与 2026 年 10 月 10 日更新的[隐私政策](https://get-castmates.com/privacy)一致。该政策称，匿名使用事件会发送到 Mixpanel（应用打开、引导进度、付费墙查看和消息数量，关联到设备上的随机标识符，已关闭基于 IP 的定位），并称 RevenueCat 通过匿名化的应用用户 ID 管理订阅状态。政策称这些事件不含消息内容，也不含可识别你的信息，但没有说明 Mixpanel 保留多久。购买通过 Apple 完成。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用闭源，因此这些说法无法在代码中核实，PromptQuorum 也没有审计网络流量。处理机密数据的用户应在自己的设备上验证其行为。',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: '年龄分级与内容控制',
        content: [
          '**App Store 将 Castmates 标为 18+，并列出频繁出现的性内容或裸露以及暗示性主题；开发者的内容页面称其默认适合所有人（SFW）。** 以下细节来自该页面，PromptQuorum 没有测试这些控制的实际效果。',
        ],
        items: [
          '**默认模式。** 会出现浪漫和成熟主题，但设备上的防护会将亲密场景淡出；页面写明“Castmates is not a pornography app”。',
          '**Mature 模式。** 可选，仅限成年人：需要有效的 Pro 订阅、一次性的出生日期验证（未满 18 岁的输入会被拒绝）、已设置时的 PIN，以及足够运行 Mature 模型的设备内存。',
          '**PIN 内容锁。** 家长或监护人可在设置中设置 PIN；它仅以加盐哈希形式存储。',
          '**始终拦截。** 设备上针对聊天消息和自建角色的过滤器，会在所有模式下拦截任何涉及未成年人的性化内容及其他明显违法的内容。',
          '**举报。** 每条 AI 消息和每个角色都有“举报”操作。',
          '**仅为虚构。** 角色是虚构的，不能作为医疗、法律或心理建议的来源，教练或导师类人设也不例外。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**想在不创建账号的情况下进行角色扮演的成年人。** 免费版涵盖标准角色。',
          '**希望聊天内容留在手机上的人。** 开发者称不会上传任何内容，但需注意隐私部分的说明。',
          '**想创作自己角色的业余写作者。** 自建角色有人设、语气和开场场景字段。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际使用表现。** PromptQuorum 没有运行该应用，因此没有评估回复质量、速度、耗电以及内容过滤器的实际强度。',
          '**源代码与许可证。** 该应用闭源，也没有找到公开仓库。',
          '**流量。** PromptQuorum 没有审计网络流量，因此政策中所述的分析未经独立核实。',
          '**公司信息。** 官网只显示“© 2026 Castmates”和一个隐藏的支持邮箱；隐私政策也没有给出法律实体。',
          '**使用记录。** 该应用上架约三个月，来源没有给出任何支持承诺。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[SillyTavern](/zh/local-llms/sillytavern-review)', '平台': 'Windows、macOS、Linux、网页', '价格 / 许可证': '免费 / AGPL 3.0', '主要区别': '开源角色扮演前端，连接你自己运行的模型后端' },
          { '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / MIT', '主要区别': '开源离线聊天，带文档问答，并非专注角色扮演' },
          { '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / MIT', '主要区别': '开源的本地客户端，可自选模型' },
          { '应用': '[MemoryAI](/zh/power-local-llm/memoryai-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / 闭源', '主要区别': '带可编辑记忆和 PIN 锁儿童模式的离线聊天' },
        ],
        note: '竞品信息变化很快；请在各应用自己的商店页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Castmates 有语音聊天吗？',
            a: '官网和 App Store 描述都没有提到语音功能；Castmates 被描述为带有动作和场景描写的文字聊天。',
          },
          {
            q: '没有网络也能用吗？',
            a: '据开发者称，模型安装后可以。模型下载、购买以及隐私政策所述的匿名使用统计都会用到网络。',
          },
          {
            q: '能在 iPad 或 Android 手机上用吗？',
            a: '商店页面支持 17.0 及以上版本的 iPhone 和 iPad；没有来源提到 Android 版本。',
          },
          {
            q: '我的聊天会被用来训练模型吗？',
            a: '隐私政策称公司从不接收、查看或存储对话，并以此对比会记录聊天的云端 AI 应用。PromptQuorum 没有核实这一点。',
          },
          {
            q: '可以删除模型吗？',
            a: '可以，官网称模型文件可删除以释放空间；想聊天时会重新下载。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '来自开发者',
        content: [
          'Castmates 的开发者 Josip Markovic 分享了以下关于这款应用及其开发原因的内容。以下内容以开发者本人的话呈现，为便于阅读略作编辑，并非 PromptQuorum 独立的编辑评估：',
          '“我做 Castmates，是因为我试过的每一款角色应用都要求注册账号，并把每条消息发送到服务器。手机上的 3B 模型听起来对真正的故事来说太小了，所以大部分工作都花在让它撑住一个场景上：让角色记住你的会话摘要、发现模型出戏时的防护机制，以及在任何版本发布前在 Mac 上进行的大量评测运行。接下来是更快的首次下载和季节性角色，先从三个万圣节角色开始。”',
        ],
        note: '— Josip Markovic，开发者',
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Castmates 是一款免费的 iPhone 角色扮演应用，据开发者称，其角色聊天在设备上运行，内置 32 个现成角色，支持自建角色、会话记忆，并为可选的 Mature 模式提供年龄控制。它还在积极更新，本评测核对当天就有一次发布。但另一方面，它闭源、上架约三个月、评分的用户很少、仅支持英语，并且需要 6 GB 或以上内存的 iPhone。它适合想要无账号角色聊天、并能接受一款较新且封闭应用的成年人；想要开放代码和自选模型的读者，可以对比 [SillyTavern](/zh/local-llms/sillytavern-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 Castmates](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — 价格、版本历史、系统要求、年龄分级和隐私标签，2026 年 10 月 19 日核对。',
          '[Castmates 官网](https://get-castmates.com) — 功能、价格、设备上运行的说法和常见问题，2026 年 10 月 19 日核对。',
          '[Castmates 隐私政策](https://get-castmates.com/privacy) — 数据处理、分析和模型托管，2026 年 10 月 10 日更新。',
          '[Castmates 内容与安全页面](https://get-castmates.com/age-suitability) — 年龄验证、Mature 模式和内容过滤器。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[SillyTavern 评测](/zh/local-llms/sillytavern-review) — 开源角色扮演前端。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费 MIT 许可离线聊天应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源本地聊天客户端。',
          '[MemoryAI 评测](/zh/power-local-llm/memoryai-review) — 带可编辑记忆的免费离线聊天应用。',
          '[2026 年 iPhone 本地大模型应用推荐](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更广泛的 iPhone 应用盘点。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/castmates-review-hero-ko.webp',
    title: 'Castmates 리뷰: iPhone용 오프라인 AI 캐릭터 채팅',
    seoTitle: 'Castmates 리뷰: 오프라인 AI 캐릭터 채팅 앱',
    intro:
      'Castmates: AI Characters는 롤플레이와 캐릭터 채팅을 위한 iPhone 앱으로, App Store에는 판매자명 Josip Markovic으로 등록되어 있으며 개인정보 처리방침에 따르면 크로아티아에서 개발·운영됩니다. 2026년 7월 6일에 처음 출시되었습니다. 이 리뷰는 2026년 10월 19일에 확인한 App Store 페이지, 웹사이트, 개인정보 처리방침을 반영합니다.',
    metaDescription:
      'Castmates 리뷰: AI 캐릭터 32종과 커스텀 캐릭터를 제공하며 계정이 필요 없는 무료 오프라인 iPhone 앱. 가격, 개인정보, 미확인 사항.',
    twitterDescription:
      'Castmates 리뷰: 모델을 한 번 내려받은 뒤 기기에서 AI 캐릭터 채팅을 실행한다고 밝히는 무료 비공개 소스 iPhone 앱. 페이지와 방침에 근거한 가격, 개인정보, 연령 제어.',
    audience:
      '오프라인 AI 롤플레이 앱을 찾는 성인 iPhone 사용자로서, 비용과 기기 밖으로 나가는 데이터, 출처가 확인하지 못한 내용을 알아야 하는 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Castmates 리뷰',
    targetKeywords: [
      'castmates 앱 리뷰',
      '오프라인 ai 캐릭터 채팅 iphone',
      '온디바이스 ai 롤플레이 앱',
      '계정 없는 ai 컴패니언 앱',
      'castmates 개인정보',
      '오프라인 롤플레이 채팅 ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**Castmates(2026년 10월 19일 기준 버전 1.1.7)는 페이지에 따르면 약 1.9 GB 모델을 한 번 내려받은 뒤 기기에서 캐릭터 채팅 AI를 실행하는 무료 iPhone 앱으로, 기본 캐릭터 32종을 제공하며 계정이 필요 없습니다.** 앱 내 Pro 플랜은 일일 메시지 한도를 없애고 성인 전용 선택 기능인 Mature 모드를 활성화합니다. 이 앱은 비공개 소스이며, 개발자는 모델이 Impish Llama 3B(Llama 3 기반, Q4_K_M 양자화)이고 llama.cpp로 실행된다고 밝혔으므로, 기기에서 실행된다는 주장은 여전히 개발자의 설명에 의존합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Castmates는 정말 오프라인에서 무료로 쓸 수 있습니까?',
        answer:
          '페이지와 웹사이트에 따르면 앱은 무료로 내려받을 수 있으며, 모델을 설치한 뒤에는 연결 없이 기기에서 채팅이 생성됩니다. 무료 단계에는 한도가 있고 Pro가 이를 해제합니다. 개인정보 처리방침에 따르면 익명 사용 통계는 여전히 기기 밖으로 전송됩니다.',
        bullets: [
          '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694)에서 iPhone과 iPad용으로 무료 제공되며 iOS 17.0 이상이 필요합니다.',
          '직접 쓴 캐릭터 32종(8개 장르)과 직접 만드는 캐릭터.',
          '세션 요약 덕분에 캐릭터가 채팅 사이에도 사용자를 기억합니다.',
          '영어만 지원하며 Android나 데스크톱 버전은 언급되지 않습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Castmates란?', anchor: 'what-is-castmates' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '가격', anchor: 'pricing' },
      { label: '시작하기', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
      { label: '연령 등급과 콘텐츠 제어', anchor: 'content-safety' },
      { label: '추천 대상', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '개발자의 말', anchor: 'from-the-maker' },
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
            text: 'Castmates는 AI 캐릭터와 롤플레이하는 비공개 소스 iPhone 앱으로, 개발자는 모델이 기기에서 실행되며 계정이 필요 없고 무료 단계에는 한도가 있다고 밝힙니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 모델을 한 번 내려받으면 기본 캐릭터나 직접 만든 캐릭터와 채팅할 수 있으며, 개발자는 대화가 기기에서 생성·저장된다고 설명합니다.',
          },
        ],
        items: [
          '개발자: App Store의 단일 판매자이며 웹사이트에 회사명이 없고 공개 소스 코드도 없습니다.',
          '유지보수: 버전 기록에 2026년 7월 6일부터 10월 19일까지 11번의 릴리스가 있어 방치 프로젝트 경고는 해당하지 않습니다.',
          '이용 실적: App Store 평점은 5건에 평균 4.2로, 공개된 이용 실적이 거의 없습니다.',
          '플랫폼: iOS 또는 iPadOS 17.0 이상의 iPhone과 iPad, 영어만 지원.',
          '연령: 페이지는 18+로 분류하며 Mature 모드는 Pro와 생년월일 확인이 필요합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 19일에 확인한 App Store 페이지, 개발자 웹사이트와 개인정보·콘텐츠 페이지에 근거합니다. PromptQuorum은 앱을 설치하거나 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-castmates',
        title: 'Castmates란?',
        content: [
          '**Castmates는 배경 이야기, 첫 대사, 세 가지 시나리오를 가진 가상의 캐릭터와 채팅하는 롤플레이 앱입니다.** 웹사이트에는 직접 쓴 캐릭터 32종이 여덟 개 장르(컴패니언, 로맨스, 판타지, SF, 애니메, 역사, 미스터리·호러, 모험)로 나뉘어 있고 시나리오는 총 96개이며, 캐릭터는 한 줄 답변이 아니라 행동과 장면 묘사를 곁들여 답한다고 나와 있습니다. 이름, 한 줄 소개, 페르소나, 인사말, 외모, 말투, 태그, 첫 시나리오를 정해 직접 캐릭터를 만들고 우정, 로맨스, 멘토링, 라이벌, 모험 같은 스타일을 고를 수도 있습니다.',
          'App Store 부제는 "Private, offline story chat"이며, 앱 이름은 캐릭터 출연진을 뜻하는 "castmates"에서 따왔습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**Castmates는 App Store에서 설치하며 Android 빌드, 데스크톱 빌드, 소스 코드는 제공되지 않습니다.** 아래 링크는 페이지와 개발자 사이트가 사용하는 것입니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          { '플랫폼': 'iPhone·iPad', '받는 곳': '[App Store](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) (iOS 또는 iPadOS 17.0 이상, 35.6 MB)' },
          { '플랫폼': '웹사이트', '받는 곳': '[get-castmates.com](https://get-castmates.com)' },
          { '플랫폼': '개인정보 처리방침', '받는 곳': '[get-castmates.com/privacy](https://get-castmates.com/privacy) (2026년 10월 10일 업데이트)' },
          { '플랫폼': '콘텐츠와 안전', '받는 곳': '[get-castmates.com/age-suitability](https://get-castmates.com/age-suitability)' },
          { '플랫폼': '이용약관', '받는 곳': '[get-castmates.com/terms](https://get-castmates.com/terms)' },
        ],
        note: '확인한 버전: 1.1.7로, App Store 페이지에 따르면 2026년 10월 19일에 출시되었습니다. 개발자에 따르면 RAM 6 GB 이상의 iPhone이 필요하며, 4 GB 이하 기기에는 모델 다운로드 대신 안내가 표시되므로 설치 전에 iPhone을 확인하십시오. 모델은 Impish Llama 3B(Llama 3 기반, Q4_K_M, 약 1.9 GB)이며 llama.cpp로 4,096토큰 컨텍스트에서 실행됩니다.',
      },
      pricing: {
        id: 'pricing',
        title: '가격',
        content: [
          '**Castmates는 무료로 내려받을 수 있으며 Pro는 월간·연간 구독 또는 한 번 결제하는 평생 구매로 판매됩니다.** 아래 가격은 2026년 10월 19일 기준 미국 App Store 가격이며 스토어마다 다릅니다. 구독은 App Store에서 해지할 때까지 갱신됩니다.',
        ],
        columns: ['플랜', '포함 내용', '가격(미국 스토어)'],
        rows: [
          { '플랜': '무료', '포함 내용': '하루 30개 메시지, 커스텀 캐릭터 1개', '가격(미국 스토어)': '$0' },
          { '플랜': 'Pro 월간', '포함 내용': '메시지·캐릭터 무제한, Mature 모드', '가격(미국 스토어)': '$6.99/월' },
          { '플랜': 'Pro 연간', '포함 내용': '월간과 동일', '가격(미국 스토어)': '$29.99/년' },
          { '플랜': 'Pro 평생', '포함 내용': '월간과 동일, 한 번 구매', '가격(미국 스토어)': '$44.99' },
        ],
        note: '독일, 스페인, 프랑스 스토어는 €7.99, €34.99, €49.99를, 일본 스토어는 ¥1,100, ¥5,000, ¥7,000을, 브라질 스토어는 R$ 49,90, R$ 199,90, R$ 299,90을 표시합니다. 한국 스토어 가격은 확인하지 못했습니다. 무료 단계에는 모든 기본 캐릭터가 포함되며 계정이 필요 없습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하기',
        content: [
          '**설정 순서는 웹사이트와 페이지에 설명된 순서를 따릅니다. PromptQuorum은 이 단계를 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'App Store에서 Castmates를 내려받습니다. 웹사이트에 따르면 가입, 이메일, 프로필이 필요 없습니다.',
          },
          {
            title: 'Wi-Fi로 모델 내려받기',
            whyItMatters: '첫 실행 때 약 1.9 GB의 일회성 모델 파일을 가져오며, 나중에 삭제해 저장 공간을 확보할 수 있습니다. 이후에는 개발자에 따르면 연결 없이 작동합니다.',
          },
          {
            title: '캐릭터 선택 또는 만들기',
            whyItMatters: '기본 캐릭터와 시나리오를 고르거나 직접 만듭니다. 무료 단계에서는 커스텀 캐릭터를 하나 만들 수 있습니다.',
          },
          {
            title: '필요하면 Pro 활성화',
            whyItMatters: 'Pro는 일일 한도를 없애며 Mature 모드에 필요합니다. Mature 모드는 같은 모델을 사용하므로 추가 다운로드가 필요 없습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 App Store 페이지, 웹사이트 또는 개인정보 처리방침에서 나온 것입니다.**',
        ],
        items: [
          '**세션 메모리.** 앱이 지난 세션을 요약해 캐릭터가 사용자를 기억하게 합니다. 개인정보 처리방침에 따르면 기억은 기기에 저장되며 대화의 메모리를 삭제해 지울 수 있습니다.',
          '**채팅으로 돌아오기.** 1.1.7 릴리스 노트에서 "Previously" 요약과 캐릭터의 첫 응답 뒤에 탭할 수 있는 추천 칩이 추가되었습니다.',
          '**커스텀 아바타.** 커스텀 캐릭터는 사진 보관함의 이미지를 아바타로 쓸 수 있습니다.',
          '**모델 제어.** 설정에는 기기 내 모델 관리, PIN 콘텐츠 잠금, Mature 모드 스위치가 있습니다.',
          '**배터리 사용.** FAQ에 따르면 응답은 게임과 비슷한 전력을 쓰며 백그라운드에서는 아무것도 실행되지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**개발자는 대화, 커스텀 캐릭터, 아바타, 메모리가 iPhone에 머물며 회사가 이를 받거나 보거나 저장하지 않는다고 밝힙니다.** 방침은 Cloudflare R2에 호스팅된 일회성 모델 파일을 원격 다운로드로 언급합니다.',
          'App Store 라벨은 "사용자에게 연결되지 않은 데이터"로, 2026년 10월 10일에 업데이트된 [개인정보 처리방침](https://get-castmates.com/privacy)과 일치합니다. 이 방침은 익명 사용 이벤트가 Mixpanel로 전송되며(앱 열기, 온보딩 진행, 결제 화면 조회, 메시지 수. 기기의 임의 식별자에 연결되고 IP 기반 위치는 비활성화) RevenueCat이 익명화된 앱 사용자 ID로 구독 상태를 관리한다고 설명합니다. 방침은 이 이벤트에 메시지 내용이나 사용자를 식별하는 정보가 없다고 하며, Mixpanel이 이를 얼마나 보관하는지는 밝히지 않습니다. 결제는 Apple을 통해 이루어집니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 비공개 소스이므로 위 주장을 코드로 확인할 수 없고, PromptQuorum은 네트워크 트래픽을 감사하지 않았습니다. 기밀 데이터를 다루는 경우 본인의 기기에서 동작을 직접 확인하십시오.',
          },
        ],
      },
      contentSafety: {
        id: 'content-safety',
        title: '연령 등급과 콘텐츠 제어',
        content: [
          '**App Store는 Castmates를 18+로 분류하며 빈번한 성적 콘텐츠 또는 노출과 암시적인 주제를 표시합니다. 개발자의 콘텐츠 페이지는 기본값을 전체 이용가(SFW)로 설명합니다.** 아래 세부 내용은 그 페이지에 근거하며, PromptQuorum은 제어 기능이 얼마나 잘 작동하는지 테스트하지 않았습니다.',
        ],
        items: [
          '**기본 모드.** 로맨스와 성숙한 주제가 등장하지만 기기 내 보호 장치가 은밀한 장면을 페이드아웃합니다. 페이지에는 "Castmates is not a pornography app"이라고 적혀 있습니다.',
          '**Mature 모드.** 선택 사항이며 성인용입니다. 활성 Pro 플랜, 일회성 생년월일 확인(18세 미만 입력은 거부), 설정된 경우 PIN, Mature 모델을 실행할 만큼의 기기 메모리가 필요합니다.',
          '**PIN 콘텐츠 잠금.** 보호자는 설정에서 PIN을 지정할 수 있으며, PIN은 솔트가 적용된 해시로만 저장됩니다.',
          '**항상 차단.** 채팅 메시지와 만든 캐릭터에 적용되는 기기 내 필터는 모든 모드에서 미성년자를 성적으로 묘사하는 내용과 명백히 불법적인 그 밖의 콘텐츠를 차단합니다.',
          '**신고.** 모든 AI 메시지와 캐릭터에는 신고 동작이 있습니다.',
          '**픽션 전용.** 캐릭터는 가상의 존재이며 코치나 멘토 페르소나를 포함해 의료·법률·심리 조언의 출처가 아닙니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '추천 대상',
        items: [
          '**계정을 만들지 않고 캐릭터 롤플레이를 원하는 성인.** 무료 단계에서 기본 캐릭터를 이용할 수 있습니다.',
          '**채팅을 기기에 두고 싶은 사람.** 개발자는 아무것도 업로드되지 않는다고 하지만 개인정보 항목의 단서가 있습니다.',
          '**자기만의 캐릭터를 만들고 싶은 취미 작가.** 커스텀 캐릭터에는 페르소나, 말투, 첫 시나리오 항목이 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**실제 사용 품질.** PromptQuorum은 앱을 실행하지 않았으므로 응답 품질, 속도, 배터리 사용, 콘텐츠 필터의 실제 강도는 평가하지 않았습니다.',
          '**소스 코드와 라이선스.** 앱은 비공개 소스이며 공개 저장소를 찾지 못했습니다.',
          '**트래픽.** 네트워크 트래픽을 감사하지 않았으므로 방침에 나온 분석은 독립적으로 검증되지 않았습니다.',
          '**회사 정보.** 웹사이트에는 "© 2026 Castmates"와 숨겨진 지원 이메일만 있고 개인정보 처리방침에도 법인명이 없습니다.',
          '**이용 실적.** 앱은 출시 약 3개월이며 출처에는 지원 약속이 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이'],
        rows: [
          { '앱': '[SillyTavern](/ko/local-llms/sillytavern-review)', '플랫폼': 'Windows, macOS, Linux, 웹', '가격 / 라이선스': '무료 / AGPL 3.0', '주요 차이': '직접 운영하는 모델 백엔드에 연결하는 오픈소스 롤플레이 프런트엔드' },
          { '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / MIT', '주요 차이': '문서 Q&A를 갖춘 오픈소스 오프라인 채팅, 롤플레이 중심은 아님' },
          { '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / MIT', '주요 차이': '원하는 모델을 고르는 오픈소스 온디바이스 클라이언트' },
          { '앱': '[MemoryAI](/ko/power-local-llm/memoryai-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / 비공개 소스', '주요 차이': '편집 가능한 메모리와 PIN 잠금 키즈 모드를 갖춘 오프라인 채팅' },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀝니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Castmates에 음성 채팅이 있습니까?',
            a: '웹사이트와 App Store 설명 어디에도 음성 기능은 언급되지 않으며, Castmates는 행동과 장면 묘사를 곁들인 텍스트 채팅으로 소개됩니다.',
          },
          {
            q: '인터넷 연결 없이도 작동합니까?',
            a: '개발자에 따르면 모델을 설치한 뒤에는 그렇습니다. 모델 다운로드, 결제, 개인정보 처리방침에 설명된 익명 사용 통계에는 네트워크가 사용됩니다.',
          },
          {
            q: 'iPad나 Android 폰에서 쓸 수 있습니까?',
            a: '페이지는 버전 17.0 이상의 iPhone과 iPad를 지원합니다. Android 버전을 언급한 출처는 없습니다.',
          },
          {
            q: '내 채팅이 모델 학습에 쓰입니까?',
            a: '개인정보 처리방침은 회사가 대화를 받거나 보거나 저장하지 않는다고 하며, 채팅을 기록하는 클라우드 AI 앱과 대비합니다. PromptQuorum은 이를 검증하지 않았습니다.',
          },
          {
            q: '모델을 삭제할 수 있습니까?',
            a: '네. 웹사이트에 따르면 저장 공간을 확보하기 위해 모델 파일을 삭제할 수 있으며, 다시 채팅하려면 재다운로드됩니다.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '개발자의 말',
        content: [
          'Castmates의 개발자 Josip Markovic이 앱과 개발 이유에 대해 다음과 같이 전했습니다. 가독성을 위해 가볍게 편집한 개발자 본인의 말로 제시하는 것이며, PromptQuorum의 독립적인 편집 평가가 아닙니다:',
          '"제가 Castmates를 만든 이유는, 써 본 캐릭터 앱이 하나같이 계정을 요구하고 모든 메시지를 서버로 보냈기 때문입니다. 휴대폰에서 돌아가는 3B 모델은 제대로 된 이야기를 하기에 너무 작아 보였기에, 작업의 대부분은 모델이 장면을 유지하게 만드는 데 들어갔습니다. 캐릭터가 나를 기억하도록 하는 세션 요약, 모델이 캐릭터에서 벗어나는 것을 잡아내는 가드, 그리고 출시 전에 Mac에서 돌린 많은 평가 실행입니다. 다음은 더 빠른 첫 다운로드와 시즌 한정 캐릭터이며, 먼저 할로윈 캐릭터 세 개를 선보입니다."',
        ],
        note: '— Josip Markovic, 개발자',
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Castmates는 개발자에 따르면 캐릭터 채팅을 기기에서 실행하는 무료 iPhone 롤플레이 앱으로, 기본 캐릭터 32종, 커스텀 캐릭터, 세션 메모리, 선택 기능인 Mature 모드를 위한 연령 제어를 갖추고 있습니다. 또한 이 리뷰를 확인한 당일에 릴리스가 있을 만큼 활발히 업데이트됩니다. 반면 비공개 소스이고, 출시 약 3개월이며, 평가한 사용자가 적고, 영어만 지원하며, 6 GB 이상의 RAM이 있는 iPhone이 필요합니다. 계정 없는 캐릭터 채팅을 원하고 새롭고 폐쇄적인 앱을 받아들일 수 있는 성인에게 적합합니다. 공개 코드와 자기 모델을 원한다면 [SillyTavern](/ko/local-llms/sillytavern-review)이나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Castmates](https://apps.apple.com/us/app/castmates-ai-characters/id6785844694) — 가격, 버전 기록, 요구 사항, 연령 등급, 개인정보 라벨. 2026년 10월 19일 확인.',
          '[Castmates 웹사이트](https://get-castmates.com) — 기능, 가격, 기기 내 실행 주장, FAQ. 2026년 10월 19일 확인.',
          '[Castmates 개인정보 처리방침](https://get-castmates.com/privacy) — 데이터 처리, 분석, 모델 호스팅. 2026년 10월 10일 업데이트.',
          '[Castmates 콘텐츠 및 안전 페이지](https://get-castmates.com/age-suitability) — 연령 확인, Mature 모드, 콘텐츠 필터.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[SillyTavern 리뷰](/ko/local-llms/sillytavern-review) — 오픈소스 롤플레이 프런트엔드.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone과 Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 온디바이스 채팅 클라이언트.',
          '[MemoryAI 리뷰](/ko/power-local-llm/memoryai-review) — 편집 가능한 메모리를 갖춘 무료 오프라인 채팅 앱.',
          '[2026년 iPhone용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 더 넓은 비교.',
        ],
      },
    },
  },
}
