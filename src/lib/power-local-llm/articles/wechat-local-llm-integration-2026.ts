import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: 'WeChat + Local LLM Integration: Developer Guide 2026',
    seoTitle: 'WeChat Local LLM Integration 2026: Ollama API Setup',
    intro:
      'Connecting WeChat to a local LLM gives you a private AI assistant that replies in the world\'s most-used messaging app — without sending a single message to a cloud API. This guide covers three integration patterns (WeChatFerry on Windows, HTTP webhook bridge, always-on mini PC server), helps you choose the right Qwen model for Chinese chat, and shows how local inference satisfies China\'s Data Security Law.',
    metaDescription:
      'Connect WeChat to a local LLM in 2026. Three patterns: WeChatFerry, HTTP webhook, mini PC Ollama server. Qwen3 7B for Chinese. No cloud API.',
    twitterDescription:
      'Build a WeChat + local LLM bridge: WeChatFerry, HTTP webhook, or mini PC server. Qwen3 7B for Chinese. No cloud API required.',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'WeChat local LLM integration',
    targetKeywords: [
      'wechat local llm 2026',
      'wechat ollama integration',
      'wechat bot local ai',
      'wechatferry qwen2.5',
      'local llm wechat python',
    ],
    leadAnswerBlock:
      '**Connect WeChat to a local LLM by running Ollama on an always-on mini PC, then bridging WeChat messages to the Ollama HTTP API via WeChatFerry (Windows) or a webhook listener. Qwen3 7B Q4_K_M is the best model for Chinese-language WeChat chat — native CJK tokenisation, 5.5 GB VRAM, and 8–15 tok/s on modest hardware.**',
    quickAnswerTop: {
      en: {
        question: 'How do I connect WeChat to a local LLM?',
        answer:
          'Run Ollama on a mini PC (or localhost), install WeChatFerry to intercept WeChat PC client messages, write a Python bridge that sends messages to Ollama\'s HTTP API at localhost:11434, and return the LLM response to the chat. Qwen3 7B Q4_K_M is the recommended model for Chinese-language chat.',
        bullets: [
          'WeChatFerry: Windows-only WeChat hook; most reliable approach for 2026',
          'Ollama HTTP API: POST to /api/generate — no cloud credentials needed',
          'Qwen3 7B Q4_K_M: 5.5 GB VRAM, native CJK tokenisation, 8–15 tok/s',
          'Mini PC server: Minisforum UM890 Pro runs 24/7 at ~35 W for always-on chat',
          'Privacy: zero data transmitted to WeChat servers or any LLM API',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie verbinde ich WeChat mit einem lokalen LLM?',
        answer:
          'Ollama auf einem Mini-PC betreiben, WeChatFerry für die Windows-WeChat-Client-Integration installieren, Python-Bridge schreiben, die Nachrichten an localhost:11434 weiterleitet, und LLM-Antworten zurück in den Chat senden. Empfohlen: Qwen3 7B Q4_K_M für chinesischen Text.',
        bullets: [
          'WeChatFerry: nur Windows, zuverlässigster Ansatz 2026',
          'Ollama HTTP API: POST an /api/generate — keine Cloud-Zugangsdaten nötig',
          'Qwen3 7B Q4_K_M: 5,5 GB VRAM, native CJK-Tokenisierung',
          'Mini-PC-Server: Minisforum UM890 Pro läuft 24/7 bei ~35 W',
          'Datenschutz: keine Daten an WeChat-Server oder Cloud-APIs',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Comment connecter WeChat à un LLM local ?',
        answer:
          'Exécuter Ollama sur un mini PC, installer WeChatFerry pour intercepter les messages WeChat PC, écrire un bridge Python vers localhost:11434, et renvoyer les réponses du LLM dans la conversation. Modèle recommandé : Qwen3 7B Q4_K_M pour le chinois.',
        bullets: [
          'WeChatFerry : Windows uniquement, approche la plus fiable en 2026',
          'API HTTP Ollama : POST vers /api/generate, aucune clé cloud nécessaire',
          'Qwen3 7B Q4_K_M : 5,5 Go VRAM, tokenisation CJK native',
          'Serveur mini PC : Minisforum UM890 Pro, 24/7 à ~35 W',
          'Confidentialité : aucune donnée transmise vers des APIs cloud',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'WeChatをローカルLLMに接続する方法は？',
        answer:
          'ミニPC上でOllamaを実行し、WeChatFerry（Windows版）でWeChatクライアントメッセージをインターセプト、Pythonブリッジでlocalhost:11434にルーティングし、LLMの応答をチャットに返します。中国語チャットにはQwen3 7B Q4_K_Mを推奨。',
        bullets: [
          'WeChatFerry：Windowsのみ、2026年で最も信頼性の高いアプローチ',
          'Ollama HTTP API：/api/generateへPOST、クラウド認証不要',
          'Qwen3 7B Q4_K_M：5.5 GB VRAM、ネイティブCJKトークン化',
          'ミニPCサーバー：Minisforum UM890 Pro、24/7で~35 W運用',
          'プライバシー：クラウドAPIへのデータ送信なし',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '如何将微信与本地LLM连接？',
        answer:
          '在迷你主机上运行Ollama，安装WeChatFerry钩入微信PC客户端，编写Python桥接脚本将消息路由至localhost:11434，并将LLM回复发回对话。中文聊天推荐Qwen3 7B Q4_K_M模型。',
        bullets: [
          'WeChatFerry：仅限Windows，2026年最可靠的微信集成方案',
          'Ollama HTTP API：POST至/api/generate，无需云端密钥',
          'Qwen3 7B Q4_K_M：5.5 GB显存，原生CJK分词，8–15 tok/s',
          '迷你主机服务器：铭凡UM890 Pro，24/7运行约35 W功耗',
          '隐私保护：符合《数据安全法》，数据不出设备',
        ],
        updatedDate: '2026-05',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Connect WeChat to a local LLM using WeChatFerry and Ollama — messages stay on your hardware, no cloud API required.',
      },
      {
        type: 'plain-terms',
        text: 'This guide shows how to make WeChat automatically reply using a local AI model running on your own computer or mini PC, without any data leaving your network.',
      },
    ],
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Integration Patterns', anchor: 'integration-patterns' },
      { label: 'WeChatFerry Setup', anchor: 'wechatferry' },
      { label: 'Ollama API Bridge', anchor: 'ollama-bridge' },
      { label: 'Mini PC Server', anchor: 'mini-pc-server' },
      { label: 'Model Choice for Chinese', anchor: 'model-choice' },
      { label: 'Group Chat Handling', anchor: 'group-chat' },
      { label: 'Privacy & DSL Compliance', anchor: 'privacy' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry (Windows) is the most reliable WeChat PC hook available in 2026 — runs alongside WeChat without modifying its binary',
          'Ollama exposes a local HTTP API at port 11434 — a 10-line Python script routes WeChat messages to any loaded model',
          'Qwen3 7B Q4_K_M: recommended for Chinese chat — 5.5 GB VRAM, native CJK tokenisation, 8–15 tok/s on mini PC',
          'Always-on mini PC server (Minisforum UM890 Pro, ~35 W): keeps the bot live 24/7 for group and personal chats',
          'Local inference: zero data transmitted to cloud — satisfies China Data Security Law Article 31 for personal data',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: 'Three WeChat + LLM Integration Patterns',
        content: [
          '**Pattern 1 — WeChatFerry + Ollama (Windows):** Most stable. WeChatFerry hooks the official WeChat PC client and exposes a Python SDK. Messages arrive as events; your script calls Ollama\'s HTTP API and sends the reply back. Works for personal and group chats. Requires Windows with WeChat PC installed.',
          '**Pattern 2 — HTTP webhook bridge:** Run a local HTTP server that receives webhook callbacks from a third-party WeChat gateway. More complex to set up but works cross-platform. Suitable for businesses with existing WeChat Official Account infrastructure.',
          '**Pattern 3 — Ollama + Open WebUI forwarding:** Use Open WebUI\'s built-in WeChat notification feature (where available) to push summaries or responses back to a personal WeChat account. Lightweight and no hook required, but only supports one-way notifications.',
          'For most users — especially in China on personal accounts — Pattern 1 (WeChatFerry + Ollama) is the right choice for 2026.',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'WeChatFerry Setup: Step-by-Step',
        numberedItems: [
          'Install WeChat PC (official version from weixin.qq.com) on Windows',
          'Install WeChatFerry: `pip install wcferry` (Python 3.10+)',
          'Start WeChatFerry daemon: `python -m wcferry.daemon`',
          'Write message handler: `from wcferry import Wcf; wcf = Wcf(); wcf.enable_receiving_msg()`',
          'In the message loop, POST to Ollama: `requests.post("http://localhost:11434/api/generate", json={"model":"qwen2.5:7b","prompt":msg.content})`',
          'Send reply: `wcf.send_text(response["response"], msg.roomid or msg.sender)`',
          'Test with a personal message; verify response appears in WeChat within 2–5 seconds',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'Ollama HTTP API: Key Endpoints',
        content: [
          'Ollama runs a local REST server at `http://localhost:11434` after `ollama serve`. No authentication is required for local connections.',
          '**Generate (single turn):** `POST /api/generate` — body: `{model, prompt, stream: false}` — returns `{response, done}`',
          '**Chat (multi-turn):** `POST /api/chat` — body: `{model, messages: [{role, content}]}` — maintains conversation context across calls',
          '**List models:** `GET /api/tags` — returns all installed models with their sizes',
          'For WeChat integration, use `/api/chat` with a rolling conversation history (last 10 messages) to maintain context across a session.',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: 'Mini PC as Always-On WeChat LLM Server',
        content: [
          'A dedicated always-on mini PC keeps your WeChat bot live without tying up a laptop or workstation.',
          '**Minisforum UM890 Pro (Recommended):** AMD Ryzen 9 8945HS, 32–64 GB DDR5, AMD Radeon 780M iGPU. Runs Qwen3 7B at ~8 tok/s via ROCm on Linux. Power draw: ~35 W idle, ~65 W under inference. Price: ~$350–$450.',
          '**Mac Mini M4:** Apple Silicon M4, 16–32 GB unified memory, ~18 tok/s on 7B models via MLX. Power draw: ~20 W idle. Quietest option. Price: ~$599.',
          '**Setup tip:** Enable auto-start — add `ollama serve` and your WeChatFerry bridge script to systemd (Linux) or Windows Task Scheduler. The bot then recovers automatically after power cycles.',
        ],
        comparisonTable: {
          columns: ['Device', 'RAM', 'Speed (7B)', 'Power', 'Price (USD)'],
          rows: [
            { 'Device': 'Minisforum UM890 Pro', 'RAM': '32–64 GB', 'Speed (7B)': '~8 tok/s', 'Power': '35–65 W', 'Price (USD)': '$350–$450' },
            { 'Device': 'Mac Mini M4',          'RAM': '16–32 GB', 'Speed (7B)': '~18 tok/s','Power': '20–40 W', 'Price (USD)': '$599+' },
            { 'Device': 'Beelink SER8',         'RAM': '32 GB',    'Speed (7B)': '~8 tok/s', 'Power': '30–55 W', 'Price (USD)': '$280–$330' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Best Models for Chinese WeChat Chat',
        content: [
          '**Qwen3 7B Q4_K_M (Top Pick):** Built by Alibaba with native CJK tokenisation. 5.5 GB VRAM, 8–15 tok/s. Understands Chinese idioms, classical references, and colloquial phrasing far better than Western-first models. Install: `ollama pull qwen2.5:7b`.',
          '**Qwen3 14B Q4_K_M:** For richer conversations where a mini PC with 12–16 GB RAM is available. 9.5 GB VRAM, 4–8 tok/s. Noticeably better at nuanced Chinese reasoning and multi-turn context.',
          '**DeepSeek-R1-Distill-Qwen-7B:** Good for question-answering and step-by-step explanations in Chinese. Slightly weaker at casual conversation than Qwen3 7B.',
          '**Avoid:** Llama 3 and Mistral — Western-first tokenisers use 2–3× more tokens for Chinese text, leading to slower responses and truncation on long messages.',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: 'Group Chat Handling',
        content: [
          'WeChat group chats require explicit @mention handling. WeChatFerry exposes `msg.is_at` to detect when the bot is mentioned.',
          'Best practice: only respond when `msg.is_at` is True or when the message starts with a trigger keyword. Responding to every group message creates noise and triggers WeChat\'s anti-bot rate limits.',
          'Rate limiting: WeChat may throttle accounts sending more than ~30 messages per minute. Add a 2–3 second delay between bot replies in group contexts.',
          'Context management: for group chats, maintain separate conversation histories per user (keyed by `msg.sender`) to avoid context bleed between participants.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and China Data Security Law Compliance',
        content: [
          'Local inference means prompts, responses, and conversation history never leave your hardware. Neither WeChat Tencent servers nor any LLM cloud API processes the content.',
          '**China Data Security Law (DSL, 2021) Article 31:** Requires that personal data collected or used domestically stays within China\'s jurisdiction. Running your own local LLM ensures inference does not route through foreign cloud providers (OpenAI, Anthropic, Google).',
          '**Cybersecurity Law Article 37:** Critical information infrastructure operators must store data domestically. Local inference satisfies this for personal and SMB use cases.',
          '**What this does NOT cover:** WeChat message metadata (who messaged whom, timestamps) remains on Tencent servers per WeChat\'s Terms of Service — local inference cannot change this. For full privacy, use a local messaging platform instead of WeChat.',
          '**BSI note for DE readers:** DSGVO Article 28 requires data processor agreements. Running local LLMs avoids the need for a DPA with any LLM vendor — a compliance simplification.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does WeChatFerry work with WeChat for Mac?',
            a: 'No. WeChatFerry hooks the Windows WeChat PC client DLLs and does not support WeChat for Mac. On Mac, use a Windows VM or one of the HTTP webhook patterns instead.',
          },
          {
            q: 'Will Tencent ban my account for using a bot?',
            a: 'WeChat\'s ToS prohibits automated messaging at scale. Personal bots with human-like response rates (1–5 messages per minute) rarely trigger bans. Avoid bulk messaging, group spam, or using the bot for commercial outreach.',
          },
          {
            q: 'Which Ollama model is best for Chinese text?',
            a: 'Qwen3 7B Q4_K_M. Built by Alibaba with native CJK tokenisation — 30–40% more efficient on Chinese text than Llama or Mistral models.',
          },
          {
            q: 'Can I run this on a laptop?',
            a: 'Yes. A 16 GB RAM laptop runs Qwen3 7B comfortably at 8–15 tok/s CPU-only. Response latency is 3–8 seconds per message — acceptable for chat.',
          },
          {
            q: 'Does local inference satisfy China Data Security Law?',
            a: 'For inference content (prompts and responses), yes — no data leaves your hardware. WeChat message metadata still resides on Tencent servers per WeChat ToS.',
          },
          {
            q: 'How do I handle multi-turn conversations?',
            a: 'Store conversation history as a Python list of {role, content} dicts keyed by sender. Pass the last 10–15 messages to /api/chat on each request to maintain context.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Reading',
        items: [
          '[WeChat Bot with Local LLM: Personal Assistant Guide](/power-local-llm/wechat-bot-local-llm-personal-assistant-2026) — WeChatFerry deep dive for personal assistant setup',
          '[Best Mini PC for Local LLM](/prompt-bites/best-mini-pc-for-local-llm) — hardware comparison for always-on LLM servers',
          '[Local AI Agents with MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — extend WeChat bots with tool use and automation',
          '[Replace Zapier with Local AI Agents](/power-local-llm/replace-zapier-with-local-ai-agents) — automation workflows triggered by WeChat events',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + Local LLM Integration: Developer Guide 2026',
      description: 'Connect WeChat to a local LLM using WeChatFerry and Ollama. Three integration patterns, model recommendations, mini PC server setup, and China DSL compliance.',
      url: 'https://www.promptquorum.com/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'WeChat API Integration' },
        { '@type': 'Thing', name: 'Local LLM Deployment' },
        { '@type': 'Thing', name: 'China AI Compliance' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WeChatFerry' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'Qwen3 7B' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Does WeChatFerry work with WeChat for Mac?', acceptedAnswer: { '@type': 'Answer', text: 'No. WeChatFerry hooks the Windows WeChat PC client DLLs and does not support WeChat for Mac. On Mac, use a Windows VM or one of the HTTP webhook patterns instead.' } },
        { '@type': 'Question', name: 'Which Ollama model is best for Chinese WeChat chat?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M — built by Alibaba with native CJK tokenisation, 5.5 GB VRAM, and 30–40% more efficient on Chinese text than Llama or Mistral models.' } },
        { '@type': 'Question', name: 'Will Tencent ban my account for using a bot?', acceptedAnswer: { '@type': 'Answer', text: 'Personal bots with human-like response rates (1–5 messages per minute) rarely trigger bans. Avoid bulk messaging or commercial outreach via the bot.' } },
        { '@type': 'Question', name: 'Does local LLM inference satisfy China Data Security Law?', acceptedAnswer: { '@type': 'Answer', text: 'For inference content, yes — no prompts or responses leave your hardware. WeChat metadata still resides on Tencent servers per their ToS.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: 'WeChat + Lokales LLM: Entwicklerleitfaden 2026',
    seoTitle: 'WeChat Lokales LLM Integration 2026 | Ollama API-Brücke',
    intro:
      'WeChat mit einem lokalen LLM zu verbinden ermöglicht einen privaten KI-Assistenten in der meistgenutzten Messaging-App weltweit – ohne eine einzige Nachricht an eine Cloud-API zu senden. Dieser Leitfaden behandelt drei Integrationsmuster, die Modellauswahl für chinesischen Text und wie lokale Inferenz DSGVO- und China-DSL-Anforderungen erfüllt.',
    metaDescription:
      'WeChat mit lokalem LLM verbinden 2026: WeChatFerry (Windows), HTTP-Webhook-Brücke, Mini-PC-Ollama-Server. Qwen3 7B für Chinesisch. Keine Cloud-API.',
    twitterDescription:
      'WeChat + lokales LLM: WeChatFerry, HTTP-Webhook oder Mini-PC-Server. Qwen3 7B für Chinesisch. Keine Cloud-API erforderlich.',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'WeChat lokale LLM-Integration',
    targetKeywords: [
      'wechat lokales llm 2026',
      'wechat ollama integration',
      'wechat bot lokal ki',
    ],
    leadAnswerBlock:
      '**WeChat mit einem lokalen LLM verbinden: Ollama auf einem Mini-PC betreiben, WeChatFerry für die Windows-PC-Client-Integration installieren und eine Python-Brücke zur Ollama HTTP-API schreiben. Empfohlen: Qwen3 7B Q4_K_M für chinesische Konversationen – 5,5 GB VRAM, native CJK-Tokenisierung.**',
    quickAnswerTop: {
      en: {
        question: 'How do I connect WeChat to a local LLM?',
        answer: 'Run Ollama on a mini PC, install WeChatFerry to intercept WeChat PC client messages, write a Python bridge to localhost:11434, and return LLM responses to the chat. Qwen3 7B Q4_K_M is recommended for Chinese.',
        bullets: ['WeChatFerry: Windows-only, most reliable 2026', 'Ollama HTTP API: POST to /api/generate', 'Qwen3 7B Q4_K_M: 5.5 GB VRAM, CJK native'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie verbinde ich WeChat mit einem lokalen LLM?',
        answer: 'Ollama auf Mini-PC, WeChatFerry installieren, Python-Brücke zu localhost:11434, LLM-Antwort zurücksenden. Qwen3 7B Q4_K_M für Chinesisch.',
        bullets: ['WeChatFerry: nur Windows, zuverlässigster Ansatz', 'Ollama HTTP API: POST an /api/generate', 'Qwen3 7B Q4_K_M: 5,5 GB VRAM, CJK-nativ'],
        updatedDate: '2026-05',
      },
      fr: { question: 'Comment connecter WeChat à un LLM local ?', answer: 'Ollama sur mini PC, WeChatFerry, bridge Python vers localhost:11434, réponse renvoyée dans le chat.', bullets: ['WeChatFerry : Windows uniquement', 'Qwen3 7B Q4_K_M recommandé'], updatedDate: '2026-05' },
      ja: { question: 'WeChatをローカルLLMに接続するには？', answer: 'ミニPCでOllamaを実行、WeChatFerryでメッセージをインターセプト、Python経由でlocalhost:11434にルーティング。', bullets: ['WeChatFerry：Windows専用', 'Qwen3 7B Q4_K_M推奨'], updatedDate: '2026-05' },
      zh: { question: '如何将微信连接到本地LLM？', answer: '在迷你主机运行Ollama，安装WeChatFerry，Python脚本路由至localhost:11434。', bullets: ['WeChatFerry：仅限Windows', 'Qwen3 7B Q4_K_M推荐'], updatedDate: '2026-05' },
    },
    snippetBlocks: [
      { type: 'one-sentence', text: 'WeChat mit WeChatFerry und Ollama verbinden – Nachrichten bleiben auf Ihrer eigenen Hardware, keine Cloud-API erforderlich.' },
      { type: 'plain-terms', text: 'Diese Anleitung zeigt, wie WeChat automatisch mit einem lokal laufenden KI-Modell antworten kann, ohne dass Daten das Netzwerk verlassen.' },
    ],
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Integrationsmuster', anchor: 'integration-patterns' },
      { label: 'WeChatFerry-Setup', anchor: 'wechatferry' },
      { label: 'Ollama-API-Brücke', anchor: 'ollama-bridge' },
      { label: 'Mini-PC-Server', anchor: 'mini-pc-server' },
      { label: 'Modellauswahl für Chinesisch', anchor: 'model-choice' },
      { label: 'Gruppenchat', anchor: 'group-chat' },
      { label: 'Datenschutz & DSGVO', anchor: 'privacy' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry (Windows) ist der zuverlässigste WeChat-PC-Hook 2026 – läuft neben WeChat ohne Binärmodifikation',
          'Ollama stellt eine lokale HTTP-API an Port 11434 bereit – 10 Zeilen Python reichen für die Nachrichtenweiterleitung',
          'Qwen3 7B Q4_K_M: empfohlen für chinesischen Chat – 5,5 GB VRAM, native CJK-Tokenisierung, 8–15 tok/s',
          'Always-on Mini-PC-Server (Minisforum UM890 Pro, ~35 W): hält den Bot 24/7 für Gruppen- und Einzelchats aktiv',
          'DSGVO Art. 28: lokale Inferenz vermeidet die Notwendigkeit eines Auftragsverarbeitungsvertrags mit LLM-Anbietern',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: 'Drei WeChat + LLM-Integrationsmuster',
        content: [
          '**Muster 1 – WeChatFerry + Ollama (Windows):** Am stabilsten. WeChatFerry hakt in den WeChat-PC-Client ein und stellt ein Python-SDK bereit. Funktioniert für persönliche Chats und Gruppenchats. Erfordert Windows mit installiertem WeChat PC.',
          '**Muster 2 – HTTP-Webhook-Brücke:** Plattformübergreifend, aber komplexer einzurichten. Geeignet für Unternehmen mit WeChat Official Account Infrastruktur.',
          '**Muster 3 – Ollama + Open WebUI:** Einfachste Option für einseitige Benachrichtigungen. Kein Hook erforderlich, aber kein interaktiver Chat.',
          'Für die meisten Nutzer – besonders in China mit persönlichen Konten – ist Muster 1 (WeChatFerry + Ollama) die richtige Wahl für 2026.',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'WeChatFerry-Setup: Schritt für Schritt',
        numberedItems: [
          'WeChat PC (offizielle Version von weixin.qq.com) auf Windows installieren',
          'WeChatFerry installieren: `pip install wcferry` (Python 3.10+)',
          'WeChatFerry-Daemon starten: `python -m wcferry.daemon`',
          'Nachrichtenhandler schreiben: `from wcferry import Wcf; wcf = Wcf(); wcf.enable_receiving_msg()`',
          'In der Nachrichtenschleife an Ollama senden: `requests.post("http://localhost:11434/api/generate", json={"model":"qwen2.5:7b","prompt":msg.content})`',
          'Antwort senden: `wcf.send_text(response["response"], msg.roomid or msg.sender)`',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'Ollama HTTP-API: Wichtige Endpunkte',
        content: [
          'Ollama betreibt nach `ollama serve` einen lokalen REST-Server unter `http://localhost:11434`. Für lokale Verbindungen ist keine Authentifizierung erforderlich.',
          '**Generieren (ein Zug):** `POST /api/generate` — Body: `{model, prompt, stream: false}` — gibt `{response, done}` zurück',
          '**Chat (mehrere Züge):** `POST /api/chat` — Body: `{model, messages: [{role, content}]}` — behält Gesprächskontext',
          'Für WeChat-Integration `/api/chat` mit rollierendem Verlauf (letzte 10 Nachrichten) verwenden.',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: 'Mini-PC als Always-On-WeChat-LLM-Server',
        content: [
          '**Minisforum UM890 Pro (Empfohlen):** AMD Ryzen 9 8945HS, 32–64 GB DDR5. Qwen3 7B mit ~8 tok/s unter ROCm auf Linux. Stromverbrauch: ~35 W idle. Preis: ca. 320–420 €.',
          '**Mac Mini M4:** Apple Silicon M4, 16–32 GB unified memory, ~18 tok/s via MLX. Stromverbrauch: ~20 W idle. Leiseste Option. Preis: ab 599 €.',
          '**Auto-Start:** `ollama serve` und WeChatFerry-Bridge-Skript in systemd (Linux) oder Windows Task-Planer einbinden.',
        ],
        comparisonTable: {
          columns: ['Gerät', 'RAM', 'Geschwindigkeit (7B)', 'Verbrauch', 'Preis'],
          rows: [
            { 'Gerät': 'Minisforum UM890 Pro', 'RAM': '32–64 GB', 'Geschwindigkeit (7B)': '~8 tok/s',  'Verbrauch': '35–65 W', 'Preis': '320–420 €' },
            { 'Gerät': 'Mac Mini M4',          'RAM': '16–32 GB', 'Geschwindigkeit (7B)': '~18 tok/s', 'Verbrauch': '20–40 W', 'Preis': 'ab 599 €' },
            { 'Gerät': 'Beelink SER8',         'RAM': '32 GB',    'Geschwindigkeit (7B)': '~8 tok/s',  'Verbrauch': '30–55 W', 'Preis': '260–310 €' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Beste Modelle für chinesischen WeChat-Chat',
        content: [
          '**Qwen3 7B Q4_K_M (Erste Wahl):** Von Alibaba mit nativer CJK-Tokenisierung entwickelt. 5,5 GB VRAM, 8–15 tok/s. Versteht chinesische Redewendungen und umgangssprachliche Formulierungen weit besser als westliche Modelle. Installation: `ollama pull qwen2.5:7b`.',
          '**Qwen3 14B Q4_K_M:** Für komplexere Unterhaltungen mit 12–16 GB RAM. 9,5 GB VRAM, 4–8 tok/s.',
          '**Vermeiden:** Llama 3 und Mistral – westliche Tokenizer verwenden 2–3× mehr Token für chinesischen Text.',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: 'Gruppenchat-Behandlung',
        content: [
          'WeChat-Gruppenchats erfordern explizite @Erwähnungs-Behandlung. WeChatFerry stellt `msg.is_at` bereit.',
          'Empfehlung: nur antworten, wenn `msg.is_at` True ist oder eine Trigger-Phrase erkannt wird. Auf jede Gruppennachricht zu antworten löst WeChat-Ratenbegrenzungen aus.',
          'Kontextmanagement: separate Gesprächsverläufe pro Benutzer (nach `msg.sender` indexiert) führen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz & DSGVO-Compliance',
        content: [
          'Lokale Inferenz bedeutet: Prompts, Antworten und Gesprächsverlauf verlassen niemals Ihre Hardware.',
          '**DSGVO Art. 28:** Lokale LLMs vermeiden die Notwendigkeit eines Auftragsverarbeitungsvertrags mit einem LLM-Anbieter – eine wesentliche Compliance-Vereinfachung für Unternehmen.',
          '**BSI-Grundschutz:** Lokale Inferenz erfüllt die Anforderungen an IT-Grundschutz nach BSI-Standard 200-2 für sensible Verarbeitungsprozesse.',
          '**Was dies NICHT abdeckt:** WeChat-Nachrichtenmetadaten verbleiben auf Tencent-Servern gemäß den WeChat-Nutzungsbedingungen.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Funktioniert WeChatFerry mit WeChat für Mac?', a: 'Nein. WeChatFerry hakt in die Windows-WeChat-PC-Client-DLLs ein und unterstützt WeChat für Mac nicht.' },
          { q: 'Sperrt Tencent mein Konto bei Verwendung eines Bots?', a: 'Persönliche Bots mit menschenähnlichen Antwortzeiten (1–5 Nachrichten pro Minute) lösen selten Sperren aus. Massennachrichten vermeiden.' },
          { q: 'Welches Ollama-Modell ist am besten für chinesischen Text?', a: 'Qwen3 7B Q4_K_M von Alibaba – native CJK-Tokenisierung, 30–40 % effizienter bei chinesischem Text als Llama oder Mistral.' },
          { q: 'Kann ich dies auf einem Laptop betreiben?', a: 'Ja. Ein 16 GB RAM Laptop betreibt Qwen3 7B mit 8–15 tok/s (CPU-only). Antwortlatenz: 3–8 Sekunden.' },
          { q: 'Erfüllt lokale Inferenz DSGVO-Anforderungen?', a: 'Lokale LLMs vermeiden Auftragsverarbeitungsverträge mit LLM-Anbietern. WeChat-Metadaten verbleiben auf Tencent-Servern.' },
          { q: 'Wie behandle ich mehrstufige Unterhaltungen?', a: 'Gesprächsverlauf als Python-Liste von {role, content}-Dicts nach Absender indexiert führen und die letzten 10–15 Nachrichten an /api/chat übergeben.' },
        ],
      },
      relatedReading: {
        title: 'Weiterführende Lektüre',
        items: [
          '[WeChat-Bot mit lokalem LLM: Persönlicher Assistent](/de/power-local-llm/wechat-bot-local-llm-personal-assistant-2026) — WeChatFerry-Tieftauchgang für persönliche Assistent-Einrichtung',
          '[Bester Mini-PC für lokale LLMs](/de/prompt-bites/best-mini-pc-for-local-llm) — Hardware-Vergleich für Always-On-LLM-Server',
          '[Lokale KI-Agenten mit MCP 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026) — WeChat-Bots mit Tool-Use erweitern',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + Lokales LLM: Entwicklerleitfaden 2026',
      description: 'WeChat mit lokalem LLM verbinden: WeChatFerry, HTTP-Webhook, Mini-PC-Server. DSGVO-konform, keine Cloud-API.',
      url: 'https://www.promptquorum.com/de/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'WeChat LLM Integration' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'WeChatFerry' }, { '@type': 'SoftwareApplication', name: 'Ollama' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Funktioniert WeChatFerry mit WeChat für Mac?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. WeChatFerry unterstützt nur den Windows WeChat PC Client.' } },
        { '@type': 'Question', name: 'Welches Modell für chinesischen WeChat-Chat?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M – native CJK-Tokenisierung, 5,5 GB VRAM.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: 'WeChat + LLM local : Guide développeur 2026',
    seoTitle: 'Intégration WeChat LLM local 2026 | Pont API Ollama',
    intro:
      'Connecter WeChat à un LLM local offre un assistant IA privé dans l\'application de messagerie la plus utilisée au monde, sans envoyer un seul message à une API cloud. Ce guide couvre trois patterns d\'intégration, le choix du modèle pour le texte chinois, et la conformité RGPD et DSL chinoise.',
    metaDescription:
      'Connecter WeChat à un LLM local en 2026 : WeChatFerry (Windows), pont HTTP webhook, serveur mini PC Ollama. Qwen3 7B pour le chinois. Sans API cloud.',
    twitterDescription:
      'WeChat + LLM local : WeChatFerry, webhook HTTP ou serveur mini PC. Qwen3 7B pour le chinois. Aucune API cloud.',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'intégration WeChat LLM local',
    targetKeywords: ['wechat llm local 2026', 'wechat ollama integration', 'bot wechat ia local'],
    leadAnswerBlock:
      '**Connectez WeChat à un LLM local en exécutant Ollama sur un mini PC, en installant WeChatFerry pour intercepter les messages WeChat PC, et en écrivant un bridge Python vers l\'API HTTP Ollama. Recommandé : Qwen3 7B Q4_K_M pour les conversations en chinois.**',
    quickAnswerTop: {
      en: { question: 'How to connect WeChat to a local LLM?', answer: 'WeChatFerry + Ollama on Windows mini PC.', bullets: ['WeChatFerry: Windows only', 'Qwen3 7B recommended'], updatedDate: '2026-05' },
      de: { question: 'WeChat mit lokalem LLM verbinden?', answer: 'WeChatFerry + Ollama auf Windows Mini-PC.', bullets: ['WeChatFerry: nur Windows', 'Qwen3 7B empfohlen'], updatedDate: '2026-05' },
      fr: {
        question: 'Comment connecter WeChat à un LLM local ?',
        answer: 'Exécuter Ollama sur un mini PC, installer WeChatFerry (Windows), écrire un bridge Python vers localhost:11434, renvoyer les réponses dans WeChat.',
        bullets: ['WeChatFerry : Windows uniquement, solution la plus fiable 2026', 'API HTTP Ollama : POST vers /api/generate sans clé cloud', 'Qwen3 7B Q4_K_M : 5,5 Go VRAM, tokenisation CJK native'],
        updatedDate: '2026-05',
      },
      ja: { question: 'WeChatをローカルLLMに接続するには？', answer: 'WeChatFerry + Ollama on Windows。', bullets: ['WeChatFerry：Windows専用', 'Qwen3 7B推奨'], updatedDate: '2026-05' },
      zh: { question: '如何将微信连接到本地LLM？', answer: 'WeChatFerry + Ollama在Windows迷你主机上。', bullets: ['WeChatFerry：仅限Windows', 'Qwen3 7B推荐'], updatedDate: '2026-05' },
    },
    snippetBlocks: [
      { type: 'one-sentence', text: 'Connecter WeChat à un LLM local avec WeChatFerry et Ollama — les messages restent sur votre matériel, aucune API cloud requise.' },
      { type: 'plain-terms', text: 'Ce guide montre comment faire répondre automatiquement WeChat avec un modèle IA tournant sur votre propre ordinateur, sans que les données quittent votre réseau.' },
    ],
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Patterns d\'intégration', anchor: 'integration-patterns' },
      { label: 'Configuration WeChatFerry', anchor: 'wechatferry' },
      { label: 'Pont API Ollama', anchor: 'ollama-bridge' },
      { label: 'Serveur mini PC', anchor: 'mini-pc-server' },
      { label: 'Choix du modèle pour le chinois', anchor: 'model-choice' },
      { label: 'Chat de groupe', anchor: 'group-chat' },
      { label: 'Confidentialité & RGPD', anchor: 'privacy' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry (Windows) est le hook WeChat PC le plus fiable en 2026',
          'Ollama expose une API HTTP locale sur le port 11434 — 10 lignes de Python suffisent',
          'Qwen3 7B Q4_K_M : recommandé pour le chat en chinois — 5,5 Go VRAM, tokenisation CJK native',
          'Mini PC always-on (Minisforum UM890 Pro, ~35 W) pour un bot disponible 24/7',
          'Inférence locale : zéro donnée transmise vers le cloud — conformité RGPD Art. 28',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: 'Trois patterns d\'intégration WeChat + LLM',
        content: [
          '**Pattern 1 — WeChatFerry + Ollama (Windows) :** Le plus stable. WeChatFerry intercepte le client WeChat PC et expose un SDK Python. Fonctionne pour les chats personnels et de groupe.',
          '**Pattern 2 — Pont HTTP webhook :** Multiplateforme, plus complexe. Adapté aux entreprises avec infrastructure WeChat Official Account.',
          '**Pattern 3 — Ollama + Open WebUI :** Option la plus simple pour des notifications unidirectionnelles. Aucun hook requis.',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'Configuration WeChatFerry : étape par étape',
        numberedItems: [
          'Installer WeChat PC (version officielle depuis weixin.qq.com) sur Windows',
          'Installer WeChatFerry : `pip install wcferry` (Python 3.10+)',
          'Démarrer le daemon : `python -m wcferry.daemon`',
          'Écrire le gestionnaire de messages et router vers Ollama localhost:11434',
          'Envoyer la réponse : `wcf.send_text(response, msg.roomid or msg.sender)`',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'API HTTP Ollama : points de terminaison clés',
        content: [
          'Ollama expose un serveur REST local sur `http://localhost:11434` après `ollama serve`. Aucune authentification requise pour les connexions locales.',
          '**Génération (tour unique) :** `POST /api/generate` — corps : `{model, prompt, stream: false}` — retourne `{response, done}`',
          '**Chat (multi-tours) :** `POST /api/chat` — corps : `{model, messages: [{role, content}]}`',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: 'Mini PC comme serveur WeChat LLM always-on',
        content: [
          '**Minisforum UM890 Pro (Recommandé) :** AMD Ryzen 9 8945HS, 32–64 Go DDR5. ~8 tok/s sur Qwen3 7B. Consommation : ~35 W en veille. Prix : environ 320–420 €.',
          '**Mac Mini M4 :** Apple Silicon M4, 16–32 Go RAM unifiée, ~18 tok/s. Consommation : ~20 W. Prix : à partir de 599 €.',
        ],
        comparisonTable: {
          columns: ['Appareil', 'RAM', 'Vitesse (7B)', 'Consommation', 'Prix'],
          rows: [
            { 'Appareil': 'Minisforum UM890 Pro', 'RAM': '32–64 Go', 'Vitesse (7B)': '~8 tok/s',  'Consommation': '35–65 W', 'Prix': '320–420 €' },
            { 'Appareil': 'Mac Mini M4',          'RAM': '16–32 Go', 'Vitesse (7B)': '~18 tok/s', 'Consommation': '20–40 W', 'Prix': 'à partir de 599 €' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Meilleurs modèles pour le chat WeChat en chinois',
        content: [
          '**Qwen3 7B Q4_K_M (Premier choix) :** Développé par Alibaba avec tokenisation CJK native. 5,5 Go VRAM, 8–15 tok/s. Installation : `ollama pull qwen2.5:7b`.',
          '**Qwen3 14B Q4_K_M :** Pour des conversations plus riches avec 12–16 Go de RAM disponible.',
          '**À éviter :** Llama 3 et Mistral — tokeniseurs occidentaux, 2–3× plus de tokens pour le texte chinois.',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: 'Gestion des chats de groupe',
        content: [
          'Les chats de groupe WeChat nécessitent la gestion des mentions @. WeChatFerry expose `msg.is_at`.',
          'Bonne pratique : répondre uniquement quand `msg.is_at` est True ou lors d\'un mot déclencheur. Maintenir des historiques séparés par utilisateur (`msg.sender`).',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité & conformité RGPD',
        content: [
          'L\'inférence locale signifie que les prompts, réponses et historiques ne quittent jamais votre matériel.',
          '**RGPD Art. 28 :** Les LLM locaux évitent le besoin d\'un accord de traitement des données avec un fournisseur LLM.',
          '**Ce que cela ne couvre PAS :** Les métadonnées des messages WeChat restent sur les serveurs Tencent.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'WeChatFerry fonctionne-t-il avec WeChat pour Mac ?', a: 'Non. WeChatFerry ne supporte que le client WeChat PC sur Windows.' },
          { q: 'Tencent peut-il bannir mon compte pour l\'utilisation d\'un bot ?', a: 'Les bots personnels avec des taux de réponse humains (1–5 messages/min) déclenchent rarement des bannissements.' },
          { q: 'Quel modèle Ollama pour le chinois ?', a: 'Qwen3 7B Q4_K_M — tokenisation CJK native, 30–40% plus efficace que Llama ou Mistral.' },
          { q: 'Puis-je utiliser un laptop ?', a: 'Oui. 16 Go RAM suffit pour Qwen3 7B en mode CPU-only, 8–15 tok/s.' },
          { q: 'Conformité RGPD avec un LLM local ?', a: 'Les LLM locaux évitent les accords DPA avec les fournisseurs cloud. Les métadonnées WeChat restent chez Tencent.' },
          { q: 'Comment gérer les conversations multi-tours ?', a: 'Maintenir l\'historique comme liste de dicts {role, content} par expéditeur, transmettre les 10–15 derniers messages à /api/chat.' },
        ],
      },
      relatedReading: {
        title: 'Lecture connexe',
        items: [
          '[Bot WeChat avec LLM local : Guide assistant personnel](/fr/power-local-llm/wechat-bot-local-llm-personal-assistant-2026)',
          '[Meilleur mini PC pour LLM local](/fr/prompt-bites/best-mini-pc-for-local-llm)',
          '[Agents IA locaux avec MCP 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + LLM local : Guide développeur 2026',
      description: 'Connecter WeChat à un LLM local : WeChatFerry, HTTP webhook, serveur mini PC. Conformité RGPD, aucune API cloud.',
      url: 'https://www.promptquorum.com/fr/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'Intégration WeChat LLM' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'WeChatFerry' }, { '@type': 'SoftwareApplication', name: 'Ollama' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'WeChatFerry fonctionne-t-il sur Mac ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, uniquement sur le client WeChat PC Windows.' } },
        { '@type': 'Question', name: 'Quel modèle pour le texte chinois ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M — tokenisation CJK native, 5,5 Go VRAM.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: 'WeChat + ローカルLLM統合：開発者ガイド 2026',
    seoTitle: 'WeChat × ローカルLLM統合開発ガイド 2026：WeChatFerry & Ollama API連携',
    intro:
      'WeChatをローカルLLMに接続することで、世界最大のメッセージングアプリでプライベートなAIアシスタントが利用可能になります。クラウドAPIへのデータ送信は一切不要です。このガイドでは3つの統合パターン、中国語テキスト向けモデル選択、個人情報保護法対応について解説します。',
    metaDescription:
      '2026年版WeChat統合ガイド：WeChatFerry（Windows専用）、HTTPウェブフックブリッジ、ミニPCサーバーという三つのローカルLLM接続パターンを詳解。中国語チャットにはQwen3 7B推奨。クラウドAPI不要で会話データを完全ローカル保持。',
    twitterDescription:
      'WeChat + ローカルLLM：WeChatFerry、HTTPウェブフック、ミニPCサーバー。Qwen3 7B中国語対応。クラウドAPI不要。',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'WeChat ローカルLLM統合',
    targetKeywords: ['wechat ローカル llm 2026', 'wechat ollama 統合', 'wechat ボット ローカル ai'],
    leadAnswerBlock:
      '**WeChatをローカルLLMに接続するには、ミニPC上でOllamaを実行し、WeChatFerry（Windows版）でWeChat PCクライアントのメッセージをインターセプトし、PythonブリッジでOllama HTTP APIにルーティングします。中国語チャットにはQwen3 7B Q4_K_Mを推奨します。**',
    quickAnswerTop: {
      en: { question: 'How to connect WeChat to local LLM?', answer: 'WeChatFerry + Ollama on Windows.', bullets: ['WeChatFerry: Windows only', 'Qwen3 7B recommended'], updatedDate: '2026-05' },
      de: { question: 'WeChat mit lokalem LLM verbinden?', answer: 'WeChatFerry + Ollama auf Windows.', bullets: ['WeChatFerry: nur Windows'], updatedDate: '2026-05' },
      fr: { question: 'Connecter WeChat au LLM local ?', answer: 'WeChatFerry + Ollama sur Windows.', bullets: ['WeChatFerry : Windows seulement'], updatedDate: '2026-05' },
      ja: {
        question: 'WeChatをローカルLLMに接続するには？',
        answer: 'ミニPC上でOllamaを実行し、WeChatFerry（Windows）でメッセージをインターセプト、Pythonブリッジでlocalhost:11434にルーティングし、LLMの応答をWeChatに返します。',
        bullets: [
          'WeChatFerry：Windowsのみ対応、2026年で最も信頼性の高い手法',
          'Ollama HTTP API：/api/generateへPOST、クラウド認証不要',
          'Qwen3 7B Q4_K_M：5.5 GB VRAM、ネイティブCJKトークン化',
        ],
        updatedDate: '2026-05',
      },
      zh: { question: '如何连接微信和本地LLM？', answer: 'WeChatFerry + Ollama在Windows上。', bullets: ['WeChatFerry：仅Windows'], updatedDate: '2026-05' },
    },
    snippetBlocks: [
      { type: 'one-sentence', text: 'WeChatFerryとOllamaでWeChatをローカルLLMに接続——メッセージは自分のハードウェアに留まり、クラウドAPI不要。' },
      { type: 'plain-terms', text: 'このガイドでは、データがネットワーク外に出ることなく、自分のコンピューター上で動くAIモデルを使ってWeChatが自動返信できるようにする方法を説明します。' },
    ],
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '統合パターン', anchor: 'integration-patterns' },
      { label: 'WeChatFerryセットアップ', anchor: 'wechatferry' },
      { label: 'Ollama APIブリッジ', anchor: 'ollama-bridge' },
      { label: 'ミニPCサーバー', anchor: 'mini-pc-server' },
      { label: '中国語向けモデル選択', anchor: 'model-choice' },
      { label: 'グループチャット対応', anchor: 'group-chat' },
      { label: 'プライバシーと個人情報保護法', anchor: 'privacy' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry（Windows）は2026年で最も信頼性の高いWeChat PCフック',
          'OllamaはポートI11434でローカルHTTP APIを公開——10行のPythonでルーティング可能',
          'Qwen3 7B Q4_K_M：中国語チャットに推奨——5.5 GB VRAM、ネイティブCJKトークン化',
          'Always-onミニPCサーバー（Minisforum UM890 Pro、約35 W）——24/7稼働',
          'ローカル推論：個人情報保護法対応——データは自分のデバイスから出ない',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: 'WeChat + LLM 3つの統合パターン',
        content: [
          '**パターン1 — WeChatFerry + Ollama（Windows）：** 最も安定。WeChatFerryがWeChat PCクライアントにフックし、Python SDKを公開。個人チャットとグループチャット両方に対応。',
          '**パターン2 — HTTPウェブフックブリッジ：** クロスプラットフォーム対応だがセットアップが複雑。WeChat公式アカウントインフラを持つ企業向け。',
          '**パターン3 — Ollama + Open WebUI：** 最もシンプルな一方向通知オプション。フック不要。',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'WeChatFerryセットアップ：ステップバイステップ',
        numberedItems: [
          'WeChat PC（weixin.qq.comの公式版）をWindowsにインストール',
          'WeChatFerryをインストール：`pip install wcferry`（Python 3.10+）',
          'WeChatFerryデーモン起動：`python -m wcferry.daemon`',
          'メッセージハンドラーを作成し、localhost:11434へルーティング',
          '返信送信：`wcf.send_text(response, msg.roomid or msg.sender)`',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'Ollama HTTP API：主要エンドポイント',
        content: [
          'Ollamaは`ollama serve`後に`http://localhost:11434`でローカルRESTサーバーを起動。ローカル接続に認証不要。',
          '**生成（シングルターン）：** `POST /api/generate` — ボディ：`{model, prompt, stream: false}`',
          '**チャット（マルチターン）：** `POST /api/chat` — ボディ：`{model, messages: [{role, content}]}`',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: 'ミニPCをWeChat LLMサーバーとして常時稼働',
        content: [
          '**Minisforum UM890 Pro（推奨）：** AMD Ryzen 9 8945HS、32–64 GB DDR5。Qwen3 7Bで~8 tok/s。消費電力：~35 W。価格：約4.5〜6万円。',
          '**Mac Mini M4：** Apple Silicon M4、16–32 GBユニファイドメモリ、~18 tok/s（MLX経由）。消費電力：~20 W。価格：約9万円〜。',
          '**自動起動：** systemd（Linux）またはWindowsタスクスケジューラーで`ollama serve`とWeChatFerryブリッジを自動起動。',
        ],
        comparisonTable: {
          columns: ['デバイス', 'RAM', '速度 (7B)', '消費電力', '価格'],
          rows: [
            { 'デバイス': 'Minisforum UM890 Pro', 'RAM': '32–64 GB', '速度 (7B)': '~8 tok/s',  '消費電力': '35–65 W', '価格': '4.5〜6万円' },
            { 'デバイス': 'Mac Mini M4',          'RAM': '16–32 GB', '速度 (7B)': '~18 tok/s', '消費電力': '20–40 W', '価格': '約9万円〜' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: '中国語WeChat会話向け最適モデル',
        content: [
          '**Qwen3 7B Q4_K_M（第1推奨）：** Alibabaがネイティブ中国語処理に特化して開発。5.5 GB VRAM、8–15 tok/s。インストール：`ollama pull qwen2.5:7b`。',
          '**Qwen3 14B Q4_K_M：** 12–16 GB RAM環境での充実した会話向け。',
          '**避けるべき：** Llama 3とMistral——中国語テキストに2〜3倍多くのトークンを使用。',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: 'グループチャット対応',
        content: [
          'WeChatグループチャットでは@メンション処理が必要。WeChatFerryは`msg.is_at`を公開。',
          'ベストプラクティス：`msg.is_at`がTrueの時のみ返信。送信者別（`msg.sender`）で会話履歴を管理。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーと個人情報保護法対応',
        content: [
          'ローカル推論により、プロンプト・応答・会話履歴はハードウェア外に出ません。',
          '**個人情報保護法（APPI）：** ローカルLLMはクラウドプロバイダーとの個人情報処理委託契約を不要にします。',
          '**METIガイドライン：** AI製品・サービスの安全・信頼性向上に関するガイドラインにおいて、オンプレミス推論は推奨されるアプローチです。',
          '**カバーされない点：** WeChat メッセージのメタデータはTencent ToSによりTencent サーバーに保存されます。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'WeChatFerryはWeChat for Macで動きますか？', a: 'いいえ。WeChatFerryはWindowsのWeChat PCクライアントDLLをフックするため、Mac版WeChat非対応です。' },
          { q: 'Tencentにアカウントがバンされますか？', a: '人間的な返信レート（1〜5メッセージ/分）のパーソナルボットはほとんどバンされません。大量送信は避けてください。' },
          { q: '中国語向け最適Ollamaモデルは？', a: 'Qwen3 7B Q4_K_M。Alibabaがネイティブ中国語処理向けに開発、5.5 GB VRAM。' },
          { q: 'ノートパソコンで使えますか？', a: 'はい。16 GBのRAMでQwen3 7BをCPU-onlyで8〜15 tok/sで実行可能。応答遅延3〜8秒。' },
          { q: '個人情報保護法への対応は？', a: 'ローカルLLMはクラウドプロバイダーへのデータ転送を回避。WeChatメタデータはTencentサーバーに残ります。' },
          { q: 'マルチターン会話の管理方法は？', a: '送信者別に{role, content}辞書のリストを保持し、最新10〜15メッセージを/api/chatに渡します。' },
        ],
      },
      relatedReading: {
        title: '関連記事',
        items: [
          '[WeChat + ローカルLLM：パーソナルアシスタントガイド](/ja/power-local-llm/wechat-bot-local-llm-personal-assistant-2026)',
          '[ローカルLLM向けベストミニPC](/ja/prompt-bites/best-mini-pc-for-local-llm)',
          '[MCP対応ローカルAIエージェント 2026](/ja/power-local-llm/local-ai-agents-with-mcp-2026)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + ローカルLLM統合：開発者ガイド 2026',
      description: 'WeChatをローカルLLMに接続：WeChatFerry、HTTPウェブフック、ミニPCサーバー。個人情報保護法対応、クラウドAPI不要。',
      url: 'https://www.promptquorum.com/ja/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'WeChat LLM統合' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'WeChatFerry' }, { '@type': 'SoftwareApplication', name: 'Ollama' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'WeChatFerryはMacで動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ、Windows版WeChat PCクライアントのみ対応です。' } },
        { '@type': 'Question', name: '中国語テキスト向け最適モデルは？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M——5.5 GB VRAMのネイティブ中国語対応モデル。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: '微信 + 本地LLM集成：开发者指南 2026',
    seoTitle: '微信接入本地LLM开发指南 2026：WeChatFerry、Webhook与Ollama服务器配置',
    intro:
      '将微信与本地LLM连接，让你在全球最常用的即时通讯应用中拥有私密AI助手——无需向任何云端API发送一条消息。本指南涵盖三种集成方案、中文文本的模型选择，以及如何通过本地推理满足《数据安全法》要求。',
    metaDescription:
      '2026年微信整合本地大模型三种技术路线：WeChatFerry Windows钩子实现自动回复、HTTP Webhook事件驱动桥接、迷你PC专用Ollama服务器。中文对话优先推荐Qwen3 7B Q4_K_M量化版，完全符合《数据安全法》，推理数据完全不离开本地设备。',
    twitterDescription:
      '微信 + 本地LLM：WeChatFerry、HTTP Webhook或迷你主机服务器。Qwen3 7B中文最优。无需云端API。',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: '微信本地LLM集成',
    targetKeywords: ['微信 本地llm 2026', '微信 ollama 集成', '微信机器人 本地ai'],
    leadAnswerBlock:
      '**将微信接入本地LLM：在迷你主机上运行Ollama，安装WeChatFerry钩入微信PC客户端，编写Python桥接脚本将消息路由至Ollama HTTP API。中文聊天推荐Qwen3 7B Q4_K_M——5.5 GB显存，原生CJK分词，8–15 tok/s。**',
    quickAnswerTop: {
      en: { question: 'How to integrate WeChat with local LLM?', answer: 'WeChatFerry + Ollama on Windows mini PC.', bullets: ['WeChatFerry: Windows only', 'Qwen3 7B recommended'], updatedDate: '2026-05' },
      de: { question: 'WeChat mit lokalem LLM?', answer: 'WeChatFerry + Ollama auf Windows Mini-PC.', bullets: ['WeChatFerry: nur Windows'], updatedDate: '2026-05' },
      fr: { question: 'Intégrer WeChat avec LLM local ?', answer: 'WeChatFerry + Ollama sur Windows.', bullets: ['WeChatFerry : Windows seulement'], updatedDate: '2026-05' },
      ja: { question: 'WeChatとローカルLLM統合方法？', answer: 'WeChatFerry + Ollamaを使用。', bullets: ['WeChatFerry：Windows専用'], updatedDate: '2026-05' },
      zh: {
        question: '如何将微信与本地LLM集成？',
        answer: '在迷你主机上运行Ollama，安装WeChatFerry钩入微信PC客户端，编写Python脚本将消息路由至localhost:11434，并将LLM回复发送回对话。',
        bullets: [
          'WeChatFerry：仅限Windows，2026年最稳定的微信集成方案',
          'Ollama HTTP API：POST至/api/generate，无需任何云端密钥',
          'Qwen3 7B Q4_K_M：5.5 GB显存，原生中文分词，速度8–15 tok/s',
          '铭凡UM890 Pro迷你主机：24/7运行仅约35 W功耗',
          '符合《数据安全法》：数据不出设备，不经过境外服务器',
        ],
        updatedDate: '2026-05',
      },
    },
    snippetBlocks: [
      { type: 'one-sentence', text: '通过WeChatFerry和Ollama将微信与本地LLM连接——消息保留在您的硬件上，无需云端API。' },
      { type: 'plain-terms', text: '本指南介绍如何让微信利用本地运行的AI模型自动回复消息，数据全程不离开您的网络。' },
    ],
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '三种集成方案', anchor: 'integration-patterns' },
      { label: 'WeChatFerry配置', anchor: 'wechatferry' },
      { label: 'Ollama API桥接', anchor: 'ollama-bridge' },
      { label: '迷你主机服务器', anchor: 'mini-pc-server' },
      { label: '中文模型选择', anchor: 'model-choice' },
      { label: '群聊处理', anchor: 'group-chat' },
      { label: '隐私与数据安全法合规', anchor: 'privacy' },
      { label: '常见问题', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry（Windows）是2026年最稳定的微信PC客户端钩子——无需修改微信二进制文件',
          'Ollama在11434端口提供本地HTTP API——10行Python即可实现消息路由',
          'Qwen3 7B Q4_K_M：中文聊天首选——5.5 GB显存，原生中文分词，8–15 tok/s',
          '铭凡UM890 Pro迷你主机（~35 W）：24/7群聊和私聊全覆盖',
          '符合《数据安全法》第31条：本地推理，推理内容数据不出设备',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: '微信 + LLM三种集成方案',
        content: [
          '**方案一——WeChatFerry + Ollama（Windows）：** 最稳定。WeChatFerry钩入微信PC客户端并提供Python SDK。支持私聊和群聊。需要安装了微信PC的Windows系统。',
          '**方案二——HTTP Webhook桥接：** 跨平台，但配置较复杂。适合已有微信公众号基础设施的企业。',
          '**方案三——Ollama + Open WebUI通知转发：** 最简单的单向通知选项，无需任何钩子。',
          '对大多数用户——尤其是中国个人账户用户——2026年推荐方案一（WeChatFerry + Ollama）。',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'WeChatFerry配置：分步指南',
        numberedItems: [
          '在Windows上安装微信PC（从weixin.qq.com下载官方版本）',
          '安装WeChatFerry：`pip install wcferry`（Python 3.10+）',
          '启动WeChatFerry守护进程：`python -m wcferry.daemon`',
          '编写消息处理器：`from wcferry import Wcf; wcf = Wcf(); wcf.enable_receiving_msg()`',
          '在消息循环中调用Ollama：`requests.post("http://localhost:11434/api/generate", json={"model":"qwen2.5:7b","prompt":msg.content})`',
          '发送回复：`wcf.send_text(response["response"], msg.roomid or msg.sender)`',
          '用私信测试；验证回复在2–5秒内出现在微信中',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'Ollama HTTP API：核心接口',
        content: [
          'Ollama运行`ollama serve`后在`http://localhost:11434`提供本地REST服务。本地连接无需认证。',
          '**生成（单轮）：** `POST /api/generate` — 请求体：`{model, prompt, stream: false}` — 返回`{response, done}`',
          '**对话（多轮）：** `POST /api/chat` — 请求体：`{model, messages: [{role, content}]}` — 跨请求保持上下文',
          '微信集成建议使用`/api/chat`并维护滚动对话历史（最近10–15条消息）。',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: '迷你主机作为微信LLM常驻服务器',
        content: [
          '**铭凡UM890 Pro（推荐）：** AMD Ryzen 9 8945HS，32–64 GB DDR5。Linux ROCm下Qwen3 7B约8 tok/s。功耗：~35 W待机。价格：约2500–3200元。',
          '**Mac Mini M4：** Apple Silicon M4，16–32 GB统一内存，MLX下~18 tok/s。功耗：~20 W待机。价格：约4399元起。',
          '**自动启动：** 将`ollama serve`和WeChatFerry桥接脚本添加到systemd（Linux）或Windows任务计划程序，断电后自动恢复。',
        ],
        comparisonTable: {
          columns: ['设备', '内存', '速度(7B)', '功耗', '参考价格'],
          rows: [
            { '设备': '铭凡UM890 Pro', '内存': '32–64 GB', '速度(7B)': '~8 tok/s',  '功耗': '35–65 W', '参考价格': '2500–3200元' },
            { '设备': 'Mac Mini M4',   '内存': '16–32 GB', '速度(7B)': '~18 tok/s', '功耗': '20–40 W', '参考价格': '约4399元起' },
            { '设备': '零刻SER8',      '内存': '32 GB',    '速度(7B)': '~8 tok/s',  '功耗': '30–55 W', '参考价格': '1800–2200元' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: '微信中文聊天最佳模型',
        content: [
          '**Qwen3 7B Q4_K_M（首选）：** 阿里巴巴开发，原生中文分词。5.5 GB显存，8–15 tok/s。能理解中文成语、口语和表达，远优于西方优先模型。安装：`ollama pull qwen2.5:7b`。',
          '**Qwen3 14B Q4_K_M：** 适合拥有12–16 GB内存的设备，对话质量明显提升，多轮推理更强。',
          '**DeepSeek-R1-Distill-Qwen-7B：** 中文问答和推理表现良好，日常对话略弱于Qwen3 7B。',
          '**避免使用：** Llama 3和Mistral——西方优先分词器处理中文需要多2–3倍的token，导致速度慢且长消息截断。',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: '群聊处理',
        content: [
          '微信群聊需要处理@提及。WeChatFerry提供`msg.is_at`字段检测是否被@。',
          '最佳实践：仅在`msg.is_at`为True或消息以触发词开头时回复。响应所有群消息会触发微信的反机器人频率限制。',
          '频率限制：微信可能限制每分钟超过约30条消息的账号。群聊中在机器人回复之间添加2–3秒延迟。',
          '上下文管理：按用户（`msg.sender`为键）维护独立对话历史，避免参与者之间的上下文混淆。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与《数据安全法》合规',
        content: [
          '本地推理意味着提示词、回复和对话历史永远不会离开您的硬件。无论是微信腾讯服务器还是任何LLM云端API都不会处理这些内容。',
          '**《数据安全法》（2021年）第31条：** 要求在境内收集或使用的个人数据留存于中国司法管辖范围内。运行本地LLM确保推理不经过境外云服务提供商（OpenAI、Anthropic、Google等）。',
          '**《网络安全法》第37条：** 关键信息基础设施运营者须在境内存储数据。本地推理满足个人和中小企业用例的这一要求。',
          '**注意事项：** 微信消息元数据（谁与谁通信、时间戳）依据微信服务条款仍存储在腾讯服务器上——本地推理无法改变这一点。',
          '**CAC指引：** 中国《互联网信息服务算法推荐管理规定》适用于向公众提供算法推荐服务，不适用于个人或内部使用的本地机器人。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'WeChatFerry支持Mac版微信吗？', a: '不支持。WeChatFerry钩入Windows版微信PC客户端DLL，不支持Mac版微信。Mac用户可使用Windows虚拟机或HTTP Webhook方案。' },
          { q: '使用机器人会被腾讯封号吗？', a: '微信ToS禁止大规模自动发消息。个人机器人以接近人类的回复频率（每分钟1–5条）运行极少触发封号。避免批量发送消息或商业推广。' },
          { q: '微信中文聊天最推荐哪个Ollama模型？', a: 'Qwen3 7B Q4_K_M。阿里巴巴开发的原生中文分词模型，处理中文比Llama或Mistral效率高30–40%。' },
          { q: '可以在笔记本电脑上运行吗？', a: '可以。16 GB内存的笔记本以纯CPU运行Qwen3 7B，速度约8–15 tok/s，每条消息响应延迟3–8秒，可接受用于聊天场景。' },
          { q: '本地推理能满足《数据安全法》要求吗？', a: '对于推理内容（提示词和回复），是的——数据不离开您的设备。微信消息元数据依据微信ToS仍存储在腾讯服务器上。' },
          { q: '如何处理多轮对话？', a: '将对话历史以sender为键存储为Python列表（每项为{role, content}字典），每次请求将最近10–15条消息传递给/api/chat。' },
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[微信机器人与本地LLM：个人助手指南](/zh/power-local-llm/wechat-bot-local-llm-personal-assistant-2026) — WeChatFerry深度个人助手配置',
          '[本地LLM最佳迷你主机](/zh/prompt-bites/best-mini-pc-for-local-llm) — 常驻LLM服务器硬件对比',
          '[本地AI智能体与MCP 2026](/zh/power-local-llm/local-ai-agents-with-mcp-2026) — 为微信机器人添加工具调用能力',
          '[用本地AI智能体替代Zapier](/zh/power-local-llm/replace-zapier-with-local-ai-agents) — 由微信事件触发的自动化工作流',
          '[本地AI防火墙/离线部署2026](/zh/power-local-llm/local-ai-behind-firewall-offline-2026) — 气隙Ollama：网络隔离、审计日志与无互联网设置。',
          '[最佳Qwen编码模型](/zh/prompt-bites/best-qwen-model-for-coding) — Qwen3-Coder集成微信机器人的最优规格选择。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '微信 + 本地LLM集成：开发者指南 2026',
      description: '微信接入本地LLM：WeChatFerry、HTTP Webhook、迷你主机服务器。符合《数据安全法》，无需云端API。',
      url: 'https://www.promptquorum.com/zh/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: '微信LLM集成' },
        { '@type': 'Thing', name: '数据安全法合规' },
        { '@type': 'Thing', name: '本地AI部署' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WeChatFerry' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'Qwen3 7B' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'WeChatFerry支持Mac版微信吗？', acceptedAnswer: { '@type': 'Answer', text: '不支持。WeChatFerry仅支持Windows版微信PC客户端。' } },
        { '@type': 'Question', name: '微信中文聊天推荐哪个模型？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M——5.5 GB显存，原生中文分词，速度8–15 tok/s。' } },
        { '@type': 'Question', name: '本地推理能满足《数据安全法》要求吗？', acceptedAnswer: { '@type': 'Answer', text: '对于推理内容可以——数据不出设备。微信元数据仍在腾讯服务器上。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: 'WeChat + LLM local: Guía para desarrolladores 2026',
    seoTitle: 'Integración WeChat con LLM local 2026 | Puente API Ollama',
    intro:
      'Conectar WeChat a un LLM local te permite tener un asistente de IA privado en la app de mensajería más usada del mundo, sin enviar ni un solo mensaje a una API en la nube. Esta guía cubre tres patrones de integración (WeChatFerry en Windows, puente HTTP webhook, servidor mini PC siempre activo), te ayuda a elegir el modelo Qwen adecuado para chats en chino y muestra cómo la inferencia local cumple con la Ley de Seguridad de Datos de China.',
    metaDescription:
      'Conecta WeChat a un LLM local en 2026. Tres patrones: WeChatFerry, HTTP webhook, servidor Ollama en mini PC. Qwen3 7B para chino. Sin API en la nube.',
    twitterDescription:
      'Crea un puente WeChat + LLM local: WeChatFerry, HTTP webhook o servidor mini PC. Qwen3 7B para chino. Sin API en la nube.',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'integración WeChat LLM local',
    targetKeywords: [
      'wechat llm local 2026',
      'wechat ollama integración',
      'bot wechat ia local',
      'wechatferry qwen2.5',
      'wechat llm python local',
    ],
    leadAnswerBlock:
      '**Conecta WeChat a un LLM local ejecutando Ollama en un mini PC siempre activo, luego enruta los mensajes de WeChat a la API HTTP de Ollama mediante WeChatFerry (Windows) o un listener de webhook. Qwen3 7B Q4_K_M es el mejor modelo para chats en chino en WeChat: tokenización CJK nativa, 5.5 GB de VRAM y 8–15 tok/s en hardware modesto.**',
    quickAnswerTop: {
      en: {
        question: 'How do I connect WeChat to a local LLM?',
        answer:
          'Run Ollama on a mini PC (or localhost), install WeChatFerry to intercept WeChat PC client messages, write a Python bridge that sends messages to Ollama\'s HTTP API at localhost:11434, and return the LLM response to the chat. Qwen3 7B Q4_K_M is the recommended model for Chinese-language chat.',
        bullets: [
          'WeChatFerry: Windows-only WeChat hook; most reliable approach for 2026',
          'Ollama HTTP API: POST to /api/generate — no cloud credentials needed',
          'Qwen3 7B Q4_K_M: 5.5 GB VRAM, native CJK tokenisation, 8–15 tok/s',
          'Mini PC server: Minisforum UM890 Pro runs 24/7 at ~35 W for always-on chat',
          'Privacy: zero data transmitted to WeChat servers or any LLM API',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie verbinde ich WeChat mit einem lokalen LLM?',
        answer:
          'Ollama auf einem Mini-PC betreiben, WeChatFerry installieren, Python-Brücke zu localhost:11434, LLM-Antwort zurücksenden. Qwen3 7B Q4_K_M für Chinesisch.',
        bullets: [
          'WeChatFerry: nur Windows, zuverlässigster Ansatz',
          'Ollama HTTP API: POST an /api/generate',
          'Qwen3 7B Q4_K_M: 5,5 GB VRAM, CJK-nativ',
        ],
        updatedDate: '2026-05',
      },
      fr: { question: 'Comment connecter WeChat à un LLM local ?', answer: 'Ollama sur mini PC, WeChatFerry, bridge Python vers localhost:11434, réponse renvoyée dans le chat.', bullets: ['WeChatFerry : Windows uniquement', 'Qwen3 7B Q4_K_M recommandé'], updatedDate: '2026-05' },
      ja: { question: 'WeChatをローカルLLMに接続するには？', answer: 'ミニPCでOllamaを実行、WeChatFerryでメッセージをインターセプト、Python経由でlocalhost:11434にルーティング。', bullets: ['WeChatFerry：Windows専用', 'Qwen3 7B Q4_K_M推奨'], updatedDate: '2026-05' },
      zh: { question: '如何将微信连接到本地LLM？', answer: '在迷你主机运行Ollama，安装WeChatFerry，Python脚本路由至localhost:11434。', bullets: ['WeChatFerry：仅限Windows', 'Qwen3 7B Q4_K_M推荐'], updatedDate: '2026-05' },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Conecta WeChat a un LLM local con WeChatFerry y Ollama: los mensajes permanecen en tu hardware sin necesidad de una API en la nube.',
      },
      {
        type: 'plain-terms',
        text: 'Esta guía muestra cómo hacer que WeChat responda automáticamente usando un modelo de IA local que corre en tu propio ordenador o mini PC, sin que ningún dato salga de tu red.',
      },
    ],
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Patrones de integración', anchor: 'integration-patterns' },
      { label: 'Configuración de WeChatFerry', anchor: 'wechatferry' },
      { label: 'Puente API Ollama', anchor: 'ollama-bridge' },
      { label: 'Servidor mini PC', anchor: 'mini-pc-server' },
      { label: 'Elección del modelo para chino', anchor: 'model-choice' },
      { label: 'Gestión de chats grupales', anchor: 'group-chat' },
      { label: 'Privacidad y cumplimiento legal', anchor: 'privacy' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry (Windows) es el hook más fiable para el cliente WeChat PC en 2026: se ejecuta junto a WeChat sin modificar su binario',
          'Ollama expone una API HTTP local en el puerto 11434: un script Python de 10 líneas enruta mensajes de WeChat a cualquier modelo cargado',
          'Qwen3 7B Q4_K_M: recomendado para chats en chino — 5.5 GB de VRAM, tokenización CJK nativa, 8–15 tok/s en mini PC',
          'Servidor mini PC siempre activo (Minisforum UM890 Pro, ~35 W): mantiene el bot disponible 24/7 para chats grupales y personales',
          'Inferencia local: cero datos transmitidos a la nube — cumple el Artículo 31 de la Ley de Seguridad de Datos de China para datos personales',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: 'Tres patrones de integración WeChat + LLM',
        content: [
          '**Patrón 1 — WeChatFerry + Ollama (Windows):** El más estable. WeChatFerry intercepta el cliente oficial de WeChat PC y expone un SDK de Python. Los mensajes llegan como eventos; tu script llama a la API HTTP de Ollama y devuelve la respuesta. Funciona para chats personales y grupales. Requiere Windows con WeChat PC instalado.',
          '**Patrón 2 — Puente HTTP webhook:** Ejecuta un servidor HTTP local que recibe callbacks de webhook desde una pasarela WeChat de terceros. Más complejo de configurar, pero funciona en múltiples plataformas. Adecuado para empresas con infraestructura de WeChat Official Account.',
          '**Patrón 3 — Ollama + reenvío Open WebUI:** Usa la función de notificación de WeChat de Open WebUI (cuando está disponible) para enviar resúmenes o respuestas a una cuenta personal de WeChat. Ligero y sin necesidad de hook, pero solo admite notificaciones en un sentido.',
          'Para la mayoría de los usuarios — especialmente en China con cuentas personales — el Patrón 1 (WeChatFerry + Ollama) es la opción correcta para 2026.',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'Configuración de WeChatFerry: paso a paso',
        numberedItems: [
          'Instala WeChat PC (versión oficial de weixin.qq.com) en Windows',
          'Instala WeChatFerry: `pip install wcferry` (Python 3.10+)',
          'Inicia el daemon de WeChatFerry: `python -m wcferry.daemon`',
          'Escribe el manejador de mensajes: `from wcferry import Wcf; wcf = Wcf(); wcf.enable_receiving_msg()`',
          'En el bucle de mensajes, haz POST a Ollama: `requests.post("http://localhost:11434/api/generate", json={"model":"qwen2.5:7b","prompt":msg.content})`',
          'Envía la respuesta: `wcf.send_text(response["response"], msg.roomid or msg.sender)`',
          'Prueba con un mensaje personal; verifica que la respuesta aparece en WeChat en 2–5 segundos',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'API HTTP de Ollama: endpoints principales',
        content: [
          'Ollama ejecuta un servidor REST local en `http://localhost:11434` tras `ollama serve`. No se requiere autenticación para conexiones locales.',
          '**Generación (turno único):** `POST /api/generate` — cuerpo: `{model, prompt, stream: false}` — devuelve `{response, done}`',
          '**Chat (multi-turno):** `POST /api/chat` — cuerpo: `{model, messages: [{role, content}]}` — mantiene el contexto de la conversación entre llamadas',
          '**Listar modelos:** `GET /api/tags` — devuelve todos los modelos instalados con sus tamaños',
          'Para la integración con WeChat, usa `/api/chat` con un historial de conversación rotativo (últimos 10 mensajes) para mantener el contexto durante una sesión.',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: 'Mini PC como servidor WeChat LLM siempre activo',
        content: [
          'Un mini PC dedicado y siempre activo mantiene tu bot de WeChat funcionando sin ocupar un portátil o estación de trabajo.',
          '**Minisforum UM890 Pro (Recomendado):** AMD Ryzen 9 8945HS, 32–64 GB DDR5, iGPU AMD Radeon 780M. Ejecuta Qwen3 7B a ~8 tok/s mediante ROCm en Linux. Consumo: ~35 W en reposo, ~65 W bajo inferencia. Precio: ~$350–$450.',
          '**Mac Mini M4:** Apple Silicon M4, 16–32 GB de memoria unificada, ~18 tok/s en modelos 7B mediante MLX. Consumo: ~20 W en reposo. La opción más silenciosa. Precio: ~$599.',
          '**Consejo de configuración:** Activa el inicio automático — añade `ollama serve` y tu script de puente WeChatFerry a systemd (Linux) o al Programador de tareas de Windows. El bot se recuperará automáticamente tras cada corte de luz.',
        ],
        comparisonTable: {
          columns: ['Dispositivo', 'RAM', 'Velocidad (7B)', 'Consumo', 'Precio (USD)'],
          rows: [
            { 'Dispositivo': 'Minisforum UM890 Pro', 'RAM': '32–64 GB', 'Velocidad (7B)': '~8 tok/s', 'Consumo': '35–65 W', 'Precio (USD)': '$350–$450' },
            { 'Dispositivo': 'Mac Mini M4',          'RAM': '16–32 GB', 'Velocidad (7B)': '~18 tok/s','Consumo': '20–40 W', 'Precio (USD)': '$599+' },
            { 'Dispositivo': 'Beelink SER8',         'RAM': '32 GB',    'Velocidad (7B)': '~8 tok/s', 'Consumo': '30–55 W', 'Precio (USD)': '$280–$330' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Mejores modelos para chats en chino en WeChat',
        content: [
          '**Qwen3 7B Q4_K_M (Primera opción):** Desarrollado por Alibaba con tokenización CJK nativa. 5.5 GB de VRAM, 8–15 tok/s. Entiende modismos chinos, referencias clásicas y frases coloquiales mucho mejor que los modelos centrados en Occidente. Instalación: `ollama pull qwen2.5:7b`.',
          '**Qwen3 14B Q4_K_M:** Para conversaciones más ricas cuando se dispone de un mini PC con 12–16 GB de RAM. 9.5 GB de VRAM, 4–8 tok/s. Notablemente mejor en razonamiento matizado en chino y contexto multi-turno.',
          '**DeepSeek-R1-Distill-Qwen-7B:** Bueno para responder preguntas y explicaciones paso a paso en chino. Ligeramente más débil en conversación casual que Qwen3 7B.',
          '**Evitar:** Llama 3 y Mistral — los tokenizadores centrados en Occidente usan 2–3× más tokens para texto en chino, lo que genera respuestas más lentas y truncamiento en mensajes largos.',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: 'Gestión de chats grupales',
        content: [
          'Los chats grupales de WeChat requieren gestionar las menciones @. WeChatFerry expone `msg.is_at` para detectar cuándo se menciona al bot.',
          'Buena práctica: responder solo cuando `msg.is_at` es True o cuando el mensaje comienza con una palabra clave de activación. Responder a cada mensaje del grupo genera ruido y activa los límites de velocidad anti-bot de WeChat.',
          'Límite de velocidad: WeChat puede limitar cuentas que envíen más de ~30 mensajes por minuto. Añade un retraso de 2–3 segundos entre las respuestas del bot en contextos grupales.',
          'Gestión del contexto: para chats grupales, mantén historiales de conversación separados por usuario (indexados por `msg.sender`) para evitar mezclar el contexto entre participantes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y cumplimiento de la Ley de Seguridad de Datos de China',
        content: [
          'La inferencia local significa que los prompts, las respuestas y el historial de conversación nunca salen de tu hardware. Ni los servidores de Tencent en WeChat ni ninguna API LLM en la nube procesan el contenido.',
          '**Ley de Seguridad de Datos de China (DSL, 2021) Artículo 31:** Exige que los datos personales recopilados o utilizados en territorio chino permanezcan bajo la jurisdicción de China. Ejecutar tu propio LLM local garantiza que la inferencia no se enrute a través de proveedores cloud extranjeros (OpenAI, Anthropic, Google).',
          '**Ley de Ciberseguridad Artículo 37:** Los operadores de infraestructuras de información crítica deben almacenar los datos en territorio nacional. La inferencia local satisface este requisito para casos de uso personal y de pymes.',
          '**Lo que esto NO cubre:** Los metadatos de los mensajes de WeChat (quién envió a quién, marcas de tiempo) permanecen en los servidores de Tencent según los Términos de Servicio de WeChat — la inferencia local no puede cambiar esto. Para privacidad total, usa una plataforma de mensajería local en lugar de WeChat.',
          '**Nota para lectores en España/LATAM:** El RGPD Artículo 28 exige acuerdos con encargados del tratamiento. Ejecutar LLMs locales evita la necesidad de un DPA con cualquier proveedor de LLM — una simplificación de cumplimiento significativa.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿WeChatFerry funciona con WeChat para Mac?',
            a: 'No. WeChatFerry intercepta las DLL del cliente WeChat PC de Windows y no es compatible con WeChat para Mac. En Mac, usa una VM de Windows o uno de los patrones de webhook HTTP.',
          },
          {
            q: '¿Tencent puede banearme la cuenta por usar un bot?',
            a: 'Los Términos de Servicio de WeChat prohíben el envío masivo de mensajes automatizados. Los bots personales con tasas de respuesta similares a las humanas (1–5 mensajes por minuto) raramente provocan bans. Evita el envío masivo, el spam en grupos o usar el bot para promoción comercial.',
          },
          {
            q: '¿Qué modelo de Ollama es mejor para texto en chino?',
            a: 'Qwen3 7B Q4_K_M. Desarrollado por Alibaba con tokenización CJK nativa — entre un 30–40% más eficiente con texto en chino que los modelos Llama o Mistral.',
          },
          {
            q: '¿Puedo ejecutar esto en un portátil?',
            a: 'Sí. Un portátil con 16 GB de RAM ejecuta Qwen3 7B cómodamente a 8–15 tok/s solo con CPU. La latencia de respuesta es de 3–8 segundos por mensaje, aceptable para chat.',
          },
          {
            q: '¿La inferencia local cumple la Ley de Seguridad de Datos de China?',
            a: 'Para el contenido de la inferencia (prompts y respuestas), sí — ningún dato sale de tu hardware. Los metadatos de los mensajes de WeChat siguen residiendo en los servidores de Tencent según sus ToS.',
          },
          {
            q: '¿Cómo gestiono conversaciones multi-turno?',
            a: 'Almacena el historial de conversación como una lista de Python con dicts {role, content} indexados por remitente. Pasa los últimos 10–15 mensajes a /api/chat en cada solicitud para mantener el contexto.',
          },
        ],
      },
      relatedReading: {
        title: 'Lecturas relacionadas',
        items: [
          '[Bot de WeChat con LLM local: Guía de asistente personal](/es/power-local-llm/wechat-bot-local-llm-personal-assistant-2026) — Análisis en profundidad de WeChatFerry para asistentes personales',
          '[Mejor mini PC para LLM local](/es/prompt-bites/best-mini-pc-for-local-llm) — Comparativa de hardware para servidores LLM siempre activos',
          '[Agentes de IA local con MCP 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026) — Amplía los bots de WeChat con uso de herramientas y automatización',
          '[Reemplaza Zapier con agentes de IA local](/es/power-local-llm/replace-zapier-with-local-ai-agents) — Flujos de automatización activados por eventos de WeChat',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + LLM local: Guía para desarrolladores 2026',
      description: 'Conecta WeChat a un LLM local con WeChatFerry y Ollama. Tres patrones de integración, recomendaciones de modelos, configuración de servidor mini PC y cumplimiento de la DSL china.',
      url: 'https://www.promptquorum.com/es/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'Integración WeChat API' },
        { '@type': 'Thing', name: 'Despliegue de LLM local' },
        { '@type': 'Thing', name: 'Cumplimiento de IA en China' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WeChatFerry' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'Qwen3 7B' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿WeChatFerry funciona con WeChat para Mac?', acceptedAnswer: { '@type': 'Answer', text: 'No. WeChatFerry intercepta las DLL del cliente WeChat PC de Windows y no es compatible con WeChat para Mac. En Mac, usa una VM de Windows o un patrón de webhook HTTP.' } },
        { '@type': 'Question', name: '¿Qué modelo de Ollama es mejor para chats en chino en WeChat?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M — desarrollado por Alibaba con tokenización CJK nativa, 5.5 GB de VRAM y entre un 30–40% más eficiente con texto en chino que Llama o Mistral.' } },
        { '@type': 'Question', name: '¿Tencent puede banearme por usar un bot?', acceptedAnswer: { '@type': 'Answer', text: 'Los bots personales con tasas de respuesta similares a las humanas (1–5 mensajes por minuto) raramente provocan bans. Evita el envío masivo o la promoción comercial a través del bot.' } },
        { '@type': 'Question', name: '¿La inferencia local con un LLM cumple la Ley de Seguridad de Datos de China?', acceptedAnswer: { '@type': 'Answer', text: 'Para el contenido de la inferencia, sí — ningún prompt ni respuesta sale de tu hardware. Los metadatos de WeChat siguen residiendo en los servidores de Tencent según sus ToS.' } },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: 'WeChat + 로컬 LLM: 개발자 가이드 2026',
    seoTitle: 'WeChat 로컬 LLM 통합 2026 | Ollama API 브리지',
    intro:
      'WeChat을 로컬 LLM에 연결하면 세계에서 가장 많이 사용되는 메시지 앱에서 개인 AI 비서를 가질 수 있습니다 — 단 하나의 메시지도 클라우드 API로 전송되지 않습니다. 이 가이드는 세 가지 통합 패턴(Windows에서 WeChatFerry, HTTP webhook 브리지, 항상 켜져 있는 미니 PC 서버)을 다루고, 중국어 채팅에 적합한 Qwen 모델 선택을 도와주며, 로컬 추론이 중국 데이터 보안법을 어떻게 준수하는지 보여줍니다.',
    metaDescription:
      '2026년 WeChat을 로컬 LLM에 연결하기. 세 가지 패턴: WeChatFerry, HTTP webhook, 미니 PC Ollama 서버. 중국어에는 Qwen3 7B. 클라우드 API 없음.',
    twitterDescription:
      'WeChat + 로컬 LLM 브리지 만들기: WeChatFerry, HTTP webhook 또는 미니 PC 서버. 중국어에는 Qwen3 7B. 클라우드 API 없음.',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: 'WeChat 로컬 LLM 통합',
    targetKeywords: [
      '위챗 로컬 LLM 2026',
      '위챗 Ollama 통합',
      '위챗 봇 로컬 AI',
      'WeChatFerry Qwen2.5',
      '위챗 LLM Python 로컬',
    ],
    leadAnswerBlock:
      '**항상 켜져 있는 미니 PC에서 Ollama를 실행한 후 WeChatFerry(Windows) 또는 webhook 리스너를 통해 WeChat 메시지를 Ollama HTTP API로 라우팅하여 WeChat을 로컬 LLM에 연결하십시오. Qwen3 7B Q4_K_M은 WeChat에서 중국어 채팅에 최고의 모델입니다: 네이티브 CJK 토큰화, 5.5 GB VRAM, 적당한 하드웨어에서 8–15 tok/s.**',
    quickAnswerTop: {
      ko: {
        question: 'WeChat을 로컬 LLM에 어떻게 연결합니까?',
        answer:
          '미니 PC(또는 localhost)에서 Ollama를 실행하고, WeChatFerry를 설치하여 WeChat PC 클라이언트 메시지를 인터셉트하고, localhost:11434의 Ollama HTTP API로 메시지를 전송하는 Python 브리지를 작성하고, LLM 응답을 채팅으로 반환하십시오. 중국어 채팅에는 Qwen3 7B Q4_K_M을 권장합니다.',
        bullets: [
          'WeChatFerry: Windows 전용 WeChat 훅; 2026년 가장 신뢰할 수 있는 접근 방식',
          'Ollama HTTP API: /api/generate에 POST — 클라우드 자격증명 불필요',
          'Qwen3 7B Q4_K_M: 5.5 GB VRAM, 네이티브 CJK 토큰화, 8–15 tok/s',
          '미니 PC 서버: Minisforum UM890 Pro는 항상 켜진 채팅을 위해 ~35 W로 24/7 실행',
          '개인 정보 보호: WeChat 서버나 어떤 LLM API로도 데이터 전송 없음',
        ],
        updatedDate: '2026-05',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'WeChatFerry와 Ollama로 WeChat을 로컬 LLM에 연결하십시오: 메시지가 클라우드 API 없이 하드웨어에 남아 있습니다.',
      },
      {
        type: 'plain-terms',
        text: '이 가이드는 어떤 데이터도 네트워크를 떠나지 않고 자신의 컴퓨터나 미니 PC에서 실행되는 로컬 AI 모델을 사용하여 WeChat이 자동으로 응답하게 만드는 방법을 보여줍니다.',
      },
    ],
    toc: [
      { label: '핵심 요약', anchor: 'tldr' },
      { label: '통합 패턴', anchor: 'integration-patterns' },
      { label: 'WeChatFerry 설정', anchor: 'wechatferry' },
      { label: 'Ollama API 브리지', anchor: 'ollama-bridge' },
      { label: '미니 PC 서버', anchor: 'mini-pc-server' },
      { label: '중국어 모델 선택', anchor: 'model-choice' },
      { label: '그룹 채팅 처리', anchor: 'group-chat' },
      { label: '개인 정보 보호 및 법적 준수', anchor: 'privacy' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry(Windows)는 2026년 WeChat PC 클라이언트를 위한 가장 신뢰할 수 있는 훅입니다: 바이너리를 수정하지 않고 WeChat과 함께 실행됩니다',
          'Ollama는 포트 11434에서 로컬 HTTP API를 노출합니다: 10줄짜리 Python 스크립트가 WeChat 메시지를 로드된 모델로 라우팅합니다',
          'Qwen3 7B Q4_K_M: 중국어 채팅에 권장 — 5.5 GB VRAM, 네이티브 CJK 토큰화, 미니 PC에서 8–15 tok/s',
          '항상 켜져 있는 미니 PC 서버(Minisforum UM890 Pro, ~35 W): 그룹 및 개인 채팅을 위해 봇을 24/7 사용 가능하게 유지',
          '로컬 추론: 클라우드로 데이터 전송 없음 — 개인 데이터에 대한 중국 데이터 보안법 제31조 준수',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: 'WeChat + LLM 세 가지 통합 패턴',
        content: [
          '**패턴 1 — WeChatFerry + Ollama(Windows):** 가장 안정적입니다. WeChatFerry는 공식 WeChat PC 클라이언트를 인터셉트하고 Python SDK를 노출합니다. 메시지가 이벤트로 도착합니다; 스크립트가 Ollama HTTP API를 호출하고 응답을 반환합니다. 개인 및 그룹 채팅에 작동합니다. WeChat PC가 설치된 Windows가 필요합니다.',
          '**패턴 2 — HTTP webhook 브리지:** 타사 WeChat 게이트웨이에서 webhook 콜백을 받는 로컬 HTTP 서버를 실행합니다. 설정이 더 복잡하지만 여러 플랫폼에서 작동합니다. WeChat Official Account 인프라가 있는 기업에 적합합니다.',
          '**패턴 3 — Ollama + Open WebUI 포워딩:** Open WebUI의 WeChat 알림 기능을 사용하여(사용 가능한 경우) 개인 WeChat 계정으로 요약이나 응답을 전송합니다. 가볍고 훅 없이 작동하지만 단방향 알림만 지원합니다.',
          '대부분의 사용자에게 — 특히 개인 계정을 가진 중국 사용자에게 — 패턴 1(WeChatFerry + Ollama)이 2026년을 위한 올바른 선택입니다.',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'WeChatFerry 설정: 단계별',
        numberedItems: [
          'Windows에 WeChat PC(weixin.qq.com의 공식 버전) 설치',
          'WeChatFerry 설치: `pip install wcferry`(Python 3.10+)',
          'WeChatFerry 데몬 시작: `python -m wcferry.daemon`',
          '메시지 핸들러 작성: `from wcferry import Wcf; wcf = Wcf(); wcf.enable_receiving_msg()`',
          '메시지 루프에서 Ollama에 POST: `requests.post("http://localhost:11434/api/generate", json={"model":"qwen2.5:7b","prompt":msg.content})`',
          '응답 전송: `wcf.send_text(response["response"], msg.roomid or msg.sender)`',
          '개인 메시지로 테스트; 2–5초 내에 응답이 WeChat에 나타나는지 확인',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'Ollama HTTP API: 주요 엔드포인트',
        content: [
          'Ollama는 `ollama serve` 이후 `http://localhost:11434`에서 로컬 REST 서버를 실행합니다. 로컬 연결에는 인증이 필요하지 않습니다.',
          '**생성(단일 턴):** `POST /api/generate` — 본문: `{model, prompt, stream: false}` — 반환: `{response, done}`',
          '**채팅(다중 턴):** `POST /api/chat` — 본문: `{model, messages: [{role, content}]}` — 호출 간 대화 컨텍스트 유지',
          '**모델 목록:** `GET /api/tags` — 크기와 함께 모든 설치된 모델 반환',
          'WeChat 통합에는 세션 동안 컨텍스트를 유지하기 위해 순환 대화 기록(마지막 10개 메시지)과 함께 `/api/chat`을 사용하십시오.',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: '항상 켜져 있는 WeChat LLM 서버로서의 미니 PC',
        content: [
          '전용 항상 켜져 있는 미니 PC는 노트북이나 워크스테이션을 차지하지 않고 WeChat 봇을 계속 실행하게 합니다.',
          '**Minisforum UM890 Pro(권장):** AMD Ryzen 9 8945HS, 32–64 GB DDR5, AMD Radeon 780M iGPU. Linux에서 ROCm을 통해 Qwen3 7B를 ~8 tok/s로 실행합니다. 소비 전력: 유휴 시 ~35 W, 추론 시 ~65 W. 가격: ~$350–$450.',
          '**Mac Mini M4:** Apple Silicon M4, 16–32 GB 통합 메모리, MLX를 통해 7B 모델에서 ~18 tok/s. 소비 전력: 유휴 시 ~20 W. 가장 조용한 옵션. 가격: ~$599.',
          '**설정 팁:** 자동 시작 활성화 — `ollama serve`와 WeChatFerry 브리지 스크립트를 systemd(Linux) 또는 Windows 작업 스케줄러에 추가하십시오. 봇은 모든 정전 후 자동으로 복구됩니다.',
        ],
        comparisonTable: {
          columns: ['기기', 'RAM', '속도 (7B)', '소비 전력', '가격 (USD)'],
          rows: [
            { '기기': 'Minisforum UM890 Pro', 'RAM': '32–64 GB', '속도 (7B)': '~8 tok/s', '소비 전력': '35–65 W', '가격 (USD)': '$350–$450' },
            { '기기': 'Mac Mini M4',          'RAM': '16–32 GB', '속도 (7B)': '~18 tok/s','소비 전력': '20–40 W', '가격 (USD)': '$599+' },
            { '기기': 'Beelink SER8',         'RAM': '32 GB',    '속도 (7B)': '~8 tok/s', '소비 전력': '30–55 W', '가격 (USD)': '$280–$330' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: 'WeChat에서 중국어 채팅을 위한 최고의 모델',
        content: [
          '**Qwen3 7B Q4_K_M(첫 번째 선택):** Alibaba가 네이티브 CJK 토큰화로 개발했습니다. 5.5 GB VRAM, 8–15 tok/s. 서구 중심 모델보다 중국어 관용어, 고전적 참조, 구어체를 훨씬 잘 이해합니다. 설치: `ollama pull qwen2.5:7b`.',
          '**Qwen3 14B Q4_K_M:** 12–16 GB RAM의 미니 PC가 있을 때 더 풍부한 대화를 위해. 9.5 GB VRAM, 4–8 tok/s. 중국어 미묘한 추론과 다중 턴 컨텍스트에서 현저히 더 나음.',
          '**DeepSeek-R1-Distill-Qwen-7B:** 중국어 질문 답변 및 단계별 설명에 좋음. 캐주얼 대화에서 Qwen3 7B보다 약간 약함.',
          '**피해야 할 것:** Llama 3과 Mistral — 서구 중심 토크나이저가 중국어 텍스트에 2–3배 더 많은 토큰을 사용하여 더 느린 응답과 긴 메시지에서 잘림이 발생합니다.',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: '그룹 채팅 처리',
        content: [
          'WeChat 그룹 채팅은 @ 멘션 처리가 필요합니다. WeChatFerry는 봇이 멘션되었을 때 감지하기 위해 `msg.is_at`을 노출합니다.',
          '좋은 관행: `msg.is_at`이 True이거나 메시지가 트리거 키워드로 시작할 때만 응답하십시오. 모든 그룹 메시지에 응답하면 노이즈가 생기고 WeChat의 안티봇 속도 제한이 트리거됩니다.',
          '속도 제한: WeChat은 분당 ~30개 이상의 메시지를 전송하는 계정을 제한할 수 있습니다. 그룹 컨텍스트에서 봇 응답 사이에 2–3초 지연을 추가하십시오.',
          '컨텍스트 관리: 그룹 채팅의 경우 참가자 간 컨텍스트 혼합을 피하기 위해 사용자별(`msg.sender`로 인덱싱)로 별도의 대화 기록을 유지하십시오.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인 정보 보호 및 중국 데이터 보안법 준수',
        content: [
          '로컬 추론은 프롬프트, 응답, 대화 기록이 절대 하드웨어를 떠나지 않음을 의미합니다. WeChat의 Tencent 서버도 어떤 클라우드 LLM API도 콘텐츠를 처리하지 않습니다.',
          '**중국 데이터 보안법(DSL, 2021) 제31조:** 중국 영토 내에서 수집하거나 사용하는 개인 데이터는 중국 관할권 아래에 남아야 합니다. 자체 로컬 LLM을 실행하면 추론이 외국 클라우드 공급업체(OpenAI, Anthropic, Google)를 통해 라우팅되지 않습니다.',
          '**사이버보안법 제37조:** 핵심 정보 인프라 운영자는 데이터를 국내에 저장해야 합니다. 로컬 추론은 개인 및 중소기업 사용 사례에서 이 요구 사항을 충족합니다.',
          '**이것이 커버하지 않는 것:** WeChat 메시지 메타데이터(누가 누구에게 보냈는지, 타임스탬프)는 WeChat 서비스 약관에 따라 Tencent 서버에 남아 있습니다 — 로컬 추론은 이것을 변경할 수 없습니다. 완전한 개인 정보 보호를 위해 WeChat 대신 로컬 메시지 플랫폼을 사용하십시오.',
          '**EU/글로벌 독자를 위한 참고:** GDPR 제28조는 처리자와의 계약을 요구합니다. 로컬 LLM 실행은 어떤 LLM 공급업체와의 DPA 필요성도 피합니다 — 중요한 준수 단순화.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'WeChatFerry가 Mac용 WeChat에서 작동합니까?',
            a: '아니요. WeChatFerry는 Windows WeChat PC 클라이언트 DLL을 인터셉트하며 Mac용 WeChat과 호환되지 않습니다. Mac에서는 Windows VM을 사용하거나 HTTP webhook 패턴 중 하나를 사용하십시오.',
          },
          {
            q: 'Tencent가 봇을 사용한다고 계정을 차단할 수 있습니까?',
            a: 'WeChat 서비스 약관은 자동화된 대량 메시지 전송을 금지합니다. 인간과 유사한 응답 속도(분당 1–5개 메시지)의 개인 봇은 차단을 거의 유발하지 않습니다. 대량 전송, 그룹 스팸, 또는 상업적 홍보에 봇을 사용하지 마십시오.',
          },
          {
            q: 'WeChat에서 중국어 텍스트에 가장 좋은 Ollama 모델은 무엇입니까?',
            a: 'Qwen3 7B Q4_K_M. 네이티브 CJK 토큰화로 Alibaba가 개발했습니다 — 중국어 텍스트에서 Llama나 Mistral 모델보다 30–40% 더 효율적입니다.',
          },
          {
            q: '노트북에서 이것을 실행할 수 있습니까?',
            a: '네. 16 GB RAM의 노트북은 CPU 전용으로 Qwen3 7B를 8–15 tok/s로 편안하게 실행합니다. 메시지당 응답 지연은 3–8초로 채팅에서 허용 가능합니다.',
          },
          {
            q: '로컬 추론이 중국 데이터 보안법을 준수합니까?',
            a: '추론 콘텐츠(프롬프트 및 응답)의 경우 네 — 데이터가 하드웨어를 떠나지 않습니다. WeChat 메시지 메타데이터는 서비스 약관에 따라 Tencent 서버에 계속 남아 있습니다.',
          },
          {
            q: '다중 턴 대화를 어떻게 처리합니까?',
            a: '보낸 사람으로 인덱싱된 {role, content} dict의 Python 목록으로 대화 기록을 저장하십시오. 컨텍스트를 유지하기 위해 각 요청에서 /api/chat에 마지막 10–15개 메시지를 전달하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[WeChat 로컬 LLM 봇: 개인 비서 가이드](/ko/power-local-llm/wechat-bot-local-llm-personal-assistant-2026) — 개인 비서를 위한 WeChatFerry 심층 분석',
          '[로컬 LLM을 위한 최고의 미니 PC](/ko/prompt-bites/best-mini-pc-for-local-llm) — 항상 켜져 있는 LLM 서버를 위한 하드웨어 비교',
          '[2026년 MCP가 있는 로컬 AI 에이전트](/ko/power-local-llm/local-ai-agents-with-mcp-2026) — 도구 사용 및 자동화로 WeChat 봇 확장',
          '[Zapier를 로컬 AI 에이전트로 대체하기](/ko/power-local-llm/replace-zapier-with-local-ai-agents) — WeChat 이벤트로 트리거되는 자동화 워크플로우',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + 로컬 LLM: 개발자 가이드 2026',
      description: 'WeChatFerry와 Ollama로 WeChat을 로컬 LLM에 연결하십시오. 세 가지 통합 패턴, 모델 추천, 미니 PC 서버 설정 및 중국 DSL 준수.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'WeChat API 통합' },
        { '@type': 'Thing', name: '로컬 LLM 배포' },
        { '@type': 'Thing', name: '중국 AI 준수' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WeChatFerry' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'Qwen3 7B' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'WeChatFerry가 Mac용 WeChat에서 작동합니까?', acceptedAnswer: { '@type': 'Answer', text: '아니요. WeChatFerry는 Windows WeChat PC 클라이언트 DLL을 인터셉트하며 Mac용 WeChat과 호환되지 않습니다. Mac에서는 Windows VM을 사용하거나 HTTP webhook 패턴을 사용하십시오.' } },
        { '@type': 'Question', name: 'WeChat에서 중국어 채팅에 가장 좋은 Ollama 모델은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M — 네이티브 CJK 토큰화로 Alibaba가 개발했으며, 5.5 GB VRAM, 중국어 텍스트에서 Llama나 Mistral보다 30–40% 더 효율적입니다.' } },
        { '@type': 'Question', name: 'Tencent가 봇을 사용한다고 차단할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '인간과 유사한 응답 속도(분당 1–5개 메시지)의 개인 봇은 차단을 거의 유발하지 않습니다. 대량 전송이나 상업적 홍보에 봇을 사용하지 마십시오.' } },
        { '@type': 'Question', name: '로컬 LLM으로의 로컬 추론이 중국 데이터 보안법을 준수합니까?', acceptedAnswer: { '@type': 'Answer', text: '추론 콘텐츠의 경우 네 — 어떤 프롬프트나 응답도 하드웨어를 떠나지 않습니다. WeChat 메타데이터는 서비스 약관에 따라 Tencent 서버에 계속 남아 있습니다.' } },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: 'WeChat + LLM local: Guia para desenvolvedores 2026',
    seoTitle: 'Integração WeChat com LLM local 2026 | Ponte API Ollama',
    intro:
      'Conectar o WeChat a um LLM local dá a você um assistente de IA privado que responde no aplicativo de mensagens mais usado do mundo — sem enviar uma única mensagem a uma API de nuvem. Este guia cobre três padrões de integração (WeChatFerry no Windows, ponte HTTP webhook, servidor mini PC sempre ativo), ajuda você a escolher o modelo Qwen certo para chats em chinês e mostra como a inferência local atende à Lei de Segurança de Dados da China.',
    metaDescription:
      'Conecte o WeChat a um LLM local em 2026. Três padrões: WeChatFerry, HTTP webhook, servidor Ollama em mini PC. Qwen3 7B para chinês. Sem API de nuvem.',
    twitterDescription:
      'Crie uma ponte WeChat + LLM local: WeChatFerry, HTTP webhook ou servidor mini PC. Qwen3 7B para chinês. Sem API de nuvem.',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'integração WeChat LLM local',
    targetKeywords: [
      'wechat llm local 2026',
      'wechat ollama integração',
      'bot wechat ia local',
      'wechatferry qwen2.5',
      'wechat llm python local',
    ],
    leadAnswerBlock:
      '**Conecte o WeChat a um LLM local rodando o Ollama em um mini PC sempre ativo, depois faça a ponte das mensagens do WeChat para a API HTTP do Ollama via WeChatFerry (Windows) ou um listener de webhook. O Qwen3 7B Q4_K_M é o melhor modelo para chats em chinês no WeChat — tokenização CJK nativa, 5.5 GB de VRAM e 8–15 tok/s em hardware modesto.**',
    quickAnswerTop: {
      pt: {
        question: 'Como conecto o WeChat a um LLM local?',
        answer:
          'Rode o Ollama em um mini PC (ou localhost), instale o WeChatFerry para interceptar as mensagens do cliente WeChat PC, escreva uma ponte Python que envia as mensagens para a API HTTP do Ollama em localhost:11434 e retorne a resposta do LLM ao chat. O Qwen3 7B Q4_K_M é o modelo recomendado para chats em chinês.',
        bullets: [
          'WeChatFerry: hook do WeChat somente para Windows; a abordagem mais confiável para 2026',
          'API HTTP do Ollama: POST para /api/generate — sem credenciais de nuvem necessárias',
          'Qwen3 7B Q4_K_M: 5.5 GB VRAM, tokenização CJK nativa, 8–15 tok/s',
          'Servidor mini PC: o Minisforum UM890 Pro roda 24/7 a ~35 W para chat sempre ativo',
          'Privacidade: zero dados transmitidos aos servidores do WeChat ou a qualquer API de LLM',
        ],
        updatedDate: '2026-05',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Conecte o WeChat a um LLM local usando o WeChatFerry e o Ollama — as mensagens permanecem no seu hardware, sem necessidade de API de nuvem.',
      },
      {
        type: 'plain-terms',
        text: 'Este guia mostra como fazer o WeChat responder automaticamente usando um modelo de IA local que roda no seu próprio computador ou mini PC, sem que nenhum dado saia da sua rede.',
      },
    ],
    toc: [
      { label: 'Pontos-chave', anchor: 'tldr' },
      { label: 'Padrões de integração', anchor: 'integration-patterns' },
      { label: 'Configuração do WeChatFerry', anchor: 'wechatferry' },
      { label: 'Ponte API Ollama', anchor: 'ollama-bridge' },
      { label: 'Servidor mini PC', anchor: 'mini-pc-server' },
      { label: 'Escolha do modelo para chinês', anchor: 'model-choice' },
      { label: 'Gestão de chats em grupo', anchor: 'group-chat' },
      { label: 'Privacidade e conformidade legal', anchor: 'privacy' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'O WeChatFerry (Windows) é o hook mais confiável para o cliente WeChat PC em 2026: roda ao lado do WeChat sem modificar seu binário',
          'O Ollama expõe uma API HTTP local na porta 11434: um script Python de 10 linhas roteia mensagens do WeChat para qualquer modelo carregado',
          'Qwen3 7B Q4_K_M: recomendado para chats em chinês — 5.5 GB de VRAM, tokenização CJK nativa, 8–15 tok/s em mini PC',
          'Servidor mini PC sempre ativo (Minisforum UM890 Pro, ~35 W): mantém o bot disponível 24/7 para chats em grupo e pessoais',
          'Inferência local: zero dados transmitidos à nuvem — atende ao Artigo 31 da Lei de Segurança de Dados da China para dados pessoais',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: 'Três padrões de integração WeChat + LLM',
        content: [
          '**Padrão 1 — WeChatFerry + Ollama (Windows):** O mais estável. O WeChatFerry intercepta o cliente oficial do WeChat PC e expõe um SDK Python. As mensagens chegam como eventos; seu script chama a API HTTP do Ollama e devolve a resposta. Funciona para chats pessoais e em grupo. Requer Windows com o WeChat PC instalado.',
          '**Padrão 2 — Ponte HTTP webhook:** Rode um servidor HTTP local que recebe callbacks de webhook de um gateway WeChat de terceiros. Mais complexo de configurar, mas funciona em múltiplas plataformas. Adequado para empresas com infraestrutura de WeChat Official Account.',
          '**Padrão 3 — Ollama + encaminhamento Open WebUI:** Use o recurso de notificação do WeChat do Open WebUI (quando disponível) para enviar resumos ou respostas a uma conta pessoal do WeChat. Leve e sem necessidade de hook, mas só suporta notificações em um sentido.',
          'Para a maioria dos usuários — especialmente na China com contas pessoais — o Padrão 1 (WeChatFerry + Ollama) é a opção certa para 2026.',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'Configuração do WeChatFerry: passo a passo',
        numberedItems: [
          'Instale o WeChat PC (versão oficial de weixin.qq.com) no Windows',
          'Instale o WeChatFerry: `pip install wcferry` (Python 3.10+)',
          'Inicie o daemon do WeChatFerry: `python -m wcferry.daemon`',
          'Escreva o manipulador de mensagens: `from wcferry import Wcf; wcf = Wcf(); wcf.enable_receiving_msg()`',
          'No loop de mensagens, faça POST para o Ollama: `requests.post("http://localhost:11434/api/generate", json={"model":"qwen2.5:7b","prompt":msg.content})`',
          'Envie a resposta: `wcf.send_text(response["response"], msg.roomid or msg.sender)`',
          'Teste com uma mensagem pessoal; verifique que a resposta aparece no WeChat em 2–5 segundos',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'API HTTP do Ollama: endpoints principais',
        content: [
          'O Ollama roda um servidor REST local em `http://localhost:11434` após `ollama serve`. Nenhuma autenticação é necessária para conexões locais.',
          '**Geração (turno único):** `POST /api/generate` — corpo: `{model, prompt, stream: false}` — retorna `{response, done}`',
          '**Chat (multi-turno):** `POST /api/chat` — corpo: `{model, messages: [{role, content}]}` — mantém o contexto da conversa entre chamadas',
          '**Listar modelos:** `GET /api/tags` — retorna todos os modelos instalados com seus tamanhos',
          'Para a integração com o WeChat, use `/api/chat` com um histórico de conversa rotativo (últimas 10 mensagens) para manter o contexto durante uma sessão.',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: 'Mini PC como servidor WeChat LLM sempre ativo',
        content: [
          'Um mini PC dedicado e sempre ativo mantém seu bot do WeChat funcionando sem ocupar um laptop ou estação de trabalho.',
          '**Minisforum UM890 Pro (Recomendado):** AMD Ryzen 9 8945HS, 32–64 GB DDR5, iGPU AMD Radeon 780M. Roda o Qwen3 7B a ~8 tok/s via ROCm no Linux. Consumo: ~35 W em repouso, ~65 W sob inferência. Preço: ~$350–$450.',
          '**Mac Mini M4:** Apple Silicon M4, 16–32 GB de memória unificada, ~18 tok/s em modelos 7B via MLX. Consumo: ~20 W em repouso. A opção mais silenciosa. Preço: ~$599.',
          '**Dica de configuração:** Ative o início automático — adicione `ollama serve` e seu script de ponte WeChatFerry ao systemd (Linux) ou ao Agendador de Tarefas do Windows. O bot então se recupera automaticamente após cada queda de energia.',
        ],
        comparisonTable: {
          columns: ['Dispositivo', 'RAM', 'Velocidade (7B)', 'Consumo', 'Preço (USD)'],
          rows: [
            { 'Dispositivo': 'Minisforum UM890 Pro', 'RAM': '32–64 GB', 'Velocidade (7B)': '~8 tok/s', 'Consumo': '35–65 W', 'Preço (USD)': '$350–$450' },
            { 'Dispositivo': 'Mac Mini M4',          'RAM': '16–32 GB', 'Velocidade (7B)': '~18 tok/s','Consumo': '20–40 W', 'Preço (USD)': '$599+' },
            { 'Dispositivo': 'Beelink SER8',         'RAM': '32 GB',    'Velocidade (7B)': '~8 tok/s', 'Consumo': '30–55 W', 'Preço (USD)': '$280–$330' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Melhores modelos para chats em chinês no WeChat',
        content: [
          '**Qwen3 7B Q4_K_M (Primeira escolha):** Desenvolvido pela Alibaba com tokenização CJK nativa. 5.5 GB de VRAM, 8–15 tok/s. Entende expressões idiomáticas chinesas, referências clássicas e frases coloquiais muito melhor que os modelos centrados no Ocidente. Instalação: `ollama pull qwen2.5:7b`.',
          '**Qwen3 14B Q4_K_M:** Para conversas mais ricas quando há um mini PC com 12–16 GB de RAM disponível. 9.5 GB de VRAM, 4–8 tok/s. Notavelmente melhor em raciocínio matizado em chinês e contexto multi-turno.',
          '**DeepSeek-R1-Distill-Qwen-7B:** Bom para responder perguntas e explicações passo a passo em chinês. Ligeiramente mais fraco em conversa casual que o Qwen3 7B.',
          '**Evitar:** Llama 3 e Mistral — os tokenizadores centrados no Ocidente usam 2–3× mais tokens para texto em chinês, o que gera respostas mais lentas e truncamento em mensagens longas.',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: 'Gestão de chats em grupo',
        content: [
          'Os chats em grupo do WeChat exigem gerenciar as menções @. O WeChatFerry expõe `msg.is_at` para detectar quando o bot é mencionado.',
          'Boa prática: responder apenas quando `msg.is_at` for True ou quando a mensagem começa com uma palavra-chave de ativação. Responder a cada mensagem do grupo gera ruído e ativa os limites de taxa anti-bot do WeChat.',
          'Limite de taxa: o WeChat pode limitar contas que enviem mais de ~30 mensagens por minuto. Adicione um atraso de 2–3 segundos entre as respostas do bot em contextos de grupo.',
          'Gestão do contexto: para chats em grupo, mantenha históricos de conversa separados por usuário (indexados por `msg.sender`) para evitar misturar o contexto entre participantes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e conformidade com a Lei de Segurança de Dados da China',
        content: [
          'A inferência local significa que os prompts, as respostas e o histórico de conversa nunca saem do seu hardware. Nem os servidores da Tencent no WeChat nem qualquer API de LLM na nuvem processam o conteúdo.',
          '**Lei de Segurança de Dados da China (DSL, 2021) Artigo 31:** Exige que os dados pessoais coletados ou usados em território chinês permaneçam sob a jurisdição da China. Rodar seu próprio LLM local garante que a inferência não seja roteada por provedores de nuvem estrangeiros (OpenAI, Anthropic, Google).',
          '**Lei de Cibersegurança Artigo 37:** Os operadores de infraestruturas de informação crítica devem armazenar os dados em território nacional. A inferência local satisfaz esse requisito para casos de uso pessoais e de pequenas e médias empresas.',
          '**O que isto NÃO cobre:** Os metadados das mensagens do WeChat (quem enviou para quem, marcas de tempo) permanecem nos servidores da Tencent conforme os Termos de Serviço do WeChat — a inferência local não pode mudar isso. Para privacidade total, use uma plataforma de mensagens local em vez do WeChat.',
          '**Nota para leitores no Brasil:** A LGPD (Lei Geral de Proteção de Dados) Artigo 39 exige que o operador trate os dados pessoais conforme as instruções do controlador. Rodar LLMs locais evita a necessidade de um contrato de tratamento com qualquer fornecedor de LLM — uma simplificação significativa de conformidade junto à ANPD.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O WeChatFerry funciona com o WeChat para Mac?',
            a: 'Não. O WeChatFerry intercepta as DLLs do cliente WeChat PC do Windows e não é compatível com o WeChat para Mac. No Mac, use uma VM do Windows ou um dos padrões de webhook HTTP.',
          },
          {
            q: 'A Tencent pode banir minha conta por usar um bot?',
            a: 'Os Termos de Serviço do WeChat proíbem o envio em massa de mensagens automatizadas. Os bots pessoais com taxas de resposta semelhantes às humanas (1–5 mensagens por minuto) raramente provocam banimentos. Evite o envio em massa, o spam em grupos ou usar o bot para promoção comercial.',
          },
          {
            q: 'Qual modelo do Ollama é melhor para texto em chinês?',
            a: 'Qwen3 7B Q4_K_M. Desenvolvido pela Alibaba com tokenização CJK nativa — entre 30–40% mais eficiente com texto em chinês que os modelos Llama ou Mistral.',
          },
          {
            q: 'Posso rodar isso em um laptop?',
            a: 'Sim. Um laptop com 16 GB de RAM roda o Qwen3 7B confortavelmente a 8–15 tok/s apenas com CPU. A latência de resposta é de 3–8 segundos por mensagem, aceitável para chat.',
          },
          {
            q: 'A inferência local atende à Lei de Segurança de Dados da China?',
            a: 'Para o conteúdo da inferência (prompts e respostas), sim — nenhum dado sai do seu hardware. Os metadados das mensagens do WeChat continuam residindo nos servidores da Tencent conforme seus ToS.',
          },
          {
            q: 'Como gerencio conversas multi-turno?',
            a: 'Armazene o histórico de conversa como uma lista Python com dicts {role, content} indexados por remetente. Passe as últimas 10–15 mensagens para /api/chat em cada requisição para manter o contexto.',
          },
        ],
      },
      relatedReading: {
        title: 'Leituras relacionadas',
        items: [
          '[Bot do WeChat com LLM local: Guia de assistente pessoal](/pt/power-local-llm/wechat-bot-local-llm-personal-assistant-2026) — Análise aprofundada do WeChatFerry para assistentes pessoais',
          '[Melhor mini PC para LLM local](/pt/prompt-bites/best-mini-pc-for-local-llm) — Comparativo de hardware para servidores LLM sempre ativos',
          '[Agentes de IA local com MCP 2026](/pt/power-local-llm/local-ai-agents-with-mcp-2026) — Amplie os bots do WeChat com uso de ferramentas e automação',
          '[Substitua o Zapier por agentes de IA local](/pt/power-local-llm/replace-zapier-with-local-ai-agents) — Fluxos de automação acionados por eventos do WeChat',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + LLM local: Guia para desenvolvedores 2026',
      description: 'Conecte o WeChat a um LLM local usando o WeChatFerry e o Ollama. Três padrões de integração, recomendações de modelos, configuração de servidor mini PC e conformidade com a DSL chinesa.',
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'Integração WeChat API' },
        { '@type': 'Thing', name: 'Implantação de LLM local' },
        { '@type': 'Thing', name: 'Conformidade de IA na China' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WeChatFerry' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'Qwen3 7B' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'O WeChatFerry funciona com o WeChat para Mac?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O WeChatFerry intercepta as DLLs do cliente WeChat PC do Windows e não é compatível com o WeChat para Mac. No Mac, use uma VM do Windows ou um padrão de webhook HTTP.' } },
        { '@type': 'Question', name: 'Qual modelo do Ollama é melhor para chats em chinês no WeChat?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M — desenvolvido pela Alibaba com tokenização CJK nativa, 5.5 GB de VRAM e entre 30–40% mais eficiente com texto em chinês que Llama ou Mistral.' } },
        { '@type': 'Question', name: 'A Tencent pode me banir por usar um bot?', acceptedAnswer: { '@type': 'Answer', text: 'Os bots pessoais com taxas de resposta semelhantes às humanas (1–5 mensagens por minuto) raramente provocam banimentos. Evite o envio em massa ou a promoção comercial através do bot.' } },
        { '@type': 'Question', name: 'A inferência local com um LLM atende à Lei de Segurança de Dados da China?', acceptedAnswer: { '@type': 'Answer', text: 'Para o conteúdo da inferência, sim — nenhum prompt ou resposta sai do seu hardware. Os metadados do WeChat continuam residindo nos servidores da Tencent conforme seus ToS.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Local AI Agents & Tool Use',
    title: 'WeChat + نموذج لغة محلي: دليل المطور 2026',
    seoTitle: 'دمج WeChat مع LLM محلي عبر Ollama: دليل 2026',
    intro:
      'يتيح لك ربط WeChat بنموذج لغة محلي الحصول على مساعد ذكاء اصطناعي خاص داخل تطبيق المراسلة الأكثر استخدامًا في العالم، دون إرسال رسالة واحدة إلى واجهة API سحابية. يتناول هذا الدليل ثلاثة أنماط تكامل (WeChatFerry على Windows، وجسر HTTP webhook، وخادم mini PC دائم التشغيل)، ويساعدك في اختيار نموذج Qwen المناسب للمحادثات باللغة الصينية، ويشرح كيف يلتزم الاستدلال المحلي بقانون أمن البيانات الصيني.',
    metaDescription:
      '3 أنماط لربط WeChat بنموذج LLM محلي: WeChatFerry على Windows، جسر HTTP webhook، وخادم Ollama على mini PC. Qwen3 7B موصى به للمحادثات بالصينية.',
    twitterDescription:
      'أنشئ جسرًا بين WeChat ونموذج لغة محلي: WeChatFerry أو HTTP webhook أو mini PC. Qwen3 7B للغة الصينية. بدون API سحابية.',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11 دقائق قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'تكامل WeChat نموذج لغة محلي',
    targetKeywords: [
      'wechat llm محلي 2026',
      'wechat ollama تكامل',
      'بوت wechat ذكاء اصطناعي محلي',
      'wechatferry qwen2.5',
      'wechat llm python محلي',
    ],
    leadAnswerBlock:
      '**اربط WeChat بنموذج لغة محلي عبر تشغيل Ollama على mini PC دائم التشغيل، ثم وجّه رسائل WeChat إلى HTTP API لـ Ollama عبر WeChatFerry (Windows) أو مستمع webhook. Qwen3 7B Q4_K_M هو أفضل نموذج للمحادثات باللغة الصينية في WeChat: ترميز CJK أصلي، 5.5 GB VRAM، و8–15 رمز/ثانية على أجهزة متواضعة.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أربط WeChat بنموذج لغة محلي؟',
        answer:
          'شغّل Ollama على mini PC (أو localhost)، وثبّت WeChatFerry لاعتراض رسائل عميل WeChat PC، واكتب جسر Python يرسل الرسائل إلى HTTP API لـ Ollama على localhost:11434، ثم يُعيد رد النموذج إلى المحادثة. Qwen3 7B Q4_K_M هو النموذج الموصى به للمحادثات باللغة الصينية.',
        bullets: [
          'WeChatFerry: ربط WeChat على Windows فقط؛ النهج الأكثر موثوقية لعام 2026',
          'Ollama HTTP API: POST إلى /api/generate — لا حاجة لبيانات اعتماد سحابية',
          'Qwen3 7B Q4_K_M: 5.5 GB VRAM، ترميز CJK أصلي، 8–15 رمز/ثانية',
          'خادم mini PC دائم التشغيل (Minisforum UM890 Pro، ~35 واط): يُبقي البوت متاحًا على مدار الساعة',
          'الخصوصية: لا تُنقل أي بيانات إلى السحابة — صفر إرسال',
        ],
        updatedDate: '2026-05',
      },
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'اربط WeChat بنموذج لغة محلي مع WeChatFerry وOllama: تبقى الرسائل على أجهزتك دون الحاجة إلى API سحابية.',
      },
      {
        type: 'plain-terms',
        text: 'يوضح هذا الدليل كيفية جعل WeChat يرد تلقائيًا باستخدام نموذج ذكاء اصطناعي محلي يعمل على حاسوبك أو mini PC الخاص بك، دون مغادرة أي بيانات لشبكتك.',
      },
    ],
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'أنماط التكامل', anchor: 'integration-patterns' },
      { label: 'إعداد WeChatFerry', anchor: 'wechatferry' },
      { label: 'جسر Ollama API', anchor: 'ollama-bridge' },
      { label: 'خادم mini PC', anchor: 'mini-pc-server' },
      { label: 'اختيار النموذج للغة الصينية', anchor: 'model-choice' },
      { label: 'إدارة محادثات المجموعة', anchor: 'group-chat' },
      { label: 'الخصوصية والامتثال القانوني', anchor: 'privacy' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'WeChatFerry (Windows) هو الربط الأكثر موثوقية لعميل WeChat PC في 2026: يعمل بجانب WeChat دون تعديل ملفاته الثنائية',
          'يعرض Ollama HTTP API محليًا على المنفذ 11434: سكريبت Python من 10 أسطر يوجه رسائل WeChat إلى أي نموذج محمّل',
          'Qwen3 7B Q4_K_M: موصى به للمحادثات باللغة الصينية — 5.5 GB VRAM، ترميز CJK أصلي، 8–15 رمز/ثانية على mini PC',
          'خادم mini PC دائم التشغيل (Minisforum UM890 Pro، ~35 واط): يُبقي البوت متاحًا على مدار الساعة للمحادثات الجماعية والشخصية',
          'الاستدلال المحلي: لا تُنقل أي بيانات إلى السحابة — يمتثل للمادة 31 من قانون أمن البيانات الصيني للبيانات الشخصية',
        ],
      },
      integrationPatterns: {
        id: 'integration-patterns',
        title: 'ثلاثة أنماط لتكامل WeChat + نموذج لغة محلي',
        content: [
          '**النمط 1 — WeChatFerry + Ollama (Windows):** الأكثر استقرارًا. يعترض WeChatFerry عميل WeChat PC الرسمي ويعرض SDK بـ Python. تصل الرسائل كأحداث؛ يستدعي سكريبتك HTTP API لـ Ollama ويُعيد الرد. يعمل للمحادثات الشخصية والجماعية. يتطلب Windows مع تثبيت WeChat PC.',
          '**النمط 2 — جسر HTTP webhook:** يشغّل خادم HTTP محليًا يستقبل استدعاءات webhook من بوابة WeChat تابعة لطرف ثالث. أكثر تعقيدًا في الإعداد، لكنه يعمل على منصات متعددة. مناسب للشركات التي لديها بنية تحتية لـ WeChat Official Account.',
          '**النمط 3 — Ollama + إعادة توجيه Open WebUI:** يستخدم ميزة إشعارات WeChat في Open WebUI (عند توفرها) لإرسال ملخصات أو ردود إلى حساب WeChat شخصي. خفيف ولا يحتاج ربطًا، لكنه يدعم الإشعارات أحادية الاتجاه فقط.',
          'بالنسبة لمعظم المستخدمين — خاصة في الصين بحسابات شخصية — النمط 1 (WeChatFerry + Ollama) هو الخيار الصحيح لعام 2026.',
        ],
      },
      wechatferry: {
        id: 'wechatferry',
        title: 'إعداد WeChatFerry: خطوة بخطوة',
        numberedItems: [
          'ثبّت WeChat PC (الإصدار الرسمي من weixin.qq.com) على Windows',
          'ثبّت WeChatFerry: `pip install wcferry` (Python 3.10+)',
          'ابدأ daemon لـ WeChatFerry: `python -m wcferry.daemon`',
          'اكتب معالج الرسائل: `from wcferry import Wcf; wcf = Wcf(); wcf.enable_receiving_msg()`',
          'في حلقة الرسائل، أرسل POST إلى Ollama: `requests.post("http://localhost:11434/api/generate", json={"model":"qwen2.5:7b","prompt":msg.content})`',
          'أرسل الرد: `wcf.send_text(response["response"], msg.roomid or msg.sender)`',
          'اختبر برسالة شخصية؛ تحقق من ظهور الرد في WeChat خلال 2–5 ثوانٍ',
        ],
        codeBlock: `import requests
from wcferry import Wcf

wcf = Wcf()
wcf.enable_receiving_msg()

while True:
    msg = wcf.get_msg()
    if msg and msg.from_self() is False:
        resp = requests.post(
            "http://localhost:11434/api/generate",
            json={"model": "qwen2.5:7b", "prompt": msg.content, "stream": False}
        ).json()
        wcf.send_text(resp["response"], msg.roomid or msg.sender)`,
        codeLanguage: 'python',
      },
      ollamaBridge: {
        id: 'ollama-bridge',
        title: 'Ollama HTTP API: نقاط النهاية الرئيسية',
        content: [
          'يشغّل Ollama خادم REST محليًا على `http://localhost:11434` بعد `ollama serve`. لا مصادقة مطلوبة للاتصالات المحلية.',
          '**التوليد (دور واحد):** `POST /api/generate` — الجسم: `{model, prompt, stream: false}` — يُعيد `{response, done}`',
          '**الدردشة (متعددة الأدوار):** `POST /api/chat` — الجسم: `{model, messages: [{role, content}]}` — يحافظ على سياق المحادثة بين الاستدعاءات',
          '**قائمة النماذج:** `GET /api/tags` — يُعيد جميع النماذج المثبتة مع أحجامها',
          'لتكامل WeChat، استخدم `/api/chat` مع تاريخ محادثة دوري (آخر 10 رسائل) للحفاظ على السياق خلال الجلسة.',
        ],
      },
      miniPcServer: {
        id: 'mini-pc-server',
        title: 'Mini PC كخادم WeChat LLM دائم التشغيل',
        content: [
          'يُبقي mini PC مخصص ودائم التشغيل بوت WeChat يعمل دون احتلال جهاز محمول أو محطة عمل.',
          '**Minisforum UM890 Pro (موصى به):** AMD Ryzen 9 8945HS، 32–64 GB DDR5، AMD Radeon 780M iGPU. يشغّل Qwen3 7B بـ ~8 رمز/ثانية عبر ROCm على Linux. الاستهلاك: ~35 واط في وضع الخمول، ~65 واط أثناء الاستدلال. السعر: ~350–450 دولار.',
          '**Mac Mini M4:** Apple Silicon M4، 16–32 GB ذاكرة موحدة، ~18 رمز/ثانية للنماذج 7B عبر MLX. الاستهلاك: ~20 واط في وضع الخمول. الخيار الأهدأ صوتًا. السعر: ~599 دولار.',
          '**نصيحة للإعداد:** فعّل التشغيل التلقائي — أضف `ollama serve` وسكريبت جسر WeChatFerry إلى systemd (Linux) أو مجدول المهام في Windows. سيتعافى البوت تلقائيًا بعد كل انقطاع في الكهرباء.',
        ],
        comparisonTable: {
          columns: ['الجهاز', 'RAM', 'السرعة (7B)', 'الاستهلاك', 'السعر (USD)'],
          rows: [
            { 'الجهاز': 'Minisforum UM890 Pro', 'RAM': '32–64 GB', 'السرعة (7B)': '~8 رمز/ثانية', 'الاستهلاك': '35–65 واط', 'السعر (USD)': '$350–$450' },
            { 'الجهاز': 'Mac Mini M4',          'RAM': '16–32 GB', 'السرعة (7B)': '~18 رمز/ثانية', 'الاستهلاك': '20–40 واط', 'السعر (USD)': '$599+' },
            { 'الجهاز': 'Beelink SER8',         'RAM': '32 GB',    'السرعة (7B)': '~8 رمز/ثانية', 'الاستهلاك': '30–55 واط', 'السعر (USD)': '$280–$330' },
          ],
        },
      },
      modelChoice: {
        id: 'model-choice',
        title: 'أفضل النماذج للمحادثات باللغة الصينية في WeChat',
        content: [
          '**Qwen3 7B Q4_K_M (الخيار الأول):** طوّرته Alibaba بترميز CJK أصلي. 5.5 GB VRAM، 8–15 رمز/ثانية. يفهم الأمثال الصينية والمراجع الكلاسيكية والعبارات العامية أفضل بكثير من النماذج ذات التوجه الغربي. التثبيت: `ollama pull qwen2.5:7b`.',
          '**Qwen3 14B Q4_K_M:** لمحادثات أكثر ثراءً عند توفر mini PC بـ 12–16 GB RAM. 9.5 GB VRAM، 4–8 رمز/ثانية. أفضل بشكل ملحوظ في الاستدلال الدقيق باللغة الصينية والسياق متعدد الأدوار.',
          '**DeepSeek-R1-Distill-Qwen-7B:** جيد للإجابة عن الأسئلة والشروحات خطوة بخطوة باللغة الصينية. أضعف قليلًا في المحادثة العادية مقارنةً بـ Qwen3 7B.',
          '**تجنّب:** Llama 3 وMistral — تستخدم المرمّزات ذات التوجه الغربي 2–3× رموز أكثر للنص الصيني، مما يولّد ردودًا أبطأ وقطعًا في الرسائل الطويلة.',
        ],
      },
      groupChat: {
        id: 'group-chat',
        title: 'إدارة محادثات المجموعة',
        content: [
          'تتطلب المجموعات في WeChat إدارة إشارات @. يعرض WeChatFerry `msg.is_at` لاكتشاف متى يُشار إلى البوت.',
          'الممارسة الجيدة: الرد فقط عندما يكون `msg.is_at` صحيحًا أو عندما تبدأ الرسالة بكلمة تفعيل. الرد على كل رسالة في المجموعة يولّد ضوضاء ويفعّل حدود معدل مكافحة البوتات في WeChat.',
          'حد المعدل: قد يقيّد WeChat الحسابات التي ترسل أكثر من ~30 رسالة في الدقيقة. أضف تأخيرًا 2–3 ثوانٍ بين ردود البوت في سياقات المجموعة.',
          'إدارة السياق: في محادثات المجموعة، احتفظ بسجلات محادثة منفصلة لكل مستخدم (مفهرسة بـ `msg.sender`) لتجنب خلط السياق بين المشاركين.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والامتثال لقانون أمن البيانات الصيني',
        content: [
          'يعني الاستدلال المحلي أن المطالبات والردود وتاريخ المحادثة لا تغادر أجهزتك أبدًا. لا تعالج خوادم Tencent في WeChat ولا أي API نموذج لغة سحابية المحتوى.',
          '**قانون أمن البيانات الصيني (DSL، 2021) المادة 31:** تُلزم بأن تظل البيانات الشخصية المجمّعة أو المستخدمة على الأراضي الصينية تحت الولاية القضائية الصينية. يضمن تشغيل نموذجك اللغوي المحلي ألا يُوجَّه الاستدلال عبر موفري سحابة أجانب (OpenAI وAnthropic وGoogle).',
          '**قانون الأمن السيبراني المادة 37:** يجب على مشغلي البنية التحتية للمعلومات الحيوية تخزين البيانات داخل البلاد. يلبّي الاستدلال المحلي هذا المطلب للاستخدام الشخصي والشركات الصغيرة.',
          '**ما لا يشمله ذلك:** تظل بيانات تعريف رسائل WeChat (من أرسل لمن والطوابع الزمنية) على خوادم Tencent وفقًا لشروط الخدمة — لا يمكن للاستدلال المحلي تغيير ذلك. للخصوصية الكاملة، استخدم منصة مراسلة محلية بدلًا من WeChat.',
          '**ملاحظة للقراء في الدول العربية:** تُلزم المادة 28 من GDPR باتفاقيات مع معالجي البيانات. يتجنب تشغيل النماذج اللغوية محليًا الحاجة إلى اتفاقية معالجة بيانات مع أي موفر نموذج لغة — تبسيط امتثال كبير.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل WeChatFerry مع WeChat للماك؟',
            a: 'لا. يعترض WeChatFerry ملفات DLL لعميل WeChat PC على Windows ولا يتوافق مع WeChat للماك. على الماك، استخدم VM بـ Windows أو أحد أنماط HTTP webhook.',
          },
          {
            q: 'هل يمكن أن تحظر Tencent حسابي لاستخدام بوت؟',
            a: 'تحظر شروط خدمة WeChat الإرسال الجماعي الآلي. نادرًا ما تؤدي البوتات الشخصية ذات معدلات الرد الشبيهة بالبشر (1–5 رسائل في الدقيقة) إلى حظر. تجنّب الإرسال الجماعي أو البريد المزعج في المجموعات أو استخدام البوت للترويج التجاري.',
          },
          {
            q: 'ما أفضل نموذج Ollama للنص الصيني؟',
            a: 'Qwen3 7B Q4_K_M. طوّرته Alibaba بترميز CJK أصلي — أكثر كفاءة بـ 30–40% مع النص الصيني مقارنةً بنماذج Llama أو Mistral.',
          },
          {
            q: 'هل يمكنني تشغيل هذا على كمبيوتر محمول؟',
            a: 'نعم. يشغّل كمبيوتر محمول بـ 16 GB RAM نموذج Qwen3 7B بشكل مريح بـ 8–15 رمز/ثانية على المعالج فقط. كمون الرد 3–8 ثوانٍ لكل رسالة، وهو مقبول للمحادثة.',
          },
          {
            q: 'هل يمتثل الاستدلال المحلي لقانون أمن البيانات الصيني؟',
            a: 'بالنسبة لمحتوى الاستدلال (المطالبات والردود)، نعم — لا تغادر أي بيانات أجهزتك. تظل بيانات تعريف رسائل WeChat على خوادم Tencent وفقًا لشروط الخدمة.',
          },
          {
            q: 'كيف أدير المحادثات متعددة الأدوار؟',
            a: 'خزّن تاريخ المحادثة كقائمة Python تحتوي قواميس {role, content} مفهرسة بالمرسل. مرّر آخر 10–15 رسالة إلى /api/chat في كل طلب للحفاظ على السياق.',
          },
        ],
      },
      relatedReading: {
        title: 'قراءة ذات صلة',
        items: [
          '[بوت WeChat مع نموذج لغة محلي: دليل المساعد الشخصي](/ar/power-local-llm/wechat-bot-local-llm-personal-assistant-2026) — تحليل متعمق لـ WeChatFerry للمساعدين الشخصيين',
          '[أفضل mini PC للنموذج اللغوي المحلي](/ar/prompt-bites/best-mini-pc-for-local-llm) — مقارنة الأجهزة لخوادم النماذج اللغوية الدائمة التشغيل',
          '[وكلاء الذكاء الاصطناعي المحليون مع MCP 2026](/ar/power-local-llm/local-ai-agents-with-mcp-2026) — وسّع بوتات WeChat باستخدام الأدوات والأتمتة',
          '[استبدل Zapier بوكلاء ذكاء اصطناعي محليين](/ar/power-local-llm/replace-zapier-with-local-ai-agents) — تدفقات الأتمتة المُشغَّلة بأحداث WeChat',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + نموذج لغة محلي: دليل المطور 2026',
      description: 'اربط WeChat بنموذج لغة محلي مع WeChatFerry وOllama. ثلاثة أنماط تكامل، توصيات النماذج، إعداد خادم mini PC، والامتثال لقانون أمن البيانات الصيني.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/wechat-local-llm-integration-2026',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'تكامل WeChat API' },
        { '@type': 'Thing', name: 'نشر نموذج لغة محلي' },
        { '@type': 'Thing', name: 'امتثال الذكاء الاصطناعي في الصين' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WeChatFerry' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'Qwen3 7B' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يعمل WeChatFerry مع WeChat للماك؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. يعترض WeChatFerry ملفات DLL لعميل WeChat PC على Windows ولا يتوافق مع WeChat للماك. على الماك، استخدم VM بـ Windows أو نمط HTTP webhook.' } },
        { '@type': 'Question', name: 'ما أفضل نموذج Ollama للمحادثات الصينية في WeChat؟', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 7B Q4_K_M — طوّرته Alibaba بترميز CJK أصلي، 5.5 GB VRAM، أكثر كفاءة بـ 30–40% مع النص الصيني مقارنةً بـ Llama أو Mistral.' } },
        { '@type': 'Question', name: 'هل يمكن أن تحظر Tencent حسابي لاستخدام بوت؟', acceptedAnswer: { '@type': 'Answer', text: 'نادرًا ما تؤدي البوتات الشخصية ذات معدلات الرد الشبيهة بالبشر (1–5 رسائل في الدقيقة) إلى حظر. تجنّب الإرسال الجماعي أو الترويج التجاري عبر البوت.' } },
        { '@type': 'Question', name: 'هل يمتثل الاستدلال المحلي مع نموذج لغة لقانون أمن البيانات الصيني؟', acceptedAnswer: { '@type': 'Answer', text: 'بالنسبة لمحتوى الاستدلال، نعم — لا تغادر أي مطالبة أو رد أجهزتك. تظل بيانات تعريف WeChat على خوادم Tencent وفقًا لشروط الخدمة.' } },
      ],
    },
  },
}
