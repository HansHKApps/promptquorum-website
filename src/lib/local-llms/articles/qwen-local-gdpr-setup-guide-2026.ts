import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '../types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'How to Set Up Qwen Locally for GDPR-Compliant Workflows',
    seoTitle: 'GDPR-Compliant Local LLM Setup with Qwen 2026 | PromptQuorum',
    metaDescription: 'Step-by-step guide to running Qwen 3 14B locally for GDPR compliance: Ollama install, network isolation, disk encryption, and Article 30 audit trail. Updated May 2026.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'DPOs, IT leads, and legal ops teams setting up a GDPR-compliant local LLM stack',
    primaryTerm: 'GDPR-compliant local LLM setup',
    leadAnswerBlock: '**Running Qwen 3 14B locally via Ollama on your own hardware produces a deployment where no prompt data leaves your jurisdiction — directly satisfying GDPR Articles 44, 25, and 5(1)(f).**',
    current_models_mentioned: ['Qwen 3 14B', 'Qwen 3 Coder 14B', 'Qwen 3 8B', 'Llama 4 Scout'],
    current_hardware_mentioned: ['RTX 3080', 'RTX 4070', 'RTX 3090'],
    quickAnswerTop: {
      en: {
        question: 'How do I set up Qwen locally for GDPR compliance?',
        answer: 'Install Ollama, run ollama run qwen2.5:14b on a machine with 12 GB VRAM, block all outbound network calls from the inference process, enable full-disk encryption, and log prompt/response hashes (not content) for your Article 30 processing record. Total setup time: under 30 minutes.',
        bullets: [
          'Hardware: RTX 3080 / RTX 4070 / any 12 GB VRAM GPU — minimum for Qwen 3 14B at Q4',
          'Isolation: firewall the Ollama port (11434) to LAN-only; disable telemetry in .ollama/config',
          'Article 30 record: log model name, quantization, timestamp, and prompt hash — never raw PII',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie richte ich Qwen lokal für DSGVO-Compliance ein?',
        answer: 'Ollama installieren, ollama run qwen2.5:14b auf einer Maschine mit 12 GB VRAM ausführen, alle ausgehenden Netzwerkaufrufe des Inferenzprozesses blockieren, Festplattenverschlüsselung aktivieren und Prompt/Antwort-Hashes (nicht den Inhalt) für das Verarbeitungsverzeichnis nach Artikel 30 protokollieren. Einrichtungszeit: unter 30 Minuten.',
        bullets: [
          'Hardware: RTX 3080 / RTX 4070 / beliebige 12-GB-VRAM-GPU — Minimum für Qwen 3 14B bei Q4',
          'Isolation: Ollama-Port (11434) per Firewall auf LAN beschränken; Telemetrie in .ollama/config deaktivieren',
          'Artikel-30-Verzeichnis: Modellname, Quantisierung, Zeitstempel und Prompt-Hash protokollieren — keine rohen personenbezogenen Daten',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Comment configurer Qwen localement pour la conformité RGPD ?',
        answer: 'Installez Ollama, exécutez ollama run qwen2.5:14b sur une machine avec 12 Go de VRAM, bloquez tous les appels réseau sortants du processus d\'inférence, activez le chiffrement intégral du disque, et journalisez les hachages de prompt/réponse (pas le contenu) pour votre registre de traitement Article 30. Durée d\'installation : moins de 30 minutes.',
        bullets: [
          'Matériel : RTX 3080 / RTX 4070 / toute GPU 12 Go VRAM — minimum pour Qwen 3 14B en Q4',
          'Isolation : restreindre le port Ollama (11434) au LAN par pare-feu ; désactiver la télémétrie dans .ollama/config',
          'Registre Article 30 : journaliser nom du modèle, quantisation, horodatage et hash du prompt — jamais les données personnelles brutes',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'GDPR準拠のためにQwenをローカルでセットアップするには？',
        answer: 'Ollamaをインストールし、12 GB VRAMのマシンでollama run qwen2.5:14bを実行し、推論プロセスのすべての外部ネットワーク呼び出しをブロックし、フルディスク暗号化を有効にし、第30条処理記録のためにプロンプト/レスポンスのハッシュ（内容でなく）をログに記録します。セットアップ時間：30分未満。',
        bullets: [
          'ハードウェア：RTX 3080 / RTX 4070 / 12 GB VRAM以上のGPU——Q4でのQwen 3 14Bの最低要件',
          '分離：ファイアウォールでOllamaポート（11434）をLAN専用に制限；.ollama/configでテレメトリを無効化',
          '第30条記録：モデル名・量子化・タイムスタンプ・プロンプトハッシュをログ記録——生の個人データは含めない',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '如何为GDPR合规本地设置Qwen？',
        answer: '安装Ollama，在12 GB VRAM的机器上运行ollama run qwen2.5:14b，阻止推理进程的所有外部网络调用，启用全盘加密，并记录提示词/响应哈希（非内容）用于第30条处理记录。安装时间：30分钟以内。',
        bullets: [
          '硬件：RTX 3080 / RTX 4070 / 任意12 GB VRAM GPU——Q4运行Qwen 3 14B的最低要求',
          '隔离：防火墙限制Ollama端口（11434）仅限局域网；在.ollama/config中禁用遥测',
          '第30条记录：记录模型名称、量化、时间戳和提示词哈希——绝不包含原始个人数据',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Why Local Deployment Satisfies GDPR', anchor: 'gdpr-case' },
      { label: 'Hardware Requirements', anchor: 'hardware' },
      { label: 'Ollama Installation', anchor: 'ollama-install' },
      { label: 'Network Isolation', anchor: 'network-isolation' },
      { label: 'Disk Encryption', anchor: 'disk-encryption' },
      { label: 'Article 30 Audit Trail', anchor: 'article-30' },
      { label: 'What to Document for Your DPA', anchor: 'dpa-docs' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Local Qwen deployment satisfies GDPR Articles 44 (no third-country transfer), 25 (privacy by design), and 5(1)(f) (data integrity) in a single architecture decision',
          'Minimum hardware: any 12 GB VRAM GPU (RTX 3080, RTX 4070 Ti, or equivalent) running Qwen 3 14B at Q4_K_M via Ollama',
          'Critical isolation steps: firewall Ollama port 11434 to LAN-only, disable model-download telemetry, run on an isolated network segment',
          'Article 30 processing record: log model version, quantization level, session timestamp, and a SHA-256 hash of the prompt — never log PII content itself',
          'Total setup time from clean OS to first GDPR-safe inference: under 30 minutes',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: 'Why Local Deployment Satisfies GDPR',
        content: [
          '<strong>The three GDPR articles most directly implicated by AI usage are Article 44 (international data transfers), Article 25 (data protection by design and by default), and Article 5(1)(f) (integrity and confidentiality). Local LLM deployment addresses all three through a single architectural choice: the model runs on your hardware, inside your jurisdiction, with no outbound data transfer.</strong>',
          'Article 44 is the hardest to satisfy for cloud AI. Every prompt containing personal data sent to OpenAI, Anthropic, or Alibaba Cloud requires a legal basis for the transfer — Standard Contractual Clauses at minimum, often plus a Transfer Impact Assessment. When the inference happens locally, no Article 44 transfer occurs. The legal question disappears.',
          'Article 25 requires that processing be designed from the ground up to protect personal data. A local model is the textbook example: by default, no data leaves the building. Auditors and DPAs are familiar with this architecture. Documentation is straightforward.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Running Qwen locally satisfies GDPR Articles 44, 25, and 5(1)(f) through a single architectural choice: the model processes all data on your hardware, inside your jurisdiction.' },
          { type: 'plain-terms', text: 'GDPR has strict rules about sending data to other countries. A local AI model keeps data on your own machines — no data crosses borders, so the international-transfer rules simply do not apply.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements by Organisation Size',
        content: [
          '<strong>For a single DPO or legal ops analyst: any GPU with 12 GB VRAM handles Qwen 3 14B Q4_K_M at practical inference speeds (~18 tok/s on RTX 3080). For a team of 5–10 users sharing a central server: 24 GB VRAM (RTX 3090 or RTX 4090) handles multiple simultaneous requests.</strong> Enterprise multi-user deployment requires multi-GPU setup — out of scope for this guide.',
          'Minimum viable setup: RTX 3080, RTX 4070 Ti, or any GPU with 12 GB VRAM. Dedicated GPU recommended over shared workstation GPU — you want inference-only, not a GPU switching between gaming and LLM workloads. CPU fallback is possible via Ollama but inference speed drops to ~3 tok/s.',
        ],
        columns: ['Team Size', 'Recommended GPU', 'Model', 'Expected Speed'],
        rows: [
          { 'Team Size': '1 user', 'Recommended GPU': 'RTX 3080 (12 GB)', 'Model': 'Qwen 3 14B Q4', 'Expected Speed': '~18 tok/s' },
          { 'Team Size': '2–5 users (queued)', 'Recommended GPU': 'RTX 4070 Ti (12 GB)', 'Model': 'Qwen 3 14B Q4', 'Expected Speed': '~22 tok/s' },
          { 'Team Size': '5–10 users (shared)', 'Recommended GPU': 'RTX 3090 / 4090 (24 GB)', 'Model': 'Qwen 3 14B Q5', 'Expected Speed': '~28 tok/s' },
          { 'Team Size': 'Long-document team', 'Recommended GPU': 'RTX 3090 (24 GB)', 'Model': 'Llama 4 Scout (10M ctx)', 'Expected Speed': '~15 tok/s' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'Ollama Installation — Step by Step',
        content: [
          '<strong>Install Ollama on Linux, macOS, or Windows. Pull Qwen 3 14B once over HTTPS. After that, inference is fully offline.</strong>',
        ],
        numberedItems: [
          {
            title: 'Install Ollama',
            whyItMatters: 'One-line install on Linux: <code>curl -fsSL https://ollama.com/install.sh | sh</code>. macOS: download the .app from ollama.com. Windows: download the .exe installer. Verify: <code>ollama --version</code> should return a version number.',
          },
          {
            title: 'Pull the model (one-time HTTPS download)',
            whyItMatters: 'Run <code>ollama pull qwen2.5:14b</code>. This downloads ~9 GB from Hugging Face via HTTPS. This is the only time external network access is required. For an air-gapped environment: download on a networked machine, transfer the GGUF file via USB, and import with <code>ollama create qwen2.5:14b --from /path/to/file.gguf</code>.',
          },
          {
            title: 'Disable telemetry',
            whyItMatters: 'Create or edit <code>~/.ollama/config.json</code> and add: <code>{"telemetry": false}</code>. Ollama does not send inference traffic externally, but telemetry pings on startup. Disabling it eliminates any residual network activity from the runtime.',
          },
          {
            title: 'Test inference',
            whyItMatters: 'Run <code>ollama run qwen2.5:14b</code> and type a prompt. Confirm the response generates locally. Use <code>ss -tnp | grep ollama</code> (Linux) or Wireshark to verify no outbound connections occur during inference.',
          },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'Network Isolation',
        content: [
          '<strong>Ollama serves an HTTP API on port 11434 by default. This port must be restricted to LAN access only — never exposed to the internet. Inference on a properly configured Ollama server generates zero outbound traffic.</strong>',
          'On Linux with UFW: <code>ufw allow from 192.168.0.0/16 to any port 11434</code> followed by <code>ufw deny 11434</code>. This allows LAN clients and blocks all external access. For single-user local use, bind Ollama to localhost only by setting the environment variable: <code>OLLAMA_HOST=127.0.0.1 ollama serve</code>.',
          'Additional hardening: run Ollama as a non-root system user, restrict the model directory to that user, and audit outbound connections monthly via <code>conntrack -L | grep ESTABLISHED</code> during an inference session to confirm no external calls.',
        ],
        callouts: [
          {
            type: 'important',
            text: 'If you use Open WebUI or any browser-accessible frontend for Ollama, ensure the frontend is also restricted to LAN-only access. The isolation of the Ollama API is not sufficient if the frontend is publicly accessible.',
          },
        ],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: 'Disk Encryption — GDPR Article 5(1)(f)',
        content: [
          '<strong>GDPR Article 5(1)(f) requires that personal data is processed with appropriate security, including protection against unauthorised access. Full-disk encryption ensures that if a hardware asset is lost or stolen, the model files and any logged data cannot be accessed.</strong>',
          'Linux: LUKS2 with dm-crypt is the standard. Enable at OS install time for best coverage. Existing systems: <code>cryptsetup</code> can encrypt specific partitions. macOS: FileVault is built-in — enable in System Settings → Privacy & Security → FileVault. Windows: BitLocker on Pro/Enterprise editions.',
          'Encrypt both the OS drive and any external drives used to store model files or session logs. The Qwen model weights themselves do not contain personal data, but any session logs or fine-tuned models should be treated as potentially containing it.',
        ],
      },
      article30: {
        id: 'article-30',
        title: 'Article 30 Audit Trail — What to Log and How',
        content: [
          '<strong>GDPR Article 30 requires organisations to maintain a record of processing activities involving personal data. For an LLM deployment, this means documenting: the purpose of processing, the categories of data processed, the technical and organisational measures, and retention periods.</strong>',
          'What to log per inference session: (1) model name and version (e.g., qwen2.5:14b), (2) quantization level (Q4_K_M), (3) session timestamp (ISO 8601), (4) SHA-256 hash of the input prompt — not the raw text. The hash allows you to demonstrate consistency without retaining PII. (5) User identifier (pseudonymous) if applicable.',
          'What NOT to log: the raw prompt text, the raw response text, any personally identifiable information extracted from the response. The purpose of the hash is to create a tamper-evident record without creating a new personal data retention problem.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'One-line prompt hash in Python: <code>import hashlib; hashlib.sha256(prompt.encode()).hexdigest()</code>. Store this alongside the session metadata, not the original prompt.',
          },
        ],
      },
      dpaDoc: {
        id: 'dpa-docs',
        title: 'What to Document for Your DPA or Internal Audit',
        content: [
          '<strong>If a Data Protection Authority audits your LLM deployment, four documents cover most questions: (1) Article 30 processing register entry, (2) Technical architecture diagram showing data flow, (3) Evidence of disk encryption, (4) Network monitoring log showing absence of outbound inference traffic.</strong>',
          'Article 30 entry for local LLM: Controller identity, Purpose of processing (e.g., "Legal document summarisation"), Categories of personal data (e.g., "Contractual party names, financial terms"), Technical measures (local model, full-disk encryption, LAN-only access), Retention period for session logs (typically 30–90 days of hashes only).',
          'The architecture diagram is the single most important document for a DPA. A one-page diagram showing: User → Ollama API (LAN-only) → Model inference → Response, with a clear "no outbound internet connection" annotation, answers the Article 44 question visually and efficiently.',
        ],
        faqs: [
          {
            q: 'Does a local LLM require a Data Protection Impact Assessment (DPIA)?',
            a: 'Possibly. A DPIA is required when processing is likely to result in a high risk to individuals — for example, processing medical records, employee performance data, or legal documents at scale. The "systematic and large-scale" threshold is the trigger, not the AI tool itself. A single analyst using Qwen 3 14B for contract review likely does not trigger mandatory DPIA. A healthcare organisation processing hundreds of patient records per day likely does.',
          },
          {
            q: 'Can I use Open WebUI with Ollama for GDPR-compliant access?',
            a: 'Yes, if Open WebUI is also LAN-restricted. Run Open WebUI on the same isolated network as Ollama, bind its port to the internal interface only, and enable authentication. Open WebUI supports user accounts — this also gives you a user-level audit trail that maps to Article 30 requirements.',
          },
          {
            q: 'Which Qwen model variant is best for legal and HR text in European languages?',
            a: 'Qwen 3 14B Q4_K_M is the recommended baseline: strong across German, French, Italian, Spanish, and English at the 14B tier. For code-heavy legal workflows (e.g., processing contracts with embedded code clauses or structured data), Qwen 3 Coder 14B Q4_K_M. For organisations limited to 6–8 GB VRAM, Qwen 3 8B performs well on multilingual text.',
          },
          {
            q: 'Do I need a Data Processing Agreement with Ollama?',
            a: 'No. Ollama is a local runtime with no server component. It does not process data on your behalf — the model weights run entirely on your hardware. There is no Ollama entity acting as a data processor under GDPR Article 28. You do not need a DPA.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Qwen lokal einrichten für DSGVO-konforme Workflows',
    seoTitle: 'DSGVO-konformes lokales LLM mit Qwen 2026 | PromptQuorum',
    metaDescription: 'Qwen lokal DSGVO-konform einrichten 2026: Anleitung für datenschutzkonforme KI. Ollama, Verschlüsselung und Zugriffskontrolle für Unternehmen.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9 Min. Lesezeit',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Lokale Qwen-Bereitstellung erfüllt DSGVO-Artikel 44 (kein Drittlandtransfer), Artikel 25 (Datenschutz durch Technikgestaltung) und Artikel 5(1)(f) (Datenintegrität) durch eine einzige Architekturentscheidung',
          'Mindest-Hardware: beliebige 12-GB-VRAM-GPU (RTX 3080, RTX 4070 Ti oder ähnlich) für Qwen 3 14B bei Q4_K_M via Ollama',
          'Kritische Isolierungsschritte: Ollama-Port 11434 per Firewall auf LAN beschränken, Telemetrie deaktivieren, auf isoliertem Netzwerksegment betreiben',
          'Artikel-30-Verarbeitungsverzeichnis: Modellversion, Quantisierung, Sitzungszeitstempel und SHA-256-Hash des Prompts protokollieren — niemals personenbezogene Dateninhalte selbst',
          'Gesamte Einrichtungszeit von frischem OS bis erster DSGVO-sicherer Inferenz: unter 30 Minuten',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: 'Warum lokale Bereitstellung die DSGVO erfüllt',
        content: [
          '<strong>Die drei DSGVO-Artikel, die durch KI-Nutzung am direktesten betroffen sind, sind Artikel 44 (internationale Datentransfers), Artikel 25 (Datenschutz durch Technikgestaltung) und Artikel 5(1)(f) (Integrität und Vertraulichkeit). Die lokale LLM-Bereitstellung adressiert alle drei durch eine einzige Architekturentscheidung: Das Modell läuft auf Ihrer Hardware, innerhalb Ihrer Jurisdiktion, ohne ausgehenden Datentransfer.</strong>',
          'Artikel 44 ist für Cloud-KI am schwierigsten zu erfüllen. Jeder Prompt mit personenbezogenen Daten, der an OpenAI, Anthropic oder Alibaba Cloud gesendet wird, erfordert eine Rechtsgrundlage für den Transfer — mindestens Standardvertragsklauseln, oft auch eine Transferfolgenabschätzung. Bei lokaler Inferenz findet kein Artikel-44-Transfer statt.',
          'Artikel 25 verlangt, dass die Verarbeitung von Grund auf zum Schutz personenbezogener Daten konzipiert ist. Ein lokales Modell ist das Lehrbuchbeispiel: Standardmäßig verlässt keine Daten das Gebäude. Prüfer und Datenschutzbehörden sind mit dieser Architektur vertraut.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen lokal zu betreiben erfüllt DSGVO-Artikel 44, 25 und 5(1)(f) durch eine einzige Architekturentscheidung: das Modell verarbeitet alle Daten auf Ihrer Hardware, innerhalb Ihrer Jurisdiktion.' },
          { type: 'plain-terms', text: 'Die DSGVO hat strenge Regeln zum Senden von Daten ins Ausland. Ein lokales KI-Modell hält Daten auf Ihren eigenen Maschinen — keine Daten überqueren Grenzen, daher gelten die Internationaltransfer-Regeln schlicht nicht.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Anforderungen nach Organisationsgröße',
        content: [
          '<strong>Für einen einzelnen Datenschutzbeauftragten oder eine Rechtsabteilung: jede GPU mit 12 GB VRAM ermöglicht Qwen 3 14B Q4_K_M bei praktischen Inferenzgeschwindigkeiten (~18 Tok/s auf RTX 3080). Für ein Team mit 5–10 gemeinsamen Nutzern: 24 GB VRAM (RTX 3090 oder RTX 4090) verarbeitet mehrere gleichzeitige Anfragen.</strong>',
          'Mindest-Setup: RTX 3080, RTX 4070 Ti oder beliebige 12-GB-VRAM-GPU. Dedizierte GPU empfohlen — keine GPU, die zwischen Gaming und LLM wechselt. CPU-Fallback über Ollama ist möglich, aber Inferenzgeschwindigkeit sinkt auf ~3 Tok/s.',
        ],
        columns: ['Teamgröße', 'Empfohlene GPU', 'Modell', 'Erwartete Geschwindigkeit'],
        rows: [
          { 'Teamgröße': '1 Nutzer', 'Empfohlene GPU': 'RTX 3080 (12 GB)', 'Modell': 'Qwen 3 14B Q4', 'Erwartete Geschwindigkeit': '~18 Tok/s' },
          { 'Teamgröße': '2–5 Nutzer (gereihte Anfragen)', 'Empfohlene GPU': 'RTX 4070 Ti (12 GB)', 'Modell': 'Qwen 3 14B Q4', 'Erwartete Geschwindigkeit': '~22 Tok/s' },
          { 'Teamgröße': '5–10 Nutzer (geteilt)', 'Empfohlene GPU': 'RTX 3090 / 4090 (24 GB)', 'Modell': 'Qwen 3 14B Q5', 'Erwartete Geschwindigkeit': '~28 Tok/s' },
          { 'Teamgröße': 'Langdokument-Team', 'Empfohlene GPU': 'RTX 3090 (24 GB)', 'Modell': 'Llama 4 Scout (10M Kontext)', 'Erwartete Geschwindigkeit': '~15 Tok/s' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'Ollama-Installation — Schritt für Schritt',
        content: ['<strong>Ollama auf Linux, macOS oder Windows installieren. Qwen 3 14B einmalig über HTTPS herunterladen. Danach ist Inferenz vollständig offline.</strong>'],
        numberedItems: [
          { title: 'Ollama installieren', whyItMatters: 'Einzeiler auf Linux: <code>curl -fsSL https://ollama.com/install.sh | sh</code>. macOS: .app von ollama.com herunterladen. Windows: .exe-Installer. Überprüfen: <code>ollama --version</code> gibt Versionsnummer aus.' },
          { title: 'Modell herunterladen (einmaliger HTTPS-Download)', whyItMatters: '<code>ollama pull qwen2.5:14b</code> ausführen. ~9 GB werden von Hugging Face über HTTPS heruntergeladen. Dies ist die einzige erforderliche externe Netzwerkverbindung. Für Air-Gap-Umgebungen: auf vernetztem Rechner herunterladen, GGUF-Datei per USB übertragen und mit <code>ollama create qwen2.5:14b --from /pfad/zur/datei.gguf</code> importieren.' },
          { title: 'Telemetrie deaktivieren', whyItMatters: '<code>~/.ollama/config.json</code> erstellen/bearbeiten und hinzufügen: <code>{"telemetry": false}</code>. Ollama sendet keine Inferenzdaten extern, aber Telemetrie-Pings beim Start. Deaktivierung eliminiert jede verbleibende Netzwerkaktivität.' },
          { title: 'Inferenz testen', whyItMatters: '<code>ollama run qwen2.5:14b</code> ausführen und Prompt eingeben. Bestätigen, dass Antwort lokal generiert wird. Mit <code>ss -tnp | grep ollama</code> (Linux) oder Wireshark verifizieren, dass keine ausgehenden Verbindungen während der Inferenz entstehen.' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'Netzwerkisolierung',
        content: [
          '<strong>Ollama bietet standardmäßig eine HTTP-API auf Port 11434 an. Dieser Port muss auf LAN-Zugang beschränkt werden — niemals zum Internet geöffnet. Inferenz auf einem korrekt konfigurierten Ollama-Server erzeugt null ausgehenden Datenverkehr.</strong>',
          'Auf Linux mit UFW: <code>ufw allow from 192.168.0.0/16 to any port 11434</code>, dann <code>ufw deny 11434</code>. Für Single-User-Nutzung Ollama nur an Localhost binden: <code>OLLAMA_HOST=127.0.0.1 ollama serve</code>.',
        ],
        callouts: [{ type: 'important', text: 'Wenn Sie Open WebUI oder ein browserbasiertes Frontend für Ollama verwenden, stellen Sie sicher, dass auch das Frontend nur LAN-zugänglich ist. Die Isolierung der Ollama-API reicht nicht aus, wenn das Frontend öffentlich zugänglich ist.' }],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: 'Festplattenverschlüsselung — DSGVO-Artikel 5(1)(f)',
        content: [
          '<strong>DSGVO-Artikel 5(1)(f) verlangt, dass personenbezogene Daten mit angemessener Sicherheit verarbeitet werden, einschließlich Schutz vor unbefugtem Zugriff. Vollständige Festplattenverschlüsselung stellt sicher, dass bei Verlust oder Diebstahl eines Hardware-Assets die Modelldateien und protokollierten Daten nicht zugänglich sind.</strong>',
          'Linux: LUKS2 mit dm-crypt ist der Standard — am besten bei OS-Installation aktivieren. macOS: FileVault ist integriert. Windows: BitLocker (Pro/Enterprise). Modell-Weights enthalten keine personenbezogenen Daten, aber Sitzungsprotokolle und Fine-Tuned-Modelle sollten als möglicherweise solche enthaltend behandelt werden.',
        ],
      },
      article30: {
        id: 'article-30',
        title: 'Artikel-30-Protokoll — Was und wie protokollieren',
        content: [
          '<strong>DSGVO-Artikel 30 verpflichtet Organisationen zur Führung eines Verzeichnisses der Verarbeitungstätigkeiten, die personenbezogene Daten betreffen. Für eine LLM-Bereitstellung bedeutet das: Dokumentation von Verarbeitungszweck, Datenkategorien, technischen Maßnahmen und Aufbewahrungsfristen.</strong>',
          'Was pro Inferenzsitzung protokolliert wird: (1) Modellname und -version, (2) Quantisierungsstufe, (3) Sitzungszeitstempel (ISO 8601), (4) SHA-256-Hash des Eingabe-Prompts — nicht der Rohtext. (5) Nutzerkennung (pseudonymisiert) falls zutreffend. Was NICHT protokolliert wird: Rohtext des Prompts, Rohtext der Antwort, extrahierte personenbezogene Daten.',
        ],
        faqs: [
          { q: 'Erfordert ein lokales LLM eine Datenschutz-Folgenabschätzung (DSFA)?', a: 'Möglicherweise. Eine DSFA ist erforderlich, wenn die Verarbeitung voraussichtlich ein hohes Risiko für Personen birgt — z. B. bei medizinischen Unterlagen, Mitarbeiterleistungsdaten oder Rechtsdokumenten im großen Maßstab. Ein einzelner Analyst, der Qwen 3 14B für Vertragsprüfung nutzt, löst wahrscheinlich keine obligatorische DSFA aus. Eine Gesundheitsorganisation, die täglich Hunderte von Patientenakten verarbeitet, wahrscheinlich schon.' },
          { q: 'Welches Qwen-Modell ist am besten für Rechts- und HR-Text in europäischen Sprachen?', a: 'Qwen 3 14B Q4_K_M ist die empfohlene Basis: stark in Deutsch, Französisch, Italienisch, Spanisch und Englisch auf dem 14B-Tier. Für VRAM-begrenzte Umgebungen (6–8 GB): Qwen 3 8B bietet gute mehrsprachige Leistung.' },
        ],
      },
    },
  },
  fr: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Configurer Qwen localement pour des workflows conformes au RGPD',
    seoTitle: 'Configuration LLM local conforme RGPD avec Qwen 2026 | PromptQuorum',
    metaDescription: 'Guide étape par étape pour faire tourner Qwen 3 14B localement en conformité RGPD : installation Ollama, isolation réseau, chiffrement disque, journal Article 30. Mai 2026.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9 min de lecture',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Le déploiement local de Qwen satisfait les Articles 44 (pas de transfert vers pays tiers), 25 (protection dès la conception) et 5(1)(f) (intégrité des données) par une seule décision d\'architecture',
          'Matériel minimum : toute GPU 12 Go VRAM (RTX 3080, RTX 4070 Ti ou équivalent) pour Qwen 3 14B en Q4_K_M via Ollama',
          'Étapes d\'isolation critiques : restreindre le port Ollama 11434 au LAN par pare-feu, désactiver la télémétrie, faire tourner sur un segment réseau isolé',
          'Registre de traitement Article 30 : journaliser version du modèle, quantisation, horodatage de session et hash SHA-256 du prompt — jamais le contenu personnel brut',
          'Durée totale d\'installation depuis un OS propre jusqu\'à la première inférence conforme RGPD : moins de 30 minutes',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: 'Pourquoi le déploiement local satisfait le RGPD',
        content: [
          '<strong>Les trois articles du RGPD les plus directement impliqués par l\'utilisation de l\'IA sont l\'Article 44 (transferts internationaux), l\'Article 25 (protection dès la conception) et l\'Article 5(1)(f) (intégrité et confidentialité). Le déploiement local d\'un LLM répond à tous les trois par une seule décision architecturale : le modèle tourne sur votre matériel, dans votre juridiction, sans transfert de données sortant.</strong>',
          'L\'Article 44 est le plus difficile à satisfaire pour l\'IA cloud. Chaque prompt contenant des données personnelles envoyé à OpenAI, Anthropic ou Alibaba Cloud nécessite une base légale — des CCT au minimum, souvent plus une EIT. Avec une inférence locale, aucun transfert Article 44 n\'a lieu.',
          'L\'Article 25 exige que le traitement soit conçu dès le départ pour protéger les données personnelles. Un modèle local est l\'exemple type : par défaut, aucune donnée ne quitte le bâtiment. Les auditeurs et les CNIL sont familiers avec cette architecture.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Exécuter Qwen localement satisfait les Articles RGPD 44, 25 et 5(1)(f) par une seule décision architecturale : le modèle traite toutes les données sur votre matériel, dans votre juridiction.' },
          { type: 'plain-terms', text: 'Le RGPD a des règles strictes sur l\'envoi de données à l\'étranger. Un modèle IA local garde les données sur vos propres machines — aucune donnée ne franchit de frontière, donc les règles sur les transferts internationaux ne s\'appliquent tout simplement pas.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Besoins matériels selon la taille de l\'organisation',
        content: [
          '<strong>Pour un DPO ou analyste juridique seul : toute GPU 12 Go VRAM gère Qwen 3 14B Q4_K_M à des vitesses pratiques (~18 tok/s sur RTX 3080). Pour une équipe de 5 à 10 utilisateurs partageant un serveur central : 24 Go VRAM (RTX 3090 ou RTX 4090).</strong>',
          'Configuration minimale viable : RTX 3080, RTX 4070 Ti, ou toute GPU 12 Go VRAM. GPU dédié recommandé. Le fallback CPU via Ollama est possible mais la vitesse d\'inférence descend à ~3 tok/s.',
        ],
        columns: ['Taille d\'équipe', 'GPU recommandée', 'Modèle', 'Vitesse attendue'],
        rows: [
          { 'Taille d\'équipe': '1 utilisateur', 'GPU recommandée': 'RTX 3080 (12 Go)', 'Modèle': 'Qwen 3 14B Q4', 'Vitesse attendue': '~18 tok/s' },
          { 'Taille d\'équipe': '2–5 utilisateurs (file)', 'GPU recommandée': 'RTX 4070 Ti (12 Go)', 'Modèle': 'Qwen 3 14B Q4', 'Vitesse attendue': '~22 tok/s' },
          { 'Taille d\'équipe': '5–10 utilisateurs (partagé)', 'GPU recommandée': 'RTX 3090 / 4090 (24 Go)', 'Modèle': 'Qwen 3 14B Q5', 'Vitesse attendue': '~28 tok/s' },
          { 'Taille d\'équipe': 'Équipe longs documents', 'GPU recommandée': 'RTX 3090 (24 Go)', 'Modèle': 'Llama 4 Scout (10M ctx)', 'Vitesse attendue': '~15 tok/s' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'Installation Ollama — étape par étape',
        content: ['<strong>Installez Ollama sur Linux, macOS ou Windows. Téléchargez Qwen 3 14B une fois via HTTPS. Ensuite, l\'inférence est entièrement hors ligne.</strong>'],
        numberedItems: [
          { title: 'Installer Ollama', whyItMatters: 'En une ligne sur Linux : <code>curl -fsSL https://ollama.com/install.sh | sh</code>. macOS : télécharger le .app. Windows : télécharger l\'installateur .exe. Vérifier : <code>ollama --version</code>.' },
          { title: 'Télécharger le modèle (téléchargement HTTPS unique)', whyItMatters: 'Exécutez <code>ollama pull qwen2.5:14b</code>. Télécharge ~9 Go depuis Hugging Face via HTTPS. C\'est la seule connexion réseau externe requise. En environnement isolé : téléchargez sur une machine connectée, transférez le fichier GGUF par USB et importez avec <code>ollama create qwen2.5:14b --from /chemin/fichier.gguf</code>.' },
          { title: 'Désactiver la télémétrie', whyItMatters: 'Créez ou éditez <code>~/.ollama/config.json</code> et ajoutez : <code>{"telemetry": false}</code>.' },
          { title: 'Tester l\'inférence', whyItMatters: 'Exécutez <code>ollama run qwen2.5:14b</code> et tapez un prompt. Utilisez <code>ss -tnp | grep ollama</code> (Linux) ou Wireshark pour vérifier qu\'aucune connexion sortante n\'a lieu pendant l\'inférence.' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'Isolation réseau',
        content: [
          '<strong>Ollama expose une API HTTP sur le port 11434 par défaut. Ce port doit être restreint à l\'accès LAN uniquement. L\'inférence sur un serveur Ollama correctement configuré génère zéro trafic sortant.</strong>',
          'Sur Linux avec UFW : <code>ufw allow from 192.168.0.0/16 to any port 11434</code>, puis <code>ufw deny 11434</code>. Pour un usage mono-utilisateur, bindez Ollama sur localhost : <code>OLLAMA_HOST=127.0.0.1 ollama serve</code>.',
        ],
        callouts: [{ type: 'important', text: 'Si vous utilisez Open WebUI ou toute interface accessible par navigateur pour Ollama, assurez-vous que cette interface est également restreinte au LAN uniquement.' }],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: 'Chiffrement disque — Article 5(1)(f) du RGPD',
        content: [
          '<strong>L\'Article 5(1)(f) du RGPD exige que les données personnelles soient traitées avec une sécurité appropriée, incluant la protection contre les accès non autorisés. Le chiffrement intégral du disque garantit que si un actif matériel est perdu ou volé, les fichiers du modèle et les journaux sont inaccessibles.</strong>',
          'Linux : LUKS2 avec dm-crypt — activer à l\'installation OS. macOS : FileVault intégré. Windows : BitLocker (éditions Pro/Entreprise). Les poids du modèle Qwen ne contiennent pas de données personnelles, mais les journaux de session doivent être traités comme potentiellement en contenant.',
        ],
      },
      article30: {
        id: 'article-30',
        title: 'Journal d\'audit Article 30 — quoi journaliser et comment',
        content: [
          '<strong>L\'Article 30 du RGPD exige que les organisations tiennent un registre des activités de traitement impliquant des données personnelles. Pour un déploiement LLM, cela signifie documenter la finalité, les catégories de données, les mesures techniques et les durées de conservation.</strong>',
          'À journaliser par session d\'inférence : (1) nom et version du modèle, (2) niveau de quantisation, (3) horodatage de session (ISO 8601), (4) hash SHA-256 du prompt d\'entrée — pas le texte brut. À NE PAS journaliser : le texte brut du prompt, le texte brut de la réponse, toute donnée personnelle extraite.',
        ],
        faqs: [
          { q: 'Un LLM local nécessite-t-il une Analyse d\'Impact sur la Protection des Données (AIPD) ?', a: 'Peut-être. Une AIPD est requise quand le traitement est susceptible d\'engendrer un risque élevé pour les personnes — par exemple, traitement de dossiers médicaux ou données de performance à grande échelle. Un seul analyste utilisant Qwen 3 14B pour la révision de contrats ne déclenche probablement pas d\'AIPD obligatoire. Une organisation de santé traitant des centaines de dossiers patients par jour, probablement si.' },
          { q: 'Quel modèle Qwen est le mieux adapté aux textes juridiques et RH en langues européennes ?', a: 'Qwen 3 14B Q4_K_M est la base recommandée : fort sur l\'allemand, le français, l\'italien, l\'espagnol et l\'anglais au niveau 14B. Pour les environnements VRAM limités (6–8 Go) : Qwen 3 8B offre de bonnes performances multilingues.' },
        ],
      },
    },
  },
  ja: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPRに準拠したワークフローのためのQwenローカルセットアップ方法',
    seoTitle: 'QwenでGDPR準拠ローカルLLM構築 2026 | PromptQuorum',
    metaDescription: 'Qwen 3 14BをGDPR準拠でローカル実行するステップバイステップガイド：Ollamaインストール、ネットワーク分離、ディスク暗号化、第30条監査証跡。2026年5月更新。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9分で読める',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ローカルQwen展開はGDPR第44条（第三国転送なし）、第25条（プライバシーバイデザイン）、第5条(1)(f)（データ完全性）を単一のアーキテクチャ決定で満たす',
          '最低ハードウェア：12 GB VRAM GPU（RTX 3080、RTX 4070 Ti相当）でOllama経由Qwen 3 14B Q4_K_M実行',
          '重要な分離手順：Ollamaポート11434をファイアウォールでLAN専用に制限、テレメトリ無効化、分離ネットワークセグメントで運用',
          '第30条処理記録：モデルバージョン・量子化・セッションタイムスタンプ・プロンプトSHA-256ハッシュを記録——個人データの内容自体は記録しない',
          'クリーンOSからGDPR安全な最初の推論まで合計セットアップ時間：30分以内',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: 'ローカル展開がGDPRを満たす理由',
        content: [
          '<strong>AI利用で最も直接関係するGDPR条文は第44条（国際データ転送）、第25条（プライバシーバイデザイン）、第5条(1)(f)（完全性と機密性）の3つです。ローカルLLM展開はこれら3つすべてを単一のアーキテクチャ選択で対処します：モデルはあなたの管轄内のハードウェアで動作し、外部へのデータ転送がありません。</strong>',
          '第44条はクラウドAIにとって最も満たしにくいです。OpenAI、Anthropic、Alibaba Cloudへの個人データ含むプロンプトにはすべて転送の法的根拠が必要です。ローカル推論では第44条転送が発生しません。',
          '第25条はデータ保護を最初から設計することを要求します。ローカルモデルはその教科書的な例です：デフォルトでデータは建物を出ません。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwenをローカル実行するとGDPR第44条・第25条・第5条(1)(f)が単一のアーキテクチャ決定で満たされます：モデルはあなたの管轄内のハードウェア上ですべてのデータを処理します。' },
          { type: 'plain-terms', text: 'GDPRはデータを海外に送ることに厳しい規則があります。ローカルAIモデルはデータを自分のマシンに保持します——データが国境を越えないため、国際転送のGDPR規則は適用されません。' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '組織規模別ハードウェア要件',
        content: [
          '<strong>単一のDPOや法務アナリスト：12 GB VRAMのGPUでQwen 3 14B Q4_K_Mが実用的な推論速度（RTX 3080で~18 tok/s）で動作します。5〜10人のチームが中央サーバーを共有する場合：24 GB VRAM（RTX 3090またはRTX 4090）が複数の同時リクエストを処理します。</strong>',
          '最低限の構成：RTX 3080、RTX 4070 Ti、または12 GB VRAMのGPU。専用GPUを推奨。OllamaのCPUフォールバックは可能ですが、推論速度は~3 tok/sに低下します。',
        ],
        columns: ['チーム規模', '推奨GPU', 'モデル', '期待速度'],
        rows: [
          { 'チーム規模': '1ユーザー', '推奨GPU': 'RTX 3080 (12 GB)', 'モデル': 'Qwen 3 14B Q4', '期待速度': '~18 tok/s' },
          { 'チーム規模': '2〜5ユーザー（キューあり）', '推奨GPU': 'RTX 4070 Ti (12 GB)', 'モデル': 'Qwen 3 14B Q4', '期待速度': '~22 tok/s' },
          { 'チーム規模': '5〜10ユーザー（共有）', '推奨GPU': 'RTX 3090 / 4090 (24 GB)', 'モデル': 'Qwen 3 14B Q5', '期待速度': '~28 tok/s' },
          { 'チーム規模': '長文書チーム', '推奨GPU': 'RTX 3090 (24 GB)', 'モデル': 'Llama 4 Scout (10Mコンテキスト)', '期待速度': '~15 tok/s' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'Ollamaインストール——ステップバイステップ',
        content: ['<strong>Linux・macOS・WindowsにOllamaをインストール。Qwen 3 14Bを一度だけHTTPSでダウンロード。その後、推論は完全にオフライン。</strong>'],
        numberedItems: [
          { title: 'Ollamaをインストール', whyItMatters: 'Linuxのワンライン：<code>curl -fsSL https://ollama.com/install.sh | sh</code>。macOS：ollama.comから.appをダウンロード。Windows：.exeインストーラーをダウンロード。確認：<code>ollama --version</code>。' },
          { title: 'モデルをダウンロード（一度限りのHTTPS）', whyItMatters: '<code>ollama pull qwen2.5:14b</code>を実行。Hugging FaceからHTTPS経由で~9 GBをダウンロード。これが唯一必要な外部ネットワーク接続です。エアギャップ環境の場合：ネットワーク接続マシンでダウンロードし、USBでGGUFファイルを転送、<code>ollama create qwen2.5:14b --from /path/to/file.gguf</code>でインポート。' },
          { title: 'テレメトリを無効化', whyItMatters: '<code>~/.ollama/config.json</code>を作成/編集し追加：<code>{"telemetry": false}</code>。' },
          { title: '推論をテスト', whyItMatters: '<code>ollama run qwen2.5:14b</code>を実行してプロンプトを入力。Linux：<code>ss -tnp | grep ollama</code>またはWiresharkで推論中に外部接続がないことを確認。' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'ネットワーク分離',
        content: [
          '<strong>Ollamaはデフォルトでポート11434にHTTP APIを提供します。このポートはLANアクセスのみに制限する必要があります——インターネットに公開してはいけません。適切に設定されたOllamaサーバーの推論は外部トラフィックをゼロ生成します。</strong>',
          'Linux（UFW）：<code>ufw allow from 192.168.0.0/16 to any port 11434</code>の後<code>ufw deny 11434</code>。単一ユーザー用にはlocalhostのみにバインド：<code>OLLAMA_HOST=127.0.0.1 ollama serve</code>。',
        ],
        callouts: [{ type: 'important', text: 'Open WebUIやブラウザアクセス可能なOllamaフロントエンドを使用する場合、フロントエンドもLANのみアクセスに制限してください。フロントエンドが公開アクセス可能な場合、Ollama APIの分離は不十分です。' }],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: 'ディスク暗号化——GDPR第5条(1)(f)',
        content: [
          '<strong>GDPR第5条(1)(f)は個人データが不正アクセスから保護される適切なセキュリティで処理されることを要求します。フルディスク暗号化により、ハードウェアが紛失または盗難されても、モデルファイルとログデータにアクセスできません。</strong>',
          'Linux：LUKS2とdm-crypt——OSインストール時に有効化するのが最善。macOS：FileVaultは組み込み。Windows：BitLocker（Pro/Enterprise）。Qwenモデル重みには個人データは含まれませんが、セッションログとファインチューニング済みモデルは含む可能性があるものとして扱う必要があります。',
        ],
      },
      article30: {
        id: 'article-30',
        title: '第30条監査証跡——何をどのようにログに記録するか',
        content: [
          '<strong>GDPR第30条は組織に個人データを含む処理活動の記録維持を義務付けます。LLM展開では：処理の目的・処理データのカテゴリ・技術的措置・保管期間を文書化します。</strong>',
          '推論セッションごとに記録する内容：(1)モデル名とバージョン、(2)量子化レベル、(3)セッションタイムスタンプ（ISO 8601）、(4)入力プロンプトのSHA-256ハッシュ——生テキストではない。記録しないもの：プロンプト生テキスト・レスポンス生テキスト・抽出された個人データ。',
        ],
        faqs: [
          { q: 'ローカルLLMにはデータ保護影響評価（DPIA）が必要ですか？', a: '場合によります。DPIAは個人に高いリスクをもたらす可能性がある処理に必要です。Qwen 3 14Bを契約レビューに使う単一アナリストは義務的DPIAをおそらく要しません。毎日何百もの患者記録を処理する医療機関はおそらく必要です。' },
          { q: 'ヨーロッパ言語での法務・HRテキストに最適なQwenモデルはどれですか？', a: 'Qwen 3 14B Q4_K_Mが推奨基準：14Bティアでドイツ語・フランス語・イタリア語・スペイン語・英語に強い。VRAM制限環境（6〜8 GB）：Qwen 3 8Bが多言語テキストで良好なパフォーマンスを発揮。' },
        ],
      },
    },
  },
  es: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Cómo configurar Qwen localmente para flujos de trabajo conformes con el RGPD',
    seoTitle: 'Configuración local de Qwen conforme al RGPD 2026',
    metaDescription: 'Guía paso a paso para ejecutar Qwen 3 14B en local con RGPD: Ollama, aislamiento de red, cifrado de disco y registro de auditoría del Artículo 30.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9 min de lectura',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'El despliegue local de Qwen satisface los Artículos 44 (sin transferencia a terceros países), 25 (privacidad desde el diseño) y 5(1)(f) (integridad de datos) del RGPD con una sola decisión arquitectónica',
          'Hardware mínimo: cualquier GPU con 12 GB de VRAM (RTX 3080, RTX 4070 Ti o equivalente) para ejecutar Qwen 3 14B en Q4_K_M a través de Ollama',
          'Pasos de aislamiento críticos: restringir el puerto 11434 de Ollama solo a la LAN mediante firewall, deshabilitar la telemetría y ejecutar en un segmento de red aislado',
          'Registro de tratamiento del Artículo 30: registrar versión del modelo, cuantización, marca de tiempo de sesión y hash SHA-256 del prompt — nunca el contenido de datos personales en bruto',
          'Tiempo total de configuración desde un SO limpio hasta la primera inferencia segura según el RGPD: menos de 30 minutos',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: 'Por qué el despliegue local satisface el RGPD',
        content: [
          '<strong>Los tres artículos del RGPD más directamente implicados por el uso de la IA son el Artículo 44 (transferencias internacionales de datos), el Artículo 25 (protección de datos desde el diseño) y el Artículo 5(1)(f) (integridad y confidencialidad). El despliegue local de un LLM aborda los tres mediante una única decisión arquitectónica: el modelo se ejecuta en tu hardware, dentro de tu jurisdicción, sin transferencia de datos al exterior.</strong>',
          'El Artículo 44 es el más difícil de cumplir para la IA en la nube. Cada prompt que contiene datos personales enviado a OpenAI, Anthropic o Alibaba Cloud requiere una base legal para la transferencia — como mínimo Cláusulas Contractuales Estándar, y a menudo también una Evaluación de Impacto de la Transferencia. Cuando la inferencia ocurre localmente, no se produce ninguna transferencia del Artículo 44. La cuestión legal desaparece.',
          'El Artículo 25 exige que el tratamiento esté diseñado desde el principio para proteger los datos personales. Un modelo local es el ejemplo de manual: por defecto, ningún dato sale del edificio. Los auditores y las autoridades de protección de datos están familiarizados con esta arquitectura.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ejecutar Qwen localmente satisface los Artículos 44, 25 y 5(1)(f) del RGPD mediante una sola decisión arquitectónica: el modelo procesa todos los datos en tu hardware, dentro de tu jurisdicción.' },
          { type: 'plain-terms', text: 'El RGPD tiene normas estrictas sobre el envío de datos a otros países. Un modelo de IA local mantiene los datos en tus propias máquinas — ningún dato cruza fronteras, por lo que las normas de transferencia internacional simplemente no se aplican.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware según el tamaño de la organización',
        content: [
          '<strong>Para un solo DPO o analista legal: cualquier GPU con 12 GB de VRAM gestiona Qwen 3 14B Q4_K_M a velocidades de inferencia prácticas (~18 tok/s en RTX 3080). Para un equipo de 5 a 10 usuarios compartiendo un servidor central: 24 GB de VRAM (RTX 3090 o RTX 4090) gestiona múltiples solicitudes simultáneas.</strong> El despliegue empresarial multi-usuario requiere configuración multi-GPU, fuera del alcance de esta guía.',
          'Configuración mínima viable: RTX 3080, RTX 4070 Ti o cualquier GPU con 12 GB de VRAM. Se recomienda GPU dedicada sobre GPU de estación de trabajo compartida. La alternativa por CPU mediante Ollama es posible, pero la velocidad de inferencia cae a ~3 tok/s.',
        ],
        columns: ['Tamaño del equipo', 'GPU recomendada', 'Modelo', 'Velocidad esperada'],
        rows: [
          { 'Tamaño del equipo': '1 usuario', 'GPU recomendada': 'RTX 3080 (12 GB)', 'Modelo': 'Qwen 3 14B Q4', 'Velocidad esperada': '~18 tok/s' },
          { 'Tamaño del equipo': '2–5 usuarios (cola)', 'GPU recomendada': 'RTX 4070 Ti (12 GB)', 'Modelo': 'Qwen 3 14B Q4', 'Velocidad esperada': '~22 tok/s' },
          { 'Tamaño del equipo': '5–10 usuarios (compartido)', 'GPU recomendada': 'RTX 3090 / 4090 (24 GB)', 'Modelo': 'Qwen 3 14B Q5', 'Velocidad esperada': '~28 tok/s' },
          { 'Tamaño del equipo': 'Equipo de documentos largos', 'GPU recomendada': 'RTX 3090 (24 GB)', 'Modelo': 'Llama 4 Scout (10M ctx)', 'Velocidad esperada': '~15 tok/s' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'Instalación de Ollama — paso a paso',
        content: ['<strong>Instala Ollama en Linux, macOS o Windows. Descarga Qwen 3 14B una sola vez por HTTPS. A partir de ese momento, la inferencia es completamente sin conexión.</strong>'],
        numberedItems: [
          {
            title: 'Instalar Ollama',
            whyItMatters: 'Instalación en una línea en Linux: <code>curl -fsSL https://ollama.com/install.sh | sh</code>. macOS: descarga el .app desde ollama.com. Windows: descarga el instalador .exe. Verificación: <code>ollama --version</code> debe devolver un número de versión.',
          },
          {
            title: 'Descargar el modelo (descarga única por HTTPS)',
            whyItMatters: 'Ejecuta <code>ollama pull qwen2.5:14b</code>. Esto descarga ~9 GB desde Hugging Face a través de HTTPS. Esta es la única vez que se requiere acceso a red externa. En entornos con air-gap: descarga en una máquina conectada, transfiere el archivo GGUF por USB e impórtalo con <code>ollama create qwen2.5:14b --from /ruta/al/archivo.gguf</code>.',
          },
          {
            title: 'Deshabilitar la telemetría',
            whyItMatters: 'Crea o edita <code>~/.ollama/config.json</code> y añade: <code>{"telemetry": false}</code>. Ollama no envía tráfico de inferencia al exterior, pero realiza pings de telemetría al iniciar. Deshabilitarla elimina cualquier actividad de red residual del entorno de ejecución.',
          },
          {
            title: 'Probar la inferencia',
            whyItMatters: 'Ejecuta <code>ollama run qwen2.5:14b</code> e introduce un prompt. Confirma que la respuesta se genera localmente. Usa <code>ss -tnp | grep ollama</code> (Linux) o Wireshark para verificar que no se producen conexiones salientes durante la inferencia.',
          },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'Aislamiento de red',
        content: [
          '<strong>Ollama expone una API HTTP en el puerto 11434 por defecto. Este puerto debe estar restringido únicamente al acceso LAN — nunca expuesto a internet. La inferencia en un servidor Ollama correctamente configurado genera cero tráfico saliente.</strong>',
          'En Linux con UFW: <code>ufw allow from 192.168.0.0/16 to any port 11434</code> seguido de <code>ufw deny 11434</code>. Para uso local de un solo usuario, vincula Ollama solo a localhost configurando la variable de entorno: <code>OLLAMA_HOST=127.0.0.1 ollama serve</code>.',
          'Refuerzo adicional: ejecuta Ollama como usuario del sistema sin privilegios de root, restringe el directorio del modelo a ese usuario y audita las conexiones salientes mensualmente mediante <code>conntrack -L | grep ESTABLISHED</code> durante una sesión de inferencia para confirmar que no hay llamadas externas.',
        ],
        callouts: [
          {
            type: 'important',
            text: 'Si usas Open WebUI o cualquier frontend accesible desde el navegador para Ollama, asegúrate de que el frontend también esté restringido solo al acceso LAN. El aislamiento de la API de Ollama no es suficiente si el frontend es públicamente accesible.',
          },
        ],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: 'Cifrado de disco — Artículo 5(1)(f) del RGPD',
        content: [
          '<strong>El Artículo 5(1)(f) del RGPD exige que los datos personales se traten con la seguridad adecuada, incluida la protección contra el acceso no autorizado. El cifrado de disco completo garantiza que, si un activo de hardware se pierde o es robado, los archivos del modelo y cualquier dato registrado no puedan ser accedidos.</strong>',
          'Linux: LUKS2 con dm-crypt es el estándar. Actívalo en el momento de la instalación del SO para mayor cobertura. Para sistemas existentes: <code>cryptsetup</code> puede cifrar particiones específicas. macOS: FileVault está integrado — actívalo en Configuración del Sistema → Privacidad y Seguridad → FileVault. Windows: BitLocker en ediciones Pro/Enterprise.',
          'Cifra tanto la unidad del SO como cualquier unidad externa utilizada para almacenar archivos del modelo o registros de sesión. Los pesos del modelo Qwen en sí no contienen datos personales, pero cualquier registro de sesión o modelo ajustado debe tratarse como si potencialmente los contuviera.',
        ],
      },
      article30: {
        id: 'article-30',
        title: 'Registro de auditoría del Artículo 30 — qué registrar y cómo',
        content: [
          '<strong>El Artículo 30 del RGPD exige que las organizaciones mantengan un registro de las actividades de tratamiento que implican datos personales. Para un despliegue de LLM, esto significa documentar: la finalidad del tratamiento, las categorías de datos tratados, las medidas técnicas y organizativas, y los períodos de conservación.</strong>',
          'Qué registrar por sesión de inferencia: (1) nombre y versión del modelo (p. ej., qwen2.5:14b), (2) nivel de cuantización (Q4_K_M), (3) marca de tiempo de la sesión (ISO 8601), (4) hash SHA-256 del prompt de entrada — no el texto en bruto. El hash permite demostrar consistencia sin retener datos personales. (5) Identificador de usuario (seudónimo) si aplica.',
          'Qué NO registrar: el texto en bruto del prompt, el texto en bruto de la respuesta, ni ningún dato de identificación personal extraído de la respuesta. El propósito del hash es crear un registro a prueba de manipulaciones sin generar un nuevo problema de retención de datos personales.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Hash del prompt en una línea con Python: <code>import hashlib; hashlib.sha256(prompt.encode()).hexdigest()</code>. Almacena esto junto a los metadatos de la sesión, no el prompt original.',
          },
        ],
        faqs: [
          {
            q: '¿Un LLM local requiere una Evaluación de Impacto sobre la Protección de Datos (EIPD)?',
            a: 'Posiblemente. Se requiere una EIPD cuando el tratamiento es probable que genere un alto riesgo para las personas — por ejemplo, el tratamiento de registros médicos, datos de rendimiento de empleados o documentos legales a gran escala. El umbral de "sistemático y a gran escala" es el desencadenante, no la herramienta de IA en sí. Un solo analista que use Qwen 3 14B para revisar contratos probablemente no active la EIPD obligatoria. Una organización sanitaria que procese cientos de registros de pacientes al día probablemente sí.',
          },
          {
            q: '¿Puedo usar Open WebUI con Ollama para el acceso conforme al RGPD?',
            a: 'Sí, si Open WebUI también está restringido a la LAN. Ejecuta Open WebUI en la misma red aislada que Ollama, vincula su puerto solo a la interfaz interna y habilita la autenticación. Open WebUI admite cuentas de usuario, lo que también proporciona un registro de auditoría a nivel de usuario que se asigna a los requisitos del Artículo 30.',
          },
          {
            q: '¿Qué variante del modelo Qwen es mejor para texto legal y de RR.HH. en idiomas europeos?',
            a: 'Qwen 3 14B Q4_K_M es la base recomendada: fuerte en alemán, francés, italiano, español e inglés en el nivel 14B. Para flujos de trabajo legales con mucho código (p. ej., procesamiento de contratos con cláusulas de código incorporado o datos estructurados), Qwen 3 Coder 14B Q4_K_M. Para organizaciones limitadas a 6–8 GB de VRAM, Qwen 3 8B rinde bien con texto multilingüe.',
          },
          {
            q: '¿Necesito un Acuerdo de Encargado del Tratamiento con Ollama?',
            a: 'No. Ollama es un entorno de ejecución local sin componente de servidor. No procesa datos en tu nombre — los pesos del modelo se ejecutan completamente en tu hardware. No existe ninguna entidad de Ollama actuando como encargado del tratamiento de datos bajo el Artículo 28 del RGPD. No necesitas un acuerdo de encargado del tratamiento.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Cómo configurar Qwen localmente para flujos de trabajo RGPD 2026',
      description: 'Guía paso a paso para ejecutar Qwen 3 14B localmente con cumplimiento RGPD completo.',
      url: 'https://www.promptquorum.com/es/local-llms/qwen-local-gdpr-setup-guide-2026',
      inLanguage: 'es',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  ar: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'كيفية إعداد Qwen محليًا لسير عمل متوافق مع GDPR',
    seoTitle: 'إعداد Qwen 3 14B محليًا بامتثال GDPR 2026',
    metaDescription: 'Qwen 3 14B يعمل بـ 12 GB VRAM عبر Ollama مع صفر نقل للبيانات. خطوات عزل الشبكة وتشفير القرص وسجل المادة 30 لامتثال GDPR الكامل.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9 دقائق قراءة',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يُلبّي النشر المحلي لـ Qwen المواد 44 (لا نقل إلى دول ثالثة) و25 (الخصوصية بالتصميم) و5(1)(f) (سلامة البيانات) من GDPR بقرار معماري واحد',
          'أقل أجهزة: أي بطاقة رسوم بسعة 12 GB من VRAM (RTX 3080 أو RTX 4070 Ti أو ما يعادلها) لتشغيل Qwen 3 14B بـ Q4_K_M عبر Ollama',
          'خطوات عزل حرجة: تقييد منفذ Ollama 11434 على الشبكة المحلية فقط عبر جدار الحماية، وتعطيل القياس عن بُعد، والتشغيل في شريحة شبكة معزولة',
          'سجل المعالجة بموجب المادة 30: سجّل إصدار النموذج والتكميم وطابع وقت الجلسة وتجزئة SHA-256 للأمر — لا محتوى البيانات الشخصية الخام أبدًا',
          'إجمالي وقت الإعداد من نظام تشغيل نظيف إلى أول استدلال آمن بموجب GDPR: أقل من 30 دقيقة',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: 'لماذا يُلبّي النشر المحلي GDPR',
        content: [
          '<strong>مواد GDPR الثلاث الأكثر تأثرًا مباشرةً باستخدام الذكاء الاصطناعي هي المادة 44 (عمليات نقل البيانات الدولية) والمادة 25 (حماية البيانات بالتصميم) والمادة 5(1)(f) (السلامة والسرية). يعالج النشر المحلي لنموذج LLM الثلاث جميعًا بقرار معماري واحد: يعمل النموذج على أجهزتك، داخل ولايتك القضائية، دون نقل بيانات إلى الخارج.</strong>',
          'المادة 44 هي الأصعب امتثالًا للذكاء الاصطناعي السحابي. كل أمر يحتوي على بيانات شخصية يُرسَل إلى OpenAI أو Anthropic أو Alibaba Cloud يتطلب أساسًا قانونيًا للنقل — كحد أدنى بنودًا تعاقدية قياسية، وغالبًا أيضًا تقييم أثر النقل. عندما يحدث الاستدلال محليًا، لا يحدث أي نقل بموجب المادة 44. تختفي المسألة القانونية.',
          'تتطلب المادة 25 أن تُصمَّم المعالجة من البداية لحماية البيانات الشخصية. النموذج المحلي هو المثال النموذجي: افتراضيًا، لا تغادر أي بيانات المبنى. المدققون وسلطات حماية البيانات معتادون على هذه البنية.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'تشغيل Qwen محليًا يُلبّي المواد 44 و25 و5(1)(f) من GDPR بقرار معماري واحد: يعالج النموذج جميع البيانات على أجهزتك، داخل ولايتك القضائية.' },
          { type: 'plain-terms', text: 'لـ GDPR قواعد صارمة بشأن إرسال البيانات إلى دول أخرى. يُبقي نموذج الذكاء الاصطناعي المحلي البيانات على أجهزتك — لا تعبر أي بيانات الحدود، فلا تنطبق قواعد النقل الدولي ببساطة.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات الأجهزة حسب حجم المؤسسة',
        content: [
          '<strong>لمسؤول حماية بيانات أو محلل قانوني واحد: أي بطاقة رسوم بسعة 12 GB من VRAM تتعامل مع Qwen 3 14B Q4_K_M بسرعات استدلال عملية (~18 token/ثانية على RTX 3080). لفريق من 5 إلى 10 مستخدمين يتشاركون خادمًا مركزيًا: 24 GB من VRAM (RTX 3090 أو RTX 4090) تتعامل مع طلبات متزامنة متعددة.</strong> يتطلب النشر المؤسسي متعدد المستخدمين إعداد بطاقات رسوم متعددة، وهو خارج نطاق هذا الدليل.',
          'أقل إعداد قابل للتطبيق: RTX 3080 أو RTX 4070 Ti أو أي بطاقة رسوم بسعة 12 GB من VRAM. يُنصح ببطاقة رسوم مخصصة بدلًا من بطاقة محطة عمل مشتركة. البديل عبر CPU باستخدام Ollama ممكن، لكن سرعة الاستدلال تنخفض إلى ~3 token/ثانية.',
        ],
        columns: ['Tamaño del equipo', 'GPU recomendada', 'Modelo', 'Velocidad esperada'],
        rows: [
          { 'Tamaño del equipo': 'مستخدم واحد', 'GPU recomendada': 'RTX 3080 (12 GB)', 'Modelo': 'Qwen 3 14B Q4', 'Velocidad esperada': '~18 token/ثانية' },
          { 'Tamaño del equipo': '2–5 مستخدمين (طابور)', 'GPU recomendada': 'RTX 4070 Ti (12 GB)', 'Modelo': 'Qwen 3 14B Q4', 'Velocidad esperada': '~22 token/ثانية' },
          { 'Tamaño del equipo': '5–10 مستخدمين (مشترك)', 'GPU recomendada': 'RTX 3090 / 4090 (24 GB)', 'Modelo': 'Qwen 3 14B Q5', 'Velocidad esperada': '~28 token/ثانية' },
          { 'Tamaño del equipo': 'فريق المستندات الطويلة', 'GPU recomendada': 'RTX 3090 (24 GB)', 'Modelo': 'Llama 4 Scout (10M ctx)', 'Velocidad esperada': '~15 token/ثانية' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'تثبيت Ollama — خطوة بخطوة',
        content: ['<strong>ثبّت Ollama على Linux أو macOS أو Windows. نزّل Qwen 3 14B مرة واحدة عبر HTTPS. بعد ذلك، يكون الاستدلال دون اتصال بالكامل.</strong>'],
        numberedItems: [
          {
            title: 'ثبّت Ollama',
            whyItMatters: 'تثبيت بسطر واحد على Linux: <code>curl -fsSL https://ollama.com/install.sh | sh</code>. macOS: نزّل ملف .app من ollama.com. Windows: نزّل مثبّت .exe. التحقق: يجب أن يعيد <code>ollama --version</code> رقم إصدار.',
          },
          {
            title: 'نزّل النموذج (تنزيل واحد عبر HTTPS)',
            whyItMatters: 'نفّذ <code>ollama pull qwen2.5:14b</code>. يُنزّل هذا ~9 GB من Hugging Face عبر HTTPS. هذه هي المرة الوحيدة التي يُطلب فيها وصول شبكة خارجي. في بيئات الفصل التام عن الشبكة: نزّل على جهاز متصل، وانقل ملف GGUF عبر USB واستورده بـ <code>ollama create qwen2.5:14b --from /ruta/al/archivo.gguf</code>.',
          },
          {
            title: 'عطّل القياس عن بُعد',
            whyItMatters: 'أنشئ أو حرّر <code>~/.ollama/config.json</code> وأضف: <code>{"telemetry": false}</code>. لا يرسل Ollama حركة مرور الاستدلال إلى الخارج، لكنه يرسل نبضات قياس عن بُعد عند البدء. تعطيلها يلغي أي نشاط شبكة متبقٍ من بيئة التشغيل.',
          },
          {
            title: 'اختبر الاستدلال',
            whyItMatters: 'نفّذ <code>ollama run qwen2.5:14b</code> وأدخل أمرًا. تأكد من توليد الاستجابة محليًا. استخدم <code>ss -tnp | grep ollama</code> (Linux) أو Wireshark للتحقق من عدم حدوث اتصالات صادرة أثناء الاستدلال.',
          },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'عزل الشبكة',
        content: [
          '<strong>يكشف Ollama واجهة API عبر HTTP على المنفذ 11434 افتراضيًا. يجب تقييد هذا المنفذ على وصول الشبكة المحلية فقط — وعدم تعريضه للإنترنت أبدًا. الاستدلال على خادم Ollama مُعدّ بشكل صحيح يولّد حركة مرور صادرة معدومة.</strong>',
          'على Linux مع UFW: <code>ufw allow from 192.168.0.0/16 to any port 11434</code> متبوعًا بـ <code>ufw deny 11434</code>. للاستخدام المحلي لمستخدم واحد، اربط Ollama بـ localhost فقط بضبط متغير البيئة: <code>OLLAMA_HOST=127.0.0.1 ollama serve</code>.',
          'تقوية إضافية: شغّل Ollama كمستخدم نظام دون امتيازات root، وقيّد دليل النموذج على ذلك المستخدم، ودقّق الاتصالات الصادرة شهريًا عبر <code>conntrack -L | grep ESTABLISHED</code> أثناء جلسة استدلال للتأكد من عدم وجود استدعاءات خارجية.',
        ],
        callouts: [
          {
            type: 'important',
            text: 'إذا استخدمت Open WebUI أو أي واجهة أمامية يمكن الوصول إليها من المتصفح لـ Ollama، فتأكد من تقييد الواجهة الأمامية أيضًا على وصول الشبكة المحلية فقط. عزل واجهة API الخاصة بـ Ollama لا يكفي إذا كانت الواجهة الأمامية متاحة علنًا.',
          },
        ],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: 'تشفير القرص — المادة 5(1)(f) من GDPR',
        content: [
          '<strong>تتطلب المادة 5(1)(f) من GDPR معالجة البيانات الشخصية بأمان ملائم، بما في ذلك الحماية من الوصول غير المصرّح به. يضمن تشفير القرص الكامل أنه إذا فُقد أصل أجهزة أو سُرق، فلا يمكن الوصول إلى ملفات النموذج وأي بيانات مسجّلة.</strong>',
          'Linux: LUKS2 مع dm-crypt هو المعيار. فعّله وقت تثبيت نظام التشغيل لتغطية أوسع. للأنظمة القائمة: يمكن لـ <code>cryptsetup</code> تشفير أقسام محددة. macOS: FileVault مدمج — فعّله في إعدادات النظام ← الخصوصية والأمان ← FileVault. Windows: BitLocker في إصدارات Pro/Enterprise.',
          'شفّر كلًا من قرص نظام التشغيل وأي قرص خارجي يُستخدم لتخزين ملفات النموذج أو سجلات الجلسات. أوزان نموذج Qwen نفسها لا تحتوي على بيانات شخصية، لكن أي سجل جلسة أو نموذج مضبوط يجب التعامل معه كما لو كان يحتويها محتملًا.',
        ],
      },
      article30: {
        id: 'article-30',
        title: 'سجل تدقيق المادة 30 — ماذا تسجّل وكيف',
        content: [
          '<strong>تتطلب المادة 30 من GDPR أن تحتفظ المؤسسات بسجل لأنشطة المعالجة التي تتضمن بيانات شخصية. بالنسبة إلى نشر نموذج LLM، يعني ذلك توثيق: غرض المعالجة، وفئات البيانات المعالَجة، والتدابير التقنية والتنظيمية، وفترات الاحتفاظ.</strong>',
          'ماذا تسجّل لكل جلسة استدلال: (1) اسم النموذج وإصداره (مثلًا qwen2.5:14b)، (2) مستوى التكميم (Q4_K_M)، (3) طابع وقت الجلسة (ISO 8601)، (4) تجزئة SHA-256 لأمر الإدخال — لا النص الخام. تتيح التجزئة إثبات الاتساق دون الاحتفاظ ببيانات شخصية. (5) معرّف المستخدم (اسم مستعار) إن انطبق.',
          'ماذا لا تسجّل: النص الخام للأمر، والنص الخام للاستجابة، وأي بيانات تعريف شخصية مستخرجة من الاستجابة. الغرض من التجزئة هو إنشاء سجل مقاوم للتلاعب دون توليد مشكلة احتفاظ ببيانات شخصية جديدة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'تجزئة الأمر بسطر واحد بـ Python: <code>import hashlib; hashlib.sha256(prompt.encode()).hexdigest()</code>. خزّن هذا بجانب بيانات الجلسة الوصفية، لا الأمر الأصلي.',
          },
        ],
        faqs: [
          {
            q: 'هل يتطلب نموذج LLM محلي تقييم أثر حماية البيانات (DPIA)؟',
            a: 'ربما. يُطلب DPIA عندما يُرجَّح أن تولّد المعالجة مخاطر عالية للأفراد — مثلًا معالجة السجلات الطبية أو بيانات أداء الموظفين أو المستندات القانونية على نطاق واسع. عتبة "منهجي وواسع النطاق" هي المُحفّز، لا أداة الذكاء الاصطناعي نفسها. محلل واحد يستخدم Qwen 3 14B لمراجعة العقود لن يُفعّل على الأرجح DPIA إلزاميًا. مؤسسة رعاية صحية تعالج مئات سجلات المرضى يوميًا ستفعّله على الأرجح.',
          },
          {
            q: 'هل يمكنني استخدام Open WebUI مع Ollama للوصول المتوافق مع GDPR؟',
            a: 'نعم، إذا كان Open WebUI مقيّدًا أيضًا على الشبكة المحلية. شغّل Open WebUI على الشبكة المعزولة نفسها مثل Ollama، واربط منفذه على الواجهة الداخلية فقط، وفعّل المصادقة. يدعم Open WebUI حسابات المستخدمين، مما يوفّر أيضًا سجل تدقيق على مستوى المستخدم يُطابق متطلبات المادة 30.',
          },
          {
            q: 'أي متغير من نموذج Qwen أفضل للنصوص القانونية والموارد البشرية باللغات الأوروبية؟',
            a: 'Qwen 3 14B Q4_K_M هو الأساس الموصى به: قوي في الألمانية والفرنسية والإيطالية والإسبانية والإنجليزية على مستوى 14B. لسير العمل القانوني كثيف الكود (مثلًا معالجة عقود ببنود كود مضمّنة أو بيانات منظمة)، Qwen 3 Coder 14B Q4_K_M. للمؤسسات المحدودة بـ 6–8 GB من VRAM، يؤدي Qwen 3 8B جيدًا مع النصوص متعددة اللغات.',
          },
          {
            q: 'هل أحتاج إلى اتفاقية معالجة بيانات مع Ollama؟',
            a: 'لا. Ollama بيئة تشغيل محلية دون مكوّن خادم. لا يعالج البيانات نيابةً عنك — تعمل أوزان النموذج بالكامل على أجهزتك. لا يوجد كيان Ollama يتصرف كمعالج بيانات بموجب المادة 28 من GDPR. لا تحتاج إلى اتفاقية معالجة بيانات.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'كيفية إعداد Qwen محليًا لسير عمل GDPR 2026',
      description: 'دليل خطوة بخطوة لتشغيل Qwen 3 14B محليًا بامتثال GDPR كامل.',
      url: 'https://www.promptquorum.com/ar/local-llms/qwen-local-gdpr-setup-guide-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  zh: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: '为GDPR合规工作流本地配置Qwen',
    seoTitle: '使用Qwen构建GDPR合规本地LLM 2026 | PromptQuorum',
    metaDescription: '本地GDPR合规运行Qwen 3 14B的步骤指南：Ollama安装、网络隔离、磁盘加密、第30条审计追踪。2026年5月更新。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9分钟阅读',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '本地Qwen部署通过单一架构决策满足GDPR第44条（无第三国传输）、第25条（隐私设计）和第5(1)(f)条（数据完整性）',
          '最低硬件：任意12 GB VRAM GPU（RTX 3080、RTX 4070 Ti或同等）通过Ollama运行Qwen 3 14B Q4_K_M',
          '关键隔离步骤：防火墙将Ollama端口11434限制为仅限局域网，禁用遥测，在隔离网络段运行',
          '第30条处理记录：记录模型版本、量化、会话时间戳和提示词SHA-256哈希——绝不记录个人数据内容本身',
          '从全新OS到首次GDPR安全推理的总安装时间：30分钟以内',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: '为什么本地部署满足GDPR',
        content: [
          '<strong>与AI使用最直接相关的三个GDPR条款是第44条（国际数据传输）、第25条（隐私设计）和第5(1)(f)条（完整性和保密性）。本地LLM部署通过单一架构选择解决了所有三个问题：模型在您的硬件上、在您的管辖范围内运行，没有外部数据传输。</strong>',
          '第44条是云AI最难满足的。发送给OpenAI、Anthropic或阿里云的每个含个人数据的提示词都需要传输的法律依据——至少需要标准合同条款，通常还需要传输影响评估。本地推理时，不会发生第44条传输。',
          '第25条要求从一开始就设计以保护个人数据。本地模型是教科书式的例子：默认情况下，没有数据离开建筑。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '本地运行Qwen通过单一架构决策满足GDPR第44、25和5(1)(f)条：模型在您的管辖范围内的硬件上处理所有数据。' },
          { type: 'plain-terms', text: 'GDPR对向其他国家发送数据有严格规定。本地AI模型将数据保留在您自己的机器上——数据不跨越边界，因此数据离开欧盟的GDPR规则根本不适用。' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '按组织规模划分的硬件要求',
        content: [
          '<strong>单个DPO或法务分析师：任何12 GB VRAM GPU均可在实用推理速度下（RTX 3080约18 tok/s）处理Qwen 3 14B Q4_K_M。5-10人共享中央服务器的团队：24 GB VRAM（RTX 3090或RTX 4090）处理多个并发请求。</strong>',
          '最低可行配置：RTX 3080、RTX 4070 Ti或任意12 GB VRAM GPU。推荐专用GPU。Ollama的CPU后备可行，但推理速度降至约3 tok/s。',
        ],
        columns: ['团队规模', '推荐GPU', '模型', '预期速度'],
        rows: [
          { '团队规模': '1个用户', '推荐GPU': 'RTX 3080 (12 GB)', '模型': 'Qwen 3 14B Q4', '预期速度': '~18 tok/s' },
          { '团队规模': '2-5用户（排队）', '推荐GPU': 'RTX 4070 Ti (12 GB)', '模型': 'Qwen 3 14B Q4', '预期速度': '~22 tok/s' },
          { '团队规模': '5-10用户（共享）', '推荐GPU': 'RTX 3090 / 4090 (24 GB)', '模型': 'Qwen 3 14B Q5', '预期速度': '~28 tok/s' },
          { '团队规模': '长文档团队', '推荐GPU': 'RTX 3090 (24 GB)', '模型': 'Llama 4 Scout (10M上下文)', '预期速度': '~15 tok/s' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'Ollama安装——分步指南',
        content: ['<strong>在Linux、macOS或Windows上安装Ollama。通过HTTPS一次性拉取Qwen 3 14B。之后推理完全离线。</strong>'],
        numberedItems: [
          { title: '安装Ollama', whyItMatters: 'Linux单行安装：<code>curl -fsSL https://ollama.com/install.sh | sh</code>。macOS：从ollama.com下载.app。Windows：下载.exe安装程序。验证：<code>ollama --version</code>应返回版本号。' },
          { title: '拉取模型（一次性HTTPS下载）', whyItMatters: '运行<code>ollama pull qwen2.5:14b</code>。通过HTTPS从Hugging Face下载约9 GB。这是唯一需要外部网络访问的时候。气隙环境：在联网机器上下载，通过USB传输GGUF文件，用<code>ollama create qwen2.5:14b --from /path/to/file.gguf</code>导入。' },
          { title: '禁用遥测', whyItMatters: '创建或编辑<code>~/.ollama/config.json</code>并添加：<code>{"telemetry": false}</code>。' },
          { title: '测试推理', whyItMatters: '运行<code>ollama run qwen2.5:14b</code>并输入提示词。使用Linux：<code>ss -tnp | grep ollama</code>或Wireshark确认推理期间没有外部连接。' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: '网络隔离',
        content: [
          '<strong>Ollama默认在端口11434上提供HTTP API。此端口必须限制为仅限局域网访问——绝不暴露在互联网上。在正确配置的Ollama服务器上，推理产生零外部流量。</strong>',
          '在Linux（UFW）上：<code>ufw allow from 192.168.0.0/16 to any port 11434</code>，然后<code>ufw deny 11434</code>。单用户本地使用时，仅绑定到localhost：<code>OLLAMA_HOST=127.0.0.1 ollama serve</code>。',
        ],
        callouts: [{ type: 'important', text: '如果使用Open WebUI或任何浏览器可访问的Ollama前端，请确保该前端也仅限局域网访问。如果前端可公开访问，Ollama API的隔离是不够的。' }],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: '磁盘加密——GDPR第5(1)(f)条',
        content: [
          '<strong>GDPR第5(1)(f)条要求以适当的安全性处理个人数据，包括防止未授权访问。全盘加密确保即使硬件资产丢失或被盗，模型文件和任何记录的数据也无法访问。</strong>',
          'Linux：LUKS2配合dm-crypt——在OS安装时启用效果最佳。macOS：FileVault内置——在系统设置→隐私与安全→FileVault中启用。Windows：BitLocker（Pro/企业版）。Qwen模型权重本身不包含个人数据，但会话日志或微调模型应被视为可能包含个人数据。',
        ],
      },
      article30: {
        id: 'article-30',
        title: '第30条审计追踪——记录什么及如何记录',
        content: [
          '<strong>GDPR第30条要求组织维护涉及个人数据的处理活动记录。对于LLM部署，这意味着记录：处理目的、数据类别、技术和组织措施以及保留期限。</strong>',
          '每次推理会话记录内容：(1)模型名称和版本，(2)量化级别，(3)会话时间戳（ISO 8601），(4)输入提示词的SHA-256哈希——不是原始文本。不记录内容：提示词原始文本、响应原始文本、从响应中提取的任何个人身份信息。',
        ],
        faqs: [
          { q: '本地LLM是否需要数据保护影响评估（DPIA）？', a: '可能需要。当处理可能对个人产生高风险时（例如大规模处理医疗记录、员工绩效数据或法律文件）需要DPIA。单个分析师使用Qwen 3 14B进行合同审查可能不触发强制DPIA。每天处理数百份患者记录的医疗机构可能需要。' },
          { q: '哪种Qwen模型最适合欧洲语言的法律和HR文本？', a: 'Qwen 3 14B Q4_K_M是推荐基线：在14B级别上德语、法语、意大利语、西班牙语和英语都表现强劲。VRAM受限环境（6-8 GB）：Qwen 3 8B在多语言文本上表现良好。' },
        ],
      },
    },
  },
  pt: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Como configurar o Qwen localmente para fluxos de trabalho em conformidade com o GDPR',
    seoTitle: 'Configuração local do Qwen em conformidade com o GDPR 2026',
    metaDescription: 'Guia passo a passo para rodar o Qwen 3 14B localmente com GDPR/LGPD: Ollama, isolamento de rede, criptografia de disco e registro de auditoria do Artigo 30.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9 min de leitura',
    quickAnswerTop: {
      pt: {
        question: 'Como configuro o Qwen localmente para conformidade com o GDPR?', // VERIFY
        answer: 'Instale o Ollama, rode ollama run qwen2.5:14b em uma máquina com 12 GB de VRAM, bloqueie todas as chamadas de rede de saída do processo de inferência, ative a criptografia de disco completa e registre hashes de prompt/resposta (não o conteúdo) para o seu registro de tratamento do Artigo 30. Tempo total de configuração: menos de 30 minutos.', // VERIFY
        bullets: [
          'Hardware: RTX 3080 / RTX 4070 / qualquer GPU com 12 GB de VRAM — mínimo para o Qwen 3 14B em Q4', // VERIFY
          'Isolamento: restrinja a porta do Ollama (11434) apenas à LAN via firewall; desabilite a telemetria em .ollama/config', // VERIFY
          'Registro do Artigo 30: registre nome do modelo, quantização, carimbo de data/hora e hash do prompt — nunca dados pessoais em texto bruto', // VERIFY
        ],
        updatedDate: '2026-05', // VERIFY
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A implantação local do Qwen satisfaz os Artigos 44 (sem transferência a terceiros países), 25 (privacidade desde a concepção) e 5(1)(f) (integridade dos dados) do GDPR com uma única decisão arquitetural — e atende de forma equivalente à LGPD brasileira (Lei nº 13.709/2018)',
          'Hardware mínimo: qualquer GPU com 12 GB de VRAM (RTX 3080, RTX 4070 Ti ou equivalente) para rodar o Qwen 3 14B em Q4_K_M via Ollama',
          'Passos críticos de isolamento: restringir a porta 11434 do Ollama apenas à LAN via firewall, desabilitar a telemetria e executar em um segmento de rede isolado',
          'Registro de tratamento do Artigo 30: registrar versão do modelo, quantização, carimbo de data/hora da sessão e hash SHA-256 do prompt — nunca o conteúdo de dados pessoais em texto bruto',
          'Tempo total de configuração, de um SO limpo até a primeira inferência segura sob o GDPR: menos de 30 minutos',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: 'Por que a implantação local satisfaz o GDPR',
        content: [
          '<strong>Os três artigos do GDPR mais diretamente implicados pelo uso de IA são o Artigo 44 (transferências internacionais de dados), o Artigo 25 (proteção de dados desde a concepção) e o Artigo 5(1)(f) (integridade e confidencialidade). A implantação local de um LLM atende aos três por meio de uma única decisão arquitetural: o modelo roda no seu hardware, dentro da sua jurisdição, sem transferência de dados para fora. No Brasil, a LGPD (Lei nº 13.709/2018) impõe princípios equivalentes, fiscalizados pela ANPD.</strong>',
          'O Artigo 44 é o mais difícil de cumprir para a IA em nuvem. Cada prompt que contém dados pessoais enviado à OpenAI, à Anthropic ou à Alibaba Cloud exige uma base legal para a transferência — no mínimo Cláusulas Contratuais Padrão e, muitas vezes, também uma Avaliação de Impacto da Transferência. Quando a inferência ocorre localmente, não há nenhuma transferência do Artigo 44. A questão jurídica desaparece.',
          'O Artigo 25 exige que o tratamento seja projetado desde o início para proteger os dados pessoais. Um modelo local é o exemplo clássico: por padrão, nenhum dado sai do prédio. Auditores e autoridades de proteção de dados estão familiarizados com essa arquitetura.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Rodar o Qwen localmente satisfaz os Artigos 44, 25 e 5(1)(f) do GDPR com uma única decisão arquitetural: o modelo processa todos os dados no seu hardware, dentro da sua jurisdição.' },
          { type: 'plain-terms', text: 'O GDPR tem regras rígidas sobre o envio de dados para outros países. Um modelo de IA local mantém os dados nas suas próprias máquinas — nenhum dado cruza fronteiras, então as regras de transferência internacional simplesmente não se aplicam.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware conforme o tamanho da organização',
        content: [
          '<strong>Para um único DPO ou analista jurídico: qualquer GPU com 12 GB de VRAM dá conta do Qwen 3 14B Q4_K_M em velocidades práticas de inferência (~18 tok/s em RTX 3080). Para uma equipe de 5 a 10 usuários compartilhando um servidor central: 24 GB de VRAM (RTX 3090 ou RTX 4090) atende a várias solicitações simultâneas.</strong> A implantação empresarial multiusuário exige configuração multi-GPU, fora do escopo deste guia.',
          'Configuração mínima viável: RTX 3080, RTX 4070 Ti ou qualquer GPU com 12 GB de VRAM. Recomenda-se GPU dedicada em vez de GPU de estação de trabalho compartilhada. A alternativa por CPU via Ollama é possível, mas a velocidade de inferência cai para ~3 tok/s.',
        ],
        columns: ['Tamanho da equipe', 'GPU recomendada', 'Modelo', 'Velocidade esperada'],
        rows: [
          { 'Tamanho da equipe': '1 usuário', 'GPU recomendada': 'RTX 3080 (12 GB)', 'Modelo': 'Qwen 3 14B Q4', 'Velocidade esperada': '~18 tok/s' },
          { 'Tamanho da equipe': '2–5 usuários (fila)', 'GPU recomendada': 'RTX 4070 Ti (12 GB)', 'Modelo': 'Qwen 3 14B Q4', 'Velocidade esperada': '~22 tok/s' },
          { 'Tamanho da equipe': '5–10 usuários (compartilhado)', 'GPU recomendada': 'RTX 3090 / 4090 (24 GB)', 'Modelo': 'Qwen 3 14B Q5', 'Velocidade esperada': '~28 tok/s' },
          { 'Tamanho da equipe': 'Equipe de documentos longos', 'GPU recomendada': 'RTX 3090 (24 GB)', 'Modelo': 'Llama 4 Scout (10M ctx)', 'Velocidade esperada': '~15 tok/s' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'Instalação do Ollama — passo a passo',
        content: ['<strong>Instale o Ollama no Linux, macOS ou Windows. Baixe o Qwen 3 14B uma única vez por HTTPS. A partir daí, a inferência é totalmente offline.</strong>'],
        numberedItems: [
          {
            title: 'Instalar o Ollama',
            whyItMatters: 'Instalação em uma linha no Linux: <code>curl -fsSL https://ollama.com/install.sh | sh</code>. macOS: baixe o .app em ollama.com. Windows: baixe o instalador .exe. Verificação: <code>ollama --version</code> deve retornar um número de versão.',
          },
          {
            title: 'Baixar o modelo (download único por HTTPS)',
            whyItMatters: 'Execute <code>ollama pull qwen2.5:14b</code>. Isso baixa ~9 GB do Hugging Face via HTTPS. Esta é a única vez que o acesso à rede externa é necessário. Em ambientes air-gap: baixe em uma máquina conectada, transfira o arquivo GGUF por USB e importe com <code>ollama create qwen2.5:14b --from /caminho/para/o/arquivo.gguf</code>.',
          },
          {
            title: 'Desabilitar a telemetria',
            whyItMatters: 'Crie ou edite <code>~/.ollama/config.json</code> e adicione: <code>{"telemetry": false}</code>. O Ollama não envia tráfego de inferência para fora, mas faz pings de telemetria na inicialização. Desabilitá-la elimina qualquer atividade de rede residual do ambiente de execução.',
          },
          {
            title: 'Testar a inferência',
            whyItMatters: 'Execute <code>ollama run qwen2.5:14b</code> e digite um prompt. Confirme que a resposta é gerada localmente. Use <code>ss -tnp | grep ollama</code> (Linux) ou o Wireshark para verificar que nenhuma conexão de saída ocorre durante a inferência.',
          },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'Isolamento de rede',
        content: [
          '<strong>O Ollama expõe uma API HTTP na porta 11434 por padrão. Essa porta deve ser restrita apenas ao acesso LAN — nunca exposta à internet. A inferência em um servidor Ollama corretamente configurado gera zero tráfego de saída.</strong>',
          'No Linux com UFW: <code>ufw allow from 192.168.0.0/16 to any port 11434</code> seguido de <code>ufw deny 11434</code>. Para uso local de um único usuário, vincule o Ollama apenas ao localhost configurando a variável de ambiente: <code>OLLAMA_HOST=127.0.0.1 ollama serve</code>.',
          'Reforço adicional: execute o Ollama como usuário do sistema sem privilégios de root, restrinja o diretório do modelo a esse usuário e audite as conexões de saída mensalmente com <code>conntrack -L | grep ESTABLISHED</code> durante uma sessão de inferência para confirmar que não há chamadas externas.',
        ],
        callouts: [
          {
            type: 'important',
            text: 'Se você usar o Open WebUI ou qualquer frontend acessível pelo navegador para o Ollama, garanta que o frontend também esteja restrito apenas ao acesso LAN. O isolamento da API do Ollama não basta se o frontend estiver acessível publicamente.',
          },
        ],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: 'Criptografia de disco — Artigo 5(1)(f) do GDPR',
        content: [
          '<strong>O Artigo 5(1)(f) do GDPR exige que os dados pessoais sejam tratados com a segurança adequada, incluindo proteção contra acesso não autorizado. A criptografia de disco completo garante que, se um ativo de hardware for perdido ou roubado, os arquivos do modelo e quaisquer dados registrados não possam ser acessados.</strong>',
          'Linux: LUKS2 com dm-crypt é o padrão. Ative-o no momento da instalação do SO para maior cobertura. Para sistemas existentes: o <code>cryptsetup</code> pode criptografar partições específicas. macOS: o FileVault é integrado — ative em Ajustes do Sistema → Privacidade e Segurança → FileVault. Windows: BitLocker nas edições Pro/Enterprise.',
          'Criptografe tanto a unidade do SO quanto qualquer unidade externa usada para armazenar arquivos do modelo ou registros de sessão. Os pesos do modelo Qwen em si não contêm dados pessoais, mas qualquer registro de sessão ou modelo ajustado deve ser tratado como se potencialmente os contivesse.',
        ],
      },
      article30: {
        id: 'article-30',
        title: 'Registro de auditoria do Artigo 30 — o que registrar e como',
        content: [
          '<strong>O Artigo 30 do GDPR exige que as organizações mantenham um registro das atividades de tratamento que envolvem dados pessoais. Para uma implantação de LLM, isso significa documentar: a finalidade do tratamento, as categorias de dados tratados, as medidas técnicas e organizacionais e os períodos de retenção. A LGPD brasileira prevê obrigação equivalente de registro das operações de tratamento.</strong>',
          'O que registrar por sessão de inferência: (1) nome e versão do modelo (p. ex., qwen2.5:14b), (2) nível de quantização (Q4_K_M), (3) carimbo de data/hora da sessão (ISO 8601), (4) hash SHA-256 do prompt de entrada — não o texto bruto. O hash permite demonstrar consistência sem reter dados pessoais. (5) Identificador de usuário (pseudônimo), se aplicável.',
          'O que NÃO registrar: o texto bruto do prompt, o texto bruto da resposta, nem qualquer dado de identificação pessoal extraído da resposta. O objetivo do hash é criar um registro à prova de adulteração sem gerar um novo problema de retenção de dados pessoais.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Hash do prompt em uma linha com Python: <code>import hashlib; hashlib.sha256(prompt.encode()).hexdigest()</code>. Armazene isso junto aos metadados da sessão, não o prompt original.',
          },
        ],
        faqs: [
          {
            q: 'Um LLM local exige uma Avaliação de Impacto à Proteção de Dados (DPIA/RIPD)?',
            a: 'Possivelmente. Uma DPIA (no Brasil, o relatório de impacto à proteção de dados — RIPD) é exigida quando o tratamento provavelmente gera alto risco para as pessoas — por exemplo, o tratamento de registros médicos, dados de desempenho de funcionários ou documentos jurídicos em larga escala. O gatilho é o tratamento "sistemático e em larga escala", não a ferramenta de IA em si. Um único analista usando o Qwen 3 14B para revisar contratos provavelmente não aciona a DPIA obrigatória. Uma organização de saúde que processa centenas de registros de pacientes por dia provavelmente sim.',
          },
          {
            q: 'Posso usar o Open WebUI com o Ollama para acesso em conformidade com o GDPR?',
            a: 'Sim, se o Open WebUI também estiver restrito à LAN. Execute o Open WebUI na mesma rede isolada que o Ollama, vincule sua porta apenas à interface interna e habilite a autenticação. O Open WebUI suporta contas de usuário, o que também fornece um registro de auditoria por usuário que se mapeia aos requisitos do Artigo 30.',
          },
          {
            q: 'Qual variante do modelo Qwen é melhor para texto jurídico e de RH em idiomas europeus?',
            a: 'O Qwen 3 14B Q4_K_M é a base recomendada: forte em alemão, francês, italiano, espanhol e inglês no nível 14B. Para fluxos jurídicos com muito código (p. ex., processamento de contratos com cláusulas de código incorporado ou dados estruturados), o Qwen 3 Coder 14B Q4_K_M. Para organizações limitadas a 6–8 GB de VRAM, o Qwen 3 8B se sai bem com texto multilíngue.',
          },
          {
            q: 'Preciso de um Acordo de Operador de Tratamento com o Ollama?',
            a: 'Não. O Ollama é um ambiente de execução local sem componente de servidor. Ele não trata dados em seu nome — os pesos do modelo rodam inteiramente no seu hardware. Não existe nenhuma entidade Ollama atuando como operadora de tratamento de dados sob o Artigo 28 do GDPR. Você não precisa de um acordo de operador de tratamento.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Como configurar o Qwen localmente para fluxos de trabalho GDPR 2026',
      description: 'Guia passo a passo para rodar o Qwen 3 14B localmente com conformidade total ao GDPR.',
      url: 'https://www.promptquorum.com/pt/local-llms/qwen-local-gdpr-setup-guide-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  ko: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPR 준수 워크플로를 위한 Qwen 로컬 설치 가이드',
    seoTitle: 'Qwen으로 GDPR 준수 로컬 LLM 설정하기 2026 | PromptQuorum',
    metaDescription: 'Ollama 설치, 네트워크 격리, 디스크 암호화, Article 30 감사 추적을 포함한 GDPR 준수 Qwen 3 14B 로컬 실행 단계별 가이드. 2026년 5월 업데이트.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    audience: 'GDPR 준수 로컬 LLM 환경을 구성하는 DPO, IT 책임자, 법무 운영 팀',
    primaryTerm: 'GDPR 준수 로컬 LLM 설치',
    leadAnswerBlock: '자체 하드웨어에서 Ollama를 통해 Qwen 3 14B를 로컬로 실행하면 프롬프트 데이터가 관할 구역 밖으로 전혀 전송되지 않는 배포 환경이 구성됩니다. 이는 GDPR Article 44, 25, 5(1)(f)를 단일 아키텍처 결정으로 직접 충족합니다.',
    current_models_mentioned: ['Qwen 3 14B', 'Qwen 3 Coder 14B', 'Qwen 3 8B', 'Llama 4 Scout'],
    current_hardware_mentioned: ['RTX 3080', 'RTX 4070', 'RTX 3090'],
    quickAnswerTop: {
      ko: {
        question: 'GDPR 준수를 위해 Qwen을 로컬에서 어떻게 설정합니까?',
        answer: 'Ollama를 설치하고, 12 GB VRAM이 탑재된 기기에서 ollama run qwen2.5:14b를 실행한 뒤, 추론 프로세스의 모든 외부 네트워크 호출을 차단하고, 전체 디스크 암호화를 활성화하며, 제30조 처리 기록을 위해 프롬프트/응답 해시(내용이 아닌)를 기록합니다. 총 설치 시간: 30분 미만.',
        bullets: [
          '하드웨어: RTX 3080 / RTX 4070 / 12 GB VRAM 이상의 GPU — Q4에서 Qwen 3 14B 실행을 위한 최소 요건',
          '격리: 방화벽으로 Ollama 포트(11434)를 LAN 전용으로 제한; .ollama/config에서 원격 측정 비활성화',
          '제30조 기록: 모델명, 양자화 수준, 타임스탬프, 프롬프트 해시를 기록 — 원시 개인 식별 정보는 절대 포함 금지',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: '로컬 배포가 GDPR을 충족하는 이유', anchor: 'gdpr-case' },
      { label: '하드웨어 요건', anchor: 'hardware' },
      { label: 'Ollama 설치', anchor: 'ollama-install' },
      { label: '네트워크 격리', anchor: 'network-isolation' },
      { label: '디스크 암호화', anchor: 'disk-encryption' },
      { label: '제30조 감사 기록', anchor: 'article-30' },
      { label: 'DPA에 제출할 문서', anchor: 'dpa-docs' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '로컬 Qwen 배포는 단일 아키텍처 결정으로 GDPR 제44조(제3국 이전 금지), 제25조(설계 단계의 개인정보 보호), 제5조 제1항 (f)호(무결성 및 기밀성)를 충족합니다.',
          '최소 하드웨어: 12 GB VRAM GPU(RTX 3080, RTX 4070 Ti 또는 동급) — Ollama를 통해 Qwen 3 14B를 Q4_K_M으로 실행',
          '핵심 격리 조치: Ollama 포트 11434를 LAN 전용으로 방화벽 설정, 모델 다운로드 원격 측정 비활성화, 격리된 네트워크 세그먼트에서 실행',
          '제30조 처리 기록: 모델 버전, 양자화 수준, 세션 타임스탬프, 프롬프트의 SHA-256 해시를 기록 — PII 내용 자체는 절대 기록 금지',
          '깨끗한 OS에서 첫 GDPR 안전 추론까지 총 설치 시간: 30분 미만',
        ],
      },
      gdprCase: {
        id: 'gdpr-case',
        title: '로컬 배포가 GDPR을 충족하는 이유',
        content: [
          '<strong>AI 사용과 가장 직접적으로 관련된 세 가지 GDPR 조항은 제44조(국제 데이터 이전), 제25조(설계 단계의 개인정보 보호), 제5조 제1항 (f)호(무결성 및 기밀성)입니다. 로컬 LLM 배포는 단일 아키텍처 선택으로 세 조항을 모두 해결합니다. 모델이 귀사의 하드웨어에서, 귀사의 관할 구역 내에서, 외부 데이터 전송 없이 실행됩니다.</strong>',
          '제44조는 클라우드 AI에서 충족하기 가장 까다로운 조항입니다. 개인 데이터가 포함된 모든 프롬프트를 OpenAI, Anthropic 또는 Alibaba Cloud로 전송하려면 최소한 표준 계약 조항(SCC), 대부분의 경우 이전 영향 평가(TIA)까지 포함한 이전의 법적 근거가 필요합니다. 추론이 로컬에서 이루어지면 제44조의 이전 자체가 발생하지 않으며, 법적 문제가 사라집니다.',
          '제25조는 처리가 개인 데이터 보호를 근본적인 설계 원칙으로 삼아야 한다고 요구합니다. 로컬 모델은 이 원칙의 교과서적 사례입니다. 기본적으로 데이터가 사내를 벗어나지 않습니다. 감사관과 DPA(감독기관)는 이 아키텍처에 익숙하며, 문서화도 간단합니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen을 로컬에서 실행하면 모든 데이터를 귀사의 하드웨어, 귀사의 관할 구역 내에서 처리한다는 단일 아키텍처 선택으로 GDPR 제44조, 제25조, 제5조 제1항 (f)호를 충족합니다.' },
          { type: 'plain-terms', text: 'GDPR은 데이터의 국가 간 전송에 엄격한 규정을 적용합니다. 로컬 AI 모델은 데이터를 자체 서버에만 보관하므로 데이터가 국경을 넘지 않아 국제 이전 규정이 적용되지 않습니다.' },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '조직 규모별 하드웨어 요건',
        content: [
          '<strong>단독 DPO 또는 법무 운영 분석가의 경우: 12 GB VRAM GPU(RTX 3080 기준 약 18 tok/s)로 Qwen 3 14B Q4_K_M을 실용적인 속도로 실행할 수 있습니다. 5~10명이 중앙 서버를 공유하는 팀의 경우: 24 GB VRAM(RTX 3090 또는 RTX 4090)으로 여러 동시 요청을 처리할 수 있습니다.</strong> 기업의 대규모 멀티 유저 배포는 멀티 GPU 구성이 필요하며, 본 가이드의 범위를 벗어납니다.',
          '최소 실행 가능 구성: RTX 3080, RTX 4070 Ti, 또는 12 GB VRAM의 모든 GPU. 공유 워크스테이션 GPU보다 전용 GPU를 권장합니다. 추론만을 위한 GPU가 필요하며, 게이밍과 LLM 작업 부하를 번갈아 처리하는 GPU는 적합하지 않습니다. Ollama를 통한 CPU 폴백도 가능하지만 추론 속도가 약 3 tok/s로 낮아집니다.',
        ],
        columns: ['팀 규모', '권장 GPU', '모델', '예상 속도'],
        rows: [
          { '팀 규모': '1인 사용자', '권장 GPU': 'RTX 3080 (12 GB)', '모델': 'Qwen 3 14B Q4', '예상 속도': '~18 tok/s' },
          { '팀 규모': '2~5인 사용자 (대기열)', '권장 GPU': 'RTX 4070 Ti (12 GB)', '모델': 'Qwen 3 14B Q4', '예상 속도': '~22 tok/s' },
          { '팀 규모': '5~10인 사용자 (공유)', '권장 GPU': 'RTX 3090 / 4090 (24 GB)', '모델': 'Qwen 3 14B Q5', '예상 속도': '~28 tok/s' },
          { '팀 규모': '장문서 처리 팀', '권장 GPU': 'RTX 3090 (24 GB)', '모델': 'Llama 4 Scout (10M ctx)', '예상 속도': '~15 tok/s' },
        ],
      },
      ollamaInstall: {
        id: 'ollama-install',
        title: 'Ollama 설치 — 단계별 안내',
        content: [
          '<strong>Linux, macOS, 또는 Windows에 Ollama를 설치합니다. HTTPS를 통해 Qwen 3 14B를 한 번 다운로드합니다. 이후 추론은 완전히 오프라인으로 실행됩니다.</strong>',
        ],
        numberedItems: [
          {
            title: 'Ollama 설치',
            whyItMatters: 'Linux에서의 한 줄 설치 명령: <code>curl -fsSL https://ollama.com/install.sh | sh</code>. macOS: ollama.com에서 .app 파일을 다운로드합니다. Windows: .exe 설치 프로그램을 다운로드합니다. 확인: <code>ollama --version</code>을 실행하여 버전 번호가 출력되는지 확인합니다.',
          },
          {
            title: '모델 다운로드 (최초 1회 HTTPS 다운로드)',
            whyItMatters: '<code>ollama pull qwen2.5:14b</code>를 실행합니다. Hugging Face에서 HTTPS를 통해 약 9 GB를 다운로드합니다. 이것이 외부 네트워크 접근이 필요한 유일한 단계입니다. 에어갭(air-gapped) 환경의 경우: 네트워크가 연결된 기기에서 다운로드하고, USB를 통해 GGUF 파일을 전송한 뒤, <code>ollama create qwen2.5:14b --from /path/to/file.gguf</code>로 가져옵니다.',
          },
          {
            title: '원격 측정 비활성화',
            whyItMatters: '<code>~/.ollama/config.json</code>을 생성하거나 편집하여 <code>{"telemetry": false}</code>를 추가합니다. Ollama는 추론 트래픽을 외부로 전송하지 않지만, 시작 시 원격 측정 핑을 보냅니다. 이를 비활성화하면 런타임의 잔여 네트워크 활동이 모두 제거됩니다.',
          },
          {
            title: '추론 테스트',
            whyItMatters: '<code>ollama run qwen2.5:14b</code>를 실행하고 프롬프트를 입력합니다. 응답이 로컬에서 생성되는지 확인합니다. 추론 중 외부 연결이 발생하지 않는지 <code>ss -tnp | grep ollama</code>(Linux) 또는 Wireshark로 검증합니다.',
          },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh\nollama pull qwen2.5:14b\nollama run qwen2.5:14b',
      },
      networkIsolation: {
        id: 'network-isolation',
        title: '네트워크 격리',
        content: [
          '<strong>Ollama는 기본적으로 포트 11434에서 HTTP API를 제공합니다. 이 포트는 LAN 전용으로 제한되어야 하며, 인터넷에 절대 노출되어서는 안 됩니다. 올바르게 구성된 Ollama 서버의 추론은 외부 트래픽을 전혀 발생시키지 않습니다.</strong>',
          'Linux에서 UFW 사용 시: <code>ufw allow from 192.168.0.0/16 to any port 11434</code>에 이어 <code>ufw deny 11434</code>를 실행합니다. 이렇게 하면 LAN 클라이언트는 허용하고 모든 외부 접근을 차단합니다. 단일 사용자 로컬 환경의 경우, 환경 변수 <code>OLLAMA_HOST=127.0.0.1 ollama serve</code>를 설정하여 Ollama를 localhost에만 바인딩합니다.',
          '추가 강화 조치: 비루트(non-root) 시스템 사용자로 Ollama를 실행하고, 모델 디렉터리를 해당 사용자로 제한하며, 추론 세션 중 <code>conntrack -L | grep ESTABLISHED</code>를 통해 외부 호출이 없음을 확인하는 월별 외부 연결 감사를 수행합니다.',
        ],
        callouts: [
          {
            type: 'important',
            text: 'Open WebUI 또는 Ollama용 브라우저 접근 가능한 프론트엔드를 사용하는 경우, 해당 프론트엔드도 LAN 전용으로 제한해야 합니다. 프론트엔드가 공개적으로 접근 가능한 상태라면 Ollama API를 격리하는 것만으로는 충분하지 않습니다.',
          },
        ],
      },
      diskEncryption: {
        id: 'disk-encryption',
        title: '디스크 암호화 — GDPR 제5조 제1항 (f)호',
        content: [
          '<strong>GDPR 제5조 제1항 (f)호는 개인 데이터가 무단 접근에 대한 보호를 포함한 적절한 보안 조치와 함께 처리되어야 한다고 규정합니다. 전체 디스크 암호화를 통해 하드웨어 자산을 분실하거나 도난당하더라도 모델 파일 및 기록된 데이터에 접근할 수 없도록 보장합니다.</strong>',
          'Linux: LUKS2와 dm-crypt가 표준입니다. OS 설치 시점에 활성화하면 가장 광범위한 보호가 적용됩니다. 기존 시스템의 경우: <code>cryptsetup</code>으로 특정 파티션을 암호화할 수 있습니다. macOS: FileVault가 내장되어 있습니다. 시스템 설정 → 개인정보 보호 및 보안 → FileVault에서 활성화합니다. Windows: Pro/Enterprise 에디션에서 BitLocker를 사용합니다.',
          'OS 드라이브뿐만 아니라 모델 파일이나 세션 로그를 저장하는 모든 외부 드라이브도 암호화합니다. Qwen 모델 가중치 자체에는 개인 데이터가 포함되지 않지만, 세션 로그나 파인튜닝된 모델은 개인 데이터를 포함할 가능성이 있는 것으로 취급해야 합니다.',
        ],
      },
      article30: {
        id: 'article-30',
        title: '제30조 감사 기록 — 기록 항목 및 방법',
        content: [
          '<strong>GDPR 제30조는 조직이 개인 데이터와 관련된 처리 활동의 기록을 유지할 것을 요구합니다. LLM 배포의 경우, 이는 처리의 목적, 처리되는 데이터의 범주, 기술적·조직적 조치, 보존 기간을 문서화하는 것을 의미합니다.</strong>',
          '추론 세션별 기록 항목: (1) 모델명 및 버전(예: qwen2.5:14b), (2) 양자화 수준(Q4_K_M), (3) 세션 타임스탬프(ISO 8601), (4) 입력 프롬프트의 SHA-256 해시 — 원시 텍스트가 아닌 해시만 기록. 해시를 통해 PII를 보존하지 않고도 일관성을 증명할 수 있습니다. (5) 해당하는 경우 사용자 식별자(가명 처리).',
          '기록하지 말아야 할 항목: 원시 프롬프트 텍스트, 원시 응답 텍스트, 응답에서 추출한 모든 개인 식별 정보. 해시의 목적은 새로운 개인 데이터 보존 문제를 만들지 않고 변조 방지 기록을 생성하는 것입니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Python에서 한 줄로 프롬프트 해시 생성: <code>import hashlib; hashlib.sha256(prompt.encode()).hexdigest()</code>. 원본 프롬프트 대신 이 값을 세션 메타데이터와 함께 저장합니다.',
          },
        ],
      },
      dpaDoc: {
        id: 'dpa-docs',
        title: 'DPA 또는 내부 감사에 제출할 문서',
        content: [
          '<strong>개인정보 보호 감독기관(DPA)이 LLM 배포를 감사할 경우, 네 가지 문서가 대부분의 질문을 해결합니다: (1) 제30조 처리 등록부 항목, (2) 데이터 흐름을 보여주는 기술 아키텍처 다이어그램, (3) 디스크 암호화 증거, (4) 외부 추론 트래픽 부재를 보여주는 네트워크 모니터링 로그.</strong>',
          '로컬 LLM의 제30조 항목: 컨트롤러 신원, 처리 목적(예: "법률 문서 요약"), 개인 데이터의 범주(예: "계약 당사자 이름, 재무 조건"), 기술적 조치(로컬 모델, 전체 디스크 암호화, LAN 전용 접근), 세션 로그 보존 기간(통상 해시만 30~90일).',
          '아키텍처 다이어그램은 DPA에 제출하는 가장 중요한 문서입니다. 사용자 → Ollama API(LAN 전용) → 모델 추론 → 응답의 흐름을 보여주고 "외부 인터넷 연결 없음"이라는 명시적인 주석이 달린 단일 페이지 다이어그램으로 제44조 문제를 시각적으로 효율적으로 해결할 수 있습니다.',
        ],
        faqs: [
          {
            q: '로컬 LLM에 데이터 보호 영향 평가(DPIA)가 필요합니까?',
            a: '경우에 따라 필요할 수 있습니다. DPIA는 처리가 개인에게 높은 위험을 초래할 가능성이 있는 경우, 예를 들어 의료 기록, 직원 성과 데이터 또는 대규모 법률 문서를 처리하는 경우에 요구됩니다. 트리거는 AI 도구 자체가 아니라 "체계적이고 대규모" 기준입니다. 계약서 검토를 위해 Qwen 3 14B를 사용하는 단독 분석가는 DPIA 의무를 발생시키지 않을 가능성이 높습니다. 하루에 수백 건의 환자 기록을 처리하는 의료 기관은 DPIA가 필요할 가능성이 높습니다.',
          },
          {
            q: 'GDPR 준수 접근을 위해 Ollama와 함께 Open WebUI를 사용할 수 있습니까?',
            a: '가능합니다. Open WebUI도 LAN으로 제한된 경우에 한합니다. Open WebUI를 Ollama와 동일한 격리된 네트워크에서 실행하고, 내부 인터페이스에만 포트를 바인딩하며, 인증을 활성화합니다. Open WebUI는 사용자 계정을 지원하므로 제30조 요건에 매핑되는 사용자 수준 감사 추적도 확보할 수 있습니다.',
          },
          {
            q: '유럽 언어로 된 법률 및 인사 텍스트에 가장 적합한 Qwen 모델 변형은 무엇입니까?',
            a: 'Qwen 3 14B Q4_K_M이 권장 기준입니다. 독일어, 프랑스어, 이탈리아어, 스페인어, 영어 전반에서 14B 티어의 강력한 성능을 발휘합니다. 코드가 포함된 법률 워크플로우(예: 임베디드 코드 조항이나 구조화 데이터가 포함된 계약서 처리)의 경우 Qwen 3 Coder 14B Q4_K_M을 사용합니다. 6~8 GB VRAM으로 제한된 조직에서는 Qwen 3 8B가 다국어 텍스트에서 우수한 성능을 발휘합니다.',
          },
          {
            q: 'Ollama와 데이터 처리 계약(DPA)을 체결해야 합니까?',
            a: '아닙니다. Ollama는 서버 컴포넌트가 없는 로컬 런타임입니다. Ollama는 귀사를 대신하여 데이터를 처리하지 않으며, 모델 가중치가 귀사의 하드웨어에서 완전히 실행됩니다. GDPR 제28조상 데이터 처리자 역할을 하는 Ollama 법인이 존재하지 않으므로 DPA 체결이 필요하지 않습니다.',
          },
        ],
      },
    },
  },
}
