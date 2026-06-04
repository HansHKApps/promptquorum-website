import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'How to Build a Smart Home With Zero Subscriptions (2026)',
    seoTitle: 'Smart Home Without Subscriptions (2026)',
    intro:
      'You can build a smart home with zero subscriptions by choosing local-capable devices and a local hub, paying one-time hardware costs instead of monthly fees. This guide shows where subscriptions hide, the no-subscription local stack, devices that charge no fees, local camera storage, and the one-time-cost math that makes local cheaper over time.',
    metaDescription:
      'Build a smart home with zero subscriptions: local-capable devices, a local hub, and local camera storage replace monthly fees with one-time hardware costs.',
    twitterDescription:
      'Build a smart home with no subscriptions: local devices, a local hub, and local camera storage replace monthly fees with one-time hardware costs.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'People avoiding recurring smart home fees',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      'smart home no subscription',
      'smart home without subscriptions',
      'no fee smart home',
      'local camera no subscription',
      'subscription free smart home',
    ],
    leadAnswerBlock:
      '**Build a subscription-free smart home by choosing local-capable devices, a local hub (Home Assistant), and local camera storage with Frigate — you pay one-time hardware costs instead of monthly fees.** Cloud cameras and premium features are where subscriptions hide.',
    quickAnswerTop: {
      en: {
        question: 'How do I build a smart home with no subscriptions?',
        answer:
          'Choose local-capable devices (Zigbee, Z-Wave, Matter, local Wi-Fi), run a local hub like Home Assistant, and record cameras locally with Frigate instead of a cloud plan. This replaces recurring fees for camera storage, AI detection, and premium features with a one-time hardware cost.',
        bullets: [
          'Subscriptions hide in camera storage, AI detection, premium features',
          'Local hub (Home Assistant) runs control and automations free',
          'Frigate records cameras locally with no monthly fee',
          'Local-capable devices avoid cloud-account requirements',
          'One-time hardware replaces recurring fees',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Where Subscriptions Hide', anchor: 'where-hide' },
      { label: 'The No-Subscription Stack', anchor: 'no-sub-stack' },
      { label: 'Devices With No Fees', anchor: 'no-fee-devices' },
      { label: 'Local Camera Storage', anchor: 'camera-storage' },
      { label: 'The One-Time-Cost Math', anchor: 'cost-math' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A subscription-free smart home uses local-capable devices, a local hub, and local camera storage to replace monthly fees with one-time hardware costs.' },
      { type: 'plain-terms', content: 'Smart home subscriptions usually come from cloud cameras: you pay monthly to store footage and unlock AI detection. By recording cameras locally and running a local hub, you pay once for hardware and never pay a monthly fee for the core features.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Most smart home subscriptions come from cloud camera storage and AI detection',
          'A local hub (Home Assistant) runs control and automations with no fee',
          'Frigate records cameras and runs AI detection locally, no subscription',
          'Choose local-capable devices that do not require a cloud account',
          'You trade one-time hardware cost for zero recurring fees',
          'Over time, the local approach is cheaper and keeps data private',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: 'Where Subscriptions Hide',
        content:
          '**Smart home subscriptions hide mostly in cloud cameras: footage storage, AI detection, and premium features behind a monthly plan.** Knowing where they hide lets you design them out.',
        items: [
          '**Camera storage:** cloud video history is the most common recurring fee.',
          '**AI detection:** person/object alerts are often gated behind a plan.',
          '**Premium features:** some ecosystems lock automations or extras behind subscriptions.',
        ],
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: 'The No-Subscription Stack',
        content:
          '**The no-subscription stack is a local hub plus local-capable devices and local camera recording — everything runs on hardware you own.** No core feature requires a monthly fee.',
        items: [
          'Local hub: Home Assistant runs control and automations free — see [getting started](/smart-home/home-assistant-getting-started).',
          'Local devices: Zigbee, Z-Wave, Matter, or local Wi-Fi with no cloud account.',
          'Local cameras: Frigate for recording and AI detection — see [local AI security cameras](/smart-home/local-ai-security-camera).',
        ],
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: 'Devices With No Fees',
        content:
          '**Devices that use local protocols and do not require a cloud account charge no recurring fees.** Check the protocol and whether a cloud login is mandatory.',
        items: [
          'Zigbee and Z-Wave bulbs, plugs, and sensors have no fees.',
          'Matter devices commissioned to a local controller have no fees.',
          'Avoid devices that require a vendor subscription for basic control.',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: 'Local Camera Storage',
        content:
          '**Record cameras to local storage with Frigate instead of paying for cloud video history.** This removes the biggest recurring smart home fee.',
        items: [
          'Use RTSP/PoE cameras and record locally — footage stays in your home.',
          'Frigate provides AI detection with no subscription — see [local AI security cameras](/smart-home/local-ai-security-camera).',
          'Plan local disk for the retention you want; no monthly fee applies.',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'The One-Time-Cost Math',
        content:
          '**Local replaces recurring monthly fees with one-time hardware, so it is cheaper over time.** The longer you run it, the larger the saving versus a subscription.',
        columns: ['Function', 'Subscription option', 'No-subscription local option'],
        rows: [
          { 'Function': 'Camera storage', 'Subscription option': 'Monthly cloud plan', 'No-subscription local option': 'Local disk + Frigate' },
          { 'Function': 'AI detection', 'Subscription option': 'Cloud plan add-on', 'No-subscription local option': 'Frigate (Coral/GPU)' },
          { 'Function': 'Control & automations', 'Subscription option': 'Sometimes gated', 'No-subscription local option': 'Home Assistant (free)' },
          { 'Function': 'Voice/AI', 'Subscription option': 'Cloud assistant', 'No-subscription local option': 'Local voice + local LLM' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Which smart home devices have no fees?', a: 'Devices using Zigbee, Z-Wave, or Matter, or local-Wi-Fi devices with a local API, charge no recurring fees because they work through a local hub with no cloud account. The recurring fees almost always come from cloud cameras and premium ecosystem features.' },
          { q: 'Can I store camera footage without a subscription?', a: 'Yes. Record RTSP or PoE cameras locally with Frigate to your own storage, which provides recording and AI detection with no subscription. Footage stays in your home, and you control retention by the disk space you provide.' },
          { q: 'How much do I save long-term?', a: 'Savings grow over time because you replace recurring monthly fees with a one-time hardware cost. The exact amount depends on how many cloud subscriptions you avoid, but a local setup is typically cheaper the longer you run it.' },
          { q: 'Are there hidden costs to a no-subscription smart home?', a: 'The main cost is upfront hardware (a local hub, a detection accelerator, and storage) plus your setup time. After that, core control, automations, and local camera recording run with no recurring fees.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the broader local case',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — build the no-fee stack',
          '[Local AI Security Cameras with Frigate](/smart-home/local-ai-security-camera) — replace cloud camera fees',
          '[What Local LLMs Are](/local-llms/what-are-local-llms) — cross-cluster: private local AI with no per-use fee',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'How to Build a Smart Home With Zero Subscriptions (2026)',
      description: 'Build a smart home with zero subscriptions: local-capable devices, a local hub, and local camera storage replace monthly fees with one-time hardware costs.',
      url: 'https://www.promptquorum.com/smart-home/smart-home-without-subscriptions',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home subscriptions' }, { '@type': 'Thing', name: 'Local storage' }, { '@type': 'Thing', name: 'Frigate' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which smart home devices have no fees?', acceptedAnswer: { '@type': 'Answer', text: 'Devices using Zigbee, Z-Wave, or Matter, or local-Wi-Fi devices with a local API, charge no recurring fees because they work through a local hub. Fees almost always come from cloud cameras and premium features.' } },
        { '@type': 'Question', name: 'Can I store camera footage without a subscription?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Record RTSP or PoE cameras locally with Frigate to your own storage for recording and AI detection with no subscription. Footage stays in your home.' } },
        { '@type': 'Question', name: 'How much do I save long-term?', acceptedAnswer: { '@type': 'Answer', text: 'Savings grow over time because you replace recurring monthly fees with a one-time hardware cost. The local setup is typically cheaper the longer you run it.' } },
        { '@type': 'Question', name: 'Are there hidden costs to a no-subscription smart home?', acceptedAnswer: { '@type': 'Answer', text: 'The main cost is upfront hardware (hub, detection accelerator, storage) plus setup time. After that, core control, automations, and local camera recording run with no recurring fees.' } },
      ],
    },
  },
}
