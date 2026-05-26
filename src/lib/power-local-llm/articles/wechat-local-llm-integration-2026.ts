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
    seoTitle: 'WeChat Local LLM Integration Guide 2026 | Ollama API Bridge',
    intro:
      'Connecting WeChat to a local LLM gives you a private AI assistant that replies in the world\'s most-used messaging app — without sending a single message to a cloud API. This guide covers three integration patterns (WeChatFerry on Windows, HTTP webhook bridge, always-on mini PC server), helps you choose the right Qwen model for Chinese chat, and shows how local inference satisfies China\'s Data Security Law.',
    metaDescription:
      'Connect WeChat to a local LLM in 2026. Three integration patterns: WeChatFerry (Windows), HTTP webhook bridge, mini PC Ollama server. Qwen2.5 7B recommended for Chinese. Privacy-first setup.',
    twitterDescription:
      'Build a WeChat + local LLM bridge: WeChatFerry, HTTP webhook, or mini PC server. Qwen2.5 7B for Chinese. No cloud API required.',
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
      '**Connect WeChat to a local LLM by running Ollama on an always-on mini PC, then bridging WeChat messages to the Ollama HTTP API via WeChatFerry (Windows) or a webhook listener. Qwen2.5 7B Q4_K_M is the best model for Chinese-language WeChat chat — native CJK tokenisation, 5.5 GB VRAM, and 8–15 tok/s on modest hardware.**',
    quickAnswerTop: {
      en: {
        question: 'How do I connect WeChat to a local LLM?',
        answer:
          'Run Ollama on a mini PC (or localhost), install WeChatFerry to intercept WeChat PC client messages, write a Python bridge that sends messages to Ollama\'s HTTP API at localhost:11434, and return the LLM response to the chat. Qwen2.5 7B Q4_K_M is the recommended model for Chinese-language chat.',
        bullets: [
          'WeChatFerry: Windows-only WeChat hook; most reliable approach for 2026',
          'Ollama HTTP API: POST to /api/generate — no cloud credentials needed',
          'Qwen2.5 7B Q4_K_M: 5.5 GB VRAM, native CJK tokenisation, 8–15 tok/s',
          'Mini PC server: Minisforum UM890 Pro runs 24/7 at ~35 W for always-on chat',
          'Privacy: zero data transmitted to WeChat servers or any LLM API',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie verbinde ich WeChat mit einem lokalen LLM?',
        answer:
          'Ollama auf einem Mini-PC betreiben, WeChatFerry für die Windows-WeChat-Client-Integration installieren, Python-Bridge schreiben, die Nachrichten an localhost:11434 weiterleitet, und LLM-Antworten zurück in den Chat senden. Empfohlen: Qwen2.5 7B Q4_K_M für chinesischen Text.',
        bullets: [
          'WeChatFerry: nur Windows, zuverlässigster Ansatz 2026',
          'Ollama HTTP API: POST an /api/generate — keine Cloud-Zugangsdaten nötig',
          'Qwen2.5 7B Q4_K_M: 5,5 GB VRAM, native CJK-Tokenisierung',
          'Mini-PC-Server: Minisforum UM890 Pro läuft 24/7 bei ~35 W',
          'Datenschutz: keine Daten an WeChat-Server oder Cloud-APIs',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Comment connecter WeChat à un LLM local ?',
        answer:
          'Exécuter Ollama sur un mini PC, installer WeChatFerry pour intercepter les messages WeChat PC, écrire un bridge Python vers localhost:11434, et renvoyer les réponses du LLM dans la conversation. Modèle recommandé : Qwen2.5 7B Q4_K_M pour le chinois.',
        bullets: [
          'WeChatFerry : Windows uniquement, approche la plus fiable en 2026',
          'API HTTP Ollama : POST vers /api/generate, aucune clé cloud nécessaire',
          'Qwen2.5 7B Q4_K_M : 5,5 Go VRAM, tokenisation CJK native',
          'Serveur mini PC : Minisforum UM890 Pro, 24/7 à ~35 W',
          'Confidentialité : aucune donnée transmise vers des APIs cloud',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'WeChatをローカルLLMに接続する方法は？',
        answer:
          'ミニPC上でOllamaを実行し、WeChatFerry（Windows版）でWeChatクライアントメッセージをインターセプト、Pythonブリッジでlocalhost:11434にルーティングし、LLMの応答をチャットに返します。中国語チャットにはQwen2.5 7B Q4_K_Mを推奨。',
        bullets: [
          'WeChatFerry：Windowsのみ、2026年で最も信頼性の高いアプローチ',
          'Ollama HTTP API：/api/generateへPOST、クラウド認証不要',
          'Qwen2.5 7B Q4_K_M：5.5 GB VRAM、ネイティブCJKトークン化',
          'ミニPCサーバー：Minisforum UM890 Pro、24/7で~35 W運用',
          'プライバシー：クラウドAPIへのデータ送信なし',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '如何将微信与本地LLM连接？',
        answer:
          '在迷你主机上运行Ollama，安装WeChatFerry钩入微信PC客户端，编写Python桥接脚本将消息路由至localhost:11434，并将LLM回复发回对话。中文聊天推荐Qwen2.5 7B Q4_K_M模型。',
        bullets: [
          'WeChatFerry：仅限Windows，2026年最可靠的微信集成方案',
          'Ollama HTTP API：POST至/api/generate，无需云端密钥',
          'Qwen2.5 7B Q4_K_M：5.5 GB显存，原生CJK分词，8–15 tok/s',
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
          'Qwen2.5 7B Q4_K_M: recommended for Chinese chat — 5.5 GB VRAM, native CJK tokenisation, 8–15 tok/s on mini PC',
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
          '**Minisforum UM890 Pro (Recommended):** AMD Ryzen 9 8945HS, 32–64 GB DDR5, AMD Radeon 780M iGPU. Runs Qwen2.5 7B at ~8 tok/s via ROCm on Linux. Power draw: ~35 W idle, ~65 W under inference. Price: ~$350–$450.',
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
          '**Qwen2.5 7B Q4_K_M (Top Pick):** Built by Alibaba with native CJK tokenisation. 5.5 GB VRAM, 8–15 tok/s. Understands Chinese idioms, classical references, and colloquial phrasing far better than Western-first models. Install: `ollama pull qwen2.5:7b`.',
          '**Qwen2.5 14B Q4_K_M:** For richer conversations where a mini PC with 12–16 GB RAM is available. 9.5 GB VRAM, 4–8 tok/s. Noticeably better at nuanced Chinese reasoning and multi-turn context.',
          '**DeepSeek-R1-Distill-Qwen-7B:** Good for question-answering and step-by-step explanations in Chinese. Slightly weaker at casual conversation than Qwen2.5 7B.',
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
            a: 'Qwen2.5 7B Q4_K_M. Built by Alibaba with native CJK tokenisation — 30–40% more efficient on Chinese text than Llama or Mistral models.',
          },
          {
            q: 'Can I run this on a laptop?',
            a: 'Yes. A 16 GB RAM laptop runs Qwen2.5 7B comfortably at 8–15 tok/s CPU-only. Response latency is 3–8 seconds per message — acceptable for chat.',
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
        { '@type': 'SoftwareApplication', name: 'Qwen2.5 7B' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Does WeChatFerry work with WeChat for Mac?', acceptedAnswer: { '@type': 'Answer', text: 'No. WeChatFerry hooks the Windows WeChat PC client DLLs and does not support WeChat for Mac. On Mac, use a Windows VM or one of the HTTP webhook patterns instead.' } },
        { '@type': 'Question', name: 'Which Ollama model is best for Chinese WeChat chat?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M — built by Alibaba with native CJK tokenisation, 5.5 GB VRAM, and 30–40% more efficient on Chinese text than Llama or Mistral models.' } },
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
      'WeChat mit lokalem LLM verbinden 2026: WeChatFerry (Windows), HTTP-Webhook-Brücke und Mini-PC-Ollama-Server. Qwen2.5 7B für Chinesisch. Datenschutzkonform, keine Cloud-API.',
    twitterDescription:
      'WeChat + lokales LLM: WeChatFerry, HTTP-Webhook oder Mini-PC-Server. Qwen2.5 7B für Chinesisch. Keine Cloud-API erforderlich.',
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
      '**WeChat mit einem lokalen LLM verbinden: Ollama auf einem Mini-PC betreiben, WeChatFerry für die Windows-PC-Client-Integration installieren und eine Python-Brücke zur Ollama HTTP-API schreiben. Empfohlen: Qwen2.5 7B Q4_K_M für chinesische Konversationen – 5,5 GB VRAM, native CJK-Tokenisierung.**',
    quickAnswerTop: {
      en: {
        question: 'How do I connect WeChat to a local LLM?',
        answer: 'Run Ollama on a mini PC, install WeChatFerry to intercept WeChat PC client messages, write a Python bridge to localhost:11434, and return LLM responses to the chat. Qwen2.5 7B Q4_K_M is recommended for Chinese.',
        bullets: ['WeChatFerry: Windows-only, most reliable 2026', 'Ollama HTTP API: POST to /api/generate', 'Qwen2.5 7B Q4_K_M: 5.5 GB VRAM, CJK native'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie verbinde ich WeChat mit einem lokalen LLM?',
        answer: 'Ollama auf Mini-PC, WeChatFerry installieren, Python-Brücke zu localhost:11434, LLM-Antwort zurücksenden. Qwen2.5 7B Q4_K_M für Chinesisch.',
        bullets: ['WeChatFerry: nur Windows, zuverlässigster Ansatz', 'Ollama HTTP API: POST an /api/generate', 'Qwen2.5 7B Q4_K_M: 5,5 GB VRAM, CJK-nativ'],
        updatedDate: '2026-05',
      },
      fr: { question: 'Comment connecter WeChat à un LLM local ?', answer: 'Ollama sur mini PC, WeChatFerry, bridge Python vers localhost:11434, réponse renvoyée dans le chat.', bullets: ['WeChatFerry : Windows uniquement', 'Qwen2.5 7B Q4_K_M recommandé'], updatedDate: '2026-05' },
      ja: { question: 'WeChatをローカルLLMに接続するには？', answer: 'ミニPCでOllamaを実行、WeChatFerryでメッセージをインターセプト、Python経由でlocalhost:11434にルーティング。', bullets: ['WeChatFerry：Windows専用', 'Qwen2.5 7B Q4_K_M推奨'], updatedDate: '2026-05' },
      zh: { question: '如何将微信连接到本地LLM？', answer: '在迷你主机运行Ollama，安装WeChatFerry，Python脚本路由至localhost:11434。', bullets: ['WeChatFerry：仅限Windows', 'Qwen2.5 7B Q4_K_M推荐'], updatedDate: '2026-05' },
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
          'Qwen2.5 7B Q4_K_M: empfohlen für chinesischen Chat – 5,5 GB VRAM, native CJK-Tokenisierung, 8–15 tok/s',
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
          '**Minisforum UM890 Pro (Empfohlen):** AMD Ryzen 9 8945HS, 32–64 GB DDR5. Qwen2.5 7B mit ~8 tok/s unter ROCm auf Linux. Stromverbrauch: ~35 W idle. Preis: ca. 320–420 €.',
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
          '**Qwen2.5 7B Q4_K_M (Erste Wahl):** Von Alibaba mit nativer CJK-Tokenisierung entwickelt. 5,5 GB VRAM, 8–15 tok/s. Versteht chinesische Redewendungen und umgangssprachliche Formulierungen weit besser als westliche Modelle. Installation: `ollama pull qwen2.5:7b`.',
          '**Qwen2.5 14B Q4_K_M:** Für komplexere Unterhaltungen mit 12–16 GB RAM. 9,5 GB VRAM, 4–8 tok/s.',
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
          { q: 'Welches Ollama-Modell ist am besten für chinesischen Text?', a: 'Qwen2.5 7B Q4_K_M von Alibaba – native CJK-Tokenisierung, 30–40 % effizienter bei chinesischem Text als Llama oder Mistral.' },
          { q: 'Kann ich dies auf einem Laptop betreiben?', a: 'Ja. Ein 16 GB RAM Laptop betreibt Qwen2.5 7B mit 8–15 tok/s (CPU-only). Antwortlatenz: 3–8 Sekunden.' },
          { q: 'Erfüllt lokale Inferenz DSGVO-Anforderungen?', a: 'Lokale LLMs vermeiden Auftragsverarbeitungsverträge mit LLM-Anbietern. WeChat-Metadaten verbleiben auf Tencent-Servern.' },
          { q: 'Wie behandle ich mehrstufige Unterhaltungen?', a: 'Gesprächsverlauf als Python-Liste von {role, content}-Dicts nach Absender indexiert führen und die letzten 10–15 Nachrichten an /api/chat übergeben.' },
        ],
      },
      relatedReading: {
        title: 'Weiterführende Lektüre',
        items: [
          '[WeChat-Bot mit lokalem LLM: Persönlicher Assistent](/power-local-llm/wechat-bot-local-llm-personal-assistant-2026?lang=de) — WeChatFerry-Tieftauchgang für persönliche Assistent-Einrichtung',
          '[Bester Mini-PC für lokale LLMs](/prompt-bites/best-mini-pc-for-local-llm?lang=de) — Hardware-Vergleich für Always-On-LLM-Server',
          '[Lokale KI-Agenten mit MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=de) — WeChat-Bots mit Tool-Use erweitern',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + Lokales LLM: Entwicklerleitfaden 2026',
      description: 'WeChat mit lokalem LLM verbinden: WeChatFerry, HTTP-Webhook, Mini-PC-Server. DSGVO-konform, keine Cloud-API.',
      url: 'https://www.promptquorum.com/power-local-llm/wechat-local-llm-integration-2026?lang=de',
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
        { '@type': 'Question', name: 'Welches Modell für chinesischen WeChat-Chat?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M – native CJK-Tokenisierung, 5,5 GB VRAM.' } },
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
      'Connecter WeChat à un LLM local en 2026 : WeChatFerry (Windows), pont HTTP webhook, serveur Ollama mini PC. Qwen2.5 7B recommandé pour le chinois. Aucune API cloud.',
    twitterDescription:
      'WeChat + LLM local : WeChatFerry, webhook HTTP ou serveur mini PC. Qwen2.5 7B pour le chinois. Aucune API cloud.',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'intégration WeChat LLM local',
    targetKeywords: ['wechat llm local 2026', 'wechat ollama integration', 'bot wechat ia local'],
    leadAnswerBlock:
      '**Connectez WeChat à un LLM local en exécutant Ollama sur un mini PC, en installant WeChatFerry pour intercepter les messages WeChat PC, et en écrivant un bridge Python vers l\'API HTTP Ollama. Recommandé : Qwen2.5 7B Q4_K_M pour les conversations en chinois.**',
    quickAnswerTop: {
      en: { question: 'How to connect WeChat to a local LLM?', answer: 'WeChatFerry + Ollama on Windows mini PC.', bullets: ['WeChatFerry: Windows only', 'Qwen2.5 7B recommended'], updatedDate: '2026-05' },
      de: { question: 'WeChat mit lokalem LLM verbinden?', answer: 'WeChatFerry + Ollama auf Windows Mini-PC.', bullets: ['WeChatFerry: nur Windows', 'Qwen2.5 7B empfohlen'], updatedDate: '2026-05' },
      fr: {
        question: 'Comment connecter WeChat à un LLM local ?',
        answer: 'Exécuter Ollama sur un mini PC, installer WeChatFerry (Windows), écrire un bridge Python vers localhost:11434, renvoyer les réponses dans WeChat.',
        bullets: ['WeChatFerry : Windows uniquement, solution la plus fiable 2026', 'API HTTP Ollama : POST vers /api/generate sans clé cloud', 'Qwen2.5 7B Q4_K_M : 5,5 Go VRAM, tokenisation CJK native'],
        updatedDate: '2026-05',
      },
      ja: { question: 'WeChatをローカルLLMに接続するには？', answer: 'WeChatFerry + Ollama on Windows。', bullets: ['WeChatFerry：Windows専用', 'Qwen2.5 7B推奨'], updatedDate: '2026-05' },
      zh: { question: '如何将微信连接到本地LLM？', answer: 'WeChatFerry + Ollama在Windows迷你主机上。', bullets: ['WeChatFerry：仅限Windows', 'Qwen2.5 7B推荐'], updatedDate: '2026-05' },
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
          'Qwen2.5 7B Q4_K_M : recommandé pour le chat en chinois — 5,5 Go VRAM, tokenisation CJK native',
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
          '**Minisforum UM890 Pro (Recommandé) :** AMD Ryzen 9 8945HS, 32–64 Go DDR5. ~8 tok/s sur Qwen2.5 7B. Consommation : ~35 W en veille. Prix : environ 320–420 €.',
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
          '**Qwen2.5 7B Q4_K_M (Premier choix) :** Développé par Alibaba avec tokenisation CJK native. 5,5 Go VRAM, 8–15 tok/s. Installation : `ollama pull qwen2.5:7b`.',
          '**Qwen2.5 14B Q4_K_M :** Pour des conversations plus riches avec 12–16 Go de RAM disponible.',
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
          { q: 'Quel modèle Ollama pour le chinois ?', a: 'Qwen2.5 7B Q4_K_M — tokenisation CJK native, 30–40% plus efficace que Llama ou Mistral.' },
          { q: 'Puis-je utiliser un laptop ?', a: 'Oui. 16 Go RAM suffit pour Qwen2.5 7B en mode CPU-only, 8–15 tok/s.' },
          { q: 'Conformité RGPD avec un LLM local ?', a: 'Les LLM locaux évitent les accords DPA avec les fournisseurs cloud. Les métadonnées WeChat restent chez Tencent.' },
          { q: 'Comment gérer les conversations multi-tours ?', a: 'Maintenir l\'historique comme liste de dicts {role, content} par expéditeur, transmettre les 10–15 derniers messages à /api/chat.' },
        ],
      },
      relatedReading: {
        title: 'Lecture connexe',
        items: [
          '[Bot WeChat avec LLM local : Guide assistant personnel](/power-local-llm/wechat-bot-local-llm-personal-assistant-2026?lang=fr)',
          '[Meilleur mini PC pour LLM local](/prompt-bites/best-mini-pc-for-local-llm?lang=fr)',
          '[Agents IA locaux avec MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=fr)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + LLM local : Guide développeur 2026',
      description: 'Connecter WeChat à un LLM local : WeChatFerry, HTTP webhook, serveur mini PC. Conformité RGPD, aucune API cloud.',
      url: 'https://www.promptquorum.com/power-local-llm/wechat-local-llm-integration-2026?lang=fr',
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
        { '@type': 'Question', name: 'Quel modèle pour le texte chinois ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M — tokenisation CJK native, 5,5 Go VRAM.' } },
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
    seoTitle: 'WeChat ローカルLLM統合 2026 | Ollama APIブリッジ',
    intro:
      'WeChatをローカルLLMに接続することで、世界最大のメッセージングアプリでプライベートなAIアシスタントが利用可能になります。クラウドAPIへのデータ送信は一切不要です。このガイドでは3つの統合パターン、中国語テキスト向けモデル選択、個人情報保護法対応について解説します。',
    metaDescription:
      'WeChatをローカルLLMに接続する方法 2026：WeChatFerry（Windows）、HTTPウェブフックブリッジ、ミニPCサーバー。中国語にはQwen2.5 7B推奨。クラウドAPI不要。',
    twitterDescription:
      'WeChat + ローカルLLM：WeChatFerry、HTTPウェブフック、ミニPCサーバー。Qwen2.5 7B中国語対応。クラウドAPI不要。',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'WeChat ローカルLLM統合',
    targetKeywords: ['wechat ローカル llm 2026', 'wechat ollama 統合', 'wechat ボット ローカル ai'],
    leadAnswerBlock:
      '**WeChatをローカルLLMに接続するには、ミニPC上でOllamaを実行し、WeChatFerry（Windows版）でWeChat PCクライアントのメッセージをインターセプトし、PythonブリッジでOllama HTTP APIにルーティングします。中国語チャットにはQwen2.5 7B Q4_K_Mを推奨します。**',
    quickAnswerTop: {
      en: { question: 'How to connect WeChat to local LLM?', answer: 'WeChatFerry + Ollama on Windows.', bullets: ['WeChatFerry: Windows only', 'Qwen2.5 7B recommended'], updatedDate: '2026-05' },
      de: { question: 'WeChat mit lokalem LLM verbinden?', answer: 'WeChatFerry + Ollama auf Windows.', bullets: ['WeChatFerry: nur Windows'], updatedDate: '2026-05' },
      fr: { question: 'Connecter WeChat au LLM local ?', answer: 'WeChatFerry + Ollama sur Windows.', bullets: ['WeChatFerry : Windows seulement'], updatedDate: '2026-05' },
      ja: {
        question: 'WeChatをローカルLLMに接続するには？',
        answer: 'ミニPC上でOllamaを実行し、WeChatFerry（Windows）でメッセージをインターセプト、Pythonブリッジでlocalhost:11434にルーティングし、LLMの応答をWeChatに返します。',
        bullets: [
          'WeChatFerry：Windowsのみ対応、2026年で最も信頼性の高い手法',
          'Ollama HTTP API：/api/generateへPOST、クラウド認証不要',
          'Qwen2.5 7B Q4_K_M：5.5 GB VRAM、ネイティブCJKトークン化',
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
          'Qwen2.5 7B Q4_K_M：中国語チャットに推奨——5.5 GB VRAM、ネイティブCJKトークン化',
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
          '**Minisforum UM890 Pro（推奨）：** AMD Ryzen 9 8945HS、32–64 GB DDR5。Qwen2.5 7Bで~8 tok/s。消費電力：~35 W。価格：約4.5〜6万円。',
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
          '**Qwen2.5 7B Q4_K_M（第1推奨）：** Alibabaがネイティブ中国語処理に特化して開発。5.5 GB VRAM、8–15 tok/s。インストール：`ollama pull qwen2.5:7b`。',
          '**Qwen2.5 14B Q4_K_M：** 12–16 GB RAM環境での充実した会話向け。',
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
          { q: '中国語向け最適Ollamaモデルは？', a: 'Qwen2.5 7B Q4_K_M。Alibabaがネイティブ中国語処理向けに開発、5.5 GB VRAM。' },
          { q: 'ノートパソコンで使えますか？', a: 'はい。16 GBのRAMでQwen2.5 7BをCPU-onlyで8〜15 tok/sで実行可能。応答遅延3〜8秒。' },
          { q: '個人情報保護法への対応は？', a: 'ローカルLLMはクラウドプロバイダーへのデータ転送を回避。WeChatメタデータはTencentサーバーに残ります。' },
          { q: 'マルチターン会話の管理方法は？', a: '送信者別に{role, content}辞書のリストを保持し、最新10〜15メッセージを/api/chatに渡します。' },
        ],
      },
      relatedReading: {
        title: '関連記事',
        items: [
          '[WeChat + ローカルLLM：パーソナルアシスタントガイド](/power-local-llm/wechat-bot-local-llm-personal-assistant-2026?lang=ja)',
          '[ローカルLLM向けベストミニPC](/prompt-bites/best-mini-pc-for-local-llm?lang=ja)',
          '[MCP対応ローカルAIエージェント 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=ja)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'WeChat + ローカルLLM統合：開発者ガイド 2026',
      description: 'WeChatをローカルLLMに接続：WeChatFerry、HTTPウェブフック、ミニPCサーバー。個人情報保護法対応、クラウドAPI不要。',
      url: 'https://www.promptquorum.com/power-local-llm/wechat-local-llm-integration-2026?lang=ja',
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
        { '@type': 'Question', name: '中国語テキスト向け最適モデルは？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M——5.5 GB VRAMのネイティブ中国語対応モデル。' } },
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
    seoTitle: '微信本地LLM集成指南 2026 | Ollama API桥接',
    intro:
      '将微信与本地LLM连接，让你在全球最常用的即时通讯应用中拥有私密AI助手——无需向任何云端API发送一条消息。本指南涵盖三种集成方案、中文文本的模型选择，以及如何通过本地推理满足《数据安全法》要求。',
    metaDescription:
      '2026年微信接入本地LLM：WeChatFerry（Windows）、HTTP Webhook桥接、迷你主机Ollama服务器。中文推荐Qwen2.5 7B。符合《数据安全法》，无需云端API。',
    twitterDescription:
      '微信 + 本地LLM：WeChatFerry、HTTP Webhook或迷你主机服务器。Qwen2.5 7B中文最优。无需云端API。',
    gammaEmbedUrl: '/presentations/wechat-local-llm-integration-2026-static.html',
    readTime: '11分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: '微信本地LLM集成',
    targetKeywords: ['微信 本地llm 2026', '微信 ollama 集成', '微信机器人 本地ai'],
    leadAnswerBlock:
      '**将微信接入本地LLM：在迷你主机上运行Ollama，安装WeChatFerry钩入微信PC客户端，编写Python桥接脚本将消息路由至Ollama HTTP API。中文聊天推荐Qwen2.5 7B Q4_K_M——5.5 GB显存，原生CJK分词，8–15 tok/s。**',
    quickAnswerTop: {
      en: { question: 'How to integrate WeChat with local LLM?', answer: 'WeChatFerry + Ollama on Windows mini PC.', bullets: ['WeChatFerry: Windows only', 'Qwen2.5 7B recommended'], updatedDate: '2026-05' },
      de: { question: 'WeChat mit lokalem LLM?', answer: 'WeChatFerry + Ollama auf Windows Mini-PC.', bullets: ['WeChatFerry: nur Windows'], updatedDate: '2026-05' },
      fr: { question: 'Intégrer WeChat avec LLM local ?', answer: 'WeChatFerry + Ollama sur Windows.', bullets: ['WeChatFerry : Windows seulement'], updatedDate: '2026-05' },
      ja: { question: 'WeChatとローカルLLM統合方法？', answer: 'WeChatFerry + Ollamaを使用。', bullets: ['WeChatFerry：Windows専用'], updatedDate: '2026-05' },
      zh: {
        question: '如何将微信与本地LLM集成？',
        answer: '在迷你主机上运行Ollama，安装WeChatFerry钩入微信PC客户端，编写Python脚本将消息路由至localhost:11434，并将LLM回复发送回对话。',
        bullets: [
          'WeChatFerry：仅限Windows，2026年最稳定的微信集成方案',
          'Ollama HTTP API：POST至/api/generate，无需任何云端密钥',
          'Qwen2.5 7B Q4_K_M：5.5 GB显存，原生中文分词，速度8–15 tok/s',
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
          'Qwen2.5 7B Q4_K_M：中文聊天首选——5.5 GB显存，原生中文分词，8–15 tok/s',
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
          '**铭凡UM890 Pro（推荐）：** AMD Ryzen 9 8945HS，32–64 GB DDR5。Linux ROCm下Qwen2.5 7B约8 tok/s。功耗：~35 W待机。价格：约2500–3200元。',
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
          '**Qwen2.5 7B Q4_K_M（首选）：** 阿里巴巴开发，原生中文分词。5.5 GB显存，8–15 tok/s。能理解中文成语、口语和表达，远优于西方优先模型。安装：`ollama pull qwen2.5:7b`。',
          '**Qwen2.5 14B Q4_K_M：** 适合拥有12–16 GB内存的设备，对话质量明显提升，多轮推理更强。',
          '**DeepSeek-R1-Distill-Qwen-7B：** 中文问答和推理表现良好，日常对话略弱于Qwen2.5 7B。',
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
          { q: '微信中文聊天最推荐哪个Ollama模型？', a: 'Qwen2.5 7B Q4_K_M。阿里巴巴开发的原生中文分词模型，处理中文比Llama或Mistral效率高30–40%。' },
          { q: '可以在笔记本电脑上运行吗？', a: '可以。16 GB内存的笔记本以纯CPU运行Qwen2.5 7B，速度约8–15 tok/s，每条消息响应延迟3–8秒，可接受用于聊天场景。' },
          { q: '本地推理能满足《数据安全法》要求吗？', a: '对于推理内容（提示词和回复），是的——数据不离开您的设备。微信消息元数据依据微信ToS仍存储在腾讯服务器上。' },
          { q: '如何处理多轮对话？', a: '将对话历史以sender为键存储为Python列表（每项为{role, content}字典），每次请求将最近10–15条消息传递给/api/chat。' },
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[微信机器人与本地LLM：个人助手指南](/power-local-llm/wechat-bot-local-llm-personal-assistant-2026?lang=zh) — WeChatFerry深度个人助手配置',
          '[本地LLM最佳迷你主机](/prompt-bites/best-mini-pc-for-local-llm?lang=zh) — 常驻LLM服务器硬件对比',
          '[本地AI智能体与MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=zh) — 为微信机器人添加工具调用能力',
          '[用本地AI智能体替代Zapier](/power-local-llm/replace-zapier-with-local-ai-agents?lang=zh) — 由微信事件触发的自动化工作流',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '微信 + 本地LLM集成：开发者指南 2026',
      description: '微信接入本地LLM：WeChatFerry、HTTP Webhook、迷你主机服务器。符合《数据安全法》，无需云端API。',
      url: 'https://www.promptquorum.com/power-local-llm/wechat-local-llm-integration-2026?lang=zh',
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
        { '@type': 'SoftwareApplication', name: 'Qwen2.5 7B' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'WeChatFerry支持Mac版微信吗？', acceptedAnswer: { '@type': 'Answer', text: '不支持。WeChatFerry仅支持Windows版微信PC客户端。' } },
        { '@type': 'Question', name: '微信中文聊天推荐哪个模型？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M——5.5 GB显存，原生中文分词，速度8–15 tok/s。' } },
        { '@type': 'Question', name: '本地推理能满足《数据安全法》要求吗？', acceptedAnswer: { '@type': 'Answer', text: '对于推理内容可以——数据不出设备。微信元数据仍在腾讯服务器上。' } },
      ],
    },
  },
}
