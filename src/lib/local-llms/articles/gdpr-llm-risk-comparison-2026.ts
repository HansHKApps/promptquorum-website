import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '../types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Privacy & Security',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-en.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'GDPR Risk Comparison: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR Risk Matrix: LLM Comparison Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR-compliant LLM comparison: DeepSeek API (highest risk), Qwen local (lowest), Llama local, Claude/GPT API (mid-risk). Risk matrix by data residency, jurisdiction, ToS, and SCC requirements.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8 min read',
    educationalLevel: 'Advanced',
    audience: 'CISOs, procurement teams, and compliance officers choosing between proprietary and open-weight LLMs',
    primaryTerm: 'GDPR risk comparison LLM models',
    leadAnswerBlock: '**DeepSeek\'s hosted API presents the highest GDPR risk of the options compared here: its data is stored in mainland China, where PIPL gives authorities broad access, and the EU has no adequacy decision for China. Qwen3.8-27B and Llama 4 Scout run locally carry the lowest risk because no personal data leaves your infrastructure. Claude and OpenAI GPT-5.6 Luna APIs sit in the middle: they need a valid transfer mechanism (EU-US Data Privacy Framework or Standard Contractual Clauses) and, for strict EU residency, an EU-region route such as OpenAI\'s EU data-residency Projects or Claude through Amazon Bedrock or Google Vertex AI EU regions.**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    quickAnswerTop: {
      en: {
        question: 'Which LLM is safest under GDPR?',
        answer: 'Qwen3.8-27B or Llama 4 Scout run locally on your own hardware: no data leaves your jurisdiction, so there is no Article 44 transfer and no SCC or TIA to manage. DeepSeek\'s hosted API is highest-risk because data is stored in China under PIPL. Claude and GPT-5.6 Luna APIs are medium-risk: they need a transfer mechanism (EU-US Data Privacy Framework or SCCs), and EU-only processing is available via OpenAI\'s EU data-residency Projects or Claude on Amazon Bedrock / Google Vertex AI EU regions, not through Anthropic\'s own API.',
        bullets: [
          'Qwen local: Lowest risk. No transfer, Apache 2.0 weights for Qwen3.8-27B, roughly 16–24 GB VRAM when quantized.',
          'DeepSeek API: Highest risk. China-stored data, PIPL jurisdiction, no EU adequacy decision.',
          'Claude/GPT APIs: Medium risk. Transfer mechanism required; EU-region routes reduce but do not remove vendor-jurisdiction questions.',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Welches LLM ist unter DSGVO am sichersten?',
        answer: 'Qwen3.8-27B oder Llama 4 Scout, lokal auf eigener Hardware betrieben: Es verlassen keine Daten Ihre Rechtsordnung, daher gibt es keinen Transfer nach Artikel 44 und keine SCC oder TIA zu verwalten. Die gehostete DeepSeek API ist am riskantesten, da die Daten unter dem PIPL in China gespeichert werden. Die APIs von Claude und GPT-5.6 Luna haben ein mittleres Risiko: Sie benötigen einen Transfermechanismus (EU-US Data Privacy Framework oder SCC); eine reine EU-Verarbeitung ist über OpenAIs Projects mit EU-Datenresidenz oder über Claude auf Amazon Bedrock bzw. Google Vertex AI in EU-Regionen möglich, nicht jedoch über Anthropics eigene API.',
        bullets: [
          'Qwen lokal: Niedrigstes Risiko. Kein Transfer, Apache 2.0-Gewichte für Qwen3.8-27B, quantisiert etwa 16–24 GB VRAM.',
          'DeepSeek API: Höchstes Risiko. Daten in China gespeichert, PIPL-Rechtsordnung, kein EU-Angemessenheitsbeschluss.',
          'Claude-/GPT-APIs: Mittleres Risiko. Transfermechanismus erforderlich; EU-Region-Routen mindern die Fragen zur Anbieter-Rechtsordnung, beseitigen sie aber nicht.',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Quel LLM est le plus sûr selon le RGPD ?',
        answer: 'Qwen3.8-27B ou Llama 4 Scout exécutés en local sur votre propre matériel : aucune donnée ne quitte votre juridiction, donc pas de transfert au sens de l\'article 44 et ni CCT ni TIA à gérer. L\'API hébergée de DeepSeek est la plus risquée, car les données sont stockées en Chine sous la PIPL. Les API Claude et GPT-5.6 Luna présentent un risque moyen : elles exigent un mécanisme de transfert (DPF ou CCT), et un traitement exclusivement dans l\'UE est possible via les Projets OpenAI à résidence des données européenne ou via Claude sur les régions UE d\'Amazon Bedrock / Google Vertex AI, mais pas via l\'API propre d\'Anthropic.',
        bullets: [
          'Qwen local : risque le plus faible. Aucun transfert, poids Apache 2.0 pour Qwen3.8-27B, environ 16–24 Go de VRAM une fois quantifié.',
          'API DeepSeek : risque le plus élevé. Données stockées en Chine, juridiction PIPL, pas de décision d\'adéquation UE.',
          'API Claude/GPT : risque moyen. Mécanisme de transfert requis ; les routes en région UE réduisent sans supprimer les questions de juridiction du fournisseur.',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: 'GDPRの下で最も安全なLLMは何ですか？',
        answer: '自社ハードウェアでローカル実行するQwen3.8-27BまたはLlama 4 Scoutです。データが管轄の外に出ないため、第44条の移転は発生せず、SCCやTIAの管理も不要です。DeepSeekのホスト型APIは、データが中国でPIPLの下に保存されるため最もリスクが高くなります。ClaudeとGPT-5.6 LunaのAPIは中程度のリスクで、移転手段（EU-米国データプライバシーフレームワークまたはSCC）が必要です。EU内のみでの処理は、OpenAIのEUデータレジデンシー対応ProjectやAmazon Bedrock / Google Vertex AIのEUリージョン経由のClaudeで可能ですが、Anthropic自身のAPIでは利用できません。',
        bullets: [
          'Qwenローカル：最低リスク。移転なし。Qwen3.8-27BのウェイトはApache 2.0で、量子化時のVRAMは約16〜24 GBです。',
          'DeepSeek API：最高リスク。データは中国に保存され、PIPLの管轄下にあり、EUの十分性認定もありません。',
          'Claude/GPT API：中程度リスク。移転手段が必要です。EUリージョン経由ならリスクは下がりますが、ベンダーの管轄に関する論点は残ります。',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: '在GDPR下哪个LLM最安全？',
        answer: '在自有硬件上本地运行Qwen3.8-27B或Llama 4 Scout：数据不会离开您所在的司法辖区，因此不存在第44条意义上的转移，也无需管理SCC或TIA。DeepSeek托管API风险最高，因为数据存储在中国并受PIPL约束。Claude和GPT-5.6 Luna API属于中等风险：需要转移机制（欧美数据隐私框架（DPF）或SCC）；仅在欧盟境内处理可通过OpenAI的欧盟数据驻留Project，或通过Amazon Bedrock / Google Vertex AI欧盟区域使用Claude实现，Anthropic自家API不提供此选项。',
        bullets: [
          '本地Qwen：风险最低。无转移，Qwen3.8-27B权重采用Apache 2.0许可，量化后约需16–24 GB VRAM。',
          'DeepSeek API：风险最高。数据存储在中国，受PIPL管辖，无欧盟充分性认定。',
          'Claude/GPT API：中等风险。需要转移机制；欧盟区域路径可降低但不能消除供应商管辖权问题。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Four GDPR Risk Vectors for LLMs', anchor: 'risk-vectors' },
      { label: 'Risk Matrix: Model-by-Model Comparison', anchor: 'risk-matrix' },
      { label: 'Per-Model Verdict and Recommended Use', anchor: 'model-verdicts' },
      { label: 'Recommended Stack by Organization Type', anchor: 'org-stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek\'s hosted API is highest-risk: data is stored in mainland China under PIPL, the EU has no adequacy decision for China, and the privacy policy allows disclosure to authorities where legally required; Italy\'s Garante restricted it and Berlin\'s regulator asked Apple and Google to review the app',
          'Qwen3.8-27B (Apache 2.0) and Llama 4 Scout run locally are lowest-risk: no Article 44 transfer, no SCC required, data stays on your hardware; Llama 4 Scout needs roughly 55–60 GB at 4-bit, Qwen3.8-27B fits a 24 GB GPU when quantized',
          'Claude API and GPT-5.6 Luna are medium-risk: US vendors need the EU-US Data Privacy Framework or SCCs plus a Transfer Impact Assessment; Anthropic\'s own API offers only global or US inference, while OpenAI offers EU data residency for new Projects',
          'Recommended stacks: startups (Claude or OpenAI API under a DPA), data-sensitive organizations (Qwen3.8-27B on one 24 GB GPU), enterprises (multi-GPU local models, air-gapped)',
          'The risk matrix covers five vectors: data residency, training-data jurisdiction, ToS data retention, transfer-mechanism requirement, and overall risk level',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Four GDPR Risk Vectors for LLMs',
        content: [
          'Not all LLM deployments carry the same GDPR risk. The legal and operational risk of using an LLM is determined by four independent factors:',
        ],
        subsections: [
          {
            title: 'Data Residency',
            text: 'Where the model servers physically live. If servers are in the EU and the model provider commits to keeping your data in the EU (contractually), data residency risk is low. If servers are outside the EU with no SCC, data residency risk is high.',
          },
          {
            title: 'Training-Data Jurisdiction',
            text: 'Which country\'s laws govern the training data and the provider\'s right to retain it. US data law (CFAA, SCA) allows law enforcement access. Chinese data law (PIPL) mandates far broader state access rights. EU data stays protected under GDPR and ePrivacy Directive.',
          },
          {
            title: 'ToS Data Retention',
            text: 'What does the Terms of Service say about keeping your data after inference completes? OpenAI and DeepSeek have said (in different forums) that they may retain user prompts for model improvement or legally mandated disclosure. Qwen and Llama run locally have no ToS — you control retention.',
          },
          {
            title: 'SCC / TIA Requirement',
            text: 'Any transfer of EU personal data outside the EU needs a Chapter V transfer mechanism: an adequacy decision (such as the EU-US Data Privacy Framework for certified US companies) or Standard Contractual Clauses (SCCs) plus a Transfer Impact Assessment (TIA). The Data Privacy Framework was upheld by the EU General Court in September 2025, but the appeal (Case C-703/25 P) is pending at the Court of Justice, so SCCs remain the fallback. Cloud APIs require this; local models do not.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Risk Matrix: Model-by-Model Comparison',
        content: [
          'The table below summarizes the GDPR risk profile of each deployment option. Higher scores indicate higher legal and operational risk.',
        ],
        columns: ['Deployment', 'Data Residency', 'Training-Data Jurisdiction', 'ToS Retention Risk', 'SCC / TIA Required?', 'Overall Risk Level'],
        rows: [
          { Deployment: 'DeepSeek API', 'Data Residency': 'China (PRC servers)', 'Training-Data Jurisdiction': 'China (PIPL)', 'ToS Retention Risk': 'Policy allows sharing with authorities', 'SCC / TIA Required?': 'No adequacy; SCC + TIA unlikely to hold', 'Overall Risk Level': '🔴 Highest' },
          { Deployment: 'Claude API (first-party)', 'Data Residency': 'US or global; no EU-only option', 'Training-Data Jurisdiction': 'US', 'ToS Retention Risk': 'Per Anthropic DPA; verify retention', 'SCC / TIA Required?': 'DPF or SCC (in DPA) + TIA', 'Overall Risk Level': '🟠 Medium-High' },
          { Deployment: 'Claude on Bedrock / Vertex AI EU', 'Data Residency': 'EU region (set by endpoint)', 'Training-Data Jurisdiction': 'US vendor, EU processing', 'ToS Retention Risk': 'Cloud provider terms apply', 'SCC / TIA Required?': 'Depends on contract; assess TIA', 'Overall Risk Level': '🟡 Medium' },
          { Deployment: 'GPT-5.6 Luna API (default)', 'Data Residency': 'US (default project)', 'Training-Data Jurisdiction': 'US', 'ToS Retention Risk': 'DPA available; per API terms', 'SCC / TIA Required?': 'DPF or SCC + TIA', 'Overall Risk Level': '🟠 Medium-High' },
          { Deployment: 'OpenAI API (EU Project)', 'Data Residency': 'EU, handled in-region', 'Training-Data Jurisdiction': 'US vendor, EU processing', 'ToS Retention Risk': 'Zero data retention in-region', 'SCC / TIA Required?': 'Reduced; confirm in your DPA', 'Overall Risk Level': '🟡 Medium' },
          { Deployment: 'Llama 4 Scout (local)', 'Data Residency': 'Your hardware (LAN)', 'Training-Data Jurisdiction': 'Open weights, no vendor retention', 'ToS Retention Risk': 'You control retention via local logs', 'SCC / TIA Required?': 'No', 'Overall Risk Level': '🟢 Lowest' },
          { Deployment: 'Qwen3.8-27B (local)', 'Data Residency': 'Your hardware (LAN)', 'Training-Data Jurisdiction': 'Open weights (Apache 2.0)', 'ToS Retention Risk': 'You control retention via local logs', 'SCC / TIA Required?': 'No', 'Overall Risk Level': '🟢 Lowest' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Per-Model Verdict and Recommended Use',
        content: [
          'Use this section to understand when each deployment is appropriate for your GDPR compliance posture.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — Avoid for GDPR workflows',
            text: 'DeepSeek\'s hosted API presents the highest risk of the options compared here because: (1) its privacy policy places data on servers in the People\'s Republic of China, where PIPL and related laws give authorities broad access; (2) the EU has no adequacy decision for China, and SCCs only help if a Transfer Impact Assessment can show the destination law does not undermine them, which is very hard to demonstrate here; (3) the policy allows disclosure to authorities where legally required. Regulators have acted: Italy\'s Garante restricted DeepSeek\'s processing of Italian users\' data in 2025, and Berlin\'s data protection commissioner asked Apple and Google to review the app. If prompts contain personal data of EU residents, using the hosted API likely lacks a valid Article 44 transfer basis. DeepSeek\'s open weights run locally carry the same low transfer risk as other local models; check the model\'s license and your own security setup.',
          },
          {
            title: 'Claude API — Medium risk, manageable with a transfer mechanism',
            text: 'Anthropic\'s DPA incorporates SCCs and names Anthropic as processor, so the Claude API can be used under GDPR with a documented transfer mechanism and Transfer Impact Assessment. Anthropic\'s first-party API offers only two inference geographies, global (default) and US; there is no EU-only option, and workspace data at rest is currently US-only ([Anthropic data residency documentation](https://platform.claude.com/docs/en/manage-claude/data-residency)). Organizations that need EU-only processing can use Claude through Amazon Bedrock or Google Vertex AI with an EU region, where the cloud provider\'s contract and endpoint choice determine residency. For high-sensitivity data (health, financial, biometric), local deployment remains the safer option.',
          },
          {
            title: 'GPT-5.6 Luna API — Medium risk, lower with an EU Project',
            text: 'OpenAI offers a Data Processing Addendum and, for eligible API customers, European data residency: a new Project created with Europe as the region is handled in-region with zero data retention ([OpenAI announcement](https://openai.com/index/introducing-data-residency-in-europe/)). Existing Projects cannot be converted, so migrate by creating a new Project. Without an EU Project, requests default to US processing and need the EU-US Data Privacy Framework or SCCs plus a Transfer Impact Assessment. Either way, avoid sending health, financial, biometric or genetic data unless your DPA, legal basis and risk assessment cover it.',
          },
          {
            title: 'Llama 4 Scout (local) — Lowest risk, but heavy hardware',
            text: 'Llama weights are open under Meta\'s community license, which carries use conditions to check before commercial deployment. Running Llama locally means: (1) no Article 44 transfer; (2) you control all data retention; (3) no SCC or TIA is required; (4) privacy by design under Article 25 is easier to demonstrate. Llama 4 Scout is a 109-billion-parameter mixture-of-experts model: its 4-bit weights need roughly 55–60 GB, so plan for a single 80 GB GPU or more, plus extra memory for long context. Smaller open models fit consumer hardware.',
          },
          {
            title: 'Qwen3.8-27B (local) — Lowest risk, no transfer',
            text: 'Qwen3.8-27B is an open-weight model released under Apache 2.0. Running it locally means no Article 44 transfer, full control of retention, and no SCC or TIA. When quantized it typically fits a 24 GB GPU, making it far easier to deploy than Llama 4 Scout. Qwen3 14B remains a lighter option for 12–16 GB cards. Licensing varies within the Qwen family (Alibaba\'s largest flagship weights use different terms), so confirm the license on the model card of the exact model you deploy. Qwen weights run locally are different from the Alibaba Cloud hosted API, which is a separate transfer assessment.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Recommended Stack by Organization Type',
        content: [
          'The right LLM stack depends on your organization\'s data sensitivity, budget, and regulatory posture. Use these recommendations as a starting point for procurement decisions.',
        ],
        subsections: [
          {
            title: 'Early-stage startup (low regulatory pressure)',
            text: 'Use the Claude or OpenAI API under the vendor\'s DPA, and prefer an OpenAI EU Project or an EU cloud region if customers ask for EU processing. Rationale: both are production-ready with low operational overhead, and SCCs or the Data Privacy Framework are standard for US-based AI vendors. Experimental usage typically costs a few dollars per month. Risk is acceptable while data is low-sensitivity (anonymous usage patterns, generic business logic). If you grow into healthcare or fintech, migrate to a local model such as Qwen3.8-27B.',
          },
          {
            title: 'SME with employee/customer data (medium regulatory pressure)',
            text: 'Use Qwen3.8-27B (or Qwen3 14B on smaller cards) locally. Rationale: you handle personal data (employee roster, customer contact details, transaction history), so a zero-transfer architecture removes the transfer question entirely. A single 24 GB GPU runs Qwen3.8-27B quantized; a 12 GB GPU runs Qwen3 14B at Q4. Hardware is a one-time cost plus electricity. Setup with Ollama typically takes under an hour. You still need a lawful basis, a record of processing and security measures, but no SCC, TIA or vendor DPA negotiation.',
          },
          {
            title: 'Enterprise (high regulatory pressure: healthcare, fintech, law)',
            text: 'Use multi-GPU local deployment with air-gapping. Rationale: high-sensitivity data calls for the strongest architecture. Multiple GPUs let you run larger open-weight models such as Llama 4 Scout or bigger Qwen variants with lower latency. Air-gapping means the inference cluster has no outbound internet access, which removes outbound network connections as a route for prompts to leave the cluster. Budget for tens of thousands of dollars in hardware and one to two weeks of infrastructure work. This supports Article 32 (security) and an Article 30 audit trail through access logs.',
          },
          {
            title: 'Organization with existing legal agreement (special case)',
            text: 'If you already have a Data Processing Addendum with Anthropic or OpenAI, build on it. Switching to local deployment is often costlier than extending an existing agreement, and a current DPA with SCCs or Data Privacy Framework coverage plus a completed TIA keeps the risk manageable. Review with your legal team before deciding, and re-check the arrangement if the pending Data Privacy Framework appeal changes the US transfer basis.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Is DeepSeek GDPR compliant if I use it with an SCC?',
            a: 'Very unlikely. SCCs only work if a Transfer Impact Assessment shows the destination country\'s law does not undermine them. For mainland China there is no EU adequacy decision, PIPL gives authorities broad access to data, and DeepSeek\'s privacy policy allows disclosure to authorities where legally required. Regulators have already acted: Italy\'s Garante restricted DeepSeek\'s processing of Italian users\' data, and Berlin\'s data protection commissioner asked Apple and Google to review the app. For personal data of EU residents, do not use the hosted DeepSeek API. DeepSeek\'s open weights can be run on your own hardware, which removes the transfer, but check the model license and your security setup.',
          },
          {
            q: 'Can I keep Claude prompts inside the EU?',
            a: 'Not through Anthropic\'s own API. Its inference_geo setting offers only global or US, and workspace data at rest is US-only. EU-region processing is available by using Claude through Amazon Bedrock or Google Vertex AI with an EU region; the cloud provider\'s contract and endpoint decide where inference runs, so confirm it with them. Anthropic\'s DPA incorporates SCCs for transfers. For the strongest posture with no transfer at all, use a local model such as Qwen3.8-27B or Llama 4 Scout.',
          },
          {
            q: 'Which LLM API is GDPR compliant?',
            a: 'No API is compliant by itself: GDPR compliance depends on how you use it. Check four things: a signed DPA that makes the vendor your processor, a valid transfer mechanism (EU-US Data Privacy Framework or SCCs plus a TIA) if data leaves the EU, a clear retention and no-training setting, and a lawful basis for the personal data you send. OpenAI offers EU data-residency Projects for eligible customers and a DPA; Anthropic offers a DPA with SCCs, with EU processing available through cloud-provider regions. DeepSeek\'s hosted API is the hardest to justify. For sensitive data, local models avoid the transfer question entirely.',
          },
          {
            q: 'Is Qwen safe to use under GDPR?',
            a: 'It depends on how you run it. Qwen open weights (for example Qwen3.8-27B under Apache 2.0) run on your own hardware send no data to Alibaba, so there is no Article 44 transfer and the risk profile matches Llama. The Alibaba Cloud hosted API is different: you would be sending prompts to a provider outside the EU, which needs its own transfer assessment, DPA and region check. Verify the license on the model card, because terms differ across the Qwen family.',
          },
          {
            q: 'Can I use Llama 4 Scout as a drop-in replacement for Claude?',
            a: 'For GDPR compliance: yes in principle. Llama 4 Scout is open-weight and can run locally, so it avoids the Article 44 transfer. For hardware and capability: not as a drop-in. Scout is a 109-billion-parameter mixture-of-experts model that needs roughly 55–60 GB at 4-bit, so a single 80 GB GPU at minimum, while Qwen3.8-27B fits a quantized 24 GB card. Claude is a proprietary frontier model and is usually stronger on very complex reasoning. Test on your own workload first; for Q&A, summarization and routine code tasks, local models are often competitive.',
          },
          {
            q: 'What happens if I log my prompts locally for audit purposes?',
            a: 'Logging is encouraged for Article 30 compliance. Log the following: model name, session timestamp, input token count, output token count, and a SHA-256 hash of the prompt and response. Do NOT log the raw text of prompts containing personal data. Hash-based logging satisfies Article 30 (processing records) and Article 32 (security) without violating Article 5(1)(e) (storage limitation). Store logs on an encrypted, access-controlled system (e.g., log aggregation server with role-based access). Retain logs for 3 years per DPA standard.',
          },
          {
            q: 'Is running an LLM on-prem more expensive than cloud APIs?',
            a: 'Upfront: yes. Hardware (RTX 4070 Ti) costs ~$500–1000. Monthly: no. On-prem electricity is ~$5–10/month. Cloud APIs cost $0.001–0.01 per 1K tokens, which for heavy usage (>1M tokens/month) exceeds $100. Break-even is typically 6–12 months for medium-to-heavy usage. If you run <100K tokens/month, cloud APIs are cheaper. If you run >1M tokens/month, on-prem is cheaper. GDPR compliance is an additional business case: on-prem means zero SCC/TIA legal cost.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[DeepSeek Local Setup for Data Privacy 2026](/local-llms/deepseek-local-china-data-privacy-2026) -- DeepSeek local setup for data privacy',
          '[Qwen GDPR Local Setup Guide 2026](/local-llms/qwen-local-gdpr-setup-guide-2026) -- Qwen GDPR local setup guide',
          '[Enterprise Compliance with Local LLMs](/local-llms/enterprise-compliance-local-llms) -- enterprise compliance with local LLMs',
          '[EU GDPR Cloud GPU Options 2026](/local-llms/eu-cloud-gpu-gdpr-2026) -- EU GDPR cloud GPU options',
          '[Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist) -- local LLM security & privacy checklist',
          '[Data Residency & Sovereign AI: EU/GDPR Enterprise LLM Deployment](/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- the deployment architecture question (self-hosted vs. EU-region vs. sovereign cloud) that sits above the model choices compared here',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'GDPR risk for LLMs is determined by data residency, training-data jurisdiction, ToS retention policies, and SCC/TIA requirements.',
        plainTerms: 'Your LLM choice matters for GDPR because of where your data sits, which country owns the model, how long the vendor keeps your data, and whether you need legal contracts to move data across borders.',
      },
    ],
  },
  es: {
    designSkin: 'hub',
    theme: 'Privacy & Security',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-es.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'Comparación de riesgos RGPD: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'Matriz de riesgo RGPD: Qwen, DeepSeek, Llama y Claude',
    metaDescription: 'Comparación de LLM conforme al RGPD: DeepSeek API (mayor riesgo), Qwen local (menor riesgo), Llama local y Claude/GPT API (riesgo medio). Matriz por datos.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8 min de lectura',
    educationalLevel: 'Advanced',
    audience: 'CISOs, equipos de adquisiciones y responsables de cumplimiento que eligen entre LLMs propietarios y de pesos abiertos',
    primaryTerm: 'comparación de riesgo RGPD modelos LLM',
    leadAnswerBlock: '**La API alojada de DeepSeek presenta el mayor riesgo RGPD de las opciones comparadas: sus datos se almacenan en China continental, donde la PIPL otorga a las autoridades un acceso amplio, y la UE no tiene decisión de adecuación para China. Qwen3.8-27B y Llama 4 Scout ejecutados localmente tienen el menor riesgo porque ningún dato personal sale de tu infraestructura. Las API de Claude y OpenAI GPT-5.6 Luna se sitúan en el punto medio: requieren un mecanismo de transferencia válido (Marco de Privacidad de Datos UE-EE. UU. o Cláusulas Contractuales Estándar) y, para una residencia estrictamente en la UE, una ruta con región de la UE, como los Proyectos con residencia de datos en la UE de OpenAI o Claude a través de Amazon Bedrock o de las regiones de la UE de Google Vertex AI.**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    toc: [
      { label: 'Cuatro vectores de riesgo RGPD para LLMs', anchor: 'risk-vectors' },
      { label: 'Matriz de riesgo: comparación modelo por modelo', anchor: 'risk-matrix' },
      { label: 'Veredicto por modelo y uso recomendado', anchor: 'model-verdicts' },
      { label: 'Stack recomendado según el tipo de organización', anchor: 'org-stacks' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La API alojada de DeepSeek es la de mayor riesgo: los datos se almacenan en China continental bajo la PIPL, la UE no tiene decisión de adecuación para China y la política de privacidad permite la divulgación a las autoridades cuando la ley lo exija; la autoridad italiana (Garante) la restringió y el regulador de Berlín pidió a Apple y Google que revisaran la app',
          'Qwen3.8-27B (Apache 2.0) y Llama 4 Scout ejecutados localmente son los de menor riesgo: sin transferencia según el Artículo 44, sin SCC requerida, los datos permanecen en tu hardware; Llama 4 Scout necesita unos 55–60 GB a 4 bits, Qwen3.8-27B cabe en una GPU de 24 GB cuantizado',
          'La API de Claude y GPT-5.6 Luna tienen riesgo medio: los proveedores estadounidenses requieren el Marco de Privacidad de Datos UE-EE. UU. o SCCs más una Evaluación de Impacto de Transferencia; la API propia de Anthropic ofrece solo inferencia global o en EE. UU., mientras que OpenAI ofrece residencia de datos en la UE para Proyectos nuevos',
          'Stacks recomendados: startups (API de Claude u OpenAI con un DPA), organizaciones con datos sensibles (Qwen3.8-27B en una GPU de 24 GB), empresas (modelos locales multi-GPU, air-gap)',
          'La matriz de riesgo cubre cinco vectores: residencia de datos, jurisdicción de datos de entrenamiento, retención de datos en ToS, requisito de mecanismo de transferencia y nivel de riesgo global',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Cuatro vectores de riesgo RGPD para LLMs',
        content: [
          'No todos los despliegues de LLM conllevan el mismo riesgo RGPD. El riesgo legal y operativo de usar un LLM está determinado por cuatro factores independientes:',
        ],
        subsections: [
          {
            title: 'Residencia de datos',
            text: 'Dónde se ubican físicamente los servidores del modelo. Si los servidores están en la UE y el proveedor se compromete contractualmente a mantener tus datos en la UE, el riesgo de residencia de datos es bajo. Si los servidores están fuera de la UE sin SCC, el riesgo de residencia de datos es alto. Para organizaciones en México (LFPDPPP), Argentina (Ley 25.326) o Colombia (Ley 1581 de 2012), aplican requisitos equivalentes de localización de datos.',
          },
          {
            title: 'Jurisdicción de los datos de entrenamiento',
            text: 'Qué leyes del país rigen los datos de entrenamiento y el derecho del proveedor a retenerlos. La ley de datos de EE. UU. (CFAA, SCA) permite el acceso de las autoridades. La ley de datos china (PIPL) impone derechos de acceso estatal mucho más amplios. Los datos de la UE permanecen protegidos bajo el RGPD y la Directiva ePrivacy; los datos latinoamericanos se rigen por sus respectivas leyes nacionales.',
          },
          {
            title: 'Retención de datos en los ToS',
            text: '¿Qué dice los Términos de Servicio sobre guardar tus datos tras completar la inferencia? OpenAI y DeepSeek han indicado (en distintos foros) que pueden retener los prompts de los usuarios para mejorar el modelo o por divulgación legalmente obligatoria. Qwen y Llama ejecutados localmente no tienen ToS: tú controlas la retención.',
          },
          {
            title: 'Requisito de SCC / TIA',
            text: 'Toda transferencia de datos personales de la UE fuera de la UE requiere un mecanismo de transferencia del Capítulo V: una decisión de adecuación (como el Marco de Privacidad de Datos UE-EE. UU. para empresas estadounidenses certificadas) o Cláusulas Contractuales Estándar (SCCs) más una Evaluación de Impacto de Transferencia (TIA). El Tribunal General de la UE confirmó el Marco de Privacidad de Datos en septiembre de 2025, pero el recurso (asunto C-703/25 P) sigue pendiente ante el Tribunal de Justicia, por lo que las SCCs siguen siendo la alternativa. Las API en la nube requieren esto; los modelos locales no.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Matriz de riesgo: comparación modelo por modelo',
        content: [
          'La siguiente tabla resume el perfil de riesgo RGPD de cada opción de despliegue. Una puntuación más alta indica mayor riesgo legal y operativo.',
        ],
        columns: ['Despliegue', 'Residencia de datos', 'Jurisdicción de datos de entrenamiento', 'Riesgo de retención en ToS', '¿SCC / TIA requerida?', 'Nivel de riesgo global'],
        rows: [
          { Despliegue: 'DeepSeek API', 'Residencia de datos': 'China (servidores en la RPC)', 'Jurisdicción de datos de entrenamiento': 'China (PIPL)', 'Riesgo de retención en ToS': 'La política permite compartir con las autoridades', '¿SCC / TIA requerida?': 'Sin adecuación; SCC + TIA improbable', 'Nivel de riesgo global': '🔴 Mayor' },
          { Despliegue: 'Claude API (directa)', 'Residencia de datos': 'EE. UU. o global; sin opción solo UE', 'Jurisdicción de datos de entrenamiento': 'EE. UU.', 'Riesgo de retención en ToS': 'Según DPA de Anthropic; verifica la retención', '¿SCC / TIA requerida?': 'DPF o SCC (en DPA) + TIA', 'Nivel de riesgo global': '🟠 Medio-alto' },
          { Despliegue: 'Claude en Bedrock / Vertex AI UE', 'Residencia de datos': 'Región UE (según el endpoint)', 'Jurisdicción de datos de entrenamiento': 'Proveedor de EE. UU., procesamiento en la UE', 'Riesgo de retención en ToS': 'Rigen los términos del proveedor cloud', '¿SCC / TIA requerida?': 'Según contrato; evalúa la TIA', 'Nivel de riesgo global': '🟡 Medio' },
          { Despliegue: 'GPT-5.6 Luna API (por defecto)', 'Residencia de datos': 'EE. UU. (proyecto por defecto)', 'Jurisdicción de datos de entrenamiento': 'EE. UU.', 'Riesgo de retención en ToS': 'DPA disponible; según términos de la API', '¿SCC / TIA requerida?': 'DPF o SCC + TIA', 'Nivel de riesgo global': '🟠 Medio-alto' },
          { Despliegue: 'OpenAI API (Proyecto UE)', 'Residencia de datos': 'UE, procesado en la región', 'Jurisdicción de datos de entrenamiento': 'Proveedor de EE. UU., procesamiento en la UE', 'Riesgo de retención en ToS': 'Cero retención de datos en la región', '¿SCC / TIA requerida?': 'Reducida; confírmalo en tu DPA', 'Nivel de riesgo global': '🟡 Medio' },
          { Despliegue: 'Llama 4 Scout (local)', 'Residencia de datos': 'Tu hardware (LAN)', 'Jurisdicción de datos de entrenamiento': 'Pesos abiertos, sin retención del proveedor', 'Riesgo de retención en ToS': 'Tú controlas la retención con logs locales', '¿SCC / TIA requerida?': 'No', 'Nivel de riesgo global': '🟢 Menor' },
          { Despliegue: 'Qwen3.8-27B (local)', 'Residencia de datos': 'Tu hardware (LAN)', 'Jurisdicción de datos de entrenamiento': 'Pesos abiertos (Apache 2.0)', 'Riesgo de retención en ToS': 'Tú controlas la retención con logs locales', '¿SCC / TIA requerida?': 'No', 'Nivel de riesgo global': '🟢 Menor' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Veredicto por modelo y uso recomendado',
        content: [
          'Usa esta sección para entender cuándo es apropiado cada despliegue según tu postura de cumplimiento RGPD.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — Evitar para flujos de trabajo RGPD',
            text: 'La API alojada de DeepSeek presenta el mayor riesgo de las opciones comparadas porque: (1) su política de privacidad sitúa los datos en servidores de la República Popular China, donde la PIPL y leyes afines dan a las autoridades un acceso amplio; (2) la UE no tiene decisión de adecuación para China, y las SCCs solo ayudan si una Evaluación de Impacto de Transferencia puede demostrar que la ley del país de destino no las menoscaba, algo muy difícil de acreditar aquí; (3) la política permite la divulgación a las autoridades cuando la ley lo exija. Los reguladores han actuado: la autoridad italiana (Garante) restringió en 2025 el tratamiento de datos de usuarios italianos por parte de DeepSeek, y la autoridad de protección de datos de Berlín pidió a Apple y Google que revisaran la app. Si los prompts contienen datos personales de residentes en la UE, el uso de la API alojada probablemente carece de una base de transferencia válida según el Artículo 44. Los pesos abiertos de DeepSeek ejecutados localmente conllevan el mismo bajo riesgo de transferencia que otros modelos locales; revisa la licencia del modelo y tu propia configuración de seguridad.',
          },
          {
            title: 'Claude API — Riesgo medio, gestionable con un mecanismo de transferencia',
            text: 'El DPA de Anthropic incorpora SCCs y designa a Anthropic como encargado del tratamiento, por lo que la API de Claude puede usarse conforme al RGPD con un mecanismo de transferencia documentado y una Evaluación de Impacto de Transferencia. La API propia de Anthropic ofrece solo dos geografías de inferencia, global (por defecto) y EE. UU.; no hay opción solo UE, y los datos del workspace en reposo son actualmente solo de EE. UU. ([documentación de residencia de datos de Anthropic](https://platform.claude.com/docs/en/manage-claude/data-residency)). Las organizaciones que necesiten procesamiento solo en la UE pueden usar Claude a través de Amazon Bedrock o Google Vertex AI con una región de la UE, donde el contrato del proveedor cloud y la elección del endpoint determinan la residencia. Para datos de alta sensibilidad (salud, financieros, biométricos), el despliegue local sigue siendo la opción más segura.',
          },
          {
            title: 'GPT-5.6 Luna API — Riesgo medio, menor con un Proyecto UE',
            text: 'OpenAI ofrece un Anexo de Procesamiento de Datos (DPA) y, para los clientes de API elegibles, residencia de datos europea: un Proyecto nuevo creado con Europa como región se procesa en la región con cero retención de datos ([anuncio de OpenAI](https://openai.com/index/introducing-data-residency-in-europe/)). Los Proyectos existentes no se pueden convertir, así que migra creando un Proyecto nuevo. Sin un Proyecto UE, las solicitudes se procesan por defecto en EE. UU. y requieren el Marco de Privacidad de Datos UE-EE. UU. o SCCs más una Evaluación de Impacto de Transferencia. En cualquier caso, evita enviar datos de salud, financieros, biométricos o genéticos salvo que tu DPA, tu base legal y tu evaluación de riesgos los cubran.',
          },
          {
            title: 'Llama 4 Scout (local) — Menor riesgo, pero hardware exigente',
            text: 'Los pesos de Llama son abiertos bajo la licencia comunitaria de Meta, que incluye condiciones de uso que conviene revisar antes de un despliegue comercial. Ejecutar Llama localmente significa: (1) sin transferencia según el Artículo 44; (2) tú controlas toda la retención de datos; (3) no se requiere SCC ni TIA; (4) la privacidad desde el diseño del Artículo 25 es más fácil de demostrar. Llama 4 Scout es un modelo mixture-of-experts de 109 mil millones de parámetros: sus pesos a 4 bits necesitan unos 55–60 GB, así que planifica una sola GPU de 80 GB o más, además de memoria extra para contextos largos. Los modelos abiertos más pequeños caben en hardware de consumo.',
          },
          {
            title: 'Qwen3.8-27B (local) — Menor riesgo, sin transferencia',
            text: 'Qwen3.8-27B es un modelo de pesos abiertos publicado bajo Apache 2.0. Ejecutarlo localmente supone ninguna transferencia según el Artículo 44, control total de la retención y ninguna SCC ni TIA. Cuantizado, suele caber en una GPU de 24 GB, lo que lo hace mucho más fácil de desplegar que Llama 4 Scout. Qwen3 14B sigue siendo una opción más ligera para tarjetas de 12–16 GB. Las licencias varían dentro de la familia Qwen (los pesos insignia más grandes de Alibaba usan otros términos), así que confirma la licencia en la ficha del modelo exacto que despliegues. Los pesos de Qwen ejecutados localmente son distintos de la API alojada de Alibaba Cloud, que exige una evaluación de transferencia aparte.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Stack recomendado según el tipo de organización',
        content: [
          'El stack de LLM adecuado depende de la sensibilidad de datos de tu organización, el presupuesto y la postura regulatoria. Usa estas recomendaciones como punto de partida para las decisiones de adquisición.',
        ],
        subsections: [
          {
            title: 'Startup en etapa temprana (poca presión regulatoria)',
            text: 'Usa la API de Claude o de OpenAI bajo el DPA del proveedor, y prefiere un Proyecto UE de OpenAI o una región cloud de la UE si tus clientes piden procesamiento en la UE. Justificación: ambas están listas para producción con poca carga operativa, y las SCCs o el Marco de Privacidad de Datos son estándar para proveedores de IA con sede en EE. UU. El uso experimental suele costar unos pocos dólares al mes. El riesgo es aceptable mientras los datos sean de baja sensibilidad (patrones de uso anónimos, lógica empresarial genérica). Si creces hacia salud o fintech, migra a un modelo local como Qwen3.8-27B.',
          },
          {
            title: 'Pyme con datos de empleados/clientes (presión regulatoria media)',
            text: 'Usa Qwen3.8-27B (o Qwen3 14B en tarjetas más pequeñas) en local. Justificación: manejas datos personales (nómina de empleados, datos de contacto de clientes, historial de transacciones), así que una arquitectura sin transferencia elimina por completo la cuestión de la transferencia. Una sola GPU de 24 GB ejecuta Qwen3.8-27B cuantizado; una GPU de 12 GB ejecuta Qwen3 14B en Q4. El hardware es un costo único más electricidad. La configuración con Ollama suele llevar menos de una hora. Sigues necesitando una base legal, un registro de tratamientos y medidas de seguridad, pero no SCC, TIA ni negociar un DPA con el proveedor.',
          },
          {
            title: 'Empresa (alta presión regulatoria: salud, fintech, derecho)',
            text: 'Usa un despliegue local multi-GPU con air-gap. Justificación: los datos de alta sensibilidad exigen la arquitectura más sólida. Varias GPU permiten ejecutar modelos de pesos abiertos más grandes, como Llama 4 Scout o variantes mayores de Qwen, con menor latencia. El air-gap significa que el clúster de inferencia no tiene acceso saliente a internet, lo que elimina las conexiones de red salientes como vía por la que los prompts podrían salir del clúster. Presupuesta decenas de miles de dólares en hardware y de una a dos semanas de trabajo de infraestructura. Esto respalda el Artículo 32 (seguridad) y una pista de auditoría del Artículo 30 mediante los registros de acceso.',
          },
          {
            title: 'Organización con acuerdo legal existente (caso especial)',
            text: 'Si ya tienes un Anexo de Procesamiento de Datos con Anthropic u OpenAI, apóyate en él. Cambiar a un despliegue local suele costar más que ampliar un acuerdo existente, y un DPA vigente con SCCs o cobertura del Marco de Privacidad de Datos, más una TIA completada, mantiene el riesgo manejable. Revísalo con tu equipo legal antes de decidir, y vuelve a comprobar el acuerdo si el recurso pendiente sobre el Marco de Privacidad de Datos cambia la base de transferencia con EE. UU.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Cumple DeepSeek el RGPD si lo uso con una SCC?',
            a: 'Muy improbable. Las SCCs solo funcionan si una Evaluación de Impacto de Transferencia demuestra que la ley del país de destino no las menoscaba. Para China continental no hay decisión de adecuación de la UE, la PIPL da a las autoridades un acceso amplio a los datos y la política de privacidad de DeepSeek permite la divulgación a las autoridades cuando la ley lo exija. Los reguladores ya han actuado: la autoridad italiana (Garante) restringió el tratamiento de datos de usuarios italianos por parte de DeepSeek, y la autoridad de protección de datos de Berlín pidió a Apple y Google que revisaran la app. Para datos personales de residentes en la UE, no uses la API alojada de DeepSeek. Los pesos abiertos de DeepSeek pueden ejecutarse en tu propio hardware, lo que elimina la transferencia, pero revisa la licencia del modelo y tu configuración de seguridad.',
          },
          {
            q: '¿Puedo mantener los prompts de Claude dentro de la UE?',
            a: 'No a través de la API propia de Anthropic. Su parámetro inference_geo ofrece solo global o EE. UU., y los datos del workspace en reposo son solo de EE. UU. El procesamiento en una región de la UE está disponible usando Claude a través de Amazon Bedrock o Google Vertex AI con una región de la UE; el contrato del proveedor cloud y el endpoint deciden dónde se ejecuta la inferencia, así que confírmalo con ellos. El DPA de Anthropic incorpora SCCs para las transferencias. Para la postura más sólida, sin ninguna transferencia, usa un modelo local como Qwen3.8-27B o Llama 4 Scout.',
          },
          {
            q: '¿Qué API de LLM cumple el RGPD?',
            a: 'Ninguna API cumple por sí sola: el cumplimiento del RGPD depende de cómo la uses. Comprueba cuatro cosas: un DPA firmado que convierta al proveedor en tu encargado del tratamiento, un mecanismo de transferencia válido (Marco de Privacidad de Datos UE-EE. UU. o SCCs más una TIA) si los datos salen de la UE, un ajuste claro de retención y de no entrenamiento, y una base legal para los datos personales que envías. OpenAI ofrece Proyectos con residencia de datos en la UE para clientes elegibles y un DPA; Anthropic ofrece un DPA con SCCs, con procesamiento en la UE disponible mediante regiones de proveedores cloud. La API alojada de DeepSeek es la más difícil de justificar. Para datos sensibles, los modelos locales evitan por completo la cuestión de la transferencia.',
          },
          {
            q: '¿Es seguro usar Qwen según el RGPD?',
            a: 'Depende de cómo lo ejecutes. Los pesos abiertos de Qwen (por ejemplo Qwen3.8-27B bajo Apache 2.0) ejecutados en tu propio hardware no envían ningún dato a Alibaba, así que no hay transferencia según el Artículo 44 y el perfil de riesgo es igual al de Llama. La API alojada de Alibaba Cloud es distinta: enviarías prompts a un proveedor fuera de la UE, lo que requiere su propia evaluación de transferencia, DPA y comprobación de región. Verifica la licencia en la ficha del modelo, porque los términos varían dentro de la familia Qwen.',
          },
          {
            q: '¿Puedo usar Llama 4 Scout como reemplazo directo de Claude?',
            a: 'En cuanto al cumplimiento del RGPD: sí, en principio. Llama 4 Scout es de pesos abiertos y puede ejecutarse localmente, por lo que evita la transferencia del Artículo 44. En cuanto a hardware y capacidad: no como reemplazo directo. Scout es un modelo mixture-of-experts de 109 mil millones de parámetros que necesita unos 55–60 GB a 4 bits, es decir, una sola GPU de 80 GB como mínimo, mientras que Qwen3.8-27B cabe en una tarjeta de 24 GB cuantizado. Claude es un modelo propietario de frontera y suele ser más fuerte en razonamiento muy complejo. Prueba primero con tu propia carga de trabajo; para preguntas y respuestas, resúmenes y tareas rutinarias de código, los modelos locales suelen ser competitivos.',
          },
          {
            q: '¿Qué ocurre si registro mis prompts localmente con fines de auditoría?',
            a: 'Se recomienda el registro para el cumplimiento del Artículo 30. Registra lo siguiente: nombre del modelo, marca de tiempo de la sesión, recuento de tokens de entrada, recuento de tokens de salida y un hash SHA-256 del prompt y la respuesta. NO registres el texto sin formato de los prompts que contengan datos personales. El registro basado en hash satisface el Artículo 30 (registros de procesamiento) y el Artículo 32 (seguridad) sin violar el Artículo 5(1)(e) (limitación del almacenamiento). Almacena los logs en un sistema cifrado con control de acceso (por ejemplo, servidor de agregación de logs con acceso basado en roles). Retén los logs durante 3 años según el estándar DPA.',
          },
          {
            q: '¿Es más caro ejecutar un LLM on-prem que usar APIs en la nube?',
            a: 'Por adelantado: sí. El hardware (RTX 4070 Ti) cuesta ~$500–1000. Mensualmente: no. La electricidad on-prem es de ~$5–10/mes. Las API en la nube cuestan $0,001–0,01 por 1K tokens, lo que para un uso intensivo (>1M tokens/mes) supera los $100. El punto de equilibrio suele ser de 6–12 meses para uso medio-alto. Si ejecutas <100K tokens/mes, las API en la nube son más baratas. Si ejecutas >1M tokens/mes, el on-prem es más barato. El cumplimiento RGPD es un argumento empresarial adicional: el on-prem elimina el costo legal de SCC/TIA.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Configuración local DeepSeek para privacidad de datos 2026](/es/local-llms/deepseek-local-china-data-privacy-2026) -- configuración local DeepSeek para privacidad de datos',
          '[Guía de configuración local Qwen GDPR 2026](/es/local-llms/qwen-local-gdpr-setup-guide-2026) -- guía de configuración local Qwen GDPR',
          '[Cumplimiento empresarial con LLMs locales](/es/local-llms/enterprise-compliance-local-llms) -- cumplimiento empresarial con LLMs locales',
          '[Opciones de GPU en la nube GDPR de la UE 2026](/es/local-llms/eu-cloud-gpu-gdpr-2026) -- opciones de GPU en la nube GDPR de la UE',
          '[Lista de seguridad y privacidad para LLMs locales](/es/local-llms/local-llm-security-privacy-checklist) -- lista de seguridad y privacidad para LLMs locales',
          '[Residencia de datos e IA soberana: despliegue empresarial de LLM bajo RGPD/UE](/es/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- la cuestión de arquitectura de despliegue que está por encima de las elecciones de modelo comparadas aquí',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'El riesgo RGPD para los LLMs está determinado por la residencia de datos, la jurisdicción de los datos de entrenamiento, las políticas de retención de los ToS y los requisitos de SCC/TIA.',
        plainTerms: 'Tu elección de LLM importa para el RGPD por el lugar donde se almacenan tus datos, qué país es propietario del modelo, cuánto tiempo guarda el proveedor tus datos y si necesitas contratos legales para mover datos entre fronteras.',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Comparación de riesgos RGPD: Qwen vs DeepSeek vs Llama vs Claude 2026',
      description: 'Comparación de LLM conforme al RGPD: matriz de riesgo para DeepSeek, Qwen, Llama y Claude.',
      url: 'https://www.promptquorum.com/es/local-llms/gdpr-llm-risk-comparison-2026',
      inLanguage: 'es',
      datePublished: '2026-05-22',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Privacy & Security',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-ar.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'مقارنة مخاطر ⁨GDPR⁩: ⁨Qwen⁩ مقابل ⁨DeepSeek⁩ مقابل ⁨Llama⁩ مقابل ⁨Claude 2026⁩',
    seoTitle: 'مخاطر ⁨GDPR⁩ لنماذج ⁨LLM⁩: ⁨Qwen⁩ و⁨DeepSeek⁩ و⁨Llama⁩ و⁨Claude⁩',
    metaDescription: '⁨DeepSeek API⁩ أعلى مخاطر ⁨GDPR⁩؛ ⁨Qwen⁩ المحلي الأدنى خطراً؛ ⁨Claude/GPT API⁩ مخاطر متوسطة. مصفوفة مقارنة بالولاية القضائية وإقامة البيانات و⁨SCC⁩.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Advanced',
    audience: 'مديرو أمن المعلومات وفرق المشتريات ومسؤولو الامتثال الذين يختارون بين نماذج LLM الاحتكارية ومفتوحة الأوزان',
    primaryTerm: 'مقارنة مخاطر GDPR لنماذج LLM',
    leadAnswerBlock: '**تمثل واجهة DeepSeek API المستضافة أعلى مخاطر GDPR بين الخيارات المقارنة هنا: فبياناتها مخزّنة في الصين القارية حيث يمنح PIPL السلطات صلاحيات وصول واسعة، ولا يوجد قرار كفاية من الاتحاد الأوروبي بشأن الصين. أما نموذجا Qwen3.8-27B وLlama 4 Scout المشغّلان محليًا فمخاطرهما الأدنى لأن أي بيانات شخصية لا تغادر بنيتك التحتية. وتقع واجهتا Claude وGPT-5.6 Luna في الوسط: فهما تتطلبان آلية نقل صالحة (إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة أو البنود التعاقدية القياسية)، وللإقامة الصارمة في الاتحاد الأوروبي تلزم جهة معالجة في منطقة أوروبية، مثل مشاريع OpenAI لإقامة البيانات في الاتحاد الأوروبي أو Claude عبر Amazon Bedrock أو مناطق Google Vertex AI في الاتحاد الأوروبي.**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    toc: [
      { label: 'أربعة متجهات مخاطر GDPR لنماذج LLM', anchor: 'risk-vectors' },
      { label: 'مصفوفة المخاطر: مقارنة نموذجًا بنموذج', anchor: 'risk-matrix' },
      { label: 'الحكم حسب النموذج والاستخدام الموصى به', anchor: 'model-verdicts' },
      { label: 'الحزمة الموصى بها حسب نوع المؤسسة', anchor: 'org-stacks' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'واجهة DeepSeek API المستضافة هي الأعلى مخاطرة: البيانات مخزّنة في الصين القارية وفق PIPL، ولا يوجد قرار كفاية من الاتحاد الأوروبي بشأن الصين، وتتيح سياسة الخصوصية الإفصاح للسلطات عند اشتراط القانون ذلك؛ وقد قيّدتها هيئة Garante الإيطالية، وطلبت الجهة الرقابية في برلين من Apple وGoogle مراجعة التطبيق',
          'نموذجا Qwen3.8-27B (بترخيص Apache 2.0) وLlama 4 Scout المشغّلان محليًا هما الأقل مخاطرة: لا نقل بموجب المادة 44، ولا حاجة لـ SCC، وتبقى البيانات على أجهزتك؛ ويحتاج Llama 4 Scout نحو 55–60 GB عند 4-bit، بينما يناسب Qwen3.8-27B بطاقة GPU بسعة 24 GB عند التكميم',
          'واجهتا Claude وGPT-5.6 Luna متوسطتا المخاطر: يحتاج المزوّدون الأمريكيون إلى إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة أو SCC إضافةً إلى تقييم أثر النقل (TIA)؛ وتوفر واجهة Anthropic نفسها استدلالًا عالميًا أو أمريكيًا فقط، بينما تقدم OpenAI إقامة بيانات في الاتحاد الأوروبي للمشاريع الجديدة',
          'الحزم الموصى بها: الشركات الناشئة (واجهة Claude أو OpenAI بموجب DPA)، والمؤسسات ذات البيانات الحساسة (نموذج Qwen3.8-27B على GPU واحدة بسعة 24 GB)، والشركات الكبرى (نماذج محلية متعددة الـ GPU ومعزولة شبكيًا)',
          'تغطي مصفوفة المخاطر خمسة متجهات: إقامة البيانات، والولاية القضائية لبيانات التدريب، والاحتفاظ بالبيانات في شروط الخدمة، واشتراط آلية النقل، ومستوى المخاطر الإجمالي',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'أربعة متجهات مخاطر GDPR لنماذج LLM',
        content: [
          'لا تحمل جميع عمليات نشر LLM مخاطر GDPR نفسها. تتحدد المخاطر القانونية والتشغيلية لاستخدام نموذج LLM بأربعة عوامل مستقلة:',
        ],
        subsections: [
          {
            title: 'إقامة البيانات',
            text: 'أين تقع خوادم النموذج فعليًا. إذا كانت الخوادم في الاتحاد الأوروبي والتزم المزوّد تعاقديًا بإبقاء بياناتك داخله، فإن مخاطر إقامة البيانات منخفضة. وإذا كانت الخوادم خارج الاتحاد دون SCC، فإن مخاطر إقامة البيانات مرتفعة. وبالنسبة للمؤسسات في السعودية (نظام حماية البيانات الشخصية PDPL) والإمارات (قانون حماية البيانات الاتحادي) ودول الخليج التي تطبق متطلبات سيادة البيانات، تنطبق متطلبات معادلة لتوطين البيانات.',
          },
          {
            title: 'الولاية القضائية لبيانات التدريب',
            text: 'أي قوانين دولة تحكم بيانات التدريب وحق المزوّد في الاحتفاظ بها. يتيح قانون البيانات الأمريكي (CFAA, SCA) وصول السلطات. ويفرض قانون البيانات الصيني (PIPL) حقوق وصول حكومية أوسع بكثير. تبقى بيانات الاتحاد الأوروبي محمية بموجب GDPR وتوجيه ePrivacy؛ وتخضع بيانات دول الخليج لأنظمتها الوطنية مثل PDPL السعودي وقانون حماية البيانات الإماراتي.',
          },
          {
            title: 'الاحتفاظ بالبيانات في شروط الخدمة',
            text: 'ماذا تقول شروط الخدمة عن حفظ بياناتك بعد إتمام الاستدلال؟ أشارت OpenAI و DeepSeek (في منتديات مختلفة) إلى أنهما قد تحتفظان بـ prompts المستخدمين لتحسين النموذج أو للإفصاح المُلزِم قانونًا. أما Qwen و Llama المشغّلان محليًا فلا تخضعان لأي شروط خدمة: أنت تتحكم في الاحتفاظ.',
          },
          {
            title: 'اشتراط SCC / TIA',
            text: 'يتطلب أي نقل لبيانات شخصية من الاتحاد الأوروبي إلى خارجه آلية نقل وفق الفصل الخامس من GDPR: إما قرار كفاية (مثل إطار خصوصية البيانات DPF بين الاتحاد الأوروبي والولايات المتحدة للشركات الأمريكية المعتمدة) أو البنود التعاقدية القياسية (SCC) إضافةً إلى تقييم أثر النقل (TIA). أيدت المحكمة العامة للاتحاد الأوروبي إطار DPF في سبتمبر 2025، لكن الاستئناف (القضية C-703/25 P) لا يزال منظورًا أمام محكمة العدل، لذا تبقى SCC الخيار الاحتياطي. تتطلب واجهات API السحابية ذلك؛ أما النماذج المحلية فلا.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'مصفوفة المخاطر: مقارنة نموذجًا بنموذج',
        content: [
          'يلخص الجدول التالي ملف مخاطر GDPR لكل خيار نشر. تشير الدرجة الأعلى إلى مخاطر قانونية وتشغيلية أكبر.',
        ],
        columns: ['النشر', 'إقامة البيانات', 'الولاية القضائية لبيانات التدريب', 'مخاطر الاحتفاظ في شروط الخدمة', 'هل SCC / TIA مطلوبة؟', 'مستوى المخاطر الإجمالي'],
        rows: [
          { 'النشر': 'DeepSeek API', 'إقامة البيانات': 'الصين (خوادم في البر الرئيسي)', 'الولاية القضائية لبيانات التدريب': 'الصين (PIPL)', 'مخاطر الاحتفاظ في شروط الخدمة': 'السياسة تتيح المشاركة مع السلطات', 'هل SCC / TIA مطلوبة؟': 'لا كفاية؛ نجاح SCC + TIA مستبعد', 'مستوى المخاطر الإجمالي': '🔴 الأعلى' },
          { 'النشر': 'واجهة Claude API (من المزوّد مباشرة)', 'إقامة البيانات': 'الولايات المتحدة أو عالمي؛ لا خيار أوروبي فقط', 'الولاية القضائية لبيانات التدريب': 'الولايات المتحدة', 'مخاطر الاحتفاظ في شروط الخدمة': 'وفق DPA لدى Anthropic؛ تحقق من الاحتفاظ', 'هل SCC / TIA مطلوبة؟': 'DPF أو SCC (ضمن DPA) + TIA', 'مستوى المخاطر الإجمالي': '🟠 متوسط-مرتفع' },
          { 'النشر': 'Claude عبر Bedrock / Vertex AI في الاتحاد الأوروبي', 'إقامة البيانات': 'منطقة الاتحاد الأوروبي (تحددها نقطة الاتصال)', 'الولاية القضائية لبيانات التدريب': 'مزوّد أمريكي، معالجة في الاتحاد', 'مخاطر الاحتفاظ في شروط الخدمة': 'تسري شروط مزوّد السحابة', 'هل SCC / TIA مطلوبة؟': 'يتوقف على العقد؛ قيّم TIA', 'مستوى المخاطر الإجمالي': '🟡 متوسط' },
          { 'النشر': 'واجهة GPT-5.6 Luna API (الافتراضي)', 'إقامة البيانات': 'الولايات المتحدة (المشروع الافتراضي)', 'الولاية القضائية لبيانات التدريب': 'الولايات المتحدة', 'مخاطر الاحتفاظ في شروط الخدمة': 'DPA متاحة؛ وفق شروط API', 'هل SCC / TIA مطلوبة؟': 'DPF أو SCC + TIA', 'مستوى المخاطر الإجمالي': '🟠 متوسط-مرتفع' },
          { 'النشر': 'واجهة OpenAI API (مشروع الاتحاد الأوروبي)', 'إقامة البيانات': 'الاتحاد الأوروبي، معالجة داخل المنطقة', 'الولاية القضائية لبيانات التدريب': 'مزوّد أمريكي، معالجة في الاتحاد', 'مخاطر الاحتفاظ في شروط الخدمة': 'عدم احتفاظ بالبيانات داخل المنطقة', 'هل SCC / TIA مطلوبة؟': 'مخفّفة؛ تأكد في DPA الخاصة بك', 'مستوى المخاطر الإجمالي': '🟡 متوسط' },
          { 'النشر': 'Llama 4 Scout (محلي)', 'إقامة البيانات': 'أجهزتك (LAN)', 'الولاية القضائية لبيانات التدريب': 'أوزان مفتوحة، لا احتفاظ لدى مزوّد', 'مخاطر الاحتفاظ في شروط الخدمة': 'تتحكم بالاحتفاظ عبر السجلات المحلية', 'هل SCC / TIA مطلوبة؟': 'لا', 'مستوى المخاطر الإجمالي': '🟢 الأدنى' },
          { 'النشر': 'Qwen3.8-27B (محلي)', 'إقامة البيانات': 'أجهزتك (LAN)', 'الولاية القضائية لبيانات التدريب': 'أوزان مفتوحة (Apache 2.0)', 'مخاطر الاحتفاظ في شروط الخدمة': 'تتحكم بالاحتفاظ عبر السجلات المحلية', 'هل SCC / TIA مطلوبة؟': 'لا', 'مستوى المخاطر الإجمالي': '🟢 الأدنى' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'الحكم حسب النموذج والاستخدام الموصى به',
        content: [
          'استخدم هذا القسم لفهم متى يكون كل نشر مناسبًا وفق موقفك من امتثال GDPR.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — يُتجنَّب في مسارات عمل GDPR',
            text: 'تمثل واجهة DeepSeek API المستضافة أعلى مخاطرة بين الخيارات المقارنة هنا لأن: (1) سياسة الخصوصية تضع البيانات على خوادم في جمهورية الصين الشعبية، حيث يمنح PIPL والقوانين المرتبطة به السلطات صلاحيات وصول واسعة؛ (2) لا يوجد قرار كفاية من الاتحاد الأوروبي بشأن الصين، ولا تفيد SCC إلا إذا أثبت تقييم أثر النقل أن قانون الوجهة لا يقوّضها، وهو أمر يصعب إثباته هنا جدًا؛ (3) تتيح السياسة الإفصاح للسلطات عند اشتراط القانون ذلك. وقد تحركت الجهات الرقابية: قيّدت هيئة Garante الإيطالية في 2025 معالجة DeepSeek لبيانات المستخدمين الإيطاليين، وطلبت مفوضة حماية البيانات في برلين من Apple وGoogle مراجعة التطبيق. وإذا احتوت prompts على بيانات شخصية لمقيمين في الاتحاد الأوروبي، فالأرجح أن استخدام الواجهة المستضافة يفتقر إلى أساس نقل صالح بموجب المادة 44. أما أوزان DeepSeek المفتوحة المشغّلة محليًا فمخاطر النقل فيها منخفضة كما في سائر النماذج المحلية؛ تحقق من ترخيص النموذج ومن إعدادات الأمان لديك.',
          },
          {
            title: 'واجهة Claude API — مخاطرة متوسطة، يمكن إدارتها بآلية نقل',
            text: 'تتضمن DPA لدى Anthropic بنود SCC وتسمّي Anthropic جهة معالجة، لذا يمكن استخدام واجهة Claude API وفق GDPR بآلية نقل موثقة وتقييم أثر نقل. وتوفر واجهة Anthropic المباشرة منطقتي استدلال فقط: عالمية (الافتراضية) وأمريكية؛ ولا يوجد خيار للاتحاد الأوروبي فقط، كما أن بيانات مساحة العمل في حالة السكون أمريكية حاليًا فقط ([وثائق Anthropic حول إقامة البيانات](https://platform.claude.com/docs/en/manage-claude/data-residency)). ويمكن للمؤسسات التي تحتاج إلى معالجة داخل الاتحاد الأوروبي فقط استخدام Claude عبر Amazon Bedrock أو Google Vertex AI بمنطقة أوروبية، حيث يحدد عقد مزوّد السحابة واختيار نقطة الاتصال مكان الإقامة. وللبيانات عالية الحساسية (الصحية والمالية والحيوية) يبقى النشر المحلي الخيار الأكثر أمانًا.',
          },
          {
            title: 'واجهة GPT-5.6 Luna API — مخاطرة متوسطة، وأقل مع مشروع أوروبي',
            text: 'تقدم OpenAI ملحق معالجة البيانات (DPA) وإقامة بيانات أوروبية لعملاء API المؤهلين: فالمشروع الجديد الذي يُنشأ بأوروبا منطقةً له يُعالج داخل المنطقة دون أي احتفاظ بالبيانات ([إعلان OpenAI](https://openai.com/index/introducing-data-residency-in-europe/)). ولا يمكن تحويل المشاريع القائمة، لذا يتم الانتقال بإنشاء مشروع جديد. وبدون مشروع أوروبي تُعالج الطلبات افتراضيًا في الولايات المتحدة وتتطلب إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة أو SCC إضافةً إلى تقييم أثر نقل. وفي الحالتين تجنّب إرسال البيانات الصحية أو المالية أو الحيوية أو الجينية ما لم تغطها DPA الخاصة بك وأساسك القانوني وتقييم المخاطر.',
          },
          {
            title: 'نموذج Llama 4 Scout (محلي) — الأقل مخاطرة، لكن بأجهزة ثقيلة',
            text: 'أوزان Llama مفتوحة بموجب ترخيص المجتمع من Meta، وهو يتضمن شروط استخدام ينبغي مراجعتها قبل النشر التجاري. ويعني تشغيل Llama محليًا: (1) لا نقل بموجب المادة 44؛ (2) تتحكم في كل أشكال الاحتفاظ بالبيانات؛ (3) لا حاجة إلى SCC أو TIA؛ (4) يسهل إثبات الخصوصية بحكم التصميم بموجب المادة 25. وLlama 4 Scout نموذج مزيج خبراء (mixture-of-experts) بـ 109 مليار معامل: تحتاج أوزانه بدقة 4-bit إلى نحو 55–60 GB، فخطط لوحدة GPU واحدة بسعة 80 GB أو أكثر، مع ذاكرة إضافية للسياق الطويل. أما النماذج المفتوحة الأصغر فتناسب الأجهزة الاستهلاكية.',
          },
          {
            title: 'نموذج Qwen3.8-27B (محلي) — الأقل مخاطرة، دون نقل',
            text: 'Qwen3.8-27B نموذج مفتوح الأوزان صدر بترخيص Apache 2.0. ويعني تشغيله محليًا: لا نقل بموجب المادة 44، وتحكمًا كاملًا في الاحتفاظ، ودون حاجة إلى SCC أو TIA. وعند التكميم يناسب عادةً بطاقة GPU بسعة 24 GB، مما يجعل نشره أسهل بكثير من Llama 4 Scout. ويبقى Qwen3 14B خيارًا أخف للبطاقات بسعة 12–16 GB. وتختلف التراخيص داخل عائلة Qwen (فأوزان Alibaba الرائدة الأكبر لها شروط مختلفة)، لذا تأكد من الترخيص في بطاقة النموذج الذي تنشره تحديدًا. وتختلف أوزان Qwen المشغّلة محليًا عن واجهة Alibaba Cloud المستضافة، التي تستلزم تقييم نقل مستقلًا.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'الحزمة الموصى بها حسب نوع المؤسسة',
        content: [
          'تعتمد حزمة LLM المناسبة على حساسية بيانات مؤسستك وميزانيتها وموقفها التنظيمي. استخدم هذه التوصيات كنقطة انطلاق لقرارات المشتريات.',
        ],
        subsections: [
          {
            title: 'شركة ناشئة في مرحلة مبكرة (ضغط تنظيمي منخفض)',
            text: 'استخدم واجهة Claude أو OpenAI بموجب DPA الخاصة بالمزوّد، وفضّل مشروع OpenAI الأوروبي أو منطقة سحابية أوروبية إذا طلب العملاء معالجة داخل الاتحاد الأوروبي. المبرر: كلتاهما جاهزة للإنتاج بعبء تشغيلي منخفض، وتُعد SCC أو إطار خصوصية البيانات DPF معيارًا لمزودي الذكاء الاصطناعي الأمريكيين. وتبلغ تكلفة الاستخدام التجريبي عادةً بضعة دولارات شهريًا. والمخاطر مقبولة ما دامت البيانات منخفضة الحساسية (أنماط استخدام مجهولة، منطق أعمال عام). وإذا توسعت نحو الرعاية الصحية أو التقنية المالية، فانتقل إلى نموذج محلي مثل Qwen3.8-27B.',
          },
          {
            title: 'شركة صغيرة ومتوسطة ببيانات موظفين/عملاء (ضغط تنظيمي متوسط)',
            text: 'استخدم Qwen3.8-27B محليًا (أو Qwen3 14B على البطاقات الأصغر). المبرر: أنت تعالج بيانات شخصية (قوائم الموظفين، وتفاصيل اتصال العملاء، وسجل المعاملات)، لذا تزيل بنية عدم النقل سؤال النقل من الأساس. تشغّل بطاقة GPU واحدة بسعة 24 GB نموذج Qwen3.8-27B مكمَّمًا؛ وتشغّل بطاقة بسعة 12 GB نموذج Qwen3 14B بتكميم Q4. وتكلفة الأجهزة مرة واحدة إضافةً إلى الكهرباء. ويستغرق الإعداد باستخدام Ollama عادةً أقل من ساعة. ولا تزال بحاجة إلى أساس قانوني وسجل للمعالجة وتدابير أمنية، لكن دون SCC أو TIA أو تفاوض على DPA مع مزوّد.',
          },
          {
            title: 'شركة كبرى (ضغط تنظيمي مرتفع: صحة، تقنية مالية، قانون)',
            text: 'استخدم نشرًا محليًا متعدد الـ GPU مع عزل شبكي. المبرر: تتطلب البيانات عالية الحساسية أقوى بنية ممكنة. يتيح تعدد الـ GPU تشغيل نماذج مفتوحة الأوزان أكبر مثل Llama 4 Scout أو نسخ Qwen الأكبر بزمن استجابة أقل. ويعني العزل الشبكي أن عنقود الاستدلال لا يملك اتصالًا صادرًا بالإنترنت، مما يزيل الاتصالات الشبكية الصادرة كمسار قد تخرج منه prompts من العنقود. خصّص ميزانية بعشرات آلاف الدولارات للأجهزة وأسبوعًا إلى أسبوعين من أعمال البنية التحتية. ويدعم ذلك المادة 32 (الأمان) وسجل تدقيق للمادة 30 عبر سجلات الوصول.',
          },
          {
            title: 'مؤسسة لديها اتفاق قانوني قائم (حالة خاصة)',
            text: 'إذا كان لديك بالفعل ملحق معالجة بيانات (DPA) مع Anthropic أو OpenAI، فابنِ عليه. غالبًا ما يكون التحول إلى النشر المحلي أكثر كلفة من توسيع اتفاق قائم، ويُبقي وجود DPA حالية تشمل SCC أو إطار خصوصية البيانات DPF مع TIA مكتمل المخاطر قابلة للإدارة. راجع الأمر مع فريقك القانوني قبل اتخاذ القرار، وأعد فحص الترتيب إذا غيّر استئناف إطار DPF المنظور أساس النقل إلى الولايات المتحدة.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل DeepSeek متوافق مع GDPR إذا استخدمته مع SCC؟',
            a: 'هذا مستبعد جدًا. لا تنفع SCC إلا إذا أثبت تقييم أثر النقل أن قانون بلد الوجهة لا يقوّضها. وفي الصين القارية لا يوجد قرار كفاية من الاتحاد الأوروبي، ويمنح PIPL السلطات صلاحيات وصول واسعة إلى البيانات، وتتيح سياسة خصوصية DeepSeek الإفصاح للسلطات عند اشتراط القانون ذلك. وقد تحركت الجهات الرقابية بالفعل: قيّدت هيئة Garante الإيطالية معالجة DeepSeek لبيانات المستخدمين الإيطاليين، وطلبت مفوضة حماية البيانات في برلين من Apple وGoogle مراجعة التطبيق. وبالنسبة للبيانات الشخصية لمقيمين في الاتحاد الأوروبي، لا تستخدم واجهة DeepSeek API المستضافة. يمكن تشغيل أوزان DeepSeek المفتوحة على أجهزتك، مما يزيل النقل، لكن تحقق من ترخيص النموذج ومن إعدادات الأمان لديك.',
          },
          {
            q: 'هل يمكنني إبقاء prompts الخاصة بـ Claude داخل الاتحاد الأوروبي؟',
            a: 'ليس عبر واجهة Anthropic نفسها. فإعداد inference_geo فيها لا يوفر سوى الخيارين عالمي أو أمريكي، وبيانات مساحة العمل في حالة السكون أمريكية فقط. تتوفر المعالجة في منطقة أوروبية باستخدام Claude عبر Amazon Bedrock أو Google Vertex AI بمنطقة أوروبية؛ ويحدد عقد مزوّد السحابة ونقطة الاتصال مكان تشغيل الاستدلال، لذا تأكد من ذلك معه. وتتضمن DPA لدى Anthropic بنود SCC لعمليات النقل. وللحصول على أقوى موقف دون أي نقل، استخدم نموذجًا محليًا مثل Qwen3.8-27B أو Llama 4 Scout.',
          },
          {
            q: 'أي واجهة LLM API متوافقة مع GDPR؟',
            a: 'لا توجد واجهة متوافقة بذاتها: فالامتثال لـ GDPR يتوقف على كيفية استخدامك لها. تحقق من أربعة أمور: DPA موقّعة تجعل المزوّد جهة معالجة لديك، وآلية نقل صالحة (إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة أو SCC مع TIA) إذا غادرت البيانات الاتحاد الأوروبي، وإعداد واضح للاحتفاظ وعدم التدريب، وأساس قانوني للبيانات الشخصية التي ترسلها. تقدم OpenAI مشاريع لإقامة البيانات في الاتحاد الأوروبي للعملاء المؤهلين مع DPA؛ وتقدم Anthropic اتفاقية DPA مع بنود SCC، مع توفر المعالجة داخل الاتحاد الأوروبي عبر مناطق مزودي السحابة. وتُعد واجهة DeepSeek API المستضافة الأصعب تبريرًا. وللبيانات الحساسة تتجنب النماذج المحلية سؤال النقل كليًا.',
          },
          {
            q: 'هل Qwen آمن للاستخدام وفق GDPR؟',
            a: 'يتوقف ذلك على طريقة تشغيله. فأوزان Qwen المفتوحة (مثل Qwen3.8-27B بترخيص Apache 2.0) المشغّلة على أجهزتك لا ترسل أي بيانات إلى Alibaba، فلا يوجد نقل بموجب المادة 44 ويطابق ملف المخاطر ملف Llama. أما واجهة Alibaba Cloud المستضافة فمختلفة: إذ سترسل prompts إلى مزوّد خارج الاتحاد الأوروبي، مما يستلزم تقييم نقل مستقلًا وDPA وفحصًا للمنطقة. وتحقق من الترخيص في بطاقة النموذج، لأن الشروط تختلف داخل عائلة Qwen.',
          },
          {
            q: 'هل يمكنني استخدام Llama 4 Scout بديلًا مباشرًا لـ Claude؟',
            a: 'من حيث الامتثال لـ GDPR: نعم من حيث المبدأ. فـ Llama 4 Scout مفتوح الأوزان ويمكن تشغيله محليًا، فيتجنب النقل بموجب المادة 44. أما من حيث الأجهزة والقدرات: ليس كبديل مباشر. فـ Scout نموذج مزيج خبراء (mixture-of-experts) بـ 109 مليار معامل يحتاج نحو 55–60 GB عند 4-bit، أي وحدة GPU واحدة بسعة 80 GB كحد أدنى، بينما يناسب Qwen3.8-27B بطاقة بسعة 24 GB عند التكميم. وClaude نموذج احتكاري متقدم وهو عادةً أقوى في الاستدلال شديد التعقيد. اختبر على حمل عملك أولًا؛ ففي الأسئلة والأجوبة والتلخيص ومهام الكود الروتينية غالبًا ما تكون النماذج المحلية منافسة.',
          },
          {
            q: 'ماذا لو سجّلت prompts محليًا لأغراض التدقيق؟',
            a: 'يُوصى بالتسجيل لاستيفاء المادة 30. سجّل ما يلي: اسم النموذج، الطابع الزمني للجلسة، عدد tokens الإدخال، عدد tokens الإخراج، وتجزئة SHA-256 لـ prompt والاستجابة. لا تسجّل النص الخام لـ prompts التي تحتوي على بيانات شخصية. يستوفي التسجيل القائم على التجزئة المادة 30 (سجلات المعالجة) والمادة 32 (الأمان) دون انتهاك المادة 5(1)(هـ) (تحديد التخزين). خزّن السجلات في نظام مشفّر بضوابط وصول (مثل خادم تجميع سجلات بوصول قائم على الأدوار). احتفظ بالسجلات لمدة 3 سنوات وفق معيار DPA.',
          },
          {
            q: 'هل تشغيل LLM داخل المقر أغلى من استخدام واجهات API السحابية؟',
            a: 'مقدمًا: نعم. تكلف الأجهزة (RTX 4070 Ti) نحو 500–1000 دولار. شهريًا: لا. كهرباء المقر نحو 5–10 دولارات شهريًا. وتكلف واجهات API السحابية 0.001–0.01 دولار لكل 1K tokens، وهو ما يتجاوز 100 دولار للاستخدام الكثيف (>1M tokens/شهر). نقطة التعادل عادةً 6–12 شهرًا للاستخدام المتوسط-المرتفع. إذا شغّلت <100K tokens/شهر، تكون واجهات API السحابية أرخص. وإذا شغّلت >1M tokens/شهر، يكون المقر أرخص. والامتثال لـ GDPR حجة أعمال إضافية: يلغي المقر التكلفة القانونية لـ SCC/TIA.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[إعداد DeepSeek المحلي لخصوصية البيانات 2026](/ar/local-llms/deepseek-local-china-data-privacy-2026) -- إعداد DeepSeek المحلي لخصوصية البيانات',
          '[دليل إعداد Qwen المحلي GDPR 2026](/ar/local-llms/qwen-local-gdpr-setup-guide-2026) -- دليل إعداد Qwen المحلي GDPR',
          '[امتثال المؤسسات مع نماذج LLM المحلية](/ar/local-llms/enterprise-compliance-local-llms) -- امتثال المؤسسات مع نماذج LLM المحلية',
          '[خيارات GPU السحابي GDPR الأوروبي 2026](/ar/local-llms/eu-cloud-gpu-gdpr-2026) -- خيارات GPU السحابي GDPR الأوروبي',
          '[قائمة تحقق الأمان والخصوصية لنماذج LLM المحلية](/ar/local-llms/local-llm-security-privacy-checklist) -- قائمة تحقق الأمان والخصوصية',
          '[إقامة البيانات والذكاء الاصطناعي السيادي: نشر LLM المؤسسي وفق اللائحة العامة](/ar/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- سؤال عمارة النشر الذي يعلو اختيارات النموذج المقارنة هنا',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'تتحدد مخاطر GDPR لنماذج LLM بإقامة البيانات والولاية القضائية لبيانات التدريب وسياسات الاحتفاظ في شروط الخدمة ومتطلبات SCC/TIA.',
        plainTerms: 'يهم اختيارك لنموذج LLM في GDPR بسبب مكان تخزين بياناتك، وأي دولة تملك النموذج، ومدة احتفاظ المزوّد ببياناتك، وما إذا كنت تحتاج عقودًا قانونية لنقل البيانات عبر الحدود.',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مقارنة مخاطر GDPR: Qwen مقابل DeepSeek مقابل Llama مقابل Claude 2026',
      description: 'مقارنة نماذج LLM متوافقة مع GDPR: مصفوفة مخاطر لـ DeepSeek و Qwen و Llama و Claude.',
      url: 'https://www.promptquorum.com/ar/local-llms/gdpr-llm-risk-comparison-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-22',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Privacy & Security',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-de.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'DSGVO-Risikovergleich: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'DSGVO-Risikomatrix 2026: Qwen, DeepSeek, Llama, Claude',
    metaDescription: 'DSGVO-LLM-Vergleich: DeepSeek API (höchstes Risiko), Qwen lokal (niedrigstes), Llama lokal, Claude/GPT API. Risikomatrix nach Speicherung und ToS.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8 min Lesedauer',
    educationalLevel: 'Advanced',
    audience: 'CISOs, Beschaffungsteams und Compliance-Beauftragte, die zwischen proprietären und offenen LLMs wählen',
    primaryTerm: 'DSGVO-Risikovergleich LLM-Modelle',
    leadAnswerBlock: '**Die gehostete DeepSeek API birgt unter den hier verglichenen Optionen das höchste DSGVO-Risiko: Die Daten werden auf dem chinesischen Festland gespeichert, wo das PIPL den Behörden weitreichenden Zugriff einräumt, und für China gibt es keinen EU-Angemessenheitsbeschluss. Lokal betriebene Modelle wie Qwen3.8-27B und Llama 4 Scout tragen das niedrigste Risiko, weil keine personenbezogenen Daten Ihre Infrastruktur verlassen. Die APIs von Claude und OpenAI GPT-5.6 Luna liegen im Mittelfeld: Sie benötigen einen gültigen Transfermechanismus (EU-US Data Privacy Framework oder Standardvertragsklauseln) und, für strikte EU-Datenhaltung, eine EU-Region-Route wie OpenAIs Projects mit EU-Datenresidenz oder Claude über Amazon Bedrock bzw. Google Vertex AI in EU-Regionen.**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'Multi-GPU'],
    toc: [
      { label: 'Vier DSGVO-Risikovektoren für LLMs', anchor: 'risk-vectors' },
      { label: 'Risikomatrix: Modellweiser Vergleich', anchor: 'risk-matrix' },
      { label: 'Modellweises Urteil und empfohlene Verwendung', anchor: 'model-verdicts' },
      { label: 'Empfohlener Stack nach Organisationstyp', anchor: 'org-stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die gehostete DeepSeek API hat das höchste Risiko: Die Daten werden auf dem chinesischen Festland unter dem PIPL gespeichert, für China gibt es keinen EU-Angemessenheitsbeschluss, und die Datenschutzrichtlinie erlaubt die Weitergabe an Behörden, wo gesetzlich vorgeschrieben; Italiens Garante hat sie eingeschränkt, und die Berliner Aufsichtsbehörde hat Apple und Google um Prüfung der App gebeten',
          'Lokal betriebene Modelle wie Qwen3.8-27B (Apache 2.0) und Llama 4 Scout haben das niedrigste Risiko: kein Transfer nach Artikel 44, keine SCC erforderlich, die Daten bleiben auf Ihrer Hardware; Llama 4 Scout benötigt bei 4-Bit etwa 55–60 GB, Qwen3.8-27B passt quantisiert auf eine 24-GB-GPU',
          'Claude API und GPT-5.6 Luna haben ein mittleres Risiko: US-Anbieter benötigen das EU-US Data Privacy Framework oder SCC plus eine Transfer Impact Assessment; Anthropics eigene API bietet nur globale oder US-Inferenz, während OpenAI für neue Projects EU-Datenresidenz anbietet',
          'Empfohlene Stacks: Startups (Claude- oder OpenAI-API mit DPA), datensensible Organisationen (Qwen3.8-27B auf einer 24-GB-GPU), Unternehmen (lokale Modelle auf mehreren GPUs, Air-Gap)',
          'Die Risikomatrix deckt fünf Vektoren ab: Datenspeicherung, Gerichtsbarkeit der Trainingsdaten, ToS-Datenspeicherung, Transfermechanismus-Anforderung und Gesamtrisiko',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Vier DSGVO-Risikovektoren für LLMs',
        content: [
          'Nicht jede LLM-Bereitstellung trägt das gleiche DSGVO-Risiko. Das rechtliche und operative Risiko der Nutzung eines LLMs wird durch vier unabhängige Faktoren bestimmt:',
        ],
        subsections: [
          {
            title: 'Datenspeicherung',
            text: 'Wo die Modellserver physisch stehen. Wenn Server in der EU stehen und der Modellanbieter sich vertraglich verpflichtet, Ihre Daten in der EU zu halten, ist das Risiko der Datenspeicherung gering. Wenn Server außerhalb der EU ohne SVK stehen, ist das Risiko hoch.',
          },
          {
            title: 'Ausbildungsdaten-Gerichtsbarkeit',
            text: 'Welches Landesrecht die Trainingsdaten und das Recht des Anbieters zur Aufbewahrung regelt. US-Datenrecht (CFAA, SCA) erlaubt Zugriff durch Strafverfolgungsbehörden. Chinesisches Datenrecht (PIPL) verlangt weitaus umfassendere staatliche Zugriffsrechte. EU-Daten bleiben unter DSGVO und ePrivacy-Richtlinie geschützt.',
          },
          {
            title: 'ToS-Datenspeicherung',
            text: 'Was sagen die Nutzungsbedingungen darüber, ob Ihre Daten nach Abschluss der Inferenz aufbewahrt werden? OpenAI und DeepSeek haben (in unterschiedlichen Foren) erklärt, dass sie Nutzer-Prompts zur Modellverbesserung oder für gesetzlich vorgeschriebene Offenlegung aufbewahren können. Lokal ausgeführte Qwen- und Llama-Modelle haben keine ToS — Sie kontrollieren die Aufbewahrung.',
          },
          {
            title: 'SVK-/TIA-Anforderung',
            text: 'Jeder Transfer personenbezogener EU-Daten außerhalb der EU erfordert einen Transfermechanismus nach Kapitel V: einen Angemessenheitsbeschluss (etwa das EU-US Data Privacy Framework für zertifizierte US-Unternehmen) oder Standardvertragsklauseln (SCC) plus eine Transfer Impact Assessment (TIA). Das Data Privacy Framework wurde im September 2025 vom Gericht der EU bestätigt, doch die Berufung (Rechtssache C-703/25 P) ist beim Gerichtshof anhängig, sodass SCC die Rückfalloption bleiben. Cloud-APIs benötigen dies; lokale Modelle nicht.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Risikomatrix: Modellweiser Vergleich',
        content: [
          'Die folgende Tabelle fasst das DSGVO-Risikoprofil der einzelnen Bereitstellungsoptionen zusammen. Höhere Werte bedeuten höheres rechtliches und operatives Risiko.',
        ],
        columns: ['Bereitstellung', 'Datenspeicherung', 'Ausbildungsdaten-Gerichtsbarkeit', 'ToS-Speicherrisiko', 'SVK/TIA erforderlich?', 'Gesamtrisiko'],
        rows: [
          { Bereitstellung: 'DeepSeek API', Datenspeicherung: 'China (PRC-Server)', 'Ausbildungsdaten-Gerichtsbarkeit': 'China (PIPL)', 'ToS-Speicherrisiko': 'Richtlinie erlaubt Weitergabe an Behörden', 'SVK/TIA erforderlich?': 'Keine Angemessenheit; SCC + TIA kaum tragfähig', Gesamtrisiko: '🔴 Höchstes' },
          { Bereitstellung: 'Claude API (Erstanbieter)', Datenspeicherung: 'USA oder global; keine reine EU-Option', 'Ausbildungsdaten-Gerichtsbarkeit': 'USA', 'ToS-Speicherrisiko': 'Laut Anthropic-DPA; Speicherdauer prüfen', 'SVK/TIA erforderlich?': 'DPF oder SCC (im DPA) + TIA', Gesamtrisiko: '🟠 Mittel-Hoch' },
          { Bereitstellung: 'Claude über Bedrock / Vertex AI EU', Datenspeicherung: 'EU-Region (per Endpunkt festgelegt)', 'Ausbildungsdaten-Gerichtsbarkeit': 'US-Anbieter, EU-Verarbeitung', 'ToS-Speicherrisiko': 'Bedingungen des Cloud-Anbieters gelten', 'SVK/TIA erforderlich?': 'Vertragsabhängig; TIA prüfen', Gesamtrisiko: '🟡 Mittel' },
          { Bereitstellung: 'GPT-5.6 Luna API (Standard)', Datenspeicherung: 'USA (Standard-Projekt)', 'Ausbildungsdaten-Gerichtsbarkeit': 'USA', 'ToS-Speicherrisiko': 'DPA verfügbar; laut API-Bedingungen', 'SVK/TIA erforderlich?': 'DPF oder SCC + TIA', Gesamtrisiko: '🟠 Mittel-Hoch' },
          { Bereitstellung: 'OpenAI API (EU-Projekt)', Datenspeicherung: 'EU, Verarbeitung in der Region', 'Ausbildungsdaten-Gerichtsbarkeit': 'US-Anbieter, EU-Verarbeitung', 'ToS-Speicherrisiko': 'Zero Data Retention in der Region', 'SVK/TIA erforderlich?': 'Reduziert; im DPA bestätigen lassen', Gesamtrisiko: '🟡 Mittel' },
          { Bereitstellung: 'Llama 4 Scout (lokal)', Datenspeicherung: 'Ihre Hardware (LAN)', 'Ausbildungsdaten-Gerichtsbarkeit': 'Offene Gewichte, keine Anbieter-Speicherung', 'ToS-Speicherrisiko': 'Speicherung per lokalen Logs unter Ihrer Kontrolle', 'SVK/TIA erforderlich?': 'Nein', Gesamtrisiko: '🟢 Niedrigstes' },
          { Bereitstellung: 'Qwen3.8-27B (lokal)', Datenspeicherung: 'Ihre Hardware (LAN)', 'Ausbildungsdaten-Gerichtsbarkeit': 'Offene Gewichte (Apache 2.0)', 'ToS-Speicherrisiko': 'Speicherung per lokalen Logs unter Ihrer Kontrolle', 'SVK/TIA erforderlich?': 'Nein', Gesamtrisiko: '🟢 Niedrigstes' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Modellweises Urteil und empfohlene Verwendung',
        content: [
          'Verwenden Sie diesen Abschnitt, um zu verstehen, wann jede Bereitstellung für Ihre DSGVO-Compliance-Position angemessen ist.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — Für DSGVO-Workflows vermeiden',
            text: 'Die gehostete DeepSeek API birgt unter den hier verglichenen Optionen das höchste Risiko, weil: (1) die Datenschutzrichtlinie die Daten auf Servern in der Volksrepublik China verortet, wo das PIPL und verwandte Gesetze den Behörden weitreichenden Zugriff geben; (2) es keinen EU-Angemessenheitsbeschluss für China gibt und SCC nur helfen, wenn eine Transfer Impact Assessment belegen kann, dass das Recht des Ziellands sie nicht untergräbt, was hier sehr schwer nachzuweisen ist; (3) die Richtlinie die Weitergabe an Behörden erlaubt, wo gesetzlich vorgeschrieben. Die Aufsichtsbehörden sind bereits aktiv geworden: Italiens Garante hat 2025 die Verarbeitung der Daten italienischer Nutzer durch DeepSeek eingeschränkt, und die Berliner Datenschutzbeauftragte hat Apple und Google um Prüfung der App gebeten. Enthalten Ihre Prompts personenbezogene Daten von EU-Bewohnern, fehlt für die Nutzung der gehosteten API wahrscheinlich eine gültige Rechtsgrundlage für den Transfer nach Artikel 44. Die offenen Gewichte von DeepSeek tragen lokal betrieben dasselbe niedrige Transferrisiko wie andere lokale Modelle; prüfen Sie die Lizenz des Modells und Ihre eigene Sicherheitsumgebung.',
          },
          {
            title: 'Claude API — Mittleres Risiko, mit Transfermechanismus beherrschbar',
            text: 'Anthropics DPA bezieht SCC ein und benennt Anthropic als Auftragsverarbeiter, sodass die Claude API unter der DSGVO mit einem dokumentierten Transfermechanismus und einer Transfer Impact Assessment genutzt werden kann. Anthropics eigene API bietet nur zwei Inferenz-Regionen, global (Standard) und USA; eine reine EU-Option gibt es nicht, und ruhende Daten im Workspace liegen derzeit ausschließlich in den USA ([Anthropic-Dokumentation zur Datenresidenz](https://platform.claude.com/docs/en/manage-claude/data-residency)). Organisationen, die eine reine EU-Verarbeitung benötigen, können Claude über Amazon Bedrock oder Google Vertex AI mit einer EU-Region nutzen; dort bestimmen der Vertrag des Cloud-Anbieters und die Endpunktwahl die Datenresidenz. Für hochsensible Daten (Gesundheit, Finanzen, Biometrie) bleibt die lokale Bereitstellung die sicherere Option.',
          },
          {
            title: 'GPT-5.6 Luna API — Mittleres Risiko, niedriger mit EU-Projekt',
            text: 'OpenAI bietet einen Data Processing Addendum und für berechtigte API-Kunden europäische Datenresidenz: Ein neues Projekt, das mit Europa als Region angelegt wird, wird in der Region mit Zero Data Retention verarbeitet ([OpenAI-Ankündigung](https://openai.com/index/introducing-data-residency-in-europe/)). Bestehende Projekte lassen sich nicht umstellen, migrieren Sie daher durch Anlegen eines neuen Projekts. Ohne EU-Projekt werden Anfragen standardmäßig in den USA verarbeitet und erfordern das EU-US Data Privacy Framework oder SCC plus eine Transfer Impact Assessment. In beiden Fällen sollten Sie keine Gesundheits-, Finanz-, biometrischen oder genetischen Daten senden, sofern Ihr DPA, Ihre Rechtsgrundlage und Ihre Risikobewertung dies nicht abdecken.',
          },
          {
            title: 'Llama 4 Scout (lokal) — Niedrigstes Risiko, aber aufwendige Hardware',
            text: 'Die Llama-Gewichte sind offen unter Metas Community-Lizenz, die Nutzungsbedingungen enthält, die Sie vor einem kommerziellen Einsatz prüfen sollten. Llama lokal zu betreiben bedeutet: (1) kein Transfer nach Artikel 44; (2) Sie kontrollieren die gesamte Datenspeicherung; (3) keine SCC oder TIA erforderlich; (4) Datenschutz durch Technikgestaltung nach Artikel 25 lässt sich leichter nachweisen. Llama 4 Scout ist ein Mixture-of-Experts-Modell mit 109 Milliarden Parametern: Die 4-Bit-Gewichte benötigen etwa 55–60 GB, planen Sie daher eine einzelne 80-GB-GPU oder mehr ein, plus zusätzlichen Speicher für langen Kontext. Kleinere offene Modelle passen auf Consumer-Hardware.',
          },
          {
            title: 'Qwen3.8-27B (lokal) — Niedrigstes Risiko, kein Transfer',
            text: 'Qwen3.8-27B ist ein offenes Gewichtsmodell unter Apache 2.0. Lokal betrieben bedeutet das keinen Transfer nach Artikel 44, volle Kontrolle über die Speicherung und keine SCC oder TIA. Quantisiert passt es in der Regel auf eine 24-GB-GPU und ist damit deutlich einfacher bereitzustellen als Llama 4 Scout. Qwen3 14B bleibt eine leichtere Option für Karten mit 12–16 GB. Die Lizenzierung variiert innerhalb der Qwen-Familie (die größten Flaggschiff-Gewichte von Alibaba folgen anderen Bedingungen); prüfen Sie daher die Lizenz auf der Model Card des konkret eingesetzten Modells. Lokal betriebene Qwen-Gewichte sind etwas anderes als die gehostete Alibaba Cloud API, für die eine eigene Transferbewertung nötig ist.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Empfohlener Stack nach Organisationstyp',
        content: [
          'Der richtige LLM-Stack hängt von der Datenempfindlichkeit, dem Budget und der Compliance-Position Ihrer Organisation ab. Nutzen Sie diese Empfehlungen als Ausgangspunkt für Beschaffungsentscheidungen.',
        ],
        subsections: [
          {
            title: 'Frühphasen-Startup (geringer regulatorischer Druck)',
            text: 'Verwenden Sie die Claude- oder OpenAI-API mit dem DPA des Anbieters und bevorzugen Sie ein OpenAI-EU-Projekt oder eine EU-Cloud-Region, wenn Kunden eine EU-Verarbeitung verlangen. Begründung: Beide sind produktionsreif bei geringem Betriebsaufwand, und SCC oder das Data Privacy Framework sind für US-basierte KI-Anbieter Standard. Experimentelle Nutzung kostet typischerweise wenige Dollar pro Monat. Das Risiko ist akzeptabel, solange die Daten gering sensibel sind (anonyme Nutzungsmuster, allgemeine Geschäftslogik). Wachsen Sie in Gesundheitswesen oder Fintech hinein, migrieren Sie zu einem lokalen Modell wie Qwen3.8-27B.',
          },
          {
            title: 'KMU mit Mitarbeiter-/Kundendaten (mittlerer regulatorischer Druck)',
            text: 'Verwenden Sie Qwen3.8-27B (oder Qwen3 14B auf kleineren Karten) lokal. Begründung: Sie verarbeiten personenbezogene Daten (Mitarbeiterliste, Kundenkontaktdaten, Transaktionshistorie), daher beseitigt eine transferfreie Architektur die Transferfrage vollständig. Eine einzelne 24-GB-GPU betreibt Qwen3.8-27B quantisiert; eine 12-GB-GPU betreibt Qwen3 14B mit Q4. Die Hardware ist eine einmalige Investition plus Strom. Die Einrichtung mit Ollama dauert typischerweise unter einer Stunde. Sie benötigen weiterhin eine Rechtsgrundlage, ein Verzeichnis von Verarbeitungstätigkeiten und Sicherheitsmaßnahmen, aber keine SCC, keine TIA und keine DPA-Verhandlung.',
          },
          {
            title: 'Unternehmen (hoher regulatorischer Druck: Gesundheitswesen, Fintech, Recht)',
            text: 'Verwenden Sie eine lokale Multi-GPU-Bereitstellung mit Air-Gap. Begründung: Hochsensible Daten erfordern die stärkstmögliche Architektur. Mehrere GPUs ermöglichen größere offene Gewichtsmodelle wie Llama 4 Scout oder größere Qwen-Varianten mit geringerer Latenz. Air-Gap bedeutet, dass der Inferenz-Cluster keinen ausgehenden Internetzugang hat, wodurch ausgehende Netzverbindungen als Weg entfallen, über den Prompts den Cluster verlassen könnten. Planen Sie Hardware im Wert von mehreren Zehntausend Dollar und ein bis zwei Wochen Infrastrukturarbeit ein. Dies unterstützt Artikel 32 (Sicherheit) und einen Prüfpfad nach Artikel 30 über Zugriffsprotokolle.',
          },
          {
            title: 'Organisation mit bestehender Rechtsvereinbarung (Sonderfall)',
            text: 'Haben Sie bereits einen Data Processing Addendum (DPA) mit Anthropic oder OpenAI, bauen Sie darauf auf. Der Wechsel zu einer lokalen Bereitstellung ist oft teurer als die Erweiterung einer bestehenden Vereinbarung, und ein aktuelles DPA mit SCC oder Data-Privacy-Framework-Abdeckung plus abgeschlossener TIA hält das Risiko beherrschbar. Prüfen Sie dies vor der Entscheidung mit Ihrem Rechtsteam und bewerten Sie die Vereinbarung neu, falls die anhängige Berufung zum Data Privacy Framework die US-Transfergrundlage ändert.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Ist DeepSeek DSGVO-konform, wenn ich es mit SCC verwende?',
            a: 'Sehr unwahrscheinlich. SCC funktionieren nur, wenn eine Transfer Impact Assessment zeigt, dass das Recht des Ziellands sie nicht untergräbt. Für das chinesische Festland gibt es keinen EU-Angemessenheitsbeschluss, das PIPL gibt den Behörden weitreichenden Datenzugriff, und die Datenschutzrichtlinie von DeepSeek erlaubt die Weitergabe an Behörden, wo gesetzlich vorgeschrieben. Die Aufsichtsbehörden sind bereits aktiv geworden: Italiens Garante hat die Verarbeitung der Daten italienischer Nutzer durch DeepSeek eingeschränkt, und die Berliner Datenschutzbeauftragte hat Apple und Google um Prüfung der App gebeten. Verwenden Sie die gehostete DeepSeek API nicht für personenbezogene Daten von EU-Bewohnern. Die offenen Gewichte von DeepSeek lassen sich auf eigener Hardware betreiben, was den Transfer entfallen lässt, prüfen Sie jedoch die Modelllizenz und Ihre Sicherheitsumgebung.',
          },
          {
            q: 'Kann ich Claude-Prompts innerhalb der EU halten?',
            a: 'Nicht über Anthropics eigene API. Deren Einstellung inference_geo bietet nur global oder USA, und ruhende Daten im Workspace liegen ausschließlich in den USA. Eine Verarbeitung in der EU-Region ist möglich, wenn Sie Claude über Amazon Bedrock oder Google Vertex AI mit einer EU-Region nutzen; der Vertrag des Cloud-Anbieters und der Endpunkt bestimmen, wo die Inferenz läuft, lassen Sie sich dies daher von ihm bestätigen. Anthropics DPA bezieht SCC für Transfers ein. Für die stärkste Position ganz ohne Transfer nutzen Sie ein lokales Modell wie Qwen3.8-27B oder Llama 4 Scout.',
          },
          {
            q: 'Welche LLM-API ist DSGVO-konform?',
            a: 'Keine API ist für sich genommen konform: Die DSGVO-Konformität hängt davon ab, wie Sie sie einsetzen. Prüfen Sie vier Dinge: einen unterzeichneten DPA, der den Anbieter zu Ihrem Auftragsverarbeiter macht; einen gültigen Transfermechanismus (EU-US Data Privacy Framework oder SCC plus TIA), falls Daten die EU verlassen; eine klare Einstellung zu Speicherung und Nicht-Training; und eine Rechtsgrundlage für die personenbezogenen Daten, die Sie senden. OpenAI bietet berechtigten Kunden Projects mit EU-Datenresidenz und einen DPA; Anthropic bietet einen DPA mit SCC, wobei EU-Verarbeitung über die Regionen von Cloud-Anbietern möglich ist. Die gehostete DeepSeek API ist am schwersten zu rechtfertigen. Für sensible Daten umgehen lokale Modelle die Transferfrage vollständig.',
          },
          {
            q: 'Ist Qwen unter der DSGVO sicher nutzbar?',
            a: 'Das hängt davon ab, wie Sie es betreiben. Qwen-Gewichte (zum Beispiel Qwen3.8-27B unter Apache 2.0), die auf eigener Hardware laufen, senden keine Daten an Alibaba; es gibt also keinen Transfer nach Artikel 44, und das Risikoprofil entspricht dem von Llama. Die gehostete Alibaba Cloud API ist etwas anderes: Sie würden Prompts an einen Anbieter außerhalb der EU senden, was eine eigene Transferbewertung, einen DPA und eine Regionsprüfung erfordert. Prüfen Sie die Lizenz auf der Model Card, da die Bedingungen innerhalb der Qwen-Familie variieren.',
          },
          {
            q: 'Kann ich Llama 4 Scout als direkten Ersatz für Claude verwenden?',
            a: 'Für die DSGVO-Konformität: im Prinzip ja. Llama 4 Scout hat offene Gewichte und lässt sich lokal betreiben, sodass der Transfer nach Artikel 44 entfällt. Bei Hardware und Leistungsfähigkeit: nicht als direkter Ersatz. Scout ist ein Mixture-of-Experts-Modell mit 109 Milliarden Parametern, das bei 4-Bit etwa 55–60 GB benötigt, also mindestens eine einzelne 80-GB-GPU, während Qwen3.8-27B quantisiert auf eine 24-GB-Karte passt. Claude ist ein proprietäres Frontier-Modell und bei sehr komplexem Schlussfolgern meist stärker. Testen Sie zuerst mit Ihrem eigenen Workload; für Q&A, Zusammenfassungen und Routine-Code-Aufgaben sind lokale Modelle oft konkurrenzfähig.',
          },
          {
            q: 'Was passiert, wenn ich meine Prompts lokal für Auditzwecke protokolliere?',
            a: 'Protokollierung wird für Artikel-30-Compliance empfohlen. Protokollieren Sie: Modellname, Sitzungs-Zeitstempel, Input-Token-Anzahl, Output-Token-Anzahl und einen SHA-256-Hash des Prompts und der Antwort. Protokollieren Sie NICHT den Rohtexte von Prompts mit personenbezogenen Daten. Hash-basierte Protokollierung erfüllt Artikel 30 (Verarbeitungsverzeichnis) und Artikel 32 (Sicherheit), ohne gegen Artikel 5(1)(e) (Speicherbegrenzung) zu verstoßen.',
          },
          {
            q: 'Ist der Betrieb eines LLM On-Prem teurer als Cloud-APIs?',
            a: 'Anfangs: ja. Hardware (RTX 4070 Ti) kostet ~500–1.000 $. Monatlich: nein. On-Prem-Strom liegt bei ~5–10 $/Monat. Cloud-APIs kosten 0,001–0,01 $ pro 1.000 Token, was bei intensiver Nutzung (>1 Mio. Token/Monat) 100 $ übersteigt. Der Break-even liegt typischerweise bei 6–12 Monaten für mittlere bis starke Nutzung. Bei <100.000 Token/Monat sind Cloud-APIs günstiger. Bei >1 Mio. Token/Monat ist On-Prem günstiger. DSGVO-Konformität ist ein zusätzlicher Business Case: On-Prem bedeutet null SVK-/TIA-Rechtskosten.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[DeepSeek lokal für Datenschutz 2026](/de/local-llms/deepseek-local-china-data-privacy-2026) -- DeepSeek lokal für Datenschutz',
          '[Qwen GDPR lokales Setup Guide 2026](/de/local-llms/qwen-local-gdpr-setup-guide-2026) -- Qwen GDPR lokales Setup Guide',
          '[Enterprise Compliance mit lokalen LLMs](/de/local-llms/enterprise-compliance-local-llms) -- Enterprise Compliance mit lokalen LLMs',
          '[EU GDPR Cloud-GPU-Optionen 2026](/de/local-llms/eu-cloud-gpu-gdpr-2026) -- EU GDPR Cloud-GPU-Optionen',
          '[Lokale LLM Sicherheits- und Datenschutz-Checkliste](/de/local-llms/local-llm-security-privacy-checklist) -- Lokale LLM Sicherheits- und Datenschutz-Checkliste',
          '[Datenresidenz & souveräne KI: DSGVO-konforme Enterprise-LLM-Bereitstellung](/de/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- die Bereitstellungsarchitektur-Frage über der hier verglichenen Modellwahl',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'Das DSGVO-Risiko für LLMs wird durch Datenspeicherung, Ausbildungsdaten-Gerichtsbarkeit, ToS-Speicherrichtlinien und SVK/TIA-Anforderungen bestimmt.',
        plainTerms: 'Ihre LLM-Wahl ist für die DSGVO wichtig, weil sie bestimmt, wo Ihre Daten liegen, welchem Land das Modell gehört, wie lange der Anbieter Ihre Daten behält, und ob Sie rechtliche Verträge benötigen, um Daten über Grenzen hinweg zu bewegen.',
      },
    ],
  },
  fr: {
    designSkin: 'hub',
    theme: 'Privacy & Security',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-fr.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'Comparaison des risques RGPD : Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'Matrice de risque RGPD : comparaison LLM Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'Comparaison LLM conforme au RGPD : DeepSeek API (risque le plus élevé), Qwen local (risque le plus faible), Llama local, API Claude/GPT (risque moyen). Matrice de risque par résidence des données, juridiction et ToS.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8 min de lecture',
    educationalLevel: 'Advanced',
    audience: 'RSSI, équipes d\'achat et responsables de conformité choisissant entre LLM propriétaires et à poids ouverts',
    primaryTerm: 'comparaison des risques RGPD modèles LLM',
    leadAnswerBlock: '**L\'API hébergée de DeepSeek présente le risque RGPD le plus élevé des options comparées ici : ses données sont stockées en Chine continentale, où la PIPL donne aux autorités un large accès, et l\'UE n\'a pas de décision d\'adéquation pour la Chine. Qwen3.8-27B et Llama 4 Scout exécutés en local portent le risque le plus faible, car aucune donnée personnelle ne quitte votre infrastructure. Les API Claude et OpenAI GPT-5.6 Luna se situent entre les deux : elles exigent un mécanisme de transfert valide (cadre de protection des données UE-États-Unis, DPF, ou clauses contractuelles types, CCT) et, pour une résidence stricte dans l\'UE, une voie en région UE comme les Projets OpenAI à résidence des données européenne, ou Claude via les régions UE d\'Amazon Bedrock ou de Google Vertex AI.**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 Go VRAM', '24 Go VRAM', 'multi-GPU'],
    toc: [
      { label: 'Quatre vecteurs de risque RGPD pour les LLM', anchor: 'risk-vectors' },
      { label: 'Matrice de risque : comparaison modèle par modèle', anchor: 'risk-matrix' },
      { label: 'Verdict par modèle et utilisation recommandée', anchor: 'model-verdicts' },
      { label: 'Pile recommandée par type d\'organisation', anchor: 'org-stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'L\'API hébergée de DeepSeek est la plus risquée : les données sont stockées en Chine continentale sous la PIPL, l\'UE n\'a pas de décision d\'adéquation pour la Chine, et la politique de confidentialité autorise la divulgation aux autorités lorsque la loi l\'exige ; l\'autorité italienne (Garante) l\'a restreinte et l\'autorité de Berlin a demandé à Apple et Google d\'examiner l\'application',
          'Qwen3.8-27B (Apache 2.0) et Llama 4 Scout exécutés en local sont les moins risqués : pas de transfert au sens de l\'article 44, pas de CCT requises, les données restent sur votre matériel ; Llama 4 Scout demande environ 55–60 Go en 4 bits, Qwen3.8-27B tient sur un GPU de 24 Go une fois quantifié',
          'L\'API Claude et GPT-5.6 Luna présentent un risque moyen : les fournisseurs américains exigent le DPF ou des CCT, plus une évaluation de l\'impact du transfert (TIA) ; l\'API propre d\'Anthropic n\'offre qu\'une inférence globale ou aux États-Unis, tandis qu\'OpenAI propose la résidence des données dans l\'UE pour les nouveaux Projets',
          'Piles recommandées : startups (API Claude ou OpenAI sous DPA), organisations sensibles aux données (Qwen3.8-27B sur un GPU de 24 Go), entreprises (modèles locaux multi-GPU, air-gap)',
          'La matrice de risque couvre cinq vecteurs : résidence des données, juridiction des données d\'entraînement, conservation des données selon les ToS, exigence de mécanisme de transfert et niveau de risque global',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Quatre vecteurs de risque RGPD pour les LLM',
        content: [
          'Tous les déploiements de LLM ne portent pas le même risque RGPD. Le risque juridique et opérationnel de l\'utilisation d\'un LLM est déterminé par quatre facteurs indépendants :',
        ],
        subsections: [
          {
            title: 'Résidence des données',
            text: 'Où se trouvent physiquement les serveurs du modèle. Si les serveurs sont dans l\'UE et que le fournisseur s\'engage contractuellement à garder vos données dans l\'UE, le risque de résidence des données est faible. Si les serveurs sont hors UE sans CCT, le risque est élevé.',
          },
          {
            title: 'Juridiction des données d\'entraînement',
            text: 'Quel droit national régit les données d\'entraînement et le droit du fournisseur de les conserver. Le droit américain (CFAA, SCA) permet l\'accès aux forces de l\'ordre. Le droit chinois (PIPL) impose des droits d\'accès étatique beaucoup plus larges. Les données UE restent protégées sous le RGPD et la directive ePrivacy.',
          },
          {
            title: 'Conservation des données ToS',
            text: 'Que disent les conditions d\'utilisation sur la conservation de vos données après la fin de l\'inférence ? OpenAI et DeepSeek ont déclaré (dans différents forums) pouvoir conserver les prompts utilisateur pour l\'amélioration du modèle ou une divulgation légalement obligatoire. Qwen et Llama exécutés localement n\'ont pas de ToS — vous contrôlez la conservation.',
          },
          {
            title: 'Exigence CCT / TIA',
            text: 'Tout transfert de données personnelles de l\'UE vers l\'extérieur de l\'UE exige un mécanisme de transfert du chapitre V : une décision d\'adéquation (comme le cadre de protection des données UE-États-Unis, DPF, pour les entreprises américaines certifiées) ou des clauses contractuelles types (CCT) plus une évaluation de l\'impact du transfert (TIA). Le DPF a été confirmé par le Tribunal de l\'UE en septembre 2025, mais l\'appel (affaire C-703/25 P) est pendant devant la Cour de justice ; les CCT restent donc la solution de repli. Les API cloud l\'exigent ; les modèles locaux non.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Matrice de risque : comparaison modèle par modèle',
        content: [
          'Le tableau ci-dessous résume le profil de risque RGPD de chaque option de déploiement. Des scores plus élevés indiquent un risque juridique et opérationnel plus élevé.',
        ],
        columns: ['Déploiement', 'Résidence des données', 'Juridiction des données d\'entraînement', 'Risque de conservation ToS', 'CCT/TIA requis ?', 'Niveau de risque global'],
        rows: [
          { Déploiement: 'API DeepSeek', 'Résidence des données': 'Chine (serveurs en RPC)', 'Juridiction des données d\'entraînement': 'Chine (PIPL)', 'Risque de conservation ToS': 'Politique autorisant le partage avec les autorités', 'CCT/TIA requis ?': 'Pas d\'adéquation ; CCT + TIA peu probants', 'Niveau de risque global': '🔴 Le plus élevé' },
          { Déploiement: 'API Claude (directe)', 'Résidence des données': 'US ou global ; pas d\'option UE seule', 'Juridiction des données d\'entraînement': 'US', 'Risque de conservation ToS': 'Selon le DPA d\'Anthropic ; vérifier la conservation', 'CCT/TIA requis ?': 'DPF ou CCT (dans le DPA) + TIA', 'Niveau de risque global': '🟠 Moyen-Élevé' },
          { Déploiement: 'Claude sur Bedrock / Vertex AI UE', 'Résidence des données': 'Région UE (définie par le endpoint)', 'Juridiction des données d\'entraînement': 'Fournisseur US, traitement UE', 'Risque de conservation ToS': 'Conditions du fournisseur cloud applicables', 'CCT/TIA requis ?': 'Selon le contrat ; évaluer la TIA', 'Niveau de risque global': '🟡 Moyen' },
          { Déploiement: 'API GPT-5.6 Luna (défaut)', 'Résidence des données': 'US (projet par défaut)', 'Juridiction des données d\'entraînement': 'US', 'Risque de conservation ToS': 'DPA disponible ; selon les conditions de l\'API', 'CCT/TIA requis ?': 'DPF ou CCT + TIA', 'Niveau de risque global': '🟠 Moyen-Élevé' },
          { Déploiement: 'API OpenAI (Projet UE)', 'Résidence des données': 'UE, traitement dans la région', 'Juridiction des données d\'entraînement': 'Fournisseur US, traitement UE', 'Risque de conservation ToS': 'Zéro conservation des données dans la région', 'CCT/TIA requis ?': 'Réduite ; à confirmer dans votre DPA', 'Niveau de risque global': '🟡 Moyen' },
          { Déploiement: 'Llama 4 Scout (local)', 'Résidence des données': 'Votre matériel (LAN)', 'Juridiction des données d\'entraînement': 'Poids ouverts, pas de conservation fournisseur', 'Risque de conservation ToS': 'Vous contrôlez la conservation via les logs locaux', 'CCT/TIA requis ?': 'Non', 'Niveau de risque global': '🟢 Le plus faible' },
          { Déploiement: 'Qwen3.8-27B (local)', 'Résidence des données': 'Votre matériel (LAN)', 'Juridiction des données d\'entraînement': 'Poids ouverts (Apache 2.0)', 'Risque de conservation ToS': 'Vous contrôlez la conservation via les logs locaux', 'CCT/TIA requis ?': 'Non', 'Niveau de risque global': '🟢 Le plus faible' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Verdict par modèle et utilisation recommandée',
        content: [
          'Utilisez cette section pour comprendre quand chaque déploiement est approprié pour votre posture de conformité RGPD.',
        ],
        subsections: [
          {
            title: 'API DeepSeek — À éviter pour les workflows RGPD',
            text: 'L\'API hébergée de DeepSeek présente le risque le plus élevé des options comparées ici car : (1) sa politique de confidentialité place les données sur des serveurs en République populaire de Chine, où la PIPL et les lois connexes donnent aux autorités un large accès ; (2) l\'UE n\'a pas de décision d\'adéquation pour la Chine, et les CCT ne sont utiles que si une évaluation de l\'impact du transfert (TIA) peut démontrer que le droit du pays de destination ne les compromet pas, ce qui est très difficile à établir ici ; (3) la politique autorise la divulgation aux autorités lorsque la loi l\'exige. Les régulateurs ont agi : l\'autorité italienne (Garante) a restreint en 2025 le traitement des données des utilisateurs italiens par DeepSeek, et l\'autorité berlinoise de protection des données a demandé à Apple et Google d\'examiner l\'application. Si vos prompts contiennent des données personnelles de résidents de l\'UE, l\'utilisation de l\'API hébergée ne dispose probablement pas d\'une base de transfert valide au sens de l\'article 44. Les poids ouverts de DeepSeek exécutés en local portent le même faible risque de transfert que les autres modèles locaux ; vérifiez la licence du modèle et votre propre configuration de sécurité.',
          },
          {
            title: 'API Claude — Risque moyen, gérable avec un mécanisme de transfert',
            text: 'Le DPA d\'Anthropic intègre des CCT et désigne Anthropic comme sous-traitant, de sorte que l\'API Claude peut être utilisée sous le RGPD avec un mécanisme de transfert documenté et une évaluation de l\'impact du transfert (TIA). L\'API directe d\'Anthropic ne propose que deux zones d\'inférence, globale (par défaut) et US ; il n\'existe pas d\'option UE seule, et les données de l\'espace de travail au repos sont actuellement exclusivement aux États-Unis ([documentation d\'Anthropic sur la résidence des données](https://platform.claude.com/docs/en/manage-claude/data-residency)). Les organisations qui ont besoin d\'un traitement exclusivement dans l\'UE peuvent utiliser Claude via Amazon Bedrock ou Google Vertex AI avec une région UE, où le contrat du fournisseur cloud et le choix du endpoint déterminent la résidence. Pour les données très sensibles (santé, finance, biométrie), le déploiement local reste l\'option la plus sûre.',
          },
          {
            title: 'API GPT-5.6 Luna — Risque moyen, réduit avec un Projet UE',
            text: 'OpenAI propose un addendum de traitement des données (DPA) et, pour les clients API éligibles, la résidence des données européenne : un nouveau Projet créé avec l\'Europe comme région est traité dans la région, avec zéro conservation des données ([annonce d\'OpenAI](https://openai.com/index/introducing-data-residency-in-europe/)). Les Projets existants ne peuvent pas être convertis ; il faut donc migrer en créant un nouveau Projet. Sans Projet UE, les requêtes sont traitées par défaut aux États-Unis et exigent le DPF ou des CCT, plus une évaluation de l\'impact du transfert (TIA). Dans les deux cas, évitez d\'envoyer des données de santé, financières, biométriques ou génétiques, sauf si votre DPA, votre base légale et votre analyse de risque les couvrent.',
          },
          {
            title: 'Llama 4 Scout (local) — Risque le plus faible, mais matériel lourd',
            text: 'Les poids Llama sont ouverts sous la licence communautaire de Meta, qui comporte des conditions d\'utilisation à vérifier avant tout déploiement commercial. Exécuter Llama en local signifie : (1) aucun transfert au sens de l\'article 44 ; (2) vous contrôlez toute la conservation des données ; (3) ni CCT ni TIA requises ; (4) la protection des données dès la conception (article 25) est plus facile à démontrer. Llama 4 Scout est un modèle à mélange d\'experts de 109 milliards de paramètres : ses poids en 4 bits demandent environ 55–60 Go, prévoyez donc un seul GPU de 80 Go ou plus, avec de la mémoire supplémentaire pour le contexte long. Les modèles ouverts plus petits tiennent sur du matériel grand public.',
          },
          {
            title: 'Qwen3.8-27B (local) — Risque le plus faible, aucun transfert',
            text: 'Qwen3.8-27B est un modèle à poids ouverts publié sous Apache 2.0. L\'exécuter en local signifie aucun transfert au sens de l\'article 44, un contrôle total de la conservation, et ni CCT ni TIA. Une fois quantifié, il tient généralement sur un GPU de 24 Go, ce qui le rend bien plus facile à déployer que Llama 4 Scout. Qwen3 14B reste une option plus légère pour les cartes de 12–16 Go. Les licences varient au sein de la famille Qwen (les poids phares les plus volumineux d\'Alibaba relèvent d\'autres conditions) : confirmez donc la licence sur la fiche du modèle exact que vous déployez. Les poids Qwen exécutés en local sont différents de l\'API hébergée d\'Alibaba Cloud, qui fait l\'objet d\'une évaluation de transfert distincte.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Pile recommandée par type d\'organisation',
        content: [
          'La bonne pile LLM dépend de la sensibilité des données, du budget et de la posture de conformité de votre organisation. Utilisez ces recommandations comme point de départ pour vos décisions d\'achat.',
        ],
        subsections: [
          {
            title: 'Startup en phase précoce (faible pression réglementaire)',
            text: 'Utilisez l\'API Claude ou OpenAI sous le DPA du fournisseur, et privilégiez un Projet UE OpenAI ou une région cloud UE si vos clients demandent un traitement dans l\'UE. Justification : les deux sont prêtes pour la production avec une faible charge opérationnelle, et les CCT ou le DPF sont la norme pour les fournisseurs d\'IA basés aux États-Unis. Un usage expérimental coûte typiquement quelques dollars par mois. Le risque est acceptable tant que les données sont peu sensibles (modèles d\'utilisation anonymes, logique métier générique). Si vous évoluez vers la santé ou la fintech, migrez vers un modèle local comme Qwen3.8-27B.',
          },
          {
            title: 'PME avec données employés/clients (pression réglementaire moyenne)',
            text: 'Utilisez Qwen3.8-27B (ou Qwen3 14B sur des cartes plus modestes) en local. Justification : vous traitez des données personnelles (registre des employés, coordonnées clients, historique des transactions), donc une architecture sans transfert supprime entièrement la question du transfert. Un seul GPU de 24 Go exécute Qwen3.8-27B quantifié ; un GPU de 12 Go exécute Qwen3 14B en Q4. Le matériel est un coût unique, plus l\'électricité. L\'installation avec Ollama prend typiquement moins d\'une heure. Vous avez toujours besoin d\'une base légale, d\'un registre des traitements et de mesures de sécurité, mais ni CCT, ni TIA, ni négociation de DPA avec un fournisseur.',
          },
          {
            title: 'Entreprise (forte pression réglementaire : santé, fintech, droit)',
            text: 'Utilisez un déploiement local multi-GPU avec air-gap. Justification : les données très sensibles exigent l\'architecture la plus solide. Plusieurs GPU permettent d\'exécuter des modèles à poids ouverts plus grands, comme Llama 4 Scout ou des variantes Qwen plus volumineuses, avec une latence plus faible. L\'air-gap signifie que le cluster d\'inférence n\'a aucun accès Internet sortant, ce qui supprime les connexions réseau sortantes comme voie par laquelle les prompts pourraient quitter le cluster. Prévoyez un budget de plusieurs dizaines de milliers de dollars de matériel et une à deux semaines de travail d\'infrastructure. Cela soutient l\'article 32 (sécurité) et une piste d\'audit au titre de l\'article 30 grâce aux journaux d\'accès.',
          },
          {
            title: 'Organisation avec accord juridique existant (cas particulier)',
            text: 'Si vous avez déjà un addendum de traitement des données (DPA) avec Anthropic ou OpenAI, appuyez-vous dessus. Passer au déploiement local est souvent plus coûteux qu\'étendre un accord existant, et un DPA en vigueur avec CCT ou couverture DPF, plus une TIA réalisée, maintient le risque gérable. Vérifiez avec votre équipe juridique avant de décider, et réexaminez l\'accord si l\'appel en cours sur le DPF modifie la base de transfert vers les États-Unis.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'DeepSeek est-il conforme au RGPD si je l\'utilise avec des CCT ?',
            a: 'Très peu probable. Les CCT ne fonctionnent que si une évaluation de l\'impact du transfert (TIA) montre que le droit du pays de destination ne les compromet pas. Pour la Chine continentale, il n\'existe pas de décision d\'adéquation de l\'UE, la PIPL donne aux autorités un large accès aux données, et la politique de confidentialité de DeepSeek autorise la divulgation aux autorités lorsque la loi l\'exige. Les régulateurs ont déjà agi : l\'autorité italienne (Garante) a restreint le traitement des données des utilisateurs italiens par DeepSeek, et l\'autorité berlinoise de protection des données a demandé à Apple et Google d\'examiner l\'application. Pour les données personnelles de résidents de l\'UE, n\'utilisez pas l\'API hébergée de DeepSeek. Les poids ouverts de DeepSeek peuvent être exécutés sur votre propre matériel, ce qui supprime le transfert, mais vérifiez la licence du modèle et votre configuration de sécurité.',
          },
          {
            q: 'Puis-je garder mes prompts Claude dans l\'UE ?',
            a: 'Pas via l\'API propre d\'Anthropic. Son paramètre inference_geo ne propose que global ou US, et les données de l\'espace de travail au repos sont exclusivement aux États-Unis. Un traitement en région UE est possible en utilisant Claude via Amazon Bedrock ou Google Vertex AI avec une région UE ; le contrat du fournisseur cloud et le endpoint déterminent où l\'inférence s\'exécute, confirmez-le donc auprès d\'eux. Le DPA d\'Anthropic intègre des CCT pour les transferts. Pour la position la plus solide, sans aucun transfert, utilisez un modèle local comme Qwen3.8-27B ou Llama 4 Scout.',
          },
          {
            q: 'Quelle API de LLM est conforme au RGPD ?',
            a: 'Aucune API n\'est conforme en soi : la conformité RGPD dépend de la façon dont vous l\'utilisez. Vérifiez quatre points : un DPA signé qui fait du fournisseur votre sous-traitant, un mécanisme de transfert valide (DPF ou CCT plus TIA) si les données quittent l\'UE, un paramétrage clair de conservation et de non-entraînement, et une base légale pour les données personnelles que vous envoyez. OpenAI propose des Projets à résidence des données dans l\'UE pour les clients éligibles ainsi qu\'un DPA ; Anthropic propose un DPA avec CCT, et un traitement dans l\'UE est disponible via les régions des fournisseurs cloud. L\'API hébergée de DeepSeek est la plus difficile à justifier. Pour les données sensibles, les modèles locaux évitent entièrement la question du transfert.',
          },
          {
            q: 'Qwen est-il sûr à utiliser sous le RGPD ?',
            a: 'Cela dépend de la façon dont vous l\'exécutez. Les poids ouverts de Qwen (par exemple Qwen3.8-27B sous Apache 2.0) exécutés sur votre propre matériel n\'envoient aucune donnée à Alibaba : il n\'y a donc pas de transfert au sens de l\'article 44 et le profil de risque est le même que pour Llama. L\'API hébergée d\'Alibaba Cloud est différente : vous enverriez des prompts à un fournisseur situé hors de l\'UE, ce qui exige sa propre évaluation de transfert, un DPA et une vérification de la région. Vérifiez la licence sur la fiche du modèle, car les conditions diffèrent au sein de la famille Qwen.',
          },
          {
            q: 'Puis-je utiliser Llama 4 Scout comme remplaçant direct de Claude ?',
            a: 'Pour la conformité RGPD : oui, en principe. Llama 4 Scout est à poids ouverts et peut s\'exécuter en local, ce qui évite le transfert de l\'article 44. Pour le matériel et les capacités : pas comme remplaçant direct. Scout est un modèle à mélange d\'experts de 109 milliards de paramètres qui demande environ 55–60 Go en 4 bits, donc un seul GPU de 80 Go au minimum, alors que Qwen3.8-27B tient sur une carte de 24 Go une fois quantifié. Claude est un modèle propriétaire de pointe, généralement plus performant sur les raisonnements très complexes. Testez d\'abord sur votre propre charge de travail ; pour les questions-réponses, le résumé et les tâches de code courantes, les modèles locaux sont souvent compétitifs.',
          },
          {
            q: 'Que se passe-t-il si j\'enregistre mes prompts localement à des fins d\'audit ?',
            a: 'L\'enregistrement est encouragé pour la conformité Article 30. Enregistrez : nom du modèle, horodatage de la session, nombre de jetons d\'entrée, nombre de jetons de sortie et un hash SHA-256 du prompt et de la réponse. N\'enregistrez PAS le texte brut des prompts contenant des données personnelles. L\'enregistrement basé sur le hash satisfait l\'article 30 (registres des traitements) et l\'article 32 (sécurité).',
          },
          {
            q: 'Faire tourner un LLM on-prem coûte-t-il plus cher que les API cloud ?',
            a: 'Au départ : oui. Le matériel (RTX 4070 Ti) coûte ~500–1 000 $. Mensuellement : non. L\'électricité on-prem coûte ~5–10 $/mois. Les API cloud coûtent 0,001–0,01 $ par 1 000 tokens, ce qui pour un usage intensif (>1 M tokens/mois) dépasse 100 $. Le seuil de rentabilité est typiquement de 6 à 12 mois pour un usage moyen à élevé. Si vous utilisez <100 000 tokens/mois, les API cloud sont moins chères. Si vous utilisez >1 M tokens/mois, l\'on-prem est moins cher. La conformité RGPD constitue un argument commercial supplémentaire : l\'on-prem signifie zéro coût juridique CCT/TIA.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures recommandées',
        items: [
          '[Configuration locale DeepSeek pour la confidentialité 2026](/fr/local-llms/deepseek-local-china-data-privacy-2026) -- configuration locale DeepSeek pour la confidentialité',
          '[Guide configuration locale Qwen GDPR 2026](/fr/local-llms/qwen-local-gdpr-setup-guide-2026) -- guide configuration locale Qwen GDPR',
          '[Conformité entreprise avec les LLM locaux](/fr/local-llms/enterprise-compliance-local-llms) -- conformité entreprise avec les LLM locaux',
          '[Options GPU cloud GDPR UE 2026](/fr/local-llms/eu-cloud-gpu-gdpr-2026) -- options GPU cloud GDPR UE',
          '[Liste de contrôle sécurité LLM local](/fr/local-llms/local-llm-security-privacy-checklist) -- liste de contrôle sécurité LLM local',
          '[Résidence des données et IA souveraine : déploiement de LLM d\'entreprise sous RGPD/UE](/fr/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- la question d\'architecture de déploiement qui prime sur les choix de modèles comparés ici',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'Le risque RGPD pour les LLM est déterminé par la résidence des données, la juridiction des données d\'entraînement, les politiques de conservation ToS et les exigences CCT/TIA.',
        plainTerms: 'Votre choix de LLM compte pour le RGPD à cause de l\'endroit où résident vos données, du pays propriétaire du modèle, de la durée pendant laquelle le fournisseur conserve vos données, et de la nécessité ou non de contrats juridiques pour déplacer les données au-delà des frontières.',
      },
    ],
  },
  ja: {
    designSkin: 'hub',
    theme: 'Privacy & Security',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-ja.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'GDPR リスク比較: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR リスク行列: LLM 比較 Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR準拠のLLM比較: DeepSeek API（最高リスク）、Qwen ローカル（最低リスク）、Llama ローカル、Claude/GPT API（中程度リスク）。データ拠点、管轄権、ToS、SCC要件によるリスク行列。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8分間の読取',
    educationalLevel: 'Advanced',
    audience: 'プロプライエタリLLMとオープンウェイトLLMの選択を検討するCISO、調達チーム、コンプライアンス担当者',
    primaryTerm: 'GDPRリスク比較 LLMモデル',
    leadAnswerBlock: '**DeepSeekのホスト型APIは、ここで比較した選択肢の中でGDPRリスクが最も高くなります。データは中国本土に保存され、PIPLにより当局が広範にアクセスでき、EUは中国に対する十分性認定を出していないためです。Qwen3.8-27BとLlama 4 Scoutをローカルで実行する場合は、個人データがインフラの外に出ないため、リスクは最も低くなります。ClaudeとOpenAI GPT-5.6 LunaのAPIは中間に位置し、有効な移転手段（EU-米国データプライバシーフレームワーク、または標準契約条項）が必要です。厳格にEU内で処理したい場合は、OpenAIのEUデータレジデンシー対応Projectや、Amazon BedrockまたはGoogle Vertex AIのEUリージョン経由のClaudeなど、EUリージョンのルートを使います。**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'マルチGPU'],
    toc: [
      { label: 'LLMのためのGDPRリスクの4つのベクトル', anchor: 'risk-vectors' },
      { label: 'リスク行列：モデル別比較', anchor: 'risk-matrix' },
      { label: 'モデル別の判断と推奨される使用法', anchor: 'model-verdicts' },
      { label: '組織タイプ別の推奨スタック', anchor: 'org-stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeekのホスト型APIは最高リスクです。データは中国本土にPIPLの下で保存され、EUの中国に対する十分性認定はなく、プライバシーポリシーは法的に求められた場合の当局への開示を認めています。イタリアのGaranteは処理を制限し、ベルリンの監督当局はAppleとGoogleにアプリの審査を求めました。',
          'ローカル実行のQwen3.8-27B（Apache 2.0）とLlama 4 Scoutは最低リスクです。第44条の移転もSCCも不要で、データは自社ハードウェアにとどまります。Llama 4 Scoutは4ビットで約55〜60 GB必要で、Qwen3.8-27Bは量子化すれば24 GBのGPUに収まります。',
          'Claude APIとGPT-5.6 Lunaは中程度リスクです。米国ベンダーにはEU-米国データプライバシーフレームワークまたはSCCに加え、転送影響評価（TIA）が必要です。Anthropic自身のAPIはグローバルまたは米国での推論のみで、OpenAIは新規ProjectでEUデータレジデンシーを提供しています。',
          '推奨スタック：スタートアップ（DPAを結んだClaudeまたはOpenAI API）、データに敏感な組織（24 GBのGPU 1枚でQwen3.8-27B）、エンタープライズ（マルチGPUのローカルモデル、エアギャップ）',
          'リスク行列は5つのベクトルをカバーしています：データ拠点、トレーニングデータ管轄権、ToSデータ保持、移転手段の要否、総合リスクレベル',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'LLMのためのGDPRリスクの4つのベクトル',
        content: [
          'すべてのLLMデプロイメントが同じGDPRリスクを持つわけではありません。LLM使用の法的・運用的リスクは、4つの独立した要因によって決定されます：',
        ],
        subsections: [
          {
            title: 'データ拠点',
            text: 'モデルサーバーが物理的にどこにあるか。サーバーがEU内にあり、モデル提供者がデータをEU内に保持することを契約上約束している場合、データ拠点のリスクは低くなります。サーバーがSCCなしでEU外にある場合、データ拠点のリスクは高くなります。',
          },
          {
            title: 'トレーニングデータ管轄権',
            text: 'トレーニングデータおよび提供者のデータ保持権をどの国の法律が規律するか。米国データ法（CFAA、SCA）は法執行機関のアクセスを許可します。中国データ法（PIPL）ははるかに広範な国家アクセス権を義務付けています。EUデータはGDPRおよびeプライバシー指令の下で保護され続けます。',
          },
          {
            title: 'ToSデータ保持',
            text: '推論完了後のデータ保持について利用規約は何と述べていますか？OpenAIとDeepSeekは（異なる場で）モデル改善または法的に義務付けられた開示のためにユーザープロンプトを保持する可能性があると述べています。ローカルで実行されるQwenおよびLlamaにはToSがなく、保持を管理するのはあなた自身です。',
          },
          {
            title: 'SCC/TIA要件',
            text: 'EU域外へのEU個人データの移転には、第V章の移転手段が必要です。十分性認定（認証を受けた米国企業向けのEU-米国データプライバシーフレームワークなど）、または標準契約条項（SCC）と転送影響評価（TIA）のいずれかです。データプライバシーフレームワークは2025年9月にEU一般裁判所に支持されましたが、控訴審（事件番号 C-703/25 P）が欧州司法裁判所で係属中のため、SCCが引き続き代替手段となります。クラウドAPIにはこれが必要ですが、ローカルモデルには不要です。',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'リスク行列：モデル別比較',
        content: [
          '下の表は、各デプロイメントオプションのGDPRリスクプロファイルをまとめています。スコアが高いほど法的・運用的リスクが高いことを示します。',
        ],
        columns: ['デプロイメント', 'データ拠点', 'トレーニングデータ管轄権', 'ToS保持リスク', 'SCC/TIA必要？', '総合リスクレベル'],
        rows: [
          { 'デプロイメント': 'DeepSeek API', 'データ拠点': '中国（PRCのサーバー）', 'トレーニングデータ管轄権': '中国（PIPL）', ToS保持リスク: '当局への共有をポリシーが容認', 'SCC/TIA必要？': '十分性なし。SCC+TIAは成立困難', '総合リスクレベル': '🔴 最高' },
          { 'デプロイメント': 'Claude API（自社提供）', 'データ拠点': '米国またはグローバル。EU限定なし', 'トレーニングデータ管轄権': '米国', ToS保持リスク: 'AnthropicのDPAに準拠。保持は要確認', 'SCC/TIA必要？': 'DPFまたはSCC（DPA内）+TIA', '総合リスクレベル': '🟠 中〜高' },
          { 'デプロイメント': 'Claude（Bedrock / Vertex AI EU）', 'データ拠点': 'EUリージョン（エンドポイントで指定）', 'トレーニングデータ管轄権': '米国ベンダー、EU内で処理', ToS保持リスク: 'クラウド事業者の規約が適用', 'SCC/TIA必要？': '契約次第。TIAで評価', '総合リスクレベル': '🟡 中程度' },
          { 'デプロイメント': 'GPT-5.6 Luna API（既定）', 'データ拠点': '米国（既定のProject）', 'トレーニングデータ管轄権': '米国', ToS保持リスク: 'DPAあり。API規約に準拠', 'SCC/TIA必要？': 'DPFまたはSCC+TIA', '総合リスクレベル': '🟠 中〜高' },
          { 'デプロイメント': 'OpenAI API（EU Project）', 'データ拠点': 'EU、リージョン内で処理', 'トレーニングデータ管轄権': '米国ベンダー、EU内で処理', ToS保持リスク: 'リージョン内でデータ保持ゼロ', 'SCC/TIA必要？': '低減。自社のDPAで要確認', '総合リスクレベル': '🟡 中程度' },
          { 'デプロイメント': 'Llama 4 Scout（ローカル）', 'データ拠点': '自社ハードウェア（LAN）', 'トレーニングデータ管轄権': 'オープンウェイト、ベンダー保持なし', ToS保持リスク: 'ローカルログで保持を自己管理', 'SCC/TIA必要？': 'いいえ', '総合リスクレベル': '🟢 最低' },
          { 'デプロイメント': 'Qwen3.8-27B（ローカル）', 'データ拠点': '自社ハードウェア（LAN）', 'トレーニングデータ管轄権': 'オープンウェイト（Apache 2.0）', ToS保持リスク: 'ローカルログで保持を自己管理', 'SCC/TIA必要？': 'いいえ', '総合リスクレベル': '🟢 最低' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'モデル別の判断と推奨される使用法',
        content: [
          'このセクションを使用して、各デプロイメントがGDPRコンプライアンスポジャーに適切である場合を理解してください。',
        ],
        subsections: [
          {
            title: 'DeepSeek API — GDPRワークフローでは避けるべき',
            text: 'DeepSeekのホスト型APIは、ここで比較した選択肢の中で最もリスクが高くなります。理由は次のとおりです。（1）プライバシーポリシー上、データは中華人民共和国内のサーバーに置かれ、PIPLなどの法律により当局が広範にアクセスできる。（2）EUは中国に対する十分性認定を出しておらず、SCCが有効となるのは、移転先の法律がSCCを損なわないことをTIAで示せる場合のみだが、ここではその立証が極めて難しい。（3）ポリシーは法的に求められた場合の当局への開示を認めている。規制当局も動いています。イタリアのGaranteは2025年にDeepSeekによるイタリア国内ユーザーのデータ処理を制限し、ベルリンのデータ保護監督官はAppleとGoogleにアプリの審査を求めました。プロンプトにEU居住者の個人データが含まれる場合、ホスト型APIの利用は第44条に基づく有効な移転根拠を欠く可能性が高くなります。DeepSeekのオープンウェイトをローカルで実行する場合の移転リスクは、他のローカルモデルと同様に低くなりますが、モデルのライセンスと自社のセキュリティ体制は確認してください。',
          },
          {
            title: 'Claude API — 中程度リスク、移転手段で管理可能',
            text: 'AnthropicのDPAはSCCを組み込み、Anthropicを処理者と位置づけているため、文書化した移転手段と転送影響評価があれば、Claude APIはGDPRの下で利用できます。Anthropic自身のAPIが提供する推論地域は、グローバル（既定）と米国の2つだけで、EU限定のオプションはありません。保存時のワークスペースデータも現時点では米国のみです（[Anthropicのデータレジデンシーに関するドキュメント](https://platform.claude.com/docs/en/manage-claude/data-residency)）。EU内のみでの処理が必要な組織は、Amazon BedrockまたはGoogle Vertex AIのEUリージョン経由でClaudeを利用できます。この場合、所在地はクラウド事業者の契約とエンドポイントの選択で決まります。機微性の高いデータ（健康、金融、生体情報）には、ローカルデプロイが引き続きより安全な選択肢です。',
          },
          {
            title: 'GPT-5.6 Luna API — 中程度リスク、EU Projectなら低減',
            text: 'OpenAIはデータ処理付則（DPA）を提供しており、対象のAPI顧客にはヨーロッパのデータレジデンシーも提供しています。リージョンにヨーロッパを指定して作成した新規Projectは、データ保持ゼロでリージョン内で処理されます（[OpenAIの発表](https://openai.com/index/introducing-data-residency-in-europe/)）。既存のProjectは変換できないため、新規Projectを作成して移行します。EU Projectを使わない場合、リクエストは既定で米国で処理され、EU-米国データプライバシーフレームワークまたはSCCに加え、転送影響評価が必要です。いずれの場合も、DPA、法的根拠、リスク評価がカバーしていない限り、健康、金融、生体、遺伝に関するデータの送信は避けてください。',
          },
          {
            title: 'Llama 4 Scout（ローカル）— 最低リスク、ただしハードウェア負荷が大きい',
            text: 'LlamaのウェイトはMetaのコミュニティライセンスの下で公開されており、商用展開の前に確認すべき利用条件があります。Llamaをローカルで実行することは、（1）第44条の移転がない、（2）データ保持をすべて自社で管理できる、（3）SCCもTIAも不要、（4）第25条のデザインによるプライバシーを示しやすい、ということを意味します。Llama 4 Scoutは1,090億パラメータのMixture-of-Expertsモデルで、4ビットのウェイトに約55〜60 GB必要です。そのため80 GBのGPU 1枚以上を想定し、長いコンテキスト用の追加メモリも見込んでください。より小型のオープンモデルであれば、一般消費者向けハードウェアに収まります。',
          },
          {
            title: 'Qwen3.8-27B（ローカル）— 最低リスク、移転なし',
            text: 'Qwen3.8-27BはApache 2.0の下で公開されているオープンウェイトモデルです。ローカルで実行すれば、第44条の移転がなく、保持を完全に自社で管理でき、SCCもTIAも不要です。量子化すれば通常24 GBのGPUに収まるため、Llama 4 Scoutよりはるかに導入しやすくなります。12〜16 GBのカードには、より軽量なQwen3 14Bが引き続き選択肢です。Qwenファミリー内でライセンスは異なり（Alibabaの最大級のフラッグシップウェイトは別の条件）、実際に導入するモデルのモデルカードでライセンスを確認してください。ローカルで実行するQwenのウェイトは、Alibaba Cloudのホスト型APIとは別物であり、後者は別途、移転の評価が必要です。',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: '組織タイプ別の推奨スタック',
        content: [
          '正しいLLMスタックは、組織のデータセンシティビティ、予算、および規制スタンスに依存します。これらの推奨事項を調達判断の出発点として活用してください。',
        ],
        subsections: [
          {
            title: '初期段階のスタートアップ（規制圧力が低い）',
            text: 'ベンダーのDPAを結んだうえでClaudeまたはOpenAIのAPIを使い、顧客がEU内での処理を求める場合はOpenAIのEU ProjectやEUクラウドリージョンを優先してください。理由：どちらも本番運用に耐え、運用負荷が低く、SCCやデータプライバシーフレームワークは米国拠点のAIベンダーでは標準的だからです。実験的な利用なら、費用は通常月額数ドルです。データの機微性が低い（匿名の利用パターン、一般的なビジネスロジック）間は、リスクは許容できます。ヘルスケアやフィンテックに事業を広げる場合は、Qwen3.8-27Bなどのローカルモデルへ移行してください。',
          },
          {
            title: '従業員/顧客データを持つ中小企業（規制圧力が中程度）',
            text: 'Qwen3.8-27B（小型のカードならQwen3 14B）をローカルで使ってください。理由：従業員名簿、顧客の連絡先、取引履歴などの個人データを扱うため、移転ゼロの構成にすれば移転の論点そのものがなくなります。24 GBのGPU 1枚でQwen3.8-27Bの量子化版が動き、12 GBのGPUならQwen3 14BをQ4で動かせます。ハードウェアは一度きりの費用と電気代で済みます。Ollamaなら、セットアップは通常1時間未満です。適法な根拠、処理記録、セキュリティ対策は引き続き必要ですが、SCC、TIA、ベンダーとのDPA交渉は不要です。',
          },
          {
            title: 'エンタープライズ（規制圧力が高い：ヘルスケア、フィンテック、法律）',
            text: 'エアギャップ構成のマルチGPUによるローカルデプロイを使ってください。理由：機微性の高いデータには、最も堅牢な構成が求められます。GPUを複数使えば、Llama 4 Scoutやより大きなQwen系など、大型のオープンウェイトモデルを低遅延で実行できます。エアギャップとは、推論クラスターが外向きのインターネットに接続されないことで、外向きのネットワーク接続というプロンプトの流出経路をなくせます。数万ドル規模のハードウェア費用と、1〜2週間のインフラ作業を見込んでください。これは第32条（セキュリティ）と、アクセスログによる第30条の監査証跡を支えます。',
          },
          {
            title: '既存の法的合意を持つ組織（特殊ケース）',
            text: 'AnthropicまたはOpenAIとのデータ処理付則（DPA）がすでにある場合は、それを基盤にしてください。ローカルデプロイへの切り替えは、既存の合意を拡張するよりコストが高くなることが多く、SCCまたはデータプライバシーフレームワークの対象となる現行のDPAと、完了済みのTIAがあれば、リスクは管理可能です。決定の前に法務チームと確認し、係属中のデータプライバシーフレームワークの控訴審で米国への移転根拠が変わった場合は、取り決めを再確認してください。',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'SCCを使えば、DeepSeekはGDPR準拠ですか？',
            a: 'その可能性は極めて低いです。SCCが機能するのは、移転先の国の法律がSCCを損なわないことをTIAで示せる場合に限られます。中国本土にはEUの十分性認定がなく、PIPLは当局に広範なデータアクセスを認めており、DeepSeekのプライバシーポリシーも法的に求められた場合の当局への開示を認めています。規制当局はすでに動いています。イタリアのGaranteはDeepSeekによるイタリア国内ユーザーのデータ処理を制限し、ベルリンのデータ保護監督官はAppleとGoogleにアプリの審査を求めました。EU居住者の個人データについては、ホスト型のDeepSeek APIを使わないでください。DeepSeekのオープンウェイトは自社ハードウェアで実行でき、その場合は移転がなくなりますが、モデルのライセンスと自社のセキュリティ体制は確認してください。',
          },
          {
            q: 'ClaudeのプロンプトをEU内にとどめられますか？',
            a: 'Anthropic自身のAPIでは不可能です。inference_geoの設定で選べるのはグローバルまたは米国のみで、保存時のワークスペースデータも米国のみです。EUリージョンでの処理は、Amazon BedrockまたはGoogle Vertex AIのEUリージョン経由でClaudeを使えば可能です。推論がどこで動くかはクラウド事業者の契約とエンドポイントで決まるため、事業者に確認してください。AnthropicのDPAは、移転についてSCCを組み込んでいます。移転が一切ない最も強固な構成にするには、Qwen3.8-27BやLlama 4 Scoutなどのローカルモデルを使ってください。',
          },
          {
            q: 'GDPR準拠のLLM APIはどれですか？',
            a: 'それ自体でGDPR準拠となるAPIはありません。準拠は使い方で決まります。確認すべき点は4つです。ベンダーをあなたの処理者とする署名済みのDPA、データがEU外に出る場合の有効な移転手段（EU-米国データプライバシーフレームワーク、またはSCCとTIA）、保持と学習利用なしの明確な設定、そして送信する個人データの適法な根拠です。OpenAIは対象顧客にEUデータレジデンシー対応のProjectとDPAを提供しており、AnthropicはSCCを組み込んだDPAを提供し、EU内での処理はクラウド事業者のリージョン経由で可能です。DeepSeekのホスト型APIは、最も正当化が難しい選択肢です。機微なデータには、移転の論点そのものを避けられるローカルモデルが向いています。',
          },
          {
            q: 'QwenはGDPR上、安全に使えますか？',
            a: '実行方法によります。Qwenのオープンウェイト（たとえばApache 2.0のQwen3.8-27B）を自社ハードウェアで実行する場合、Alibabaにデータは送られないため、第44条の移転はなく、リスクの性質はLlamaと同じです。Alibaba Cloudのホスト型APIは別で、EU外の提供者にプロンプトを送ることになり、独自の移転評価、DPA、リージョンの確認が必要です。ライセンスはQwenファミリー内で条件が異なるため、モデルカードで確認してください。',
          },
          {
            q: 'Llama 4 ScoutはClaudeの代わりにそのまま使えますか？',
            a: 'GDPR準拠の点では、原則として可能です。Llama 4 Scoutはオープンウェイトでローカル実行できるため、第44条の移転を避けられます。ハードウェアと能力の点では、そのまま置き換えられるわけではありません。Scoutは1,090億パラメータのMixture-of-Expertsモデルで、4ビットで約55〜60 GB必要なため、最低でも80 GBのGPU 1枚が要ります。一方、Qwen3.8-27Bは量子化すれば24 GBのカードに収まります。Claudeはプロプライエタリなフロンティアモデルで、非常に複雑な推論では通常より強力です。まず自社のワークロードで試してください。Q&A、要約、日常的なコードタスクでは、ローカルモデルが十分競争力を持つことも多くあります。',
          },
          {
            q: '監査の目的でプロンプトをローカルで記録した場合はどうなりますか？',
            a: '記録は第30条のコンプライアンスのために推奨されます。記録：モデル名、セッションタイムスタンプ、入力トークン数、出力トークン数、およびプロンプトと応答のSHA-256ハッシュ。個人データを含むプロンプトの生のテキストを記録しないでください。ハッシュベースのログは、第30条（処理記録）と第32条（セキュリティ）を満たし、第5条第1項e号（保存制限）に違反しません。',
          },
          {
            q: 'LLMをオンプレミスで運用するのはクラウドAPIより高額ですか？',
            a: '初期費用：はい。ハードウェア（RTX 4070 Ti）は約500〜1,000ドルです。月額：いいえ。オンプレミスの電気代は月額約5〜10ドルです。クラウドAPIは1,000トークンあたり0.001〜0.01ドルで、大量利用（月間100万トークン超）では100ドルを超えます。損益分岐点は中〜大量利用で通常6〜12ヶ月です。月間10万トークン未満であればクラウドAPIの方が安く、月間100万トークン超であればオンプレミスの方が安くなります。GDPR準拠は追加のビジネスケースです：オンプレミスはSCC/TIAの法的コストがゼロを意味します。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[データプライバシーのためのDeepSeekローカル設定2026](/ja/local-llms/deepseek-local-china-data-privacy-2026) -- データプライバシーのためのDeepSeekローカル設定',
          '[Qwen GDPR ローカルセットアップガイド 2026](/ja/local-llms/qwen-local-gdpr-setup-guide-2026) -- Qwen GDPR ローカルセットアップガイド',
          '[ローカルLLMによる企業コンプライアンス](/ja/local-llms/enterprise-compliance-local-llms) -- ローカルLLMによる企業コンプライアンス',
          '[EU GDPR クラウドGPUオプション 2026](/ja/local-llms/eu-cloud-gpu-gdpr-2026) -- EU GDPR クラウドGPUオプション',
          '[ローカルLLMセキュリティ&プライバシーチェックリスト](/ja/local-llms/local-llm-security-privacy-checklist) -- ローカルLLMセキュリティ&プライバシーチェックリスト',
          '[データレジデンシーと主権AI:EU/GDPR企業向けLLM導入ガイド](/ja/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- ここで比較したモデル選択の上位にある導入アーキテクチャの論点',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'LLMのGDPRリスクは、データ拠点、トレーニングデータ管轄権、ToS保持ポリシー、SCC/TIA要件によって決定されます。',
        plainTerms: 'LLMの選択がGDPRにとって重要な理由は、データがどこにあるか、モデルがどの国に属しているか、提供者があなたのデータをどれだけ保持するか、そしてデータを国境を越えて移動させるために法的契約が必要かどうかによるためです。',
      },
    ],
  },
  zh: {
    designSkin: 'hub',
    theme: 'Privacy & Security',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-zh.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'GDPR 风险比较: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR 风险矩阵: LLM 比较 Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR合规LLM比较: DeepSeek API（风险最高）、Qwen本地（风险最低）、Llama本地、Claude/GPT API（中等风险）。按数据驻留、管辖权、ToS和SCC要求的风险矩阵。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8分钟阅读',
    educationalLevel: 'Advanced',
    audience: '在专有LLM与开放权重LLM之间做选择的首席信息安全官、采购团队和合规官员',
    primaryTerm: 'GDPR风险比较 LLM模型',
    leadAnswerBlock: '**在本文比较的方案中，DeepSeek托管API的GDPR风险最高：数据存储在中国大陆，PIPL赋予当局广泛的访问权，而欧盟没有针对中国的充分性认定。本地运行的Qwen3.8-27B和Llama 4 Scout风险最低，因为个人数据不会离开您的基础设施。Claude和OpenAI GPT-5.6 Luna API居中：它们需要有效的转移机制（欧美数据隐私框架（DPF）或标准合同条款（SCC）），若要严格实现欧盟境内驻留，还需选择欧盟区域路径，例如OpenAI的欧盟数据驻留Project，或通过Amazon Bedrock、Google Vertex AI欧盟区域使用Claude。**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', '多GPU'],
    toc: [
      { label: '面向LLM的四个GDPR风险向量', anchor: 'risk-vectors' },
      { label: '风险矩阵：模型对比', anchor: 'risk-matrix' },
      { label: '模型裁定和推荐用法', anchor: 'model-verdicts' },
      { label: '按组织类型推荐的堆栈', anchor: 'org-stacks' },
      { label: '常见问题', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek托管API风险最高：数据存储在中国大陆并受PIPL约束，欧盟没有针对中国的充分性认定，其隐私政策允许在法律要求时向当局披露；意大利Garante已对其采取限制措施，柏林监管机构也已要求Apple和Google审查该应用',
          '本地运行的Qwen3.8-27B（Apache 2.0）和Llama 4 Scout风险最低：无第44条转移，无需SCC，数据留在您的硬件上；Llama 4 Scout在4-bit下约需55–60 GB，Qwen3.8-27B量化后可放入24 GB GPU',
          'Claude API和GPT-5.6 Luna属于中等风险：美国供应商需要欧美数据隐私框架（DPF）或SCC，外加转移影响评估（TIA）；Anthropic自家API仅提供全球或美国推理，而OpenAI为新建Project提供欧盟数据驻留',
          '推荐堆栈：初创企业（在DPA下使用Claude或OpenAI API）、数据敏感组织（单张24 GB GPU运行Qwen3.8-27B）、企业（多GPU本地模型，气隙部署）',
          '风险矩阵涵盖五个向量：数据驻留、训练数据管辖权、ToS数据保留、转移机制要求和总体风险级别',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: '面向LLM的四个GDPR风险向量',
        content: [
          '并非所有LLM部署方式承担相同的GDPR风险。使用LLM的法律和运营风险由四个独立因素决定：',
        ],
        subsections: [
          {
            title: '数据驻留',
            text: '模型服务器物理所在地。如果服务器位于欧盟境内，且模型提供商以合同形式承诺将您的数据保留在欧盟境内，数据驻留风险较低。如果服务器位于欧盟境外且没有SCC，数据驻留风险较高。',
          },
          {
            title: '训练数据管辖权',
            text: '哪个国家的法律管辖训练数据以及提供商保留数据的权利。美国数据法（CFAA、SCA）允许执法机构访问。中国数据法（PIPL）要求赋予国家更广泛得多的访问权。欧盟数据在GDPR和电子隐私指令下持续受到保护。',
          },
          {
            title: 'ToS数据保留',
            text: '服务条款对推理完成后保留您的数据是怎么规定的？OpenAI和DeepSeek曾（在不同场合）表示，他们可能为改进模型或依法披露而保留用户提示词。本地运行的Qwen和Llama没有ToS——保留期限由您自己控制。',
          },
          {
            title: 'SCC/TIA要求',
            text: '任何将欧盟个人数据转移到欧盟境外的行为，都需要第五章规定的转移机制：充分性认定（例如适用于已认证美国公司的欧美数据隐私框架（DPF）），或标准合同条款（SCC）加转移影响评估（TIA）。欧盟普通法院已于2025年9月支持该数据隐私框架，但上诉（案件C-703/25 P）仍在欧盟法院审理中，因此SCC仍是备选方案。云API需要这些；本地模型不需要。',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: '风险矩阵：模型对比',
        content: [
          '下表总结了每个部署选项的GDPR风险概况。分数越高表示法律和运营风险越高。',
        ],
        columns: ['部署方式', '数据驻留', '训练数据管辖权', 'ToS保留风险', '是否需要SCC/TIA？', '总体风险级别'],
        rows: [
          { '部署方式': 'DeepSeek API', '数据驻留': '中国（中国境内服务器）', '训练数据管辖权': '中国（PIPL）', ToS保留风险: '政策允许向当局共享', '是否需要SCC/TIA？': '无充分性认定；SCC+TIA难以成立', '总体风险级别': '🔴 最高' },
          { '部署方式': 'Claude API（官方直连）', '数据驻留': '美国或全球；无欧盟专属选项', '训练数据管辖权': '美国', ToS保留风险: '依Anthropic DPA；需核实保留期', '是否需要SCC/TIA？': 'DPF或SCC（含于DPA）+TIA', '总体风险级别': '🟠 中高' },
          { '部署方式': 'Claude（Bedrock / Vertex AI欧盟）', '数据驻留': '欧盟区域（由端点决定）', '训练数据管辖权': '美国供应商，欧盟境内处理', ToS保留风险: '适用云服务商条款', '是否需要SCC/TIA？': '视合同而定；需评估TIA', '总体风险级别': '🟡 中等' },
          { '部署方式': 'GPT-5.6 Luna API（默认）', '数据驻留': '美国（默认Project）', '训练数据管辖权': '美国', ToS保留风险: '提供DPA；依API条款', '是否需要SCC/TIA？': 'DPF或SCC+TIA', '总体风险级别': '🟠 中高' },
          { '部署方式': 'OpenAI API（欧盟Project）', '数据驻留': '欧盟，区域内处理', '训练数据管辖权': '美国供应商，欧盟境内处理', ToS保留风险: '区域内零数据保留', '是否需要SCC/TIA？': '有所降低；请在DPA中确认', '总体风险级别': '🟡 中等' },
          { '部署方式': 'Llama 4 Scout（本地）', '数据驻留': '您自己的硬件（局域网）', '训练数据管辖权': '开放权重，无供应商保留', ToS保留风险: '通过本地日志自行控制保留', '是否需要SCC/TIA？': '不需要', '总体风险级别': '🟢 最低' },
          { '部署方式': 'Qwen3.8-27B（本地）', '数据驻留': '您自己的硬件（局域网）', '训练数据管辖权': '开放权重（Apache 2.0）', ToS保留风险: '通过本地日志自行控制保留', '是否需要SCC/TIA？': '不需要', '总体风险级别': '🟢 最低' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: '模型裁定和推荐用法',
        content: [
          '使用本部分理解每个部署对于您的GDPR合规态势何时合适。',
        ],
        subsections: [
          {
            title: 'DeepSeek API——GDPR工作流应避免使用',
            text: '在本文比较的方案中，DeepSeek托管API风险最高，原因是：（1）其隐私政策将数据置于中华人民共和国境内的服务器上，PIPL及相关法律赋予当局广泛的访问权；（2）欧盟没有针对中国的充分性认定，只有当转移影响评估（TIA）能证明目的地法律不会削弱SCC的保护时，SCC才有帮助，而此处极难证明；（3）该政策允许在法律要求时向当局披露。监管机构已采取行动：意大利Garante于2025年限制了DeepSeek处理意大利用户的数据，柏林数据保护专员则要求Apple和Google审查该应用。如果提示词包含欧盟居民的个人数据，使用托管API很可能缺乏有效的第44条转移依据。本地运行DeepSeek开放权重与其他本地模型一样，转移风险较低；请核对模型许可证和您自己的安全配置。',
          },
          {
            title: 'Claude API——中等风险，配合转移机制可管理',
            text: 'Anthropic的DPA纳入了SCC，并将Anthropic列为处理者，因此在有书面转移机制和转移影响评估（TIA）的前提下，可以在GDPR下使用Claude API。Anthropic官方API只提供两种推理地域：全球（默认）和美国，没有欧盟专属选项，工作区静态数据目前仅存放在美国（[Anthropic数据驻留文档](https://platform.claude.com/docs/en/manage-claude/data-residency)）。需要仅在欧盟境内处理的组织，可以通过Amazon Bedrock或Google Vertex AI选择欧盟区域使用Claude，驻留位置由云服务商的合同和端点选择决定。对于高敏感数据（健康、财务、生物识别），本地部署仍是更稳妥的选择。',
          },
          {
            title: 'GPT-5.6 Luna API——中等风险，使用欧盟Project可降低',
            text: 'OpenAI提供数据处理附录（DPA），并为符合条件的API客户提供欧洲数据驻留：以欧洲为区域新建的Project将在区域内处理，且零数据保留（[OpenAI公告](https://openai.com/index/introducing-data-residency-in-europe/)）。现有Project无法转换，需通过新建Project来迁移。没有欧盟Project时，请求默认在美国处理，需要欧美数据隐私框架（DPF）或SCC，外加转移影响评估（TIA）。无论哪种方式，都应避免发送健康、财务、生物识别或基因数据，除非您的DPA、法律依据和风险评估已涵盖这些数据。',
          },
          {
            title: 'Llama 4 Scout（本地）——风险最低，但硬件要求高',
            text: 'Llama权重依据Meta社区许可证开放，该许可证附带使用条件，商业部署前请先核对。在本地运行Llama意味着：（1）无第44条转移；（2）您控制所有数据保留；（3）无需SCC或TIA；（4）更容易证明符合第25条规定的设计中的隐私保护。Llama 4 Scout是1090亿参数的混合专家模型：其4-bit权重约需55–60 GB，因此请规划单张80 GB GPU或更多，长上下文还需额外内存。较小的开放模型可在消费级硬件上运行。',
          },
          {
            title: 'Qwen3.8-27B（本地）——风险最低，无转移',
            text: 'Qwen3.8-27B是依据Apache 2.0发布的开放权重模型。本地运行意味着无第44条转移、完全控制数据保留，且无需SCC或TIA。量化后通常可放入24 GB GPU，部署起来比Llama 4 Scout容易得多。Qwen3 14B仍是12–16 GB显卡的较轻量选择。Qwen系列内部许可证各不相同（阿里巴巴最大的旗舰权重采用不同条款），因此请在所部署模型的模型卡上确认许可证。本地运行Qwen权重不同于阿里云托管API，后者需要单独的转移评估。',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: '按组织类型推荐的堆栈',
        content: [
          '正确的LLM堆栈取决于您组织的数据敏感性、预算和监管态势。请将这些建议作为采购决策的起点。',
        ],
        subsections: [
          {
            title: '早期初创公司（监管压力低）',
            text: '在供应商DPA下使用Claude或OpenAI API，若客户要求欧盟境内处理，优先选择OpenAI欧盟Project或欧盟云区域。理由：两者都可用于生产环境且运维开销低，而SCC或欧美数据隐私框架（DPF）是美国AI供应商的通行做法。实验性使用通常每月只需几美元。只要数据敏感性较低（匿名使用模式、通用业务逻辑），风险是可接受的。如果业务拓展到医疗保健或金融科技领域，请迁移到Qwen3.8-27B这类本地模型。',
          },
          {
            title: '拥有员工/客户数据的中小企业（监管压力中等）',
            text: '在本地使用Qwen3.8-27B（显卡较小时用Qwen3 14B）。理由：您处理个人数据（员工名册、客户联系信息、交易记录），零转移架构可以彻底消除转移问题。单张24 GB GPU即可运行量化后的Qwen3.8-27B；12 GB GPU可运行Q4的Qwen3 14B。硬件是一次性成本，外加电费。使用Ollama设置通常不到一小时。您仍需具备合法性依据、处理记录和安全措施，但无需SCC、TIA，也无需与供应商谈判DPA。',
          },
          {
            title: '企业（监管压力高：医疗保健、金融科技、法律）',
            text: '使用多GPU本地部署并采用气隙。理由：高敏感数据需要最强的架构。多张GPU让您能以更低延迟运行更大的开放权重模型，例如Llama 4 Scout或更大的Qwen变体。气隙意味着推理集群没有任何对外互联网访问，这就去除了提示词经由对外网络连接离开集群的途径。请预留数万美元的硬件预算和一到两周的基础设施工作。这有助于满足第32条（安全性），并通过访问日志形成第30条要求的审计跟踪。',
          },
          {
            title: '已有法律协议的组织（特殊情况）',
            text: '如果您已经与Anthropic或OpenAI签有数据处理附录（DPA），请在此基础上推进。切换到本地部署的成本往往高于扩展现有协议，而包含SCC或欧美数据隐私框架（DPF）覆盖并已完成TIA的现行DPA，可使风险保持可控。请在决定前与法务团队一起审查，如果待决的数据隐私框架上诉改变了美国转移依据，请重新核查相关安排。',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '如果我使用SCC，DeepSeek是否符合GDPR？',
            a: '可能性很小。只有当转移影响评估（TIA）证明目的地国家的法律不会削弱SCC时，SCC才起作用。对于中国大陆，欧盟没有充分性认定，PIPL赋予当局广泛的数据访问权，而DeepSeek的隐私政策允许在法律要求时向当局披露。监管机构已采取行动：意大利Garante限制了DeepSeek处理意大利用户的数据，柏林数据保护专员要求Apple和Google审查该应用。对于欧盟居民的个人数据，请勿使用DeepSeek托管API。DeepSeek的开放权重可以在您自己的硬件上运行，从而消除转移，但请核对模型许可证和您的安全配置。',
          },
          {
            q: '我能把Claude的提示词保留在欧盟境内吗？',
            a: '通过Anthropic自家API无法做到。其inference_geo设置只提供全球或美国，工作区静态数据仅存放在美国。若要欧盟区域处理，可通过Amazon Bedrock或Google Vertex AI选择欧盟区域使用Claude；推理在何处运行由云服务商的合同和端点决定，请向其确认。Anthropic的DPA纳入了用于转移的SCC。若要采取完全无转移的最强立场，请使用Qwen3.8-27B或Llama 4 Scout这类本地模型。',
          },
          {
            q: '哪个LLM API符合GDPR？',
            a: '没有哪个API本身就合规：GDPR合规取决于您如何使用它。请检查四点：一份已签署、使供应商成为您的处理者的DPA；数据离开欧盟时有效的转移机制（欧美数据隐私框架（DPF）或SCC加TIA）；明确的保留和禁止训练设置；以及对您发送的个人数据具备合法性依据。OpenAI为符合条件的客户提供欧盟数据驻留Project和DPA；Anthropic提供含SCC的DPA，欧盟处理可通过云服务商区域实现。DeepSeek托管API最难自圆其说。对于敏感数据，本地模型可以完全回避转移问题。',
          },
          {
            q: '在GDPR下使用Qwen安全吗？',
            a: '取决于您如何运行它。Qwen开放权重（例如Apache 2.0下的Qwen3.8-27B）在您自己的硬件上运行，不会向阿里巴巴发送任何数据，因此没有第44条转移，风险特征与Llama相同。阿里云托管API则不同：您会把提示词发送给欧盟以外的供应商，这需要单独的转移评估、DPA和区域核查。请在模型卡上核对许可证，因为Qwen系列内部的条款各不相同。',
          },
          {
            q: '我能把Llama 4 Scout直接用作Claude的替代品吗？',
            a: '就GDPR合规而言：原则上可以。Llama 4 Scout是开放权重模型，可在本地运行，因此避免了第44条转移。就硬件和能力而言：不能直接替代。Scout是1090亿参数的混合专家模型，4-bit下约需55–60 GB，因此至少需要单张80 GB GPU，而Qwen3.8-27B量化后可放入24 GB显卡。Claude是专有的前沿模型，在非常复杂的推理上通常更强。请先在您自己的工作负载上测试；对于问答、摘要和常规代码任务，本地模型往往具有竞争力。',
          },
          {
            q: '如果我在本地记录提示以供审计之用会怎样？',
            a: '建议记录以符合第30条。记录：模型名称、会话时间戳、输入令牌数、输出令牌数和提示与响应的SHA-256哈希。不要记录包含个人数据的提示的原始文本。基于哈希的日志记录满足第30条（处理记录）和第32条（安全性），同时不违反第5条第(1)项e（存储限制）。',
          },
          {
            q: '本地运行LLM是否比云API更贵？',
            a: '前期成本：是的。硬件（RTX 4070 Ti）成本约500–1,000美元。每月成本：不是。本地电费约每月5–10美元。云API每1,000个令牌成本0.001–0.01美元，对于重度使用（每月超过100万令牌）而言，超过100美元。对于中到重度使用，收支平衡通常需要6–12个月。如果每月使用不到10万令牌，云API更便宜。如果每月使用超过100万令牌，本地部署更便宜。GDPR合规是额外的商业理由：本地部署意味着零SCC/TIA法律成本。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[DeepSeek本地设置与数据隐私2026](/zh/local-llms/deepseek-local-china-data-privacy-2026) -- DeepSeek本地设置与数据隐私',
          '[Qwen GDPR本地设置指南2026](/zh/local-llms/qwen-local-gdpr-setup-guide-2026) -- Qwen GDPR本地设置指南',
          '[本地LLM企业合规](/zh/local-llms/enterprise-compliance-local-llms) -- 本地LLM企业合规',
          '[欧盟GDPR云GPU选项2026](/zh/local-llms/eu-cloud-gpu-gdpr-2026) -- 欧盟GDPR云GPU选项',
          '[本地LLM安全和隐私检查清单](/zh/local-llms/local-llm-security-privacy-checklist) -- 本地LLM安全和隐私检查清单',
          '[数据驻留与主权AI：欧盟/GDPR企业级LLM部署指南](/zh/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- 位于本文模型比较之上的部署架构问题',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'LLM的GDPR风险取决于数据驻留、训练数据管辖权、ToS保留政策和SCC/TIA要求。',
        plainTerms: '您对LLM的选择之所以对GDPR很重要，是因为数据所在位置、模型归属哪个国家、供应商保留您数据的时长，以及是否需要法律合同才能跨境转移数据。',
      },
    ],
  },
  pt: {
    designSkin: 'hub',
    theme: 'Privacy & Security',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-pt.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'Comparação de riscos GDPR: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'Matriz de risco GDPR: Qwen, DeepSeek, Llama e Claude',
    metaDescription: 'Comparação de LLMs em conformidade com GDPR/LGPD: DeepSeek API (maior risco), Qwen local (menor risco), Llama local e Claude/GPT API (risco médio). Matriz por residência de dados.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8 min de leitura',
    educationalLevel: 'Advanced',
    audience: 'CISOs, equipes de compras e responsáveis por conformidade que escolhem entre LLMs proprietários e de pesos abertos',
    primaryTerm: 'comparação de risco GDPR modelos LLM',
    leadAnswerBlock: '**A API hospedada da DeepSeek apresenta o maior risco de GDPR entre as opções comparadas aqui: os dados ficam armazenados na China continental, onde a PIPL dá amplo acesso às autoridades, e a UE não tem decisão de adequação para a China. Qwen3.8-27B e Llama 4 Scout executados localmente têm o menor risco, porque nenhum dado pessoal sai da sua infraestrutura. As APIs do Claude e do OpenAI GPT-5.6 Luna ficam no meio-termo: exigem um mecanismo válido de transferência (EU-US Data Privacy Framework ou Cláusulas Contratuais Padrão) e, para residência estrita na UE, uma rota em região europeia, como os Projects com residência de dados na UE da OpenAI ou o Claude via Amazon Bedrock ou regiões da UE do Google Vertex AI.**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    quickAnswerTop: {
      pt: {
        question: 'Qual LLM é mais seguro sob o GDPR?', // VERIFY
        answer: 'Qwen3.8-27B ou Llama 4 Scout executados localmente no seu próprio hardware: nenhum dado sai da sua jurisdição, então não há transferência do Artigo 44 e não é preciso gerenciar SCC nem TIA. A API hospedada da DeepSeek é a de maior risco, porque os dados ficam armazenados na China sob a PIPL. As APIs do Claude e do GPT-5.6 Luna têm risco médio: exigem um mecanismo de transferência (EU-US Data Privacy Framework ou SCCs), e o processamento exclusivo na UE está disponível pelos Projects com residência de dados na UE da OpenAI ou pelo Claude no Amazon Bedrock / nas regiões da UE do Google Vertex AI, não pela API própria da Anthropic.',
        bullets: [
          'Qwen local: menor risco. Sem transferência, pesos Apache 2.0 no Qwen3.8-27B, cerca de 16–24 GB de VRAM quando quantizado.',
          'DeepSeek API: maior risco. Dados armazenados na China, jurisdição da PIPL, sem decisão de adequação da UE.',
          'APIs Claude/GPT: risco médio. Exigem mecanismo de transferência; rotas em região da UE reduzem, mas não eliminam, as questões de jurisdição do fornecedor.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quatro vetores de risco GDPR para LLMs', anchor: 'risk-vectors' },
      { label: 'Matriz de risco: comparação modelo a modelo', anchor: 'risk-matrix' },
      { label: 'Veredito por modelo e uso recomendado', anchor: 'model-verdicts' },
      { label: 'Stack recomendado por tipo de organização', anchor: 'org-stacks' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A API hospedada da DeepSeek é a de maior risco: os dados ficam armazenados na China continental sob a PIPL, a UE não tem decisão de adequação para a China e a política de privacidade permite a divulgação às autoridades quando exigida por lei; a Garante da Itália a restringiu e a autoridade de Berlim pediu que Apple e Google revisassem o app',
          'Qwen3.8-27B (Apache 2.0) e Llama 4 Scout executados localmente têm o menor risco: sem transferência do Artigo 44, sem SCC exigida, os dados ficam no seu hardware; o Llama 4 Scout precisa de cerca de 55–60 GB em 4 bits, e o Qwen3.8-27B cabe em uma GPU de 24 GB quando quantizado',
          'A API do Claude e o GPT-5.6 Luna têm risco médio: fornecedores dos EUA exigem o EU-US Data Privacy Framework ou SCCs, além de uma Avaliação de Impacto da Transferência; a API própria da Anthropic oferece apenas inferência global ou nos EUA, enquanto a OpenAI oferece residência de dados na UE para novos Projects',
          'Stacks recomendados: startups (API do Claude ou da OpenAI sob um DPA), organizações com dados sensíveis (Qwen3.8-27B em uma GPU de 24 GB), empresas (modelos locais multi-GPU, em air-gap)',
          'A matriz de risco cobre cinco vetores: residência de dados, jurisdição dos dados de treinamento, retenção de dados nos ToS, exigência de mecanismo de transferência e nível de risco geral',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Quatro vetores de risco GDPR para LLMs',
        content: [
          'Nem toda implantação de LLM carrega o mesmo risco de GDPR. O risco jurídico e operacional de usar um LLM é determinado por quatro fatores independentes:',
        ],
        subsections: [
          {
            title: 'Residência de dados',
            text: 'Onde os servidores do modelo ficam fisicamente. Se os servidores estão na UE e o provedor se compromete contratualmente a manter seus dados na UE, o risco de residência de dados é baixo. Se os servidores estão fora da UE sem SCC, o risco é alto. Para organizações no Brasil, a LGPD (Lei nº 13.709/2018) impõe requisitos equivalentes de base legal e de transferência internacional de dados (art. 33), fiscalizados pela ANPD.',
          },
          {
            title: 'Jurisdição dos dados de treinamento',
            text: 'Quais leis de país regem os dados de treinamento e o direito do provedor de retê-los. A lei de dados dos EUA (CFAA, SCA) permite o acesso das autoridades. A lei de dados chinesa (PIPL) impõe direitos de acesso estatal muito mais amplos. Os dados da UE permanecem protegidos pelo GDPR e pela Diretiva ePrivacy; os dados no Brasil são regidos pela LGPD.',
          },
          {
            title: 'Retenção de dados nos ToS',
            text: 'O que os Termos de Serviço dizem sobre guardar seus dados depois que a inferência termina? OpenAI e DeepSeek já indicaram (em diferentes fóruns) que podem reter os prompts dos usuários para melhoria do modelo ou divulgação legalmente exigida. Qwen e Llama executados localmente não têm ToS — você controla a retenção.',
          },
          {
            title: 'Exigência de SCC / TIA',
            text: 'Qualquer transferência de dados pessoais da UE para fora da UE exige um mecanismo de transferência do Capítulo V: uma decisão de adequação (como o EU-US Data Privacy Framework para empresas americanas certificadas) ou Cláusulas Contratuais Padrão (SCCs) mais uma Avaliação de Impacto da Transferência (TIA). O Data Privacy Framework foi confirmado pelo Tribunal Geral da UE em setembro de 2025, mas o recurso (Processo C-703/25 P) está pendente no Tribunal de Justiça, então as SCCs continuam como alternativa. As APIs em nuvem exigem isso; os modelos locais, não.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Matriz de risco: comparação modelo a modelo',
        content: [
          'A tabela abaixo resume o perfil de risco de GDPR de cada opção de implantação. Pontuações mais altas indicam maior risco jurídico e operacional.',
        ],
        columns: ['Implantação', 'Residência de dados', 'Jurisdição dos dados de treinamento', 'Risco de retenção nos ToS', 'SCC / TIA exigida?', 'Nível de risco geral'],
        rows: [
          { Implantação: 'DeepSeek API', 'Residência de dados': 'China (servidores na RPC)', 'Jurisdição dos dados de treinamento': 'China (PIPL)', 'Risco de retenção nos ToS': 'Política permite compartilhar com autoridades', 'SCC / TIA exigida?': 'Sem adequação; SCC + TIA dificilmente se sustenta', 'Nível de risco geral': '🔴 Maior' },
          { Implantação: 'Claude API (própria)', 'Residência de dados': 'EUA ou global; sem opção só UE', 'Jurisdição dos dados de treinamento': 'EUA', 'Risco de retenção nos ToS': 'Conforme o DPA da Anthropic; verifique a retenção', 'SCC / TIA exigida?': 'DPF ou SCC (no DPA) + TIA', 'Nível de risco geral': '🟠 Médio-alto' },
          { Implantação: 'Claude no Bedrock / Vertex AI UE', 'Residência de dados': 'Região da UE (definida pelo endpoint)', 'Jurisdição dos dados de treinamento': 'Fornecedor dos EUA, processamento na UE', 'Risco de retenção nos ToS': 'Valem os termos do provedor de nuvem', 'SCC / TIA exigida?': 'Depende do contrato; avalie a TIA', 'Nível de risco geral': '🟡 Médio' },
          { Implantação: 'GPT-5.6 Luna API (padrão)', 'Residência de dados': 'EUA (Project padrão)', 'Jurisdição dos dados de treinamento': 'EUA', 'Risco de retenção nos ToS': 'DPA disponível; conforme os termos da API', 'SCC / TIA exigida?': 'DPF ou SCC + TIA', 'Nível de risco geral': '🟠 Médio-alto' },
          { Implantação: 'OpenAI API (Project UE)', 'Residência de dados': 'UE, processado na própria região', 'Jurisdição dos dados de treinamento': 'Fornecedor dos EUA, processamento na UE', 'Risco de retenção nos ToS': 'Retenção zero de dados na região', 'SCC / TIA exigida?': 'Reduzida; confirme no seu DPA', 'Nível de risco geral': '🟡 Médio' },
          { Implantação: 'Llama 4 Scout (local)', 'Residência de dados': 'Seu hardware (LAN)', 'Jurisdição dos dados de treinamento': 'Pesos abertos, sem retenção pelo fornecedor', 'Risco de retenção nos ToS': 'Você controla a retenção via logs locais', 'SCC / TIA exigida?': 'Não', 'Nível de risco geral': '🟢 Menor' },
          { Implantação: 'Qwen3.8-27B (local)', 'Residência de dados': 'Seu hardware (LAN)', 'Jurisdição dos dados de treinamento': 'Pesos abertos (Apache 2.0)', 'Risco de retenção nos ToS': 'Você controla a retenção via logs locais', 'SCC / TIA exigida?': 'Não', 'Nível de risco geral': '🟢 Menor' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Veredito por modelo e uso recomendado',
        content: [
          'Use esta seção para entender quando cada implantação é apropriada para a sua postura de conformidade com GDPR.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — Evite para fluxos de trabalho sob GDPR',
            text: 'A API hospedada da DeepSeek apresenta o maior risco entre as opções comparadas aqui porque: (1) sua política de privacidade coloca os dados em servidores na República Popular da China, onde a PIPL e leis correlatas dão amplo acesso às autoridades; (2) a UE não tem decisão de adequação para a China, e as SCCs só ajudam se uma Avaliação de Impacto da Transferência conseguir mostrar que a lei do país de destino não as enfraquece, o que aqui é muito difícil de demonstrar; (3) a política permite a divulgação às autoridades quando exigida por lei. Os reguladores agiram: a Garante da Itália restringiu em 2025 o tratamento de dados de usuários italianos pela DeepSeek, e a autoridade de proteção de dados de Berlim pediu que Apple e Google revisassem o app. Se os prompts contêm dados pessoais de residentes na UE, o uso da API hospedada provavelmente não tem uma base válida de transferência segundo o Artigo 44. Os pesos abertos da DeepSeek executados localmente têm o mesmo baixo risco de transferência que os demais modelos locais; verifique a licença do modelo e a sua própria configuração de segurança.',
          },
          {
            title: 'Claude API — Risco médio, gerenciável com um mecanismo de transferência',
            text: 'O DPA da Anthropic incorpora SCCs e a designa como operadora (processor), então a API do Claude pode ser usada sob o GDPR com um mecanismo de transferência documentado e uma Avaliação de Impacto da Transferência. A API própria da Anthropic oferece apenas duas geografias de inferência, global (padrão) e EUA; não há opção exclusiva para a UE, e os dados em repouso do workspace ficam atualmente apenas nos EUA ([documentação de residência de dados da Anthropic](https://platform.claude.com/docs/en/manage-claude/data-residency)). Organizações que precisam de processamento exclusivo na UE podem usar o Claude pelo Amazon Bedrock ou pelo Google Vertex AI com uma região da UE, onde o contrato do provedor de nuvem e a escolha do endpoint determinam a residência. Para dados de alta sensibilidade (saúde, financeiros, biométricos), a implantação local continua sendo a opção mais segura.',
          },
          {
            title: 'GPT-5.6 Luna API — Risco médio, menor com um Project na UE',
            text: 'A OpenAI oferece um Adendo de Processamento de Dados (DPA) e, para clientes elegíveis da API, residência de dados europeia: um novo Project criado com a Europa como região é processado na própria região, com retenção zero de dados ([anúncio da OpenAI](https://openai.com/index/introducing-data-residency-in-europe/)). Projects existentes não podem ser convertidos, então migre criando um novo Project. Sem um Project na UE, as requisições são processadas por padrão nos EUA e exigem o EU-US Data Privacy Framework ou SCCs, além de uma Avaliação de Impacto da Transferência. Em qualquer caso, evite enviar dados de saúde, financeiros, biométricos ou genéticos, a menos que seu DPA, sua base legal e sua avaliação de riscos os cubram.',
          },
          {
            title: 'Llama 4 Scout (local) — Menor risco, mas hardware pesado',
            text: 'Os pesos do Llama são abertos sob a licença comunitária da Meta, que traz condições de uso a conferir antes de uma implantação comercial. Executar o Llama localmente significa: (1) nenhuma transferência do Artigo 44; (2) você controla toda a retenção de dados; (3) nenhuma SCC ou TIA exigida; (4) fica mais fácil demonstrar a privacidade desde a concepção do Artigo 25. O Llama 4 Scout é um modelo mixture-of-experts de 109 bilhões de parâmetros: seus pesos em 4 bits precisam de cerca de 55–60 GB, então planeje uma única GPU de 80 GB ou mais, além de memória extra para contexto longo. Modelos abertos menores cabem em hardware de consumo.',
          },
          {
            title: 'Qwen3.8-27B (local) — Menor risco, sem transferência',
            text: 'O Qwen3.8-27B é um modelo de pesos abertos lançado sob Apache 2.0. Executá-lo localmente significa nenhuma transferência do Artigo 44, controle total da retenção e nenhuma SCC ou TIA. Quando quantizado, costuma caber em uma GPU de 24 GB, o que o torna muito mais fácil de implantar que o Llama 4 Scout. O Qwen3 14B continua sendo uma opção mais leve para placas de 12–16 GB. A licença varia dentro da família Qwen (os pesos principais maiores da Alibaba usam termos diferentes), então confirme a licença no model card do modelo exato que você vai implantar. Os pesos do Qwen executados localmente são diferentes da API hospedada da Alibaba Cloud, que exige uma avaliação de transferência à parte.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Stack recomendado por tipo de organização',
        content: [
          'O stack de LLM ideal depende da sensibilidade de dados da sua organização, do orçamento e da postura regulatória. Use estas recomendações como ponto de partida para decisões de compra.',
        ],
        subsections: [
          {
            title: 'Startup em estágio inicial (baixa pressão regulatória)',
            text: 'Use a API do Claude ou da OpenAI sob o DPA do fornecedor e prefira um Project da OpenAI na UE ou uma região de nuvem da UE se os clientes pedirem processamento na UE. Justificativa: ambas estão prontas para produção, com baixa sobrecarga operacional, e SCCs ou o Data Privacy Framework são padrão para fornecedores de IA sediados nos EUA. O uso experimental costuma custar poucos dólares por mês. O risco é aceitável enquanto os dados forem de baixa sensibilidade (padrões de uso anônimos, lógica de negócio genérica). Se você crescer para saúde ou fintech, migre para um modelo local como o Qwen3.8-27B.',
          },
          {
            title: 'PME com dados de funcionários/clientes (pressão regulatória média)',
            text: 'Use o Qwen3.8-27B (ou o Qwen3 14B em placas menores) localmente. Justificativa: você lida com dados pessoais (folha de funcionários, contatos de clientes, histórico de transações), então uma arquitetura de zero transferência elimina por completo a questão da transferência. Uma única GPU de 24 GB roda o Qwen3.8-27B quantizado; uma GPU de 12 GB roda o Qwen3 14B em Q4. O hardware é um custo único mais a eletricidade. A configuração com o Ollama costuma levar menos de uma hora. Você ainda precisa de uma base legal, de um registro de tratamento e de medidas de segurança, mas não de SCC, TIA nem negociação de DPA com fornecedor.',
          },
          {
            title: 'Empresa (alta pressão regulatória: saúde, fintech, jurídico)',
            text: 'Use implantação local multi-GPU com air-gap. Justificativa: dados de alta sensibilidade pedem a arquitetura mais robusta. Várias GPUs permitem rodar modelos de pesos abertos maiores, como o Llama 4 Scout ou variantes maiores do Qwen, com menor latência. Air-gap significa que o cluster de inferência não tem acesso de saída à internet, o que elimina as conexões de saída como via pela qual os prompts poderiam sair do cluster. Reserve dezenas de milhares de dólares para hardware e uma a duas semanas de trabalho de infraestrutura. Isso sustenta o Artigo 32 (segurança) e uma trilha de auditoria do Artigo 30 por meio de logs de acesso.',
          },
          {
            title: 'Organização com acordo jurídico existente (caso especial)',
            text: 'Se você já tem um Adendo de Processamento de Dados (DPA) com a Anthropic ou a OpenAI, construa sobre ele. Migrar para a implantação local costuma custar mais que ampliar um acordo existente, e um DPA vigente com SCCs ou cobertura do Data Privacy Framework, mais uma TIA concluída, mantém o risco gerenciável. Revise com sua equipe jurídica antes de decidir e reavalie o arranjo se o recurso pendente sobre o Data Privacy Framework mudar a base de transferência para os EUA.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'A DeepSeek está em conformidade com o GDPR se eu a usar com uma SCC?',
            a: 'Muito improvável. As SCCs só funcionam se uma Avaliação de Impacto da Transferência mostrar que a lei do país de destino não as enfraquece. Para a China continental não existe decisão de adequação da UE, a PIPL dá amplo acesso aos dados às autoridades e a política de privacidade da DeepSeek permite a divulgação às autoridades quando exigida por lei. Os reguladores já agiram: a Garante da Itália restringiu o tratamento de dados de usuários italianos pela DeepSeek, e a autoridade de proteção de dados de Berlim pediu que Apple e Google revisassem o app. Para dados pessoais de residentes na UE, não use a API hospedada da DeepSeek. Os pesos abertos da DeepSeek podem rodar no seu próprio hardware, o que elimina a transferência, mas verifique a licença do modelo e a sua configuração de segurança.',
          },
          {
            q: 'Posso manter os prompts do Claude dentro da UE?',
            a: 'Não pela API própria da Anthropic. A configuração inference_geo oferece apenas global ou EUA, e os dados em repouso do workspace ficam apenas nos EUA. O processamento em região da UE está disponível usando o Claude pelo Amazon Bedrock ou pelo Google Vertex AI com uma região da UE; o contrato do provedor de nuvem e o endpoint definem onde a inferência roda, então confirme isso com eles. O DPA da Anthropic incorpora SCCs para transferências. Para a postura mais sólida, sem nenhuma transferência, use um modelo local como o Qwen3.8-27B ou o Llama 4 Scout.',
          },
          {
            q: 'Qual API de LLM está em conformidade com o GDPR?',
            a: 'Nenhuma API é conforme por si só: a conformidade com o GDPR depende de como você a usa. Verifique quatro pontos: um DPA assinado que torne o fornecedor seu operador, um mecanismo de transferência válido (EU-US Data Privacy Framework ou SCCs mais uma TIA) se os dados saírem da UE, uma configuração clara de retenção e de não uso para treinamento, e uma base legal para os dados pessoais que você envia. A OpenAI oferece Projects com residência de dados na UE para clientes elegíveis e um DPA; a Anthropic oferece um DPA com SCCs, com processamento na UE disponível pelas regiões de provedores de nuvem. A API hospedada da DeepSeek é a mais difícil de justificar. Para dados sensíveis, os modelos locais evitam por completo a questão da transferência.',
          },
          {
            q: 'O Qwen é seguro de usar sob o GDPR?',
            a: 'Depende de como você o executa. Os pesos abertos do Qwen (por exemplo, o Qwen3.8-27B sob Apache 2.0) executados no seu próprio hardware não enviam dados à Alibaba, então não há transferência do Artigo 44 e o perfil de risco é igual ao do Llama. A API hospedada da Alibaba Cloud é diferente: você estaria enviando prompts a um provedor fora da UE, o que exige uma avaliação de transferência própria, um DPA e a checagem da região. Verifique a licença no model card, porque os termos variam dentro da família Qwen.',
          },
          {
            q: 'Posso usar o Llama 4 Scout como substituto direto do Claude?',
            a: 'Para conformidade com o GDPR: sim, em princípio. O Llama 4 Scout tem pesos abertos e pode rodar localmente, então evita a transferência do Artigo 44. Para hardware e capacidade: não como substituto direto. O Scout é um modelo mixture-of-experts de 109 bilhões de parâmetros que precisa de cerca de 55–60 GB em 4 bits, ou seja, no mínimo uma única GPU de 80 GB, enquanto o Qwen3.8-27B cabe em uma placa de 24 GB quantizado. O Claude é um modelo proprietário de fronteira e costuma ser mais forte em raciocínio muito complexo. Teste primeiro na sua própria carga de trabalho; para perguntas e respostas, resumos e tarefas rotineiras de código, os modelos locais costumam ser competitivos.',
          },
          {
            q: 'O que acontece se eu registrar meus prompts localmente para fins de auditoria?',
            a: 'O registro é incentivado para a conformidade com o Artigo 30. Registre o seguinte: nome do modelo, carimbo de data/hora da sessão, contagem de tokens de entrada, contagem de tokens de saída e um hash SHA-256 do prompt e da resposta. NÃO registre o texto bruto de prompts que contenham dados pessoais. O registro baseado em hash satisfaz o Artigo 30 (registros de processamento) e o Artigo 32 (segurança) sem violar o Artigo 5(1)(e) (limitação de armazenamento). Armazene os logs em um sistema criptografado com controle de acesso (por exemplo, servidor de agregação de logs com acesso baseado em papéis). Retenha os logs por 3 anos, conforme o padrão de DPA.',
          },
          {
            q: 'Rodar um LLM on-premise é mais caro que usar APIs em nuvem?',
            a: 'No investimento inicial: sim. O hardware (RTX 4070 Ti) custa ~R$ 4.500–6.500 no varejo brasileiro. Mensalmente: não. A eletricidade on-premise é de ~R$ 50–90/mês. As APIs em nuvem custam US$ 0,001–0,01 por 1K tokens (cobradas em dólar), o que para uso intenso (>1M tokens/mês) ultrapassa US$ 100. O ponto de equilíbrio costuma ser de 6–12 meses para uso médio a alto. Se você roda <100K tokens/mês, as APIs em nuvem são mais baratas. Se roda >1M tokens/mês, o on-premise é mais barato. A conformidade com GDPR/LGPD é um argumento de negócio adicional: o on-premise elimina o custo jurídico de SCC/TIA.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[Configuração local DeepSeek para privacidade de dados 2026](/pt/local-llms/deepseek-local-china-data-privacy-2026) -- configuração local DeepSeek para privacidade de dados',
          '[Guia de configuração local Qwen GDPR 2026](/pt/local-llms/qwen-local-gdpr-setup-guide-2026) -- guia de configuração local Qwen GDPR',
          '[Conformidade empresarial com LLMs locais](/pt/local-llms/enterprise-compliance-local-llms) -- conformidade empresarial com LLMs locais',
          '[Opções de GPU na nuvem GDPR da UE 2026](/pt/local-llms/eu-cloud-gpu-gdpr-2026) -- opções de GPU na nuvem GDPR da UE',
          '[Lista de verificação de segurança e privacidade de LLM local](/pt/local-llms/local-llm-security-privacy-checklist) -- lista de verificação de segurança e privacidade de LLM local',
          '[Residência de dados e IA soberana: implantação empresarial de LLM sob GDPR/UE](/pt/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- a questão de arquitetura de implantação que está acima das escolhas de modelo comparadas aqui',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'O risco de GDPR para LLMs é determinado pela residência de dados, pela jurisdição dos dados de treinamento, pelas políticas de retenção dos ToS e pelas exigências de SCC/TIA.',
        plainTerms: 'Sua escolha de LLM importa para o GDPR/LGPD por causa de onde seus dados ficam, qual país é dono do modelo, por quanto tempo o fornecedor guarda seus dados e se você precisa de contratos jurídicos para mover dados entre fronteiras.',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Comparação de riscos GDPR: Qwen vs DeepSeek vs Llama vs Claude 2026',
      description: 'Comparação de LLMs em conformidade com GDPR/LGPD: matriz de risco para DeepSeek, Qwen, Llama e Claude.',
      url: 'https://www.promptquorum.com/pt/local-llms/gdpr-llm-risk-comparison-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-22',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  // VERIFY: preços de hardware on-premise em BRL (RTX 4070 Ti ~R$ 4.500-6.500; multi-GPU ~R$ 40.000-120.000) e eletricidade (~R$ 50-90/mês, ~R$ 600/ano) são estimativas de varejo BR (jun/2026); custos de API/tokens da nuvem mantidos em USD (cobrados em dólar). Referências jurídicas latino-americanas do bloco es foram trocadas pela LGPD/ANPD do Brasil. Confirmar antes de publicar.
  ko: {
    designSkin: 'hub',
    theme: '개인정보 보호 및 보안',
    heroImage: '/images/gdpr-llm-risk-comparison-2026-overview-hero-ko.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    title: 'GDPR 리스크 비교: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR 리스크 매트릭스: Qwen·DeepSeek·Llama·Claude 비교',
    metaDescription: 'GDPR 준수 LLM 비교: DeepSeek API(최고 위험), Qwen 로컬(최저), Llama 로컬, Claude/GPT API(중간 위험). 데이터 거주지, 관할권, ToS, SCC 요건별 리스크 매트릭스.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '8분 읽기',
    educationalLevel: 'Advanced',
    audience: '독점적 LLM과 오픈 웨이트 LLM 중에서 선택하는 CISO, 조달팀, 컴플라이언스 담당자',
    primaryTerm: 'GDPR 리스크 비교 LLM 모델',
    leadAnswerBlock: '**DeepSeek 호스팅 API는 여기서 비교한 옵션 중 GDPR 리스크가 가장 높습니다. 데이터가 중국 본토에 저장되고, PIPL에 따라 당국이 광범위하게 접근할 수 있으며, EU는 중국에 대한 적정성 결정을 내리지 않았기 때문입니다. Qwen3.8-27B와 Llama 4 Scout을 로컬로 실행하면 개인정보가 사용자의 인프라 밖으로 나가지 않으므로 리스크가 가장 낮습니다. Claude와 OpenAI GPT-5.6 Luna API는 중간에 해당합니다. 유효한 이전 메커니즘(EU-US 데이터 프라이버시 프레임워크 또는 표준 계약 조항)이 필요하며, 엄격한 EU 거주지가 필요하면 OpenAI의 EU 데이터 거주지 프로젝트, 또는 Amazon Bedrock이나 Google Vertex AI의 EU 리전을 통한 Claude 같은 EU 리전 경로를 사용해야 합니다.**',
    current_models_mentioned: ['DeepSeek', 'Qwen3.8-27B', 'Qwen3 14B', 'Llama 4 Scout', 'Claude Sonnet 5.5', 'Claude Opus 5.5', 'GPT-5.6 Luna'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    quickAnswerTop: {
      ko: {
        question: 'GDPR 하에서 가장 안전한 LLM은 무엇입니까?',
        answer: 'Qwen3.8-27B 또는 Llama 4 Scout을 자체 하드웨어에서 로컬로 실행하는 것이 가장 안전합니다. 데이터가 관할권을 벗어나지 않으므로 제44조 이전이 없고, 관리해야 할 SCC나 TIA도 없습니다. DeepSeek 호스팅 API는 데이터가 PIPL이 적용되는 중국에 저장되므로 리스크가 가장 높습니다. Claude 및 GPT-5.6 Luna API는 중간 위험입니다. 이전 메커니즘(EU-US 데이터 프라이버시 프레임워크 또는 SCC)이 필요하며, EU 내 처리는 OpenAI의 EU 데이터 거주지 프로젝트 또는 Amazon Bedrock / Google Vertex AI EU 리전의 Claude를 통해서만 가능하고 Anthropic 자체 API로는 제공되지 않습니다.',
        bullets: [
          'Qwen 로컬: 최저 위험. 이전 없음, Qwen3.8-27B는 Apache 2.0 가중치, 양자화 시 약 16–24 GB VRAM.',
          'DeepSeek API: 최고 위험. 중국 내 데이터 저장, PIPL 관할권, EU 적정성 결정 없음.',
          'Claude/GPT API: 중간 위험. 이전 메커니즘 필요. EU 리전 경로는 벤더 관할권 문제를 줄여주지만 완전히 없애지는 못합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'LLM의 4가지 GDPR 리스크 벡터', anchor: 'risk-vectors' },
      { label: '리스크 매트릭스: 모델별 비교', anchor: 'risk-matrix' },
      { label: '모델별 판정 및 권장 용도', anchor: 'model-verdicts' },
      { label: '조직 유형별 권장 스택', anchor: 'org-stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek 호스팅 API는 최고 위험: 데이터가 PIPL이 적용되는 중국 본토에 저장되고, 중국에 대한 EU 적정성 결정이 없으며, 개인정보 처리방침이 법적으로 요구되는 경우 당국에 대한 공개를 허용합니다. 이탈리아 Garante가 처리를 제한했고 베를린 감독관은 Apple과 Google에 앱 검토를 요청했습니다',
          'Qwen3.8-27B(Apache 2.0)와 Llama 4 Scout을 로컬로 실행하면 최저 위험: 제44조 이전 없음, SCC 불필요, 데이터가 자체 하드웨어에 보관됩니다. Llama 4 Scout은 4비트에서 약 55–60 GB가 필요하고, Qwen3.8-27B는 양자화 시 24 GB GPU에 들어갑니다',
          'Claude API와 GPT-5.6 Luna는 중간 위험: 미국 벤더는 EU-US 데이터 프라이버시 프레임워크 또는 SCC와 이전 영향 평가가 필요합니다. Anthropic 자체 API는 글로벌 또는 미국 추론만 제공하는 반면, OpenAI는 새 프로젝트에 EU 데이터 거주지를 제공합니다',
          '권장 스택: 스타트업(DPA 하의 Claude 또는 OpenAI API), 데이터 민감 조직(24 GB GPU 한 장의 Qwen3.8-27B), 기업(멀티 GPU 로컬 모델, 에어갭)',
          '리스크 매트릭스는 데이터 거주지, 학습 데이터 관할권, ToS 데이터 보존, 이전 메커니즘 요건, 전체 위험 수준의 5가지 벡터를 다룹니다',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'LLM의 4가지 GDPR 리스크 벡터',
        content: [
          '모든 LLM 배포가 동일한 GDPR 리스크를 가지는 것은 아닙니다. LLM 사용의 법적·운영적 위험은 네 가지 독립적인 요소에 의해 결정됩니다.',
        ],
        subsections: [
          {
            title: '데이터 거주지',
            text: '모델 서버가 물리적으로 위치한 곳입니다. 서버가 EU 내에 있고, 모델 제공업체가 계약상으로 데이터를 EU 내에 보관하기로 약정하면 데이터 거주지 위험은 낮습니다. SCC 없이 EU 외부에 서버가 있으면 데이터 거주지 위험은 높습니다.',
          },
          {
            title: '학습 데이터 관할권',
            text: '학습 데이터와 제공업체의 보존 권리를 규율하는 국가의 법률입니다. 미국 데이터법(CFAA, SCA)은 법 집행 기관의 접근을 허용합니다. 중국 데이터법(PIPL)은 훨씬 광범위한 국가 접근 권한을 의무화합니다. EU 데이터는 GDPR 및 ePrivacy 지침에 따라 보호됩니다.',
          },
          {
            title: 'ToS 데이터 보존',
            text: '추론이 완료된 후 데이터를 보관하는 것에 대해 이용약관은 무엇을 말하고 있습니까? OpenAI와 DeepSeek는 여러 포럼에서 모델 개선 또는 법적으로 의무화된 공개를 위해 사용자 프롬프트를 보존할 수 있다고 밝혔습니다. Qwen과 Llama를 로컬로 실행하면 ToS가 없으며 보존은 사용자가 통제합니다.',
          },
          {
            title: 'SCC / TIA 요건',
            text: 'EU 개인정보를 EU 밖으로 이전하려면 제5장의 이전 메커니즘이 필요합니다. 적정성 결정(인증받은 미국 기업에 적용되는 EU-US 데이터 프라이버시 프레임워크(DPF) 등) 또는 표준 계약 조항(SCC)과 이전 영향 평가(TIA)가 그것입니다. DPF는 2025년 9월 EU 일반법원에서 유효하다고 판단되었으나, 항소(사건 C-703/25 P)가 EU 사법재판소에 계류 중이므로 SCC가 여전히 대체 수단입니다. 클라우드 API는 이를 필요로 하지만 로컬 모델은 그렇지 않습니다.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: '리스크 매트릭스: 모델별 비교',
        content: [
          '아래 표는 각 배포 옵션의 GDPR 리스크 프로필을 요약합니다. 점수가 높을수록 법적·운영적 위험이 높습니다.',
        ],
        columns: ['배포 환경', '데이터 거주지', '학습 데이터 관할권', 'ToS 보존 위험', 'SCC / TIA 필요 여부', '전체 위험 수준'],
        rows: [
          { '배포 환경': 'DeepSeek API', '데이터 거주지': '중국(중국 본토 서버)', '학습 데이터 관할권': '중국(PIPL)', 'ToS 보존 위험': '정책상 당국 공유 허용', 'SCC / TIA 필요 여부': '적정성 결정 없음; SCC+TIA 어려움', '전체 위험 수준': '🔴 최고' },
          { '배포 환경': 'Claude API(자사 직접)', '데이터 거주지': '미국 또는 글로벌; EU 전용 없음', '학습 데이터 관할권': '미국', 'ToS 보존 위험': 'Anthropic DPA 기준; 보존 확인', 'SCC / TIA 필요 여부': 'DPF 또는 SCC(DPA 포함) + TIA', '전체 위험 수준': '🟠 중상' },
          { '배포 환경': 'Claude(Bedrock / Vertex AI EU)', '데이터 거주지': 'EU 리전(엔드포인트로 지정)', '학습 데이터 관할권': '미국 벤더, EU 처리', 'ToS 보존 위험': '클라우드 제공업체 약관 적용', 'SCC / TIA 필요 여부': '계약에 따라 다름; TIA 검토', '전체 위험 수준': '🟡 중간' },
          { '배포 환경': 'GPT-5.6 Luna API(기본)', '데이터 거주지': '미국(기본 프로젝트)', '학습 데이터 관할권': '미국', 'ToS 보존 위험': 'DPA 제공; API 약관에 따름', 'SCC / TIA 필요 여부': 'DPF 또는 SCC + TIA', '전체 위험 수준': '🟠 중상' },
          { '배포 환경': 'OpenAI API(EU 프로젝트)', '데이터 거주지': 'EU, 리전 내 처리', '학습 데이터 관할권': '미국 벤더, EU 처리', 'ToS 보존 위험': '리전 내 데이터 제로 보존', 'SCC / TIA 필요 여부': '감소; DPA에서 확인', '전체 위험 수준': '🟡 중간' },
          { '배포 환경': 'Llama 4 Scout(로컬)', '데이터 거주지': '자체 하드웨어(LAN)', '학습 데이터 관할권': '오픈 웨이트, 벤더 보존 없음', 'ToS 보존 위험': '로컬 로그로 보존을 직접 통제', 'SCC / TIA 필요 여부': '없음', '전체 위험 수준': '🟢 최저' },
          { '배포 환경': 'Qwen3.8-27B(로컬)', '데이터 거주지': '자체 하드웨어(LAN)', '학습 데이터 관할권': '오픈 웨이트(Apache 2.0)', 'ToS 보존 위험': '로컬 로그로 보존을 직접 통제', 'SCC / TIA 필요 여부': '없음', '전체 위험 수준': '🟢 최저' },
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: '모델별 판정 및 권장 용도',
        content: [
          '이 섹션을 통해 GDPR 컴플라이언스 상황에 맞는 각 배포 방식을 파악하십시오.',
        ],
        subsections: [
          {
            title: 'DeepSeek API — GDPR 워크플로에서 사용 금지',
            text: 'DeepSeek 호스팅 API는 여기서 비교한 옵션 중 리스크가 가장 높습니다. (1) 개인정보 처리방침상 데이터가 중화인민공화국 서버에 저장되며, PIPL 등 관련 법률이 당국에 광범위한 접근 권한을 부여하고, (2) EU는 중국에 대한 적정성 결정을 내리지 않았고, SCC는 이전 영향 평가로 대상국 법률이 SCC를 훼손하지 않음을 입증할 수 있을 때만 도움이 되는데 이 경우에는 입증이 매우 어려우며, (3) 처리방침이 법적으로 요구되는 경우 당국에 대한 공개를 허용합니다. 규제 당국도 움직였습니다. 이탈리아 Garante는 2025년 이탈리아 사용자 데이터에 대한 DeepSeek의 처리를 제한했고, 베를린 개인정보 보호 감독관은 Apple과 Google에 앱 검토를 요청했습니다. 프롬프트에 EU 거주자의 개인정보가 포함된다면 호스팅 API 사용은 유효한 제44조 이전 근거를 갖추지 못했을 가능성이 높습니다. DeepSeek 오픈 웨이트를 로컬로 실행하면 다른 로컬 모델과 마찬가지로 이전 리스크가 낮지만, 모델 라이선스와 자체 보안 환경을 확인하십시오.',
          },
          {
            title: 'Claude API — 중간 위험, 이전 메커니즘으로 관리 가능',
            text: 'Anthropic의 DPA는 SCC를 포함하고 Anthropic을 처리자로 명시하므로, 문서화된 이전 메커니즘과 이전 영향 평가를 갖추면 Claude API를 GDPR 하에서 사용할 수 있습니다. Anthropic 자체 API는 글로벌(기본)과 미국의 두 가지 추론 지역만 제공하며 EU 전용 옵션은 없고, 워크스페이스의 저장 데이터는 현재 미국에만 보관됩니다([Anthropic 데이터 거주지 문서](https://platform.claude.com/docs/en/manage-claude/data-residency)). EU 내 처리가 필요한 조직은 EU 리전을 지정한 Amazon Bedrock 또는 Google Vertex AI를 통해 Claude를 사용할 수 있으며, 이 경우 클라우드 제공업체의 계약과 엔드포인트 선택이 거주지를 결정합니다. 고감도 데이터(건강, 금융, 생체정보)는 로컬 배포가 여전히 더 안전한 선택입니다.',
          },
          {
            title: 'GPT-5.6 Luna API — 중간 위험, EU 프로젝트로 낮출 수 있음',
            text: 'OpenAI는 데이터 처리 부속서(DPA)를 제공하며, 해당되는 API 고객에게는 유럽 데이터 거주지도 제공합니다. 유럽을 지역으로 지정해 만든 새 프로젝트는 데이터 제로 보존으로 리전 내에서 처리됩니다([OpenAI 발표](https://openai.com/index/introducing-data-residency-in-europe/)). 기존 프로젝트는 전환할 수 없으므로 새 프로젝트를 만들어 마이그레이션해야 합니다. EU 프로젝트가 없으면 요청은 기본적으로 미국에서 처리되며, EU-US 데이터 프라이버시 프레임워크 또는 SCC와 이전 영향 평가가 필요합니다. 어느 경우든 DPA, 법적 근거, 리스크 평가가 이를 다루지 않는 한 건강, 금융, 생체, 유전자 정보는 전송하지 마십시오.',
          },
          {
            title: 'Llama 4 Scout(로컬) — 최저 위험, 다만 하드웨어 부담이 큼',
            text: 'Llama 가중치는 Meta의 커뮤니티 라이선스 하에 공개되어 있으며, 상업적 배포 전에 확인해야 할 사용 조건이 있습니다. Llama를 로컬로 실행하면 (1) 제44조 이전이 없고, (2) 모든 데이터 보존을 사용자가 통제하며, (3) SCC나 TIA가 필요 없고, (4) 제25조의 프라이버시 바이 디자인을 입증하기가 더 쉽습니다. Llama 4 Scout은 1090억 파라미터의 전문가 혼합(MoE) 모델로, 4비트 가중치만 약 55–60 GB가 필요하므로 80 GB GPU 한 장 이상을 계획해야 하고 긴 컨텍스트에는 추가 메모리가 필요합니다. 더 작은 오픈 모델은 일반 소비자용 하드웨어에서 실행됩니다.',
          },
          {
            title: 'Qwen3.8-27B(로컬) — 최저 위험, 이전 없음',
            text: 'Qwen3.8-27B는 Apache 2.0으로 공개된 오픈 웨이트 모델입니다. 로컬로 실행하면 제44조 이전이 없고, 보존을 완전히 통제할 수 있으며, SCC나 TIA도 필요 없습니다. 양자화하면 일반적으로 24 GB GPU에 들어가므로 Llama 4 Scout보다 훨씬 쉽게 배포할 수 있습니다. 12–16 GB 카드에는 Qwen3 14B가 여전히 더 가벼운 선택지입니다. 라이선스는 Qwen 제품군 안에서도 다르므로(Alibaba의 최대 플래그십 가중치는 다른 조건을 사용합니다) 배포하려는 모델의 모델 카드에서 라이선스를 확인하십시오. 로컬에서 실행하는 Qwen 가중치는 Alibaba Cloud 호스팅 API와 다르며, 후자는 별도의 이전 평가 대상입니다.',
          },
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: '조직 유형별 권장 스택',
        content: [
          '올바른 LLM 스택은 조직의 데이터 민감도, 예산, 규제 태세에 따라 달라집니다. 이 권장 사항을 조달 결정의 출발점으로 활용하십시오.',
        ],
        subsections: [
          {
            title: '초기 스타트업(낮은 규제 압력)',
            text: '벤더의 DPA 하에서 Claude 또는 OpenAI API를 사용하고, 고객이 EU 내 처리를 요구하면 OpenAI EU 프로젝트나 EU 클라우드 리전을 선택하십시오. 근거: 둘 다 프로덕션 준비가 되어 있고 운영 부담이 낮으며, SCC나 데이터 프라이버시 프레임워크는 미국 기반 AI 벤더에게 표준입니다. 실험적 사용 비용은 보통 월 몇 달러입니다. 데이터가 저감도(익명 사용 패턴, 일반 비즈니스 로직)인 동안에는 리스크를 허용할 수 있습니다. 헬스케어나 핀테크로 성장하면 Qwen3.8-27B 같은 로컬 모델로 마이그레이션하십시오.',
          },
          {
            title: '직원/고객 데이터를 보유한 중소기업(중간 규제 압력)',
            text: 'Qwen3.8-27B(작은 카드에서는 Qwen3 14B)를 로컬로 사용하십시오. 근거: 개인정보(직원 명단, 고객 연락처, 거래 내역)를 처리하므로, 이전이 없는 아키텍처가 이전 문제를 아예 없애 줍니다. 24 GB GPU 한 장이면 양자화된 Qwen3.8-27B를, 12 GB GPU면 Q4의 Qwen3 14B를 실행할 수 있습니다. 하드웨어는 일회성 비용에 전기료가 듭니다. Ollama로 설정하는 데는 보통 1시간 미만이 걸립니다. 적법한 근거, 처리 기록, 보안 조치는 여전히 필요하지만 SCC, TIA, 벤더 DPA 협상은 필요 없습니다.',
          },
          {
            title: '기업(높은 규제 압력: 헬스케어, 핀테크, 법률)',
            text: '에어갭을 적용한 멀티 GPU 로컬 배포를 사용하십시오. 근거: 고감도 데이터에는 가장 강력한 아키텍처가 필요합니다. GPU가 여러 장이면 Llama 4 Scout이나 더 큰 Qwen 변형 같은 대형 오픈 웨이트 모델을 낮은 지연으로 실행할 수 있습니다. 에어갭은 추론 클러스터가 외부 인터넷에 접근할 수 없음을 뜻하므로, 외부 네트워크 연결이라는 프롬프트 유출 경로가 사라집니다. 하드웨어에 수만 달러, 인프라 작업에 1–2주를 예산으로 잡으십시오. 이는 제32조(보안)와 접근 로그를 통한 제30조 감사 추적을 뒷받침합니다.',
          },
          {
            title: '기존 법적 계약을 보유한 조직(특수 사례)',
            text: 'Anthropic 또는 OpenAI와 이미 데이터 처리 부속서(DPA)를 체결했다면 그것을 기반으로 하십시오. 로컬 배포로 전환하는 비용이 기존 계약을 확장하는 비용보다 큰 경우가 많으며, SCC 또는 데이터 프라이버시 프레임워크 적용 범위가 포함된 현행 DPA와 완료된 TIA가 있으면 리스크를 관리할 수 있습니다. 결정 전에 법무팀과 검토하고, 계류 중인 데이터 프라이버시 프레임워크 항소가 미국 이전 근거를 바꾸면 계약을 다시 확인하십시오.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'SCC를 사용하면 DeepSeek가 GDPR을 준수합니까?',
            a: '가능성이 매우 낮습니다. SCC는 이전 영향 평가로 대상국 법률이 SCC를 훼손하지 않음을 입증할 수 있을 때만 유효합니다. 중국 본토에는 EU 적정성 결정이 없고, PIPL은 당국에 데이터에 대한 광범위한 접근 권한을 주며, DeepSeek의 개인정보 처리방침은 법적으로 요구되는 경우 당국에 대한 공개를 허용합니다. 규제 당국도 이미 움직였습니다. 이탈리아 Garante는 이탈리아 사용자 데이터에 대한 DeepSeek의 처리를 제한했고, 베를린 개인정보 보호 감독관은 Apple과 Google에 앱 검토를 요청했습니다. EU 거주자의 개인정보에는 DeepSeek 호스팅 API를 사용하지 마십시오. DeepSeek 오픈 웨이트는 자체 하드웨어에서 실행할 수 있어 이전이 사라지지만, 모델 라이선스와 보안 환경을 확인하십시오.',
          },
          {
            q: 'Claude 프롬프트를 EU 안에 둘 수 있습니까?',
            a: 'Anthropic 자체 API로는 불가능합니다. inference_geo 설정은 글로벌 또는 미국만 제공하며, 워크스페이스의 저장 데이터는 미국에만 보관됩니다. EU 리전 처리는 EU 리전을 지정한 Amazon Bedrock 또는 Google Vertex AI를 통해 Claude를 사용하면 가능합니다. 추론이 실행되는 위치는 클라우드 제공업체의 계약과 엔드포인트가 결정하므로 제공업체에 확인하십시오. Anthropic의 DPA는 이전에 대해 SCC를 포함합니다. 이전이 전혀 없는 가장 강력한 태세를 원한다면 Qwen3.8-27B나 Llama 4 Scout 같은 로컬 모델을 사용하십시오.',
          },
          {
            q: 'GDPR을 준수하는 LLM API는 무엇입니까?',
            a: 'API 자체만으로 준수가 되는 것은 아닙니다. GDPR 준수 여부는 사용 방식에 달려 있습니다. 네 가지를 확인하십시오. 벤더를 처리자로 만드는 서명된 DPA, 데이터가 EU 밖으로 나가는 경우의 유효한 이전 메커니즘(EU-US 데이터 프라이버시 프레임워크 또는 SCC와 TIA), 명확한 보존 및 학습 미사용 설정, 전송하는 개인정보에 대한 적법한 근거입니다. OpenAI는 해당 고객에게 EU 데이터 거주지 프로젝트와 DPA를 제공하고, Anthropic은 SCC를 포함한 DPA를 제공하며 EU 내 처리는 클라우드 제공업체 리전을 통해 가능합니다. DeepSeek 호스팅 API는 정당화하기가 가장 어렵습니다. 민감한 데이터에는 로컬 모델이 이전 문제를 아예 피할 수 있습니다.',
          },
          {
            q: 'GDPR 하에서 Qwen을 사용해도 안전합니까?',
            a: '실행 방식에 따라 다릅니다. Qwen 오픈 웨이트(예: Apache 2.0의 Qwen3.8-27B)를 자체 하드웨어에서 실행하면 Alibaba로 데이터가 전송되지 않으므로 제44조 이전이 없고 리스크 프로필은 Llama와 같습니다. Alibaba Cloud 호스팅 API는 다릅니다. 프롬프트를 EU 밖의 제공업체로 보내게 되므로 별도의 이전 평가, DPA, 리전 확인이 필요합니다. 라이선스는 Qwen 제품군 안에서도 다르므로 모델 카드에서 확인하십시오.',
          },
          {
            q: 'Llama 4 Scout을 Claude의 대체재로 사용할 수 있습니까?',
            a: 'GDPR 준수 측면에서는 원칙적으로 가능합니다. Llama 4 Scout은 오픈 웨이트이며 로컬로 실행할 수 있어 제44조 이전을 피합니다. 하드웨어와 성능 측면에서는 그대로 대체하기 어렵습니다. Scout은 1090억 파라미터의 전문가 혼합(MoE) 모델로 4비트에서 약 55–60 GB가 필요하므로 최소 80 GB GPU 한 장이 필요한 반면, Qwen3.8-27B는 양자화된 24 GB 카드에 들어갑니다. Claude는 독점 프런티어 모델이며 매우 복잡한 추론에서는 보통 더 강합니다. 먼저 자체 워크로드에서 테스트하십시오. Q&A, 요약, 일반적인 코드 작업에서는 로컬 모델이 경쟁력 있는 경우가 많습니다.',
          },
          {
            q: '감사 목적으로 프롬프트를 로컬에 로깅하면 어떻게 됩니까?',
            a: '로깅은 제30조 컴플라이언스를 위해 권장됩니다. 다음을 로깅하십시오: 모델 이름, 세션 타임스탬프, 입력 토큰 수, 출력 토큰 수, 프롬프트 및 응답의 SHA-256 해시. 개인정보가 포함된 프롬프트의 원문 텍스트는 로깅하지 마십시오. 해시 기반 로깅은 제5조 제1항 제e호(저장 제한)를 위반하지 않고도 제30조(처리 기록) 및 제32조(보안)를 충족합니다. 암호화된 접근 통제 시스템(예: 역할 기반 접근을 갖춘 로그 집계 서버)에 로그를 저장하십시오. DPA 표준에 따라 로그를 3년간 보존하십시오.',
          },
          {
            q: '온프레미스 LLM 실행이 클라우드 API보다 비용이 많이 듭니까?',
            a: '초기 비용: 그렇습니다. 하드웨어(RTX 4070 Ti) 비용은 약 $500–1000입니다. 월별 비용: 아닙니다. 온프레미스 전기 비용은 월 약 $5–10입니다. 클라우드 API는 1K 토큰당 $0.001–0.01이며, 대량 사용(월 >1M 토큰)의 경우 $100를 초과합니다. 손익분기점은 일반적으로 중간-대량 사용의 경우 6–12개월입니다. 월 <100K 토큰을 실행하는 경우 클라우드 API가 더 저렴합니다. 월 >1M 토큰을 실행하는 경우 온프레미스가 더 저렴합니다. GDPR 컴플라이언스는 추가적인 비즈니스 케이스입니다: 온프레미스는 SCC/TIA 법적 비용이 없습니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[데이터 프라이버시를 위한 DeepSeek 로컬 설정 2026](/ko/local-llms/deepseek-local-china-data-privacy-2026) -- 데이터 프라이버시를 위한 DeepSeek 로컬 설정',
          '[Qwen GDPR 로컬 설정 가이드 2026](/ko/local-llms/qwen-local-gdpr-setup-guide-2026) -- Qwen GDPR 로컬 설정 가이드',
          '[로컬 LLM을 이용한 기업 컴플라이언스](/ko/local-llms/enterprise-compliance-local-llms) -- 로컬 LLM을 이용한 기업 컴플라이언스',
          '[EU GDPR 클라우드 GPU 옵션 2026](/ko/local-llms/eu-cloud-gpu-gdpr-2026) -- EU GDPR 클라우드 GPU 옵션',
          '[로컬 LLM 보안 및 프라이버시 체크리스트](/ko/local-llms/local-llm-security-privacy-checklist) -- 로컬 LLM 보안 및 프라이버시 체크리스트',
          '[데이터 레지던시와 주권 AI: EU/GDPR 기업용 LLM 배포 가이드](/ko/local-llms/data-residency-sovereign-ai-eu-gdpr-enterprise) -- 여기서 비교한 모델 선택보다 상위에 있는 배포 아키텍처 문제',
        ],
      },
    },
    snippetBlocks: [
      {
        sectionId: 'risk-vectors',
        oneLineSentence: 'LLM에 대한 GDPR 리스크는 데이터 거주지, 학습 데이터 관할권, ToS 보존 정책, SCC/TIA 요건에 의해 결정됩니다.',
        plainTerms: 'LLM 선택은 데이터가 어디에 있는지, 어느 나라가 모델을 소유하는지, 벤더가 데이터를 얼마나 오래 보관하는지, 국경을 초과하여 데이터를 이동하기 위해 법적 계약이 필요한지에 따라 GDPR에 영향을 미칩니다.',
      },
    ],
  },
}
