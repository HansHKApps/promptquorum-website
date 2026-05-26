// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llm-security-privacy-checklist
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Local LLM Security and Privacy Checklist: 12 Steps to a Safe Setup',
      seoTitle: 'Keep Your Data Private: Local LLM Security Guide 2026',
      intro: 'Running a local LLM keeps your prompts off external servers, but it does not automatically make your setup secure. Risks such as telemetry, untrusted model files, and exposed APIs can still leak data. This checklist shows exactly how to secure a local LLM in under 10 minutes.',
      metaDescription: '12-step checklist: disable telemetry, verify checksums, isolate port 11434, enable disk encryption. GDPR and HIPAA compliance. Air-gapped setup. 2026.',
      twitterDescription: '12-step local LLM security checklist: disable telemetry, verify checksums, isolate port 11434, enable disk encryption. GDPR and HIPAA covered.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-18',
      leadAnswerBlock: '**Running a local LLM keeps your prompts off external servers, but it does not automatically make your setup secure. Risks such as telemetry, untrusted model files, and exposed APIs can still leak data. This checklist shows exactly how to secure a local LLM in under 10 minutes.**',
            comparisonTable: {
        columns: ['Setup', 'Modellgröße', 'Geschwindigkeit', 'Erfahrung'],
        rows: [
          { 'Setup': '8 GB RAM CPU', 'Modellgröße': '3B–7B', 'Geschwindigkeit': '10–25 Token/Sek.', 'Erfahrung': 'Brauchbar für Chat, Zusammenfassung, einfaches Coding' },
          { 'Setup': '16 GB RAM CPU', 'Modellgröße': '7B–13B', 'Geschwindigkeit': '5–15 Token/Sek.', 'Erfahrung': 'Allgemeine Nutzung, keine Multitasking-Einschränkungen' },
          { 'Setup': 'Apple Silicon (M2–M4)', 'Modellgröße': '7B–13B', 'Geschwindigkeit': '30–80 Token/Sek.', 'Erfahrung': 'Schnellste Consumer-Option, beste Akkulaufzeit' },
          { 'Setup': 'GPU-Laptop (RTX 4060, 8 GB VRAM)', 'Modellgröße': '7B–13B', 'Geschwindigkeit': '60–90 Token/Sek.', 'Erfahrung': 'Am schnellsten, aber hohe Wärme und Stromverbrauch' },
        ],
      },
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM privacy',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Why Local LLMs Are Not Automatically Private', anchor: '#why-not-automatically-private' },
        { label: 'The 12-Item Security Checklist', anchor: '#the-12-item-checklist' },
        { label: 'Model Provenance: Where to Download Safely', anchor: '#model-provenance' },
        { label: 'Network Isolation: Blocking Outbound Connections', anchor: '#network-isolation' },
        { label: 'Telemetry Settings by Tool', anchor: '#telemetry-settings' },
        { label: 'Threat Model', anchor: '#threat-model' },
        { label: 'Common Questions', anchor: '#common-questions' },
      ],
      sections: {
        areLLMsSecure: {
          id: 'are-llms-private-and-secure',
          title: 'Are local LLMs private and secure?',
          content: 'Local LLMs are private by default because prompts stay on your device, but they are not automatically secure. The main risks are telemetry from tools, untrusted model files, and network exposure. A secure setup requires disabling telemetry, verifying model sources, and isolating the system from external access.',
        },
        tldr: {
          id: 'key-takeaways',
          title: 'What are the key takeaways?',
          isTldr: true,
          items: [
            'Local inference keeps prompt data off third-party servers. The remaining risks are: telemetry from the inference tool, model files from untrusted sources, and the Ollama API being exposed on the network.',
            'Ollama binds to localhost by default -- it is not accessible from other devices unless you explicitly set OLLAMA_HOST=0.0.0.0.',
            'Disable analytics in LM Studio (Settings → Privacy → disable "Send anonymous usage data") and GPT4All (Settings → disable telemetry).',
            'Download model weights only from Hugging Face (huggingface.co) or the official Ollama library. Verify SHA256 checksums for sensitive deployments.',
            'For regulated data (HIPAA, GDPR, legal privilege): enable full-disk encryption, use an air-gapped machine, and audit all installed extensions.',
          ],
        },
        whyNotAutoPrivate: {
          title: 'Why Are Local LLMs Not Automatically Private?',
          content: [
            '**The model inference itself is private -- your prompts are never sent to the model provider\'s servers.** But three other data flows can leak information:',
          ],
          items: [
            '**Application telemetry**: LM Studio, GPT4All, and some other tools collect anonymous usage analytics by default. These may include session counts, model names used, and performance metrics.',
            '**Model download sources**: malicious GGUF files can contain code that executes during model loading in vulnerable inference engines. An unverified model file is a supply chain risk.',
            '**Network exposure**: Ollama\'s API server is accessible to any process on your machine. If misconfigured with `OLLAMA_HOST=0.0.0.0`, it becomes accessible to your entire network without authentication.',
          ],
        },
        localVsCloud: {
          id: 'local-vs-cloud',
          title: 'Are local LLMs safer than cloud APIs?',
          content: 'Local LLMs are safer for privacy because data stays on your device, while cloud APIs send prompts to external servers. However, local setups require manual security configuration, while cloud providers handle infrastructure security. The real tradeoff is privacy autonomy vs. delegated security.',
        },
        misconceptions: {
          id: 'common-misconceptions',
          title: 'What are common misconceptions about local LLM security?',
          items: [
            '"Local LLMs are automatically secure" → false, configuration matters most',
            '"No internet = no risk" → false, malicious files and plugins still apply',
            '"Open source = safe" → false, code must still be verified',
          ],
        },
        risks: {
          id: 'security-risks',
          title: 'What are the biggest security risks in local LLMs?',
          items: [
            '**Telemetry leaks** → tools like LM Studio may send usage data',
            '**Malicious model files** → unverified GGUF files can introduce risk',
            '**Network exposure** → APIs like Ollama can be exposed if misconfigured',
          ],
        },
        quickChecklist: {
          id: 'quick-checklist',
          title: 'What should you do in the first 5 minutes?',
          numberedItems: [
            'Disable telemetry in your tool',
            'Download models only from Hugging Face or Ollama',
            'Ensure API is bound to localhost only',
            'Enable full-disk encryption',
            'Do not expose ports to the internet',
          ],
        },
        checklist: {
          title: 'What Does the Local LLM Security Checklist Include?',
          content: '**Verify every item below before working with sensitive or regulated data.** The checklist covers the most common privacy and security gaps in Ollama, LM Studio, Jan AI, and GPT4All setups.',
          numberedItems: [
            { title: 'Download models only from trusted sources', whyItMatters: 'Prevents malicious model files from untrusted sources.' },
            { title: 'Verify model checksums for sensitive use', whyItMatters: 'Ensures downloaded model files have not been tampered with.' },
            { title: 'Disable telemetry in your inference tool', whyItMatters: 'Prevents usage data and session information from being collected.' },
            { title: 'Confirm Ollama is bound to localhost only', whyItMatters: 'Prevents the API from being exposed to other devices on your network.' },
            { title: 'Enable full-disk encryption', whyItMatters: 'Protects model weights and chat logs if the device is lost or stolen.' },
            { title: 'Store sensitive chat logs in an encrypted folder', whyItMatters: 'Protects conversation history with sensitive data from unauthorized access.' },
            { title: 'Review installed extensions and plugins', whyItMatters: 'Prevents malicious third-party extensions from accessing the network.' },
            { title: 'Use a dedicated user account for LLM work', whyItMatters: 'Isolates model files, chat history, and API keys from your main profile.' },
            { title: 'Do not expose the local API to the internet', whyItMatters: 'Prevents unauthorized remote access to your local inference engine.' },
            { title: 'Audit system prompts in any app using local LLMs', whyItMatters: 'Prevents data exfiltration through browser extensions or productivity tool integrations.' },
            { title: 'Keep inference tools updated', whyItMatters: 'Patches known security vulnerabilities in Ollama, LM Studio, and related tools.' },
            { title: 'For air-gapped or regulated environments: document approved model versions', whyItMatters: 'Ensures compliance with regulatory requirements for data handling and infrastructure isolation.' },
          ],
        },
        modelProvenance: {
          title: 'Where should you download local LLM models safely?',
          content: [
            '**Model weights are large binary files.** A malicious GGUF file could exploit vulnerabilities in the parser used by llama.cpp. As of 2026, no widespread GGUF-based malware has been confirmed, but the attack surface exists.',
          ],
          items: [
            '**Hugging Face** (huggingface.co): the primary source for open models. Each file has a verified SHA256 hash. Stick to models from well-known publishers (Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba).',
            '**Ollama library** (ollama.com/library): Ollama verifies model hashes before storing them. Models pulled via `ollama pull` are safe.',
            '**LM Studio model browser**: searches Hugging Face directly. The same trust rules apply -- check the publisher account.',
            '**Avoid**: anonymous file sharing sites, Discord file drops, and any source that does not provide a verifiable hash.',
          ],
        },
        networkIsolation: {
          title: 'How Do You Block Outbound Connections from Local LLMs?',
          content: '**Block outbound connections after the model is downloaded to prevent the inference tool from phoning home.** On macOS, use `pf` firewall; on Linux, use `ufw` or OpenSnitch:',
          codeBlock: '# macOS -- block Ollama outbound with pf firewall\n# Add to /etc/pf.conf:\nblock out proto tcp from any to any user ollama\n\n# Linux -- block with ufw\nsudo ufw deny out from any to any app ollama\n\n# Or use Little Snitch (macOS) / OpenSnitch (Linux)\n# for per-application network control with a GUI',
          codeLanguage: 'bash',
        },
        telemetry: {
          title: 'How Do You Disable Telemetry in Local LLM Tools?',
          rows: [
            { 'Tool': 'Ollama', 'Telemetry Default': 'None collected', 'How to Confirm': 'Check github.com/ollama/ollama -- no analytics code' },
            { 'Tool': 'LM Studio', 'Telemetry Default': 'Anonymous analytics enabled', 'How to Disable': 'Settings → Privacy → uncheck "Send anonymous usage data"' },
            { 'Tool': 'Jan AI', 'Telemetry Default': 'None -- explicitly disabled', 'How to Confirm': 'Open source -- audit github.com/janhq/jan' },
            { 'Tool': 'GPT4All', 'Telemetry Default': 'Opt-in only at first launch', 'How to Change': 'Settings → Privacy → disable usage analytics' },
          ],
          columns: ['Tool', 'Telemetry Default', 'How to Confirm/Disable'],
        },
        threatModel: {
          id: 'threat-model',
          title: 'What threat model should you assume?',
          content: [
            '**Assume your local LLM environment can leak data through tools, plugins, or misconfiguration. Treat the model as untrusted — design your setup so that even if the model is compromised, sensitive data cannot be accessed or transmitted. This means isolating the inference tool from the internet, disabling telemetry, and restricting file system access.**',
            'Security is not just about data privacy — prompt injection is a separate attack vector where malicious input manipulates model behavior. For injection defence techniques that apply to both local and cloud models, see [prompt injection and security](https://www.promptquorum.com/prompt-engineering/prompt-injection-and-security).',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'What are common security questions about local LLMs?',
          faqs: [
            {
              q: 'Can a local LLM access my files or the internet?',
              a: 'No -- the model itself is a static file that generates text. It has no ability to read your file system or make network requests. However, the inference tool running the model (Ollama, LM Studio) has normal OS-level access. Some tools include features that do read files -- such as GPT4All\'s LocalDocs or LM Studio\'s file attachment feature. These features are opt-in and explicitly documented.',
            },
            {
              q: 'Is it safe to use a local LLM with HIPAA-covered data?',
              a: 'Local inference removes the third-party data processor risk that cloud APIs create. However, HIPAA compliance requires more than private inference -- you need full-disk encryption, access controls, audit logging, and a Business Associate Agreement if any software vendor could access PHI. Using Ollama with FileVault enabled and telemetry disabled is a reasonable starting point, but formal HIPAA compliance requires a full risk assessment.',
            },
            {
              q: 'Does Ollama send my prompts anywhere?',
              a: 'No. Ollama is open source (github.com/ollama/ollama) and contains no telemetry or data collection code. Prompts are processed locally by llama.cpp and never transmitted. The only outbound network activity from Ollama is model downloads from ollama.com when you run `ollama pull`.',
            },
            {
              q: 'Is using a local LLM more private than using the OpenAI API?',
              a: 'Yes, for prompt privacy. With a local LLM, your prompts never leave your machine. The OpenAI API sends prompts to OpenAI\'s servers for processing. OpenAI\'s API Terms of Service state that API input/output is not used to train models by default, but the data does transit their infrastructure. For sensitive or regulated data (medical, legal, financial), local inference is the more conservative choice.',
            },
            {
              q: 'How do I verify that a downloaded model file is safe?',
              a: 'Download models only from Hugging Face (huggingface.co) or the official Ollama library. On Hugging Face, each file shows a SHA256 hash -- verify it with `sha256sum <model_file>` after downloading. Stick to models from known publishers: Meta, Google, Microsoft, Mistral AI, and Qwen/Alibaba. Avoid anonymous file shares or Discord file drops.',
            },
            {
              q: 'What is the difference between privacy and security for local LLMs?',
              a: 'Privacy means your prompts and outputs are not accessible to third parties. Security means your system is protected from threats. A local LLM can be private (no data leaves your machine) but insecure (model downloaded from an untrusted source, or Ollama API exposed on the network). Both must be addressed independently.',
            },
            {
              q: 'Can I use a local LLM for GDPR-regulated data?',
              a: 'Local inference significantly reduces GDPR risk because data does not leave your infrastructure. However, you must still verify that the inference tool (Ollama, LM Studio) has telemetry disabled, that disk encryption is enabled, and that access controls are in place. For Article 35 DPIA requirements, document your data processing setup and confirm no personal data transits third-party servers.',
            },
            {
              q: 'Does LM Studio send data to its servers?',
              a: 'LM Studio collects anonymous analytics by default (session counts, model names used, performance metrics). It does not send prompt content. To disable analytics: Settings → Privacy → uncheck "Send anonymous usage data". Model inference and chat logs stay local regardless of this setting.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Where can you find additional sources?',
          items: [
            '**OWASP Top 10 for LLM Applications** (owasp.org/www-project-top-10-for-large-language-model-applications/) -- Security risks for LLM deployments including prompt injection and supply chain attacks',
            '**Hugging Face Model Card Documentation** (huggingface.co/docs/hub/model-cards) -- Model provenance standards and SHA256 hash verification',
            '**VeraCrypt** (veracrypt.fr) -- Open-source full-disk and folder encryption for Windows, macOS, and Linux',
          ],
        },
        commonMistakes: {
          title: 'What Are the Most Common Local LLM Security Mistakes?',
          content: '**Most local LLM security failures come from configuration oversights, not model vulnerabilities.** These are the five most frequent mistakes and how to fix each one.',
          items: [
            '**Mistake:** Downloading models from third-party sites (Discord, random GitHub releases). **Fix:** Use Hugging Face (huggingface.co) or Ollama library only. Verify with `sha256sum`.',
            '**Mistake:** Assuming local inference = full privacy. **Fix:** Disable LM Studio analytics (Settings → Privacy) and GPT4All telemetry. Run `netstat -an | grep 11434` to confirm no unexpected ports.',
            '**Mistake:** Leaving `OLLAMA_HOST=0.0.0.0` active after testing. **Fix:** Revert: `export OLLAMA_HOST=127.0.0.1:11434`. Test from another device — connection should be refused.',
            '**Mistake:** Skipping disk encryption for HIPAA/GDPR workloads. **Fix:** Enable FileVault (macOS) or BitLocker (Windows). Encrypt the LM Studio chat log folder separately.',
            '**Mistake:** Not reviewing third-party extensions in Open WebUI or Jan AI. **Fix:** Audit installed extensions monthly. Remove any requesting network access you don\'t recognize.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'What are the regional compliance considerations?',
          content: '**Local LLM inference reduces data residency risk, but full regulatory compliance requires additional controls per region.**',
          items: [
            '**EU / GDPR (2018):** Local inference removes the Article 28 data processor obligation for the model provider. You must still disable LM Studio analytics, enable disk encryption, and document your data processing setup for any DPIA. Perform a legitimate interest assessment before processing personal data.',
            '**United States / HIPAA:** HIPAA requires safeguards for PHI: full-disk encryption (the "encryption safe harbor"), access controls, and audit logging. Ollama with FileVault enabled and telemetry disabled is a reasonable HIPAA starting point. Formal compliance requires a full risk assessment.',
            '**Japan / APPI (2022):** The Act on the Protection of Personal Information requires personal data protection during processing. Local inference on an air-gapped machine satisfies data localisation. Disable Ollama update checks and LM Studio analytics for APPI compliance.',
            '**China / PIPL (2021):** Running a local LLM for internal use does not require CAC registration. If you deploy a local LLM as a public-facing service in China, CAC algorithm registration is required.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'What else should you read?',
          items: [
            '[What Are Local LLMs?](/local-llms/what-are-local-llms) -- Core concepts and components',
            '[Local LLMs vs Cloud APIs](/local-llms/local-llms-vs-cloud-apis) -- Privacy trade-offs',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Installation and setup',
            '[How to Run Local LLMs on a Laptop](/local-llms/local-llm-on-laptop) -- Secure laptop configuration',
            '[Local LLM One-Click Installers](/local-llms/local-llm-one-click-installers) -- Compare LM Studio, Ollama, Jan AI, and GPT4All installers for privacy and ease of setup',
            '[Troubleshooting Local LLM Setup](/local-llms/troubleshooting-local-llm-setup) -- Fix common errors including port 11434 refused and GPU not detected',
            '[Local AI Behind Firewall / Offline (2026)](/power-local-llm/local-ai-behind-firewall-offline-2026) -- Air-gap Ollama: network isolation, audit logging, and no-internet setup.',
            '[Best VPN for AI Development in China (2026)](/prompt-bites/best-vpn-for-ai-development-china-2026) -- Accessing Hugging Face, GitHub, and model registries from behind the firewall.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Local LLM Security and Privacy Checklist: 12 Steps to a Safe Setup',
        'description': '12-step checklist for local LLM privacy in 2026: model provenance, telemetry opt-out, network isolation, disk encryption, and access controls.',
        'url': 'https://www.promptquorum.com/local-llms/local-llm-security-privacy-checklist',
        'inLanguage': 'en',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'local LLM privacy' },
          { '@type': 'Thing', 'name': 'LLM security' },
          { '@type': 'Thing', 'name': 'Ollama telemetry' },
          { '@type': 'Thing', 'name': 'model provenance' },
          { '@type': 'Thing', 'name': 'disk encryption' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
        'audience': { '@type': 'Audience', 'audienceType': 'Developers and IT professionals running local LLMs' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Can a local LLM access my files or the internet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No -- the model itself is a static file that generates text. It has no ability to read your file system or make network requests. However, the inference tool running the model (Ollama, LM Studio) has normal OS-level access. Some tools include features that do read files -- such as GPT4All\'s LocalDocs or LM Studio\'s file attachment feature. These features are opt-in and explicitly documented.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is it safe to use a local LLM with HIPAA-covered data?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Local inference removes the third-party data processor risk that cloud APIs create. However, HIPAA compliance requires more than private inference -- you need full-disk encryption, access controls, audit logging, and a Business Associate Agreement if any software vendor could access PHI. Using Ollama with FileVault enabled and telemetry disabled is a reasonable starting point, but formal HIPAA compliance requires a full risk assessment.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does Ollama send my prompts anywhere?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Ollama is open source (github.com/ollama/ollama) and contains no telemetry or data collection code. Prompts are processed locally by llama.cpp and never transmitted. The only outbound network activity from Ollama is model downloads from ollama.com when you run `ollama pull`.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is using a local LLM more private than using the OpenAI API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, for prompt privacy. With a local LLM, your prompts never leave your machine. The OpenAI API sends prompts to OpenAI\'s servers for processing. OpenAI\'s API Terms of Service state that API input/output is not used to train models by default, but the data does transit their infrastructure. For sensitive or regulated data (medical, legal, financial), local inference is the more conservative choice.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How do I verify that a downloaded model file is safe?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Download models only from Hugging Face (huggingface.co) or the official Ollama library. On Hugging Face, each file shows a SHA256 hash -- verify it with `sha256sum <model_file>` after downloading. Stick to models from known publishers: Meta, Google, Microsoft, Mistral AI, and Qwen/Alibaba. Avoid anonymous file shares or Discord file drops.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between privacy and security for local LLMs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Privacy means your prompts and outputs are not accessible to third parties. Security means your system is protected from threats. A local LLM can be private (no data leaves your machine) but insecure (model downloaded from an untrusted source, or Ollama API exposed on the network). Both must be addressed independently.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I use a local LLM for GDPR-regulated data?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Local inference significantly reduces GDPR risk because data does not leave your infrastructure. However, you must still verify that the inference tool (Ollama, LM Studio) has telemetry disabled, that disk encryption is enabled, and that access controls are in place. For Article 35 DPIA requirements, document your data processing setup and confirm no personal data transits third-party servers.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does LM Studio send data to its servers?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio collects anonymous analytics by default (session counts, model names used, performance metrics). It does not send prompt content. To disable analytics: Settings → Privacy → uncheck "Send anonymous usage data". Model inference and chat logs stay local regardless of this setting.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How do I prevent Ollama from being accessed by other devices on my network?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'By default, Ollama binds to localhost (127.0.0.1:11434) and is not accessible from other devices. If you previously set OLLAMA_HOST=0.0.0.0 to allow network access, revert it: `export OLLAMA_HOST=127.0.0.1:11434`. Verify isolation by attempting to connect from another device on your network -- it should fail.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Which local LLM tool is best for maximum privacy?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Jan AI is the most privacy-focused tool: fully open source (MIT licence), zero telemetry, no account required, all data stored locally in plain JSON files. Ollama is second: open source, no telemetry code, binds to localhost by default. LM Studio collects anonymous analytics by default and requires opt-out in Settings.',
            },
          },
        ],
      },
    },

  de: {
    theme: 'Getting Started',
    title: 'Checkliste für Sicherheit und Datenschutz bei lokalen LLMs: 12 Schritte zu einem sicheren Setup',
    seoTitle: 'Lokale LLM Sicherheit & Datenschutz: 12-Schritte-Checkliste 2026',
    intro: 'Ein lokales LLM hält Ihre Prompts von externen Servern fern, macht Ihre Umgebung aber nicht automatisch sicher. Risiken wie Telemetrie, nicht vertrauenswürdige Modelldateien und exponierte APIs können Daten noch immer preisgeben. Diese Checkliste zeigt genau, wie Sie ein lokales LLM in unter 10 Minuten sichern.',
    metaDescription: '12-Schritte-Sicherheitscheckliste für lokale LLMs: Telemetrie, Checksummen, Port 11434, Festplattenverschlüsselung. DSGVO und HIPAA inklusive. April 2026.',
    twitterDescription: '12-Schritte-Sicherheitscheckliste für lokale LLMs: Telemetrie, Checksummen, Port 11434, Festplattenverschlüsselung. DSGVO und HIPAA.',
    publishDate: '2026-04-04',
    dateModified: '2026-04-18',
    readTime: '8 min Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'Datenschutz bei lokalen LLMs',
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Warum lokale LLMs nicht automatisch privat sind', anchor: '#why-not-automatically-private' },
      { label: 'Die 12-Punkte-Sicherheitscheckliste', anchor: '#the-12-item-checklist' },
      { label: 'Modellherkunft: Sichere Download-Quellen', anchor: '#model-provenance' },
      { label: 'Netzwerkisolation: Ausgehende Verbindungen blockieren', anchor: '#network-isolation' },
      { label: 'Telemetrie-Einstellungen nach Tool', anchor: '#telemetry-settings' },
      { label: 'Threat Model', anchor: '#threat-model' },
      { label: 'Häufige Fragen', anchor: '#common-questions' },
    ],
    sections: {
      areLLMsSecure: {
        id: 'are-llms-private-and-secure',
        title: 'Sind lokale LLMs privat und sicher?',
        content: 'Lokale LLMs sind standardmäßig privat, weil Prompts auf Ihrem Gerät bleiben, aber sie sind nicht automatisch sicher. Die Hauptrisiken sind Telemetrie von Tools, nicht vertrauenswürdige Modelldateien und Netzwerk-Exposition. Ein sicheres Setup erfordert das Deaktivieren der Telemetrie, das Überprüfen von Modellquellen und das Isolieren des Systems vom externen Zugriff.',
      },
      tldr: {
        id: 'key-takeaways',
        title: 'Was sind die wichtigsten Erkenntnisse?',
        isTldr: true,
        items: [
          'Lokale Inferenz hält Prompt-Daten von den Servern Dritter fern. Die verbleibenden Risiken sind: Telemetrie des Inferenz-Tools, Modelldateien aus nicht vertrauenswürdigen Quellen und die Ollama-API, die im Netzwerk verfügbar gemacht wird.',
          'Ollama bindet sich standardmäßig an localhost -- es ist nicht von anderen Geräten aus erreichbar, es sei denn, Sie setzen explizit OLLAMA_HOST=0.0.0.0.',
          'Deaktivieren Sie Analytics in LM Studio (Einstellungen → Datenschutz → „Anonyme Nutzungsdaten senden" deaktivieren) und GPT4All (Einstellungen → Telemetrie deaktivieren).',
          'Laden Sie Modellgewichte nur von Hugging Face (huggingface.co) oder aus der offiziellen Ollama-Bibliothek herunter. Überprüfen Sie SHA256-Prüfsummen für sensible Bereitstellungen.',
          'Für regulierte Daten (HIPAA, DSGVO, rechtliche Privilegien): Aktivieren Sie Vollverschlüsselung der Festplatte, verwenden Sie einen isolierten Computer und überprüfen Sie alle installierten Erweiterungen.',
        ],
      },
      whyNotAutoPrivate: {
        title: 'Warum sind lokale LLMs nicht automatisch privat?',
        content: [
          '**Die Modell-Inferenz selbst ist privat -- Ihre Prompts werden niemals an die Server des Modellanbieters gesendet.** Aber drei weitere Datenflüsse können zu Informationslecks führen:',
        ],
        items: [
          '**Anwendungs-Telemetrie**: LM Studio, GPT4All und einige andere Tools erfassen standardmäßig anonyme Nutzungsanalysen. Diese können Sitzungszahlen, verwendete Modellnamen und Leistungsmetriken enthalten.',
          '**Modell-Download-Quellen**: Bösartige GGUF-Dateien können Code enthalten, der sich beim Laden von Modellen in anfälligen Inferenz-Engines ausführt. Eine ungeprüfte Modelldatei ist ein Supply-Chain-Risiko.',
          '**Netzwerk-Exposition**: Die Ollama-API ist für jeden Prozess auf Ihrem Computer zugänglich. Bei Fehlkonfiguration mit `OLLAMA_HOST=0.0.0.0` wird sie für Ihr gesamtes Netzwerk ohne Authentifizierung erreichbar.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Sind lokale LLMs sicherer als Cloud-APIs?',
        content: 'Lokale LLMs sind sicherer für Datenschutz, weil Daten auf Ihrem Gerät bleiben, während Cloud-APIs Prompts an externe Server senden. Jedoch erfordern lokale Setups manuelle Sicherheitskonfiguration, während Cloud-Provider Infrastruktursicherheit handhaben. Der echte Kompromiss ist Datenschutz-Autonomie vs. delegierte Sicherheit.',
      },
      misconceptions: {
        id: 'common-misconceptions',
        title: 'Was sind häufige Missverständnisse zur Sicherheit lokaler LLMs?',
        items: [
          '"Lokale LLMs sind automatisch sicher" → falsch, Konfiguration ist entscheidend',
          '"Kein Internet = kein Risiko" → falsch, bösartige Dateien und Plugins gelten immer noch',
          '"Open Source = sicher" → falsch, Code muss immer noch überprüft werden',
        ],
      },
      risks: {
        id: 'security-risks',
        title: 'Was sind die größten Sicherheitsrisiken bei lokalen LLMs?',
        items: [
          '**Telemetrie-Lecks** → Tools wie LM Studio können Nutzungsdaten senden',
          '**Bösartige Modelldateien** → nicht überprüfte GGUF-Dateien können Risiken einführen',
          '**Netzwerk-Exposition** → APIs wie Ollama können bei Fehlkonfiguration offengelegt werden',
        ],
      },
      quickChecklist: {
        id: 'quick-checklist',
        title: 'Was sollten Sie in den ersten 5 Minuten tun?',
        numberedItems: [
          'Telemetrie in Ihrem Tool deaktivieren',
          'Modelle nur von Hugging Face oder Ollama herunterladen',
          'Stellen Sie sicher, dass die API nur an localhost gebunden ist',
          'Vollverschlüsselung der Festplatte aktivieren',
          'Ports nicht ins Internet freigeben',
        ],
      },
      checklist: {
        title: 'Was sind die 12 Sicherheitsschritte?',
        content: '**Überprüfen Sie alle folgenden Punkte, bevor Sie mit sensiblen oder regulierten Daten arbeiten.** Die Checkliste deckt die häufigsten Datenschutz- und Sicherheitslücken in Ollama, LM Studio, Jan AI und GPT4All-Setups ab.',
        numberedItems: [
          { title: 'Laden Sie Modelle nur aus vertrauenswürdigen Quellen herunter', whyItMatters: 'Verhindert bösartige Modelldateien aus nicht vertrauenswürdigen Quellen.' },
          { title: 'Überprüfen Sie Modell-Prüfsummen für sensible Anwendungen', whyItMatters: 'Stellt sicher, dass heruntergeladene Modelldateien nicht manipuliert wurden.' },
          { title: 'Deaktivieren Sie Telemetrie in Ihrem Inferenz-Tool', whyItMatters: 'Verhindert, dass Nutzungsdaten und Sitzungsinformationen erfasst werden.' },
          { title: 'Bestätigen Sie, dass Ollama nur an localhost gebunden ist', whyItMatters: 'Verhindert, dass die API anderen Geräten in Ihrem Netzwerk offengelegt wird.' },
          { title: 'Aktivieren Sie die Vollverschlüsselung der Festplatte', whyItMatters: 'Schützt Modellgewichte und Chat-Protokolle, falls das Gerät verloren geht.' },
          { title: 'Speichern Sie sensible Chat-Protokolle in einem verschlüsselten Ordner', whyItMatters: 'Schützt Gesprächsverlauf mit sensiblen Daten vor unbefugtem Zugriff.' },
          { title: 'Überprüfen Sie installierte Erweiterungen und Plugins', whyItMatters: 'Verhindert, dass bösartige Drittanbieter-Erweiterungen das Netzwerk zugänglich machen.' },
          { title: 'Verwenden Sie ein dediziertes Benutzerkonto für LLM-Arbeiten', whyItMatters: 'Isoliert Modelldateien, Gesprächsverlauf und API-Schlüssel von Ihrem Hauptprofil.' },
          { title: 'Machen Sie die lokale API nicht im Internet verfügbar', whyItMatters: 'Verhindert unbefugten Fernzugriff auf Ihre lokale Inferenz-Engine.' },
          { title: 'Überprüfen Sie System-Prompts in jeder App, die lokale LLMs nutzt', whyItMatters: 'Verhindert Datenverlust durch Browser-Erweiterungen oder Produktivitäts-Tool-Integrationen.' },
          { title: 'Halten Sie Inferenz-Tools aktuell', whyItMatters: 'Behebt bekannte Sicherheitslücken in Ollama, LM Studio und verwandten Tools.' },
          { title: 'Für isolierte oder regulierte Umgebungen: Dokumentieren Sie genehmigte Modellversionen', whyItMatters: 'Stellt sicher, dass regulatorische Anforderungen für Datenbehandlung und Infrastruktur-Isolation erfüllt werden.' },
        ],
      },
      zusammenfassung: {
        title: 'Was sind die Kernpunkte für DSGVO-Compliance?',
        items: [
          '**Lokal verarbeitete Daten** -- da Prompts Ihren Computer nicht verlassen, fungiert die lokale Maschine als Datenverarbeiter, nicht Ollama oder LM Studio. Dennoch müssen Sie überprüfen, ob Telemetrie deaktiviert ist.',
          '**BSI C5-Anforderungen** -- für Bundesbehörden-Daten: Vollverschlüsselung (AES-256), Zugriffskontrolle, Audit-Logging und Netzwerk-Isolation. Alle 12 Schritte dieser Checkliste adressieren diese Punkte.',
          '**Datenschutz-Folgenabschätzung erforderlich** -- wenn Sie personenbezogene Daten verarbeiten (DSGVO Art. 35), dokumentieren Sie, dass Sie Ollama nutzen, Netzwerk-Isolation aktiviert ist und kein Cloud-Speicher verwendet wird.',
        ],
      },
      modelProvenance: {
        title: 'Wo sollten Sie lokale LLM-Modelgewichte sicher herunterladen?',
        content: [
          '**Modellgewichte sind große Binärdateien.** Eine bösartige GGUF-Datei könnte Schwachstellen im von llama.cpp verwendeten Parser ausnutzen. Ab 2026 wurde keine weit verbreitete GGUF-basierte Malware bestätigt, aber die Angriffsfläche existiert.',
        ],
        items: [
          '**Hugging Face** (huggingface.co): die primäre Quelle für offene Modelle. Jede Datei hat einen verifizierten SHA256-Hash. Halten Sie sich an Modelle von bekannten Verlegern (Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba).',
          '**Ollama-Bibliothek** (ollama.com/library): Ollama verifiziert Modell-Hashes vor dem Speichern. über `ollama pull` abgerufene Modelle sind sicher.',
          '**LM Studio-Modellbrowser**: durchsucht Hugging Face direkt. Die gleichen Vertrauensregeln gelten -- überprüfen Sie das Verleger-Konto.',
          '**Vermeiden Sie**: anonyme Datei-Freigabe-Seiten, Discord-Datei-Drops und jede Quelle, die keinen verifizierbaren Hash bereitstellt.',
        ],
      },
      networkIsolation: {
        title: 'Wie Sie ausgehende Verbindungen von lokalen LLMs blockieren',
        content: '**Blockieren Sie ausgehende Verbindungen nach dem Modell-Download, um zu verhindern, dass das Inferenz-Tool nach Hause "telefoniert".** Unter macOS verwenden Sie `pf` Firewall; unter Linux verwenden Sie `ufw` oder OpenSnitch:',
        codeBlock: '# macOS -- Ollama ausgehend mit pf Firewall blockieren\n# Fügen Sie zu /etc/pf.conf hinzu:\nblock out proto tcp from any to any user ollama\n\n# Linux -- blockieren mit ufw\nsudo ufw deny out from any to any app ollama\n\n# Oder verwenden Sie Little Snitch (macOS) / OpenSnitch (Linux)\n# für anwendungsspezifische Netzwerkkontrolle mit GUI',
        codeLanguage: 'bash',
      },
      telemetry: {
        title: 'Wie Sie Telemetrie in lokalen LLM-Tools deaktivieren',
        rows: [
          { 'Tool': 'Ollama', 'Telemetrie Standard': 'Keine erfasst', 'Überprüfung': 'github.com/ollama/ollama -- kein Analytics-Code' },
          { 'Tool': 'LM Studio', 'Telemetrie Standard': 'Anonyme Analytics aktiviert', 'Deaktivieren': 'Einstellungen → Datenschutz → „Anonyme Nutzungsdaten senden" deaktivieren' },
          { 'Tool': 'Jan AI', 'Telemetrie Standard': 'Keine -- explizit deaktiviert', 'Überprüfung': 'Open Source -- überprüfen Sie github.com/janhq/jan' },
          { 'Tool': 'GPT4All', 'Telemetrie Standard': 'Nur Opt-in beim ersten Start', 'Ändern': 'Einstellungen → Datenschutz → Nutzungs-Analytics deaktivieren' },
        ],
        columns: ['Tool', 'Telemetrie Standard', 'Überprüfung/Deaktivieren'],
      },
      threatModel: {
        id: 'threat-model',
        title: 'Welches Threat Model sollten Sie annehmen?',
        content: [
          '**Gehen Sie davon aus, dass Ihre lokale LLM-Umgebung über Tools, Plugins oder Fehlkonfiguration Daten preisgeben kann. Behandeln Sie das Modell als nicht vertrauenswürdig und entwerfen Sie Ihre Infrastruktur so, dass selbst bei einer Kompromittierung des Modells sensible Daten nicht zugänglich oder übertragbar sind. Dies bedeutet Isolation des Inference-Tools vom Internet, Deaktivierung der Telemetrie und Einschränkung des Dateisystemzugriffs.**',
          'Sicherheit ist nicht nur Datenschutz — Prompt-Injection ist ein eigenständiger Angriffsvektor, bei dem schädliche Eingaben das Modellverhalten manipulieren. Injection-Abwehrtechniken, die für lokale und Cloud-Modelle gelten, finden Sie unter [Prompt-Injection und Sicherheit](https://www.promptquorum.com/prompt-engineering/prompt-injection-and-security?lang=de).',
        ],
      },
      faqSection: {
        title: 'Was sind häufige Sicherheitsfragen zu lokalen LLMs?',
        faqs: [
          {
            q: 'Kann ein lokales LLM auf meine Dateien oder das Internet zugreifen?',
            a: 'Nein -- das Modell selbst ist eine statische Datei, die Text generiert. Es hat keine Fähigkeit, Ihr Dateisystem zu lesen oder Netzwerkanfragen zu stellen. Das Inferenz-Tool, das das Modell ausführt (Ollama, LM Studio), hat jedoch normalen Betriebssystem-Zugriff. Einige Tools haben Funktionen, die Dateien lesen -- wie GPT4Alls LocalDocs oder LM Studios Datei-Anhang-Funktion. Diese Funktionen sind optional und ausdrücklich dokumentiert.',
          },
          {
            q: 'Ist es sicher, ein lokales LLM mit HIPAA-geschützten Daten zu verwenden?',
            a: 'Lokale Inferenz eliminiert das Risiko der Datenverarbeitung durch Dritte, das Cloud-APIs schaffen. HIPAA-Compliance erfordert jedoch mehr als private Inferenz -- Sie benötigen Vollverschlüsselung, Zugriffskontrolle, Audit-Logging und eine Datenverarbeitungsvereinbarung, falls ein Softwareanbieter auf geschützte Gesundheitsinformationen zugreifen könnte. Die Verwendung von Ollama mit aktiviertem FileVault und deaktivierter Telemetrie ist ein angemessener Startpunkt, aber formale HIPAA-Compliance erfordert eine vollständige Risikobewertung.',
          },
          {
            q: 'Sendet Ollama meine Prompts irgendwohin?',
            a: 'Nein. Ollama ist Open Source (github.com/ollama/ollama) und enthält keinen Telemetrie- oder Datenerfassungs-Code. Prompts werden lokal von llama.cpp verarbeitet und niemals übertragen. Die einzige ausgehende Netzwerkaktivität von Ollama sind Modell-Downloads von ollama.com, wenn Sie `ollama pull` ausführen.',
          },
          {
            q: 'Kann ich Ollama in einem Unternehmen mit BSI C5-Anforderungen einsetzen?',
            a: 'Ja, mit korrekter Konfiguration. Aktivieren Sie Vollverschlüsselung (AES-256) für die Systemfestplatte, deaktivieren Sie alle Telemetrie, blockieren Sie ausgehende Verbindungen mit einer Firewall und isolieren Sie das Gerät vom Internet. Dokumentieren Sie diese Konfiguration in Ihrer Datenschutz-Folgenabschätzung. Siehe Punkt 12 der Checkliste für air-gapped Umgebungen.',
          },
          {
            q: 'Wie überprüfe ich, dass LM Studio die Telemetrie wirklich deaktiviert hat?',
            a: 'Nutzen Sie ein Tool wie Wireshark oder Little Snitch, um den Netzwerkverkehr von LM Studio zu überwachen. Mit deaktivierter Telemetrie sollten Sie keine Verbindungen zu Analysediensten (mixpanel.com, sentry.io, etc.) sehen.',
          },
          {
            q: 'Sind SHA256-Hashes allein ausreichend, um GGUF-Dateien zu überprüfen?',
            a: 'SHA256-Hashes bestätigen, dass eine heruntergeladene Datei mit der erwarteten Datei übereinstimmt. Sie verhindern nicht, dass eine legitime Modelldatei bösartig ist. Für maximale Sicherheit: laden Sie nur von Hugging Face oder ollama.com herunter, überprüfen Sie, dass der Publisher-Account etabliert ist, und überprüfen Sie den Hash.',
          },
          {
            q: 'Kann ich ein lokales LLM für DSGVO-regulierte Daten verwenden?',
            a: 'Lokale Inferenz reduziert das DSGVO-Risiko erheblich, da Daten Ihre Infrastruktur nicht verlassen. Sie müssen jedoch immer noch überprüfen, dass das Inferenz-Tool (Ollama, LM Studio) Telemetrie deaktiviert hat, dass Festplattenverschlüsselung aktiviert ist und dass Zugriffskontrolle vorhanden ist. Für Artikel-35-DPIA-Anforderungen dokumentieren Sie Ihr Datenverarbeitungs-Setup und bestätigen Sie, dass keine personenbezogenen Daten Drittanbieter-Server durchlaufen.',
          },
          {
            q: 'Sendet LM Studio Daten an seine Server?',
            a: 'LM Studio erfasst standardmäßig anonyme Analytics (Sitzungszähler, verwendete Modellnamen, Leistungsmetriken). Es sendet keinen Prompt-Inhalt. Zum Deaktivieren von Analytics: Einstellungen → Datenschutz → „Anonyme Nutzungsdaten senden" deaktivieren. Modell-Inferenz und Chat-Protokolle bleiben lokal, unabhängig von dieser Einstellung.',
          },
        ],
      },
      sources: {
        title: 'Wo können Sie zusätzliche Quellen finden?',
        items: [
          '**OWASP Top 10 für LLM-Anwendungen** (owasp.org/www-project-top-10-for-large-language-model-applications/) -- Sicherheitsrisiken für LLM-Bereitstellungen einschließlich Prompt-Injection und Supply-Chain-Angriffen',
          '**Hugging Face Model Card Documentation** (huggingface.co/docs/hub/model-cards) -- Modellherkunftsstandards und SHA256-Hash-Verifizierung',
          '**VeraCrypt** (veracrypt.fr) -- Open-Source-Vollverschlüsselung und Ordnerverschlüsselung für Windows, macOS und Linux',
        ],
      },
      commonMistakes: {
        title: 'Was sind die häufigsten Fehler bei der Sicherheit lokaler LLMs?',
        content: '**Die meisten Sicherheitsfehler bei lokalen LLMs entstehen durch Konfigurationsoversights, nicht durch Modellschwachstellen.** Dies sind die fünf häufigsten Fehler und wie Sie sie beheben.',
        items: [
          '**Fehler:** Herunterladen von Modellen von Drittanbieter-Seiten (Discord, zufällige GitHub-Releases). **Lösung:** Verwenden Sie nur Hugging Face (huggingface.co) oder Ollama-Bibliothek. Verifizieren Sie mit `sha256sum`.',
          '**Fehler:** Annahme, dass lokale Inferenz = vollständiger Datenschutz. **Lösung:** Deaktivieren Sie LM Studio Analytics (Einstellungen → Datenschutz) und GPT4All Telemetrie. Führen Sie `netstat -an | grep 11434` aus, um unerwartete Ports zu bestätigen.',
          '**Fehler:** `OLLAMA_HOST=0.0.0.0` aktiv lassen nach Tests. **Lösung:** Zurücksetzen: `export OLLAMA_HOST=127.0.0.1:11434`. Test von anderen Geräten -- Verbindung sollte abgelehnt werden.',
          '**Fehler:** Festplattenverschlüsselung für HIPAA/DSGVO-Workloads überspringen. **Lösung:** Aktivieren Sie FileVault (macOS) oder BitLocker (Windows). Verschlüsseln Sie den LM Studio Chat-Log-Ordner separat.',
          '**Fehler:** Nicht überprüfbare Drittanbieter-Erweiterungen in Open WebUI oder Jan AI. **Lösung:** Überwachen Sie installierte Erweiterungen monatlich. Entfernen Sie alle, die Netzwerkzugriff anfordern, den Sie nicht erkennen.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Was sind die regionalen Compliance-Überlegungen?',
        content: '**Lokale LLM-Inferenz reduziert Datenresidenz-Risiken, aber vollständige behördliche Compliance erfordert zusätzliche regionale Kontrollen.**',
        items: [
          '**EU / DSGVO (2018):** Lokale Inferenz eliminiert die Artikel-28-Verpflichtung des Datenverarbeiters für den Modellanbieter. Sie müssen dennoch LM Studio Analytics deaktivieren, Festplattenverschlüsselung aktivieren und Ihr Datenverarbeitungs-Setup für jede DPIA dokumentieren. Führen Sie eine Interessenabwägung vor der Verarbeitung personenbezogener Daten durch.',
          '**Vereinigte Staaten / HIPAA:** HIPAA verlangt Schutzmaßnahmen für PHI: Vollverschlüsselung der Festplatte (das "Verschlüsselungs-Safe Harbor"), Zugriffskontrolle und Audit-Logging. Ollama mit aktiviertem FileVault und deaktivierter Telemetrie ist ein angemessener HIPAA-Ausgangspunkt. Formale Compliance erfordert eine vollständige Risikobewertung.',
          '**Japan / APPI (2022):** Das Gesetz zum Schutz personenbezogener Informationen verlangt den Schutz personenbezogener Daten während der Verarbeitung. Lokale Inferenz auf einem isolierten oder offline-Gerät erfüllt die Datenlokalisierungsanforderung. Deaktivieren Sie Ollama-Updates und LM Studio Analytics für APPI-Compliance.',
          '**China / PIPL (2021):** Das Betreiben eines lokalen LLM für interne Nutzung erfordert keine CAC-Registrierung. Falls Sie ein lokales LLM als öffentlich zugänglichen Service in China bereitstellen, ist eine CAC-Algorithmus-Registrierung erforderlich.',
        ],
      },
      relatedReading: {
        title: 'Was sollten Sie noch lesen?',
        items: [
          '[Was sind lokale LLMs?](/local-llms/what-are-local-llms?lang=de) -- Kernkonzepte und -komponenten',
          '[Lokale LLMs vs. Cloud-APIs](/local-llms/local-llms-vs-cloud-apis?lang=de) -- Datenschutz-Kompromisse',
          '[Wie man Ollama installiert](/local-llms/how-to-install-ollama?lang=de) -- Installation und Setup',
          '[Wie man lokale LLMs auf einem Laptop ausführt](/local-llms/local-llm-on-laptop?lang=de) -- Sichere Laptop-Konfiguration',
          '[Lokale LLM One-Click-Installer](/local-llms/local-llm-one-click-installers?lang=de) -- Vergleich von LM Studio, Ollama, Jan AI und GPT4All für Datenschutz und Benutzerfreundlichkeit',
          '[Troubleshooting Local LLM Setup](/local-llms/troubleshooting-local-llm-setup?lang=de) -- Häufige Fehler beheben, einschließlich Port 11434 verweigert und GPU nicht erkannt',
          '[Lokale KI hinter Firewall / Offline (2026)](/power-local-llm/local-ai-behind-firewall-offline-2026?lang=de) -- Ollama air-gap: Netzwerkisolierung, Audit-Logging und kein-Internet-Setup.',
          '[Bestes VPN für KI-Entwicklung in China (2026)](/prompt-bites/best-vpn-for-ai-development-china-2026?lang=de) -- Zugriff auf Hugging Face, GitHub und Modell-Registries hinter der Firewall.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/local-llms/local-llm-security-privacy-checklist?lang=de',
      'inLanguage': 'de',
      'headline': 'Checkliste für Sicherheit und Datenschutz bei lokalen LLMs: 12 Schritte zu einem sicheren Setup',
      'description': '12-Schritte-Sicherheitscheckliste für lokale LLMs: Telemetrie, Checksummen, Port 11434, Festplattenverschlüsselung. DSGVO und HIPAA inklusive. April 2026.',
      'datePublished': '2026-04-04',
      'dateModified': '2026-04-18',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and IT professionals running local LLMs' },
      'keywords': 'lokale LLM Sicherheit, Datenschutz, DSGVO, Checkliste, Verschlüsselung, Ollama',
    },
  },

  fr: {
    theme: 'Getting Started',
    title: 'Liste de Contrôle Sécurité et Confidentialité des LLM Locaux : 12 Étapes pour une Configuration Sûre',
    seoTitle: 'Liste de Contrôle Sécurité & Confidentialité LLM Locaux',
    intro: 'Un LLM local garde vos invites hors des serveurs externes, mais ne sécurise pas automatiquement votre configuration. Des risques comme la télémétrie, les fichiers modèles non approuvés et les APIs exposées peuvent encore fuir des données. Cette checklist montre exactement comment sécuriser un LLM local en moins de 10 minutes.',
    metaDescription: 'Liste de contrôle en 12 étapes pour sécuriser un LLM local : télémétrie, checksums, port 11434, chiffrement disque. RGPD et HIPAA inclus. Avril 2026.',
    twitterDescription: 'Liste 12 étapes sécurité LLM local : télémétrie, checksums, port 11434, chiffrement disque. RGPD et HIPAA.',
    publishDate: '2026-04-04',
    dateModified: '2026-04-18',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'confidentialité LLM local',
    toc: [
      { label: 'Points Clés', anchor: '#key-takeaways' },
      { label: 'Pourquoi les LLM Locaux Ne Sont Pas Automatiquement Privés', anchor: '#why-not-automatically-private' },
      { label: 'Liste de Contrôle de Sécurité en 12 Points', anchor: '#the-12-item-checklist' },
      { label: 'Provenance du Modèle : Téléchargements Sécurisés', anchor: '#model-provenance' },
      { label: 'Isolation Réseau : Bloquer les Connexions Sortantes', anchor: '#network-isolation' },
      { label: 'Paramètres de Télémétrie par Outil', anchor: '#telemetry-settings' },
      { label: 'Modèle de Menace', anchor: '#threat-model' },
      { label: 'Questions Courantes', anchor: '#common-questions' },
    ],
    sections: {
      areLLMsSecure: {
        id: 'are-llms-private-and-secure',
        title: 'Les LLM locaux sont-ils privés et sécurisés ?',
        content: 'Les LLM locaux sont privés par défaut parce que les invites restent sur votre appareil, mais ils ne sont pas automatiquement sécurisés. Les risques principaux sont la télémétrie des outils, les fichiers de modèles non fiables et l\'exposition du réseau. Une configuration sécurisée nécessite la désactivation de la télémétrie, la vérification des sources de modèles et l\'isolation du système de l\'accès externe.',
      },
      tldr: {
        id: 'key-takeaways',
        title: 'Quels sont les points clés ?',
        isTldr: true,
        items: [
          'L\'inférence locale garde les données d\'invites hors des serveurs tiers. Les risques subsistants : télémétrie de l\'outil, fichiers de modèles non fiables, API Ollama exposée au réseau.',
          'Ollama se lie à localhost par défaut -- inaccessible depuis d\'autres appareils sauf si vous définissez OLLAMA_HOST=0.0.0.0.',
          'Désactivez l\'analytique : LM Studio (Paramètres → Confidentialité → dé-cocher « Envoyer les données d\'utilisation ») et GPT4All (Paramètres → désactiver télémétrie).',
          'Téléchargez les poids uniquement de Hugging Face (huggingface.co) ou Ollama library. Vérifiez les empreintes SHA256 pour les déploiements sensibles.',
          'Données régulées (RGPD, confidentialité légale) : chiffrement complet du disque, machine isolée, audit des extensions.',
        ],
      },
      whyNotAutoPrivate: {
        title: 'Pourquoi les LLM Locaux Ne Sont Pas Automatiquement Privés ?',
        content: [
          '**L\'inférence du modèle est privée -- vos invites ne partent jamais aux serveurs du fournisseur.** Trois autres flux de données risquent des fuites :',
        ],
        items: [
          '**Télémétrie applicative** : LM Studio, GPT4All collectent par défaut des analyses d\'utilisation anonymes, incluant comptages de sessions et métriques de performance.',
          '**Sources de téléchargement** : fichiers GGUF malveillants exploitent des failles dans llama.cpp. Fichier non vérifié = risque de chaîne d\'approvisionnement.',
          '**Exposition réseau** : serveur Ollama accessible à tout processus. Mal configuré avec `OLLAMA_HOST=0.0.0.0`, il devient accessible à tout le réseau sans authentification.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Les LLM locaux sont-ils plus sûrs que les API cloud ?',
        content: 'Les LLM locaux sont plus sûrs pour la confidentialité car les données restent sur votre appareil, tandis que les API cloud envoient les invites à des serveurs externes. Cependant, les configurations locales nécessitent une configuration de sécurité manuelle, tandis que les fournisseurs cloud gèrent la sécurité de l\'infrastructure. Le vrai compromis est l\'autonomie de la confidentialité par rapport à la sécurité déléguée.',
      },
      misconceptions: {
        id: 'common-misconceptions',
        title: 'Quels sont les idées fausses courantes sur la sécurité des LLM locaux ?',
        items: [
          '"Les LLM locaux sont automatiquement sûrs" → faux, la configuration est primordiale',
          '"Pas d\'Internet = pas de risque" → faux, les fichiers malveillants et les plugins s\'appliquent toujours',
          '"Open source = sûr" → faux, le code doit toujours être vérifié',
        ],
      },
      risks: {
        id: 'security-risks',
        title: 'Quels sont les plus grands risques de sécurité des LLM locaux ?',
        items: [
          '**Fuites de télémétrie** → des outils comme LM Studio peuvent envoyer des données d\'utilisation',
          '**Fichiers de modèles malveillants** → les fichiers GGUF non vérifiés peuvent introduire des risques',
          '**Exposition réseau** → des API comme Ollama peuvent être exposées si mal configurées',
        ],
      },
      quickChecklist: {
        id: 'quick-checklist',
        title: 'Que faut-il faire dans les 5 premières minutes ?',
        numberedItems: [
          'Désactiver la télémétrie dans votre outil',
          'Télécharger les modèles uniquement depuis Hugging Face ou Ollama',
          'Assurer que l\'API est liée à localhost uniquement',
          'Activer le chiffrement complet du disque',
          'Ne pas exposer les ports sur Internet',
        ],
      },
      checklist: {
        title: 'Quels sont les 12 étapes de sécurité ?',
        numberedItems: [
          { title: 'Téléchargez depuis sources fiables', whyItMatters: 'Évite les fichiers de modèles malveillants provenant de sources non vérifiées.' },
          { title: 'Vérifiez les empreintes pour opérations sensibles', whyItMatters: 'Garantit que les fichiers modèles téléchargés n\'ont pas été modifiés.' },
          { title: 'Désactivez télémétrie', whyItMatters: 'Empêche la collecte et l\'envoi de données d\'utilisation.' },
          { title: 'Confirmez Ollama sur localhost', whyItMatters: 'Empêche l\'API d\'être exposée aux autres appareils du réseau.' },
          { title: 'Activez chiffrement complet disque', whyItMatters: 'Protège les poids et historiques en cas de perte ou vol de l\'appareil.' },
          { title: 'Stockez logs sensibles chiffrés', whyItMatters: 'Protège l\'historique des conversations contenant des données sensibles.' },
          { title: 'Auditez extensions', whyItMatters: 'Prévient les extensions tierces malveillantes d\'accéder au réseau.' },
          { title: 'Compte utilisateur dédié', whyItMatters: 'Isole les fichiers, historique et clés API du profil principal.' },
          { title: 'Ne pas exposer l\'API localement', whyItMatters: 'Prévient l\'accès non autorisé à distance à votre moteur d\'inférence.' },
          { title: 'Auditez les system prompts', whyItMatters: 'Prévient l\'exfiltration de données via les extensions ou outils intégrés.' },
          { title: 'Maintenez à jour', whyItMatters: 'Corrige les failles de sécurité connues dans Ollama, LM Studio et outils associés.' },
          { title: 'Environnements air-gapped : documentez les versions approuvées', whyItMatters: 'Assure la conformité aux exigences réglementaires pour les données sensibles.' },
        ],
      },
      modelProvenance: {
        title: 'Où télécharger les poids de modèles de manière fiable ?',
        content: [
          '**Poids de modèles : fichiers binaires volumineux.** GGUF malveillant exploite failles llama.cpp. 2026 : pas de malware GGUF confirmé, mais surface d\'attaque existe.',
        ],
        items: [
          '**Hugging Face** (huggingface.co) : source primaire. Hash SHA256 vérifié. Préférez éditeurs établis (Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba).',
          '**Ollama library** (ollama.com/library) : Ollama vérifie hashes. Modèles via `ollama pull` sûrs.',
          '**LM Studio browser** : recherche Hugging Face directement. Mêmes règles -- vérifiez compte éditeur.',
          '**Évitez** : partage anon, Discord drops, sources sans hash vérifiable.',
        ],
      },
      networkIsolation: {
        title: 'Comment Bloquer les Connexions Sortantes',
        content: 'Confidentialité maximale : règle firewall pour isoler l\'outil après téléchargement du modèle :',
        codeBlock: '# macOS -- bloquer Ollama avec pf firewall\n# Ajouter à /etc/pf.conf :\nblock out proto tcp from any to any user ollama\n\n# Linux -- bloquer avec ufw\nsudo ufw deny out from any to any app ollama\n\n# Ou utiliser Little Snitch (macOS) / OpenSnitch (Linux)\n# pour contrôle par application avec interface',
        codeLanguage: 'bash',
      },
      telemetry: {
        title: 'Comment Désactiver la Télémétrie',
        rows: [
          { 'Outil': 'Ollama', 'Télémétrie Défaut': 'Aucune', 'Vérification': 'github.com/ollama/ollama -- pas de code analytics' },
          { 'Outil': 'LM Studio', 'Télémétrie Défaut': 'Analytics anon activée', 'Désactiver': 'Paramètres → Confidentialité → décocher « Données d\'utilisation »' },
          { 'Outil': 'Jan AI', 'Télémétrie Défaut': 'Aucune -- explicitement désactivée', 'Vérification': 'Open source -- auditez github.com/janhq/jan' },
          { 'Outil': 'GPT4All', 'Télémétrie Défaut': 'Opt-in au premier lancement', 'Modifier': 'Paramètres → Confidentialité → désactiver analytics' },
        ],
        columns: ['Outil', 'Télémétrie Défaut', 'Vérification/Désactiver'],
      },
      threatModel: {
        id: 'threat-model',
        title: 'Quel modèle de menace devez-vous supposer ?',
        content: [
          '**Supposez que votre environnement LLM local peut fuir des données par le biais d\'outils, de plugins ou d\'erreurs de configuration. Traitez le modèle comme non approuvé — concevez votre configuration de sorte que même si le modèle est compromis, les données sensibles ne puissent pas être accessibles ou transmises. Cela signifie isoler l\'outil d\'inférence d\'Internet, désactiver la télémétrie et limiter l\'accès au système de fichiers.**',
          'La sécurité ne se limite pas à la confidentialité des données — l\'injection de prompts est un vecteur d\'attaque distinct où des entrées malveillantes manipulent le comportement du modèle. Pour les techniques de défense contre les injections applicables aux modèles locaux et cloud, consultez [injection de prompts et sécurité](https://www.promptquorum.com/prompt-engineering/prompt-injection-and-security?lang=fr).',
        ],
      },
      faqSection: {
        title: 'Quelles sont les questions courantes sur la sécurité ?',
        faqs: [
          {
            q: 'Un LLM local peut-il accéder à mes fichiers ou Internet ?',
            a: 'Non -- le modèle est fichier statique générant du texte. Accès fichiers/réseau impossible sauf si l\'outil l\'offre explicitement (GPT4All LocalDocs, attachements LM Studio).',
          },
          {
            q: 'Est-ce sûr avec données régulées (RGPD, santé) ?',
            a: 'Inférence locale supprime le risque tiers. Mais conformité requiert chiffrement complet, logs d\'audit, contrôles accès. Inférence locale est point de départ, audit complet nécessaire.',
          },
          {
            q: 'Ollama envoie-t-il mes invites quelque part ?',
            a: 'Non. Ollama open source (github.com/ollama/ollama), pas de code télémétrie. Invites traités localement par llama.cpp. Seule activité sortante : téléchargements modèles ollama.com.',
          },
        ],
      },
      sources: {
        title: 'Où trouver des sources additionnelles ?',
        items: [
          '**OWASP Top 10 pour IA** -- Considérations sécurité déploiement',
          '**Spécifications Hugging Face Model Card** -- Standards provenance et licensing',
          '**VeraCrypt Chiffrement Disque** -- Outil chiffrement complet open-source',
        ],
      },
      commonMistakes: {
        title: 'Erreurs Courantes en Sécurité LLM Local',
        items: [
          'Télécharger depuis sources non fiables sans vérifier checksums ou provenance.',
          'Supposer confidentialité automatique -- vérifiez télémétrie, updates, sync dans votre outil.',
          'Ne pas isoler LLMs du réseau -- invites malveillantes exploitent pour exfiltrer.',
        ],
      },
      relatedReading: {
        title: 'Lectures Connexes',
        items: [
          '[Que Sont les LLM Locaux ?](/local-llms/what-are-local-llms?lang=fr) -- Concepts fondamentaux',
          '[LLM Locaux vs APIs Cloud](/local-llms/local-llms-vs-cloud-apis?lang=fr) -- Compromis confidentialité',
          '[Comment Installer Ollama](/local-llms/how-to-install-ollama?lang=fr) -- Installation et setup',
          '[Exécuter LLM Locaux sur Laptop](/local-llms/local-llm-on-laptop?lang=fr) -- Configuration laptop sûre',
          '[IA locale derrière pare-feu / hors ligne (2026)](/power-local-llm/local-ai-behind-firewall-offline-2026?lang=fr) -- Ollama en air-gap : isolation réseau, journaux d\'audit et configuration sans internet.',
          '[Meilleur VPN pour le développement IA en Chine (2026)](/prompt-bites/best-vpn-for-ai-development-china-2026?lang=fr) -- Accès à Hugging Face, GitHub et registres de modèles depuis derrière le pare-feu.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/local-llms/local-llm-security-privacy-checklist?lang=fr',
      'inLanguage': 'fr',
      'headline': 'Liste de Contrôle Sécurité et Confidentialité des LLM Locaux : 12 Étapes pour une Configuration Sûre',
      'description': 'Liste de contrôle en 12 étapes pour sécuriser un LLM local : télémétrie, checksums, port 11434, chiffrement disque. RGPD et HIPAA inclus. Avril 2026.',
      'datePublished': '2026-04-04',
      'dateModified': '2026-04-18',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and IT professionals running local LLMs' },
      'keywords': 'sécurité LLM local, confidentialité, RGPD, chiffrement, Ollama',
    },
  },

  ja: {
    theme: 'Getting Started',
    title: 'ローカルLLMセキュリティ&プライバシーチェックリスト：12ステップで安全なセットアップを実現',
    seoTitle: 'ローカルLLMセキュリティ＆プライバシー：安全設定12ステップ2026年版',
    intro: 'ローカルLLMを実行するとプロンプトは外部サーバーから遠ざかりますが、セットアップが自動的に安全になるわけではありません。テレメトリ、信頼できないモデルファイル、露出したAPIなどのリスクはデータを漏洩させる可能性があります。このチェックリストは、10分以下でローカルLLMを安全にする方法を正確に示しています。',
    metaDescription: 'ローカルLLMを安全に設定する12ステップ：テレメトリ無効化、チェックサム確認、ポート11434の分離、ディスク暗号化。GDPRとHIPAAにも対応。2026年4月更新。',
    twitterDescription: 'ローカルLLM安全12ステップ：テレメトリ無効化・チェックサム確認・ポート11434分離・ディスク暗号化。GDPRとHIPAA対応。',
    publishDate: '2026-04-04',
    dateModified: '2026-04-18',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'ローカルLLM プライバシー',
    toc: [
      { label: '重要なポイント', anchor: '#key-takeaways' },
      { label: 'ローカルLLMが自動的にプライベートでない理由', anchor: '#why-not-automatically-private' },
      { label: '12項目のセキュリティチェックリスト', anchor: '#the-12-item-checklist' },
      { label: 'モデル出所：安全なダウンロード方法', anchor: '#model-provenance' },
      { label: 'ネットワーク分離：アウトバウンド接続をブロック', anchor: '#network-isolation' },
      { label: 'ツール別テレメトリ設定', anchor: '#telemetry-settings' },
      { label: '脅威モデル', anchor: '#threat-model' },
      { label: 'よくある質問', anchor: '#common-questions' },
    ],
    sections: {
      areLLMsSecure: {
        id: 'are-llms-private-and-secure',
        title: 'ローカルLLMはプライベートで安全ですか？',
        content: 'ローカルLLMはプロンプトがデバイスに留まるため、デフォルトではプライベートですが、自動的に安全とは限りません。主なリスクはツールからのテレメトリ、信頼できないモデルファイル、およびネットワーク露出です。セキュアなセットアップには、テレメトリの無効化、モデルソースの検証、およびシステムの外部アクセスからの隔離が必要です。',
      },
      tldr: {
        id: 'key-takeaways',

        isTldr: true,
        items: [
          'ローカル推論はプロンプトデータをサードパーティサーバーから遠ざけます。残りのリスク：推論ツールのテレメトリ、信頼できないモデルファイル、ネットワークに公開されたOllama API。',
          'Ollamaはデフォルトでlocalhostにバインドされます。明示的にOLLAMA_HOST=0.0.0.0を設定しない限り、他のデバイスからはアクセスできません。',
          'テレメトリを無効化：LM Studio（設定 → プライバシー → 「匿名データ送信」をオフ）およびGPT4All（設定 → テレメトリをオフ）',
          'モデルウェイトはHugging Face（huggingface.co）またはOllama公式ライブラリからのみダウンロードしてください。本番環境ではSHA256チェックサムを確認してください。',
          '規制対象データ（HIPAA、GDPR、法的特権）：ディスク全体暗号化を有効にし、ネットワーク分離されたマシンを使用し、すべてのインストール拡張機能を監査します。',
        ],
      },
      whyNotAutoPrivate: {
        title: 'ローカルLLMが自動的にプライベートでない理由',
        content: [
          '**モデル推論自体はプライベートです。** プロンプトはモデルプロバイダーのサーバーに送信されません。しかし、他の3つのデータフローが情報漏洩を引き起こす可能性があります：',
        ],
        items: [
          '**アプリケーションテレメトリ**：LM Studio、GPT4Allおよびその他のツールはデフォルトで匿名の使用分析を収集します。セッション数、使用されたモデル名、パフォーマンスメトリクスが含まれる場合があります。',
          '**モデルダウンロード出所**：悪意のあるGGUFファイルは、llama.cppの脆弱な推論エンジン内でモデル読み込み時に実行されるコードを含む可能性があります。未検証のモデルファイルはサプライチェーンリスクです。',
          '**ネットワーク公開**：OllamaのAPIサーバーはマシン上のすべてのプロセスからアクセス可能です。`OLLAMA_HOST=0.0.0.0`で不適切に設定されると、認証なしにネットワーク全体からアクセス可能になります。',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'ローカルLLMはクラウドAPIより安全ですか？',
        content: 'ローカルLLMはデータがデバイスに留まるため、プライバシーの観点ではより安全です。一方、クラウドAPIはプロンプトを外部サーバーに送信します。ただし、ローカルセットアップは手動のセキュリティ設定が必要で、クラウドプロバイダーはインフラストラクチャセキュリティを処理します。実際のトレードオフはプライバシー自主性対委任セキュリティです。',
      },
      misconceptions: {
        id: 'common-misconceptions',
        title: 'ローカルLLMセキュリティに関する一般的な誤解は何ですか？',
        items: [
          '"ローカルLLMは自動的に安全です" → 誤り、設定が最も重要',
          '"インターネットなし=リスクなし" → 誤り、悪意のあるファイルとプラグインが適用される',
          '"オープンソース=安全" → 誤り、コードは検証が必要',
        ],
      },
      risks: {
        id: 'security-risks',
        title: 'ローカルLLMの最大のセキュリティリスクは何ですか？',
        items: [
          '**テレメトリ漏洩** → LM Studioなどのツールは使用データを送信する可能性があります',
          '**悪意のあるモデルファイル** → 未検証のGGUFファイルはリスクをもたらす可能性があります',
          '**ネットワーク公開** → OllamaなどのAPIは誤設定された場合に公開される可能性があります',
        ],
      },
      quickChecklist: {
        id: 'quick-checklist',
        title: '簡易セキュリティチェックリスト（5分設定）',
        numberedItems: [
          'ツールのテレメトリを無効にする',
          'HuggingFaceまたはOllamaからのみモデルをダウンロード',
          'APIがlocalhostのみにバインドされていることを確認',
          'ディスク全体の暗号化を有効にする',
          'ポートをインターネットに公開しない',
        ],
      },
      checklist: {
        title: 'ローカルLLMセキュリティチェックリストに何が含まれていますか？',
        content: '**機密データまたは規制対象データで作業する前に、以下の各項目を確認してください。** このチェックリストは、Ollama、LM Studio、Jan AI、GPT4Allセットアップにおけるプライバシーとセキュリティの最も一般的なギャップをカバーしています。',
        numberedItems: [
          { title: '信頼できるソースからのみモデルをダウンロード', whyItMatters: '信頼できない出所からの悪意のあるモデルファイルを防止します。' },
          { title: 'センシティブ用途ではモデルチェックサムを確認', whyItMatters: 'ダウンロードされたモデルファイルが改ざんされていないことを保証します。' },
          { title: '推論ツールのテレメトリを無効化', whyItMatters: '使用データおよびセッション情報の収集を防止します。' },
          { title: 'Ollamaがlocalhostのみにバインドされていることを確認', whyItMatters: 'APIがネットワーク上の他のデバイスに公開されるのを防止します。' },
          { title: 'ディスク全体暗号化を有効化', whyItMatters: 'デバイス紛失時にモデルウェイトとチャットログを保護します。' },
          { title: 'センシティブなチャットログを暗号化フォルダに保存', whyItMatters: '機密データを含む会話履歴を保護します。' },
          { title: 'インストール済み拡張機能とプラグインを確認', whyItMatters: '悪意のあるサードパーティ拡張機能がネットワークアクセスするのを防止します。' },
          { title: 'LLM作業用に専用ユーザーアカウントを使用', whyItMatters: 'モデルファイル、チャット履歴、APIキーをメインプロフィールから分離します。' },
          { title: 'ローカルAPIをインターネットに公開しない', whyItMatters: '推論エンジンへの権限のない遠隔アクセスを防止します。' },
          { title: 'ローカルLLMを使用するアプリケーションのシステムプロンプトを監査', whyItMatters: 'ブラウザ拡張機能またはツール統合を通じたデータ漏洩を防止します。' },
          { title: '推論ツールを最新の状態に保つ', whyItMatters: 'Ollama、LM Studio、および関連ツールの既知のセキュリティ脆弱性を修正します。' },
          { title: 'ネットワーク分離環境：承認されたモデルバージョンを文書化', whyItMatters: 'データ処理および基盤構造分離の規制要件への準拠を確保します。' },
        ],
      },
      jikkoTips: {
        title: '注意点と実践的なセキュリティ設定のおすすめ',
        content: '以下の実装を行うことで、セキュリティをさらに強化できます：',
        items: [
          '**ファイアウォール設定の確認**：マシンの既存ファイアウォール設定を確認し、Ollamaがlocalhostのみにバインドされていることを検証してください。',
          '**定期的なセキュリティ監査**：月に1回は、インストール済みツール、アクティブな接続、システムログを確認してください。',
          '**バックアップとリカバリー計画**：暗号化されたモデルファイルとチャットログの定期バックアップを別の暗号化ドライブに保存してください。',
          '**アップデート管理**：自動更新を可能な限り手動に変更し、各更新前に変更ログを確認してください。',
          '**ネットワークモニタリング**：Wiresharkのようなツールを定期的に使用して、予期しないネットワーク接続がないことを確認してください。',
        ],
      },
      modelProvenance: {
        title: 'ローカルLLMモデルウェイトの安全なダウンロード場所',
        content: 'モデルウェイトは大きなバイナリファイルです。悪意のあるGGUFファイルはllama.cppで使用されるパーサーの脆弱性を悪用する可能性があります。2026年現在、広く確認されたGGUFベースのマルウェアはありませんが、攻撃面は存在します。',
        items: [
          '**Hugging Face**（huggingface.co）：オープンモデルの主要ソース。各ファイルは検証されたSHA256ハッシュを持ちます。Meta、Google、Microsoft、Mistral AI、Qwen/Alibabaなどの著名なパブリッシャーのモデルに固執してください。',
          '**Ollamaライブラリ**（ollama.com/library）：Ollamaは保存前にモデルハッシュを検証します。`ollama pull`でプルされたモデルは安全です。',
          '**LM Studioモデルブラウザ**：Hugging Faceを直接検索します。同じ信頼ルールが適用されます。パブリッシャーアカウントを確認してください。',
          '**回避**：匿名ファイル共有サイト、Discordファイルドロップ、検証可能なハッシュを提供していないソース。',
        ],
      },
      networkIsolation: {
        title: 'ローカルLLMからのアウトバウンド接続をブロックする方法',
        content: '**モデルダウンロード後の推論ツール「電話がかかる」のを防ぐため、アウトバウンド接続をブロックしてください。** macOSでは`pf`ファイアウォールを使用。Linuxでは`ufw`またはOpenSnitch：',
        codeBlock: '# macOS -- pfファイアウォールでOllamaのアウトバウンドをブロック\n# /etc/pf.confに追加：\nblock out proto tcp from any to any user ollama\n\n# Linux -- ufwでブロック\nsudo ufw deny out from any to any app ollama\n\n# またはLittle Snitch（macOS）/OpenSnitch（Linux）を使用\n# GUIで単位プリケーションごとのネットワーク制御が可能',
        codeLanguage: 'bash',
      },
      telemetry: {
        title: 'ローカルLLMツールでテレメトリを無効化する方法',
        rows: [
          { 'ツール': 'Ollama', 'テレメトリデフォルト': 'なし', '確認方法': 'github.com/ollama/ollama -- アナリティクスコードなし' },
          { 'ツール': 'LM Studio', 'テレメトリデフォルト': '匿名アナリティクス有効', '無効化方法': '設定 → プライバシー → 「匿名使用データを送信」のチェックを外す' },
          { 'ツール': 'Jan AI', 'テレメトリデフォルト': 'なし--明示的に無効', '確認方法': 'オープンソース -- github.com/janhq/janを監査' },
          { 'ツール': 'GPT4All', 'テレメトリデフォルト': '初回起動時のオプトインのみ', '変更方法': '設定 → プライバシー → 使用分析を無効化' },
        ],
        columns: ['ツール', 'テレメトリデフォルト', '確認/無効化方法'],
      },
      threatModel: {
        id: 'threat-model',
        title: 'どのような脅威モデルを想定すべきですか？',
        content: [
          '**ローカルLLM環境は、ツール、プラグイン、または設定ミスによってデータが漏洩する可能性があると想定してください。モデルを信頼できないものとして扱い、モデルが侵害された場合でも機密データにアクセスまたは転送できないように設定を設計してください。これはインファレンスツールをインターネットから隔離し、テレメトリを無効化し、ファイルシステムアクセスを制限することを意味します。**',
          'セキュリティはデータプライバシーだけに限りません——プロンプトインジェクションは悪意のある入力がモデルの動作を操作する独立した攻撃ベクトルです。ローカルモデルとクラウドモデルの両方に適用される注入防御技術については、[プロンプトインジェクションとセキュリティ](https://www.promptquorum.com/prompt-engineering/prompt-injection-and-security?lang=ja)をご覧ください。',
        ],
      },
      faqSection: {
        title: 'ローカルLLMについてのよくあるセキュリティ質問',
        faqs: [
          {
            q: 'ローカルLLMはファイルやインターネットにアクセスできますか？',
            a: 'いいえ。モデル自体はテキストを生成する静的ファイルです。ファイルシステムを読み込むまたはネットワークリクエストを行う機能はありません。ただし、モデルを実行する推論ツール（Ollama、LM Studio）は通常のOS レベルアクセスを持ちます。GPT4AllのLocalDocsやLM Studioのファイル添付機能など、ファイルを読み込む機能を含むツールもあります。これらの機能はオプトインで、明示的に文書化されています。',
          },
          {
            q: 'HIPAA対象データでローカルLLMを使用しても安全ですか？',
            a: 'ローカル推論はクラウドAPIが引き起こすサードパーティデータプロセッサーリスクを排除します。ただし、HIPAA準拠には、プライベート推論以上のものが必要です。完全なディスク暗号化、アクセス制御、監査ログ、およびソフトウェアベンダーがPHI（保護された健康情報）にアクセスする可能性がある場合の業務提携契約が必要です。FileVaultを有効にしてテレメトリを無効にしたOllamaの使用は合理的な出発点ですが、正式なHIPAA準拠には完全なリスク評価が必要です。',
          },
          {
            q: 'Ollamaはプロンプトをどこか別の場所に送信しますか？',
            a: 'いいえ。Ollamaはオープンソース（github.com/ollama/ollama）で、テレメトリまたはデータ収集コードは含まれていません。プロンプトはllama.cppで局所的に処理され、送信されることはありません。Ollamaからのアウトバウンドネットワークアクティビティはollama.comからのモデルダウンロード（`ollama pull`を実行する場合）のみです。',
          },
        ],
      },
      sources: {
        title: 'ソース',
        items: [
          '**OWASP AI トップ10** -- モデル展開に関するセキュリティ考慮事項',
          '**Hugging Face Model Card仕様** -- モデル出所およびライセンス基準',
          '**VeraCrypt ディスク暗号化** -- オープンソースの完全ディスク暗号化ツール',
        ],
      },
      commonMistakes: {
        title: 'ローカルLLMセキュリティの一般的な誤解',
        items: [
          'チェックサムまたはモデル出所を確認せずに信頼できないソースからモデルをダウンロードすること。',
          'プライバシーが自動的なものと仮定すること。選択したツールでテレメトリ、アップデートチェック、または同期機能を確認してください。',
          'ローカルLLMをネットワークから分離しないこと。悪意のあるプロンプトはモデルを悪用してデータを横領する可能性があります。',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '地域別コンプライアンスの考慮事項',
        content: '**ローカルLLM推論はデータレジデンシーリスクを削減しますが、完全な規制コンプライアンスには地域ごとに追加のコントロールが必要です。**',
        items: [
          '**EU / GDPR（2018）：** ローカル推論はモデルプロバイダーに対するArticle 28データプロセッサー義務を排除します。LM Studio Analyticsを無効にし、ディスク暗号化を有効にし、すべてのDPIA用にデータ処理セットアップを文書化する必要があります。個人データを処理する前に正当な利益評価を実施してください。',
          '**アメリカ合衆国 / HIPAA：** HIPAAはPHIの保護を要求します：フルディスク暗号化（「暗号化安全港」）、アクセスコントロール、監査ログ。FileVaultを有効にしてテレメトリを無効にしたOllamaはHIPAA準拠の合理的な出発点です。正式なコンプライアンスには完全なリスク評価が必要です。',
          '**日本 / APPI（2022）：** 個人情報保護法は処理中の個人データ保護を要求します。ネットワーク分離されたマシン上のローカル推論はデータローカライゼーション要件を満たします。APPI準拠のためにOllamaアップデートチェックとLM Studio分析を無効にしてください。',
          '**中国 / PIPL（2021）：** 内部用にローカルLLMを実行する場合、CAC登録は不要です。中国でローカルLLMを公開向けサービスとしてデプロイする場合、CACアルゴリズム登録が必要です。',
        ],
      },
      relatedReading: {
        title: '関連する読み物',
        items: [
          '[ローカルLLMとは？](/local-llms/what-are-local-llms?lang=ja) -- コア概念とコンポーネント',
          '[ローカルLLMとクラウドAPI](/local-llms/local-llms-vs-cloud-apis?lang=ja) -- プライバシー上の考慮事項',
          '[Ollamaをインストールする方法](/local-llms/how-to-install-ollama?lang=ja) -- インストールとセットアップ',
          '[ラップトップでローカルLLMを実行する](/local-llms/local-llm-on-laptop?lang=ja) -- セキュアなラップトップ構成',
          '[ローカルLLMワンクリックインストーラー](/local-llms/local-llm-one-click-installers?lang=ja) -- LM Studio、Ollama、Jan AI、GPT4Allのプライバシーと使いやすさの比較',
          '[ローカルLLMセットアップのトラブルシューティング](/local-llms/troubleshooting-local-llm-setup?lang=ja) -- ポート11434拒否とGPU未検出などの一般的なエラーを修正',
          '[ファイアウォール内/オフラインのローカルAI (2026)](/power-local-llm/local-ai-behind-firewall-offline-2026?lang=ja) -- Ollamaエアギャップ：ネットワーク隔離、監査ログ、インターネットなしセットアップ。',
          '[中国でのAI開発向けベストVPN (2026)](/prompt-bites/best-vpn-for-ai-development-china-2026?lang=ja) -- ファイアウォールの背後からHugging Face、GitHub、モデルレジストリへのアクセス。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/local-llms/local-llm-security-privacy-checklist?lang=ja',
      'inLanguage': 'ja',
      'headline': 'ローカルLLMセキュリティ&プライバシーチェックリスト：12ステップで安全なセットアップを実現',
      'description': 'ローカルLLMを安全に設定する12ステップ：テレメトリ無効化、チェックサム確認、ポート11434の分離、ディスク暗号化。GDPRとHIPAAにも対応。2026年4月更新。',
      'datePublished': '2026-04-04',
      'dateModified': '2026-04-18',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and IT professionals running local LLMs' },
      'keywords': 'ローカルLLM セキュリティ、プライバシー、チェックリスト、暗号化、Ollama',
    },
  },

  zh: {
    theme: 'Getting Started',
    title: '本地LLM安全与隐私检查清单：12个步骤实现安全设置',
    seoTitle: '本地LLM安全与隐私检查清单：12步安全设置指南2026',
    intro: '运行本地LLM可将您的提示保留在本地机器上，不经过外部服务器。但这并不意味着您的设置自动安全。遥测、不可信的模型文件和暴露的API等风险仍然可能泄露数据。本清单准确说明如何在10分钟内保护本地LLM。',
    metaDescription: '本地LLM安全设置12步清单：禁用遥测、验证校验和、隔离端口11434、启用磁盘加密。涵盖GDPR与HIPAA合规。2026年4月。',
    twitterDescription: '本地LLM安全12步：禁用遥测、验证校验和、隔离端口11434、磁盘加密。涵盖GDPR与HIPAA。',
    publishDate: '2026-04-04',
    dateModified: '2026-04-18',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    primaryTerm: '本地LLM隐私',
    toc: [
      { label: '关键要点', anchor: '#key-takeaways' },
      { label: '为什么本地LLM不自动保护隐私', anchor: '#why-not-automatically-private' },
      { label: '12项安全检查清单', anchor: '#the-12-item-checklist' },
      { label: '模型来源：安全下载位置', anchor: '#model-provenance' },
      { label: '网络隔离：阻止出站连接', anchor: '#network-isolation' },
      { label: '按工具分类的遥测设置', anchor: '#telemetry-settings' },
      { label: '威胁模型', anchor: '#threat-model' },
      { label: '常见问题', anchor: '#common-questions' },
    ],
    sections: {
      areLLMsSecure: {
        id: 'are-llms-private-and-secure',
        title: '本地LLM是否私密且安全？',
        content: '本地LLM默认是私密的，因为提示保存在您的设备上，但它们不一定是安全的。主要风险包括工具中的遥测、不可信的模型文件和网络暴露。安全的设置需要禁用遥测、验证模型来源和隔离系统外部访问。',
      },
      tldr: {
        id: 'key-takeaways',

        isTldr: true,
        items: [
          '本地推理将提示数据保留在您的机器上，远离第三方服务器。剩余风险：推理工具的遥测、来自不可信来源的模型文件、Ollama API暴露在网络上。',
          'Ollama默认绑定到localhost----除非您明确设置OLLAMA_HOST=0.0.0.0，否则无法从其他设备访问。',
          '禁用遥测：LM Studio（设置 → 隐私 → 关闭"发送匿名使用数据"）和GPT4All（设置 → 禁用遥测）。',
          '仅从Hugging Face（huggingface.co）或官方Ollama库下载模型权重。对于敏感部署，请验证SHA256校验和。',
          '对于受管制的数据（HIPAA、GDPR、法律特权）：启用完全磁盘加密、使用网络隔离的机器，并审计所有安装的扩展。',
        ],
      },
      whyNotAutoPrivate: {
        title: '为什么本地LLM不自动保护隐私？',
        content: [
          '**模型推理本身是私密的----您的提示永远不会发送到模型提供商的服务器。** 但是，其他三个数据流可能导致信息泄露：',
        ],
        items: [
          '**应用程序遥测**：LM Studio、GPT4All和其他一些工具默认收集匿名使用分析。这可能包括会话计数、使用的模型名称和性能指标。',
          '**模型下载来源**：恶意GGUF文件可能包含在易受攻击的推理引擎中加载模型时执行的代码。未验证的模型文件是供应链风险。',
          '**网络暴露**：Ollama的API服务器可被您机器上的任何进程访问。如果使用`OLLAMA_HOST=0.0.0.0`错误配置，整个网络都可以在没有认证的情况下访问它。',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '本地LLM比云API更安全吗？',
        content: '本地LLM因为数据留在您的设备上，所以对隐私而言更安全，而云API会将提示发送到外部服务器。但是，本地设置需要手动安全配置，而云提供商处理基础设施安全。真正的权衡是隐私自主性与委托安全性。',
      },
      misconceptions: {
        id: 'common-misconceptions',
        title: '关于本地LLM安全的常见误解是什么？',
        items: [
          '"本地LLM自动安全" → 错误，配置最重要',
          '"没有互联网=没有风险" → 错误，恶意文件和插件仍然适用',
          '"开源=安全" → 错误，代码仍需验证',
        ],
      },
      risks: {
        id: 'security-risks',
        title: '本地LLM中最大的安全风险是什么？',
        items: [
          '**遥测泄露** → LM Studio等工具可能发送使用数据',
          '**恶意模型文件** → 未验证的GGUF文件可能引入风险',
          '**网络暴露** → Ollama等API如果配置不当可能被公开',
        ],
      },
      quickChecklist: {
        id: 'quick-checklist',
        title: '快速安全检查清单（5分钟设置）',
        numberedItems: [
          '在您的工具中禁用遥测',
          '仅从Hugging Face或Ollama下载模型',
          '确保API仅绑定到localhost',
          '启用完全磁盘加密',
          '不要向互联网暴露端口',
        ],
      },
      checklist: {
        title: '本地LLM安全检查清单包含哪些内容？',
        content: '**在处理敏感或受管制数据之前，检查下面的每一项。** 此清单涵盖Ollama、LM Studio、Jan AI和GPT4All设置中最常见的隐私和安全缺陷。',
        numberedItems: [
          { title: '仅从可信来源下载模型', whyItMatters: '防止来自不可信来源的恶意模型文件。' },
          { title: '对敏感用途验证模型校验和', whyItMatters: '确保下载的模型文件未被篡改。' },
          { title: '禁用推理工具中的遥测', whyItMatters: '防止使用数据和会话信息被收集。' },
          { title: '确认Ollama仅绑定到localhost', whyItMatters: '防止API被暴露给网络上的其他设备。' },
          { title: '启用完全磁盘加密', whyItMatters: '设备丢失或被盗时保护模型权重和聊天记录。' },
          { title: '在加密文件夹中存储敏感聊天记录', whyItMatters: '保护包含敏感数据的会话历史。' },
          { title: '查看已安装的扩展和插件', whyItMatters: '防止恶意的第三方扩展访问网络。' },
          { title: '为LLM工作使用专用用户账户', whyItMatters: '将模型文件、聊天历史和API密钥与主档案隔离。' },
          { title: '不要向互联网公开本地API', whyItMatters: '防止对推理引擎的未授权远程访问。' },
          { title: '审计使用本地LLM的应用中的系统提示', whyItMatters: '防止通过浏览器扩展或工具集成进行数据泄露。' },
          { title: '保持推理工具最新', whyItMatters: '修复Ollama、LM Studio等工具中的已知安全漏洞。' },
          { title: '网络隔离环境：文档化批准的模型版本', whyItMatters: '确保数据处理和基础设施隔离的监管要求合规。' },
        ],
      },
      shijianBuildao: {
        title: '实用建议：数据安全合规部署',
        content: '中国企业和政府机构需要满足《数据安全法》（DSL）和《个人信息保护法》（PIPL）。以下建议可帮助您实现合规：',
        items: [
          '**本地数据处理**：使用Ollama确保所有数据处理都在您的机器上本地进行，避免传输到美国云服务器（符合数据本地化要求）。',
          '**中文模型选择**：使用Qwen 2.5或本地化模型，这些模型由中国企业提供，您对代码和数据处理流程有完全控制。',
          '**审计和合规记录**：为每个Ollama部署维护部署日期、模型版本和访问日志的文档。',
          '**网络隔离部署**：对于包含商业秘密或个人数据的工作，使用本指南第12点----完全网络隔离的机器。',
          '**加密和密钥管理**：启用AES-256磁盘加密，并将加密密钥存储在与模型分离的安全位置。',
        ],
      },
      modelProvenance: {
        title: '在哪里安全下载本地LLM模型权重',
        content: '模型权重是大型二进制文件。恶意GGUF文件可能利用llama.cpp使用的解析器中的漏洞。截至2026年，虽然尚未确认广泛的基于GGUF的恶意软件，但攻击面存在。',
        items: [
          '**Hugging Face**（huggingface.co）：开源模型的主要来源。每个文件都有经验证的SHA256哈希。坚持来自知名发布者的模型（Meta、Google、Microsoft、Mistral AI、Qwen/阿里巴巴）。',
          '**Ollama库**（ollama.com/library）：Ollama在存储前验证模型哈希。通过`ollama pull`拉取的模型是安全的。',
          '**LM Studio模型浏览器**：直接搜索Hugging Face。相同的信任规则适用----检查发布者账户。',
          '**避免**：匿名文件共享网站、Discord文件下载和任何不提供可验证哈希的来源。',
        ],
      },
      networkIsolation: {
        title: '如何阻止来自本地LLM的出站连接',
        content: '**在下载模型后阻止出站连接，以防止推理工具"回家拨号"。** 在macOS上使用`pf`防火墙；在Linux上使用`ufw`或OpenSnitch：',
        codeBlock: '# macOS -- 使用pf防火墙阻止Ollama出站\n# 添加到/etc/pf.conf：\nblock out proto tcp from any to any user ollama\n\n# Linux -- 使用ufw阻止\nsudo ufw deny out from any to any app ollama\n\n# 或使用Little Snitch（macOS）/ OpenSnitch（Linux）\n# 用于具有GUI的单应用网络控制',
        codeLanguage: 'bash',
      },
      telemetry: {
        title: '如何禁用本地LLM工具中的遥测',
        rows: [
          { '工具': 'Ollama', '遥测默认': '不收集', '验证方式': '检查github.com/ollama/ollama -- 没有分析代码' },
          { '工具': 'LM Studio', '遥测默认': '匿名分析已启用', '禁用方式': '设置 → 隐私 → 取消勾选"发送匿名使用数据"' },
          { '工具': 'Jan AI', '遥测默认': '无 -- 明确禁用', '验证方式': '开源 -- 审计github.com/janhq/jan' },
          { '工具': 'GPT4All', '遥测默认': '首次启动时仅选择性加入', '修改方式': '设置 → 隐私 → 禁用使用分析' },
        ],
        columns: ['工具', '遥测默认', '验证/禁用方式'],
      },
      threatModel: {
        id: 'threat-model',
        title: '您应该假设什么样的威胁模型？',
        content: [
          '**假设您的本地LLM环境可能通过工具、插件或配置错误泄露数据。将模型视为不可信的——设计您的设置，使得即使模型被攻击，敏感数据也无法被访问或传输。这意味着将推理工具与互联网隔离、禁用遥测并限制文件系统访问。**',
          '安全不仅仅是数据隐私问题——提示词注入是一种独立的攻击向量，恶意输入会操纵模型的行为。关于适用于本地和云模型的注入防御技术，请参阅[提示词注入与安全](https://www.promptquorum.com/prompt-engineering/prompt-injection-and-security?lang=zh)。',
        ],
      },
      faqSection: {
        title: '关于本地LLM的常见安全问题',
        faqs: [
          {
            q: '本地LLM可以访问我的文件或互联网吗？',
            a: '不能。模型本身是生成文本的静态文件。它无法读取文件系统或发出网络请求。但是，运行模型的推理工具（Ollama、LM Studio）拥有正常的操作系统级访问。一些工具包含读取文件的功能――例如GPT4All的LocalDocs或LM Studio的文件附加功能。这些功能是可选的并且明确记录。',
          },
          {
            q: '使用本地LLM处理HIPAA数据安全吗？',
            a: '本地推理消除了云API创建的第三方数据处理器风险。但是，HIPAA合规需要的不仅仅是私密推理――您需要完全磁盘加密、访问控制、审计日志，以及如果任何软件供应商可能访问PHI，则需要业务关联协议。使用启用FileVault和禁用遥测的Ollama是一个合理的起点，但正式的HIPAA合规需要完整的风险评估。',
          },
          {
            q: 'Ollama是否将我的提示发送到任何地方？',
            a: '不会。Ollama是开源的（github.com/ollama/ollama），不包含任何遥测或数据收集代码。提示由llama.cpp在本地处理，永远不会传输。Ollama唯一的出站网络活动是在您运行`ollama pull`时从ollama.com下载模型。',
          },
          {
            q: '使用本地LLM比使用OpenAI API更隐私吗？',
            a: '是的，就提示隐私而言。使用本地LLM，您的提示永远不会离开您的机器。OpenAI API将提示发送到OpenAI的服务器进行处理。OpenAI的API服务条款规定，API输入/输出默认不用于训练模型，但数据确实通过他们的基础设施传输。对于敏感或受管制数据（医疗、法律、财务），本地推理是更谨慎的选择。',
          },
          {
            q: '我如何验证下载的模型文件是否安全？',
            a: '仅从Hugging Face（huggingface.co）或官方Ollama库下载模型。在Hugging Face上，每个文件都显示SHA256哈希――下载后使用`sha256sum <model_file>`验证。坚持来自已知发布者的模型：Meta、Google、Microsoft、Mistral AI和Qwen/Alibaba。避免匿名文件共享或Discord文件下载。',
          },
          {
            q: '本地LLM的"隐私"和"安全"有什么区别？',
            a: '隐私意味着您的提示和输出无法被第三方访问。安全意味着您的系统受到威胁保护。本地LLM可能是私密的（数据不会离开您的机器）但不安全（从不信任的来源下载的模型，或网络上公开的Ollama API）。两者必须独立解决。',
          },
          {
            q: '我可以将本地LLM用于GDPR规制的数据吗？',
            a: '本地推理大幅降低了GDPR风险，因为数据不会离开您的基础设施。但是，您仍然必须验证推理工具（Ollama、LM Studio）已禁用遥测，已启用磁盘加密，并且访问控制已就位。对于Article 35 DPIA要求，记录您的数据处理设置并确认没有个人数据通过第三方服务器传输。',
          },
          {
            q: 'LM Studio是否将数据发送到其服务器？',
            a: 'LM Studio默认收集匿名分析（会话数、使用的模型名称、性能指标）。它不发送提示内容。要禁用分析：设置 → 隐私 → 取消勾选"发送匿名使用数据"。无论此设置如何，模型推理和聊天日志始终保持本地。',
          },
        ],
      },
      sources: {
        title: '来源',
        items: [
          '**OWASP AI安全指南** -- 模型部署的安全考虑',
          '**Hugging Face Model Card规范** -- 模型来源和许可标准',
          '**VeraCrypt磁盘加密** -- 开源全磁盘加密工具',
        ],
      },
      commonMistakes: {
        title: '本地LLM安全中最常见的错误是什么？',
        content: '**本地LLM安全故障的大多数情况源于配置疏忽，而非模型漏洞。** 这些是5个最频繁的错误及其修复方法。',
        items: [
          '**错误：** 从第三方网站（Discord、随机GitHub发布）下载模型。**修复：** 仅使用Hugging Face（huggingface.co）或Ollama库。使用`sha256sum`验证。',
          '**错误：** 假设本地推理=完全隐私。**修复：** 禁用LM Studio分析（设置→隐私）和GPT4All遥测。运行`netstat -an | grep 11434`确认无意外端口。',
          '**错误：** 测试后仍保留`OLLAMA_HOST=0.0.0.0`。**修复：** 还原：`export OLLAMA_HOST=127.0.0.1:11434`。从另一设备测试――连接应被拒绝。',
          '**错误：** HIPAA/GDPR工作负载跳过磁盘加密。**修复：** 启用FileVault（macOS）或BitLocker（Windows）。单独加密LM Studio聊天日志文件夹。',
          '**错误：** 未检查Open WebUI或Jan AI中的第三方扩展。**修复：** 每月审计已安装的扩展。删除任何请求您无法识别的网络访问的扩展。',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '地区合规性考虑',
        content: '**本地LLM推理降低了数据驻留风险，但完全的监管合规性需要按地区增加控制。**',
        items: [
          '**欧盟 / GDPR（2018）：** 本地推理消除了对模型提供商的Article 28数据处理器义务。您仍然必须禁用LM Studio分析、启用磁盘加密，并为任何DPIA记录数据处理设置。在处理个人数据之前执行正当利益评估。',
          '**美国 / HIPAA：** HIPAA要求PHI保护：完整磁盘加密（"加密安全港"）、访问控制和审计日志。启用FileVault和禁用遥测的Ollama是HIPAA合规的合理起点。正式合规需要完整风险评估。',
          '**日本 / APPI（2022）：** 个人信息保护法要求在处理期间保护个人数据。网络隔离机器上的本地推理满足数据本地化要求。禁用Ollama更新检查和LM Studio分析以符合APPI。',
          '**中国 / PIPL（2021）：** 在中国运行本地LLM供内部使用不需要CAC注册。如果您在中国部署本地LLM作为公开服务，则需要CAC算法注册。',
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[什么是本地LLM？](/local-llms/what-are-local-llms?lang=zh) -- 核心概念和组件',
          '[本地LLM vs 云API](/local-llms/local-llms-vs-cloud-apis?lang=zh) -- 隐私权衡',
          '[如何安装Ollama](/local-llms/how-to-install-ollama?lang=zh) -- 安装和设置',
          '[在笔记本上运行本地LLM](/local-llms/local-llm-on-laptop?lang=zh) -- 安全的笔记本配置',
          '[本地LLM一键安装程序](/local-llms/local-llm-one-click-installers?lang=zh) -- 比较LM Studio、Ollama、Jan AI和GPT4All的隐私和易用性',
          '[本地LLM设置故障排除](/local-llms/troubleshooting-local-llm-setup?lang=zh) -- 修复常见错误，如端口11434被拒和GPU未检测',
          '[防火墙内/离线本地AI (2026)](/power-local-llm/local-ai-behind-firewall-offline-2026?lang=zh) -- Ollama气隙部署：网络隔离、审计日志和无网络设置。',
          '[中国AI开发最佳VPN (2026)](/prompt-bites/best-vpn-for-ai-development-china-2026?lang=zh) -- 从防火墙后访问Hugging Face、GitHub和模型注册表。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/local-llms/local-llm-security-privacy-checklist?lang=zh',
      'inLanguage': 'zh',
      'headline': '本地LLM安全与隐私检查清单：12个步骤实现安全设置',
      'description': '本地LLM安全设置12步清单：禁用遥测、验证校验和、隔离端口11434、启用磁盘加密。涵盖GDPR与HIPAA合规。2026年4月。',
      'datePublished': '2026-04-04',
      'dateModified': '2026-04-18',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Beginner',
      'proficiencyLevel': 'Beginner',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and IT professionals running local LLMs' },
      'keywords': '本地LLM安全、隐私、数据安全法、加密、Ollama',
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Local LLM Security & Privacy Steps',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Isolate Your Network', 'description': 'Block outbound internet access from your local LLM machine. Use firewall rules or an isolated VLAN.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Enable Full Disk Encryption', 'description': 'Use FileVault on macOS, BitLocker on Windows, or LUKS on Linux to encrypt all data at rest.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Restrict API Access', 'description': 'Bind Ollama to localhost only (OLLAMA_HOST=127.0.0.1:11434) to prevent unauthorized network access.' },
      ]
    },
  },
  };
