// Local AI App Directory — SpeechBrain (layer: stt — open-source PyTorch toolkit for speech and text processing)
// Added 2026-10-23 on the owner's request. All facts below read from speechbrain.github.io, github.com/speechbrain/speechbrain
// (README, SECURITY.md, the v1.1.2 release and its notes), pypi.org/project/speechbrain and the Hugging Face organisation on 2026-10-23
// — no hands-on testing. Official website exists (speechbrain.github.io), so `url` is the website and the repo lives in storeLinks.github.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'speechbrain',
  name: 'SpeechBrain',
  categories: ['speech-to-text', 'text-to-speech'],
  interfaces: ['library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'], // README and PyPI classifiers name no operating system; the PyPI wheel is pure Python (speechbrain-1.1.2-py3-none-any.whl), so support follows PyTorch. Listed as the directory's filter default — re-check if the project states otherwise (read 2026-10-23)
  worksWith: ['PyTorch', 'Hugging Face', 'Whisper', 'wav2vec 2.0'],
  engine: 'library',
  license: 'Apache-2.0', // README + GitHub API license field (spdx Apache-2.0) + PyPI metadata, read 2026-10-23; pretrained models carry their own licences
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no minimum stated by the project; needs PyTorch >= 2.7.1 and Python >= 3.8.1 per PyPI; GPU use is for training (README: single and multi-GPU training) — read 2026-10-23
  stars: 11899, // github.com/speechbrain/speechbrain via GitHub API, read 2026-10-23
  addedDate: '2026-10-23',
  status: 'listed',
  uses: ['audio'],
  url: 'speechbrain.github.io',
  storeLinks: {
    github: 'https://github.com/speechbrain/speechbrain',
    web: 'https://speechbrain.github.io/',
  },
  installEffort: 'one-command', // see InstallEffortKey in ./types.ts
  installEvidence: 'README "Install via PyPI": `pip install speechbrain` (PyPI 1.1.2, Apache-2.0, Python >=3.8.1, depends on torch>=2.7.1 and torchaudio>=2.7.1); GitHub Releases v1.1.2 carries no binary assets and no installer or app exists. Recipes need a second path: git clone + `pip install -r requirements.txt` + `pip install --editable .`. checked 2026-10-23',
  tagline: {
    en: 'Open-source PyTorch toolkit for speech recognition, speaker recognition, enhancement and text-to-speech, with over 100 pretrained models',
    de: 'Quelloffenes PyTorch-Toolkit für Spracherkennung, Sprechererkennung, Sprachverbesserung und Sprachsynthese mit über 100 vortrainierten Modellen',
    fr: 'Boîte à outils PyTorch open source pour la reconnaissance vocale, l\'identification du locuteur, l\'amélioration audio et la synthèse vocale, avec plus de 100 modèles préentraînés',
    ja: '音声認識・話者認識・音声強調・音声合成に使えるオープンソースのPyTorchツールキット。100以上の学習済みモデル付き',
    zh: '开源 PyTorch 工具包，涵盖语音识别、说话人识别、语音增强与语音合成，提供 100 多个预训练模型',
    es: 'Kit de herramientas PyTorch de código abierto para reconocimiento de voz, reconocimiento de locutor, mejora de audio y síntesis de voz, con más de 100 modelos preentrenados',
    pt: 'Kit de ferramentas PyTorch de código aberto para reconhecimento de voz, reconhecimento de locutor, melhoria de áudio e síntese de voz, com mais de 100 modelos pré-treinados',
    ar: 'مجموعة أدوات PyTorch مفتوحة المصدر للتعرف على الكلام والمتحدث وتحسين الصوت وتحويل النص إلى كلام، مع أكثر من 100 نموذج مدرّب مسبقًا',
    ko: '음성 인식, 화자 인식, 음성 향상, 음성 합성을 위한 오픈소스 PyTorch 툴킷으로 100개 이상의 사전 학습 모델을 제공합니다',
  },
  reviewSlug: 'speechbrain-review',
  // Comparison attributes (speech-to-text segment): none set. The README lists recipes for diarization and a streaming/real-time
  // goal only under "Future Plans", and states no language count, CPU-only mode or local server, so every key stays unset
  // (not stated, never false). Re-check when the project documents them.
  compare: {},
  pqReview: {
    date: '2026-10-23',
    version: '1.1.2',
    versionSourceUrl: 'https://github.com/speechbrain/speechbrain/releases/tag/v1.1.2',
  },
  verdict: 'Best for researchers, students and developers who want to train, fine-tune or script speech and text models in PyTorch with reproducible recipes; not a download-and-dictate app, and it needs Python and PyTorch skills.',
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-14', // GitHub: release v1.1.2 published 2026-10-14T23:27:34Z (latest push 2026-10-14T23:12:55Z), read via the GitHub API 2026-10-23
  lastUpstreamUpdateSource: 'https://github.com/speechbrain/speechbrain/releases/tag/v1.1.2',
}
