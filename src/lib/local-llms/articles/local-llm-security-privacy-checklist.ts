// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llm-security-privacy-checklist
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      designSkin: 'hub',
      theme: 'Getting Started',
      title: 'Local LLM Security and Privacy Checklist: 12 Steps to a Safe Setup',
      seoTitle: 'Local LLM Security Checklist 2026: Is LM Studio Safe?',
      intro: 'LM Studio, Ollama, Jan and GPT4All keep your prompts off external servers when you run local models, but that does not automatically make your setup secure. Telemetry, untrusted model files, unpatched versions and exposed APIs can still leak data. This checklist shows how to secure a local LLM in under 10 minutes.',
      metaDescription: 'Is LM Studio safe? Is Ollama? 12-step local LLM security checklist: what each tool sends, the Ollama CVE-2026-7482 fix, telemetry and port 11434.',
      heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-en.webp',
      twitterDescription: '12-step local LLM security checklist: is LM Studio safe, is Ollama safe, disable telemetry, patch CVE-2026-7482, isolate port 11434.',
      publishDate: '2026-04-04',
      dateModified: '2026-11-15',
      next_refresh_due: '2027-05-15',
      leadAnswerBlock: '**LM Studio, Ollama, Jan and GPT4All keep your prompts off external servers when you run local models, but that does not automatically make your setup secure. Telemetry, untrusted model files, unpatched versions and exposed APIs can still leak data. This checklist shows how to secure a local LLM in under 10 minutes.**',
      quickAnswerTop: {
        en: {
          question: 'What are the 5 non-negotiable security steps for a local LLM?',
          answer: 'The 5 non-negotiable security steps for a local LLM: (1) no internet access for the model process, (2) model files verified via SHA-256 before loading, (3) API endpoints bound to localhost only and the tool on a patched version (Ollama 0.17.1 or later), (4) prompt logs stored encrypted or disabled entirely, (5) no third-party plugins without source review.',
          bullets: [
            'No internet access for the model process',
            'Model files verified via SHA-256 before loading',
            'API endpoints bound to localhost only, tool on a patched version (Ollama 0.17.1 or later)',
            'Prompt logs stored encrypted or disabled entirely',
            'No third-party plugins without source review',
          ],
          updatedDate: '2026-11-15',
        },
      },
      comparisonTable: {
        columns: [
          'Setup',
          'Modellgröße',
          'Geschwindigkeit',
          'Erfahrung',
        ],
        rows: [
          {
            Setup: '8 GB RAM CPU',
            'Modellgröße': '3B–7B',
            Geschwindigkeit: '10–25 Token/Sek.',
            Erfahrung: 'Brauchbar für Chat, Zusammenfassung, einfaches Coding',
          },
          {
            Setup: '16 GB RAM CPU',
            'Modellgröße': '7B–13B',
            Geschwindigkeit: '5–15 Token/Sek.',
            Erfahrung: 'Allgemeine Nutzung, keine Multitasking-Einschränkungen',
          },
          {
            Setup: 'Apple Silicon (M2–M4)',
            'Modellgröße': '7B–13B',
            Geschwindigkeit: '30–80 Token/Sek.',
            Erfahrung: 'Schnellste Consumer-Option, beste Akkulaufzeit',
          },
          {
            Setup: 'GPU-Laptop (RTX 4060, 8 GB VRAM)',
            'Modellgröße': '7B–13B',
            Geschwindigkeit: '60–90 Token/Sek.',
            Erfahrung: 'Am schnellsten, aber hohe Wärme und Stromverbrauch',
          },
        ],
      },
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM privacy',
      toc: [
        {
          label: 'Key Takeaways',
          anchor: '#key-takeaways',
        },
        {
          label: 'Are LM Studio, Ollama, Jan and GPT4All Safe?',
          anchor: '#are-lm-studio-ollama-safe',
        },
        {
          label: 'Recent Vulnerabilities in Local LLM Tools',
          anchor: '#recent-vulnerabilities',
        },
        {
          label: 'Why Local LLMs Are Not Automatically Private',
          anchor: '#why-not-automatically-private',
        },
        {
          label: 'Model Provenance: Where to Download Safely',
          anchor: '#model-provenance',
        },
        {
          label: 'Network Isolation: Blocking Outbound Connections',
          anchor: '#network-isolation',
        },
        {
          label: 'Telemetry Settings by Tool',
          anchor: '#telemetry-settings',
        },
        {
          label: 'Threat Model',
          anchor: '#threat-model',
        },
        {
          label: 'Common Questions',
          anchor: '#faq',
        },
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
            'The 5 non-negotiable steps: (1) no internet access for the model process, (2) model files verified via SHA-256 before loading, (3) API endpoints bound to localhost only and the tool on a patched version, (4) prompt logs stored encrypted or disabled entirely, (5) no third-party plugins without source review.',
            'Are LM Studio, Ollama, Jan and GPT4All safe? Yes for prompt privacy: none of them sends chat prompts to a model provider when you run a local model. Safe use also needs current versions, a closed API port and trusted model files.',
            'Local inference keeps prompt data off third-party servers. The remaining risks are: telemetry from the inference tool, model files from untrusted sources, unpatched versions, and the Ollama API being exposed on the network.',
            'Update Ollama to 0.17.1 or later: CVE-2026-7482 ("Bleeding Llama", rated critical) let an unauthenticated attacker read process memory from an exposed Ollama API.',
            'Ollama binds to localhost by default -- it is not accessible from other devices unless you explicitly set OLLAMA_HOST=0.0.0.0.',
            'Verify what LM Studio sends: per its privacy policy it has no telemetry, but update checks and model search send anonymized data. Decline telemetry in GPT4All at first launch (it is opt-in) and block outbound traffic after downloading models.',
            'Download model weights only from Hugging Face (huggingface.co) or the official Ollama library. Verify SHA256 checksums for sensitive deployments.',
            'For regulated data (HIPAA, GDPR, legal privilege): enable full-disk encryption, use an air-gapped machine, and audit all installed extensions.',
          ],
        },
        toolSafety: {
          id: 'are-lm-studio-ollama-safe',
          title: 'Are LM Studio, Ollama, Jan and GPT4All safe to use?',
          content: [
            '**Yes for prompt privacy: none of the four sends your chat prompts to a model provider when you run a local model.** What differs is each tool\'s network footprint and what you should check.',
          ],
          items: [
            '**LM Studio:** the [LM Studio privacy policy](https://lmstudio.ai/app-privacy) states that the app "does not include telemetry or user-specific tracking" and does not handle your chats or documents unless you use LM Studio Cloud Services. Update checks and model search send limited, anonymized data. Enable "Serve on Local Network" only when other devices need the API.',
            '**Ollama:** per the [Ollama FAQ](https://docs.ollama.com/faq), "We don\'t see your prompts or data when you run locally", and the server binds to 127.0.0.1 port 11434 by default. Cloud models and web search are optional features that send prompts to Ollama\'s servers; set `OLLAMA_NO_CLOUD=1` to turn them off. Keep it updated (see the vulnerabilities section below).',
            '**Jan:** open source under the Apache 2.0 licence ([GitHub](https://github.com/janhq/jan)). Its [privacy page](https://docs.jan.ai/desktop/privacy) says analytics are opt-in ("Zero data collection until you say so"), chosen at first launch, and that your chats stay yours. Connecting a cloud provider sends your messages to that provider.',
            '**GPT4All:** telemetry and sharing chats to the Datalake are opt-in. Decline both at first launch and check the settings afterwards.',
            '**For all four:** block outbound traffic after the models are downloaded, take model files only from known publishers, and keep the app on a current release.',
          ],
        },
        recentVulns: {
          id: 'recent-vulnerabilities',
          title: 'Which recent vulnerabilities affect local LLM tools?',
          content: [
            '**Ollama had two sets of vulnerabilities disclosed in 2026: one is exploitable through an exposed API, the other through the Windows updater.** Running locally does not make unpatched software safe.',
          ],
          items: [
            '**CVE-2026-7482 ("Bleeding Llama"):** a heap out-of-bounds read in Ollama\'s GGUF model loader, fixed in Ollama 0.17.1; [The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html) reports a CVSS score of 9.1. An unauthenticated attacker who can reach the API can upload a crafted GGUF file and read process memory, which can include environment variables, API keys and conversation data. An install bound to localhost is not reachable from the network; exposed instances are.',
            '**CVE-2026-42248 and CVE-2026-42249 (CVSS 7.7 each):** the Ollama for Windows updater does not verify the update binary and builds its staging path from HTTP response headers. [CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248) lists versions 0.12.10 through 0.17.5 and named no patched release at disclosure; other reports give a higher upper bound. An attacker needs control of the update server the client contacts. Until a fix is confirmed in the Ollama release notes, Windows users can turn off automatic updates and install new versions manually from the official download.',
            '**How to check your setup:** run `ollama --version` and update if it is below 0.17.1. Confirm `OLLAMA_HOST` is not set to 0.0.0.0, then try to reach port 11434 from another device on your network; the connection should be refused.',
          ],
        },
        whyNotAutoPrivate: {
          id: 'why-not-automatically-private',
          title: 'Why Are Local LLMs Not Automatically Private?',
          content: [
            '**The model inference itself is private -- when you run a local model, your prompts are not sent to the model provider\'s servers.** But three other data flows can leak information:',
          ],
          items: [
            '**Application telemetry**: LM Studio states in its privacy policy that it includes no telemetry or user-specific tracking, but update checks and model search send anonymized data. GPT4All telemetry is opt-in. Other tools may collect usage analytics, so verify with a firewall.',
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
            '**Telemetry leaks** → some tools send usage data; LM Studio sends update-check and model-search requests',
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
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: 'A local LLM security checklist: isolate network access, verify SHA-256 of model files, bind API to localhost, encrypt or disable prompt logs, audit all third-party plugins.',
            },
            {
              type: 'plain-terms',
              text: 'Local LLMs are private by default only if configured correctly — the 5 steps above cover the main attack surfaces for a local inference setup.',
            },
          ],
          numberedItems: [
            {
              title: 'Download models only from trusted sources',
              whyItMatters: 'Prevents malicious model files from untrusted sources.',
            },
            {
              title: 'Verify model checksums for sensitive use',
              whyItMatters: 'Ensures downloaded model files have not been tampered with.',
            },
            {
              title: 'Disable telemetry in your inference tool',
              whyItMatters: 'Prevents usage data and session information from being collected.',
            },
            {
              title: 'Confirm Ollama is bound to localhost only',
              whyItMatters: 'Prevents the API from being exposed to other devices on your network.',
            },
            {
              title: 'Enable full-disk encryption',
              whyItMatters: 'Protects model weights and chat logs if the device is lost or stolen.',
            },
            {
              title: 'Store sensitive chat logs in an encrypted folder',
              whyItMatters: 'Protects conversation history with sensitive data from unauthorized access.',
            },
            {
              title: 'Review installed extensions and plugins',
              whyItMatters: 'Prevents malicious third-party extensions from accessing the network.',
            },
            {
              title: 'Use a dedicated user account for LLM work',
              whyItMatters: 'Isolates model files, chat history, and API keys from your main profile.',
            },
            {
              title: 'Do not expose the local API to the internet',
              whyItMatters: 'Prevents unauthorized remote access to your local inference engine.',
            },
            {
              title: 'Audit system prompts in any app using local LLMs',
              whyItMatters: 'Prevents data exfiltration through browser extensions or productivity tool integrations.',
            },
            {
              title: 'Keep inference tools updated',
              whyItMatters: 'Patches known vulnerabilities, for example Ollama CVE-2026-7482 (fixed in 0.17.1).',
            },
            {
              title: 'For air-gapped or regulated environments: document approved model versions',
              whyItMatters: 'Ensures compliance with regulatory requirements for data handling and infrastructure isolation.',
            },
          ],
          image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-en.webp',
          imageCaption: 'Verify every item before working with sensitive or regulated data.',
        },
        modelProvenance: {
          id: 'model-provenance',
          title: 'Where should you download local LLM models safely?',
          content: [
            '**Model weights are large binary files.** A malformed GGUF file can exploit bugs in the parser that loads it: CVE-2026-7482 was a heap out-of-bounds read in Ollama\'s GGUF loader, fixed in Ollama 0.17.1.',
          ],
          items: [
            '**Hugging Face** (huggingface.co): the primary source for open models. Each file has a verified SHA256 hash. Stick to models from well-known publishers (Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba).',
            '**Ollama library** ([ollama.com/library](https://ollama.com/library)): Ollama verifies model hashes before storing them. Pull from the official library or from publishers you trust.',
            '**LM Studio model browser**: searches Hugging Face directly. The same trust rules apply -- check the publisher account.',
            '**Avoid**: anonymous file sharing sites, Discord file drops, and any source that does not provide a verifiable hash.',
          ],
        },
        networkIsolation: {
          id: 'network-isolation',
          title: 'How Do You Block Outbound Connections from Local LLMs?',
          content: '**Block outbound connections after the model is downloaded to prevent the inference tool from phoning home.** On macOS, use `pf` firewall; on Linux, use `ufw` or OpenSnitch:',
          codeBlock: '# macOS -- block Ollama outbound with pf firewall\n# Add to /etc/pf.conf:\nblock out proto tcp from any to any user ollama\n\n# Linux -- block with ufw\nsudo ufw deny out from any to any app ollama\n\n# Or use Little Snitch (macOS) / OpenSnitch (Linux)\n# for per-application network control with a GUI',
          codeLanguage: 'bash',
        },
        telemetry: {
          id: 'telemetry-settings',
          title: 'How Do You Disable Telemetry in Local LLM Tools?',
          rows: [
            {
              Tool: '[Ollama](https://ollama.com)',
              'Telemetry Default': 'None for local use; cloud is optional',
              'How to Confirm/Disable': 'OLLAMA_NO_CLOUD=1 disables cloud features',
            },
            {
              Tool: '[LM Studio](https://lmstudio.ai)',
              'Telemetry Default': 'None per policy; update/search send anonymized data',
              'How to Confirm/Disable': 'Nothing to disable; verify with a firewall or packet capture',
            },
            {
              Tool: '[Jan AI](https://jan.ai)',
              'Telemetry Default': 'Analytics opt-in, chosen at first launch',
              'How to Confirm/Disable': 'Decline at first launch; open source',
            },
            {
              Tool: '[GPT4All](https://nomic.ai/gpt4all)',
              'Telemetry Default': 'Opt-in only at first launch',
              'How to Confirm/Disable': 'Decline at first launch; verify with a firewall',
            },
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
              a: 'Not when you run local models. The Ollama FAQ states "We don\'t see your prompts or data when you run locally." Ollama cloud models and web search are optional and do send prompts to Ollama\'s servers; set `OLLAMA_NO_CLOUD=1` to disable them. Expected outbound traffic from a local setup is model downloads with `ollama pull` and update checks. Ollama is open source ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
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
              a: 'Local inference significantly reduces GDPR risk because data does not leave your infrastructure. However, you must still verify that the inference tool (Ollama, LM Studio) sends no unexpected network traffic, that disk encryption is enabled, and that access controls are in place. For Article 35 DPIA requirements, document your data processing setup and confirm no personal data transits third-party servers.',
            },
            {
              q: 'Is LM Studio safe to use?',
              a: 'Yes for prompt privacy: according to the LM Studio privacy policy, chats and documents stay on your device unless you use LM Studio Cloud Services, and the app includes no telemetry or user-specific tracking. The remaining risks are the ones every local tool has: model files from untrusted publishers, a local API opened to the network with "Serve on Local Network", and an outdated app version. Download models from known Hugging Face publishers, enable the setting only when you need it and keep the app updated.',
            },
            {
              q: 'Does LM Studio collect data or send it to its servers?',
              a: 'The LM Studio privacy policy states that the application does not include telemetry or user-specific tracking. Update checks send the app version, OS and IP address (via CDN), and model search and downloads send anonymized search queries. Chat content and documents are not handled unless you use LM Studio Cloud Services. There is no usage-data setting to disable; verify with a firewall or packet capture.',
            },
            {
              q: 'Is Ollama safe to use?',
              a: 'Yes for local prompts, if you keep it updated and off the network. Ollama states it does not see your prompts or data when you run locally, and it binds to 127.0.0.1 by default. Vulnerabilities are the main risk: CVE-2026-7482 affected versions before 0.17.1 and was exploitable through a reachable API, and two Windows updater flaws (CVE-2026-42248 and CVE-2026-42249) were reported in 2026. Update, keep port 11434 closed to other devices and check the release notes for updater fixes.',
            },
            {
              q: 'How do I prevent Ollama from being accessed by other devices on my network?',
              a: 'By default, Ollama binds to localhost (127.0.0.1:11434) and is not accessible from other devices. If you previously set OLLAMA_HOST=0.0.0.0 to allow network access, revert it: `export OLLAMA_HOST=127.0.0.1:11434`. Verify isolation by attempting to connect from another device on your network -- it should fail.',
            },
            {
              q: 'Which local LLM tool is best for maximum privacy?',
              a: 'Based on their published defaults, Jan AI is the most restrictive of the four: fully open source (Apache 2.0 licence) with analytics that are opt-in and chosen at first launch. Ollama is next: open source, binds to localhost by default, and cloud features can be disabled with `OLLAMA_NO_CLOUD=1`. LM Studio has no telemetry per its privacy policy, but update checks and model search send anonymized data.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Where can you find additional sources?',
          items: [
            '**OWASP Top 10 for LLM Applications** ([owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)) -- Security risks for LLM deployments including prompt injection and supply chain attacks',
            '**Hugging Face Model Card Documentation** ([huggingface.co/docs/hub/model-cards](https://huggingface.co/docs/hub/model-cards)) -- Model provenance standards and SHA256 hash verification',
            '**VeraCrypt** ([veracrypt.fr](https://veracrypt.fr)) -- Open-source full-disk and folder encryption for Windows, macOS, and Linux',
            '**Ollama FAQ** ([docs.ollama.com/faq](https://docs.ollama.com/faq)) -- default bind address, cloud features and the `OLLAMA_NO_CLOUD` setting',
            '**LM Studio privacy policy** ([lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)) -- what the app collects and when',
            '**Jan privacy page** ([docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)) -- opt-in analytics',
            '**The Hacker News, Ollama vulnerability report** ([thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)) -- CVE-2026-7482 and the Windows updater flaws',
            '**CERT Polska advisory** ([cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)) -- CVE-2026-42248 and CVE-2026-42249 affected versions',
          ],
        },
        commonMistakes: {
          title: 'What Are the Most Common Local LLM Security Mistakes?',
          content: '**Most local LLM security failures come from configuration oversights, not model vulnerabilities.** These are the six most frequent mistakes and how to fix each one.',
          items: [
            '**Mistake:** Downloading models from third-party sites (Discord, random GitHub releases). **Fix:** Use Hugging Face (huggingface.co) or Ollama library only. Verify with `sha256sum`.',
            '**Mistake:** Assuming local inference = full privacy. **Fix:** Block outbound traffic after the model download, inspect LM Studio and GPT4All with a firewall, and decline GPT4All telemetry at first launch. Run `netstat -an | grep 11434` to confirm no unexpected ports.',
            '**Mistake:** Leaving `OLLAMA_HOST=0.0.0.0` active after testing. **Fix:** Revert: `export OLLAMA_HOST=127.0.0.1:11434`. Test from another device — connection should be refused.',
            '**Mistake:** Skipping disk encryption for HIPAA/GDPR workloads. **Fix:** Enable FileVault (macOS) or BitLocker (Windows). Encrypt the LM Studio chat log folder separately.',
            '**Mistake:** Not reviewing third-party extensions in Open WebUI or Jan AI. **Fix:** Audit installed extensions monthly. Remove any requesting network access you don\'t recognize.',
            '**Mistake:** Running an old Ollama version after a disclosed vulnerability. **Fix:** Run `ollama --version` and update to 0.17.1 or later. On Windows, also review the updater advisories in the vulnerabilities section above.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'What are the regional compliance considerations?',
          content: '**Local LLM inference reduces data residency risk, but full regulatory compliance requires additional controls per region.** This section is general information, not legal advice; confirm requirements with a qualified lawyer or data protection officer.',
          items: [
            '**EU / GDPR (2018):** Local inference can remove the Article 28 data processor relationship with a model provider for the inference step. You must still verify LM Studio network traffic with a firewall, enable disk encryption, and document your data processing setup for any DPIA. Perform a legitimate interest assessment before processing personal data.',
            '**United States / HIPAA:** HIPAA requires safeguards for PHI: full-disk encryption (the "encryption safe harbor"), access controls, and audit logging. Ollama with FileVault enabled and telemetry disabled is a reasonable HIPAA starting point. Formal compliance requires a full risk assessment.',
            '**Japan / APPI (2022):** The Act on the Protection of Personal Information requires personal data protection during processing. Local inference on an air-gapped machine can help meet data localisation requirements. Disable Ollama update checks and verify LM Studio network traffic with a firewall as part of your APPI assessment.',
            '**China / PIPL (2021):** Running a local LLM for internal use generally does not require CAC registration; confirm with legal counsel. If you deploy a local LLM as a public-facing service in China, CAC algorithm registration is required.',
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
            '[SOC 2 & ISO 27001 Readiness for Self-Hosted LLM Deployments](/local-llms/soc2-iso27001-self-hosted-llm-compliance) -- the formal audit-framework version of this checklist for compliance officers preparing a SOC 2 or ISO 27001 audit.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Local LLM Security and Privacy Checklist: 12 Steps to a Safe Setup',
        description: '12-step checklist for local LLM privacy in 2026: model provenance, telemetry opt-out, network isolation, disk encryption, and access controls.',
        url: 'https://www.promptquorum.com/local-llms/local-llm-security-privacy-checklist',
        datePublished: '2026-04-04',
        dateModified: '2026-11-15',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper',
          sameAs: 'https://www.linkedin.com/in/hanskuepper/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
        },
        about: [
          {
            '@type': 'Thing',
            name: 'local LLM privacy',
          },
          {
            '@type': 'Thing',
            name: 'LLM security',
          },
          {
            '@type': 'Thing',
            name: 'Ollama telemetry',
          },
          {
            '@type': 'Thing',
            name: 'model provenance',
          },
          {
            '@type': 'Thing',
            name: 'disk encryption',
          },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
        },
        educationalLevel: 'Beginner',
        proficiencyLevel: 'Beginner',
        audience: {
          '@type': 'Audience',
          audienceType: 'Developers and IT professionals running local LLMs',
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a local LLM access my files or the internet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No -- the model itself is a static file that generates text. It has no ability to read your file system or make network requests. However, the inference tool running the model (Ollama, LM Studio) has normal OS-level access. Some tools include features that do read files -- such as GPT4All\'s LocalDocs or LM Studio\'s file attachment feature. These features are opt-in and explicitly documented.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is it safe to use a local LLM with HIPAA-covered data?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Local inference removes the third-party data processor risk that cloud APIs create. However, HIPAA compliance requires more than private inference -- you need full-disk encryption, access controls, audit logging, and a Business Associate Agreement if any software vendor could access PHI. Using Ollama with FileVault enabled and telemetry disabled is a reasonable starting point, but formal HIPAA compliance requires a full risk assessment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Ollama send my prompts anywhere?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not when you run local models. The Ollama FAQ states "We don\'t see your prompts or data when you run locally." Ollama cloud models and web search are optional and do send prompts to Ollama\'s servers; set `OLLAMA_NO_CLOUD=1` to disable them. Expected outbound traffic from a local setup is model downloads with `ollama pull` and update checks. Ollama is open source ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
            },
          },
          {
            '@type': 'Question',
            name: 'Is using a local LLM more private than using the OpenAI API?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, for prompt privacy. With a local LLM, your prompts never leave your machine. The OpenAI API sends prompts to OpenAI\'s servers for processing. OpenAI\'s API Terms of Service state that API input/output is not used to train models by default, but the data does transit their infrastructure. For sensitive or regulated data (medical, legal, financial), local inference is the more conservative choice.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I verify that a downloaded model file is safe?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Download models only from Hugging Face (huggingface.co) or the official Ollama library. On Hugging Face, each file shows a SHA256 hash -- verify it with `sha256sum <model_file>` after downloading. Stick to models from known publishers: Meta, Google, Microsoft, Mistral AI, and Qwen/Alibaba. Avoid anonymous file shares or Discord file drops.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between privacy and security for local LLMs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Privacy means your prompts and outputs are not accessible to third parties. Security means your system is protected from threats. A local LLM can be private (no data leaves your machine) but insecure (model downloaded from an untrusted source, or Ollama API exposed on the network). Both must be addressed independently.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use a local LLM for GDPR-regulated data?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Local inference significantly reduces GDPR risk because data does not leave your infrastructure. However, you must still verify that the inference tool (Ollama, LM Studio) sends no unexpected network traffic, that disk encryption is enabled, and that access controls are in place. For Article 35 DPIA requirements, document your data processing setup and confirm no personal data transits third-party servers.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is LM Studio safe to use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes for prompt privacy: according to the LM Studio privacy policy, chats and documents stay on your device unless you use LM Studio Cloud Services, and the app includes no telemetry or user-specific tracking. The remaining risks are the ones every local tool has: model files from untrusted publishers, a local API opened to the network with "Serve on Local Network", and an outdated app version. Download models from known Hugging Face publishers, enable the setting only when you need it and keep the app updated.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does LM Studio collect data or send it to its servers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The LM Studio privacy policy states that the application does not include telemetry or user-specific tracking. Update checks send the app version, OS and IP address (via CDN), and model search and downloads send anonymized search queries. Chat content and documents are not handled unless you use LM Studio Cloud Services. There is no usage-data setting to disable; verify with a firewall or packet capture.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Ollama safe to use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes for local prompts, if you keep it updated and off the network. Ollama states it does not see your prompts or data when you run locally, and it binds to 127.0.0.1 by default. Vulnerabilities are the main risk: CVE-2026-7482 affected versions before 0.17.1 and was exploitable through a reachable API, and two Windows updater flaws (CVE-2026-42248 and CVE-2026-42249) were reported in 2026. Update, keep port 11434 closed to other devices and check the release notes for updater fixes.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I prevent Ollama from being accessed by other devices on my network?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'By default, Ollama binds to localhost (127.0.0.1:11434) and is not accessible from other devices. If you previously set OLLAMA_HOST=0.0.0.0 to allow network access, revert it: `export OLLAMA_HOST=127.0.0.1:11434`. Verify isolation by attempting to connect from another device on your network -- it should fail.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which local LLM tool is best for maximum privacy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Based on their published defaults, Jan AI is the most restrictive of the four: fully open source (Apache 2.0 licence) with analytics that are opt-in and chosen at first launch. Ollama is next: open source, binds to localhost by default, and cloud features can be disabled with `OLLAMA_NO_CLOUD=1`. LM Studio has no telemetry per its privacy policy, but update checks and model search send anonymized data.',
            },
          },
        ],
      },
    },

  es: {
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Lista de Verificación de Seguridad y Privacidad para LLMs Locales: 12 Pasos para una Configuración Segura',
    seoTitle: 'Seguridad de LLMs locales 2026: ¿es seguro LM Studio?',
    intro: 'LM Studio, Ollama, Jan y GPT4All mantienen tus prompts fuera de servidores externos cuando ejecutas modelos locales, pero eso no hace que tu configuración sea automáticamente segura. La telemetría, los archivos de modelos no confiables, las versiones sin parchear y las APIs expuestas pueden seguir filtrando datos. Esta lista de verificación muestra cómo proteger un LLM local en menos de 10 minutos.',
    metaDescription: '¿Es seguro LM Studio? ¿Y Ollama? Checklist de 12 pasos: qué envía cada herramienta, el parche de CVE-2026-7482 en Ollama, telemetría y puerto 11434.',
    heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-es.webp',
    twitterDescription: 'Checklist de 12 pasos para LLMs locales: ¿es seguro LM Studio?, ¿es seguro Ollama?, desactiva telemetría, parchea CVE-2026-7482, aísla el puerto 11434.',
    publishDate: '2026-04-04',
    dateModified: '2026-11-15',
    leadAnswerBlock: '**LM Studio, Ollama, Jan y GPT4All mantienen tus prompts fuera de servidores externos cuando ejecutas modelos locales, pero eso no hace que tu configuración sea automáticamente segura. La telemetría, los archivos de modelos no confiables, las versiones sin parchear y las APIs expuestas pueden seguir filtrando datos. Esta lista de verificación muestra cómo proteger un LLM local en menos de 10 minutos.**',
    audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'privacidad de LLMs locales',
    toc: [
      {
        label: 'Puntos clave',
        anchor: '#key-takeaways',
      },
      {
        label: '¿Son seguros LM Studio, Ollama, Jan y GPT4All?',
        anchor: '#are-lm-studio-ollama-safe',
      },
      {
        label: 'Vulnerabilidades recientes en herramientas de LLMs locales',
        anchor: '#recent-vulnerabilities',
      },
      {
        label: 'Por qué los LLMs locales no son automáticamente privados',
        anchor: '#why-not-automatically-private',
      },
      {
        label: 'Procedencia del modelo: dónde descargar de forma segura',
        anchor: '#model-provenance',
      },
      {
        label: 'Aislamiento de red: bloquear conexiones salientes',
        anchor: '#network-isolation',
      },
      {
        label: 'Configuración de telemetría por herramienta',
        anchor: '#telemetry-settings',
      },
      {
        label: 'Modelo de amenazas',
        anchor: '#threat-model',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: '#faq',
      },
    ],
    sections: {
      areLLMsSecure: {
        id: 'are-llms-private-and-secure',
        title: '¿Son los LLMs locales privados y seguros?',
        content: 'Los LLMs locales son privados por defecto porque los prompts permanecen en tu dispositivo, pero no son automáticamente seguros. Los principales riesgos son la telemetría de las herramientas, los archivos de modelos no confiables y la exposición de red. Una configuración segura requiere deshabilitar la telemetría, verificar las fuentes de los modelos y aislar el sistema del acceso externo.',
      },
      tldr: {
        id: 'key-takeaways',
        title: '¿Cuáles son los puntos clave?',
        isTldr: true,
        items: [
          'Los 5 pasos imprescindibles: (1) sin acceso a internet para el proceso del modelo, (2) archivos de modelo verificados con SHA-256 antes de cargarlos, (3) endpoints de la API enlazados solo a localhost y la herramienta en una versión parcheada, (4) registros de prompts cifrados o desactivados por completo, (5) ningún plugin de terceros sin revisar su código fuente.',
          '¿Son seguros LM Studio, Ollama, Jan y GPT4All? Sí en cuanto a privacidad de prompts: ninguno envía los prompts del chat a un proveedor de modelos cuando ejecutas un modelo local. Un uso seguro también requiere versiones actualizadas, el puerto de la API cerrado y archivos de modelo confiables.',
          'La inferencia local mantiene los datos de los prompts fuera de servidores de terceros. Los riesgos restantes son: telemetría de la herramienta de inferencia, archivos de modelos de fuentes no confiables, versiones sin parchear y la API de Ollama expuesta en la red.',
          'Actualiza Ollama a la versión 0.17.1 o posterior: CVE-2026-7482 ("Bleeding Llama", de gravedad crítica) permitía a un atacante sin autenticación leer la memoria del proceso desde una API de Ollama expuesta.',
          'Ollama se enlaza a localhost por defecto -- no es accesible desde otros dispositivos a menos que establezcas explícitamente OLLAMA_HOST=0.0.0.0.',
          'Verifica qué envía LM Studio: según su política de privacidad no incluye telemetría, pero las comprobaciones de actualización y la búsqueda de modelos envían datos anonimizados. Rechaza la telemetría de GPT4All en el primer inicio (es opt-in) y bloquea el tráfico saliente tras descargar los modelos.',
          'Descarga los pesos del modelo únicamente desde Hugging Face (huggingface.co) o la biblioteca oficial de Ollama. Verifica los checksums SHA256 para implementaciones sensibles.',
          'Para datos regulados (HIPAA, GDPR, privilegio legal): habilita el cifrado de disco completo, usa una máquina con air-gap y audita todas las extensiones instaladas.',
        ],
      },
      toolSafety: {
        id: 'are-lm-studio-ollama-safe',
        title: '¿Son seguros LM Studio, Ollama, Jan y GPT4All?',
        content: [
          '**Sí en cuanto a privacidad de prompts: ninguna de las cuatro herramientas envía los prompts de tus chats a un proveedor de modelos cuando ejecutas un modelo local.** Lo que cambia es la huella de red de cada herramienta y lo que conviene comprobar.',
        ],
        items: [
          '**LM Studio:** la [política de privacidad de LM Studio](https://lmstudio.ai/app-privacy) indica que la app "no incluye telemetría ni seguimiento específico de usuarios" y que no gestiona tus chats ni documentos salvo que uses los servicios en la nube de LM Studio. Las comprobaciones de actualización y la búsqueda de modelos envían datos limitados y anonimizados. Activa "Serve on Local Network" solo cuando otros dispositivos necesiten la API.',
          '**Ollama:** según las [preguntas frecuentes de Ollama](https://docs.ollama.com/faq) ("We don\'t see your prompts or data when you run locally", es decir, no ven tus prompts ni tus datos cuando lo ejecutas en local), el servidor se enlaza por defecto a 127.0.0.1 en el puerto 11434. Los modelos en la nube y la búsqueda web son funciones opcionales que envían prompts a los servidores de Ollama; establece `OLLAMA_NO_CLOUD=1` para desactivarlas. Mantenlo actualizado (consulta la sección de vulnerabilidades más abajo).',
          '**Jan:** código abierto con licencia Apache 2.0 ([GitHub](https://github.com/janhq/jan)). Su [página de privacidad](https://docs.jan.ai/desktop/privacy) indica que la analítica es opt-in ("Zero data collection until you say so", es decir, ninguna recopilación de datos hasta que tú lo decidas), se elige en el primer inicio y que tus chats siguen siendo tuyos. Si conectas un proveedor en la nube, tus mensajes se envían a ese proveedor.',
          '**GPT4All:** la telemetría y el uso compartido de chats con el Datalake son opt-in. Recházalos ambos en el primer inicio y revisa los ajustes después.',
          '**Para las cuatro:** bloquea el tráfico saliente una vez descargados los modelos, usa archivos de modelo solo de publicadores conocidos y mantén la app en una versión actual.',
        ],
      },
      recentVulns: {
        id: 'recent-vulnerabilities',
        title: '¿Qué vulnerabilidades recientes afectan a las herramientas de LLMs locales?',
        content: [
          '**En 2026 se divulgaron dos conjuntos de vulnerabilidades de Ollama: uno es explotable a través de una API expuesta y el otro a través del actualizador de Windows.** Ejecutar en local no hace seguro un software sin parchear.',
        ],
        items: [
          '**CVE-2026-7482 ("Bleeding Llama"):** una lectura fuera de límites en el heap del cargador de modelos GGUF de Ollama, corregida en Ollama 0.17.1; [The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html) informa de una puntuación CVSS de 9.1. Un atacante sin autenticación que pueda alcanzar la API puede subir un archivo GGUF manipulado y leer la memoria del proceso, que puede incluir variables de entorno, claves de API y datos de conversaciones. Una instalación enlazada a localhost no es accesible desde la red; las instancias expuestas sí.',
          '**CVE-2026-42248 y CVE-2026-42249 (CVSS 7.7 cada una):** el actualizador de Ollama para Windows no verifica el binario de actualización y construye su ruta de preparación a partir de las cabeceras de la respuesta HTTP. [CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248) enumera las versiones 0.12.10 a 0.17.5 y no indicó ninguna versión corregida en el momento de la divulgación; otros informes dan un límite superior mayor. El atacante necesita controlar el servidor de actualizaciones con el que contacta el cliente. Hasta que se confirme una corrección en las notas de versión de Ollama, los usuarios de Windows pueden desactivar las actualizaciones automáticas e instalar las nuevas versiones manualmente desde la descarga oficial.',
          '**Cómo comprobar tu configuración:** ejecuta `ollama --version` y actualiza si es inferior a 0.17.1. Confirma que `OLLAMA_HOST` no esté establecido en 0.0.0.0 e intenta acceder al puerto 11434 desde otro dispositivo de tu red; la conexión debería ser rechazada.',
        ],
      },
      whyNotAutoPrivate: {
        id: 'why-not-automatically-private',
        title: '¿Por qué los LLMs locales no son automáticamente privados?',
        content: [
          '**La inferencia del modelo en sí es privada -- al ejecutar un modelo local, tus prompts no se envían a los servidores del proveedor del modelo.** Pero otros tres flujos de datos pueden filtrar información:',
        ],
        items: [
          '**Telemetría de aplicaciones**: LM Studio indica en su política de privacidad que no incluye telemetría ni seguimiento de usuarios, pero las comprobaciones de actualización y la búsqueda de modelos envían datos anonimizados. La telemetría de GPT4All es opt-in. Otras herramientas pueden recopilar análisis de uso; verifica con un firewall.',
          '**Fuentes de descarga de modelos**: los archivos GGUF maliciosos pueden contener código que se ejecuta durante la carga del modelo en motores de inferencia vulnerables. Un archivo de modelo no verificado es un riesgo de cadena de suministro.',
          '**Exposición de red**: el servidor API de Ollama es accesible para cualquier proceso en tu máquina. Si se configura incorrectamente con `OLLAMA_HOST=0.0.0.0`, se vuelve accesible a toda tu red sin autenticación.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '¿Son los LLMs locales más seguros que las APIs en la nube?',
        content: 'Los LLMs locales son más seguros para la privacidad porque los datos permanecen en tu dispositivo, mientras que las APIs en la nube envían los prompts a servidores externos. Sin embargo, las configuraciones locales requieren configuración de seguridad manual, mientras que los proveedores en la nube se encargan de la seguridad de la infraestructura. El verdadero equilibrio es la autonomía de privacidad frente a la seguridad delegada.',
      },
      misconceptions: {
        id: 'common-misconceptions',
        title: '¿Cuáles son los conceptos erróneos comunes sobre la seguridad de los LLMs locales?',
        items: [
          '"Los LLMs locales son automáticamente seguros" → falso, la configuración importa más',
          '"Sin internet = sin riesgo" → falso, los archivos maliciosos y plugins siguen aplicándose',
          '"Código abierto = seguro" → falso, el código aún debe verificarse',
        ],
      },
      risks: {
        id: 'security-risks',
        title: '¿Cuáles son los mayores riesgos de seguridad en los LLMs locales?',
        items: [
          '**Fugas de telemetría** → algunas herramientas envían datos de uso; LM Studio envía solicitudes de actualización y búsqueda de modelos',
          '**Archivos de modelos maliciosos** → los archivos GGUF no verificados pueden introducir riesgos',
          '**Exposición de red** → las APIs como Ollama pueden quedar expuestas si están mal configuradas',
        ],
      },
      quickChecklist: {
        id: 'quick-checklist',
        title: '¿Qué debes hacer en los primeros 5 minutos?',
        numberedItems: [
          'Deshabilitar la telemetría en tu herramienta',
          'Descargar modelos solo desde Hugging Face o Ollama',
          'Verificar que la API esté enlazada solo a localhost',
          'Habilitar el cifrado de disco completo',
          'No exponer puertos a internet',
        ],
      },
      checklist: {
        title: '¿Qué incluye la lista de verificación de seguridad para LLMs locales?',
        content: '**Verifica cada elemento a continuación antes de trabajar con datos sensibles o regulados.** La lista cubre las brechas de privacidad y seguridad más comunes en configuraciones de Ollama, LM Studio, Jan AI y GPT4All.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Una lista de verificación de seguridad para LLMs locales: aislar el acceso a la red, verificar el SHA-256 de los archivos de modelo, enlazar la API a localhost, cifrar o desactivar los registros de prompts y auditar todos los plugins de terceros.',
          },
          {
            type: 'plain-terms',
            text: 'Los LLMs locales son privados por defecto solo si están bien configurados — los 5 pasos anteriores cubren las principales superficies de ataque de una configuración de inferencia local.',
          },
        ],
        numberedItems: [
          {
            title: 'Descarga modelos solo desde fuentes confiables',
            whyItMatters: 'Previene archivos de modelos maliciosos de fuentes no confiables.',
          },
          {
            title: 'Verifica los checksums del modelo para uso sensible',
            whyItMatters: 'Garantiza que los archivos de modelo descargados no hayan sido manipulados.',
          },
          {
            title: 'Deshabilita la telemetría en tu herramienta de inferencia',
            whyItMatters: 'Evita que se recopilen datos de uso e información de sesión.',
          },
          {
            title: 'Confirma que Ollama esté enlazado solo a localhost',
            whyItMatters: 'Evita que la API quede expuesta a otros dispositivos en tu red.',
          },
          {
            title: 'Habilita el cifrado de disco completo',
            whyItMatters: 'Protege los pesos del modelo y los registros de chat si el dispositivo se pierde o es robado.',
          },
          {
            title: 'Almacena los registros de chat sensibles en una carpeta cifrada',
            whyItMatters: 'Protege el historial de conversaciones con datos sensibles contra acceso no autorizado.',
          },
          {
            title: 'Revisa las extensiones y plugins instalados',
            whyItMatters: 'Evita que extensiones de terceros maliciosas accedan a la red.',
          },
          {
            title: 'Usa una cuenta de usuario dedicada para el trabajo con LLMs',
            whyItMatters: 'Aísla los archivos del modelo, el historial de chat y las claves API de tu perfil principal.',
          },
          {
            title: 'No expongas la API local a internet',
            whyItMatters: 'Evita el acceso remoto no autorizado a tu motor de inferencia local.',
          },
          {
            title: 'Audita los system prompts en cualquier app que use LLMs locales',
            whyItMatters: 'Previene la exfiltración de datos a través de extensiones del navegador o integraciones de herramientas de productividad.',
          },
          {
            title: 'Mantén actualizadas las herramientas de inferencia',
            whyItMatters: 'Parchea vulnerabilidades conocidas, por ejemplo CVE-2026-7482 de Ollama (corregida en 0.17.1).',
          },
          {
            title: 'Para entornos air-gapped o regulados: documenta las versiones de modelo aprobadas',
            whyItMatters: 'Garantiza el cumplimiento de los requisitos regulatorios para el manejo de datos y el aislamiento de infraestructura.',
          },
        ],
        image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-es.webp',
        imageCaption: 'Verifica cada punto antes de trabajar con datos sensibles o regulados.',
      },
      modelProvenance: {
        id: 'model-provenance',
        title: '¿Dónde descargar los modelos de LLMs locales de forma segura?',
        content: [
          '**Los pesos del modelo son archivos binarios grandes.** Un archivo GGUF mal formado puede aprovechar errores en el parser que lo carga: CVE-2026-7482 fue una lectura fuera de límites en el heap del cargador GGUF de Ollama, corregida en Ollama 0.17.1.',
        ],
        items: [
          '**Hugging Face** (huggingface.co): la fuente principal para modelos abiertos. Cada archivo tiene un hash SHA256 verificado. Limítate a modelos de publicadores reconocidos (Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba).',
          '**Biblioteca de Ollama** ([ollama.com/library](https://ollama.com/library)): Ollama verifica los hashes de los modelos antes de almacenarlos. Descarga desde la biblioteca oficial o desde publicadores en los que confíes.',
          '**Navegador de modelos de LM Studio**: busca directamente en Hugging Face. Se aplican las mismas reglas de confianza -- verifica la cuenta del publicador.',
          '**Evita**: sitios de intercambio de archivos anónimos, archivos compartidos en Discord y cualquier fuente que no proporcione un hash verificable.',
        ],
      },
      networkIsolation: {
        id: 'network-isolation',
        title: '¿Cómo bloquear las conexiones salientes de los LLMs locales?',
        content: '**Bloquea las conexiones salientes después de descargar el modelo para evitar que la herramienta de inferencia haga llamadas al exterior.** En macOS, usa el firewall `pf`; en Linux, usa `ufw` u OpenSnitch:',
        codeBlock: '# macOS -- block Ollama outbound with pf firewall\n# Add to /etc/pf.conf:\nblock out proto tcp from any to any user ollama\n\n# Linux -- block with ufw\nsudo ufw deny out from any to any app ollama\n\n# Or use Little Snitch (macOS) / OpenSnitch (Linux)\n# for per-application network control with a GUI',
        codeLanguage: 'bash',
      },
      telemetry: {
        id: 'telemetry-settings',
        title: '¿Cómo deshabilitar la telemetría en las herramientas de LLMs locales?',
        rows: [
          {
            Herramienta: '[Ollama](https://ollama.com)',
            'Telemetría por defecto': 'Ninguna en local; la nube es opcional',
            'Cómo confirmar/deshabilitar': 'OLLAMA_NO_CLOUD=1 desactiva funciones en la nube',
          },
          {
            Herramienta: '[LM Studio](https://lmstudio.ai)',
            'Telemetría por defecto': 'Ninguna (política); actualización/búsqueda anónimas',
            'Cómo confirmar/deshabilitar': 'Nada que desactivar; verifica con un firewall',
          },
          {
            Herramienta: '[Jan AI](https://jan.ai)',
            'Telemetría por defecto': 'Analítica opt-in, elegida en el primer inicio',
            'Cómo confirmar/deshabilitar': 'Recházala al primer inicio; código abierto',
          },
          {
            Herramienta: '[GPT4All](https://nomic.ai/gpt4all)',
            'Telemetría por defecto': 'Solo opt-in en el primer lanzamiento',
            'Cómo confirmar/deshabilitar': 'Recházalo al primer inicio; verifica con un firewall',
          },
        ],
        columns: ['Herramienta', 'Telemetría por defecto', 'Cómo confirmar/deshabilitar'],
      },
      threatModel: {
        id: 'threat-model',
        title: '¿Qué modelo de amenazas debes asumir?',
        content: [
          '**Asume que tu entorno de LLM local puede filtrar datos a través de herramientas, plugins o configuraciones incorrectas. Trata el modelo como no confiable — diseña tu configuración de modo que, incluso si el modelo está comprometido, los datos sensibles no puedan ser accedidos ni transmitidos. Esto significa aislar la herramienta de inferencia de internet, deshabilitar la telemetría y restringir el acceso al sistema de archivos.**',
          'La seguridad no es solo sobre privacidad de datos — la inyección de prompts es un vector de ataque independiente donde la entrada maliciosa manipula el comportamiento del modelo. Para técnicas de defensa contra inyecciones que aplican tanto a modelos locales como en la nube, consulta [inyección de prompts y seguridad](https://www.promptquorum.com/es/prompt-engineering/prompt-injection-and-security).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '¿Cuáles son las preguntas de seguridad más comunes sobre los LLMs locales?',
        faqs: [
          {
            q: '¿Puede un LLM local acceder a mis archivos o a internet?',
            a: 'No -- el modelo en sí es un archivo estático que genera texto. No tiene capacidad para leer tu sistema de archivos ni hacer solicitudes de red. Sin embargo, la herramienta de inferencia que ejecuta el modelo (Ollama, LM Studio) tiene acceso normal a nivel de sistema operativo. Algunas herramientas incluyen funciones que sí leen archivos -- como LocalDocs de GPT4All o la función de adjuntar archivos de LM Studio. Estas funciones son opt-in y están explícitamente documentadas.',
          },
          {
            q: '¿Es seguro usar un LLM local con datos cubiertos por HIPAA?',
            a: 'La inferencia local elimina el riesgo del procesador de datos de terceros que crean las APIs en la nube. Sin embargo, el cumplimiento de HIPAA requiere más que inferencia privada -- necesitas cifrado de disco completo, controles de acceso, registro de auditoría y un Acuerdo de Socio Comercial si algún proveedor de software pudiera acceder a PHI. Usar Ollama con FileVault habilitado y telemetría deshabilitada es un punto de partida razonable, pero el cumplimiento formal de HIPAA requiere una evaluación de riesgos completa.',
          },
          {
            q: '¿Ollama envía mis prompts a algún lugar?',
            a: 'No cuando ejecutas modelos locales. Las preguntas frecuentes de Ollama indican "We don\'t see your prompts or data when you run locally" (no vemos tus prompts ni tus datos cuando lo ejecutas en local). Los modelos en la nube y la búsqueda web de Ollama son opcionales y sí envían prompts a los servidores de Ollama; establece `OLLAMA_NO_CLOUD=1` para desactivarlos. El tráfico saliente esperable de una configuración local son las descargas de modelos con `ollama pull` y las comprobaciones de actualización. Ollama es código abierto ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
          },
          {
            q: '¿Es usar un LLM local más privado que usar la API de OpenAI?',
            a: 'Sí, en cuanto a privacidad de prompts. Con un LLM local, tus prompts nunca salen de tu máquina. La API de OpenAI envía los prompts a los servidores de OpenAI para su procesamiento. Los Términos de Servicio de la API de OpenAI indican que la entrada/salida de la API no se usa para entrenar modelos por defecto, pero los datos sí transitan por su infraestructura. Para datos sensibles o regulados (médicos, legales, financieros), la inferencia local es la opción más conservadora.',
          },
          {
            q: '¿Cómo verifico que un archivo de modelo descargado es seguro?',
            a: 'Descarga modelos solo desde Hugging Face (huggingface.co) o la biblioteca oficial de Ollama. En Hugging Face, cada archivo muestra un hash SHA256 -- verifícalo con `sha256sum <model_file>` después de descargar. Limítate a modelos de publicadores conocidos: Meta, Google, Microsoft, Mistral AI y Qwen/Alibaba. Evita archivos compartidos anónimamente o en Discord.',
          },
          {
            q: '¿Cuál es la diferencia entre privacidad y seguridad para los LLMs locales?',
            a: 'Privacidad significa que tus prompts y salidas no son accesibles a terceros. Seguridad significa que tu sistema está protegido contra amenazas. Un LLM local puede ser privado (ningún dato sale de tu máquina) pero inseguro (modelo descargado de una fuente no confiable, o API de Ollama expuesta en la red). Ambos deben abordarse de forma independiente.',
          },
          {
            q: '¿Puedo usar un LLM local para datos regulados por GDPR?',
            a: 'La inferencia local reduce significativamente el riesgo de GDPR porque los datos no salen de tu infraestructura. Sin embargo, aún debes verificar que la herramienta de inferencia (Ollama, LM Studio) no envíe tráfico de red inesperado, que el cifrado de disco esté habilitado y que los controles de acceso estén en su lugar. Para los requisitos de DPIA del Artículo 35, documenta tu configuración de procesamiento de datos y confirma que ningún dato personal transite por servidores de terceros.',
          },
          {
            q: '¿Es seguro usar LM Studio?',
            a: 'Sí en cuanto a privacidad de prompts: según la política de privacidad de LM Studio, los chats y documentos permanecen en tu dispositivo salvo que uses los servicios en la nube de LM Studio, y la app no incluye telemetría ni seguimiento específico de usuarios. Los riesgos restantes son los de cualquier herramienta local: archivos de modelo de publicadores no confiables, una API local abierta a la red con "Serve on Local Network" y una versión desactualizada de la app. Descarga los modelos de publicadores conocidos de Hugging Face, activa ese ajuste solo cuando lo necesites y mantén la app actualizada.',
          },
          {
            q: '¿LM Studio recopila datos o los envía a sus servidores?',
            a: 'La política de privacidad de LM Studio indica que la aplicación no incluye telemetría ni seguimiento específico de usuarios. Las comprobaciones de actualización envían la versión de la app, el sistema operativo y la IP (vía CDN), y la búsqueda y descarga de modelos envían consultas de búsqueda anonimizadas. El contenido de los chats y documentos no se procesa salvo que uses los servicios en la nube de LM Studio. No hay ningún ajuste de datos de uso que desactivar; verifica con un firewall o una captura de paquetes.',
          },
          {
            q: '¿Es seguro usar Ollama?',
            a: 'Sí para prompts locales, si lo mantienes actualizado y fuera de la red. Ollama indica que no ve tus prompts ni tus datos cuando lo ejecutas en local y que se enlaza por defecto a 127.0.0.1. Las vulnerabilidades son el principal riesgo: CVE-2026-7482 afectaba a las versiones anteriores a 0.17.1 y era explotable a través de una API accesible, y en 2026 se informó de dos fallos del actualizador de Windows (CVE-2026-42248 y CVE-2026-42249). Actualiza, mantén el puerto 11434 cerrado a otros dispositivos y consulta las notas de versión por si hay correcciones del actualizador.',
          },
          {
            q: '¿Cómo evito que otros dispositivos en mi red accedan a Ollama?',
            a: 'Por defecto, Ollama se enlaza a localhost (127.0.0.1:11434) y no es accesible desde otros dispositivos. Si anteriormente configuraste OLLAMA_HOST=0.0.0.0 para permitir acceso en red, reviértelo: `export OLLAMA_HOST=127.0.0.1:11434`. Verifica el aislamiento intentando conectarte desde otro dispositivo en tu red -- debería fallar.',
          },
          {
            q: '¿Qué herramienta de LLM local es mejor para máxima privacidad?',
            a: 'Según sus valores por defecto publicados, Jan AI es la más restrictiva de las cuatro: código abierto completo (licencia Apache 2.0) con analítica opt-in que se elige en el primer inicio. Ollama es la siguiente: código abierto, se enlaza a localhost por defecto y las funciones en la nube se pueden desactivar con `OLLAMA_NO_CLOUD=1`. LM Studio no tiene telemetría según su política de privacidad, pero las comprobaciones de actualización y la búsqueda de modelos envían datos anonimizados.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '¿Dónde puedes encontrar fuentes adicionales?',
        items: [
          '**OWASP Top 10 para Aplicaciones LLM** ([owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)) -- Riesgos de seguridad para implementaciones de LLMs incluyendo inyección de prompts y ataques a la cadena de suministro',
          '**Documentación de Hugging Face Model Card** (huggingface.co/docs/hub/model-cards) -- Estándares de procedencia de modelos y verificación de hashes SHA256',
          '**VeraCrypt** (veracrypt.fr) -- Cifrado de disco completo y carpetas de código abierto para Windows, macOS y Linux',
          '**Preguntas frecuentes de Ollama** ([docs.ollama.com/faq](https://docs.ollama.com/faq)) -- dirección de enlace por defecto, funciones en la nube y el ajuste `OLLAMA_NO_CLOUD`',
          '**Política de privacidad de LM Studio** ([lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)) -- qué recopila la app y cuándo',
          '**Página de privacidad de Jan** ([docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)) -- analítica opt-in',
          '**The Hacker News, informe sobre la vulnerabilidad de Ollama** ([thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)) -- CVE-2026-7482 y los fallos del actualizador de Windows',
          '**Aviso de CERT Polska** ([cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)) -- versiones afectadas por CVE-2026-42248 y CVE-2026-42249',
        ],
      },
      commonMistakes: {
        title: '¿Cuáles son los errores de seguridad más comunes en LLMs locales?',
        content: '**La mayoría de los fallos de seguridad en LLMs locales provienen de descuidos de configuración, no de vulnerabilidades del modelo.** Estos son los seis errores más frecuentes y cómo corregir cada uno.',
        items: [
          '**Error:** Descargar modelos de sitios de terceros (Discord, GitHub releases aleatorios). **Solución:** Usa solo Hugging Face (huggingface.co) o la biblioteca de Ollama. Verifica con `sha256sum`.',
          '**Error:** Asumir que inferencia local = privacidad total. **Solución:** Bloquea el tráfico saliente tras descargar el modelo, inspecciona LM Studio y GPT4All con un firewall y rechaza la telemetría de GPT4All en el primer inicio. Ejecuta `netstat -an | grep 11434` para confirmar que no hay puertos inesperados.',
          '**Error:** Dejar `OLLAMA_HOST=0.0.0.0` activo después de pruebas. **Solución:** Revierte: `export OLLAMA_HOST=127.0.0.1:11434`. Prueba desde otro dispositivo -- la conexión debe ser rechazada.',
          '**Error:** Omitir el cifrado de disco para cargas de trabajo HIPAA/GDPR. **Solución:** Habilita FileVault (macOS) o BitLocker (Windows). Cifra la carpeta de registros de chat de LM Studio por separado.',
          '**Error:** No revisar las extensiones de terceros en Open WebUI o Jan AI. **Solución:** Audita las extensiones instaladas mensualmente. Elimina cualquiera que solicite acceso a la red que no reconozcas.',
          '**Error:** Seguir con una versión antigua de Ollama tras divulgarse una vulnerabilidad. **Solución:** Ejecuta `ollama --version` y actualiza a 0.17.1 o posterior. En Windows, revisa además los avisos sobre el actualizador en la sección de vulnerabilidades de más arriba.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '¿Cuáles son las consideraciones de cumplimiento regional?',
        content: '**La inferencia local de LLMs reduce el riesgo de residencia de datos, pero el cumplimiento regulatorio completo requiere controles adicionales por región.** Esta sección es información general y no constituye asesoramiento legal; confirma los requisitos con un abogado o un delegado de protección de datos.',
        items: [
          '**UE / GDPR (2018):** La inferencia local puede eliminar la relación de encargado del tratamiento del Artículo 28 con un proveedor de modelos en el paso de inferencia. Aún debes verificar con un firewall el tráfico de red de LM Studio, habilitar el cifrado de disco y documentar tu configuración de procesamiento de datos para cualquier DPIA. Realiza una evaluación de interés legítimo antes de procesar datos personales.',
          '**Estados Unidos / HIPAA:** HIPAA requiere salvaguardas para PHI: cifrado de disco completo (el "puerto seguro de cifrado"), controles de acceso y registro de auditoría. Ollama con FileVault habilitado y telemetría deshabilitada es un punto de partida razonable para HIPAA. El cumplimiento formal requiere una evaluación de riesgos completa.',
          '**Japón / APPI (2022):** La Ley de Protección de Información Personal requiere protección de datos personales durante el procesamiento. La inferencia local en una máquina con air-gap puede ayudar a cumplir los requisitos de localización de datos. Deshabilita las verificaciones de actualización de Ollama y verifica con un firewall el tráfico de red de LM Studio como parte de tu evaluación de APPI.',
          '**China / PIPL (2021):** Ejecutar un LLM local para uso interno por lo general no requiere registro en la CAC; confírmalo con asesoría legal. Si implementas un LLM local como servicio público en China, se requiere el registro de algoritmos de la CAC.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '¿Qué más deberías leer?',
        items: [
          '[¿Qué son los LLMs locales?](/es/local-llms/what-are-local-llms) -- Conceptos principales y componentes',
          '[LLMs locales vs APIs en la nube](/es/local-llms/local-llms-vs-cloud-apis) -- Compensaciones de privacidad',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- Instalación y configuración',
          '[Cómo ejecutar LLMs locales en un portátil](/es/local-llms/local-llm-on-laptop) -- Configuración segura para portátiles',
          '[Instaladores de un clic para LLMs locales](/es/local-llms/local-llm-one-click-installers) -- Compara LM Studio, Ollama, Jan AI y GPT4All en privacidad y facilidad de uso',
          '[Solución de problemas en la configuración de LLMs locales](/es/local-llms/troubleshooting-local-llm-setup) -- Corrige errores comunes incluyendo el puerto 11434 rechazado y GPU no detectada',
          '[IA local detrás del firewall / sin conexión (2026)](/es/power-local-llm/local-ai-behind-firewall-offline-2026) -- Ollama en air-gap: aislamiento de red, registro de auditoría y configuración sin internet.',
          '[Mejor VPN para desarrollo de IA en China (2026)](/es/prompt-bites/best-vpn-for-ai-development-china-2026) -- Accede a Hugging Face, GitHub y registros de modelos desde detrás del firewall.',
          '[Preparación SOC 2 e ISO 27001 para LLMs autoalojados](/es/local-llms/soc2-iso27001-self-hosted-llm-compliance) -- la versión de marco de auditoría formal de esta checklist para oficiales de cumplimiento.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lista de Verificación de Seguridad y Privacidad para LLMs Locales: 12 Pasos para una Configuración Segura',
      description: 'Lista de 12 pasos para la privacidad de LLMs locales en 2026: procedencia del modelo, opt-out de telemetría, aislamiento de red, cifrado de disco y controles de acceso.',
      url: 'https://www.promptquorum.com/es/local-llms/local-llm-security-privacy-checklist',
      datePublished: '2026-04-04',
      dateModified: '2026-11-15',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'privacidad de LLMs locales',
        },
        {
          '@type': 'Thing',
          name: 'seguridad de LLMs',
        },
        {
          '@type': 'Thing',
          name: 'telemetría de Ollama',
        },
        {
          '@type': 'Thing',
          name: 'procedencia del modelo',
        },
        {
          '@type': 'Thing',
          name: 'cifrado de disco',
        },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desarrolladores y profesionales de TI que ejecutan LLMs locales',
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Puede un LLM local acceder a mis archivos o a internet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No -- el modelo en sí es un archivo estático que genera texto. No tiene capacidad para leer tu sistema de archivos ni hacer solicitudes de red. Sin embargo, la herramienta de inferencia que ejecuta el modelo (Ollama, LM Studio) tiene acceso normal a nivel de sistema operativo. Algunas herramientas incluyen funciones que sí leen archivos -- como LocalDocs de GPT4All o la función de adjuntar archivos de LM Studio. Estas funciones son opt-in y están explícitamente documentadas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es seguro usar un LLM local con datos cubiertos por HIPAA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La inferencia local elimina el riesgo del procesador de datos de terceros que crean las APIs en la nube. Sin embargo, el cumplimiento de HIPAA requiere más que inferencia privada -- necesitas cifrado de disco completo, controles de acceso, registro de auditoría y un Acuerdo de Socio Comercial si algún proveedor de software pudiera acceder a PHI. Usar Ollama con FileVault habilitado y telemetría deshabilitada es un punto de partida razonable, pero el cumplimiento formal de HIPAA requiere una evaluación de riesgos completa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Ollama envía mis prompts a algún lugar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No cuando ejecutas modelos locales. Las preguntas frecuentes de Ollama indican "We don\'t see your prompts or data when you run locally" (no vemos tus prompts ni tus datos cuando lo ejecutas en local). Los modelos en la nube y la búsqueda web de Ollama son opcionales y sí envían prompts a los servidores de Ollama; establece `OLLAMA_NO_CLOUD=1` para desactivarlos. El tráfico saliente esperable de una configuración local son las descargas de modelos con `ollama pull` y las comprobaciones de actualización. Ollama es código abierto ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es usar un LLM local más privado que usar la API de OpenAI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, en cuanto a privacidad de prompts. Con un LLM local, tus prompts nunca salen de tu máquina. La API de OpenAI envía los prompts a los servidores de OpenAI para su procesamiento. Los Términos de Servicio de la API de OpenAI indican que la entrada/salida de la API no se usa para entrenar modelos por defecto, pero los datos sí transitan por su infraestructura. Para datos sensibles o regulados (médicos, legales, financieros), la inferencia local es la opción más conservadora.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo verifico que un archivo de modelo descargado es seguro?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Descarga modelos solo desde Hugging Face (huggingface.co) o la biblioteca oficial de Ollama. En Hugging Face, cada archivo muestra un hash SHA256 -- verifícalo con `sha256sum <model_file>` después de descargar. Limítate a modelos de publicadores conocidos: Meta, Google, Microsoft, Mistral AI y Qwen/Alibaba. Evita archivos compartidos anónimamente o en Discord.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuál es la diferencia entre privacidad y seguridad para los LLMs locales?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Privacidad significa que tus prompts y salidas no son accesibles a terceros. Seguridad significa que tu sistema está protegido contra amenazas. Un LLM local puede ser privado (ningún dato sale de tu máquina) pero inseguro (modelo descargado de una fuente no confiable, o API de Ollama expuesta en la red). Ambos deben abordarse de forma independiente.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usar un LLM local para datos regulados por GDPR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La inferencia local reduce significativamente el riesgo de GDPR porque los datos no salen de tu infraestructura. Sin embargo, aún debes verificar que la herramienta de inferencia (Ollama, LM Studio) no envíe tráfico de red inesperado, que el cifrado de disco esté habilitado y que los controles de acceso estén en su lugar. Para los requisitos de DPIA del Artículo 35, documenta tu configuración de procesamiento de datos y confirma que ningún dato personal transite por servidores de terceros.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es seguro usar LM Studio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí en cuanto a privacidad de prompts: según la política de privacidad de LM Studio, los chats y documentos permanecen en tu dispositivo salvo que uses los servicios en la nube de LM Studio, y la app no incluye telemetría ni seguimiento específico de usuarios. Los riesgos restantes son los de cualquier herramienta local: archivos de modelo de publicadores no confiables, una API local abierta a la red con "Serve on Local Network" y una versión desactualizada de la app. Descarga los modelos de publicadores conocidos de Hugging Face, activa ese ajuste solo cuando lo necesites y mantén la app actualizada.',
          },
        },
        {
          '@type': 'Question',
          name: '¿LM Studio recopila datos o los envía a sus servidores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La política de privacidad de LM Studio indica que la aplicación no incluye telemetría ni seguimiento específico de usuarios. Las comprobaciones de actualización envían la versión de la app, el sistema operativo y la IP (vía CDN), y la búsqueda y descarga de modelos envían consultas de búsqueda anonimizadas. El contenido de los chats y documentos no se procesa salvo que uses los servicios en la nube de LM Studio. No hay ningún ajuste de datos de uso que desactivar; verifica con un firewall o una captura de paquetes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es seguro usar Ollama?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí para prompts locales, si lo mantienes actualizado y fuera de la red. Ollama indica que no ve tus prompts ni tus datos cuando lo ejecutas en local y que se enlaza por defecto a 127.0.0.1. Las vulnerabilidades son el principal riesgo: CVE-2026-7482 afectaba a las versiones anteriores a 0.17.1 y era explotable a través de una API accesible, y en 2026 se informó de dos fallos del actualizador de Windows (CVE-2026-42248 y CVE-2026-42249). Actualiza, mantén el puerto 11434 cerrado a otros dispositivos y consulta las notas de versión por si hay correcciones del actualizador.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo evito que otros dispositivos en mi red accedan a Ollama?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Por defecto, Ollama se enlaza a localhost (127.0.0.1:11434) y no es accesible desde otros dispositivos. Si anteriormente configuraste OLLAMA_HOST=0.0.0.0 para permitir acceso en red, reviértelo: `export OLLAMA_HOST=127.0.0.1:11434`. Verifica el aislamiento intentando conectarte desde otro dispositivo en tu red -- debería fallar.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué herramienta de LLM local es mejor para máxima privacidad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Según sus valores por defecto publicados, Jan AI es la más restrictiva de las cuatro: código abierto completo (licencia Apache 2.0) con analítica opt-in que se elige en el primer inicio. Ollama es la siguiente: código abierto, se enlaza a localhost por defecto y las funciones en la nube se pueden desactivar con `OLLAMA_NO_CLOUD=1`. LM Studio no tiene telemetría según su política de privacidad, pero las comprobaciones de actualización y la búsqueda de modelos envían datos anonimizados.',
          },
        },
      ],
    },
  },

  ar: {
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'قائمة التحقق من الأمان والخصوصية لنماذج ⁨LLM⁩ المحلية: ⁨12⁩ خطوة لإعداد آمن',
    seoTitle: 'أمان ⁨LLM⁩ المحلي ⁨2026⁩: هل ⁨LM Studio⁩ آمن؟',
    intro: 'تُبقي أدوات LM Studio وOllama وJan وGPT4All مطالباتك (prompts) بعيدة عن الخوادم الخارجية عند تشغيل نماذج محلية، لكن ذلك لا يجعل إعدادك آمنًا تلقائيًا. لا يزال القياس عن بُعد (telemetry) وملفات النماذج غير الموثوقة والإصدارات غير المحدَّثة وواجهات API المكشوفة قادرة على تسريب البيانات. تُظهر قائمة التحقق هذه كيف تؤمّن نموذج LLM محلي في أقل من 10 دقائق.',
    metaDescription: 'هل ⁨LM Studio⁩ آمن؟ وهل ⁨Ollama⁩ آمن؟ قائمة من ⁨12⁩ خطوة: ما ترسله كل أداة، إصلاح ⁨CVE-2026-7482⁩، القياس عن بُعد والمنفذ ⁨11434⁩.',
    heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-ar.webp',
    twitterDescription: 'قائمة أمان من ⁨12⁩ خطوة لنماذج ⁨LLM⁩ المحلية: هل ⁨LM Studio⁩ آمن؟ هل ⁨Ollama⁩ آمن؟ عطّل القياس عن بُعد، رقّع ⁨CVE-2026-7482⁩، اعزل المنفذ ⁨11434⁩.',
    publishDate: '2026-04-04',
    dateModified: '2026-11-15',
    leadAnswerBlock: '**تُبقي أدوات LM Studio وOllama وJan وGPT4All مطالباتك (prompts) بعيدة عن الخوادم الخارجية عند تشغيل نماذج محلية، لكن ذلك لا يجعل إعدادك آمنًا تلقائيًا. لا يزال القياس عن بُعد (telemetry) وملفات النماذج غير الموثوقة والإصدارات غير المحدَّثة وواجهات API المكشوفة قادرة على تسريب البيانات. تُظهر قائمة التحقق هذه كيف تؤمّن نموذج LLM محلي في أقل من 10 دقائق.**',
    audience: 'المبتدئون الذين يُشغّلون أول نموذج LLM محلي على عتاد استهلاكي',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'خصوصية نماذج LLM المحلية',
    toc: [
      {
        label: 'النقاط الرئيسية',
        anchor: '#key-takeaways',
      },
      {
        label: 'هل LM Studio وOllama وJan وGPT4All آمنة؟',
        anchor: '#are-lm-studio-ollama-safe',
      },
      {
        label: 'ثغرات حديثة في أدوات نماذج LLM المحلية',
        anchor: '#recent-vulnerabilities',
      },
      {
        label: 'لماذا نماذج LLM المحلية ليست خاصة تلقائيًا',
        anchor: '#why-not-automatically-private',
      },
      {
        label: 'مصدر النموذج: من أين تُنزّل بأمان',
        anchor: '#model-provenance',
      },
      {
        label: 'عزل الشبكة: حظر الاتصالات الصادرة',
        anchor: '#network-isolation',
      },
      {
        label: 'إعدادات القياس عن بُعد لكل أداة',
        anchor: '#telemetry-settings',
      },
      {
        label: 'نموذج التهديد',
        anchor: '#threat-model',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: '#faq',
      },
    ],
    sections: {
      areLLMsSecure: {
        id: 'are-llms-private-and-secure',
        title: 'هل نماذج LLM المحلية خاصة وآمنة؟',
        content: 'نماذج LLM المحلية خاصة افتراضيًا لأن المطالبات تبقى على جهازك، لكنها ليست آمنة تلقائيًا. المخاطر الرئيسية هي القياس عن بُعد للأدوات وملفات النماذج غير الموثوقة والتعرّض للشبكة. يتطلب الإعداد الآمن تعطيل القياس عن بُعد والتحقق من مصادر النماذج وعزل النظام عن الوصول الخارجي.',
      },
      tldr: {
        id: 'key-takeaways',
        title: 'ما هي النقاط الرئيسية؟',
        isTldr: true,
        items: [
          'الخطوات الخمس غير القابلة للتفاوض: (1) عدم وصول عملية النموذج إلى الإنترنت، (2) التحقق من ملفات النموذج بـSHA-256 قبل تحميلها، (3) ربط نقاط نهاية API بـlocalhost فقط وإبقاء الأداة على إصدار مُحدَّث، (4) تخزين سجلات المطالبات مشفّرة أو تعطيلها بالكامل، (5) عدم استخدام إضافات طرف ثالث دون مراجعة شيفرتها المصدرية.',
          'هل LM Studio وOllama وJan وGPT4All آمنة؟ نعم من حيث خصوصية المطالبات: لا ترسل أي منها مطالبات المحادثة إلى مزوّد نماذج عند تشغيل نموذج محلي. يتطلب الاستخدام الآمن أيضًا إصدارات حديثة ومنفذ API مغلقًا وملفات نماذج موثوقة.',
          'يُبقي الاستدلال المحلي بيانات المطالبات بعيدة عن خوادم الطرف الثالث. المخاطر المتبقية هي: القياس عن بُعد لأداة الاستدلال، وملفات النماذج من مصادر غير موثوقة، والإصدارات غير المحدَّثة، وواجهة API لـOllama المكشوفة على الشبكة.',
          'حدّث Ollama إلى الإصدار 0.17.1 أو أحدث: أتاحت الثغرة CVE-2026-7482 ("Bleeding Llama"، بتصنيف حرج) لمهاجم غير مصادَق قراءة ذاكرة العملية من واجهة API مكشوفة لـOllama.',
          'يرتبط Ollama بـlocalhost افتراضيًا — وهو غير قابل للوصول من أجهزة أخرى ما لم تضبط صراحةً OLLAMA_HOST=0.0.0.0.',
          'تحقق مما يرسله LM Studio: وفق سياسة الخصوصية لا يتضمن قياسًا عن بُعد، لكن فحوصات التحديث والبحث عن النماذج ترسل بيانات مجهولة الهوية. ارفض القياس عن بُعد في GPT4All عند أول تشغيل (هو اختياري) واحجب الاتصالات الصادرة بعد تنزيل النماذج.',
          'نزّل أوزان النموذج فقط من Hugging Face (huggingface.co) أو مكتبة Ollama الرسمية. تحقق من checksums بصيغة SHA256 للتطبيقات الحساسة.',
          'للبيانات الخاضعة للتنظيم (HIPAA، GDPR، الامتياز القانوني): فعّل تشفير القرص الكامل، استخدم جهازًا معزولًا عن الشبكة (air-gap) ودقّق جميع الإضافات المثبتة.',
        ],
      },
      toolSafety: {
        id: 'are-lm-studio-ollama-safe',
        title: 'هل LM Studio وOllama وJan وGPT4All آمنة للاستخدام؟',
        content: [
          '**نعم من حيث خصوصية المطالبات: لا ترسل أي من الأدوات الأربع مطالبات محادثاتك إلى مزوّد نماذج عند تشغيل نموذج محلي.** ما يختلف هو البصمة الشبكية لكل أداة وما ينبغي أن تتحقق منه.',
        ],
        items: [
          '**LM Studio:** تنص [سياسة خصوصية LM Studio](https://lmstudio.ai/app-privacy) على أن التطبيق "لا يتضمن قياسًا عن بُعد ولا تتبعًا خاصًا بالمستخدم" وأنه لا يعالج محادثاتك ولا مستنداتك إلا إذا استخدمت خدمات LM Studio السحابية. ترسل فحوصات التحديث والبحث عن النماذج بيانات محدودة ومجهولة الهوية. فعّل "Serve on Local Network" فقط عندما تحتاج أجهزة أخرى إلى واجهة API.',
          '**Ollama:** وفق [الأسئلة الشائعة لـOllama](https://docs.ollama.com/faq) ("We don\'t see your prompts or data when you run locally"، أي أنهم لا يرون مطالباتك ولا بياناتك عند التشغيل محليًا)، يرتبط الخادم افتراضيًا بالعنوان 127.0.0.1 والمنفذ 11434. النماذج السحابية والبحث على الويب ميزتان اختياريتان ترسلان المطالبات إلى خوادم Ollama؛ اضبط `OLLAMA_NO_CLOUD=1` لتعطيلهما. أبقِه محدَّثًا (راجع قسم الثغرات أدناه).',
          '**Jan:** مفتوح المصدر برخصة Apache 2.0 ([GitHub](https://github.com/janhq/jan)). تذكر [صفحة الخصوصية](https://docs.jan.ai/desktop/privacy) أن التحليلات اختيارية ("Zero data collection until you say so"، أي لا جمع للبيانات حتى تقرر أنت)، وتُحدَّد عند أول تشغيل، وأن محادثاتك تبقى ملكك. ربط مزوّد سحابي يعني إرسال رسائلك إلى ذلك المزوّد.',
          '**GPT4All:** القياس عن بُعد ومشاركة المحادثات مع Datalake اختياريان. ارفضهما معًا عند أول تشغيل وراجع الإعدادات بعد ذلك.',
          '**للأدوات الأربع جميعًا:** احجب الاتصالات الصادرة بعد تنزيل النماذج، واستخدم ملفات النماذج من ناشرين معروفين فقط، وأبقِ التطبيق على إصدار حديث.',
        ],
      },
      recentVulns: {
        id: 'recent-vulnerabilities',
        title: 'ما الثغرات الحديثة التي تؤثر في أدوات نماذج LLM المحلية؟',
        content: [
          '**كُشف في 2026 عن مجموعتين من ثغرات Ollama: إحداهما قابلة للاستغلال عبر واجهة API مكشوفة والأخرى عبر مُحدِّث Windows.** التشغيل المحلي لا يجعل البرنامج غير المحدَّث آمنًا.',
        ],
        items: [
          '**CVE-2026-7482 ("Bleeding Llama"):** قراءة خارج الحدود في الكومة (heap) داخل محمِّل نماذج GGUF في Ollama، أُصلحت في Ollama 0.17.1؛ يذكر موقع [The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html) درجة CVSS قدرها 9.1. يمكن لمهاجم غير مصادَق يصل إلى واجهة API رفع ملف GGUF مُعدّ خصيصًا وقراءة ذاكرة العملية، وقد تتضمن متغيرات البيئة ومفاتيح API وبيانات المحادثات. التثبيت المرتبط بـlocalhost لا يمكن الوصول إليه من الشبكة؛ أما النسخ المكشوفة فيمكن الوصول إليها.',
          '**CVE-2026-42248 وCVE-2026-42249 (بدرجة CVSS تبلغ 7.7 لكل منهما):** لا يتحقق مُحدِّث Ollama لنظام Windows من الملف التنفيذي للتحديث، ويبني مسار التجهيز المؤقت من ترويسات استجابة HTTP. يدرج [CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248) الإصدارات من 0.12.10 إلى 0.17.5 ولم يذكر إصدارًا مُصلَحًا وقت الإفصاح؛ وتعطي تقارير أخرى حدًا أعلى أكبر. يحتاج المهاجم إلى التحكم في خادم التحديثات الذي يتصل به العميل. إلى أن يُؤكَّد إصلاح في ملاحظات إصدار Ollama، يمكن لمستخدمي Windows تعطيل التحديث التلقائي وتثبيت الإصدارات الجديدة يدويًا من صفحة التنزيل الرسمية.',
          '**كيف تتحقق من إعدادك:** شغّل `ollama --version` وحدّث إذا كان الإصدار أقل من 0.17.1. تأكد من أن `OLLAMA_HOST` غير مضبوط على 0.0.0.0، ثم حاول الوصول إلى المنفذ 11434 من جهاز آخر على شبكتك؛ يجب أن يُرفض الاتصال.',
        ],
      },
      whyNotAutoPrivate: {
        id: 'why-not-automatically-private',
        title: 'لماذا نماذج LLM المحلية ليست خاصة تلقائيًا؟',
        content: [
          '**استدلال النموذج نفسه خاص — عند تشغيل نموذج محلي لا تُرسَل مطالباتك إلى خوادم مزوّد النموذج.** لكن ثلاثة تدفقات بيانات أخرى قد تُسرّب المعلومات:',
        ],
        items: [
          '**القياس عن بُعد للتطبيقات**: تنص سياسة خصوصية LM Studio على أنه لا يتضمن قياسًا عن بُعد ولا تتبعًا خاصًا بالمستخدم، لكن فحوصات التحديث والبحث عن النماذج ترسل بيانات مجهولة الهوية. القياس عن بُعد في GPT4All اختياري. قد تجمع أدوات أخرى تحليلات استخدام، فتحقق بجدار حماية.',
          '**مصادر تنزيل النماذج**: قد تحتوي ملفات GGUF الضارة على شيفرة تُنفَّذ أثناء تحميل النموذج في محركات استدلال ضعيفة. ملف نموذج غير مُتحقق منه يمثّل خطر سلسلة توريد.',
          '**التعرّض للشبكة**: خادم API لـOllama قابل للوصول لأي عملية على جهازك. إذا أُعِدّ بشكل خاطئ بـ`OLLAMA_HOST=0.0.0.0`، يصبح قابلًا للوصول من شبكتك بالكامل دون مصادقة.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'هل نماذج LLM المحلية أكثر أمانًا من واجهات API السحابية؟',
        content: 'نماذج LLM المحلية أكثر أمانًا للخصوصية لأن البيانات تبقى على جهازك، بينما تُرسل واجهات API السحابية المطالبات إلى خوادم خارجية. ومع ذلك، تتطلب الإعدادات المحلية ضبط أمان يدويًا، بينما يتولى مزودو السحابة أمان البنية التحتية. الموازنة الحقيقية هي استقلالية الخصوصية مقابل الأمان المُفوَّض.',
      },
      misconceptions: {
        id: 'common-misconceptions',
        title: 'ما هي المفاهيم الخاطئة الشائعة حول أمان نماذج LLM المحلية؟',
        items: [
          '"نماذج LLM المحلية آمنة تلقائيًا" → خطأ، الإعداد أهم',
          '"بلا إنترنت = بلا خطر" → خطأ، لا تزال الملفات والإضافات الضارة قائمة',
          '"مفتوح المصدر = آمن" → خطأ، لا يزال يجب التحقق من الشيفرة',
        ],
      },
      risks: {
        id: 'security-risks',
        title: 'ما هي أكبر مخاطر الأمان في نماذج LLM المحلية؟',
        items: [
          '**تسريبات القياس عن بُعد** → بعض الأدوات ترسل بيانات استخدام؛ يرسل LM Studio طلبات فحص التحديث والبحث عن النماذج',
          '**ملفات النماذج الضارة** → ملفات GGUF غير المُتحقق منها قد تُدخل مخاطر',
          '**التعرّض للشبكة** → واجهات API مثل Ollama قد تنكشف إذا أُعِدّت بشكل خاطئ',
        ],
      },
      quickChecklist: {
        id: 'quick-checklist',
        title: 'ماذا يجب أن تفعل في الدقائق الخمس الأولى؟',
        numberedItems: [
          'تعطيل القياس عن بُعد في أداتك',
          'تنزيل النماذج فقط من Hugging Face أو Ollama',
          'التحقق من أن واجهة API مرتبطة بـlocalhost فقط',
          'تفعيل تشفير القرص الكامل',
          'عدم كشف المنافذ على الإنترنت',
        ],
      },
      checklist: {
        title: 'ماذا تتضمن قائمة التحقق من الأمان لنماذج LLM المحلية؟',
        content: '**تحقق من كل عنصر أدناه قبل العمل مع بيانات حساسة أو خاضعة للتنظيم.** تغطي القائمة أكثر ثغرات الخصوصية والأمان شيوعًا في إعدادات Ollama وLM Studio وJan AI وGPT4All.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'قائمة تحقق أمان لنماذج LLM المحلية: اعزل الوصول إلى الشبكة، وتحقق من SHA-256 لملفات النماذج، واربط واجهة API بـlocalhost، وشفّر سجلات المطالبات أو عطّلها، ودقّق جميع إضافات الطرف الثالث.',
          },
          {
            type: 'plain-terms',
            text: 'نماذج LLM المحلية خاصة افتراضيًا فقط إذا أُعِدّت بشكل صحيح — تغطي الخطوات الخمس أعلاه أهم أسطح الهجوم في إعداد الاستدلال المحلي.',
          },
        ],
        numberedItems: [
          {
            title: 'نزّل النماذج فقط من مصادر موثوقة',
            whyItMatters: 'يمنع ملفات النماذج الضارة من مصادر غير موثوقة.',
          },
          {
            title: 'تحقق من checksums النموذج للاستخدام الحساس',
            whyItMatters: 'يضمن عدم العبث بملفات النماذج المُنزَّلة.',
          },
          {
            title: 'عطّل القياس عن بُعد في أداة الاستدلال',
            whyItMatters: 'يمنع جمع بيانات الاستخدام ومعلومات الجلسة.',
          },
          {
            title: 'تأكد من أن Ollama مرتبط بـlocalhost فقط',
            whyItMatters: 'يمنع كشف واجهة API لأجهزة أخرى على شبكتك.',
          },
          {
            title: 'فعّل تشفير القرص الكامل',
            whyItMatters: 'يحمي أوزان النموذج وسجلات المحادثة إذا فُقد الجهاز أو سُرق.',
          },
          {
            title: 'خزّن سجلات المحادثة الحساسة في مجلد مشفّر',
            whyItMatters: 'يحمي سجل المحادثات ذات البيانات الحساسة من الوصول غير المصرّح به.',
          },
          {
            title: 'راجع الإضافات والملحقات المثبتة',
            whyItMatters: 'يمنع إضافات الطرف الثالث الضارة من الوصول إلى الشبكة.',
          },
          {
            title: 'استخدم حساب مستخدم مخصصًا للعمل مع نماذج LLM',
            whyItMatters: 'يعزل ملفات النموذج وسجل المحادثة ومفاتيح API عن ملفك الشخصي الرئيسي.',
          },
          {
            title: 'لا تكشف واجهة API المحلية على الإنترنت',
            whyItMatters: 'يمنع الوصول البعيد غير المصرّح به لمحرك الاستدلال المحلي.',
          },
          {
            title: 'دقّق مطالبات النظام في أي تطبيق يستخدم نماذج LLM محلية',
            whyItMatters: 'يمنع تسريب البيانات عبر إضافات المتصفح أو تكاملات أدوات الإنتاجية.',
          },
          {
            title: 'حافظ على تحديث أدوات الاستدلال',
            whyItMatters: 'يصلح الثغرات المعروفة، مثل CVE-2026-7482 في Ollama (أُصلحت في 0.17.1).',
          },
          {
            title: 'للبيئات المعزولة أو الخاضعة للتنظيم: وثّق إصدارات النماذج المعتمدة',
            whyItMatters: 'يضمن الامتثال للمتطلبات التنظيمية لمعالجة البيانات وعزل البنية التحتية.',
          },
        ],
        image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-ar.webp',
        imageCaption: 'تحقق من كل عنصر قبل العمل مع بيانات حساسة أو خاضعة للتنظيم.',
      },
      modelProvenance: {
        id: 'model-provenance',
        title: 'من أين تُنزّل نماذج LLM المحلية بأمان؟',
        content: [
          '**أوزان النموذج ملفات ثنائية كبيرة.** قد يستغل ملف GGUF مشوَّه أخطاء في المحلّل (parser) الذي يحمّله: كانت CVE-2026-7482 قراءة خارج الحدود في الكومة داخل محمِّل GGUF في Ollama، وأُصلحت في Ollama 0.17.1.',
        ],
        items: [
          '**Hugging Face** (huggingface.co): المصدر الرئيسي للنماذج المفتوحة. لكل ملف تجزئة SHA256 مُتحقق منها. التزم بنماذج الناشرين المعروفين (Meta، Google، Microsoft، Mistral AI، Qwen/Alibaba).',
          '**مكتبة Ollama** ([ollama.com/library](https://ollama.com/library)): يتحقق Ollama من تجزئات النماذج قبل تخزينها. نزّل من المكتبة الرسمية أو من ناشرين تثق بهم.',
          '**متصفح نماذج LM Studio**: يبحث مباشرة في Hugging Face. تنطبق قواعد الثقة نفسها — تحقق من حساب الناشر.',
          '**تجنّب**: مواقع تبادل الملفات المجهولة، والملفات المشتركة على Discord، وأي مصدر لا يوفّر تجزئة قابلة للتحقق.',
        ],
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'كيف تحظر الاتصالات الصادرة لنماذج LLM المحلية؟',
        content: '**احظر الاتصالات الصادرة بعد تنزيل النموذج لمنع أداة الاستدلال من إجراء مكالمات خارجية.** على macOS، استخدم جدار الحماية `pf`؛ على Linux، استخدم `ufw` أو OpenSnitch:',
        codeBlock: '# macOS -- block Ollama outbound with pf firewall\n# Add to /etc/pf.conf:\nblock out proto tcp from any to any user ollama\n\n# Linux -- block with ufw\nsudo ufw deny out from any to any app ollama\n\n# Or use Little Snitch (macOS) / OpenSnitch (Linux)\n# for per-application network control with a GUI',
        codeLanguage: 'bash',
      },
      telemetry: {
        id: 'telemetry-settings',
        title: 'كيف تعطّل القياس عن بُعد في أدوات نماذج LLM المحلية؟',
        rows: [
          {
            Herramienta: '[Ollama](https://ollama.com)',
            'Telemetría por defecto': 'لا شيء محليًا؛ السحابة اختيارية',
            'Cómo confirmar/deshabilitar': 'OLLAMA_NO_CLOUD=1 يعطّل ميزات السحابة',
          },
          {
            Herramienta: '[LM Studio](https://lmstudio.ai)',
            'Telemetría por defecto': 'لا شيء (السياسة)؛ التحديث/البحث مجهولان',
            'Cómo confirmar/deshabilitar': 'لا شيء لتعطيله؛ تحقق بجدار حماية',
          },
          {
            Herramienta: '[Jan AI](https://jan.ai)',
            'Telemetría por defecto': 'تحليلات اختيارية، تُحدَّد عند أول تشغيل',
            'Cómo confirmar/deshabilitar': 'ارفضها عند أول تشغيل؛ مفتوح المصدر',
          },
          {
            Herramienta: '[GPT4All](https://nomic.ai/gpt4all)',
            'Telemetría por defecto': 'اشتراك اختياري فقط عند الإطلاق الأول',
            'Cómo confirmar/deshabilitar': 'ارفضه عند أول تشغيل؛ تحقق بجدار حماية',
          },
        ],
        columns: ['Herramienta', 'Telemetría por defecto', 'Cómo confirmar/deshabilitar'],
      },
      threatModel: {
        id: 'threat-model',
        title: 'ما نموذج التهديد الذي يجب أن تفترضه؟',
        content: [
          '**افترض أن بيئة LLM المحلية لديك قد تُسرّب البيانات عبر الأدوات أو الإضافات أو الإعدادات الخاطئة. تعامل مع النموذج باعتباره غير موثوق — صمّم إعدادك بحيث لا يمكن الوصول إلى البيانات الحساسة أو نقلها حتى لو كان النموذج مخترَقًا. هذا يعني عزل أداة الاستدلال عن الإنترنت وتعطيل القياس عن بُعد وتقييد الوصول إلى نظام الملفات.**',
          'الأمان لا يتعلق بخصوصية البيانات فحسب — حقن المطالبات (prompt injection) متجه هجوم مستقل تتلاعب فيه المدخلات الضارة بسلوك النموذج. لتقنيات الدفاع ضد الحقن التي تنطبق على النماذج المحلية والسحابية معًا، راجع [حقن المطالبات والأمان](https://www.promptquorum.com/ar/prompt-engineering/prompt-injection-and-security).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'ما هي أكثر أسئلة الأمان شيوعًا حول نماذج LLM المحلية؟',
        faqs: [
          {
            q: 'هل يمكن لنموذج LLM محلي الوصول إلى ملفاتي أو الإنترنت؟',
            a: 'لا — النموذج نفسه ملف ثابت يولّد نصًا. لا يملك القدرة على قراءة نظام ملفاتك أو إجراء طلبات شبكة. ومع ذلك، فإن أداة الاستدلال التي تُشغّل النموذج (Ollama، LM Studio) تملك وصولًا عاديًا على مستوى نظام التشغيل. تتضمن بعض الأدوات ميزات تقرأ الملفات فعلاً — مثل LocalDocs في GPT4All أو ميزة إرفاق الملفات في LM Studio. هذه الميزات اختيارية وموثّقة صراحةً.',
          },
          {
            q: 'هل من الآمن استخدام نموذج LLM محلي مع بيانات مشمولة بـHIPAA؟',
            a: 'يلغي الاستدلال المحلي خطر معالج البيانات الطرف الثالث الذي تُنشئه واجهات API السحابية. ومع ذلك، يتطلب الامتثال لـHIPAA أكثر من الاستدلال الخاص — تحتاج إلى تشفير قرص كامل وضوابط وصول وتسجيل تدقيق واتفاقية شريك أعمال إذا كان أي مزوّد برمجيات قد يصل إلى PHI. استخدام Ollama مع FileVault مُفعّلًا والقياس عن بُعد مُعطّلًا نقطة انطلاق معقولة، لكن الامتثال الرسمي لـHIPAA يتطلب تقييم مخاطر كاملًا.',
          },
          {
            q: 'هل يُرسل Ollama مطالباتي إلى أي مكان؟',
            a: 'ليس عند تشغيل نماذج محلية. تنص الأسئلة الشائعة لـOllama على "We don\'t see your prompts or data when you run locally" (لا نرى مطالباتك ولا بياناتك عند التشغيل محليًا). النماذج السحابية والبحث على الويب في Ollama اختياريان ويرسلان المطالبات فعلًا إلى خوادم Ollama؛ اضبط `OLLAMA_NO_CLOUD=1` لتعطيلهما. حركة الشبكة الصادرة المتوقعة من إعداد محلي هي تنزيلات النماذج بـ`ollama pull` وفحوصات التحديث. Ollama مفتوح المصدر ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
          },
          {
            q: 'هل استخدام نموذج LLM محلي أكثر خصوصية من استخدام واجهة API الخاصة بـOpenAI؟',
            a: 'نعم، من حيث خصوصية المطالبات. مع نموذج LLM محلي، لا تغادر مطالباتك جهازك أبدًا. تُرسل واجهة API الخاصة بـOpenAI المطالبات إلى خوادم OpenAI للمعالجة. تشير شروط خدمة واجهة API الخاصة بـOpenAI إلى أن مدخلات/مخرجات API لا تُستخدم لتدريب النماذج افتراضيًا، لكن البيانات تمر فعلاً عبر بنيتها التحتية. للبيانات الحساسة أو الخاضعة للتنظيم (طبية، قانونية، مالية)، الاستدلال المحلي هو الخيار الأكثر تحفظًا.',
          },
          {
            q: 'كيف أتحقق من أن ملف نموذج مُنزَّل آمن؟',
            a: 'نزّل النماذج فقط من Hugging Face (huggingface.co) أو مكتبة Ollama الرسمية. في Hugging Face، يعرض كل ملف تجزئة SHA256 — تحقق منها بـ`sha256sum <model_file>` بعد التنزيل. التزم بنماذج الناشرين المعروفين: Meta، Google، Microsoft، Mistral AI وQwen/Alibaba. تجنّب الملفات المشتركة بشكل مجهول أو على Discord.',
          },
          {
            q: 'ما الفرق بين الخصوصية والأمان لنماذج LLM المحلية؟',
            a: 'الخصوصية تعني أن مطالباتك ومخرجاتك غير قابلة للوصول من قبل الأطراف الثالثة. الأمان يعني أن نظامك محمي من التهديدات. قد يكون نموذج LLM محلي خاصًا (لا تغادر أي بيانات جهازك) لكن غير آمن (نموذج مُنزَّل من مصدر غير موثوق، أو واجهة API لـOllama مكشوفة على الشبكة). يجب معالجة الاثنين بشكل مستقل.',
          },
          {
            q: 'هل يمكنني استخدام نموذج LLM محلي لبيانات خاضعة لـGDPR؟',
            a: 'يقلّل الاستدلال المحلي خطر GDPR بشكل كبير لأن البيانات لا تغادر بنيتك التحتية. ومع ذلك، لا يزال يجب التحقق من أن أداة الاستدلال (Ollama، LM Studio) لا ترسل حركة شبكة غير متوقعة، وأن تشفير القرص مُفعّل، وأن ضوابط الوصول في مكانها. لمتطلبات DPIA في المادة 35، وثّق إعداد معالجة البيانات وأكّد أن لا بيانات شخصية تمر عبر خوادم طرف ثالث.',
          },
          {
            q: 'هل LM Studio آمن للاستخدام؟',
            a: 'نعم من حيث خصوصية المطالبات: وفق سياسة خصوصية LM Studio، تبقى المحادثات والمستندات على جهازك إلا إذا استخدمت خدمات LM Studio السحابية، ولا يتضمن التطبيق قياسًا عن بُعد ولا تتبعًا خاصًا بالمستخدم. المخاطر المتبقية هي نفسها في كل أداة محلية: ملفات نماذج من ناشرين غير موثوقين، وواجهة API محلية مفتوحة على الشبكة عبر "Serve on Local Network"، وإصدار قديم من التطبيق. نزّل النماذج من ناشرين معروفين على Hugging Face، وفعّل هذا الإعداد فقط عند الحاجة، وأبقِ التطبيق محدَّثًا.',
          },
          {
            q: 'هل يجمع LM Studio بيانات أو يرسلها إلى خوادمه؟',
            a: 'تنص سياسة خصوصية LM Studio على أن التطبيق لا يتضمن قياسًا عن بُعد ولا تتبعًا خاصًا بالمستخدم. ترسل فحوصات التحديث إصدار التطبيق ونظام التشغيل وعنوان IP (عبر شبكة CDN)، وترسل عمليات البحث عن النماذج وتنزيلها استعلامات بحث مجهولة الهوية. لا يعالج التطبيق محتوى المحادثات والمستندات إلا إذا استخدمت خدمات LM Studio السحابية. لا يوجد إعداد لبيانات الاستخدام يمكن تعطيله؛ تحقق بجدار حماية أو التقاط حزم.',
          },
          {
            q: 'هل Ollama آمن للاستخدام؟',
            a: 'نعم للمطالبات المحلية، إذا أبقيته محدَّثًا وخارج الشبكة. يذكر Ollama أنه لا يرى مطالباتك ولا بياناتك عند التشغيل محليًا، وأنه يرتبط افتراضيًا بالعنوان 127.0.0.1. الثغرات هي الخطر الرئيسي: أثّرت CVE-2026-7482 في الإصدارات الأقدم من 0.17.1 وكانت قابلة للاستغلال عبر واجهة API يمكن الوصول إليها، وأُبلغ في 2026 عن ثغرتين في مُحدِّث Windows (CVE-2026-42248 وCVE-2026-42249). حدّث، وأبقِ المنفذ 11434 مغلقًا أمام الأجهزة الأخرى، وراجع ملاحظات الإصدار بحثًا عن إصلاحات المُحدِّث.',
          },
          {
            q: 'كيف أمنع الأجهزة الأخرى على شبكتي من الوصول إلى Ollama؟',
            a: 'افتراضيًا، يرتبط Ollama بـlocalhost (127.0.0.1:11434) وهو غير قابل للوصول من أجهزة أخرى. إذا سبق أن ضبطت OLLAMA_HOST=0.0.0.0 للسماح بالوصول الشبكي، أعِده: `export OLLAMA_HOST=127.0.0.1:11434`. تحقق من العزل بمحاولة الاتصال من جهاز آخر على شبكتك — يجب أن يفشل.',
          },
          {
            q: 'ما أداة LLM المحلية الأفضل لأقصى خصوصية؟',
            a: 'بحسب إعداداتها الافتراضية المنشورة، تُعد Jan AI الأكثر تقييدًا بين الأدوات الأربع: مفتوحة المصدر بالكامل (رخصة Apache 2.0) مع تحليلات اختيارية تُحدَّد عند أول تشغيل. يأتي Ollama بعدها: مفتوح المصدر، يرتبط بـlocalhost افتراضيًا، ويمكن تعطيل ميزات السحابة بـ`OLLAMA_NO_CLOUD=1`. لا يتضمن LM Studio قياسًا عن بُعد وفق سياسة الخصوصية، لكن فحوصات التحديث والبحث عن النماذج ترسل بيانات مجهولة الهوية.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'أين يمكنك إيجاد مصادر إضافية؟',
        items: [
          '**OWASP Top 10 لتطبيقات LLM** ([owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)) — مخاطر أمان تطبيقات نماذج LLM بما في ذلك حقن المطالبات وهجمات سلسلة التوريد',
          '**توثيق بطاقة نموذج Hugging Face** (huggingface.co/docs/hub/model-cards) — معايير مصدر النماذج والتحقق من تجزئات SHA256',
          '**VeraCrypt** (veracrypt.fr) — تشفير قرص ومجلدات كامل مفتوح المصدر لـWindows وmacOS وLinux',
          '**الأسئلة الشائعة لـOllama** ([docs.ollama.com/faq](https://docs.ollama.com/faq)) — عنوان الربط الافتراضي وميزات السحابة وإعداد `OLLAMA_NO_CLOUD`',
          '**سياسة خصوصية LM Studio** ([lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)) — ما يجمعه التطبيق ومتى',
          '**صفحة خصوصية Jan** ([docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)) — التحليلات الاختيارية',
          '**The Hacker News، تقرير ثغرة Ollama** ([thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)) — CVE-2026-7482 وثغرات مُحدِّث Windows',
          '**تنبيه CERT Polska** ([cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)) — الإصدارات المتأثرة بـCVE-2026-42248 وCVE-2026-42249',
        ],
      },
      commonMistakes: {
        title: 'ما هي أكثر أخطاء الأمان شيوعًا في نماذج LLM المحلية؟',
        content: '**معظم إخفاقات الأمان في نماذج LLM المحلية تنبع من إهمال الإعداد، لا من ثغرات النموذج.** هذه هي الأخطاء الستة الأكثر تكرارًا وكيفية تصحيح كل منها.',
        items: [
          '**خطأ:** تنزيل النماذج من مواقع طرف ثالث (Discord، إصدارات GitHub عشوائية). **الحل:** استخدم فقط Hugging Face (huggingface.co) أو مكتبة Ollama. تحقق بـ`sha256sum`.',
          '**خطأ:** افتراض أن الاستدلال المحلي = خصوصية كاملة. **الحل:** احجب الاتصالات الصادرة بعد تنزيل النموذج وافحص حركة LM Studio وGPT4All بجدار حماية، وارفض القياس عن بُعد في GPT4All عند أول تشغيل. شغّل `netstat -an | grep 11434` للتأكد من عدم وجود منافذ غير متوقعة.',
          '**خطأ:** ترك `OLLAMA_HOST=0.0.0.0` نشطًا بعد الاختبار. **الحل:** أعِده: `export OLLAMA_HOST=127.0.0.1:11434`. اختبر من جهاز آخر — يجب رفض الاتصال.',
          '**خطأ:** تجاهل تشفير القرص لأحمال عمل HIPAA/GDPR. **الحل:** فعّل FileVault (macOS) أو BitLocker (Windows). شفّر مجلد سجلات محادثة LM Studio بشكل منفصل.',
          '**خطأ:** عدم مراجعة إضافات الطرف الثالث في Open WebUI أو Jan AI. **الحل:** دقّق الإضافات المثبتة شهريًا. احذف أي إضافة تطلب وصولًا للشبكة لا تعرفها.',
          '**خطأ:** الاستمرار في تشغيل إصدار قديم من Ollama بعد الإفصاح عن ثغرة. **الحل:** شغّل `ollama --version` وحدّث إلى 0.17.1 أو أحدث. على Windows، راجع أيضًا تنبيهات المُحدِّث في قسم الثغرات أعلاه.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'ما هي اعتبارات الامتثال الإقليمية؟',
        content: '**يقلّل الاستدلال المحلي لنماذج LLM خطر إقامة البيانات، لكن الامتثال التنظيمي الكامل يتطلب ضوابط إضافية لكل منطقة.** هذا القسم معلومات عامة وليس استشارة قانونية؛ تأكد من المتطلبات مع محامٍ أو مسؤول حماية البيانات.',
        items: [
          '**دول الخليج / السعودية PDPL (2023):** يقلّل الاستدلال المحلي خطر نقل البيانات عبر الحدود بموجب نظام حماية البيانات الشخصية السعودي. فعّل تشفير القرص الكامل ووثّق معالجة البيانات. في الإمارات، يدعم التشغيل داخل المؤسسة متطلبات سيادة البيانات؛ تُتيح النماذج العربية السيادية مثل Jais وALLaM وFalcon استدلالًا محليًا بالكامل دون الاعتماد على مزودين أجانب.',
          '**الاتحاد الأوروبي / GDPR (2018):** قد يُلغي الاستدلال المحلي علاقة معالج البيانات في المادة 28 مع مزوّد النموذج في خطوة الاستدلال. لا يزال يجب التحقق من حركة شبكة LM Studio بجدار حماية وتفعيل تشفير القرص وتوثيق إعداد معالجة البيانات لأي DPIA. أجرِ تقييم مصلحة مشروعة قبل معالجة البيانات الشخصية.',
          '**اليابان / APPI (2022):** يتطلب قانون حماية المعلومات الشخصية حماية البيانات الشخصية أثناء المعالجة. قد يساعد الاستدلال المحلي على جهاز معزول عن الشبكة في تلبية متطلبات توطين البيانات. عطّل فحوصات تحديث Ollama وتحقق من حركة شبكة LM Studio ضمن تقييمك لـAPPI.',
          '**الصين / PIPL (2021):** تشغيل نموذج LLM محلي للاستخدام الداخلي لا يتطلب عادةً تسجيلًا لدى CAC؛ تأكد من ذلك مع مستشار قانوني. إذا نشرت نموذج LLM محلي كخدمة عامة في الصين، يُطلب تسجيل الخوارزميات لدى CAC.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'ماذا يجب أن تقرأ أيضًا؟',
        items: [
          '[ما هي نماذج LLM المحلية؟](/ar/local-llms/what-are-local-llms) — المفاهيم والمكونات الرئيسية',
          '[نماذج LLM المحلية مقابل واجهات API السحابية](/ar/local-llms/local-llms-vs-cloud-apis) — مقايضات الخصوصية',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — التثبيت والإعداد',
          '[كيفية تشغيل نماذج LLM المحلية على حاسوب محمول](/ar/local-llms/local-llm-on-laptop) — إعداد آمن للحواسيب المحمولة',
          '[مثبّتات بنقرة واحدة لنماذج LLM المحلية](/ar/local-llms/local-llm-one-click-installers) — قارن LM Studio وOllama وJan AI وGPT4All في الخصوصية وسهولة الاستخدام',
          '[استكشاف أخطاء إعداد نماذج LLM المحلية](/ar/local-llms/troubleshooting-local-llm-setup) — أصلح الأخطاء الشائعة بما في ذلك رفض المنفذ 11434 وعدم اكتشاف GPU',
          '[الذكاء الاصطناعي المحلي خلف جدار الحماية / دون اتصال (2026)](/ar/power-local-llm/local-ai-behind-firewall-offline-2026) — Ollama معزول عن الشبكة: عزل الشبكة وتسجيل التدقيق والإعداد دون إنترنت.',
          '[أفضل VPN لتطوير الذكاء الاصطناعي في الصين (2026)](/ar/prompt-bites/best-vpn-for-ai-development-china-2026) — الوصول إلى Hugging Face وGitHub وسجلات النماذج من خلف جدار الحماية.',
          '[الاستعداد لتدقيق SOC 2 وISO 27001 لنماذج LLM المستضافة ذاتيًا](/ar/local-llms/soc2-iso27001-self-hosted-llm-compliance) — النسخة الموجهة لأطر التدقيق الرسمية من هذه القائمة، لمسؤولي الامتثال.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'قائمة التحقق من الأمان والخصوصية لنماذج LLM المحلية: 12 خطوة لإعداد آمن',
      description: 'قائمة من 12 خطوة لخصوصية نماذج LLM المحلية في 2026: مصدر النموذج، وإلغاء الاشتراك في القياس عن بُعد، وعزل الشبكة، وتشفير القرص، وضوابط الوصول.',
      url: 'https://www.promptquorum.com/ar/local-llms/local-llm-security-privacy-checklist',
      datePublished: '2026-04-04',
      dateModified: '2026-11-15',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'خصوصية نماذج LLM المحلية',
        },
        {
          '@type': 'Thing',
          name: 'أمان نماذج LLM',
        },
        {
          '@type': 'Thing',
          name: 'القياس عن بُعد لـOllama',
        },
        {
          '@type': 'Thing',
          name: 'مصدر النموذج',
        },
        {
          '@type': 'Thing',
          name: 'تشفير القرص',
        },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'المطورون ومحترفو تقنية المعلومات الذين يُشغّلون نماذج LLM محلية',
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'هل يمكن لنموذج LLM محلي الوصول إلى ملفاتي أو الإنترنت؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا — النموذج نفسه ملف ثابت يولّد نصًا. لا يملك القدرة على قراءة نظام ملفاتك أو إجراء طلبات شبكة. ومع ذلك، فإن أداة الاستدلال التي تُشغّل النموذج (Ollama، LM Studio) تملك وصولًا عاديًا على مستوى نظام التشغيل. تتضمن بعض الأدوات ميزات تقرأ الملفات فعلاً — مثل LocalDocs في GPT4All أو ميزة إرفاق الملفات في LM Studio. هذه الميزات اختيارية وموثّقة صراحةً.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل من الآمن استخدام نموذج LLM محلي مع بيانات مشمولة بـHIPAA؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'يلغي الاستدلال المحلي خطر معالج البيانات الطرف الثالث الذي تُنشئه واجهات API السحابية. ومع ذلك، يتطلب الامتثال لـHIPAA أكثر من الاستدلال الخاص — تحتاج إلى تشفير قرص كامل وضوابط وصول وتسجيل تدقيق واتفاقية شريك أعمال إذا كان أي مزوّد برمجيات قد يصل إلى PHI. استخدام Ollama مع FileVault مُفعّلًا والقياس عن بُعد مُعطّلًا نقطة انطلاق معقولة، لكن الامتثال الرسمي لـHIPAA يتطلب تقييم مخاطر كاملًا.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يُرسل Ollama مطالباتي إلى أي مكان؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ليس عند تشغيل نماذج محلية. تنص الأسئلة الشائعة لـOllama على "We don\'t see your prompts or data when you run locally" (لا نرى مطالباتك ولا بياناتك عند التشغيل محليًا). النماذج السحابية والبحث على الويب في Ollama اختياريان ويرسلان المطالبات فعلًا إلى خوادم Ollama؛ اضبط `OLLAMA_NO_CLOUD=1` لتعطيلهما. حركة الشبكة الصادرة المتوقعة من إعداد محلي هي تنزيلات النماذج بـ`ollama pull` وفحوصات التحديث. Ollama مفتوح المصدر ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
          },
        },
        {
          '@type': 'Question',
          name: 'هل استخدام نموذج LLM محلي أكثر خصوصية من استخدام واجهة API الخاصة بـOpenAI؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'نعم، من حيث خصوصية المطالبات. مع نموذج LLM محلي، لا تغادر مطالباتك جهازك أبدًا. تُرسل واجهة API الخاصة بـOpenAI المطالبات إلى خوادم OpenAI للمعالجة. تشير شروط خدمة واجهة API الخاصة بـOpenAI إلى أن مدخلات/مخرجات API لا تُستخدم لتدريب النماذج افتراضيًا، لكن البيانات تمر فعلاً عبر بنيتها التحتية. للبيانات الحساسة أو الخاضعة للتنظيم (طبية، قانونية، مالية)، الاستدلال المحلي هو الخيار الأكثر تحفظًا.',
          },
        },
        {
          '@type': 'Question',
          name: 'كيف أتحقق من أن ملف نموذج مُنزَّل آمن؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'نزّل النماذج فقط من Hugging Face (huggingface.co) أو مكتبة Ollama الرسمية. في Hugging Face، يعرض كل ملف تجزئة SHA256 — تحقق منها بـ`sha256sum <model_file>` بعد التنزيل. التزم بنماذج الناشرين المعروفين: Meta، Google، Microsoft، Mistral AI وQwen/Alibaba. تجنّب الملفات المشتركة بشكل مجهول أو على Discord.',
          },
        },
        {
          '@type': 'Question',
          name: 'ما الفرق بين الخصوصية والأمان لنماذج LLM المحلية؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'الخصوصية تعني أن مطالباتك ومخرجاتك غير قابلة للوصول من قبل الأطراف الثالثة. الأمان يعني أن نظامك محمي من التهديدات. قد يكون نموذج LLM محلي خاصًا (لا تغادر أي بيانات جهازك) لكن غير آمن (نموذج مُنزَّل من مصدر غير موثوق، أو واجهة API لـOllama مكشوفة على الشبكة). يجب معالجة الاثنين بشكل مستقل.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يمكنني استخدام نموذج LLM محلي لبيانات خاضعة لـGDPR؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'يقلّل الاستدلال المحلي خطر GDPR بشكل كبير لأن البيانات لا تغادر بنيتك التحتية. ومع ذلك، لا يزال يجب التحقق من أن أداة الاستدلال (Ollama، LM Studio) لا ترسل حركة شبكة غير متوقعة، وأن تشفير القرص مُفعّل، وأن ضوابط الوصول في مكانها. لمتطلبات DPIA في المادة 35، وثّق إعداد معالجة البيانات وأكّد أن لا بيانات شخصية تمر عبر خوادم طرف ثالث.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل LM Studio آمن للاستخدام؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'نعم من حيث خصوصية المطالبات: وفق سياسة خصوصية LM Studio، تبقى المحادثات والمستندات على جهازك إلا إذا استخدمت خدمات LM Studio السحابية، ولا يتضمن التطبيق قياسًا عن بُعد ولا تتبعًا خاصًا بالمستخدم. المخاطر المتبقية هي نفسها في كل أداة محلية: ملفات نماذج من ناشرين غير موثوقين، وواجهة API محلية مفتوحة على الشبكة عبر "Serve on Local Network"، وإصدار قديم من التطبيق. نزّل النماذج من ناشرين معروفين على Hugging Face، وفعّل هذا الإعداد فقط عند الحاجة، وأبقِ التطبيق محدَّثًا.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يجمع LM Studio بيانات أو يرسلها إلى خوادمه؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'تنص سياسة خصوصية LM Studio على أن التطبيق لا يتضمن قياسًا عن بُعد ولا تتبعًا خاصًا بالمستخدم. ترسل فحوصات التحديث إصدار التطبيق ونظام التشغيل وعنوان IP (عبر شبكة CDN)، وترسل عمليات البحث عن النماذج وتنزيلها استعلامات بحث مجهولة الهوية. لا يعالج التطبيق محتوى المحادثات والمستندات إلا إذا استخدمت خدمات LM Studio السحابية. لا يوجد إعداد لبيانات الاستخدام يمكن تعطيله؛ تحقق بجدار حماية أو التقاط حزم.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل Ollama آمن للاستخدام؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'نعم للمطالبات المحلية، إذا أبقيته محدَّثًا وخارج الشبكة. يذكر Ollama أنه لا يرى مطالباتك ولا بياناتك عند التشغيل محليًا، وأنه يرتبط افتراضيًا بالعنوان 127.0.0.1. الثغرات هي الخطر الرئيسي: أثّرت CVE-2026-7482 في الإصدارات الأقدم من 0.17.1 وكانت قابلة للاستغلال عبر واجهة API يمكن الوصول إليها، وأُبلغ في 2026 عن ثغرتين في مُحدِّث Windows (CVE-2026-42248 وCVE-2026-42249). حدّث، وأبقِ المنفذ 11434 مغلقًا أمام الأجهزة الأخرى، وراجع ملاحظات الإصدار بحثًا عن إصلاحات المُحدِّث.',
          },
        },
        {
          '@type': 'Question',
          name: 'كيف أمنع الأجهزة الأخرى على شبكتي من الوصول إلى Ollama؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'افتراضيًا، يرتبط Ollama بـlocalhost (127.0.0.1:11434) وهو غير قابل للوصول من أجهزة أخرى. إذا سبق أن ضبطت OLLAMA_HOST=0.0.0.0 للسماح بالوصول الشبكي، أعِده: `export OLLAMA_HOST=127.0.0.1:11434`. تحقق من العزل بمحاولة الاتصال من جهاز آخر على شبكتك — يجب أن يفشل.',
          },
        },
        {
          '@type': 'Question',
          name: 'ما أداة LLM المحلية الأفضل لأقصى خصوصية؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بحسب إعداداتها الافتراضية المنشورة، تُعد Jan AI الأكثر تقييدًا بين الأدوات الأربع: مفتوحة المصدر بالكامل (رخصة Apache 2.0) مع تحليلات اختيارية تُحدَّد عند أول تشغيل. يأتي Ollama بعدها: مفتوح المصدر، يرتبط بـlocalhost افتراضيًا، ويمكن تعطيل ميزات السحابة بـ`OLLAMA_NO_CLOUD=1`. لا يتضمن LM Studio قياسًا عن بُعد وفق سياسة الخصوصية، لكن فحوصات التحديث والبحث عن النماذج ترسل بيانات مجهولة الهوية.',
          },
        },
      ],
    },
  },

  pt: {
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Lista de Verificação de Segurança e Privacidade para LLMs Locais: 12 Passos para uma Configuração Segura',
    seoTitle: 'Segurança de LLM local 2026: o LM Studio é seguro?',
    intro: 'LM Studio, Ollama, Jan e GPT4All mantêm seus prompts fora de servidores externos quando você executa modelos locais, mas isso não torna sua configuração automaticamente segura. Telemetria, arquivos de modelo não confiáveis, versões sem patches e APIs expostas ainda podem vazar dados. Esta lista de verificação mostra como proteger um LLM local em menos de 10 minutos.',
    metaDescription: 'O LM Studio é seguro? E o Ollama? Checklist de 12 passos: o que cada ferramenta envia, a correção do CVE-2026-7482 do Ollama, telemetria e porta 11434.',
    heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-pt.webp',
    publishDate: '2026-04-04',
    dateModified: '2026-11-15',
    leadAnswerBlock: '**LM Studio, Ollama, Jan e GPT4All mantêm seus prompts fora de servidores externos quando você executa modelos locais, mas isso não torna sua configuração automaticamente segura. Telemetria, arquivos de modelo não confiáveis, versões sem patches e APIs expostas ainda podem vazar dados. Esta lista de verificação mostra como proteger um LLM local em menos de 10 minutos.**',
    audience: 'Iniciantes que executam seu primeiro LLM local em hardware de consumo',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'segurança de LLM local',
    toc: [
      {
        label: 'Pontos principais',
        anchor: '#tldr',
      },
      {
        label: 'LM Studio, Ollama, Jan e GPT4All são seguros?',
        anchor: '#are-lm-studio-ollama-safe',
      },
      {
        label: 'Vulnerabilidades recentes em ferramentas de LLM local',
        anchor: '#recent-vulnerabilities',
      },
      {
        label: 'Lista de verificação de 12 passos',
        anchor: '#checklist',
      },
      {
        label: 'Conformidade LGPD',
        anchor: '#lgpd',
      },
      {
        label: 'Procedência do modelo: onde baixar com segurança',
        anchor: '#model-provenance',
      },
      {
        label: 'Isolamento de rede: bloqueando conexões de saída',
        anchor: '#network-isolation',
      },
      {
        label: 'Configurações de telemetria por ferramenta',
        anchor: '#telemetry-settings',
      },
      {
        label: 'Modelo de ameaças',
        anchor: '#threat-model',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lista de Verificação de Segurança e Privacidade para LLMs Locais: 12 Passos',
      description: '12 passos para proteger um LLM local: desative telemetria, verifique checksums, isole a porta 11434, criptografe o disco. Conformidade LGPD/ANPD e HIPAA.',
      url: 'https://www.promptquorum.com/pt/local-llms/local-llm-security-privacy-checklist',
      inLanguage: 'pt-BR',
      datePublished: '2026-04-04',
      dateModified: '2026-11-15',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desenvolvedores e profissionais de TI que executam LLMs locais',
      },
    },
    sections: {
      areLLMsSecure: {
        id: 'are-llms-private-and-secure',
        title: 'LLMs locais são privados e seguros?',
        content: 'LLMs locais são privados por padrão porque os prompts ficam no seu dispositivo, mas não são automaticamente seguros. Os principais riscos são a telemetria das ferramentas, arquivos de modelo não confiáveis e a exposição à rede. Uma configuração segura exige desativar a telemetria, verificar a origem dos modelos e isolar o sistema de acessos externos.',
      },
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          'As 5 etapas indispensáveis: (1) sem acesso à internet para o processo do modelo, (2) arquivos de modelo verificados via SHA-256 antes de carregar, (3) endpoints de API vinculados apenas ao localhost e a ferramenta em uma versão com patches aplicados, (4) logs de prompts armazenados criptografados ou totalmente desativados, (5) nenhum plugin de terceiros sem revisão do código-fonte.',
          'LM Studio, Ollama, Jan e GPT4All são seguros? Sim, quanto à privacidade dos prompts: nenhum deles envia prompts de chat a um provedor de modelo quando você executa um modelo local. O uso seguro também exige versões atualizadas, uma porta de API fechada e arquivos de modelo confiáveis.',
          'A inferência local mantém os dados dos prompts fora de servidores de terceiros. Os riscos restantes são: telemetria da ferramenta de inferência, arquivos de modelo de fontes não confiáveis, versões sem patches e a API do Ollama exposta na rede.',
          'Atualize o Ollama para a versão 0.17.1 ou posterior: o CVE-2026-7482 ("Bleeding Llama", classificado como crítico) permitia que um invasor não autenticado lesse a memória do processo a partir de uma API do Ollama exposta.',
          'O Ollama escuta apenas no localhost por padrão -- ele não fica acessível a outros dispositivos, a menos que você defina explicitamente OLLAMA_HOST=0.0.0.0.',
          'Verifique o que o LM Studio envia: segundo a política de privacidade, ele não tem telemetria, mas as verificações de atualização e a busca de modelos enviam dados anonimizados. Recuse a telemetria do GPT4All na primeira execução (ela é opt-in) e bloqueie o tráfego de saída depois de baixar os modelos.',
          'Baixe pesos de modelos apenas do Hugging Face (huggingface.co) ou da biblioteca oficial do Ollama. Verifique os checksums SHA256 em implantações sensíveis.',
          'Para dados regulados (HIPAA, LGPD, sigilo profissional): habilite a criptografia de disco completo, use uma máquina air-gapped e audite todas as extensões instaladas.',
          'LGPD e ANPD: a inferência local elimina a necessidade de acordos de processamento de dados com provedores de nuvem.',
        ],
        title: 'Quais são os pontos principais?',
      },
      toolSafety: {
        id: 'are-lm-studio-ollama-safe',
        title: 'LM Studio, Ollama, Jan e GPT4All são seguros de usar?',
        content: [
          '**Sim, quanto à privacidade dos prompts: nenhum dos quatro envia seus prompts de chat a um provedor de modelo quando você executa um modelo local.** O que muda é a pegada de rede de cada ferramenta e o que você deve verificar.',
        ],
        items: [
          '**LM Studio:** a [política de privacidade do LM Studio](https://lmstudio.ai/app-privacy) afirma que o app "does not include telemetry or user-specific tracking" (não inclui telemetria nem rastreamento específico de usuários) e não trata seus chats nem documentos, a menos que você use os serviços em nuvem do LM Studio. As verificações de atualização e a busca de modelos enviam dados limitados e anonimizados. Habilite "Serve on Local Network" apenas quando outros dispositivos precisarem da API.',
          '**Ollama:** segundo o [FAQ do Ollama](https://docs.ollama.com/faq), "We don\'t see your prompts or data when you run locally" (não vemos seus prompts ou dados quando você executa localmente), e o servidor escuta em 127.0.0.1, porta 11434, por padrão. Modelos em nuvem e busca na web são recursos opcionais que enviam prompts aos servidores do Ollama; defina `OLLAMA_NO_CLOUD=1` para desativá-los. Mantenha-o atualizado (veja a seção de vulnerabilidades abaixo).',
          '**Jan:** código aberto sob a licença Apache 2.0 ([GitHub](https://github.com/janhq/jan)). Sua [página de privacidade](https://docs.jan.ai/desktop/privacy) diz que o analytics é opt-in ("Zero data collection until you say so"), escolhido na primeira execução, e que seus chats continuam sendo seus. Conectar um provedor de nuvem envia suas mensagens a esse provedor.',
          '**GPT4All:** a telemetria e o compartilhamento de chats com o Datalake são opt-in. Recuse ambos na primeira execução e confira as configurações depois.',
          '**Para os quatro:** bloqueie o tráfego de saída depois que os modelos forem baixados, use arquivos de modelo apenas de publicadores conhecidos e mantenha o app em uma versão atual.',
        ],
      },
      recentVulns: {
        id: 'recent-vulnerabilities',
        title: 'Quais vulnerabilidades recentes afetam as ferramentas de LLM local?',
        content: [
          '**O Ollama teve dois conjuntos de vulnerabilidades divulgados em 2026: um é explorável por uma API exposta, o outro pelo atualizador do Windows.** Executar localmente não torna seguro um software sem patches.',
        ],
        items: [
          '**CVE-2026-7482 ("Bleeding Llama"):** uma leitura fora dos limites do heap no carregador de modelos GGUF do Ollama, corrigida na versão 0.17.1; o [The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html) relata uma pontuação CVSS de 9.1. Um invasor não autenticado que consiga alcançar a API pode enviar um arquivo GGUF manipulado e ler a memória do processo, o que pode incluir variáveis de ambiente, chaves de API e dados de conversas. Uma instalação vinculada ao localhost não é alcançável pela rede; instâncias expostas são.',
          '**CVE-2026-42248 e CVE-2026-42249 (CVSS 7.7 cada):** o atualizador do Ollama para Windows não verifica o binário de atualização e monta o caminho de staging a partir de cabeçalhos de resposta HTTP. O [CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248) lista as versões de 0.12.10 a 0.17.5 e não citou nenhuma versão corrigida na divulgação; outros relatos indicam um limite superior mais alto. O invasor precisa controlar o servidor de atualização que o cliente contata. Até que uma correção seja confirmada nas notas de versão do Ollama, usuários do Windows podem desativar as atualizações automáticas e instalar novas versões manualmente a partir do download oficial.',
          '**Como verificar sua configuração:** execute `ollama --version` e atualize se a versão for inferior à 0.17.1. Confirme que `OLLAMA_HOST` não está definido como 0.0.0.0 e tente alcançar a porta 11434 a partir de outro dispositivo da sua rede; a conexão deve ser recusada.',
        ],
      },
      whyNotAutoPrivate: {
        id: 'why-not-automatically-private',
        title: 'Por que LLMs locais não são automaticamente privados?',
        content: [
          '**A inferência do modelo em si é privada -- ao executar um modelo local, seus prompts não são enviados aos servidores do provedor do modelo.** Mas outros três fluxos de dados podem vazar informações:',
        ],
        items: [
          '**Telemetria do aplicativo**: o LM Studio afirma em sua política de privacidade que não inclui telemetria nem rastreamento específico de usuários, mas as verificações de atualização e a busca de modelos enviam dados anonimizados. A telemetria do GPT4All é opt-in. Outras ferramentas podem coletar analytics de uso, por isso verifique com um firewall.',
          '**Fontes de download de modelos**: arquivos GGUF maliciosos podem conter código que é executado durante o carregamento do modelo em motores de inferência vulneráveis. Um arquivo de modelo não verificado é um risco de cadeia de suprimentos.',
          '**Exposição à rede**: o servidor de API do Ollama é acessível a qualquer processo da sua máquina. Se for configurado incorretamente com `OLLAMA_HOST=0.0.0.0`, ele passa a ficar acessível a toda a sua rede sem autenticação.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'LLMs locais são mais seguros do que APIs na nuvem?',
        content: 'LLMs locais são mais seguros para a privacidade porque os dados ficam no seu dispositivo, enquanto as APIs na nuvem enviam prompts a servidores externos. No entanto, configurações locais exigem configuração manual de segurança, ao passo que os provedores de nuvem cuidam da segurança da infraestrutura. A troca real é autonomia de privacidade versus segurança delegada.',
      },
      misconceptions: {
        id: 'common-misconceptions',
        title: 'Quais são os equívocos comuns sobre a segurança de LLMs locais?',
        items: [
          '"LLMs locais são automaticamente seguros" → falso, a configuração é o que mais importa',
          '"Sem internet = sem risco" → falso, arquivos e plugins maliciosos continuam sendo um risco',
          '"Código aberto = seguro" → falso, o código ainda precisa ser verificado',
        ],
      },
      risks: {
        id: 'security-risks',
        title: 'Quais são os maiores riscos de segurança em LLMs locais?',
        items: [
          '**Vazamentos de telemetria** → algumas ferramentas enviam dados de uso; o LM Studio envia solicitações de verificação de atualização e de busca de modelos',
          '**Arquivos de modelo maliciosos** → arquivos GGUF não verificados podem introduzir riscos',
          '**Exposição à rede** → APIs como a do Ollama podem ficar expostas se forem configuradas incorretamente',
        ],
      },
      quickChecklist: {
        id: 'quick-checklist',
        title: 'O que você deve fazer nos primeiros 5 minutos?',
        numberedItems: [
          'Desative a telemetria na sua ferramenta',
          'Baixe modelos apenas do Hugging Face ou do Ollama',
          'Garanta que a API esteja vinculada apenas ao localhost',
          'Habilite a criptografia de disco completo',
          'Não exponha portas à internet',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'O que inclui a lista de verificação de segurança para LLMs locais?',
        content: '**Verifique cada item abaixo antes de trabalhar com dados sensíveis ou regulados.** A lista de verificação cobre as lacunas de privacidade e segurança mais comuns em configurações do Ollama, LM Studio, Jan AI e GPT4All.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Uma lista de verificação de segurança para LLM local: isole o acesso à rede, verifique o SHA-256 dos arquivos de modelo, vincule a API ao localhost, criptografe ou desative os logs de prompts e audite todos os plugins de terceiros.',
          },
          {
            type: 'plain-terms',
            text: 'LLMs locais só são privados por padrão se estiverem configurados corretamente — os 5 passos acima cobrem as principais superfícies de ataque de uma configuração de inferência local.',
          },
        ],
        numberedItems: [
          {
            title: 'Baixe modelos apenas de fontes confiáveis',
            whyItMatters: 'Evita arquivos de modelos maliciosos vindos de fontes não confiáveis.',
          },
          {
            title: 'Verifique os checksums do modelo para uso sensível',
            whyItMatters: 'Garante que os arquivos de modelo baixados não foram adulterados.',
          },
          {
            title: 'Desative a telemetria na sua ferramenta de inferência',
            whyItMatters: 'Evita a coleta de dados de uso e informações de sessão.',
          },
          {
            title: 'Confirme que o Ollama está vinculado apenas ao localhost',
            whyItMatters: 'Evita que a API fique exposta a outros dispositivos na sua rede.',
          },
          {
            title: 'Habilite a criptografia de disco completo',
            whyItMatters: 'Protege os pesos do modelo e os registros de chat caso o dispositivo seja perdido ou roubado.',
          },
          {
            title: 'Armazene registros de chat sensíveis em uma pasta criptografada',
            whyItMatters: 'Protege o histórico de conversas com dados sensíveis contra acesso não autorizado.',
          },
          {
            title: 'Revise extensões e plugins instalados',
            whyItMatters: 'Evita que extensões de terceiros maliciosas acessem a rede.',
          },
          {
            title: 'Use uma conta de usuário dedicada para trabalho com LLMs',
            whyItMatters: 'Isola arquivos de modelo, histórico de chat e chaves de API do seu perfil principal.',
          },
          {
            title: 'Não exponha a API local à internet',
            whyItMatters: 'Evita acesso remoto não autorizado ao seu motor de inferência local.',
          },
          {
            title: 'Audite os system prompts em qualquer app que use LLMs locais',
            whyItMatters: 'Evita a exfiltração de dados por meio de extensões de navegador ou integrações de ferramentas de produtividade.',
          },
          {
            title: 'Mantenha as ferramentas de inferência atualizadas',
            whyItMatters: 'Corrige vulnerabilidades conhecidas, por exemplo o CVE-2026-7482 do Ollama (corrigido na versão 0.17.1).',
          },
          {
            title: 'Para ambientes air-gapped ou regulados: documente as versões de modelo aprovadas',
            whyItMatters: 'Garante conformidade com requisitos regulatórios de tratamento de dados e isolamento de infraestrutura.',
          },
        ],
        image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-pt.webp',
        imageCaption: 'Verifique cada item antes de trabalhar com dados sensíveis ou regulados.',
      },
      lgpdContext: {
        id: 'lgpd',
        title: 'Conformidade com LGPD e ANPD no Brasil',
        content: [
          '**A Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018)** e as diretrizes da Autoridade Nacional de Proteção de Dados (ANPD) exigem controles adequados para dados pessoais sensíveis. A inferência de LLM local mantém todos os dados de prompt na sua infraestrutura.',
          'Requisitos de conformidade para implantações de LLM local no Brasil: (1) registre quais dados são processados pelos modelos de IA, (2) implemente controles de acesso (autenticação por token para APIs), (3) criptografe dados em repouso (criptografia de disco completo), (4) documente medidas de segurança para auditorias da ANPD.',
          'Setores financeiros e de saúde no Brasil também estão sujeitos às regulamentações do Banco Central e da ANVISA — a inferência local satisfaz os requisitos de residência de dados por padrão.',
        ],
      },
      modelProvenance: {
        id: 'model-provenance',
        title: 'Onde baixar modelos de LLM locais com segurança?',
        content: [
          '**Pesos de modelos são arquivos binários grandes.** Um arquivo GGUF malformado pode explorar falhas no parser que o carrega: o CVE-2026-7482 foi uma leitura fora dos limites do heap (heap out-of-bounds read) no carregador de GGUF do Ollama, corrigida na versão 0.17.1.',
        ],
        items: [
          '**Hugging Face** (huggingface.co): a principal fonte de modelos abertos. Cada arquivo tem um hash SHA256 verificável. Fique com modelos de publicadores conhecidos (Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba).',
          '**Biblioteca do Ollama** ([ollama.com/library](https://ollama.com/library)): o Ollama verifica os hashes dos modelos antes de armazená-los. Baixe da biblioteca oficial ou de publicadores em que você confia.',
          '**Navegador de modelos do LM Studio**: busca diretamente no Hugging Face. Valem as mesmas regras de confiança -- confira a conta do publicador.',
          '**Evite**: sites anônimos de compartilhamento de arquivos, arquivos soltos no Discord e qualquer fonte que não forneça um hash verificável.',
        ],
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'Como bloquear conexões de saída de LLMs locais?',
        content: '**Bloqueie as conexões de saída depois que o modelo for baixado para impedir que a ferramenta de inferência envie dados para fora.** No macOS, use o firewall `pf`; no Linux, use `ufw` ou o OpenSnitch:',
        codeBlock: '# macOS -- block Ollama outbound with pf firewall\n# Add to /etc/pf.conf:\nblock out proto tcp from any to any user ollama\n\n# Linux -- block with ufw\nsudo ufw deny out from any to any app ollama\n\n# Or use Little Snitch (macOS) / OpenSnitch (Linux)\n# for per-application network control with a GUI',
        codeLanguage: 'bash',
      },
      telemetry: {
        id: 'telemetry-settings',
        title: 'Como desativar a telemetria em ferramentas de LLM local?',
        rows: [
          {
            Ferramenta: '[Ollama](https://ollama.com)',
            'Telemetria padrão': 'Nenhuma no uso local; nuvem é opcional',
            'Como confirmar/desativar': 'OLLAMA_NO_CLOUD=1 desativa recursos de nuvem',
          },
          {
            Ferramenta: '[LM Studio](https://lmstudio.ai)',
            'Telemetria padrão': 'Nenhuma (política); busca/atualização enviam dados anônimos',
            'Como confirmar/desativar': 'Nada a desativar; verifique com firewall/captura de pacotes',
          },
          {
            Ferramenta: '[Jan AI](https://jan.ai)',
            'Telemetria padrão': 'Analytics opt-in, escolhido na primeira execução',
            'Como confirmar/desativar': 'Recuse na primeira execução; código aberto',
          },
          {
            Ferramenta: '[GPT4All](https://nomic.ai/gpt4all)',
            'Telemetria padrão': 'Apenas opt-in, na primeira execução',
            'Como confirmar/desativar': 'Recuse na primeira execução; verifique com firewall',
          },
        ],
        columns: ['Ferramenta', 'Telemetria padrão', 'Como confirmar/desativar'],
      },
      threatModel: {
        id: 'threat-model',
        title: 'Qual modelo de ameaças você deve presumir?',
        content: [
          '**Presuma que seu ambiente de LLM local pode vazar dados por ferramentas, plugins ou erros de configuração. Trate o modelo como não confiável — projete sua configuração de modo que, mesmo que o modelo seja comprometido, dados sensíveis não possam ser acessados nem transmitidos. Isso significa isolar a ferramenta de inferência da internet, desativar a telemetria e restringir o acesso ao sistema de arquivos.**',
          'Segurança não é apenas privacidade de dados — a prompt injection é um vetor de ataque separado, em que uma entrada maliciosa manipula o comportamento do modelo. Para técnicas de defesa contra injection que valem tanto para modelos locais quanto para modelos na nuvem, veja [prompt injection e segurança](/pt/prompt-engineering/prompt-injection-and-security).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Quais são as perguntas de segurança mais comuns sobre LLMs locais?',
        faqs: [
          {
            q: 'Um LLM local pode acessar meus arquivos ou a internet?',
            a: 'Não -- o modelo em si é um arquivo estático que gera texto. Ele não tem capacidade de ler seu sistema de arquivos ou fazer solicitações de rede. No entanto, a ferramenta de inferência que executa o modelo (Ollama, LM Studio) tem acesso normal em nível de sistema operacional. Algumas ferramentas incluem funções que realmente leem arquivos -- como o LocalDocs do GPT4All ou o recurso de anexar arquivos do LM Studio. Esses recursos são opt-in e explicitamente documentados.',
          },
          {
            q: 'É seguro usar um LLM local com dados cobertos pela HIPAA?',
            a: 'A inferência local elimina o risco do processador de dados terceirizado que as APIs em nuvem criam. No entanto, a conformidade com a HIPAA exige mais do que inferência privada -- você precisa de criptografia de disco completo, controles de acesso, registro de auditoria e um Acordo de Associado Comercial (BAA) caso algum fornecedor de software possa acessar PHI. Usar o Ollama com o FileVault habilitado e a telemetria desativada é um ponto de partida razoável, mas a conformidade formal com a HIPAA exige uma avaliação de risco completa.',
          },
          {
            q: 'O Ollama envia meus prompts para algum lugar?',
            a: 'Não quando você executa modelos locais. O FAQ do Ollama afirma: "We don\'t see your prompts or data when you run locally" (não vemos seus prompts ou dados quando você executa localmente). Os modelos em nuvem e a busca na web do Ollama são opcionais e enviam prompts aos servidores do Ollama; defina `OLLAMA_NO_CLOUD=1` para desativá-los. O tráfego de saída esperado de uma configuração local são os downloads de modelos com `ollama pull` e as verificações de atualização. O Ollama é de código aberto ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
          },
          {
            q: 'Usar um LLM local é mais privado do que usar a API da OpenAI?',
            a: 'Sim, em termos de privacidade dos prompts. Com um LLM local, seus prompts nunca saem da sua máquina. A API da OpenAI envia os prompts para os servidores da OpenAI para processamento. Os Termos de Serviço da API da OpenAI afirmam que a entrada/saída da API não é usada para treinar modelos por padrão, mas os dados transitam pela infraestrutura deles. Para dados sensíveis ou regulados (médicos, jurídicos, financeiros), a inferência local é a escolha mais conservadora.',
          },
          {
            q: 'Como verifico se um arquivo de modelo baixado é seguro?',
            a: 'Baixe modelos apenas do Hugging Face (huggingface.co) ou da biblioteca oficial do Ollama. No Hugging Face, cada arquivo mostra um hash SHA256 -- verifique-o com `sha256sum <model_file>` após o download. Fique com modelos de publicadores conhecidos: Meta, Google, Microsoft, Mistral AI e Qwen/Alibaba. Evite compartilhamentos anônimos de arquivos ou postagens em servidores do Discord.',
          },
          {
            q: 'Qual é a diferença entre privacidade e segurança para LLMs locais?',
            a: 'Privacidade significa que seus prompts e saídas não são acessíveis a terceiros. Segurança significa que seu sistema está protegido contra ameaças. Um LLM local pode ser privado (nenhum dado sai da sua máquina), mas inseguro (modelo baixado de uma fonte não confiável, ou API do Ollama exposta na rede). Ambos precisam ser tratados de forma independente.',
          },
          {
            q: 'Posso usar um LLM local para dados regulados pela LGPD?',
            a: 'A inferência local reduz significativamente o risco de conformidade com a LGPD porque os dados não saem da sua infraestrutura. No entanto, você ainda deve verificar se a ferramenta de inferência (Ollama, LM Studio) não envia tráfego de rede inesperado, se a criptografia de disco está habilitada e se os controles de acesso estão em vigor. Para requisitos de relatório de impacto à proteção de dados, documente sua configuração de tratamento de dados e confirme que nenhum dado pessoal transita por servidores de terceiros.',
          },
          {
            q: 'O LM Studio é seguro de usar?',
            a: 'Sim, quanto à privacidade dos prompts: segundo a política de privacidade do LM Studio, chats e documentos permanecem no seu dispositivo, a menos que você use os serviços em nuvem do LM Studio, e o app não inclui telemetria nem rastreamento específico de usuários. Os riscos restantes são os de toda ferramenta local: arquivos de modelo de publicadores não confiáveis, uma API local aberta à rede com "Serve on Local Network" e uma versão desatualizada do app. Baixe modelos de publicadores conhecidos do Hugging Face, habilite essa opção apenas quando precisar e mantenha o app atualizado.',
          },
          {
            q: 'O LM Studio coleta dados ou os envia para os servidores dele?',
            a: 'A política de privacidade do LM Studio afirma que o aplicativo não inclui telemetria nem rastreamento específico de usuários. As verificações de atualização enviam a versão do app, o sistema operacional e o endereço IP (via CDN), e a busca e o download de modelos enviam consultas de busca anonimizadas. O conteúdo de chats e documentos não é tratado, a menos que você use os serviços em nuvem do LM Studio. Não há configuração de dados de uso para desativar; verifique com um firewall ou captura de pacotes.',
          },
          {
            q: 'O Ollama é seguro de usar?',
            a: 'Sim para prompts locais, se você o mantiver atualizado e fora da rede. O Ollama afirma que não vê seus prompts nem seus dados quando você executa localmente, e ele escuta em 127.0.0.1 por padrão. As vulnerabilidades são o principal risco: o CVE-2026-7482 afetou versões anteriores à 0.17.1 e podia ser explorado por meio de uma API acessível, e duas falhas do atualizador do Windows (CVE-2026-42248 e CVE-2026-42249) foram relatadas em 2026. Atualize, mantenha a porta 11434 fechada para outros dispositivos e confira as notas de versão para correções do atualizador.',
          },
          {
            q: 'Como impeço que o Ollama seja acessado por outros dispositivos da minha rede?',
            a: 'Por padrão, o Ollama escuta no localhost (127.0.0.1:11434) e não fica acessível a outros dispositivos. Se você definiu antes OLLAMA_HOST=0.0.0.0 para permitir acesso pela rede, reverta: `export OLLAMA_HOST=127.0.0.1:11434`. Verifique o isolamento tentando se conectar a partir de outro dispositivo da sua rede -- a conexão deve falhar.',
          },
          {
            q: 'Qual ferramenta de LLM local é a melhor para máxima privacidade?',
            a: 'Com base nos padrões publicados, o Jan AI é o mais restritivo entre as quatro: totalmente de código aberto (licença Apache 2.0), com analytics opt-in escolhido na primeira execução. O Ollama vem em seguida: código aberto, escuta no localhost por padrão e os recursos de nuvem podem ser desativados com `OLLAMA_NO_CLOUD=1`. O LM Studio não tem telemetria segundo sua política de privacidade, mas as verificações de atualização e a busca de modelos enviam dados anonimizados.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Onde encontrar fontes adicionais?',
        items: [
          '**OWASP Top 10 for LLM Applications** ([owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)) -- Riscos de segurança para implantações de LLM, incluindo prompt injection e ataques à cadeia de suprimentos',
          '**Hugging Face Model Card Documentation** (huggingface.co/docs/hub/model-cards) -- Padrões de procedência de modelos e verificação de hash SHA256',
          '**VeraCrypt** (veracrypt.fr) -- Criptografia de disco completo e de pastas de código aberto para Windows, macOS e Linux',
          '**Ollama FAQ** ([docs.ollama.com/faq](https://docs.ollama.com/faq)) -- endereço de bind padrão, recursos de nuvem e a configuração `OLLAMA_NO_CLOUD`',
          '**Política de privacidade do LM Studio** ([lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)) -- o que o app coleta e quando',
          '**Página de privacidade do Jan** ([docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)) -- analytics opt-in',
          '**The Hacker News, relatório sobre vulnerabilidade do Ollama** ([thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)) -- CVE-2026-7482 e as falhas do atualizador do Windows',
          '**Aviso do CERT Polska** ([cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)) -- versões afetadas pelo CVE-2026-42248 e pelo CVE-2026-42249',
        ],
      },
      commonMistakes: {
        title: 'Quais são os erros de segurança mais comuns em LLMs locais?',
        content: '**A maioria das falhas de segurança em LLMs locais vem de descuidos de configuração, não de vulnerabilidades do modelo.** Estes são os seis erros mais frequentes e como corrigir cada um.',
        items: [
          '**Erro:** Baixar modelos de sites de terceiros (Discord, releases aleatórios do GitHub). **Correção:** Use apenas o Hugging Face (huggingface.co) ou a biblioteca do Ollama. Verifique com `sha256sum`.',
          '**Erro:** Presumir que inferência local = privacidade total. **Correção:** Bloqueie o tráfego de saída após o download do modelo, inspecione o LM Studio e o GPT4All com um firewall e recuse a telemetria do GPT4All na primeira execução. Execute `netstat -an | grep 11434` para confirmar que não há portas inesperadas.',
          '**Erro:** Deixar `OLLAMA_HOST=0.0.0.0` ativo após os testes. **Correção:** Reverta: `export OLLAMA_HOST=127.0.0.1:11434`. Teste a partir de outro dispositivo — a conexão deve ser recusada.',
          '**Erro:** Pular a criptografia de disco em cargas de trabalho sujeitas à HIPAA/LGPD. **Correção:** Habilite o FileVault (macOS) ou o BitLocker (Windows). Criptografe separadamente a pasta de registros de chat do LM Studio.',
          '**Erro:** Não revisar extensões de terceiros no Open WebUI ou no Jan AI. **Correção:** Audite as extensões instaladas todo mês. Remova as que solicitam acesso à rede e que você não reconhece.',
          '**Erro:** Continuar com uma versão antiga do Ollama após a divulgação de uma vulnerabilidade. **Correção:** Execute `ollama --version` e atualize para a versão 0.17.1 ou posterior. No Windows, revise também os avisos sobre o atualizador na seção de vulnerabilidades acima.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Quais são as considerações regionais de conformidade?',
        content: '**A inferência de LLM local reduz o risco de residência de dados, mas a conformidade regulatória completa exige controles adicionais conforme a região.** Esta seção traz informações gerais e não constitui aconselhamento jurídico; confirme os requisitos com um advogado ou encarregado de proteção de dados.',
        items: [
          '**Brasil / LGPD (Lei nº 13.709/2018):** a inferência local mantém os dados dos prompts na sua infraestrutura, sem envio a um provedor de nuvem. Você ainda deve verificar o tráfego de rede do LM Studio com um firewall, habilitar a criptografia de disco, controlar o acesso e documentar o tratamento de dados para eventuais auditorias ou solicitações da ANPD (Autoridade Nacional de Proteção de Dados).',
          '**União Europeia / GDPR (2018):** a inferência local pode eliminar a relação de operador do Artigo 28 com um provedor de modelo na etapa de inferência. Você ainda deve verificar o tráfego de rede do LM Studio com um firewall, habilitar a criptografia de disco e documentar sua configuração de tratamento de dados para qualquer DPIA. Faça uma avaliação de legítimo interesse antes de tratar dados pessoais.',
          '**Estados Unidos / HIPAA:** a HIPAA exige salvaguardas para PHI: criptografia de disco completo (o "porto seguro da criptografia"), controles de acesso e registro de auditoria. O Ollama com FileVault habilitado e telemetria desativada é um ponto de partida razoável para a HIPAA. A conformidade formal exige uma avaliação de risco completa.',
          '**Japão / APPI (2022):** a Lei de Proteção de Informações Pessoais exige a proteção de dados pessoais durante o tratamento. A inferência local em uma máquina air-gapped pode ajudar a atender aos requisitos de localização de dados. Desative as verificações de atualização do Ollama e verifique o tráfego de rede do LM Studio com um firewall como parte da sua avaliação da APPI.',
          '**China / PIPL (2021):** executar um LLM local para uso interno em geral não exige registro na CAC; confirme com assessoria jurídica. Se você implantar um LLM local como serviço voltado ao público na China, o registro de algoritmo na CAC é obrigatório.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'O que mais você deve ler?',
        items: [
          '[O que são LLMs locais?](/pt/local-llms/what-are-local-llms) -- Conceitos e componentes essenciais',
          '[LLMs locais vs. APIs na nuvem](/pt/local-llms/local-llms-vs-cloud-apis) -- Trade-offs de privacidade',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) -- Instalação e configuração',
          '[Como executar LLMs locais em um notebook](/pt/local-llms/local-llm-on-laptop) -- Configuração segura para notebook',
          '[Instaladores de LLM local com um clique](/pt/local-llms/local-llm-one-click-installers) -- Compare os instaladores do LM Studio, Ollama, Jan AI e GPT4All em privacidade e facilidade de configuração',
          '[Solução de problemas na configuração de LLMs locais](/pt/local-llms/troubleshooting-local-llm-setup) -- Corrija erros comuns, incluindo porta 11434 recusada e GPU não detectada',
          '[IA local atrás de firewall / offline (2026)](/pt/power-local-llm/local-ai-behind-firewall-offline-2026) -- Ollama air-gapped: isolamento de rede, registro de auditoria e configuração sem internet.',
          '[Melhor VPN para desenvolvimento de IA na China (2026)](/pt/prompt-bites/best-vpn-for-ai-development-china-2026) -- Acessar Hugging Face, GitHub e registros de modelos de trás do firewall.',
          '[Prontidão para SOC 2 e ISO 27001 em implantações de LLM auto-hospedadas](/pt/local-llms/soc2-iso27001-self-hosted-llm-compliance) -- a versão em formato de framework de auditoria desta lista, para responsáveis por conformidade que se preparam para uma auditoria SOC 2 ou ISO 27001.',
        ],
      },
    },
    twitterDescription: 'Checklist de 12 passos para LLM local: LM Studio e Ollama são seguros? Desative a telemetria, corrija o CVE-2026-7482 e isole a porta 11434.',
  },

  de: {
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Checkliste für Sicherheit und Datenschutz bei lokalen LLMs: 12 Schritte zu einem sicheren Setup',
    seoTitle: 'Lokale LLM-Sicherheit 2026: Ist LM Studio sicher?',
    intro: 'LM Studio, Ollama, Jan und GPT4All halten Ihre Prompts von externen Servern fern, wenn Sie Modelle lokal betreiben, doch das macht Ihre Umgebung nicht automatisch sicher. Telemetrie, nicht vertrauenswürdige Modelldateien, ungepatchte Versionen und exponierte APIs können weiterhin Daten preisgeben. Diese Checkliste zeigt, wie Sie ein lokales LLM in unter 10 Minuten absichern.',
    metaDescription: 'Ist LM Studio sicher? Und Ollama? 12-Punkte-Checkliste für lokale LLMs: Was jedes Tool sendet, Ollama CVE-2026-7482, Telemetrie, Port 11434.',
    heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-de.webp',
    twitterDescription: '12-Punkte-Checkliste zur LLM-Sicherheit: Ist LM Studio sicher, ist Ollama sicher? Telemetrie abschalten, CVE-2026-7482 patchen, Port 11434 isolieren.',
    publishDate: '2026-04-04',
    dateModified: '2026-11-15',
    readTime: '8 min Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'Datenschutz bei lokalen LLMs',
    toc: [
      {
        label: 'Wichtigste Erkenntnisse',
        anchor: '#key-takeaways',
      },
      {
        label: 'Sind LM Studio, Ollama, Jan und GPT4All sicher?',
        anchor: '#are-lm-studio-ollama-safe',
      },
      {
        label: 'Aktuelle Sicherheitslücken in lokalen LLM-Tools',
        anchor: '#recent-vulnerabilities',
      },
      {
        label: 'Warum lokale LLMs nicht automatisch privat sind',
        anchor: '#why-not-automatically-private',
      },
      {
        label: 'Modellherkunft: Sichere Download-Quellen',
        anchor: '#model-provenance',
      },
      {
        label: 'Netzwerkisolation: Ausgehende Verbindungen blockieren',
        anchor: '#network-isolation',
      },
      {
        label: 'Telemetrie-Einstellungen nach Tool',
        anchor: '#telemetry-settings',
      },
      {
        label: 'Threat Model',
        anchor: '#threat-model',
      },
      {
        label: 'Häufige Fragen',
        anchor: '#faq',
      },
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
          'Die 5 unverzichtbaren Schritte: (1) kein Internetzugang für den Modellprozess, (2) Modelldateien vor dem Laden per SHA-256 prüfen, (3) API-Endpunkte nur an localhost binden und das Tool auf einem gepatchten Stand halten, (4) Prompt-Protokolle verschlüsselt speichern oder ganz deaktivieren, (5) keine Drittanbieter-Plugins ohne Quellcode-Prüfung.',
          'Sind LM Studio, Ollama, Jan und GPT4All sicher? Ja, was die Vertraulichkeit der Prompts betrifft: Keines der Tools sendet Chat-Prompts an einen Modellanbieter, wenn Sie ein lokales Modell ausführen. Für den sicheren Betrieb braucht es zusätzlich aktuelle Versionen, einen geschlossenen API-Port und vertrauenswürdige Modelldateien.',
          'Lokale Inferenz hält Prompt-Daten von den Servern Dritter fern. Die verbleibenden Risiken sind: Telemetrie des Inferenz-Tools, Modelldateien aus nicht vertrauenswürdigen Quellen, ungepatchte Versionen und die Ollama-API, die im Netzwerk verfügbar gemacht wird.',
          'Aktualisieren Sie Ollama auf Version 0.17.1 oder neuer: CVE-2026-7482 („Bleeding Llama“, als kritisch eingestuft) erlaubte einem nicht authentifizierten Angreifer, den Prozessspeicher einer exponierten Ollama-API auszulesen.',
          'Ollama bindet sich standardmäßig an localhost -- es ist nicht von anderen Geräten aus erreichbar, es sei denn, Sie setzen explizit OLLAMA_HOST=0.0.0.0.',
          'Prüfen Sie, was LM Studio sendet: Laut Datenschutzerklärung enthält es keine Telemetrie, aber Update-Prüfungen und Modellsuche senden anonymisierte Daten. Lehnen Sie die Telemetrie in GPT4All beim ersten Start ab (Opt-in) und blockieren Sie nach dem Modell-Download ausgehenden Datenverkehr.',
          'Laden Sie Modellgewichte nur von Hugging Face (huggingface.co) oder aus der offiziellen Ollama-Bibliothek herunter. Überprüfen Sie SHA256-Prüfsummen für sensible Bereitstellungen.',
          'Für regulierte Daten (HIPAA, DSGVO, rechtliche Privilegien): Aktivieren Sie Vollverschlüsselung der Festplatte, verwenden Sie einen isolierten Computer und überprüfen Sie alle installierten Erweiterungen.',
        ],
      },
      toolSafety: {
        id: 'are-lm-studio-ollama-safe',
        title: 'Sind LM Studio, Ollama, Jan und GPT4All sicher?',
        content: [
          '**Ja, was die Vertraulichkeit der Prompts betrifft: Keines der vier Tools sendet Ihre Chat-Prompts an einen Modellanbieter, wenn Sie ein lokales Modell ausführen.** Unterschiedlich sind der Netzwerk-Fußabdruck jedes Tools und das, was Sie prüfen sollten.',
        ],
        items: [
          '**LM Studio:** Die [Datenschutzerklärung von LM Studio](https://lmstudio.ai/app-privacy) gibt an, dass die App keine Telemetrie und kein nutzerbezogenes Tracking enthält und Ihre Chats oder Dokumente nicht verarbeitet, sofern Sie nicht die LM-Studio-Cloud-Dienste nutzen. Update-Prüfungen und Modellsuche senden begrenzte, anonymisierte Daten. Aktivieren Sie „Serve on Local Network“ nur, wenn andere Geräte die API brauchen.',
          '**Ollama:** Laut [Ollama-FAQ](https://docs.ollama.com/faq) gilt: „We don\'t see your prompts or data when you run locally“, und der Server bindet sich standardmäßig an 127.0.0.1 auf Port 11434. Cloud-Modelle und Websuche sind optionale Funktionen, die Prompts an die Server von Ollama senden; mit `OLLAMA_NO_CLOUD=1` schalten Sie sie ab. Halten Sie Ollama aktuell (siehe Abschnitt zu den Sicherheitslücken unten).',
          '**Jan:** Open Source unter der Apache-2.0-Lizenz ([GitHub](https://github.com/janhq/jan)). Die [Datenschutzseite](https://docs.jan.ai/desktop/privacy) sagt, Analytics seien Opt-in („Zero data collection until you say so“), beim ersten Start zu wählen, und Ihre Chats blieben Ihre. Wenn Sie einen Cloud-Anbieter anbinden, gehen Ihre Nachrichten an diesen Anbieter.',
          '**GPT4All:** Telemetrie und das Teilen von Chats im Datalake sind Opt-in. Lehnen Sie beides beim ersten Start ab und prüfen Sie danach die Einstellungen.',
          '**Für alle vier:** Blockieren Sie ausgehenden Datenverkehr, nachdem die Modelle heruntergeladen sind, beziehen Sie Modelldateien nur von bekannten Verlegern und halten Sie die App auf einem aktuellen Release.',
        ],
      },
      recentVulns: {
        id: 'recent-vulnerabilities',
        title: 'Welche aktuellen Sicherheitslücken betreffen lokale LLM-Tools?',
        content: [
          '**Für Ollama wurden 2026 zwei Gruppen von Sicherheitslücken bekannt: Die eine ist über eine exponierte API ausnutzbar, die andere über den Windows-Updater.** Der lokale Betrieb macht ungepatchte Software nicht sicher.',
        ],
        items: [
          '**CVE-2026-7482 („Bleeding Llama“):** ein Heap-Out-of-Bounds-Read im GGUF-Modell-Loader von Ollama, behoben in Ollama 0.17.1; [The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html) nennt einen CVSS-Wert von 9,1. Ein nicht authentifizierter Angreifer, der die API erreichen kann, kann eine manipulierte GGUF-Datei hochladen und Prozessspeicher auslesen, der Umgebungsvariablen, API-Schlüssel und Gesprächsdaten enthalten kann. Eine an localhost gebundene Installation ist aus dem Netzwerk nicht erreichbar; exponierte Instanzen sind es.',
          '**CVE-2026-42248 und CVE-2026-42249 (je CVSS 7,7):** Der Updater von Ollama für Windows prüft die Update-Binärdatei nicht und bildet seinen Staging-Pfad aus HTTP-Antwort-Headern. [CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248) nennt die Versionen 0.12.10 bis 0.17.5 und führte bei der Veröffentlichung keine gepatchte Version auf; andere Berichte geben eine höhere Obergrenze an. Ein Angreifer braucht die Kontrolle über den Update-Server, den der Client kontaktiert. Bis eine Korrektur in den Ollama-Release-Notes bestätigt ist, können Windows-Nutzer automatische Updates abschalten und neue Versionen manuell vom offiziellen Download installieren.',
          '**So prüfen Sie Ihr Setup:** Führen Sie `ollama --version` aus und aktualisieren Sie, wenn die Version unter 0.17.1 liegt. Vergewissern Sie sich, dass `OLLAMA_HOST` nicht auf 0.0.0.0 gesetzt ist, und versuchen Sie dann, Port 11434 von einem anderen Gerät in Ihrem Netzwerk zu erreichen; die Verbindung sollte abgelehnt werden.',
        ],
      },
      whyNotAutoPrivate: {
        id: 'why-not-automatically-private',
        title: 'Warum sind lokale LLMs nicht automatisch privat?',
        content: [
          '**Die Modell-Inferenz selbst ist privat -- beim Betrieb eines lokalen Modells werden Ihre Prompts nicht an die Server des Modellanbieters gesendet.** Aber drei weitere Datenflüsse können zu Informationslecks führen:',
        ],
        items: [
          '**Anwendungs-Telemetrie**: LM Studio gibt in seiner Datenschutzerklärung an, keine Telemetrie und kein nutzerbezogenes Tracking zu enthalten, aber Update-Prüfungen und Modellsuche senden anonymisierte Daten. Die GPT4All-Telemetrie ist Opt-in. Andere Tools erfassen eventuell Nutzungsanalysen, prüfen Sie daher mit einer Firewall.',
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
          '**Telemetrie-Lecks** → manche Tools senden Nutzungsdaten; LM Studio sendet Anfragen für Update-Prüfung und Modellsuche',
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
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Eine Sicherheitscheckliste für lokale LLMs: Netzwerkzugriff isolieren, SHA-256 der Modelldateien prüfen, API an localhost binden, Prompt-Protokolle verschlüsseln oder deaktivieren, alle Drittanbieter-Plugins prüfen.',
          },
          {
            type: 'plain-terms',
            text: 'Lokale LLMs sind nur dann standardmäßig privat, wenn sie richtig konfiguriert sind — die 5 Schritte oben decken die wichtigsten Angriffsflächen eines lokalen Inferenz-Setups ab.',
          },
        ],
        numberedItems: [
          {
            title: 'Laden Sie Modelle nur aus vertrauenswürdigen Quellen herunter',
            whyItMatters: 'Verhindert bösartige Modelldateien aus nicht vertrauenswürdigen Quellen.',
          },
          {
            title: 'Überprüfen Sie Modell-Prüfsummen für sensible Anwendungen',
            whyItMatters: 'Stellt sicher, dass heruntergeladene Modelldateien nicht manipuliert wurden.',
          },
          {
            title: 'Deaktivieren Sie Telemetrie in Ihrem Inferenz-Tool',
            whyItMatters: 'Verhindert, dass Nutzungsdaten und Sitzungsinformationen erfasst werden.',
          },
          {
            title: 'Bestätigen Sie, dass Ollama nur an localhost gebunden ist',
            whyItMatters: 'Verhindert, dass die API anderen Geräten in Ihrem Netzwerk offengelegt wird.',
          },
          {
            title: 'Aktivieren Sie die Vollverschlüsselung der Festplatte',
            whyItMatters: 'Schützt Modellgewichte und Chat-Protokolle, falls das Gerät verloren geht.',
          },
          {
            title: 'Speichern Sie sensible Chat-Protokolle in einem verschlüsselten Ordner',
            whyItMatters: 'Schützt Gesprächsverlauf mit sensiblen Daten vor unbefugtem Zugriff.',
          },
          {
            title: 'Überprüfen Sie installierte Erweiterungen und Plugins',
            whyItMatters: 'Verhindert, dass bösartige Drittanbieter-Erweiterungen das Netzwerk zugänglich machen.',
          },
          {
            title: 'Verwenden Sie ein dediziertes Benutzerkonto für LLM-Arbeiten',
            whyItMatters: 'Isoliert Modelldateien, Gesprächsverlauf und API-Schlüssel von Ihrem Hauptprofil.',
          },
          {
            title: 'Machen Sie die lokale API nicht im Internet verfügbar',
            whyItMatters: 'Verhindert unbefugten Fernzugriff auf Ihre lokale Inferenz-Engine.',
          },
          {
            title: 'Überprüfen Sie System-Prompts in jeder App, die lokale LLMs nutzt',
            whyItMatters: 'Verhindert Datenverlust durch Browser-Erweiterungen oder Produktivitäts-Tool-Integrationen.',
          },
          {
            title: 'Halten Sie Inferenz-Tools aktuell',
            whyItMatters: 'Behebt bekannte Sicherheitslücken, zum Beispiel Ollama CVE-2026-7482 (behoben in 0.17.1).',
          },
          {
            title: 'Für isolierte oder regulierte Umgebungen: Dokumentieren Sie genehmigte Modellversionen',
            whyItMatters: 'Stellt sicher, dass regulatorische Anforderungen für Datenbehandlung und Infrastruktur-Isolation erfüllt werden.',
          },
        ],
        image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-de.webp',
        imageCaption: 'Jeden Punkt vor der Arbeit mit sensiblen oder regulierten Daten prüfen.',
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
        id: 'model-provenance',
        title: 'Wo sollten Sie lokale LLM-Modelgewichte sicher herunterladen?',
        content: [
          '**Modellgewichte sind große Binärdateien.** Eine fehlerhaft aufgebaute GGUF-Datei kann Fehler im Parser ausnutzen, der sie lädt: CVE-2026-7482 war ein Heap-Out-of-Bounds-Read im GGUF-Loader von Ollama, behoben in Ollama 0.17.1.',
        ],
        items: [
          '**Hugging Face** (huggingface.co): die primäre Quelle für offene Modelle. Jede Datei hat einen verifizierten SHA256-Hash. Halten Sie sich an Modelle von bekannten Verlegern (Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba).',
          '**Ollama-Bibliothek** ([ollama.com/library](https://ollama.com/library)): Ollama verifiziert Modell-Hashes vor dem Speichern. Laden Sie aus der offiziellen Bibliothek oder von Verlegern, denen Sie vertrauen.',
          '**LM Studio-Modellbrowser**: durchsucht Hugging Face direkt. Die gleichen Vertrauensregeln gelten -- überprüfen Sie das Verleger-Konto.',
          '**Vermeiden Sie**: anonyme Datei-Freigabe-Seiten, Discord-Datei-Drops und jede Quelle, die keinen verifizierbaren Hash bereitstellt.',
        ],
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'Wie Sie ausgehende Verbindungen von lokalen LLMs blockieren',
        content: '**Blockieren Sie ausgehende Verbindungen nach dem Modell-Download, um zu verhindern, dass das Inferenz-Tool nach Hause "telefoniert".** Unter macOS verwenden Sie `pf` Firewall; unter Linux verwenden Sie `ufw` oder OpenSnitch:',
        codeBlock: '# macOS -- Ollama ausgehend mit pf Firewall blockieren\n# Fügen Sie zu /etc/pf.conf hinzu:\nblock out proto tcp from any to any user ollama\n\n# Linux -- blockieren mit ufw\nsudo ufw deny out from any to any app ollama\n\n# Oder verwenden Sie Little Snitch (macOS) / OpenSnitch (Linux)\n# für anwendungsspezifische Netzwerkkontrolle mit GUI',
        codeLanguage: 'bash',
      },
      telemetry: {
        id: 'telemetry-settings',
        title: 'Wie Sie Telemetrie in lokalen LLM-Tools deaktivieren',
        rows: [
          {
            Tool: '[Ollama](https://ollama.com)',
            'Telemetrie Standard': 'Keine bei lokaler Nutzung; Cloud optional',
            'Überprüfung/Deaktivieren': 'OLLAMA_NO_CLOUD=1 deaktiviert Cloud-Funktionen',
          },
          {
            Tool: '[LM Studio](https://lmstudio.ai)',
            'Telemetrie Standard': 'Keine laut Policy; Update/Suche anonymisiert',
            'Überprüfung/Deaktivieren': 'Nichts zu deaktivieren; per Firewall prüfen',
          },
          {
            Tool: '[Jan AI](https://jan.ai)',
            'Telemetrie Standard': 'Analytics Opt-in, beim ersten Start gewählt',
            'Überprüfung/Deaktivieren': 'Beim ersten Start ablehnen; Open Source',
          },
          {
            Tool: '[GPT4All](https://nomic.ai/gpt4all)',
            'Telemetrie Standard': 'Nur Opt-in beim ersten Start',
            'Überprüfung/Deaktivieren': 'Beim ersten Start ablehnen; per Firewall prüfen',
          },
        ],
        columns: ['Tool', 'Telemetrie Standard', 'Überprüfung/Deaktivieren'],
      },
      threatModel: {
        id: 'threat-model',
        title: 'Welches Threat Model sollten Sie annehmen?',
        content: [
          '**Gehen Sie davon aus, dass Ihre lokale LLM-Umgebung über Tools, Plugins oder Fehlkonfiguration Daten preisgeben kann. Behandeln Sie das Modell als nicht vertrauenswürdig und entwerfen Sie Ihre Infrastruktur so, dass selbst bei einer Kompromittierung des Modells sensible Daten nicht zugänglich oder übertragbar sind. Dies bedeutet Isolation des Inference-Tools vom Internet, Deaktivierung der Telemetrie und Einschränkung des Dateisystemzugriffs.**',
          'Sicherheit ist nicht nur Datenschutz — Prompt-Injection ist ein eigenständiger Angriffsvektor, bei dem schädliche Eingaben das Modellverhalten manipulieren. Injection-Abwehrtechniken, die für lokale und Cloud-Modelle gelten, finden Sie unter [Prompt-Injection und Sicherheit](https://www.promptquorum.com/de/prompt-engineering/prompt-injection-and-security).',
        ],
      },
      faqSection: {
        id: 'faq',
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
            a: 'Nicht, wenn Sie lokale Modelle ausführen. Die Ollama-FAQ sagt: „We don\'t see your prompts or data when you run locally.“ Ollama-Cloud-Modelle und die Websuche sind optional und senden Prompts tatsächlich an die Server von Ollama; mit `OLLAMA_NO_CLOUD=1` schalten Sie sie ab. Zu erwarten ist bei einem lokalen Setup ausgehender Datenverkehr für Modell-Downloads mit `ollama pull` und für Update-Prüfungen. Ollama ist Open Source ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
          },
          {
            q: 'Ist ein lokales LLM privater als die Nutzung der OpenAI-API?',
            a: 'Ja, was die Vertraulichkeit der Prompts betrifft. Bei einem lokalen LLM verlassen Ihre Prompts Ihren Rechner nie. Die OpenAI-API sendet Prompts zur Verarbeitung an die Server von OpenAI. Laut den API-Nutzungsbedingungen von OpenAI werden API-Ein- und -Ausgaben standardmäßig nicht zum Training von Modellen verwendet, die Daten durchlaufen aber dennoch deren Infrastruktur. Für sensible oder regulierte Daten (medizinisch, rechtlich, finanziell) ist lokale Inferenz die vorsichtigere Wahl.',
          },
          {
            q: 'Wie überprüfe ich, ob eine heruntergeladene Modelldatei sicher ist?',
            a: 'Laden Sie Modelle nur von Hugging Face (huggingface.co) oder aus der offiziellen Ollama-Bibliothek herunter. Auf Hugging Face zeigt jede Datei einen SHA256-Hash -- prüfen Sie ihn nach dem Download mit `sha256sum <model_file>`. Halten Sie sich an Modelle bekannter Verleger: Meta, Google, Microsoft, Mistral AI und Qwen/Alibaba. Meiden Sie anonyme Datei-Freigaben oder Discord-Datei-Drops.',
          },
          {
            q: 'Was ist der Unterschied zwischen Datenschutz und Sicherheit bei lokalen LLMs?',
            a: 'Datenschutz bedeutet, dass Ihre Prompts und Ausgaben für Dritte nicht zugänglich sind. Sicherheit bedeutet, dass Ihr System vor Bedrohungen geschützt ist. Ein lokales LLM kann privat sein (keine Daten verlassen Ihren Rechner), aber unsicher (Modell aus einer nicht vertrauenswürdigen Quelle geladen oder Ollama-API im Netzwerk exponiert). Beides muss unabhängig voneinander adressiert werden.',
          },
          {
            q: 'Kann ich ein lokales LLM für DSGVO-regulierte Daten verwenden?',
            a: 'Lokale Inferenz reduziert das DSGVO-Risiko erheblich, da Daten Ihre Infrastruktur nicht verlassen. Sie müssen jedoch immer noch überprüfen, dass das Inferenz-Tool (Ollama, LM Studio) keinen unerwarteten Netzwerkverkehr sendet, dass Festplattenverschlüsselung aktiviert ist und dass Zugriffskontrolle vorhanden ist. Für Artikel-35-DPIA-Anforderungen dokumentieren Sie Ihr Datenverarbeitungs-Setup und bestätigen Sie, dass keine personenbezogenen Daten Drittanbieter-Server durchlaufen.',
          },
          {
            q: 'Ist LM Studio sicher? Wie steht es um den Datenschutz?',
            a: 'Ja, was den Datenschutz betrifft: Laut Datenschutzerklärung von LM Studio bleiben Chats und Dokumente auf Ihrem Gerät, sofern Sie nicht die LM-Studio-Cloud-Dienste nutzen, und die App enthält keine Telemetrie und kein nutzerbezogenes Tracking. Die verbleibenden Risiken hat jedes lokale Tool: Modelldateien von nicht vertrauenswürdigen Verlegern, eine lokale API, die mit „Serve on Local Network“ ins Netzwerk geöffnet wird, und eine veraltete App-Version. Laden Sie Modelle von bekannten Hugging-Face-Verlegern herunter, aktivieren Sie die Einstellung nur bei Bedarf und halten Sie die App aktuell.',
          },
          {
            q: 'Sammelt LM Studio Daten oder sendet es Daten an seine Server?',
            a: 'Laut Datenschutzerklärung von LM Studio enthält die Anwendung keine Telemetrie und kein nutzerbezogenes Tracking. Update-Prüfungen senden App-Version, Betriebssystem und IP-Adresse (über CDN), Modellsuche und -downloads senden anonymisierte Suchanfragen. Chat-Inhalte und Dokumente werden nur verarbeitet, wenn Sie die LM-Studio-Cloud-Dienste nutzen. Es gibt keine Einstellung zum Deaktivieren; prüfen Sie per Firewall oder Paketmitschnitt.',
          },
          {
            q: 'Ist Ollama sicher?',
            a: 'Ja für lokale Prompts, wenn Sie es aktuell halten und aus dem Netzwerk heraushalten. Ollama gibt an, Ihre Prompts und Daten bei lokaler Ausführung nicht zu sehen, und bindet sich standardmäßig an 127.0.0.1. Das Hauptrisiko sind Sicherheitslücken: CVE-2026-7482 betraf Versionen vor 0.17.1 und war über eine erreichbare API ausnutzbar, und 2026 wurden zwei Schwachstellen im Windows-Updater (CVE-2026-42248 und CVE-2026-42249) gemeldet. Aktualisieren Sie, halten Sie Port 11434 für andere Geräte geschlossen und prüfen Sie die Release Notes auf Updater-Korrekturen.',
          },
          {
            q: 'Wie verhindere ich, dass andere Geräte in meinem Netzwerk auf Ollama zugreifen?',
            a: 'Standardmäßig bindet sich Ollama an localhost (127.0.0.1:11434) und ist von anderen Geräten nicht erreichbar. Falls Sie zuvor OLLAMA_HOST=0.0.0.0 gesetzt haben, um Netzwerkzugriff zu erlauben, machen Sie das rückgängig: `export OLLAMA_HOST=127.0.0.1:11434`. Prüfen Sie die Isolation, indem Sie versuchen, von einem anderen Gerät in Ihrem Netzwerk eine Verbindung herzustellen -- sie sollte scheitern.',
          },
          {
            q: 'Welches lokale LLM-Tool ist am sichersten und schützt die Privatsphäre am besten?',
            a: 'Nach den veröffentlichten Voreinstellungen ist Jan AI das restriktivste der vier Tools: vollständig Open Source (Apache-2.0-Lizenz), mit Analytics, die Opt-in sind und beim ersten Start gewählt werden. Ollama folgt danach: Open Source, standardmäßig an localhost gebunden, und Cloud-Funktionen lassen sich mit `OLLAMA_NO_CLOUD=1` abschalten. LM Studio hat laut Datenschutzerklärung keine Telemetrie, aber Update-Prüfungen und Modellsuche senden anonymisierte Daten.',
          },
          {
            q: 'Kann ich Ollama in einem Unternehmen mit BSI C5-Anforderungen einsetzen?',
            a: 'Ja, mit korrekter Konfiguration. Aktivieren Sie Vollverschlüsselung (AES-256) für die Systemfestplatte, deaktivieren Sie alle Telemetrie, blockieren Sie ausgehende Verbindungen mit einer Firewall und isolieren Sie das Gerät vom Internet. Dokumentieren Sie diese Konfiguration in Ihrer Datenschutz-Folgenabschätzung. Siehe Punkt 12 der Checkliste für air-gapped Umgebungen.',
          },
          {
            q: 'Wie überprüfe ich, was LM Studio ins Netz sendet?',
            a: 'Nutzen Sie ein Tool wie Wireshark oder Little Snitch, um den Netzwerkverkehr von LM Studio zu überwachen. Laut Datenschutzerklärung enthält die Anwendung keine Telemetrie; zu erwarten sind nur Update-Prüfungen sowie Modellsuche und -downloads. Weitere, unerwartete Verbindungen wären ein Warnsignal.',
          },
          {
            q: 'Sind SHA256-Hashes allein ausreichend, um GGUF-Dateien zu überprüfen?',
            a: 'SHA256-Hashes bestätigen, dass eine heruntergeladene Datei mit der erwarteten Datei übereinstimmt. Sie verhindern nicht, dass eine legitime Modelldatei bösartig ist. Für maximale Sicherheit: laden Sie nur von Hugging Face oder ollama.com herunter, überprüfen Sie, dass der Publisher-Account etabliert ist, und überprüfen Sie den Hash.',
          },
        ],
      },
      sources: {
        title: 'Wo können Sie zusätzliche Quellen finden?',
        items: [
          '**OWASP Top 10 für LLM-Anwendungen** ([owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)) -- Sicherheitsrisiken für LLM-Bereitstellungen einschließlich Prompt-Injection und Supply-Chain-Angriffen',
          '**Hugging Face Model Card Documentation** (huggingface.co/docs/hub/model-cards) -- Modellherkunftsstandards und SHA256-Hash-Verifizierung',
          '**VeraCrypt** (veracrypt.fr) -- Open-Source-Vollverschlüsselung und Ordnerverschlüsselung für Windows, macOS und Linux',
          '**Ollama FAQ** ([docs.ollama.com/faq](https://docs.ollama.com/faq)) -- Standard-Bind-Adresse, Cloud-Funktionen und die Einstellung `OLLAMA_NO_CLOUD`',
          '**Datenschutzerklärung von LM Studio** ([lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)) -- was die App wann erfasst',
          '**Datenschutzseite von Jan** ([docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)) -- Analytics nur per Opt-in',
          '**The Hacker News, Bericht zur Ollama-Sicherheitslücke** ([thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)) -- CVE-2026-7482 und die Schwachstellen im Windows-Updater',
          '**CERT-Polska-Hinweis** ([cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)) -- betroffene Versionen von CVE-2026-42248 und CVE-2026-42249',
        ],
      },
      commonMistakes: {
        title: 'Was sind die häufigsten Fehler bei der Sicherheit lokaler LLMs?',
        content: '**Die meisten Sicherheitsfehler bei lokalen LLMs entstehen durch Konfigurationsversäumnisse, nicht durch Modellschwachstellen.** Dies sind die sechs häufigsten Fehler und wie Sie sie beheben.',
        items: [
          '**Fehler:** Herunterladen von Modellen von Drittanbieter-Seiten (Discord, zufällige GitHub-Releases). **Lösung:** Verwenden Sie nur Hugging Face (huggingface.co) oder Ollama-Bibliothek. Verifizieren Sie mit `sha256sum`.',
          '**Fehler:** Annahme, dass lokale Inferenz = vollständiger Datenschutz. **Lösung:** Blockieren Sie nach dem Modell-Download ausgehenden Datenverkehr, prüfen Sie LM Studio und GPT4All per Firewall und lehnen Sie die GPT4All-Telemetrie beim ersten Start ab. Führen Sie `netstat -an | grep 11434` aus, um unerwartete Ports zu bestätigen.',
          '**Fehler:** `OLLAMA_HOST=0.0.0.0` aktiv lassen nach Tests. **Lösung:** Zurücksetzen: `export OLLAMA_HOST=127.0.0.1:11434`. Test von anderen Geräten -- Verbindung sollte abgelehnt werden.',
          '**Fehler:** Festplattenverschlüsselung für HIPAA/DSGVO-Workloads überspringen. **Lösung:** Aktivieren Sie FileVault (macOS) oder BitLocker (Windows). Verschlüsseln Sie den LM Studio Chat-Log-Ordner separat.',
          '**Fehler:** Nicht überprüfbare Drittanbieter-Erweiterungen in Open WebUI oder Jan AI. **Lösung:** Überwachen Sie installierte Erweiterungen monatlich. Entfernen Sie alle, die Netzwerkzugriff anfordern, den Sie nicht erkennen.',
          '**Fehler:** Eine veraltete Ollama-Version nach einer bekannt gewordenen Sicherheitslücke weiterbetreiben. **Lösung:** Führen Sie `ollama --version` aus und aktualisieren Sie auf 0.17.1 oder neuer. Prüfen Sie unter Windows zusätzlich die Updater-Hinweise im Abschnitt zu den Sicherheitslücken oben.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Was sind die regionalen Compliance-Überlegungen?',
        content: '**Lokale LLM-Inferenz reduziert Datenresidenz-Risiken, aber vollständige behördliche Compliance erfordert zusätzliche regionale Kontrollen.** Dieser Abschnitt enthält allgemeine Informationen und ist keine Rechtsberatung; klären Sie die Anforderungen mit einer Rechtsanwältin, einem Rechtsanwalt oder Ihrem Datenschutzbeauftragten.',
        items: [
          '**EU / DSGVO (2018):** Lokale Inferenz kann die Auftragsverarbeitung nach Artikel 28 mit einem Modellanbieter für den Inferenzschritt entfallen lassen. Sie müssen dennoch den Netzwerkverkehr von LM Studio per Firewall prüfen, Festplattenverschlüsselung aktivieren und Ihr Datenverarbeitungs-Setup für jede DPIA dokumentieren. Führen Sie eine Interessenabwägung vor der Verarbeitung personenbezogener Daten durch.',
          '**Vereinigte Staaten / HIPAA:** HIPAA verlangt Schutzmaßnahmen für PHI: Vollverschlüsselung der Festplatte (das "Verschlüsselungs-Safe Harbor"), Zugriffskontrolle und Audit-Logging. Ollama mit aktiviertem FileVault und deaktivierter Telemetrie ist ein angemessener HIPAA-Ausgangspunkt. Formale Compliance erfordert eine vollständige Risikobewertung.',
          '**Japan / APPI (2022):** Das Gesetz zum Schutz personenbezogener Informationen verlangt den Schutz personenbezogener Daten während der Verarbeitung. Lokale Inferenz auf einem isolierten oder offline-Gerät kann helfen, Datenlokalisierungsanforderungen zu erfüllen. Deaktivieren Sie Ollama-Updates und prüfen Sie den Netzwerkverkehr von LM Studio per Firewall im Rahmen Ihrer APPI-Prüfung.',
          '**China / PIPL (2021):** Das Betreiben eines lokalen LLM für interne Nutzung erfordert in der Regel keine CAC-Registrierung; klären Sie dies mit Rechtsberatung. Falls Sie ein lokales LLM als öffentlich zugänglichen Service in China bereitstellen, ist eine CAC-Algorithmus-Registrierung erforderlich.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Was sollten Sie noch lesen?',
        items: [
          '[Was sind lokale LLMs?](/de/local-llms/what-are-local-llms) -- Kernkonzepte und -komponenten',
          '[Lokale LLMs vs. Cloud-APIs](/de/local-llms/local-llms-vs-cloud-apis) -- Datenschutz-Kompromisse',
          '[Wie man Ollama installiert](/de/local-llms/how-to-install-ollama) -- Installation und Setup',
          '[Wie man lokale LLMs auf einem Laptop ausführt](/de/local-llms/local-llm-on-laptop) -- Sichere Laptop-Konfiguration',
          '[Lokale LLM One-Click-Installer](/de/local-llms/local-llm-one-click-installers) -- Vergleich von LM Studio, Ollama, Jan AI und GPT4All für Datenschutz und Benutzerfreundlichkeit',
          '[Fehlerbehebung beim lokalen LLM-Setup](/de/local-llms/troubleshooting-local-llm-setup) -- Häufige Fehler beheben, einschließlich Port 11434 verweigert und GPU nicht erkannt',
          '[Lokale KI hinter Firewall / Offline (2026)](/de/power-local-llm/local-ai-behind-firewall-offline-2026) -- Ollama air-gap: Netzwerkisolierung, Audit-Logging und kein-Internet-Setup.',
          '[Bestes VPN für KI-Entwicklung in China (2026)](/de/prompt-bites/best-vpn-for-ai-development-china-2026) -- Zugriff auf Hugging Face, GitHub und Modell-Registries hinter der Firewall.',
          '[SOC 2 & ISO 27001: Audit-Bereitschaft für selbst gehostete LLMs](/de/local-llms/soc2-iso27001-self-hosted-llm-compliance) -- die formale Audit-Framework-Version dieser Checkliste für Compliance-Beauftragte.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/de/local-llms/local-llm-security-privacy-checklist',
      headline: 'Checkliste für Sicherheit und Datenschutz bei lokalen LLMs: 12 Schritte zu einem sicheren Setup',
      description: 'Ist LM Studio sicher? Und Ollama? 12-Punkte-Checkliste für lokale LLMs: Was jedes Tool sendet, Ollama CVE-2026-7482, Telemetrie, Port 11434.',
      datePublished: '2026-04-04',
      dateModified: '2026-11-15',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers and IT professionals running local LLMs',
      },
      keywords: 'lokale LLM Sicherheit, Datenschutz, DSGVO, Checkliste, Verschlüsselung, Ollama',
    },
  },

  fr: {
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Liste de Contrôle Sécurité et Confidentialité des LLM Locaux : 12 Étapes pour une Configuration Sûre',
    seoTitle: 'Sécurité LLM local 2026 : LM Studio est-il sûr ? Checklist',
    intro: 'LM Studio, Ollama, Jan et GPT4All gardent vos invites hors des serveurs externes lorsque vous exécutez des modèles locaux, mais cela ne rend pas automatiquement votre configuration sûre. La télémétrie, les fichiers de modèles non fiables, les versions non corrigées et les API exposées peuvent encore faire fuiter des données. Cette checklist montre comment sécuriser un LLM local en moins de 10 minutes.',
    metaDescription: 'LM Studio est-il sûr ? Et Ollama ? Checklist en 12 étapes : ce que chaque outil envoie, correctif Ollama CVE-2026-7482, télémétrie et port 11434.',
    heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-fr.webp',
    twitterDescription: 'Checklist sécurité LLM local en 12 étapes : LM Studio et Ollama sont-ils sûrs, désactiver la télémétrie, corriger CVE-2026-7482, isoler le port 11434.',
    publishDate: '2026-04-04',
    dateModified: '2026-11-15',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'confidentialité LLM local',
    toc: [
      {
        label: 'Points Clés',
        anchor: '#key-takeaways',
      },
      {
        label: 'LM Studio, Ollama, Jan et GPT4All sont-ils sûrs ?',
        anchor: '#are-lm-studio-ollama-safe',
      },
      {
        label: 'Vulnérabilités récentes des outils de LLM locaux',
        anchor: '#recent-vulnerabilities',
      },
      {
        label: 'Pourquoi les LLM Locaux Ne Sont Pas Automatiquement Privés',
        anchor: '#why-not-automatically-private',
      },
      {
        label: 'Provenance du Modèle : Téléchargements Sécurisés',
        anchor: '#model-provenance',
      },
      {
        label: 'Isolation Réseau : Bloquer les Connexions Sortantes',
        anchor: '#network-isolation',
      },
      {
        label: 'Paramètres de Télémétrie par Outil',
        anchor: '#telemetry-settings',
      },
      {
        label: 'Modèle de Menace',
        anchor: '#threat-model',
      },
      {
        label: 'Questions Courantes',
        anchor: '#faq',
      },
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
          'Les 5 étapes incontournables : (1) aucun accès Internet pour le processus du modèle, (2) fichiers de modèles vérifiés par SHA-256 avant chargement, (3) points d\'accès API liés uniquement à localhost et outil à jour des correctifs, (4) journaux d\'invites chiffrés ou entièrement désactivés, (5) aucun plugin tiers sans revue du code source.',
          'LM Studio, Ollama, Jan et GPT4All sont-ils sûrs ? Oui pour la confidentialité des invites : aucun d\'eux n\'envoie les invites de discussion à un fournisseur de modèle lorsque vous exécutez un modèle local. Un usage sûr exige aussi des versions à jour, un port d\'API fermé et des fichiers de modèles de confiance.',
          'L\'inférence locale garde les données d\'invites hors des serveurs tiers. Les risques subsistants : télémétrie de l\'outil d\'inférence, fichiers de modèles de sources non fiables, versions non corrigées et API d\'Ollama exposée au réseau.',
          'Mettez Ollama à jour vers la version 0.17.1 ou ultérieure : CVE-2026-7482 (« Bleeding Llama », classée critique) permettait à un attaquant non authentifié de lire la mémoire du processus depuis une API d\'Ollama exposée.',
          'Ollama se lie à localhost par défaut -- inaccessible depuis d\'autres appareils sauf si vous définissez explicitement OLLAMA_HOST=0.0.0.0.',
          'Vérifiez ce que LM Studio envoie : selon sa politique de confidentialité, il n\'inclut aucune télémétrie, mais les vérifications de mise à jour et la recherche de modèles envoient des données anonymisées. Refusez la télémétrie de GPT4All au premier lancement (opt-in) et bloquez le trafic sortant après le téléchargement des modèles.',
          'Téléchargez les poids de modèles uniquement depuis Hugging Face (huggingface.co) ou la bibliothèque officielle d\'Ollama. Vérifiez les empreintes SHA256 pour les déploiements sensibles.',
          'Pour les données réglementées (HIPAA, RGPD, secret professionnel) : chiffrement complet du disque, machine isolée du réseau et audit de toutes les extensions installées.',
        ],
      },
      toolSafety: {
        id: 'are-lm-studio-ollama-safe',
        title: 'LM Studio, Ollama, Jan et GPT4All sont-ils sûrs à utiliser ?',
        content: [
          '**Oui pour la confidentialité des invites : aucun des quatre n\'envoie vos invites de discussion à un fournisseur de modèle lorsque vous exécutez un modèle local.** Ce qui diffère, c\'est l\'empreinte réseau de chaque outil et ce qu\'il faut vérifier.',
        ],
        items: [
          '**LM Studio :** la [politique de confidentialité de LM Studio](https://lmstudio.ai/app-privacy) indique que l\'application n\'inclut ni télémétrie ni suivi par utilisateur et ne traite ni vos discussions ni vos documents, sauf si vous utilisez les services cloud de LM Studio. Les vérifications de mise à jour et la recherche de modèles envoient des données limitées et anonymisées. Activez « Serve on Local Network » seulement si d\'autres appareils ont besoin de l\'API.',
          '**Ollama :** selon la [FAQ d\'Ollama](https://docs.ollama.com/faq) : « We don\'t see your prompts or data when you run locally », et le serveur se lie par défaut à 127.0.0.1, port 11434. Les modèles cloud et la recherche web sont des fonctions optionnelles qui envoient les invites aux serveurs d\'Ollama ; définissez `OLLAMA_NO_CLOUD=1` pour les désactiver. Gardez Ollama à jour (voir la section sur les vulnérabilités ci-dessous).',
          '**Jan :** open source sous licence Apache 2.0 ([GitHub](https://github.com/janhq/jan)). Sa [page de confidentialité](https://docs.jan.ai/desktop/privacy) indique que les analytics sont en opt-in (« Zero data collection until you say so »), choisis au premier lancement, et que vos discussions vous appartiennent. Connecter un fournisseur cloud envoie vos messages à ce fournisseur.',
          '**GPT4All :** la télémétrie et le partage des discussions vers le Datalake sont en opt-in. Refusez les deux au premier lancement et vérifiez les réglages ensuite.',
          '**Pour les quatre :** bloquez le trafic sortant une fois les modèles téléchargés, ne prenez des fichiers de modèles que chez des éditeurs connus et gardez l\'application sur une version à jour.',
        ],
      },
      recentVulns: {
        id: 'recent-vulnerabilities',
        title: 'Quelles vulnérabilités récentes touchent les outils de LLM locaux ?',
        content: [
          '**Deux séries de vulnérabilités d\'Ollama ont été divulguées en 2026 : l\'une est exploitable via une API exposée, l\'autre via le programme de mise à jour Windows.** Exécuter en local ne rend pas un logiciel non corrigé sûr.',
        ],
        items: [
          '**CVE-2026-7482 (« Bleeding Llama ») :** une lecture hors limites du tas dans le chargeur de modèles GGUF d\'Ollama, corrigée dans Ollama 0.17.1 ; [The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html) rapporte un score CVSS de 9.1. Un attaquant non authentifié pouvant atteindre l\'API peut téléverser un fichier GGUF forgé et lire la mémoire du processus, qui peut contenir des variables d\'environnement, des clés API et des données de conversation. Une installation liée à localhost n\'est pas joignable depuis le réseau ; les instances exposées le sont.',
          '**CVE-2026-42248 et CVE-2026-42249 (CVSS 7.7 chacune) :** le programme de mise à jour d\'Ollama pour Windows ne vérifie pas le binaire de mise à jour et construit son chemin de préparation à partir d\'en-têtes de réponse HTTP. [CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248) indique les versions 0.12.10 à 0.17.5 et ne nommait aucune version corrigée lors de la divulgation ; d\'autres rapports donnent une borne supérieure plus élevée. Un attaquant doit contrôler le serveur de mise à jour que contacte le client. Tant qu\'un correctif n\'est pas confirmé dans les notes de version d\'Ollama, les utilisateurs de Windows peuvent désactiver les mises à jour automatiques et installer les nouvelles versions manuellement depuis le téléchargement officiel.',
          '**Comment vérifier votre configuration :** exécutez `ollama --version` et mettez à jour si la version est inférieure à 0.17.1. Confirmez que `OLLAMA_HOST` n\'est pas défini sur 0.0.0.0, puis tentez d\'atteindre le port 11434 depuis un autre appareil de votre réseau ; la connexion doit être refusée.',
        ],
      },
      whyNotAutoPrivate: {
        id: 'why-not-automatically-private',
        title: 'Pourquoi les LLM Locaux Ne Sont Pas Automatiquement Privés ?',
        content: [
          '**L\'inférence du modèle est privée -- avec un modèle local, vos invites ne sont pas envoyées aux serveurs du fournisseur.** Trois autres flux de données risquent des fuites :',
        ],
        items: [
          '**Télémétrie applicative** : LM Studio indique dans sa politique de confidentialité n\'inclure ni télémétrie ni suivi par utilisateur, mais les vérifications de mise à jour et la recherche de modèles envoient des données anonymisées. La télémétrie de GPT4All est en opt-in. D\'autres outils peuvent collecter des analyses d\'usage ; vérifiez avec un pare-feu.',
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
          '**Fuites de télémétrie** → certains outils envoient des données d\'utilisation ; LM Studio envoie des requêtes de mise à jour et de recherche de modèles',
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
        title: 'Quelles sont les 12 étapes de sécurité ?',
        content: '**Vérifiez chacun des points ci-dessous avant de travailler avec des données sensibles ou réglementées.** La checklist couvre les failles de confidentialité et de sécurité les plus courantes dans les configurations Ollama, LM Studio, Jan AI et GPT4All.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Une checklist de sécurité pour LLM local : isoler l\'accès réseau, vérifier le SHA-256 des fichiers de modèles, lier l\'API à localhost, chiffrer ou désactiver les journaux d\'invites, auditer tous les plugins tiers.',
          },
          {
            type: 'plain-terms',
            text: 'Les LLM locaux ne sont privés par défaut que s\'ils sont correctement configurés — les 5 étapes ci-dessus couvrent les principales surfaces d\'attaque d\'une configuration d\'inférence locale.',
          },
        ],
        numberedItems: [
          {
            title: 'Téléchargez les modèles uniquement depuis des sources fiables',
            whyItMatters: 'Évite les fichiers de modèles malveillants provenant de sources non vérifiées.',
          },
          {
            title: 'Vérifiez les empreintes des modèles pour les usages sensibles',
            whyItMatters: 'Garantit que les fichiers de modèles téléchargés n\'ont pas été modifiés.',
          },
          {
            title: 'Désactivez la télémétrie dans votre outil d\'inférence',
            whyItMatters: 'Empêche la collecte des données d\'usage et des informations de session.',
          },
          {
            title: 'Confirmez qu\'Ollama est lié uniquement à localhost',
            whyItMatters: 'Empêche l\'API d\'être exposée aux autres appareils du réseau.',
          },
          {
            title: 'Activez le chiffrement complet du disque',
            whyItMatters: 'Protège les poids des modèles et les journaux de discussion en cas de perte ou de vol de l\'appareil.',
          },
          {
            title: 'Stockez les journaux de discussion sensibles dans un dossier chiffré',
            whyItMatters: 'Protège l\'historique des conversations contenant des données sensibles contre les accès non autorisés.',
          },
          {
            title: 'Passez en revue les extensions et plugins installés',
            whyItMatters: 'Empêche les extensions tierces malveillantes d\'accéder au réseau.',
          },
          {
            title: 'Utilisez un compte utilisateur dédié au travail avec les LLM',
            whyItMatters: 'Isole les fichiers de modèles, l\'historique des discussions et les clés API de votre profil principal.',
          },
          {
            title: 'N\'exposez pas l\'API locale sur Internet',
            whyItMatters: 'Empêche l\'accès distant non autorisé à votre moteur d\'inférence local.',
          },
          {
            title: 'Auditez les prompts système de toute application utilisant des LLM locaux',
            whyItMatters: 'Empêche l\'exfiltration de données via des extensions de navigateur ou des intégrations d\'outils de productivité.',
          },
          {
            title: 'Gardez les outils d\'inférence à jour',
            whyItMatters: 'Corrige des vulnérabilités connues, par exemple CVE-2026-7482 d\'Ollama (corrigée dans la version 0.17.1).',
          },
          {
            title: 'Environnements isolés ou réglementés : documentez les versions de modèles approuvées',
            whyItMatters: 'Assure la conformité aux exigences réglementaires de traitement des données et d\'isolation de l\'infrastructure.',
          },
        ],
        image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-fr.webp',
        imageCaption: 'Vérifiez chaque point avant de traiter des données sensibles ou réglementées.',
      },
      modelProvenance: {
        id: 'model-provenance',
        title: 'Où télécharger les poids de modèles de manière fiable ?',
        content: [
          '**Les poids de modèles sont de gros fichiers binaires.** Un fichier GGUF malformé peut exploiter des bogues de l\'analyseur qui le charge : CVE-2026-7482 était une lecture hors limites du tas dans le chargeur GGUF d\'Ollama, corrigée dans Ollama 0.17.1.',
        ],
        items: [
          '**Hugging Face** (huggingface.co) : source primaire. Hash SHA256 vérifié. Préférez éditeurs établis (Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba).',
          '**Bibliothèque Ollama** ([ollama.com/library](https://ollama.com/library)) : Ollama vérifie les hashs des modèles avant de les stocker. Téléchargez depuis la bibliothèque officielle ou auprès d\'éditeurs de confiance.',
          '**LM Studio browser** : recherche Hugging Face directement. Mêmes règles -- vérifiez compte éditeur.',
          '**Évitez** : partage anon, Discord drops, sources sans hash vérifiable.',
        ],
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'Comment bloquer les connexions sortantes des LLM locaux ?',
        content: '**Bloquez les connexions sortantes une fois le modèle téléchargé pour éviter que l\'outil d\'inférence ne « téléphone à la maison ».** Sous macOS, utilisez le pare-feu `pf` ; sous Linux, utilisez `ufw` ou OpenSnitch :',
        codeBlock: '# macOS -- bloquer Ollama avec pf firewall\n# Ajouter à /etc/pf.conf :\nblock out proto tcp from any to any user ollama\n\n# Linux -- bloquer avec ufw\nsudo ufw deny out from any to any app ollama\n\n# Ou utiliser Little Snitch (macOS) / OpenSnitch (Linux)\n# pour contrôle par application avec interface',
        codeLanguage: 'bash',
      },
      telemetry: {
        id: 'telemetry-settings',
        title: 'Comment Désactiver la Télémétrie',
        rows: [
          {
            Outil: '[Ollama](https://ollama.com)',
            'Télémétrie Défaut': 'Aucune en local ; cloud optionnel',
            'Vérification/Désactiver': 'OLLAMA_NO_CLOUD=1 désactive les fonctions cloud',
          },
          {
            Outil: '[LM Studio](https://lmstudio.ai)',
            'Télémétrie Défaut': 'Aucune (politique) ; MàJ/recherche anonymes',
            'Vérification/Désactiver': 'Rien à désactiver ; vérifier via pare-feu',
          },
          {
            Outil: '[Jan AI](https://jan.ai)',
            'Télémétrie Défaut': 'Analytics en opt-in, choisi au 1er lancement',
            'Vérification/Désactiver': 'Refuser au 1er lancement ; open source',
          },
          {
            Outil: '[GPT4All](https://nomic.ai/gpt4all)',
            'Télémétrie Défaut': 'Opt-in au premier lancement',
            'Vérification/Désactiver': 'Refuser au 1er lancement ; vérifier via pare-feu',
          },
        ],
        columns: ['Outil', 'Télémétrie Défaut', 'Vérification/Désactiver'],
      },
      threatModel: {
        id: 'threat-model',
        title: 'Quel modèle de menace devez-vous supposer ?',
        content: [
          '**Supposez que votre environnement LLM local peut fuir des données par le biais d\'outils, de plugins ou d\'erreurs de configuration. Traitez le modèle comme non approuvé — concevez votre configuration de sorte que même si le modèle est compromis, les données sensibles ne puissent pas être accessibles ou transmises. Cela signifie isoler l\'outil d\'inférence d\'Internet, désactiver la télémétrie et limiter l\'accès au système de fichiers.**',
          'La sécurité ne se limite pas à la confidentialité des données — l\'injection de prompts est un vecteur d\'attaque distinct où des entrées malveillantes manipulent le comportement du modèle. Pour les techniques de défense contre les injections applicables aux modèles locaux et cloud, consultez [injection de prompts et sécurité](https://www.promptquorum.com/fr/prompt-engineering/prompt-injection-and-security).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Quelles sont les questions courantes sur la sécurité ?',
        faqs: [
          {
            q: 'Un LLM local peut-il accéder à mes fichiers ou à Internet ?',
            a: 'Non -- le modèle lui-même est un fichier statique qui génère du texte. Il ne peut ni lire votre système de fichiers ni effectuer de requêtes réseau. En revanche, l\'outil d\'inférence qui exécute le modèle (Ollama, LM Studio) dispose d\'un accès normal au niveau du système d\'exploitation. Certains outils proposent des fonctions qui lisent des fichiers -- comme LocalDocs de GPT4All ou la pièce jointe de LM Studio. Ces fonctions sont optionnelles et explicitement documentées.',
          },
          {
            q: 'Est-il sûr d\'utiliser un LLM local avec des données couvertes par HIPAA ?',
            a: 'L\'inférence locale supprime le risque lié au sous-traitant tiers que créent les API cloud. Toutefois, la conformité HIPAA exige plus qu\'une inférence privée -- il faut un chiffrement complet du disque, des contrôles d\'accès, une journalisation d\'audit et un Business Associate Agreement si un éditeur de logiciel pouvait accéder aux informations de santé protégées. Utiliser Ollama avec FileVault activé et la télémétrie désactivée est un point de départ raisonnable, mais une conformité HIPAA formelle exige une évaluation complète des risques.',
          },
          {
            q: 'Ollama envoie-t-il mes invites quelque part ?',
            a: 'Pas lorsque vous exécutez des modèles locaux. La FAQ d\'Ollama indique : « We don\'t see your prompts or data when you run locally. » Les modèles cloud et la recherche web d\'Ollama sont optionnels et envoient bien des invites aux serveurs d\'Ollama ; définissez `OLLAMA_NO_CLOUD=1` pour les désactiver. Le trafic sortant attendu d\'une configuration locale se limite aux téléchargements de modèles avec `ollama pull` et aux vérifications de mise à jour. Ollama est open source ([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
          },
          {
            q: 'Un LLM local est-il plus confidentiel que l\'API d\'OpenAI ?',
            a: 'Oui, pour la confidentialité des invites. Avec un LLM local, vos invites ne quittent jamais votre machine. L\'API d\'OpenAI envoie les invites aux serveurs d\'OpenAI pour traitement. Les conditions d\'utilisation de l\'API d\'OpenAI indiquent que les entrées et sorties de l\'API ne servent pas à entraîner les modèles par défaut, mais les données transitent tout de même par leur infrastructure. Pour des données sensibles ou réglementées (médicales, juridiques, financières), l\'inférence locale est le choix le plus prudent.',
          },
          {
            q: 'Comment vérifier qu\'un fichier de modèle téléchargé est sûr ?',
            a: 'Téléchargez les modèles uniquement depuis Hugging Face (huggingface.co) ou la bibliothèque officielle d\'Ollama. Sur Hugging Face, chaque fichier affiche un hash SHA256 -- vérifiez-le après le téléchargement avec `sha256sum <model_file>`. Restez sur les modèles d\'éditeurs connus : Meta, Google, Microsoft, Mistral AI et Qwen/Alibaba. Évitez les partages de fichiers anonymes et les fichiers déposés sur Discord.',
          },
          {
            q: 'Quelle est la différence entre confidentialité et sécurité pour les LLM locaux ?',
            a: 'La confidentialité signifie que vos invites et sorties ne sont pas accessibles à des tiers. La sécurité signifie que votre système est protégé contre les menaces. Un LLM local peut être confidentiel (aucune donnée ne quitte votre machine) mais peu sûr (modèle téléchargé depuis une source non fiable, ou API d\'Ollama exposée sur le réseau). Les deux doivent être traités séparément.',
          },
          {
            q: 'Puis-je utiliser un LLM local pour des données soumises au RGPD ?',
            a: 'L\'inférence locale réduit nettement le risque RGPD, car les données ne quittent pas votre infrastructure. Vous devez néanmoins vérifier que l\'outil d\'inférence (Ollama, LM Studio) n\'envoie aucun trafic réseau inattendu, que le chiffrement du disque est activé et que des contrôles d\'accès sont en place. Pour l\'analyse d\'impact (AIPD) de l\'article 35, documentez votre configuration de traitement et confirmez qu\'aucune donnée personnelle ne transite par des serveurs tiers.',
          },
          {
            q: 'LM Studio est-il sûr à utiliser ?',
            a: 'Oui pour la confidentialité des invites : selon la politique de confidentialité de LM Studio, les discussions et documents restent sur votre appareil, sauf si vous utilisez les services cloud de LM Studio, et l\'application n\'inclut ni télémétrie ni suivi par utilisateur. Les risques restants sont ceux de tout outil local : fichiers de modèles d\'éditeurs non fiables, API locale ouverte au réseau avec « Serve on Local Network » et version de l\'application obsolète. Téléchargez les modèles auprès d\'éditeurs Hugging Face reconnus, activez ce réglage seulement si nécessaire et gardez l\'application à jour.',
          },
          {
            q: 'LM Studio collecte-t-il des données ou les envoie-t-il à ses serveurs ?',
            a: 'La politique de confidentialité de LM Studio indique que l\'application n\'inclut ni télémétrie ni suivi par utilisateur. Les vérifications de mise à jour envoient la version de l\'application, le système d\'exploitation et l\'adresse IP (via un CDN), et la recherche et le téléchargement de modèles envoient des requêtes de recherche anonymisées. Le contenu des discussions et les documents ne sont pas traités, sauf si vous utilisez les services cloud de LM Studio. Aucun réglage de données d\'usage n\'est à désactiver ; vérifiez avec un pare-feu ou une capture de paquets.',
          },
          {
            q: 'Ollama est-il sûr à utiliser ?',
            a: 'Oui pour les invites locales, si vous le gardez à jour et hors du réseau. Ollama indique ne pas voir vos invites ni vos données lors d\'une exécution locale, et se lie par défaut à 127.0.0.1. Les vulnérabilités sont le principal risque : CVE-2026-7482 touchait les versions antérieures à 0.17.1 et était exploitable via une API accessible, et deux failles du programme de mise à jour Windows (CVE-2026-42248 et CVE-2026-42249) ont été signalées en 2026. Mettez à jour, gardez le port 11434 fermé aux autres appareils et consultez les notes de version pour les correctifs du programme de mise à jour.',
          },
          {
            q: 'Comment empêcher l\'accès à Ollama depuis d\'autres appareils de mon réseau ?',
            a: 'Par défaut, Ollama se lie à localhost (127.0.0.1:11434) et n\'est pas accessible depuis d\'autres appareils. Si vous avez défini OLLAMA_HOST=0.0.0.0 pour autoriser l\'accès réseau, annulez-le : `export OLLAMA_HOST=127.0.0.1:11434`. Vérifiez l\'isolation en tentant de vous connecter depuis un autre appareil de votre réseau -- la connexion doit échouer.',
          },
          {
            q: 'Quel outil de LLM local est le meilleur pour une confidentialité maximale ?',
            a: 'D\'après leurs réglages par défaut publiés, Jan AI est le plus restrictif des quatre : entièrement open source (licence Apache 2.0), avec des analytics en opt-in, choisis au premier lancement. Ollama vient ensuite : open source, lié à localhost par défaut, et les fonctions cloud se désactivent avec `OLLAMA_NO_CLOUD=1`. LM Studio n\'a aucune télémétrie selon sa politique de confidentialité, mais les vérifications de mise à jour et la recherche de modèles envoient des données anonymisées.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Où trouver des sources additionnelles ?',
        items: [
          '**OWASP Top 10 pour les applications LLM** ([owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)) -- Risques de sécurité des déploiements de LLM, dont l\'injection de prompts et les attaques sur la chaîne d\'approvisionnement',
          '**Documentation Hugging Face Model Card** (huggingface.co/docs/hub/model-cards) -- Standards de provenance des modèles et vérification des hashs SHA256',
          '**VeraCrypt** (veracrypt.fr) -- Chiffrement open source de disque et de dossiers pour Windows, macOS et Linux',
          '**FAQ d\'Ollama** ([docs.ollama.com/faq](https://docs.ollama.com/faq)) -- adresse de liaison par défaut, fonctions cloud et réglage `OLLAMA_NO_CLOUD`',
          '**Politique de confidentialité de LM Studio** ([lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)) -- ce que l\'application collecte et quand',
          '**Page de confidentialité de Jan** ([docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)) -- analytics en opt-in',
          '**The Hacker News, rapport sur la vulnérabilité d\'Ollama** ([thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)) -- CVE-2026-7482 et les failles du programme de mise à jour Windows',
          '**Avis du CERT Polska** ([cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)) -- versions concernées par CVE-2026-42248 et CVE-2026-42249',
        ],
      },
      commonMistakes: {
        title: 'Erreurs Courantes en Sécurité LLM Local',
        content: '**La plupart des défaillances de sécurité des LLM locaux viennent d\'oublis de configuration, pas de vulnérabilités des modèles.** Voici les six erreurs les plus fréquentes et comment corriger chacune.',
        items: [
          '**Erreur :** télécharger des modèles depuis des sites tiers (Discord, versions GitHub aléatoires). **Correction :** utilisez uniquement Hugging Face (huggingface.co) ou la bibliothèque Ollama. Vérifiez avec `sha256sum`.',
          '**Erreur :** supposer que l\'inférence locale = confidentialité totale. **Correction :** bloquez le trafic sortant après le téléchargement du modèle, inspectez LM Studio et GPT4All avec un pare-feu et refusez la télémétrie de GPT4All au premier lancement. Exécutez `netstat -an | grep 11434` pour confirmer l\'absence de ports inattendus.',
          '**Erreur :** laisser `OLLAMA_HOST=0.0.0.0` actif après des tests. **Correction :** rétablissez : `export OLLAMA_HOST=127.0.0.1:11434`. Testez depuis un autre appareil — la connexion doit être refusée.',
          '**Erreur :** ignorer le chiffrement du disque pour des charges HIPAA/RGPD. **Correction :** activez FileVault (macOS) ou BitLocker (Windows). Chiffrez séparément le dossier des journaux de discussion de LM Studio.',
          '**Erreur :** ne pas passer en revue les extensions tierces dans Open WebUI ou Jan AI. **Correction :** auditez chaque mois les extensions installées. Supprimez celles qui demandent un accès réseau que vous ne reconnaissez pas.',
          '**Erreur :** exécuter une ancienne version d\'Ollama après la divulgation d\'une vulnérabilité. **Correction :** exécutez `ollama --version` et mettez à jour vers la version 0.17.1 ou ultérieure. Sous Windows, consultez aussi les avis sur le programme de mise à jour dans la section sur les vulnérabilités ci-dessus.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Quelles sont les considérations de conformité régionales ?',
        content: '**L\'inférence locale réduit le risque lié à la résidence des données, mais une conformité réglementaire complète exige des contrôles supplémentaires selon la région.** Cette section fournit des informations générales et ne constitue pas un conseil juridique ; vérifiez les exigences auprès d\'un avocat ou d\'un délégué à la protection des données.',
        items: [
          '**UE / RGPD (2018) :** l\'inférence locale peut supprimer la relation de sous-traitance de l\'article 28 avec un fournisseur de modèle pour l\'étape d\'inférence. Vous devez néanmoins vérifier le trafic réseau de LM Studio avec un pare-feu, activer le chiffrement du disque et documenter votre configuration de traitement pour toute AIPD. Réalisez une évaluation de l\'intérêt légitime avant de traiter des données personnelles.',
          '**États-Unis / HIPAA :** HIPAA exige des garanties pour les informations de santé protégées : chiffrement complet du disque (le « safe harbor » du chiffrement), contrôles d\'accès et journalisation d\'audit. Ollama avec FileVault activé et la télémétrie désactivée est un point de départ raisonnable pour HIPAA. Une conformité formelle exige une évaluation complète des risques.',
          '**Japon / APPI (2022) :** la loi sur la protection des informations personnelles exige la protection des données personnelles pendant leur traitement. L\'inférence locale sur une machine isolée du réseau peut aider à répondre aux exigences de localisation des données. Désactivez les vérifications de mise à jour d\'Ollama et vérifiez le trafic réseau de LM Studio avec un pare-feu dans le cadre de votre évaluation APPI.',
          '**Chine / PIPL (2021) :** exploiter un LLM local pour un usage interne ne nécessite en général pas d\'enregistrement auprès de la CAC ; vérifiez-le auprès d\'un conseil juridique. Si vous déployez un LLM local comme service public en Chine, l\'enregistrement de l\'algorithme auprès de la CAC est requis.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures Connexes',
        items: [
          '[Que Sont les LLM Locaux ?](/fr/local-llms/what-are-local-llms) -- Concepts fondamentaux',
          '[LLM Locaux vs APIs Cloud](/fr/local-llms/local-llms-vs-cloud-apis) -- Compromis confidentialité',
          '[Comment Installer Ollama](/fr/local-llms/how-to-install-ollama) -- Installation et setup',
          '[Exécuter LLM Locaux sur Laptop](/fr/local-llms/local-llm-on-laptop) -- Configuration laptop sûre',
          '[Installateurs LLM locaux en un clic](/fr/local-llms/local-llm-one-click-installers) -- Comparer LM Studio, Ollama, Jan AI et GPT4All pour la confidentialité et la simplicité d\'installation',
          '[Dépannage de la configuration d\'un LLM local](/fr/local-llms/troubleshooting-local-llm-setup) -- Corriger les erreurs courantes, dont le port 11434 refusé et le GPU non détecté',
          '[IA locale derrière pare-feu / hors ligne (2026)](/fr/power-local-llm/local-ai-behind-firewall-offline-2026) -- Ollama en air-gap : isolation réseau, journaux d\'audit et configuration sans internet.',
          '[Meilleur VPN pour le développement IA en Chine (2026)](/fr/prompt-bites/best-vpn-for-ai-development-china-2026) -- Accès à Hugging Face, GitHub et registres de modèles depuis derrière le pare-feu.',
          '[SOC 2 et ISO 27001 : préparer un déploiement de LLM auto-hébergé](/fr/local-llms/soc2-iso27001-self-hosted-llm-compliance) -- la version cadre d\'audit formel de cette checklist pour les responsables conformité.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/fr/local-llms/local-llm-security-privacy-checklist',
      headline: 'Liste de Contrôle Sécurité et Confidentialité des LLM Locaux : 12 Étapes pour une Configuration Sûre',
      description: 'LM Studio est-il sûr ? Et Ollama ? Checklist en 12 étapes : ce que chaque outil envoie, correctif Ollama CVE-2026-7482, télémétrie et port 11434.',
      datePublished: '2026-04-04',
      dateModified: '2026-11-15',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers and IT professionals running local LLMs',
      },
      keywords: 'sécurité LLM local, confidentialité, RGPD, chiffrement, Ollama',
    },
  },

  ja: {
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'ローカルLLMセキュリティ&プライバシーチェックリスト：12ステップで安全なセットアップを実現',
    seoTitle: 'ローカルLLMセキュリティ対策2026：安全性チェック12項目',
    intro: 'LM Studio、Ollama、Jan、GPT4Allでローカルモデルを実行すると、プロンプトは外部サーバーに送信されませんが、それだけでセットアップが自動的に安全になるわけではありません。テレメトリ、信頼できないモデルファイル、未更新のバージョン、公開されたAPIによって、データが漏洩する可能性があります。このチェックリストでは、10分以内にローカルLLMのセキュリティ対策を行う方法を示します。',
    metaDescription: 'LM StudioやOllamaは安全？ローカルLLMのセキュリティリスクと対策を12項目で解説。各ツールの通信内容、Ollama CVE-2026-7482の修正、テレメトリ、ポート11434の保護を確認できます。',
    heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-ja.webp',
    twitterDescription: 'ローカルLLMのセキュリティ対策12項目：LM StudioとOllamaの安全性、テレメトリ無効化、CVE-2026-7482の修正、ポート11434の分離。',
    publishDate: '2026-04-04',
    dateModified: '2026-11-15',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'ローカルLLM プライバシー',
    toc: [
      {
        label: '重要なポイント',
        anchor: '#key-takeaways',
      },
      {
        label: 'LM Studio・Ollama・Jan・GPT4Allは安全か',
        anchor: '#are-lm-studio-ollama-safe',
      },
      {
        label: 'ローカルLLMツールの最近の脆弱性',
        anchor: '#recent-vulnerabilities',
      },
      {
        label: 'ローカルLLMが自動的にプライベートでない理由',
        anchor: '#why-not-automatically-private',
      },
      {
        label: 'モデル出所：安全なダウンロード方法',
        anchor: '#model-provenance',
      },
      {
        label: 'ネットワーク分離：アウトバウンド接続をブロック',
        anchor: '#network-isolation',
      },
      {
        label: 'ツール別テレメトリ設定',
        anchor: '#telemetry-settings',
      },
      {
        label: '脅威モデル',
        anchor: '#threat-model',
      },
      {
        label: 'よくある質問',
        anchor: '#faq',
      },
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
          '必須の5ステップ：(1) モデルのプロセスにインターネットアクセスを与えない、(2) 読み込み前にSHA-256でモデルファイルを検証する、(3) APIエンドポイントをlocalhostのみにバインドし、ツールを修正済みバージョンに保つ、(4) プロンプトログを暗号化して保存するか完全に無効にする、(5) ソースを確認していないサードパーティ製プラグインを使わない。',
          'LM Studio、Ollama、Jan、GPT4Allは安全か？プロンプトのプライバシーについては安全です。ローカルモデルを実行する場合、いずれもチャットのプロンプトをモデル提供元に送信しません。安全に使うには、最新バージョン、閉じたAPIポート、信頼できるモデルファイルも必要です。',
          'ローカル推論はプロンプトデータをサードパーティサーバーから遠ざけます。残るリスクは、推論ツールのテレメトリ、信頼できない出所のモデルファイル、未更新のバージョン、ネットワークに公開されたOllama APIです。',
          'Ollamaは0.17.1以降に更新してください。CVE-2026-7482（「Bleeding Llama」、深刻度はcritical）により、認証なしの攻撃者が、公開されたOllama APIからプロセスメモリを読み取れました。',
          'Ollamaはデフォルトでlocalhostにバインドされます。明示的にOLLAMA_HOST=0.0.0.0を設定しない限り、他のデバイスからはアクセスできません。',
          'LM Studioの通信内容を確認しましょう。プライバシーポリシー上テレメトリはありませんが、更新確認とモデル検索は匿名化データを送信します。GPT4Allのテレメトリはオプトインなので初回起動時に拒否し、モデルのダウンロード後は外向き通信を遮断してください。',
          'モデルウェイトはHugging Face（huggingface.co）またはOllama公式ライブラリからのみダウンロードしてください。機密性の高い環境ではSHA256チェックサムを確認してください。',
          '規制対象データ（HIPAA、GDPR、法的特権）：ディスク全体暗号化を有効にし、ネットワーク分離されたマシンを使用し、インストール済みの拡張機能をすべて監査します。',
        ],
        title: 'この記事の重要ポイントは何ですか？',
      },
      toolSafety: {
        id: 'are-lm-studio-ollama-safe',
        title: 'LM Studio・Ollama・Jan・GPT4Allは安全に使えますか？',
        content: [
          '**プロンプトのプライバシーについては安全です。ローカルモデルを実行する場合、4つのツールのいずれもチャットのプロンプトをモデル提供元に送信しません。** 違いは、各ツールのネットワーク上の挙動と、確認すべき点にあります。',
        ],
        items: [
          '**LM Studio：** [LM Studioのプライバシーポリシー](https://lmstudio.ai/app-privacy)は、アプリに「テレメトリやユーザー固有のトラッキングは含まれない」と記載しており、LM Studio Cloud Servicesを使わない限りチャットやドキュメントを扱わないとしています。更新確認とモデル検索は、限定的な匿名化データを送信します。他のデバイスからAPIを使う必要がある場合にのみ「Serve on Local Network」を有効にしてください。',
          '**Ollama：** [Ollama FAQ](https://docs.ollama.com/faq)には「ローカルで実行する場合、プロンプトやデータは当社には見えません」とあり、サーバーはデフォルトで127.0.0.1のポート11434にバインドされます。クラウドモデルとWeb検索はオプション機能で、プロンプトをOllamaのサーバーに送信します。無効にするには`OLLAMA_NO_CLOUD=1`を設定します。常に最新版に保ってください（下の脆弱性セクションを参照）。',
          '**Jan：** Apache 2.0ライセンスのオープンソースです（[GitHub](https://github.com/janhq/jan)）。[プライバシーページ](https://docs.jan.ai/desktop/privacy)によると、アナリティクスはオプトインで（「あなたが許可するまでデータ収集はゼロ」）、初回起動時に選択し、チャットはユーザーのものです。クラウドプロバイダーに接続すると、メッセージはそのプロバイダーに送信されます。',
          '**GPT4All：** テレメトリとチャットのDatalake共有はオプトインです。初回起動時に両方を拒否し、その後も設定を確認してください。',
          '**4つすべてに共通：** モデルのダウンロード後は外向き通信を遮断し、モデルファイルは信頼できる公開元からのみ入手し、アプリを最新リリースに保ってください。',
        ],
      },
      recentVulns: {
        id: 'recent-vulnerabilities',
        title: 'ローカルLLMツールにはどのような最近の脆弱性がありますか？',
        content: [
          '**2026年にOllamaでは2組の脆弱性が公表されました。1つは公開されたAPIから、もう1つはWindows版アップデーターから悪用できます。** ローカルで実行していても、未修正のソフトウェアが安全になるわけではありません。',
        ],
        items: [
          '**CVE-2026-7482（「Bleeding Llama」）：** OllamaのGGUFモデルローダーにおけるヒープ領域外読み取りで、Ollama 0.17.1で修正されました。[The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)はCVSSスコア9.1と報じています。APIに到達できる認証なしの攻撃者が、細工したGGUFファイルをアップロードしてプロセスメモリを読み取れ、環境変数、APIキー、会話データが含まれる可能性があります。localhostにバインドされたインストールはネットワークから到達できませんが、公開されたインスタンスは到達可能です。',
          '**CVE-2026-42248とCVE-2026-42249（いずれもCVSS 7.7）：** Windows版Ollamaのアップデーターは、更新用バイナリを検証せず、HTTPレスポンスヘッダーからステージング用パスを組み立てます。[CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248)は影響を受けるバージョンを0.12.10から0.17.5までとし、公表時点では修正済みリリースを挙げていません。他の報告ではより新しいバージョンまでを上限としています。攻撃者には、クライアントが接続する更新サーバーの制御が必要です。修正がOllamaのリリースノートで確認できるまでは、Windowsユーザーは自動更新をオフにし、公式ダウンロードから新バージョンを手動でインストールできます。',
          '**環境の確認方法：** `ollama --version`を実行し、0.17.1未満なら更新します。`OLLAMA_HOST`が0.0.0.0に設定されていないことを確認し、ネットワーク上の別のデバイスからポート11434に接続を試みてください。接続は拒否されるはずです。',
        ],
      },
      whyNotAutoPrivate: {
        id: 'why-not-automatically-private',
        title: 'ローカルLLMが自動的にプライベートでない理由',
        content: [
          '**モデル推論自体はプライベートです。** プロンプトはモデルプロバイダーのサーバーに送信されません。しかし、他の3つのデータフローが情報漏洩を引き起こす可能性があります：',
        ],
        items: [
          '**アプリケーションテレメトリ**：LM Studioはプライバシーポリシーでテレメトリやユーザー固有のトラッキングを含まないと明記していますが、更新確認とモデル検索は匿名化されたデータを送信します。GPT4Allのテレメトリはオプトインです。他のツールは使用分析を収集する場合があるため、ファイアウォールで確認してください。',
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
          '**テレメトリ漏洩** → 一部のツールは使用データを送信します。LM Studioは更新確認とモデル検索のリクエストを送信します',
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
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルLLMセキュリティチェックリスト：ネットワークアクセスを分離し、モデルファイルのSHA-256を検証し、APIをlocalhostにバインドし、プロンプトログを暗号化または無効化し、すべてのサードパーティ製プラグインを監査します。',
          },
          {
            type: 'plain-terms',
            text: 'ローカルLLMは、正しく設定した場合に限りデフォルトでプライベートです。上の5つのステップが、ローカル推論環境の主な攻撃面をカバーしています。',
          },
        ],
        numberedItems: [
          {
            title: '信頼できるソースからのみモデルをダウンロード',
            whyItMatters: '信頼できない出所からの悪意のあるモデルファイルを防止します。',
          },
          {
            title: 'センシティブ用途ではモデルチェックサムを確認',
            whyItMatters: 'ダウンロードされたモデルファイルが改ざんされていないことを保証します。',
          },
          {
            title: '推論ツールのテレメトリを無効化',
            whyItMatters: '使用データおよびセッション情報の収集を防止します。',
          },
          {
            title: 'Ollamaがlocalhostのみにバインドされていることを確認',
            whyItMatters: 'APIがネットワーク上の他のデバイスに公開されるのを防止します。',
          },
          {
            title: 'ディスク全体暗号化を有効化',
            whyItMatters: 'デバイス紛失時にモデルウェイトとチャットログを保護します。',
          },
          {
            title: 'センシティブなチャットログを暗号化フォルダに保存',
            whyItMatters: '機密データを含む会話履歴を保護します。',
          },
          {
            title: 'インストール済み拡張機能とプラグインを確認',
            whyItMatters: '悪意のあるサードパーティ拡張機能がネットワークアクセスするのを防止します。',
          },
          {
            title: 'LLM作業用に専用ユーザーアカウントを使用',
            whyItMatters: 'モデルファイル、チャット履歴、APIキーをメインプロフィールから分離します。',
          },
          {
            title: 'ローカルAPIをインターネットに公開しない',
            whyItMatters: '推論エンジンへの権限のない遠隔アクセスを防止します。',
          },
          {
            title: 'ローカルLLMを使用するアプリケーションのシステムプロンプトを監査',
            whyItMatters: 'ブラウザ拡張機能またはツール統合を通じたデータ漏洩を防止します。',
          },
          {
            title: '推論ツールを最新の状態に保つ',
            whyItMatters: '既知の脆弱性を修正します（例：Ollama CVE-2026-7482は0.17.1で修正）。',
          },
          {
            title: 'ネットワーク分離環境：承認されたモデルバージョンを文書化',
            whyItMatters: 'データ処理および基盤構造分離の規制要件への準拠を確保します。',
          },
        ],
        image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-ja.webp',
        imageCaption: '機密または規制対象データを扱う前に各項目を確認する。',
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
        id: 'model-provenance',
        title: 'ローカルLLMモデルウェイトの安全なダウンロード場所',
        content: [
          '**モデルウェイトは大きなバイナリファイルです。** 不正な形式のGGUFファイルは、それを読み込むパーサーのバグを悪用できます。CVE-2026-7482は、OllamaのGGUFローダーにおけるヒープ領域外読み取りで、Ollama 0.17.1で修正されました。',
        ],
        items: [
          '**Hugging Face**（huggingface.co）：オープンモデルの主要ソース。各ファイルは検証されたSHA256ハッシュを持ちます。Meta、Google、Microsoft、Mistral AI、Qwen/Alibabaなどの著名なパブリッシャーのモデルに固執してください。',
          '**Ollamaライブラリ**（[ollama.com/library](https://ollama.com/library)）：Ollamaは保存前にモデルのハッシュを検証します。公式ライブラリ、または信頼できる公開元からプルしてください。',
          '**LM Studioモデルブラウザ**：Hugging Faceを直接検索します。同じ信頼ルールが適用されます。パブリッシャーアカウントを確認してください。',
          '**回避**：匿名ファイル共有サイト、Discordファイルドロップ、検証可能なハッシュを提供していないソース。',
        ],
      },
      networkIsolation: {
        id: 'network-isolation',
        title: 'ローカルLLMからのアウトバウンド接続をブロックする方法',
        content: '**モデルダウンロード後の推論ツール「電話がかかる」のを防ぐため、アウトバウンド接続をブロックしてください。** macOSでは`pf`ファイアウォールを使用。Linuxでは`ufw`またはOpenSnitch：',
        codeBlock: '# macOS -- pfファイアウォールでOllamaのアウトバウンドをブロック\n# /etc/pf.confに追加：\nblock out proto tcp from any to any user ollama\n\n# Linux -- ufwでブロック\nsudo ufw deny out from any to any app ollama\n\n# またはLittle Snitch（macOS）/OpenSnitch（Linux）を使用\n# GUIで単位プリケーションごとのネットワーク制御が可能',
        codeLanguage: 'bash',
      },
      telemetry: {
        id: 'telemetry-settings',
        title: 'ローカルLLMツールでテレメトリを無効化する方法',
        rows: [
          {
            'ツール': '[Ollama](https://ollama.com)',
            'テレメトリデフォルト': 'ローカル利用では収集なし；クラウドは任意',
            '確認/無効化方法': 'OLLAMA_NO_CLOUD=1でクラウド機能を無効化',
          },
          {
            'ツール': '[LM Studio](https://lmstudio.ai)',
            'テレメトリデフォルト': 'ポリシー上なし；更新・検索は匿名データ',
            '確認/無効化方法': '無効化する設定なし；ファイアウォールで確認',
          },
          {
            'ツール': '[Jan AI](https://jan.ai)',
            'テレメトリデフォルト': 'アナリティクスはオプトイン（初回起動時に選択）',
            '確認/無効化方法': '初回起動時に拒否；オープンソース',
          },
          {
            'ツール': '[GPT4All](https://nomic.ai/gpt4all)',
            'テレメトリデフォルト': '初回起動時のオプトインのみ',
            '確認/無効化方法': '初回起動時に拒否；ファイアウォールで確認',
          },
        ],
        columns: ['ツール', 'テレメトリデフォルト', '確認/無効化方法'],
      },
      threatModel: {
        id: 'threat-model',
        title: 'どのような脅威モデルを想定すべきですか？',
        content: [
          '**ローカルLLM環境は、ツール、プラグイン、または設定ミスによってデータが漏洩する可能性があると想定してください。モデルを信頼できないものとして扱い、モデルが侵害された場合でも機密データにアクセスまたは転送できないように設定を設計してください。これはインファレンスツールをインターネットから隔離し、テレメトリを無効化し、ファイルシステムアクセスを制限することを意味します。**',
          'セキュリティはデータプライバシーだけに限りません——プロンプトインジェクションは悪意のある入力がモデルの動作を操作する独立した攻撃ベクトルです。ローカルモデルとクラウドモデルの両方に適用される注入防御技術については、[プロンプトインジェクションとセキュリティ](https://www.promptquorum.com/ja/prompt-engineering/prompt-injection-and-security)をご覧ください。',
        ],
      },
      faqSection: {
        id: 'faq',
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
            a: 'ローカルモデルを実行している限り、送信しません。Ollama FAQには「ローカルで実行する場合、プロンプトやデータは当社には見えません」とあります。Ollamaのクラウドモデルとウェブ検索はオプションで、プロンプトをOllamaのサーバーに送信します。無効にするには`OLLAMA_NO_CLOUD=1`を設定してください。ローカル環境で想定される外向き通信は、`ollama pull`によるモデルのダウンロードと更新確認です。Ollamaはオープンソースです（[github.com/ollama/ollama](https://github.com/ollama/ollama)）。',
          },
          {
            q: 'ローカルLLMはOpenAI APIを使うより本当にプライベートですか？',
            a: 'はい、プロンプトのプライバシーについてはそうです。ローカルLLMでは、プロンプトがマシンの外に出ることはありません。OpenAI APIは処理のためにプロンプトをOpenAIのサーバーに送信します。OpenAIのAPI利用規約では、APIの入出力はデフォルトでモデルの学習に使われないとされていますが、データは同社のインフラを経由します。機密データや規制対象データ（医療、法務、金融）には、ローカル推論がより保守的な選択です。',
          },
          {
            q: 'ダウンロードしたモデルファイルが安全かどうかをどう確認しますか？',
            a: 'モデルはHugging Face（huggingface.co）またはOllama公式ライブラリからのみダウンロードしてください。Hugging Faceでは各ファイルにSHA256ハッシュが表示されるので、ダウンロード後に`sha256sum <model_file>`で検証します。Meta、Google、Microsoft、Mistral AI、Qwen/Alibabaなど、実績のある公開元のモデルを選んでください。匿名のファイル共有やDiscordで配布されるファイルは避けてください。',
          },
          {
            q: 'ローカルLLMにおけるプライバシーとセキュリティの違いは何ですか？',
            a: 'プライバシーとは、プロンプトと出力が第三者にアクセスされないことです。セキュリティとは、システムが脅威から守られていることです。ローカルLLMは、プライバシーが保たれていても（データがマシンの外に出ない）、セキュリティが不十分な場合があります（信頼できない出所からダウンロードしたモデル、ネットワークに公開されたOllama APIなど）。両方を個別に対策する必要があります。',
          },
          {
            q: 'GDPR規制対象のデータにローカルLLMを使えますか？',
            a: 'ローカル推論は、データが自社のインフラの外に出ないため、GDPRリスクを大幅に下げます。ただし、推論ツール（Ollama、LM Studio）が想定外のネットワーク通信を行っていないこと、ディスク暗号化が有効であること、アクセス制御が整っていることは確認する必要があります。第35条のDPIA要件に対応するため、データ処理の構成を文書化し、個人データがサードパーティのサーバーを経由しないことを確認してください。',
          },
          {
            q: 'LM Studioは安全に使えますか？',
            a: 'プロンプトのプライバシーについては安全です。LM Studioのプライバシーポリシーによると、LM Studio Cloud Servicesを使わない限りチャットとドキュメントはデバイス上に留まり、アプリにはテレメトリやユーザー固有のトラッキングは含まれません。残るリスクは、どのローカルツールにもあるものです。信頼できない公開元のモデルファイル、「Serve on Local Network」でネットワークに開放したローカルAPI、古いアプリバージョンです。モデルは実績のあるHugging Faceの公開元からダウンロードし、この設定は必要なときだけ有効にし、アプリを最新に保ってください。',
          },
          {
            q: 'LM Studioはデータを収集したり、サーバーに送信したりしますか？',
            a: 'LM Studioのプライバシーポリシーには、アプリにテレメトリやユーザー固有のトラッキングは含まれないと記載されています。更新確認はアプリのバージョン、OS、IPアドレス（CDN経由）を送信し、モデル検索とダウンロードは匿名化された検索クエリを送信します。LM Studio Cloud Servicesを使わない限り、チャットの内容とドキュメントは扱われません。無効にできる使用状況データの設定はないため、ファイアウォールやパケットキャプチャで確認してください。',
          },
          {
            q: 'Ollamaは安全に使えますか？',
            a: 'ローカルのプロンプトについては、最新の状態に保ち、ネットワークに公開しなければ安全です。Ollamaは、ローカルで実行する場合プロンプトやデータは見えないとしており、デフォルトで127.0.0.1にバインドされます。主なリスクは脆弱性です。CVE-2026-7482は0.17.1より前のバージョンに影響し、到達可能なAPIから悪用できました。また、Windows版アップデーターの2つの欠陥（CVE-2026-42248とCVE-2026-42249）が2026年に報告されました。更新を適用し、ポート11434を他のデバイスに対して閉じ、アップデーターの修正についてはリリースノートを確認してください。',
          },
          {
            q: 'ネットワーク上の他のデバイスからOllamaにアクセスされるのを防ぐには？',
            a: 'デフォルトでは、Ollamaはlocalhost（127.0.0.1:11434）にバインドされ、他のデバイスからはアクセスできません。以前にネットワークアクセスを許可するためOLLAMA_HOST=0.0.0.0を設定していた場合は、元に戻してください：`export OLLAMA_HOST=127.0.0.1:11434`。ネットワーク上の別のデバイスから接続を試みて、分離を確認します。接続は失敗するはずです。',
          },
          {
            q: '最大限のプライバシーを求めるなら、どのローカルLLMツールが最適ですか？',
            a: '公開されているデフォルト設定を基にすると、4つの中で最も制限が厳しいのはJan AIです。完全なオープンソース（Apache 2.0ライセンス）で、アナリティクスはオプトインで初回起動時に選択します。次がOllamaです。オープンソースで、デフォルトでlocalhostにバインドされ、クラウド機能は`OLLAMA_NO_CLOUD=1`で無効にできます。LM Studioはプライバシーポリシー上テレメトリはありませんが、更新確認とモデル検索は匿名化データを送信します。',
          },
        ],
      },
      sources: {
        title: 'ソース',
        items: [
          '**OWASP AI トップ10** -- モデル展開に関するセキュリティ考慮事項',
          '**Hugging Face Model Card仕様** -- モデル出所およびライセンス基準',
          '**VeraCrypt ディスク暗号化** -- オープンソースの完全ディスク暗号化ツール',
          '**Ollama FAQ**（[docs.ollama.com/faq](https://docs.ollama.com/faq)）-- デフォルトのバインドアドレス、クラウド機能、`OLLAMA_NO_CLOUD`設定',
          '**LM Studioプライバシーポリシー**（[lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)）-- アプリが収集する情報とその時期',
          '**Janプライバシーページ**（[docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)）-- オプトイン方式のアナリティクス',
          '**The Hacker News、Ollama脆弱性レポート**（[thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)）-- CVE-2026-7482とWindows版アップデーターの欠陥',
          '**CERT Polska勧告**（[cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)）-- CVE-2026-42248とCVE-2026-42249の影響バージョン',
        ],
      },
      commonMistakes: {
        title: 'ローカルLLMセキュリティの一般的な誤解',
        items: [
          '**ミス：** Discordやランダムな GitHub リリースなど、サードパーティのサイトからモデルをダウンロードする。**対処：** Hugging Face（huggingface.co）または Ollama ライブラリのみを使用し、`sha256sum` で検証します。',
          '**ミス：** ローカル推論なら完全にプライベートだと思い込む。**対処：** モデルのダウンロード後はアウトバウンド通信をブロックし、LM Studio と GPT4All はファイアウォールで確認し、GPT4All のテレメトリは初回起動時に拒否します。`netstat -an | grep 11434` で想定外のポートがないことを確認します。',
          '**ミス：** テスト後に `OLLAMA_HOST=0.0.0.0` を有効のままにする。**対処：** `export OLLAMA_HOST=127.0.0.1:11434` で元に戻し、別のデバイスから接続を試して拒否されることを確認します。',
          '**ミス：** HIPAA/GDPR 対象の業務でディスク暗号化を省略する。**対処：** FileVault（macOS）または BitLocker（Windows）を有効にし、LM Studio のチャットログフォルダは別途暗号化します。',
          '**ミス：** Open WebUI や Jan AI のサードパーティ拡張機能を確認しない。**対処：** インストール済みの拡張機能を毎月監査し、身に覚えのないネットワークアクセスを求めるものは削除します。',
          '**ミス：** 脆弱性が公表された後も古いOllamaバージョンを使い続ける。**対処：** `ollama --version`を実行し、0.17.1以降に更新します。Windowsでは、上の脆弱性セクションにあるアップデーター関連の勧告も確認してください。',
        ],
        content: '**ローカルLLMのセキュリティ上の問題の多くは、モデルの脆弱性ではなく設定の見落としから生じます。** ここでは、最も多い6つのミスと、それぞれの対処法を示します。',
      },
      regionalContext: {
        id: 'regional-context',
        title: '地域別コンプライアンスの考慮事項',
        content: '**ローカルLLM推論はデータレジデンシーリスクを削減しますが、完全な規制コンプライアンスには地域ごとに追加のコントロールが必要です。** この項目は一般的な情報であり、法的助言ではありません。要件は弁護士またはデータ保護責任者に確認してください。',
        items: [
          '**EU / GDPR（2018）：** ローカル推論により、推論の段階ではモデルプロバイダーとのArticle 28データプロセッサー関係が不要になる場合があります。LM Studioの通信をファイアウォールで確認し、ディスク暗号化を有効にし、すべてのDPIA用にデータ処理セットアップを文書化する必要があります。個人データを処理する前に正当な利益評価を実施してください。',
          '**アメリカ合衆国 / HIPAA：** HIPAAはPHIの保護を要求します：フルディスク暗号化（「暗号化安全港」）、アクセスコントロール、監査ログ。FileVaultを有効にしてテレメトリを無効にしたOllamaはHIPAA対応の合理的な出発点です。正式なコンプライアンスには完全なリスク評価が必要です。',
          '**日本 / APPI（2022）：** 個人情報保護法は処理中の個人データ保護を要求します。ネットワーク分離されたマシン上のローカル推論はデータローカライゼーション要件への対応に役立つ場合があります。APPIの評価の一環としてOllamaアップデートチェックを無効にし、LM Studioの通信をファイアウォールで確認してください。',
          '**中国 / PIPL（2021）：** 内部用にローカルLLMを実行する場合、通常はCAC登録は不要です。必ず法務の専門家に確認してください。中国でローカルLLMを公開向けサービスとしてデプロイする場合、CACアルゴリズム登録が必要です。',
        ],
      },
      relatedReading: {
        title: '関連する読み物',
        items: [
          '[ローカルLLMとは？](/ja/local-llms/what-are-local-llms) -- コア概念とコンポーネント',
          '[ローカルLLMとクラウドAPI](/ja/local-llms/local-llms-vs-cloud-apis) -- プライバシー上の考慮事項',
          '[Ollamaをインストールする方法](/ja/local-llms/how-to-install-ollama) -- インストールとセットアップ',
          '[ラップトップでローカルLLMを実行する](/ja/local-llms/local-llm-on-laptop) -- セキュアなラップトップ構成',
          '[ローカルLLMワンクリックインストーラー](/ja/local-llms/local-llm-one-click-installers) -- LM Studio、Ollama、Jan AI、GPT4Allのプライバシーと使いやすさの比較',
          '[ローカルLLMセットアップのトラブルシューティング](/ja/local-llms/troubleshooting-local-llm-setup) -- ポート11434拒否とGPU未検出などの一般的なエラーを修正',
          '[ファイアウォール内/オフラインのローカルAI (2026)](/ja/power-local-llm/local-ai-behind-firewall-offline-2026) -- Ollamaエアギャップ：ネットワーク隔離、監査ログ、インターネットなしセットアップ。',
          '[中国でのAI開発向けベストVPN (2026)](/ja/prompt-bites/best-vpn-for-ai-development-china-2026) -- ファイアウォールの背後からHugging Face、GitHub、モデルレジストリへのアクセス。',
          '[セルフホストLLMのSOC 2・ISO 27001監査対応ガイド](/ja/local-llms/soc2-iso27001-self-hosted-llm-compliance) -- コンプライアンス担当者向けに本チェックリストを正式な監査フレームワークとして深掘りした記事。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ja/local-llms/local-llm-security-privacy-checklist',
      headline: 'ローカルLLMセキュリティ&プライバシーチェックリスト：12ステップで安全なセットアップを実現',
      description: 'LM StudioやOllamaは安全？ローカルLLMのセキュリティリスクと対策を12項目で解説。各ツールの通信内容、Ollama CVE-2026-7482の修正、テレメトリ、ポート11434の保護を確認できます。',
      datePublished: '2026-04-04',
      dateModified: '2026-11-15',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers and IT professionals running local LLMs',
      },
      keywords: 'ローカルLLM セキュリティ、プライバシー、チェックリスト、暗号化、Ollama',
    },
  },

  zh: {
    designSkin: 'hub',
    theme: 'Getting Started',
    title: '本地LLM安全与隐私检查清单：12个步骤实现安全设置',
    seoTitle: '本地LLM安全清单2026：LM Studio安全吗？12步',
    intro: '使用LM Studio、Ollama、Jan和GPT4All运行本地模型时，您的提示不会发送到外部服务器，但这并不意味着您的设置自动安全。遥测、不可信的模型文件、未打补丁的版本和暴露的API仍然可能泄露数据。本清单说明如何在10分钟内保护本地LLM。',
    metaDescription: 'LM Studio和Ollama安全吗？本地LLM安全12步检查清单：各工具发送哪些数据、Ollama CVE-2026-7482修复、遥测设置与端口11434隔离。',
    heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-zh.webp',
    twitterDescription: '本地LLM安全12步：LM Studio和Ollama安全吗、禁用遥测、修补CVE-2026-7482、隔离端口11434。',
    publishDate: '2026-04-04',
    dateModified: '2026-11-15',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    primaryTerm: '本地LLM隐私',
    toc: [
      {
        label: '关键要点',
        anchor: '#key-takeaways',
      },
      {
        label: 'LM Studio、Ollama、Jan和GPT4All安全吗？',
        anchor: '#are-lm-studio-ollama-safe',
      },
      {
        label: '本地LLM工具近期的安全漏洞',
        anchor: '#recent-vulnerabilities',
      },
      {
        label: '为什么本地LLM不自动保护隐私',
        anchor: '#why-not-automatically-private',
      },
      {
        label: '模型来源：安全下载位置',
        anchor: '#model-provenance',
      },
      {
        label: '网络隔离：阻止出站连接',
        anchor: '#network-isolation',
      },
      {
        label: '按工具分类的遥测设置',
        anchor: '#telemetry-settings',
      },
      {
        label: '威胁模型',
        anchor: '#threat-model',
      },
      {
        label: '常见问题',
        anchor: '#faq',
      },
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
          '5个必做步骤：(1) 模型进程不联网，(2) 加载前用SHA-256验证模型文件，(3) API端点仅绑定到localhost，并将工具更新到已修补的版本，(4) 提示日志加密存储或完全禁用，(5) 未经源码审查不使用第三方插件。',
          'LM Studio、Ollama、Jan和GPT4All安全吗？就提示隐私而言是安全的：运行本地模型时，它们都不会把聊天提示发送给模型提供商。安全使用还需要最新版本、关闭的API端口和可信的模型文件。',
          '本地推理将提示数据保留在第三方服务器之外。剩余风险包括：推理工具的遥测、来自不可信来源的模型文件、未打补丁的版本，以及暴露在网络上的Ollama API。',
          '请将Ollama更新到0.17.1或更高版本：CVE-2026-7482（“Bleeding Llama”，严重级别为critical）曾使未经身份验证的攻击者可以从暴露的Ollama API读取进程内存。',
          'Ollama默认绑定到localhost，除非您明确设置OLLAMA_HOST=0.0.0.0，否则无法从其他设备访问。',
          '核查LM Studio发送的内容：按其隐私政策不含遥测，但更新检查和模型搜索会发送匿名化数据。GPT4All的遥测为选择性加入，首次启动时请拒绝，并在下载模型后阻止出站流量。',
          '仅从Hugging Face（huggingface.co）或官方Ollama库下载模型权重。对于敏感部署，请验证SHA256校验和。',
          '对于受管制的数据（HIPAA、GDPR、法律特权）：启用完全磁盘加密、使用网络隔离的机器，并审计所有已安装的扩展。',
        ],
        title: '本文的核心要点是什么？',
      },
      toolSafety: {
        id: 'are-lm-studio-ollama-safe',
        title: 'LM Studio、Ollama、Jan和GPT4All使用安全吗？',
        content: [
          '**就提示隐私而言是安全的：运行本地模型时，这四款工具都不会把您的聊天提示发送给模型提供商。** 区别在于各工具的网络行为，以及您应该检查的内容。',
        ],
        items: [
          '**LM Studio：** [LM Studio隐私政策](https://lmstudio.ai/app-privacy)称该应用“不含遥测或用户级跟踪”，除非您使用LM Studio云服务，否则不会处理您的聊天或文档。更新检查和模型搜索会发送有限的匿名化数据。仅在其他设备需要访问API时才启用“Serve on Local Network”。',
          '**Ollama：** 根据[Ollama FAQ](https://docs.ollama.com/faq)，“在本地运行时，我们看不到您的提示或数据”，服务器默认绑定到127.0.0.1的11434端口。云模型和网络搜索是可选功能，会把提示发送到Ollama的服务器；设置`OLLAMA_NO_CLOUD=1`即可关闭。请保持更新（见下方漏洞部分）。',
          '**Jan：** 采用Apache 2.0许可证的开源软件（[GitHub](https://github.com/janhq/jan)）。其[隐私页面](https://docs.jan.ai/desktop/privacy)称分析功能为选择性加入（“在您同意之前不收集任何数据”），在首次启动时选择，聊天内容归您所有。连接云提供商后，您的消息会发送给该提供商。',
          '**GPT4All：** 遥测和向Datalake共享聊天均为选择性加入。首次启动时请两者都拒绝，之后再检查设置。',
          '**四款工具通用：** 下载模型后阻止出站流量，仅从知名发布者获取模型文件，并将应用保持在最新版本。',
        ],
      },
      recentVulns: {
        id: 'recent-vulnerabilities',
        title: '本地LLM工具近期有哪些安全漏洞？',
        content: [
          '**2026年，Ollama披露了两组漏洞：一组可通过暴露的API利用，另一组可通过Windows更新程序利用。** 在本地运行并不会让未打补丁的软件变得安全。',
        ],
        items: [
          '**CVE-2026-7482（“Bleeding Llama”）：** Ollama的GGUF模型加载器中的堆越界读取，已在Ollama 0.17.1中修复；[The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)报道其CVSS评分为9.1。能够访问API的未经身份验证的攻击者可以上传精心构造的GGUF文件并读取进程内存，其中可能包含环境变量、API密钥和对话数据。绑定到localhost的安装无法从网络访问，而暴露的实例可以。',
          '**CVE-2026-42248和CVE-2026-42249（CVSS均为7.7）：** Windows版Ollama的更新程序不验证更新二进制文件，并根据HTTP响应头构造暂存路径。[CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248)列出受影响版本为0.12.10至0.17.5，披露时未给出已修补的版本；其他报道给出了更高的上限。攻击者需要控制客户端所连接的更新服务器。在Ollama发布说明确认修复之前，Windows用户可以关闭自动更新，并从官方下载页面手动安装新版本。',
          '**如何检查您的设置：** 运行`ollama --version`，如果低于0.17.1就请更新。确认`OLLAMA_HOST`没有设置为0.0.0.0，然后尝试从网络中的另一台设备访问端口11434，连接应被拒绝。',
        ],
      },
      whyNotAutoPrivate: {
        id: 'why-not-automatically-private',
        title: '为什么本地LLM不自动保护隐私？',
        content: [
          '**模型推理本身是私密的----运行本地模型时，您的提示不会发送到模型提供商的服务器。** 但是，其他三个数据流可能导致信息泄露：',
        ],
        items: [
          '**应用程序遥测**：LM Studio的隐私政策称其不含遥测或用户级跟踪，但更新检查和模型搜索会发送匿名化数据。GPT4All的遥测为选择性加入。其他一些工具可能收集使用分析，请用防火墙验证。',
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
        items: ['"本地LLM自动安全" → 错误，配置最重要', '"没有互联网=没有风险" → 错误，恶意文件和插件仍然适用', '"开源=安全" → 错误，代码仍需验证'],
      },
      risks: {
        id: 'security-risks',
        title: '本地LLM中最大的安全风险是什么？',
        items: [
          '**遥测泄露** → 部分工具会发送使用数据；LM Studio会发送更新检查和模型搜索请求',
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
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地LLM安全检查清单：隔离网络访问、验证模型文件的SHA-256、将API绑定到localhost、加密或禁用提示日志、审计所有第三方插件。',
          },
          {
            type: 'plain-terms',
            text: '只有配置正确，本地LLM才默认私密——上面的5个步骤涵盖了本地推理设置的主要攻击面。',
          },
        ],
        numberedItems: [
          {
            title: '仅从可信来源下载模型',
            whyItMatters: '防止来自不可信来源的恶意模型文件。',
          },
          {
            title: '对敏感用途验证模型校验和',
            whyItMatters: '确保下载的模型文件未被篡改。',
          },
          {
            title: '禁用推理工具中的遥测',
            whyItMatters: '防止使用数据和会话信息被收集。',
          },
          {
            title: '确认Ollama仅绑定到localhost',
            whyItMatters: '防止API被暴露给网络上的其他设备。',
          },
          {
            title: '启用完全磁盘加密',
            whyItMatters: '设备丢失或被盗时保护模型权重和聊天记录。',
          },
          {
            title: '在加密文件夹中存储敏感聊天记录',
            whyItMatters: '保护包含敏感数据的会话历史。',
          },
          {
            title: '查看已安装的扩展和插件',
            whyItMatters: '防止恶意的第三方扩展访问网络。',
          },
          {
            title: '为LLM工作使用专用用户账户',
            whyItMatters: '将模型文件、聊天历史和API密钥与主档案隔离。',
          },
          {
            title: '不要向互联网公开本地API',
            whyItMatters: '防止对推理引擎的未授权远程访问。',
          },
          {
            title: '审计使用本地LLM的应用中的系统提示',
            whyItMatters: '防止通过浏览器扩展或工具集成进行数据泄露。',
          },
          {
            title: '保持推理工具最新',
            whyItMatters: '修补已知漏洞，例如Ollama的CVE-2026-7482（已在0.17.1中修复）。',
          },
          {
            title: '网络隔离环境：文档化批准的模型版本',
            whyItMatters: '确保数据处理和基础设施隔离的监管要求合规。',
          },
        ],
        image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-zh.webp',
        imageCaption: '处理敏感或受监管数据前，请核对每一项。',
      },
      shijianBuildao: {
        title: '实用建议：数据安全合规部署',
        content: '中国企业和政府机构需要满足《数据安全法》（DSL）和《个人信息保护法》（PIPL）。以下建议可帮助您实现合规：',
        items: [
          '**本地数据处理**：使用Ollama确保所有数据处理都在您的机器上本地进行，避免传输到美国云服务器（符合数据本地化要求）。',
          '**中文模型选择**：使用Qwen 3或本地化模型，这些模型由中国企业提供，您对代码和数据处理流程有完全控制。',
          '**审计和合规记录**：为每个Ollama部署维护部署日期、模型版本和访问日志的文档。',
          '**网络隔离部署**：对于包含商业秘密或个人数据的工作，使用本指南第12点----完全网络隔离的机器。',
          '**加密和密钥管理**：启用AES-256磁盘加密，并将加密密钥存储在与模型分离的安全位置。',
        ],
      },
      modelProvenance: {
        id: 'model-provenance',
        title: '在哪里安全下载本地LLM模型权重',
        content: [
          '**模型权重是大型二进制文件。** 格式错误的GGUF文件可能利用加载它的解析器中的漏洞：CVE-2026-7482就是Ollama的GGUF加载器中的堆越界读取，已在Ollama 0.17.1中修复。',
        ],
        items: [
          '**Hugging Face**（huggingface.co）：开源模型的主要来源。每个文件都有经验证的SHA256哈希。坚持来自知名发布者的模型（Meta、Google、Microsoft、Mistral AI、Qwen/阿里巴巴）。',
          '**Ollama库**（[ollama.com/library](https://ollama.com/library)）：Ollama在存储前验证模型哈希。请从官方库或您信任的发布者处拉取。',
          '**LM Studio模型浏览器**：直接搜索Hugging Face。相同的信任规则适用----检查发布者账户。',
          '**避免**：匿名文件共享网站、Discord文件下载和任何不提供可验证哈希的来源。',
        ],
      },
      networkIsolation: {
        id: 'network-isolation',
        title: '如何阻止来自本地LLM的出站连接',
        content: '**在下载模型后阻止出站连接，以防止推理工具"回家拨号"。** 在macOS上使用`pf`防火墙；在Linux上使用`ufw`或OpenSnitch：',
        codeBlock: '# macOS -- 使用pf防火墙阻止Ollama出站\n# 添加到/etc/pf.conf：\nblock out proto tcp from any to any user ollama\n\n# Linux -- 使用ufw阻止\nsudo ufw deny out from any to any app ollama\n\n# 或使用Little Snitch（macOS）/ OpenSnitch（Linux）\n# 用于具有GUI的单应用网络控制',
        codeLanguage: 'bash',
      },
      telemetry: {
        id: 'telemetry-settings',
        title: '如何禁用本地LLM工具中的遥测',
        rows: [
          {
            '工具': '[Ollama](https://ollama.com)',
            '遥测默认': '本地使用不收集；云功能为可选',
            '验证/禁用方式': 'OLLAMA_NO_CLOUD=1可禁用云功能',
          },
          {
            '工具': '[LM Studio](https://lmstudio.ai)',
            '遥测默认': '政策称无；更新/搜索发匿名数据',
            '验证/禁用方式': '无需禁用；用防火墙验证',
          },
          {
            '工具': '[Jan AI](https://jan.ai)',
            '遥测默认': '分析为选择性加入，首次启动时选择',
            '验证/禁用方式': '首次启动时拒绝；开源',
          },
          {
            '工具': '[GPT4All](https://nomic.ai/gpt4all)',
            '遥测默认': '首次启动时仅选择性加入',
            '验证/禁用方式': '首次启动时拒绝；用防火墙验证',
          },
        ],
        columns: ['工具', '遥测默认', '验证/禁用方式'],
      },
      threatModel: {
        id: 'threat-model',
        title: '您应该假设什么样的威胁模型？',
        content: [
          '**假设您的本地LLM环境可能通过工具、插件或配置错误泄露数据。将模型视为不可信的——设计您的设置，使得即使模型被攻击，敏感数据也无法被访问或传输。这意味着将推理工具与互联网隔离、禁用遥测并限制文件系统访问。**',
          '安全不仅仅是数据隐私问题——提示词注入是一种独立的攻击向量，恶意输入会操纵模型的行为。关于适用于本地和云模型的注入防御技术，请参阅[提示词注入与安全](https://www.promptquorum.com/zh/prompt-engineering/prompt-injection-and-security)。',
        ],
      },
      faqSection: {
        id: 'faq',
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
            a: '运行本地模型时不会。Ollama FAQ写明“在本地运行时，我们看不到您的提示或数据”。Ollama的云模型和网络搜索是可选的，会把提示发送到Ollama的服务器；设置`OLLAMA_NO_CLOUD=1`即可禁用。本地环境中预期的出站流量是通过`ollama pull`下载模型和更新检查。Ollama是开源的（[github.com/ollama/ollama](https://github.com/ollama/ollama)）。',
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
            a: '本地推理大幅降低了GDPR风险，因为数据不会离开您的基础设施。但是，您仍然必须验证推理工具（Ollama、LM Studio）不会发送意外的网络流量，已启用磁盘加密，并且访问控制已就位。对于Article 35 DPIA要求，记录您的数据处理设置并确认没有个人数据通过第三方服务器传输。',
          },
          {
            q: 'LM Studio使用安全吗？',
            a: '就提示隐私而言是安全的：根据LM Studio隐私政策，除非您使用LM Studio云服务，否则聊天和文档会保留在您的设备上，应用不含遥测或用户级跟踪。其余风险与所有本地工具相同：来自不可信发布者的模型文件、通过“Serve on Local Network”向网络开放的本地API，以及过时的应用版本。请从知名的Hugging Face发布者处下载模型，仅在需要时启用该设置，并保持应用更新。',
          },
          {
            q: 'LM Studio是否收集数据或将数据发送到其服务器？',
            a: 'LM Studio的隐私政策称该应用不含遥测或用户级跟踪。更新检查会发送应用版本、操作系统和IP地址（经CDN），模型搜索和下载会发送匿名化的搜索查询。除非您使用LM Studio云服务，否则不会处理聊天内容和文档。没有可禁用的使用数据设置；请用防火墙或抓包验证。',
          },
          {
            q: 'Ollama使用安全吗？',
            a: '对于本地提示是安全的，前提是保持更新并且不暴露到网络。Ollama表示在本地运行时看不到您的提示或数据，并且默认绑定到127.0.0.1。漏洞是主要风险：CVE-2026-7482影响0.17.1之前的版本，可通过可访问的API利用；2026年还报告了两个Windows更新程序缺陷（CVE-2026-42248和CVE-2026-42249）。请更新，保持端口11434不对其他设备开放，并查看发布说明了解更新程序的修复情况。',
          },
          {
            q: '如何防止网络中的其他设备访问Ollama？',
            a: '默认情况下，Ollama绑定到localhost（127.0.0.1:11434），其他设备无法访问。如果您之前为允许网络访问而设置了OLLAMA_HOST=0.0.0.0，请还原：`export OLLAMA_HOST=127.0.0.1:11434`。通过尝试从网络中的另一台设备连接来验证隔离效果，连接应当失败。',
          },
          {
            q: '哪个本地LLM工具的隐私保护最强？',
            a: '根据已公布的默认设置，四款工具中Jan AI最为严格：完全开源（Apache 2.0许可证），分析功能为选择性加入，并在首次启动时选择。Ollama其次：开源，默认绑定到localhost，云功能可用`OLLAMA_NO_CLOUD=1`禁用。LM Studio按其隐私政策不含遥测，但更新检查和模型搜索会发送匿名化数据。',
          },
        ],
      },
      sources: {
        title: '来源',
        items: [
          '**OWASP AI安全指南** -- 模型部署的安全考虑',
          '**Hugging Face Model Card规范** -- 模型来源和许可标准',
          '**VeraCrypt磁盘加密** -- 开源全磁盘加密工具',
          '**Ollama FAQ**（[docs.ollama.com/faq](https://docs.ollama.com/faq)）-- 默认绑定地址、云功能和`OLLAMA_NO_CLOUD`设置',
          '**LM Studio隐私政策**（[lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)）-- 应用收集哪些信息及何时收集',
          '**Jan隐私页面**（[docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)）-- 选择性加入的分析功能',
          '**The Hacker News，Ollama漏洞报道**（[thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)）-- CVE-2026-7482和Windows更新程序缺陷',
          '**CERT Polska公告**（[cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)）-- CVE-2026-42248和CVE-2026-42249的受影响版本',
        ],
      },
      commonMistakes: {
        title: '本地LLM安全中最常见的错误是什么？',
        content: '**本地LLM安全故障的大多数情况源于配置疏忽，而非模型漏洞。** 这些是6个最频繁的错误及其修复方法。',
        items: [
          '**错误：** 从第三方网站（Discord、随机GitHub发布）下载模型。**修复：** 仅使用Hugging Face（huggingface.co）或Ollama库。使用`sha256sum`验证。',
          '**错误：** 假设本地推理=完全隐私。**修复：** 下载模型后阻止出站流量，用防火墙检查LM Studio和GPT4All，并在GPT4All首次启动时拒绝遥测。运行`netstat -an | grep 11434`确认无意外端口。',
          '**错误：** 测试后仍保留`OLLAMA_HOST=0.0.0.0`。**修复：** 还原：`export OLLAMA_HOST=127.0.0.1:11434`。从另一设备测试――连接应被拒绝。',
          '**错误：** HIPAA/GDPR工作负载跳过磁盘加密。**修复：** 启用FileVault（macOS）或BitLocker（Windows）。单独加密LM Studio聊天日志文件夹。',
          '**错误：** 未检查Open WebUI或Jan AI中的第三方扩展。**修复：** 每月审计已安装的扩展。删除任何请求您无法识别的网络访问的扩展。',
          '**错误：** 在漏洞披露后仍运行旧版Ollama。**修复：** 运行`ollama --version`并更新到0.17.1或更高版本。在Windows上，还请查看上方漏洞部分中关于更新程序的安全公告。',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '地区合规性考虑',
        content: '**本地LLM推理降低了数据驻留风险，但完全的监管合规性需要按地区增加控制。** 本节为一般性信息，不构成法律建议；请向律师或数据保护负责人确认具体要求。',
        items: [
          '**欧盟 / GDPR（2018）：** 在推理环节，本地推理可免除与模型提供商之间的Article 28数据处理者关系。您仍然必须用防火墙验证LM Studio的网络流量、启用磁盘加密，并为任何DPIA记录数据处理设置。在处理个人数据之前执行正当利益评估。',
          '**美国 / HIPAA：** HIPAA要求PHI保护：完整磁盘加密（"加密安全港"）、访问控制和审计日志。启用FileVault和禁用遥测的Ollama是HIPAA相关要求的合理起点。正式合规需要完整风险评估。',
          '**日本 / APPI（2022）：** 个人信息保护法要求在处理期间保护个人数据。网络隔离机器上的本地推理有助于满足数据本地化要求。禁用Ollama更新检查并用防火墙验证LM Studio的网络流量，作为APPI评估的一部分。',
          '**中国 / PIPL（2021）：** 在中国运行本地LLM供内部使用通常不需要CAC注册，请与法律顾问确认。如果您在中国部署本地LLM作为公开服务，则需要CAC算法注册。',
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[什么是本地LLM？](/zh/local-llms/what-are-local-llms) -- 核心概念和组件',
          '[本地LLM vs 云API](/zh/local-llms/local-llms-vs-cloud-apis) -- 隐私权衡',
          '[如何安装Ollama](/zh/local-llms/how-to-install-ollama) -- 安装和设置',
          '[在笔记本上运行本地LLM](/zh/local-llms/local-llm-on-laptop) -- 安全的笔记本配置',
          '[本地LLM一键安装程序](/zh/local-llms/local-llm-one-click-installers) -- 比较LM Studio、Ollama、Jan AI和GPT4All的隐私和易用性',
          '[本地LLM设置故障排除](/zh/local-llms/troubleshooting-local-llm-setup) -- 修复常见错误，如端口11434被拒和GPU未检测',
          '[防火墙内/离线本地AI (2026)](/zh/power-local-llm/local-ai-behind-firewall-offline-2026) -- Ollama气隙部署：网络隔离、审计日志和无网络设置。',
          '[中国AI开发最佳VPN (2026)](/zh/prompt-bites/best-vpn-for-ai-development-china-2026) -- 从防火墙后访问Hugging Face、GitHub和模型注册表。',
          '[自托管LLM部署的SOC 2与ISO 27001审计准备指南](/zh/local-llms/soc2-iso27001-self-hosted-llm-compliance) -- 面向合规官的正式审计框架版本，深入解读本清单背后的控制要求。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/zh/local-llms/local-llm-security-privacy-checklist',
      headline: '本地LLM安全与隐私检查清单：12个步骤实现安全设置',
      description: '本地LLM安全设置12步清单：禁用遥测、验证校验和、隔离端口11434、启用磁盘加密。涵盖GDPR与HIPAA合规。2026年8月。',
      datePublished: '2026-04-04',
      dateModified: '2026-11-15',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers and IT professionals running local LLMs',
      },
      keywords: '本地LLM安全、隐私、数据安全法、加密、Ollama',
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Local LLM Security & Privacy Steps',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Isolate Your Network',
          description: 'Block outbound internet access from your local LLM machine. Use firewall rules or an isolated VLAN.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Enable Full Disk Encryption',
          description: 'Use FileVault on macOS, BitLocker on Windows, or LUKS on Linux to encrypt all data at rest.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Restrict API Access',
          description: 'Bind Ollama to localhost only (OLLAMA_HOST=127.0.0.1:11434) to prevent unauthorized network access.',
        },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    designSkin: 'hub',
    theme: '시작하기',
    title: '로컬 LLM 보안 및 개인정보 체크리스트: 안전한 설정을 위한 12단계',
    seoTitle: '로컬 LLM 보안 체크리스트 2026: LM Studio는 안전한가?',
    intro: 'LM Studio, Ollama, Jan, GPT4All로 로컬 모델을 실행하면 프롬프트가 외부 서버에 전송되지 않지만, 그렇다고 설정이 자동으로 안전해지는 것은 아닙니다. 텔레메트리, 신뢰할 수 없는 모델 파일, 패치되지 않은 버전, 노출된 API로 인해 데이터가 유출될 수 있습니다. 이 체크리스트는 10분 이내에 로컬 LLM을 안전하게 설정하는 방법을 안내합니다.',
    metaDescription: 'LM Studio와 Ollama는 안전한가? 로컬 LLM 보안 12단계 체크리스트: 도구별 전송 데이터, Ollama CVE-2026-7482 수정, 텔레메트리, 포트 11434 격리.',
    heroImage: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-ko.webp',
    twitterDescription: '12단계 로컬 LLM 보안 체크리스트: LM Studio와 Ollama의 안전성, 텔레메트리 비활성화, CVE-2026-7482 패치, 포트 11434 격리.',
    publishDate: '2026-04-04',
    dateModified: '2026-11-15',
    leadAnswerBlock: '**LM Studio, Ollama, Jan, GPT4All로 로컬 모델을 실행하면 프롬프트가 외부 서버에 전송되지 않지만, 그렇다고 설정이 자동으로 안전해지는 것은 아닙니다. 텔레메트리, 신뢰할 수 없는 모델 파일, 패치되지 않은 버전, 노출된 API로 인해 데이터가 유출될 수 있습니다. 이 체크리스트는 10분 이내에 로컬 LLM을 안전하게 설정하는 방법을 안내합니다.**',
    audience: '소비자용 하드웨어에서 처음으로 로컬 LLM을 실행하는 초보자',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    primaryTerm: '로컬 LLM 개인정보 보호',
    toc: [
      {
        label: '핵심 요약',
        anchor: '#key-takeaways',
      },
      {
        label: 'LM Studio, Ollama, Jan, GPT4All은 안전한가?',
        anchor: '#are-lm-studio-ollama-safe',
      },
      {
        label: '로컬 LLM 도구의 최근 취약점',
        anchor: '#recent-vulnerabilities',
      },
      {
        label: '로컬 LLM이 자동으로 비공개가 아닌 이유',
        anchor: '#why-not-automatically-private',
      },
      {
        label: '모델 출처: 안전하게 다운로드하는 방법',
        anchor: '#model-provenance',
      },
      {
        label: '네트워크 격리: 아웃바운드 연결 차단',
        anchor: '#network-isolation',
      },
      {
        label: '도구별 텔레메트리 설정',
        anchor: '#telemetry-settings',
      },
      {
        label: '위협 모델',
        anchor: '#threat-model',
      },
      {
        label: '자주 묻는 질문',
        anchor: '#faq',
      },
    ],
    sections: {
      areLLMsSecure: {
        id: 'are-llms-private-and-secure',
        title: '로컬 LLM은 비공개이고 안전합니까?',
        content: '로컬 LLM은 기본적으로 프롬프트가 장치에 남아 있기 때문에 비공개입니다. 그러나 자동으로 안전한 것은 아닙니다. 주요 위험 요소는 도구의 텔레메트리, 신뢰할 수 없는 모델 파일, 그리고 네트워크 노출입니다. 안전한 설정을 위해서는 텔레메트리를 비활성화하고, 모델 출처를 검증하며, 외부 접근으로부터 시스템을 격리해야 합니다.',
      },
      tldr: {
        id: 'key-takeaways',
        title: '핵심 요약은 무엇입니까?',
        isTldr: true,
        items: [
          '반드시 지켜야 할 5단계: (1) 모델 프로세스의 인터넷 접근 차단, (2) 로딩 전 SHA-256으로 모델 파일 검증, (3) API 엔드포인트를 localhost에만 바인딩하고 도구를 패치된 버전으로 유지, (4) 프롬프트 로그를 암호화하여 저장하거나 완전히 비활성화, (5) 소스 검토 없이 서드파티 플러그인을 사용하지 않기.',
          'LM Studio, Ollama, Jan, GPT4All은 안전한가? 프롬프트 개인정보 보호 측면에서는 안전합니다. 로컬 모델을 실행할 때 이 도구들은 채팅 프롬프트를 모델 제공자에게 전송하지 않습니다. 안전하게 사용하려면 최신 버전, 닫힌 API 포트, 신뢰할 수 있는 모델 파일도 필요합니다.',
          '로컬 추론은 프롬프트 데이터를 서드파티 서버에서 보호합니다. 남은 위험 요소는 추론 도구의 텔레메트리, 신뢰할 수 없는 출처의 모델 파일, 패치되지 않은 버전, 그리고 네트워크에 노출된 Ollama API입니다.',
          'Ollama를 0.17.1 이상으로 업데이트하십시오. CVE-2026-7482(“Bleeding Llama”, 심각도 critical)로 인해 인증되지 않은 공격자가 노출된 Ollama API에서 프로세스 메모리를 읽을 수 있었습니다.',
          'Ollama는 기본적으로 localhost에 바인딩됩니다. OLLAMA_HOST=0.0.0.0을 명시적으로 설정하지 않는 한 다른 장치에서 접근할 수 없습니다.',
          'LM Studio가 보내는 데이터를 확인하십시오. 개인정보 처리방침상 텔레메트리는 없지만 업데이트 확인과 모델 검색은 익명화된 데이터를 전송합니다. GPT4All 텔레메트리는 옵트인이므로 첫 실행 시 거부하고, 모델 다운로드 후에는 아웃바운드 트래픽을 차단하십시오.',
          '모델 가중치는 Hugging Face(huggingface.co) 또는 공식 Ollama 라이브러리에서만 다운로드하십시오. 민감한 배포의 경우 SHA256 체크섬을 검증하십시오.',
          '규제 데이터(HIPAA, GDPR, 법적 특권)의 경우: 전체 디스크 암호화를 활성화하고, 에어갭 장치를 사용하며, 설치된 모든 확장 프로그램을 감사하십시오.',
        ],
      },
      toolSafety: {
        id: 'are-lm-studio-ollama-safe',
        title: 'LM Studio, Ollama, Jan, GPT4All은 안전하게 사용할 수 있습니까?',
        content: [
          '**프롬프트 개인정보 보호 측면에서는 안전합니다. 로컬 모델을 실행할 때 네 가지 도구 모두 채팅 프롬프트를 모델 제공자에게 전송하지 않습니다.** 차이는 각 도구의 네트워크 동작과 확인해야 할 사항에 있습니다.',
        ],
        items: [
          '**LM Studio:** [LM Studio 개인정보 처리방침](https://lmstudio.ai/app-privacy)은 이 앱에 “텔레메트리나 사용자별 추적이 포함되어 있지 않다”고 밝히며, LM Studio 클라우드 서비스를 사용하지 않는 한 채팅이나 문서를 처리하지 않는다고 명시합니다. 업데이트 확인과 모델 검색은 제한적인 익명화 데이터를 전송합니다. 다른 장치에서 API가 필요할 때만 “Serve on Local Network”를 활성화하십시오.',
          '**Ollama:** [Ollama FAQ](https://docs.ollama.com/faq)에 따르면 “로컬에서 실행할 때 우리는 사용자의 프롬프트나 데이터를 볼 수 없습니다”이며, 서버는 기본적으로 127.0.0.1의 11434 포트에 바인딩됩니다. 클라우드 모델과 웹 검색은 프롬프트를 Ollama 서버로 전송하는 선택 기능이며, `OLLAMA_NO_CLOUD=1`을 설정하면 끌 수 있습니다. 항상 최신 상태로 유지하십시오(아래 취약점 섹션 참조).',
          '**Jan:** Apache 2.0 라이선스의 오픈 소스입니다([GitHub](https://github.com/janhq/jan)). [개인정보 페이지](https://docs.jan.ai/desktop/privacy)에 따르면 분석은 옵트인이며(“동의하기 전까지 데이터 수집 없음”), 첫 실행 시 선택하고, 채팅은 사용자의 것입니다. 클라우드 제공자에 연결하면 메시지가 해당 제공자에게 전송됩니다.',
          '**GPT4All:** 텔레메트리와 Datalake로의 채팅 공유는 옵트인입니다. 첫 실행 시 둘 다 거부하고, 이후 설정을 확인하십시오.',
          '**네 가지 모두 해당:** 모델을 다운로드한 후에는 아웃바운드 트래픽을 차단하고, 모델 파일은 알려진 게시자에게서만 받으며, 앱을 최신 릴리스로 유지하십시오.',
        ],
      },
      recentVulns: {
        id: 'recent-vulnerabilities',
        title: '최근 로컬 LLM 도구에는 어떤 취약점이 있습니까?',
        content: [
          '**2026년에 Ollama에서 두 가지 취약점 묶음이 공개되었습니다. 하나는 노출된 API를 통해, 다른 하나는 Windows 업데이터를 통해 악용될 수 있습니다.** 로컬에서 실행한다고 해서 패치되지 않은 소프트웨어가 안전해지는 것은 아닙니다.',
        ],
        items: [
          '**CVE-2026-7482(“Bleeding Llama”):** Ollama의 GGUF 모델 로더에서 발생하는 힙 범위 밖 읽기 취약점으로, Ollama 0.17.1에서 수정되었습니다. [The Hacker News](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)는 CVSS 점수 9.1로 보도했습니다. API에 접근할 수 있는 인증되지 않은 공격자는 조작된 GGUF 파일을 업로드하여 프로세스 메모리를 읽을 수 있으며, 여기에는 환경 변수, API 키, 대화 데이터가 포함될 수 있습니다. localhost에 바인딩된 설치는 네트워크에서 접근할 수 없지만, 노출된 인스턴스는 접근할 수 있습니다.',
          '**CVE-2026-42248 및 CVE-2026-42249(각각 CVSS 7.7):** Windows용 Ollama 업데이터는 업데이트 바이너리를 검증하지 않으며 HTTP 응답 헤더로 스테이징 경로를 구성합니다. [CERT Polska](https://cert.pl/en/posts/2026/04/CVE-2026-42248)는 영향받는 버전을 0.12.10부터 0.17.5까지로 나열했으며, 공개 시점에는 패치된 릴리스를 명시하지 않았습니다. 다른 보도에서는 더 높은 상한을 제시합니다. 공격자는 클라이언트가 접속하는 업데이트 서버를 제어해야 합니다. Ollama 릴리스 노트에서 수정이 확인될 때까지 Windows 사용자는 자동 업데이트를 끄고 공식 다운로드에서 새 버전을 수동으로 설치할 수 있습니다.',
          '**설정 확인 방법:** `ollama --version`을 실행하고 0.17.1 미만이면 업데이트하십시오. `OLLAMA_HOST`가 0.0.0.0으로 설정되어 있지 않은지 확인한 다음, 네트워크의 다른 장치에서 포트 11434에 접속을 시도하십시오. 연결이 거부되어야 합니다.',
        ],
      },
      whyNotAutoPrivate: {
        id: 'why-not-automatically-private',
        title: '로컬 LLM이 자동으로 비공개가 아닌 이유는 무엇입니까?',
        content: [
          '**모델 추론 자체는 비공개입니다. 로컬 모델을 실행할 때 프롬프트는 모델 제공자의 서버로 전송되지 않습니다.** 그러나 세 가지 다른 데이터 흐름이 정보를 유출할 수 있습니다:',
        ],
        items: [
          '**애플리케이션 텔레메트리**: LM Studio는 개인정보 처리방침에서 텔레메트리와 사용자별 추적이 없다고 밝히지만, 업데이트 확인과 모델 검색은 익명화된 데이터를 전송합니다. GPT4All 텔레메트리는 옵트인입니다. 다른 도구는 사용 분석을 수집할 수 있으므로 방화벽으로 확인하십시오.',
          '**모델 다운로드 출처**: 악성 GGUF 파일은 취약한 추론 엔진에서 모델 로딩 중에 실행되는 코드를 포함할 수 있습니다. 검증되지 않은 모델 파일은 공급망 위험입니다.',
          '**네트워크 노출**: Ollama의 API 서버는 장치의 모든 프로세스에서 접근할 수 있습니다. `OLLAMA_HOST=0.0.0.0`으로 잘못 구성되면 인증 없이 전체 네트워크에서 접근 가능해집니다.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '로컬 LLM이 클라우드 API보다 더 안전합니까?',
        content: '로컬 LLM은 데이터가 장치에 남아 있기 때문에 개인정보 보호 측면에서 더 안전합니다. 반면 클라우드 API는 프롬프트를 외부 서버로 전송합니다. 그러나 로컬 설정은 수동 보안 구성이 필요하지만, 클라우드 제공자는 인프라 보안을 처리합니다. 실제 트레이드오프는 개인정보 자율성 대 위임된 보안입니다.',
      },
      misconceptions: {
        id: 'common-misconceptions',
        title: '로컬 LLM 보안에 대한 일반적인 오해는 무엇입니까?',
        items: [
          '"로컬 LLM은 자동으로 안전하다" → 거짓, 구성이 가장 중요합니다',
          '"인터넷 없음 = 위험 없음" → 거짓, 악성 파일과 플러그인은 여전히 적용됩니다',
          '"오픈 소스 = 안전" → 거짓, 코드는 여전히 검증되어야 합니다',
        ],
      },
      risks: {
        id: 'security-risks',
        title: '로컬 LLM에서 가장 큰 보안 위험은 무엇입니까?',
        items: [
          '**텔레메트리 유출** → 일부 도구는 사용 데이터를 전송하며, LM Studio는 업데이트 확인과 모델 검색 요청을 전송합니다',
          '**악성 모델 파일** → 검증되지 않은 GGUF 파일이 위험을 초래할 수 있습니다',
          '**네트워크 노출** → Ollama와 같은 API가 잘못 구성되면 노출될 수 있습니다',
        ],
      },
      quickChecklist: {
        id: 'quick-checklist',
        title: '처음 5분 안에 무엇을 해야 합니까?',
        numberedItems: [
          '도구에서 텔레메트리를 비활성화하십시오',
          'Hugging Face 또는 Ollama에서만 모델을 다운로드하십시오',
          'API가 localhost에만 바인딩되어 있는지 확인하십시오',
          '전체 디스크 암호화를 활성화하십시오',
          '인터넷에 포트를 노출하지 마십시오',
        ],
      },
      checklist: {
        title: '로컬 LLM 보안 체크리스트에는 무엇이 포함됩니까?',
        content: '**민감하거나 규제된 데이터를 처리하기 전에 아래의 모든 항목을 확인하십시오.** 이 체크리스트는 Ollama, LM Studio, Jan AI, GPT4All 설정에서 가장 일반적인 개인정보 및 보안 격차를 다룹니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 LLM 보안 체크리스트: 네트워크 접근을 격리하고, 모델 파일의 SHA-256을 검증하고, API를 localhost에 바인딩하고, 프롬프트 로그를 암호화하거나 비활성화하고, 모든 서드파티 플러그인을 감사합니다.',
          },
          {
            type: 'plain-terms',
            text: '로컬 LLM은 올바르게 구성한 경우에만 기본적으로 비공개입니다. 위의 5단계는 로컬 추론 환경의 주요 공격 표면을 다룹니다.',
          },
        ],
        numberedItems: [
          {
            title: '신뢰할 수 있는 출처에서만 모델을 다운로드하십시오',
            whyItMatters: '신뢰할 수 없는 출처의 악성 모델 파일을 방지합니다.',
          },
          {
            title: '민감한 사용의 경우 모델 체크섬을 검증하십시오',
            whyItMatters: '다운로드한 모델 파일이 변조되지 않았음을 확인합니다.',
          },
          {
            title: '추론 도구에서 텔레메트리를 비활성화하십시오',
            whyItMatters: '사용 데이터 및 세션 정보가 수집되는 것을 방지합니다.',
          },
          {
            title: 'Ollama가 localhost에만 바인딩되어 있는지 확인하십시오',
            whyItMatters: 'API가 네트워크의 다른 장치에 노출되는 것을 방지합니다.',
          },
          {
            title: '전체 디스크 암호화를 활성화하십시오',
            whyItMatters: '장치를 분실하거나 도난당했을 때 모델 가중치와 채팅 로그를 보호합니다.',
          },
          {
            title: '민감한 채팅 로그를 암호화된 폴더에 저장하십시오',
            whyItMatters: '민감한 데이터가 포함된 대화 기록을 무단 접근으로부터 보호합니다.',
          },
          {
            title: '설치된 확장 프로그램과 플러그인을 검토하십시오',
            whyItMatters: '악성 서드파티 확장 프로그램이 네트워크에 접근하는 것을 방지합니다.',
          },
          {
            title: 'LLM 작업을 위해 전용 사용자 계정을 사용하십시오',
            whyItMatters: '모델 파일, 채팅 기록, API 키를 기본 프로필에서 격리합니다.',
          },
          {
            title: '로컬 API를 인터넷에 노출하지 마십시오',
            whyItMatters: '로컬 추론 엔진에 대한 무단 원격 접근을 방지합니다.',
          },
          {
            title: '로컬 LLM을 사용하는 모든 앱의 시스템 프롬프트를 감사하십시오',
            whyItMatters: '브라우저 확장 프로그램 또는 생산성 도구 통합을 통한 데이터 유출을 방지합니다.',
          },
          {
            title: '추론 도구를 최신 상태로 유지하십시오',
            whyItMatters: '알려진 취약점을 패치합니다. 예: Ollama CVE-2026-7482(0.17.1에서 수정).',
          },
          {
            title: '에어갭 또는 규제 환경의 경우: 승인된 모델 버전을 문서화하십시오',
            whyItMatters: '데이터 처리 및 인프라 격리에 대한 규제 요구사항 준수를 보장합니다.',
          },
        ],
        image: '/images/local-llm-security-privacy-checklist-checklist-overview-hero-ko.webp',
        imageCaption: '민감하거나 규제 대상 데이터를 다루기 전 모든 항목을 확인하세요.',
      },
      modelProvenance: {
        id: 'model-provenance',
        title: '로컬 LLM 모델을 어디에서 안전하게 다운로드해야 합니까?',
        content: [
          '**모델 가중치는 대용량 바이너리 파일입니다.** 잘못된 형식의 GGUF 파일은 이를 로드하는 파서의 버그를 악용할 수 있습니다. CVE-2026-7482는 Ollama의 GGUF 로더에서 발생한 힙 범위 밖 읽기 취약점이며 Ollama 0.17.1에서 수정되었습니다.',
        ],
        items: [
          '**Hugging Face**(huggingface.co): 오픈 모델의 주요 출처입니다. 각 파일에는 검증된 SHA256 해시가 있습니다. 잘 알려진 게시자(Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba)의 모델만 사용하십시오.',
          '**Ollama 라이브러리**([ollama.com/library](https://ollama.com/library)): Ollama는 모델을 저장하기 전에 해시를 검증합니다. 공식 라이브러리 또는 신뢰할 수 있는 게시자에게서 가져오십시오.',
          '**LM Studio 모델 브라우저**: Hugging Face를 직접 검색합니다. 동일한 신뢰 규칙이 적용됩니다. 게시자 계정을 확인하십시오.',
          '**피해야 할 것**: 익명 파일 공유 사이트, Discord 파일 전송, 검증 가능한 해시를 제공하지 않는 출처.',
        ],
      },
      networkIsolation: {
        id: 'network-isolation',
        title: '로컬 LLM에서 아웃바운드 연결을 어떻게 차단합니까?',
        content: '**모델을 다운로드한 후 아웃바운드 연결을 차단하여 추론 도구가 외부에 연락하는 것을 방지하십시오.** macOS에서는 `pf` 방화벽을 사용하고, Linux에서는 `ufw` 또는 OpenSnitch를 사용하십시오:',
        codeBlock: '# macOS -- pf 방화벽으로 Ollama 아웃바운드 차단\n# /etc/pf.conf에 추가:\nblock out proto tcp from any to any user ollama\n\n# Linux -- ufw로 차단\nsudo ufw deny out from any to any app ollama\n\n# 또는 Little Snitch(macOS) / OpenSnitch(Linux) 사용\n# GUI로 애플리케이션별 네트워크 제어',
        codeLanguage: 'bash',
      },
      telemetry: {
        id: 'telemetry-settings',
        title: '로컬 LLM 도구에서 텔레메트리를 어떻게 비활성화합니까?',
        rows: [
          {
            Tool: '[Ollama](https://ollama.com)',
            'Telemetry Default': '로컬 사용 시 없음; 클라우드는 선택',
            'How to Confirm/Disable': 'OLLAMA_NO_CLOUD=1로 클라우드 기능 끄기',
          },
          {
            Tool: '[LM Studio](https://lmstudio.ai)',
            'Telemetry Default': '정책상 없음; 업데이트/검색은 익명 데이터',
            'How to Confirm/Disable': '끌 설정 없음; 방화벽으로 확인',
          },
          {
            Tool: '[Jan AI](https://jan.ai)',
            'Telemetry Default': '분석은 옵트인, 첫 실행 시 선택',
            'How to Confirm/Disable': '첫 실행 시 거부; 오픈 소스',
          },
          {
            Tool: '[GPT4All](https://nomic.ai/gpt4all)',
            'Telemetry Default': '첫 실행 시 옵트인만',
            'How to Confirm/Disable': '첫 실행 시 거부; 방화벽으로 확인',
          },
        ],
        columns: ['Tool', 'Telemetry Default', 'How to Confirm/Disable'],
      },
      threatModel: {
        id: 'threat-model',
        title: '어떤 위협 모델을 가정해야 합니까?',
        content: [
          '**로컬 LLM 환경이 도구, 플러그인 또는 잘못된 구성을 통해 데이터를 유출할 수 있다고 가정하십시오. 모델을 신뢰할 수 없는 것으로 취급하십시오. 모델이 손상되더라도 민감한 데이터에 접근하거나 전송할 수 없도록 설정을 설계하십시오. 이는 추론 도구를 인터넷에서 격리하고, 텔레메트리를 비활성화하며, 파일 시스템 접근을 제한하는 것을 의미합니다.**',
          '보안은 데이터 개인정보 보호만이 아닙니다. 프롬프트 인젝션은 악의적인 입력이 모델 동작을 조작하는 별개의 공격 벡터입니다. 로컬 및 클라우드 모델 모두에 적용되는 인젝션 방어 기술에 대해서는 [프롬프트 인젝션 및 보안](https://www.promptquorum.com/prompt-engineering/prompt-injection-and-security)을 참조하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '로컬 LLM 보안에 관한 일반적인 질문은 무엇입니까?',
        faqs: [
          {
            q: '로컬 LLM이 내 파일이나 인터넷에 접근할 수 있습니까?',
            a: '아니요. 모델 자체는 텍스트를 생성하는 정적 파일입니다. 파일 시스템을 읽거나 네트워크 요청을 할 수 있는 기능이 없습니다. 그러나 모델을 실행하는 추론 도구(Ollama, LM Studio)는 일반적인 OS 수준의 접근 권한을 갖습니다. 일부 도구에는 파일을 읽는 기능이 포함되어 있습니다. 예를 들어 GPT4All의 LocalDocs 또는 LM Studio의 파일 첨부 기능이 있습니다. 이러한 기능은 옵트인이며 명시적으로 문서화되어 있습니다.',
          },
          {
            q: 'HIPAA 적용 데이터에 로컬 LLM을 사용하는 것이 안전합니까?',
            a: '로컬 추론은 클라우드 API가 생성하는 서드파티 데이터 처리자 위험을 제거합니다. 그러나 HIPAA 준수는 비공개 추론 이상을 요구합니다. 전체 디스크 암호화, 접근 제어, 감사 로깅, 그리고 소프트웨어 공급업체가 PHI에 접근할 수 있는 경우 Business Associate Agreement가 필요합니다. FileVault가 활성화되고 텔레메트리가 비활성화된 Ollama 사용은 합리적인 시작점이지만, 공식 HIPAA 준수에는 완전한 위험 평가가 필요합니다.',
          },
          {
            q: 'Ollama가 내 프롬프트를 어딘가로 전송합니까?',
            a: '로컬 모델을 실행할 때는 전송하지 않습니다. Ollama FAQ는 “로컬에서 실행할 때 우리는 사용자의 프롬프트나 데이터를 볼 수 없습니다”라고 명시합니다. Ollama 클라우드 모델과 웹 검색은 선택 기능이며 프롬프트를 Ollama 서버로 전송합니다. `OLLAMA_NO_CLOUD=1`을 설정하면 끌 수 있습니다. 로컬 환경에서 예상되는 아웃바운드 트래픽은 `ollama pull`을 통한 모델 다운로드와 업데이트 확인입니다. Ollama는 오픈 소스입니다([github.com/ollama/ollama](https://github.com/ollama/ollama)).',
          },
          {
            q: '로컬 LLM을 사용하는 것이 OpenAI API를 사용하는 것보다 더 비공개입니까?',
            a: '네, 프롬프트 개인정보 보호 측면에서 그렇습니다. 로컬 LLM을 사용하면 프롬프트가 장치를 벗어나지 않습니다. OpenAI API는 처리를 위해 프롬프트를 OpenAI 서버로 전송합니다. OpenAI의 API 서비스 약관은 기본적으로 API 입력/출력이 모델 훈련에 사용되지 않는다고 명시하지만, 데이터는 그들의 인프라를 통과합니다. 민감하거나 규제된 데이터(의료, 법률, 금융)의 경우 로컬 추론이 더 보수적인 선택입니다.',
          },
          {
            q: '다운로드한 모델 파일이 안전한지 어떻게 확인합니까?',
            a: 'Hugging Face(huggingface.co) 또는 공식 Ollama 라이브러리에서만 모델을 다운로드하십시오. Hugging Face에서는 각 파일에 SHA256 해시가 표시됩니다. 다운로드 후 `sha256sum <model_file>`로 검증하십시오. 알려진 게시자의 모델만 사용하십시오: Meta, Google, Microsoft, Mistral AI, Qwen/Alibaba. 익명 파일 공유 또는 Discord 파일 전송은 피하십시오.',
          },
          {
            q: '로컬 LLM의 개인정보 보호와 보안의 차이는 무엇입니까?',
            a: '개인정보 보호는 프롬프트와 출력이 서드파티에 접근 불가능함을 의미합니다. 보안은 시스템이 위협으로부터 보호됨을 의미합니다. 로컬 LLM은 비공개(데이터가 장치를 벗어나지 않음)이지만 불안전(신뢰할 수 없는 출처에서 다운로드된 모델, 또는 네트워크에 노출된 Ollama API)할 수 있습니다. 두 가지 모두 독립적으로 해결되어야 합니다.',
          },
          {
            q: 'GDPR 규제 데이터에 로컬 LLM을 사용할 수 있습니까?',
            a: '로컬 추론은 데이터가 인프라를 벗어나지 않기 때문에 GDPR 위험을 크게 줄입니다. 그러나 추론 도구(Ollama, LM Studio)에 예상치 못한 네트워크 트래픽을 보내지 않는지, 디스크 암호화가 활성화되어 있는지, 그리고 접근 제어가 마련되어 있는지 여전히 확인해야 합니다. 제35조 DPIA 요구사항을 위해 데이터 처리 설정을 문서화하고 개인 데이터가 서드파티 서버를 통과하지 않음을 확인하십시오.',
          },
          {
            q: 'LM Studio는 안전하게 사용할 수 있습니까?',
            a: '프롬프트 개인정보 보호 측면에서는 안전합니다. LM Studio 개인정보 처리방침에 따르면 LM Studio 클라우드 서비스를 사용하지 않는 한 채팅과 문서는 장치에 남아 있으며, 앱에는 텔레메트리나 사용자별 추적이 없습니다. 남은 위험은 모든 로컬 도구에 공통된 것입니다. 신뢰할 수 없는 게시자의 모델 파일, “Serve on Local Network”로 네트워크에 열어 둔 로컬 API, 오래된 앱 버전입니다. 잘 알려진 Hugging Face 게시자에게서 모델을 다운로드하고, 필요할 때만 해당 설정을 활성화하며, 앱을 최신 상태로 유지하십시오.',
          },
          {
            q: 'LM Studio가 데이터를 수집하거나 서버로 전송합니까?',
            a: 'LM Studio의 개인정보 처리방침에 따르면 이 애플리케이션에는 텔레메트리와 사용자별 추적이 없습니다. 업데이트 확인은 앱 버전, OS, IP 주소(CDN 경유)를 전송하고, 모델 검색과 다운로드는 익명화된 검색어를 전송합니다. LM Studio 클라우드 서비스를 사용하지 않는 한 채팅 내용과 문서는 처리되지 않습니다. 끌 수 있는 사용 데이터 설정은 없으므로 방화벽이나 패킷 캡처로 확인하십시오.',
          },
          {
            q: 'Ollama는 안전하게 사용할 수 있습니까?',
            a: '로컬 프롬프트의 경우 최신 상태로 유지하고 네트워크에 노출하지 않는다면 안전합니다. Ollama는 로컬에서 실행할 때 프롬프트나 데이터를 볼 수 없다고 밝히며, 기본적으로 127.0.0.1에 바인딩됩니다. 주된 위험은 취약점입니다. CVE-2026-7482는 0.17.1 이전 버전에 영향을 주었고 접근 가능한 API를 통해 악용될 수 있었으며, 2026년에는 두 건의 Windows 업데이터 결함(CVE-2026-42248 및 CVE-2026-42249)도 보고되었습니다. 업데이트하고, 포트 11434를 다른 장치에 닫아 두며, 업데이터 수정 여부는 릴리스 노트에서 확인하십시오.',
          },
          {
            q: '네트워크의 다른 장치에서 Ollama에 접근하지 못하게 하려면 어떻게 해야 합니까?',
            a: '기본적으로 Ollama는 localhost(127.0.0.1:11434)에 바인딩되며 다른 장치에서 접근할 수 없습니다. 네트워크 접근을 허용하려고 이전에 OLLAMA_HOST=0.0.0.0을 설정했다면 되돌리십시오: `export OLLAMA_HOST=127.0.0.1:11434`. 네트워크의 다른 장치에서 연결을 시도하여 격리를 확인하십시오. 연결이 실패해야 합니다.',
          },
          {
            q: '최대한의 개인정보 보호를 위해 가장 좋은 로컬 LLM 도구는 무엇입니까?',
            a: '공개된 기본 설정을 기준으로 네 가지 중 가장 제한적인 도구는 Jan AI입니다. 완전한 오픈 소스(Apache 2.0 라이선스)이며 분석은 옵트인으로, 첫 실행 시 선택합니다. 그다음은 Ollama입니다. 오픈 소스이고, 기본적으로 localhost에 바인딩되며, 클라우드 기능은 `OLLAMA_NO_CLOUD=1`로 끌 수 있습니다. LM Studio는 개인정보 처리방침상 텔레메트리가 없지만, 업데이트 확인과 모델 검색은 익명화된 데이터를 전송합니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '추가 자료는 어디에서 찾을 수 있습니까?',
        items: [
          '**OWASP LLM 애플리케이션 상위 10위**([owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)) -- 프롬프트 인젝션 및 공급망 공격을 포함한 LLM 배포의 보안 위험',
          '**Hugging Face 모델 카드 문서**(huggingface.co/docs/hub/model-cards) -- 모델 출처 표준 및 SHA256 해시 검증',
          '**VeraCrypt**(veracrypt.fr) -- Windows, macOS, Linux용 오픈 소스 전체 디스크 및 폴더 암호화',
          '**Ollama FAQ**([docs.ollama.com/faq](https://docs.ollama.com/faq)) -- 기본 바인딩 주소, 클라우드 기능, `OLLAMA_NO_CLOUD` 설정',
          '**LM Studio 개인정보 처리방침**([lmstudio.ai/app-privacy](https://lmstudio.ai/app-privacy)) -- 앱이 수집하는 정보와 수집 시점',
          '**Jan 개인정보 페이지**([docs.jan.ai/desktop/privacy](https://docs.jan.ai/desktop/privacy)) -- 옵트인 방식의 분석',
          '**The Hacker News, Ollama 취약점 보도**([thehackernews.com](https://thehackernews.com/2026/05/ollama-out-of-bounds-read-vulnerability.html)) -- CVE-2026-7482 및 Windows 업데이터 결함',
          '**CERT Polska 권고**([cert.pl](https://cert.pl/en/posts/2026/04/CVE-2026-42248)) -- CVE-2026-42248 및 CVE-2026-42249 영향 버전',
        ],
      },
      commonMistakes: {
        title: '가장 일반적인 로컬 LLM 보안 실수는 무엇입니까?',
        content: '**대부분의 로컬 LLM 보안 실패는 모델 취약점이 아닌 구성 실수에서 비롯됩니다.** 다음은 가장 빈번한 여섯 가지 실수와 각각의 해결 방법입니다.',
        items: [
          '**실수:** 서드파티 사이트(Discord, 무작위 GitHub 릴리스)에서 모델 다운로드. **해결:** Hugging Face(huggingface.co) 또는 Ollama 라이브러리만 사용하십시오. `sha256sum`으로 검증하십시오.',
          '**실수:** 로컬 추론 = 완전한 개인정보 보호라고 가정. **해결:** 모델 다운로드 후 아웃바운드 트래픽을 차단하고 LM Studio와 GPT4All을 방화벽으로 점검하십시오. GPT4All 텔레메트리는 첫 실행 시 거부하십시오. `netstat -an | grep 11434`를 실행하여 예상치 못한 포트가 없는지 확인하십시오.',
          '**실수:** 테스트 후 `OLLAMA_HOST=0.0.0.0`을 활성화된 상태로 방치. **해결:** 되돌리십시오: `export OLLAMA_HOST=127.0.0.1:11434`. 다른 장치에서 테스트하십시오. 연결이 거부되어야 합니다.',
          '**실수:** HIPAA/GDPR 워크로드에 대한 디스크 암호화 건너뜀. **해결:** FileVault(macOS) 또는 BitLocker(Windows)를 활성화하십시오. LM Studio 채팅 로그 폴더를 별도로 암호화하십시오.',
          '**실수:** Open WebUI 또는 Jan AI의 서드파티 확장 프로그램 검토 안 함. **해결:** 매월 설치된 확장 프로그램을 감사하십시오. 인식하지 못하는 네트워크 접근을 요청하는 확장 프로그램을 제거하십시오.',
          '**실수:** 취약점이 공개된 후에도 오래된 Ollama 버전을 계속 실행. **해결:** `ollama --version`을 실행하고 0.17.1 이상으로 업데이트하십시오. Windows에서는 위 취약점 섹션의 업데이터 관련 권고도 확인하십시오.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '지역별 규정 준수 고려사항은 무엇입니까?',
        content: '**로컬 LLM 추론은 데이터 거주 위험을 줄이지만, 완전한 규제 준수에는 지역별 추가 제어가 필요합니다.** 이 항목은 일반 정보이며 법률 자문이 아닙니다. 요건은 변호사 또는 개인정보 보호책임자에게 확인하십시오.',
        items: [
          '**EU / GDPR (2018):** 로컬 추론은 추론 단계에서 모델 제공자와의 제28조 데이터 처리자 관계를 없앨 수 있습니다. LM Studio 네트워크 트래픽을 방화벽으로 확인하고, 디스크 암호화를 활성화하며, 모든 DPIA를 위해 데이터 처리 설정을 문서화해야 합니다. 개인 데이터를 처리하기 전에 정당한 이익 평가를 수행하십시오.',
          '**미국 / HIPAA:** HIPAA는 PHI에 대한 안전장치를 요구합니다: 전체 디스크 암호화("암호화 안전 항구"), 접근 제어, 감사 로깅. FileVault가 활성화되고 텔레메트리가 비활성화된 Ollama 사용은 합리적인 HIPAA 시작점입니다. 공식 준수에는 완전한 위험 평가가 필요합니다.',
          '**일본 / APPI (2022):** 개인정보 보호법은 처리 중 개인 데이터 보호를 요구합니다. 에어갭 장치의 로컬 추론은 데이터 현지화 요건을 충족하는 데 도움이 될 수 있습니다. APPI 평가의 일환으로 Ollama 업데이트 확인을 비활성화하고 LM Studio 네트워크 트래픽을 방화벽으로 확인하십시오.',
          '**중국 / PIPL (2021):** 내부 사용을 위한 로컬 LLM 실행은 일반적으로 CAC 등록이 필요하지 않습니다. 법률 전문가에게 확인하십시오. 중국에서 공개 서비스로 로컬 LLM을 배포하는 경우 CAC 알고리즘 등록이 필요합니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '또 무엇을 읽어야 합니까?',
        items: [
          '[로컬 LLM이란 무엇입니까?](/ko/local-llms/what-are-local-llms) -- 핵심 개념 및 구성 요소',
          '[로컬 LLM 대 클라우드 API](/ko/local-llms/local-llms-vs-cloud-apis) -- 개인정보 보호 트레이드오프',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) -- 설치 및 설정',
          '[노트북에서 로컬 LLM 실행 방법](/ko/local-llms/local-llm-on-laptop) -- 안전한 노트북 구성',
          '[로컬 LLM 원클릭 설치 프로그램](/ko/local-llms/local-llm-one-click-installers) -- 개인정보 보호 및 설치 편의성을 위한 LM Studio, Ollama, Jan AI, GPT4All 설치 프로그램 비교',
          '[로컬 LLM 설정 문제 해결](/ko/local-llms/troubleshooting-local-llm-setup) -- 포트 11434 거부 및 GPU 미감지를 포함한 일반적인 오류 수정',
          '[방화벽 뒤의 로컬 AI / 오프라인 (2026)](/ko/power-local-llm/local-ai-behind-firewall-offline-2026) -- Ollama 에어갭: 네트워크 격리, 감사 로깅, 인터넷 없는 설정.',
          '[중국 AI 개발을 위한 최고의 VPN (2026)](/ko/prompt-bites/best-vpn-for-ai-development-china-2026) -- 방화벽 뒤에서 Hugging Face, GitHub 및 모델 레지스트리 접근.',
          '[셀프호스팅 LLM을 위한 SOC 2·ISO 27001 감사 준비 가이드](/ko/local-llms/soc2-iso27001-self-hosted-llm-compliance) -- 컴플라이언스 담당자를 위해 이 체크리스트를 공식 감사 프레임워크 관점에서 심화한 버전.',
        ],
      },
    },
  },
  };
