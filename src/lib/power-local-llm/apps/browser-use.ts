// Local AI App Directory — Browser Use by Browser Use, Inc. (layer: computer & browser agent; Python library + CLI + hosted cloud)
// Added 2026-11-19 from the research package (localhosted listing; not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-19: maker website (browser-use.com), privacy policy and terms of service, GitHub repository, README, pyproject.toml, LICENSE,
// GitHub Releases (latest 1.0.6), GitHub API (stars, pushed_at, last commit), localhosted.com/browser-use.
// Notes:
// - License: MIT (LICENSE; GitHub API spdx MIT). The hosted Browser Use Cloud and its models are paid services under separate terms.
// - Stars: GitHub API 121481 on 2026-11-19.
// - engine = 'external': no bundled model. Default is the hosted bu-4.0 model on the Browser Use gateway; OpenAI, Anthropic, Google and any Pydantic AI model string
//   work, and the README FAQ shows a local Ollama model through ChatOpenAI(base_url='http://localhost:11434/v1').
// - locality = hybrid: the Python library runs on your machine and can drive a local Chrome/Chromium, but the default browser is a Browser Use Cloud browser and the default
//   model is hosted; page content and screenshots go to the model provider unless you run a local model.
// - HQ country US: the terms of service say "Browser Use is headquartered in the United States" and are governed by California law (courts in San Francisco County);
//   the privacy policy names Browser Use, Inc. as the responsible entity but gives no address.
// - Version: pqReview.version is GitHub release 1.0.6 (published 2026-11-16, also pyproject version). Releases are frequent (1.0.4 on 11-13, 1.0.5 on 11-14).
// - Install effort: terminal-setup (uv add / pip install in Python 3.11+, or `uv tool install browser-use` for the CLI); a fully hosted API needs no install.
// - Compare (autonomous-agents segment): localLlm true and ollama true (README FAQ), webBrowsing true (core purpose). codeExecution: the agent writes Python in a REPL
//   (README: "the model does it in a real browser by writing Python") -> true. memory and sandbox not stated: README says domain restrictions and secret redaction are
//   "not a sandbox" -> sandbox left unset.
// Last upstream update: 2026-11-19 (GitHub pushed_at; latest release 2026-11-16) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'browser-use',
  name: 'Browser Use',
  categories: ['computer-browser-agents', 'autonomous-agents'],
  interfaces: ['library', 'cli'],
  locality: 'hybrid', // library and local Chrome run on your machine; default browser and model are hosted (Browser Use Cloud / bu-4.0); a local Ollama model is possible per the README FAQ
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: ['Ollama', 'OpenAI', 'Anthropic', 'Google Gemini', 'Chrome', 'Claude Code'],
  engine: 'external', // no bundled model: hosted bu-4.0 by default, or OpenAI/Anthropic/Google/any Pydantic AI model, or a local OpenAI-compatible server such as Ollama
  license: 'MIT', // LICENSE and GitHub API: MIT for the open source library; Browser Use Cloud is a separate paid service
  price: 'freemium', // library free; Cloud: $1 free credit per person, then usage-based (website: stealth browsers $0.06 per browser hour, web agents $0.006 per task median)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM/VRAM floor stated; Python 3.11+ (pyproject); a local model's needs depend on the model chosen
  stars: 121481,
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['agent', 'code'],
  url: 'browser-use.com',
  storeLinks: {
    github: 'https://github.com/browser-use/browser-use',
    web: 'https://browser-use.com',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'On 2026-11-19 the README (1.0.6) showed three paths: a hosted cloud API (sign-up, no install), a CLI installed with `uv tool install browser-use==1.0.6`, and a Python library installed with `uv add` or `pip install browser-use==1.0.6` on Python 3.11 or newer (pyproject requires-python >=3.11,<4.0). No .dmg/.exe installer or store listing was found on the website or GitHub Releases.',
  tagline: {
    en: 'Open-source Python library and CLI that lets an AI model drive a real browser to complete web tasks, with an optional paid cloud browser and hosted agent; works with hosted models or a local Ollama model.',
    de: 'Open-Source-Python-Bibliothek und CLI, mit der ein KI-Modell einen echten Browser steuert, um Web-Aufgaben zu erledigen; optional mit kostenpflichtigem Cloud-Browser und gehostetem Agenten, nutzbar mit gehosteten Modellen oder einem lokalen Ollama-Modell.',
    fr: 'Bibliothèque Python open source et CLI qui permet à un modèle d’IA de piloter un vrai navigateur pour accomplir des tâches web, avec navigateur cloud et agent hébergé payants en option ; fonctionne avec des modèles hébergés ou un modèle Ollama local.',
    ja: 'AIモデルが実際のブラウザを操作してWebタスクを実行する、オープンソースのPythonライブラリとCLI。有料のクラウドブラウザとホスト型エージェントは任意で、ホスト型モデルでもローカルのOllamaモデルでも利用できます。',
    zh: '开源 Python 库和命令行工具，让 AI 模型操控真实浏览器完成网页任务；可选付费云端浏览器和托管智能体，可搭配托管模型或本地 Ollama 模型。',
    es: 'Biblioteca de Python de código abierto y CLI que permite que un modelo de IA controle un navegador real para completar tareas web, con navegador en la nube y agente alojado de pago opcionales; funciona con modelos alojados o con un modelo local de Ollama.',
    pt: 'Biblioteca Python de código aberto e CLI que permite que um modelo de IA controle um navegador real para concluir tarefas na web, com navegador na nuvem e agente hospedado pagos opcionais; funciona com modelos hospedados ou um modelo local do Ollama.',
    ar: 'مكتبة Python مفتوحة المصدر وأداة سطر أوامر تتيح لنموذج ذكاء اصطناعي تشغيل متصفح حقيقي لإنجاز مهام الويب، مع متصفح سحابي ووكيل مستضاف مدفوعين اختياريين؛ تعمل مع نماذج مستضافة أو نموذج Ollama محلي.',
    ko: 'AI 모델이 실제 브라우저를 조작해 웹 작업을 수행하게 하는 오픈소스 Python 라이브러리와 CLI. 유료 클라우드 브라우저와 호스팅 에이전트는 선택 사항이며, 호스팅 모델 또는 로컬 Ollama 모델과 함께 사용할 수 있습니다.',
  },
  compare: { localLlm: true, ollama: true, codeExecution: true, webBrowsing: true }, // verified against the README and FAQ on 2026-11-19; missing key = not stated, never false
  mcpSupport: true, // README: one Browser Use key "also works for the CLI and MCP server"; not tested
  reviewSlug: 'browser-use-review',
  pqReview: {
    date: '2026-11-19',
    version: '1.0.6',
    versionSourceUrl: 'https://github.com/browser-use/browser-use/releases/tag/1.0.6',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://browser-use.com/legal/terms-of-service',
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-19', // GitHub pushed_at 2026-11-19T09:20Z (API, 2026-11-19); latest release 1.0.6 published 2026-11-16
  lastUpstreamUpdateSource: 'https://github.com/browser-use/browser-use (last push 2026-11-19; latest release 1.0.6 on 2026-11-16)',
}
