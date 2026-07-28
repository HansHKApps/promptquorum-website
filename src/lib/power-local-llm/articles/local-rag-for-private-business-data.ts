// Power Local LLM — Local RAG for Business Data: GDPR-Compliant AI for Sensitive Documents
// Slug: local-rag-for-private-business-data
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-en.png',
    title: 'Local RAG for Business Data: GDPR-Compliant AI for Sensitive Documents (2026)',
    seoTitle: 'GDPR-Compliant Local RAG for Sensitive Documents (2026)',
    intro:
      'Legal, medical, and financial teams face the same problem: the documents most worth searching with AI are exactly the ones that cannot leave the building. This is the architecture, control set, and deployment-pattern decision matrix for self-hosted RAG that meets GDPR, the EU AI Act, HIPAA, and German Datenschutz expectations — written for the compliance officer who needs to send one document to an IT team and have them know what to build.',
    metaDescription:
      "GDPR-compliant local RAG for legal, medical, and financial teams. Architecture, audit logging, DPIA scope, and 3 deployment patterns compared. Send to your IT team.",
    twitterDescription:
      'Local RAG that meets GDPR and EU AI Act requirements. Air-gap, audit logs, data lineage, DPIA scope, and 3 deployment patterns — the article EU compliance officers send to IT.',
    audience:
      'EU/German compliance officers, DPOs, legal counsel, and IT architects responsible for building self-hosted RAG over confidential documents — contracts, patient records, audit files, M&A workrooms, regulator correspondence.',
    readTime: '15 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'GDPR-compliant local RAG',
    targetKeywords: [
      'gdpr compliant rag',
      'local rag business data',
      'eu ai act rag',
      'private rag for confidential documents',
      'on-premise rag deployment',
      'datenschutz rag',
      'dpia local rag',
    ],
    leadAnswerBlock:
      '**A self-hosted RAG deployment meets GDPR and EU AI Act expectations only when six controls are wired in from day one: air-gapped or strictly egress-controlled hosting, per-user authentication with role-based document access, immutable audit logs covering ingest and retrieval, end-to-end encryption at rest and in transit, deterministic data lineage from chunk to source, and a written deletion path that propagates from the source store through the vector index and any cached embeddings. The deployment pattern (single-user laptop, on-prem server, private EU cloud) determines which controls are easy and which are work — not whether the controls are required.**',
    quickAnswerTop: {
      en: {
        question: 'Is local RAG GDPR-compliant by default, and which deployment pattern should regulated teams pick?',
        answer:
          'Local RAG is not GDPR-compliant by default. Running a model on-premise solves the cross-border data transfer problem and shrinks your processor list, but GDPR Articles 5, 25, 30, 32, and 35 still apply: lawful basis, data minimisation, audit logging, security of processing, and a DPIA for any system that ingests special-category data at scale. Pick a single-user laptop deployment for solo professionals and one-off matter reviews; an on-prem server for departmental knowledge bases up to a few thousand documents and 5–50 users; a private EU cloud (sovereign cloud, customer-managed keys, EU-only region) for cross-departmental or cross-entity deployments where multi-region resilience matters more than full air-gap. Whichever you choose, the six controls above are the same — only the implementation cost shifts.',
        bullets: [
          'Local hosting solves cross-border transfer (Article 44–49) and shrinks the processor list — it does not solve lawful basis, DPIA, or data subject rights on its own.',
          'Single-user laptop — best for solo lawyers, doctors, auditors, and one-off matter reviews. Hardest to audit at scale; easiest air-gap.',
          'On-prem server — best for 5–50 user departmental deployments. Real audit logs, RBAC, backup, and disaster recovery. Highest IT effort.',
          'Private EU cloud — best for multi-entity deployments needing resilience. Sovereign region + customer-managed keys + no AI training on customer data clauses required.',
          'A DPIA is mandatory under Article 35 when special-category data is ingested at scale, regardless of deployment pattern.',
          'Right-to-be-forgotten requests must propagate to source documents, vector indexes, and cached embeddings — design the deletion path before go-live, not after a request arrives.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Deployment Pattern Comparison', anchor: '#deployment-comparison' },
      { label: 'Choosing a Deployment Pattern', anchor: '#which-deployment' },
      { label: 'Why Local RAG for Sensitive Data', anchor: '#why-local-rag' },
      { label: 'The Six Controls Every Deployment Needs', anchor: '#required-controls' },
      { label: 'Air-Gap and Egress Control', anchor: '#air-gap' },
      { label: 'Audit Logging That Will Survive Review', anchor: '#audit-logging' },
      { label: 'Data Lineage From Chunk to Source', anchor: '#data-lineage' },
      { label: 'Encryption and Access Control', anchor: '#encryption-access' },
      { label: 'Single-User Laptop Pattern', anchor: '#laptop-pattern' },
      { label: 'On-Prem Server Pattern', anchor: '#on-prem-pattern' },
      { label: 'Vector Database Options', anchor: '#vector-db-comparison' },
      { label: 'Private EU Cloud Pattern', anchor: '#private-cloud-pattern' },
      { label: 'EU AI Act Classification', anchor: '#eu-ai-act' },
      { label: 'DPIA Requirements', anchor: '#dpia-requirements' },
      { label: 'Germany-Specific Notes (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Compliance Checklist', anchor: '#compliance-checklist' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Local hosting is necessary but not sufficient.** Running the model and vector store on your own hardware solves cross-border data transfer and shrinks the processor list, but GDPR Articles 5, 25, 30, 32, and 35 still apply. Lawful basis, data minimisation, audit logging, security of processing, and DPIAs do not become optional just because the data stays on premises.',
          '**Six controls are non-negotiable** regardless of deployment pattern: air-gap or strict egress control, per-user authentication with role-based access, immutable audit logs, encryption at rest and in transit, deterministic data lineage from chunk back to source document, and a written deletion path that includes the vector index and any cached embeddings.',
          '**Three deployment patterns cover most regulated use cases.** Single-user laptop for solo professionals and matter reviews; on-prem server for departmental knowledge bases of 5–50 users; private EU cloud (sovereign region, customer-managed keys) for multi-entity deployments where resilience matters more than full air-gap.',
          '**The EU AI Act classifies most local RAG as a limited-risk system** — but the moment retrieval feeds an automated decision (creditworthiness scoring, employment screening, benefit eligibility) the deployment slides into high-risk and triggers the full conformity assessment, post-market monitoring, and human-oversight obligations.',
          '**A DPIA is mandatory under Article 35** for any RAG that ingests special-category data (health, legal, biometric, political, union membership) at scale, or any system that produces automated decisions with legal effects. Skip the DPIA and you skip the audit defence.',
          '**Right-to-be-forgotten is the deletion test most deployments fail.** Source documents are easy. Vector indexes can be rebuilt. Cached embeddings, retrieval logs, and any answers stored in chat history are the parts that get missed — and the parts a regulator will ask about.',
          '**Open-source embedding models are GDPR-safe in principle**, but only if (a) the model weights are downloaded once and pinned to a hash, (b) inference runs entirely on local hardware with no telemetry, and (c) the model card and licence are reviewed for any clauses that conflict with confidential business use.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**6 mandatory controls** for any regulated RAG: air-gap, RBAC, audit logs, encryption, data lineage, deletion path.',
          '**3 deployment patterns:** single-user laptop (solo professionals), on-prem server (5–50 users), private EU cloud (multi-entity).',
          '**DPIA is mandatory** under Article 35 when ingesting special-category data (health, legal, biometric) at scale.',
          '**EU AI Act:** most local RAG = limited-risk; becomes high-risk when retrieval feeds automated decisions (credit, employment, benefits).',
          '**Right-to-be-forgotten** must propagate through source docs, vector indexes, cached embeddings, AND answer history.',
          '**Works-council (Betriebsrat) co-determination** under §87 BetrVG required for any RAG over employee-authored content in Germany.',
          '**Open-source embedding models** are GDPR-safe only if weights are pinned, inference is fully local, and licence is reviewed.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Deployment Pattern Comparison',
        content:
          'Each pattern can be made GDPR-compliant; what changes is the cost of the controls and the breakage modes when something goes wrong. Pick the simplest pattern that fits the user count, document sensitivity, and resilience requirement.',
        columns: ['Control', 'Single-user laptop', 'On-prem server', 'Private EU cloud'],
        rows: [
          {
            'Control': 'Air-gap (no outbound network)',
            'Single-user laptop': 'Trivial — disable network',
            'On-prem server': 'Achievable — VLAN + firewall',
            'Private EU cloud': 'Hard — egress allowlist only',
          },
          {
            'Control': 'Audit log (who, what, when)',
            'Single-user laptop': 'Manual — OS-level only',
            'On-prem server': 'Strong — central log pipeline',
            'Private EU cloud': 'Strong — cloud-native logging',
          },
          {
            'Control': 'Data lineage (chunk → source)',
            'Single-user laptop': 'Local files only',
            'On-prem server': 'Full pipeline traceable',
            'Private EU cloud': 'Full — but spans regions',
          },
          {
            'Control': 'EU data residency',
            'Single-user laptop': 'Inherent — physical location',
            'On-prem server': 'Inherent — physical location',
            'Private EU cloud': 'Configured — sovereign region required',
          },
          {
            'Control': 'Per-user RBAC',
            'Single-user laptop': 'Single user — N/A',
            'On-prem server': 'Identity provider + groups',
            'Private EU cloud': 'IAM + SSO + per-collection ACLs',
          },
          {
            'Control': 'Backup and disaster recovery',
            'Single-user laptop': 'Encrypted external disk',
            'On-prem server': 'Tape or off-site backup',
            'Private EU cloud': 'Cross-AZ replication',
          },
          {
            'Control': 'Initial cost',
            'Single-user laptop': 'Hardware only — low',
            'On-prem server': 'Server + integration — medium',
            'Private EU cloud': 'Subscription + setup — medium',
          },
          {
            'Control': 'Ongoing cost',
            'Single-user laptop': 'None — sysadmin time',
            'On-prem server': 'IT ops + power + cooling',
            'Private EU cloud': 'Monthly recurring',
          },
          {
            'Control': 'Best for',
            'Single-user laptop': 'Solo professionals, matter reviews',
            'On-prem server': '5–50 users, departmental KBs',
            'Private EU cloud': 'Multi-entity, resilient deployments',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Choosing a Deployment Pattern',
        content:
          '**The right choice depends on user count, document sensitivity, audit-readiness pressure, and how much in-house IT capacity you have.** This decision shortcut covers most real situations.',
        columns: ['Your situation', 'Pick'],
        rows: [
          {
            'Your situation': 'Solo lawyer, doctor, or auditor reviewing one matter at a time',
            'Pick': 'Single-user laptop',
          },
          {
            'Your situation': 'M&A workroom with 3–5 named reviewers and a fixed end date',
            'Pick': 'Single-user laptop or on-prem (depending on document volume)',
          },
          {
            'Your situation': 'Compliance team of 10–30 sharing a regulator-correspondence archive',
            'Pick': 'On-prem server',
          },
          {
            'Your situation': 'Hospital department building a clinical-protocol assistant for 50 staff',
            'Pick': 'On-prem server',
          },
          {
            'Your situation': 'Multi-entity group needing one RAG across subsidiaries in several EU countries',
            'Pick': 'Private EU cloud (sovereign region + customer-managed keys)',
          },
          {
            'Your situation': 'Insurance carrier with 24/7 uptime requirement and DR plan',
            'Pick': 'Private EU cloud',
          },
          {
            'Your situation': 'Government agency with classified or restricted data',
            'Pick': 'Air-gapped on-prem only — cloud is out of scope',
          },
          {
            'Your situation': 'Regulator-facing audit defence due in under 6 weeks',
            'Pick': 'On-prem server (fastest to demonstrate control over)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Why Local RAG for Sensitive Data',
        content:
          '**The case for local RAG over cloud LLM-as-a-service is not ideology — it is the shape of the GDPR risk assessment.** Cloud RAG is workable for many uses cases; for sensitive business data it adds five risks that local RAG eliminates by construction.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local RAG keeps your sensitive documents on your own hardware while giving your team AI-powered search — no data leaves the building, no third-party processor touches it, and no cross-border transfer question arises.',
          },
          {
            type: 'plain-terms',
            text: 'Imagine your legal team could search 10,000 case files by asking questions in plain language — but the documents never leave your server room. That is local RAG: the AI reads your documents on your hardware, answers your questions on your hardware, and nothing gets sent anywhere. The compliance advantage is not a feature — it is the architecture.',
          },
        ],
        items: [
          '**Cross-border transfer (Article 44–49).** Sending personal data to a non-EU processor requires Standard Contractual Clauses, a Transfer Impact Assessment, and a credible answer for whether the receiving jurisdiction has subpoena powers reaching that data. Local RAG does not transfer data — the question does not arise.',
          '**Sub-processor sprawl (Article 28).** Cloud LLM providers typically rely on hyperscaler infrastructure, content-moderation services, and observability vendors. Each is a sub-processor that must be listed, contracted, and audited. Local RAG has zero sub-processors by default.',
          '**Training-data leakage.** Many cloud LLM terms reserve the right to use customer prompts for model improvement unless a paid enterprise tier is used and the no-training clause is verified. Local RAG runs models with weights you control; nothing leaves the host.',
          '**Confidentiality clauses in client contracts.** Outside counsel agreements, M&A NDAs, and patient-data agreements frequently prohibit transmission of the protected material to third-party processors. Local RAG sidesteps the clause entirely.',
          '**Subpoena and legal-process exposure.** Documents stored with a cloud provider can be compelled by legal process directed at the provider, with disclosure obligations the data controller may not even be notified about in time. Documents that never leave your premises can only be compelled from you.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Local RAG is not the right answer for every workload. Public-information research, marketing draft generation, code assistance on open-source repos — all of these are usually better with cloud LLMs because the GDPR exposure is low and the model quality gap matters. The argument in this article is specifically for confidential business data: legal, medical, financial, HR, regulator correspondence, and trade secrets.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'The Six Controls Every Deployment Needs',
        content:
          '**These six controls are the floor.** Every regulated deployment needs all six; the deployment pattern only changes how you implement them. Skipping any one of these is the most common reason audits go badly.',
        numberedItems: [
          {
            title: 'Air-gap or strict egress control',
            whyItMatters:
              'Confirms that documents and embeddings cannot leak via outbound calls — telemetry SDKs, model-update probes, crash reporters, content-moderation callbacks, third-party CDNs for fonts. Either disable network access entirely (true air-gap) or run an egress allowlist that permits only signed update servers.',
          },
          {
            title: 'Per-user authentication with role-based access',
            whyItMatters:
              'You need to be able to answer "who accessed which document" before a regulator asks. Single sign-on against an identity provider, group-based collection access, and per-document ACLs where the matter requires it. Shared accounts are not a control — they are an audit failure waiting to happen.',
          },
          {
            title: 'Immutable audit logs covering ingest and retrieval',
            whyItMatters:
              'For each document: who uploaded it, when, source path, hash. For each query: who asked, what was asked (if logging permits), which chunks were retrieved, which document IDs they came from, what answer was returned. Logs must be tamper-evident — append-only, signed, with retention long enough to cover the supervisory authority\'s investigation window. For the prompt-level audit trail — versioning, changelogs, and rollback — see [prompt version control workflows](https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'Encryption at rest and in transit',
            whyItMatters:
              'Disk encryption on the host, TLS for any internal service-to-service call, and key management that survives a stolen laptop or compromised admin account. Customer-managed keys for cloud deployments. Without these, a device theft becomes a notifiable data breach under Article 33.',
          },
          {
            title: 'Deterministic data lineage from chunk to source',
            whyItMatters:
              'Every retrieved chunk must trace back to its source document, page, section, and version. This is what lets you (a) verify the answer, (b) honour a deletion request, (c) defend the system in court when a generated summary is questioned. "We can\'t reproduce which chunk caused which answer" is not an acceptable answer to a supervisory authority.',
          },
          {
            title: 'Written deletion path including vector index and cached embeddings',
            whyItMatters:
              'A right-to-be-forgotten request must propagate from the source store, through the vector index, into any cached embeddings, and through retention of retrieval logs. Most deployments handle the source delete cleanly and forget the rest. Document the deletion runbook before go-live; rehearse it on synthetic data.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-Gap and Egress Control',
        content:
          '**Air-gap means the host has no outbound network path; egress control means it has a tightly allowlisted one.** Both are acceptable; pick the strongest model your operations can sustain.',
        items: [
          '**True air-gap** — no DHCP, no DNS resolution to public destinations, no outbound TCP. Updates happen via signed media that an admin physically connects. This is the right model for classified work, certain hospital networks, and any deployment where the threat model includes a malicious dependency.',
          '**Egress allowlist** — outbound network is permitted only to a small list of named destinations (model update servers, your identity provider, log forwarders to internal collectors). All other traffic is dropped at the firewall. This is the practical default for most regulated departmental deployments.',
          '**What to look for in the platform**: zero telemetry by default, no outbound calls during inference, no font CDNs in the UI, no crash reporters that ship payloads. Verify with a packet capture or a tool like Little Snitch on the test bench before promoting to production.',
          '**Update governance** — model weights, embedder weights, application code, and OS patches all move through a controlled update window. The admin who promotes an update signs off in writing; the change is logged.',
          '**Common air-gap break:** an analytics SDK bundled with a third-party UI component, a font CDN reference in the application chrome, or a "check for updates" probe that runs on launch. These are why the verification step matters — assume nothing about defaults.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Run a 24-hour packet capture on the host with the application open and idle. Anything outbound that is not on the allowlist is a finding. Repeat this every time the application is updated — release notes routinely understate what new outbound calls have been added.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'Audit Logging That Will Survive Review',
        content:
          '**The audit log is the artefact a supervisory authority will read first.** It must answer two questions for every retrieval: who asked, and what did the system give them. Anything less and you are arguing with words; with proper logging, you are showing receipts.',
        items: [
          '**Ingest events**: document ID, hash (SHA-256), filename, source path, uploaded by, timestamp, classification tag, size, page count, owner group, retention class. Tag every document at ingest — retroactive classification of large corpora is hard and rarely complete.',
          '**Retrieval events**: query ID, user ID, timestamp, retrieved chunk IDs (and the document IDs they came from), retrieval scores, final answer hash, model identifier, embedder identifier, top-K used. The query text itself is sensitive — log it only if your purpose-of-processing covers it; otherwise log the hash and timestamp.',
          '**Administrative events**: model promotion, embedder change, index rebuild, user/group changes, ACL changes, access-policy changes. Each event signed by the responsible admin.',
          '**Tamper-evidence**: append-only log, hash chain (each entry references the previous entry hash), out-of-band signing key, regular reconciliation against a separate copy held by a different admin or a write-once medium.',
          '**Retention**: aligns with the supervisory authority\'s investigation window — at minimum the matter retention period; commonly six to seven years for regulated industries; longer where industry rules apply.',
          '**Pipeline**: the application emits structured events; a forwarder ships them to a separate, write-restricted log store. The application server should never have permission to delete or rewrite log entries — separation of duties is what makes the log credible.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Logging the query text introduces its own GDPR question — a query may itself contain personal data (e.g., "summarise the medical history of patient X"). Decide at design time whether your purpose-of-processing covers query logging, and if it does not, log only the metadata required for audit and operational diagnostics.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Data Lineage From Chunk to Source',
        content:
          '**Lineage is the backbone of every other control.** Without it, deletion requests fail, answer verification is impossible, and the audit trail collapses. Build lineage in from the first ingest, not after.',
        items: [
          '**Document-level lineage**: each document has a stable internal ID, a content hash, an ingest timestamp, an owner, a classification, and a retention class. The original file remains on the source store; the RAG system holds a reference, not the master.',
          '**Chunk-level lineage**: each chunk references its parent document ID, page (for PDFs), section (for structured docs), character offset, length, and chunking-strategy version. When you re-chunk (you will), the old chunks are tombstoned, not deleted in place — so old retrieval logs still resolve.',
          '**Embedding-level lineage**: each embedding vector references its chunk ID and embedder identifier. When you change embedders, the old vectors are kept until the new ones are validated and any matters that referenced them are closed; only then are they purged.',
          '**Answer-level lineage**: each generated answer references the chunk IDs that produced it, the model identifier, the prompt template version, and the timestamp. When a user asks "where did this answer come from", the system resolves chunk → document → page in one click.',
          '**Re-indexing without breaking lineage**: rebuilds preserve document IDs and increment chunk-strategy versions. Old chunk IDs remain resolvable in retrieval logs even after the live index has moved on.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Test the lineage chain quarterly. Pick a random retrieval from the audit log and walk it back: chunk ID → document ID → original file on the source store → retention class. If any step is broken, fix the schema before the next supervisory inspection — not during it.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'Encryption and Access Control',
        content:
          '**Encryption at rest, encryption in transit, and access control that maps to your existing identity provider.** These are well-understood controls; the failure mode is forgetting one of the three layers, not implementing the chosen layer badly.',
        items: [
          '**At-rest encryption** — full-disk encryption on the host (LUKS on Linux, BitLocker on Windows, FileVault on macOS for laptops). For servers, also encrypt the partitions holding the vector store and ingest staging. Customer-managed keys for any cloud deployment, with key rotation per your policy.',
          '**In-transit encryption** — TLS for any service-to-service hop, even on localhost. Cipher policy aligned with your industry baseline. Mutual TLS where the threat model warrants — typically server-to-server in cloud deployments.',
          '**Authentication** — single sign-on against your existing identity provider (OIDC, SAML). No local accounts in production. MFA enforced for any user with administrative or sensitive-collection access.',
          '**Authorisation** — group-based access at the collection level; document-level ACLs where the matter requires (e.g., M&A workrooms, employment investigations). The retrieval pipeline must enforce ACLs at query time — not just the UI. A user who cannot see a document must also not have its chunks returned.',
          '**Administrative access** — privileged access management for any account that can read or rebuild indexes, view audit logs, or change ACLs. Just-in-time elevation with logged justification beats permanent admin rights.',
          '**Endpoint security** — managed devices for laptop deployments (MDM-enrolled, encrypted, screen-lock policy enforced). A solo-professional laptop with the document store decrypted and unattended in a café is the GDPR breach you do not want to write up.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Single-User Laptop Pattern',
        content:
          '**The single-user laptop is the easiest pattern to make air-gapped and the hardest to scale.** Right for solo professionals and one-off matter reviews; wrong for anything that needs to outlive a single user or survive their departure.',
        items: [
          '**Hardware** — a workstation-class laptop with full-disk encryption, a discrete GPU (or a recent unified-memory machine), and at least 32 GB of RAM. The model and embedder must fit in memory alongside the vector store cache. For hardware requirements and model selection by VRAM, see the [local LLM hardware guide](https://www.promptquorum.com/local-llms/local-llm-hardware-guide-2026).',
          '**Software** — a self-contained desktop RAG application running locally; an open-source LLM with weights downloaded once and pinned to a hash; an open-source embedder; a local vector store on the encrypted disk. For a comparison of open-source models suitable for local RAG, see [top open-source models for Ollama](https://www.promptquorum.com/local-llms/top-open-source-models-ollama).',
          '**Network posture** — air-gapped during work; reconnected only for explicit signed updates. Configure the OS firewall to drop all outbound connections by default and create explicit exceptions for the update workflow.',
          '**Document handling** — source documents on the encrypted disk; a separate per-matter folder structure; weekly encrypted backups to an external drive stored at a different location.',
          '**Audit posture** — the OS-level audit log (login, file access, peripheral events) is the floor. Application-level events are easier in the on-prem server pattern; for the laptop pattern, treat the OS log as the primary record and supplement with manual matter-by-matter notes.',
          '**Limits** — a single-user laptop is not a multi-user platform. Sharing the laptop, sharing accounts, or copying the document store to a colleague\'s machine breaks the audit posture and the lawful-basis assessment.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For solo professionals working confidential matters, the single-user laptop pattern is genuinely the strongest privacy posture available — better than any cloud and stronger than many on-prem deployments. The trade-off is operational: when the laptop dies, the matter inherits the recovery time of your backup discipline.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'On-Prem Server Pattern',
        content:
          '**The on-prem server is the workhorse pattern for regulated departmental RAG.** It scales to 5–50 users and a few thousand documents, supports proper audit logging, and stays inside your physical perimeter. The cost is real IT operations work.',
        items: [
          '**Hardware** — a server with one or two enterprise GPUs (workstation-class GPUs are acceptable for smaller corpora), redundant disks, ECC memory, and a UPS. Plan for 2–4× the storage of your raw document corpus to cover vectors, indexes, logs, and backups.',
          '**Network** — a dedicated VLAN behind the corporate firewall; egress allowlist or full air-gap depending on the threat model. Internal access via the corporate network only, no public ingress.',
          '**Software stack** — a self-hosted RAG platform (a standalone server image or a containerised deployment), an open-source LLM as the chat model, an open-source embedder, and a vector store appropriate for the corpus size. The application server, vector store, and log forwarder run as separate processes with separate service accounts.',
          '**Identity** — federated against the corporate identity provider; group membership drives collection access. Sensitive collections gate behind additional approval workflows.',
          '**Backup and DR** — nightly incremental backups of the document store and the vector index; weekly full backups; offsite copy held by IT. Documented restore runbook tested at least annually.',
          '**Operations** — patching window per change-management policy; quarterly access reviews; rehearsed deletion runbook for right-to-be-forgotten requests; documented model and embedder upgrade path that preserves lineage.',
          '**Capacity planning** — a few thousand documents and 5–50 concurrent users sit comfortably on a single mid-range GPU server. Past that, plan for either a beefier host or moving to the private cloud pattern.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'On-prem RAG is the pattern most likely to fail for non-technical reasons: a backup that has never been restored, an admin account shared across IT staff, a UPS that nobody has tested, a log forwarder that has been silently dropping events for two months. The technical controls are easier than the operational hygiene.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Vector Database Options for On-Prem RAG',
        content:
          '**The vector store choice rarely makes or breaks compliance — but it does shape operational cost, scale ceiling, and how cleanly the deletion runbook can be implemented.** Most regulated deployments pick one of these six.',
        columns: ['Vector Database', 'Type', 'EU Self-Hosted', 'Best for RAG Pattern'],
        rows: [
          {
            'Vector Database': '**Chroma**',
            'Type': 'Open-source, lightweight',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'Laptop + small on-prem',
          },
          {
            'Vector Database': '**Qdrant**',
            'Type': 'Open-source, performant',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'On-prem server, filtering-heavy',
          },
          {
            'Vector Database': '**Weaviate**',
            'Type': 'Open-source, full-featured',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'On-prem + hybrid search',
          },
          {
            'Vector Database': '**Milvus**',
            'Type': 'Open-source, enterprise',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'Large-scale on-prem',
          },
          {
            'Vector Database': '**pgvector**',
            'Type': 'PostgreSQL extension',
            'EU Self-Hosted': '✅',
            'Best for RAG Pattern': 'Teams already on Postgres',
          },
          {
            'Vector Database': '**Pinecone**',
            'Type': 'Managed SaaS',
            'EU Self-Hosted': '⚠️ US-hosted',
            'Best for RAG Pattern': 'Private EU cloud only (with caveats)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Private EU Cloud Pattern',
        content:
          '**The private EU cloud pattern uses a sovereign-region cloud provider with customer-managed keys, EU-only data residency, and a contractual no-AI-training clause covering customer data.** It is the right answer for multi-entity deployments, multi-region resilience requirements, and teams that lack the operational capacity for true on-prem.',
        items: [
          '**Provider selection** — a hyperscaler\'s EU sovereign offering or a European cloud provider. The DPA must list every sub-processor; transfer mechanisms must be addressed if any sub-processor is outside the EEA. Schrems II–style transfer impact analysis is part of the file even when the immediate processor is EU-based.',
          '**Region** — EU-only, with explicit data residency guarantees. Cross-region replication only to other EU regions. No US region as a failover, even temporarily, even for backups.',
          '**Encryption** — customer-managed keys with rotation; bring-your-own-key where the provider supports it; key access events logged separately from cloud-provider operational logs.',
          '**Network** — private VPC with no public ingress; access only via private connectivity (dedicated link or VPN) from your corporate network; egress allowlist for any outbound dependency.',
          '**Identity** — federated against your corporate IdP; cloud-native IAM bound to user identities, not shared service accounts; per-collection ACLs enforced in the retrieval pipeline.',
          '**Logging** — cloud-native audit log fed into your existing SIEM; separate ingestion for application audit events; tamper-evident retention that meets supervisory expectations.',
          '**Contracts** — the DPA must be Article 28–compliant, list sub-processors, address SCCs where needed, and include an explicit no-training-on-customer-data clause covering both LLM weights and any ancillary services (search, telemetry, support).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The private EU cloud pattern reads as more permissive than on-prem because it uses a third-party processor — but with sovereign region, customer-managed keys, no-training contractual clause, and proper egress control, it can match or beat on-prem on availability and audit posture. The compliance file is bigger; the operational risk is smaller.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'EU AI Act Classification: Limited-Risk vs High-Risk',
        content:
          '**Most local RAG deployments are limited-risk AI systems under the EU AI Act — but the moment retrieval feeds an automated decision affecting a person, the classification slides into high-risk and the obligations multiply.** Classify before you build.',
        items: [
          '**Limited-risk (most local RAG)** — the system retrieves and summarises documents to assist a human; the human makes the decision. Obligations are mostly transparency: users must know they are interacting with an AI, generated content must be identifiable as such, and no manipulative or deceptive design.',
          '**High-risk** — retrieval feeds an automated decision in domains the Act lists: credit scoring, employment screening, education admissions, essential public services, law enforcement, migration, justice, biometric identification, critical infrastructure. A clinical-decision-support RAG that recommends treatments is high-risk; a clinical-protocol-summary RAG that helps a doctor read guidelines faster is not.',
          '**High-risk obligations** — risk management system across the lifecycle, data governance (training, validation, testing data documented), technical documentation, automatic event logging, transparency and information to users, human oversight, accuracy and robustness measures, conformity assessment before placing on the market, post-market monitoring.',
          '**General-purpose AI considerations** — using a general-purpose LLM (open-source or otherwise) does not transfer the high-risk obligations to the model provider. The deployer (your organisation) carries the high-risk obligations for the system you build with that model.',
          '**Prohibited practices** — social scoring, untargeted scraping of facial images, emotion recognition in workplaces and schools, certain real-time biometric categorisation. These are off the table regardless of how locally you run them.',
          '**Documentation as the audit artefact** — the technical file required for high-risk systems is not a one-time deliverable; it is a living document. Tie it to your change-management process so that every model promotion, embedder change, and ACL change is reflected.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The high-risk vs limited-risk line is drawn by the use case, not the technology. The same vector store and the same model can be limited-risk in a research-assistant deployment and high-risk in an HR-screening deployment. Classify per use case, not per platform.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DPIA Requirements',
        content:
          '**A Data Protection Impact Assessment (Article 35) is mandatory for processing likely to result in a high risk to data subjects.** Most regulated local RAG falls in scope. Treat the DPIA as the design document, not a post-hoc compliance artefact.',
        items: [
          '**When mandatory** — systematic and extensive evaluation including profiling with legal effects; large-scale processing of special-category data (health, legal, biometric, racial, political, religious, union); systematic monitoring of public areas. National supervisory authorities publish lists of operations that always require a DPIA — check yours.',
          '**Scope of the DPIA** — purpose and lawful basis; description of the processing operations; necessity and proportionality assessment; risk assessment to data subjects; mitigations and residual risk; consultation with the DPO and (where the residual risk is high) with the supervisory authority before processing begins.',
          '**RAG-specific risks** to address: re-identification of individuals from retrieved chunks; generation of inaccurate information that affects a person; leakage via logs or backups; right-to-be-forgotten deletion completeness; cross-collection contamination; over-broad access for power users.',
          '**Mitigations to document** — the six controls above, plus chunk-level redaction or pseudonymisation where lawful basis is consent or legitimate interest; deletion runbook with rehearsal evidence; access reviews on a stated cadence.',
          '**Reviewers** — the DPO signs off; the supervisory authority is consulted where the residual risk after mitigation remains high. The signed DPIA goes in the technical file alongside the EU AI Act conformity documentation if the system is also high-risk.',
          '**Living document** — re-run the DPIA when the corpus expands materially, when the model or embedder changes, when access boundaries change, or annually as a baseline. Tie this to your change-management process.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A DPIA written in week two of the project is a planning tool. A DPIA written in week ten is a defensive document. The first is much more useful and tends to surface design changes that lower the eventual residual risk. Start the DPIA before the procurement decision, not after the deployment.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'Germany-Specific Notes (Datenschutz)',
        content:
          '**German data-protection practice layers BDSG-Neu, sector-specific rules, and works-council co-determination on top of the GDPR baseline.** A RAG deployment that satisfies generic GDPR can still fail a German review if these are missed.',
        items: [
          '**Works council (Betriebsrat) co-determination** — under §87 BetrVG, any system that monitors employee performance or behaviour requires works-council agreement before deployment. A RAG over employee-authored content (emails, internal docs) typically triggers this. Engage the works council at design time; the agreement (Betriebsvereinbarung) becomes part of the lawful-basis file.',
          '**Sector-specific confidentiality** — §203 StGB criminalises breach of professional confidentiality (lawyers, doctors, tax advisors, auditors). Deploying RAG in a way that exposes protected client data to non-bound staff or external processors can be a criminal offence, not just a civil matter. The on-prem or air-gapped pattern is the safer choice in these sectors.',
          '**Telemediengesetz (TTDSG) and telemetry** — outbound telemetry that touches end-user devices is governed not only by GDPR but also by TTDSG. Air-gap removes the question; egress-controlled deployments must verify that any outbound call is consented, necessary, or strictly technical.',
          '**Transparenzgesetz expectations** — federal and state transparency rules occasionally require disclosure of AI-supported decision-making to data subjects. Even where not strictly required, plain-language disclosure that retrieval is AI-assisted and that the human reviewer remains responsible for the decision is the defensible default.',
          '**Aufsichtsbehörden (state supervisory authorities)** — Datenschutzaufsicht is organised at the state level for the private sector. Reach out to the relevant Landesbeauftragte für Datenschutz where consultation under Article 36 is needed. Position papers from the major Landesbeauftragten on AI tooling are useful inputs to the DPIA.',
          '**Documentation language** — German supervisory authorities accept English documentation, but key user-facing artefacts (privacy notices, transparency disclosures, works-council agreements) should be in German for both legal and practical reasons.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Compliance Checklist Before Go-Live',
        content:
          '**Walk this list end-to-end before any production rollout.** Each item is a real failure mode from a real audit; the list is short on purpose so it actually gets used.',
        items: [
          '☐ **Lawful basis documented** for each category of source data — consent, contract, legal obligation, vital interest, public task, or legitimate interest with a balancing test on file.',
          '☐ **DPIA signed off** by the DPO, with a rehearsed deletion runbook attached.',
          '☐ **Records of processing activities (Article 30)** updated to include the RAG system, the categories of data, retention, recipients, and transfer mechanisms (typically none for local RAG).',
          '☐ **Six controls verified end-to-end**: air-gap or egress allowlist, RBAC, audit logs, encryption, lineage, deletion path.',
          '☐ **Outbound packet capture** clean over a 24-hour soak test; repeated after each application update.',
          '☐ **Identity provider integration** tested with a real user from each access tier; sensitive-collection access requires separate elevation.',
          '☐ **Backups taken and a restore actually tested** on isolated hardware, not just verified in a status panel.',
          '☐ **Right-to-be-forgotten runbook rehearsed** on synthetic data covering source store, vector index, cached embeddings, and retrieval log retention.',
          '☐ **EU AI Act classification** confirmed (limited-risk vs high-risk); technical file in place if high-risk.',
          '☐ **Vendor contracts (if any) reviewed**: DPA Article 28–compliant, sub-processors listed, no-training clause covering customer data.',
          '☐ **Works-council agreement** in place where employee-authored content is in scope (Germany, similar EU rules elsewhere).',
          '☐ **Transparency notice** drafted in user-facing language explaining the AI assistance, the human-in-the-loop, and the data flow.',
          '☐ **Incident-response runbook** updated to include RAG-specific scenarios: index leak, log tampering, deletion failure, model swap with downstream lineage break.',
          '☐ **Quarterly access review** scheduled and assigned; first review on the calendar before go-live.',
          '☐ **Annual DPIA refresh** scheduled and tied to the change-management process.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Mistake 1: Treating "local" as a synonym for "compliant".** Running on-prem solves transfer and processor questions; it does not solve lawful basis, DPIA, audit logging, or data subject rights. Compliance is a layered programme, not a deployment choice.',
          '**Mistake 2: Skipping the DPIA because the system is "just a search tool".** A search tool that ingests special-category data at scale is exactly what Article 35 covers. Skip the DPIA and you skip the audit defence.',
          '**Mistake 3: Logging the query text without checking lawful basis.** Queries themselves are personal data when they reference individuals. Decide at design time whether your purpose-of-processing covers query logging; if not, log the hash and metadata only.',
          '**Mistake 4: Forgetting cached embeddings in the deletion runbook.** Source delete works. Vector index rebuild works. The cache layer your platform added for performance, the embedding fingerprints in the retrieval log, and the answer history in the chat store are the parts that get missed.',
          '**Mistake 5: Allowing power users to bypass collection ACLs.** "Admins can see everything" is convenient and very common; it is also the single biggest reason audits go badly. Privileged access must itself be access-controlled, time-bound, and justified per use.',
          '**Mistake 6: Reusing one workspace for several matters or clients.** Cross-contamination of citations and context is a confidentiality failure even before any external party sees it. One matter or client per collection; separate ACLs; separate retention.',
          '**Mistake 7: Buying air-gap and then plugging in a personal phone for testing.** The air-gap perimeter has to include the people who can carry data across it. Endpoint policy is part of the control, not a separate concern.',
          '**Mistake 8: Treating model and embedder choice as "set and forget".** Each upgrade is a change-management event with DPIA, lineage, and audit-trail implications. Plan for the upgrade workflow before the first production deployment.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[GDPR Full Text (Official)](https://gdpr-info.eu/) — Complete text of the General Data Protection Regulation with article-by-article commentary.',
          '[EU AI Act Full Text](https://artificialintelligenceact.eu/) — Complete regulation text with risk classification framework.',
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — US federal governance framework applicable to AI risk assessment.',
          '[BDSG-Neu (German Federal Data Protection Act)](https://www.gesetze-im-internet.de/bdsg_2018/) — German implementation of GDPR with sector-specific additions.',
          '[EDPB Guidelines on DPIA](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — European Data Protection Board guidance on when and how to conduct DPIAs.',
          '[BfDI (German Federal Commissioner for Data Protection)](https://www.bfdi.bund.de/) — German Federal Commissioner for Data Protection position papers on AI deployment.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does running RAG locally automatically meet GDPR?',
            a: 'No. Local hosting solves the cross-border transfer question and shrinks the processor list, but the GDPR principles in Article 5 (lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity and confidentiality, accountability) still apply. Article 25 (data protection by design and by default), Article 30 (records of processing), Article 32 (security of processing), and Article 35 (DPIA) all attach regardless of where the model runs. Local RAG is a strong starting point, not a finished compliance posture.',
          },
          {
            q: 'What is required for EU AI Act compliance for a local RAG deployment?',
            a: 'Classify the use case as limited-risk or high-risk. Most retrieval-assistant deployments are limited-risk and require transparency obligations: users must know they are interacting with an AI, generated content must be identifiable. The moment retrieval feeds an automated decision in a listed domain (credit, employment, education, public services, law enforcement, migration, justice, biometrics, critical infrastructure), the deployment is high-risk and the full obligations apply: risk management system, data governance, technical documentation, automatic event logging, transparency, human oversight, accuracy and robustness, conformity assessment, and post-market monitoring.',
          },
          {
            q: 'Do I need a DPIA for local RAG?',
            a: 'A DPIA under Article 35 is mandatory for processing likely to result in a high risk to data subjects — which includes large-scale processing of special-category data (health, legal, biometric, racial, political, religious, union) and systematic profiling with legal effects. Most regulated local RAG (legal, medical, financial, HR investigations) falls in scope. Run the DPIA early, treat it as the design document, and rehearse the mitigations — particularly the deletion runbook — before go-live.',
          },
          {
            q: 'Can I share a local RAG deployment across departments?',
            a: 'Yes, with care. Collection-level access control, per-user authentication against a single identity provider, and clear lawful basis for each department\'s use are the floor. The DPIA must cover the broadest set of processing purposes; if any one department needs a different lawful basis (e.g., HR investigations under legitimate interest while clinical staff operate under public-task), separate collections and separate access groups are easier to defend than a single collection with elaborate ACLs.',
          },
          {
            q: 'How do I audit who accessed which document?',
            a: 'Log every retrieval with user ID, timestamp, retrieved chunk IDs, and the document IDs they came from. Forward the events to a separate, write-restricted log store under different administrative control from the application server (separation of duties). Use append-only storage with a hash chain so tampering is detectable. Retention should align with the supervisory authority\'s investigation window and any sector-specific rules — six to seven years is common for regulated industries.',
          },
          {
            q: 'Are open-source embedding models GDPR-safe to use?',
            a: 'In principle yes, with three conditions. First, the weights are downloaded once and pinned to a hash so you can prove what was running. Second, inference is fully local with no telemetry or outbound calls — verify with a packet capture, do not trust documentation alone. Third, the model card and licence are reviewed for any clauses that conflict with confidential business use (some open-weight licences attach restrictions on data types or use cases). The practical default for regulated deployments is to allowlist a small number of vetted embedders and re-review on each upgrade.',
          },
          {
            q: 'What about data lineage for AI-generated outputs?',
            a: 'Every generated answer must reference the chunk IDs that produced it, the model identifier, the prompt template version, and the timestamp. The chunks then resolve back to document IDs, which resolve back to source documents. This chain is what lets you verify the answer, defend it under challenge, honour a deletion request, and reproduce the result later. Without it, "the AI said so" is the audit defence — which is no defence at all.',
          },
          {
            q: 'Can I use local RAG for client confidential documents?',
            a: 'Often yes, sometimes no. Many outside-counsel agreements, M&A NDAs, and patient-data contracts permit AI-assisted review provided the data does not leave a defined boundary and certain controls are met. Local RAG meets the boundary requirement by construction; the contract-specific control list (encryption, access, audit, retention, breach notification) must still be honoured. Where the contract prohibits AI processing entirely, no deployment pattern fixes that — the prohibition applies whether the AI is local or remote.',
          },
          {
            q: 'What logging is required for compliance?',
            a: 'Ingest events (document ID, hash, source, uploader, timestamp, classification), retrieval events (user ID, query metadata or hash, retrieved chunk IDs, answer reference, model/embedder identifier), administrative events (model promotion, embedder change, ACL change, user/group change), and operational events (backup, restore, key rotation). All events forwarded to a separate log store, append-only, hash-chained, and retained per your matter and sector requirements.',
          },
          {
            q: 'How do I handle right-to-be-forgotten requests in RAG?',
            a: 'A documented runbook that walks the deletion through every layer: source document store, vector index, cached embeddings, retrieval log retention (where lawful basis permits deletion of the log entry), and any answers stored in chat history. Source delete is straightforward; the vector index rebuild is well-understood; cached embeddings and answer history are the parts most deployments miss. Rehearse the runbook on synthetic data, document the rehearsal, and tie the runbook to your incident-response process so a real request fires the rehearsed sequence and not improvisation.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Best Local RAG](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — which self-hosted platforms suit each compliance posture, with notes on telemetry and licensing.',
          '[Local AI Agents for Business Workflows and EU Compliance](/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — adjacent compliance topic when retrieval feeds automated workflow steps rather than a human reader.',
          '[Local LLM Email and Calendar Automation](/power-local-llm/local-llm-email-and-calendar-automation) — adjacent business automation patterns where the same control set applies.',
          '[Local RAG on Your PDFs Step by Step](/power-local-llm/local-rag-on-your-pdfs-step-by-step) — practical implementation walkthrough for the on-prem and laptop patterns.',
          '[Chat With 1,000 PDFs Locally](/power-local-llm/chat-with-1000-pdfs-locally) — operational guidance for larger corpora that pushes against the on-prem ceiling.',
          '[Power Local LLM Hub](/power-local-llm) — the full guide library for self-hosted LLM deployments.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-de.png',
    title: 'Lokales RAG für Geschäftsdaten: DSGVO-konforme KI für vertrauliche Dokumente (2026)',
    seoTitle: 'DSGVO-konformes lokales RAG für sensible Dokumente (2026)',
    intro:
      'Juristische, medizinische und finanzielle Teams stehen vor demselben Problem: Genau die Dokumente, die sich am meisten für eine KI-gestützte Suche lohnen, dürfen das Haus nicht verlassen. Dies ist die Architektur, das Kontrollset und die Entscheidungsmatrix für Bereitstellungsmuster eines selbst gehosteten RAG, das den Anforderungen der DSGVO, des EU AI Act, von HIPAA und des deutschen Datenschutzes gerecht wird — geschrieben für Compliance-Verantwortliche, die ein einziges Dokument an ihr IT-Team senden möchten und wollen, dass dieses weiß, was zu bauen ist.',
    metaDescription:
      'DSGVO-konformes lokales RAG für Recht-, Medizin- und Finanzteams. Architektur, Audit-Logging, DSFA-Umfang und 3 Bereitstellungsmuster im Vergleich.',
    twitterDescription:
      'Lokales RAG, das DSGVO und EU AI Act erfüllt. Air-Gap, Audit-Logs, Datenherkunft, DSFA-Umfang und 3 Bereitstellungsmuster — der Artikel, den EU-Compliance-Verantwortliche an die IT senden.',
    audience:
      'Compliance-Verantwortliche, Datenschutzbeauftragte (DSB), Justiziare und IT-Architekten in der EU und im DACH-Raum, die für den Aufbau selbst gehosteter RAG-Systeme über vertrauliche Dokumente verantwortlich sind — Verträge, Patientenakten, Audit-Dateien, M&A-Datenräume, Korrespondenz mit Aufsichtsbehörden.',
    readTime: '15 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'DSGVO-konformes lokales RAG',
    targetKeywords: [
      'dsgvo konformes rag',
      'lokales rag geschäftsdaten',
      'eu ai act rag',
      'privates rag für vertrauliche dokumente',
      'on-premise rag bereitstellung',
      'datenschutz rag',
      'dsfa lokales rag',
    ],
    leadAnswerBlock:
      '**Eine selbst gehostete RAG-Bereitstellung erfüllt die Anforderungen der DSGVO und des EU AI Act nur dann, wenn sechs Kontrollen vom ersten Tag an verankert sind: Air-Gap oder strikt kontrollierter Egress, Authentifizierung pro Nutzer mit rollenbasiertem Dokumentenzugriff, unveränderliche Audit-Logs für Ingest und Retrieval, Ende-zu-Ende-Verschlüsselung im Ruhezustand und bei der Übertragung, deterministische Datenherkunft vom Chunk bis zur Quelle sowie ein schriftlich definierter Löschpfad, der vom Quellsystem über den Vektorindex bis zu zwischengespeicherten Embeddings reicht. Das Bereitstellungsmuster (Einzelnutzer-Laptop, On-Prem-Server, private EU-Cloud) bestimmt, welche Kontrollen leicht umzusetzen sind und welche Aufwand erfordern — nicht, ob die Kontrollen erforderlich sind.**',
    quickAnswerTop: {
      en: {
        question:
          'Ist lokales RAG standardmäßig DSGVO-konform, und welches Bereitstellungsmuster sollten regulierte Teams wählen?',
        answer:
          'Lokales RAG ist standardmäßig nicht DSGVO-konform. Der Betrieb eines Modells On-Premise löst zwar das Problem grenzüberschreitender Datentransfers und reduziert Ihre Liste der Auftragsverarbeiter, doch die Artikel 5, 25, 30, 32 und 35 der DSGVO gelten weiterhin: Rechtsgrundlage, Datenminimierung, Audit-Logging, Sicherheit der Verarbeitung sowie eine Datenschutz-Folgenabschätzung (DSFA) für jedes System, das besondere Kategorien personenbezogener Daten in größerem Umfang verarbeitet. Wählen Sie eine Einzelnutzer-Laptop-Bereitstellung für Einzelpersonen und einmalige Mandatsprüfungen; einen On-Prem-Server für abteilungsweite Wissensbasen mit bis zu wenigen tausend Dokumenten und 5–50 Nutzern; eine private EU-Cloud (souveräne Cloud, kundenseitig verwaltete Schlüssel, ausschließlich EU-Region) für abteilungs- oder unternehmensübergreifende Bereitstellungen, bei denen multiregionale Ausfallsicherheit wichtiger ist als ein vollständiger Air-Gap. Welches Muster Sie auch wählen — die sechs Kontrollen oben sind dieselben; nur die Implementierungskosten verschieben sich.',
        bullets: [
          'Lokales Hosting löst grenzüberschreitende Übermittlungen (Art. 44–49) und reduziert die Liste der Auftragsverarbeiter — es löst weder die Frage der Rechtsgrundlage noch die DSFA noch die Betroffenenrechte für sich genommen.',
          'Einzelnutzer-Laptop — am besten geeignet für einzelne Anwältinnen, Ärzte, Prüferinnen und einmalige Mandatsprüfungen. Schwer zu auditieren bei Skalierung; einfachster Air-Gap.',
          'On-Prem-Server — am besten geeignet für Abteilungsbereitstellungen mit 5–50 Nutzern. Echte Audit-Logs, RBAC, Backup und Disaster Recovery. Höchster IT-Aufwand.',
          'Private EU-Cloud — am besten geeignet für unternehmensübergreifende Bereitstellungen mit Anforderungen an Ausfallsicherheit. Souveräne Region + kundenseitig verwaltete Schlüssel + Klauseln, die KI-Training auf Kundendaten ausschließen, sind erforderlich.',
          'Eine DSFA ist gemäß Artikel 35 verpflichtend, wenn besondere Kategorien personenbezogener Daten in größerem Umfang verarbeitet werden — unabhängig vom Bereitstellungsmuster.',
          'Anträge auf Recht auf Vergessenwerden müssen sich auf Quelldokumente, Vektorindizes und zwischengespeicherte Embeddings auswirken — gestalten Sie den Löschpfad vor dem Go-Live, nicht erst nach dem ersten eingegangenen Antrag.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Schnellfakten', anchor: '#quick-facts' },
      { label: 'Vergleich der Bereitstellungsmuster', anchor: '#deployment-comparison' },
      { label: 'Auswahl eines Bereitstellungsmusters', anchor: '#which-deployment' },
      { label: 'Warum lokales RAG für sensible Daten', anchor: '#why-local-rag' },
      { label: 'Die sechs unverzichtbaren Kontrollen', anchor: '#required-controls' },
      { label: 'Air-Gap und Egress-Kontrolle', anchor: '#air-gap' },
      { label: 'Audit-Logging, das einer Prüfung standhält', anchor: '#audit-logging' },
      { label: 'Datenherkunft vom Chunk bis zur Quelle', anchor: '#data-lineage' },
      { label: 'Verschlüsselung und Zugriffskontrolle', anchor: '#encryption-access' },
      { label: 'Einzelnutzer-Laptop-Muster', anchor: '#laptop-pattern' },
      { label: 'On-Prem-Server-Muster', anchor: '#on-prem-pattern' },
      { label: 'Vektordatenbank-Optionen', anchor: '#vector-db-comparison' },
      { label: 'Privates EU-Cloud-Muster', anchor: '#private-cloud-pattern' },
      { label: 'Einstufung nach EU AI Act', anchor: '#eu-ai-act' },
      { label: 'DSFA-Anforderungen', anchor: '#dpia-requirements' },
      { label: 'Deutschlandspezifische Hinweise (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Compliance-Checkliste', anchor: '#compliance-checklist' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Lokales Hosting ist notwendig, aber nicht ausreichend.** Der Betrieb des Modells und des Vektorspeichers auf eigener Hardware löst grenzüberschreitende Datentransfers und reduziert die Liste der Auftragsverarbeiter, doch die Artikel 5, 25, 30, 32 und 35 der DSGVO gelten weiterhin. Rechtsgrundlage, Datenminimierung, Audit-Logging, Sicherheit der Verarbeitung und Datenschutz-Folgenabschätzungen werden nicht optional, nur weil die Daten im Haus bleiben.',
          '**Sechs Kontrollen sind nicht verhandelbar** — unabhängig vom Bereitstellungsmuster: Air-Gap oder strikte Egress-Kontrolle, Authentifizierung pro Nutzer mit rollenbasiertem Zugriff, unveränderliche Audit-Logs, Verschlüsselung im Ruhezustand und bei der Übertragung, deterministische Datenherkunft vom Chunk zurück zum Quelldokument sowie ein schriftlich definierter Löschpfad, der den Vektorindex und alle zwischengespeicherten Embeddings einschließt.',
          '**Drei Bereitstellungsmuster decken die meisten regulierten Anwendungsfälle ab.** Einzelnutzer-Laptop für Einzelpersonen und Mandatsprüfungen; On-Prem-Server für abteilungsweite Wissensbasen mit 5–50 Nutzern; private EU-Cloud (souveräne Region, kundenseitig verwaltete Schlüssel) für unternehmensübergreifende Bereitstellungen, bei denen Ausfallsicherheit wichtiger ist als ein vollständiger Air-Gap.',
          '**Der EU AI Act stuft die meisten lokalen RAG-Systeme als System mit begrenztem Risiko ein** — sobald jedoch ein Retrieval eine automatisierte Entscheidung speist (Bonitätsbewertung, Bewerberauswahl, Anspruch auf Sozialleistungen), rutscht die Bereitstellung ins Hochrisikosegment und löst die vollständige Konformitätsbewertung, die Marktbeobachtung nach Inverkehrbringen und die Pflichten zur menschlichen Aufsicht aus.',
          '**Eine DSFA ist nach Artikel 35 verpflichtend** für jedes RAG, das besondere Kategorien personenbezogener Daten (Gesundheit, Recht, biometrische, politische, gewerkschaftliche Daten) in größerem Umfang verarbeitet, oder für jedes System, das automatisierte Entscheidungen mit Rechtswirkung erzeugt. Wer die DSFA überspringt, überspringt zugleich die Verteidigungslinie im Audit.',
          '**Das Recht auf Vergessenwerden ist der Löschtest, an dem die meisten Bereitstellungen scheitern.** Quelldokumente sind einfach. Vektorindizes lassen sich neu aufbauen. Zwischengespeicherte Embeddings, Retrieval-Logs und alle in der Chat-Historie gespeicherten Antworten sind die Teile, die übersehen werden — und genau die Teile, nach denen eine Aufsichtsbehörde fragen wird.',
          '**Open-Source-Embedding-Modelle sind grundsätzlich DSGVO-konform**, aber nur unter drei Bedingungen: (a) die Modellgewichte werden einmal heruntergeladen und auf einen Hash fixiert, (b) die Inferenz läuft vollständig auf lokaler Hardware ohne Telemetrie, und (c) die Model Card und die Lizenz werden auf Klauseln geprüft, die der vertraulichen geschäftlichen Nutzung widersprechen.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellfakten',
        items: [
          '**6 verpflichtende Kontrollen** für jedes regulierte RAG: Air-Gap, RBAC, Audit-Logs, Verschlüsselung, Datenherkunft, Löschpfad.',
          '**3 Bereitstellungsmuster:** Einzelnutzer-Laptop (Einzelpersonen), On-Prem-Server (5–50 Nutzer), private EU-Cloud (unternehmensübergreifend).',
          '**Eine DSFA ist verpflichtend** nach Artikel 35, wenn besondere Kategorien personenbezogener Daten (Gesundheit, Recht, biometrische Daten) in größerem Umfang verarbeitet werden.',
          '**EU AI Act:** Die meisten lokalen RAG-Systeme = begrenztes Risiko; Hochrisiko, sobald Retrieval automatisierte Entscheidungen speist (Kredit, Beschäftigung, Sozialleistungen).',
          '**Recht auf Vergessenwerden** muss sich auf Quelldokumente, Vektorindizes, zwischengespeicherte Embeddings UND die Antwort-Historie auswirken.',
          '**Mitbestimmung des Betriebsrats** nach §87 BetrVG erforderlich für jedes RAG über mitarbeiterbezogene Inhalte in Deutschland.',
          '**Open-Source-Embedding-Modelle** sind nur DSGVO-konform, wenn die Gewichte fixiert sind, die Inferenz vollständig lokal läuft und die Lizenz geprüft wurde.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Vergleich der Bereitstellungsmuster',
        content:
          'Jedes Muster lässt sich DSGVO-konform betreiben; was sich ändert, sind die Kosten der Kontrollen und die Bruchstellen, wenn etwas schiefgeht. Wählen Sie das einfachste Muster, das zu Nutzerzahl, Dokumentensensibilität und Anforderungen an die Ausfallsicherheit passt.',
        columns: ['Kontrolle', 'Einzelnutzer-Laptop', 'On-Prem-Server', 'Private EU-Cloud'],
        rows: [
          {
            'Kontrolle': 'Air-Gap (kein ausgehendes Netzwerk)',
            'Einzelnutzer-Laptop': 'Trivial — Netzwerk deaktivieren',
            'On-Prem-Server': 'Erreichbar — VLAN + Firewall',
            'Private EU-Cloud': 'Schwer — nur Egress-Allowlist',
          },
          {
            'Kontrolle': 'Audit-Log (wer, was, wann)',
            'Einzelnutzer-Laptop': 'Manuell — nur OS-Ebene',
            'On-Prem-Server': 'Stark — zentrale Log-Pipeline',
            'Private EU-Cloud': 'Stark — Cloud-natives Logging',
          },
          {
            'Kontrolle': 'Datenherkunft (Chunk → Quelle)',
            'Einzelnutzer-Laptop': 'Nur lokale Dateien',
            'On-Prem-Server': 'Vollständig nachvollziehbar',
            'Private EU-Cloud': 'Vollständig — über Regionen hinweg',
          },
          {
            'Kontrolle': 'EU-Datenresidenz',
            'Einzelnutzer-Laptop': 'Inhärent — physischer Standort',
            'On-Prem-Server': 'Inhärent — physischer Standort',
            'Private EU-Cloud': 'Konfiguriert — souveräne Region erforderlich',
          },
          {
            'Kontrolle': 'RBAC pro Nutzer',
            'Einzelnutzer-Laptop': 'Einzelnutzer — n. v.',
            'On-Prem-Server': 'Identitätsanbieter + Gruppen',
            'Private EU-Cloud': 'IAM + SSO + ACLs pro Sammlung',
          },
          {
            'Kontrolle': 'Backup und Disaster Recovery',
            'Einzelnutzer-Laptop': 'Verschlüsselte externe Festplatte',
            'On-Prem-Server': 'Bandsicherung oder externes Backup',
            'Private EU-Cloud': 'Cross-AZ-Replikation',
          },
          {
            'Kontrolle': 'Anschaffungskosten',
            'Einzelnutzer-Laptop': 'Nur Hardware — niedrig',
            'On-Prem-Server': 'Server + Integration — mittel',
            'Private EU-Cloud': 'Abonnement + Setup — mittel',
          },
          {
            'Kontrolle': 'Laufende Kosten',
            'Einzelnutzer-Laptop': 'Keine — Sysadmin-Zeit',
            'On-Prem-Server': 'IT-Betrieb + Strom + Kühlung',
            'Private EU-Cloud': 'Monatlich wiederkehrend',
          },
          {
            'Kontrolle': 'Am besten geeignet für',
            'Einzelnutzer-Laptop': 'Einzelpersonen, Mandatsprüfungen',
            'On-Prem-Server': '5–50 Nutzer, abteilungsweite Wissensbasen',
            'Private EU-Cloud': 'Unternehmensübergreifende, ausfallsichere Bereitstellungen',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Auswahl eines Bereitstellungsmusters',
        content:
          '**Die richtige Wahl hängt von Nutzerzahl, Dokumentensensibilität, Audit-Druck und Ihrer internen IT-Kapazität ab.** Diese Entscheidungshilfe deckt die meisten realen Situationen ab.',
        columns: ['Ihre Situation', 'Empfehlung'],
        rows: [
          {
            'Ihre Situation': 'Einzelne Anwältin, Arzt oder Prüferin, die ein Mandat nach dem anderen prüft',
            'Empfehlung': 'Einzelnutzer-Laptop',
          },
          {
            'Ihre Situation': 'M&A-Datenraum mit 3–5 namentlich benannten Prüfern und festem Enddatum',
            'Empfehlung': 'Einzelnutzer-Laptop oder On-Prem (je nach Dokumentenvolumen)',
          },
          {
            'Ihre Situation': 'Compliance-Team aus 10–30 Personen, das ein Archiv mit Aufsichtsbehörden-Korrespondenz teilt',
            'Empfehlung': 'On-Prem-Server',
          },
          {
            'Ihre Situation': 'Krankenhausabteilung baut einen Assistenten für klinische Leitlinien für 50 Mitarbeitende',
            'Empfehlung': 'On-Prem-Server',
          },
          {
            'Ihre Situation': 'Konzern mit mehreren Tochtergesellschaften benötigt ein RAG über Tochtergesellschaften in mehreren EU-Ländern hinweg',
            'Empfehlung': 'Private EU-Cloud (souveräne Region + kundenseitig verwaltete Schlüssel)',
          },
          {
            'Ihre Situation': 'Versicherer mit 24/7-Verfügbarkeitsanforderung und DR-Plan',
            'Empfehlung': 'Private EU-Cloud',
          },
          {
            'Ihre Situation': 'Behörde mit Verschlusssachen oder eingeschränkten Daten',
            'Empfehlung': 'Ausschließlich Air-Gapped On-Prem — Cloud kommt nicht in Frage',
          },
          {
            'Ihre Situation': 'Aufsichtsbehörden-Audit-Verteidigung in unter 6 Wochen fällig',
            'Empfehlung': 'On-Prem-Server (am schnellsten, um Kontrolle nachzuweisen)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Warum lokales RAG für sensible Daten',
        content:
          '**Das Argument für lokales RAG gegenüber Cloud-LLM-as-a-Service ist keine Ideologie — es ist die Form der DSGVO-Risikobewertung.** Cloud-RAG ist für viele Anwendungsfälle praktikabel; bei sensiblen Geschäftsdaten fügt es jedoch fünf Risiken hinzu, die lokales RAG bauartbedingt eliminiert.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Lokales RAG hält Ihre sensiblen Dokumente auf eigener Hardware, ermöglicht Ihrem Team aber dennoch eine KI-gestützte Suche — keine Daten verlassen das Haus, kein Drittanbieter-Auftragsverarbeiter berührt sie, und Fragen zur grenzüberschreitenden Übermittlung stellen sich nicht.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich vor, Ihr Rechtsteam könnte 10.000 Fallakten in natürlicher Sprache durchsuchen — und die Dokumente verlassen niemals den Serverraum. Genau das ist lokales RAG: Die KI liest Ihre Dokumente auf Ihrer Hardware, beantwortet Ihre Fragen auf Ihrer Hardware, und nichts wird irgendwohin gesendet. Der Compliance-Vorteil ist kein Feature — er ist die Architektur.',
          },
        ],
        items: [
          '**Grenzüberschreitende Übermittlung (Art. 44–49).** Die Übermittlung personenbezogener Daten an einen Auftragsverarbeiter außerhalb der EU erfordert Standardvertragsklauseln, eine Transfer-Folgenabschätzung und eine belastbare Antwort darauf, ob die empfangende Jurisdiktion Zugriffsrechte auf diese Daten hat. Lokales RAG übermittelt keine Daten — die Frage stellt sich nicht.',
          '**Wildwuchs an Unterauftragsverarbeitern (Art. 28).** Cloud-LLM-Anbieter stützen sich typischerweise auf Hyperscaler-Infrastruktur, Content-Moderationsdienste und Observability-Anbieter. Jeder davon ist ein Unterauftragsverarbeiter, der gelistet, vertraglich gebunden und auditiert werden muss. Lokales RAG hat standardmäßig null Unterauftragsverarbeiter.',
          '**Leakage von Trainingsdaten.** Viele Cloud-LLM-AGB behalten sich das Recht vor, Kunden-Prompts zur Modellverbesserung zu nutzen, sofern keine kostenpflichtige Enterprise-Stufe gewählt und die No-Training-Klausel verifiziert ist. Lokales RAG nutzt Modelle mit Gewichten, die Sie kontrollieren; nichts verlässt den Host.',
          '**Vertraulichkeitsklauseln in Mandantenverträgen.** Außenanwaltsvereinbarungen, M&A-NDAs und Patientendatenverträge untersagen häufig die Übermittlung des geschützten Materials an Drittanbieter-Auftragsverarbeiter. Lokales RAG umgeht die Klausel vollständig.',
          '**Behördliche und prozessuale Zugriffe.** Dokumente bei einem Cloud-Anbieter können durch ein Auskunftsersuchen an den Anbieter erzwungen werden — mit Offenlegungspflichten, von denen der Verantwortliche möglicherweise nicht rechtzeitig erfährt. Dokumente, die Ihre Räumlichkeiten nicht verlassen, können nur Ihnen gegenüber erzwungen werden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Lokales RAG ist nicht für jede Workload die richtige Antwort. Recherche zu öffentlich verfügbaren Informationen, Marketing-Entwurfsgenerierung, Code-Assistenz für Open-Source-Repositories — all das funktioniert in der Regel besser mit Cloud-LLMs, weil das DSGVO-Risiko gering ist und die Modellqualitätslücke ins Gewicht fällt. Das Argument in diesem Artikel zielt speziell auf vertrauliche Geschäftsdaten ab: Recht, Medizin, Finanzen, Personalwesen, Korrespondenz mit Aufsichtsbehörden und Geschäftsgeheimnisse.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'Die sechs unverzichtbaren Kontrollen',
        content:
          '**Diese sechs Kontrollen sind das Fundament.** Jede regulierte Bereitstellung benötigt alle sechs; das Bereitstellungsmuster ändert nur, wie Sie sie umsetzen. Das Auslassen einer einzelnen Kontrolle ist der häufigste Grund dafür, dass Audits schlecht ausgehen.',
        numberedItems: [
          {
            title: 'Air-Gap oder strikte Egress-Kontrolle',
            whyItMatters:
              'Bestätigt, dass Dokumente und Embeddings nicht über ausgehende Verbindungen abfließen können — Telemetrie-SDKs, Modell-Update-Probes, Crash-Reporter, Content-Moderations-Callbacks, Drittanbieter-CDNs für Schriften. Deaktivieren Sie entweder den Netzzugriff vollständig (echter Air-Gap) oder betreiben Sie eine Egress-Allowlist, die ausschließlich signierte Update-Server zulässt.',
          },
          {
            title: 'Authentifizierung pro Nutzer mit rollenbasiertem Zugriff',
            whyItMatters:
              'Sie müssen die Frage „Wer hat auf welches Dokument zugegriffen?" beantworten können, bevor eine Aufsichtsbehörde sie stellt. Single Sign-On gegen einen Identitätsanbieter, gruppenbasierter Zugriff auf Sammlungen und ACLs auf Dokumentenebene, wo das Mandat es erfordert. Geteilte Konten sind keine Kontrolle — sie sind ein Audit-Versagen, das nur auf seinen Tag wartet.',
          },
          {
            title: 'Unveränderliche Audit-Logs für Ingest und Retrieval',
            whyItMatters:
              'Für jedes Dokument: wer es hochgeladen hat, wann, Quellpfad, Hash. Für jede Anfrage: wer gefragt hat, was gefragt wurde (sofern das Logging es zulässt), welche Chunks abgerufen wurden, aus welchen Dokument-IDs sie stammen, welche Antwort zurückgegeben wurde. Logs müssen manipulationssicher sein — append-only, signiert, mit einer Aufbewahrungsdauer, die das Untersuchungsfenster der Aufsichtsbehörde abdeckt. Für den prompt-bezogenen Audit-Trail — Versionierung, Änderungsprotokolle und Rollback — siehe [Workflows zur Versionskontrolle von Prompts](/de/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'Verschlüsselung im Ruhezustand und bei der Übertragung',
            whyItMatters:
              'Festplattenverschlüsselung auf dem Host, TLS für jeden internen Service-zu-Service-Aufruf und ein Schlüsselmanagement, das einen gestohlenen Laptop oder ein kompromittiertes Admin-Konto übersteht. Kundenseitig verwaltete Schlüssel für Cloud-Bereitstellungen. Ohne diese Maßnahmen wird ein Gerätediebstahl zu einer meldepflichtigen Datenschutzverletzung nach Artikel 33.',
          },
          {
            title: 'Deterministische Datenherkunft vom Chunk bis zur Quelle',
            whyItMatters:
              'Jeder abgerufene Chunk muss auf sein Quelldokument, seine Seite, seinen Abschnitt und seine Version zurückführbar sein. Genau das erlaubt Ihnen (a) die Antwort zu verifizieren, (b) einen Löschantrag zu erfüllen, (c) das System vor Gericht zu verteidigen, wenn eine generierte Zusammenfassung infrage gestellt wird. „Wir können nicht reproduzieren, welcher Chunk welche Antwort erzeugt hat" ist keine akzeptable Antwort gegenüber einer Aufsichtsbehörde.',
          },
          {
            title: 'Schriftlich definierter Löschpfad inklusive Vektorindex und zwischengespeicherten Embeddings',
            whyItMatters:
              'Ein Antrag auf Recht auf Vergessenwerden muss vom Quellsystem über den Vektorindex bis hin zu zwischengespeicherten Embeddings und der Aufbewahrung von Retrieval-Logs propagieren. Die meisten Bereitstellungen erledigen die Quelllöschung sauber und vergessen den Rest. Dokumentieren Sie das Löschrunbook vor dem Go-Live; üben Sie es mit synthetischen Daten.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-Gap und Egress-Kontrolle',
        content:
          '**Air-Gap bedeutet, dass der Host keine ausgehende Netzwerkverbindung hat; Egress-Kontrolle bedeutet, dass er eine eng allowlistete Verbindung hat.** Beides ist akzeptabel; wählen Sie das stärkste Modell, das Ihr Betrieb tragen kann.',
        items: [
          '**Echter Air-Gap** — kein DHCP, keine DNS-Auflösung zu öffentlichen Zielen, kein ausgehendes TCP. Updates erfolgen über signierte Datenträger, die ein Administrator physisch anschließt. Das ist das richtige Modell für Verschlusssachen, bestimmte Krankenhausnetzwerke und jede Bereitstellung, deren Bedrohungsmodell eine bösartige Abhängigkeit einschließt.',
          '**Egress-Allowlist** — ausgehende Netzwerkverbindungen sind nur zu einer kleinen Liste benannter Ziele erlaubt (Modell-Update-Server, Identitätsanbieter, Log-Forwarder zu internen Sammlern). Aller andere Verkehr wird an der Firewall verworfen. Das ist die praktikable Standardlösung für die meisten regulierten Abteilungsbereitstellungen.',
          '**Worauf bei der Plattform zu achten ist**: null Telemetrie standardmäßig, keine ausgehenden Aufrufe während der Inferenz, keine Schriften-CDNs in der UI, keine Crash-Reporter, die Payloads versenden. Verifizieren Sie es mit einem Paketmitschnitt oder einem Tool wie Little Snitch auf dem Testbench, bevor Sie in die Produktion überführen.',
          '**Update-Governance** — Modellgewichte, Embedder-Gewichte, Anwendungscode und OS-Patches durchlaufen alle ein kontrolliertes Update-Fenster. Der Administrator, der ein Update freigibt, zeichnet schriftlich ab; die Änderung wird protokolliert.',
          '**Häufiger Air-Gap-Bruch:** ein Analytics-SDK, das mit einer Drittanbieter-UI-Komponente gebündelt ist, eine Schrift-CDN-Referenz im Anwendungs-Chrome oder eine „Auf Updates prüfen"-Probe, die beim Start läuft. Genau deshalb ist der Verifikationsschritt wichtig — verlassen Sie sich auf nichts, was als Standard ausgeliefert wird.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Führen Sie einen 24-stündigen Paketmitschnitt auf dem Host durch, während die Anwendung geöffnet und im Leerlauf ist. Alles Ausgehende, das nicht auf der Allowlist steht, ist ein Befund. Wiederholen Sie dies bei jedem Anwendungsupdate — Release Notes unterschätzen routinemäßig, welche neuen ausgehenden Aufrufe hinzugekommen sind.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'Audit-Logging, das einer Prüfung standhält',
        content:
          '**Das Audit-Log ist das Artefakt, das eine Aufsichtsbehörde zuerst lesen wird.** Es muss zwei Fragen für jeden Retrieval beantworten: Wer hat gefragt, und was hat das System geliefert? Ohne diese Antworten argumentieren Sie mit Worten; mit ordentlichem Logging legen Sie Belege vor.',
        items: [
          '**Ingest-Ereignisse**: Dokument-ID, Hash (SHA-256), Dateiname, Quellpfad, hochgeladen von, Zeitstempel, Klassifizierungs-Tag, Größe, Seitenzahl, Eigentümergruppe, Aufbewahrungsklasse. Klassifizieren Sie jedes Dokument bei der Aufnahme — eine nachträgliche Klassifizierung großer Korpora ist mühsam und selten vollständig.',
          '**Retrieval-Ereignisse**: Anfrage-ID, Nutzer-ID, Zeitstempel, abgerufene Chunk-IDs (und die Dokument-IDs, aus denen sie stammen), Retrieval-Scores, Hash der finalen Antwort, Modell-Identifikator, Embedder-Identifikator, verwendetes Top-K. Der Anfragetext selbst ist sensibel — protokollieren Sie ihn nur, wenn Ihre Verarbeitungszwecke es abdecken; andernfalls protokollieren Sie nur Hash und Zeitstempel.',
          '**Administrative Ereignisse**: Modellfreigabe, Embedder-Wechsel, Index-Neuaufbau, Nutzer-/Gruppenänderungen, ACL-Änderungen, Änderungen der Zugriffsrichtlinien. Jedes Ereignis ist von dem zuständigen Administrator signiert.',
          '**Manipulationssicherheit**: append-only-Log, Hash-Kette (jeder Eintrag verweist auf den Hash des vorherigen Eintrags), Out-of-Band-Signaturschlüssel, regelmäßige Abgleiche mit einer separaten Kopie, die von einem anderen Administrator oder auf einem WORM-Medium gehalten wird.',
          '**Aufbewahrung**: orientiert sich am Untersuchungsfenster der Aufsichtsbehörde — mindestens an der Aufbewahrungsfrist des Mandats; in regulierten Branchen üblicherweise sechs bis sieben Jahre; länger, wo Branchenregeln gelten.',
          '**Pipeline**: Die Anwendung emittiert strukturierte Ereignisse; ein Forwarder transportiert sie zu einem separaten, schreibgeschützten Logspeicher. Der Anwendungsserver darf niemals die Berechtigung haben, Log-Einträge zu löschen oder zu überschreiben — die Funktionstrennung ist es, die das Log glaubwürdig macht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das Logging des Anfragetexts wirft eine eigene DSGVO-Frage auf — eine Anfrage kann selbst personenbezogene Daten enthalten (z. B. „Fasse die Krankengeschichte von Patient X zusammen"). Entscheiden Sie zur Designzeit, ob Ihre Verarbeitungszwecke das Logging von Anfragen abdecken; falls nicht, protokollieren Sie ausschließlich die für Audit und Betriebsdiagnose erforderlichen Metadaten.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Datenherkunft vom Chunk bis zur Quelle',
        content:
          '**Datenherkunft ist das Rückgrat jeder anderen Kontrolle.** Ohne sie scheitern Löschanträge, ist Antwortverifikation unmöglich, und der Audit-Trail bricht zusammen. Bauen Sie Datenherkunft vom ersten Ingest an ein, nicht nachträglich.',
        items: [
          '**Datenherkunft auf Dokumentenebene**: Jedes Dokument hat eine stabile interne ID, einen Inhalts-Hash, einen Ingest-Zeitstempel, einen Eigentümer, eine Klassifizierung und eine Aufbewahrungsklasse. Die Originaldatei verbleibt im Quellsystem; das RAG-System hält eine Referenz, nicht das Original.',
          '**Datenherkunft auf Chunk-Ebene**: Jeder Chunk verweist auf seine übergeordnete Dokument-ID, Seite (bei PDFs), Abschnitt (bei strukturierten Dokumenten), Zeichen-Offset, Länge und Version der Chunking-Strategie. Wenn Sie neu chunkten (Sie werden), werden alte Chunks tombstoned, nicht in-place gelöscht — damit alte Retrieval-Logs weiterhin auflösbar bleiben.',
          '**Datenherkunft auf Embedding-Ebene**: Jeder Embedding-Vektor verweist auf seine Chunk-ID und seinen Embedder-Identifikator. Wenn Sie Embedder wechseln, werden die alten Vektoren behalten, bis die neuen validiert sind und alle Mandate, die sie referenzierten, abgeschlossen wurden; erst dann werden sie gelöscht.',
          '**Datenherkunft auf Antwortebene**: Jede generierte Antwort verweist auf die Chunk-IDs, die sie hervorgebracht haben, den Modell-Identifikator, die Version der Prompt-Vorlage und den Zeitstempel. Wenn ein Nutzer fragt „Woher stammt diese Antwort?", löst das System Chunk → Dokument → Seite mit einem Klick auf.',
          '**Re-Indexierung ohne Bruch der Datenherkunft**: Neuaufbauten erhalten Dokument-IDs und erhöhen die Versionen der Chunking-Strategie. Alte Chunk-IDs bleiben in Retrieval-Logs auflösbar, auch nachdem der Live-Index weitergezogen ist.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Testen Sie die Datenherkunftskette quartalsweise. Wählen Sie zufällig ein Retrieval aus dem Audit-Log und gehen Sie es rückwärts durch: Chunk-ID → Dokument-ID → Originaldatei im Quellsystem → Aufbewahrungsklasse. Wenn ein Schritt unterbrochen ist, beheben Sie das Schema vor der nächsten Aufsichtsprüfung — nicht währenddessen.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'Verschlüsselung und Zugriffskontrolle',
        content:
          '**Verschlüsselung im Ruhezustand, Verschlüsselung bei der Übertragung und Zugriffskontrolle, die auf Ihren bestehenden Identitätsanbieter abbildet.** Das sind gut verstandene Kontrollen; das Versagen besteht meist nicht in schlechter Umsetzung, sondern darin, eine der drei Schichten zu vergessen.',
        items: [
          '**Verschlüsselung im Ruhezustand** — Vollverschlüsselung der Festplatte auf dem Host (LUKS unter Linux, BitLocker unter Windows, FileVault unter macOS für Laptops). Bei Servern verschlüsseln Sie zusätzlich die Partitionen, die den Vektorspeicher und den Ingest-Staging-Bereich enthalten. Kundenseitig verwaltete Schlüssel für jede Cloud-Bereitstellung, mit Schlüsselrotation gemäß Ihrer Richtlinie.',
          '**Verschlüsselung bei der Übertragung** — TLS für jeden Service-zu-Service-Hop, auch auf localhost. Cipher-Richtlinie ausgerichtet an Ihrer Branchen-Baseline. Mutual TLS, wo das Bedrohungsmodell es rechtfertigt — typischerweise Server-zu-Server in Cloud-Bereitstellungen.',
          '**Authentifizierung** — Single Sign-On gegen Ihren bestehenden Identitätsanbieter (OIDC, SAML). Keine lokalen Konten in der Produktion. MFA für jeden Nutzer mit administrativem oder sensiblem Sammlungszugriff durchgesetzt.',
          '**Autorisierung** — gruppenbasierter Zugriff auf Sammlungsebene; ACLs auf Dokumentenebene, wo das Mandat es erfordert (z. B. M&A-Datenräume, arbeitsrechtliche Untersuchungen). Die Retrieval-Pipeline muss ACLs zur Anfragezeit durchsetzen — nicht erst die UI. Ein Nutzer, der ein Dokument nicht sehen darf, darf auch dessen Chunks nicht zurückgegeben bekommen.',
          '**Administrativer Zugriff** — Privileged Access Management für jedes Konto, das Indizes lesen oder neu aufbauen, Audit-Logs einsehen oder ACLs ändern kann. Just-in-Time-Erhöhung mit protokollierter Begründung schlägt dauerhafte Admin-Rechte.',
          '**Endpunkt-Sicherheit** — verwaltete Geräte für Laptop-Bereitstellungen (MDM-eingebunden, verschlüsselt, durchgesetzte Bildschirmsperre). Ein Solo-Profi-Laptop mit entschlüsseltem Dokumentenspeicher, der unbeaufsichtigt im Café liegt, ist die Datenschutzverletzung, die Sie nicht melden möchten.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Einzelnutzer-Laptop-Muster',
        content:
          '**Der Einzelnutzer-Laptop ist das Muster, das sich am einfachsten air-gappen und am schwersten skalieren lässt.** Richtig für Einzelpersonen und einmalige Mandatsprüfungen; falsch für alles, was einen einzelnen Nutzer überdauern oder dessen Ausscheiden überstehen muss.',
        items: [
          '**Hardware** — ein Workstation-Laptop mit Vollverschlüsselung der Festplatte, einer dedizierten GPU (oder einer aktuellen Unified-Memory-Maschine) und mindestens 32 GB RAM. Modell und Embedder müssen neben dem Vektorspeicher-Cache in den Speicher passen. Hardwareanforderungen und Modellauswahl nach VRAM finden Sie im [Hardware-Leitfaden für lokale LLMs](/de/local-llms/local-llm-hardware-guide-2026).',
          '**Software** — eine in sich geschlossene Desktop-RAG-Anwendung, die lokal läuft; ein Open-Source-LLM mit einmal heruntergeladenen und auf einen Hash fixierten Gewichten; ein Open-Source-Embedder; ein lokaler Vektorspeicher auf der verschlüsselten Festplatte. Einen Vergleich von Open-Source-Modellen, die für lokales RAG geeignet sind, finden Sie unter [Top-Open-Source-Modelle für Ollama](/de/local-llms/top-open-source-models-ollama).',
          '**Netzwerk-Posture** — air-gapped während der Arbeit; nur für ausdrücklich signierte Updates wieder verbunden. Konfigurieren Sie die OS-Firewall so, dass sie standardmäßig alle ausgehenden Verbindungen verwirft, und legen Sie explizite Ausnahmen für den Update-Workflow an.',
          '**Dokumentenhandhabung** — Quelldokumente auf der verschlüsselten Festplatte; eine separate Mandatsstruktur pro Mandat; wöchentliche verschlüsselte Backups auf einer externen Festplatte, die an einem anderen Ort gelagert wird.',
          '**Audit-Posture** — Das OS-seitige Audit-Log (Login, Dateizugriff, Peripherieereignisse) ist die Grundlage. Anwendungsbezogene Ereignisse sind im On-Prem-Server-Muster einfacher; für das Laptop-Muster behandeln Sie das OS-Log als primären Nachweis und ergänzen Sie es mit manuellen Notizen pro Mandat.',
          '**Grenzen** — Ein Einzelnutzer-Laptop ist keine Mehrnutzer-Plattform. Den Laptop zu teilen, Konten zu teilen oder den Dokumentenspeicher auf den Rechner einer Kollegin zu kopieren bricht die Audit-Posture und die Bewertung der Rechtsgrundlage.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Einzelpersonen, die vertrauliche Mandate bearbeiten, ist das Einzelnutzer-Laptop-Muster die wirklich stärkste verfügbare Datenschutz-Posture — besser als jede Cloud und stärker als viele On-Prem-Bereitstellungen. Der Trade-off ist operativ: Wenn der Laptop ausfällt, erbt das Mandat die Wiederherstellungszeit Ihrer Backup-Disziplin.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'On-Prem-Server-Muster',
        content:
          '**Der On-Prem-Server ist das Arbeitspferd-Muster für reguliertes abteilungsweites RAG.** Es skaliert auf 5–50 Nutzer und wenige tausend Dokumente, unterstützt ordentliches Audit-Logging und bleibt innerhalb Ihres physischen Perimeters. Der Preis ist reale IT-Betriebsarbeit.',
        items: [
          '**Hardware** — ein Server mit ein bis zwei Enterprise-GPUs (Workstation-GPUs sind für kleinere Korpora akzeptabel), redundanten Festplatten, ECC-Speicher und einer USV. Planen Sie das 2- bis 4-fache des Speichers Ihres Roh-Dokumentenkorpus ein, um Vektoren, Indizes, Logs und Backups abzudecken.',
          '**Netzwerk** — ein dediziertes VLAN hinter der Unternehmens-Firewall; Egress-Allowlist oder vollständiger Air-Gap je nach Bedrohungsmodell. Interner Zugriff ausschließlich über das Unternehmensnetzwerk, kein öffentlicher Ingress.',
          '**Software-Stack** — eine selbst gehostete RAG-Plattform (ein eigenständiges Server-Image oder eine containerisierte Bereitstellung), ein Open-Source-LLM als Chat-Modell, ein Open-Source-Embedder und ein Vektorspeicher, der zur Korpusgröße passt. Anwendungsserver, Vektorspeicher und Log-Forwarder laufen als separate Prozesse mit separaten Service-Accounts.',
          '**Identität** — föderiert gegen den Unternehmens-Identitätsanbieter; Gruppenmitgliedschaft steuert den Sammlungszugriff. Sensible Sammlungen sind über zusätzliche Genehmigungs-Workflows abgesichert.',
          '**Backup und DR** — nächtliche inkrementelle Backups des Dokumentenspeichers und des Vektorindex; wöchentliche Vollbackups; externe Kopie, die von der IT verwahrt wird. Dokumentiertes Wiederherstellungs-Runbook, das mindestens jährlich getestet wird.',
          '**Betrieb** — Patch-Fenster nach Change-Management-Richtlinie; quartalsweise Zugriffsprüfungen; geübtes Lösch-Runbook für Anträge auf Recht auf Vergessenwerden; dokumentierter Upgrade-Pfad für Modelle und Embedder, der die Datenherkunft erhält.',
          '**Kapazitätsplanung** — wenige tausend Dokumente und 5–50 gleichzeitige Nutzer passen komfortabel auf einen einzelnen Mid-Range-GPU-Server. Darüber hinaus planen Sie entweder einen leistungsstärkeren Host oder den Wechsel zum Private-Cloud-Muster.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'On-Prem-RAG ist das Muster, das am ehesten aus nicht-technischen Gründen scheitert: ein Backup, das nie wiederhergestellt wurde, ein Admin-Konto, das im IT-Team geteilt wird, eine USV, die niemand getestet hat, ein Log-Forwarder, der seit zwei Monaten unbemerkt Ereignisse verwirft. Die technischen Kontrollen sind einfacher als die operative Hygiene.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Vektordatenbank-Optionen für On-Prem-RAG',
        content:
          '**Die Wahl des Vektorspeichers entscheidet selten über Compliance — sie prägt jedoch die Betriebskosten, die Skalierungsobergrenze und wie sauber das Lösch-Runbook umgesetzt werden kann.** Die meisten regulierten Bereitstellungen wählen eine dieser sechs Optionen.',
        columns: ['Vektordatenbank', 'Typ', 'EU-Self-Hosting', 'Bestes RAG-Muster'],
        rows: [
          {
            'Vektordatenbank': '**Chroma**',
            'Typ': 'Open Source, leichtgewichtig',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'Laptop + kleines On-Prem',
          },
          {
            'Vektordatenbank': '**Qdrant**',
            'Typ': 'Open Source, leistungsstark',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'On-Prem-Server, filterintensiv',
          },
          {
            'Vektordatenbank': '**Weaviate**',
            'Typ': 'Open Source, voller Funktionsumfang',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'On-Prem + hybride Suche',
          },
          {
            'Vektordatenbank': '**Milvus**',
            'Typ': 'Open Source, Enterprise',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'Großskaliges On-Prem',
          },
          {
            'Vektordatenbank': '**pgvector**',
            'Typ': 'PostgreSQL-Erweiterung',
            'EU-Self-Hosting': '✅',
            'Bestes RAG-Muster': 'Teams, die bereits Postgres nutzen',
          },
          {
            'Vektordatenbank': '**Pinecone**',
            'Typ': 'Managed SaaS',
            'EU-Self-Hosting': '⚠️ US-gehostet',
            'Bestes RAG-Muster': 'Nur private EU-Cloud (mit Vorbehalten)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Privates EU-Cloud-Muster',
        content:
          '**Das private EU-Cloud-Muster nutzt einen Cloud-Anbieter mit souveräner Region, kundenseitig verwalteten Schlüsseln, ausschließlicher EU-Datenresidenz und einer vertraglichen Klausel gegen KI-Training auf Kundendaten.** Es ist die richtige Antwort für unternehmensübergreifende Bereitstellungen, multiregionale Ausfallsicherheitsanforderungen und Teams ohne ausreichende operative Kapazität für echtes On-Prem.',
        items: [
          '**Anbieterauswahl** — das souveräne EU-Angebot eines Hyperscalers oder ein europäischer Cloud-Anbieter. Der AVV muss jeden Unterauftragsverarbeiter auflisten; Übermittlungsmechanismen müssen adressiert werden, falls ein Unterauftragsverarbeiter außerhalb des EWR liegt. Eine Schrems-II-konforme Transfer-Folgenabschätzung ist Bestandteil der Akte, selbst wenn der unmittelbare Auftragsverarbeiter EU-ansässig ist.',
          '**Region** — ausschließlich EU, mit ausdrücklichen Datenresidenzgarantien. Cross-Region-Replikation nur in andere EU-Regionen. Keine US-Region als Failover, auch nicht vorübergehend, auch nicht für Backups.',
          '**Verschlüsselung** — kundenseitig verwaltete Schlüssel mit Rotation; Bring-your-own-Key, wo der Anbieter es unterstützt; Schlüsselzugriffsereignisse separat von den betrieblichen Logs des Cloud-Anbieters protokolliert.',
          '**Netzwerk** — privates VPC ohne öffentlichen Ingress; Zugriff ausschließlich über private Konnektivität (dedizierte Leitung oder VPN) aus Ihrem Unternehmensnetzwerk; Egress-Allowlist für jede ausgehende Abhängigkeit.',
          '**Identität** — föderiert gegen Ihren Unternehmens-IdP; Cloud-natives IAM, gebunden an Nutzeridentitäten, nicht an geteilte Service-Accounts; ACLs pro Sammlung in der Retrieval-Pipeline durchgesetzt.',
          '**Logging** — Cloud-natives Audit-Log, das in Ihr bestehendes SIEM eingespeist wird; separate Aufnahme für anwendungsbezogene Audit-Ereignisse; manipulationssichere Aufbewahrung, die den Erwartungen der Aufsicht entspricht.',
          '**Verträge** — der AVV muss Artikel-28-konform sein, Unterauftragsverarbeiter auflisten, SCCs adressieren, wo erforderlich, und eine ausdrückliche No-Training-Klausel enthalten, die LLM-Gewichte und alle Hilfsdienste (Suche, Telemetrie, Support) abdeckt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Das private EU-Cloud-Muster wirkt freizügiger als On-Prem, weil es einen Drittanbieter-Auftragsverarbeiter einbindet — aber mit souveräner Region, kundenseitig verwalteten Schlüsseln, vertraglicher No-Training-Klausel und ordentlicher Egress-Kontrolle kann es On-Prem in Verfügbarkeit und Audit-Posture erreichen oder schlagen. Die Compliance-Akte ist dicker; das operative Risiko ist geringer.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'EU-AI-Act-Einstufung: Begrenztes Risiko vs. Hochrisiko',
        content:
          '**Die meisten lokalen RAG-Bereitstellungen sind unter dem EU AI Act KI-Systeme mit begrenztem Risiko — sobald jedoch das Retrieval eine automatisierte Entscheidung mit Auswirkungen auf eine Person speist, rutscht die Einstufung ins Hochrisiko, und die Pflichten vervielfachen sich.** Klassifizieren Sie, bevor Sie bauen.',
        items: [
          '**Begrenztes Risiko (die meisten lokalen RAG)** — Das System ruft Dokumente ab und fasst sie zusammen, um einen Menschen zu unterstützen; der Mensch trifft die Entscheidung. Die Pflichten sind überwiegend Transparenzpflichten: Nutzer müssen wissen, dass sie mit einer KI interagieren, generierter Inhalt muss als solcher erkennbar sein, kein manipulatives oder irreführendes Design.',
          '**Hochrisiko** — Das Retrieval speist eine automatisierte Entscheidung in den vom Act gelisteten Bereichen: Bonitätsbewertung, Bewerberauswahl, Bildungszulassungen, wesentliche öffentliche Dienste, Strafverfolgung, Migration, Justiz, biometrische Identifikation, kritische Infrastruktur. Ein RAG zur klinischen Entscheidungsunterstützung, das Behandlungen empfiehlt, ist Hochrisiko; ein RAG, das klinische Leitlinien zusammenfasst und einer Ärztin hilft, schneller zu lesen, ist es nicht.',
          '**Hochrisiko-Pflichten** — Risikomanagementsystem über den Lebenszyklus, Daten-Governance (Trainings-, Validierungs- und Testdaten dokumentiert), technische Dokumentation, automatische Ereignisprotokollierung, Transparenz und Information für Nutzer, menschliche Aufsicht, Genauigkeit und Robustheit, Konformitätsbewertung vor dem Inverkehrbringen, Marktbeobachtung nach Inverkehrbringen.',
          '**Erwägungen zu KI-Systemen mit allgemeinem Verwendungszweck** — Die Nutzung eines allgemeinen LLMs (Open Source oder anders) überträgt die Hochrisiko-Pflichten nicht auf den Modellanbieter. Der Betreiber (Ihre Organisation) trägt die Hochrisiko-Pflichten für das System, das Sie mit diesem Modell bauen.',
          '**Verbotene Praktiken** — Social Scoring, ungezieltes Scraping von Gesichtsbildern, Emotionserkennung an Arbeitsplätzen und Schulen, bestimmte Echtzeit-biometrische Kategorisierung. Diese sind unabhängig davon, wie lokal Sie sie betreiben, vom Tisch.',
          '**Dokumentation als Audit-Artefakt** — Die für Hochrisikosysteme erforderliche technische Akte ist kein einmaliges Lieferobjekt; sie ist ein lebendiges Dokument. Binden Sie sie an Ihren Change-Management-Prozess, sodass jede Modellfreigabe, jeder Embedder-Wechsel und jede ACL-Änderung darin reflektiert wird.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Linie zwischen Hochrisiko und begrenztem Risiko wird vom Anwendungsfall gezogen, nicht von der Technologie. Derselbe Vektorspeicher und dasselbe Modell können in einer Forschungsassistenten-Bereitstellung begrenztes Risiko und in einer HR-Screening-Bereitstellung Hochrisiko darstellen. Klassifizieren Sie pro Anwendungsfall, nicht pro Plattform.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DSFA-Anforderungen (Artikel 35)',
        content:
          '**Eine Datenschutz-Folgenabschätzung (Artikel 35) ist verpflichtend für Verarbeitungen, die voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der Betroffenen zur Folge haben.** Die meisten regulierten lokalen RAG-Systeme fallen in den Anwendungsbereich. Behandeln Sie die DSFA als Designdokument, nicht als nachträgliches Compliance-Artefakt.',
        items: [
          '**Wann verpflichtend** — systematische und umfassende Bewertung einschließlich Profiling mit Rechtswirkung; großmaßstäbliche Verarbeitung besonderer Kategorien personenbezogener Daten (Gesundheit, Recht, biometrische, rassische, politische, religiöse, gewerkschaftliche Daten); systematische Überwachung öffentlich zugänglicher Bereiche. Die nationalen Aufsichtsbehörden veröffentlichen Listen von Verarbeitungstätigkeiten, die immer eine DSFA erfordern — prüfen Sie Ihre.',
          '**Umfang der DSFA** — Zweck und Rechtsgrundlage; Beschreibung der Verarbeitungstätigkeiten; Erforderlichkeit und Verhältnismäßigkeit; Risikobewertung gegenüber den Betroffenen; Risikominderungen und Restrisiko; Konsultation des Datenschutzbeauftragten und (bei verbleibendem hohem Risiko) der Aufsichtsbehörde vor Beginn der Verarbeitung.',
          '**RAG-spezifische Risiken**, die zu adressieren sind: Re-Identifikation von Einzelpersonen aus abgerufenen Chunks; Generierung ungenauer Informationen, die eine Person betreffen; Leakage über Logs oder Backups; Vollständigkeit der Löschung beim Recht auf Vergessenwerden; Cross-Sammlungs-Kontamination; zu weit gefasste Zugriffe für Power-User.',
          '**Zu dokumentierende Risikominderungen** — die sechs Kontrollen oben, plus Chunk-bezogene Schwärzung oder Pseudonymisierung, wo die Rechtsgrundlage Einwilligung oder berechtigtes Interesse ist; Lösch-Runbook mit Übungsnachweis; Zugriffsprüfungen in einer festgelegten Kadenz.',
          '**Prüfer** — Der DSB zeichnet ab; die Aufsichtsbehörde wird konsultiert, wenn das Restrisiko nach Risikominderung weiterhin hoch bleibt. Die unterzeichnete DSFA gehört in die technische Akte zusammen mit der EU-AI-Act-Konformitätsdokumentation, falls das System ebenfalls hochriskant ist.',
          '**Lebendiges Dokument** — Führen Sie die DSFA erneut durch, wenn der Korpus wesentlich erweitert wird, wenn das Modell oder der Embedder sich ändert, wenn Zugriffsgrenzen sich ändern oder als Baseline jährlich. Binden Sie dies an Ihren Change-Management-Prozess.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Eine DSFA, die in Woche zwei eines Projekts geschrieben wird, ist ein Planungswerkzeug. Eine DSFA, die in Woche zehn geschrieben wird, ist ein Verteidigungsdokument. Das erste ist deutlich nützlicher und bringt typischerweise Designänderungen ans Licht, die das spätere Restrisiko senken. Beginnen Sie die DSFA vor der Beschaffungsentscheidung, nicht nach der Bereitstellung.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'Deutschlandspezifische Hinweise (Datenschutz)',
        content:
          '**Die deutsche Datenschutzpraxis legt das BDSG-Neu, sektorspezifische Regeln, BSI-Grundschutz-Bausteine und die Mitbestimmung des Betriebsrats über die DSGVO-Baseline.** Eine RAG-Bereitstellung, die generische DSGVO-Anforderungen erfüllt, kann in einer deutschen Prüfung dennoch scheitern, wenn diese Punkte übersehen werden.',
        items: [
          '**Mitbestimmung des Betriebsrats** — Nach §87 BetrVG erfordert jedes System, das die Leistung oder das Verhalten von Beschäftigten überwacht, eine Vereinbarung mit dem Betriebsrat vor der Bereitstellung. Ein RAG über mitarbeiter-erstellte Inhalte (E-Mails, interne Dokumente) löst dies typischerweise aus. Beziehen Sie den Betriebsrat zur Designzeit ein; die Vereinbarung (Betriebsvereinbarung) wird Teil der Rechtsgrundlagen-Akte.',
          '**Sektorspezifische Verschwiegenheit** — §203 StGB stellt die Verletzung der beruflichen Verschwiegenheit (Anwälte, Ärzte, Steuerberater, Wirtschaftsprüfer) unter Strafe. Eine RAG-Bereitstellung, die geschützte Mandanten- oder Patientendaten gegenüber nicht berufsmäßig gebundenem Personal oder externen Auftragsverarbeitern offenlegt, kann eine Straftat sein, nicht nur eine zivilrechtliche Angelegenheit. Das On-Prem- oder Air-Gapped-Muster ist in diesen Sektoren die sicherere Wahl.',
          '**Telemediengesetz und TTDSG** — Ausgehende Telemetrie, die Endnutzergeräte berührt, wird nicht nur von der DSGVO, sondern auch vom TTDSG geregelt. Air-Gap nimmt die Frage vom Tisch; egress-kontrollierte Bereitstellungen müssen verifizieren, dass jeder ausgehende Aufruf eingewilligt, erforderlich oder strikt technisch ist.',
          '**BSI-Grundschutz-Bausteine** — Für Behörden und KRITIS-Betreiber liefert das BSI-Grundschutz-Kompendium des Bundesamts für Sicherheit in der Informationstechnik den verbindlichen Maßstab. Auch im Mittelstand sind Bausteine wie OPS.1.2.4 (Cloud-Nutzung), OPS.2.1 (Outsourcing) und APP.4.4 (Webanwendungen) sinnvolle Referenzen für die Architekturdokumentation. Die DSFA und das technische Konzept sollten an passende Bausteine knüpfen.',
          '**Aufsichtsbehörden (Bund und Länder)** — Die Datenschutzaufsicht ist im Privatsektor auf Länderebene organisiert. Wenden Sie sich an die zuständige Landesbeauftragte für Datenschutz, wenn eine Konsultation nach Artikel 36 erforderlich ist. Positionspapiere des BfDI und der großen Landesbeauftragten zu KI-Werkzeugen sind wertvolle Inputs für die DSFA.',
          '**Praxis im deutschen Mittelstand** — Lokales RAG ist für den Mittelstand häufig die pragmatische Wahl: Es passt zu vorhandenen On-Prem- oder Hybrid-Architekturen, vermeidet die Komplexität von SCCs und Schrems-II-Bewertungen und erlaubt der eigenen IT, Souveränität über Modell und Daten zu behalten. Eine typische Bereitstellung ist ein On-Prem-Server, federiert gegen Microsoft Entra ID oder Keycloak, mit BSI-konformer Patch- und Backup-Disziplin.',
          '**Dokumentationssprache** — Deutsche Aufsichtsbehörden akzeptieren englischsprachige Dokumentation, doch zentrale nutzerseitige Artefakte (Datenschutzhinweise, Transparenzerklärungen, Betriebsvereinbarungen) sollten aus rechtlichen wie praktischen Gründen auf Deutsch verfasst sein.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Compliance-Checkliste vor dem Go-Live',
        content:
          '**Arbeiten Sie diese Liste vor jedem produktiven Rollout vollständig durch.** Jeder Punkt ist ein realer Versagensmodus aus einem realen Audit; die Liste ist bewusst kurz, damit sie auch tatsächlich genutzt wird.',
        items: [
          '☐ **Rechtsgrundlage dokumentiert** für jede Kategorie von Quelldaten — Einwilligung, Vertrag, gesetzliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe oder berechtigtes Interesse mit Abwägungstest in der Akte.',
          '☐ **DSFA vom DSB unterzeichnet**, mit angehängtem geübten Lösch-Runbook.',
          '☐ **Verzeichnis von Verarbeitungstätigkeiten (Artikel 30)** aktualisiert, einschließlich des RAG-Systems, der Datenkategorien, Aufbewahrung, Empfänger und Übermittlungsmechanismen (typischerweise keine bei lokalem RAG).',
          '☐ **Sechs Kontrollen End-to-End verifiziert**: Air-Gap oder Egress-Allowlist, RBAC, Audit-Logs, Verschlüsselung, Datenherkunft, Löschpfad.',
          '☐ **Ausgehender Paketmitschnitt** sauber über einen 24-stündigen Soak-Test; nach jedem Anwendungsupdate wiederholt.',
          '☐ **Identitätsanbieter-Integration** mit echten Nutzern aus jeder Zugriffsstufe getestet; Zugriff auf sensible Sammlungen erfordert separate Erhöhung.',
          '☐ **Backups erstellt und Wiederherstellung tatsächlich getestet** auf isolierter Hardware, nicht nur in einem Status-Panel verifiziert.',
          '☐ **Recht-auf-Vergessenwerden-Runbook geübt** mit synthetischen Daten — abdeckend Quellsystem, Vektorindex, zwischengespeicherte Embeddings und Aufbewahrung der Retrieval-Logs.',
          '☐ **EU-AI-Act-Einstufung** bestätigt (begrenztes Risiko vs. Hochrisiko); technische Akte vorhanden, falls Hochrisiko.',
          '☐ **Anbieterverträge (sofern vorhanden) geprüft**: AVV gemäß Artikel 28, Unterauftragsverarbeiter aufgelistet, No-Training-Klausel, die Kundendaten abdeckt.',
          '☐ **Betriebsvereinbarung** vorhanden, wo mitarbeiterbezogene Inhalte im Geltungsbereich sind (Deutschland; ähnliche EU-Regeln andernorts).',
          '☐ **Transparenzhinweis** in nutzerverständlicher Sprache erstellt, der die KI-Unterstützung, den Human-in-the-Loop und den Datenfluss erklärt.',
          '☐ **Incident-Response-Runbook** aktualisiert, um RAG-spezifische Szenarien zu berücksichtigen: Index-Leak, Log-Manipulation, Löschversagen, Modellwechsel mit nachgelagertem Bruch der Datenherkunft.',
          '☐ **Quartalsweise Zugriffsprüfung** geplant und zugewiesen; erste Prüfung vor dem Go-Live im Kalender.',
          '☐ **Jährliche DSFA-Aktualisierung** geplant und an den Change-Management-Prozess gekoppelt.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Fehler 1: „Lokal" als Synonym für „konform" zu behandeln.** On-Prem-Betrieb löst Übermittlungs- und Auftragsverarbeiterfragen; er löst weder Rechtsgrundlage, DSFA, Audit-Logging noch Betroffenenrechte. Compliance ist ein geschichtetes Programm, keine Bereitstellungsentscheidung.',
          '**Fehler 2: Die DSFA überspringen, weil das System „nur ein Suchwerkzeug" sei.** Ein Suchwerkzeug, das besondere Kategorien personenbezogener Daten in größerem Umfang verarbeitet, ist genau das, was Artikel 35 abdeckt. Wer die DSFA überspringt, überspringt die Verteidigungslinie im Audit.',
          '**Fehler 3: Den Anfragetext ohne Prüfung der Rechtsgrundlage protokollieren.** Anfragen sind selbst personenbezogene Daten, wenn sie auf Einzelpersonen verweisen. Entscheiden Sie zur Designzeit, ob Ihre Verarbeitungszwecke das Logging der Anfragen abdecken; falls nicht, protokollieren Sie nur Hash und Metadaten.',
          '**Fehler 4: Zwischengespeicherte Embeddings im Lösch-Runbook vergessen.** Quelllöschung funktioniert. Vektorindex-Neuaufbau funktioniert. Die Cache-Schicht, die Ihre Plattform aus Performance-Gründen ergänzt hat, die Embedding-Fingerabdrücke im Retrieval-Log und die Antwort-Historie im Chat-Speicher sind die Teile, die übersehen werden.',
          '**Fehler 5: Power-Usern erlauben, Sammlungs-ACLs zu umgehen.** „Admins können alles sehen" ist bequem und sehr verbreitet; es ist auch der mit Abstand häufigste Grund dafür, dass Audits schiefgehen. Privilegierter Zugriff muss selbst zugriffskontrolliert, zeitlich begrenzt und pro Nutzung begründet sein.',
          '**Fehler 6: Einen Workspace für mehrere Mandate oder Mandanten wiederverwenden.** Cross-Kontamination von Zitaten und Kontext ist ein Vertraulichkeitsversagen, noch bevor eine externe Partei sie sieht. Ein Mandat oder Mandant pro Sammlung; separate ACLs; separate Aufbewahrung.',
          '**Fehler 7: Air-Gap kaufen und dann ein privates Smartphone zum Testen anschließen.** Der Air-Gap-Perimeter muss die Personen einschließen, die Daten über ihn hinwegtragen können. Endgeräte-Politik ist Teil der Kontrolle, nicht ein separater Punkt.',
          '**Fehler 8: Modell- und Embedder-Wahl als „einmal einrichten und vergessen" behandeln.** Jedes Upgrade ist ein Change-Management-Ereignis mit Implikationen für DSFA, Datenherkunft und Audit-Trail. Planen Sie den Upgrade-Workflow vor der ersten Produktivbereitstellung.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[DSGVO-Volltext (Offiziell)](https://gdpr-info.eu/) — Vollständiger Text der Datenschutz-Grundverordnung mit Kommentar je Artikel.',
          '[EU-AI-Act-Volltext](https://artificialintelligenceact.eu/) — Vollständiger Verordnungstext mit Risikoklassifizierungsrahmen.',
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — US-Bundesrahmenwerk, anwendbar auf KI-Risikobewertung.',
          '[BDSG-Neu (Bundesdatenschutzgesetz)](https://www.gesetze-im-internet.de/bdsg_2018/) — Deutsche Umsetzung der DSGVO mit sektorspezifischen Ergänzungen.',
          '[EDSA-Leitlinien zur DSFA](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — Leitfaden des Europäischen Datenschutzausschusses zu Anlass und Durchführung einer DSFA.',
          '[BfDI (Bundesbeauftragter für den Datenschutz)](https://www.bfdi.bund.de/) — Positionspapiere des Bundesbeauftragten zu KI-Bereitstellungen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Erfüllt der lokale Betrieb von RAG automatisch die DSGVO?',
            a: 'Nein. Lokales Hosting löst die Frage der grenzüberschreitenden Übermittlung und reduziert die Auftragsverarbeiterliste, doch die DSGVO-Grundsätze in Artikel 5 (Rechtmäßigkeit, Fairness, Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht) gelten weiterhin. Artikel 25 (Datenschutz durch Technikgestaltung und durch Voreinstellungen), Artikel 30 (Verzeichnis von Verarbeitungstätigkeiten), Artikel 32 (Sicherheit der Verarbeitung) und Artikel 35 (DSFA) gelten unabhängig davon, wo das Modell läuft. Lokales RAG ist ein starker Ausgangspunkt, keine fertige Compliance-Posture.',
          },
          {
            q: 'Was ist für die EU-AI-Act-Compliance einer lokalen RAG-Bereitstellung erforderlich?',
            a: 'Klassifizieren Sie den Anwendungsfall als begrenztes Risiko oder Hochrisiko. Die meisten Retrieval-Assistenz-Bereitstellungen sind begrenztes Risiko und erfordern Transparenzpflichten: Nutzer müssen wissen, dass sie mit einer KI interagieren, generierte Inhalte müssen erkennbar sein. Sobald das Retrieval eine automatisierte Entscheidung in einem gelisteten Bereich speist (Kredit, Beschäftigung, Bildung, öffentliche Dienste, Strafverfolgung, Migration, Justiz, Biometrie, kritische Infrastruktur), ist die Bereitstellung Hochrisiko, und die vollständigen Pflichten greifen: Risikomanagementsystem, Daten-Governance, technische Dokumentation, automatische Ereignisprotokollierung, Transparenz, menschliche Aufsicht, Genauigkeit und Robustheit, Konformitätsbewertung sowie Marktbeobachtung nach Inverkehrbringen.',
          },
          {
            q: 'Benötige ich eine DSFA für lokales RAG?',
            a: 'Eine DSFA nach Artikel 35 ist verpflichtend für Verarbeitungen, die voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der Betroffenen zur Folge haben — dazu zählen die großmaßstäbliche Verarbeitung besonderer Kategorien personenbezogener Daten (Gesundheit, Recht, biometrische, rassische, politische, religiöse, gewerkschaftliche Daten) sowie systematisches Profiling mit Rechtswirkung. Die meisten regulierten lokalen RAG-Anwendungen (Recht, Medizin, Finanzen, HR-Untersuchungen) fallen in den Anwendungsbereich. Führen Sie die DSFA früh durch, behandeln Sie sie als Designdokument und üben Sie die Risikominderungen — insbesondere das Lösch-Runbook — vor dem Go-Live.',
          },
          {
            q: 'Kann ich eine lokale RAG-Bereitstellung über Abteilungen hinweg teilen?',
            a: 'Ja, mit Sorgfalt. Zugriffskontrolle auf Sammlungsebene, Authentifizierung pro Nutzer gegen einen einzigen Identitätsanbieter und eine klare Rechtsgrundlage für die Nutzung jeder Abteilung sind die Untergrenze. Die DSFA muss die breiteste Menge der Verarbeitungszwecke abdecken; benötigt eine Abteilung eine andere Rechtsgrundlage (z. B. HR-Untersuchungen unter berechtigtem Interesse, während klinisches Personal unter öffentlicher Aufgabe arbeitet), sind getrennte Sammlungen und getrennte Zugriffsgruppen einfacher zu verteidigen als eine einzige Sammlung mit ausgefeilten ACLs.',
          },
          {
            q: 'Wie auditiere ich, wer auf welches Dokument zugegriffen hat?',
            a: 'Protokollieren Sie jeden Retrieval mit Nutzer-ID, Zeitstempel, abgerufenen Chunk-IDs und den Dokument-IDs, aus denen sie stammen. Leiten Sie die Ereignisse an einen separaten, schreibbeschränkten Logspeicher unter anderer administrativer Kontrolle als der Anwendungsserver weiter (Funktionstrennung). Nutzen Sie append-only-Speicher mit einer Hash-Kette, sodass Manipulationen erkennbar sind. Die Aufbewahrungsdauer sollte sich am Untersuchungsfenster der Aufsichtsbehörde und etwaigen branchenspezifischen Regeln orientieren — sechs bis sieben Jahre sind in regulierten Branchen üblich.',
          },
          {
            q: 'Sind Open-Source-Embedding-Modelle DSGVO-konform einsetzbar?',
            a: 'Grundsätzlich ja, mit drei Bedingungen. Erstens: Die Gewichte werden einmal heruntergeladen und auf einen Hash fixiert, sodass nachweisbar ist, was lief. Zweitens: Die Inferenz läuft vollständig lokal ohne Telemetrie oder ausgehende Aufrufe — verifizieren Sie es per Paketmitschnitt, vertrauen Sie nicht allein der Dokumentation. Drittens: Die Model Card und die Lizenz werden auf Klauseln geprüft, die der vertraulichen geschäftlichen Nutzung widersprechen (manche Open-Weight-Lizenzen knüpfen Einschränkungen an Datentypen oder Anwendungsfälle). Die praktische Standardvorgehensweise für regulierte Bereitstellungen ist, eine kleine Anzahl geprüfter Embedder zu allowlisten und bei jedem Upgrade neu zu prüfen.',
          },
          {
            q: 'Wie steht es um die Datenherkunft für KI-generierte Ausgaben?',
            a: 'Jede generierte Antwort muss auf die Chunk-IDs verweisen, die sie hervorgebracht haben, auf den Modell-Identifikator, die Version der Prompt-Vorlage und den Zeitstempel. Die Chunks lassen sich dann zu Dokument-IDs auflösen, die wiederum zu Quelldokumenten führen. Diese Kette ermöglicht es Ihnen, die Antwort zu verifizieren, sie unter Anfechtung zu verteidigen, einen Löschantrag zu erfüllen und das Ergebnis später zu reproduzieren. Ohne sie ist „Die KI hat es gesagt" die Audit-Verteidigung — und das ist überhaupt keine Verteidigung.',
          },
          {
            q: 'Kann ich lokales RAG für vertrauliche Mandantendokumente nutzen?',
            a: 'Häufig ja, manchmal nein. Viele Außenanwaltsvereinbarungen, M&A-NDAs und Patientendatenverträge erlauben KI-gestützte Prüfung, sofern die Daten eine definierte Grenze nicht verlassen und bestimmte Kontrollen erfüllt sind. Lokales RAG erfüllt die Grenz-Anforderung bauartbedingt; die vertragsspezifische Kontrollliste (Verschlüsselung, Zugriff, Audit, Aufbewahrung, Meldung von Verletzungen) muss dennoch eingehalten werden. Wenn der Vertrag KI-Verarbeitung vollständig untersagt, hilft kein Bereitstellungsmuster — das Verbot gilt unabhängig davon, ob die KI lokal oder remote läuft.',
          },
          {
            q: 'Welches Logging ist für die Compliance erforderlich?',
            a: 'Ingest-Ereignisse (Dokument-ID, Hash, Quelle, Hochlader, Zeitstempel, Klassifizierung), Retrieval-Ereignisse (Nutzer-ID, Anfragemetadaten oder -Hash, abgerufene Chunk-IDs, Antwortreferenz, Modell-/Embedder-Identifikator), administrative Ereignisse (Modellfreigabe, Embedder-Wechsel, ACL-Änderung, Nutzer-/Gruppenänderung) und betriebliche Ereignisse (Backup, Wiederherstellung, Schlüsselrotation). Alle Ereignisse werden an einen separaten Logspeicher weitergeleitet, append-only, hash-verkettet und entsprechend Ihren Mandats- und Branchenanforderungen aufbewahrt.',
          },
          {
            q: 'Wie behandle ich Anträge auf Recht auf Vergessenwerden in RAG?',
            a: 'Mit einem dokumentierten Runbook, das die Löschung durch jede Schicht führt: Quellsystem für Dokumente, Vektorindex, zwischengespeicherte Embeddings, Aufbewahrung von Retrieval-Logs (sofern die Rechtsgrundlage die Löschung des Log-Eintrags zulässt) und alle in der Chat-Historie gespeicherten Antworten. Quelllöschung ist unkompliziert; der Vektorindex-Neuaufbau ist gut verstanden; zwischengespeicherte Embeddings und die Antwort-Historie sind die Teile, die die meisten Bereitstellungen übersehen. Üben Sie das Runbook mit synthetischen Daten, dokumentieren Sie die Übung und koppeln Sie das Runbook an Ihren Incident-Response-Prozess, sodass ein realer Antrag die geübte Sequenz auslöst und keine Improvisation.',
          },
          {
            q: 'Muss ich bei lokalem RAG die DSGVO und das BDSG beachten?',
            a: 'Ja, vollumfänglich. Auch wenn die Daten Ihr Rechenzentrum nicht verlassen, bleibt Ihre Organisation Verantwortlicher im Sinne der DSGVO (Artikel 4 Nr. 7) und unterliegt sowohl der DSGVO als auch dem BDSG-Neu. Konkret bedeutet das: Rechtsgrundlage nach Artikel 6 (oder Artikel 9 bei besonderen Kategorien), Verzeichnis von Verarbeitungstätigkeiten nach Artikel 30, technische und organisatorische Maßnahmen nach Artikel 32, DSFA nach Artikel 35 (in fast allen Fällen mit besonderen Kategorien personenbezogener Daten verpflichtend), Meldepflicht bei Datenschutzverletzungen nach Artikel 33 und Erfüllung der Betroffenenrechte aus Artikel 15–22. Der Vorteil des lokalen Betriebs liegt darin, dass keine grenzüberschreitende Übermittlung nach Artikel 44 ff. stattfindet, kein AVV mit einem Cloud-Anbieter abzuschließen ist und die Eingriffsmöglichkeiten ausländischer Behörden entfallen. BDSG-Neu ergänzt zusätzlich §26 (Beschäftigtendatenschutz) für mitarbeiterbezogene Inhalte sowie sektorspezifische Regelungen — bei Berufsgeheimnisträgern ist zusätzlich §203 StGB zu beachten, der die Offenlegung an externe Auftragsverarbeiter unter Strafe stellt.',
          },
          {
            q: 'Eignet sich lokales RAG für den deutschen Mittelstand?',
            a: 'Ja, lokales RAG ist häufig die pragmatischste Wahl für den deutschen Mittelstand. Drei Gründe: Erstens passt es zu vorhandenen On-Prem- und Hybrid-Architekturen, die viele Mittelständler ohnehin betreiben — ein zusätzlicher GPU-Server im bestehenden Rechenzentrum oder Co-Location-Standort ist ein überschaubares Investment. Zweitens entfallen die rechtlichen Folgekosten von Cloud-Lösungen: keine Standardvertragsklauseln, keine Schrems-II-Folgenabschätzung, kein AVV mit Hyperscalern, keine Auseinandersetzung mit US-Zugriffsrechten. Drittens lässt sich die Architektur an etablierte Maßstäbe anbinden — BSI-Grundschutz-Bausteine (z. B. OPS.1.2.4 Cloud-Nutzung, APP.4.4 Webanwendungen) liefern den Rahmen für die technische Akte; eine Federation gegen Microsoft Entra ID oder Keycloak fügt sich in vorhandene Identitätslandschaften; Backups laufen über bestehende Pipelines. Eine typische Mittelstands-Bereitstellung umfasst einen Server mit zwei Enterprise-GPUs, einen Open-Source-LLM, einen Open-Source-Embedder, einen On-Prem-Vektorspeicher (Qdrant, Weaviate oder pgvector), federierte Authentifizierung über das bestehende Active Directory und ein Audit-Log, das in das vorhandene SIEM einspeist. Die Investition liegt typischerweise im fünfstelligen Bereich; laufende Kosten überwiegend Strom und Wartung. Wo der Datenschutzbeauftragte die DSFA frühzeitig begleitet und der Betriebsrat zur Designzeit eingebunden wird, ist die Bereitstellung in 8–12 Wochen audit-fähig — deutlich schneller als ein vergleichbares Cloud-Setup mit gleichwertigem Kontrollniveau.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[AnythingLLM vs. PrivateGPT vs. Open WebUI: Bestes lokales RAG](/de/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — welche selbst gehosteten Plattformen welcher Compliance-Posture entsprechen, mit Hinweisen zu Telemetrie und Lizenzierung.',
          '[Lokale KI-Agenten für Geschäftsabläufe und EU-Compliance](/de/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — angrenzendes Compliance-Thema, wenn Retrieval automatisierte Workflow-Schritte speist statt eines menschlichen Lesers.',
          '[Lokale LLM-E-Mail- und Kalender-Automatisierung](/de/power-local-llm/local-llm-email-and-calendar-automation) — angrenzende Geschäftsautomatisierungsmuster, in denen das gleiche Kontrollset gilt.',
          '[Lokales RAG für Ihre PDFs Schritt für Schritt](/de/power-local-llm/local-rag-on-your-pdfs-step-by-step) — praktische Implementierungsanleitung für die On-Prem- und Laptop-Muster.',
          '[Mit 1.000 PDFs lokal chatten](/de/power-local-llm/chat-with-1000-pdfs-locally) — operative Hinweise für größere Korpora, die an die On-Prem-Obergrenze stoßen.',
          '[Power Local LLM Hub](/de/power-local-llm) — die vollständige Bibliothek der Anleitungen für selbst gehostete LLM-Bereitstellungen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-fr.png',
    title: 'RAG local pour données métier : IA conforme RGPD pour documents sensibles (2026)',
    seoTitle: 'RAG local conforme RGPD pour documents sensibles (2026)',
    intro:
      "Les équipes juridiques, médicales et financières partagent le même problème : les documents les plus précieux à interroger par IA sont précisément ceux qui ne peuvent pas quitter l'entreprise. Voici l'architecture, le jeu de contrôles et la matrice de décision pour un RAG auto-hébergé conforme au RGPD, à l'AI Act, à HIPAA et au cadre Datenschutz allemand — rédigé pour les responsables conformité qui veulent transmettre un seul document à leur équipe IT.",
    metaDescription:
      'RAG local conforme RGPD pour les équipes juridiques, médicales et financières. Architecture, audit, PIA et 3 modèles de déploiement comparés.',
    twitterDescription:
      "RAG local répondant au RGPD et à l'AI Act. Air-gap, journaux d'audit, traçabilité, périmètre PIA et 3 modèles de déploiement — l'article que les responsables conformité envoient à l'IT.",
    audience:
      "Responsables conformité, DPO, juristes et architectes IT en Europe et dans la francophonie chargés de bâtir un RAG auto-hébergé sur des documents confidentiels — contrats, dossiers patients, archives d'audit, salles de données M&A, correspondance avec les autorités.",
    readTime: '15 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'RAG local conforme RGPD',
    targetKeywords: [
      'rag conforme rgpd',
      'rag local données métier',
      'eu ai act rag',
      'rag privé documents confidentiels',
      'déploiement rag on-premise',
      'datenschutz rag',
      'pia rag local',
    ],
    leadAnswerBlock:
      "**Un déploiement RAG auto-hébergé répond au RGPD et à l'AI Act seulement si six contrôles sont en place dès le premier jour : air-gap ou egress strictement contrôlé, authentification par utilisateur avec accès basé sur les rôles, journaux d'audit immuables couvrant l'ingestion et la recherche, chiffrement de bout en bout au repos et en transit, traçabilité déterministe du chunk vers la source, et un parcours de suppression écrit qui se propage du stockage source jusqu'à l'index vectoriel et aux embeddings en cache. Le modèle de déploiement (laptop mono-utilisateur, serveur on-prem, cloud privé EU) détermine quels contrôles sont triviaux et lesquels demandent du travail — pas si les contrôles sont requis.**",
    quickAnswerTop: {
      en: {
        question:
          'Le RAG local est-il conforme RGPD par défaut, et quel modèle de déploiement choisir pour des équipes régulées ?',
        answer:
          "Le RAG local n'est pas conforme RGPD par défaut. Faire tourner un modèle on-premise résout le transfert hors UE et réduit la liste des sous-traitants, mais les articles 5, 25, 30, 32 et 35 du RGPD continuent de s'appliquer : base légale, minimisation, audit, sécurité du traitement et PIA pour tout système traitant des données sensibles à grande échelle. Choisissez un laptop mono-utilisateur pour les professionnels solos et les revues ponctuelles ; un serveur on-prem pour des bases documentaires départementales jusqu'à quelques milliers de documents et 5–50 utilisateurs ; un cloud privé EU (région souveraine, clés gérées par le client, EU uniquement) pour des déploiements multi-entités où la résilience compte plus qu'un air-gap intégral. Quel que soit le choix, les six contrôles sont les mêmes — seul le coût d'implémentation change.",
        bullets: [
          "L'hébergement local résout le transfert transfrontalier (Art. 44–49) et réduit la liste des sous-traitants — il ne résout ni la base légale, ni la PIA, ni les droits des personnes.",
          'Laptop mono-utilisateur — idéal pour avocat, médecin ou auditeur solo. Difficile à auditer à grande échelle ; air-gap le plus simple.',
          'Serveur on-prem — idéal pour 5–50 utilisateurs. Vrais journaux, RBAC, sauvegardes, reprise. Effort IT le plus élevé.',
          'Cloud privé EU — idéal pour les multi-entités résilients. Région souveraine + clés gérées par le client + clause anti-entraînement obligatoires.',
          'Une PIA est obligatoire (Art. 35) dès que des données sensibles sont traitées à grande échelle, quel que soit le modèle de déploiement.',
          "Le droit à l'effacement doit se propager aux documents source, à l'index vectoriel et aux embeddings en cache — concevez le parcours avant la mise en production.",
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Comparaison des modèles de déploiement', anchor: '#deployment-comparison' },
      { label: 'Choisir un modèle de déploiement', anchor: '#which-deployment' },
      { label: 'Pourquoi un RAG local pour les données sensibles', anchor: '#why-local-rag' },
      { label: 'Les six contrôles indispensables', anchor: '#required-controls' },
      { label: "Air-gap et contrôle de l'egress", anchor: '#air-gap' },
      { label: "Journaux d'audit qui tiennent face à un contrôle", anchor: '#audit-logging' },
      { label: 'Traçabilité du chunk à la source', anchor: '#data-lineage' },
      { label: "Chiffrement et contrôle d'accès", anchor: '#encryption-access' },
      { label: 'Modèle laptop mono-utilisateur', anchor: '#laptop-pattern' },
      { label: 'Modèle serveur on-prem', anchor: '#on-prem-pattern' },
      { label: 'Bases vectorielles', anchor: '#vector-db-comparison' },
      { label: 'Modèle cloud privé EU', anchor: '#private-cloud-pattern' },
      { label: 'Classification AI Act', anchor: '#eu-ai-act' },
      { label: 'Exigences PIA (Art. 35)', anchor: '#dpia-requirements' },
      { label: 'Notes juridiction allemande (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Checklist conformité avant mise en production', anchor: '#compliance-checklist' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "**L'hébergement local est nécessaire mais insuffisant.** Faire tourner le modèle et le stockage vectoriel sur votre matériel résout le transfert hors UE et réduit la liste des sous-traitants, mais les articles 5, 25, 30, 32 et 35 du RGPD restent applicables. Base légale, minimisation, audit, sécurité du traitement et PIA ne deviennent pas optionnels parce que les données restent dans vos murs.",
          "**Six contrôles sont non négociables**, quel que soit le modèle : air-gap ou egress strict, authentification par utilisateur avec accès par rôle, journaux d'audit immuables, chiffrement au repos et en transit, traçabilité déterministe du chunk vers le document source, et parcours de suppression écrit incluant l'index vectoriel et tout embedding en cache.",
          '**Trois modèles de déploiement couvrent la plupart des cas régulés.** Laptop mono-utilisateur pour les solos et revues ponctuelles ; serveur on-prem pour des bases départementales de 5–50 utilisateurs ; cloud privé EU (région souveraine, clés gérées par le client) pour des déploiements multi-entités où la résilience prime sur un air-gap intégral.',
          "**L'AI Act classe la plupart des RAG locaux comme à risque limité** — mais dès que la recherche alimente une décision automatisée (scoring crédit, sélection d'emploi, éligibilité aux prestations), le déploiement bascule en haut risque et déclenche l'évaluation de conformité, la surveillance post-marché et la supervision humaine.",
          "**Une PIA est obligatoire au titre de l'article 35** pour tout RAG ingérant des données sensibles (santé, juridique, biométrique, politique, syndicale) à grande échelle, ou pour tout système produisant des décisions automatisées à effet juridique. Sauter la PIA, c'est sauter sa défense en cas d'audit.",
          "**Le droit à l'effacement est le test que la plupart des déploiements échouent.** Les documents source sont faciles. L'index vectoriel se reconstruit. Les embeddings en cache, les journaux de recherche et les réponses stockées dans l'historique de chat sont les parties oubliées — et celles que l'autorité de contrôle interrogera.",
          "**Les modèles d'embeddings open source sont conformes RGPD en principe**, à trois conditions : (a) les poids sont téléchargés une fois et figés sur un hash, (b) l'inférence tourne entièrement en local sans télémétrie, (c) la fiche modèle et la licence sont relues pour toute clause incompatible avec un usage métier confidentiel.",
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          "**6 contrôles obligatoires** pour tout RAG régulé : air-gap, RBAC, journaux d'audit, chiffrement, traçabilité, parcours de suppression.",
          '**3 modèles de déploiement :** laptop mono-utilisateur (solos), serveur on-prem (5–50 utilisateurs), cloud privé EU (multi-entités).',
          '**Une PIA est obligatoire** (Art. 35) dès que des données sensibles (santé, juridique, biométrique) sont traitées à grande échelle.',
          '**AI Act :** la plupart des RAG locaux = risque limité ; haut risque dès que la recherche alimente des décisions automatisées (crédit, emploi, prestations).',
          "**Le droit à l'effacement** doit se propager aux documents source, index vectoriels, embeddings en cache ET historique des réponses.",
          "**La CNIL recommande** l'IA locale pour le traitement des données professionnelles sensibles (financières, médicales, juridiques) lorsque l'enjeu de souveraineté ou de secret professionnel le justifie.",
          "**Les modèles d'embeddings open source** sont conformes RGPD seulement si les poids sont figés, l'inférence est entièrement locale et la licence est relue.",
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Comparaison des modèles de déploiement',
        content:
          "Chaque modèle peut être rendu conforme RGPD ; ce qui change, c'est le coût des contrôles et les modes de défaillance. Choisissez le modèle le plus simple qui correspond au nombre d'utilisateurs, à la sensibilité des documents et à l'exigence de résilience.",
        columns: ['Contrôle', 'Laptop mono-utilisateur', 'Serveur on-prem', 'Cloud privé EU'],
        rows: [
          {
            'Contrôle': 'Air-gap (aucun trafic sortant)',
            'Laptop mono-utilisateur': 'Trivial — désactiver le réseau',
            'Serveur on-prem': 'Faisable — VLAN + pare-feu',
            'Cloud privé EU': "Difficile — uniquement allowlist d'egress",
          },
          {
            'Contrôle': "Journal d'audit (qui, quoi, quand)",
            'Laptop mono-utilisateur': 'Manuel — niveau OS uniquement',
            'Serveur on-prem': 'Solide — pipeline de logs central',
            'Cloud privé EU': 'Solide — logging cloud-natif',
          },
          {
            'Contrôle': 'Traçabilité (chunk → source)',
            'Laptop mono-utilisateur': 'Fichiers locaux uniquement',
            'Serveur on-prem': 'Pipeline complètement traçable',
            'Cloud privé EU': 'Complète — sur plusieurs régions',
          },
          {
            'Contrôle': 'Résidence des données UE',
            'Laptop mono-utilisateur': 'Inhérente — emplacement physique',
            'Serveur on-prem': 'Inhérente — emplacement physique',
            'Cloud privé EU': 'Configurée — région souveraine requise',
          },
          {
            'Contrôle': 'RBAC par utilisateur',
            'Laptop mono-utilisateur': 'Mono-utilisateur — N/A',
            'Serveur on-prem': "Fournisseur d'identité + groupes",
            'Cloud privé EU': 'IAM + SSO + ACL par collection',
          },
          {
            'Contrôle': "Sauvegarde et plan de reprise d'activité",
            'Laptop mono-utilisateur': 'Disque externe chiffré',
            'Serveur on-prem': 'Bande ou sauvegarde hors site',
            'Cloud privé EU': 'Réplication multi-AZ',
          },
          {
            'Contrôle': 'Coût initial',
            'Laptop mono-utilisateur': 'Matériel uniquement — faible',
            'Serveur on-prem': 'Serveur + intégration — moyen',
            'Cloud privé EU': 'Abonnement + setup — moyen',
          },
          {
            'Contrôle': 'Coût récurrent',
            'Laptop mono-utilisateur': 'Aucun — temps sysadmin',
            'Serveur on-prem': 'IT ops + énergie + climatisation',
            'Cloud privé EU': 'Mensualité récurrente',
          },
          {
            'Contrôle': 'Idéal pour',
            'Laptop mono-utilisateur': 'Solos, revues ponctuelles',
            'Serveur on-prem': '5–50 utilisateurs, KB départementales',
            'Cloud privé EU': 'Multi-entités, déploiements résilients',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Choisir un modèle de déploiement',
        content:
          "**Le bon choix dépend du nombre d'utilisateurs, de la sensibilité des documents, de la pression d'audit et de la capacité IT interne.** Ce raccourci de décision couvre la plupart des cas réels.",
        columns: ['Votre situation', 'Recommandation'],
        rows: [
          {
            'Votre situation': 'Avocat, médecin ou auditeur solo traitant un dossier à la fois',
            'Recommandation': 'Laptop mono-utilisateur',
          },
          {
            'Votre situation': 'Salle de données M&A avec 3–5 reviewers nommés et date de fin fixe',
            'Recommandation': 'Laptop mono-utilisateur ou on-prem (selon le volume documentaire)',
          },
          {
            'Votre situation': 'Équipe conformité de 10–30 personnes partageant des archives de correspondance régulateur',
            'Recommandation': 'Serveur on-prem',
          },
          {
            'Votre situation': 'Service hospitalier construisant un assistant de protocoles cliniques pour 50 personnes',
            'Recommandation': 'Serveur on-prem',
          },
          {
            'Votre situation': 'Groupe multi-entités ayant besoin d\'un seul RAG sur plusieurs filiales européennes',
            'Recommandation': 'Cloud privé EU (région souveraine + clés gérées par le client)',
          },
          {
            'Votre situation': 'Assureur avec exigence de disponibilité 24/7 et plan de reprise',
            'Recommandation': 'Cloud privé EU',
          },
          {
            'Votre situation': 'Administration avec données classifiées ou restreintes',
            'Recommandation': 'On-prem air-gappé uniquement — le cloud est exclu',
          },
          {
            'Votre situation': "Défense d'audit régulateur due dans moins de 6 semaines",
            'Recommandation': "Serveur on-prem (le plus rapide pour démontrer la maîtrise)",
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Pourquoi un RAG local pour les données sensibles',
        content:
          "**L'argument du RAG local face au LLM cloud-as-a-service n'est pas une posture — c'est la forme de l'analyse de risque RGPD.** Le RAG cloud convient à de nombreux usages ; pour des données métier sensibles, il ajoute cinq risques que le RAG local élimine par construction.",
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Le RAG local garde vos documents sensibles sur votre matériel tout en offrant à votre équipe une recherche assistée par IA — aucune donnée ne quitte vos locaux, aucun sous-traitant tiers ne les touche, et la question du transfert transfrontalier ne se pose pas.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez que votre équipe juridique puisse interroger 10 000 dossiers en langage naturel — mais que les documents ne quittent jamais votre salle serveur. C'est exactement le RAG local : l'IA lit vos documents sur votre matériel, répond à vos questions sur votre matériel, et rien n'est envoyé nulle part. L'avantage conformité n'est pas une fonctionnalité — c'est l'architecture.",
          },
        ],
        items: [
          "**Transfert transfrontalier (Art. 44–49).** Envoyer des données personnelles à un sous-traitant hors UE exige des Clauses Contractuelles Types, une analyse d'impact transfert et une réponse crédible sur les pouvoirs d'injonction de la juridiction réceptrice. Le RAG local ne transfère pas — la question disparaît.",
          "**Prolifération des sous-traitants (Art. 28).** Les fournisseurs LLM cloud reposent typiquement sur de l'infrastructure hyperscaler, des services de modération et des outils d'observabilité. Chacun est un sous-traitant à lister, contractualiser et auditer. Le RAG local n'a aucun sous-traitant par défaut.",
          "**Fuite vers les données d'entraînement.** De nombreuses CGU LLM cloud se réservent le droit d'utiliser les prompts clients pour améliorer le modèle, sauf à payer un palier entreprise et vérifier la clause anti-entraînement. Le RAG local utilise des modèles dont vous contrôlez les poids ; rien ne quitte l'hôte.",
          "**Clauses de confidentialité dans les contrats clients.** Conventions d'avocat externe, NDA M&A et accords sur données patient interdisent souvent la transmission du matériel protégé à des sous-traitants tiers. Le RAG local contourne entièrement la clause.",
          "**Exposition aux injonctions et procédures judiciaires.** Les documents stockés chez un fournisseur cloud peuvent être réquisitionnés par une procédure visant le fournisseur, parfois sans notification rapide au responsable de traitement. Les documents qui ne quittent jamais vos locaux ne peuvent être réquisitionnés que chez vous.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Le RAG local n'est pas la bonne réponse pour toutes les charges de travail. Recherche d'informations publiques, génération de brouillons marketing, assistance code sur dépôts open source — tout cela fonctionne en général mieux avec des LLM cloud, parce que l'exposition RGPD est faible et l'écart de qualité compte. L'argument de cet article concerne spécifiquement les données métier confidentielles : juridique, médical, financier, RH, correspondance régulateur et secrets d'affaires.",
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'Les six contrôles indispensables',
        content:
          '**Ces six contrôles sont le socle.** Tout déploiement régulé en a besoin ; le modèle de déploiement ne change que la façon de les implémenter. Sauter un seul de ces contrôles est la cause la plus fréquente des audits qui se passent mal.',
        numberedItems: [
          {
            title: "Air-gap ou contrôle strict de l'egress",
            whyItMatters:
              "Confirme que les documents et les embeddings ne peuvent pas fuir par des appels sortants — SDK de télémétrie, sondes de mises à jour, crash reporters, callbacks de modération, CDN tiers pour les polices. Désactivez complètement l'accès réseau (vrai air-gap) ou exécutez une allowlist d'egress qui n'autorise que des serveurs de mise à jour signés.",
          },
          {
            title: 'Authentification par utilisateur avec accès par rôle',
            whyItMatters:
              "Vous devez pouvoir répondre à \"qui a accédé à quel document\" avant qu'un régulateur ne le demande. SSO contre un fournisseur d'identité, accès par groupe aux collections et ACL par document quand le dossier le justifie. Les comptes partagés ne sont pas un contrôle — c'est un échec d'audit en sursis.",
          },
          {
            title: "Journaux d'audit immuables couvrant ingestion et recherche",
            whyItMatters:
              "Pour chaque document : qui l'a chargé, quand, chemin source, hash. Pour chaque requête : qui a demandé, ce qui a été demandé (si la base légale le permet), quels chunks ont été retournés, depuis quels document IDs, quelle réponse. Les journaux doivent être à preuve d'altération — append-only, signés, avec une rétention couvrant la fenêtre d'enquête de l'autorité de contrôle. Pour la traçabilité au niveau prompt — versionnement, changelog, rollback — voir [workflows de version control des prompts](/fr/prompt-engineering/prompt-version-control-workflows).",
          },
          {
            title: 'Chiffrement au repos et en transit',
            whyItMatters:
              "Chiffrement disque sur l'hôte, TLS pour tout appel service-à-service interne, gestion de clés qui survit au vol d'un laptop ou à la compromission d'un compte admin. Clés gérées par le client pour les déploiements cloud. Sans cela, un vol d'appareil devient une violation notifiable au titre de l'article 33.",
          },
          {
            title: 'Traçabilité déterministe du chunk vers la source',
            whyItMatters:
              "Chaque chunk retourné doit remonter à son document source, sa page, sa section et sa version. C'est ce qui permet (a) de vérifier la réponse, (b) d'honorer une demande de suppression, (c) de défendre le système en justice quand un résumé généré est contesté. \"On ne peut pas reproduire quel chunk a produit quelle réponse\" n'est pas une réponse acceptable face à une autorité de contrôle.",
          },
          {
            title: "Parcours de suppression écrit incluant l'index vectoriel et les embeddings en cache",
            whyItMatters:
              "Une demande de droit à l'effacement doit se propager du stockage source, à travers l'index vectoriel, jusqu'aux embeddings en cache et à la rétention des journaux de recherche. La plupart des déploiements gèrent proprement la suppression source et oublient le reste. Documentez le runbook de suppression avant la mise en production ; répétez-le sur des données synthétiques.",
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: "Air-gap et contrôle de l'egress",
        content:
          "**Air-gap signifie que l'hôte n'a aucun chemin réseau sortant ; le contrôle d'egress signifie qu'il en a un strictement allowlisté.** Les deux sont acceptables ; choisissez le modèle le plus fort que votre exploitation peut soutenir.",
        items: [
          "**Vrai air-gap** — pas de DHCP, pas de résolution DNS vers des destinations publiques, pas de TCP sortant. Les mises à jour passent par des supports signés qu'un administrateur connecte physiquement. C'est le bon modèle pour les travaux classifiés, certains réseaux hospitaliers et tout déploiement dont le modèle de menace inclut une dépendance malveillante.",
          "**Allowlist d'egress** — le réseau sortant n'est autorisé qu'à une courte liste de destinations nommées (serveurs de mise à jour de modèle, fournisseur d'identité, forwarders de logs vers des collecteurs internes). Tout autre trafic est rejeté au pare-feu. C'est le défaut pratique pour la plupart des déploiements départementaux régulés.",
          '**Ce qu\'il faut vérifier sur la plateforme** : zéro télémétrie par défaut, aucun appel sortant pendant l\'inférence, aucun CDN de polices dans l\'UI, aucun crash reporter qui expédie des payloads. Vérifiez avec une capture de paquets ou un outil comme Little Snitch sur le banc d\'essai avant promotion en production.',
          "**Gouvernance des mises à jour** — poids du modèle, poids de l'embedder, code applicatif et patches OS passent tous par une fenêtre de mise à jour contrôlée. L'administrateur qui promeut une mise à jour signe par écrit ; le changement est journalisé.",
          '**Cassure d\'air-gap classique :** un SDK d\'analytique fourni avec un composant UI tiers, une référence CDN de polices dans le chrome de l\'application, ou une sonde "vérifier les mises à jour" qui s\'exécute au démarrage. C\'est pourquoi l\'étape de vérification compte — ne supposez rien à propos des défauts.',
        ],
        callouts: [
          {
            type: 'tip',
            text: "Lancez une capture de paquets de 24 heures sur l'hôte avec l'application ouverte et au repos. Tout ce qui sort sans être sur l'allowlist est un constat. Recommencez à chaque mise à jour applicative — les release notes sous-estiment systématiquement les nouveaux appels sortants.",
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: "Journaux d'audit qui tiennent face à un contrôle",
        content:
          "**Le journal d'audit est l'artefact qu'une autorité de contrôle lira en premier.** Il doit répondre à deux questions pour chaque recherche : qui a demandé, et qu'a livré le système. Sans cela, vous argumentez avec des mots ; avec un journal correct, vous montrez des reçus.",
        items: [
          "**Événements d'ingestion** : document ID, hash (SHA-256), nom de fichier, chemin source, chargé par, horodatage, tag de classification, taille, nombre de pages, groupe propriétaire, classe de rétention. Classifiez chaque document à l'ingestion — la classification rétroactive de gros corpus est laborieuse et rarement complète.",
          "**Événements de recherche** : query ID, user ID, horodatage, chunk IDs retournés (et les document IDs d'origine), scores de retrieval, hash de la réponse finale, identifiant du modèle, identifiant de l'embedder, top-K utilisé. Le texte de la requête lui-même est sensible — ne le journalisez que si la finalité du traitement le couvre ; sinon, journalisez le hash et l'horodatage.",
          "**Événements administratifs** : promotion de modèle, changement d'embedder, reconstruction d'index, modifications utilisateurs/groupes, modifications d'ACL, modifications de politique d'accès. Chaque événement signé par l'administrateur responsable.",
          "**Preuve d'altération** : journal append-only, chaîne de hashs (chaque entrée référence le hash de la précédente), clé de signature out-of-band, rapprochements réguliers avec une copie distincte conservée par un autre administrateur ou sur un support write-once.",
          "**Rétention** : alignée sur la fenêtre d'enquête de l'autorité — au minimum la durée de rétention du dossier ; communément six à sept ans dans les industries régulées ; plus longue selon les règles sectorielles.",
          "**Pipeline** : l'application émet des événements structurés ; un forwarder les expédie vers un store de logs séparé et restreint en écriture. Le serveur applicatif ne doit jamais avoir le droit de supprimer ou réécrire des entrées de log — c'est la séparation des fonctions qui rend le journal crédible.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Journaliser le texte de la requête introduit sa propre question RGPD — une requête peut elle-même contenir des données personnelles (par exemple « résumer l'historique médical du patient X »). Décidez à la conception si la finalité du traitement couvre la journalisation des requêtes ; sinon, journalisez uniquement les métadonnées requises pour l'audit et la diagnostic opérationnel.",
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Traçabilité du chunk à la source',
        content:
          "**La traçabilité est l'épine dorsale de tous les autres contrôles.** Sans elle, les demandes de suppression échouent, la vérification des réponses devient impossible et la piste d'audit s'effondre. Construisez la traçabilité dès la première ingestion, pas après.",
        items: [
          "**Traçabilité au niveau document** : chaque document a un ID interne stable, un hash de contenu, un horodatage d'ingestion, un propriétaire, une classification et une classe de rétention. Le fichier original reste sur le store source ; le système RAG détient une référence, pas le maître.",
          "**Traçabilité au niveau chunk** : chaque chunk référence son document parent, sa page (PDF), sa section (documents structurés), son offset caractère, sa longueur et la version de la stratégie de chunking. Quand vous re-chunkez (vous le ferez), les anciens chunks sont marqués tombstoned, pas supprimés in place — pour que les anciens journaux de recherche restent résolvables.",
          "**Traçabilité au niveau embedding** : chaque vecteur d'embedding référence son chunk ID et l'identifiant de l'embedder. Quand vous changez d'embedder, les anciens vecteurs sont conservés jusqu'à ce que les nouveaux soient validés et que tout dossier les ayant référencés soit clos ; alors seulement ils sont purgés.",
          "**Traçabilité au niveau réponse** : chaque réponse générée référence les chunk IDs qui l'ont produite, l'identifiant du modèle, la version du template de prompt et l'horodatage. Quand un utilisateur demande « d'où vient cette réponse », le système résout chunk → document → page en un clic.",
          "**Réindexation sans casser la traçabilité** : les reconstructions préservent les document IDs et incrémentent les versions de la stratégie de chunking. Les anciens chunk IDs restent résolvables dans les journaux de recherche même après que l'index live a changé.",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Testez la chaîne de traçabilité chaque trimestre. Choisissez au hasard une recherche dans le journal d'audit et remontez : chunk ID → document ID → fichier original sur le store source → classe de rétention. Si une étape est cassée, corrigez le schéma avant la prochaine inspection — pas pendant.",
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: "Chiffrement et contrôle d'accès",
        content:
          "**Chiffrement au repos, chiffrement en transit et contrôle d'accès qui s'aligne sur votre fournisseur d'identité existant.** Ces contrôles sont bien compris ; le mode d'échec consiste à oublier l'une des trois couches, pas à mal implémenter celle choisie.",
        items: [
          "**Chiffrement au repos** — chiffrement disque complet sur l'hôte (LUKS sous Linux, BitLocker sous Windows, FileVault sous macOS pour les laptops). Sur les serveurs, chiffrez aussi les partitions du store vectoriel et de la zone de staging d'ingestion. Clés gérées par le client pour tout déploiement cloud, avec rotation selon votre politique.",
          '**Chiffrement en transit** — TLS pour chaque saut service-à-service, même sur localhost. Politique de chiffrement alignée sur votre baseline sectorielle. Mutual TLS quand le modèle de menace le justifie — typiquement serveur-à-serveur en cloud.',
          "**Authentification** — SSO contre votre fournisseur d'identité existant (OIDC, SAML). Pas de comptes locaux en production. MFA appliqué pour tout utilisateur ayant un accès administrateur ou à des collections sensibles.",
          "**Autorisation** — accès par groupe au niveau collection ; ACL au niveau document quand le dossier le justifie (salles M&A, enquêtes RH). Le pipeline de retrieval doit appliquer les ACL au moment de la requête — pas seulement l'UI. Un utilisateur qui ne doit pas voir un document ne doit pas non plus recevoir ses chunks.",
          "**Accès administratif** — gestion des accès privilégiés pour tout compte capable de lire ou reconstruire des index, voir les journaux d'audit ou changer les ACL. Élévation just-in-time avec justification journalisée plutôt que droits admin permanents.",
          "**Sécurité des endpoints** — appareils gérés pour les déploiements laptop (enrôlés MDM, chiffrés, verrouillage écran imposé). Un laptop solo avec le store documentaire déchiffré laissé sans surveillance dans un café est la violation RGPD que vous ne voulez pas avoir à signaler.",
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Modèle laptop mono-utilisateur',
        content:
          "**Le laptop mono-utilisateur est le modèle le plus facile à air-gapper et le plus difficile à mettre à l'échelle.** Adapté pour les solos et les revues ponctuelles ; inadapté à tout ce qui doit survivre à un seul utilisateur ou à son départ.",
        items: [
          '**Matériel** — un laptop classe workstation avec chiffrement disque complet, GPU dédié (ou machine récente à mémoire unifiée) et au moins 32 Go de RAM. Le modèle et l\'embedder doivent tenir en mémoire avec le cache du store vectoriel. Pour les besoins matériels et la sélection par VRAM, voir le [guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide-2026).',
          "**Logiciel** — application RAG desktop autonome qui tourne en local ; LLM open source dont les poids sont téléchargés une fois et figés sur un hash ; embedder open source ; store vectoriel local sur le disque chiffré. Pour une comparaison de modèles open source adaptés au RAG local, voir [meilleurs modèles open source pour Ollama](/fr/local-llms/top-open-source-models-ollama).",
          "**Posture réseau** — air-gappé pendant le travail ; reconnecté uniquement pour des mises à jour signées explicites. Configurez le pare-feu OS pour rejeter par défaut toutes les connexions sortantes et créez des exceptions explicites pour le workflow de mise à jour.",
          '**Manipulation des documents** — documents source sur le disque chiffré ; arborescence par dossier dédié à chaque dossier ; sauvegardes hebdomadaires chiffrées sur disque externe stocké dans un autre lieu.',
          "**Posture d'audit** — le journal d'audit OS (login, accès fichiers, événements périphériques) est la base. Les événements applicatifs sont plus simples sur on-prem ; pour le laptop, traitez le log OS comme l'enregistrement primaire et complétez avec des notes manuelles dossier par dossier.",
          "**Limites** — un laptop mono-utilisateur n'est pas une plateforme multi-utilisateurs. Partager le laptop, partager les comptes ou copier le store documentaire sur la machine d'un collègue casse la posture d'audit et l'analyse de base légale.",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Pour les solos sur dossiers confidentiels, le modèle laptop mono-utilisateur est réellement la meilleure posture de confidentialité disponible — meilleure qu'un cloud et plus solide que beaucoup de déploiements on-prem. Le compromis est opérationnel : quand le laptop tombe, le dossier hérite du temps de récupération de votre discipline de sauvegarde.",
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'Modèle serveur on-prem',
        content:
          '**Le serveur on-prem est le modèle de bête de somme du RAG départemental régulé.** Il monte à 5–50 utilisateurs et quelques milliers de documents, supporte un audit logging correct et reste dans votre périmètre physique. Le prix : un vrai travail de production IT.',
        items: [
          "**Matériel** — un serveur avec une à deux GPU entreprise (les GPU workstation sont acceptables pour des corpus plus petits), disques redondants, mémoire ECC et onduleur. Prévoyez 2 à 4× le stockage de votre corpus brut pour couvrir vecteurs, index, journaux et sauvegardes.",
          '**Réseau** — VLAN dédié derrière le pare-feu d\'entreprise ; allowlist d\'egress ou air-gap complet selon le modèle de menace. Accès interne uniquement via le réseau d\'entreprise, aucun ingress public.',
          "**Stack logicielle** — plateforme RAG auto-hébergée (image serveur autonome ou déploiement conteneurisé), LLM open source en modèle de chat, embedder open source et store vectoriel adapté à la taille du corpus. Le serveur applicatif, le store vectoriel et le forwarder de logs tournent en processus séparés avec des comptes de service séparés.",
          "**Identité** — fédéré contre le fournisseur d'identité d'entreprise ; appartenance aux groupes pilote l'accès aux collections. Les collections sensibles sont protégées par des workflows d'approbation supplémentaires.",
          "**Sauvegarde et reprise** — sauvegardes incrémentales nocturnes du store documentaire et de l'index vectoriel ; sauvegardes complètes hebdomadaires ; copie hors site conservée par l'IT. Runbook de restauration documenté testé au moins annuellement.",
          "**Exploitation** — fenêtre de patch selon politique de change management ; revues d'accès trimestrielles ; runbook de suppression rodé pour les demandes de droit à l'effacement ; chemin d'upgrade documenté pour modèles et embedders qui préserve la traçabilité.",
          '**Capacité** — quelques milliers de documents et 5–50 utilisateurs concurrents tiennent confortablement sur un serveur GPU mid-range. Au-delà, prévoyez un hôte plus costaud ou le passage au modèle cloud privé.',
        ],
        callouts: [
          {
            type: 'note',
            text: "Le RAG on-prem est le modèle qui échoue le plus souvent pour des raisons non techniques : une sauvegarde jamais restaurée, un compte admin partagé entre plusieurs IT, un onduleur que personne n'a testé, un forwarder de logs qui jette silencieusement des événements depuis deux mois. Les contrôles techniques sont plus faciles que l'hygiène opérationnelle.",
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Bases vectorielles pour RAG on-prem',
        content:
          "**Le choix du store vectoriel décide rarement de la conformité — mais il façonne le coût opérationnel, le plafond de scaling et la propreté du runbook de suppression.** La plupart des déploiements régulés choisissent l'une de ces six options.",
        columns: ['Base vectorielle', 'Type', 'Auto-hébergement EU', 'Idéal pour'],
        rows: [
          {
            'Base vectorielle': '**Chroma**',
            'Type': 'Open source, léger',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'Laptop + petit on-prem',
          },
          {
            'Base vectorielle': '**Qdrant**',
            'Type': 'Open source, performant',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'Serveur on-prem, filtrage intensif',
          },
          {
            'Base vectorielle': '**Weaviate**',
            'Type': 'Open source, complet',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'On-prem + recherche hybride',
          },
          {
            'Base vectorielle': '**Milvus**',
            'Type': 'Open source, entreprise',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'On-prem à grande échelle',
          },
          {
            'Base vectorielle': '**pgvector**',
            'Type': 'Extension PostgreSQL',
            'Auto-hébergement EU': '✅',
            'Idéal pour': 'Équipes déjà sous Postgres',
          },
          {
            'Base vectorielle': '**Pinecone**',
            'Type': 'SaaS managé',
            'Auto-hébergement EU': '⚠️ Hébergé US',
            'Idéal pour': 'Cloud privé EU uniquement (avec réserves)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Modèle cloud privé EU',
        content:
          "**Le modèle cloud privé EU utilise un fournisseur cloud à région souveraine, clés gérées par le client, résidence EU et clause contractuelle anti-entraînement IA sur les données client.** C'est la bonne réponse pour les déploiements multi-entités, les exigences de résilience multi-régions et les équipes sans capacité opérationnelle pour un vrai on-prem.",
        items: [
          "**Sélection du fournisseur** — l'offre souveraine EU d'un hyperscaler ou un fournisseur cloud européen. Le DPA doit lister chaque sous-traitant ; les mécanismes de transfert doivent être adressés si un sous-traitant est hors EEE. Une analyse d'impact transfert type Schrems II reste au dossier même si le sous-traitant immédiat est EU.",
          "**Région** — EU uniquement, avec garanties explicites de résidence. Réplication cross-region uniquement vers d'autres régions EU. Pas de région US comme failover, même temporairement, même pour les sauvegardes.",
          "**Chiffrement** — clés gérées par le client avec rotation ; bring-your-own-key où le fournisseur le supporte ; les événements d'accès aux clés sont journalisés séparément des logs opérationnels du fournisseur.",
          "**Réseau** — VPC privé sans ingress public ; accès uniquement via connectivité privée (lien dédié ou VPN) depuis votre réseau d'entreprise ; allowlist d'egress pour toute dépendance sortante.",
          "**Identité** — fédéré contre votre IdP d'entreprise ; IAM cloud-natif lié aux identités utilisateur, pas à des comptes de service partagés ; ACL par collection appliquées dans le pipeline de retrieval.",
          "**Logging** — log d'audit cloud-natif injecté dans votre SIEM existant ; ingestion séparée pour les événements d'audit applicatifs ; rétention à preuve d'altération qui satisfait les attentes du superviseur.",
          "**Contrats** — le DPA doit être conforme à l'article 28, lister les sous-traitants, adresser les CCT si nécessaire et inclure une clause anti-entraînement explicite couvrant les poids LLM et tout service annexe (recherche, télémétrie, support).",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Le modèle cloud privé EU paraît plus permissif que l'on-prem parce qu'il implique un sous-traitant tiers — mais avec région souveraine, clés gérées par le client, clause anti-entraînement et contrôle d'egress sérieux, il égale ou bat l'on-prem en disponibilité et en posture d'audit. Le dossier conformité est plus épais ; le risque opérationnel est plus faible.",
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: "Classification AI Act : risque limité vs haut risque",
        content:
          "**La plupart des RAG locaux sont des systèmes IA à risque limité au titre de l'AI Act — mais dès que la recherche alimente une décision automatisée affectant une personne, la classification bascule en haut risque et les obligations se multiplient.** Classifiez avant de construire.",
        items: [
          "**Risque limité (la plupart des RAG locaux)** — le système retourne et résume des documents pour assister un humain ; l'humain décide. Les obligations sont surtout de transparence : les utilisateurs doivent savoir qu'ils interagissent avec une IA, le contenu généré doit être identifiable, pas de design manipulateur ou trompeur.",
          "**Haut risque** — la recherche alimente une décision automatisée dans les domaines listés par l'Act : scoring crédit, sélection à l'emploi, admissions éducatives, services publics essentiels, application de la loi, migration, justice, identification biométrique, infrastructures critiques. Un RAG d'aide à la décision clinique recommandant des traitements est haut risque ; un RAG qui résume des protocoles cliniques pour aider un médecin à lire plus vite ne l'est pas.",
          '**Obligations haut risque** — système de gestion des risques sur le cycle de vie, gouvernance des données (entraînement, validation, test documentés), documentation technique, journalisation automatique, transparence et information aux utilisateurs, supervision humaine, mesures de précision et de robustesse, évaluation de conformité avant mise sur le marché, surveillance post-marché.',
          "**IA à usage général** — utiliser un LLM à usage général (open source ou non) ne transfère pas les obligations haut risque au fournisseur du modèle. Le déployeur (votre organisation) porte les obligations haut risque pour le système que vous bâtissez avec ce modèle.",
          "**Pratiques interdites** — scoring social, scraping massif d'images de visages, reconnaissance d'émotions sur les lieux de travail et à l'école, certaines catégorisations biométriques en temps réel. Hors-jeu, peu importe l'aspect local du déploiement.",
          "**La documentation comme artefact d'audit** — le dossier technique requis pour les systèmes haut risque n'est pas un livrable ponctuel ; c'est un document vivant. Liez-le à votre processus de change management pour que chaque promotion de modèle, chaque changement d'embedder et chaque modification d'ACL s'y reflète.",
        ],
        callouts: [
          {
            type: 'note',
            text: "La frontière haut risque vs risque limité est tracée par l'usage, pas par la technologie. Le même store vectoriel et le même modèle peuvent être risque limité dans un déploiement assistant de recherche et haut risque dans un déploiement de tri RH. Classifiez par cas d'usage, pas par plateforme.",
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'Exigences PIA (Article 35)',
        content:
          "**Une analyse d'impact relative à la protection des données (article 35) est obligatoire pour tout traitement susceptible d'engendrer un risque élevé pour les droits et libertés des personnes.** La plupart des RAG locaux régulés entrent dans le périmètre. Traitez la PIA comme un document de conception, pas un artefact de conformité a posteriori.",
        items: [
          "**Quand obligatoire** — évaluation systématique et étendue incluant profilage à effet juridique ; traitement à grande échelle de données sensibles (santé, juridique, biométrique, raciale, politique, religieuse, syndicale) ; surveillance systématique de zones publiques. Les autorités nationales publient des listes d'opérations qui imposent toujours une PIA — vérifiez la vôtre.",
          '**Périmètre de la PIA** — finalité et base légale ; description des opérations de traitement ; nécessité et proportionnalité ; analyse de risque pour les personnes ; mesures et risque résiduel ; consultation du DPO et (si le risque résiduel reste élevé) de l\'autorité de contrôle avant le début du traitement.',
          '**Risques spécifiques au RAG** à traiter : ré-identification de personnes à partir des chunks ; génération d\'informations inexactes affectant une personne ; fuite via journaux ou sauvegardes ; complétude de la suppression sur droit à l\'effacement ; contamination cross-collection ; accès trop larges pour les power users.',
          "**Mesures à documenter** — les six contrôles ci-dessus, plus expurgation/pseudonymisation au niveau chunk quand la base légale est consentement ou intérêt légitime ; runbook de suppression avec preuve de répétition ; revues d'accès à cadence définie.",
          "**Reviewers** — le DPO valide ; l'autorité de contrôle est consultée si le risque résiduel reste élevé après mesures. La PIA signée va au dossier technique avec la documentation de conformité AI Act si le système est aussi haut risque.",
          '**Document vivant** — refaites la PIA quand le corpus s\'étend significativement, quand le modèle ou l\'embedder change, quand les frontières d\'accès changent ou comme baseline annuelle. Liez-la à votre processus de change management.',
        ],
        callouts: [
          {
            type: 'tip',
            text: "Une PIA écrite en semaine 2 d'un projet est un outil de planification. Une PIA écrite en semaine 10 est un document défensif. Le premier est nettement plus utile et fait souvent émerger des changements de design qui réduisent le risque résiduel final. Démarrez la PIA avant la décision d'achat, pas après le déploiement.",
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: "Notes pour la juridiction allemande (Datenschutz) et contexte CNIL",
        content:
          "**La pratique allemande de protection des données superpose le BDSG-Neu, des règles sectorielles, les fiches BSI-Grundschutz et la cogestion du comité d'entreprise au socle RGPD.** Un déploiement RAG conforme RGPD générique peut échouer à une revue allemande si ces points sont manqués.",
        items: [
          "**Cogestion du Betriebsrat** — au titre du §87 BetrVG, tout système surveillant la performance ou le comportement des salariés exige un accord du comité d'entreprise avant déploiement. Un RAG sur du contenu rédigé par les salariés (e-mails, documents internes) déclenche typiquement cette obligation. Impliquez le Betriebsrat dès la conception ; l'accord (Betriebsvereinbarung) entre dans le dossier de base légale.",
          '**Confidentialité sectorielle** — le §203 StGB pénalise la violation du secret professionnel (avocats, médecins, conseillers fiscaux, auditeurs). Un déploiement RAG exposant des données client/patient protégées à du personnel non astreint au secret ou à des sous-traitants externes peut être une infraction pénale, pas seulement civile. On-prem ou air-gappé est le choix le plus sûr dans ces secteurs.',
          "**Telemediengesetz et TTDSG** — la télémétrie sortante touchant des terminaux d'utilisateurs finaux est régulée non seulement par le RGPD mais aussi par le TTDSG. L'air-gap retire la question ; les déploiements à egress contrôlé doivent vérifier que tout appel sortant est consenti, nécessaire ou strictement technique.",
          "**Fiches BSI-Grundschutz** — pour les administrations et opérateurs KRITIS, le compendium BSI-Grundschutz fournit le référentiel. Même dans le mid-market, des fiches comme OPS.1.2.4 (usage cloud), OPS.2.1 (outsourcing) et APP.4.4 (applications web) sont des références utiles pour le dossier d'architecture.",
          "**Autorités de contrôle (Bund et Länder)** — le contrôle des données du secteur privé est organisé par Land. Adressez-vous au Landesbeauftragte für Datenschutz compétent quand une consultation au titre de l'article 36 est requise.",
          "**Contexte CNIL pour la francophonie** — la CNIL recommande explicitement le recours à l'IA traitée localement pour les données professionnelles sensibles (financières, médicales, juridiques) lorsque le secret professionnel ou la souveraineté justifient d'écarter un sous-traitant cloud. Un RAG local satisfait l'esprit de la position CNIL par construction.",
          "**Langue de la documentation** — les autorités allemandes acceptent la documentation en anglais, mais les artefacts utilisateur clés (mentions d'information, déclarations de transparence, accords avec le Betriebsrat) doivent être rédigés en allemand pour des raisons légales et pratiques.",
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Checklist conformité avant la mise en production',
        content:
          "**Parcourez cette liste de bout en bout avant tout déploiement en production.** Chaque entrée est un mode de défaillance réel issu d'un audit réel ; la liste est volontairement courte pour qu'elle soit effectivement utilisée.",
        items: [
          '☐ **Base légale documentée** pour chaque catégorie de données source — consentement, contrat, obligation légale, intérêt vital, mission de service public, ou intérêt légitime avec test de mise en balance au dossier.',
          '☐ **PIA validée** par le DPO, avec runbook de suppression rodé en pièce jointe.',
          '☐ **Registre de traitements (Article 30)** mis à jour pour inclure le RAG, les catégories de données, la rétention, les destinataires et les mécanismes de transfert (en général aucun pour le RAG local).',
          "☐ **Six contrôles vérifiés bout-à-bout** : air-gap ou allowlist d'egress, RBAC, journaux d'audit, chiffrement, traçabilité, parcours de suppression.",
          '☐ **Capture de paquets sortante** propre sur 24 h ; répétée après chaque mise à jour applicative.',
          "☐ **Intégration fournisseur d'identité** testée avec un vrai utilisateur de chaque palier d'accès ; les collections sensibles exigent une élévation séparée.",
          '☐ **Sauvegardes prises et restauration vraiment testée** sur matériel isolé, pas seulement vérifiée dans un panneau de statut.',
          "☐ **Runbook droit à l'effacement rodé** sur données synthétiques couvrant store source, index vectoriel, embeddings en cache et rétention des journaux.",
          "☐ **Classification AI Act** confirmée (risque limité vs haut risque) ; dossier technique en place si haut risque.",
          '☐ **Contrats fournisseurs (le cas échéant) revus** : DPA conforme à l\'article 28, sous-traitants listés, clause anti-entraînement couvrant les données client.',
          '☐ **Accord avec le Betriebsrat** en place quand du contenu rédigé par les salariés est dans le périmètre (Allemagne ; règles européennes similaires ailleurs).',
          "☐ **Mention de transparence** rédigée en langage utilisateur expliquant l'assistance IA, le human-in-the-loop et le flux de données.",
          "☐ **Runbook de réponse à incident** mis à jour pour couvrir les scénarios spécifiques RAG : fuite d'index, manipulation de log, échec de suppression, swap de modèle cassant la traçabilité.",
          '☐ **Revue d\'accès trimestrielle** planifiée et assignée ; première revue calée avant la mise en production.',
          '☐ **Rafraîchissement annuel de la PIA** planifié et lié au processus de change management.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes',
        items: [
          "**Erreur 1 : Traiter \"local\" comme synonyme de \"conforme\".** Le on-prem résout transfert et sous-traitants ; il ne résout pas base légale, PIA, audit logging ou droits des personnes. La conformité est un programme en couches, pas un choix de déploiement.",
          '**Erreur 2 : Sauter la PIA parce que le système est "juste un outil de recherche".** Un outil de recherche qui ingère des données sensibles à grande échelle est exactement ce que couvre l\'article 35. Sauter la PIA, c\'est sauter sa défense en cas d\'audit.',
          "**Erreur 3 : Journaliser le texte de requête sans vérifier la base légale.** Les requêtes elles-mêmes sont des données personnelles quand elles désignent des individus. Décidez à la conception si la finalité couvre la journalisation des requêtes ; sinon, journalisez seulement le hash et les métadonnées.",
          "**Erreur 4 : Oublier les embeddings en cache dans le runbook de suppression.** La suppression source marche. La reconstruction d'index marche. La couche cache ajoutée par votre plateforme pour la performance, les empreintes d'embeddings dans le journal de retrieval et l'historique des réponses dans le store de chat sont les parties oubliées.",
          '**Erreur 5 : Laisser les power users contourner les ACL de collection.** "Les admins voient tout" est commode et très répandu ; c\'est aussi la première cause d\'audits qui se passent mal. L\'accès privilégié doit lui-même être contrôlé, borné dans le temps et justifié par usage.',
          "**Erreur 6 : Réutiliser un même workspace pour plusieurs dossiers ou clients.** La contamination croisée des citations et du contexte est un échec de confidentialité avant même qu'une partie externe ne le voie. Un dossier ou un client par collection ; ACL séparées ; rétention séparée.",
          "**Erreur 7 : Acheter un air-gap et brancher un téléphone perso pour tester.** Le périmètre air-gap doit inclure les personnes capables de transporter les données. La politique des endpoints fait partie du contrôle, pas un sujet à part.",
          '**Erreur 8 : Traiter le choix du modèle et de l\'embedder comme "set and forget".** Chaque upgrade est un événement de change management avec implications PIA, traçabilité et audit. Planifiez le workflow d\'upgrade avant le premier déploiement en production.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Texte intégral du RGPD (Officiel)](https://gdpr-info.eu/) — Texte complet du Règlement Général sur la Protection des Données avec commentaire article par article.',
          "[Texte intégral de l'AI Act](https://artificialintelligenceact.eu/) — Texte réglementaire complet avec cadre de classification des risques.",
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Cadre fédéral US applicable à l\'évaluation des risques IA.',
          '[BDSG-Neu (loi fédérale allemande)](https://www.gesetze-im-internet.de/bdsg_2018/) — Transposition allemande du RGPD avec ajouts sectoriels.',
          '[Lignes directrices EDPB sur la PIA](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — Guide du Comité européen de la protection des données sur quand et comment mener une PIA.',
          '[CNIL — Recommandations IA](https://www.cnil.fr/) — Plans et fiches de la CNIL sur le déploiement IA, traitement local et données sensibles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Faire tourner un RAG en local satisfait-il automatiquement le RGPD ?',
            a: "Non. L'hébergement local résout la question du transfert transfrontalier et réduit la liste des sous-traitants, mais les principes RGPD de l'article 5 (licéité, loyauté, transparence, limitation des finalités, minimisation, exactitude, limitation de la conservation, intégrité et confidentialité, responsabilité) restent applicables. Les articles 25 (protection dès la conception et par défaut), 30 (registre des traitements), 32 (sécurité du traitement) et 35 (PIA) s'appliquent indépendamment de l'endroit où tourne le modèle. Le RAG local est un point de départ solide, pas une posture conformité finie.",
          },
          {
            q: "Que faut-il pour la conformité AI Act d'un déploiement RAG local ?",
            a: "Classifiez le cas d'usage en risque limité ou haut risque. La plupart des déploiements assistant de recherche sont à risque limité et exigent des obligations de transparence : les utilisateurs doivent savoir qu'ils interagissent avec une IA, le contenu généré doit être identifiable. Dès que la recherche alimente une décision automatisée dans un domaine listé (crédit, emploi, éducation, services publics, application de la loi, migration, justice, biométrie, infrastructures critiques), le déploiement est haut risque et l'ensemble des obligations s'applique : système de gestion des risques, gouvernance des données, documentation technique, journalisation automatique, transparence, supervision humaine, précision et robustesse, évaluation de conformité, surveillance post-marché.",
          },
          {
            q: 'Ai-je besoin d\'une PIA pour le RAG local ?',
            a: "Une PIA au titre de l'article 35 est obligatoire pour tout traitement susceptible d'engendrer un risque élevé pour les droits et libertés des personnes — ce qui inclut le traitement à grande échelle de données sensibles (santé, juridique, biométrique, raciale, politique, religieuse, syndicale) et le profilage systématique à effet juridique. La plupart des RAG locaux régulés (juridique, médical, financier, enquêtes RH) entrent dans le périmètre. Lancez la PIA tôt, traitez-la comme un document de conception et répétez les mesures — particulièrement le runbook de suppression — avant la mise en production.",
          },
          {
            q: 'Puis-je partager un déploiement RAG local entre plusieurs services ?',
            a: "Oui, avec précaution. Contrôle d'accès au niveau collection, authentification par utilisateur contre un fournisseur d'identité unique et base légale claire pour l'usage de chaque service sont le plancher. La PIA doit couvrir l'ensemble le plus large des finalités ; si un service a besoin d'une base légale différente (par exemple enquêtes RH au titre de l'intérêt légitime alors que les soignants opèrent en mission de service public), des collections séparées et des groupes d'accès séparés sont plus faciles à défendre qu'une collection unique avec ACL élaborées.",
          },
          {
            q: "Comment auditer qui a accédé à quel document ?",
            a: "Journalisez chaque recherche avec user ID, horodatage, chunk IDs retournés et les document IDs d'origine. Faites suivre les événements vers un store de logs séparé, restreint en écriture, sous un contrôle administratif différent du serveur applicatif (séparation des fonctions). Utilisez du stockage append-only avec chaîne de hashs pour rendre toute altération détectable. La rétention doit s'aligner sur la fenêtre d'enquête de l'autorité et les règles sectorielles — six à sept ans est commun dans les industries régulées.",
          },
          {
            q: "Les modèles d'embeddings open source sont-ils utilisables dans le respect du RGPD ?",
            a: "En principe oui, à trois conditions. Premièrement, les poids sont téléchargés une fois et figés sur un hash, pour que vous puissiez prouver ce qui tournait. Deuxièmement, l'inférence est entièrement locale sans télémétrie ni appel sortant — vérifiez par capture de paquets, ne vous fiez pas à la documentation seule. Troisièmement, la fiche modèle et la licence sont relues pour toute clause incompatible avec un usage métier confidentiel (certaines licences open weight imposent des restrictions sur les types de données ou cas d'usage). Le défaut pratique pour les déploiements régulés : allowlister un petit nombre d'embedders validés et les revérifier à chaque mise à jour.",
          },
          {
            q: "Qu'en est-il de la traçabilité pour les sorties générées par IA ?",
            a: "Chaque réponse générée doit référencer les chunk IDs qui l'ont produite, l'identifiant du modèle, la version du template de prompt et l'horodatage. Les chunks remontent ensuite à des document IDs, qui remontent aux documents source. Cette chaîne est ce qui permet de vérifier la réponse, la défendre face à une contestation, honorer une demande de suppression et reproduire le résultat plus tard. Sans elle, « l'IA l'a dit » est la défense d'audit — et ce n'est aucune défense.",
          },
          {
            q: 'Puis-je utiliser un RAG local pour les documents confidentiels clients ?',
            a: "Souvent oui, parfois non. De nombreuses conventions d'avocat externe, NDA M&A et contrats sur données patient autorisent la revue assistée par IA dès lors que les données ne quittent pas un périmètre défini et que certains contrôles sont en place. Le RAG local satisfait l'exigence de périmètre par construction ; la liste de contrôles spécifique au contrat (chiffrement, accès, audit, rétention, notification de violation) doit toujours être respectée. Quand le contrat interdit tout traitement IA, aucun modèle de déploiement ne corrige cela — l'interdiction s'applique que l'IA soit locale ou distante.",
          },
          {
            q: 'Quel logging est requis pour la conformité ?',
            a: "Événements d'ingestion (document ID, hash, source, chargeur, horodatage, classification), événements de recherche (user ID, métadonnées ou hash de la requête, chunk IDs retournés, référence de la réponse, identifiant modèle/embedder), événements administratifs (promotion de modèle, changement d'embedder, changement d'ACL, changement utilisateur/groupe) et événements opérationnels (sauvegarde, restauration, rotation de clé). Tous les événements sont expédiés vers un store de logs séparé, append-only, à chaîne de hashs, retenus selon vos exigences dossier et secteur.",
          },
          {
            q: "Comment gérer les demandes de droit à l'effacement dans un RAG ?",
            a: "Avec un runbook documenté qui mène la suppression à travers chaque couche : store de documents source, index vectoriel, embeddings en cache, rétention des journaux de recherche (quand la base légale autorise la suppression de l'entrée de log) et toutes les réponses stockées dans l'historique de chat. La suppression source est directe ; la reconstruction d'index est bien comprise ; les embeddings en cache et l'historique des réponses sont les parties que la plupart des déploiements oublient. Répétez le runbook sur données synthétiques, documentez la répétition et liez le runbook à votre processus de réponse à incident, pour qu'une demande réelle déclenche la séquence rodée et non de l'improvisation.",
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI : meilleur RAG local](/fr/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — quelles plateformes auto-hébergées pour quelle posture conformité, avec notes télémétrie et licence.',
          '[Agents IA locaux pour workflows métier et conformité EU](/fr/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — sujet adjacent quand la recherche alimente des étapes de workflow automatisées plutôt qu\'un lecteur humain.',
          "[Automatisation e-mail et calendrier par LLM local](/fr/power-local-llm/local-llm-email-and-calendar-automation) — schémas d'automatisation métier où le même jeu de contrôles s'applique.",
          '[RAG local sur vos PDF étape par étape](/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step) — guide pratique pour les modèles on-prem et laptop.',
          '[Discuter avec 1 000 PDF localement](/fr/power-local-llm/chat-with-1000-pdfs-locally) — guide opérationnel pour les corpus plus volumineux qui poussent contre le plafond on-prem.',
          '[Power Local LLM Hub](/fr/power-local-llm) — bibliothèque complète des guides de déploiement LLM auto-hébergés.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-ja.png',
    title: '業務データ向けローカルRAG：機密文書のためのGDPR準拠AI（2026年版）',
    seoTitle: 'GDPR準拠ローカルRAG：機密文書向け（2026）',
    intro:
      '法務、医療、金融の各チームには共通の課題があります。AIで検索する価値が最も高い文書こそが、社外に出せない文書です。本記事は、GDPR、EU AI Act、HIPAA、ドイツのDatenschutz要件を満たすセルフホスト型RAGの、アーキテクチャ・統制セット・展開パターンの判断マトリクスです。コンプライアンス担当者がIT部門に1つの文書を渡せば、何を構築すべきか伝わるよう書かれています。',
    metaDescription:
      'GDPR準拠ローカルRAG：法務・医療・金融チーム向け。アーキテクチャ、監査ログ、DPIA範囲、3つの展開パターンを比較。',
    twitterDescription:
      'GDPRおよびEU AI Actに対応するローカルRAG。Air-Gap、監査ログ、データ系統、DPIA範囲、3つの展開パターン — EUコンプライアンス担当者がIT部門に共有する記事。',
    audience:
      'EUおよびDACH圏のコンプライアンス担当者、DPO、法務、機密文書（契約書、患者記録、監査ファイル、M&Aデータルーム、規制当局との通信）に対するセルフホストRAG構築を担うITアーキテクト。',
    readTime: '15分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'GDPR準拠ローカルRAG',
    targetKeywords: [
      'gdpr 準拠 rag',
      'ローカル rag 業務データ',
      'eu ai act rag',
      '機密文書 プライベート rag',
      'on-premise rag 展開',
      'datenschutz rag',
      'dpia ローカル rag',
    ],
    leadAnswerBlock:
      '**セルフホスト型RAGがGDPRおよびEU AI Actの要件を満たすには、初日から6つの統制が組み込まれている必要があります：Air-Gapまたは厳格にegress制御されたホスティング、ロールベースの文書アクセスを伴うユーザー単位認証、ingestおよびretrievalをカバーする改ざん防止監査ログ、保存時および転送時のend-to-end暗号化、chunkからソース文書まで遡れる決定論的データ系統、そしてソースストアからベクトルインデックス、キャッシュ済みembeddingまで伝播する文書化された削除パス。展開パターン（単一ユーザーラップトップ、On-Premサーバー、プライベートEUクラウド）は、どの統制が容易でどれが手間かを決めるだけで、統制が必要かどうかは決めません。**',
    quickAnswerTop: {
      en: {
        question:
          'ローカルRAGはデフォルトでGDPR準拠ですか？規制対象チームはどの展開パターンを選ぶべきですか？',
        answer:
          'ローカルRAGはデフォルトではGDPR準拠ではありません。On-Premでモデルを動かすことで越境データ移転の問題は解消し、processorリストは縮小しますが、GDPR第5、25、30、32、35条は依然として適用されます：適法性、データ最小化、監査ログ、処理の安全性、特別カテゴリの個人データを大規模に処理するシステムにおけるDPIA。単独のプロフェッショナルや単発の案件レビューには単一ユーザーラップトップ、5〜50ユーザーで数千件の文書を扱う部門単位のナレッジベースにはOn-Premサーバー、複数部門・複数法人にまたがる展開で完全Air-Gapより耐障害性を重視する場合はプライベートEUクラウド（ソブリンクラウド、顧客管理鍵、EU限定リージョン）を選んでください。どれを選んでも上記の6統制は同じで、変わるのは実装コストだけです。',
        bullets: [
          'ローカルホスティングは越境移転（第44〜49条）を解消しprocessorリストを縮小しますが、適法性、DPIA、データ主体の権利は単独では解決しません。',
          '単一ユーザーラップトップ — 単独の弁護士、医師、監査人、単発の案件レビューに最適。スケール時の監査が困難ですが、Air-Gapは最も簡単です。',
          'On-Premサーバー — 5〜50ユーザーの部門単位展開に最適。本格的な監査ログ、RBAC、バックアップ、災害復旧。IT負荷は最大です。',
          'プライベートEUクラウド — 耐障害性が必要な複数法人展開に最適。ソブリンリージョン+顧客管理鍵+顧客データを学習に使わない契約条項が必須です。',
          'GDPR第35条のDPIAは、特別カテゴリの個人データを大規模に処理する場合は展開パターンを問わず必須です。',
          '忘れられる権利の請求は、ソース文書、ベクトルインデックス、キャッシュ済みembeddingまで伝播させる必要があります。請求が来てからではなく、本番化前に削除パスを設計してください。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '展開パターン比較', anchor: '#deployment-comparison' },
      { label: '展開パターンの選択', anchor: '#which-deployment' },
      { label: 'なぜ機密データにローカルRAGか', anchor: '#why-local-rag' },
      { label: '6つの必須統制', anchor: '#required-controls' },
      { label: 'Air-Gapとegress制御', anchor: '#air-gap' },
      { label: '監査に耐えるaudit logging', anchor: '#audit-logging' },
      { label: 'chunkからソースまでのデータ系統', anchor: '#data-lineage' },
      { label: '暗号化とアクセス制御', anchor: '#encryption-access' },
      { label: '単一ユーザーラップトップパターン', anchor: '#laptop-pattern' },
      { label: 'On-Premサーバーパターン', anchor: '#on-prem-pattern' },
      { label: 'ベクトルデータベース選択肢', anchor: '#vector-db-comparison' },
      { label: 'プライベートEUクラウドパターン', anchor: '#private-cloud-pattern' },
      { label: 'EU AI Actの分類', anchor: '#eu-ai-act' },
      { label: 'DPIA要件（第35条）', anchor: '#dpia-requirements' },
      { label: 'ドイツ固有の留意点（Datenschutz）', anchor: '#germany-datenschutz' },
      { label: '本番化前コンプライアンスチェックリスト', anchor: '#compliance-checklist' },
      { label: 'よくある誤り', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**ローカルホスティングは必要だが十分ではありません。** 自社ハードウェア上でモデルとベクトルストアを動かすことで越境移転は解消しprocessorリストは縮小しますが、GDPR第5、25、30、32、35条は依然として適用されます。データが社内に留まっても、適法性、データ最小化、監査ログ、処理の安全性、DPIAは任意になりません。',
          '**展開パターンを問わず6つの統制は妥協できません：**Air-Gapまたは厳格なegress制御、ロールベースアクセスを伴うユーザー単位認証、改ざん防止監査ログ、保存時および転送時の暗号化、chunkからソース文書まで遡れる決定論的データ系統、ベクトルインデックスとキャッシュ済みembeddingを含む文書化された削除パス。',
          '**3つの展開パターンが規制対象ユースケースのほとんどをカバーします。** 単独プロフェッショナルや案件レビューには単一ユーザーラップトップ、5〜50ユーザーの部門単位ナレッジベースにはOn-Premサーバー、完全Air-Gapより耐障害性が重要な複数法人展開にはプライベートEUクラウド（ソブリンリージョン、顧客管理鍵）。',
          '**EU AI Actはほとんどのローカル RAGを「限定リスク」システムに分類します** — ただしretrievalが自動化された決定（信用スコアリング、雇用スクリーニング、給付資格判定）に供される瞬間、展開は高リスクに移行し、完全な適合性評価、市場投入後のモニタリング、人間の監督義務が発生します。',
          '**第35条のDPIAは必須です** — 特別カテゴリの個人データ（医療、法的、生体、政治、組合員）を大規模に取り込むRAG、または法的効果を持つ自動化決定を生成するシステムには。DPIAをスキップすれば、監査時の防御もスキップしたことになります。',
          '**忘れられる権利は、ほとんどの展開が落ちる削除テストです。** ソース文書は容易です。ベクトルインデックスは再構築可能です。キャッシュ済みembedding、retrievalログ、チャット履歴に保存された回答 — これらが見落とされる箇所であり、規制当局が必ず尋ねる箇所です。',
          '**Open-source embeddingモデルは原則としてGDPRセーフですが**、3条件付きです：(a)モデル重みを一度ダウンロードしてハッシュにピン留め、(b)inferenceは完全にローカルでテレメトリなし、(c)モデルカードとライセンスを確認し、機密業務利用と矛盾する条項がないことを確かめる。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**6つの必須統制：** Air-Gap、RBAC、監査ログ、暗号化、データ系統、削除パス。',
          '**3つの展開パターン：** 単一ユーザーラップトップ（単独プロフェッショナル）、On-Premサーバー（5〜50ユーザー）、プライベートEUクラウド（複数法人）。',
          '**DPIAは第35条で必須：** 特別カテゴリの個人データ（医療、法的、生体）を大規模に処理する場合。',
          '**EU AI Act：** ほとんどのローカルRAGは限定リスク。retrievalが自動化決定（信用、雇用、給付）に供されると高リスクに昇格。',
          '**忘れられる権利：** ソース文書、ベクトルインデックス、キャッシュ済みembedding、回答履歴まで伝播必須。',
          '**METIのAIガバナンス2024**は、機微情報を扱う日本企業に対しデータ主権を確保する展開を推奨。ローカル推論はその要件を構造的に満たします。',
          '**Open-source embeddingモデル**：重みのピン留め、完全ローカルinference、ライセンス確認の3条件下でのみGDPR準拠。',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: '展開パターン比較',
        content:
          'どのパターンもGDPR準拠にできます。変わるのは統制のコストと、何かが起きたときの故障モードです。ユーザー数、文書の機密度、耐障害性要件に合う最もシンプルなパターンを選んでください。',
        columns: ['統制', '単一ユーザーラップトップ', 'On-Premサーバー', 'プライベートEUクラウド'],
        rows: [
          {
            '統制': 'Air-Gap（外向き通信なし）',
            '単一ユーザーラップトップ': '簡単 — ネットワーク無効化',
            'On-Premサーバー': '可能 — VLAN+ファイアウォール',
            'プライベートEUクラウド': '困難 — egressのallowlistのみ',
          },
          {
            '統制': '監査ログ（誰が、何を、いつ）',
            '単一ユーザーラップトップ': '手動 — OSレベルのみ',
            'On-Premサーバー': '強力 — 集中ログパイプライン',
            'プライベートEUクラウド': '強力 — クラウドネイティブlogging',
          },
          {
            '統制': 'データ系統（chunk → ソース）',
            '単一ユーザーラップトップ': 'ローカルファイルのみ',
            'On-Premサーバー': '完全に追跡可能',
            'プライベートEUクラウド': '完全 — リージョン横断',
          },
          {
            '統制': 'EUデータレジデンシー',
            '単一ユーザーラップトップ': '本質的 — 物理所在地',
            'On-Premサーバー': '本質的 — 物理所在地',
            'プライベートEUクラウド': '構成 — ソブリンリージョン必須',
          },
          {
            '統制': 'ユーザー別RBAC',
            '単一ユーザーラップトップ': '単一ユーザー — 該当なし',
            'On-Premサーバー': 'IDプロバイダ+グループ',
            'プライベートEUクラウド': 'IAM+SSO+コレクション別ACL',
          },
          {
            '統制': 'バックアップとDR',
            '単一ユーザーラップトップ': '暗号化外付けディスク',
            'On-Premサーバー': 'テープまたはオフサイトバックアップ',
            'プライベートEUクラウド': 'クロスAZレプリケーション',
          },
          {
            '統制': '初期コスト',
            '単一ユーザーラップトップ': 'ハードのみ — 低',
            'On-Premサーバー': 'サーバー+統合 — 中',
            'プライベートEUクラウド': 'サブスク+セットアップ — 中',
          },
          {
            '統制': '継続コスト',
            '単一ユーザーラップトップ': 'なし — sysadmin工数',
            'On-Premサーバー': 'IT運用+電力+冷却',
            'プライベートEUクラウド': '月次経常',
          },
          {
            '統制': '最適なケース',
            '単一ユーザーラップトップ': '単独プロフェッショナル、案件レビュー',
            'On-Premサーバー': '5〜50ユーザー、部門ナレッジベース',
            'プライベートEUクラウド': '複数法人、耐障害性展開',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: '展開パターンの選択',
        content:
          '**正しい選択は、ユーザー数、文書の機密度、監査対応の緊迫度、社内のIT能力に依存します。** 以下の判断ショートカットがほとんどの実シナリオをカバーします。',
        columns: ['状況', '推奨'],
        rows: [
          {
            '状況': '案件を1件ずつレビューする単独の弁護士、医師、監査人',
            '推奨': '単一ユーザーラップトップ',
          },
          {
            '状況': '指名された3〜5名のレビュアーと終了日が決まったM&Aデータルーム',
            '推奨': '単一ユーザーラップトップまたはOn-Prem（文書量に応じて）',
          },
          {
            '状況': '規制当局通信アーカイブを共有する10〜30名のコンプライアンスチーム',
            '推奨': 'On-Premサーバー',
          },
          {
            '状況': '50名向けの臨床プロトコルアシスタントを構築する病院部門',
            '推奨': 'On-Premサーバー',
          },
          {
            '状況': '複数EU諸国の子会社にまたがる単一RAGを必要とするマルチエンティティグループ',
            '推奨': 'プライベートEUクラウド（ソブリンリージョン+顧客管理鍵）',
          },
          {
            '状況': '24/7稼働要件とDR計画を持つ保険会社',
            '推奨': 'プライベートEUクラウド',
          },
          {
            '状況': '機密または取扱制限データを持つ官公庁',
            '推奨': 'Air-Gapped On-Premのみ — クラウドは対象外',
          },
          {
            '状況': '6週間以内の規制当局向け監査防御',
            '推奨': 'On-Premサーバー（統制を実証する最速ルート）',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'なぜ機密データにローカルRAGか',
        content:
          '**クラウドLLM-as-a-Serviceに対するローカルRAGの優位はイデオロギーではなく、GDPRリスクアセスメントの形そのものです。** クラウドRAGは多くのユースケースで実用的ですが、機密業務データに対しては、ローカルRAGが構造的に排除する5つのリスクを追加します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルRAGは機密文書を自社ハードウェアに留めたままチームにAI検索を提供します — データは社外に出ず、第三者processorは触れず、越境移転の論点も生じません。',
          },
          {
            type: 'plain-terms',
            text: '法務チームが10,000件の案件ファイルを自然言語で検索できると想像してください — ただし文書はサーバルームを離れません。それがローカルRAGです：AIはあなたのハードウェア上で文書を読み、あなたのハードウェア上で質問に答え、何もどこにも送られません。コンプライアンス上の利点は機能ではなく、アーキテクチャです。',
          },
        ],
        items: [
          '**越境移転（第44〜49条）。** 個人データをEU域外のprocessorに送るには標準契約条項、移転影響評価、受領管轄に召喚権限が及ぶかという確かな回答が必要です。ローカルRAGはデータを移転しないため、論点が発生しません。',
          '**Sub-processorの増殖（第28条）。** クラウドLLMプロバイダはhyperscalerインフラ、コンテンツモデレーション、observabilityベンダーに依存しがちです。それぞれがリストアップ、契約、監査を要するsub-processorです。ローカルRAGはデフォルトでsub-processorが0です。',
          '**学習データ漏洩。** 多くのクラウドLLM規約は、有償のエンタープライズ枠で学習除外条項が確認されない限り、顧客プロンプトをモデル改善に使う権利を留保します。ローカルRAGは自社で重みを管理するモデルを動かし、ホストから何も出ません。',
          '**クライアント契約の機密保持条項。** 外部弁護士契約、M&A NDA、患者データ契約は、保護対象を第三者processorに送ることをしばしば禁じます。ローカルRAGは条項を完全に回避します。',
          '**召喚および司法手続によるエクスポージャ。** クラウドプロバイダに保管された文書はプロバイダ宛ての法的手続で強制提出され得て、controllerが事前通知を受けない場合もあります。社外に出ない文書は、あなた自身に対してしか強制できません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ローカルRAGがすべてのワークロードに適しているわけではありません。公開情報のリサーチ、マーケティング草稿の生成、オープンソースリポジトリへのコード補助 — これらはGDPRエクスポージャが低くモデル品質差が効くため、通常クラウドLLMの方が良い結果になります。本記事の主張は、機密業務データ（法務、医療、金融、人事、規制当局通信、企業秘密）に特化したものです。',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: '6つの必須統制',
        content:
          '**この6統制が床面です。** 規制対象の展開はすべて6つを必要とし、展開パターンは実装方法だけを変えます。1つでも省くと、監査が悪化する最も多い原因になります。',
        numberedItems: [
          {
            title: 'Air-Gapまたは厳格なegress制御',
            whyItMatters:
              '文書とembeddingが外向き通信で漏れないことを確認します — テレメトリSDK、モデル更新プローブ、クラッシュレポーター、コンテンツモデレーションコールバック、フォントの第三者CDNなど。ネットワークアクセスを完全に無効化（真のAir-Gap）するか、署名付き更新サーバーのみ許可するegress allowlistを運用してください。',
          },
          {
            title: 'ロールベースアクセスを伴うユーザー単位認証',
            whyItMatters:
              '「誰がどの文書にアクセスしたか」を、規制当局が尋ねる前に答えられる必要があります。IDプロバイダに対するSSO、グループベースのコレクションアクセス、案件で必要なら文書単位のACL。共有アカウントは統制ではなく、起こるのを待つ監査失敗です。',
          },
          {
            title: 'ingestおよびretrievalをカバーする改ざん防止監査ログ',
            whyItMatters:
              '各文書について：誰がアップロードしたか、いつ、ソースパス、ハッシュ。各クエリについて：誰が尋ねたか、何を尋ねたか（ロギングポリシーが許す場合）、どのchunkがretrieveされ、どの文書IDから来たか、どの回答が返ったか。ログは改ざん検知可能（append-only、署名、規制当局の調査ウィンドウをカバーする保管期間）でなければなりません。プロンプトレベルの監査トレイル — バージョン管理、変更履歴、ロールバック — については[プロンプトのバージョン管理ワークフロー](/ja/prompt-engineering/prompt-version-control-workflows)を参照してください。',
          },
          {
            title: '保存時および転送時の暗号化',
            whyItMatters:
              'ホストのディスク暗号化、内部のサービス間通信のTLS、盗難ラップトップや侵害された管理者アカウントを生き延びる鍵管理。クラウド展開では顧客管理鍵。これがないと、デバイス紛失が第33条の通知義務違反に転じます。',
          },
          {
            title: 'chunkからソースまでの決定論的データ系統',
            whyItMatters:
              'retrieveされた各chunkは、ソース文書、ページ、セクション、バージョンに遡れる必要があります。これにより(a)回答の検証、(b)削除請求の履行、(c)生成された要約が法廷で問われたときの防御が可能になります。「どのchunkがどの回答を生んだか再現できない」は規制当局への許容回答ではありません。',
          },
          {
            title: 'ベクトルインデックスおよびキャッシュ済みembeddingを含む文書化された削除パス',
            whyItMatters:
              '忘れられる権利の請求は、ソースストアからベクトルインデックス、キャッシュ済みembedding、retrievalログの保管まで伝播する必要があります。多くの展開はソース削除はきちんと処理しますが、残りを忘れます。本番化前に削除runbookを文書化し、合成データでリハーサルしてください。',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-Gapとegress制御',
        content:
          '**Air-Gapはホストに外向き経路がないこと、egress制御は厳格にallowlistされた経路があることを意味します。** どちらも許容ですが、運用が支えられる最強モデルを選んでください。',
        items: [
          '**真のAir-Gap** — DHCPなし、公的宛先へのDNS解決なし、外向きTCPなし。更新は管理者が物理的に接続する署名付きメディア経由。機密業務、特定の病院ネットワーク、悪意ある依存関係を脅威モデルに含む展開に最適です。',
          '**Egress allowlist** — 外向き通信は名前付き宛先の小リスト（モデル更新サーバー、IDプロバイダ、内部コレクタへのログフォワーダ）にのみ許可。それ以外はファイアウォールでドロップ。規制対象の部門展開のほとんどでは、これが現実的なデフォルトです。',
          '**プラットフォームで確認すべき点：** デフォルトのテレメトリゼロ、inference中の外向き呼び出しなし、UIにフォントCDNなし、ペイロードを送るクラッシュレポーターなし。Little Snitch等のツールやパケットキャプチャでテストベンチで検証してから本番昇格してください。',
          '**更新ガバナンス** — モデル重み、embedder重み、アプリケーションコード、OSパッチはすべて統制された更新ウィンドウを通ります。更新を昇格する管理者が書面でサインオフし、変更がログに残ります。',
          '**よくあるAir-Gap破れ：** 第三者UIコンポーネントに同梱されたanalytics SDK、アプリケーションchromeのフォントCDN参照、起動時に走る「アップデート確認」プローブ。だから検証ステップが重要です — デフォルトを信用してはいけません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'アプリケーションを開いたまま24時間のパケットキャプチャをホストで実行してください。allowlistにない外向きはすべて指摘事項です。アプリ更新のたびに繰り返してください — リリースノートは新しい外向き呼び出しを過小報告するのが常です。',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: '監査に耐えるaudit logging',
        content:
          '**監査ログは規制当局が最初に読む成果物です。** retrieveのたびに2つの問いに答える必要があります：誰が尋ねたか、システムが何を返したか。それなしでは言葉で議論することになります。適切なロギングがあれば、領収書を見せられます。',
        items: [
          '**Ingestイベント：** 文書ID、ハッシュ（SHA-256）、ファイル名、ソースパス、アップロード者、タイムスタンプ、分類タグ、サイズ、ページ数、所有グループ、保管クラス。ingest時に各文書をタグ付けしてください — 大規模コーパスの遡及分類は困難で完全になることは稀です。',
          '**Retrievalイベント：** クエリID、ユーザーID、タイムスタンプ、retrieveされたchunk ID（およびその由来文書ID）、retrievalスコア、最終回答ハッシュ、モデル識別子、embedder識別子、使用したtop-K。クエリテキストそのものは機微 — 処理の目的が許す場合のみログし、そうでなければハッシュとタイムスタンプのみログしてください。',
          '**管理イベント：** モデル昇格、embedder変更、インデックス再構築、ユーザー/グループ変更、ACL変更、アクセスポリシー変更。各イベントは責任ある管理者によって署名されます。',
          '**改ざん耐性：** append-onlyログ、ハッシュチェーン（各エントリは前エントリのハッシュを参照）、out-of-band署名鍵、別管理者または書込専用メディアに保管された別コピーとの定期的整合確認。',
          '**保管期間：** 規制当局の調査ウィンドウに整合 — 最低でも案件の保管期間、規制業界では一般的に6〜7年、業界規則がある場合はそれ以上。',
          '**パイプライン：** アプリケーションは構造化イベントを発し、forwarderが書込制限された別ログストアへ送ります。アプリケーションサーバーはログエントリを削除・書換できる権限を絶対に持つべきではありません — 職務分離がログを信頼性のあるものにします。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'クエリテキストのロギングは独自のGDPR論点を生みます — クエリ自体が個人データを含み得ます（例：「患者Xの病歴を要約せよ」）。設計時に、処理の目的がクエリロギングをカバーするか決めてください。カバーしない場合は、監査と運用診断に必要なメタデータのみログします。',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'chunkからソースまでのデータ系統',
        content:
          '**データ系統は他のすべての統制の背骨です。** 系統がなければ削除請求は失敗し、回答検証は不可能、監査トレイルは崩壊します。最初のingestから組み込んでください、後付けではなく。',
        items: [
          '**文書レベルの系統：** 各文書は安定した内部ID、コンテンツハッシュ、ingestタイムスタンプ、所有者、分類、保管クラスを持ちます。原本ファイルはソースストアに留まり、RAGシステムは参照のみを保持します。',
          '**chunkレベルの系統：** 各chunkは親文書ID、ページ（PDF）、セクション（構造化文書）、文字オフセット、長さ、chunking戦略バージョンを参照します。再chunkするとき（必ず行います）、古いchunkはin-place削除ではなくtombstoneにし、古いretrievalログが解決可能なまま保ちます。',
          '**embeddingレベルの系統：** 各embeddingベクトルはchunk IDとembedder識別子を参照します。embedderを変えるとき、新しいembeddingが検証され、それを参照する案件がクローズされるまで古いベクトルを保持し、その後にパージします。',
          '**回答レベルの系統：** 各生成回答は、それを生んだchunk ID、モデル識別子、プロンプトテンプレートバージョン、タイムスタンプを参照します。「この回答はどこから来たか」をユーザーが尋ねたとき、システムはchunk → 文書 → ページを1クリックで解決します。',
          '**系統を壊さない再インデックス：** 再構築は文書IDを保持し、chunking戦略バージョンをインクリメントします。古いchunk IDはretrievalログ内で解決可能なまま残り、ライブインデックスが進んでも問題ありません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '系統チェーンを四半期ごとにテストしてください。監査ログからランダムにretrievalを選び、chunk ID → 文書ID → ソースストアの原本 → 保管クラス、と遡ります。どこかが壊れていれば、次の規制当局検査の前にスキーマを直してください — 検査中ではなく。',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: '暗号化とアクセス制御',
        content:
          '**保存時暗号化、転送時暗号化、既存のIDプロバイダにマップするアクセス制御。** よく理解された統制です。失敗モードは選んだ層を雑に実装することではなく、3層のうち1つを忘れることです。',
        items: [
          '**保存時暗号化** — ホストのフルディスク暗号化（Linux：LUKS、Windows：BitLocker、macOS：FileVaultはラップトップ向け）。サーバーではベクトルストアやingestステージング領域のパーティションも暗号化してください。クラウド展開には顧客管理鍵を、ポリシーに従い鍵ローテーション。',
          '**転送時暗号化** — サービス間ホップごとにTLS、localhost上でも。業界ベースラインに合わせた暗号スイート方針。脅威モデルが正当化する場合はMutual TLS — クラウド展開のサーバー間が典型例。',
          '**認証** — 既存IDプロバイダ（OIDC、SAML）に対するSSO。本番にはローカルアカウントなし。管理権限または機微コレクションへのアクセスを持つユーザーにはMFAを強制。',
          '**認可** — コレクションレベルのグループベースアクセス、案件で必要な場合は文書レベルACL（M&Aデータルーム、雇用調査など）。retrievalパイプラインはクエリ時にACLを強制する必要があります — UIだけではダメです。文書を見られないユーザーにはchunkも返ってはいけません。',
          '**管理アクセス** — インデックスを読む・再構築する、監査ログを見る、ACLを変える権限を持つアカウントには特権アクセス管理（PAM）。常時管理者権限より、ログ付き正当化を伴うjust-in-time昇格が優れています。',
          '**エンドポイントセキュリティ** — ラップトップ展開には管理デバイス（MDM登録、暗号化、画面ロックポリシー強制）。文書ストアが復号されたまま無人でカフェに置かれた単独プロフェッショナルのラップトップは、書きたくないGDPR違反です。',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: '単一ユーザーラップトップパターン',
        content:
          '**単一ユーザーラップトップは最もAir-Gap化しやすく、最もスケールしにくいパターンです。** 単独プロフェッショナルや単発の案件レビューに最適、単一ユーザーを超えて存続する必要のあるものや退職に耐える必要のあるものには不適です。',
        items: [
          '**ハードウェア** — フルディスク暗号化、専用GPU（または近年のunified-memoryマシン）、最低32 GBのRAMを備えたワークステーションクラスのラップトップ。モデルとembedderはベクトルストアキャッシュとともにメモリに収まる必要があります。VRAMによるハード要件とモデル選択については[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide-2026)を参照してください。',
          '**ソフトウェア** — ローカルで動く自己完結型のデスクトップRAGアプリ、重みを一度ダウンロードしハッシュにピン留めしたOpen-source LLM、Open-source embedder、暗号化ディスク上のローカルベクトルストア。ローカルRAGに適したオープンソースモデルの比較は[Ollama向けトップオープンソースモデル](/ja/local-llms/top-open-source-models-ollama)を参照してください。',
          '**ネットワークposture** — 業務中はAir-Gap、明示的な署名付き更新時のみ再接続。OSファイアウォールをデフォルトで全外向きdrop、更新ワークフロー用に明示的例外を作成してください。',
          '**文書の取り扱い** — 暗号化ディスク上のソース文書、案件ごとの分離フォルダ構造、別場所保管の外付けディスクへの週次暗号化バックアップ。',
          '**監査posture** — OSレベルの監査ログ（ログイン、ファイルアクセス、周辺機器イベント）が床面。アプリケーションレベルイベントはOn-Premパターンの方が容易ですが、ラップトップパターンではOSログを主記録として扱い、案件ごとの手書き記録で補完します。',
          '**限界** — 単一ユーザーラップトップはマルチユーザープラットフォームではありません。ラップトップやアカウントを共有する、文書ストアを同僚のマシンにコピーするのは、監査postureと適法性評価の両方を壊します。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '機密案件を扱う単独プロフェッショナルにとって、単一ユーザーラップトップパターンは利用可能な最強のプライバシーpostureです — どのクラウドより良く、多くのOn-Prem展開より強固です。トレードオフは運用面：ラップトップが故障すると、案件はバックアップ規律の復旧時間を継承します。',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'On-Premサーバーパターン',
        content:
          '**On-Premサーバーは規制対象の部門単位RAGの主役パターンです。** 5〜50ユーザーと数千件の文書にスケールし、適切な監査ロギングをサポートし、物理的境界内に留まります。代償は本物のIT運用作業です。',
        items: [
          '**ハードウェア** — エンタープライズGPU 1〜2基（小規模コーパスならワークステーションGPUも可）、冗長化ディスク、ECCメモリ、UPS搭載のサーバー。生コーパスの2〜4倍のストレージを、ベクトル、インデックス、ログ、バックアップ向けに見込んでください。',
          '**ネットワーク** — 企業ファイアウォール背後の専用VLAN、脅威モデルに応じてegress allowlistまたは完全Air-Gap。社内アクセスは企業ネットワーク経由のみ、公的ingressなし。',
          '**ソフトウェアスタック** — セルフホスト型RAGプラットフォーム（スタンドアロンのサーバーイメージかコンテナ化展開）、チャットモデルとしてのOpen-source LLM、Open-source embedder、コーパスサイズに応じたベクトルストア。アプリケーションサーバー、ベクトルストア、ログforwarderは別プロセス・別サービスアカウントで動作させます。',
          '**ID** — 企業IDプロバイダに対するフェデレーション、グループメンバシップがコレクションアクセスを駆動。機微コレクションは追加承認ワークフローでゲートします。',
          '**バックアップとDR** — 文書ストアとベクトルインデックスの夜次インクリメンタルバックアップ、週次フルバックアップ、ITが保持するオフサイトコピー。文書化された復元runbookを少なくとも年1回テスト。',
          '**運用** — 変更管理ポリシーに従ったパッチウィンドウ、四半期アクセスレビュー、忘れられる権利の請求向けに練習済み削除runbook、系統を保持するモデル・embedderアップグレードパスの文書化。',
          '**容量計画** — 数千件の文書と5〜50同時ユーザーは、単一のmid-range GPUサーバーで快適に収まります。それを超えるなら、より高性能なホストかプライベートクラウドパターンへの移行を計画してください。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'On-Prem RAGは非技術的理由で最も失敗しやすいパターンです：一度も復元されたことのないバックアップ、IT職員間で共有される管理者アカウント、誰もテストしていないUPS、2か月静かにイベントを落としているログforwarder。技術的統制は運用衛生より易しいのです。',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'On-Prem RAG向けベクトルデータベース選択肢',
        content:
          '**ベクトルストアの選択がコンプライアンスを決めることはまれですが、運用コスト、スケール上限、削除runbookのクリーンさを左右します。** 規制対象展開のほとんどはこの6つのいずれかを選びます。',
        columns: ['ベクトルDB', 'タイプ', 'EUセルフホスト', '最適なRAGパターン'],
        rows: [
          {
            'ベクトルDB': '**Chroma**',
            'タイプ': 'オープンソース、軽量',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': 'ラップトップ+小規模On-Prem',
          },
          {
            'ベクトルDB': '**Qdrant**',
            'タイプ': 'オープンソース、高性能',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': 'On-Premサーバー、フィルタリング重視',
          },
          {
            'ベクトルDB': '**Weaviate**',
            'タイプ': 'オープンソース、フル機能',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': 'On-Prem+ハイブリッドサーチ',
          },
          {
            'ベクトルDB': '**Milvus**',
            'タイプ': 'オープンソース、エンタープライズ',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': '大規模On-Prem',
          },
          {
            'ベクトルDB': '**pgvector**',
            'タイプ': 'PostgreSQL拡張',
            'EUセルフホスト': '✅',
            '最適なRAGパターン': 'すでにPostgresを使うチーム',
          },
          {
            'ベクトルDB': '**Pinecone**',
            'タイプ': 'マネージドSaaS',
            'EUセルフホスト': '⚠️ US-hosted',
            '最適なRAGパターン': 'プライベートEUクラウドのみ（留保あり）',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'プライベートEUクラウドパターン',
        content:
          '**プライベートEUクラウドパターンは、ソブリンリージョンクラウドプロバイダ、顧客管理鍵、EU限定データレジデンシー、顧客データへのAI学習禁止の契約条項を採用します。** 複数法人展開、複数リージョンの耐障害性要件、真のOn-Prem運用能力を持たないチームに最適です。',
        items: [
          '**プロバイダ選定** — hyperscalerのEUソブリンオファリングか欧州系クラウドプロバイダ。DPAは全sub-processorをリストアップ必須、EEA外のsub-processorがいる場合は移転メカニズムを示す必要があります。Schrems II型の移転影響評価は、直接のprocessorがEU所在でもファイルに含めます。',
          '**リージョン** — EU限定、明示的なデータレジデンシー保証付き。クロスリージョンレプリケーションは他のEUリージョンのみ。バックアップ目的でも一時的でもUSリージョンへのfailoverは不可。',
          '**暗号化** — ローテーション付き顧客管理鍵、プロバイダがサポートする場合はbring-your-own-key、鍵アクセスイベントはクラウドプロバイダの運用ログとは別に記録。',
          '**ネットワーク** — 公的ingressなしのプライベートVPC、企業ネットワークからの専用接続またはVPN経由のみアクセス、外向き依存にはegress allowlist。',
          '**ID** — 企業IdPに対するフェデレーション、共有サービスアカウントではなくユーザーIDに紐付くクラウドネイティブIAM、retrievalパイプラインで強制されるコレクション別ACL。',
          '**Logging** — クラウドネイティブの監査ログを既存SIEMに供給、アプリケーション監査イベントは別取込、規制当局期待に応える改ざん耐性保管。',
          '**契約** — DPAは第28条準拠、sub-processor列挙、必要に応じてSCCs対処、LLM重みおよび付随サービス（検索、テレメトリ、サポート）をカバーする明示的な学習禁止条項を含む必要があります。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'プライベートEUクラウドパターンは第三者processorを使うため On-Premより寛容に見えます — しかしソブリンリージョン、顧客管理鍵、契約上の学習禁止条項、適切なegress制御を備えれば、可用性と監査postureの両面でOn-Premに匹敵または上回ります。コンプライアンスファイルは厚くなりますが、運用リスクは小さくなります。',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'EU AI Actの分類：限定リスク vs 高リスク',
        content:
          '**ほとんどのローカルRAG展開はEU AI Act上の限定リスクAIシステムです — しかしretrievalが人に影響する自動化決定に供される瞬間、分類は高リスクへスライドし、義務が倍増します。** 構築前に分類してください。',
        items: [
          '**限定リスク（ほとんどのローカルRAG）** — 文書をretrieve・要約して人を補助し、人が判断します。義務は主に透明性：ユーザーはAIと対話していることを認識する必要があり、生成コンテンツはそのことが識別可能で、操作的・欺瞞的設計は禁止。',
          '**高リスク** — retrievalがActで列挙された領域（信用スコアリング、雇用スクリーニング、教育入学、必須公的サービス、法執行、移民、司法、生体識別、重要インフラ）の自動化決定に供されるケース。治療を推奨する臨床意思決定支援RAGは高リスク。臨床プロトコル要約RAGで医師がガイドラインを速く読むのを助けるものは高リスクではありません。',
          '**高リスクの義務** — ライフサイクルにわたるリスクマネジメントシステム、データガバナンス（学習・検証・テストデータの文書化）、技術文書、自動イベントロギング、ユーザーへの透明性と情報、人間の監督、精度と頑健性、上市前の適合性評価、市場投入後モニタリング。',
          '**汎用AIの考慮** — 汎用LLM（オープンソース問わず）の利用は、高リスク義務をモデルプロバイダに移しません。デプロイヤ（あなたの組織）が、そのモデルで構築するシステムの高リスク義務を負います。',
          '**禁止行為** — 社会スコアリング、無差別な顔画像スクレイピング、職場・学校での感情認識、特定のリアルタイム生体カテゴリ化。どれだけローカルで動かそうと、これらは対象外です。',
          '**監査成果物としての文書** — 高リスクシステムに必要な技術ファイルは一度きりの納品物ではなく、生きた文書です。変更管理プロセスと連動させ、モデル昇格、embedder変更、ACL変更ごとに反映させてください。',
        ],
        callouts: [
          {
            type: 'note',
            text: '高リスクと限定リスクの境界はユースケースが引き、技術ではありません。同じベクトルストアと同じモデルが、研究アシスタント展開では限定リスクで、HRスクリーニング展開では高リスクになり得ます。プラットフォーム単位ではなくユースケース単位で分類してください。',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DPIA要件（第35条）',
        content:
          '**データ保護影響評価（第35条）は、データ主体に高リスクをもたらす可能性のある処理に対して必須です。** 規制対象のローカルRAGのほとんどが範囲内です。DPIAをコンプライアンスの後付け成果物ではなく、設計ドキュメントとして扱ってください。',
        items: [
          '**必須となるとき** — 法的効果を伴うプロファイリングを含む系統的かつ広範な評価、特別カテゴリの個人データ（医療、法的、生体、人種、政治、宗教、組合）の大規模処理、公的領域の系統的監視。各国規制当局がDPIAを必ず要する処理リストを公表しています — 自分のものを確認してください。',
          '**DPIAの範囲** — 目的および適法性、処理活動の記述、必要性と比例性、データ主体へのリスク評価、緩和策と残存リスク、DPOとの協議、残存リスクが高い場合は処理開始前に規制当局と協議。',
          '**RAG固有のリスク：** retrieveされたchunkからの個人再識別、人に影響する不正確な情報の生成、ログやバックアップ経由の漏洩、忘れられる権利の削除完全性、コレクション間の汚染、power userへの過大なアクセス。',
          '**文書化すべき緩和策** — 上記の6統制、加えて適法性が同意または正当な利益の場合のchunkレベルの黒塗り・仮名化、リハーサル証拠付き削除runbook、定義されたケイデンスのアクセスレビュー。',
          '**レビュアー** — DPOが承認、緩和後の残存リスクが高いままなら規制当局と協議。署名されたDPIAは、システムが高リスクでもある場合はEU AI Act適合文書とともに技術ファイルへ。',
          '**生きた文書** — コーパスが大きく拡張するとき、モデルやembedderが変わるとき、アクセス境界が変わるとき、またはベースラインとして毎年DPIAを再実施。変更管理プロセスに連動させてください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'プロジェクト2週目に書かれるDPIAは計画ツールです。10週目に書かれるDPIAは防御文書です。前者の方がはるかに有用で、最終残存リスクを下げる設計変更を浮上させがちです。デプロイ後ではなく、調達決定前にDPIAを始めてください。',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'ドイツ固有の留意点（Datenschutz）',
        content:
          '**ドイツのデータ保護実務は、GDPRベースラインの上にBDSG-Neu、業界別規則、BSI-Grundschutzバウシュタイン、Betriebsratの共同決定権を重ねます。** 一般的なGDPRを満たすRAG展開でも、これらを見落とすとドイツのレビューで落ちることがあります。',
        items: [
          '**Betriebsratの共同決定** — §87 BetrVGにより、従業員のパフォーマンスや行動を監視するシステムは、展開前にBetriebsratとの合意を要します。従業員作成コンテンツ（メール、社内文書）に対するRAGは典型的にこれを発動させます。設計時にBetriebsratを巻き込み、合意（Betriebsvereinbarung）を適法性ファイルに含めてください。',
          '**業界別の守秘** — §203 StGBは職業上の守秘義務違反（弁護士、医師、税理士、監査人）を犯罪化します。守秘義務に拘束されないスタッフや外部processorに保護対象クライアントデータをさらすRAG展開は、民事ではなく刑事問題になり得ます。これらの業界ではOn-PremまたはAir-Gappedパターンが安全な選択です。',
          '**TelemediengesetzおよびTTDSG** — エンドユーザーデバイスに触れる外向きテレメトリはGDPRだけでなくTTDSGにも規律されます。Air-Gapはこの問いを取り除きます。egress制御展開では、外向き呼び出しが同意済み、必要、または厳格に技術的なものであることを検証する必要があります。',
          '**BSI-Grundschutzバウシュタイン** — 行政機関やKRITIS事業者には、BSI-Grundschutz-Kompendiumが拘束的な基準を提供します。中堅企業でも、OPS.1.2.4（クラウド利用）、OPS.2.1（アウトソーシング）、APP.4.4（Webアプリ）等のバウシュタインはアーキテクチャ文書の有用な参照になります。',
          '**監督機関（連邦・州レベル）** — 民間部門のデータ保護監督は州レベルで組織されます。第36条に基づく協議が必要なら、所管のLandesbeauftragte für Datenschutzに相談してください。',
          '**文書言語** — ドイツの監督機関は英語の文書を受け付けますが、主要なユーザー向け成果物（プライバシー通知、透明性開示、Betriebsrat合意）は法的・実務的理由からドイツ語で書くべきです。',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: '本番化前のコンプライアンスチェックリスト',
        content:
          '**本番ロールアウト前にこのリストを最後まで歩いてください。** 各項目は実監査からの実故障モードです。実際に使われるよう意図的に短くしてあります。',
        items: [
          '☐ **適法性が文書化されている** — 各カテゴリのソースデータについて：同意、契約、法的義務、生命に関わる利益、公的任務、または比例衡量を伴う正当な利益。',
          '☐ **DPIAがDPOによって承認**、リハーサル済み削除runbookが添付されている。',
          '☐ **処理活動の記録（第30条）** が更新され、RAGシステム、データカテゴリ、保管、受信者、移転メカニズム（ローカルRAGでは典型的になし）を含む。',
          '☐ **6統制がエンド・ツー・エンドで検証** — Air-Gapまたはegress allowlist、RBAC、監査ログ、暗号化、系統、削除パス。',
          '☐ **外向きパケットキャプチャ** が24時間soakテストでクリーン、アプリ更新ごとに繰り返される。',
          '☐ **IDプロバイダ統合** が各アクセス層の実ユーザーでテスト済み、機微コレクションアクセスは別の昇格を要する。',
          '☐ **バックアップが取得され、復元が実際にテスト** されている — ステータスパネルでの確認だけでなく分離ハードでの実テスト。',
          '☐ **忘れられる権利runbookがリハーサル済み** — 合成データでソースストア、ベクトルインデックス、キャッシュ済みembedding、retrievalログ保管をカバー。',
          '☐ **EU AI Act分類** 確認済み（限定リスク vs 高リスク）、高リスクなら技術ファイル準備済み。',
          '☐ **ベンダー契約（あれば）レビュー済み** — DPAが第28条準拠、sub-processor列挙、顧客データをカバーする学習禁止条項。',
          '☐ **Betriebsrat合意** が、従業員作成コンテンツが範囲に含まれる場合に存在する（ドイツ、類似のEUルールが他国にも）。',
          '☐ **透明性通知** がユーザー向け平易な言葉で起草され、AI支援、human-in-the-loop、データフローを説明。',
          '☐ **インシデント対応runbook** がRAG固有シナリオを含めて更新 — インデックス漏洩、ログ改ざん、削除失敗、下流系統を壊すモデル交換。',
          '☐ **四半期アクセスレビュー** がスケジュール・割当済み、本番化前に最初のレビューがカレンダーに。',
          '☐ **年次DPIAリフレッシュ** がスケジュール済み、変更管理プロセスに連動。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある誤り',
        items: [
          '**誤り1：「ローカル」を「準拠」の同義語として扱う。** On-Prem運用は移転とprocessorの問いを解きますが、適法性、DPIA、監査ロギング、データ主体権は解きません。コンプライアンスは多層プログラムであり、展開選択ではありません。',
          '**誤り2：システムが「ただの検索ツール」だからとDPIAをスキップする。** 特別カテゴリの個人データを大規模にingestする検索ツールこそが第35条の対象です。DPIAをスキップすれば監査時の防御もスキップしたことになります。',
          '**誤り3：適法性を確認せずにクエリテキストをログする。** クエリは個人を参照すれば自身が個人データです。設計時に処理目的がクエリロギングをカバーするか決め、カバーしないならハッシュとメタデータのみログしてください。',
          '**誤り4：削除runbookでキャッシュ済みembeddingを忘れる。** ソース削除は機能します。ベクトルインデックス再構築も機能します。プラットフォームがパフォーマンス目的で追加したキャッシュ層、retrievalログ内のembedding指紋、チャットストアの回答履歴は見落とされる箇所です。',
          '**誤り5：power userにコレクションACLのバイパスを許す。**「管理者は全部見える」は便利でとても一般的ですが、監査が悪化する単独最大の理由でもあります。特権アクセス自体がアクセス制御され、時間制限され、利用ごとに正当化される必要があります。',
          '**誤り6：複数案件・クライアントで1ワークスペースを使い回す。** 引用とコンテキストの相互汚染は、外部に見られる前から守秘失敗です。1ワークスペース1案件・1クライアント、ACL分離、保管分離。',
          '**誤り7：Air-Gapを買って、テストに私物スマホを差す。** Air-Gap境界はデータを越境させ得る人を含む必要があります。エンドポイントポリシーは統制の一部であり、別件ではありません。',
          '**誤り8：モデルとembedderの選択を「設定して放置」と扱う。** すべてのアップグレードはDPIA、系統、監査トレイルへの含意を持つ変更管理イベントです。最初の本番展開前にアップグレードワークフローを計画してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GDPR全文（公式）](https://gdpr-info.eu/) — 一般データ保護規則の完全テキスト、条文ごとの注釈付き。',
          '[EU AI Act全文](https://artificialintelligenceact.eu/) — リスク分類フレームワークを含む完全な規則テキスト。',
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — AIリスク評価に適用可能な米連邦ガバナンスフレームワーク。',
          '[BDSG-Neu（ドイツ連邦データ保護法）](https://www.gesetze-im-internet.de/bdsg_2018/) — 業界別追加を含むGDPRのドイツでの実装。',
          '[EDPBによるDPIAガイドライン](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — DPIAをいつ・どう実施するかに関する欧州データ保護理事会の指針。',
          '[METI AI事業者ガイドライン](https://www.meti.go.jp/) — 経済産業省のAIガバナンス指針、日本企業のAI展開に対するベストプラクティス。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'RAGをローカルで動かせば自動的にGDPRを満たしますか？',
            a: 'いいえ。ローカルホスティングは越境移転の問いを解きprocessorリストを縮小しますが、第5条のGDPR原則（適法性、公正性、透明性、目的制限、データ最小化、正確性、保管制限、完全性と機密性、説明責任）は依然適用されます。第25条（データ保護バイデザインおよびバイデフォルト）、第30条（処理活動記録）、第32条（処理の安全性）、第35条（DPIA）はモデルがどこで動くかに関係なく適用されます。ローカルRAGは強力な出発点であって、完成したコンプライアンスpostureではありません。',
          },
          {
            q: 'ローカルRAG展開のEU AI Act準拠には何が必要ですか？',
            a: 'ユースケースを限定リスクか高リスクに分類してください。ほとんどのretrievalアシスタント展開は限定リスクで、透明性義務（ユーザーがAIとの対話を認識、生成コンテンツが識別可能）を要します。retrievalが列挙領域（信用、雇用、教育、公的サービス、法執行、移民、司法、生体、重要インフラ）の自動化決定に供される瞬間、展開は高リスクとなり、完全な義務（リスクマネジメントシステム、データガバナンス、技術文書、自動イベントロギング、透明性、人間の監督、精度と頑健性、適合性評価、市場投入後モニタリング）が適用されます。',
          },
          {
            q: 'ローカルRAGにDPIAは必要ですか？',
            a: '第35条のDPIAは、データ主体に高リスクをもたらす可能性のある処理に必須です — 特別カテゴリの個人データ（医療、法的、生体、人種、政治、宗教、組合）の大規模処理や、法的効果を伴う系統的プロファイリングを含みます。規制対象のローカルRAG（法務、医療、金融、HR調査）のほとんどが範囲です。早期にDPIAを実施し、設計ドキュメントとして扱い、緩和策 — 特に削除runbook — を本番化前にリハーサルしてください。',
          },
          {
            q: 'ローカルRAG展開を部門間で共有できますか？',
            a: 'はい、注意して。コレクションレベルのアクセス制御、単一IDプロバイダに対するユーザー単位認証、各部門の利用に明確な適法性が床面です。DPIAは最も広い処理目的セットをカバーする必要があります。ある部門が異なる適法性を要する場合（例：HR調査が正当な利益で、臨床スタッフが公的任務で運用するとき）、別コレクション・別アクセスグループの方が、複雑なACLを持つ単一コレクションより防衛しやすいです。',
          },
          {
            q: '誰がどの文書にアクセスしたかをどう監査しますか？',
            a: '各retrievalをユーザーID、タイムスタンプ、retrieveされたchunk ID、その由来文書IDとともにログします。イベントを、アプリケーションサーバーとは別の管理下にある書込制限ログストアへ転送します（職務分離）。改ざん検知のためにハッシュチェーン付きappend-onlyストレージを使用します。保管期間は規制当局の調査ウィンドウと業界別ルールに整合させます — 規制業界では6〜7年が一般的です。',
          },
          {
            q: 'Open-source embeddingモデルはGDPRセーフに使えますか？',
            a: '原則として可能、3条件付きで。第一に、重みは一度ダウンロードしてハッシュにピン留めし、何が動いていたか証明できるように。第二に、inferenceはテレメトリや外向き呼び出しなく完全にローカル — 文書だけでなくパケットキャプチャで検証してください。第三に、モデルカードとライセンスをレビューし、機密業務利用と矛盾する条項（一部のopen-weightライセンスはデータ種別やユースケースに制限を付けます）がないことを確認します。規制対象展開の現実的なデフォルトは、検証済みembedderの小リストをallowlistし、アップグレードごとに再レビューすることです。',
          },
          {
            q: 'AI生成出力のデータ系統はどうなりますか？',
            a: '各生成回答は、それを生んだchunk ID、モデル識別子、プロンプトテンプレートバージョン、タイムスタンプを参照する必要があります。chunkはさらに文書IDへ、文書IDはソース文書へ解決されます。このチェーンが、回答の検証、異議に対する防御、削除請求の履行、後の結果再現を可能にします。それなしでは「AIがそう言った」が監査時の防御となり、それは防御ではありません。',
          },
          {
            q: 'クライアント機密文書にローカルRAGを使えますか？',
            a: 'しばしば可、時に不可。多くの外部弁護士契約、M&A NDA、患者データ契約は、データが定義された境界を越えず特定の統制が満たされる限り、AI支援レビューを許可します。ローカルRAGは構造的に境界要件を満たします。契約固有の統制リスト（暗号化、アクセス、監査、保管、違反通知）は引き続き遵守する必要があります。契約がAI処理を完全に禁じる場合、どの展開パターンも修復できません — 禁止はAIがローカルかリモートかを問わず適用されます。',
          },
          {
            q: 'コンプライアンスにはどのloggingが必要ですか？',
            a: 'Ingestイベント（文書ID、ハッシュ、ソース、アップロード者、タイムスタンプ、分類）、Retrievalイベント（ユーザーID、クエリメタデータまたはハッシュ、retrieveされたchunk ID、回答参照、モデル/embedder識別子）、管理イベント（モデル昇格、embedder変更、ACL変更、ユーザー/グループ変更）、運用イベント（バックアップ、復元、鍵ローテーション）。すべてのイベントを別ログストアへ転送、append-only、ハッシュチェーン化、案件・業界要件に従って保管。',
          },
          {
            q: 'RAGで忘れられる権利の請求にどう対応しますか？',
            a: '各層を通して削除を導く文書化されたrunbookで：ソース文書ストア、ベクトルインデックス、キャッシュ済みembedding、retrievalログ保管（適法性がログエントリ削除を許す場合）、チャット履歴に保存された回答。ソース削除は単純、ベクトルインデックス再構築はよく理解されています。キャッシュ済みembeddingと回答履歴がほとんどの展開が見落とす箇所です。runbookを合成データでリハーサルし、リハーサルを文書化し、runbookをインシデント対応プロセスに連動させて、実請求がリハーサル済みシーケンスを発動し即興にならないようにしてください。',
          },
          {
            q: 'ローカルLLMデプロイメントでMETI AIガバナンス2024をどう適用しますか？',
            a: '経済産業省の「AI事業者ガイドライン（2024年）」は、AI開発者・AI提供者・AI利用者に対し、リスクベースアプローチ、データガバナンス、人間中心の意思決定、説明責任、適切なログ管理を求めます。ローカルRAG展開は構造的にこのガイドラインのいくつかの推奨を満たしやすい設計です：データが社外に出ないため越境移転リスクが除外され、自社ハードウェア上のログ保管によりトレーサビリティが確保され、組織内権限管理によりアクセス統制が明確になります。実務上のステップは：(1)RAGの「AI利用者」としての位置付けを明確化、(2)社内AIガバナンス文書（基本方針、リスク管理プロセス、責任者の任命）を整備、(3)上記の6統制を実装してMETIガイドラインの「説明可能性」「監査可能性」を満たす、(4)機微情報（個人情報保護法上の要配慮個人情報、不正競争防止法上の営業秘密）を扱うコレクションには厳格なRBACとアクセスログを適用、(5)モデル・embedder変更ごとに影響評価を実施。GDPRと併存する場合、両方の最も厳格な要件を採ることでメティとEU両当局に対する防御が成立します。',
          },
          {
            q: '日本企業のエンタープライズ展開で、ローカル推論で機微情報のセキュリティをどう確保しますか？',
            a: '日本のエンタープライズ展開では、On-Premまたは国内データセンター内のプライベートクラウドが現実的な選択肢です。具体的には：(1)ハードウェア — 国内ベンダーのGPUサーバー（NVIDIA H100/L40S搭載モデル等）または国内DCホスティングを採用し、物理的データレジデンシーを確保、(2)認証 — 既存のActive Directory、Keycloak、Microsoft Entra IDとフェデレーション、MFAを必須化、(3)ネットワーク — 専用VLAN内に閉じ、egress allowlistでモデル更新サーバー以外を遮断、(4)監査 — 既存のSIEM（Splunk、Microsoft Sentinel等）に統合、改ざん検知のためのハッシュチェーン付きログを実装、(5)業界別準拠 — 金融機関ならFISC安全対策基準、医療なら3省2ガイドライン（厚労省・経産省・総務省の医療情報安全管理関連ガイドライン）、政府なら政府情報システムのためのセキュリティ評価制度（ISMAP）に整合させる、(6)サプライチェーン — モデル重みのハッシュピン留めと、embedder・LLMのライセンス確認（Apache 2.0、MIT等の業務利用可ライセンスを優先）、(7)組織体制 — DPO相当の責任者を任命、四半期アクセスレビューを実施。典型的な中堅・大企業展開は、エンタープライズGPU 2基のオンプレサーバー、Active Directory連携、Qdrant/Weaviate/pgvectorのいずれかをベクトルストアとして採用、Splunk/Sentinelへのログ集約という構成で、8〜12週間で本番化可能です。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI：最良のローカルRAG](/ja/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — どのセルフホストプラットフォームがどのコンプライアンスpostureに合うか、テレメトリとライセンスに関する注釈付き。',
          '[業務ワークフローとEUコンプライアンスのためのローカルAIエージェント](/ja/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — retrievalが人間の読者ではなく自動化ワークフローステップを供給するときの隣接コンプライアンス話題。',
          '[ローカルLLMでのメール・カレンダー自動化](/ja/power-local-llm/local-llm-email-and-calendar-automation) — 同じ統制セットが適用される隣接業務自動化パターン。',
          '[ローカルRAGでPDFをステップバイステップ](/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step) — On-Premとラップトップパターンの実践的な実装ウォークスルー。',
          '[1,000件のPDFとローカルでチャット](/ja/power-local-llm/chat-with-1000-pdfs-locally) — On-Prem上限を押し上げる大規模コーパスの運用ガイダンス。',
          '[Power Local LLMハブ](/ja/power-local-llm) — セルフホストLLM展開の完全なガイドライブラリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-zh.png',
    title: '面向业务数据的本地 RAG：合规处理机密文档的 AI 架构（2026）',
    seoTitle: '本地 RAG 处理机密业务文档：合规与架构指南 (2026)',
    intro:
      '法务、医疗和金融团队都面临同一个难题：最值得用 AI 检索的文档，恰恰是不能离开内部网络的那些。本文给出一套自托管 RAG 的架构、控制集与部署模式决策矩阵，覆盖 GDPR、欧盟 AI 法案、HIPAA 与德国 Datenschutz 要求 — 写给希望把一份文档交给 IT 团队、并让他们立刻知道该如何落地的合规负责人。',
    metaDescription:
      '面向法务、医疗、金融团队的本地 RAG 合规架构。涵盖审计日志、DPIA 范围与三种部署模式对比，可直接交付 IT 团队。',
    twitterDescription:
      '满足 GDPR 与欧盟 AI 法案的本地 RAG。空气隔离、审计日志、数据血缘、DPIA 范围与三种部署模式 — 合规官交给 IT 的那篇文章。',
    audience:
      '在欧盟与中国境内、负责机密文档（合同、病历、审计档案、并购数据室、监管通信）自托管 RAG 建设的合规负责人、数据保护官、法务顾问与 IT 架构师。',
    readTime: '阅读约15分钟',
    educationalLevel: 'Advanced',
    primaryTerm: '合规本地 RAG',
    targetKeywords: [
      'gdpr 合规 rag',
      '本地 rag 业务数据',
      'eu ai act rag',
      '机密文档 私有 rag',
      'on-premise rag 部署',
      '数据安全法 rag',
      'dpia 本地 rag',
    ],
    leadAnswerBlock:
      '**自托管 RAG 要满足 GDPR 与欧盟 AI 法案要求，必须从第一天就内置六项控制：空气隔离或严格出站控制；按用户认证并启用基于角色的文档访问；覆盖入库与检索的不可篡改审计日志；静态与传输全程加密；从分块到源文档的确定性数据血缘；以及覆盖向量索引和缓存嵌入的书面删除路径。部署模式（单用户笔记本、本地服务器、私有欧盟云）决定哪些控制易实施、哪些需要工作量 — 而不是这些控制是否必要。**',
    quickAnswerTop: {
      en: {
        question:
          '本地 RAG 默认就符合 GDPR 吗？受监管团队应选择哪种部署模式？',
        answer:
          '本地 RAG 默认并不符合 GDPR。把模型搬到本地解决了跨境数据传输问题、缩短了处理者清单，但 GDPR 第 5、25、30、32 与 35 条仍然适用：合法性基础、数据最小化、审计日志、处理安全性，以及对大规模处理特殊类别数据的系统进行 DPIA。建议组合：单独律师/医生/审计师与一次性案件评审用单用户笔记本；5–50 名用户、几千份文档的部门级知识库用本地服务器；多部门或多法人部署、需要多区域容灾时用私有欧盟云（主权区域、客户管理密钥、仅 EU 区域）。无论选择哪种，六项控制保持不变 — 仅实施成本不同。',
        bullets: [
          '本地托管解决跨境传输（第 44–49 条）并缩短处理者清单 — 但单凭它无法解决合法性基础、DPIA 与数据主体权利。',
          '单用户笔记本 — 适合独立律师、医生、审计师与单次案件评审。规模化审计困难；空气隔离最容易。',
          '本地服务器 — 适合 5–50 名用户的部门级部署。完整审计日志、RBAC、备份与灾难恢复。IT 投入最大。',
          '私有欧盟云 — 适合需要容灾的多法人部署。主权区域 + 客户管理密钥 + 不在客户数据上训练的合同条款必备。',
          '只要大规模处理特殊类别数据，第 35 条 DPIA 即为强制要求 — 与部署模式无关。',
          '被遗忘权请求必须传播到源文档、向量索引和缓存嵌入 — 上线前就要设计删除路径，而非等请求到来后再补。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '部署模式对比', anchor: '#deployment-comparison' },
      { label: '选择部署模式', anchor: '#which-deployment' },
      { label: '为何为机密数据选本地 RAG', anchor: '#why-local-rag' },
      { label: '六项必备控制', anchor: '#required-controls' },
      { label: '空气隔离与出站控制', anchor: '#air-gap' },
      { label: '能经受审查的审计日志', anchor: '#audit-logging' },
      { label: '从分块到源文档的数据血缘', anchor: '#data-lineage' },
      { label: '加密与访问控制', anchor: '#encryption-access' },
      { label: '单用户笔记本模式', anchor: '#laptop-pattern' },
      { label: '本地服务器模式', anchor: '#on-prem-pattern' },
      { label: '向量数据库选择', anchor: '#vector-db-comparison' },
      { label: '私有欧盟云模式', anchor: '#private-cloud-pattern' },
      { label: '欧盟 AI 法案分级', anchor: '#eu-ai-act' },
      { label: 'DPIA 要求（第 35 条）', anchor: '#dpia-requirements' },
      { label: '德国地区注意事项（Datenschutz）', anchor: '#germany-datenschutz' },
      { label: '上线前合规清单', anchor: '#compliance-checklist' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '引用来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**本地托管必要但不充分。** 在自有硬件上运行模型与向量库解决了跨境传输与处理者数量问题，但 GDPR 第 5、25、30、32、35 条仍然适用。合法性基础、数据最小化、审计日志、处理安全性与 DPIA 不会因为数据留在内部就变为可选项。',
          '**六项控制不可妥协**，与部署模式无关：空气隔离或严格出站控制、按用户认证并启用基于角色的访问、不可篡改审计日志、静态与传输加密、从分块回溯到源文档的确定性血缘，以及覆盖向量索引和缓存嵌入的书面删除路径。',
          '**三种部署模式覆盖大部分受监管场景。** 独立专业人员与案件评审用单用户笔记本；5–50 用户的部门级知识库用本地服务器；多法人部署、容灾优先于完全空气隔离时用私有欧盟云（主权区域、客户管理密钥）。',
          '**欧盟 AI 法案将大多数本地 RAG 归为有限风险** — 但一旦检索结果被自动决策（信用评分、招聘筛选、福利资格判定）使用，部署立刻滑入高风险，触发完整合规评估、上市后监测与人工监督义务。',
          '**第 35 条 DPIA 是强制的**：只要 RAG 大规模摄入特殊类别数据（健康、法律、生物特征、政治、工会信息），或系统产生具有法律效力的自动决策。跳过 DPIA 等于跳过审计辩护。',
          '**被遗忘权是大多数部署失败的删除测试。** 源文档简单；向量索引可重建；缓存嵌入、检索日志和聊天历史中的回答 — 这些是被忽略的部分，也是监管机构必问的部分。',
          '**开源嵌入模型原则上符合 GDPR**，但需满足三个条件：(a) 权重一次性下载并固定到哈希；(b) 推理完全本地、无遥测；(c) 模型卡和许可经过审查，没有与机密业务使用相冲突的条款。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**6 项强制控制：** 空气隔离、RBAC、审计日志、加密、数据血缘、删除路径。',
          '**3 种部署模式：** 单用户笔记本（独立专业人员）、本地服务器（5–50 用户）、私有欧盟云（多法人）。',
          '**DPIA 强制（第 35 条）：** 大规模处理特殊类别数据（健康、法律、生物特征）时。',
          '**欧盟 AI 法案：** 大多数本地 RAG = 有限风险；检索喂给自动决策（信用、招聘、福利）即为高风险。',
          '**中国《数据安全法》(2021)** 与《个人信息保护法》(PIPL) 要求重要数据本地化处理；本地 RAG 天然满足该结构性要求。',
          '**被遗忘权 / 删除请求** 必须覆盖源文档、向量索引、缓存嵌入与回答历史。',
          '**开源嵌入模型** 仅在权重固定、推理完全本地、许可审查通过后才符合 GDPR。',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: '部署模式对比',
        content:
          '每种模式都可以做到合规；变化的是控制成本与故障模式。请选择匹配用户数、文档敏感度与容灾需求的最简单模式。',
        columns: ['控制', '单用户笔记本', '本地服务器', '私有欧盟云'],
        rows: [
          {
            '控制': '空气隔离（无出站网络）',
            '单用户笔记本': '简单 — 关闭网络',
            '本地服务器': '可行 — VLAN + 防火墙',
            '私有欧盟云': '困难 — 仅出站白名单',
          },
          {
            '控制': '审计日志（谁、什么、何时）',
            '单用户笔记本': '手动 — 仅 OS 级别',
            '本地服务器': '强 — 集中式日志管道',
            '私有欧盟云': '强 — 云原生日志',
          },
          {
            '控制': '数据血缘（分块 → 源）',
            '单用户笔记本': '仅本地文件',
            '本地服务器': '管道完全可追溯',
            '私有欧盟云': '完整 — 跨区域',
          },
          {
            '控制': 'EU 数据驻留',
            '单用户笔记本': '本质 — 物理位置',
            '本地服务器': '本质 — 物理位置',
            '私有欧盟云': '配置 — 需主权区域',
          },
          {
            '控制': '按用户 RBAC',
            '单用户笔记本': '单用户 — 不适用',
            '本地服务器': '身份提供者 + 群组',
            '私有欧盟云': 'IAM + SSO + 集合级 ACL',
          },
          {
            '控制': '备份与灾难恢复',
            '单用户笔记本': '加密外置磁盘',
            '本地服务器': '磁带或异地备份',
            '私有欧盟云': '跨可用区复制',
          },
          {
            '控制': '初始成本',
            '单用户笔记本': '仅硬件 — 低',
            '本地服务器': '服务器 + 集成 — 中',
            '私有欧盟云': '订阅 + 部署 — 中',
          },
          {
            '控制': '持续成本',
            '单用户笔记本': '无 — 系统管理工时',
            '本地服务器': 'IT 运维 + 电力 + 散热',
            '私有欧盟云': '按月持续',
          },
          {
            '控制': '最佳适用',
            '单用户笔记本': '独立专业人员、案件评审',
            '本地服务器': '5–50 用户、部门 KB',
            '私有欧盟云': '多法人、需容灾的部署',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: '选择部署模式',
        content:
          '**正确选择取决于用户数、文档敏感度、审计就绪压力以及内部 IT 容量。** 下面这张速查表覆盖大多数实际情况。',
        columns: ['您的情况', '建议'],
        rows: [
          {
            '您的情况': '一次处理一个案件的独立律师、医生或审计师',
            '建议': '单用户笔记本',
          },
          {
            '您的情况': '3–5 名指定评审人、有固定结束日期的并购数据室',
            '建议': '单用户笔记本或本地（按文档量决定）',
          },
          {
            '您的情况': '10–30 人合规团队共享监管通信档案',
            '建议': '本地服务器',
          },
          {
            '您的情况': '医院科室为 50 名医务人员构建临床指南助手',
            '建议': '本地服务器',
          },
          {
            '您的情况': '在多个欧盟国家的子公司间运行同一套 RAG 的多法人集团',
            '建议': '私有欧盟云（主权区域 + 客户管理密钥）',
          },
          {
            '您的情况': '需 24/7 可用性与灾备方案的保险公司',
            '建议': '私有欧盟云',
          },
          {
            '您的情况': '处理涉密或受限数据的政府机构',
            '建议': '仅空气隔离的本地部署 — 云不在范围内',
          },
          {
            '您的情况': '6 周内要应对监管审计辩护',
            '建议': '本地服务器（最快展示出已掌控）',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: '为何为机密数据选本地 RAG',
        content:
          '**本地 RAG 优于云 LLM-as-a-Service 不是立场，而是 GDPR 风险评估的形态决定的。** 云 RAG 在很多场景可行；处理机密业务数据时，它额外引入五类风险，而本地 RAG 通过架构本身就消除了它们。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地 RAG 让机密文档保留在自有硬件上，同时为团队提供 AI 驱动的检索 — 数据不出大楼、第三方处理者不接触、跨境传输问题不存在。',
          },
          {
            type: 'plain-terms',
            text: '想象一下：法务团队可以用自然语言检索 1 万份案件档案 — 但文档从未离开机房。这就是本地 RAG：AI 在您的硬件上读取文档，在您的硬件上回答问题，没有任何东西被发送出去。合规优势不是功能，而是架构本身。',
          },
        ],
        items: [
          '**跨境传输（第 44–49 条）。** 把个人数据发往非欧盟处理者需要标准合同条款、传输影响评估，并能回答接收司法辖区是否有可触及该数据的传唤权力。本地 RAG 不传输数据 — 问题不出现。',
          '**子处理者扩散（第 28 条）。** 云 LLM 提供商通常依赖超大规模云基础设施、内容审核服务与可观察性供应商。每一个都是子处理者，必须列示、签约并审计。本地 RAG 默认零子处理者。',
          '**训练数据泄露。** 许多云 LLM 条款保留使用客户提示进行模型改进的权利，除非购买付费企业版并核实"不训练"条款。本地 RAG 运行您自己控制权重的模型；没有任何东西离开主机。',
          '**客户合同中的保密条款。** 外部律师协议、并购 NDA 与患者数据合同往往禁止把受保护材料传输给第三方处理者。本地 RAG 直接绕开此类条款。',
          '**司法传唤与法律程序暴露。** 存于云的文档可被针对云提供商的司法程序强制提交，且数据控制者可能无法及时获悉披露义务。从未离开您内部的文档，只能从您处获取。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本地 RAG 不是所有工作负载的正确答案。公开信息研究、营销草稿生成、对开源代码库的代码助手 — 这些通常用云 LLM 更合适，因为 GDPR 暴露低、模型质量差距重要。本文的论点专门针对机密业务数据：法务、医疗、金融、人力资源、监管通信与商业秘密。',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: '六项必备控制',
        content:
          '**这六项控制是底线。** 任何受监管的部署都需要全部六项；部署模式只改变实施方式。漏掉任意一项，是审计失败最常见的原因。',
        numberedItems: [
          {
            title: '空气隔离或严格出站控制',
            whyItMatters:
              '确认文档与嵌入不会通过出站调用泄漏 — 遥测 SDK、模型更新探针、崩溃报告、内容审核回调、字体第三方 CDN。要么完全禁用网络访问（真正空气隔离），要么仅允许签名更新服务器的出站白名单。',
          },
          {
            title: '按用户认证 + 基于角色的访问',
            whyItMatters:
              '在监管机构追问之前，您必须能回答"谁访问了哪份文档"。SSO 对接身份提供者、按群组管理集合访问、按案件需要细化到文档级 ACL。共享账号不是控制，是等待发生的审计失败。',
          },
          {
            title: '覆盖入库与检索的不可篡改审计日志',
            whyItMatters:
              '每份文档：谁上传、何时、源路径、哈希。每次查询：谁问的、问了什么（如允许）、检索到哪些分块、来自哪些文档 ID、返回的回答是什么。日志须防篡改 — 仅追加、签名、保留期至少覆盖监管机构调查窗口。提示级别的审计追踪 — 版本控制、变更日志、回滚 — 见[提示版本控制工作流](/zh/prompt-engineering/prompt-version-control-workflows)。',
          },
          {
            title: '静态与传输加密',
            whyItMatters:
              '主机磁盘加密、内部服务间调用 TLS、能扛住笔记本被盗或管理员账号被攻陷的密钥管理。云部署使用客户管理密钥。否则一次设备失窃就会变成第 33 条下的可通报数据泄露。',
          },
          {
            title: '从分块到源文档的确定性数据血缘',
            whyItMatters:
              '每个被检索的分块都必须能回溯到其源文档、页面、章节和版本。这才让您能 (a) 验证回答；(b) 履行删除请求；(c) 在生成摘要被质询时进行法律辩护。"我们无法重现哪个分块产生了哪个回答"对监管机构不可接受。',
          },
          {
            title: '覆盖向量索引与缓存嵌入的书面删除路径',
            whyItMatters:
              '被遗忘权请求必须从源系统传播到向量索引、缓存嵌入与检索日志保留。多数部署能干净地处理源端删除，却忘了其余环节。上线前就要文档化删除剧本，并用合成数据演练。',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: '空气隔离与出站控制',
        content:
          '**空气隔离意味着主机没有出站网络路径；出站控制意味着只允许严格白名单。** 两者都可接受；选择您运维能持续支撑的最强模式。',
        items: [
          '**真正空气隔离** — 无 DHCP、不解析公网 DNS、无出站 TCP。更新通过管理员物理接入的签名介质完成。适合涉密工作、特定医院网络以及威胁模型包含恶意依赖的部署。',
          '**出站白名单** — 仅允许出站到一小串命名目标（模型更新服务器、身份提供者、内部日志收集器）。其余流量在防火墙丢弃。这是大多数受监管部门级部署的实用默认。',
          '**平台需检查项：** 默认零遥测、推理过程无出站调用、UI 无字体 CDN、无发送负载的崩溃报告。在测试台用抓包或类似 Little Snitch 的工具验证后再上生产。',
          '**更新治理** — 模型权重、嵌入器权重、应用代码与 OS 补丁都要通过受控更新窗口。批准更新的管理员书面签字、变更入日志。',
          '**常见空气隔离破坏：** 第三方 UI 组件捆绑的分析 SDK；应用界面的字体 CDN；启动时执行的"检查更新"探针。所以才需要验证步骤 — 不要默认相信任何默认值。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在主机上对开启且空闲的应用做 24 小时抓包。任何不在白名单上的出站都是发现项。每次应用更新都重做 — 发布说明常常低估新增的出站调用。',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: '能经受审查的审计日志',
        content:
          '**审计日志是监管机构最先翻看的产物。** 它必须就每次检索回答两个问题：谁问了，系统给了什么。否则您只能用言辞辩论；有了正确日志，您就能拿出凭据。',
        items: [
          '**入库事件：** 文档 ID、哈希（SHA-256）、文件名、源路径、上传者、时间戳、分类标签、大小、页数、所属群组、保留类。入库时即打标 — 大型语料的回溯分类既艰苦又少能完整。',
          '**检索事件：** 查询 ID、用户 ID、时间戳、检索到的分块 ID（及其来源文档 ID）、检索得分、最终回答哈希、模型标识、嵌入器标识、使用的 top-K。查询文本本身敏感 — 仅在处理目的覆盖时记录；否则只记哈希与时间戳。',
          '**管理事件：** 模型晋升、嵌入器变更、索引重建、用户/群组变更、ACL 变更、访问策略变更。每条事件由责任管理员签名。',
          '**防篡改：** 仅追加日志、哈希链（每条引用前一条的哈希）、带外签名密钥、定期与不同管理员或一次写介质上的副本核对。',
          '**保留期：** 与监管机构调查窗口对齐 — 至少覆盖案件保留期；受监管行业常见 6–7 年；行业规则更长则更长。',
          '**管道：** 应用产出结构化事件；转发器送至独立、写入受限的日志库。应用服务器永远不应有删除或重写日志条目的权限 — 职责分离才让日志可信。',
        ],
        callouts: [
          {
            type: 'note',
            text: '记录查询文本本身就是 GDPR 议题 — 查询本身可能含个人数据（如"汇总患者 X 的病史"）。设计阶段决定您的处理目的是否覆盖查询日志；不覆盖则只记审计与运维诊断所需的元数据。',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: '从分块到源文档的数据血缘',
        content:
          '**血缘是其他控制的脊梁。** 没有它，删除请求会失败，回答验证不可能，审计追踪崩塌。从首次入库就构建血缘，不要事后补。',
        items: [
          '**文档级血缘：** 每份文档有稳定的内部 ID、内容哈希、入库时间戳、所属、分类、保留类。原文件留在源系统，RAG 系统持有引用而非主拷贝。',
          '**分块级血缘：** 每个分块引用其父文档 ID、页码（PDF）、章节（结构化文档）、字符偏移、长度与分块策略版本。重新分块时（您一定会做），旧分块墓碑标记而非原地删除 — 让旧检索日志仍可解析。',
          '**嵌入级血缘：** 每条嵌入向量引用其分块 ID 和嵌入器标识。更换嵌入器时，旧向量保留至新向量验证完成且引用过它们的案件结案，方可清除。',
          '**回答级血缘：** 每条生成回答引用产出它的分块 ID、模型标识、提示模板版本与时间戳。当用户问"这个回答从哪来"，系统一键解析 分块 → 文档 → 页码。',
          '**重建索引而不破坏血缘：** 重建保留文档 ID 并递增分块策略版本。即使在线索引更新了，旧分块 ID 在检索日志中仍可解析。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '每季度测试血缘链。从审计日志随机选一次检索，逐级回溯：分块 ID → 文档 ID → 源系统中的原文件 → 保留类。任何环节断裂，应在下次监管检查前修复 — 而非检查中。',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: '加密与访问控制',
        content:
          '**静态加密、传输加密，以及对接现有身份提供者的访问控制。** 这些都是成熟控制；失败模式是漏掉三层中的某一层，而非把选定的层做差。',
        items: [
          '**静态加密** — 主机全盘加密（Linux 上 LUKS、Windows 上 BitLocker、macOS 上 FileVault 用于笔记本）。服务器还要加密承载向量库与入库暂存的分区。云部署用客户管理密钥并按策略轮换。',
          '**传输加密** — 任何服务间跳转都要 TLS，包括 localhost。密码套件策略对齐行业基线。威胁模型需要时启用 mTLS — 通常云部署的服务到服务间。',
          '**身份认证** — 对接现有身份提供者（OIDC、SAML）的 SSO。生产环境无本地账号。具备管理或敏感集合访问权限的用户强制 MFA。',
          '**授权** — 集合级群组访问；案件需要时启用文档级 ACL（并购数据室、雇佣调查等）。检索流水线必须在查询时强制 ACL — 不是仅 UI。看不到文档的用户也不应拿到其分块。',
          '**管理员访问** — 任何能读或重建索引、查看审计日志、修改 ACL 的账号都要纳入特权访问管理。带审计理由的即时提权优于长期管理员权限。',
          '**端点安全** — 笔记本部署须用受管理设备（MDM 注册、加密、强制锁屏策略）。文档库已解密、无人值守留在咖啡馆的独立专业人员笔记本，是您不愿提交的 GDPR 泄露。',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: '单用户笔记本模式',
        content:
          '**单用户笔记本是最容易做到空气隔离、最难规模化的模式。** 适合独立专业人员与单次案件评审；不适合任何需要超越单一用户或抗用户离职的场景。',
        items: [
          '**硬件** — 工作站级笔记本，具备全盘加密、独立 GPU（或近年的统一内存机型）、至少 32 GB 内存。模型与嵌入器要与向量库缓存共驻内存。按 VRAM 选择硬件与模型可参考 [本地 LLM 硬件指南](/zh/local-llms/local-llm-hardware-guide-2026)。',
          '**软件** — 自包含的桌面 RAG 应用本地运行；权重一次性下载并固定哈希的开源 LLM；开源嵌入器；运行在加密磁盘上的本地向量库。适合本地 RAG 的开源模型对比见 [Ollama 顶级开源模型](/zh/local-llms/top-open-source-models-ollama)。',
          '**网络姿态** — 工作时空气隔离；仅在显式签名更新时重新连接。把 OS 防火墙配置为默认拒绝所有出站，并为更新流程开放显式例外。',
          '**文档处置** — 源文档放加密磁盘；按案件分目录；每周加密备份到异地外置驱动器。',
          '**审计姿态** — OS 级审计日志（登录、文件访问、外设事件）作为底层。应用级事件在本地服务器模式更易；笔记本模式以 OS 日志为主，并以案件级人工记录补充。',
          '**限制** — 单用户笔记本不是多用户平台。共享笔记本、共享账号或把文档库拷给同事，会同时破坏审计姿态与合法性基础。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对处理机密案件的独立专业人员，单用户笔记本模式确实是最强的隐私姿态 — 优于任何云、强于许多本地部署。代价是运维：笔记本损坏时，案件继承您备份纪律的恢复时长。',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: '本地服务器模式',
        content:
          '**本地服务器是受监管部门级 RAG 的主力模式。** 可扩展到 5–50 用户与几千份文档，支持完整审计日志，留在物理边界内。代价是真实的 IT 运维投入。',
        items: [
          '**硬件** — 配备 1–2 块企业级 GPU（小语料工作站级 GPU 也可）、冗余磁盘、ECC 内存与 UPS 的服务器。规划存储为原始语料的 2–4 倍，覆盖向量、索引、日志与备份。',
          '**网络** — 企业防火墙后的专用 VLAN；按威胁模型决定出站白名单或完全空气隔离。仅企业网内部访问，无公网入站。',
          '**软件栈** — 自托管 RAG 平台（独立服务器镜像或容器化部署）、开源 LLM 作为聊天模型、开源嵌入器、按语料规模选择的向量库。应用服务器、向量库与日志转发器以独立进程独立服务账号运行。',
          '**身份** — 与企业身份提供者联邦；群组成员驱动集合访问；敏感集合走附加审批流。',
          '**备份与灾备** — 每晚增量备份文档库与向量索引；每周全量；IT 保管异地副本。文档化恢复剧本至少每年演练。',
          '**运维** — 按变更管理策略制定补丁窗口；季度访问评审；为被遗忘权请求演练删除剧本；记录可保留血缘的模型与嵌入器升级路径。',
          '**容量规划** — 几千份文档与 5–50 并发用户在单台中端 GPU 服务器上运行良好。再多就规划更强主机或迁移到私有云模式。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本地 RAG 最常因非技术原因失败：从未验证过的备份；IT 共享的管理员账号；没人测过的 UPS；两个月静默丢事件的日志转发器。技术控制比运维卫生更易做到位。',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: '本地 RAG 的向量数据库选择',
        content:
          '**向量库选择鲜少决定合规 — 但塑造运维成本、规模上限以及删除剧本能否干净落地。** 大多数受监管部署在以下六者中选择。',
        columns: ['向量数据库', '类型', 'EU 自托管', '最佳 RAG 模式'],
        rows: [
          {
            '向量数据库': '**Chroma**',
            '类型': '开源、轻量',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '笔记本 + 小型本地',
          },
          {
            '向量数据库': '**Qdrant**',
            '类型': '开源、高性能',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '本地服务器，过滤密集',
          },
          {
            '向量数据库': '**Weaviate**',
            '类型': '开源、功能完整',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '本地 + 混合搜索',
          },
          {
            '向量数据库': '**Milvus**',
            '类型': '开源、企业级',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '大规模本地部署',
          },
          {
            '向量数据库': '**pgvector**',
            '类型': 'PostgreSQL 扩展',
            'EU 自托管': '✅',
            '最佳 RAG 模式': '已使用 Postgres 的团队',
          },
          {
            '向量数据库': '**Pinecone**',
            '类型': '托管 SaaS',
            'EU 自托管': '⚠️ 美国托管',
            '最佳 RAG 模式': '仅私有欧盟云（有保留意见）',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: '私有欧盟云模式',
        content:
          '**私有欧盟云模式使用主权区域云提供商、客户管理密钥、仅 EU 数据驻留，并签订不在客户数据上训练 AI 的合同条款。** 适合多法人部署、需多区域容灾、以及缺乏完整本地运维能力的团队。',
        items: [
          '**提供商选择** — 超大规模云的欧盟主权产品或欧洲云提供商。DPA 必须列出每个子处理者；若任一子处理者在 EEA 之外，须处理传输机制。即使直接处理者位于欧盟，Schrems II 类传输影响分析仍要纳入档案。',
          '**区域** — 仅 EU，并提供明确的数据驻留承诺。跨区复制仅至其他 EU 区域。即使临时、即使是备份，也不得故障切换至美国区域。',
          '**加密** — 客户管理密钥并定期轮换；提供商支持时启用自带密钥；密钥访问事件与云提供商运维日志分离记录。',
          '**网络** — 私有 VPC、无公网入站；仅通过私有连接（专线或 VPN）从企业网访问；任何出站依赖纳入白名单。',
          '**身份** — 与企业 IdP 联邦；云原生 IAM 绑定到用户身份，不绑定共享服务账号；检索流水线在集合层强制 ACL。',
          '**日志** — 云原生审计日志接入既有 SIEM；应用审计事件单独摄入；防篡改保留期满足监管期望。',
          '**合同** — DPA 须符合第 28 条，列出子处理者，必要时处理 SCCs，并包含明确的不在客户数据上训练的条款（覆盖 LLM 权重及检索、遥测、支持等周边服务）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '私有欧盟云模式因引入第三方处理者，看起来不如本地严格 — 但配合主权区域、客户管理密钥、合同性"不训练"条款与适当出站控制，可在可用性与审计姿态上匹敌甚至超过本地。合规档案更厚；运维风险更小。',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: '欧盟 AI 法案分级：有限风险 vs 高风险',
        content:
          '**大多数本地 RAG 在欧盟 AI 法案下属于有限风险 — 但只要检索结果被自动决策影响人类，分级即升至高风险，义务成倍增加。** 在动手前先分级。',
        items: [
          '**有限风险（多数本地 RAG）** — 系统检索并汇总文档以辅助人类，由人做决策。义务以透明性为主：用户须知正在与 AI 交互、生成内容须可识别、不得有操纵或欺骗性设计。',
          '**高风险** — 检索喂给法案列举领域的自动决策：信用评分、招聘筛选、教育录取、关键公共服务、执法、移民、司法、生物识别、关键基础设施。推荐治疗的临床决策辅助 RAG 是高风险；帮医生更快读指南的临床指南摘要 RAG 不是。',
          '**高风险义务** — 全生命周期风险管理体系、数据治理（训练/验证/测试数据文档化）、技术文档、自动事件日志、对用户的透明与告知、人工监督、准确性与稳健性、上市前合规评估、上市后监测。',
          '**通用 AI 考量** — 使用通用 LLM（开源或其他）不会把高风险义务转嫁给模型提供方。部署方（贵组织）承担用该模型构建之系统的高风险义务。',
          '**禁止行为** — 社会评分、未经定向的人脸图像爬取、工作场所与学校的情绪识别、特定的实时生物特征分类。无论部署多么本地，这些都不可触碰。',
          '**文档作为审计产物** — 高风险系统所需技术档案不是一次性交付，而是活文档。绑定到变更管理流程，让每次模型晋升、嵌入器变更、ACL 修改都反映其中。',
        ],
        callouts: [
          {
            type: 'note',
            text: '高风险与有限风险的边界由用例划，不由技术划。同一向量库与同一模型，在研究助手部署中是有限风险，在 HR 筛选部署中即为高风险。按用例分级，不按平台分级。',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DPIA 要求（第 35 条）',
        content:
          '**数据保护影响评估（第 35 条）针对可能给数据主体带来高风险的处理强制执行。** 多数受监管的本地 RAG 在范围内。把 DPIA 当作设计文档，而非事后合规材料。',
        items: [
          '**何时强制** — 包含具有法律效力之画像的系统性、广泛评估；大规模处理特殊类别数据（健康、法律、生物特征、种族、政治、宗教、工会）；公共区域的系统性监控。各国监管机构会发布始终需要 DPIA 的处理清单 — 请核对您所在国。',
          '**DPIA 范围** — 目的与合法性基础；处理操作描述；必要性与比例性；对数据主体的风险评估；缓解措施与剩余风险；与 DPO 协商；剩余风险高时，开展处理前与监管机构协商。',
          '**RAG 特定风险** 须处理：从检索分块对个人再识别；产生影响个人的不准确信息；通过日志或备份泄露；被遗忘权删除完整性；跨集合污染；高权限用户访问范围过宽。',
          '**应文档化的缓解措施** — 上述六项控制；合法性基础为同意或正当利益时进行分块级脱敏或假名化；带演练证据的删除剧本；约定节奏的访问评审。',
          '**评审者** — DPO 签字；缓解后剩余风险仍高时与监管机构协商。已签字的 DPIA 与欧盟 AI 法案合规文档一并归入技术档案（若系统也属高风险）。',
          '**活文档** — 语料显著扩展、模型或嵌入器变更、访问边界变更，或每年作为基线时，重新执行 DPIA。绑定到变更管理流程。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '项目第二周写的 DPIA 是规划工具；第十周写的是辩护文件。前者更有用，且常浮现降低最终剩余风险的设计变更。在采购决策之前启动 DPIA，而非部署之后。',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: '德国地区注意事项（Datenschutz）与中国合规对照',
        content:
          '**德国数据保护实务在 GDPR 基线之上叠加 BDSG-Neu、行业规则、BSI-Grundschutz 模块以及职工委员会的共决权。** 满足通用 GDPR 的 RAG 部署，在德国评审中仍可能因下列点被驳回。',
        items: [
          '**职工委员会（Betriebsrat）共决** — 根据 §87 BetrVG，凡监控员工绩效或行为的系统在部署前需职工委员会同意。覆盖员工撰写内容（邮件、内部文档）的 RAG 通常触发该条。设计阶段就让职工委员会介入；协议（Betriebsvereinbarung）成为合法性基础档案的一部分。',
          '**行业保密** — §203 StGB 将违反职业保密义务（律师、医生、税务顾问、审计师）入罪。把客户/患者保护数据暴露给非保密义务人员或外部处理者，可能不仅是民事问题，而是刑事问题。这些行业更安全的选择是本地或空气隔离模式。',
          '**Telemediengesetz（TTDSG）与遥测** — 触及终端用户设备的出站遥测不仅受 GDPR 规制，也受 TTDSG。空气隔离让该问题不存在；出站受控部署须验证每次出站调用都已同意、必要或纯技术。',
          '**BSI-Grundschutz 模块** — 对于政府机构与 KRITIS 运营者，BSI-Grundschutz-Kompendium 提供约束性基准。即便在中型企业，OPS.1.2.4（云使用）、OPS.2.1（外包）与 APP.4.4（Web 应用）等模块仍是架构文档的有用参考。',
          '**监管机关（联邦与各州）** — 私营部门数据保护监管按州组织。在第 36 条协商必要时联系所属州数据保护专员（Landesbeauftragte für Datenschutz）。',
          '**中国本地化对照** — 对于在中国境内运营或处理境内数据的部署，《数据安全法》(2021)、《个人信息保护法》(PIPL) 与 CAC 规则要求重要数据本地化、跨境数据传输安全评估。本地 RAG 通过架构本身满足"重要数据存储于境内"原则；同时建议参考国家标准 GB/T 35273（个人信息安全规范）与等保 2.0 三级标准（涉及金融、医疗、政府场景时通常为强制要求）。',
          '**文档语言** — 德国监管机关接受英文文档，但关键的面向用户的产物（隐私通知、透明度声明、职工委员会协议）出于法律与实务考虑应以德文编写。',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: '上线前合规清单',
        content:
          '**任何生产环境上线前，端到端走完此清单。** 每一项都是真实审计中的真实失败模式；清单刻意保持简短，以便真正被使用。',
        items: [
          '☐ **合法性基础已记录** — 每类源数据：同意、合同、法定义务、生命利益、公共任务，或带利益衡量测试的正当利益。',
          '☐ **DPO 已签署 DPIA**，并附演练过的删除剧本。',
          '☐ **处理活动记录（第 30 条）** 已更新，纳入 RAG 系统、数据类别、保留、接收方与传输机制（本地 RAG 通常无）。',
          '☐ **六项控制端到端验证**：空气隔离或出站白名单、RBAC、审计日志、加密、血缘、删除路径。',
          '☐ **出站抓包** 在 24 小时浸泡测试中干净；每次应用更新后重做。',
          '☐ **身份提供者集成** 用每个访问层的真实用户测试通过；敏感集合访问需独立提权。',
          '☐ **备份已生成、恢复已实测** — 在隔离硬件上真实测试，不是只看状态面板。',
          '☐ **被遗忘权剧本演练** — 用合成数据覆盖源系统、向量索引、缓存嵌入与检索日志保留。',
          '☐ **欧盟 AI 法案分级** 已确认（有限风险 vs 高风险）；高风险则技术档案就位。',
          '☐ **供应商合同（如有）已审阅**：DPA 符合第 28 条、列出子处理者、含覆盖客户数据的"不训练"条款。',
          '☐ **职工委员会协议** 在涉及员工撰写内容时已就绪（德国；其他欧盟国家有相似规则）。',
          '☐ **透明度通知** 用面向用户的语言说明 AI 辅助、人在回路与数据流。',
          '☐ **应急响应剧本** 已更新，覆盖 RAG 特有场景：索引泄露、日志篡改、删除失败、模型替换破坏下游血缘。',
          '☐ **季度访问评审** 已排期与指派；上线前完成首次评审。',
          '☐ **年度 DPIA 复评** 已排期，并绑定到变更管理流程。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**错误 1：把"本地"等同于"合规"。** 本地解决传输与处理者问题，但解决不了合法性基础、DPIA、审计日志或数据主体权。合规是分层项目，不是一个部署选择。',
          '**错误 2：因为"只是搜索工具"就跳过 DPIA。** 大规模摄入特殊类别数据的搜索工具正是第 35 条所覆盖。跳过 DPIA 等于跳过审计辩护。',
          '**错误 3：未审合法性基础就记录查询文本。** 当查询提及个体时，查询本身就是个人数据。设计阶段决定处理目的是否覆盖查询日志；不覆盖则只记哈希与元数据。',
          '**错误 4：删除剧本里漏掉缓存嵌入。** 源端删除可行；向量索引重建可行。平台为性能加的缓存层、检索日志中的嵌入指纹、聊天库中的回答历史 — 这些是被忽略之处。',
          '**错误 5：允许高权限用户绕过集合 ACL。** "管理员能看到一切"既方便又常见；也是审计失败最大的单一原因。特权访问本身必须受访问控制、限时与按使用合理化。',
          '**错误 6：一个工作区复用于多个案件或客户。** 引用与上下文交叉污染在外人尚未看到时就已是保密失败。一个集合一个案件或客户；ACL 分离；保留分离。',
          '**错误 7：买了空气隔离，却把私人手机插上来测试。** 空气隔离边界必须包含能跨越它的人。终端策略是控制的一部分，不是单独议题。',
          '**错误 8：把模型与嵌入器选择当成"一次到位"。** 每次升级都是带 DPIA、血缘与审计影响的变更管理事件。在首次生产部署前规划升级流程。',
        ],
      },
      sources: {
        id: 'sources',
        title: '引用来源',
        items: [
          '[GDPR 全文（官方）](https://gdpr-info.eu/) — 通用数据保护条例完整条文，含逐条注释。',
          '[欧盟 AI 法案全文](https://artificialintelligenceact.eu/) — 含风险分级框架的完整法规文本。',
          '[NIST AI 风险管理框架](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — 适用于 AI 风险评估的美国联邦治理框架。',
          '[BDSG-Neu（德国联邦数据保护法）](https://www.gesetze-im-internet.de/bdsg_2018/) — 在 GDPR 基础上叠加行业规则的德国实施法。',
          '[EDPB DPIA 指南](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — 欧洲数据保护委员会关于何时与如何开展 DPIA 的指引。',
          '[中国《数据安全法》(2021)](http://www.npc.gov.cn/) — 全国人大常委会关于数据安全的基础法律，含重要数据保护与跨境传输规定。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '在本地运行 RAG 是否自动满足 GDPR？',
            a: '不会。本地托管解决跨境传输并缩短处理者清单，但 GDPR 第 5 条原则（合法、公平、透明、目的限制、数据最小化、准确性、存储限制、完整性与保密性、问责）仍然适用。第 25 条（设计与默认的数据保护）、第 30 条（处理活动记录）、第 32 条（处理安全性）和第 35 条（DPIA）无论模型在哪里运行都适用。本地 RAG 是稳固起点，不是已完工的合规姿态。',
          },
          {
            q: '本地 RAG 部署的欧盟 AI 法案合规需要什么？',
            a: '把用例归类为有限风险或高风险。多数检索助手部署属于有限风险，需透明义务：用户须知正在与 AI 交互、生成内容须可识别。一旦检索喂给已列举领域（信用、招聘、教育、公共服务、执法、移民、司法、生物特征、关键基础设施）的自动决策，部署即为高风险，需履行完整义务：风险管理体系、数据治理、技术文档、自动事件日志、透明度、人工监督、准确性与稳健性、合规评估、上市后监测。',
          },
          {
            q: '我需要为本地 RAG 做 DPIA 吗？',
            a: '第 35 条 DPIA 在可能给数据主体带来高风险的处理上是强制的 — 包括大规模处理特殊类别数据（健康、法律、生物特征、种族、政治、宗教、工会）以及有法律效力的系统性画像。多数受监管的本地 RAG（法务、医疗、金融、HR 调查）在范围内。尽早启动 DPIA、把它视作设计文档、并在上线前演练缓解措施 — 尤其是删除剧本。',
          },
          {
            q: '本地 RAG 部署能否跨部门共享？',
            a: '可以，但需谨慎。集合级访问控制、对单一身份提供者的按用户认证、为每个部门用途明确合法性基础 — 这是底线。DPIA 须覆盖最广的处理目的；若某部门需另一种合法性基础（如 HR 调查走正当利益、临床人员走公共任务），分集合分访问群组比单集合配复杂 ACL 更易守。',
          },
          {
            q: '如何审计谁访问了哪份文档？',
            a: '记录每次检索的用户 ID、时间戳、检索到的分块 ID 与其来源文档 ID。把事件转发到与应用服务器不同管理员管控、写入受限的独立日志库（职责分离）。使用仅追加存储与哈希链使篡改可检测。保留期与监管机构调查窗口及行业规则对齐 — 受监管行业常见 6–7 年。',
          },
          {
            q: '开源嵌入模型用得是否符合 GDPR？',
            a: '原则上可以，需三个条件。第一，权重一次性下载并固定哈希，可证明运行中是什么。第二，推理完全本地、无遥测或出站调用 — 用抓包验证，不要只信文档。第三，审阅模型卡与许可，排除与机密业务用途冲突的条款（部分 open-weight 许可对数据类型或用例附加限制）。受监管部署的实用默认是把白名单收敛到少数已审核嵌入器，并在每次升级时重新审核。',
          },
          {
            q: 'AI 生成输出的数据血缘怎么处理？',
            a: '每条生成回答必须引用产出它的分块 ID、模型标识、提示模板版本与时间戳。分块再解析到文档 ID，文档 ID 再解析到源文档。这条链让您能验证回答、在质询下辩护、履行删除请求并稍后重现结果。没有它，"AI 这么说"就成为审计辩护 — 而那不是辩护。',
          },
          {
            q: '可以用本地 RAG 处理客户机密文档吗？',
            a: '常常可以，有时不能。许多外部律师协议、并购 NDA 与患者数据合同允许在数据不离开既定边界并满足某些控制时进行 AI 辅助评审。本地 RAG 通过架构满足边界要求；合同特定的控制清单（加密、访问、审计、保留、泄露通知）仍须遵守。当合同完全禁止 AI 处理时，任何部署模式都修不了 — 禁止令对本地或远程 AI 同样适用。',
          },
          {
            q: '为合规需要什么样的日志？',
            a: '入库事件（文档 ID、哈希、来源、上传者、时间戳、分类）、检索事件（用户 ID、查询元数据或哈希、分块 ID、回答引用、模型/嵌入器标识）、管理事件（模型晋升、嵌入器变更、ACL 变更、用户/群组变更）与运维事件（备份、恢复、密钥轮换）。所有事件转发到独立日志库、仅追加、哈希链化，并按案件与行业要求保留。',
          },
          {
            q: '如何在 RAG 中处理被遗忘权请求？',
            a: '用一份贯穿各层的文档化剧本：源文档库、向量索引、缓存嵌入、检索日志保留（合法性基础允许删除日志条目时）以及聊天历史中的所有回答。源端删除直接；向量索引重建已被理解；缓存嵌入与回答历史是多数部署遗漏之处。用合成数据演练剧本、记录演练，并把剧本绑定到应急响应流程，让真实请求触发已演练序列、而非临场发挥。',
          },
          {
            q: '使用本地 RAG 需要遵守中国《数据安全法》和《个人信息保护法》吗？',
            a: '需要，且本地 RAG 在结构上对二者尤为友好。《数据安全法》(2021) 第 21 条建立数据分类分级制度，要求对"重要数据"采取强化保护；第 31 条规定"重要数据"的境内存储原则；跨境传输须经安全评估。《个人信息保护法》(PIPL) 第 38–40 条对个人信息出境提出严格条件（安全评估、认证或标准合同备案）。本地 RAG 把模型推理与向量库都留在境内基础设施上，从架构层面满足"重要数据存储于境内"与"避免不必要跨境传输"的原则。落地建议：(1) 完成数据分类分级，将敏感个人信息（如医疗、金融、生物识别）和重要数据明确标记并隔离；(2) 部署符合等级保护 2.0 的安全控制（金融、医疗、政府场景通常对应三级，关键信息基础设施可能对应四级）；(3) 与个人信息保护影响评估（PIPIA）联动 — 类似 DPIA，须在处理特殊类型个人信息或自动化决策前完成；(4) 对接 CAC（国家网信办）的合规框架，包括关键信息基础设施识别、年度风险评估、跨境数据出境申报；(5) 文档语言以中文为主，关键告知与同意条款须本地化；(6) 与 GDPR 并行时，取两者中更严格的要求作为统一基线，可同时满足中国与欧盟监管诉求。',
          },
          {
            q: '本地推理如何满足中国大型企业的合规要求？',
            a: '中国大型企业的合规要求通常涵盖三层：法律合规（数据安全法、PIPL、网络安全法、行业监管）、技术合规（等保 2.0、密评、信创要求）以及行业合规（金融业的 JR/T 0223、医疗业的 HIE 标准、央国企的国产化目录）。本地 RAG 部署的典型落地路径：(1) 硬件 — 优先选用国产 GPU（华为昇腾、海光、寒武纪等）或合规进口 GPU，部署在境内 IDC 或私有云；金融/政务客户通常要求双活或异地灾备；(2) 模型 — 选用国产开源模型（Qwen、DeepSeek、ChatGLM、Yi、Baichuan 等系列）或经过备案的境内模型，避免使用未备案的境外模型；(3) 身份与访问 — 对接企业现有 OIDC/SAML 身份源（华为云 IAM、腾讯云 CAM、阿里云 RAM 等），强制 MFA，敏感集合走二次审批；(4) 网络 — 私有 VLAN、白名单出站、对接企业 SOC 与 SIEM（如奇安信、深信服、绿盟）；(5) 审计与日志 — 满足等保 2.0 6 个月日志保留最低要求，敏感行业通常 1–3 年；与 SOC 联动实时告警；(6) 行业特定 — 金融场景遵循"两地三中心"灾备、JR/T 0223 加密评估，医疗场景遵循《医疗机构网络安全管理办法》与三级等保，央国企遵循信创化和国密算法（SM2/SM3/SM4）要求；(7) 数据出境 — 若涉及跨境业务，对接国家网信办申报通道，签订标准合同或申请安全评估。典型大型企业项目周期为 12–20 周，从基础设施选型、模型适配、安全集成、合规备案到上线试运行，比纯云方案的 2–4 周显著长，但拿到的是可通过监管审计与等保测评的稳定架构。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI：最佳本地 RAG](/zh/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — 不同自托管平台对应不同合规姿态，附遥测与许可注释。',
          '[面向业务流程与欧盟合规的本地 AI 智能体](/zh/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — 当检索喂给自动化工作流而非人类读者时的合规话题。',
          '[本地 LLM 邮件与日历自动化](/zh/power-local-llm/local-llm-email-and-calendar-automation) — 同一控制集适用的相邻业务自动化模式。',
          '[一步步在 PDF 上做本地 RAG](/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step) — 本地与笔记本模式的实操实现走读。',
          '[本地与 1,000 份 PDF 对话](/zh/power-local-llm/chat-with-1000-pdfs-locally) — 触及本地上限的较大语料运维指引。',
          '[Power Local LLM 中心](/zh/power-local-llm) — 自托管 LLM 部署完整指南库。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-es.png',
    title: 'RAG local para datos empresariales: IA conforme al RGPD para documentos sensibles (2026)',
    seoTitle: 'RAG local conforme al RGPD para documentos sensibles (2026)',
    intro:
      'Los equipos jurídicos, médicos y financieros se enfrentan al mismo problema: los documentos que más valor aportaría buscar con IA son precisamente los que no pueden salir de la organización. Este artículo recoge la arquitectura, el conjunto de controles y la matriz de decisión de patrones de despliegue para un RAG autoalojado que cumple el RGPD, la Ley de IA de la UE, HIPAA y las expectativas del Datenschutz alemán — redactado para el responsable de cumplimiento que necesita enviar un único documento a su equipo de TI y que este sepa qué construir.',
    metaDescription:
      'RAG local conforme al RGPD para equipos jurídicos, médicos y financieros: arquitectura, registro de auditoría, alcance de la EIPD y 3 patrones de despliegue.',
    twitterDescription:
      'RAG local que cumple el RGPD y la Ley de IA de la UE. Air-gap, registros de auditoría, trazabilidad de datos, alcance de la EIPD y 3 patrones de despliegue — el artículo que los responsables de cumplimiento envían a TI.',
    audience:
      'Responsables de cumplimiento de la UE, delegados de protección de datos (DPD), asesores jurídicos y arquitectos de TI responsables de construir RAG autoalojados sobre documentos confidenciales — contratos, historiales de pacientes, archivos de auditoría, salas de datos de M&A, correspondencia con reguladores.',
    readTime: '15 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'RAG local conforme al RGPD',
    targetKeywords: [
      'rag conforme rgpd',
      'rag local datos empresariales',
      'ley ia ue rag',
      'rag privado documentos confidenciales',
      'despliegue rag on-premise',
      'datenschutz rag',
      'eipd rag local',
    ],
    leadAnswerBlock:
      '**Un despliegue RAG autoalojado cumple el RGPD y la Ley de IA de la UE solo cuando seis controles se integran desde el primer día: alojamiento en air-gap o con egress estrictamente controlado, autenticación por usuario con acceso a documentos basado en roles, registros de auditoría inmutables que cubran la ingesta y la recuperación, cifrado de extremo a extremo en reposo y en tránsito, trazabilidad determinista del chunk hasta la fuente, y un procedimiento de eliminación por escrito que se propague desde el almacén de origen a través del índice vectorial y cualquier embedding en caché. El patrón de despliegue (portátil de un solo usuario, servidor on-prem, nube privada en la UE) determina qué controles son sencillos y cuáles requieren trabajo — no si los controles son obligatorios.**',
    quickAnswerTop: {
      en: {
        question: '¿El RAG local cumple el RGPD por defecto y qué patrón de despliegue deben elegir los equipos regulados?',
        answer:
          'El RAG local no cumple el RGPD por defecto. Ejecutar un modelo on-premise resuelve el problema de la transferencia transfronteriza de datos y reduce la lista de encargados del tratamiento, pero los artículos 5, 25, 30, 32 y 35 del RGPD siguen siendo aplicables: base jurídica, minimización de datos, registro de auditoría, seguridad del tratamiento y una EIPD para cualquier sistema que ingiera datos de categorías especiales a gran escala. Elige el patrón de portátil de un solo usuario para profesionales individuales y revisiones puntuales; un servidor on-prem para bases de conocimiento departamentales de hasta unos miles de documentos y 5–50 usuarios; una nube privada en la UE (nube soberana, claves gestionadas por el cliente, región exclusiva en la UE) para despliegues multi-entidad donde la resiliencia multiregional importa más que un air-gap completo. Independientemente del que elijas, los seis controles son los mismos — solo cambia el coste de implementación.',
        bullets: [
          'El alojamiento local resuelve la transferencia transfronteriza (artículos 44–49) y reduce la lista de encargados del tratamiento — no resuelve por sí solo la base jurídica, la EIPD ni los derechos de los interesados.',
          'Portátil de un solo usuario — ideal para abogados, médicos, auditores individuales y revisiones puntuales. Difícil de auditar a escala; el air-gap más sencillo.',
          'Servidor on-prem — ideal para despliegues departamentales de 5–50 usuarios. Registros de auditoría reales, RBAC, copias de seguridad y recuperación ante desastres. Mayor esfuerzo de TI.',
          'Nube privada en la UE — ideal para despliegues multi-entidad que necesitan resiliencia. Región soberana + claves gestionadas por el cliente + cláusulas de no entrenamiento de IA con datos del cliente, obligatorias.',
          'Una EIPD es obligatoria en virtud del artículo 35 cuando se ingieren datos de categorías especiales a gran escala, independientemente del patrón de despliegue.',
          'Las solicitudes de derecho al olvido deben propagarse a los documentos de origen, los índices vectoriales y los embeddings en caché — diseña el procedimiento de eliminación antes de la puesta en producción, no tras recibir la primera solicitud.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Comparación de patrones de despliegue', anchor: '#deployment-comparison' },
      { label: 'Elegir un patrón de despliegue', anchor: '#which-deployment' },
      { label: 'Por qué RAG local para datos sensibles', anchor: '#why-local-rag' },
      { label: 'Los seis controles que todo despliegue necesita', anchor: '#required-controls' },
      { label: 'Air-gap y control de egress', anchor: '#air-gap' },
      { label: 'Registro de auditoría que supere una revisión', anchor: '#audit-logging' },
      { label: 'Trazabilidad de datos del chunk a la fuente', anchor: '#data-lineage' },
      { label: 'Cifrado y control de acceso', anchor: '#encryption-access' },
      { label: 'Patrón de portátil de un solo usuario', anchor: '#laptop-pattern' },
      { label: 'Patrón de servidor on-prem', anchor: '#on-prem-pattern' },
      { label: 'Opciones de bases de datos vectoriales', anchor: '#vector-db-comparison' },
      { label: 'Patrón de nube privada en la UE', anchor: '#private-cloud-pattern' },
      { label: 'Clasificación según la Ley de IA de la UE', anchor: '#eu-ai-act' },
      { label: 'Requisitos de la EIPD', anchor: '#dpia-requirements' },
      { label: 'Notas específicas para Alemania (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Lista de verificación de cumplimiento', anchor: '#compliance-checklist' },
      { label: 'Errores frecuentes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**El alojamiento local es necesario pero no suficiente.** Ejecutar el modelo y el almacén vectorial en tu propio hardware resuelve la transferencia transfronteriza de datos y reduce la lista de encargados del tratamiento, pero los artículos 5, 25, 30, 32 y 35 del RGPD siguen siendo aplicables. La base jurídica, la minimización de datos, el registro de auditoría, la seguridad del tratamiento y las EIPD no se vuelven opcionales solo porque los datos permanezcan en las instalaciones.',
          '**Seis controles son innegociables** independientemente del patrón de despliegue: air-gap o control de egress estricto, autenticación por usuario con acceso basado en roles, registros de auditoría inmutables, cifrado en reposo y en tránsito, trazabilidad determinista del chunk hasta el documento de origen, y un procedimiento de eliminación por escrito que incluya el índice vectorial y cualquier embedding en caché.',
          '**Tres patrones de despliegue cubren la mayoría de los casos de uso regulados.** Portátil de un solo usuario para profesionales individuales y revisiones puntuales; servidor on-prem para bases de conocimiento departamentales de 5–50 usuarios; nube privada en la UE (región soberana, claves gestionadas por el cliente) para despliegues multi-entidad donde la resiliencia importa más que el air-gap completo.',
          '**La Ley de IA de la UE clasifica la mayoría de los RAG locales como sistemas de riesgo limitado** — pero en el momento en que la recuperación alimenta una decisión automatizada (puntuación de solvencia, selección de personal, elegibilidad a prestaciones), el despliegue pasa a ser de alto riesgo y activa la evaluación de conformidad completa, la supervisión post-comercialización y las obligaciones de supervisión humana.',
          '**Una EIPD es obligatoria en virtud del artículo 35** para cualquier RAG que ingiera datos de categorías especiales (salud, datos jurídicos, biométricos, políticos, de afiliación sindical) a gran escala, o cualquier sistema que produzca decisiones automatizadas con efectos jurídicos. Saltarse la EIPD significa saltarse la defensa en auditoría.',
          '**El derecho al olvido es la prueba de eliminación que más despliegues suspenden.** Los documentos de origen son fáciles. Los índices vectoriales se pueden reconstruir. Los embeddings en caché, los registros de recuperación y las respuestas almacenadas en el historial de chat son las partes que se pasan por alto — y las que un regulador preguntará.',
          '**Los modelos de embedding de código abierto son seguros para el RGPD en principio**, pero solo si (a) los pesos del modelo se descargan una vez y se fijan a un hash, (b) la inferencia se ejecuta íntegramente en hardware local sin telemetría, y (c) la ficha del modelo y la licencia se revisan para detectar cláusulas que entren en conflicto con el uso empresarial confidencial.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**6 controles obligatorios** para cualquier RAG regulado: air-gap, RBAC, registros de auditoría, cifrado, trazabilidad de datos, procedimiento de eliminación.',
          '**3 patrones de despliegue:** portátil de un solo usuario (profesionales individuales), servidor on-prem (5–50 usuarios), nube privada en la UE (multi-entidad).',
          '**La EIPD es obligatoria** en virtud del artículo 35 cuando se ingieren datos de categorías especiales (salud, jurídicos, biométricos) a gran escala.',
          '**Ley de IA de la UE:** la mayoría de los RAG locales = riesgo limitado; pasa a alto riesgo cuando la recuperación alimenta decisiones automatizadas (crédito, empleo, prestaciones).',
          '**El derecho al olvido** debe propagarse a documentos de origen, índices vectoriales, embeddings en caché Y el historial de respuestas.',
          '**Co-determinación del comité de empresa (Betriebsrat)** en virtud del §87 BetrVG requerida para cualquier RAG sobre contenido generado por empleados en Alemania.',
          '**Los modelos de embedding de código abierto** solo son conformes al RGPD si los pesos están fijados, la inferencia es completamente local y la licencia ha sido revisada.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Comparación de patrones de despliegue',
        content:
          'Cada patrón puede hacerse conforme al RGPD; lo que cambia es el coste de los controles y los modos de fallo cuando algo sale mal. Elige el patrón más sencillo que se ajuste al número de usuarios, la sensibilidad de los documentos y el requisito de resiliencia.',
        columns: ['Control', 'Portátil de un solo usuario', 'Servidor on-prem', 'Nube privada en la UE'],
        rows: [
          {
            'Control': 'Air-gap (sin red de salida)',
            'Portátil de un solo usuario': 'Trivial — desactivar la red',
            'Servidor on-prem': 'Alcanzable — VLAN + cortafuegos',
            'Nube privada en la UE': 'Difícil — solo lista de egress permitido',
          },
          {
            'Control': 'Registro de auditoría (quién, qué, cuándo)',
            'Portátil de un solo usuario': 'Manual — solo a nivel de SO',
            'Servidor on-prem': 'Sólido — pipeline de logs centralizado',
            'Nube privada en la UE': 'Sólido — logging nativo en la nube',
          },
          {
            'Control': 'Trazabilidad de datos (chunk → fuente)',
            'Portátil de un solo usuario': 'Solo archivos locales',
            'Servidor on-prem': 'Pipeline completamente trazable',
            'Nube privada en la UE': 'Completa — pero abarca regiones',
          },
          {
            'Control': 'Residencia de datos en la UE',
            'Portátil de un solo usuario': 'Inherente — ubicación física',
            'Servidor on-prem': 'Inherente — ubicación física',
            'Nube privada en la UE': 'Configurada — región soberana requerida',
          },
          {
            'Control': 'RBAC por usuario',
            'Portátil de un solo usuario': 'Un solo usuario — N/A',
            'Servidor on-prem': 'Proveedor de identidad + grupos',
            'Nube privada en la UE': 'IAM + SSO + ACL por colección',
          },
          {
            'Control': 'Copia de seguridad y recuperación ante desastres',
            'Portátil de un solo usuario': 'Disco externo cifrado',
            'Servidor on-prem': 'Cinta o copia de seguridad externa',
            'Nube privada en la UE': 'Replicación multi-AZ',
          },
          {
            'Control': 'Coste inicial',
            'Portátil de un solo usuario': 'Solo hardware — bajo',
            'Servidor on-prem': 'Servidor + integración — medio',
            'Nube privada en la UE': 'Suscripción + configuración — medio',
          },
          {
            'Control': 'Coste continuo',
            'Portátil de un solo usuario': 'Ninguno — tiempo de sysadmin',
            'Servidor on-prem': 'Operaciones de TI + electricidad + refrigeración',
            'Nube privada en la UE': 'Mensualidad recurrente',
          },
          {
            'Control': 'Ideal para',
            'Portátil de un solo usuario': 'Profesionales individuales, revisiones puntuales',
            'Servidor on-prem': '5–50 usuarios, bases de conocimiento departamentales',
            'Nube privada en la UE': 'Multi-entidad, despliegues resilientes',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Elegir un patrón de despliegue',
        content:
          '**La elección correcta depende del número de usuarios, la sensibilidad de los documentos, la presión de auditoría y la capacidad interna de TI.** Este atajo de decisión cubre la mayoría de las situaciones reales.',
        columns: ['Tu situación', 'Elige'],
        rows: [
          {
            'Tu situación': 'Abogado, médico o auditor individual que revisa un asunto cada vez',
            'Elige': 'Portátil de un solo usuario',
          },
          {
            'Tu situación': 'Sala de datos de M&A con 3–5 revisores nominados y fecha de cierre definida',
            'Elige': 'Portátil de un solo usuario o on-prem (según el volumen de documentos)',
          },
          {
            'Tu situación': 'Equipo de cumplimiento de 10–30 personas que comparte un archivo de correspondencia con reguladores',
            'Elige': 'Servidor on-prem',
          },
          {
            'Tu situación': 'Departamento hospitalario que construye un asistente de protocolos clínicos para 50 empleados',
            'Elige': 'Servidor on-prem',
          },
          {
            'Tu situación': 'Grupo multi-entidad que necesita un RAG compartido entre filiales en varios países de la UE',
            'Elige': 'Nube privada en la UE (región soberana + claves gestionadas por el cliente)',
          },
          {
            'Tu situación': 'Aseguradora con requisito de disponibilidad 24/7 y plan de recuperación ante desastres',
            'Elige': 'Nube privada en la UE',
          },
          {
            'Tu situación': 'Organismo público con datos clasificados o restringidos',
            'Elige': 'Solo on-prem con air-gap — la nube queda fuera de alcance',
          },
          {
            'Tu situación': 'Defensa de auditoría ante regulador en menos de 6 semanas',
            'Elige': 'Servidor on-prem (el más rápido para demostrar control)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Por qué RAG local para datos sensibles',
        content:
          '**El argumento a favor del RAG local frente al LLM-as-a-service en la nube no es ideología — es la forma que adopta la evaluación de riesgos del RGPD.** El RAG en la nube es viable para muchos casos de uso; para datos empresariales sensibles añade cinco riesgos que el RAG local elimina por construcción.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El RAG local mantiene tus documentos sensibles en tu propio hardware mientras proporciona a tu equipo búsqueda potenciada por IA — ningún dato sale del edificio, ningún encargado del tratamiento externo los toca, y no surge ninguna pregunta sobre transferencia transfronteriza.',
          },
          {
            type: 'plain-terms',
            text: 'Imagina que tu equipo jurídico pudiera buscar en 10.000 expedientes haciendo preguntas en lenguaje natural — pero los documentos nunca salieran de la sala de servidores. Eso es el RAG local: la IA lee tus documentos en tu hardware, responde tus preguntas en tu hardware, y nada se envía a ningún sitio. La ventaja de cumplimiento no es una característica — es la arquitectura.',
          },
        ],
        items: [
          '**Transferencia transfronteriza (artículos 44–49).** Enviar datos personales a un encargado del tratamiento fuera de la UE requiere cláusulas contractuales tipo, una evaluación del impacto de la transferencia y una respuesta creíble sobre si la jurisdicción receptora tiene poderes de citación que alcancen esos datos. El RAG local no transfiere datos — la pregunta no surge.',
          '**Proliferación de subencargados del tratamiento (artículo 28).** Los proveedores de LLM en la nube suelen depender de infraestructura de hiperescalador, servicios de moderación de contenido y proveedores de observabilidad. Cada uno es un subencargado que debe ser listado, contratado y auditado. El RAG local tiene cero subencargados por defecto.',
          '**Filtración de datos de entrenamiento.** Muchos términos de LLM en la nube se reservan el derecho de usar los prompts de los clientes para mejorar el modelo, a menos que se use un nivel enterprise de pago y se verifique la cláusula de no entrenamiento. El RAG local ejecuta modelos con pesos que tú controlas; nada sale del host.',
          '**Cláusulas de confidencialidad en contratos con clientes.** Los acuerdos con asesoría externa, los NDA de M&A y los acuerdos sobre datos de pacientes frecuentemente prohíben la transmisión del material protegido a encargados del tratamiento externos. El RAG local sortea la cláusula por completo.',
          '**Exposición a citaciones judiciales y procesos legales.** Los documentos almacenados con un proveedor en la nube pueden ser requeridos mediante un proceso legal dirigido al proveedor, con obligaciones de divulgación de las que el responsable del tratamiento puede ni siquiera ser notificado a tiempo. Los documentos que nunca salen de tus instalaciones solo pueden ser requeridos a ti.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El RAG local no es la respuesta correcta para todas las cargas de trabajo. La investigación de información pública, la generación de borradores de marketing, la asistencia de código en repositorios de código abierto — todo esto suele funcionar mejor con LLM en la nube porque la exposición al RGPD es baja y la brecha de calidad del modelo importa. El argumento de este artículo es específicamente para datos empresariales confidenciales: jurídicos, médicos, financieros, de RRHH, correspondencia con reguladores y secretos comerciales.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'Los seis controles que todo despliegue necesita',
        content:
          '**Estos seis controles son el suelo mínimo.** Todo despliegue regulado necesita los seis; el patrón de despliegue solo cambia cómo los implementas. Omitir cualquiera de ellos es la razón más frecuente por la que las auditorías salen mal.',
        numberedItems: [
          {
            title: 'Air-gap o control de egress estricto',
            whyItMatters:
              'Confirma que los documentos y embeddings no pueden filtrarse mediante llamadas salientes — SDK de telemetría, sondas de actualización del modelo, informadores de fallos, callbacks de moderación de contenido, CDN de terceros para fuentes. O bien deshabilita el acceso a la red por completo (air-gap real) o ejecuta una lista de egress permitido que solo autorice servidores de actualización firmados.',
          },
          {
            title: 'Autenticación por usuario con acceso basado en roles',
            whyItMatters:
              'Necesitas poder responder "quién accedió a qué documento" antes de que un regulador lo pregunte. Inicio de sesión único contra un proveedor de identidad, acceso por grupos a colecciones y ACL por documento donde el asunto lo requiera. Las cuentas compartidas no son un control — son un fallo de auditoría esperando a suceder.',
          },
          {
            title: 'Registros de auditoría inmutables que cubran la ingesta y la recuperación',
            whyItMatters:
              'Para cada documento: quién lo subió, cuándo, ruta de origen, hash. Para cada consulta: quién preguntó, qué se preguntó (si el logging lo permite), qué chunks se recuperaron, de qué IDs de documentos procedían, qué respuesta se devolvió. Los registros deben ser a prueba de manipulaciones — solo de adición, firmados, con una retención suficiente para cubrir la ventana de investigación de la autoridad supervisora. Para el rastro de auditoría a nivel de prompt — control de versiones, registros de cambios y reversiones — consulta [flujos de trabajo de control de versiones de prompts](https://www.promptquorum.com/es/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'Cifrado en reposo y en tránsito',
            whyItMatters:
              'Cifrado de disco completo en el host, TLS para cualquier llamada interna entre servicios, y gestión de claves que sobreviva a un portátil robado o una cuenta de administrador comprometida. Claves gestionadas por el cliente para despliegues en la nube. Sin estas medidas, el robo de un dispositivo se convierte en una violación de datos notificable en virtud del artículo 33.',
          },
          {
            title: 'Trazabilidad determinista de datos del chunk a la fuente',
            whyItMatters:
              'Cada chunk recuperado debe rastrearse hasta su documento de origen, página, sección y versión. Esto es lo que permite (a) verificar la respuesta, (b) atender una solicitud de eliminación, (c) defender el sistema ante un tribunal cuando se cuestiona un resumen generado. "No podemos reproducir qué chunk causó qué respuesta" no es una respuesta aceptable para una autoridad supervisora.',
          },
          {
            title: 'Procedimiento de eliminación por escrito que incluya el índice vectorial y los embeddings en caché',
            whyItMatters:
              'Una solicitud de derecho al olvido debe propagarse desde el almacén de origen, a través del índice vectorial, hasta cualquier embedding en caché, y a través de la retención de registros de recuperación. La mayoría de los despliegues gestionan la eliminación del origen correctamente y olvidan el resto. Documenta el procedimiento de eliminación antes de la puesta en producción; practícalo con datos sintéticos.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-gap y control de egress',
        content:
          '**Air-gap significa que el host no tiene ruta de red de salida; el control de egress significa que tiene una estrictamente permitida.** Ambas son aceptables; elige el modelo más sólido que tus operaciones puedan sostener.',
        items: [
          '**Air-gap real** — sin DHCP, sin resolución DNS a destinos públicos, sin TCP de salida. Las actualizaciones se realizan mediante medios firmados que un administrador conecta físicamente. Este es el modelo correcto para trabajo clasificado, determinadas redes hospitalarias y cualquier despliegue cuyo modelo de amenazas incluya una dependencia maliciosa.',
          '**Lista de egress permitido** — la red de salida solo se permite a una pequeña lista de destinos nombrados (servidores de actualización del modelo, tu proveedor de identidad, reenviadores de logs a colectores internos). Todo el demás tráfico se descarta en el cortafuegos. Este es el valor predeterminado práctico para la mayoría de los despliegues departamentales regulados.',
          '**Qué buscar en la plataforma**: cero telemetría por defecto, sin llamadas de salida durante la inferencia, sin CDN de fuentes en la interfaz de usuario, sin informadores de fallos que envíen cargas útiles. Verifica con una captura de paquetes o una herramienta como Little Snitch en el banco de pruebas antes de pasar a producción.',
          '**Gobernanza de actualizaciones** — los pesos del modelo, los pesos del embedder, el código de la aplicación y los parches del SO pasan todos por una ventana de actualización controlada. El administrador que promueve una actualización lo firma por escrito; el cambio se registra.',
          '**Ruptura de air-gap frecuente:** un SDK de analítica incluido con un componente de interfaz de terceros, una referencia a CDN de fuentes en el chrome de la aplicación, o una sonda de "comprobar actualizaciones" que se ejecuta al iniciar. Por eso el paso de verificación importa — no asumas nada sobre los valores predeterminados.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Realiza una captura de paquetes de 24 horas en el host con la aplicación abierta y en reposo. Cualquier tráfico de salida que no esté en la lista permitida es un hallazgo. Repite esto cada vez que se actualice la aplicación — las notas de versión suelen subestimar qué nuevas llamadas de salida se han añadido.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'Registro de auditoría que supere una revisión',
        content:
          '**El registro de auditoría es el artefacto que una autoridad supervisora leerá primero.** Debe responder dos preguntas para cada recuperación: quién preguntó y qué le dio el sistema. Sin eso estás argumentando con palabras; con un logging adecuado, estás presentando recibos.',
        items: [
          '**Eventos de ingesta**: ID de documento, hash (SHA-256), nombre de archivo, ruta de origen, subido por, marca de tiempo, etiqueta de clasificación, tamaño, número de páginas, grupo propietario, clase de retención. Etiqueta cada documento en la ingesta — la clasificación retroactiva de corpus grandes es difícil y rara vez está completa.',
          '**Eventos de recuperación**: ID de consulta, ID de usuario, marca de tiempo, IDs de chunks recuperados (e IDs de documentos de los que proceden), puntuaciones de recuperación, hash de la respuesta final, identificador del modelo, identificador del embedder, top-K utilizado. El texto de la consulta en sí es sensible — regístralo solo si tu base jurídica de tratamiento lo cubre; de lo contrario, registra el hash y la marca de tiempo.',
          '**Eventos administrativos**: promoción del modelo, cambio de embedder, reconstrucción del índice, cambios de usuario/grupo, cambios de ACL, cambios de política de acceso. Cada evento firmado por el administrador responsable.',
          '**Resistencia a manipulaciones**: registro de solo adición, cadena de hashes (cada entrada hace referencia al hash de la entrada anterior), clave de firma fuera de banda, reconciliación periódica con una copia separada mantenida por un administrador diferente o en un medio de escritura única.',
          '**Retención**: se alinea con la ventana de investigación de la autoridad supervisora — como mínimo el período de retención del asunto; comúnmente seis a siete años para industrias reguladas; más donde se apliquen normas sectoriales.',
          '**Pipeline**: la aplicación emite eventos estructurados; un reenviador los envía a un almacén de logs separado con acceso de escritura restringido. El servidor de aplicaciones nunca debe tener permiso para eliminar o reescribir entradas de logs — la separación de funciones es lo que hace que el log sea creíble.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Registrar el texto de la consulta introduce su propia pregunta sobre el RGPD — una consulta puede contener en sí misma datos personales (p. ej., "resume el historial médico del paciente X"). Decide en el momento del diseño si tu base jurídica de tratamiento cubre el registro de consultas, y si no lo hace, registra solo los metadatos necesarios para auditoría y diagnóstico operativo.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Trazabilidad de datos del chunk a la fuente',
        content:
          '**La trazabilidad es la columna vertebral de todos los demás controles.** Sin ella, las solicitudes de eliminación fallan, la verificación de respuestas es imposible y el rastro de auditoría se derrumba. Integra la trazabilidad desde la primera ingesta, no después.',
        items: [
          '**Trazabilidad a nivel de documento**: cada documento tiene un ID interno estable, un hash de contenido, una marca de tiempo de ingesta, un propietario, una clasificación y una clase de retención. El archivo original permanece en el almacén de origen; el sistema RAG mantiene una referencia, no el original.',
          '**Trazabilidad a nivel de chunk**: cada chunk hace referencia a su ID de documento padre, página (para PDFs), sección (para documentos estructurados), desplazamiento de caracteres, longitud y versión de la estrategia de chunking. Cuando vuelvas a hacer chunking (lo harás), los chunks antiguos se marcan como obsoletos, no se eliminan in situ — para que los logs de recuperación antiguos sigan siendo resolubles.',
          '**Trazabilidad a nivel de embedding**: cada vector de embedding hace referencia a su ID de chunk e identificador de embedder. Cuando cambies de embedder, los vectores antiguos se conservan hasta que los nuevos sean validados y cualquier asunto que los referenciara esté cerrado; solo entonces se purgan.',
          '**Trazabilidad a nivel de respuesta**: cada respuesta generada hace referencia a los IDs de chunks que la produjeron, el identificador del modelo, la versión de la plantilla de prompt y la marca de tiempo. Cuando un usuario pregunta "¿de dónde vino esta respuesta?", el sistema resuelve chunk → documento → página con un clic.',
          '**Reindexación sin romper la trazabilidad**: las reconstrucciones preservan los IDs de documentos e incrementan las versiones de la estrategia de chunking. Los IDs de chunks antiguos siguen siendo resolubles en los registros de recuperación incluso después de que el índice activo haya avanzado.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Prueba la cadena de trazabilidad trimestralmente. Elige una recuperación aleatoria del registro de auditoría y recórrela hacia atrás: ID de chunk → ID de documento → archivo original en el almacén de origen → clase de retención. Si algún paso está roto, corrige el esquema antes de la próxima inspección supervisora — no durante ella.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'Cifrado y control de acceso',
        content:
          '**Cifrado en reposo, cifrado en tránsito y control de acceso que se mapea a tu proveedor de identidad existente.** Estos son controles bien entendidos; el modo de fallo es olvidar una de las tres capas, no implementar mal la capa elegida.',
        items: [
          '**Cifrado en reposo** — cifrado de disco completo en el host (LUKS en Linux, BitLocker en Windows, FileVault en macOS para portátiles). Para servidores, cifra también las particiones que alojan el almacén vectorial y la etapa de ingesta. Claves gestionadas por el cliente para cualquier despliegue en la nube, con rotación de claves según tu política.',
          '**Cifrado en tránsito** — TLS para cualquier salto entre servicios, incluso en localhost. Política de cifrado alineada con tu línea base sectorial. TLS mutuo donde el modelo de amenazas lo justifique — típicamente servidor a servidor en despliegues en la nube.',
          '**Autenticación** — inicio de sesión único contra tu proveedor de identidad existente (OIDC, SAML). Sin cuentas locales en producción. MFA obligatorio para cualquier usuario con acceso administrativo o a colecciones sensibles.',
          '**Autorización** — acceso basado en grupos a nivel de colección; ACL a nivel de documento donde el asunto lo requiera (p. ej., salas de datos de M&A, investigaciones de empleo). El pipeline de recuperación debe aplicar las ACL en el momento de la consulta — no solo la interfaz de usuario. Un usuario que no puede ver un documento tampoco debe recibir sus chunks en la respuesta.',
          '**Acceso administrativo** — gestión de acceso privilegiado para cualquier cuenta que pueda leer o reconstruir índices, ver registros de auditoría o cambiar ACL. La elevación justo a tiempo con justificación registrada supera a los derechos de administrador permanentes.',
          '**Seguridad de endpoint** — dispositivos gestionados para despliegues con portátil (registrados en MDM, cifrados, política de bloqueo de pantalla aplicada). Un portátil de profesional individual con el almacén de documentos descifrado y desatendido en una cafetería es la violación del RGPD que no quieres reportar.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Patrón de portátil de un solo usuario',
        content:
          '**El portátil de un solo usuario es el patrón más fácil de hacer con air-gap y el más difícil de escalar.** Adecuado para profesionales individuales y revisiones puntuales; inadecuado para cualquier cosa que deba sobrevivir a un solo usuario o a su salida.',
        items: [
          '**Hardware** — un portátil de categoría workstation con cifrado de disco completo, una GPU discreta (o una máquina reciente de memoria unificada) y al menos 32 GB de RAM. El modelo y el embedder deben caber en memoria junto con la caché del almacén vectorial. Para requisitos de hardware y selección de modelos por VRAM, consulta la [guía de hardware para LLM locales](https://www.promptquorum.com/local-llms/local-llm-hardware-guide-2026).',
          '**Software** — una aplicación RAG de escritorio autocontenida que se ejecuta localmente; un LLM de código abierto con pesos descargados una vez y fijados a un hash; un embedder de código abierto; un almacén vectorial local en el disco cifrado. Para una comparación de modelos de código abierto adecuados para RAG local, consulta [los mejores modelos de código abierto para Ollama](https://www.promptquorum.com/local-llms/top-open-source-models-ollama).',
          '**Postura de red** — con air-gap durante el trabajo; reconectado solo para actualizaciones firmadas explícitas. Configura el cortafuegos del SO para descartar todas las conexiones de salida por defecto y crea excepciones explícitas para el flujo de actualización.',
          '**Manejo de documentos** — documentos de origen en el disco cifrado; una estructura de carpetas por asunto; copias de seguridad semanales cifradas en un disco externo almacenado en un lugar diferente.',
          '**Postura de auditoría** — el registro de auditoría a nivel del SO (inicio de sesión, acceso a archivos, eventos de periféricos) es el suelo mínimo. Los eventos a nivel de aplicación son más sencillos con el patrón de servidor on-prem; para el patrón de portátil, trata el log del SO como el registro principal y complementa con notas manuales por asunto.',
          '**Limitaciones** — un portátil de un solo usuario no es una plataforma multiusuario. Compartir el portátil, compartir cuentas o copiar el almacén de documentos al portátil de un compañero rompe la postura de auditoría y la evaluación de la base jurídica.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para profesionales individuales que trabajan asuntos confidenciales, el patrón de portátil de un solo usuario es genuinamente la postura de privacidad más sólida disponible — mejor que cualquier nube y más sólida que muchos despliegues on-prem. La contrapartida es operativa: cuando el portátil falla, el asunto hereda el tiempo de recuperación de tu disciplina de copias de seguridad.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'Patrón de servidor on-prem',
        content:
          '**El servidor on-prem es el patrón de trabajo habitual para RAG departamental regulado.** Escala a 5–50 usuarios y unos pocos miles de documentos, admite registros de auditoría adecuados y permanece dentro de tu perímetro físico. El coste es trabajo real de operaciones de TI.',
        items: [
          '**Hardware** — un servidor con una o dos GPU de nivel empresarial (las GPU de categoría workstation son aceptables para corpus más pequeños), discos redundantes, memoria ECC y un SAI. Planifica 2–4× el almacenamiento de tu corpus de documentos sin procesar para cubrir vectores, índices, logs y copias de seguridad.',
          '**Red** — una VLAN dedicada detrás del cortafuegos corporativo; lista de egress permitido o air-gap completo según el modelo de amenazas. Acceso interno solo a través de la red corporativa, sin ingreso público.',
          '**Pila de software** — una plataforma RAG autoalojada (una imagen de servidor independiente o un despliegue en contenedores), un LLM de código abierto como modelo de chat, un embedder de código abierto y un almacén vectorial apropiado para el tamaño del corpus. El servidor de aplicaciones, el almacén vectorial y el reenviador de logs se ejecutan como procesos separados con cuentas de servicio separadas.',
          '**Identidad** — federada con el proveedor de identidad corporativo; la pertenencia a grupos controla el acceso a las colecciones. Las colecciones sensibles requieren flujos de aprobación adicionales.',
          '**Copia de seguridad y recuperación ante desastres** — copias de seguridad incrementales nocturnas del almacén de documentos y el índice vectorial; copias de seguridad completas semanales; copia externa mantenida por TI. Procedimiento de restauración documentado y probado al menos anualmente.',
          '**Operaciones** — ventana de parcheo según la política de gestión de cambios; revisiones de acceso trimestrales; procedimiento de eliminación para solicitudes de derecho al olvido ensayado; ruta documentada de actualización del modelo y el embedder que preserve la trazabilidad.',
          '**Planificación de capacidad** — unos pocos miles de documentos y 5–50 usuarios concurrentes caben cómodamente en un servidor GPU de gama media. Más allá de eso, planifica un host más potente o pasar al patrón de nube privada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El RAG on-prem es el patrón que con más frecuencia falla por razones no técnicas: una copia de seguridad que nunca se ha restaurado, una cuenta de administrador compartida entre el personal de TI, un SAI que nadie ha probado, un reenviador de logs que ha estado descartando eventos silenciosamente durante dos meses. Los controles técnicos son más fáciles que la higiene operativa.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Opciones de bases de datos vectoriales para RAG on-prem',
        content:
          '**La elección del almacén vectorial rara vez determina el cumplimiento — pero sí da forma al coste operativo, el techo de escala y la limpieza con que puede implementarse el procedimiento de eliminación.** La mayoría de los despliegues regulados eligen una de estas seis opciones.',
        columns: ['Base de datos vectorial', 'Tipo', 'Autoalojamiento en la UE', 'Mejor patrón de RAG'],
        rows: [
          {
            'Base de datos vectorial': '**Chroma**',
            'Tipo': 'Código abierto, ligero',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'Portátil + on-prem pequeño',
          },
          {
            'Base de datos vectorial': '**Qdrant**',
            'Tipo': 'Código abierto, alto rendimiento',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'Servidor on-prem, filtrado intensivo',
          },
          {
            'Base de datos vectorial': '**Weaviate**',
            'Tipo': 'Código abierto, completo',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'On-prem + búsqueda híbrida',
          },
          {
            'Base de datos vectorial': '**Milvus**',
            'Tipo': 'Código abierto, empresarial',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'On-prem a gran escala',
          },
          {
            'Base de datos vectorial': '**pgvector**',
            'Tipo': 'Extensión de PostgreSQL',
            'Autoalojamiento en la UE': '✅',
            'Mejor patrón de RAG': 'Equipos que ya usan Postgres',
          },
          {
            'Base de datos vectorial': '**Pinecone**',
            'Tipo': 'SaaS gestionado',
            'Autoalojamiento en la UE': '⚠️ Alojado en EE.UU.',
            'Mejor patrón de RAG': 'Solo nube privada en la UE (con reservas)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Patrón de nube privada en la UE',
        content:
          '**El patrón de nube privada en la UE utiliza un proveedor de nube en región soberana con claves gestionadas por el cliente, residencia de datos exclusivamente en la UE y una cláusula contractual de no entrenamiento de IA que cubra los datos del cliente.** Es la respuesta correcta para despliegues multi-entidad, requisitos de resiliencia multiregional y equipos que carecen de capacidad operativa para un on-prem real.',
        items: [
          '**Selección del proveedor** — la oferta soberana en la UE de un hiperescalador o un proveedor de nube europeo. El DPA debe listar cada subencargado del tratamiento; los mecanismos de transferencia deben abordarse si algún subencargado está fuera del EEE. El análisis del impacto de la transferencia al estilo Schrems II forma parte del expediente incluso cuando el encargado inmediato tiene sede en la UE.',
          '**Región** — exclusivamente en la UE, con garantías explícitas de residencia de datos. Replicación entre regiones solo hacia otras regiones de la UE. Sin región de EE.UU. como failover, ni siquiera temporalmente, ni siquiera para copias de seguridad.',
          '**Cifrado** — claves gestionadas por el cliente con rotación; bring-your-own-key donde el proveedor lo admita; eventos de acceso a claves registrados separadamente de los logs operativos del proveedor de nube.',
          '**Red** — VPC privada sin ingreso público; acceso solo a través de conectividad privada (enlace dedicado o VPN) desde tu red corporativa; lista de egress permitido para cualquier dependencia de salida.',
          '**Identidad** — federada con tu IdP corporativo; IAM nativo de la nube vinculado a identidades de usuario, no a cuentas de servicio compartidas; ACL por colección aplicadas en el pipeline de recuperación.',
          '**Logging** — log de auditoría nativo de la nube alimentado en tu SIEM existente; ingesta separada para eventos de auditoría de la aplicación; retención a prueba de manipulaciones que cumpla las expectativas del supervisor.',
          '**Contratos** — el DPA debe cumplir el artículo 28, listar subencargados, abordar las cláusulas contractuales tipo donde sea necesario e incluir una cláusula explícita de no entrenamiento con datos del cliente que cubra tanto los pesos del LLM como cualquier servicio auxiliar (búsqueda, telemetría, soporte).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El patrón de nube privada en la UE parece más permisivo que el on-prem porque utiliza un encargado del tratamiento externo — pero con región soberana, claves gestionadas por el cliente, cláusula contractual de no entrenamiento y control de egress adecuado, puede igualar o superar al on-prem en disponibilidad y postura de auditoría. El expediente de cumplimiento es más voluminoso; el riesgo operativo es menor.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'Clasificación según la Ley de IA de la UE: riesgo limitado frente a alto riesgo',
        content:
          '**La mayoría de los despliegues de RAG local son sistemas de IA de riesgo limitado según la Ley de IA de la UE — pero en el momento en que la recuperación alimenta una decisión automatizada que afecta a una persona, la clasificación pasa a alto riesgo y las obligaciones se multiplican.** Clasifica antes de construir.',
        items: [
          '**Riesgo limitado (la mayoría de los RAG locales)** — el sistema recupera y resume documentos para asistir a un humano; el humano toma la decisión. Las obligaciones son principalmente de transparencia: los usuarios deben saber que están interactuando con una IA, el contenido generado debe ser identificable como tal, y sin diseño manipulador o engañoso.',
          '**Alto riesgo** — la recuperación alimenta una decisión automatizada en dominios que la Ley enumera: puntuación de solvencia, selección de personal, admisiones educativas, servicios públicos esenciales, aplicación de la ley, migración, justicia, identificación biométrica, infraestructura crítica. Un RAG de apoyo a la decisión clínica que recomienda tratamientos es de alto riesgo; un RAG que resume protocolos clínicos para ayudar a un médico a leer directrices más rápido no lo es.',
          '**Obligaciones de alto riesgo** — sistema de gestión de riesgos a lo largo del ciclo de vida, gobernanza de datos (datos de entrenamiento, validación y prueba documentados), documentación técnica, registro automático de eventos, transparencia e información a los usuarios, supervisión humana, medidas de precisión y robustez, evaluación de conformidad antes de la comercialización, supervisión post-comercialización.',
          '**Consideraciones sobre la IA de propósito general** — usar un LLM de propósito general (de código abierto o no) no transfiere las obligaciones de alto riesgo al proveedor del modelo. El implantador (tu organización) lleva las obligaciones de alto riesgo para el sistema que construyes con ese modelo.',
          '**Prácticas prohibidas** — puntuación social, rastreo no selectivo de imágenes faciales, reconocimiento de emociones en lugares de trabajo y centros educativos, determinada categorización biométrica en tiempo real. Estas quedan descartadas independientemente de lo localmente que las ejecutes.',
          '**Documentación como artefacto de auditoría** — el expediente técnico requerido para sistemas de alto riesgo no es un entregable único; es un documento vivo. Vincúlalo a tu proceso de gestión de cambios para que cada promoción de modelo, cambio de embedder y cambio de ACL quede reflejado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La línea entre alto riesgo y riesgo limitado la traza el caso de uso, no la tecnología. El mismo almacén vectorial y el mismo modelo pueden ser de riesgo limitado en un despliegue de asistente de investigación y de alto riesgo en un despliegue de selección de personal de RRHH. Clasifica por caso de uso, no por plataforma.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'Requisitos de la EIPD',
        content:
          '**Una Evaluación de Impacto sobre la Protección de Datos (artículo 35) es obligatoria para el tratamiento que pueda suponer un alto riesgo para los derechos y libertades de los interesados.** La mayoría de los RAG locales regulados están en el ámbito de aplicación. Trata la EIPD como el documento de diseño, no como un artefacto de cumplimiento a posteriori.',
        items: [
          '**Cuándo es obligatoria** — evaluación sistemática y exhaustiva que incluya elaboración de perfiles con efectos jurídicos; tratamiento a gran escala de datos de categorías especiales (salud, datos jurídicos, biométricos, raciales, políticos, religiosos, sindicales); monitoreo sistemático de zonas de acceso público. Las autoridades supervisoras nacionales publican listas de operaciones que siempre requieren una EIPD — consulta la tuya.',
          '**Alcance de la EIPD** — finalidad y base jurídica; descripción de las operaciones de tratamiento; evaluación de necesidad y proporcionalidad; evaluación de riesgos para los interesados; mitigaciones y riesgo residual; consulta con el DPD y (donde el riesgo residual sea alto) con la autoridad supervisora antes de iniciar el tratamiento.',
          '**Riesgos específicos del RAG** a abordar: reidentificación de individuos a partir de chunks recuperados; generación de información inexacta que afecte a una persona; filtración a través de logs o copias de seguridad; completitud de la eliminación en solicitudes de derecho al olvido; contaminación cruzada entre colecciones; acceso demasiado amplio para usuarios con muchos privilegios.',
          '**Mitigaciones a documentar** — los seis controles anteriores, más redacción o seudonimización a nivel de chunk donde la base jurídica sea el consentimiento o el interés legítimo; procedimiento de eliminación con evidencia de ensayo; revisiones de acceso en una cadencia establecida.',
          '**Revisores** — el DPD lo aprueba; la autoridad supervisora es consultada donde el riesgo residual tras la mitigación siga siendo alto. La EIPD firmada va en el expediente técnico junto con la documentación de conformidad con la Ley de IA de la UE si el sistema también es de alto riesgo.',
          '**Documento vivo** — vuelve a ejecutar la EIPD cuando el corpus se amplíe materialmente, cuando el modelo o el embedder cambie, cuando los límites de acceso cambien, o anualmente como base. Vincula esto a tu proceso de gestión de cambios.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Una EIPD redactada en la semana dos del proyecto es una herramienta de planificación. Una EIPD redactada en la semana diez es un documento defensivo. La primera es mucho más útil y tiende a sacar a la luz cambios de diseño que reducen el riesgo residual final. Comienza la EIPD antes de la decisión de adquisición, no después del despliegue.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'Notas específicas para Alemania (Datenschutz)',
        content:
          '**La práctica alemana de protección de datos superpone el BDSG-Neu, las normas sectoriales y la co-determinación del comité de empresa sobre la línea de base del RGPD.** Un despliegue de RAG que satisface el RGPD genérico puede aún así no superar una revisión alemana si se pasan por alto estos puntos.',
        items: [
          '**Co-determinación del comité de empresa (Betriebsrat)** — en virtud del §87 BetrVG, cualquier sistema que monitoree el rendimiento o el comportamiento de los empleados requiere un acuerdo del comité de empresa antes del despliegue. Un RAG sobre contenido generado por empleados (correos electrónicos, documentos internos) típicamente lo activa. Involucra al comité de empresa en el momento del diseño; el acuerdo (Betriebsvereinbarung) pasa a formar parte del expediente de base jurídica.',
          '**Confidencialidad sectorial** — el §203 StGB penaliza la violación de la confidencialidad profesional (abogados, médicos, asesores fiscales, auditores). Desplegar un RAG de forma que exponga datos de clientes protegidos a personal no vinculado o a encargados del tratamiento externos puede constituir un delito penal, no solo un asunto civil. El patrón on-prem o con air-gap es la opción más segura en estos sectores.',
          '**Telemediengesetz (TTDSG) y telemetría** — la telemetría de salida que toca los dispositivos de los usuarios finales está regulada no solo por el RGPD sino también por el TTDSG. El air-gap elimina la cuestión; los despliegues con control de egress deben verificar que cualquier llamada de salida esté consentida, sea necesaria o sea estrictamente técnica.',
          '**Expectativas de transparencia** — las normas de transparencia federales y estatales ocasionalmente requieren la divulgación de la toma de decisiones asistida por IA a los interesados. Incluso donde no sea estrictamente requerido, la divulgación en lenguaje claro de que la recuperación es asistida por IA y que el revisor humano sigue siendo responsable de la decisión es el valor predeterminado defendible.',
          '**Aufsichtsbehörden (autoridades supervisoras estatales)** — la supervisión del Datenschutz está organizada a nivel estatal para el sector privado. Contacta con el Landesbeauftragte für Datenschutz relevante donde se necesite consulta en virtud del artículo 36. Los documentos de posición de los principales Landesbeauftragte sobre herramientas de IA son insumos útiles para la EIPD.',
          '**Idioma de la documentación** — las autoridades supervisoras alemanas aceptan documentación en inglés, pero los artefactos clave dirigidos a los usuarios (avisos de privacidad, divulgaciones de transparencia, acuerdos del comité de empresa) deben estar en alemán por razones tanto legales como prácticas.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Lista de verificación de cumplimiento antes de la puesta en producción',
        content:
          '**Recorre esta lista de principio a fin antes de cualquier despliegue en producción.** Cada elemento es un modo de fallo real de una auditoría real; la lista es intencionadamente corta para que realmente se use.',
        items: [
          '☐ **Base jurídica documentada** para cada categoría de datos de origen — consentimiento, contrato, obligación legal, interés vital, tarea pública o interés legítimo con una prueba de ponderación en el expediente.',
          '☐ **EIPD aprobada por el DPD**, con un procedimiento de eliminación ensayado adjunto.',
          '☐ **Registro de actividades de tratamiento (artículo 30)** actualizado para incluir el sistema RAG, las categorías de datos, la retención, los destinatarios y los mecanismos de transferencia (típicamente ninguno para RAG local).',
          '☐ **Seis controles verificados de extremo a extremo**: air-gap o lista de egress permitido, RBAC, registros de auditoría, cifrado, trazabilidad, procedimiento de eliminación.',
          '☐ **Captura de paquetes de salida** limpia durante una prueba de saturación de 24 horas; repetida tras cada actualización de la aplicación.',
          '☐ **Integración del proveedor de identidad** probada con un usuario real de cada nivel de acceso; el acceso a colecciones sensibles requiere elevación separada.',
          '☐ **Copias de seguridad realizadas y una restauración realmente probada** en hardware aislado, no solo verificada en un panel de estado.',
          '☐ **Procedimiento de derecho al olvido ensayado** con datos sintéticos que cubra el almacén de origen, el índice vectorial, los embeddings en caché y la retención del registro de recuperación.',
          '☐ **Clasificación según la Ley de IA de la UE** confirmada (riesgo limitado frente a alto riesgo); expediente técnico en su lugar si es de alto riesgo.',
          '☐ **Contratos de proveedores (si los hay) revisados**: DPA conforme al artículo 28, subencargados listados, cláusula de no entrenamiento que cubra los datos del cliente.',
          '☐ **Acuerdo del comité de empresa** establecido donde el contenido generado por empleados esté en el ámbito de aplicación (Alemania; normas similares en otros lugares de la UE).',
          '☐ **Aviso de transparencia** redactado en lenguaje comprensible para el usuario que explique la asistencia de IA, el humano en el bucle y el flujo de datos.',
          '☐ **Procedimiento de respuesta a incidentes** actualizado para incluir escenarios específicos del RAG: filtración del índice, manipulación de logs, fallo de eliminación, cambio de modelo con ruptura de trazabilidad posterior.',
          '☐ **Revisión de acceso trimestral** programada y asignada; primera revisión en el calendario antes de la puesta en producción.',
          '☐ **Actualización anual de la EIPD** programada y vinculada al proceso de gestión de cambios.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores frecuentes',
        items: [
          '**Error 1: Tratar "local" como sinónimo de "conforme".** Ejecutar on-prem resuelve las preguntas de transferencia y de encargado del tratamiento; no resuelve la base jurídica, la EIPD, el registro de auditoría ni los derechos de los interesados. El cumplimiento es un programa por capas, no una elección de despliegue.',
          '**Error 2: Saltarse la EIPD porque el sistema es "solo una herramienta de búsqueda".** Una herramienta de búsqueda que ingiere datos de categorías especiales a gran escala es exactamente lo que cubre el artículo 35. Saltarse la EIPD significa saltarse la defensa en auditoría.',
          '**Error 3: Registrar el texto de la consulta sin verificar la base jurídica.** Las propias consultas son datos personales cuando hacen referencia a individuos. Decide en el momento del diseño si tu base jurídica de tratamiento cubre el registro de consultas; si no, registra solo el hash y los metadatos.',
          '**Error 4: Olvidar los embeddings en caché en el procedimiento de eliminación.** La eliminación del origen funciona. La reconstrucción del índice vectorial funciona. La capa de caché que tu plataforma añadió para el rendimiento, las huellas de embedding en el registro de recuperación y el historial de respuestas en el almacén de chat son las partes que se pasan por alto.',
          '**Error 5: Permitir a los usuarios con muchos privilegios saltarse las ACL de colección.** "Los administradores pueden verlo todo" es conveniente y muy común; también es la razón más frecuente por la que las auditorías salen mal. El acceso privilegiado debe estar a su vez controlado, limitado en el tiempo y justificado por uso.',
          '**Error 6: Reutilizar un espacio de trabajo para varios asuntos o clientes.** La contaminación cruzada de citas y contexto es un fallo de confidencialidad incluso antes de que ninguna parte externa lo vea. Un asunto o cliente por colección; ACL separadas; retención separada.',
          '**Error 7: Comprar air-gap y luego conectar un teléfono personal para las pruebas.** El perímetro de air-gap debe incluir a las personas que pueden transportar datos a través de él. La política de endpoints es parte del control, no una preocupación separada.',
          '**Error 8: Tratar la elección de modelo y embedder como "configurar y olvidar".** Cada actualización es un evento de gestión de cambios con implicaciones para la EIPD, la trazabilidad y el rastro de auditoría. Planifica el flujo de trabajo de actualización antes del primer despliegue en producción.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Texto completo del RGPD (Oficial)](https://gdpr-info.eu/) — Texto completo del Reglamento General de Protección de Datos con comentario artículo por artículo.',
          '[Texto completo de la Ley de IA de la UE](https://artificialintelligenceact.eu/) — Texto completo del reglamento con el marco de clasificación de riesgos.',
          '[Marco de Gestión de Riesgos de IA del NIST](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Marco de gobernanza federal de EE.UU. aplicable a la evaluación de riesgos de IA.',
          '[BDSG-Neu (Ley Federal Alemana de Protección de Datos)](https://www.gesetze-im-internet.de/bdsg_2018/) — Implementación alemana del RGPD con adiciones sectoriales.',
          '[Directrices del CEPD sobre EIPD](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — Orientación del Comité Europeo de Protección de Datos sobre cuándo y cómo realizar EIPDs.',
          '[BfDI (Comisionado Federal Alemán para la Protección de Datos)](https://www.bfdi.bund.de/) — Documentos de posición del Comisionado Federal Alemán para la Protección de Datos sobre despliegues de IA.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: '¿Ejecutar RAG localmente cumple automáticamente el RGPD?',
            a: 'No. El alojamiento local resuelve la pregunta sobre la transferencia transfronteriza y reduce la lista de encargados del tratamiento, pero los principios del RGPD en el artículo 5 (licitud, lealtad, transparencia, limitación de la finalidad, minimización de datos, exactitud, limitación del plazo de conservación, integridad y confidencialidad, responsabilidad proactiva) siguen siendo aplicables. El artículo 25 (protección de datos desde el diseño y por defecto), el artículo 30 (registro de actividades de tratamiento), el artículo 32 (seguridad del tratamiento) y el artículo 35 (EIPD) se aplican independientemente de dónde se ejecute el modelo. El RAG local es un punto de partida sólido, no una postura de cumplimiento completa.',
          },
          {
            q: '¿Qué se requiere para el cumplimiento de la Ley de IA de la UE en un despliegue de RAG local?',
            a: 'Clasifica el caso de uso como riesgo limitado o alto riesgo. La mayoría de los despliegues de asistente de recuperación son de riesgo limitado y requieren obligaciones de transparencia: los usuarios deben saber que están interactuando con una IA, el contenido generado debe ser identificable. En el momento en que la recuperación alimenta una decisión automatizada en un dominio enumerado (crédito, empleo, educación, servicios públicos, aplicación de la ley, migración, justicia, biometría, infraestructura crítica), el despliegue es de alto riesgo y se aplican las obligaciones completas: sistema de gestión de riesgos, gobernanza de datos, documentación técnica, registro automático de eventos, transparencia, supervisión humana, precisión y robustez, evaluación de conformidad y supervisión post-comercialización.',
          },
          {
            q: '¿Necesito una EIPD para el RAG local?',
            a: 'Una EIPD en virtud del artículo 35 es obligatoria para el tratamiento que pueda suponer un alto riesgo para los derechos y libertades de los interesados — lo que incluye el tratamiento a gran escala de datos de categorías especiales (salud, datos jurídicos, biométricos, raciales, políticos, religiosos, sindicales) y la elaboración de perfiles sistemática con efectos jurídicos. La mayoría del RAG local regulado (jurídico, médico, financiero, investigaciones de RRHH) está en el ámbito de aplicación. Ejecuta la EIPD pronto, trátala como el documento de diseño y ensaya las mitigaciones — especialmente el procedimiento de eliminación — antes de la puesta en producción.',
          },
          {
            q: '¿Puedo compartir un despliegue de RAG local entre departamentos?',
            a: 'Sí, con cuidado. El control de acceso a nivel de colección, la autenticación por usuario contra un único proveedor de identidad y una base jurídica clara para el uso de cada departamento son el suelo mínimo. La EIPD debe cubrir el conjunto más amplio de finalidades de tratamiento; si algún departamento necesita una base jurídica diferente (p. ej., investigaciones de RRHH bajo interés legítimo mientras el personal clínico opera bajo tarea pública), las colecciones separadas y los grupos de acceso separados son más fáciles de defender que una sola colección con ACL elaboradas.',
          },
          {
            q: '¿Cómo audito quién accedió a qué documento?',
            a: 'Registra cada recuperación con ID de usuario, marca de tiempo, IDs de chunks recuperados y los IDs de documentos de los que proceden. Reenvía los eventos a un almacén de logs separado con acceso de escritura restringido bajo diferente control administrativo del servidor de aplicaciones (separación de funciones). Usa almacenamiento de solo adición con una cadena de hashes para que la manipulación sea detectable. La retención debe alinearse con la ventana de investigación de la autoridad supervisora y cualquier norma sectorial — seis a siete años es frecuente en industrias reguladas.',
          },
          {
            q: '¿Los modelos de embedding de código abierto son seguros para el RGPD?',
            a: 'En principio sí, con tres condiciones. Primero, los pesos se descargan una vez y se fijan a un hash para poder demostrar qué estaba ejecutándose. Segundo, la inferencia es completamente local sin telemetría ni llamadas de salida — verifica con una captura de paquetes, no te fíes solo de la documentación. Tercero, la ficha del modelo y la licencia se revisan para detectar cláusulas que entren en conflicto con el uso empresarial confidencial (algunas licencias de pesos abiertos adjuntan restricciones sobre tipos de datos o casos de uso). El valor predeterminado práctico para despliegues regulados es incluir en la lista permitida un pequeño número de embedders validados y revisarlos en cada actualización.',
          },
          {
            q: '¿Qué hay de la trazabilidad de datos para los resultados generados por IA?',
            a: 'Cada respuesta generada debe hacer referencia a los IDs de chunks que la produjeron, el identificador del modelo, la versión de la plantilla de prompt y la marca de tiempo. Los chunks se resuelven entonces a IDs de documentos, que se resuelven a documentos de origen. Esta cadena es lo que permite verificar la respuesta, defenderla ante un cuestionamiento, atender una solicitud de eliminación y reproducir el resultado más tarde. Sin ella, "la IA lo dijo" es la defensa de auditoría — lo que no es defensa alguna.',
          },
          {
            q: '¿Puedo usar RAG local para documentos confidenciales de clientes?',
            a: 'A menudo sí, a veces no. Muchos acuerdos con asesoría externa, NDA de M&A y contratos de datos de pacientes permiten la revisión asistida por IA siempre que los datos no salgan de un límite definido y se cumplan ciertos controles. El RAG local cumple el requisito de límite por construcción; la lista de controles específica del contrato (cifrado, acceso, auditoría, retención, notificación de violaciones) debe seguir siendo respetada. Donde el contrato prohíbe por completo el tratamiento mediante IA, ningún patrón de despliegue lo soluciona — la prohibición se aplica tanto si la IA es local como remota.',
          },
          {
            q: '¿Qué registro es necesario para el cumplimiento?',
            a: 'Eventos de ingesta (ID de documento, hash, origen, cargador, marca de tiempo, clasificación), eventos de recuperación (ID de usuario, metadatos de consulta o hash, IDs de chunks recuperados, referencia de respuesta, identificador de modelo/embedder), eventos administrativos (promoción del modelo, cambio de embedder, cambio de ACL, cambio de usuario/grupo) y eventos operativos (copia de seguridad, restauración, rotación de claves). Todos los eventos reenviados a un almacén de logs separado, de solo adición, con cadena de hashes y retenidos según tus requisitos de asunto y sector.',
          },
          {
            q: '¿Cómo gestiono las solicitudes de derecho al olvido en RAG?',
            a: 'Con un procedimiento documentado que recorra la eliminación a través de cada capa: almacén de documentos de origen, índice vectorial, embeddings en caché, retención del registro de recuperación (donde la base jurídica permita la eliminación de la entrada del log) y cualquier respuesta almacenada en el historial de chat. La eliminación del origen es sencilla; la reconstrucción del índice vectorial está bien entendida; los embeddings en caché y el historial de respuestas son las partes que la mayoría de los despliegues pasan por alto. Ensaya el procedimiento con datos sintéticos, documenta el ensayo y vincula el procedimiento a tu proceso de respuesta a incidentes para que una solicitud real active la secuencia ensayada y no la improvisación.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: el mejor RAG local](/es/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — qué plataformas autoalojadas se adaptan a cada postura de cumplimiento, con notas sobre telemetría y licencias.',
          '[Agentes de IA locales para flujos de trabajo empresariales y cumplimiento en la UE](/es/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — tema de cumplimiento adyacente cuando la recuperación alimenta pasos de flujo de trabajo automatizados en lugar de un lector humano.',
          '[Automatización local de correo electrónico y calendario con LLM](/es/power-local-llm/local-llm-email-and-calendar-automation) — patrones de automatización empresarial adyacentes donde se aplica el mismo conjunto de controles.',
          '[RAG local en tus PDFs paso a paso](/es/power-local-llm/local-rag-on-your-pdfs-step-by-step) — guía de implementación práctica para los patrones on-prem y de portátil.',
          '[Chatea con 1.000 PDFs localmente](/es/power-local-llm/chat-with-1000-pdfs-locally) — orientación operativa para corpus más grandes que presionan el techo del on-prem.',
          '[Hub de Power Local LLM](/es/power-local-llm) — la biblioteca completa de guías para despliegues de LLM autoalojados.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RAG local para datos empresariales: IA conforme al RGPD para documentos sensibles (2026)',
      description: 'RAG local conforme al RGPD para equipos jurídicos, médicos y financieros. Arquitectura, registro de auditoría, alcance de la EIPD y 3 patrones de despliegue comparados.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-rag-for-private-business-data',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
},
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-ko.png',
    title: '기업 민감 문서를 위한 로컬 RAG: GDPR 준수 AI 솔루션 (2026)',
    seoTitle: '로컬 RAG GDPR 준수 — 민감 문서용 AI (2026)',
    intro:
      '법무, 의료, 재무 팀은 동일한 문제에 직면합니다. AI로 검색하면 가장 큰 가치를 얻을 수 있는 문서가 바로 조직 외부로 유출되어서는 안 되는 문서입니다. 이 글은 GDPR, EU AI Act, HIPAA 및 독일 Datenschutz 요건을 준수하는 자체 호스팅 RAG를 위한 아키텍처, 제어 항목 및 배포 패턴 의사결정 매트릭스를 담고 있습니다. 컴플라이언스 담당자가 IT 팀에 단 하나의 문서를 전달하여 무엇을 구축해야 하는지 명확히 알 수 있도록 작성되었습니다.',
    metaDescription:
      '법무·의료·재무 팀을 위한 로컬 RAG GDPR 준수: 아키텍처, 감사 로그, DPIA 범위, 3가지 배포 패턴.',
    twitterDescription:
      'GDPR 및 EU AI Act 준수 로컬 RAG. Air-gap, 감사 로그, 데이터 추적성, DPIA 범위 및 3가지 배포 패턴 — 컴플라이언스 담당자가 IT 팀에 전달하는 바로 그 글.',
    audience:
      'EU 컴플라이언스 담당자, 데이터 보호 책임자(DPO), 법무 자문 및 기밀 문서(계약서, 환자 기록, 감사 파일, M&A 데이터룸, 규제 당국 서신)에 대한 자체 호스팅 RAG를 구축하는 IT 아키텍트.',
    readTime: '15분 분량',
    educationalLevel: 'Advanced',
    primaryTerm: 'GDPR 준수 로컬 RAG',
    targetKeywords: [
      'gdpr 준수 rag',
      '로컬 rag 기업 데이터',
      'eu ai act rag',
      '로컬 rag 민감 문서',
      'on-premise rag 배포',
      '개인정보보호 rag 로컬',
      'dpia rag 로컬',
    ],
    leadAnswerBlock:
      '**자체 호스팅 RAG 배포가 GDPR 및 EU AI Act를 준수하려면 첫날부터 여섯 가지 제어 항목이 통합되어야 합니다. 즉 air-gap 또는 엄격한 egress 제어 호스팅, 역할 기반 문서 접근을 갖춘 사용자별 인증, 수집과 검색을 포괄하는 불변 감사 로그, 저장 및 전송 전 구간 암호화, chunk에서 출처까지의 결정론적 데이터 추적성, 그리고 벡터 인덱스 및 캐시된 임베딩까지 전파되는 서면 삭제 절차입니다. 배포 패턴(단일 사용자 노트북, 온프레미스 서버, EU 프라이빗 클라우드)은 각 제어 항목의 구현 난이도를 결정하지, 제어 항목이 필수인지 여부를 결정하지 않습니다.**',
    quickAnswerTop: {
      ko: {
        question: '로컬 RAG는 기본적으로 GDPR을 준수하며, 규제 대상 팀은 어떤 배포 패턴을 선택해야 합니까?',
        answer:
          '로컬 RAG는 기본적으로 GDPR을 준수하지 않습니다. 온프레미스에서 모델을 실행하면 국경 간 데이터 이전 문제를 해결하고 수탁처리자 목록을 줄일 수 있지만, GDPR 제5조, 제25조, 제30조, 제32조, 제35조는 여전히 적용됩니다. 법적 근거, 데이터 최소화, 감사 로그, 처리 보안, 그리고 대규모로 특수 범주 데이터를 수집하는 모든 시스템에 대한 DPIA가 필요합니다. 개인 전문가 및 단발성 검토에는 단일 사용자 노트북 패턴을 선택하십시오. 수천 건의 문서와 5~50명의 사용자를 보유한 부서 지식 베이스에는 온프레미스 서버를, 복원력이 완전한 air-gap보다 더 중요한 멀티 엔티티 배포에는 EU 프라이빗 클라우드(주권 클라우드, 고객 관리 키, EU 전용 리전)를 선택하십시오. 어느 것을 선택하든 여섯 가지 제어 항목은 동일하며, 구현 비용만 달라집니다.',
        bullets: [
          '로컬 호스팅은 국경 간 이전(제44~49조)을 해결하고 수탁처리자 목록을 줄입니다. 그러나 법적 근거, DPIA, 정보주체 권리는 자동으로 해결되지 않습니다.',
          '단일 사용자 노트북 — 개인 변호사, 의사, 감사인 및 단발성 검토에 적합합니다. 가장 간단한 air-gap 구성이 가능합니다.',
          '온프레미스 서버 — 5~50명 사용자의 부서 배포에 적합합니다. 실질적인 감사 로그, RBAC, 백업 및 재해 복구가 지원됩니다.',
          'EU 프라이빗 클라우드 — 복원력이 필요한 멀티 엔티티 배포에 적합합니다. 주권 리전 + 고객 관리 키 + AI 비학습 조항이 필수입니다.',
          '대규모로 특수 범주 데이터를 수집할 경우 제35조에 따라 DPIA가 의무입니다. 배포 패턴과 관계없이 적용됩니다.',
          '잊힐 권리 요청은 원본 문서, 벡터 인덱스, 캐시된 임베딩까지 전파되어야 합니다. 첫 번째 요청을 받은 후가 아닌 프로덕션 전에 삭제 절차를 설계하십시오.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '배포 패턴 비교', anchor: '#deployment-comparison' },
      { label: '배포 패턴 선택', anchor: '#which-deployment' },
      { label: '민감 데이터에 로컬 RAG를 사용하는 이유', anchor: '#why-local-rag' },
      { label: '모든 배포에 필요한 여섯 가지 제어 항목', anchor: '#required-controls' },
      { label: 'Air-gap 및 egress 제어', anchor: '#air-gap' },
      { label: '감사를 통과하는 감사 로그', anchor: '#audit-logging' },
      { label: 'Chunk에서 출처까지 데이터 추적성', anchor: '#data-lineage' },
      { label: '암호화 및 접근 제어', anchor: '#encryption-access' },
      { label: '단일 사용자 노트북 패턴', anchor: '#laptop-pattern' },
      { label: '온프레미스 서버 패턴', anchor: '#on-prem-pattern' },
      { label: '벡터 데이터베이스 옵션', anchor: '#vector-db-comparison' },
      { label: 'EU 프라이빗 클라우드 패턴', anchor: '#private-cloud-pattern' },
      { label: 'EU AI Act 분류', anchor: '#eu-ai-act' },
      { label: 'DPIA 요건', anchor: '#dpia-requirements' },
      { label: '독일 Datenschutz 특이 사항', anchor: '#germany-datenschutz' },
      { label: '컴플라이언스 체크리스트', anchor: '#compliance-checklist' },
      { label: '자주 발생하는 실수', anchor: '#common-mistakes' },
      { label: '참고 자료', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽기', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**로컬 호스팅은 필요하지만 충분하지 않습니다.** 자체 하드웨어에서 모델과 벡터 저장소를 실행하면 국경 간 데이터 이전 문제를 해결하고 수탁처리자 목록을 줄일 수 있지만, GDPR 제5조, 제25조, 제30조, 제32조, 제35조는 여전히 적용됩니다. 데이터가 온프레미스에 있다고 해서 법적 근거, 데이터 최소화, 감사 로그, 처리 보안 및 DPIA가 선택 사항이 되지는 않습니다.',
          '**여섯 가지 제어 항목은 협상 불가합니다.** 배포 패턴에 관계없이 air-gap 또는 엄격한 egress 제어, 역할 기반 접근을 갖춘 사용자별 인증, 불변 감사 로그, 저장 및 전송 시 암호화, chunk에서 원본 문서까지의 결정론적 데이터 추적성, 그리고 벡터 인덱스 및 캐시된 임베딩을 포함하는 서면 삭제 절차가 필요합니다.',
          '**세 가지 배포 패턴이 대부분의 규제 사용 사례를 커버합니다.** 개인 전문가와 단발성 검토에는 단일 사용자 노트북, 5~50명 사용자의 부서 지식 베이스에는 온프레미스 서버, 복원력이 완전한 air-gap보다 더 중요한 멀티 엔티티 배포에는 EU 프라이빗 클라우드(주권 리전, 고객 관리 키)가 적합합니다.',
          '**EU AI Act는 대부분의 로컬 RAG를 제한적 위험 시스템으로 분류합니다.** 그러나 검색이 자동화된 의사결정(신용 평가, 직원 채용, 급여 자격 심사)을 직접 지원하게 되면 고위험으로 분류가 변경되어 완전한 적합성 평가, 시판 후 모니터링 및 인간 감독 의무가 발생합니다.',
          '**제35조에 따라 DPIA는 의무입니다.** 대규모로 특수 범주 데이터(의료, 법률, 생체, 정치, 노동조합 관련 데이터)를 수집하거나 법적 효력이 있는 자동화된 결정을 생성하는 RAG는 모두 해당됩니다. DPIA를 생략하는 것은 감사 방어를 생략하는 것입니다.',
          '**잊힐 권리는 대부분의 배포가 통과하지 못하는 삭제 테스트입니다.** 원본 문서는 쉽습니다. 벡터 인덱스는 재구성할 수 있습니다. 캐시된 임베딩, 검색 로그 및 채팅 기록에 저장된 응답이 흔히 간과되는 부분입니다. 규제 당국이 바로 이 부분을 질문합니다.',
          '**오픈 소스 임베딩 모델은 원칙적으로 GDPR에 안전합니다.** 단, (a) 모델 가중치를 한 번 다운로드하고 해시에 고정, (b) 텔레메트리 없이 로컬 하드웨어에서 완전히 추론 실행, (c) 기밀 비즈니스 사용과 충돌하는 조항이 없는지 모델 카드와 라이선스 검토라는 세 가지 조건이 충족되어야 합니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**6가지 필수 제어 항목** — 모든 규제 RAG에 필요: air-gap, RBAC, 감사 로그, 암호화, 데이터 추적성, 삭제 절차.',
          '**3가지 배포 패턴:** 단일 사용자 노트북(개인 전문가), 온프레미스 서버(5~50명), EU 프라이빗 클라우드(멀티 엔티티).',
          '**DPIA 의무** — 대규모로 특수 범주 데이터(의료, 법률, 생체)를 수집할 경우 제35조에 따라 의무입니다.',
          '**EU AI Act:** 대부분의 로컬 RAG = 제한적 위험; 검색이 자동화된 결정(신용, 고용, 급여)을 지원할 경우 고위험으로 변경.',
          '**잊힐 권리**는 원본 문서, 벡터 인덱스, 캐시된 임베딩 및 응답 기록까지 전파되어야 합니다.',
          '**독일 Betriebsrat(직장평의회) 공동결정** — §87 BetrVG에 따라 직원이 생성한 콘텐츠에 대한 RAG에는 직장평의회 동의가 필요합니다.',
          '**오픈 소스 임베딩 모델**은 가중치 고정, 완전한 로컬 추론, 라이선스 검토가 완료된 경우에만 GDPR에 준수됩니다.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: '배포 패턴 비교',
        content:
          '각 패턴은 GDPR을 준수하도록 만들 수 있습니다. 달라지는 것은 제어 항목의 비용과 문제 발생 시의 장애 방식입니다. 사용자 수, 문서 민감도, 복원력 요건에 맞는 가장 단순한 패턴을 선택하십시오.',
        columns: ['제어 항목', '단일 사용자 노트북', '온프레미스 서버', 'EU 프라이빗 클라우드'],
        rows: [
          {
            '제어 항목': 'Air-gap (outbound 네트워크 없음)',
            '단일 사용자 노트북': '간단 — 네트워크 비활성화',
            '온프레미스 서버': '구현 가능 — VLAN + 방화벽',
            'EU 프라이빗 클라우드': '어려움 — 허용 egress 목록만',
          },
          {
            '제어 항목': '감사 로그 (누가, 무엇을, 언제)',
            '단일 사용자 노트북': '수동 — OS 수준만',
            '온프레미스 서버': '견고 — 중앙 집중 로그 파이프라인',
            'EU 프라이빗 클라우드': '견고 — 클라우드 네이티브 로깅',
          },
          {
            '제어 항목': '데이터 추적성 (chunk → 출처)',
            '단일 사용자 노트북': '로컬 파일만',
            '온프레미스 서버': '완전 추적 가능한 파이프라인',
            'EU 프라이빗 클라우드': '완전 — 단 여러 리전에 걸침',
          },
          {
            '제어 항목': 'EU 데이터 거주',
            '단일 사용자 노트북': '본질적 — 물리적 위치',
            '온프레미스 서버': '본질적 — 물리적 위치',
            'EU 프라이빗 클라우드': '구성 필요 — 주권 리전 필수',
          },
          {
            '제어 항목': '사용자별 RBAC',
            '단일 사용자 노트북': '단일 사용자 — 해당 없음',
            '온프레미스 서버': 'IdP + 그룹',
            'EU 프라이빗 클라우드': 'IAM + SSO + 컬렉션별 ACL',
          },
          {
            '제어 항목': '백업 및 재해 복구',
            '단일 사용자 노트북': '암호화된 외부 드라이브',
            '온프레미스 서버': '테이프 또는 오프사이트 백업',
            'EU 프라이빗 클라우드': '다중 AZ 복제',
          },
          {
            '제어 항목': '초기 비용',
            '단일 사용자 노트북': '하드웨어만 — 낮음',
            '온프레미스 서버': '서버 + 통합 — 중간',
            'EU 프라이빗 클라우드': '구독 + 설정 — 중간',
          },
          {
            '제어 항목': '지속 비용',
            '단일 사용자 노트북': '없음 — 시스템 관리 시간',
            '온프레미스 서버': 'IT 운영 + 전기 + 냉각',
            'EU 프라이빗 클라우드': '월정액 구독',
          },
          {
            '제어 항목': '적합한 대상',
            '단일 사용자 노트북': '개인 전문가, 단발성 검토',
            '온프레미스 서버': '5~50명 사용자, 부서 지식 베이스',
            'EU 프라이빗 클라우드': '멀티 엔티티, 복원력 필요 배포',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: '배포 패턴 선택',
        content:
          '**올바른 선택은 사용자 수, 문서 민감도, 감사 압박, 내부 IT 역량에 따라 달라집니다.** 아래 의사결정 단축표가 대부분의 실제 상황을 커버합니다.',
        columns: ['상황', '선택'],
        rows: [
          {
            '상황': '사건별로 검토하는 개인 변호사, 의사 또는 감사인',
            '선택': '단일 사용자 노트북',
          },
          {
            '상황': '3~5명의 지정 검토자와 명확한 종료 날짜가 있는 M&A 데이터룸',
            '선택': '단일 사용자 노트북 또는 온프레미스(문서 볼륨에 따라)',
          },
          {
            '상황': '규제 당국 서신 파일을 공유하는 10~30명의 컴플라이언스 팀',
            '선택': '온프레미스 서버',
          },
          {
            '상황': '50명 직원을 위한 임상 프로토콜 보조 시스템을 구축하는 병원 부서',
            '선택': '온프레미스 서버',
          },
          {
            '상황': '여러 EU 국가의 자회사 간 공유 RAG가 필요한 멀티 엔티티 그룹',
            '선택': 'EU 프라이빗 클라우드 (주권 리전 + 고객 관리 키)',
          },
          {
            '상황': '24/7 가용성 요건과 재해 복구 계획이 있는 보험사',
            '선택': 'EU 프라이빗 클라우드',
          },
          {
            '상황': '기밀 또는 제한 데이터를 보유한 공공 기관',
            '선택': 'air-gap 온프레미스만 — 클라우드는 범위 밖',
          },
          {
            '상황': '6주 이내에 규제 당국 감사 방어가 필요한 경우',
            '선택': '온프레미스 서버 (제어를 증명하기 가장 빠름)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: '민감 데이터에 로컬 RAG를 사용하는 이유',
        content:
          '**클라우드 LLM-as-a-service 대비 로컬 RAG의 주장은 이념이 아닌 GDPR 위험 평가의 형태입니다.** 클라우드 RAG는 많은 사용 사례에 적합합니다. 그러나 민감한 비즈니스 데이터의 경우, 로컬 RAG가 설계상 제거하는 다섯 가지 위험이 추가됩니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 RAG는 민감한 문서를 자체 하드웨어에 유지하면서 팀에 AI 기반 검색을 제공합니다. 데이터는 건물 밖으로 나가지 않고, 외부 수탁처리자가 접근하지 않으며, 국경 간 이전 문제가 발생하지 않습니다.',
          },
          {
            type: 'plain-terms',
            text: '법무 팀이 자연어로 질문하여 10,000건의 사건 파일을 검색할 수 있다고 상상해 보십시오. 단, 문서는 절대 서버 룸을 떠나지 않습니다. 이것이 로컬 RAG입니다. AI가 자체 하드웨어에서 문서를 읽고, 자체 하드웨어에서 질문에 답하며, 아무것도 외부로 전송되지 않습니다. 컴플라이언스 이점은 기능이 아닌 아키텍처 자체입니다.',
          },
        ],
        items: [
          '**국경 간 이전(제44~49조).** 개인 데이터를 EU 외부의 수탁처리자에게 보내려면 표준 계약 조항, 이전 영향 평가, 그리고 수신국이 해당 데이터에 접근할 수 있는 소환 권한이 있는지에 대한 신뢰할 수 있는 답변이 필요합니다. 로컬 RAG는 데이터를 이전하지 않으므로 이 문제가 발생하지 않습니다.',
          '**수탁처리자 확산(제28조).** 클라우드 LLM 공급업체는 하이퍼스케일러 인프라, 콘텐츠 조정 서비스, 관찰성 공급업체에 의존하는 경우가 많습니다. 각각은 목록화, 계약, 감사가 필요한 하위 수탁처리자입니다. 로컬 RAG는 기본적으로 하위 수탁처리자가 없습니다.',
          '**학습 데이터 유출.** 많은 클라우드 LLM 이용약관은 유료 엔터프라이즈 수준을 사용하고 비학습 조항을 확인하지 않는 한 모델 개선을 위해 고객 프롬프트를 사용할 권리를 유보합니다. 로컬 RAG는 사용자가 제어하는 가중치로 모델을 실행하며, 호스트 외부로 아무것도 나가지 않습니다.',
          '**고객 계약의 기밀 유지 조항.** 외부 법률 자문 계약, M&A NDA, 환자 데이터 계약은 종종 보호 자료를 외부 수탁처리자에게 전송하는 것을 금지합니다. 로컬 RAG는 이 조항을 완전히 우회합니다.',
          '**법원 소환장 및 법적 절차 노출.** 클라우드 공급업체에 저장된 문서는 공급업체를 대상으로 한 법적 절차를 통해 요구될 수 있으며, 데이터 컨트롤러가 적시에 통보받지 못할 수 있습니다. 귀사 시설을 떠나지 않은 문서는 귀사에만 요구될 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '로컬 RAG가 모든 워크로드에 대한 올바른 답은 아닙니다. 공개 정보 연구, 마케팅 초안 생성, 오픈 소스 저장소의 코드 보조 등은 GDPR 노출이 낮고 모델 품질 차이가 중요하기 때문에 클라우드 LLM에서 더 잘 작동합니다. 이 글의 주장은 특별히 기밀 비즈니스 데이터(법률, 의료, 재무, HR, 규제 서신, 영업 비밀)에 적용됩니다.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: '모든 배포에 필요한 여섯 가지 제어 항목',
        content:
          '**이 여섯 가지 제어 항목은 최소 기준입니다.** 모든 규제 배포에 여섯 가지 모두 필요하며, 배포 패턴은 구현 방식만 바꿀 뿐입니다. 이 중 하나라도 생략하면 감사가 잘못되는 가장 빈번한 이유가 됩니다.',
        numberedItems: [
          {
            title: 'Air-gap 또는 엄격한 egress 제어',
            whyItMatters:
              '문서와 임베딩이 발신 호출(텔레메트리 SDK, 모델 업데이트 프로브, 충돌 리포터, 콘텐츠 조정 콜백, 서드파티 폰트 CDN)을 통해 유출될 수 없음을 확인합니다. 네트워크 접근을 완전히 비활성화하거나(실제 air-gap), 서명된 업데이트 서버만 허용하는 egress 허용 목록을 실행하십시오.',
          },
          {
            title: '역할 기반 접근을 갖춘 사용자별 인증',
            whyItMatters:
              '규제 당국이 질문하기 전에 "누가 어떤 문서에 접근했는가"에 답할 수 있어야 합니다. IdP에 대한 Single Sign-On, 컬렉션에 대한 그룹별 접근, 사안이 요구하는 경우 문서별 ACL이 필요합니다. 공유 계정은 제어가 아닌 기다리고 있는 감사 실패입니다.',
          },
          {
            title: '수집과 검색을 포괄하는 불변 감사 로그',
            whyItMatters:
              '각 문서에 대해: 누가 언제 업로드했는지, 출처 경로, 해시. 각 쿼리에 대해: 누가 질문했는지, 무엇을 질문했는지(로깅이 허용하는 경우), 어떤 chunk가 검색되었는지, 어떤 문서 ID에서 왔는지, 어떤 응답이 반환되었는지. 로그는 변조 방지여야 합니다. 추가 전용, 서명, 감독 당국 조사 기간을 커버할 충분한 보존 기간이 필요합니다.',
          },
          {
            title: '저장 및 전송 시 암호화',
            whyItMatters:
              '호스트에서 전체 디스크 암호화, 서비스 간 내부 호출에 TLS, 그리고 노트북 도난이나 관리자 계정 침해 후에도 살아남는 키 관리가 필요합니다. 클라우드 배포에는 고객 관리 키가 필요합니다. 이러한 조치 없이는 기기 도난이 제33조에 따른 신고 대상 데이터 침해가 됩니다.',
          },
          {
            title: 'Chunk에서 출처까지의 결정론적 데이터 추적성',
            whyItMatters:
              '검색된 각 chunk는 원본 문서, 페이지, 섹션, 버전까지 추적되어야 합니다. 이를 통해 (a) 응답 검증, (b) 삭제 요청 처리, (c) 생성된 요약이 법원에서 이의 제기될 때 시스템 방어가 가능합니다. "어떤 chunk가 어떤 응답을 생성했는지 재현할 수 없습니다"는 감독 당국에 대한 허용 가능한 답이 아닙니다.',
          },
          {
            title: '벡터 인덱스와 캐시된 임베딩을 포함하는 서면 삭제 절차',
            whyItMatters:
              '잊힐 권리 요청은 출처 저장소에서 벡터 인덱스, 캐시된 임베딩, 검색 로그 보존까지 전파되어야 합니다. 대부분의 배포는 출처 삭제는 올바르게 처리하지만 나머지를 잊습니다. 프로덕션 전에 삭제 절차를 문서화하고, 합성 데이터로 연습하십시오.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-gap 및 egress 제어',
        content:
          '**Air-gap은 호스트에 outbound 네트워크 경로가 없다는 것을 의미합니다. Egress 제어는 엄격하게 허용된 경로가 있다는 것을 의미합니다.** 둘 다 허용되며, 운영이 지속할 수 있는 가장 강력한 모델을 선택하십시오.',
        items: [
          '**실제 Air-gap** — DHCP 없음, 공개 대상으로의 DNS 확인 없음, outbound TCP 없음. 업데이트는 관리자가 물리적으로 연결하는 서명된 미디어를 통해 수행됩니다. 이는 기밀 작업, 특정 병원 네트워크, 위협 모델에 악성 종속성이 포함된 모든 배포에 올바른 모델입니다.',
          '**Egress 허용 목록** — outbound 네트워크는 소수의 지명된 대상(모델 업데이트 서버, IdP, 내부 수집기로의 로그 전달자)에만 허용됩니다. 다른 모든 트래픽은 방화벽에서 차단됩니다. 이는 대부분의 규제 부서 배포에 대한 실용적인 기본값입니다.',
          '**플랫폼에서 확인할 사항:** 기본적으로 텔레메트리 없음, 추론 중 outbound 호출 없음, UI에 폰트 CDN 없음, 페이로드를 전송하는 충돌 리포터 없음. 프로덕션 전에 테스트 베드에서 패킷 캡처 또는 Little Snitch 같은 도구로 확인하십시오.',
          '**업데이트 거버넌스** — 모델 가중치, 임베더 가중치, 애플리케이션 코드, OS 패치 모두 제어된 업데이트 창을 통과합니다. 업데이트를 승격하는 관리자는 서면으로 서명하고 변경 사항이 기록됩니다.',
          '**잦은 Air-gap 위반:** 서드파티 UI 컴포넌트에 번들된 분석 SDK, 앱 크롬의 폰트 CDN 참조, 또는 시작 시 실행되는 "업데이트 확인" 프로브. 이것이 검증 단계가 중요한 이유입니다. 기본값에 대해 아무것도 가정하지 마십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '앱을 열고 유휴 상태인 호스트에서 24시간 패킷 캡처를 수행하십시오. 허용 목록에 없는 outbound 트래픽은 모두 발견 사항입니다. 앱이 업데이트될 때마다 반복하십시오. 릴리스 노트는 추가된 새로운 outbound 호출을 과소평가하는 경향이 있습니다.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: '감사를 통과하는 감사 로그',
        content:
          '**감사 로그는 감독 당국이 가장 먼저 읽는 아티팩트입니다.** 각 검색에 대해 두 가지 질문에 답해야 합니다. 누가 질문했고, 시스템이 무엇을 제공했는가. 이것 없이는 말로 주장하는 것이며, 적절한 로깅으로는 증거를 제시하는 것입니다.',
        items: [
          '**수집 이벤트:** 문서 ID, 해시(SHA-256), 파일명, 출처 경로, 업로드자, 타임스탬프, 분류 레이블, 크기, 페이지 수, 소유 그룹, 보존 등급. 수집 시 각 문서에 레이블을 붙이십시오. 대규모 코퍼스의 소급 분류는 어렵고 거의 완전하지 않습니다.',
          '**검색 이벤트:** 쿼리 ID, 사용자 ID, 타임스탬프, 검색된 chunk ID(및 출처 문서 ID), 검색 점수, 최종 응답 해시, 모델 식별자, 임베더 식별자, 사용된 top-K. 쿼리 텍스트 자체는 민감합니다. 처리의 법적 근거가 이를 커버하는 경우에만 기록하고, 그렇지 않으면 해시와 타임스탬프만 기록하십시오.',
          '**관리 이벤트:** 모델 승격, 임베더 변경, 인덱스 재구성, 사용자/그룹 변경, ACL 변경, 접근 정책 변경. 각 이벤트는 담당 관리자가 서명합니다.',
          '**변조 방지:** 추가 전용 로그, 해시 체인(각 항목이 이전 항목의 해시를 참조), 대역 외 서명 키, 다른 관리자가 유지하거나 쓰기 전용 미디어에 있는 별도 사본과의 주기적 조정.',
          '**보존:** 감독 당국 조사 기간과 일치시킵니다. 최소 사안 보존 기간, 규제 산업에서 일반적으로 6~7년, 섹터별 규정이 적용되는 경우 더 길게 설정합니다.',
          '**파이프라인:** 애플리케이션이 구조화된 이벤트를 내보내고, 전달자가 이를 쓰기 접근이 제한된 별도의 로그 저장소로 보냅니다. 애플리케이션 서버는 로그 항목을 삭제하거나 재작성할 권한을 절대 가져서는 안 됩니다. 직무 분리가 로그를 신뢰할 수 있게 만드는 것입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '쿼리 텍스트를 기록하면 자체적으로 GDPR 문제가 발생합니다. 쿼리 자체가 개인 데이터를 포함할 수 있기 때문입니다(예: "환자 X의 의료 기록을 요약하라"). 설계 시점에 처리의 법적 근거가 쿼리 로깅을 커버하는지 결정하고, 커버하지 않는다면 감사 및 운영 진단에 필요한 메타데이터만 기록하십시오.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Chunk에서 출처까지 데이터 추적성',
        content:
          '**추적성은 다른 모든 제어 항목의 근간입니다.** 이것 없이는 삭제 요청이 실패하고, 응답 검증이 불가능하며, 감사 추적이 무너집니다. 첫 번째 수집부터 추적성을 통합하십시오.',
        items: [
          '**문서 수준 추적성:** 각 문서는 안정적인 내부 ID, 콘텐츠 해시, 수집 타임스탬프, 소유자, 분류, 보존 등급을 가집니다. 원본 파일은 출처 저장소에 남아 있고, RAG 시스템은 원본이 아닌 참조를 유지합니다.',
          '**Chunk 수준 추적성:** 각 chunk는 부모 문서 ID, 페이지(PDF의 경우), 섹션(구조화된 문서의 경우), 문자 오프셋, 길이, chunking 전략 버전을 참조합니다. 재청킹 시(필연적으로 발생), 이전 chunk는 현장에서 삭제되지 않고 구식으로 표시됩니다. 이를 통해 이전 검색 로그가 계속 해석 가능합니다.',
          '**임베딩 수준 추적성:** 각 임베딩 벡터는 chunk ID와 임베더 식별자를 참조합니다. 임베더를 변경할 때 이전 벡터는 새 벡터가 검증되고 이를 참조한 사안이 종료될 때까지 보존됩니다. 그런 다음에만 삭제됩니다.',
          '**응답 수준 추적성:** 각 생성된 응답은 이를 생성한 chunk ID, 모델 식별자, 프롬프트 템플릿 버전, 타임스탬프를 참조합니다. 사용자가 "이 응답은 어디서 왔습니까?"라고 질문할 때 시스템은 chunk → 문서 → 페이지를 한 번의 클릭으로 해결합니다.',
          '**추적성을 깨지 않는 재인덱싱:** 재구성 시 문서 ID를 보존하고 chunking 전략 버전을 증가시킵니다. 이전 chunk ID는 활성 인덱스가 진행된 후에도 검색 로그에서 계속 해석 가능합니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '분기마다 추적성 체인을 테스트하십시오. 감사 로그에서 무작위 검색을 선택하고 역방향으로 추적하십시오. Chunk ID → 문서 ID → 출처 저장소의 원본 파일 → 보존 등급. 어느 단계라도 끊어지면 다음 감독 검사 중이 아니라 그 전에 스키마를 수정하십시오.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: '암호화 및 접근 제어',
        content:
          '**저장 시 암호화, 전송 시 암호화, 기존 IdP에 매핑되는 접근 제어.** 이들은 잘 이해된 제어 항목입니다. 장애 방식은 선택한 레이어를 잘못 구현하는 것이 아니라 세 레이어 중 하나를 잊는 것입니다.',
        items: [
          '**저장 시 암호화** — 호스트에서 전체 디스크 암호화(Linux: LUKS, Windows: BitLocker, macOS 노트북: FileVault). 서버의 경우 벡터 저장소와 수집 스테이지를 호스팅하는 파티션도 암호화하십시오. 클라우드 배포에는 정책에 따른 키 교체와 함께 고객 관리 키를 사용하십시오.',
          '**전송 시 암호화** — localhost 포함 서비스 간 모든 홉에 TLS를 사용하십시오. 섹터 기준선에 맞는 암호화 정책을 적용하십시오. 위협 모델이 정당화하는 경우 상호 TLS를 사용하십시오(일반적으로 클라우드 배포에서 서버 간).',
          '**인증** — 기존 IdP에 대한 Single Sign-On(OIDC, SAML). 프로덕션에서 로컬 계정 없음. 관리 또는 민감 컬렉션 접근 권한이 있는 모든 사용자에 대해 MFA 의무화.',
          '**권한 부여** — 컬렉션 수준에서 그룹 기반 접근, 사안이 요구하는 경우 문서 수준 ACL(예: M&A 데이터룸, 고용 조사). 검색 파이프라인은 UI뿐만 아니라 쿼리 시점에 ACL을 적용해야 합니다. 문서를 볼 수 없는 사용자는 응답에서 해당 chunk도 받아서는 안 됩니다.',
          '**관리 접근** — 인덱스를 읽거나 재구성하고, 감사 로그를 보거나 ACL을 변경할 수 있는 계정에 대한 특권 접근 관리. 기록된 정당성이 있는 적시 권한 상승이 영구 관리자 권한보다 낫습니다.',
          '**엔드포인트 보안** — 노트북 배포의 경우 관리되는 기기(MDM 등록, 암호화, 화면 잠금 정책 적용). 복호화된 문서 저장소가 있는 개인 전문가의 노트북이 카페에서 방치되면 보고해야 하는 GDPR 위반이 됩니다.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: '단일 사용자 노트북 패턴',
        content:
          '**단일 사용자 노트북은 air-gap 구성이 가장 쉽고 확장이 가장 어려운 패턴입니다.** 개인 전문가와 단발성 검토에는 적합하지만, 단일 사용자 또는 해당 사용자의 퇴사 이후에도 살아남아야 하는 것에는 부적합합니다.',
        items: [
          '**하드웨어** — 전체 디스크 암호화, 독립 GPU(또는 최신 통합 메모리 머신), 최소 32GB RAM을 갖춘 워크스테이션급 노트북. 모델과 임베더는 벡터 저장소 캐시와 함께 메모리에 맞아야 합니다. 하드웨어 요건 및 VRAM별 모델 선택에 대해서는 [로컬 LLM 하드웨어 가이드](https://www.promptquorum.com/local-llms/local-llm-hardware-guide-2026)를 참조하십시오.',
          '**소프트웨어** — 로컬에서 실행되는 자급자족 데스크톱 RAG 애플리케이션, 한 번 다운로드하여 해시에 고정된 오픈 소스 LLM, 오픈 소스 임베더, 암호화된 디스크의 로컬 벡터 저장소. 로컬 RAG에 적합한 오픈 소스 모델 비교는 [Ollama 최고의 오픈 소스 모델](https://www.promptquorum.com/local-llms/top-open-source-models-ollama)을 참조하십시오.',
          '**네트워크 자세** — 작업 중 air-gap 적용, 명시적인 서명된 업데이트를 위해서만 재연결. OS 방화벽을 모든 outbound 연결을 기본적으로 차단하도록 구성하고, 업데이트 흐름에 대해서만 명시적인 예외를 만드십시오.',
          '**문서 처리** — 암호화된 디스크의 출처 문서, 사안별 폴더 구조, 다른 위치에 보관된 외부 드라이브에 주간 암호화 백업.',
          '**감사 자세** — OS 수준 감사 로그(로그인, 파일 접근, 주변 장치 이벤트)가 최소 기준입니다. 애플리케이션 수준 이벤트는 온프레미스 서버 패턴에서 더 간단합니다. 노트북 패턴의 경우 OS 로그를 주요 레코드로 취급하고 사안별 수동 메모로 보완하십시오.',
          '**한계** — 단일 사용자 노트북은 다중 사용자 플랫폼이 아닙니다. 노트북 공유, 계정 공유, 또는 동료의 노트북에 문서 저장소 복사는 감사 자세와 법적 근거 평가를 깨뜨립니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '기밀 사안을 처리하는 개인 전문가에게 단일 사용자 노트북 패턴은 실제로 가장 강력한 프라이버시 자세입니다. 클라우드보다 낫고 많은 온프레미스 배포보다 강력합니다. 트레이드오프는 운영 측면입니다. 노트북이 고장나면 사안은 백업 규율의 복구 시간을 상속받습니다.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: '온프레미스 서버 패턴',
        content:
          '**온프레미스 서버는 규제 부서 RAG의 표준 작업 패턴입니다.** 5~50명 사용자와 수천 건의 문서로 확장되고, 적절한 감사 로그를 지원하며, 물리적 경계 내에 유지됩니다. 비용은 실제 IT 운영 작업입니다.',
        items: [
          '**하드웨어** — 엔터프라이즈급 GPU 1~2개(소규모 코퍼스에는 워크스테이션급 GPU도 허용), 중복 드라이브, ECC 메모리, UPS를 갖춘 서버. 벡터, 인덱스, 로그, 백업을 커버하기 위해 원시 문서 코퍼스 저장 용량의 2~4배를 계획하십시오.',
          '**네트워크** — 기업 방화벽 뒤의 전용 VLAN, 위협 모델에 따라 egress 허용 목록 또는 완전 air-gap. 기업 네트워크를 통해서만 내부 접근, 공개 수신 없음.',
          '**소프트웨어 스택** — 자체 호스팅 RAG 플랫폼(독립형 서버 이미지 또는 컨테이너 배포), 채팅 모델로서 오픈 소스 LLM, 오픈 소스 임베더, 코퍼스 크기에 적합한 벡터 저장소. 애플리케이션 서버, 벡터 저장소, 로그 전달자는 별도의 서비스 계정으로 별도의 프로세스로 실행됩니다.',
          '**ID** — 기업 IdP와 연동, 그룹 멤버십이 컬렉션 접근을 제어합니다. 민감 컬렉션에는 추가 승인 흐름이 필요합니다.',
          '**백업 및 재해 복구** — 문서 저장소와 벡터 인덱스의 야간 증분 백업, 주간 전체 백업, IT가 유지하는 오프사이트 사본. 복원 절차를 문서화하고 최소 연간 테스트합니다.',
          '**운영** — 변경 관리 정책에 따른 패치 창, 분기별 접근 검토, 잊힐 권리 요청을 위한 연습된 삭제 절차, 추적성을 보존하는 문서화된 모델 및 임베더 업그레이드 경로.',
          '**용량 계획** — 수천 건의 문서와 5~50명의 동시 사용자는 중급 GPU 서버에서 편안히 처리됩니다. 그 이상에서는 더 강력한 호스트 또는 프라이빗 클라우드 패턴으로의 전환을 계획하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '온프레미스 RAG는 기술적이지 않은 이유로 가장 자주 실패합니다. 한 번도 복원되지 않은 백업, IT 직원 간 공유된 관리자 계정, 아무도 테스트하지 않은 UPS, 2개월 동안 조용히 이벤트를 삭제하던 로그 전달자가 그것입니다. 기술 제어보다 운영 위생이 더 어렵습니다.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: '온프레미스 RAG를 위한 벡터 데이터베이스 옵션',
        content:
          '**벡터 저장소 선택이 컴플라이언스를 결정하는 경우는 드뭅니다. 그러나 운영 비용, 확장 한계, 삭제 절차의 구현 방식에 영향을 미칩니다.** 대부분의 규제 배포는 다음 여섯 가지 옵션 중 하나를 선택합니다.',
        columns: ['벡터 데이터베이스', '유형', 'EU 자체 호스팅', '최적 RAG 패턴'],
        rows: [
          {
            '벡터 데이터베이스': '**Chroma**',
            '유형': '오픈 소스, 경량',
            'EU 자체 호스팅': '✅',
            '최적 RAG 패턴': '노트북 + 소규모 온프레미스',
          },
          {
            '벡터 데이터베이스': '**Qdrant**',
            '유형': '오픈 소스, 고성능',
            'EU 자체 호스팅': '✅',
            '최적 RAG 패턴': '온프레미스 서버, 집중 필터링',
          },
          {
            '벡터 데이터베이스': '**Weaviate**',
            '유형': '오픈 소스, 완전 기능',
            'EU 자체 호스팅': '✅',
            '최적 RAG 패턴': '온프레미스 + 하이브리드 검색',
          },
          {
            '벡터 데이터베이스': '**Milvus**',
            '유형': '오픈 소스, 엔터프라이즈',
            'EU 자체 호스팅': '✅',
            '최적 RAG 패턴': '대규모 온프레미스',
          },
          {
            '벡터 데이터베이스': '**pgvector**',
            '유형': 'PostgreSQL 확장',
            'EU 자체 호스팅': '✅',
            '최적 RAG 패턴': '이미 Postgres를 사용하는 팀',
          },
          {
            '벡터 데이터베이스': '**Pinecone**',
            '유형': '관리형 SaaS',
            'EU 자체 호스팅': '⚠️ 미국에서 호스팅됨',
            '최적 RAG 패턴': 'EU 프라이빗 클라우드만 (단, 유보 사항 있음)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'EU 프라이빗 클라우드 패턴',
        content:
          '**EU 프라이빗 클라우드 패턴은 주권 리전의 클라우드 공급업체, 고객 관리 키, EU 전용 데이터 거주, 고객 데이터를 커버하는 서면 AI 비학습 조항을 사용합니다.** 멀티 엔티티 배포, 다중 리전 복원력 요건, 실제 온프레미스를 위한 운영 역량이 없는 팀에 올바른 답입니다.',
        items: [
          '**공급업체 선택** — 하이퍼스케일러의 EU 주권 서비스 또는 유럽 클라우드 공급업체. DPA는 각 하위 수탁처리자를 나열해야 합니다. 일부 하위 수탁처리자가 EEA 외부에 있는 경우 이전 메커니즘을 다루어야 합니다. Schrems II 스타일 이전 영향 분석은 즉각적인 수탁처리자가 EU 기반이더라도 파일의 일부입니다.',
          '**리전** — EU 전용, 명시적인 데이터 거주 보장. 리전 간 복제는 다른 EU 리전으로만. 백업의 경우에도 임시로도 미국 리전을 페일오버로 사용하지 마십시오.',
          '**암호화** — 교체가 있는 고객 관리 키, 공급업체가 지원하는 경우 bring-your-own-key, 클라우드 공급업체의 운영 로그와 별도로 기록된 키 접근 이벤트.',
          '**네트워크** — 공개 수신 없는 프라이빗 VPC, 기업 네트워크에서의 프라이빗 연결(전용 링크 또는 VPN)을 통해서만 접근, outbound 종속성에 대한 egress 허용 목록.',
          '**ID** — 기업 IdP와 연동, 공유 서비스 계정이 아닌 사용자 ID에 연결된 클라우드 네이티브 IAM, 검색 파이프라인에 적용된 컬렉션별 ACL.',
          '**로깅** — 기존 SIEM으로 전달되는 클라우드 네이티브 감사 로그, 애플리케이션 감사 이벤트를 위한 별도 수집, 감독관 기대치를 충족하는 변조 방지 보존.',
          '**계약** — DPA는 제28조를 준수해야 하고, 하위 수탁처리자를 나열하고, 필요한 경우 표준 계약 조항을 다루며, LLM 가중치와 보조 서비스(검색, 텔레메트리, 지원) 모두를 커버하는 명시적인 AI 비학습 조항을 포함해야 합니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'EU 프라이빗 클라우드 패턴은 외부 수탁처리자를 사용하기 때문에 온프레미스보다 더 허용적으로 보입니다. 그러나 주권 리전, 고객 관리 키, 서면 비학습 조항, 적절한 egress 제어를 갖추면 가용성과 감사 자세에서 온프레미스와 동등하거나 이를 능가할 수 있습니다. 컴플라이언스 파일이 더 방대해지고, 운영 위험은 낮아집니다.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'EU AI Act 분류: 제한적 위험 vs. 고위험',
        content:
          '**대부분의 로컬 RAG 배포는 EU AI Act에 따라 제한적 위험 AI 시스템입니다. 그러나 검색이 개인에게 영향을 미치는 자동화된 결정을 직접 지원하게 되면 고위험으로 분류가 변경되고 의무가 배가됩니다.** 구축 전에 분류하십시오.',
        items: [
          '**제한적 위험(대부분의 로컬 RAG)** — 시스템은 인간이 결정을 내리도록 지원하기 위해 문서를 검색하고 요약합니다. 주요 의무는 투명성입니다. 사용자는 AI와 상호 작용하고 있음을 알아야 하고, 생성된 콘텐츠는 식별 가능해야 하며, 조작적이거나 기만적인 설계가 없어야 합니다.',
          '**고위험** — 검색이 AI Act에 열거된 도메인에서 자동화된 결정을 지원합니다. 신용 평가, 직원 채용, 교육 입학, 필수 공공 서비스, 법 집행, 이민, 사법, 생체 식별, 중요 인프라가 해당됩니다. 치료를 권장하는 임상 의사결정 지원 RAG는 고위험입니다. 의사가 지침을 더 빠르게 읽을 수 있도록 임상 프로토콜을 요약하는 RAG는 그렇지 않습니다.',
          '**고위험 의무** — 생명주기 전반에 걸친 위험 관리 시스템, 데이터 거버넌스(학습, 검증, 테스트 데이터 문서화), 기술 문서, 자동 이벤트 로깅, 사용자에 대한 투명성 및 정보, 인간 감독, 정확성 및 견고성 조치, 시판 전 적합성 평가, 시판 후 모니터링.',
          '**범용 AI 고려 사항** — 범용 LLM(오픈 소스 여부와 관계없이)을 사용한다고 해서 고위험 의무가 모델 공급업체에게 이전되지 않습니다. 배포자(귀사 조직)가 해당 모델로 구축하는 시스템에 대한 고위험 의무를 집니다.',
          '**금지된 관행** — 소셜 점수, 무차별적인 안면 이미지 스크랩, 직장 및 교육 기관에서의 감정 인식, 특정 실시간 생체 분류. 이것들은 아무리 로컬에서 실행하더라도 배제됩니다.',
          '**감사 아티팩트로서의 문서화** — 고위험 시스템에 필요한 기술 파일은 일회성 결과물이 아닙니다. 살아있는 문서입니다. 각 모델 승격, 임베더 변경, ACL 변경이 반영되도록 변경 관리 프로세스에 연결하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '고위험과 제한적 위험 사이의 경계는 기술이 아닌 사용 사례가 그립니다. 동일한 벡터 저장소와 동일한 모델이 연구 보조 배포에서는 제한적 위험이고 HR 직원 선별 배포에서는 고위험일 수 있습니다. 플랫폼이 아닌 사용 사례별로 분류하십시오.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'DPIA 요건',
        content:
          '**개인정보 보호 영향 평가(제35조)는 정보주체의 권리와 자유에 높은 위험을 초래할 수 있는 처리에 의무입니다.** 대부분의 규제 로컬 RAG는 적용 범위에 있습니다. DPIA를 사후 컴플라이언스 아티팩트가 아닌 설계 문서로 취급하십시오.',
        items: [
          '**언제 의무인가** — 법적 효력이 있는 프로파일링을 포함한 체계적이고 포괄적인 평가, 대규모 특수 범주 데이터(의료, 법률, 생체, 인종, 정치, 종교, 노동조합 관련) 처리, 공개 접근 가능한 구역에 대한 체계적 모니터링. 국가 감독 당국은 항상 DPIA를 요구하는 운영 목록을 발행합니다. 귀하의 당국 목록을 확인하십시오.',
          '**DPIA 범위** — 목적과 법적 근거, 처리 운영 설명, 필요성 및 비례성 평가, 정보주체에 대한 위험 평가, 완화 조치 및 잔여 위험, DPO와의 협의, 잔여 위험이 높은 경우 처리 시작 전 감독 당국과의 협의.',
          '**RAG 특이 위험** 처리 사항: 검색된 chunk에서 개인 재식별, 개인에게 영향을 미치는 부정확한 정보 생성, 로그 또는 백업을 통한 유출, 잊힐 권리 요청의 삭제 완전성, 컬렉션 간 교차 오염, 과도한 권한을 가진 사용자의 과도한 접근.',
          '**문서화할 완화 조치** — 위의 여섯 가지 제어 항목, 법적 근거가 동의 또는 정당한 이익인 경우 chunk 수준에서 삭제 또는 가명화, 연습된 증거가 있는 삭제 절차, 정해진 주기의 접근 검토.',
          '**검토자** — DPO가 승인, 완화 후 잔여 위험이 여전히 높은 경우 감독 당국과 협의. 시스템이 고위험 EU AI Act 시스템이기도 한 경우 서명된 DPIA는 기술 파일에 EU AI Act 컴플라이언스 문서와 함께 포함됩니다.',
          '**살아있는 문서** — 코퍼스가 크게 확장될 때, 모델 또는 임베더가 변경될 때, 접근 경계가 변경될 때, 또는 연간 기준으로 DPIA를 재실행하십시오. 이를 변경 관리 프로세스에 연결하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '프로젝트 2주차에 작성된 DPIA는 계획 도구입니다. 10주차에 작성된 DPIA는 방어 문서입니다. 전자가 훨씬 유용하며 최종 잔여 위험을 줄이는 설계 변경을 발견하는 경향이 있습니다. 배포 후가 아닌 구매 결정 전에 DPIA를 시작하십시오.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: '독일 Datenschutz 특이 사항',
        content:
          '**독일 데이터 보호 관행은 GDPR 기준 위에 BDSG-Neu, 섹터별 규범, 직장평의회 공동결정을 중첩합니다.** 일반적인 GDPR을 충족하는 RAG 배포도 이러한 사항을 간과하면 독일 심사를 통과하지 못할 수 있습니다.',
        items: [
          '**직장평의회 공동결정(Betriebsrat)** — §87 BetrVG에 따라 직원의 성과나 행동을 모니터링하는 시스템은 배포 전에 직장평의회 동의가 필요합니다. 직원이 생성한 콘텐츠(이메일, 내부 문서)에 대한 RAG는 일반적으로 이를 트리거합니다. 설계 시점에 직장평의회를 참여시키고, 동의(Betriebsvereinbarung)는 법적 근거 파일의 일부가 됩니다.',
          '**섹터별 기밀성** — §203 StGB는 직업적 기밀성 위반(변호사, 의사, 세무사, 감사인)을 형사상 처벌합니다. 보호된 고객 데이터가 비결속 직원이나 외부 수탁처리자에게 노출되는 방식으로 RAG를 배포하면 민사 문제가 아닌 형사 문제가 될 수 있습니다. 이러한 섹터에서는 온프레미스 또는 air-gap 패턴이 가장 안전한 선택입니다.',
          '**Telemediengesetz(TTDSG) 및 텔레메트리** — 최종 사용자 장치에 영향을 미치는 outbound 텔레메트리는 GDPR뿐만 아니라 TTDSG에 의해서도 규제됩니다. Air-gap은 이 문제를 제거합니다. Egress 제어 배포는 outbound 호출이 동의, 필요 또는 엄격히 기술적인지 확인해야 합니다.',
          '**투명성 기대** — 연방 및 주 투명성 표준은 가끔 정보주체에게 AI 지원 의사결정을 공개하도록 요구합니다. 엄격하게 요구되지 않는 경우에도 검색이 AI 지원임을 명확한 언어로 공개하고 인간 검토자가 결정에 대해 여전히 책임이 있음을 밝히는 것이 방어 가능한 기본값입니다.',
          '**Aufsichtsbehörden(주 감독 당국)** — 민간 섹터에 대한 Datenschutz 감독은 주 수준에서 조직됩니다. 제36조에 따른 협의가 필요한 경우 관련 Landesbeauftragte für Datenschutz에 연락하십시오. 주요 Landesbeauftragte의 AI 도구에 관한 입장 문서는 DPIA에 유용한 입력입니다.',
          '**문서 언어** — 독일 감독 당국은 영어 문서를 수락하지만, 사용자를 대상으로 하는 핵심 아티팩트(개인정보 처리방침, 투명성 공개, 직장평의회 동의)는 법적, 실용적 이유로 독일어여야 합니다.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: '프로덕션 전 컴플라이언스 체크리스트',
        content:
          '**모든 프로덕션 배포 전에 이 목록을 처음부터 끝까지 검토하십시오.** 각 항목은 실제 감사에서의 실제 장애 방식이며, 목록은 실제로 사용될 수 있도록 의도적으로 짧게 만들어졌습니다.',
        items: [
          '☐ **법적 근거 문서화** — 각 출처 데이터 범주에 대해(동의, 계약, 법적 의무, 생명상 이익, 공익 과제, 또는 파일에 균형 테스트가 있는 정당한 이익).',
          '☐ **DPO가 승인한 DPIA** — 연습된 삭제 절차 첨부.',
          '☐ **처리 활동 기록(제30조)** — RAG 시스템, 데이터 범주, 보존, 수신자, 이전 메커니즘(일반적으로 로컬 RAG의 경우 없음)을 포함하도록 업데이트.',
          '☐ **여섯 가지 제어 항목 엔드-투-엔드 검증:** air-gap 또는 egress 허용 목록, RBAC, 감사 로그, 암호화, 추적성, 삭제 절차.',
          '☐ **24시간 부하 테스트 중 outbound 패킷 캡처** 클린, 앱 업데이트 후 반복.',
          '☐ **각 접근 수준의 실제 사용자로 테스트된 IdP 통합**, 민감 컬렉션 접근은 별도 권한 상승 필요.',
          '☐ **백업 수행 및 격리된 하드웨어에서 실제 복원 테스트** — 상태 패널 확인만이 아님.',
          '☐ **출처 저장소, 벡터 인덱스, 캐시된 임베딩, 검색 로그 보존을 커버하는 합성 데이터로 잊힐 권리 절차 연습.**',
          '☐ **EU AI Act 분류 확인** (제한적 위험 vs. 고위험), 고위험인 경우 기술 파일 완비.',
          '☐ **공급업체 계약 검토(해당하는 경우):** 제28조 준수 DPA, 하위 수탁처리자 나열, 비학습 조항이 고객 데이터를 커버.',
          '☐ **직장평의회 동의** — 직원이 생성한 콘텐츠가 범위에 있는 경우(독일; 다른 EU 국가에도 유사한 규정이 있음).',
          '☐ **투명성 공지** — AI 지원, 루프의 인간, 데이터 흐름을 설명하는 사용자 이해 가능한 언어로 작성.',
          '☐ **사고 대응 절차** — RAG 특이 시나리오(인덱스 유출, 로그 조작, 삭제 실패, 추적성 중단을 동반한 모델 변경)를 포함하도록 업데이트.',
          '☐ **분기별 접근 검토** 일정 잡기 및 담당자 지정, 프로덕션 전 첫 번째 검토 일정 확정.',
          '☐ **연간 DPIA 업데이트** 일정 잡기 및 변경 관리 프로세스에 연결.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '자주 발생하는 실수',
        items: [
          '**실수 1: "로컬"을 "준수"와 동의어로 취급.** 온프레미스 실행은 이전 및 수탁처리자 문제를 해결합니다. 법적 근거, DPIA, 감사 로그, 정보주체 권리는 해결하지 않습니다. 컴플라이언스는 계층화된 프로그램이지 배포 선택이 아닙니다.',
          '**실수 2: 시스템이 "단순한 검색 도구"이기 때문에 DPIA 건너뛰기.** 대규모로 특수 범주 데이터를 수집하는 검색 도구는 정확히 제35조가 커버하는 것입니다. DPIA를 건너뛰는 것은 감사 방어를 건너뛰는 것입니다.',
          '**실수 3: 법적 근거 확인 없이 쿼리 텍스트 로깅.** 쿼리 자체가 개인을 참조할 때 개인 데이터가 됩니다. 처리의 법적 근거가 쿼리 로깅을 커버하는지 설계 시점에 결정하고, 커버하지 않으면 해시와 메타데이터만 기록하십시오.',
          '**실수 4: 삭제 절차에서 캐시된 임베딩 잊기.** 출처 삭제는 작동합니다. 벡터 인덱스 재구성도 작동합니다. 성능을 위해 플랫폼이 추가한 캐시 레이어, 검색 로그의 임베딩 풋프린트, 채팅 저장소의 응답 기록이 간과되는 부분입니다.',
          '**실수 5: 과도한 권한 사용자가 컬렉션 ACL을 우회하도록 허용.** "관리자는 모든 것을 볼 수 있다"는 편리하고 매우 일반적입니다. 또한 감사가 잘못되는 가장 빈번한 이유이기도 합니다. 특권 접근도 제어되고, 시간 제한이 있으며, 사용으로 정당화되어야 합니다.',
          '**실수 6: 여러 사안이나 클라이언트를 위해 하나의 작업 공간 재사용.** 인용 및 컨텍스트의 교차 오염은 외부 당사자가 보기 전에도 기밀성 실패입니다. 사안 또는 클라이언트당 하나의 컬렉션, 별도 ACL, 별도 보존.',
          '**실수 7: air-gap을 구매한 후 테스트를 위해 개인 휴대폰 연결.** Air-gap 경계에는 그것을 통해 데이터를 전송할 수 있는 사람도 포함되어야 합니다. 엔드포인트 정책은 별도의 관심사가 아닌 제어의 일부입니다.',
          '**실수 8: 모델 및 임베더 선택을 "구성 후 방치"로 취급.** 각 업데이트는 DPIA, 추적성, 감사 추적에 영향을 미치는 변경 관리 이벤트입니다. 첫 번째 프로덕션 배포 전에 업데이트 워크플로를 계획하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '참고 자료',
        items: [
          '[GDPR 전문(공식)](https://gdpr-info.eu/) — 조항별 해설이 있는 일반 데이터 보호 규정 전문.',
          '[EU AI Act 전문](https://artificialintelligenceact.eu/) — 위험 분류 프레임워크가 포함된 규정 전문.',
          '[NIST AI 위험 관리 프레임워크](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — AI 위험 평가에 적용 가능한 미국 연방 거버넌스 프레임워크.',
          '[BDSG-Neu (독일 연방 데이터 보호법)](https://www.gesetze-im-internet.de/bdsg_2018/) — 섹터별 추가 사항이 있는 독일의 GDPR 이행법.',
          '[EDPB DPIA 가이드라인](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — DPIA를 언제, 어떻게 수행할지에 대한 유럽 데이터 보호 이사회 지침.',
          '[BfDI (독일 연방 데이터 보호 감독관)](https://www.bfdi.bund.de/) — AI 배포에 관한 독일 연방 데이터 보호 감독관의 입장 문서.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'RAG를 로컬에서 실행하면 자동으로 GDPR을 준수합니까?',
            a: '아닙니다. 로컬 호스팅은 국경 간 이전 문제를 해결하고 수탁처리자 목록을 줄이지만, GDPR 제5조의 원칙(적법성, 공정성, 투명성, 목적 제한, 데이터 최소화, 정확성, 저장 제한, 무결성 및 기밀성, 책임)은 여전히 적용됩니다. 제25조(설계에 의한 데이터 보호), 제30조(처리 활동 기록), 제32조(처리 보안), 제35조(DPIA)는 모델이 어디서 실행되든 관계없이 적용됩니다. 로컬 RAG는 강력한 출발점이지 완전한 컴플라이언스 자세가 아닙니다.',
          },
          {
            q: '로컬 RAG 배포에서 EU AI Act 준수에 무엇이 필요합니까?',
            a: '사용 사례를 제한적 위험 또는 고위험으로 분류하십시오. 대부분의 검색 보조 배포는 제한적 위험이며 투명성 의무가 필요합니다. 사용자는 AI와 상호 작용하고 있음을 알아야 하고 생성된 콘텐츠는 식별 가능해야 합니다. 검색이 열거된 도메인(신용, 고용, 교육, 공공 서비스, 법 집행, 이민, 사법, 생체, 중요 인프라)에서 자동화된 결정을 지원하는 순간부터 배포는 고위험이며 완전한 의무가 적용됩니다. 위험 관리 시스템, 데이터 거버넌스, 기술 문서, 자동 이벤트 로깅, 투명성, 인간 감독, 정확성 및 견고성, 적합성 평가, 시판 후 모니터링이 필요합니다.',
          },
          {
            q: '로컬 RAG에 DPIA가 필요합니까?',
            a: '제35조에 따른 DPIA는 정보주체의 권리와 자유에 높은 위험을 초래할 수 있는 처리에 의무입니다. 이는 대규모 특수 범주 데이터(의료, 법률, 생체, 인종, 정치, 종교, 노동조합 관련) 처리와 법적 효력이 있는 체계적 프로파일링을 포함합니다. 대부분의 규제 로컬 RAG(법률, 의료, 재무, HR 조사)는 적용 범위에 있습니다. DPIA를 일찍 실행하고, 설계 문서로 취급하며, 프로덕션 전에 특히 삭제 절차를 완화 조치로 연습하십시오.',
          },
          {
            q: '부서 간에 로컬 RAG 배포를 공유할 수 있습니까?',
            a: '네, 주의를 기울이면 됩니다. 컬렉션 수준 접근 제어, 단일 IdP에 대한 사용자별 인증, 각 부서 사용에 대한 명확한 법적 근거가 최소 기준입니다. DPIA는 더 넓은 처리 목적 집합을 커버해야 합니다. 일부 부서가 다른 법적 근거가 필요한 경우(예: HR 조사는 정당한 이익, 임상 직원은 공익 과제), 정교한 ACL이 있는 단일 컬렉션보다 별도 컬렉션과 별도 접근 그룹이 방어하기 더 쉽습니다.',
          },
          {
            q: '누가 어떤 문서에 접근했는지 어떻게 감사합니까?',
            a: '각 검색을 사용자 ID, 타임스탬프, 검색된 chunk ID, 출처 문서 ID와 함께 기록하십시오. 이벤트를 애플리케이션 서버와 다른 관리 제어 하에 있는 별도의 로그 저장소로 전달하십시오(직무 분리). 조작이 감지 가능하도록 해시 체인이 있는 추가 전용 저장소를 사용하십시오. 보존 기간은 감독 당국 조사 기간 및 섹터별 표준에 맞추어야 합니다. 규제 산업에서는 6~7년이 일반적입니다.',
          },
          {
            q: '오픈 소스 임베딩 모델은 GDPR에 안전합니까?',
            a: '원칙적으로 세 가지 조건이 충족되면 안전합니다. 첫째, 가중치는 한 번 다운로드하고 해시에 고정하여 실행 중인 것을 증명할 수 있어야 합니다. 둘째, 추론은 텔레메트리나 outbound 호출 없이 완전히 로컬에서 이루어져야 합니다. 문서만 믿지 말고 패킷 캡처로 확인하십시오. 셋째, 기밀 비즈니스 사용과 충돌하는 조항을 찾기 위해 모델 카드와 라이선스를 검토해야 합니다(일부 오픈 가중치 라이선스는 데이터 유형이나 사용 사례에 제한을 붙임). 규제 배포의 실용적인 기본값은 소수의 검증된 임베더를 허용 목록에 올리고 각 업데이트에서 검토하는 것입니다.',
          },
          {
            q: 'AI가 생성한 결과의 데이터 추적성은 어떻게 됩니까?',
            a: '각 생성된 응답은 이를 생성한 chunk ID, 모델 식별자, 프롬프트 템플릿 버전, 타임스탬프를 참조해야 합니다. Chunk는 문서 ID로 해결되고, 문서 ID는 원본 문서로 해결됩니다. 이 체인을 통해 응답 검증, 이의 제기 방어, 삭제 요청 처리, 나중에 결과 재현이 가능합니다. 이것 없이는 "AI가 그렇게 말했습니다"가 감사 방어이며, 이는 전혀 방어가 아닙니다.',
          },
          {
            q: '로컬 RAG를 기밀 고객 문서에 사용할 수 있습니까?',
            a: '많은 경우 예, 때로는 아닙니다. 많은 외부 법률 자문 계약, M&A NDA, 환자 데이터 계약은 데이터가 정의된 경계를 벗어나지 않고 특정 제어가 충족되는 경우 AI 지원 검토를 허용합니다. 로컬 RAG는 설계상 경계 요건을 충족합니다. 계약별 제어 목록(암호화, 접근, 감사, 보존, 침해 통보)은 여전히 준수되어야 합니다. 계약이 AI 처리를 완전히 금지하는 경우 어떤 배포 패턴도 이를 해결하지 못합니다. 금지는 AI가 로컬인지 원격인지 관계없이 적용됩니다.',
          },
          {
            q: '컴플라이언스를 위해 어떤 로깅이 필요합니까?',
            a: '수집 이벤트(문서 ID, 해시, 출처, 업로더, 타임스탬프, 분류), 검색 이벤트(사용자 ID, 쿼리 메타데이터 또는 해시, 검색된 chunk ID, 응답 참조, 모델/임베더 식별자), 관리 이벤트(모델 승격, 임베더 변경, ACL 변경, 사용자/그룹 변경), 운영 이벤트(백업, 복원, 키 교체). 모든 이벤트는 별도의 추가 전용, 해시 체인 로그 저장소로 전달하고 사안 및 섹터 요건에 따라 보존하십시오.',
          },
          {
            q: 'RAG에서 잊힐 권리 요청을 어떻게 처리합니까?',
            a: '각 레이어를 통한 삭제를 처리하는 문서화된 절차로 처리하십시오. 출처 문서 저장소, 벡터 인덱스, 캐시된 임베딩, 검색 로그 보존(법적 근거가 로그 항목 삭제를 허용하는 경우), 채팅 기록에 저장된 모든 응답이 포함됩니다. 출처 삭제는 간단하고, 벡터 인덱스 재구성은 잘 이해되어 있습니다. 캐시된 임베딩과 응답 기록이 대부분의 배포가 간과하는 부분입니다. 합성 데이터로 절차를 연습하고, 연습을 문서화하며, 절차를 사고 대응 프로세스에 연결하여 실제 요청이 연습된 시퀀스를 트리거하도록 하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: 최고의 로컬 RAG](/ko/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — 각 컴플라이언스 자세에 맞는 자체 호스팅 플랫폼, 텔레메트리 및 라이선스 참고 사항 포함.',
          '[비즈니스 워크플로우 및 EU 컴플라이언스를 위한 로컬 AI 에이전트](/ko/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — 검색이 인간 독자 대신 자동화된 워크플로우 단계를 지원할 때의 인접 컴플라이언스 주제.',
          '[LLM으로 로컬 이메일 및 캘린더 자동화](/ko/power-local-llm/local-llm-email-and-calendar-automation) — 동일한 제어 항목 세트가 적용되는 인접 비즈니스 자동화 패턴.',
          '[PDF에 대한 로컬 RAG 단계별 가이드](/ko/power-local-llm/local-rag-on-your-pdfs-step-by-step) — 온프레미스 및 노트북 패턴을 위한 실용적인 구현 가이드.',
          '[로컬에서 1,000개의 PDF와 대화하기](/ko/power-local-llm/chat-with-1000-pdfs-locally) — 온프레미스 한계를 압박하는 대규모 코퍼스를 위한 운영 지침.',
          '[Power Local LLM 허브](/ko/power-local-llm) — 자체 호스팅 LLM 배포를 위한 가이드 전체 라이브러리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '기업 민감 문서를 위한 로컬 RAG: GDPR 준수 AI 솔루션 (2026)',
      description: '법무·의료·재무 팀을 위한 로컬 RAG GDPR 준수. 아키텍처, 감사 로그, DPIA 범위, 3가지 배포 패턴 비교.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-rag-for-private-business-data',
      inLanguage: 'ko',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: '기업 민감 문서를 위한 로컬 RAG', item: 'https://www.promptquorum.com/ko/power-local-llm/local-rag-for-private-business-data' },
      ],
    },
    current_models_mentioned: [],
    current_hardware_mentioned: [],
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-pt.png',
    title: 'RAG local para dados empresariais: IA em conformidade com o GDPR para documentos sensíveis (2026)',
    seoTitle: 'RAG local em conformidade com o GDPR para documentos sensíveis (2026)',
    intro:
      'As equipes jurídicas, médicas e financeiras enfrentam o mesmo problema: os documentos cuja busca por IA traria mais valor são justamente os que não podem sair da organização. Este artigo reúne a arquitetura, o conjunto de controles e a matriz de decisão de padrões de implantação para um RAG auto-hospedado em conformidade com o GDPR, o Regulamento de IA da UE, a HIPAA e as expectativas do Datenschutz alemão — escrito para o responsável de conformidade que precisa enviar um único documento à sua equipe de TI e que ela saiba o que construir.',
    metaDescription:
      'RAG local em conformidade com o GDPR para equipes jurídicas, médicas e financeiras: arquitetura, registro de auditoria, escopo do DPIA e 3 padrões de implantação.',
    twitterDescription:
      'RAG local em conformidade com o GDPR e o Regulamento de IA da UE. Air-gap, registros de auditoria, rastreabilidade de dados, escopo do DPIA e 3 padrões de implantação — o artigo que os responsáveis de conformidade enviam à TI.',
    audience:
      'Responsáveis de conformidade da UE, encarregados de proteção de dados (DPO), assessores jurídicos e arquitetos de TI responsáveis por construir RAG auto-hospedado sobre documentos confidenciais — contratos, prontuários de pacientes, arquivos de auditoria, data rooms de M&A, correspondência com reguladores.',
    readTime: '15 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'RAG local em conformidade com o GDPR',
    targetKeywords: [
      'rag conforme gdpr',
      'rag local dados empresariais',
      'regulamento ia ue rag',
      'rag privado documentos confidenciais',
      'implantacao rag on-premise',
      'datenschutz rag',
      'dpia rag local',
    ],
    leadAnswerBlock:
      '**Uma implantação RAG auto-hospedada está em conformidade com o GDPR e o Regulamento de IA da UE somente quando seis controles são integrados desde o primeiro dia: hospedagem em air-gap ou com egresso estritamente controlado, autenticação por usuário com acesso a documentos baseado em funções, registros de auditoria imutáveis que cubram a ingestão e a recuperação, criptografia ponta a ponta em repouso e em trânsito, rastreabilidade determinística do chunk até a fonte, e um procedimento de exclusão por escrito que se propague do repositório de origem através do índice vetorial e de quaisquer embeddings em cache. O padrão de implantação (notebook de usuário único, servidor on-prem, nuvem privada na UE) determina quais controles são simples e quais exigem trabalho — não se os controles são obrigatórios.**',
    quickAnswerTop: {
      pt: {
        question: 'O RAG local está em conformidade com o GDPR por padrão e qual padrão de implantação as equipes reguladas devem escolher?',
        answer:
          'O RAG local não está em conformidade com o GDPR por padrão. Executar um modelo on-premise resolve o problema da transferência transfronteiriça de dados e reduz a lista de operadores, mas os artigos 5, 25, 30, 32 e 35 do GDPR continuam aplicáveis: base legal, minimização de dados, registro de auditoria, segurança do tratamento e um DPIA para qualquer sistema que ingira dados de categorias especiais em larga escala. Escolha o padrão de notebook de usuário único para profissionais individuais e revisões pontuais; um servidor on-prem para bases de conhecimento departamentais de até alguns milhares de documentos e 5–50 usuários; uma nuvem privada na UE (nuvem soberana, chaves gerenciadas pelo cliente, região exclusiva na UE) para implantações multientidade onde a resiliência multirregional importa mais do que um air-gap completo. Independentemente do que escolher, os seis controles são os mesmos — só muda o custo de implementação.',
        bullets: [
          'A hospedagem local resolve a transferência transfronteiriça (artigos 44–49) e reduz a lista de operadores — não resolve por si só a base legal, o DPIA nem os direitos dos titulares.',
          'Notebook de usuário único — ideal para advogados, médicos, auditores individuais e revisões pontuais. Difícil de auditar em escala; o air-gap mais simples.',
          'Servidor on-prem — ideal para implantações departamentais de 5–50 usuários. Registros de auditoria reais, RBAC, backups e recuperação de desastres. Maior esforço de TI.',
          'Nuvem privada na UE — ideal para implantações multientidade que precisam de resiliência. Região soberana + chaves gerenciadas pelo cliente + cláusulas de não treinamento de IA com dados do cliente, obrigatórias.',
          'Um DPIA é obrigatório nos termos do artigo 35 quando há ingestão de dados de categorias especiais em larga escala, independentemente do padrão de implantação.',
          'As solicitações de direito ao esquecimento devem se propagar aos documentos de origem, aos índices vetoriais e aos embeddings em cache — projete o procedimento de exclusão antes de entrar em produção, não após receber a primeira solicitação.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Comparação de padrões de implantação', anchor: '#deployment-comparison' },
      { label: 'Escolher um padrão de implantação', anchor: '#which-deployment' },
      { label: 'Por que RAG local para dados sensíveis', anchor: '#why-local-rag' },
      { label: 'Os seis controles que toda implantação precisa', anchor: '#required-controls' },
      { label: 'Air-gap e controle de egresso', anchor: '#air-gap' },
      { label: 'Registro de auditoria que sobreviva a uma revisão', anchor: '#audit-logging' },
      { label: 'Rastreabilidade de dados do chunk à fonte', anchor: '#data-lineage' },
      { label: 'Criptografia e controle de acesso', anchor: '#encryption-access' },
      { label: 'Padrão de notebook de usuário único', anchor: '#laptop-pattern' },
      { label: 'Padrão de servidor on-prem', anchor: '#on-prem-pattern' },
      { label: 'Opções de bancos de dados vetoriais', anchor: '#vector-db-comparison' },
      { label: 'Padrão de nuvem privada na UE', anchor: '#private-cloud-pattern' },
      { label: 'Classificação segundo o Regulamento de IA da UE', anchor: '#eu-ai-act' },
      { label: 'Requisitos do DPIA', anchor: '#dpia-requirements' },
      { label: 'Notas específicas para a Alemanha (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Lista de verificação de conformidade', anchor: '#compliance-checklist' },
      { label: 'Erros frequentes', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A hospedagem local é necessária, mas não suficiente.** Executar o modelo e o repositório vetorial no seu próprio hardware resolve a transferência transfronteiriça de dados e reduz a lista de operadores, mas os artigos 5, 25, 30, 32 e 35 do GDPR continuam aplicáveis. A base legal, a minimização de dados, o registro de auditoria, a segurança do tratamento e os DPIAs não se tornam opcionais apenas porque os dados permanecem nas instalações.',
          '**Seis controles são inegociáveis** independentemente do padrão de implantação: air-gap ou controle de egresso estrito, autenticação por usuário com acesso baseado em funções, registros de auditoria imutáveis, criptografia em repouso e em trânsito, rastreabilidade determinística do chunk até o documento de origem, e um procedimento de exclusão por escrito que inclua o índice vetorial e quaisquer embeddings em cache.',
          '**Três padrões de implantação cobrem a maioria dos casos de uso regulados.** Notebook de usuário único para profissionais individuais e revisões pontuais; servidor on-prem para bases de conhecimento departamentais de 5–50 usuários; nuvem privada na UE (região soberana, chaves gerenciadas pelo cliente) para implantações multientidade onde a resiliência importa mais do que o air-gap completo.',
          '**O Regulamento de IA da UE classifica a maioria dos RAG locais como sistemas de risco limitado** — mas no momento em que a recuperação alimenta uma decisão automatizada (pontuação de crédito, seleção de pessoal, elegibilidade a benefícios), a implantação passa a ser de alto risco e aciona a avaliação de conformidade completa, a vigilância pós-comercialização e as obrigações de supervisão humana.',
          '**Um DPIA é obrigatório nos termos do artigo 35** para qualquer RAG que ingira dados de categorias especiais (saúde, dados jurídicos, biométricos, políticos, de filiação sindical) em larga escala, ou qualquer sistema que produza decisões automatizadas com efeitos jurídicos. Pular o DPIA significa pular a defesa em auditoria.',
          '**O direito ao esquecimento é o teste de exclusão que mais implantações reprovam.** Os documentos de origem são fáceis. Os índices vetoriais podem ser reconstruídos. Os embeddings em cache, os registros de recuperação e as respostas armazenadas no histórico de chat são as partes negligenciadas — e as que um regulador perguntará.',
          '**Os modelos de embedding de código aberto são seguros para o GDPR em princípio**, mas somente se (a) os pesos do modelo forem baixados uma vez e fixados a um hash, (b) a inferência for executada inteiramente em hardware local sem telemetria, e (c) a ficha do modelo e a licença forem revisadas para detectar cláusulas que conflitem com o uso empresarial confidencial.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**6 controles obrigatórios** para qualquer RAG regulado: air-gap, RBAC, registros de auditoria, criptografia, rastreabilidade de dados, procedimento de exclusão.',
          '**3 padrões de implantação:** notebook de usuário único (profissionais individuais), servidor on-prem (5–50 usuários), nuvem privada na UE (multientidade).',
          '**O DPIA é obrigatório** nos termos do artigo 35 quando há ingestão de dados de categorias especiais (saúde, jurídicos, biométricos) em larga escala.',
          '**Regulamento de IA da UE:** a maioria dos RAG locais = risco limitado; passa a alto risco quando a recuperação alimenta decisões automatizadas (crédito, emprego, benefícios).',
          '**O direito ao esquecimento** deve se propagar a documentos de origem, índices vetoriais, embeddings em cache E o histórico de respostas.',
          '**Cogestão do conselho de trabalhadores (Betriebsrat)** nos termos do §87 BetrVG é exigida para qualquer RAG sobre conteúdo gerado por funcionários na Alemanha.',
          '**Os modelos de embedding de código aberto** só estão em conformidade com o GDPR se os pesos estiverem fixados, a inferência for totalmente local e a licença tiver sido revisada.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'Comparação de padrões de implantação',
        content:
          'Cada padrão pode ser tornado conforme ao GDPR; o que muda é o custo dos controles e os modos de falha quando algo dá errado. Escolha o padrão mais simples que se ajuste ao número de usuários, à sensibilidade dos documentos e ao requisito de resiliência.',
        columns: ['Controle', 'Notebook de usuário único', 'Servidor on-prem', 'Nuvem privada na UE'],
        rows: [
          {
            'Controle': 'Air-gap (sem rede de saída)',
            'Notebook de usuário único': 'Trivial — desativar a rede',
            'Servidor on-prem': 'Alcançável — VLAN + firewall',
            'Nuvem privada na UE': 'Difícil — somente lista de egresso permitido',
          },
          {
            'Controle': 'Registro de auditoria (quem, o quê, quando)',
            'Notebook de usuário único': 'Manual — somente em nível de SO',
            'Servidor on-prem': 'Sólido — pipeline de logs centralizado',
            'Nuvem privada na UE': 'Sólido — logging nativo na nuvem',
          },
          {
            'Controle': 'Rastreabilidade de dados (chunk → fonte)',
            'Notebook de usuário único': 'Somente arquivos locais',
            'Servidor on-prem': 'Pipeline totalmente rastreável',
            'Nuvem privada na UE': 'Completa — mas abrange regiões',
          },
          {
            'Controle': 'Residência de dados na UE',
            'Notebook de usuário único': 'Inerente — localização física',
            'Servidor on-prem': 'Inerente — localização física',
            'Nuvem privada na UE': 'Configurada — região soberana exigida',
          },
          {
            'Controle': 'RBAC por usuário',
            'Notebook de usuário único': 'Usuário único — N/A',
            'Servidor on-prem': 'Provedor de identidade + grupos',
            'Nuvem privada na UE': 'IAM + SSO + ACL por coleção',
          },
          {
            'Controle': 'Backup e recuperação de desastres',
            'Notebook de usuário único': 'Disco externo criptografado',
            'Servidor on-prem': 'Fita ou backup externo',
            'Nuvem privada na UE': 'Replicação multi-AZ',
          },
          {
            'Controle': 'Custo inicial',
            'Notebook de usuário único': 'Somente hardware — baixo',
            'Servidor on-prem': 'Servidor + integração — médio',
            'Nuvem privada na UE': 'Assinatura + configuração — médio',
          },
          {
            'Controle': 'Custo contínuo',
            'Notebook de usuário único': 'Nenhum — tempo de sysadmin',
            'Servidor on-prem': 'Operações de TI + eletricidade + refrigeração',
            'Nuvem privada na UE': 'Mensalidade recorrente',
          },
          {
            'Controle': 'Ideal para',
            'Notebook de usuário único': 'Profissionais individuais, revisões pontuais',
            'Servidor on-prem': '5–50 usuários, bases de conhecimento departamentais',
            'Nuvem privada na UE': 'Multientidade, implantações resilientes',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'Escolher um padrão de implantação',
        content:
          '**A escolha certa depende do número de usuários, da sensibilidade dos documentos, da pressão de auditoria e da capacidade interna de TI.** Este atalho de decisão cobre a maioria das situações reais.',
        columns: ['Sua situação', 'Escolha'],
        rows: [
          {
            'Sua situação': 'Advogado, médico ou auditor individual que revisa um caso de cada vez',
            'Escolha': 'Notebook de usuário único',
          },
          {
            'Sua situação': 'Data room de M&A com 3–5 revisores nomeados e data de fechamento definida',
            'Escolha': 'Notebook de usuário único ou on-prem (conforme o volume de documentos)',
          },
          {
            'Sua situação': 'Equipe de conformidade de 10–30 pessoas que compartilha um arquivo de correspondência com reguladores',
            'Escolha': 'Servidor on-prem',
          },
          {
            'Sua situação': 'Departamento hospitalar construindo um assistente de protocolos clínicos para 50 funcionários',
            'Escolha': 'Servidor on-prem',
          },
          {
            'Sua situação': 'Grupo multientidade que precisa de um RAG compartilhado entre filiais em vários países da UE',
            'Escolha': 'Nuvem privada na UE (região soberana + chaves gerenciadas pelo cliente)',
          },
          {
            'Sua situação': 'Seguradora com requisito de disponibilidade 24/7 e plano de recuperação de desastres',
            'Escolha': 'Nuvem privada na UE',
          },
          {
            'Sua situação': 'Órgão público com dados classificados ou restritos',
            'Escolha': 'Somente on-prem com air-gap — a nuvem fica fora de escopo',
          },
          {
            'Sua situação': 'Defesa de auditoria perante regulador em menos de 6 semanas',
            'Escolha': 'Servidor on-prem (o mais rápido para demonstrar controle)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'Por que RAG local para dados sensíveis',
        content:
          '**O argumento a favor do RAG local frente ao LLM-as-a-service na nuvem não é ideologia — é a forma que a avaliação de risco do GDPR assume.** O RAG na nuvem é viável para muitos casos de uso; para dados empresariais sensíveis, ele acrescenta cinco riscos que o RAG local elimina por construção.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O RAG local mantém seus documentos sensíveis no seu próprio hardware enquanto fornece à sua equipe uma busca potencializada por IA — nenhum dado sai do prédio, nenhum operador externo os toca, e nenhuma pergunta sobre transferência transfronteiriça surge.',
          },
          {
            type: 'plain-terms',
            text: 'Imagine que sua equipe jurídica pudesse buscar em 10.000 processos fazendo perguntas em linguagem natural — mas os documentos nunca saíssem da sala de servidores. Isso é o RAG local: a IA lê seus documentos no seu hardware, responde suas perguntas no seu hardware, e nada é enviado para lugar algum. A vantagem de conformidade não é um recurso — é a arquitetura.',
          },
        ],
        items: [
          '**Transferência transfronteiriça (artigos 44–49).** Enviar dados pessoais a um operador fora da UE exige cláusulas contratuais-padrão, uma avaliação de impacto da transferência e uma resposta crível sobre se a jurisdição receptora tem poderes de intimação que alcancem esses dados. O RAG local não transfere dados — a pergunta não surge.',
          '**Proliferação de suboperadores (artigo 28).** Os provedores de LLM na nuvem costumam depender de infraestrutura de hiperescalador, serviços de moderação de conteúdo e provedores de observabilidade. Cada um é um suboperador que deve ser listado, contratado e auditado. O RAG local tem zero suboperadores por padrão.',
          '**Vazamento de dados de treinamento.** Muitos termos de LLM na nuvem reservam-se o direito de usar os prompts dos clientes para melhorar o modelo, a menos que se use um nível enterprise pago e se verifique a cláusula de não treinamento. O RAG local executa modelos com pesos que você controla; nada sai do host.',
          '**Cláusulas de confidencialidade em contratos com clientes.** Os acordos com assessoria externa, os NDAs de M&A e os acordos sobre dados de pacientes frequentemente proíbem a transmissão do material protegido a operadores externos. O RAG local contorna a cláusula por completo.',
          '**Exposição a intimações judiciais e processos legais.** Os documentos armazenados em um provedor de nuvem podem ser requisitados por processo legal dirigido ao provedor, com obrigações de divulgação das quais o controlador pode nem ser notificado a tempo. Os documentos que nunca saem das suas instalações só podem ser requisitados a você.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O RAG local não é a resposta certa para todas as cargas de trabalho. A pesquisa de informação pública, a geração de rascunhos de marketing, a assistência de código em repositórios de código aberto — tudo isso costuma funcionar melhor com LLMs na nuvem, porque a exposição ao GDPR é baixa e a diferença de qualidade do modelo importa. O argumento deste artigo é especificamente para dados empresariais confidenciais: jurídicos, médicos, financeiros, de RH, correspondência com reguladores e segredos comerciais.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'Os seis controles que toda implantação precisa',
        content:
          '**Estes seis controles são o piso mínimo.** Toda implantação regulada precisa dos seis; o padrão de implantação só muda como você os implementa. Omitir qualquer um deles é o motivo mais frequente pelo qual as auditorias dão errado.',
        numberedItems: [
          {
            title: 'Air-gap ou controle de egresso estrito',
            whyItMatters:
              'Confirme que os documentos e embeddings não podem vazar por chamadas de saída — SDK de telemetria, sondas de atualização do modelo, relatores de falhas, callbacks de moderação de conteúdo, CDN de terceiros para fontes. Ou desabilite o acesso à rede por completo (air-gap real) ou execute uma lista de egresso permitido que autorize somente servidores de atualização assinados.',
          },
          {
            title: 'Autenticação por usuário com acesso baseado em funções',
            whyItMatters:
              'Você precisa poder responder "quem acessou qual documento" antes que um regulador pergunte. Login único contra um provedor de identidade, acesso por grupos a coleções e ACL por documento onde o caso exigir. As contas compartilhadas não são um controle — são uma falha de auditoria esperando para acontecer.',
          },
          {
            title: 'Registros de auditoria imutáveis que cubram a ingestão e a recuperação',
            whyItMatters:
              'Para cada documento: quem o enviou, quando, caminho de origem, hash. Para cada consulta: quem perguntou, o que foi perguntado (se o logging permitir), quais chunks foram recuperados, de quais IDs de documentos vieram, qual resposta foi devolvida. Os registros devem ser à prova de adulteração — somente de adição, assinados, com retenção suficiente para cobrir a janela de investigação da autoridade supervisora. Para a trilha de auditoria em nível de prompt — controle de versões, registros de alterações e reversões — consulte [fluxos de trabalho de controle de versões de prompts](https://www.promptquorum.com/pt/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'Criptografia em repouso e em trânsito',
            whyItMatters:
              'Criptografia de disco completo no host, TLS para qualquer chamada interna entre serviços, e gerenciamento de chaves que sobreviva a um notebook roubado ou a uma conta de administrador comprometida. Chaves gerenciadas pelo cliente para implantações na nuvem. Sem essas medidas, o roubo de um dispositivo se torna uma violação de dados notificável nos termos do artigo 33.',
          },
          {
            title: 'Rastreabilidade determinística de dados do chunk à fonte',
            whyItMatters:
              'Cada chunk recuperado deve ser rastreável até seu documento de origem, página, seção e versão. É isso que permite (a) verificar a resposta, (b) atender a uma solicitação de exclusão, (c) defender o sistema perante um tribunal quando um resumo gerado é contestado. "Não conseguimos reproduzir qual chunk causou qual resposta" não é uma resposta aceitável para uma autoridade supervisora.',
          },
          {
            title: 'Procedimento de exclusão por escrito que inclua o índice vetorial e os embeddings em cache',
            whyItMatters:
              'Uma solicitação de direito ao esquecimento deve se propagar do repositório de origem, através do índice vetorial, até quaisquer embeddings em cache, e através da retenção de registros de recuperação. A maioria das implantações gerencia a exclusão da origem corretamente e esquece o resto. Documente o procedimento de exclusão antes de entrar em produção; pratique-o com dados sintéticos.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'Air-gap e controle de egresso',
        content:
          '**Air-gap significa que o host não tem rota de rede de saída; o controle de egresso significa que ele tem uma estritamente permitida.** Ambos são aceitáveis; escolha o modelo mais sólido que suas operações conseguirem sustentar.',
        items: [
          '**Air-gap real** — sem DHCP, sem resolução DNS para destinos públicos, sem TCP de saída. As atualizações são feitas por mídia assinada que um administrador conecta fisicamente. Este é o modelo certo para trabalho classificado, determinadas redes hospitalares e qualquer implantação cujo modelo de ameaças inclua uma dependência maliciosa.',
          '**Lista de egresso permitido** — a rede de saída só é permitida para uma pequena lista de destinos nomeados (servidores de atualização do modelo, seu provedor de identidade, encaminhadores de logs para coletores internos). Todo o demais tráfego é descartado no firewall. Este é o padrão prático para a maioria das implantações departamentais reguladas.',
          '**O que procurar na plataforma**: zero telemetria por padrão, sem chamadas de saída durante a inferência, sem CDN de fontes na interface de usuário, sem relatores de falhas que enviem cargas úteis. Verifique com uma captura de pacotes ou uma ferramenta como o Little Snitch no banco de testes antes de ir para produção.',
          '**Governança de atualizações** — os pesos do modelo, os pesos do embedder, o código da aplicação e os patches do SO passam todos por uma janela de atualização controlada. O administrador que promove uma atualização a assina por escrito; a alteração é registrada.',
          '**Ruptura de air-gap frequente:** um SDK de analytics incluído com um componente de interface de terceiros, uma referência a CDN de fontes no chrome da aplicação, ou uma sonda de "verificar atualizações" que roda na inicialização. Por isso o passo de verificação importa — não presuma nada sobre os padrões.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Faça uma captura de pacotes de 24 horas no host com a aplicação aberta e em repouso. Qualquer tráfego de saída que não esteja na lista permitida é um achado. Repita isso sempre que a aplicação for atualizada — as notas de versão costumam subestimar quais novas chamadas de saída foram adicionadas.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'Registro de auditoria que sobreviva a uma revisão',
        content:
          '**O registro de auditoria é o artefato que uma autoridade supervisora lerá primeiro.** Ele deve responder a duas perguntas para cada recuperação: quem perguntou e o que o sistema lhe deu. Sem isso, você está argumentando com palavras; com um logging adequado, você está apresentando comprovantes.',
        items: [
          '**Eventos de ingestão**: ID de documento, hash (SHA-256), nome do arquivo, caminho de origem, enviado por, carimbo de data/hora, etiqueta de classificação, tamanho, número de páginas, grupo proprietário, classe de retenção. Etiquete cada documento na ingestão — a classificação retroativa de grandes corpora é difícil e raramente completa.',
          '**Eventos de recuperação**: ID de consulta, ID de usuário, carimbo de data/hora, IDs de chunks recuperados (e IDs de documentos dos quais vieram), pontuações de recuperação, hash da resposta final, identificador do modelo, identificador do embedder, top-K utilizado. O texto da consulta em si é sensível — registre-o somente se sua base legal de tratamento o cobrir; caso contrário, registre o hash e o carimbo de data/hora.',
          '**Eventos administrativos**: promoção do modelo, troca de embedder, reconstrução do índice, alterações de usuário/grupo, alterações de ACL, alterações de política de acesso. Cada evento assinado pelo administrador responsável.',
          '**Resistência a adulterações**: registro somente de adição, cadeia de hashes (cada entrada referencia o hash da entrada anterior), chave de assinatura fora de banda, reconciliação periódica com uma cópia separada mantida por um administrador diferente ou em uma mídia de escrita única.',
          '**Retenção**: alinha-se à janela de investigação da autoridade supervisora — no mínimo o período de retenção do caso; comumente seis a sete anos para indústrias reguladas; mais onde se apliquem normas setoriais.',
          '**Pipeline**: a aplicação emite eventos estruturados; um encaminhador os envia a um repositório de logs separado com acesso de escrita restrito. O servidor de aplicação nunca deve ter permissão para excluir ou reescrever entradas de logs — a separação de funções é o que torna o log crível.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Registrar o texto da consulta introduz sua própria pergunta sobre o GDPR — uma consulta pode conter em si dados pessoais (p. ex., "resuma o histórico médico do paciente X"). Decida no momento do design se sua base legal de tratamento cobre o registro de consultas, e se não cobrir, registre somente os metadados necessários para auditoria e diagnóstico operacional.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'Rastreabilidade de dados do chunk à fonte',
        content:
          '**A rastreabilidade é a espinha dorsal de todos os demais controles.** Sem ela, as solicitações de exclusão falham, a verificação de respostas é impossível e a trilha de auditoria desmorona. Integre a rastreabilidade desde a primeira ingestão, não depois.',
        items: [
          '**Rastreabilidade em nível de documento**: cada documento tem um ID interno estável, um hash de conteúdo, um carimbo de data/hora de ingestão, um proprietário, uma classificação e uma classe de retenção. O arquivo original permanece no repositório de origem; o sistema RAG mantém uma referência, não o original.',
          '**Rastreabilidade em nível de chunk**: cada chunk referencia seu ID de documento pai, página (para PDFs), seção (para documentos estruturados), deslocamento de caracteres, comprimento e versão da estratégia de chunking. Quando você refizer o chunking (e você fará), os chunks antigos são marcados como obsoletos, não excluídos no local — para que os logs de recuperação antigos continuem resolvíveis.',
          '**Rastreabilidade em nível de embedding**: cada vetor de embedding referencia seu ID de chunk e identificador de embedder. Quando você trocar de embedder, os vetores antigos são conservados até que os novos sejam validados e qualquer caso que os referenciasse esteja encerrado; só então são expurgados.',
          '**Rastreabilidade em nível de resposta**: cada resposta gerada referencia os IDs de chunks que a produziram, o identificador do modelo, a versão do template de prompt e o carimbo de data/hora. Quando um usuário pergunta "de onde veio esta resposta?", o sistema resolve chunk → documento → página com um clique.',
          '**Reindexação sem quebrar a rastreabilidade**: as reconstruções preservam os IDs de documentos e incrementam as versões da estratégia de chunking. Os IDs de chunks antigos continuam resolvíveis nos registros de recuperação mesmo depois de o índice ativo ter avançado.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Teste a cadeia de rastreabilidade trimestralmente. Escolha uma recuperação aleatória do registro de auditoria e percorra-a de trás para frente: ID de chunk → ID de documento → arquivo original no repositório de origem → classe de retenção. Se algum passo estiver quebrado, corrija o esquema antes da próxima inspeção supervisora — não durante ela.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'Criptografia e controle de acesso',
        content:
          '**Criptografia em repouso, criptografia em trânsito e controle de acesso que se mapeia ao seu provedor de identidade existente.** Estes são controles bem compreendidos; o modo de falha é esquecer uma das três camadas, não implementar mal a camada escolhida.',
        items: [
          '**Criptografia em repouso** — criptografia de disco completo no host (LUKS no Linux, BitLocker no Windows, FileVault no macOS para notebooks). Para servidores, criptografe também as partições que hospedam o repositório vetorial e a etapa de ingestão. Chaves gerenciadas pelo cliente para qualquer implantação na nuvem, com rotação de chaves conforme sua política.',
          '**Criptografia em trânsito** — TLS para qualquer salto entre serviços, mesmo em localhost. Política de cifras alinhada à sua linha de base setorial. TLS mútuo onde o modelo de ameaças o justifique — tipicamente servidor a servidor em implantações na nuvem.',
          '**Autenticação** — login único contra seu provedor de identidade existente (OIDC, SAML). Sem contas locais em produção. MFA obrigatório para qualquer usuário com acesso administrativo ou a coleções sensíveis.',
          '**Autorização** — acesso baseado em grupos em nível de coleção; ACL em nível de documento onde o caso exigir (p. ex., data rooms de M&A, investigações de emprego). O pipeline de recuperação deve aplicar as ACLs no momento da consulta — não somente a interface de usuário. Um usuário que não pode ver um documento também não deve receber seus chunks na resposta.',
          '**Acesso administrativo** — gerenciamento de acesso privilegiado para qualquer conta que possa ler ou reconstruir índices, ver registros de auditoria ou alterar ACLs. A elevação just-in-time com justificativa registrada supera os direitos de administrador permanentes.',
          '**Segurança de endpoint** — dispositivos gerenciados para implantações com notebook (registrados em MDM, criptografados, política de bloqueio de tela aplicada). Um notebook de profissional individual com o repositório de documentos descriptografado e desatendido em uma cafeteria é a violação do GDPR que você não quer reportar.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'Padrão de notebook de usuário único',
        content:
          '**O notebook de usuário único é o padrão mais fácil de tornar air-gapped e o mais difícil de escalar.** Adequado para profissionais individuais e revisões pontuais; inadequado para qualquer coisa que precise sobreviver a um único usuário ou à sua saída.',
        items: [
          '**Hardware** — um notebook de categoria workstation com criptografia de disco completo, uma GPU discreta (ou uma máquina recente de memória unificada) e ao menos 32 GB de RAM. O modelo e o embedder devem caber na memória junto com o cache do repositório vetorial. Para requisitos de hardware e seleção de modelos por VRAM, consulte o [guia de hardware para LLMs locais](https://www.promptquorum.com/pt/local-llms/local-llm-hardware-guide-2026).',
          '**Software** — uma aplicação RAG de desktop autocontida que roda localmente; um LLM de código aberto com pesos baixados uma vez e fixados a um hash; um embedder de código aberto; um repositório vetorial local no disco criptografado. Para uma comparação de modelos de código aberto adequados para RAG local, consulte [os melhores modelos de código aberto para Ollama](https://www.promptquorum.com/pt/local-llms/top-open-source-models-ollama).',
          '**Postura de rede** — air-gapped durante o trabalho; reconectado somente para atualizações assinadas explícitas. Configure o firewall do SO para descartar todas as conexões de saída por padrão e crie exceções explícitas para o fluxo de atualização.',
          '**Manuseio de documentos** — documentos de origem no disco criptografado; uma estrutura de pastas por caso; backups semanais criptografados em um disco externo armazenado em local diferente.',
          '**Postura de auditoria** — o registro de auditoria em nível do SO (login, acesso a arquivos, eventos de periféricos) é o piso mínimo. Os eventos em nível de aplicação são mais simples com o padrão de servidor on-prem; para o padrão de notebook, trate o log do SO como o registro principal e complemente com notas manuais por caso.',
          '**Limitações** — um notebook de usuário único não é uma plataforma multiusuário. Compartilhar o notebook, compartilhar contas ou copiar o repositório de documentos para o notebook de um colega quebra a postura de auditoria e a avaliação da base legal.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para profissionais individuais que trabalham casos confidenciais, o padrão de notebook de usuário único é genuinamente a postura de privacidade mais sólida disponível — melhor que qualquer nuvem e mais robusta que muitas implantações on-prem. A contrapartida é operacional: quando o notebook falha, o caso herda o tempo de recuperação da sua disciplina de backups.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'Padrão de servidor on-prem',
        content:
          '**O servidor on-prem é o padrão de trabalho habitual para RAG departamental regulado.** Escala para 5–50 usuários e alguns milhares de documentos, admite registros de auditoria adequados e permanece dentro do seu perímetro físico. O custo é trabalho real de operações de TI.',
        items: [
          '**Hardware** — um servidor com uma ou duas GPUs de nível empresarial (as GPUs de categoria workstation são aceitáveis para corpora menores), discos redundantes, memória ECC e um no-break. Planeje 2–4× o armazenamento do seu corpus de documentos bruto para cobrir vetores, índices, logs e backups.',
          '**Rede** — uma VLAN dedicada atrás do firewall corporativo; lista de egresso permitido ou air-gap completo conforme o modelo de ameaças. Acesso interno somente pela rede corporativa, sem ingresso público.',
          '**Pilha de software** — uma plataforma RAG auto-hospedada (uma imagem de servidor independente ou uma implantação em contêineres), um LLM de código aberto como modelo de chat, um embedder de código aberto e um repositório vetorial apropriado ao tamanho do corpus. O servidor de aplicação, o repositório vetorial e o encaminhador de logs rodam como processos separados com contas de serviço separadas.',
          '**Identidade** — federada com o provedor de identidade corporativo; a participação em grupos controla o acesso às coleções. As coleções sensíveis exigem fluxos de aprovação adicionais.',
          '**Backup e recuperação de desastres** — backups incrementais noturnos do repositório de documentos e do índice vetorial; backups completos semanais; cópia externa mantida pela TI. Procedimento de restauração documentado e testado ao menos anualmente.',
          '**Operações** — janela de patch conforme a política de gestão de mudanças; revisões de acesso trimestrais; procedimento de exclusão para solicitações de direito ao esquecimento ensaiado; rota documentada de atualização do modelo e do embedder que preserve a rastreabilidade.',
          '**Planejamento de capacidade** — alguns milhares de documentos e 5–50 usuários simultâneos cabem confortavelmente em um servidor GPU de gama média. Além disso, planeje um host mais potente ou a migração para o padrão de nuvem privada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O RAG on-prem é o padrão que mais frequentemente falha por razões não técnicas: um backup que nunca foi restaurado, uma conta de administrador compartilhada entre a equipe de TI, um no-break que ninguém testou, um encaminhador de logs que vinha descartando eventos silenciosamente por dois meses. Os controles técnicos são mais fáceis que a higiene operacional.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'Opções de bancos de dados vetoriais para RAG on-prem',
        content:
          '**A escolha do repositório vetorial raramente determina a conformidade — mas molda o custo operacional, o teto de escala e a limpeza com que o procedimento de exclusão pode ser implementado.** A maioria das implantações reguladas escolhe uma destas seis opções.',
        columns: ['Banco de dados vetorial', 'Tipo', 'Auto-hospedagem na UE', 'Melhor padrão de RAG'],
        rows: [
          {
            'Banco de dados vetorial': '**Chroma**',
            'Tipo': 'Código aberto, leve',
            'Auto-hospedagem na UE': '✅',
            'Melhor padrão de RAG': 'Notebook + on-prem pequeno',
          },
          {
            'Banco de dados vetorial': '**Qdrant**',
            'Tipo': 'Código aberto, alto desempenho',
            'Auto-hospedagem na UE': '✅',
            'Melhor padrão de RAG': 'Servidor on-prem, filtragem intensiva',
          },
          {
            'Banco de dados vetorial': '**Weaviate**',
            'Tipo': 'Código aberto, completo',
            'Auto-hospedagem na UE': '✅',
            'Melhor padrão de RAG': 'On-prem + busca híbrida',
          },
          {
            'Banco de dados vetorial': '**Milvus**',
            'Tipo': 'Código aberto, empresarial',
            'Auto-hospedagem na UE': '✅',
            'Melhor padrão de RAG': 'On-prem em larga escala',
          },
          {
            'Banco de dados vetorial': '**pgvector**',
            'Tipo': 'Extensão do PostgreSQL',
            'Auto-hospedagem na UE': '✅',
            'Melhor padrão de RAG': 'Equipes que já usam Postgres',
          },
          {
            'Banco de dados vetorial': '**Pinecone**',
            'Tipo': 'SaaS gerenciado',
            'Auto-hospedagem na UE': '⚠️ Hospedado nos EUA',
            'Melhor padrão de RAG': 'Somente nuvem privada na UE (com ressalvas)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'Padrão de nuvem privada na UE',
        content:
          '**O padrão de nuvem privada na UE utiliza um provedor de nuvem em região soberana com chaves gerenciadas pelo cliente, residência de dados exclusivamente na UE e uma cláusula contratual de não treinamento de IA que cubra os dados do cliente.** É a resposta certa para implantações multientidade, requisitos de resiliência multirregional e equipes que carecem de capacidade operacional para um on-prem real.',
        items: [
          '**Seleção do provedor** — a oferta soberana na UE de um hiperescalador ou um provedor de nuvem europeu. O DPA deve listar cada suboperador; os mecanismos de transferência devem ser abordados se algum suboperador estiver fora do EEE. A análise do impacto da transferência ao estilo Schrems II faz parte do dossiê mesmo quando o operador imediato tem sede na UE.',
          '**Região** — exclusivamente na UE, com garantias explícitas de residência de dados. Replicação entre regiões somente para outras regiões da UE. Sem região dos EUA como failover, nem mesmo temporariamente, nem mesmo para backups.',
          '**Criptografia** — chaves gerenciadas pelo cliente com rotação; bring-your-own-key onde o provedor o suportar; eventos de acesso a chaves registrados separadamente dos logs operacionais do provedor de nuvem.',
          '**Rede** — VPC privada sem ingresso público; acesso somente por conectividade privada (link dedicado ou VPN) a partir da sua rede corporativa; lista de egresso permitido para qualquer dependência de saída.',
          '**Identidade** — federada com seu IdP corporativo; IAM nativo da nuvem vinculado a identidades de usuário, não a contas de serviço compartilhadas; ACL por coleção aplicadas no pipeline de recuperação.',
          '**Logging** — log de auditoria nativo da nuvem alimentado no seu SIEM existente; ingestão separada para eventos de auditoria da aplicação; retenção à prova de adulteração que atenda às expectativas do supervisor.',
          '**Contratos** — o DPA deve cumprir o artigo 28, listar suboperadores, abordar as cláusulas contratuais-padrão onde necessário e incluir uma cláusula explícita de não treinamento com dados do cliente que cubra tanto os pesos do LLM quanto qualquer serviço auxiliar (busca, telemetria, suporte).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O padrão de nuvem privada na UE parece mais permissivo que o on-prem porque utiliza um operador externo — mas com região soberana, chaves gerenciadas pelo cliente, cláusula contratual de não treinamento e controle de egresso adequado, pode igualar ou superar o on-prem em disponibilidade e postura de auditoria. O dossiê de conformidade é mais volumoso; o risco operacional é menor.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'Classificação segundo o Regulamento de IA da UE: risco limitado frente a alto risco',
        content:
          '**A maioria das implantações de RAG local são sistemas de IA de risco limitado segundo o Regulamento de IA da UE — mas no momento em que a recuperação alimenta uma decisão automatizada que afeta uma pessoa, a classificação passa a alto risco e as obrigações se multiplicam.** Classifique antes de construir.',
        items: [
          '**Risco limitado (a maioria dos RAG locais)** — o sistema recupera e resume documentos para assistir um humano; o humano toma a decisão. As obrigações são principalmente de transparência: os usuários devem saber que estão interagindo com uma IA, o conteúdo gerado deve ser identificável como tal, e sem design manipulador ou enganoso.',
          '**Alto risco** — a recuperação alimenta uma decisão automatizada em domínios que o Regulamento enumera: pontuação de crédito, seleção de pessoal, admissões educacionais, serviços públicos essenciais, aplicação da lei, migração, justiça, identificação biométrica, infraestrutura crítica. Um RAG de apoio à decisão clínica que recomenda tratamentos é de alto risco; um RAG que resume protocolos clínicos para ajudar um médico a ler diretrizes mais rápido não é.',
          '**Obrigações de alto risco** — sistema de gestão de riscos ao longo do ciclo de vida, governança de dados (dados de treinamento, validação e teste documentados), documentação técnica, registro automático de eventos, transparência e informação aos usuários, supervisão humana, medidas de precisão e robustez, avaliação de conformidade antes da comercialização, vigilância pós-comercialização.',
          '**Considerações sobre a IA de propósito geral** — usar um LLM de propósito geral (de código aberto ou não) não transfere as obrigações de alto risco ao provedor do modelo. O implementador (sua organização) carrega as obrigações de alto risco para o sistema que você constrói com esse modelo.',
          '**Práticas proibidas** — pontuação social, raspagem não direcionada de imagens faciais, reconhecimento de emoções em locais de trabalho e centros educacionais, determinada categorização biométrica em tempo real. Estas ficam descartadas independentemente de quão localmente você as execute.',
          '**Documentação como artefato de auditoria** — o dossiê técnico exigido para sistemas de alto risco não é um entregável único; é um documento vivo. Vincule-o ao seu processo de gestão de mudanças para que cada promoção de modelo, troca de embedder e alteração de ACL fique refletida.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A linha entre alto risco e risco limitado é traçada pelo caso de uso, não pela tecnologia. O mesmo repositório vetorial e o mesmo modelo podem ser de risco limitado em uma implantação de assistente de pesquisa e de alto risco em uma implantação de seleção de pessoal de RH. Classifique por caso de uso, não por plataforma.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'Requisitos do DPIA',
        content:
          '**Uma Avaliação de Impacto sobre a Proteção de Dados (artigo 35) é obrigatória para o tratamento que possa representar um alto risco para os direitos e liberdades dos titulares.** A maioria dos RAG locais regulados está no âmbito de aplicação. Trate o DPIA como o documento de design, não como um artefato de conformidade a posteriori.',
        items: [
          '**Quando é obrigatório** — avaliação sistemática e abrangente que inclua definição de perfis com efeitos jurídicos; tratamento em larga escala de dados de categorias especiais (saúde, dados jurídicos, biométricos, raciais, políticos, religiosos, sindicais); monitoramento sistemático de zonas de acesso público. As autoridades supervisoras nacionais publicam listas de operações que sempre exigem um DPIA — consulte a sua.',
          '**Escopo do DPIA** — finalidade e base legal; descrição das operações de tratamento; avaliação de necessidade e proporcionalidade; avaliação de riscos para os titulares; mitigações e risco residual; consulta com o DPO e (onde o risco residual for alto) com a autoridade supervisora antes de iniciar o tratamento.',
          '**Riscos específicos do RAG** a abordar: reidentificação de indivíduos a partir de chunks recuperados; geração de informação imprecisa que afete uma pessoa; vazamento por meio de logs ou backups; completude da exclusão em solicitações de direito ao esquecimento; contaminação cruzada entre coleções; acesso amplo demais para usuários com muitos privilégios.',
          '**Mitigações a documentar** — os seis controles anteriores, mais redação ou pseudonimização em nível de chunk onde a base legal for o consentimento ou o interesse legítimo; procedimento de exclusão com evidência de ensaio; revisões de acesso em uma cadência estabelecida.',
          '**Revisores** — o DPO o aprova; a autoridade supervisora é consultada onde o risco residual após a mitigação ainda for alto. O DPIA assinado vai no dossiê técnico junto com a documentação de conformidade com o Regulamento de IA da UE se o sistema também for de alto risco.',
          '**Documento vivo** — execute novamente o DPIA quando o corpus se ampliar materialmente, quando o modelo ou o embedder mudar, quando os limites de acesso mudarem, ou anualmente como base. Vincule isso ao seu processo de gestão de mudanças.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Um DPIA redigido na segunda semana do projeto é uma ferramenta de planejamento. Um DPIA redigido na décima semana é um documento defensivo. O primeiro é muito mais útil e tende a trazer à tona mudanças de design que reduzem o risco residual final. Comece o DPIA antes da decisão de aquisição, não depois da implantação.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'Notas específicas para a Alemanha (Datenschutz)',
        content:
          '**A prática alemã de proteção de dados sobrepõe o BDSG-Neu, as normas setoriais e a cogestão do conselho de trabalhadores sobre a linha de base do GDPR.** Uma implantação de RAG que satisfaz o GDPR genérico pode ainda assim não sobreviver a uma revisão alemã se esses pontos forem negligenciados.',
        items: [
          '**Cogestão do conselho de trabalhadores (Betriebsrat)** — nos termos do §87 BetrVG, qualquer sistema que monitore o desempenho ou o comportamento dos funcionários exige um acordo do conselho de trabalhadores antes da implantação. Um RAG sobre conteúdo gerado por funcionários (e-mails, documentos internos) tipicamente o aciona. Envolva o conselho de trabalhadores no momento do design; o acordo (Betriebsvereinbarung) passa a fazer parte do dossiê de base legal.',
          '**Confidencialidade setorial** — o §203 StGB criminaliza a violação da confidencialidade profissional (advogados, médicos, consultores fiscais, auditores). Implantar um RAG de forma que exponha dados de clientes protegidos a pessoal não vinculado ou a operadores externos pode constituir um crime, não apenas uma questão civil. O padrão on-prem ou air-gapped é a opção mais segura nesses setores.',
          '**Telemediengesetz (TTDSG) e telemetria** — a telemetria de saída que toca os dispositivos dos usuários finais é regulada não apenas pelo GDPR, mas também pelo TTDSG. O air-gap elimina a questão; as implantações com controle de egresso devem verificar que qualquer chamada de saída seja consentida, necessária ou estritamente técnica.',
          '**Expectativas de transparência** — as normas de transparência federais e estaduais ocasionalmente exigem a divulgação da tomada de decisão assistida por IA aos titulares. Mesmo onde não for estritamente exigido, a divulgação em linguagem clara de que a recuperação é assistida por IA e de que o revisor humano permanece responsável pela decisão é o padrão defensável.',
          '**Aufsichtsbehörden (autoridades supervisoras estaduais)** — a supervisão do Datenschutz é organizada em nível estadual para o setor privado. Contate o Landesbeauftragte für Datenschutz relevante onde for necessária consulta nos termos do artigo 36. Os documentos de posição dos principais Landesbeauftragte sobre ferramentas de IA são insumos úteis para o DPIA.',
          '**Idioma da documentação** — as autoridades supervisoras alemãs aceitam documentação em inglês, mas os artefatos-chave dirigidos aos usuários (avisos de privacidade, divulgações de transparência, acordos do conselho de trabalhadores) devem estar em alemão por razões tanto legais quanto práticas.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'Lista de verificação de conformidade antes de entrar em produção',
        content:
          '**Percorra esta lista do início ao fim antes de qualquer implantação em produção.** Cada item é um modo de falha real de uma auditoria real; a lista é intencionalmente curta para que realmente seja usada.',
        items: [
          '☐ **Base legal documentada** para cada categoria de dados de origem — consentimento, contrato, obrigação legal, interesse vital, tarefa pública ou interesse legítimo com um teste de ponderação no dossiê.',
          '☐ **DPIA aprovado pelo DPO**, com um procedimento de exclusão ensaiado anexado.',
          '☐ **Registro de atividades de tratamento (artigo 30)** atualizado para incluir o sistema RAG, as categorias de dados, a retenção, os destinatários e os mecanismos de transferência (tipicamente nenhum para RAG local).',
          '☐ **Seis controles verificados de ponta a ponta**: air-gap ou lista de egresso permitido, RBAC, registros de auditoria, criptografia, rastreabilidade, procedimento de exclusão.',
          '☐ **Captura de pacotes de saída** limpa durante um teste de estresse de 24 horas; repetida após cada atualização da aplicação.',
          '☐ **Integração do provedor de identidade** testada com um usuário real de cada nível de acesso; o acesso a coleções sensíveis exige elevação separada.',
          '☐ **Backups realizados e uma restauração realmente testada** em hardware isolado, não apenas verificada em um painel de status.',
          '☐ **Procedimento de direito ao esquecimento ensaiado** com dados sintéticos que cubra o repositório de origem, o índice vetorial, os embeddings em cache e a retenção do registro de recuperação.',
          '☐ **Classificação segundo o Regulamento de IA da UE** confirmada (risco limitado frente a alto risco); dossiê técnico em vigor se for de alto risco.',
          '☐ **Contratos de provedores (se houver) revisados**: DPA conforme ao artigo 28, suboperadores listados, cláusula de não treinamento que cubra os dados do cliente.',
          '☐ **Acordo do conselho de trabalhadores** estabelecido onde o conteúdo gerado por funcionários estiver no âmbito de aplicação (Alemanha; normas similares em outros lugares da UE).',
          '☐ **Aviso de transparência** redigido em linguagem compreensível para o usuário que explique a assistência de IA, o humano no circuito e o fluxo de dados.',
          '☐ **Procedimento de resposta a incidentes** atualizado para incluir cenários específicos do RAG: vazamento do índice, adulteração de logs, falha de exclusão, troca de modelo com quebra de rastreabilidade posterior.',
          '☐ **Revisão de acesso trimestral** agendada e atribuída; primeira revisão no calendário antes de entrar em produção.',
          '☐ **Atualização anual do DPIA** agendada e vinculada ao processo de gestão de mudanças.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros frequentes',
        items: [
          '**Erro 1: Tratar "local" como sinônimo de "conforme".** Executar on-prem resolve as perguntas de transferência e de operador; não resolve a base legal, o DPIA, o registro de auditoria nem os direitos dos titulares. A conformidade é um programa em camadas, não uma escolha de implantação.',
          '**Erro 2: Pular o DPIA porque o sistema é "apenas uma ferramenta de busca".** Uma ferramenta de busca que ingere dados de categorias especiais em larga escala é exatamente o que o artigo 35 cobre. Pular o DPIA significa pular a defesa em auditoria.',
          '**Erro 3: Registrar o texto da consulta sem verificar a base legal.** As próprias consultas são dados pessoais quando referenciam indivíduos. Decida no momento do design se sua base legal de tratamento cobre o registro de consultas; se não, registre somente o hash e os metadados.',
          '**Erro 4: Esquecer os embeddings em cache no procedimento de exclusão.** A exclusão da origem funciona. A reconstrução do índice vetorial funciona. A camada de cache que sua plataforma adicionou para o desempenho, as pegadas de embedding no registro de recuperação e o histórico de respostas no repositório de chat são as partes negligenciadas.',
          '**Erro 5: Permitir que usuários com muitos privilégios pulem as ACLs de coleção.** "Os administradores podem ver tudo" é conveniente e muito comum; também é o motivo mais frequente pelo qual as auditorias dão errado. O acesso privilegiado deve, por sua vez, ser controlado, limitado no tempo e justificado pelo uso.',
          '**Erro 6: Reutilizar um espaço de trabalho para vários casos ou clientes.** A contaminação cruzada de citações e contexto é uma falha de confidencialidade mesmo antes de qualquer parte externa vê-la. Um caso ou cliente por coleção; ACLs separadas; retenção separada.',
          '**Erro 7: Comprar air-gap e depois conectar um telefone pessoal para os testes.** O perímetro de air-gap deve incluir as pessoas que podem transportar dados através dele. A política de endpoints é parte do controle, não uma preocupação separada.',
          '**Erro 8: Tratar a escolha de modelo e embedder como "configurar e esquecer".** Cada atualização é um evento de gestão de mudanças com implicações para o DPIA, a rastreabilidade e a trilha de auditoria. Planeje o fluxo de trabalho de atualização antes da primeira implantação em produção.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Texto completo do GDPR (Oficial)](https://gdpr-info.eu/) — Texto completo do Regulamento Geral de Proteção de Dados com comentário artigo por artigo.',
          '[Texto completo do Regulamento de IA da UE](https://artificialintelligenceact.eu/) — Texto completo do regulamento com o marco de classificação de riscos.',
          '[Marco de Gestão de Riscos de IA do NIST](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Marco de governança federal dos EUA aplicável à avaliação de riscos de IA.',
          '[BDSG-Neu (Lei Federal Alemã de Proteção de Dados)](https://www.gesetze-im-internet.de/bdsg_2018/) — Implementação alemã do GDPR com adições setoriais.',
          '[Diretrizes do EDPB sobre DPIA](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — Orientação do Comitê Europeu de Proteção de Dados sobre quando e como realizar DPIAs.',
          '[BfDI (Comissário Federal Alemão para a Proteção de Dados)](https://www.bfdi.bund.de/) — Documentos de posição do Comissário Federal Alemão para a Proteção de Dados sobre implantações de IA.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Executar RAG localmente cumpre automaticamente o GDPR?',
            a: 'Não. A hospedagem local resolve a pergunta sobre a transferência transfronteiriça e reduz a lista de operadores, mas os princípios do GDPR no artigo 5 (licitude, lealdade, transparência, limitação da finalidade, minimização de dados, exatidão, limitação do prazo de conservação, integridade e confidencialidade, responsabilização) continuam aplicáveis. O artigo 25 (proteção de dados desde a concepção e por padrão), o artigo 30 (registro de atividades de tratamento), o artigo 32 (segurança do tratamento) e o artigo 35 (DPIA) aplicam-se independentemente de onde o modelo é executado. O RAG local é um ponto de partida sólido, não uma postura de conformidade completa.',
          },
          {
            q: 'O que é necessário para a conformidade com o Regulamento de IA da UE em uma implantação de RAG local?',
            a: 'Classifique o caso de uso como risco limitado ou alto risco. A maioria das implantações de assistente de recuperação é de risco limitado e exige obrigações de transparência: os usuários devem saber que estão interagindo com uma IA, o conteúdo gerado deve ser identificável. No momento em que a recuperação alimenta uma decisão automatizada em um domínio enumerado (crédito, emprego, educação, serviços públicos, aplicação da lei, migração, justiça, biometria, infraestrutura crítica), a implantação é de alto risco e aplicam-se as obrigações completas: sistema de gestão de riscos, governança de dados, documentação técnica, registro automático de eventos, transparência, supervisão humana, precisão e robustez, avaliação de conformidade e vigilância pós-comercialização.',
          },
          {
            q: 'Preciso de um DPIA para o RAG local?',
            a: 'Um DPIA nos termos do artigo 35 é obrigatório para o tratamento que possa representar um alto risco para os direitos e liberdades dos titulares — o que inclui o tratamento em larga escala de dados de categorias especiais (saúde, dados jurídicos, biométricos, raciais, políticos, religiosos, sindicais) e a definição de perfis sistemática com efeitos jurídicos. A maioria do RAG local regulado (jurídico, médico, financeiro, investigações de RH) está no âmbito de aplicação. Execute o DPIA cedo, trate-o como o documento de design e ensaie as mitigações — especialmente o procedimento de exclusão — antes de entrar em produção.',
          },
          {
            q: 'Posso compartilhar uma implantação de RAG local entre departamentos?',
            a: 'Sim, com cuidado. O controle de acesso em nível de coleção, a autenticação por usuário contra um único provedor de identidade e uma base legal clara para o uso de cada departamento são o piso mínimo. O DPIA deve cobrir o conjunto mais amplo de finalidades de tratamento; se algum departamento precisar de uma base legal diferente (p. ex., investigações de RH sob interesse legítimo enquanto a equipe clínica opera sob tarefa pública), as coleções separadas e os grupos de acesso separados são mais fáceis de defender que uma única coleção com ACLs elaboradas.',
          },
          {
            q: 'Como audito quem acessou qual documento?',
            a: 'Registre cada recuperação com ID de usuário, carimbo de data/hora, IDs de chunks recuperados e os IDs de documentos dos quais vieram. Encaminhe os eventos a um repositório de logs separado com acesso de escrita restrito sob controle administrativo diferente do servidor de aplicação (separação de funções). Use armazenamento somente de adição com uma cadeia de hashes para que a adulteração seja detectável. A retenção deve alinhar-se à janela de investigação da autoridade supervisora e a qualquer norma setorial — seis a sete anos é frequente em indústrias reguladas.',
          },
          {
            q: 'Os modelos de embedding de código aberto são seguros para o GDPR?',
            a: 'Em princípio sim, com três condições. Primeiro, os pesos são baixados uma vez e fixados a um hash para poder demonstrar o que estava sendo executado. Segundo, a inferência é totalmente local sem telemetria nem chamadas de saída — verifique com uma captura de pacotes, não confie só na documentação. Terceiro, a ficha do modelo e a licença são revisadas para detectar cláusulas que conflitem com o uso empresarial confidencial (algumas licenças de pesos abertos anexam restrições sobre tipos de dados ou casos de uso). O padrão prático para implantações reguladas é colocar na lista permitida um pequeno número de embedders validados e revisá-los a cada atualização.',
          },
          {
            q: 'E quanto à rastreabilidade de dados para os resultados gerados por IA?',
            a: 'Cada resposta gerada deve referenciar os IDs de chunks que a produziram, o identificador do modelo, a versão do template de prompt e o carimbo de data/hora. Os chunks resolvem-se então a IDs de documentos, que resolvem-se a documentos de origem. Esta cadeia é o que permite verificar a resposta, defendê-la perante um questionamento, atender a uma solicitação de exclusão e reproduzir o resultado mais tarde. Sem ela, "a IA disse" é a defesa de auditoria — o que não é defesa alguma.',
          },
          {
            q: 'Posso usar RAG local para documentos confidenciais de clientes?',
            a: 'Muitas vezes sim, às vezes não. Muitos acordos com assessoria externa, NDAs de M&A e contratos de dados de pacientes permitem a revisão assistida por IA desde que os dados não saiam de um limite definido e certos controles sejam cumpridos. O RAG local cumpre o requisito de limite por construção; a lista de controles específica do contrato (criptografia, acesso, auditoria, retenção, notificação de violações) deve continuar sendo respeitada. Onde o contrato proíbe por completo o tratamento por IA, nenhum padrão de implantação resolve — a proibição se aplica quer a IA seja local ou remota.',
          },
          {
            q: 'Qual registro é necessário para a conformidade?',
            a: 'Eventos de ingestão (ID de documento, hash, origem, remetente, carimbo de data/hora, classificação), eventos de recuperação (ID de usuário, metadados de consulta ou hash, IDs de chunks recuperados, referência de resposta, identificador de modelo/embedder), eventos administrativos (promoção do modelo, troca de embedder, alteração de ACL, alteração de usuário/grupo) e eventos operacionais (backup, restauração, rotação de chaves). Todos os eventos encaminhados a um repositório de logs separado, somente de adição, com cadeia de hashes e retidos conforme seus requisitos de caso e setor.',
          },
          {
            q: 'Como gerencio as solicitações de direito ao esquecimento no RAG?',
            a: 'Com um procedimento documentado que percorra a exclusão através de cada camada: repositório de documentos de origem, índice vetorial, embeddings em cache, retenção do registro de recuperação (onde a base legal permitir a exclusão da entrada do log) e quaisquer respostas armazenadas no histórico de chat. A exclusão da origem é simples; a reconstrução do índice vetorial é bem compreendida; os embeddings em cache e o histórico de respostas são as partes que a maioria das implantações negligencia. Ensaie o procedimento com dados sintéticos, documente o ensaio e vincule o procedimento ao seu processo de resposta a incidentes para que uma solicitação real acione a sequência ensaiada e não a improvisação.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: o melhor RAG local](/pt/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — quais plataformas auto-hospedadas se adaptam a cada postura de conformidade, com notas sobre telemetria e licenças.',
          '[Agentes de IA locais para fluxos de trabalho empresariais e conformidade na UE](/pt/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — tema de conformidade adjacente quando a recuperação alimenta etapas de fluxo de trabalho automatizadas em vez de um leitor humano.',
          '[Automação local de e-mail e calendário com LLM](/pt/power-local-llm/local-llm-email-and-calendar-automation) — padrões de automação empresarial adjacentes onde se aplica o mesmo conjunto de controles.',
          '[RAG local nos seus PDFs passo a passo](/pt/power-local-llm/local-rag-on-your-pdfs-step-by-step) — guia de implementação prática para os padrões on-prem e de notebook.',
          '[Converse com 1.000 PDFs localmente](/pt/power-local-llm/chat-with-1000-pdfs-locally) — orientação operacional para corpora maiores que pressionam o teto do on-prem.',
          '[Hub de Power Local LLM](/pt/power-local-llm) — a biblioteca completa de guias para implantações de LLM auto-hospedadas.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RAG local para dados empresariais: IA em conformidade com o GDPR para documentos sensíveis (2026)',
      description: 'RAG local em conformidade com o GDPR para equipes jurídicas, médicas e financeiras. Arquitetura, registro de auditoria, escopo do DPIA e 3 padrões de implantação comparados.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-rag-for-private-business-data',
      inLanguage: 'pt',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    heroImage: '/images/local-rag-for-private-business-data-overview-hero-ar.png',
    title: '⁨RAG⁩ محلي للبيانات المؤسسية: حلول ذكاء اصطناعي متوافقة مع ⁨GDPR⁩ للمستندات الحساسة (⁨2026⁩)',
    seoTitle: '⁨RAG⁩ محلي متوافق مع ⁨GDPR⁩ للمستندات الحساسة (⁨2026⁩)',
    intro:
      'تواجه الفرق القانونية والطبية والمالية المشكلة نفسها: المستندات التي يحقق البحث فيها بالذكاء الاصطناعي أكبر قيمة هي بالضبط تلك التي لا يجوز أن تغادر المؤسسة. يجمع هذا المقال البنية المعمارية ومجموعة الضوابط ومصفوفة قرار أنماط النشر لنظام RAG ذاتي الاستضافة متوافق مع اللائحة العامة لحماية البيانات (GDPR) وقانون الذكاء الاصطناعي للاتحاد الأوروبي وقانون HIPAA وتوقعات Datenschutz الألمانية — مكتوب لمسؤول الامتثال الذي يحتاج إلى إرسال مستند واحد إلى فريق تقنية المعلومات لديه ليعرف الفريق ما الذي يجب بناؤه.',
    metaDescription:
      'RAG محلي متوافق مع GDPR للفرق القانونية والطبية والمالية: البنية المعمارية، وسجل التدقيق، ونطاق تقييم الأثر على حماية البيانات، وثلاثة أنماط نشر.',
    twitterDescription:
      'RAG محلي متوافق مع GDPR وقانون الذكاء الاصطناعي للاتحاد الأوروبي. العزل الشبكي، وسجلات التدقيق، وتتبّع نَسَب البيانات، ونطاق تقييم الأثر، وثلاثة أنماط نشر — المقال الذي يرسله مسؤولو الامتثال إلى تقنية المعلومات.',
    audience:
      'مسؤولو الامتثال في الاتحاد الأوروبي، ومسؤولو حماية البيانات (DPO)، والمستشارون القانونيون، ومهندسو تقنية المعلومات المسؤولون عن بناء أنظمة RAG ذاتية الاستضافة على المستندات السرية — العقود، وسجلات المرضى، وملفات التدقيق، وغرف بيانات عمليات الاندماج والاستحواذ، والمراسلات مع الجهات التنظيمية.',
    readTime: '15 دقيقة للقراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'RAG محلي متوافق مع GDPR',
    targetKeywords: [
      'rag متوافق مع gdpr',
      'rag محلي بيانات مؤسسية',
      'قانون الذكاء الاصطناعي الاتحاد الأوروبي rag',
      'rag خاص مستندات سرية',
      'نشر rag داخل المؤسسة',
      'datenschutz rag',
      'تقييم الأثر rag محلي',
    ],
    leadAnswerBlock:
      '**لا يصبح نشر RAG ذاتي الاستضافة متوافقًا مع GDPR وقانون الذكاء الاصطناعي للاتحاد الأوروبي إلا عندما تُدمج ستة ضوابط منذ اليوم الأول: استضافة بعزل شبكي أو بتحكم صارم في حركة الخروج، ومصادقة لكل مستخدم مع وصول إلى المستندات قائم على الأدوار، وسجلات تدقيق غير قابلة للتغيير تغطي الاستيعاب والاسترجاع، وتشفير من طرف إلى طرف أثناء السكون وأثناء النقل، وتتبّع حتمي لنَسَب المقطع وصولًا إلى المصدر، وإجراء حذف موثّق كتابيًا ينتشر من مخزن المصدر عبر فهرس المتجهات وأي تضمينات مخزّنة مؤقتًا. يحدد نمط النشر (حاسوب محمول لمستخدم واحد، خادم داخل المؤسسة، سحابة خاصة في الاتحاد الأوروبي) أيُّ الضوابط بسيط وأيُّها يتطلب عملًا — لا ما إذا كانت الضوابط إلزامية.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يتوافق RAG المحلي مع GDPR افتراضيًا، وأيَّ نمط نشر يجب أن تختاره الفرق الخاضعة للتنظيم؟',
        answer:
          'لا يتوافق RAG المحلي مع GDPR افتراضيًا. تشغيل نموذج داخل المؤسسة يحل مشكلة نقل البيانات عبر الحدود ويقلّص قائمة المعالِجين، لكن المواد 5 و25 و30 و32 و35 من GDPR تظل سارية: الأساس القانوني، وتقليل البيانات، وسجل التدقيق، وأمن المعالجة، وتقييم أثر على حماية البيانات لأي نظام يستوعب بيانات فئات خاصة على نطاق واسع. اختر نمط الحاسوب المحمول لمستخدم واحد للمهنيين الأفراد والمراجعات الفردية؛ وخادمًا داخل المؤسسة لقواعد المعرفة الإدارية حتى بضعة آلاف من المستندات و5–50 مستخدمًا؛ وسحابة خاصة في الاتحاد الأوروبي (سحابة سيادية، مفاتيح يديرها العميل، منطقة حصرية في الاتحاد الأوروبي) لعمليات النشر متعددة الكيانات حيث تكون المرونة متعددة المناطق أهم من العزل الشبكي الكامل. وأيًّا كان ما تختاره، فإن الضوابط الستة هي نفسها — تتغير فقط تكلفة التنفيذ.',
        bullets: [
          'الاستضافة المحلية تحل مسألة النقل عبر الحدود (المواد 44–49) وتقلّص قائمة المعالِجين — لكنها لا تحل بمفردها الأساس القانوني ولا تقييم الأثر ولا حقوق أصحاب البيانات.',
          'الحاسوب المحمول لمستخدم واحد — مثالي للمحامين والأطباء والمدققين الأفراد والمراجعات الفردية. يصعب تدقيقه على نطاق واسع؛ وهو أبسط أشكال العزل الشبكي.',
          'الخادم داخل المؤسسة — مثالي لعمليات النشر الإدارية من 5 إلى 50 مستخدمًا. سجلات تدقيق حقيقية، وتحكم قائم على الأدوار، ونسخ احتياطية وتعافٍ من الكوارث. جهد أكبر من تقنية المعلومات.',
          'السحابة الخاصة في الاتحاد الأوروبي — مثالية لعمليات النشر متعددة الكيانات التي تحتاج إلى المرونة. منطقة سيادية + مفاتيح يديرها العميل + بنود إلزامية بعدم تدريب الذكاء الاصطناعي على بيانات العميل.',
          'يُعد تقييم الأثر على حماية البيانات إلزاميًا بموجب المادة 35 عند استيعاب بيانات فئات خاصة على نطاق واسع، بصرف النظر عن نمط النشر.',
          'يجب أن تنتشر طلبات الحق في النسيان إلى مستندات المصدر وفهارس المتجهات والتضمينات المخزّنة مؤقتًا — صمّم إجراء الحذف قبل الإطلاق في الإنتاج، لا بعد تلقّي أول طلب.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'مقارنة أنماط النشر', anchor: '#deployment-comparison' },
      { label: 'اختيار نمط النشر', anchor: '#which-deployment' },
      { label: 'لماذا RAG محلي للبيانات الحساسة', anchor: '#why-local-rag' },
      { label: 'الضوابط الستة التي يحتاجها كل نشر', anchor: '#required-controls' },
      { label: 'العزل الشبكي والتحكم في الخروج', anchor: '#air-gap' },
      { label: 'سجل تدقيق يصمد أمام المراجعة', anchor: '#audit-logging' },
      { label: 'تتبّع نَسَب البيانات من المقطع إلى المصدر', anchor: '#data-lineage' },
      { label: 'التشفير والتحكم في الوصول', anchor: '#encryption-access' },
      { label: 'نمط الحاسوب المحمول لمستخدم واحد', anchor: '#laptop-pattern' },
      { label: 'نمط الخادم داخل المؤسسة', anchor: '#on-prem-pattern' },
      { label: 'خيارات قواعد بيانات المتجهات', anchor: '#vector-db-comparison' },
      { label: 'نمط السحابة الخاصة في الاتحاد الأوروبي', anchor: '#private-cloud-pattern' },
      { label: 'التصنيف بموجب قانون الذكاء الاصطناعي للاتحاد الأوروبي', anchor: '#eu-ai-act' },
      { label: 'متطلبات تقييم الأثر على حماية البيانات', anchor: '#dpia-requirements' },
      { label: 'ملاحظات خاصة بألمانيا (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'قائمة التحقق من الامتثال', anchor: '#compliance-checklist' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**الاستضافة المحلية ضرورية لكنها غير كافية.** تشغيل النموذج ومخزن المتجهات على أجهزتك يحل مشكلة نقل البيانات عبر الحدود ويقلّص قائمة المعالِجين، لكن المواد 5 و25 و30 و32 و35 من GDPR تظل سارية. لا يصبح الأساس القانوني وتقليل البيانات وسجل التدقيق وأمن المعالجة وتقييمات الأثر اختيارية لمجرد أن البيانات تبقى داخل المؤسسة.',
          '**ستة ضوابط غير قابلة للتفاوض** بصرف النظر عن نمط النشر: العزل الشبكي أو التحكم الصارم في الخروج، والمصادقة لكل مستخدم مع وصول قائم على الأدوار، وسجلات تدقيق غير قابلة للتغيير، والتشفير أثناء السكون والنقل، والتتبّع الحتمي للنَسَب من المقطع إلى مستند المصدر، وإجراء حذف موثّق كتابيًا يشمل فهرس المتجهات وأي تضمينات مخزّنة مؤقتًا.',
          '**ثلاثة أنماط نشر تغطي معظم حالات الاستخدام الخاضعة للتنظيم.** حاسوب محمول لمستخدم واحد للمهنيين الأفراد والمراجعات الفردية؛ وخادم داخل المؤسسة لقواعد المعرفة الإدارية من 5 إلى 50 مستخدمًا؛ وسحابة خاصة في الاتحاد الأوروبي (منطقة سيادية، مفاتيح يديرها العميل) لعمليات النشر متعددة الكيانات حيث تكون المرونة أهم من العزل الشبكي الكامل.',
          '**يصنّف قانون الذكاء الاصطناعي للاتحاد الأوروبي معظم أنظمة RAG المحلية كأنظمة محدودة المخاطر** — لكن في اللحظة التي يغذّي فيها الاسترجاع قرارًا آليًا (تقييم الجدارة الائتمانية، اختيار الموظفين، الأهلية للمزايا)، يصبح النشر عالي المخاطر ويُفعّل تقييم المطابقة الكامل والمراقبة بعد طرح المنتج والتزامات الإشراف البشري.',
          '**يُعد تقييم الأثر على حماية البيانات إلزاميًا بموجب المادة 35** لأي نظام RAG يستوعب بيانات فئات خاصة (صحية، قانونية، بيومترية، سياسية، نقابية) على نطاق واسع، أو أي نظام ينتج قرارات آلية ذات آثار قانونية. تخطّي تقييم الأثر يعني تخطّي الدفاع في التدقيق.',
          '**الحق في النسيان هو اختبار الحذف الذي تفشل فيه معظم عمليات النشر.** مستندات المصدر سهلة. ويمكن إعادة بناء فهارس المتجهات. أما التضمينات المخزّنة مؤقتًا وسجلات الاسترجاع والردود المخزّنة في سجل المحادثة فهي الأجزاء المُغفَلة — وهي ما ستسأل عنه الجهة التنظيمية.',
          '**نماذج التضمين مفتوحة المصدر آمنة من حيث المبدأ بالنسبة لـ GDPR**، لكن فقط إذا (أ) جرى تنزيل أوزان النموذج مرة واحدة وتثبيتها على بصمة تجزئة، و(ب) جرى تشغيل الاستدلال بالكامل على أجهزة محلية دون قياس عن بُعد، و(ج) جرت مراجعة بطاقة النموذج والترخيص لاكتشاف البنود التي تتعارض مع الاستخدام المؤسسي السري.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**6 ضوابط إلزامية** لأي نظام RAG خاضع للتنظيم: العزل الشبكي، والتحكم القائم على الأدوار، وسجلات التدقيق، والتشفير، وتتبّع نَسَب البيانات، وإجراء الحذف.',
          '**3 أنماط نشر:** حاسوب محمول لمستخدم واحد (المهنيون الأفراد)، خادم داخل المؤسسة (5–50 مستخدمًا)، سحابة خاصة في الاتحاد الأوروبي (متعددة الكيانات).',
          '**تقييم الأثر إلزامي** بموجب المادة 35 عند استيعاب بيانات فئات خاصة (صحية، قانونية، بيومترية) على نطاق واسع.',
          '**قانون الذكاء الاصطناعي للاتحاد الأوروبي:** معظم أنظمة RAG المحلية = مخاطر محدودة؛ تصبح عالية المخاطر عندما يغذّي الاسترجاع قرارات آلية (ائتمان، توظيف، مزايا).',
          '**الحق في النسيان** يجب أن ينتشر إلى مستندات المصدر وفهارس المتجهات والتضمينات المخزّنة مؤقتًا وسجل الردود.',
          '**المشاركة في القرار من مجلس العمل (Betriebsrat)** بموجب المادة §87 من قانون BetrVG مطلوبة لأي نظام RAG على محتوى من إنشاء الموظفين في ألمانيا.',
          '**نماذج التضمين مفتوحة المصدر** متوافقة مع GDPR فقط إذا كانت الأوزان مثبّتة والاستدلال محليًا بالكامل والترخيص قد جرت مراجعته.',
        ],
      },
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'مقارنة أنماط النشر',
        content:
          'يمكن جعل كل نمط متوافقًا مع GDPR؛ وما يتغير هو تكلفة الضوابط وأوضاع الفشل عندما يحدث خطأ ما. اختر أبسط نمط يناسب عدد المستخدمين وحساسية المستندات ومتطلب المرونة.',
        columns: ['الضابط', 'حاسوب محمول لمستخدم واحد', 'خادم داخل المؤسسة', 'سحابة خاصة في الاتحاد الأوروبي'],
        rows: [
          {
            'الضابط': 'العزل الشبكي (دون شبكة خروج)',
            'حاسوب محمول لمستخدم واحد': 'بسيط — تعطيل الشبكة',
            'خادم داخل المؤسسة': 'ممكن — شبكة افتراضية + جدار حماية',
            'سحابة خاصة في الاتحاد الأوروبي': 'صعب — قائمة خروج مسموح بها فقط',
          },
          {
            'الضابط': 'سجل التدقيق (من، وماذا، ومتى)',
            'حاسوب محمول لمستخدم واحد': 'يدوي — على مستوى نظام التشغيل فقط',
            'خادم داخل المؤسسة': 'متين — خط أنابيب سجلات مركزي',
            'سحابة خاصة في الاتحاد الأوروبي': 'متين — تسجيل أصلي في السحابة',
          },
          {
            'الضابط': 'تتبّع نَسَب البيانات (المقطع ← المصدر)',
            'حاسوب محمول لمستخدم واحد': 'ملفات محلية فقط',
            'خادم داخل المؤسسة': 'خط أنابيب قابل للتتبّع بالكامل',
            'سحابة خاصة في الاتحاد الأوروبي': 'كامل — لكنه يمتد عبر المناطق',
          },
          {
            'الضابط': 'إقامة البيانات في الاتحاد الأوروبي',
            'حاسوب محمول لمستخدم واحد': 'متأصّل — الموقع المادي',
            'خادم داخل المؤسسة': 'متأصّل — الموقع المادي',
            'سحابة خاصة في الاتحاد الأوروبي': 'مُهيَّأ — منطقة سيادية مطلوبة',
          },
          {
            'الضابط': 'التحكم القائم على الأدوار لكل مستخدم',
            'حاسوب محمول لمستخدم واحد': 'مستخدم واحد — لا ينطبق',
            'خادم داخل المؤسسة': 'موفّر هوية + مجموعات',
            'سحابة خاصة في الاتحاد الأوروبي': 'إدارة هوية + دخول موحّد + قوائم تحكم لكل مجموعة',
          },
          {
            'الضابط': 'النسخ الاحتياطي والتعافي من الكوارث',
            'حاسوب محمول لمستخدم واحد': 'قرص خارجي مشفّر',
            'خادم داخل المؤسسة': 'شريط أو نسخ احتياطي خارجي',
            'سحابة خاصة في الاتحاد الأوروبي': 'تكرار عبر مناطق التوافر المتعددة',
          },
          {
            'الضابط': 'التكلفة الأولية',
            'حاسوب محمول لمستخدم واحد': 'الأجهزة فقط — منخفضة',
            'خادم داخل المؤسسة': 'خادم + تكامل — متوسطة',
            'سحابة خاصة في الاتحاد الأوروبي': 'اشتراك + إعداد — متوسطة',
          },
          {
            'الضابط': 'التكلفة المستمرة',
            'حاسوب محمول لمستخدم واحد': 'لا شيء — وقت مسؤول النظام',
            'خادم داخل المؤسسة': 'عمليات تقنية المعلومات + كهرباء + تبريد',
            'سحابة خاصة في الاتحاد الأوروبي': 'رسوم شهرية متكررة',
          },
          {
            'الضابط': 'مثالي لـ',
            'حاسوب محمول لمستخدم واحد': 'المهنيون الأفراد، المراجعات الفردية',
            'خادم داخل المؤسسة': '5–50 مستخدمًا، قواعد معرفة إدارية',
            'سحابة خاصة في الاتحاد الأوروبي': 'متعددة الكيانات، عمليات نشر مرنة',
          },
        ],
      },
      whichOne: {
        id: 'which-deployment',
        title: 'اختيار نمط النشر',
        content:
          '**يعتمد الاختيار الصحيح على عدد المستخدمين وحساسية المستندات وضغط التدقيق وقدرة تقنية المعلومات الداخلية.** يغطي اختصار القرار هذا معظم المواقف الواقعية.',
        columns: ['وضعك', 'اختر'],
        rows: [
          {
            'وضعك': 'محامٍ أو طبيب أو مدقق فردي يراجع قضية واحدة في كل مرة',
            'اختر': 'حاسوب محمول لمستخدم واحد',
          },
          {
            'وضعك': 'غرفة بيانات اندماج واستحواذ بها 3–5 مراجعين مُعيَّنين وموعد إغلاق محدد',
            'اختر': 'حاسوب محمول لمستخدم واحد أو داخل المؤسسة (حسب حجم المستندات)',
          },
          {
            'وضعك': 'فريق امتثال من 10–30 شخصًا يتشارك أرشيف مراسلات مع الجهات التنظيمية',
            'اختر': 'خادم داخل المؤسسة',
          },
          {
            'وضعك': 'قسم مستشفى يبني مساعد بروتوكولات سريرية لـ 50 موظفًا',
            'اختر': 'خادم داخل المؤسسة',
          },
          {
            'وضعك': 'مجموعة متعددة الكيانات تحتاج إلى RAG مشترك بين فروع في عدة دول بالاتحاد الأوروبي',
            'اختر': 'سحابة خاصة في الاتحاد الأوروبي (منطقة سيادية + مفاتيح يديرها العميل)',
          },
          {
            'وضعك': 'شركة تأمين بمتطلب توافر على مدار الساعة وخطة تعافٍ من الكوارث',
            'اختر': 'سحابة خاصة في الاتحاد الأوروبي',
          },
          {
            'وضعك': 'جهة عامة ذات بيانات مصنّفة أو مقيّدة',
            'اختر': 'داخل المؤسسة بعزل شبكي فقط — السحابة خارج النطاق',
          },
          {
            'وضعك': 'الدفاع في تدقيق أمام جهة تنظيمية في أقل من 6 أسابيع',
            'اختر': 'خادم داخل المؤسسة (الأسرع لإثبات التحكم)',
          },
        ],
      },
      whyLocalRag: {
        id: 'why-local-rag',
        title: 'لماذا RAG محلي للبيانات الحساسة',
        content:
          '**الحجة لصالح RAG المحلي مقابل LLM كخدمة سحابية ليست أيديولوجيا — بل هي الشكل الذي يتخذه تقييم مخاطر GDPR.** RAG السحابي قابل للتطبيق في كثير من حالات الاستخدام؛ لكنه بالنسبة للبيانات المؤسسية الحساسة يضيف خمسة مخاطر يلغيها RAG المحلي بحكم تصميمه.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يُبقي RAG المحلي مستنداتك الحساسة على أجهزتك مع تزويد فريقك ببحث معزّز بالذكاء الاصطناعي — لا تغادر أي بيانات المبنى، ولا يلمسها أي معالِج خارجي، ولا ينشأ أي سؤال حول النقل عبر الحدود.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل أن فريقك القانوني يستطيع البحث في 10٬000 ملف عبر طرح أسئلة بلغة طبيعية — لكن المستندات لا تغادر غرفة الخوادم أبدًا. هذا هو RAG المحلي: يقرأ الذكاء الاصطناعي مستنداتك على أجهزتك، ويجيب عن أسئلتك على أجهزتك، ولا يُرسَل أي شيء إلى أي مكان. ميزة الامتثال ليست خاصية — إنها البنية المعمارية نفسها.',
          },
        ],
        items: [
          '**النقل عبر الحدود (المواد 44–49).** يتطلب إرسال بيانات شخصية إلى معالِج خارج الاتحاد الأوروبي بنودًا تعاقدية معيارية، وتقييم أثر للنقل، وإجابة موثوقة عمّا إذا كانت السلطة القضائية المتلقّية تملك صلاحيات استدعاء تطال تلك البيانات. RAG المحلي لا ينقل بيانات — فلا ينشأ السؤال.',
          '**تكاثر المعالِجين الفرعيين (المادة 28).** غالبًا ما يعتمد مزودو LLM السحابيون على بنية تحتية للحوسبة فائقة النطاق، وخدمات لتنقية المحتوى، ومزودي رصد. كل منهم معالِج فرعي يجب إدراجه والتعاقد معه وتدقيقه. RAG المحلي ليس به أي معالِج فرعي افتراضيًا.',
          '**تسرّب بيانات التدريب.** تحتفظ كثير من شروط LLM السحابية بحق استخدام مطالبات العملاء لتحسين النموذج، ما لم يُستخدم مستوى مؤسسي مدفوع ويُتحقق من بند عدم التدريب. RAG المحلي يشغّل نماذج بأوزان تتحكم فيها أنت؛ ولا يغادر شيء المضيف.',
          '**بنود السرية في عقود العملاء.** كثيرًا ما تحظر اتفاقيات المستشار الخارجي، واتفاقيات عدم الإفصاح في عمليات الاندماج والاستحواذ، واتفاقيات بيانات المرضى نقلَ المواد المحمية إلى معالِجين خارجيين. RAG المحلي يتجاوز البند بالكامل.',
          '**التعرّض لأوامر الاستدعاء القضائية والإجراءات القانونية.** يمكن طلب المستندات المخزّنة لدى مزود سحابي عبر إجراء قانوني موجّه إلى المزود، مع التزامات إفصاح قد لا يُخطَر بها المتحكم في الوقت المناسب أصلًا. أما المستندات التي لا تغادر مقرّك أبدًا فلا يمكن طلبها إلا منك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RAG المحلي ليس الإجابة الصحيحة لكل عبء عمل. البحث في المعلومات العامة، وصياغة مسودات تسويقية، والمساعدة في كتابة التعليمات البرمجية في مستودعات مفتوحة المصدر — كل ذلك يعمل عادةً بشكل أفضل مع LLM السحابي لأن التعرّض لـ GDPR منخفض وفجوة جودة النموذج مهمة. حجة هذا المقال موجّهة تحديدًا إلى البيانات المؤسسية السرية: القانونية والطبية والمالية وبيانات الموارد البشرية والمراسلات مع الجهات التنظيمية والأسرار التجارية.',
          },
        ],
      },
      requiredControls: {
        id: 'required-controls',
        title: 'الضوابط الستة التي يحتاجها كل نشر',
        content:
          '**هذه الضوابط الستة هي الحد الأدنى.** يحتاج كل نشر خاضع للتنظيم إلى الستة جميعًا؛ ونمط النشر يغيّر فقط كيفية تنفيذها. إغفال أي منها هو السبب الأكثر شيوعًا لفشل عمليات التدقيق.',
        numberedItems: [
          {
            title: 'العزل الشبكي أو التحكم الصارم في الخروج',
            whyItMatters:
              'تأكّد من أن المستندات والتضمينات لا يمكن أن تتسرّب عبر مكالمات خارجة — حِزَم قياس عن بُعد، أو فحوص تحديث النموذج، أو مُبلِّغو الأعطال، أو ردود نداء تنقية المحتوى، أو شبكات توصيل محتوى خارجية للخطوط. إما أن تعطّل الوصول إلى الشبكة بالكامل (عزل شبكي حقيقي) أو تشغّل قائمة خروج مسموح بها تصرّح فقط لخوادم تحديث موقّعة.',
          },
          {
            title: 'المصادقة لكل مستخدم مع وصول قائم على الأدوار',
            whyItMatters:
              'يجب أن تكون قادرًا على الإجابة عن "من وصل إلى أي مستند" قبل أن تسأل جهة تنظيمية. تسجيل دخول موحّد مقابل موفّر هوية، ووصول حسب المجموعات إلى المجموعات، وقوائم تحكم في الوصول لكل مستند حيث تتطلب القضية ذلك. الحسابات المشتركة ليست ضابطًا — بل هي فشل تدقيق ينتظر الحدوث.',
          },
          {
            title: 'سجلات تدقيق غير قابلة للتغيير تغطي الاستيعاب والاسترجاع',
            whyItMatters:
              'لكل مستند: من رفعه، ومتى، ومسار المصدر، وبصمة التجزئة. ولكل استعلام: من سأل، وما المطروح (إذا سمح التسجيل)، وأي المقاطع جرى استرجاعها، ومن أي معرّفات مستندات أتت، وأي رد أُعيد. يجب أن تكون السجلات مقاوِمة للعبث — للإضافة فقط، وموقّعة، وبمدة احتفاظ كافية لتغطية نافذة تحقيق السلطة الإشرافية. للاطلاع على مسار التدقيق على مستوى المطالبة — التحكم في الإصدارات وسجلات التغيير والتراجعات — راجع [سير عمل التحكم في إصدارات المطالبات](https://www.promptquorum.com/ar/prompt-engineering/prompt-version-control-workflows).',
          },
          {
            title: 'التشفير أثناء السكون وأثناء النقل',
            whyItMatters:
              'تشفير القرص بالكامل على المضيف، وبروتوكول TLS لأي مكالمة داخلية بين الخدمات، وإدارة مفاتيح تصمد أمام سرقة حاسوب محمول أو اختراق حساب مسؤول. مفاتيح يديرها العميل لعمليات النشر السحابية. بدون هذه التدابير، تتحول سرقة جهاز إلى خرق بيانات يستوجب الإخطار بموجب المادة 33.',
          },
          {
            title: 'تتبّع حتمي لنَسَب البيانات من المقطع إلى المصدر',
            whyItMatters:
              'يجب تتبّع كل مقطع مُسترجَع وصولًا إلى مستند مصدره وصفحته وقسمه وإصداره. هذا ما يتيح (أ) التحقق من الرد، و(ب) تلبية طلب حذف، و(ج) الدفاع عن النظام أمام محكمة عند الطعن في ملخص مُولَّد. عبارة "لا يمكننا إعادة إنتاج أي مقطع تسبّب في أي رد" ليست إجابة مقبولة لدى سلطة إشرافية.',
          },
          {
            title: 'إجراء حذف موثّق كتابيًا يشمل فهرس المتجهات والتضمينات المخزّنة مؤقتًا',
            whyItMatters:
              'يجب أن ينتشر طلب الحق في النسيان من مخزن المصدر، عبر فهرس المتجهات، إلى أي تضمينات مخزّنة مؤقتًا، وعبر مدة الاحتفاظ بسجلات الاسترجاع. تتعامل معظم عمليات النشر مع حذف المصدر بشكل صحيح وتنسى الباقي. وثّق إجراء الحذف قبل الإطلاق في الإنتاج؛ ومارِسه ببيانات اصطناعية.',
          },
        ],
      },
      airGap: {
        id: 'air-gap',
        title: 'العزل الشبكي والتحكم في الخروج',
        content:
          '**العزل الشبكي يعني أن المضيف ليس لديه مسار شبكة خروج؛ والتحكم في الخروج يعني أن لديه مسارًا مسموحًا به بصرامة.** كلاهما مقبول؛ اختر النموذج الأكثر متانة الذي تستطيع عملياتك دعمه.',
        items: [
          '**العزل الشبكي الحقيقي** — دون بروتوكول DHCP، ودون تحليل DNS لوجهات عامة، ودون TCP خارج. تُجرى التحديثات عبر وسائط موقّعة يوصّلها مسؤول ماديًا. هذا هو النموذج الصحيح للعمل المصنّف، وبعض شبكات المستشفيات، وأي نشر يشمل نموذج تهديداته اعتمادًا خبيثًا.',
          '**قائمة خروج مسموح بها** — يُسمح بشبكة الخروج فقط إلى قائمة صغيرة من الوجهات المسمّاة (خوادم تحديث النموذج، وموفّر هويتك، ومُحوِّلات السجلات إلى مجمّعات داخلية). تُسقَط بقية الحركة عند جدار الحماية. هذا هو الإعداد الافتراضي العملي لمعظم عمليات النشر الإدارية الخاضعة للتنظيم.',
          '**ما الذي تبحث عنه في المنصة**: انعدام القياس عن بُعد افتراضيًا، ولا مكالمات خروج أثناء الاستدلال، ولا شبكة توصيل خطوط في واجهة المستخدم، ولا مُبلِّغو أعطال يرسلون حمولات. تحقّق بالتقاط حِزَم أو بأداة مثل Little Snitch على منصة الاختبار قبل الانتقال إلى الإنتاج.',
          '**حوكمة التحديثات** — تمرّ أوزان النموذج، وأوزان المُضمِّن، وكود التطبيق، وتصحيحات نظام التشغيل جميعها عبر نافذة تحديث محكومة. يوقّع المسؤول الذي يرقّي تحديثًا عليه كتابيًا؛ ويُسجَّل التغيير.',
          '**خرق شائع للعزل الشبكي:** حِزمة تحليلات مضمّنة مع مكوّن واجهة من طرف ثالث، أو إشارة إلى شبكة توصيل خطوط في هيكل التطبيق، أو فحص "التحقق من التحديثات" يعمل عند بدء التشغيل. لهذا تهمّ خطوة التحقق — لا تفترض شيئًا عن الإعدادات الافتراضية.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أجرِ التقاط حِزَم لمدة 24 ساعة على المضيف والتطبيق مفتوح وفي وضع الخمول. أي حركة خروج ليست في القائمة المسموح بها هي اكتشاف يستوجب التحقيق. كرّر ذلك في كل مرة يُحدَّث فيها التطبيق — كثيرًا ما تقلّل ملاحظات الإصدار من شأن المكالمات الخارجة الجديدة التي أُضيفت.',
          },
        ],
      },
      auditLogging: {
        id: 'audit-logging',
        title: 'سجل تدقيق يصمد أمام المراجعة',
        content:
          '**سجل التدقيق هو الأثر الذي ستقرؤه السلطة الإشرافية أولًا.** يجب أن يجيب عن سؤالين لكل عملية استرجاع: من سأل وما الذي قدّمه له النظام. بدون ذلك تجادل بالكلمات؛ ومع تسجيل سليم تقدّم إيصالات.',
        items: [
          '**أحداث الاستيعاب**: معرّف المستند، وبصمة التجزئة (SHA-256)، واسم الملف، ومسار المصدر، ومن رفعه، والطابع الزمني، وعلامة التصنيف، والحجم، وعدد الصفحات، والمجموعة المالكة، وفئة الاحتفاظ. صنّف كل مستند عند الاستيعاب — التصنيف الرجعي لكتل النصوص الكبيرة صعب ونادرًا ما يكون مكتملًا.',
          '**أحداث الاسترجاع**: معرّف الاستعلام، ومعرّف المستخدم، والطابع الزمني، ومعرّفات المقاطع المُسترجَعة (ومعرّفات المستندات التي أتت منها)، ودرجات الاسترجاع، وبصمة تجزئة الرد النهائي، ومعرّف النموذج، ومعرّف المُضمِّن، وقيمة top-K المستخدمة. نص الاستعلام نفسه حساس — سجّله فقط إذا كان أساسك القانوني للمعالجة يغطيه؛ وإلا فسجّل بصمة التجزئة والطابع الزمني.',
          '**الأحداث الإدارية**: ترقية النموذج، وتغيير المُضمِّن، وإعادة بناء الفهرس، وتغييرات المستخدم/المجموعة، وتغييرات قوائم التحكم في الوصول، وتغييرات سياسة الوصول. كل حدث موقّع من المسؤول المعني.',
          '**مقاومة العبث**: سجل للإضافة فقط، وسلسلة بصمات تجزئة (كل إدخال يشير إلى بصمة الإدخال السابق)، ومفتاح توقيع خارج النطاق، ومطابقة دورية مع نسخة منفصلة يحتفظ بها مسؤول مختلف أو على وسيط يُكتب مرة واحدة.',
          '**الاحتفاظ**: يتوافق مع نافذة تحقيق السلطة الإشرافية — كحد أدنى مدة الاحتفاظ بالقضية؛ وعادةً ست إلى سبع سنوات للصناعات الخاضعة للتنظيم؛ وأكثر حيث تنطبق قواعد قطاعية.',
          '**خط الأنابيب**: يُصدِر التطبيق أحداثًا منظَّمة؛ ويرسلها مُحوِّل إلى مخزن سجلات منفصل بوصول كتابة مقيَّد. يجب ألا يملك خادم التطبيق أبدًا صلاحية حذف إدخالات السجل أو إعادة كتابتها — فصل الواجبات هو ما يجعل السجل موثوقًا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تسجيل نص الاستعلام يطرح سؤاله الخاص حول GDPR — فالاستعلام نفسه قد يحتوي على بيانات شخصية (مثل "لخّص السجل الطبي للمريض س"). قرّر عند التصميم ما إذا كان أساسك القانوني للمعالجة يغطي تسجيل الاستعلامات، وإن لم يكن كذلك، فسجّل فقط البيانات الوصفية اللازمة للتدقيق والتشخيص التشغيلي.',
          },
        ],
      },
      dataLineage: {
        id: 'data-lineage',
        title: 'تتبّع نَسَب البيانات من المقطع إلى المصدر',
        content:
          '**تتبّع النَسَب هو العمود الفقري لكل الضوابط الأخرى.** بدونه تفشل طلبات الحذف، ويستحيل التحقق من الردود، وينهار مسار التدقيق. ادمج تتبّع النَسَب منذ أول عملية استيعاب، لا بعد ذلك.',
        items: [
          '**التتبّع على مستوى المستند**: لكل مستند معرّف داخلي ثابت، وبصمة تجزئة للمحتوى، وطابع زمني للاستيعاب، ومالك، وتصنيف، وفئة احتفاظ. يبقى الملف الأصلي في مخزن المصدر؛ ويحتفظ نظام RAG بإشارة مرجعية، لا بالأصل.',
          '**التتبّع على مستوى المقطع**: يشير كل مقطع إلى معرّف المستند الأب، والصفحة (لملفات PDF)، والقسم (للمستندات المنظَّمة)، وإزاحة الأحرف، والطول، وإصدار استراتيجية التقطيع. عند إعادة التقطيع (وستفعل)، تُوسَم المقاطع القديمة بأنها متقادمة، لا تُحذف في مكانها — كي تظل سجلات الاسترجاع القديمة قابلة للحل.',
          '**التتبّع على مستوى التضمين**: يشير كل متجه تضمين إلى معرّف مقطعه ومعرّف المُضمِّن. عند تغيير المُضمِّن، تُحفظ المتجهات القديمة حتى يُتحقق من الجديدة وتُغلق أي قضية تشير إليها؛ وعندها فقط تُمحى.',
          '**التتبّع على مستوى الرد**: يشير كل رد مُولَّد إلى معرّفات المقاطع التي أنتجته، ومعرّف النموذج، وإصدار قالب المطالبة، والطابع الزمني. عندما يسأل مستخدم "من أين جاء هذا الرد؟"، يحل النظام المقطع ← المستند ← الصفحة بنقرة واحدة.',
          '**إعادة الفهرسة دون كسر تتبّع النَسَب**: تحافظ عمليات إعادة البناء على معرّفات المستندات وتزيد إصدارات استراتيجية التقطيع. تظل معرّفات المقاطع القديمة قابلة للحل في سجلات الاسترجاع حتى بعد تقدّم الفهرس النشط.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'اختبر سلسلة النَسَب فصليًا. اختر عملية استرجاع عشوائية من سجل التدقيق وتتبّعها عكسيًا: معرّف المقطع ← معرّف المستند ← الملف الأصلي في مخزن المصدر ← فئة الاحتفاظ. إذا كانت أي خطوة مكسورة، فأصلِح المخطط قبل الفحص الإشرافي التالي — لا أثناءه.',
          },
        ],
      },
      encryptionAccess: {
        id: 'encryption-access',
        title: 'التشفير والتحكم في الوصول',
        content:
          '**تشفير أثناء السكون، وتشفير أثناء النقل، وتحكم في الوصول يرتبط بموفّر هويتك الحالي.** هذه ضوابط مفهومة جيدًا؛ ووضع الفشل هو نسيان إحدى الطبقات الثلاث، لا سوء تنفيذ الطبقة المختارة.',
        items: [
          '**التشفير أثناء السكون** — تشفير القرص بالكامل على المضيف (LUKS على لينكس، وBitLocker على ويندوز، وFileVault على macOS للأجهزة المحمولة). للخوادم، شفّر أيضًا الأقسام التي تستضيف مخزن المتجهات ومرحلة الاستيعاب. مفاتيح يديرها العميل لأي نشر سحابي، مع تدوير المفاتيح وفق سياستك.',
          '**التشفير أثناء النقل** — بروتوكول TLS لأي قفزة بين الخدمات، حتى على المضيف المحلي. سياسة تشفير متوافقة مع خط أساسك القطاعي. TLS متبادل حيث يبرر نموذج التهديدات ذلك — عادةً من خادم إلى خادم في عمليات النشر السحابية.',
          '**المصادقة** — تسجيل دخول موحّد مقابل موفّر هويتك الحالي (OIDC، SAML). دون حسابات محلية في الإنتاج. مصادقة متعددة العوامل إلزامية لأي مستخدم بوصول إداري أو إلى مجموعات حساسة.',
          '**التفويض** — وصول قائم على المجموعات على مستوى المجموعة؛ وقوائم تحكم في الوصول على مستوى المستند حيث تتطلب القضية ذلك (مثل غرف بيانات الاندماج والاستحواذ، وتحقيقات التوظيف). يجب أن يطبّق خط أنابيب الاسترجاع قوائم التحكم وقت الاستعلام — لا واجهة المستخدم وحدها. المستخدم الذي لا يستطيع رؤية مستند يجب ألا يتلقى مقاطعه في الرد أيضًا.',
          '**الوصول الإداري** — إدارة الوصول المميّز لأي حساب يستطيع قراءة الفهارس أو إعادة بنائها، أو الاطلاع على سجلات التدقيق، أو تغيير قوائم التحكم. الرفع في الوقت المناسب مع تبرير مسجّل يتفوق على حقوق الإدارة الدائمة.',
          '**أمن النقاط الطرفية** — أجهزة مُدارة لعمليات النشر القائمة على الحواسيب المحمولة (مسجّلة في إدارة الأجهزة المحمولة، ومشفّرة، وبسياسة قفل شاشة مطبَّقة). حاسوب محمول لمهني فردي بمخزن مستندات مفكوك التشفير ومتروك دون مراقبة في مقهى هو خرق GDPR الذي لا تريد الإبلاغ عنه.',
        ],
      },
      laptopDeep: {
        id: 'laptop-pattern',
        title: 'نمط الحاسوب المحمول لمستخدم واحد',
        content:
          '**الحاسوب المحمول لمستخدم واحد هو أسهل نمط لجعله معزولًا شبكيًا وأصعب نمط لتوسيع نطاقه.** مناسب للمهنيين الأفراد والمراجعات الفردية؛ وغير مناسب لأي شيء يجب أن يصمد بعد مستخدم واحد أو بعد مغادرته.',
        items: [
          '**الأجهزة** — حاسوب محمول من فئة محطات العمل بتشفير قرص كامل، وبطاقة رسوميات منفصلة (أو جهاز حديث بذاكرة موحّدة)، و32 غيغابايت على الأقل من ذاكرة الوصول العشوائي. يجب أن يتسع النموذج والمُضمِّن في الذاكرة إلى جانب ذاكرة التخزين المؤقت لمخزن المتجهات. للاطلاع على متطلبات الأجهزة واختيار النماذج حسب ذاكرة الرسوميات، راجع [دليل الأجهزة لنماذج LLM المحلية](https://www.promptquorum.com/ar/local-llms/local-llm-hardware-guide-2026).',
          '**البرمجيات** — تطبيق RAG مكتبي مكتفٍ ذاتيًا يعمل محليًا؛ ونموذج LLM مفتوح المصدر بأوزان مُنزّلة مرة واحدة ومثبّتة على بصمة تجزئة؛ ومُضمِّن مفتوح المصدر؛ ومخزن متجهات محلي على القرص المشفّر. لمقارنة النماذج مفتوحة المصدر المناسبة لـ RAG المحلي، راجع [أفضل النماذج مفتوحة المصدر لـ Ollama](https://www.promptquorum.com/ar/local-llms/top-open-source-models-ollama).',
          '**وضع الشبكة** — معزول شبكيًا أثناء العمل؛ ويُعاد توصيله فقط لتحديثات موقّعة صريحة. اضبط جدار حماية نظام التشغيل على إسقاط جميع اتصالات الخروج افتراضيًا وأنشئ استثناءات صريحة لتدفق التحديث.',
          '**التعامل مع المستندات** — مستندات المصدر على القرص المشفّر؛ وبنية مجلدات لكل قضية؛ ونسخ احتياطية أسبوعية مشفّرة على قرص خارجي مخزّن في مكان مختلف.',
          '**وضع التدقيق** — سجل التدقيق على مستوى نظام التشغيل (تسجيل الدخول، والوصول إلى الملفات، وأحداث الأجهزة الطرفية) هو الحد الأدنى. الأحداث على مستوى التطبيق أبسط مع نمط الخادم داخل المؤسسة؛ أما لنمط الحاسوب المحمول، فعامِل سجل نظام التشغيل بوصفه السجل الأساسي وأكمِله بملاحظات يدوية لكل قضية.',
          '**القيود** — الحاسوب المحمول لمستخدم واحد ليس منصة متعددة المستخدمين. مشاركة الحاسوب، أو مشاركة الحسابات، أو نسخ مخزن المستندات إلى حاسوب زميل يكسر وضع التدقيق وتقييم الأساس القانوني.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'بالنسبة للمهنيين الأفراد الذين يعملون على قضايا سرية، يُعد نمط الحاسوب المحمول لمستخدم واحد بحق أمتن وضع خصوصية متاح — أفضل من أي سحابة وأمتن من كثير من عمليات النشر داخل المؤسسة. والمقايضة تشغيلية: عندما يتعطل الحاسوب، ترث القضية زمن التعافي من انضباط نسخك الاحتياطي.',
          },
        ],
      },
      onPremDeep: {
        id: 'on-prem-pattern',
        title: 'نمط الخادم داخل المؤسسة',
        content:
          '**الخادم داخل المؤسسة هو نمط العمل المعتاد لـ RAG الإداري الخاضع للتنظيم.** يتوسع إلى 5–50 مستخدمًا وبضعة آلاف من المستندات، ويدعم سجلات تدقيق سليمة، ويبقى داخل محيطك المادي. والتكلفة هي عمل حقيقي في عمليات تقنية المعلومات.',
        items: [
          '**الأجهزة** — خادم بوحدة أو وحدتي معالجة رسوميات من فئة المؤسسات (وحدات فئة محطات العمل مقبولة للكتل الأصغر)، وأقراص متكررة، وذاكرة ECC، ومزود طاقة غير منقطع. خطّط لتخزين يعادل 2–4 أضعاف حجم كتلة مستنداتك الخام لتغطية المتجهات والفهارس والسجلات والنسخ الاحتياطية.',
          '**الشبكة** — شبكة افتراضية مخصّصة خلف جدار حماية الشركة؛ وقائمة خروج مسموح بها أو عزل شبكي كامل حسب نموذج التهديدات. وصول داخلي عبر شبكة الشركة فقط، دون دخول عام.',
          '**حزمة البرمجيات** — منصة RAG ذاتية الاستضافة (صورة خادم مستقلة أو نشر في حاويات)، ونموذج LLM مفتوح المصدر كنموذج محادثة، ومُضمِّن مفتوح المصدر، ومخزن متجهات مناسب لحجم الكتلة. يعمل خادم التطبيق ومخزن المتجهات ومُحوِّل السجلات كعمليات منفصلة بحسابات خدمة منفصلة.',
          '**الهوية** — متّحدة مع موفّر هوية الشركة؛ وتتحكم عضوية المجموعات في الوصول إلى المجموعات. تتطلب المجموعات الحساسة تدفقات موافقة إضافية.',
          '**النسخ الاحتياطي والتعافي من الكوارث** — نسخ احتياطية تزايدية ليلية لمخزن المستندات وفهرس المتجهات؛ ونسخ احتياطية كاملة أسبوعية؛ ونسخة خارجية تحتفظ بها تقنية المعلومات. إجراء استعادة موثّق ومُختبَر سنويًا على الأقل.',
          '**العمليات** — نافذة ترقيع وفق سياسة إدارة التغيير؛ ومراجعات وصول فصلية؛ وإجراء حذف لطلبات الحق في النسيان مُجرَّب؛ ومسار موثّق لتحديث النموذج والمُضمِّن يحافظ على تتبّع النَسَب.',
          '**تخطيط السعة** — تتسع بضعة آلاف من المستندات و5–50 مستخدمًا متزامنًا بأريحية في خادم رسوميات متوسط الفئة. وبعد ذلك، خطّط لمضيف أقوى أو للانتقال إلى نمط السحابة الخاصة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RAG داخل المؤسسة هو النمط الذي يفشل غالبًا لأسباب غير تقنية: نسخة احتياطية لم تُستعَد قط، أو حساب مسؤول مشترك بين موظفي تقنية المعلومات، أو مزود طاقة غير منقطع لم يختبره أحد، أو مُحوِّل سجلات ظل يُسقِط الأحداث بصمت لمدة شهرين. الضوابط التقنية أسهل من النظافة التشغيلية.',
          },
        ],
      },
      vectorDbComparison: {
        id: 'vector-db-comparison',
        title: 'خيارات قواعد بيانات المتجهات لـ RAG داخل المؤسسة',
        content:
          '**نادرًا ما يحدد اختيار مخزن المتجهات الامتثال — لكنه يشكّل التكلفة التشغيلية وسقف التوسّع ومدى نظافة تنفيذ إجراء الحذف.** تختار معظم عمليات النشر الخاضعة للتنظيم أحد هذه الخيارات الستة.',
        columns: ['قاعدة بيانات المتجهات', 'النوع', 'الاستضافة الذاتية في الاتحاد الأوروبي', 'أفضل نمط RAG'],
        rows: [
          {
            'قاعدة بيانات المتجهات': '**Chroma**',
            'النوع': 'مفتوح المصدر، خفيف',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'حاسوب محمول + داخل المؤسسة صغير',
          },
          {
            'قاعدة بيانات المتجهات': '**Qdrant**',
            'النوع': 'مفتوح المصدر، عالي الأداء',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'خادم داخل المؤسسة، تصفية مكثّفة',
          },
          {
            'قاعدة بيانات المتجهات': '**Weaviate**',
            'النوع': 'مفتوح المصدر، شامل',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'داخل المؤسسة + بحث هجين',
          },
          {
            'قاعدة بيانات المتجهات': '**Milvus**',
            'النوع': 'مفتوح المصدر، مؤسسي',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'داخل المؤسسة على نطاق واسع',
          },
          {
            'قاعدة بيانات المتجهات': '**pgvector**',
            'النوع': 'امتداد لـ PostgreSQL',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '✅',
            'أفضل نمط RAG': 'الفرق التي تستخدم Postgres بالفعل',
          },
          {
            'قاعدة بيانات المتجهات': '**Pinecone**',
            'النوع': 'SaaS مُدار',
            'الاستضافة الذاتية في الاتحاد الأوروبي': '⚠️ مُستضاف في الولايات المتحدة',
            'أفضل نمط RAG': 'سحابة خاصة في الاتحاد الأوروبي فقط (مع تحفظات)',
          },
        ],
      },
      euCloudDeep: {
        id: 'private-cloud-pattern',
        title: 'نمط السحابة الخاصة في الاتحاد الأوروبي',
        content:
          '**يستخدم نمط السحابة الخاصة في الاتحاد الأوروبي مزود سحابة في منطقة سيادية بمفاتيح يديرها العميل، وإقامة بيانات حصرية في الاتحاد الأوروبي، وبند تعاقدي بعدم تدريب الذكاء الاصطناعي يغطي بيانات العميل.** إنه الإجابة الصحيحة لعمليات النشر متعددة الكيانات، ومتطلبات المرونة متعددة المناطق، والفرق التي تفتقر إلى القدرة التشغيلية لنشر حقيقي داخل المؤسسة.',
        items: [
          '**اختيار المزود** — العرض السيادي في الاتحاد الأوروبي من مزود حوسبة فائقة النطاق أو مزود سحابة أوروبي. يجب أن تُدرج اتفاقية معالجة البيانات كل معالِج فرعي؛ ويجب معالجة آليات النقل إذا كان أي معالِج فرعي خارج المنطقة الاقتصادية الأوروبية. يُعد تحليل أثر النقل على نمط قضية Schrems II جزءًا من الملف حتى عندما يكون المعالِج المباشر مقرّه الاتحاد الأوروبي.',
          '**المنطقة** — حصريًا في الاتحاد الأوروبي، مع ضمانات صريحة لإقامة البيانات. التكرار عبر المناطق يكون فقط إلى مناطق أخرى في الاتحاد الأوروبي. دون منطقة في الولايات المتحدة كتجاوز للفشل، ولا حتى مؤقتًا، ولا حتى للنسخ الاحتياطية.',
          '**التشفير** — مفاتيح يديرها العميل مع التدوير؛ وإحضار مفتاحك الخاص حيث يدعم المزود ذلك؛ وأحداث الوصول إلى المفاتيح مسجّلة بشكل منفصل عن السجلات التشغيلية لمزود السحابة.',
          '**الشبكة** — سحابة خاصة افتراضية دون دخول عام؛ ووصول عبر اتصال خاص فقط (رابط مخصص أو شبكة خاصة افتراضية) من شبكة شركتك؛ وقائمة خروج مسموح بها لأي اعتماد خارج.',
          '**الهوية** — متّحدة مع موفّر هوية شركتك؛ وإدارة هوية أصلية في السحابة مرتبطة بهويات المستخدمين، لا بحسابات خدمة مشتركة؛ وقوائم تحكم لكل مجموعة مطبَّقة في خط أنابيب الاسترجاع.',
          '**التسجيل** — سجل تدقيق أصلي في السحابة يُغذّى في نظام إدارة معلومات الأمن لديك؛ واستيعاب منفصل لأحداث تدقيق التطبيق؛ واحتفاظ مقاوِم للعبث يلبّي توقعات المشرف.',
          '**العقود** — يجب أن تمتثل اتفاقية معالجة البيانات للمادة 28، وتدرج المعالِجين الفرعيين، وتعالج البنود التعاقدية المعيارية حيث يلزم، وتتضمن بندًا صريحًا بعدم التدريب على بيانات العميل يغطي أوزان LLM وأي خدمة مساعدة (بحث، قياس عن بُعد، دعم).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'يبدو نمط السحابة الخاصة في الاتحاد الأوروبي أكثر تساهلًا من النشر داخل المؤسسة لأنه يستخدم معالِجًا خارجيًا — لكن مع منطقة سيادية، ومفاتيح يديرها العميل، وبند تعاقدي بعدم التدريب، وتحكم سليم في الخروج، يمكنه أن يضاهي النشر داخل المؤسسة أو يتفوق عليه في التوافر ووضع التدقيق. الملف الامتثالي أكثر ضخامة؛ والمخاطر التشغيلية أقل.',
          },
        ],
      },
      euAiAct: {
        id: 'eu-ai-act',
        title: 'التصنيف بموجب قانون الذكاء الاصطناعي للاتحاد الأوروبي: مخاطر محدودة مقابل مخاطر عالية',
        content:
          '**معظم عمليات نشر RAG المحلي أنظمة ذكاء اصطناعي محدودة المخاطر بموجب قانون الذكاء الاصطناعي للاتحاد الأوروبي — لكن في اللحظة التي يغذّي فيها الاسترجاع قرارًا آليًا يؤثر في شخص، يتحول التصنيف إلى مخاطر عالية وتتضاعف الالتزامات.** صنّف قبل أن تبني.',
        items: [
          '**مخاطر محدودة (معظم أنظمة RAG المحلية)** — يسترجع النظام المستندات ويلخّصها لمساعدة إنسان؛ والإنسان يتخذ القرار. الالتزامات في الأساس التزامات شفافية: يجب أن يعرف المستخدمون أنهم يتفاعلون مع ذكاء اصطناعي، ويجب أن يكون المحتوى المُولَّد قابلًا للتمييز بهذه الصفة، ودون تصميم تلاعبي أو خادع.',
          '**مخاطر عالية** — يغذّي الاسترجاع قرارًا آليًا في مجالات يعدّدها القانون: تقييم الجدارة الائتمانية، واختيار الموظفين، والقبول التعليمي، والخدمات العامة الأساسية، وإنفاذ القانون، والهجرة، والعدالة، وتحديد الهوية البيومترية، والبنية التحتية الحرجة. نظام RAG لدعم القرار السريري يوصي بعلاجات هو عالي المخاطر؛ أما نظام RAG يلخّص بروتوكولات سريرية لمساعدة طبيب على قراءة الإرشادات بشكل أسرع فليس كذلك.',
          '**التزامات المخاطر العالية** — نظام إدارة مخاطر على مدى دورة الحياة، وحوكمة بيانات (بيانات تدريب وتحقق واختبار موثّقة)، ووثائق تقنية، وتسجيل آلي للأحداث، وشفافية ومعلومات للمستخدمين، وإشراف بشري، وتدابير دقة ومتانة، وتقييم مطابقة قبل الطرح، ومراقبة بعد الطرح.',
          '**اعتبارات الذكاء الاصطناعي للأغراض العامة** — استخدام نموذج LLM للأغراض العامة (مفتوح المصدر أو غير ذلك) لا ينقل التزامات المخاطر العالية إلى مزود النموذج. ويتحمل النَّاشر (مؤسستك) التزامات المخاطر العالية للنظام الذي تبنيه بذلك النموذج.',
          '**الممارسات المحظورة** — التقييم الاجتماعي، والكشط غير الموجّه لصور الوجوه، والتعرف على المشاعر في أماكن العمل والمراكز التعليمية، وبعض التصنيف البيومتري في الوقت الحقيقي. هذه مستبعدة بصرف النظر عن مدى محلية تشغيلك لها.',
          '**الوثائق بوصفها أثرًا للتدقيق** — الملف التقني المطلوب للأنظمة عالية المخاطر ليس مُخرَجًا لمرة واحدة؛ بل وثيقة حيّة. اربطه بعملية إدارة التغيير لديك كي تنعكس فيه كل ترقية نموذج وتغيير مُضمِّن وتغيير قائمة تحكم.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الخط الفاصل بين المخاطر العالية والمحدودة ترسمه حالة الاستخدام، لا التقنية. مخزن المتجهات نفسه والنموذج نفسه قد يكونان محدودي المخاطر في نشر مساعد بحثي وعاليي المخاطر في نشر اختيار موظفين في الموارد البشرية. صنّف حسب حالة الاستخدام، لا حسب المنصة.',
          },
        ],
      },
      dpia: {
        id: 'dpia-requirements',
        title: 'متطلبات تقييم الأثر على حماية البيانات',
        content:
          '**يُعد تقييم الأثر على حماية البيانات (المادة 35) إلزاميًا للمعالجة التي قد تنطوي على مخاطر عالية على حقوق وحريات أصحاب البيانات.** معظم أنظمة RAG المحلية الخاضعة للتنظيم تقع في النطاق. عامِل تقييم الأثر بوصفه وثيقة التصميم، لا أثرًا امتثاليًا لاحقًا.',
        items: [
          '**متى يكون إلزاميًا** — تقييم منهجي وشامل يتضمن تنميطًا ذا آثار قانونية؛ ومعالجة واسعة النطاق لبيانات فئات خاصة (صحية، قانونية، بيومترية، عرقية، سياسية، دينية، نقابية)؛ ومراقبة منهجية لمناطق الوصول العام. تنشر السلطات الإشرافية الوطنية قوائم بالعمليات التي تتطلب دائمًا تقييم أثر — راجع قائمة سلطتك.',
          '**نطاق تقييم الأثر** — الغرض والأساس القانوني؛ ووصف عمليات المعالجة؛ وتقييم الضرورة والتناسب؛ وتقييم المخاطر على أصحاب البيانات؛ وإجراءات التخفيف والمخاطر المتبقية؛ والتشاور مع مسؤول حماية البيانات و(حيث تكون المخاطر المتبقية عالية) مع السلطة الإشرافية قبل بدء المعالجة.',
          '**المخاطر الخاصة بـ RAG** الواجب معالجتها: إعادة تحديد هوية الأفراد من المقاطع المُسترجَعة؛ وتوليد معلومات غير دقيقة تؤثر في شخص؛ والتسرّب عبر السجلات أو النسخ الاحتياطية؛ واكتمال الحذف في طلبات الحق في النسيان؛ والتلوث المتبادل بين المجموعات؛ والوصول الواسع أكثر من اللازم للمستخدمين كثيري الامتيازات.',
          '**إجراءات التخفيف الواجب توثيقها** — الضوابط الستة السابقة، إضافة إلى التنقيح أو إخفاء الهوية على مستوى المقطع حيث يكون الأساس القانوني هو الموافقة أو المصلحة المشروعة؛ وإجراء حذف بدليل على التجريب؛ ومراجعات وصول بوتيرة محددة.',
          '**المراجعون** — يعتمده مسؤول حماية البيانات؛ وتُستشار السلطة الإشرافية حيث تظل المخاطر المتبقية بعد التخفيف عالية. ويُدرَج تقييم الأثر الموقّع في الملف التقني إلى جانب وثائق المطابقة لقانون الذكاء الاصطناعي للاتحاد الأوروبي إذا كان النظام أيضًا عالي المخاطر.',
          '**وثيقة حيّة** — أعِد إجراء تقييم الأثر عندما تتوسع الكتلة جوهريًا، أو عندما يتغير النموذج أو المُضمِّن، أو عندما تتغير حدود الوصول، أو سنويًا كحد أدنى. اربط ذلك بعملية إدارة التغيير لديك.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'تقييم أثر يُكتب في الأسبوع الثاني من المشروع هو أداة تخطيط. وتقييم أثر يُكتب في الأسبوع العاشر هو وثيقة دفاعية. الأول أكثر فائدة بكثير ويميل إلى إبراز تغييرات تصميمية تخفّض المخاطر المتبقية النهائية. ابدأ تقييم الأثر قبل قرار الشراء، لا بعد النشر.',
          },
        ],
      },
      germany: {
        id: 'germany-datenschutz',
        title: 'ملاحظات خاصة بألمانيا (Datenschutz)',
        content:
          '**تُراكِم الممارسة الألمانية لحماية البيانات قانون BDSG-Neu والقواعد القطاعية والمشاركة في القرار من مجلس العمل فوق خط أساس GDPR.** قد لا يجتاز نشرُ RAG الذي يفي بـ GDPR العام مراجعةً ألمانية إذا أُغفلت هذه النقاط.',
        items: [
          '**المشاركة في القرار من مجلس العمل (Betriebsrat)** — بموجب المادة §87 من قانون BetrVG، يتطلب أي نظام يراقب أداء الموظفين أو سلوكهم اتفاقًا من مجلس العمل قبل النشر. ونظام RAG على محتوى من إنشاء الموظفين (رسائل بريد إلكتروني، مستندات داخلية) يُفعّل ذلك عادةً. أشرِك مجلس العمل عند التصميم؛ ويصبح الاتفاق (Betriebsvereinbarung) جزءًا من ملف الأساس القانوني.',
          '**السرية القطاعية** — تجرّم المادة §203 من القانون الجنائي الألماني (StGB) انتهاك السرية المهنية (المحامون، الأطباء، المستشارون الضريبيون، المدققون). نشر نظام RAG بطريقة تكشف بيانات عملاء محمية لموظفين غير مُلزَمين أو لمعالِجين خارجيين قد يشكّل جريمة جنائية، لا مجرد مسألة مدنية. والنمط داخل المؤسسة أو المعزول شبكيًا هو الخيار الأكثر أمانًا في هذه القطاعات.',
          '**قانون الإعلام (TTDSG) والقياس عن بُعد** — القياس عن بُعد الخارج الذي يمسّ أجهزة المستخدمين النهائيين لا ينظّمه GDPR وحده بل قانون TTDSG أيضًا. العزل الشبكي يلغي المسألة؛ وعلى عمليات النشر ذات التحكم في الخروج التحقق من أن أي مكالمة خارجة قائمة على الموافقة، أو ضرورية، أو تقنية بحتة.',
          '**توقعات الشفافية** — تتطلب قواعد الشفافية الاتحادية وقواعد الولايات أحيانًا الإفصاح لأصحاب البيانات عن صنع القرار المدعوم بالذكاء الاصطناعي. وحتى حيث لا يكون مطلوبًا بصرامة، فإن الإفصاح بلغة واضحة بأن الاسترجاع مدعوم بالذكاء الاصطناعي وأن المراجع البشري يظل مسؤولًا عن القرار هو الإعداد الافتراضي القابل للدفاع.',
          '**السلطات الإشرافية للولايات (Aufsichtsbehörden)** — الإشراف على Datenschutz منظَّم على مستوى الولايات للقطاع الخاص. تواصل مع المفوّض المعني للولاية لحماية البيانات (Landesbeauftragte für Datenschutz) حيث تلزم استشارة بموجب المادة 36. وتُعد وثائق المواقف الصادرة عن كبار مفوّضي الولايات بشأن أدوات الذكاء الاصطناعي مدخلات مفيدة لتقييم الأثر.',
          '**لغة الوثائق** — تقبل السلطات الإشرافية الألمانية الوثائق بالإنجليزية، لكن الأدوات الأساسية الموجّهة للمستخدمين (إشعارات الخصوصية، إفصاحات الشفافية، اتفاقات مجلس العمل) يجب أن تكون بالألمانية لأسباب قانونية وعملية معًا.',
        ],
      },
      checklist: {
        id: 'compliance-checklist',
        title: 'قائمة التحقق من الامتثال قبل الإطلاق في الإنتاج',
        content:
          '**اعبُر هذه القائمة من أولها إلى آخرها قبل أي نشر في الإنتاج.** كل بند وضع فشل حقيقي من تدقيق حقيقي؛ والقائمة قصيرة عمدًا كي تُستخدم فعلًا.',
        items: [
          '☐ **أساس قانوني موثّق** لكل فئة من بيانات المصدر — موافقة، أو عقد، أو التزام قانوني، أو مصلحة حيوية، أو مهمة عامة، أو مصلحة مشروعة مع اختبار موازنة في الملف.',
          '☐ **تقييم أثر معتمد من مسؤول حماية البيانات**، مع إجراء حذف مُجرَّب مرفق به.',
          '☐ **سجل أنشطة المعالجة (المادة 30)** محدَّث ليشمل نظام RAG، وفئات البيانات، والاحتفاظ، والمستلمين، وآليات النقل (عادةً لا شيء لـ RAG المحلي).',
          '☐ **ستة ضوابط مُتحقَّق منها من طرف إلى طرف**: عزل شبكي أو قائمة خروج مسموح بها، وتحكم قائم على الأدوار، وسجلات تدقيق، وتشفير، وتتبّع نَسَب، وإجراء حذف.',
          '☐ **التقاط حِزَم الخروج** نظيف خلال اختبار إجهاد لمدة 24 ساعة؛ ويُكرَّر بعد كل تحديث للتطبيق.',
          '☐ **تكامل موفّر الهوية** مُختبَر بمستخدم حقيقي من كل مستوى وصول؛ والوصول إلى المجموعات الحساسة يتطلب رفعًا منفصلًا.',
          '☐ **نسخ احتياطية مُنفَّذة واستعادة مُختبَرة فعلًا** على أجهزة معزولة، لا مُتحقَّق منها فقط في لوحة حالة.',
          '☐ **إجراء الحق في النسيان مُجرَّب** ببيانات اصطناعية يغطي مخزن المصدر، وفهرس المتجهات، والتضمينات المخزّنة مؤقتًا، والاحتفاظ بسجل الاسترجاع.',
          '☐ **التصنيف بموجب قانون الذكاء الاصطناعي للاتحاد الأوروبي** مؤكَّد (مخاطر محدودة مقابل عالية)؛ وملف تقني جاهز إن كان عالي المخاطر.',
          '☐ **عقود المزودين (إن وُجدت) مُراجَعة**: اتفاقية معالجة بيانات متوافقة مع المادة 28، ومعالِجون فرعيون مُدرَجون، وبند عدم تدريب يغطي بيانات العميل.',
          '☐ **اتفاق مجلس العمل** قائم حيث يقع محتوى من إنشاء الموظفين في النطاق (ألمانيا؛ قواعد مماثلة في أماكن أخرى بالاتحاد الأوروبي).',
          '☐ **إشعار شفافية** مُصاغ بلغة مفهومة للمستخدم يشرح مساعدة الذكاء الاصطناعي، والإنسان في الحلقة، وتدفق البيانات.',
          '☐ **إجراء الاستجابة للحوادث** محدَّث ليشمل سيناريوهات خاصة بـ RAG: تسرّب الفهرس، وعبث السجلات، وفشل الحذف، وتغيير النموذج مع كسر لاحق لتتبّع النَسَب.',
          '☐ **مراجعة وصول فصلية** مُجدوَلة ومُسنَدة؛ والمراجعة الأولى في التقويم قبل الإطلاق في الإنتاج.',
          '☐ **تحديث سنوي لتقييم الأثر** مُجدوَل ومرتبط بعملية إدارة التغيير.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**الخطأ 1: معاملة "المحلي" مرادفًا لـ "المتوافق".** التشغيل داخل المؤسسة يحل أسئلة النقل والمعالِج؛ لكنه لا يحل الأساس القانوني، أو تقييم الأثر، أو سجل التدقيق، أو حقوق أصحاب البيانات. الامتثال برنامج متعدد الطبقات، لا خيار نشر.',
          '**الخطأ 2: تخطّي تقييم الأثر لأن النظام "مجرد أداة بحث".** أداة بحث تستوعب بيانات فئات خاصة على نطاق واسع هي بالضبط ما تغطيه المادة 35. تخطّي تقييم الأثر يعني تخطّي الدفاع في التدقيق.',
          '**الخطأ 3: تسجيل نص الاستعلام دون التحقق من الأساس القانوني.** الاستعلامات نفسها بيانات شخصية عندما تشير إلى أفراد. قرّر عند التصميم ما إذا كان أساسك القانوني للمعالجة يغطي تسجيل الاستعلامات؛ وإن لم يكن كذلك، فسجّل بصمة التجزئة والبيانات الوصفية فقط.',
          '**الخطأ 4: نسيان التضمينات المخزّنة مؤقتًا في إجراء الحذف.** حذف المصدر يعمل. وإعادة بناء فهرس المتجهات تعمل. أما طبقة التخزين المؤقت التي أضافتها منصتك للأداء، وبصمات التضمين في سجل الاسترجاع، وسجل الردود في مخزن المحادثة فهي الأجزاء المُغفَلة.',
          '**الخطأ 5: السماح للمستخدمين كثيري الامتيازات بتخطّي قوائم تحكم المجموعة.** عبارة "المسؤولون يرون كل شيء" مريحة وشائعة جدًا؛ وهي أيضًا السبب الأكثر شيوعًا لفشل عمليات التدقيق. يجب أن يكون الوصول المميّز بدوره محكومًا، ومحدودًا زمنيًا، ومبرَّرًا بالاستخدام.',
          '**الخطأ 6: إعادة استخدام مساحة عمل لعدة قضايا أو عملاء.** التلوث المتبادل للاستشهادات والسياق فشل سرية حتى قبل أن يراه أي طرف خارجي. قضية أو عميل واحد لكل مجموعة؛ وقوائم تحكم منفصلة؛ واحتفاظ منفصل.',
          '**الخطأ 7: شراء عزل شبكي ثم توصيل هاتف شخصي للاختبار.** يجب أن يشمل محيط العزل الشبكي الأشخاص الذين يستطيعون نقل البيانات عبره. سياسة النقاط الطرفية جزء من الضابط، لا شأن منفصل.',
          '**الخطأ 8: معاملة اختيار النموذج والمُضمِّن بمبدأ "اضبطه وانسَه".** كل تحديث هو حدث إدارة تغيير ذو تبعات على تقييم الأثر وتتبّع النَسَب ومسار التدقيق. خطّط لسير عمل التحديث قبل أول نشر في الإنتاج.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[النص الكامل لـ GDPR (الرسمي)](https://gdpr-info.eu/) — النص الكامل للائحة العامة لحماية البيانات مع تعليق مادة بمادة.',
          '[النص الكامل لقانون الذكاء الاصطناعي للاتحاد الأوروبي](https://artificialintelligenceact.eu/) — النص الكامل للائحة مع إطار تصنيف المخاطر.',
          '[إطار إدارة مخاطر الذكاء الاصطناعي من NIST](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — إطار حوكمة اتحادي أمريكي قابل للتطبيق على تقييم مخاطر الذكاء الاصطناعي.',
          '[BDSG-Neu (القانون الاتحادي الألماني لحماية البيانات)](https://www.gesetze-im-internet.de/bdsg_2018/) — التطبيق الألماني لـ GDPR مع إضافات قطاعية.',
          '[إرشادات EDPB بشأن تقييم الأثر](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-data-protection-impact-assessment-and-determining_en) — توجيهات المجلس الأوروبي لحماية البيانات حول متى وكيف يُجرى تقييم الأثر.',
          '[BfDI (المفوّض الاتحادي الألماني لحماية البيانات)](https://www.bfdi.bund.de/) — وثائق مواقف المفوّض الاتحادي الألماني لحماية البيانات بشأن عمليات نشر الذكاء الاصطناعي.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحقق تشغيل RAG محليًا الامتثال لـ GDPR تلقائيًا؟',
            a: 'لا. تحل الاستضافة المحلية سؤال النقل عبر الحدود وتقلّص قائمة المعالِجين، لكن مبادئ GDPR في المادة 5 (المشروعية، والإنصاف، والشفافية، وتحديد الغرض، وتقليل البيانات، والدقة، وتحديد مدة التخزين، والسلامة والسرية، والمساءلة) تظل سارية. وتنطبق المادة 25 (حماية البيانات من خلال التصميم وافتراضيًا)، والمادة 30 (سجل أنشطة المعالجة)، والمادة 32 (أمن المعالجة)، والمادة 35 (تقييم الأثر) بصرف النظر عن مكان تشغيل النموذج. RAG المحلي نقطة انطلاق متينة، لا وضع امتثال كامل.',
          },
          {
            q: 'ما المطلوب للامتثال لقانون الذكاء الاصطناعي للاتحاد الأوروبي في نشر RAG محلي؟',
            a: 'صنّف حالة الاستخدام كمخاطر محدودة أو عالية. معظم عمليات نشر المساعد الاسترجاعي محدودة المخاطر وتتطلب التزامات شفافية: يجب أن يعرف المستخدمون أنهم يتفاعلون مع ذكاء اصطناعي، ويجب أن يكون المحتوى المُولَّد قابلًا للتمييز. وفي اللحظة التي يغذّي فيها الاسترجاع قرارًا آليًا في مجال معدَّد (ائتمان، توظيف، تعليم، خدمات عامة، إنفاذ القانون، هجرة، عدالة، بيومتريا، بنية تحتية حرجة)، يصبح النشر عالي المخاطر وتنطبق الالتزامات الكاملة: نظام إدارة مخاطر، وحوكمة بيانات، ووثائق تقنية، وتسجيل آلي للأحداث، وشفافية، وإشراف بشري، ودقة ومتانة، وتقييم مطابقة، ومراقبة بعد الطرح.',
          },
          {
            q: 'هل أحتاج إلى تقييم أثر لـ RAG المحلي؟',
            a: 'تقييم الأثر بموجب المادة 35 إلزامي للمعالجة التي قد تنطوي على مخاطر عالية على حقوق وحريات أصحاب البيانات — ويشمل ذلك المعالجة واسعة النطاق لبيانات فئات خاصة (صحية، قانونية، بيومترية، عرقية، سياسية، دينية، نقابية) والتنميط المنهجي ذا الآثار القانونية. معظم RAG المحلي الخاضع للتنظيم (قانوني، طبي، مالي، تحقيقات الموارد البشرية) يقع في النطاق. أجرِ تقييم الأثر مبكرًا، وعامِله بوصفه وثيقة التصميم، وجرّب إجراءات التخفيف — خاصة إجراء الحذف — قبل الإطلاق في الإنتاج.',
          },
          {
            q: 'هل يمكنني مشاركة نشر RAG محلي بين الأقسام؟',
            a: 'نعم، مع الحذر. التحكم في الوصول على مستوى المجموعة، والمصادقة لكل مستخدم مقابل موفّر هوية واحد، وأساس قانوني واضح لاستخدام كل قسم هي الحد الأدنى. ويجب أن يغطي تقييم الأثر أوسع مجموعة من أغراض المعالجة؛ وإذا احتاج أي قسم إلى أساس قانوني مختلف (مثل تحقيقات الموارد البشرية بموجب المصلحة المشروعة بينما يعمل الطاقم السريري بموجب المهمة العامة)، فإن المجموعات المنفصلة ومجموعات الوصول المنفصلة أسهل في الدفاع عنها من مجموعة واحدة بقوائم تحكم معقّدة.',
          },
          {
            q: 'كيف أدقّق مَن وصل إلى أي مستند؟',
            a: 'سجّل كل عملية استرجاع بمعرّف المستخدم، والطابع الزمني، ومعرّفات المقاطع المُسترجَعة ومعرّفات المستندات التي أتت منها. أرسِل الأحداث إلى مخزن سجلات منفصل بوصول كتابة مقيَّد تحت تحكم إداري مختلف عن خادم التطبيق (فصل الواجبات). استخدم تخزينًا للإضافة فقط بسلسلة بصمات تجزئة كي يصبح العبث قابلًا للاكتشاف. ويجب أن يتوافق الاحتفاظ مع نافذة تحقيق السلطة الإشرافية وأي قاعدة قطاعية — ست إلى سبع سنوات شائعة في الصناعات الخاضعة للتنظيم.',
          },
          {
            q: 'هل نماذج التضمين مفتوحة المصدر آمنة بالنسبة لـ GDPR؟',
            a: 'من حيث المبدأ نعم، بثلاثة شروط. أولًا، تُنزَّل الأوزان مرة واحدة وتُثبَّت على بصمة تجزئة كي يمكن إثبات ما كان يعمل. ثانيًا، يكون الاستدلال محليًا بالكامل دون قياس عن بُعد ولا مكالمات خروج — تحقّق بالتقاط حِزَم، ولا تعتمد على الوثائق وحدها. ثالثًا، تُراجَع بطاقة النموذج والترخيص لاكتشاف البنود التي تتعارض مع الاستخدام المؤسسي السري (تُرفِق بعض تراخيص الأوزان المفتوحة قيودًا على أنواع البيانات أو حالات الاستخدام). والإعداد الافتراضي العملي لعمليات النشر الخاضعة للتنظيم هو إدراج عدد صغير من المُضمِّنات المُتحقَّق منها في قائمة مسموح بها ومراجعتها عند كل تحديث.',
          },
          {
            q: 'ماذا عن تتبّع نَسَب البيانات للنتائج المُولَّدة بالذكاء الاصطناعي؟',
            a: 'يجب أن يشير كل رد مُولَّد إلى معرّفات المقاطع التي أنتجته، ومعرّف النموذج، وإصدار قالب المطالبة، والطابع الزمني. وتُحَل المقاطع عندئذٍ إلى معرّفات مستندات، تُحَل بدورها إلى مستندات مصدر. هذه السلسلة هي ما يتيح التحقق من الرد، والدفاع عنه عند الطعن، وتلبية طلب حذف، وإعادة إنتاج النتيجة لاحقًا. وبدونها تكون عبارة "الذكاء الاصطناعي قال ذلك" هي الدفاع في التدقيق — وهو ليس دفاعًا على الإطلاق.',
          },
          {
            q: 'هل يمكنني استخدام RAG المحلي لمستندات العملاء السرية؟',
            a: 'غالبًا نعم، وأحيانًا لا. تسمح كثير من اتفاقيات المستشار الخارجي، واتفاقيات عدم الإفصاح في الاندماج والاستحواذ، وعقود بيانات المرضى بالمراجعة المدعومة بالذكاء الاصطناعي طالما لم تغادر البيانات حدًا محددًا واستُوفيت ضوابط معينة. ويفي RAG المحلي بمتطلب الحد بحكم تصميمه؛ لكن قائمة الضوابط الخاصة بالعقد (التشفير، والوصول، والتدقيق، والاحتفاظ، والإخطار بالخرق) يجب أن تظل محترمة. وحيث يحظر العقد المعالجة بالذكاء الاصطناعي بالكامل، فلا يحل أي نمط نشر ذلك — ينطبق الحظر سواء أكان الذكاء الاصطناعي محليًا أم بعيدًا.',
          },
          {
            q: 'ما التسجيل اللازم للامتثال؟',
            a: 'أحداث الاستيعاب (معرّف المستند، وبصمة التجزئة، والمصدر، ومن رفعه، والطابع الزمني، والتصنيف)، وأحداث الاسترجاع (معرّف المستخدم، وبيانات الاستعلام الوصفية أو بصمته، ومعرّفات المقاطع المُسترجَعة، ومرجع الرد، ومعرّف النموذج/المُضمِّن)، والأحداث الإدارية (ترقية النموذج، وتغيير المُضمِّن، وتغيير قائمة التحكم، وتغيير المستخدم/المجموعة)، والأحداث التشغيلية (نسخ احتياطي، واستعادة، وتدوير المفاتيح). تُرسَل جميع الأحداث إلى مخزن سجلات منفصل، للإضافة فقط، بسلسلة بصمات تجزئة، وتُحتفَظ بها وفق متطلبات قضيتك وقطاعك.',
          },
          {
            q: 'كيف أتعامل مع طلبات الحق في النسيان في RAG؟',
            a: 'بإجراء موثّق يعبر بالحذف عبر كل طبقة: مخزن مستندات المصدر، وفهرس المتجهات، والتضمينات المخزّنة مؤقتًا، والاحتفاظ بسجل الاسترجاع (حيث يسمح الأساس القانوني بحذف إدخال السجل)، وأي ردود مخزّنة في سجل المحادثة. حذف المصدر بسيط؛ وإعادة بناء فهرس المتجهات مفهومة جيدًا؛ أما التضمينات المخزّنة مؤقتًا وسجل الردود فهما الجزءان اللذان تغفلهما معظم عمليات النشر. جرّب الإجراء ببيانات اصطناعية، ووثّق التجربة، واربط الإجراء بعملية الاستجابة للحوادث لديك كي يُفعّل طلب حقيقي التسلسل المُجرَّب لا الارتجال.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[AnythingLLM مقابل PrivateGPT مقابل Open WebUI: أفضل RAG محلي](/ar/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — أي المنصات ذاتية الاستضافة تناسب كل وضع امتثال، مع ملاحظات عن القياس عن بُعد والتراخيص.',
          '[وكلاء ذكاء اصطناعي محليون لسير العمل المؤسسي والامتثال في الاتحاد الأوروبي](/ar/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — موضوع امتثال مجاور عندما يغذّي الاسترجاع خطوات سير عمل آلية بدلًا من قارئ بشري.',
          '[أتمتة البريد الإلكتروني والتقويم محليًا بـ LLM](/ar/power-local-llm/local-llm-email-and-calendar-automation) — أنماط أتمتة مؤسسية مجاورة تنطبق عليها مجموعة الضوابط نفسها.',
          '[RAG محلي على ملفات PDF الخاصة بك خطوة بخطوة](/ar/power-local-llm/local-rag-on-your-pdfs-step-by-step) — دليل تنفيذ عملي لنمطي داخل المؤسسة والحاسوب المحمول.',
          '[تحدّث مع 1000 ملف PDF محليًا](/ar/power-local-llm/chat-with-1000-pdfs-locally) — إرشاد تشغيلي للكتل الأكبر التي تضغط سقف النشر داخل المؤسسة.',
          '[مركز Power Local LLM](/ar/power-local-llm) — المكتبة الكاملة لأدلة عمليات نشر LLM ذاتية الاستضافة.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RAG محلي للبيانات المؤسسية: حلول ذكاء اصطناعي متوافقة مع GDPR للمستندات الحساسة (2026)',
      description: 'RAG محلي متوافق مع GDPR للفرق القانونية والطبية والمالية. البنية المعمارية، وسجل التدقيق، ونطاق تقييم الأثر، وثلاثة أنماط نشر مقارنة.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-rag-for-private-business-data',
      inLanguage: 'ar',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
}
