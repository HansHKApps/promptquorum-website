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
    title: 'NVIDIA Jetson Orin Nano for Smart Home AI: Review (2027)',
    seoTitle: 'Jetson Orin Nano for Smart Home AI (2027)',
    intro:
      'The NVIDIA Jetson Orin Nano is a GPU-inference edge board — a fundamentally different hardware class from the x86 mini-PCs reviewed elsewhere in this cluster — built around CUDA/TensorRT-accelerated inference rather than general-purpose computing. [VERIFY: current Jetson Orin Nano price, exact specs, and current JetPack/CUDA software-stack compatibility with Ollama-class local LLM tooling] before treating any figure below as current — this hardware class\'s software support has moved quickly. This review scopes who it fits versus the existing x86 mini-PC roundup.',
    metaDescription:
      "NVIDIA Jetson Orin Nano for smart home AI in 2027: a GPU-inference edge board, distinct from the x86 mini-PCs reviewed elsewhere. Who it fits and current specs to verify.",
    twitterDescription:
      "The Jetson Orin Nano for Home Assistant + local AI: a CUDA/TensorRT edge board, a different hardware class from the x86 mini-PC reviews on this site.",
    readTime: '7 min read',
    educationalLevel: 'Advanced',
    audience: 'Edge-AI enthusiasts considering a Jetson Orin Nano for Home Assistant + local LLM/Frigate use',
    primaryTerm: 'jetson orin nano home assistant',
    targetKeywords: [
      'jetson orin nano home assistant',
      'jetson orin nano local llm review',
      'nvidia jetson smart home ai',
      'jetson orin nano frigate',
      'edge ai board home assistant',
    ],
    leadAnswerBlock:
      '**The NVIDIA Jetson Orin Nano is a GPU-inference edge board (CUDA/TensorRT-accelerated), a genuinely different hardware class from the x86 mini-PCs (Beelink, GEEKOM, GMKtec, Minisforum) reviewed elsewhere in this cluster — it fits edge-AI enthusiasts wanting CUDA-accelerated local LLM or Frigate inference, not general HA-hub buyers.** [VERIFY: current price, specs, and JetPack/CUDA compatibility with Ollama-class tooling] before treating any figure here as current.',
    quickAnswerTop: {
      en: {
        question: 'Is the Jetson Orin Nano good for Home Assistant and local AI?',
        answer:
          "The Jetson Orin Nano is built around CUDA/TensorRT GPU acceleration for AI inference specifically, rather than being a general-purpose computer the way the x86 mini-PCs reviewed elsewhere in this cluster are. It fits buyers who specifically want CUDA-accelerated local LLM inference or Frigate detection and are comfortable with NVIDIA's Jetson software ecosystem (JetPack), rather than buyers who just want a straightforward Home Assistant hub — for that, an x86 mini-PC (see the roundup) is the simpler choice. [VERIFY: current price, exact specs, and current JetPack/CUDA compatibility with Ollama-class tooling] before purchasing, since Jetson software-stack support has moved quickly.",
        bullets: [
          'Hardware class: GPU-inference edge board (CUDA/TensorRT), not a general-purpose x86 mini-PC',
          'Best fit: edge-AI enthusiasts wanting CUDA-accelerated local LLM or Frigate inference specifically',
          'Not a 6th mini-PC roundup entry — a genuinely distinct buyer intent from general HA-hub buyers',
          '[VERIFY: current price, specs, and JetPack/CUDA/Ollama-class tooling compatibility] before purchasing',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Makes This a Different Hardware Class', anchor: 'different-hardware-class' },
      { label: 'Running Home Assistant on a Jetson', anchor: 'running-home-assistant' },
      { label: 'Local LLM and Frigate Performance', anchor: 'llm-frigate-performance' },
      { label: 'Who This Fits', anchor: 'who-it-fits' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "The NVIDIA Jetson Orin Nano is a CUDA/TensorRT GPU-inference edge board, a distinct hardware class from the x86 mini-PCs reviewed elsewhere in this cluster, fitting edge-AI enthusiasts rather than general Home Assistant hub buyers." },
      { type: 'plain-terms', content: "A regular mini PC is a small general-purpose computer. The Jetson Orin Nano is built specifically around a powerful graphics chip designed for running AI models fast, with NVIDIA's own software tools. It can run Home Assistant, but it's really built for AI workloads first — which is a different trade-off than the mini PCs reviewed elsewhere on this site." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          "The Jetson Orin Nano is a CUDA/TensorRT GPU-inference edge board — a different hardware class from the x86 mini-PCs (Beelink, GEEKOM, GMKtec, Minisforum) reviewed elsewhere",
          'Best fit: edge-AI enthusiasts wanting CUDA-accelerated local LLM or Frigate inference specifically, comfortable with the JetPack software ecosystem',
          "Not a replacement recommendation for general Home Assistant hub buyers — see the x86 mini-PC roundup for that use case instead",
          '[VERIFY: current price, exact specs, and current JetPack/CUDA compatibility with Ollama-class tooling] before purchasing',
        ],
      },
      differentHardwareClass: {
        id: 'different-hardware-class',
        title: 'What Makes This a Different Hardware Class',
        content:
          '**The Jetson Orin Nano centers on an NVIDIA GPU with CUDA/TensorRT acceleration built specifically for AI inference workloads, running NVIDIA\'s own JetPack software stack — a fundamentally different design goal from a general-purpose x86 mini PC.**',
        items: [
          "The x86 mini-PCs reviewed elsewhere in this cluster (Beelink SER8, GEEKOM A9 Max, GMKtec G3 Plus, Minisforum UM890 Pro) run standard operating systems and general software, with Frigate/LLM acceleration coming from an integrated GPU or NPU as a secondary feature.",
          "The Jetson's design center is the opposite: AI inference acceleration is the primary purpose, and general-purpose computing (running Home Assistant itself) is what it also happens to be capable of.",
          '[VERIFY: current specific CUDA compute capability and memory specs] rather than assuming continuity with any earlier Jetson generation\'s specifications.',
        ],
      },
      runningHomeAssistant: {
        id: 'running-home-assistant',
        title: 'Running Home Assistant on a Jetson',
        content:
          '**Home Assistant runs on a Jetson Orin Nano as a standard Linux-hosted install, but the board\'s ARM architecture and Jetson-specific OS image mean less plug-and-play familiarity than an x86 mini-PC for buyers used to standard PC hardware.**',
        items: [
          'Setup generally requires working with NVIDIA\'s JetPack OS image and ARM-specific package availability, which is a less mainstream path than installing Home Assistant OS on standard x86 hardware.',
          '[VERIFY: current specific installation method and any ARM-compatibility caveats] for Home Assistant on the current JetPack release before assuming parity with the x86 install experience covered in the getting-started guide.',
          'If straightforward Home Assistant installation is your priority over AI acceleration, an x86 mini-PC (see the getting-started guide and hardware guide) is the more mainstream, better-documented path.',
        ],
      },
      llmFrigatePerformance: {
        id: 'llm-frigate-performance',
        title: 'Local LLM and Frigate Performance',
        content:
          '**The Jetson\'s GPU is built for accelerated inference, which can benefit both local LLM inference and Frigate object detection — but real-world performance depends heavily on current software-stack compatibility, which should be checked rather than assumed.**',
        items: [
          '[VERIFY: current Ollama or equivalent local-LLM-runner compatibility with the Jetson\'s CUDA stack] — support for consumer local-LLM tools on Jetson hardware has historically lagged behind mainstream x86/CUDA desktop GPU support, and this should be checked against current documentation, not assumed from general Jetson marketing.',
          '[VERIFY: current Frigate hardware-acceleration support for Jetson specifically] versus the Intel iGPU/Hailo M.2 acceleration path covered in the best hardware guide, which is the more established Frigate acceleration route in this cluster.',
          'If your primary goal is Frigate acceleration specifically, compare current Jetson support against the Hailo M.2 module path before assuming the Jetson is automatically the better choice for that specific workload.',
        ],
      },
      whoItFits: {
        id: 'who-it-fits',
        title: 'Who This Fits',
        content:
          '**This board fits buyers who specifically want to experiment with CUDA-accelerated edge AI and are comfortable with NVIDIA\'s Jetson ecosystem — not buyers who want the simplest path to a working Home Assistant hub with cameras.**',
        items: [
          'Good fit: edge-AI enthusiasts, developers already familiar with CUDA/TensorRT, or buyers specifically wanting to experiment with GPU-accelerated local inference on ARM hardware.',
          'Less of a fit: buyers who primarily want a straightforward Home Assistant hub — the x86 mini-PC roundup covers that use case with a more mainstream setup experience.',
          '[VERIFY: current price] relative to the x86 mini-PCs reviewed elsewhere before deciding whether the Jetson\'s AI-acceleration focus justifies its cost and setup complexity for your specific use case.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is the Jetson Orin Nano a replacement for the mini-PC roundup?', a: 'No — it\'s a genuinely different hardware class (GPU-inference edge board vs. general-purpose x86 mini PC) serving a different buyer intent, not a 6th entry in that roundup.' },
          { q: 'Can I run Ollama on a Jetson Orin Nano?', a: '[VERIFY: current compatibility] — support for mainstream local-LLM tools on Jetson\'s ARM/CUDA stack should be checked against current documentation before assuming parity with x86/CUDA desktop support.' },
          { q: 'Is this a good first Home Assistant hub for a beginner?', a: 'Not recommended as a first choice — the ARM architecture and JetPack-specific setup are less mainstream and well-documented for Home Assistant specifically than an x86 mini-PC. See the getting-started guide for the more common path.' },
          { q: 'Does the Jetson accelerate Frigate better than a Hailo M.2 module?', a: '[VERIFY: current comparative Frigate hardware-acceleration support] — the Hailo M.2 path (see the best hardware guide) is more established in this cluster; check current Jetson-specific Frigate support before assuming it\'s superior.' },
          { q: 'What is JetPack?', a: "NVIDIA's software stack for Jetson boards, bundling the OS, CUDA, and AI libraries — [VERIFY: current version and its compatibility with the tools you intend to run] before purchasing based on assumed software support." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — the x86 alternative for general HA-hub buyers',
          '[Best Hardware for a Local Smart Home + Local AI](/smart-home/best-hardware-for-local-smart-home) — the Hailo M.2 Frigate acceleration path',
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — model picks, hardware-agnostic',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'NVIDIA Jetson Orin Nano for Smart Home AI: Review (2027)',
      description: 'NVIDIA Jetson Orin Nano for smart home AI: a GPU-inference edge board, distinct from the x86 mini-PCs reviewed elsewhere.',
      url: 'https://www.promptquorum.com/smart-home/nvidia-jetson-orin-nano-smart-home-review',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'NVIDIA Jetson Orin Nano' }, { '@type': 'Thing', name: 'Edge AI' }, { '@type': 'Thing', name: 'CUDA' }],
      'proficiencyLevel': 'Advanced',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is the Jetson Orin Nano a replacement for the mini-PC roundup?', acceptedAnswer: { '@type': 'Answer', text: 'No — it\'s a genuinely different hardware class serving a different buyer intent, not a 6th entry in that roundup.' } },
        { '@type': 'Question', name: 'Is this a good first Home Assistant hub for a beginner?', acceptedAnswer: { '@type': 'Answer', text: 'Not recommended as a first choice — the ARM architecture and JetPack-specific setup are less mainstream for Home Assistant than an x86 mini-PC.' } },
        { '@type': 'Question', name: 'What is JetPack?', acceptedAnswer: { '@type': 'Answer', text: "NVIDIA's software stack for Jetson boards, bundling the OS, CUDA, and AI libraries." } },
      ],
    },
  },
}
