import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '../types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPR Risk Comparison: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR Risk Matrix: LLM Comparison Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR-compliant LLM comparison: DeepSeek API (highest risk), Qwen local (lowest), Llama local, Claude/GPT API (mid-risk). Risk matrix by data residency, jurisdiction, ToS, and SCC requirements. Updated May 2026.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min read',
    educationalLevel: 'Advanced',
    audience: 'CISOs, procurement teams, and compliance officers choosing between proprietary and open-weight LLMs',
    primaryTerm: 'GDPR risk comparison LLM models',
    leadAnswerBlock: '**DeepSeek API presents the highest GDPR risk of any major LLM due to Chinese data-access law (PIPL); Qwen and Llama run locally carry equivalent low risk; Claude and GPT-4o APIs with EU residency carry medium risk and require Standard Contractual Clauses (SCCs).**',
    current_models_mentioned: ['DeepSeek', 'DeepSeek API', 'Qwen 2.5 14B', 'Qwen local', 'Llama 4 Scout', 'Claude 3.5 Sonnet', 'GPT-5.5 Instant', 'Claude Opus 4.7'],
    current_hardware_mentioned: ['16 GB VRAM', '24 GB VRAM', 'multi-GPU'],
    quickAnswerTop: {
      en: {
        question: 'Which LLM is safest under GDPR?',
        answer: 'Qwen 2.5 14B or Llama 4 Scout run locally on your own hardware—no data leaves your jurisdiction, no Article 44 transfer, no SCC or TIA needed. DeepSeek API is highest-risk because servers obey Chinese data law (PIPL). Claude and GPT-4o APIs require EU data residency + SCCs for medium-risk compliance.',
        bullets: [
          'Qwen local: Lowest risk. No transfer, Apache 2.0 weights, 12–24 GB VRAM, <30 min setup.',
          'DeepSeek API: Highest risk. PIPL jurisdiction, no EU adequacy, ToS allows state-mandated data sharing.',
          'Claude/GPT EU+SCC: Medium risk. Residency contracts + SCCs help but still involve transfer.',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welches LLM ist unter DSGVO am sichersten?',
        answer: 'Qwen 2.5 14B oder Llama 4 Scout lokal auf eigener Hardware — keine Daten verlassen die Gerichtsbarkeit, kein Artikel-44-Transfer, keine SCC oder TIA erforderlich. DeepSeek API ist höchstes Risiko, da Server chinesisches Datenrecht (PIPL) befolgen. Claude und GPT-4o APIs erfordern EU-Datenspeicherung + SCCs für mittleres Konformitätsrisiko.',
        bullets: [
          'Qwen lokal: Geringestes Risiko. Kein Transfer, Apache-2.0-Gewichte, 12–24 GB VRAM, <30-Minuten-Setup.',
          'DeepSeek API: Höchstes Risiko. PIPL-Jurisdiktion, keine EU-Adäquanz, ToS ermöglicht staatlich angeforderte Datenteilung.',
          'Claude/GPT EU+SCC: Mittleres Risiko. Wohnortsverträge + SCCs helfen, aber immer noch Transfer erforderlich.',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quel LLM est le plus sûr selon le RGPD ?',
        answer: 'Qwen 2.5 14B ou Llama 4 Scout exécutés localement sur votre propre matériel — aucune donnée ne quitte votre juridiction, aucun transfert Article 44, aucune SCC ou TIA requise. DeepSeek API présente le risque le plus élevé car les serveurs obéissent à la loi chinoise sur les données (PIPL). Les API Claude et GPT-4o nécessitent une résidence des données dans l\'UE + SCC pour un risque de conformité moyen.',
        bullets: [
          'Qwen local : Risque le plus faible. Aucun transfert, poids Apache 2.0, 12–24 Go VRAM, configuration < 30 min.',
          'DeepSeek API : Risque le plus élevé. Juridiction PIPL, pas d\'adéquation UE, ToS permet le partage de données mandaté par l\'État.',
          'Claude/GPT EU+SCC : Risque moyen. Contrats de résidence + SCC aident mais impliquent toujours un transfert.',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'GDPRの下で最も安全なLLMは何ですか？',
        answer: 'Qwen 2.5 14BまたはLlama 4 Scoutを自分のハードウェア上でローカル実行——データはあなたの管轄権を離れず、第44条転送なし、SCC or TIA不要。DeepSeek APIは中国データ法（PIPL）に従うサーバーのため最高リスク。Claude/GPT-4o APIはEUデータ拠点+SCCで中程度リスク対応が必要。',
        bullets: [
          'Qwen local：最低リスク。転送なし、Apache 2.0ウェイト、12–24 GB VRAM、<30分セットアップ。',
          'DeepSeek API：最高リスク。PIPL管轄権、EU妥当性なし、ToS国家命令によるデータ共有を許可。',
          'Claude/GPT EU+SCC：中程度リスク。拠点契約+SCC有効だが転送は必須。',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '在GDPR下哪个LLM最安全？',
        answer: 'Qwen 2.5 14B或Llama 4 Scout在您自己的硬件上本地运行——数据不离开您的司法管辖区、无第44条转移、无需SCC或TIA。DeepSeek API风险最高，因为服务器受中国数据法律（PIPL）约束。Claude和GPT-4o API需要EU数据驻留+SCC才能获得中等风险合规。',
        bullets: [
          'Qwen本地：风险最低。无转移，Apache 2.0权重，12–24 GB VRAM，<30分钟设置。',
          'DeepSeek API：风险最高。PIPL管辖权、无EU充分性、ToS允许政府命令数据共享。',
          'Claude/GPT EU+SCC：中等风险。驻留合同+SCC有效但仍需转移。',
        ],
        updatedDate: '2026-05',
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
          'DeepSeek API is highest-risk: servers are subject to Chinese data-access law (PIPL), there is no EU adequacy decision for China, and the ToS explicitly allows data sharing with Chinese authorities',
          'Qwen 2.5 14B and Llama 4 Scout run locally are lowest-risk: no Article 44 transfer, no SCC required, data stays on your hardware',
          'Claude API and GPT-5.5 Instant are medium-risk: US jurisdiction requires Standard Contractual Clauses + Transfer Impact Assessment; EU-data-residency options (Claude EU) reduce risk',
          'Recommended stacks: startups (Claude + SCC), data-sensitive orgs (Qwen 24 GB local), enterprises (multi-GPU Qwen + air-gap)',
          'Risk decision matrix covers five vectors: data residency, training-data jurisdiction, ToS data retention, SCC requirement, and legal verdict',
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
            text: 'Post-Schrems II, any transfer of EU personal data outside the EU requires Standard Contractual Clauses (SCCs) plus a Transfer Impact Assessment (TIA) to confirm the destination jurisdiction provides adequate protection. Cloud APIs require this; local models do not.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Risk Matrix: Model-by-Model Comparison',
        content: [
          'The table below summarizes the GDPR risk profile of each deployment option. Higher scores indicate higher legal and operational risk.',
        ],
        tableData: {
          headers: ['Deployment', 'Data Residency', 'Training-Data Jurisdiction', 'ToS Retention Risk', 'SCC / TIA Required?', 'Overall Risk Level'],
          rows: [
            {
              cells: ['DeepSeek API', 'China (Alibaba Cloud)', 'China (PIPL)', 'Explicitly reserves right to share with authorities', 'Yes, but ineffective (no EU-China adequacy)', '🔴 Highest'],
            },
            {
              cells: ['Claude API (US)', 'US (Virginia)', 'US', 'Anthropic commits to deletion on request; 30-day default retention', 'Yes, requires SCC + TIA', '🟠 Medium-High'],
            },
            {
              cells: ['GPT-4o (US)', 'US (multiple regions)', 'US', 'OpenAI may retain for model improvement; policy opaque', 'Yes, requires SCC + TIA', '🟠 Medium-High'],
            },
            {
              cells: ['Claude (EU data residency)', 'EU (Ireland or Germany)', 'US (Anthropic), data stays EU', 'Anthropic commits to EU-only residency + GDPR compliance', 'Yes, SCC adequate due to EU processing', '🟡 Medium'],
            },
            {
              cells: ['Llama 4 Scout (local)', 'Your hardware (LAN)', 'Open-source, no commercial retention', 'You control retention via local logs only', 'No', '🟢 Lowest'],
            },
            {
              cells: ['Qwen 2.5 14B (local)', 'Your hardware (LAN)', 'Open-source (Apache 2.0), no commercial retention', 'You control retention via local logs only', 'No', '🟢 Lowest'],
            },
          ],
        },
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
            text: 'DeepSeek API presents the highest risk of any major LLM because: (1) servers are in mainland China, subject to PIPL data-access mandates; (2) there is no EU-China adequacy decision (Schrems II renders SCCs insufficient); (3) the ToS explicitly reserves the right to share data with Chinese authorities. If your prompts contain personal data of EU residents, DeepSeek API violates GDPR Article 44 unless you have explicit consent from each data subject and a documented legal basis for the transfer. For non-sensitive tasks (competitive analysis, brainstorming), risk is lower, but contract review is mandatory before any use.',
          },
          {
            title: 'Claude API (US) — Medium risk, manageable with SCC + TIA',
            text: 'Claude API requires Standard Contractual Clauses and a Transfer Impact Assessment, but is more compliant than GPT-4o because: (1) Anthropic has a clearer commitment to deletion on request; (2) Anthropic has published Data Processing Addenda (DPA) that explicitly reference GDPR Articles 28 and 32; (3) US law, while allowing law-enforcement access, does not mandate commercial data retention. For non-sensitive personal data (job titles, generic business context), Claude API with SCC + TIA is acceptable. For high-sensitivity data (health, financial, biometric), local deployment is required.',
          },
          {
            title: 'Claude (EU data residency) — Medium risk, lower due to EU processing',
            text: 'Anthropic offers an EU data residency option where prompts are processed in Ireland or Germany. This reduces risk because: (1) data stays within the EU during processing; (2) data is deleted after 30 days; (3) Anthropic commits to GDPR compliance. However, the training data behind Claude models is still US-trained, and Anthropic is a US company, so full Article 44 compliance still requires SCCs. Better than US Claude for GDPR, but not equivalent to local deployment.',
          },
          {
            title: 'GPT-4o / GPT-5.5 Instant — Medium-high risk',
            text: 'OpenAI APIs carry higher risk than Claude because: (1) OpenAI\'s data retention policy is opaque — the company has said it may retain user data for "research and safety improvements"; (2) no published DPA; (3) no EU data residency option. If you choose OpenAI, require explicit SCC + comprehensive TIA, and avoid sending high-sensitivity data (health, financial, biometric, genetic). For low-sensitivity tasks, acceptable with SCC.',
          },
          {
            title: 'Llama 4 Scout (local) — Lowest risk, no transfer',
            text: 'Llama weights are open-source under a commercial-use-friendly license. Running Llama locally on your own hardware means: (1) zero Article 44 transfer; (2) you control all data retention; (3) no SCC or TIA required; (4) full Article 25 (privacy by design) compliance. Suitable for all data sensitivity levels. Llama 4 Scout at 8 GB or Llama 3.2 70B at 48 GB covers most enterprise use cases.',
          },
          {
            title: 'Qwen 2.5 / 3 (local) — Lowest risk, no transfer',
            text: 'Qwen weights are open-source under Apache 2.0. Like Llama, running Qwen locally means: (1) zero Article 44 transfer; (2) you control retention; (3) no legal basis required (no transfer = no transfer risk). Qwen 2.5 14B is the most widely deployed in Europe due to excellent multilingual performance and a smaller VRAM footprint (12–16 GB vs Llama 3.2 70B\'s 48 GB). Suitable for all sensitivity levels.',
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
            text: 'Use Claude API with SCC. Rationale: Claude is high-quality, production-ready, managed overhead is low, and SCCs are standard for US-based AI vendors. Cost is ~$3–5/month for experimental use. Risk is acceptable because: startup data is typically low-sensitivity (anonymous usage patterns, generic business logic). If you grow into healthcare or fintech, migrate to local Qwen.',
          },
          {
            title: 'SME with employee/customer data (medium regulatory pressure)',
            text: 'Use Qwen 2.5 14B or Llama 3.2 32B locally. Rationale: You handle personal data (employee roster, customer contact info, transaction history), so zero-transfer architecture is required. Deploy on a single on-prem GPU (RTX 4070 Ti, 12 GB VRAM for Qwen 2.5 at Q4 quantization). Cost is ~$500 one-time hardware + ~$100/year electricity. Setup time: <1 hour (Ollama is trivial). Compliance burden: zero (no SCC, no TIA, no DPA negotiation).',
          },
          {
            title: 'Enterprise (high regulatory pressure: healthcare, fintech, law)',
            text: 'Use multi-GPU Qwen 3 33B with air-gap deployment. Rationale: High sensitivity data requires the strongest possible architecture. Multi-GPU (2× RTX 3090 or 4× RTX 4090) allows you to run larger, more capable models with lower latency. Air-gap means the inference cluster has no outbound internet access — prompts cannot leak, even if a vulnerability is discovered. Cost is ~$5–15K hardware, setup 1–2 weeks by your infrastructure team. Compliance: Full GDPR Article 32 (security) satisfaction, Article 30 audit trail with full access logs.',
          },
          {
            title: 'Organization with existing legal agreement (special case)',
            text: 'If you already have a Data Processing Addendum (DPA) with Claude or OpenAI, use those. The switching cost of migrating to local is often lower than renegotiating your DPA, and if the existing agreement is recent (2024–2026) and includes SCC + TIA, the risk is manageable. Review with your legal team before deciding.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Is DeepSeek GDPR compliant if I use it with an SCC?',
            a: 'No. SCCs alone do not satisfy GDPR Article 44 transfers to mainland China because: (1) there is no EU-China adequacy decision post-Schrems II; (2) Chinese law (PIPL) mandates that companies share data with state authorities on request, which SCCs cannot override; (3) Anthropic, OpenAI, and other major vendors do not offer SCC enforcement in China—they refuse to operate there. For any personal data of EU residents, do not use DeepSeek API. If you need DeepSeek, use the local weights (run `ollama run deepseek-coder:latest` on your hardware).',
          },
          {
            q: 'Does using Claude EU with SCC satisfy GDPR?',
            a: 'Mostly yes, with caveats. Claude EU keeps your data in Ireland or Germany during processing and deletes it within 30 days. Anthropic has published a GDPR-compliant DPA and SCC. However, Claude models were trained on US-based data, and Anthropic is a US company, so technically there is still a "transfer" in the form of model training and vendor relationship. For practical compliance, Claude EU + SCC is acceptable for most organizations. For the absolute strongest posture (no transfer risk at all), use local Qwen or Llama.',
          },
          {
            q: 'Can I use Llama 4 Scout as a drop-in replacement for Claude?',
            a: 'For GDPR compliance: yes. Llama 4 Scout is open-source and can run locally, so it satisfies Articles 44, 25, and 32 fully. For capability and performance: maybe. Llama 4 Scout is smaller (8 GB VRAM) than Claude (which is proprietary and very large), so it is faster and cheaper to run locally, but may be less capable on some benchmarks. Test on your workload first. For simple Q&A, summarization, and code tasks, Llama 4 Scout is competitive. For very complex reasoning, Claude is still better, but local Qwen 2.5 14B or Llama 3.2 70B can handle most enterprise tasks.',
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
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Comparación de riesgos RGPD: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'Matriz de riesgo RGPD: Qwen, DeepSeek, Llama y Claude',
    metaDescription: 'Comparación de LLM conforme al RGPD: DeepSeek API (mayor riesgo), Qwen local (menor riesgo), Llama local y Claude/GPT API (riesgo medio). Matriz por datos.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min de lectura',
    educationalLevel: 'Advanced',
    audience: 'CISOs, equipos de adquisiciones y responsables de cumplimiento que eligen entre LLMs propietarios y de pesos abiertos',
    primaryTerm: 'comparación de riesgo RGPD modelos LLM',
    leadAnswerBlock: '**La API de DeepSeek presenta el mayor riesgo RGPD de cualquier LLM importante debido a la ley china de acceso a datos (PIPL); Qwen y Llama ejecutados localmente tienen un riesgo igualmente bajo; las API de Claude y GPT-4o con residencia EU tienen riesgo medio y requieren Cláusulas Contractuales Estándar (SCCs).**',
    current_models_mentioned: ['DeepSeek', 'DeepSeek API', 'Qwen 2.5 14B', 'Qwen local', 'Llama 4 Scout', 'Claude 3.5 Sonnet', 'GPT-5.5 Instant', 'Claude Opus 4.7'],
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
          'La API de DeepSeek tiene el mayor riesgo RGPD de todos los LLMs importantes: los servidores están sujetos a la ley china de acceso a datos (PIPL), no existe decisión de adecuación UE-China, y los ToS permiten explícitamente compartir datos con las autoridades chinas',
          'Qwen 2.5 14B y Llama 4 Scout ejecutados localmente son los de menor riesgo: sin transferencia según el Artículo 44, sin SCC requerida, los datos permanecen en tu hardware',
          'Las API de Claude y GPT-5.5 Instant tienen riesgo medio: la jurisdicción estadounidense requiere Cláusulas Contractuales Estándar más Evaluación de Impacto de Transferencia; las opciones de residencia de datos en la UE (Claude EU) reducen el riesgo',
          'Stacks recomendados: startups (Claude + SCC), organizaciones con datos sensibles (Qwen 24 GB local), empresas (Qwen multi-GPU + air-gap)',
          'La matriz de decisión de riesgo cubre cinco vectores: residencia de datos, jurisdicción de datos de entrenamiento, retención de datos en ToS, requisito SCC y veredicto legal',
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
            text: 'Tras el caso Schrems II, cualquier transferencia de datos personales de la UE fuera de la UE requiere Cláusulas Contractuales Estándar (SCCs) más una Evaluación de Impacto de Transferencia (TIA) para confirmar que la jurisdicción de destino ofrece protección adecuada. Las API en la nube requieren esto; los modelos locales no.',
          },
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Matriz de riesgo: comparación modelo por modelo',
        content: [
          'La siguiente tabla resume el perfil de riesgo RGPD de cada opción de despliegue. Una puntuación más alta indica mayor riesgo legal y operativo.',
        ],
        tableData: {
          headers: ['Despliegue', 'Residencia de datos', 'Jurisdicción de datos de entrenamiento', 'Riesgo de retención en ToS', '¿SCC / TIA requerida?', 'Nivel de riesgo global'],
          rows: [
            {
              cells: ['DeepSeek API', 'China (Alibaba Cloud)', 'China (PIPL)', 'Se reserva explícitamente el derecho a compartir datos con las autoridades', 'Sí, pero ineficaz (sin adecuación UE-China)', '🔴 Mayor'],
            },
            {
              cells: ['Claude API (EE. UU.)', 'EE. UU. (Virginia)', 'EE. UU.', 'Anthropic se compromete a eliminar los datos bajo petición; retención por defecto de 30 días', 'Sí, requiere SCC + TIA', '🟠 Medio-alto'],
            },
            {
              cells: ['GPT-4o (EE. UU.)', 'EE. UU. (múltiples regiones)', 'EE. UU.', 'OpenAI puede retener datos para mejorar el modelo; política opaca', 'Sí, requiere SCC + TIA', '🟠 Medio-alto'],
            },
            {
              cells: ['Claude (residencia de datos UE)', 'UE (Irlanda o Alemania)', 'EE. UU. (Anthropic), datos permanecen en la UE', 'Anthropic se compromete a residencia solo en la UE + cumplimiento RGPD', 'Sí, SCC adecuada por procesamiento en la UE', '🟡 Medio'],
            },
            {
              cells: ['Llama 4 Scout (local)', 'Tu hardware (LAN)', 'Código abierto, sin retención comercial', 'Tú controlas la retención solo a través de logs locales', 'No', '🟢 Menor'],
            },
            {
              cells: ['Qwen 2.5 14B (local)', 'Tu hardware (LAN)', 'Código abierto (Apache 2.0), sin retención comercial', 'Tú controlas la retención solo a través de logs locales', 'No', '🟢 Menor'],
            },
          ],
        },
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
            text: 'La API de DeepSeek presenta el mayor riesgo de cualquier LLM importante porque: (1) los servidores están en China continental, sujetos a los mandatos de acceso a datos de la PIPL; (2) no existe decisión de adecuación UE-China (Schrems II hace que las SCCs sean insuficientes); (3) los ToS se reservan explícitamente el derecho a compartir datos con las autoridades chinas. Si tus prompts contienen datos personales de residentes en la UE o en países latinoamericanos con leyes de protección de datos (LFPDPPP en México, Ley 25.326 en Argentina, Ley 1581 en Colombia), la API de DeepSeek viola el marco de protección aplicable salvo que tengas consentimiento explícito de cada interesado y una base legal documentada para la transferencia. Para tareas no sensibles (análisis de competencia, lluvia de ideas), el riesgo es menor, pero la revisión del contrato es obligatoria antes de cualquier uso.',
          },
          {
            title: 'Claude API (EE. UU.) — Riesgo medio, gestionable con SCC + TIA',
            text: 'La API de Claude requiere Cláusulas Contractuales Estándar y una Evaluación de Impacto de Transferencia, pero es más conforme que GPT-4o porque: (1) Anthropic tiene un compromiso más claro de eliminación bajo petición; (2) Anthropic ha publicado Addendas de Procesamiento de Datos (DPA) que hacen referencia explícita a los Artículos 28 y 32 del RGPD; (3) la ley de EE. UU., aunque permite el acceso de las autoridades, no obliga a retener datos comerciales. Para datos personales no sensibles (cargos de trabajo, contexto empresarial genérico), la API de Claude con SCC + TIA es aceptable. Para datos de alta sensibilidad (salud, financieros, biométricos), se requiere despliegue local.',
          },
          {
            title: 'Claude (residencia de datos UE) — Riesgo medio, reducido por procesamiento en la UE',
            text: 'Anthropic ofrece una opción de residencia de datos en la UE donde los prompts se procesan en Irlanda o Alemania. Esto reduce el riesgo porque: (1) los datos permanecen dentro de la UE durante el procesamiento; (2) los datos se eliminan a los 30 días; (3) Anthropic se compromete al cumplimiento del RGPD. Sin embargo, los datos de entrenamiento detrás de los modelos Claude son de entrenamiento en EE. UU., y Anthropic es una empresa estadounidense, por lo que el cumplimiento total del Artículo 44 sigue requiriendo SCCs. Mejor que Claude EE. UU. para el RGPD, pero no equivalente al despliegue local.',
          },
          {
            title: 'GPT-4o / GPT-5.5 Instant — Riesgo medio-alto',
            text: 'Las API de OpenAI conllevan mayor riesgo que Claude porque: (1) la política de retención de datos de OpenAI es opaca — la empresa ha dicho que puede retener datos de usuarios para "mejoras de investigación y seguridad"; (2) no hay DPA publicada; (3) no hay opción de residencia de datos en la UE. Si eliges OpenAI, exige SCC explícita + TIA exhaustiva, y evita enviar datos de alta sensibilidad (salud, financieros, biométricos, genéticos). Para tareas de baja sensibilidad, es aceptable con SCC.',
          },
          {
            title: 'Llama 4 Scout (local) — Menor riesgo, sin transferencia',
            text: 'Los pesos de Llama son de código abierto bajo una licencia amigable para uso comercial. Ejecutar Llama localmente en tu propio hardware significa: (1) cero transferencia según el Artículo 44; (2) tú controlas toda la retención de datos; (3) no se requiere SCC ni TIA; (4) cumplimiento total del Artículo 25 (privacidad desde el diseño). Apto para todos los niveles de sensibilidad de datos. Llama 4 Scout a 8 GB o Llama 3.2 70B a 48 GB cubre la mayoría de los casos de uso empresarial.',
          },
          {
            title: 'Qwen 2.5 / 3 (local) — Menor riesgo, sin transferencia',
            text: 'Los pesos de Qwen son de código abierto bajo Apache 2.0. Al igual que Llama, ejecutar Qwen localmente significa: (1) cero transferencia según el Artículo 44; (2) tú controlas la retención; (3) no se requiere base legal (sin transferencia = sin riesgo de transferencia). Qwen 2.5 14B es el más ampliamente desplegado en Europa y en organizaciones latinoamericanas con requisitos de privacidad estrictos, gracias a su excelente rendimiento multilingüe y menor huella de VRAM (12–16 GB frente a los 48 GB de Llama 3.2 70B). Apto para todos los niveles de sensibilidad.',
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
            text: 'Usa la API de Claude con SCC. Justificación: Claude es de alta calidad, listo para producción, la carga de gestión es baja, y las SCCs son estándar para proveedores de IA con sede en EE. UU. El costo es de aproximadamente $3–5/mes para uso experimental. El riesgo es aceptable porque los datos de las startups son típicamente de baja sensibilidad (patrones de uso anónimos, lógica empresarial genérica). Si creces en salud o fintech, migra a Qwen local.',
          },
          {
            title: 'PYME con datos de empleados/clientes (presión regulatoria media)',
            text: 'Usa Qwen 2.5 14B o Llama 3.2 32B localmente. Justificación: Gestionas datos personales (nómina de empleados, información de contacto de clientes, historial de transacciones), por lo que se requiere arquitectura de cero transferencia. Aplica tanto para RGPD en la UE como para LFPDPPP en México, Ley 25.326 en Argentina y Ley 1581 en Colombia. Despliega en una GPU on-prem (RTX 4070 Ti, 12 GB VRAM para Qwen 2.5 en cuantización Q4). Costo: ~$500 hardware único + ~$100/año en electricidad. Tiempo de configuración: menos de 1 hora (Ollama es trivial). Carga de cumplimiento: cero (sin SCC, sin TIA, sin negociación de DPA).',
          },
          {
            title: 'Empresa (alta presión regulatoria: salud, fintech, derecho)',
            text: 'Usa Qwen 3 33B multi-GPU con despliegue air-gap. Justificación: Los datos de alta sensibilidad requieren la arquitectura más robusta posible. Multi-GPU (2× RTX 3090 o 4× RTX 4090) permite ejecutar modelos más grandes y capaces con menor latencia. Air-gap significa que el clúster de inferencia no tiene acceso saliente a internet — los prompts no pueden filtrarse, incluso si se descubre una vulnerabilidad. Costo: ~$5–15K en hardware, 1–2 semanas de configuración por el equipo de infraestructura. Cumplimiento: Satisfacción total del Artículo 32 del RGPD (seguridad), registro de auditoría del Artículo 30 con logs de acceso completos.',
          },
          {
            title: 'Organización con acuerdo legal existente (caso especial)',
            text: 'Si ya tienes un Addendum de Procesamiento de Datos (DPA) con Claude u OpenAI, úsalos. El costo de cambiar a local suele ser inferior al de renegociar tu DPA, y si el acuerdo existente es reciente (2024–2026) e incluye SCC + TIA, el riesgo es manejable. Revisa con tu equipo legal antes de decidir.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Es DeepSeek conforme al RGPD si lo uso con una SCC?',
            a: 'No. Las SCCs por sí solas no satisfacen las transferencias del Artículo 44 del RGPD a China continental porque: (1) no existe decisión de adecuación UE-China tras Schrems II; (2) la ley china (PIPL) obliga a las empresas a compartir datos con las autoridades estatales bajo petición, lo que las SCCs no pueden anular; (3) Anthropic, OpenAI y otros grandes proveedores no ofrecen ejecución de SCCs en China y se niegan a operar allí. Para cualquier dato personal de residentes en la UE — o bajo leyes latinoamericanas equivalentes como la LFPDPPP (México), la Ley 25.326 (Argentina) o la Ley 1581 (Colombia) — no uses la API de DeepSeek. Si necesitas DeepSeek, usa los pesos locales (ejecuta `ollama run deepseek-coder:latest` en tu hardware).',
          },
          {
            q: '¿El uso de Claude EU con SCC satisface el RGPD?',
            a: 'En su mayor parte sí, con matices. Claude EU mantiene tus datos en Irlanda o Alemania durante el procesamiento y los elimina en 30 días. Anthropic ha publicado una DPA conforme al RGPD y SCCs. Sin embargo, los modelos Claude fueron entrenados con datos en EE. UU., y Anthropic es una empresa estadounidense, por lo que técnicamente sigue existiendo una "transferencia" en forma de entrenamiento del modelo y relación con el proveedor. Para el cumplimiento práctico, Claude EU + SCC es aceptable para la mayoría de las organizaciones. Para la postura más sólida (sin ningún riesgo de transferencia), usa Qwen o Llama local.',
          },
          {
            q: '¿Puedo usar Llama 4 Scout como sustituto directo de Claude?',
            a: 'Para el cumplimiento RGPD: sí. Llama 4 Scout es de código abierto y puede ejecutarse localmente, por lo que satisface plenamente los Artículos 44, 25 y 32. Para capacidad y rendimiento: quizás. Llama 4 Scout es más pequeño (8 GB VRAM) que Claude (que es propietario y muy grande), por lo que es más rápido y barato de ejecutar localmente, pero puede ser menos capaz en algunos benchmarks. Pruébalo en tu carga de trabajo primero. Para Q&A simple, resumen y tareas de código, Llama 4 Scout es competitivo. Para razonamiento muy complejo, Claude sigue siendo mejor, pero Qwen 2.5 14B local o Llama 3.2 70B pueden manejar la mayoría de las tareas empresariales.',
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
      url: 'https://www.promptquorum.com/es/local-llms/gdpr-llm-risk-comparison-2026?lang=es',
      inLanguage: 'es',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  de: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'DSGVO-Risikovergleich: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'DSGVO-Risikomatrix 2026: Qwen, DeepSeek, Llama, Claude',
    metaDescription: 'DSGVO-LLM-Vergleich: DeepSeek API (höchstes Risiko), Qwen lokal (niedrigstes), Llama lokal, Claude/GPT API. Risikomatrix nach Speicherung und ToS.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min Lesedauer',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API trägt das höchste DSGVO-Risiko aller großen LLMs, da Server dem chinesischen Datenzugangsgesetz (PIPL) unterliegen; Qwen und Llama lokal haben gleichwertiges niedriges Risiko',
          'Claude und GPT-4o APIs mit EU-Datenspeicherung tragen mittleres Risiko und erfordern Standardvertragsklauseln (SVKs)',
          'Empfohlene Stacks: Startups (Claude + SVK), datenempfindliche Orgs (Qwen 24 GB lokal), Unternehmen (Multi-GPU Qwen + Air-Gap)',
          'Risikoentscheidungsmatrix behandelt fünf Vektoren: Datenspeicherung, Ausbildungsdaten-Gerichtsbarkeit, ToS-Datenspeicherung, SVK-Anforderung und rechtliches Urteil',
          'Lokale Qwen- und Llama-Modelle erfüllen Artikel 44 (kein Transfer), Artikel 25 (Datenschutz durch Design) und Artikel 32 (Sicherheit)',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Vier DSGVO-Risikovektoren für LLMs',
        content: [
          'Das DSGVO-Risiko bei der Verwendung eines LLMs wird durch vier unabhängige Faktoren bestimmt: Datenspeicherung, Ausbildungsdaten-Gerichtsbarkeit, ToS-Datenspeicherung und SVK/TIA-Anforderungen.',
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Risikohauptrix: Modellweiser Vergleich',
        content: [
          'Die folgende Tabelle fasst das DSGVO-Risikoprofil der einzelnen Bereitstellungsoptionen zusammen.',
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Modellweises Urteil und empfohlene Verwendung',
        content: [
          'Verwenden Sie diesen Abschnitt, um zu verstehen, wann jede Bereitstellung für Ihre DSGVO-Compliance-Position angemessen ist.',
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Empfohlener Stack nach Organisationstyp',
        content: [
          'Der richtige LLM-Stack hängt von der Datenempfindlichkeit, dem Budget und der Compliance-Position Ihrer Organisation ab.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Ist DeepSeek DSGVO-konform, wenn ich es mit einer SVK verwende?',
            a: 'Nein. SVKs allein sind nicht ausreichend für DSGVO-Transfers nach Artikel 44 nach China, weil: (1) es keine EU-China-Angemessenheitsentscheidung nach Schrems II gibt; (2) chinesisches Gesetz (PIPL) Unternehmen verpflichtet, Daten mit staatlichen Behörden zu teilen; (3) große Anbieter weigern sich, mit SVKs in China zu operieren. Verwenden Sie DeepSeek API nicht für personenbezogene Daten von EU-Bewohnern. Für nicht-sensible Aufgaben ist das lokale Gewichtsmodell sicherer.',
          },
          {
            q: 'Erfüllt die Verwendung von Claude EU mit SVK die DSGVO?',
            a: 'Ja, mit Vorbehalten. Claude EU hält Ihre Daten während der Verarbeitung in Irland oder Deutschland und löscht sie nach 30 Tagen. Anthropic hat ein DSGVO-konformes DPA veröffentlicht. Technisch ist es jedoch immer noch ein "Transfer" aufgrund von Training und Beziehung. Für praktische Compliance ist Claude EU + SVK akzeptabel. Für die stärkste Position (kein Transferrisiko) verwenden Sie lokale Qwen oder Llama.',
          },
          {
            q: 'Kann ich Llama 4 Scout als direkten Ersatz für Claude verwenden?',
            a: 'Für DSGVO-Compliance: Ja. Llama ist Open-Source und kann lokal ausgeführt werden, daher erfüllt es die Anforderungen vollständig. Für Leistung: vielleicht. Llama ist kleiner als Claude, daher schneller und billiger lokal auszuführen, aber möglicherweise weniger fähig bei komplexen Aufgaben. Testen Sie es mit Ihrem Workload.',
          },
          {
            q: 'Was passiert, wenn ich meine Prompts lokal für Auditzwecke protokolliere?',
            a: 'Protokollierung wird für Artikel-30-Compliance empfohlen. Protokollieren Sie: Modellname, Sitzungs-Zeitstempel, Input-Token-Anzahl, Output-Token-Anzahl und einen SHA-256-Hash des Prompts und der Antwort. Protokollieren Sie NICHT den Rohtexte von Prompts mit personenbezogenen Daten. Hash-basierte Protokollierung erfüllt Artikel 30 (Verarbeitungsverzeichnis) und Artikel 32 (Sicherheit), ohne gegen Artikel 5(1)(e) (Speicherbegrenzung) zu verstoßen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'Comparaison des risques RGPD : Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'Matrice de risque RGPD : comparaison LLM Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'Comparaison LLM conforme au RGPD : DeepSeek API (risque le plus élevé), Qwen local (risque le plus faible), Llama local, API Claude/GPT (risque moyen). Matrice de risque par résidence des données, juridiction, ToS et exigences SCC. Mise à jour mai 2026.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8 min de lecture',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API présente le risque RGPD le plus élevé de tous les grands LLM car les serveurs sont soumis à la loi chinoise sur l\'accès aux données (PIPL) ; Qwen et Llama locaux portent un risque équivalent plus faible',
          'Claude et les API GPT-4o avec résidence des données dans l\'UE portent un risque moyen et nécessitent des clauses contractuelles types (CCT)',
          'Piles recommandées : startups (Claude + CCT), organisations sensibles aux données (Qwen 24 Go local), entreprises (Qwen multi-GPU + air-gap)',
          'La matrice de décision des risques couvre cinq vecteurs : résidence des données, juridiction des données d\'entraînement, conservation des données ToS et exigence CCT/TIA',
          'Les modèles Qwen et Llama locaux satisfont les articles 44 (pas de transfert), 25 (protection des données dès la conception) et 32 (sécurité)',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'Quatre vecteurs de risque RGPD pour les LLM',
        content: [
          'Le risque RGPD pour les LLM est déterminé par quatre facteurs indépendants : résidence des données, juridiction des données d\'entraînement, politiques de conservation des données ToS et exigences CCT/TIA.',
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'Matrice de risque : comparaison modèle par modèle',
        content: [
          'Le tableau ci-dessous résume le profil de risque RGPD de chaque option de déploiement.',
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'Verdict par modèle et utilisation recommandée',
        content: [
          'Utilisez cette section pour comprendre quand chaque déploiement est approprié pour votre posture de conformité RGPD.',
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: 'Pile recommandée par type d\'organisation',
        content: [
          'La bonne pile LLM dépend de la sensibilité des données, du budget et de la posture de conformité de votre organisation.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'DeepSeek est-il conforme au RGPD si je l\'utilise avec une CCT ?',
            a: 'Non. Les CCT seules ne satisfont pas les transferts RGPD Article 44 vers la Chine continentale car : (1) il n\'y a pas de décision d\'adéquation UE-Chine post-Schrems II ; (2) la loi chinoise (PIPL) mandate que les entreprises partagent les données avec les autorités gouvernementales ; (3) les principaux fournisseurs refusent d\'opérer avec des CCT en Chine. Pour les données personnelles des résidents de l\'UE, n\'utilisez pas DeepSeek API. Si vous avez besoin de DeepSeek, utilisez les poids locaux.',
          },
          {
            q: 'L\'utilisation de Claude EU avec CCT satisfait-elle le RGPD ?',
            a: 'Essentiellement oui, avec des réserves. Claude EU garde vos données en Irlande ou en Allemagne pendant le traitement et les supprime dans les 30 jours. Anthropic a publié une CCT conforme au RGPD. Cependant, les données d\'entraînement de Claude sont toujours basées aux États-Unis, et Anthropic est une entreprise américaine. Pour la conformité pratique, Claude EU + CCT est acceptable. Pour la position la plus solide (sans risque de transfert), utilisez Qwen ou Llama locaux.',
          },
          {
            q: 'Puis-je utiliser Llama 4 Scout comme remplacement pour Claude ?',
            a: 'Pour la conformité RGPD : oui. Llama est open-source et peut s\'exécuter localement, il satisfait donc les articles 44, 25 et 32 complètement. Pour les capacités : peut-être. Testez sur votre charge de travail d\'abord. Pour les tâches simples de questions-réponses et de résumé, Llama 4 Scout est compétitif.',
          },
          {
            q: 'Que se passe-t-il si j\'enregistre mes prompts localement à des fins d\'audit ?',
            a: 'L\'enregistrement est encouragé pour la conformité Article 30. Enregistrez : nom du modèle, horodatage de la session, nombre de jetons d\'entrée, nombre de jetons de sortie et un hash SHA-256 du prompt et de la réponse. N\'enregistrez PAS le texte brut des prompts contenant des données personnelles. L\'enregistrement basé sur le hash satisfait l\'article 30 (registres des traitements) et l\'article 32 (sécurité).',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPR リスク比較: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR リスク行列: LLM 比較 Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR準拠のLLM比較: DeepSeek API（最高リスク）、Qwen ローカル（最低リスク）、Llama ローカル、Claude/GPT API（中程度リスク）。データ拠点、管轄権、ToS、SCC要件によるリスク行列。2026年5月更新。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8分間の読取',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek APIはすべての主要なLLMの中で最高のGDPRリスクを持っています。サーバーが中国のデータアクセス法（PIPL）の対象となるためです。QwenおよびLlamaをローカルで実行すると、同等の低リスクになります。',
          'ClaudeおよびGPT-4o APIはEUデータ拠点を備えた場合、中程度のリスクを負い、標準契約条項（SCC）が必要です。',
          '推奨スタック：スタートアップ（Claude + SCC）、データ敏感な組織（Qwen 24 GBローカル）、エンタープライズ（マルチGPU Qwen + エアギャップ）',
          'リスク決定行列は5つのベクトルをカバーしています：データ拠点、トレーニングデータ管轄権、ToSデータ保持、SCC要件、および法的判断',
          'ローカルQwenおよびLlamaモデルは、第44条（転送なし）、第25条（デザインによるデータ保護）、および第32条（セキュリティ）を満たします。',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: 'LLMのためのGDPRリスクの4つのベクトル',
        content: [
          'LLMの使用におけるGDPRリスクは、4つの独立した要因によって決定されます：データ拠点、トレーニングデータ管轄権、ToSデータ保持ポリシー、およびSCC/TIA要件。',
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: 'リスク行列：モデル別比較',
        content: [
          '下の表は、各デプロイメントオプションのGDPRリスクプロファイルをまとめています。',
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: 'モデル別の判断と推奨される使用法',
        content: [
          'このセクションを使用して、各デプロイメントがGDPRコンプライアンスポジャーに適切である場合を理解してください。',
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: '組織タイプ別の推奨スタック',
        content: [
          '正しいLLMスタックは、組織のデータセンシティビティ、予算、および規制スタンスに依存します。',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'SCCを使用する場合、DeepSeekはGDPR準拠ですか？',
            a: 'いいえ。SCC単独では、次の理由からGDPR第44条の中国への転送を満たしていません：（1）EU-中国の妥当性決定がSchrems II以降存在しない; （2）中国法（PIPL）は企業が政府機関とデータを共有することを義務付けている; （3）主要ベンダーはSCCで中国で操業することを拒否しています。EUの住民の個人データについては、DeepSeek APIを使用しないでください。DeepSeekが必要な場合は、ローカルウェイトを使用してください。',
          },
          {
            q: 'Claude EU をSCCで使用する場合、GDPRを満たしていますか？',
            a: 'ほぼはい、注意点があります。Claude EUは処理中あなたのデータをアイルランドまたはドイツに保持し、30日以内に削除します。Anthropicはグローバルに準拠したDPAを公開しています。ただし、Claude モデルは米国ベースの訓練データを使用しており、Anthropicは米国企業です。実用的なコンプライアンスについては、Claude EU + SCC は許容できます。最も強いポジション（転送リスクなし）については、ローカルQwenまたはLlamaを使用してください。',
          },
          {
            q: 'Llama 4 Scout を Claude の直接的な代替として使用できますか？',
            a: 'GDPRコンプライアンスについて：はい。Llama はオープンソースで、ローカルで実行できるため、第44条、第25条、および第32条を完全に満たしています。機能とパフォーマンスについて：おそらく。最初にあなたのワークロードでテストしてください。単純なQ&A、要約、およびコードタスクについて、Llama 4 Scout は競争力があります。',
          },
          {
            q: '監査の目的でプロンプトをローカルで記録した場合はどうなりますか？',
            a: '記録は第30条のコンプライアンスのために推奨されます。記録：モデル名、セッションタイムスタンプ、入力トークン数、出力トークン数、およびプロンプトと応答のSHA-256ハッシュ。個人データを含むプロンプトの生のテキストを記録しないでください。ハッシュベースのログは、第30条（処理記録）と第32条（セキュリティ）を満たし、第5条第1項e号（保存制限）に違反しません。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Privacy & Security',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    title: 'GDPR 风险比较: Qwen vs DeepSeek vs Llama vs Claude 2026',
    seoTitle: 'GDPR 风险矩阵: LLM 比较 Qwen DeepSeek Llama Claude | PromptQuorum',
    metaDescription: 'GDPR合规LLM比较: DeepSeek API（风险最高）、Qwen本地（风险最低）、Llama本地、Claude/GPT API（中等风险）。按数据驻留、管辖权、ToS和SCC要求的风险矩阵。更新于2026年5月。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '8分钟阅读',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API在所有主要LLM中呈现最高的GDPR风险，因为服务器受中国数据访问法（PIPL）约束；Qwen和Llama本地运行风险相同且最低',
          'Claude和GPT-4o API具有欧盟数据驻留时承担中等风险，需要标准合同条款（SCC）',
          '推荐堆栈：初创企业（Claude + SCC）、数据敏感组织（Qwen 24GB本地）、企业（多GPU Qwen + 气隙）',
          '风险决策矩阵涵盖五个向量：数据驻留、训练数据管辖权、ToS数据保留、SCC要求和法律裁定',
          '本地Qwen和Llama模型满足第44条（无转移）、第25条（设计中的数据保护）和第32条（安全性）',
        ],
      },
      riskVectors: {
        id: 'risk-vectors',
        title: '隆道风险的四个GDPR风险向量',
        content: [
          'LLM使用的GDPR风险由四个独立因素确定：数据驻留、训练数据管辖权、ToS数据保留政策和SCC/TIA要求。',
        ],
      },
      riskMatrix: {
        id: 'risk-matrix',
        title: '风险矩阵：模型对比',
        content: [
          '下表总结了每个部署选项的GDPR风险概况。',
        ],
      },
      modelVerdicts: {
        id: 'model-verdicts',
        title: '模型裁定和推荐用法',
        content: [
          '使用本部分理解每个部署对于您的GDPR合规态势何时合适。',
        ],
      },
      orgStacks: {
        id: 'org-stacks',
        title: '按组织类型推荐的堆栈',
        content: [
          '正确的LLM堆栈取决于您组织的数据敏感性、预算和监管态势。',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '如果我使用SCC，DeepSeek是否符合GDPR？',
            a: '不是。仅凭SCC无法满足GDPR第44条到中国大陆的转移，因为：（1）Schrems II后不存在欧盟-中国充分性决定；（2）中国法律（PIPL）要求公司与政府部门共享数据；（3）主要供应商拒绝在中国以SCC方式运营。对于欧盟居民的个人数据，请勿使用DeepSeek API。如果需要DeepSeek，请使用本地权重。',
          },
          {
            q: '使用Claude EU与SCC是否满足GDPR？',
            a: '基本上是的，有注意事项。Claude EU在处理期间将您的数据保留在爱尔兰或德国，并在30天内删除。Anthropic已发布GDPR合规DPA。但是，Claude模型仍基于美国训练数据，Anthropic是美国公司，因此在技术上仍存在"转移"。对于实际合规，Claude EU + SCC是可接受的。对于最强硬的立场（无转移风险），请使用本地Qwen或Llama。',
          },
          {
            q: '我能否将Llama 4 Scout用作Claude的直接替代品？',
            a: '对于GDPR合规：是的。Llama是开源的，可以在本地运行，因此完全满足第44、25和32条要求。对于功能和性能：也许。首先在您的工作负载上进行测试。对于简单的问答、摘要和代码任务，Llama 4 Scout具有竞争力。',
          },
          {
            q: '如果我在本地记录提示以供审计之用会怎样？',
            a: '建议记录以符合第30条。记录：模型名称、会话时间戳、输入令牌数、输出令牌数和提示与响应的SHA-256哈希。不要记录包含个人数据的提示的原始文本。基于哈希的日志记录满足第30条（处理记录）和第32条（安全性），同时不违反第5条第(1)项e（存储限制）。',
          },
        ],
      },
    },
  },
}
