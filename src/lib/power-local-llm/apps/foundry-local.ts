// Local AI App Directory — Foundry Local (layer: runtime)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'foundry-local',
  name: 'Foundry Local',
  categories: ['runtimes-managers'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['win', 'mac', 'android'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT (SDK)',
  price: 'free',
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true }, // per learn.microsoft.com/azure/ai-foundry/foundry-local system requirements: 8GB RAM minimum (16GB recommended), 3GB free disk; GPU/NPU acceleration (NVIDIA/AMD/Intel) is optional, CPU execution provider works without one, verified 2026-09-13
  stars: 2541, // github.com/microsoft/Foundry-Local, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['serve', 'build'],
  url: 'foundrylocal.ai',
  reviewSlug: 'foundry-local-review', // dedicated PromptQuorum review
  tagline: {
    en: 'Microsoft\'s on-device AI runtime with SDKs for C#, JavaScript, Rust, and Python',
    de: 'Microsofts On-Device-KI-Laufzeitumgebung mit SDKs für C#, JavaScript, Rust und Python',
    fr: 'Environnement d\'exécution IA sur l\'appareil de Microsoft, avec des SDK pour C#, JavaScript, Rust et Python',
    ja: 'C#、JavaScript、Rust、PythonのSDKを備えたMicrosoftのオンデバイスAIランタイム',
    zh: '微软的设备端AI运行时，提供C#、JavaScript、Rust和Python的SDK',
    es: 'Runtime de IA en el dispositivo de Microsoft, con SDKs para C#, JavaScript, Rust y Python',
    pt: 'Runtime de IA no dispositivo da Microsoft, com SDKs para C#, JavaScript, Rust e Python',
    ar: 'بيئة تشغيل ذكاء اصطناعي على الجهاز من Microsoft مع حزم تطوير لـC# وJavaScript وRust وPython',
    ko: 'C#, JavaScript, Rust, Python용 SDK를 제공하는 Microsoft의 온디바이스 AI 런타임',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
