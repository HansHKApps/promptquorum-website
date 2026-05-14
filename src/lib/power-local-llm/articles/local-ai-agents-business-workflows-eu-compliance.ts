// Power Local LLM — Local AI Agents for Business Workflows: EU Compliance Guide (2026)
// Slug: local-ai-agents-business-workflows-eu-compliance
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Local AI Agents for Business Workflows: EU Compliance Guide (2026)',
    seoTitle: 'Local AI Agents for EU Business Workflows: Compliance 2026',
    intro:
      'Local AI agents make EU compliance materially simpler. When the model, the tool servers, and the data all sit inside your own infrastructure, the cloud-LLM threat model goes away — Schrems II, sub-processor lists, and cross-border transfer impact assessments do not apply. The hard work moves to the regulations that still apply: GDPR controls on the data you process, EU AI Act classification on the workflow you automate, and DACH-specific requirements (Works Council, §203 StGB) on workflows that touch employee or confidential data. This guide walks through 5 production workflow templates, the controls each one needs, and the model and stack picks that hold up in an audit.',
    metaDescription:
      'Deploy local AI agents for document processing, email triage, and reporting under GDPR and EU AI Act. Architecture, compliance controls, and 5 workflow templates.',
    twitterDescription:
      'Local AI agents + EU compliance: 5 workflow templates, GDPR controls, EU AI Act classification, DACH specifics. No data leaves your infrastructure.',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Llama 3.2 3B',
      'Llama 3.3 70B',
      'Mistral Large',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      'Enterprise teams, Data Protection Officers, compliance officers, and IT leads deploying local AI agents under GDPR, the EU AI Act, and DACH-specific employment and confidentiality requirements.',
    readTime: '14 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'local AI agent',
    targetKeywords: [
      'local ai agents gdpr',
      'eu ai act business agents',
      'local llm business workflows',
      'on-prem ai agent compliance',
      'gdpr ai agent dpia',
      'works council ai agent',
    ],
    leadAnswerBlock:
      '**Local AI agents are GDPR-compatible by architecture, not by accident — but only when the entire stack (model, tool servers, audit log, vector store) runs inside the controller\'s infrastructure with zero egress. Five business workflows cover most production demand: document intake and classification, email triage with draft replies, meeting summary and action extraction, compliance report generation, and invoice processing with PO matching. Each has a different EU AI Act classification (most are Limited-risk, HR screening is High-risk, none of the templates are Prohibited) and a different DPIA threshold. The recommended stack is Ollama or vLLM serving Gemma 4 27B / GLM-5.1 32B / Qwen3 32B (tool-calling models) with Cline or Goose+MCP as the agent runtime, an immutable audit log, and human approval on every write or send action. Deploying without a DPIA, mixing personal and business data in one workspace, and skipping approval gates on send actions are the three most common mistakes.**',
    quickAnswerTop: {
      en: {
        question: 'Are local AI agents GDPR-compliant for business workflows?',
        answer:
          'Local AI agents are GDPR-compatible by architecture but not GDPR-compliant by default. Architecture eliminates the cloud-LLM threat model — no Schrems II, no sub-processor list, no cross-border transfer impact assessment — because the model, the tool servers, and the data all sit inside the controller\'s infrastructure. The remaining work is the GDPR controls that apply to any system processing personal data: lawful basis (Article 6), data minimisation (Article 5), purpose limitation (Article 5), security of processing (Article 32), audit logging, and a DPIA (Article 35) when the workflow has a high impact on individuals. The EU AI Act adds a second layer: most business workflows are Limited-risk (transparency obligations only), HR screening and credit decisions are High-risk (full conformity assessment), and a few patterns (workplace emotion recognition, social scoring) are Prohibited. Building the local stack is the easy part; documenting the controls and running the DPIA is the work.',
        bullets: [
          'Local-only architecture removes the cloud-LLM threat model. The remaining GDPR work is data minimisation, lawful basis, security of processing, audit logging, and a DPIA where the workflow warrants one.',
          '5 business workflow templates cover most demand: document intake, email triage, meeting summary, compliance reports, invoice processing.',
          'EU AI Act classification: most templates are Limited-risk (transparency only); HR screening is High-risk (full conformity assessment); workplace emotion recognition and social scoring are Prohibited.',
          'Stack: Ollama or vLLM + Gemma 4 27B / GLM-5.1 32B / Qwen3 32B (tool-calling) + Cline or Goose+MCP + immutable audit log + manual approval on every write/send.',
          'DACH adds two layers: Betriebsrat co-determination for workflows touching employee data; §203 StGB professional confidentiality for lawyers, doctors, auditors.',
          'Three common mistakes: deploying without a DPIA, mixing personal and business data in one workspace, skipping approval gates on send actions.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What Local AI Agents Do for Business Teams', anchor: '#what-agents-do' },
      { label: '5 Business Workflow Templates', anchor: '#workflow-templates' },
      { label: 'EU AI Act Classification', anchor: '#ai-act' },
      { label: 'GDPR Controls for Agent Workflows', anchor: '#gdpr-controls' },
      { label: 'Germany: Works Council and §203 StGB', anchor: '#dach-specifics' },
      { label: 'Choosing the Right Model', anchor: '#model-pick' },
      { label: 'Agent Stack Comparison', anchor: '#stack-comparison' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-business-workflows-eu-compliance-static.html',
    gammaDescription: 'The slide deck below covers: 5 production workflow templates for EU-compliant local AI agents (document intake, email triage, meeting summary, compliance reports, invoice processing), EU AI Act risk classification (Limited vs High-risk vs Prohibited), 6 GDPR controls (lawful basis, data minimisation, DPIA), DACH specifics (Works Council BetrVG §87, §203 StGB professional confidentiality), model selection table (Gemma 4 27B, GLM-5.1 32B, Qwen3 32B), and 5 common deployment mistakes. Download the PDF as an EU AI compliance reference card.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Local-only architecture is the strongest privacy control.** When the model, tool servers, and data sit inside the controller\'s infrastructure with zero egress, the cloud-LLM threat model is gone — Schrems II, sub-processor lists, and cross-border transfer impact assessments do not apply.',
          '**5 workflow templates cover most production demand:** document intake and classification, email triage with draft replies, meeting summary and action extraction, compliance report generation, invoice processing with PO matching. Each has a defined data classification, lawful basis, AI Act tier, and audit-log shape.',
          '**EU AI Act tiers determine the obligations.** Most business workflows fall into Limited-risk (transparency to the user that AI is involved). HR screening, credit decisions, and benefits eligibility are High-risk and require a full conformity assessment. Workplace emotion recognition and social scoring are Prohibited.',
          '**GDPR work is unchanged by going local.** Lawful basis (Article 6), data minimisation (Article 5), security of processing (Article 32), audit logging, and a DPIA (Article 35) for high-impact workflows. The local stack makes these controls easier to evidence, not optional.',
          '**DACH adds two layers.** Works Council co-determination (BetrVG §87) applies any time the agent touches employee data — even passively. §203 StGB professional confidentiality (lawyers, doctors, auditors, tax advisers) makes the local-only architecture not optional but mandatory.',
          '**The reference stack:** Ollama or vLLM serving a tool-calling model (Gemma 4 27B, GLM-5.1 32B, Qwen3 32B for general work; Llama 3.2 3B for lightweight email triage) with Cline or Goose+MCP as the agent runtime, an immutable append-only audit log, and human approval on every write or send action.',
          '**Three failure modes to avoid:** deploying without a DPIA on a workflow that needs one, mixing personal and business data in a single agent workspace, and skipping approval gates on outbound actions (email send, contract sign, payment authorisation).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Architecture:** Ollama or vLLM + tool-calling model + agent runtime (Cline or Goose+MCP) + audit log + RAG store, all on controller infrastructure.',
          '**Workflows covered:** document intake, email triage, meeting summary, compliance reporting, invoice processing.',
          '**EU AI Act distribution across the 5 templates:** 4 Limited-risk, 1 High-risk (when used for HR screening), 0 Prohibited.',
          '**DPIA threshold:** mandatory for High-risk, trigger-based (Article 35 criteria) for the others. Most teams should run one for any workflow that touches special-category data.',
          '**Hardware sizing:** Gemma 4 27B and Qwen3 32B fit on 24 GB VRAM at Q4_K_M; GLM-5.1 32B and Llama 3.3 70B want 48 GB+ for unconstrained context.',
          '**Audit-log retention:** GDPR Article 30 record-of-processing requirements drive the floor; sectoral rules (financial services, health) extend it. 6 years is the safe default for most enterprise contexts.',
          '**Cost:** zero in API spend; hardware amortises against an enterprise SaaS-AI subscription bill within 6–12 months for a team of 20+ users.',
        ],
      },
      whatAgentsDo: {
        id: 'what-agents-do',
        title: 'What Local AI Agents Do for Business Teams',
        content:
          '**A local AI agent is a tool-calling model running inside the controller\'s infrastructure with explicit approval gates between read and write actions.** It is not a chat assistant, not a workflow automator (n8n, Zapier), and not a fine-tuned classifier — it is the layer that turns a model into something that operates on your systems.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A local AI agent is a tool-calling model plus a tool surface plus an approval gate, running entirely inside the controller\'s infrastructure — turning EU compliance from a documentation exercise into an architectural property.',
          },
          {
            type: 'plain-terms',
            text: 'An agent is a model that can read your filesystem, query your database, send an email, or call your internal API — with a human approving every action that writes or sends. Run the model, the tools, and the audit log on your own hardware and you replace the entire cloud-LLM compliance stack (Schrems II, sub-processor lists, cross-border transfer assessments) with one architectural fact: nothing leaves your network. The remaining work is the GDPR controls on the data itself, which apply to any system, cloud or local.',
          },
        ],
        items: [
          '**Definition:** model + tool surface (filesystem, database, email, calendar, internal API) + approval gate per write = agent. The model proposes; the agent runtime executes; the human approves anything that mutates state or leaves the network.',
          '**Distinction from automation tools.** n8n, Zapier, and Make.com are deterministic workflows — explicit triggers, explicit branches, explicit actions. An agent is non-deterministic: the model decides which tool to call and with what arguments, based on the input and the conversation state. Use automation when the path is fixed; use an agent when the path varies per input.',
          '**Distinction from a chat assistant.** A chat assistant answers questions; an agent takes actions. ChatGPT-style "summarise this email" returns text; an agent reads the inbox, classifies messages, drafts replies, and queues them for approval. Different surface, different risk profile.',
          '**Why "local" matters specifically for business workflows:** data residency is provable (the bytes never leave your network), the audit trail is end-to-end (the same log captures the model invocation, the tool call, and the result), and there is no third-party processor in the chain. The compliance argument writes itself when the architecture itself eliminates entire risk categories.',
          '**Where local agents fit in the org:** wherever a workflow handles personal data (GDPR), employee data (Works Council), confidential third-party data (NDAs, §203 StGB), or regulated business data (financial, health, legal). Local agents do not improve workflows that touch only public data — there, cloud agents are usually faster and cheaper.',
          'For the protocol layer that makes most of this practical, see [Connect Ollama to Databases and APIs With MCP: Local Agent Setup 2026](/power-local-llm/local-ai-agents-with-mcp-2026).',
        ],
      },
      workflowTemplates: {
        id: 'workflow-templates',
        title: '5 Business Workflow Templates',
        content:
          '**These five templates cover most production demand for local agents in business teams.** Each is described as trigger → tools → model recommendation → approval pattern → AI Act tier.',
        items: [
          '**1. Document intake and classification.** Trigger: PDF or scan lands in a watched folder or email. Tools: filesystem (read), OCR (when needed), classification model, database (write). Model: Gemma 4 27B or Qwen3 32B for tool calling and structured output. Approval pattern: auto for read and classify, manual for routing if the document mentions a person. AI Act tier: Limited-risk. DPIA: trigger-based.',
          '**2. Email triage with draft replies.** Trigger: new message in a monitored inbox. Tools: IMAP/Graph API (read-only), classification model, draft store (write), notification. Model: Llama 3.2 3B is enough for triage; Gemma 4 27B for draft generation. Approval pattern: auto for classify and draft, manual for send (always). AI Act tier: Limited-risk. DPIA: trigger-based; mandatory if the inbox handles employee data.',
          '**3. Meeting summary and action extraction.** Trigger: transcript lands in storage (Whisper or vendor). Tools: filesystem (read), summarisation model, extraction model, output target (Notion/Jira/internal wiki via API). Model: Qwen3 32B for long context (128K) on hour-long transcripts. Approval pattern: auto for summary, manual for action items posted to external systems. AI Act tier: Limited-risk; verify each transcript has consent capture before processing.',
          '**4. Compliance report generation.** Trigger: scheduled (monthly, quarterly). Tools: database (read), report-template store, report renderer, reviewer notification. Model: GLM-5.1 32B or Llama 3.3 70B — long context, structured output, low hallucination. Approval pattern: auto for data extraction, manual for the published report. AI Act tier: Limited-risk; verify the underlying data sources have a documented lawful basis. Pair with [structured output and JSON mode](/prompt-engineering/structured-output-and-json-mode) to keep the report shape stable.',
          '**5. Invoice processing and validation.** Trigger: invoice lands in finance inbox or AP folder. Tools: filesystem (read), OCR, ERP integration (read PO and vendor), exception queue (write). Model: Gemma 4 27B for tool calling; Qwen3 32B when invoices have non-standard layouts. Approval pattern: auto for extraction and PO match, manual for any exception (mismatch, new vendor, large amount). AI Act tier: Limited-risk. DPIA: usually not triggered.',
          '**Common pattern across all five:** the read steps auto-approve; the write steps that affect external systems or people\'s rights manually approve. The audit log captures every decision.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The 5 templates differ in trigger and output but share one rule: read steps auto-approve, write or send steps require human approval, every action is captured in an immutable audit log.',
          },
          {
            type: 'plain-terms',
            text: 'Pick a template that matches a workflow you already do manually. Wire the agent to read the inputs (filesystem, inbox, transcript folder), classify or draft, then queue for human review before anything is sent or written. The approval gate is the difference between a useful agent and a regulatory incident.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Start with one template, not five. Document intake and email triage are the two lowest-risk entry points — both are Limited-risk, both have clear approval boundaries (route, send), and both build the audit-log infrastructure you reuse for the remaining three. Compounding template adoption beats parallel rollout for compliance teams.',
          },
        ],
      },
      aiAct: {
        id: 'ai-act',
        title: 'EU AI Act Classification for Business Agents',
        content:
          '**The EU AI Act classifies AI systems by risk to fundamental rights — not by technical sophistication.** The same model and stack serves Limited-risk and High-risk workflows; the obligations attach to the use, not the technology.',
        items: [
          '**Limited-risk (most templates):** transparency obligations. The user receiving an AI-generated email or summary must know AI was involved. A clear marker in the message and a one-line disclosure in the system\'s end-user documentation usually satisfy this. No conformity assessment required.',
          '**High-risk (specific use cases):** full conformity assessment, registration in the EU database, post-market monitoring, and a notified body in some sub-categories. The patterns that hit High-risk in business teams are HR screening (CV ranking, candidate scoring), credit decisions, benefits eligibility, and access to public services. Annex III of the Act is the operative list.',
          '**Prohibited (do not deploy):** real-time biometric identification in public spaces (some narrow law-enforcement exceptions), social scoring of natural persons, manipulative techniques targeting vulnerabilities, workplace emotion recognition (with limited medical/safety exceptions), predictive policing based on profiling.',
          '**Practical workflow → tier mapping for the 5 templates:** document intake (Limited-risk), email triage (Limited-risk), meeting summary (Limited-risk; verify consent), compliance reports (Limited-risk), invoice processing (Limited-risk). The five base templates are all Limited-risk; the same templates re-purposed for HR screening or credit decisions inherit High-risk obligations from the use.',
          '**Provider vs deployer distinction matters.** If you build the model into a product sold to others, you are a Provider (more obligations). If you operate the system on your own behalf, you are a Deployer (fewer obligations, but still real). Internal-only local agents usually make you a Deployer.',
          '**Action item for any new workflow:** before approving deployment, classify it. The classification is a single decision (Limited / High / Prohibited) with a written justification, signed by the DPO or compliance lead, kept in the AI system\'s technical file.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The EU AI Act\'s Annex III list of High-risk use cases is the operative reference — read it directly when classifying a workflow. Do not rely on summary articles; the legal text is short and precise enough to use as a checklist.',
          },
        ],
      },
      gdprControls: {
        id: 'gdpr-controls',
        title: 'GDPR Controls for Agent Workflows',
        content:
          '**Local architecture removes one threat (cloud-LLM data sharing) but does not remove GDPR obligations on the data itself.** Six controls handle most agent workflows; the same six map cleanly into the technical file the EU AI Act expects for High-risk systems.',
        items: [
          '**1. Lawful basis (Article 6).** Document which basis applies before deployment — consent, contract, legal obligation, legitimate interest, vital interests, or public task. Most business agent workflows run on contract (employee/customer relationship) or legitimate interest (with a documented balancing test). Special-category data (health, biometric, political opinion) needs an Article 9 condition on top of the Article 6 basis.',
          '**2. Data minimisation (Article 5(1)(c)).** The agent must only see the personal data the workflow needs. Practical implication: chunk and filter at the RAG layer, not at the model. Avoid streaming full documents into the conversation when only one section is relevant. Avoid retaining intermediate prompts that contain personal data once the task is complete.',
          '**3. Purpose limitation (Article 5(1)(b)).** The agent must not be re-purposed across tasks without a re-evaluation. A workflow approved for invoice processing cannot quietly absorb employee performance review duties — that is a new purpose, a new lawful basis, a new DPIA decision.',
          '**4. Security of processing (Article 32).** Encryption at rest, access control on the workspace, immutable audit log, and an incident-response plan that includes "the model produced an output that should not have been produced". Local-only architecture covers a lot here; do not assume it covers everything.',
          '**5. Audit logging.** The minimum log fields per agent action: timestamp, user/initiator, model identifier and version, input hash, tool calls and arguments, output hash, approver (when manual approval applied). Append-only storage; integrity protection (hash chain or signed log lines).',
          '**6. DPIA (Article 35).** Mandatory when the workflow involves systematic processing of personal data with significant impact, special-category data at scale, or High-risk under the AI Act. Trigger-based for everything else. The DPIA documents the controls, the residual risk, and the DPO\'s sign-off.',
          'For the data-side architecture this builds on, see [Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data) — the RAG controls feed the same audit pipeline.',
          'For the prompt and output controls layered on top, see [prompt governance in production](/prompt-engineering/prompt-governance-in-production) and [prompt injection and security](/prompt-engineering/prompt-injection-and-security).',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local-only architecture removes the cloud-LLM threat model; the GDPR controls on the data itself (lawful basis, minimisation, security of processing, audit log, DPIA) still apply and the technical file documents them in one shape.',
          },
          {
            type: 'plain-terms',
            text: 'Going local does not turn off GDPR. It turns off the part of GDPR that worries about Schrems II and processor agreements, and leaves the part that worries about which data the agent sees, why it sees it, and what evidence you keep. The local stack makes that evidence easier to produce — same audit log feeds both the GDPR file and the AI Act technical file.',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A common mistake: deploying first and writing the DPIA second. Supervisory authorities expect the DPIA before processing begins (Article 35(1)). For workflows that touch employee data or hit High-risk under the AI Act, write the DPIA at design time — it is short (4–8 pages) and forces decisions that are expensive to revisit later.',
          },
        ],
      },
      dachSpecifics: {
        id: 'dach-specifics',
        title: 'Germany Specifics: Works Council Co-Determination and §203 StGB',
        content:
          '**DACH workflows have two extra layers that English-language guides routinely miss.** Both kick in early and both are decision-blocking if missed.',
        items: [
          '**Works Council co-determination (BetrVG §87(1) Nr. 6).** Any technical system that monitors the conduct or performance of employees triggers co-determination. "Monitor" is interpreted broadly by German labour courts — an agent that classifies employee emails or summarises employee meetings counts. The Works Council must be involved at design time, not after deployment. Skipping this step has voided agent rollouts after the fact.',
          '**Practical implication:** before you deploy any workflow that processes employee data — even passively, even if the immediate output is for the employee\'s own benefit — engage the Works Council. The agreement (Betriebsvereinbarung) becomes part of the system\'s technical file. Most Works Councils are constructive when engaged early; almost none are when engaged late.',
          '**§203 StGB professional confidentiality.** Lawyers, doctors, auditors, tax advisers, and certain other professions have criminal liability for unauthorised disclosure of client information. The exception for "assistants" (§203(3)) covers in-house staff but does not automatically cover external service providers. A cloud LLM is an external service provider; that is the legal core of why §203 firms have moved to local stacks.',
          '**Practical implication:** for any §203-bound profession, local-only architecture is not a preference, it is the default that allows the workflow to exist at all. The contract with the agent\'s vendor (if any) must include §203 compliance language; the technical file must document that no client data leaves the firm\'s infrastructure.',
          '**Austria and Switzerland:** Austria mirrors §203 closely (StGB §121); Swiss confidentiality (Article 321 StGB CH) is even broader. The architectural conclusion is the same — local-only, no exceptions for sensitive professional data.',
          'For the data-side compliance picture on the same controller, see [Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data) — the RAG and agent stacks share the audit log and the access control layer.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Engage the Works Council at design time, not at deployment time. German labour courts have voided agent rollouts that processed employee data without prior Betriebsvereinbarung. The cost of involving the Works Council early is hours; the cost of involving them late is a paused rollout and a renegotiation from a weaker position.',
          },
        ],
      },
      modelPick: {
        id: 'model-pick',
        title: 'Choosing the Right Model for Business Agents',
        content:
          '**Tool-call reliability is a model property, not a harness property.** The same harness paired with a small general-purpose model fails; paired with a tool-call-tuned 27B+ model it succeeds. Pick the model first.',
        items: [
          '**Gemma 4 27B (`gemma4:27b`).** Best general-purpose tool-caller in May 2026. Fits in 16 GB unified memory or 24 GB VRAM at Q4_K_M. Reliable on document intake, email triage, and invoice processing. Slightly conservative on chained tool calls — fine for business workflows where each step has explicit approval anyway.',
          '**GLM-5.1 32B (`glm5:32b`).** 128K context out of the box. Strong tool-call reliability. The pick for compliance reporting and meeting summarisation where the input is long. Wants 24 GB+ VRAM at Q4_K_M for unconstrained context.',
          '**Qwen3 32B (`qwen3:32b`).** Well-rounded, very reliable on multi-step plans. Good fallback when Gemma 4 is conservative. 32K context out of the box; fine for most business tasks.',
          '**Llama 3.3 70B (`llama3.3:70b`).** Highest ceiling, heaviest hardware. 48 GB+ VRAM or 64 GB unified memory at Q4_K_M. Use for compliance reports and exception handling where reliability matters more than speed.',
          '**Llama 3.2 3B (`llama3.2:3b`).** Lightweight pick for high-volume triage. Runs comfortably on 8 GB VRAM. Good enough for "is this email customer support / sales / spam"; not good enough for drafting replies. Pair with a 27B+ model for the drafting step.',
          '**Mistral Large.** EU-hosted alternative for hybrid setups where pure local is overkill but US cloud is non-starter. Run via Mistral\'s EU endpoint with a DPA in place; data still stays in EU jurisdiction.',
          '**Avoid for tool-calling work:** anything below 7B for production work, any general-purpose model without explicit tool-call training, and quantisations harsher than Q4_K_M on the smaller end. Symptoms are malformed tool calls, hallucinated arguments, and stalled agent loops.',
          'For the head-to-head data, see [Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026). For VRAM and hardware sizing across the same models, see [Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Q4_K_M is the production floor for tool-calling reliability. Q3 and below degrade tool-call accuracy before they degrade chat quality, which is the wrong way to fail in a regulated workflow. If VRAM is tight, drop a parameter tier (32B → 27B) before dropping a quantisation tier (Q4 → Q3).',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'Agent Stack Comparison for Business Use',
        content:
          '**Four agent runtimes are credible for business workflows in 2026.** They differ on approval-gate UX, audit-trail richness, and how much custom code each one needs.',
        columns: ['Runtime', 'Setup', 'Approval gates', 'Audit trail', 'Best for'],
        rows: [
          { 'Runtime': 'Cline (VS Code)', 'Setup': 'One extension install', 'Approval gates': 'Per-step, in-IDE; auto-approve allow-list', 'Audit trail': 'In-extension log; export needed for compliance', 'Best for': 'Coding-shaped workflows, single-developer audit' },
          { 'Runtime': 'Goose + MCP', 'Setup': 'Brew install + mcp.json', 'Approval gates': 'CLI prompts; configurable per-tool', 'Audit trail': 'CLI log file; rotate to immutable store', 'Best for': 'CLI workflows, headless servers' },
          { 'Runtime': 'n8n self-hosted + Ollama', 'Setup': 'Docker + n8n LLM node', 'Approval gates': 'Workflow-level human-in-the-loop nodes', 'Audit trail': 'Native n8n execution log + database', 'Best for': 'Deterministic-shaped workflows with one or two model steps' },
          { 'Runtime': 'Custom LangGraph + Ollama', 'Setup': 'Python project, real test suite', 'Approval gates': 'Built by you (interrupts API)', 'Audit trail': 'Built by you', 'Best for': 'Production workflows that justify the engineering investment' },
        ],
        items: [
          '**Pick Cline + Ollama** if the team is developer-heavy and the workflows fit inside VS Code. Lowest install friction, fastest path to a working agent.',
          '**Pick Goose + MCP** if the workflow runs on a headless server (a scheduled compliance report, a folder-watching ingestor) where there is no IDE.',
          '**Pick n8n + Ollama** if the workflow has a deterministic shape with one or two model steps. n8n\'s human-in-the-loop nodes give you approval gates without a custom UI.',
          '**Pick custom LangGraph** only when the workflow shape is genuinely incompatible with the above. The build effort is real; the audit-trail and approval-gate code is on you.',
          '**For an honest reliability comparison across these stacks**, see [Local AI Agents in 2026: What Actually Works (And What Still Fails)](/power-local-llm/autonomous-local-agents-actually-work).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Cline is the lowest-friction starting point even for non-coding workflows. Wire MCP servers (filesystem, sqlite, IMAP) and you have document intake, invoice processing, and email triage in one runtime — without writing an orchestrator. Move to LangGraph only when the workflow shape genuinely outgrows Cline\'s scoped per-step UX.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Deploying Local Agents in EU Business Workflows',
        items: [
          '**Mistake 1: deploying without a DPIA.** Any workflow touching special-category data or making decisions about people needs a DPIA. The DPIA is short — 4–8 pages for most agent workflows — but it is mandatory and it is what the supervisory authority asks for first. Write it before deployment, not after.',
          '**Mistake 2: using a cloud-connected agent for confidential documents.** A local model is not enough if the agent runtime, the audit log, or the embeddings store sit in someone else\'s cloud. The architecture is end-to-end; one cloud dependency in the chain breaks the local-only argument.',
          '**Mistake 3: no approval gate on write or send actions.** The agent reads, classifies, drafts, sends. The send step is the one humans must approve, every time, regardless of how reliable the model has been. Auto-send agents are how the regulator hears about you.',
          '**Mistake 4: mixing personal and business data in one workspace.** The agent\'s working directory and vector store should be scoped per workflow, not shared. Cross-contamination violates purpose limitation; recovery is expensive.',
          '**Mistake 5: skipping the audit log.** "We can reconstruct it from the model\'s conversation history" is not an audit log. Append-only, hash-chained, retained per the relevant retention period, queryable by data-subject-access-request handlers — that is the bar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[EU AI Act consolidated text (artificialintelligenceact.eu)](https://artificialintelligenceact.eu/the-act/) — official-track aggregate of the regulation; Annex III is the operative High-risk list.',
          '[GDPR full text (gdpr-info.eu)](https://gdpr-info.eu/) — Articles 5, 6, 25, 32, 35 are the operative ones for agent design.',
          '[NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — non-EU, non-binding, but the structure of GOVERN / MAP / MEASURE / MANAGE is a useful audit-prep checklist.',
          '[EDPB Guidelines 03/2018 on automated individual decision-making](https://edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en) — operative for any workflow making decisions about individuals; matters under both GDPR Article 22 and the AI Act.',
          '[BfDI position paper on AI systems (German Federal DPA)](https://www.bfdi.bund.de/) — DACH-specific, references §203 StGB and Works Council practice.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Are local AI agents GDPR-compliant by default?',
            a: 'No — they are GDPR-compatible by architecture but not GDPR-compliant by default. Local-only architecture removes the cloud-LLM threat model (Schrems II, sub-processor lists, cross-border transfers) but the GDPR controls on the data itself still apply: lawful basis (Article 6), data minimisation (Article 5), security of processing (Article 32), audit logging, and a DPIA where the workflow warrants one. The local stack makes evidencing these controls easier; it does not make them optional.',
          },
          {
            q: 'Which workflows are High-risk under the EU AI Act?',
            a: 'Annex III lists the operative High-risk use cases. The patterns that hit business teams most often are HR (CV screening, candidate ranking, performance evaluation), credit decisions, benefits eligibility, and access to essential services. Most general business workflows (document intake, email triage, meeting summary, invoice processing, compliance reporting) are Limited-risk — transparency obligations only, no full conformity assessment.',
          },
          {
            q: 'Do I need a DPIA for an email triage agent?',
            a: 'Trigger-based. A DPIA is mandatory when the workflow involves systematic processing of personal data with significant impact (Article 35(1)) or hits one of the supervisory authority\'s mandatory-DPIA lists. A general inbox triage agent often does not trigger automatically; the same agent on an HR or candidate inbox does. Most teams should run a short DPIA on any inbox containing employee data, regardless of strict trigger criteria — the cost is hours, the upside is documented sign-off.',
          },
          {
            q: 'Can a local agent process employee data?',
            a: 'Yes, with two extra steps in DACH. First, Works Council co-determination (BetrVG §87(1) Nr. 6) — engage the Works Council at design time, sign a Betriebsvereinbarung that defines purpose, retention, access, and audit requirements. Second, lawful basis under GDPR — usually contract or legitimate interest with a documented balancing test. Skipping the Works Council step has voided rollouts after the fact in German labour courts.',
          },
          {
            q: 'What model size handles business workflows reliably?',
            a: 'Gemma 4 27B is the reliable default for general-purpose tool-calling. GLM-5.1 32B is the pick when input is long (compliance reporting, hour-long meeting transcripts) — 128K context out of the box. Qwen3 32B is the well-rounded fallback. Llama 3.3 70B has the highest ceiling but wants 48 GB+ VRAM. Llama 3.2 3B is fine for high-volume classification but not for drafting. Models below 7B emit malformed tool calls regardless of which agent runtime wraps them.',
          },
          {
            q: 'How do I audit what the agent did?',
            a: 'Every agent action writes a log entry: timestamp, user/initiator, model identifier and version, input hash, tool calls with arguments, output hash, approver when manual approval applied. Storage is append-only with integrity protection (hash chain or signed log lines). Retention follows GDPR Article 30 record-of-processing requirements as the floor; sectoral rules (financial services, health) extend it. The audit log answers DSAR queries and feeds the AI Act technical file in one shape.',
          },
          {
            q: 'Can I share one agent across departments?',
            a: 'Architecturally yes, legally messy. Each department has its own purpose, its own lawful basis, its own retention, and potentially its own Works Council agreement. Shared agents blur all of this and create cross-contamination risk under purpose limitation (Article 5(1)(b)). The cleaner pattern: one agent runtime, separate workspaces per workflow, separate audit logs per workflow, single deployment of the underlying model. The model is a shared resource; the workflows are not.',
          },
          {
            q: 'What about cross-border subsidiaries?',
            a: 'If the controller is the EU entity and the data stays in EU infrastructure, the local-only architecture covers most of the cross-border concern by default. Watch two cases: a non-EU subsidiary running the local agent on EU personal data (the data must stay in the EU; the agent can be operated remotely as long as no personal data egresses), and a non-EU support team accessing the agent\'s output (treat as a transfer; document the legal basis under Chapter V GDPR). Mistral Large on Scaleway is the common hybrid pick when fully local is overkill and US cloud is non-starter.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data) — the GDPR-compliant data-side architecture that feeds the same audit pipeline.',
          '[Connect Ollama to Databases and APIs With MCP: Local Agent Setup 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — the protocol layer for filesystem, database, browser, and GitHub tools.',
          '[Local AI Agents in 2026: What Actually Works (And What Still Fails)](/power-local-llm/autonomous-local-agents-actually-work) — honest reliability comparison across the four agent runtimes recommended above.',
          '[Replace Zapier With Local AI Agents](/power-local-llm/replace-zapier-with-local-ai-agents) — n8n + Ollama workflow templates for the deterministic-shape end of the agent spectrum.',
          '[Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026) — head-to-head benchmarks for the models recommended in this guide.',
          '[Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist) — controls layer for the same hardware running these workflows.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Lokale KI-Agenten in Geschäftsworkflows: DSGVO & EU AI Act Leitfaden 2026',
    seoTitle: 'Lokale KI-Agenten: DSGVO + EU AI Act Compliance 2026',
    intro:
      'Lokale KI-Agenten machen die EU-Compliance materiell einfacher. Wenn das Modell, die Tool-Server und die Daten alle innerhalb Ihrer eigenen Infrastruktur liegen, entfällt das Bedrohungsmodell des Cloud-LLM — Schrems II, Auftragsverarbeiter-Listen und grenzüberschreitende Übermittlungs-Folgeabschätzungen sind nicht mehr anwendbar. Die eigentliche Arbeit verlagert sich auf die weiterhin geltenden Regelungen: DSGVO-Kontrollen für die verarbeiteten Daten, EU-AI-Act-Klassifizierung für den automatisierten Workflow und DACH-spezifische Anforderungen (Betriebsrat, §203 StGB) für Workflows, die Mitarbeiter- oder vertrauliche Daten berühren. Dieser Leitfaden behandelt 5 produktionsreife Workflow-Vorlagen, die Kontrollen, die jede einzelne benötigt, sowie Modell- und Stack-Empfehlungen, die einer Prüfung standhalten.',
    metaDescription:
      'Lokale KI-Agenten für Dokumentenverarbeitung, E-Mail-Triage und Reporting unter DSGVO und EU AI Act bereitstellen. Architektur, Compliance-Kontrollen und 5 Workflow-Vorlagen.',
    twitterDescription:
      'Lokale KI-Agenten + EU-Compliance: 5 Workflow-Vorlagen, DSGVO-Kontrollen, EU-AI-Act-Klassifizierung, DACH-Spezifika. Keine Daten verlassen Ihre Infrastruktur.',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Llama 3.2 3B',
      'Llama 3.3 70B',
      'Mistral Large',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      'Enterprise-Teams, Datenschutzbeauftragte, Compliance-Verantwortliche und IT-Leiter, die lokale KI-Agenten unter DSGVO, EU AI Act sowie DACH-spezifischen Arbeits- und Verschwiegenheitsanforderungen einsetzen.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'lokaler KI-Agent',
    targetKeywords: [
      'lokale ki-agenten dsgvo',
      'eu ai act geschäftsagenten',
      'lokales llm geschäftsworkflows',
      'on-prem ki-agent compliance',
      'dsgvo ki-agent dsfa',
      'betriebsrat ki-agent',
    ],
    leadAnswerBlock:
      '**Lokale KI-Agenten sind DSGVO-kompatibel durch Architektur, nicht durch Zufall — aber nur dann, wenn der gesamte Stack (Modell, Tool-Server, Audit-Log, Vektor-Store) innerhalb der Infrastruktur des Verantwortlichen mit null Egress läuft. Fünf Geschäftsworkflows decken den Großteil der Produktionsanforderungen ab: Dokumentenannahme und -klassifizierung, E-Mail-Triage mit Antwortentwürfen, Meeting-Zusammenfassungen mit Aufgabenextraktion, Compliance-Reporting und Rechnungsverarbeitung mit Bestellabgleich. Jeder hat eine andere EU-AI-Act-Klassifizierung (die meisten sind Limited-Risk, HR-Screening ist High-Risk, keine der Vorlagen ist verboten) und eine andere DSFA-Schwelle. Der empfohlene Stack: Ollama oder vLLM mit Gemma 4 27B / GLM-5.1 32B / Qwen3 32B (Tool-Calling-Modelle), Cline oder Goose+MCP als Agent-Runtime, ein unveränderliches Audit-Log und manuelle Freigabe für jede Schreib- oder Sendeaktion. Bereitstellung ohne DSFA, das Vermischen personenbezogener und geschäftlicher Daten in einem Workspace und das Auslassen von Freigabe-Gates bei Sendeaktionen sind die drei häufigsten Fehler.**',
    quickAnswerTop: {
      de: {
        question: 'Sind lokale KI-Agenten für Geschäftsworkflows DSGVO-konform?',
        answer:
          'Lokale KI-Agenten sind DSGVO-kompatibel durch Architektur, aber nicht standardmäßig DSGVO-konform. Die Architektur eliminiert das Cloud-LLM-Bedrohungsmodell — kein Schrems II, keine Auftragsverarbeiter-Liste, keine Folgenabschätzung für grenzüberschreitende Übermittlungen — weil Modell, Tool-Server und Daten alle innerhalb der Infrastruktur des Verantwortlichen liegen. Was übrig bleibt, sind die DSGVO-Kontrollen, die für jedes System gelten, das personenbezogene Daten verarbeitet: Rechtsgrundlage (Artikel 6), Datenminimierung (Artikel 5), Zweckbindung (Artikel 5), Sicherheit der Verarbeitung (Artikel 32), Audit-Logging und eine DSFA (Artikel 35), wenn der Workflow erhebliche Auswirkungen auf Betroffene hat. Der EU AI Act fügt eine zweite Schicht hinzu: Die meisten Geschäftsworkflows sind Limited-Risk (nur Transparenzpflichten), HR-Screening und Kreditentscheidungen sind High-Risk (volle Konformitätsbewertung), und einige Muster (Emotionserkennung am Arbeitsplatz, Social Scoring) sind verboten. Den lokalen Stack zu bauen ist der einfache Teil; die Kontrollen zu dokumentieren und die DSFA durchzuführen ist die eigentliche Arbeit.',
        bullets: [
          'Lokale Architektur entfernt das Cloud-LLM-Bedrohungsmodell. Verbleibende DSGVO-Arbeit: Datenminimierung, Rechtsgrundlage, Sicherheit der Verarbeitung, Audit-Logging und eine DSFA, wo der Workflow es rechtfertigt.',
          '5 Workflow-Vorlagen decken den Großteil der Nachfrage ab: Dokumentenannahme, E-Mail-Triage, Meeting-Zusammenfassung, Compliance-Reports, Rechnungsverarbeitung.',
          'EU-AI-Act-Klassifizierung: Die meisten Vorlagen sind Limited-Risk (nur Transparenz); HR-Screening ist High-Risk (volle Konformitätsbewertung); Emotionserkennung am Arbeitsplatz und Social Scoring sind verboten.',
          'Stack: Ollama oder vLLM + Gemma 4 27B / GLM-5.1 32B / Qwen3 32B (Tool-Calling) + Cline oder Goose+MCP + unveränderliches Audit-Log + manuelle Freigabe für jede Schreib-/Sendeaktion.',
          'DACH ergänzt zwei Ebenen: Mitbestimmung des Betriebsrats für Workflows, die Mitarbeiterdaten berühren; §203 StGB für Berufsgeheimnisträger (Anwälte, Ärzte, Wirtschaftsprüfer).',
          'Drei häufige Fehler: Bereitstellung ohne DSFA, Vermischung personenbezogener und geschäftlicher Daten in einem Workspace, Auslassen von Freigabe-Gates bei Sendeaktionen.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Was lokale KI-Agenten für Geschäftsteams leisten', anchor: '#what-agents-do' },
      { label: '5 Workflow-Vorlagen für Geschäftsteams', anchor: '#workflow-templates' },
      { label: 'EU-AI-Act-Klassifizierung', anchor: '#ai-act' },
      { label: 'DSGVO-Kontrollen für Agent-Workflows', anchor: '#gdpr-controls' },
      { label: 'Deutschland: Betriebsrat und §203 StGB', anchor: '#dach-specifics' },
      { label: 'Auswahl des richtigen Modells', anchor: '#model-pick' },
      { label: 'Agent-Stack-Vergleich', anchor: '#stack-comparison' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-business-workflows-eu-compliance-static.html',
    gammaDescription: 'Die Präsentation unten behandelt: 5 produktionsreife Workflow-Vorlagen für DSGVO-konforme lokale KI-Agenten (Dokumentenannahme, E-Mail-Triage, Meeting-Zusammenfassung, Compliance-Reports, Rechnungsverarbeitung), EU-AI-Act-Klassifizierung (Limited- vs. High-Risk vs. Verboten), 6 DSGVO-Kontrollen (Rechtsgrundlage, Datenminimierung, DSFA), DACH-Spezifika (Betriebsrat §87 BetrVG, §203 StGB Berufsgeheimnis), Modellauswahltabelle und 5 häufige Bereitstellungsfehler. PDF als EU-KI-Compliance-Referenzkarte herunterladen.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Die lokale Architektur ist die stärkste Datenschutz-Kontrolle.** Wenn Modell, Tool-Server und Daten innerhalb der Infrastruktur des Verantwortlichen mit null Egress liegen, entfällt das Cloud-LLM-Bedrohungsmodell — Schrems II, Auftragsverarbeiter-Listen und Folgenabschätzungen für grenzüberschreitende Übermittlungen sind nicht mehr anwendbar.',
          '**5 Workflow-Vorlagen decken den Großteil der Produktionsnachfrage ab:** Dokumentenannahme und -klassifizierung, E-Mail-Triage mit Antwortentwürfen, Meeting-Zusammenfassung mit Aufgabenextraktion, Compliance-Report-Erzeugung, Rechnungsverarbeitung mit Bestellabgleich. Jede hat eine definierte Datenklassifizierung, Rechtsgrundlage, AI-Act-Stufe und Audit-Log-Form.',
          '**EU-AI-Act-Stufen bestimmen die Pflichten.** Die meisten Geschäftsworkflows fallen in Limited-Risk (Transparenz gegenüber dem Nutzer, dass KI beteiligt ist). HR-Screening, Kreditentscheidungen und Anspruchsprüfungen sind High-Risk und erfordern eine vollständige Konformitätsbewertung. Emotionserkennung am Arbeitsplatz und Social Scoring sind verboten.',
          '**DSGVO-Arbeit ändert sich nicht durch lokalen Betrieb.** Rechtsgrundlage (Artikel 6), Datenminimierung (Artikel 5), Sicherheit der Verarbeitung (Artikel 32), Audit-Logging und eine DSFA (Artikel 35) für hochwirksame Workflows. Der lokale Stack erleichtert den Nachweis dieser Kontrollen, macht sie aber nicht optional.',
          '**DACH ergänzt zwei Ebenen.** Mitbestimmung des Betriebsrats (BetrVG §87) gilt immer, wenn der Agent Mitarbeiterdaten berührt — auch passiv. §203 StGB für Berufsgeheimnisträger (Anwälte, Ärzte, Wirtschaftsprüfer, Steuerberater) macht die rein lokale Architektur nicht zur Präferenz, sondern zur Pflicht.',
          '**Der Referenz-Stack:** Ollama oder vLLM mit einem Tool-Calling-Modell (Gemma 4 27B, GLM-5.1 32B, Qwen3 32B für allgemeine Arbeit; Llama 3.2 3B für leichte E-Mail-Triage), Cline oder Goose+MCP als Agent-Runtime, ein unveränderliches Append-only-Audit-Log und manuelle Freigabe für jede Schreib- oder Sendeaktion.',
          '**Drei zu vermeidende Fehlermodi:** Bereitstellung ohne DSFA für einen Workflow, der eine benötigt; Vermischung personenbezogener und geschäftlicher Daten in einem Agent-Workspace; Auslassen von Freigabe-Gates bei ausgehenden Aktionen (E-Mail-Versand, Vertragsunterzeichnung, Zahlungsfreigabe).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Architektur:** Ollama oder vLLM + Tool-Calling-Modell + Agent-Runtime (Cline oder Goose+MCP) + Audit-Log + RAG-Store, alles auf der Infrastruktur des Verantwortlichen.',
          '**Abgedeckte Workflows:** Dokumentenannahme, E-Mail-Triage, Meeting-Zusammenfassung, Compliance-Reporting, Rechnungsverarbeitung.',
          '**EU-AI-Act-Verteilung über die 5 Vorlagen:** 4 Limited-Risk, 1 High-Risk (bei Einsatz für HR-Screening), 0 verboten.',
          '**DSFA-Schwelle:** verpflichtend für High-Risk, auslöser-basiert (Artikel 35-Kriterien) für die anderen. Die meisten Teams sollten eine für jeden Workflow durchführen, der besondere Datenkategorien berührt.',
          '**Hardware-Dimensionierung:** Gemma 4 27B und Qwen3 32B passen auf 24 GB VRAM bei Q4_K_M; GLM-5.1 32B und Llama 3.3 70B benötigen 48 GB+ für vollen Kontext.',
          '**Audit-Log-Aufbewahrung:** DSGVO-Artikel-30-Verzeichnispflichten setzen die Untergrenze; sektorale Vorgaben (Finanzdienstleistungen, Gesundheitswesen) verlängern sie. 6 Jahre sind die sichere Voreinstellung für die meisten Enterprise-Kontexte.',
          '**Kosten:** null bei API-Ausgaben; Hardware amortisiert sich gegen ein Enterprise-SaaS-KI-Abo bei einem Team von 20+ Nutzern innerhalb von 6–12 Monaten.',
        ],
      },
      whatAgentsDo: {
        id: 'what-agents-do',
        title: 'Was lokale KI-Agenten für Geschäftsteams leisten',
        content:
          '**Ein lokaler KI-Agent ist ein Tool-Calling-Modell, das innerhalb der Infrastruktur des Verantwortlichen läuft, mit expliziten Freigabe-Gates zwischen Lese- und Schreibaktionen.** Es ist kein Chat-Assistent, kein Workflow-Automator (n8n, Zapier) und kein feinjustierter Klassifikator — es ist die Schicht, die ein Modell in etwas verwandelt, das auf Ihren Systemen operiert.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ein lokaler KI-Agent ist ein Tool-Calling-Modell plus Tool-Oberfläche plus Freigabe-Gate, das vollständig innerhalb der Infrastruktur des Verantwortlichen läuft — und EU-Compliance von einer Dokumentationsübung in eine architektonische Eigenschaft verwandelt.',
          },
          {
            type: 'plain-terms',
            text: 'Ein Agent ist ein Modell, das Ihr Dateisystem lesen, Ihre Datenbank abfragen, eine E-Mail senden oder Ihre interne API aufrufen kann — wobei ein Mensch jede Schreib- oder Sendeaktion freigibt. Lassen Sie das Modell, die Tools und das Audit-Log auf Ihrer eigenen Hardware laufen, und Sie ersetzen den gesamten Cloud-LLM-Compliance-Stack (Schrems II, Auftragsverarbeiter-Listen, Übermittlungs-Folgenabschätzungen) durch eine einzige architektonische Tatsache: Nichts verlässt Ihr Netzwerk. Was übrig bleibt, sind die DSGVO-Kontrollen für die Daten selbst, die für jedes System gelten, ob Cloud oder lokal.',
          },
        ],
        items: [
          '**Definition:** Modell + Tool-Oberfläche (Dateisystem, Datenbank, E-Mail, Kalender, interne API) + Freigabe-Gate pro Schreibvorgang = Agent. Das Modell schlägt vor; die Agent-Runtime führt aus; der Mensch genehmigt alles, was den Zustand verändert oder das Netzwerk verlässt.',
          '**Abgrenzung zu Automatisierungstools.** n8n, Zapier und Make.com sind deterministische Workflows — explizite Trigger, explizite Verzweigungen, explizite Aktionen. Ein Agent ist nicht-deterministisch: Das Modell entscheidet, welches Tool mit welchen Argumenten aufgerufen wird, basierend auf Eingabe und Konversationsstand. Verwenden Sie Automatisierung, wenn der Pfad fest ist; verwenden Sie einen Agenten, wenn der Pfad pro Eingabe variiert.',
          '**Abgrenzung zu Chat-Assistenten.** Ein Chat-Assistent beantwortet Fragen; ein Agent führt Aktionen aus. ChatGPT-artige "fasse diese E-Mail zusammen" gibt Text zurück; ein Agent liest den Posteingang, klassifiziert Nachrichten, entwirft Antworten und stellt sie zur Freigabe in eine Warteschlange. Andere Oberfläche, anderes Risikoprofil.',
          '**Warum "lokal" speziell für Geschäftsworkflows zählt:** Datenresidenz ist nachweisbar (die Bytes verlassen Ihr Netzwerk nie), der Audit-Trail ist Ende-zu-Ende (dasselbe Log erfasst die Modellausführung, den Tool-Aufruf und das Ergebnis), und es gibt keinen Drittauftragsverarbeiter in der Kette. Das Compliance-Argument schreibt sich von selbst, wenn die Architektur ganze Risikokategorien eliminiert.',
          '**Wo lokale Agenten in der Organisation hineinpassen:** überall dort, wo ein Workflow personenbezogene Daten (DSGVO), Mitarbeiterdaten (Betriebsrat), vertrauliche Drittdaten (NDAs, §203 StGB) oder regulierte Geschäftsdaten (Finanzwesen, Gesundheit, Recht) verarbeitet. Lokale Agenten verbessern keine Workflows, die nur öffentliche Daten berühren — dort sind Cloud-Agenten meist schneller und billiger.',
          'Für die Protokollebene, die das praktisch macht, siehe [Ollama mit Datenbanken und APIs über MCP verbinden: Lokale Agent-Einrichtung 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=de).',
        ],
      },
      workflowTemplates: {
        id: 'workflow-templates',
        title: '5 Workflow-Vorlagen für Geschäftsteams',
        content:
          '**Diese fünf Vorlagen decken den Großteil der Produktionsnachfrage für lokale Agenten in Geschäftsteams ab.** Jede ist beschrieben als Trigger → Tools → Modellempfehlung → Freigabe-Muster → AI-Act-Stufe.',
        items: [
          '**1. Dokumentenannahme und -klassifizierung.** Trigger: PDF oder Scan landet in einem überwachten Ordner oder einer E-Mail. Tools: Dateisystem (lesen), OCR (bei Bedarf), Klassifizierungsmodell, Datenbank (schreiben). Modell: Gemma 4 27B oder Qwen3 32B für Tool-Calling und strukturierte Ausgabe. Freigabe-Muster: automatisch für Lesen und Klassifizieren, manuell für Routing, wenn das Dokument eine Person erwähnt. AI-Act-Stufe: Limited-Risk. DSFA: auslöser-basiert.',
          '**2. E-Mail-Triage mit Antwortentwürfen.** Trigger: neue Nachricht in einem überwachten Posteingang. Tools: IMAP/Graph API (nur lesen), Klassifizierungsmodell, Entwurfs-Speicher (schreiben), Benachrichtigung. Modell: Llama 3.2 3B reicht für Triage; Gemma 4 27B für Entwurfserstellung. Freigabe-Muster: automatisch für Klassifizierung und Entwurf, manuell für den Versand (immer). AI-Act-Stufe: Limited-Risk. DSFA: auslöser-basiert; verpflichtend, wenn der Posteingang Mitarbeiterdaten verarbeitet.',
          '**3. Meeting-Zusammenfassung und Aufgabenextraktion.** Trigger: Transkript landet im Speicher (Whisper oder Anbieter). Tools: Dateisystem (lesen), Zusammenfassungsmodell, Extraktionsmodell, Ausgabeziel (Notion/Jira/internes Wiki über API). Modell: Qwen3 32B für langen Kontext (128K) bei einstündigen Transkripten. Freigabe-Muster: automatisch für Zusammenfassung, manuell für Aktionspunkte, die in externe Systeme veröffentlicht werden. AI-Act-Stufe: Limited-Risk; Einwilligungserfassung pro Transkript prüfen.',
          '**4. Compliance-Report-Erzeugung.** Trigger: zeitgesteuert (monatlich, vierteljährlich). Tools: Datenbank (lesen), Report-Vorlagen-Speicher, Report-Renderer, Reviewer-Benachrichtigung. Modell: GLM-5.1 32B oder Llama 3.3 70B — langer Kontext, strukturierte Ausgabe, geringe Halluzination. Freigabe-Muster: automatisch für Datenextraktion, manuell für den veröffentlichten Report. AI-Act-Stufe: Limited-Risk; verifizieren Sie, dass die zugrunde liegenden Datenquellen eine dokumentierte Rechtsgrundlage haben. Kombinieren Sie mit [strukturierter Ausgabe und JSON-Modus](/prompt-engineering/structured-output-and-json-mode?lang=de), um die Report-Struktur stabil zu halten.',
          '**5. Rechnungsverarbeitung und -validierung.** Trigger: Rechnung landet im Finanz-Posteingang oder AP-Ordner. Tools: Dateisystem (lesen), OCR, ERP-Integration (Bestellung und Lieferant lesen), Ausnahme-Warteschlange (schreiben). Modell: Gemma 4 27B für Tool-Calling; Qwen3 32B bei Rechnungen mit nicht-standardisierten Layouts. Freigabe-Muster: automatisch für Extraktion und Bestellabgleich, manuell für jede Ausnahme (Abweichung, neuer Lieferant, hoher Betrag). AI-Act-Stufe: Limited-Risk. DSFA: in der Regel nicht ausgelöst.',
          '**Gemeinsames Muster über alle fünf:** Die Leseschritte werden automatisch freigegeben; die Schreibschritte, die externe Systeme oder Rechte von Personen betreffen, manuell. Das Audit-Log erfasst jede Entscheidung.',
        ],
      },
      aiAct: {
        id: 'ai-act',
        title: 'EU-AI-Act-Klassifizierung für Geschäftsagenten',
        content:
          '**Der EU AI Act klassifiziert KI-Systeme nach dem Risiko für Grundrechte — nicht nach technischer Raffinesse.** Dasselbe Modell und derselbe Stack bedienen Limited-Risk- und High-Risk-Workflows; die Pflichten knüpfen an die Nutzung an, nicht an die Technologie.',
        items: [
          '**Limited-Risk (die meisten Vorlagen):** Transparenzpflichten. Der Empfänger einer KI-generierten E-Mail oder Zusammenfassung muss wissen, dass KI beteiligt war. Eine klare Kennzeichnung in der Nachricht und ein einzeiliger Hinweis in der Endnutzer-Dokumentation des Systems erfüllen das in der Regel. Keine Konformitätsbewertung erforderlich.',
          '**High-Risk (spezifische Anwendungsfälle):** vollständige Konformitätsbewertung, Eintragung in der EU-Datenbank, Marktbeobachtung und in einigen Unterkategorien eine notifizierte Stelle. Die Muster, die in Geschäftsteams High-Risk treffen, sind HR-Screening (CV-Ranking, Bewerber-Scoring), Kreditentscheidungen, Anspruchsprüfungen und Zugang zu öffentlichen Diensten. Anhang III des Acts ist die maßgebliche Liste.',
          '**Verboten (nicht einsetzen):** Echtzeit-biometrische Identifizierung in öffentlichen Räumen (mit engen Ausnahmen für Strafverfolgung), Social Scoring natürlicher Personen, manipulative Techniken, die auf Schwachstellen abzielen, Emotionserkennung am Arbeitsplatz (mit begrenzten medizinischen/Sicherheits-Ausnahmen), prädiktive Polizeiarbeit auf Basis von Profiling.',
          '**Praktische Workflow → Stufen-Zuordnung für die 5 Vorlagen:** Dokumentenannahme (Limited-Risk), E-Mail-Triage (Limited-Risk), Meeting-Zusammenfassung (Limited-Risk; Einwilligung prüfen), Compliance-Reports (Limited-Risk), Rechnungsverarbeitung (Limited-Risk). Die fünf Basis-Vorlagen sind alle Limited-Risk; dieselben Vorlagen, umfunktioniert für HR-Screening oder Kreditentscheidungen, erben High-Risk-Pflichten aus der Nutzung.',
          '**Anbieter-vs.-Betreiber-Unterscheidung ist relevant.** Wenn Sie das Modell in ein Produkt einbauen, das an andere verkauft wird, sind Sie Anbieter (mehr Pflichten). Wenn Sie das System für eigene Zwecke betreiben, sind Sie Betreiber (weniger Pflichten, aber dennoch real). Interne lokale Agenten machen Sie meist zum Betreiber.',
          '**Aktion für jeden neuen Workflow:** klassifizieren Sie ihn vor der Bereitstellungsfreigabe. Die Klassifizierung ist eine einzelne Entscheidung (Limited / High / Verboten) mit schriftlicher Begründung, vom DSB oder Compliance-Lead unterzeichnet, im technischen Dossier des KI-Systems abgelegt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die High-Risk-Liste in Anhang III des EU AI Acts ist die maßgebliche Referenz — lesen Sie sie bei der Klassifizierung eines Workflows direkt. Verlassen Sie sich nicht auf zusammenfassende Artikel; der Gesetzestext ist kurz und präzise genug, um als Checkliste verwendet zu werden.',
          },
        ],
      },
      gdprControls: {
        id: 'gdpr-controls',
        title: 'DSGVO-Kontrollen für Agent-Workflows',
        content:
          '**Lokale Architektur entfernt eine Bedrohung (Cloud-LLM-Datenweitergabe), aber keine DSGVO-Pflicht für die Daten selbst.** Sechs Kontrollen decken die meisten Agent-Workflows ab; dieselben sechs lassen sich sauber in das technische Dossier abbilden, das der EU AI Act für High-Risk-Systeme erwartet.',
        items: [
          '**1. Rechtsgrundlage (Artikel 6).** Dokumentieren Sie vor der Bereitstellung, welche Grundlage gilt — Einwilligung, Vertrag, rechtliche Verpflichtung, berechtigtes Interesse, lebenswichtige Interessen oder öffentliche Aufgabe. Die meisten Geschäftsagenten-Workflows laufen auf Vertrag (Mitarbeiter-/Kundenbeziehung) oder berechtigtem Interesse (mit dokumentierter Abwägung). Besondere Datenkategorien (Gesundheit, Biometrie, politische Überzeugung) benötigen zusätzlich eine Bedingung nach Artikel 9.',
          '**2. Datenminimierung (Artikel 5(1)(c)).** Der Agent darf nur die personenbezogenen Daten sehen, die der Workflow benötigt. Praktische Folge: Filtern und chunken auf der RAG-Ebene, nicht im Modell. Vermeiden Sie das Streaming ganzer Dokumente in die Konversation, wenn nur ein Abschnitt relevant ist. Vermeiden Sie die Aufbewahrung von Zwischen-Prompts mit personenbezogenen Daten nach Abschluss der Aufgabe.',
          '**3. Zweckbindung (Artikel 5(1)(b)).** Der Agent darf nicht ohne Neubewertung über Aufgaben hinweg umgewidmet werden. Ein für die Rechnungsverarbeitung freigegebener Workflow kann nicht stillschweigend Aufgaben zur Mitarbeiter-Leistungsbeurteilung übernehmen — das ist ein neuer Zweck, eine neue Rechtsgrundlage, eine neue DSFA-Entscheidung.',
          '**4. Sicherheit der Verarbeitung (Artikel 32).** Verschlüsselung im Ruhezustand, Zugriffskontrolle auf den Workspace, unveränderliches Audit-Log und ein Incident-Response-Plan, der "das Modell hat eine Ausgabe erzeugt, die nicht hätte erzeugt werden dürfen" einschließt. Lokale Architektur deckt hier viel ab; gehen Sie nicht davon aus, dass sie alles abdeckt.',
          '**5. Audit-Logging.** Mindest-Logfelder pro Agent-Aktion: Zeitstempel, Nutzer/Initiator, Modellkennung und -version, Eingabe-Hash, Tool-Aufrufe und Argumente, Ausgabe-Hash, Genehmiger (bei manueller Freigabe). Append-only-Speicherung; Integritätsschutz (Hash-Kette oder signierte Log-Zeilen).',
          '**6. DSFA (Artikel 35).** Verpflichtend, wenn der Workflow systematische Verarbeitung personenbezogener Daten mit erheblicher Auswirkung umfasst, besondere Datenkategorien in großem Umfang oder High-Risk nach AI Act. Auslöser-basiert für alles andere. Die DSFA dokumentiert die Kontrollen, das Restrisiko und die Freigabe des DSB.',
          'Für die Datenseiten-Architektur, auf der das aufbaut, siehe [Lokales RAG für vertrauliche Geschäftsdaten](/power-local-llm/local-rag-for-private-business-data?lang=de) — die RAG-Kontrollen speisen dieselbe Audit-Pipeline.',
          'Für die Prompt- und Ausgabekontrollen darüber, siehe [Prompt-Governance in der Produktion](/prompt-engineering/prompt-governance-in-production?lang=de) und [Prompt-Injection und Sicherheit](/prompt-engineering/prompt-injection-and-security?lang=de).',
        ],
      },
      dachSpecifics: {
        id: 'dach-specifics',
        title: 'Deutschland-Spezifika: Mitbestimmung des Betriebsrats und §203 StGB',
        content:
          '**DACH-Workflows haben zwei zusätzliche Ebenen, die englischsprachige Leitfäden routinemäßig übersehen.** Beide greifen früh und beide sind entscheidungsblockierend, wenn übersehen.',
        items: [
          '**Mitbestimmung des Betriebsrats (BetrVG §87(1) Nr. 6).** Jedes technische System, das Verhalten oder Leistung von Arbeitnehmern überwacht, löst Mitbestimmung aus. "Überwachen" wird von deutschen Arbeitsgerichten weit ausgelegt — ein Agent, der Mitarbeiter-E-Mails klassifiziert oder Mitarbeiter-Meetings zusammenfasst, zählt dazu. Der Betriebsrat muss zur Designzeit einbezogen werden, nicht nach der Bereitstellung. Das Auslassen dieses Schritts hat Agent-Rollouts nachträglich gekippt.',
          '**Praktische Folge:** Bevor Sie einen Workflow bereitstellen, der Mitarbeiterdaten verarbeitet — auch passiv, auch wenn die unmittelbare Ausgabe dem Mitarbeiter selbst zugutekommt — beziehen Sie den Betriebsrat ein. Die Vereinbarung (Betriebsvereinbarung) wird Teil des technischen Dossiers des Systems. Die meisten Betriebsräte sind konstruktiv, wenn sie früh einbezogen werden; fast keiner ist es, wenn er spät einbezogen wird.',
          '**§203 StGB Berufsgeheimnis.** Anwälte, Ärzte, Wirtschaftsprüfer, Steuerberater und einige weitere Berufe haben strafrechtliche Haftung für unbefugte Offenbarung von Mandantendaten. Die Ausnahme für "Gehilfen" (§203(3)) deckt internes Personal ab, aber nicht automatisch externe Dienstleister. Ein Cloud-LLM ist ein externer Dienstleister; das ist der rechtliche Kern, warum §203-Kanzleien auf lokale Stacks umgestiegen sind.',
          '**Praktische Folge:** Für jeden §203-pflichtigen Beruf ist die rein lokale Architektur keine Präferenz, sondern die Standardvoraussetzung, damit der Workflow überhaupt existieren darf. Der Vertrag mit dem Anbieter des Agenten (falls vorhanden) muss §203-Compliance-Klauseln enthalten; das technische Dossier muss dokumentieren, dass keine Mandantendaten die Infrastruktur der Kanzlei verlassen.',
          '**Österreich und Schweiz:** Österreich spiegelt §203 eng (StGB §121); die Schweizer Vertraulichkeit (Art. 321 StGB CH) ist sogar weiter gefasst. Die architektonische Schlussfolgerung ist dieselbe — rein lokal, keine Ausnahmen für sensible Berufsdaten.',
          'Für das Datenseiten-Compliance-Bild beim selben Verantwortlichen siehe [Lokales RAG für vertrauliche Geschäftsdaten](/power-local-llm/local-rag-for-private-business-data?lang=de) — der RAG- und Agent-Stack teilen das Audit-Log und die Zugriffskontrolle.',
        ],
      },
      modelPick: {
        id: 'model-pick',
        title: 'Auswahl des richtigen Modells für Geschäftsagenten',
        content:
          '**Tool-Call-Zuverlässigkeit ist eine Modelleigenschaft, keine Harness-Eigenschaft.** Dieselbe Harness mit einem kleinen Allzweckmodell scheitert; mit einem auf Tool-Calls trainierten 27B+-Modell gelingt sie. Wählen Sie zuerst das Modell.',
        items: [
          '**Gemma 4 27B (`gemma4:27b`).** Bester Allzweck-Tool-Caller im Mai 2026. Passt in 16 GB Unified Memory oder 24 GB VRAM bei Q4_K_M. Zuverlässig bei Dokumentenannahme, E-Mail-Triage und Rechnungsverarbeitung. Etwas konservativ bei verketteten Tool-Aufrufen — passt zu Geschäftsworkflows, in denen jeder Schritt ohnehin explizit freigegeben wird.',
          '**GLM-5.1 32B (`glm5:32b`).** 128K Kontext out-of-the-box. Starke Tool-Call-Zuverlässigkeit. Die Wahl für Compliance-Reporting und Meeting-Zusammenfassungen mit langer Eingabe. Möchte 24 GB+ VRAM bei Q4_K_M für vollen Kontext.',
          '**Qwen3 32B (`qwen3:32b`).** Ausgewogen, sehr zuverlässig bei mehrstufigen Plänen. Guter Fallback, wenn Gemma 4 zu konservativ ist. 32K Kontext out-of-the-box; passt für die meisten Geschäftsaufgaben.',
          '**Llama 3.3 70B (`llama3.3:70b`).** Höchste Decke, schwerste Hardware. 48 GB+ VRAM oder 64 GB Unified Memory bei Q4_K_M. Verwenden Sie es für Compliance-Reports und Ausnahmebehandlung, wenn Zuverlässigkeit wichtiger ist als Geschwindigkeit.',
          '**Llama 3.2 3B (`llama3.2:3b`).** Leichte Wahl für Hochvolumen-Triage. Läuft komfortabel auf 8 GB VRAM. Gut genug für "Ist das Kundensupport / Vertrieb / Spam"; nicht gut genug für das Verfassen von Antworten. Kombinieren Sie mit einem 27B+-Modell für den Entwurfsschritt.',
          '**Mistral Large.** EU-gehostete Alternative für hybride Setups, in denen rein lokal überdimensioniert ist, US-Cloud aber nicht infrage kommt. Über Mistrals EU-Endpoint mit AVV einsetzen; Daten bleiben in der EU-Jurisdiktion.',
          '**Für Tool-Calling vermeiden:** alles unter 7B für Produktionsarbeit, jedes Allzweckmodell ohne explizites Tool-Call-Training und stärkere Quantisierungen als Q4_K_M am unteren Ende. Symptome sind fehlerhafte Tool-Aufrufe, halluzinierte Argumente und stehengebliebene Agent-Loops.',
          'Für die Vergleichsdaten siehe [Beste lokale Modelle für Tool-Calling 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=de). Für VRAM- und Hardware-Dimensionierung über dieselben Modelle siehe [Lokaler-LLM-Hardware-Leitfaden 2026](/local-llms/local-llm-hardware-guide-2026?lang=de).',
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'Agent-Stack-Vergleich für den Geschäftseinsatz',
        content:
          '**Vier Agent-Runtimes sind 2026 für Geschäftsworkflows glaubwürdig.** Sie unterscheiden sich bei Freigabe-Gate-UX, Audit-Trail-Reichtum und Eigenentwicklungsaufwand.',
        columns: ['Runtime', 'Setup', 'Freigabe-Gates', 'Audit-Trail', 'Geeignet für'],
        rows: [
          { 'Runtime': 'Cline (VS Code)', 'Setup': 'Eine Extension-Installation', 'Freigabe-Gates': 'Pro Schritt, in der IDE; Auto-Freigabe-Allowlist', 'Audit-Trail': 'In-Extension-Log; Export für Compliance nötig', 'Geeignet für': 'Coding-artige Workflows, Single-Developer-Audit' },
          { 'Runtime': 'Goose + MCP', 'Setup': 'Brew install + mcp.json', 'Freigabe-Gates': 'CLI-Prompts; pro Tool konfigurierbar', 'Audit-Trail': 'CLI-Logdatei; in unveränderlichen Speicher rotieren', 'Geeignet für': 'CLI-Workflows, Headless-Server' },
          { 'Runtime': 'n8n self-hosted + Ollama', 'Setup': 'Docker + n8n LLM-Knoten', 'Freigabe-Gates': 'Workflow-Ebene Human-in-the-Loop-Knoten', 'Audit-Trail': 'Natives n8n-Ausführungslog + Datenbank', 'Geeignet für': 'Deterministisch geformte Workflows mit ein bis zwei Modellschritten' },
          { 'Runtime': 'Custom LangGraph + Ollama', 'Setup': 'Python-Projekt, echte Test-Suite', 'Freigabe-Gates': 'Selbst gebaut (Interrupts-API)', 'Audit-Trail': 'Selbst gebaut', 'Geeignet für': 'Produktions-Workflows, die den Engineering-Aufwand rechtfertigen' },
        ],
        items: [
          '**Wählen Sie Cline + Ollama**, wenn das Team entwicklungslastig ist und die Workflows in VS Code passen. Geringste Installations-Reibung, schnellster Weg zu einem funktionierenden Agenten.',
          '**Wählen Sie Goose + MCP**, wenn der Workflow auf einem Headless-Server läuft (geplanter Compliance-Report, Ordner-überwachender Ingestor) ohne IDE.',
          '**Wählen Sie n8n + Ollama**, wenn der Workflow eine deterministische Form mit ein oder zwei Modellschritten hat. n8ns Human-in-the-Loop-Knoten geben Ihnen Freigabe-Gates ohne eigene Oberfläche.',
          '**Wählen Sie Custom LangGraph** nur, wenn die Workflow-Form mit den obigen wirklich nicht kompatibel ist. Der Aufbau-Aufwand ist real; der Audit-Trail- und Freigabe-Gate-Code liegt bei Ihnen.',
          '**Für einen ehrlichen Zuverlässigkeitsvergleich über diese Stacks**, siehe [Lokale KI-Agenten 2026: Was tatsächlich funktioniert (und was noch scheitert)](/power-local-llm/autonomous-local-agents-actually-work?lang=de).',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim Einsatz lokaler Agenten in EU-Geschäftsworkflows',
        items: [
          '**Fehler 1: Bereitstellung ohne DSFA.** Jeder Workflow, der besondere Datenkategorien berührt oder Entscheidungen über Personen trifft, benötigt eine DSFA. Die DSFA ist kurz — 4–8 Seiten für die meisten Agent-Workflows — aber verpflichtend und genau das, wonach die Aufsichtsbehörde zuerst fragt. Schreiben Sie sie vor der Bereitstellung, nicht danach.',
          '**Fehler 2: Cloud-verbundener Agent für vertrauliche Dokumente.** Ein lokales Modell reicht nicht aus, wenn Agent-Runtime, Audit-Log oder Embeddings-Store in fremder Cloud liegen. Die Architektur ist Ende-zu-Ende; eine einzige Cloud-Abhängigkeit in der Kette bricht das Lokal-Argument.',
          '**Fehler 3: Kein Freigabe-Gate für Schreib- oder Sendeaktionen.** Der Agent liest, klassifiziert, entwirft, sendet. Der Sendeschritt ist der, den Menschen jedes Mal freigeben müssen, egal wie zuverlässig das Modell bisher war. Auto-Send-Agenten sind, wie die Aufsichtsbehörde von Ihnen erfährt.',
          '**Fehler 4: Vermischung personenbezogener und geschäftlicher Daten in einem Workspace.** Das Arbeitsverzeichnis und der Vektor-Store des Agenten sollten pro Workflow gescopt sein, nicht geteilt. Kreuzkontamination verletzt die Zweckbindung; die Bereinigung ist teuer.',
          '**Fehler 5: Audit-Log auslassen.** "Wir können es aus dem Konversationsverlauf des Modells rekonstruieren" ist kein Audit-Log. Append-only, hash-verkettet, gemäß einschlägiger Aufbewahrungsfrist gespeichert, abfragbar durch DSAR-Bearbeitung — das ist die Messlatte.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[EU AI Act konsolidierter Text (artificialintelligenceact.eu)](https://artificialintelligenceact.eu/the-act/) — offizieller Aggregat der Verordnung; Anhang III ist die maßgebliche High-Risk-Liste.',
          '[DSGVO Volltext (gdpr-info.eu)](https://gdpr-info.eu/) — Artikel 5, 6, 25, 32, 35 sind die maßgeblichen für Agent-Design.',
          '[NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — nicht-EU, nicht bindend, aber die Struktur GOVERN / MAP / MEASURE / MANAGE ist eine nützliche Audit-Vorbereitungs-Checkliste.',
          '[EDSA-Leitlinien 03/2018 zu automatisierter Einzelfallentscheidung](https://edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en) — maßgeblich für jeden Workflow, der Entscheidungen über Personen trifft; relevant unter DSGVO Artikel 22 und AI Act.',
          '[BfDI-Positionspapier zu KI-Systemen (BfDI)](https://www.bfdi.bund.de/) — DACH-spezifisch, verweist auf §203 StGB und Betriebsrats-Praxis.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Sind lokale KI-Agenten standardmäßig DSGVO-konform?',
            a: 'Nein — sie sind durch Architektur DSGVO-kompatibel, aber nicht standardmäßig DSGVO-konform. Die rein lokale Architektur entfernt das Cloud-LLM-Bedrohungsmodell (Schrems II, Auftragsverarbeiter-Listen, grenzüberschreitende Übermittlungen), aber die DSGVO-Kontrollen für die Daten selbst gelten weiterhin: Rechtsgrundlage (Artikel 6), Datenminimierung (Artikel 5), Sicherheit der Verarbeitung (Artikel 32), Audit-Logging und eine DSFA, wo der Workflow es rechtfertigt. Der lokale Stack erleichtert den Nachweis dieser Kontrollen, macht sie aber nicht optional.',
          },
          {
            q: 'Welche Workflows sind unter dem EU AI Act High-Risk?',
            a: 'Anhang III listet die maßgeblichen High-Risk-Anwendungsfälle. Die Muster, die Geschäftsteams am häufigsten treffen, sind HR (CV-Screening, Bewerber-Ranking, Leistungsbeurteilung), Kreditentscheidungen, Anspruchsprüfungen und Zugang zu wesentlichen Diensten. Die meisten allgemeinen Geschäftsworkflows (Dokumentenannahme, E-Mail-Triage, Meeting-Zusammenfassung, Rechnungsverarbeitung, Compliance-Reporting) sind Limited-Risk — nur Transparenzpflichten, keine vollständige Konformitätsbewertung.',
          },
          {
            q: 'Brauche ich eine DSFA für einen E-Mail-Triage-Agenten?',
            a: 'Auslöser-basiert. Eine DSFA ist verpflichtend, wenn der Workflow systematische Verarbeitung personenbezogener Daten mit erheblicher Auswirkung umfasst (Artikel 35(1)) oder eine Pflicht-DSFA-Liste der Aufsichtsbehörde trifft. Ein allgemeiner Posteingang-Triage-Agent löst oft nicht automatisch aus; derselbe Agent in einem HR- oder Bewerber-Posteingang schon. Die meisten Teams sollten eine kurze DSFA für jeden Posteingang mit Mitarbeiterdaten durchführen, unabhängig von strikten Auslöser-Kriterien — die Kosten sind Stunden, der Vorteil ist dokumentierte Freigabe.',
          },
          {
            q: 'Kann ein lokaler Agent Mitarbeiterdaten verarbeiten?',
            a: 'Ja, mit zwei zusätzlichen Schritten in DACH. Erstens: Mitbestimmung des Betriebsrats (BetrVG §87(1) Nr. 6) — Betriebsrat zur Designzeit einbeziehen, eine Betriebsvereinbarung unterzeichnen, die Zweck, Aufbewahrung, Zugriff und Audit-Anforderungen definiert. Zweitens: Rechtsgrundlage nach DSGVO — meist Vertrag oder berechtigtes Interesse mit dokumentierter Abwägung. Das Auslassen des Betriebsrats-Schritts hat Rollouts vor deutschen Arbeitsgerichten nachträglich gekippt.',
          },
          {
            q: 'Welche Modellgröße bewältigt Geschäftsworkflows zuverlässig?',
            a: 'Gemma 4 27B ist die zuverlässige Voreinstellung für Allzweck-Tool-Calling. GLM-5.1 32B ist die Wahl bei langer Eingabe (Compliance-Reporting, einstündige Meeting-Transkripte) — 128K Kontext out-of-the-box. Qwen3 32B ist der ausgewogene Fallback. Llama 3.3 70B hat die höchste Decke, möchte aber 48 GB+ VRAM. Llama 3.2 3B reicht für Hochvolumen-Klassifikation, nicht für Entwürfe. Modelle unter 7B emittieren fehlerhafte Tool-Aufrufe, unabhängig von der umgebenden Agent-Runtime.',
          },
          {
            q: 'Wie auditiere ich, was der Agent getan hat?',
            a: 'Jede Agent-Aktion schreibt einen Logeintrag: Zeitstempel, Nutzer/Initiator, Modellkennung und -version, Eingabe-Hash, Tool-Aufrufe mit Argumenten, Ausgabe-Hash, Genehmiger bei manueller Freigabe. Speicherung ist append-only mit Integritätsschutz (Hash-Kette oder signierte Log-Zeilen). Aufbewahrung folgt DSGVO Artikel 30 als Untergrenze; sektorale Vorgaben (Finanz, Gesundheit) verlängern sie. Das Audit-Log beantwortet DSAR-Anfragen und speist das technische Dossier des AI Acts in einer Form.',
          },
          {
            q: 'Kann ich einen Agenten abteilungsübergreifend teilen?',
            a: 'Architektonisch ja, rechtlich heikel. Jede Abteilung hat ihren eigenen Zweck, ihre eigene Rechtsgrundlage, ihre eigene Aufbewahrung und potenziell ihre eigene Betriebsvereinbarung. Geteilte Agenten verwischen all das und schaffen Kreuzkontaminations-Risiko unter Zweckbindung (Artikel 5(1)(b)). Das saubere Muster: eine Agent-Runtime, separate Workspaces pro Workflow, separate Audit-Logs pro Workflow, einzelne Bereitstellung des zugrunde liegenden Modells. Das Modell ist eine geteilte Ressource; die Workflows sind es nicht.',
          },
          {
            q: 'Was ist mit grenzüberschreitenden Tochtergesellschaften?',
            a: 'Wenn der Verantwortliche die EU-Einheit ist und die Daten in EU-Infrastruktur bleiben, deckt die rein lokale Architektur die meisten grenzüberschreitenden Bedenken standardmäßig ab. Beachten Sie zwei Fälle: eine nicht-EU-Tochter, die den lokalen Agenten auf EU-personenbezogenen Daten betreibt (die Daten müssen in der EU bleiben; der Agent kann remote betrieben werden, solange keine personenbezogenen Daten ausgehen), und ein nicht-EU-Support-Team, das auf die Ausgabe des Agenten zugreift (als Übermittlung behandeln; Rechtsgrundlage unter Kapitel V DSGVO dokumentieren). Mistral Large auf Scaleway ist die übliche hybride Wahl, wenn rein lokal überdimensioniert und US-Cloud nicht infrage kommt.',
          },
          {
            q: 'Wie passen lokale KI-Agenten zum BSI-Grundschutz?',
            a: 'Die einschlägigen Bausteine sind APP.5 (für Anwendungssoftware) und SYS.1.x (für IT-Systeme), ergänzt durch CON.3 (Datensicherungskonzept) und OPS.1.1.5 (Protokollierung). Der lokale Stack erfüllt mehrere Standardanforderungen automatisch (Datenresidenz, keine Drittauftragsverarbeiter, durchgängiger Audit-Trail). Die verbleibende Arbeit konzentriert sich auf Zugriffsmanagement (ORP.4), Härtung des Hosts (SYS.1.1) und Notfallplanung (DER.2.1). Dokumentieren Sie die Bausteinzuordnung im technischen Dossier des Systems; das ist genau das, was BSI-konforme Auditoren erwarten.',
          },
          {
            q: 'Ist der Aufwand für einen mittelständischen Betrieb ohne festen DSB tragbar?',
            a: 'Ja, mit drei Anpassungen. Erstens: nutzen Sie eine externe DSB-Stelle für die DSFA-Prüfung und Freigabe (Tagessätze 1.000–2.000 €; eine DSFA dauert 1–2 Tage). Zweitens: starten Sie mit einer einzigen Workflow-Vorlage (Rechnungsverarbeitung oder Dokumentenannahme — beide Limited-Risk, niedrige DSFA-Schwelle), nicht mit allen fünf gleichzeitig. Drittens: Cline + Ollama + Gemma 4 27B auf einem Workstation-Mac (M5 Max 64 GB) reicht für 5–20 Nutzer; kein Server-Operations-Team erforderlich. Die anfänglichen Kosten liegen unter 5.000 €; das amortisiert sich gegen Enterprise-SaaS-KI-Lizenzen in 6–12 Monaten.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Lokales RAG für vertrauliche Geschäftsdaten](/power-local-llm/local-rag-for-private-business-data?lang=de) — die DSGVO-konforme Datenseiten-Architektur, die dieselbe Audit-Pipeline speist.',
          '[Ollama mit Datenbanken und APIs über MCP verbinden: Lokale Agent-Einrichtung 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=de) — die Protokollebene für Dateisystem-, Datenbank-, Browser- und GitHub-Tools.',
          '[Lokale KI-Agenten 2026: Was tatsächlich funktioniert (und was noch scheitert)](/power-local-llm/autonomous-local-agents-actually-work?lang=de) — ehrlicher Zuverlässigkeitsvergleich über die vier oben empfohlenen Agent-Runtimes.',
          '[Zapier durch lokale KI-Agenten ersetzen](/power-local-llm/replace-zapier-with-local-ai-agents?lang=de) — n8n + Ollama Workflow-Vorlagen für das deterministisch geformte Ende des Agent-Spektrums.',
          '[Beste lokale Modelle für Tool-Calling 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=de) — Head-to-Head-Benchmarks für die in diesem Leitfaden empfohlenen Modelle.',
          '[Lokale-LLM-Sicherheits- und Datenschutz-Checkliste](/local-llms/local-llm-security-privacy-checklist?lang=de) — Kontroll-Ebene für dieselbe Hardware, die diese Workflows ausführt.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Agents IA locaux pour workflows métier : guide conformité UE 2026',
    seoTitle: 'Agents IA locaux : conformité RGPD & EU AI Act 2026',
    intro:
      'Les agents IA locaux simplifient nettement la conformité européenne. Lorsque le modèle, les serveurs d\'outils et les données résident tous dans votre propre infrastructure, le modèle de menace LLM-cloud disparaît : Schrems II, listes de sous-traitants et analyses d\'impact des transferts transfrontaliers ne s\'appliquent plus. Le travail réel se déplace vers les obligations qui s\'appliquent toujours : contrôles RGPD sur les données traitées, classification EU AI Act du workflow automatisé, et exigences spécifiques (en France : positionnement CNIL, obligations sectorielles). Ce guide présente 5 modèles de workflows métier prêts pour la production, les contrôles que chacun nécessite, ainsi que les choix de modèle et de stack qui résistent à un audit.',
    metaDescription:
      'Déployer des agents IA locaux pour le traitement documentaire, le tri d\'e-mails et le reporting sous RGPD et EU AI Act. Architecture, contrôles de conformité et 5 modèles de workflows.',
    twitterDescription:
      'Agents IA locaux + conformité UE : 5 modèles de workflows, contrôles RGPD, classification EU AI Act, spécificités CNIL. Aucune donnée ne sort de votre infrastructure.',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Llama 3.2 3B',
      'Llama 3.3 70B',
      'Mistral Large',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      'Équipes entreprise, délégués à la protection des données, responsables conformité et responsables informatiques déployant des agents IA locaux sous RGPD, EU AI Act et exigences sectorielles françaises.',
    readTime: '14 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'agent IA local',
    targetKeywords: [
      'agents ia locaux rgpd',
      'eu ai act agents métier',
      'llm local workflows métier',
      'agent ia on-premise conformité',
      'rgpd agent ia aipd',
      'cnil agent ia local',
    ],
    leadAnswerBlock:
      '**Les agents IA locaux sont compatibles RGPD par architecture, et non par hasard — mais uniquement lorsque l\'ensemble du stack (modèle, serveurs d\'outils, journal d\'audit, vector store) s\'exécute dans l\'infrastructure du responsable de traitement avec zéro flux sortant. Cinq workflows métier couvrent l\'essentiel des besoins en production : ingestion et classification documentaire, tri d\'e-mails avec brouillons de réponse, synthèse de réunion avec extraction d\'actions, génération de rapports de conformité, et traitement de factures avec rapprochement de bons de commande. Chacun a une classification EU AI Act différente (la plupart sont à risque limité, le screening RH est à haut risque, aucun n\'est interdit) et un seuil d\'AIPD différent. Le stack recommandé : Ollama ou vLLM servant Gemma 4 27B / GLM-5.1 32B / Qwen3 32B (modèles avec tool-calling), Cline ou Goose+MCP comme runtime d\'agent, un journal d\'audit immuable, et validation humaine sur chaque action d\'écriture ou d\'envoi. Déployer sans AIPD, mélanger données personnelles et données métier dans un même workspace, et omettre les portes de validation sur les actions d\'envoi sont les trois erreurs les plus fréquentes.**',
    quickAnswerTop: {
      fr: {
        question: 'Les agents IA locaux sont-ils conformes au RGPD pour les workflows métier ?',
        answer:
          'Les agents IA locaux sont compatibles RGPD par architecture, mais non conformes RGPD par défaut. L\'architecture élimine le modèle de menace LLM-cloud — pas de Schrems II, pas de liste de sous-traitants, pas d\'analyse d\'impact des transferts transfrontaliers — car le modèle, les serveurs d\'outils et les données résident tous dans l\'infrastructure du responsable de traitement. Le travail restant correspond aux contrôles RGPD applicables à tout système traitant des données personnelles : base légale (article 6), minimisation des données (article 5), limitation des finalités (article 5), sécurité du traitement (article 32), journalisation d\'audit, et une AIPD (article 35) lorsque le workflow a un impact élevé sur les personnes. L\'EU AI Act ajoute une seconde couche : la plupart des workflows métier sont à risque limité (obligations de transparence uniquement), le screening RH et les décisions de crédit sont à haut risque (évaluation de conformité complète), et certains schémas (reconnaissance d\'émotions au travail, scoring social) sont interdits. Construire le stack local est la partie facile ; documenter les contrôles et conduire l\'AIPD est le vrai travail. La CNIL recommande explicitement l\'IA locale pour les données professionnelles sensibles (santé, finance, juridique).',
        bullets: [
          'L\'architecture locale supprime le modèle de menace LLM-cloud. Le travail RGPD restant : minimisation, base légale, sécurité du traitement, journalisation d\'audit, et une AIPD lorsque le workflow le justifie.',
          '5 modèles de workflows couvrent l\'essentiel des besoins : ingestion documentaire, tri d\'e-mails, synthèse de réunion, rapports de conformité, traitement de factures.',
          'Classification EU AI Act : la plupart des modèles sont à risque limité (transparence uniquement) ; le screening RH est à haut risque (évaluation complète) ; reconnaissance d\'émotions au travail et scoring social sont interdits.',
          'Stack : Ollama ou vLLM + Gemma 4 27B / GLM-5.1 32B / Qwen3 32B (tool-calling) + Cline ou Goose+MCP + journal d\'audit immuable + validation humaine sur chaque écriture/envoi.',
          'France : la CNIL recommande l\'IA locale pour données sensibles professionnelles (cabinets médicaux, juridiques, financiers, comptables).',
          'Trois erreurs fréquentes : déployer sans AIPD, mélanger données personnelles et métier dans un workspace partagé, omettre les portes de validation sur les actions d\'envoi.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits saillants', anchor: '#quick-facts' },
      { label: 'Ce que font les agents IA locaux pour les équipes métier', anchor: '#what-agents-do' },
      { label: '5 modèles de workflows métier', anchor: '#workflow-templates' },
      { label: 'Classification EU AI Act', anchor: '#ai-act' },
      { label: 'Contrôles RGPD pour workflows d\'agents', anchor: '#gdpr-controls' },
      { label: 'Allemagne : comité d\'entreprise et §203 StGB', anchor: '#dach-specifics' },
      { label: 'Choisir le bon modèle', anchor: '#model-pick' },
      { label: 'Comparaison de stacks d\'agents', anchor: '#stack-comparison' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Pour aller plus loin', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-business-workflows-eu-compliance-static.html',
    gammaDescription: 'La présentation ci-dessous couvre : 5 modèles de workflows de production pour agents IA locaux conformes à l\'UE (ingestion documentaire, triage d\'e-mails, résumé de réunions, rapports de conformité, traitement des factures), classification EU AI Act (Risque limité vs Haut risque vs Interdit), 6 contrôles RGPD, spécificités DACH (comité d\'entreprise BetrVG §87, §203 StGB secret professionnel), tableau de sélection des modèles et 5 erreurs courantes. Téléchargez le PDF comme carte de référence conformité IA EU.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**L\'architecture purement locale est le plus fort contrôle de confidentialité.** Lorsque le modèle, les serveurs d\'outils et les données résident dans l\'infrastructure du responsable de traitement avec zéro flux sortant, le modèle de menace LLM-cloud disparaît — Schrems II, listes de sous-traitants et analyses d\'impact transfrontaliers ne s\'appliquent plus.',
          '**5 modèles de workflows couvrent l\'essentiel des besoins en production :** ingestion et classification documentaire, tri d\'e-mails avec brouillons de réponse, synthèse de réunion avec extraction d\'actions, génération de rapports de conformité, traitement de factures avec rapprochement de bons. Chacun a une classification de données, une base légale, un niveau AI Act et un format de journal d\'audit définis.',
          '**Les niveaux EU AI Act déterminent les obligations.** La plupart des workflows métier sont à risque limité (transparence vis-à-vis de l\'utilisateur sur l\'implication de l\'IA). Le screening RH, les décisions de crédit et l\'éligibilité aux prestations sont à haut risque et requièrent une évaluation complète. La reconnaissance d\'émotions au travail et le scoring social sont interdits.',
          '**Le travail RGPD reste identique en local.** Base légale (article 6), minimisation (article 5), sécurité du traitement (article 32), journal d\'audit, et AIPD (article 35) pour les workflows à fort impact. Le stack local facilite la preuve de ces contrôles ; il ne les rend pas optionnels.',
          '**France : la CNIL recommande l\'IA locale pour les données professionnelles sensibles** — santé, juridique, finance. La conformité §203 StGB allemande s\'applique aussi aux structures opérant en DACH (cabinets d\'avocats, médecins, experts-comptables).',
          '**Le stack de référence :** Ollama ou vLLM avec un modèle tool-calling (Gemma 4 27B, GLM-5.1 32B, Qwen3 32B pour les tâches générales ; Llama 3.2 3B pour le tri d\'e-mails léger), Cline ou Goose+MCP comme runtime d\'agent, un journal d\'audit append-only immuable, et validation humaine sur chaque action d\'écriture ou d\'envoi.',
          '**Trois modes d\'échec à éviter :** déployer sans AIPD un workflow qui en nécessite une, mélanger données personnelles et métier dans un workspace d\'agent unique, et omettre les portes de validation sur les actions sortantes (envoi d\'e-mail, signature de contrat, autorisation de paiement).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits saillants',
        items: [
          '**Architecture :** Ollama ou vLLM + modèle tool-calling + runtime d\'agent (Cline ou Goose+MCP) + journal d\'audit + RAG store, le tout sur l\'infrastructure du responsable de traitement.',
          '**Workflows couverts :** ingestion documentaire, tri d\'e-mails, synthèse de réunion, reporting de conformité, traitement de factures.',
          '**Répartition EU AI Act sur les 5 modèles :** 4 à risque limité, 1 à haut risque (lorsqu\'utilisé pour le screening RH), 0 interdit.',
          '**Seuil AIPD :** obligatoire pour le haut risque, déclenchée selon les critères de l\'article 35 pour les autres. La plupart des équipes devraient en réaliser une pour tout workflow touchant des données sensibles.',
          '**Dimensionnement matériel :** Gemma 4 27B et Qwen3 32B tiennent sur 24 GB VRAM en Q4_K_M ; GLM-5.1 32B et Llama 3.3 70B demandent 48 GB+ pour un contexte étendu.',
          '**Conservation des journaux :** les obligations du registre des activités (article 30 RGPD) fixent le plancher ; les règles sectorielles (services financiers, santé) l\'allongent. 6 ans est la valeur par défaut sûre dans la plupart des contextes entreprise.',
          '**Coût :** zéro en dépenses API ; le matériel s\'amortit face à un abonnement IA SaaS d\'entreprise en 6 à 12 mois pour une équipe de 20+ utilisateurs.',
        ],
      },
      whatAgentsDo: {
        id: 'what-agents-do',
        title: 'Ce que font les agents IA locaux pour les équipes métier',
        content:
          '**Un agent IA local est un modèle tool-calling qui s\'exécute dans l\'infrastructure du responsable de traitement, avec des portes de validation explicites entre actions de lecture et d\'écriture.** Ce n\'est pas un assistant conversationnel, ni un automatiseur de workflows (n8n, Zapier), ni un classifieur fine-tuné — c\'est la couche qui transforme un modèle en quelque chose qui opère sur vos systèmes.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un agent IA local est un modèle tool-calling plus une surface d\'outils plus une porte de validation, exécuté entièrement dans l\'infrastructure du responsable de traitement — transformant la conformité européenne d\'un exercice de documentation en une propriété architecturale.',
          },
          {
            type: 'plain-terms',
            text: 'Un agent est un modèle qui peut lire votre système de fichiers, interroger votre base de données, envoyer un e-mail ou appeler votre API interne — avec un humain validant chaque action d\'écriture ou d\'envoi. Faites tourner le modèle, les outils et le journal d\'audit sur votre propre matériel, et vous remplacez tout le stack de conformité LLM-cloud (Schrems II, listes de sous-traitants, analyses d\'impact transfrontaliers) par un seul fait architectural : rien ne quitte votre réseau. Le reste, ce sont les contrôles RGPD sur les données elles-mêmes, qui s\'appliquent à tout système, cloud ou local.',
          },
        ],
        items: [
          '**Définition :** modèle + surface d\'outils (système de fichiers, base de données, e-mail, calendrier, API interne) + porte de validation par écriture = agent. Le modèle propose ; le runtime exécute ; l\'humain valide tout ce qui modifie l\'état ou sort du réseau.',
          '**Distinction avec les outils d\'automatisation.** n8n, Zapier et Make.com sont des workflows déterministes — déclencheurs explicites, branches explicites, actions explicites. Un agent est non déterministe : le modèle décide quel outil appeler avec quels arguments, en fonction de l\'entrée et de l\'état conversationnel. Utilisez l\'automatisation lorsque le chemin est fixe ; utilisez un agent lorsque le chemin varie selon l\'entrée.',
          '**Distinction avec un assistant conversationnel.** Un assistant répond aux questions ; un agent agit. Un "résume cet e-mail" façon ChatGPT renvoie du texte ; un agent lit la boîte, classifie les messages, rédige des réponses et les met en file d\'attente pour validation. Surface différente, profil de risque différent.',
          '**Pourquoi le local compte spécifiquement pour les workflows métier :** la résidence des données est démontrable (les octets ne quittent jamais le réseau), la traçabilité d\'audit est de bout en bout (le même journal capture l\'invocation du modèle, l\'appel d\'outil et le résultat), et il n\'y a aucun sous-traitant tiers dans la chaîne. L\'argument de conformité s\'écrit de lui-même quand l\'architecture élimine des catégories entières de risque.',
          '**Où les agents locaux trouvent leur place dans l\'organisation :** partout où un workflow traite des données personnelles (RGPD), des données salariales (comité d\'entreprise), des données tierces confidentielles (NDA, secret professionnel), ou des données métier régulées (finance, santé, juridique). Les agents locaux n\'améliorent pas les workflows ne touchant que des données publiques — là, les agents cloud sont généralement plus rapides et moins coûteux.',
          'Pour la couche protocolaire qui rend tout cela pratique, voir [Connecter Ollama aux bases de données et APIs avec MCP : configuration d\'agent local 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=fr).',
        ],
      },
      workflowTemplates: {
        id: 'workflow-templates',
        title: '5 modèles de workflows métier',
        content:
          '**Ces cinq modèles couvrent l\'essentiel des besoins de production pour les agents locaux dans les équipes métier.** Chacun est décrit comme déclencheur → outils → recommandation de modèle → schéma de validation → niveau AI Act.',
        items: [
          '**1. Ingestion et classification documentaire.** Déclencheur : un PDF ou scan arrive dans un dossier surveillé ou par e-mail. Outils : système de fichiers (lecture), OCR (si nécessaire), modèle de classification, base de données (écriture). Modèle : Gemma 4 27B ou Qwen3 32B pour le tool-calling et la sortie structurée. Validation : automatique pour la lecture et la classification, manuelle pour le routage si le document mentionne une personne. Niveau AI Act : risque limité. AIPD : déclenchée selon contexte.',
          '**2. Tri d\'e-mails avec brouillons de réponse.** Déclencheur : nouveau message dans une boîte surveillée. Outils : IMAP/Graph API (lecture seule), modèle de classification, stockage des brouillons (écriture), notification. Modèle : Llama 3.2 3B suffit pour le tri ; Gemma 4 27B pour la rédaction. Validation : automatique pour classification et brouillon, manuelle pour l\'envoi (toujours). Niveau AI Act : risque limité. AIPD : déclenchée ; obligatoire si la boîte traite des données salariales.',
          '**3. Synthèse de réunion et extraction d\'actions.** Déclencheur : une transcription arrive dans le stockage (Whisper ou prestataire). Outils : système de fichiers (lecture), modèle de synthèse, modèle d\'extraction, cible de sortie (Notion/Jira/wiki interne via API). Modèle : Qwen3 32B pour le contexte long (128K) sur des transcriptions d\'une heure. Validation : automatique pour la synthèse, manuelle pour les actions publiées dans des systèmes externes. Niveau AI Act : risque limité ; vérifier la capture du consentement par transcription.',
          '**4. Génération de rapports de conformité.** Déclencheur : programmé (mensuel, trimestriel). Outils : base de données (lecture), stockage de modèles de rapports, moteur de rendu, notification au relecteur. Modèle : GLM-5.1 32B ou Llama 3.3 70B — contexte long, sortie structurée, faible hallucination. Validation : automatique pour l\'extraction de données, manuelle pour le rapport publié. Niveau AI Act : risque limité ; vérifier que les sources de données ont une base légale documentée. Combiner avec [sortie structurée et mode JSON](/prompt-engineering/structured-output-and-json-mode?lang=fr) pour stabiliser la forme du rapport.',
          '**5. Traitement et validation de factures.** Déclencheur : une facture arrive dans la boîte finance ou le dossier AP. Outils : système de fichiers (lecture), OCR, intégration ERP (lecture du BC et du fournisseur), file d\'exceptions (écriture). Modèle : Gemma 4 27B pour le tool-calling ; Qwen3 32B pour les factures à mise en page non standard. Validation : automatique pour extraction et rapprochement BC, manuelle pour toute exception (écart, nouveau fournisseur, montant élevé). Niveau AI Act : risque limité. AIPD : généralement non déclenchée.',
          '**Schéma commun aux cinq :** les étapes de lecture sont auto-validées ; les étapes d\'écriture qui affectent des systèmes externes ou des droits de personnes sont validées manuellement. Le journal d\'audit capture chaque décision.',
        ],
      },
      aiAct: {
        id: 'ai-act',
        title: 'Classification EU AI Act pour agents métier',
        content:
          '**L\'EU AI Act classifie les systèmes d\'IA selon le risque pour les droits fondamentaux — pas selon la sophistication technique.** Le même modèle et le même stack servent des workflows à risque limité et à haut risque ; les obligations s\'attachent à l\'usage, pas à la technologie.',
        items: [
          '**Risque limité (la plupart des modèles) :** obligations de transparence. Le destinataire d\'un e-mail ou d\'une synthèse générés par IA doit savoir que l\'IA a été impliquée. Un marqueur clair dans le message et une mention dans la documentation utilisateur du système suffisent généralement. Pas d\'évaluation de conformité requise.',
          '**Haut risque (cas d\'usage spécifiques) :** évaluation de conformité complète, enregistrement dans la base de données européenne, surveillance post-commercialisation, et organisme notifié dans certaines sous-catégories. Les schémas qui touchent au haut risque dans les équipes métier sont le screening RH (classement de CV, scoring de candidats), les décisions de crédit, l\'éligibilité aux prestations, et l\'accès aux services publics. L\'annexe III du règlement est la liste opérationnelle.',
          '**Interdit (ne pas déployer) :** identification biométrique en temps réel dans les espaces publics (avec quelques exceptions étroites pour les forces de l\'ordre), scoring social de personnes physiques, techniques manipulatrices ciblant des vulnérabilités, reconnaissance d\'émotions au travail (avec exceptions médicales/sécurité limitées), police prédictive fondée sur le profilage.',
          '**Correspondance pratique workflow → niveau pour les 5 modèles :** ingestion documentaire (risque limité), tri d\'e-mails (risque limité), synthèse de réunion (risque limité ; vérifier le consentement), rapports de conformité (risque limité), traitement de factures (risque limité). Les cinq modèles de base sont tous à risque limité ; les mêmes modèles repurposés pour le screening RH ou les décisions de crédit héritent des obligations de haut risque par l\'usage.',
          '**Distinction fournisseur vs déployeur.** Si vous intégrez le modèle dans un produit vendu à des tiers, vous êtes fournisseur (plus d\'obligations). Si vous opérez le système pour votre propre compte, vous êtes déployeur (moins d\'obligations, mais réelles). Les agents locaux internes vous classent généralement comme déployeur.',
          '**Action pour tout nouveau workflow :** classifiez-le avant approbation du déploiement. La classification est une décision unique (limité / haut risque / interdit) avec justification écrite, signée par le DPO ou le responsable conformité, conservée dans le dossier technique du système d\'IA.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La liste des cas à haut risque de l\'annexe III de l\'EU AI Act est la référence opérationnelle — lisez-la directement lors de la classification d\'un workflow. Ne vous appuyez pas sur des articles de synthèse ; le texte légal est court et précis, utilisable comme checklist.',
          },
        ],
      },
      gdprControls: {
        id: 'gdpr-controls',
        title: 'Contrôles RGPD pour workflows d\'agents',
        content:
          '**L\'architecture locale supprime une menace (partage de données LLM-cloud) mais ne supprime pas les obligations RGPD sur les données elles-mêmes.** Six contrôles couvrent la plupart des workflows d\'agents ; ces six mêmes contrôles s\'alignent proprement sur le dossier technique attendu par l\'EU AI Act pour les systèmes à haut risque. La CNIL a explicitement recommandé l\'IA locale lorsque les données traitées sont sensibles (professionnelles, médicales, juridiques).',
        items: [
          '**1. Base légale (article 6).** Documentez avant déploiement la base applicable — consentement, contrat, obligation légale, intérêt légitime, intérêts vitaux, mission d\'intérêt public. La plupart des workflows métier reposent sur le contrat (relation salariale/client) ou l\'intérêt légitime (avec test de mise en balance documenté). Les données sensibles (santé, biométrie, opinion politique) nécessitent une condition supplémentaire de l\'article 9.',
          '**2. Minimisation des données (article 5(1)(c)).** L\'agent ne doit voir que les données personnelles nécessaires au workflow. Implication pratique : filtrer et chunker à la couche RAG, pas dans le modèle. Évitez de streamer des documents entiers dans la conversation quand une seule section est pertinente. Évitez de conserver les prompts intermédiaires contenant des données personnelles une fois la tâche terminée.',
          '**3. Limitation des finalités (article 5(1)(b)).** L\'agent ne doit pas être réutilisé pour d\'autres tâches sans réévaluation. Un workflow approuvé pour le traitement de factures ne peut absorber silencieusement des tâches d\'évaluation des salariés — c\'est une nouvelle finalité, une nouvelle base légale, une nouvelle décision d\'AIPD.',
          '**4. Sécurité du traitement (article 32).** Chiffrement au repos, contrôle d\'accès au workspace, journal d\'audit immuable, et plan de réponse à incident incluant "le modèle a produit une sortie qui n\'aurait pas dû l\'être". L\'architecture locale couvre beaucoup ici ; ne supposez pas qu\'elle couvre tout.',
          '**5. Journalisation d\'audit.** Champs minimaux par action d\'agent : horodatage, utilisateur/initiateur, identifiant et version du modèle, hash de l\'entrée, appels d\'outils et arguments, hash de la sortie, validateur (si validation manuelle). Stockage append-only ; protection d\'intégrité (chaîne de hash ou lignes signées).',
          '**6. AIPD (article 35).** Obligatoire lorsque le workflow implique un traitement systématique de données personnelles à fort impact, des données sensibles à grande échelle, ou un classement haut risque sous l\'AI Act. Déclenchée par contexte pour le reste. L\'AIPD documente les contrôles, le risque résiduel et la signature du DPO.',
          'Pour l\'architecture côté données sur laquelle ceci s\'appuie, voir [RAG local pour données métier confidentielles](/power-local-llm/local-rag-for-private-business-data?lang=fr) — les contrôles RAG alimentent la même pipeline d\'audit.',
          'Pour les contrôles de prompts et de sortie au-dessus, voir [gouvernance de prompts en production](/prompt-engineering/prompt-governance-in-production?lang=fr) et [injection de prompts et sécurité](/prompt-engineering/prompt-injection-and-security?lang=fr).',
        ],
      },
      dachSpecifics: {
        id: 'dach-specifics',
        title: 'Allemagne : co-décision du comité d\'entreprise et §203 StGB',
        content:
          '**Les workflows DACH ont deux couches supplémentaires que les guides anglophones omettent régulièrement.** Les deux interviennent tôt et bloquent la décision si elles sont oubliées.',
        items: [
          '**Co-décision du comité d\'entreprise (BetrVG §87(1) Nr. 6).** Tout système technique surveillant le comportement ou la performance des salariés déclenche la co-décision. "Surveiller" est interprété largement par les tribunaux du travail allemands — un agent qui classifie les e-mails de salariés ou résume leurs réunions y entre. Le comité d\'entreprise doit être impliqué dès la conception, pas après le déploiement. Sauter cette étape a annulé des déploiements d\'agents a posteriori.',
          '**Implication pratique :** avant de déployer tout workflow traitant des données salariales — même passivement, même si la sortie immédiate bénéficie au salarié lui-même — engagez le comité d\'entreprise. L\'accord (Betriebsvereinbarung) entre dans le dossier technique du système. La plupart des comités sont constructifs s\'ils sont engagés tôt ; presque aucun ne l\'est s\'ils sont engagés tard.',
          '**Secret professionnel §203 StGB.** Avocats, médecins, commissaires aux comptes, conseillers fiscaux et certaines autres professions encourent une responsabilité pénale pour divulgation non autorisée de données client. L\'exception pour "auxiliaires" (§203(3)) couvre le personnel interne mais pas automatiquement les prestataires externes. Un LLM cloud est un prestataire externe ; c\'est le cœur juridique pour lequel les structures soumises au §203 sont passées au stack local.',
          '**Implication pratique :** pour toute profession soumise au §203, l\'architecture purement locale n\'est pas une préférence mais le prérequis pour que le workflow puisse exister. Le contrat avec le fournisseur de l\'agent (le cas échéant) doit inclure des clauses §203 ; le dossier technique doit documenter qu\'aucune donnée client ne quitte l\'infrastructure de la structure.',
          '**Autriche et Suisse :** l\'Autriche reflète étroitement le §203 (StGB §121) ; la confidentialité suisse (Art. 321 CP CH) est encore plus large. La conclusion architecturale est la même — purement local, pas d\'exception pour les données professionnelles sensibles.',
          'Pour le tableau de conformité côté données chez le même responsable de traitement, voir [RAG local pour données métier confidentielles](/power-local-llm/local-rag-for-private-business-data?lang=fr) — les stacks RAG et agent partagent le journal d\'audit et la couche de contrôle d\'accès.',
        ],
      },
      modelPick: {
        id: 'model-pick',
        title: 'Choisir le bon modèle pour des agents métier',
        content:
          '**La fiabilité du tool-calling est une propriété du modèle, pas du harness.** Le même harness associé à un petit modèle généraliste échoue ; associé à un modèle 27B+ entraîné au tool-calling, il réussit. Choisissez d\'abord le modèle.',
        items: [
          '**Gemma 4 27B (`gemma4:27b`).** Meilleur tool-caller généraliste en mai 2026. Tient sur 16 GB de mémoire unifiée ou 24 GB VRAM en Q4_K_M. Fiable sur ingestion documentaire, tri d\'e-mails et traitement de factures. Légèrement conservateur sur les enchaînements d\'outils — adapté aux workflows métier où chaque étape est de toute façon explicitement validée.',
          '**GLM-5.1 32B (`glm5:32b`).** 128K de contexte par défaut. Fiabilité tool-calling forte. Le choix pour le reporting de conformité et la synthèse de réunions à entrée longue. Demande 24 GB+ VRAM en Q4_K_M pour un contexte étendu.',
          '**Qwen3 32B (`qwen3:32b`).** Bien équilibré, très fiable sur les plans multi-étapes. Bon repli quand Gemma 4 est trop conservateur. 32K de contexte par défaut ; convient à la plupart des tâches métier.',
          '**Llama 3.3 70B (`llama3.3:70b`).** Plafond le plus élevé, matériel le plus lourd. 48 GB+ VRAM ou 64 GB de mémoire unifiée en Q4_K_M. À utiliser pour les rapports de conformité et la gestion d\'exceptions où la fiabilité prime sur la vitesse.',
          '**Llama 3.2 3B (`llama3.2:3b`).** Choix léger pour le tri à fort volume. Tourne confortablement sur 8 GB VRAM. Suffisant pour "support client / commercial / spam" ; insuffisant pour rédiger des réponses. À combiner avec un 27B+ pour l\'étape de rédaction.',
          '**Mistral Large.** Alternative hébergée en UE pour les configurations hybrides où le tout-local est surdimensionné mais le cloud US est exclu. À déployer via l\'endpoint UE de Mistral avec un DPA en place ; les données restent en juridiction UE.',
          '**À éviter pour le tool-calling :** tout modèle sous 7B en production, tout modèle généraliste sans entraînement explicite au tool-calling, et toute quantification plus agressive que Q4_K_M sur les petits modèles. Symptômes : appels d\'outils malformés, arguments hallucinés, boucles d\'agent bloquées.',
          'Pour les données comparatives, voir [Meilleurs modèles locaux pour le tool-calling 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=fr). Pour le dimensionnement VRAM et matériel sur les mêmes modèles, voir [Guide matériel LLM local 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr).',
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'Comparaison de stacks d\'agents pour usage métier',
        content:
          '**Quatre runtimes d\'agent sont crédibles pour les workflows métier en 2026.** Ils diffèrent sur l\'UX des portes de validation, la richesse de la traçabilité d\'audit et la quantité de code custom nécessaire.',
        columns: ['Runtime', 'Mise en place', 'Portes de validation', 'Traçabilité d\'audit', 'Adapté à'],
        rows: [
          { 'Runtime': 'Cline (VS Code)', 'Mise en place': 'Une extension à installer', 'Portes de validation': 'Par étape, dans l\'IDE ; allowlist d\'auto-validation', 'Traçabilité d\'audit': 'Journal interne à l\'extension ; export nécessaire pour conformité', 'Adapté à': 'Workflows orientés code, audit single-developer' },
          { 'Runtime': 'Goose + MCP', 'Mise en place': 'Brew install + mcp.json', 'Portes de validation': 'Prompts CLI ; configurable par outil', 'Traçabilité d\'audit': 'Fichier de log CLI ; à faire tourner vers stockage immuable', 'Adapté à': 'Workflows CLI, serveurs headless' },
          { 'Runtime': 'n8n auto-hébergé + Ollama', 'Mise en place': 'Docker + nœud LLM n8n', 'Portes de validation': 'Nœuds human-in-the-loop au niveau workflow', 'Traçabilité d\'audit': 'Journal d\'exécution n8n natif + base de données', 'Adapté à': 'Workflows à forme déterministe avec une ou deux étapes modèle' },
          { 'Runtime': 'LangGraph custom + Ollama', 'Mise en place': 'Projet Python, vraie suite de tests', 'Portes de validation': 'Construites par vous (API interrupts)', 'Traçabilité d\'audit': 'Construite par vous', 'Adapté à': 'Workflows de production justifiant l\'effort d\'ingénierie' },
        ],
        items: [
          '**Choisissez Cline + Ollama** si l\'équipe est très orientée développeurs et que les workflows tiennent dans VS Code. Friction d\'installation minimale, chemin le plus rapide vers un agent fonctionnel.',
          '**Choisissez Goose + MCP** si le workflow tourne sur un serveur headless (un rapport de conformité programmé, un ingéreur de dossiers) sans IDE.',
          '**Choisissez n8n + Ollama** si le workflow a une forme déterministe avec une ou deux étapes modèle. Les nœuds human-in-the-loop de n8n donnent les portes de validation sans interface custom.',
          '**Choisissez LangGraph custom** uniquement quand la forme du workflow est réellement incompatible avec ce qui précède. L\'effort de construction est réel ; le code de traçabilité d\'audit et de portes de validation vous incombe.',
          '**Pour une comparaison honnête de fiabilité entre ces stacks**, voir [Agents IA locaux 2026 : ce qui fonctionne réellement (et ce qui échoue encore)](/power-local-llm/autonomous-local-agents-actually-work?lang=fr).',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes lors du déploiement d\'agents locaux dans les workflows métier UE',
        items: [
          '**Erreur 1 : déployer sans AIPD.** Tout workflow touchant des données sensibles ou prenant des décisions sur des personnes nécessite une AIPD. L\'AIPD est courte — 4 à 8 pages pour la plupart des workflows d\'agent — mais obligatoire et c\'est ce que la CNIL ou l\'autorité de contrôle demande en premier. Rédigez-la avant le déploiement, pas après.',
          '**Erreur 2 : utiliser un agent connecté au cloud pour des documents confidentiels.** Un modèle local ne suffit pas si le runtime de l\'agent, le journal d\'audit ou le store d\'embeddings résident dans le cloud d\'un tiers. L\'architecture est de bout en bout ; une seule dépendance cloud dans la chaîne casse l\'argument du tout-local.',
          '**Erreur 3 : aucune porte de validation sur les actions d\'écriture ou d\'envoi.** L\'agent lit, classifie, rédige, envoie. L\'étape d\'envoi est celle que les humains doivent valider, à chaque fois, peu importe la fiabilité passée du modèle. Les agents en envoi automatique sont la manière dont le régulateur entend parler de vous.',
          '**Erreur 4 : mélanger données personnelles et données métier dans un même workspace.** Le répertoire de travail et le vector store de l\'agent doivent être scopés par workflow, pas partagés. La contamination croisée viole la limitation des finalités ; la remédiation est coûteuse.',
          '**Erreur 5 : sauter le journal d\'audit.** "On peut le reconstruire à partir de l\'historique de conversation du modèle" n\'est pas un journal d\'audit. Append-only, chaîné par hash, conservé selon la durée applicable, requêtable par les gestionnaires de demandes d\'accès — c\'est la barre à atteindre.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Texte consolidé EU AI Act (artificialintelligenceact.eu)](https://artificialintelligenceact.eu/the-act/) — agrégat de référence du règlement ; l\'annexe III est la liste opérationnelle haut risque.',
          '[Texte intégral RGPD (gdpr-info.eu)](https://gdpr-info.eu/) — articles 5, 6, 25, 32, 35 sont opérationnels pour le design d\'agent.',
          '[NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — non UE, non contraignant, mais la structure GOVERN / MAP / MEASURE / MANAGE est une checklist utile pour préparer un audit.',
          '[Lignes directrices EDPB 03/2018 sur la décision individuelle automatisée](https://edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en) — opérationnelles pour tout workflow décidant sur des personnes ; pertinentes sous l\'article 22 RGPD et l\'AI Act.',
          '[CNIL — IA et RGPD : recommandations](https://www.cnil.fr/fr/intelligence-artificielle) — référence française, couvrant base légale, AIPD et exigences sectorielles (santé, juridique, finance).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Les agents IA locaux sont-ils conformes RGPD par défaut ?',
            a: 'Non — ils sont compatibles RGPD par architecture mais pas conformes par défaut. L\'architecture purement locale supprime le modèle de menace LLM-cloud (Schrems II, listes de sous-traitants, transferts transfrontaliers) mais les contrôles RGPD sur les données elles-mêmes restent applicables : base légale (article 6), minimisation (article 5), sécurité du traitement (article 32), journalisation d\'audit, et AIPD lorsque le workflow le justifie. Le stack local facilite la preuve de ces contrôles ; il ne les rend pas optionnels.',
          },
          {
            q: 'Quels workflows sont à haut risque sous l\'EU AI Act ?',
            a: 'L\'annexe III liste les cas d\'usage opérationnels haut risque. Les schémas qui touchent les équipes métier le plus souvent sont les RH (screening de CV, classement de candidats, évaluation de performance), les décisions de crédit, l\'éligibilité aux prestations et l\'accès aux services essentiels. La plupart des workflows métier généraux (ingestion documentaire, tri d\'e-mails, synthèse de réunion, traitement de factures, reporting de conformité) sont à risque limité — obligations de transparence uniquement, pas d\'évaluation de conformité complète.',
          },
          {
            q: 'Ai-je besoin d\'une AIPD pour un agent de tri d\'e-mails ?',
            a: 'Selon contexte. Une AIPD est obligatoire lorsque le workflow implique un traitement systématique de données personnelles à fort impact (article 35(1)) ou apparaît dans une liste d\'AIPD obligatoire de l\'autorité de contrôle. Un agent de tri généraliste ne déclenche souvent pas automatiquement ; le même agent sur une boîte RH ou candidatures, oui. La plupart des équipes devraient mener une AIPD courte sur toute boîte contenant des données salariales, indépendamment des critères stricts — le coût est en heures, l\'avantage est une approbation documentée.',
          },
          {
            q: 'Un agent local peut-il traiter des données salariales ?',
            a: 'Oui, avec deux étapes supplémentaires en France et DACH. France : information consultation du CSE (Comité Social et Économique) avant déploiement, plus base légale RGPD (généralement contrat de travail ou intérêt légitime avec test de mise en balance). Allemagne : co-décision du comité d\'entreprise (BetrVG §87(1) Nr. 6) — engager le comité dès la conception, signer une Betriebsvereinbarung. Sauter ces étapes a annulé des déploiements devant les tribunaux français et allemands.',
          },
          {
            q: 'Quelle taille de modèle gère les workflows métier de manière fiable ?',
            a: 'Gemma 4 27B est la valeur par défaut fiable pour le tool-calling généraliste. GLM-5.1 32B est le choix lorsque l\'entrée est longue (reporting de conformité, transcriptions de réunion d\'une heure) — 128K de contexte par défaut. Qwen3 32B est le repli équilibré. Llama 3.3 70B a le plafond le plus élevé mais demande 48 GB+ VRAM. Llama 3.2 3B convient au tri à fort volume mais pas à la rédaction. Les modèles sous 7B émettent des appels d\'outils malformés quel que soit le runtime d\'agent qui les enveloppe.',
          },
          {
            q: 'Comment auditer ce qu\'a fait l\'agent ?',
            a: 'Chaque action d\'agent écrit une entrée de log : horodatage, utilisateur/initiateur, identifiant et version du modèle, hash de l\'entrée, appels d\'outils avec arguments, hash de la sortie, validateur si validation manuelle. Stockage append-only avec protection d\'intégrité (chaîne de hash ou lignes signées). Conservation suivant l\'article 30 RGPD comme plancher ; règles sectorielles (finance, santé) prolongent. Le journal répond aux demandes d\'accès et alimente le dossier technique de l\'AI Act dans une forme.',
          },
          {
            q: 'Puis-je partager un agent entre départements ?',
            a: 'Architecturalement oui, juridiquement délicat. Chaque département a sa propre finalité, sa propre base légale, sa propre durée de conservation, et potentiellement son propre accord de représentation du personnel. Les agents partagés brouillent tout cela et créent un risque de contamination croisée sous limitation des finalités (article 5(1)(b)). Le schéma propre : un runtime d\'agent, des workspaces séparés par workflow, des journaux d\'audit séparés par workflow, un seul déploiement du modèle sous-jacent. Le modèle est une ressource partagée ; les workflows ne le sont pas.',
          },
          {
            q: 'Qu\'en est-il des filiales transfrontalières ?',
            a: 'Si le responsable de traitement est l\'entité UE et que les données restent dans l\'infrastructure UE, l\'architecture purement locale couvre l\'essentiel des préoccupations transfrontalières par défaut. Surveillez deux cas : une filiale hors UE faisant tourner l\'agent local sur des données personnelles UE (les données doivent rester dans l\'UE ; l\'agent peut être opéré à distance tant qu\'aucune donnée personnelle ne sort), et une équipe support hors UE accédant à la sortie de l\'agent (à traiter comme un transfert ; documenter la base légale au chapitre V du RGPD). Mistral Large sur Scaleway est le choix hybride courant quand le tout-local est surdimensionné et le cloud US exclu.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[RAG local pour données métier confidentielles](/power-local-llm/local-rag-for-private-business-data?lang=fr) — l\'architecture côté données conforme RGPD qui alimente la même pipeline d\'audit.',
          '[Connecter Ollama aux bases de données et APIs avec MCP : configuration d\'agent local 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=fr) — la couche protocolaire pour les outils système de fichiers, base de données, navigateur et GitHub.',
          '[Agents IA locaux 2026 : ce qui fonctionne réellement (et ce qui échoue encore)](/power-local-llm/autonomous-local-agents-actually-work?lang=fr) — comparaison honnête de fiabilité entre les quatre runtimes recommandés ci-dessus.',
          '[Remplacer Zapier par des agents IA locaux](/power-local-llm/replace-zapier-with-local-ai-agents?lang=fr) — modèles de workflows n8n + Ollama pour le bout déterministe du spectre des agents.',
          '[Meilleurs modèles locaux pour le tool-calling 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=fr) — benchmarks tête-à-tête pour les modèles recommandés dans ce guide.',
          '[Checklist sécurité et confidentialité LLM local](/local-llms/local-llm-security-privacy-checklist?lang=fr) — couche de contrôles pour le même matériel exécutant ces workflows.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'ローカルAIエージェントの業務ワークフロー：GDPR & EU AI Act準拠ガイド 2026',
    seoTitle: 'ローカルAIエージェント GDPR EU AI Act 準拠 2026',
    intro:
      'ローカルAIエージェントは、EU準拠を実質的に簡素化します。モデル・ツールサーバー・データすべてが自社インフラ内に存在する場合、クラウドLLMの脅威モデルは消滅します。Schrems II、サブプロセッサーリスト、越境移転影響評価は適用されません。実際の作業は依然として適用される規制に移ります：処理データに対するGDPR管理、自動化ワークフローのEU AI Act分類、そして従業員データや機密データを扱うワークフローに対する地域固有要件（DACH地域のBetriebsrat、§203 StGB；日本の場合は経済産業省AIガバナンス2024、個人情報保護法）。本ガイドでは、本番運用可能な5つのワークフローテンプレート、各ワークフローに必要な管理策、監査に耐えうるモデルとスタックの選択を解説します。',
    metaDescription:
      'ローカルAIエージェントによる文書処理、メールトリアージ、レポート作成をGDPRとEU AI Actのもとで展開。アーキテクチャ、コンプライアンス管理、5つのワークフローテンプレート。',
    twitterDescription:
      'ローカルAIエージェント + EU準拠：5つのワークフローテンプレート、GDPR管理、EU AI Act分類、DACH固有事項。データはインフラから出ません。',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Llama 3.2 3B',
      'Llama 3.3 70B',
      'Mistral Large',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      'GDPR、EU AI Act、DACH固有の労働・守秘要件のもとでローカルAIエージェントを展開するエンタープライズチーム、データ保護責任者、コンプライアンス担当者、IT責任者。日本国内では経済産業省AIガバナンス2024に準拠する企業も対象。',
    readTime: '14分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'ローカルAIエージェント',
    targetKeywords: [
      'ローカルAIエージェント GDPR',
      'EU AI Act 業務エージェント',
      'ローカルLLM 業務ワークフロー',
      'オンプレ AIエージェント コンプライアンス',
      'GDPR AIエージェント DPIA',
      '経済産業省 AIガバナンス',
    ],
    leadAnswerBlock:
      '**ローカルAIエージェントは、アーキテクチャによってGDPR互換となります。ただし、スタック全体（モデル・ツールサーバー・監査ログ・ベクトルストア）が管理者のインフラ内でゼロエグレスで動作する場合に限ります。本番需要の大半は5つの業務ワークフローでカバー可能です：文書取り込みと分類、ドラフト返信付きメールトリアージ、議事録要約とアクション抽出、コンプライアンスレポート生成、発注書照合付き請求書処理。各ワークフローはEU AI Act分類が異なります（多くはLimited-risk、HRスクリーニングはHigh-risk、いずれも禁止対象ではありません）。DPIA基準も異なります。推奨スタック：Ollama または vLLM + Gemma 4 27B / GLM-5.1 32B / Qwen3 32B（tool-calling対応モデル）+ Cline または Goose+MCP（エージェントランタイム）+ 不変監査ログ + すべての書き込み・送信アクションへの人間承認。DPIAなしの展開、個人情報と業務データを同一ワークスペースで混在、送信アクションの承認ゲート省略——この3つが最も多い失敗パターンです。**',
    quickAnswerTop: {
      ja: {
        question: 'ローカルAIエージェントは業務ワークフローでGDPR準拠ですか？',
        answer:
          'ローカルAIエージェントはアーキテクチャ的にはGDPR互換ですが、デフォルトでGDPR準拠ではありません。アーキテクチャによりクラウドLLMの脅威モデルが消滅します——Schrems II、サブプロセッサーリスト、越境移転影響評価は不要。なぜならモデル、ツールサーバー、データすべてが管理者のインフラ内に存在するからです。残る作業は、個人データを処理する全システムに適用されるGDPR管理：適法根拠（第6条）、データ最小化（第5条）、目的制限（第5条）、処理のセキュリティ（第32条）、監査ログ、そして影響が大きいワークフローに対するDPIA（第35条）。EU AI Actは第2の層を追加：多くの業務ワークフローはLimited-risk（透明性義務のみ）、HRスクリーニングと与信判断はHigh-risk（完全な適合性評価）、職場での感情認識やソーシャルスコアリングは禁止。ローカルスタックの構築は容易な部分です。管理策の文書化とDPIA実施が本来の作業となります。日本企業の場合は、経済産業省AIガバナンス2024と個人情報保護法も並行して確認してください。',
        bullets: [
          'ローカルアーキテクチャはクラウドLLMの脅威モデルを除去。残るGDPR作業：データ最小化、適法根拠、処理のセキュリティ、監査ログ、ワークフローが正当化する場合のDPIA。',
          '5つのワークフローテンプレートが需要の大半をカバー：文書取り込み、メールトリアージ、議事録要約、コンプライアンスレポート、請求書処理。',
          'EU AI Act分類：多くのテンプレートはLimited-risk（透明性のみ）、HRスクリーニングはHigh-risk（完全な適合性評価）、職場感情認識・ソーシャルスコアリングは禁止。',
          'スタック：Ollama または vLLM + Gemma 4 27B / GLM-5.1 32B / Qwen3 32B（tool-calling）+ Cline または Goose+MCP + 不変監査ログ + すべての書き込み・送信アクションへの人間承認。',
          '日本企業向け：経済産業省AIガバナンス2024、個人情報保護法（APPI）と整合。DACH関連子会社がある場合は§203 StGBとBetriebsratも確認。',
          '3つのよくある失敗：DPIAなしでの展開、個人情報と業務データを単一ワークスペースで混在、送信アクションの承認ゲート省略。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'ローカルAIエージェントが業務チームにもたらすもの', anchor: '#what-agents-do' },
      { label: '5つの業務ワークフローテンプレート', anchor: '#workflow-templates' },
      { label: 'EU AI Act分類', anchor: '#ai-act' },
      { label: 'エージェントワークフロー向けGDPR管理', anchor: '#gdpr-controls' },
      { label: 'ドイツ：Betriebsratと§203 StGB', anchor: '#dach-specifics' },
      { label: '適切なモデル選択', anchor: '#model-pick' },
      { label: 'エージェントスタック比較', anchor: '#stack-comparison' },
      { label: 'よくある失敗', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-business-workflows-eu-compliance-static.html',
    gammaDescription: '以下のスライドデッキでは：EU準拠ローカルAIエージェントの5つの本番ワークフローテンプレート（文書取り込み・メールトリアージ・会議サマリー・コンプライアンスレポート・請求書処理）、EU AI Actリスク分類（限定リスク vs 高リスク vs 禁止）、6つのGDPR管理策（適法根拠・データ最小化・DPIA）、DACH固有事項（労働者委員会BetrVG §87・§203 StGB職業秘匿義務）、モデル選択表、5つのよくある導入ミスを解説します。PDFをEU AI準拠リファレンスカードとしてダウンロードできます。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**ローカルアーキテクチャは最強のプライバシー管理策です。** モデル・ツールサーバー・データが管理者のインフラ内でゼロエグレスで動作する場合、クラウドLLMの脅威モデルは消滅します——Schrems II、サブプロセッサーリスト、越境移転影響評価は適用されません。',
          '**5つのワークフローテンプレートが本番需要の大半をカバー：** 文書取り込みと分類、ドラフト返信付きメールトリアージ、議事録要約とアクション抽出、コンプライアンスレポート生成、発注書照合付き請求書処理。各ワークフローはデータ分類、適法根拠、AI Actレベル、監査ログ形式が定義されています。',
          '**EU AI Actレベルが義務を決定します。** 多くの業務ワークフローはLimited-riskに該当（AI関与の利用者向け透明性）。HRスクリーニング、与信判断、給付資格判定はHigh-riskで完全な適合性評価が必要。職場での感情認識とソーシャルスコアリングは禁止。',
          '**ローカル運用でもGDPR作業は変わりません。** 適法根拠（第6条）、データ最小化（第5条）、処理のセキュリティ（第32条）、監査ログ、影響が大きいワークフローに対するDPIA（第35条）。ローカルスタックは管理策の証跡を容易にしますが、省略可能にはしません。',
          '**日本企業向け：経済産業省AIガバナンス2024と個人情報保護法に整合します。** DACH地域に子会社がある場合、Betriebsrat共同決定（BetrVG §87）と§203 StGB（弁護士・医師・税理士の守秘義務）の追加レイヤーが適用されます。',
          '**リファレンススタック：** Ollama または vLLM + tool-calling対応モデル（一般業務はGemma 4 27B / GLM-5.1 32B / Qwen3 32B、軽量メールトリアージはLlama 3.2 3B）+ Cline または Goose+MCP（エージェントランタイム）+ 不変append-only監査ログ + すべての書き込み・送信アクションへの人間承認。',
          '**回避すべき3つの失敗モード：** DPIAが必要なワークフローをDPIAなしで展開、個人情報と業務データを単一エージェントワークスペースで混在、送信アクション（メール送信、契約署名、支払い承認）の承認ゲート省略。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**アーキテクチャ：** Ollama または vLLM + tool-calling対応モデル + エージェントランタイム（Cline または Goose+MCP）+ 監査ログ + RAGストア、すべて管理者のインフラ上。',
          '**カバーするワークフロー：** 文書取り込み、メールトリアージ、議事録要約、コンプライアンスレポート、請求書処理。',
          '**5テンプレートのEU AI Act分布：** Limited-risk 4件、High-risk 1件（HRスクリーニング用途時）、禁止 0件。',
          '**DPIA基準：** High-riskは必須、その他は条件発動（第35条基準）。特別カテゴリーデータを扱うワークフローについては実施を推奨。',
          '**ハードウェアサイジング：** Gemma 4 27B と Qwen3 32B は Q4_K_M で 24 GB VRAM に収まる。GLM-5.1 32B と Llama 3.3 70B は十分なコンテキスト確保のため 48 GB+ を推奨。',
          '**監査ログ保存：** GDPR第30条記録要件が下限。業界別規則（金融、医療）で延長。多くのエンタープライズ環境で6年が安全なデフォルト。',
          '**コスト：** APIコストはゼロ。ハードウェアは20名以上のチームで6〜12ヶ月でエンタープライズSaaS AIサブスクリプションコストを回収。',
        ],
      },
      whatAgentsDo: {
        id: 'what-agents-do',
        title: 'ローカルAIエージェントが業務チームにもたらすもの',
        content:
          '**ローカルAIエージェントとは、管理者のインフラ内で動作し、読み取りと書き込みアクションの間に明示的な承認ゲートを持つtool-calling対応モデルです。** チャットアシスタントでも、ワークフロー自動化ツール（n8n、Zapier）でも、ファインチューンされた分類器でもありません——モデルをシステム上で動作させる層です。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルAIエージェントとは、tool-calling対応モデル + ツール表面 + 承認ゲートで構成され、管理者のインフラ内で完全に動作するシステム。EU準拠を文書化作業からアーキテクチャの特性へと変えます。',
          },
          {
            type: 'plain-terms',
            text: 'エージェントとは、ファイルシステムを読み取り、データベースに問い合わせ、メールを送信し、社内APIを呼び出すことができるモデルです。すべての書き込み・送信アクションは人間が承認します。モデル、ツール、監査ログを自社ハードウェアで動作させると、クラウドLLM準拠スタック全体（Schrems II、サブプロセッサーリスト、越境移転影響評価）を1つのアーキテクチャ的事実で置き換えられます：何もネットワークから出ない。残るのはデータ自体に対するGDPR管理で、これはクラウドかローカルかを問わずすべてのシステムに適用されます。',
          },
        ],
        items: [
          '**定義：** モデル + ツール表面（ファイルシステム、データベース、メール、カレンダー、社内API）+ 書き込みごとの承認ゲート = エージェント。モデルが提案、エージェントランタイムが実行、人間が状態を変更するもの・ネットワークを離れるものすべてを承認。',
          '**自動化ツールとの区別。** n8n、Zapier、Make.comは決定論的ワークフロー——明示的トリガー、明示的分岐、明示的アクション。エージェントは非決定論的：モデルが入力と会話状態に基づき、どのツールをどの引数で呼ぶか決定。経路が固定なら自動化、入力ごとに変わるならエージェント。',
          '**チャットアシスタントとの区別。** チャットアシスタントは質問に答え、エージェントはアクションを実行。ChatGPT形式の「このメールを要約して」はテキストを返す；エージェントは受信箱を読み、メッセージを分類し、返信ドラフトを作成し、承認待ちにキューイング。表面が異なり、リスクプロファイルも異なる。',
          '**「ローカル」が業務ワークフローで特に重要な理由：** データレジデンシーが立証可能（バイトはネットワークを出ない）、監査トレイルがエンドツーエンド（同一ログがモデル呼び出し・ツール呼び出し・結果を記録）、チェーン内に第三者サブプロセッサーが存在しない。アーキテクチャ自体がリスクカテゴリーを丸ごと除去するため、コンプライアンス論理は自明となる。',
          '**ローカルエージェントが組織内で適合する場所：** 個人情報（GDPR）、従業員データ（Betriebsrat）、第三者機密データ（NDA、§203 StGB）、または規制対象業務データ（金融、医療、法務）を扱うワークフローすべて。公開データのみを扱うワークフローでは、ローカルエージェントは改善をもたらしません——その場合、クラウドエージェントが通常より高速で安価。',
          '実用化を可能にするプロトコル層については [MCPでOllamaをデータベース・APIに接続：ローカルエージェントセットアップ 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=ja) を参照。',
        ],
      },
      workflowTemplates: {
        id: 'workflow-templates',
        title: '5つの業務ワークフローテンプレート',
        content:
          '**この5つのテンプレートが、業務チームのローカルエージェント本番需要の大半をカバーします。** 各テンプレートは、トリガー → ツール → 推奨モデル → 承認パターン → AI Actレベルとして記述されています。',
        items: [
          '**1. 文書取り込みと分類。** トリガー：PDFまたはスキャンが監視フォルダまたはメールに到着。ツール：ファイルシステム（読み取り）、OCR（必要時）、分類モデル、データベース（書き込み）。モデル：tool-callingと構造化出力にGemma 4 27BまたはQwen3 32B。承認パターン：読み取りと分類は自動、文書が個人を言及する場合のルーティングは手動。AI Actレベル：Limited-risk。DPIA：条件発動。',
          '**2. ドラフト返信付きメールトリアージ。** トリガー：監視受信箱への新着メッセージ。ツール：IMAP/Graph API（読み取り専用）、分類モデル、ドラフト保存（書き込み）、通知。モデル：トリアージはLlama 3.2 3Bで十分、ドラフト生成はGemma 4 27B。承認パターン：分類とドラフトは自動、送信は手動（常時）。AI Actレベル：Limited-risk。DPIA：条件発動；受信箱が従業員データを扱う場合は必須。',
          '**3. 議事録要約とアクション抽出。** トリガー：トランスクリプトがストレージに到着（Whisperまたはベンダー）。ツール：ファイルシステム（読み取り）、要約モデル、抽出モデル、出力先（API経由でNotion/Jira/社内wiki）。モデル：1時間級トランスクリプトの長文コンテキスト（128K）にQwen3 32B。承認パターン：要約は自動、外部システムに投稿されるアクションアイテムは手動。AI Actレベル：Limited-risk；トランスクリプトごとに同意取得を確認。',
          '**4. コンプライアンスレポート生成。** トリガー：スケジュール（月次、四半期）。ツール：データベース（読み取り）、レポートテンプレート保存、レポートレンダラー、レビュアー通知。モデル：GLM-5.1 32BまたはLlama 3.3 70B——長文コンテキスト、構造化出力、低ハルシネーション。承認パターン：データ抽出は自動、公開レポートは手動。AI Actレベル：Limited-risk；元データソースが文書化された適法根拠を持つことを確認。レポート構造を安定化するため [構造化出力とJSONモード](/prompt-engineering/structured-output-and-json-mode?lang=ja) と組み合わせ。',
          '**5. 請求書処理と検証。** トリガー：請求書が経理受信箱またはAPフォルダに到着。ツール：ファイルシステム（読み取り）、OCR、ERP統合（POおよびベンダー読み取り）、例外キュー（書き込み）。モデル：tool-callingにGemma 4 27B、非標準レイアウトの請求書にはQwen3 32B。承認パターン：抽出とPO照合は自動、例外（不一致、新規ベンダー、高額）は手動。AI Actレベル：Limited-risk。DPIA：通常は発動せず。',
          '**5つに共通するパターン：** 読み取りステップは自動承認、外部システムや個人の権利に影響する書き込みステップは手動承認。監査ログがすべての判断を記録。',
        ],
      },
      aiAct: {
        id: 'ai-act',
        title: '業務エージェントのEU AI Act分類',
        content:
          '**EU AI Actは、技術的高度さではなく、基本的人権へのリスクによってAIシステムを分類します。** 同じモデルと同じスタックがLimited-riskとHigh-riskの両ワークフローを担います；義務は技術ではなく利用に紐づきます。',
        items: [
          '**Limited-risk（多くのテンプレート）：** 透明性義務。AI生成のメールや要約を受け取るユーザーは、AIが関与したことを知る必要があります。メッセージ内の明確な表示と、システムのエンドユーザー向けドキュメントへの一行記載で通常は満たせます。適合性評価は不要。',
          '**High-risk（特定ユースケース）：** 完全な適合性評価、EUデータベースへの登録、市販後モニタリング、一部のサブカテゴリーでは認証機関。業務チームでHigh-riskに該当するパターンは、HRスクリーニング（CVランキング、候補者スコアリング）、与信判断、給付資格判定、公共サービスへのアクセス。AI Act附属書IIIが操作的リストです。',
          '**禁止（展開不可）：** 公共空間でのリアルタイム生体認証（法執行向けの限定例外あり）、自然人のソーシャルスコアリング、脆弱性を狙う操作技術、職場での感情認識（医療・安全のための限定例外あり）、プロファイリングに基づく予測警察活動。',
          '**5テンプレートの実用的なワークフロー → レベルマッピング：** 文書取り込み（Limited-risk）、メールトリアージ（Limited-risk）、議事録要約（Limited-risk；同意確認）、コンプライアンスレポート（Limited-risk）、請求書処理（Limited-risk）。5つの基本テンプレートはすべてLimited-risk；同じテンプレートをHRスクリーニングや与信判断に転用すると、用途からHigh-risk義務を継承。',
          '**プロバイダーvsデプロイヤーの区別が重要。** モデルを他者に販売する製品に組み込む場合、プロバイダー（より多くの義務）。自己のためにシステムを運用する場合、デプロイヤー（義務は少ないが実在）。社内専用ローカルエージェントは通常デプロイヤーに該当。',
          '**新規ワークフロー向けアクション項目：** 展開承認前に分類してください。分類は単一の決定（Limited / High / 禁止）と書面正当化で、DPOまたはコンプライアンスリーダーが署名し、AIシステムの技術ファイルに保管します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'EU AI Act附属書IIIのHigh-riskユースケースリストは操作的リファレンスです——ワークフロー分類時に直接参照してください。要約記事に頼らず、法律文は短く正確でチェックリストとして使用可能です。',
          },
        ],
      },
      gdprControls: {
        id: 'gdpr-controls',
        title: 'エージェントワークフロー向けGDPR管理',
        content:
          '**ローカルアーキテクチャは1つの脅威（クラウドLLMデータ共有）を除去しますが、データ自体に対するGDPR義務は除去しません。** 6つの管理策が大半のエージェントワークフローに対応します；同じ6つはEU AI ActがHigh-riskシステムに期待する技術ファイルへ整然と対応付けられます。日本企業の場合、これらは経済産業省AIガバナンス2024および個人情報保護法と並行して評価してください。',
        items: [
          '**1. 適法根拠（第6条）。** 展開前にどの根拠が適用されるかを文書化——同意、契約、法的義務、正当な利益、生命に関わる利益、または公的任務。多くの業務エージェントワークフローは契約（従業員/顧客関係）または正当な利益（文書化されたバランステスト付き）で運用。特別カテゴリーデータ（健康、生体、政治的見解）には第6条根拠の上に第9条条件が必要。',
          '**2. データ最小化（第5条(1)(c)）。** エージェントはワークフローに必要な個人情報のみを参照すべきです。実用上：モデルではなくRAGレイヤーでチャンクとフィルタリング。1セクションのみ関連する場合、文書全体を会話にストリーミングするのは避けます。タスク完了後、個人情報を含む中間プロンプトの保持は避けます。',
          '**3. 目的制限（第5条(1)(b)）。** エージェントは再評価なしにタスク横断的に再目的化すべきではありません。請求書処理用に承認されたワークフローが従業員業績レビュー業務を静かに吸収することはできません——これは新しい目的、新しい適法根拠、新しいDPIA判断です。',
          '**4. 処理のセキュリティ（第32条）。** 保存時暗号化、ワークスペースへのアクセス制御、不変監査ログ、「モデルが生成すべきでない出力を生成した」を含むインシデント対応計画。ローカルアーキテクチャはここで多くをカバーしますが、すべてをカバーすると仮定しないでください。',
          '**5. 監査ログ。** エージェントアクションごとの最小ログフィールド：タイムスタンプ、ユーザー/開始者、モデル識別子とバージョン、入力ハッシュ、ツール呼び出しと引数、出力ハッシュ、承認者（手動承認時）。Append-only保存；整合性保護（ハッシュチェーンまたは署名済みログ行）。',
          '**6. DPIA（第35条）。** ワークフローが重大な影響を伴う個人情報の体系的処理、規模を持つ特別カテゴリーデータ、またはAI Actの下でのHigh-riskを含む場合に必須。それ以外は条件発動。DPIAは管理策、残存リスク、DPO署名を文書化。',
          '基盤となるデータ側アーキテクチャについては [プライベート業務データ向けローカルRAG](/power-local-llm/local-rag-for-private-business-data?lang=ja) を参照——RAG管理策が同一の監査パイプラインを供給。',
          'プロンプトと出力管理の上層については [本番環境におけるプロンプトガバナンス](/prompt-engineering/prompt-governance-in-production?lang=ja) と [プロンプトインジェクションとセキュリティ](/prompt-engineering/prompt-injection-and-security?lang=ja) を参照。',
        ],
      },
      dachSpecifics: {
        id: 'dach-specifics',
        title: 'ドイツ固有事項：Betriebsrat共同決定と§203 StGB',
        content:
          '**DACHワークフローには、英語ガイドが日常的に見落とす2つの追加レイヤーがあります。** 両方とも早期に発動し、見落とすと意思決定を阻害します。日本企業がDACH地域に子会社や事業所を持つ場合、これらは適用対象です。',
        items: [
          '**Betriebsrat共同決定（BetrVG §87(1) Nr. 6）。** 従業員の行動や業績を監視する技術システムは共同決定を発動します。「監視」はドイツ労働裁判所により広く解釈されます——従業員のメールを分類するエージェントや従業員ミーティングを要約するエージェントはこれに該当します。Betriebsratは展開後ではなく、設計時に関与する必要があります。このステップを飛ばしたことで、エージェント展開が事後的に無効化された事例があります。',
          '**実用上の含意：** 従業員データを処理するワークフロー——たとえ受動的でも、即時出力が従業員自身の利益のためでも——を展開する前にBetriebsratと協議してください。合意（Betriebsvereinbarung）はシステムの技術ファイルの一部となります。早期に関与すれば多くのBetriebsratは建設的；遅く関与するとほぼ建設的ではありません。',
          '**§203 StGB職業守秘義務。** 弁護士、医師、税理士、会計士、その他特定職業は依頼者情報の不正開示について刑事責任を負います。「補助者」の例外（§203(3)）は社内スタッフをカバーしますが、外部サービスプロバイダーは自動的にカバーしません。クラウドLLMは外部サービスプロバイダーです；§203対象法律事務所がローカルスタックに移行した法的核心がこれです。',
          '**実用上の含意：** §203対象職業については、純粋にローカルなアーキテクチャは選好ではなく、ワークフローが存在を許される前提条件です。エージェントベンダー（存在する場合）との契約には§203準拠条項が含まれる必要があります；技術ファイルには依頼者データが事務所インフラを離れないことが文書化される必要があります。',
          '**オーストリアとスイス：** オーストリアは§203を密接に反映（StGB §121）；スイスの守秘義務（StGB CH 第321条）はさらに広範。アーキテクチャ的結論は同じ——純粋にローカル、機密職業データに例外なし。',
          '同一管理者でのデータ側コンプライアンス画像については [プライベート業務データ向けローカルRAG](/power-local-llm/local-rag-for-private-business-data?lang=ja) を参照——RAGとエージェントスタックは監査ログとアクセス制御層を共有。',
        ],
      },
      modelPick: {
        id: 'model-pick',
        title: '業務エージェントに適切なモデルを選択',
        content:
          '**Tool-callの信頼性はモデルのプロパティであり、ハーネスのプロパティではありません。** 同じハーネスでも小さな汎用モデルと組み合わせると失敗、tool-call調整済み27B+モデルと組み合わせると成功。先にモデルを選びましょう。',
        items: [
          '**Gemma 4 27B（`gemma4:27b`）。** 2026年5月時点で最高の汎用tool-caller。16 GB ユニファイドメモリまたは Q4_K_M で 24 GB VRAM に収まる。文書取り込み、メールトリアージ、請求書処理で信頼性が高い。連鎖tool-callでやや保守的——各ステップが明示的承認を伴う業務ワークフローに適合。',
          '**GLM-5.1 32B（`glm5:32b`）。** デフォルトで128Kコンテキスト。Tool-call信頼性が強い。長い入力（コンプライアンスレポート、1時間級議事録）のコンプライアンスレポートと議事録要約に最適。コンテキスト無制約で Q4_K_M で 24 GB+ VRAM が望ましい。',
          '**Qwen3 32B（`qwen3:32b`）。** バランスが良く、複数ステップ計画で非常に信頼できる。Gemma 4が保守的すぎる場合の良いフォールバック。デフォルトで32Kコンテキスト；多くの業務タスクに十分。',
          '**Llama 3.3 70B（`llama3.3:70b`）。** 最高の天井、最重量ハードウェア。Q4_K_M で 48 GB+ VRAM または 64 GB ユニファイドメモリ。速度より信頼性が重要なコンプライアンスレポートと例外処理に使用。',
          '**Llama 3.2 3B（`llama3.2:3b`）。** 高ボリュームトリアージ向けの軽量選択。8 GB VRAMで快適に動作。「これはカスタマーサポート / 営業 / スパムか」には十分；返信ドラフトには不十分。ドラフトステップには27B+モデルとペアリング。',
          '**Mistral Large。** 純粋ローカルが過剰でUSクラウドが選択肢にないハイブリッド構成向けのEUホスト型代替。MistralのEUエンドポイント経由でDPA設置済みで運用；データはEU管轄内に滞留。',
          '**Tool-callingで避けるべきもの：** 本番作業向けに7B未満のもの、明示的tool-callトレーニングがない汎用モデル、小型モデルでQ4_K_Mより厳しい量子化。症状は不正なtool-call、ハルシネーション引数、停止したエージェントループ。',
          '対面比較データについては [Tool-Calling向け2026年最高のローカルモデル](/power-local-llm/best-local-models-tool-calling-2026?lang=ja) を参照。同じモデルのVRAMとハードウェアサイジングについては [ローカルLLMハードウェアガイド2026](/local-llms/local-llm-hardware-guide-2026?lang=ja) を参照。',
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: '業務利用向けエージェントスタック比較',
        content:
          '**4つのエージェントランタイムが2026年に業務ワークフローで信頼できます。** 承認ゲートUX、監査トレイルの豊富さ、必要なカスタムコード量で異なります。',
        columns: ['ランタイム', 'セットアップ', '承認ゲート', '監査トレイル', '適合用途'],
        rows: [
          { 'ランタイム': 'Cline (VS Code)', 'セットアップ': 'エクステンション1つインストール', '承認ゲート': 'IDE内のステップごと；自動承認許可リスト', '監査トレイル': 'エクステンション内ログ；コンプライアンスにエクスポート必要', '適合用途': 'コーディング型ワークフロー、シングル開発者監査' },
          { 'ランタイム': 'Goose + MCP', 'セットアップ': 'Brewインストール + mcp.json', '承認ゲート': 'CLIプロンプト；ツールごとに設定可能', '監査トレイル': 'CLIログファイル；不変ストアにローテーション', '適合用途': 'CLIワークフロー、ヘッドレスサーバー' },
          { 'ランタイム': 'n8n self-hosted + Ollama', 'セットアップ': 'Docker + n8n LLMノード', '承認ゲート': 'ワークフローレベルのHuman-in-the-loopノード', '監査トレイル': 'ネイティブn8n実行ログ + データベース', '適合用途': 'モデルステップが1〜2の決定論的形ワークフロー' },
          { 'ランタイム': 'カスタムLangGraph + Ollama', 'セットアップ': 'Pythonプロジェクト、本格テストスイート', '承認ゲート': '自分で構築（Interrupts API）', '監査トレイル': '自分で構築', '適合用途': 'エンジニアリング投資を正当化する本番ワークフロー' },
        ],
        items: [
          '**Cline + Ollamaを選択** チームが開発者中心で、ワークフローがVS Code内に収まる場合。インストールフリクション最小、動くエージェントへの最速ルート。',
          '**Goose + MCPを選択** ワークフローがヘッドレスサーバー（スケジュールされたコンプライアンスレポート、フォルダ監視取り込み）で実行される場合、IDEがない。',
          '**n8n + Ollamaを選択** ワークフローがモデルステップ1〜2の決定論的形を持つ場合。n8nのHuman-in-the-loopノードがカスタムUIなしで承認ゲートを提供。',
          '**カスタムLangGraphを選択** ワークフローの形が上記と本当に互換性がない場合のみ。構築労力は実在；監査トレイルと承認ゲートのコードはあなたの担当。',
          '**これらのスタック横断の正直な信頼性比較**については [ローカルAIエージェント2026：実際に動くもの（そしてまだ失敗するもの）](/power-local-llm/autonomous-local-agents-actually-work?lang=ja) を参照。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'EU業務ワークフローでローカルエージェント展開時のよくある失敗',
        items: [
          '**失敗1：DPIAなしで展開。** 特別カテゴリーデータを扱うワークフロー、または個人について判断するワークフローはDPIAが必要です。DPIAは短い——ほとんどのエージェントワークフローで4〜8ページ——ただし必須で、監督機関が最初に求めるものです。展開後ではなく、展開前に作成してください。',
          '**失敗2：機密文書にクラウド接続エージェントを使用。** エージェントランタイム、監査ログ、または埋め込みストアが他者のクラウドにある場合、ローカルモデルだけでは不十分です。アーキテクチャはエンドツーエンド；チェーン内の1つのクラウド依存がローカルのみの議論を破ります。',
          '**失敗3：書き込みまたは送信アクションに承認ゲートなし。** エージェントは読み、分類し、ドラフトし、送信します。送信ステップは、モデルがどれだけ信頼できる過去であっても、人間が毎回承認すべきステップです。自動送信エージェントは、規制機関があなたについて聞く方法です。',
          '**失敗4：個人情報と業務データを単一ワークスペースで混在。** エージェントの作業ディレクトリとベクトルストアはワークフローごとにスコープすべきで、共有すべきではありません。クロスコンタミネーションは目的制限に違反；回復は高価。',
          '**失敗5：監査ログをスキップ。** 「モデルの会話履歴から再構築できる」は監査ログではありません。Append-only、ハッシュチェーン、関連保存期間ごとに保持、データ主体アクセス要求ハンドラーがクエリ可能——これがバーです。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[EU AI Act統合テキスト（artificialintelligenceact.eu）](https://artificialintelligenceact.eu/the-act/) — 規則の公式トラック集約；附属書IIIが操作的High-riskリスト。',
          '[GDPR全文（gdpr-info.eu）](https://gdpr-info.eu/) — エージェント設計に操作的なのは第5条、6条、25条、32条、35条。',
          '[NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — 非EU、非拘束だが、GOVERN / MAP / MEASURE / MANAGEの構造は監査準備チェックリストとして有用。',
          '[EDPB Guidelines 03/2018 自動個別意思決定について](https://edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en) — 個人について判断するワークフローに操作的；GDPR第22条とAI Actの両方で重要。',
          '[経済産業省 AI事業者ガイドライン](https://www.meti.go.jp/) — 日本のエンタープライズ展開向けガバナンスフレームワーク；個人情報保護法（APPI）と整合。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ローカルAIエージェントはデフォルトでGDPR準拠ですか？',
            a: 'いいえ——アーキテクチャによってGDPR互換ですが、デフォルトでGDPR準拠ではありません。純粋にローカルなアーキテクチャはクラウドLLMの脅威モデル（Schrems II、サブプロセッサーリスト、越境移転）を除去しますが、データ自体に対するGDPR管理は依然として適用されます：適法根拠（第6条）、データ最小化（第5条）、処理のセキュリティ（第32条）、監査ログ、ワークフローが正当化する場合のDPIA。ローカルスタックは管理策の証跡を容易にしますが、省略可能にはしません。日本企業の場合は経済産業省AIガバナンス2024と個人情報保護法も並行して確認。',
          },
          {
            q: 'EU AI ActでHigh-riskとなるワークフローは何ですか？',
            a: '附属書IIIが操作的High-riskユースケースをリスト。業務チームに最も多く該当するパターンはHR（CV審査、候補者ランキング、業績評価）、与信判断、給付資格判定、必須サービスへのアクセス。一般的な業務ワークフロー（文書取り込み、メールトリアージ、議事録要約、請求書処理、コンプライアンスレポート）の多くはLimited-risk——透明性義務のみ、完全な適合性評価なし。',
          },
          {
            q: 'メールトリアージエージェントにDPIAは必要ですか？',
            a: '条件発動です。DPIAは、ワークフローが重大な影響を伴う個人情報の体系的処理（第35条(1)）を含む、または監督機関の必須DPIAリストの1つに該当する場合に必須。一般的な受信箱トリアージエージェントは多くの場合自動発動しません；同じエージェントがHRや候補者受信箱で動作する場合は発動。多くのチームは、厳密な発動基準にかかわらず、従業員データを含む受信箱に対して短いDPIAを実行すべきです——コストは時間単位、利点は文書化された承認。',
          },
          {
            q: 'ローカルエージェントは従業員データを処理できますか？',
            a: 'はい、DACH地域では2つの追加ステップが必要です。第1：Betriebsrat共同決定（BetrVG §87(1) Nr. 6）——設計時にBetriebsratと協議し、目的、保存、アクセス、監査要件を定義するBetriebsvereinbarungに署名。第2：GDPR下の適法根拠——通常は契約または文書化されたバランステスト付き正当な利益。Betriebsratステップを飛ばしたことで、ドイツ労働裁判所で展開が事後的に無効化されたことがあります。日本企業の場合、個人情報保護法第18条（利用目的の変更）と労使協議も並行して確認。',
          },
          {
            q: 'どのモデルサイズが業務ワークフローを信頼できるレベルで処理しますか？',
            a: 'Gemma 4 27Bは汎用tool-callingの信頼できるデフォルト。GLM-5.1 32Bは入力が長い場合（コンプライアンスレポート、1時間級議事録）の選択——デフォルトで128Kコンテキスト。Qwen3 32Bはバランスの取れたフォールバック。Llama 3.3 70Bは最高の天井ですが48 GB+ VRAMが必要。Llama 3.2 3Bは高ボリューム分類に十分ですが、ドラフトには不十分。7B未満のモデルは、ラップするエージェントランタイムにかかわらず、不正なtool-callを発します。',
          },
          {
            q: 'エージェントが何をしたかをどう監査しますか？',
            a: '各エージェントアクションがログエントリを書きます：タイムスタンプ、ユーザー/開始者、モデル識別子とバージョン、入力ハッシュ、引数付きtool-call、出力ハッシュ、手動承認時の承認者。ストレージはappend-onlyで整合性保護（ハッシュチェーンまたは署名済みログ行）。保存はGDPR第30条の処理記録要件を下限として、業界別規則（金融、医療）で延長。監査ログはDSARクエリに答え、AI Act技術ファイルを1つの形で供給します。',
          },
          {
            q: '部門横断で1つのエージェントを共有できますか？',
            a: 'アーキテクチャ的には可能、法的には複雑。各部門は独自の目的、独自の適法根拠、独自の保存、潜在的に独自のBetriebsvereinbarungを持ちます。共有エージェントはこれらすべてを曖昧にし、目的制限（第5条(1)(b)）下のクロスコンタミネーションリスクを生みます。よりクリーンなパターン：1つのエージェントランタイム、ワークフローごとに別個のワークスペース、ワークフローごとに別個の監査ログ、基盤モデルの単一展開。モデルは共有リソース；ワークフローはそうではありません。',
          },
          {
            q: '越境子会社についてはどうですか？',
            a: '管理者がEUエンティティでデータがEUインフラに留まる場合、純粋にローカルなアーキテクチャはデフォルトで越境関心の大半をカバーします。2つのケースに注意：EU個人情報でローカルエージェントを実行する非EU子会社（データはEUに留まる必要があり、エージェントは個人情報がエグレスしない限りリモート運用可）、エージェントの出力にアクセスする非EUサポートチーム（移転として扱う；GDPR第V章下の適法根拠を文書化）。Mistral Large on Scalewayは、純粋ローカルが過剰でUSクラウドが選択肢にない場合の一般的なハイブリッド選択。日本企業の場合、個人情報保護法の越境移転規定（第28条）も並行して確認。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[プライベート業務データ向けローカルRAG](/power-local-llm/local-rag-for-private-business-data?lang=ja) — 同じ監査パイプラインを供給するGDPR準拠データ側アーキテクチャ。',
          '[MCPでOllamaをデータベース・APIに接続：ローカルエージェントセットアップ2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=ja) — ファイルシステム、データベース、ブラウザ、GitHubツール用のプロトコル層。',
          '[ローカルAIエージェント2026：実際に動くもの（そしてまだ失敗するもの）](/power-local-llm/autonomous-local-agents-actually-work?lang=ja) — 上記推奨4ランタイム横断の正直な信頼性比較。',
          '[ZapierをローカルAIエージェントで置き換える](/power-local-llm/replace-zapier-with-local-ai-agents?lang=ja) — エージェントスペクトルの決定論的形側のn8n + Ollamaワークフローテンプレート。',
          '[Tool-Calling向け2026年最高のローカルモデル](/power-local-llm/best-local-models-tool-calling-2026?lang=ja) — 本ガイド推奨モデルの対面ベンチマーク。',
          '[ローカルLLMセキュリティ・プライバシーチェックリスト](/local-llms/local-llm-security-privacy-checklist?lang=ja) — これらのワークフローを実行する同じハードウェアの管理層。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: '本地AI智能体业务工作流：GDPR与EU AI Act合规指南 2026',
    seoTitle: '本地AI智能体GDPR与欧盟AI法案合规指南 2026',
    intro:
      '本地AI智能体让欧盟合规变得明显简化。当模型、工具服务器和数据全部位于您自己的基础设施内时，云LLM威胁模型即不复存在——Schrems II、子处理者清单和跨境传输影响评估均不适用。实际工作转移到仍然适用的法规：处理数据的GDPR控制、自动化工作流的EU AI Act分类，以及涉及员工或机密数据的工作流的地区特定要求（DACH地区的Betriebsrat、§203 StGB）。对于在中国境内或跨境运营的企业，并行评估《数据安全法》（2021）、《个人信息保护法》（2021）和行业监管要求。本指南介绍5个生产级工作流模板、每个模板所需的控制，以及经得起审计的模型和技术栈选择。',
    metaDescription:
      '在GDPR和EU AI Act框架下，部署本地AI智能体处理文档、邮件分流和报告生成。架构、合规控制与5个工作流模板。',
    twitterDescription:
      '本地AI智能体 + 欧盟合规：5个工作流模板、GDPR控制、EU AI Act分类、DACH地区特性。数据不离开您的基础设施。',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Llama 3.2 3B',
      'Llama 3.3 70B',
      'Mistral Large',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      '在GDPR、EU AI Act以及DACH地区的劳动与保密要求下部署本地AI智能体的企业团队、数据保护官、合规负责人和IT负责人。中国企业可并行参照《数据安全法》和《个人信息保护法》框架。',
    readTime: '阅读约14分钟',
    educationalLevel: 'Advanced',
    primaryTerm: '本地AI智能体',
    targetKeywords: [
      '本地AI智能体 GDPR',
      'EU AI Act 业务智能体',
      '本地LLM 业务工作流',
      '本地部署AI智能体合规',
      'GDPR AI智能体 DPIA',
      '数据安全法 AI智能体',
    ],
    leadAnswerBlock:
      '**本地AI智能体在架构上与GDPR兼容（非偶然）——但前提是整个技术栈（模型、工具服务器、审计日志、向量存储）在数据控制者的基础设施内运行且零数据外流。5个业务工作流覆盖大部分生产需求：文档摄入与分类、带回复草稿的邮件分流、会议摘要与行动项提取、合规报告生成、带采购单匹配的发票处理。每个工作流的EU AI Act分类不同（多数为有限风险，HR筛选为高风险，无禁止类）和DPIA阈值也不同。推荐技术栈：Ollama或vLLM运行Gemma 4 27B / GLM-5.1 32B / Qwen3 32B（工具调用模型）+ Cline或Goose+MCP作为智能体运行时 + 不可变审计日志 + 每个写入或发送动作均需人工批准。无DPIA即部署、个人数据与业务数据混入同一工作空间、发送动作未设审批门——这是三个最常见的失败模式。**',
    quickAnswerTop: {
      zh: {
        question: '本地AI智能体业务工作流是否符合GDPR要求？',
        answer:
          '本地AI智能体在架构上GDPR兼容，但默认并非GDPR合规。架构层面消除了云LLM威胁模型——无Schrems II、无子处理者清单、无跨境传输影响评估——因为模型、工具服务器和数据都在控制者的基础设施内。剩余工作是适用于任何处理个人数据系统的GDPR控制：合法依据（第6条）、数据最小化（第5条）、目的限制（第5条）、处理安全性（第32条）、审计日志，以及对个人有重大影响时的DPIA（第35条）。EU AI Act增加第二层：多数业务工作流为有限风险（仅透明度义务）；HR筛选和信贷决策为高风险（完整合规评估）；某些模式（工作场所情绪识别、社会信用评分）为禁止类。搭建本地技术栈是简单部分；记录控制并执行DPIA才是真正工作。中国企业请同步遵循《数据安全法》《个人信息保护法》及行业监管要求。',
        bullets: [
          '本地架构消除云LLM威胁模型。剩余GDPR工作：数据最小化、合法依据、处理安全性、审计日志，以及工作流需要时的DPIA。',
          '5个工作流模板覆盖多数需求：文档摄入、邮件分流、会议摘要、合规报告、发票处理。',
          'EU AI Act分类：多数模板为有限风险（仅透明度）；HR筛选为高风险（完整合规评估）；工作场所情绪识别和社会信用评分被禁止。',
          '技术栈：Ollama或vLLM + Gemma 4 27B / GLM-5.1 32B / Qwen3 32B（工具调用）+ Cline或Goose+MCP + 不可变审计日志 + 每个写入/发送动作均需人工批准。',
          '中国企业：本地架构天然契合《数据安全法》（2021）和《个人信息保护法》（2021）的本地化要求，特别适合金融、医疗、法律等敏感行业。',
          '三个常见错误：未做DPIA即部署，个人数据与业务数据混入同一工作空间，发送动作未设审批门。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '速查事实', anchor: '#quick-facts' },
      { label: '本地AI智能体为业务团队提供什么', anchor: '#what-agents-do' },
      { label: '5个业务工作流模板', anchor: '#workflow-templates' },
      { label: 'EU AI Act分类', anchor: '#ai-act' },
      { label: '智能体工作流的GDPR控制', anchor: '#gdpr-controls' },
      { label: '德国：员工代表会与§203 StGB', anchor: '#dach-specifics' },
      { label: '选择合适的模型', anchor: '#model-pick' },
      { label: '智能体技术栈对比', anchor: '#stack-comparison' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '参考资料', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-business-workflows-eu-compliance-static.html',
    gammaDescription: '以下幻灯片涵盖：EU合规本地AI智能体的5个生产工作流模板（文档接收、邮件分类、会议摘要、合规报告、发票处理），EU AI Act风险分类（有限风险 vs 高风险 vs 禁止），6项GDPR控制措施（法律依据、数据最小化、DPIA），DACH特殊要求（工作委员会BetrVG §87、§203 StGB职业保密），模型选择表和5个常见部署错误。可将PDF下载为EU AI合规参考卡。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**本地架构是最强的隐私控制。** 当模型、工具服务器和数据都在控制者的基础设施内零外流运行时，云LLM威胁模型即不复存在——Schrems II、子处理者清单和跨境传输影响评估均不适用。',
          '**5个工作流模板覆盖多数生产需求：** 文档摄入与分类、带回复草稿的邮件分流、会议摘要与行动项提取、合规报告生成、带采购单匹配的发票处理。每个模板都有定义的数据分类、合法依据、AI Act等级和审计日志格式。',
          '**EU AI Act等级决定义务。** 多数业务工作流落入有限风险（向用户透明AI参与）。HR筛选、信贷决策和福利资格判定为高风险，需要完整合规评估。工作场所情绪识别和社会信用评分被禁止。',
          '**本地化运行不改变GDPR工作。** 合法依据（第6条）、数据最小化（第5条）、处理安全性（第32条）、审计日志，以及对高影响工作流的DPIA（第35条）。本地技术栈使这些控制更容易举证，但不会让它们变成可选项。',
          '**中国企业部署：** 本地架构天然契合《数据安全法》和《个人信息保护法》的数据本地化要求。金融、医疗、法律等敏感行业首选本地方案；DACH地区子公司还需考虑Betriebsrat共同决定（BetrVG §87）和§203 StGB。',
          '**参考技术栈：** Ollama或vLLM + 工具调用模型（一般工作用Gemma 4 27B、GLM-5.1 32B、Qwen3 32B；轻量邮件分流用Llama 3.2 3B）+ Cline或Goose+MCP作为智能体运行时 + 不可变append-only审计日志 + 每个写入或发送动作的人工批准。',
          '**应避免的三种失败模式：** 在需要DPIA的工作流上未做DPIA即部署；个人数据与业务数据混入同一智能体工作空间；对外发送动作（邮件发送、合同签署、付款授权）未设审批门。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速查事实',
        items: [
          '**架构：** Ollama或vLLM + 工具调用模型 + 智能体运行时（Cline或Goose+MCP）+ 审计日志 + RAG存储，全部在控制者的基础设施上运行。',
          '**覆盖工作流：** 文档摄入、邮件分流、会议摘要、合规报告、发票处理。',
          '**5个模板的EU AI Act分布：** 4个有限风险，1个高风险（用于HR筛选时），0个禁止类。',
          '**DPIA阈值：** 高风险类必须；其余按第35条标准触发。涉及特殊类别数据的工作流，多数团队都应执行一次DPIA。',
          '**硬件配置：** Gemma 4 27B和Qwen3 32B在Q4_K_M下需24 GB显存；GLM-5.1 32B和Llama 3.3 70B在完整上下文下推荐48 GB+。',
          '**审计日志保留：** GDPR第30条处理记录要求是下限；行业规则（金融服务、医疗）会延长。多数企业环境的安全默认值为6年。',
          '**成本：** API开支为零；硬件在20+用户团队中6–12个月即可与企业SaaS AI订阅成本持平。',
        ],
      },
      whatAgentsDo: {
        id: 'what-agents-do',
        title: '本地AI智能体为业务团队提供什么',
        content:
          '**本地AI智能体是一个工具调用模型，运行在控制者的基础设施内，读写动作之间设有显式审批门。** 它不是聊天助手，不是工作流自动化工具（n8n、Zapier），也不是经过微调的分类器——它是将模型变为能够在您系统上执行操作的层。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地AI智能体是工具调用模型 + 工具表面 + 审批门，全部运行在控制者的基础设施内——把欧盟合规从一项文档练习转变为一项架构属性。',
          },
          {
            type: 'plain-terms',
            text: '智能体是一个能够读取您的文件系统、查询您的数据库、发送邮件或调用您内部API的模型——每个写入或发送动作都由人工批准。让模型、工具和审计日志都在您自己的硬件上运行，您就用一个架构事实——什么都不离开您的网络——替代了整个云LLM合规栈（Schrems II、子处理者清单、跨境传输评估）。剩下的是对数据本身的GDPR控制，这适用于任何系统，无论云还是本地。',
          },
        ],
        items: [
          '**定义：** 模型 + 工具表面（文件系统、数据库、邮件、日历、内部API）+ 每次写入的审批门 = 智能体。模型提议；智能体运行时执行；人工批准任何更改状态或离开网络的动作。',
          '**与自动化工具的区别。** n8n、Zapier和Make.com是确定性工作流——显式触发器、显式分支、显式动作。智能体是非确定性的：模型根据输入和会话状态决定调用哪个工具、用什么参数。路径固定时用自动化；路径因输入而变时用智能体。',
          '**与聊天助手的区别。** 聊天助手回答问题；智能体执行动作。ChatGPT式的"总结这封邮件"返回文本；智能体读取收件箱、分类邮件、起草回复并排队等待批准。表面不同，风险画像不同。',
          '**为什么"本地"对业务工作流尤其重要：** 数据驻留可证明（字节永不离开网络）、审计跟踪端到端（同一日志记录模型调用、工具调用和结果）、链中无第三方处理者。当架构本身消除了整类风险时，合规论证不言自明。',
          '**本地智能体在组织中的位置：** 任何处理个人数据（GDPR）、员工数据（员工代表会）、第三方机密数据（保密协议、§203 StGB）或受监管业务数据（金融、医疗、法律）的工作流。本地智能体不会改善仅涉及公开数据的工作流——那里云智能体通常更快更便宜。',
          '使其实际可行的协议层，请参阅[通过MCP将Ollama连接到数据库和API：本地智能体设置2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=zh)。',
        ],
      },
      workflowTemplates: {
        id: 'workflow-templates',
        title: '5个业务工作流模板',
        content:
          '**这5个模板覆盖业务团队中本地智能体的多数生产需求。** 每个模板按"触发器 → 工具 → 模型推荐 → 审批模式 → AI Act等级"描述。',
        items: [
          '**1. 文档摄入与分类。** 触发器：PDF或扫描件落入监控文件夹或邮箱。工具：文件系统（读）、OCR（必要时）、分类模型、数据库（写）。模型：Gemma 4 27B或Qwen3 32B用于工具调用和结构化输出。审批模式：读取和分类自动，文档涉及个人时路由步骤手动。AI Act等级：有限风险。DPIA：按触发条件。',
          '**2. 带回复草稿的邮件分流。** 触发器：监控收件箱有新邮件。工具：IMAP/Graph API（只读）、分类模型、草稿存储（写）、通知。模型：分流用Llama 3.2 3B足够；草稿生成用Gemma 4 27B。审批模式：分类和草稿自动，发送（始终）手动。AI Act等级：有限风险。DPIA：按触发条件；如收件箱处理员工数据则强制。',
          '**3. 会议摘要与行动项提取。** 触发器：转录文件落入存储（Whisper或供应商）。工具：文件系统（读）、摘要模型、提取模型、输出目标（通过API的Notion/Jira/内部wiki）。模型：Qwen3 32B用于一小时长转录的长上下文（128K）。审批模式：摘要自动，发布到外部系统的行动项手动。AI Act等级：有限风险；验证每个转录文件都有同意记录。',
          '**4. 合规报告生成。** 触发器：定时（月度、季度）。工具：数据库（读）、报告模板存储、报告渲染器、审阅者通知。模型：GLM-5.1 32B或Llama 3.3 70B——长上下文、结构化输出、低幻觉。审批模式：数据提取自动，发布报告手动。AI Act等级：有限风险；验证底层数据源有文档化的合法依据。配合[结构化输出与JSON模式](/prompt-engineering/structured-output-and-json-mode?lang=zh)以保持报告结构稳定。',
          '**5. 发票处理与校验。** 触发器：发票落入财务收件箱或AP文件夹。工具：文件系统（读）、OCR、ERP集成（读取采购单和供应商）、异常队列（写）。模型：Gemma 4 27B用于工具调用；非标准布局发票用Qwen3 32B。审批模式：提取和采购单匹配自动，任何异常（不匹配、新供应商、大额）手动。AI Act等级：有限风险。DPIA：通常不触发。',
          '**5个模板的共同模式：** 读取步骤自动批准；影响外部系统或个人权利的写入步骤手动批准。审计日志记录每个决策。',
        ],
      },
      aiAct: {
        id: 'ai-act',
        title: '业务智能体的EU AI Act分类',
        content:
          '**EU AI Act按对基本权利的风险——而非技术复杂度——对AI系统进行分类。** 同一模型和技术栈服务于有限风险和高风险工作流；义务依附于使用，而非技术。',
        items: [
          '**有限风险（多数模板）：** 透明度义务。收到AI生成邮件或摘要的用户必须知道AI参与了。消息中的明确标识 + 系统终端用户文档中的一行说明，通常即可满足。无需合规评估。',
          '**高风险（特定用例）：** 完整合规评估、欧盟数据库注册、上市后监控，部分子类别还需公告机构。在业务团队中触及高风险的模式是HR筛选（CV排序、候选人评分）、信贷决策、福利资格判定和公共服务访问。法案附件III是操作清单。',
          '**禁止（不得部署）：** 公共空间实时生物识别（执法有狭窄例外）、对自然人的社会信用评分、利用脆弱性的操纵技术、工作场所情绪识别（医疗/安全有有限例外）、基于画像的预测性警务。',
          '**5个模板的工作流→等级实用映射：** 文档摄入（有限风险）、邮件分流（有限风险）、会议摘要（有限风险；验证同意）、合规报告（有限风险）、发票处理（有限风险）。5个基础模板均为有限风险；同一模板被改用于HR筛选或信贷决策，则因用途继承高风险义务。',
          '**提供者vs部署者区分很重要。** 如果您把模型构建到出售给他人的产品中，您是提供者（义务更多）。如果您为自己运营该系统，您是部署者（义务较少，但仍真实）。仅内部的本地智能体通常使您成为部署者。',
          '**任何新工作流的行动项：** 部署批准前进行分类。分类是单一决定（有限/高/禁止），附书面理由，由DPO或合规负责人签字，保存在AI系统的技术档案中。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'EU AI Act附件III的高风险用例清单是操作参照——分类工作流时直接查阅。不要依赖摘要文章；法律文本简短精确，足以作为清单使用。',
          },
        ],
      },
      gdprControls: {
        id: 'gdpr-controls',
        title: '智能体工作流的GDPR控制',
        content:
          '**本地架构消除了一项威胁（云LLM数据共享），但不消除对数据本身的GDPR义务。** 6项控制覆盖多数智能体工作流；这6项与EU AI Act对高风险系统期望的技术档案干净对应。中国企业的并行参照框架：《数据安全法》（2021）的数据分类分级要求，《个人信息保护法》（2021）的处理规则与跨境传输条款，金融、医疗、法律等行业的具体监管要求。',
        items: [
          '**1. 合法依据（第6条）。** 部署前文档化适用的依据——同意、合同、法律义务、合法利益、生命利益或公共任务。多数业务智能体工作流以合同（员工/客户关系）或合法利益（附文档化的权衡测试）运行。特殊类别数据（健康、生物识别、政治观点）需要在第6条依据上叠加第9条条件。',
          '**2. 数据最小化（第5(1)(c)条）。** 智能体只能看到工作流所需的个人数据。实际含义：在RAG层而非模型层进行分块和过滤。仅相关一节时，避免把整份文档流式输入对话。任务完成后，避免保留含个人数据的中间提示词。',
          '**3. 目的限制（第5(1)(b)条）。** 未经重新评估，智能体不得跨任务被重新利用。批准用于发票处理的工作流不能悄悄吸收员工绩效评审职能——那是新目的、新合法依据、新DPIA决定。',
          '**4. 处理安全性（第32条）。** 静态加密、工作空间访问控制、不可变审计日志，以及包含"模型产生了不该产生的输出"的事件响应计划。本地架构覆盖了很多，但不要假设它覆盖一切。',
          '**5. 审计日志。** 每个智能体动作的最小日志字段：时间戳、用户/发起者、模型标识与版本、输入哈希、工具调用与参数、输出哈希、审批者（手动批准时）。Append-only存储；完整性保护（哈希链或签名日志行）。',
          '**6. DPIA（第35条）。** 工作流涉及对个人数据的系统性处理且具有重大影响、大规模特殊类别数据，或在AI Act下属高风险时为强制。其余按触发条件。DPIA记录控制、剩余风险和DPO签字。',
          '本架构所基于的数据侧架构，请参阅[本地RAG用于私密业务数据](/power-local-llm/local-rag-for-private-business-data?lang=zh)——RAG控制供给同一审计管道。',
          '叠加在其上的提示词与输出控制，请参阅[生产环境的提示词治理](/prompt-engineering/prompt-governance-in-production?lang=zh)和[提示词注入与安全](/prompt-engineering/prompt-injection-and-security?lang=zh)。',
        ],
      },
      dachSpecifics: {
        id: 'dach-specifics',
        title: '德国特性：员工代表会共同决定与§203 StGB',
        content:
          '**DACH工作流有两层英文指南经常忽略的额外要求。** 两者都早期触发，且漏掉就会阻断决策。在DACH地区设有子公司或分支机构的中国企业同样适用。',
        items: [
          '**员工代表会共同决定（BetrVG §87(1) Nr. 6）。** 任何监督员工行为或绩效的技术系统都触发共同决定。德国劳动法院对"监督"的解释很宽泛——分类员工邮件或总结员工会议的智能体即属此类。员工代表会必须在设计阶段参与，而非部署后。漏掉这一步使智能体落地在事后被法庭撤销过。',
          '**实际含义：** 部署任何处理员工数据的工作流——即便被动、即便直接输出对员工本人有利——之前先与员工代表会接触。共识（Betriebsvereinbarung）成为系统技术档案的一部分。多数员工代表会在早期参与时表现建设性；几乎没有在晚期参与时仍然建设性的。',
          '**§203 StGB职业保密。** 律师、医生、审计师、税务顾问及若干其他职业对客户信息的未经授权披露承担刑事责任。"助手"例外（§203(3)）覆盖内部员工，但不自动覆盖外部服务提供商。云LLM是外部服务提供商；这是受§203约束的事务所转向本地技术栈的法律核心。',
          '**实际含义：** 对受§203约束的任何职业，纯本地架构不是偏好而是工作流被允许存在的前提。与智能体供应商（若有）的合同必须包含§203合规条款；技术档案必须记录无任何客户数据离开事务所基础设施。',
          '**奥地利与瑞士：** 奥地利紧密镜像§203（StGB §121）；瑞士保密义务（StGB CH第321条）甚至更宽泛。架构结论一致——纯本地，敏感职业数据零例外。',
          '同一控制者下的数据侧合规图景，请参阅[本地RAG用于私密业务数据](/power-local-llm/local-rag-for-private-business-data?lang=zh)——RAG与智能体技术栈共享审计日志和访问控制层。',
        ],
      },
      modelPick: {
        id: 'model-pick',
        title: '为业务智能体选择合适的模型',
        content:
          '**工具调用可靠性是模型属性，而非harness属性。** 同一harness配以小型通用模型会失败；配以27B+工具调用调优模型则成功。先选模型。',
        items: [
          '**Gemma 4 27B（`gemma4:27b`）。** 2026年5月最佳通用工具调用模型。在16 GB统一内存或24 GB显存（Q4_K_M）下运行。在文档摄入、邮件分流和发票处理上可靠。链式工具调用略保守——很适合业务工作流，因为每步本就有显式批准。',
          '**GLM-5.1 32B（`glm5:32b`）。** 默认128K上下文。工具调用可靠性强。输入较长时（合规报告、一小时会议转录）的最佳选择。完整上下文需24 GB+显存（Q4_K_M）。',
          '**Qwen3 32B（`qwen3:32b`）。** 各方面均衡，多步规划下非常可靠。Gemma 4过于保守时的良好回退。默认32K上下文；适合多数业务任务。',
          '**Llama 3.3 70B（`llama3.3:70b`）。** 最高上限，最重硬件。Q4_K_M需48 GB+显存或64 GB统一内存。可靠性比速度更重要的合规报告和异常处理使用。',
          '**Llama 3.2 3B（`llama3.2:3b`）。** 大批量分流的轻量选择。8 GB显存即可舒适运行。"是客户支持/销售/垃圾邮件"够用；起草回复不够。起草步骤需配合27B+模型。',
          '**Mistral Large。** 适合纯本地过度而美国云不可行的混合配置的欧盟托管替代。通过Mistral的欧盟端点+签订DPA运行；数据仍在欧盟司法管辖。',
          '**工具调用应避免：** 生产工作中的7B以下模型、未经显式工具调用训练的通用模型，以及小尺寸端比Q4_K_M更激进的量化。症状是工具调用畸形、参数幻觉、智能体循环停滞。',
          '正面对比数据请参阅[2026年最佳本地工具调用模型](/power-local-llm/best-local-models-tool-calling-2026?lang=zh)。同一组模型的显存与硬件配置请参阅[2026本地LLM硬件指南](/local-llms/local-llm-hardware-guide-2026?lang=zh)。',
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: '业务用智能体技术栈对比',
        content:
          '**2026年4个智能体运行时在业务工作流中可信。** 它们在审批门UX、审计跟踪丰富度和所需自定义代码量上有所不同。',
        columns: ['运行时', '设置', '审批门', '审计跟踪', '适用场景'],
        rows: [
          { '运行时': 'Cline (VS Code)', '设置': '安装一个扩展', '审批门': 'IDE内逐步；自动批准白名单', '审计跟踪': '扩展内日志；合规需导出', '适用场景': '编码型工作流，单开发者审计' },
          { '运行时': 'Goose + MCP', '设置': 'Brew install + mcp.json', '审批门': 'CLI提示；按工具可配置', '审计跟踪': 'CLI日志文件；轮转到不可变存储', '适用场景': 'CLI工作流，无界面服务器' },
          { '运行时': 'n8n self-hosted + Ollama', '设置': 'Docker + n8n LLM节点', '审批门': '工作流级人工介入节点', '审计跟踪': '原生n8n执行日志 + 数据库', '适用场景': '一两个模型步骤的确定性工作流' },
          { '运行时': '自定义LangGraph + Ollama', '设置': 'Python项目，真实测试套件', '审批门': '由您自建（中断API）', '审计跟踪': '由您自建', '适用场景': '值得工程投入的生产工作流' },
        ],
        items: [
          '**选择Cline + Ollama** 如果团队以开发者为主，工作流落在VS Code内。安装阻力最小，到工作智能体最快。',
          '**选择Goose + MCP** 如果工作流在无界面服务器（计划合规报告、文件夹监听摄入器）上运行，没有IDE。',
          '**选择n8n + Ollama** 如果工作流是确定性形态，含一两个模型步骤。n8n的人工介入节点提供审批门，无需自定义UI。',
          '**仅在工作流形态确实与上述不兼容时选择自定义LangGraph。** 构建工作量真实；审计跟踪和审批门代码归您。',
          '**这些技术栈的诚实可靠性对比**，请参阅[2026本地AI智能体：实际有效的（与仍会失败的）](/power-local-llm/autonomous-local-agents-actually-work?lang=zh)。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '欧盟业务工作流部署本地智能体的常见错误',
        items: [
          '**错误1：未做DPIA即部署。** 任何涉及特殊类别数据或对人作出决定的工作流都需要DPIA。DPIA很短——多数智能体工作流4–8页——但强制，且是监管机构最先要求的。部署之前写，不是之后。',
          '**错误2：机密文档使用云连接的智能体。** 如果智能体运行时、审计日志或嵌入存储位于他人云中，本地模型不够。架构是端到端的；链中一个云依赖就破坏纯本地论证。',
          '**错误3：写入或发送动作没有审批门。** 智能体读取、分类、起草、发送。发送步骤是人类必须每次批准的步骤，不论模型过去多可靠。自动发送智能体是监管机构得知您的方式。',
          '**错误4：个人数据与业务数据混入同一工作空间。** 智能体的工作目录和向量存储应按工作流划分作用域，而非共享。交叉污染违反目的限制；恢复成本高。',
          '**错误5：跳过审计日志。** "我们可以从模型对话历史重建"不是审计日志。Append-only、哈希链、按相关保留期保存、可被DSAR处理者查询——这是基线。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          '[EU AI Act合并文本（artificialintelligenceact.eu）](https://artificialintelligenceact.eu/the-act/) — 法规的官方导向聚合；附件III是操作的高风险清单。',
          '[GDPR完整文本（gdpr-info.eu）](https://gdpr-info.eu/) — 第5、6、25、32、35条对智能体设计具有操作意义。',
          '[NIST AI风险管理框架](https://www.nist.gov/itl/ai-risk-management-framework) — 非欧盟、不强制，但GOVERN / MAP / MEASURE / MANAGE的结构是有用的审计准备清单。',
          '[EDPB 03/2018指南：自动化个体决策](https://edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en) — 对任何对个人作出决定的工作流具有操作意义；GDPR第22条与AI Act下均关键。',
          '[全国人大《数据安全法》（2021）](http://www.npc.gov.cn/) — 中国数据分类分级、本地化与跨境传输的核心规则；与本地AI智能体架构高度契合。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '本地AI智能体是否默认GDPR合规？',
            a: '否——它们在架构上GDPR兼容，但默认非GDPR合规。纯本地架构消除云LLM威胁模型（Schrems II、子处理者清单、跨境传输），但对数据本身的GDPR控制仍然适用：合法依据（第6条）、数据最小化（第5条）、处理安全性（第32条）、审计日志，以及工作流证明合理时的DPIA。本地技术栈使这些控制更易举证；并不让它们变成可选。中国企业请同步参照《数据安全法》《个人信息保护法》的处理规则。',
          },
          {
            q: 'EU AI Act下哪些工作流属于高风险？',
            a: '附件III列出操作的高风险用例。业务团队最常触及的模式是HR（CV筛选、候选人排序、绩效评估）、信贷决策、福利资格判定和必要服务访问。多数一般业务工作流（文档摄入、邮件分流、会议摘要、发票处理、合规报告）为有限风险——仅透明度义务，无完整合规评估。',
          },
          {
            q: '邮件分流智能体需要DPIA吗？',
            a: '按触发条件。当工作流涉及对个人数据的系统性处理且具有重大影响（第35(1)条）或命中监管机构的强制DPIA清单之一时，DPIA为强制。一般收件箱分流智能体常常不会自动触发；同一智能体处理HR或候选人收件箱时则会。多数团队应对任何含员工数据的收件箱执行简短DPIA，无论严格触发条件——成本是小时级，收益是文档化的批准。',
          },
          {
            q: '本地智能体可以处理员工数据吗？',
            a: '可以，DACH地区有两步额外步骤。第一：员工代表会共同决定（BetrVG §87(1) Nr. 6）——设计阶段引入员工代表会，签订定义目的、保留、访问与审计要求的Betriebsvereinbarung。第二：GDPR下的合法依据——通常是合同或带文档化权衡测试的合法利益。漏掉员工代表会步骤已在德国劳动法庭事后撤销过部署。中国企业涉及员工数据时，请并行参照《个人信息保护法》第13条（处理事由）与劳动合同/规章制度协商程序。',
          },
          {
            q: '什么模型尺寸能可靠处理业务工作流？',
            a: 'Gemma 4 27B是通用工具调用的可靠默认。GLM-5.1 32B是输入较长时（合规报告、一小时会议转录）的选择——默认128K上下文。Qwen3 32B是均衡的回退。Llama 3.3 70B上限最高但需48 GB+显存。Llama 3.2 3B适合大批量分类，但不适合起草。7B以下模型不论智能体运行时如何包装，都会发出畸形工具调用。',
          },
          {
            q: '如何审计智能体做了什么？',
            a: '每个智能体动作写一条日志：时间戳、用户/发起者、模型标识与版本、输入哈希、含参数的工具调用、输出哈希、手动批准时的审批者。存储为append-only且有完整性保护（哈希链或签名日志行）。保留以GDPR第30条处理记录要求为下限；行业规则（金融服务、医疗）会延长。审计日志同时回答DSAR查询并以一种形态供给AI Act技术档案。',
          },
          {
            q: '可以跨部门共享一个智能体吗？',
            a: '架构上可以，法律上复杂。每个部门有自己的目的、自己的合法依据、自己的保留，可能还有自己的员工代表会协议。共享智能体模糊所有这些，并在目的限制（第5(1)(b)条）下产生交叉污染风险。更干净的模式：一个智能体运行时，工作流间分开工作空间，工作流间分开审计日志，底层模型单一部署。模型是共享资源；工作流不是。',
          },
          {
            q: '关于跨境子公司怎么办？',
            a: '如果控制者是欧盟实体且数据留在欧盟基础设施，纯本地架构默认覆盖多数跨境关切。注意两种情况：非欧盟子公司在欧盟个人数据上运行本地智能体（数据必须留在欧盟；只要无个人数据外流，智能体可远程运行）；非欧盟支持团队访问智能体输出（视为传输；按GDPR第V章记录法律依据）。Mistral Large on Scaleway是纯本地过度而美国云不可行时的常见混合选择。中国企业涉及跨境时，并行参照《个人信息保护法》第38–43条（跨境传输）的合规路径。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地RAG用于私密业务数据](/power-local-llm/local-rag-for-private-business-data?lang=zh) — 供给同一审计管道的GDPR合规数据侧架构。',
          '[通过MCP将Ollama连接到数据库和API：本地智能体设置2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=zh) — 文件系统、数据库、浏览器和GitHub工具的协议层。',
          '[2026本地AI智能体：实际有效的（与仍会失败的）](/power-local-llm/autonomous-local-agents-actually-work?lang=zh) — 上述4个推荐运行时的诚实可靠性对比。',
          '[用本地AI智能体替代Zapier](/power-local-llm/replace-zapier-with-local-ai-agents?lang=zh) — 智能体光谱确定性形态端的n8n + Ollama工作流模板。',
          '[2026年最佳本地工具调用模型](/power-local-llm/best-local-models-tool-calling-2026?lang=zh) — 本指南推荐模型的对比基准。',
          '[本地LLM安全与隐私清单](/local-llms/local-llm-security-privacy-checklist?lang=zh) — 运行这些工作流的相同硬件的控制层。',
        ],
      },
    },
  },
}
