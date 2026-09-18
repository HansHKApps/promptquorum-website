// Local AI App Directory — Shimmy (layer: inference engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/Michael-A-Kuykendall/shimmy, a Rust
// local-LLM inference server — not the unrelated "shimmy" testing-mock or
// Windows-shim tools of the same name — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'shimmy',
  name: 'Shimmy',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'], // single-binary Rust CLI, distributed via cargo, verified 2026-09-18
  worksWith: ['GGUF', 'SafeTensors'],
  engine: 'builtin',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // a ~5 MB Rust/WebGPU inference server for GGUF/SafeTensors models — footprint depends entirely on the loaded model, verified 2026-09-18
  stars: 5890, // github.com/Michael-A-Kuykendall/shimmy, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'serve'],
  url: 'github.com/Michael-A-Kuykendall/shimmy',
  tagline: {
    en: 'Single-binary, pure-Rust OpenAI-compatible inference server that serves local GGUF and SafeTensors models with no Python or llama.cpp dependency',
    de: 'Einzelbinärer, reiner Rust-Inferenzserver mit OpenAI-Kompatibilität, der lokale GGUF- und SafeTensors-Modelle ohne Python- oder llama.cpp-Abhängigkeit bereitstellt',
    fr: "Serveur d'inférence compatible OpenAI en Rust pur, en un seul binaire, qui sert des modèles GGUF et SafeTensors locaux sans dépendance à Python ou llama.cpp",
    ja: 'PythonやLlama.cppへの依存なしにローカルのGGUF・SafeTensorsモデルを提供する、単一バイナリの純Rust製OpenAI互換推論サーバー',
    zh: '纯Rust单文件二进制、OpenAI兼容的推理服务器，无需Python或llama.cpp依赖即可提供本地GGUF与SafeTensors模型服务',
    es: 'Servidor de inferencia compatible con OpenAI en un solo binario de Rust puro que sirve modelos GGUF y SafeTensors locales sin depender de Python ni llama.cpp',
    pt: 'Servidor de inferência compatível com OpenAI em um único binário Rust puro, que serve modelos GGUF e SafeTensors locais sem depender de Python ou llama.cpp',
    ar: 'خادم استدلال متوافق مع OpenAI مبني بلغة Rust الخالصة في ملف تنفيذي واحد، يقدم نماذج GGUF وSafeTensors المحلية دون الحاجة إلى Python أو llama.cpp',
    ko: 'Python이나 llama.cpp 없이 로컬 GGUF·SafeTensors 모델을 제공하는, 순수 Rust로 작성된 단일 바이너리 OpenAI 호환 추론 서버',
  },
  lastVerifiedDate: '2026-09-18',
}
