import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    // Verified 2026-07-16 directly against nvidia.com's own product page for the Jetson Orin Nano
    // Super Developer Kit (price and specs), Ollama's official Jetson documentation
    // (jetson-ai-lab.com/tutorials/ollama) for LLM support, and Frigate's own GitHub discussion #13081
    // for the hardware-acceleration friction note. This article stays informational — no affiliateLinks —
    // per scope: only the 6 named Buyer's-Guide slugs carry affiliate links, not every article that
    // mentions a specific product.
    title: 'NVIDIA Jetson Orin Nano for Smart Home AI: Review (2027)',
    seoTitle: 'Jetson Orin Nano for Smart Home AI (2027)',
    intro:
      'The NVIDIA Jetson Orin Nano Super Developer Kit ($249, 8GB) is a GPU-inference edge board — a fundamentally different hardware class from the x86 mini-PCs reviewed elsewhere in this cluster — built around CUDA/TensorRT-accelerated inference rather than general-purpose computing. Ollama has official Jetson support, and Frigate can use its GPU via a dedicated TensorRT build, though both come with more setup friction than the x86 path. This review scopes who it fits versus the existing x86 mini-PC roundup.',
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
      '**The NVIDIA Jetson Orin Nano Super Developer Kit ($249, 8GB LPDDR5, 67 INT8 TOPS) is a GPU-inference edge board, a genuinely different hardware class from the x86 mini-PCs (Beelink, GEEKOM, GMKtec, Minisforum) reviewed elsewhere in this cluster — it fits edge-AI enthusiasts wanting CUDA-accelerated local LLM or Frigate inference, not general HA-hub buyers.** Ollama and Frigate both have Jetson-specific support paths, but with more setup friction than the x86 route.',
    quickAnswerTop: {
      en: {
        question: 'Is the Jetson Orin Nano good for Home Assistant and local AI?',
        answer:
          "The Jetson Orin Nano Super Developer Kit ($249) is built around CUDA/TensorRT GPU acceleration for AI inference specifically, rather than being a general-purpose computer the way the x86 mini-PCs reviewed elsewhere in this cluster are. Ollama has official Jetson support (its own installer or a JetPack-specific tarball, not the generic ARM64 build), and Frigate can use the Jetson's GPU via a dedicated TensorRT build — though a public Frigate GitHub discussion (#13081) documents real setup friction getting hardware acceleration working, and current limitations with multiple cameras or higher-resolution detection models. It fits buyers who specifically want CUDA-accelerated inference and are comfortable with NVIDIA's JetPack ecosystem, rather than buyers who just want a straightforward Home Assistant hub — for that, an x86 mini-PC (see the roundup) is the simpler choice.",
        bullets: [
          'Hardware class: GPU-inference edge board (CUDA/TensorRT), not a general-purpose x86 mini-PC',
          'Jetson Orin Nano Super Developer Kit: $249, 8GB LPDDR5, 67 INT8 TOPS, 6-core Arm Cortex-A78AE CPU (verified 2026-07-16 on nvidia.com)',
          'Ollama: official Jetson support via its own installer or the JetPack 6 tarball (the generic ARM64 tarball lacks Orin GPU support)',
          'Frigate: works via a dedicated TensorRT build, but real setup friction is documented (Frigate GitHub discussion #13081) — not as plug-and-play as the Hailo M.2/Intel iGPU path',
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
          "The Jetson Orin Nano Super Developer Kit ($249, 8GB, 67 INT8 TOPS) is a CUDA/TensorRT GPU-inference edge board — a different hardware class from the x86 mini-PCs (Beelink, GEEKOM, GMKtec, Minisforum) reviewed elsewhere",
          'Best fit: edge-AI enthusiasts wanting CUDA-accelerated local LLM or Frigate inference specifically, comfortable with the JetPack software ecosystem',
          "Not a replacement recommendation for general Home Assistant hub buyers — see the x86 mini-PC roundup for that use case instead",
          'Ollama has official Jetson support; Frigate works via a TensorRT build but with documented setup friction (Frigate GitHub discussion #13081)',
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
          "The Super Developer Kit's SoM packs 1024 CUDA cores and 32 tensor cores alongside the 6-core Cortex-A78AE CPU and 8GB of 128-bit LPDDR5 (102 GB/s memory bandwidth) — specs confirmed directly against NVIDIA's own product page, not carried over from an earlier Jetson generation.",
        ],
      },
      runningHomeAssistant: {
        id: 'running-home-assistant',
        title: 'Running Home Assistant on a Jetson',
        content:
          '**Home Assistant runs on a Jetson Orin Nano as a standard Linux-hosted install, but the board\'s ARM architecture and Jetson-specific OS image mean less plug-and-play familiarity than an x86 mini-PC for buyers used to standard PC hardware.**',
        items: [
          'Setup generally requires working with NVIDIA\'s JetPack OS image and ARM-specific package availability, which is a less mainstream path than installing Home Assistant OS on standard x86 hardware.',
          "Home Assistant itself doesn't publish a Jetson-specific install image the way it does for a Raspberry Pi or generic x86 hardware — running it means installing as a generic Linux container or Supervised setup on top of JetPack, which takes more manual steps than the x86 getting-started path.",
          'If straightforward Home Assistant installation is your priority over AI acceleration, an x86 mini-PC (see the getting-started guide and hardware guide) is the more mainstream, better-documented path.',
        ],
      },
      llmFrigatePerformance: {
        id: 'llm-frigate-performance',
        title: 'Local LLM and Frigate Performance',
        content:
          '**The Jetson\'s GPU is built for accelerated inference, which can benefit both local LLM inference and Frigate object detection — but real-world performance depends heavily on current software-stack compatibility, which should be checked rather than assumed.**',
        items: [
          "Ollama has an official Jetson support path (its own installer, or a Docker container, documented on NVIDIA's own Jetson AI Lab site) — but the generic ARM64 Ollama tarball lacks Orin GPU acceleration; you need the JetPack-specific build for CUDA-accelerated inference to actually work, not just the standard install.",
          "For LLM sizing on the 8GB Super Developer Kit: NVIDIA's own guidance puts this class of board at up to roughly 4B-parameter models (e.g., Gemma-3 4B) at usable speed — larger models will be slow or won't fit, similar to the RAM-sizing trade-offs already covered in the small language models guide.",
          "Frigate supports the Jetson via a dedicated TensorRT-JP6 build with YOLOv9 ONNX models, but a public Frigate GitHub discussion (#13081) documents real friction getting hardware acceleration working at all, plus current limitations with multiple cameras or higher-resolution (640x640) detection models — compare this against the Intel iGPU/Hailo M.2 path in the best hardware guide, which has a more established, lower-friction track record in this cluster.",
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
          "At $249, the Super Developer Kit sits below the Beelink SER8 (~$649) reviewed elsewhere in this cluster, but that price gets you a narrower-purpose board with a less mature Home Assistant/Frigate setup path — weigh the lower cost against the added setup friction documented above, not just the price tag alone.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is the Jetson Orin Nano a replacement for the mini-PC roundup?', a: 'No — it\'s a genuinely different hardware class (GPU-inference edge board vs. general-purpose x86 mini PC) serving a different buyer intent, not a 6th entry in that roundup.' },
          { q: 'Can I run Ollama on a Jetson Orin Nano?', a: "Yes — Ollama has an official Jetson support path with its own installer or Docker container, documented on NVIDIA's Jetson AI Lab site. Use the JetPack-specific build, not the generic ARM64 tarball, which lacks Orin GPU acceleration." },
          { q: 'Is this a good first Home Assistant hub for a beginner?', a: "Not recommended as a first choice — Home Assistant OS doesn't publish a Jetson-specific install image (its official board list covers Raspberry Pi, generic x86-64, ODROID, and Tinker Board), so running it means a more manual Linux/Supervised install on top of JetPack. See the getting-started guide for the more common x86/Pi path." },
          { q: 'Does the Jetson accelerate Frigate better than a Hailo M.2 module?', a: "Not necessarily — Frigate does have a Jetson-specific TensorRT build, but a public Frigate GitHub discussion (#13081) documents real friction getting hardware acceleration working, plus current limits with multiple cameras or higher-resolution models. The Hailo M.2 path (see the best hardware guide) has a more established, lower-friction track record in this cluster." },
          { q: 'What is JetPack?', a: "NVIDIA's software stack for Jetson boards, bundling the Linux-based OS, CUDA, and AI libraries. The Jetson Orin Nano Super Developer Kit ships running JetPack — check NVIDIA's current JetPack release notes for compatibility with the specific tools (Ollama, Frigate) you intend to run, since minimum JetPack versions matter for GPU support." },
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
        { '@type': 'Question', name: 'Can I run Ollama on a Jetson Orin Nano?', acceptedAnswer: { '@type': 'Answer', text: "Yes — Ollama has an official Jetson support path with its own installer or Docker container. Use the JetPack-specific build, not the generic ARM64 tarball." } },
        { '@type': 'Question', name: 'Is this a good first Home Assistant hub for a beginner?', acceptedAnswer: { '@type': 'Answer', text: "Not recommended as a first choice — Home Assistant OS doesn't publish a Jetson-specific install image, so running it means a more manual install on top of JetPack." } },
        { '@type': 'Question', name: 'What is JetPack?', acceptedAnswer: { '@type': 'Answer', text: "NVIDIA's software stack for Jetson boards, bundling the Linux-based OS, CUDA, and AI libraries." } },
      ],
    },
  },
}
