// AnythingLLM Mobile Review: On-Device Chat + RAG for Android, With Optional Desktop Sync
// Slug: anythingllm-mobile-review
// Companion to: anythingllm-vs-privategpt-vs-openwebui-rag (desktop/server AnythingLLM), pocketpal-ai-review,
// private-llm-review, best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-en.webp',
    title: 'AnythingLLM Mobile Review (2026): On-Device Chat + RAG',
    seoTitle: 'AnythingLLM Mobile Review 2026: On-Device or Client?',
    intro:
      'AnythingLLM Mobile is a free, MIT-licensed Android app from [Mintplex Labs](https://mintplex.com) that runs a small language model and a local vector database directly on the phone for offline document chat, and can optionally pair with a self-hosted [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) or AnythingLLM Cloud instance over the local network for the full desktop feature set. This review covers exactly how the standalone on-device mode differs from the connected mode, real platform availability (Android is live; iOS is not yet released), pricing for the mobile app versus the separately priced AnythingLLM Cloud service, and who should — and should not — install it.',
    metaDescription:
      'AnythingLLM Mobile review: free, MIT-licensed Android app that runs models on-device AND can sync with a self-hosted AnythingLLM instance. iOS status, pricing, RAG.',
    twitterDescription:
      'AnythingLLM Mobile review 2026: it runs a model on-device for offline chat, but also pairs with a self-hosted AnythingLLM instance. Android only — no iOS app yet.',
    audience:
      'Privacy-conscious Android users and existing AnythingLLM desktop/self-hosted users who want a mobile companion for document chat.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AnythingLLM Mobile review',
    targetKeywords: [
      'anythingllm mobile review',
      'anythingllm mobile app',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile on-device',
      'anythingllm mobile vs desktop',
      'anythingllm mobile pricing',
      'chat with documents on phone',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**AnythingLLM Mobile is a free, MIT-licensed Android app that works two ways: standalone, running a small hand-picked language model plus a local vector database entirely on the phone for offline document chat and RAG, or connected, syncing chats, workspaces, and documents with a self-hosted [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) or AnythingLLM Cloud instance over the local network via QR-code pairing.** It is built by [Mintplex Labs](https://mintplex.com), the company behind the open-source AnythingLLM desktop/server project, and published on [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) under the MIT license. As of this review, the app is available only on [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) for Android; there is no iOS release on the App Store yet.',
    quickAnswerTop: {
      en: {
        question: 'Does AnythingLLM Mobile run models on the phone, or is it just a client for a server?',
        answer:
          'Both — that is the app\'s core design decision, not a limitation. Out of the box, AnythingLLM Mobile downloads a small GGUF model and runs it on-device via [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile) (a llama.cpp-based inference runtime for React Native), pairing it with a local embedding model and on-device vector database so document chat and RAG work fully offline with no account and no server. Separately, the app can pair with a self-hosted AnythingLLM Desktop or AnythingLLM Cloud instance via a QR code shown in that instance\'s Settings > Tools panel, which unlocks custom agent tools, larger workspaces, and cross-device sync that the standalone mode does not offer.',
        bullets: [
          'Standalone mode runs a bundled small model + local vector DB fully on-device — no server, no account, works offline.',
          'Connected mode pairs (via QR code) with a self-hosted AnythingLLM Desktop or Cloud instance for custom agent tools and cross-device sync.',
          'Android only via [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) or direct APK; no iOS App Store release as of this review.',
          'Free and open source under the MIT license; the separate AnythingLLM Cloud hosting service starts at $50/month for anyone who wants the connected mode without self-hosting.',
          'Built by [Mintplex Labs](https://mintplex.com), a Y Combinator (Summer 2022) company founded by Timothy Carambat, also behind the desktop/server AnythingLLM project.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is AnythingLLM Mobile?', anchor: 'what-is-anythingllm-mobile' },
      { label: 'Who Built AnythingLLM Mobile?', anchor: 'history-and-developer' },
      { label: 'Does It Run On-Device or Connect to a Server?', anchor: 'on-device-vs-connected' },
      { label: 'How to Get Started with AnythingLLM Mobile', anchor: 'getting-started' },
      { label: 'How Does Document Chat and RAG Work on Mobile?', anchor: 'models-and-rag' },
      { label: 'Is AnythingLLM Mobile Available on iPhone?', anchor: 'platform-availability' },
      { label: 'How Much Does AnythingLLM Mobile Cost?', anchor: 'pricing' },
      { label: 'What Features Does AnythingLLM Mobile Have?', anchor: 'key-features' },
      { label: 'What Hardware Do You Need?', anchor: 'hardware-requirements' },
      { label: 'Who Should Use AnythingLLM Mobile', anchor: 'who-should-use' },
      { label: 'Who Should Not Use AnythingLLM Mobile', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobile vs. Alternatives', anchor: 'vs-alternatives' },
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
            text: 'AnythingLLM Mobile is a free, MIT-licensed Android app from Mintplex Labs that runs a small language model on-device for offline document chat, and can also connect to a self-hosted AnythingLLM Desktop or Cloud instance for the full feature set.',
          },
          {
            type: 'plain-terms',
            text: 'It is not just a remote-control app for a server, and it is not a fully self-contained replacement for the desktop app either — it is both a standalone offline AI on your phone and an optional companion screen for a desktop or cloud AnythingLLM instance you already run, and you choose which mode fits a given task.',
          },
        ],
        items: [
          'Free and open source (MIT license); mobile source code is public on [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile).',
          'Dual-mode: standalone on-device inference (Cactus Compute runtime, bundled GGUF model, local vector DB) or connected mode paired with a self-hosted Desktop/Cloud instance via QR code.',
          'Android only at review time — available on [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) and as a direct APK; no iOS App Store release yet.',
          'Built by [Mintplex Labs](https://mintplex.com), a Y Combinator company also responsible for the [desktop/server AnythingLLM project](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag).',
          'The mobile app itself has no subscription; AnythingLLM Cloud, the separate hosted-server product some users pair with, starts at $50/month.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the public [AnythingLLM Mobile GitHub repository](https://github.com/Mintplex-Labs/anythingllm-mobile), the official [mobile documentation](https://docs.anythingllm.com/mobile/overview), the [Google Play listing](https://play.google.com/store/apps/details?id=com.anythingllm), and [anythingllm.com](https://anythingllm.com/mobile), checked in September 2026. PromptQuorum has not conducted independent hands-on benchmarking of AnythingLLM Mobile for this review — performance figures below are general local-LLM hardware guidance, not measurements specific to this app.',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: 'What Is AnythingLLM Mobile?',
        content: [
          '**AnythingLLM Mobile is an Android app, published under the [MIT license](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE), that lets a phone chat with a language model and with uploaded documents without depending on a cloud API.** It is a separate codebase from the [desktop/server AnythingLLM project](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag), built specifically for React Native, though both projects come from the same company and share the AnythingLLM name and workspace concept.',
          'The app is best understood as two products in one: a standalone on-device AI assistant that works with zero setup and zero account, and a mobile front end for a self-hosted AnythingLLM instance for users who already run the desktop app, Docker container, or AnythingLLM Cloud subscription and want the same workspaces, chat history, and documents on their phone.',
        ],
        note: 'RAG (retrieval-augmented generation) means the app searches your own documents for relevant passages and feeds them to the language model as context, so answers are grounded in your files rather than only the model\'s training data.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Who Built AnythingLLM Mobile?',
        content: [
          '**AnythingLLM Mobile is built by [Mintplex Labs](https://mintplex.com), the company founded by Timothy Carambat that also created the original desktop and server versions of AnythingLLM.** Mintplex Labs was founded in 2022, is based in Irvine, California, and went through Y Combinator\'s Summer 2022 batch, raising pre-seed funding from Y Combinator, Goodwater Capital, UpHonest Capital, and Orange DAO.',
          'The flagship desktop/server AnythingLLM project — an open-source, self-hostable "all-in-one AI application" for chatting with documents and building custom agents — predates the mobile app by several years and has its own large GitHub following, covered in detail in [PromptQuorum\'s AnythingLLM vs. PrivateGPT vs. Open WebUI comparison](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag). AnythingLLM Mobile is a newer, separate React Native codebase that extends the same workspace and RAG concepts to a phone.',
        ],
        items: [
          'Company: [Mintplex Labs](https://mintplex.com), founded 2022 in Irvine, California, by Timothy Carambat.',
          'Y Combinator Summer 2022 batch; pre-seed backers include Y Combinator, Goodwater Capital, UpHonest Capital, and Orange DAO.',
          'Also builds: the [desktop/server AnythingLLM application](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) and VectorAdmin, an open-source vector database management tool.',
          'AnythingLLM Mobile source: [github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile), MIT license.',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: 'Does AnythingLLM Mobile Run On-Device or Connect to a Server?',
        content: [
          '**AnythingLLM Mobile supports both an on-device standalone mode and a connected mode that pairs with a separately hosted AnythingLLM instance — it is not exclusively one or the other, and which mode is active changes what the app can do.** Confusing the two matters: a user expecting fully offline, zero-setup AI gets that from standalone mode, while a user expecting the full desktop feature set (custom agent tools, larger document workspaces) needs the connected mode and a running Desktop, Docker, or Cloud instance to pair with.',
          'In standalone mode, per [Mintplex Labs\' own mobile documentation](https://docs.anythingllm.com/mobile/overview) and the app\'s [GitHub repository](https://github.com/Mintplex-Labs/anythingllm-mobile), the phone downloads a small, hand-picked GGUF language model and runs it locally using [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile), a llama.cpp-based inference engine built for React Native. A small embedding model and a local vector database also run on-device, so uploaded documents can be chunked, embedded, and searched for RAG entirely offline. No account, no API key, and no internet connection are required to chat once the model is downloaded.',
          'In connected mode, the phone does not run inference itself for that workspace — it pairs with an AnythingLLM Desktop app, self-hosted Docker instance, or AnythingLLM Cloud subscription over the local network (or internet, for Cloud) by scanning a QR code shown under that instance\'s Settings > Tools > AnythingLLM Mobile panel. The desktop instance must have "Enable network discovery" turned on under Settings > Admin > General for local-network pairing to work. Once paired, chats, workspaces, threads, and custom agent tools sync between the phone and the connected instance, and the LLM/embedding/RAG work happens wherever that instance is running — not on the phone.',
        ],
        decisionBlock: {
          title: 'Which mode should you use?',
          localIf: [
            'You want AI chat and document RAG that works offline with zero account, zero server, and zero setup.',
            'You are testing whether on-device AI is fast enough on your specific Android phone before committing to anything more involved.',
            'You do not already run — and do not want to run — a desktop or server AnythingLLM instance.',
          ],
          cloudIf: [
            'You already run AnythingLLM Desktop, Docker, or AnythingLLM Cloud and want the same workspaces and chat history on your phone.',
            'You need custom agent tools, larger document libraries, or a more capable model than a phone can practically run.',
            'You want multiple devices (phone plus desktop) to stay in sync with one shared workspace.',
          ],
          quick: [
            'If unsure, start with standalone mode — it needs nothing else to be running.',
            'Switch to connected mode only once you already have a Desktop, Docker, or Cloud instance to pair with.',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started with AnythingLLM Mobile',
        content: [
          '**Setup differs depending on which mode you want, per the app\'s own [mobile documentation](https://docs.anythingllm.com/mobile/overview).** Standalone mode needs nothing beyond installing the app; connected mode needs an existing AnythingLLM Desktop, Docker, or Cloud instance to pair with.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download AnythingLLM Mobile from [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) or as a direct APK from [anythingllm.com/mobile](https://anythingllm.com/mobile). No account or email sign-up is required to open the app.',
          },
          {
            title: 'Choose standalone mode for offline use',
            whyItMatters: 'On first launch, the app offers hand-picked on-device models to download. Pick one sized for your device\'s RAM (see the hardware section below) and start chatting — no further setup is needed for basic chat and document upload.',
          },
          {
            title: 'Or pair with a self-hosted instance for connected mode',
            whyItMatters: 'If you already run AnythingLLM Desktop, Docker, or Cloud, enable "network discovery" under that instance\'s Settings > Admin > General, then open Settings > Tools > AnythingLLM Mobile in the desktop UI to display a pairing QR code.',
          },
          {
            title: 'Scan the QR code from the mobile app',
            whyItMatters: 'In AnythingLLM Mobile, use the pairing/scan option to connect to the desktop or Cloud instance. Once paired, that instance\'s workspaces, chats, and threads become available in the mobile app, and updates sync between devices.',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: 'How Does Document Chat and RAG Work on Mobile?',
        itemHeadings: true,
        columns: ['Mode', 'Inference location', 'RAG / document handling'],
        rows: [
          {
            'Mode': 'Standalone (on-device)',
            'Inference location': 'On the phone, via Cactus Compute (llama.cpp-based runtime for React Native)',
            'RAG / document handling': 'Local embedding model + on-device vector database; documents are chunked, embedded, and searched entirely offline',
          },
          {
            'Mode': 'Connected (paired instance)',
            'Inference location': 'On the paired AnythingLLM Desktop, Docker host, or Cloud instance',
            'RAG / document handling': 'Uses that instance\'s configured vector database and embedding model — the same RAG pipeline as the desktop app, synced to mobile',
          },
        ],
        note: 'A workspace created in one mode does not automatically become the other — a document uploaded to a standalone on-device workspace stays local to that phone unless you switch to a connected workspace paired with a Desktop/Cloud instance.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Is AnythingLLM Mobile Available on iPhone?',
        itemHeadings: true,
        columns: ['Platform', 'Availability', 'Notes'],
        rows: [
          {
            'Platform': 'Android',
            'Availability': 'Available on [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) and as a direct APK download',
            'Notes': 'This is the only shipping mobile platform at review time.',
          },
          {
            'Platform': 'iPhone / iPad (iOS)',
            'Availability': 'Not released — no App Store listing found for AnythingLLM Mobile at review time',
            'Notes': 'iOS support has been publicly discussed on the project\'s [GitHub issue tracker](https://github.com/Mintplex-Labs/anything-llm/issues/5428), but PromptQuorum found no official App Store release or Mintplex Labs announcement confirming a ship date. Do not assume iOS availability based on other sites\' coverage — verify directly on the [App Store](https://apps.apple.com/) before expecting it.',
          },
          {
            'Platform': 'Mac / Windows / Linux',
            'Availability': 'Not applicable — those platforms run the separate [AnythingLLM Desktop app](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) or Docker container, not the mobile app',
            'Notes': 'iPhone users who want AnythingLLM today should use the desktop app on a Mac, or a different mobile app such as [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private LLM](/power-local-llm/private-llm-review).',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'How Much Does AnythingLLM Mobile Cost?',
        content: [
          '**AnythingLLM Mobile itself is free to download and free to use in standalone on-device mode, with no subscription and no in-app purchase found in the app\'s public documentation or Play Store listing.** The mobile app\'s source code is [MIT-licensed](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE) and public on GitHub.',
          'Cost only enters the picture through what you pair the connected mode with. Running your own AnythingLLM Desktop app or Docker container to pair with is free and open source, the same as the mobile app. If you would rather not self-host, Mintplex Labs sells [AnythingLLM Cloud](https://anythingllm.com/pricing) as a separately hosted service: a Basic tier at $50/month with a private instance and custom subdomain, a Pro tier at $99/month adding a 72-hour support SLA aimed at larger teams, and a custom-quoted Enterprise tier with on-premise deployment, SSO, and RBAC. Both paid Cloud tiers require the user to supply their own LLM API key rather than including model costs.',
        ],
        items: [
          '**Mobile app (standalone mode):** Free, MIT-licensed open source, no subscription found.',
          '**Mobile app (connected mode):** Free to use the pairing feature itself; cost depends entirely on what you pair with.',
          '**Self-hosted Desktop/Docker to pair with:** Free and open source, same as the mobile app.',
          '**AnythingLLM Cloud Basic:** $50/month — private instance, custom subdomain, bring-your-own LLM API key.',
          '**AnythingLLM Cloud Pro:** $99/month — adds a 72-hour support SLA, aimed at larger teams.',
          '**AnythingLLM Cloud Enterprise:** Custom pricing — on-premise deployment, SSO, RBAC, custom integrations.',
        ],
        note: 'Pricing for AnythingLLM Cloud is set by Mintplex Labs and can change; verify current tiers and terms directly at [anythingllm.com/pricing](https://anythingllm.com/pricing) before subscribing.',
      },
      features: {
        id: 'key-features',
        title: 'What Features Does AnythingLLM Mobile Have?',
        content: [
          '**Feature availability depends on which mode is active — some capabilities only exist in connected mode, per the project\'s own mobile documentation.** These include:',
        ],
        items: [
          '**On-device chat.** Chat with a locally downloaded model with no internet connection required after the initial download.',
          '**Offline document RAG.** Upload documents to a standalone workspace and get answers with citations, using the on-device embedding model and vector database.',
          '**Workspace sync (connected mode only).** Chats, threads, and workspaces created on a paired Desktop, Docker, or Cloud instance sync to the phone and back.',
          '**Custom agent tools (connected mode only).** Tool-calling agent capabilities configured on the desktop instance carry over to mobile once paired; the standalone on-device mode does not support custom tool configuration.',
          '**QR-code pairing.** Connecting to a self-hosted instance uses a QR code shown in that instance\'s settings, rather than manually entering server addresses and credentials.',
          '**No account requirement for standalone use.** Chatting and document RAG in standalone mode does not require creating an account with Mintplex Labs.',
        ],
        note: 'Feature availability can change between app releases since the project ships frequent updates. Check the in-app changelog or the [GitHub releases page](https://github.com/Mintplex-Labs/anythingllm-mobile/releases) for what is live in your installed version.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'What Hardware Do You Need to Run AnythingLLM Mobile?',
        content: [
          '**Standalone on-device mode depends on the phone\'s own RAM and CPU/NPU, the same as any other GGUF-based mobile chat app — Mintplex Labs has not published exact per-model RAM requirements for the hand-picked standalone models, so general local-LLM sizing guidance applies.** As a rule of thumb for quantized GGUF models on phones, a small model in the 1–3B parameter range needs roughly 2–3 GB of free RAM, and models above that size need proportionally more.',
          'Connected mode has essentially no phone-side hardware requirement for inference, since the language model runs on the paired Desktop, Docker host, or Cloud instance — the phone only needs enough resources to run the app UI and sync data, and hardware requirements shift instead to whatever machine hosts the connected AnythingLLM instance.',
        ],
        items: [
          'Standalone mode: budget 2–3 GB+ free RAM for the smallest bundled models; larger on-device models need more.',
          'Storage: several hundred megabytes to a few gigabytes of free device storage per downloaded on-device model.',
          'Connected mode: the phone\'s hardware is not the bottleneck — check the hardware guidance for whatever machine runs your Desktop, Docker, or Cloud instance instead.',
          'Network: standalone mode works fully offline after model download; connected mode needs a shared local network (or internet, for Cloud) to reach the paired instance.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use AnythingLLM Mobile',
        items: [
          '**Android users who want a genuinely free, offline AI chat and document RAG app.** Standalone mode needs no account, no server, and no subscription, which fits users who want private on-device AI with minimal setup.',
          '**Existing AnythingLLM Desktop, Docker, or Cloud users who want the same workspaces on their phone.** Connected mode\'s sync is the clear draw for anyone already invested in the desktop/server AnythingLLM ecosystem.',
          '**Users comfortable choosing between two distinct modes.** Getting full value out of the app means understanding when to use standalone versus connected mode, which suits technically curious users more than someone wanting one single fixed behavior.',
          '**Teams that want a mobile front end without self-hosting.** Pairing an Android phone with a paid AnythingLLM Cloud instance gives mobile access to shared workspaces without running any infrastructure personally.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use AnythingLLM Mobile',
        items: [
          '**iPhone and iPad users.** There is no iOS release at review time; use [Private LLM](/power-local-llm/private-llm-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review) instead for Apple devices.',
          '**Users who want one simple mode with no decisions to make.** The standalone/connected split is a real design choice a user has to understand; someone who wants a single guided experience with a curated model list and no server-pairing concept may prefer [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Loci](/power-local-llm/loci-ai-review-offline-local-ai).',
          '**Users who want full custom agent tools without running any server.** Custom agent tool configuration is tied to the connected mode in this app\'s current design — someone who wants that capability fully on-device today should look elsewhere.',
          '**Users needing enterprise support with no cost.** Community support is free, but a support SLA requires a paid AnythingLLM Cloud Pro or Enterprise subscription, not the mobile app alone.',
          '**Users who want the largest possible on-device models.** Standalone mode is built around small, hand-picked models suited to phone RAM; users who need larger models should either use connected mode with a capable desktop instance or a desktop/workstation setup directly.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobile vs. Alternatives',
        itemHeadings: true,
        columns: ['App', 'On-device vs. client', 'Platforms', 'License / cost'],
        rows: [
          {
            'App': 'AnythingLLM Mobile',
            'On-device vs. client': 'Both — standalone on-device inference, or connected client to a self-hosted instance',
            'Platforms': 'Android only',
            'License / cost': 'Free, open source (MIT); paired Cloud service from $50/month',
          },
          {
            'App': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            'On-device vs. client': 'Runs the LLM and RAG pipeline itself, locally or via API',
            'Platforms': 'Mac, Windows, Linux, Docker',
            'License / cost': 'Free, open source (MIT); Cloud hosting from $50/month',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'On-device vs. client': 'On-device only — no server/client mode',
            'Platforms': 'iPhone/iPad, Android',
            'License / cost': 'Free, open source (MIT)',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'On-device vs. client': 'On-device only — no server/client mode',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'License / cost': 'Paid, one-time purchase; closed source',
          },
          {
            'App': 'LLM Farm',
            'On-device vs. client': 'On-device only, via llama.cpp',
            'Platforms': 'iPhone/iPad',
            'License / cost': 'Free, open source; App Store availability has reportedly changed over time — verify current listing before assuming it installs',
          },
          {
            'App': 'Layla',
            'On-device vs. client': 'On-device only, plus optional remote API providers',
            'Platforms': 'Android, iPhone/iPad',
            'License / cost': 'Free tier plus paid tiers; closed source',
          },
          {
            'App': 'Maid',
            'On-device vs. client': 'On-device only, via llama.cpp; also supports remote Ollama/OpenAI-compatible endpoints',
            'Platforms': 'Android, iPhone/iPad',
            'License / cost': 'Free, open source (MIT)',
          },
          {
            'App': 'RikkaHub',
            'On-device vs. client': 'Both — local on-device inference via a LiteRT provider, plus multi-provider cloud client',
            'Platforms': 'Android',
            'License / cost': 'Free, open source',
          },
        ],
        note: 'AnythingLLM Mobile and RikkaHub are the two apps in this table with a genuine dual on-device/client design; every other row runs strictly on-device or strictly as a client, which is the key distinction to check before installing based on a single feature list. Verify current App Store/Play Store listings directly before installing any app in this table, since availability changes.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does AnythingLLM Mobile run AI models on the phone itself?',
            a: 'Yes, in standalone mode. The app downloads a small, hand-picked GGUF language model and runs it on-device via Cactus Compute, a llama.cpp-based inference runtime for React Native, alongside a local embedding model and vector database for offline document RAG. Separately, the app also supports a connected mode that pairs with a self-hosted AnythingLLM Desktop or Cloud instance, where inference happens on that paired instance instead of the phone.',
          },
          {
            q: 'Is AnythingLLM Mobile available for iPhone?',
            a: 'No. As of this review, AnythingLLM Mobile has no App Store listing and is available only for Android via Google Play or a direct APK download. iOS support has been discussed on the project\'s GitHub issue tracker, but there is no official Mintplex Labs announcement confirming a release date.',
          },
          {
            q: 'Is AnythingLLM Mobile free?',
            a: 'Yes, the mobile app itself is free and open source under the MIT license, with no subscription for standalone on-device use. If you use connected mode to pair with a hosted AnythingLLM Cloud instance rather than self-hosting, that separate Cloud service has paid tiers starting at $50/month — but the mobile app and self-hosted Desktop/Docker options remain free.',
          },
          {
            q: 'Who makes AnythingLLM Mobile?',
            a: 'AnythingLLM Mobile is built by Mintplex Labs, a company founded in 2022 by Timothy Carambat and based in Irvine, California. Mintplex Labs went through Y Combinator\'s Summer 2022 batch and also builds the desktop/server AnythingLLM application.',
          },
          {
            q: 'What license is AnythingLLM Mobile released under?',
            a: 'AnythingLLM Mobile is released under the MIT license, a permissive open-source license, and its source code is public on GitHub. The desktop/server AnythingLLM project it can connect to is also MIT-licensed.',
          },
          {
            q: 'How do I connect AnythingLLM Mobile to my desktop instance?',
            a: 'Enable "network discovery" in your AnythingLLM Desktop, Docker, or Cloud instance under Settings > Admin > General, then open Settings > Tools > AnythingLLM Mobile to display a pairing QR code. Scan that code from within the AnythingLLM Mobile app to connect. Once paired, workspaces, chats, and threads sync between the phone and the connected instance.',
          },
          {
            q: 'Does AnythingLLM Mobile need an internet connection?',
            a: 'Not for standalone mode after the initial model download — inference and document RAG run entirely on-device. Connected mode needs a shared local network to reach a self-hosted Desktop or Docker instance, or an internet connection to reach a hosted AnythingLLM Cloud instance.',
          },
          {
            q: 'Can AnythingLLM Mobile chat with my documents?',
            a: 'Yes, in both modes. In standalone mode, documents are chunked, embedded, and searched using an on-device embedding model and local vector database, entirely offline. In connected mode, the paired Desktop, Docker, or Cloud instance handles document RAG using its own configured vector database and embedding model, the same as the desktop app.',
          },
          {
            q: 'What is the difference between AnythingLLM Mobile and the desktop AnythingLLM app?',
            a: 'AnythingLLM Mobile is a separate Android app built for phones, with its own standalone on-device inference mode in addition to the ability to connect to a desktop instance. The desktop/server AnythingLLM application, covered in PromptQuorum\'s AnythingLLM vs. PrivateGPT vs. Open WebUI comparison, runs on Mac, Windows, Linux, or Docker and supports a wider range of LLM providers, vector databases, and agent configurations than the mobile app\'s standalone mode.',
          },
          {
            q: 'How does AnythingLLM Mobile compare to PocketPal AI or Private LLM?',
            a: 'PocketPal AI and Private LLM are on-device-only mobile chat apps with no server-connection mode; AnythingLLM Mobile is the only app in this comparison with a genuine dual design — standalone on-device inference plus an optional connected mode to a self-hosted or cloud AnythingLLM instance. Choose AnythingLLM Mobile if you want that flexibility or already use desktop AnythingLLM; choose PocketPal AI (free, iPhone/Android) or Private LLM (paid, Apple-only) if you specifically want an iPhone app, since AnythingLLM Mobile is Android-only.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AnythingLLM Mobile\'s dual design — a genuine standalone on-device mode alongside an optional connected mode — is unusual in this category, where most mobile AI apps commit fully to one architecture or the other. That flexibility is also the app\'s biggest catch for a first-time user: understanding which mode is active, and what each mode can and cannot do, takes more upfront attention than a single-purpose app like PocketPal AI or Private LLM. The bigger limitation right now is platform: AnythingLLM Mobile is Android-only, with no App Store release and no confirmed ship date for iOS. Choose AnythingLLM Mobile if you are on Android and either want free offline AI with zero setup, or already run AnythingLLM Desktop, Docker, or Cloud and want the same workspaces on your phone. Choose Private LLM or PocketPal AI instead if you need an iPhone app, and choose the desktop AnythingLLM application directly if you do not need a mobile client at all.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AnythingLLM Mobile on GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) — source code, license (MIT), and Cactus Compute usage referenced in this review.',
          '[AnythingLLM Mobile official documentation](https://docs.anythingllm.com/mobile/overview) — standalone vs. connected mode, pairing steps, and network-discovery setup.',
          '[AnythingLLM Mobile on Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) — Android availability and app description.',
          '[AnythingLLM Mobile official page](https://anythingllm.com/mobile) — download links and feature overview.',
          '[AnythingLLM Cloud pricing](https://anythingllm.com/pricing) — Basic, Pro, and Enterprise tier pricing referenced in this review.',
          '[Mintplex Labs on Y Combinator](https://www.ycombinator.com/companies/mintplex-labs) — company founding, batch, and background.',
          '[Desktop/server AnythingLLM GitHub repository](https://github.com/Mintplex-Labs/anything-llm) — the companion project this mobile app can connect to.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM vs. PrivateGPT vs. Open WebUI: Which RAG Tool Wins?](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — the desktop/server AnythingLLM comparison this mobile app can connect to.',
          '[PocketPal AI Review (2026)](/power-local-llm/pocketpal-ai-review) — a free, open-source, on-device-only alternative for iPhone and Android.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, Apple-only, on-device-only alternative with a large built-in model catalog.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android app roundup.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — a five-platform, curated alternative for users who want one guided mode.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AnythingLLM Mobile Review (2026): On-Device Chat + RAG',
      description:
        'AnythingLLM Mobile review: free, MIT-licensed Android app that runs models on-device AND can sync with a self-hosted AnythingLLM instance. iOS status, pricing, RAG.',
      url: 'https://promptquorum.com/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'en',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Privacy-conscious Android users and existing AnythingLLM desktop/self-hosted users evaluating a mobile companion app' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: 'Retrieval-augmented generation' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AnythingLLM Mobile Review (2026)', item: 'https://promptquorum.com/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-de.webp',
    title: 'AnythingLLM Mobile im Test (2026): Chat + RAG auf dem Gerät',
    seoTitle: 'AnythingLLM Mobile Test 2026: On-Device oder Client?',
    intro:
      'AnythingLLM Mobile ist eine kostenlose, unter der MIT-Lizenz veröffentlichte Android-App von [Mintplex Labs](https://mintplex.com), die ein kleines Sprachmodell und eine lokale Vektordatenbank direkt auf dem Smartphone ausführt, um Dokumente offline durchsuchbar zu machen. Optional lässt sich die App per Kopplung mit einer selbst gehosteten [AnythingLLM-Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)- oder AnythingLLM-Cloud-Instanz im lokalen Netzwerk verbinden, um den vollen Funktionsumfang der Desktop-Version zu nutzen. Dieser Test erklärt genau, wie sich der eigenständige On-Device-Modus vom verbundenen Modus unterscheidet, welche Plattformen wirklich unterstützt werden (Android ist verfügbar, iOS noch nicht), was die App im Vergleich zum separat bepreisten AnythingLLM-Cloud-Dienst kostet, und für wen sie sich eignet — und für wen nicht.',
    metaDescription:
      'AnythingLLM Mobile im Test: kostenlose, MIT-lizenzierte Android-App, die Modelle auf dem Gerät ausführt UND mit einer selbst gehosteten AnythingLLM-Instanz synchronisiert. iOS-Status, Preise, RAG.',
    twitterDescription:
      'AnythingLLM Mobile Test 2026: läuft für den Offline-Chat direkt auf dem Gerät, lässt sich aber auch mit einer selbst gehosteten AnythingLLM-Instanz koppeln. Nur Android — noch keine iOS-App.',
    audience:
      'Datenschutzbewusste Android-Nutzer und bestehende AnythingLLM-Desktop-/Self-Hosting-Nutzer, die eine mobile Ergänzung suchen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AnythingLLM Mobile Test',
    targetKeywords: [
      'anythingllm mobile test',
      'anythingllm mobile app',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile on-device',
      'anythingllm mobile vs desktop',
      'anythingllm mobile preise',
      'dokumente auf dem handy durchsuchen',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**AnythingLLM Mobile ist eine kostenlose, unter der MIT-Lizenz stehende Android-App, die auf zwei Arten funktioniert: eigenständig, mit einem kleinen, ausgewählten Sprachmodell samt lokaler Vektordatenbank vollständig auf dem Gerät für Offline-Dokumentenchat und RAG, oder verbunden, indem Chats, Workspaces und Dokumente per QR-Code-Kopplung im lokalen Netzwerk mit einer selbst gehosteten [AnythingLLM-Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)- oder AnythingLLM-Cloud-Instanz synchronisiert werden.** Entwickelt wird sie von [Mintplex Labs](https://mintplex.com), dem Unternehmen hinter dem Open-Source-Projekt AnythingLLM für Desktop und Server, veröffentlicht auf [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) unter der MIT-Lizenz. Zum Zeitpunkt dieses Tests ist die App ausschließlich über [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) für Android erhältlich; eine iOS-Version im App Store gibt es noch nicht.',
    quickAnswerTop: {
      de: {
        question: 'Führt AnythingLLM Mobile Modelle auf dem Smartphone aus, oder ist es nur ein Client für einen Server?',
        answer:
          'Beides — das ist eine bewusste Design-Entscheidung der App, keine Einschränkung. Standardmäßig lädt AnythingLLM Mobile ein kleines GGUF-Modell herunter und führt es über [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile) (eine llama.cpp-basierte Inferenz-Engine für React Native) direkt auf dem Gerät aus, kombiniert mit einem lokalen Embedding-Modell und einer lokalen Vektordatenbank, sodass Dokumentenchat und RAG vollständig offline funktionieren — ohne Konto und ohne Server. Zusätzlich lässt sich die App per QR-Code, angezeigt im Bereich Settings > Tools der Desktop- oder Cloud-Instanz, mit einer selbst gehosteten AnythingLLM-Desktop- oder AnythingLLM-Cloud-Instanz koppeln, was benutzerdefinierte Agenten-Tools, größere Workspaces und geräteübergreifende Synchronisierung freischaltet, die der eigenständige Modus nicht bietet.',
        bullets: [
          'Der eigenständige Modus führt ein mitgeliefertes kleines Modell plus lokale Vektordatenbank vollständig auf dem Gerät aus — ohne Server, ohne Konto, funktioniert offline.',
          'Der verbundene Modus koppelt sich (per QR-Code) mit einer selbst gehosteten AnythingLLM-Desktop- oder Cloud-Instanz für benutzerdefinierte Agenten-Tools und geräteübergreifende Synchronisierung.',
          'Nur Android, über [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) oder direkte APK; zum Zeitpunkt dieses Tests keine iOS-App-Store-Version.',
          'Kostenlos und quelloffen unter der MIT-Lizenz; der separate AnythingLLM-Cloud-Hosting-Dienst startet bei 50 $/Monat für alle, die den verbundenen Modus ohne eigenes Hosting nutzen möchten.',
          'Entwickelt von [Mintplex Labs](https://mintplex.com), einem Y-Combinator-Unternehmen (Sommer 2022), gegründet von Timothy Carambat, das auch hinter dem Desktop-/Server-Projekt AnythingLLM steht.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist AnythingLLM Mobile?', anchor: 'what-is-anythingllm-mobile' },
      { label: 'Wer entwickelt AnythingLLM Mobile?', anchor: 'history-and-developer' },
      { label: 'Läuft die App On-Device oder verbindet sie sich mit einem Server?', anchor: 'on-device-vs-connected' },
      { label: 'Erste Schritte mit AnythingLLM Mobile', anchor: 'getting-started' },
      { label: 'Wie funktionieren Dokumentenchat und RAG auf dem Handy?', anchor: 'models-and-rag' },
      { label: 'Ist AnythingLLM Mobile für iPhone verfügbar?', anchor: 'platform-availability' },
      { label: 'Was kostet AnythingLLM Mobile?', anchor: 'pricing' },
      { label: 'Welche Funktionen bietet AnythingLLM Mobile?', anchor: 'key-features' },
      { label: 'Welche Hardware wird benötigt?', anchor: 'hardware-requirements' },
      { label: 'Für wen eignet sich AnythingLLM Mobile', anchor: 'who-should-use' },
      { label: 'Für wen eignet sich AnythingLLM Mobile nicht', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobile im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
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
            text: 'AnythingLLM Mobile ist eine kostenlose, unter der MIT-Lizenz stehende Android-App von Mintplex Labs, die ein kleines Sprachmodell für den Offline-Dokumentenchat auf dem Gerät ausführt und sich zusätzlich mit einer selbst gehosteten AnythingLLM-Desktop- oder Cloud-Instanz verbinden lässt.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist weder nur eine Fernbedienungs-App für einen Server noch ein vollständig eigenständiger Ersatz für die Desktop-App — es ist beides zugleich: eine eigenständige Offline-KI auf dem Smartphone und ein optionaler mobiler Bildschirm für eine Desktop- oder Cloud-Instanz, die bereits läuft. Welcher Modus zum jeweiligen Zweck passt, entscheiden Sie selbst.',
          },
        ],
        items: [
          'Kostenlos und quelloffen (MIT-Lizenz); der Quellcode der mobilen App ist auf [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) öffentlich.',
          'Zwei Modi: eigenständige On-Device-Inferenz (Cactus-Compute-Engine, mitgeliefertes GGUF-Modell, lokale Vektordatenbank) oder verbundener Modus mit Kopplung an eine selbst gehostete Desktop-/Cloud-Instanz per QR-Code.',
          'Zum Zeitpunkt dieses Tests nur Android — verfügbar über [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) und als direkte APK; noch keine iOS-App-Store-Version.',
          'Entwickelt von [Mintplex Labs](https://mintplex.com), einem Y-Combinator-Unternehmen, das auch für das [Desktop-/Server-Projekt AnythingLLM](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) verantwortlich ist.',
          'Die mobile App selbst hat kein Abo; AnythingLLM Cloud, der separate gehostete Serverdienst, mit dem sich manche Nutzer koppeln, startet bei 50 $/Monat.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test basiert auf dem öffentlichen [AnythingLLM-Mobile-GitHub-Repository](https://github.com/Mintplex-Labs/anythingllm-mobile), der offiziellen [Mobile-Dokumentation](https://docs.anythingllm.com/mobile/overview), dem [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=com.anythingllm) und [anythingllm.com](https://anythingllm.com/mobile), Stand September 2026. PromptQuorum hat für diesen Test kein eigenes Hands-on-Benchmarking von AnythingLLM Mobile durchgeführt — die unten genannten Leistungswerte sind allgemeine Hardware-Richtwerte für lokale LLMs, keine app-spezifischen Messungen.',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: 'Was ist AnythingLLM Mobile?',
        content: [
          '**AnythingLLM Mobile ist eine Android-App unter der [MIT-Lizenz](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE), mit der ein Smartphone mit einem Sprachmodell und mit hochgeladenen Dokumenten chatten kann, ohne auf eine Cloud-API angewiesen zu sein.** Die App ist eine eigenständige Codebasis, getrennt vom [Desktop-/Server-Projekt AnythingLLM](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag), speziell für React Native entwickelt — beide Projekte stammen jedoch vom selben Unternehmen und teilen sich den Namen AnythingLLM sowie das Workspace-Konzept.',
          'Am besten versteht man die App als zwei Produkte in einem: einen eigenständigen On-Device-KI-Assistenten, der ohne Einrichtung und ohne Konto funktioniert, und ein mobiles Frontend für eine selbst gehostete AnythingLLM-Instanz — für Nutzer, die bereits die Desktop-App, einen Docker-Container oder ein AnythingLLM-Cloud-Abo betreiben und dieselben Workspaces, Chatverläufe und Dokumente auch auf dem Smartphone nutzen möchten.',
        ],
        note: 'RAG (Retrieval-Augmented Generation) bedeutet, dass die App in Ihren eigenen Dokumenten nach relevanten Textstellen sucht und diese dem Sprachmodell als Kontext zuführt, sodass Antworten auf Ihren Dateien basieren und nicht nur auf den Trainingsdaten des Modells.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Wer entwickelt AnythingLLM Mobile?',
        content: [
          '**AnythingLLM Mobile wird von [Mintplex Labs](https://mintplex.com) entwickelt, dem von Timothy Carambat gegründeten Unternehmen, das auch die ursprünglichen Desktop- und Server-Versionen von AnythingLLM geschaffen hat.** Mintplex Labs wurde 2022 gegründet, hat seinen Sitz in Irvine, Kalifornien, und durchlief den Sommer-2022-Jahrgang von Y Combinator, mit Pre-Seed-Finanzierung von Y Combinator, Goodwater Capital, UpHonest Capital und Orange DAO.',
          'Das Flaggschiff-Projekt AnythingLLM für Desktop und Server — eine Open-Source-, selbst hostbare "All-in-One-KI-Anwendung" für den Dokumentenchat und den Aufbau eigener Agenten — existiert bereits seit mehreren Jahren vor der mobilen App und hat eine eigene, große GitHub-Community, ausführlich behandelt im [PromptQuorum-Vergleich AnythingLLM vs. PrivateGPT vs. Open WebUI](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag). AnythingLLM Mobile ist eine neuere, separate React-Native-Codebasis, die dieselben Workspace- und RAG-Konzepte auf das Smartphone überträgt.',
        ],
        items: [
          'Unternehmen: [Mintplex Labs](https://mintplex.com), gegründet 2022 in Irvine, Kalifornien, von Timothy Carambat.',
          'Y-Combinator-Jahrgang Sommer 2022; Pre-Seed-Investoren sind unter anderem Y Combinator, Goodwater Capital, UpHonest Capital und Orange DAO.',
          'Ebenfalls von Mintplex Labs: die [Desktop-/Server-Anwendung AnythingLLM](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) und VectorAdmin, ein Open-Source-Tool zur Verwaltung von Vektordatenbanken.',
          'Quellcode von AnythingLLM Mobile: [github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile), MIT-Lizenz.',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: 'Läuft AnythingLLM Mobile On-Device oder verbindet es sich mit einem Server?',
        content: [
          '**AnythingLLM Mobile unterstützt sowohl einen eigenständigen On-Device-Modus als auch einen verbundenen Modus, der sich mit einer separat gehosteten AnythingLLM-Instanz koppelt — es ist also nicht ausschließlich das eine oder das andere, und der aktive Modus bestimmt, was die App leisten kann.** Diese beiden Modi zu verwechseln ist relevant: Wer vollständig offline arbeitende KI ohne Einrichtung erwartet, bekommt das im eigenständigen Modus, während wer den vollen Desktop-Funktionsumfang (benutzerdefinierte Agenten-Tools, größere Dokument-Workspaces) erwartet, den verbundenen Modus samt laufender Desktop-, Docker- oder Cloud-Instanz benötigt.',
          'Im eigenständigen Modus lädt das Smartphone laut [Mintplex Labs\' eigener Mobile-Dokumentation](https://docs.anythingllm.com/mobile/overview) und dem [GitHub-Repository](https://github.com/Mintplex-Labs/anythingllm-mobile) der App ein kleines, ausgewähltes GGUF-Sprachmodell herunter und führt es lokal über [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile) aus, eine llama.cpp-basierte Inferenz-Engine für React Native. Ebenfalls auf dem Gerät laufen ein kleines Embedding-Modell und eine lokale Vektordatenbank, sodass hochgeladene Dokumente vollständig offline in Abschnitte zerlegt, eingebettet und für RAG durchsucht werden können. Nach dem Herunterladen des Modells sind weder Konto noch API-Schlüssel noch Internetverbindung für den Chat erforderlich.',
          'Im verbundenen Modus führt das Smartphone die Inferenz für diesen Workspace nicht selbst aus — es koppelt sich per QR-Code, der unter Settings > Tools > AnythingLLM Mobile der jeweiligen Instanz angezeigt wird, mit einer AnythingLLM-Desktop-App, einer selbst gehosteten Docker-Instanz oder einem AnythingLLM-Cloud-Abo im lokalen Netzwerk (bzw. über das Internet bei Cloud). Damit die Kopplung im lokalen Netzwerk funktioniert, muss die Desktop-Instanz unter Settings > Admin > General die Option "Netzwerkerkennung aktivieren" eingeschaltet haben. Nach der Kopplung synchronisieren sich Chats, Workspaces, Threads und benutzerdefinierte Agenten-Tools zwischen Smartphone und verbundener Instanz — die Arbeit von LLM, Embedding und RAG findet dort statt, wo die Instanz läuft, nicht auf dem Smartphone.',
        ],
        decisionBlock: {
          title: 'Welcher Modus passt zu Ihnen?',
          localIf: [
            'Sie möchten KI-Chat und Dokumenten-RAG, das offline funktioniert — ohne Konto, ohne Server, ohne Einrichtung.',
            'Sie testen, ob On-Device-KI auf Ihrem konkreten Android-Gerät schnell genug ist, bevor Sie sich auf mehr einlassen.',
            'Sie betreiben keine Desktop- oder Server-Instanz von AnythingLLM und möchten das auch nicht.',
          ],
          cloudIf: [
            'Sie betreiben bereits AnythingLLM Desktop, Docker oder AnythingLLM Cloud und möchten dieselben Workspaces und Chatverläufe auf dem Smartphone.',
            'Sie benötigen benutzerdefinierte Agenten-Tools, größere Dokumentbibliotheken oder ein leistungsfähigeres Modell, als ein Smartphone praktisch ausführen kann.',
            'Mehrere Geräte (Smartphone und Desktop) sollen mit einem gemeinsamen Workspace synchron bleiben.',
          ],
          quick: [
            'Im Zweifel mit dem eigenständigen Modus beginnen — er benötigt sonst nichts, das läuft.',
            'Erst dann zum verbundenen Modus wechseln, wenn bereits eine Desktop-, Docker- oder Cloud-Instanz zur Kopplung vorhanden ist.',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Erste Schritte mit AnythingLLM Mobile',
        content: [
          '**Die Einrichtung unterscheidet sich je nach gewünschtem Modus, laut der [Mobile-Dokumentation](https://docs.anythingllm.com/mobile/overview) der App.** Der eigenständige Modus benötigt außer der Installation nichts weiter; der verbundene Modus benötigt eine bereits vorhandene AnythingLLM-Desktop-, Docker- oder Cloud-Instanz zur Kopplung.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie AnythingLLM Mobile über [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) herunter oder als direkte APK von [anythingllm.com/mobile](https://anythingllm.com/mobile). Für das Öffnen der App ist kein Konto und keine E-Mail-Registrierung erforderlich.',
          },
          {
            title: 'Eigenständigen Modus für die Offline-Nutzung wählen',
            whyItMatters: 'Beim ersten Start bietet die App ausgewählte On-Device-Modelle zum Herunterladen an. Wählen Sie ein Modell passend zum RAM Ihres Geräts (siehe Hardware-Abschnitt unten) und beginnen Sie zu chatten — für grundlegenden Chat und Dokumenten-Upload ist keine weitere Einrichtung nötig.',
          },
          {
            title: 'Oder mit einer selbst gehosteten Instanz für den verbundenen Modus koppeln',
            whyItMatters: 'Wenn Sie bereits AnythingLLM Desktop, Docker oder Cloud betreiben, aktivieren Sie unter Settings > Admin > General dieser Instanz die "Netzwerkerkennung" und öffnen Sie dann in der Desktop-Oberfläche Settings > Tools > AnythingLLM Mobile, um einen Kopplungs-QR-Code anzuzeigen.',
          },
          {
            title: 'QR-Code über die mobile App scannen',
            whyItMatters: 'Nutzen Sie in AnythingLLM Mobile die Kopplungs-/Scan-Funktion, um sich mit der Desktop- oder Cloud-Instanz zu verbinden. Nach der Kopplung stehen die Workspaces, Chats und Threads dieser Instanz in der mobilen App zur Verfügung, und Änderungen synchronisieren sich zwischen den Geräten.',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: 'Wie funktionieren Dokumentenchat und RAG auf dem Handy?',
        itemHeadings: true,
        columns: ['Modus', 'Ort der Inferenz', 'RAG / Dokumentenverarbeitung'],
        rows: [
          {
            'Modus': 'Eigenständig (On-Device)',
            'Ort der Inferenz': 'Auf dem Smartphone, über Cactus Compute (llama.cpp-basierte Engine für React Native)',
            'RAG / Dokumentenverarbeitung': 'Lokales Embedding-Modell + Vektordatenbank auf dem Gerät; Dokumente werden vollständig offline zerlegt, eingebettet und durchsucht',
          },
          {
            'Modus': 'Verbunden (gekoppelte Instanz)',
            'Ort der Inferenz': 'Auf der gekoppelten AnythingLLM-Desktop-App, dem Docker-Host oder der Cloud-Instanz',
            'RAG / Dokumentenverarbeitung': 'Nutzt die konfigurierte Vektordatenbank und das Embedding-Modell dieser Instanz — dieselbe RAG-Pipeline wie in der Desktop-App, synchronisiert auf das Smartphone',
          },
        ],
        note: 'Ein in einem Modus erstellter Workspace wird nicht automatisch zum anderen Modus — ein Dokument, das in einem eigenständigen On-Device-Workspace hochgeladen wurde, bleibt lokal auf diesem Smartphone, solange Sie nicht zu einem verbundenen, mit einer Desktop-/Cloud-Instanz gekoppelten Workspace wechseln.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Ist AnythingLLM Mobile für iPhone verfügbar?',
        itemHeadings: true,
        columns: ['Plattform', 'Verfügbarkeit', 'Anmerkungen'],
        rows: [
          {
            'Plattform': 'Android',
            'Verfügbarkeit': 'Verfügbar über [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) und als direkter APK-Download',
            'Anmerkungen': 'Dies ist zum Zeitpunkt dieses Tests die einzige verfügbare mobile Plattform.',
          },
          {
            'Plattform': 'iPhone / iPad (iOS)',
            'Verfügbarkeit': 'Nicht veröffentlicht — zum Zeitpunkt dieses Tests kein App-Store-Eintrag für AnythingLLM Mobile gefunden',
            'Anmerkungen': 'iOS-Unterstützung wurde öffentlich im [GitHub-Issue-Tracker](https://github.com/Mintplex-Labs/anything-llm/issues/5428) des Projekts diskutiert, PromptQuorum fand jedoch keine offizielle App-Store-Veröffentlichung oder Ankündigung von Mintplex Labs mit einem konkreten Termin. Verlassen Sie sich nicht auf iOS-Verfügbarkeit aus Berichten anderer Seiten — prüfen Sie direkt im [App Store](https://apps.apple.com/), bevor Sie sie erwarten.',
          },
          {
            'Plattform': 'Mac / Windows / Linux',
            'Verfügbarkeit': 'Nicht zutreffend — diese Plattformen nutzen die separate [AnythingLLM-Desktop-App](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) oder den Docker-Container, nicht die mobile App',
            'Anmerkungen': 'iPhone-Nutzer, die AnythingLLM schon heute nutzen möchten, sollten die Desktop-App auf einem Mac verwenden oder auf eine andere mobile App wie [PocketPal AI](/power-local-llm/pocketpal-ai-review) oder [Private LLM](/power-local-llm/private-llm-review) ausweichen.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Was kostet AnythingLLM Mobile?',
        content: [
          '**AnythingLLM Mobile selbst ist im eigenständigen On-Device-Modus kostenlos herunterzuladen und zu nutzen — ohne Abo und ohne In-App-Kauf, soweit dies aus der öffentlichen Dokumentation und dem Play-Store-Eintrag der App hervorgeht.** Der Quellcode der mobilen App ist unter der [MIT-Lizenz](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE) öffentlich auf GitHub verfügbar.',
          'Kosten entstehen erst dadurch, womit Sie den verbundenen Modus koppeln. Eine eigene AnythingLLM-Desktop-App oder einen Docker-Container zur Kopplung selbst zu betreiben, ist kostenlos und quelloffen — genau wie die mobile App. Wer nicht selbst hosten möchte, kann bei Mintplex Labs [AnythingLLM Cloud](https://anythingllm.com/pricing) als separat gehosteten Dienst beziehen: einen Basic-Tarif für 50 $/Monat mit privater Instanz und eigener Subdomain, einen Pro-Tarif für 99 $/Monat mit zusätzlichem 72-Stunden-Support-SLA für größere Teams sowie einen individuell bepreisten Enterprise-Tarif mit On-Premise-Bereitstellung, SSO und RBAC. Bei beiden kostenpflichtigen Cloud-Tarifen müssen Sie Ihren eigenen LLM-API-Schlüssel mitbringen; Modellkosten sind nicht inbegriffen.',
        ],
        items: [
          '**Mobile App (eigenständiger Modus):** Kostenlos, unter der MIT-Lizenz quelloffen, kein Abo gefunden.',
          '**Mobile App (verbundener Modus):** Die Kopplungsfunktion selbst ist kostenlos; die Kosten hängen vollständig davon ab, womit gekoppelt wird.',
          '**Selbst gehostete Desktop-/Docker-Instanz zur Kopplung:** Kostenlos und quelloffen, genau wie die mobile App.',
          '**AnythingLLM Cloud Basic:** 50 $/Monat — private Instanz, eigene Subdomain, eigener LLM-API-Schlüssel erforderlich.',
          '**AnythingLLM Cloud Pro:** 99 $/Monat — zusätzlich 72-Stunden-Support-SLA, ausgerichtet auf größere Teams.',
          '**AnythingLLM Cloud Enterprise:** Individuelle Preisgestaltung — On-Premise-Bereitstellung, SSO, RBAC, individuelle Integrationen.',
        ],
        note: 'Die Preise für AnythingLLM Cloud werden von Mintplex Labs in US-Dollar festgelegt und können sich ändern; prüfen Sie aktuelle Tarife und Bedingungen direkt unter [anythingllm.com/pricing](https://anythingllm.com/pricing), bevor Sie ein Abo abschließen.',
      },
      features: {
        id: 'key-features',
        title: 'Welche Funktionen bietet AnythingLLM Mobile?',
        content: [
          '**Welche Funktionen verfügbar sind, hängt vom aktiven Modus ab — manche Fähigkeiten gibt es laut der eigenen Mobile-Dokumentation des Projekts ausschließlich im verbundenen Modus.** Dazu zählen:',
        ],
        items: [
          '**Chat auf dem Gerät.** Chatten mit einem lokal heruntergeladenen Modell — nach dem anfänglichen Download ist keine Internetverbindung mehr nötig.',
          '**Offline-Dokumenten-RAG.** Dokumente in einen eigenständigen Workspace hochladen und Antworten mit Quellenangaben erhalten, mithilfe des On-Device-Embedding-Modells und der lokalen Vektordatenbank.',
          '**Workspace-Synchronisierung (nur verbundener Modus).** Chats, Threads und Workspaces, die auf einer gekoppelten Desktop-, Docker- oder Cloud-Instanz erstellt wurden, synchronisieren sich mit dem Smartphone und zurück.',
          '**Benutzerdefinierte Agenten-Tools (nur verbundener Modus).** Auf der Desktop-Instanz konfigurierte Tool-Calling-Fähigkeiten von Agenten übertragen sich nach der Kopplung auf mobil; der eigenständige On-Device-Modus unterstützt keine benutzerdefinierte Tool-Konfiguration.',
          '**Kopplung per QR-Code.** Die Verbindung mit einer selbst gehosteten Instanz erfolgt über einen QR-Code aus deren Einstellungen, statt Serveradressen und Zugangsdaten manuell einzugeben.',
          '**Keine Kontopflicht für den eigenständigen Modus.** Chat und Dokumenten-RAG im eigenständigen Modus erfordern kein Konto bei Mintplex Labs.',
        ],
        note: 'Der Funktionsumfang kann sich zwischen App-Versionen ändern, da das Projekt häufig aktualisiert wird. Prüfen Sie das In-App-Changelog oder die [GitHub-Releases-Seite](https://github.com/Mintplex-Labs/anythingllm-mobile/releases), um zu sehen, was in Ihrer installierten Version verfügbar ist.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Welche Hardware benötigt AnythingLLM Mobile?',
        content: [
          '**Der eigenständige On-Device-Modus hängt vom RAM und der CPU/NPU des Smartphones ab, genau wie bei jeder anderen GGUF-basierten mobilen Chat-App — Mintplex Labs hat keine genauen RAM-Anforderungen pro Modell für die ausgewählten On-Device-Modelle veröffentlicht, weshalb allgemeine Richtwerte für lokale LLMs gelten.** Als Faustregel für quantisierte GGUF-Modelle auf Smartphones benötigt ein kleines Modell im Bereich von 1–3 Milliarden Parametern etwa 2–3 GB freien RAM; größere Modelle benötigen entsprechend mehr.',
          'Der verbundene Modus stellt praktisch keine Hardware-Anforderung an das Smartphone für die Inferenz, da das Sprachmodell auf der gekoppelten Desktop-, Docker- oder Cloud-Instanz läuft — das Smartphone benötigt lediglich genug Ressourcen für die App-Oberfläche und die Datensynchronisierung; die eigentlichen Hardware-Anforderungen verschieben sich auf das Gerät, das die verbundene AnythingLLM-Instanz hostet.',
        ],
        items: [
          'Eigenständiger Modus: mindestens 2–3 GB freien RAM für die kleinsten mitgelieferten Modelle einplanen; größere On-Device-Modelle benötigen mehr.',
          'Speicherplatz: einige hundert Megabyte bis wenige Gigabyte freier Gerätespeicher pro heruntergeladenem On-Device-Modell.',
          'Verbundener Modus: Die Hardware des Smartphones ist nicht der Flaschenhals — maßgeblich sind die Hardware-Anforderungen des Geräts, das Ihre Desktop-, Docker- oder Cloud-Instanz betreibt.',
          'Netzwerk: Der eigenständige Modus funktioniert nach dem Modell-Download vollständig offline; der verbundene Modus benötigt ein gemeinsames lokales Netzwerk (bzw. eine Internetverbindung bei Cloud), um die gekoppelte Instanz zu erreichen.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen eignet sich AnythingLLM Mobile',
        items: [
          '**Android-Nutzer, die eine wirklich kostenlose, offline funktionierende KI-Chat- und Dokumenten-RAG-App möchten.** Der eigenständige Modus benötigt weder Konto noch Server noch Abo — passend für Nutzer, die private On-Device-KI mit minimalem Einrichtungsaufwand wollen.',
          '**Bestehende Nutzer von AnythingLLM Desktop, Docker oder Cloud, die dieselben Workspaces auf dem Smartphone möchten.** Die Synchronisierung im verbundenen Modus ist der klare Vorteil für alle, die bereits in das Desktop-/Server-Ökosystem von AnythingLLM investiert haben.',
          '**Nutzer, die mit der Wahl zwischen zwei unterschiedlichen Modi zurechtkommen.** Den vollen Nutzen aus der App zu ziehen bedeutet zu verstehen, wann eigenständiger und wann verbundener Modus sinnvoll ist — das passt eher zu technisch interessierten Nutzern als zu jemandem, der ein einziges, fest definiertes Verhalten erwartet.',
          '**Teams, die ein mobiles Frontend ohne eigenes Hosting möchten.** Die Kopplung eines Android-Smartphones mit einer kostenpflichtigen AnythingLLM-Cloud-Instanz ermöglicht mobilen Zugriff auf gemeinsame Workspaces, ohne selbst Infrastruktur zu betreiben.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen eignet sich AnythingLLM Mobile nicht',
        items: [
          '**iPhone- und iPad-Nutzer.** Zum Zeitpunkt dieses Tests gibt es keine iOS-Version; für Apple-Geräte eignen sich stattdessen [Private LLM](/power-local-llm/private-llm-review) oder [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
          '**Nutzer, die einen einzigen einfachen Modus ohne Entscheidungen möchten.** Die Trennung zwischen eigenständig und verbunden ist eine echte Design-Entscheidung, die Nutzer verstehen müssen; wer ein einziges, geführtes Erlebnis mit kuratierter Modellliste ohne Server-Kopplungskonzept möchte, ist bei [PocketPal AI](/power-local-llm/pocketpal-ai-review) oder [Loci](/power-local-llm/loci-ai-review-offline-local-ai) besser aufgehoben.',
          '**Nutzer, die vollständige benutzerdefinierte Agenten-Tools ohne jeden Server möchten.** Die Konfiguration benutzerdefinierter Agenten-Tools ist im aktuellen Design dieser App an den verbundenen Modus gebunden — wer diese Fähigkeit vollständig On-Device haben möchte, sollte sich heute anderswo umsehen.',
          '**Nutzer, die kostenlosen Enterprise-Support benötigen.** Community-Support ist kostenlos, ein Support-SLA erfordert jedoch ein kostenpflichtiges AnythingLLM-Cloud-Pro- oder -Enterprise-Abo, nicht allein die mobile App.',
          '**Nutzer, die möglichst große On-Device-Modelle möchten.** Der eigenständige Modus ist auf kleine, ausgewählte Modelle ausgelegt, die zum RAM eines Smartphones passen; wer größere Modelle benötigt, sollte entweder den verbundenen Modus mit einer leistungsfähigen Desktop-Instanz nutzen oder direkt auf Desktop-/Workstation-Hardware setzen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobile im Vergleich zu Alternativen',
        itemHeadings: true,
        columns: ['App', 'On-Device vs. Client', 'Plattformen', 'Lizenz / Kosten'],
        rows: [
          {
            'App': 'AnythingLLM Mobile',
            'On-Device vs. Client': 'Beides — eigenständige On-Device-Inferenz oder verbundener Client zu einer selbst gehosteten Instanz',
            'Plattformen': 'Nur Android',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT); gekoppelter Cloud-Dienst ab 50 $/Monat',
          },
          {
            'App': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            'On-Device vs. Client': 'Führt LLM und RAG-Pipeline selbst aus, lokal oder per API',
            'Plattformen': 'Mac, Windows, Linux, Docker',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT); Cloud-Hosting ab 50 $/Monat',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'On-Device vs. Client': 'Nur On-Device — kein Server-/Client-Modus',
            'Plattformen': 'iPhone/iPad, Android',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT)',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'On-Device vs. Client': 'Nur On-Device — kein Server-/Client-Modus',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Lizenz / Kosten': 'Kostenpflichtig, Einmalkauf; Closed Source',
          },
          {
            'App': 'LLM Farm',
            'On-Device vs. Client': 'Nur On-Device, über llama.cpp',
            'Plattformen': 'iPhone/iPad',
            'Lizenz / Kosten': 'Kostenlos, quelloffen; die Verfügbarkeit im App Store hat sich Berichten zufolge im Lauf der Zeit geändert — aktuellen Eintrag vor der Installation prüfen',
          },
          {
            'App': 'Layla',
            'On-Device vs. Client': 'Nur On-Device, plus optionale externe API-Anbieter',
            'Plattformen': 'Android, iPhone/iPad',
            'Lizenz / Kosten': 'Kostenlose Basisversion plus kostenpflichtige Tarife; Closed Source',
          },
          {
            'App': 'Maid',
            'On-Device vs. Client': 'Nur On-Device, über llama.cpp; unterstützt zusätzlich entfernte Ollama-/OpenAI-kompatible Endpunkte',
            'Plattformen': 'Android, iPhone/iPad',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT)',
          },
          {
            'App': 'RikkaHub',
            'On-Device vs. Client': 'Beides — lokale On-Device-Inferenz über einen LiteRT-Provider, plus Multi-Provider-Cloud-Client',
            'Plattformen': 'Android',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
          },
        ],
        note: 'AnythingLLM Mobile und RikkaHub sind die beiden Apps in dieser Tabelle mit einem echten dualen On-Device-/Client-Design; alle anderen Zeilen laufen entweder strikt On-Device oder strikt als Client — dieser Unterschied ist vor der Installation wichtiger als eine einzelne Feature-Liste. Prüfen Sie aktuelle App-Store-/Play-Store-Einträge direkt, bevor Sie eine der aufgeführten Apps installieren, da sich die Verfügbarkeit ändern kann.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Führt AnythingLLM Mobile KI-Modelle direkt auf dem Smartphone aus?',
            a: 'Ja, im eigenständigen Modus. Die App lädt ein kleines, ausgewähltes GGUF-Sprachmodell herunter und führt es über Cactus Compute, eine llama.cpp-basierte Inferenz-Engine für React Native, direkt auf dem Gerät aus — zusammen mit einem lokalen Embedding-Modell und einer Vektordatenbank für Offline-Dokumenten-RAG. Zusätzlich unterstützt die App einen verbundenen Modus, der sich mit einer selbst gehosteten AnythingLLM-Desktop- oder Cloud-Instanz koppelt; dort findet die Inferenz auf der gekoppelten Instanz statt, nicht auf dem Smartphone.',
          },
          {
            q: 'Gibt es AnythingLLM Mobile für iPhone?',
            a: 'Nein. Zum Zeitpunkt dieses Tests hat AnythingLLM Mobile keinen App-Store-Eintrag und ist ausschließlich für Android über Google Play oder als direkten APK-Download verfügbar. iOS-Unterstützung wurde im GitHub-Issue-Tracker des Projekts diskutiert, es gibt jedoch keine offizielle Ankündigung von Mintplex Labs zu einem Veröffentlichungstermin.',
          },
          {
            q: 'Ist AnythingLLM Mobile kostenlos?',
            a: 'Ja, die mobile App selbst ist kostenlos und unter der MIT-Lizenz quelloffen, ohne Abo für die eigenständige On-Device-Nutzung. Wer den verbundenen Modus nutzt, um sich mit einer gehosteten AnythingLLM-Cloud-Instanz statt Self-Hosting zu koppeln, zahlt für diesen separaten Cloud-Dienst ab 50 $/Monat — die mobile App und die Self-Hosting-Optionen für Desktop/Docker bleiben jedoch kostenlos.',
          },
          {
            q: 'Wer entwickelt AnythingLLM Mobile?',
            a: 'AnythingLLM Mobile wird von Mintplex Labs entwickelt, einem 2022 von Timothy Carambat gegründeten Unternehmen mit Sitz in Irvine, Kalifornien. Mintplex Labs durchlief den Sommer-2022-Jahrgang von Y Combinator und entwickelt auch die Desktop-/Server-Anwendung AnythingLLM.',
          },
          {
            q: 'Unter welcher Lizenz steht AnythingLLM Mobile?',
            a: 'AnythingLLM Mobile steht unter der MIT-Lizenz, einer permissiven Open-Source-Lizenz, und der Quellcode ist öffentlich auf GitHub verfügbar. Auch das Desktop-/Server-Projekt AnythingLLM, mit dem sich die App verbinden lässt, steht unter der MIT-Lizenz.',
          },
          {
            q: 'Wie verbinde ich AnythingLLM Mobile mit meiner Desktop-Instanz?',
            a: 'Aktivieren Sie unter Settings > Admin > General Ihrer AnythingLLM-Desktop-, Docker- oder Cloud-Instanz die "Netzwerkerkennung", öffnen Sie dann Settings > Tools > AnythingLLM Mobile, um einen Kopplungs-QR-Code anzuzeigen. Scannen Sie diesen Code in der App AnythingLLM Mobile, um die Verbindung herzustellen. Nach der Kopplung synchronisieren sich Workspaces, Chats und Threads zwischen Smartphone und verbundener Instanz.',
          },
          {
            q: 'Benötigt AnythingLLM Mobile eine Internetverbindung?',
            a: 'Für den eigenständigen Modus nicht, sobald das Modell einmal heruntergeladen wurde — Inferenz und Dokumenten-RAG laufen vollständig auf dem Gerät. Der verbundene Modus benötigt ein gemeinsames lokales Netzwerk, um eine selbst gehostete Desktop- oder Docker-Instanz zu erreichen, beziehungsweise eine Internetverbindung für eine gehostete AnythingLLM-Cloud-Instanz.',
          },
          {
            q: 'Kann AnythingLLM Mobile mit meinen Dokumenten chatten?',
            a: 'Ja, in beiden Modi. Im eigenständigen Modus werden Dokumente vollständig offline mit einem On-Device-Embedding-Modell und einer lokalen Vektordatenbank zerlegt, eingebettet und durchsucht. Im verbundenen Modus übernimmt die gekoppelte Desktop-, Docker- oder Cloud-Instanz das Dokumenten-RAG mit ihrer eigenen konfigurierten Vektordatenbank und ihrem Embedding-Modell — genau wie in der Desktop-App.',
          },
          {
            q: 'Was unterscheidet AnythingLLM Mobile von der Desktop-Version von AnythingLLM?',
            a: 'AnythingLLM Mobile ist eine eigenständige Android-App für Smartphones mit einem eigenen eigenständigen On-Device-Inferenzmodus zusätzlich zur Möglichkeit, sich mit einer Desktop-Instanz zu verbinden. Die im PromptQuorum-Vergleich AnythingLLM vs. PrivateGPT vs. Open WebUI behandelte Desktop-/Server-Anwendung AnythingLLM läuft auf Mac, Windows, Linux oder Docker und unterstützt eine größere Auswahl an LLM-Anbietern, Vektordatenbanken und Agenten-Konfigurationen als der eigenständige Modus der mobilen App.',
          },
          {
            q: 'Wie schneidet AnythingLLM Mobile im Vergleich zu PocketPal AI oder Private LLM ab?',
            a: 'PocketPal AI und Private LLM sind reine On-Device-Chat-Apps ohne Server-Verbindungsmodus; AnythingLLM Mobile ist in diesem Vergleich die einzige App mit einem echten dualen Design — eigenständige On-Device-Inferenz plus optionalem verbundenem Modus zu einer selbst gehosteten oder Cloud-AnythingLLM-Instanz. Wählen Sie AnythingLLM Mobile, wenn Sie diese Flexibilität möchten oder bereits AnythingLLM auf dem Desktop nutzen; wählen Sie PocketPal AI (kostenlos, iPhone/Android) oder Private LLM (kostenpflichtig, nur Apple), wenn Sie speziell eine iPhone-App suchen, da AnythingLLM Mobile nur für Android verfügbar ist.',
          },
          {
            q: 'Muss ich bei der Verwendung von AnythingLLM Mobile die DSGVO beachten?',
            a: 'Im eigenständigen On-Device-Modus verlassen Chatverläufe und Dokumente das Gerät nicht, was die datenschutzrechtliche Bewertung erleichtert, da keine Übermittlung an einen externen Verarbeiter im Sinne der DSGVO stattfindet. Im verbundenen Modus mit einer selbst gehosteten Desktop- oder Docker-Instanz im eigenen Netzwerk bleiben Daten unter eigener Kontrolle, was die Anforderungen aus Art. 28 DSGVO an Auftragsverarbeiter typischerweise vereinfacht. Wird stattdessen die gehostete AnythingLLM-Cloud-Instanz von Mintplex Labs (einem US-Unternehmen) genutzt, ist zu prüfen, ob ein Auftragsverarbeitungsvertrag angeboten wird und wie Mintplex Labs internationale Datenübermittlungen handhabt — diese Prüfung sollte vor dem produktiven Einsatz mit personenbezogenen Daten erfolgen, nicht danach. Diese Einschätzung ersetzt keine Rechtsberatung.',
          },
          {
            q: 'Ist AnythingLLM Mobile für den deutschen Mittelstand geeignet?',
            a: 'Der kostenlose, selbst hostbare Ansatz — Desktop- oder Docker-Instanz plus mobiler Kopplung — passt zu Mittelstandsunternehmen, die Dokumente und Chatverläufe innerhalb der eigenen IT-Infrastruktur halten möchten, ohne für eine gehostete Cloud-Lösung zu bezahlen. Der Nachteil ist, dass Betrieb, Absicherung und Backups einer selbst gehosteten Instanz in Eigenregie erfolgen müssen; Unternehmen ohne eigene IT-Administration sollten die kostenpflichtige AnythingLLM-Cloud-Option oder eine Lösung mit dediziertem Support in Betracht ziehen. Vor einem produktiven Einsatz mit sensiblen Geschäftsdaten empfiehlt sich eine Prüfung nach BSI-Grundschutz-Kriterien für die selbst gehostete Instanz.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Das duale Design von AnythingLLM Mobile — ein echter eigenständiger On-Device-Modus neben einem optionalen verbundenen Modus — ist in dieser Kategorie ungewöhnlich, da sich die meisten mobilen KI-Apps vollständig für eine der beiden Architekturen entscheiden. Diese Flexibilität ist zugleich der größte Stolperstein für Erstnutzer: zu verstehen, welcher Modus gerade aktiv ist und was jeder Modus kann und nicht kann, erfordert mehr anfängliche Aufmerksamkeit als eine Einzelzweck-App wie PocketPal AI oder Private LLM. Die größere Einschränkung im Moment ist die Plattform: AnythingLLM Mobile ist nur für Android verfügbar, ohne App-Store-Veröffentlichung und ohne bestätigten Termin für iOS. Wählen Sie AnythingLLM Mobile, wenn Sie Android nutzen und entweder kostenlose Offline-KI ohne Einrichtungsaufwand möchten oder bereits AnythingLLM Desktop, Docker oder Cloud betreiben und dieselben Workspaces auf dem Smartphone möchten. Greifen Sie stattdessen zu Private LLM oder PocketPal AI, wenn Sie eine iPhone-App benötigen, und nutzen Sie die Desktop-Anwendung von AnythingLLM direkt, wenn Sie überhaupt keinen mobilen Client benötigen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[AnythingLLM Mobile auf GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) — Quellcode, Lizenz (MIT) und die in diesem Test erwähnte Nutzung von Cactus Compute.',
          '[Offizielle Dokumentation zu AnythingLLM Mobile](https://docs.anythingllm.com/mobile/overview) — eigenständiger vs. verbundener Modus, Kopplungsschritte und Einrichtung der Netzwerkerkennung.',
          '[AnythingLLM Mobile auf Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) — Android-Verfügbarkeit und App-Beschreibung.',
          '[Offizielle Seite zu AnythingLLM Mobile](https://anythingllm.com/mobile) — Download-Links und Funktionsübersicht.',
          '[Preise für AnythingLLM Cloud](https://anythingllm.com/pricing) — in diesem Test referenzierte Basic-, Pro- und Enterprise-Tarife.',
          '[Mintplex Labs bei Y Combinator](https://www.ycombinator.com/companies/mintplex-labs) — Unternehmensgründung, Jahrgang und Hintergrund.',
          '[GitHub-Repository der Desktop-/Server-Anwendung AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) — das begleitende Projekt, mit dem sich diese mobile App verbinden lässt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[AnythingLLM vs. PrivateGPT vs. Open WebUI: Welches RAG-Tool gewinnt?](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — der Vergleich der Desktop-/Server-Version von AnythingLLM, mit der sich diese mobile App verbinden lässt.',
          '[PocketPal AI im Test (2026)](/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene, reine On-Device-Alternative für iPhone und Android.',
          '[Private LLM im Test](/power-local-llm/private-llm-review) — eine kostenpflichtige, reine On-Device-Alternative nur für Apple-Geräte mit großem integriertem Modellkatalog.',
          '[Die besten Local-LLM-Apps für Android 2026](/power-local-llm/best-local-llm-apps-android-2026) — die umfassendere Android-App-Übersicht.',
          '[Loci im Test: Offline-KI für iPhone, Android, iPad, Mac und Windows](/power-local-llm/loci-ai-review-offline-local-ai) — eine kuratierte Alternative über fünf Plattformen für alle, die einen einzigen geführten Modus möchten.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AnythingLLM Mobile im Test (2026): Chat + RAG auf dem Gerät',
      description:
        'AnythingLLM Mobile im Test: kostenlose, MIT-lizenzierte Android-App, die Modelle auf dem Gerät ausführt UND mit einer selbst gehosteten AnythingLLM-Instanz synchronisiert. iOS-Status, Preise, RAG.',
      url: 'https://promptquorum.com/de/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'de',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Datenschutzbewusste Android-Nutzer und bestehende AnythingLLM-Desktop-/Self-Hosting-Nutzer, die eine mobile Ergänzung suchen' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'Lokales LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AnythingLLM Mobile im Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-es.webp',
    title: 'AnythingLLM Mobile: Reseña (2026) — Chat + RAG en el dispositivo',
    seoTitle: 'AnythingLLM Mobile 2026: ¿on-device o cliente?',
    intro:
      'AnythingLLM Mobile es una app gratuita para Android, con licencia MIT, de [Mintplex Labs](https://mintplex.com), que ejecuta un modelo de lenguaje pequeño y una base de datos vectorial local directamente en el teléfono para chatear con documentos sin conexión. También puede emparejarse con una instancia autoalojada de [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) o AnythingLLM Cloud en la red local para acceder a todas las funciones de la versión de escritorio. Esta reseña explica con precisión en qué se diferencia el modo autónomo en el dispositivo del modo conectado, la disponibilidad real por plataforma (Android está disponible; iOS todavía no), el precio de la app frente al servicio AnythingLLM Cloud, y para quién es y no es adecuada.',
    metaDescription:
      'Reseña de AnythingLLM Mobile: app gratuita con licencia MIT que ejecuta modelos en el dispositivo Y se sincroniza con una instancia autoalojada de AnythingLLM. Estado de iOS, precios, RAG.',
    twitterDescription:
      'Reseña de AnythingLLM Mobile 2026: ejecuta un modelo en el dispositivo para chat sin conexión, pero también se empareja con una instancia autoalojada de AnythingLLM. Solo Android, sin app de iOS todavía.',
    audience:
      'Usuarios de Android preocupados por la privacidad y usuarios existentes de AnythingLLM en escritorio o autoalojado que buscan un complemento móvil.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AnythingLLM Mobile reseña',
    targetKeywords: [
      'anythingllm mobile reseña',
      'anythingllm mobile app',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile on-device',
      'anythingllm mobile vs desktop',
      'anythingllm mobile precio',
      'chatear con documentos en el móvil',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**AnythingLLM Mobile es una app gratuita para Android con licencia MIT que funciona de dos maneras: de forma autónoma, ejecutando un modelo de lenguaje pequeño y seleccionado más una base de datos vectorial local por completo en el dispositivo para chat con documentos y RAG sin conexión, o de forma conectada, sincronizando chats, espacios de trabajo y documentos con una instancia autoalojada de [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) o AnythingLLM Cloud mediante emparejamiento por código QR en la red local.** La desarrolla [Mintplex Labs](https://mintplex.com), la empresa detrás del proyecto de código abierto AnythingLLM para escritorio y servidor, y se publica en [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) bajo licencia MIT. Al momento de esta reseña, la app solo está disponible en [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) para Android; todavía no existe una versión en la App Store de iOS.',
    quickAnswerTop: {
      es: {
        question: '¿AnythingLLM Mobile ejecuta modelos en el teléfono o es solo un cliente para un servidor?',
        answer:
          'Ambas cosas — esa es una decisión de diseño de la app, no una limitación. Por defecto, AnythingLLM Mobile descarga un modelo GGUF pequeño y lo ejecuta en el dispositivo mediante [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile) (un motor de inferencia basado en llama.cpp para React Native), junto con un modelo de embeddings local y una base de datos vectorial en el dispositivo, de modo que el chat con documentos y el RAG funcionan totalmente sin conexión, sin cuenta y sin servidor. Además, la app puede emparejarse mediante un código QR que aparece en el panel Settings > Tools de una instancia autoalojada de AnythingLLM Desktop o AnythingLLM Cloud, lo que desbloquea herramientas de agentes personalizadas, espacios de trabajo más grandes y sincronización entre dispositivos que el modo autónomo no ofrece.',
        bullets: [
          'El modo autónomo ejecuta un modelo pequeño incluido más una base de datos vectorial local por completo en el dispositivo — sin servidor, sin cuenta, funciona sin conexión.',
          'El modo conectado se empareja (mediante código QR) con una instancia autoalojada de AnythingLLM Desktop o Cloud para herramientas de agentes personalizadas y sincronización entre dispositivos.',
          'Solo Android, mediante [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) o APK directo; sin versión en la App Store de iOS al momento de esta reseña.',
          'Gratuita y de código abierto bajo licencia MIT; el servicio separado AnythingLLM Cloud, para quienes quieran el modo conectado sin autoalojarse, comienza en 50 $/mes.',
          'Desarrollada por [Mintplex Labs](https://mintplex.com), una empresa de Y Combinator (verano de 2022) fundada por Timothy Carambat, también responsable del proyecto AnythingLLM para escritorio/servidor.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es AnythingLLM Mobile?', anchor: 'what-is-anythingllm-mobile' },
      { label: '¿Quién desarrolla AnythingLLM Mobile?', anchor: 'history-and-developer' },
      { label: '¿Funciona en el dispositivo o se conecta a un servidor?', anchor: 'on-device-vs-connected' },
      { label: 'Cómo empezar con AnythingLLM Mobile', anchor: 'getting-started' },
      { label: '¿Cómo funcionan el chat con documentos y el RAG en el móvil?', anchor: 'models-and-rag' },
      { label: '¿Está disponible AnythingLLM Mobile en iPhone?', anchor: 'platform-availability' },
      { label: '¿Cuánto cuesta AnythingLLM Mobile?', anchor: 'pricing' },
      { label: '¿Qué funciones tiene AnythingLLM Mobile?', anchor: 'key-features' },
      { label: '¿Qué hardware necesitas?', anchor: 'hardware-requirements' },
      { label: 'Quién debería usar AnythingLLM Mobile', anchor: 'who-should-use' },
      { label: 'Quién no debería usar AnythingLLM Mobile', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobile frente a alternativas', anchor: 'vs-alternatives' },
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
            text: 'AnythingLLM Mobile es una app gratuita para Android con licencia MIT de Mintplex Labs que ejecuta un modelo de lenguaje pequeño en el dispositivo para chat con documentos sin conexión, y que también puede conectarse a una instancia autoalojada de AnythingLLM Desktop o Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'No es solo una app de control remoto para un servidor, ni tampoco un sustituto completamente autónomo de la app de escritorio — es ambas cosas a la vez: una IA sin conexión independiente en tu teléfono y una pantalla móvil opcional para una instancia de escritorio o de la nube que ya tengas en marcha, y tú eliges qué modo se ajusta a cada tarea.',
          },
        ],
        items: [
          'Gratuita y de código abierto (licencia MIT); el código fuente de la app móvil es público en [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile).',
          'Doble modo: inferencia autónoma en el dispositivo (motor Cactus Compute, modelo GGUF incluido, base de datos vectorial local) o modo conectado emparejado con una instancia autoalojada de escritorio o Cloud mediante código QR.',
          'Solo Android al momento de esta reseña — disponible en [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) y como APK directo; sin versión en la App Store de iOS.',
          'Desarrollada por [Mintplex Labs](https://mintplex.com), una empresa de Y Combinator también responsable del [proyecto AnythingLLM para escritorio/servidor](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag).',
          'La app móvil en sí no tiene suscripción; AnythingLLM Cloud, el servicio de servidor alojado por separado con el que algunos usuarios se emparejan, empieza en 50 $/mes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el [repositorio público de AnythingLLM Mobile en GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile), la [documentación oficial para móvil](https://docs.anythingllm.com/mobile/overview), la [ficha en Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) y [anythingllm.com](https://anythingllm.com/mobile), verificados en septiembre de 2026. PromptQuorum no ha realizado pruebas de rendimiento independientes de AnythingLLM Mobile para esta reseña — las cifras de rendimiento a continuación son orientación general de hardware para LLM locales, no mediciones específicas de esta app.',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: '¿Qué es AnythingLLM Mobile?',
        content: [
          '**AnythingLLM Mobile es una app para Android, publicada bajo [licencia MIT](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE), que permite que un teléfono chatee con un modelo de lenguaje y con documentos subidos sin depender de una API en la nube.** Es una base de código independiente del [proyecto AnythingLLM para escritorio/servidor](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag), construida específicamente para React Native, aunque ambos proyectos provienen de la misma empresa y comparten el nombre AnythingLLM y el concepto de espacios de trabajo.',
          'La forma más clara de entender la app es como dos productos en uno: un asistente de IA autónomo en el dispositivo que funciona sin configuración ni cuenta, y una interfaz móvil para una instancia autoalojada de AnythingLLM, pensada para usuarios que ya usan la app de escritorio, un contenedor Docker o una suscripción de AnythingLLM Cloud y quieren los mismos espacios de trabajo, historial de chat y documentos en el teléfono.',
        ],
        note: 'RAG (generación aumentada por recuperación) significa que la app busca en tus propios documentos los fragmentos relevantes y se los da al modelo de lenguaje como contexto, de modo que las respuestas se basan en tus archivos y no solo en los datos de entrenamiento del modelo.',
      },
      history: {
        id: 'history-and-developer',
        title: '¿Quién desarrolla AnythingLLM Mobile?',
        content: [
          '**AnythingLLM Mobile la desarrolla [Mintplex Labs](https://mintplex.com), la empresa fundada por Timothy Carambat que también creó las versiones originales de AnythingLLM para escritorio y servidor.** Mintplex Labs se fundó en 2022, tiene sede en Irvine, California, y pasó por la promoción de verano de 2022 de Y Combinator, con financiación semilla de Y Combinator, Goodwater Capital, UpHonest Capital y Orange DAO.',
          'El proyecto insignia AnythingLLM para escritorio y servidor —una "aplicación de IA todo en uno" de código abierto y autoalojable para chatear con documentos y crear agentes personalizados— existe desde varios años antes que la app móvil y cuenta con una comunidad propia y numerosa en GitHub, analizado en detalle en la [comparativa de PromptQuorum entre AnythingLLM, PrivateGPT y Open WebUI](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag). AnythingLLM Mobile es una base de código React Native más nueva y separada, que traslada los mismos conceptos de espacios de trabajo y RAG al teléfono.',
        ],
        items: [
          'Empresa: [Mintplex Labs](https://mintplex.com), fundada en 2022 en Irvine, California, por Timothy Carambat.',
          'Promoción de verano de 2022 de Y Combinator; entre los inversores de la ronda semilla están Y Combinator, Goodwater Capital, UpHonest Capital y Orange DAO.',
          'También desarrolla: la [aplicación AnythingLLM para escritorio/servidor](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) y VectorAdmin, una herramienta de código abierto para gestionar bases de datos vectoriales.',
          'Código fuente de AnythingLLM Mobile: [github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile), licencia MIT.',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: '¿AnythingLLM Mobile funciona en el dispositivo o se conecta a un servidor?',
        content: [
          '**AnythingLLM Mobile admite tanto un modo autónomo en el dispositivo como un modo conectado que se empareja con una instancia de AnythingLLM alojada por separado — no es exclusivamente lo uno ni lo otro, y el modo activo determina lo que la app puede hacer.** Confundir ambos modos importa: quien espera una IA totalmente sin conexión y sin configuración la obtiene en el modo autónomo, mientras que quien espera el conjunto completo de funciones de escritorio (herramientas de agentes personalizadas, espacios de trabajo de documentos más grandes) necesita el modo conectado y una instancia de escritorio, Docker o Cloud en funcionamiento con la que emparejarse.',
          'En el modo autónomo, según la [documentación móvil de Mintplex Labs](https://docs.anythingllm.com/mobile/overview) y el [repositorio de GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) de la app, el teléfono descarga un modelo de lenguaje GGUF pequeño y seleccionado y lo ejecuta localmente mediante [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile), un motor de inferencia basado en llama.cpp construido para React Native. También se ejecutan en el dispositivo un modelo de embeddings pequeño y una base de datos vectorial local, de modo que los documentos subidos pueden dividirse en fragmentos, convertirse en embeddings y buscarse para RAG por completo sin conexión. No se necesita cuenta, clave de API ni conexión a internet para chatear una vez descargado el modelo.',
          'En el modo conectado, el teléfono no ejecuta la inferencia de ese espacio de trabajo por sí mismo — se empareja con una app AnythingLLM Desktop, una instancia Docker autoalojada o una suscripción de AnythingLLM Cloud a través de la red local (o internet, en el caso de Cloud), escaneando un código QR que aparece en Settings > Tools > AnythingLLM Mobile de esa instancia. La instancia de escritorio debe tener activada la opción "Enable network discovery" en Settings > Admin > General para que el emparejamiento en red local funcione. Una vez emparejados, los chats, espacios de trabajo, hilos y herramientas de agentes personalizadas se sincronizan entre el teléfono y la instancia conectada, y el trabajo de LLM, embeddings y RAG ocurre allí donde se ejecuta esa instancia, no en el teléfono.',
        ],
        decisionBlock: {
          title: '¿Qué modo deberías usar?',
          localIf: [
            'Quieres chat con IA y RAG de documentos que funcione sin conexión, sin cuenta, sin servidor y sin configuración.',
            'Estás probando si la IA en el dispositivo es lo bastante rápida en tu teléfono Android específico antes de comprometerte a más.',
            'No usas —ni quieres usar— una instancia de escritorio o servidor de AnythingLLM.',
          ],
          cloudIf: [
            'Ya usas AnythingLLM Desktop, Docker o AnythingLLM Cloud y quieres los mismos espacios de trabajo e historial de chat en el teléfono.',
            'Necesitas herramientas de agentes personalizadas, bibliotecas de documentos más grandes o un modelo más capaz del que un teléfono pueda ejecutar razonablemente.',
            'Quieres que varios dispositivos (teléfono y escritorio) se mantengan sincronizados con un espacio de trabajo compartido.',
          ],
          quick: [
            'Si tienes dudas, empieza con el modo autónomo — no necesita nada más en funcionamiento.',
            'Cambia al modo conectado solo cuando ya tengas una instancia de escritorio, Docker o Cloud con la que emparejarte.',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar con AnythingLLM Mobile',
        content: [
          '**La configuración varía según el modo que quieras usar, de acuerdo con la [documentación móvil](https://docs.anythingllm.com/mobile/overview) de la app.** El modo autónomo no necesita nada más allá de instalar la app; el modo conectado necesita una instancia de AnythingLLM Desktop, Docker o Cloud ya existente con la que emparejarse.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga AnythingLLM Mobile desde [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) o como APK directo desde [anythingllm.com/mobile](https://anythingllm.com/mobile). No se requiere cuenta ni registro por correo para abrir la app.',
          },
          {
            title: 'Elige el modo autónomo para uso sin conexión',
            whyItMatters: 'Al abrirla por primera vez, la app ofrece modelos seleccionados para el dispositivo listos para descargar. Elige uno acorde a la RAM de tu dispositivo (ver la sección de hardware más abajo) y empieza a chatear — no se necesita más configuración para el chat básico y la carga de documentos.',
          },
          {
            title: 'O empareja con una instancia autoalojada para el modo conectado',
            whyItMatters: 'Si ya usas AnythingLLM Desktop, Docker o Cloud, activa "network discovery" en Settings > Admin > General de esa instancia, y luego abre Settings > Tools > AnythingLLM Mobile en la interfaz de escritorio para mostrar un código QR de emparejamiento.',
          },
          {
            title: 'Escanea el código QR desde la app móvil',
            whyItMatters: 'En AnythingLLM Mobile, usa la opción de emparejamiento/escaneo para conectarte con la instancia de escritorio o Cloud. Una vez emparejados, los espacios de trabajo, chats e hilos de esa instancia estarán disponibles en la app móvil, y las actualizaciones se sincronizarán entre dispositivos.',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: '¿Cómo funcionan el chat con documentos y el RAG en el móvil?',
        itemHeadings: true,
        columns: ['Modo', 'Dónde ocurre la inferencia', 'RAG / manejo de documentos'],
        rows: [
          {
            'Modo': 'Autónomo (en el dispositivo)',
            'Dónde ocurre la inferencia': 'En el teléfono, mediante Cactus Compute (motor basado en llama.cpp para React Native)',
            'RAG / manejo de documentos': 'Modelo de embeddings local + base de datos vectorial en el dispositivo; los documentos se dividen, convierten en embeddings y buscan por completo sin conexión',
          },
          {
            'Modo': 'Conectado (instancia emparejada)',
            'Dónde ocurre la inferencia': 'En la instancia emparejada de AnythingLLM Desktop, el host Docker o Cloud',
            'RAG / manejo de documentos': 'Usa la base de datos vectorial y el modelo de embeddings configurados en esa instancia — el mismo pipeline de RAG que la app de escritorio, sincronizado al móvil',
          },
        ],
        note: 'Un espacio de trabajo creado en un modo no se convierte automáticamente en el otro — un documento subido a un espacio de trabajo autónomo en el dispositivo permanece local en ese teléfono, a menos que cambies a un espacio de trabajo conectado emparejado con una instancia de escritorio o Cloud.',
      },
      platform: {
        id: 'platform-availability',
        title: '¿Está disponible AnythingLLM Mobile en iPhone?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidad', 'Notas'],
        rows: [
          {
            'Plataforma': 'Android',
            'Disponibilidad': 'Disponible en [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) y como descarga directa de APK',
            'Notas': 'Esta es la única plataforma móvil disponible al momento de esta reseña.',
          },
          {
            'Plataforma': 'iPhone / iPad (iOS)',
            'Disponibilidad': 'No publicada — no se encontró ninguna ficha en la App Store para AnythingLLM Mobile al momento de esta reseña',
            'Notas': 'El soporte para iOS se ha discutido públicamente en el [rastreador de incidencias de GitHub](https://github.com/Mintplex-Labs/anything-llm/issues/5428) del proyecto, pero PromptQuorum no encontró ninguna publicación oficial en la App Store ni un anuncio de Mintplex Labs que confirme una fecha de lanzamiento. No des por sentada la disponibilidad en iOS basándote en la cobertura de otros sitios — verifica directamente en la [App Store](https://apps.apple.com/) antes de esperarla.',
          },
          {
            'Plataforma': 'Mac / Windows / Linux',
            'Disponibilidad': 'No aplica — esas plataformas usan la [app AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) o el contenedor Docker por separado, no la app móvil',
            'Notas': 'Los usuarios de iPhone que quieran usar AnythingLLM hoy deberían usar la app de escritorio en un Mac, o recurrir a otra app móvil como [PocketPal AI](/power-local-llm/pocketpal-ai-review) o [Private LLM](/power-local-llm/private-llm-review).',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: '¿Cuánto cuesta AnythingLLM Mobile?',
        content: [
          '**AnythingLLM Mobile en sí es gratuita para descargar y usar en el modo autónomo en el dispositivo, sin suscripción ni compra dentro de la app, según la documentación pública y la ficha en Play Store de la app.** El código fuente de la app móvil es [de código abierto con licencia MIT](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE) y público en GitHub.',
          'El costo solo aparece según con qué empareje el modo conectado. Ejecutar tu propia app AnythingLLM Desktop o un contenedor Docker para emparejarte es gratis y de código abierto, igual que la app móvil. Si prefieres no autoalojarla, Mintplex Labs vende [AnythingLLM Cloud](https://anythingllm.com/pricing) como servicio alojado por separado: un plan Basic de 50 $/mes con instancia privada y subdominio personalizado, un plan Pro de 99 $/mes que añade un SLA de soporte de 72 horas orientado a equipos más grandes, y un plan Enterprise con precio personalizado que incluye despliegue local, SSO y RBAC. Ambos planes de pago de Cloud requieren que el usuario aporte su propia clave de API de LLM; el coste del modelo no está incluido.',
        ],
        items: [
          '**App móvil (modo autónomo):** Gratuita, de código abierto con licencia MIT, sin suscripción encontrada.',
          '**App móvil (modo conectado):** La función de emparejamiento en sí es gratuita; el costo depende por completo de con qué te empareje.',
          '**Instancia autoalojada de Desktop/Docker para emparejar:** Gratuita y de código abierto, igual que la app móvil.',
          '**AnythingLLM Cloud Basic:** 50 $/mes — instancia privada, subdominio personalizado, requiere clave de API de LLM propia.',
          '**AnythingLLM Cloud Pro:** 99 $/mes — añade un SLA de soporte de 72 horas, orientado a equipos más grandes.',
          '**AnythingLLM Cloud Enterprise:** Precio personalizado — despliegue local, SSO, RBAC, integraciones a medida.',
        ],
        note: 'Los precios de AnythingLLM Cloud los establece Mintplex Labs en dólares estadounidenses y pueden cambiar; verifica los planes y condiciones actuales directamente en [anythingllm.com/pricing](https://anythingllm.com/pricing) antes de suscribirte.',
      },
      features: {
        id: 'key-features',
        title: '¿Qué funciones tiene AnythingLLM Mobile?',
        content: [
          '**La disponibilidad de funciones depende del modo activo — algunas capacidades existen solo en el modo conectado, según la propia documentación móvil del proyecto.** Entre ellas están:',
        ],
        items: [
          '**Chat en el dispositivo.** Chatea con un modelo descargado localmente sin necesitar conexión a internet tras la descarga inicial.',
          '**RAG de documentos sin conexión.** Sube documentos a un espacio de trabajo autónomo y obtén respuestas con citas, usando el modelo de embeddings y la base de datos vectorial del dispositivo.',
          '**Sincronización de espacios de trabajo (solo modo conectado).** Los chats, hilos y espacios de trabajo creados en una instancia emparejada de escritorio, Docker o Cloud se sincronizan con el teléfono y de vuelta.',
          '**Herramientas de agentes personalizadas (solo modo conectado).** Las capacidades de invocación de herramientas configuradas en la instancia de escritorio se trasladan al móvil una vez emparejado; el modo autónomo en el dispositivo no admite configuración de herramientas personalizadas.',
          '**Emparejamiento por código QR.** La conexión con una instancia autoalojada usa un código QR mostrado en la configuración de esa instancia, en lugar de introducir manualmente direcciones de servidor y credenciales.',
          '**Sin necesidad de cuenta para el uso autónomo.** Chatear y usar RAG de documentos en modo autónomo no requiere crear una cuenta con Mintplex Labs.',
        ],
        note: 'La disponibilidad de funciones puede cambiar entre versiones de la app, ya que el proyecto lanza actualizaciones con frecuencia. Consulta el registro de cambios dentro de la app o la [página de lanzamientos en GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile/releases) para ver qué está disponible en tu versión instalada.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '¿Qué hardware necesitas para usar AnythingLLM Mobile?',
        content: [
          '**El modo autónomo en el dispositivo depende de la RAM y de la CPU/NPU del teléfono, igual que cualquier otra app de chat móvil basada en GGUF — Mintplex Labs no ha publicado requisitos exactos de RAM por modelo para los modelos autónomos seleccionados, por lo que aplica orientación general de dimensionamiento para LLM locales.** Como regla general para modelos GGUF cuantizados en teléfonos, un modelo pequeño en el rango de 1 a 3 mil millones de parámetros necesita aproximadamente 2-3 GB de RAM libre, y los modelos por encima de ese tamaño necesitan proporcionalmente más.',
          'El modo conectado prácticamente no impone requisitos de hardware al teléfono para la inferencia, ya que el modelo de lenguaje se ejecuta en la instancia emparejada de escritorio, el host Docker o Cloud — el teléfono solo necesita recursos suficientes para ejecutar la interfaz de la app y sincronizar datos, y los requisitos de hardware reales pasan a la máquina que aloja la instancia conectada de AnythingLLM.',
        ],
        items: [
          'Modo autónomo: prevé 2-3 GB o más de RAM libre para los modelos incluidos más pequeños; los modelos más grandes en el dispositivo necesitan más.',
          'Almacenamiento: de varios cientos de megabytes a unos pocos gigabytes de almacenamiento libre por cada modelo en el dispositivo descargado.',
          'Modo conectado: el hardware del teléfono no es el cuello de botella — revisa las recomendaciones de hardware para la máquina que ejecuta tu instancia de escritorio, Docker o Cloud.',
          'Red: el modo autónomo funciona por completo sin conexión tras descargar el modelo; el modo conectado necesita una red local compartida (o internet, en el caso de Cloud) para llegar a la instancia emparejada.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar AnythingLLM Mobile',
        items: [
          '**Usuarios de Android que quieran una app de chat con IA y RAG de documentos genuinamente gratuita y sin conexión.** El modo autónomo no necesita cuenta, servidor ni suscripción, lo que encaja con quienes quieren IA privada en el dispositivo con una configuración mínima.',
          '**Usuarios actuales de AnythingLLM Desktop, Docker o Cloud que quieran los mismos espacios de trabajo en el teléfono.** La sincronización del modo conectado es el atractivo claro para quien ya está invertido en el ecosistema de AnythingLLM en escritorio/servidor.',
          '**Usuarios cómodos eligiendo entre dos modos distintos.** Obtener todo el valor de la app implica entender cuándo usar el modo autónomo y cuándo el conectado, lo que encaja más con usuarios técnicamente curiosos que con quien busca un único comportamiento fijo.',
          '**Equipos que quieran una interfaz móvil sin autoalojarse.** Emparejar un teléfono Android con una instancia de pago de AnythingLLM Cloud da acceso móvil a espacios de trabajo compartidos sin operar ninguna infraestructura propia.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar AnythingLLM Mobile',
        items: [
          '**Usuarios de iPhone e iPad.** No existe versión para iOS al momento de esta reseña; usa [Private LLM](/power-local-llm/private-llm-review) o [PocketPal AI](/power-local-llm/pocketpal-ai-review) para dispositivos Apple.',
          '**Usuarios que quieran un único modo simple sin decisiones que tomar.** La separación entre autónomo y conectado es una decisión de diseño real que hay que entender; quien prefiera una experiencia única y guiada con una lista de modelos seleccionada y sin concepto de emparejamiento con servidor puede preferir [PocketPal AI](/power-local-llm/pocketpal-ai-review) o [Loci](/power-local-llm/loci-ai-review-offline-local-ai).',
          '**Usuarios que quieran herramientas de agentes personalizadas completas sin ningún servidor.** En el diseño actual de esta app, la configuración de herramientas de agentes personalizadas está ligada al modo conectado — quien quiera esa capacidad totalmente en el dispositivo hoy debería buscar otra alternativa.',
          '**Usuarios que necesiten soporte empresarial sin costo.** El soporte de la comunidad es gratuito, pero un SLA de soporte requiere una suscripción de pago de AnythingLLM Cloud Pro o Enterprise, no solo la app móvil.',
          '**Usuarios que quieran los modelos en el dispositivo más grandes posibles.** El modo autónomo está diseñado en torno a modelos pequeños y seleccionados acordes a la RAM de un teléfono; quien necesite modelos más grandes debería usar el modo conectado con una instancia de escritorio capaz, o directamente una configuración de escritorio/estación de trabajo.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobile frente a alternativas',
        itemHeadings: true,
        columns: ['App', 'En el dispositivo vs. cliente', 'Plataformas', 'Licencia / costo'],
        rows: [
          {
            'App': 'AnythingLLM Mobile',
            'En el dispositivo vs. cliente': 'Ambos — inferencia autónoma en el dispositivo, o cliente conectado a una instancia autoalojada',
            'Plataformas': 'Solo Android',
            'Licencia / costo': 'Gratuita, código abierto (MIT); servicio Cloud emparejado desde 50 $/mes',
          },
          {
            'App': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            'En el dispositivo vs. cliente': 'Ejecuta el LLM y el pipeline de RAG por sí mismo, en local o vía API',
            'Plataformas': 'Mac, Windows, Linux, Docker',
            'Licencia / costo': 'Gratuita, código abierto (MIT); hosting Cloud desde 50 $/mes',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'En el dispositivo vs. cliente': 'Solo en el dispositivo — sin modo servidor/cliente',
            'Plataformas': 'iPhone/iPad, Android',
            'Licencia / costo': 'Gratuita, código abierto (MIT)',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'En el dispositivo vs. cliente': 'Solo en el dispositivo — sin modo servidor/cliente',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Licencia / costo': 'De pago, compra única; código cerrado',
          },
          {
            'App': 'LLM Farm',
            'En el dispositivo vs. cliente': 'Solo en el dispositivo, vía llama.cpp',
            'Plataformas': 'iPhone/iPad',
            'Licencia / costo': 'Gratuita, código abierto; retirada de la App Store en algunos momentos de su historia — verifica la disponibilidad actual antes de asumir que se instala',
          },
          {
            'App': 'Layla',
            'En el dispositivo vs. cliente': 'Solo en el dispositivo, más proveedores de API remotos opcionales',
            'Plataformas': 'Android, iPhone/iPad',
            'Licencia / costo': 'Nivel gratuito más niveles de pago; código cerrado',
          },
          {
            'App': 'Maid',
            'En el dispositivo vs. cliente': 'Solo en el dispositivo, vía llama.cpp; también admite endpoints remotos compatibles con Ollama/OpenAI',
            'Plataformas': 'Android, iPhone/iPad',
            'Licencia / costo': 'Gratuita, código abierto (MIT)',
          },
          {
            'App': 'RikkaHub',
            'En el dispositivo vs. cliente': 'Ambos — inferencia local en el dispositivo vía un proveedor LiteRT, más cliente multiproveedor en la nube',
            'Plataformas': 'Android',
            'Licencia / costo': 'Gratuita, código abierto',
          },
        ],
        note: 'AnythingLLM Mobile y RikkaHub son las dos apps de esta tabla con un diseño dual real de dispositivo/cliente; todas las demás filas funcionan estrictamente en el dispositivo o estrictamente como cliente, que es la distinción clave a verificar antes de instalar basándose en una sola lista de funciones. Verifica las fichas actuales de App Store/Play Store directamente antes de instalar cualquier app de esta tabla, ya que la disponibilidad cambia.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿AnythingLLM Mobile ejecuta modelos de IA en el propio teléfono?',
            a: 'Sí, en el modo autónomo. La app descarga un modelo de lenguaje GGUF pequeño y seleccionado, y lo ejecuta en el dispositivo mediante Cactus Compute, un motor de inferencia basado en llama.cpp para React Native, junto con un modelo de embeddings local y una base de datos vectorial para RAG de documentos sin conexión. Por separado, la app también admite un modo conectado que se empareja con una instancia autoalojada de AnythingLLM Desktop o Cloud, donde la inferencia ocurre en esa instancia emparejada en lugar del teléfono.',
          },
          {
            q: '¿Está disponible AnythingLLM Mobile para iPhone?',
            a: 'No. Al momento de esta reseña, AnythingLLM Mobile no tiene ficha en la App Store y solo está disponible para Android mediante Google Play o como descarga directa de APK. El soporte para iOS se ha discutido en el rastreador de incidencias de GitHub del proyecto, pero no existe un anuncio oficial de Mintplex Labs que confirme una fecha de lanzamiento.',
          },
          {
            q: '¿Es gratuita AnythingLLM Mobile?',
            a: 'Sí, la app móvil en sí es gratuita y de código abierto con licencia MIT, sin suscripción para el uso autónomo en el dispositivo. Si usas el modo conectado para emparejarte con una instancia alojada de AnythingLLM Cloud en lugar de autoalojarte, ese servicio Cloud independiente tiene planes de pago desde 50 $/mes — pero la app móvil y las opciones de autoalojamiento en escritorio/Docker siguen siendo gratuitas.',
          },
          {
            q: '¿Quién crea AnythingLLM Mobile?',
            a: 'AnythingLLM Mobile la crea Mintplex Labs, una empresa fundada en 2022 por Timothy Carambat con sede en Irvine, California. Mintplex Labs pasó por la promoción de verano de 2022 de Y Combinator y también desarrolla la aplicación AnythingLLM para escritorio/servidor.',
          },
          {
            q: '¿Bajo qué licencia se publica AnythingLLM Mobile?',
            a: 'AnythingLLM Mobile se publica bajo la licencia MIT, una licencia de código abierto permisiva, y su código fuente es público en GitHub. El proyecto AnythingLLM para escritorio/servidor con el que puede conectarse también tiene licencia MIT.',
          },
          {
            q: '¿Cómo conecto AnythingLLM Mobile con mi instancia de escritorio?',
            a: 'Activa "network discovery" en tu instancia de AnythingLLM Desktop, Docker o Cloud en Settings > Admin > General, y luego abre Settings > Tools > AnythingLLM Mobile para mostrar un código QR de emparejamiento. Escanea ese código desde la app AnythingLLM Mobile para conectarte. Una vez emparejados, los espacios de trabajo, chats e hilos se sincronizan entre el teléfono y la instancia conectada.',
          },
          {
            q: '¿Necesita AnythingLLM Mobile conexión a internet?',
            a: 'No para el modo autónomo tras la descarga inicial del modelo — la inferencia y el RAG de documentos se ejecutan por completo en el dispositivo. El modo conectado necesita una red local compartida para llegar a una instancia autoalojada de escritorio o Docker, o una conexión a internet para llegar a una instancia alojada de AnythingLLM Cloud.',
          },
          {
            q: '¿Puede AnythingLLM Mobile chatear con mis documentos?',
            a: 'Sí, en ambos modos. En el modo autónomo, los documentos se dividen en fragmentos, se convierten en embeddings y se buscan usando un modelo de embeddings y una base de datos vectorial en el dispositivo, por completo sin conexión. En el modo conectado, la instancia emparejada de escritorio, Docker o Cloud gestiona el RAG de documentos con su propia base de datos vectorial y modelo de embeddings configurados, igual que la app de escritorio.',
          },
          {
            q: '¿Cuál es la diferencia entre AnythingLLM Mobile y la app de escritorio de AnythingLLM?',
            a: 'AnythingLLM Mobile es una app de Android independiente creada para teléfonos, con su propio modo de inferencia autónomo en el dispositivo además de la capacidad de conectarse a una instancia de escritorio. La aplicación AnythingLLM para escritorio/servidor, analizada en la comparativa de PromptQuorum entre AnythingLLM, PrivateGPT y Open WebUI, se ejecuta en Mac, Windows, Linux o Docker y admite una gama más amplia de proveedores de LLM, bases de datos vectoriales y configuraciones de agentes que el modo autónomo de la app móvil.',
          },
          {
            q: '¿Cómo se compara AnythingLLM Mobile con PocketPal AI o Private LLM?',
            a: 'PocketPal AI y Private LLM son apps de chat móvil exclusivamente en el dispositivo, sin modo de conexión a servidor; AnythingLLM Mobile es la única app de esta comparación con un diseño dual real: inferencia autónoma en el dispositivo más un modo conectado opcional a una instancia autoalojada o en la nube de AnythingLLM. Elige AnythingLLM Mobile si quieres esa flexibilidad o ya usas AnythingLLM en escritorio; elige PocketPal AI (gratis, iPhone/Android) o Private LLM (de pago, solo Apple) si buscas específicamente una app para iPhone, ya que AnythingLLM Mobile solo está disponible para Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'El diseño dual de AnythingLLM Mobile —un modo autónomo genuino en el dispositivo junto a un modo conectado opcional— es poco habitual en esta categoría, donde la mayoría de las apps móviles de IA se comprometen por completo con una arquitectura u otra. Esa flexibilidad es también el mayor obstáculo para un usuario nuevo: entender qué modo está activo, y qué puede y no puede hacer cada uno, requiere más atención inicial que una app de propósito único como PocketPal AI o Private LLM. La limitación más importante ahora mismo es de plataforma: AnythingLLM Mobile es solo para Android, sin publicación en la App Store ni fecha confirmada para iOS. Elige AnythingLLM Mobile si usas Android y quieres IA gratuita sin conexión con cero configuración, o si ya usas AnythingLLM Desktop, Docker o Cloud y quieres los mismos espacios de trabajo en el teléfono. Elige Private LLM o PocketPal AI en su lugar si necesitas una app para iPhone, y usa la aplicación de escritorio de AnythingLLM directamente si no necesitas ningún cliente móvil.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[AnythingLLM Mobile en GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) — código fuente, licencia (MIT) y el uso de Cactus Compute mencionado en esta reseña.',
          '[Documentación oficial de AnythingLLM Mobile](https://docs.anythingllm.com/mobile/overview) — modo autónomo frente a conectado, pasos de emparejamiento y configuración de la detección de red.',
          '[AnythingLLM Mobile en Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) — disponibilidad en Android y descripción de la app.',
          '[Página oficial de AnythingLLM Mobile](https://anythingllm.com/mobile) — enlaces de descarga y resumen de funciones.',
          '[Precios de AnythingLLM Cloud](https://anythingllm.com/pricing) — planes Basic, Pro y Enterprise mencionados en esta reseña.',
          '[Mintplex Labs en Y Combinator](https://www.ycombinator.com/companies/mintplex-labs) — fundación de la empresa, promoción y contexto.',
          '[Repositorio de GitHub de la aplicación AnythingLLM para escritorio/servidor](https://github.com/Mintplex-Labs/anything-llm) — el proyecto complementario con el que puede conectarse esta app móvil.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[AnythingLLM vs. PrivateGPT vs. Open WebUI: ¿qué herramienta de RAG gana?](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — la comparativa de la versión de escritorio/servidor de AnythingLLM con la que puede conectarse esta app móvil.',
          '[Reseña de PocketPal AI (2026)](/power-local-llm/pocketpal-ai-review) — una alternativa gratuita, de código abierto y exclusivamente en el dispositivo para iPhone y Android.',
          '[Reseña de Private LLM](/power-local-llm/private-llm-review) — una alternativa de pago, solo para Apple y exclusivamente en el dispositivo, con un amplio catálogo de modelos integrado.',
          '[Las mejores apps de LLM local para Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — el repaso más amplio de apps para Android.',
          '[Reseña de Loci: IA sin conexión para iPhone, Android, iPad, Mac y Windows](/power-local-llm/loci-ai-review-offline-local-ai) — una alternativa seleccionada en cinco plataformas para quien prefiere un único modo guiado.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AnythingLLM Mobile: Reseña (2026) — Chat + RAG en el dispositivo',
      description:
        'Reseña de AnythingLLM Mobile: app gratuita con licencia MIT que ejecuta modelos en el dispositivo Y se sincroniza con una instancia autoalojada de AnythingLLM. Estado de iOS, precios, RAG.',
      url: 'https://promptquorum.com/es/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'es',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuarios de Android preocupados por la privacidad y usuarios existentes de AnythingLLM en escritorio o autoalojado' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: 'Generación aumentada por recuperación' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'LLM local' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AnythingLLM Mobile: Reseña (2026)', item: 'https://promptquorum.com/es/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-fr.webp',
    title: 'AnythingLLM Mobile : test (2026) — chat + RAG sur l\'appareil',
    seoTitle: 'AnythingLLM Mobile 2026 : local ou client ?',
    intro:
      'AnythingLLM Mobile est une application Android gratuite, sous licence MIT, développée par [Mintplex Labs](https://mintplex.com), qui exécute un petit modèle de langage et une base de données vectorielle locale directement sur le téléphone pour discuter avec des documents hors connexion. Elle peut aussi se coupler avec une instance auto-hébergée d\'[AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) ou d\'AnythingLLM Cloud sur le réseau local pour profiter de toutes les fonctionnalités de la version de bureau. Ce test explique précisément en quoi le mode autonome sur l\'appareil diffère du mode connecté, la disponibilité réelle par plateforme (Android est disponible, iOS pas encore), le prix de l\'application face au service AnythingLLM Cloud facturé séparément, et à qui elle convient — ou non.',
    metaDescription:
      'Test d\'AnythingLLM Mobile : appli Android gratuite sous licence MIT qui exécute des modèles sur l\'appareil ET se synchronise avec une instance AnythingLLM auto-hébergée. Statut iOS, prix, RAG.',
    twitterDescription:
      'Test d\'AnythingLLM Mobile 2026 : exécute un modèle sur l\'appareil pour un chat hors connexion, mais se couple aussi à une instance AnythingLLM auto-hébergée. Android uniquement, pas encore d\'appli iOS.',
    audience:
      'Utilisateurs Android soucieux de leur confidentialité et utilisateurs existants d\'AnythingLLM Desktop ou auto-hébergé cherchant un complément mobile.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AnythingLLM Mobile test',
    targetKeywords: [
      'anythingllm mobile test',
      'anythingllm mobile app',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile on-device',
      'anythingllm mobile vs desktop',
      'anythingllm mobile prix',
      'discuter avec des documents sur mobile',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**AnythingLLM Mobile est une application Android gratuite sous licence MIT qui fonctionne de deux façons : en mode autonome, avec un petit modèle de langage sélectionné et une base de données vectorielle locale exécutés entièrement sur l\'appareil pour le chat documentaire et le RAG hors connexion, ou en mode connecté, en synchronisant discussions, espaces de travail et documents avec une instance auto-hébergée d\'[AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) ou d\'AnythingLLM Cloud via un appairage par code QR sur le réseau local.** Elle est développée par [Mintplex Labs](https://mintplex.com), l\'entreprise à l\'origine du projet open source AnythingLLM pour ordinateur et serveur, et publiée sur [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) sous licence MIT. Au moment de ce test, l\'application n\'est disponible que sur [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) pour Android ; aucune version App Store pour iOS n\'existe encore.',
    quickAnswerTop: {
      fr: {
        question: 'AnythingLLM Mobile exécute-t-il les modèles sur le téléphone, ou n\'est-ce qu\'un client pour un serveur ?',
        answer:
          'Les deux à la fois — c\'est un choix de conception de l\'application, pas une limitation. Par défaut, AnythingLLM Mobile télécharge un petit modèle GGUF et l\'exécute sur l\'appareil via [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile) (un moteur d\'inférence basé sur llama.cpp pour React Native), associé à un modèle d\'embedding local et une base de données vectorielle sur l\'appareil, si bien que le chat documentaire et le RAG fonctionnent entièrement hors connexion, sans compte ni serveur. Par ailleurs, l\'application peut se coupler via un code QR affiché dans le panneau Settings > Tools d\'une instance auto-hébergée d\'AnythingLLM Desktop ou AnythingLLM Cloud, ce qui débloque des outils d\'agents personnalisés, des espaces de travail plus vastes et une synchronisation entre appareils que le mode autonome n\'offre pas.',
        bullets: [
          'Le mode autonome exécute un petit modèle intégré et une base de données vectorielle locale entièrement sur l\'appareil — sans serveur, sans compte, fonctionne hors connexion.',
          'Le mode connecté se couple (par code QR) à une instance auto-hébergée d\'AnythingLLM Desktop ou Cloud pour les outils d\'agents personnalisés et la synchronisation entre appareils.',
          'Android uniquement, via [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) ou APK direct ; aucune version App Store iOS au moment de ce test.',
          'Gratuite et open source sous licence MIT ; le service séparé AnythingLLM Cloud, pour qui veut le mode connecté sans auto-hébergement, démarre à 50 $/mois.',
          'Développée par [Mintplex Labs](https://mintplex.com), une entreprise issue de Y Combinator (été 2022) fondée par Timothy Carambat, également à l\'origine du projet AnythingLLM pour ordinateur/serveur.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'AnythingLLM Mobile ?', anchor: 'what-is-anythingllm-mobile' },
      { label: 'Qui développe AnythingLLM Mobile ?', anchor: 'history-and-developer' },
      { label: 'Fonctionne-t-il sur l\'appareil ou se connecte-t-il à un serveur ?', anchor: 'on-device-vs-connected' },
      { label: 'Bien démarrer avec AnythingLLM Mobile', anchor: 'getting-started' },
      { label: 'Comment fonctionnent le chat documentaire et le RAG sur mobile ?', anchor: 'models-and-rag' },
      { label: 'AnythingLLM Mobile est-il disponible sur iPhone ?', anchor: 'platform-availability' },
      { label: 'Combien coûte AnythingLLM Mobile ?', anchor: 'pricing' },
      { label: 'Quelles fonctionnalités propose AnythingLLM Mobile ?', anchor: 'key-features' },
      { label: 'De quel matériel avez-vous besoin ?', anchor: 'hardware-requirements' },
      { label: 'À qui s\'adresse AnythingLLM Mobile', anchor: 'who-should-use' },
      { label: 'À qui AnythingLLM Mobile ne convient pas', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobile face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'À lire aussi', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AnythingLLM Mobile est une application Android gratuite sous licence MIT de Mintplex Labs qui exécute un petit modèle de langage sur l\'appareil pour le chat documentaire hors connexion, et qui peut aussi se connecter à une instance auto-hébergée d\'AnythingLLM Desktop ou Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Ce n\'est ni une simple télécommande pour un serveur, ni un remplacement totalement autonome de l\'application de bureau — c\'est les deux à la fois : une IA hors connexion indépendante sur votre téléphone et un écran mobile optionnel pour une instance de bureau ou cloud déjà en cours d\'exécution. C\'est à vous de choisir le mode adapté à chaque tâche.',
          },
        ],
        items: [
          'Gratuite et open source (licence MIT) ; le code source de l\'application mobile est public sur [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile).',
          'Double mode : inférence autonome sur l\'appareil (moteur Cactus Compute, modèle GGUF intégré, base de données vectorielle locale) ou mode connecté couplé à une instance de bureau/Cloud auto-hébergée par code QR.',
          'Android uniquement au moment de ce test — disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) et en APK direct ; pas de version App Store iOS.',
          'Développée par [Mintplex Labs](https://mintplex.com), une entreprise issue de Y Combinator, également responsable du [projet AnythingLLM pour ordinateur/serveur](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag).',
          'L\'application mobile elle-même n\'a pas d\'abonnement ; AnythingLLM Cloud, le service serveur hébergé séparément avec lequel certains utilisateurs se couplent, démarre à 50 $/mois.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur le [dépôt GitHub public d\'AnythingLLM Mobile](https://github.com/Mintplex-Labs/anythingllm-mobile), la [documentation mobile officielle](https://docs.anythingllm.com/mobile/overview), la [fiche Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) et [anythingllm.com](https://anythingllm.com/mobile), vérifiés en septembre 2026. PromptQuorum n\'a pas réalisé de benchmark indépendant d\'AnythingLLM Mobile pour ce test — les chiffres de performance ci-dessous sont des repères matériels généraux pour les LLM locaux, pas des mesures spécifiques à cette application.',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: 'Qu\'est-ce qu\'AnythingLLM Mobile ?',
        content: [
          '**AnythingLLM Mobile est une application Android, publiée sous [licence MIT](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE), qui permet à un téléphone de discuter avec un modèle de langage et avec des documents importés sans dépendre d\'une API cloud.** Il s\'agit d\'une base de code distincte du [projet AnythingLLM pour ordinateur/serveur](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag), conçue spécifiquement pour React Native, bien que les deux projets viennent de la même entreprise et partagent le nom AnythingLLM ainsi que le concept d\'espace de travail.',
          'L\'application se comprend mieux comme deux produits en un : un assistant IA autonome sur l\'appareil qui fonctionne sans configuration ni compte, et une interface mobile pour une instance AnythingLLM auto-hébergée, destinée aux utilisateurs qui font déjà tourner l\'application de bureau, un conteneur Docker ou un abonnement AnythingLLM Cloud et veulent retrouver les mêmes espaces de travail, historiques de discussion et documents sur leur téléphone.',
        ],
        note: 'Le RAG (génération augmentée par récupération) signifie que l\'application recherche dans vos propres documents les passages pertinents et les transmet au modèle de langage comme contexte, afin que les réponses s\'appuient sur vos fichiers plutôt que sur les seules données d\'entraînement du modèle.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Qui développe AnythingLLM Mobile ?',
        content: [
          '**AnythingLLM Mobile est développée par [Mintplex Labs](https://mintplex.com), l\'entreprise fondée par Timothy Carambat qui a également créé les versions originales d\'AnythingLLM pour ordinateur et serveur.** Mintplex Labs a été fondée en 2022, est basée à Irvine, en Californie, et a intégré la promotion été 2022 de Y Combinator, avec un financement pre-seed de Y Combinator, Goodwater Capital, UpHonest Capital et Orange DAO.',
          'Le projet phare AnythingLLM pour ordinateur et serveur — une "application IA tout-en-un" open source et auto-hébergeable pour discuter avec des documents et créer des agents personnalisés — existe depuis plusieurs années avant l\'application mobile et dispose d\'une large communauté GitHub, détaillée dans la [comparaison AnythingLLM vs PrivateGPT vs Open WebUI de PromptQuorum](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag). AnythingLLM Mobile est une base de code React Native plus récente et distincte, qui transpose les mêmes concepts d\'espace de travail et de RAG sur téléphone.',
        ],
        items: [
          'Entreprise : [Mintplex Labs](https://mintplex.com), fondée en 2022 à Irvine, en Californie, par Timothy Carambat.',
          'Promotion été 2022 de Y Combinator ; parmi les investisseurs pre-seed figurent Y Combinator, Goodwater Capital, UpHonest Capital et Orange DAO.',
          'Développe également : l\'[application AnythingLLM pour ordinateur/serveur](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) et VectorAdmin, un outil open source de gestion de bases de données vectorielles.',
          'Code source d\'AnythingLLM Mobile : [github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile), licence MIT.',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: 'AnythingLLM Mobile fonctionne-t-il sur l\'appareil ou se connecte-t-il à un serveur ?',
        content: [
          '**AnythingLLM Mobile prend en charge à la fois un mode autonome sur l\'appareil et un mode connecté qui se couple à une instance AnythingLLM hébergée séparément — ce n\'est donc pas exclusivement l\'un ou l\'autre, et le mode actif détermine ce que l\'application peut faire.** Confondre les deux modes n\'est pas anodin : qui attend une IA entièrement hors connexion sans configuration l\'obtient en mode autonome, tandis que qui attend l\'ensemble des fonctionnalités de bureau (outils d\'agents personnalisés, espaces de travail documentaires plus vastes) a besoin du mode connecté et d\'une instance de bureau, Docker ou Cloud en fonctionnement avec laquelle se coupler.',
          'En mode autonome, selon la [documentation mobile de Mintplex Labs](https://docs.anythingllm.com/mobile/overview) et le [dépôt GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) de l\'application, le téléphone télécharge un petit modèle de langage GGUF sélectionné et l\'exécute localement via [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile), un moteur d\'inférence basé sur llama.cpp conçu pour React Native. Un petit modèle d\'embedding et une base de données vectorielle locale s\'exécutent également sur l\'appareil, permettant de découper, vectoriser et rechercher les documents importés pour le RAG entièrement hors connexion. Aucun compte, aucune clé API ni connexion internet ne sont nécessaires pour discuter une fois le modèle téléchargé.',
          'En mode connecté, le téléphone n\'exécute pas lui-même l\'inférence pour cet espace de travail — il se couple à une application AnythingLLM Desktop, une instance Docker auto-hébergée ou un abonnement AnythingLLM Cloud sur le réseau local (ou internet, pour Cloud) en scannant un code QR affiché dans Settings > Tools > AnythingLLM Mobile de cette instance. L\'instance de bureau doit avoir activé « Enable network discovery » dans Settings > Admin > General pour que l\'appairage en réseau local fonctionne. Une fois couplés, discussions, espaces de travail, fils et outils d\'agents personnalisés se synchronisent entre le téléphone et l\'instance connectée, et le travail du LLM, de l\'embedding et du RAG s\'effectue là où tourne cette instance, pas sur le téléphone.',
        ],
        decisionBlock: {
          title: 'Quel mode choisir ?',
          localIf: [
            'Vous voulez un chat IA et un RAG documentaire qui fonctionnent hors connexion, sans compte, sans serveur et sans configuration.',
            'Vous testez si l\'IA sur l\'appareil est assez rapide sur votre téléphone Android avant de vous engager davantage.',
            'Vous ne faites pas tourner — et ne voulez pas faire tourner — d\'instance de bureau ou serveur AnythingLLM.',
          ],
          cloudIf: [
            'Vous utilisez déjà AnythingLLM Desktop, Docker ou AnythingLLM Cloud et voulez retrouver les mêmes espaces de travail et historiques de discussion sur votre téléphone.',
            'Vous avez besoin d\'outils d\'agents personnalisés, de bibliothèques documentaires plus vastes, ou d\'un modèle plus capable que ce qu\'un téléphone peut raisonnablement exécuter.',
            'Vous voulez que plusieurs appareils (téléphone et ordinateur) restent synchronisés sur un espace de travail partagé.',
          ],
          quick: [
            'En cas de doute, commencez par le mode autonome — il ne nécessite rien d\'autre en fonctionnement.',
            'Ne passez au mode connecté que lorsque vous disposez déjà d\'une instance de bureau, Docker ou Cloud avec laquelle vous coupler.',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Bien démarrer avec AnythingLLM Mobile',
        content: [
          '**La configuration diffère selon le mode souhaité, d\'après la [documentation mobile](https://docs.anythingllm.com/mobile/overview) de l\'application.** Le mode autonome ne nécessite rien de plus que l\'installation de l\'application ; le mode connecté nécessite une instance AnythingLLM Desktop, Docker ou Cloud déjà existante avec laquelle se coupler.',
        ],
        numberedItems: [
          {
            title: 'Installez l\'application',
            whyItMatters: 'Téléchargez AnythingLLM Mobile depuis [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) ou en APK direct depuis [anythingllm.com/mobile](https://anythingllm.com/mobile). Aucun compte ni inscription par e-mail n\'est requis pour ouvrir l\'application.',
          },
          {
            title: 'Choisissez le mode autonome pour un usage hors connexion',
            whyItMatters: 'Au premier lancement, l\'application propose des modèles sélectionnés pour l\'appareil, prêts à télécharger. Choisissez-en un adapté à la RAM de votre appareil (voir la section matériel ci-dessous) et commencez à discuter — aucune autre configuration n\'est nécessaire pour le chat de base et l\'import de documents.',
          },
          {
            title: 'Ou couplez-vous à une instance auto-hébergée pour le mode connecté',
            whyItMatters: 'Si vous utilisez déjà AnythingLLM Desktop, Docker ou Cloud, activez « network discovery » dans Settings > Admin > General de cette instance, puis ouvrez Settings > Tools > AnythingLLM Mobile dans l\'interface de bureau pour afficher un code QR d\'appairage.',
          },
          {
            title: 'Scannez le code QR depuis l\'application mobile',
            whyItMatters: 'Dans AnythingLLM Mobile, utilisez l\'option d\'appairage/scan pour vous connecter à l\'instance de bureau ou Cloud. Une fois couplés, les espaces de travail, discussions et fils de cette instance deviennent disponibles dans l\'application mobile, et les mises à jour se synchronisent entre les appareils.',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: 'Comment fonctionnent le chat documentaire et le RAG sur mobile ?',
        itemHeadings: true,
        columns: ['Mode', 'Où s\'exécute l\'inférence', 'RAG / traitement des documents'],
        rows: [
          {
            'Mode': 'Autonome (sur l\'appareil)',
            'Où s\'exécute l\'inférence': 'Sur le téléphone, via Cactus Compute (moteur basé sur llama.cpp pour React Native)',
            'RAG / traitement des documents': 'Modèle d\'embedding local + base de données vectorielle sur l\'appareil ; les documents sont découpés, vectorisés et recherchés entièrement hors connexion',
          },
          {
            'Mode': 'Connecté (instance couplée)',
            'Où s\'exécute l\'inférence': 'Sur l\'instance couplée AnythingLLM Desktop, l\'hôte Docker ou Cloud',
            'RAG / traitement des documents': 'Utilise la base de données vectorielle et le modèle d\'embedding configurés sur cette instance — le même pipeline RAG que l\'application de bureau, synchronisé sur mobile',
          },
        ],
        note: 'Un espace de travail créé dans un mode ne devient pas automatiquement celui de l\'autre mode — un document importé dans un espace de travail autonome sur l\'appareil reste local à ce téléphone, sauf si vous passez à un espace de travail connecté couplé à une instance de bureau/Cloud.',
      },
      platform: {
        id: 'platform-availability',
        title: 'AnythingLLM Mobile est-il disponible sur iPhone ?',
        itemHeadings: true,
        columns: ['Plateforme', 'Disponibilité', 'Remarques'],
        rows: [
          {
            'Plateforme': 'Android',
            'Disponibilité': 'Disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) et en téléchargement direct de l\'APK',
            'Remarques': 'Il s\'agit de la seule plateforme mobile disponible au moment de ce test.',
          },
          {
            'Plateforme': 'iPhone / iPad (iOS)',
            'Disponibilité': 'Non publiée — aucune fiche App Store trouvée pour AnythingLLM Mobile au moment de ce test',
            'Remarques': 'Le support iOS a été discuté publiquement sur le [suivi des demandes GitHub](https://github.com/Mintplex-Labs/anything-llm/issues/5428) du projet, mais PromptQuorum n\'a trouvé aucune publication officielle sur l\'App Store ni annonce de Mintplex Labs confirmant une date de sortie. Ne présumez pas de la disponibilité iOS sur la base de la couverture d\'autres sites — vérifiez directement sur l\'[App Store](https://apps.apple.com/) avant de l\'espérer.',
          },
          {
            'Plateforme': 'Mac / Windows / Linux',
            'Disponibilité': 'Non applicable — ces plateformes utilisent l\'[application AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) ou le conteneur Docker séparé, pas l\'application mobile',
            'Remarques': 'Les utilisateurs d\'iPhone qui veulent utiliser AnythingLLM dès aujourd\'hui devraient utiliser l\'application de bureau sur un Mac, ou se tourner vers une autre application mobile comme [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou [Private LLM](/power-local-llm/private-llm-review).',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Combien coûte AnythingLLM Mobile ?',
        content: [
          '**AnythingLLM Mobile en elle-même est gratuite à télécharger et à utiliser en mode autonome sur l\'appareil, sans abonnement ni achat intégré, d\'après la documentation publique et la fiche Play Store de l\'application.** Le code source de l\'application mobile est [open source sous licence MIT](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE) et public sur GitHub.',
          'Le coût n\'intervient qu\'en fonction de ce avec quoi le mode connecté se couple. Faire tourner sa propre application AnythingLLM Desktop ou un conteneur Docker pour s\'y coupler est gratuit et open source, comme l\'application mobile. Pour qui préfère ne pas s\'auto-héberger, Mintplex Labs propose [AnythingLLM Cloud](https://anythingllm.com/pricing) comme service hébergé séparément : un forfait Basic à 50 $/mois avec instance privée et sous-domaine personnalisé, un forfait Pro à 99 $/mois ajoutant un SLA de support de 72 heures destiné aux grandes équipes, et un forfait Enterprise à prix personnalisé incluant déploiement sur site, SSO et RBAC. Les deux forfaits Cloud payants exigent que l\'utilisateur fournisse sa propre clé API de LLM ; le coût du modèle n\'est pas inclus.',
        ],
        items: [
          '**Application mobile (mode autonome) :** Gratuite, open source sous licence MIT, aucun abonnement constaté.',
          '**Application mobile (mode connecté) :** La fonction d\'appairage elle-même est gratuite ; le coût dépend entièrement de ce avec quoi elle se couple.',
          '**Instance de bureau/Docker auto-hébergée à coupler :** Gratuite et open source, comme l\'application mobile.',
          '**AnythingLLM Cloud Basic :** 50 $/mois — instance privée, sous-domaine personnalisé, nécessite une clé API de LLM personnelle.',
          '**AnythingLLM Cloud Pro :** 99 $/mois — ajoute un SLA de support de 72 heures, destiné aux grandes équipes.',
          '**AnythingLLM Cloud Enterprise :** Tarification personnalisée — déploiement sur site, SSO, RBAC, intégrations sur mesure.',
        ],
        note: 'Les tarifs d\'AnythingLLM Cloud sont fixés par Mintplex Labs en dollars américains et peuvent évoluer ; vérifiez les forfaits et conditions actuels directement sur [anythingllm.com/pricing](https://anythingllm.com/pricing) avant de vous abonner.',
      },
      features: {
        id: 'key-features',
        title: 'Quelles fonctionnalités propose AnythingLLM Mobile ?',
        content: [
          '**La disponibilité des fonctionnalités dépend du mode actif — certaines capacités n\'existent qu\'en mode connecté, d\'après la documentation mobile du projet lui-même.** Cela inclut :',
        ],
        items: [
          '**Chat sur l\'appareil.** Discutez avec un modèle téléchargé localement, sans connexion internet nécessaire après le téléchargement initial.',
          '**RAG documentaire hors connexion.** Importez des documents dans un espace de travail autonome et obtenez des réponses avec citations, grâce au modèle d\'embedding et à la base de données vectorielle de l\'appareil.',
          '**Synchronisation des espaces de travail (mode connecté uniquement).** Les discussions, fils et espaces de travail créés sur une instance de bureau, Docker ou Cloud couplée se synchronisent avec le téléphone et inversement.',
          '**Outils d\'agents personnalisés (mode connecté uniquement).** Les capacités d\'appel d\'outils configurées sur l\'instance de bureau se retrouvent sur mobile une fois couplées ; le mode autonome sur l\'appareil ne prend pas en charge la configuration d\'outils personnalisés.',
          '**Appairage par code QR.** La connexion à une instance auto-hébergée utilise un code QR affiché dans les paramètres de cette instance, plutôt que la saisie manuelle d\'adresses serveur et d\'identifiants.',
          '**Aucun compte requis pour l\'usage autonome.** Discuter et utiliser le RAG documentaire en mode autonome ne nécessite pas de créer un compte chez Mintplex Labs.',
        ],
        note: 'La disponibilité des fonctionnalités peut varier d\'une version à l\'autre de l\'application, le projet publiant des mises à jour fréquentes. Consultez le journal des modifications intégré à l\'application ou la [page des versions GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile/releases) pour savoir ce qui est actif dans votre version installée.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'De quel matériel avez-vous besoin pour AnythingLLM Mobile ?',
        content: [
          '**Le mode autonome sur l\'appareil dépend de la RAM et du CPU/NPU du téléphone, comme toute autre application de chat mobile basée sur GGUF — Mintplex Labs n\'a pas publié d\'exigences RAM précises par modèle pour les modèles autonomes sélectionnés, donc les repères généraux de dimensionnement des LLM locaux s\'appliquent.** En règle générale, pour des modèles GGUF quantifiés sur téléphone, un petit modèle de 1 à 3 milliards de paramètres nécessite environ 2 à 3 Go de RAM libre, et les modèles au-delà de cette taille en nécessitent proportionnellement plus.',
          'Le mode connecté n\'impose pratiquement aucune exigence matérielle au téléphone pour l\'inférence, puisque le modèle de langage s\'exécute sur l\'instance de bureau couplée, l\'hôte Docker ou Cloud — le téléphone n\'a besoin que de ressources suffisantes pour faire tourner l\'interface de l\'application et synchroniser les données, les véritables exigences matérielles se reportant sur la machine qui héberge l\'instance AnythingLLM connectée.',
        ],
        items: [
          'Mode autonome : prévoyez au moins 2 à 3 Go de RAM libre pour les plus petits modèles intégrés ; les modèles sur l\'appareil plus grands en nécessitent davantage.',
          'Stockage : de quelques centaines de mégaoctets à quelques gigaoctets d\'espace libre par modèle sur l\'appareil téléchargé.',
          'Mode connecté : le matériel du téléphone n\'est pas le goulot d\'étranglement — référez-vous plutôt aux recommandations matérielles de la machine qui fait tourner votre instance de bureau, Docker ou Cloud.',
          'Réseau : le mode autonome fonctionne entièrement hors connexion après le téléchargement du modèle ; le mode connecté nécessite un réseau local partagé (ou une connexion internet, pour Cloud) pour joindre l\'instance couplée.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse AnythingLLM Mobile',
        items: [
          '**Les utilisateurs Android qui veulent une application de chat IA et de RAG documentaire réellement gratuite et hors connexion.** Le mode autonome ne nécessite ni compte, ni serveur, ni abonnement, ce qui convient à qui veut une IA privée sur l\'appareil avec une configuration minimale.',
          '**Les utilisateurs déjà équipés d\'AnythingLLM Desktop, Docker ou Cloud qui veulent retrouver les mêmes espaces de travail sur leur téléphone.** La synchronisation du mode connecté est l\'atout évident pour qui investit déjà dans l\'écosystème AnythingLLM pour ordinateur/serveur.',
          '**Les utilisateurs à l\'aise pour choisir entre deux modes distincts.** Tirer pleinement parti de l\'application suppose de comprendre quand utiliser le mode autonome et quand utiliser le mode connecté, ce qui convient davantage aux utilisateurs techniquement curieux qu\'à qui recherche un comportement unique et fixe.',
          '**Les équipes qui veulent une interface mobile sans auto-hébergement.** Coupler un téléphone Android à une instance AnythingLLM Cloud payante donne un accès mobile à des espaces de travail partagés sans avoir à gérer une infrastructure soi-même.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui AnythingLLM Mobile ne convient pas',
        items: [
          '**Les utilisateurs d\'iPhone et d\'iPad.** Il n\'existe aucune version iOS au moment de ce test ; utilisez [Private LLM](/power-local-llm/private-llm-review) ou [PocketPal AI](/power-local-llm/pocketpal-ai-review) pour les appareils Apple.',
          '**Les utilisateurs qui veulent un mode unique et simple sans décision à prendre.** La séparation entre autonome et connecté est un véritable choix de conception à comprendre ; qui préfère une expérience unique et guidée avec une liste de modèles sélectionnée et sans notion de couplage serveur pourra préférer [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou [Loci](/power-local-llm/loci-ai-review-offline-local-ai).',
          '**Les utilisateurs qui veulent des outils d\'agents personnalisés complets sans aucun serveur.** Dans la conception actuelle de cette application, la configuration d\'outils d\'agents personnalisés est liée au mode connecté — qui veut cette capacité entièrement sur l\'appareil dès aujourd\'hui devrait se tourner ailleurs.',
          '**Les utilisateurs ayant besoin d\'un support entreprise sans coût.** Le support communautaire est gratuit, mais un SLA de support nécessite un abonnement payant AnythingLLM Cloud Pro ou Enterprise, pas seulement l\'application mobile.',
          '**Les utilisateurs qui veulent les plus grands modèles possibles sur l\'appareil.** Le mode autonome est conçu autour de petits modèles sélectionnés adaptés à la RAM d\'un téléphone ; qui a besoin de modèles plus grands devrait utiliser le mode connecté avec une instance de bureau capable, ou directement une configuration de bureau/station de travail.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobile face aux alternatives',
        itemHeadings: true,
        columns: ['Application', 'Sur l\'appareil vs. client', 'Plateformes', 'Licence / coût'],
        rows: [
          {
            'Application': 'AnythingLLM Mobile',
            'Sur l\'appareil vs. client': 'Les deux — inférence autonome sur l\'appareil, ou client connecté à une instance auto-hébergée',
            'Plateformes': 'Android uniquement',
            'Licence / coût': 'Gratuite, open source (MIT) ; service Cloud couplé à partir de 50 $/mois',
          },
          {
            'Application': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            'Sur l\'appareil vs. client': 'Exécute lui-même le LLM et le pipeline RAG, en local ou via API',
            'Plateformes': 'Mac, Windows, Linux, Docker',
            'Licence / coût': 'Gratuite, open source (MIT) ; hébergement Cloud à partir de 50 $/mois',
          },
          {
            'Application': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Sur l\'appareil vs. client': 'Sur l\'appareil uniquement — pas de mode serveur/client',
            'Plateformes': 'iPhone/iPad, Android',
            'Licence / coût': 'Gratuite, open source (MIT)',
          },
          {
            'Application': '[Private LLM](/power-local-llm/private-llm-review)',
            'Sur l\'appareil vs. client': 'Sur l\'appareil uniquement — pas de mode serveur/client',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Licence / coût': 'Payante, achat unique ; code fermé',
          },
          {
            'Application': 'LLM Farm',
            'Sur l\'appareil vs. client': 'Sur l\'appareil uniquement, via llama.cpp',
            'Plateformes': 'iPhone/iPad',
            'Licence / coût': 'Gratuite, open source ; retirée de l\'App Store à certains moments de son histoire — vérifiez la disponibilité actuelle avant de supposer qu\'elle s\'installe',
          },
          {
            'Application': 'Layla',
            'Sur l\'appareil vs. client': 'Sur l\'appareil uniquement, plus fournisseurs d\'API distants optionnels',
            'Plateformes': 'Android, iPhone/iPad',
            'Licence / coût': 'Palier gratuit plus paliers payants ; code fermé',
          },
          {
            'Application': 'Maid',
            'Sur l\'appareil vs. client': 'Sur l\'appareil uniquement, via llama.cpp ; prend aussi en charge des points de terminaison distants compatibles Ollama/OpenAI',
            'Plateformes': 'Android, iPhone/iPad',
            'Licence / coût': 'Gratuite, open source (MIT)',
          },
          {
            'Application': 'RikkaHub',
            'Sur l\'appareil vs. client': 'Les deux — inférence locale sur l\'appareil via un fournisseur LiteRT, plus client cloud multi-fournisseurs',
            'Plateformes': 'Android',
            'Licence / coût': 'Gratuite, open source',
          },
        ],
        note: 'AnythingLLM Mobile et RikkaHub sont les deux applications de ce tableau ayant une véritable conception double appareil/client ; toutes les autres lignes fonctionnent strictement sur l\'appareil ou strictement en tant que client, ce qui est la distinction clé à vérifier avant d\'installer une application sur la seule base d\'une liste de fonctionnalités. Vérifiez directement les fiches App Store/Play Store actuelles avant d\'installer une application de ce tableau, la disponibilité pouvant changer.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'AnythingLLM Mobile exécute-t-il des modèles d\'IA directement sur le téléphone ?',
            a: 'Oui, en mode autonome. L\'application télécharge un petit modèle de langage GGUF sélectionné et l\'exécute sur l\'appareil via Cactus Compute, un moteur d\'inférence basé sur llama.cpp pour React Native, avec un modèle d\'embedding local et une base de données vectorielle pour le RAG documentaire hors connexion. Par ailleurs, l\'application prend aussi en charge un mode connecté qui se couple à une instance auto-hébergée d\'AnythingLLM Desktop ou Cloud, où l\'inférence s\'exécute sur cette instance couplée plutôt que sur le téléphone.',
          },
          {
            q: 'AnythingLLM Mobile est-il disponible sur iPhone ?',
            a: 'Non. Au moment de ce test, AnythingLLM Mobile n\'a aucune fiche App Store et n\'est disponible que sur Android via Google Play ou en téléchargement direct de l\'APK. Le support iOS a été discuté sur le suivi des demandes GitHub du projet, mais aucune annonce officielle de Mintplex Labs ne confirme une date de sortie.',
          },
          {
            q: 'AnythingLLM Mobile est-il gratuit ?',
            a: 'Oui, l\'application mobile elle-même est gratuite et open source sous licence MIT, sans abonnement pour l\'usage autonome sur l\'appareil. Si vous utilisez le mode connecté pour vous coupler à une instance AnythingLLM Cloud hébergée plutôt que de vous auto-héberger, ce service Cloud séparé propose des forfaits payants à partir de 50 $/mois — mais l\'application mobile et les options d\'auto-hébergement sur bureau/Docker restent gratuites.',
          },
          {
            q: 'Qui crée AnythingLLM Mobile ?',
            a: 'AnythingLLM Mobile est créée par Mintplex Labs, une entreprise fondée en 2022 par Timothy Carambat et basée à Irvine, en Californie. Mintplex Labs a intégré la promotion été 2022 de Y Combinator et développe aussi l\'application AnythingLLM pour ordinateur/serveur.',
          },
          {
            q: 'Sous quelle licence AnythingLLM Mobile est-elle publiée ?',
            a: 'AnythingLLM Mobile est publiée sous licence MIT, une licence open source permissive, et son code source est public sur GitHub. Le projet AnythingLLM pour ordinateur/serveur auquel elle peut se connecter est également sous licence MIT.',
          },
          {
            q: 'Comment connecter AnythingLLM Mobile à mon instance de bureau ?',
            a: 'Activez « network discovery » dans votre instance AnythingLLM Desktop, Docker ou Cloud, sous Settings > Admin > General, puis ouvrez Settings > Tools > AnythingLLM Mobile pour afficher un code QR d\'appairage. Scannez ce code depuis l\'application AnythingLLM Mobile pour vous connecter. Une fois couplés, espaces de travail, discussions et fils se synchronisent entre le téléphone et l\'instance connectée.',
          },
          {
            q: 'AnythingLLM Mobile nécessite-t-il une connexion internet ?',
            a: 'Pas pour le mode autonome après le téléchargement initial du modèle — l\'inférence et le RAG documentaire s\'exécutent entièrement sur l\'appareil. Le mode connecté nécessite un réseau local partagé pour joindre une instance de bureau ou Docker auto-hébergée, ou une connexion internet pour joindre une instance AnythingLLM Cloud hébergée.',
          },
          {
            q: 'AnythingLLM Mobile peut-il discuter avec mes documents ?',
            a: 'Oui, dans les deux modes. En mode autonome, les documents sont découpés, vectorisés et recherchés à l\'aide d\'un modèle d\'embedding et d\'une base de données vectorielle sur l\'appareil, entièrement hors connexion. En mode connecté, l\'instance couplée de bureau, Docker ou Cloud gère le RAG documentaire avec sa propre base de données vectorielle et son modèle d\'embedding configurés, comme l\'application de bureau.',
          },
          {
            q: 'Quelle est la différence entre AnythingLLM Mobile et l\'application de bureau AnythingLLM ?',
            a: 'AnythingLLM Mobile est une application Android distincte conçue pour les téléphones, dotée de son propre mode d\'inférence autonome sur l\'appareil en plus de la possibilité de se connecter à une instance de bureau. L\'application AnythingLLM pour ordinateur/serveur, traitée dans la comparaison AnythingLLM vs PrivateGPT vs Open WebUI de PromptQuorum, tourne sur Mac, Windows, Linux ou Docker et prend en charge une gamme plus large de fournisseurs de LLM, de bases de données vectorielles et de configurations d\'agents que le mode autonome de l\'application mobile.',
          },
          {
            q: 'Comment AnythingLLM Mobile se compare-t-il à PocketPal AI ou Private LLM ?',
            a: 'PocketPal AI et Private LLM sont des applications de chat mobile exclusivement sur l\'appareil, sans mode de connexion à un serveur ; AnythingLLM Mobile est la seule application de cette comparaison à avoir une véritable double conception — inférence autonome sur l\'appareil plus mode connecté optionnel vers une instance AnythingLLM auto-hébergée ou cloud. Choisissez AnythingLLM Mobile si vous voulez cette flexibilité ou utilisez déjà AnythingLLM sur ordinateur ; choisissez PocketPal AI (gratuite, iPhone/Android) ou Private LLM (payante, Apple uniquement) si vous cherchez spécifiquement une application iPhone, puisqu\'AnythingLLM Mobile n\'est disponible que sur Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'La double conception d\'AnythingLLM Mobile — un véritable mode autonome sur l\'appareil aux côtés d\'un mode connecté optionnel — est inhabituelle dans cette catégorie, où la plupart des applications mobiles d\'IA s\'engagent pleinement dans l\'une ou l\'autre architecture. Cette flexibilité est aussi le principal écueil pour un nouvel utilisateur : comprendre quel mode est actif, et ce que chaque mode peut ou ne peut pas faire, demande plus d\'attention initiale qu\'une application à usage unique comme PocketPal AI ou Private LLM. La limitation la plus importante actuellement reste la plateforme : AnythingLLM Mobile est uniquement disponible sur Android, sans publication App Store ni date confirmée pour iOS. Choisissez AnythingLLM Mobile si vous êtes sur Android et voulez soit une IA gratuite hors connexion sans configuration, soit utilisez déjà AnythingLLM Desktop, Docker ou Cloud et voulez retrouver les mêmes espaces de travail sur votre téléphone. Choisissez plutôt Private LLM ou PocketPal AI si vous avez besoin d\'une application iPhone, et utilisez directement l\'application de bureau AnythingLLM si vous n\'avez besoin d\'aucun client mobile.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AnythingLLM Mobile sur GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) — code source, licence (MIT) et usage de Cactus Compute mentionné dans ce test.',
          '[Documentation officielle d\'AnythingLLM Mobile](https://docs.anythingllm.com/mobile/overview) — mode autonome vs connecté, étapes d\'appairage et configuration de la détection réseau.',
          '[AnythingLLM Mobile sur Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) — disponibilité Android et description de l\'application.',
          '[Page officielle d\'AnythingLLM Mobile](https://anythingllm.com/mobile) — liens de téléchargement et aperçu des fonctionnalités.',
          '[Tarifs d\'AnythingLLM Cloud](https://anythingllm.com/pricing) — forfaits Basic, Pro et Enterprise mentionnés dans ce test.',
          '[Mintplex Labs sur Y Combinator](https://www.ycombinator.com/companies/mintplex-labs) — fondation de l\'entreprise, promotion et contexte.',
          '[Dépôt GitHub de l\'application AnythingLLM pour ordinateur/serveur](https://github.com/Mintplex-Labs/anything-llm) — le projet complémentaire auquel cette application mobile peut se connecter.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI : quel outil RAG l\'emporte ?](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — la comparaison de la version ordinateur/serveur d\'AnythingLLM à laquelle cette application mobile peut se connecter.',
          '[Test de PocketPal AI (2026)](/power-local-llm/pocketpal-ai-review) — une alternative gratuite, open source, exclusivement sur l\'appareil, pour iPhone et Android.',
          '[Test de Private LLM](/power-local-llm/private-llm-review) — une alternative payante, Apple uniquement, exclusivement sur l\'appareil, avec un large catalogue de modèles intégré.',
          '[Les meilleures applications LLM locales pour Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — le panorama plus large des applications Android.',
          '[Loci : test — IA hors ligne pour iPhone, Android, iPad, Mac et Windows](/power-local-llm/loci-ai-review-offline-local-ai) — une alternative sélectionnée sur cinq plateformes pour qui préfère un mode unique et guidé.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AnythingLLM Mobile : test (2026) — chat + RAG sur l\'appareil',
      description:
        'Test d\'AnythingLLM Mobile : appli Android gratuite sous licence MIT qui exécute des modèles sur l\'appareil ET se synchronise avec une instance AnythingLLM auto-hébergée. Statut iOS, prix, RAG.',
      url: 'https://promptquorum.com/fr/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'fr',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs Android soucieux de leur confidentialité et utilisateurs existants d\'AnythingLLM Desktop ou auto-hébergé' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: 'Génération augmentée par récupération' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'LLM local' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AnythingLLM Mobile : test (2026)', item: 'https://promptquorum.com/fr/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-ja.webp',
    title: 'AnythingLLM Mobileレビュー（2026）：オンデバイスチャット+RAG',
    seoTitle: 'AnythingLLM Mobile 2026：オンデバイスかクライアントか',
    intro:
      'AnythingLLM Mobileは、[Mintplex Labs](https://mintplex.com)が開発した無料・MITライセンスのAndroidアプリです。小型の言語モデルとローカルベクトルデータベースをスマートフォン上で直接実行し、オフラインでドキュメントチャットができます。さらに、自前でホストする[AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)やAnythingLLM Cloudのインスタンスとローカルネットワーク経由でペアリングし、デスクトップ版のフル機能を使うこともできます。本レビューでは、オンデバイス単独モードと接続モードの正確な違い、実際のプラットフォーム対応状況（Androidは利用可能、iOSはまだ未対応）、モバイルアプリの料金と別料金のAnythingLLM Cloudサービスとの違い、そして導入すべき人・避けるべき人を解説します。',
    metaDescription:
      'AnythingLLM Mobileレビュー：モデルをオンデバイスで実行し、自前ホストのAnythingLLMインスタンスとも同期できる、無料・MITライセンスのAndroidアプリ。iOS対応状況、料金、RAGを解説。',
    twitterDescription:
      'AnythingLLM Mobileレビュー2026：オフラインチャット用にモデルをオンデバイスで実行しつつ、自前ホストのAnythingLLMインスタンスともペアリング可能。Android限定でiOSアプリはまだなし。',
    audience:
      'プライバシーを重視するAndroidユーザーと、モバイル連携を求める既存のAnythingLLMデスクトップ/セルフホスト利用者。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AnythingLLM Mobile レビュー',
    targetKeywords: [
      'anythingllm mobile レビュー',
      'anythingllm mobile アプリ',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile オンデバイス',
      'anythingllm mobile vs desktop',
      'anythingllm mobile 料金',
      'スマホでドキュメントチャット',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**AnythingLLM Mobileは、無料・MITライセンスのAndroidアプリで、2つの方式で動作します。単独モードでは、選定済みの小型言語モデルとローカルベクトルデータベースをスマートフォン上だけで実行し、オフラインでドキュメントチャットとRAGを行います。接続モードでは、QRコードによるペアリングでローカルネットワーク上の自前ホスト[AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)またはAnythingLLM Cloudインスタンスとチャット・ワークスペース・ドキュメントを同期します。** 開発元は、デスクトップ/サーバー版AnythingLLMプロジェクトの開発元でもある[Mintplex Labs](https://mintplex.com)で、[GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile)上でMITライセンスとして公開されています。本レビュー時点で、このアプリは[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)経由のAndroid版のみで、iOS版のApp Storeリリースはまだありません。',
    quickAnswerTop: {
      ja: {
        question: 'AnythingLLM Mobileはスマホ上でモデルを実行するのか、それともサーバー用のクライアントに過ぎないのか？',
        answer:
          'どちらも正解です — これはアプリの制約ではなく設計上の選択です。デフォルトでは、AnythingLLM Mobileは小型のGGUFモデルをダウンロードし、React Native向けのllama.cppベース推論エンジンである[Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile)を使ってオンデバイスで実行します。あわせてローカルの埋め込みモデルとオンデバイスのベクトルデータベースを組み合わせるため、ドキュメントチャットとRAGはアカウントもサーバーも不要で完全にオフラインで動作します。別途、そのインスタンスのSettings > Toolsパネルに表示されるQRコードを使って、自前ホストのAnythingLLM DesktopまたはAnythingLLM Cloudインスタンスとペアリングすることもでき、単独モードにはないカスタムエージェントツール、大規模ワークスペース、デバイス間同期が利用可能になります。',
        bullets: [
          '単独モードでは、同梱の小型モデルとローカルベクトルDBを完全にオンデバイスで実行 — サーバー不要、アカウント不要、オフラインで動作。',
          '接続モードでは、QRコードで自前ホストのAnythingLLM DesktopまたはCloudインスタンスとペアリングし、カスタムエージェントツールとデバイス間同期を利用可能。',
          '[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)または直接APKでAndroid限定提供。本レビュー時点でiOS版App Storeリリースなし。',
          'MITライセンスの無料オープンソース。自前ホストせずに接続モードを使いたい人向けの別サービスAnythingLLM Cloudは月額50ドルから。',
          'Y Combinator（2022年夏バッチ）出身のTimothy Carambat氏が創業した[Mintplex Labs](https://mintplex.com)が開発。同社はデスクトップ/サーバー版AnythingLLMプロジェクトも手がける。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'AnythingLLM Mobileとは何か？', anchor: 'what-is-anythingllm-mobile' },
      { label: 'AnythingLLM Mobileの開発元は？', anchor: 'history-and-developer' },
      { label: 'オンデバイス実行かサーバー接続か？', anchor: 'on-device-vs-connected' },
      { label: 'AnythingLLM Mobileを始める方法', anchor: 'getting-started' },
      { label: 'スマホでのドキュメントチャットとRAGの仕組み', anchor: 'models-and-rag' },
      { label: 'AnythingLLM MobileはiPhoneで使えるか？', anchor: 'platform-availability' },
      { label: 'AnythingLLM Mobileの料金は？', anchor: 'pricing' },
      { label: 'AnythingLLM Mobileの主な機能', anchor: 'key-features' },
      { label: '必要なハードウェアは？', anchor: 'hardware-requirements' },
      { label: 'AnythingLLM Mobileが向いている人', anchor: 'who-should-use' },
      { label: 'AnythingLLM Mobileが向いていない人', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobileと代替アプリの比較', anchor: 'vs-alternatives' },
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
            text: 'AnythingLLM Mobileは、Mintplex Labsが開発した無料・MITライセンスのAndroidアプリで、オフラインドキュメントチャット用に小型言語モデルをオンデバイスで実行し、さらに自前ホストのAnythingLLM DesktopまたはCloudインスタンスとも接続できる。',
          },
          {
            type: 'plain-terms',
            text: 'サーバー用の単なるリモコンアプリでもなければ、デスクトップアプリを完全に置き換える単独完結型アプリでもない — スマホ上で完結するオフラインAIであると同時に、すでに稼働中のデスクトップやクラウドのインスタンスをのぞく画面としても使える、両方の性質を併せ持つアプリであり、どちらのモードを使うかはタスクごとにユーザーが選ぶ。',
          },
        ],
        items: [
          '無料・オープンソース（MITライセンス）。モバイルアプリのソースコードは[GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile)で公開。',
          '二つのモードを提供：オンデバイス単独推論（Cactus Computeエンジン、同梱GGUFモデル、ローカルベクトルDB）、またはQRコードで自前ホストのデスクトップ/クラウドインスタンスとペアリングする接続モード。',
          'レビュー時点ではAndroid限定 — [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)または直接APKで提供、iOS版App Storeリリースはまだなし。',
          '[Mintplex Labs](https://mintplex.com)が開発。同社はY Combinator出身企業で、[デスクトップ/サーバー版AnythingLLMプロジェクト](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)も手がける。',
          'モバイルアプリ自体にサブスクリプションはない。一部ユーザーがペアリングする別サービスのAnythingLLM Cloudは月額50ドルから。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、[AnythingLLM MobileのGitHub公開リポジトリ](https://github.com/Mintplex-Labs/anythingllm-mobile)、公式[モバイルドキュメント](https://docs.anythingllm.com/mobile/overview)、[Google Playの掲載情報](https://play.google.com/store/apps/details?id=com.anythingllm)、[anythingllm.com](https://anythingllm.com/mobile)を基に、2026年9月時点で確認しています。PromptQuorumは本レビューのためにAnythingLLM Mobileの独自ハンズオンベンチマークは実施していません — 以下の性能値はこのアプリ固有の測定値ではなく、ローカルLLM全般のハードウェア目安です。',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: 'AnythingLLM Mobileとは何か？',
        content: [
          '**AnythingLLM Mobileは、[MITライセンス](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE)で公開されたAndroidアプリで、クラウドAPIに依存せずにスマートフォンが言語モデルやアップロードされたドキュメントとチャットできるようにするものです。** [デスクトップ/サーバー版AnythingLLMプロジェクト](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)とは別のコードベースで、React Native向けに専用開発されていますが、両プロジェクトは同じ企業によるもので、AnythingLLMという名称とワークスペースの概念を共有しています。',
          'このアプリは「2つの製品が1つになったもの」と捉えるのが最も分かりやすいでしょう。セットアップもアカウントも不要で動作する単独オンデバイスAIアシスタントと、すでにデスクトップアプリ、Dockerコンテナ、またはAnythingLLM Cloudサブスクリプションを運用しているユーザー向けに、同じワークスペース・チャット履歴・ドキュメントをスマホでも使えるようにするモバイルフロントエンドの2つです。',
        ],
        note: 'RAG（検索拡張生成）とは、アプリが自分のドキュメントから関連する箇所を検索し、それを文脈として言語モデルに渡す仕組みのことです。これにより、回答はモデルの学習データだけでなく、自分のファイルに基づいたものになります。',
      },
      history: {
        id: 'history-and-developer',
        title: 'AnythingLLM Mobileの開発元は？',
        content: [
          '**AnythingLLM Mobileは、[Mintplex Labs](https://mintplex.com)が開発しています。同社はTimothy Carambat氏が創業し、デスクトップ・サーバー版のAnythingLLMのオリジナル版も手がけました。** Mintplex Labsは2022年に設立され、米カリフォルニア州アーバインを拠点とし、Y Combinatorの2022年夏バッチに参加、Y Combinator、Goodwater Capital、UpHonest Capital、Orange DAOからプレシード資金を調達しています。',
          'デスクトップ・サーバー版のAnythingLLM — ドキュメントとのチャットや独自エージェント構築のためのオープンソース・セルフホスト可能な「オールインワンAIアプリケーション」— はモバイルアプリより数年前から存在し、GitHubで大規模なコミュニティを持っています。詳細は[PromptQuorumのAnythingLLM対PrivateGPT対Open WebUI比較記事](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)で解説しています。AnythingLLM Mobileは、同じワークスペースとRAGの概念をスマホに拡張した、より新しく独立したReact Nativeコードベースです。',
        ],
        items: [
          '企業：[Mintplex Labs](https://mintplex.com)、2022年に米カリフォルニア州アーバインでTimothy Carambat氏が創業。',
          'Y Combinator 2022年夏バッチ出身。プレシード投資家にはY Combinator、Goodwater Capital、UpHonest Capital、Orange DAOが含まれる。',
          '同社は[デスクトップ/サーバー版AnythingLLMアプリケーション](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)と、ベクトルデータベース管理用オープンソースツールVectorAdminも開発。',
          'AnythingLLM Mobileのソースコード：[github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile)、MITライセンス。',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: 'AnythingLLM Mobileはオンデバイス実行かサーバー接続か？',
        content: [
          '**AnythingLLM Mobileは、オンデバイス単独モードと、別途ホストされたAnythingLLMインスタンスとペアリングする接続モードの両方をサポートしています — どちらか一方に限定されているわけではなく、アクティブなモードによってアプリができることが変わります。** この2つを混同することは重要な問題です。設定不要で完全にオフラインで動くAIを期待する人は単独モードでそれを得られますが、デスクトップのフル機能（カスタムエージェントツール、より大きなドキュメントワークスペース）を期待する人は、接続モードと、ペアリング相手となる稼働中のデスクトップ・Docker・Cloudインスタンスが必要です。',
          '単独モードでは、[Mintplex Labs自身のモバイルドキュメント](https://docs.anythingllm.com/mobile/overview)とアプリの[GitHubリポジトリ](https://github.com/Mintplex-Labs/anythingllm-mobile)によれば、スマホは小型で選定済みのGGUF言語モデルをダウンロードし、React Native向けのllama.cppベース推論エンジンである[Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile)を使ってローカルで実行します。小型の埋め込みモデルとローカルベクトルデータベースもオンデバイスで動作するため、アップロードされたドキュメントは完全にオフラインでチャンク分割・埋め込み・検索され、RAGに利用できます。モデルのダウンロード後は、チャットにアカウント・APIキー・インターネット接続のいずれも不要です。',
          '接続モードでは、そのワークスペースについてスマホ自体は推論を実行しません — そのインスタンスのSettings > Tools > AnythingLLM Mobileパネルに表示されるQRコードをスキャンすることで、AnythingLLM Desktopアプリ、自前ホストのDockerインスタンス、またはAnythingLLM Cloudサブスクリプションとローカルネットワーク（Cloudの場合はインターネット）経由でペアリングします。ローカルネットワークでのペアリングを機能させるには、デスクトップ側インスタンスのSettings > Admin > Generalで「ネットワーク検出を有効化」をオンにしておく必要があります。ペアリング後は、チャット・ワークスペース・スレッド・カスタムエージェントツールがスマホと接続先インスタンスの間で同期され、LLM・埋め込み・RAGの処理はそのインスタンスが稼働している場所で行われ、スマホ上では行われません。',
        ],
        decisionBlock: {
          title: 'どちらのモードを使うべきか？',
          localIf: [
            'アカウント不要・サーバー不要・設定不要でオフライン動作するAIチャットとドキュメントRAGが欲しい。',
            '何かをさらに導入する前に、手元の特定のAndroid端末でオンデバイスAIが十分な速度で動くか試したい。',
            'AnythingLLMのデスクトップ／サーバーインスタンスを運用しておらず、運用する予定もない。',
          ],
          cloudIf: [
            'すでにAnythingLLM Desktop、Docker、AnythingLLM Cloudを運用しており、同じワークスペースとチャット履歴をスマホでも使いたい。',
            'カスタムエージェントツール、より大きなドキュメントライブラリ、またはスマホで現実的に動かせないほど高性能なモデルが必要。',
            '複数のデバイス（スマホとデスクトップ）を1つの共有ワークスペースで同期させたい。',
          ],
          quick: [
            '迷ったら単独モードから始める — ほかに何も稼働させる必要がない。',
            'ペアリング相手となるデスクトップ・Docker・Cloudインスタンスがすでにある場合のみ、接続モードに切り替える。',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'AnythingLLM Mobileを始める方法',
        content: [
          '**セットアップ方法は、アプリの[モバイルドキュメント](https://docs.anythingllm.com/mobile/overview)によれば、どちらのモードを使いたいかによって異なります。** 単独モードはアプリのインストール以外に何も必要ありませんが、接続モードはペアリング先となる既存のAnythingLLM Desktop、Docker、またはCloudインスタンスが必要です。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)または[anythingllm.com/mobile](https://anythingllm.com/mobile)からの直接APKで、AnythingLLM Mobileをダウンロードします。アプリを開くのにアカウントやメール登録は不要です。',
          },
          {
            title: 'オフライン利用には単独モードを選ぶ',
            whyItMatters: '初回起動時、アプリは選定済みのオンデバイスモデルをダウンロード用に提示します。端末のRAMに合ったモデルを選び（下記ハードウェアの節を参照）、チャットを始めます。基本的なチャットとドキュメントのアップロードには、それ以上の設定は不要です。',
          },
          {
            title: 'または接続モード用に自前ホストのインスタンスとペアリングする',
            whyItMatters: 'すでにAnythingLLM Desktop、Docker、Cloudを運用している場合は、そのインスタンスのSettings > Admin > Generalで「ネットワーク検出」を有効化し、デスクトップ側UIでSettings > Tools > AnythingLLM Mobileを開いてペアリング用QRコードを表示します。',
          },
          {
            title: 'モバイルアプリからQRコードをスキャンする',
            whyItMatters: 'AnythingLLM Mobile側でペアリング/スキャン機能を使い、デスクトップまたはCloudインスタンスに接続します。ペアリング後は、そのインスタンスのワークスペース・チャット・スレッドがモバイルアプリで利用可能になり、更新はデバイス間で同期されます。',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: 'スマホでのドキュメントチャットとRAGの仕組み',
        itemHeadings: true,
        columns: ['モード', '推論の実行場所', 'RAG／ドキュメント処理'],
        rows: [
          {
            'モード': '単独（オンデバイス）',
            '推論の実行場所': 'Cactus Compute（React Native向けllama.cppベースエンジン）でスマホ上',
            'RAG／ドキュメント処理': 'ローカルの埋め込みモデル＋オンデバイスベクトルデータベース。ドキュメントは完全にオフラインでチャンク分割・埋め込み・検索される',
          },
          {
            'モード': '接続（ペアリング先インスタンス）',
            '推論の実行場所': 'ペアリング先のAnythingLLM Desktop、Dockerホスト、またはCloudインスタンス上',
            'RAG／ドキュメント処理': 'そのインスタンスに設定済みのベクトルデータベースと埋め込みモデルを使用 — デスクトップアプリと同じRAGパイプラインをモバイルに同期',
          },
        ],
        note: '一方のモードで作成したワークスペースが自動的にもう一方のモードのワークスペースになるわけではありません — 単独オンデバイスのワークスペースにアップロードしたドキュメントは、デスクトップ/Cloudインスタンスとペアリングした接続ワークスペースに切り替えない限り、その端末にとどまります。',
      },
      platform: {
        id: 'platform-availability',
        title: 'AnythingLLM MobileはiPhoneで使えるか？',
        itemHeadings: true,
        columns: ['プラットフォーム', '対応状況', '備考'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '対応状況': '[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)、および直接APKダウンロードで利用可能',
            '備考': '本レビュー時点で唯一の提供済みモバイルプラットフォームです。',
          },
          {
            'プラットフォーム': 'iPhone / iPad（iOS）',
            '対応状況': '未提供 — 本レビュー時点でAnythingLLM MobileのApp Store掲載は見つからず',
            '備考': 'iOS対応はプロジェクトの[GitHub Issueトラッカー](https://github.com/Mintplex-Labs/anything-llm/issues/5428)で公に議論されていますが、PromptQuorumは公式のApp Storeリリースやリリース時期を確定するMintplex Labsの発表を確認できませんでした。他サイトの情報だけを根拠にiOS対応を前提にせず、期待する前に[App Store](https://apps.apple.com/)で直接確認してください。',
          },
          {
            'プラットフォーム': 'Mac / Windows / Linux',
            '対応状況': '対象外 — これらのプラットフォームは、モバイルアプリではなく別の[AnythingLLM Desktopアプリ](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)またはDockerコンテナを使用します',
            '備考': '今すぐAnythingLLMを使いたいiPhoneユーザーは、Mac上でデスクトップアプリを使うか、[PocketPal AI](/power-local-llm/pocketpal-ai-review)や[Private LLM](/power-local-llm/private-llm-review)といった別のモバイルアプリを検討してください。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'AnythingLLM Mobileの料金は？',
        content: [
          '**AnythingLLM Mobile自体は、公開ドキュメントとアプリのPlay Store掲載情報を確認する限り、オンデバイス単独モードでのダウンロードと利用が無料で、サブスクリプションもアプリ内課金も見つかりません。** モバイルアプリのソースコードは[MITライセンス](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE)でGitHub上に公開されています。',
          'コストが発生するのは、接続モードで何とペアリングするかによります。ペアリング相手として自分でAnythingLLM DesktopアプリやDockerコンテナを運用する分には、モバイルアプリと同様に無料・オープンソースです。セルフホストしたくない場合、Mintplex Labsは別途ホスト型サービスとして[AnythingLLM Cloud](https://anythingllm.com/pricing)を提供しています：プライベートインスタンスとカスタムサブドメインを含む月額50ドルのBasicプラン、大規模チーム向けに72時間サポートSLAを追加した月額99ドルのProプラン、オンプレミス展開・SSO・RBACを含む個別見積もりのEnterpriseプランです。有料のCloudプランはいずれも、ユーザー自身のLLM APIキーの持ち込みが必要で、モデル利用料は含まれていません。',
        ],
        items: [
          '**モバイルアプリ（単独モード）：** 無料、MITライセンスのオープンソース、サブスクリプションは確認されず。',
          '**モバイルアプリ（接続モード）：** ペアリング機能自体は無料。コストは何とペアリングするかに完全に依存する。',
          '**ペアリング相手となる自前ホストのデスクトップ/Dockerインスタンス：** モバイルアプリと同様に無料・オープンソース。',
          '**AnythingLLM Cloud Basic：** 月額50ドル — プライベートインスタンス、カスタムサブドメイン、自前のLLM APIキーが必要。',
          '**AnythingLLM Cloud Pro：** 月額99ドル — 72時間サポートSLAを追加、大規模チーム向け。',
          '**AnythingLLM Cloud Enterprise：** 個別見積もり — オンプレミス展開、SSO、RBAC、カスタム統合。',
        ],
        note: 'AnythingLLM Cloudの料金はMintplex Labsが米ドルで設定しており、変更される可能性があります。契約前に最新のプランと条件を[anythingllm.com/pricing](https://anythingllm.com/pricing)で直接確認してください。',
      },
      features: {
        id: 'key-features',
        title: 'AnythingLLM Mobileの主な機能',
        content: [
          '**利用できる機能はアクティブなモードによって異なり、一部の機能はプロジェクト自身のモバイルドキュメントによれば接続モードでのみ提供されます。** 具体的には次のとおりです。',
        ],
        items: [
          '**オンデバイスチャット。** 初回ダウンロード後はインターネット接続不要で、ローカルにダウンロードしたモデルとチャットできる。',
          '**オフラインドキュメントRAG。** 単独モードのワークスペースにドキュメントをアップロードし、オンデバイスの埋め込みモデルとベクトルデータベースを使って、引用付きの回答を得られる。',
          '**ワークスペース同期（接続モードのみ）。** ペアリング先のデスクトップ、Docker、Cloudインスタンスで作成したチャット・スレッド・ワークスペースが、スマホとの間で双方向に同期される。',
          '**カスタムエージェントツール（接続モードのみ）。** デスクトップ側インスタンスで設定したツール呼び出し機能は、ペアリング後にモバイルへ引き継がれる。オンデバイス単独モードはカスタムツール設定に対応していない。',
          '**QRコードによるペアリング。** 自前ホストのインスタンスへの接続は、サーバーアドレスや認証情報を手入力するのではなく、そのインスタンスの設定画面に表示されるQRコードを使う。',
          '**単独利用にアカウント不要。** 単独モードでのチャットとドキュメントRAGには、Mintplex Labsアカウントの作成は不要。',
        ],
        note: 'プロジェクトは頻繁に更新をリリースしているため、機能の提供状況はアプリのバージョン間で変わることがあります。インストール済みバージョンで何が利用可能かは、アプリ内の変更履歴または[GitHubリリースページ](https://github.com/Mintplex-Labs/anythingllm-mobile/releases)で確認してください。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'AnythingLLM Mobileに必要なハードウェアは？',
        content: [
          '**オンデバイス単独モードは、他のGGUFベースのモバイルチャットアプリと同様に、スマホ自体のRAMとCPU/NPUに依存します。Mintplex Labsは単独モード用に選定されたモデルごとの正確なRAM要件を公開していないため、一般的なローカルLLMのサイズ目安が適用されます。** スマホ上の量子化GGUFモデルの目安として、パラメータ数10〜30億の小型モデルにはおよそ2〜3GBの空きRAMが必要で、それより大きいモデルは比例して多くのRAMを必要とします。',
          '接続モードでは、言語モデルがペアリング先のデスクトップ・Dockerホスト・Cloudインスタンス上で実行されるため、推論に関してはスマホ側にほぼハードウェア要件がありません。スマホに必要なのはアプリのUIを動かし、データを同期するのに十分なリソースだけであり、実際のハードウェア要件は接続先のAnythingLLMインスタンスをホストするマシン側に移ります。',
        ],
        items: [
          '単独モード：同梱される最小モデルには2〜3GB以上の空きRAMを見込む。より大きなオンデバイスモデルはさらに多く必要。',
          'ストレージ：ダウンロードするオンデバイスモデルごとに、数百メガバイトから数ギガバイトの空き容量が必要。',
          '接続モード：スマホのハードウェアはボトルネックにならない — 代わりにデスクトップ・Docker・Cloudインスタンスを動かすマシンのハードウェア目安を確認する。',
          'ネットワーク：単独モードはモデルのダウンロード後、完全にオフラインで動作する。接続モードは、自前ホストのデスクトップ/Dockerインスタンスに届くための共有ローカルネットワーク（Cloudの場合はインターネット接続）が必要。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AnythingLLM Mobileが向いている人',
        items: [
          '**本当に無料でオフライン動作するAIチャットとドキュメントRAGアプリが欲しいAndroidユーザー。** 単独モードはアカウント・サーバー・サブスクリプションのいずれも不要で、最小限の設定でプライベートなオンデバイスAIを求める人に適する。',
          '**同じワークスペースをスマホでも使いたい既存のAnythingLLM Desktop、Docker、Cloudユーザー。** すでにデスクトップ/サーバー版AnythingLLMのエコシステムに投資している人にとって、接続モードの同期は明確な魅力となる。',
          '**2つの異なるモードを使い分けることに抵抗がないユーザー。** アプリの価値を十分に引き出すには、単独モードと接続モードをいつ使うべきかを理解する必要があり、単一の固定的な動作を求める人よりも、技術的な好奇心があるユーザーに向いている。',
          '**セルフホストなしでモバイルフロントエンドが欲しいチーム。** Androidスマホを有料のAnythingLLM Cloudインスタンスとペアリングすれば、自前でインフラを運用せずに共有ワークスペースへモバイルからアクセスできる。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AnythingLLM Mobileが向いていない人',
        items: [
          '**iPhoneおよびiPadユーザー。** 本レビュー時点でiOS版は存在しない。Apple端末には代わりに[Private LLM](/power-local-llm/private-llm-review)や[PocketPal AI](/power-local-llm/pocketpal-ai-review)を利用すること。',
          '**判断すべきことのない、単一のシンプルなモードを求めるユーザー。** 単独/接続の分離は理解すべき本物の設計上の選択であり、キュレーションされたモデルリストとサーバーペアリングの概念のない単一の誘導型体験を望む人は、[PocketPal AI](/power-local-llm/pocketpal-ai-review)や[Loci](/power-local-llm/loci-ai-review-offline-local-ai)の方が向いているかもしれない。',
          '**サーバーなしで完全なカスタムエージェントツールが欲しいユーザー。** このアプリの現行設計では、カスタムエージェントツールの設定は接続モードに紐づいており、その機能を今すぐ完全にオンデバイスで実現したい人は他を検討すべき。',
          '**無料でエンタープライズサポートが必要なユーザー。** コミュニティサポートは無料だが、サポートSLAには有料のAnythingLLM Cloud ProまたはEnterpriseサブスクリプションが必要で、モバイルアプリ単体では得られない。',
          '**可能な限り大きなオンデバイスモデルを望むユーザー。** 単独モードはスマホのRAMに合った小型で選定済みのモデルを前提に設計されている。より大きなモデルが必要な人は、高性能なデスクトップインスタンスと接続モードを組み合わせるか、直接デスクトップ/ワークステーション構成を利用すべき。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobileと代替アプリの比較',
        itemHeadings: true,
        columns: ['アプリ', 'オンデバイス vs. クライアント', 'プラットフォーム', 'ライセンス／料金'],
        rows: [
          {
            'アプリ': 'AnythingLLM Mobile',
            'オンデバイス vs. クライアント': '両方 — オンデバイス単独推論、または自前ホストインスタンスへの接続クライアント',
            'プラットフォーム': 'Androidのみ',
            'ライセンス／料金': '無料、オープンソース（MIT）。ペアリング先のCloudサービスは月額50ドルから',
          },
          {
            'アプリ': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            'オンデバイス vs. クライアント': 'LLMとRAGパイプラインを自ら実行、ローカルまたはAPI経由',
            'プラットフォーム': 'Mac、Windows、Linux、Docker',
            'ライセンス／料金': '無料、オープンソース（MIT）。Cloudホスティングは月額50ドルから',
          },
          {
            'アプリ': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'オンデバイス vs. クライアント': 'オンデバイスのみ — サーバー/クライアントモードなし',
            'プラットフォーム': 'iPhone/iPad、Android',
            'ライセンス／料金': '無料、オープンソース（MIT）',
          },
          {
            'アプリ': '[Private LLM](/power-local-llm/private-llm-review)',
            'オンデバイス vs. クライアント': 'オンデバイスのみ — サーバー/クライアントモードなし',
            'プラットフォーム': 'iPhone/iPad/Mac（Appleのみ）',
            'ライセンス／料金': '有料、買い切り。クローズドソース',
          },
          {
            'アプリ': 'LLM Farm',
            'オンデバイス vs. クライアント': 'オンデバイスのみ、llama.cpp経由',
            'プラットフォーム': 'iPhone/iPad',
            'ライセンス／料金': '無料、オープンソース。過去にApp Storeから削除された時期があるため、インストール前に最新の対応状況を確認すること',
          },
          {
            'アプリ': 'Layla',
            'オンデバイス vs. クライアント': 'オンデバイスのみ、加えて任意のリモートAPIプロバイダーに対応',
            'プラットフォーム': 'Android、iPhone/iPad',
            'ライセンス／料金': '無料プランと有料プラン。クローズドソース',
          },
          {
            'アプリ': 'Maid',
            'オンデバイス vs. クライアント': 'オンデバイスのみ、llama.cpp経由。リモートのOllama/OpenAI互換エンドポイントにも対応',
            'プラットフォーム': 'Android、iPhone/iPad',
            'ライセンス／料金': '無料、オープンソース（MIT）',
          },
          {
            'アプリ': 'RikkaHub',
            'オンデバイス vs. クライアント': '両方 — LiteRTプロバイダーによるローカルオンデバイス推論、加えてマルチプロバイダーのクラウドクライアント',
            'プラットフォーム': 'Android',
            'ライセンス／料金': '無料、オープンソース',
          },
        ],
        note: 'AnythingLLM MobileとRikkaHubは、このテーブルの中で真にオンデバイス/クライアントの二重設計を持つ2つのアプリです。他のすべての行は厳密にオンデバイスのみ、あるいは厳密にクライアントのみで動作します。この違いは、単一の機能リストだけを見てインストールを判断する前に確認すべき重要なポイントです。掲載されているアプリをインストールする前に、対応状況が変わることがあるため、最新のApp Store/Play Storeの情報を直接確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AnythingLLM MobileはAIモデルをスマホ自体で実行しますか？',
            a: 'はい、単独モードではそうです。アプリは小型で選定済みのGGUF言語モデルをダウンロードし、React Native向けのllama.cppベース推論エンジンであるCactus Computeを使ってオンデバイスで実行します。あわせてローカルの埋め込みモデルとベクトルデータベースをオフラインドキュメントRAGに利用します。それとは別に、アプリは自前ホストのAnythingLLM DesktopまたはCloudインスタンスとペアリングする接続モードにも対応しており、そこではスマホではなくペアリング先のインスタンス上で推論が行われます。',
          },
          {
            q: 'AnythingLLM MobileはiPhoneで利用できますか？',
            a: 'いいえ。本レビュー時点で、AnythingLLM MobileにApp Store掲載はなく、Google Playまたは直接APKダウンロード経由のAndroidのみで提供されています。iOS対応はプロジェクトのGitHub Issueトラッカーで議論されていますが、リリース時期を確定するMintplex Labsの公式発表はありません。',
          },
          {
            q: 'AnythingLLM Mobileは無料ですか？',
            a: 'はい、モバイルアプリ自体は無料でMITライセンスのオープンソースであり、オンデバイス単独利用にサブスクリプションは不要です。セルフホストの代わりに接続モードでホスト型のAnythingLLM Cloudインスタンスとペアリングして使う場合、その別サービスであるCloudには月額50ドルからの有料プランがありますが、モバイルアプリ自体とデスクトップ/Dockerのセルフホストオプションは引き続き無料です。',
          },
          {
            q: 'AnythingLLM Mobileの開発元は誰ですか？',
            a: 'AnythingLLM Mobileは、2022年にTimothy Carambat氏が創業し、米カリフォルニア州アーバインを拠点とするMintplex Labsが開発しています。Mintplex LabsはY Combinatorの2022年夏バッチに参加しており、デスクトップ/サーバー版AnythingLLMアプリケーションも開発しています。',
          },
          {
            q: 'AnythingLLM Mobileはどのライセンスで公開されていますか？',
            a: 'AnythingLLM Mobileは寛容なオープンソースライセンスであるMITライセンスで公開されており、ソースコードはGitHub上で公開されています。接続先となるデスクトップ/サーバー版AnythingLLMプロジェクトも同じくMITライセンスです。',
          },
          {
            q: 'AnythingLLM Mobileをデスクトップインスタンスに接続するにはどうすればよいですか？',
            a: 'AnythingLLM Desktop、Docker、またはCloudインスタンスのSettings > Admin > Generalで「ネットワーク検出」を有効にし、次にSettings > Tools > AnythingLLM Mobileを開いてペアリング用QRコードを表示します。AnythingLLM Mobileアプリ内でそのコードをスキャンすると接続されます。ペアリング後は、ワークスペース・チャット・スレッドがスマホと接続先インスタンスの間で同期されます。',
          },
          {
            q: 'AnythingLLM Mobileにインターネット接続は必要ですか？',
            a: '単独モードでは、初回のモデルダウンロード後は不要です — 推論とドキュメントRAGは完全にオンデバイスで実行されます。接続モードでは、自前ホストのデスクトップ/Dockerインスタンスに届くための共有ローカルネットワーク、またはホスト型のAnythingLLM Cloudインスタンスに届くためのインターネット接続が必要です。',
          },
          {
            q: 'AnythingLLM Mobileは自分のドキュメントとチャットできますか？',
            a: 'はい、両方のモードで可能です。単独モードでは、オンデバイスの埋め込みモデルとローカルベクトルデータベースを使って、ドキュメントを完全にオフラインでチャンク分割・埋め込み・検索します。接続モードでは、ペアリング先のデスクトップ、Docker、Cloudインスタンスが、デスクトップアプリと同様に、自身に設定済みのベクトルデータベースと埋め込みモデルを使ってドキュメントRAGを処理します。',
          },
          {
            q: 'AnythingLLM Mobileとデスクトップ版AnythingLLMアプリの違いは何ですか？',
            a: 'AnythingLLM Mobileは、スマホ向けに構築された独立したAndroidアプリで、デスクトップインスタンスに接続する機能に加えて、独自のオンデバイス単独推論モードを備えています。PromptQuorumのAnythingLLM対PrivateGPT対Open WebUI比較記事で取り上げているデスクトップ/サーバー版AnythingLLMアプリケーションは、Mac、Windows、Linux、Dockerで動作し、モバイルアプリの単独モードよりも幅広いLLMプロバイダー、ベクトルデータベース、エージェント構成に対応しています。',
          },
          {
            q: 'AnythingLLM MobileはPocketPal AIやPrivate LLMと比べてどうですか？',
            a: 'PocketPal AIとPrivate LLMは、サーバー接続モードのない、オンデバイス専用のモバイルチャットアプリです。AnythingLLM Mobileは、この比較の中で唯一、オンデバイス単独推論と、自前ホストまたはクラウドのAnythingLLMインスタンスへの任意の接続モードを組み合わせた本物の二重設計を持つアプリです。この柔軟性が欲しい、またはすでにデスクトップ版AnythingLLMを使っている場合はAnythingLLM Mobileを選び、AnythingLLM Mobileはandroid限定であるため、特にiPhoneアプリが欲しい場合はPocketPal AI（無料、iPhone/Android）またはPrivate LLM（有料、Appleのみ）を選んでください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'AnythingLLM Mobileの二重設計 — 本物のオンデバイス単独モードとオプションの接続モードの両立 — は、ほとんどのモバイルAIアプリがどちらか一方のアーキテクチャに完全にコミットするこのカテゴリでは珍しい存在です。この柔軟性は、初めて使うユーザーにとって最大のつまずきポイントでもあります。どちらのモードがアクティブで、それぞれが何をできて何をできないのかを理解するには、PocketPal AIやPrivate LLMのような単一目的アプリよりも、最初に多くの注意が必要です。現時点でより大きな制約はプラットフォームです。AnythingLLM MobileはAndroid限定で、App Storeでの公開もiOSの確定リリース時期もありません。Androidを使っていて、設定不要の無料オフラインAIが欲しい人、またはすでにAnythingLLM Desktop、Docker、Cloudを運用していて同じワークスペースをスマホでも使いたい人はAnythingLLM Mobileを選んでください。iPhoneアプリが必要な場合はPrivate LLMまたはPocketPal AIを選び、モバイルクライアントがまったく不要な場合はデスクトップ版のAnythingLLMアプリケーションを直接使ってください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のAnythingLLM Mobile](https://github.com/Mintplex-Labs/anythingllm-mobile) — 本レビューで参照したソースコード、ライセンス（MIT）、Cactus Computeの利用について。',
          '[AnythingLLM Mobile公式ドキュメント](https://docs.anythingllm.com/mobile/overview) — 単独モードと接続モードの違い、ペアリング手順、ネットワーク検出の設定について。',
          '[Google Play上のAnythingLLM Mobile](https://play.google.com/store/apps/details?id=com.anythingllm) — Android対応状況とアプリの説明。',
          '[AnythingLLM Mobile公式ページ](https://anythingllm.com/mobile) — ダウンロードリンクと機能概要。',
          '[AnythingLLM Cloudの料金](https://anythingllm.com/pricing) — 本レビューで参照したBasic、Pro、Enterpriseプランの料金。',
          '[Y CombinatorページのMintplex Labs](https://www.ycombinator.com/companies/mintplex-labs) — 企業設立の背景とバッチ情報。',
          '[デスクトップ/サーバー版AnythingLLMのGitHubリポジトリ](https://github.com/Mintplex-Labs/anything-llm) — このモバイルアプリが接続できる姉妹プロジェクト。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[AnythingLLM対PrivateGPT対Open WebUI：どのRAGツールが勝つか？](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — このモバイルアプリが接続できる、デスクトップ/サーバー版AnythingLLMの比較記事。',
          '[PocketPal AIレビュー（2026）](/power-local-llm/pocketpal-ai-review) — iPhoneとAndroid向けの無料・オープンソース・オンデバイス専用の代替アプリ。',
          '[Private LLMレビュー](/power-local-llm/private-llm-review) — Apple専用・オンデバイス専用の有料代替アプリで、大規模な内蔵モデルカタログを持つ。',
          '[2026年版 Android向けベストローカルLLMアプリ](/power-local-llm/best-local-llm-apps-android-2026) — より幅広いAndroidアプリのまとめ記事。',
          '[Lociレビュー：iPhone、Android、iPad、Mac、Windows向けオフラインAI](/power-local-llm/loci-ai-review-offline-local-ai) — 単一の誘導型モードを好む人向けの、5プラットフォーム対応のキュレーション型代替アプリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AnythingLLM Mobileレビュー（2026）：オンデバイスチャット+RAG',
      description:
        'AnythingLLM Mobileレビュー：モデルをオンデバイスで実行し、自前ホストのAnythingLLMインスタンスとも同期できる、無料・MITライセンスのAndroidアプリ。iOS対応状況、料金、RAGを解説。',
      url: 'https://promptquorum.com/ja/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'ja',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'プライバシーを重視するAndroidユーザーと既存のAnythingLLMデスクトップ/セルフホスト利用者' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: '検索拡張生成（RAG）' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'ローカルLLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AnythingLLM Mobileレビュー（2026）', item: 'https://promptquorum.com/ja/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-pt.webp',
    title: 'AnythingLLM Mobile: Análise (2026) — Chat + RAG no aparelho',
    seoTitle: 'AnythingLLM Mobile 2026: on-device ou cliente?',
    intro:
      'O AnythingLLM Mobile é um aplicativo Android gratuito, com licença MIT, da [Mintplex Labs](https://mintplex.com), que executa um modelo de linguagem pequeno e um banco de dados vetorial local diretamente no celular para conversar com documentos offline. Ele também pode se parear com uma instância auto-hospedada do [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) ou do AnythingLLM Cloud pela rede local para usar todos os recursos da versão de desktop. Esta análise explica exatamente em que o modo autônomo no aparelho difere do modo conectado, a disponibilidade real por plataforma (Android está disponível; iOS ainda não), o preço do app em comparação ao serviço AnythingLLM Cloud, cobrado separadamente, e para quem ele é — e não é — indicado.',
    metaDescription:
      'Análise do AnythingLLM Mobile: app Android gratuito com licença MIT que roda modelos no aparelho E sincroniza com uma instância AnythingLLM auto-hospedada. Status do iOS, preços, RAG.',
    twitterDescription:
      'Análise do AnythingLLM Mobile 2026: roda um modelo no aparelho para chat offline, mas também se pareia com uma instância AnythingLLM auto-hospedada. Só Android — ainda sem app para iOS.',
    audience:
      'Usuários Android preocupados com privacidade e usuários já existentes do AnythingLLM Desktop ou auto-hospedado que querem um complemento móvel.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AnythingLLM Mobile análise',
    targetKeywords: [
      'anythingllm mobile análise',
      'anythingllm mobile app',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile on-device',
      'anythingllm mobile vs desktop',
      'anythingllm mobile preço',
      'conversar com documentos no celular',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O AnythingLLM Mobile é um app Android gratuito, com licença MIT, que funciona de duas formas: de modo autônomo, executando um modelo de linguagem pequeno e selecionado mais um banco de dados vetorial local inteiramente no aparelho para chat com documentos e RAG offline, ou de modo conectado, sincronizando conversas, workspaces e documentos com uma instância auto-hospedada do [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) ou do AnythingLLM Cloud por pareamento via QR code na rede local.** Ele é desenvolvido pela [Mintplex Labs](https://mintplex.com), empresa por trás do projeto open source AnythingLLM para desktop e servidor, e publicado no [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) sob licença MIT. No momento desta análise, o app está disponível apenas na [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) para Android; ainda não existe versão na App Store para iOS.',
    quickAnswerTop: {
      pt: {
        question: 'O AnythingLLM Mobile roda modelos no celular ou é apenas um cliente para um servidor?',
        answer:
          'Os dois — essa é uma decisão de design do app, não uma limitação. Por padrão, o AnythingLLM Mobile baixa um modelo GGUF pequeno e o executa no aparelho via [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile) (um mecanismo de inferência baseado em llama.cpp para React Native), combinado com um modelo de embedding local e um banco de dados vetorial no aparelho, de modo que o chat com documentos e o RAG funcionam totalmente offline, sem conta e sem servidor. Separadamente, o app pode se parear via QR code exibido no painel Settings > Tools de uma instância auto-hospedada do AnythingLLM Desktop ou AnythingLLM Cloud, o que libera ferramentas de agentes personalizadas, workspaces maiores e sincronização entre dispositivos que o modo autônomo não oferece.',
        bullets: [
          'O modo autônomo executa um modelo pequeno incluso mais um banco de dados vetorial local inteiramente no aparelho — sem servidor, sem conta, funciona offline.',
          'O modo conectado se pareia (via QR code) com uma instância auto-hospedada do AnythingLLM Desktop ou Cloud para ferramentas de agentes personalizadas e sincronização entre dispositivos.',
          'Apenas Android, via [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) ou APK direto; sem versão na App Store para iOS no momento desta análise.',
          'Gratuito e open source sob licença MIT; o serviço separado AnythingLLM Cloud, para quem quer o modo conectado sem se auto-hospedar, começa em US$ 50/mês.',
          'Desenvolvido pela [Mintplex Labs](https://mintplex.com), empresa da Y Combinator (verão de 2022) fundada por Timothy Carambat, também responsável pelo projeto AnythingLLM para desktop/servidor.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o AnythingLLM Mobile?', anchor: 'what-is-anythingllm-mobile' },
      { label: 'Quem desenvolve o AnythingLLM Mobile?', anchor: 'history-and-developer' },
      { label: 'Ele roda no aparelho ou se conecta a um servidor?', anchor: 'on-device-vs-connected' },
      { label: 'Como começar a usar o AnythingLLM Mobile', anchor: 'getting-started' },
      { label: 'Como funcionam o chat com documentos e o RAG no celular?', anchor: 'models-and-rag' },
      { label: 'O AnythingLLM Mobile está disponível para iPhone?', anchor: 'platform-availability' },
      { label: 'Quanto custa o AnythingLLM Mobile?', anchor: 'pricing' },
      { label: 'Quais recursos o AnythingLLM Mobile tem?', anchor: 'key-features' },
      { label: 'De que hardware você precisa?', anchor: 'hardware-requirements' },
      { label: 'Para quem o AnythingLLM Mobile é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o AnythingLLM Mobile não é indicado', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobile vs. alternativas', anchor: 'vs-alternatives' },
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
            text: 'O AnythingLLM Mobile é um app Android gratuito com licença MIT da Mintplex Labs que roda um modelo de linguagem pequeno no aparelho para chat offline com documentos, e que também pode se conectar a uma instância auto-hospedada do AnythingLLM Desktop ou Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Não é apenas um app de controle remoto para um servidor, nem um substituto totalmente autônomo do app de desktop — é as duas coisas: uma IA offline independente no seu celular e uma tela móvel opcional para uma instância de desktop ou nuvem que você já usa, e você escolhe qual modo se encaixa em cada tarefa.',
          },
        ],
        items: [
          'Gratuito e open source (licença MIT); o código-fonte do app móvel é público no [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile).',
          'Modo duplo: inferência autônoma no aparelho (mecanismo Cactus Compute, modelo GGUF incluso, banco de dados vetorial local) ou modo conectado pareado com uma instância de desktop/Cloud auto-hospedada via QR code.',
          'Apenas Android no momento desta análise — disponível na [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) e como APK direto; ainda sem versão na App Store para iOS.',
          'Desenvolvido pela [Mintplex Labs](https://mintplex.com), empresa da Y Combinator também responsável pelo [projeto AnythingLLM para desktop/servidor](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag).',
          'O app móvel em si não tem assinatura; o AnythingLLM Cloud, o serviço de servidor hospedado separadamente com o qual alguns usuários se pareiam, começa em US$ 50/mês.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise é baseada no [repositório público do AnythingLLM Mobile no GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile), na [documentação oficial para mobile](https://docs.anythingllm.com/mobile/overview), na [página da Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) e no [anythingllm.com](https://anythingllm.com/mobile), verificados em setembro de 2026. A PromptQuorum não realizou benchmarks práticos independentes do AnythingLLM Mobile para esta análise — os números de desempenho abaixo são orientações gerais de hardware para LLMs locais, não medições específicas deste app.',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: 'O que é o AnythingLLM Mobile?',
        content: [
          '**O AnythingLLM Mobile é um app Android, publicado sob [licença MIT](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE), que permite que um celular converse com um modelo de linguagem e com documentos enviados sem depender de uma API na nuvem.** É uma base de código separada do [projeto AnythingLLM para desktop/servidor](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag), construída especificamente para React Native, embora os dois projetos venham da mesma empresa e compartilhem o nome AnythingLLM e o conceito de workspace.',
          'A melhor forma de entender o app é como dois produtos em um: um assistente de IA autônomo no aparelho que funciona sem configuração e sem conta, e um front-end móvel para uma instância auto-hospedada do AnythingLLM, voltado a usuários que já rodam o app de desktop, um contêiner Docker ou uma assinatura do AnythingLLM Cloud e querem os mesmos workspaces, histórico de conversas e documentos no celular.',
        ],
        note: 'RAG (geração aumentada por recuperação) significa que o app busca nos seus próprios documentos os trechos relevantes e os fornece ao modelo de linguagem como contexto, de modo que as respostas se baseiem nos seus arquivos, e não apenas nos dados de treinamento do modelo.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Quem desenvolve o AnythingLLM Mobile?',
        content: [
          '**O AnythingLLM Mobile é desenvolvido pela [Mintplex Labs](https://mintplex.com), empresa fundada por Timothy Carambat, que também criou as versões originais de desktop e servidor do AnythingLLM.** A Mintplex Labs foi fundada em 2022, tem sede em Irvine, Califórnia, e passou pela turma de verão de 2022 da Y Combinator, com financiamento pre-seed de Y Combinator, Goodwater Capital, UpHonest Capital e Orange DAO.',
          'O projeto principal, o AnythingLLM para desktop e servidor — uma "aplicação de IA tudo em um" open source e auto-hospedável para conversar com documentos e criar agentes personalizados — existe há vários anos antes do app móvel e tem uma comunidade própria e numerosa no GitHub, detalhada na [comparação da PromptQuorum entre AnythingLLM, PrivateGPT e Open WebUI](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag). O AnythingLLM Mobile é uma base de código React Native mais nova e separada, que estende os mesmos conceitos de workspace e RAG para o celular.',
        ],
        items: [
          'Empresa: [Mintplex Labs](https://mintplex.com), fundada em 2022 em Irvine, Califórnia, por Timothy Carambat.',
          'Turma de verão de 2022 da Y Combinator; entre os investidores pre-seed estão Y Combinator, Goodwater Capital, UpHonest Capital e Orange DAO.',
          'Também desenvolve: a [aplicação AnythingLLM para desktop/servidor](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) e o VectorAdmin, uma ferramenta open source para gerenciar bancos de dados vetoriais.',
          'Código-fonte do AnythingLLM Mobile: [github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile), licença MIT.',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: 'O AnythingLLM Mobile roda no aparelho ou se conecta a um servidor?',
        content: [
          '**O AnythingLLM Mobile suporta tanto um modo autônomo no aparelho quanto um modo conectado que se pareia com uma instância do AnythingLLM hospedada separadamente — ou seja, não é exclusivamente uma coisa ou outra, e o modo ativo determina o que o app pode fazer.** Confundir os dois modos importa: quem espera uma IA totalmente offline e sem configuração obtém isso no modo autônomo, enquanto quem espera o conjunto completo de recursos de desktop (ferramentas de agentes personalizadas, workspaces de documentos maiores) precisa do modo conectado e de uma instância de desktop, Docker ou Cloud em execução para se parear.',
          'No modo autônomo, segundo a [documentação mobile da própria Mintplex Labs](https://docs.anythingllm.com/mobile/overview) e o [repositório no GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) do app, o celular baixa um modelo de linguagem GGUF pequeno e selecionado e o executa localmente usando o [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile), um mecanismo de inferência baseado em llama.cpp construído para React Native. Um modelo de embedding pequeno e um banco de dados vetorial local também rodam no aparelho, de modo que documentos enviados podem ser divididos em partes, transformados em embeddings e pesquisados para RAG totalmente offline. Nenhuma conta, chave de API ou conexão com a internet são necessárias para conversar depois que o modelo é baixado.',
          'No modo conectado, o celular não executa a inferência daquele workspace por conta própria — ele se pareia com um app AnythingLLM Desktop, uma instância Docker auto-hospedada ou uma assinatura do AnythingLLM Cloud pela rede local (ou pela internet, no caso do Cloud), escaneando um QR code exibido em Settings > Tools > AnythingLLM Mobile daquela instância. A instância de desktop precisa ter a opção "Enable network discovery" ativada em Settings > Admin > General para que o pareamento na rede local funcione. Depois de pareados, conversas, workspaces, threads e ferramentas de agentes personalizadas sincronizam entre o celular e a instância conectada, e o trabalho de LLM, embedding e RAG acontece onde aquela instância está rodando, não no celular.',
        ],
        decisionBlock: {
          title: 'Qual modo você deveria usar?',
          localIf: [
            'Você quer chat com IA e RAG de documentos que funcione offline, sem conta, sem servidor e sem configuração.',
            'Você está testando se a IA no aparelho é rápida o suficiente no seu Android específico antes de se comprometer com algo mais elaborado.',
            'Você não usa — e não quer usar — uma instância de desktop ou servidor do AnythingLLM.',
          ],
          cloudIf: [
            'Você já usa AnythingLLM Desktop, Docker ou AnythingLLM Cloud e quer os mesmos workspaces e histórico de conversas no celular.',
            'Você precisa de ferramentas de agentes personalizadas, bibliotecas de documentos maiores ou um modelo mais capaz do que um celular consegue rodar na prática.',
            'Você quer que vários dispositivos (celular e desktop) fiquem sincronizados em um workspace compartilhado.',
          ],
          quick: [
            'Na dúvida, comece pelo modo autônomo — ele não precisa de mais nada rodando.',
            'Só mude para o modo conectado quando já tiver uma instância de desktop, Docker ou Cloud para parear.',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar a usar o AnythingLLM Mobile',
        content: [
          '**A configuração muda dependendo do modo desejado, segundo a [documentação mobile](https://docs.anythingllm.com/mobile/overview) do próprio app.** O modo autônomo não precisa de nada além de instalar o app; o modo conectado precisa de uma instância existente do AnythingLLM Desktop, Docker ou Cloud para se parear.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o AnythingLLM Mobile na [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) ou como APK direto em [anythingllm.com/mobile](https://anythingllm.com/mobile). Não é preciso criar conta nem cadastrar e-mail para abrir o app.',
          },
          {
            title: 'Escolha o modo autônomo para uso offline',
            whyItMatters: 'Na primeira abertura, o app oferece modelos selecionados para o aparelho, prontos para download. Escolha um de acordo com a RAM do seu aparelho (veja a seção de hardware abaixo) e comece a conversar — nenhuma configuração adicional é necessária para o chat básico e o envio de documentos.',
          },
          {
            title: 'Ou pareie com uma instância auto-hospedada para o modo conectado',
            whyItMatters: 'Se você já usa AnythingLLM Desktop, Docker ou Cloud, ative "network discovery" em Settings > Admin > General dessa instância, e depois abra Settings > Tools > AnythingLLM Mobile na interface de desktop para exibir um QR code de pareamento.',
          },
          {
            title: 'Escaneie o QR code pelo app móvel',
            whyItMatters: 'No AnythingLLM Mobile, use a opção de pareamento/escaneamento para se conectar à instância de desktop ou Cloud. Depois de pareados, os workspaces, conversas e threads dessa instância ficam disponíveis no app móvel, e as atualizações sincronizam entre os dispositivos.',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: 'Como funcionam o chat com documentos e o RAG no celular?',
        itemHeadings: true,
        columns: ['Modo', 'Onde a inferência ocorre', 'RAG / tratamento de documentos'],
        rows: [
          {
            'Modo': 'Autônomo (no aparelho)',
            'Onde a inferência ocorre': 'No celular, via Cactus Compute (mecanismo baseado em llama.cpp para React Native)',
            'RAG / tratamento de documentos': 'Modelo de embedding local + banco de dados vetorial no aparelho; documentos são divididos, transformados em embeddings e pesquisados totalmente offline',
          },
          {
            'Modo': 'Conectado (instância pareada)',
            'Onde a inferência ocorre': 'Na instância pareada do AnythingLLM Desktop, no host Docker ou no Cloud',
            'RAG / tratamento de documentos': 'Usa o banco de dados vetorial e o modelo de embedding configurados dessa instância — o mesmo pipeline de RAG do app de desktop, sincronizado com o celular',
          },
        ],
        note: 'Um workspace criado em um modo não vira automaticamente o do outro modo — um documento enviado a um workspace autônomo no aparelho permanece local naquele celular, a menos que você mude para um workspace conectado pareado com uma instância de desktop/Cloud.',
      },
      platform: {
        id: 'platform-availability',
        title: 'O AnythingLLM Mobile está disponível para iPhone?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidade', 'Observações'],
        rows: [
          {
            'Plataforma': 'Android',
            'Disponibilidade': 'Disponível na [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) e como download direto do APK',
            'Observações': 'Esta é a única plataforma móvel disponível no momento desta análise.',
          },
          {
            'Plataforma': 'iPhone / iPad (iOS)',
            'Disponibilidade': 'Não lançado — nenhuma página na App Store para o AnythingLLM Mobile foi encontrada no momento desta análise',
            'Observações': 'O suporte a iOS foi discutido publicamente no [rastreador de issues do GitHub](https://github.com/Mintplex-Labs/anything-llm/issues/5428) do projeto, mas a PromptQuorum não encontrou nenhum lançamento oficial na App Store nem anúncio da Mintplex Labs confirmando uma data. Não assuma disponibilidade para iOS com base na cobertura de outros sites — verifique diretamente na [App Store](https://apps.apple.com/) antes de esperar por isso.',
          },
          {
            'Plataforma': 'Mac / Windows / Linux',
            'Disponibilidade': 'Não se aplica — essas plataformas usam o [app AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) ou o contêiner Docker separados, não o app móvel',
            'Observações': 'Usuários de iPhone que queiram usar o AnythingLLM hoje devem usar o app de desktop em um Mac, ou recorrer a outro app móvel como [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou [Private LLM](/power-local-llm/private-llm-review).',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Quanto custa o AnythingLLM Mobile?',
        content: [
          '**O AnythingLLM Mobile em si é gratuito para baixar e usar no modo autônomo no aparelho, sem assinatura e sem compra dentro do app, segundo a documentação pública e a página do app na Play Store.** O código-fonte do app móvel é [open source com licença MIT](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE) e público no GitHub.',
          'O custo só entra em cena de acordo com o que você pareia no modo conectado. Rodar seu próprio app AnythingLLM Desktop ou um contêiner Docker para se parear é gratuito e open source, assim como o app móvel. Para quem prefere não se auto-hospedar, a Mintplex Labs vende o [AnythingLLM Cloud](https://anythingllm.com/pricing) como um serviço hospedado à parte: um plano Basic de US$ 50/mês com instância privada e subdomínio personalizado, um plano Pro de US$ 99/mês que adiciona um SLA de suporte de 72 horas voltado a equipes maiores, e um plano Enterprise com preço sob consulta que inclui implantação on-premise, SSO e RBAC. Os dois planos pagos do Cloud exigem que o usuário forneça sua própria chave de API de LLM; o custo do modelo não está incluído.',
        ],
        items: [
          '**App móvel (modo autônomo):** Gratuito, open source com licença MIT, nenhuma assinatura encontrada.',
          '**App móvel (modo conectado):** O recurso de pareamento em si é gratuito; o custo depende inteiramente do que você pareia.',
          '**Instância de Desktop/Docker auto-hospedada para parear:** Gratuita e open source, assim como o app móvel.',
          '**AnythingLLM Cloud Basic:** US$ 50/mês — instância privada, subdomínio personalizado, exige chave de API de LLM própria.',
          '**AnythingLLM Cloud Pro:** US$ 99/mês — adiciona um SLA de suporte de 72 horas, voltado a equipes maiores.',
          '**AnythingLLM Cloud Enterprise:** Preço sob consulta — implantação on-premise, SSO, RBAC, integrações personalizadas.',
        ],
        note: 'Os preços do AnythingLLM Cloud são definidos pela Mintplex Labs em dólares americanos e podem mudar; confira os planos e condições atuais diretamente em [anythingllm.com/pricing](https://anythingllm.com/pricing) antes de assinar.',
      },
      features: {
        id: 'key-features',
        title: 'Quais recursos o AnythingLLM Mobile tem?',
        content: [
          '**A disponibilidade de recursos depende do modo ativo — alguns recursos só existem no modo conectado, segundo a própria documentação mobile do projeto.** Entre eles:',
        ],
        items: [
          '**Chat no aparelho.** Converse com um modelo baixado localmente sem precisar de conexão com a internet após o download inicial.',
          '**RAG de documentos offline.** Envie documentos a um workspace autônomo e obtenha respostas com citações, usando o modelo de embedding e o banco de dados vetorial do aparelho.',
          '**Sincronização de workspaces (somente modo conectado).** Conversas, threads e workspaces criados em uma instância pareada de desktop, Docker ou Cloud sincronizam com o celular e vice-versa.',
          '**Ferramentas de agentes personalizadas (somente modo conectado).** Recursos de chamada de ferramentas configurados na instância de desktop são transferidos para o mobile assim que pareado; o modo autônomo no aparelho não suporta configuração de ferramentas personalizadas.',
          '**Pareamento por QR code.** A conexão com uma instância auto-hospedada usa um QR code exibido nas configurações dessa instância, em vez de digitar manualmente endereços de servidor e credenciais.',
          '**Sem exigência de conta para uso autônomo.** Conversar e usar RAG de documentos no modo autônomo não exige criar uma conta na Mintplex Labs.',
        ],
        note: 'A disponibilidade de recursos pode mudar entre versões do app, já que o projeto lança atualizações com frequência. Confira o changelog dentro do app ou a [página de lançamentos no GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile/releases) para saber o que está ativo na sua versão instalada.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'De que hardware você precisa para rodar o AnythingLLM Mobile?',
        content: [
          '**O modo autônomo no aparelho depende da RAM e da CPU/NPU do próprio celular, assim como qualquer outro app de chat móvel baseado em GGUF — a Mintplex Labs não publicou requisitos exatos de RAM por modelo para os modelos autônomos selecionados, então valem as orientações gerais de dimensionamento para LLMs locais.** Como regra geral para modelos GGUF quantizados em celulares, um modelo pequeno na faixa de 1 a 3 bilhões de parâmetros precisa de aproximadamente 2-3 GB de RAM livre, e modelos maiores que isso precisam de mais RAM proporcionalmente.',
          'O modo conectado praticamente não exige hardware do celular para a inferência, já que o modelo de linguagem roda na instância pareada de desktop, no host Docker ou no Cloud — o celular só precisa de recursos suficientes para rodar a interface do app e sincronizar dados, e os requisitos de hardware reais recaem sobre a máquina que hospeda a instância conectada do AnythingLLM.',
        ],
        items: [
          'Modo autônomo: reserve 2-3 GB ou mais de RAM livre para os menores modelos inclusos; modelos maiores no aparelho precisam de mais.',
          'Armazenamento: algumas centenas de megabytes a alguns gigabytes de espaço livre no aparelho por modelo baixado.',
          'Modo conectado: o hardware do celular não é o gargalo — confira as recomendações de hardware para a máquina que roda sua instância de desktop, Docker ou Cloud.',
          'Rede: o modo autônomo funciona totalmente offline após o download do modelo; o modo conectado precisa de uma rede local compartilhada (ou internet, no caso do Cloud) para alcançar a instância pareada.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o AnythingLLM Mobile é indicado',
        items: [
          '**Usuários Android que querem um app de chat com IA e RAG de documentos genuinamente gratuito e offline.** O modo autônomo não precisa de conta, servidor nem assinatura, o que atende a quem quer IA privada no aparelho com configuração mínima.',
          '**Usuários já existentes do AnythingLLM Desktop, Docker ou Cloud que querem os mesmos workspaces no celular.** A sincronização do modo conectado é o atrativo claro para quem já investe no ecossistema do AnythingLLM de desktop/servidor.',
          '**Usuários confortáveis em escolher entre dois modos distintos.** Aproveitar todo o valor do app significa entender quando usar o modo autônomo e quando usar o conectado, o que combina mais com usuários tecnicamente curiosos do que com quem quer um único comportamento fixo.',
          '**Equipes que querem um front-end móvel sem se auto-hospedar.** Parear um celular Android a uma instância paga do AnythingLLM Cloud dá acesso móvel a workspaces compartilhados sem operar nenhuma infraestrutura própria.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o AnythingLLM Mobile não é indicado',
        items: [
          '**Usuários de iPhone e iPad.** Não há versão para iOS no momento desta análise; use [Private LLM](/power-local-llm/private-llm-review) ou [PocketPal AI](/power-local-llm/pocketpal-ai-review) para aparelhos Apple.',
          '**Usuários que querem um único modo simples, sem decisões a tomar.** A separação entre autônomo e conectado é uma decisão de design real que precisa ser entendida; quem prefere uma experiência única e guiada, com uma lista de modelos curada e sem o conceito de pareamento com servidor, pode preferir [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou [Loci](/power-local-llm/loci-ai-review-offline-local-ai).',
          '**Usuários que querem ferramentas de agentes personalizadas completas sem nenhum servidor.** No design atual deste app, a configuração de ferramentas de agentes personalizadas está atrelada ao modo conectado — quem quiser esse recurso totalmente no aparelho hoje deveria procurar outra opção.',
          '**Usuários que precisam de suporte empresarial sem custo.** O suporte da comunidade é gratuito, mas um SLA de suporte exige uma assinatura paga do AnythingLLM Cloud Pro ou Enterprise, não apenas o app móvel.',
          '**Usuários que querem os maiores modelos possíveis no aparelho.** O modo autônomo é construído em torno de modelos pequenos e selecionados, adequados à RAM de um celular; quem precisar de modelos maiores deve usar o modo conectado com uma instância de desktop capaz, ou diretamente uma configuração de desktop/workstation.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobile vs. alternativas',
        itemHeadings: true,
        columns: ['App', 'No aparelho vs. cliente', 'Plataformas', 'Licença / custo'],
        rows: [
          {
            'App': 'AnythingLLM Mobile',
            'No aparelho vs. cliente': 'Os dois — inferência autônoma no aparelho, ou cliente conectado a uma instância auto-hospedada',
            'Plataformas': 'Só Android',
            'Licença / custo': 'Gratuito, open source (MIT); serviço Cloud pareado a partir de US$ 50/mês',
          },
          {
            'App': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            'No aparelho vs. cliente': 'Roda o LLM e o pipeline de RAG por conta própria, localmente ou via API',
            'Plataformas': 'Mac, Windows, Linux, Docker',
            'Licença / custo': 'Gratuito, open source (MIT); hospedagem Cloud a partir de US$ 50/mês',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'No aparelho vs. cliente': 'Só no aparelho — sem modo servidor/cliente',
            'Plataformas': 'iPhone/iPad, Android',
            'Licença / custo': 'Gratuito, open source (MIT)',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'No aparelho vs. cliente': 'Só no aparelho — sem modo servidor/cliente',
            'Plataformas': 'iPhone/iPad/Mac (só Apple)',
            'Licença / custo': 'Pago, compra única; código fechado',
          },
          {
            'App': 'LLM Farm',
            'No aparelho vs. cliente': 'Só no aparelho, via llama.cpp',
            'Plataformas': 'iPhone/iPad',
            'Licença / custo': 'Gratuito, open source; retirado da App Store em certos momentos de sua história — verifique a disponibilidade atual antes de supor que ele instala',
          },
          {
            'App': 'Layla',
            'No aparelho vs. cliente': 'Só no aparelho, mais provedores de API remotos opcionais',
            'Plataformas': 'Android, iPhone/iPad',
            'Licença / custo': 'Nível gratuito mais níveis pagos; código fechado',
          },
          {
            'App': 'Maid',
            'No aparelho vs. cliente': 'Só no aparelho, via llama.cpp; também suporta endpoints remotos compatíveis com Ollama/OpenAI',
            'Plataformas': 'Android, iPhone/iPad',
            'Licença / custo': 'Gratuito, open source (MIT)',
          },
          {
            'App': 'RikkaHub',
            'No aparelho vs. cliente': 'Os dois — inferência local no aparelho via um provedor LiteRT, mais cliente multiprovedor na nuvem',
            'Plataformas': 'Android',
            'Licença / custo': 'Gratuito, open source',
          },
        ],
        note: 'AnythingLLM Mobile e RikkaHub são os dois apps desta tabela com um design duplo genuíno de aparelho/cliente; todas as outras linhas rodam estritamente no aparelho ou estritamente como cliente, que é a distinção principal a verificar antes de instalar com base em uma única lista de recursos. Verifique as páginas atuais da App Store/Play Store diretamente antes de instalar qualquer app desta tabela, já que a disponibilidade muda.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O AnythingLLM Mobile roda modelos de IA no próprio celular?',
            a: 'Sim, no modo autônomo. O app baixa um modelo de linguagem GGUF pequeno e selecionado e o executa no aparelho via Cactus Compute, um mecanismo de inferência baseado em llama.cpp para React Native, junto com um modelo de embedding local e um banco de dados vetorial para RAG de documentos offline. Separadamente, o app também suporta um modo conectado que se pareia com uma instância auto-hospedada do AnythingLLM Desktop ou Cloud, onde a inferência acontece nessa instância pareada, e não no celular.',
          },
          {
            q: 'O AnythingLLM Mobile está disponível para iPhone?',
            a: 'Não. No momento desta análise, o AnythingLLM Mobile não tem página na App Store e está disponível apenas para Android via Google Play ou download direto do APK. O suporte a iOS foi discutido no rastreador de issues do GitHub do projeto, mas não há anúncio oficial da Mintplex Labs confirmando uma data de lançamento.',
          },
          {
            q: 'O AnythingLLM Mobile é gratuito?',
            a: 'Sim, o app móvel em si é gratuito e open source com licença MIT, sem assinatura para o uso autônomo no aparelho. Se você usar o modo conectado para se parear com uma instância hospedada do AnythingLLM Cloud em vez de se auto-hospedar, esse serviço Cloud separado tem planos pagos a partir de US$ 50/mês — mas o app móvel e as opções de auto-hospedagem em Desktop/Docker continuam gratuitos.',
          },
          {
            q: 'Quem cria o AnythingLLM Mobile?',
            a: 'O AnythingLLM Mobile é criado pela Mintplex Labs, empresa fundada em 2022 por Timothy Carambat, com sede em Irvine, Califórnia. A Mintplex Labs passou pela turma de verão de 2022 da Y Combinator e também desenvolve a aplicação AnythingLLM para desktop/servidor.',
          },
          {
            q: 'Sob qual licença o AnythingLLM Mobile é publicado?',
            a: 'O AnythingLLM Mobile é publicado sob a licença MIT, uma licença open source permissiva, e seu código-fonte é público no GitHub. O projeto AnythingLLM para desktop/servidor ao qual ele pode se conectar também tem licença MIT.',
          },
          {
            q: 'Como conecto o AnythingLLM Mobile à minha instância de desktop?',
            a: 'Ative "network discovery" na sua instância do AnythingLLM Desktop, Docker ou Cloud em Settings > Admin > General, e depois abra Settings > Tools > AnythingLLM Mobile para exibir um QR code de pareamento. Escaneie esse código dentro do app AnythingLLM Mobile para se conectar. Depois de pareados, workspaces, conversas e threads sincronizam entre o celular e a instância conectada.',
          },
          {
            q: 'O AnythingLLM Mobile precisa de conexão com a internet?',
            a: 'Não para o modo autônomo depois do download inicial do modelo — a inferência e o RAG de documentos rodam totalmente no aparelho. O modo conectado precisa de uma rede local compartilhada para alcançar uma instância auto-hospedada de desktop ou Docker, ou de conexão com a internet para alcançar uma instância hospedada do AnythingLLM Cloud.',
          },
          {
            q: 'O AnythingLLM Mobile consegue conversar com meus documentos?',
            a: 'Sim, nos dois modos. No modo autônomo, os documentos são divididos, transformados em embeddings e pesquisados usando um modelo de embedding e um banco de dados vetorial no aparelho, totalmente offline. No modo conectado, a instância pareada de desktop, Docker ou Cloud cuida do RAG de documentos com seu próprio banco de dados vetorial e modelo de embedding configurados, assim como o app de desktop.',
          },
          {
            q: 'Qual é a diferença entre o AnythingLLM Mobile e o app de desktop do AnythingLLM?',
            a: 'O AnythingLLM Mobile é um app Android separado, construído para celulares, com seu próprio modo de inferência autônoma no aparelho, além da capacidade de se conectar a uma instância de desktop. A aplicação AnythingLLM para desktop/servidor, abordada na comparação da PromptQuorum entre AnythingLLM, PrivateGPT e Open WebUI, roda em Mac, Windows, Linux ou Docker e suporta uma variedade maior de provedores de LLM, bancos de dados vetoriais e configurações de agentes do que o modo autônomo do app móvel.',
          },
          {
            q: 'Como o AnythingLLM Mobile se compara ao PocketPal AI ou ao Private LLM?',
            a: 'O PocketPal AI e o Private LLM são apps de chat móvel exclusivamente no aparelho, sem modo de conexão a servidor; o AnythingLLM Mobile é o único app desta comparação com um design duplo genuíno — inferência autônoma no aparelho mais um modo conectado opcional a uma instância auto-hospedada ou na nuvem do AnythingLLM. Escolha o AnythingLLM Mobile se quiser essa flexibilidade ou já usar o AnythingLLM no desktop; escolha o PocketPal AI (gratuito, iPhone/Android) ou o Private LLM (pago, só Apple) se estiver procurando especificamente um app para iPhone, já que o AnythingLLM Mobile só está disponível para Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O design duplo do AnythingLLM Mobile — um modo autônomo genuíno no aparelho ao lado de um modo conectado opcional — é incomum nessa categoria, em que a maioria dos apps móveis de IA se compromete totalmente com uma ou outra arquitetura. Essa flexibilidade também é o maior obstáculo para um usuário iniciante: entender qual modo está ativo, e o que cada modo pode ou não fazer, exige mais atenção inicial do que um app de propósito único como o PocketPal AI ou o Private LLM. A limitação mais importante agora é a plataforma: o AnythingLLM Mobile é exclusivo para Android, sem lançamento na App Store e sem data confirmada para o iOS. Escolha o AnythingLLM Mobile se você usa Android e quer IA offline gratuita com configuração zero, ou se já usa AnythingLLM Desktop, Docker ou Cloud e quer os mesmos workspaces no celular. Escolha Private LLM ou PocketPal AI em vez disso se precisar de um app para iPhone, e use a aplicação de desktop do AnythingLLM diretamente se não precisar de nenhum cliente móvel.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[AnythingLLM Mobile no GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) — código-fonte, licença (MIT) e o uso do Cactus Compute mencionado nesta análise.',
          '[Documentação oficial do AnythingLLM Mobile](https://docs.anythingllm.com/mobile/overview) — modo autônomo vs. conectado, passos de pareamento e configuração da descoberta de rede.',
          '[AnythingLLM Mobile na Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) — disponibilidade no Android e descrição do app.',
          '[Página oficial do AnythingLLM Mobile](https://anythingllm.com/mobile) — links de download e resumo de recursos.',
          '[Preços do AnythingLLM Cloud](https://anythingllm.com/pricing) — planos Basic, Pro e Enterprise mencionados nesta análise.',
          '[Mintplex Labs na Y Combinator](https://www.ycombinator.com/companies/mintplex-labs) — fundação da empresa, turma e histórico.',
          '[Repositório no GitHub da aplicação AnythingLLM para desktop/servidor](https://github.com/Mintplex-Labs/anything-llm) — o projeto complementar ao qual este app móvel pode se conectar.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[AnythingLLM vs. PrivateGPT vs. Open WebUI: qual ferramenta de RAG vence?](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — a comparação da versão de desktop/servidor do AnythingLLM à qual este app móvel pode se conectar.',
          '[Análise do PocketPal AI (2026)](/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita, open source e exclusivamente no aparelho para iPhone e Android.',
          '[Análise do Private LLM](/power-local-llm/private-llm-review) — uma alternativa paga, só para Apple e exclusivamente no aparelho, com um amplo catálogo de modelos integrado.',
          '[Os melhores apps de LLM local para Android em 2026](/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo de apps para Android.',
          '[Análise do Loci: IA offline para iPhone, Android, iPad, Mac e Windows](/power-local-llm/loci-ai-review-offline-local-ai) — uma alternativa curada em cinco plataformas para quem prefere um único modo guiado.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AnythingLLM Mobile: Análise (2026) — Chat + RAG no aparelho',
      description:
        'Análise do AnythingLLM Mobile: app Android gratuito com licença MIT que roda modelos no aparelho E sincroniza com uma instância AnythingLLM auto-hospedada. Status do iOS, preços, RAG.',
      url: 'https://promptquorum.com/pt/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuários Android preocupados com privacidade e usuários já existentes do AnythingLLM Desktop ou auto-hospedado' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: 'Geração aumentada por recuperação' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'LLM local' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AnythingLLM Mobile: Análise (2026)', item: 'https://promptquorum.com/pt/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-ar.webp',
    title: 'مراجعة AnythingLLM Mobile (2026): محادثة + RAG على الجهاز',
    seoTitle: 'AnythingLLM Mobile 2026: تشغيل محلي أم عميل؟',
    intro:
      'تطبيق AnythingLLM Mobile هو تطبيق أندرويد مجاني برخصة MIT من [Mintplex Labs](https://mintplex.com)، يشغّل نموذج لغة صغيرًا وقاعدة بيانات متجهية محلية مباشرة على الهاتف للمحادثة مع المستندات دون اتصال بالإنترنت. كما يمكنه الاقتران بنسخة مستضافة ذاتيًا من [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) أو AnythingLLM Cloud عبر الشبكة المحلية للحصول على كامل ميزات نسخة سطح المكتب. توضح هذه المراجعة بدقة الفرق بين الوضع المستقل على الجهاز والوضع المتصل، وتوفر المنصات الفعلي (أندرويد متاح، iOS ليس بعد)، وسعر التطبيق مقارنة بخدمة AnythingLLM Cloud المنفصلة السعر، ولمن يناسب — ولمن لا يناسب.',
    metaDescription:
      'مراجعة AnythingLLM Mobile: تطبيق أندرويد مجاني برخصة MIT يشغّل النماذج على الجهاز ويتزامن أيضًا مع نسخة AnythingLLM مستضافة ذاتيًا. حالة iOS، الأسعار، RAG.',
    twitterDescription:
      'مراجعة AnythingLLM Mobile 2026: يشغّل نموذجًا على الجهاز للمحادثة دون اتصال، لكنه يقترن أيضًا بنسخة AnythingLLM مستضافة ذاتيًا. أندرويد فقط — لا يوجد تطبيق iOS بعد.',
    audience:
      'مستخدمو أندرويد المهتمون بالخصوصية ومستخدمو AnythingLLM Desktop أو الاستضافة الذاتية الحاليون الباحثون عن رفيق للجوال.',
    readTime: '11 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة AnythingLLM Mobile',
    targetKeywords: [
      'مراجعة anythingllm mobile',
      'anythingllm mobile تطبيق',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile تشغيل محلي',
      'anythingllm mobile vs desktop',
      'anythingllm mobile سعر',
      'محادثة المستندات على الجوال',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**تطبيق AnythingLLM Mobile هو تطبيق أندرويد مجاني برخصة MIT يعمل بطريقتين: بشكل مستقل، عبر تشغيل نموذج لغة صغير مُختار مسبقًا مع قاعدة بيانات متجهية محلية بالكامل على الجهاز للمحادثة مع المستندات وRAG دون اتصال، أو بشكل متصل، عبر مزامنة المحادثات ومساحات العمل والمستندات مع نسخة مستضافة ذاتيًا من [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) أو AnythingLLM Cloud عبر اقتران برمز QR على الشبكة المحلية.** يطوّره [Mintplex Labs](https://mintplex.com)، الشركة المسؤولة عن مشروع AnythingLLM مفتوح المصدر لسطح المكتب والخوادم، ويُنشر على [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) برخصة MIT. وقت كتابة هذه المراجعة، يتوفر التطبيق فقط عبر [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) لأندرويد؛ ولا توجد بعد نسخة على App Store لـ iOS.',
    quickAnswerTop: {
      ar: {
        question: 'هل يشغّل AnythingLLM Mobile النماذج على الهاتف، أم أنه مجرد عميل لخادم؟',
        answer:
          'كلاهما معًا — وهذا قرار تصميم للتطبيق، وليس قيدًا. بشكل افتراضي، يقوم AnythingLLM Mobile بتنزيل نموذج GGUF صغير وتشغيله على الجهاز عبر [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile) (محرك استدلال قائم على llama.cpp مخصص لـ React Native)، مقترنًا بنموذج تضمين محلي وقاعدة بيانات متجهية على الجهاز، بحيث تعمل المحادثة مع المستندات وRAG بالكامل دون اتصال بالإنترنت، ودون حساب أو خادم. بشكل منفصل، يمكن للتطبيق الاقتران عبر رمز QR يظهر في لوحة Settings > Tools لنسخة مستضافة ذاتيًا من AnythingLLM Desktop أو AnythingLLM Cloud، ما يتيح أدوات وكلاء مخصصة ومساحات عمل أكبر ومزامنة بين الأجهزة لا يوفرها الوضع المستقل.',
        bullets: [
          'الوضع المستقل يشغّل نموذجًا صغيرًا مضمّنًا مع قاعدة بيانات متجهية محلية بالكامل على الجهاز — بلا خادم، بلا حساب، ويعمل دون اتصال.',
          'الوضع المتصل يقترن (عبر رمز QR) بنسخة مستضافة ذاتيًا من AnythingLLM Desktop أو Cloud للحصول على أدوات وكلاء مخصصة ومزامنة بين الأجهزة.',
          'أندرويد فقط، عبر [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) أو ملف APK مباشر؛ لا توجد نسخة App Store لـ iOS وقت هذه المراجعة.',
          'مجاني ومفتوح المصدر برخصة MIT؛ خدمة AnythingLLM Cloud المنفصلة، لمن يريد الوضع المتصل دون استضافة ذاتية، تبدأ من 50 دولارًا شهريًا.',
          'يطوّره [Mintplex Labs](https://mintplex.com)، شركة من دفعة Y Combinator (صيف 2022) أسسها Timothy Carambat، وهي أيضًا الجهة المسؤولة عن مشروع AnythingLLM لسطح المكتب/الخادم.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو AnythingLLM Mobile؟', anchor: 'what-is-anythingllm-mobile' },
      { label: 'من طوّر AnythingLLM Mobile؟', anchor: 'history-and-developer' },
      { label: 'هل يعمل على الجهاز أم يتصل بخادم؟', anchor: 'on-device-vs-connected' },
      { label: 'كيفية البدء مع AnythingLLM Mobile', anchor: 'getting-started' },
      { label: 'كيف تعمل محادثة المستندات وRAG على الجوال؟', anchor: 'models-and-rag' },
      { label: 'هل AnythingLLM Mobile متاح على iPhone؟', anchor: 'platform-availability' },
      { label: 'كم تكلفة AnythingLLM Mobile؟', anchor: 'pricing' },
      { label: 'ما ميزات AnythingLLM Mobile؟', anchor: 'key-features' },
      { label: 'ما الأجهزة التي تحتاجها؟', anchor: 'hardware-requirements' },
      { label: 'لمن يناسب AnythingLLM Mobile', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب AnythingLLM Mobile', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobile مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
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
            text: 'AnythingLLM Mobile هو تطبيق أندرويد مجاني برخصة MIT من Mintplex Labs، يشغّل نموذج لغة صغيرًا على الجهاز لمحادثة المستندات دون اتصال، ويمكنه أيضًا الاتصال بنسخة مستضافة ذاتيًا من AnythingLLM Desktop أو Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'ليس مجرد تطبيق تحكم عن بُعد لخادم، وليس أيضًا بديلًا مستقلًا تمامًا عن تطبيق سطح المكتب — بل هو الاثنان معًا: ذكاء اصطناعي مستقل يعمل دون اتصال على هاتفك، وشاشة جوال اختيارية لنسخة سطح مكتب أو سحابية تعمل بالفعل، وأنت من يختار الوضع المناسب لكل مهمة.',
          },
        ],
        items: [
          'مجاني ومفتوح المصدر (رخصة MIT)؛ الكود المصدري للتطبيق متاح للعامة على [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile).',
          'وضعان: استدلال مستقل على الجهاز (محرك Cactus Compute، نموذج GGUF مضمّن، قاعدة بيانات متجهية محلية)، أو وضع متصل يقترن بنسخة سطح مكتب/سحابية مستضافة ذاتيًا عبر رمز QR.',
          'أندرويد فقط وقت هذه المراجعة — متاح عبر [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) وكملف APK مباشر؛ لا توجد نسخة App Store لـ iOS بعد.',
          'يطوّره [Mintplex Labs](https://mintplex.com)، شركة من Y Combinator وهي أيضًا المسؤولة عن [مشروع AnythingLLM لسطح المكتب/الخادم](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag).',
          'التطبيق ذاته لا يتضمن اشتراكًا؛ AnythingLLM Cloud، خدمة الخادم المستضافة المنفصلة التي يقترن بها بعض المستخدمين، تبدأ من 50 دولارًا شهريًا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [مستودع AnythingLLM Mobile العام على GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile)، و[الوثائق الرسمية للجوال](https://docs.anythingllm.com/mobile/overview)، و[صفحة Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)، و[anythingllm.com](https://anythingllm.com/mobile)، جرى التحقق منها في سبتمبر 2026. لم تُجرِ PromptQuorum اختبار أداء عملي مستقل لتطبيق AnythingLLM Mobile لهذه المراجعة — أرقام الأداء أدناه هي إرشادات عامة للأجهزة الخاصة بنماذج اللغة المحلية، وليست قياسات خاصة بهذا التطبيق.',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: 'ما هو AnythingLLM Mobile؟',
        content: [
          '**AnythingLLM Mobile تطبيق أندرويد، منشور برخصة [MIT](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE)، يتيح للهاتف المحادثة مع نموذج لغة ومع المستندات المرفوعة دون الاعتماد على واجهة برمجة تطبيقات سحابية.** وهو قاعدة كود منفصلة عن [مشروع AnythingLLM لسطح المكتب/الخادم](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)، مبني خصيصًا لـ React Native، رغم أن المشروعين من الشركة نفسها ويتشاركان اسم AnythingLLM ومفهوم مساحة العمل.',
          'أفضل طريقة لفهم التطبيق هي اعتباره منتجين في واحد: مساعد ذكاء اصطناعي مستقل على الجهاز يعمل دون إعداد ودون حساب، وواجهة جوال لنسخة AnythingLLM مستضافة ذاتيًا، موجهة لمن يستخدم بالفعل تطبيق سطح المكتب أو حاوية Docker أو اشتراك AnythingLLM Cloud ويريد نفس مساحات العمل وسجل المحادثات والمستندات على الهاتف.',
        ],
        note: 'يعني RAG (التوليد المعزز بالاسترجاع) أن التطبيق يبحث في مستنداتك الخاصة عن المقاطع ذات الصلة ويقدّمها لنموذج اللغة كسياق، بحيث تستند الإجابات إلى ملفاتك وليس فقط إلى بيانات تدريب النموذج.',
      },
      history: {
        id: 'history-and-developer',
        title: 'من طوّر AnythingLLM Mobile؟',
        content: [
          '**يطوّر AnythingLLM Mobile شركة [Mintplex Labs](https://mintplex.com)، التي أسسها Timothy Carambat، وهي أيضًا من أنشأ النسخ الأصلية لسطح المكتب والخادم من AnythingLLM.** تأسست Mintplex Labs عام 2022، ومقرها في إرفاين، كاليفورنيا، وشاركت في دفعة صيف 2022 من Y Combinator، بتمويل تأسيسي من Y Combinator وGoodwater Capital وUpHonest Capital وOrange DAO.',
          'مشروع AnythingLLM الرئيسي لسطح المكتب والخادم — "تطبيق ذكاء اصطناعي شامل" مفتوح المصدر وقابل للاستضافة الذاتية للمحادثة مع المستندات وبناء وكلاء مخصصين — موجود منذ سنوات قبل تطبيق الجوال، وله مجتمع كبير خاص به على GitHub، تناولته بالتفصيل [مقارنة PromptQuorum بين AnythingLLM وPrivateGPT وOpen WebUI](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag). أما AnythingLLM Mobile فهو قاعدة كود React Native أحدث ومنفصلة، تنقل نفس مفاهيم مساحة العمل وRAG إلى الهاتف.',
        ],
        items: [
          'الشركة: [Mintplex Labs](https://mintplex.com)، تأسست عام 2022 في إرفاين، كاليفورنيا، على يد Timothy Carambat.',
          'دفعة صيف 2022 من Y Combinator؛ من بين مستثمري التمويل التأسيسي Y Combinator وGoodwater Capital وUpHonest Capital وOrange DAO.',
          'تطوّر أيضًا: [تطبيق AnythingLLM لسطح المكتب/الخادم](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) وVectorAdmin، أداة مفتوحة المصدر لإدارة قواعد البيانات المتجهية.',
          'الكود المصدري لـ AnythingLLM Mobile: [github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile)، رخصة MIT.',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: 'هل يعمل AnythingLLM Mobile على الجهاز أم يتصل بخادم؟',
        content: [
          '**يدعم AnythingLLM Mobile وضعًا مستقلًا على الجهاز ووضعًا متصلًا يقترن بنسخة AnythingLLM مستضافة بشكل منفصل — أي أنه ليس أحدهما حصريًا، والوضع النشط هو ما يحدد ما يستطيع التطبيق فعله.** الخلط بين الوضعين له أهمية: من يتوقع ذكاءً اصطناعيًا يعمل بالكامل دون اتصال ودون إعداد يحصل على ذلك في الوضع المستقل، بينما من يتوقع كامل ميزات سطح المكتب (أدوات وكلاء مخصصة، مساحات عمل مستندات أكبر) يحتاج إلى الوضع المتصل ونسخة سطح مكتب أو Docker أو Cloud قيد التشغيل للاقتران بها.',
          'في الوضع المستقل، وفق [وثائق الجوال الخاصة بـ Mintplex Labs](https://docs.anythingllm.com/mobile/overview) و[مستودع GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) للتطبيق، يقوم الهاتف بتنزيل نموذج لغة GGUF صغير ومُختار مسبقًا وتشغيله محليًا عبر [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile)، وهو محرك استدلال قائم على llama.cpp مصمم لـ React Native. كما يعمل على الجهاز نموذج تضمين صغير وقاعدة بيانات متجهية محلية، بحيث يمكن تقسيم المستندات المرفوعة إلى أجزاء وتحويلها إلى تضمينات والبحث فيها لأغراض RAG بالكامل دون اتصال بالإنترنت. لا حاجة إلى حساب أو مفتاح API أو اتصال بالإنترنت للمحادثة بعد تنزيل النموذج.',
          'في الوضع المتصل، لا يقوم الهاتف بتنفيذ الاستدلال لتلك المساحة بنفسه — بل يقترن بتطبيق AnythingLLM Desktop، أو نسخة Docker مستضافة ذاتيًا، أو اشتراك AnythingLLM Cloud عبر الشبكة المحلية (أو الإنترنت في حالة Cloud) بمسح رمز QR يظهر ضمن Settings > Tools > AnythingLLM Mobile لتلك النسخة. يجب أن تكون نسخة سطح المكتب قد فعّلت خيار "Enable network discovery" ضمن Settings > Admin > General حتى يعمل الاقتران عبر الشبكة المحلية. بعد الاقتران، تتزامن المحادثات ومساحات العمل والمواضيع وأدوات الوكلاء المخصصة بين الهاتف والنسخة المتصلة، ويحدث عمل نموذج اللغة والتضمين وRAG حيث تعمل تلك النسخة، وليس على الهاتف.',
        ],
        decisionBlock: {
          title: 'أي وضع يجب أن تستخدمه؟',
          localIf: [
            'تريد محادثة ذكاء اصطناعي وRAG للمستندات يعملان دون اتصال بالإنترنت، ودون حساب أو خادم أو إعداد.',
            'تختبر ما إذا كان الذكاء الاصطناعي على الجهاز سريعًا بما يكفي على هاتف أندرويد المحدد لديك قبل الالتزام بالمزيد.',
            'لا تستخدم — ولا تريد استخدام — نسخة سطح مكتب أو خادم من AnythingLLM.',
          ],
          cloudIf: [
            'تستخدم بالفعل AnythingLLM Desktop أو Docker أو AnythingLLM Cloud وتريد نفس مساحات العمل وسجل المحادثات على هاتفك.',
            'تحتاج إلى أدوات وكلاء مخصصة، أو مكتبات مستندات أكبر، أو نموذج أكثر قدرة مما يمكن للهاتف تشغيله عمليًا.',
            'تريد أن تبقى عدة أجهزة (الهاتف وسطح المكتب) متزامنة في مساحة عمل مشتركة.',
          ],
          quick: [
            'إذا كنت غير متأكد، ابدأ بالوضع المستقل — فهو لا يحتاج إلى أي شيء آخر قيد التشغيل.',
            'لا تنتقل إلى الوضع المتصل إلا عندما تكون لديك بالفعل نسخة سطح مكتب أو Docker أو Cloud للاقتران بها.',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيفية البدء مع AnythingLLM Mobile',
        content: [
          '**يختلف الإعداد بحسب الوضع الذي تريده، وفق [وثائق الجوال](https://docs.anythingllm.com/mobile/overview) الخاصة بالتطبيق.** لا يحتاج الوضع المستقل إلى أكثر من تثبيت التطبيق؛ ويحتاج الوضع المتصل إلى نسخة قائمة بالفعل من AnythingLLM Desktop أو Docker أو Cloud للاقتران بها.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل AnythingLLM Mobile من [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) أو كملف APK مباشر من [anythingllm.com/mobile](https://anythingllm.com/mobile). لا حاجة إلى حساب أو تسجيل بالبريد الإلكتروني لفتح التطبيق.',
          },
          {
            title: 'اختر الوضع المستقل للاستخدام دون اتصال',
            whyItMatters: 'عند التشغيل الأول، يعرض التطبيق نماذج مُختارة للجهاز جاهزة للتنزيل. اختر نموذجًا مناسبًا لسعة ذاكرة RAM في جهازك (راجع قسم الأجهزة أدناه) وابدأ المحادثة — لا حاجة إلى إعداد إضافي للمحادثة الأساسية ورفع المستندات.',
          },
          {
            title: 'أو اقترن بنسخة مستضافة ذاتيًا للوضع المتصل',
            whyItMatters: 'إذا كنت تستخدم بالفعل AnythingLLM Desktop أو Docker أو Cloud، فعّل "network discovery" ضمن Settings > Admin > General لتلك النسخة، ثم افتح Settings > Tools > AnythingLLM Mobile في واجهة سطح المكتب لعرض رمز QR للاقتران.',
          },
          {
            title: 'امسح رمز QR من التطبيق الجوال',
            whyItMatters: 'في AnythingLLM Mobile، استخدم خيار الاقتران/المسح للاتصال بنسخة سطح المكتب أو Cloud. بعد الاقتران، تصبح مساحات العمل والمحادثات والمواضيع الخاصة بتلك النسخة متاحة في التطبيق الجوال، وتتزامن التحديثات بين الأجهزة.',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: 'كيف تعمل محادثة المستندات وRAG على الجوال؟',
        itemHeadings: true,
        columns: ['الوضع', 'مكان تنفيذ الاستدلال', 'RAG / معالجة المستندات'],
        rows: [
          {
            'الوضع': 'مستقل (على الجهاز)',
            'مكان تنفيذ الاستدلال': 'على الهاتف، عبر Cactus Compute (محرك قائم على llama.cpp لـ React Native)',
            'RAG / معالجة المستندات': 'نموذج تضمين محلي + قاعدة بيانات متجهية على الجهاز؛ يتم تقسيم المستندات وتحويلها إلى تضمينات والبحث فيها بالكامل دون اتصال',
          },
          {
            'الوضع': 'متصل (نسخة مقترنة)',
            'مكان تنفيذ الاستدلال': 'على نسخة AnythingLLM Desktop المقترنة، أو مضيف Docker، أو Cloud',
            'RAG / معالجة المستندات': 'يستخدم قاعدة البيانات المتجهية ونموذج التضمين المُهيَّأين في تلك النسخة — نفس خط أنابيب RAG الخاص بتطبيق سطح المكتب، متزامن مع الجوال',
          },
        ],
        note: 'مساحة العمل المُنشأة في أحد الوضعين لا تصبح تلقائيًا مساحة عمل الوضع الآخر — المستند المرفوع إلى مساحة عمل مستقلة على الجهاز يظل محليًا على ذلك الهاتف ما لم تنتقل إلى مساحة عمل متصلة مقترنة بنسخة سطح مكتب/Cloud.',
      },
      platform: {
        id: 'platform-availability',
        title: 'هل AnythingLLM Mobile متاح على iPhone؟',
        itemHeadings: true,
        columns: ['المنصة', 'التوفر', 'ملاحظات'],
        rows: [
          {
            'المنصة': 'Android',
            'التوفر': 'متاح على [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) وكتنزيل APK مباشر',
            'ملاحظات': 'هذه هي المنصة الجوالة الوحيدة المتاحة وقت هذه المراجعة.',
          },
          {
            'المنصة': 'iPhone / iPad (iOS)',
            'التوفر': 'غير مُطلق — لم يُعثر على أي صفحة على App Store لـ AnythingLLM Mobile وقت هذه المراجعة',
            'ملاحظات': 'نوقش دعم iOS علنًا في [متتبع المشكلات على GitHub](https://github.com/Mintplex-Labs/anything-llm/issues/5428) الخاص بالمشروع، لكن PromptQuorum لم تجد أي إصدار رسمي على App Store أو إعلانًا من Mintplex Labs يؤكد موعد الإطلاق. لا تفترض توفر النسخة على iOS استنادًا إلى تغطية مواقع أخرى — تحقّق مباشرة من [App Store](https://apps.apple.com/) قبل توقّع ذلك.',
          },
          {
            'المنصة': 'Mac / Windows / Linux',
            'التوفر': 'غير قابل للتطبيق — تستخدم هذه المنصات [تطبيق AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) أو حاوية Docker المنفصلة، وليس تطبيق الجوال',
            'ملاحظات': 'مستخدمو iPhone الراغبون في استخدام AnythingLLM اليوم يجب أن يستخدموا تطبيق سطح المكتب على جهاز Mac، أو يلجأوا إلى تطبيق جوال آخر مثل [PocketPal AI](/power-local-llm/pocketpal-ai-review) أو [Private LLM](/power-local-llm/private-llm-review).',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'كم تكلفة AnythingLLM Mobile؟',
        content: [
          '**تطبيق AnythingLLM Mobile ذاته مجاني للتنزيل والاستخدام في الوضع المستقل على الجهاز، دون اشتراك ودون أي عملية شراء داخل التطبيق، وفقًا للوثائق العامة وصفحة التطبيق على Play Store.** الكود المصدري للتطبيق الجوال [مفتوح المصدر برخصة MIT](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE) ومتاح للعامة على GitHub.',
          'تظهر التكلفة فقط بحسب ما يقترن به الوضع المتصل. تشغيل تطبيق AnythingLLM Desktop الخاص بك أو حاوية Docker للاقتران بها أمر مجاني ومفتوح المصدر، تمامًا مثل التطبيق الجوال. لمن يفضل عدم الاستضافة الذاتية، تبيع Mintplex Labs [AnythingLLM Cloud](https://anythingllm.com/pricing) كخدمة مستضافة بشكل منفصل: خطة Basic بسعر 50 دولارًا شهريًا تتضمن نسخة خاصة ونطاقًا فرعيًا مخصصًا، وخطة Pro بسعر 99 دولارًا شهريًا تضيف اتفاقية دعم بمدة استجابة 72 ساعة موجهة للفرق الكبيرة، وخطة Enterprise بسعر مخصص تشمل النشر داخل المؤسسة وSSO وRBAC. تتطلب كلتا خطتي Cloud المدفوعتين أن يوفّر المستخدم مفتاح API الخاص به لنموذج اللغة؛ تكلفة النموذج غير مشمولة.',
        ],
        items: [
          '**التطبيق الجوال (الوضع المستقل):** مجاني، مفتوح المصدر برخصة MIT، لم يُعثر على أي اشتراك.',
          '**التطبيق الجوال (الوضع المتصل):** ميزة الاقتران ذاتها مجانية؛ وتعتمد التكلفة كليًا على ما يتم الاقتران به.',
          '**نسخة سطح مكتب/Docker مستضافة ذاتيًا للاقتران:** مجانية ومفتوحة المصدر، تمامًا مثل التطبيق الجوال.',
          '**AnythingLLM Cloud Basic:** 50 دولارًا شهريًا — نسخة خاصة، نطاق فرعي مخصص، يتطلب مفتاح API خاصًا لنموذج اللغة.',
          '**AnythingLLM Cloud Pro:** 99 دولارًا شهريًا — يضيف اتفاقية دعم بمدة استجابة 72 ساعة، موجهة للفرق الكبيرة.',
          '**AnythingLLM Cloud Enterprise:** سعر مخصص — نشر داخل المؤسسة، SSO، RBAC، تكاملات مخصصة.',
        ],
        note: 'تحدد Mintplex Labs أسعار AnythingLLM Cloud بالدولار الأمريكي وقد تتغير؛ تحقّق من الخطط والشروط الحالية مباشرة عبر [anythingllm.com/pricing](https://anythingllm.com/pricing) قبل الاشتراك.',
      },
      features: {
        id: 'key-features',
        title: 'ما ميزات AnythingLLM Mobile؟',
        content: [
          '**يعتمد توفر الميزات على الوضع النشط — بعض القدرات لا تتوفر إلا في الوضع المتصل، وفقًا لوثائق الجوال الخاصة بالمشروع نفسه.** وتشمل هذه الميزات:',
        ],
        items: [
          '**المحادثة على الجهاز.** تحدّث مع نموذج مُنزَّل محليًا دون الحاجة إلى اتصال بالإنترنت بعد التنزيل الأولي.',
          '**RAG للمستندات دون اتصال.** ارفع مستندات إلى مساحة عمل مستقلة واحصل على إجابات مع استشهادات، باستخدام نموذج التضمين وقاعدة البيانات المتجهية الموجودين على الجهاز.',
          '**مزامنة مساحات العمل (الوضع المتصل فقط).** تتزامن المحادثات والمواضيع ومساحات العمل المُنشأة على نسخة سطح مكتب أو Docker أو Cloud مقترنة مع الهاتف والعكس.',
          '**أدوات وكلاء مخصصة (الوضع المتصل فقط).** تنتقل قدرات استدعاء الأدوات المُهيَّأة على نسخة سطح المكتب إلى الجوال بعد الاقتران؛ لا يدعم الوضع المستقل على الجهاز تهيئة أدوات مخصصة.',
          '**اقتران برمز QR.** يستخدم الاتصال بنسخة مستضافة ذاتيًا رمز QR يظهر في إعدادات تلك النسخة، بدلًا من إدخال عناوين الخادم وبيانات الاعتماد يدويًا.',
          '**لا حاجة لحساب في الاستخدام المستقل.** لا تتطلب المحادثة واستخدام RAG للمستندات في الوضع المستقل إنشاء حساب لدى Mintplex Labs.',
        ],
        note: 'قد يتغير توفر الميزات بين إصدارات التطبيق لأن المشروع يصدر تحديثات متكررة. راجع سجل التغييرات داخل التطبيق أو [صفحة الإصدارات على GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile/releases) لمعرفة ما هو متاح في نسختك المثبتة.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'ما الأجهزة التي تحتاجها لتشغيل AnythingLLM Mobile؟',
        content: [
          '**يعتمد الوضع المستقل على الجهاز على ذاكرة RAM ووحدة المعالجة المركزية/العصبية في الهاتف نفسه، تمامًا مثل أي تطبيق محادثة جوال آخر قائم على GGUF — لم تنشر Mintplex Labs متطلبات RAM دقيقة لكل نموذج من النماذج المستقلة المُختارة، لذا تنطبق الإرشادات العامة لأحجام نماذج اللغة المحلية.** كقاعدة عامة لنماذج GGUF المكمَّمة على الهواتف، يحتاج نموذج صغير في نطاق 1 إلى 3 مليار معامل إلى نحو 2-3 غيغابايت من ذاكرة RAM الحرة، وتحتاج النماذج الأكبر من ذلك إلى المزيد بشكل متناسب.',
          'الوضع المتصل لا يفرض عمليًا أي متطلبات أجهزة على الهاتف للاستدلال، لأن نموذج اللغة يعمل على نسخة سطح المكتب المقترنة أو مضيف Docker أو Cloud — يحتاج الهاتف فقط إلى موارد كافية لتشغيل واجهة التطبيق ومزامنة البيانات، وتنتقل متطلبات الأجهزة الحقيقية إلى الجهاز الذي يستضيف نسخة AnythingLLM المتصلة.',
        ],
        items: [
          'الوضع المستقل: احسب حسابًا لـ 2-3 غيغابايت أو أكثر من ذاكرة RAM الحرة لأصغر النماذج المضمّنة؛ وتحتاج النماذج الأكبر على الجهاز إلى المزيد.',
          'التخزين: من بضع مئات من الميغابايت إلى بضعة غيغابايتات من مساحة التخزين الحرة لكل نموذج مُنزَّل على الجهاز.',
          'الوضع المتصل: أجهزة الهاتف ليست عنق الزجاجة — راجع بدلًا من ذلك توصيات الأجهزة الخاصة بالجهاز الذي يشغّل نسخة سطح المكتب أو Docker أو Cloud لديك.',
          'الشبكة: يعمل الوضع المستقل بالكامل دون اتصال بعد تنزيل النموذج؛ ويحتاج الوضع المتصل إلى شبكة محلية مشتركة (أو اتصال بالإنترنت في حالة Cloud) للوصول إلى النسخة المقترنة.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب AnythingLLM Mobile',
        items: [
          '**مستخدمو أندرويد الراغبون في تطبيق محادثة ذكاء اصطناعي وRAG للمستندات مجاني حقًا ويعمل دون اتصال.** لا يحتاج الوضع المستقل إلى حساب أو خادم أو اشتراك، وهو ما يناسب من يريد ذكاءً اصطناعيًا خاصًا على الجهاز بأقل إعداد ممكن.',
          '**مستخدمو AnythingLLM Desktop أو Docker أو Cloud الحاليون الراغبون في نفس مساحات العمل على هواتفهم.** تُعد مزامنة الوضع المتصل الميزة الواضحة لمن استثمر بالفعل في منظومة AnythingLLM لسطح المكتب/الخادم.',
          '**المستخدمون المرتاحون للاختيار بين وضعين مختلفين.** يتطلب الاستفادة الكاملة من التطبيق فهم متى تستخدم الوضع المستقل ومتى تستخدم الوضع المتصل، وهو ما يناسب المستخدمين الفضوليين تقنيًا أكثر من من يريد سلوكًا واحدًا ثابتًا.',
          '**الفرق الراغبة في واجهة جوال دون استضافة ذاتية.** يمنح اقتران هاتف أندرويد بنسخة مدفوعة من AnythingLLM Cloud وصولًا جوالًا إلى مساحات عمل مشتركة دون تشغيل أي بنية تحتية بأنفسهم.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب AnythingLLM Mobile',
        items: [
          '**مستخدمو iPhone وiPad.** لا توجد نسخة iOS وقت هذه المراجعة؛ استخدم [Private LLM](/power-local-llm/private-llm-review) أو [PocketPal AI](/power-local-llm/pocketpal-ai-review) لأجهزة Apple بدلًا من ذلك.',
          '**المستخدمون الراغبون في وضع واحد بسيط دون قرارات يجب اتخاذها.** الفصل بين المستقل والمتصل هو قرار تصميم حقيقي يجب فهمه؛ من يفضل تجربة موحّدة وموجَّهة بقائمة نماذج منتقاة دون مفهوم الاقتران بخادم قد يفضل [PocketPal AI](/power-local-llm/pocketpal-ai-review) أو [Loci](/power-local-llm/loci-ai-review-offline-local-ai).',
          '**المستخدمون الراغبون في أدوات وكلاء مخصصة كاملة دون أي خادم.** في التصميم الحالي لهذا التطبيق، ترتبط تهيئة أدوات الوكلاء المخصصة بالوضع المتصل — ومن يريد هذه القدرة بالكامل على الجهاز اليوم يجب أن يبحث عن خيار آخر.',
          '**المستخدمون الذين يحتاجون دعمًا للمؤسسات دون تكلفة.** دعم المجتمع مجاني، لكن اتفاقية مستوى الدعم تتطلب اشتراكًا مدفوعًا في AnythingLLM Cloud Pro أو Enterprise، وليس التطبيق الجوال وحده.',
          '**المستخدمون الراغبون في أكبر النماذج الممكنة على الجهاز.** الوضع المستقل مصمم حول نماذج صغيرة ومختارة تناسب ذاكرة RAM في الهاتف؛ ومن يحتاج إلى نماذج أكبر يجب أن يستخدم الوضع المتصل مع نسخة سطح مكتب قادرة، أو إعداد سطح مكتب/محطة عمل مباشرة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobile مقابل البدائل',
        itemHeadings: true,
        columns: ['التطبيق', 'على الجهاز مقابل عميل', 'المنصات', 'الرخصة / التكلفة'],
        rows: [
          {
            'التطبيق': 'AnythingLLM Mobile',
            'على الجهاز مقابل عميل': 'كلاهما — استدلال مستقل على الجهاز، أو عميل متصل بنسخة مستضافة ذاتيًا',
            'المنصات': 'أندرويد فقط',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (MIT)؛ خدمة Cloud المقترنة تبدأ من 50 دولارًا شهريًا',
          },
          {
            'التطبيق': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            'على الجهاز مقابل عميل': 'يشغّل نموذج اللغة وخط أنابيب RAG بنفسه، محليًا أو عبر API',
            'المنصات': 'Mac وWindows وLinux وDocker',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (MIT)؛ استضافة Cloud تبدأ من 50 دولارًا شهريًا',
          },
          {
            'التطبيق': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'على الجهاز مقابل عميل': 'على الجهاز فقط — لا يوجد وضع خادم/عميل',
            'المنصات': 'iPhone/iPad، Android',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (MIT)',
          },
          {
            'التطبيق': '[Private LLM](/power-local-llm/private-llm-review)',
            'على الجهاز مقابل عميل': 'على الجهاز فقط — لا يوجد وضع خادم/عميل',
            'المنصات': 'iPhone/iPad/Mac (Apple فقط)',
            'الرخصة / التكلفة': 'مدفوع، شراء لمرة واحدة؛ مغلق المصدر',
          },
          {
            'التطبيق': 'LLM Farm',
            'على الجهاز مقابل عميل': 'على الجهاز فقط، عبر llama.cpp',
            'المنصات': 'iPhone/iPad',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر؛ أُزيل من App Store في فترات من تاريخه — تحقّق من التوفر الحالي قبل افتراض إمكانية تثبيته',
          },
          {
            'التطبيق': 'Layla',
            'على الجهاز مقابل عميل': 'على الجهاز فقط، بالإضافة إلى مزودي API عن بُعد اختياريين',
            'المنصات': 'Android، iPhone/iPad',
            'الرخصة / التكلفة': 'مستوى مجاني بالإضافة إلى مستويات مدفوعة؛ مغلق المصدر',
          },
          {
            'التطبيق': 'Maid',
            'على الجهاز مقابل عميل': 'على الجهاز فقط، عبر llama.cpp؛ يدعم أيضًا نقاط نهاية عن بُعد متوافقة مع Ollama/OpenAI',
            'المنصات': 'Android، iPhone/iPad',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (MIT)',
          },
          {
            'التطبيق': 'RikkaHub',
            'على الجهاز مقابل عميل': 'كلاهما — استدلال محلي على الجهاز عبر مزود LiteRT، بالإضافة إلى عميل سحابي متعدد المزودين',
            'المنصات': 'Android',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر',
          },
        ],
        note: 'يُعد AnythingLLM Mobile وRikkaHub التطبيقين الوحيدين في هذا الجدول اللذين يتمتعان بتصميم مزدوج حقيقي بين الجهاز والعميل؛ تعمل جميع الصفوف الأخرى إما على الجهاز بشكل صارم أو كعميل بشكل صارم، وهذا هو الفارق الأساسي الذي يجب التحقق منه قبل التثبيت اعتمادًا على قائمة ميزات واحدة فقط. تحقّق مباشرة من صفحات App Store/Play Store الحالية قبل تثبيت أي تطبيق في هذا الجدول، لأن التوفر قابل للتغيير.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يشغّل AnythingLLM Mobile نماذج ذكاء اصطناعي على الهاتف نفسه؟',
            a: 'نعم، في الوضع المستقل. يقوم التطبيق بتنزيل نموذج لغة GGUF صغير ومُختار مسبقًا وتشغيله على الجهاز عبر Cactus Compute، وهو محرك استدلال قائم على llama.cpp مخصص لـ React Native، إلى جانب نموذج تضمين محلي وقاعدة بيانات متجهية لـ RAG للمستندات دون اتصال. بشكل منفصل، يدعم التطبيق أيضًا وضعًا متصلًا يقترن بنسخة مستضافة ذاتيًا من AnythingLLM Desktop أو Cloud، حيث يحدث الاستدلال على تلك النسخة المقترنة بدلًا من الهاتف.',
          },
          {
            q: 'هل AnythingLLM Mobile متاح على iPhone؟',
            a: 'لا. وقت كتابة هذه المراجعة، لا توجد صفحة على App Store لـ AnythingLLM Mobile، وهو متاح فقط لأندرويد عبر Google Play أو تنزيل APK مباشر. نوقش دعم iOS في متتبع المشكلات على GitHub الخاص بالمشروع، لكن لا يوجد إعلان رسمي من Mintplex Labs يؤكد موعد إطلاق.',
          },
          {
            q: 'هل AnythingLLM Mobile مجاني؟',
            a: 'نعم، التطبيق الجوال نفسه مجاني ومفتوح المصدر برخصة MIT، دون اشتراك للاستخدام المستقل على الجهاز. إذا استخدمت الوضع المتصل للاقتران بنسخة مستضافة من AnythingLLM Cloud بدلًا من الاستضافة الذاتية، فإن تلك الخدمة السحابية المنفصلة تحتوي على خطط مدفوعة تبدأ من 50 دولارًا شهريًا — لكن التطبيق الجوال وخيارات الاستضافة الذاتية عبر سطح المكتب/Docker تبقى مجانية.',
          },
          {
            q: 'من يصنع AnythingLLM Mobile؟',
            a: 'يصنع AnythingLLM Mobile شركة Mintplex Labs، التي أسسها Timothy Carambat عام 2022، ومقرها في إرفاين، كاليفورنيا. شاركت Mintplex Labs في دفعة صيف 2022 من Y Combinator، وتطوّر أيضًا تطبيق AnythingLLM لسطح المكتب/الخادم.',
          },
          {
            q: 'ما الرخصة التي يُنشر بها AnythingLLM Mobile؟',
            a: 'يُنشر AnythingLLM Mobile برخصة MIT، وهي رخصة مفتوحة المصدر متساهلة، وكوده المصدري متاح للعامة على GitHub. مشروع AnythingLLM لسطح المكتب/الخادم الذي يمكنه الاتصال به يحمل أيضًا رخصة MIT.',
          },
          {
            q: 'كيف أصل AnythingLLM Mobile بنسخة سطح المكتب الخاصة بي؟',
            a: 'فعّل "network discovery" في نسخة AnythingLLM Desktop أو Docker أو Cloud الخاصة بك ضمن Settings > Admin > General، ثم افتح Settings > Tools > AnythingLLM Mobile لعرض رمز QR للاقتران. امسح ذلك الرمز داخل تطبيق AnythingLLM Mobile للاتصال. بعد الاقتران، تتزامن مساحات العمل والمحادثات والمواضيع بين الهاتف والنسخة المتصلة.',
          },
          {
            q: 'هل يحتاج AnythingLLM Mobile إلى اتصال بالإنترنت؟',
            a: 'ليس للوضع المستقل بعد تنزيل النموذج الأولي — يعمل الاستدلال وRAG للمستندات بالكامل على الجهاز. ويحتاج الوضع المتصل إلى شبكة محلية مشتركة للوصول إلى نسخة سطح مكتب أو Docker مستضافة ذاتيًا، أو اتصال بالإنترنت للوصول إلى نسخة مستضافة من AnythingLLM Cloud.',
          },
          {
            q: 'هل يستطيع AnythingLLM Mobile المحادثة مع مستنداتي؟',
            a: 'نعم، في كلا الوضعين. في الوضع المستقل، تُقسَّم المستندات وتُحوَّل إلى تضمينات ويُبحث فيها باستخدام نموذج تضمين وقاعدة بيانات متجهية على الجهاز، بالكامل دون اتصال. وفي الوضع المتصل، تتولى النسخة المقترنة من سطح المكتب أو Docker أو Cloud معالجة RAG للمستندات بقاعدة بياناتها المتجهية ونموذج التضمين الخاصين بها، تمامًا مثل تطبيق سطح المكتب.',
          },
          {
            q: 'ما الفرق بين AnythingLLM Mobile وتطبيق سطح المكتب AnythingLLM؟',
            a: 'AnythingLLM Mobile هو تطبيق أندرويد منفصل مبني للهواتف، له وضع استدلال مستقل خاص به على الجهاز بالإضافة إلى القدرة على الاتصال بنسخة سطح مكتب. أما تطبيق AnythingLLM لسطح المكتب/الخادم، الذي تناولته مقارنة PromptQuorum بين AnythingLLM وPrivateGPT وOpen WebUI، فيعمل على Mac وWindows وLinux أو Docker، ويدعم مجموعة أوسع من مزودي نماذج اللغة وقواعد البيانات المتجهية وتهيئات الوكلاء مقارنة بالوضع المستقل في التطبيق الجوال.',
          },
          {
            q: 'كيف يقارن AnythingLLM Mobile بـ PocketPal AI أو Private LLM؟',
            a: 'PocketPal AI وPrivate LLM تطبيقا محادثة جوال يعملان حصريًا على الجهاز دون وضع اتصال بخادم؛ أما AnythingLLM Mobile فهو التطبيق الوحيد في هذه المقارنة الذي يتمتع بتصميم مزدوج حقيقي — استدلال مستقل على الجهاز بالإضافة إلى وضع متصل اختياري بنسخة AnythingLLM مستضافة ذاتيًا أو سحابية. اختر AnythingLLM Mobile إذا أردت هذه المرونة أو كنت تستخدم بالفعل AnythingLLM على سطح المكتب؛ واختر PocketPal AI (مجاني، iPhone/Android) أو Private LLM (مدفوع، Apple فقط) إذا كنت تبحث تحديدًا عن تطبيق لـ iPhone، لأن AnythingLLM Mobile متاح فقط لأندرويد.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يُعد التصميم المزدوج لـ AnythingLLM Mobile — وضع مستقل حقيقي على الجهاز إلى جانب وضع متصل اختياري — أمرًا غير معتاد في هذه الفئة، حيث تلتزم معظم تطبيقات الذكاء الاصطناعي الجوالة بمعمارية واحدة بالكامل. وتُعد هذه المرونة أيضًا أكبر عقبة أمام المستخدم الجديد: فهم أي وضع نشط، وما يستطيع كل وضع فعله وما لا يستطيعه، يتطلب اهتمامًا أوليًا أكبر من تطبيق أحادي الغرض مثل PocketPal AI أو Private LLM. أما القيد الأكبر حاليًا فهو المنصة: AnythingLLM Mobile مقتصر على أندرويد، دون إصدار على App Store ودون موعد مؤكد لـ iOS. اختر AnythingLLM Mobile إذا كنت تستخدم أندرويد وتريد إما ذكاءً اصطناعيًا مجانيًا يعمل دون اتصال بلا إعداد، أو كنت تستخدم بالفعل AnythingLLM Desktop أو Docker أو Cloud وتريد نفس مساحات العمل على هاتفك. واختر Private LLM أو PocketPal AI بدلًا من ذلك إذا كنت بحاجة إلى تطبيق لـ iPhone، واستخدم تطبيق سطح المكتب الخاص بـ AnythingLLM مباشرة إذا لم تكن بحاجة إلى أي عميل جوال على الإطلاق.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[AnythingLLM Mobile على GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) — الكود المصدري والرخصة (MIT) واستخدام Cactus Compute المشار إليه في هذه المراجعة.',
          '[الوثائق الرسمية لـ AnythingLLM Mobile](https://docs.anythingllm.com/mobile/overview) — الوضع المستقل مقابل المتصل، وخطوات الاقتران، وإعداد اكتشاف الشبكة.',
          '[AnythingLLM Mobile على Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) — توفر أندرويد ووصف التطبيق.',
          '[الصفحة الرسمية لـ AnythingLLM Mobile](https://anythingllm.com/mobile) — روابط التنزيل ونظرة عامة على الميزات.',
          '[أسعار AnythingLLM Cloud](https://anythingllm.com/pricing) — خطط Basic وPro وEnterprise المشار إليها في هذه المراجعة.',
          '[Mintplex Labs على Y Combinator](https://www.ycombinator.com/companies/mintplex-labs) — تأسيس الشركة ودفعتها وخلفيتها.',
          '[مستودع GitHub لتطبيق AnythingLLM لسطح المكتب/الخادم](https://github.com/Mintplex-Labs/anything-llm) — المشروع المكمل الذي يمكن لهذا التطبيق الجوال الاتصال به.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[AnythingLLM مقابل PrivateGPT مقابل Open WebUI: أي أداة RAG تفوز؟](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — مقارنة نسخة سطح المكتب/الخادم من AnythingLLM التي يمكن لهذا التطبيق الجوال الاتصال بها.',
          '[مراجعة PocketPal AI (2026)](/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر يعمل حصريًا على الجهاز لـ iPhone وAndroid.',
          '[مراجعة Private LLM](/power-local-llm/private-llm-review) — بديل مدفوع، حصري لأجهزة Apple ويعمل على الجهاز فقط، بكتالوج نماذج كبير مدمج.',
          '[أفضل تطبيقات LLM المحلية لأندرويد في 2026](/power-local-llm/best-local-llm-apps-android-2026) — الاستعراض الأوسع لتطبيقات أندرويد.',
          '[مراجعة Loci: ذكاء اصطناعي دون اتصال لـ iPhone وAndroid وiPad وMac وWindows](/power-local-llm/loci-ai-review-offline-local-ai) — بديل منتقى عبر خمس منصات لمن يفضل وضعًا موجَّهًا واحدًا.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة AnythingLLM Mobile (2026): محادثة + RAG على الجهاز',
      description:
        'مراجعة AnythingLLM Mobile: تطبيق أندرويد مجاني برخصة MIT يشغّل النماذج على الجهاز ويتزامن أيضًا مع نسخة AnythingLLM مستضافة ذاتيًا. حالة iOS، الأسعار، RAG.',
      url: 'https://promptquorum.com/ar/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'ar',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مستخدمو أندرويد المهتمون بالخصوصية ومستخدمو AnythingLLM Desktop أو الاستضافة الذاتية الحاليون' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: 'التوليد المعزز بالاسترجاع' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'نموذج لغة محلي' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة AnythingLLM Mobile (2026)', item: 'https://promptquorum.com/ar/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-zh.webp',
    title: 'AnythingLLM Mobile评测（2026）：设备端聊天+RAG',
    seoTitle: 'AnythingLLM Mobile 2026：本地运行还是客户端？',
    intro:
      'AnythingLLM Mobile是[Mintplex Labs](https://mintplex.com)开发的免费、MIT许可的Android应用，可直接在手机上运行小型语言模型和本地向量数据库，实现离线文档聊天。它还可以通过局域网与自托管的[AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)或AnythingLLM Cloud实例配对，使用桌面版的完整功能。本评测将准确说明设备端独立模式与连接模式的区别、各平台的真实可用性（Android已上线，iOS尚未支持）、该应用与单独计价的AnythingLLM Cloud服务之间的价格差异，以及它适合谁、不适合谁。',
    metaDescription:
      'AnythingLLM Mobile评测：免费、MIT许可的Android应用，既能在设备端运行模型，又能与自托管的AnythingLLM实例同步。iOS状态、价格、RAG详解。',
    twitterDescription:
      'AnythingLLM Mobile 2026评测：为离线聊天在设备端运行模型，同时也可与自托管的AnythingLLM实例配对。目前仅支持Android，尚无iOS应用。',
    audience:
      '注重隐私的Android用户，以及希望获得移动端配套工具的现有AnythingLLM桌面版/自托管用户。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AnythingLLM Mobile评测',
    targetKeywords: [
      'anythingllm mobile评测',
      'anythingllm mobile应用',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile 本地运行',
      'anythingllm mobile vs desktop',
      'anythingllm mobile价格',
      '手机文档聊天',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**AnythingLLM Mobile是一款免费、MIT许可的Android应用，支持两种工作方式：独立模式下，在设备上完整运行一个经过挑选的小型语言模型和本地向量数据库，实现离线文档聊天和RAG；连接模式下，通过局域网扫描二维码配对，将聊天记录、工作区和文档与自托管的[AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)或AnythingLLM Cloud实例同步。** 开发方是[Mintplex Labs](https://mintplex.com)，即桌面版/服务器版AnythingLLM开源项目的开发公司，代码发布在[GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile)，采用MIT许可证。截至本评测时，该应用仅通过[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)提供Android版本；尚无iOS版App Store上架。',
    quickAnswerTop: {
      zh: {
        question: 'AnythingLLM Mobile是在手机上运行模型，还是只是服务器的客户端？',
        answer:
          '两者都是——这是应用的设计选择，而非局限。默认情况下，AnythingLLM Mobile会下载一个小型GGUF模型，通过[Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile)（一款专为React Native打造的基于llama.cpp的推理引擎）在设备端运行，并配合本地嵌入模型和设备端向量数据库，使文档聊天与RAG完全离线运行，无需账号、无需服务器。此外，该应用还可以通过自托管AnythingLLM Desktop或AnythingLLM Cloud实例的Settings > Tools面板中显示的二维码进行配对，从而解锁自定义智能体工具、更大的工作区以及跨设备同步，这些是独立模式所不具备的。',
        bullets: [
          '独立模式在设备端完整运行内置的小型模型和本地向量数据库——无需服务器、无需账号，可离线运行。',
          '连接模式通过扫描二维码与自托管的AnythingLLM Desktop或Cloud实例配对，可使用自定义智能体工具和跨设备同步。',
          '仅支持Android，可通过[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)或直接下载APK获取；截至本评测时尚无iOS版App Store上架。',
          '免费、MIT许可的开源软件；对于想使用连接模式又不想自行搭建服务器的用户，独立计价的AnythingLLM Cloud服务起价为每月50美元。',
          '由[Mintplex Labs](https://mintplex.com)开发，该公司出自Y Combinator（2022年夏季批次），创始人为Timothy Carambat，同时也是桌面版/服务器版AnythingLLM项目的开发方。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'AnythingLLM Mobile是什么？', anchor: 'what-is-anythingllm-mobile' },
      { label: '谁开发了AnythingLLM Mobile？', anchor: 'history-and-developer' },
      { label: '它是在设备端运行还是连接服务器？', anchor: 'on-device-vs-connected' },
      { label: '如何开始使用AnythingLLM Mobile', anchor: 'getting-started' },
      { label: '手机上的文档聊天与RAG是如何工作的？', anchor: 'models-and-rag' },
      { label: 'AnythingLLM Mobile支持iPhone吗？', anchor: 'platform-availability' },
      { label: 'AnythingLLM Mobile的价格是多少？', anchor: 'pricing' },
      { label: 'AnythingLLM Mobile有哪些功能？', anchor: 'key-features' },
      { label: '需要什么样的硬件？', anchor: 'hardware-requirements' },
      { label: '谁适合使用AnythingLLM Mobile', anchor: 'who-should-use' },
      { label: '谁不适合使用AnythingLLM Mobile', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobile与其他替代方案对比', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '参考来源', anchor: 'sources' },
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
            text: 'AnythingLLM Mobile是Mintplex Labs开发的免费、MIT许可的Android应用，可在设备端运行小型语言模型以实现离线文档聊天，也可以连接自托管的AnythingLLM Desktop或Cloud实例。',
          },
          {
            type: 'plain-terms',
            text: '它既不只是服务器的远程遥控应用，也不是完全独立的桌面版替代品——它同时具备两种属性：一台手机上的独立离线AI，以及一个可选的、面向已在运行的桌面或云端实例的移动端窗口，具体使用哪种模式由用户根据任务自行选择。',
          },
        ],
        items: [
          '免费开源（MIT许可）；移动端应用源代码公开发布在[GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile)。',
          '双模式：设备端独立推理（Cactus Compute引擎、内置GGUF模型、本地向量数据库），或通过二维码与自托管的桌面/云端实例配对的连接模式。',
          '截至本评测时仅支持Android——可通过[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)或直接下载APK获取；尚无iOS版App Store上架。',
          '由[Mintplex Labs](https://mintplex.com)开发，这是一家Y Combinator出身的公司，同时也负责[桌面版/服务器版AnythingLLM项目](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)。',
          '移动端应用本身没有订阅费；部分用户配对使用的独立托管服务AnythingLLM Cloud起价为每月50美元。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于公开的[AnythingLLM Mobile GitHub仓库](https://github.com/Mintplex-Labs/anythingllm-mobile)、官方[移动端文档](https://docs.anythingllm.com/mobile/overview)、[Google Play应用页面](https://play.google.com/store/apps/details?id=com.anythingllm)以及[anythingllm.com](https://anythingllm.com/mobile)，核实时间为2026年9月。PromptQuorum并未针对本评测对AnythingLLM Mobile进行独立的实测基准测试——以下性能数据是本地LLM的一般硬件参考指标，而非针对该应用的实际测量结果。',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: 'AnythingLLM Mobile是什么？',
        content: [
          '**AnythingLLM Mobile是一款采用[MIT许可证](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE)发布的Android应用，让手机无需依赖云端API即可与语言模型和上传的文档进行对话。** 它是与[桌面版/服务器版AnythingLLM项目](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)独立的代码库，专为React Native构建，不过两个项目来自同一家公司，共享AnythingLLM这一名称及工作区概念。',
          '理解这款应用的最佳方式，是将其视为"二合一"产品：一是无需任何设置、无需账号即可使用的独立设备端AI助手；二是面向已经在使用桌面应用、Docker容器或AnythingLLM Cloud订阅服务的用户，让他们在手机上获得相同的工作区、聊天记录和文档的移动端前端。',
        ],
        note: 'RAG（检索增强生成）是指应用在你自己的文档中检索相关段落，并将其作为上下文提供给语言模型，从而让回答基于你自己的文件，而不仅仅基于模型的训练数据。',
      },
      history: {
        id: 'history-and-developer',
        title: '谁开发了AnythingLLM Mobile？',
        content: [
          '**AnythingLLM Mobile由[Mintplex Labs](https://mintplex.com)开发，该公司由Timothy Carambat创立，也是最初开发桌面版和服务器版AnythingLLM的公司。** Mintplex Labs成立于2022年，总部位于美国加利福尼亚州尔湾市，曾参加Y Combinator 2022年夏季批次，天使轮投资方包括Y Combinator、Goodwater Capital、UpHonest Capital和Orange DAO。',
          '桌面版/服务器版AnythingLLM旗舰项目——一款开源、可自托管、用于文档聊天和构建自定义智能体的"一体化AI应用程序"——比移动端应用早出现数年，在GitHub上拥有庞大的社区，[PromptQuorum的AnythingLLM对比PrivateGPT对比Open WebUI文章](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)对其有详细介绍。AnythingLLM Mobile则是一个更新、独立的React Native代码库，将相同的工作区和RAG理念延伸到了手机上。',
        ],
        items: [
          '公司：[Mintplex Labs](https://mintplex.com)，2022年由Timothy Carambat在美国加利福尼亚州尔湾市创立。',
          'Y Combinator 2022年夏季批次；天使轮投资方包括Y Combinator、Goodwater Capital、UpHonest Capital和Orange DAO。',
          '同时开发：[桌面版/服务器版AnythingLLM应用程序](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)，以及用于管理向量数据库的开源工具VectorAdmin。',
          'AnythingLLM Mobile源代码：[github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile)，MIT许可证。',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: 'AnythingLLM Mobile是在设备端运行还是连接服务器？',
        content: [
          '**AnythingLLM Mobile同时支持设备端独立模式和连接到单独托管的AnythingLLM实例的连接模式——也就是说它并非只属于其中一种，当前激活的模式决定了应用能做什么。** 混淆这两种模式很重要：期望完全离线、无需设置的AI体验的用户可以在独立模式下获得这种体验；而期望获得桌面版完整功能（自定义智能体工具、更大的文档工作区）的用户，则需要连接模式以及一个正在运行、可供配对的桌面、Docker或Cloud实例。',
          '在独立模式下，根据[Mintplex Labs官方的移动端文档](https://docs.anythingllm.com/mobile/overview)以及该应用的[GitHub仓库](https://github.com/Mintplex-Labs/anythingllm-mobile)，手机会下载一个经过挑选的小型GGUF语言模型，并通过[Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile)（一款专为React Native打造的基于llama.cpp的推理引擎）在本地运行。同时，一个小型嵌入模型和本地向量数据库也会在设备端运行，使上传的文档能够完全离线地被分块、生成嵌入并检索，用于RAG。模型下载完成后，聊天无需账号、API密钥或互联网连接。',
          '在连接模式下，手机本身不会为该工作区执行推理——而是通过扫描该实例Settings > Tools > AnythingLLM Mobile面板中显示的二维码，通过局域网（若是Cloud则通过互联网）与AnythingLLM Desktop应用、自托管的Docker实例或AnythingLLM Cloud订阅服务配对。桌面端实例需要在Settings > Admin > General中开启"启用网络发现"选项，局域网配对才能正常工作。配对完成后，聊天记录、工作区、话题以及自定义智能体工具会在手机与所连接的实例之间同步，而LLM、嵌入和RAG的实际工作是在该实例运行的地方完成的，而不是在手机上。',
        ],
        decisionBlock: {
          title: '应该使用哪种模式？',
          localIf: [
            '你希望AI聊天和文档RAG完全离线运行，无需账号、无需服务器、无需设置。',
            '在投入更多之前，你想先测试设备端AI在你这台具体的Android设备上是否足够快。',
            '你没有运行——也不打算运行——AnythingLLM的桌面或服务器实例。',
          ],
          cloudIf: [
            '你已经在使用AnythingLLM Desktop、Docker或AnythingLLM Cloud，并希望在手机上获得相同的工作区和聊天记录。',
            '你需要自定义智能体工具、更大的文档库，或者一个手机实际无法承载的更强大的模型。',
            '你希望多台设备（手机和桌面）通过一个共享工作区保持同步。',
          ],
          quick: [
            '如果不确定，先从独立模式开始——它不需要其他任何服务在运行。',
            '只有在你已经拥有可供配对的桌面、Docker或Cloud实例时，才切换到连接模式。',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用AnythingLLM Mobile',
        content: [
          '**根据该应用自己的[移动端文档](https://docs.anythingllm.com/mobile/overview)，设置方式取决于你想使用哪种模式。** 独立模式除了安装应用外无需其他操作；连接模式则需要一个已经存在的AnythingLLM Desktop、Docker或Cloud实例来配对。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)下载AnythingLLM Mobile，或从[anythingllm.com/mobile](https://anythingllm.com/mobile)直接下载APK。打开应用无需账号或邮箱注册。',
          },
          {
            title: '选择独立模式进行离线使用',
            whyItMatters: '首次启动时，应用会提供经过挑选的设备端模型供下载。根据设备的RAM选择合适的模型（参见下方硬件部分），即可开始聊天——基础聊天和文档上传无需其他设置。',
          },
          {
            title: '或与自托管实例配对以使用连接模式',
            whyItMatters: '如果你已经在使用AnythingLLM Desktop、Docker或Cloud，请在该实例的Settings > Admin > General中启用"网络发现"，然后在桌面端界面打开Settings > Tools > AnythingLLM Mobile以显示配对二维码。',
          },
          {
            title: '在移动端应用中扫描二维码',
            whyItMatters: '在AnythingLLM Mobile中，使用配对/扫描选项连接到桌面或Cloud实例。配对完成后，该实例的工作区、聊天记录和话题将在移动端应用中可用，并在设备之间同步更新。',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: '手机上的文档聊天与RAG是如何工作的？',
        itemHeadings: true,
        columns: ['模式', '推理运行位置', 'RAG／文档处理方式'],
        rows: [
          {
            '模式': '独立模式（设备端）',
            '推理运行位置': '在手机上，通过Cactus Compute（专为React Native打造的基于llama.cpp的引擎）',
            'RAG／文档处理方式': '本地嵌入模型+设备端向量数据库；文档完全离线地被分块、生成嵌入并检索',
          },
          {
            '模式': '连接模式（配对实例）',
            '推理运行位置': '在配对的AnythingLLM Desktop、Docker主机或Cloud实例上',
            'RAG／文档处理方式': '使用该实例已配置的向量数据库和嵌入模型——与桌面应用相同的RAG流程，同步至移动端',
          },
        ],
        note: '在一种模式下创建的工作区不会自动变成另一种模式的工作区——上传到独立设备端工作区的文档会保留在该手机本地，除非你切换到与桌面/Cloud实例配对的连接工作区。',
      },
      platform: {
        id: 'platform-availability',
        title: 'AnythingLLM Mobile支持iPhone吗？',
        itemHeadings: true,
        columns: ['平台', '可用性', '备注'],
        rows: [
          {
            '平台': 'Android',
            '可用性': '可通过[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)获取，也可直接下载APK',
            '备注': '截至本评测时，这是唯一已上线的移动平台。',
          },
          {
            '平台': 'iPhone / iPad（iOS）',
            '可用性': '尚未发布——截至本评测时，未找到AnythingLLM Mobile的App Store上架页面',
            '备注': 'iOS支持已在该项目的[GitHub问题跟踪页](https://github.com/Mintplex-Labs/anything-llm/issues/5428)上公开讨论过，但PromptQuorum未找到任何官方App Store发布记录，也未找到Mintplex Labs确认发布日期的公告。不要仅凭其他网站的报道就假定iOS版已可用——在期待之前，请直接在[App Store](https://apps.apple.com/)上核实。',
          },
          {
            '平台': 'Mac / Windows / Linux',
            '可用性': '不适用——这些平台使用的是单独的[AnythingLLM Desktop应用](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)或Docker容器，而非移动端应用',
            '备注': '想立即使用AnythingLLM的iPhone用户，应在Mac上使用桌面应用，或改用其他移动端应用，如[PocketPal AI](/power-local-llm/pocketpal-ai-review)或[Private LLM](/power-local-llm/private-llm-review)。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'AnythingLLM Mobile的价格是多少？',
        content: [
          '**根据公开文档和应用在Play Store上的介绍，AnythingLLM Mobile本身在独立设备端模式下下载和使用都是免费的，没有订阅费，也没有应用内购买项目。** 移动端应用的源代码采用[MIT许可证开源](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE)，公开发布在GitHub上。',
          '费用只会因连接模式所配对的对象而产生。自行运行AnythingLLM Desktop应用或Docker容器来进行配对，和移动端应用一样是免费开源的。如果不想自行搭建，Mintplex Labs还提供独立托管服务[AnythingLLM Cloud](https://anythingllm.com/pricing)：Basic套餐每月50美元，含私有实例和自定义子域名；Pro套餐每月99美元，在此基础上增加72小时支持SLA，面向更大规模的团队；以及需要单独报价的Enterprise套餐，包含本地部署、SSO和RBAC。两个付费Cloud套餐都要求用户自行提供LLM API密钥，模型使用费用不包含在内。',
        ],
        items: [
          '**移动端应用（独立模式）：** 免费，MIT许可证开源，未发现任何订阅费。',
          '**移动端应用（连接模式）：** 配对功能本身免费；费用完全取决于配对的对象。',
          '**用于配对的自托管桌面/Docker实例：** 与移动端应用一样，免费且开源。',
          '**AnythingLLM Cloud Basic：** 每月50美元——私有实例、自定义子域名，需自行提供LLM API密钥。',
          '**AnythingLLM Cloud Pro：** 每月99美元——增加72小时支持SLA，面向更大规模的团队。',
          '**AnythingLLM Cloud Enterprise：** 单独报价——本地部署、SSO、RBAC、定制集成。',
        ],
        note: 'AnythingLLM Cloud的价格由Mintplex Labs以美元设定，可能会有变动；订阅前请直接前往[anythingllm.com/pricing](https://anythingllm.com/pricing)确认最新套餐和条款。',
      },
      features: {
        id: 'key-features',
        title: 'AnythingLLM Mobile有哪些功能？',
        content: [
          '**功能的可用性取决于当前激活的模式——根据该项目自身的移动端文档，部分功能仅在连接模式下才可用。** 具体包括：',
        ],
        items: [
          '**设备端聊天。** 与本地下载的模型进行对话，首次下载完成后无需互联网连接。',
          '**离线文档RAG。** 将文档上传到独立工作区，利用设备端的嵌入模型和向量数据库，获得带引用的回答。',
          '**工作区同步（仅限连接模式）。** 在配对的桌面、Docker或Cloud实例上创建的聊天记录、话题和工作区会与手机双向同步。',
          '**自定义智能体工具（仅限连接模式）。** 在桌面端实例上配置的工具调用功能，在配对后会同步到移动端；设备端独立模式不支持自定义工具配置。',
          '**二维码配对。** 与自托管实例的连接使用该实例设置界面中显示的二维码，而不是手动输入服务器地址和凭据。',
          '**独立使用无需账号。** 独立模式下的聊天和文档RAG无需创建Mintplex Labs账号。',
        ],
        note: '由于该项目频繁发布更新，功能的可用性可能因应用版本而异。请查看应用内更新日志或[GitHub发布页面](https://github.com/Mintplex-Labs/anythingllm-mobile/releases)，了解你安装的版本中实际生效的功能。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '运行AnythingLLM Mobile需要什么样的硬件？',
        content: [
          '**设备端独立模式依赖手机自身的RAM和CPU/NPU，这与其他任何基于GGUF的移动端聊天应用一样——Mintplex Labs并未公布独立模式所选模型的确切RAM需求，因此适用本地LLM的一般规模参考标准。** 作为手机上量化GGUF模型的一般经验法则，参数量在10亿到30亿之间的小型模型大约需要2-3 GB的空闲RAM，超过这一规模的模型则需要按比例增加更多RAM。',
          '连接模式对手机硬件几乎没有推理相关的要求，因为语言模型是在配对的桌面、Docker主机或Cloud实例上运行的——手机只需要足够的资源来运行应用界面并同步数据，真正的硬件需求转移到了托管所连接AnythingLLM实例的那台机器上。',
        ],
        items: [
          '独立模式：为最小的内置模型预留2-3 GB以上的空闲RAM；更大的设备端模型需要更多。',
          '存储：每个下载的设备端模型需要几百兆字节到几吉字节不等的空闲存储空间。',
          '连接模式：手机硬件不是瓶颈——请改为参考运行你的桌面、Docker或Cloud实例的那台机器的硬件建议。',
          '网络：独立模式在模型下载完成后完全离线运行；连接模式需要共享的局域网（若是Cloud则需要互联网连接）才能访问配对的实例。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用AnythingLLM Mobile',
        items: [
          '**希望获得真正免费、离线运行的AI聊天和文档RAG应用的Android用户。** 独立模式无需账号、服务器或订阅，适合希望以最少设置获得私密设备端AI体验的用户。',
          '**希望在手机上获得相同工作区的现有AnythingLLM Desktop、Docker或Cloud用户。** 对于已经投入桌面版/服务器版AnythingLLM生态系统的用户来说，连接模式的同步能力是明显的优势。',
          '**能够接受在两种不同模式之间做出选择的用户。** 要充分发挥这款应用的价值，就需要理解何时使用独立模式、何时使用连接模式，这更适合技术上有好奇心的用户，而非只想要单一固定行为的用户。',
          '**希望在不自行搭建的情况下获得移动端前端的团队。** 将Android手机与付费的AnythingLLM Cloud实例配对，可以在不自行运营任何基础设施的情况下，通过移动端访问共享工作区。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用AnythingLLM Mobile',
        items: [
          '**iPhone和iPad用户。** 截至本评测时尚无iOS版本；Apple设备用户应改用[Private LLM](/power-local-llm/private-llm-review)或[PocketPal AI](/power-local-llm/pocketpal-ai-review)。',
          '**希望使用单一简单模式、无需做任何决策的用户。** 独立模式与连接模式的划分是一个需要理解的真实设计选择；更喜欢单一、有引导性体验，使用精选模型列表且不涉及服务器配对概念的用户，可能更适合[PocketPal AI](/power-local-llm/pocketpal-ai-review)或[Loci](/power-local-llm/loci-ai-review-offline-local-ai)。',
          '**希望在不使用任何服务器的情况下获得完整自定义智能体工具的用户。** 在这款应用当前的设计中，自定义智能体工具的配置与连接模式绑定——希望今天就完全在设备端实现该功能的用户应考虑其他方案。',
          '**需要免费企业级支持的用户。** 社区支持是免费的，但支持SLA需要付费的AnythingLLM Cloud Pro或Enterprise订阅，仅靠移动端应用无法获得。',
          '**希望使用尽可能大的设备端模型的用户。** 独立模式围绕适合手机RAM的小型精选模型设计；需要更大模型的用户，应使用连接模式配合一台性能足够的桌面实例，或者直接使用桌面/工作站配置。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobile与其他替代方案对比',
        itemHeadings: true,
        columns: ['应用', '设备端 vs. 客户端', '平台', '许可证／费用'],
        rows: [
          {
            '应用': 'AnythingLLM Mobile',
            '设备端 vs. 客户端': '两者兼具——设备端独立推理，或作为客户端连接自托管实例',
            '平台': '仅限Android',
            '许可证／费用': '免费，开源（MIT）；配对使用的Cloud服务起价每月50美元',
          },
          {
            '应用': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            '设备端 vs. 客户端': '自行运行LLM和RAG流程，可本地运行或通过API调用',
            '平台': 'Mac、Windows、Linux、Docker',
            '许可证／费用': '免费，开源（MIT）；Cloud托管起价每月50美元',
          },
          {
            '应用': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            '设备端 vs. 客户端': '仅设备端——无服务器/客户端模式',
            '平台': 'iPhone/iPad、Android',
            '许可证／费用': '免费，开源（MIT）',
          },
          {
            '应用': '[Private LLM](/power-local-llm/private-llm-review)',
            '设备端 vs. 客户端': '仅设备端——无服务器/客户端模式',
            '平台': 'iPhone/iPad/Mac（仅限Apple）',
            '许可证／费用': '付费，一次性购买；闭源',
          },
          {
            '应用': 'LLM Farm',
            '设备端 vs. 客户端': '仅设备端，通过llama.cpp',
            '平台': 'iPhone/iPad',
            '许可证／费用': '免费，开源；曾在其发展历程中一度从App Store下架——安装前请核实当前可用性',
          },
          {
            '应用': 'Layla',
            '设备端 vs. 客户端': '仅设备端，另可选配远程API提供商',
            '平台': 'Android、iPhone/iPad',
            '许可证／费用': '免费层级加付费层级；闭源',
          },
          {
            '应用': 'Maid',
            '设备端 vs. 客户端': '仅设备端，通过llama.cpp；也支持兼容Ollama/OpenAI的远程端点',
            '平台': 'Android、iPhone/iPad',
            '许可证／费用': '免费，开源（MIT）',
          },
          {
            '应用': 'RikkaHub',
            '设备端 vs. 客户端': '两者兼具——通过LiteRT提供商实现本地设备端推理，另加多提供商云端客户端',
            '平台': 'Android',
            '许可证／费用': '免费，开源',
          },
        ],
        note: 'AnythingLLM Mobile和RikkaHub是本表中唯二真正采用设备端/客户端双重设计的应用；其余各行要么严格在设备端运行，要么严格作为客户端运行，这是仅凭单一功能列表就决定安装前需要核实的关键区别。安装本表中任何应用前，请直接核实最新的App Store/Play Store页面，因为可用性可能会发生变化。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'AnythingLLM Mobile是在手机本身上运行AI模型吗？',
            a: '是的，在独立模式下是这样。该应用会下载一个经过挑选的小型GGUF语言模型，并通过Cactus Compute（一款专为React Native打造的基于llama.cpp的推理引擎）在设备端运行，同时配合本地嵌入模型和向量数据库用于离线文档RAG。此外，该应用还支持与自托管的AnythingLLM Desktop或Cloud实例配对的连接模式，在该模式下推理发生在配对的实例上，而不是手机上。',
          },
          {
            q: 'AnythingLLM Mobile支持iPhone吗？',
            a: '不支持。截至本评测时，AnythingLLM Mobile没有App Store上架页面，仅通过Google Play或直接下载APK提供Android版本。iOS支持已在该项目的GitHub问题跟踪页上被讨论过，但Mintplex Labs并未官方公布确认的发布日期。',
          },
          {
            q: 'AnythingLLM Mobile是免费的吗？',
            a: '是的，移动端应用本身免费，且采用MIT许可证开源，独立设备端使用无需订阅。如果你使用连接模式与托管的AnythingLLM Cloud实例配对，而不是自行搭建，那么这项独立的Cloud服务提供起价每月50美元的付费套餐——但移动端应用本身以及桌面/Docker自托管选项仍然免费。',
          },
          {
            q: 'AnythingLLM Mobile是谁开发的？',
            a: 'AnythingLLM Mobile由Mintplex Labs开发，该公司于2022年由Timothy Carambat创立，总部位于美国加利福尼亚州尔湾市。Mintplex Labs曾参加Y Combinator 2022年夏季批次，同时也开发桌面版/服务器版AnythingLLM应用程序。',
          },
          {
            q: 'AnythingLLM Mobile采用什么许可证发布？',
            a: 'AnythingLLM Mobile采用MIT许可证发布，这是一种宽松的开源许可证，其源代码公开发布在GitHub上。该应用可以连接的桌面版/服务器版AnythingLLM项目同样采用MIT许可证。',
          },
          {
            q: '如何将AnythingLLM Mobile连接到我的桌面实例？',
            a: '在你的AnythingLLM Desktop、Docker或Cloud实例中，前往Settings > Admin > General启用"网络发现"，然后打开Settings > Tools > AnythingLLM Mobile以显示配对二维码。在AnythingLLM Mobile应用内扫描该二维码即可连接。配对完成后，工作区、聊天记录和话题会在手机与所连接的实例之间同步。',
          },
          {
            q: 'AnythingLLM Mobile需要互联网连接吗？',
            a: '独立模式在初次下载模型后不需要——推理和文档RAG完全在设备端运行。连接模式则需要共享的局域网才能访问自托管的桌面或Docker实例，或需要互联网连接才能访问托管的AnythingLLM Cloud实例。',
          },
          {
            q: 'AnythingLLM Mobile能与我的文档对话吗？',
            a: '可以，两种模式都支持。在独立模式下，文档会通过设备端的嵌入模型和本地向量数据库完全离线地被分块、生成嵌入并检索。在连接模式下，配对的桌面、Docker或Cloud实例会使用其自身配置的向量数据库和嵌入模型来处理文档RAG，方式与桌面应用相同。',
          },
          {
            q: 'AnythingLLM Mobile与桌面版AnythingLLM应用有什么区别？',
            a: 'AnythingLLM Mobile是专为手机构建的独立Android应用，除了可以连接桌面实例外，还拥有自己独立的设备端推理模式。PromptQuorum的AnythingLLM对比PrivateGPT对比Open WebUI一文中介绍的桌面版/服务器版AnythingLLM应用程序，运行在Mac、Windows、Linux或Docker上，支持比移动端应用独立模式更广泛的LLM提供商、向量数据库和智能体配置。',
          },
          {
            q: 'AnythingLLM Mobile与PocketPal AI或Private LLM相比如何？',
            a: 'PocketPal AI和Private LLM是纯设备端的移动聊天应用，没有服务器连接模式；而AnythingLLM Mobile是本对比中唯一采用真正双重设计的应用——既有设备端独立推理，又有可选的连接模式，可连接自托管或云端的AnythingLLM实例。如果你需要这种灵活性，或者已经在桌面上使用AnythingLLM，就选择AnythingLLM Mobile；如果你专门需要一款iPhone应用，由于AnythingLLM Mobile仅支持Android，请选择PocketPal AI（免费，iPhone/Android）或Private LLM（付费，仅限Apple）。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'AnythingLLM Mobile的双重设计——真正的设备端独立模式与可选的连接模式并存——在这一品类中并不常见，因为大多数移动端AI应用都会完全押注于其中一种架构。这种灵活性同时也是初次使用者面临的最大障碍：要弄清楚当前激活的是哪种模式、每种模式能做什么不能做什么，需要比PocketPal AI或Private LLM这类单一用途应用花费更多的前期精力。目前更大的限制在于平台：AnythingLLM Mobile仅支持Android，没有App Store发布记录，也没有确认的iOS发布日期。如果你使用Android，并且要么想要设置为零的免费离线AI，要么已经在使用AnythingLLM Desktop、Docker或Cloud并希望在手机上获得相同的工作区，那么AnythingLLM Mobile值得选择。如果你需要一款iPhone应用，请改选Private LLM或PocketPal AI；如果你根本不需要移动端客户端，直接使用桌面版AnythingLLM应用程序即可。',
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[GitHub上的AnythingLLM Mobile](https://github.com/Mintplex-Labs/anythingllm-mobile) — 本评测所参考的源代码、许可证（MIT）以及Cactus Compute的使用情况。',
          '[AnythingLLM Mobile官方文档](https://docs.anythingllm.com/mobile/overview) — 独立模式与连接模式的区别、配对步骤以及网络发现设置。',
          '[Google Play上的AnythingLLM Mobile](https://play.google.com/store/apps/details?id=com.anythingllm) — Android可用性和应用介绍。',
          '[AnythingLLM Mobile官方页面](https://anythingllm.com/mobile) — 下载链接和功能概览。',
          '[AnythingLLM Cloud价格](https://anythingllm.com/pricing) — 本评测中提到的Basic、Pro和Enterprise套餐价格。',
          '[Mintplex Labs在Y Combinator上的信息](https://www.ycombinator.com/companies/mintplex-labs) — 公司创立、批次和背景信息。',
          '[桌面版/服务器版AnythingLLM应用程序的GitHub仓库](https://github.com/Mintplex-Labs/anything-llm) — 这款移动端应用可以连接的配套项目。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[AnythingLLM对比PrivateGPT对比Open WebUI：哪款RAG工具更胜一筹？](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — 这款移动端应用可以连接的桌面版/服务器版AnythingLLM对比文章。',
          '[PocketPal AI评测（2026）](/power-local-llm/pocketpal-ai-review) — 一款面向iPhone和Android的免费、开源、纯设备端替代方案。',
          '[Private LLM评测](/power-local-llm/private-llm-review) — 一款付费、仅限Apple、纯设备端的替代方案，内置庞大的模型目录。',
          '[2026年Android最佳本地LLM应用](/power-local-llm/best-local-llm-apps-android-2026) — 更全面的Android应用汇总。',
          '[Loci评测：适用于iPhone、Android、iPad、Mac和Windows的离线AI](/power-local-llm/loci-ai-review-offline-local-ai) — 面向希望使用单一引导模式用户的五平台精选替代方案。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AnythingLLM Mobile评测（2026）：设备端聊天+RAG',
      description:
        'AnythingLLM Mobile评测：免费、MIT许可的Android应用，既能在设备端运行模型，又能与自托管的AnythingLLM实例同步。iOS状态、价格、RAG详解。',
      url: 'https://promptquorum.com/zh/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'zh',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '注重隐私的Android用户，以及现有的AnythingLLM桌面版/自托管用户' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: '检索增强生成' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: '本地LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AnythingLLM Mobile评测（2026）', item: 'https://promptquorum.com/zh/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/anythingllm-mobile-review-hero-ko.webp',
    title: 'AnythingLLM Mobile 리뷰(2026): 온디바이스 채팅 + RAG',
    seoTitle: 'AnythingLLM Mobile 2026: 온디바이스인가 클라이언트인가',
    intro:
      'AnythingLLM Mobile은 [Mintplex Labs](https://mintplex.com)가 개발한 무료 MIT 라이선스 Android 앱으로, 소형 언어 모델과 로컬 벡터 데이터베이스를 스마트폰에서 직접 실행하여 오프라인으로 문서와 대화할 수 있습니다. 또한 로컬 네트워크를 통해 자체 호스팅된 [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) 또는 AnythingLLM Cloud 인스턴스와 페어링하여 데스크톱 버전의 모든 기능을 사용할 수도 있습니다. 이 리뷰에서는 독립형 온디바이스 모드와 연결 모드가 정확히 어떻게 다른지, 실제 플랫폼 지원 현황(Android는 제공, iOS는 아직 미제공), 모바일 앱 가격과 별도로 과금되는 AnythingLLM Cloud 서비스의 차이, 그리고 어떤 사람에게 적합하고 적합하지 않은지를 설명합니다.',
    metaDescription:
      'AnythingLLM Mobile 리뷰: 모델을 온디바이스로 실행하면서 자체 호스팅된 AnythingLLM 인스턴스와도 동기화할 수 있는 무료 MIT 라이선스 Android 앱. iOS 지원 현황, 가격, RAG를 정리했습니다.',
    twitterDescription:
      'AnythingLLM Mobile 2026 리뷰: 오프라인 채팅을 위해 모델을 온디바이스로 실행하면서도 자체 호스팅된 AnythingLLM 인스턴스와 페어링할 수 있습니다. Android 전용이며 iOS 앱은 아직 없습니다.',
    audience:
      '개인정보를 중시하는 Android 사용자와 모바일 연동을 원하는 기존 AnythingLLM Desktop/자체 호스팅 사용자.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AnythingLLM Mobile 리뷰',
    targetKeywords: [
      'anythingllm mobile 리뷰',
      'anythingllm mobile 앱',
      'anythingllm android',
      'anythingllm ios',
      'anythingllm mobile 온디바이스',
      'anythingllm mobile vs desktop',
      'anythingllm mobile 가격',
      '스마트폰 문서 채팅',
    ],
    current_models_mentioned: ['Cactus Compute', 'llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**AnythingLLM Mobile은 무료 MIT 라이선스 Android 앱으로 두 가지 방식으로 작동합니다. 독립형 모드에서는 엄선된 소형 언어 모델과 로컬 벡터 데이터베이스를 기기에서 완전히 실행하여 오프라인 문서 채팅과 RAG를 지원하고, 연결 모드에서는 로컬 네트워크에서 QR 코드 페어링을 통해 자체 호스팅된 [AnythingLLM Desktop](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) 또는 AnythingLLM Cloud 인스턴스와 채팅, 워크스페이스, 문서를 동기화합니다.** 개발사는 데스크톱/서버용 AnythingLLM 오픈소스 프로젝트를 개발한 [Mintplex Labs](https://mintplex.com)이며, [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile)에 MIT 라이선스로 공개되어 있습니다. 본 리뷰 시점 기준으로 이 앱은 [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)를 통해 Android에서만 제공되며, iOS용 App Store 출시는 아직 없습니다.',
    quickAnswerTop: {
      ko: {
        question: 'AnythingLLM Mobile은 스마트폰에서 모델을 실행하나요, 아니면 서버용 클라이언트에 불과한가요?',
        answer:
          '둘 다입니다 — 이는 제약이 아니라 앱의 설계 방식입니다. 기본적으로 AnythingLLM Mobile은 소형 GGUF 모델을 다운로드하여 React Native용 llama.cpp 기반 추론 엔진인 [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile)를 통해 기기에서 실행하며, 로컬 임베딩 모델과 온디바이스 벡터 데이터베이스를 함께 사용해 문서 채팅과 RAG가 계정이나 서버 없이 완전히 오프라인으로 작동하도록 합니다. 별도로, 자체 호스팅된 AnythingLLM Desktop 또는 AnythingLLM Cloud 인스턴스의 Settings > Tools 패널에 표시되는 QR 코드를 통해 페어링할 수도 있으며, 이를 통해 독립형 모드에서는 제공되지 않는 사용자 정의 에이전트 도구, 더 큰 워크스페이스, 기기 간 동기화를 사용할 수 있습니다.',
        bullets: [
          '독립형 모드는 내장된 소형 모델과 로컬 벡터 DB를 기기에서 완전히 실행합니다 — 서버 불필요, 계정 불필요, 오프라인 작동.',
          '연결 모드는 QR 코드로 자체 호스팅된 AnythingLLM Desktop 또는 Cloud 인스턴스와 페어링하여 사용자 정의 에이전트 도구와 기기 간 동기화를 사용할 수 있습니다.',
          '[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) 또는 직접 APK를 통해 Android에서만 제공되며, 본 리뷰 시점 기준 iOS용 App Store 출시는 없습니다.',
          'MIT 라이선스로 무료 오픈소스이며, 자체 호스팅 없이 연결 모드를 사용하고 싶은 사용자를 위한 별도 서비스인 AnythingLLM Cloud는 월 50달러부터 시작합니다.',
          'Y Combinator 출신(2022년 여름 배치) 기업으로 Timothy Carambat가 설립한 [Mintplex Labs](https://mintplex.com)가 개발했으며, 이 회사는 데스크톱/서버용 AnythingLLM 프로젝트도 담당하고 있습니다.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'AnythingLLM Mobile이란?', anchor: 'what-is-anythingllm-mobile' },
      { label: 'AnythingLLM Mobile은 누가 개발했나?', anchor: 'history-and-developer' },
      { label: '온디바이스로 작동하는가, 서버에 연결되는가?', anchor: 'on-device-vs-connected' },
      { label: 'AnythingLLM Mobile 시작하는 방법', anchor: 'getting-started' },
      { label: '스마트폰에서 문서 채팅과 RAG는 어떻게 작동하는가?', anchor: 'models-and-rag' },
      { label: 'AnythingLLM Mobile은 iPhone에서 사용할 수 있는가?', anchor: 'platform-availability' },
      { label: 'AnythingLLM Mobile의 가격은?', anchor: 'pricing' },
      { label: 'AnythingLLM Mobile의 주요 기능은?', anchor: 'key-features' },
      { label: '필요한 하드웨어는?', anchor: 'hardware-requirements' },
      { label: 'AnythingLLM Mobile이 적합한 사람', anchor: 'who-should-use' },
      { label: 'AnythingLLM Mobile이 적합하지 않은 사람', anchor: 'who-should-not-use' },
      { label: 'AnythingLLM Mobile과 대안 비교', anchor: 'vs-alternatives' },
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
            text: 'AnythingLLM Mobile은 Mintplex Labs가 개발한 무료 MIT 라이선스 Android 앱으로, 오프라인 문서 채팅을 위해 소형 언어 모델을 온디바이스로 실행하며, 자체 호스팅된 AnythingLLM Desktop 또는 Cloud 인스턴스에 연결할 수도 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '서버용 단순 리모컨 앱도 아니고, 데스크톱 앱을 완전히 대체하는 독립형 앱도 아닙니다 — 스마트폰에서 완결되는 독립적인 오프라인 AI이자, 이미 실행 중인 데스크톱이나 클라우드 인스턴스를 들여다보는 선택적 모바일 화면이라는 두 가지 성격을 모두 가지고 있으며, 어떤 모드를 사용할지는 작업에 따라 사용자가 직접 선택합니다.',
          },
        ],
        items: [
          '무료 오픈소스(MIT 라이선스)이며, 모바일 앱의 소스코드는 [GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile)에 공개되어 있습니다.',
          '두 가지 모드 제공: 온디바이스 독립형 추론(Cactus Compute 엔진, 내장 GGUF 모델, 로컬 벡터 DB) 또는 QR 코드로 자체 호스팅된 데스크톱/클라우드 인스턴스와 페어링하는 연결 모드.',
          '본 리뷰 시점 기준 Android 전용 — [Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) 또는 직접 APK로 제공되며, iOS용 App Store 출시는 아직 없습니다.',
          '[Mintplex Labs](https://mintplex.com)가 개발했으며, 이 회사는 Y Combinator 출신으로 [데스크톱/서버용 AnythingLLM 프로젝트](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)도 담당합니다.',
          '모바일 앱 자체에는 구독료가 없습니다. 일부 사용자가 페어링에 사용하는 별도 호스팅 서버 서비스인 AnythingLLM Cloud는 월 50달러부터 시작합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 공개된 [AnythingLLM Mobile GitHub 저장소](https://github.com/Mintplex-Labs/anythingllm-mobile), 공식 [모바일 문서](https://docs.anythingllm.com/mobile/overview), [Google Play 페이지](https://play.google.com/store/apps/details?id=com.anythingllm), [anythingllm.com](https://anythingllm.com/mobile)을 근거로 2026년 9월 기준으로 확인했습니다. PromptQuorum은 이 리뷰를 위해 AnythingLLM Mobile에 대한 독자적인 실측 벤치마크를 수행하지 않았습니다 — 아래 성능 수치는 이 앱에 특정된 측정값이 아니라 로컬 LLM 전반에 대한 일반적인 하드웨어 가이드입니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-anythingllm-mobile',
        title: 'AnythingLLM Mobile이란?',
        content: [
          '**AnythingLLM Mobile은 [MIT 라이선스](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE)로 공개된 Android 앱으로, 클라우드 API에 의존하지 않고도 스마트폰이 언어 모델 및 업로드된 문서와 대화할 수 있게 해줍니다.** [데스크톱/서버용 AnythingLLM 프로젝트](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)와는 별도의 코드베이스로, React Native 전용으로 개발되었지만 두 프로젝트 모두 같은 회사가 개발했으며 AnythingLLM이라는 이름과 워크스페이스 개념을 공유합니다.',
          '이 앱을 가장 잘 이해하는 방법은 두 가지 제품이 하나로 합쳐진 것으로 보는 것입니다. 설정이나 계정 없이 작동하는 독립형 온디바이스 AI 어시스턴트, 그리고 이미 데스크톱 앱, Docker 컨테이너, 또는 AnythingLLM Cloud 구독을 사용 중이며 동일한 워크스페이스, 채팅 기록, 문서를 스마트폰에서도 사용하고 싶은 사용자를 위한 모바일 프런트엔드입니다.',
        ],
        note: 'RAG(검색 증강 생성)란 앱이 사용자 자신의 문서에서 관련 구절을 검색해 언어 모델에 맥락으로 제공하는 방식으로, 이를 통해 답변이 모델의 학습 데이터뿐만 아니라 사용자 자신의 파일에도 근거하게 됩니다.',
      },
      history: {
        id: 'history-and-developer',
        title: 'AnythingLLM Mobile은 누가 개발했나?',
        content: [
          '**AnythingLLM Mobile은 [Mintplex Labs](https://mintplex.com)가 개발했으며, 이 회사는 Timothy Carambat가 설립했고 데스크톱 및 서버용 AnythingLLM 원본 버전도 만들었습니다.** Mintplex Labs는 2022년에 설립되었고 미국 캘리포니아주 어바인에 본사를 두고 있으며, Y Combinator 2022년 여름 배치를 거쳤고 Y Combinator, Goodwater Capital, UpHonest Capital, Orange DAO로부터 프리시드 투자를 받았습니다.',
          '데스크톱 및 서버용 AnythingLLM 대표 프로젝트 — 문서와 대화하고 사용자 정의 에이전트를 구축할 수 있는 오픈소스이자 자체 호스팅 가능한 "올인원 AI 애플리케이션" — 은 모바일 앱보다 수년 앞서 존재해 왔으며 GitHub에서 자체적으로 큰 커뮤니티를 보유하고 있습니다. 자세한 내용은 [PromptQuorum의 AnythingLLM 대 PrivateGPT 대 Open WebUI 비교 기사](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)에서 다루고 있습니다. AnythingLLM Mobile은 더 최신의 별도 React Native 코드베이스로, 동일한 워크스페이스 및 RAG 개념을 스마트폰으로 확장한 것입니다.',
        ],
        items: [
          '기업: [Mintplex Labs](https://mintplex.com), 2022년 미국 캘리포니아주 어바인에서 Timothy Carambat가 설립.',
          'Y Combinator 2022년 여름 배치 출신; 프리시드 투자자로는 Y Combinator, Goodwater Capital, UpHonest Capital, Orange DAO가 있습니다.',
          '함께 개발하는 제품: [데스크톱/서버용 AnythingLLM 애플리케이션](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)과 벡터 데이터베이스 관리용 오픈소스 도구인 VectorAdmin.',
          'AnythingLLM Mobile 소스코드: [github.com/Mintplex-Labs/anythingllm-mobile](https://github.com/Mintplex-Labs/anythingllm-mobile), MIT 라이선스.',
        ],
      },
      onDeviceVsConnected: {
        id: 'on-device-vs-connected',
        title: 'AnythingLLM Mobile은 온디바이스로 작동하는가, 서버에 연결되는가?',
        content: [
          '**AnythingLLM Mobile은 온디바이스 독립형 모드와, 별도로 호스팅된 AnythingLLM 인스턴스와 페어링하는 연결 모드를 모두 지원합니다 — 즉 둘 중 하나에만 국한되지 않으며, 현재 활성화된 모드에 따라 앱이 할 수 있는 일이 달라집니다.** 두 모드를 혼동하는 것은 중요한 문제입니다. 설정 없이 완전히 오프라인으로 작동하는 AI를 기대하는 사용자는 독립형 모드에서 이를 얻을 수 있는 반면, 데스크톱의 모든 기능(사용자 정의 에이전트 도구, 더 큰 문서 워크스페이스)을 기대하는 사용자는 연결 모드와, 페어링할 수 있는 실행 중인 데스크톱, Docker, 또는 Cloud 인스턴스가 필요합니다.',
          '독립형 모드에서는 [Mintplex Labs의 자체 모바일 문서](https://docs.anythingllm.com/mobile/overview)와 앱의 [GitHub 저장소](https://github.com/Mintplex-Labs/anythingllm-mobile)에 따르면, 스마트폰이 엄선된 소형 GGUF 언어 모델을 다운로드하고 React Native용으로 만들어진 llama.cpp 기반 추론 엔진인 [Cactus Compute](https://github.com/Mintplex-Labs/anythingllm-mobile)를 통해 로컬에서 실행합니다. 소형 임베딩 모델과 로컬 벡터 데이터베이스도 기기에서 함께 실행되므로, 업로드된 문서는 완전히 오프라인 상태에서 청크로 분할되고 임베딩되어 RAG에 사용할 수 있도록 검색됩니다. 모델을 다운로드한 후에는 채팅에 계정, API 키, 인터넷 연결이 전혀 필요하지 않습니다.',
          '연결 모드에서는 스마트폰이 해당 워크스페이스에 대해 직접 추론을 실행하지 않습니다 — 대신 해당 인스턴스의 Settings > Tools > AnythingLLM Mobile에 표시되는 QR 코드를 스캔하여 로컬 네트워크(Cloud의 경우 인터넷)를 통해 AnythingLLM Desktop 앱, 자체 호스팅된 Docker 인스턴스, 또는 AnythingLLM Cloud 구독과 페어링합니다. 로컬 네트워크 페어링이 작동하려면 데스크톱 인스턴스의 Settings > Admin > General에서 "네트워크 검색 활성화" 옵션이 켜져 있어야 합니다. 페어링이 완료되면 채팅, 워크스페이스, 스레드, 사용자 정의 에이전트 도구가 스마트폰과 연결된 인스턴스 간에 동기화되며, LLM, 임베딩, RAG 작업은 스마트폰이 아니라 해당 인스턴스가 실행되는 곳에서 이루어집니다.',
        ],
        decisionBlock: {
          title: '어떤 모드를 사용해야 할까?',
          localIf: [
            '계정, 서버, 설정 없이 오프라인으로 작동하는 AI 채팅과 문서 RAG를 원한다.',
            '더 깊이 투자하기 전에 온디바이스 AI가 사용 중인 특정 Android 기기에서 충분히 빠른지 테스트해보고 싶다.',
            'AnythingLLM의 데스크톱 또는 서버 인스턴스를 운영하고 있지 않으며, 운영할 계획도 없다.',
          ],
          cloudIf: [
            '이미 AnythingLLM Desktop, Docker, 또는 AnythingLLM Cloud를 사용 중이며 스마트폰에서도 동일한 워크스페이스와 채팅 기록을 원한다.',
            '사용자 정의 에이전트 도구, 더 큰 문서 라이브러리, 또는 스마트폰이 현실적으로 실행할 수 없는 더 강력한 모델이 필요하다.',
            '여러 기기(스마트폰과 데스크톱)가 하나의 공유 워크스페이스로 동기화되어 있기를 원한다.',
          ],
          quick: [
            '확신이 서지 않는다면 독립형 모드로 시작하라 — 다른 아무것도 실행할 필요가 없다.',
            '페어링할 데스크톱, Docker, 또는 Cloud 인스턴스가 이미 있을 때만 연결 모드로 전환하라.',
          ],
        },
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'AnythingLLM Mobile 시작하는 방법',
        content: [
          '**앱 자체의 [모바일 문서](https://docs.anythingllm.com/mobile/overview)에 따르면, 설정 방식은 사용하려는 모드에 따라 달라집니다.** 독립형 모드는 앱을 설치하는 것 외에 다른 작업이 필요하지 않지만, 연결 모드는 페어링할 기존 AnythingLLM Desktop, Docker, 또는 Cloud 인스턴스가 필요합니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치하기',
            whyItMatters: '[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm)에서 AnythingLLM Mobile을 다운로드하거나, [anythingllm.com/mobile](https://anythingllm.com/mobile)에서 APK를 직접 다운로드합니다. 앱을 여는 데 계정이나 이메일 등록은 필요하지 않습니다.',
          },
          {
            title: '오프라인 사용을 위해 독립형 모드 선택하기',
            whyItMatters: '처음 실행하면 앱이 다운로드 가능한 엄선된 온디바이스 모델을 제시합니다. 기기의 RAM에 맞는 모델을 선택하고(아래 하드웨어 섹션 참고) 채팅을 시작하세요 — 기본 채팅과 문서 업로드에는 추가 설정이 필요하지 않습니다.',
          },
          {
            title: '또는 연결 모드를 위해 자체 호스팅 인스턴스와 페어링하기',
            whyItMatters: '이미 AnythingLLM Desktop, Docker, 또는 Cloud를 사용 중이라면 해당 인스턴스의 Settings > Admin > General에서 "네트워크 검색"을 활성화한 다음, 데스크톱 UI에서 Settings > Tools > AnythingLLM Mobile을 열어 페어링용 QR 코드를 표시합니다.',
          },
          {
            title: '모바일 앱에서 QR 코드 스캔하기',
            whyItMatters: 'AnythingLLM Mobile에서 페어링/스캔 옵션을 사용해 데스크톱 또는 Cloud 인스턴스에 연결합니다. 페어링이 완료되면 해당 인스턴스의 워크스페이스, 채팅, 스레드가 모바일 앱에서 사용 가능해지며, 업데이트가 기기 간에 동기화됩니다.',
          },
        ],
      },
      modelsAndRag: {
        id: 'models-and-rag',
        title: '스마트폰에서 문서 채팅과 RAG는 어떻게 작동하는가?',
        itemHeadings: true,
        columns: ['모드', '추론 실행 위치', 'RAG / 문서 처리 방식'],
        rows: [
          {
            '모드': '독립형(온디바이스)',
            '추론 실행 위치': '스마트폰에서, React Native용 llama.cpp 기반 엔진인 Cactus Compute를 통해',
            'RAG / 문서 처리 방식': '로컬 임베딩 모델 + 온디바이스 벡터 데이터베이스; 문서는 완전히 오프라인 상태에서 청크 분할, 임베딩, 검색됨',
          },
          {
            '모드': '연결형(페어링된 인스턴스)',
            '추론 실행 위치': '페어링된 AnythingLLM Desktop, Docker 호스트, 또는 Cloud 인스턴스에서',
            'RAG / 문서 처리 방식': '해당 인스턴스에 설정된 벡터 데이터베이스와 임베딩 모델 사용 — 데스크톱 앱과 동일한 RAG 파이프라인이 모바일로 동기화됨',
          },
        ],
        note: '한 모드에서 만든 워크스페이스가 다른 모드의 워크스페이스로 자동 전환되지는 않습니다 — 독립형 온디바이스 워크스페이스에 업로드한 문서는 데스크톱/Cloud 인스턴스와 페어링된 연결 워크스페이스로 전환하지 않는 한 해당 기기에 로컬로 남아 있습니다.',
      },
      platform: {
        id: 'platform-availability',
        title: 'AnythingLLM Mobile은 iPhone에서 사용할 수 있는가?',
        itemHeadings: true,
        columns: ['플랫폼', '지원 여부', '비고'],
        rows: [
          {
            '플랫폼': 'Android',
            '지원 여부': '[Google Play](https://play.google.com/store/apps/details?id=com.anythingllm) 및 APK 직접 다운로드로 이용 가능',
            '비고': '본 리뷰 시점 기준 유일하게 출시된 모바일 플랫폼입니다.',
          },
          {
            '플랫폼': 'iPhone / iPad(iOS)',
            '지원 여부': '미출시 — 본 리뷰 시점 기준 AnythingLLM Mobile의 App Store 페이지를 찾지 못했습니다',
            '비고': 'iOS 지원은 프로젝트의 [GitHub 이슈 트래커](https://github.com/Mintplex-Labs/anything-llm/issues/5428)에서 공개적으로 논의되어 왔지만, PromptQuorum은 공식 App Store 출시나 출시일을 확정하는 Mintplex Labs의 발표를 확인하지 못했습니다. 다른 사이트의 보도만을 근거로 iOS 지원 여부를 단정하지 말고, 기대하기 전에 [App Store](https://apps.apple.com/)에서 직접 확인하세요.',
          },
          {
            '플랫폼': 'Mac / Windows / Linux',
            '지원 여부': '해당 없음 — 이러한 플랫폼은 모바일 앱이 아니라 별도의 [AnythingLLM Desktop 앱](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) 또는 Docker 컨테이너를 사용합니다',
            '비고': '지금 당장 AnythingLLM을 사용하고 싶은 iPhone 사용자는 Mac에서 데스크톱 앱을 사용하거나, [PocketPal AI](/power-local-llm/pocketpal-ai-review) 또는 [Private LLM](/power-local-llm/private-llm-review) 같은 다른 모바일 앱을 사용해야 합니다.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'AnythingLLM Mobile의 가격은?',
        content: [
          '**공개 문서와 앱의 Play Store 페이지에 따르면, AnythingLLM Mobile 자체는 독립형 온디바이스 모드에서 다운로드와 사용이 무료이며, 구독이나 앱 내 결제가 없습니다.** 모바일 앱의 소스코드는 [MIT 라이선스로 오픈소스화](https://github.com/Mintplex-Labs/anythingllm-mobile/blob/main/LICENSE)되어 GitHub에 공개되어 있습니다.',
          '비용은 연결 모드에서 무엇과 페어링하는지에 따라서만 발생합니다. 페어링할 자신만의 AnythingLLM Desktop 앱이나 Docker 컨테이너를 직접 운영하는 것은 모바일 앱과 마찬가지로 무료이자 오픈소스입니다. 자체 호스팅을 원하지 않는 경우, Mintplex Labs는 별도로 호스팅되는 서비스인 [AnythingLLM Cloud](https://anythingllm.com/pricing)를 판매합니다. 프라이빗 인스턴스와 맞춤 서브도메인이 포함된 월 50달러의 Basic 요금제, 대규모 팀을 위한 72시간 지원 SLA가 추가된 월 99달러의 Pro 요금제, 온프레미스 배포와 SSO, RBAC를 포함한 별도 견적의 Enterprise 요금제가 있습니다. 두 유료 Cloud 요금제 모두 사용자가 직접 LLM API 키를 제공해야 하며, 모델 비용은 포함되지 않습니다.',
        ],
        items: [
          '**모바일 앱(독립형 모드):** 무료, MIT 라이선스 오픈소스, 발견된 구독 없음.',
          '**모바일 앱(연결 모드):** 페어링 기능 자체는 무료; 비용은 전적으로 무엇과 페어링하는지에 달려 있습니다.',
          '**페어링용 자체 호스팅 Desktop/Docker 인스턴스:** 모바일 앱과 마찬가지로 무료이자 오픈소스.',
          '**AnythingLLM Cloud Basic:** 월 50달러 — 프라이빗 인스턴스, 맞춤 서브도메인, 자체 LLM API 키 필요.',
          '**AnythingLLM Cloud Pro:** 월 99달러 — 대규모 팀을 위한 72시간 지원 SLA 추가.',
          '**AnythingLLM Cloud Enterprise:** 별도 견적 — 온프레미스 배포, SSO, RBAC, 맞춤 통합.',
        ],
        note: 'AnythingLLM Cloud 가격은 Mintplex Labs가 미국 달러로 책정하며 변경될 수 있습니다. 구독 전에 [anythingllm.com/pricing](https://anythingllm.com/pricing)에서 최신 요금제와 약관을 직접 확인하세요.',
      },
      features: {
        id: 'key-features',
        title: 'AnythingLLM Mobile의 주요 기능은?',
        content: [
          '**기능 제공 여부는 활성화된 모드에 따라 달라지며, 프로젝트 자체의 모바일 문서에 따르면 일부 기능은 연결 모드에서만 존재합니다.** 여기에는 다음이 포함됩니다.',
        ],
        items: [
          '**온디바이스 채팅.** 최초 다운로드 이후에는 인터넷 연결 없이 로컬에 다운로드된 모델과 채팅할 수 있습니다.',
          '**오프라인 문서 RAG.** 독립형 워크스페이스에 문서를 업로드하고, 온디바이스 임베딩 모델과 벡터 데이터베이스를 사용해 출처가 표시된 답변을 얻습니다.',
          '**워크스페이스 동기화(연결 모드 전용).** 페어링된 데스크톱, Docker, 또는 Cloud 인스턴스에서 만든 채팅, 스레드, 워크스페이스가 스마트폰과 양방향으로 동기화됩니다.',
          '**사용자 정의 에이전트 도구(연결 모드 전용).** 데스크톱 인스턴스에서 구성한 도구 호출 기능은 페어링 후 모바일로 전달됩니다; 온디바이스 독립형 모드는 사용자 정의 도구 구성을 지원하지 않습니다.',
          '**QR 코드 페어링.** 자체 호스팅 인스턴스와의 연결은 서버 주소와 자격 증명을 수동으로 입력하는 대신 해당 인스턴스의 설정 화면에 표시되는 QR 코드를 사용합니다.',
          '**독립형 사용에 계정 불필요.** 독립형 모드에서의 채팅과 문서 RAG는 Mintplex Labs 계정 생성을 요구하지 않습니다.',
        ],
        note: '프로젝트가 잦은 업데이트를 배포하므로 기능 제공 여부는 앱 버전에 따라 달라질 수 있습니다. 설치된 버전에서 실제로 사용 가능한 기능은 앱 내 변경 내역이나 [GitHub 릴리스 페이지](https://github.com/Mintplex-Labs/anythingllm-mobile/releases)에서 확인하세요.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'AnythingLLM Mobile을 실행하려면 어떤 하드웨어가 필요한가?',
        content: [
          '**온디바이스 독립형 모드는 다른 GGUF 기반 모바일 채팅 앱과 마찬가지로 스마트폰 자체의 RAM 및 CPU/NPU에 의존합니다 — Mintplex Labs는 독립형 모드용으로 선정된 모델별 정확한 RAM 요구사항을 공개하지 않았으므로, 로컬 LLM에 대한 일반적인 규모 가이드가 적용됩니다.** 스마트폰에서 양자화된 GGUF 모델에 대한 일반적인 기준으로, 파라미터 수 10억~30억 개 범위의 소형 모델은 약 2~3GB의 여유 RAM이 필요하며, 이보다 큰 모델은 그에 비례해 더 많은 RAM이 필요합니다.',
          '연결 모드는 언어 모델이 페어링된 데스크톱, Docker 호스트, 또는 Cloud 인스턴스에서 실행되므로 추론과 관련해 스마트폰에는 사실상 하드웨어 요구사항이 없습니다 — 스마트폰은 앱 UI를 실행하고 데이터를 동기화할 정도의 리소스만 있으면 되며, 실질적인 하드웨어 요구사항은 연결된 AnythingLLM 인스턴스를 호스팅하는 기기 쪽으로 이동합니다.',
        ],
        items: [
          '독립형 모드: 가장 작은 내장 모델에는 2~3GB 이상의 여유 RAM을 예상하세요; 더 큰 온디바이스 모델은 더 많이 필요합니다.',
          '저장 공간: 다운로드하는 온디바이스 모델당 수백 메가바이트에서 수 기가바이트의 여유 저장 공간이 필요합니다.',
          '연결 모드: 스마트폰 하드웨어가 병목이 아닙니다 — 대신 데스크톱, Docker, 또는 Cloud 인스턴스를 실행하는 기기의 하드웨어 권장 사항을 확인하세요.',
          '네트워크: 독립형 모드는 모델 다운로드 후 완전히 오프라인으로 작동합니다; 연결 모드는 페어링된 인스턴스에 접속하기 위해 공유 로컬 네트워크(또는 Cloud의 경우 인터넷 연결)가 필요합니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AnythingLLM Mobile이 적합한 사람',
        items: [
          '**진정으로 무료이고 오프라인으로 작동하는 AI 채팅 및 문서 RAG 앱을 원하는 Android 사용자.** 독립형 모드는 계정, 서버, 구독이 필요하지 않아 최소한의 설정으로 프라이빗한 온디바이스 AI를 원하는 사용자에게 적합합니다.',
          '**스마트폰에서도 동일한 워크스페이스를 원하는 기존 AnythingLLM Desktop, Docker, 또는 Cloud 사용자.** 이미 데스크톱/서버용 AnythingLLM 생태계에 투자한 사용자에게 연결 모드의 동기화 기능은 명확한 매력 요소입니다.',
          '**두 가지 다른 모드 중에서 선택하는 것에 익숙한 사용자.** 앱의 가치를 최대한 활용하려면 언제 독립형 모드를 사용하고 언제 연결 모드를 사용해야 하는지 이해해야 하며, 이는 단일하고 고정된 동작을 원하는 사용자보다 기술적으로 호기심이 많은 사용자에게 더 적합합니다.',
          '**자체 호스팅 없이 모바일 프런트엔드를 원하는 팀.** Android 스마트폰을 유료 AnythingLLM Cloud 인스턴스와 페어링하면 직접 인프라를 운영하지 않고도 공유 워크스페이스에 모바일로 접근할 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AnythingLLM Mobile이 적합하지 않은 사람',
        items: [
          '**iPhone 및 iPad 사용자.** 본 리뷰 시점 기준 iOS 버전이 없습니다; Apple 기기에는 대신 [Private LLM](/power-local-llm/private-llm-review)이나 [PocketPal AI](/power-local-llm/pocketpal-ai-review)를 사용하세요.',
          '**결정할 것이 없는 단일하고 단순한 모드를 원하는 사용자.** 독립형과 연결형의 구분은 반드시 이해해야 하는 실질적인 설계상의 선택입니다; 엄선된 모델 목록과 서버 페어링 개념이 없는 단일하고 안내된 경험을 선호하는 사용자는 [PocketPal AI](/power-local-llm/pocketpal-ai-review)나 [Loci](/power-local-llm/loci-ai-review-offline-local-ai)를 더 선호할 수 있습니다.',
          '**서버 없이 완전한 사용자 정의 에이전트 도구를 원하는 사용자.** 이 앱의 현재 설계에서 사용자 정의 에이전트 도구 구성은 연결 모드에 종속되어 있습니다 — 이 기능을 오늘 완전히 온디바이스에서 원하는 사용자는 다른 대안을 찾아봐야 합니다.',
          '**무료로 기업용 지원이 필요한 사용자.** 커뮤니티 지원은 무료이지만, 지원 SLA는 모바일 앱만으로는 얻을 수 없고 유료 AnythingLLM Cloud Pro 또는 Enterprise 구독이 필요합니다.',
          '**가능한 한 가장 큰 온디바이스 모델을 원하는 사용자.** 독립형 모드는 스마트폰 RAM에 맞는 소형 엄선 모델을 중심으로 설계되었습니다; 더 큰 모델이 필요한 사용자는 성능이 우수한 데스크톱 인스턴스와 함께 연결 모드를 사용하거나, 직접 데스크톱/워크스테이션 구성을 사용해야 합니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'AnythingLLM Mobile과 대안 비교',
        itemHeadings: true,
        columns: ['앱', '온디바이스 vs. 클라이언트', '플랫폼', '라이선스 / 비용'],
        rows: [
          {
            '앱': 'AnythingLLM Mobile',
            '온디바이스 vs. 클라이언트': '둘 다 — 온디바이스 독립형 추론, 또는 자체 호스팅 인스턴스에 연결된 클라이언트',
            '플랫폼': 'Android 전용',
            '라이선스 / 비용': '무료, 오픈소스(MIT); 페어링용 Cloud 서비스는 월 50달러부터',
          },
          {
            '앱': '[AnythingLLM Desktop/Server](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
            '온디바이스 vs. 클라이언트': 'LLM과 RAG 파이프라인을 로컬 또는 API를 통해 직접 실행',
            '플랫폼': 'Mac, Windows, Linux, Docker',
            '라이선스 / 비용': '무료, 오픈소스(MIT); Cloud 호스팅은 월 50달러부터',
          },
          {
            '앱': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            '온디바이스 vs. 클라이언트': '온디바이스 전용 — 서버/클라이언트 모드 없음',
            '플랫폼': 'iPhone/iPad, Android',
            '라이선스 / 비용': '무료, 오픈소스(MIT)',
          },
          {
            '앱': '[Private LLM](/power-local-llm/private-llm-review)',
            '온디바이스 vs. 클라이언트': '온디바이스 전용 — 서버/클라이언트 모드 없음',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '라이선스 / 비용': '유료, 일회성 구매; 클로즈드 소스',
          },
          {
            '앱': 'LLM Farm',
            '온디바이스 vs. 클라이언트': 'llama.cpp를 통한 온디바이스 전용',
            '플랫폼': 'iPhone/iPad',
            '라이선스 / 비용': '무료, 오픈소스; 역사적으로 한때 App Store에서 삭제된 적이 있으므로 설치 전 최신 지원 여부를 확인하세요',
          },
          {
            '앱': 'Layla',
            '온디바이스 vs. 클라이언트': '온디바이스 전용에 선택적 원격 API 공급자 추가 지원',
            '플랫폼': 'Android, iPhone/iPad',
            '라이선스 / 비용': '무료 등급과 유료 등급 제공; 클로즈드 소스',
          },
          {
            '앱': 'Maid',
            '온디바이스 vs. 클라이언트': 'llama.cpp를 통한 온디바이스 전용; Ollama/OpenAI 호환 원격 엔드포인트도 지원',
            '플랫폼': 'Android, iPhone/iPad',
            '라이선스 / 비용': '무료, 오픈소스(MIT)',
          },
          {
            '앱': 'RikkaHub',
            '온디바이스 vs. 클라이언트': '둘 다 — LiteRT 공급자를 통한 로컬 온디바이스 추론, 그리고 멀티 공급자 클라우드 클라이언트',
            '플랫폼': 'Android',
            '라이선스 / 비용': '무료, 오픈소스',
          },
        ],
        note: 'AnythingLLM Mobile과 RikkaHub는 이 표에서 진정한 온디바이스/클라이언트 이중 설계를 갖춘 두 앱입니다; 나머지 모든 행은 엄격히 온디바이스로만 작동하거나 엄격히 클라이언트로만 작동하며, 이는 단일 기능 목록만 보고 설치를 결정하기 전에 확인해야 할 핵심적인 차이입니다. 지원 여부가 변경될 수 있으므로, 이 표에 있는 앱을 설치하기 전에 최신 App Store/Play Store 페이지를 직접 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AnythingLLM Mobile은 스마트폰 자체에서 AI 모델을 실행하나요?',
            a: '네, 독립형 모드에서는 그렇습니다. 이 앱은 엄선된 소형 GGUF 언어 모델을 다운로드하여 React Native용 llama.cpp 기반 추론 엔진인 Cactus Compute를 통해 기기에서 실행하며, 오프라인 문서 RAG를 위한 로컬 임베딩 모델과 벡터 데이터베이스를 함께 사용합니다. 별도로, 이 앱은 자체 호스팅된 AnythingLLM Desktop 또는 Cloud 인스턴스와 페어링하는 연결 모드도 지원하며, 이 경우 추론은 스마트폰이 아니라 페어링된 인스턴스에서 이루어집니다.',
          },
          {
            q: 'AnythingLLM Mobile은 iPhone에서 사용할 수 있나요?',
            a: '아니요. 본 리뷰 시점 기준으로 AnythingLLM Mobile은 App Store 페이지가 없으며, Google Play 또는 APK 직접 다운로드를 통해 Android에서만 제공됩니다. iOS 지원은 프로젝트의 GitHub 이슈 트래커에서 논의되었지만, Mintplex Labs가 출시일을 확정하는 공식 발표는 없습니다.',
          },
          {
            q: 'AnythingLLM Mobile은 무료인가요?',
            a: '네, 모바일 앱 자체는 무료이며 MIT 라이선스로 오픈소스화되어 있고, 독립형 온디바이스 사용에 구독이 필요하지 않습니다. 자체 호스팅 대신 연결 모드를 사용해 호스팅된 AnythingLLM Cloud 인스턴스와 페어링하는 경우, 이 별도 Cloud 서비스는 월 50달러부터 시작하는 유료 요금제가 있습니다 — 하지만 모바일 앱 자체와 데스크톱/Docker 자체 호스팅 옵션은 계속 무료입니다.',
          },
          {
            q: 'AnythingLLM Mobile은 누가 만드나요?',
            a: 'AnythingLLM Mobile은 2022년 Timothy Carambat가 설립하고 미국 캘리포니아주 어바인에 본사를 둔 Mintplex Labs가 만듭니다. Mintplex Labs는 Y Combinator 2022년 여름 배치를 거쳤으며, 데스크톱/서버용 AnythingLLM 애플리케이션도 개발합니다.',
          },
          {
            q: 'AnythingLLM Mobile은 어떤 라이선스로 공개되나요?',
            a: 'AnythingLLM Mobile은 관대한 오픈소스 라이선스인 MIT 라이선스로 공개되며, 소스코드는 GitHub에 공개되어 있습니다. 이 앱이 연결할 수 있는 데스크톱/서버용 AnythingLLM 프로젝트도 동일하게 MIT 라이선스입니다.',
          },
          {
            q: 'AnythingLLM Mobile을 데스크톱 인스턴스에 연결하려면 어떻게 하나요?',
            a: 'AnythingLLM Desktop, Docker, 또는 Cloud 인스턴스의 Settings > Admin > General에서 "네트워크 검색"을 활성화한 다음, Settings > Tools > AnythingLLM Mobile을 열어 페어링용 QR 코드를 표시합니다. AnythingLLM Mobile 앱 내에서 해당 코드를 스캔하면 연결됩니다. 페어링이 완료되면 워크스페이스, 채팅, 스레드가 스마트폰과 연결된 인스턴스 사이에서 동기화됩니다.',
          },
          {
            q: 'AnythingLLM Mobile은 인터넷 연결이 필요한가요?',
            a: '독립형 모드는 최초 모델 다운로드 이후에는 필요하지 않습니다 — 추론과 문서 RAG가 완전히 온디바이스에서 실행됩니다. 연결 모드는 자체 호스팅된 데스크톱 또는 Docker 인스턴스에 접속하려면 공유 로컬 네트워크가 필요하고, 호스팅된 AnythingLLM Cloud 인스턴스에 접속하려면 인터넷 연결이 필요합니다.',
          },
          {
            q: 'AnythingLLM Mobile로 제 문서와 대화할 수 있나요?',
            a: '네, 두 모드 모두 가능합니다. 독립형 모드에서는 온디바이스 임베딩 모델과 로컬 벡터 데이터베이스를 사용해 문서를 완전히 오프라인으로 청크 분할, 임베딩, 검색합니다. 연결 모드에서는 페어링된 데스크톱, Docker, 또는 Cloud 인스턴스가 데스크톱 앱과 마찬가지로 자체 설정된 벡터 데이터베이스와 임베딩 모델로 문서 RAG를 처리합니다.',
          },
          {
            q: 'AnythingLLM Mobile과 데스크톱용 AnythingLLM 앱의 차이는 무엇인가요?',
            a: 'AnythingLLM Mobile은 스마트폰용으로 만들어진 별도의 Android 앱으로, 데스크톱 인스턴스에 연결하는 기능 외에도 자체적인 온디바이스 독립형 추론 모드를 갖추고 있습니다. PromptQuorum의 AnythingLLM 대 PrivateGPT 대 Open WebUI 비교 기사에서 다룬 데스크톱/서버용 AnythingLLM 애플리케이션은 Mac, Windows, Linux, 또는 Docker에서 실행되며, 모바일 앱의 독립형 모드보다 더 다양한 LLM 공급자, 벡터 데이터베이스, 에이전트 구성을 지원합니다.',
          },
          {
            q: 'AnythingLLM Mobile은 PocketPal AI나 Private LLM과 비교하면 어떤가요?',
            a: 'PocketPal AI와 Private LLM은 서버 연결 모드가 없는 순수 온디바이스 모바일 채팅 앱입니다; AnythingLLM Mobile은 이 비교에서 유일하게 진정한 이중 설계 — 온디바이스 독립형 추론과, 자체 호스팅되거나 클라우드에 있는 AnythingLLM 인스턴스로의 선택적 연결 모드 — 를 갖춘 앱입니다. 이러한 유연성을 원하거나 이미 데스크톱에서 AnythingLLM을 사용 중이라면 AnythingLLM Mobile을 선택하고, AnythingLLM Mobile이 Android 전용이므로 특히 iPhone 앱이 필요하다면 PocketPal AI(무료, iPhone/Android) 또는 Private LLM(유료, Apple 전용)을 선택하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'AnythingLLM Mobile의 이중 설계 — 진정한 온디바이스 독립형 모드와 선택적 연결 모드의 공존 — 는 대부분의 모바일 AI 앱이 둘 중 한 아키텍처에 완전히 전념하는 이 카테고리에서 흔치 않은 사례입니다. 이러한 유연성은 동시에 처음 사용하는 사용자에게 가장 큰 걸림돌이기도 합니다. 어떤 모드가 활성화되어 있는지, 각 모드가 무엇을 할 수 있고 무엇을 할 수 없는지 이해하는 데는 PocketPal AI나 Private LLM 같은 단일 목적 앱보다 더 많은 초기 주의가 필요합니다. 지금 더 큰 제약은 플랫폼입니다. AnythingLLM Mobile은 Android 전용이며, App Store 출시도 없고 iOS 출시일도 확정되지 않았습니다. Android를 사용하며 설정이 필요 없는 무료 오프라인 AI를 원하거나, 이미 AnythingLLM Desktop, Docker, 또는 Cloud를 사용 중이며 스마트폰에서도 동일한 워크스페이스를 원한다면 AnythingLLM Mobile을 선택하세요. iPhone 앱이 필요하다면 대신 Private LLM이나 PocketPal AI를 선택하고, 모바일 클라이언트가 전혀 필요하지 않다면 데스크톱용 AnythingLLM 애플리케이션을 직접 사용하세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 AnythingLLM Mobile](https://github.com/Mintplex-Labs/anythingllm-mobile) — 이 리뷰에서 참조한 소스코드, 라이선스(MIT), Cactus Compute 사용 내역.',
          '[AnythingLLM Mobile 공식 문서](https://docs.anythingllm.com/mobile/overview) — 독립형 모드 대 연결 모드, 페어링 단계, 네트워크 검색 설정.',
          '[Google Play의 AnythingLLM Mobile](https://play.google.com/store/apps/details?id=com.anythingllm) — Android 지원 여부와 앱 설명.',
          '[AnythingLLM Mobile 공식 페이지](https://anythingllm.com/mobile) — 다운로드 링크와 기능 개요.',
          '[AnythingLLM Cloud 가격](https://anythingllm.com/pricing) — 이 리뷰에서 언급한 Basic, Pro, Enterprise 요금제 가격.',
          '[Y Combinator의 Mintplex Labs 페이지](https://www.ycombinator.com/companies/mintplex-labs) — 회사 설립, 배치, 배경 정보.',
          '[데스크톱/서버용 AnythingLLM 애플리케이션 GitHub 저장소](https://github.com/Mintplex-Labs/anything-llm) — 이 모바일 앱이 연결할 수 있는 관련 프로젝트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[AnythingLLM 대 PrivateGPT 대 Open WebUI: 어떤 RAG 도구가 이길까?](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — 이 모바일 앱이 연결할 수 있는 데스크톱/서버용 AnythingLLM 비교 기사.',
          '[PocketPal AI 리뷰(2026)](/power-local-llm/pocketpal-ai-review) — iPhone과 Android를 위한 무료, 오픈소스, 순수 온디바이스 대안.',
          '[Private LLM 리뷰](/power-local-llm/private-llm-review) — Apple 전용이며 순수 온디바이스로 작동하는 유료 대안으로, 방대한 내장 모델 카탈로그를 갖추고 있습니다.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/power-local-llm/best-local-llm-apps-android-2026) — 더 폭넓은 Android 앱 모음.',
          '[Loci 리뷰: iPhone, Android, iPad, Mac, Windows용 오프라인 AI](/power-local-llm/loci-ai-review-offline-local-ai) — 단일하고 안내된 모드를 선호하는 사용자를 위한 5개 플랫폼 지원 엄선 대안.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AnythingLLM Mobile 리뷰(2026): 온디바이스 채팅 + RAG',
      description:
        'AnythingLLM Mobile 리뷰: 모델을 온디바이스로 실행하면서 자체 호스팅된 AnythingLLM 인스턴스와도 동기화할 수 있는 무료 MIT 라이선스 Android 앱. iOS 지원 현황, 가격, RAG를 정리했습니다.',
      url: 'https://promptquorum.com/ko/power-local-llm/anythingllm-mobile-review',
      inLanguage: 'ko',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '개인정보를 중시하는 Android 사용자와 기존 AnythingLLM Desktop/자체 호스팅 사용자' },
      about: [
        { '@type': 'Thing', name: 'AnythingLLM Mobile' },
        { '@type': 'Thing', name: 'Mintplex Labs' },
        { '@type': 'Thing', name: '검색 증강 생성' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: '로컬 LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/anythingllm-mobile-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'AnythingLLM Mobile 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/anythingllm-mobile-review' },
      ],
    },
  },
}
