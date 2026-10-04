// Tina Review: iPhone Client for Ollama, llama.cpp and ComfyUI
// Slug: tina-review
// Companion to: enchanted-review, maid-review, anythingllm-mobile-review, locally-ai-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-en.webp',
    title: 'Tina Review: iPhone Client for Ollama, llama.cpp and ComfyUI',
    seoTitle: 'Tina Review: iPhone Client for Ollama, llama.cpp and ComfyUI',
    intro:
      'Tina is an iPhone and Mac app that chats with models on your own server, in your homelab, or on the device itself, and also drives ComfyUI image generation. This review covers what its App Store listing documents, what is unclear, and how Tina compares to other mobile clients for self-hosted models.',
    metaDescription:
      'Tina review: iPhone and Mac client for your own Ollama, llama.cpp and ComfyUI servers plus on-device models. Pricing, iOS 26 requirement, privacy label, limits, and alternatives.',
    twitterDescription:
      'Tina review: a freemium iOS/macOS client for self-hosted Ollama, llama.cpp and ComfyUI, with on-device models and homelab integrations. Requirements, privacy, limits.',
    audience:
      'iPhone and Mac users who already run (or want to run) Ollama, llama.cpp or ComfyUI at home and want a native client for it — covers connections, pricing, requirements, privacy, limits, and alternatives.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Tina review',
    targetKeywords: [
      'tina review',
      'tina private local ai',
      'tina ollama ios app',
      'ollama client iphone',
      'llama.cpp ios client',
      'comfyui iphone app',
      'homelab ai app ios',
      'self-hosted llm mobile client',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Tina is a freemium, closed-source Apple app that connects to models you host yourself (Ollama, llama.cpp), generates images through ComfyUI, and can also run models on the device.** Per its App Store listing it needs iOS, macOS or visionOS 26.0 or later, costs nothing to download, and sells Tina Pro at $1.99 and a $12.99 yearly option as in-app purchases. This review covers version 1.3.8 and is based on the public listing, not hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is Tina worth installing if I run Ollama at home?',
        answer:
          'Yes, if you want one native app that talks to Ollama or llama.cpp, drives ComfyUI, and ties into Home Assistant or Proxmox, and you are on iOS 26 or macOS 26. Skip it if you need open source or Android: the code is not public and only Apple platforms are listed. Enchanted is the free open-source alternative for Ollama on iOS.',
        bullets: [
          'Free download with in-app purchases: Tina Pro $1.99 and a $12.99 yearly option.',
          'Connects to Ollama, llama.cpp and on-device models; image generation via ComfyUI with a node editor.',
          'Integrations listed for Home Assistant, Firecrawl, Proxmox and RunPod.',
          'Needs iOS, macOS (Apple silicon) or visionOS 26.0 or later.',
          'Closed source; the privacy label lists usage and diagnostics data, not linked to you.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Tina', anchor: 'get-it' },
      { label: 'Tina at a Glance', anchor: 'at-a-glance' },
      { label: 'What Tina Is', anchor: 'what-is-tina' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features and Integrations', anchor: 'features' },
      { label: 'Device Requirements', anchor: 'requirements' },
      { label: 'Pricing and Privacy', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Tina vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Tina', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Tina', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tina, by developer Wes Wickwire, is a freemium Apple-platform client that chats with your own Ollama or llama.cpp server, generates images through ComfyUI, and also runs on-device models.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a remote control for the AI you host at home, with a small on-device option added: the heavy models stay on your server, and the app on your phone is the interface.',
          },
        ],
        items: [
          'Version reviewed: 1.3.8, as shown on the [App Store listing](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571).',
          'Price: free to download; Tina Pro $1.99 and a $12.99 yearly option are listed as in-app purchases.',
          'Connections: Ollama, llama.cpp, on-device models and ComfyUI, plus Home Assistant, Firecrawl, Proxmox and RunPod integrations.',
          'Platform: iPhone, Mac with Apple silicon, and Apple Vision Pro, all on version 26.0 or later.',
          'Openness: closed source; no public repository or product site was found.',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: 'Get Tina',
        content: [
          '**Tina is distributed through the Apple App Store.** The download is 56.3 MB and the listing is rated 4+.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which lists Tina alongside other mobile and desktop local AI tools.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Apple App Store',
            'Get It': '[Tina - Private Local AI on the App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            'Channel': 'Privacy policy',
            'Get It': '[Tina privacy policy](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: 'No dedicated product website or source repository was found for Tina. The App Store listing is the main public source.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tina at a Glance',
        columns: ['Attribute', 'Tina'],
        rows: [
          { 'Attribute': 'Platform', 'Tina': 'iOS, macOS, visionOS (26.0+)' },
          { 'Attribute': 'Price', 'Tina': 'Free, in-app purchases' },
          { 'Attribute': 'License', 'Tina': 'Closed source' },
          { 'Attribute': 'Runs fully offline', 'Tina': 'On-device models only; server mode needs a link' },
          { 'Attribute': 'Built-in engine', 'Tina': 'Yes, on-device models are listed' },
          { 'Attribute': 'Works with Ollama', 'Tina': 'Yes' },
          { 'Attribute': 'Image generation', 'Tina': 'Yes, via ComfyUI with a node editor' },
          { 'Attribute': 'Voice input / output', 'Tina': 'Yes, voice and text-to-speech' },
        ],
        note: 'Attributes follow the mobile-chat comparison used in the Local LLM Software Directory. They come from the App Store listing alone, which does not cover every feature.',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'What Tina Is',
        content: [
          '**Tina is a client first and an on-device runner second.** The listing\'s pitch is "connect to local models: your own server, on your device, or your homelab", with Ollama, llama.cpp and on-device models named as sources.',
          'It is published by Wes Wickwire, an individual developer, and is categorized as a Utility. No inference engine for the on-device models is named, so this review does not state which runtime it uses.',
          'This review draws on the App Store listing only. It does not include hands-on testing, so speed, stability and answer quality are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an App Store install, then pointing the app at a server or a model.** The listing does not document the first-run flow, so the steps below follow what it states.',
        ],
        numberedItems: [
          {
            title: 'Check your OS version',
            whyItMatters: 'The listing requires iOS, macOS or visionOS 26.0 or later, and on Mac an Apple M1 chip or newer.',
          },
          {
            title: 'Install Tina',
            whyItMatters: 'Get it from the [App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571); the download is 56.3 MB.',
          },
          {
            title: 'Connect a model source',
            whyItMatters: 'Add your Ollama or llama.cpp server address, or choose an on-device model, depending on where you want inference to run.',
          },
          {
            title: 'Optional: add ComfyUI and integrations',
            whyItMatters: 'Link a ComfyUI instance for image generation, and Home Assistant, Firecrawl, Proxmox or RunPod if you use them.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features and Integrations',
        content: [
          '**Tina\'s selling point is reach: one app for chat, images and homelab tools.** Everything below comes from the App Store listing.',
        ],
        items: [
          '**Chat with LLMs.** Talk to models served by Ollama or llama.cpp, or to models on the device.',
          '**ComfyUI image generation.** The listing describes full ComfyUI support with a node editor inside the app.',
          '**Voice.** Voice and text-to-speech support are listed.',
          '**Homelab integrations.** Home Assistant, Firecrawl, Proxmox and RunPod are named; the listing gives no detail on what each integration can do.',
          '**Multiple Apple platforms.** One listing covers iPhone, Mac and Apple Vision Pro.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Device Requirements',
        content: [
          '**Tina requires version 26.0 or later of iOS, macOS or visionOS, and an Apple M1 chip or newer on Mac.** The listing gives no RAM figure.',
          'Where inference runs decides the real hardware need. With a remote Ollama or llama.cpp server the phone only needs to show the chat; with on-device models, the iPhone\'s memory is the limit.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Pricing and Privacy',
        content: [
          '**Tina is free to download, with Tina Pro at $1.99 and a yearly option at $12.99 listed as in-app purchases.** The listing does not say which features Pro unlocks, so check the paywall in the app before relying on a feature.',
          'Apple\'s privacy section says Tina collects usage data and diagnostics (crash and performance data) that are not linked to your identity. Apple notes these labels are self-reported by the developer and not verified.',
          'Chats sent to your own server travel to that server, so your privacy there depends on how you host and secure it. The app is closed source and this review did not inspect network traffic.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Bring your own server',
            'What it means in real use': 'Run large models on a home machine and chat from the phone.',
            'Limitation / caveat': 'You must set up and expose Ollama or llama.cpp yourself.',
          },
          {
            'Benefit': 'ComfyUI built in',
            'What it means in real use': 'Chat and image generation live in one app, including a node editor.',
            'Limitation / caveat': 'It needs your own ComfyUI instance; the listing does not name supported workflows.',
          },
          {
            'Benefit': 'On-device option',
            'What it means in real use': 'Some chats work without any server.',
            'Limitation / caveat': 'No model list, size or runtime is published for the on-device mode.',
          },
          {
            'Benefit': 'Low entry price',
            'What it means in real use': 'Free to try; Pro is $1.99 as listed.',
            'Limitation / caveat': 'The listing does not explain what Pro adds, or whether $1.99 is one-time.',
          },
          {
            'Benefit': 'Apple-wide support',
            'What it means in real use': 'One purchase path covers iPhone, Mac and Vision Pro.',
            'Limitation / caveat': 'Everything requires version 26; there is no Android or Windows app.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Model source', 'Key difference'],
        rows: [
          {
            'App': 'Tina',
            'Platforms': 'iOS, Mac, Vision Pro',
            'Price and license': 'Freemium, closed source',
            'Model source': 'Ollama, llama.cpp, on-device',
            'Key difference': 'Adds ComfyUI images and homelab integrations; not open source',
          },
          {
            'App': '[Enchanted](/power-local-llm/enchanted-review)',
            'Platforms': 'iOS, Mac',
            'Price and license': 'Free, Apache 2.0',
            'Model source': 'Ollama',
            'Key difference': 'Open-source Ollama client with no built-in engine of its own',
          },
          {
            'App': '[Maid](/power-local-llm/maid-review)',
            'Platforms': 'Android, iOS',
            'Price and license': 'Free, MIT',
            'Model source': 'On-device, Ollama, OpenAI API',
            'Key difference': 'Open source and on Android too; ComfyUI not listed',
          },
          {
            'App': '[AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review)',
            'Platforms': 'iOS, Android',
            'Price and license': 'Free, MIT',
            'Model source': 'Your AnythingLLM workspace',
            'Key difference': 'Remote access to one AnythingLLM instance rather than raw model servers',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Tina',
        items: [
          '**Homelab owners who run Ollama or llama.cpp.** Tina is built around connecting to those servers from an Apple device.',
          '**ComfyUI users who want mobile access.** The node editor and generation controls are part of the app.',
          '**Users who want a server and an on-device fallback in one app.** Both modes are listed.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Tina',
        items: [
          '**Anyone who needs open source.** The code is not public; [Enchanted](/power-local-llm/enchanted-review) is open source for Ollama.',
          '**Android or Windows users.** Only Apple platforms are listed; [Maid](/power-local-llm/maid-review) covers Android.',
          '**People below iOS or macOS 26.** The listing requires version 26.0 or later.',
          '**Anyone without a server who wants a model catalogue.** The on-device mode has no published model list; see [Locally AI](/power-local-llm/locally-ai-review).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Tina free?',
            a: 'It is free to download with in-app purchases: Tina Pro at $1.99 and a yearly option at $12.99, as shown on the App Store listing.',
          },
          {
            q: 'Who makes Tina?',
            a: 'Wes Wickwire, an individual developer listed on the App Store. A GitHub profile of the same name hosts open-source Swift libraries, but no Tina repository.',
          },
          {
            q: 'Do I need my own server to use Tina?',
            a: 'No, the listing also names on-device models. A server is only needed for Ollama, llama.cpp and ComfyUI features.',
          },
          {
            q: 'Does Tina work on Android?',
            a: 'No. The listing covers iPhone, Mac with Apple silicon and Apple Vision Pro only.',
          },
          {
            q: 'Which integrations does Tina list?',
            a: 'Home Assistant, Firecrawl, Proxmox and RunPod. The listing gives no detail on how each one works.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Tina is a good fit on paper for someone who already hosts models at home and wants a single native Apple app for chat, ComfyUI images and a few homelab hooks, with an on-device fallback.',
          'The caveats are transparency and age: it is closed source, the on-device engine and Pro features are undocumented, and the only public source is the App Store listing, which showed three ratings at the time of review.',
          'If you run Ollama and want open source, start with [Enchanted](/power-local-llm/enchanted-review). If you want ComfyUI and homelab integrations in the same app, try Tina\'s free tier first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Tina - Private Local AI on the App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — version, price, requirements, features and privacy section.',
          '[Tina privacy policy](https://wickwirew.github.io/site/privacypolicy) — policy page linked from the listing.',
          '[wickwirew on GitHub](https://github.com/wickwirew) — developer profile, checked for a public Tina repository.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Enchanted Review](/power-local-llm/enchanted-review) — the open-source Ollama client for iOS and Mac.',
          '[Maid Review](/power-local-llm/maid-review) — an open-source mobile client for local and remote models.',
          '[AnythingLLM Mobile Review](/power-local-llm/anythingllm-mobile-review) — remote access to your AnythingLLM workspace.',
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a freemium on-device app for iOS and Mac.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-de.webp',
    title: 'Tina-Rezension: iPhone-Client für Ollama, llama.cpp und ComfyUI',
    seoTitle: 'Tina-Rezension: iPhone-Client für Ollama, llama.cpp und ComfyUI',
    intro:
      'Tina ist eine iPhone- und Mac-App, die mit Modellen auf Ihrem eigenen Server, in Ihrem Homelab oder auf dem Gerät selbst chattet und zusätzlich die Bildgenerierung mit ComfyUI steuert. Diese Rezension beschreibt, was der App-Store-Eintrag dokumentiert, was unklar bleibt und wie Tina im Vergleich zu anderen mobilen Clients für selbst gehostete Modelle abschneidet.',
    metaDescription:
      'Tina-Rezension: iPhone- und Mac-Client für Ihre eigenen Ollama-, llama.cpp- und ComfyUI-Server sowie On-Device-Modelle. Preise, iOS-26-Voraussetzung, Datenschutzangaben, Grenzen und Alternativen.',
    twitterDescription:
      'Tina-Rezension: ein Freemium-Client für iOS/macOS für selbst gehostetes Ollama, llama.cpp und ComfyUI, mit On-Device-Modellen und Homelab-Integrationen. Anforderungen, Datenschutz, Grenzen.',
    audience:
      'iPhone- und Mac-Nutzer, die Ollama, llama.cpp oder ComfyUI zu Hause betreiben (oder betreiben möchten) und dafür einen nativen Client suchen — behandelt Verbindungen, Preise, Anforderungen, Datenschutz, Grenzen und Alternativen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Tina Rezension',
    targetKeywords: [
      'tina test',
      'tina private local ai',
      'tina ollama ios app',
      'ollama client iphone',
      'llama.cpp ios client',
      'comfyui iphone app',
      'homelab ki app ios',
      'selbst gehosteter llm client mobil',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Tina ist eine nicht quelloffene Freemium-App für Apple-Plattformen, die sich mit Modellen verbindet, die Sie selbst hosten (Ollama, llama.cpp), Bilder über ComfyUI erzeugt und Modelle auch auf dem Gerät ausführen kann.** Laut App-Store-Eintrag setzt sie iOS, macOS oder visionOS 26.0 oder neuer voraus, kostet im Download nichts und bietet Tina Pro für $1.99 sowie eine jährliche Option für $12.99 als In-App-Käufe an. Diese Rezension behandelt Version 1.3.8 und beruht auf dem öffentlichen Eintrag, nicht auf praktischen Tests.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich Tina, wenn ich zu Hause Ollama betreibe?',
        answer:
          'Ja, wenn Sie eine native App möchten, die mit Ollama oder llama.cpp spricht, ComfyUI steuert und sich mit Home Assistant oder Proxmox verbindet, und Sie iOS 26 oder macOS 26 nutzen. Verzichten Sie darauf, wenn Sie Open Source oder Android brauchen: Der Code ist nicht öffentlich, und es sind nur Apple-Plattformen gelistet. Enchanted ist die kostenlose, quelloffene Alternative für Ollama unter iOS.',
        bullets: [
          'Kostenloser Download mit In-App-Käufen: Tina Pro für $1.99 und eine jährliche Option für $12.99.',
          'Verbindet sich mit Ollama, llama.cpp und On-Device-Modellen; Bildgenerierung über ComfyUI mit Node-Editor.',
          'Gelistete Integrationen: Home Assistant, Firecrawl, Proxmox und RunPod.',
          'Benötigt iOS, macOS (Apple silicon) oder visionOS 26.0 oder neuer.',
          'Nicht quelloffen; die Datenschutzangabe listet Nutzungs- und Diagnosedaten, die nicht mit Ihnen verknüpft sind.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Tina herunterladen', anchor: 'get-it' },
      { label: 'Tina im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Tina ist', anchor: 'what-is-tina' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen und Integrationen', anchor: 'features' },
      { label: 'Geräteanforderungen', anchor: 'requirements' },
      { label: 'Preise und Datenschutz', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Tina vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer Tina nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer Tina nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tina des Entwicklers Wes Wickwire ist ein Freemium-Client für Apple-Plattformen, der mit Ihrem eigenen Ollama- oder llama.cpp-Server chattet, Bilder über ComfyUI erzeugt und auch On-Device-Modelle ausführt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Fernbedienung für die KI vor, die Sie zu Hause hosten, ergänzt um eine kleine On-Device-Option: Die schweren Modelle bleiben auf Ihrem Server, und die App auf Ihrem Smartphone ist die Oberfläche.',
          },
        ],
        items: [
          'Getestete Version: 1.3.8, wie im [App-Store-Eintrag](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) angezeigt.',
          'Preis: kostenloser Download; Tina Pro für $1.99 und eine jährliche Option für $12.99 sind als In-App-Käufe gelistet.',
          'Verbindungen: Ollama, llama.cpp, On-Device-Modelle und ComfyUI sowie die Integrationen Home Assistant, Firecrawl, Proxmox und RunPod.',
          'Plattform: iPhone, Mac mit Apple silicon und Apple Vision Pro, jeweils ab Version 26.0.',
          'Offenheit: nicht quelloffen; weder ein öffentliches Repository noch eine Produkt-Website wurde gefunden.',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: 'Tina herunterladen',
        content: [
          '**Tina wird über den Apple App Store vertrieben.** Der Download umfasst 56,3 MB, und der Eintrag ist ab 4 Jahren eingestuft.',
          'Diese Rezension ist ein Begleitartikel zum [Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) von PromptQuorum, das Tina neben anderen mobilen und Desktop-Tools für lokale KI listet.',
        ],
        columns: ['Kanal', 'Download'],
        rows: [
          {
            'Kanal': 'Apple App Store',
            'Download': '[Tina - Private Local AI im App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            'Kanal': 'Datenschutzerklärung',
            'Download': '[Datenschutzerklärung von Tina](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: 'Für Tina wurde weder eine eigene Produkt-Website noch ein Quellcode-Repository gefunden. Der App-Store-Eintrag ist die wichtigste öffentliche Quelle.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tina im Überblick',
        columns: ['Merkmal', 'Tina'],
        rows: [
          { 'Merkmal': 'Plattform', 'Tina': 'iOS, macOS, visionOS (26.0+)' },
          { 'Merkmal': 'Preis', 'Tina': 'Kostenlos, In-App-Käufe' },
          { 'Merkmal': 'Lizenz', 'Tina': 'Closed Source' },
          { 'Merkmal': 'Läuft vollständig offline', 'Tina': 'Nur On-Device-Modelle; Servermodus braucht Verbindung' },
          { 'Merkmal': 'Eigene Engine integriert', 'Tina': 'Ja, On-Device-Modelle sind gelistet' },
          { 'Merkmal': 'Funktioniert mit Ollama', 'Tina': 'Ja' },
          { 'Merkmal': 'Bildgenerierung', 'Tina': 'Ja, über ComfyUI mit Node-Editor' },
          { 'Merkmal': 'Spracheingabe / -ausgabe', 'Tina': 'Ja, Sprache und Text-to-Speech' },
        ],
        note: 'Die Merkmale folgen dem Vergleichsschema für mobile Chat-Apps im Verzeichnis lokaler LLM-Software. Sie stammen allein aus dem App-Store-Eintrag, der nicht jede Funktion abdeckt.',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'Was Tina ist',
        content: [
          '**Tina ist zuerst ein Client und erst in zweiter Linie ein On-Device-Runner.** Das Versprechen im Eintrag lautet „connect to local models: your own server, on your device, or your homelab", wobei Ollama, llama.cpp und On-Device-Modelle als Quellen genannt werden.',
          'Veröffentlicht wird sie von Wes Wickwire, einem Einzelentwickler, und ist als Dienstprogramm (Utility) kategorisiert. Für die On-Device-Modelle wird keine Inferenz-Engine genannt, daher macht diese Rezension keine Angabe dazu, welche Laufzeit zum Einsatz kommt.',
          'Diese Rezension stützt sich ausschließlich auf den App-Store-Eintrag. Praktische Tests auf einem Gerät sind nicht enthalten, daher werden Geschwindigkeit, Stabilität und Antwortqualität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einer Installation über den App Store und anschließend dem Verweis der App auf einen Server oder ein Modell.** Der Eintrag dokumentiert den ersten Start nicht, daher folgen die Schritte unten dem, was er angibt.',
        ],
        numberedItems: [
          {
            title: 'Betriebssystemversion prüfen',
            whyItMatters: 'Der Eintrag setzt iOS, macOS oder visionOS 26.0 oder neuer voraus, auf dem Mac außerdem einen Apple-M1-Chip oder neuer.',
          },
          {
            title: 'Tina installieren',
            whyItMatters: 'Laden Sie die App im [App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) herunter; der Download umfasst 56,3 MB.',
          },
          {
            title: 'Eine Modellquelle verbinden',
            whyItMatters: 'Tragen Sie die Adresse Ihres Ollama- oder llama.cpp-Servers ein oder wählen Sie ein On-Device-Modell, je nachdem, wo die Inferenz laufen soll.',
          },
          {
            title: 'Optional: ComfyUI und Integrationen hinzufügen',
            whyItMatters: 'Verknüpfen Sie eine ComfyUI-Instanz für die Bildgenerierung sowie Home Assistant, Firecrawl, Proxmox oder RunPod, sofern Sie diese nutzen.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen und Integrationen',
        content: [
          '**Tinas Stärke ist die Reichweite: eine App für Chat, Bilder und Homelab-Tools.** Alles Folgende stammt aus dem App-Store-Eintrag.',
        ],
        items: [
          '**Chat mit LLMs.** Sprechen Sie mit Modellen, die Ollama oder llama.cpp bereitstellt, oder mit Modellen auf dem Gerät.',
          '**Bildgenerierung mit ComfyUI.** Der Eintrag beschreibt volle ComfyUI-Unterstützung mit einem Node-Editor in der App.',
          '**Sprache.** Sprachunterstützung und Text-to-Speech sind gelistet.',
          '**Homelab-Integrationen.** Home Assistant, Firecrawl, Proxmox und RunPod werden genannt; der Eintrag gibt keine Details dazu, was die einzelnen Integrationen können.',
          '**Mehrere Apple-Plattformen.** Ein Eintrag deckt iPhone, Mac und Apple Vision Pro ab.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Geräteanforderungen',
        content: [
          '**Tina setzt Version 26.0 oder neuer von iOS, macOS oder visionOS voraus, auf dem Mac außerdem einen Apple-M1-Chip oder neuer.** Der Eintrag nennt keinen RAM-Wert.',
          'Wo die Inferenz läuft, bestimmt den tatsächlichen Hardwarebedarf. Mit einem entfernten Ollama- oder llama.cpp-Server muss das Smartphone nur den Chat anzeigen; bei On-Device-Modellen ist der Arbeitsspeicher des iPhones die Grenze.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preise und Datenschutz',
        content: [
          '**Tina lässt sich kostenlos herunterladen; Tina Pro für $1.99 und eine jährliche Option für $12.99 sind als In-App-Käufe gelistet.** Der Eintrag sagt nicht, welche Funktionen Pro freischaltet, prüfen Sie daher die Paywall in der App, bevor Sie sich auf eine Funktion verlassen.',
          'Apples Datenschutzabschnitt besagt, dass Tina Nutzungsdaten und Diagnosedaten (Absturz- und Leistungsdaten) erhebt, die nicht mit Ihrer Identität verknüpft sind. Apple weist darauf hin, dass diese Angaben vom Entwickler selbst gemeldet und nicht überprüft werden.',
          'Chats, die an Ihren eigenen Server gesendet werden, gehen an diesen Server, Ihr Datenschutz hängt dort also davon ab, wie Sie ihn hosten und absichern. Die App ist nicht quelloffen, und diese Rezension hat den Netzwerkverkehr nicht untersucht.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Eigener Server nutzbar',
            'Bedeutung im Alltag': 'Große Modelle laufen auf einem Rechner zu Hause, Sie chatten vom Smartphone aus.',
            'Einschränkung / Hinweis': 'Ollama oder llama.cpp müssen Sie selbst einrichten und erreichbar machen.',
          },
          {
            'Vorteil': 'ComfyUI integriert',
            'Bedeutung im Alltag': 'Chat und Bildgenerierung in einer App, einschließlich Node-Editor.',
            'Einschränkung / Hinweis': 'Sie brauchen eine eigene ComfyUI-Instanz; der Eintrag nennt keine unterstützten Workflows.',
          },
          {
            'Vorteil': 'On-Device-Option',
            'Bedeutung im Alltag': 'Manche Chats funktionieren ganz ohne Server.',
            'Einschränkung / Hinweis': 'Für den On-Device-Modus sind weder Modellliste noch Größe noch Laufzeit veröffentlicht.',
          },
          {
            'Vorteil': 'Niedriger Einstiegspreis',
            'Bedeutung im Alltag': 'Kostenlos zum Ausprobieren; Pro kostet laut Eintrag $1.99.',
            'Einschränkung / Hinweis': 'Der Eintrag erklärt nicht, was Pro ergänzt oder ob $1.99 eine Einmalzahlung ist.',
          },
          {
            'Vorteil': 'Unterstützung quer durch Apple',
            'Bedeutung im Alltag': 'Ein Kaufweg deckt iPhone, Mac und Vision Pro ab.',
            'Einschränkung / Hinweis': 'Alles setzt Version 26 voraus; es gibt keine Android- oder Windows-App.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Modellquelle', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'Tina',
            'Plattformen': 'iOS, Mac, Vision Pro',
            'Preis und Lizenz': 'Freemium, Closed Source',
            'Modellquelle': 'Ollama, llama.cpp, On-Device',
            'Wichtigster Unterschied': 'Ergänzt ComfyUI-Bilder und Homelab-Integrationen; nicht quelloffen',
          },
          {
            'App': '[Enchanted](/de/power-local-llm/enchanted-review)',
            'Plattformen': 'iOS, Mac',
            'Preis und Lizenz': 'Kostenlos, Apache 2.0',
            'Modellquelle': 'Ollama',
            'Wichtigster Unterschied': 'Quelloffener Ollama-Client ohne eigene integrierte Engine',
          },
          {
            'App': '[Maid](/de/power-local-llm/maid-review)',
            'Plattformen': 'Android, iOS',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Modellquelle': 'On-Device, Ollama, OpenAI API',
            'Wichtigster Unterschied': 'Quelloffen und auch für Android; ComfyUI nicht gelistet',
          },
          {
            'App': '[AnythingLLM Mobile](/de/power-local-llm/anythingllm-mobile-review)',
            'Plattformen': 'iOS, Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Modellquelle': 'Ihr AnythingLLM-Workspace',
            'Wichtigster Unterschied': 'Fernzugriff auf eine AnythingLLM-Instanz statt auf reine Modellserver',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Apps Dritter ändern sich häufig. Prüfen Sie die aktuellen Details im jeweiligen App-Eintrag, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer Tina nutzen sollte',
        items: [
          '**Homelab-Betreiber, die Ollama oder llama.cpp einsetzen.** Tina ist darauf ausgelegt, sich von einem Apple-Gerät aus mit diesen Servern zu verbinden.',
          '**ComfyUI-Nutzer, die mobilen Zugriff wollen.** Der Node-Editor und die Generierungssteuerung sind Teil der App.',
          '**Nutzer, die Server und On-Device-Ausweichlösung in einer App wollen.** Beide Modi sind gelistet.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer Tina nicht nutzen sollte',
        items: [
          '**Alle, die Open Source brauchen.** Der Code ist nicht öffentlich; [Enchanted](/de/power-local-llm/enchanted-review) ist quelloffen für Ollama.',
          '**Android- oder Windows-Nutzer.** Es sind nur Apple-Plattformen gelistet; [Maid](/de/power-local-llm/maid-review) deckt Android ab.',
          '**Nutzer mit iOS oder macOS unter Version 26.** Der Eintrag setzt Version 26.0 oder neuer voraus.',
          '**Alle ohne Server, die einen Modellkatalog wollen.** Für den On-Device-Modus ist keine Modellliste veröffentlicht; siehe [Locally AI](/de/power-local-llm/locally-ai-review).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Tina kostenlos?',
            a: 'Der Download ist kostenlos, mit In-App-Käufen: Tina Pro für $1.99 und eine jährliche Option für $12.99, wie im App-Store-Eintrag angezeigt.',
          },
          {
            q: 'Wer entwickelt Tina?',
            a: 'Wes Wickwire, ein im App Store gelisteter Einzelentwickler. Ein gleichnamiges GitHub-Profil hostet quelloffene Swift-Bibliotheken, aber kein Tina-Repository.',
          },
          {
            q: 'Brauche ich für Tina einen eigenen Server?',
            a: 'Nein, der Eintrag nennt auch On-Device-Modelle. Ein Server wird nur für die Funktionen mit Ollama, llama.cpp und ComfyUI benötigt.',
          },
          {
            q: 'Läuft Tina unter Android?',
            a: 'Nein. Der Eintrag deckt nur iPhone, Mac mit Apple silicon und Apple Vision Pro ab.',
          },
          {
            q: 'Welche Integrationen listet Tina?',
            a: 'Home Assistant, Firecrawl, Proxmox und RunPod. Der Eintrag gibt keine Details dazu, wie die einzelnen Integrationen funktionieren.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Tina passt auf dem Papier gut zu jemandem, der bereits Modelle zu Hause hostet und eine einzige native Apple-App für Chat, ComfyUI-Bilder und einige Homelab-Anbindungen möchte, mit einer On-Device-Ausweichlösung.',
          'Die Vorbehalte sind Transparenz und Alter: Die App ist nicht quelloffen, die On-Device-Engine und die Pro-Funktionen sind nicht dokumentiert, und die einzige öffentliche Quelle ist der App-Store-Eintrag, der zum Zeitpunkt der Rezension drei Bewertungen zeigte.',
          'Wenn Sie Ollama betreiben und Open Source wollen, beginnen Sie mit [Enchanted](/de/power-local-llm/enchanted-review). Wenn Sie ComfyUI und Homelab-Integrationen in derselben App möchten, probieren Sie zuerst die kostenlose Stufe von Tina aus.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Tina - Private Local AI im App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — Version, Preis, Anforderungen, Funktionen und Datenschutzabschnitt.',
          '[Datenschutzerklärung von Tina](https://wickwirew.github.io/site/privacypolicy) — im Eintrag verlinkte Richtlinienseite.',
          '[wickwirew auf GitHub](https://github.com/wickwirew) — Entwicklerprofil, geprüft auf ein öffentliches Tina-Repository.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Enchanted-Rezension](/de/power-local-llm/enchanted-review) — der quelloffene Ollama-Client für iOS und Mac.',
          '[Maid-Rezension](/de/power-local-llm/maid-review) — ein quelloffener mobiler Client für lokale und entfernte Modelle.',
          '[AnythingLLM-Mobile-Rezension](/de/power-local-llm/anythingllm-mobile-review) — Fernzugriff auf Ihren AnythingLLM-Workspace.',
          '[Locally-AI-Rezension](/de/power-local-llm/locally-ai-review) — eine Freemium-On-Device-App für iOS und Mac.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) — ein breiteres Verzeichnis lokaler LLM-Tools über alle Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-fr.webp',
    title: 'Avis Tina: client iPhone pour Ollama, llama.cpp et ComfyUI',
    seoTitle: 'Avis Tina: client iPhone pour Ollama, llama.cpp et ComfyUI',
    intro:
      'Tina est une application iPhone et Mac qui discute avec des modèles hébergés sur votre propre serveur, dans votre homelab ou sur l\'appareil lui-même, et pilote aussi la génération d\'images ComfyUI. Cet avis couvre ce que documente sa fiche App Store, ce qui reste flou, et la comparaison de Tina avec d\'autres clients mobiles pour modèles auto-hébergés.',
    metaDescription:
      'Avis Tina : client iPhone et Mac pour vos propres serveurs Ollama, llama.cpp et ComfyUI, plus modèles sur l\'appareil. Tarifs, prérequis iOS 26, confidentialité, limites et alternatives.',
    twitterDescription:
      'Avis Tina : un client iOS/macOS freemium pour Ollama, llama.cpp et ComfyUI auto-hébergés, avec modèles sur l\'appareil et intégrations homelab. Configuration requise, confidentialité, limites.',
    audience:
      'Utilisateurs d\'iPhone et de Mac qui font déjà tourner (ou veulent faire tourner) Ollama, llama.cpp ou ComfyUI chez eux et cherchent un client natif — couvre les connexions, les tarifs, la configuration requise, la confidentialité, les limites et les alternatives.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis Tina',
    targetKeywords: [
      'avis tina',
      'tina ia locale privée',
      'application tina ollama ios',
      'client ollama iphone',
      'client llama.cpp ios',
      'application comfyui iphone',
      'application ia homelab ios',
      'client mobile llm auto-hébergé',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Tina est une application Apple freemium et à code source fermé qui se connecte aux modèles que vous hébergez vous-même (Ollama, llama.cpp), génère des images via ComfyUI et peut aussi exécuter des modèles sur l\'appareil.** Selon sa fiche App Store, elle exige iOS, macOS ou visionOS 26.0 ou ultérieur, se télécharge gratuitement, et propose Tina Pro à $1.99 ainsi qu\'une option annuelle à $12.99 en achats intégrés. Cet avis porte sur la version 1.3.8 et s\'appuie sur la fiche publique, pas sur des tests pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'Tina vaut-elle d\'être installée si je fais tourner Ollama chez moi ?',
        answer:
          'Oui, si vous voulez une seule application native qui dialogue avec Ollama ou llama.cpp, pilote ComfyUI et s\'intègre à Home Assistant ou Proxmox, et que vous êtes sous iOS 26 ou macOS 26. Passez votre chemin si vous avez besoin d\'open source ou d\'Android : le code n\'est pas public et seules les plateformes Apple sont listées. Enchanted est l\'alternative open source gratuite pour Ollama sur iOS.',
        bullets: [
          'Téléchargement gratuit avec achats intégrés : Tina Pro à $1.99 et une option annuelle à $12.99.',
          'Se connecte à Ollama, llama.cpp et à des modèles sur l\'appareil ; génération d\'images via ComfyUI avec éditeur de nœuds.',
          'Intégrations listées pour Home Assistant, Firecrawl, Proxmox et RunPod.',
          'Nécessite iOS, macOS (Apple silicon) ou visionOS 26.0 ou ultérieur.',
          'Code source fermé ; l\'étiquette de confidentialité liste des données d\'usage et de diagnostic, non liées à vous.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Tina', anchor: 'get-it' },
      { label: 'Tina en bref', anchor: 'at-a-glance' },
      { label: 'Ce qu\'est Tina', anchor: 'what-is-tina' },
      { label: 'Comment commencer', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités et intégrations', anchor: 'features' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Tarifs et confidentialité', anchor: 'privacy' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'Tina vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser Tina', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Tina', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tina, du développeur Wes Wickwire, est un client freemium pour les plateformes Apple qui dialogue avec votre propre serveur Ollama ou llama.cpp, génère des images via ComfyUI et exécute aussi des modèles sur l\'appareil.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme une télécommande pour l\'IA que vous hébergez chez vous, avec une petite option sur l\'appareil en plus : les gros modèles restent sur votre serveur, et l\'application sur votre téléphone sert d\'interface.',
          },
        ],
        items: [
          'Version testée : 1.3.8, telle qu\'affichée sur la [fiche App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571).',
          'Prix : téléchargement gratuit ; Tina Pro à $1.99 et une option annuelle à $12.99 sont listés comme achats intégrés.',
          'Connexions : Ollama, llama.cpp, modèles sur l\'appareil et ComfyUI, plus des intégrations Home Assistant, Firecrawl, Proxmox et RunPod.',
          'Plateforme : iPhone, Mac avec Apple silicon et Apple Vision Pro, tous en version 26.0 ou ultérieure.',
          'Ouverture : code source fermé ; aucun dépôt public ni site produit n\'a été trouvé.',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: 'Obtenir Tina',
        content: [
          '**Tina est distribuée par l\'Apple App Store.** Le téléchargement pèse 56.3 Mo et la fiche est classée 4+.',
          'Cet avis est un complément au [répertoire des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) de PromptQuorum, qui recense Tina aux côtés d\'autres outils d\'IA locale mobiles et de bureau.',
        ],
        columns: ['Canal', 'Obtenir'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Obtenir': '[Tina - Private Local AI sur l\'App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            'Canal': 'Politique de confidentialité',
            'Obtenir': '[Politique de confidentialité de Tina](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: 'Aucun site produit dédié ni dépôt de code source n\'a été trouvé pour Tina. La fiche App Store est la principale source publique.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tina en bref',
        columns: ['Attribut', 'Tina'],
        rows: [
          { 'Attribut': 'Plateforme', 'Tina': 'iOS, macOS, visionOS (26.0+)' },
          { 'Attribut': 'Prix', 'Tina': 'Gratuit, achats intégrés' },
          { 'Attribut': 'Licence', 'Tina': 'Code source fermé' },
          { 'Attribut': 'Fonctionne hors ligne', 'Tina': 'Sur l\'appareil seulement ; serveur = lien requis' },
          { 'Attribut': 'Moteur intégré', 'Tina': 'Oui, modèles sur l\'appareil listés' },
          { 'Attribut': 'Compatible Ollama', 'Tina': 'Oui' },
          { 'Attribut': 'Génération d\'images', 'Tina': 'Oui, via ComfyUI avec éditeur de nœuds' },
          { 'Attribut': 'Entrée / sortie vocale', 'Tina': 'Oui, voix et synthèse vocale' },
        ],
        note: 'Les attributs suivent la comparaison des applications de chat mobiles utilisée dans le répertoire des logiciels LLM locaux. Ils proviennent de la seule fiche App Store, qui ne couvre pas toutes les fonctionnalités.',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'Ce qu\'est Tina',
        content: [
          '**Tina est d\'abord un client, et ensuite seulement un exécuteur de modèles sur l\'appareil.** L\'argument de la fiche est « connectez-vous à des modèles locaux : votre propre serveur, votre appareil ou votre homelab », avec Ollama, llama.cpp et des modèles sur l\'appareil comme sources citées.',
          'Elle est publiée par Wes Wickwire, développeur indépendant, et classée dans la catégorie Utilitaires. Aucun moteur d\'inférence n\'est nommé pour les modèles sur l\'appareil ; cet avis n\'indique donc pas quel environnement d\'exécution elle utilise.',
          'Cet avis s\'appuie uniquement sur la fiche App Store. Il n\'inclut pas de tests pratiques ; la vitesse, la stabilité et la qualité des réponses ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment commencer',
        content: [
          '**La mise en route consiste à installer l\'application depuis l\'App Store, puis à la pointer vers un serveur ou un modèle.** La fiche ne documente pas le premier lancement ; les étapes ci-dessous suivent donc ce qu\'elle indique.',
        ],
        numberedItems: [
          {
            title: 'Vérifier la version de votre système',
            whyItMatters: 'La fiche exige iOS, macOS ou visionOS 26.0 ou ultérieur, et sur Mac une puce Apple M1 ou plus récente.',
          },
          {
            title: 'Installer Tina',
            whyItMatters: 'Obtenez-la sur l\'[App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) ; le téléchargement pèse 56.3 Mo.',
          },
          {
            title: 'Connecter une source de modèles',
            whyItMatters: 'Ajoutez l\'adresse de votre serveur Ollama ou llama.cpp, ou choisissez un modèle sur l\'appareil, selon l\'endroit où vous voulez exécuter l\'inférence.',
          },
          {
            title: 'Facultatif : ajouter ComfyUI et des intégrations',
            whyItMatters: 'Reliez une instance ComfyUI pour la génération d\'images, ainsi que Home Assistant, Firecrawl, Proxmox ou RunPod si vous les utilisez.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités et intégrations',
        content: [
          '**L\'atout de Tina, c\'est sa portée : une seule application pour le chat, les images et les outils de homelab.** Tout ce qui suit provient de la fiche App Store.',
        ],
        items: [
          '**Chat avec des LLM.** Dialoguez avec des modèles servis par Ollama ou llama.cpp, ou avec des modèles sur l\'appareil.',
          '**Génération d\'images ComfyUI.** La fiche décrit une prise en charge complète de ComfyUI, avec un éditeur de nœuds intégré à l\'application.',
          '**Voix.** La voix et la synthèse vocale sont listées.',
          '**Intégrations homelab.** Home Assistant, Firecrawl, Proxmox et RunPod sont cités ; la fiche ne détaille pas ce que chaque intégration permet de faire.',
          '**Plusieurs plateformes Apple.** Une seule fiche couvre l\'iPhone, le Mac et l\'Apple Vision Pro.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Tina exige la version 26.0 ou ultérieure d\'iOS, de macOS ou de visionOS, et une puce Apple M1 ou plus récente sur Mac.** La fiche ne donne aucune valeur de RAM.',
          'L\'endroit où s\'exécute l\'inférence détermine les besoins matériels réels. Avec un serveur Ollama ou llama.cpp distant, le téléphone n\'a qu\'à afficher le chat ; avec des modèles sur l\'appareil, c\'est la mémoire de l\'iPhone qui fixe la limite.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Tarifs et confidentialité',
        content: [
          '**Tina se télécharge gratuitement, avec Tina Pro à $1.99 et une option annuelle à $12.99 listés comme achats intégrés.** La fiche ne précise pas quelles fonctionnalités Pro débloque ; vérifiez donc l\'écran d\'achat dans l\'application avant de compter sur une fonctionnalité.',
          'La section confidentialité d\'Apple indique que Tina collecte des données d\'usage et de diagnostic (données de plantage et de performance) qui ne sont pas liées à votre identité. Apple précise que ces étiquettes sont déclarées par le développeur et non vérifiées.',
          'Les conversations envoyées à votre propre serveur transitent par ce serveur ; votre confidentialité dépend donc de la manière dont vous l\'hébergez et le sécurisez. L\'application est à code source fermé et cet avis n\'a pas inspecté le trafic réseau.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Apportez votre propre serveur',
            'Ce que cela signifie en usage réel': 'Exécutez de gros modèles sur une machine à la maison et discutez depuis le téléphone.',
            'Limite / réserve': 'Vous devez configurer et exposer vous-même Ollama ou llama.cpp.',
          },
          {
            'Avantage': 'ComfyUI intégré',
            'Ce que cela signifie en usage réel': 'Le chat et la génération d\'images sont réunis dans une seule application, avec un éditeur de nœuds.',
            'Limite / réserve': 'Votre propre instance ComfyUI est nécessaire ; la fiche ne nomme pas les workflows pris en charge.',
          },
          {
            'Avantage': 'Option sur l\'appareil',
            'Ce que cela signifie en usage réel': 'Certaines conversations fonctionnent sans aucun serveur.',
            'Limite / réserve': 'Aucune liste de modèles, taille ni moteur n\'est publié pour le mode sur l\'appareil.',
          },
          {
            'Avantage': 'Prix d\'entrée bas',
            'Ce que cela signifie en usage réel': 'Gratuite à essayer ; Pro coûte $1.99 selon la fiche.',
            'Limite / réserve': 'La fiche n\'explique pas ce que Pro ajoute, ni si $1.99 est un paiement unique.',
          },
          {
            'Avantage': 'Prise en charge de tout l\'écosystème Apple',
            'Ce que cela signifie en usage réel': 'Un seul parcours d\'achat couvre l\'iPhone, le Mac et le Vision Pro.',
            'Limite / réserve': 'Tout exige la version 26 ; il n\'existe pas d\'application Android ni Windows.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina vs. alternatives',
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Source des modèles', 'Différence clé'],
        rows: [
          {
            'Application': 'Tina',
            'Plateformes': 'iOS, Mac, Vision Pro',
            'Prix et licence': 'Freemium, code source fermé',
            'Source des modèles': 'Ollama, llama.cpp, sur l\'appareil',
            'Différence clé': 'Ajoute les images ComfyUI et des intégrations homelab ; pas open source',
          },
          {
            'Application': '[Enchanted](/fr/power-local-llm/enchanted-review)',
            'Plateformes': 'iOS, Mac',
            'Prix et licence': 'Gratuit, Apache 2.0',
            'Source des modèles': 'Ollama',
            'Différence clé': 'Client Ollama open source, sans moteur intégré',
          },
          {
            'Application': '[Maid](/fr/power-local-llm/maid-review)',
            'Plateformes': 'Android, iOS',
            'Prix et licence': 'Gratuit, MIT',
            'Source des modèles': 'Sur l\'appareil, Ollama, API OpenAI',
            'Différence clé': 'Open source et aussi sur Android ; ComfyUI non listé',
          },
          {
            'Application': '[AnythingLLM Mobile](/fr/power-local-llm/anythingllm-mobile-review)',
            'Plateformes': 'iOS, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Source des modèles': 'Votre espace de travail AnythingLLM',
            'Différence clé': 'Accès distant à une instance AnythingLLM plutôt qu\'à des serveurs de modèles bruts',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment. Vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Tina',
        items: [
          '**Les propriétaires de homelab qui font tourner Ollama ou llama.cpp.** Tina est conçue pour se connecter à ces serveurs depuis un appareil Apple.',
          '**Les utilisateurs de ComfyUI qui veulent un accès mobile.** L\'éditeur de nœuds et les commandes de génération font partie de l\'application.',
          '**Ceux qui veulent un serveur et un mode de secours sur l\'appareil dans une seule application.** Les deux modes sont listés.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser Tina',
        items: [
          '**Toute personne qui a besoin d\'open source.** Le code n\'est pas public ; [Enchanted](/fr/power-local-llm/enchanted-review) est open source pour Ollama.',
          '**Les utilisateurs d\'Android ou de Windows.** Seules les plateformes Apple sont listées ; [Maid](/fr/power-local-llm/maid-review) couvre Android.',
          '**Les personnes sous iOS ou macOS antérieur à 26.** La fiche exige la version 26.0 ou ultérieure.',
          '**Ceux qui n\'ont pas de serveur et veulent un catalogue de modèles.** Le mode sur l\'appareil n\'a aucune liste de modèles publiée ; voyez [Locally AI](/fr/power-local-llm/locally-ai-review).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Tina est-elle gratuite ?',
            a: 'Elle se télécharge gratuitement, avec des achats intégrés : Tina Pro à $1.99 et une option annuelle à $12.99, comme indiqué sur la fiche App Store.',
          },
          {
            q: 'Qui développe Tina ?',
            a: 'Wes Wickwire, développeur indépendant indiqué sur l\'App Store. Un profil GitHub du même nom héberge des bibliothèques Swift open source, mais aucun dépôt Tina.',
          },
          {
            q: 'Ai-je besoin de mon propre serveur pour utiliser Tina ?',
            a: 'Non, la fiche cite aussi des modèles sur l\'appareil. Un serveur n\'est nécessaire que pour les fonctionnalités Ollama, llama.cpp et ComfyUI.',
          },
          {
            q: 'Tina fonctionne-t-elle sur Android ?',
            a: 'Non. La fiche ne couvre que l\'iPhone, le Mac avec Apple silicon et l\'Apple Vision Pro.',
          },
          {
            q: 'Quelles intégrations Tina liste-t-elle ?',
            a: 'Home Assistant, Firecrawl, Proxmox et RunPod. La fiche ne détaille pas le fonctionnement de chacune.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Sur le papier, Tina convient bien à qui héberge déjà des modèles chez soi et veut une seule application Apple native pour le chat, les images ComfyUI et quelques connexions homelab, avec un mode de secours sur l\'appareil.',
          'Les réserves tiennent à la transparence et à la jeunesse du projet : le code est fermé, le moteur sur l\'appareil et les fonctionnalités Pro ne sont pas documentés, et la seule source publique est la fiche App Store, qui affichait trois notes au moment de l\'avis.',
          'Si vous utilisez Ollama et voulez de l\'open source, commencez par [Enchanted](/fr/power-local-llm/enchanted-review). Si vous voulez ComfyUI et des intégrations homelab dans la même application, essayez d\'abord la version gratuite de Tina.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Tina - Private Local AI sur l\'App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — version, prix, configuration requise, fonctionnalités et section confidentialité.',
          '[Politique de confidentialité de Tina](https://wickwirew.github.io/site/privacypolicy) — page de politique liée depuis la fiche.',
          '[wickwirew sur GitHub](https://github.com/wickwirew) — profil du développeur, consulté pour chercher un dépôt Tina public.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Enchanted](/fr/power-local-llm/enchanted-review) — le client Ollama open source pour iOS et Mac.',
          '[Avis Maid](/fr/power-local-llm/maid-review) — un client mobile open source pour modèles locaux et distants.',
          '[Avis AnythingLLM Mobile](/fr/power-local-llm/anythingllm-mobile-review) — accès distant à votre espace de travail AnythingLLM.',
          '[Avis Locally AI](/fr/power-local-llm/locally-ai-review) — une application freemium sur l\'appareil pour iOS et Mac.',
          '[Le répertoire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils LLM locaux multiplateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-ja.webp',
    title: 'Tinaレビュー:Ollama・llama.cpp・ComfyUI対応のiPhoneクライアント',
    seoTitle: 'Tinaレビュー:Ollama・llama.cpp・ComfyUI対応iPhoneクライアント',
    intro:
      'Tinaは、自分のサーバーやホームラボ、あるいは端末上のモデルとチャットでき、ComfyUIによる画像生成も操作できるiPhoneとMac向けアプリです。本レビューでは、App Storeの掲載情報に記載されている内容、不明な点、そしてTinaが自己ホスト型モデル向けの他のモバイルクライアントとどう違うかを扱います。',
    metaDescription:
      'Tinaレビュー:自分のOllama、llama.cpp、ComfyUIサーバーとオンデバイスモデルに対応するiPhoneとMac向けクライアント。料金、iOS 26の要件、プライバシー表示、制約、代替アプリを解説。',
    twitterDescription:
      'Tinaレビュー:自己ホスト型のOllama、llama.cpp、ComfyUIに対応する、オンデバイスモデルとホームラボ連携も備えたフリーミアムのiOS/macOSクライアント。要件、プライバシー、制約を解説。',
    audience:
      'すでに自宅でOllama、llama.cpp、ComfyUIを動かしている(または動かしたい)iPhoneとMacのユーザーで、ネイティブなクライアントを求める人向け——接続方法、料金、要件、プライバシー、制約、代替アプリを扱う。',
    readTime: '7分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Tinaレビュー',
    targetKeywords: [
      'tina レビュー',
      'tina private local ai',
      'tina ollama ios アプリ',
      'ollama クライアント iphone',
      'llama.cpp ios クライアント',
      'comfyui iphone アプリ',
      'ホームラボ ai アプリ ios',
      '自己ホスト llm モバイル クライアント',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Tinaは、自分でホストするモデル(Ollama、llama.cpp)に接続し、ComfyUI経由で画像を生成でき、端末上でもモデルを実行できる、フリーミアムでクローズドソースのAppleプラットフォーム向けアプリです。** App Storeの掲載情報によれば、iOS、macOS、visionOSのいずれも26.0以降が必要で、ダウンロードは無料、アプリ内課金としてTina Proが$1.99、年額プランが$12.99で提供されています。本レビューはバージョン1.3.8が対象で、公開されている掲載情報に基づいており、実機テストは含みません。',
    quickAnswerTop: {
      ja: {
        question: '自宅でOllamaを動かしているなら、Tinaをインストールする価値はありますか?',
        answer:
          'はい、Ollamaやllama.cppと接続し、ComfyUIを操作し、Home AssistantやProxmoxとも連携できるネイティブアプリを1つ求めていて、iOS 26またはmacOS 26を使っているならおすすめです。オープンソースやAndroid版が必要なら見送ってください。コードは公開されておらず、記載されているのはAppleのプラットフォームだけです。iOSでOllamaを使う無料のオープンソースの代替アプリはEnchantedです。',
        bullets: [
          'ダウンロードは無料でアプリ内課金あり:Tina Proは$1.99、年額プランは$12.99。',
          'Ollama、llama.cpp、オンデバイスモデルに接続。ComfyUIによる画像生成はノードエディタ付き。',
          'Home Assistant、Firecrawl、Proxmox、RunPodとの連携が記載されている。',
          'iOS、macOS(Apple silicon)、visionOSのいずれも26.0以降が必要。',
          'クローズドソース。プライバシー表示には、ユーザーに紐付かない利用状況と診断データが記載されている。',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Tinaを入手する', anchor: 'get-it' },
      { label: 'Tinaの概要', anchor: 'at-a-glance' },
      { label: 'Tinaとは', anchor: 'what-is-tina' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能と連携', anchor: 'features' },
      { label: '必要な端末要件', anchor: 'requirements' },
      { label: '料金とプライバシー', anchor: 'privacy' },
      { label: 'トレードオフ:メリットと制約', anchor: 'tradeoffs' },
      { label: 'Tina 対 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'Tinaを使うべき人', anchor: 'who-should-use' },
      { label: 'Tinaを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '開発者Wes Wickwire氏によるTinaは、自分のOllamaまたはllama.cppサーバーとチャットでき、ComfyUIで画像を生成し、オンデバイスモデルも実行できる、フリーミアムのAppleプラットフォーム向けクライアントである。',
          },
          {
            type: 'plain-terms',
            text: '自宅でホストするAIのリモコンに、小さなオンデバイスの選択肢を加えたものと考えてください。重いモデルはサーバー側に置いたまま、スマートフォンのアプリが操作画面になります。',
          },
        ],
        items: [
          'レビュー対象のバージョン:1.3.8。[App Storeの掲載情報](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)に記載のとおり。',
          '価格:ダウンロードは無料。Tina Proが$1.99、年額プランが$12.99で、アプリ内課金として記載されている。',
          '接続先:Ollama、llama.cpp、オンデバイスモデル、ComfyUIに加え、Home Assistant、Firecrawl、Proxmox、RunPodとの連携。',
          'プラットフォーム:iPhone、Apple siliconのMac、Apple Vision Proで、いずれもバージョン26.0以降。',
          'オープン性:クローズドソース。公開リポジトリも製品サイトも見つからなかった。',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: 'Tinaを入手する',
        content: [
          '**TinaはApple App Storeで配布されています。** ダウンロードサイズは56.3 MBで、掲載情報の年齢区分は4+です。',
          '本レビューは、PromptQuorumの[ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory)を補完するものです。このディレクトリはTinaを他のモバイルやデスクトップのローカルAIツールと並べて掲載しています。',
        ],
        columns: ['入手経路', '入手方法'],
        rows: [
          {
            '入手経路': 'Apple App Store',
            '入手方法': '[App StoreのTina - Private Local AI](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            '入手経路': 'プライバシーポリシー',
            '入手方法': '[Tinaのプライバシーポリシー](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: 'Tinaの専用の製品Webサイトもソースリポジトリも見つかりませんでした。App Storeの掲載情報が、主な公開情報源です。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tinaの概要',
        columns: ['項目', 'Tina'],
        rows: [
          { '項目': 'プラットフォーム', 'Tina': 'iOS、macOS、visionOS(26.0以降)' },
          { '項目': '価格', 'Tina': '無料、アプリ内課金あり' },
          { '項目': 'ライセンス', 'Tina': 'クローズドソース' },
          { '項目': '完全オフラインで動作', 'Tina': 'オンデバイスモデルのみ。サーバーモードは接続が必要' },
          { '項目': '内蔵エンジン', 'Tina': '可、オンデバイスモデルが記載されている' },
          { '項目': 'Ollamaに対応', 'Tina': '可' },
          { '項目': '画像生成', 'Tina': '可、ComfyUI経由でノードエディタ付き' },
          { '項目': '音声入力/出力', 'Tina': '可、音声とテキスト読み上げ' },
        ],
        note: '各項目は、ローカルLLMソフトウェアディレクトリで使われているモバイルチャットの比較基準に沿っています。内容はApp Storeの掲載情報のみに基づいており、すべての機能が網羅されているわけではありません。',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'Tinaとは',
        content: [
          '**Tinaはクライアントが第一で、オンデバイスでの実行は第二の役割です。** 掲載情報の紹介文は「ローカルモデルに接続:自分のサーバー、端末上、またはホームラボ」で、接続元としてOllama、llama.cpp、オンデバイスモデルが挙げられています。',
          '個人開発者のWes Wickwire氏が公開しており、カテゴリはユーティリティです。オンデバイスモデル用の推論エンジンは明記されていないため、本レビューではどのランタイムを使っているかは述べません。',
          '本レビューはApp Storeの掲載情報のみに基づいています。実機テストは含まれていないため、速度、安定性、回答品質は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、App Storeからのインストールに続けて、アプリをサーバーまたはモデルに接続する流れです。** 掲載情報には初回起動時の流れが記載されていないため、以下の手順は記載されている内容に沿っています。',
        ],
        numberedItems: [
          {
            title: 'OSのバージョンを確認する',
            whyItMatters: '掲載情報ではiOS、macOS、visionOSのいずれも26.0以降が必要で、MacではApple M1チップ以降が必要です。',
          },
          {
            title: 'Tinaをインストールする',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)から入手します。ダウンロードサイズは56.3 MBです。',
          },
          {
            title: 'モデルの接続元を設定する',
            whyItMatters: '推論をどこで実行したいかに応じて、Ollamaまたはllama.cppサーバーのアドレスを追加するか、オンデバイスモデルを選びます。',
          },
          {
            title: '任意:ComfyUIと連携機能を追加する',
            whyItMatters: '画像生成のためにComfyUIのインスタンスをリンクし、使っていればHome Assistant、Firecrawl、Proxmox、RunPodも連携させます。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能と連携',
        content: [
          '**Tinaの売りは守備範囲の広さです。チャット、画像、ホームラボのツールがひとつのアプリにまとまっています。** 以下はすべて、App Storeの掲載情報に基づいています。',
        ],
        items: [
          '**LLMとのチャット。** Ollamaやllama.cppが提供するモデル、または端末上のモデルと会話できる。',
          '**ComfyUIによる画像生成。** 掲載情報は、アプリ内のノードエディタを備えた、ComfyUIへの完全な対応を説明している。',
          '**音声。** 音声とテキスト読み上げへの対応が記載されている。',
          '**ホームラボとの連携。** Home Assistant、Firecrawl、Proxmox、RunPodが挙げられている。各連携で何ができるかは、掲載情報に詳細がない。',
          '**複数のAppleプラットフォーム。** ひとつの掲載情報でiPhone、Mac、Apple Vision Proに対応している。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '必要な端末要件',
        content: [
          '**Tinaには、iOS、macOS、visionOSのバージョン26.0以降が必要で、MacではApple M1チップ以降が必要です。** 掲載情報にRAMの数値の記載はありません。',
          '実際に必要なハードウェアは、推論をどこで実行するかで決まります。リモートのOllamaまたはllama.cppサーバーを使う場合、スマートフォンはチャットを表示するだけで済みます。オンデバイスモデルを使う場合は、iPhoneのメモリが限界になります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '料金とプライバシー',
        content: [
          '**Tinaはダウンロード無料で、アプリ内課金としてTina Proが$1.99、年額プランが$12.99で記載されています。** Proでどの機能が使えるようになるかは掲載情報に記載がないため、機能を当てにする前にアプリ内の課金画面を確認してください。',
          'Appleのプライバシーの項目には、Tinaは利用状況データと診断データ(クラッシュとパフォーマンスのデータ)を収集するが、あなたの身元には紐付かないと記されています。Appleは、これらの表示は開発者による自己申告であり、検証されていないと注記しています。',
          '自分のサーバーに送ったチャットはそのサーバーに届くため、その場でのプライバシーは、サーバーをどうホストし、どう保護するかで決まります。アプリはクローズドソースであり、本レビューではネットワーク通信を検査していません。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制約',
        columns: ['メリット', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            'メリット': '自分のサーバーを利用できる',
            '実際の利用での意味': '自宅のマシンで大きなモデルを動かし、スマートフォンからチャットできる。',
            '制約・注意点': 'Ollamaやllama.cppを、自分でセットアップして公開する必要がある。',
          },
          {
            'メリット': 'ComfyUIを内蔵',
            '実際の利用での意味': 'チャットと画像生成が、ノードエディタを含めて1つのアプリにまとまっている。',
            '制約・注意点': '自分のComfyUIのインスタンスが必要で、掲載情報は対応するワークフローを挙げていない。',
          },
          {
            'メリット': 'オンデバイスの選択肢',
            '実際の利用での意味': 'サーバーなしでも一部のチャットが使える。',
            '制約・注意点': 'オンデバイスモードのモデル一覧、サイズ、ランタイムは公開されていない。',
          },
          {
            'メリット': '手頃な導入価格',
            '実際の利用での意味': '無料で試せる。記載のとおりProは$1.99。',
            '制約・注意点': 'Proで何が追加されるか、$1.99が買い切りかどうかは、掲載情報に説明がない。',
          },
          {
            'メリット': 'Apple全体に対応',
            '実際の利用での意味': '1つの購入経路で、iPhone、Mac、Vision Proをカバーできる。',
            '制約・注意点': 'すべてバージョン26が必要で、AndroidやWindows向けアプリはない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina 対 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格とライセンス', 'モデルの接続元', '主な違い'],
        rows: [
          {
            'アプリ': 'Tina',
            'プラットフォーム': 'iOS、Mac、Vision Pro',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'モデルの接続元': 'Ollama、llama.cpp、オンデバイス',
            '主な違い': 'ComfyUIの画像生成とホームラボ連携を追加。オープンソースではない',
          },
          {
            'アプリ': '[Enchanted](/ja/power-local-llm/enchanted-review)',
            'プラットフォーム': 'iOS、Mac',
            '価格とライセンス': '無料、Apache 2.0',
            'モデルの接続元': 'Ollama',
            '主な違い': '独自の内蔵エンジンを持たない、オープンソースのOllamaクライアント',
          },
          {
            'アプリ': '[Maid](/ja/power-local-llm/maid-review)',
            'プラットフォーム': 'Android、iOS',
            '価格とライセンス': '無料、MIT',
            'モデルの接続元': 'オンデバイス、Ollama、OpenAI API',
            '主な違い': 'オープンソースでAndroidにも対応。ComfyUIの記載なし',
          },
          {
            'アプリ': '[AnythingLLM Mobile](/ja/power-local-llm/anythingllm-mobile-review)',
            'プラットフォーム': 'iOS、Android',
            '価格とライセンス': '無料、MIT',
            'モデルの接続元': '自分のAnythingLLMワークスペース',
            '主な違い': 'モデルサーバーそのものではなく、1つのAnythingLLMインスタンスへのリモートアクセス',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変更されます。決定前に各アプリ自体の掲載情報で現在の詳細を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Tinaを使うべき人',
        items: [
          '**Ollamaやllama.cppを動かしているホームラボの所有者。** TinaはAppleデバイスからそれらのサーバーに接続することを中心に作られています。',
          '**ComfyUIにモバイルからアクセスしたい人。** ノードエディタと生成のコントロールがアプリに含まれています。',
          '**サーバーとオンデバイスの代替手段を1つのアプリで使いたい人。** どちらのモードも記載されています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Tinaを使うべきでない人',
        items: [
          '**オープンソースが必須の人。** コードは公開されていません。Ollama向けのオープンソースなら[Enchanted](/ja/power-local-llm/enchanted-review)があります。',
          '**AndroidやWindowsのユーザー。** 記載されているのはAppleのプラットフォームだけです。Androidなら[Maid](/ja/power-local-llm/maid-review)が対応しています。',
          '**iOSまたはmacOSが26未満の人。** 掲載情報ではバージョン26.0以降が必要です。',
          '**サーバーを持たず、モデルのカタログを求める人。** オンデバイスモードにはモデル一覧が公開されていません。[Locally AI](/ja/power-local-llm/locally-ai-review)を参照してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Tinaは無料ですか?',
            a: 'ダウンロードは無料で、App Storeの掲載情報のとおり、アプリ内課金としてTina Proが$1.99、年額プランが$12.99で提供されています。',
          },
          {
            q: 'Tinaを開発しているのは誰ですか?',
            a: 'App Storeに掲載されている個人開発者のWes Wickwire氏です。同名のGitHubプロフィールにはオープンソースのSwiftライブラリがありますが、Tinaのリポジトリはありません。',
          },
          {
            q: 'Tinaを使うには自分のサーバーが必要ですか?',
            a: 'いいえ、掲載情報にはオンデバイスモデルも挙げられています。サーバーが必要なのは、Ollama、llama.cpp、ComfyUIの機能を使う場合だけです。',
          },
          {
            q: 'TinaはAndroidで動作しますか?',
            a: 'いいえ。掲載情報が対象としているのは、iPhone、Apple siliconのMac、Apple Vision Proのみです。',
          },
          {
            q: 'Tinaはどの連携機能を挙げていますか?',
            a: 'Home Assistant、Firecrawl、Proxmox、RunPodです。それぞれがどう動作するかは、掲載情報に詳細がありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'すでに自宅でモデルをホストしていて、チャット、ComfyUIの画像、いくつかのホームラボ連携を、オンデバイスの代替手段つきで、ネイティブなAppleアプリ1つにまとめたい人には、書面上はよく合っています。',
          '懸念は透明性と歴史の浅さです。クローズドソースで、オンデバイスのエンジンもProの機能も記載がなく、唯一の公開情報であるApp Storeの掲載情報には、レビュー時点で評価が3件しか付いていませんでした。',
          'Ollamaを使っていてオープンソースを求めるなら、[Enchanted](/ja/power-local-llm/enchanted-review)から始めてください。ComfyUIとホームラボ連携を同じアプリで使いたいなら、まずTinaの無料版を試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのTina - Private Local AI](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — バージョン、価格、要件、機能、プライバシーの項目。',
          '[Tinaのプライバシーポリシー](https://wickwirew.github.io/site/privacypolicy) — 掲載情報からリンクされているポリシーのページ。',
          '[GitHubのwickwirew](https://github.com/wickwirew) — 開発者のプロフィール。Tinaの公開リポジトリがないか確認した。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Enchantedレビュー](/ja/power-local-llm/enchanted-review) — iOSとMac向けのオープンソースのOllamaクライアント。',
          '[Maidレビュー](/ja/power-local-llm/maid-review) — ローカルとリモートのモデルに対応する、オープンソースのモバイルクライアント。',
          '[AnythingLLM Mobileレビュー](/ja/power-local-llm/anythingllm-mobile-review) — 自分のAnythingLLMワークスペースへのリモートアクセス。',
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — iOSとMac向けのフリーミアムのオンデバイスアプリ。',
          '[完全なローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory) — プラットフォームを横断するローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-zh.webp',
    title: 'Tina评测：适用于Ollama、llama.cpp和ComfyUI的iPhone客户端',
    seoTitle: 'Tina评测：Ollama、llama.cpp和ComfyUI的iPhone客户端',
    intro:
      'Tina是一款iPhone和Mac应用，可与您自己服务器、家庭实验室或设备本身上的模型对话，还能驱动ComfyUI生成图像。本评测介绍它的App Store页面记载了什么、哪些地方不明确，以及Tina与其他自托管模型移动客户端的对比。',
    metaDescription:
      'Tina评测：适用于自建Ollama、llama.cpp和ComfyUI服务器及设备端模型的iPhone和Mac客户端。定价、iOS 26要求、隐私标签、局限与替代方案。',
    twitterDescription:
      'Tina评测：面向自托管Ollama、llama.cpp和ComfyUI的免费增值iOS/macOS客户端，支持设备端模型和家庭实验室集成。设备要求、隐私、局限。',
    audience:
      '已经在家中运行（或想要运行）Ollama、llama.cpp或ComfyUI，并希望有一款原生客户端的iPhone和Mac用户——涵盖连接方式、定价、设备要求、隐私、局限和替代方案。',
    readTime: '7分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Tina评测',
    targetKeywords: [
      'Tina评测',
      'Tina私有本地AI',
      'Tina Ollama iOS应用',
      'iPhone Ollama客户端',
      'llama.cpp iOS客户端',
      'ComfyUI iPhone应用',
      '家庭实验室AI应用iOS',
      '自托管大模型移动客户端',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Tina是一款免费增值、闭源的Apple应用，可连接您自行托管的模型（Ollama、llama.cpp），通过ComfyUI生成图像，也能在设备上运行模型。** 据其App Store页面，它需要iOS、macOS或visionOS 26.0或更高版本，下载免费，并以应用内购买的方式销售Tina Pro（$1.99）和$12.99的年度选项。本评测对应版本1.3.8，依据公开的应用页面撰写，并未实际测试。',
    quickAnswerTop: {
      zh: {
        question: '如果我在家里运行Ollama，Tina值得安装吗？',
        answer:
          '如果您想要一款原生应用，既能连接Ollama或llama.cpp、驱动ComfyUI，又能接入Home Assistant或Proxmox，并且使用iOS 26或macOS 26，那么值得。如果您需要开源或Android版本，则可以跳过：代码并未公开，且只列出了Apple平台。Enchanted是适用于iOS上Ollama的免费开源替代方案。',
        bullets: [
          '免费下载，含应用内购买：Tina Pro $1.99，以及$12.99的年度选项。',
          '可连接Ollama、llama.cpp和设备端模型；通过ComfyUI生成图像，并带有节点编辑器。',
          '列出的集成包括Home Assistant、Firecrawl、Proxmox和RunPod。',
          '需要iOS、macOS（Apple silicon）或visionOS 26.0或更高版本。',
          '闭源；隐私标签列出了使用情况和诊断数据，且不与您关联。',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '获取Tina', anchor: 'get-it' },
      { label: 'Tina概览', anchor: 'at-a-glance' },
      { label: 'Tina是什么', anchor: 'what-is-tina' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '功能与集成', anchor: 'features' },
      { label: '设备要求', anchor: 'requirements' },
      { label: '定价与隐私', anchor: 'privacy' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
      { label: 'Tina与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用Tina', anchor: 'who-should-use' },
      { label: '谁不适合使用Tina', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点速览',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tina由开发者Wes Wickwire打造，是一款免费增值的Apple平台客户端，可与您自己的Ollama或llama.cpp服务器对话，通过ComfyUI生成图像，也能运行设备端模型。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作您在家中托管的AI的遥控器，另外附带一个小型设备端选项：大模型留在您的服务器上，手机上的应用只是操作界面。',
          },
        ],
        items: [
          '评测版本：1.3.8，见[App Store页面](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)。',
          '价格：免费下载；Tina Pro $1.99和$12.99的年度选项列为应用内购买。',
          '连接：Ollama、llama.cpp、设备端模型和ComfyUI，以及Home Assistant、Firecrawl、Proxmox和RunPod集成。',
          '平台：iPhone、搭载Apple silicon的Mac和Apple Vision Pro，均需26.0或更高版本。',
          '开放性：闭源；没有找到公开的代码仓库或产品网站。',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: '获取Tina',
        content: [
          '**Tina通过Apple App Store发布。** 应用大小为56.3 MB，页面分级为4+。',
          '本评测是PromptQuorum[本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)的配套文章，该目录将Tina与其他移动端和桌面端本地AI工具一并列出。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Apple App Store',
            '获取方式': '[App Store上的Tina - Private Local AI](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            '渠道': '隐私政策',
            '获取方式': '[Tina隐私政策](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: '没有找到Tina专门的产品网站或源代码仓库。App Store页面是主要的公开来源。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tina概览',
        columns: ['属性', 'Tina'],
        rows: [
          { '属性': '平台', 'Tina': 'iOS、macOS、visionOS（26.0+）' },
          { '属性': '价格', 'Tina': '免费，含应用内购买' },
          { '属性': '许可证', 'Tina': '闭源' },
          { '属性': '完全离线运行', 'Tina': '仅设备端模型；服务器模式需要连接' },
          { '属性': '内置引擎', 'Tina': '是，页面列出了设备端模型' },
          { '属性': '支持Ollama', 'Tina': '是' },
          { '属性': '图像生成', 'Tina': '是，通过ComfyUI，带节点编辑器' },
          { '属性': '语音输入/输出', 'Tina': '是，语音和文本转语音' },
        ],
        note: '各属性沿用本地LLM软件目录中使用的移动端聊天对比项。它们仅来自App Store页面，而该页面并未涵盖所有功能。',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'Tina是什么',
        content: [
          '**Tina首先是客户端，其次才是设备端运行器。** 应用页面的宣传语是“connect to local models: your own server, on your device, or your homelab”（连接本地模型：您自己的服务器、您的设备或您的家庭实验室），并将Ollama、llama.cpp和设备端模型列为来源。',
          '它由个人开发者Wes Wickwire发布，分类为“工具”（Utility）。设备端模型所用的推理引擎没有公开名称，因此本评测不断言它使用哪种运行时。',
          '本评测仅依据App Store页面撰写，不包含实际测试，因此这里不对速度、稳定性和回答质量进行评价。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置过程就是先从App Store安装，再将应用指向某个服务器或模型。** 应用页面没有记载首次运行的流程，因此以下步骤依据页面所述内容整理。',
        ],
        numberedItems: [
          {
            title: '确认系统版本',
            whyItMatters: '应用页面要求iOS、macOS或visionOS 26.0或更高版本，在Mac上还要求Apple M1或更新的芯片。',
          },
          {
            title: '安装Tina',
            whyItMatters: '可从[App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)获取；应用大小为56.3 MB。',
          },
          {
            title: '连接模型来源',
            whyItMatters: '根据您希望在哪里运行推理，添加Ollama或llama.cpp服务器地址，或选择一个设备端模型。',
          },
          {
            title: '可选：添加ComfyUI和集成',
            whyItMatters: '关联ComfyUI实例以生成图像；如果您使用Home Assistant、Firecrawl、Proxmox或RunPod，也可一并关联。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能与集成',
        content: [
          '**Tina的卖点是覆盖面广：一款应用即可完成聊天、图像和家庭实验室工具。** 以下内容均来自App Store页面。',
        ],
        items: [
          '**与大语言模型聊天。** 可与Ollama或llama.cpp提供的模型对话，也可与设备上的模型对话。',
          '**ComfyUI图像生成。** 应用页面称其完整支持ComfyUI，并在应用内提供节点编辑器。',
          '**语音。** 页面列出了语音和文本转语音支持。',
          '**家庭实验室集成。** 页面列出了Home Assistant、Firecrawl、Proxmox和RunPod；对于每项集成能做什么，页面没有给出详情。',
          '**多个Apple平台。** 同一个页面涵盖iPhone、Mac和Apple Vision Pro。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '设备要求',
        content: [
          '**Tina需要26.0或更高版本的iOS、macOS或visionOS，在Mac上还需要Apple M1或更新的芯片。** 应用页面没有给出内存数据。',
          '真正的硬件需求取决于推理在哪里运行。使用远程Ollama或llama.cpp服务器时，手机只需要显示聊天界面；使用设备端模型时，iPhone的内存就是上限。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '定价与隐私',
        content: [
          '**Tina免费下载，Tina Pro $1.99和$12.99的年度选项列为应用内购买。** 页面没有说明Pro解锁了哪些功能，因此在依赖某项功能之前，请先在应用内查看付费墙。',
          'Apple的隐私部分称，Tina会收集使用数据和诊断信息（崩溃和性能数据），这些数据不与您的身份关联。Apple指出，这些标签由开发者自行申报，未经核实。',
          '发送到您自己服务器的聊天内容会传到该服务器，因此那里的隐私取决于您如何托管和保护它。该应用是闭源的，本评测没有检查网络流量。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '自带服务器',
            '实际使用中的意义': '在家中的机器上运行大模型，用手机聊天。',
            '局限/注意事项': '您必须自行搭建并开放Ollama或llama.cpp。',
          },
          {
            '优点': '内置ComfyUI',
            '实际使用中的意义': '聊天和图像生成集中在一款应用里，包括节点编辑器。',
            '局限/注意事项': '需要您自己的ComfyUI实例；页面没有列出支持的工作流。',
          },
          {
            '优点': '设备端选项',
            '实际使用中的意义': '部分聊天无需任何服务器即可进行。',
            '局限/注意事项': '设备端模式没有公布模型列表、大小或运行时。',
          },
          {
            '优点': '入门价格低',
            '实际使用中的意义': '可免费试用；Pro版按页面所列为$1.99。',
            '局限/注意事项': '页面没有说明Pro增加了什么，也没有说明$1.99是否为一次性付费。',
          },
          {
            '优点': '支持整个Apple生态',
            '实际使用中的意义': '一个购买入口涵盖iPhone、Mac和Vision Pro。',
            '局限/注意事项': '所有平台都要求26版本；没有Android或Windows应用。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina与替代方案对比',
        columns: ['应用', '平台', '价格与许可证', '模型来源', '主要区别'],
        rows: [
          {
            '应用': 'Tina',
            '平台': 'iOS、Mac、Vision Pro',
            '价格与许可证': '免费增值，闭源',
            '模型来源': 'Ollama、llama.cpp、设备端',
            '主要区别': '增加了ComfyUI图像和家庭实验室集成；不是开源',
          },
          {
            '应用': '[Enchanted](/zh/power-local-llm/enchanted-review)',
            '平台': 'iOS、Mac',
            '价格与许可证': '免费，Apache 2.0',
            '模型来源': 'Ollama',
            '主要区别': '开源的Ollama客户端，自身没有内置引擎',
          },
          {
            '应用': '[Maid](/zh/power-local-llm/maid-review)',
            '平台': 'Android、iOS',
            '价格与许可证': '免费，MIT',
            '模型来源': '设备端、Ollama、OpenAI API',
            '主要区别': '开源，也支持Android；未列出ComfyUI',
          },
          {
            '应用': '[AnythingLLM Mobile](/zh/power-local-llm/anythingllm-mobile-review)',
            '平台': 'iOS、Android',
            '价格与许可证': '免费，MIT',
            '模型来源': '您的AnythingLLM工作区',
            '主要区别': '远程访问某个AnythingLLM实例，而不是直接连接模型服务器',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化。做决定前，请在各应用自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Tina',
        items: [
          '**运行Ollama或llama.cpp的家庭实验室玩家。** Tina正是围绕从Apple设备连接这些服务器而设计的。',
          '**想在手机上使用ComfyUI的用户。** 节点编辑器和生成控制都是应用的一部分。',
          '**希望在一款应用里同时拥有服务器和设备端备用方案的用户。** 页面列出了这两种模式。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用Tina',
        items: [
          '**需要开源的用户。** 代码并未公开；[Enchanted](/zh/power-local-llm/enchanted-review)是面向Ollama的开源方案。',
          '**Android或Windows用户。** 只列出了Apple平台；[Maid](/zh/power-local-llm/maid-review)支持Android。',
          '**系统低于iOS或macOS 26的用户。** 应用页面要求26.0或更高版本。',
          '**没有服务器、却想要模型目录的用户。** 设备端模式没有公布模型列表；请参阅[Locally AI](/zh/power-local-llm/locally-ai-review)。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Tina免费吗？',
            a: '可免费下载，含应用内购买：Tina Pro $1.99和$12.99的年度选项，见App Store页面。',
          },
          {
            q: 'Tina是谁开发的？',
            a: 'Wes Wickwire，App Store上列出的个人开发者。同名的GitHub账号托管着开源的Swift库，但没有Tina的代码仓库。',
          },
          {
            q: '使用Tina需要自己的服务器吗？',
            a: '不需要，页面还列出了设备端模型。只有使用Ollama、llama.cpp和ComfyUI功能时才需要服务器。',
          },
          {
            q: 'Tina能在Android上使用吗？',
            a: '不能。页面只涵盖iPhone、搭载Apple silicon的Mac和Apple Vision Pro。',
          },
          {
            q: 'Tina列出了哪些集成？',
            a: 'Home Assistant、Firecrawl、Proxmox和RunPod。页面没有给出每项集成如何工作的详情。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '从纸面上看，对于已经在家中托管模型、想要一款原生Apple应用来完成聊天、ComfyUI图像和若干家庭实验室联动，并带有设备端备用方案的用户，Tina很合适。',
          '需要注意的是透明度和成熟度：它是闭源的，设备端引擎和Pro功能都没有记载，唯一的公开来源是App Store页面，评测时该页面只有三条评分。',
          '如果您运行Ollama并想要开源方案，请先从[Enchanted](/zh/power-local-llm/enchanted-review)开始。如果您想在同一款应用里使用ComfyUI和家庭实验室集成，可以先试用Tina的免费版。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store上的Tina - Private Local AI](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — 版本、价格、要求、功能和隐私部分。',
          '[Tina隐私政策](https://wickwirew.github.io/site/privacypolicy) — 应用页面链接的政策页面。',
          '[GitHub上的wickwirew](https://github.com/wickwirew) — 开发者主页，用于查看是否有公开的Tina代码仓库。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Enchanted评测](/zh/power-local-llm/enchanted-review) — 适用于iOS和Mac的开源Ollama客户端。',
          '[Maid评测](/zh/power-local-llm/maid-review) — 面向本地和远程模型的开源移动客户端。',
          '[AnythingLLM Mobile评测](/zh/power-local-llm/anythingllm-mobile-review) — 远程访问您的AnythingLLM工作区。',
          '[Locally AI评测](/zh/power-local-llm/locally-ai-review) — 适用于iOS和Mac的免费增值设备端应用。',
          '[完整本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory) — 涵盖多平台本地LLM工具的更全面目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-es.webp',
    title: 'Reseña de Tina: cliente para iPhone de Ollama, llama.cpp y ComfyUI',
    seoTitle: 'Reseña de Tina: cliente iPhone para Ollama, llama.cpp y ComfyUI',
    intro:
      'Tina es una app para iPhone y Mac que chatea con modelos de tu propio servidor, de tu homelab o del propio dispositivo, y que además controla la generación de imágenes de ComfyUI. Esta reseña explica qué documenta su ficha de la App Store, qué queda poco claro y cómo se compara Tina con otros clientes móviles para modelos autoalojados.',
    metaDescription:
      'Reseña de Tina: cliente para iPhone y Mac de tus propios servidores Ollama, llama.cpp y ComfyUI, además de modelos en el dispositivo. Precios, requisito de iOS 26, privacidad, límites y alternativas.',
    twitterDescription:
      'Reseña de Tina: un cliente freemium de iOS/macOS para Ollama, llama.cpp y ComfyUI autoalojados, con modelos en el dispositivo e integraciones de homelab. Requisitos, privacidad, límites.',
    audience:
      'Usuarios de iPhone y Mac que ya ejecutan (o quieren ejecutar) Ollama, llama.cpp o ComfyUI en casa y quieren un cliente nativo para ello — cubre conexiones, precios, requisitos, privacidad, límites y alternativas.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Tina',
    targetKeywords: [
      'reseña tina',
      'tina ia local privada',
      'tina app ollama ios',
      'cliente ollama iphone',
      'cliente llama.cpp ios',
      'app comfyui iphone',
      'app ia homelab ios',
      'cliente móvil llm autoalojado',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Tina es una app de Apple freemium y de código cerrado que se conecta a modelos que alojas tú mismo (Ollama, llama.cpp), genera imágenes mediante ComfyUI y también puede ejecutar modelos en el dispositivo.** Según su ficha de la App Store, requiere iOS, macOS o visionOS 26.0 o posterior, se descarga gratis y vende Tina Pro a $1.99 y una opción anual de $12.99 como compras dentro de la app. Esta reseña cubre la versión 1.3.8 y se basa en la ficha pública, no en pruebas prácticas.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Tina si ejecuto Ollama en casa?',
        answer:
          'Sí, si quieres una única app nativa que hable con Ollama o llama.cpp, controle ComfyUI y se conecte con Home Assistant o Proxmox, y tienes iOS 26 o macOS 26. Descártala si necesitas código abierto o Android: el código no es público y solo figuran plataformas de Apple. Enchanted es la alternativa gratuita y de código abierto para Ollama en iOS.',
        bullets: [
          'Descarga gratuita con compras dentro de la app: Tina Pro a $1.99 y una opción anual de $12.99.',
          'Se conecta a Ollama, llama.cpp y modelos en el dispositivo; generación de imágenes con ComfyUI y un editor de nodos.',
          'Integraciones indicadas para Home Assistant, Firecrawl, Proxmox y RunPod.',
          'Requiere iOS, macOS (Apple silicon) o visionOS 26.0 o posterior.',
          'Código cerrado; la etiqueta de privacidad indica datos de uso y diagnóstico, no vinculados a ti.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Cómo conseguir Tina', anchor: 'get-it' },
      { label: 'Tina de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Tina', anchor: 'what-is-tina' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Funciones e integraciones', anchor: 'features' },
      { label: 'Requisitos del dispositivo', anchor: 'requirements' },
      { label: 'Precios y privacidad', anchor: 'privacy' },
      { label: 'Compensaciones: ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'Tina frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Tina', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Tina', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tina, del desarrollador Wes Wickwire, es un cliente freemium para plataformas de Apple que chatea con tu propio servidor Ollama o llama.cpp, genera imágenes mediante ComfyUI y también ejecuta modelos en el dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en ella como un mando a distancia para la IA que alojas en casa, con una pequeña opción en el dispositivo añadida: los modelos pesados se quedan en tu servidor y la app del teléfono es la interfaz.',
          },
        ],
        items: [
          'Versión reseñada: 1.3.8, según la [ficha de la App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571).',
          'Precio: descarga gratuita; Tina Pro a $1.99 y una opción anual de $12.99 figuran como compras dentro de la app.',
          'Conexiones: Ollama, llama.cpp, modelos en el dispositivo y ComfyUI, además de las integraciones con Home Assistant, Firecrawl, Proxmox y RunPod.',
          'Plataforma: iPhone, Mac con Apple silicon y Apple Vision Pro, todos con la versión 26.0 o posterior.',
          'Apertura: código cerrado; no se encontró ningún repositorio público ni sitio del producto.',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: 'Cómo conseguir Tina',
        content: [
          '**Tina se distribuye a través de la App Store de Apple.** La descarga ocupa 56.3 MB y la ficha tiene clasificación 4+.',
          'Esta reseña complementa el [directorio de software LLM local](/es/power-local-llm/local-llm-software-directory) de PromptQuorum, que incluye Tina junto a otras herramientas de IA local móviles y de escritorio.',
        ],
        columns: ['Canal', 'Cómo conseguirla'],
        rows: [
          {
            'Canal': 'App Store de Apple',
            'Cómo conseguirla': '[Tina - Private Local AI en la App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            'Canal': 'Política de privacidad',
            'Cómo conseguirla': '[Política de privacidad de Tina](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: 'No se encontró ningún sitio web específico del producto ni repositorio de código fuente de Tina. La ficha de la App Store es la principal fuente pública.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tina de un vistazo',
        columns: ['Atributo', 'Tina'],
        rows: [
          { 'Atributo': 'Plataforma', 'Tina': 'iOS, macOS, visionOS (26.0+)' },
          { 'Atributo': 'Precio', 'Tina': 'Gratis, compras dentro de la app' },
          { 'Atributo': 'Licencia', 'Tina': 'Código cerrado' },
          { 'Atributo': 'Funciona totalmente offline', 'Tina': 'Solo modelos locales; el modo servidor necesita red' },
          { 'Atributo': 'Motor integrado', 'Tina': 'Sí, figuran modelos en el dispositivo' },
          { 'Atributo': 'Compatible con Ollama', 'Tina': 'Sí' },
          { 'Atributo': 'Generación de imágenes', 'Tina': 'Sí, con ComfyUI y un editor de nodos' },
          { 'Atributo': 'Entrada / salida de voz', 'Tina': 'Sí, voz y texto a voz' },
        ],
        note: 'Los atributos siguen la comparación de chats móviles usada en el directorio de software LLM local. Proceden solo de la ficha de la App Store, que no cubre todas las funciones.',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'Qué es Tina',
        content: [
          '**Tina es primero un cliente y, en segundo lugar, un ejecutor en el dispositivo.** El planteamiento de la ficha es «connect to local models: your own server, on your device, or your homelab» (conéctate a modelos locales: tu propio servidor, tu dispositivo o tu homelab), con Ollama, llama.cpp y modelos en el dispositivo como fuentes citadas.',
          'La publica Wes Wickwire, un desarrollador individual, y está clasificada en la categoría Utilidades. No se nombra ningún motor de inferencia para los modelos en el dispositivo, así que esta reseña no indica cuál usa.',
          'Esta reseña se basa únicamente en la ficha de la App Store. No incluye pruebas prácticas, por lo que aquí no se valoran la velocidad, la estabilidad ni la calidad de las respuestas.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración es una instalación desde la App Store y, después, apuntar la app a un servidor o a un modelo.** La ficha no documenta el flujo del primer arranque, así que los pasos siguientes se basan en lo que indica.',
        ],
        numberedItems: [
          {
            title: 'Comprueba la versión de tu sistema operativo',
            whyItMatters: 'La ficha exige iOS, macOS o visionOS 26.0 o posterior y, en Mac, un chip Apple M1 o más reciente.',
          },
          {
            title: 'Instala Tina',
            whyItMatters: 'Consíguela en la [App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571); la descarga ocupa 56.3 MB.',
          },
          {
            title: 'Conecta una fuente de modelos',
            whyItMatters: 'Añade la dirección de tu servidor Ollama o llama.cpp, o elige un modelo en el dispositivo, según dónde quieras que se ejecute la inferencia.',
          },
          {
            title: 'Opcional: añade ComfyUI e integraciones',
            whyItMatters: 'Enlaza una instancia de ComfyUI para generar imágenes, y Home Assistant, Firecrawl, Proxmox o RunPod si los usas.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones e integraciones',
        content: [
          '**El punto fuerte de Tina es su alcance: una sola app para chat, imágenes y herramientas de homelab.** Todo lo que sigue procede de la ficha de la App Store.',
        ],
        items: [
          '**Chat con LLM.** Habla con modelos servidos por Ollama o llama.cpp, o con modelos del dispositivo.',
          '**Generación de imágenes con ComfyUI.** La ficha describe una compatibilidad completa con ComfyUI, con un editor de nodos dentro de la app.',
          '**Voz.** Figuran la voz y el texto a voz.',
          '**Integraciones de homelab.** Se nombran Home Assistant, Firecrawl, Proxmox y RunPod; la ficha no da detalles de lo que puede hacer cada integración.',
          '**Varias plataformas de Apple.** Una sola ficha cubre iPhone, Mac y Apple Vision Pro.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos del dispositivo',
        content: [
          '**Tina requiere la versión 26.0 o posterior de iOS, macOS o visionOS y, en Mac, un chip Apple M1 o más reciente.** La ficha no da ninguna cifra de RAM.',
          'El lugar donde se ejecuta la inferencia decide el hardware que realmente hace falta. Con un servidor Ollama o llama.cpp remoto, el teléfono solo necesita mostrar el chat; con modelos en el dispositivo, el límite es la memoria del iPhone.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Precios y privacidad',
        content: [
          '**Tina se descarga gratis, con Tina Pro a $1.99 y una opción anual a $12.99 como compras dentro de la app.** La ficha no dice qué funciones desbloquea Pro, así que revisa el muro de pago en la app antes de depender de una función.',
          'La sección de privacidad de Apple indica que Tina recopila datos de uso y diagnósticos (datos de fallos y de rendimiento) que no están vinculados a tu identidad. Apple señala que estas etiquetas las declara el propio desarrollador y no se verifican.',
          'Los chats enviados a tu propio servidor viajan hasta ese servidor, así que tu privacidad allí depende de cómo lo alojes y protejas. La app es de código cerrado y esta reseña no inspeccionó el tráfico de red.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Trae tu propio servidor',
            'Qué significa en el uso real': 'Ejecuta modelos grandes en un equipo de casa y chatea desde el teléfono.',
            'Limitación / advertencia': 'Debes configurar y exponer Ollama o llama.cpp tú mismo.',
          },
          {
            'Ventaja': 'ComfyUI integrado',
            'Qué significa en el uso real': 'El chat y la generación de imágenes viven en una sola app, con editor de nodos incluido.',
            'Limitación / advertencia': 'Necesita tu propia instancia de ComfyUI; la ficha no nombra los flujos de trabajo compatibles.',
          },
          {
            'Ventaja': 'Opción en el dispositivo',
            'Qué significa en el uso real': 'Algunos chats funcionan sin ningún servidor.',
            'Limitación / advertencia': 'No se publica ninguna lista de modelos, tamaño ni motor para el modo en el dispositivo.',
          },
          {
            'Ventaja': 'Precio de entrada bajo',
            'Qué significa en el uso real': 'Gratis para probar; Pro cuesta $1.99 según la ficha.',
            'Limitación / advertencia': 'La ficha no explica qué añade Pro ni si los $1.99 son un pago único.',
          },
          {
            'Ventaja': 'Compatibilidad en todo Apple',
            'Qué significa en el uso real': 'Una sola vía de compra cubre iPhone, Mac y Vision Pro.',
            'Limitación / advertencia': 'Todo requiere la versión 26; no hay app para Android ni Windows.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Origen de los modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'Tina',
            'Plataformas': 'iOS, Mac, Vision Pro',
            'Precio y licencia': 'Freemium, código cerrado',
            'Origen de los modelos': 'Ollama, llama.cpp, en el dispositivo',
            'Diferencia clave': 'Añade imágenes con ComfyUI e integraciones de homelab; no es de código abierto',
          },
          {
            'App': '[Enchanted](/es/power-local-llm/enchanted-review)',
            'Plataformas': 'iOS, Mac',
            'Precio y licencia': 'Gratis, Apache 2.0',
            'Origen de los modelos': 'Ollama',
            'Diferencia clave': 'Cliente de Ollama de código abierto, sin motor propio integrado',
          },
          {
            'App': '[Maid](/es/power-local-llm/maid-review)',
            'Plataformas': 'Android, iOS',
            'Precio y licencia': 'Gratis, MIT',
            'Origen de los modelos': 'En el dispositivo, Ollama, API de OpenAI',
            'Diferencia clave': 'Código abierto y también en Android; ComfyUI no figura',
          },
          {
            'App': '[AnythingLLM Mobile](/es/power-local-llm/anythingllm-mobile-review)',
            'Plataformas': 'iOS, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Origen de los modelos': 'Tu espacio de trabajo de AnythingLLM',
            'Diferencia clave': 'Acceso remoto a una instancia de AnythingLLM en lugar de a servidores de modelos directos',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia. Verifica los detalles actuales en la ficha propia de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Tina',
        items: [
          '**Propietarios de un homelab que ejecutan Ollama o llama.cpp.** Tina está pensada para conectarse a esos servidores desde un dispositivo Apple.',
          '**Usuarios de ComfyUI que quieren acceso desde el móvil.** El editor de nodos y los controles de generación forman parte de la app.',
          '**Usuarios que quieren servidor y respaldo en el dispositivo en una sola app.** Se indican ambos modos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Tina',
        items: [
          '**Cualquiera que necesite código abierto.** El código no es público; [Enchanted](/es/power-local-llm/enchanted-review) es de código abierto para Ollama.',
          '**Usuarios de Android o Windows.** Solo figuran plataformas de Apple; [Maid](/es/power-local-llm/maid-review) cubre Android.',
          '**Personas con una versión de iOS o macOS inferior a la 26.** La ficha exige la versión 26.0 o posterior.',
          '**Quien no tenga servidor y quiera un catálogo de modelos.** El modo en el dispositivo no tiene una lista de modelos publicada; consulta [Locally AI](/es/power-local-llm/locally-ai-review).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Tina?',
            a: 'Se descarga gratis con compras dentro de la app: Tina Pro a $1.99 y una opción anual a $12.99, según la ficha de la App Store.',
          },
          {
            q: '¿Quién desarrolla Tina?',
            a: 'Wes Wickwire, un desarrollador individual que figura en la App Store. Un perfil de GitHub con el mismo nombre aloja bibliotecas de Swift de código abierto, pero ningún repositorio de Tina.',
          },
          {
            q: '¿Necesito mi propio servidor para usar Tina?',
            a: 'No, la ficha también cita modelos en el dispositivo. Solo hace falta un servidor para las funciones de Ollama, llama.cpp y ComfyUI.',
          },
          {
            q: '¿Funciona Tina en Android?',
            a: 'No. La ficha cubre solo iPhone, Mac con Apple silicon y Apple Vision Pro.',
          },
          {
            q: '¿Qué integraciones indica Tina?',
            a: 'Home Assistant, Firecrawl, Proxmox y RunPod. La ficha no da detalles de cómo funciona cada una.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Sobre el papel, Tina encaja bien con quien ya aloja modelos en casa y quiere una única app nativa de Apple para chat, imágenes de ComfyUI y algunos enlaces de homelab, con un respaldo en el dispositivo.',
          'Las salvedades son la transparencia y la madurez: es de código cerrado, el motor en el dispositivo y las funciones de Pro no están documentados, y la única fuente pública es la ficha de la App Store, que mostraba tres valoraciones en el momento de la reseña.',
          'Si ejecutas Ollama y quieres código abierto, empieza con [Enchanted](/es/power-local-llm/enchanted-review). Si quieres ComfyUI e integraciones de homelab en la misma app, prueba primero el nivel gratuito de Tina.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Tina - Private Local AI en la App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — versión, precio, requisitos, funciones y sección de privacidad.',
          '[Política de privacidad de Tina](https://wickwirew.github.io/site/privacypolicy) — página de la política enlazada desde la ficha.',
          '[wickwirew en GitHub](https://github.com/wickwirew) — perfil del desarrollador, revisado para buscar un repositorio público de Tina.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Enchanted](/es/power-local-llm/enchanted-review) — el cliente de Ollama de código abierto para iOS y Mac.',
          '[Reseña de Maid](/es/power-local-llm/maid-review) — un cliente móvil de código abierto para modelos locales y remotos.',
          '[Reseña de AnythingLLM Mobile](/es/power-local-llm/anythingllm-mobile-review) — acceso remoto a tu espacio de trabajo de AnythingLLM.',
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una app freemium en el dispositivo para iOS y Mac.',
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas LLM locales en todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-pt.webp',
    title: 'Análise do Tina: cliente para iPhone com Ollama, llama.cpp e ComfyUI',
    seoTitle: 'Análise do Tina: cliente iPhone para Ollama, llama.cpp e ComfyUI',
    intro:
      'O Tina é um aplicativo para iPhone e Mac que conversa com modelos no seu próprio servidor, no seu homelab ou no próprio aparelho, e também controla a geração de imagens do ComfyUI. Esta análise cobre o que a ficha dele na App Store documenta, o que fica pouco claro e como o Tina se compara a outros clientes móveis para modelos auto-hospedados.',
    metaDescription:
      'Análise do Tina: cliente para iPhone e Mac que se conecta aos seus servidores Ollama, llama.cpp e ComfyUI, além de modelos no dispositivo. Preços, exigência do iOS 26, privacidade, limites e alternativas.',
    twitterDescription:
      'Análise do Tina: um cliente iOS/macOS freemium para Ollama, llama.cpp e ComfyUI auto-hospedados, com modelos no dispositivo e integrações de homelab. Requisitos, privacidade e limites.',
    audience:
      'Usuários de iPhone e Mac que já rodam (ou querem rodar) Ollama, llama.cpp ou ComfyUI em casa e querem um cliente nativo para isso — aborda conexões, preços, requisitos, privacidade, limites e alternativas.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Tina',
    targetKeywords: [
      'análise tina',
      'tina ia local privada',
      'tina ollama app ios',
      'cliente ollama para iphone',
      'cliente llama.cpp para ios',
      'comfyui no iphone',
      'app de ia para homelab ios',
      'cliente móvel para llm auto-hospedado',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**O Tina é um aplicativo Apple freemium e de código fechado que se conecta a modelos hospedados por você (Ollama, llama.cpp), gera imagens pelo ComfyUI e também pode executar modelos no próprio aparelho.** Segundo a ficha dele na App Store, exige iOS, macOS ou visionOS 26.0 ou posterior, é gratuito para baixar e vende o Tina Pro por $1.99 e uma opção anual de $12.99 como compras no aplicativo. Esta análise cobre a versão 1.3.8 e se baseia na ficha pública, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Tina se eu rodo o Ollama em casa?',
        answer:
          'Sim, se você quer um único aplicativo nativo que fale com o Ollama ou o llama.cpp, controle o ComfyUI e se integre ao Home Assistant ou ao Proxmox, e está no iOS 26 ou macOS 26. Não vale a pena se você precisa de código aberto ou de Android: o código não é público e só plataformas Apple são listadas. O Enchanted é a alternativa gratuita e de código aberto para o Ollama no iOS.',
        bullets: [
          'Download gratuito com compras no aplicativo: Tina Pro por $1.99 e uma opção anual de $12.99.',
          'Conecta-se ao Ollama, ao llama.cpp e a modelos no dispositivo; geração de imagens via ComfyUI com editor de nós.',
          'Integrações listadas para Home Assistant, Firecrawl, Proxmox e RunPod.',
          'Exige iOS, macOS (Apple silicon) ou visionOS 26.0 ou posterior.',
          'Código fechado; o selo de privacidade lista dados de uso e diagnóstico, não vinculados a você.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Como obter o Tina', anchor: 'get-it' },
      { label: 'Tina em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Tina', anchor: 'what-is-tina' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Recursos e integrações', anchor: 'features' },
      { label: 'Requisitos do aparelho', anchor: 'requirements' },
      { label: 'Preços e privacidade', anchor: 'privacy' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'Tina vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o Tina', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Tina', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Tina, do desenvolvedor Wes Wickwire, é um cliente freemium para plataformas Apple que conversa com o seu próprio servidor Ollama ou llama.cpp, gera imagens pelo ComfyUI e também executa modelos no dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um controle remoto para a IA que você hospeda em casa, com uma pequena opção no dispositivo: os modelos pesados ficam no seu servidor, e o aplicativo no celular é a interface.',
          },
        ],
        items: [
          'Versão analisada: 1.3.8, conforme a [ficha da App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571).',
          'Preço: download gratuito; o Tina Pro por $1.99 e uma opção anual de $12.99 são listados como compras no aplicativo.',
          'Conexões: Ollama, llama.cpp, modelos no dispositivo e ComfyUI, além de integrações com Home Assistant, Firecrawl, Proxmox e RunPod.',
          'Plataforma: iPhone, Mac com Apple silicon e Apple Vision Pro, todos na versão 26.0 ou posterior.',
          'Abertura: código fechado; não foi encontrado repositório público nem site do produto.',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: 'Como obter o Tina',
        content: [
          '**O Tina é distribuído pela Apple App Store.** O download tem 56,3 MB e a ficha tem classificação 4+.',
          'Esta análise complementa o [diretório de software de LLM local](/pt/power-local-llm/local-llm-software-directory) da PromptQuorum, que lista o Tina ao lado de outras ferramentas de IA local para celular e desktop.',
        ],
        columns: ['Canal', 'Como obter'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Como obter': '[Tina - Private Local AI na App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            'Canal': 'Política de privacidade',
            'Como obter': '[Política de privacidade do Tina](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: 'Não foi encontrado site dedicado nem repositório de código-fonte do Tina. A ficha da App Store é a principal fonte pública.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tina em resumo',
        columns: ['Atributo', 'Tina'],
        rows: [
          { 'Atributo': 'Plataforma', 'Tina': 'iOS, macOS, visionOS (26.0+)' },
          { 'Atributo': 'Preço', 'Tina': 'Gratuito, compras no app' },
          { 'Atributo': 'Licença', 'Tina': 'Código fechado' },
          { 'Atributo': 'Funciona totalmente offline', 'Tina': 'Só modelos no aparelho; modo servidor exige conexão' },
          { 'Atributo': 'Motor integrado', 'Tina': 'Sim, modelos no dispositivo são listados' },
          { 'Atributo': 'Funciona com Ollama', 'Tina': 'Sim' },
          { 'Atributo': 'Geração de imagens', 'Tina': 'Sim, via ComfyUI com editor de nós' },
          { 'Atributo': 'Entrada / saída de voz', 'Tina': 'Sim, voz e conversão de texto em fala' },
        ],
        note: 'Os atributos seguem a comparação de chat para celular usada no Diretório de Software de LLM Local. Eles vêm apenas da ficha da App Store, que não cobre todos os recursos.',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'O que é o Tina',
        content: [
          '**O Tina é primeiro um cliente e só depois um executor no dispositivo.** A proposta da ficha é "conecte-se a modelos locais: seu próprio servidor, no seu dispositivo ou no seu homelab", com Ollama, llama.cpp e modelos no dispositivo citados como fontes.',
          'Ele é publicado por Wes Wickwire, um desenvolvedor individual, e está na categoria Utilitários. Nenhum motor de inferência para os modelos no dispositivo é citado, então esta análise não afirma qual ambiente de execução ele usa.',
          'Esta análise se baseia apenas na ficha da App Store. Ela não inclui testes práticos, por isso velocidade, estabilidade e qualidade das respostas não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**A configuração é uma instalação pela App Store, seguida de apontar o aplicativo para um servidor ou um modelo.** A ficha não documenta o fluxo da primeira execução, então os passos abaixo seguem o que ela informa.',
        ],
        numberedItems: [
          {
            title: 'Verifique a versão do sistema',
            whyItMatters: 'A ficha exige iOS, macOS ou visionOS 26.0 ou posterior e, no Mac, um chip Apple M1 ou mais recente.',
          },
          {
            title: 'Instale o Tina',
            whyItMatters: 'Baixe-o na [App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571); o download tem 56,3 MB.',
          },
          {
            title: 'Conecte uma fonte de modelos',
            whyItMatters: 'Adicione o endereço do seu servidor Ollama ou llama.cpp, ou escolha um modelo no dispositivo, conforme o lugar onde você quer que a inferência rode.',
          },
          {
            title: 'Opcional: adicione o ComfyUI e as integrações',
            whyItMatters: 'Vincule uma instância do ComfyUI para gerar imagens e, se você os usa, o Home Assistant, o Firecrawl, o Proxmox ou o RunPod.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos e integrações',
        content: [
          '**O diferencial do Tina é o alcance: um só aplicativo para chat, imagens e ferramentas de homelab.** Tudo abaixo vem da ficha da App Store.',
        ],
        items: [
          '**Chat com LLMs.** Converse com modelos servidos pelo Ollama ou pelo llama.cpp, ou com modelos no próprio aparelho.',
          '**Geração de imagens com ComfyUI.** A ficha descreve suporte completo ao ComfyUI, com um editor de nós dentro do aplicativo.',
          '**Voz.** Suporte a voz e a conversão de texto em fala é listado.',
          '**Integrações de homelab.** Home Assistant, Firecrawl, Proxmox e RunPod são citados; a ficha não detalha o que cada integração pode fazer.',
          '**Várias plataformas Apple.** Uma única ficha cobre iPhone, Mac e Apple Vision Pro.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos do aparelho',
        content: [
          '**O Tina exige a versão 26.0 ou posterior do iOS, do macOS ou do visionOS e, no Mac, um chip Apple M1 ou mais recente.** A ficha não informa a quantidade de RAM.',
          'O lugar onde a inferência roda define a necessidade real de hardware. Com um servidor Ollama ou llama.cpp remoto, o celular só precisa exibir o chat; com modelos no dispositivo, a memória do iPhone é o limite.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preços e privacidade',
        content: [
          '**O Tina é gratuito para baixar, com o Tina Pro por $1.99 e uma opção anual de $12.99 listados como compras no aplicativo.** A ficha não diz quais recursos o Pro libera, então confira a tela de assinatura no aplicativo antes de contar com algum recurso.',
          'A seção de privacidade da Apple diz que o Tina coleta dados de uso e diagnósticos (dados de falhas e de desempenho) que não são vinculados à sua identidade. A Apple observa que esses selos são informados pelo próprio desenvolvedor e não são verificados.',
          'As conversas enviadas ao seu próprio servidor viajam até esse servidor, então a sua privacidade ali depende de como você o hospeda e protege. O aplicativo é de código fechado e esta análise não inspecionou o tráfego de rede.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Traga o seu próprio servidor',
            'O que significa no uso real': 'Rode modelos grandes em uma máquina em casa e converse pelo celular.',
            'Limitação / ressalva': 'Você mesmo precisa configurar e expor o Ollama ou o llama.cpp.',
          },
          {
            'Benefício': 'ComfyUI integrado',
            'O que significa no uso real': 'Chat e geração de imagens ficam em um só aplicativo, incluindo um editor de nós.',
            'Limitação / ressalva': 'Exige a sua própria instância do ComfyUI; a ficha não cita os fluxos de trabalho suportados.',
          },
          {
            'Benefício': 'Opção no dispositivo',
            'O que significa no uso real': 'Algumas conversas funcionam sem nenhum servidor.',
            'Limitação / ressalva': 'Não há lista de modelos, tamanho nem ambiente de execução publicados para o modo no dispositivo.',
          },
          {
            'Benefício': 'Preço de entrada baixo',
            'O que significa no uso real': 'Gratuito para testar; o Pro custa $1.99, conforme a ficha.',
            'Limitação / ressalva': 'A ficha não explica o que o Pro acrescenta nem se os $1.99 são pagamento único.',
          },
          {
            'Benefício': 'Suporte em todo o ecossistema Apple',
            'O que significa no uso real': 'Um único caminho de compra cobre iPhone, Mac e Vision Pro.',
            'Limitação / ressalva': 'Tudo exige a versão 26; não há aplicativo para Android nem para Windows.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina vs. alternativas',
        columns: ['Aplicativo', 'Plataformas', 'Preço e licença', 'Fonte de modelos', 'Diferença-chave'],
        rows: [
          {
            'Aplicativo': 'Tina',
            'Plataformas': 'iOS, Mac, Vision Pro',
            'Preço e licença': 'Freemium, código fechado',
            'Fonte de modelos': 'Ollama, llama.cpp, no dispositivo',
            'Diferença-chave': 'Acrescenta imagens do ComfyUI e integrações de homelab; não é de código aberto',
          },
          {
            'Aplicativo': '[Enchanted](/pt/power-local-llm/enchanted-review)',
            'Plataformas': 'iOS, Mac',
            'Preço e licença': 'Gratuito, Apache 2.0',
            'Fonte de modelos': 'Ollama',
            'Diferença-chave': 'Cliente Ollama de código aberto, sem motor próprio integrado',
          },
          {
            'Aplicativo': '[Maid](/pt/power-local-llm/maid-review)',
            'Plataformas': 'Android, iOS',
            'Preço e licença': 'Gratuito, MIT',
            'Fonte de modelos': 'No dispositivo, Ollama, API da OpenAI',
            'Diferença-chave': 'Código aberto e também no Android; ComfyUI não listado',
          },
          {
            'Aplicativo': '[AnythingLLM Mobile](/pt/power-local-llm/anythingllm-mobile-review)',
            'Plataformas': 'iOS, Android',
            'Preço e licença': 'Gratuito, MIT',
            'Fonte de modelos': 'Seu workspace do AnythingLLM',
            'Diferença-chave': 'Acesso remoto a uma instância do AnythingLLM, em vez de servidores de modelos puros',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de aplicativos de terceiros mudam com frequência. Verifique os detalhes atuais na ficha de cada aplicativo antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Tina',
        items: [
          '**Donos de homelab que rodam Ollama ou llama.cpp.** O Tina foi feito em torno da conexão com esses servidores a partir de um dispositivo Apple.',
          '**Usuários do ComfyUI que querem acesso pelo celular.** O editor de nós e os controles de geração fazem parte do aplicativo.',
          '**Usuários que querem um servidor e uma alternativa no dispositivo em um só aplicativo.** Os dois modos são listados.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o Tina',
        items: [
          '**Quem precisa de código aberto.** O código não é público; o [Enchanted](/pt/power-local-llm/enchanted-review) é de código aberto para o Ollama.',
          '**Usuários de Android ou Windows.** Só plataformas Apple são listadas; o [Maid](/pt/power-local-llm/maid-review) cobre o Android.',
          '**Quem está abaixo do iOS ou do macOS 26.** A ficha exige a versão 26.0 ou posterior.',
          '**Quem não tem servidor e quer um catálogo de modelos.** O modo no dispositivo não tem lista de modelos publicada; veja o [Locally AI](/pt/power-local-llm/locally-ai-review).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Tina é gratuito?',
            a: 'Ele é gratuito para baixar, com compras no aplicativo: o Tina Pro por $1.99 e uma opção anual de $12.99, conforme a ficha da App Store.',
          },
          {
            q: 'Quem faz o Tina?',
            a: 'Wes Wickwire, um desenvolvedor individual listado na App Store. Um perfil do GitHub com o mesmo nome hospeda bibliotecas Swift de código aberto, mas nenhum repositório do Tina.',
          },
          {
            q: 'Preciso de um servidor próprio para usar o Tina?',
            a: 'Não, a ficha também cita modelos no dispositivo. Um servidor só é necessário para os recursos de Ollama, llama.cpp e ComfyUI.',
          },
          {
            q: 'O Tina funciona no Android?',
            a: 'Não. A ficha cobre apenas iPhone, Mac com Apple silicon e Apple Vision Pro.',
          },
          {
            q: 'Quais integrações o Tina lista?',
            a: 'Home Assistant, Firecrawl, Proxmox e RunPod. A ficha não detalha como cada uma funciona.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'No papel, o Tina é uma boa opção para quem já hospeda modelos em casa e quer um único aplicativo Apple nativo para chat, imagens do ComfyUI e alguns recursos de homelab, com uma alternativa no dispositivo.',
          'As ressalvas são a transparência e a maturidade: o código é fechado, o motor no dispositivo e os recursos do Pro não estão documentados, e a única fonte pública é a ficha da App Store, que exibia três avaliações no momento da análise.',
          'Se você roda o Ollama e quer código aberto, comece pelo [Enchanted](/pt/power-local-llm/enchanted-review). Se quer ComfyUI e integrações de homelab no mesmo aplicativo, experimente primeiro a versão gratuita do Tina.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Tina - Private Local AI na App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — versão, preço, requisitos, recursos e seção de privacidade.',
          '[Política de privacidade do Tina](https://wickwirew.github.io/site/privacypolicy) — página de política vinculada na ficha.',
          '[wickwirew no GitHub](https://github.com/wickwirew) — perfil do desenvolvedor, consultado em busca de um repositório público do Tina.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Enchanted](/pt/power-local-llm/enchanted-review) — o cliente Ollama de código aberto para iOS e Mac.',
          '[Análise do Maid](/pt/power-local-llm/maid-review) — um cliente móvel de código aberto para modelos locais e remotos.',
          '[Análise do AnythingLLM Mobile](/pt/power-local-llm/anythingllm-mobile-review) — acesso remoto ao seu workspace do AnythingLLM.',
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — um aplicativo freemium no dispositivo para iOS e Mac.',
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-ar.webp',
    title: 'مراجعة Tina: عميل آيفون لـ Ollama وllama.cpp وComfyUI',
    seoTitle: 'مراجعة Tina: عميل آيفون لـ Ollama وllama.cpp وComfyUI',
    intro:
      'Tina تطبيق لآيفون وماك يدردش مع نماذج على خادمك الخاص أو في مختبرك المنزلي (homelab) أو على الجهاز نفسه، ويتحكم أيضًا في توليد الصور عبر ComfyUI. تتناول هذه المراجعة ما توثّقه صفحة التطبيق على App Store، وما هو غير واضح، ومقارنة Tina بعملاء الجوال الآخرين للنماذج المستضافة ذاتيًا.',
    metaDescription:
      'مراجعة Tina: عميل لآيفون وماك لخوادم Ollama وllama.cpp وComfyUI الخاصة بك إضافة إلى نماذج على الجهاز. الأسعار ومتطلب iOS 26 وتسمية الخصوصية والقيود والبدائل.',
    twitterDescription:
      'مراجعة Tina: عميل iOS/macOS مجاني مع ميزات مدفوعة لـ Ollama وllama.cpp وComfyUI المستضافة ذاتيًا، مع نماذج على الجهاز وتكاملات homelab. المتطلبات والخصوصية والقيود.',
    audience:
      'مستخدمو آيفون وماك الذين يشغّلون Ollama أو llama.cpp أو ComfyUI في المنزل (أو يريدون ذلك) ويريدون عميلًا أصليًا لها — يغطي الاتصالات والأسعار والمتطلبات والخصوصية والقيود والبدائل.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Tina',
    targetKeywords: [
      'مراجعة tina',
      'tina ذكاء اصطناعي محلي خاص',
      'تطبيق tina لـ ollama على iOS',
      'عميل ollama للآيفون',
      'عميل llama.cpp لنظام iOS',
      'تطبيق comfyui للآيفون',
      'تطبيق ذكاء اصطناعي homelab على iOS',
      'عميل جوال لنماذج لغوية مستضافة ذاتيًا',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Tina تطبيق Apple مجاني مع ميزات مدفوعة ومغلق المصدر، يتصل بنماذج تستضيفها بنفسك (Ollama وllama.cpp) ويولّد الصور عبر ComfyUI، ويمكنه أيضًا تشغيل النماذج على الجهاز.** بحسب صفحته على App Store، يتطلب iOS أو macOS أو visionOS بالإصدار 26.0 أو أحدث، وتنزيله مجاني، ويبيع Tina Pro بسعر $1.99 وخيارًا سنويًا بسعر $12.99 على شكل مشتريات داخل التطبيق. تغطي هذه المراجعة الإصدار 1.3.8 وتستند إلى الصفحة العلنية، لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق Tina التثبيت إذا كنت أشغّل Ollama في المنزل؟',
        answer:
          'نعم، إذا كنت تريد تطبيقًا أصليًا واحدًا يتحدث مع Ollama أو llama.cpp ويتحكم في ComfyUI ويرتبط بـ Home Assistant أو Proxmox، وكنت تستخدم iOS 26 أو macOS 26. تجاوزه إذا كنت تحتاج إلى مصدر مفتوح أو أندرويد: الشيفرة غير متاحة وتُدرج منصات Apple فقط. يظل Enchanted البديل المجاني ومفتوح المصدر لـ Ollama على iOS.',
        bullets: [
          'تنزيل مجاني مع مشتريات داخل التطبيق: Tina Pro بسعر $1.99 وخيار سنوي بسعر $12.99.',
          'يتصل بـ Ollama وllama.cpp والنماذج على الجهاز؛ وتوليد الصور عبر ComfyUI مع محرر عُقد (node editor).',
          'تكاملات مدرجة مع Home Assistant وFirecrawl وProxmox وRunPod.',
          'يتطلب iOS أو macOS (Apple silicon) أو visionOS بالإصدار 26.0 أو أحدث.',
          'مغلق المصدر؛ وتدرج تسمية الخصوصية بيانات الاستخدام والتشخيص، غير مرتبطة بهويتك.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'كيفية الحصول على Tina', anchor: 'get-it' },
      { label: 'Tina في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Tina', anchor: 'what-is-tina' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات والتكاملات', anchor: 'features' },
      { label: 'متطلبات الجهاز', anchor: 'requirements' },
      { label: 'الأسعار والخصوصية', anchor: 'privacy' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Tina مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Tina', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Tina', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tina، من تطوير المطوّر Wes Wickwire، عميل لمنصات Apple مجاني مع ميزات مدفوعة، يدردش مع خادم Ollama أو llama.cpp الخاص بك ويولّد الصور عبر ComfyUI ويشغّل أيضًا نماذج على الجهاز.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله جهاز تحكم عن بُعد للذكاء الاصطناعي الذي تستضيفه في المنزل، مع خيار صغير على الجهاز: تبقى النماذج الثقيلة على خادمك، ويكون التطبيق على هاتفك هو الواجهة.',
          },
        ],
        items: [
          'الإصدار المراجَع: 1.3.8 كما يظهر في [صفحة التطبيق على App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571).',
          'السعر: التنزيل مجاني؛ ويُدرج Tina Pro بسعر $1.99 وخيار سنوي بسعر $12.99 على أنها مشتريات داخل التطبيق.',
          'الاتصالات: Ollama وllama.cpp والنماذج على الجهاز وComfyUI، إضافة إلى تكاملات Home Assistant وFirecrawl وProxmox وRunPod.',
          'المنصة: آيفون وماك بمعالج Apple silicon وApple Vision Pro، جميعها بالإصدار 26.0 أو أحدث.',
          'الانفتاح: مغلق المصدر؛ ولم يُعثر على مستودع علني ولا موقع للمنتج.',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: 'كيفية الحصول على Tina',
        content: [
          '**يُوزَّع Tina عبر متجر Apple App Store.** حجم التنزيل 56.3 MB، والتصنيف العمري للصفحة 4+.',
          'تكمّل هذه المراجعة [دليل برمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) من PromptQuorum، الذي يدرج Tina إلى جانب أدوات ذكاء اصطناعي محلي أخرى للجوال وسطح المكتب.',
        ],
        columns: ['القناة', 'كيفية الحصول عليه'],
        rows: [
          {
            'القناة': 'Apple App Store',
            'كيفية الحصول عليه': '[Tina - Private Local AI على App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            'القناة': 'سياسة الخصوصية',
            'كيفية الحصول عليه': '[سياسة خصوصية Tina](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: 'لم يُعثر لـ Tina على موقع مخصص للمنتج ولا على مستودع للشيفرة المصدرية. وصفحة App Store هي المصدر العلني الرئيسي.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tina في لمحة',
        columns: ['الخاصية', 'Tina'],
        rows: [
          { 'الخاصية': 'المنصة', 'Tina': 'iOS وmacOS وvisionOS (26.0+)' },
          { 'الخاصية': 'السعر', 'Tina': 'مجاني، مع مشتريات داخل التطبيق' },
          { 'الخاصية': 'الترخيص', 'Tina': 'مغلق المصدر' },
          { 'الخاصية': 'يعمل دون إنترنت بالكامل', 'Tina': 'نماذج الجهاز فقط؛ وضع الخادم يحتاج إلى اتصال' },
          { 'الخاصية': 'محرك مدمج', 'Tina': 'نعم، تُدرج نماذج على الجهاز' },
          { 'الخاصية': 'يعمل مع Ollama', 'Tina': 'نعم' },
          { 'الخاصية': 'توليد الصور', 'Tina': 'نعم، عبر ComfyUI مع محرر عُقد' },
          { 'الخاصية': 'إدخال/إخراج صوتي', 'Tina': 'نعم، الصوت وتحويل النص إلى كلام' },
        ],
        note: 'تتبع الخصائص مقارنة تطبيقات الدردشة على الجوال المعتمدة في دليل برمجيات LLM المحلية. وهي مستمدة من صفحة App Store وحدها، التي لا تغطي كل ميزة.',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'ما هو Tina',
        content: [
          '**Tina عميل أولًا ومشغّل نماذج على الجهاز ثانيًا.** عرض الصفحة هو "connect to local models: your own server, on your device, or your homelab" (اتصل بنماذج محلية: على خادمك الخاص أو على جهازك أو في مختبرك المنزلي)، مع ذكر Ollama وllama.cpp والنماذج على الجهاز مصادر.',
          'ينشره Wes Wickwire، وهو مطوّر فرد، ويصنَّف ضمن فئة الأدوات المساعدة (Utility). ولا يُذكر محرك استدلال للنماذج على الجهاز، لذا لا تحدد هذه المراجعة المحرك الذي يستخدمه.',
          'تعتمد هذه المراجعة على صفحة التطبيق على App Store وحدها. ولا تتضمن اختبارًا عمليًا، لذا لا تُقيَّم هنا السرعة ولا الاستقرار ولا جودة الإجابات.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**الإعداد عبارة عن تثبيت من App Store ثم توجيه التطبيق إلى خادم أو نموذج.** لا توثّق الصفحة تدفق التشغيل الأول، لذا تتبع الخطوات أدناه ما تذكره.',
        ],
        numberedItems: [
          {
            title: 'تحقق من إصدار نظام التشغيل',
            whyItMatters: 'تشترط الصفحة iOS أو macOS أو visionOS بالإصدار 26.0 أو أحدث، ومعالج Apple M1 أو أحدث على ماك.',
          },
          {
            title: 'ثبّت Tina',
            whyItMatters: 'احصل عليه من [App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)؛ وحجم التنزيل 56.3 MB.',
          },
          {
            title: 'اربط مصدر نموذج',
            whyItMatters: 'أضف عنوان خادم Ollama أو llama.cpp، أو اختر نموذجًا على الجهاز، بحسب المكان الذي تريد أن يجري فيه الاستدلال.',
          },
          {
            title: 'اختياري: أضف ComfyUI والتكاملات',
            whyItMatters: 'اربط نسخة ComfyUI لتوليد الصور، وHome Assistant أو Firecrawl أو Proxmox أو RunPod إذا كنت تستخدمها.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات والتكاملات',
        content: [
          '**نقطة قوة Tina هي سعة النطاق: تطبيق واحد للدردشة والصور وأدوات homelab.** كل ما يلي مأخوذ من صفحة App Store.',
        ],
        items: [
          '**الدردشة مع النماذج اللغوية.** تحدّث مع نماذج يخدمها Ollama أو llama.cpp، أو مع نماذج على الجهاز.',
          '**توليد الصور عبر ComfyUI.** تصف الصفحة دعمًا كاملًا لـ ComfyUI مع محرر عُقد داخل التطبيق.',
          '**الصوت.** يُدرج دعم الصوت وتحويل النص إلى كلام.',
          '**تكاملات homelab.** تُذكر Home Assistant وFirecrawl وProxmox وRunPod؛ ولا تعطي الصفحة تفاصيل عمّا يستطيع كل تكامل فعله.',
          '**عدة منصات من Apple.** صفحة واحدة تغطي الآيفون وماك وApple Vision Pro.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'متطلبات الجهاز',
        content: [
          '**يتطلب Tina الإصدار 26.0 أو أحدث من iOS أو macOS أو visionOS، ومعالج Apple M1 أو أحدث على ماك.** ولا تعطي الصفحة رقمًا للذاكرة العشوائية.',
          'يحدد مكان الاستدلال حاجة العتاد الفعلية. فمع خادم Ollama أو llama.cpp بعيد لا يحتاج الهاتف إلا إلى عرض الدردشة؛ أما مع النماذج على الجهاز فذاكرة الآيفون هي الحد.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الأسعار والخصوصية',
        content: [
          '**تنزيل Tina مجاني، ويُدرج Tina Pro بسعر $1.99 وخيار سنوي بسعر $12.99 على أنها مشتريات داخل التطبيق.** ولا تذكر الصفحة الميزات التي يفتحها Pro، لذا افحص شاشة الدفع في التطبيق قبل الاعتماد على ميزة ما.',
          'يقول قسم الخصوصية لدى Apple إن Tina تجمع بيانات الاستخدام والتشخيص (بيانات الأعطال والأداء) غير المرتبطة بهويتك. وتنبّه Apple إلى أن هذه التسميات يقدّمها المطوّر بنفسه ولا يجري التحقق منها.',
          'تنتقل المحادثات المرسلة إلى خادمك الخاص إلى ذلك الخادم، فتعتمد خصوصيتك هناك على طريقة استضافته وتأمينه. والتطبيق مغلق المصدر ولم تفحص هذه المراجعة حركة الشبكة.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'استخدم خادمك الخاص',
            'ما تعنيه في الاستخدام الفعلي': 'شغّل نماذج كبيرة على جهاز في المنزل وادردش من الهاتف.',
            'القيد / الملاحظة': 'عليك إعداد Ollama أو llama.cpp وإتاحته بنفسك.',
          },
          {
            'الميزة': 'ComfyUI مدمج',
            'ما تعنيه في الاستخدام الفعلي': 'الدردشة وتوليد الصور في تطبيق واحد، بما فيه محرر العُقد.',
            'القيد / الملاحظة': 'يحتاج إلى نسخة ComfyUI خاصة بك؛ ولا تذكر الصفحة مسارات العمل المدعومة.',
          },
          {
            'الميزة': 'خيار على الجهاز',
            'ما تعنيه في الاستخدام الفعلي': 'تعمل بعض المحادثات دون أي خادم.',
            'القيد / الملاحظة': 'لا تُنشر قائمة نماذج ولا حجم ولا محرك لوضع الجهاز.',
          },
          {
            'الميزة': 'سعر دخول منخفض',
            'ما تعنيه في الاستخدام الفعلي': 'مجاني للتجربة؛ وPro بسعر $1.99 كما هو مدرج.',
            'القيد / الملاحظة': 'لا تشرح الصفحة ما يضيفه Pro، ولا هل $1.99 دفعة واحدة.',
          },
          {
            'الميزة': 'دعم شامل لمنصات Apple',
            'ما تعنيه في الاستخدام الفعلي': 'مسار شراء واحد يغطي الآيفون وماك وVision Pro.',
            'القيد / الملاحظة': 'كل شيء يتطلب الإصدار 26؛ ولا يوجد تطبيق لأندرويد أو ويندوز.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'مصدر النموذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Tina',
            'المنصات': 'iOS، ماك، Vision Pro',
            'السعر والترخيص': 'مجاني مع ميزات مدفوعة، مغلق المصدر',
            'مصدر النموذج': 'Ollama وllama.cpp وعلى الجهاز',
            'الفرق الرئيسي': 'يضيف صور ComfyUI وتكاملات homelab؛ وليس مفتوح المصدر',
          },
          {
            'التطبيق': '[Enchanted](/ar/power-local-llm/enchanted-review)',
            'المنصات': 'iOS، ماك',
            'السعر والترخيص': 'مجاني، Apache 2.0',
            'مصدر النموذج': 'Ollama',
            'الفرق الرئيسي': 'عميل Ollama مفتوح المصدر دون محرك مدمج خاص به',
          },
          {
            'التطبيق': '[Maid](/ar/power-local-llm/maid-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر والترخيص': 'مجاني، MIT',
            'مصدر النموذج': 'على الجهاز وOllama وOpenAI API',
            'الفرق الرئيسي': 'مفتوح المصدر ويعمل على أندرويد أيضًا؛ ولا يُدرج ComfyUI',
          },
          {
            'التطبيق': '[AnythingLLM Mobile](/ar/power-local-llm/anythingllm-mobile-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر والترخيص': 'مجاني، MIT',
            'مصدر النموذج': 'مساحة عمل AnythingLLM الخاصة بك',
            'الفرق الرئيسي': 'وصول عن بُعد إلى نسخة AnythingLLM واحدة بدلًا من خوادم النماذج الخام',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات للتطبيقات الخارجية بشكل متكرر. تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Tina',
        items: [
          '**مالكو homelab الذين يشغّلون Ollama أو llama.cpp.** صُمّم Tina حول الاتصال بتلك الخوادم من جهاز Apple.',
          '**مستخدمو ComfyUI الذين يريدون وصولًا من الجوال.** محرر العُقد وعناصر التحكم في التوليد جزء من التطبيق.',
          '**المستخدمون الذين يريدون خادمًا وبديلًا على الجهاز في تطبيق واحد.** كلا الوضعين مدرج.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Tina',
        items: [
          '**كل من يحتاج إلى مصدر مفتوح.** الشيفرة غير متاحة للعموم؛ و[Enchanted](/ar/power-local-llm/enchanted-review) مفتوح المصدر لـ Ollama.',
          '**مستخدمو أندرويد أو ويندوز.** تُدرج منصات Apple فقط؛ ويغطي [Maid](/ar/power-local-llm/maid-review) أندرويد.',
          '**من يستخدمون إصدارًا أقدم من iOS أو macOS 26.** تشترط الصفحة الإصدار 26.0 أو أحدث.',
          '**كل من لا يملك خادمًا ويريد كتالوج نماذج.** لا تُنشر قائمة نماذج لوضع الجهاز؛ راجع [Locally AI](/ar/power-local-llm/locally-ai-review).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Tina مجاني؟',
            a: 'تنزيله مجاني مع مشتريات داخل التطبيق: Tina Pro بسعر $1.99 وخيار سنوي بسعر $12.99، كما تعرض صفحة App Store.',
          },
          {
            q: 'من يطوّر Tina؟',
            a: 'Wes Wickwire، وهو مطوّر فرد مدرج على App Store. ويستضيف ملف GitHub بالاسم نفسه مكتبات Swift مفتوحة المصدر، لكن دون مستودع لـ Tina.',
          },
          {
            q: 'هل أحتاج إلى خادم خاص بي لاستخدام Tina؟',
            a: 'لا، فالصفحة تذكر أيضًا نماذج على الجهاز. ولا يلزم الخادم إلا لميزات Ollama وllama.cpp وComfyUI.',
          },
          {
            q: 'هل يعمل Tina على أندرويد؟',
            a: 'لا. تغطي الصفحة الآيفون وماك بمعالج Apple silicon وApple Vision Pro فقط.',
          },
          {
            q: 'ما التكاملات التي يدرجها Tina؟',
            a: 'Home Assistant وFirecrawl وProxmox وRunPod. ولا تعطي الصفحة تفاصيل عن كيفية عمل كل منها.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: [
          'يبدو Tina مناسبًا على الورق لمن يستضيف النماذج في المنزل أصلًا ويريد تطبيق Apple أصليًا واحدًا للدردشة وصور ComfyUI وبعض روابط homelab، مع بديل على الجهاز.',
          'التحفظان هما الشفافية وحداثة التطبيق: فهو مغلق المصدر، ومحرك الجهاز وميزات Pro غير موثّقة، والمصدر العلني الوحيد هو صفحة App Store التي أظهرت ثلاثة تقييمات وقت المراجعة.',
          'إذا كنت تشغّل Ollama وتريد مصدرًا مفتوحًا فابدأ بـ[Enchanted](/ar/power-local-llm/enchanted-review). وإذا أردت ComfyUI وتكاملات homelab في التطبيق نفسه، فجرّب الطبقة المجانية من Tina أولًا.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Tina - Private Local AI على App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — الإصدار والسعر والمتطلبات والميزات وقسم الخصوصية.',
          '[سياسة خصوصية Tina](https://wickwirew.github.io/site/privacypolicy) — صفحة السياسة المرتبطة من الصفحة.',
          '[wickwirew على GitHub](https://github.com/wickwirew) — ملف المطوّر، جرى فحصه بحثًا عن مستودع علني لـ Tina.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Enchanted](/ar/power-local-llm/enchanted-review) — عميل Ollama مفتوح المصدر لنظامي iOS وماك.',
          '[مراجعة Maid](/ar/power-local-llm/maid-review) — عميل جوال مفتوح المصدر للنماذج المحلية والبعيدة.',
          '[مراجعة AnythingLLM Mobile](/ar/power-local-llm/anythingllm-mobile-review) — وصول عن بُعد إلى مساحة عمل AnythingLLM الخاصة بك.',
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق يعمل على الجهاز لنظامي iOS وماك، مجاني مع ميزات مدفوعة.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات LLM المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tina-review-hero-ko.webp',
    title: 'Tina 리뷰: Ollama, llama.cpp, ComfyUI용 아이폰 클라이언트',
    seoTitle: 'Tina 리뷰: Ollama, llama.cpp, ComfyUI용 아이폰 클라이언트',
    intro:
      'Tina는 직접 운영하는 서버, 홈랩, 또는 기기 자체의 모델과 대화하고 ComfyUI 이미지 생성도 제어하는 아이폰 및 Mac 앱입니다. 이 리뷰는 App Store 목록에 문서화된 내용, 불분명한 부분, 그리고 Tina가 자체 호스팅 모델용 다른 모바일 클라이언트와 어떻게 다른지를 다룹니다.',
    metaDescription:
      'Tina 리뷰: 직접 운영하는 Ollama, llama.cpp, ComfyUI 서버와 온디바이스 모델을 위한 아이폰 및 Mac 클라이언트. 가격, iOS 26 요구 사항, 개인정보 보호 라벨, 한계, 대안.',
    twitterDescription:
      'Tina 리뷰: 자체 호스팅 Ollama, llama.cpp, ComfyUI를 위한 프리미엄 iOS/macOS 클라이언트로, 온디바이스 모델과 홈랩 연동을 지원합니다. 요구 사항, 개인정보 보호, 한계.',
    audience:
      '집에서 Ollama, llama.cpp, ComfyUI를 이미 운영 중이거나 운영하려는 아이폰 및 Mac 사용자 중 네이티브 클라이언트를 원하는 분 대상 — 연결 방식, 가격, 요구 사항, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '7분 소요',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Tina 리뷰',
    targetKeywords: [
      'tina 리뷰',
      'tina 프라이빗 로컬 ai',
      'tina ollama ios 앱',
      '아이폰 ollama 클라이언트',
      'llama.cpp ios 클라이언트',
      'comfyui 아이폰 앱',
      '홈랩 ai 앱 ios',
      '자체 호스팅 llm 모바일 클라이언트',
    ],
    current_hardware_mentioned: ['iPhone', 'Apple silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Tina는 직접 호스팅하는 모델(Ollama, llama.cpp)에 연결하고, ComfyUI로 이미지를 생성하며, 기기에서 모델을 직접 실행할 수도 있는 프리미엄 방식의 비공개 소스 Apple 앱입니다.** App Store 목록에 따르면 iOS, macOS 또는 visionOS 26.0 이상이 필요하고, 내려받는 데는 비용이 들지 않으며, 앱 내 구매로 Tina Pro를 $1.99에, 연간 옵션을 $12.99에 판매합니다. 이 리뷰는 버전 1.3.8을 다루며, 직접 테스트한 결과가 아니라 공개 목록에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: '집에서 Ollama를 운영한다면 Tina를 설치할 가치가 있나요?',
        answer:
          '네, Ollama나 llama.cpp와 연결하고, ComfyUI를 제어하고, Home Assistant나 Proxmox와도 연동되는 네이티브 앱 하나를 원하며 iOS 26 또는 macOS 26을 사용한다면 그렇습니다. 오픈소스나 안드로이드가 필요하다면 건너뛰세요. 코드가 공개되어 있지 않고 Apple 플랫폼만 지원됩니다. iOS에서 Ollama를 쓰는 무료 오픈소스 대안은 Enchanted입니다.',
        bullets: [
          '앱 내 구매가 있는 무료 다운로드: Tina Pro $1.99와 연간 옵션 $12.99.',
          'Ollama, llama.cpp, 온디바이스 모델에 연결; 노드 편집기를 갖춘 ComfyUI로 이미지 생성.',
          'Home Assistant, Firecrawl, Proxmox, RunPod 연동이 표시되어 있음.',
          'iOS, macOS(Apple silicon) 또는 visionOS 26.0 이상 필요.',
          '비공개 소스; 개인정보 보호 라벨에는 사용자와 연결되지 않은 사용 및 진단 데이터가 표시됨.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Tina 받기', anchor: 'get-it' },
      { label: 'Tina 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Tina란 무엇인가', anchor: 'what-is-tina' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능과 연동', anchor: 'features' },
      { label: '기기 요구 사항', anchor: 'requirements' },
      { label: '가격 및 개인정보 보호', anchor: 'privacy' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'Tina 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'Tina를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Tina를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '개발자 Wes Wickwire가 만든 Tina는 직접 운영하는 Ollama 또는 llama.cpp 서버와 대화하고, ComfyUI로 이미지를 생성하며, 온디바이스 모델도 실행하는 프리미엄 방식의 Apple 플랫폼 클라이언트입니다.',
          },
          {
            type: 'plain-terms',
            text: '집에서 호스팅하는 AI의 리모컨에 작은 온디바이스 옵션을 더한 것이라고 생각하면 됩니다. 무거운 모델은 서버에 두고, 휴대전화의 앱은 인터페이스 역할을 합니다.',
          },
        ],
        items: [
          '검토한 버전: 1.3.8, [App Store 목록](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)에 표시된 버전.',
          '가격: 내려받기는 무료이며, Tina Pro $1.99와 연간 옵션 $12.99가 앱 내 구매로 표시되어 있음.',
          '연결: Ollama, llama.cpp, 온디바이스 모델, ComfyUI와 더불어 Home Assistant, Firecrawl, Proxmox, RunPod 연동.',
          '플랫폼: 아이폰, Apple silicon Mac, Apple Vision Pro이며 모두 버전 26.0 이상.',
          '개방성: 비공개 소스; 공개 저장소나 제품 사이트를 찾지 못함.',
        ],
      },
      getItTina: {
        id: 'get-it',
        title: 'Tina 받기',
        content: [
          '**Tina는 Apple App Store로 배포됩니다.** 앱 용량은 56.3 MB이며 목록의 연령 등급은 4+입니다.',
          '이 리뷰는 Tina를 다른 모바일 및 데스크톱 로컬 AI 도구와 함께 소개하는 PromptQuorum의 [로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory)와 짝을 이루는 콘텐츠입니다.',
        ],
        columns: ['경로', '받는 방법'],
        rows: [
          {
            '경로': 'Apple App Store',
            '받는 방법': '[App Store의 Tina - Private Local AI](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)',
          },
          {
            '경로': '개인정보 처리방침',
            '받는 방법': '[Tina 개인정보 처리방침](https://wickwirew.github.io/site/privacypolicy)',
          },
        ],
        note: 'Tina의 전용 제품 웹사이트나 소스 저장소는 찾지 못했습니다. App Store 목록이 주된 공개 출처입니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Tina 한눈에 보기',
        columns: ['항목', 'Tina'],
        rows: [
          { '항목': '플랫폼', 'Tina': 'iOS, macOS, visionOS(26.0 이상)' },
          { '항목': '가격', 'Tina': '무료, 앱 내 구매' },
          { '항목': '라이선스', 'Tina': '비공개 소스' },
          { '항목': '완전 오프라인 실행', 'Tina': '온디바이스 모델만 가능; 서버 모드는 연결 필요' },
          { '항목': '내장 엔진', 'Tina': '예, 온디바이스 모델이 표시됨' },
          { '항목': 'Ollama 연동', 'Tina': '예' },
          { '항목': '이미지 생성', 'Tina': '예, 노드 편집기를 갖춘 ComfyUI 사용' },
          { '항목': '음성 입력/출력', 'Tina': '예, 음성 및 텍스트 음성 변환' },
        ],
        note: '항목은 로컬 LLM 소프트웨어 디렉터리에서 사용하는 모바일 채팅 비교 기준을 따릅니다. App Store 목록만을 근거로 하며, 목록이 모든 기능을 다루지는 않습니다.',
      },
      whatIsTina: {
        id: 'what-is-tina',
        title: 'Tina란 무엇인가',
        content: [
          '**Tina는 무엇보다 클라이언트이고, 온디바이스 실행기는 그다음입니다.** 목록의 소개 문구는 "connect to local models: your own server, on your device, or your homelab"이며, Ollama, llama.cpp, 온디바이스 모델이 소스로 명시되어 있습니다.',
          '개인 개발자 Wes Wickwire가 배포하며 유틸리티 카테고리로 분류되어 있습니다. 온디바이스 모델의 추론 엔진은 명시되어 있지 않으므로, 이 리뷰는 어떤 런타임을 사용하는지 밝히지 않습니다.',
          '이 리뷰는 App Store 목록에만 근거합니다. 직접 테스트한 내용은 포함하지 않으므로 속도, 안정성, 답변 품질은 평가하지 않았습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 App Store 설치 후 앱이 서버나 모델을 가리키도록 지정하는 것입니다.** 목록은 첫 실행 과정을 문서화하지 않으므로, 아래 단계는 목록에 명시된 내용을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '운영체제 버전 확인하기',
            whyItMatters: '목록에서 iOS, macOS 또는 visionOS 26.0 이상을 요구하며, Mac에서는 Apple M1 칩 이상이 필요합니다.',
          },
          {
            title: 'Tina 설치하기',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571)에서 받으세요. 앱 용량은 56.3 MB입니다.',
          },
          {
            title: '모델 소스 연결하기',
            whyItMatters: '추론을 어디에서 실행하고 싶은지에 따라 Ollama 또는 llama.cpp 서버 주소를 추가하거나 온디바이스 모델을 선택하세요.',
          },
          {
            title: '선택 사항: ComfyUI와 연동 추가하기',
            whyItMatters: '이미지 생성을 위해 ComfyUI 인스턴스를 연결하고, 사용 중이라면 Home Assistant, Firecrawl, Proxmox, RunPod도 연결하세요.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능과 연동',
        content: [
          '**Tina의 강점은 범위입니다. 채팅, 이미지, 홈랩 도구를 앱 하나로 다룹니다.** 아래 내용은 모두 App Store 목록에서 가져온 것입니다.',
        ],
        items: [
          '**LLM과 채팅.** Ollama나 llama.cpp가 제공하는 모델, 또는 기기 내 모델과 대화할 수 있습니다.',
          '**ComfyUI 이미지 생성.** 목록은 앱 안에서 노드 편집기를 갖춘 ComfyUI를 완전히 지원한다고 설명합니다.',
          '**음성.** 음성 및 텍스트 음성 변환 지원이 표시되어 있습니다.',
          '**홈랩 연동.** Home Assistant, Firecrawl, Proxmox, RunPod가 명시되어 있으며, 각 연동으로 무엇을 할 수 있는지는 목록에 나와 있지 않습니다.',
          '**여러 Apple 플랫폼.** 하나의 목록이 아이폰, Mac, Apple Vision Pro를 모두 포함합니다.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '기기 요구 사항',
        content: [
          '**Tina에는 iOS, macOS 또는 visionOS 26.0 이상이 필요하며, Mac에서는 Apple M1 칩 이상이 필요합니다.** 목록에는 RAM 수치가 나와 있지 않습니다.',
          '실제로 필요한 하드웨어는 추론이 어디에서 실행되는지에 따라 달라집니다. 원격 Ollama 또는 llama.cpp 서버를 쓰면 휴대전화는 채팅 화면만 보여 주면 되고, 온디바이스 모델을 쓰면 아이폰의 메모리가 한계가 됩니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '가격 및 개인정보 보호',
        content: [
          '**Tina는 내려받기는 무료이며, Tina Pro $1.99와 연간 옵션 $12.99가 앱 내 구매로 표시되어 있습니다.** 목록에는 Pro가 어떤 기능을 열어 주는지 나와 있지 않으므로, 기능에 의존하기 전에 앱 안의 결제 화면을 확인하세요.',
          'Apple의 개인정보 보호 항목에 따르면 Tina는 사용자의 신원과 연결되지 않는 사용 데이터와 진단 데이터(충돌 및 성능 데이터)를 수집합니다. Apple은 이 라벨이 개발자가 직접 신고한 것이며 검증되지 않았다고 밝히고 있습니다.',
          '직접 운영하는 서버로 보낸 채팅은 그 서버로 전달되므로, 그 부분의 개인정보 보호는 서버를 어떻게 호스팅하고 보안을 유지하는지에 달려 있습니다. 앱은 비공개 소스이며 이 리뷰에서는 네트워크 트래픽을 검사하지 않았습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '이점': '자체 서버 연결',
            '실제 사용에서의 의미': '집에 있는 컴퓨터에서 대형 모델을 실행하고 휴대전화로 대화할 수 있습니다.',
            '한계 / 유의 사항': 'Ollama나 llama.cpp를 직접 설정하고 외부에서 접근할 수 있게 해야 합니다.',
          },
          {
            '이점': 'ComfyUI 내장',
            '실제 사용에서의 의미': '노드 편집기를 포함해 채팅과 이미지 생성이 앱 하나에 모여 있습니다.',
            '한계 / 유의 사항': '직접 운영하는 ComfyUI 인스턴스가 필요하며, 지원되는 워크플로는 목록에 명시되어 있지 않습니다.',
          },
          {
            '이점': '온디바이스 옵션',
            '실제 사용에서의 의미': '일부 채팅은 서버 없이도 작동합니다.',
            '한계 / 유의 사항': '온디바이스 모드의 모델 목록, 크기, 런타임은 공개되어 있지 않습니다.',
          },
          {
            '이점': '낮은 진입 가격',
            '실제 사용에서의 의미': '무료로 써 볼 수 있으며, 목록상 Pro는 $1.99입니다.',
            '한계 / 유의 사항': '목록에는 Pro가 무엇을 추가하는지, $1.99가 일회성인지 설명되어 있지 않습니다.',
          },
          {
            '이점': 'Apple 전반 지원',
            '실제 사용에서의 의미': '하나의 구매 경로로 아이폰, Mac, Vision Pro를 모두 지원합니다.',
            '한계 / 유의 사항': '모든 것이 버전 26을 요구하며, 안드로이드나 윈도우 앱은 없습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Tina 대 대안 앱',
        columns: ['앱', '플랫폼', '가격 및 라이선스', '모델 소스', '핵심 차이점'],
        rows: [
          {
            '앱': 'Tina',
            '플랫폼': 'iOS, Mac, Vision Pro',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '모델 소스': 'Ollama, llama.cpp, 온디바이스',
            '핵심 차이점': 'ComfyUI 이미지와 홈랩 연동을 추가; 오픈소스 아님',
          },
          {
            '앱': '[Enchanted](/ko/power-local-llm/enchanted-review)',
            '플랫폼': 'iOS, Mac',
            '가격 및 라이선스': '무료, Apache 2.0',
            '모델 소스': 'Ollama',
            '핵심 차이점': '자체 내장 엔진이 없는 오픈소스 Ollama 클라이언트',
          },
          {
            '앱': '[Maid](/ko/power-local-llm/maid-review)',
            '플랫폼': '안드로이드, iOS',
            '가격 및 라이선스': '무료, MIT',
            '모델 소스': '온디바이스, Ollama, OpenAI API',
            '핵심 차이점': '오픈소스이며 안드로이드에서도 쓸 수 있음; ComfyUI는 표시되어 있지 않음',
          },
          {
            '앱': '[AnythingLLM Mobile](/ko/power-local-llm/anythingllm-mobile-review)',
            '플랫폼': 'iOS, 안드로이드',
            '가격 및 라이선스': '무료, MIT',
            '모델 소스': '사용자의 AnythingLLM 워크스페이스',
            '핵심 차이점': '모델 서버 자체가 아니라 AnythingLLM 인스턴스 하나에 원격으로 접속',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다. 결정하기 전에 각 앱 자체의 목록에서 현재 세부 정보를 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Tina를 사용해야 하는 사람',
        items: [
          '**Ollama나 llama.cpp를 운영하는 홈랩 사용자.** Tina는 Apple 기기에서 그런 서버에 연결하는 것을 중심으로 만들어졌습니다.',
          '**모바일 접근을 원하는 ComfyUI 사용자.** 노드 편집기와 생성 제어가 앱에 포함되어 있습니다.',
          '**서버와 온디바이스 대체 수단을 앱 하나에서 쓰고 싶은 사용자.** 두 가지 모드가 모두 표시되어 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Tina를 사용하지 말아야 하는 사람',
        items: [
          '**오픈소스가 필요한 사용자.** 코드가 공개되어 있지 않습니다. [Enchanted](/ko/power-local-llm/enchanted-review)는 Ollama용 오픈소스입니다.',
          '**안드로이드나 윈도우 사용자.** Apple 플랫폼만 표시되어 있으며, 안드로이드는 [Maid](/ko/power-local-llm/maid-review)가 지원합니다.',
          '**iOS 또는 macOS 26 미만을 쓰는 사용자.** 목록에서 버전 26.0 이상을 요구합니다.',
          '**서버 없이 모델 카탈로그를 원하는 사용자.** 온디바이스 모드에는 공개된 모델 목록이 없습니다. [Locally AI](/ko/power-local-llm/locally-ai-review)를 참고하세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Tina는 무료인가요?',
            a: 'App Store 목록에 표시된 대로 내려받기는 무료이며 앱 내 구매가 있습니다. Tina Pro는 $1.99, 연간 옵션은 $12.99입니다.',
          },
          {
            q: 'Tina는 누가 만드나요?',
            a: 'App Store에 등록된 개인 개발자 Wes Wickwire입니다. 같은 이름의 GitHub 프로필에는 오픈소스 Swift 라이브러리가 있지만 Tina 저장소는 없습니다.',
          },
          {
            q: 'Tina를 쓰려면 직접 서버가 필요한가요?',
            a: '아니요, 목록에는 온디바이스 모델도 명시되어 있습니다. 서버는 Ollama, llama.cpp, ComfyUI 기능에만 필요합니다.',
          },
          {
            q: 'Tina는 안드로이드에서 작동하나요?',
            a: '아니요. 목록은 아이폰, Apple silicon Mac, Apple Vision Pro만 다룹니다.',
          },
          {
            q: 'Tina는 어떤 연동을 표시하나요?',
            a: 'Home Assistant, Firecrawl, Proxmox, RunPod입니다. 각 연동이 어떻게 작동하는지는 목록에 나와 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          'Tina는 이미 집에서 모델을 호스팅하고 있고, 채팅, ComfyUI 이미지, 몇 가지 홈랩 연동을 온디바이스 대체 수단과 함께 네이티브 Apple 앱 하나로 쓰고 싶은 사람에게 문서상으로는 잘 맞습니다.',
          '유의할 점은 투명성과 앱의 연륜입니다. 비공개 소스이고, 온디바이스 엔진과 Pro 기능은 문서화되어 있지 않으며, 유일한 공개 출처가 App Store 목록인데 검토 시점에는 평점이 세 개뿐이었습니다.',
          'Ollama를 운영하면서 오픈소스를 원한다면 [Enchanted](/ko/power-local-llm/enchanted-review)부터 시작하세요. 같은 앱에서 ComfyUI와 홈랩 연동을 쓰고 싶다면 Tina의 무료 이용 범위부터 먼저 써 보세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Tina - Private Local AI](https://apps.apple.com/us/app/tina-private-local-ai/id6751924571) — 버전, 가격, 요구 사항, 기능, 개인정보 보호 항목.',
          '[Tina 개인정보 처리방침](https://wickwirew.github.io/site/privacypolicy) — 목록에서 연결된 방침 페이지.',
          '[GitHub의 wickwirew](https://github.com/wickwirew) — 개발자 프로필이며 공개 Tina 저장소가 있는지 확인함.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Enchanted 리뷰](/ko/power-local-llm/enchanted-review) — iOS와 Mac용 오픈소스 Ollama 클라이언트.',
          '[Maid 리뷰](/ko/power-local-llm/maid-review) — 로컬 및 원격 모델을 위한 오픈소스 모바일 클라이언트.',
          '[AnythingLLM Mobile 리뷰](/ko/power-local-llm/anythingllm-mobile-review) — AnythingLLM 워크스페이스에 대한 원격 접속.',
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — iOS와 Mac용 프리미엄 온디바이스 앱.',
          '[완전한 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 플랫폼 전반의 로컬 LLM 도구에 대한 더 광범위한 디렉터리.',
        ],
      },
    },
  },
}
