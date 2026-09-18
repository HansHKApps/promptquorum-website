// Local AI App Directory — DreamServer (layer: runtime / stack manager)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// DreamServer is the CURRENT product name of this project; it was also
// historically called "ODS" (Open Data Stack). The GitHub repo itself is
// still hosted as github.com/Osmantic/ODS (a prior Light-Heart-Labs/DreamServer
// path now redirects there per the GitHub API) — listed once here as
// DreamServer, not duplicated as a separate ODS entry — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'dreamserver',
  name: 'DreamServer',
  categories: ['runtimes-managers', 'agent-frameworks'],
  interfaces: ['cli', 'web'],
  locality: 'local',
  platforms: ['linux', 'win', 'mac'], // Linux (NVIDIA + AMD), Windows via WSL2, macOS Apple Silicon — verified 2026-09-18
  worksWith: ['Ollama', 'Open WebUI', 'n8n', 'ComfyUI'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // installs and wires together Ollama/Open WebUI/ComfyUI etc. — hardware floor depends entirely on which components and models the user enables, verified 2026-09-18
  stars: 6566, // github.com/Osmantic/ODS, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'agent', 'image', 'audio', 'build'],
  url: 'github.com/Osmantic/ODS',
  tagline: {
    en: 'One-command local AI server stack that installs and wires together LLM inference, chat UI, voice, agents, workflows, RAG, and image generation',
    de: 'Lokaler KI-Server-Stack per Ein-Befehl-Installation, der LLM-Inferenz, Chat-UI, Sprache, Agenten, Workflows, RAG und Bildgenerierung miteinander verbindet',
    fr: "Pile de serveur IA locale installable en une commande, qui relie inférence LLM, interface de chat, voix, agents, workflows, RAG et génération d'images",
    ja: 'ワンコマンドでLLM推論・チャットUI・音声・エージェント・ワークフロー・RAG・画像生成をまとめて構築するローカルAIサーバースタック',
    zh: '一条命令即可安装的本地AI服务器套件，整合LLM推理、聊天界面、语音、智能体、工作流、RAG与图像生成',
    es: 'Pila de servidor de IA local instalable con un solo comando que conecta inferencia LLM, interfaz de chat, voz, agentes, flujos de trabajo, RAG y generación de imágenes',
    pt: 'Pilha de servidor de IA local instalável com um único comando, que conecta inferência de LLM, interface de chat, voz, agentes, fluxos de trabalho, RAG e geração de imagens',
    ar: 'حزمة خادم ذكاء اصطناعي محلية تُثبَّت بأمر واحد وتربط بين استدلال النماذج اللغوية وواجهة الدردشة والصوت والوكلاء وسير العمل وRAG وتوليد الصور',
    ko: '한 줄 명령으로 설치되는 로컬 AI 서버 스택으로, LLM 추론, 채팅 UI, 음성, 에이전트, 워크플로, RAG, 이미지 생성을 하나로 엮어 준다',
  },
  lastVerifiedDate: '2026-09-18',
}
