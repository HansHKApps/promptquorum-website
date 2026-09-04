// Arbiter Local AI Chat Review: Private Offline AI for iPhone
// Slug: arbiter-local-ai-chat-review-2026
// Companion to: loci-ai-review-offline-local-ai, best-local-llm-apps-iphone-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-en.webp',
    title: 'Arbiter Local AI Chat Review (2026): Private Offline AI for iPhone',
    seoTitle: 'Arbiter AI Review 2026: Private Offline iPhone Chat',
    intro:
      'Arbiter, developed by Jordan Stone, is a privacy-first AI assistant for iPhone built around a single premise, per the developer: your conversations never leave your device. You can download and run lightweight open-source models (Gemma, Llama, DeepSeek, Qwen, Mistral) directly on your iPhone, or connect to more powerful models running on your own PC or Mac through tools like LM Studio, Ollama, or the separate "Arbiter for Mac" companion. There are no accounts, no servers, and no data collection — the app is designed so conversations, and any documents you upload for summarization, stay on the device you are using. The practical question for anyone comparing on-device chat apps is whether Arbiter delivers enough capability on iPhone-class hardware to be a genuine daily driver, or whether it is best used as the private front end to bigger models running elsewhere.',
    metaDescription:
      'Arbiter review: is this privacy-first offline AI chat app worth it on iPhone? On-device models, document summaries, connecting to LM Studio/Ollama, hardware needs, and pricing.',
    twitterDescription:
      'Arbiter Local AI Chat review 2026: run open-source models on-device on iPhone, or connect to LM Studio/Ollama/Arbiter for Mac for bigger models. No accounts, no servers, no data collection.',
    audience:
      'iPhone users deciding whether to use Arbiter for private, offline AI chat and document summarization — covers on-device model support, hardware requirements, connecting to desktop inference tools, and how it compares with other mobile local-AI apps.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Get Arbiter on the App Store →', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'arbiter ai review',
      'arbiter local ai chat',
      'arbiter ios app',
      'arbiter offline ai iphone',
      'arbiter vs private llm',
      'arbiter local llm iphone',
      'arbiter privacy ai app',
      'run local ai on iphone arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**Arbiter is most compelling if you want a no-account, no-server iPhone chat app that keeps conversations and uploaded documents entirely on-device, with the option to reach for more powerful models when you need them.** On an iPhone 13 Pro or later (or any device with at least 6GB of RAM), it runs lightweight open-source models — Gemma, Llama, DeepSeek, Qwen, and Mistral — locally for chat and document summaries. When on-device model quality is not enough, Arbiter can connect to more powerful models running on your own PC or Mac through LM Studio, Ollama, or the separate "Arbiter for Mac" companion app, so you get a bigger-model answer without sending anything to a third-party server. It is free with optional in-app purchases. Users who want the largest possible model library, deep quantization control, or a mature cross-platform footprint (Android, Windows) should compare it with more established local-LLM apps.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Arbiter for private, offline AI on iPhone?',
        answer:
          'Use Arbiter if you want a free, no-account iPhone app for on-device AI chat and document summarization, with the option to connect to bigger models on your own PC or Mac. Skip it if you need Android or Windows support, a very large curated model library, or frontier reasoning quality that only cloud AI currently provides.',
        bullets: [
          'Free with optional in-app purchases; no subscription required to use core features.',
          'No accounts, no servers — conversations and uploaded documents stay on-device per the developer\'s claims.',
          'Runs Gemma, Llama, DeepSeek, Qwen, and Mistral locally on iPhone; can connect to LM Studio, Ollama, or Arbiter for Mac for bigger models.',
          'Recommended hardware: iPhone 13 Pro or later, or any device with at least 6GB of RAM, for smooth performance.',
          'iOS/iPhone only; the "Arbiter for Mac" companion is for connecting to bigger models, not a confirmed full standalone Mac chat app.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Arbiter Is', anchor: 'what-is-arbiter' },
      { label: 'How Local AI Works in Arbiter', anchor: 'how-local-ai-works' },
      { label: 'Features', anchor: 'features' },
      { label: 'Hardware Requirements and Pricing', anchor: 'hardware-and-pricing' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Arbiter vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Arbiter', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Arbiter', anchor: 'who-should-not-use' },
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
        items: [
          'Arbiter is a free iPhone app for on-device AI chat, developed by Jordan Stone, positioned as privacy-first: no accounts, no servers, no data collection.',
          'It supports lightweight open-source models locally — Gemma, Llama, DeepSeek, Qwen, and Mistral.',
          'You can also connect to more powerful models running on your own PC or Mac through LM Studio, Ollama, or the separate "Arbiter for Mac" companion, instead of a third-party cloud API.',
          'You can upload documents to get summaries and key insights, processed on the device.',
          'Recommended hardware: iPhone 13 Pro or later, or any device with at least 6GB of RAM, for smooth performance.',
          'Pricing: free with optional in-app purchases. Category: Productivity.',
          'iOS/iPhone only for the core app; Arbiter for Mac is described as a way to connect to bigger models, not confirmed as a full standalone Mac chat client.',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'What Arbiter Is',
        content: [
          'Arbiter is a privacy-first offline AI assistant for iPhone, developed by Jordan Stone and listed on the App Store as "Arbiter - Local AI Chat" (id6747954532), with a vendor site at askarbiter.ai. The app is free to download, with optional in-app purchases, and is listed in the Productivity category.',
          'The core design choice is that Arbiter does not require an account and does not rely on Arbiter\'s own servers to process your conversations: it either runs a model directly on your iPhone, or connects to a model running on hardware you control (your own PC or Mac). The developer\'s stated position is that conversations never leave the device — either your phone, or the desktop machine you connect it to.',
          'Model support centers on lightweight open-source families: Gemma, Llama, DeepSeek, Qwen, and Mistral. These are the same model families used across most local-LLM apps and tools, which means the practical ceiling on quality is set by how large a model your iPhone (or connected desktop) can run, not by a proprietary Arbiter-only model.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Arbiter is a free iPhone app that runs open-source language models on-device or connects to more powerful models on your own PC or Mac, without accounts or servers.',
          },
          {
            type: 'plain-terms',
            text:
              'Arbiter lets you chat with AI on your iPhone the way you would with a cloud chatbot, except the conversation stays on your phone (or on a computer you own) instead of being sent to a company\'s servers.',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'How Local AI Works in Arbiter',
        content: [
          'Arbiter offers two paths to AI chat, both designed to keep data off third-party servers:',
        ],
        items: [
          '**On-device models** — download a lightweight open-source model (Gemma, Llama, DeepSeek, Qwen, or Mistral) directly into the app and run inference on your iPhone. No internet connection is needed once a model is downloaded, and no third-party server sees your conversation.',
          '**Connect to a more powerful desktop model** — if on-device model quality is not enough for a task, Arbiter can connect to models running on your own PC or Mac through tools like LM Studio or Ollama, or through the separate "Arbiter for Mac" companion app. Inference happens on the desktop machine you control; the phone acts as the interface. This avoids the trade-off of either being limited to what a phone can run, or sending your prompts to a cloud API.',
          '**Document summaries** — you can upload documents on your device and have Arbiter generate summaries and pull out key insights, without uploading the file to a cloud service first.',
        ],
        note: 'Exact minimum iOS version, per-model download sizes, and the full list of supported open-source model variants are not published in detail by the developer. Verify current specifics on the App Store listing or askarbiter.ai before relying on a specific model for a specific device. Last verified against the App Store listing on 2026-09-04.',
      },
      features: {
        id: 'features',
        title: 'Features',
        items: [
          '**Local model chat.** Download and run Gemma, Llama, DeepSeek, Qwen, or Mistral directly on your iPhone for fully offline chat once the model is downloaded.',
          '**Desktop connection for bigger models.** Connect to LM Studio or Ollama running on your own PC or Mac, or to the "Arbiter for Mac" companion, to reach more capable models than an iPhone can run on its own — while keeping inference on hardware you control.',
          '**Document summaries.** Upload a document on your device and get a summary and key insights back, processed on-device rather than through a cloud upload.',
          '**No accounts.** There is no sign-up, login, or account system — you open the app and start using it.',
          '**No data collection, per developer claims.** The developer states that conversations never leave the device, and that Arbiter does not run its own servers to process or store your chats.',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: 'Hardware Requirements and Pricing',
        columns: ['Item', 'What Arbiter states', 'What it means in practice'],
        rows: [
          {
            'Item': 'Minimum recommended hardware',
            'What Arbiter states': 'iPhone 13 Pro or later, or any device with at least 6GB of RAM, for smooth performance.',
            'What it means in practice': 'Older or lower-RAM iPhones may still run the app, but on-device model responses may be slower or you may be limited to smaller models. If your iPhone is older than the 13 Pro and has less than 6GB of RAM, lean on the desktop-connection path instead of on-device inference.',
          },
          {
            'Item': 'Platform',
            'What Arbiter states': 'iOS / iPhone. A companion app, "Arbiter for Mac," is available for connecting to bigger models.',
            'What it means in practice': 'There is no Android or Windows version. Arbiter for Mac is described specifically as a way to reach more powerful models from your phone — treat it as a connection point rather than a confirmed full standalone Mac chat client until the developer documents it as one.',
          },
          {
            'Item': 'Pricing',
            'What Arbiter states': 'Free, with optional in-app purchases. Category: Productivity.',
            'What it means in practice': 'You can install and use the app without paying. Specific in-app purchase tiers, prices, and what they unlock are not published in the source material for this review — check the current App Store listing for up-to-date pricing before assuming any particular feature is free or paid.',
          },
          {
            'Item': 'Storage for on-device models',
            'What Arbiter states': 'Not specified by the developer in detail.',
            'What it means in practice': 'Open-source models in the Gemma, Llama, DeepSeek, Qwen, and Mistral families typically range from roughly 1–5GB per model depending on parameter count and quantization. Budget iPhone storage accordingly if you plan to keep more than one model downloaded at a time.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Privacy by design',
            'What it means in real use': 'No accounts, no Arbiter-run servers processing your chats, per the developer\'s stated design — conversations stay on your device or the desktop you connect to.',
            'Limitation / caveat': 'This review relies on the developer\'s stated claims rather than independent third-party audit; review the current privacy policy on the App Store before handling sensitive information.',
          },
          {
            'Benefit': 'Works fully offline once a model is downloaded',
            'What it means in real use': 'On-device chat with Gemma, Llama, DeepSeek, Qwen, or Mistral does not require an internet connection after setup.',
            'Limitation / caveat': 'Initial app install and model download require internet. Connecting to LM Studio, Ollama, or Arbiter for Mac requires a network connection between your phone and the desktop machine.',
          },
          {
            'Benefit': 'No recurring cost required',
            'What it means in real use': 'Free download, optional in-app purchases — you are not forced into a subscription to use the core app.',
            'Limitation / caveat': 'On-device inference uses your iPhone\'s battery and processing power; large models may run slowly on older or lower-RAM devices.',
          },
          {
            'Benefit': 'Bigger-model access without a cloud API',
            'What it means in real use': 'Connecting to LM Studio, Ollama, or Arbiter for Mac lets you use larger, more capable models than an iPhone can run on its own, while keeping inference on hardware you own.',
            'Limitation / caveat': 'Requires a PC or Mac with sufficient RAM/GPU and LM Studio, Ollama, or Arbiter for Mac already set up — this is not a zero-setup path for users without a compatible desktop.',
          },
          {
            'Benefit': 'Document summaries on-device',
            'What it means in real use': 'Get summaries and key insights from files without uploading them to a cloud service.',
            'Limitation / caveat': 'Summary quality depends on the on-device model size you choose; supported file formats and maximum document length are not detailed by the developer in public materials.',
          },
          {
            'Benefit': 'Simple, curated model list',
            'What it means in real use': 'Gemma, Llama, DeepSeek, Qwen, and Mistral cover a range of open-source model families without requiring you to search Hugging Face yourself.',
            'Limitation / caveat': 'The exact list of specific model sizes/variants and whether custom GGUF import is supported is not specified in the source material for this review — check the current App Store listing for the up-to-date model list.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter vs. Alternatives',
        columns: ['App', 'Best for', 'Setup level', 'Platform focus', 'Key limitation'],
        rows: [
          {
            'App': 'Arbiter',
            'Best for': 'iPhone users who want on-device chat plus an option to reach bigger models on their own PC/Mac',
            'Setup level': 'Minimal for on-device chat; more setup to connect to LM Studio/Ollama/Arbiter for Mac',
            'Platform focus': 'iOS/iPhone only, with a Mac companion for connecting to bigger models',
            'Key limitation': 'No Android or Windows app; in-app purchase tiers not publicly detailed',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Best for': 'Low-friction cross-platform private chat',
            'Setup level': 'Minimal (download, chat)',
            'Platform focus': 'iPhone/iPad/Android/Mac/Windows (5 platforms)',
            'Key limitation': 'Curated ~10-model library; cannot import GGUF files',
          },
          {
            'App': 'Private LLM',
            'Best for': 'Apple-only users wanting advanced model selection',
            'Setup level': 'Low-to-medium (one-time purchase, model downloads)',
            'Platform focus': 'iPhone/iPad/Mac (Apple only)',
            'Key limitation': 'Apple-only; requires learning quantization formats',
          },
          {
            'App': 'PocketPal AI',
            'Best for': 'Users wanting full GGUF import and model control',
            'Setup level': 'Medium (free, but requires sourcing model files)',
            'Platform focus': 'iPhone/iPad, some Android support',
            'Key limitation': 'Requires comfort with GGUF files and manual model selection',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Arbiter',
        items: [
          '**iPhone user who wants private chat without an account.** No sign-up step — open the app and start chatting with an on-device model.',
          '**User who occasionally needs a bigger model.** Connecting to LM Studio, Ollama, or Arbiter for Mac lets you tap a more powerful model on your own desktop when an on-device model is not enough, without sending prompts to a third-party cloud API.',
          '**Someone who wants document summaries without a cloud upload.** Upload a file on-device and get a summary and key insights back.',
          '**Budget-conscious user.** Free with optional in-app purchases — no forced subscription to try the app.',
          '**User with an iPhone 13 Pro or newer (or 6GB+ RAM device).** This is the hardware range the developer recommends for smooth on-device performance.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Arbiter',
        items: [
          '**Android or Windows users.** Arbiter is iOS/iPhone only; there is no native Android or Windows app in the source material for this review.',
          '**User expecting frontier cloud-level reasoning purely on-device.** On-device models in the Gemma, Llama, DeepSeek, Qwen, and Mistral families running on an iPhone face the same parameter-count ceiling as any other phone-based local-AI app; for the largest models you still need to connect to a desktop machine or use a cloud service.',
          '**User with an older iPhone below the recommended hardware tier.** Devices older than iPhone 13 Pro, or with less than 6GB of RAM, may see slower on-device performance.',
          '**User who wants a mature, fully documented standalone Mac chat app today.** "Arbiter for Mac" is described as a way to connect to bigger models from your phone; it is not confirmed in the source material to be a full standalone Mac chat application in its own right.',
          '**User handling highly sensitive information who needs an independently audited privacy claim.** Arbiter\'s no-accounts, no-servers, no-data-collection positioning is the developer\'s stated design; review the current privacy policy on the App Store listing before relying on it for confidential work.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is Arbiter - Local AI Chat?',
            a: 'Arbiter is a privacy-first offline AI assistant for iPhone, developed by Jordan Stone. You can download and run lightweight open-source models (Gemma, Llama, DeepSeek, Qwen, Mistral) locally on your iPhone, or connect to more powerful models running on your own PC or Mac through LM Studio, Ollama, or the "Arbiter for Mac" companion.',
          },
          {
            q: 'Is Arbiter really private?',
            a: 'The developer\'s stated design is no accounts, no servers, and no data collection — conversations are designed to never leave the device you are using, whether that is your iPhone or a desktop you connect to. As with any privacy claim, review the current privacy policy on the App Store listing before using it for sensitive information, since this review relies on the developer\'s public claims rather than an independent audit.',
          },
          {
            q: 'Does Arbiter work without an internet connection?',
            a: 'Yes, for on-device chat: once a model (Gemma, Llama, DeepSeek, Qwen, or Mistral) is downloaded to your iPhone, chat works without an internet connection. Downloading the app and the initial model requires internet, and connecting to LM Studio, Ollama, or Arbiter for Mac requires a network connection between your phone and the desktop machine.',
          },
          {
            q: 'What iPhone do I need to run Arbiter smoothly?',
            a: 'The developer recommends an iPhone 13 Pro or later, or any device with at least 6GB of RAM, for smooth performance. Older or lower-RAM iPhones may still run the app but could see slower on-device responses, especially with larger models.',
          },
          {
            q: 'Which AI models does Arbiter support?',
            a: 'Arbiter supports lightweight open-source models: Gemma, Llama, DeepSeek, Qwen, and Mistral. These run locally on-device. For more powerful models, Arbiter can connect to LM Studio or Ollama running on your own PC or Mac, or to the Arbiter for Mac companion app.',
          },
          {
            q: 'How does connecting to LM Studio or Ollama work?',
            a: 'Instead of running a model directly on your iPhone, Arbiter can connect to a model already running on your own PC or Mac through LM Studio, Ollama, or the Arbiter for Mac companion app. Inference happens on the desktop machine you control, and Arbiter\'s phone interface sends and receives messages with it — so you get access to bigger, more capable models than your iPhone alone can run, without a third-party cloud API in between.',
          },
          {
            q: 'Does Arbiter cost money?',
            a: 'Arbiter is free to download, with optional in-app purchases. It is listed in the Productivity category on the App Store. Specific in-app purchase tiers and pricing are not detailed in the source material for this review — check the current App Store listing for up-to-date pricing.',
          },
          {
            q: 'Can Arbiter summarize documents?',
            a: 'Yes. You can upload documents on your device and Arbiter will generate summaries and pull out key insights, processed on the device rather than through a cloud upload.',
          },
          {
            q: 'Is there an Android or Windows version of Arbiter?',
            a: 'No. Arbiter is available for iOS/iPhone. There is a separate "Arbiter for Mac" companion app for connecting to more powerful models, but no Android or Windows client in the source material for this review.',
          },
          {
            q: 'How does Arbiter compare to Loci or Private LLM?',
            a: 'Loci works across five platforms (iPhone, iPad, Android, Mac, Windows) with a curated model library and minimal setup. Private LLM is Apple-only with a larger model library (140+ models) and more quantization control, sold as a one-time purchase. Arbiter is iPhone-focused with a smaller, simpler model list (Gemma, Llama, DeepSeek, Qwen, Mistral) but adds the option to connect directly to LM Studio, Ollama, or your own Mac for bigger models — a combination not all competitors offer in the same form.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Arbiter is worth installing if you want a free, no-account iPhone app for private AI chat and document summarization, with a genuine escape hatch when on-device model quality is not enough: connecting to LM Studio, Ollama, or your own Mac through the Arbiter for Mac companion. The developer\'s privacy positioning — no accounts, no servers, no data collection — is exactly the design most privacy-conscious mobile AI users are looking for, though as with any single-developer app, it is worth reviewing the current App Store privacy policy yourself before trusting it with sensitive material. The recommended hardware tier (iPhone 13 Pro or later, or 6GB+ RAM) is realistic for most recent iPhones. Where Arbiter is weaker is breadth: it is iPhone-only, the Arbiter for Mac companion is not confirmed to be a full standalone Mac chat app, and specifics on in-app purchase pricing and exact model variants are not published in detail. Users who want a mature, cross-platform app with a larger curated model library should also look at Loci; users who want maximum model and quantization control on Apple devices should look at Private LLM. For an iPhone-first user who wants simple on-device chat plus the option to reach bigger models on their own hardware, Arbiter fills a real gap.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Arbiter - Local AI Chat on the App Store](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) — official listing, category, pricing, developer information.',
          '[Arbiter official site (askarbiter.ai)](https://www.askarbiter.ai/) — product overview and features.',
          '[Loci on the App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — for comparison, a cross-platform on-device AI app.',
          '[Private LLM official site](https://privatellm.app/en) — for comparison, an Apple-only local-LLM app with a larger model library.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — a cross-platform on-device AI app to compare against Arbiter.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the iPhone app roundup, including PocketPal AI, Private LLM, and Apple Intelligence.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model-layer companion covering the same model families Arbiter supports.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — device-focused guide for on-device and remote inference on tablets.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — comprehensive app and tool directory for all platforms.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Arbiter Local AI Chat Review (2026): Private Offline AI for iPhone',
      'description': 'Arbiter review: is this privacy-first offline AI chat app worth it on iPhone? On-device models, document summaries, connecting to LM Studio/Ollama, hardware needs, and pricing.',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'sameAs': 'https://www.linkedin.com/in/hanskuepper/',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'en',
      'url': 'https://www.promptquorum.com/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'Arbiter is a free iPhone app for private, on-device AI chat, developed by Jordan Stone. It runs open-source models (Gemma, Llama, DeepSeek, Qwen, Mistral) locally, or connects to bigger models on your own PC or Mac via LM Studio, Ollama, or Arbiter for Mac.',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'iPhone users deciding whether to use Arbiter for private, offline AI chat and document summarization' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': 'On-device AI' },
        { '@type': 'Thing', 'name': 'Local LLM apps' },
        { '@type': 'Thing', 'name': 'Mobile privacy' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-de.webp',
    title: 'Arbiter Local AI Chat im Test (2026): Private KI offline auf dem iPhone',
    seoTitle: 'Arbiter AI im Test 2026: Private Offline-KI fürs iPhone',
    intro:
      'Arbiter, entwickelt von Jordan Stone, ist ein auf Privatsphäre ausgerichteter KI-Assistent fürs iPhone, der nach Angaben des Entwicklers auf einem einzigen Grundsatz beruht: Ihre Unterhaltungen verlassen niemals Ihr Gerät. Sie können leichtgewichtige Open-Source-Modelle (Gemma, Llama, DeepSeek, Qwen, Mistral) direkt auf Ihr iPhone herunterladen und dort ausführen, oder sich mit leistungsstärkeren Modellen verbinden, die auf Ihrem eigenen PC oder Mac laufen – über Tools wie LM Studio, Ollama oder die separate Begleit-App „Arbiter for Mac". Es gibt keine Konten, keine Server und keine Datenerfassung – die App ist so konzipiert, dass Unterhaltungen sowie hochgeladene Dokumente zur Zusammenfassung auf dem jeweils genutzten Gerät verbleiben. Die praktische Frage für alle, die On-Device-Chat-Apps vergleichen, lautet, ob Arbiter auf iPhone-Hardware genug Leistungsfähigkeit bietet, um ein echter täglicher Begleiter zu sein, oder ob es sich am besten als private Bedienoberfläche für größere Modelle eignet, die anderswo laufen.',
    metaDescription:
      'Arbiter im Test: Lohnt sich diese auf Privatsphäre ausgerichtete Offline-KI-Chat-App fürs iPhone? On-Device-Modelle, Dokumentenzusammenfassungen, Verbindung zu LM Studio/Ollama, Hardware-Anforderungen und Preise.',
    twitterDescription:
      'Arbiter Local AI Chat im Test 2026: Open-Source-Modelle direkt auf dem iPhone ausführen oder mit LM Studio/Ollama/Arbiter for Mac für größere Modelle verbinden. Keine Konten, keine Server, keine Datenerfassung.',
    audience:
      'iPhone-Nutzer, die entscheiden möchten, ob Arbiter für private, offline nutzbaren KI-Chat und Dokumentenzusammenfassungen geeignet ist – mit Fokus auf On-Device-Modellunterstützung, Hardware-Anforderungen, Verbindung zu Desktop-Inferenz-Tools und Vergleich mit anderen mobilen Local-AI-Apps.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Arbiter im App Store herunterladen →', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'arbiter ai test',
      'arbiter local ai chat',
      'arbiter ios app',
      'arbiter offline ki iphone',
      'arbiter vs private llm',
      'arbiter lokales llm iphone',
      'arbiter privatsphäre ki app',
      'lokale ki auf dem iphone arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**Arbiter ist besonders überzeugend, wenn Sie eine iPhone-Chat-App ohne Konto und ohne Server suchen, die Unterhaltungen und hochgeladene Dokumente vollständig auf dem Gerät belässt, mit der Option, bei Bedarf leistungsstärkere Modelle hinzuzuziehen.** Auf einem iPhone 13 Pro oder neuer (oder jedem Gerät mit mindestens 6 GB RAM) führt die App leichtgewichtige Open-Source-Modelle – Gemma, Llama, DeepSeek, Qwen und Mistral – lokal für Chat und Dokumentenzusammenfassungen aus. Reicht die Qualität der On-Device-Modelle nicht aus, kann sich Arbiter mit leistungsstärkeren Modellen verbinden, die auf Ihrem eigenen PC oder Mac laufen – über LM Studio, Ollama oder die separate Begleit-App „Arbiter for Mac" –, sodass Sie eine Antwort von einem größeren Modell erhalten, ohne dass Daten an einen Drittanbieter-Server gesendet werden. Die App ist kostenlos mit optionalen In-App-Käufen. Wer die größtmögliche Modellbibliothek, tiefgreifende Kontrolle über Quantisierung oder eine ausgereifte plattformübergreifende Verfügbarkeit (Android, Windows) sucht, sollte Arbiter mit etablierteren Local-LLM-Apps vergleichen.',
    quickAnswerTop: {
      de: {
        question: 'Sollte ich Arbiter für private, offline nutzbare KI auf dem iPhone verwenden?',
        answer:
          'Nutzen Sie Arbiter, wenn Sie eine kostenlose iPhone-App ohne Konto für On-Device-KI-Chat und Dokumentenzusammenfassungen suchen, mit der Option, sich zusätzlich mit größeren Modellen auf Ihrem eigenen PC oder Mac zu verbinden. Verzichten Sie darauf, wenn Sie Android- oder Windows-Unterstützung, eine sehr große kuratierte Modellbibliothek oder eine Reasoning-Qualität auf Spitzenniveau benötigen, die derzeit nur Cloud-KI bietet.',
        bullets: [
          'Kostenlos mit optionalen In-App-Käufen; kein Abonnement für die Kernfunktionen erforderlich.',
          'Keine Konten, keine Server – Unterhaltungen und hochgeladene Dokumente verbleiben laut Angaben des Entwicklers auf dem Gerät.',
          'Führt Gemma, Llama, DeepSeek, Qwen und Mistral lokal auf dem iPhone aus; kann sich für größere Modelle mit LM Studio, Ollama oder Arbiter for Mac verbinden.',
          'Empfohlene Hardware: iPhone 13 Pro oder neuer, oder jedes Gerät mit mindestens 6 GB RAM, für einen flüssigen Betrieb.',
          'Nur für iOS/iPhone; die Begleit-App „Arbiter for Mac" dient der Verbindung zu größeren Modellen und ist keine bestätigte vollwertige eigenständige Mac-Chat-App.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Arbiter ist', anchor: 'what-is-arbiter' },
      { label: 'Wie lokale KI in Arbiter funktioniert', anchor: 'how-local-ai-works' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Hardware-Anforderungen und Preise', anchor: 'hardware-and-pricing' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Arbiter im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen sich Arbiter eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Arbiter nicht eignet', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Arbiter ist eine kostenlose iPhone-App für On-Device-KI-Chat, entwickelt von Jordan Stone, positioniert als privatsphärefreundlich: keine Konten, keine Server, keine Datenerfassung.',
          'Die App unterstützt leichtgewichtige Open-Source-Modelle lokal – Gemma, Llama, DeepSeek, Qwen und Mistral.',
          'Sie können sich außerdem mit leistungsstärkeren Modellen auf Ihrem eigenen PC oder Mac verbinden – über LM Studio, Ollama oder die separate Begleit-App „Arbiter for Mac" – statt über eine Cloud-API eines Drittanbieters.',
          'Sie können Dokumente hochladen, um Zusammenfassungen und zentrale Erkenntnisse zu erhalten, die auf dem Gerät verarbeitet werden.',
          'Empfohlene Hardware: iPhone 13 Pro oder neuer, oder jedes Gerät mit mindestens 6 GB RAM, für einen flüssigen Betrieb.',
          'Preise: kostenlos mit optionalen In-App-Käufen. Kategorie: Produktivität.',
          'Nur für iOS/iPhone bei der Kern-App; Arbiter for Mac wird als Möglichkeit zur Verbindung mit größeren Modellen beschrieben, nicht als bestätigte vollwertige eigenständige Mac-Chat-App.',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'Was Arbiter ist',
        content: [
          'Arbiter ist ein auf Privatsphäre ausgerichteter Offline-KI-Assistent fürs iPhone, entwickelt von Jordan Stone und im App Store als „Arbiter - Local AI Chat" (id6747954532) gelistet, mit einer Anbieter-Website unter askarbiter.ai. Die App steht kostenlos zum Download bereit, mit optionalen In-App-Käufen, und ist in der Kategorie Produktivität gelistet.',
          'Die zentrale Design-Entscheidung besteht darin, dass Arbiter kein Konto voraussetzt und nicht auf eigene Server zurückgreift, um Ihre Unterhaltungen zu verarbeiten: Die App führt entweder ein Modell direkt auf Ihrem iPhone aus, oder sie verbindet sich mit einem Modell, das auf Hardware läuft, die Sie selbst kontrollieren (Ihrem eigenen PC oder Mac). Die vom Entwickler angegebene Position lautet, dass Unterhaltungen niemals das Gerät verlassen – weder Ihr Telefon noch den Desktop-Rechner, mit dem Sie sich verbinden.',
          'Die Modellunterstützung konzentriert sich auf leichtgewichtige Open-Source-Familien: Gemma, Llama, DeepSeek, Qwen und Mistral. Dies sind dieselben Modellfamilien, die in den meisten Local-LLM-Apps und -Tools zum Einsatz kommen, was bedeutet, dass die praktische Qualitätsobergrenze davon abhängt, wie groß ein Modell ist, das Ihr iPhone (oder der verbundene Desktop-Rechner) ausführen kann – nicht von einem proprietären, ausschließlich für Arbiter bestimmten Modell.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Arbiter ist eine kostenlose iPhone-App, die Open-Source-Sprachmodelle auf dem Gerät ausführt oder sich mit leistungsstärkeren Modellen auf Ihrem eigenen PC oder Mac verbindet, ohne Konten oder Server.',
          },
          {
            type: 'plain-terms',
            text:
              'Mit Arbiter chatten Sie auf Ihrem iPhone mit KI, so wie mit einem Cloud-Chatbot – nur dass die Unterhaltung auf Ihrem Telefon (oder einem Computer, den Sie selbst besitzen) verbleibt, statt an die Server eines Unternehmens gesendet zu werden.',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Wie lokale KI in Arbiter funktioniert',
        content: [
          'Arbiter bietet zwei Wege zum KI-Chat, die beide darauf ausgelegt sind, Daten von Servern Dritter fernzuhalten:',
        ],
        items: [
          '**On-Device-Modelle** — Laden Sie ein leichtgewichtiges Open-Source-Modell (Gemma, Llama, DeepSeek, Qwen oder Mistral) direkt in die App und führen Sie die Inferenz auf Ihrem iPhone aus. Sobald ein Modell heruntergeladen ist, ist keine Internetverbindung mehr nötig, und kein Server eines Drittanbieters sieht Ihre Unterhaltung.',
          '**Verbindung zu einem leistungsstärkeren Desktop-Modell** — Reicht die Qualität eines On-Device-Modells für eine Aufgabe nicht aus, kann sich Arbiter über Tools wie LM Studio oder Ollama, oder über die separate Begleit-App „Arbiter for Mac", mit Modellen verbinden, die auf Ihrem eigenen PC oder Mac laufen. Die Inferenz findet auf dem von Ihnen kontrollierten Desktop-Rechner statt; das Telefon dient als Bedienoberfläche. So entfällt der Kompromiss, entweder auf das beschränkt zu sein, was ein Telefon leisten kann, oder Ihre Prompts an eine Cloud-API zu senden.',
          '**Dokumentenzusammenfassungen** — Sie können Dokumente auf Ihrem Gerät hochladen und sich von Arbiter Zusammenfassungen sowie zentrale Erkenntnisse erstellen lassen, ohne die Datei zuvor an einen Cloud-Dienst zu übermitteln.',
        ],
        note: 'Die genaue minimale iOS-Version, modellspezifische Downloadgrößen und die vollständige Liste unterstützter Open-Source-Modellvarianten werden vom Entwickler nicht im Detail veröffentlicht. Prüfen Sie die aktuellen Angaben im App-Store-Eintrag oder auf askarbiter.ai, bevor Sie sich für ein bestimmtes Gerät auf ein bestimmtes Modell verlassen. Zuletzt gegen den App-Store-Eintrag geprüft am 2026-09-04.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        items: [
          '**Lokaler Modell-Chat.** Laden Sie Gemma, Llama, DeepSeek, Qwen oder Mistral herunter und führen Sie sie direkt auf Ihrem iPhone aus, für vollständig offline nutzbaren Chat, sobald das Modell heruntergeladen ist.',
          '**Desktop-Verbindung für größere Modelle.** Verbinden Sie sich mit LM Studio oder Ollama auf Ihrem eigenen PC oder Mac, oder mit der Begleit-App „Arbiter for Mac", um leistungsfähigere Modelle zu erreichen, als ein iPhone allein ausführen kann – während die Inferenz auf Hardware bleibt, die Sie kontrollieren.',
          '**Dokumentenzusammenfassungen.** Laden Sie ein Dokument auf Ihrem Gerät hoch und erhalten Sie eine Zusammenfassung sowie zentrale Erkenntnisse zurück, verarbeitet auf dem Gerät statt über einen Cloud-Upload.',
          '**Keine Konten.** Es gibt keine Registrierung, keinen Login und kein Kontosystem – Sie öffnen die App und können sofort loslegen.',
          '**Keine Datenerfassung, laut Angaben des Entwicklers.** Der Entwickler gibt an, dass Unterhaltungen niemals das Gerät verlassen und dass Arbiter keine eigenen Server betreibt, um Ihre Chats zu verarbeiten oder zu speichern.',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: 'Hardware-Anforderungen und Preise',
        columns: ['Punkt', 'Was Arbiter angibt', 'Was das in der Praxis bedeutet'],
        rows: [
          {
            'Punkt': 'Empfohlene Mindest-Hardware',
            'Was Arbiter angibt': 'iPhone 13 Pro oder neuer, oder jedes Gerät mit mindestens 6 GB RAM, für einen flüssigen Betrieb.',
            'Was das in der Praxis bedeutet': 'Ältere oder RAM-schwächere iPhones können die App unter Umständen weiterhin ausführen, allerdings können On-Device-Modellantworten langsamer ausfallen oder Sie sind auf kleinere Modelle beschränkt. Ist Ihr iPhone älter als das 13 Pro und hat weniger als 6 GB RAM, empfiehlt sich eher der Weg über die Desktop-Verbindung statt der On-Device-Inferenz.',
          },
          {
            'Punkt': 'Plattform',
            'Was Arbiter angibt': 'iOS / iPhone. Eine Begleit-App, „Arbiter for Mac", ist verfügbar, um sich mit größeren Modellen zu verbinden.',
            'Was das in der Praxis bedeutet': 'Es gibt keine Android- oder Windows-Version. Arbiter for Mac wird ausdrücklich als Möglichkeit beschrieben, von Ihrem Telefon aus leistungsfähigere Modelle zu erreichen – behandeln Sie es eher als Verbindungspunkt denn als bestätigten vollwertigen eigenständigen Mac-Chat-Client, bis der Entwickler es entsprechend dokumentiert.',
          },
          {
            'Punkt': 'Preise',
            'Was Arbiter angibt': 'Kostenlos, mit optionalen In-App-Käufen. Kategorie: Produktivität.',
            'Was das in der Praxis bedeutet': 'Sie können die App installieren und nutzen, ohne zu bezahlen. Konkrete In-App-Kaufstufen, Preise und deren Inhalte sind im Ausgangsmaterial für diesen Test nicht veröffentlicht – prüfen Sie den aktuellen App-Store-Eintrag für tagesaktuelle Preise, bevor Sie annehmen, dass eine bestimmte Funktion kostenlos oder kostenpflichtig ist.',
          },
          {
            'Punkt': 'Speicherplatz für On-Device-Modelle',
            'Was Arbiter angibt': 'Vom Entwickler nicht im Detail angegeben.',
            'Was das in der Praxis bedeutet': 'Open-Source-Modelle der Familien Gemma, Llama, DeepSeek, Qwen und Mistral liegen je nach Parameteranzahl und Quantisierung typischerweise bei etwa 1–5 GB pro Modell. Planen Sie den iPhone-Speicherplatz entsprechend ein, wenn Sie mehr als ein Modell gleichzeitig heruntergeladen halten möchten.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            'Vorteil': 'Privatsphäre by Design',
            'Was das in der Praxis bedeutet': 'Keine Konten, keine von Arbiter betriebenen Server, die Ihre Chats verarbeiten – laut der vom Entwickler angegebenen Konzeption bleiben Unterhaltungen auf Ihrem Gerät oder dem verbundenen Desktop-Rechner.',
            'Einschränkung / Vorbehalt': 'Dieser Test stützt sich auf die Angaben des Entwicklers und nicht auf eine unabhängige Prüfung durch Dritte; sehen Sie sich die aktuelle Datenschutzerklärung im App Store an, bevor Sie sensible Informationen verarbeiten.',
          },
          {
            'Vorteil': 'Funktioniert vollständig offline, sobald ein Modell heruntergeladen ist',
            'Was das in der Praxis bedeutet': 'On-Device-Chat mit Gemma, Llama, DeepSeek, Qwen oder Mistral benötigt nach der Einrichtung keine Internetverbindung.',
            'Einschränkung / Vorbehalt': 'Die anfängliche App-Installation und der Modell-Download erfordern eine Internetverbindung. Die Verbindung zu LM Studio, Ollama oder Arbiter for Mac benötigt eine Netzwerkverbindung zwischen Ihrem Telefon und dem Desktop-Rechner.',
          },
          {
            'Vorteil': 'Keine laufenden Kosten erforderlich',
            'Was das in der Praxis bedeutet': 'Kostenloser Download, optionale In-App-Käufe – Sie werden nicht zu einem Abonnement gezwungen, um die Kern-App zu nutzen.',
            'Einschränkung / Vorbehalt': 'On-Device-Inferenz beansprucht Akku und Rechenleistung Ihres iPhones; größere Modelle können auf älteren oder RAM-schwächeren Geräten langsamer laufen.',
          },
          {
            'Vorteil': 'Zugriff auf größere Modelle ohne Cloud-API',
            'Was das in der Praxis bedeutet': 'Die Verbindung zu LM Studio, Ollama oder Arbiter for Mac ermöglicht die Nutzung größerer, leistungsfähigerer Modelle, als ein iPhone allein ausführen kann, während die Inferenz auf Hardware bleibt, die Ihnen gehört.',
            'Einschränkung / Vorbehalt': 'Erfordert einen PC oder Mac mit ausreichend RAM/GPU sowie bereits eingerichtetem LM Studio, Ollama oder Arbiter for Mac – dies ist kein Weg ohne jeglichen Einrichtungsaufwand für Nutzer ohne kompatiblen Desktop-Rechner.',
          },
          {
            'Vorteil': 'Dokumentenzusammenfassungen auf dem Gerät',
            'Was das in der Praxis bedeutet': 'Erhalten Sie Zusammenfassungen und zentrale Erkenntnisse aus Dateien, ohne diese an einen Cloud-Dienst hochzuladen.',
            'Einschränkung / Vorbehalt': 'Die Qualität der Zusammenfassung hängt von der gewählten Größe des On-Device-Modells ab; unterstützte Dateiformate und die maximale Dokumentlänge werden vom Entwickler in öffentlichen Materialien nicht näher spezifiziert.',
          },
          {
            'Vorteil': 'Einfache, kuratierte Modellliste',
            'Was das in der Praxis bedeutet': 'Gemma, Llama, DeepSeek, Qwen und Mistral decken eine Bandbreite an Open-Source-Modellfamilien ab, ohne dass Sie selbst auf Hugging Face suchen müssen.',
            'Einschränkung / Vorbehalt': 'Die genaue Liste der spezifischen Modellgrößen/-varianten sowie ob ein benutzerdefinierter GGUF-Import unterstützt wird, ist im Ausgangsmaterial für diesen Test nicht angegeben – prüfen Sie den aktuellen App-Store-Eintrag für die tagesaktuelle Modellliste.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter im Vergleich zu Alternativen',
        columns: ['App', 'Am besten für', 'Setup-Aufwand', 'Plattformfokus', 'Wichtigste Einschränkung'],
        rows: [
          {
            'App': 'Arbiter',
            'Am besten für': 'iPhone-Nutzer, die On-Device-Chat plus die Option auf größere Modelle über den eigenen PC/Mac möchten',
            'Setup-Aufwand': 'Minimal für On-Device-Chat; mehr Aufwand für die Verbindung zu LM Studio/Ollama/Arbiter for Mac',
            'Plattformfokus': 'Nur iOS/iPhone, mit Mac-Begleit-App zur Verbindung mit größeren Modellen',
            'Wichtigste Einschränkung': 'Keine Android- oder Windows-App; In-App-Kaufstufen nicht öffentlich detailliert',
          },
          {
            'App': '[Loci](/de/power-local-llm/loci-ai-review-offline-local-ai)',
            'Am besten für': 'Reibungsarmer, plattformübergreifender privater Chat',
            'Setup-Aufwand': 'Minimal (herunterladen, chatten)',
            'Plattformfokus': 'iPhone/iPad/Android/Mac/Windows (5 Plattformen)',
            'Wichtigste Einschränkung': 'Kuratierte Bibliothek mit ~10 Modellen; kein GGUF-Import möglich',
          },
          {
            'App': 'Private LLM',
            'Am besten für': 'Nur-Apple-Nutzer, die eine erweiterte Modellauswahl möchten',
            'Setup-Aufwand': 'Niedrig bis mittel (Einmalkauf, Modell-Downloads)',
            'Plattformfokus': 'iPhone/iPad/Mac (nur Apple)',
            'Wichtigste Einschränkung': 'Nur Apple; erfordert das Erlernen von Quantisierungsformaten',
          },
          {
            'App': 'PocketPal AI',
            'Am besten für': 'Nutzer, die vollen GGUF-Import und Modellkontrolle möchten',
            'Setup-Aufwand': 'Mittel (kostenlos, erfordert aber das Beschaffen von Modelldateien)',
            'Plattformfokus': 'iPhone/iPad, teilweise Android-Unterstützung',
            'Wichtigste Einschränkung': 'Erfordert Vertrautheit mit GGUF-Dateien und manueller Modellauswahl',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Arbiter eignet',
        items: [
          '**iPhone-Nutzer, die privaten Chat ohne Konto möchten.** Kein Anmeldeschritt – Sie öffnen die App und chatten sofort mit einem On-Device-Modell.',
          '**Nutzer, die gelegentlich ein größeres Modell benötigen.** Die Verbindung zu LM Studio, Ollama oder Arbiter for Mac ermöglicht den Zugriff auf ein leistungsstärkeres Modell auf Ihrem eigenen Desktop-Rechner, wenn ein On-Device-Modell nicht ausreicht – ohne Prompts an eine Cloud-API eines Drittanbieters zu senden.',
          '**Wer Dokumentenzusammenfassungen ohne Cloud-Upload möchte.** Laden Sie eine Datei auf dem Gerät hoch und erhalten Sie eine Zusammenfassung sowie zentrale Erkenntnisse zurück.',
          '**Budgetbewusste Nutzer.** Kostenlos mit optionalen In-App-Käufen – kein erzwungenes Abonnement, um die App auszuprobieren.',
          '**Nutzer mit einem iPhone 13 Pro oder neuer (oder einem Gerät mit 6 GB+ RAM).** Dies ist die Hardware-Spanne, die der Entwickler für einen flüssigen On-Device-Betrieb empfiehlt.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Arbiter nicht eignet',
        items: [
          '**Android- oder Windows-Nutzer.** Arbiter ist nur für iOS/iPhone verfügbar; es gibt im Ausgangsmaterial für diesen Test keine native Android- oder Windows-App.',
          '**Wer rein On-Device Reasoning auf Cloud-Spitzenniveau erwartet.** On-Device-Modelle der Familien Gemma, Llama, DeepSeek, Qwen und Mistral stoßen auf einem iPhone an dieselbe durch die Parameteranzahl bedingte Obergrenze wie in jeder anderen telefonbasierten Local-AI-App; für die größten Modelle müssen Sie sich weiterhin mit einem Desktop-Rechner verbinden oder einen Cloud-Dienst nutzen.',
          '**Nutzer mit einem älteren iPhone unterhalb der empfohlenen Hardware-Stufe.** Geräte, die älter sind als das iPhone 13 Pro oder weniger als 6 GB RAM haben, könnten eine langsamere On-Device-Leistung erleben.',
          '**Wer schon heute eine ausgereifte, vollständig dokumentierte eigenständige Mac-Chat-App möchte.** „Arbiter for Mac" wird als Möglichkeit beschrieben, sich vom Telefon aus mit größeren Modellen zu verbinden; es ist im Ausgangsmaterial nicht bestätigt, dass es sich um eine vollwertige eigenständige Mac-Chat-Anwendung handelt.',
          '**Nutzer, die hochsensible Informationen verarbeiten und eine unabhängig geprüfte Datenschutzzusage benötigen.** Die Positionierung von Arbiter ohne Konten, ohne Server und ohne Datenerfassung beruht auf der vom Entwickler angegebenen Konzeption; prüfen Sie die aktuelle Datenschutzerklärung im App-Store-Eintrag, bevor Sie sich für vertrauliche Arbeit darauf verlassen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist Arbiter - Local AI Chat?',
            a: 'Arbiter ist ein auf Privatsphäre ausgerichteter Offline-KI-Assistent fürs iPhone, entwickelt von Jordan Stone. Sie können leichtgewichtige Open-Source-Modelle (Gemma, Llama, DeepSeek, Qwen, Mistral) lokal auf Ihrem iPhone herunterladen und ausführen, oder sich mit leistungsstärkeren Modellen auf Ihrem eigenen PC oder Mac verbinden – über LM Studio, Ollama oder die Begleit-App „Arbiter for Mac".',
          },
          {
            q: 'Ist Arbiter wirklich privat?',
            a: 'Die vom Entwickler angegebene Konzeption sieht keine Konten, keine Server und keine Datenerfassung vor – Unterhaltungen sind so ausgelegt, dass sie das genutzte Gerät niemals verlassen, egal ob es sich um Ihr iPhone oder einen verbundenen Desktop-Rechner handelt. Wie bei jeder Datenschutzzusage sollten Sie die aktuelle Datenschutzerklärung im App-Store-Eintrag prüfen, bevor Sie sensible Informationen verarbeiten, da dieser Test auf den öffentlichen Angaben des Entwicklers beruht und nicht auf einer unabhängigen Prüfung.',
          },
          {
            q: 'Funktioniert Arbiter ohne Internetverbindung?',
            a: 'Ja, für On-Device-Chat: Sobald ein Modell (Gemma, Llama, DeepSeek, Qwen oder Mistral) auf Ihr iPhone heruntergeladen wurde, funktioniert der Chat ohne Internetverbindung. Der Download der App und des ersten Modells erfordert eine Internetverbindung, und die Verbindung zu LM Studio, Ollama oder Arbiter for Mac benötigt eine Netzwerkverbindung zwischen Ihrem Telefon und dem Desktop-Rechner.',
          },
          {
            q: 'Welches iPhone benötige ich für einen flüssigen Betrieb von Arbiter?',
            a: 'Der Entwickler empfiehlt ein iPhone 13 Pro oder neuer, oder jedes Gerät mit mindestens 6 GB RAM, für einen flüssigen Betrieb. Ältere oder RAM-schwächere iPhones können die App weiterhin ausführen, könnten aber langsamere On-Device-Antworten zeigen, besonders bei größeren Modellen.',
          },
          {
            q: 'Welche KI-Modelle unterstützt Arbiter?',
            a: 'Arbiter unterstützt leichtgewichtige Open-Source-Modelle: Gemma, Llama, DeepSeek, Qwen und Mistral. Diese laufen lokal auf dem Gerät. Für leistungsstärkere Modelle kann sich Arbiter mit LM Studio oder Ollama auf Ihrem eigenen PC oder Mac verbinden, oder mit der Begleit-App Arbiter for Mac.',
          },
          {
            q: 'Wie funktioniert die Verbindung zu LM Studio oder Ollama?',
            a: 'Statt ein Modell direkt auf Ihrem iPhone auszuführen, kann sich Arbiter mit einem bereits laufenden Modell auf Ihrem eigenen PC oder Mac verbinden – über LM Studio, Ollama oder die Begleit-App Arbiter for Mac. Die Inferenz findet auf dem von Ihnen kontrollierten Desktop-Rechner statt, und die Telefon-Oberfläche von Arbiter sendet und empfängt Nachrichten damit – so erhalten Sie Zugriff auf größere, leistungsfähigere Modelle, als Ihr iPhone allein ausführen kann, ohne eine Cloud-API eines Drittanbieters dazwischen.',
          },
          {
            q: 'Kostet Arbiter Geld?',
            a: 'Arbiter steht kostenlos zum Download bereit, mit optionalen In-App-Käufen. Die App ist im App Store in der Kategorie Produktivität gelistet. Konkrete In-App-Kaufstufen und Preise sind im Ausgangsmaterial für diesen Test nicht detailliert angegeben – prüfen Sie den aktuellen App-Store-Eintrag für tagesaktuelle Preise.',
          },
          {
            q: 'Kann Arbiter Dokumente zusammenfassen?',
            a: 'Ja. Sie können Dokumente auf Ihrem Gerät hochladen, und Arbiter erstellt Zusammenfassungen und zieht zentrale Erkenntnisse heraus, verarbeitet auf dem Gerät statt über einen Cloud-Upload.',
          },
          {
            q: 'Gibt es eine Android- oder Windows-Version von Arbiter?',
            a: 'Nein. Arbiter ist für iOS/iPhone verfügbar. Es gibt eine separate Begleit-App „Arbiter for Mac" zur Verbindung mit leistungsstärkeren Modellen, aber im Ausgangsmaterial für diesen Test keinen Android- oder Windows-Client.',
          },
          {
            q: 'Wie schneidet Arbiter im Vergleich zu Loci oder Private LLM ab?',
            a: 'Loci funktioniert plattformübergreifend auf fünf Plattformen (iPhone, iPad, Android, Mac, Windows) mit einer kuratierten Modellbibliothek und minimalem Einrichtungsaufwand. Private LLM ist nur für Apple-Geräte, mit einer größeren Modellbibliothek (140+ Modelle) und mehr Kontrolle über die Quantisierung, verkauft als Einmalkauf. Arbiter ist auf das iPhone fokussiert, mit einer kleineren, einfacheren Modellliste (Gemma, Llama, DeepSeek, Qwen, Mistral), bietet aber zusätzlich die Option, sich direkt mit LM Studio, Ollama oder dem eigenen Mac für größere Modelle zu verbinden – eine Kombination, die nicht alle Wettbewerber in dieser Form anbieten.',
          },
          {
            q: 'Muss ich bei der Verwendung von Arbiter die DSGVO beachten?',
            a: 'Arbiter ist laut Angaben des Entwicklers so konzipiert, dass Unterhaltungen und hochgeladene Dokumente auf Ihrem Gerät verbleiben und nicht an Server des Anbieters übertragen werden. Das kann bei der datenschutzrechtlichen Bewertung relevant sein, da bestimmte Fragen der Datenübermittlung an Dritte durch eine rein lokale Verarbeitung entfallen. Dieser Überblick ersetzt jedoch keine rechtliche Prüfung: Ob und wie Vorgaben wie Art. 28 DSGVO oder Sicherheitsstandards nach den BSI-Grundschutz-Katalogen im Einzelfall greifen, hängt von Ihrem konkreten Einsatzzweck ab, und Arbiter macht keine eigene Zusage zur DSGVO-Konformität. Prüfen Sie die aktuelle Datenschutzerklärung im App Store und ziehen Sie bei geschäftlicher Nutzung im Zweifel rechtlichen Rat hinzu.',
          },
          {
            q: 'Ist Arbiter für den deutschen Mittelstand geeignet?',
            a: 'Für kleine und mittlere Unternehmen im deutschen Mittelstand kann die von Arbiter beschriebene Architektur ohne Konten und ohne herstellerseitige Server für einfache interne Anwendungsfälle interessant sein, etwa Chat oder Zusammenfassungen auf iPhones, bei denen Daten das Gerät nicht verlassen sollen. Für den professionellen Einsatz sollten IT-Verantwortliche vor der produktiven Nutzung dennoch eigenständig die aktuelle Datenschutzerklärung, mögliche Anforderungen an IT-Sicherheitsstandards wie die BSI-Grundschutz-Kataloge sowie interne Richtlinien prüfen, da dieser Test ausschließlich auf öffentlich zugänglichen Herstellerangaben beruht und keine eigene Sicherheitsprüfung ersetzt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Arbiter lohnt sich, wenn Sie eine kostenlose iPhone-App ohne Konto für privaten KI-Chat und Dokumentenzusammenfassungen suchen, mit einem echten Ausweg, falls die On-Device-Modellqualität nicht ausreicht: der Verbindung zu LM Studio, Ollama oder Ihrem eigenen Mac über die Begleit-App Arbiter for Mac. Die Datenschutz-Positionierung des Entwicklers – keine Konten, keine Server, keine Datenerfassung – entspricht genau dem, wonach die meisten privatsphärebewussten Nutzer mobiler KI suchen, auch wenn es sich, wie bei jeder Single-Developer-App, lohnt, die aktuelle Datenschutzerklärung im App Store selbst zu prüfen, bevor Sie sensible Inhalte anvertrauen. Die empfohlene Hardware-Stufe (iPhone 13 Pro oder neuer, oder 6 GB+ RAM) ist für die meisten aktuellen iPhones realistisch. Schwächer ist Arbiter in der Breite: Die App ist nur fürs iPhone verfügbar, die Begleit-App Arbiter for Mac ist nicht als vollwertige eigenständige Mac-Chat-App bestätigt, und Details zu In-App-Kaufpreisen sowie genauen Modellvarianten sind nicht im Detail veröffentlicht. Wer eine ausgereifte, plattformübergreifende App mit einer größeren kuratierten Modellbibliothek möchte, sollte sich zusätzlich Loci ansehen; wer maximale Kontrolle über Modell und Quantisierung auf Apple-Geräten möchte, sollte Private LLM prüfen. Für iPhone-fokussierte Nutzer, die einfachen On-Device-Chat plus die Option auf größere Modelle auf eigener Hardware möchten, füllt Arbiter eine echte Lücke.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Arbiter - Local AI Chat im App Store](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) — offizieller Eintrag, Kategorie, Preise, Entwicklerangaben.',
          '[Offizielle Arbiter-Website (askarbiter.ai)](https://www.askarbiter.ai/) — Produktübersicht und Funktionen.',
          '[Loci im App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — zum Vergleich, eine plattformübergreifende On-Device-KI-App.',
          '[Offizielle Website von Private LLM](https://privatellm.app/en) — zum Vergleich, eine nur für Apple verfügbare Local-LLM-App mit größerer Modellbibliothek.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Loci AI im Test: Private Offline-KI auf iPhone, Android, iPad und Mac](/de/power-local-llm/loci-ai-review-offline-local-ai) — eine plattformübergreifende On-Device-KI-App zum Vergleich mit Arbiter.',
          '[Die besten Local-LLM-Apps fürs iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der iPhone-App-Überblick, inklusive PocketPal AI, Private LLM und Apple Intelligence.',
          '[Die besten mobilen LLM-Modelle 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — der modellseitige Begleitartikel zu denselben Modellfamilien, die Arbiter unterstützt.',
          '[Ein lokales LLM auf Ihrem Tablet ausführen: iPad und Android (2026)](/de/power-local-llm/run-ai-on-tablet-ipad-android) — geräteorientierter Leitfaden für On-Device- und Remote-Inferenz auf Tablets.',
          '[Local LLM Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — umfassendes App- und Tool-Verzeichnis für alle Plattformen.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Arbiter Local AI Chat im Test (2026): Private KI offline auf dem iPhone',
      'description': 'Arbiter im Test: Lohnt sich diese auf Privatsphäre ausgerichtete Offline-KI-Chat-App fürs iPhone? On-Device-Modelle, Dokumentenzusammenfassungen, Verbindung zu LM Studio/Ollama, Hardware-Anforderungen und Preise.',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'sameAs': 'https://www.linkedin.com/in/hanskuepper/',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'de',
      'url': 'https://www.promptquorum.com/de/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'Arbiter ist eine kostenlose iPhone-App für privaten, On-Device-KI-Chat, entwickelt von Jordan Stone. Die App führt Open-Source-Modelle (Gemma, Llama, DeepSeek, Qwen, Mistral) lokal aus oder verbindet sich mit größeren Modellen auf Ihrem eigenen PC oder Mac über LM Studio, Ollama oder Arbiter for Mac.',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'iPhone-Nutzer, die entscheiden möchten, ob Arbiter für private, offline nutzbaren KI-Chat und Dokumentenzusammenfassungen geeignet ist' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': 'KI auf dem Gerät' },
        { '@type': 'Thing', 'name': 'Lokale LLM-Apps' },
        { '@type': 'Thing', 'name': 'Mobile Privatsphäre' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/de/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-fr.webp',
    title: 'Avis Arbiter Local AI Chat (2026) : IA hors ligne privée pour iPhone',
    seoTitle: 'Avis Arbiter AI 2026 : chat IA privé sur iPhone',
    intro:
      'Développée par Jordan Stone, Arbiter est un assistant IA pour iPhone conçu autour d\'un principe simple, selon l\'éditeur : vos conversations ne quittent jamais votre appareil. Vous pouvez télécharger et exécuter des modèles open source légers (Gemma, Llama, DeepSeek, Qwen, Mistral) directement sur votre iPhone, ou vous connecter à des modèles plus puissants exécutés sur votre propre PC ou Mac via des outils comme LM Studio, Ollama, ou l\'application compagnon distincte « Arbiter for Mac ». Il n\'y a ni compte, ni serveur, ni collecte de données : l\'application est conçue pour que vos conversations, ainsi que tout document que vous téléversez pour un résumé, restent sur l\'appareil que vous utilisez. La question pratique pour qui compare les applications de chat sur l\'appareil est de savoir si Arbiter offre assez de capacités sur du matériel de type iPhone pour devenir un véritable outil quotidien, ou s\'il est surtout utile comme interface privée vers des modèles plus puissants exécutés ailleurs.',
    metaDescription:
      'Avis Arbiter : cette appli de chat IA hors ligne et privée vaut-elle le coup sur iPhone ? Modèles sur l\'appareil, résumés de documents, LM Studio/Ollama, matériel requis et tarifs.',
    twitterDescription:
      'Avis Arbiter Local AI Chat 2026 : exécutez des modèles open source sur votre iPhone, ou connectez-vous à LM Studio/Ollama/Arbiter for Mac pour des modèles plus puissants. Sans compte, sans serveur, sans collecte de données.',
    audience:
      'Utilisateurs d\'iPhone qui hésitent à utiliser Arbiter pour un chat IA privé et hors ligne, ainsi que pour le résumé de documents — couvre la prise en charge des modèles sur l\'appareil, la configuration matérielle requise, la connexion à des outils d\'inférence sur ordinateur, et la comparaison avec d\'autres applications d\'IA locale mobiles.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Obtenir Arbiter sur l\'App Store →', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'avis arbiter ai',
      'arbiter local ai chat avis',
      'application arbiter ios',
      'arbiter ia hors ligne iphone',
      'arbiter vs private llm',
      'arbiter llm local iphone',
      'arbiter application ia privée',
      'utiliser ia locale sur iphone arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**Arbiter est particulièrement intéressant si vous cherchez une application de chat iPhone sans compte ni serveur, qui garde vos conversations et documents téléversés entièrement sur l\'appareil, avec la possibilité de faire appel à des modèles plus puissants en cas de besoin.** Sur un iPhone 13 Pro ou plus récent (ou tout appareil disposant d\'au moins 6 Go de RAM), elle exécute localement des modèles open source légers — Gemma, Llama, DeepSeek, Qwen et Mistral — pour le chat et le résumé de documents. Lorsque la qualité des modèles embarqués ne suffit pas, Arbiter peut se connecter à des modèles plus puissants exécutés sur votre propre PC ou Mac via LM Studio, Ollama, ou l\'application compagnon distincte « Arbiter for Mac », afin d\'obtenir une réponse d\'un modèle plus grand sans rien envoyer à un serveur tiers. L\'application est gratuite, avec des achats intégrés facultatifs. Les utilisateurs souhaitant la plus vaste bibliothèque de modèles possible, un contrôle poussé de la quantification, ou une présence multiplateforme mature (Android, Windows) devraient la comparer à des applications d\'IA locale plus établies.',
    quickAnswerTop: {
      fr: {
        question: 'Dois-je utiliser Arbiter pour une IA privée et hors ligne sur iPhone ?',
        answer:
          'Optez pour Arbiter si vous voulez une application iPhone gratuite et sans compte pour le chat IA sur l\'appareil et le résumé de documents, avec la possibilité de vous connecter à des modèles plus puissants sur votre propre PC ou Mac. Passez votre chemin si vous avez besoin d\'une compatibilité Android ou Windows, d\'une très large bibliothèque de modèles organisée, ou d\'un niveau de raisonnement de pointe que seule l\'IA cloud offre actuellement.',
        bullets: [
          'Gratuite avec achats intégrés facultatifs ; aucun abonnement requis pour les fonctionnalités principales.',
          'Sans compte, sans serveur — les conversations et documents téléversés restent sur l\'appareil, selon les déclarations de l\'éditeur.',
          'Exécute Gemma, Llama, DeepSeek, Qwen et Mistral localement sur iPhone ; peut se connecter à LM Studio, Ollama ou Arbiter for Mac pour des modèles plus puissants.',
          'Matériel recommandé : iPhone 13 Pro ou plus récent, ou tout appareil avec au moins 6 Go de RAM, pour des performances fluides.',
          'Réservée à iOS/iPhone ; le compagnon « Arbiter for Mac » sert à se connecter à des modèles plus puissants, ce n\'est pas une application de chat Mac autonome confirmée.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'Arbiter', anchor: 'what-is-arbiter' },
      { label: 'Comment fonctionne l\'IA locale dans Arbiter', anchor: 'how-local-ai-works' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Configuration requise et tarifs', anchor: 'hardware-and-pricing' },
      { label: 'Avantages et limites', anchor: 'tradeoffs' },
      { label: 'Arbiter face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Arbiter est fait', anchor: 'who-should-use' },
      { label: 'Pour qui Arbiter n\'est pas fait', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Pour aller plus loin', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        items: [
          'Arbiter est une application iPhone gratuite pour le chat IA sur l\'appareil, développée par Jordan Stone, positionnée comme axée sur la confidentialité : sans compte, sans serveur, sans collecte de données.',
          'Elle prend en charge localement des modèles open source légers — Gemma, Llama, DeepSeek, Qwen et Mistral.',
          'Vous pouvez aussi vous connecter à des modèles plus puissants exécutés sur votre propre PC ou Mac via LM Studio, Ollama, ou le compagnon distinct « Arbiter for Mac », plutôt qu\'une API cloud tierce.',
          'Vous pouvez téléverser des documents pour obtenir des résumés et les points clés, traités sur l\'appareil.',
          'Matériel recommandé : iPhone 13 Pro ou plus récent, ou tout appareil avec au moins 6 Go de RAM, pour des performances fluides.',
          'Tarifs : gratuite avec achats intégrés facultatifs. Catégorie : Productivité.',
          'Réservée à iOS/iPhone pour l\'application principale ; Arbiter for Mac est présentée comme un moyen de se connecter à des modèles plus puissants, non confirmée comme un client Mac autonome complet.',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'Qu\'est-ce qu\'Arbiter',
        content: [
          'Arbiter est un assistant IA hors ligne axé sur la confidentialité pour iPhone, développé par Jordan Stone et référencé sur l\'App Store sous le nom « Arbiter - Local AI Chat » (id6747954532), avec un site éditeur sur askarbiter.ai. L\'application est gratuite au téléchargement, avec des achats intégrés facultatifs, et classée dans la catégorie Productivité.',
          'Le choix de conception central est qu\'Arbiter ne nécessite pas de compte et ne s\'appuie pas sur ses propres serveurs pour traiter vos conversations : elle exécute soit un modèle directement sur votre iPhone, soit se connecte à un modèle exécuté sur du matériel que vous contrôlez (votre propre PC ou Mac). Selon l\'éditeur, les conversations ne quittent jamais l\'appareil — que ce soit votre téléphone ou l\'ordinateur auquel vous vous connectez.',
          'La prise en charge des modèles repose sur des familles open source légères : Gemma, Llama, DeepSeek, Qwen et Mistral. Ce sont les mêmes familles de modèles utilisées par la plupart des applications et outils d\'IA locale, ce qui signifie que le plafond de qualité pratique dépend de la taille de modèle que votre iPhone (ou l\'ordinateur connecté) peut exécuter, et non d\'un modèle propriétaire exclusif à Arbiter.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Arbiter est une application iPhone gratuite qui exécute des modèles de langage open source sur l\'appareil ou se connecte à des modèles plus puissants sur votre propre PC ou Mac, sans compte ni serveur.',
          },
          {
            type: 'plain-terms',
            text:
              'Arbiter permet de discuter avec une IA sur votre iPhone comme avec un chatbot cloud, sauf que la conversation reste sur votre téléphone (ou sur un ordinateur qui vous appartient) au lieu d\'être envoyée aux serveurs d\'une entreprise.',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Comment fonctionne l\'IA locale dans Arbiter',
        content: [
          'Arbiter propose deux façons de dialoguer avec l\'IA, toutes deux conçues pour garder les données hors des serveurs tiers :',
        ],
        items: [
          '**Modèles sur l\'appareil** — téléchargez un modèle open source léger (Gemma, Llama, DeepSeek, Qwen ou Mistral) directement dans l\'application et exécutez l\'inférence sur votre iPhone. Aucune connexion internet n\'est nécessaire une fois le modèle téléchargé, et aucun serveur tiers ne voit votre conversation.',
          '**Connexion à un modèle plus puissant sur ordinateur** — si la qualité des modèles embarqués ne suffit pas pour une tâche, Arbiter peut se connecter à des modèles exécutés sur votre propre PC ou Mac via des outils comme LM Studio ou Ollama, ou via l\'application compagnon distincte « Arbiter for Mac ». L\'inférence a lieu sur l\'ordinateur que vous contrôlez ; le téléphone sert d\'interface. Cela évite de devoir choisir entre les limites d\'un téléphone et l\'envoi de vos prompts à une API cloud.',
          '**Résumés de documents** — vous pouvez téléverser des documents sur votre appareil et demander à Arbiter d\'en générer des résumés et d\'en extraire les points clés, sans envoyer le fichier vers un service cloud au préalable.',
        ],
        note: 'La version iOS minimale exacte, la taille de téléchargement de chaque modèle, et la liste complète des variantes de modèles open source pris en charge ne sont pas publiées en détail par l\'éditeur. Vérifiez les informations actuelles sur la fiche App Store ou sur askarbiter.ai avant de vous fier à un modèle précis pour un appareil précis. Dernière vérification par rapport à la fiche App Store le 2026-09-04.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        items: [
          '**Chat avec modèle local.** Téléchargez et exécutez Gemma, Llama, DeepSeek, Qwen ou Mistral directement sur votre iPhone pour un chat entièrement hors ligne une fois le modèle téléchargé.',
          '**Connexion à un ordinateur pour des modèles plus puissants.** Connectez-vous à LM Studio ou Ollama sur votre propre PC ou Mac, ou au compagnon « Arbiter for Mac », pour accéder à des modèles plus capables que ce qu\'un iPhone peut exécuter seul — tout en gardant l\'inférence sur du matériel que vous contrôlez.',
          '**Résumés de documents.** Téléversez un document sur votre appareil et obtenez un résumé ainsi que les points clés, traités sur l\'appareil plutôt que via un envoi vers le cloud.',
          '**Sans compte.** Aucune inscription, connexion ou système de compte — vous ouvrez l\'application et vous commencez à l\'utiliser.',
          '**Sans collecte de données, selon l\'éditeur.** L\'éditeur déclare que les conversations ne quittent jamais l\'appareil, et qu\'Arbiter n\'exploite pas ses propres serveurs pour traiter ou stocker vos échanges.',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: 'Configuration requise et tarifs',
        columns: ['Élément', 'Ce qu\'indique Arbiter', 'Ce que cela signifie en pratique'],
        rows: [
          {
            'Élément': 'Matériel minimum recommandé',
            'Ce qu\'indique Arbiter': 'iPhone 13 Pro ou plus récent, ou tout appareil avec au moins 6 Go de RAM, pour des performances fluides.',
            'Ce que cela signifie en pratique': 'Les iPhone plus anciens ou avec moins de RAM peuvent quand même faire fonctionner l\'application, mais les réponses des modèles embarqués peuvent être plus lentes, ou vous pourriez être limité à des modèles plus petits. Si votre iPhone est antérieur au 13 Pro et dispose de moins de 6 Go de RAM, privilégiez la connexion à un ordinateur plutôt que l\'inférence sur l\'appareil.',
          },
          {
            'Élément': 'Plateforme',
            'Ce qu\'indique Arbiter': 'iOS / iPhone. Une application compagnon, « Arbiter for Mac », est disponible pour se connecter à des modèles plus puissants.',
            'Ce que cela signifie en pratique': 'Il n\'existe pas de version Android ou Windows. Arbiter for Mac est explicitement décrite comme un moyen d\'accéder à des modèles plus puissants depuis votre téléphone — à considérer comme un point de connexion plutôt que comme un client Mac autonome confirmé, tant que l\'éditeur ne la documente pas comme tel.',
          },
          {
            'Élément': 'Tarifs',
            'Ce qu\'indique Arbiter': 'Gratuite, avec achats intégrés facultatifs. Catégorie : Productivité.',
            'Ce que cela signifie en pratique': 'Vous pouvez installer et utiliser l\'application sans payer. Les paliers d\'achats intégrés précis, leurs prix et ce qu\'ils débloquent ne sont pas publiés dans les sources de cet avis — consultez la fiche App Store actuelle pour des tarifs à jour avant de considérer une fonctionnalité comme gratuite ou payante.',
          },
          {
            'Élément': 'Stockage pour les modèles sur l\'appareil',
            'Ce qu\'indique Arbiter': 'Non précisé en détail par l\'éditeur.',
            'Ce que cela signifie en pratique': 'Les modèles open source des familles Gemma, Llama, DeepSeek, Qwen et Mistral pèsent généralement entre 1 et 5 Go environ selon le nombre de paramètres et la quantification. Prévoyez le stockage de votre iPhone en conséquence si vous comptez garder plusieurs modèles téléchargés en même temps.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Avantages et limites',
        columns: ['Avantage', 'Ce que cela donne en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Confidentialité par conception',
            'Ce que cela donne en usage réel': 'Sans compte, sans serveurs Arbiter traitant vos échanges, selon la conception déclarée par l\'éditeur — les conversations restent sur votre appareil ou sur l\'ordinateur auquel vous vous connectez.',
            'Limite / réserve': 'Cet avis s\'appuie sur les déclarations de l\'éditeur plutôt que sur un audit indépendant ; consultez la politique de confidentialité actuelle sur l\'App Store avant de traiter des informations sensibles. À titre indicatif, la CNIL encourage de façon générale le traitement local pour les données professionnelles sensibles (financières, médicales, juridiques), sans que cela constitue une garantie de conformité pour Arbiter.',
          },
          {
            'Avantage': 'Fonctionne entièrement hors ligne une fois un modèle téléchargé',
            'Ce que cela donne en usage réel': 'Le chat sur l\'appareil avec Gemma, Llama, DeepSeek, Qwen ou Mistral ne nécessite pas de connexion internet après la configuration initiale.',
            'Limite / réserve': 'L\'installation initiale de l\'application et le téléchargement du modèle nécessitent internet. La connexion à LM Studio, Ollama ou Arbiter for Mac nécessite une connexion réseau entre votre téléphone et l\'ordinateur.',
          },
          {
            'Avantage': 'Aucun coût récurrent obligatoire',
            'Ce que cela donne en usage réel': 'Téléchargement gratuit, achats intégrés facultatifs — aucun abonnement imposé pour utiliser l\'application principale.',
            'Limite / réserve': 'L\'inférence sur l\'appareil sollicite la batterie et la puissance de calcul de votre iPhone ; les modèles volumineux peuvent tourner lentement sur des appareils plus anciens ou avec peu de RAM.',
          },
          {
            'Avantage': 'Accès à des modèles plus puissants sans API cloud',
            'Ce que cela donne en usage réel': 'La connexion à LM Studio, Ollama ou Arbiter for Mac permet d\'utiliser des modèles plus grands et plus capables que ce qu\'un iPhone peut exécuter seul, tout en gardant l\'inférence sur du matériel qui vous appartient.',
            'Limite / réserve': 'Nécessite un PC ou un Mac disposant de suffisamment de RAM/GPU, avec LM Studio, Ollama ou Arbiter for Mac déjà configuré — ce n\'est pas une solution sans configuration pour qui ne possède pas d\'ordinateur compatible.',
          },
          {
            'Avantage': 'Résumés de documents sur l\'appareil',
            'Ce que cela donne en usage réel': 'Obtenez des résumés et les points clés de vos fichiers sans les téléverser vers un service cloud.',
            'Limite / réserve': 'La qualité des résumés dépend de la taille du modèle embarqué choisi ; les formats de fichiers pris en charge et la longueur maximale des documents ne sont pas détaillés par l\'éditeur dans les documents publics.',
          },
          {
            'Avantage': 'Liste de modèles simple et organisée',
            'Ce que cela donne en usage réel': 'Gemma, Llama, DeepSeek, Qwen et Mistral couvrent un éventail de familles open source sans avoir à chercher vous-même sur Hugging Face.',
            'Limite / réserve': 'La liste exacte des tailles/variantes de modèles, ainsi que la prise en charge de l\'import GGUF personnalisé, ne sont pas précisées dans les sources de cet avis — consultez la fiche App Store actuelle pour la liste de modèles à jour.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter face aux alternatives',
        columns: ['Application', 'Idéale pour', 'Niveau de configuration', 'Plateformes ciblées', 'Limite principale'],
        rows: [
          {
            'Application': 'Arbiter',
            'Idéale pour': 'Utilisateurs iPhone souhaitant un chat sur l\'appareil avec la possibilité d\'accéder à des modèles plus puissants sur leur propre PC/Mac',
            'Niveau de configuration': 'Minimal pour le chat sur l\'appareil ; plus de configuration pour se connecter à LM Studio/Ollama/Arbiter for Mac',
            'Plateformes ciblées': 'iOS/iPhone uniquement, avec un compagnon Mac pour se connecter à des modèles plus puissants',
            'Limite principale': 'Pas d\'application Android ou Windows ; paliers d\'achats intégrés non détaillés publiquement',
          },
          {
            'Application': '[Loci](/fr/power-local-llm/loci-ai-review-offline-local-ai)',
            'Idéale pour': 'Chat privé multiplateforme à faible friction',
            'Niveau de configuration': 'Minimal (téléchargement, chat)',
            'Plateformes ciblées': 'iPhone/iPad/Android/Mac/Windows (5 plateformes)',
            'Limite principale': 'Bibliothèque organisée d\'environ 10 modèles ; import GGUF impossible',
          },
          {
            'Application': 'Private LLM',
            'Idéale pour': 'Utilisateurs Apple uniquement, souhaitant un large choix de modèles',
            'Niveau de configuration': 'Faible à moyen (achat unique, téléchargement des modèles)',
            'Plateformes ciblées': 'iPhone/iPad/Mac (Apple uniquement)',
            'Limite principale': 'Réservée à Apple ; nécessite de comprendre les formats de quantification',
          },
          {
            'Application': 'PocketPal AI',
            'Idéale pour': 'Utilisateurs voulant l\'import GGUF complet et le contrôle des modèles',
            'Niveau de configuration': 'Moyen (gratuit, mais nécessite de trouver soi-même les fichiers de modèles)',
            'Plateformes ciblées': 'iPhone/iPad, avec un certain support Android',
            'Limite principale': 'Nécessite d\'être à l\'aise avec les fichiers GGUF et la sélection manuelle des modèles',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Arbiter est fait',
        items: [
          '**Utilisateur iPhone qui veut un chat privé sans compte.** Aucune inscription — ouvrez l\'application et discutez immédiatement avec un modèle embarqué.',
          '**Utilisateur qui a occasionnellement besoin d\'un modèle plus puissant.** Se connecter à LM Studio, Ollama ou Arbiter for Mac permet d\'exploiter un modèle plus puissant sur votre propre ordinateur quand un modèle embarqué ne suffit pas, sans envoyer vos prompts à une API cloud tierce.',
          '**Personne qui veut des résumés de documents sans envoi vers le cloud.** Téléversez un fichier sur l\'appareil et récupérez un résumé ainsi que les points clés.',
          '**Utilisateur soucieux de son budget.** Gratuite avec achats intégrés facultatifs — aucun abonnement imposé pour essayer l\'application.',
          '**Utilisateur possédant un iPhone 13 Pro ou plus récent (ou un appareil avec 6 Go de RAM ou plus).** C\'est la plage matérielle recommandée par l\'éditeur pour des performances fluides sur l\'appareil.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Arbiter n\'est pas fait',
        items: [
          '**Utilisateurs Android ou Windows.** Arbiter est réservée à iOS/iPhone ; aucune application Android ou Windows native n\'est mentionnée dans les sources de cet avis.',
          '**Utilisateur attendant un raisonnement de niveau cloud de pointe purement sur l\'appareil.** Les modèles embarqués des familles Gemma, Llama, DeepSeek, Qwen et Mistral exécutés sur un iPhone font face au même plafond lié au nombre de paramètres que toute autre application d\'IA locale mobile ; pour les modèles les plus grands, il faut toujours se connecter à un ordinateur ou utiliser un service cloud.',
          '**Utilisateur avec un iPhone plus ancien que le niveau matériel recommandé.** Les appareils antérieurs à l\'iPhone 13 Pro, ou disposant de moins de 6 Go de RAM, peuvent voir des performances embarquées plus lentes.',
          '**Utilisateur souhaitant dès aujourd\'hui une application Mac autonome mature et entièrement documentée.** « Arbiter for Mac » est décrite comme un moyen de se connecter à des modèles plus puissants depuis votre téléphone ; elle n\'est pas confirmée, dans les sources de cet avis, comme une véritable application de chat Mac autonome à part entière.',
          '**Utilisateur traitant des informations hautement sensibles ayant besoin d\'une garantie de confidentialité auditée de façon indépendante.** Le positionnement sans compte, sans serveur et sans collecte de données d\'Arbiter est la conception déclarée par l\'éditeur ; consultez la politique de confidentialité actuelle sur la fiche App Store avant de vous y fier pour un usage confidentiel.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'Arbiter - Local AI Chat ?',
            a: 'Arbiter est un assistant IA hors ligne axé sur la confidentialité pour iPhone, développé par Jordan Stone. Vous pouvez télécharger et exécuter des modèles open source légers (Gemma, Llama, DeepSeek, Qwen, Mistral) localement sur votre iPhone, ou vous connecter à des modèles plus puissants exécutés sur votre propre PC ou Mac via LM Studio, Ollama, ou le compagnon « Arbiter for Mac ».',
          },
          {
            q: 'Arbiter est-elle vraiment privée ?',
            a: 'La conception déclarée par l\'éditeur repose sur l\'absence de compte, de serveur et de collecte de données — les conversations sont conçues pour ne jamais quitter l\'appareil utilisé, qu\'il s\'agisse de votre iPhone ou d\'un ordinateur auquel vous vous connectez. Comme pour toute déclaration de confidentialité, consultez la politique de confidentialité actuelle sur la fiche App Store avant d\'utiliser l\'application pour des informations sensibles, car cet avis s\'appuie sur les déclarations publiques de l\'éditeur plutôt que sur un audit indépendant.',
          },
          {
            q: 'Arbiter fonctionne-t-elle sans connexion internet ?',
            a: 'Oui, pour le chat sur l\'appareil : une fois un modèle (Gemma, Llama, DeepSeek, Qwen ou Mistral) téléchargé sur votre iPhone, le chat fonctionne sans connexion internet. Le téléchargement de l\'application et du modèle initial nécessite internet, et la connexion à LM Studio, Ollama ou Arbiter for Mac nécessite une connexion réseau entre votre téléphone et l\'ordinateur.',
          },
          {
            q: 'Quel iPhone me faut-il pour faire fonctionner Arbiter correctement ?',
            a: 'L\'éditeur recommande un iPhone 13 Pro ou plus récent, ou tout appareil avec au moins 6 Go de RAM, pour des performances fluides. Les iPhone plus anciens ou avec moins de RAM peuvent quand même faire fonctionner l\'application, mais avec des réponses embarquées plus lentes, notamment avec les modèles plus volumineux.',
          },
          {
            q: 'Quels modèles d\'IA Arbiter prend-elle en charge ?',
            a: 'Arbiter prend en charge des modèles open source légers : Gemma, Llama, DeepSeek, Qwen et Mistral. Ils s\'exécutent localement sur l\'appareil. Pour des modèles plus puissants, Arbiter peut se connecter à LM Studio ou Ollama sur votre propre PC ou Mac, ou au compagnon Arbiter for Mac.',
          },
          {
            q: 'Comment fonctionne la connexion à LM Studio ou Ollama ?',
            a: 'Plutôt que d\'exécuter un modèle directement sur votre iPhone, Arbiter peut se connecter à un modèle déjà en cours d\'exécution sur votre propre PC ou Mac via LM Studio, Ollama, ou le compagnon Arbiter for Mac. L\'inférence a lieu sur l\'ordinateur que vous contrôlez, et l\'interface iPhone d\'Arbiter envoie et reçoit les messages avec lui — vous accédez ainsi à des modèles plus grands et plus capables que ce que votre iPhone seul peut exécuter, sans API cloud tierce intermédiaire.',
          },
          {
            q: 'Arbiter est-elle payante ?',
            a: 'Arbiter est gratuite au téléchargement, avec des achats intégrés facultatifs. Elle est classée dans la catégorie Productivité sur l\'App Store. Les paliers et tarifs des achats intégrés précis ne sont pas détaillés dans les sources de cet avis — consultez la fiche App Store actuelle pour des tarifs à jour.',
          },
          {
            q: 'Arbiter peut-elle résumer des documents ?',
            a: 'Oui. Vous pouvez téléverser des documents sur votre appareil et Arbiter en génère des résumés et en extrait les points clés, traités sur l\'appareil plutôt que via un envoi vers le cloud.',
          },
          {
            q: 'Existe-t-il une version Android ou Windows d\'Arbiter ?',
            a: 'Non. Arbiter est disponible sur iOS/iPhone. Il existe un compagnon distinct « Arbiter for Mac » pour se connecter à des modèles plus puissants, mais aucun client Android ou Windows dans les sources de cet avis.',
          },
          {
            q: 'Comment Arbiter se compare-t-elle à Loci ou Private LLM ?',
            a: 'Loci fonctionne sur cinq plateformes (iPhone, iPad, Android, Mac, Windows) avec une bibliothèque de modèles organisée et une configuration minimale. Private LLM est réservée à Apple, avec une bibliothèque de modèles plus large (140+ modèles) et davantage de contrôle sur la quantification, vendue en achat unique. Arbiter cible l\'iPhone avec une liste de modèles plus réduite et plus simple (Gemma, Llama, DeepSeek, Qwen, Mistral), mais ajoute la possibilité de se connecter directement à LM Studio, Ollama ou votre propre Mac pour des modèles plus puissants — une combinaison que tous les concurrents n\'offrent pas sous cette forme.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Arbiter mérite d\'être installée si vous cherchez une application iPhone gratuite et sans compte pour le chat IA privé et le résumé de documents, avec une véritable porte de sortie quand la qualité des modèles embarqués ne suffit pas : la connexion à LM Studio, Ollama, ou à votre propre Mac via le compagnon Arbiter for Mac. Le positionnement de l\'éditeur en matière de confidentialité — sans compte, sans serveur, sans collecte de données — correspond exactement à ce que recherchent la plupart des utilisateurs mobiles soucieux de leur vie privée, même s\'il vaut mieux, comme pour toute application développée par un seul développeur, vérifier soi-même la politique de confidentialité actuelle sur l\'App Store avant de lui confier des données sensibles. Le niveau matériel recommandé (iPhone 13 Pro ou plus récent, ou 6 Go de RAM ou plus) reste réaliste pour la plupart des iPhone récents. Le point faible d\'Arbiter est l\'étendue : elle est réservée à l\'iPhone, le compagnon Arbiter for Mac n\'est pas confirmé comme une application Mac autonome complète, et les détails sur les tarifs des achats intégrés ainsi que les variantes exactes de modèles ne sont pas publiés en détail. Les utilisateurs souhaitant une application mature et multiplateforme avec une bibliothèque de modèles organisée plus large devraient aussi regarder du côté de Loci ; ceux qui veulent un contrôle maximal des modèles et de la quantification sur les appareils Apple devraient regarder du côté de Private LLM. Pour un utilisateur iPhone en priorité qui veut un chat simple sur l\'appareil avec la possibilité d\'atteindre des modèles plus puissants sur son propre matériel, Arbiter comble un vrai manque.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Arbiter - Local AI Chat sur l\'App Store](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) — fiche officielle, catégorie, tarifs, informations sur l\'éditeur.',
          '[Site officiel d\'Arbiter (askarbiter.ai)](https://www.askarbiter.ai/) — présentation du produit et des fonctionnalités.',
          '[Loci sur l\'App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — à titre de comparaison, une application d\'IA sur l\'appareil multiplateforme.',
          '[Site officiel de Private LLM](https://privatellm.app/en) — à titre de comparaison, une application d\'IA locale réservée à Apple avec une bibliothèque de modèles plus large.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Avis Loci : IA privée hors ligne sur iPhone, Android, iPad et Mac](/fr/power-local-llm/loci-ai-review-offline-local-ai) — une application d\'IA sur l\'appareil multiplateforme à comparer avec Arbiter.',
          '[Meilleures applications LLM locales pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif d\'applications iPhone, avec PocketPal AI, Private LLM et Apple Intelligence.',
          '[Meilleurs modèles LLM mobiles en 2026 : Phi-4 Mini vs Gemma 4 vs SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — le guide des modèles complémentaire, couvrant les mêmes familles de modèles qu\'Arbiter prend en charge.',
          '[Exécuter un LLM local sur votre tablette : iPad et Android (2026)](/fr/power-local-llm/run-ai-on-tablet-ipad-android) — guide centré sur les appareils pour l\'inférence sur l\'appareil et à distance sur tablette.',
          '[Répertoire des logiciels LLM locaux 2026](/fr/power-local-llm/local-llm-software-directory-2026) — répertoire complet d\'applications et d\'outils pour toutes les plateformes.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Avis Arbiter Local AI Chat (2026) : IA hors ligne privée pour iPhone',
      'description': 'Avis Arbiter : cette appli de chat IA hors ligne et privée vaut-elle le coup sur iPhone ? Modèles sur l\'appareil, résumés de documents, LM Studio/Ollama, matériel requis et tarifs.',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'sameAs': 'https://www.linkedin.com/in/hanskuepper/',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'fr',
      'url': 'https://www.promptquorum.com/fr/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'Arbiter est une application iPhone gratuite pour un chat IA privé sur l\'appareil, développée par Jordan Stone. Elle exécute des modèles open source (Gemma, Llama, DeepSeek, Qwen, Mistral) localement, ou se connecte à des modèles plus puissants sur votre propre PC ou Mac via LM Studio, Ollama, ou Arbiter for Mac.',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'Utilisateurs d\'iPhone qui hésitent à utiliser Arbiter pour un chat IA privé et hors ligne, ainsi que pour le résumé de documents' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': 'IA sur l\'appareil' },
        { '@type': 'Thing', 'name': 'Applications LLM locales' },
        { '@type': 'Thing', 'name': 'Confidentialité mobile' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/fr/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-es.webp',
    title: 'Reseña de Arbiter Local AI Chat (2026): IA privada sin conexión para iPhone',
    seoTitle: 'Reseña Arbiter IA 2026: Chat Privado Offline iPhone',
    intro:
      'Arbiter, desarrollada por Jordan Stone, es un asistente de IA centrado en la privacidad para iPhone construido sobre una premisa simple, según el desarrollador: tus conversaciones nunca salen de tu dispositivo. Puedes descargar y ejecutar modelos ligeros de código abierto (Gemma, Llama, DeepSeek, Qwen, Mistral) directamente en tu iPhone, o conectarte a modelos más potentes que corren en tu propia PC o Mac mediante herramientas como LM Studio, Ollama, o la app complementaria independiente "Arbiter for Mac". No hay cuentas, no hay servidores y no hay recolección de datos: la app está diseñada para que las conversaciones, y cualquier documento que subas para resumir, permanezcan en el dispositivo que estés usando. La pregunta práctica para quien compara apps de chat en el dispositivo es si Arbiter ofrece suficiente capacidad en hardware de nivel iPhone para ser una herramienta diaria genuina, o si conviene usarla como front-end privado para modelos más grandes que corren en otro lugar.',
    metaDescription:
      'Reseña de Arbiter: ¿vale la pena esta app de chat IA offline centrada en la privacidad en iPhone? Modelos en el dispositivo, resúmenes de documentos, conexión con LM Studio/Ollama, requisitos de hardware y precio.',
    twitterDescription:
      'Reseña de Arbiter Local AI Chat 2026: ejecuta modelos de código abierto en el dispositivo en iPhone, o conéctate a LM Studio/Ollama/Arbiter for Mac para modelos más grandes. Sin cuentas, sin servidores, sin recolección de datos.',
    audience:
      'Usuarios de iPhone que deciden si usar Arbiter para chat de IA privado y offline, y resúmenes de documentos — cubre el soporte de modelos en el dispositivo, requisitos de hardware, conexión con herramientas de inferencia de escritorio, y cómo se compara con otras apps de IA local móvil.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Consigue Arbiter en la App Store →', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'reseña arbiter ai',
      'arbiter local ai chat',
      'arbiter app ios',
      'arbiter ia offline iphone',
      'arbiter vs private llm',
      'arbiter llm local iphone',
      'arbiter app ia privacidad',
      'ejecutar ia local en iphone arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**Arbiter es especialmente atractiva si buscas una app de chat para iPhone sin cuenta ni servidor, que mantenga las conversaciones y los documentos subidos totalmente en el dispositivo, con la opción de recurrir a modelos más potentes cuando los necesites.** En un iPhone 13 Pro o posterior (o cualquier dispositivo con al menos 6GB de RAM), ejecuta modelos ligeros de código abierto —Gemma, Llama, DeepSeek, Qwen y Mistral— de forma local para chat y resúmenes de documentos. Cuando la calidad del modelo en el dispositivo no es suficiente, Arbiter puede conectarse a modelos más potentes que corren en tu propia PC o Mac mediante LM Studio, Ollama, o la app complementaria independiente "Arbiter for Mac", de modo que obtienes una respuesta de un modelo más grande sin enviar nada a un servidor de terceros. Es gratuita, con compras opcionales dentro de la app. Los usuarios que quieran la mayor biblioteca de modelos posible, control profundo de cuantización, o una presencia multiplataforma más madura (Android, Windows) deberían compararla con apps de LLM local más establecidas.',
    quickAnswerTop: {
      es: {
        question: '¿Debería usar Arbiter para IA privada y offline en iPhone?',
        answer:
          'Usa Arbiter si quieres una app gratuita para iPhone, sin cuenta, para chat de IA en el dispositivo y resúmenes de documentos, con la opción de conectarte a modelos más grandes en tu propia PC o Mac. Evítala si necesitas soporte para Android o Windows, una biblioteca de modelos curada muy amplia, o calidad de razonamiento de frontera que hoy solo ofrece la IA en la nube.',
        bullets: [
          'Gratuita con compras opcionales dentro de la app; no se requiere suscripción para usar las funciones principales.',
          'Sin cuentas, sin servidores: las conversaciones y los documentos subidos permanecen en el dispositivo, según las afirmaciones del desarrollador.',
          'Ejecuta Gemma, Llama, DeepSeek, Qwen y Mistral localmente en el iPhone; puede conectarse a LM Studio, Ollama, o Arbiter for Mac para modelos más grandes.',
          'Hardware recomendado: iPhone 13 Pro o posterior, o cualquier dispositivo con al menos 6GB de RAM, para un rendimiento fluido.',
          'Solo iOS/iPhone; la app complementaria "Arbiter for Mac" sirve para conectarse a modelos más grandes, no es una app de chat completa y confirmada para Mac por sí sola.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Arbiter', anchor: 'what-is-arbiter' },
      { label: 'Cómo funciona la IA local en Arbiter', anchor: 'how-local-ai-works' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Requisitos de hardware y precio', anchor: 'hardware-and-pricing' },
      { label: 'Ventajas y desventajas', anchor: 'tradeoffs' },
      { label: 'Arbiter frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Arbiter', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Arbiter', anchor: 'who-should-not-use' },
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
        items: [
          'Arbiter es una app gratuita para iPhone de chat de IA en el dispositivo, desarrollada por Jordan Stone, posicionada como centrada en la privacidad: sin cuentas, sin servidores, sin recolección de datos.',
          'Soporta modelos ligeros de código abierto localmente: Gemma, Llama, DeepSeek, Qwen y Mistral.',
          'También puedes conectarte a modelos más potentes que corren en tu propia PC o Mac mediante LM Studio, Ollama, o la app complementaria independiente "Arbiter for Mac", en lugar de una API en la nube de terceros.',
          'Puedes subir documentos para obtener resúmenes y puntos clave, procesados en el dispositivo.',
          'Hardware recomendado: iPhone 13 Pro o posterior, o cualquier dispositivo con al menos 6GB de RAM, para un rendimiento fluido.',
          'Precio: gratuita con compras opcionales dentro de la app. Categoría: Productividad.',
          'Solo iOS/iPhone para la app principal; Arbiter for Mac se describe como una forma de conectarse a modelos más grandes, no está confirmada como una app de chat completa e independiente para Mac.',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'Qué es Arbiter',
        content: [
          'Arbiter es un asistente de IA offline centrado en la privacidad para iPhone, desarrollado por Jordan Stone y listado en la App Store como "Arbiter - Local AI Chat" (id6747954532), con un sitio del proveedor en askarbiter.ai. La app es gratuita para descargar, con compras opcionales dentro de la app, y aparece en la categoría Productividad.',
          'La decisión de diseño central es que Arbiter no requiere una cuenta y no depende de servidores propios de Arbiter para procesar tus conversaciones: o bien ejecuta un modelo directamente en tu iPhone, o se conecta a un modelo que corre en hardware que tú controlas (tu propia PC o Mac). La postura declarada por el desarrollador es que las conversaciones nunca salen del dispositivo, ya sea tu teléfono o el equipo de escritorio al que te conectes.',
          'El soporte de modelos se centra en familias ligeras de código abierto: Gemma, Llama, DeepSeek, Qwen y Mistral. Son las mismas familias de modelos usadas en la mayoría de apps y herramientas de LLM local, lo que significa que el techo práctico de calidad lo marca el tamaño de modelo que tu iPhone (o el equipo de escritorio conectado) puede ejecutar, no un modelo propietario exclusivo de Arbiter.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Arbiter es una app gratuita para iPhone que ejecuta modelos de lenguaje de código abierto en el dispositivo o se conecta a modelos más potentes en tu propia PC o Mac, sin cuentas ni servidores.',
          },
          {
            type: 'plain-terms',
            text:
              'Arbiter te permite chatear con IA en tu iPhone igual que con un chatbot en la nube, salvo que la conversación se queda en tu teléfono (o en un equipo que tú posees) en lugar de enviarse a los servidores de una empresa.',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Cómo funciona la IA local en Arbiter',
        content: [
          'Arbiter ofrece dos caminos para el chat de IA, ambos diseñados para mantener los datos fuera de servidores de terceros:',
        ],
        items: [
          '**Modelos en el dispositivo** — descarga un modelo ligero de código abierto (Gemma, Llama, DeepSeek, Qwen o Mistral) directamente en la app y ejecuta la inferencia en tu iPhone. No se necesita conexión a internet una vez descargado el modelo, y ningún servidor de terceros ve tu conversación.',
          '**Conectarse a un modelo de escritorio más potente** — si la calidad del modelo en el dispositivo no basta para una tarea, Arbiter puede conectarse a modelos que corren en tu propia PC o Mac mediante herramientas como LM Studio u Ollama, o mediante la app complementaria independiente "Arbiter for Mac". La inferencia ocurre en el equipo de escritorio que tú controlas; el teléfono actúa como interfaz. Esto evita la disyuntiva entre limitarte a lo que un teléfono puede ejecutar o enviar tus prompts a una API en la nube.',
          '**Resúmenes de documentos** — puedes subir documentos en tu dispositivo y hacer que Arbiter genere resúmenes y extraiga puntos clave, sin subir primero el archivo a un servicio en la nube.',
        ],
        note: 'La versión mínima exacta de iOS, el tamaño de descarga por modelo, y la lista completa de variantes de modelos de código abierto soportadas no están publicadas en detalle por el desarrollador. Verifica los detalles actuales en la ficha de la App Store o en askarbiter.ai antes de confiar en un modelo específico para un dispositivo específico. Última verificación frente a la ficha de la App Store el 2026-09-04.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        items: [
          '**Chat con modelo local.** Descarga y ejecuta Gemma, Llama, DeepSeek, Qwen o Mistral directamente en tu iPhone para chat completamente offline una vez descargado el modelo.',
          '**Conexión con equipo de escritorio para modelos más grandes.** Conéctate a LM Studio u Ollama que corran en tu propia PC o Mac, o a la app complementaria "Arbiter for Mac", para acceder a modelos más capaces de los que un iPhone puede ejecutar por sí solo, manteniendo la inferencia en hardware que tú controlas.',
          '**Resúmenes de documentos.** Sube un documento en tu dispositivo y obtén un resumen y puntos clave, procesados en el dispositivo en lugar de mediante una subida a la nube.',
          '**Sin cuentas.** No hay registro, inicio de sesión ni sistema de cuentas: abres la app y empiezas a usarla.',
          '**Sin recolección de datos, según las afirmaciones del desarrollador.** El desarrollador declara que las conversaciones nunca salen del dispositivo, y que Arbiter no opera servidores propios para procesar o almacenar tus chats.',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: 'Requisitos de hardware y precio',
        columns: ['Aspecto', 'Lo que declara Arbiter', 'Qué significa en la práctica'],
        rows: [
          {
            'Aspecto': 'Hardware mínimo recomendado',
            'Lo que declara Arbiter': 'iPhone 13 Pro o posterior, o cualquier dispositivo con al menos 6GB de RAM, para un rendimiento fluido.',
            'Qué significa en la práctica': 'Los iPhone más antiguos o con menos RAM pueden seguir ejecutando la app, pero las respuestas de los modelos en el dispositivo pueden ser más lentas, o quizás te limites a modelos más pequeños. Si tu iPhone es anterior al 13 Pro y tiene menos de 6GB de RAM, apóyate en la conexión con equipo de escritorio en lugar de la inferencia en el dispositivo.',
          },
          {
            'Aspecto': 'Plataforma',
            'Lo que declara Arbiter': 'iOS / iPhone. Hay una app complementaria, "Arbiter for Mac", disponible para conectarse a modelos más grandes.',
            'Qué significa en la práctica': 'No hay versión para Android ni Windows. Arbiter for Mac se describe específicamente como una forma de acceder a modelos más potentes desde tu teléfono: trátala como un punto de conexión más que como una app de chat completa y confirmada para Mac hasta que el desarrollador la documente como tal.',
          },
          {
            'Aspecto': 'Precio',
            'Lo que declara Arbiter': 'Gratuita, con compras opcionales dentro de la app. Categoría: Productividad.',
            'Qué significa en la práctica': 'Puedes instalar y usar la app sin pagar. Los niveles específicos de compras dentro de la app, sus precios y lo que desbloquean no están publicados en el material fuente de esta reseña; consulta la ficha actual de la App Store para conocer el precio vigente antes de asumir que una función concreta es gratuita o de pago.',
          },
          {
            'Aspecto': 'Almacenamiento para modelos en el dispositivo',
            'Lo que declara Arbiter': 'No especificado en detalle por el desarrollador.',
            'Qué significa en la práctica': 'Los modelos de código abierto de las familias Gemma, Llama, DeepSeek, Qwen y Mistral suelen ocupar entre 1 y 5GB por modelo, según el número de parámetros y la cuantización. Calcula el almacenamiento del iPhone en consecuencia si planeas mantener más de un modelo descargado a la vez.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y desventajas',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Privacidad por diseño',
            'Qué significa en el uso real': 'Sin cuentas, sin servidores operados por Arbiter que procesen tus chats, según el diseño declarado por el desarrollador: las conversaciones permanecen en tu dispositivo o en el equipo de escritorio al que te conectes.',
            'Limitación / advertencia': 'Esta reseña se basa en las afirmaciones declaradas por el desarrollador y no en una auditoría independiente de terceros; revisa la política de privacidad vigente en la App Store antes de manejar información sensible.',
          },
          {
            'Ventaja': 'Funciona completamente offline una vez descargado un modelo',
            'Qué significa en el uso real': 'El chat en el dispositivo con Gemma, Llama, DeepSeek, Qwen o Mistral no requiere conexión a internet tras la configuración inicial.',
            'Limitación / advertencia': 'La instalación inicial de la app y la descarga del modelo requieren internet. Conectarte a LM Studio, Ollama o Arbiter for Mac requiere una conexión de red entre tu teléfono y el equipo de escritorio.',
          },
          {
            'Ventaja': 'No requiere costo recurrente',
            'Qué significa en el uso real': 'Descarga gratuita, compras opcionales dentro de la app: no estás obligado a una suscripción para usar la app principal.',
            'Limitación / advertencia': 'La inferencia en el dispositivo consume batería y capacidad de procesamiento de tu iPhone; los modelos grandes pueden correr lentamente en dispositivos más antiguos o con menos RAM.',
          },
          {
            'Ventaja': 'Acceso a modelos más grandes sin una API en la nube',
            'Qué significa en el uso real': 'Conectarte a LM Studio, Ollama o Arbiter for Mac te permite usar modelos más grandes y capaces de los que un iPhone puede ejecutar por sí solo, manteniendo la inferencia en hardware de tu propiedad.',
            'Limitación / advertencia': 'Requiere una PC o Mac con RAM/GPU suficiente y LM Studio, Ollama o Arbiter for Mac ya configurados; no es un camino de configuración cero para quienes no tienen un equipo de escritorio compatible.',
          },
          {
            'Ventaja': 'Resúmenes de documentos en el dispositivo',
            'Qué significa en el uso real': 'Obtén resúmenes y puntos clave de archivos sin subirlos a un servicio en la nube.',
            'Limitación / advertencia': 'La calidad del resumen depende del tamaño de modelo en el dispositivo que elijas; los formatos de archivo soportados y la longitud máxima de documento no están detallados por el desarrollador en materiales públicos.',
          },
          {
            'Ventaja': 'Lista de modelos simple y curada',
            'Qué significa en el uso real': 'Gemma, Llama, DeepSeek, Qwen y Mistral cubren una variedad de familias de modelos de código abierto sin que tengas que buscar tú mismo en Hugging Face.',
            'Limitación / advertencia': 'La lista exacta de tamaños/variantes específicos de modelo y si se soporta la importación de archivos GGUF personalizados no se especifica en el material fuente de esta reseña; consulta la ficha actual de la App Store para conocer la lista de modelos vigente.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter frente a alternativas',
        columns: ['App', 'Ideal para', 'Nivel de configuración', 'Enfoque de plataforma', 'Limitación clave'],
        rows: [
          {
            'App': 'Arbiter',
            'Ideal para': 'Usuarios de iPhone que quieren chat en el dispositivo más la opción de acceder a modelos más grandes en su propia PC/Mac',
            'Nivel de configuración': 'Mínimo para chat en el dispositivo; más configuración para conectarse a LM Studio/Ollama/Arbiter for Mac',
            'Enfoque de plataforma': 'Solo iOS/iPhone, con una app complementaria para Mac para conectarse a modelos más grandes',
            'Limitación clave': 'Sin app para Android ni Windows; los niveles de compras dentro de la app no están detallados públicamente',
          },
          {
            'App': '[Loci](/es/power-local-llm/loci-ai-review-offline-local-ai)',
            'Ideal para': 'Chat privado multiplataforma de baja fricción',
            'Nivel de configuración': 'Mínimo (descargar, chatear)',
            'Enfoque de plataforma': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Limitación clave': 'Biblioteca curada de ~10 modelos; no permite importar archivos GGUF',
          },
          {
            'App': 'Private LLM',
            'Ideal para': 'Usuarios solo de Apple que quieren selección avanzada de modelos',
            'Nivel de configuración': 'Bajo a medio (compra única, descargas de modelos)',
            'Enfoque de plataforma': 'iPhone/iPad/Mac (solo Apple)',
            'Limitación clave': 'Solo Apple; requiere aprender formatos de cuantización',
          },
          {
            'App': 'PocketPal AI',
            'Ideal para': 'Usuarios que quieren importación completa de GGUF y control del modelo',
            'Nivel de configuración': 'Medio (gratis, pero requiere buscar los archivos de modelo)',
            'Enfoque de plataforma': 'iPhone/iPad, con algo de soporte para Android',
            'Limitación clave': 'Requiere familiaridad con archivos GGUF y selección manual de modelos',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Arbiter',
        items: [
          '**Usuario de iPhone que quiere chat privado sin cuenta.** Sin paso de registro: abres la app y empiezas a chatear con un modelo en el dispositivo.',
          '**Usuario que ocasionalmente necesita un modelo más grande.** Conectarte a LM Studio, Ollama o Arbiter for Mac te permite aprovechar un modelo más potente en tu propio equipo de escritorio cuando un modelo en el dispositivo no basta, sin enviar prompts a una API en la nube de terceros.',
          '**Alguien que quiere resúmenes de documentos sin subirlos a la nube.** Sube un archivo en el dispositivo y obtén un resumen y puntos clave.',
          '**Usuario con presupuesto ajustado.** Gratuita con compras opcionales dentro de la app: no hay suscripción obligatoria para probar la app.',
          '**Usuario con un iPhone 13 Pro o más reciente (o dispositivo con 6GB+ de RAM).** Este es el rango de hardware que recomienda el desarrollador para un rendimiento fluido en el dispositivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Arbiter',
        items: [
          '**Usuarios de Android o Windows.** Arbiter es solo para iOS/iPhone; no hay app nativa para Android o Windows en el material fuente de esta reseña.',
          '**Usuario que espera razonamiento de nivel frontera en la nube puramente en el dispositivo.** Los modelos en el dispositivo de las familias Gemma, Llama, DeepSeek, Qwen y Mistral que corren en un iPhone enfrentan el mismo techo de número de parámetros que cualquier otra app de IA local en teléfono; para los modelos más grandes aún necesitas conectarte a un equipo de escritorio o usar un servicio en la nube.',
          '**Usuario con un iPhone más antiguo, por debajo del nivel de hardware recomendado.** Los dispositivos anteriores al iPhone 13 Pro, o con menos de 6GB de RAM, pueden experimentar un rendimiento en el dispositivo más lento.',
          '**Usuario que quiere hoy una app de chat para Mac madura y completamente documentada.** "Arbiter for Mac" se describe como una forma de conectarse a modelos más grandes desde tu teléfono; el material fuente no confirma que sea una aplicación de chat completa e independiente para Mac por derecho propio.',
          '**Usuario que maneja información muy sensible y necesita una afirmación de privacidad auditada de forma independiente.** El posicionamiento de Arbiter sin cuentas, sin servidores y sin recolección de datos es el diseño declarado por el desarrollador; revisa la política de privacidad vigente en la ficha de la App Store antes de confiar en ella para trabajo confidencial.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es Arbiter - Local AI Chat?',
            a: 'Arbiter es un asistente de IA offline centrado en la privacidad para iPhone, desarrollado por Jordan Stone. Puedes descargar y ejecutar modelos ligeros de código abierto (Gemma, Llama, DeepSeek, Qwen, Mistral) localmente en tu iPhone, o conectarte a modelos más potentes que corren en tu propia PC o Mac mediante LM Studio, Ollama, o la app complementaria "Arbiter for Mac".',
          },
          {
            q: '¿Arbiter es realmente privada?',
            a: 'El diseño declarado por el desarrollador es sin cuentas, sin servidores y sin recolección de datos: las conversaciones están diseñadas para no salir nunca del dispositivo que estés usando, ya sea tu iPhone o un equipo de escritorio al que te conectes. Como con cualquier afirmación de privacidad, revisa la política de privacidad vigente en la ficha de la App Store antes de usarla para información sensible, ya que esta reseña se basa en las afirmaciones públicas del desarrollador y no en una auditoría independiente.',
          },
          {
            q: '¿Arbiter funciona sin conexión a internet?',
            a: 'Sí, para el chat en el dispositivo: una vez que un modelo (Gemma, Llama, DeepSeek, Qwen o Mistral) está descargado en tu iPhone, el chat funciona sin conexión a internet. Descargar la app y el modelo inicial requiere internet, y conectarte a LM Studio, Ollama o Arbiter for Mac requiere una conexión de red entre tu teléfono y el equipo de escritorio.',
          },
          {
            q: '¿Qué iPhone necesito para que Arbiter funcione sin problemas?',
            a: 'El desarrollador recomienda un iPhone 13 Pro o posterior, o cualquier dispositivo con al menos 6GB de RAM, para un rendimiento fluido. Los iPhone más antiguos o con menos RAM pueden seguir ejecutando la app, pero podrían ver respuestas en el dispositivo más lentas, especialmente con modelos más grandes.',
          },
          {
            q: '¿Qué modelos de IA soporta Arbiter?',
            a: 'Arbiter soporta modelos ligeros de código abierto: Gemma, Llama, DeepSeek, Qwen y Mistral. Estos corren localmente en el dispositivo. Para modelos más potentes, Arbiter puede conectarse a LM Studio u Ollama que corran en tu propia PC o Mac, o a la app complementaria Arbiter for Mac.',
          },
          {
            q: '¿Cómo funciona la conexión con LM Studio u Ollama?',
            a: 'En lugar de ejecutar un modelo directamente en tu iPhone, Arbiter puede conectarse a un modelo que ya corre en tu propia PC o Mac mediante LM Studio, Ollama, o la app complementaria Arbiter for Mac. La inferencia ocurre en el equipo de escritorio que tú controlas, y la interfaz del teléfono de Arbiter envía y recibe mensajes con él, así que obtienes acceso a modelos más grandes y capaces de los que tu iPhone puede ejecutar por sí solo, sin una API en la nube de terceros de por medio.',
          },
          {
            q: '¿Arbiter cuesta dinero?',
            a: 'Arbiter es gratuita para descargar, con compras opcionales dentro de la app. Aparece en la categoría Productividad de la App Store. Los niveles específicos de compras dentro de la app y sus precios no están detallados en el material fuente de esta reseña; consulta la ficha actual de la App Store para conocer el precio vigente.',
          },
          {
            q: '¿Arbiter puede resumir documentos?',
            a: 'Sí. Puedes subir documentos en tu dispositivo y Arbiter generará resúmenes y extraerá puntos clave, procesados en el dispositivo en lugar de mediante una subida a la nube.',
          },
          {
            q: '¿Existe una versión para Android o Windows de Arbiter?',
            a: 'No. Arbiter está disponible para iOS/iPhone. Existe una app complementaria independiente, "Arbiter for Mac", para conectarse a modelos más potentes, pero no hay cliente para Android o Windows en el material fuente de esta reseña.',
          },
          {
            q: '¿Cómo se compara Arbiter con Loci o Private LLM?',
            a: 'Loci funciona en cinco plataformas (iPhone, iPad, Android, Mac, Windows) con una biblioteca de modelos curada y una configuración mínima. Private LLM es solo para Apple, con una biblioteca de modelos más grande (más de 140 modelos) y más control de cuantización, vendida como compra única. Arbiter está enfocada en iPhone, con una lista de modelos más pequeña y simple (Gemma, Llama, DeepSeek, Qwen, Mistral), pero añade la opción de conectarse directamente a LM Studio, Ollama, o tu propia Mac para modelos más grandes, una combinación que no todos los competidores ofrecen de la misma forma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Vale la pena instalar Arbiter si quieres una app gratuita para iPhone, sin cuenta, para chat de IA privado y resúmenes de documentos, con una vía de escape genuina cuando la calidad del modelo en el dispositivo no basta: conectarte a LM Studio, Ollama, o tu propia Mac mediante la app complementaria Arbiter for Mac. El posicionamiento de privacidad del desarrollador —sin cuentas, sin servidores, sin recolección de datos— es exactamente el diseño que buscan la mayoría de usuarios de IA móvil preocupados por la privacidad, aunque, como con cualquier app de un solo desarrollador, vale la pena revisar tú mismo la política de privacidad vigente en la App Store antes de confiarle material sensible. El nivel de hardware recomendado (iPhone 13 Pro o posterior, o 6GB+ de RAM) es realista para la mayoría de los iPhone recientes. Donde Arbiter es más débil es en amplitud: es solo para iPhone, la app complementaria Arbiter for Mac no está confirmada como una app de chat completa e independiente para Mac, y los detalles sobre precios de compras dentro de la app y variantes exactas de modelos no están publicados en detalle. Los usuarios que quieran una app madura y multiplataforma con una biblioteca de modelos curada más grande deberían mirar también Loci; los usuarios que quieran el máximo control de modelo y cuantización en dispositivos Apple deberían mirar Private LLM. Para un usuario centrado en iPhone que quiere chat simple en el dispositivo más la opción de acceder a modelos más grandes en su propio hardware, Arbiter cubre un vacío real.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Arbiter - Local AI Chat en la App Store](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) — ficha oficial, categoría, precio, información del desarrollador.',
          '[Sitio oficial de Arbiter (askarbiter.ai)](https://www.askarbiter.ai/) — resumen del producto y funciones.',
          '[Loci en la App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — para comparar, una app de IA en el dispositivo multiplataforma.',
          '[Sitio oficial de Private LLM](https://privatellm.app/en) — para comparar, una app de LLM local solo para Apple con una biblioteca de modelos más grande.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Loci AI: IA privada offline en iPhone, Android, iPad y Mac](/es/power-local-llm/loci-ai-review-offline-local-ai) — una app de IA en el dispositivo multiplataforma para comparar con Arbiter.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen de apps para iPhone, incluyendo PocketPal AI, Private LLM y Apple Intelligence.',
          '[Los mejores modelos LLM móviles en 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — guía complementaria a nivel de modelo que cubre las mismas familias de modelos que soporta Arbiter.',
          '[Ejecuta un LLM local en tu tablet: iPad y Android (2026)](/es/power-local-llm/run-ai-on-tablet-ipad-android) — guía centrada en dispositivos para inferencia en el dispositivo y remota en tablets.',
          '[Directorio de software de LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — directorio completo de apps y herramientas para todas las plataformas.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Reseña de Arbiter Local AI Chat (2026): IA privada sin conexión para iPhone',
      'description': 'Reseña de Arbiter: ¿vale la pena esta app de chat IA offline centrada en la privacidad en iPhone? Modelos en el dispositivo, resúmenes de documentos, conexión con LM Studio/Ollama, requisitos de hardware y precio.',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'sameAs': 'https://www.linkedin.com/in/hanskuepper/',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'es',
      'url': 'https://www.promptquorum.com/es/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'Arbiter es una app gratuita para iPhone de chat de IA privado en el dispositivo, desarrollada por Jordan Stone. Ejecuta modelos de código abierto (Gemma, Llama, DeepSeek, Qwen, Mistral) localmente, o se conecta a modelos más grandes en tu propia PC o Mac mediante LM Studio, Ollama, o Arbiter for Mac.',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'Usuarios de iPhone que deciden si usar Arbiter para chat de IA privado y offline, y resúmenes de documentos' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': 'IA en el dispositivo' },
        { '@type': 'Thing', 'name': 'Apps de LLM local' },
        { '@type': 'Thing', 'name': 'Privacidad móvil' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/es/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-pt.webp',
    title: 'Análise do Arbiter Local AI Chat (2026): IA Offline Privada para iPhone',
    seoTitle: 'Arbiter AI: Análise 2026 do Chat Offline Privado no iPhone',
    intro:
      'O Arbiter, desenvolvido por Jordan Stone, é um assistente de IA voltado para privacidade no iPhone, construído em torno de uma única premissa, segundo o desenvolvedor: suas conversas nunca saem do seu dispositivo. Você pode baixar e rodar modelos leves de código aberto (Gemma, Llama, DeepSeek, Qwen, Mistral) diretamente no seu iPhone, ou se conectar a modelos mais potentes rodando no seu próprio PC ou Mac por meio de ferramentas como LM Studio, Ollama, ou o aplicativo complementar separado "Arbiter for Mac". Não há contas, não há servidores e não há coleta de dados — o app foi projetado para que as conversas, e qualquer documento enviado para resumo, permaneçam no dispositivo que você está usando. A pergunta prática para quem está comparando apps de chat no dispositivo é se o Arbiter entrega recursos suficientes em hardware de iPhone para ser um app do dia a dia de verdade, ou se ele é melhor usado como a interface privada para modelos maiores rodando em outro lugar.',
    metaDescription:
      'Análise do Arbiter: vale a pena esse app de chat de IA offline focado em privacidade no iPhone? Modelos no dispositivo, resumos de documentos, conexão com LM Studio/Ollama, requisitos de hardware e preços.',
    twitterDescription:
      'Análise do Arbiter Local AI Chat 2026: rode modelos de código aberto no dispositivo no iPhone, ou conecte-se ao LM Studio/Ollama/Arbiter for Mac para modelos maiores. Sem contas, sem servidores, sem coleta de dados.',
    audience:
      'Usuários de iPhone que estão decidindo se devem usar o Arbiter para chat de IA privado e offline e resumo de documentos — cobre suporte a modelos no dispositivo, requisitos de hardware, conexão com ferramentas de inferência para desktop e como ele se compara a outros apps móveis de IA local.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Baixe o Arbiter na App Store →', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'análise arbiter ai',
      'arbiter local ai chat',
      'aplicativo arbiter ios',
      'arbiter ia offline iphone',
      'arbiter vs private llm',
      'arbiter llm local iphone',
      'arbiter app privacidade ia',
      'rodar ia local no iphone arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**O Arbiter é mais interessante se você quer um app de chat para iPhone sem conta e sem servidor, que mantém conversas e documentos enviados inteiramente no dispositivo, com a opção de recorrer a modelos mais potentes quando precisar.** Em um iPhone 13 Pro ou mais recente (ou qualquer dispositivo com pelo menos 6GB de RAM), ele roda modelos leves de código aberto — Gemma, Llama, DeepSeek, Qwen e Mistral — localmente para chat e resumos de documentos. Quando a qualidade dos modelos no dispositivo não é suficiente, o Arbiter pode se conectar a modelos mais potentes rodando no seu próprio PC ou Mac por meio do LM Studio, Ollama, ou do aplicativo complementar separado "Arbiter for Mac", assim você obtém uma resposta de um modelo maior sem enviar nada para um servidor de terceiros. É gratuito, com compras opcionais dentro do app. Usuários que querem a maior biblioteca de modelos possível, controle profundo de quantização, ou uma presença multiplataforma madura (Android, Windows) devem comparar com apps de LLM local mais estabelecidos.',
    quickAnswerTop: {
      pt: {
        question: 'Devo usar o Arbiter para IA privada e offline no iPhone?',
        answer:
          'Use o Arbiter se você quer um app gratuito para iPhone, sem conta, para chat de IA no dispositivo e resumo de documentos, com a opção de se conectar a modelos maiores no seu próprio PC ou Mac. Não use se precisar de suporte a Android ou Windows, uma biblioteca de modelos curada muito grande, ou qualidade de raciocínio de ponta que hoje só a IA em nuvem oferece.',
        bullets: [
          'Gratuito com compras opcionais dentro do app; nenhuma assinatura é necessária para usar os recursos principais.',
          'Sem contas, sem servidores — conversas e documentos enviados permanecem no dispositivo, segundo as afirmações do desenvolvedor.',
          'Roda Gemma, Llama, DeepSeek, Qwen e Mistral localmente no iPhone; pode se conectar ao LM Studio, Ollama ou Arbiter for Mac para modelos maiores.',
          'Hardware recomendado: iPhone 13 Pro ou mais recente, ou qualquer dispositivo com pelo menos 6GB de RAM, para desempenho fluido.',
          'Somente iOS/iPhone; o complemento "Arbiter for Mac" serve para se conectar a modelos maiores, não é um app de chat completo e independente para Mac confirmado.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'Resposta Rápida', anchor: 'quick-answer' },
      { label: 'O Que É o Arbiter', anchor: 'what-is-arbiter' },
      { label: 'Como a IA Local Funciona no Arbiter', anchor: 'how-local-ai-works' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Requisitos de Hardware e Preços', anchor: 'hardware-and-pricing' },
      { label: 'Prós e Contras: Benefícios vs. Limitações', anchor: 'tradeoffs' },
      { label: 'Arbiter vs. Alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem Deveria Usar o Arbiter', anchor: 'who-should-use' },
      { label: 'Quem Não Deveria Usar o Arbiter', anchor: 'who-should-not-use' },
      { label: 'Perguntas Frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura Relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Arbiter é um app gratuito para iPhone de chat de IA no dispositivo, desenvolvido por Jordan Stone, posicionado como focado em privacidade: sem contas, sem servidores, sem coleta de dados.',
          'Ele suporta modelos leves de código aberto localmente — Gemma, Llama, DeepSeek, Qwen e Mistral.',
          'Você também pode se conectar a modelos mais potentes rodando no seu próprio PC ou Mac por meio do LM Studio, Ollama, ou do complemento separado "Arbiter for Mac", em vez de uma API em nuvem de terceiros.',
          'Você pode enviar documentos para obter resumos e principais insights, processados no dispositivo.',
          'Hardware recomendado: iPhone 13 Pro ou mais recente, ou qualquer dispositivo com pelo menos 6GB de RAM, para desempenho fluido.',
          'Preços: gratuito com compras opcionais dentro do app. Categoria: Produtividade.',
          'Somente iOS/iPhone para o app principal; o Arbiter for Mac é descrito como uma forma de se conectar a modelos maiores, não confirmado como um cliente de chat completo e independente para Mac.',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'O Que É o Arbiter',
        content: [
          'O Arbiter é um assistente de IA offline focado em privacidade para iPhone, desenvolvido por Jordan Stone e listado na App Store como "Arbiter - Local AI Chat" (id6747954532), com um site oficial em askarbiter.ai. O app é gratuito para baixar, com compras opcionais dentro do app, e está listado na categoria Produtividade.',
          'A escolha central de design é que o Arbiter não exige uma conta e não depende de servidores próprios do Arbiter para processar suas conversas: ele roda um modelo diretamente no seu iPhone, ou se conecta a um modelo rodando em hardware que você controla (seu próprio PC ou Mac). A posição declarada pelo desenvolvedor é que as conversas nunca saem do dispositivo — seja o seu telefone, seja o computador desktop ao qual você o conecta.',
          'O suporte a modelos se concentra em famílias leves de código aberto: Gemma, Llama, DeepSeek, Qwen e Mistral. Essas são as mesmas famílias de modelos usadas na maioria dos apps e ferramentas de LLM local, o que significa que o teto prático de qualidade é definido pelo tamanho do modelo que o seu iPhone (ou desktop conectado) consegue rodar, não por um modelo proprietário exclusivo do Arbiter.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'O Arbiter é um app gratuito para iPhone que roda modelos de linguagem de código aberto no dispositivo ou se conecta a modelos mais potentes no seu próprio PC ou Mac, sem contas ou servidores.',
          },
          {
            type: 'plain-terms',
            text:
              'O Arbiter permite conversar com IA no seu iPhone da mesma forma que você faria com um chatbot em nuvem, exceto que a conversa fica no seu telefone (ou em um computador seu) em vez de ser enviada para os servidores de uma empresa.',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Como a IA Local Funciona no Arbiter',
        content: [
          'O Arbiter oferece dois caminhos para o chat de IA, ambos projetados para manter os dados fora de servidores de terceiros:',
        ],
        items: [
          '**Modelos no dispositivo** — baixe um modelo leve de código aberto (Gemma, Llama, DeepSeek, Qwen ou Mistral) diretamente no app e rode a inferência no seu iPhone. Nenhuma conexão com a internet é necessária depois que um modelo é baixado, e nenhum servidor de terceiros vê sua conversa.',
          '**Conectar-se a um modelo de desktop mais potente** — se a qualidade do modelo no dispositivo não for suficiente para uma tarefa, o Arbiter pode se conectar a modelos rodando no seu próprio PC ou Mac por meio de ferramentas como LM Studio ou Ollama, ou por meio do complemento separado "Arbiter for Mac". A inferência acontece na máquina desktop que você controla; o telefone atua como interface. Isso evita o dilema de ficar limitado ao que um telefone consegue rodar ou enviar seus prompts para uma API em nuvem.',
          '**Resumos de documentos** — você pode enviar documentos no seu dispositivo e fazer o Arbiter gerar resumos e extrair os principais insights, sem enviar o arquivo primeiro para um serviço em nuvem.',
        ],
        note: 'A versão mínima exata do iOS, os tamanhos de download por modelo e a lista completa de variantes de modelos de código aberto suportadas não são publicados em detalhe pelo desenvolvedor. Verifique as especificações atuais na listagem da App Store ou em askarbiter.ai antes de contar com um modelo específico para um dispositivo específico. Última verificação em relação à listagem da App Store em 04/09/2026.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        items: [
          '**Chat com modelo local.** Baixe e rode Gemma, Llama, DeepSeek, Qwen ou Mistral diretamente no seu iPhone para chat totalmente offline depois que o modelo for baixado.',
          '**Conexão com desktop para modelos maiores.** Conecte-se ao LM Studio ou Ollama rodando no seu próprio PC ou Mac, ou ao complemento "Arbiter for Mac", para acessar modelos mais capazes do que um iPhone consegue rodar sozinho — mantendo a inferência em hardware que você controla.',
          '**Resumos de documentos.** Envie um documento no seu dispositivo e receba um resumo e os principais insights, processados no dispositivo em vez de por meio de upload em nuvem.',
          '**Sem contas.** Não há cadastro, login ou sistema de contas — você abre o app e começa a usar.',
          '**Sem coleta de dados, segundo as afirmações do desenvolvedor.** O desenvolvedor afirma que as conversas nunca saem do dispositivo, e que o Arbiter não roda servidores próprios para processar ou armazenar seus chats.',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: 'Requisitos de Hardware e Preços',
        columns: ['Item', 'O que o Arbiter afirma', 'O que isso significa na prática'],
        rows: [
          {
            'Item': 'Hardware mínimo recomendado',
            'O que o Arbiter afirma': 'iPhone 13 Pro ou mais recente, ou qualquer dispositivo com pelo menos 6GB de RAM, para desempenho fluido.',
            'O que isso significa na prática': 'iPhones mais antigos ou com menos RAM ainda podem rodar o app, mas as respostas dos modelos no dispositivo podem ser mais lentas ou você pode ficar limitado a modelos menores. Se o seu iPhone for anterior ao 13 Pro e tiver menos de 6GB de RAM, prefira o caminho de conexão com desktop em vez da inferência no dispositivo.',
          },
          {
            'Item': 'Plataforma',
            'O que o Arbiter afirma': 'iOS / iPhone. Um app complementar, "Arbiter for Mac", está disponível para conexão com modelos maiores.',
            'O que isso significa na prática': 'Não há versão para Android ou Windows. O Arbiter for Mac é descrito especificamente como uma forma de acessar modelos mais potentes a partir do seu telefone — trate-o como um ponto de conexão, e não como um cliente de chat completo e independente para Mac confirmado, até que o desenvolvedor o documente como tal.',
          },
          {
            'Item': 'Preços',
            'O que o Arbiter afirma': 'Gratuito, com compras opcionais dentro do app. Categoria: Produtividade.',
            'O que isso significa na prática': 'Você pode instalar e usar o app sem pagar. Os níveis específicos de compras dentro do app, preços e o que eles desbloqueiam não são publicados no material de origem desta análise — consulte a listagem atual da App Store para preços atualizados antes de assumir que algum recurso específico é gratuito ou pago.',
          },
          {
            'Item': 'Armazenamento para modelos no dispositivo',
            'O que o Arbiter afirma': 'Não especificado em detalhe pelo desenvolvedor.',
            'O que isso significa na prática': 'Modelos de código aberto das famílias Gemma, Llama, DeepSeek, Qwen e Mistral normalmente variam de aproximadamente 1–5GB por modelo, dependendo da contagem de parâmetros e da quantização. Planeje o armazenamento do iPhone de acordo, caso pretenda manter mais de um modelo baixado ao mesmo tempo.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e Contras: Benefícios vs. Limitações',
        columns: ['Benefício', 'O que isso significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Privacidade por design',
            'O que isso significa no uso real': 'Sem contas, sem servidores do Arbiter processando seus chats, segundo o design declarado pelo desenvolvedor — as conversas permanecem no seu dispositivo ou no desktop ao qual você se conecta.',
            'Limitação / ressalva': 'Esta análise se baseia nas afirmações declaradas pelo desenvolvedor, e não em uma auditoria independente de terceiros; revise a política de privacidade atual na App Store antes de lidar com informações sensíveis.',
          },
          {
            'Benefício': 'Funciona totalmente offline depois que um modelo é baixado',
            'O que isso significa no uso real': 'O chat no dispositivo com Gemma, Llama, DeepSeek, Qwen ou Mistral não exige conexão com a internet após a configuração inicial.',
            'Limitação / ressalva': 'A instalação inicial do app e o download do modelo exigem internet. Conectar-se ao LM Studio, Ollama ou Arbiter for Mac exige uma conexão de rede entre o seu telefone e a máquina desktop.',
          },
          {
            'Benefício': 'Nenhum custo recorrente exigido',
            'O que isso significa no uso real': 'Download gratuito, compras opcionais dentro do app — você não é forçado a uma assinatura para usar o app principal.',
            'Limitação / ressalva': 'A inferência no dispositivo consome a bateria e o poder de processamento do seu iPhone; modelos grandes podem rodar lentamente em dispositivos mais antigos ou com menos RAM.',
          },
          {
            'Benefício': 'Acesso a modelos maiores sem uma API em nuvem',
            'O que isso significa no uso real': 'Conectar-se ao LM Studio, Ollama ou Arbiter for Mac permite usar modelos maiores e mais capazes do que um iPhone consegue rodar sozinho, mantendo a inferência em hardware que você possui.',
            'Limitação / ressalva': 'Exige um PC ou Mac com RAM/GPU suficientes e o LM Studio, Ollama ou Arbiter for Mac já configurados — não é um caminho de configuração zero para usuários sem um desktop compatível.',
          },
          {
            'Benefício': 'Resumos de documentos no dispositivo',
            'O que isso significa no uso real': 'Obtenha resumos e principais insights de arquivos sem enviá-los para um serviço em nuvem.',
            'Limitação / ressalva': 'A qualidade do resumo depende do tamanho do modelo no dispositivo escolhido; os formatos de arquivo suportados e o comprimento máximo de documento não são detalhados pelo desenvolvedor em materiais públicos.',
          },
          {
            'Benefício': 'Lista de modelos simples e curada',
            'O que isso significa no uso real': 'Gemma, Llama, DeepSeek, Qwen e Mistral cobrem uma variedade de famílias de modelos de código aberto sem exigir que você mesmo pesquise no Hugging Face.',
            'Limitação / ressalva': 'A lista exata de tamanhos/variantes específicas de modelos e se a importação de arquivos GGUF personalizados é suportada não são especificadas no material de origem desta análise — consulte a listagem atual da App Store para a lista de modelos atualizada.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter vs. Alternativas',
        columns: ['App', 'Melhor para', 'Nível de configuração', 'Foco de plataforma', 'Limitação principal'],
        rows: [
          {
            'App': 'Arbiter',
            'Melhor para': 'Usuários de iPhone que querem chat no dispositivo além da opção de acessar modelos maiores no próprio PC/Mac',
            'Nível de configuração': 'Mínimo para chat no dispositivo; mais configuração para conectar ao LM Studio/Ollama/Arbiter for Mac',
            'Foco de plataforma': 'Somente iOS/iPhone, com um complemento para Mac para conexão com modelos maiores',
            'Limitação principal': 'Sem app para Android ou Windows; níveis de compra dentro do app não detalhados publicamente',
          },
          {
            'App': '[Loci](/pt/power-local-llm/loci-ai-review-offline-local-ai)',
            'Melhor para': 'Chat privado multiplataforma de baixa fricção',
            'Nível de configuração': 'Mínimo (baixar, conversar)',
            'Foco de plataforma': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Limitação principal': 'Biblioteca curada de ~10 modelos; não é possível importar arquivos GGUF',
          },
          {
            'App': 'Private LLM',
            'Melhor para': 'Usuários exclusivos da Apple que querem seleção avançada de modelos',
            'Nível de configuração': 'Baixo a médio (compra única, downloads de modelos)',
            'Foco de plataforma': 'iPhone/iPad/Mac (somente Apple)',
            'Limitação principal': 'Somente Apple; exige aprender formatos de quantização',
          },
          {
            'App': 'PocketPal AI',
            'Melhor para': 'Usuários que querem importação completa de GGUF e controle de modelos',
            'Nível de configuração': 'Médio (gratuito, mas exige buscar os arquivos de modelo)',
            'Foco de plataforma': 'iPhone/iPad, algum suporte a Android',
            'Limitação principal': 'Exige familiaridade com arquivos GGUF e seleção manual de modelos',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem Deveria Usar o Arbiter',
        items: [
          '**Usuário de iPhone que quer chat privado sem conta.** Sem etapa de cadastro — abra o app e comece a conversar com um modelo no dispositivo.',
          '**Usuário que ocasionalmente precisa de um modelo maior.** Conectar-se ao LM Studio, Ollama ou Arbiter for Mac permite acessar um modelo mais potente no próprio desktop quando um modelo no dispositivo não é suficiente, sem enviar prompts para uma API em nuvem de terceiros.',
          '**Alguém que quer resumos de documentos sem upload em nuvem.** Envie um arquivo no dispositivo e receba um resumo e principais insights de volta.',
          '**Usuário consciente do orçamento.** Gratuito com compras opcionais dentro do app — nenhuma assinatura forçada para experimentar o app.',
          '**Usuário com um iPhone 13 Pro ou mais recente (ou dispositivo com 6GB+ de RAM).** Essa é a faixa de hardware recomendada pelo desenvolvedor para desempenho fluido no dispositivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem Não Deveria Usar o Arbiter',
        items: [
          '**Usuários de Android ou Windows.** O Arbiter é somente iOS/iPhone; não há app nativo para Android ou Windows no material de origem desta análise.',
          '**Usuário que espera raciocínio de nível de nuvem de ponta puramente no dispositivo.** Os modelos no dispositivo das famílias Gemma, Llama, DeepSeek, Qwen e Mistral rodando em um iPhone enfrentam o mesmo teto de contagem de parâmetros de qualquer outro app de IA local baseado em telefone; para os modelos maiores, ainda é necessário se conectar a uma máquina desktop ou usar um serviço em nuvem.',
          '**Usuário com um iPhone mais antigo, abaixo do nível de hardware recomendado.** Dispositivos anteriores ao iPhone 13 Pro, ou com menos de 6GB de RAM, podem apresentar desempenho mais lento no dispositivo.',
          '**Usuário que quer um app de chat completo, maduro e totalmente documentado para Mac hoje.** O "Arbiter for Mac" é descrito como uma forma de se conectar a modelos maiores a partir do telefone; não é confirmado no material de origem como um aplicativo de chat completo e independente para Mac por si só.',
          '**Usuário que lida com informações altamente sensíveis e precisa de uma afirmação de privacidade auditada de forma independente.** O posicionamento do Arbiter sem contas, sem servidores e sem coleta de dados é o design declarado pelo desenvolvedor; revise a política de privacidade atual na listagem da App Store antes de contar com isso para trabalhos confidenciais.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o Arbiter - Local AI Chat?',
            a: 'O Arbiter é um assistente de IA offline focado em privacidade para iPhone, desenvolvido por Jordan Stone. Você pode baixar e rodar modelos leves de código aberto (Gemma, Llama, DeepSeek, Qwen, Mistral) localmente no seu iPhone, ou se conectar a modelos mais potentes rodando no seu próprio PC ou Mac por meio do LM Studio, Ollama, ou do complemento "Arbiter for Mac".',
          },
          {
            q: 'O Arbiter é realmente privado?',
            a: 'O design declarado pelo desenvolvedor é sem contas, sem servidores e sem coleta de dados — as conversas são projetadas para nunca sair do dispositivo que você está usando, seja o seu iPhone ou um desktop ao qual você se conecta. Como em qualquer alegação de privacidade, revise a política de privacidade atual na listagem da App Store antes de usá-lo para informações sensíveis, já que esta análise se baseia nas afirmações públicas do desenvolvedor, e não em uma auditoria independente.',
          },
          {
            q: 'O Arbiter funciona sem conexão com a internet?',
            a: 'Sim, para chat no dispositivo: depois que um modelo (Gemma, Llama, DeepSeek, Qwen ou Mistral) é baixado no seu iPhone, o chat funciona sem conexão com a internet. Baixar o app e o modelo inicial exige internet, e conectar-se ao LM Studio, Ollama ou Arbiter for Mac exige uma conexão de rede entre o seu telefone e a máquina desktop.',
          },
          {
            q: 'De qual iPhone eu preciso para rodar o Arbiter sem travar?',
            a: 'O desenvolvedor recomenda um iPhone 13 Pro ou mais recente, ou qualquer dispositivo com pelo menos 6GB de RAM, para desempenho fluido. iPhones mais antigos ou com menos RAM ainda podem rodar o app, mas podem apresentar respostas mais lentas no dispositivo, especialmente com modelos maiores.',
          },
          {
            q: 'Quais modelos de IA o Arbiter suporta?',
            a: 'O Arbiter suporta modelos leves de código aberto: Gemma, Llama, DeepSeek, Qwen e Mistral. Eles rodam localmente no dispositivo. Para modelos mais potentes, o Arbiter pode se conectar ao LM Studio ou Ollama rodando no seu próprio PC ou Mac, ou ao complemento Arbiter for Mac.',
          },
          {
            q: 'Como funciona a conexão com o LM Studio ou o Ollama?',
            a: 'Em vez de rodar um modelo diretamente no seu iPhone, o Arbiter pode se conectar a um modelo já rodando no seu próprio PC ou Mac por meio do LM Studio, Ollama, ou do complemento Arbiter for Mac. A inferência acontece na máquina desktop que você controla, e a interface do Arbiter no telefone envia e recebe mensagens com ela — assim você tem acesso a modelos maiores e mais capazes do que o seu iPhone sozinho consegue rodar, sem uma API em nuvem de terceiros no meio do caminho.',
          },
          {
            q: 'O Arbiter custa dinheiro?',
            a: 'O Arbiter é gratuito para baixar, com compras opcionais dentro do app. Está listado na categoria Produtividade na App Store. Os níveis específicos de compras dentro do app e os preços não são detalhados no material de origem desta análise — consulte a listagem atual da App Store para preços atualizados.',
          },
          {
            q: 'O Arbiter consegue resumir documentos?',
            a: 'Sim. Você pode enviar documentos no seu dispositivo e o Arbiter vai gerar resumos e extrair os principais insights, processados no dispositivo em vez de por meio de upload em nuvem.',
          },
          {
            q: 'Existe uma versão do Arbiter para Android ou Windows?',
            a: 'Não. O Arbiter está disponível para iOS/iPhone. Há um complemento separado "Arbiter for Mac" para conexão com modelos mais potentes, mas nenhum cliente para Android ou Windows no material de origem desta análise.',
          },
          {
            q: 'Como o Arbiter se compara ao Loci ou ao Private LLM?',
            a: 'O Loci funciona em cinco plataformas (iPhone, iPad, Android, Mac, Windows) com uma biblioteca de modelos curada e configuração mínima. O Private LLM é exclusivo da Apple, com uma biblioteca de modelos maior (mais de 140 modelos) e mais controle de quantização, vendido como compra única. O Arbiter é focado no iPhone, com uma lista de modelos menor e mais simples (Gemma, Llama, DeepSeek, Qwen, Mistral), mas adiciona a opção de se conectar diretamente ao LM Studio, Ollama, ou ao seu próprio Mac para modelos maiores — uma combinação que nem todos os concorrentes oferecem na mesma forma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'Vale a pena instalar o Arbiter se você quer um app gratuito para iPhone, sem conta, para chat de IA privado e resumo de documentos, com uma válvula de escape genuína quando a qualidade do modelo no dispositivo não é suficiente: conectar-se ao LM Studio, Ollama, ou ao seu próprio Mac por meio do complemento Arbiter for Mac. O posicionamento de privacidade do desenvolvedor — sem contas, sem servidores, sem coleta de dados — é exatamente o design que a maioria dos usuários de IA móvel preocupados com privacidade está procurando, embora, como em qualquer app de desenvolvedor único, valha a pena revisar você mesmo a política de privacidade atual na App Store antes de confiar nele com material sensível. O nível de hardware recomendado (iPhone 13 Pro ou mais recente, ou 6GB+ de RAM) é realista para a maioria dos iPhones recentes. Onde o Arbiter é mais fraco é em amplitude: é somente para iPhone, o complemento Arbiter for Mac não é confirmado como um app de chat completo e independente para Mac, e detalhes sobre os preços das compras dentro do app e as variantes exatas de modelos não são publicados em detalhe. Usuários que querem um app maduro e multiplataforma com uma biblioteca de modelos curada maior também devem olhar para o Loci; usuários que querem o máximo de controle de modelo e quantização em dispositivos Apple devem olhar para o Private LLM. Para um usuário focado em iPhone que quer chat simples no dispositivo além da opção de acessar modelos maiores no próprio hardware, o Arbiter preenche uma lacuna real.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Arbiter - Local AI Chat na App Store](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) — listagem oficial, categoria, preços, informações do desenvolvedor.',
          '[Site oficial do Arbiter (askarbiter.ai)](https://www.askarbiter.ai/) — visão geral do produto e recursos.',
          '[Loci na App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — para comparação, um app de IA no dispositivo multiplataforma.',
          '[Site oficial do Private LLM](https://privatellm.app/en) — para comparação, um app de LLM local exclusivo da Apple com uma biblioteca de modelos maior.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[Análise do Loci AI: IA Offline Privada no iPhone, Android, iPad e Mac](/pt/power-local-llm/loci-ai-review-offline-local-ai) — um app de IA no dispositivo multiplataforma para comparar com o Arbiter.',
          '[Melhores Apps de LLM Local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o comparativo de apps para iPhone, incluindo PocketPal AI, Private LLM e Apple Intelligence.',
          '[Melhores Modelos de LLM Móveis em 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — conteúdo complementar sobre a camada de modelos, cobrindo as mesmas famílias de modelos suportadas pelo Arbiter.',
          '[Rode um LLM Local no Seu Tablet: iPad e Android (2026)](/pt/power-local-llm/run-ai-on-tablet-ipad-android) — guia focado em dispositivos para inferência local e remota em tablets.',
          '[Diretório de Software de LLM Local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — diretório completo de apps e ferramentas para todas as plataformas.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Análise do Arbiter Local AI Chat (2026): IA Offline Privada para iPhone',
      'description': 'Análise do Arbiter: vale a pena esse app de chat de IA offline focado em privacidade no iPhone? Modelos no dispositivo, resumos de documentos, conexão com LM Studio/Ollama, requisitos de hardware e preços.',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'sameAs': 'https://www.linkedin.com/in/hanskuepper/',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'pt-BR',
      'url': 'https://www.promptquorum.com/pt/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'O Arbiter é um app gratuito para iPhone de chat de IA privado e no dispositivo, desenvolvido por Jordan Stone. Ele roda modelos de código aberto (Gemma, Llama, DeepSeek, Qwen, Mistral) localmente, ou se conecta a modelos maiores no seu próprio PC ou Mac via LM Studio, Ollama, ou Arbiter for Mac.',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'Usuários de iPhone que estão decidindo se devem usar o Arbiter para chat de IA privado e offline e resumo de documentos' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': 'IA no dispositivo' },
        { '@type': 'Thing', 'name': 'Apps de LLM local' },
        { '@type': 'Thing', 'name': 'Privacidade móvel' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/pt/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-ja.webp',
    title: 'Arbiter Local AI Chatレビュー(2026年):iPhone向けプライベートオフラインAI',
    seoTitle: 'Arbiterレビュー2026:iPhone向けプライベートオフラインAIチャット',
    intro:
      'Arbiterは、Jordan Stone氏が開発したiPhone向けのプライバシー重視AIアシスタントです。開発者によれば、基本方針はシンプルです。会話データは端末の外に出ません。軽量なオープンソースモデル(Gemma、Llama、DeepSeek、Qwen、Mistral)をダウンロードしてiPhone上で直接実行できます。あるいは、LM StudioやOllama、または別アプリの「Arbiter for Mac」を通じて、自分のPCやMac上で動くより強力なモデルに接続することも可能です。アカウント登録は不要で、サーバーも使用せず、データ収集も行われません。会話内容や要約用にアップロードしたドキュメントは、使用している端末上にとどまるよう設計されています。オンデバイスチャットアプリを比較する際の実用的な論点は、Arbiterがスマートフォンのハードウェアだけで日常使いに十分な性能を発揮できるか、それとも他の場所で動く大規模モデルへのプライベートな入口として使うのが最適か、という点です。',
    metaDescription:
      'Arbiterレビュー:プライバシー重視のオフラインAIチャットアプリはiPhoneで使う価値があるか?オンデバイスモデル、文書要約、LM Studio/Ollama連携、必要なハードウェア、料金を解説。',
    twitterDescription:
      'Arbiter Local AI Chatレビュー2026:iPhone上でオープンソースモデルをオンデバイス実行、またはLM Studio/Ollama/Arbiter for Macでより大きなモデルに接続。アカウント不要、サーバーなし、データ収集なし。',
    audience:
      'Arbiterをプライベートなオフラインチャットや文書要約に使うか検討しているiPhoneユーザー向け。オンデバイスモデル対応、必要なハードウェア、デスクトップ推論ツールとの連携、他のモバイルローカルAIアプリとの比較を解説します。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'App StoreでArbiterを入手 →', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'arbiter ai review',
      'arbiter local ai chat',
      'arbiter ios app',
      'arbiter offline ai iphone',
      'arbiter vs private llm',
      'arbiter local llm iphone',
      'arbiter privacy ai app',
      'run local ai on iphone arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**Arbiterが最も魅力的なのは、会話とアップロードした文書を完全にデバイス上にとどめつつ、必要なときにはより強力なモデルにも手が届く、アカウント不要・サーバー不要のiPhoneチャットアプリを求めている場合です。** iPhone 13 Pro以降(またはRAM6GB以上の任意のデバイス)では、軽量なオープンソースモデル — Gemma、Llama、DeepSeek、Qwen、Mistral — をローカルで実行し、チャットと文書要約を行います。オンデバイスモデルの品質では不十分な場合、ArbiterはLM Studio、Ollama、または別アプリの「Arbiter for Mac」コンパニオンを通じて、自分のPCやMac上で動くより強力なモデルに接続できます。これにより、何も第三者のサーバーに送信することなく、より大きなモデルによる回答が得られます。無料で、アプリ内課金はオプションです。可能な限り大きなモデルライブラリ、深い量子化制御、あるいは成熟したクロスプラットフォーム展開(Android、Windows)を求めるユーザーは、より確立されたローカルLLMアプリと比較検討してください。',
    quickAnswerTop: {
      ja: {
        question: 'iPhoneでプライベートかつオフラインのAIを使うならArbiterを使うべきですか?',
        answer:
          'オンデバイスAIチャットと文書要約を、無料でアカウント不要のiPhoneアプリで行いたい、かつ必要に応じて自分のPCやMac上のより大きなモデルに接続する選択肢も欲しいなら、Arbiterを使ってください。AndroidやWindowsのサポート、非常に大規模な厳選モデルライブラリ、または現時点でクラウドAIでしか得られないフロンティア級の推論品質が必要な場合は、Arbiterを避けてください。',
        bullets: [
          '無料でアプリ内課金はオプション。コア機能の利用にサブスクリプションは不要。',
          'アカウントもサーバーもなし — 開発者の説明によれば、会話や文書はデバイス上にとどまる。',
          'iPhone上でGemma、Llama、DeepSeek、Qwen、Mistralをローカルに実行可能。LM Studio、Ollama、Arbiter for Macに接続すればより大きなモデルも利用可能。',
          '推奨ハードウェア:快適な動作のためにiPhone 13 Pro以降、またはRAM6GB以上のデバイス。',
          'iOS/iPhone専用。「Arbiter for Mac」コンパニオンはより大きなモデルへの接続用であり、完全に独立したスタンドアロンのMacチャットアプリとしては確認されていない。',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Arbiterとは', anchor: 'what-is-arbiter' },
      { label: 'ArbiterでのローカルAIの仕組み', anchor: 'how-local-ai-works' },
      { label: '機能', anchor: 'features' },
      { label: 'ハードウェア要件と価格', anchor: 'hardware-and-pricing' },
      { label: 'トレードオフ:メリットとデメリット', anchor: 'tradeoffs' },
      { label: 'Arbiter vs. 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'Arbiterを使うべき人', anchor: 'who-should-use' },
      { label: 'Arbiterを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        items: [
          'ArbiterはJordan Stone氏が開発した無料のiPhoneアプリで、オンデバイスAIチャットに特化し、プライバシー重視(アカウント不要、サーバーなし、データ収集なし)を掲げている。',
          '軽量なオープンソースモデル — Gemma、Llama、DeepSeek、Qwen、Mistral — をローカルでサポートする。',
          'LM Studio、Ollama、または別アプリの「Arbiter for Mac」を通じて、第三者のクラウドAPIの代わりに、自分のPCやMac上で動くより強力なモデルにも接続できる。',
          '文書をアップロードして要約や重要なポイントを取得でき、処理はデバイス上で行われる。',
          '推奨ハードウェア:快適な動作のためにiPhone 13 Pro以降、またはRAM6GB以上のデバイス。',
          '価格:無料、アプリ内課金はオプション。カテゴリー:仕事効率化。',
          'コアアプリはiOS/iPhone専用。Arbiter for Macはより大きなモデルへの接続手段として説明されており、完全に独立したスタンドアロンのMacチャットクライアントとしては確認されていない。',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'Arbiterとは',
        content: [
          'Arbiterは、Jordan Stone氏が開発したiPhone向けのプライバシー重視オフラインAIアシスタントです。App Storeには「Arbiter - Local AI Chat」(id6747954532)として掲載されており、公式サイトはaskarbiter.aiです。アプリは無料でダウンロードでき、アプリ内課金はオプションです。カテゴリーは「仕事効率化」に分類されています。',
          'Arbiterの設計における核となる方針は、アカウント登録を必要とせず、会話の処理にArbiter自身のサーバーを使わないという点です。モデルはiPhone上で直接実行するか、自分が管理するハードウェア(自分のPCやMac)上で動くモデルに接続するかのいずれかです。開発者の見解では、会話はデバイスの外に出ません。それはiPhoneであっても、接続先のデスクトップマシンであっても同様です。',
          '対応モデルは軽量なオープンソース系ファミリーが中心です:Gemma、Llama、DeepSeek、Qwen、Mistral。これらはほとんどのローカルLLMアプリやツールで使われているのと同じモデルファミリーであるため、品質の実質的な上限は、Arbiter独自のプロプライエタリモデルではなく、iPhone(または接続先のデスクトップ)がどれだけ大きなモデルを実行できるかによって決まります。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Arbiterは、オープンソースの言語モデルをオンデバイスで実行するか、自分のPCやMac上のより強力なモデルに接続できる無料のiPhoneアプリで、アカウントもサーバーも不要です。',
          },
          {
            type: 'plain-terms',
            text:
              'Arbiterは、クラウドチャットボットと同じ感覚でiPhone上でAIとチャットできますが、会話は企業のサーバーに送信されるのではなく、あなたのiPhone(または所有するコンピューター)内にとどまります。',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'ArbiterでのローカルAIの仕組み',
        content: [
          'Arbiterには、いずれもデータを第三者のサーバーから遠ざけるよう設計された、2つのAIチャットの利用方法があります。',
        ],
        items: [
          '**オンデバイスモデル** — 軽量なオープンソースモデル(Gemma、Llama、DeepSeek、Qwen、Mistral)をアプリに直接ダウンロードし、iPhone上で推論を実行します。モデルをダウンロードすれば、以降はインターネット接続不要で、会話内容は第三者のサーバーに送られません。',
          '**より強力なデスクトップモデルへの接続** — オンデバイスモデルの品質がタスクに対して不十分な場合、ArbiterはLM StudioやOllamaなどのツールを通じて、自分のPCやMac上で動くモデルに接続できます。または別アプリの「Arbiter for Mac」経由でも接続可能です。推論は自分が管理するデスクトップマシン上で行われ、iPhoneはインターフェースとして機能します。これにより、スマートフォンで実行できる範囲に限定されるか、プロンプトをクラウドAPIに送信するかという二者択一を避けられます。',
          '**文書の要約** — デバイス上で文書をアップロードし、Arbiterに要約と重要なポイントの抽出を生成させることができます。ファイルを先にクラウドサービスにアップロードする必要はありません。',
        ],
        note: '最小対応iOSバージョン、モデルごとのダウンロードサイズ、対応するオープンソースモデルのバリエーションの詳細な一覧は、開発者によって公開されていません。特定のデバイスで特定のモデルを利用する前に、App Storeの掲載情報またはaskarbiter.aiで最新情報を確認してください。2026-09-04時点のApp Store掲載情報に基づいて最終確認済みです。',
      },
      features: {
        id: 'features',
        title: '機能',
        items: [
          '**ローカルモデルでのチャット。** Gemma、Llama、DeepSeek、Qwen、Mistralをダウンロードし、iPhone上で直接実行することで、モデルのダウンロード後は完全にオフラインでチャットできます。',
          '**より大きなモデルへのデスクトップ接続。** 自分のPCやMac上で動くLM StudioやOllama、または「Arbiter for Mac」に接続することで、iPhone単体では実行できないより高性能なモデルに、自分が管理するハードウェア上で推論を保ったまま到達できます。',
          '**文書の要約。** デバイス上で文書をアップロードすると、クラウドへのアップロードを経由せずに、オンデバイスで処理された要約と重要なポイントが得られます。',
          '**アカウント不要。** サインアップやログイン、アカウントシステムは一切なく、アプリを開けばすぐに使い始められます。',
          '**データ収集なし(開発者の説明による)。** 開発者は、会話がデバイスの外に出ることはなく、Arbiterはチャットの処理や保存のために自社サーバーを運用していないと説明しています。',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: 'ハードウェア要件と価格',
        columns: ['項目', 'Arbiterの記載内容', '実際の意味'],
        rows: [
          {
            '項目': '推奨最小ハードウェア',
            'Arbiterの記載内容': '快適な動作のためには、iPhone 13 Pro以降、または6GB以上のRAMを搭載したデバイスを推奨。',
            '実際の意味': 'それより古い、あるいはRAMの少ないiPhoneでもアプリ自体は動作する可能性がありますが、オンデバイスモデルの応答が遅くなったり、より小さなモデルに限定されたりする場合があります。iPhoneがiPhone 13 Proより古く、RAMが6GB未満の場合は、オンデバイス推論よりもデスクトップ接続を活用することをおすすめします。',
          },
          {
            '項目': 'プラットフォーム',
            'Arbiterの記載内容': 'iOS / iPhone。より大きなモデルへの接続用にコンパニオンアプリ「Arbiter for Mac」も用意されています。',
            '実際の意味': 'AndroidやWindows版はありません。「Arbiter for Mac」は、あくまでスマートフォンからより強力なモデルに到達するための接続手段として説明されており、開発者がそのように文書化するまでは、完全に独立したMac用チャットクライアントとして確定的に扱うべきではありません。',
          },
          {
            '項目': '価格',
            'Arbiterの記載内容': '無料、アプリ内課金はオプション。カテゴリーは「仕事効率化」。',
            '実際の意味': 'アプリのインストールと利用は無料で行えます。具体的なアプリ内課金の価格帯や、それによって何が解放されるかについては、本レビューの元となる情報源には記載がありません。特定の機能が無料か有料かを前提とする前に、最新のApp Store掲載情報を確認してください。',
          },
          {
            '項目': 'オンデバイスモデル用のストレージ',
            'Arbiterの記載内容': '開発者による詳細な記載なし。',
            '実際の意味': 'Gemma、Llama、DeepSeek、Qwen、Mistralファミリーのオープンソースモデルは、パラメータ数や量子化の程度に応じて、1モデルあたりおおむね1~5GB程度です。同時に複数のモデルを保持しておく予定がある場合は、それを見込んでiPhoneのストレージを確保してください。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットとデメリット',
        columns: ['メリット', '実際の使用における意味', '制限事項・注意点'],
        rows: [
          {
            'メリット': '設計段階からのプライバシー配慮',
            '実際の使用における意味': '開発者の設計方針として、アカウントもArbiter運営のサーバーによるチャット処理もありません。会話は自分のデバイス、または接続先のデスクトップ上にとどまります。',
            '制限事項・注意点': '本レビューは、独立した第三者による監査ではなく、開発者が表明している内容に基づいています。機密情報を扱う前に、App Store掲載の最新のプライバシーポリシーを確認してください。',
          },
          {
            'メリット': 'モデルのダウンロード後は完全にオフラインで動作',
            '実際の使用における意味': 'Gemma、Llama、DeepSeek、Qwen、Mistralによるオンデバイスチャットは、セットアップ後はインターネット接続を必要としません。',
            '制限事項・注意点': 'アプリの初回インストールとモデルのダウンロードにはインターネットが必要です。LM Studio、Ollama、Arbiter for Macへの接続には、iPhoneとデスクトップマシン間のネットワーク接続が必要です。',
          },
          {
            'メリット': '継続的な費用が不要',
            '実際の使用における意味': '無料でダウンロードでき、アプリ内課金はオプションです。コア機能を使うためにサブスクリプションへの加入を強制されません。',
            '制限事項・注意点': 'オンデバイス推論はiPhoneのバッテリーと処理能力を消費します。古い機種やRAMの少ないデバイスでは、大きなモデルの動作が遅くなる場合があります。',
          },
          {
            'メリット': 'クラウドAPIなしでより大きなモデルにアクセス',
            '実際の使用における意味': 'LM Studio、Ollama、Arbiter for Macへの接続により、iPhone単体では実行できないより大規模で高性能なモデルを、自分が所有するハードウェア上で推論を保ったまま利用できます。',
            '制限事項・注意点': '十分なRAM/GPUを備えたPCまたはMac、そしてすでにセットアップ済みのLM Studio、Ollama、Arbiter for Macが必要です。互換性のあるデスクトップを持たないユーザーにとって、ゼロからのセットアップで完結する方法ではありません。',
          },
          {
            'メリット': 'オンデバイスでの文書要約',
            '実際の使用における意味': 'ファイルをクラウドサービスにアップロードすることなく、要約と重要なポイントを得られます。',
            '制限事項・注意点': '要約の品質は選択したオンデバイスモデルのサイズに依存します。対応ファイル形式や文書の最大長については、開発者が公開資料で詳細を示していません。',
          },
          {
            'メリット': 'シンプルで厳選されたモデル一覧',
            '実際の使用における意味': 'Gemma、Llama、DeepSeek、Qwen、Mistralにより、自分でHugging Faceを検索することなく、幅広いオープンソースモデルファミリーをカバーできます。',
            '制限事項・注意点': '具体的なモデルサイズ・バリエーションの一覧や、カスタムGGUFインポートに対応しているかどうかは、本レビューの情報源には明記されていません。最新のモデル一覧はApp Store掲載情報で確認してください。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter vs. 代替アプリ',
        columns: ['アプリ', '最適な用途', 'セットアップの手間', 'プラットフォームの重点', '主な制限'],
        rows: [
          {
            'アプリ': 'Arbiter',
            '最適な用途': 'オンデバイスチャットに加え、自分のPC/Macでより大きなモデルに到達する選択肢も欲しいiPhoneユーザー',
            'セットアップの手間': 'オンデバイスチャットは最小限。LM Studio/Ollama/Arbiter for Macへの接続にはより多くのセットアップが必要',
            'プラットフォームの重点': 'iOS/iPhoneのみ。より大きなモデルへの接続用にMacコンパニオンあり',
            '主な制限': 'AndroidやWindows版がない。アプリ内課金の階層は公開されていない',
          },
          {
            'アプリ': '[Loci](/ja/power-local-llm/loci-ai-review-offline-local-ai)',
            '最適な用途': '手間の少ないクロスプラットフォームのプライベートチャット',
            'セットアップの手間': '最小限(ダウンロードしてチャットするだけ)',
            'プラットフォームの重点': 'iPhone/iPad/Android/Mac/Windows(5プラットフォーム)',
            '主な制限': '厳選された約10モデルのライブラリ、GGUFファイルのインポート不可',
          },
          {
            'アプリ': 'Private LLM',
            '最適な用途': '高度なモデル選択を求めるApple専用ユーザー',
            'セットアップの手間': '低~中程度(買い切り購入、モデルダウンロード)',
            'プラットフォームの重点': 'iPhone/iPad/Mac(Apple限定)',
            '主な制限': 'Apple専用。量子化フォーマットの理解が必要',
          },
          {
            'アプリ': 'PocketPal AI',
            '最適な用途': 'GGUFの完全なインポートとモデル制御を求めるユーザー',
            'セットアップの手間': '中程度(無料だが、モデルファイルの入手が必要)',
            'プラットフォームの重点': 'iPhone/iPad、一部Android対応',
            '主な制限': 'GGUFファイルの扱いとモデルの手動選択に慣れが必要',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Arbiterを使うべき人',
        items: [
          '**アカウントなしでプライベートにチャットしたいiPhoneユーザー。** サインアップ不要で、アプリを開けばすぐにオンデバイスモデルとのチャットを始められます。',
          '**たまにより大きなモデルが必要になるユーザー。** LM Studio、Ollama、Arbiter for Macへの接続により、オンデバイスモデルでは物足りないときに、自分のデスクトップ上のより強力なモデルを、第三者のクラウドAPIにプロンプトを送信せずに利用できます。',
          '**クラウドアップロードなしで文書要約をしたい人。** デバイス上でファイルをアップロードし、要約と重要なポイントを得られます。',
          '**コストを抑えたいユーザー。** 無料でアプリ内課金はオプション。試すのに強制的なサブスクリプションはありません。',
          '**iPhone 13 Pro以降(またはRAM6GB以上のデバイス)を持つユーザー。** 開発者が快適なオンデバイス動作のために推奨しているハードウェア範囲です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Arbiterを使うべきでない人',
        items: [
          '**AndroidまたはWindowsユーザー。** ArbiterはiOS/iPhone専用です。本レビューの情報源には、ネイティブのAndroidやWindowsアプリに関する記載はありません。',
          '**純粋なオンデバイス処理でフロンティア級のクラウド並み推論性能を期待するユーザー。** iPhone上で動作するGemma、Llama、DeepSeek、Qwen、Mistralファミリーのオンデバイスモデルは、他のスマートフォン向けローカルAIアプリと同様のパラメータ数の上限に直面します。最大級のモデルを使うには、デスクトップマシンへの接続かクラウドサービスの利用が依然として必要です。',
          '**推奨ハードウェア水準に満たない古いiPhoneを使っているユーザー。** iPhone 13 Proより古い機種や、RAMが6GB未満のデバイスでは、オンデバイス動作が遅くなる場合があります。',
          '**今すぐ成熟した完全に文書化されたスタンドアロンのMacチャットアプリを求めるユーザー。** 「Arbiter for Mac」は、スマートフォンからより大きなモデルに接続するための手段として説明されており、本レビューの情報源では、単独で完結するMac用チャットアプリケーションであるとは確認されていません。',
          '**独立監査済みのプライバシー保証を必要とする、非常に機密性の高い情報を扱うユーザー。** Arbiterのアカウント不要・サーバーレス・データ収集なしという方針は、開発者が表明している設計です。機密性の高い作業に利用する前に、App Store掲載の最新のプライバシーポリシーを確認してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Arbiter - Local AI Chatとは何ですか?',
            a: 'Arbiterは、Jordan Stone氏が開発したiPhone向けのプライバシー重視オフラインAIアシスタントです。軽量なオープンソースモデル(Gemma、Llama、DeepSeek、Qwen、Mistral)をiPhone上でダウンロードして実行するか、LM Studio、Ollama、または「Arbiter for Mac」コンパニオンを通じて、自分のPCやMac上で動くより強力なモデルに接続できます。',
          },
          {
            q: 'Arbiterは本当にプライベートですか?',
            a: '開発者が表明している設計方針は、アカウントなし、サーバーなし、データ収集なしというものです。会話は、iPhoneであっても接続先のデスクトップであっても、使用しているデバイスの外に出ないよう設計されています。あらゆるプライバシーに関する主張と同様、本レビューは独立監査ではなく開発者の公表内容に基づいているため、機密情報に使用する前にApp Store掲載の最新のプライバシーポリシーを確認してください。',
          },
          {
            q: 'Arbiterはインターネット接続なしで動作しますか?',
            a: 'オンデバイスチャットについては、はい。モデル(Gemma、Llama、DeepSeek、Qwen、Mistralのいずれか)をiPhoneにダウンロードすれば、それ以降はインターネット接続なしでチャットが機能します。アプリと初回モデルのダウンロードにはインターネットが必要で、LM Studio、Ollama、Arbiter for Macへの接続には、iPhoneとデスクトップマシン間のネットワーク接続が必要です。',
          },
          {
            q: 'Arbiterを快適に動かすにはどのiPhoneが必要ですか?',
            a: '開発者は、快適な動作のためにiPhone 13 Pro以降、またはRAM6GB以上のデバイスを推奨しています。それより古い、あるいはRAMの少ないiPhoneでもアプリ自体は動作する可能性がありますが、特に大きなモデルでオンデバイスの応答が遅くなる場合があります。',
          },
          {
            q: 'ArbiterはどのようなAIモデルに対応していますか?',
            a: 'Arbiterは軽量なオープンソースモデル、Gemma、Llama、DeepSeek、Qwen、Mistralに対応しています。これらはオンデバイスでローカルに動作します。より強力なモデルについては、Arbiterは自分のPCやMac上で動くLM StudioやOllama、またはArbiter for Macコンパニオンアプリに接続できます。',
          },
          {
            q: 'LM StudioやOllamaへの接続はどのように機能しますか?',
            a: 'iPhone上で直接モデルを実行する代わりに、Arbiterは自分のPCやMac上ですでに動作しているモデルに、LM Studio、Ollama、またはArbiter for Macコンパニオンアプリを通じて接続できます。推論は自分が管理するデスクトップマシン上で行われ、Arbiterのスマートフォン用インターフェースがそれとメッセージを送受信します。これにより、第三者のクラウドAPIを介さずに、iPhone単体では実行できないより大きく高性能なモデルにアクセスできます。',
          },
          {
            q: 'Arbiterの利用に料金はかかりますか?',
            a: 'Arbiterは無料でダウンロードでき、アプリ内課金はオプションです。App Storeでは「仕事効率化」カテゴリーに分類されています。具体的なアプリ内課金の階層や価格は、本レビューの情報源には記載されていません。最新の価格についてはApp Storeの掲載情報を確認してください。',
          },
          {
            q: 'Arbiterで文書を要約できますか?',
            a: 'はい。デバイス上で文書をアップロードすると、Arbiterはクラウドへのアップロードを経由せず、デバイス上で処理された要約と重要なポイントを生成します。',
          },
          {
            q: 'ArbiterにAndroid版やWindows版はありますか?',
            a: 'いいえ。ArbiterはiOS/iPhone向けに提供されています。より強力なモデルに接続するための別アプリ「Arbiter for Mac」コンパニオンはありますが、本レビューの情報源にAndroidやWindowsクライアントに関する記載はありません。',
          },
          {
            q: 'ArbiterはLociやPrivate LLMと比べてどうですか?',
            a: 'Lociは5つのプラットフォーム(iPhone、iPad、Android、Mac、Windows)で動作し、厳選されたモデルライブラリとほぼ設定不要のセットアップを備えています。Private LLMはApple専用で、より大きなモデルライブラリ(140以上のモデル)と高度な量子化制御を備え、買い切り購入で提供されます。Arbiterはより小さくシンプルなモデル一覧(Gemma、Llama、DeepSeek、Qwen、Mistral)を持つiPhone中心のアプリですが、LM Studio、Ollama、自分のMacに直接接続してより大きなモデルを使える選択肢を追加しています。これは、すべての競合アプリが同じ形で提供しているわけではない組み合わせです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Arbiterは、プライベートなAIチャットと文書要約のために無料でアカウント不要のiPhoneアプリを求めていて、なおかつオンデバイスモデルの品質が不十分なときの本物の逃げ道 — LM Studio、Ollama、またはArbiter for Macコンパニオンを通じた自分のMacへの接続 — を求めているなら、インストールする価値があります。開発者のプライバシーへの立ち位置(アカウントなし、サーバーなし、データ収集なし)は、プライバシーを重視するモバイルAIユーザーの多くが求めているまさにその設計ですが、単独開発者によるアプリである以上、機密性の高い情報を委ねる前に、App Store掲載の最新プライバシーポリシーを自分で確認する価値はあります。推奨ハードウェア水準(iPhone 13 Pro以降、またはRAM6GB以上)は、最近の多くのiPhoneにとって現実的な基準です。Arbiterが弱いのは幅広さの面です。iPhone専用であり、Arbiter for Macコンパニオンが完全に独立したMac用チャットアプリであると確認されているわけではなく、アプリ内課金の価格や正確なモデルバリエーションの詳細は公開されていません。より大きな厳選モデルライブラリを備えた、成熟したクロスプラットフォームアプリを求めるユーザーはLociも検討すべきです。Apple製デバイスで最大限のモデル・量子化制御を求めるユーザーはPrivate LLMを検討すべきです。シンプルなオンデバイスチャットに加え、自分のハードウェア上でより大きなモデルに到達する選択肢を求めるiPhone中心のユーザーにとって、Arbiterは実際のギャップを埋める存在です。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのArbiter - Local AI Chat](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) — 公式掲載ページ。カテゴリー、価格、開発者情報を掲載。',
          '[Arbiter公式サイト(askarbiter.ai)](https://www.askarbiter.ai/) — 製品概要と機能紹介。',
          '[App StoreのLoci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — 比較対象として、クロスプラットフォーム対応のオンデバイスAIアプリ。',
          '[Private LLM公式サイト](https://privatellm.app/en) — 比較対象として、より大きなモデルライブラリを持つApple専用のローカルLLMアプリ。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Lociレビュー:iPhone、Android、iPad、Macで使えるプライベートオフラインAI](/ja/power-local-llm/loci-ai-review-offline-local-ai) — Arbiterと比較するためのクロスプラットフォーム対応オンデバイスAIアプリ。',
          '[2026年版iPhone向けローカルLLMアプリ総まとめ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — PocketPal AI、Private LLM、Apple Intelligenceを含むiPhoneアプリ総合ガイド。',
          '[2026年版モバイルLLMモデル比較:Phi-4 Mini vs Gemma 4 vs SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Arbiterが対応するのと同じモデルファミリーを扱う、モデルレイヤーの関連記事。',
          '[タブレットでローカルLLMを実行する方法:iPadとAndroid(2026年版)](/ja/power-local-llm/run-ai-on-tablet-ipad-android) — タブレットにおけるオンデバイス・リモート推論に焦点を当てたデバイス別ガイド。',
          '[2026年版ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory-2026) — 全プラットフォームを網羅した総合アプリ・ツールディレクトリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Arbiter Local AI Chatレビュー(2026年):iPhone向けプライベートオフラインAI',
      'description': 'Arbiterレビュー:プライバシー重視のオフラインAIチャットアプリはiPhoneで使う価値があるか?オンデバイスモデル、文書要約、LM Studio/Ollama連携、必要なハードウェア、料金を解説。',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'ja',
      'url': 'https://www.promptquorum.com/ja/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'Arbiterは、Jordan Stone氏が開発した、プライベートなオンデバイスAIチャットのための無料iPhoneアプリです。オープンソースモデル(Gemma、Llama、DeepSeek、Qwen、Mistral)をローカルで実行するか、LM Studio、Ollama、Arbiter for Mac経由で自分のPCやMac上のより大きなモデルに接続します。',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'Arbiterをプライベートなオフラインチャットと文書要約に使うか検討しているiPhoneユーザー' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': 'オンデバイスAI' },
        { '@type': 'Thing', 'name': 'ローカルLLMアプリ' },
        { '@type': 'Thing', 'name': 'モバイルプライバシー' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ja/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-zh.webp',
    title: 'Arbiter Local AI Chat 评测（2026）：iPhone 隐私离线 AI 应用',
    seoTitle: 'Arbiter AI 评测 2026：iPhone 隐私离线聊天应用',
    intro:
      'Arbiter 由 Jordan Stone 开发，是一款专注隐私的 iPhone AI 助手，核心理念很简单：根据开发者的说法，你的对话内容不会离开你的设备。你可以在 iPhone 上下载并运行轻量级开源模型（Gemma、Llama、DeepSeek、Qwen、Mistral），也可以通过 LM Studio、Ollama 或独立的"Arbiter for Mac"配套应用，连接运行在你自己电脑或 Mac 上的更强大模型。应用没有账号系统，不依赖服务器，也不收集数据——设计上，你的对话以及上传用于摘要的文档都保留在你正在使用的设备上。对于正在比较设备端聊天应用的人来说，实际要问的问题是：Arbiter 在 iPhone 级别的硬件上能力是否足够作为日常主力应用，还是更适合作为连接更大模型的隐私前端。',
    metaDescription:
      'Arbiter 评测：这款注重隐私的离线 AI 聊天应用在 iPhone 上是否值得使用？涵盖设备端模型、文档摘要、连接 LM Studio/Ollama、硬件要求与价格。',
    twitterDescription:
      'Arbiter Local AI Chat 2026 评测：在 iPhone 上设备端运行开源模型，或连接 LM Studio/Ollama/Arbiter for Mac 使用更强模型。无账号、无服务器、不收集数据。',
    audience:
      '正在考虑是否使用 Arbiter 进行私密离线 AI 聊天和文档摘要的 iPhone 用户——涵盖设备端模型支持、硬件要求、连接桌面推理工具的方式，以及与其他移动端本地 AI 应用的对比。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: '前往 App Store 获取 Arbiter →', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'arbiter ai 评测',
      'arbiter 本地 ai 聊天',
      'arbiter ios 应用',
      'arbiter 离线 ai iphone',
      'arbiter 对比 private llm',
      'arbiter 本地大模型 iphone',
      'arbiter 隐私 ai 应用',
      'iphone 本地运行 ai arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**如果你想要一款无需账号、无需服务器的 iPhone 聊天应用，能把对话和上传的文档完全保留在设备上，同时在需要时还能调用更强大的模型，Arbiter 就非常值得考虑。** 在 iPhone 13 Pro 或更新机型（或任何配备至少 6GB 内存的设备）上，它可以在本地运行轻量级开源模型——Gemma、Llama、DeepSeek、Qwen 和 Mistral——用于聊天和文档摘要。当设备端模型能力不够用时，Arbiter 可以通过 LM Studio、Ollama，或独立的"Arbiter for Mac"配套应用，连接运行在你自己电脑或 Mac 上的更强大模型，让你获得更强的回答，而不必把任何内容发送到第三方服务器。应用免费，附带可选的应用内购买。如果你想要尽可能大的模型库、深度的量化控制，或成熟的跨平台支持（Android、Windows），则应该与更成熟的本地大模型应用进行比较。',
    quickAnswerTop: {
      zh: {
        question: '在 iPhone 上进行私密离线 AI 对话，应该用 Arbiter 吗？',
        answer:
          '如果你想要一款免费、无需账号的 iPhone 应用，用于设备端 AI 聊天和文档摘要，并且希望在需要时能连接自己电脑或 Mac 上的更强模型，Arbiter 是合适的选择。如果你需要 Android 或 Windows 支持、非常庞大的精选模型库，或目前只有云端 AI 才能提供的前沿推理能力，则应跳过它。',
        bullets: [
          '免费，附带可选的应用内购买；使用核心功能无需订阅。',
          '无需账号、无服务器——根据开发者的说法，对话和上传的文档都保留在设备上。',
          '可在 iPhone 上本地运行 Gemma、Llama、DeepSeek、Qwen 和 Mistral；也可连接 LM Studio、Ollama 或 Arbiter for Mac 使用更强模型。',
          '推荐硬件：iPhone 13 Pro 或更新机型，或任何配备至少 6GB 内存的设备，以获得流畅表现。',
          '仅支持 iOS/iPhone；"Arbiter for Mac"配套应用用于连接更强模型，尚未被确认为一款完整的独立 Mac 聊天应用。',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Arbiter 是什么', anchor: 'what-is-arbiter' },
      { label: 'Arbiter 中本地 AI 的工作原理', anchor: 'how-local-ai-works' },
      { label: '功能特点', anchor: 'features' },
      { label: '硬件要求与价格', anchor: 'hardware-and-pricing' },
      { label: '优缺点对比', anchor: 'tradeoffs' },
      { label: 'Arbiter 与其他应用对比', anchor: 'vs-alternatives' },
      { label: '适合谁使用 Arbiter', anchor: 'who-should-use' },
      { label: '不适合谁使用 Arbiter', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '参考来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        items: [
          'Arbiter 是一款免费的 iPhone 设备端 AI 聊天应用，由 Jordan Stone 开发，定位为隐私优先：无账号、无服务器、不收集数据。',
          '本地支持轻量级开源模型——Gemma、Llama、DeepSeek、Qwen 和 Mistral。',
          '你还可以通过 LM Studio、Ollama，或独立的"Arbiter for Mac"配套应用，连接运行在自己电脑或 Mac 上的更强大模型，而不是使用第三方云端 API。',
          '可以上传文档以获取摘要和关键信息提取，处理过程在设备上完成。',
          '推荐硬件：iPhone 13 Pro 或更新机型，或任何配备至少 6GB 内存的设备，以获得流畅表现。',
          '价格：免费，附带可选的应用内购买。分类：效率工具。',
          '核心应用仅支持 iOS/iPhone；Arbiter for Mac 被描述为连接更强模型的方式，尚未被确认为一款完整的独立 Mac 聊天客户端。',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'Arbiter 是什么',
        content: [
          'Arbiter 是一款专注隐私的 iPhone 离线 AI 助手，由 Jordan Stone 开发，在 App Store 上以"Arbiter - Local AI Chat"（id6747954532）上架，官网为 askarbiter.ai。应用可免费下载，附带可选的应用内购买，分类为效率工具。',
          '其核心设计理念是：Arbiter 既不要求账号，也不依赖 Arbiter 自己的服务器来处理你的对话——它要么直接在你的 iPhone 上运行模型，要么连接运行在你自己控制的硬件（你的电脑或 Mac）上的模型。开发者的表述是：对话内容不会离开设备——无论是你的手机，还是你连接的那台电脑。',
          '模型支持以轻量级开源系列为核心：Gemma、Llama、DeepSeek、Qwen 和 Mistral。这些模型系列在大多数本地大模型应用和工具中都有使用，这意味着实际的能力上限取决于你的 iPhone（或所连接的电脑）能运行多大的模型，而不是取决于某个 Arbiter 专有模型。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Arbiter 是一款免费的 iPhone 应用，可在设备端运行开源语言模型，或连接你自己电脑/Mac 上更强大的模型，全程无需账号或服务器。',
          },
          {
            type: 'plain-terms',
            text:
              'Arbiter 让你像使用云端聊天机器人一样在 iPhone 上与 AI 对话，不同的是对话内容留在你的手机（或你自己的电脑）上，而不会被发送到某家公司的服务器。',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Arbiter 中本地 AI 的工作原理',
        content: [
          'Arbiter 提供两种 AI 聊天路径，都旨在让数据不经过第三方服务器：',
        ],
        items: [
          '**设备端模型** —— 直接在应用内下载一个轻量级开源模型（Gemma、Llama、DeepSeek、Qwen 或 Mistral），在你的 iPhone 上进行推理。模型下载完成后无需联网即可使用，也没有第三方服务器能看到你的对话。',
          '**连接更强大的桌面端模型** —— 如果设备端模型能力不足以完成某项任务，Arbiter 可以通过 LM Studio 或 Ollama 等工具，连接运行在你自己电脑或 Mac 上的模型，也可以通过独立的"Arbiter for Mac"配套应用连接。推理过程发生在你自己控制的电脑上，手机只作为交互界面。这样就避免了要么只能使用手机能运行的模型，要么必须把提示词发送给云端 API 的取舍。',
          '**文档摘要** —— 你可以在设备上上传文档，让 Arbiter 生成摘要并提取关键信息，而无需先把文件上传到云服务。',
        ],
        note: '开发者未详细公开确切的最低 iOS 版本要求、各模型的下载体积，以及所支持的开源模型变体完整列表。在依赖特定模型运行于特定设备之前，请在 App Store 页面或 askarbiter.ai 上核实当前的具体信息。本文信息最后核实于 2026-09-04 的 App Store 页面。',
      },
      features: {
        id: 'features',
        title: '功能特点',
        items: [
          '**本地模型聊天。** 在 iPhone 上下载并运行 Gemma、Llama、DeepSeek、Qwen 或 Mistral，模型下载完成后即可完全离线聊天。',
          '**连接桌面端获取更强模型。** 连接运行在你自己电脑或 Mac 上的 LM Studio 或 Ollama，或连接"Arbiter for Mac"配套应用，即可使用比 iPhone 单机运行更强大的模型，同时推理仍在你自己控制的硬件上进行。',
          '**文档摘要。** 在设备上上传文档，获取摘要和关键信息，处理过程在设备端完成，而非通过云端上传。',
          '**无需账号。** 没有注册、登录或账号系统——打开应用即可直接使用。',
          '**不收集数据（据开发者说明）。** 开发者表示，对话内容不会离开设备，Arbiter 也不运营自己的服务器来处理或存储你的聊天记录。',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: '硬件要求与价格',
        columns: ['项目', 'Arbiter 官方说明', '实际使用意义'],
        rows: [
          {
            '项目': '最低推荐硬件',
            'Arbiter 官方说明': 'iPhone 13 Pro 或更新机型，或任何配备至少 6GB 内存的设备，以获得流畅表现。',
            '实际使用意义': '更旧或内存较小的 iPhone 仍可运行该应用，但设备端模型的响应可能较慢，或只能使用较小的模型。如果你的 iPhone 比 13 Pro 更旧，且内存低于 6GB，建议优先使用连接桌面端的方式，而不是设备端推理。',
          },
          {
            '项目': '平台',
            'Arbiter 官方说明': 'iOS / iPhone。另有配套应用"Arbiter for Mac"，用于连接更强大的模型。',
            '实际使用意义': '没有 Android 或 Windows 版本。Arbiter for Mac 被明确描述为从手机端连接更强模型的方式——在开发者将其正式记录为完整独立 Mac 聊天客户端之前，应将其视为一个连接入口，而非已确认的独立应用。',
          },
          {
            '项目': '价格',
            'Arbiter 官方说明': '免费，附带可选的应用内购买。分类：效率工具。',
            '实际使用意义': '你可以免费安装和使用该应用。具体的应用内购买档位、价格及解锁内容，在本文的资料来源中未有详细说明——使用前请查看当前 App Store 页面以获取最新定价，不要预设某项功能一定免费或收费。',
          },
          {
            '项目': '设备端模型所需存储空间',
            'Arbiter 官方说明': '开发者未详细说明。',
            '实际使用意义': 'Gemma、Llama、DeepSeek、Qwen 和 Mistral 系列的开源模型，体积通常在每个模型约 1–5GB 之间，具体取决于参数量和量化方式。如果计划同时保留多个已下载模型，请为 iPhone 存储空间预留相应余量。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优缺点对比',
        columns: ['优势', '实际使用体验', '局限性/注意事项'],
        rows: [
          {
            '优势': '设计上注重隐私',
            '实际使用体验': '根据开发者的设计说明，无需账号、没有 Arbiter 自建服务器处理你的聊天记录——对话保留在你的设备或你连接的电脑上。',
            '局限性/注意事项': '本评测依据的是开发者自述的说明，而非独立第三方审计；在处理敏感信息前，请查看 App Store 上当前的隐私政策。',
          },
          {
            '优势': '模型下载后可完全离线使用',
            '实际使用体验': '设备端聊天使用 Gemma、Llama、DeepSeek、Qwen 或 Mistral，设置完成后无需联网即可运行。',
            '局限性/注意事项': '首次安装应用及下载模型需要联网。连接 LM Studio、Ollama 或 Arbiter for Mac，则需要手机与电脑之间的网络连接。',
          },
          {
            '优势': '无需持续付费',
            '实际使用体验': '免费下载，附带可选的应用内购买——使用核心应用不会被强制要求订阅。',
            '局限性/注意事项': '设备端推理会消耗 iPhone 的电量和处理能力；在较旧或内存较小的设备上，较大的模型可能运行较慢。',
          },
          {
            '优势': '无需云端 API 即可使用更强模型',
            '实际使用体验': '连接 LM Studio、Ollama 或 Arbiter for Mac，可以使用比 iPhone 单机更大、更强的模型，同时推理仍在你自己拥有的硬件上进行。',
            '局限性/注意事项': '需要一台内存/显卡足够、并已提前配置好 LM Studio、Ollama 或 Arbiter for Mac 的电脑或 Mac——对于没有合适电脑的用户来说，这并非零配置的方案。',
          },
          {
            '优势': '设备端文档摘要',
            '实际使用体验': '无需将文件上传到云服务，即可获取文档的摘要和关键信息。',
            '局限性/注意事项': '摘要质量取决于所选设备端模型的大小；开发者未在公开资料中详细说明支持的文件格式和最大文档长度。',
          },
          {
            '优势': '模型列表精简、经过筛选',
            '实际使用体验': 'Gemma、Llama、DeepSeek、Qwen 和 Mistral 覆盖了多个开源模型系列，无需自行在 Hugging Face 上搜索。',
            '局限性/注意事项': '本评测的资料来源未说明具体的模型规格/变体清单，以及是否支持自定义导入 GGUF 文件——请查看当前 App Store 页面以获取最新的模型列表。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter 与其他应用对比',
        columns: ['应用', '适合场景', '设置难度', '平台侧重', '主要局限'],
        rows: [
          {
            '应用': 'Arbiter',
            '适合场景': '希望设备端聊天，同时保留连接自己电脑/Mac 上更强模型选项的 iPhone 用户',
            '设置难度': '设备端聊天几乎无需设置；连接 LM Studio/Ollama/Arbiter for Mac 需要更多配置',
            '平台侧重': '仅 iOS/iPhone，配有用于连接更强模型的 Mac 配套应用',
            '主要局限': '没有 Android 或 Windows 应用；应用内购买档位未公开详细说明',
          },
          {
            '应用': '[Loci](/zh/power-local-llm/loci-ai-review-offline-local-ai)',
            '适合场景': '低门槛、跨平台的私密聊天',
            '设置难度': '极简（下载即可聊天）',
            '平台侧重': 'iPhone/iPad/Android/Mac/Windows（5 个平台）',
            '主要局限': '精选约 10 个模型的模型库；无法导入 GGUF 文件',
          },
          {
            '应用': 'Private LLM',
            '适合场景': '希望获得高级模型选择的苹果生态用户',
            '设置难度': '中等偏低（一次性购买，需下载模型）',
            '平台侧重': 'iPhone/iPad/Mac（仅限苹果设备）',
            '主要局限': '仅限苹果设备；需要了解量化格式',
          },
          {
            '应用': 'PocketPal AI',
            '适合场景': '希望完全掌控 GGUF 导入和模型选择的用户',
            '设置难度': '中等（免费，但需要自行获取模型文件）',
            '平台侧重': 'iPhone/iPad，部分支持 Android',
            '主要局限': '需要熟悉 GGUF 文件并手动选择模型',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用 Arbiter',
        items: [
          '**希望无需账号进行私密聊天的 iPhone 用户。** 无需注册步骤——打开应用即可与设备端模型开始对话。',
          '**偶尔需要更强模型的用户。** 连接 LM Studio、Ollama 或 Arbiter for Mac，可以在设备端模型能力不够时，调用自己电脑上更强大的模型，而无需把提示词发送给第三方云端 API。',
          '**希望在不上传云端的情况下获取文档摘要的用户。** 在设备上上传文件，即可获得摘要和关键信息。',
          '**注重预算的用户。** 免费，附带可选的应用内购买——无需强制订阅即可试用。',
          '**拥有 iPhone 13 Pro 或更新机型（或 6GB 以上内存设备）的用户。** 这是开发者推荐的、能获得流畅设备端表现的硬件范围。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合谁使用 Arbiter',
        items: [
          '**Android 或 Windows 用户。** Arbiter 仅支持 iOS/iPhone；本评测的资料来源中没有原生 Android 或 Windows 应用。',
          '**期望纯设备端就能获得云端级前沿推理能力的用户。** 在 iPhone 上运行的 Gemma、Llama、DeepSeek、Qwen 和 Mistral 系列设备端模型，与其他任何手机端本地 AI 应用一样，都受到参数量的上限限制；要使用最大的模型，仍需连接电脑或使用云服务。',
          '**使用低于推荐硬件档位的旧款 iPhone 用户。** 早于 iPhone 13 Pro，或内存低于 6GB 的设备，在设备端可能表现较慢。',
          '**希望今天就获得成熟、完整记录的独立 Mac 聊天应用的用户。** "Arbiter for Mac"被描述为一种从手机连接更强模型的方式；本评测的资料来源中并未确认它本身是一款完整的独立 Mac 聊天应用。',
          '**处理高度敏感信息、需要经过独立审计的隐私承诺的用户。** Arbiter 的无账号、无服务器、不收集数据定位，是开发者自述的设计——在用于机密工作之前，请查看 App Store 页面上当前的隐私政策。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Arbiter - Local AI Chat 是什么？',
            a: 'Arbiter 是一款由 Jordan Stone 开发、专注隐私的 iPhone 离线 AI 助手。你可以在 iPhone 上下载并本地运行轻量级开源模型（Gemma、Llama、DeepSeek、Qwen、Mistral），也可以通过 LM Studio、Ollama 或"Arbiter for Mac"配套应用，连接运行在自己电脑或 Mac 上的更强大模型。',
          },
          {
            q: 'Arbiter 真的私密吗？',
            a: '据开发者说明，其设计是无账号、无服务器、不收集数据——对话内容按照设计不会离开你正在使用的设备，无论是你的 iPhone 还是你连接的电脑。与任何隐私承诺一样，由于本评测依据的是开发者的公开说明而非独立审计，使用前请务必查看 App Store 页面上当前的隐私政策，再决定是否用于敏感信息。',
          },
          {
            q: 'Arbiter 在没有网络连接的情况下能用吗？',
            a: '设备端聊天可以：模型（Gemma、Llama、DeepSeek、Qwen 或 Mistral）下载到 iPhone 后，聊天无需联网即可使用。下载应用和首次下载模型需要联网，连接 LM Studio、Ollama 或 Arbiter for Mac 则需要手机与电脑之间的网络连接。',
          },
          {
            q: '要流畅运行 Arbiter，需要什么样的 iPhone？',
            a: '开发者推荐 iPhone 13 Pro 或更新机型，或任何配备至少 6GB 内存的设备，以获得流畅表现。更旧或内存较小的 iPhone 仍可运行该应用，但设备端响应可能较慢，尤其是使用较大模型时。',
          },
          {
            q: 'Arbiter 支持哪些 AI 模型？',
            a: 'Arbiter 支持轻量级开源模型：Gemma、Llama、DeepSeek、Qwen 和 Mistral，这些模型在设备端本地运行。要使用更强大的模型，Arbiter 可以连接运行在自己电脑或 Mac 上的 LM Studio 或 Ollama，或连接 Arbiter for Mac 配套应用。',
          },
          {
            q: '连接 LM Studio 或 Ollama 是如何工作的？',
            a: 'Arbiter 不是在 iPhone 上直接运行模型，而是可以连接已经运行在自己电脑或 Mac 上的模型，方式包括 LM Studio、Ollama 或 Arbiter for Mac 配套应用。推理过程发生在你自己控制的电脑上，Arbiter 的手机界面负责与其收发消息——这样你就能使用比 iPhone 单机更强大的模型，且中间没有第三方云端 API。',
          },
          {
            q: 'Arbiter 收费吗？',
            a: 'Arbiter 可免费下载，附带可选的应用内购买，在 App Store 上分类为效率工具。本评测的资料来源未详细说明具体的应用内购买档位和价格——请查看当前 App Store 页面以获取最新定价。',
          },
          {
            q: 'Arbiter 能总结文档吗？',
            a: '可以。你可以在设备上上传文档，Arbiter 会生成摘要并提取关键信息，处理过程在设备端完成，而非通过云端上传。',
          },
          {
            q: 'Arbiter 有 Android 或 Windows 版本吗？',
            a: '没有。Arbiter 目前仅支持 iOS/iPhone。另有一个独立的"Arbiter for Mac"配套应用，用于连接更强大的模型，但本评测的资料来源中没有 Android 或 Windows 客户端。',
          },
          {
            q: 'Arbiter 与 Loci 或 Private LLM 相比如何？',
            a: 'Loci 支持五个平台（iPhone、iPad、Android、Mac、Windows），拥有精选的模型库，设置门槛低。Private LLM 仅限苹果设备，模型库更大（140+ 个模型），量化控制更精细，采用一次性购买方式销售。Arbiter 则专注于 iPhone，模型列表更简单（Gemma、Llama、DeepSeek、Qwen、Mistral），但增加了直接连接 LM Studio、Ollama 或自己 Mac 以获取更强模型的选项——这是并非所有竞品都以同样方式提供的组合。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '如果你想要一款免费、无需账号的 iPhone 应用来进行私密 AI 聊天和文档摘要，同时希望在设备端模型能力不够时有一条真正的退路——连接 LM Studio、Ollama，或通过 Arbiter for Mac 配套应用连接自己的 Mac，那么 Arbiter 值得安装。开发者的隐私定位——无账号、无服务器、不收集数据——正是许多注重隐私的移动 AI 用户所寻找的设计，不过与任何单一开发者的应用一样，在信任其处理敏感材料之前，值得自行查看当前 App Store 上的隐私政策。推荐的硬件档位（iPhone 13 Pro 或更新机型，或 6GB 以上内存）对大多数近期 iPhone 来说是现实可行的。Arbiter 相对薄弱的地方在于覆盖广度：它仅限 iPhone，Arbiter for Mac 配套应用尚未被确认为完整的独立 Mac 聊天应用，应用内购买定价和具体模型变体也没有详细公开。如果你想要一款成熟、跨平台、拥有更大精选模型库的应用，也应该看看 Loci；如果你想要在苹果设备上获得最大的模型和量化控制权，应该看看 Private LLM。对于一个希望简单进行设备端聊天，同时保留在自己硬件上调用更强模型选项的 iPhone 用户来说，Arbiter 填补了一个真实的空白。',
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[Arbiter - Local AI Chat（App Store 官方页面）](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) —— 官方页面，分类、价格、开发者信息。',
          '[Arbiter 官方网站（askarbiter.ai）](https://www.askarbiter.ai/) —— 产品概述与功能介绍。',
          '[Loci（App Store 页面）](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) —— 作为对比，一款跨平台设备端 AI 应用。',
          '[Private LLM 官方网站](https://privatellm.app/en) —— 作为对比，一款仅限苹果设备、模型库更大的本地大模型应用。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Loci AI 评测：iPhone、Android、iPad 和 Mac 上的私密离线 AI](/zh/power-local-llm/loci-ai-review-offline-local-ai) —— 一款可与 Arbiter 对比的跨平台设备端 AI 应用。',
          '[2026 年 iPhone 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) —— iPhone 应用综合盘点，包括 PocketPal AI、Private LLM 和 Apple Intelligence。',
          '[2026 年最佳移动端 LLM 模型：Phi-4 Mini 对比 Gemma 4 对比 SmolLM](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) —— 模型层面的配套文章，涵盖 Arbiter 支持的相同模型系列。',
          '[在平板上运行本地大模型：iPad 与 Android（2026）](/zh/power-local-llm/run-ai-on-tablet-ipad-android) —— 聚焦设备端与远程推理的平板指南。',
          '[2026 年本地大模型软件目录](/zh/power-local-llm/local-llm-software-directory-2026) —— 覆盖所有平台的综合应用与工具目录。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Arbiter Local AI Chat 评测（2026）：iPhone 隐私离线 AI 应用',
      'description': 'Arbiter 评测：这款注重隐私的离线 AI 聊天应用在 iPhone 上是否值得使用？涵盖设备端模型、文档摘要、连接 LM Studio/Ollama、硬件要求与价格。',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'zh',
      'url': 'https://www.promptquorum.com/zh/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'Arbiter 是一款免费的 iPhone 设备端私密 AI 聊天应用，由 Jordan Stone 开发。它可以本地运行开源模型（Gemma、Llama、DeepSeek、Qwen、Mistral），也可以通过 LM Studio、Ollama 或 Arbiter for Mac 连接自己电脑或 Mac 上的更强模型。',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': '正在考虑是否使用 Arbiter 进行私密离线 AI 聊天和文档摘要的 iPhone 用户' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': '设备端 AI' },
        { '@type': 'Thing', 'name': '本地大模型应用' },
        { '@type': 'Thing', 'name': '移动端隐私' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/zh/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-ar.webp',
    title: 'مراجعة Arbiter Local AI Chat (2026): ذكاء اصطناعي خاص وغير متصل بالإنترنت لآيفون',
    seoTitle: 'مراجعة Arbiter 2026: دردشة AI خاصة وغير متصلة لآيفون',
    intro:
      'تطبيق Arbiter، الذي طوّره Jordan Stone، هو مساعد ذكاء اصطناعي يضع الخصوصية أولاً لآيفون، ويقوم على فكرة واحدة بحسب المطوّر: محادثاتك لا تغادر جهازك أبداً. يمكنك تنزيل وتشغيل نماذج مفتوحة المصدر خفيفة الوزن (Gemma وLlama وDeepSeek وQwen وMistral) مباشرة على آيفون، أو الاتصال بنماذج أقوى تعمل على جهاز الكمبيوتر أو Mac الخاص بك عبر أدوات مثل LM Studio أو Ollama أو تطبيق "Arbiter for Mac" المرافق المنفصل. لا توجد حسابات، ولا خوادم، ولا جمع بيانات — التطبيق مصمم بحيث تبقى المحادثات، وأي مستندات ترفعها للتلخيص، على الجهاز الذي تستخدمه. السؤال العملي لأي شخص يقارن تطبيقات الدردشة على الجهاز هو ما إذا كان Arbiter يقدّم قدرات كافية على أجهزة بمستوى آيفون ليكون خياراً يومياً حقيقياً، أم أن أفضل استخدام له هو كواجهة خاصة لنماذج أكبر تعمل في مكان آخر.',
    metaDescription:
      'مراجعة Arbiter: هل يستحق تطبيق الدردشة بالذكاء الاصطناعي غير المتصل هذا الذي يضع الخصوصية أولاً استخدامه على آيفون؟ نماذج على الجهاز، تلخيص المستندات، الاتصال بـLM Studio/Ollama، متطلبات الجهاز، والتسعير.',
    twitterDescription:
      'مراجعة Arbiter Local AI Chat 2026: شغّل نماذج مفتوحة المصدر على الجهاز في آيفون، أو اتصل بـLM Studio/Ollama/Arbiter for Mac لنماذج أكبر. لا حسابات، لا خوادم، لا جمع بيانات.',
    audience:
      'مستخدمو آيفون الذين يقررون ما إذا كانوا سيستخدمون Arbiter لدردشة ذكاء اصطناعي خاصة وغير متصلة وتلخيص المستندات — يغطي دعم النماذج على الجهاز، متطلبات الجهاز، الاتصال بأدوات الاستدلال على سطح المكتب، ومقارنته بتطبيقات الذكاء الاصطناعي المحلي الأخرى للجوال.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'احصل على Arbiter من App Store ←', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'arbiter ai review',
      'arbiter local ai chat',
      'arbiter ios app',
      'arbiter offline ai iphone',
      'arbiter vs private llm',
      'arbiter local llm iphone',
      'arbiter privacy ai app',
      'run local ai on iphone arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**يُعد Arbiter الأكثر جاذبية إذا كنت تريد تطبيق دردشة لآيفون بلا حساب وبلا خادم، يحافظ على المحادثات والمستندات المرفوعة بالكامل على الجهاز، مع خيار الوصول إلى نماذج أقوى عند الحاجة.** على آيفون 13 Pro أو أحدث (أو أي جهاز بذاكرة وصول عشوائي RAM لا تقل عن 6 جيجابايت)، يشغّل نماذج مفتوحة المصدر خفيفة الوزن — Gemma وLlama وDeepSeek وQwen وMistral — محلياً للدردشة وتلخيص المستندات. عندما لا تكون جودة النموذج على الجهاز كافية، يمكن لـArbiter الاتصال بنماذج أقوى تعمل على جهاز الكمبيوتر أو Mac الخاص بك عبر LM Studio أو Ollama أو تطبيق "Arbiter for Mac" المرافق المنفصل، فتحصل على إجابة من نموذج أكبر دون إرسال أي شيء إلى خادم طرف ثالث. التطبيق مجاني مع مشتريات اختيارية داخل التطبيق. المستخدمون الذين يريدون أكبر مكتبة نماذج ممكنة، أو تحكماً عميقاً في التكميم (quantization)، أو انتشاراً ناضجاً عبر منصات متعددة (Android وWindows) يجب أن يقارنوه بتطبيقات LLM محلية أكثر رسوخاً.',
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أستخدم Arbiter للذكاء الاصطناعي الخاص وغير المتصل على آيفون؟',
        answer:
          'استخدم Arbiter إذا كنت تريد تطبيقاً مجانياً بلا حساب على آيفون لدردشة الذكاء الاصطناعي على الجهاز وتلخيص المستندات، مع خيار الاتصال بنماذج أكبر على جهاز الكمبيوتر أو Mac الخاص بك. تجاوزه إذا كنت بحاجة إلى دعم Android أو Windows، أو مكتبة نماذج منسّقة كبيرة جداً، أو جودة استدلال متقدمة (frontier) لا يوفرها حالياً سوى الذكاء الاصطناعي السحابي.',
        bullets: [
          'مجاني مع مشتريات اختيارية داخل التطبيق؛ لا اشتراك مطلوب لاستخدام الميزات الأساسية.',
          'لا حسابات، لا خوادم — المحادثات والمستندات المرفوعة تبقى على الجهاز بحسب تصريحات المطوّر.',
          'يشغّل Gemma وLlama وDeepSeek وQwen وMistral محلياً على آيفون؛ يمكنه الاتصال بـLM Studio أو Ollama أو Arbiter for Mac لنماذج أكبر.',
          'الجهاز الموصى به: آيفون 13 Pro أو أحدث، أو أي جهاز بذاكرة وصول عشوائي لا تقل عن 6 جيجابايت، لأداء سلس.',
          'حصري لـiOS/آيفون؛ تطبيق "Arbiter for Mac" المرافق مخصص للاتصال بنماذج أكبر، وليس تطبيق دردشة مستقلاً كاملاً مؤكداً لنظام Mac.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Arbiter', anchor: 'what-is-arbiter' },
      { label: 'كيف يعمل الذكاء الاصطناعي المحلي في Arbiter', anchor: 'how-local-ai-works' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'متطلبات الجهاز والتسعير', anchor: 'hardware-and-pricing' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Arbiter مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Arbiter', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Arbiter', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الملخص السريع',
        isTldr: true,
        items: [
          'Arbiter تطبيق مجاني لآيفون للدردشة بالذكاء الاصطناعي على الجهاز، طوّره Jordan Stone، ويُوضع في إطار الخصوصية أولاً: لا حسابات، لا خوادم، لا جمع بيانات.',
          'يدعم نماذج مفتوحة المصدر خفيفة الوزن محلياً — Gemma وLlama وDeepSeek وQwen وMistral.',
          'يمكنك أيضاً الاتصال بنماذج أقوى تعمل على جهاز الكمبيوتر أو Mac الخاص بك عبر LM Studio أو Ollama أو تطبيق "Arbiter for Mac" المرافق المنفصل، بدلاً من واجهة برمجة تطبيقات سحابية من طرف ثالث.',
          'يمكنك رفع مستندات للحصول على ملخصات ورؤى رئيسية، تتم معالجتها على الجهاز.',
          'الجهاز الموصى به: آيفون 13 Pro أو أحدث، أو أي جهاز بذاكرة وصول عشوائي لا تقل عن 6 جيجابايت، لأداء سلس.',
          'التسعير: مجاني مع مشتريات اختيارية داخل التطبيق. الفئة: الإنتاجية (Productivity).',
          'حصري لـiOS/آيفون بالنسبة للتطبيق الأساسي؛ يوصف Arbiter for Mac كوسيلة للاتصال بنماذج أكبر، وليس مؤكداً كعميل دردشة مستقل كامل لنظام Mac.',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'ما هو Arbiter',
        content: [
          'Arbiter مساعد ذكاء اصطناعي غير متصل بالإنترنت يضع الخصوصية أولاً لآيفون، طوّره Jordan Stone، ومُدرج في App Store باسم "Arbiter - Local AI Chat" (id6747954532)، مع موقع رسمي على askarbiter.ai. التطبيق مجاني للتنزيل، مع مشتريات اختيارية داخل التطبيق، ومُدرج في فئة الإنتاجية (Productivity).',
          'الخيار التصميمي الأساسي هو أن Arbiter لا يتطلب حساباً ولا يعتمد على خوادم Arbiter الخاصة لمعالجة محادثاتك: فهو إما يشغّل نموذجاً مباشرة على آيفون، أو يتصل بنموذج يعمل على جهاز تتحكم فيه أنت (جهاز الكمبيوتر أو Mac الخاص بك). موقف المطوّر المعلن هو أن المحادثات لا تغادر الجهاز أبداً — سواء كان هاتفك أو جهاز سطح المكتب الذي تتصل به.',
          'يتمحور دعم النماذج حول عائلات مفتوحة المصدر خفيفة الوزن: Gemma وLlama وDeepSeek وQwen وMistral. وهذه هي نفس عائلات النماذج المستخدمة في معظم تطبيقات وأدوات LLM المحلية، ما يعني أن السقف العملي للجودة تحدده قدرة آيفون (أو جهاز سطح المكتب المتصل) على تشغيل نموذج كبير، وليس نموذجاً حصرياً خاصاً بـArbiter.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Arbiter تطبيق مجاني لآيفون يشغّل نماذج لغوية مفتوحة المصدر على الجهاز أو يتصل بنماذج أقوى على جهاز الكمبيوتر أو Mac الخاص بك، دون حسابات أو خوادم.',
          },
          {
            type: 'plain-terms',
            text:
              'يتيح لك Arbiter الدردشة مع الذكاء الاصطناعي على آيفون بنفس طريقة روبوت الدردشة السحابي، إلا أن المحادثة تبقى على هاتفك (أو على جهاز كمبيوتر تملكه) بدلاً من إرسالها إلى خوادم شركة ما.',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'كيف يعمل الذكاء الاصطناعي المحلي في Arbiter',
        content: [
          'يقدّم Arbiter مسارين للدردشة بالذكاء الاصطناعي، صُمم كلاهما لإبقاء البيانات بعيداً عن خوادم أطراف ثالثة:',
        ],
        items: [
          '**النماذج على الجهاز** — نزّل نموذجاً مفتوح المصدر خفيف الوزن (Gemma أو Llama أو DeepSeek أو Qwen أو Mistral) مباشرة داخل التطبيق وشغّل الاستدلال على آيفون. لا حاجة لاتصال بالإنترنت بعد تنزيل النموذج، ولا يرى أي خادم طرف ثالث محادثتك.',
          '**الاتصال بنموذج أقوى على سطح المكتب** — إذا لم تكن جودة النموذج على الجهاز كافية لمهمة ما، يمكن لـArbiter الاتصال بنماذج تعمل على جهاز الكمبيوتر أو Mac الخاص بك عبر أدوات مثل LM Studio أو Ollama، أو عبر تطبيق "Arbiter for Mac" المرافق المنفصل. يحدث الاستدلال على جهاز سطح المكتب الذي تتحكم فيه؛ ويعمل الهاتف كواجهة. وهذا يتجنب المفاضلة بين الاقتصار على ما يمكن للهاتف تشغيله أو إرسال طلباتك إلى واجهة برمجة تطبيقات سحابية.',
          '**تلخيص المستندات** — يمكنك رفع مستندات على جهازك وجعل Arbiter يولّد ملخصات ويستخرج رؤى رئيسية، دون رفع الملف إلى خدمة سحابية أولاً.',
        ],
        note: 'لا ينشر المطوّر بالتفصيل الحد الأدنى الدقيق لإصدار iOS، أو أحجام تنزيل كل نموذج، أو القائمة الكاملة لمتغيرات النماذج مفتوحة المصدر المدعومة. تحقق من التفاصيل الحالية عبر صفحة App Store أو askarbiter.ai قبل الاعتماد على نموذج محدد لجهاز محدد. آخر تحقق من قائمة App Store كان بتاريخ 2026-09-04.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        items: [
          '**دردشة بنموذج محلي.** نزّل وشغّل Gemma أو Llama أو DeepSeek أو Qwen أو Mistral مباشرة على آيفون لدردشة غير متصلة بالكامل بعد تنزيل النموذج.',
          '**الاتصال بسطح المكتب لنماذج أكبر.** اتصل بـLM Studio أو Ollama يعملان على جهاز الكمبيوتر أو Mac الخاص بك، أو بتطبيق "Arbiter for Mac" المرافق، للوصول إلى نماذج أقدر مما يستطيع آيفون وحده تشغيله — مع إبقاء الاستدلال على جهاز تتحكم فيه.',
          '**تلخيص المستندات.** ارفع مستنداً على جهازك واحصل على ملخص ورؤى رئيسية، تتم معالجتها على الجهاز بدلاً من رفع سحابي.',
          '**بلا حسابات.** لا يوجد تسجيل، أو تسجيل دخول، أو نظام حسابات — تفتح التطبيق وتبدأ استخدامه.',
          '**لا جمع بيانات، بحسب تصريحات المطوّر.** يصرّح المطوّر بأن المحادثات لا تغادر الجهاز أبداً، وأن Arbiter لا يشغّل خوادمه الخاصة لمعالجة أو تخزين محادثاتك.',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: 'متطلبات الجهاز والتسعير',
        columns: ['العنصر', 'ما يذكره Arbiter', 'ما يعنيه ذلك عملياً'],
        rows: [
          {
            'العنصر': 'الحد الأدنى الموصى به للجهاز',
            'ما يذكره Arbiter': 'آيفون 13 Pro أو أحدث، أو أي جهاز بذاكرة وصول عشوائي لا تقل عن 6 جيجابايت، لأداء سلس.',
            'ما يعنيه ذلك عملياً': 'قد تعمل أجهزة آيفون الأقدم أو الأقل ذاكرةً مع التطبيق، لكن استجابات النموذج على الجهاز قد تكون أبطأ، أو قد تقتصر على نماذج أصغر. إذا كان آيفونك أقدم من 13 Pro وذاكرته أقل من 6 جيجابايت، اعتمد على مسار الاتصال بسطح المكتب بدلاً من الاستدلال على الجهاز.',
          },
          {
            'العنصر': 'المنصة',
            'ما يذكره Arbiter': 'iOS / آيفون. يتوفر تطبيق مرافق باسم "Arbiter for Mac" للاتصال بنماذج أكبر.',
            'ما يعنيه ذلك عملياً': 'لا يوجد إصدار لنظام Android أو Windows. يُوصف Arbiter for Mac تحديداً كوسيلة للوصول إلى نماذج أقوى من هاتفك — تعامل معه كنقطة اتصال وليس كعميل دردشة مستقل كامل مؤكد لنظام Mac إلى أن يوثّقه المطوّر كذلك.',
          },
          {
            'العنصر': 'التسعير',
            'ما يذكره Arbiter': 'مجاني، مع مشتريات اختيارية داخل التطبيق. الفئة: الإنتاجية (Productivity).',
            'ما يعنيه ذلك عملياً': 'يمكنك تثبيت التطبيق واستخدامه دون دفع. لا تُنشر في المصدر المستخدم لهذه المراجعة فئات محددة للمشتريات داخل التطبيق أو أسعارها أو ما تفتحه — راجع قائمة App Store الحالية للحصول على تسعير محدث قبل افتراض أن أي ميزة معينة مجانية أو مدفوعة.',
          },
          {
            'العنصر': 'مساحة التخزين للنماذج على الجهاز',
            'ما يذكره Arbiter': 'لا يحددها المطوّر بالتفصيل.',
            'ما يعنيه ذلك عملياً': 'تتراوح النماذج مفتوحة المصدر في عائلات Gemma وLlama وDeepSeek وQwen وMistral عادةً بين نحو 1 و5 جيجابايت لكل نموذج حسب عدد المعاملات ومستوى التكميم. خصص مساحة تخزين آيفون وفقاً لذلك إذا كنت تخطط للاحتفاظ بأكثر من نموذج واحد منزّل في الوقت نفسه.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'الخصوصية بالتصميم',
            'ما تعنيه في الاستخدام الفعلي': 'لا حسابات، ولا خوادم يشغّلها Arbiter لمعالجة محادثاتك، بحسب التصميم المعلن للمطوّر — تبقى المحادثات على جهازك أو على جهاز سطح المكتب الذي تتصل به.',
            'القيد / التحفظ': 'تعتمد هذه المراجعة على تصريحات المطوّر المعلنة وليس على تدقيق مستقل من طرف ثالث؛ راجع سياسة الخصوصية الحالية على App Store قبل التعامل مع معلومات حساسة.',
          },
          {
            'الميزة': 'يعمل بلا اتصال بالكامل بعد تنزيل نموذج',
            'ما تعنيه في الاستخدام الفعلي': 'الدردشة على الجهاز باستخدام Gemma أو Llama أو DeepSeek أو Qwen أو Mistral لا تتطلب اتصالاً بالإنترنت بعد الإعداد.',
            'القيد / التحفظ': 'يتطلب تثبيت التطبيق الأولي وتنزيل النموذج اتصالاً بالإنترنت. يتطلب الاتصال بـLM Studio أو Ollama أو Arbiter for Mac اتصال شبكة بين هاتفك وجهاز سطح المكتب.',
          },
          {
            'الميزة': 'لا تكلفة متكررة إلزامية',
            'ما تعنيه في الاستخدام الفعلي': 'تنزيل مجاني، مع مشتريات اختيارية داخل التطبيق — لست مُجبراً على اشتراك لاستخدام التطبيق الأساسي.',
            'القيد / التحفظ': 'يستهلك الاستدلال على الجهاز بطارية آيفون وقدرته المعالجة؛ قد تعمل النماذج الكبيرة ببطء على الأجهزة الأقدم أو الأقل ذاكرة.',
          },
          {
            'الميزة': 'الوصول إلى نماذج أكبر دون واجهة برمجة تطبيقات سحابية',
            'ما تعنيه في الاستخدام الفعلي': 'الاتصال بـLM Studio أو Ollama أو Arbiter for Mac يتيح لك استخدام نماذج أكبر وأقدر مما يستطيع آيفون وحده تشغيله، مع إبقاء الاستدلال على جهاز تملكه.',
            'القيد / التحفظ': 'يتطلب جهاز كمبيوتر أو Mac بذاكرة وصول عشوائي/معالج رسوميات كافيين، وأن يكون LM Studio أو Ollama أو Arbiter for Mac مُعدّاً مسبقاً — هذا ليس مساراً بلا إعداد للمستخدمين بلا جهاز سطح مكتب متوافق.',
          },
          {
            'الميزة': 'تلخيص المستندات على الجهاز',
            'ما تعنيه في الاستخدام الفعلي': 'احصل على ملخصات ورؤى رئيسية من الملفات دون رفعها إلى خدمة سحابية.',
            'القيد / التحفظ': 'تعتمد جودة الملخص على حجم النموذج على الجهاز الذي تختاره؛ لا يوضّح المطوّر في المواد العامة صيغ الملفات المدعومة أو الحد الأقصى لطول المستند.',
          },
          {
            'الميزة': 'قائمة نماذج بسيطة ومنسّقة',
            'ما تعنيه في الاستخدام الفعلي': 'تغطي Gemma وLlama وDeepSeek وQwen وMistral مجموعة من عائلات النماذج مفتوحة المصدر دون أن تضطر للبحث بنفسك في Hugging Face.',
            'القيد / التحفظ': 'لا يُحدَّد في مصدر هذه المراجعة القائمة الدقيقة لأحجام/متغيرات النماذج ولا ما إذا كان استيراد ملفات GGUF المخصصة مدعوماً — راجع قائمة App Store الحالية للاطلاع على قائمة النماذج المحدثة.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter مقابل البدائل',
        columns: ['التطبيق', 'الأنسب لـ', 'مستوى الإعداد', 'تركيز المنصة', 'القيد الرئيسي'],
        rows: [
          {
            'التطبيق': 'Arbiter',
            'الأنسب لـ': 'مستخدمو آيفون الذين يريدون دردشة على الجهاز مع خيار الوصول إلى نماذج أكبر على جهاز الكمبيوتر أو Mac الخاص بهم',
            'مستوى الإعداد': 'بسيط للدردشة على الجهاز؛ إعداد أكبر للاتصال بـLM Studio/Ollama/Arbiter for Mac',
            'تركيز المنصة': 'حصري لـiOS/آيفون، مع تطبيق مرافق لنظام Mac للاتصال بنماذج أكبر',
            'القيد الرئيسي': 'لا يوجد تطبيق لنظام Android أو Windows؛ فئات المشتريات داخل التطبيق غير مفصّلة علناً',
          },
          {
            'التطبيق': '[Loci](/ar/power-local-llm/loci-ai-review-offline-local-ai)',
            'الأنسب لـ': 'دردشة خاصة منخفضة الاحتكاك عبر منصات متعددة',
            'مستوى الإعداد': 'بسيط جداً (تنزيل ثم دردشة)',
            'تركيز المنصة': 'آيفون/آيباد/أندرويد/Mac/Windows (5 منصات)',
            'القيد الرئيسي': 'مكتبة نماذج منسّقة من نحو 10 نماذج؛ لا يمكن استيراد ملفات GGUF',
          },
          {
            'التطبيق': 'Private LLM',
            'الأنسب لـ': 'مستخدمو Apple فقط الراغبين في اختيار نماذج متقدم',
            'مستوى الإعداد': 'منخفض إلى متوسط (شراء لمرة واحدة، تنزيل النماذج)',
            'تركيز المنصة': 'آيفون/آيباد/Mac (Apple فقط)',
            'القيد الرئيسي': 'حصري لـApple؛ يتطلب تعلّم صيغ التكميم',
          },
          {
            'التطبيق': 'PocketPal AI',
            'الأنسب لـ': 'المستخدمين الراغبين في استيراد GGUF الكامل والتحكم بالنموذج',
            'مستوى الإعداد': 'متوسط (مجاني، لكن يتطلب توفير ملفات النماذج بنفسك)',
            'تركيز المنصة': 'آيفون/آيباد، ودعم جزئي لأندرويد',
            'القيد الرئيسي': 'يتطلب إلماماً بملفات GGUF واختياراً يدوياً للنماذج',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Arbiter',
        items: [
          '**مستخدم آيفون يريد دردشة خاصة بلا حساب.** لا خطوة تسجيل — تفتح التطبيق وتبدأ الدردشة مع نموذج على الجهاز.',
          '**مستخدم يحتاج أحياناً إلى نموذج أكبر.** الاتصال بـLM Studio أو Ollama أو Arbiter for Mac يتيح لك الوصول إلى نموذج أقوى على جهاز سطح المكتب الخاص بك عندما لا يكون النموذج على الجهاز كافياً، دون إرسال الطلبات إلى واجهة برمجة تطبيقات سحابية من طرف ثالث.',
          '**من يريد تلخيص مستندات دون رفع سحابي.** ارفع ملفاً على جهازك واحصل على ملخص ورؤى رئيسية.',
          '**مستخدم مهتم بالميزانية.** مجاني مع مشتريات اختيارية داخل التطبيق — لا اشتراك إلزامي لتجربة التطبيق.',
          '**مستخدم بآيفون 13 Pro أو أحدث (أو جهاز بذاكرة 6 جيجابايت أو أكثر).** هذا هو نطاق الجهاز الذي يوصي به المطوّر للحصول على أداء سلس على الجهاز.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Arbiter',
        items: [
          '**مستخدمو Android أو Windows.** Arbiter حصري لـiOS/آيفون؛ لا يوجد تطبيق أصلي لأندرويد أو Windows في مصدر هذه المراجعة.',
          '**مستخدم يتوقع جودة استدلال سحابية متقدمة (frontier) بالكامل على الجهاز.** تواجه النماذج على الجهاز في عائلات Gemma وLlama وDeepSeek وQwen وMistral العاملة على آيفون نفس سقف عدد المعاملات الذي يواجهه أي تطبيق ذكاء اصطناعي محلي آخر على الهاتف؛ فبالنسبة لأكبر النماذج ما زلت بحاجة للاتصال بجهاز سطح مكتب أو استخدام خدمة سحابية.',
          '**مستخدم بآيفون أقدم من الفئة الموصى بها.** قد تشهد الأجهزة الأقدم من آيفون 13 Pro، أو بذاكرة أقل من 6 جيجابايت، أداءً أبطأ على الجهاز.',
          '**مستخدم يريد تطبيق دردشة مستقلاً ناضجاً وموثّقاً بالكامل لنظام Mac اليوم.** يُوصف "Arbiter for Mac" كوسيلة للاتصال بنماذج أكبر من هاتفك؛ ولم يُؤكَّد في مصدر هذه المراجعة أنه تطبيق دردشة مستقل كامل بحد ذاته لنظام Mac.',
          '**مستخدم يتعامل مع معلومات شديدة الحساسية ويحتاج إلى ادعاء خصوصية مدقَّق بشكل مستقل.** موقف Arbiter المتعلق بعدم وجود حسابات أو خوادم أو جمع بيانات هو التصميم المعلن من المطوّر؛ راجع سياسة الخصوصية الحالية على قائمة App Store قبل الاعتماد عليها في عمل سري.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو Arbiter - Local AI Chat؟',
            a: 'Arbiter مساعد ذكاء اصطناعي غير متصل بالإنترنت يضع الخصوصية أولاً لآيفون، طوّره Jordan Stone. يمكنك تنزيل وتشغيل نماذج مفتوحة المصدر خفيفة الوزن (Gemma وLlama وDeepSeek وQwen وMistral) محلياً على آيفون، أو الاتصال بنماذج أقوى تعمل على جهاز الكمبيوتر أو Mac الخاص بك عبر LM Studio أو Ollama أو تطبيق "Arbiter for Mac" المرافق.',
          },
          {
            q: 'هل Arbiter خاص فعلاً؟',
            a: 'التصميم المعلن من المطوّر هو بلا حسابات وبلا خوادم وبلا جمع بيانات — المحادثات مصممة بحيث لا تغادر الجهاز الذي تستخدمه أبداً، سواء كان آيفونك أو جهاز سطح مكتب تتصل به. وكما هو الحال مع أي ادعاء خصوصية، راجع سياسة الخصوصية الحالية على قائمة App Store قبل استخدامه لمعلومات حساسة، إذ تعتمد هذه المراجعة على تصريحات المطوّر العلنية وليس على تدقيق مستقل.',
          },
          {
            q: 'هل يعمل Arbiter دون اتصال بالإنترنت؟',
            a: 'نعم، بالنسبة للدردشة على الجهاز: بمجرد تنزيل نموذج (Gemma أو Llama أو DeepSeek أو Qwen أو Mistral) على آيفون، تعمل الدردشة دون اتصال بالإنترنت. يتطلب تنزيل التطبيق والنموذج الأولي اتصالاً بالإنترنت، ويتطلب الاتصال بـLM Studio أو Ollama أو Arbiter for Mac اتصال شبكة بين هاتفك وجهاز سطح المكتب.',
          },
          {
            q: 'ما هو آيفون الذي أحتاجه لتشغيل Arbiter بسلاسة؟',
            a: 'يوصي المطوّر بآيفون 13 Pro أو أحدث، أو أي جهاز بذاكرة وصول عشوائي لا تقل عن 6 جيجابايت، لأداء سلس. قد تعمل أجهزة آيفون الأقدم أو الأقل ذاكرة مع التطبيق لكنها قد تشهد استجابات أبطأ على الجهاز، خصوصاً مع النماذج الأكبر.',
          },
          {
            q: 'ما هي نماذج الذكاء الاصطناعي التي يدعمها Arbiter؟',
            a: 'يدعم Arbiter نماذج مفتوحة المصدر خفيفة الوزن: Gemma وLlama وDeepSeek وQwen وMistral. تعمل هذه محلياً على الجهاز. للحصول على نماذج أقوى، يمكن لـArbiter الاتصال بـLM Studio أو Ollama يعملان على جهاز الكمبيوتر أو Mac الخاص بك، أو بتطبيق Arbiter for Mac المرافق.',
          },
          {
            q: 'كيف يعمل الاتصال بـLM Studio أو Ollama؟',
            a: 'بدلاً من تشغيل نموذج مباشرة على آيفون، يمكن لـArbiter الاتصال بنموذج يعمل بالفعل على جهاز الكمبيوتر أو Mac الخاص بك عبر LM Studio أو Ollama أو تطبيق Arbiter for Mac المرافق. يحدث الاستدلال على جهاز سطح المكتب الذي تتحكم فيه، وترسل واجهة Arbiter على هاتفك الرسائل وتستقبلها معه — فتحصل على وصول إلى نماذج أكبر وأقدر مما يستطيع آيفونك وحده تشغيله، دون واجهة برمجة تطبيقات سحابية من طرف ثالث بينهما.',
          },
          {
            q: 'هل يكلّف Arbiter مالاً؟',
            a: 'Arbiter مجاني للتنزيل، مع مشتريات اختيارية داخل التطبيق. وهو مُدرج في فئة الإنتاجية (Productivity) على App Store. لا تُفصَّل فئات المشتريات داخل التطبيق وأسعارها المحددة في مصدر هذه المراجعة — راجع قائمة App Store الحالية للاطلاع على التسعير المحدث.',
          },
          {
            q: 'هل يمكن لـArbiter تلخيص المستندات؟',
            a: 'نعم. يمكنك رفع مستندات على جهازك وسيولّد Arbiter ملخصات ويستخرج رؤى رئيسية، تتم معالجتها على الجهاز بدلاً من رفع سحابي.',
          },
          {
            q: 'هل يوجد إصدار من Arbiter لنظام Android أو Windows؟',
            a: 'لا. يتوفر Arbiter لنظام iOS/آيفون. يوجد تطبيق مرافق منفصل باسم "Arbiter for Mac" للاتصال بنماذج أقوى، لكن لا يوجد عميل لنظام Android أو Windows في مصدر هذه المراجعة.',
          },
          {
            q: 'كيف يقارَن Arbiter بـLoci أو Private LLM؟',
            a: 'يعمل Loci عبر خمس منصات (آيفون وآيباد وأندرويد وMac وWindows) مع مكتبة نماذج منسّقة وإعداد بسيط. أما Private LLM فهو حصري لـApple مع مكتبة نماذج أكبر (أكثر من 140 نموذجاً) وتحكم أكبر في التكميم، ويُباع كشراء لمرة واحدة. أما Arbiter فيركز على آيفون مع قائمة نماذج أصغر وأبسط (Gemma وLlama وDeepSeek وQwen وMistral) لكنه يضيف خيار الاتصال مباشرة بـLM Studio أو Ollama أو جهاز Mac الخاص بك للحصول على نماذج أكبر — وهو مزيج لا يقدمه كل المنافسين بنفس الشكل.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يستحق Arbiter التثبيت إذا كنت تريد تطبيقاً مجانياً بلا حساب لآيفون للدردشة الخاصة بالذكاء الاصطناعي وتلخيص المستندات، مع مخرج حقيقي عندما لا تكون جودة النموذج على الجهاز كافية: الاتصال بـLM Studio أو Ollama أو جهاز Mac الخاص بك عبر تطبيق Arbiter for Mac المرافق. موقف الخصوصية المعلن من المطوّر — بلا حسابات، بلا خوادم، بلا جمع بيانات — هو بالضبط التصميم الذي يبحث عنه معظم مستخدمي الذكاء الاصطناعي للجوال المهتمين بالخصوصية، رغم أنه، كما هو الحال مع أي تطبيق من مطوّر واحد، يستحق مراجعة سياسة خصوصية App Store الحالية بنفسك قبل الوثوق به مع مواد حساسة. فئة الجهاز الموصى بها (آيفون 13 Pro أو أحدث، أو 6 جيجابايت من الذاكرة فأكثر) واقعية بالنسبة لمعظم أجهزة آيفون الحديثة. حيث يبدو Arbiter أضعف هو الاتساع: فهو حصري لآيفون، ولم يُؤكَّد أن تطبيق Arbiter for Mac المرافق تطبيق دردشة مستقل كامل لنظام Mac، ولا تُنشر التفاصيل المتعلقة بتسعير المشتريات داخل التطبيق ومتغيرات النماذج الدقيقة. المستخدمون الذين يريدون تطبيقاً ناضجاً عبر منصات متعددة مع مكتبة نماذج منسّقة أكبر يجب أن ينظروا أيضاً في Loci؛ والمستخدمون الذين يريدون أقصى تحكم في النموذج والتكميم على أجهزة Apple يجب أن ينظروا في Private LLM. بالنسبة لمستخدم يركّز على آيفون ويريد دردشة بسيطة على الجهاز مع خيار الوصول إلى نماذج أكبر على جهازه الخاص، يسدّ Arbiter فجوة حقيقية.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Arbiter - Local AI Chat على App Store](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) — القائمة الرسمية، الفئة، التسعير، معلومات المطوّر.',
          '[موقع Arbiter الرسمي (askarbiter.ai)](https://www.askarbiter.ai/) — نظرة عامة على المنتج وميزاته.',
          '[Loci على App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — للمقارنة، تطبيق ذكاء اصطناعي على الجهاز عبر منصات متعددة.',
          '[موقع Private LLM الرسمي](https://privatellm.app/en) — للمقارنة، تطبيق LLM محلي حصري لـApple بمكتبة نماذج أكبر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Loci AI: ذكاء اصطناعي خاص وغير متصل على آيفون وأندرويد وآيباد وMac](/ar/power-local-llm/loci-ai-review-offline-local-ai) — تطبيق ذكاء اصطناعي على الجهاز عبر منصات متعددة للمقارنة مع Arbiter.',
          '[أفضل تطبيقات LLM المحلية لآيفون في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — دليل شامل لتطبيقات آيفون، يتضمن PocketPal AI وPrivate LLM وApple Intelligence.',
          '[أفضل نماذج LLM للجوال في 2026: Phi-4 Mini مقابل Gemma 4 مقابل SmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — دليل مكمّل على مستوى النماذج يغطي نفس عائلات النماذج التي يدعمها Arbiter.',
          '[تشغيل LLM محلي على جهازك اللوحي: iPad وأندرويد (2026)](/ar/power-local-llm/run-ai-on-tablet-ipad-android) — دليل مركّز على الأجهزة للاستدلال على الجهاز وعن بُعد على الأجهزة اللوحية.',
          '[دليل برمجيات LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — دليل شامل للتطبيقات والأدوات لجميع المنصات.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'مراجعة Arbiter Local AI Chat (2026): ذكاء اصطناعي خاص وغير متصل بالإنترنت لآيفون',
      'description': 'مراجعة Arbiter: هل يستحق تطبيق الدردشة بالذكاء الاصطناعي غير المتصل هذا الذي يضع الخصوصية أولاً استخدامه على آيفون؟ نماذج على الجهاز، تلخيص المستندات، الاتصال بـLM Studio/Ollama، متطلبات الجهاز، والتسعير.',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'ar',
      'url': 'https://www.promptquorum.com/ar/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'Arbiter تطبيق مجاني لآيفون للدردشة الخاصة بالذكاء الاصطناعي على الجهاز، طوّره Jordan Stone. يشغّل نماذج مفتوحة المصدر (Gemma وLlama وDeepSeek وQwen وMistral) محلياً، أو يتصل بنماذج أكبر على جهاز الكمبيوتر أو Mac الخاص بك عبر LM Studio أو Ollama أو Arbiter for Mac.',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'مستخدمو آيفون الذين يقررون ما إذا كانوا سيستخدمون Arbiter لدردشة ذكاء اصطناعي خاصة وغير متصلة وتلخيص المستندات' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': 'الذكاء الاصطناعي على الجهاز' },
        { '@type': 'Thing', 'name': 'تطبيقات LLM المحلية' },
        { '@type': 'Thing', 'name': 'خصوصية الجوال' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ar/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/arbiter-local-ai-chat-review-2026-hero-ko.webp',
    title: 'Arbiter Local AI Chat 리뷰 (2026): 아이폰용 프라이빗 오프라인 AI',
    seoTitle: 'Arbiter AI 리뷰 2026: 프라이빗 오프라인 아이폰 채팅',
    intro:
      'Jordan Stone이 개발한 Arbiter는 하나의 원칙을 중심으로 만들어진 프라이버시 우선 아이폰 AI 어시스턴트입니다. 개발자에 따르면, 대화 내용이 기기 밖으로 나가지 않는다는 것입니다. 경량 오픈소스 모델(Gemma, Llama, DeepSeek, Qwen, Mistral)을 아이폰에 직접 다운로드하여 실행하거나, LM Studio, Ollama, 또는 별도의 "Arbiter for Mac" 컴패니언 앱을 통해 본인 소유의 PC나 Mac에서 실행되는 더 강력한 모델에 연결할 수 있습니다. 계정도, 서버도, 데이터 수집도 없습니다 — 이 앱은 대화 내용과 요약을 위해 업로드한 문서가 사용 중인 기기에만 남도록 설계되었습니다. 온디바이스 채팅 앱을 비교하는 사용자에게 실질적인 질문은, Arbiter가 아이폰급 하드웨어에서 진정한 일상용 도구로 쓸 만한 성능을 제공하는지, 아니면 다른 곳에서 실행되는 더 큰 모델을 위한 프라이빗 프런트엔드로 쓰는 것이 최선인지입니다.',
    metaDescription:
      'Arbiter 리뷰: 이 프라이버시 우선 오프라인 AI 채팅 앱은 아이폰에서 쓸 만할까요? 온디바이스 모델, 문서 요약, LM Studio/Ollama 연동, 하드웨어 요구사항과 가격을 다룹니다.',
    twitterDescription:
      'Arbiter Local AI Chat 리뷰 2026: 아이폰에서 오픈소스 모델을 온디바이스로 실행하거나, LM Studio/Ollama/Arbiter for Mac에 연결해 더 큰 모델을 사용하세요. 계정도, 서버도, 데이터 수집도 없습니다.',
    audience:
      '프라이빗 오프라인 AI 채팅과 문서 요약을 위해 Arbiter를 사용할지 결정하려는 아이폰 사용자 — 온디바이스 모델 지원, 하드웨어 요구사항, 데스크톱 추론 도구 연동, 다른 모바일 로컬 AI 앱과의 비교를 다룹니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'App Store에서 Arbiter 받기 →', url: 'https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532', productName: 'Arbiter - Local AI Chat', productCategory: 'software' },
    ],
    primaryTerm: 'Arbiter local AI chat review',
    targetKeywords: [
      'arbiter ai review',
      'arbiter local ai chat',
      'arbiter ios app',
      'arbiter offline ai iphone',
      'arbiter vs private llm',
      'arbiter local llm iphone',
      'arbiter privacy ai app',
      'run local ai on iphone arbiter',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'DeepSeek', 'Qwen', 'Mistral'],
    current_hardware_mentioned: ['iPhone 13 Pro', 'iPhone'],
    leadAnswerBlock:
      '**Arbiter는 대화 내용과 업로드한 문서를 전적으로 기기에만 보관하면서, 필요할 때 더 강력한 모델을 활용할 수 있는, 계정도 서버도 필요 없는 아이폰 채팅 앱을 원하는 사용자에게 가장 매력적입니다.** iPhone 13 Pro 이상(또는 RAM 6GB 이상의 모든 기기)에서는 채팅과 문서 요약을 위해 Gemma, Llama, DeepSeek, Qwen, Mistral과 같은 경량 오픈소스 모델을 로컬에서 실행합니다. 온디바이스 모델 품질이 충분하지 않을 때는, LM Studio, Ollama, 또는 별도의 "Arbiter for Mac" 컴패니언 앱을 통해 본인 소유의 PC나 Mac에서 실행되는 더 강력한 모델에 Arbiter를 연결할 수 있어, 어떤 것도 제3자 서버로 전송하지 않고 더 큰 모델의 답변을 얻을 수 있습니다. 무료이며 선택적 인앱 구매가 있습니다. 가능한 한 가장 큰 모델 라이브러리, 세밀한 양자화 제어, 또는 성숙한 크로스 플랫폼(Android, Windows) 지원을 원하는 사용자는 더 정착된 로컬 LLM 앱과 비교해 보아야 합니다.',
    quickAnswerTop: {
      ko: {
        question: '아이폰에서 프라이빗한 오프라인 AI를 위해 Arbiter를 써야 할까요?',
        answer:
          '온디바이스 AI 채팅과 문서 요약을 위한 무료, 무계정 아이폰 앱을 원하면서, 필요시 본인 소유의 PC나 Mac에 있는 더 큰 모델에 연결하고 싶다면 Arbiter를 사용하세요. Android나 Windows 지원, 매우 방대한 큐레이션 모델 라이브러리, 또는 현재 클라우드 AI만이 제공하는 최상급 추론 품질이 필요하다면 건너뛰세요.',
        bullets: [
          '무료이며 선택적 인앱 구매가 있습니다. 핵심 기능 사용에 구독이 필요하지 않습니다.',
          '계정도, 서버도 없습니다 — 개발자의 설명에 따르면 대화 내용과 업로드한 문서는 기기에만 남습니다.',
          '아이폰에서 Gemma, Llama, DeepSeek, Qwen, Mistral을 로컬로 실행하며, 더 큰 모델을 위해 LM Studio, Ollama, 또는 Arbiter for Mac에 연결할 수 있습니다.',
          '권장 하드웨어: 원활한 성능을 위해 iPhone 13 Pro 이상, 또는 RAM 6GB 이상의 모든 기기.',
          'iOS/아이폰 전용입니다. "Arbiter for Mac" 컴패니언은 더 큰 모델에 연결하기 위한 것으로, 확인된 독립형 Mac 채팅 앱은 아닙니다.',
        ],
        updatedDate: '2026-09-04',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Arbiter란 무엇인가', anchor: 'what-is-arbiter' },
      { label: 'Arbiter에서 로컬 AI가 작동하는 방식', anchor: 'how-local-ai-works' },
      { label: '기능', anchor: 'features' },
      { label: '하드웨어 요구사항과 가격', anchor: 'hardware-and-pricing' },
      { label: '트레이드오프: 장점 대 한계', anchor: 'tradeoffs' },
      { label: 'Arbiter 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'Arbiter를 사용해야 할 사람', anchor: 'who-should-use' },
      { label: 'Arbiter를 사용하지 말아야 할 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 콘텐츠', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        items: [
          'Arbiter는 Jordan Stone이 개발한, 온디바이스 AI 채팅을 위한 무료 아이폰 앱으로, 계정도 서버도 데이터 수집도 없는 프라이버시 우선 앱으로 자리매김하고 있습니다.',
          'Gemma, Llama, DeepSeek, Qwen, Mistral 등 경량 오픈소스 모델을 로컬에서 지원합니다.',
          '제3자 클라우드 API 대신, LM Studio, Ollama, 또는 별도의 "Arbiter for Mac" 컴패니언을 통해 본인 소유의 PC나 Mac에서 실행되는 더 강력한 모델에도 연결할 수 있습니다.',
          '문서를 업로드하면 요약과 핵심 인사이트를 얻을 수 있으며, 처리 과정은 기기 내에서 이루어집니다.',
          '권장 하드웨어: 원활한 성능을 위해 iPhone 13 Pro 이상, 또는 RAM 6GB 이상의 모든 기기.',
          '가격: 무료이며 선택적 인앱 구매가 있습니다. 카테고리: 생산성.',
          '핵심 앱은 iOS/아이폰 전용입니다. Arbiter for Mac은 더 큰 모델에 연결하는 방법으로 설명되어 있으며, 완전한 독립형 Mac 채팅 클라이언트로 확인되지는 않았습니다.',
        ],
      },
      whatIsArbiter: {
        id: 'what-is-arbiter',
        title: 'Arbiter란 무엇인가',
        content: [
          'Arbiter는 Jordan Stone이 개발한 프라이버시 우선 오프라인 아이폰 AI 어시스턴트로, App Store에는 "Arbiter - Local AI Chat"(id6747954532)으로 등록되어 있으며, 벤더 사이트는 askarbiter.ai입니다. 앱은 무료로 다운로드할 수 있으며 선택적 인앱 구매가 있고, 생산성 카테고리에 등록되어 있습니다.',
          '핵심 설계는 Arbiter가 계정을 요구하지 않고, 대화를 처리하기 위해 Arbiter 자체 서버에 의존하지 않는다는 점입니다: 아이폰에서 직접 모델을 실행하거나, 사용자가 통제하는 하드웨어(본인 소유의 PC나 Mac)에서 실행 중인 모델에 연결합니다. 개발자의 입장은 대화가 기기, 즉 사용자의 휴대폰이나 연결한 데스크톱 기기 밖으로 절대 나가지 않는다는 것입니다.',
          '모델 지원은 경량 오픈소스 계열, 즉 Gemma, Llama, DeepSeek, Qwen, Mistral을 중심으로 합니다. 이들은 대부분의 로컬 LLM 앱과 도구에서 사용되는 것과 동일한 모델 계열이며, 이는 실질적인 품질 상한선이 Arbiter만의 독점 모델이 아니라 아이폰(또는 연결된 데스크톱)이 실행할 수 있는 모델 크기에 의해 결정된다는 것을 의미합니다.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Arbiter는 계정이나 서버 없이, 오픈소스 언어 모델을 온디바이스로 실행하거나 본인 소유의 PC나 Mac에 있는 더 강력한 모델에 연결하는 무료 아이폰 앱입니다.',
          },
          {
            type: 'plain-terms',
            text:
              'Arbiter는 클라우드 챗봇과 같은 방식으로 아이폰에서 AI와 대화할 수 있게 해 주지만, 대화가 회사 서버로 전송되는 대신 휴대폰(또는 사용자가 소유한 컴퓨터)에만 남습니다.',
          },
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Arbiter에서 로컬 AI가 작동하는 방식',
        content: [
          'Arbiter는 데이터가 제3자 서버 밖으로 나가지 않도록 설계된 두 가지 AI 채팅 경로를 제공합니다:',
        ],
        items: [
          '**온디바이스 모델** — 경량 오픈소스 모델(Gemma, Llama, DeepSeek, Qwen, Mistral)을 앱에 직접 다운로드하여 아이폰에서 추론을 실행합니다. 모델을 다운로드한 후에는 인터넷 연결이 필요하지 않으며, 어떤 제3자 서버도 대화를 볼 수 없습니다.',
          '**더 강력한 데스크톱 모델에 연결** — 특정 작업에 온디바이스 모델 품질이 충분하지 않다면, Arbiter는 LM Studio나 Ollama 같은 도구, 또는 별도의 "Arbiter for Mac" 컴패니언 앱을 통해 본인 소유의 PC나 Mac에서 실행되는 모델에 연결할 수 있습니다. 추론은 사용자가 통제하는 데스크톱 기기에서 이루어지며, 휴대폰은 인터페이스 역할을 합니다. 이를 통해 휴대폰이 실행할 수 있는 범위로 제한되거나 프롬프트를 클라우드 API로 전송해야 하는 트레이드오프를 피할 수 있습니다.',
          '**문서 요약** — 기기에서 문서를 업로드하면 Arbiter가 요약을 생성하고 핵심 인사이트를 추출해 주며, 파일을 먼저 클라우드 서비스에 업로드할 필요가 없습니다.',
        ],
        note: '정확한 최소 iOS 버전, 모델별 다운로드 용량, 지원되는 오픈소스 모델 변형의 전체 목록은 개발자가 세부적으로 공개하지 않았습니다. 특정 기기에서 특정 모델을 사용하기 전에 App Store 등록 정보나 askarbiter.ai에서 현재 세부 사항을 확인하세요. App Store 등록 정보 기준 2026-09-04에 마지막으로 확인했습니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        items: [
          '**로컬 모델 채팅.** Gemma, Llama, DeepSeek, Qwen, Mistral을 아이폰에 다운로드하여 실행하면, 다운로드 후에는 완전히 오프라인으로 채팅할 수 있습니다.',
          '**더 큰 모델을 위한 데스크톱 연결.** 본인 소유의 PC나 Mac에서 실행되는 LM Studio나 Ollama, 또는 "Arbiter for Mac" 컴패니언에 연결하면, 아이폰 단독으로는 실행할 수 없는 더 강력한 모델을 사용할 수 있으며, 추론은 사용자가 통제하는 하드웨어에서 유지됩니다.',
          '**문서 요약.** 기기에서 문서를 업로드하면 요약과 핵심 인사이트를 받을 수 있으며, 클라우드 업로드가 아니라 온디바이스에서 처리됩니다.',
          '**계정 불필요.** 가입, 로그인, 계정 시스템이 없습니다 — 앱을 열고 바로 사용하면 됩니다.',
          '**데이터 미수집(개발자 주장 기준).** 개발자는 대화가 기기 밖으로 나가지 않으며, Arbiter가 대화를 처리하거나 저장하기 위한 자체 서버를 운영하지 않는다고 밝히고 있습니다.',
        ],
      },
      hardwareAndPricing: {
        id: 'hardware-and-pricing',
        itemHeadings: true,
        title: '하드웨어 요구사항과 가격',
        columns: ['항목', 'Arbiter의 공식 설명', '실제 사용 시 의미'],
        rows: [
          {
            '항목': '최소 권장 하드웨어',
            'Arbiter의 공식 설명': '원활한 성능을 위해 iPhone 13 Pro 이상, 또는 RAM 6GB 이상의 모든 기기.',
            '실제 사용 시 의미': '더 오래되었거나 RAM이 적은 아이폰에서도 앱이 실행될 수는 있지만, 온디바이스 모델 응답이 느려지거나 더 작은 모델로 제한될 수 있습니다. 아이폰이 13 Pro보다 오래되었고 RAM이 6GB 미만이라면, 온디바이스 추론 대신 데스크톱 연결 경로를 활용하세요.',
          },
          {
            '항목': '플랫폼',
            'Arbiter의 공식 설명': 'iOS / 아이폰. 더 큰 모델에 연결하기 위한 컴패니언 앱 "Arbiter for Mac"이 제공됩니다.',
            '실제 사용 시 의미': 'Android나 Windows 버전은 없습니다. Arbiter for Mac은 휴대폰에서 더 강력한 모델에 도달하는 방법으로 구체적으로 설명되어 있습니다 — 개발자가 완전한 독립형 Mac 채팅 클라이언트로 문서화하기 전까지는 연결 지점으로 간주하세요.',
          },
          {
            '항목': '가격',
            'Arbiter의 공식 설명': '무료, 선택적 인앱 구매 포함. 카테고리: 생산성.',
            '실제 사용 시 의미': '결제 없이 앱을 설치하고 사용할 수 있습니다. 구체적인 인앱 구매 등급, 가격, 잠금 해제 항목은 이 리뷰의 출처 자료에 공개되어 있지 않습니다 — 특정 기능이 무료인지 유료인지 단정하기 전에 현재 App Store 등록 정보를 확인하세요.',
          },
          {
            '항목': '온디바이스 모델용 저장 공간',
            'Arbiter의 공식 설명': '개발자가 세부적으로 명시하지 않음.',
            '실제 사용 시 의미': 'Gemma, Llama, DeepSeek, Qwen, Mistral 계열의 오픈소스 모델은 매개변수 수와 양자화에 따라 모델당 대략 1~5GB 범위입니다. 한 번에 하나 이상의 모델을 다운로드해 둘 계획이라면 아이폰 저장 공간을 그에 맞게 확보하세요.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '트레이드오프: 장점 대 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 유의사항'],
        rows: [
          {
            '장점': '설계 단계부터의 프라이버시',
            '실제 사용에서의 의미': '개발자의 설명에 따르면, 계정도 없고 대화를 처리하는 Arbiter 운영 서버도 없습니다 — 대화는 사용자의 기기나 연결한 데스크톱에만 남습니다.',
            '한계 / 유의사항': '이 리뷰는 독립적인 제3자 감사가 아니라 개발자가 공개한 주장에 근거합니다. 민감한 정보를 다루기 전에 App Store의 현재 개인정보처리방침을 확인하세요.',
          },
          {
            '장점': '모델 다운로드 후 완전한 오프라인 작동',
            '실제 사용에서의 의미': 'Gemma, Llama, DeepSeek, Qwen, Mistral을 사용한 온디바이스 채팅은 설정 후 인터넷 연결이 필요하지 않습니다.',
            '한계 / 유의사항': '앱 최초 설치와 모델 다운로드에는 인터넷이 필요합니다. LM Studio, Ollama, Arbiter for Mac에 연결하려면 휴대폰과 데스크톱 기기 간의 네트워크 연결이 필요합니다.',
          },
          {
            '장점': '반복 결제가 필수가 아님',
            '실제 사용에서의 의미': '무료 다운로드에 선택적 인앱 구매가 있어, 핵심 앱을 사용하는 데 구독이 강제되지 않습니다.',
            '한계 / 유의사항': '온디바이스 추론은 아이폰의 배터리와 처리 성능을 사용하며, 오래되었거나 RAM이 적은 기기에서는 큰 모델이 느리게 실행될 수 있습니다.',
          },
          {
            '장점': '클라우드 API 없이 더 큰 모델에 접근',
            '실제 사용에서의 의미': 'LM Studio, Ollama, Arbiter for Mac에 연결하면 아이폰 단독으로는 실행할 수 없는 더 크고 강력한 모델을 사용하면서, 추론은 사용자 소유 하드웨어에서 유지할 수 있습니다.',
            '한계 / 유의사항': '충분한 RAM/GPU를 갖춘 PC나 Mac, 그리고 이미 설정된 LM Studio, Ollama, Arbiter for Mac이 필요합니다 — 호환되는 데스크톱이 없는 사용자에게는 무설정 경로가 아닙니다.',
          },
          {
            '장점': '온디바이스 문서 요약',
            '실제 사용에서의 의미': '파일을 클라우드 서비스에 업로드하지 않고도 요약과 핵심 인사이트를 얻을 수 있습니다.',
            '한계 / 유의사항': '요약 품질은 선택한 온디바이스 모델 크기에 따라 달라지며, 지원되는 파일 형식과 최대 문서 길이는 개발자가 공개 자료에서 상세히 밝히지 않았습니다.',
          },
          {
            '장점': '간결하고 정제된 모델 목록',
            '실제 사용에서의 의미': 'Gemma, Llama, DeepSeek, Qwen, Mistral은 직접 Hugging Face를 검색하지 않고도 다양한 오픈소스 모델 계열을 다룹니다.',
            '한계 / 유의사항': '정확한 모델 크기/변형 목록과 커스텀 GGUF 가져오기 지원 여부는 이 리뷰의 출처 자료에 명시되어 있지 않습니다 — 최신 모델 목록은 현재 App Store 등록 정보를 확인하세요.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Arbiter 대 대안 앱',
        columns: ['앱', '적합한 대상', '설정 난이도', '플랫폼 초점', '주요 한계'],
        rows: [
          {
            '앱': 'Arbiter',
            '적합한 대상': '온디바이스 채팅에 더해 본인 소유 PC/Mac의 더 큰 모델에 접근할 옵션을 원하는 아이폰 사용자',
            '설정 난이도': '온디바이스 채팅은 최소 설정; LM Studio/Ollama/Arbiter for Mac 연결에는 추가 설정 필요',
            '플랫폼 초점': 'iOS/아이폰 전용, 더 큰 모델 연결용 Mac 컴패니언 제공',
            '주요 한계': 'Android나 Windows 앱 없음; 인앱 구매 등급이 공개적으로 상세히 안내되지 않음',
          },
          {
            '앱': '[Loci](/ko/power-local-llm/loci-ai-review-offline-local-ai)',
            '적합한 대상': '저마찰의 크로스 플랫폼 프라이빗 채팅',
            '설정 난이도': '최소(다운로드 후 바로 채팅)',
            '플랫폼 초점': '아이폰/아이패드/Android/Mac/Windows(5개 플랫폼)',
            '주요 한계': '큐레이션된 약 10개 모델 라이브러리; GGUF 파일 가져오기 불가',
          },
          {
            '앱': 'Private LLM',
            '적합한 대상': '고급 모델 선택을 원하는 Apple 전용 사용자',
            '설정 난이도': '낮음~중간(1회 구매, 모델 다운로드)',
            '플랫폼 초점': '아이폰/아이패드/Mac(Apple 전용)',
            '주요 한계': 'Apple 전용; 양자화 형식 학습 필요',
          },
          {
            '앱': 'PocketPal AI',
            '적합한 대상': '완전한 GGUF 가져오기와 모델 제어를 원하는 사용자',
            '설정 난이도': '중간(무료이지만 모델 파일을 직접 확보해야 함)',
            '플랫폼 초점': '아이폰/아이패드, 일부 Android 지원',
            '주요 한계': 'GGUF 파일과 수동 모델 선택에 익숙해야 함',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Arbiter를 사용해야 할 사람',
        items: [
          '**계정 없이 프라이빗 채팅을 원하는 아이폰 사용자.** 가입 절차 없이 앱을 열고 온디바이스 모델과 바로 채팅을 시작할 수 있습니다.',
          '**가끔 더 큰 모델이 필요한 사용자.** LM Studio, Ollama, Arbiter for Mac에 연결하면, 온디바이스 모델로 충분하지 않을 때 프롬프트를 제3자 클라우드 API로 보내지 않고도 본인 소유 데스크톱의 더 강력한 모델을 활용할 수 있습니다.',
          '**클라우드 업로드 없이 문서 요약을 원하는 사람.** 기기에서 파일을 업로드하면 요약과 핵심 인사이트를 받을 수 있습니다.',
          '**비용에 민감한 사용자.** 무료이며 선택적 인앱 구매만 있어, 강제 구독 없이 앱을 체험할 수 있습니다.',
          '**iPhone 13 Pro 이상(또는 RAM 6GB 이상 기기)을 사용하는 사용자.** 개발자가 원활한 온디바이스 성능을 위해 권장하는 하드웨어 범위입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Arbiter를 사용하지 말아야 할 사람',
        items: [
          '**Android나 Windows 사용자.** Arbiter는 iOS/아이폰 전용이며, 이 리뷰의 출처 자료에는 네이티브 Android나 Windows 앱이 없습니다.',
          '**순수하게 온디바이스에서 최상급 클라우드 수준의 추론을 기대하는 사용자.** 아이폰에서 실행되는 Gemma, Llama, DeepSeek, Qwen, Mistral 계열의 온디바이스 모델은 다른 휴대폰 기반 로컬 AI 앱과 동일한 매개변수 수 상한선에 부딪히며, 가장 큰 모델을 사용하려면 여전히 데스크톱 기기에 연결하거나 클라우드 서비스를 이용해야 합니다.',
          '**권장 하드웨어 등급보다 오래된 아이폰을 사용하는 사용자.** iPhone 13 Pro보다 오래되었거나 RAM이 6GB 미만인 기기는 온디바이스 성능이 느려질 수 있습니다.',
          '**오늘 당장 성숙하고 완전히 문서화된 독립형 Mac 채팅 앱을 원하는 사용자.** "Arbiter for Mac"은 휴대폰에서 더 큰 모델에 연결하는 방법으로 설명되어 있으며, 출처 자료에서 그 자체로 완전한 독립형 Mac 채팅 애플리케이션이라고 확인되지는 않았습니다.',
          '**독립적으로 감사된 프라이버시 보장이 필요한 매우 민감한 정보를 다루는 사용자.** Arbiter의 무계정, 무서버, 무데이터 수집이라는 포지셔닝은 개발자가 밝힌 설계 방침이므로, 기밀 업무에 활용하기 전에 App Store 등록 정보의 현재 개인정보처리방침을 확인하세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Arbiter - Local AI Chat이란 무엇인가요?',
            a: 'Arbiter는 Jordan Stone이 개발한 프라이버시 우선 오프라인 아이폰 AI 어시스턴트입니다. 경량 오픈소스 모델(Gemma, Llama, DeepSeek, Qwen, Mistral)을 아이폰에 다운로드하여 로컬로 실행하거나, LM Studio, Ollama, 또는 "Arbiter for Mac" 컴패니언을 통해 본인 소유의 PC나 Mac에서 실행되는 더 강력한 모델에 연결할 수 있습니다.',
          },
          {
            q: 'Arbiter는 정말로 프라이빗한가요?',
            a: '개발자가 밝힌 설계는 무계정, 무서버, 무데이터 수집입니다 — 대화는 사용 중인 기기, 즉 아이폰이든 연결한 데스크톱이든 그 밖으로 나가지 않도록 설계되어 있습니다. 다른 모든 프라이버시 주장과 마찬가지로, 이 리뷰가 독립적인 감사가 아니라 개발자의 공개 주장에 근거하고 있으므로 민감한 정보에 사용하기 전에 App Store 등록 정보의 현재 개인정보처리방침을 확인하세요.',
          },
          {
            q: 'Arbiter는 인터넷 연결 없이 작동하나요?',
            a: '온디바이스 채팅의 경우 그렇습니다: 모델(Gemma, Llama, DeepSeek, Qwen, Mistral)이 아이폰에 다운로드되면, 채팅은 인터넷 연결 없이 작동합니다. 앱과 초기 모델을 다운로드하려면 인터넷이 필요하며, LM Studio, Ollama, Arbiter for Mac에 연결하려면 휴대폰과 데스크톱 기기 간의 네트워크 연결이 필요합니다.',
          },
          {
            q: 'Arbiter를 원활하게 실행하려면 어떤 아이폰이 필요한가요?',
            a: '개발자는 원활한 성능을 위해 iPhone 13 Pro 이상, 또는 RAM 6GB 이상의 모든 기기를 권장합니다. 더 오래되었거나 RAM이 적은 아이폰에서도 앱은 실행될 수 있지만, 특히 더 큰 모델에서 온디바이스 응답이 느려질 수 있습니다.',
          },
          {
            q: 'Arbiter는 어떤 AI 모델을 지원하나요?',
            a: 'Arbiter는 Gemma, Llama, DeepSeek, Qwen, Mistral과 같은 경량 오픈소스 모델을 지원합니다. 이들은 기기에서 로컬로 실행됩니다. 더 강력한 모델을 위해서는 Arbiter가 본인 소유의 PC나 Mac에서 실행되는 LM Studio나 Ollama, 또는 Arbiter for Mac 컴패니언 앱에 연결할 수 있습니다.',
          },
          {
            q: 'LM Studio나 Ollama에 연결하는 방식은 어떻게 작동하나요?',
            a: '아이폰에서 직접 모델을 실행하는 대신, Arbiter는 LM Studio, Ollama, 또는 Arbiter for Mac 컴패니언 앱을 통해 본인 소유의 PC나 Mac에서 이미 실행 중인 모델에 연결할 수 있습니다. 추론은 사용자가 통제하는 데스크톱 기기에서 이루어지고, Arbiter의 휴대폰 인터페이스가 메시지를 주고받습니다 — 그 결과 제3자 클라우드 API 없이도 아이폰 단독으로는 실행할 수 없는 더 크고 강력한 모델에 접근할 수 있습니다.',
          },
          {
            q: 'Arbiter는 유료인가요?',
            a: 'Arbiter는 무료로 다운로드할 수 있으며 선택적 인앱 구매가 있습니다. App Store의 생산성 카테고리에 등록되어 있습니다. 구체적인 인앱 구매 등급과 가격은 이 리뷰의 출처 자료에 상세히 나와 있지 않습니다 — 최신 가격은 현재 App Store 등록 정보를 확인하세요.',
          },
          {
            q: 'Arbiter로 문서를 요약할 수 있나요?',
            a: '네. 기기에서 문서를 업로드하면 Arbiter가 요약을 생성하고 핵심 인사이트를 추출해 주며, 클라우드 업로드가 아니라 기기에서 처리됩니다.',
          },
          {
            q: 'Arbiter의 Android나 Windows 버전이 있나요?',
            a: '없습니다. Arbiter는 iOS/아이폰용으로 제공됩니다. 더 강력한 모델에 연결하기 위한 별도의 "Arbiter for Mac" 컴패니언 앱은 있지만, 이 리뷰의 출처 자료에는 Android나 Windows 클라이언트가 없습니다.',
          },
          {
            q: 'Arbiter는 Loci나 Private LLM과 비교해 어떤가요?',
            a: 'Loci는 최소한의 설정으로 큐레이션된 모델 라이브러리를 갖추고 다섯 개 플랫폼(아이폰, 아이패드, Android, Mac, Windows)에서 작동합니다. Private LLM은 Apple 전용으로 더 큰 모델 라이브러리(140개 이상 모델)와 더 세밀한 양자화 제어를 제공하며 1회 구매로 판매됩니다. Arbiter는 아이폰 중심으로 더 작고 단순한 모델 목록(Gemma, Llama, DeepSeek, Qwen, Mistral)을 갖추었지만, LM Studio, Ollama, 또는 본인 소유 Mac에 직접 연결해 더 큰 모델을 사용할 수 있는 옵션을 더해줍니다 — 이는 모든 경쟁 앱이 동일한 형태로 제공하지는 않는 조합입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Arbiter는 프라이빗 AI 채팅과 문서 요약을 위한 무료, 무계정 아이폰 앱을 원하면서, 온디바이스 모델 품질이 충분하지 않을 때 진정한 탈출구, 즉 Arbiter for Mac 컴패니언을 통해 LM Studio, Ollama, 또는 본인 소유의 Mac에 연결할 수 있는 기능까지 원하는 사용자에게 설치할 가치가 있습니다. 개발자의 프라이버시 포지셔닝 — 무계정, 무서버, 무데이터 수집 — 은 프라이버시를 중시하는 모바일 AI 사용자 대부분이 찾는 바로 그 설계이지만, 단일 개발자 앱이 흔히 그렇듯 민감한 자료를 신뢰하기 전에 직접 현재 App Store 개인정보처리방침을 확인해 볼 가치가 있습니다. 권장 하드웨어 등급(iPhone 13 Pro 이상, 또는 RAM 6GB 이상)은 대부분의 최근 아이폰에서 현실적입니다. Arbiter가 약한 부분은 폭입니다: 아이폰 전용이고, Arbiter for Mac 컴패니언이 완전한 독립형 Mac 채팅 앱으로 확인되지 않았으며, 인앱 구매 가격과 정확한 모델 변형에 대한 세부 정보가 상세히 공개되어 있지 않습니다. 더 큰 큐레이션 모델 라이브러리를 갖춘 성숙한 크로스 플랫폼 앱을 원하는 사용자는 Loci도 살펴봐야 하며, Apple 기기에서 최대한의 모델 및 양자화 제어를 원하는 사용자는 Private LLM을 살펴봐야 합니다. 간단한 온디바이스 채팅에 더해 본인 소유 하드웨어의 더 큰 모델에 접근할 옵션까지 원하는 아이폰 우선 사용자에게 Arbiter는 실질적인 공백을 채워줍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Arbiter - Local AI Chat](https://apps.apple.com/us/app/arbiter-local-ai-chat/id6747954532) — 공식 등록 정보, 카테고리, 가격, 개발자 정보.',
          '[Arbiter 공식 사이트 (askarbiter.ai)](https://www.askarbiter.ai/) — 제품 개요와 기능.',
          '[App Store의 Loci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — 비교 참고용, 크로스 플랫폼 온디바이스 AI 앱.',
          '[Private LLM 공식 사이트](https://privatellm.app/en) — 비교 참고용, 더 큰 모델 라이브러리를 갖춘 Apple 전용 로컬 LLM 앱.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 콘텐츠',
        items: [
          '[Loci AI 리뷰: 아이폰, Android, 아이패드, Mac용 프라이빗 오프라인 AI](/ko/power-local-llm/loci-ai-review-offline-local-ai) — Arbiter와 비교할 크로스 플랫폼 온디바이스 AI 앱.',
          '[2026년 아이폰용 베스트 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — PocketPal AI, Private LLM, Apple Intelligence를 포함한 아이폰 앱 총정리.',
          '[2026년 베스트 모바일 LLM 모델: Phi-4 Mini 대 Gemma 4 대 SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Arbiter가 지원하는 것과 동일한 모델 계열을 다루는 모델 계층 보완 자료.',
          '[태블릿에서 로컬 LLM 실행하기: 아이패드와 Android (2026)](/ko/power-local-llm/run-ai-on-tablet-ipad-android) — 태블릿의 온디바이스 및 원격 추론을 다루는 기기 중심 가이드.',
          '[2026년 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory-2026) — 모든 플랫폼을 아우르는 종합 앱 및 도구 디렉터리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Arbiter Local AI Chat 리뷰 (2026): 아이폰용 프라이빗 오프라인 AI',
      'description': 'Arbiter 리뷰: 이 프라이버시 우선 오프라인 AI 채팅 앱은 아이폰에서 쓸 만할까요? 온디바이스 모델, 문서 요약, LM Studio/Ollama 연동, 하드웨어 요구사항과 가격을 다룹니다.',
      'datePublished': '2026-09-04',
      'dateModified': '2026-09-04',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'inLanguage': 'ko',
      'url': 'https://www.promptquorum.com/ko/power-local-llm/arbiter-local-ai-chat-review-2026',
      'articleBody': 'Arbiter는 Jordan Stone이 개발한, 프라이빗 온디바이스 AI 채팅을 위한 무료 아이폰 앱입니다. 오픈소스 모델(Gemma, Llama, DeepSeek, Qwen, Mistral)을 로컬로 실행하거나, LM Studio, Ollama, Arbiter for Mac을 통해 본인 소유의 PC나 Mac에 있는 더 큰 모델에 연결합니다.',
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': '프라이빗 오프라인 AI 채팅과 문서 요약을 위해 Arbiter를 사용할지 결정하려는 아이폰 사용자' },
      'about': [
        { '@type': 'Thing', 'name': 'Arbiter - Local AI Chat' },
        { '@type': 'Thing', 'name': '온디바이스 AI' },
        { '@type': 'Thing', 'name': '로컬 LLM 앱' },
        { '@type': 'Thing', 'name': '모바일 프라이버시' },
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ko/power-local-llm/arbiter-local-ai-chat-review-2026',
      },
    },
  },
}
