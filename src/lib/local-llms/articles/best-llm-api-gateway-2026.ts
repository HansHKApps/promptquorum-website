import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM vs OpenRouter vs Portkey: Best LLM Gateway 2026',
    seoTitle: 'Best LLM API Gateway 2026: LiteLLM vs OpenRouter',
    metaDescription: 'LiteLLM’s proxy is free and self-hosted, OpenRouter adds ~5.5% on funded credits, and Portkey now ships inside Palo Alto’s Prisma AIRS. August 2026 pricing.',
    educationalLevel: 'Advanced',
    audience: 'Developers building multi-model LLM applications',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11 min read',
    primaryTerm: 'LLM API gateway',
    targetKeywords: [
      'best LLM gateway 2026',
      'LiteLLM vs OpenRouter',
      'LLM API gateway comparison',
      'self-hosted LLM proxy',
      'OpenRouter fees',
    ],
    leadAnswerBlock: '**LiteLLM is the best LLM API gateway for most developers in 2026: the open-source proxy is free, self-hosted, and routes 100+ provider APIs through one OpenAI-compatible interface with no per-request markup. OpenRouter is the better pick when you want 500+ models today with zero infrastructure — it charges roughly 5.5% on Stripe credit purchases instead. Portkey is no longer an independent gateway: Palo Alto Networks completed its acquisition on 29 May 2026 and is folding it into the Prisma AIRS security platform.**',
    quickAnswerTop: {
      question: 'What is the best LLM API gateway in 2026?',
      answer: '**LiteLLM wins for teams that can run a service; OpenRouter wins for teams that cannot.** LiteLLM’s open-source core costs nothing regardless of volume and keeps routing logic and data residency under your control. OpenRouter removes all infrastructure work and charges ~5.5% on Stripe credit purchases (5% via crypto) plus a 5% BYOK fee above its free allowance. Portkey now ships only as the AI gateway inside Palo Alto Networks’ Prisma AIRS platform — evaluate it as an enterprise security purchase, not a lightweight indie tool.',
      bullets: [
        '**Best overall:** LiteLLM — free, self-hosted, ~53.8k GitHub stars, 100+ provider APIs',
        '**Best zero-setup:** OpenRouter — 500+ models from one API key, ~5.5% credit-purchase fee',
        '**Enterprise security buy:** Portkey / Prisma AIRS — $49/mo Production tier, now Palo Alto-owned',
        '**Crossover point:** self-hosting wins once 5.5% of your monthly model spend exceeds your proxy hosting bill',
        '⚠️ None of the three has a public affiliate or referral program — every link here is a plain product link',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Best Choice: Self-Host or Hosted?', anchor: 'best-choice' },
      { label: 'What Is an LLM API Gateway?', anchor: 'what-is-a-gateway' },
      { label: 'Full Comparison Table', anchor: 'comparison' },
      { label: 'The Self-Hosted Track: LiteLLM', anchor: 'self-hosted-track' },
      { label: 'The Hosted Track: OpenRouter and Prisma AIRS', anchor: 'hosted-track' },
      { label: 'What Does Each Gateway Cost at Scale?', anchor: 'cost-at-scale' },
      { label: 'Why Portkey’s Ownership Change Matters', anchor: 'portkey-acquisition' },
      { label: 'How Each Gateway Handles Failover', anchor: 'failover' },
      { label: 'Who Should Use Each Gateway?', anchor: 'who-should-use' },
      { label: 'Regional Context: EU, Japan, China', anchor: 'regional-context' },
      { label: 'Common Mistakes', anchor: 'common-mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Final Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**LiteLLM’s open-source proxy is free at any volume** — 100+ provider APIs behind one OpenAI-compatible endpoint, with spend tracking, budgets, and rate limiting in the free tier.',
          'OpenRouter charges no subscription but takes ~5.5% on Stripe credit purchases ($0.80 minimum), 5% via crypto, plus a 5% BYOK fee above $25,000/month (pay-as-you-go) or $200,000/month (enterprise).',
          'Portkey was acquired by Palo Alto Networks (completed 29 May 2026) and is being folded into Prisma AIRS — treat it as an enterprise security purchase now.',
          'LiteLLM’s GitHub repo carries ~53.8k stars and ~9.8k forks as of August 2026 — the clearest public adoption signal of the three.',
          'OpenRouter lists 500+ models and is the fastest path from signup to a working multi-model call.',
          'The honest crossover: self-hosting is cheaper the moment 5.5% of your monthly model spend exceeds what you pay to run the proxy.',
          '**Skip a gateway entirely** if you call one provider at low, predictable volume with no second provider planned.',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 Best Choice: Should You Self-Host or Rent the Gateway?',
        content: '**Run LiteLLM yourself if you have somewhere to run it; use OpenRouter if you do not.** That single question decides this purchase more reliably than any feature checklist, because all three tools already cover the core gateway job — one API, fallback, cost tracking.',
        decisionBlock: {
          title: 'Self-host or hosted gateway?',
          localIf: [
            'You already operate services and can patch a proxy — LiteLLM adds no per-request markup at any volume',
            'Monthly model spend is high enough that a 5%+ fee is real money (above roughly $500/month it exceeds most small-instance hosting bills)',
            'You need to control exactly which provider serves a failed request — e.g. staying inside an EU data-residency boundary',
            'You need air-gapped deployment (LiteLLM Enterprise supports this explicitly)',
          ],
          cloudIf: [
            'You have no DevOps capacity and do not want to own a running service',
            'You want to be calling 500+ models within the hour — OpenRouter needs an API key and nothing else',
            'Your spend is modest enough that ~5.5% on funded credits is a rounding error next to the time saved',
            'You are already buying Palo Alto Networks security tooling and want the gateway governed inside Prisma AIRS',
          ],
          quick: [
            'Free and self-hosted → **LiteLLM** (Apache-licensed OSS core, ~53.8k stars)',
            'Zero infrastructure, models today → **OpenRouter** (500+ models, ~5.5% credit fee)',
            'Enterprise AI security governance → **Portkey / Prisma AIRS** ($49/mo Production, custom Enterprise)',
            'One provider, low volume → **no gateway** — call the SDK directly',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: 'Free (open-source core)',
            label: 'LiteLLM — start free (self-hosted)',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: 'No subscription; ~5.5% credit-purchase fee',
            label: 'OpenRouter — see pricing',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: 'What Is an LLM API Gateway?',
        content: '**An LLM API gateway is a routing layer between your application and multiple model providers that exposes one consistent API.** Instead of writing separate integration code for OpenAI, Anthropic, Google, and everyone else, you call the gateway once and it handles provider-specific formatting, authentication, fallback, and — in most implementations — cost tracking and rate limiting.\n\nThe payoff only exists once you have more than one provider in production. For a single-provider app the gateway is an abstraction layer with no benefit yet. Use a gateway if provider sprawl is already costing you glue code and on-call time; skip it if it is not.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'An LLM API gateway routes calls from your application to multiple model providers through one consistent, OpenAI-compatible interface, adding fallback, cost tracking, and rate limiting on top of the raw provider APIs.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a power adapter for AI models. Your code plugs into one socket; the adapter deals with the fact that every provider has a differently shaped plug. If you only ever use one plug, you do not need the adapter.',
          },
        ],
        note: 'A gateway is not the same thing as a local runtime. If you want to serve models on your own hardware rather than route to hosted providers, see the [OpenAI-compatible local LLM API guide](/local-llms/local-llm-openai-compatible-api) and the [llama.cpp vs Ollama vs vLLM comparison](/local-llms/llamacpp-vs-ollama-vs-vllm) instead — those are runtimes, and a gateway sits in front of them.',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM vs OpenRouter vs Portkey: Full Comparison',
        content: '**No single gateway wins every category: LiteLLM wins on cost and control, OpenRouter on setup speed, Prisma AIRS on enterprise governance.** Prices and program details verified against each vendor’s own pages on 27 August 2026 — recheck if this page has been live more than 90 days, since gateway pricing has moved repeatedly this year.',
        tableFormat: true,
        columns: ['Factor', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { Factor: 'Best for', LiteLLM: 'Self-hosted teams wanting full control, no fees', OpenRouter: 'Fast multi-model work with no infrastructure', 'Portkey (Prisma AIRS)': 'Enterprises already buying Palo Alto security tooling' },
          { Factor: 'Pricing', LiteLLM: 'Free (OSS core); custom annual (Enterprise)', OpenRouter: 'No subscription; ~5.5% Stripe credit fee, 5% crypto', 'Portkey (Prisma AIRS)': 'Free 10k logs/mo; $49/mo Production; custom Enterprise' },
          { Factor: 'Self-hosting', LiteLLM: 'Yes — core design, plus a managed proxy option', OpenRouter: 'No — hosted-only API access', 'Portkey (Prisma AIRS)': 'Private cloud deployment on Enterprise' },
          { Factor: 'Providers / models', LiteLLM: '100+ provider APIs', OpenRouter: '500+ models listed', 'Portkey (Prisma AIRS)': 'Gateway repo previously advertised 1,600+ LLMs' },
          { Factor: 'Fallback / failover', LiteLLM: 'Yes — configurable chains in the OSS tier', OpenRouter: 'Yes — automatic, platform-level', 'Portkey (Prisma AIRS)': 'Yes — fallbacks and load balancing on all tiers' },
          { Factor: 'Cost tracking', LiteLLM: 'Yes — spend tracking and budgets in OSS', OpenRouter: 'Yes — per-request credit dashboard', 'Portkey (Prisma AIRS)': 'Yes — cost attribution, virtual-key budgets' },
          { Factor: 'Rate limiting', LiteLLM: 'Yes — OSS tier', OpenRouter: 'Global, account-level (not self-configurable)', 'Portkey (Prisma AIRS)': 'Granular controls on Enterprise' },
          { Factor: 'Affiliate program', LiteLLM: 'None found', OpenRouter: 'None found', 'Portkey (Prisma AIRS)': 'None found (Palo Alto partner program is B2B)' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Pricing captured before May 2026 no longer describes Portkey. Confirm current Prisma AIRS terms with Palo Alto Networks before quoting a figure from an older article or screenshot.',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: 'The Self-Hosted Track: Why LiteLLM Is the Default',
        content: '**LiteLLM is the community default because the free tier is the whole product, not a trial of it.** Spend tracking, budgets, rate limiting, and fallback chains all live in the open-source core — the Enterprise tier adds SSO, SCIM, dedicated support, and air-gapped deployment, not the routing itself.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LiteLLM’s open-source proxy calls 100+ LLM provider APIs through one OpenAI-compatible interface at no license cost and no per-request markup, at any request volume.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — Best Overall Gateway',
            tagline: 'Free, self-hosted, ~53.8k GitHub stars — the closest thing to a default',
            verdict: 'LiteLLM’s core proxy is free and open source, routing 100+ provider APIs through one OpenAI-compatible endpoint. It is the only option here with no percentage markup on model spend, which is what makes it the cheapest choice in absolute dollars at meaningful volume. Its ~53.8k stars and ~9.8k forks (August 2026) are the strongest public maintenance signal of the three tools — relevant when you are betting a production routing layer on a project still being maintained in two years. The cost you do pay is operational: you run, monitor, and upgrade a service.',
            pros: [
              'No per-request or percentage fee — free at any volume',
              'Fallback chains, budgets, and rate limits all in the free OSS tier',
              'Full control over routing logic and data residency',
              'Enterprise tier supports air-gapped deployment explicitly',
            ],
            cons: [
              'You own the uptime, patching, and monitoring of a running service',
              'Enterprise pricing is custom-quoted — no published figure to budget against',
              'Wrong choice for a team with zero DevOps capacity',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: 'Free (open-source core); Enterprise custom annual',
                label: 'LiteLLM — start free',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'LiteLLM on GitHub',
                productCategory: 'dev-tool',
                priceRange: 'Free',
                label: 'View the source (BerriAI/litellm)',
              },
            ],
          },
        ],
        note: 'Use LiteLLM if you want zero recurring fees and full routing control. Avoid it if nobody on the team has capacity to operate a proxy — that cost is real even though the license is free.',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: 'The Hosted Track: OpenRouter and Prisma AIRS',
        content: 'There are honest, non-marketing reasons to rent the gateway instead of running it. You skip driver-free but still real infrastructure work: uptime, upgrades, secrets management, and the on-call rotation that comes with any service in the request path. A hosted gateway also gets you provider coverage you would otherwise integrate one at a time.\n\n**The tradeoff is a percentage fee that scales with spend and less granular control over failover.** That is a good trade at modest volume and a bad one at high volume — the [cost section below](#cost-at-scale) gives the exact crossover arithmetic.',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — Best Zero-Setup Gateway',
            tagline: '500+ models from one API key, no server to run',
            verdict: 'OpenRouter is the fastest path from nothing to a working multi-model application: sign up, take an API key, and call 500+ listed models the same day. There is no subscription — the fee sits on funding the account, at roughly 5.5% on Stripe credit purchases ($0.80 minimum) or 5% via crypto. Its BYOK fee of 5% only applies once monthly BYOK-routed spend passes $25,000 (pay-as-you-go) or $200,000 (enterprise tier), so light users pay nothing extra there. Fallback is automatic but platform-level: when a provider errors, OpenRouter can route to an equivalent model without you configuring the chain.',
            pros: [
              'No infrastructure at all — an API key is the entire setup',
              '500+ models listed, far more than you would integrate by hand',
              'No subscription; light BYOK users stay inside the free allowance',
              'Automatic provider fallback with no configuration',
            ],
            cons: [
              'The ~5.5% credit fee compounds and gets expensive at high volume',
              'Rate limiting is global and account-level, not self-configurable',
              'Less control over exactly which provider serves a failed request — a problem under strict data-residency rules',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'No subscription; ~5.5% on Stripe credit purchases',
                label: 'OpenRouter — see pricing',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'OpenRouter fee documentation',
                productCategory: 'cloud-ai',
                priceRange: 'Free to read',
                label: 'Check the current fee schedule',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — Enterprise Security Buy',
            tagline: 'Now the AI gateway inside Palo Alto Networks’ security platform',
            verdict: 'Portkey still does the gateway job — automatic fallbacks, load balancing, cost attribution, and virtual-key budgeting across all tiers, with a free Developer plan at 10,000 logs/month and a $49/month Production plan at 100,000 logs/month. What changed is the category: since Palo Alto Networks completed the acquisition on 29 May 2026, it is positioned as the AI gateway inside the Prisma AIRS security platform rather than a standalone router. That is a strong fit if you are already procuring enterprise AI governance and a mismatch if you wanted a nimble independent tool.',
            pros: [
              'Fallbacks and load balancing available on every tier, including free',
              'Cost attribution and virtual-key budgeting built in',
              'Private cloud deployment available on Enterprise',
              'Bundles gateway routing with broader AI security governance',
            ],
            cons: [
              'No longer independent — roadmap and pricing now follow a large security vendor',
              'Pricing and tier structure captured before May 2026 may already be stale',
              'Wrong fit if vendor-neutrality is part of why you wanted a gateway',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: 'Free tier; $49/mo Production; custom Enterprise',
                label: 'Portkey — start free (10k logs/mo)',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: 'Custom enterprise pricing',
                label: 'Prisma AIRS — see plans',
              },
            ],
          },
        ],
        note: 'Use OpenRouter if "any comparable model keeps working" is an acceptable failover policy. Avoid it if you need contractual guarantees about exactly which provider handles overflow traffic.',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: 'What Does Each Gateway Cost at Scale?',
        content: '**LiteLLM’s open-source core stays free regardless of volume; OpenRouter’s cost is a percentage of every dollar you fund; Portkey’s scales with log volume and contract terms.** The table below is straight arithmetic on OpenRouter’s published ~5.5% Stripe credit fee — it is not an estimate, and it is the number that decides this purchase.\n\nWe deliberately do not quote a dollar figure for running LiteLLM: the proxy is a small always-on service, and what that costs depends entirely on where you run it. Put your own hosting bill in the last column and the decision makes itself.',
        tableFormat: true,
        columns: ['Monthly model spend', 'OpenRouter credit fee (~5.5%)', 'LiteLLM licence cost', 'Self-host wins below'],
        rows: [
          { 'Monthly model spend': '$200', 'OpenRouter credit fee (~5.5%)': '~$11/mo (~$132/yr)', 'LiteLLM licence cost': '$0', 'Self-host wins below': '$11/mo' },
          { 'Monthly model spend': '$500', 'OpenRouter credit fee (~5.5%)': '~$27.50/mo (~$330/yr)', 'LiteLLM licence cost': '$0', 'Self-host wins below': '$27.50/mo' },
          { 'Monthly model spend': '$2,000', 'OpenRouter credit fee (~5.5%)': '~$110/mo (~$1,320/yr)', 'LiteLLM licence cost': '$0', 'Self-host wins below': '$110/mo' },
          { 'Monthly model spend': '$10,000', 'OpenRouter credit fee (~5.5%)': '~$550/mo (~$6,600/yr)', 'LiteLLM licence cost': '$0', 'Self-host wins below': '$550/mo' },
        ],
        callouts: [
          {
            type: 'info',
            text: 'The fee applies to credits you buy, not to each request — and OpenRouter’s separate 5% BYOK fee only starts above $25,000/month of BYOK-routed spend (pay-as-you-go) or $200,000/month (enterprise). Below that allowance, BYOK adds nothing.',
          },
        ],
        note: 'Use LiteLLM if monthly model spend is high enough that a 5%+ markup is real money in absolute terms. Use OpenRouter if your spend is modest enough that the fee costs less than the engineering hours you would spend running a proxy. For the same build-vs-rent arithmetic applied to hardware, see the [local LLM cost calculator](/local-llms/local-llm-cost-calculator-build-vs-rent-2026).',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'Why Portkey’s Ownership Change Matters for This Decision',
        content: '**Portkey is no longer an independent product: Palo Alto Networks completed its acquisition on 29 May 2026 and is folding it into the Prisma AIRS security platform.** This is not a rebrand. A gateway adopted today as a lightweight indie tool can be re-priced, re-scoped, or bundled into a larger security suite within a product cycle.\n\nIf you were evaluating Portkey specifically because it was a nimble startup product, that premise no longer holds. Re-verify current terms directly with Palo Alto Networks before committing — acquired products routinely change pricing, tier structure, and support models in the first 6–12 months of integration.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Palo Alto Networks completed its acquisition of Portkey on 29 May 2026 and is integrating it as the AI gateway inside the Prisma AIRS security platform.',
          },
        ],
        note: 'Use Portkey / Prisma AIRS if you want gateway routing bundled with AI security governance you were going to buy anyway. Avoid it if independence from a large security vendor’s roadmap matters to your architecture.',
      },
      failover: {
        id: 'failover',
        title: 'How Does Each Gateway Handle Fallback and Failover?',
        content: '**All three support automatic fallback when a provider fails — the difference is who writes the failover policy.** LiteLLM and Portkey both let you define fallback chains and load-balancing rules in configuration you control. OpenRouter handles it at the platform level: when a provider errors it can route to an equivalent model automatically, with less granular control over exactly which one.',
        items: [
          '**LiteLLM** — fallback chains defined in your own config; the most control over which backup model serves a failed request',
          '**Portkey / Prisma AIRS** — automatic fallbacks and load balancing available on all tiers, configured in the platform',
          '**OpenRouter** — automatic, platform-level provider fallback; no chain to configure and no guarantee about which provider takes over',
        ],
        note: 'For teams with a hard requirement about which backup model serves a failed request — staying inside an EU data-residency boundary, for example — LiteLLM’s self-hosted config is the only one of the three that lets you state the policy yourself.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Each Gateway?',
        content: '**Developers with infrastructure should default to LiteLLM; teams that want no-ops multi-model access should use OpenRouter; enterprises inside a Palo Alto stack should evaluate Prisma AIRS.** Beyond that split, team size, compliance requirements, and tolerance for operational overhead decide the rest.',
        items: [
          '**Solo developers and small startups prototyping across models** → OpenRouter. One API key, 500+ models, no server to babysit. Skip it if you are cost-sensitive at high volume — the credit fee compounds.',
          '**Platform teams running production multi-model apps** → self-hosted LiteLLM. Free, the community default, and you keep control of routing and data residency. Avoid it with no capacity to operate a service.',
          '**Enterprises already procuring Palo Alto Networks products** → Portkey inside Prisma AIRS. It now ships as a governance and security layer, so the pitch is different than it was a year ago.',
          '**Regulated industries needing air-gapped deployment** → LiteLLM Enterprise supports this explicitly; verify current Prisma AIRS deployment options directly with Palo Alto Networks, since acquisition integrations change what is offered short-term. See also [enterprise compliance for local LLMs](/local-llms/enterprise-compliance-local-llms).',
          '**Teams calling one provider at low volume** → no gateway at all. Call the SDK directly and revisit when you add a second provider.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'LLM Gateways in the EU, Japan, and China',
        content: 'Where the gateway runs decides where your prompts go. That makes gateway choice a compliance decision in three major markets, not just a cost one.',
        subsections: [
          {
            title: 'European Union',
            content: 'A hosted gateway routes prompt content to whichever provider it selects, which can constitute a cross-border transfer under GDPR Articles 44–49 if that provider sits outside the EEA. A self-hosted LiteLLM instance lets you pin the fallback chain to EU-region endpoints only and log exactly what left the boundary — which is also what makes GDPR Article 5 data-minimisation defensible in an audit. German organisations answering to the BfDI and BSI cloud-security guidance generally need that routing policy written down and enforced in configuration, not delegated to a vendor’s automatic model substitution.',
          },
          {
            title: 'Japan',
            content: 'METI’s AI governance and domestic AI-sovereignty programme pushes Japanese enterprises toward on-premises inference and auditable data paths. A self-hosted gateway fits that posture directly: LiteLLM can front domestic model servers running Qwen2.5 or Llama-family weights alongside hosted providers, keeping regulated traffic on infrastructure inside Japan while still giving developers one API. A hosted-only gateway with automatic provider substitution is harder to reconcile with that requirement.',
          },
          {
            title: 'China',
            content: 'Under the Data Security Law (数据安全法) and CAC cross-border data rules, routing prompt content to overseas model providers is the compliance problem — not the gateway itself. Deployments serving mainland users typically run the gateway on domestic infrastructure and route only to compliant domestic models such as Qwen2.5 or Baichuan. LiteLLM’s self-hosted proxy is the workable option here; OpenRouter’s automatic routing to whichever provider is available is exactly the behaviour CAC rules do not permit.',
          },
        ],
        note: 'Use a self-hosted gateway in any market where you must be able to state, in writing, which provider handled a given request. Use a hosted gateway where no cross-border transfer restriction applies to your data.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Choosing an LLM Gateway',
        numberedItems: [
          {
            title: 'Assuming "gateway" means the same thing across all three tools',
            whyItMatters: 'LiteLLM is a self-hosted proxy, OpenRouter is a hosted API, and Portkey is now part of a security platform. Read each vendor’s current product page before comparing feature lists — do not assume parity.',
          },
          {
            title: 'Picking OpenRouter for high-volume production without modelling the fee',
            whyItMatters: 'At $10,000/month of model spend the ~5.5% credit fee is roughly $550/month, or $6,600 a year. Run that arithmetic against your actual spend before committing, not just the convenience factor.',
          },
          {
            title: 'Adopting a gateway before you have a second provider in production',
            whyItMatters: 'A gateway’s core value is multi-provider routing and fallback. With one model from one provider you are adding an abstraction layer, a new failure mode, and a learning curve for no payoff yet.',
          },
          {
            title: 'Quoting Portkey pricing captured before May 2026',
            whyItMatters: 'Pricing pages and blog posts from before the Palo Alto acquisition may no longer reflect current Prisma AIRS terms. Confirm directly with the vendor before basing a procurement decision on an old screenshot.',
          },
          {
            title: 'Treating GitHub stars as a feature comparison',
            whyItMatters: 'LiteLLM’s ~53.8k stars indicate community trust and the likelihood the project is still maintained in two years — not that it has more features than Portkey or OpenRouter. Check the comparison table, not the adoption signal.',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: 'Skip a Gateway Entirely If…',
        content: '**If you call a single LLM provider at low, predictable volume with no near-term plan to add a second, skip all three.** A gateway adds operational complexity (self-hosted) or a percentage fee (hosted) in exchange for a multi-provider fallback benefit you are not using yet.\n\nCall the provider’s SDK directly and revisit this decision the day you actually add a second model or provider. The same logic applies one layer down: if you are still deciding whether to call hosted APIs at all, read [local LLMs vs cloud APIs](/local-llms/local-llms-vs-cloud-apis) first — the cheapest gateway is the one you never needed.',
        callouts: [
          {
            type: 'tip',
            text: 'A useful trigger: add a gateway the first time you write provider-specific branching in your own code. That branch is the glue code a gateway exists to delete.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is an LLM API gateway?',
            a: 'It is a routing layer that gives your application one consistent API for calling multiple LLM providers, typically adding fallback, cost tracking, and rate limiting on top of the raw provider APIs. You call the gateway; it handles provider-specific formatting and authentication. The benefit only materialises once you have more than one provider in production.',
          },
          {
            q: 'Is LiteLLM really free?',
            a: 'The open-source core is free and self-hosted with no licence fee, per LiteLLM’s own pricing page as of August 2026. There is no per-request markup at any volume. The Enterprise tier — SSO, SCIM, dedicated support, air-gapped deployment — uses custom annual pricing sized to your request volume and includes a 30-day trial.',
          },
          {
            q: 'Does OpenRouter charge per request?',
            a: 'Not directly. OpenRouter’s fee is on funding your account: roughly 5.5% on Stripe credit purchases with a $0.80 minimum, or 5% via crypto. A separate 5% BYOK fee applies only once monthly BYOK-routed spend exceeds $25,000 on pay-as-you-go or $200,000 on the enterprise tier.',
          },
          {
            q: 'Is Portkey still an independent company?',
            a: 'No. Palo Alto Networks completed its acquisition of Portkey on 29 May 2026 and is integrating it as the core AI gateway inside its Prisma AIRS security platform, per Palo Alto Networks’ own press release. Treat any pre-May-2026 pricing or roadmap information as potentially stale.',
          },
          {
            q: 'Which gateway supports the most providers?',
            a: 'OpenRouter lists 500+ models on its own site as of August 2026. LiteLLM’s documentation describes 100+ provider integrations — a different unit, since one provider exposes many models. Portkey’s gateway repository has previously advertised 1,600+ LLMs, though that figure should be re-verified given the acquisition.',
          },
          {
            q: 'Can I self-host Portkey?',
            a: 'Portkey/Prisma AIRS offered private cloud deployment at the Enterprise tier per pre-acquisition pricing pages. Confirm current self-hosting terms directly with Palo Alto Networks, since acquisition integrations frequently change deployment options in the first year.',
          },
          {
            q: 'Do any of these three have an affiliate program?',
            a: 'No checkable public affiliate or referral program was found for LiteLLM, Portkey, or OpenRouter as of August 2026. Every product link on this page is a plain, disclosed product link that earns PromptQuorum nothing. If that changes, this page will be updated with disclosure language matching the actual program terms.',
          },
          {
            q: 'How do I decide between self-hosting and a hosted gateway?',
            a: 'Compare 5.5% of your monthly model spend against what it costs you to run a small always-on service. Below that crossover, OpenRouter is cheaper once your time is counted; above it, self-hosted LiteLLM wins on absolute dollars. Add a second test for compliance: if you must be able to state which provider handled a request, self-host regardless of the arithmetic.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Final Verdict',
        items: [
          '**Use LiteLLM if** you can self-host and want zero recurring fees with full routing control — next step: deploy the open-source proxy and point your app’s base URL at it.',
          '**Use OpenRouter if** you want multi-model access today with no infrastructure — next step: create an API key and fund the account, budgeting for the ~5.5% credit fee.',
          '**Use Portkey / Prisma AIRS if** you are already buying Palo Alto Networks security tooling and want gateway routing bundled in — next step: contact Palo Alto Networks to re-verify current post-acquisition terms.',
          '**Skip all three if** you call a single provider at low volume with no near-term multi-provider plans — next step: revisit when you add a second provider.',
        ],
        note: 'Product links on this page go to each vendor’s own site. PromptQuorum has no current affiliate relationship with LiteLLM, OpenRouter, or Portkey / Palo Alto Networks, and earns nothing from these links.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'LiteLLM official pricing page', description: 'Open-source and Enterprise tier breakdown, direct from the vendor.' },
          { url: 'https://github.com/BerriAI/litellm', title: 'BerriAI/litellm on GitHub', description: 'Repository star and fork counts, licence, and feature description.' },
          { url: 'https://openrouter.ai/docs/faq', title: 'OpenRouter FAQ', description: 'Credit-purchase fee percentages and BYOK fee tiers, direct from the vendor.' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'OpenRouter API limits documentation', description: 'Free-tier rate limits and credit-based access rules.' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'Palo Alto Networks completes acquisition of Portkey', description: 'Acquisition completion date and Prisma AIRS integration plan.' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'Portkey-AI/gateway on GitHub', description: 'Open-source gateway repository and provider-count claims.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Run an OpenAI-compatible API on a local LLM](/local-llms/local-llm-openai-compatible-api) — the runtime a gateway sits in front of',
          '[Local LLMs vs cloud APIs: which to call](/local-llms/local-llms-vs-cloud-apis) — decide this before choosing a gateway',
          '[The local LLM developer stack](/local-llms/local-llm-developer-stack) — where a gateway fits in the wider toolchain',
          '[Cloud GPU rental comparison 2026](/local-llms/cloud-gpu-rental-comparison-2026) — renting compute instead of routing to hosted models',
          '[Build vs rent cost calculator for local LLMs](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — the same arithmetic applied to hardware',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM vs OpenRouter vs Portkey: Best LLM Gateway 2026',
      description: 'Comparison of LiteLLM, OpenRouter, and Portkey/Prisma AIRS as LLM API gateways: real pricing, self-hosting options, failover control, and the Palo Alto acquisition that changed Portkey’s category. Verified August 2026.',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'en',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'LLM API gateway' },
        { '@type': 'Thing', name: 'Multi-model routing' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'LiteLLM' },
        { '@type': 'SoftwareApplication', name: 'OpenRouter' },
        { '@type': 'SoftwareApplication', name: 'Portkey' },
        { '@type': 'SoftwareApplication', name: 'Prisma AIRS' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an LLM API gateway?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A routing layer that gives your application one consistent API for calling multiple LLM providers, adding fallback, cost tracking, and rate limiting on top of the raw provider APIs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is LiteLLM really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The open-source core is free and self-hosted with no licence fee and no per-request markup at any volume, per LiteLLM’s own pricing page as of August 2026. The Enterprise tier uses custom annual pricing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does OpenRouter charge per request?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. OpenRouter charges roughly 5.5% on Stripe credit purchases ($0.80 minimum) or 5% via crypto, plus a 5% BYOK fee only above $25,000/month of BYOK-routed spend on pay-as-you-go, or $200,000/month on enterprise.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Portkey still an independent company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Palo Alto Networks completed its acquisition of Portkey on 29 May 2026 and is integrating it as the AI gateway inside the Prisma AIRS security platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I decide between self-hosting and a hosted LLM gateway?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Compare 5.5% of your monthly model spend against the cost of running a small always-on service. Above that crossover, self-hosted LiteLLM is cheaper; below it, OpenRouter wins once your time is counted.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Best LLM API Gateways (August 2026)',
      inLanguage: 'en',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: 'Best overall — free open-source self-hosted proxy, 100+ provider APIs, no per-request markup' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: 'Best zero-setup gateway — 500+ models from one API key, ~5.5% fee on funded credits' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: 'Enterprise security buy — $49/mo Production tier, now part of Palo Alto Networks Prisma AIRS' },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM vs. OpenRouter vs. Portkey: Bestes LLM-Gateway 2026',
    seoTitle: 'Bestes LLM-API-Gateway 2026: LiteLLM oder OpenRouter?',
    metaDescription: 'LiteLLMs Proxy ist kostenlos und selbst gehostet, OpenRouter berechnet ca. 5,5 % auf Guthabenkäufe, Portkey gehört jetzt zu Palo Altos Prisma AIRS. Stand August 2026.',
    educationalLevel: 'Advanced',
    audience: 'Entwicklerinnen und Entwickler, die Multi-Modell-LLM-Anwendungen bauen',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11 Min. Lesezeit',
    primaryTerm: 'LLM-API-Gateway',
    targetKeywords: [
      'bestes LLM-Gateway 2026',
      'LiteLLM vs OpenRouter',
      'LLM-API-Gateway Vergleich',
      'selbst gehosteter LLM-Proxy',
      'OpenRouter Gebühren',
    ],
    leadAnswerBlock: '**LiteLLM ist 2026 für die meisten Entwicklerteams das beste LLM-API-Gateway: Der Open-Source-Proxy ist kostenlos, selbst gehostet und leitet über 100 Anbieter-APIs über eine einzige OpenAI-kompatible Schnittstelle — ohne Aufschlag pro Anfrage. OpenRouter ist die bessere Wahl, wenn Sie heute über 500 Modelle ohne eigene Infrastruktur nutzen wollen; dafür fallen rund 5,5 % auf Guthabenkäufe per Stripe an. Portkey ist kein eigenständiges Gateway mehr: Palo Alto Networks hat die Übernahme am 29. Mai 2026 abgeschlossen und integriert das Produkt in die Sicherheitsplattform Prisma AIRS.**',
    quickAnswerTop: {
      question: 'Was ist 2026 das beste LLM-API-Gateway?',
      answer: '**LiteLLM gewinnt für Teams, die einen Dienst betreiben können; OpenRouter für Teams, die das nicht können.** LiteLLMs Open-Source-Kern kostet unabhängig vom Volumen nichts und behält Routing-Logik sowie Datenhaltung in Ihrer Kontrolle. OpenRouter nimmt Ihnen die gesamte Infrastrukturarbeit ab und berechnet dafür ca. 5,5 % auf Stripe-Guthabenkäufe (5 % per Krypto) plus 5 % BYOK-Gebühr oberhalb des Freikontingents. Portkey ist nur noch als AI-Gateway innerhalb der Prisma-AIRS-Plattform von Palo Alto Networks erhältlich — bewerten Sie es als Enterprise-Security-Kauf, nicht als schlankes Einzelwerkzeug.',
      bullets: [
        '**Bester Gesamtsieger:** LiteLLM — kostenlos, selbst gehostet, ca. 53,8k GitHub-Sterne, über 100 Anbieter-APIs',
        '**Ohne Setup am besten:** OpenRouter — über 500 Modelle mit einem API-Schlüssel, ca. 5,5 % Gebühr auf Guthaben',
        '**Enterprise-Security-Kauf:** Portkey / Prisma AIRS — 49 $/Monat Production-Tarif, jetzt Palo Alto',
        '**Der Kipppunkt:** Selbst-Hosting lohnt sich, sobald 5,5 % Ihrer monatlichen Modellkosten Ihre Proxy-Hosting-Rechnung übersteigen',
        '⚠️ Keiner der drei Anbieter hat ein öffentliches Partner- oder Empfehlungsprogramm — alle Links hier sind reine Produktlinks',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Beste Wahl: selbst hosten oder mieten?', anchor: 'best-choice' },
      { label: 'Was ist ein LLM-API-Gateway?', anchor: 'what-is-a-gateway' },
      { label: 'Vollständige Vergleichstabelle', anchor: 'comparison' },
      { label: 'Selbst gehostet: LiteLLM', anchor: 'self-hosted-track' },
      { label: 'Gehostet: OpenRouter und Prisma AIRS', anchor: 'hosted-track' },
      { label: 'Was kostet jedes Gateway im Betrieb?', anchor: 'cost-at-scale' },
      { label: 'Warum Portkeys Eigentümerwechsel zählt', anchor: 'portkey-acquisition' },
      { label: 'Wie jedes Gateway Ausfälle abfängt', anchor: 'failover' },
      { label: 'Für wen ist welches Gateway geeignet?', anchor: 'who-should-use' },
      { label: 'Regionaler Kontext: EU, Japan, China', anchor: 'regional-context' },
      { label: 'Häufige Fehler', anchor: 'common-mistakes' },
      { label: 'Häufige Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**LiteLLMs Open-Source-Proxy ist bei jedem Volumen kostenlos** — über 100 Anbieter-APIs hinter einem OpenAI-kompatiblen Endpunkt, inklusive Kostenerfassung, Budgets und Rate-Limiting im kostenlosen Tarif.',
          'OpenRouter verlangt kein Abonnement, nimmt aber ca. 5,5 % auf Stripe-Guthabenkäufe (Mindestbetrag 0,80 $), 5 % per Krypto sowie 5 % BYOK-Gebühr oberhalb von 25.000 $/Monat (Pay-as-you-go) bzw. 200.000 $/Monat (Enterprise).',
          'Portkey wurde von Palo Alto Networks übernommen (abgeschlossen am 29. Mai 2026) und geht in Prisma AIRS auf — behandeln Sie es jetzt als Enterprise-Security-Kauf.',
          'LiteLLMs GitHub-Repository zählt im August 2026 rund 53,8k Sterne und 9,8k Forks — das klarste öffentliche Verbreitungssignal der drei.',
          'OpenRouter listet über 500 Modelle und ist der schnellste Weg von der Anmeldung zum funktionierenden Multi-Modell-Aufruf.',
          'Der ehrliche Kipppunkt: Selbst-Hosting ist günstiger, sobald 5,5 % Ihrer monatlichen Modellkosten den Betrieb des Proxys übersteigen.',
          '**Verzichten Sie ganz auf ein Gateway**, wenn Sie einen einzigen Anbieter mit geringem, planbarem Volumen nutzen und kein zweiter Anbieter geplant ist.',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 Beste Wahl: Selbst hosten oder Gateway mieten?',
        content: '**Betreiben Sie LiteLLM selbst, wenn Sie einen Ort dafür haben; nutzen Sie sonst OpenRouter.** Diese eine Frage entscheidet die Auswahl zuverlässiger als jede Funktionsliste, denn alle drei Werkzeuge erfüllen die Kernaufgabe eines Gateways bereits: eine API, Failover, Kostenerfassung.',
        decisionBlock: {
          title: 'Selbst hosten oder gehostetes Gateway?',
          localIf: [
            'Sie betreiben ohnehin Dienste und können einen Proxy pflegen — LiteLLM erhebt bei keinem Volumen einen Aufschlag',
            'Ihre monatlichen Modellkosten sind hoch genug, dass 5 % echtes Geld sind (ab etwa 500 $/Monat übersteigt das die meisten kleinen Hosting-Rechnungen)',
            'Sie müssen genau steuern, welcher Anbieter eine fehlgeschlagene Anfrage übernimmt — etwa innerhalb einer EU-Datenresidenz-Grenze',
            'Sie brauchen einen Air-Gap-Betrieb (LiteLLM Enterprise unterstützt das ausdrücklich)',
          ],
          cloudIf: [
            'Sie haben keine DevOps-Kapazität und wollen keinen laufenden Dienst verantworten',
            'Sie wollen binnen einer Stunde über 500 Modelle ansprechen — OpenRouter braucht nur einen API-Schlüssel',
            'Ihre Ausgaben sind gering genug, dass ca. 5,5 % auf Guthaben gegenüber der gesparten Zeit kaum ins Gewicht fallen',
            'Sie kaufen ohnehin Sicherheitswerkzeuge von Palo Alto Networks und wollen das Gateway innerhalb von Prisma AIRS steuern',
          ],
          quick: [
            'Kostenlos und selbst gehostet → **LiteLLM** (Apache-lizenzierter OSS-Kern, ca. 53,8k Sterne)',
            'Keine Infrastruktur, Modelle sofort → **OpenRouter** (über 500 Modelle, ca. 5,5 % Guthabengebühr)',
            'Enterprise-AI-Security-Governance → **Portkey / Prisma AIRS** (49 $/Monat Production, Enterprise auf Anfrage)',
            'Ein Anbieter, geringes Volumen → **kein Gateway** — rufen Sie das SDK direkt auf',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: 'Kostenlos (Open-Source-Kern)',
            label: 'LiteLLM — kostenlos starten (selbst gehostet)',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: 'Kein Abo; ca. 5,5 % Gebühr auf Guthabenkäufe',
            label: 'OpenRouter — Preise ansehen',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: 'Was ist ein LLM-API-Gateway?',
        content: '**Ein LLM-API-Gateway ist eine Routing-Schicht zwischen Ihrer Anwendung und mehreren Modellanbietern, die eine einheitliche API bereitstellt.** Statt für OpenAI, Anthropic, Google und alle weiteren Anbieter je eigenen Integrationscode zu schreiben, rufen Sie das Gateway einmal auf; es kümmert sich um anbieterspezifische Formate, Authentifizierung, Failover und — in den meisten Implementierungen — um Kostenerfassung und Rate-Limiting.\n\nDer Nutzen entsteht erst, wenn mehr als ein Anbieter produktiv im Einsatz ist. Bei einer Anwendung mit nur einem Anbieter ist das Gateway eine Abstraktionsschicht ohne Gegenwert. Setzen Sie ein Gateway ein, wenn die Anbietervielfalt Sie bereits Glue-Code und Bereitschaftszeit kostet — sonst nicht.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ein LLM-API-Gateway leitet Aufrufe Ihrer Anwendung über eine einheitliche, OpenAI-kompatible Schnittstelle an mehrere Modellanbieter weiter und ergänzt Failover, Kostenerfassung und Rate-Limiting.',
          },
          {
            type: 'plain-terms',
            text: 'Denken Sie an einen Reisestecker-Adapter für KI-Modelle. Ihr Code passt in eine Buchse; der Adapter kümmert sich darum, dass jeder Anbieter einen anders geformten Stecker hat. Wer nur einen Stecker nutzt, braucht keinen Adapter.',
          },
        ],
        note: 'Ein Gateway ist nicht dasselbe wie eine lokale Laufzeitumgebung. Wenn Sie Modelle auf eigener Hardware betreiben statt an gehostete Anbieter weiterzuleiten, lesen Sie den [Leitfaden zur OpenAI-kompatiblen API für lokale LLMs](/de/local-llms/local-llm-openai-compatible-api) und den [Vergleich llama.cpp vs. Ollama vs. vLLM](/de/local-llms/llamacpp-vs-ollama-vs-vllm) — das sind Laufzeitumgebungen, vor denen ein Gateway sitzt.',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM vs. OpenRouter vs. Portkey: der vollständige Vergleich',
        content: '**Kein Gateway gewinnt in allen Kategorien: LiteLLM führt bei Kosten und Kontrolle, OpenRouter beim Einrichtungstempo, Prisma AIRS bei Enterprise-Governance.** Preise und Programmdetails wurden am 27. August 2026 direkt auf den Anbieterseiten geprüft — prüfen Sie erneut, wenn diese Seite länger als 90 Tage online ist, denn die Gateway-Preise haben sich dieses Jahr mehrfach geändert.',
        tableFormat: true,
        columns: ['Kriterium', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { Kriterium: 'Am besten für', LiteLLM: 'Selbst hostende Teams mit voller Kontrolle, ohne Gebühren', OpenRouter: 'Schnelle Multi-Modell-Arbeit ohne Infrastruktur', 'Portkey (Prisma AIRS)': 'Unternehmen, die ohnehin Palo-Alto-Security kaufen' },
          { Kriterium: 'Preis', LiteLLM: 'Kostenlos (OSS-Kern); Enterprise jährlich auf Anfrage', OpenRouter: 'Kein Abo; ca. 5,5 % Stripe-Guthabengebühr, 5 % Krypto', 'Portkey (Prisma AIRS)': 'Kostenlos 10k Logs/Monat; 49 $/Monat Production; Enterprise auf Anfrage' },
          { Kriterium: 'Selbst-Hosting', LiteLLM: 'Ja — Kernprinzip, plus optionaler Managed-Proxy', OpenRouter: 'Nein — reiner gehosteter API-Zugang', 'Portkey (Prisma AIRS)': 'Private-Cloud-Deployment im Enterprise-Tarif' },
          { Kriterium: 'Anbieter / Modelle', LiteLLM: 'Über 100 Anbieter-APIs', OpenRouter: 'Über 500 gelistete Modelle', 'Portkey (Prisma AIRS)': 'Gateway-Repo warb zuvor mit über 1.600 LLMs' },
          { Kriterium: 'Failover', LiteLLM: 'Ja — konfigurierbare Ketten im OSS-Tarif', OpenRouter: 'Ja — automatisch auf Plattformebene', 'Portkey (Prisma AIRS)': 'Ja — Fallbacks und Load-Balancing in allen Tarifen' },
          { Kriterium: 'Kostenerfassung', LiteLLM: 'Ja — Ausgabenerfassung und Budgets im OSS-Tarif', OpenRouter: 'Ja — Guthaben-Dashboard pro Anfrage', 'Portkey (Prisma AIRS)': 'Ja — Kostenzuordnung, Budgets je virtuellem Schlüssel' },
          { Kriterium: 'Rate-Limiting', LiteLLM: 'Ja — OSS-Tarif', OpenRouter: 'Global auf Kontoebene (nicht selbst konfigurierbar)', 'Portkey (Prisma AIRS)': 'Granulare Steuerung im Enterprise-Tarif' },
          { Kriterium: 'Partnerprogramm', LiteLLM: 'Keines gefunden', OpenRouter: 'Keines gefunden', 'Portkey (Prisma AIRS)': 'Keines gefunden (Palo-Alto-Partnerprogramm ist B2B)' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Preisangaben von vor Mai 2026 beschreiben Portkey nicht mehr. Lassen Sie sich die aktuellen Prisma-AIRS-Konditionen von Palo Alto Networks bestätigen, bevor Sie eine Zahl aus einem älteren Artikel oder Screenshot übernehmen.',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: 'Selbst gehostet: Warum LiteLLM der Standard ist',
        content: '**LiteLLM ist der Community-Standard, weil der kostenlose Tarif das ganze Produkt ist und nicht nur eine Testversion davon.** Kostenerfassung, Budgets, Rate-Limiting und Failover-Ketten stecken im Open-Source-Kern — der Enterprise-Tarif ergänzt SSO, SCIM, dedizierten Support und Air-Gap-Betrieb, nicht das Routing selbst.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LiteLLMs Open-Source-Proxy ruft über 100 LLM-Anbieter-APIs über eine OpenAI-kompatible Schnittstelle auf — ohne Lizenzkosten und ohne Aufschlag pro Anfrage, bei jedem Anfragevolumen.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — bestes Gateway insgesamt',
            tagline: 'Kostenlos, selbst gehostet, ca. 53,8k GitHub-Sterne — am nächsten an einem Standard',
            verdict: 'LiteLLMs Kern-Proxy ist kostenlos und quelloffen und leitet über 100 Anbieter-APIs über einen OpenAI-kompatiblen Endpunkt. Es ist die einzige Option hier ohne prozentualen Aufschlag auf die Modellkosten — genau das macht sie bei relevantem Volumen in absoluten Zahlen zur günstigsten Wahl. Die rund 53,8k Sterne und 9,8k Forks (August 2026) sind das stärkste öffentliche Wartungssignal der drei Werkzeuge — relevant, wenn Sie eine produktive Routing-Schicht auf ein Projekt setzen, das auch in zwei Jahren noch gepflegt werden soll. Der Preis, den Sie zahlen, ist operativ: Sie betreiben, überwachen und aktualisieren einen Dienst.',
            pros: [
              'Keine Gebühr pro Anfrage und kein Prozentsatz — bei jedem Volumen kostenlos',
              'Failover-Ketten, Budgets und Rate-Limits allesamt im kostenlosen OSS-Tarif',
              'Volle Kontrolle über Routing-Logik und Datenresidenz',
              'Enterprise-Tarif unterstützt Air-Gap-Betrieb ausdrücklich',
            ],
            cons: [
              'Verfügbarkeit, Patches und Monitoring eines laufenden Dienstes liegen bei Ihnen',
              'Enterprise-Preise nur auf Anfrage — keine veröffentlichte Zahl zum Kalkulieren',
              'Falsche Wahl für Teams ohne jede DevOps-Kapazität',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: 'Kostenlos (OSS-Kern); Enterprise jährlich auf Anfrage',
                label: 'LiteLLM — kostenlos starten',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'LiteLLM auf GitHub',
                productCategory: 'dev-tool',
                priceRange: 'Kostenlos',
                label: 'Quellcode ansehen (BerriAI/litellm)',
              },
            ],
          },
        ],
        note: 'Nutzen Sie LiteLLM, wenn Sie keine laufenden Gebühren und volle Routing-Kontrolle wollen. Verzichten Sie darauf, wenn niemand im Team Kapazität hat, einen Proxy zu betreiben — dieser Aufwand ist real, auch wenn die Lizenz kostenlos ist.',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: 'Gehostet: OpenRouter und Prisma AIRS',
        content: 'Es gibt ehrliche, nicht werbliche Gründe, das Gateway zu mieten statt zu betreiben. Sie sparen sich echte Infrastrukturarbeit: Verfügbarkeit, Updates, Secrets-Verwaltung und die Bereitschaft, die jeder Dienst im Anfragepfad mit sich bringt. Ein gehostetes Gateway liefert zudem Anbieterabdeckung, die Sie sonst einzeln integrieren müssten.\n\n**Der Preis dafür ist eine prozentuale Gebühr, die mit den Ausgaben wächst, und weniger granulare Kontrolle über das Failover.** Bei moderatem Volumen ist das ein guter Tausch, bei hohem Volumen ein schlechter — der [Kostenabschnitt weiter unten](#cost-at-scale) liefert die genaue Rechnung zum Kipppunkt.',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — bestes Gateway ohne Setup',
            tagline: 'Über 500 Modelle mit einem API-Schlüssel, kein eigener Server',
            verdict: 'OpenRouter ist der schnellste Weg von null zu einer funktionierenden Multi-Modell-Anwendung: anmelden, API-Schlüssel holen, noch am selben Tag über 500 gelistete Modelle aufrufen. Es gibt kein Abonnement — die Gebühr sitzt auf dem Aufladen des Kontos, bei rund 5,5 % auf Stripe-Guthabenkäufe (Mindestbetrag 0,80 $) oder 5 % per Krypto. Die BYOK-Gebühr von 5 % greift erst, wenn die monatlich über BYOK geleiteten Ausgaben 25.000 $ (Pay-as-you-go) bzw. 200.000 $ (Enterprise) übersteigen; leichte Nutzung zahlt dort also nichts extra. Das Failover ist automatisch, aber auf Plattformebene: Fällt ein Anbieter aus, kann OpenRouter auf ein gleichwertiges Modell umleiten, ohne dass Sie die Kette konfigurieren.',
            pros: [
              'Gar keine Infrastruktur — ein API-Schlüssel ist das gesamte Setup',
              'Über 500 gelistete Modelle, weit mehr als Sie von Hand integrieren würden',
              'Kein Abo; leichte BYOK-Nutzung bleibt im Freikontingent',
              'Automatisches Anbieter-Failover ohne Konfiguration',
            ],
            cons: [
              'Die Gebühr von ca. 5,5 % summiert sich und wird bei hohem Volumen teuer',
              'Rate-Limiting ist global auf Kontoebene und nicht selbst konfigurierbar',
              'Weniger Kontrolle darüber, welcher Anbieter eine fehlgeschlagene Anfrage übernimmt — ein Problem bei strengen Datenresidenz-Vorgaben',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'Kein Abo; ca. 5,5 % auf Stripe-Guthabenkäufe',
                label: 'OpenRouter — Preise ansehen',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'OpenRouter Gebührendokumentation',
                productCategory: 'cloud-ai',
                priceRange: 'Kostenlos einsehbar',
                label: 'Aktuelle Gebührenübersicht prüfen',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — der Enterprise-Security-Kauf',
            tagline: 'Jetzt das AI-Gateway in der Sicherheitsplattform von Palo Alto Networks',
            verdict: 'Portkey erledigt die Gateway-Aufgabe weiterhin — automatische Fallbacks, Load-Balancing, Kostenzuordnung und Budgets je virtuellem Schlüssel in allen Tarifen, mit einem kostenlosen Developer-Plan bei 10.000 Logs/Monat und einem Production-Plan für 49 $/Monat bei 100.000 Logs/Monat. Geändert hat sich die Kategorie: Seit Palo Alto Networks die Übernahme am 29. Mai 2026 abgeschlossen hat, wird es als AI-Gateway innerhalb der Prisma-AIRS-Sicherheitsplattform positioniert und nicht mehr als eigenständiger Router. Das passt gut, wenn Sie ohnehin Enterprise-AI-Governance beschaffen — und schlecht, wenn Sie ein wendiges, unabhängiges Werkzeug wollten.',
            pros: [
              'Fallbacks und Load-Balancing in jedem Tarif, auch im kostenlosen',
              'Kostenzuordnung und Budgets je virtuellem Schlüssel eingebaut',
              'Private-Cloud-Deployment im Enterprise-Tarif verfügbar',
              'Bündelt Gateway-Routing mit umfassender AI-Security-Governance',
            ],
            cons: [
              'Nicht mehr unabhängig — Roadmap und Preise folgen jetzt einem großen Security-Anbieter',
              'Preise und Tarifstruktur von vor Mai 2026 können bereits überholt sein',
              'Falsche Wahl, wenn Anbieterneutralität ein Grund für das Gateway war',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: 'Kostenloser Tarif; 49 $/Monat Production; Enterprise auf Anfrage',
                label: 'Portkey — kostenlos starten (10k Logs/Monat)',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: 'Enterprise-Preise auf Anfrage',
                label: 'Prisma AIRS — Tarife ansehen',
              },
            ],
          },
        ],
        note: 'Nutzen Sie OpenRouter, wenn „irgendein vergleichbares Modell läuft weiter" als Failover-Regel akzeptabel ist. Verzichten Sie darauf, wenn Sie vertragliche Zusagen brauchen, welcher Anbieter Überlauf-Traffic übernimmt.',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: 'Was kostet jedes Gateway im laufenden Betrieb?',
        content: '**LiteLLMs Open-Source-Kern bleibt unabhängig vom Volumen kostenlos; OpenRouters Kosten sind ein Prozentsatz jedes aufgeladenen Dollars; Portkeys Kosten wachsen mit Log-Volumen und Vertragskonditionen.** Die Tabelle unten ist schlichte Arithmetik auf Basis der veröffentlichten Stripe-Guthabengebühr von ca. 5,5 % — keine Schätzung, und genau die Zahl, die diese Entscheidung trägt.\n\nWir nennen bewusst keinen Dollarbetrag für den Betrieb von LiteLLM: Der Proxy ist ein kleiner Dauerdienst, und was er kostet, hängt vollständig davon ab, wo Sie ihn betreiben. Tragen Sie Ihre eigene Hosting-Rechnung in die letzte Spalte ein — dann entscheidet sich die Frage von selbst.\n\nHinweis für DACH-Leserinnen und -Leser: Alle drei Anbieter rechnen in US-Dollar ab. Es gibt keine EUR-Preisliste; auf Ihrer Kreditkartenabrechnung kommen daher Wechselkurs und gegebenenfalls Fremdwährungsgebühr hinzu. Für B2B-Kunden in der EU greift in der Regel das Reverse-Charge-Verfahren mit gültiger USt-IdNr.',
        tableFormat: true,
        columns: ['Monatliche Modellkosten', 'OpenRouter-Guthabengebühr (ca. 5,5 %)', 'LiteLLM-Lizenzkosten', 'Selbst-Hosting lohnt ab'],
        rows: [
          { 'Monatliche Modellkosten': '200 $', 'OpenRouter-Guthabengebühr (ca. 5,5 %)': 'ca. 11 $/Monat (ca. 132 $/Jahr)', 'LiteLLM-Lizenzkosten': '0 $', 'Selbst-Hosting lohnt ab': '11 $/Monat' },
          { 'Monatliche Modellkosten': '500 $', 'OpenRouter-Guthabengebühr (ca. 5,5 %)': 'ca. 27,50 $/Monat (ca. 330 $/Jahr)', 'LiteLLM-Lizenzkosten': '0 $', 'Selbst-Hosting lohnt ab': '27,50 $/Monat' },
          { 'Monatliche Modellkosten': '2.000 $', 'OpenRouter-Guthabengebühr (ca. 5,5 %)': 'ca. 110 $/Monat (ca. 1.320 $/Jahr)', 'LiteLLM-Lizenzkosten': '0 $', 'Selbst-Hosting lohnt ab': '110 $/Monat' },
          { 'Monatliche Modellkosten': '10.000 $', 'OpenRouter-Guthabengebühr (ca. 5,5 %)': 'ca. 550 $/Monat (ca. 6.600 $/Jahr)', 'LiteLLM-Lizenzkosten': '0 $', 'Selbst-Hosting lohnt ab': '550 $/Monat' },
        ],
        callouts: [
          {
            type: 'info',
            text: 'Die Gebühr fällt auf gekauftes Guthaben an, nicht auf jede Anfrage — und OpenRouters separate BYOK-Gebühr von 5 % beginnt erst oberhalb von 25.000 $/Monat an BYOK-geleiteten Ausgaben (Pay-as-you-go) bzw. 200.000 $/Monat (Enterprise). Darunter kostet BYOK nichts zusätzlich.',
          },
        ],
        note: 'Nutzen Sie LiteLLM, wenn Ihre monatlichen Modellkosten hoch genug sind, dass ein Aufschlag von 5 % absolut betrachtet ins Gewicht fällt. Nutzen Sie OpenRouter, wenn die Gebühr weniger kostet als die Entwicklerstunden für den Proxy-Betrieb. Dieselbe Rechnung für Hardware finden Sie im [Kostenrechner für lokale LLMs](/de/local-llms/local-llm-cost-calculator-build-vs-rent-2026).',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'Warum Portkeys Eigentümerwechsel für diese Entscheidung zählt',
        content: '**Portkey ist kein unabhängiges Produkt mehr: Palo Alto Networks hat die Übernahme am 29. Mai 2026 abgeschlossen und integriert es in die Sicherheitsplattform Prisma AIRS.** Das ist keine Umbenennung. Ein Gateway, das Sie heute als schlankes Werkzeug einführen, kann binnen eines Produktzyklus neu bepreist, neu zugeschnitten oder nur noch als Teil einer größeren Security-Suite angeboten werden.\n\nWenn Sie Portkey gerade deshalb bewertet haben, weil es ein wendiges Startup-Produkt war, gilt diese Voraussetzung nicht mehr. Lassen Sie sich die aktuellen Konditionen direkt von Palo Alto Networks bestätigen, bevor Sie sich festlegen — übernommene Produkte ändern Preise, Tarifstruktur und Supportmodelle in den ersten 6–12 Monaten der Integration regelmäßig.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Palo Alto Networks hat die Übernahme von Portkey am 29. Mai 2026 abgeschlossen und integriert es als AI-Gateway in die Sicherheitsplattform Prisma AIRS.',
          },
        ],
        note: 'Nutzen Sie Portkey / Prisma AIRS, wenn Sie Gateway-Routing gebündelt mit AI-Security-Governance wollen, die Sie ohnehin einkaufen. Verzichten Sie darauf, wenn Unabhängigkeit von der Roadmap eines großen Security-Anbieters für Ihre Architektur zählt.',
      },
      failover: {
        id: 'failover',
        title: 'Wie fängt jedes Gateway Ausfälle ab?',
        content: '**Alle drei unterstützen automatisches Failover bei Anbieterausfall — der Unterschied liegt darin, wer die Failover-Regel schreibt.** LiteLLM und Portkey lassen Sie Failover-Ketten und Load-Balancing-Regeln in einer Konfiguration definieren, die Sie kontrollieren. OpenRouter erledigt das auf Plattformebene: Fällt ein Anbieter aus, kann automatisch auf ein gleichwertiges Modell umgeleitet werden — mit weniger granularer Kontrolle darüber, auf welches.',
        items: [
          '**LiteLLM** — Failover-Ketten in Ihrer eigenen Konfiguration; die meiste Kontrolle darüber, welches Ersatzmodell eine fehlgeschlagene Anfrage übernimmt',
          '**Portkey / Prisma AIRS** — automatische Fallbacks und Load-Balancing in allen Tarifen, konfiguriert in der Plattform',
          '**OpenRouter** — automatisches Anbieter-Failover auf Plattformebene; keine Kette zu konfigurieren und keine Zusage, welcher Anbieter übernimmt',
        ],
        note: 'Für Teams mit harter Vorgabe, welches Ersatzmodell eine fehlgeschlagene Anfrage bedient — etwa innerhalb einer EU-Datenresidenz-Grenze — ist LiteLLMs selbst gehostete Konfiguration die einzige der drei, in der Sie diese Regel selbst formulieren können.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen ist welches Gateway geeignet?',
        content: '**Teams mit eigener Infrastruktur sollten standardmäßig LiteLLM wählen; Teams, die No-Ops-Multi-Modell-Zugang wollen, OpenRouter; Unternehmen innerhalb eines Palo-Alto-Stacks sollten Prisma AIRS prüfen.** Darüber hinaus entscheiden Teamgröße, Compliance-Anforderungen und die Toleranz für Betriebsaufwand.',
        items: [
          '**Einzelentwickler und kleine Start-ups im Prototyping über mehrere Modelle** → OpenRouter. Ein API-Schlüssel, über 500 Modelle, kein Server zu betreuen. Nicht geeignet bei hoher Kostensensibilität und großem Volumen — die Guthabengebühr summiert sich.',
          '**Plattform-Teams mit produktiven Multi-Modell-Anwendungen** → selbst gehostetes LiteLLM. Kostenlos, Community-Standard, und Routing wie Datenresidenz bleiben bei Ihnen. Nicht geeignet ohne Kapazität für den Dienstbetrieb.',
          '**Unternehmen, die bereits Palo-Alto-Networks-Produkte beschaffen** → Portkey innerhalb von Prisma AIRS. Es wird jetzt als Governance- und Security-Schicht ausgeliefert, der Pitch ist also ein anderer als noch vor einem Jahr.',
          '**Regulierte Branchen mit Air-Gap-Anforderung** → LiteLLM Enterprise unterstützt das ausdrücklich; lassen Sie sich aktuelle Prisma-AIRS-Deployment-Optionen direkt von Palo Alto Networks bestätigen, da Integrationen nach Übernahmen das Angebot kurzfristig verändern. Siehe auch [Enterprise-Compliance für lokale LLMs](/de/local-llms/enterprise-compliance-local-llms).',
          '**Teams mit einem Anbieter und geringem Volumen** → gar kein Gateway. Rufen Sie das SDK direkt auf und prüfen Sie erneut, sobald ein zweiter Anbieter dazukommt.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'LLM-Gateways in der EU, in Japan und in China',
        content: 'Wo das Gateway läuft, entscheidet darüber, wohin Ihre Prompts gehen. Damit ist die Gateway-Wahl in drei großen Märkten eine Compliance-Entscheidung und nicht nur eine Kostenfrage.',
        subsections: [
          {
            title: 'Europäische Union und DACH',
            content: 'Ein gehostetes Gateway leitet Prompt-Inhalte an den jeweils ausgewählten Anbieter weiter; sitzt dieser außerhalb des EWR, kann das eine Drittlandübermittlung nach Art. 44–49 DSGVO darstellen. Eine selbst gehostete LiteLLM-Instanz erlaubt es, die Failover-Kette ausschließlich auf EU-Endpunkte festzulegen und genau zu protokollieren, was die Grenze verlassen hat — genau das macht die Datenminimierung nach Art. 5 DSGVO im Audit belegbar. Für deutsche Organisationen kommt hinzu: Die BSI-Grundschutz-Kataloge und die BSI-Empfehlungen zur Cloud-Nutzung erwarten eine dokumentierte, technisch erzwungene Routing-Regel; eine automatische Modellsubstitution durch den Anbieter erfüllt das nicht. Auch in Österreich und der Schweiz gilt: Für Auftragsverarbeitung nach Art. 28 DSGVO bzw. nach revidiertem CH-DSG brauchen Sie eine belastbare Aussage darüber, wer welche Anfrage verarbeitet hat.',
          },
          {
            title: 'Japan',
            content: 'Das METI-Programm zur KI-Governance und zur nationalen KI-Souveränität drängt japanische Unternehmen zu On-Premises-Inferenz und nachvollziehbaren Datenwegen. Ein selbst gehostetes Gateway passt genau dazu: LiteLLM kann inländische Modellserver mit Qwen2.5 oder Llama-Gewichten neben gehosteten Anbietern bedienen und regulierten Traffic auf Infrastruktur in Japan halten, während Entwicklerteams weiterhin eine einzige API sehen. Ein rein gehostetes Gateway mit automatischer Anbietersubstitution lässt sich damit schwerer vereinbaren.',
          },
          {
            title: 'China',
            content: 'Nach dem Datensicherheitsgesetz (数据安全法) und den CAC-Regeln zur grenzüberschreitenden Datenübermittlung ist das Weiterleiten von Prompt-Inhalten an ausländische Modellanbieter das Compliance-Problem — nicht das Gateway selbst. Deployments für Nutzer auf dem Festland betreiben das Gateway üblicherweise auf inländischer Infrastruktur und leiten ausschließlich an konforme heimische Modelle wie Qwen2.5 oder Baichuan weiter. LiteLLMs selbst gehosteter Proxy ist hier die praktikable Option; OpenRouters automatisches Routing an den jeweils verfügbaren Anbieter ist genau das Verhalten, das die CAC-Regeln nicht zulassen.',
          },
        ],
        note: 'Nutzen Sie ein selbst gehostetes Gateway in jedem Markt, in dem Sie schriftlich belegen müssen, welcher Anbieter eine bestimmte Anfrage bearbeitet hat. Ein gehostetes Gateway genügt dort, wo für Ihre Daten keine Beschränkung der Drittlandübermittlung gilt.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei der Gateway-Auswahl',
        numberedItems: [
          {
            title: 'Annehmen, dass „Gateway" bei allen drei Werkzeugen dasselbe bedeutet',
            whyItMatters: 'LiteLLM ist ein selbst gehosteter Proxy, OpenRouter eine gehostete API, Portkey inzwischen Teil einer Sicherheitsplattform. Lesen Sie die aktuellen Produktseiten, bevor Sie Funktionslisten vergleichen — Gleichwertigkeit ist nicht gegeben.',
          },
          {
            title: 'OpenRouter für hohes Produktionsvolumen wählen, ohne die Gebühr zu rechnen',
            whyItMatters: 'Bei 10.000 $ monatlichen Modellkosten liegt die Guthabengebühr von ca. 5,5 % bei rund 550 $ im Monat oder 6.600 $ im Jahr. Rechnen Sie das gegen Ihre echten Ausgaben, nicht nur gegen den Komfortgewinn.',
          },
          {
            title: 'Ein Gateway einführen, bevor ein zweiter Anbieter produktiv ist',
            whyItMatters: 'Der Kernnutzen eines Gateways ist Multi-Anbieter-Routing mit Failover. Mit einem Modell von einem Anbieter fügen Sie eine Abstraktionsschicht, eine neue Fehlerquelle und eine Lernkurve ohne Gegenwert hinzu.',
          },
          {
            title: 'Portkey-Preise aus der Zeit vor Mai 2026 zitieren',
            whyItMatters: 'Preisseiten und Blogbeiträge von vor der Palo-Alto-Übernahme geben die aktuellen Prisma-AIRS-Konditionen womöglich nicht wieder. Lassen Sie sich diese bestätigen, bevor Sie eine Beschaffungsentscheidung auf einen alten Screenshot stützen.',
          },
          {
            title: 'GitHub-Sterne als Funktionsvergleich lesen',
            whyItMatters: 'LiteLLMs ca. 53,8k Sterne zeigen Community-Vertrauen und die Wahrscheinlichkeit, dass das Projekt in zwei Jahren noch gepflegt wird — nicht, dass es mehr Funktionen hätte als Portkey oder OpenRouter. Nutzen Sie die Vergleichstabelle, nicht das Verbreitungssignal.',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: 'Verzichten Sie ganz auf ein Gateway, wenn …',
        content: '**Wenn Sie einen einzigen LLM-Anbieter mit geringem, planbarem Volumen nutzen und kein zweiter in Sicht ist, lassen Sie alle drei aus.** Ein Gateway bringt Betriebsaufwand (selbst gehostet) oder eine prozentuale Gebühr (gehostet) im Tausch gegen einen Multi-Anbieter-Nutzen, den Sie noch gar nicht abrufen.\n\nRufen Sie das SDK des Anbieters direkt auf und prüfen Sie erneut an dem Tag, an dem tatsächlich ein zweites Modell oder ein zweiter Anbieter dazukommt. Eine Ebene tiefer gilt dasselbe: Wenn Sie noch abwägen, ob Sie überhaupt gehostete APIs aufrufen wollen, lesen Sie zuerst [lokale LLMs vs. Cloud-APIs](/de/local-llms/local-llms-vs-cloud-apis) — das günstigste Gateway ist das, das Sie nie gebraucht haben.',
        callouts: [
          {
            type: 'tip',
            text: 'Ein brauchbarer Auslöser: Führen Sie ein Gateway ein, sobald Sie das erste Mal anbieterspezifische Verzweigungen in Ihren eigenen Code schreiben. Genau diesen Glue-Code soll ein Gateway beseitigen.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Was ist ein LLM-API-Gateway?',
            a: 'Es ist eine Routing-Schicht, die Ihrer Anwendung eine einheitliche API für den Aufruf mehrerer LLM-Anbieter gibt und dabei üblicherweise Failover, Kostenerfassung und Rate-Limiting ergänzt. Sie rufen das Gateway auf; es kümmert sich um anbieterspezifische Formate und Authentifizierung. Der Nutzen entsteht erst, wenn mehr als ein Anbieter produktiv läuft.',
          },
          {
            q: 'Ist LiteLLM wirklich kostenlos?',
            a: 'Der Open-Source-Kern ist kostenlos und selbst gehostet, ohne Lizenzgebühr — so die eigene Preisseite von LiteLLM im August 2026. Es gibt bei keinem Volumen einen Aufschlag pro Anfrage. Der Enterprise-Tarif mit SSO, SCIM, dediziertem Support und Air-Gap-Betrieb wird jährlich nach Anfragevolumen bepreist und enthält eine 30-tägige Testphase.',
          },
          {
            q: 'Berechnet OpenRouter eine Gebühr pro Anfrage?',
            a: 'Nicht direkt. OpenRouters Gebühr fällt beim Aufladen des Kontos an: rund 5,5 % auf Stripe-Guthabenkäufe mit einem Mindestbetrag von 0,80 $ oder 5 % per Krypto. Eine separate BYOK-Gebühr von 5 % greift erst, wenn die monatlich über BYOK geleiteten Ausgaben 25.000 $ (Pay-as-you-go) bzw. 200.000 $ (Enterprise) übersteigen.',
          },
          {
            q: 'Ist Portkey noch ein unabhängiges Unternehmen?',
            a: 'Nein. Palo Alto Networks hat die Übernahme von Portkey am 29. Mai 2026 abgeschlossen und integriert es laut eigener Pressemitteilung als zentrales AI-Gateway in die Sicherheitsplattform Prisma AIRS. Behandeln Sie Preis- und Roadmap-Angaben von vor Mai 2026 als potenziell überholt.',
          },
          {
            q: 'Welches Gateway unterstützt die meisten Anbieter?',
            a: 'OpenRouter listet im August 2026 über 500 Modelle auf der eigenen Website. LiteLLMs Dokumentation nennt über 100 Anbieter-Integrationen — eine andere Einheit, da ein Anbieter viele Modelle bereitstellt. Portkeys Gateway-Repository warb zuvor mit über 1.600 LLMs; diese Zahl sollte angesichts der Übernahme neu geprüft werden.',
          },
          {
            q: 'Kann ich Portkey selbst hosten?',
            a: 'Portkey/Prisma AIRS bot laut den Preisseiten vor der Übernahme ein Private-Cloud-Deployment im Enterprise-Tarif an. Lassen Sie sich die aktuellen Bedingungen zum Selbst-Hosting direkt von Palo Alto Networks bestätigen, da Integrationen nach Übernahmen die Deployment-Optionen im ersten Jahr häufig verändern.',
          },
          {
            q: 'Hat einer der drei Anbieter ein Partnerprogramm?',
            a: 'Für LiteLLM, Portkey und OpenRouter war im August 2026 kein öffentlich prüfbares Partner- oder Empfehlungsprogramm auffindbar. Jeder Produktlink auf dieser Seite ist ein einfacher, offengelegter Link, der PromptQuorum nichts einbringt. Sollte sich das ändern, wird diese Seite mit einer Offenlegung angepasst, die den tatsächlichen Programmbedingungen entspricht.',
          },
          {
            q: 'Wie entscheide ich zwischen Selbst-Hosting und einem gehosteten Gateway?',
            a: 'Vergleichen Sie 5,5 % Ihrer monatlichen Modellkosten mit dem, was Sie der Betrieb eines kleinen Dauerdienstes kostet. Unterhalb dieses Kipppunkts ist OpenRouter günstiger, sobald Ihre Zeit mitgerechnet wird; darüber gewinnt selbst gehostetes LiteLLM in absoluten Zahlen. Ergänzen Sie einen zweiten Test für Compliance: Wenn Sie belegen müssen, welcher Anbieter eine Anfrage bearbeitet hat, hosten Sie unabhängig von der Rechnung selbst.',
          },
          {
            q: 'Muss ich bei der Verwendung eines LLM-Gateways die DSGVO beachten?',
            a: 'Ja. Sobald Prompt-Inhalte personenbezogene Daten enthalten, brauchen Sie für jeden Modellanbieter im Routing-Pfad einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO, und jede Weiterleitung an einen Anbieter außerhalb des EWR ist eine Drittlandübermittlung nach Art. 44–49. Ein selbst gehostetes LiteLLM erleichtert beides erheblich: Sie legen die Anbieterliste selbst fest, können Failover ausschließlich auf EU-Endpunkte begrenzen und erzeugen die Protokolle, die eine Aufsichtsbehörde sehen will. Die BSI-Grundschutz-Kataloge erwarten dabei eine technisch erzwungene, dokumentierte Routing-Regel — nicht die Zusage eines Anbieters, „meist" in der EU zu bleiben.',
          },
          {
            q: 'Ist ein LLM-Gateway für den deutschen Mittelstand geeignet?',
            a: 'Für mittelständische Unternehmen ist der kostenlose LiteLLM-Kern meist die pragmatischste Wahl: keine laufenden Lizenzkosten, Betrieb auf vorhandener Infrastruktur und volle Kontrolle darüber, welche Daten das Haus verlassen — was Prüfungen nach BSI-Grundschutz und Kundenaudits deutlich vereinfacht. Voraussetzung ist eine IT, die einen zusätzlichen Dienst betreiben und aktuell halten kann; fehlt diese Kapazität, ist OpenRouter mit rund 5,5 % Guthabengebühr bei kleinem Volumen der ehrlichere Weg. Rechnen Sie in beiden Fällen mit Abrechnung in US-Dollar und klären Sie das Reverse-Charge-Verfahren mit Ihrer Buchhaltung.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        items: [
          '**Nutzen Sie LiteLLM, wenn** Sie selbst hosten können und keine laufenden Gebühren bei voller Routing-Kontrolle wollen — nächster Schritt: Open-Source-Proxy ausrollen und die Basis-URL Ihrer Anwendung darauf zeigen lassen.',
          '**Nutzen Sie OpenRouter, wenn** Sie heute Multi-Modell-Zugang ohne Infrastruktur brauchen — nächster Schritt: API-Schlüssel erstellen, Konto aufladen und die Gebühr von ca. 5,5 % einplanen.',
          '**Nutzen Sie Portkey / Prisma AIRS, wenn** Sie ohnehin Palo-Alto-Networks-Security beschaffen und Gateway-Routing gebündelt haben wollen — nächster Schritt: aktuelle Konditionen nach der Übernahme direkt bei Palo Alto Networks erfragen.',
          '**Verzichten Sie auf alle drei, wenn** Sie einen Anbieter mit geringem Volumen nutzen und kein zweiter geplant ist — nächster Schritt: erneut prüfen, sobald ein zweiter Anbieter dazukommt.',
        ],
        note: 'Die Produktlinks auf dieser Seite führen zur jeweiligen Anbieterseite. PromptQuorum unterhält keine Partnerbeziehung zu LiteLLM, OpenRouter oder Portkey / Palo Alto Networks und verdient an diesen Links nichts.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'Offizielle Preisseite von LiteLLM', description: 'Aufschlüsselung von Open-Source- und Enterprise-Tarif, direkt vom Anbieter.' },
          { url: 'https://github.com/BerriAI/litellm', title: 'BerriAI/litellm auf GitHub', description: 'Sterne- und Fork-Zahlen des Repositorys, Lizenz und Funktionsbeschreibung.' },
          { url: 'https://openrouter.ai/docs/faq', title: 'OpenRouter FAQ', description: 'Gebührensätze für Guthabenkäufe und BYOK-Stufen, direkt vom Anbieter.' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'OpenRouter API-Limits (Dokumentation)', description: 'Rate-Limits des kostenlosen Tarifs und Regeln für guthabenbasierten Zugang.' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'Palo Alto Networks schließt Portkey-Übernahme ab', description: 'Abschlussdatum der Übernahme und Integrationsplan für Prisma AIRS.' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'Portkey-AI/gateway auf GitHub', description: 'Open-Source-Gateway-Repository und Angaben zur Anbieterzahl.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[OpenAI-kompatible API auf einem lokalen LLM betreiben](/de/local-llms/local-llm-openai-compatible-api) — die Laufzeitumgebung, vor der ein Gateway sitzt',
          '[Lokale LLMs vs. Cloud-APIs: was aufrufen?](/de/local-llms/local-llms-vs-cloud-apis) — klären Sie das vor der Gateway-Wahl',
          '[Der Entwickler-Stack für lokale LLMs](/de/local-llms/local-llm-developer-stack) — wo ein Gateway in die Toolchain passt',
          '[Cloud-GPU-Vergleich 2026](/de/local-llms/cloud-gpu-rental-comparison-2026) — Rechenleistung mieten statt an gehostete Modelle weiterleiten',
          '[Kostenrechner: bauen oder mieten für lokale LLMs](/de/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — dieselbe Rechnung auf Hardware angewandt',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM vs. OpenRouter vs. Portkey: Bestes LLM-Gateway 2026',
      description: 'Vergleich von LiteLLM, OpenRouter und Portkey/Prisma AIRS als LLM-API-Gateways: echte Preise, Selbst-Hosting-Optionen, Failover-Kontrolle und die Palo-Alto-Übernahme, die Portkeys Kategorie verändert hat. Geprüft im August 2026.',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/de/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'de',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'LLM-API-Gateway' },
        { '@type': 'Thing', name: 'Multi-Modell-Routing' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'LiteLLM' },
        { '@type': 'SoftwareApplication', name: 'OpenRouter' },
        { '@type': 'SoftwareApplication', name: 'Portkey' },
        { '@type': 'SoftwareApplication', name: 'Prisma AIRS' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist ein LLM-API-Gateway?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine Routing-Schicht, die Ihrer Anwendung eine einheitliche API für den Aufruf mehrerer LLM-Anbieter gibt und dabei Failover, Kostenerfassung und Rate-Limiting ergänzt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist LiteLLM wirklich kostenlos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Der Open-Source-Kern ist kostenlos und selbst gehostet, ohne Lizenzgebühr und ohne Aufschlag pro Anfrage — so die eigene Preisseite im August 2026. Der Enterprise-Tarif wird jährlich auf Anfrage bepreist.',
          },
        },
        {
          '@type': 'Question',
          name: 'Berechnet OpenRouter eine Gebühr pro Anfrage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. OpenRouter berechnet rund 5,5 % auf Stripe-Guthabenkäufe (mindestens 0,80 $) oder 5 % per Krypto, plus 5 % BYOK-Gebühr erst oberhalb von 25.000 $/Monat (Pay-as-you-go) bzw. 200.000 $/Monat (Enterprise).',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist Portkey noch ein unabhängiges Unternehmen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Palo Alto Networks hat die Übernahme am 29. Mai 2026 abgeschlossen und integriert Portkey als AI-Gateway in die Sicherheitsplattform Prisma AIRS.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie entscheide ich zwischen Selbst-Hosting und einem gehosteten LLM-Gateway?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vergleichen Sie 5,5 % Ihrer monatlichen Modellkosten mit den Betriebskosten eines kleinen Dauerdienstes. Oberhalb dieses Kipppunkts ist selbst gehostetes LiteLLM günstiger, darunter gewinnt OpenRouter, sobald Ihre Zeit mitgerechnet wird.',
          },
        },
        {
          '@type': 'Question',
          name: 'Muss ich bei der Verwendung eines LLM-Gateways die DSGVO beachten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Für jeden Modellanbieter im Routing-Pfad brauchen Sie einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO; Weiterleitungen außerhalb des EWR sind Drittlandübermittlungen nach Art. 44–49. Ein selbst gehostetes LiteLLM erlaubt es, Failover auf EU-Endpunkte zu begrenzen und die nötigen Protokolle zu erzeugen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist ein LLM-Gateway für den deutschen Mittelstand geeignet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja — der kostenlose LiteLLM-Kern läuft ohne Lizenzkosten auf vorhandener Infrastruktur und vereinfacht Prüfungen nach BSI-Grundschutz. Fehlt die IT-Kapazität für einen zusätzlichen Dienst, ist OpenRouter bei kleinem Volumen der pragmatischere Weg. Beide Anbieter rechnen in US-Dollar ab.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Die besten LLM-API-Gateways (August 2026)',
      inLanguage: 'de',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: 'Bester Gesamtsieger — kostenloser, selbst gehosteter Open-Source-Proxy, über 100 Anbieter-APIs, kein Aufschlag pro Anfrage' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: 'Bestes Gateway ohne Setup — über 500 Modelle mit einem API-Schlüssel, ca. 5,5 % Gebühr auf aufgeladenes Guthaben' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: 'Enterprise-Security-Kauf — 49 $/Monat Production-Tarif, jetzt Teil von Palo Alto Networks Prisma AIRS' },
      ],
    },
  },
}
