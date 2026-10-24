// LocalMindAI Review: On-Device AI Companion for iPhone
// Slug: localmindai-review
// Companion to: locally-ai-review, local-ai-chat-pocket-review, localmind-review (different app, similar name), ai-on-device-review
// Sources: the App Store listing (id6822007135, US/DE/JP/BR storefronts and the iTunes lookup API), the developer's website
// utsugumi-apps.web.app/localmind and its privacy policy (effective 2026-10-20), all checked 2026-10-24 — no hands-on testing.
// Tip prices were read per storefront (US, DE/ES/FR, JP, BR); the Korean storefront price could not be read, so the KO block says so.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-en.webp',
    title: 'LocalMindAI Review: On-Device AI Companion for iPhone',
    seoTitle: 'LocalMindAI Review: On-Device AI Companion for iPhone',
    intro:
      'LocalMindAI is a free iPhone and iPad app that chats with you, remembers what you tell it and reads documents you add, all of it processed on the device according to the developer. It is a very new release (first published 19 October 2026) from an individual developer, so this review sticks to what its App Store listing, website and privacy policy say, as checked on 24 October 2026.',
    metaDescription:
      'LocalMindAI review: free iPhone and iPad AI companion with on-device chat, memory and documents. Models, ads and tips, data flow and open questions.',
    twitterDescription:
      'LocalMindAI review: a free on-device AI companion for iPhone and iPad. Models, ads, data flow and what the sources leave unconfirmed.',
    audience:
      'iPhone and iPad users deciding whether to try a brand-new on-device AI companion app, who need to know what it requires, what it costs, what leaves the phone and what the sources do not confirm.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMindAI review',
    targetKeywords: [
      'localmindai review',
      'on-device ai iphone',
      'offline ai companion iphone',
      'private ai chat ios',
      'chat with documents on iphone',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMindAI (version 1.1, released 21 October 2026) is an iPhone and iPad app that runs chat, memory, speech recognition and document reading on the device, using Apple\'s built-in model or open models you download.** It is closed source and days old, so its claims rest on the developer\'s own pages. PromptQuorum has not installed or tested it; every statement here comes from the App Store listing, the developer\'s website and its privacy policy.',
    quickAnswerTop: {
      en: {
        question: 'Does LocalMindAI really run on the device?',
        answer:
          'According to its privacy policy, yes: chats, memories, photos, voice recordings and documents are stored and processed only on the phone. The app does go online to download models, check for updates and show ads until you leave a tip.',
        bullets: [
          'The Memory tab lets you review, edit or delete what the companion remembers.',
          'Documents (PDFs, text files, photos) feed the replies, and Reply Details shows which pages were used.',
          'Voice messages are transcribed and text in photos is read on the device.',
          'The interface comes in 10 languages.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is LocalMindAI?', anchor: 'what-is-localmindai' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Data Flow, Ads and Tips', anchor: 'privacy' },
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
            text: 'LocalMindAI is a free iPhone and iPad companion chat app whose developer says all chat, memory and document processing stays on the device.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from the App Store, pick Apple\'s model or download an open one, and then chat with a companion you name and shape, which remembers the things you let it keep.',
          },
        ],
        items: [
          'Maintenance: version 1.1 followed the first release by two days, so no stale-project warning applies.',
          'Cost: free to download; optional tips remove the ads and unlock no other feature.',
          'Device: requires iOS or iPadOS 26.0 or later; there is no Android or desktop version.',
          'Models: Apple\'s built-in model on supported devices, or downloads of about 0.5 to 8 GB each.',
          'Transparency: closed source, no ratings yet and an individual developer as publisher.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store listing, the developer\'s website and the privacy policy, checked on 24 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: 'What Is LocalMindAI?',
        content: [
          '**LocalMindAI is a companion-style chat app in which you name an AI character, set its personality and speaking style, and let it remember details across conversations.** The App Store files it under Entertainment. A Memory tab lists what it remembers so you can edit or delete items, and a continuous mode summarizes older parts of a conversation. The conversation styles are Standard, Small talk and Just listen.',
          'A Documents feature, added in version 1.1, lets you place PDFs, text files or photos under Memory > Documents; the AI then draws on them when replying. The app is published as "LocalMindAI - On-Device AI" by HIROTAKA SAKAIDA, whose site uses the name [Utsugumi Apps](https://utsugumi-apps.web.app/localmind/). It is a different product from [LocalMind](/power-local-llm/localmind-review), the Android and iOS client for Ollama and LM Studio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**LocalMindAI is a normal App Store download for iPhone and iPad; the sources mention no terminal, account or sign-up.**',
        ],
        columns: ['Item', 'Details'],
        rows: [
          { 'Item': 'Platform', 'Details': 'iPhone and iPad' },
          { 'Item': 'App Store', 'Details': '[LocalMindAI - On-Device AI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)' },
          { 'Item': 'Price', 'Details': 'Free; optional tips remove the ads' },
          { 'Item': 'Website', 'Details': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { 'Item': 'Privacy policy', 'Details': '[LocalMindAI privacy policy](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { 'Item': 'Source code', 'Details': 'None found' },
        ],
        note: 'Version reviewed: 1.1, released on 21 October 2026 per the [App Store listing](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135); the first release was on 19 October 2026. The listing also shows Mac (Apple M1 or later) and visionOS compatibility but marks the app as designed for iPhone and iPad. The store title differs by country, for example "LocalMindAI - Lokale KI" in Germany and "LocalMindAI" in Japan.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**The listing requires iOS or iPadOS 26.0 or later, a 49.1 MB download and extra space for every model you add.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Operating system', 'What the sources say': 'iOS or iPadOS 26.0 or later' },
          { 'Item': 'App size', 'What the sources say': '49.1 MB before any model download' },
          { 'Item': 'Model storage', 'What the sources say': 'About 0.5–8 GB per downloaded model' },
          { 'Item': 'Apple model', 'What the sources say': 'Available on supported devices only' },
          { 'Item': 'Age', 'What the sources say': '16 and over, per the listing' },
          { 'Item': 'Permissions', 'What the sources say': 'Microphone, speech recognition, selected photos; tracking is optional' },
        ],
        note: 'The sources publish no RAM figure and no list of supported iPhones, so which devices can run the larger downloads is not stated.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the App Store description and the developer\'s pages; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download LocalMindAI from the App Store on a device running iOS or iPadOS 26.0 or later.',
          },
          {
            title: 'Choose a model',
            whyItMatters: 'Use Apple\'s built-in model where it is supported, or download an open model; the app fetches downloads from Hugging Face.',
          },
          {
            title: 'Shape your companion',
            whyItMatters: 'Name the companion and set its personality, speaking style and conversation style.',
          },
          {
            title: 'Review its memory',
            whyItMatters: 'Open the Memory tab to check, edit or delete what it has remembered.',
          },
          {
            title: 'Add documents',
            whyItMatters: 'Under Memory > Documents add PDFs, text files or photos, then check Reply Details to see which pages were used.',
          },
          {
            title: 'Decide about ads',
            whyItMatters: 'Ads appear until you leave a tip; "Ad Privacy Choices" in Settings manages consent.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store description or the developer\'s website.**',
        ],
        items: [
          '**Companion memory.** Personality, speaking style and remembered facts persist across chats and can be edited in the Memory tab.',
          '**Documents.** PDFs, text files and photos can be added, and Reply Details names the documents and pages the AI used.',
          '**Models.** Apple\'s on-device model on supported devices plus downloadable open models; the listing also mentions vision models and a thinking mode.',
          '**Voice and photos.** Voice messages are transcribed on the device, and text in photos is read on the device.',
          '**Safety behaviour.** On-device checks decline harmful requests, and the app shows local support resources when a user seems to be struggling; the terms say the Just listen style is not counseling or therapy.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow, Ads and Tips',
        content: [
          '**Per the privacy policy, conversations, memories, photos, voice recordings and imported documents are stored and processed only on the device, and the developer says it operates no server that receives them.** The policy lists three network uses: downloading models and the model list from Hugging Face, checking for new versions through GitHub Pages, and Google AdMob ads for users who have not left a tip.',
          'AdMob may collect device information, an advertising identifier (only if you allow tracking), approximate location from your IP address and ad-interaction data, but the policy says conversations and memories are never sent to advertisers. The App Store privacy label, which the developer fills in, lists identifiers and usage data as used for tracking. Consent for personalized ads is requested where required, and app data may be included in iOS backups, except downloaded models.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the developer\'s own statements; PromptQuorum has not audited the app\'s network traffic or confirmed that nothing else leaves the device.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**iPhone users on iOS 26** who want a free companion chat whose memory stays visible and editable.',
          '**People who want to ask questions about their own PDFs or photos** without the files leaving the phone, per the developer.',
          '**Readers who accept ads** or a small tip to switch them off.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the app, so reply quality, speed, battery use and memory accuracy are not assessed.',
          '**Runtime and models.** No public source names the inference engine or the exact model files behind each choice.',
          '**Independent checks.** The app has no ratings yet, no source code and no third-party review of its network traffic or safety checks.',
          '**Long-term plans.** Neither the listing nor the website states a roadmap or how long updates will continue.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Locally AI](/power-local-llm/locally-ai-review)', 'Platforms': 'iPhone, iPad, Mac', 'Price / license': 'Free / closed source', 'Key difference': 'Runs open models on the device through MLX, with voice and image input' },
          { 'App': '[Local AI Chat - pocket](/power-local-llm/local-ai-chat-pocket-review)', 'Platforms': 'iPhone, iPad', 'Price / license': 'Freemium / closed source', 'Key difference': 'Offline chat that adds image generation and Shortcuts, sold by subscription' },
          { 'App': '[LocalMind](/power-local-llm/localmind-review)', 'Platforms': 'Android, iOS', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source client that also connects to Ollama, LM Studio or OpenRouter; a different app from LocalMindAI' },
          { 'App': '[AI on Device](/power-local-llm/ai-on-device-review)', 'Platforms': 'iPhone, iPad, Mac', 'Price / license': 'Paid / closed source', 'Key difference': 'One-time purchase with an offline model that needs an Apple Intelligence-compatible device' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What do the tips cost?',
            a: 'The US storefront lists four optional tips: Coffee for the developer at $0.99, Lunch for the developer at $2.99, A big cheer at $5.99 and Super supporter at $19.99. Any of them turns the ads off permanently, and other storefronts show different prices.',
          },
          {
            q: 'Which languages does it support?',
            a: 'The listing names English, French, German, Italian, Japanese, Korean, Portuguese, Spanish, Simplified Chinese and Traditional Chinese.',
          },
          {
            q: 'Which models can it download?',
            a: 'The listing names Qwen3.5, Gemma 4, LFM2.5 and llm-jp, plus vision models and a thinking mode. The sources give no per-model download sizes.',
          },
          {
            q: 'Can I delete what it remembers?',
            a: 'Yes, per the privacy policy: conversations, memories, documents and downloaded models can be deleted in the app, and deleting the app removes all of its data.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LocalMindAI is a free iPhone and iPad companion app that, by its developer\'s account, keeps chats, memory and documents on the device. Against that, it is only days old, has no ratings, shows ads until a tip, needs iOS 26 and offers no source code, and PromptQuorum could not verify its quality or network behaviour. It suits curious iPhone users who accept those limits; readers who want an established option can compare [Locally AI](/power-local-llm/locally-ai-review), and those who want open-source code can look at [LocalMind](/power-local-llm/localmind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LocalMindAI on the App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — description, version history, in-app purchases and privacy label, checked 24 October 2026.',
          '[LocalMindAI website](https://utsugumi-apps.web.app/localmind/) — product overview and the developer\'s terms.',
          '[LocalMindAI privacy policy](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — data handling, network use and ad choices, effective 20 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Locally AI Review](/power-local-llm/locally-ai-review) — an iPhone, iPad and Mac app that runs open models through MLX.',
          '[Local AI Chat - pocket Review](/power-local-llm/local-ai-chat-pocket-review) — offline iPhone chat with image generation.',
          '[LocalMind Review](/power-local-llm/localmind-review) — the open-source Android and iOS client with a similar name.',
          '[Best Local LLM Apps for iPhone](/power-local-llm/best-local-llm-apps-iphone-2026) — the iPhone roundup.',
          '[Local LLM Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison for chat apps.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LocalMindAI Review: On-Device AI Companion for iPhone',
      description:
        'LocalMindAI review: a free iPhone and iPad AI companion with on-device chat, memory and documents. Requirements, ads and tips, data flow and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/localmindai-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'iPhone and iPad users evaluating a new on-device AI companion app' },
      about: [
        { '@type': 'Thing', name: 'LocalMindAI' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'AI companion app' },
        { '@type': 'Thing', name: 'iPhone' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/localmindai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LocalMindAI Review', item: 'https://www.promptquorum.com/power-local-llm/localmindai-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-de.webp',
    title: 'LocalMindAI-Rezension: KI-Begleiter auf dem iPhone',
    seoTitle: 'LocalMindAI-Rezension: On-Device-KI-Begleiter fürs iPhone',
    intro:
      'LocalMindAI ist eine kostenlose iPhone- und iPad-App, die mit Ihnen chattet, sich merkt, was Sie ihr sagen, und von Ihnen hinzugefügte Dokumente liest – laut Entwickler geschieht die gesamte Verarbeitung auf dem Gerät. Die App ist ganz neu (Erstveröffentlichung am 19. Oktober 2026) und stammt von einem einzelnen Entwickler; diese Rezension beschränkt sich daher auf das, was App-Store-Eintrag, Website und Datenschutzerklärung aussagen, geprüft am 24. Oktober 2026.',
    metaDescription:
      'LocalMindAI-Rezension: kostenloser KI-Begleiter für iPhone und iPad mit Chat, Gedächtnis und Dokumenten auf dem Gerät. Modelle, Werbung, Datenfluss.',
    twitterDescription:
      'LocalMindAI-Rezension: ein kostenloser On-Device-KI-Begleiter für iPhone und iPad. Modelle, Werbung, Datenfluss und was die Quellen offenlassen.',
    audience:
      'iPhone- und iPad-Nutzer, die entscheiden wollen, ob sie eine brandneue On-Device-KI-Begleiter-App ausprobieren, und wissen müssen, was sie verlangt, was sie kostet, was das Telefon verlässt und was die Quellen nicht bestätigen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMindAI Rezension',
    targetKeywords: [
      'localmindai rezension',
      'on-device ki iphone',
      'offline ki begleiter iphone',
      'private ki chat ios',
      'mit dokumenten chatten iphone',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMindAI (Version 1.1, veröffentlicht am 21. Oktober 2026) ist eine iPhone- und iPad-App, die Chat, Gedächtnis, Spracherkennung und das Lesen von Dokumenten auf dem Gerät ausführt – mit dem integrierten Modell von Apple oder mit offenen Modellen, die Sie herunterladen.** Sie ist nicht quelloffen und erst wenige Tage alt; ihre Aussagen stützen sich daher auf die eigenen Seiten des Entwicklers. PromptQuorum hat sie weder installiert noch getestet; jede Angabe stammt aus dem App-Store-Eintrag, der Website des Entwicklers und seiner Datenschutzerklärung.',
    quickAnswerTop: {
      de: {
        question: 'Läuft LocalMindAI wirklich auf dem Gerät?',
        answer:
          'Laut Datenschutzerklärung ja: Chats, Erinnerungen, Fotos, Sprachaufnahmen und Dokumente werden nur auf dem Telefon gespeichert und verarbeitet. Online geht die App allerdings, um Modelle herunterzuladen, nach Updates zu suchen und Werbung anzuzeigen, bis Sie ein Trinkgeld geben.',
        bullets: [
          'Im Tab „Gedächtnis“ können Sie ansehen, bearbeiten oder löschen, woran sich der Begleiter erinnert.',
          'Dokumente (PDFs, Textdateien, Fotos) fließen in die Antworten ein, und die Antwortdetails zeigen, welche Seiten verwendet wurden.',
          'Sprachnachrichten werden transkribiert und Text in Fotos wird auf dem Gerät gelesen.',
          'Die Oberfläche gibt es in 10 Sprachen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist LocalMindAI?', anchor: 'what-is-localmindai' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'So starten Sie', anchor: 'getting-started' },
      { label: 'Durch die Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss, Werbung und Trinkgelder', anchor: 'privacy' },
      { label: 'Für wen es sich eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Alternativen und Mitbewerber', anchor: 'vs-alternatives' },
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
            text: 'LocalMindAI ist eine kostenlose Begleiter-Chat-App für iPhone und iPad, deren Entwickler sagt, dass Chat, Gedächtnis und Dokumentenverarbeitung auf dem Gerät bleiben.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren sie aus dem App Store, wählen Apples Modell oder laden ein offenes herunter und chatten dann mit einem Begleiter, den Sie benennen und formen und der sich merkt, was Sie ihn behalten lassen.',
          },
        ],
        items: [
          'Pflege: Version 1.1 erschien zwei Tage nach der Erstveröffentlichung; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Kosten: kostenloser Download; optionale Trinkgelder schalten die Werbung ab und bringen keine weiteren Funktionen.',
          'Gerät: erfordert iOS oder iPadOS 26.0 oder neuer; es gibt keine Android- oder Desktop-Version.',
          'Modelle: Apples integriertes Modell auf unterstützten Geräten oder Downloads von je etwa 0,5 bis 8 GB.',
          'Transparenz: nicht quelloffen, noch keine Bewertungen und ein einzelner Entwickler als Herausgeber.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension basiert auf dem App-Store-Eintrag, der Website des Entwicklers und der Datenschutzerklärung, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: 'Was ist LocalMindAI?',
        content: [
          '**LocalMindAI ist eine Chat-App im Begleiter-Stil: Sie benennen einen KI-Charakter, legen Persönlichkeit und Sprechstil fest und lassen ihn sich Details über Gespräche hinweg merken.** Der App Store ordnet sie der Kategorie „Unterhaltung“ zu. Ein Tab „Gedächtnis“ listet auf, woran sich der Begleiter erinnert, sodass Sie Einträge bearbeiten oder löschen können, und ein fortlaufender Modus fasst ältere Gesprächsteile zusammen. Die Gesprächsstile heißen „Standard“, „Small Talk“ und „Nur zuhören“.',
          'Mit der in Version 1.1 ergänzten Funktion „Dokumente“ legen Sie unter Gedächtnis > Dokumente PDFs, Textdateien oder Fotos ab; die KI greift beim Antworten darauf zurück. Veröffentlicht wird die App als „LocalMindAI - Lokale KI“ von HIROTAKA SAKAIDA, dessen Website den Namen [Utsugumi Apps](https://utsugumi-apps.web.app/localmind/) trägt. Sie ist ein anderes Produkt als [LocalMind](/de/power-local-llm/localmind-review), der Android- und iOS-Client für Ollama und LM Studio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**LocalMindAI ist ein normaler App-Store-Download für iPhone und iPad; die Quellen erwähnen weder Terminal noch Konto oder Registrierung.**',
        ],
        columns: ['Punkt', 'Details'],
        rows: [
          { 'Punkt': 'Plattform', 'Details': 'iPhone und iPad' },
          { 'Punkt': 'App Store', 'Details': '[LocalMindAI - Lokale KI](https://apps.apple.com/de/app/localmindai-lokale-ki/id6822007135)' },
          { 'Punkt': 'Preis', 'Details': 'Kostenlos; optionale Trinkgelder schalten die Werbung ab' },
          { 'Punkt': 'Website', 'Details': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { 'Punkt': 'Datenschutzerklärung', 'Details': '[Datenschutzerklärung von LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { 'Punkt': 'Quellcode', 'Details': 'Keiner gefunden' },
        ],
        note: 'Geprüfte Version: 1.1, laut [App-Store-Eintrag](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) am 21. Oktober 2026 veröffentlicht; die Erstveröffentlichung war am 19. Oktober 2026. Der Eintrag zeigt außerdem Kompatibilität mit dem Mac (Apple M1 oder neuer) und visionOS, weist die App aber als für iPhone und iPad konzipiert aus. Der Store-Titel unterscheidet sich je nach Land, etwa „LocalMindAI - Lokale KI“ in Deutschland und „LocalMindAI“ in Japan.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Der Eintrag verlangt iOS oder iPadOS 26.0 oder neuer, einen Download von 49,1 MB und zusätzlichen Speicherplatz für jedes weitere Modell.**',
        ],
        columns: ['Punkt', 'Laut Quellen'],
        rows: [
          { 'Punkt': 'Betriebssystem', 'Laut Quellen': 'iOS oder iPadOS 26.0 oder neuer' },
          { 'Punkt': 'App-Größe', 'Laut Quellen': '49,1 MB vor jedem Modell-Download' },
          { 'Punkt': 'Modellspeicher', 'Laut Quellen': 'Etwa 0,5–8 GB je heruntergeladenem Modell' },
          { 'Punkt': 'Apple-Modell', 'Laut Quellen': 'Nur auf unterstützten Geräten verfügbar' },
          { 'Punkt': 'Alter', 'Laut Quellen': 'Ab 16 Jahren laut Eintrag' },
          { 'Punkt': 'Berechtigungen', 'Laut Quellen': 'Mikrofon, Spracherkennung, ausgewählte Fotos; Tracking ist optional' },
        ],
        note: 'Die Quellen nennen weder einen RAM-Wert noch eine Liste unterstützter iPhones; welche Geräte die größeren Downloads ausführen können, ist daher nicht angegeben.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So starten Sie',
        content: [
          '**Die Schritte folgen der App-Store-Beschreibung und den Seiten des Entwicklers; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie LocalMindAI aus dem App Store auf ein Gerät mit iOS oder iPadOS 26.0 oder neuer.',
          },
          {
            title: 'Modell wählen',
            whyItMatters: 'Nutzen Sie Apples integriertes Modell, wo es unterstützt wird, oder laden Sie ein offenes Modell herunter; die App holt Downloads von Hugging Face.',
          },
          {
            title: 'Begleiter formen',
            whyItMatters: 'Benennen Sie den Begleiter und legen Sie Persönlichkeit, Sprechstil und Gesprächsstil fest.',
          },
          {
            title: 'Gedächtnis prüfen',
            whyItMatters: 'Öffnen Sie den Tab „Gedächtnis“, um zu prüfen, zu bearbeiten oder zu löschen, was er sich gemerkt hat.',
          },
          {
            title: 'Dokumente hinzufügen',
            whyItMatters: 'Fügen Sie unter Gedächtnis > Dokumente PDFs, Textdateien oder Fotos hinzu und prüfen Sie in den Antwortdetails, welche Seiten verwendet wurden.',
          },
          {
            title: 'Über Werbung entscheiden',
            whyItMatters: 'Werbung erscheint, bis Sie ein Trinkgeld geben; „Werbe-Datenschutzoptionen“ in den Einstellungen verwaltet die Einwilligung.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Durch die Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der App-Store-Beschreibung oder der Website des Entwicklers.**',
        ],
        items: [
          '**Gedächtnis des Begleiters.** Persönlichkeit, Sprechstil und gemerkte Fakten bleiben über Chats hinweg erhalten und lassen sich im Tab „Gedächtnis“ bearbeiten.',
          '**Dokumente.** PDFs, Textdateien und Fotos lassen sich hinzufügen, und die Antwortdetails nennen die Dokumente und Seiten, die die KI genutzt hat.',
          '**Modelle.** Apples On-Device-Modell auf unterstützten Geräten sowie herunterladbare offene Modelle; der Eintrag erwähnt außerdem Vision-Modelle und einen Denkmodus.',
          '**Sprache und Fotos.** Sprachnachrichten werden auf dem Gerät transkribiert, und Text in Fotos wird auf dem Gerät gelesen.',
          '**Sicherheitsverhalten.** Prüfungen auf dem Gerät lehnen schädliche Anfragen ab, und die App zeigt lokale Hilfsangebote, wenn jemand Schwierigkeiten zu haben scheint; laut Nutzungsbedingungen ist der Stil „Nur zuhören“ keine Beratung und keine Therapie.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss, Werbung und Trinkgelder',
        content: [
          '**Laut Datenschutzerklärung werden Gespräche, Erinnerungen, Fotos, Sprachaufnahmen und importierte Dokumente nur auf dem Gerät gespeichert und verarbeitet, und der Entwickler betreibt nach eigener Aussage keinen Server, der sie empfängt.** Die Erklärung nennt drei Netzwerknutzungen: das Herunterladen von Modellen und der Modellliste von Hugging Face, die Versionsprüfung über GitHub Pages und Google-AdMob-Werbung für Nutzer, die kein Trinkgeld gegeben haben.',
          'AdMob kann Geräteinformationen, eine Werbe-ID (nur wenn Sie Tracking erlauben), den anhand der IP-Adresse ermittelten ungefähren Standort und Interaktionsdaten mit Anzeigen erfassen; laut Erklärung werden Gespräche und Erinnerungen jedoch nie an Werbetreibende gesendet. Das vom Entwickler ausgefüllte Datenschutzlabel im App Store führt Kennungen und Nutzungsdaten als für Tracking verwendet auf. Wo erforderlich, wird die Einwilligung zu personalisierter Werbung eingeholt, und App-Daten können in iOS-Backups enthalten sein, mit Ausnahme heruntergeladener Modelle.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Aussagen des Entwicklers; PromptQuorum hat den Netzwerkverkehr der App nicht geprüft und nicht bestätigt, dass sonst nichts das Gerät verlässt.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen es sich eignet',
        items: [
          '**iPhone-Nutzer mit iOS 26**, die einen kostenlosen Begleiter-Chat wollen, dessen Gedächtnis sichtbar und bearbeitbar bleibt.',
          '**Menschen, die Fragen zu eigenen PDFs oder Fotos stellen wollen**, ohne dass die Dateien das Telefon verlassen – so der Entwickler.',
          '**Leser, die Werbung hinnehmen** oder mit einem kleinen Trinkgeld abschalten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praxisqualität.** PromptQuorum hat die App nicht ausgeführt; Antwortqualität, Geschwindigkeit, Akkuverbrauch und Gedächtnisgenauigkeit sind daher nicht bewertet.',
          '**Laufzeit und Modelle.** Keine öffentliche Quelle nennt die Inferenz-Engine oder die genauen Modelldateien hinter jeder Auswahl.',
          '**Unabhängige Prüfungen.** Die App hat noch keine Bewertungen, keinen Quellcode und keine unabhängige Prüfung ihres Netzwerkverkehrs oder ihrer Sicherheitsprüfungen.',
          '**Langfristige Pläne.** Weder der Eintrag noch die Website nennt eine Roadmap oder wie lange Updates erscheinen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Mitbewerber',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[Locally AI](/de/power-local-llm/locally-ai-review)', 'Plattformen': 'iPhone, iPad, Mac', 'Preis / Lizenz': 'Kostenlos / Closed Source', 'Wichtigster Unterschied': 'Führt offene Modelle über MLX auf dem Gerät aus, mit Sprach- und Bildeingabe' },
          { 'App': '[Local AI Chat - pocket](/de/power-local-llm/local-ai-chat-pocket-review)', 'Plattformen': 'iPhone, iPad', 'Preis / Lizenz': 'Freemium / Closed Source', 'Wichtigster Unterschied': 'Offline-Chat mit Bildgenerierung und Kurzbefehlen, per Abo verkauft' },
          { 'App': '[LocalMind](/de/power-local-llm/localmind-review)', 'Plattformen': 'Android, iOS', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Quelloffener Client, der sich auch mit Ollama, LM Studio oder OpenRouter verbindet; eine andere App als LocalMindAI' },
          { 'App': '[AI on Device](/de/power-local-llm/ai-on-device-review)', 'Plattformen': 'iPhone, iPad, Mac', 'Preis / Lizenz': 'Kostenpflichtig / Closed Source', 'Wichtigster Unterschied': 'Einmalkauf mit Offline-Modell, das ein Apple-Intelligence-fähiges Gerät braucht' },
        ],
        note: 'Details der Mitbewerber ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was kosten die Trinkgelder?',
            a: 'Der US-Store führt vier optionale Trinkgelder: „Coffee for the developer“ für 0,99 $, „Lunch for the developer“ für 2,99 $, „A big cheer“ für 5,99 $ und „Super supporter“ für 19,99 $. Jedes davon schaltet die Werbung dauerhaft ab; im deutschen Store lauten die Preise 0,99 €, 2,99 €, 6,99 € und 22,99 €.',
          },
          {
            q: 'Welche Sprachen unterstützt sie?',
            a: 'Der Eintrag nennt Englisch, Französisch, Deutsch, Italienisch, Japanisch, Koreanisch, Portugiesisch, Spanisch sowie vereinfachtes und traditionelles Chinesisch.',
          },
          {
            q: 'Welche Modelle kann sie herunterladen?',
            a: 'Der Eintrag nennt Qwen3.5, Gemma 4, LFM2.5 und llm-jp sowie Vision-Modelle und einen Denkmodus. Die Quellen geben keine Download-Größen je Modell an.',
          },
          {
            q: 'Kann ich löschen, woran sie sich erinnert?',
            a: 'Ja, laut Datenschutzerklärung: Gespräche, Erinnerungen, Dokumente und heruntergeladene Modelle lassen sich in der App löschen, und das Löschen der App entfernt alle ihre Daten.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LocalMindAI ist eine kostenlose Begleiter-App für iPhone und iPad, die nach Darstellung ihres Entwicklers Chats, Gedächtnis und Dokumente auf dem Gerät hält. Dagegen spricht: Sie ist erst wenige Tage alt, hat keine Bewertungen, zeigt Werbung bis zu einem Trinkgeld, braucht iOS 26 und bietet keinen Quellcode, und PromptQuorum konnte weder Qualität noch Netzwerkverhalten überprüfen. Sie passt zu neugierigen iPhone-Nutzern, die diese Grenzen akzeptieren; wer eine etablierte Option sucht, kann [Locally AI](/de/power-local-llm/locally-ai-review) vergleichen, und wer offenen Quellcode möchte, [LocalMind](/de/power-local-llm/localmind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LocalMindAI im App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — Beschreibung, Versionsverlauf, In-App-Käufe und Datenschutzlabel, geprüft am 24. Oktober 2026.',
          '[LocalMindAI-Website](https://utsugumi-apps.web.app/localmind/) — Produktüberblick und Nutzungsbedingungen des Entwicklers.',
          '[Datenschutzerklärung von LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — Datenverarbeitung, Netzwerknutzung und Werbeoptionen, gültig ab 20. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Locally-AI-Rezension](/de/power-local-llm/locally-ai-review) — eine iPhone-, iPad- und Mac-App, die offene Modelle über MLX ausführt.',
          '[Local-AI-Chat-pocket-Rezension](/de/power-local-llm/local-ai-chat-pocket-review) — Offline-Chat für das iPhone mit Bildgenerierung.',
          '[LocalMind-Rezension](/de/power-local-llm/localmind-review) — der quelloffene Android- und iOS-Client mit ähnlichem Namen.',
          '[Die besten lokalen LLM-Apps fürs iPhone](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die iPhone-Übersicht.',
          '[Lokale LLM-Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich für Chat-Apps.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-es.webp',
    title: 'Reseña de LocalMindAI: compañero de IA en el iPhone',
    seoTitle: 'Reseña de LocalMindAI: compañero de IA en el dispositivo',
    intro:
      'LocalMindAI es una app gratuita para iPhone y iPad que conversa contigo, recuerda lo que le cuentas y lee los documentos que añades; según el desarrollador, todo se procesa en el dispositivo. Es un lanzamiento muy reciente (publicado por primera vez el 19 de octubre de 2026) de un desarrollador individual, así que esta reseña se limita a lo que dicen su ficha de App Store, su web y su política de privacidad, consultadas el 24 de octubre de 2026.',
    metaDescription:
      'Reseña de LocalMindAI: compañero de IA gratuito para iPhone y iPad con chat, memoria y documentos en el dispositivo. Modelos, anuncios y datos.',
    twitterDescription:
      'Reseña de LocalMindAI: un compañero de IA gratuito en el dispositivo para iPhone y iPad. Modelos, anuncios, flujo de datos y lo que las fuentes no confirman.',
    audience:
      'Usuarios de iPhone y iPad que quieren decidir si prueban una app de compañero de IA en el dispositivo recién lanzada y necesitan saber qué exige, cuánto cuesta, qué sale del teléfono y qué no confirman las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de LocalMindAI',
    targetKeywords: [
      'reseña localmindai',
      'ia en el dispositivo iphone',
      'compañero ia sin conexión iphone',
      'chat ia privado ios',
      'chatear con documentos en iphone',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMindAI (versión 1.1, publicada el 21 de octubre de 2026) es una app para iPhone y iPad que ejecuta el chat, la memoria, el reconocimiento de voz y la lectura de documentos en el dispositivo, con el modelo integrado de Apple o con modelos abiertos que descargas.** Es de código cerrado y tiene solo unos días, así que sus afirmaciones se apoyan en las propias páginas del desarrollador. PromptQuorum no la ha instalado ni probado; todo lo que se afirma aquí procede de la ficha de App Store, la web del desarrollador y su política de privacidad.',
    quickAnswerTop: {
      es: {
        question: '¿LocalMindAI se ejecuta de verdad en el dispositivo?',
        answer:
          'Según su política de privacidad, sí: los chats, recuerdos, fotos, grabaciones de voz y documentos se guardan y procesan solo en el teléfono. Eso sí, la app se conecta a internet para descargar modelos, buscar actualizaciones y mostrar anuncios hasta que dejes una propina.',
        bullets: [
          'La pestaña Memoria te permite revisar, editar o borrar lo que recuerda el compañero.',
          'Los documentos (PDF, archivos de texto, fotos) alimentan las respuestas, y Detalles de la respuesta indica qué páginas se usaron.',
          'Los mensajes de voz se transcriben y el texto de las fotos se lee en el dispositivo.',
          'La interfaz está disponible en 10 idiomas.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es LocalMindAI?', anchor: 'what-is-localmindai' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos, anuncios y propinas', anchor: 'privacy' },
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
            text: 'LocalMindAI es una app gratuita de chat con compañero para iPhone y iPad cuyo desarrollador dice que el chat, la memoria y el procesamiento de documentos se quedan en el dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde App Store, eliges el modelo de Apple o descargas uno abierto y luego chateas con un compañero al que pones nombre y personalidad, que recuerda lo que le dejas guardar.',
          },
        ],
        items: [
          'Mantenimiento: la versión 1.1 se publicó dos días después del primer lanzamiento, así que no se aplica ningún aviso de proyecto obsoleto.',
          'Coste: descarga gratuita; las propinas opcionales quitan los anuncios y no desbloquean ninguna otra función.',
          'Dispositivo: requiere iOS o iPadOS 26.0 o posterior; no hay versión para Android ni para escritorio.',
          'Modelos: el modelo integrado de Apple en dispositivos compatibles, o descargas de unos 0.5 a 8 GB cada una.',
          'Transparencia: código cerrado, sin valoraciones todavía y un desarrollador individual como editor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la ficha de App Store, la web del desarrollador y la política de privacidad, consultadas el 24 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: '¿Qué es LocalMindAI?',
        content: [
          '**LocalMindAI es una app de chat estilo compañero en la que pones nombre a un personaje de IA, defines su personalidad y su manera de hablar, y dejas que recuerde detalles entre conversaciones.** App Store la clasifica en Entretenimiento. Una pestaña Memoria enumera lo que recuerda para que puedas editar o borrar elementos, y un modo continuo resume las partes antiguas de una conversación. Los estilos de conversación son Estándar, Charla y Solo escuchar.',
          'Una función Documentos, añadida en la versión 1.1, te permite colocar PDF, archivos de texto o fotos en Memoria > Documentos; la IA los usa al responder. La app se publica como «LocalMindAI - On-Device AI» (el título varía según la tienda) por HIROTAKA SAKAIDA, cuyo sitio usa el nombre [Utsugumi Apps](https://utsugumi-apps.web.app/localmind/). Es un producto distinto de [LocalMind](/es/power-local-llm/localmind-review), el cliente para Android e iOS de Ollama y LM Studio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**LocalMindAI es una descarga normal de App Store para iPhone y iPad; las fuentes no mencionan terminal, cuenta ni registro.**',
        ],
        columns: ['Elemento', 'Detalles'],
        rows: [
          { 'Elemento': 'Plataforma', 'Detalles': 'iPhone y iPad' },
          { 'Elemento': 'App Store', 'Detalles': '[LocalMindAI - On-Device AI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)' },
          { 'Elemento': 'Precio', 'Detalles': 'Gratis; las propinas opcionales quitan los anuncios' },
          { 'Elemento': 'Sitio web', 'Detalles': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { 'Elemento': 'Política de privacidad', 'Detalles': '[Política de privacidad de LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { 'Elemento': 'Código fuente', 'Detalles': 'No se encontró' },
        ],
        note: 'Versión revisada: 1.1, publicada el 21 de octubre de 2026 según la [ficha de App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135); el primer lanzamiento fue el 19 de octubre de 2026. La ficha muestra además compatibilidad con Mac (Apple M1 o posterior) y visionOS, pero indica que la app está diseñada para iPhone y iPad. El título en la tienda cambia según el país, por ejemplo «LocalMindAI - Lokale KI» en Alemania y «LocalMindAI» en Japón.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**La ficha exige iOS o iPadOS 26.0 o posterior, una descarga de 49.1 MB y espacio adicional para cada modelo que añadas.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Sistema operativo', 'Qué dicen las fuentes': 'iOS o iPadOS 26.0 o posterior' },
          { 'Elemento': 'Tamaño de la app', 'Qué dicen las fuentes': '49.1 MB antes de descargar modelos' },
          { 'Elemento': 'Almacenamiento de modelos', 'Qué dicen las fuentes': 'Unos 0.5–8 GB por modelo descargado' },
          { 'Elemento': 'Modelo de Apple', 'Qué dicen las fuentes': 'Solo en dispositivos compatibles' },
          { 'Elemento': 'Edad', 'Qué dicen las fuentes': 'Mayores de 16 años, según la ficha' },
          { 'Elemento': 'Permisos', 'Qué dicen las fuentes': 'Micrófono, reconocimiento de voz, fotos seleccionadas; el rastreo es opcional' },
        ],
        note: 'Las fuentes no publican la RAM necesaria ni una lista de iPhone compatibles, así que no se indica qué dispositivos pueden ejecutar las descargas más grandes.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la descripción de App Store y las páginas del desarrollador; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga LocalMindAI desde App Store en un dispositivo con iOS o iPadOS 26.0 o posterior.',
          },
          {
            title: 'Elige un modelo',
            whyItMatters: 'Usa el modelo integrado de Apple donde sea compatible, o descarga un modelo abierto; la app obtiene las descargas de Hugging Face.',
          },
          {
            title: 'Da forma a tu compañero',
            whyItMatters: 'Ponle nombre y define su personalidad, su manera de hablar y el estilo de conversación.',
          },
          {
            title: 'Revisa su memoria',
            whyItMatters: 'Abre la pestaña Memoria para comprobar, editar o borrar lo que ha recordado.',
          },
          {
            title: 'Añade documentos',
            whyItMatters: 'En Memoria > Documentos añade PDF, archivos de texto o fotos y consulta Detalles de la respuesta para ver qué páginas se usaron.',
          },
          {
            title: 'Decide sobre los anuncios',
            whyItMatters: 'Los anuncios aparecen hasta que dejes una propina; «Opciones de privacidad de anuncios» en Ajustes gestiona el consentimiento.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede de la descripción de App Store o de la web del desarrollador.**',
        ],
        items: [
          '**Memoria del compañero.** La personalidad, la manera de hablar y los datos recordados se mantienen entre chats y se pueden editar en la pestaña Memoria.',
          '**Documentos.** Se pueden añadir PDF, archivos de texto y fotos, y Detalles de la respuesta indica qué documentos y páginas usó la IA.',
          '**Modelos.** El modelo en el dispositivo de Apple en equipos compatibles, más modelos abiertos descargables; la ficha menciona también modelos de visión y un modo de razonamiento.',
          '**Voz y fotos.** Los mensajes de voz se transcriben en el dispositivo y el texto de las fotos se lee en el dispositivo.',
          '**Comportamiento de seguridad.** Comprobaciones en el dispositivo rechazan solicitudes dañinas, y la app muestra recursos de ayuda locales cuando el usuario parece estar en dificultades; según los términos, el estilo Solo escuchar no es asesoramiento ni terapia.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos, anuncios y propinas',
        content: [
          '**Según la política de privacidad, las conversaciones, recuerdos, fotos, grabaciones de voz y documentos importados se guardan y procesan solo en el dispositivo, y el desarrollador afirma que no opera ningún servidor que los reciba.** La política enumera tres usos de red: descargar modelos y la lista de modelos desde Hugging Face, comprobar nuevas versiones mediante GitHub Pages y los anuncios de Google AdMob para quienes no han dejado una propina.',
          'AdMob puede recoger información del dispositivo, un identificador de publicidad (solo si permites el rastreo), la ubicación aproximada derivada de tu IP y datos de interacción con los anuncios, pero la política dice que las conversaciones y los recuerdos nunca se envían a los anunciantes. La etiqueta de privacidad de App Store, que rellena el desarrollador, indica que los identificadores y los datos de uso se usan para rastreo. Donde es obligatorio se pide el consentimiento para anuncios personalizados, y los datos de la app pueden incluirse en las copias de seguridad de iOS, salvo los modelos descargados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del propio desarrollador; PromptQuorum no ha auditado el tráfico de red de la app ni ha confirmado que nada más salga del dispositivo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de iPhone con iOS 26** que quieren un chat con compañero gratuito cuya memoria sea visible y editable.',
          '**Quienes quieren hacer preguntas sobre sus propios PDF o fotos** sin que los archivos salgan del teléfono, según el desarrollador.',
          '**Lectores que aceptan los anuncios** o una pequeña propina para quitarlos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en uso real.** PromptQuorum no ejecutó la app, así que no se evalúan la calidad de las respuestas, la velocidad, el consumo de batería ni la exactitud de la memoria.',
          '**Motor y modelos.** Ninguna fuente pública nombra el motor de inferencia ni los archivos de modelo exactos de cada opción.',
          '**Comprobaciones independientes.** La app aún no tiene valoraciones, ni código fuente, ni una revisión de terceros de su tráfico de red o de sus comprobaciones de seguridad.',
          '**Planes a largo plazo.** Ni la ficha ni la web indican una hoja de ruta ni durante cuánto tiempo seguirán las actualizaciones.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Locally AI](/es/power-local-llm/locally-ai-review)', 'Plataformas': 'iPhone, iPad, Mac', 'Precio / licencia': 'Gratis / código cerrado', 'Diferencia clave': 'Ejecuta modelos abiertos en el dispositivo mediante MLX, con entrada de voz e imagen' },
          { 'App': '[Local AI Chat - pocket](/es/power-local-llm/local-ai-chat-pocket-review)', 'Plataformas': 'iPhone, iPad', 'Precio / licencia': 'Freemium / código cerrado', 'Diferencia clave': 'Chat sin conexión con generación de imágenes y Atajos, vendido por suscripción' },
          { 'App': '[LocalMind](/es/power-local-llm/localmind-review)', 'Plataformas': 'Android, iOS', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Cliente de código abierto que también se conecta a Ollama, LM Studio u OpenRouter; una app distinta de LocalMindAI' },
          { 'App': '[AI on Device](/es/power-local-llm/ai-on-device-review)', 'Plataformas': 'iPhone, iPad, Mac', 'Precio / licencia': 'De pago / código cerrado', 'Diferencia clave': 'Compra única con un modelo sin conexión que requiere un dispositivo compatible con Apple Intelligence' },
        ],
        note: 'Los datos de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuestan las propinas?',
            a: 'La tienda de EE. UU. muestra cuatro propinas opcionales: «Coffee for the developer» a 0.99 $, «Lunch for the developer» a 2.99 $, «A big cheer» a 5.99 $ y «Super supporter» a 19.99 $. Cualquiera de ellas quita los anuncios de forma permanente; en la tienda de España los precios son 0,99 €, 2,99 €, 6,99 € y 22,99 €.',
          },
          {
            q: '¿Qué idiomas admite?',
            a: 'La ficha indica inglés, francés, alemán, italiano, japonés, coreano, portugués, español, chino simplificado y chino tradicional.',
          },
          {
            q: '¿Qué modelos puede descargar?',
            a: 'La ficha menciona Qwen3.5, Gemma 4, LFM2.5 y llm-jp, además de modelos de visión y un modo de razonamiento. Las fuentes no dan el tamaño de descarga de cada modelo.',
          },
          {
            q: '¿Puedo borrar lo que recuerda?',
            a: 'Sí, según la política de privacidad: las conversaciones, recuerdos, documentos y modelos descargados se pueden borrar en la app, y al eliminar la app se borran todos sus datos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'LocalMindAI es una app gratuita de compañero para iPhone y iPad que, según su desarrollador, mantiene chats, memoria y documentos en el dispositivo. En contra: tiene solo unos días, no tiene valoraciones, muestra anuncios hasta que se deja una propina, exige iOS 26 y no ofrece código fuente, y PromptQuorum no pudo verificar su calidad ni su comportamiento de red. Encaja con usuarios curiosos de iPhone que acepten esos límites; quien quiera una opción consolidada puede comparar [Locally AI](/es/power-local-llm/locally-ai-review), y quien busque código abierto, [LocalMind](/es/power-local-llm/localmind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LocalMindAI en App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — descripción, historial de versiones, compras dentro de la app y etiqueta de privacidad, consultados el 24 de octubre de 2026.',
          '[Sitio web de LocalMindAI](https://utsugumi-apps.web.app/localmind/) — resumen del producto y términos del desarrollador.',
          '[Política de privacidad de LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — tratamiento de datos, uso de red y opciones de anuncios, vigente desde el 20 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una app para iPhone, iPad y Mac que ejecuta modelos abiertos mediante MLX.',
          '[Reseña de Local AI Chat - pocket](/es/power-local-llm/local-ai-chat-pocket-review) — chat sin conexión para iPhone con generación de imágenes.',
          '[Reseña de LocalMind](/es/power-local-llm/localmind-review) — el cliente de código abierto para Android e iOS con un nombre parecido.',
          '[Mejores apps de LLM locales para iPhone](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la comparativa para iPhone.',
          '[Asistentes de chat con LLM locales: comparativa](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de la categoría de apps de chat.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-fr.webp',
    title: 'Test de LocalMindAI : compagnon IA sur l\'iPhone',
    seoTitle: 'Test de LocalMindAI : compagnon IA local pour iPhone',
    intro:
      'LocalMindAI est une application gratuite pour iPhone et iPad qui discute avec vous, retient ce que vous lui dites et lit les documents que vous ajoutez ; selon le développeur, tout est traité sur l\'appareil. Il s\'agit d\'une version très récente (publiée le 19 octobre 2026) d\'un développeur individuel : ce test se limite donc à ce que disent sa fiche App Store, son site et sa politique de confidentialité, consultés le 24 octobre 2026.',
    metaDescription:
      'Test de LocalMindAI : compagnon IA gratuit pour iPhone et iPad avec chat, mémoire et documents sur l\'appareil. Modèles, publicités, données.',
    twitterDescription:
      'Test de LocalMindAI : un compagnon IA gratuit sur l\'appareil pour iPhone et iPad. Modèles, publicités, flux de données et ce que les sources ne confirment pas.',
    audience:
      'Utilisateurs d\'iPhone et d\'iPad qui hésitent à essayer une application de compagnon IA locale toute récente et doivent savoir ce qu\'elle exige, ce qu\'elle coûte, ce qui quitte le téléphone et ce que les sources ne confirment pas.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test LocalMindAI',
    targetKeywords: [
      'test localmindai',
      'ia sur l\'appareil iphone',
      'compagnon ia hors ligne iphone',
      'chat ia privé ios',
      'discuter avec ses documents iphone',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMindAI (version 1.1, publiée le 21 octobre 2026) est une application pour iPhone et iPad qui exécute le chat, la mémoire, la reconnaissance vocale et la lecture de documents sur l\'appareil, avec le modèle intégré d\'Apple ou des modèles ouverts que vous téléchargez.** Elle est à code fermé et vieille de quelques jours seulement ; ses affirmations reposent donc sur les pages du développeur lui-même. PromptQuorum ne l\'a ni installée ni testée ; tout ce qui suit provient de la fiche App Store, du site du développeur et de sa politique de confidentialité.',
    quickAnswerTop: {
      fr: {
        question: 'LocalMindAI fonctionne-t-elle vraiment sur l\'appareil ?',
        answer:
          'Selon sa politique de confidentialité, oui : conversations, souvenirs, photos, enregistrements vocaux et documents sont stockés et traités uniquement sur le téléphone. L\'application se connecte toutefois à Internet pour télécharger des modèles, vérifier les mises à jour et afficher des publicités tant que vous n\'avez pas laissé de pourboire.',
        bullets: [
          'L\'onglet Mémoire permet de consulter, modifier ou supprimer ce dont le compagnon se souvient.',
          'Les documents (PDF, fichiers texte, photos) nourrissent les réponses, et Détails de la réponse indique quelles pages ont servi.',
          'Les messages vocaux sont transcrits et le texte des photos est lu sur l\'appareil.',
          'L\'interface existe en 10 langues.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que LocalMindAI ?', anchor: 'what-is-localmindai' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Pour démarrer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données, publicités et pourboires', anchor: 'privacy' },
      { label: 'À qui elle s\'adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'LocalMindAI est une application gratuite de chat avec compagnon pour iPhone et iPad, dont le développeur affirme que le chat, la mémoire et le traitement des documents restent sur l\'appareil.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez depuis l\'App Store, choisissez le modèle d\'Apple ou téléchargez un modèle ouvert, puis discutez avec un compagnon que vous nommez et façonnez et qui retient ce que vous lui laissez garder.',
          },
        ],
        items: [
          'Maintenance : la version 1.1 est sortie deux jours après la première version ; aucun avertissement de projet abandonné ne s\'applique donc.',
          'Coût : téléchargement gratuit ; les pourboires facultatifs suppriment les publicités et ne débloquent aucune autre fonction.',
          'Appareil : exige iOS ou iPadOS 26.0 ou version ultérieure ; il n\'existe pas de version Android ni de bureau.',
          'Modèles : le modèle intégré d\'Apple sur les appareils compatibles, ou des téléchargements d\'environ 0,5 à 8 Go chacun.',
          'Transparence : code fermé, pas encore d\'avis et un développeur individuel comme éditeur.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur la fiche App Store, le site du développeur et la politique de confidentialité, consultés le 24 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni mesuré l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: 'Qu\'est-ce que LocalMindAI ?',
        content: [
          '**LocalMindAI est une application de chat de type compagnon : vous nommez un personnage IA, réglez sa personnalité et son style de langage, et le laissez retenir des détails d\'une conversation à l\'autre.** L\'App Store la classe dans Divertissement. Un onglet Mémoire liste ce dont elle se souvient pour que vous puissiez modifier ou supprimer des éléments, et un mode continu résume les anciennes parties d\'une conversation. Les styles de conversation sont Standard, Discussion légère et Juste écouter.',
          'Une fonction Documents, ajoutée dans la version 1.1, permet de placer des PDF, fichiers texte ou photos dans Mémoire > Documents ; l\'IA s\'en sert pour répondre. L\'application est publiée sous le titre « LocalMindAI - On-Device AI » (le titre varie selon la boutique) par HIROTAKA SAKAIDA, dont le site porte le nom [Utsugumi Apps](https://utsugumi-apps.web.app/localmind/). C\'est un produit différent de [LocalMind](/fr/power-local-llm/localmind-review), le client Android et iOS pour Ollama et LM Studio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**LocalMindAI se télécharge normalement depuis l\'App Store sur iPhone et iPad ; les sources ne mentionnent ni terminal, ni compte, ni inscription.**',
        ],
        columns: ['Élément', 'Détails'],
        rows: [
          { 'Élément': 'Plateforme', 'Détails': 'iPhone et iPad' },
          { 'Élément': 'App Store', 'Détails': '[LocalMindAI - On-Device AI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)' },
          { 'Élément': 'Prix', 'Détails': 'Gratuit ; les pourboires facultatifs suppriment les publicités' },
          { 'Élément': 'Site web', 'Détails': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { 'Élément': 'Politique de confidentialité', 'Détails': '[Politique de confidentialité de LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { 'Élément': 'Code source', 'Détails': 'Aucun trouvé' },
        ],
        note: 'Version testée : 1.1, sortie le 21 octobre 2026 d\'après la [fiche App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) ; la première version date du 19 octobre 2026. La fiche indique aussi une compatibilité avec le Mac (Apple M1 ou plus récent) et visionOS, mais présente l\'application comme conçue pour iPhone et iPad. Le titre en boutique varie selon le pays, par exemple « LocalMindAI - Lokale KI » en Allemagne et « LocalMindAI » au Japon.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**La fiche exige iOS ou iPadOS 26.0 ou version ultérieure, un téléchargement de 49,1 Mo et de l\'espace supplémentaire pour chaque modèle ajouté.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Système', 'Ce que disent les sources': 'iOS ou iPadOS 26.0 ou version ultérieure' },
          { 'Élément': 'Taille de l\'app', 'Ce que disent les sources': '49,1 Mo avant tout téléchargement de modèle' },
          { 'Élément': 'Stockage des modèles', 'Ce que disent les sources': 'Environ 0,5–8 Go par modèle téléchargé' },
          { 'Élément': 'Modèle d\'Apple', 'Ce que disent les sources': 'Disponible uniquement sur les appareils compatibles' },
          { 'Élément': 'Âge', 'Ce que disent les sources': '16 ans et plus, selon la fiche' },
          { 'Élément': 'Autorisations', 'Ce que disent les sources': 'Micro, reconnaissance vocale, photos choisies ; le suivi est facultatif' },
        ],
        note: 'Les sources ne publient ni quantité de RAM ni liste d\'iPhone compatibles ; les appareils capables d\'exécuter les plus gros téléchargements ne sont donc pas précisés.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour démarrer',
        content: [
          '**Les étapes suivent la description de l\'App Store et les pages du développeur ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez LocalMindAI depuis l\'App Store sur un appareil sous iOS ou iPadOS 26.0 ou version ultérieure.',
          },
          {
            title: 'Choisir un modèle',
            whyItMatters: 'Utilisez le modèle intégré d\'Apple là où il est pris en charge, ou téléchargez un modèle ouvert ; l\'application récupère les téléchargements sur Hugging Face.',
          },
          {
            title: 'Façonner le compagnon',
            whyItMatters: 'Donnez-lui un nom et réglez sa personnalité, son style de langage et son style de conversation.',
          },
          {
            title: 'Vérifier sa mémoire',
            whyItMatters: 'Ouvrez l\'onglet Mémoire pour consulter, modifier ou supprimer ce dont il s\'est souvenu.',
          },
          {
            title: 'Ajouter des documents',
            whyItMatters: 'Dans Mémoire > Documents, ajoutez des PDF, fichiers texte ou photos, puis consultez Détails de la réponse pour voir quelles pages ont servi.',
          },
          {
            title: 'Décider pour les publicités',
            whyItMatters: 'Les publicités s\'affichent tant que vous n\'avez pas laissé de pourboire ; « Choix de confidentialité des publicités » dans les Réglages gère le consentement.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la description de l\'App Store ou du site du développeur.**',
        ],
        items: [
          '**Mémoire du compagnon.** La personnalité, le style de langage et les faits retenus persistent d\'un chat à l\'autre et se modifient dans l\'onglet Mémoire.',
          '**Documents.** On peut ajouter des PDF, des fichiers texte et des photos, et Détails de la réponse nomme les documents et les pages utilisés par l\'IA.',
          '**Modèles.** Le modèle local d\'Apple sur les appareils compatibles, plus des modèles ouverts téléchargeables ; la fiche mentionne aussi des modèles de vision et un mode de réflexion.',
          '**Voix et photos.** Les messages vocaux sont transcrits sur l\'appareil et le texte des photos est lu sur l\'appareil.',
          '**Comportement de sécurité.** Des vérifications sur l\'appareil refusent les demandes nuisibles, et l\'application affiche des ressources d\'aide locales quand l\'utilisateur semble en difficulté ; selon les conditions, le style Juste écouter n\'est ni du conseil ni une thérapie.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données, publicités et pourboires',
        content: [
          '**Selon la politique de confidentialité, les conversations, souvenirs, photos, enregistrements vocaux et documents importés sont stockés et traités uniquement sur l\'appareil, et le développeur affirme n\'exploiter aucun serveur qui les reçoive.** La politique énumère trois usages du réseau : le téléchargement des modèles et de la liste des modèles depuis Hugging Face, la vérification des versions via GitHub Pages et les publicités Google AdMob pour les utilisateurs qui n\'ont pas laissé de pourboire.',
          'AdMob peut collecter des informations sur l\'appareil, un identifiant publicitaire (seulement si vous autorisez le suivi), une localisation approximative déduite de l\'adresse IP et des données d\'interaction avec les annonces, mais la politique indique que les conversations et les souvenirs ne sont jamais envoyés aux annonceurs. L\'étiquette de confidentialité de l\'App Store, renseignée par le développeur, classe les identifiants et les données d\'usage parmi les données utilisées pour le suivi. Le consentement aux publicités personnalisées est demandé là où c\'est requis, et les données de l\'application peuvent figurer dans les sauvegardes iOS, hors modèles téléchargés.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du développeur ; PromptQuorum n\'a pas audité le trafic réseau de l\'application ni confirmé que rien d\'autre ne quitte l\'appareil.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s\'adresse',
        items: [
          '**Les utilisateurs d\'iPhone sous iOS 26** qui veulent un chat avec compagnon gratuit dont la mémoire reste visible et modifiable.',
          '**Les personnes qui veulent interroger leurs propres PDF ou photos** sans que les fichiers quittent le téléphone, selon le développeur.',
          '**Les lecteurs qui acceptent les publicités** ou un petit pourboire pour les supprimer.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Qualité à l\'usage.** PromptQuorum n\'a pas exécuté l\'application ; qualité des réponses, vitesse, consommation de batterie et exactitude de la mémoire ne sont donc pas évaluées.',
          '**Moteur et modèles.** Aucune source publique ne nomme le moteur d\'inférence ni les fichiers de modèle exacts derrière chaque choix.',
          '**Vérifications indépendantes.** L\'application n\'a pas encore d\'avis, pas de code source et aucun examen tiers de son trafic réseau ou de ses contrôles de sécurité.',
          '**Projets à long terme.** Ni la fiche ni le site n\'indiquent de feuille de route ni la durée des mises à jour.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['App', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'App': '[Locally AI](/fr/power-local-llm/locally-ai-review)', 'Plateformes': 'iPhone, iPad, Mac', 'Prix / licence': 'Gratuit / code fermé', 'Différence clé': 'Exécute des modèles ouverts sur l\'appareil via MLX, avec entrée vocale et image' },
          { 'App': '[Local AI Chat - pocket](/fr/power-local-llm/local-ai-chat-pocket-review)', 'Plateformes': 'iPhone, iPad', 'Prix / licence': 'Freemium / code fermé', 'Différence clé': 'Chat hors ligne avec génération d\'images et Raccourcis, vendu par abonnement' },
          { 'App': '[LocalMind](/fr/power-local-llm/localmind-review)', 'Plateformes': 'Android, iOS', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Client open source qui se connecte aussi à Ollama, LM Studio ou OpenRouter ; une autre app que LocalMindAI' },
          { 'App': '[AI on Device](/fr/power-local-llm/ai-on-device-review)', 'Plateformes': 'iPhone, iPad, Mac', 'Prix / licence': 'Payant / code fermé', 'Différence clé': 'Achat unique avec un modèle hors ligne qui exige un appareil compatible Apple Intelligence' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque app.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Combien coûtent les pourboires ?',
            a: 'La boutique américaine propose quatre pourboires facultatifs : « Coffee for the developer » à 0,99 $, « Lunch for the developer » à 2,99 $, « A big cheer » à 5,99 $ et « Super supporter » à 19,99 $. L\'un d\'eux suffit pour supprimer définitivement les publicités ; sur la boutique française, les prix sont de 0,99 €, 2,99 €, 6,99 € et 22,99 €.',
          },
          {
            q: 'Quelles langues prend-elle en charge ?',
            a: 'La fiche cite l\'anglais, le français, l\'allemand, l\'italien, le japonais, le coréen, le portugais, l\'espagnol, le chinois simplifié et le chinois traditionnel.',
          },
          {
            q: 'Quels modèles peut-elle télécharger ?',
            a: 'La fiche cite Qwen3.5, Gemma 4, LFM2.5 et llm-jp, ainsi que des modèles de vision et un mode de réflexion. Les sources ne donnent pas la taille de téléchargement de chaque modèle.',
          },
          {
            q: 'Puis-je supprimer ce dont elle se souvient ?',
            a: 'Oui, selon la politique de confidentialité : conversations, souvenirs, documents et modèles téléchargés peuvent être supprimés dans l\'application, et la désinstallation efface toutes ses données.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LocalMindAI est une application gratuite de compagnon pour iPhone et iPad qui, selon son développeur, garde chats, mémoire et documents sur l\'appareil. En contrepartie, elle n\'a que quelques jours, n\'a aucun avis, affiche des publicités jusqu\'à un pourboire, exige iOS 26 et n\'offre pas de code source, et PromptQuorum n\'a pu vérifier ni sa qualité ni son comportement réseau. Elle convient aux utilisateurs d\'iPhone curieux qui acceptent ces limites ; ceux qui veulent une option établie peuvent comparer [Locally AI](/fr/power-local-llm/locally-ai-review), et ceux qui veulent du code ouvert regarder [LocalMind](/fr/power-local-llm/localmind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LocalMindAI sur l\'App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — description, historique des versions, achats intégrés et étiquette de confidentialité, consultés le 24 octobre 2026.',
          '[Site web de LocalMindAI](https://utsugumi-apps.web.app/localmind/) — présentation du produit et conditions du développeur.',
          '[Politique de confidentialité de LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — traitement des données, usage du réseau et choix publicitaires, en vigueur depuis le 20 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Locally AI](/fr/power-local-llm/locally-ai-review) — une application iPhone, iPad et Mac qui exécute des modèles ouverts via MLX.',
          '[Test de Local AI Chat - pocket](/fr/power-local-llm/local-ai-chat-pocket-review) — chat hors ligne pour iPhone avec génération d\'images.',
          '[Test de LocalMind](/fr/power-local-llm/localmind-review) — le client open source Android et iOS au nom proche.',
          '[Meilleures applications LLM locales pour iPhone](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif pour iPhone.',
          '[Assistants de chat LLM locaux : comparatif](/fr/power-local-llm/local-llm-chat-assistants-compared) — le comparatif de la catégorie des applications de chat.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-ja.webp',
    title: 'LocalMindAIレビュー：iPhoneで動くオンデバイスAIコンパニオン',
    seoTitle: 'LocalMindAIレビュー｜iPhoneのオンデバイスAI',
    intro:
      'LocalMindAIは、会話し、話した内容を覚え、追加した資料を読み取る無料のiPhone・iPad向けアプリで、開発者によればその処理はすべて端末内で行われます。2026年10月19日に初公開されたばかりの個人開発者による作品のため、このレビューはApp Storeの掲載情報、公式サイト、プライバシーポリシー（2026年10月24日確認）の記載の範囲にとどめています。',
    metaDescription:
      'LocalMindAIレビュー：端末内でチャット・記憶・資料読み取りを行う無料のiPhone・iPad向けAIコンパニオン。モデル、広告と応援、データの流れ、未確認事項を整理。',
    twitterDescription:
      'LocalMindAIレビュー：iPhone・iPad向けの無料オンデバイスAIコンパニオン。モデル、広告、データの流れ、情報源が確認していない点。',
    audience:
      'できたばかりのオンデバイスAIコンパニオンアプリを試すか迷っているiPhone・iPadユーザーで、必要な環境、費用、端末の外に出る情報、情報源が確認していない点を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMindAI レビュー',
    targetKeywords: [
      'localmindai レビュー',
      'iphone オンデバイス ai',
      'iphone オフライン ai コンパニオン',
      'ios プライベート ai チャット',
      'iphone 資料 チャット',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMindAI（バージョン1.1、2026年10月21日公開）は、チャット、記憶、音声認識、資料の読み取りを端末内で実行するiPhone・iPad向けアプリで、Appleの内蔵モデルまたはダウンロードしたオープンモデルを使います。** クローズドソースで公開から数日のため、主張の根拠は開発者自身のページです。PromptQuorumはインストールも検証も行っておらず、ここでの記述はすべてApp Storeの掲載情報、開発者の公式サイト、プライバシーポリシーに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'LocalMindAIは本当に端末内で動作しますか？',
        answer:
          'プライバシーポリシーによれば、はい。会話、記憶、写真、音声、資料は端末内だけで保存・処理されます。ただし、モデルのダウンロード、更新の確認、応援（投げ銭）をするまでの広告表示のために、アプリはインターネットに接続します。',
        bullets: [
          '「記憶」タブで、コンパニオンが覚えている内容を確認・編集・削除できます。',
          '資料（PDF、テキスト、写真）が回答に使われ、「回答の詳細」でどのページを参照したかが分かります。',
          'ボイスメッセージの文字起こしと写真内の文字の読み取りは端末内で行われます。',
          '画面表示は10言語に対応しています。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '簡単な回答', anchor: 'quick-answer' },
      { label: 'LocalMindAIとは', anchor: 'what-is-localmindai' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '使い始める手順', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れ・広告・応援', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合・代替アプリ', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
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
            text: 'LocalMindAIは無料のiPhone・iPad向けコンパニオンチャットアプリで、開発者はチャット・記憶・資料の処理がすべて端末内にとどまると説明しています。',
          },
          {
            type: 'plain-terms',
            text: 'App Storeからインストールし、Appleのモデルかダウンロードしたオープンモデルを選ぶと、名前や性格を決めたコンパニオンと会話でき、覚えてよいと許可した内容を記憶してくれます。',
          },
        ],
        items: [
          'メンテナンス：バージョン1.1は初公開の2日後に公開されており、放置プロジェクトの警告は該当しません。',
          '費用：ダウンロードは無料で、任意の応援（投げ銭）をすると広告が消えますが、ほかの機能は増えません。',
          '対応端末：iOS／iPadOS 26.0以降が必要で、Androidやデスクトップのバージョンはありません。',
          'モデル：対応端末ではAppleの内蔵モデル、またはダウンロード式でそれぞれ約0.5〜8GBのモデルを使います。',
          '透明性：クローズドソースで、評価はまだなく、公開者は個人の開発者です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月24日に確認したApp Storeの掲載情報、開発者の公式サイト、プライバシーポリシーに基づきます。PromptQuorumはこのアプリをインストール・検証・ベンチマークしていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: 'LocalMindAIとは',
        content: [
          '**LocalMindAIは、AIキャラクターに名前を付け、性格と話し方を設定し、会話をまたいで細かな内容を覚えさせるコンパニオン型のチャットアプリです。** App Storeでは「エンターテインメント」に分類されています。「記憶」タブには覚えている内容が並び、項目の編集や削除ができ、継続モードでは会話の古い部分が要約されます。会話スタイルは「標準」「雑談」「聞くだけ」の3種類です。',
          'バージョン1.1で追加された「資料」機能では、「記憶」>「資料」にPDF、テキスト、写真を入れておくと、AIが返答の際に参照します。アプリはHIROTAKA SAKAIDA名義で公開されており、公式サイトでは[Utsugumi Apps](https://utsugumi-apps.web.app/localmind/)という名前が使われています。OllamaやLM Studio向けのAndroid・iOSクライアントである[LocalMind](/ja/power-local-llm/localmind-review)とは別の製品です。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LocalMindAIはiPhone・iPad向けの通常のApp Storeアプリで、情報源にはターミナル操作もアカウント登録も出てきません。**',
        ],
        columns: ['項目', '内容'],
        rows: [
          { '項目': '対応機種', '内容': 'iPhone、iPad' },
          { '項目': 'App Store', '内容': '[LocalMindAI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)' },
          { '項目': '価格', '内容': '無料（任意の応援で広告を非表示）' },
          { '項目': '公式サイト', '内容': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { '項目': 'プライバシーポリシー', '内容': '[LocalMindAIのプライバシーポリシー](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { '項目': 'ソースコード', '内容': '見つかりませんでした' },
        ],
        note: '確認したバージョン：1.1。[App Storeの掲載情報](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)によれば2026年10月21日公開で、初公開は2026年10月19日です。掲載情報にはMac（Apple M1以降）とvisionOSでの互換性も表示されますが、iPhoneとiPad向けに設計されたアプリとされています。ストア上の名称は国によって異なり、ドイツでは「LocalMindAI - Lokale KI」、日本では「LocalMindAI」です。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**掲載情報の要件は、iOS／iPadOS 26.0以降、49.1MBのダウンロード、そして追加するモデルごとの空き容量です。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'OS', '情報源の記載': 'iOS／iPadOS 26.0以降' },
          { '項目': 'アプリサイズ', '情報源の記載': 'モデル追加前で49.1MB' },
          { '項目': 'モデルの容量', '情報源の記載': 'ダウンロードしたモデル1つにつき約0.5〜8GB' },
          { '項目': 'Appleのモデル', '情報源の記載': '対応端末のみ' },
          { '項目': '年齢', '情報源の記載': '掲載情報では16歳以上' },
          { '項目': '権限', '情報源の記載': 'マイク、音声認識、選択した写真。トラッキングは任意' },
        ],
        note: '情報源にはRAM容量や対応iPhoneの一覧が載っていないため、大きなモデルをどの端末で動かせるかは不明です。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い始める手順',
        content: [
          '**手順はApp Storeの説明と開発者のページに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストール',
            whyItMatters: 'iOS／iPadOS 26.0以降の端末で、App StoreからLocalMindAIをダウンロードします。',
          },
          {
            title: 'モデルを選ぶ',
            whyItMatters: '対応端末ではAppleの内蔵モデルを使うか、オープンモデルをダウンロードします。ダウンロードはHugging Faceから行われます。',
          },
          {
            title: 'コンパニオンを設定',
            whyItMatters: '名前を付け、性格、話し方、会話スタイルを設定します。',
          },
          {
            title: '記憶を確認',
            whyItMatters: '「記憶」タブで、覚えている内容を確認・編集・削除します。',
          },
          {
            title: '資料を追加',
            whyItMatters: '「記憶」>「資料」にPDF、テキスト、写真を追加し、「回答の詳細」で参照されたページを確認します。',
          },
          {
            title: '広告をどうするか決める',
            whyItMatters: '応援（投げ銭）をするまで広告が表示されます。設定の「広告のプライバシー設定」で同意を管理できます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべてApp Storeの説明または開発者の公式サイトに基づく内容です。**',
        ],
        items: [
          '**コンパニオンの記憶。** 性格、話し方、覚えた内容は会話をまたいで保持され、「記憶」タブで編集できます。',
          '**資料。** PDF、テキスト、写真を追加でき、「回答の詳細」にAIが参照した資料とページが表示されます。',
          '**モデル。** 対応端末ではAppleのオンデバイスモデル、ほかにダウンロード式のオープンモデルを使えます。掲載情報にはビジョンモデルと思考モードの記載もあります。',
          '**音声と写真。** ボイスメッセージは端末内で文字起こしされ、写真内の文字も端末内で読み取られます。',
          '**安全面の動作。** 端末内のチェックで有害な依頼を断り、利用者が悩んでいる様子のときは地域の相談窓口を表示します。規約では「聞くだけ」スタイルはカウンセリングや治療ではないとされています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れ・広告・応援',
        content: [
          '**プライバシーポリシーによれば、会話、記憶、写真、音声、取り込んだ資料は端末内だけで保存・処理され、開発者はそれらを受け取るサーバーを運用していないとしています。** ポリシーが挙げる通信は3つで、Hugging Faceからのモデルとモデル一覧のダウンロード、GitHub Pagesでのバージョン確認、応援をしていない利用者向けのGoogle AdMob広告です。',
          'AdMobは、端末情報、広告識別子（トラッキングを許可した場合のみ）、IPアドレスから推定されるおおよその位置、広告の操作データを収集することがありますが、会話や記憶が広告事業者に送られることはないとポリシーは述べています。開発者が記入したApp Storeのプライバシーラベルでは、識別子と利用状況データがトラッキングに使われるデータとして挙げられています。必要な地域ではパーソナライズ広告への同意を求め、アプリのデータはダウンロード済みモデルを除きiOSのバックアップに含まれることがあります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者自身の説明です。PromptQuorumはアプリの通信を監査しておらず、ほかに端末外へ送られる情報がないことも確認していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**iOS 26のiPhoneユーザー**で、記憶の内容が見えて編集できる無料のコンパニオンチャットを使いたい人。',
          '**手持ちのPDFや写真について質問したい人**で、開発者の説明どおりファイルを端末の外に出したくない人。',
          '**広告を許容できる人**、または少額の応援で広告を消したい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質。** PromptQuorumはアプリを実行していないため、回答の品質、速度、バッテリー消費、記憶の正確さは評価していません。',
          '**実行環境とモデル。** 推論エンジンや、各選択肢の具体的なモデルファイルを示す公開情報は見つかりませんでした。',
          '**第三者による検証。** 評価はまだなく、ソースコードも公開されておらず、通信や安全チェックを第三者が検証した情報もありません。',
          '**今後の計画。** 掲載情報にも公式サイトにも、ロードマップや更新がいつまで続くかの記載はありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合・代替アプリ',
        columns: ['アプリ', '対応機種', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)', '対応機種': 'iPhone、iPad、Mac', '価格／ライセンス': '無料／クローズドソース', '主な違い': 'MLX経由でオープンモデルを端末内で実行し、音声・画像入力に対応' },
          { 'アプリ': '[Local AI Chat - pocket](/ja/power-local-llm/local-ai-chat-pocket-review)', '対応機種': 'iPhone、iPad', '価格／ライセンス': 'フリーミアム／クローズドソース', '主な違い': 'オフラインチャットに画像生成とショートカット対応を追加。サブスクリプション販売' },
          { 'アプリ': '[LocalMind](/ja/power-local-llm/localmind-review)', '対応機種': 'Android、iOS', '価格／ライセンス': '無料／MIT', '主な違い': 'Ollama、LM Studio、OpenRouterにも接続できるオープンソースのクライアント。LocalMindAIとは別のアプリ' },
          { 'アプリ': '[AI on Device](/ja/power-local-llm/ai-on-device-review)', '対応機種': 'iPhone、iPad、Mac', '価格／ライセンス': '有料／クローズドソース', '主な違い': 'Apple Intelligence対応端末が必要なオフラインモデルの買い切り型' },
        ],
        note: '競合アプリの情報は頻繁に変わります。最新の価格、ライセンス、対応機種は各アプリの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '応援（投げ銭）はいくらですか？',
            a: '日本のストアでは4種類の任意の応援が表示され、金額は150円、500円、1,000円、3,000円です（米国ストアでは0.99ドル、2.99ドル、5.99ドル、19.99ドル）。どれか1つで広告が恒久的に非表示になります。',
          },
          {
            q: '対応言語は何ですか？',
            a: '掲載情報には、英語、フランス語、ドイツ語、イタリア語、日本語、韓国語、ポルトガル語、スペイン語、簡体字中国語、繁体字中国語が挙げられています。',
          },
          {
            q: 'どのモデルをダウンロードできますか？',
            a: '掲載情報にはQwen3.5、Gemma 4、LFM2.5、llm-jpのほか、ビジョンモデルと思考モードが記載されています。モデルごとのダウンロードサイズは情報源にありません。',
          },
          {
            q: '覚えた内容を削除できますか？',
            a: 'はい。プライバシーポリシーによれば、会話、記憶、資料、ダウンロード済みモデルはアプリ内で削除でき、アプリを削除するとすべてのデータが消去されます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'LocalMindAIは、開発者の説明によればチャット、記憶、資料を端末内にとどめる無料のiPhone・iPad向けコンパニオンアプリです。一方で、公開から数日しかたっておらず、評価がなく、応援するまで広告が表示され、iOS 26が必要で、ソースコードもなく、PromptQuorumは品質と通信の挙動を確認できていません。こうした制約を受け入れられる好奇心のあるiPhoneユーザー向けです。実績のある選択肢を比べたい方は[Locally AI](/ja/power-local-llm/locally-ai-review)、オープンソースを重視する方は[LocalMind](/ja/power-local-llm/localmind-review)をご覧ください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのLocalMindAI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — 説明、バージョン履歴、アプリ内課金、プライバシーラベル（2026年10月24日確認）。',
          '[LocalMindAI公式サイト](https://utsugumi-apps.web.app/localmind/) — 製品概要と開発者の利用規約。',
          '[LocalMindAIのプライバシーポリシー](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — データの扱い、通信、広告の選択（施行日：2026年10月20日）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — MLX経由でオープンモデルを動かすiPhone・iPad・Mac向けアプリ。',
          '[Local AI Chat - pocketレビュー](/ja/power-local-llm/local-ai-chat-pocket-review) — 画像生成に対応したiPhone向けオフラインチャット。',
          '[LocalMindレビュー](/ja/power-local-llm/localmind-review) — 名前が似たオープンソースのAndroid・iOSクライアント。',
          '[iPhone向けローカルLLMアプリ比較](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのまとめ記事。',
          '[ローカルLLMチャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — チャットアプリのカテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-pt.webp',
    title: 'Análise do LocalMindAI: companheiro de IA no iPhone',
    seoTitle: 'Análise do LocalMindAI: companheiro de IA no aparelho',
    intro:
      'O LocalMindAI é um app gratuito para iPhone e iPad que conversa com você, lembra o que você conta e lê os documentos que você adiciona; segundo o desenvolvedor, tudo é processado no aparelho. É um lançamento muito recente (publicado pela primeira vez em 19 de outubro de 2026) de um desenvolvedor individual, por isso esta análise se limita ao que dizem a página da App Store, o site e a política de privacidade, consultados em 24 de outubro de 2026.',
    metaDescription:
      'Análise do LocalMindAI: companheiro de IA gratuito para iPhone e iPad com chat, memória e documentos no aparelho. Modelos, anúncios e dados.',
    twitterDescription:
      'Análise do LocalMindAI: um companheiro de IA gratuito no aparelho para iPhone e iPad. Modelos, anúncios, fluxo de dados e o que as fontes não confirmam.',
    audience:
      'Usuários de iPhone e iPad que querem decidir se testam um app de companheiro de IA no aparelho recém-lançado e precisam saber o que ele exige, quanto custa, o que sai do celular e o que as fontes não confirmam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do LocalMindAI',
    targetKeywords: [
      'análise localmindai',
      'ia no aparelho iphone',
      'companheiro ia offline iphone',
      'chat ia privado ios',
      'conversar com documentos no iphone',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**O LocalMindAI (versão 1.1, lançada em 21 de outubro de 2026) é um app para iPhone e iPad que executa chat, memória, reconhecimento de voz e leitura de documentos no aparelho, usando o modelo integrado da Apple ou modelos abertos que você baixa.** Ele é de código fechado e tem poucos dias, então suas afirmações se apoiam nas páginas do próprio desenvolvedor. O PromptQuorum não o instalou nem o testou; tudo o que está aqui vem da página da App Store, do site do desenvolvedor e da política de privacidade dele.',
    quickAnswerTop: {
      pt: {
        question: 'O LocalMindAI realmente roda no aparelho?',
        answer:
          'Segundo a política de privacidade, sim: conversas, memórias, fotos, gravações de voz e documentos são armazenados e processados apenas no celular. O app, porém, se conecta à internet para baixar modelos, verificar atualizações e exibir anúncios até você deixar uma gorjeta.',
        bullets: [
          'A aba Memória permite revisar, editar ou apagar o que o companheiro lembra.',
          'Os documentos (PDF, arquivos de texto, fotos) alimentam as respostas, e Detalhes da resposta mostra quais páginas foram usadas.',
          'Mensagens de voz são transcritas e o texto das fotos é lido no aparelho.',
          'A interface está disponível em 10 idiomas.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o LocalMindAI?', anchor: 'what-is-localmindai' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados, anúncios e gorjetas', anchor: 'privacy' },
      { label: 'Para quem é', anchor: 'who-should-use' },
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
            text: 'O LocalMindAI é um app gratuito de chat com companheiro para iPhone e iPad cujo desenvolvedor diz que chat, memória e processamento de documentos ficam no aparelho.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala pela App Store, escolhe o modelo da Apple ou baixa um aberto e passa a conversar com um companheiro que você nomeia e molda, e que lembra o que você deixa ele guardar.',
          },
        ],
        items: [
          'Manutenção: a versão 1.1 saiu dois dias após o primeiro lançamento, então nenhum aviso de projeto abandonado se aplica.',
          'Custo: download gratuito; gorjetas opcionais removem os anúncios e não liberam nenhum outro recurso.',
          'Aparelho: exige iOS ou iPadOS 26.0 ou posterior; não há versão para Android nem para desktop.',
          'Modelos: o modelo integrado da Apple em aparelhos compatíveis, ou downloads de cerca de 0.5 a 8 GB cada.',
          'Transparência: código fechado, ainda sem avaliações e um desenvolvedor individual como editor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página da App Store, no site do desenvolvedor e na política de privacidade, consultados em 24 de outubro de 2026. O PromptQuorum não instalou, testou nem mediu o app.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: 'O que é o LocalMindAI?',
        content: [
          '**O LocalMindAI é um app de chat no estilo companheiro: você dá nome a um personagem de IA, define sua personalidade e seu jeito de falar e deixa que ele lembre detalhes entre conversas.** A App Store o classifica em Entretenimento. Uma aba Memória lista o que ele lembra, para você editar ou apagar itens, e um modo contínuo resume as partes mais antigas de uma conversa. Os estilos de conversa são Padrão, Papo leve e Só ouvir.',
          'Um recurso Documentos, adicionado na versão 1.1, permite colocar PDFs, arquivos de texto ou fotos em Memória > Documentos; a IA os consulta ao responder. O app é publicado por HIROTAKA SAKAIDA, cujo site usa o nome [Utsugumi Apps](https://utsugumi-apps.web.app/localmind/); o título na loja muda conforme o país. É um produto diferente do [LocalMind](/pt/power-local-llm/localmind-review), o cliente para Android e iOS do Ollama e do LM Studio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O LocalMindAI é um download comum da App Store para iPhone e iPad; as fontes não mencionam terminal, conta nem cadastro.**',
        ],
        columns: ['Item', 'Detalhes'],
        rows: [
          { 'Item': 'Plataforma', 'Detalhes': 'iPhone e iPad' },
          { 'Item': 'App Store', 'Detalhes': '[LocalMindAI - IA no aparelho](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)' },
          { 'Item': 'Preço', 'Detalhes': 'Grátis; gorjetas opcionais removem os anúncios' },
          { 'Item': 'Site', 'Detalhes': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { 'Item': 'Política de privacidade', 'Detalhes': '[Política de privacidade do LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { 'Item': 'Código-fonte', 'Detalhes': 'Não encontrado' },
        ],
        note: 'Versão analisada: 1.1, lançada em 21 de outubro de 2026 segundo a [página da App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135); o primeiro lançamento foi em 19 de outubro de 2026. A página também mostra compatibilidade com Mac (Apple M1 ou posterior) e visionOS, mas indica que o app foi projetado para iPhone e iPad. O título na loja varia por país, por exemplo «LocalMindAI - Lokale KI» na Alemanha e «LocalMindAI» no Japão.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**A página exige iOS ou iPadOS 26.0 ou posterior, um download de 49.1 MB e espaço adicional para cada modelo que você incluir.**',
        ],
        columns: ['Item', 'O que as fontes dizem'],
        rows: [
          { 'Item': 'Sistema operacional', 'O que as fontes dizem': 'iOS ou iPadOS 26.0 ou posterior' },
          { 'Item': 'Tamanho do app', 'O que as fontes dizem': '49.1 MB antes de baixar modelos' },
          { 'Item': 'Armazenamento de modelos', 'O que as fontes dizem': 'Cerca de 0.5–8 GB por modelo baixado' },
          { 'Item': 'Modelo da Apple', 'O que as fontes dizem': 'Só em aparelhos compatíveis' },
          { 'Item': 'Idade', 'O que as fontes dizem': 'A partir de 16 anos, segundo a página' },
          { 'Item': 'Permissões', 'O que as fontes dizem': 'Microfone, reconhecimento de voz, fotos selecionadas; o rastreamento é opcional' },
        ],
        note: 'As fontes não publicam a RAM necessária nem uma lista de iPhones compatíveis, então não se sabe quais aparelhos conseguem executar os downloads maiores.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a descrição da App Store e as páginas do desenvolvedor; o PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o LocalMindAI pela App Store em um aparelho com iOS ou iPadOS 26.0 ou posterior.',
          },
          {
            title: 'Escolha um modelo',
            whyItMatters: 'Use o modelo integrado da Apple onde houver suporte ou baixe um modelo aberto; o app busca os downloads no Hugging Face.',
          },
          {
            title: 'Molde seu companheiro',
            whyItMatters: 'Dê um nome a ele e defina personalidade, jeito de falar e estilo de conversa.',
          },
          {
            title: 'Revise a memória',
            whyItMatters: 'Abra a aba Memória para conferir, editar ou apagar o que ele lembrou.',
          },
          {
            title: 'Adicione documentos',
            whyItMatters: 'Em Memória > Documentos, adicione PDFs, arquivos de texto ou fotos e veja em Detalhes da resposta quais páginas foram usadas.',
          },
          {
            title: 'Decida sobre os anúncios',
            whyItMatters: 'Os anúncios aparecem até você deixar uma gorjeta; «Opções de privacidade de anúncios» em Ajustes gerencia o consentimento.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da descrição da App Store ou do site do desenvolvedor.**',
        ],
        items: [
          '**Memória do companheiro.** Personalidade, jeito de falar e fatos lembrados persistem entre conversas e podem ser editados na aba Memória.',
          '**Documentos.** É possível adicionar PDFs, arquivos de texto e fotos, e Detalhes da resposta nomeia os documentos e as páginas que a IA usou.',
          '**Modelos.** O modelo no aparelho da Apple em dispositivos compatíveis, mais modelos abertos baixáveis; a página também menciona modelos de visão e um modo de raciocínio.',
          '**Voz e fotos.** Mensagens de voz são transcritas no aparelho, e o texto das fotos é lido no aparelho.',
          '**Comportamento de segurança.** Verificações no aparelho recusam pedidos nocivos, e o app mostra recursos de apoio locais quando o usuário parece estar com dificuldades; segundo os termos, o estilo Só ouvir não é aconselhamento nem terapia.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados, anúncios e gorjetas',
        content: [
          '**Segundo a política de privacidade, conversas, memórias, fotos, gravações de voz e documentos importados são armazenados e processados apenas no aparelho, e o desenvolvedor diz não operar nenhum servidor que os receba.** A política lista três usos de rede: baixar modelos e a lista de modelos do Hugging Face, verificar novas versões pelo GitHub Pages e exibir anúncios do Google AdMob para quem não deixou gorjeta.',
          'O AdMob pode coletar informações do aparelho, um identificador de publicidade (somente se você permitir o rastreamento), a localização aproximada derivada do IP e dados de interação com anúncios, mas a política diz que conversas e memórias nunca são enviadas a anunciantes. O rótulo de privacidade da App Store, preenchido pelo desenvolvedor, lista identificadores e dados de uso como usados para rastreamento. Onde exigido, o app pede consentimento para anúncios personalizados, e os dados do app podem entrar nos backups do iOS, exceto os modelos baixados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do próprio desenvolvedor; o PromptQuorum não auditou o tráfego de rede do app nem confirmou que nada mais sai do aparelho.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Usuários de iPhone com iOS 26** que querem um chat com companheiro gratuito cuja memória fique visível e editável.',
          '**Quem quer fazer perguntas sobre seus próprios PDFs ou fotos** sem que os arquivos saiam do celular, segundo o desenvolvedor.',
          '**Leitores que aceitam anúncios** ou uma pequena gorjeta para desativá-los.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade no uso real.** O PromptQuorum não executou o app, então qualidade das respostas, velocidade, consumo de bateria e precisão da memória não foram avaliados.',
          '**Motor e modelos.** Nenhuma fonte pública cita o motor de inferência nem os arquivos de modelo exatos por trás de cada opção.',
          '**Verificações independentes.** O app ainda não tem avaliações, nem código-fonte, nem uma revisão de terceiros do tráfego de rede ou das verificações de segurança.',
          '**Planos de longo prazo.** Nem a página nem o site indicam um roteiro ou por quanto tempo as atualizações continuarão.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Locally AI](/pt/power-local-llm/locally-ai-review)', 'Plataformas': 'iPhone, iPad, Mac', 'Preço / licença': 'Grátis / código fechado', 'Diferença principal': 'Executa modelos abertos no aparelho via MLX, com entrada de voz e imagem' },
          { 'App': '[Local AI Chat - pocket](/pt/power-local-llm/local-ai-chat-pocket-review)', 'Plataformas': 'iPhone, iPad', 'Preço / licença': 'Freemium / código fechado', 'Diferença principal': 'Chat offline com geração de imagens e Atalhos, vendido por assinatura' },
          { 'App': '[LocalMind](/pt/power-local-llm/localmind-review)', 'Plataformas': 'Android, iOS', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Cliente de código aberto que também se conecta ao Ollama, LM Studio ou OpenRouter; um app diferente do LocalMindAI' },
          { 'App': '[AI on Device](/pt/power-local-llm/ai-on-device-review)', 'Plataformas': 'iPhone, iPad, Mac', 'Preço / licença': 'Pago / código fechado', 'Diferença principal': 'Compra única com modelo offline que exige um aparelho compatível com Apple Intelligence' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto custam as gorjetas?',
            a: 'A loja dos EUA lista quatro gorjetas opcionais: «Coffee for the developer» a US$ 0.99, «Lunch for the developer» a US$ 2.99, «A big cheer» a US$ 5.99 e «Super supporter» a US$ 19.99. Qualquer uma remove os anúncios de forma permanente; na loja brasileira os preços são R$ 6,90, R$ 19,90, R$ 39,90 e R$ 129,90.',
          },
          {
            q: 'Quais idiomas ele aceita?',
            a: 'A página cita inglês, francês, alemão, italiano, japonês, coreano, português, espanhol, chinês simplificado e chinês tradicional.',
          },
          {
            q: 'Quais modelos ele pode baixar?',
            a: 'A página cita Qwen3.5, Gemma 4, LFM2.5 e llm-jp, além de modelos de visão e um modo de raciocínio. As fontes não informam o tamanho de download de cada modelo.',
          },
          {
            q: 'Posso apagar o que ele lembra?',
            a: 'Sim, segundo a política de privacidade: conversas, memórias, documentos e modelos baixados podem ser apagados no app, e excluir o app remove todos os seus dados.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O LocalMindAI é um app gratuito de companheiro para iPhone e iPad que, segundo o desenvolvedor, mantém chats, memória e documentos no aparelho. Em contrapartida, tem apenas alguns dias, não tem avaliações, mostra anúncios até uma gorjeta, exige iOS 26 e não oferece código-fonte, e o PromptQuorum não conseguiu verificar sua qualidade nem seu comportamento de rede. Serve para usuários curiosos de iPhone que aceitem esses limites; quem quer uma opção consolidada pode comparar o [Locally AI](/pt/power-local-llm/locally-ai-review), e quem quer código aberto pode ver o [LocalMind](/pt/power-local-llm/localmind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LocalMindAI na App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — descrição, histórico de versões, compras no app e rótulo de privacidade, consultados em 24 de outubro de 2026.',
          '[Site do LocalMindAI](https://utsugumi-apps.web.app/localmind/) — visão geral do produto e termos do desenvolvedor.',
          '[Política de privacidade do LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — tratamento de dados, uso de rede e opções de anúncios, em vigor desde 20 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — um app para iPhone, iPad e Mac que executa modelos abertos via MLX.',
          '[Análise do Local AI Chat - pocket](/pt/power-local-llm/local-ai-chat-pocket-review) — chat offline para iPhone com geração de imagens.',
          '[Análise do LocalMind](/pt/power-local-llm/localmind-review) — o cliente de código aberto para Android e iOS com nome parecido.',
          '[Melhores apps de LLM local para iPhone](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama para iPhone.',
          '[Assistentes de chat com LLM local: comparativo](/pt/power-local-llm/local-llm-chat-assistants-compared) — o comparativo da categoria de apps de chat.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-ar.webp',
    title: 'مراجعة LocalMindAI: رفيق ذكاء اصطناعي على الجهاز لـ iPhone',
    seoTitle: 'مراجعة LocalMindAI: رفيق ذكاء اصطناعي على iPhone',
    intro:
      'LocalMindAI تطبيق مجاني لـ iPhone وiPad يدردش معك ويتذكر ما تخبره به ويقرأ المستندات التي تضيفها، وتجري معالجة ذلك كله على الجهاز بحسب المطوّر. هو إصدار جديد جدًا (نُشر أول مرة في 19 أكتوبر 2026) من مطوّر فردي، لذلك تقتصر هذه المراجعة على ما تذكره صفحة التطبيق في App Store وموقعه وسياسة الخصوصية، بحسب الاطلاع عليها في 24 أكتوبر 2026.',
    metaDescription:
      'مراجعة LocalMindAI: رفيق ذكاء اصطناعي مجاني لـ iPhone وiPad بدردشة وذاكرة ومستندات على الجهاز. النماذج والإعلانات وتدفق البيانات وما لم يُتحقق منه.',
    twitterDescription:
      'مراجعة LocalMindAI: رفيق ذكاء اصطناعي مجاني على الجهاز لـ iPhone وiPad. النماذج والإعلانات وتدفق البيانات وما لا تؤكده المصادر.',
    audience:
      'مستخدمو iPhone وiPad الذين يقررون تجربة تطبيق جديد كليًا لرفيق ذكاء اصطناعي على الجهاز، ويحتاجون إلى معرفة متطلباته وتكلفته وما يغادر الهاتف وما لا تؤكده المصادر.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة LocalMindAI',
    targetKeywords: [
      'مراجعة localmindai',
      'ذكاء اصطناعي على الجهاز iphone',
      'رفيق ذكاء اصطناعي دون إنترنت iphone',
      'دردشة ذكاء اصطناعي خاصة ios',
      'الدردشة مع المستندات على iphone',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMindAI (الإصدار 1.1، صدر في 21 أكتوبر 2026) تطبيق لـ iPhone وiPad ينفّذ الدردشة والذاكرة والتعرف على الصوت وقراءة المستندات على الجهاز، باستخدام نموذج Apple المدمج أو نماذج مفتوحة تنزّلها.** وهو مغلق المصدر وعمره أيام فقط، لذا تستند مزاعمه إلى صفحات المطوّر نفسه. لم يثبّته PromptQuorum ولم يختبره؛ وكل ما يرد هنا مصدره صفحة App Store وموقع المطوّر وسياسة الخصوصية.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل LocalMindAI فعلًا على الجهاز؟',
        answer:
          'بحسب سياسة الخصوصية، نعم: تُخزَّن المحادثات والذكريات والصور والتسجيلات الصوتية والمستندات وتُعالَج على الهاتف فقط. لكن التطبيق يتصل بالإنترنت لتنزيل النماذج وفحص التحديثات وعرض الإعلانات إلى أن تترك بقشيشًا.',
        bullets: [
          'تتيح لك علامة تبويب الذاكرة مراجعة ما يتذكره الرفيق أو تعديله أو حذفه.',
          'تُستخدم المستندات (PDF وملفات نصية وصور) في الردود، وتُظهر تفاصيل الرد الصفحات التي استُخدمت.',
          'تُفرَّغ الرسائل الصوتية نصيًا ويُقرأ النص داخل الصور على الجهاز.',
          'تتوفر الواجهة بعشر لغات.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو LocalMindAI؟', anchor: 'what-is-localmindai' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات والإعلانات والبقشيش', anchor: 'privacy' },
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
            text: 'LocalMindAI تطبيق دردشة مجاني بأسلوب الرفيق لـ iPhone وiPad، ويقول مطوّره إن الدردشة والذاكرة ومعالجة المستندات تبقى على الجهاز.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من App Store، وتختار نموذج Apple أو تنزّل نموذجًا مفتوحًا، ثم تدردش مع رفيق تسمّيه وتشكّل شخصيته، ويتذكر ما تسمح له بالاحتفاظ به.',
          },
        ],
        items: [
          'الصيانة: صدر الإصدار 1.1 بعد يومين من الإصدار الأول، فلا ينطبق تحذير المشروع المتوقف.',
          'التكلفة: التنزيل مجاني؛ ويزيل البقشيش الاختياري الإعلانات دون فتح أي ميزة أخرى.',
          'الجهاز: يتطلب iOS أو iPadOS 26.0 أو أحدث؛ ولا توجد نسخة لـ Android أو سطح المكتب.',
          'النماذج: نموذج Apple المدمج على الأجهزة المدعومة، أو تنزيلات يبلغ حجم كل منها نحو 0.5 إلى 8 GB.',
          'الشفافية: مغلق المصدر، ولا تقييمات بعد، والناشر مطوّر فردي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة App Store وموقع المطوّر وسياسة الخصوصية، بحسب الاطلاع عليها في 24 أكتوبر 2026. لم يثبّت PromptQuorum التطبيق ولم يختبره أو يقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: 'ما هو LocalMindAI؟',
        content: [
          '**LocalMindAI تطبيق دردشة بأسلوب الرفيق: تسمّي شخصية ذكاء اصطناعي، وتحدد طباعها وأسلوب كلامها، وتدعها تتذكر التفاصيل عبر المحادثات.** يصنّفه App Store ضمن فئة الترفيه. تسرد علامة تبويب الذاكرة ما يتذكره لتعدّل العناصر أو تحذفها، ويلخّص وضع مستمر الأجزاء الأقدم من المحادثة. أساليب المحادثة هي: عادي، ودردشة خفيفة، والإصغاء فقط.',
          'تتيح ميزة المستندات، التي أُضيفت في الإصدار 1.1، وضع ملفات PDF أو ملفات نصية أو صور ضمن الذاكرة > المستندات؛ ويستعين بها الذكاء الاصطناعي عند الرد. ينشر التطبيق HIROTAKA SAKAIDA، ويستخدم موقعه اسم [Utsugumi Apps](https://utsugumi-apps.web.app/localmind/)، ويختلف عنوانه في المتجر باختلاف البلد. وهو منتج مختلف عن [LocalMind](/ar/power-local-llm/localmind-review)، عميل Android وiOS لـ Ollama وLM Studio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**LocalMindAI تنزيل عادي من App Store لـ iPhone وiPad؛ ولا تذكر المصادر طرفية أو حسابًا أو تسجيلًا.**',
        ],
        columns: ['البند', 'التفاصيل'],
        rows: [
          { 'البند': 'المنصة', 'التفاصيل': 'iPhone وiPad' },
          { 'البند': 'App Store', 'التفاصيل': '[LocalMindAI - On-Device AI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)' },
          { 'البند': 'السعر', 'التفاصيل': 'مجاني؛ ويزيل البقشيش الاختياري الإعلانات' },
          { 'البند': 'الموقع', 'التفاصيل': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { 'البند': 'سياسة الخصوصية', 'التفاصيل': '[سياسة خصوصية LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { 'البند': 'الشيفرة المصدرية', 'التفاصيل': 'لم نعثر عليها' },
        ],
        note: 'الإصدار المراجَع: 1.1، صدر في 21 أكتوبر 2026 بحسب [صفحة App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)؛ وكان الإصدار الأول في 19 أكتوبر 2026. تعرض الصفحة أيضًا توافقًا مع Mac (Apple M1 أو أحدث) وvisionOS، لكنها تصف التطبيق بأنه مصمم لـ iPhone وiPad. يختلف عنوان المتجر باختلاف البلد، مثل «LocalMindAI - Lokale KI» في ألمانيا و«LocalMindAI» في اليابان.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**تشترط الصفحة iOS أو iPadOS 26.0 أو أحدث، وتنزيلًا بحجم 49.1 MB، ومساحة إضافية لكل نموذج تضيفه.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'نظام التشغيل', 'ما تقوله المصادر': 'iOS أو iPadOS 26.0 أو أحدث' },
          { 'البند': 'حجم التطبيق', 'ما تقوله المصادر': '49.1 MB قبل تنزيل أي نموذج' },
          { 'البند': 'تخزين النماذج', 'ما تقوله المصادر': 'نحو 0.5–8 GB لكل نموذج منزَّل' },
          { 'البند': 'نموذج Apple', 'ما تقوله المصادر': 'متاح على الأجهزة المدعومة فقط' },
          { 'البند': 'العمر', 'ما تقوله المصادر': '16 عامًا فأكثر بحسب الصفحة' },
          { 'البند': 'الأذونات', 'ما تقوله المصادر': 'الميكروفون، التعرف على الصوت، الصور المحددة؛ والتتبع اختياري' },
        ],
        note: 'لا تنشر المصادر مقدار RAM المطلوب ولا قائمة بأجهزة iPhone المدعومة، لذا لا يُعرف أي الأجهزة يستطيع تشغيل التنزيلات الأكبر.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات وصف App Store وصفحات المطوّر؛ ولم ينفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل LocalMindAI من App Store على جهاز يعمل بنظام iOS أو iPadOS 26.0 أو أحدث.',
          },
          {
            title: 'اختر نموذجًا',
            whyItMatters: 'استخدم نموذج Apple المدمج حيثما كان مدعومًا، أو نزّل نموذجًا مفتوحًا؛ ويجلب التطبيق التنزيلات من Hugging Face.',
          },
          {
            title: 'شكّل رفيقك',
            whyItMatters: 'سمِّ الرفيق وحدد شخصيته وأسلوب كلامه وأسلوب المحادثة.',
          },
          {
            title: 'راجع ذاكرته',
            whyItMatters: 'افتح علامة تبويب الذاكرة لتفحص ما تذكره أو تعدّله أو تحذفه.',
          },
          {
            title: 'أضف مستندات',
            whyItMatters: 'ضمن الذاكرة > المستندات أضف ملفات PDF أو ملفات نصية أو صورًا، ثم راجع تفاصيل الرد لمعرفة الصفحات التي استُخدمت.',
          },
          {
            title: 'قرّر بشأن الإعلانات',
            whyItMatters: 'تظهر الإعلانات إلى أن تترك بقشيشًا؛ ويدير «خيارات خصوصية الإعلانات» في الإعدادات الموافقة.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره وصف App Store أو موقع المطوّر.**',
        ],
        items: [
          '**ذاكرة الرفيق.** تستمر الشخصية وأسلوب الكلام والحقائق المتذكَّرة عبر المحادثات ويمكن تعديلها في علامة تبويب الذاكرة.',
          '**المستندات.** يمكن إضافة ملفات PDF وملفات نصية وصور، وتسمّي تفاصيل الرد المستندات والصفحات التي استخدمها الذكاء الاصطناعي.',
          '**النماذج.** نموذج Apple على الجهاز في الأجهزة المدعومة، إضافة إلى نماذج مفتوحة قابلة للتنزيل؛ وتذكر الصفحة أيضًا نماذج الرؤية ووضع التفكير.',
          '**الصوت والصور.** تُفرَّغ الرسائل الصوتية نصيًا على الجهاز، ويُقرأ النص داخل الصور على الجهاز.',
          '**سلوك الأمان.** تُرفض الطلبات الضارة عبر فحوص على الجهاز، ويعرض التطبيق موارد دعم محلية حين يبدو المستخدم في ضائقة؛ وتقول الشروط إن أسلوب «الإصغاء فقط» ليس استشارة نفسية ولا علاجًا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والإعلانات والبقشيش',
        content: [
          '**بحسب سياسة الخصوصية، تُخزَّن المحادثات والذكريات والصور والتسجيلات الصوتية والمستندات المستوردة وتُعالَج على الجهاز فقط، ويقول المطوّر إنه لا يشغّل أي خادم يستقبلها.** وتذكر السياسة ثلاثة استخدامات للشبكة: تنزيل النماذج وقائمة النماذج من Hugging Face، وفحص الإصدارات الجديدة عبر GitHub Pages، وإعلانات Google AdMob للمستخدمين الذين لم يتركوا بقشيشًا.',
          'قد يجمع AdMob معلومات الجهاز ومعرّف الإعلانات (فقط إذا سمحت بالتتبع) والموقع التقريبي المستنتج من عنوان IP وبيانات التفاعل مع الإعلانات، لكن السياسة تقول إن المحادثات والذكريات لا تُرسل إلى المعلنين أبدًا. وتدرج ملصقة الخصوصية في App Store، التي يملؤها المطوّر، المعرّفات وبيانات الاستخدام ضمن البيانات المستخدمة للتتبع. يُطلب الاستحقاق للإعلانات المخصصة حيث يلزم ذلك، وقد تُدرج بيانات التطبيق في النسخ الاحتياطية لـ iOS باستثناء النماذج المنزَّلة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المطوّر نفسه؛ ولم يدقق PromptQuorum حركة الشبكة للتطبيق ولم يؤكد أن لا شيء آخر يغادر الجهاز.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو iPhone بنظام iOS 26** الذين يريدون دردشة مجانية مع رفيق تبقى ذاكرته مرئية وقابلة للتعديل.',
          '**من يريدون طرح أسئلة عن ملفات PDF أو صورهم الخاصة** دون أن تغادر الملفات الهاتف، بحسب المطوّر.',
          '**القراء الذين يقبلون الإعلانات** أو يدفعون بقشيشًا صغيرًا لإيقافها.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة في الاستخدام الفعلي.** لم يشغّل PromptQuorum التطبيق، لذا لم تُقيَّم جودة الردود ولا السرعة ولا استهلاك البطارية ولا دقة الذاكرة.',
          '**محرك التشغيل والنماذج.** لا يذكر أي مصدر علني محرك الاستدلال ولا ملفات النماذج الدقيقة وراء كل خيار.',
          '**فحوص مستقلة.** لا تقييمات للتطبيق بعد، ولا شيفرة مصدرية، ولا مراجعة من طرف ثالث لحركة شبكته أو فحوص الأمان فيه.',
          '**الخطط بعيدة المدى.** لا تذكر الصفحة ولا الموقع خارطة طريق أو المدة التي ستستمر فيها التحديثات.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          { 'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)', 'المنصات': 'iPhone وiPad وMac', 'السعر / الترخيص': 'مجاني / مغلق المصدر', 'الفرق الرئيسي': 'يشغّل نماذج مفتوحة على الجهاز عبر MLX مع إدخال صوتي ومرئي' },
          { 'التطبيق': '[Local AI Chat - pocket](/ar/power-local-llm/local-ai-chat-pocket-review)', 'المنصات': 'iPhone وiPad', 'السعر / الترخيص': 'مجاني مع اشتراك / مغلق المصدر', 'الفرق الرئيسي': 'دردشة دون إنترنت مع توليد صور واختصارات، ويُباع باشتراك' },
          { 'التطبيق': '[LocalMind](/ar/power-local-llm/localmind-review)', 'المنصات': 'Android وiOS', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الرئيسي': 'عميل مفتوح المصدر يتصل أيضًا بـ Ollama أو LM Studio أو OpenRouter؛ وهو تطبيق مختلف عن LocalMindAI' },
          { 'التطبيق': '[AI on Device](/ar/power-local-llm/ai-on-device-review)', 'المنصات': 'iPhone وiPad وMac', 'السعر / الترخيص': 'مدفوع / مغلق المصدر', 'الفرق الرئيسي': 'شراء لمرة واحدة مع نموذج دون إنترنت يتطلب جهازًا متوافقًا مع Apple Intelligence' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم يكلّف البقشيش؟',
            a: 'يعرض متجر الولايات المتحدة أربعة أنواع اختيارية من البقشيش: «Coffee for the developer» بـ 0.99 دولار، و«Lunch for the developer» بـ 2.99 دولار، و«A big cheer» بـ 5.99 دولار، و«Super supporter» بـ 19.99 دولار. وأي منها يوقف الإعلانات نهائيًا، وتختلف الأسعار في متاجر البلدان الأخرى.',
          },
          {
            q: 'ما اللغات المدعومة؟',
            a: 'تذكر الصفحة الإنجليزية والفرنسية والألمانية والإيطالية واليابانية والكورية والبرتغالية والإسبانية والصينية المبسطة والصينية التقليدية.',
          },
          {
            q: 'ما النماذج التي يمكنه تنزيلها؟',
            a: 'تذكر الصفحة Qwen3.5 وGemma 4 وLFM2.5 وllm-jp، إضافة إلى نماذج الرؤية ووضع التفكير. ولا تعطي المصادر حجم تنزيل كل نموذج.',
          },
          {
            q: 'هل يمكنني حذف ما يتذكره؟',
            a: 'نعم، بحسب سياسة الخصوصية: يمكن حذف المحادثات والذكريات والمستندات والنماذج المنزَّلة داخل التطبيق، وحذف التطبيق يزيل جميع بياناته.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'LocalMindAI تطبيق رفيق مجاني لـ iPhone وiPad يبقي المحادثات والذاكرة والمستندات على الجهاز بحسب مطوّره. في المقابل، عمره أيام فقط، ولا تقييمات له، ويعرض إعلانات إلى أن يُترك بقشيش، ويتطلب iOS 26، ولا يوفر شيفرة مصدرية، ولم يتمكن PromptQuorum من التحقق من جودته أو سلوكه على الشبكة. يناسب مستخدمي iPhone الفضوليين الذين يقبلون هذه الحدود؛ ومن يريد خيارًا راسخًا يمكنه مقارنة [Locally AI](/ar/power-local-llm/locally-ai-review)، ومن يريد شيفرة مفتوحة يمكنه الاطلاع على [LocalMind](/ar/power-local-llm/localmind-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LocalMindAI على App Store](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — الوصف وسجل الإصدارات والمشتريات داخل التطبيق وملصقة الخصوصية، بحسب الاطلاع عليها في 24 أكتوبر 2026.',
          '[موقع LocalMindAI](https://utsugumi-apps.web.app/localmind/) — نظرة عامة على المنتج وشروط المطوّر.',
          '[سياسة خصوصية LocalMindAI](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — معالجة البيانات واستخدام الشبكة وخيارات الإعلانات، سارية من 20 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق لـ iPhone وiPad وMac يشغّل نماذج مفتوحة عبر MLX.',
          '[مراجعة Local AI Chat - pocket](/ar/power-local-llm/local-ai-chat-pocket-review) — دردشة دون إنترنت لـ iPhone مع توليد صور.',
          '[مراجعة LocalMind](/ar/power-local-llm/localmind-review) — عميل Android وiOS مفتوح المصدر باسم مشابه.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — نظرة شاملة على تطبيقات iPhone.',
          '[مقارنة مساعدي الدردشة بنماذج LLM محلية](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة فئة تطبيقات الدردشة.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-zh.webp',
    title: 'LocalMindAI 评测：iPhone 上的设备端 AI 伙伴',
    seoTitle: 'LocalMindAI 评测：iPhone 设备端 AI 伙伴',
    intro:
      'LocalMindAI 是一款免费的 iPhone 和 iPad 应用，可以与你聊天、记住你告诉它的内容并读取你添加的文档，据开发者称，所有处理都在设备上完成。它是个人开发者刚发布的新应用（2026 年 10 月 19 日首次发布），因此本评测只依据其 App Store 页面、官网和隐私政策（2026 年 10 月 24 日查阅）的说法。',
    metaDescription:
      'LocalMindAI 评测：在设备上完成聊天、记忆和文档读取的免费 iPhone/iPad AI 伙伴应用。模型、广告与打赏、数据流向及尚未确认的问题。',
    twitterDescription:
      'LocalMindAI 评测：面向 iPhone 和 iPad 的免费设备端 AI 伙伴。模型、广告、数据流向，以及资料中未确认的内容。',
    audience:
      '正在考虑是否试用全新设备端 AI 伙伴应用的 iPhone 和 iPad 用户，需要了解它的要求、费用、哪些数据会离开手机，以及资料中未经证实的部分。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMindAI 评测',
    targetKeywords: [
      'localmindai 评测',
      'iphone 设备端 ai',
      'iphone 离线 ai 伙伴',
      'ios 私密 ai 聊天',
      'iphone 文档对话',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMindAI（1.1 版，2026 年 10 月 21 日发布）是一款 iPhone 和 iPad 应用，在设备上运行聊天、记忆、语音识别和文档读取，使用苹果内置模型或你下载的开源模型。** 它是闭源应用，上线仅几天，因此其说法依赖开发者自己的页面。PromptQuorum 没有安装或测试过它；这里的每项陈述都来自 App Store 页面、开发者官网及其隐私政策。',
    quickAnswerTop: {
      zh: {
        question: 'LocalMindAI 真的在设备上运行吗？',
        answer:
          '按其隐私政策，是的：聊天、记忆、照片、语音和文档只在手机上存储和处理。不过，应用会联网下载模型、检查更新，并在你打赏之前显示广告。',
        bullets: [
          '在“记忆”标签中可以查看、编辑或删除伙伴记住的内容。',
          '文档（PDF、文本文件、照片）会用于生成回复，“回复详情”会显示用到了哪些页面。',
          '语音消息的转写和照片中的文字识别都在设备上完成。',
          '界面提供 10 种语言。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'LocalMindAI 是什么？', anchor: 'what-is-localmindai' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '系统要求', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '资料已确认的功能', anchor: 'key-features' },
      { label: '数据流向、广告与打赏', anchor: 'privacy' },
      { label: '适合谁', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
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
            text: 'LocalMindAI 是一款免费的 iPhone 和 iPad 伙伴聊天应用，开发者称聊天、记忆和文档处理都留在设备上。',
          },
          {
            type: 'plain-terms',
            text: '从 App Store 安装，选择苹果的模型或下载一个开源模型，然后与你命名并塑造的伙伴聊天，它会记住你允许保留的内容。',
          },
        ],
        items: [
          '维护：1.1 版在首次发布两天后推出，因此不适用项目停更警告。',
          '费用：免费下载；可选打赏会关闭广告，不解锁其他功能。',
          '设备：需要 iOS 或 iPadOS 26.0 及以上；没有 Android 或桌面版本。',
          '模型：受支持设备上的苹果内置模型，或每个约 0.5 至 8 GB 的下载模型。',
          '透明度：闭源、暂无评分，发布者为个人开发者。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据 2026 年 10 月 24 日查阅的 App Store 页面、开发者官网和隐私政策。PromptQuorum 没有安装、测试或对该应用做基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: 'LocalMindAI 是什么？',
        content: [
          '**LocalMindAI 是一款伙伴式聊天应用：你为 AI 角色命名，设定其性格和说话方式，并让它在多次对话间记住细节。** App Store 将其归入“娱乐”类。“记忆”标签会列出它记住的内容，可编辑或删除，连续模式会总结对话中较早的部分。对话风格有“标准”“闲聊”和“只倾听”。',
          '1.1 版新增的“文档”功能允许你把 PDF、文本文件或照片放入“记忆”>“文档”，AI 回复时会参考它们。该应用以 HIROTAKA SAKAIDA 的名义发布，其网站使用 [Utsugumi Apps](https://utsugumi-apps.web.app/localmind/) 这一名称。它与 [LocalMind](/zh/power-local-llm/localmind-review)（面向 Ollama 和 LM Studio 的 Android 与 iOS 客户端）是不同的产品。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**LocalMindAI 是 iPhone 和 iPad 上常规的 App Store 下载应用；资料中没有提到终端、账号或注册。**',
        ],
        columns: ['项目', '详情'],
        rows: [
          { '项目': '平台', '详情': 'iPhone 和 iPad' },
          { '项目': 'App Store', '详情': '[LocalMindAI - On-Device AI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)' },
          { '项目': '价格', '详情': '免费；可选打赏可关闭广告' },
          { '项目': '官网', '详情': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { '项目': '隐私政策', '详情': '[LocalMindAI 隐私政策](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { '项目': '源代码', '详情': '未找到' },
        ],
        note: '评测版本：1.1，据 [App Store 页面](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)于 2026 年 10 月 21 日发布；首次发布为 2026 年 10 月 19 日。页面还显示与 Mac（Apple M1 及以上）和 visionOS 兼容，但标明该应用为 iPhone 和 iPad 设计。应用商店标题因国家而异，例如德国为“LocalMindAI - Lokale KI”，日本为“LocalMindAI”。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**页面要求 iOS 或 iPadOS 26.0 及以上、49.1 MB 的下载量，以及每个新增模型所需的额外空间。**',
        ],
        columns: ['项目', '资料所述'],
        rows: [
          { '项目': '操作系统', '资料所述': 'iOS 或 iPadOS 26.0 及以上' },
          { '项目': '应用大小', '资料所述': '下载模型前为 49.1 MB' },
          { '项目': '模型存储', '资料所述': '每个下载的模型约 0.5–8 GB' },
          { '项目': '苹果模型', '资料所述': '仅在受支持设备上可用' },
          { '项目': '年龄', '资料所述': '页面标注 16 岁及以上' },
          { '项目': '权限', '资料所述': '麦克风、语音识别、所选照片；跟踪为可选' },
        ],
        note: '资料中没有公布内存（RAM）需求，也没有列出受支持的 iPhone 型号，因此哪些设备能运行较大的模型并未说明。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据 App Store 说明和开发者页面；PromptQuorum 没有实际执行。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '在运行 iOS 或 iPadOS 26.0 及以上的设备上，从 App Store 下载 LocalMindAI。',
          },
          {
            title: '选择模型',
            whyItMatters: '在支持的设备上使用苹果内置模型，或下载一个开源模型；应用从 Hugging Face 获取下载内容。',
          },
          {
            title: '塑造你的伙伴',
            whyItMatters: '为伙伴命名，并设定其性格、说话方式和对话风格。',
          },
          {
            title: '查看它的记忆',
            whyItMatters: '打开“记忆”标签，检查、编辑或删除它记住的内容。',
          },
          {
            title: '添加文档',
            whyItMatters: '在“记忆”>“文档”中添加 PDF、文本文件或照片，然后在“回复详情”中查看用到了哪些页面。',
          },
          {
            title: '决定如何处理广告',
            whyItMatters: '在你打赏之前会显示广告；设置中的“广告隐私选项”用于管理同意。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '资料已确认的功能',
        content: [
          '**以下每一项都来自 App Store 说明或开发者官网。**',
        ],
        items: [
          '**伙伴记忆。** 性格、说话方式和记住的事实会跨聊天保留，并可在“记忆”标签中编辑。',
          '**文档。** 可以添加 PDF、文本文件和照片，“回复详情”会列出 AI 用到的文档和页面。',
          '**模型。** 受支持设备上的苹果设备端模型，加上可下载的开源模型；页面还提到视觉模型和思考模式。',
          '**语音与照片。** 语音消息在设备上转写，照片中的文字也在设备上识别。',
          '**安全行为。** 设备端检查会拒绝有害请求，当用户似乎处于困境时，应用会显示本地求助资源；条款称“只倾听”风格不是心理咨询或治疗。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向、广告与打赏',
        content: [
          '**按隐私政策，对话、记忆、照片、语音录音和导入的文档只在设备上存储和处理，开发者称自己没有运营接收这些数据的服务器。** 政策列出三类联网用途：从 Hugging Face 下载模型和模型列表、通过 GitHub Pages 检查新版本，以及向未打赏用户展示 Google AdMob 广告。',
          'AdMob 可能收集设备信息、广告标识符（仅在你允许跟踪时）、根据 IP 地址推算的大致位置以及广告互动数据，但政策称对话和记忆绝不会发送给广告商。由开发者填写的 App Store 隐私标签将标识符和使用数据列为用于跟踪的数据。在法规要求的地区会征求个性化广告的同意；应用数据可能包含在 iOS 备份中，已下载的模型除外。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些都是开发者自己的说法；PromptQuorum 没有审计应用的网络流量，也无法确认没有其他数据离开设备。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁',
        items: [
          '**使用 iOS 26 的 iPhone 用户**，想要一个记忆可见、可编辑的免费伙伴聊天应用。',
          '**想就自己的 PDF 或照片提问的人**，按开发者的说法，文件无需离开手机。',
          '**能接受广告的读者**，或愿意用小额打赏关闭广告的人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际质量。** PromptQuorum 没有运行该应用，因此未评估回复质量、速度、耗电和记忆准确性。',
          '**运行时与模型。** 没有公开资料说明推理引擎，或每个选项背后的具体模型文件。',
          '**独立核查。** 该应用暂无评分、没有源代码，也没有第三方对其网络流量或安全检查的审查。',
          '**长期计划。** 页面和官网都没有说明路线图，或更新会持续多久。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格/许可证', '主要区别'],
        rows: [
          { '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)', '平台': 'iPhone、iPad、Mac', '价格/许可证': '免费/闭源', '主要区别': '通过 MLX 在设备上运行开源模型，支持语音和图像输入' },
          { '应用': '[Local AI Chat - pocket](/zh/power-local-llm/local-ai-chat-pocket-review)', '平台': 'iPhone、iPad', '价格/许可证': '免费增值/闭源', '主要区别': '离线聊天，增加图像生成和快捷指令，按订阅销售' },
          { '应用': '[LocalMind](/zh/power-local-llm/localmind-review)', '平台': 'Android、iOS', '价格/许可证': '免费/MIT', '主要区别': '开源客户端，也可连接 Ollama、LM Studio 或 OpenRouter；与 LocalMindAI 是不同的应用' },
          { '应用': '[AI on Device](/zh/power-local-llm/ai-on-device-review)', '平台': 'iPhone、iPad、Mac', '价格/许可证': '付费/闭源', '主要区别': '一次性购买，离线模型需要支持 Apple Intelligence 的设备' },
        ],
        note: '竞品信息经常变化；请在各应用自己的页面上确认当前的价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '打赏要多少钱？',
            a: '美国商店列出四个可选打赏：“Coffee for the developer”$0.99、“Lunch for the developer”$2.99、“A big cheer”$5.99 和“Super supporter”$19.99。任何一个都会永久关闭广告，其他地区商店的价格不同。',
          },
          {
            q: '支持哪些语言？',
            a: '页面列出英语、法语、德语、意大利语、日语、韩语、葡萄牙语、西班牙语、简体中文和繁体中文。',
          },
          {
            q: '可以下载哪些模型？',
            a: '页面列出 Qwen3.5、Gemma 4、LFM2.5 和 llm-jp，以及视觉模型和思考模式。资料中没有每个模型的下载大小。',
          },
          {
            q: '我能删除它记住的内容吗？',
            a: '可以，按隐私政策：对话、记忆、文档和已下载的模型都能在应用内删除，删除应用会清除其全部数据。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'LocalMindAI 是一款免费的 iPhone 和 iPad 伙伴应用，据开发者称会把聊天、记忆和文档留在设备上。另一方面，它上线仅几天、暂无评分、在打赏前显示广告、需要 iOS 26 且没有源代码，PromptQuorum 也无法核实其质量和网络行为。它适合愿意接受这些限制、乐于尝鲜的 iPhone 用户；想要成熟选择的读者可以比较 [Locally AI](/zh/power-local-llm/locally-ai-review)，想要开源代码的读者可以看看 [LocalMind](/zh/power-local-llm/localmind-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store 上的 LocalMindAI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — 说明、版本历史、应用内购买和隐私标签，2026 年 10 月 24 日查阅。',
          '[LocalMindAI 官网](https://utsugumi-apps.web.app/localmind/) — 产品概述和开发者条款。',
          '[LocalMindAI 隐私政策](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — 数据处理、网络使用和广告选择，2026 年 10 月 20 日生效。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Locally AI 评测](/zh/power-local-llm/locally-ai-review) — 通过 MLX 运行开源模型的 iPhone、iPad 和 Mac 应用。',
          '[Local AI Chat - pocket 评测](/zh/power-local-llm/local-ai-chat-pocket-review) — 带图像生成的 iPhone 离线聊天应用。',
          '[LocalMind 评测](/zh/power-local-llm/localmind-review) — 名称相近的开源 Android 和 iOS 客户端。',
          '[适用于 iPhone 的最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 应用汇总。',
          '[本地 LLM 聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 聊天应用类别对比。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmindai-review-hero-ko.webp',
    title: 'LocalMindAI 리뷰: iPhone용 온디바이스 AI 컴패니언',
    seoTitle: 'LocalMindAI 리뷰: iPhone 온디바이스 AI',
    intro:
      'LocalMindAI는 대화하고, 말한 내용을 기억하며, 추가한 문서를 읽는 무료 iPhone·iPad 앱으로, 개발자에 따르면 모든 처리가 기기 안에서 이루어집니다. 2026년 10월 19일 처음 공개된 개인 개발자의 신작이므로, 이 리뷰는 2026년 10월 24일에 확인한 App Store 페이지, 공식 웹사이트, 개인정보 처리방침의 내용으로 한정합니다.',
    metaDescription:
      'LocalMindAI 리뷰: 기기 안에서 채팅·기억·문서 읽기를 하는 무료 iPhone·iPad AI 컴패니언. 모델, 광고와 응원, 데이터 흐름, 확인하지 못한 점을 정리했습니다.',
    twitterDescription:
      'LocalMindAI 리뷰: iPhone·iPad용 무료 온디바이스 AI 컴패니언. 모델, 광고, 데이터 흐름, 자료가 확인하지 않은 점.',
    audience:
      '새로 나온 온디바이스 AI 컴패니언 앱을 써 볼지 고민하는 iPhone·iPad 사용자로, 필요한 사양, 비용, 기기 밖으로 나가는 정보, 자료가 확인하지 않은 부분을 알고 싶은 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMindAI 리뷰',
    targetKeywords: [
      'localmindai 리뷰',
      'iphone 온디바이스 ai',
      'iphone 오프라인 ai 컴패니언',
      'ios 프라이빗 ai 채팅',
      'iphone 문서 채팅',
      'localmindai app store',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMindAI(버전 1.1, 2026년 10월 21일 출시)는 채팅, 기억, 음성 인식, 문서 읽기를 기기 안에서 실행하는 iPhone·iPad 앱으로, Apple의 내장 모델이나 직접 내려받은 오픈 모델을 사용합니다.** 클로즈드 소스이고 출시 며칠밖에 되지 않아, 주장의 근거는 개발자 본인의 페이지입니다. PromptQuorum은 앱을 설치하거나 테스트하지 않았으며, 여기 적힌 모든 내용은 App Store 페이지, 개발자 웹사이트, 개인정보 처리방침에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'LocalMindAI는 정말 기기 안에서 실행됩니까?',
        answer:
          '개인정보 처리방침에 따르면 그렇습니다. 대화, 기억, 사진, 음성 녹음, 문서는 휴대폰에서만 저장·처리됩니다. 다만 앱은 모델 다운로드, 업데이트 확인, 그리고 응원하기 전까지의 광고 표시를 위해 인터넷에 연결됩니다.',
        bullets: [
          '\'기억\' 탭에서 컴패니언이 기억하는 내용을 확인, 수정, 삭제할 수 있습니다.',
          '문서(PDF, 텍스트 파일, 사진)가 답변에 활용되며, \'답변 상세\'에서 사용된 페이지를 볼 수 있습니다.',
          '음성 메시지 전사와 사진 속 글자 인식은 기기 안에서 이루어집니다.',
          '화면은 10개 언어로 제공됩니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LocalMindAI란?', anchor: 'what-is-localmindai' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '자료로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름, 광고, 응원', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 점', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
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
            text: 'LocalMindAI는 무료 iPhone·iPad 컴패니언 채팅 앱으로, 개발자는 채팅, 기억, 문서 처리가 모두 기기 안에 머문다고 설명합니다.',
          },
          {
            type: 'plain-terms',
            text: 'App Store에서 설치하고 Apple의 모델이나 내려받은 오픈 모델을 고르면, 이름과 성격을 정한 컴패니언과 대화할 수 있고, 기억해도 된다고 허용한 내용을 기억합니다.',
          },
        ],
        items: [
          '유지보수: 버전 1.1은 최초 출시 이틀 뒤에 나왔으므로 방치 프로젝트 경고는 해당하지 않습니다.',
          '비용: 다운로드는 무료이며, 선택 사항인 응원(팁)을 하면 광고가 사라지지만 다른 기능은 열리지 않습니다.',
          '기기: iOS 또는 iPadOS 26.0 이상이 필요하며 Android나 데스크톱 버전은 없습니다.',
          '모델: 지원 기기에서는 Apple 내장 모델, 또는 각각 약 0.5~8GB의 내려받는 모델을 씁니다.',
          '투명성: 클로즈드 소스이고 아직 평점이 없으며, 게시자는 개인 개발자입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 App Store 페이지, 개발자 웹사이트, 개인정보 처리방침을 바탕으로 합니다. PromptQuorum은 이 앱을 설치, 테스트, 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmindai',
        title: 'LocalMindAI란?',
        content: [
          '**LocalMindAI는 AI 캐릭터에 이름을 붙이고, 성격과 말투를 정하고, 대화 사이에 세부 내용을 기억하게 하는 컴패니언형 채팅 앱입니다.** App Store에서는 \'엔터테인먼트\'로 분류됩니다. \'기억\' 탭에는 기억하는 내용이 나열되어 항목을 수정하거나 삭제할 수 있고, 연속 모드는 대화의 오래된 부분을 요약합니다. 대화 스타일은 \'표준\', \'가벼운 대화\', \'듣기만\'입니다.',
          '버전 1.1에서 추가된 \'자료\' 기능은 \'기억\' > \'자료\'에 PDF, 텍스트 파일, 사진을 넣어 두면 AI가 답변할 때 참고합니다. 앱은 HIROTAKA SAKAIDA 명의로 게시되며, 공식 웹사이트는 [Utsugumi Apps](https://utsugumi-apps.web.app/localmind/)라는 이름을 사용합니다. Ollama와 LM Studio용 Android·iOS 클라이언트인 [LocalMind](/ko/power-local-llm/localmind-review)와는 다른 제품입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**LocalMindAI는 iPhone·iPad용 일반 App Store 다운로드 앱이며, 자료에는 터미널, 계정, 가입 절차가 나오지 않습니다.**',
        ],
        columns: ['항목', '세부 내용'],
        rows: [
          { '항목': '플랫폼', '세부 내용': 'iPhone, iPad' },
          { '항목': 'App Store', '세부 내용': '[LocalMindAI - 온디바이스 AI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)' },
          { '항목': '가격', '세부 내용': '무료. 선택 사항인 응원을 하면 광고가 사라집니다' },
          { '항목': '웹사이트', '세부 내용': '[utsugumi-apps.web.app/localmind](https://utsugumi-apps.web.app/localmind/)' },
          { '항목': '개인정보 처리방침', '세부 내용': '[LocalMindAI 개인정보 처리방침](https://ninjya54.github.io/app-pages/localmindai/privacy.html)' },
          { '항목': '소스 코드', '세부 내용': '찾지 못했습니다' },
        ],
        note: '확인한 버전: 1.1. [App Store 페이지](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135)에 따르면 2026년 10월 21일에 출시되었고, 최초 출시는 2026년 10월 19일입니다. 페이지에는 Mac(Apple M1 이상)과 visionOS 호환도 표시되지만 앱은 iPhone과 iPad용으로 설계된 것으로 표기되어 있습니다. 스토어 제목은 국가마다 다르며, 예를 들어 독일에서는 \'LocalMindAI - Lokale KI\', 일본에서는 \'LocalMindAI\'입니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**페이지가 요구하는 것은 iOS 또는 iPadOS 26.0 이상, 49.1MB의 다운로드, 그리고 추가하는 모델마다 필요한 여유 공간입니다.**',
        ],
        columns: ['항목', '자료의 설명'],
        rows: [
          { '항목': '운영체제', '자료의 설명': 'iOS 또는 iPadOS 26.0 이상' },
          { '항목': '앱 크기', '자료의 설명': '모델 다운로드 전 49.1MB' },
          { '항목': '모델 저장 공간', '자료의 설명': '내려받은 모델당 약 0.5~8GB' },
          { '항목': 'Apple 모델', '자료의 설명': '지원 기기에서만 사용 가능' },
          { '항목': '연령', '자료의 설명': '페이지 기준 16세 이상' },
          { '항목': '권한', '자료의 설명': '마이크, 음성 인식, 선택한 사진. 추적은 선택 사항' },
        ],
        note: '자료에는 필요한 RAM 용량이나 지원 iPhone 목록이 없어서, 큰 모델을 어떤 기기에서 실행할 수 있는지는 알 수 없습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 App Store 설명과 개발자 페이지를 따른 것이며, PromptQuorum이 직접 실행해 본 것은 아닙니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'iOS 또는 iPadOS 26.0 이상 기기에서 App Store로 LocalMindAI를 내려받습니다.',
          },
          {
            title: '모델 선택',
            whyItMatters: '지원되는 기기에서는 Apple 내장 모델을 쓰거나 오픈 모델을 내려받습니다. 다운로드는 Hugging Face에서 가져옵니다.',
          },
          {
            title: '컴패니언 설정',
            whyItMatters: '이름을 붙이고 성격, 말투, 대화 스타일을 정합니다.',
          },
          {
            title: '기억 확인',
            whyItMatters: '\'기억\' 탭에서 기억한 내용을 확인, 수정, 삭제합니다.',
          },
          {
            title: '문서 추가',
            whyItMatters: '\'기억\' > \'자료\'에 PDF, 텍스트 파일, 사진을 추가하고 \'답변 상세\'에서 사용된 페이지를 확인합니다.',
          },
          {
            title: '광고 여부 결정',
            whyItMatters: '응원하기 전까지 광고가 표시되며, 설정의 \'광고 개인정보 선택\'에서 동의를 관리합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '자료로 확인된 기능',
        content: [
          '**아래 항목은 모두 App Store 설명 또는 개발자 웹사이트에서 가져왔습니다.**',
        ],
        items: [
          '**컴패니언 기억.** 성격, 말투, 기억한 사실이 대화를 넘어 유지되며 \'기억\' 탭에서 수정할 수 있습니다.',
          '**문서.** PDF, 텍스트 파일, 사진을 추가할 수 있고, \'답변 상세\'에 AI가 사용한 문서와 페이지가 표시됩니다.',
          '**모델.** 지원 기기에서는 Apple의 온디바이스 모델, 그 밖에 내려받는 오픈 모델을 쓸 수 있으며, 페이지에는 비전 모델과 사고 모드도 언급됩니다.',
          '**음성과 사진.** 음성 메시지는 기기 안에서 전사되고, 사진 속 글자도 기기 안에서 인식됩니다.',
          '**안전 동작.** 기기 안의 점검으로 유해한 요청을 거절하고, 사용자가 힘들어 보이면 지역 지원 자료를 보여 줍니다. 약관은 \'듣기만\' 스타일이 상담이나 치료가 아니라고 밝힙니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름, 광고, 응원',
        content: [
          '**개인정보 처리방침에 따르면 대화, 기억, 사진, 음성 녹음, 가져온 문서는 기기 안에서만 저장·처리되며, 개발자는 이를 수신하는 서버를 운영하지 않는다고 밝힙니다.** 방침이 밝힌 네트워크 사용은 세 가지로, Hugging Face에서 모델과 모델 목록 내려받기, GitHub Pages를 통한 버전 확인, 응원하지 않은 사용자에게 보이는 Google AdMob 광고입니다.',
          'AdMob은 기기 정보, 광고 식별자(추적을 허용한 경우에만), IP 주소로 추정한 대략적인 위치, 광고 상호작용 데이터를 수집할 수 있지만, 방침은 대화와 기억이 광고주에게 전송되는 일은 없다고 말합니다. 개발자가 직접 작성한 App Store 개인정보 보호 라벨에는 식별자와 사용 데이터가 추적에 사용되는 데이터로 나열되어 있습니다. 필요한 지역에서는 맞춤 광고 동의를 요청하며, 앱 데이터는 내려받은 모델을 제외하고 iOS 백업에 포함될 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자 본인의 설명입니다. PromptQuorum은 앱의 네트워크 트래픽을 감사하지 않았고, 그 밖에 기기 밖으로 나가는 정보가 없다는 것도 확인하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**iOS 26을 쓰는 iPhone 사용자** 중 기억이 눈에 보이고 수정 가능한 무료 컴패니언 채팅을 원하는 분.',
          '**자신의 PDF나 사진에 대해 질문하고 싶은 분** 중 개발자의 설명대로 파일이 휴대폰 밖으로 나가지 않기를 바라는 분.',
          '**광고를 감수할 수 있는 분**, 또는 소액 응원으로 광고를 끄고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 점',
        items: [
          '**실제 품질.** PromptQuorum이 앱을 실행하지 않았으므로 답변 품질, 속도, 배터리 소모, 기억의 정확도는 평가하지 않았습니다.',
          '**런타임과 모델.** 추론 엔진이나 각 선택지 뒤의 정확한 모델 파일을 밝힌 공개 자료는 없습니다.',
          '**독립적 검증.** 앱에는 아직 평점이 없고 소스 코드도 없으며, 네트워크 트래픽이나 안전 점검에 대한 제3자 검토도 없습니다.',
          '**장기 계획.** 페이지와 웹사이트 어디에도 로드맵이나 업데이트가 언제까지 이어지는지에 대한 설명이 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격/라이선스', '핵심 차이'],
        rows: [
          { '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)', '플랫폼': 'iPhone, iPad, Mac', '가격/라이선스': '무료/클로즈드 소스', '핵심 차이': 'MLX로 오픈 모델을 기기에서 실행하며 음성·이미지 입력 지원' },
          { '앱': '[Local AI Chat - pocket](/ko/power-local-llm/local-ai-chat-pocket-review)', '플랫폼': 'iPhone, iPad', '가격/라이선스': '프리미엄/클로즈드 소스', '핵심 차이': '오프라인 채팅에 이미지 생성과 단축어 지원을 더했으며 구독으로 판매' },
          { '앱': '[LocalMind](/ko/power-local-llm/localmind-review)', '플랫폼': 'Android, iOS', '가격/라이선스': '무료/MIT', '핵심 차이': 'Ollama, LM Studio, OpenRouter에도 연결되는 오픈소스 클라이언트로, LocalMindAI와는 다른 앱' },
          { '앱': '[AI on Device](/ko/power-local-llm/ai-on-device-review)', '플랫폼': 'iPhone, iPad, Mac', '가격/라이선스': '유료/클로즈드 소스', '핵심 차이': 'Apple Intelligence 호환 기기가 필요한 오프라인 모델을 1회 구매로 제공' },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀝니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '응원(팁)은 얼마입니까?',
            a: '미국 스토어에는 선택 사항인 응원이 네 가지 표시됩니다. \'Coffee for the developer\' $0.99, \'Lunch for the developer\' $2.99, \'A big cheer\' $5.99, \'Super supporter\' $19.99입니다. 어느 것이든 광고가 영구적으로 꺼지며, 한국 스토어에서는 가격을 확인하지 못했고 다른 국가 스토어의 가격은 다릅니다.',
          },
          {
            q: '어떤 언어를 지원합니까?',
            a: '페이지에는 영어, 프랑스어, 독일어, 이탈리아어, 일본어, 한국어, 포르투갈어, 스페인어, 중국어 간체와 번체가 나와 있습니다.',
          },
          {
            q: '어떤 모델을 내려받을 수 있습니까?',
            a: '페이지에는 Qwen3.5, Gemma 4, LFM2.5, llm-jp와 함께 비전 모델과 사고 모드가 언급됩니다. 모델별 다운로드 크기는 자료에 없습니다.',
          },
          {
            q: '기억한 내용을 삭제할 수 있습니까?',
            a: '네, 개인정보 처리방침에 따르면 대화, 기억, 문서, 내려받은 모델은 앱 안에서 삭제할 수 있고, 앱을 삭제하면 모든 데이터가 지워집니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LocalMindAI는 개발자의 설명대로라면 채팅, 기억, 문서를 기기 안에 두는 무료 iPhone·iPad 컴패니언 앱입니다. 반면 출시 며칠밖에 되지 않았고, 평점이 없으며, 응원하기 전까지 광고가 나오고, iOS 26이 필요하며, 소스 코드가 없고, PromptQuorum은 품질과 네트워크 동작을 확인하지 못했습니다. 이런 제약을 받아들일 수 있는 호기심 많은 iPhone 사용자에게 어울립니다. 검증된 선택지를 원하면 [Locally AI](/ko/power-local-llm/locally-ai-review)를, 오픈소스를 원하면 [LocalMind](/ko/power-local-llm/localmind-review)를 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 LocalMindAI](https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135) — 설명, 버전 기록, 인앱 구입, 개인정보 보호 라벨. 2026년 10월 24일 확인.',
          '[LocalMindAI 웹사이트](https://utsugumi-apps.web.app/localmind/) — 제품 개요와 개발자 약관.',
          '[LocalMindAI 개인정보 처리방침](https://ninjya54.github.io/app-pages/localmindai/privacy.html) — 데이터 처리, 네트워크 사용, 광고 선택. 2026년 10월 20일 시행.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — MLX로 오픈 모델을 실행하는 iPhone·iPad·Mac 앱.',
          '[Local AI Chat - pocket 리뷰](/ko/power-local-llm/local-ai-chat-pocket-review) — 이미지 생성을 지원하는 iPhone 오프라인 채팅.',
          '[LocalMind 리뷰](/ko/power-local-llm/localmind-review) — 이름이 비슷한 오픈소스 Android·iOS 클라이언트.',
          '[iPhone용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 앱 종합 글.',
          '[로컬 LLM 채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 채팅 앱 카테고리 비교.',
        ],
      },
    },
  },
}
