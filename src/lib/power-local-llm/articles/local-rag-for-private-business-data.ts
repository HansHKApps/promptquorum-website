// Power Local LLM — Local RAG for Business Data: GDPR-Compliant AI for Sensitive Documents
// Slug: local-rag-for-private-business-data
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    theme: 'RAG & Document Chat',
    title: 'Local RAG for Business Data: GDPR-Compliant AI for Sensitive Documents',
    seoTitle: 'GDPR-Compliant Local RAG: Architecture for Sensitive Documents',
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
      { label: 'Deployment Pattern Comparison', anchor: '#deployment-comparison' },
      { label: 'Which Deployment Should You Pick?', anchor: '#which-deployment' },
      { label: 'Why Local RAG for Sensitive Data', anchor: '#why-local-rag' },
      { label: 'The Six Controls Every Deployment Needs', anchor: '#required-controls' },
      { label: 'Air-Gap and Egress Control', anchor: '#air-gap' },
      { label: 'Audit Logging That Will Survive Review', anchor: '#audit-logging' },
      { label: 'Data Lineage From Chunk to Source', anchor: '#data-lineage' },
      { label: 'Encryption and Access Control', anchor: '#encryption-access' },
      { label: 'Single-User Laptop Pattern', anchor: '#laptop-pattern' },
      { label: 'On-Prem Server Pattern', anchor: '#on-prem-pattern' },
      { label: 'Private EU Cloud Pattern', anchor: '#private-cloud-pattern' },
      { label: 'EU AI Act Classification', anchor: '#eu-ai-act' },
      { label: 'When You Need a DPIA', anchor: '#dpia-requirements' },
      { label: 'Germany-Specific Notes (Datenschutz)', anchor: '#germany-datenschutz' },
      { label: 'Compliance Checklist', anchor: '#compliance-checklist' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
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
      comparisonTable: {
        id: 'deployment-comparison',
        title: 'How Do the 3 Deployment Patterns Compare for Compliance?',
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
        title: 'Which Deployment Pattern Should You Pick?',
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
              'For each document: who uploaded it, when, source path, hash. For each query: who asked, what was asked (if logging permits), which chunks were retrieved, which document IDs they came from, what answer was returned. Logs must be tamper-evident — append-only, signed, with retention long enough to cover the supervisory authority\'s investigation window.',
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
          '**Hardware** — a workstation-class laptop with full-disk encryption, a discrete GPU (or a recent unified-memory machine), and at least 32 GB of RAM. The model and embedder must fit in memory alongside the vector store cache.',
          '**Software** — a self-contained desktop RAG application running locally; an open-source LLM with weights downloaded once and pinned to a hash; an open-source embedder; a local vector store on the encrypted disk.',
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
        title: 'When You Need a DPIA — and What It Has to Cover',
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
}
