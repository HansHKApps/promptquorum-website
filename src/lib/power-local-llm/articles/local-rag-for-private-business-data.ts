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
        title: 'FAQ',
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
              'Für jedes Dokument: wer es hochgeladen hat, wann, Quellpfad, Hash. Für jede Anfrage: wer gefragt hat, was gefragt wurde (sofern das Logging es zulässt), welche Chunks abgerufen wurden, aus welchen Dokument-IDs sie stammen, welche Antwort zurückgegeben wurde. Logs müssen manipulationssicher sein — append-only, signiert, mit einer Aufbewahrungsdauer, die das Untersuchungsfenster der Aufsichtsbehörde abdeckt. Für den prompt-bezogenen Audit-Trail — Versionierung, Änderungsprotokolle und Rollback — siehe [Workflows zur Versionskontrolle von Prompts](/prompt-engineering/prompt-version-control-workflows?lang=de).',
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
          '**Hardware** — ein Workstation-Laptop mit Vollverschlüsselung der Festplatte, einer dedizierten GPU (oder einer aktuellen Unified-Memory-Maschine) und mindestens 32 GB RAM. Modell und Embedder müssen neben dem Vektorspeicher-Cache in den Speicher passen. Hardwareanforderungen und Modellauswahl nach VRAM finden Sie im [Hardware-Leitfaden für lokale LLMs](/local-llms/local-llm-hardware-guide-2026?lang=de).',
          '**Software** — eine in sich geschlossene Desktop-RAG-Anwendung, die lokal läuft; ein Open-Source-LLM mit einmal heruntergeladenen und auf einen Hash fixierten Gewichten; ein Open-Source-Embedder; ein lokaler Vektorspeicher auf der verschlüsselten Festplatte. Einen Vergleich von Open-Source-Modellen, die für lokales RAG geeignet sind, finden Sie unter [Top-Open-Source-Modelle für Ollama](/local-llms/top-open-source-models-ollama?lang=de).',
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
        title: 'FAQ',
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
              "Pour chaque document : qui l'a chargé, quand, chemin source, hash. Pour chaque requête : qui a demandé, ce qui a été demandé (si la base légale le permet), quels chunks ont été retournés, depuis quels document IDs, quelle réponse. Les journaux doivent être à preuve d'altération — append-only, signés, avec une rétention couvrant la fenêtre d'enquête de l'autorité de contrôle. Pour la traçabilité au niveau prompt — versionnement, changelog, rollback — voir [workflows de version control des prompts](/prompt-engineering/prompt-version-control-workflows?lang=fr).",
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
          '**Matériel** — un laptop classe workstation avec chiffrement disque complet, GPU dédié (ou machine récente à mémoire unifiée) et au moins 32 Go de RAM. Le modèle et l\'embedder doivent tenir en mémoire avec le cache du store vectoriel. Pour les besoins matériels et la sélection par VRAM, voir le [guide matériel LLM local](/local-llms/local-llm-hardware-guide-2026?lang=fr).',
          "**Logiciel** — application RAG desktop autonome qui tourne en local ; LLM open source dont les poids sont téléchargés une fois et figés sur un hash ; embedder open source ; store vectoriel local sur le disque chiffré. Pour une comparaison de modèles open source adaptés au RAG local, voir [meilleurs modèles open source pour Ollama](/local-llms/top-open-source-models-ollama?lang=fr).",
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
        title: 'FAQ',
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
}
