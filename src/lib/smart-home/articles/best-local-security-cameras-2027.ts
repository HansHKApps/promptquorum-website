import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    // Verified 2026-07-16 against official manufacturer pages/stores: reolink.com (RLC-810A specs),
    // store.reolink.com (Home Hub Pro price), store.ui.com (UniFi Protect NVR pricing), amcrest.com
    // (ONVIF Profile S/T support claim), and eufy.com/Amazon (HomeBase 3 price). Prices are dated
    // snapshots — retail prices fluctuate; check the linked page at time of purchase.
    title: 'Best Local Security Cameras (2027)',
    seoTitle: 'Best Local Security Cameras (2027)',
    intro:
      'The best local security cameras for a privacy-focused smart home store footage on-device or on your own network storage, without requiring a subscription for basic recording. Reolink, Ubiquiti UniFi Protect, Amcrest, and Eufy each offer confirmed local-storage or local-NVR options without a mandatory cloud subscription (checked 2026-07-16 against official sources; prices are snapshots, not fixed figures). This guide covers what to check for genuine local capability and is a hardware-buying complement to the Frigate how-to guide already on this site.',
    metaDescription:
      'Best local security cameras in 2027: models with genuine on-device or local-network storage, no mandatory cloud subscription. Buying guide, not a Frigate setup tutorial.',
    twitterDescription:
      'Buying guide for local-storage security cameras — no cloud subscription required for basic recording. Complements the Frigate how-to guide.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    audience: 'Smart home buyers choosing camera hardware with genuine local storage capability',
    primaryTerm: 'best local security cameras',
    targetKeywords: [
      'best local security cameras no cloud',
      'local storage security camera 2027',
      'security camera no subscription',
      'onvif camera home assistant',
      'privacy security camera buying guide',
    ],
    leadAnswerBlock:
      '**The best local security cameras support on-device (SD card/NVR) or local-network storage for basic recording without requiring a cloud subscription, and ideally expose a local streaming protocol (RTSP/ONVIF) so Frigate or Home Assistant can pull the feed directly.** Reolink\'s RLC-810A (RTSP confirmed, no subscription for SD recording), Ubiquiti\'s UniFi Protect + UNVR ($299, fully local NVR), Amcrest\'s PoE line (broad ONVIF Profile S/T support), and Eufy\'s HomeBase 3 (~$149, local storage, no monthly fee) are four confirmed current options — checked 2026-07-16, prices are snapshots.',
    quickAnswerTop: {
      en: {
        question: 'Which security cameras work without a cloud subscription?',
        answer:
          'Look for cameras that explicitly support local storage (SD card or NVR) for basic recording, and ideally an open local streaming protocol like RTSP or ONVIF so Frigate can pull the feed for AI detection without any cloud dependency. Confirmed current options (checked 2026-07-16): Reolink\'s cameras ship RTSP on every PoE/Wi-Fi model with no subscription required for local SD/NVR recording; Ubiquiti\'s UniFi Protect records every camera to a local NVR (the entry-level UNVR Instant is $199) with no recurring fee for core functionality; Amcrest\'s PoE line has broad ONVIF Profile S/T support for third-party NVR software; Eufy\'s HomeBase 3 hub (~$149) stores footage locally by default with no monthly fee. Many other consumer brands market "local storage" while still requiring a cloud account for basic viewing — check the manufacturer\'s current documentation, not marketing copy, before buying anything not listed here.',
        bullets: [
          'Required: local storage option (SD card or NVR) that works without an active subscription',
          'Ideal: RTSP or ONVIF local streaming support, for Frigate/Home Assistant integration',
          'Confirmed current options: Reolink (RTSP on every model), Ubiquiti UniFi Protect (local NVR, no core fees), Amcrest (broad ONVIF support), Eufy (local HomeBase hub)',
          'Check: does the camera require a cloud account even for local-only use — some brands not listed here do',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What to Check For', anchor: 'what-to-check' },
      { label: 'Camera Categories', anchor: 'camera-categories' },
      { label: 'How This Differs From the Frigate Guide', anchor: 'differs-from-frigate' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best local security cameras support local storage and ideally RTSP/ONVIF streaming without a mandatory cloud subscription — verify current specific models and their confirmed local-capability before buying.' },
      { type: 'plain-terms', content: 'Many security cameras only really work through the manufacturer\'s app and cloud service, even if they technically have an SD card slot. This guide is about finding cameras where local storage and local access genuinely work as the primary way to use the camera, not as a limited backup option.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Required: local storage (SD card or NVR) usable without an active cloud subscription',
          'Ideal: RTSP or ONVIF streaming support for direct Frigate/Home Assistant integration',
          'Watch for: cameras that require a cloud account even for local-only setup — check current documentation, not marketing copy',
          'Confirmed current picks (checked 2026-07-16): Reolink RLC-810A, Ubiquiti UniFi Protect + UNVR ($299), Amcrest PoE line, Eufy HomeBase 3 (~$149) — prices are snapshots, check the linked page before buying',
          'This is a hardware-buying guide — see the Frigate how-to guide for setting up local AI detection once you have local-capable cameras',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'What to Check For',
        content:
          '**Confirm three things before buying: does local storage work without an active subscription, does the camera expose RTSP or ONVIF for third-party access, and does basic setup require a cloud account at all.**',
        items: [
          'Local storage without subscription: many cameras include an SD card slot but still gate cloud-connected features (or even viewing recent footage) behind a paid plan — check the manufacturer\'s current terms specifically for this.',
          'RTSP/ONVIF support: this is what lets Frigate or Home Assistant pull the camera feed directly for local AI detection — not every "local storage" camera exposes this; some restrict the stream to their own app only.',
          'Cloud-account requirement: some cameras require creating a manufacturer account even if you never intend to use their cloud features — decide if that trade-off (an account, without necessarily paying or storing footage there) is acceptable for your setup.',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: 'Camera Categories',
        content:
          '**Local-capable cameras generally fall into three categories: NVR-based systems (recording to a dedicated local recorder), Wi-Fi cameras with RTSP/ONVIF support, and PoE (Power over Ethernet) cameras — each with different setup trade-offs.**',
        items: [
          'NVR-based systems: typically the most reliably local-first option, since the recorder itself is the local storage and often doesn\'t require any cloud account for basic operation. Ubiquiti\'s UniFi Protect is the clearest example: every camera records to a local NVR (UNVR Instant, $199, up to UNVR Pro/Enterprise tiers for larger installs) with no recurring fee for core functionality, confirmed on Ubiquiti\'s own store.',
          'Wi-Fi cameras with RTSP/ONVIF: convenient wireless installation. Reolink ships RTSP on every PoE and Wi-Fi model per its own support documentation, and doesn\'t gate local SD-card recording behind a subscription — but always check a specific model\'s current firmware notes, since some manufacturers elsewhere in the market have removed RTSP/ONVIF after launch.',
          'PoE cameras: generally the most reliable for continuous local recording since power and data run over one cable, at the cost of needing PoE-capable network switches. Amcrest\'s PoE line has broad ONVIF Profile S and T support (per Amcrest\'s own documentation), commonly used with third-party NVR software like Blue Iris or Synology Surveillance Station, at an average price around $100 per camera (checked 2026-07-16, varies by model).',
          'All-in-one hub systems: Eufy\'s HomeBase 3 (S380, ~$149) stores footage locally by default on up to 16TB of expandable storage, with no monthly fee required — a middle ground between a full NVR and a single standalone camera, confirmed on Eufy\'s own product page.',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'How This Differs From the Frigate Guide',
        content:
          '**This article helps you choose camera hardware; the Frigate guide covers setting up the local AI detection software once you have local-capable cameras.**',
        items: [
          'Read this guide first if you don\'t yet own local-capable cameras and need to choose hardware.',
          'Go to the local AI security cameras with Frigate guide for the software setup — hardware requirements, Home Assistant integration, and detection configuration.',
          'The two are complementary: camera choice determines what\'s possible; Frigate setup determines what you actually configure.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do all cameras with an SD card slot work without a subscription?', a: 'Not necessarily — some gate remote viewing, notifications, or even local playback behind an app-based subscription despite having local storage hardware. Check the specific manufacturer\'s current terms.' },
          { q: 'What is RTSP and why does it matter?', a: 'RTSP (Real Time Streaming Protocol) is an open standard for pulling a camera\'s video stream directly, which is what lets Frigate or Home Assistant access the feed without going through the manufacturer\'s app or cloud service.' },
          { q: 'Are PoE cameras better than Wi-Fi cameras for this?', a: 'PoE cameras are generally more reliable for continuous local recording since they don\'t depend on Wi-Fi stability, but require PoE-capable network hardware. Wi-Fi cameras with confirmed RTSP/ONVIF support are a simpler installation trade-off.' },
          { q: 'Can I add local cameras to an existing cloud-camera setup?', a: 'Yes — you can mix camera types, using local-capable cameras with Frigate for AI detection while keeping any existing cloud cameras separate, though unifying everything under local control is simpler to maintain long-term.' },
          { q: 'Does a local camera setup need internet access?', a: 'No — once configured, local storage and RTSP-based detection work entirely on your local network, though initial setup for some cameras may still require an internet connection for firmware or app registration.' },
          { q: 'Where do I set up AI detection once I have local cameras?', a: 'See the local AI security cameras with Frigate guide for the detection software setup, hardware acceleration options, and Home Assistant integration.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local AI Security Cameras with Frigate](/smart-home/local-ai-security-camera) — the software setup this hardware enables',
          '[Radar Presence Sensing: Room Occupancy Without a Camera](/smart-home/radar-presence-sensing-no-camera) — a camera-free presence-detection alternative',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the broader privacy context for camera choices',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Local Security Cameras (2027)',
      description: 'Best local security cameras: models with genuine on-device or local-network storage, no mandatory cloud subscription.',
      url: 'https://www.promptquorum.com/smart-home/best-local-security-cameras-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Local security camera' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do all cameras with an SD card slot work without a subscription?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily — some gate remote viewing or notifications behind an app-based subscription despite having local storage hardware.' } },
        { '@type': 'Question', name: 'What is RTSP and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'RTSP is an open standard for pulling a camera\'s video stream directly, letting Frigate or Home Assistant access the feed without the manufacturer\'s cloud service.' } },
        { '@type': 'Question', name: 'Does a local camera setup need internet access?', acceptedAnswer: { '@type': 'Answer', text: 'No — once configured, local storage and RTSP-based detection work entirely on your local network.' } },
      ],
    },
  },
}
