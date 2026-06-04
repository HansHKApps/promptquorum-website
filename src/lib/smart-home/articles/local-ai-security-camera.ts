import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Local AI Security Cameras with Frigate (2026)',
    seoTitle: 'Frigate Local AI Cameras 2026: Private Detection',
    intro:
      'Frigate runs local AI object and person detection on your camera feeds with no cloud and no subscription, integrating directly into Home Assistant. This guide covers the cloud-camera privacy problem, what Frigate does, the hardware that accelerates detection (a Coral TPU or GPU), the Home Assistant integration, notifications, and how the cost compares to subscription cameras.',
    metaDescription:
      'Run private AI security cameras with Frigate: local object and person detection, no cloud, no subscription. Hardware, Home Assistant setup, and cost vs cloud.',
    twitterDescription:
      'Frigate gives you private AI security cameras: local person/object detection, no cloud, no subscription, integrated with Home Assistant.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users building private AI camera detection',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate local ai camera home assistant',
      'frigate home assistant',
      'local ai security camera',
      'private security camera no cloud',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**Frigate is an open-source local NVR that runs AI object and person detection on your camera feeds entirely on your own hardware — no cloud, no subscription — and integrates with Home Assistant.** A Coral TPU or GPU accelerates detection so it stays real-time.',
    quickAnswerTop: {
      en: {
        question: 'What is Frigate and how does it give private AI cameras?',
        answer:
          'Frigate is open-source network video recorder software that performs AI object and person detection locally on RTSP camera streams, with no cloud and no subscription. It integrates with Home Assistant for notifications and automations. A Google Coral TPU or a GPU handles detection efficiently so multiple cameras run in real time.',
        bullets: [
          'Local AI detection on your own hardware — no cloud',
          'No subscription; one-time hardware cost',
          'Works with standard RTSP cameras',
          'Integrates with Home Assistant for alerts and automations',
          'A Coral TPU or GPU keeps detection real-time',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Cloud-Camera Problem', anchor: 'cloud-problem' },
      { label: 'What Frigate Does', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Home Assistant Integration', anchor: 'ha-integration' },
      { label: 'Notifications and Automations', anchor: 'notifications' },
      { label: 'Cost vs Cloud Cameras', anchor: 'cost' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate runs local AI person and object detection on your camera feeds with no cloud and no subscription, integrating with Home Assistant.' },
      { type: 'plain-terms', content: 'Most smart cameras send video to a company cloud and charge a monthly fee for AI detection and history. Frigate does the AI detection on your own hardware instead, so footage stays in your home and there is no subscription. It works with standard cameras and plugs into Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Frigate is open-source local NVR software with built-in AI object/person detection',
          'Detection runs on your hardware — footage never leaves the house, no subscription',
          'Works with standard RTSP cameras (wired PoE cameras are most reliable)',
          'A Google Coral TPU or a GPU accelerates detection so many cameras run in real time',
          'Integrates with Home Assistant for notifications, snapshots, and automations',
          'One-time hardware cost replaces recurring cloud-camera fees',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: 'The Cloud-Camera Privacy Problem',
        content:
          '**Cloud cameras upload your footage to a vendor and often lock AI detection and video history behind a subscription.** That means your home video lives on someone else\'s servers and stops working if you cancel.',
        items: [
          '**Footage off-site:** recordings sit in a vendor data centre, exposed to breaches and policy changes — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          '**Subscriptions:** person detection and recording history typically require a monthly fee.',
          '**Lock-in:** features can disappear if the vendor changes plans or shuts the service.',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'What Frigate Does',
        content:
          '**Frigate ingests camera streams, runs AI detection locally to identify people, vehicles, and objects, and records only clips that matter.** It exposes events and snapshots to Home Assistant.',
        items: [
          'Real-time object detection on RTSP streams, filtering false motion (trees, shadows).',
          'Records event clips and snapshots locally; you control retention.',
          'Zones and object filters reduce noise — for example, alert only on people in the driveway.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'What Hardware Does Frigate Need?',
        content:
          '**Frigate runs detection efficiently on a Google Coral TPU or a GPU; CPU-only detection works but limits how many cameras you can run.** Pair it with a host that has enough storage for recordings.',
        items: [
          '**Coral TPU:** a Google Coral USB or M.2 accelerator handles detection for several cameras with low power draw.',
          '**GPU:** a discrete GPU also accelerates detection and is useful if you already run a local LLM on the same box — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          '**Storage:** plan local disk for event recordings; wired PoE cameras give the most reliable streams.',
          '**One box:** Frigate can share a mini PC with Home Assistant — see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant Integration',
        content:
          '**Frigate integrates with Home Assistant so detections become entities you can automate on.** Install Frigate, then add the Frigate integration in Home Assistant.',
        numberedItems: [
          'Run Frigate (as an add-on or container) and point it at your camera RTSP streams.',
          'Configure detectors (Coral/GPU) and detection zones in the Frigate config.',
          'Add the Frigate integration in Home Assistant to expose camera and detection entities.',
          'Use the detection entities in automations and dashboards.',
        ],
      },
      notifications: {
        id: 'notifications',
        title: 'Notifications and Automations',
        content:
          '**Use Frigate detection events to send local notifications with a snapshot and trigger automations — no cloud notification service required.** Combine with a local LLM for natural-language alerts if you want.',
        items: [
          'Send a snapshot notification when a person is detected in a specific zone.',
          'Trigger lights or sirens on detection as a deterministic automation.',
          'Optionally pass an event to a local LLM for a plain-language summary — see [AI automations with a local LLM](/smart-home/ai-automations-local-llm).',
        ],
      },
      cost: {
        id: 'cost',
        title: 'Cost vs Cloud Cameras',
        content:
          '**Frigate replaces recurring cloud-camera fees with a one-time hardware cost (accelerator + storage).** Over time, a no-subscription local setup is cheaper and keeps footage private.',
        columns: ['Aspect', 'Cloud cameras', 'Frigate (local)'],
        rows: [
          { 'Aspect': 'Privacy', 'Cloud cameras': 'Footage on vendor servers', 'Frigate (local)': 'Footage stays in your home' },
          { 'Aspect': 'Subscription', 'Cloud cameras': 'Monthly fee for AI + history', 'Frigate (local)': 'None' },
          { 'Aspect': 'Detection', 'Cloud cameras': 'Cloud AI', 'Frigate (local)': 'Local AI (Coral/GPU)' },
          { 'Aspect': 'Offline', 'Cloud cameras': 'Limited without internet', 'Frigate (local)': 'Works on your LAN' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Do I need a Coral TPU for Frigate?', a: 'Not strictly, but it is recommended. A Google Coral TPU handles AI detection for several cameras efficiently and with low power. A GPU works too, and CPU-only detection is possible but limits how many cameras you can run in real time.' },
          { q: 'Does Frigate work offline?', a: 'Yes. Detection, recording, and Home Assistant notifications all run on your local network, so Frigate keeps working during an internet outage. Only remote viewing from outside the home needs connectivity.' },
          { q: 'Which cameras work with Frigate?', a: 'Frigate works with cameras that provide an RTSP stream, which covers most IP and PoE cameras. Wired PoE cameras give the most reliable streams for continuous detection.' },
          { q: 'Is there a subscription for Frigate?', a: 'No. Frigate is open-source and runs on your hardware with no subscription. You pay a one-time cost for a detection accelerator and storage instead of recurring cloud fees.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — where local cameras fit in the stack',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — accelerators and storage',
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — one box for Frigate + HA',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the problem local cameras solve',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: run a local model on the same box',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local AI Security Cameras with Frigate (2026)',
      description: 'Run private AI security cameras with Frigate: local object and person detection, no cloud, no subscription. Hardware, Home Assistant setup, and cost vs cloud.',
      url: 'https://www.promptquorum.com/smart-home/local-ai-security-camera',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AI security camera' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a Coral TPU for Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Not strictly, but it is recommended. A Google Coral TPU handles AI detection for several cameras efficiently and with low power. A GPU works too; CPU-only is possible but limits camera count.' } },
        { '@type': 'Question', name: 'Does Frigate work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Detection, recording, and Home Assistant notifications run on your local network, so Frigate keeps working during an internet outage.' } },
        { '@type': 'Question', name: 'Which cameras work with Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Cameras that provide an RTSP stream, which covers most IP and PoE cameras. Wired PoE cameras give the most reliable streams.' } },
        { '@type': 'Question', name: 'Is there a subscription for Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'No. Frigate is open-source and runs on your hardware with no subscription — a one-time cost for an accelerator and storage instead of cloud fees.' } },
      ],
    },
  },
}
