# Enterprise Governance & Risk Articles — 2026-09

## What this is

Four articles covering enterprise AI governance, security, and legal-risk topics, added
to the existing "Enterprise/B2B" section of the `power-local-llm` cluster:

- `shadow-ai-controls-by-company-size` — shadow AI exposure and controls, sized to
  company headcount and data sensitivity. Interactive: `ShadowAiExposureAssessment`.
- `agentic-ai-security-identity-access` — identity and access controls for agentic AI
  systems that take action, not just generate text. Interactive: `AgentBlastRadiusCalculator`.
- `ai-generated-content-ip-risk` — intellectual-property exposure from AI-generated
  content (training data provenance, output ownership, infringement risk). Interactive:
  `IpRiskTriageMatrix`.
- `us-state-ai-employment-laws-compliance` — US state-by-state AI employment law
  (Colorado, California, Illinois, Texas, NYC) plus federal preemption status and EU/CN/
  JP/KR/Gulf jurisdiction notes. Interactive: `StateAiLawApplicabilityChecker`.

All four ship in all 9 site locales, with GEO-mandatory fields (`leadAnswerBlock`,
`snippetBlocks`, TL;DR section, FAQ schema, freshness tier) and pass the `/risk-checker`
skill.

## Why this exists, and why it looks the way it does

This content was originally built earlier the same day as a brand-new top-level cluster
(`/enterprise-ai`, its own route tree, `src/lib/enterprise-ai/`, its own sitemap file, its
own hub page). The repo owner reverted that entire cluster in commit `7401c5832` — the
commit message states the cluster was self-directed, with "no corresponding request,
plan, or roadmap entry anywhere in the repo" — and explicitly instructed: never create a
new cluster; add this content to an existing one instead.

This plan entry, and the migration itself, exist specifically to close that gap. The
three already-written articles (shadow AI, agentic AI security, AI-generated content IP
risk) were recovered from git history at their pre-revert commits, relocated into
`power-local-llm/articles/`, and had every `/enterprise-ai/...` link and hub reference
rewritten to `/power-local-llm/...`. The fourth article (US state AI employment law) was
written fresh directly inside this cluster; it was never part of the reverted work.

## Why `power-local-llm`

This cluster already has an established "Enterprise/B2B" content section (see the dated
comment blocks in `slugs.ts`, e.g. `enterprise-llm-inference-servers-vllm-tgi-nim-2026`,
`best-ai-hr-software-enterprise-2026`, `best-ai-marketing-software-enterprise-2026`) —
it is the correct, existing home for governance/security/legal-risk content aimed at the
same enterprise buyer, not a reason to spin up separate infrastructure.

## Explicit operator request

This work — recovering and migrating the three articles, writing the fourth, and wiring
them entirely into the existing `power-local-llm` routing/sitemap/hub — was explicitly
requested by the repo operator after the `/enterprise-ai` revert, with the constraint
that no new top-level route, cluster directory, or sitemap file be created. No new
`src/app/`, `src/lib/`, or sitemap-registration file exists as part of this change —
only `src/lib/power-local-llm/articles/*.ts`, `src/components/*.tsx`, the existing
`slugs.ts` / `articles-barrel.ts` / `published.ts` / `PowerLocalLLMPostClient.tsx`
wiring files, and this doc.

## Slugs

- `shadow-ai-controls-by-company-size`
- `agentic-ai-security-identity-access`
- `ai-generated-content-ip-risk`
- `us-state-ai-employment-laws-compliance`
