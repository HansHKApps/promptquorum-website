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
    leadAnswerBlock: '**LiteLLM is the best LLM API gateway for most developers in 2026: the open-source proxy is free, self-hosted, and routes 100+ provider APIs through one OpenAI-compatible interface with no per-request markup. OpenRouter is the better pick when you want 380+ models today with zero infrastructure — it charges roughly 5.5% on Stripe credit purchases instead. Portkey is no longer an independent gateway: Palo Alto Networks completed its acquisition on 29 May 2026 and is folding it into the Prisma AIRS security platform.**',
    quickAnswerTop: {
      question: 'What is the best LLM API gateway in 2026?',
      answer: '**LiteLLM wins for teams that can run a service; OpenRouter wins for teams that cannot.** LiteLLM’s open-source core costs nothing regardless of volume and keeps routing logic and data residency under your control. OpenRouter removes all infrastructure work and charges ~5.5% on Stripe credit purchases (5% via crypto) plus a 5% BYOK fee above its free allowance. Portkey now ships only as the AI gateway inside Palo Alto Networks’ Prisma AIRS platform — evaluate it as an enterprise security purchase, not a lightweight indie tool.',
      bullets: [
        '**Best overall:** LiteLLM — free, self-hosted, ~57.5k GitHub stars, 100+ provider APIs',
        '**Best zero-setup:** OpenRouter — 380+ models from one API key, ~5.5% credit-purchase fee',
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
          'LiteLLM’s GitHub repo carries ~57.5k stars and ~11.0k forks as of August 2026 — the clearest public adoption signal of the three.',
          'OpenRouter lists 380+ models and is the fastest path from signup to a working multi-model call.',
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
            'You want to be calling 380+ models within the hour — OpenRouter needs an API key and nothing else',
            'Your spend is modest enough that ~5.5% on funded credits is a rounding error next to the time saved',
            'You are already buying Palo Alto Networks security tooling and want the gateway governed inside Prisma AIRS',
          ],
          quick: [
            'Free and self-hosted → **LiteLLM** (Apache-licensed OSS core, ~57.5k stars)',
            'Zero infrastructure, models today → **OpenRouter** (380+ models, ~5.5% credit fee)',
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
          { Factor: 'Providers / models', LiteLLM: '100+ provider APIs', OpenRouter: '380+ models listed', 'Portkey (Prisma AIRS)': 'Gateway repo previously advertised 1,600+ LLMs' },
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
            tagline: 'Free, self-hosted, ~57.5k GitHub stars — the closest thing to a default',
            verdict: 'LiteLLM’s core proxy is free and open source, routing 100+ provider APIs through one OpenAI-compatible endpoint. It is the only option here with no percentage markup on model spend, which is what makes it the cheapest choice in absolute dollars at meaningful volume. Its ~57.5k stars and ~11.0k forks (August 2026) are the strongest public maintenance signal of the three tools — relevant when you are betting a production routing layer on a project still being maintained in two years. The cost you do pay is operational: you run, monitor, and upgrade a service.',
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
            tagline: '380+ models from one API key, no server to run',
            verdict: 'OpenRouter is the fastest path from nothing to a working multi-model application: sign up, take an API key, and call 500+ listed models the same day. There is no subscription — the fee sits on funding the account, at roughly 5.5% on Stripe credit purchases ($0.80 minimum) or 5% via crypto. Its BYOK fee of 5% only applies once monthly BYOK-routed spend passes $25,000 (pay-as-you-go) or $200,000 (enterprise tier), so light users pay nothing extra there. Fallback is automatic but platform-level: when a provider errors, OpenRouter can route to an equivalent model without you configuring the chain.',
            pros: [
              'No infrastructure at all — an API key is the entire setup',
              '380+ models listed, far more than you would integrate by hand',
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
          '**Solo developers and small startups prototyping across models** → OpenRouter. One API key, 380+ models, no server to babysit. Skip it if you are cost-sensitive at high volume — the credit fee compounds.',
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
            whyItMatters: 'LiteLLM’s ~57.5k stars indicate community trust and the likelihood the project is still maintained in two years — not that it has more features than Portkey or OpenRouter. Check the comparison table, not the adoption signal.',
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
            a: 'OpenRouter lists 380+ models on its own site as of August 2026. LiteLLM’s documentation describes 100+ provider integrations — a different unit, since one provider exposes many models. Portkey’s gateway repository has previously advertised 1,600+ LLMs, though that figure should be re-verified given the acquisition.',
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
      description: 'Comparison of LiteLLM, OpenRouter, and Portkey/Prisma AIRS as LLM API gateways: real pricing, self-hosting options, failover control, and the Palo Alto acquisition that changed Portkey’s category.',
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
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: 'Best zero-setup gateway — 380+ models from one API key, ~5.5% fee on funded credits' },
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
    metaDescription: 'LiteLLMs Proxy ist kostenlos und selbst gehostet, OpenRouter berechnet ca. 5,5 % auf Guthabenkäufe, Portkey gehört jetzt zu Palo Altos Prisma AIRS.',
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
    leadAnswerBlock: '**LiteLLM ist 2026 für die meisten Entwicklerteams das beste LLM-API-Gateway: Der Open-Source-Proxy ist kostenlos, selbst gehostet und leitet über 100 Anbieter-APIs über eine einzige OpenAI-kompatible Schnittstelle — ohne Aufschlag pro Anfrage. OpenRouter ist die bessere Wahl, wenn Sie heute über 380 Modelle ohne eigene Infrastruktur nutzen wollen; dafür fallen rund 5,5 % auf Guthabenkäufe per Stripe an. Portkey ist kein eigenständiges Gateway mehr: Palo Alto Networks hat die Übernahme am 29. Mai 2026 abgeschlossen und integriert das Produkt in die Sicherheitsplattform Prisma AIRS.**',
    quickAnswerTop: {
      question: 'Was ist 2026 das beste LLM-API-Gateway?',
      answer: '**LiteLLM gewinnt für Teams, die einen Dienst betreiben können; OpenRouter für Teams, die das nicht können.** LiteLLMs Open-Source-Kern kostet unabhängig vom Volumen nichts und behält Routing-Logik sowie Datenhaltung in Ihrer Kontrolle. OpenRouter nimmt Ihnen die gesamte Infrastrukturarbeit ab und berechnet dafür ca. 5,5 % auf Stripe-Guthabenkäufe (5 % per Krypto) plus 5 % BYOK-Gebühr oberhalb des Freikontingents. Portkey ist nur noch als AI-Gateway innerhalb der Prisma-AIRS-Plattform von Palo Alto Networks erhältlich — bewerten Sie es als Enterprise-Security-Kauf, nicht als schlankes Einzelwerkzeug.',
      bullets: [
        '**Bester Gesamtsieger:** LiteLLM — kostenlos, selbst gehostet, ca. 57,5k GitHub-Sterne, über 100 Anbieter-APIs',
        '**Ohne Setup am besten:** OpenRouter — über 380 Modelle mit einem API-Schlüssel, ca. 5,5 % Gebühr auf Guthaben',
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
          'LiteLLMs GitHub-Repository zählt im August 2026 rund 57,5k Sterne und 11,0k Forks — das klarste öffentliche Verbreitungssignal der drei.',
          'OpenRouter listet über 380 Modelle und ist der schnellste Weg von der Anmeldung zum funktionierenden Multi-Modell-Aufruf.',
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
            'Sie wollen binnen einer Stunde über 380 Modelle ansprechen — OpenRouter braucht nur einen API-Schlüssel',
            'Ihre Ausgaben sind gering genug, dass ca. 5,5 % auf Guthaben gegenüber der gesparten Zeit kaum ins Gewicht fallen',
            'Sie kaufen ohnehin Sicherheitswerkzeuge von Palo Alto Networks und wollen das Gateway innerhalb von Prisma AIRS steuern',
          ],
          quick: [
            'Kostenlos und selbst gehostet → **LiteLLM** (Apache-lizenzierter OSS-Kern, ca. 57,5k Sterne)',
            'Keine Infrastruktur, Modelle sofort → **OpenRouter** (über 380 Modelle, ca. 5,5 % Guthabengebühr)',
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
            tagline: 'Kostenlos, selbst gehostet, ca. 57,5k GitHub-Sterne — am nächsten an einem Standard',
            verdict: 'LiteLLMs Kern-Proxy ist kostenlos und quelloffen und leitet über 100 Anbieter-APIs über einen OpenAI-kompatiblen Endpunkt. Es ist die einzige Option hier ohne prozentualen Aufschlag auf die Modellkosten — genau das macht sie bei relevantem Volumen in absoluten Zahlen zur günstigsten Wahl. Die rund 57,5k Sterne und 11,0k Forks (August 2026) sind das stärkste öffentliche Wartungssignal der drei Werkzeuge — relevant, wenn Sie eine produktive Routing-Schicht auf ein Projekt setzen, das auch in zwei Jahren noch gepflegt werden soll. Der Preis, den Sie zahlen, ist operativ: Sie betreiben, überwachen und aktualisieren einen Dienst.',
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
            tagline: 'Über 380 Modelle mit einem API-Schlüssel, kein eigener Server',
            verdict: 'OpenRouter ist der schnellste Weg von null zu einer funktionierenden Multi-Modell-Anwendung: anmelden, API-Schlüssel holen, noch am selben Tag über 380 gelistete Modelle aufrufen. Es gibt kein Abonnement — die Gebühr sitzt auf dem Aufladen des Kontos, bei rund 5,5 % auf Stripe-Guthabenkäufe (Mindestbetrag 0,80 $) oder 5 % per Krypto. Die BYOK-Gebühr von 5 % greift erst, wenn die monatlich über BYOK geleiteten Ausgaben 25.000 $ (Pay-as-you-go) bzw. 200.000 $ (Enterprise) übersteigen; leichte Nutzung zahlt dort also nichts extra. Das Failover ist automatisch, aber auf Plattformebene: Fällt ein Anbieter aus, kann OpenRouter auf ein gleichwertiges Modell umleiten, ohne dass Sie die Kette konfigurieren.',
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
          '**Einzelentwickler und kleine Start-ups im Prototyping über mehrere Modelle** → OpenRouter. Ein API-Schlüssel, über 380 Modelle, kein Server zu betreuen. Nicht geeignet bei hoher Kostensensibilität und großem Volumen — die Guthabengebühr summiert sich.',
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
            whyItMatters: 'LiteLLMs ca. 57,5k Sterne zeigen Community-Vertrauen und die Wahrscheinlichkeit, dass das Projekt in zwei Jahren noch gepflegt wird — nicht, dass es mehr Funktionen hätte als Portkey oder OpenRouter. Nutzen Sie die Vergleichstabelle, nicht das Verbreitungssignal.',
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
            a: 'OpenRouter listet im August 2026 über 380 Modelle auf der eigenen Website. LiteLLMs Dokumentation nennt über 100 Anbieter-Integrationen — eine andere Einheit, da ein Anbieter viele Modelle bereitstellt. Portkeys Gateway-Repository warb zuvor mit über 1.600 LLMs; diese Zahl sollte angesichts der Übernahme neu geprüft werden.',
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
      description: 'Vergleich von LiteLLM, OpenRouter und Portkey/Prisma AIRS als LLM-API-Gateways: echte Preise, Selbst-Hosting-Optionen, Failover-Kontrolle und die Palo-Alto-Übernahme, die Portkeys Kategorie verändert hat.',
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
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: 'Bestes Gateway ohne Setup — über 380 Modelle mit einem API-Schlüssel, ca. 5,5 % Gebühr auf aufgeladenes Guthaben' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: 'Enterprise-Security-Kauf — 49 $/Monat Production-Tarif, jetzt Teil von Palo Alto Networks Prisma AIRS' },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM vs OpenRouter vs Portkey: mejor gateway LLM 2026',
    seoTitle: 'Mejor gateway de API LLM 2026: LiteLLM vs OpenRouter',
    metaDescription: 'El proxy de LiteLLM es gratis y autoalojado, OpenRouter cobra ~5.5% sobre el saldo que cargas y Portkey ya forma parte de Prisma AIRS de Palo Alto.',
    educationalLevel: 'Advanced',
    audience: 'Desarrolladores que crean aplicaciones LLM multimodelo',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11 min de lectura',
    primaryTerm: 'gateway de API LLM',
    targetKeywords: [
      'mejor gateway LLM 2026',
      'LiteLLM vs OpenRouter',
      'comparativa gateway API LLM',
      'proxy LLM autoalojado',
      'comisiones OpenRouter',
    ],
    leadAnswerBlock: '**LiteLLM es el mejor gateway de API LLM para la mayoría de desarrolladores en 2026: el proxy open source es gratis, autoalojado y enruta más de 100 APIs de proveedores a través de una única interfaz compatible con OpenAI, sin recargo por petición. OpenRouter es la mejor opción si quieres 500+ modelos hoy mismo sin infraestructura: a cambio cobra alrededor del 5.5% sobre las compras de saldo con Stripe. Portkey ya no es un gateway independiente: Palo Alto Networks completó su adquisición el 29 de mayo de 2026 y lo está integrando en la plataforma de seguridad Prisma AIRS.**',
    quickAnswerTop: {
      question: '¿Cuál es el mejor gateway de API LLM en 2026?',
      answer: '**LiteLLM gana para equipos que pueden operar un servicio; OpenRouter gana para los que no.** El núcleo open source de LiteLLM no cuesta nada sin importar el volumen y mantiene bajo tu control la lógica de enrutamiento y la residencia de datos. OpenRouter elimina todo el trabajo de infraestructura y cobra ~5.5% sobre compras de saldo con Stripe (5% con cripto) más una comisión BYOK del 5% por encima de su cupo gratuito. Portkey solo se ofrece ya como el gateway de IA dentro de Prisma AIRS de Palo Alto Networks: evalúalo como una compra de seguridad empresarial, no como una herramienta ligera.',
      bullets: [
        '**Mejor en general:** LiteLLM — gratis, autoalojado, ~57.5k estrellas en GitHub, 100+ APIs de proveedores',
        '**Mejor sin configuración:** OpenRouter — 500+ modelos con una sola API key, comisión ~5.5% sobre el saldo',
        '**Compra de seguridad empresarial:** Portkey / Prisma AIRS — $49/mes en el plan Production, ahora de Palo Alto',
        '**Punto de cruce:** autoalojar gana en cuanto el 5.5% de tu gasto mensual en modelos supera tu factura de hosting del proxy',
        '⚠️ Ninguno de los tres tiene programa público de afiliados o referidos: todos los enlaces aquí son enlaces de producto',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Mejor opción: ¿autoalojar o alquilar?', anchor: 'best-choice' },
      { label: '¿Qué es un gateway de API LLM?', anchor: 'what-is-a-gateway' },
      { label: 'Tabla comparativa completa', anchor: 'comparison' },
      { label: 'La vía autoalojada: LiteLLM', anchor: 'self-hosted-track' },
      { label: 'La vía alojada: OpenRouter y Prisma AIRS', anchor: 'hosted-track' },
      { label: '¿Cuánto cuesta cada gateway a escala?', anchor: 'cost-at-scale' },
      { label: 'Por qué importa el cambio de dueño de Portkey', anchor: 'portkey-acquisition' },
      { label: 'Cómo gestiona cada gateway los fallos', anchor: 'failover' },
      { label: '¿Quién debería usar cada gateway?', anchor: 'who-should-use' },
      { label: 'Contexto regional: UE, Japón y China', anchor: 'regional-context' },
      { label: 'Errores comunes', anchor: 'common-mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto final', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**El proxy open source de LiteLLM es gratis a cualquier volumen**: 100+ APIs de proveedores tras un único endpoint compatible con OpenAI, con seguimiento de gasto, presupuestos y rate limiting incluidos en el plan gratuito.',
          'OpenRouter no cobra suscripción, pero se lleva ~5.5% sobre las compras de saldo con Stripe (mínimo $0.80), 5% con cripto, más una comisión BYOK del 5% por encima de $25,000/mes (pago por uso) o $200,000/mes (empresarial).',
          'Palo Alto Networks adquirió Portkey (operación cerrada el 29 de mayo de 2026) y lo está integrando en Prisma AIRS: trátalo ya como una compra de seguridad empresarial.',
          'El repositorio de LiteLLM en GitHub acumula ~57.5k estrellas y ~11.0k forks en agosto de 2026, la señal pública de adopción más clara de los tres.',
          'OpenRouter lista más de 380 modelos y es el camino más rápido desde el registro hasta una llamada multimodelo funcionando.',
          'El punto de cruce honesto: autoalojar sale más barato en cuanto el 5.5% de tu gasto mensual en modelos supera lo que te cuesta operar el proxy.',
          '**Sáltate el gateway por completo** si llamas a un único proveedor con volumen bajo y predecible y no tienes previsto añadir un segundo.',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 Mejor opción: ¿autoalojar o alquilar el gateway?',
        content: '**Ejecuta LiteLLM tú mismo si tienes dónde hacerlo; usa OpenRouter si no.** Esa única pregunta decide esta compra con más fiabilidad que cualquier lista de funciones, porque los tres ya cubren el trabajo central de un gateway: una API, failover y control de costes.',
        decisionBlock: {
          title: '¿Autoalojar o gateway alojado?',
          localIf: [
            'Ya operas servicios y puedes parchear un proxy: LiteLLM no añade recargo a ningún volumen',
            'Tu gasto mensual en modelos es lo bastante alto como para que un 5% sea dinero real (por encima de unos $500/mes supera la mayoría de facturas de hosting pequeñas)',
            'Necesitas controlar exactamente qué proveedor atiende una petición fallida, por ejemplo para no salir de un límite de residencia de datos en la UE',
            'Necesitas despliegue aislado de red (LiteLLM Enterprise lo soporta explícitamente)',
          ],
          cloudIf: [
            'No tienes capacidad de DevOps y no quieres hacerte cargo de un servicio en marcha',
            'Quieres estar llamando a 500+ modelos dentro de una hora: OpenRouter solo necesita una API key',
            'Tu gasto es lo bastante moderado como para que ese ~5.5% sea irrelevante frente al tiempo que ahorras',
            'Ya compras herramientas de seguridad de Palo Alto Networks y quieres gobernar el gateway dentro de Prisma AIRS',
          ],
          quick: [
            'Gratis y autoalojado → **LiteLLM** (núcleo OSS con licencia Apache, ~57.5k estrellas)',
            'Cero infraestructura, modelos hoy → **OpenRouter** (500+ modelos, comisión ~5.5% sobre saldo)',
            'Gobernanza de seguridad empresarial → **Portkey / Prisma AIRS** ($49/mes Production, Enterprise a medida)',
            'Un proveedor, poco volumen → **ningún gateway**: llama al SDK directamente',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: 'Gratis (núcleo open source)',
            label: 'LiteLLM — empieza gratis (autoalojado)',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: 'Sin suscripción; comisión ~5.5% sobre el saldo',
            label: 'OpenRouter — ver precios',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: '¿Qué es un gateway de API LLM?',
        content: '**Un gateway de API LLM es una capa de enrutamiento entre tu aplicación y varios proveedores de modelos que expone una única API coherente.** En lugar de escribir código de integración distinto para OpenAI, Anthropic, Google y el resto, llamas una vez al gateway y él se encarga del formato específico de cada proveedor, la autenticación, el failover y —en la mayoría de implementaciones— el seguimiento de costes y el rate limiting.\n\nLa ventaja solo existe cuando tienes más de un proveedor en producción. En una aplicación con un único proveedor, el gateway es una capa de abstracción sin beneficio. Usa un gateway si la dispersión de proveedores ya te está costando código pegamento y guardias; sáltatelo si no es el caso.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un gateway de API LLM enruta las llamadas de tu aplicación hacia varios proveedores de modelos mediante una única interfaz compatible con OpenAI, añadiendo failover, seguimiento de costes y rate limiting sobre las APIs originales.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un adaptador de enchufe para modelos de IA. Tu código encaja en una sola toma; el adaptador se ocupa de que cada proveedor tenga una clavija distinta. Si solo usas una clavija, no necesitas adaptador.',
          },
        ],
        note: 'Un gateway no es lo mismo que un runtime local. Si quieres servir modelos en tu propio hardware en lugar de enrutar a proveedores alojados, consulta la [guía de API compatible con OpenAI para LLM locales](/es/local-llms/local-llm-openai-compatible-api) y la [comparativa llama.cpp vs Ollama vs vLLM](/es/local-llms/llamacpp-vs-ollama-vs-vllm): eso son runtimes, y el gateway se sitúa delante de ellos.',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM vs OpenRouter vs Portkey: comparativa completa',
        content: '**Ningún gateway gana en todas las categorías: LiteLLM manda en coste y control, OpenRouter en rapidez de puesta en marcha y Prisma AIRS en gobernanza empresarial.** Precios y detalles de programa verificados en las páginas de cada proveedor el 27 de agosto de 2026: vuelve a comprobarlos si esta página lleva más de 90 días publicada, porque los precios de los gateways se han movido varias veces este año.',
        tableFormat: true,
        columns: ['Factor', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { Factor: 'Mejor para', LiteLLM: 'Equipos que autoalojan y quieren control total sin comisiones', OpenRouter: 'Trabajo multimodelo rápido sin infraestructura', 'Portkey (Prisma AIRS)': 'Empresas que ya compran seguridad de Palo Alto' },
          { Factor: 'Precio', LiteLLM: 'Gratis (núcleo OSS); Enterprise anual a medida', OpenRouter: 'Sin suscripción; ~5.5% con Stripe, 5% con cripto', 'Portkey (Prisma AIRS)': 'Gratis 10k logs/mes; $49/mes Production; Enterprise a medida' },
          { Factor: 'Autoalojamiento', LiteLLM: 'Sí — es su diseño base, más un proxy gestionado opcional', OpenRouter: 'No — solo acceso por API alojada', 'Portkey (Prisma AIRS)': 'Despliegue en nube privada en Enterprise' },
          { Factor: 'Proveedores / modelos', LiteLLM: 'Más de 100 APIs de proveedores', OpenRouter: 'Más de 380 modelos listados', 'Portkey (Prisma AIRS)': 'Su repo anunciaba antes más de 1,600 LLM' },
          { Factor: 'Failover', LiteLLM: 'Sí — cadenas configurables en el plan OSS', OpenRouter: 'Sí — automático, a nivel de plataforma', 'Portkey (Prisma AIRS)': 'Sí — fallbacks y balanceo en todos los planes' },
          { Factor: 'Control de costes', LiteLLM: 'Sí — seguimiento de gasto y presupuestos en OSS', OpenRouter: 'Sí — panel de saldo por petición', 'Portkey (Prisma AIRS)': 'Sí — atribución de coste y presupuestos por clave virtual' },
          { Factor: 'Rate limiting', LiteLLM: 'Sí — plan OSS', OpenRouter: 'Global, a nivel de cuenta (no configurable)', 'Portkey (Prisma AIRS)': 'Control granular en Enterprise' },
          { Factor: 'Programa de afiliados', LiteLLM: 'No encontrado', OpenRouter: 'No encontrado', 'Portkey (Prisma AIRS)': 'No encontrado (el de Palo Alto es B2B)' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Los precios capturados antes de mayo de 2026 ya no describen a Portkey. Confirma las condiciones actuales de Prisma AIRS con Palo Alto Networks antes de citar una cifra de un artículo o captura antiguos.',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: 'La vía autoalojada: por qué LiteLLM es la opción por defecto',
        content: '**LiteLLM es el estándar de facto de la comunidad porque el plan gratuito es el producto entero, no una versión de prueba.** Seguimiento de gasto, presupuestos, rate limiting y cadenas de failover viven en el núcleo open source; el plan Enterprise añade SSO, SCIM, soporte dedicado y despliegue aislado de red, no el enrutamiento en sí.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El proxy open source de LiteLLM llama a más de 100 APIs de proveedores de LLM mediante una interfaz compatible con OpenAI sin coste de licencia ni recargo por petición, a cualquier volumen.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — el mejor gateway en general',
            tagline: 'Gratis, autoalojado, ~57.5k estrellas en GitHub: lo más parecido a un estándar',
            verdict: 'El proxy central de LiteLLM es gratis y open source, y enruta más de 100 APIs de proveedores a través de un endpoint compatible con OpenAI. Es la única opción aquí sin recargo porcentual sobre el gasto en modelos, y eso es lo que la convierte en la más barata en dólares absolutos con volumen relevante. Sus ~57.5k estrellas y ~11.0k forks (agosto de 2026) son la señal pública de mantenimiento más fuerte de las tres herramientas, algo relevante cuando apuestas una capa de enrutamiento en producción a que el proyecto siga vivo dentro de dos años. Lo que sí pagas es operativo: tú ejecutas, monitorizas y actualizas un servicio.',
            pros: [
              'Sin comisión por petición ni porcentaje: gratis a cualquier volumen',
              'Cadenas de failover, presupuestos y rate limits, todo en el plan OSS gratuito',
              'Control total sobre la lógica de enrutamiento y la residencia de datos',
              'El plan Enterprise soporta despliegue aislado de red de forma explícita',
            ],
            cons: [
              'La disponibilidad, los parches y la monitorización del servicio corren de tu cuenta',
              'El precio Enterprise es a medida: no hay cifra publicada con la que presupuestar',
              'Mala elección para un equipo sin ninguna capacidad de DevOps',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: 'Gratis (núcleo OSS); Enterprise anual a medida',
                label: 'LiteLLM — empieza gratis',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'LiteLLM en GitHub',
                productCategory: 'dev-tool',
                priceRange: 'Gratis',
                label: 'Ver el código (BerriAI/litellm)',
              },
            ],
          },
        ],
        note: 'Usa LiteLLM si quieres cero comisiones recurrentes y control total del enrutamiento. Evítalo si nadie del equipo tiene capacidad para operar un proxy: ese coste es real aunque la licencia sea gratuita.',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: 'La vía alojada: OpenRouter y Prisma AIRS',
        content: 'Hay razones honestas, no publicitarias, para alquilar el gateway en lugar de operarlo. Te ahorras trabajo de infraestructura real: disponibilidad, actualizaciones, gestión de secretos y la guardia que acompaña a cualquier servicio en la ruta de las peticiones. Un gateway alojado también te da una cobertura de proveedores que de otro modo integrarías uno a uno.\n\n**A cambio pagas una comisión porcentual que crece con el gasto y pierdes control granular sobre el failover.** Es un buen trato con volumen moderado y uno malo con volumen alto: la [sección de costes](#cost-at-scale) da la aritmética exacta del punto de cruce.',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — el mejor gateway sin configuración',
            tagline: '500+ modelos con una API key y ningún servidor que mantener',
            verdict: 'OpenRouter es el camino más rápido desde cero hasta una aplicación multimodelo funcionando: te registras, coges una API key y llamas el mismo día a más de 380 modelos listados. No hay suscripción: la comisión está en cargar la cuenta, en torno al 5.5% sobre compras de saldo con Stripe (mínimo $0.80) o 5% con cripto. Su comisión BYOK del 5% solo se aplica cuando el gasto mensual enrutado por BYOK supera $25,000 (pago por uso) o $200,000 (plan empresarial), así que un uso ligero no paga nada extra ahí. El failover es automático pero a nivel de plataforma: si un proveedor falla, OpenRouter puede enrutar a un modelo equivalente sin que tú configures la cadena.',
            pros: [
              'Cero infraestructura: una API key es toda la puesta en marcha',
              'Más de 380 modelos listados, muchos más de los que integrarías a mano',
              'Sin suscripción; el uso ligero de BYOK se queda dentro del cupo gratuito',
              'Failover automático entre proveedores sin configuración',
            ],
            cons: [
              'La comisión de ~5.5% se acumula y se vuelve cara con volumen alto',
              'El rate limiting es global y a nivel de cuenta, no configurable por ti',
              'Menos control sobre qué proveedor atiende una petición fallida, un problema con reglas estrictas de residencia de datos',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'Sin suscripción; ~5.5% sobre compras de saldo con Stripe',
                label: 'OpenRouter — ver precios',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'Documentación de comisiones de OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'Consulta gratuita',
                label: 'Consultar las comisiones actuales',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — la compra de seguridad empresarial',
            tagline: 'Ahora es el gateway de IA dentro de la plataforma de seguridad de Palo Alto Networks',
            verdict: 'Portkey sigue haciendo el trabajo de gateway: fallbacks automáticos, balanceo de carga, atribución de costes y presupuestos por clave virtual en todos los planes, con un plan Developer gratuito de 10,000 logs/mes y un plan Production de $49/mes con 100,000 logs/mes. Lo que cambió es la categoría: desde que Palo Alto Networks cerró la adquisición el 29 de mayo de 2026, se posiciona como el gateway de IA dentro de la plataforma de seguridad Prisma AIRS y no como un router independiente. Encaja bien si ya estás comprando gobernanza de IA empresarial y encaja mal si querías una herramienta ágil e independiente.',
            pros: [
              'Fallbacks y balanceo de carga en todos los planes, incluido el gratuito',
              'Atribución de costes y presupuestos por clave virtual integrados',
              'Despliegue en nube privada disponible en Enterprise',
              'Combina el enrutamiento del gateway con gobernanza de seguridad de IA más amplia',
            ],
            cons: [
              'Ya no es independiente: hoja de ruta y precios siguen a un gran proveedor de seguridad',
              'Los precios y la estructura de planes anteriores a mayo de 2026 pueden estar desfasados',
              'Mala elección si la neutralidad de proveedor era parte de por qué querías un gateway',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: 'Plan gratuito; $49/mes Production; Enterprise a medida',
                label: 'Portkey — empieza gratis (10k logs/mes)',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: 'Precio empresarial a medida',
                label: 'Prisma AIRS — ver planes',
              },
            ],
          },
        ],
        note: 'Usa OpenRouter si «que siga funcionando cualquier modelo comparable» es una política de failover aceptable. Evítalo si necesitas garantías contractuales sobre qué proveedor exacto absorbe el tráfico de desbordamiento.',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: '¿Cuánto cuesta cada gateway a escala?',
        content: '**El núcleo open source de LiteLLM sigue siendo gratis sin importar el volumen; el coste de OpenRouter es un porcentaje de cada dólar que cargas; el de Portkey escala con el volumen de logs y las condiciones del contrato.** La tabla siguiente es aritmética directa sobre la comisión publicada de ~5.5% de OpenRouter: no es una estimación, y es la cifra que decide esta compra.\n\nNo damos deliberadamente una cifra en dólares para operar LiteLLM: el proxy es un servicio pequeño y permanente, y lo que cuesta depende por completo de dónde lo ejecutes. Pon tu propia factura de hosting en la última columna y la decisión se resuelve sola.\n\nNota para lectores en España y Latinoamérica: los tres proveedores facturan en dólares estadounidenses. No existe lista de precios en euros ni en moneda local, así que a tu extracto se suman el tipo de cambio y, según tu banco, una comisión por divisa extranjera.',
        tableFormat: true,
        columns: ['Gasto mensual en modelos', 'Comisión OpenRouter (~5.5%)', 'Coste de licencia LiteLLM', 'Autoalojar gana por debajo de'],
        rows: [
          { 'Gasto mensual en modelos': '$200', 'Comisión OpenRouter (~5.5%)': '~$11/mes (~$132/año)', 'Coste de licencia LiteLLM': '$0', 'Autoalojar gana por debajo de': '$11/mes' },
          { 'Gasto mensual en modelos': '$500', 'Comisión OpenRouter (~5.5%)': '~$27.50/mes (~$330/año)', 'Coste de licencia LiteLLM': '$0', 'Autoalojar gana por debajo de': '$27.50/mes' },
          { 'Gasto mensual en modelos': '$2,000', 'Comisión OpenRouter (~5.5%)': '~$110/mes (~$1,320/año)', 'Coste de licencia LiteLLM': '$0', 'Autoalojar gana por debajo de': '$110/mes' },
          { 'Gasto mensual en modelos': '$10,000', 'Comisión OpenRouter (~5.5%)': '~$550/mes (~$6,600/año)', 'Coste de licencia LiteLLM': '$0', 'Autoalojar gana por debajo de': '$550/mes' },
        ],
        callouts: [
          {
            type: 'info',
            text: 'La comisión se aplica al saldo que compras, no a cada petición, y la comisión BYOK separada del 5% solo empieza por encima de $25,000/mes de gasto enrutado por BYOK (pago por uso) o $200,000/mes (empresarial). Por debajo de ese cupo, BYOK no añade nada.',
          },
        ],
        note: 'Usa LiteLLM si tu gasto mensual en modelos es lo bastante alto como para que un recargo del 5% pese en términos absolutos. Usa OpenRouter si la comisión cuesta menos que las horas de ingeniería de operar un proxy. Para esta misma aritmética aplicada al hardware, consulta la [calculadora de costes de LLM locales](/es/local-llms/local-llm-cost-calculator-build-vs-rent-2026).',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'Por qué el cambio de dueño de Portkey importa para esta decisión',
        content: '**Portkey ya no es un producto independiente: Palo Alto Networks cerró su adquisición el 29 de mayo de 2026 y lo está integrando en la plataforma de seguridad Prisma AIRS.** Esto no es un cambio de marca. Un gateway que adoptas hoy como herramienta ligera puede reajustar precios, cambiar de alcance o pasar a venderse solo dentro de una suite de seguridad mayor en un único ciclo de producto.\n\nSi estabas evaluando Portkey precisamente por ser un producto ágil de startup, esa premisa ya no se sostiene. Verifica las condiciones actuales directamente con Palo Alto Networks antes de comprometerte: los productos adquiridos cambian precios, estructura de planes y modelos de soporte con frecuencia en los primeros 6–12 meses de integración.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Palo Alto Networks completó la adquisición de Portkey el 29 de mayo de 2026 y lo está integrando como el gateway de IA dentro de la plataforma de seguridad Prisma AIRS.',
          },
        ],
        note: 'Usa Portkey / Prisma AIRS si quieres el enrutamiento del gateway junto a una gobernanza de seguridad de IA que ibas a comprar de todos modos. Evítalo si la independencia respecto a la hoja de ruta de un gran proveedor de seguridad importa para tu arquitectura.',
      },
      failover: {
        id: 'failover',
        title: '¿Cómo gestiona cada gateway el failover?',
        content: '**Los tres soportan failover automático cuando un proveedor falla; la diferencia está en quién escribe la política de failover.** LiteLLM y Portkey te permiten definir cadenas de failover y reglas de balanceo en una configuración que tú controlas. OpenRouter lo resuelve a nivel de plataforma: si un proveedor da error, puede enrutar automáticamente a un modelo equivalente, con menos control granular sobre cuál.',
        items: [
          '**LiteLLM** — cadenas de failover definidas en tu propia configuración; el mayor control sobre qué modelo de reserva atiende una petición fallida',
          '**Portkey / Prisma AIRS** — fallbacks automáticos y balanceo de carga disponibles en todos los planes, configurados en la plataforma',
          '**OpenRouter** — failover automático entre proveedores a nivel de plataforma; ninguna cadena que configurar y ninguna garantía sobre qué proveedor toma el relevo',
        ],
        note: 'Para equipos con un requisito estricto sobre qué modelo de reserva atiende una petición fallida —por ejemplo, no salir de un límite de residencia de datos en la UE—, la configuración autoalojada de LiteLLM es la única de las tres que te deja escribir esa política.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '¿Quién debería usar cada gateway?',
        content: '**Los desarrolladores con infraestructura deberían optar por defecto por LiteLLM; los equipos que quieren acceso multimodelo sin operaciones, por OpenRouter; las empresas dentro de un stack de Palo Alto, por Prisma AIRS.** Más allá de esa división, deciden el tamaño del equipo, los requisitos de cumplimiento y la tolerancia a la carga operativa.',
        items: [
          '**Desarrolladores en solitario y startups pequeñas prototipando con varios modelos** → OpenRouter. Una API key, 500+ modelos y ningún servidor que cuidar. Sáltatelo si eres muy sensible al coste con volumen alto: la comisión se acumula.',
          '**Equipos de plataforma con aplicaciones multimodelo en producción** → LiteLLM autoalojado. Gratis, es el estándar de la comunidad y mantienes el control del enrutamiento y la residencia de datos. Evítalo sin capacidad para operar un servicio.',
          '**Empresas que ya adquieren productos de Palo Alto Networks** → Portkey dentro de Prisma AIRS. Ahora se entrega como capa de gobernanza y seguridad, así que la propuesta es distinta de la de hace un año.',
          '**Sectores regulados que necesitan despliegue aislado de red** → LiteLLM Enterprise lo soporta explícitamente; verifica las opciones actuales de despliegue de Prisma AIRS directamente con Palo Alto Networks, porque las integraciones tras una adquisición cambian la oferta a corto plazo. Consulta también [cumplimiento empresarial con LLM locales](/es/local-llms/enterprise-compliance-local-llms).',
          '**Equipos que llaman a un proveedor con poco volumen** → ningún gateway. Llama al SDK directamente y revísalo cuando añadas un segundo proveedor.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Gateways LLM en la UE, Japón y China',
        content: 'Dónde se ejecuta el gateway decide adónde van tus prompts. Eso convierte la elección de gateway en una decisión de cumplimiento en tres mercados grandes, no solo en una cuestión de coste.',
        subsections: [
          {
            title: 'Unión Europea',
            content: 'Un gateway alojado enruta el contenido de los prompts al proveedor que él seleccione, y si ese proveedor está fuera del EEE puede constituir una transferencia internacional bajo los artículos 44–49 del RGPD. Una instancia autoalojada de LiteLLM te permite fijar la cadena de failover únicamente a endpoints de la región UE y registrar exactamente qué salió del perímetro, que es también lo que hace defendible en una auditoría la minimización de datos del artículo 5. En España, la AEPD espera que esa política de enrutamiento esté documentada y forzada técnicamente, no delegada en la sustitución automática de modelos que haga un proveedor.',
          },
          {
            title: 'Japón',
            content: 'El programa de gobernanza de IA y soberanía nacional de IA del METI empuja a las empresas japonesas hacia la inferencia on-premises y rutas de datos auditables. Un gateway autoalojado encaja directamente con esa postura: LiteLLM puede situarse delante de servidores de modelos domésticos que ejecutan Qwen2.5 o pesos de la familia Llama junto a proveedores alojados, manteniendo el tráfico regulado en infraestructura dentro de Japón y dando a los desarrolladores una sola API. Un gateway exclusivamente alojado con sustitución automática de proveedor es más difícil de conciliar con ese requisito.',
          },
          {
            title: 'China',
            content: 'Bajo la Ley de Seguridad de Datos (数据安全法) y las normas de la CAC sobre transferencia transfronteriza, el problema de cumplimiento es enrutar el contenido de los prompts a proveedores de modelos extranjeros, no el gateway en sí. Los despliegues que sirven a usuarios de China continental suelen ejecutar el gateway en infraestructura doméstica y enrutar solo a modelos locales conformes como Qwen2.5 o Baichuan. El proxy autoalojado de LiteLLM es la opción viable aquí; el enrutamiento automático de OpenRouter hacia el proveedor que esté disponible es exactamente el comportamiento que las normas de la CAC no permiten.',
          },
        ],
        note: 'Usa un gateway autoalojado en cualquier mercado donde tengas que poder declarar por escrito qué proveedor atendió cada petición. Usa uno alojado donde no se aplique ninguna restricción de transferencia internacional a tus datos.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al elegir un gateway LLM',
        numberedItems: [
          {
            title: 'Dar por hecho que «gateway» significa lo mismo en las tres herramientas',
            whyItMatters: 'LiteLLM es un proxy autoalojado, OpenRouter es una API alojada y Portkey ya forma parte de una plataforma de seguridad. Lee la página de producto actual de cada proveedor antes de comparar funciones: no asumas paridad.',
          },
          {
            title: 'Elegir OpenRouter para producción de alto volumen sin modelar la comisión',
            whyItMatters: 'Con $10,000/mes de gasto en modelos, la comisión de ~5.5% son unos $550 al mes, o $6,600 al año. Haz esa cuenta con tu gasto real, no solo con el factor comodidad.',
          },
          {
            title: 'Adoptar un gateway antes de tener un segundo proveedor en producción',
            whyItMatters: 'El valor central de un gateway es el enrutamiento multiproveedor con failover. Con un modelo de un proveedor estás añadiendo una capa de abstracción, un nuevo modo de fallo y una curva de aprendizaje sin ninguna ganancia todavía.',
          },
          {
            title: 'Citar precios de Portkey capturados antes de mayo de 2026',
            whyItMatters: 'Las páginas de precios y los artículos anteriores a la adquisición por Palo Alto pueden no reflejar las condiciones actuales de Prisma AIRS. Confírmalo con el proveedor antes de basar una decisión de compra en una captura antigua.',
          },
          {
            title: 'Tratar las estrellas de GitHub como una comparativa de funciones',
            whyItMatters: 'Las ~57.5k estrellas de LiteLLM indican confianza de la comunidad y probabilidad de que el proyecto siga mantenido dentro de dos años, no que tenga más funciones que Portkey u OpenRouter. Mira la tabla comparativa, no la señal de adopción.',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: 'Sáltate el gateway por completo si…',
        content: '**Si llamas a un único proveedor de LLM con volumen bajo y predecible y no tienes previsto añadir un segundo a corto plazo, sáltate los tres.** Un gateway añade complejidad operativa (autoalojado) o una comisión porcentual (alojado) a cambio de un beneficio multiproveedor que todavía no estás usando.\n\nLlama directamente al SDK del proveedor y revisa esta decisión el día en que realmente añadas un segundo modelo o proveedor. La misma lógica se aplica un nivel más abajo: si aún estás decidiendo si llamar a APIs alojadas siquiera, lee primero [LLM locales vs APIs en la nube](/es/local-llms/local-llms-vs-cloud-apis): el gateway más barato es el que nunca necesitaste.',
        callouts: [
          {
            type: 'tip',
            text: 'Un disparador útil: añade un gateway la primera vez que escribas en tu propio código una bifurcación específica por proveedor. Ese condicional es el código pegamento que un gateway existe para eliminar.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es un gateway de API LLM?',
            a: 'Es una capa de enrutamiento que da a tu aplicación una única API coherente para llamar a varios proveedores de LLM, y que normalmente añade failover, seguimiento de costes y rate limiting sobre las APIs originales. Tú llamas al gateway; él gestiona el formato específico de cada proveedor y la autenticación. El beneficio solo se materializa cuando tienes más de un proveedor en producción.',
          },
          {
            q: '¿LiteLLM es realmente gratis?',
            a: 'El núcleo open source es gratis y autoalojado, sin coste de licencia, según la propia página de precios de LiteLLM en agosto de 2026. No hay recargo por petición a ningún volumen. El plan Enterprise —SSO, SCIM, soporte dedicado y despliegue aislado de red— tiene precio anual a medida según tu volumen de peticiones e incluye una prueba de 30 días.',
          },
          {
            q: '¿OpenRouter cobra por petición?',
            a: 'No directamente. La comisión de OpenRouter está en cargar la cuenta: en torno al 5.5% sobre compras de saldo con Stripe con un mínimo de $0.80, o 5% con cripto. Una comisión BYOK separada del 5% se aplica solo cuando el gasto mensual enrutado por BYOK supera $25,000 en pago por uso o $200,000 en el plan empresarial.',
          },
          {
            q: '¿Portkey sigue siendo una empresa independiente?',
            a: 'No. Palo Alto Networks completó la adquisición de Portkey el 29 de mayo de 2026 y lo está integrando como el gateway de IA central de su plataforma de seguridad Prisma AIRS, según la nota de prensa de la propia Palo Alto Networks. Trata cualquier información de precios o de hoja de ruta anterior a mayo de 2026 como potencialmente desfasada.',
          },
          {
            q: '¿Qué gateway soporta más proveedores?',
            a: 'OpenRouter lista más de 380 modelos en su propio sitio en agosto de 2026. La documentación de LiteLLM describe más de 100 integraciones de proveedores, que es una unidad distinta, ya que un proveedor expone muchos modelos. El repositorio de Portkey anunciaba antes más de 1,600 LLM, aunque esa cifra debería reverificarse tras la adquisición.',
          },
          {
            q: '¿Puedo autoalojar Portkey?',
            a: 'Portkey/Prisma AIRS ofrecía despliegue en nube privada en el plan Enterprise según las páginas de precios previas a la adquisición. Confirma las condiciones actuales de autoalojamiento directamente con Palo Alto Networks, porque las integraciones tras una adquisición cambian con frecuencia las opciones de despliegue durante el primer año.',
          },
          {
            q: '¿Alguno de los tres tiene programa de afiliados?',
            a: 'En agosto de 2026 no se encontró ningún programa público y verificable de afiliados o referidos para LiteLLM, Portkey ni OpenRouter. Todos los enlaces de producto de esta página son enlaces simples y declarados que no generan ingresos a PromptQuorum. Si eso cambia, actualizaremos la página con una declaración acorde a las condiciones reales del programa.',
          },
          {
            q: '¿Cómo decido entre autoalojar y usar un gateway alojado?',
            a: 'Compara el 5.5% de tu gasto mensual en modelos con lo que te cuesta operar un servicio pequeño y permanente. Por debajo de ese punto de cruce, OpenRouter sale más barato una vez cuentas tu tiempo; por encima, gana LiteLLM autoalojado en dólares absolutos. Añade una segunda prueba de cumplimiento: si tienes que poder declarar qué proveedor atendió una petición, autoaloja al margen de la aritmética.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto final',
        items: [
          '**Usa LiteLLM si** puedes autoalojar y quieres cero comisiones recurrentes con control total del enrutamiento — siguiente paso: despliega el proxy open source y apunta la URL base de tu aplicación a él.',
          '**Usa OpenRouter si** quieres acceso multimodelo hoy sin infraestructura — siguiente paso: crea una API key y carga la cuenta, presupuestando la comisión de ~5.5%.',
          '**Usa Portkey / Prisma AIRS si** ya compras herramientas de seguridad de Palo Alto Networks y quieres el enrutamiento del gateway incluido — siguiente paso: contacta con Palo Alto Networks para reverificar las condiciones actuales tras la adquisición.',
          '**Sáltate los tres si** llamas a un único proveedor con poco volumen y sin planes multiproveedor a corto plazo — siguiente paso: revísalo cuando añadas un segundo proveedor.',
        ],
        note: 'Los enlaces de producto de esta página llevan al sitio propio de cada proveedor. PromptQuorum no mantiene ninguna relación de afiliación con LiteLLM, OpenRouter ni Portkey / Palo Alto Networks, y no gana nada con estos enlaces.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'Página oficial de precios de LiteLLM', description: 'Desglose de los planes open source y Enterprise, directamente del proveedor.' },
          { url: 'https://github.com/BerriAI/litellm', title: 'BerriAI/litellm en GitHub', description: 'Estrellas y forks del repositorio, licencia y descripción de funciones.' },
          { url: 'https://openrouter.ai/docs/faq', title: 'Preguntas frecuentes de OpenRouter', description: 'Porcentajes de comisión sobre compras de saldo y tramos de la comisión BYOK, directamente del proveedor.' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'Documentación de límites de la API de OpenRouter', description: 'Límites de tasa del plan gratuito y reglas de acceso basado en saldo.' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'Palo Alto Networks completa la adquisición de Portkey', description: 'Fecha de cierre de la adquisición y plan de integración en Prisma AIRS.' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'Portkey-AI/gateway en GitHub', description: 'Repositorio open source del gateway y cifras declaradas de proveedores.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Ejecuta una API compatible con OpenAI sobre un LLM local](/es/local-llms/local-llm-openai-compatible-api) — el runtime delante del cual se sitúa un gateway',
          '[LLM locales vs APIs en la nube: a cuál llamar](/es/local-llms/local-llms-vs-cloud-apis) — decide esto antes de elegir gateway',
          '[El stack de desarrollo para LLM locales](/es/local-llms/local-llm-developer-stack) — dónde encaja un gateway en la cadena de herramientas',
          '[Comparativa de alquiler de GPU en la nube 2026](/es/local-llms/cloud-gpu-rental-comparison-2026) — alquilar cómputo en lugar de enrutar a modelos alojados',
          '[Calculadora de coste: comprar o alquilar para LLM locales](/es/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — la misma aritmética aplicada al hardware',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM vs OpenRouter vs Portkey: mejor gateway LLM 2026',
      description: 'Comparativa de LiteLLM, OpenRouter y Portkey/Prisma AIRS como gateways de API LLM: precios reales, opciones de autoalojamiento, control del failover y la adquisición de Palo Alto que cambió la categoría de Portkey.',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/es/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'es',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Gateway de API LLM' },
        { '@type': 'Thing', name: 'Enrutamiento multimodelo' },
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
      inLanguage: 'es',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es un gateway de API LLM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una capa de enrutamiento que da a tu aplicación una única API coherente para llamar a varios proveedores de LLM, añadiendo failover, seguimiento de costes y rate limiting sobre las APIs originales.',
          },
        },
        {
          '@type': 'Question',
          name: '¿LiteLLM es realmente gratis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El núcleo open source es gratis y autoalojado, sin coste de licencia ni recargo por petición a ningún volumen, según su propia página de precios en agosto de 2026. El plan Enterprise tiene precio anual a medida.',
          },
        },
        {
          '@type': 'Question',
          name: '¿OpenRouter cobra por petición?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. OpenRouter cobra alrededor del 5.5% sobre compras de saldo con Stripe (mínimo $0.80) o 5% con cripto, más una comisión BYOK del 5% solo por encima de $25,000/mes de gasto enrutado por BYOK en pago por uso, o $200,000/mes en empresarial.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Portkey sigue siendo una empresa independiente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Palo Alto Networks completó la adquisición el 29 de mayo de 2026 y está integrando Portkey como el gateway de IA dentro de la plataforma de seguridad Prisma AIRS.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo decido entre autoalojar y usar un gateway LLM alojado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Compara el 5.5% de tu gasto mensual en modelos con el coste de operar un servicio pequeño y permanente. Por encima de ese punto de cruce gana LiteLLM autoalojado; por debajo gana OpenRouter una vez cuentas tu tiempo.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mejores gateways de API LLM (agosto de 2026)',
      inLanguage: 'es',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: 'Mejor en general — proxy open source gratuito y autoalojado, 100+ APIs de proveedores, sin recargo por petición' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: 'Mejor gateway sin configuración — 500+ modelos con una API key, comisión ~5.5% sobre el saldo cargado' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: 'Compra de seguridad empresarial — plan Production de $49/mes, ahora parte de Prisma AIRS de Palo Alto Networks' },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM vs OpenRouter vs Portkey : meilleure passerelle LLM 2026',
    seoTitle: 'Meilleure passerelle API LLM 2026 : LiteLLM ou OpenRouter',
    metaDescription: 'Le proxy LiteLLM est gratuit et auto-heberge, OpenRouter prend environ 5,5 % sur le credit achete, et Portkey appartient desormais a Prisma AIRS de Palo Alto. Aout 2026.',
    educationalLevel: 'Advanced',
    audience: 'Developpeurs construisant des applications LLM multi-modeles',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11 min de lecture',
    primaryTerm: 'passerelle API LLM',
    targetKeywords: [
      'meilleure passerelle LLM 2026',
      'LiteLLM vs OpenRouter',
      'comparatif passerelle API LLM',
      'proxy LLM auto-heberge',
      'frais OpenRouter',
    ],
    leadAnswerBlock: '**LiteLLM est la meilleure passerelle API LLM pour la plupart des developpeurs en 2026 : le proxy open source est gratuit, auto-heberge et route plus de 100 API de fournisseurs via une seule interface compatible OpenAI, sans majoration par requete. OpenRouter est le meilleur choix si vous voulez plus de 380 modeles des aujourd\'hui sans aucune infrastructure : il preleve environ 5,5 % sur les achats de credit via Stripe. Portkey n\'est plus une passerelle independante : Palo Alto Networks a finalise son acquisition le 29 mai 2026 et l\'integre a la plateforme de securite Prisma AIRS.**',
    quickAnswerTop: {
      question: 'Quelle est la meilleure passerelle API LLM en 2026 ?',
      answer: '**LiteLLM gagne pour les equipes capables d\'exploiter un service ; OpenRouter pour celles qui ne le peuvent pas.** Le coeur open source de LiteLLM ne coute rien quel que soit le volume et garde la logique de routage et la residence des donnees sous votre controle. OpenRouter supprime tout le travail d\'infrastructure et facture environ 5,5 % sur les achats de credit via Stripe (5 % en crypto), plus des frais BYOK de 5 % au-dela de son quota gratuit. Portkey n\'est plus disponible que comme passerelle IA au sein de Prisma AIRS de Palo Alto Networks : evaluez-le comme un achat de securite d\'entreprise, pas comme un outil leger.',
      bullets: [
        '**Meilleur choix global :** LiteLLM — gratuit, auto-heberge, environ 57,5k etoiles GitHub, plus de 100 API de fournisseurs',
        '**Meilleur sans configuration :** OpenRouter — plus de 380 modeles avec une seule cle API, frais d\'environ 5,5 % sur le credit',
        '**Achat securite d\'entreprise :** Portkey / Prisma AIRS — 49 $/mois en Production, desormais Palo Alto',
        '**Point de bascule :** l\'auto-hebergement gagne des que 5,5 % de vos depenses mensuelles en modeles depassent votre facture d\'hebergement du proxy',
        '⚠️ Aucun des trois n\'a de programme d\'affiliation public : tous les liens ci-dessous sont de simples liens produit',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: 'L\'essentiel', anchor: 'tldr' },
      { label: 'Meilleur choix : auto-heberger ou louer ?', anchor: 'best-choice' },
      { label: 'Qu\'est-ce qu\'une passerelle API LLM ?', anchor: 'what-is-a-gateway' },
      { label: 'Tableau comparatif complet', anchor: 'comparison' },
      { label: 'La voie auto-hebergee : LiteLLM', anchor: 'self-hosted-track' },
      { label: 'La voie hebergee : OpenRouter et Prisma AIRS', anchor: 'hosted-track' },
      { label: 'Combien coute chaque passerelle a l\'echelle ?', anchor: 'cost-at-scale' },
      { label: 'Pourquoi le changement de proprietaire de Portkey compte', anchor: 'portkey-acquisition' },
      { label: 'Comment chaque passerelle gere les pannes', anchor: 'failover' },
      { label: 'Qui devrait utiliser quelle passerelle ?', anchor: 'who-should-use' },
      { label: 'Contexte regional : UE, Japon, Chine', anchor: 'regional-context' },
      { label: 'Erreurs courantes', anchor: 'common-mistakes' },
      { label: 'Questions frequentes', anchor: 'faq' },
      { label: 'Verdict final', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associees', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**Le proxy open source de LiteLLM est gratuit quel que soit le volume** — plus de 100 API de fournisseurs derriere un unique point de terminaison compatible OpenAI, avec suivi des depenses, budgets et limitation de debit inclus dans l\'offre gratuite.',
          'OpenRouter ne facture aucun abonnement mais preleve environ 5,5 % sur les achats de credit via Stripe (minimum 0,80 $), 5 % en crypto, plus des frais BYOK de 5 % au-dela de 25 000 $/mois (paiement a l\'usage) ou 200 000 $/mois (entreprise).',
          'Portkey a ete rachete par Palo Alto Networks (operation finalisee le 29 mai 2026) et est integre a Prisma AIRS : traitez-le desormais comme un achat de securite d\'entreprise.',
          'Le depot GitHub de LiteLLM compte environ 57,5k etoiles et 11,0k forks en aout 2026 — le signal d\'adoption publique le plus clair des trois.',
          'OpenRouter liste plus de 380 modeles et constitue le chemin le plus rapide entre l\'inscription et un appel multi-modeles fonctionnel.',
          'Le vrai point de bascule : l\'auto-hebergement devient moins cher des que 5,5 % de vos depenses mensuelles en modeles depassent le cout d\'exploitation du proxy.',
          '**Passez completement de la passerelle** si vous appelez un seul fournisseur a volume faible et previsible, sans projet d\'en ajouter un second.',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 Meilleur choix : auto-heberger ou louer la passerelle ?',
        content: '**Exploitez LiteLLM vous-meme si vous avez ou l\'heberger ; sinon utilisez OpenRouter.** Cette seule question tranche l\'achat plus surement que n\'importe quelle liste de fonctionnalites, car les trois outils couvrent deja le travail central d\'une passerelle : une API, du failover, un suivi des couts.',
        decisionBlock: {
          title: 'Auto-heberger ou passerelle hebergee ?',
          localIf: [
            'Vous exploitez deja des services et pouvez maintenir un proxy — LiteLLM n\'ajoute aucune majoration, quel que soit le volume',
            'Vos depenses mensuelles en modeles sont assez elevees pour que 5 % represente une somme reelle (au-dela d\'environ 500 $/mois, cela depasse la plupart des petites factures d\'hebergement)',
            'Vous devez controler precisement quel fournisseur traite une requete echouee, par exemple pour rester dans une frontiere de residence des donnees de l\'UE',
            'Vous avez besoin d\'un deploiement isole du reseau (LiteLLM Enterprise le prend en charge explicitement)',
          ],
          cloudIf: [
            'Vous n\'avez pas de capacite DevOps et ne voulez pas assumer un service en fonctionnement',
            'Vous voulez appeler plus de 380 modeles dans l\'heure — OpenRouter ne demande qu\'une cle API',
            'Vos depenses sont assez modestes pour que ces 5,5 % pesent peu face au temps gagne',
            'Vous achetez deja des outils de securite Palo Alto Networks et voulez gouverner la passerelle dans Prisma AIRS',
          ],
          quick: [
            'Gratuit et auto-heberge → **LiteLLM** (coeur open source sous licence Apache, environ 57,5k etoiles)',
            'Zero infrastructure, des modeles aujourd\'hui → **OpenRouter** (plus de 380 modeles, frais d\'environ 5,5 %)',
            'Gouvernance securite d\'entreprise → **Portkey / Prisma AIRS** (49 $/mois Production, Enterprise sur devis)',
            'Un fournisseur, faible volume → **aucune passerelle** : appelez directement le SDK',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: 'Gratuit (coeur open source)',
            label: 'LiteLLM — demarrer gratuitement (auto-heberge)',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: 'Sans abonnement ; frais d\'environ 5,5 % sur le credit',
            label: 'OpenRouter — voir les tarifs',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: 'Qu\'est-ce qu\'une passerelle API LLM ?',
        content: '**Une passerelle API LLM est une couche de routage entre votre application et plusieurs fournisseurs de modeles, qui expose une API unique et coherente.** Au lieu d\'ecrire du code d\'integration distinct pour OpenAI, Anthropic, Google et tous les autres, vous appelez la passerelle une fois et elle gere le format propre a chaque fournisseur, l\'authentification, le failover et — dans la plupart des implementations — le suivi des couts et la limitation de debit.\n\nLe benefice n\'existe qu\'a partir du moment ou plus d\'un fournisseur est en production. Dans une application a fournisseur unique, la passerelle est une couche d\'abstraction sans contrepartie. Adoptez-en une si la dispersion des fournisseurs vous coute deja du code de liaison et des astreintes ; sinon, passez votre chemin.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Une passerelle API LLM route les appels de votre application vers plusieurs fournisseurs de modeles via une interface unique compatible OpenAI, en ajoutant failover, suivi des couts et limitation de debit par-dessus les API d\'origine.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un adaptateur de prise pour modeles d\'IA. Votre code se branche sur une seule prise ; l\'adaptateur gere le fait que chaque fournisseur a une fiche differente. Si vous n\'utilisez qu\'une seule fiche, l\'adaptateur ne sert a rien.',
          },
        ],
        note: 'Une passerelle n\'est pas un runtime local. Si vous voulez servir des modeles sur votre propre materiel plutot que router vers des fournisseurs heberges, consultez le [guide de l\'API compatible OpenAI pour LLM locaux](/fr/local-llms/local-llm-openai-compatible-api) et le [comparatif llama.cpp vs Ollama vs vLLM](/fr/local-llms/llamacpp-vs-ollama-vs-vllm) : ce sont des runtimes, devant lesquels une passerelle se place.',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM vs OpenRouter vs Portkey : le comparatif complet',
        content: '**Aucune passerelle ne gagne dans toutes les categories : LiteLLM domine sur le cout et le controle, OpenRouter sur la rapidite de mise en place, Prisma AIRS sur la gouvernance d\'entreprise.** Tarifs et details verifies sur les pages des editeurs le 27 aout 2026 ; verifiez a nouveau si cette page est en ligne depuis plus de 90 jours, les tarifs des passerelles ayant bouge plusieurs fois cette annee.',
        tableFormat: true,
        columns: ['Critere', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { Critere: 'Ideal pour', LiteLLM: 'Equipes auto-hebergeant, controle total, sans frais', OpenRouter: 'Travail multi-modeles rapide sans infrastructure', 'Portkey (Prisma AIRS)': 'Entreprises achetant deja de la securite Palo Alto' },
          { Critere: 'Tarif', LiteLLM: 'Gratuit (OSS) ; Enterprise annuel sur devis', OpenRouter: 'Sans abonnement ; environ 5,5 % Stripe, 5 % crypto', 'Portkey (Prisma AIRS)': 'Gratuit 10k logs/mois ; 49 $/mois Production ; Enterprise sur devis' },
          { Critere: 'Auto-hebergement', LiteLLM: 'Oui — conception de base, plus un proxy gere en option', OpenRouter: 'Non — acces API heberge uniquement', 'Portkey (Prisma AIRS)': 'Deploiement cloud prive en Enterprise' },
          { Critere: 'Fournisseurs / modeles', LiteLLM: 'Plus de 100 API de fournisseurs', OpenRouter: 'Plus de 500 modeles listes', 'Portkey (Prisma AIRS)': 'Le depot annoncait plus de 1 600 LLM' },
          { Critere: 'Failover', LiteLLM: 'Oui — chaines configurables dans l\'offre OSS', OpenRouter: 'Oui — automatique, au niveau plateforme', 'Portkey (Prisma AIRS)': 'Oui — fallbacks et repartition sur toutes les offres' },
          { Critere: 'Suivi des couts', LiteLLM: 'Oui — depenses et budgets dans l\'offre OSS', OpenRouter: 'Oui — tableau de bord du credit par requete', 'Portkey (Prisma AIRS)': 'Oui — attribution des couts, budgets par cle virtuelle' },
          { Critere: 'Limitation de debit', LiteLLM: 'Oui — offre OSS', OpenRouter: 'Globale, au niveau du compte (non configurable)', 'Portkey (Prisma AIRS)': 'Controle granulaire en Enterprise' },
          { Critere: 'Programme d\'affiliation', LiteLLM: 'Aucun trouve', OpenRouter: 'Aucun trouve', 'Portkey (Prisma AIRS)': 'Aucun trouve (celui de Palo Alto est B2B)' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Les tarifs releves avant mai 2026 ne decrivent plus Portkey. Faites confirmer les conditions actuelles de Prisma AIRS par Palo Alto Networks avant de citer un chiffre issu d\'un article ou d\'une capture anciens.',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: 'La voie auto-hebergee : pourquoi LiteLLM est le choix par defaut',
        content: '**LiteLLM est le standard de fait de la communaute parce que l\'offre gratuite est le produit entier, pas une version d\'essai.** Suivi des depenses, budgets, limitation de debit et chaines de failover vivent dans le coeur open source ; l\'offre Enterprise ajoute SSO, SCIM, support dedie et deploiement isole du reseau, pas le routage lui-meme.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Le proxy open source de LiteLLM appelle plus de 100 API de fournisseurs de LLM via une interface compatible OpenAI, sans cout de licence ni majoration par requete, quel que soit le volume.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — meilleure passerelle globale',
            tagline: 'Gratuite, auto-hebergee, environ 57,5k etoiles GitHub : ce qui ressemble le plus a un standard',
            verdict: 'Le proxy central de LiteLLM est gratuit et open source, et route plus de 100 API de fournisseurs via un point de terminaison compatible OpenAI. C\'est la seule option ici sans majoration en pourcentage sur les depenses de modeles, ce qui en fait la moins chere en valeur absolue des que le volume compte. Ses quelque 57,5k etoiles et 11,0k forks (aout 2026) constituent le signal de maintenance publique le plus fort des trois outils, ce qui compte quand vous pariez une couche de routage en production sur un projet encore maintenu dans deux ans. Le cout que vous payez est operationnel : vous exploitez, surveillez et mettez a jour un service.',
            pros: [
              'Aucun frais par requete ni pourcentage — gratuit quel que soit le volume',
              'Chaines de failover, budgets et limites de debit tous dans l\'offre OSS gratuite',
              'Controle total de la logique de routage et de la residence des donnees',
              'L\'offre Enterprise prend explicitement en charge le deploiement isole du reseau',
            ],
            cons: [
              'La disponibilite, les correctifs et la supervision du service vous incombent',
              'Le tarif Enterprise est sur devis : aucun chiffre publie sur lequel budgeter',
              'Mauvais choix pour une equipe sans aucune capacite DevOps',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: 'Gratuit (coeur OSS) ; Enterprise annuel sur devis',
                label: 'LiteLLM — demarrer gratuitement',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'LiteLLM sur GitHub',
                productCategory: 'dev-tool',
                priceRange: 'Gratuit',
                label: 'Voir le code source (BerriAI/litellm)',
              },
            ],
          },
        ],
        note: 'Utilisez LiteLLM si vous voulez zero frais recurrent et un controle total du routage. Evitez-le si personne dans l\'equipe n\'a la capacite d\'exploiter un proxy : ce cout est reel meme si la licence est gratuite.',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: 'La voie hebergee : OpenRouter et Prisma AIRS',
        content: 'Il existe de vraies raisons, non commerciales, de louer la passerelle plutot que de l\'exploiter. Vous vous epargnez un travail d\'infrastructure bien reel : disponibilite, mises a jour, gestion des secrets et l\'astreinte qui accompagne tout service sur le chemin des requetes. Une passerelle hebergee vous apporte aussi une couverture de fournisseurs que vous integreriez autrement un par un.\n\n**La contrepartie est une commission en pourcentage qui croit avec les depenses et un controle moins fin du failover.** C\'est un bon echange a volume modere et un mauvais a volume eleve : la [section couts ci-dessous](#cost-at-scale) donne l\'arithmetique exacte du point de bascule.',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — meilleure passerelle sans configuration',
            tagline: 'Plus de 500 modeles avec une cle API, aucun serveur a exploiter',
            verdict: 'OpenRouter est le chemin le plus rapide entre rien et une application multi-modeles fonctionnelle : inscrivez-vous, prenez une cle API et appelez le jour meme plus de 380 modeles listes. Il n\'y a pas d\'abonnement : la commission porte sur l\'alimentation du compte, soit environ 5,5 % sur les achats de credit via Stripe (minimum 0,80 $) ou 5 % en crypto. Ses frais BYOK de 5 % ne s\'appliquent qu\'au-dela de 25 000 $ de depenses mensuelles routees en BYOK (paiement a l\'usage) ou 200 000 $ (offre entreprise) : un usage leger ne paie donc rien de plus. Le failover est automatique mais au niveau plateforme : si un fournisseur echoue, OpenRouter peut router vers un modele equivalent sans que vous configuriez la chaine.',
            pros: [
              'Aucune infrastructure : une cle API constitue toute la mise en place',
              'Plus de 500 modeles listes, bien plus que ce que vous integreriez a la main',
              'Sans abonnement ; un usage BYOK leger reste dans le quota gratuit',
              'Failover automatique entre fournisseurs, sans configuration',
            ],
            cons: [
              'La commission d\'environ 5,5 % s\'accumule et devient couteuse a volume eleve',
              'La limitation de debit est globale, au niveau du compte, et non configurable',
              'Moins de controle sur le fournisseur qui traite une requete echouee : un probleme sous des regles strictes de residence des donnees',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'Sans abonnement ; environ 5,5 % sur les achats de credit Stripe',
                label: 'OpenRouter — voir les tarifs',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'Documentation des frais OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'Consultation gratuite',
                label: 'Consulter la grille tarifaire actuelle',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — l\'achat securite d\'entreprise',
            tagline: 'Desormais la passerelle IA au sein de la plateforme de securite de Palo Alto Networks',
            verdict: 'Portkey fait toujours le travail d\'une passerelle : fallbacks automatiques, repartition de charge, attribution des couts et budgets par cle virtuelle sur toutes les offres, avec un plan Developer gratuit a 10 000 logs/mois et un plan Production a 49 $/mois pour 100 000 logs/mois. Ce qui a change, c\'est la categorie : depuis que Palo Alto Networks a finalise l\'acquisition le 29 mai 2026, il est positionne comme la passerelle IA de la plateforme de securite Prisma AIRS et non plus comme un routeur independant. Cela convient bien si vous achetez deja de la gouvernance IA d\'entreprise, et mal si vous vouliez un outil agile et independant.',
            pros: [
              'Fallbacks et repartition de charge sur toutes les offres, y compris gratuite',
              'Attribution des couts et budgets par cle virtuelle integres',
              'Deploiement en cloud prive disponible en Enterprise',
              'Associe le routage de passerelle a une gouvernance de securite IA plus large',
            ],
            cons: [
              'Plus independant : feuille de route et tarifs suivent desormais un grand editeur de securite',
              'Les tarifs et la structure d\'offres anterieurs a mai 2026 peuvent deja etre perimes',
              'Mauvais choix si la neutralite vis-a-vis des editeurs motivait votre passerelle',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: 'Offre gratuite ; 49 $/mois Production ; Enterprise sur devis',
                label: 'Portkey — demarrer gratuitement (10k logs/mois)',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: 'Tarif entreprise sur devis',
                label: 'Prisma AIRS — voir les offres',
              },
            ],
          },
        ],
        note: 'Utilisez OpenRouter si « n\'importe quel modele comparable continue de fonctionner » est une politique de failover acceptable. Evitez-le s\'il vous faut des garanties contractuelles sur le fournisseur precis qui absorbe le trafic de debordement.',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: 'Combien coute chaque passerelle a l\'echelle ?',
        content: '**Le coeur open source de LiteLLM reste gratuit quel que soit le volume ; le cout d\'OpenRouter est un pourcentage de chaque dollar credite ; celui de Portkey croit avec le volume de logs et les conditions contractuelles.** Le tableau ci-dessous est une arithmetique directe sur les frais Stripe publies d\'environ 5,5 % : ce n\'est pas une estimation, et c\'est le chiffre qui tranche cet achat.\n\nNous ne donnons volontairement aucun montant pour exploiter LiteLLM : le proxy est un petit service permanent, et son cout depend entierement de l\'endroit ou vous le faites tourner. Mettez votre propre facture d\'hebergement dans la derniere colonne et la decision se prend d\'elle-meme.\n\nNote pour les lecteurs francophones : les trois editeurs facturent en dollars americains. Il n\'existe pas de tarif en euros ; votre releve ajoutera donc le taux de change et, selon la banque, une commission sur devise etrangere.',
        tableFormat: true,
        columns: ['Depenses mensuelles en modeles', 'Frais OpenRouter (environ 5,5 %)', 'Cout de licence LiteLLM', 'L\'auto-hebergement gagne en dessous de'],
        rows: [
          { 'Depenses mensuelles en modeles': '200 $', 'Frais OpenRouter (environ 5,5 %)': 'env. 11 $/mois (env. 132 $/an)', 'Cout de licence LiteLLM': '0 $', 'L\'auto-hebergement gagne en dessous de': '11 $/mois' },
          { 'Depenses mensuelles en modeles': '500 $', 'Frais OpenRouter (environ 5,5 %)': 'env. 27,50 $/mois (env. 330 $/an)', 'Cout de licence LiteLLM': '0 $', 'L\'auto-hebergement gagne en dessous de': '27,50 $/mois' },
          { 'Depenses mensuelles en modeles': '2 000 $', 'Frais OpenRouter (environ 5,5 %)': 'env. 110 $/mois (env. 1 320 $/an)', 'Cout de licence LiteLLM': '0 $', 'L\'auto-hebergement gagne en dessous de': '110 $/mois' },
          { 'Depenses mensuelles en modeles': '10 000 $', 'Frais OpenRouter (environ 5,5 %)': 'env. 550 $/mois (env. 6 600 $/an)', 'Cout de licence LiteLLM': '0 $', 'L\'auto-hebergement gagne en dessous de': '550 $/mois' },
        ],
        callouts: [
          {
            type: 'info',
            text: 'Les frais portent sur le credit achete, pas sur chaque requete — et les frais BYOK distincts de 5 % ne commencent qu\'au-dela de 25 000 $/mois de depenses routees en BYOK (paiement a l\'usage) ou 200 000 $/mois (entreprise). En dessous de ce quota, le BYOK ne coute rien de plus.',
          },
        ],
        note: 'Utilisez LiteLLM si vos depenses mensuelles en modeles sont assez elevees pour qu\'une majoration de 5 % pese en valeur absolue. Utilisez OpenRouter si cette commission coute moins que les heures d\'ingenierie necessaires a l\'exploitation d\'un proxy. Pour la meme arithmetique appliquee au materiel, voyez le [calculateur de couts pour LLM locaux](/fr/local-llms/local-llm-cost-calculator-build-vs-rent-2026).',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'Pourquoi le changement de proprietaire de Portkey compte pour cette decision',
        content: '**Portkey n\'est plus un produit independant : Palo Alto Networks a finalise son acquisition le 29 mai 2026 et l\'integre a la plateforme de securite Prisma AIRS.** Ce n\'est pas un simple changement de nom. Une passerelle adoptee aujourd\'hui comme outil leger peut, en un cycle produit, etre repositionnee, retarifee ou vendue uniquement dans une suite de securite plus large.\n\nSi vous evaluiez Portkey precisement parce que c\'etait un produit de startup agile, cette premisse ne tient plus. Faites confirmer les conditions actuelles directement par Palo Alto Networks avant de vous engager : les produits rachetes changent regulierement de tarifs, de structure d\'offres et de modele de support dans les 6 a 12 premiers mois d\'integration.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Palo Alto Networks a finalise l\'acquisition de Portkey le 29 mai 2026 et l\'integre comme passerelle IA au sein de la plateforme de securite Prisma AIRS.',
          },
        ],
        note: 'Utilisez Portkey / Prisma AIRS si vous voulez le routage de passerelle associe a une gouvernance de securite IA que vous alliez acheter de toute facon. Evitez-le si l\'independance vis-a-vis de la feuille de route d\'un grand editeur de securite compte pour votre architecture.',
      },
      failover: {
        id: 'failover',
        title: 'Comment chaque passerelle gere-t-elle le failover ?',
        content: '**Les trois prennent en charge un failover automatique en cas de panne d\'un fournisseur ; la difference est de savoir qui ecrit la politique de failover.** LiteLLM et Portkey vous laissent definir des chaines de failover et des regles de repartition dans une configuration que vous controlez. OpenRouter le traite au niveau de la plateforme : si un fournisseur echoue, il peut router automatiquement vers un modele equivalent, avec un controle moins fin sur lequel.',
        items: [
          '**LiteLLM** — chaines de failover definies dans votre propre configuration ; le plus grand controle sur le modele de secours qui traite une requete echouee',
          '**Portkey / Prisma AIRS** — fallbacks automatiques et repartition de charge disponibles sur toutes les offres, configures dans la plateforme',
          '**OpenRouter** — failover automatique entre fournisseurs au niveau plateforme ; aucune chaine a configurer et aucune garantie sur le fournisseur qui prend le relais',
        ],
        note: 'Pour les equipes soumises a une exigence stricte sur le modele de secours qui sert une requete echouee — rester dans une frontiere de residence des donnees de l\'UE, par exemple — la configuration auto-hebergee de LiteLLM est la seule des trois qui vous laisse ecrire cette politique.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser quelle passerelle ?',
        content: '**Les developpeurs disposant d\'infrastructure devraient choisir LiteLLM par defaut ; les equipes voulant un acces multi-modeles sans exploitation, OpenRouter ; les entreprises deja dans un socle Palo Alto, Prisma AIRS.** Au-dela de ce partage, la taille de l\'equipe, les exigences de conformite et la tolerance a la charge operationnelle decident du reste.',
        items: [
          '**Developpeurs seuls et petites startups prototypant sur plusieurs modeles** → OpenRouter. Une cle API, plus de 380 modeles, aucun serveur a surveiller. A eviter si vous etes tres sensible au cout a volume eleve : la commission s\'accumule.',
          '**Equipes plateforme avec des applications multi-modeles en production** → LiteLLM auto-heberge. Gratuit, standard de la communaute, et vous gardez le controle du routage et de la residence des donnees. A eviter sans capacite d\'exploiter un service.',
          '**Entreprises achetant deja des produits Palo Alto Networks** → Portkey dans Prisma AIRS. Il est desormais livre comme couche de gouvernance et de securite : l\'argumentaire n\'est plus celui d\'il y a un an.',
          '**Secteurs regules exigeant un deploiement isole du reseau** → LiteLLM Enterprise le prend en charge explicitement ; faites confirmer les options actuelles de deploiement de Prisma AIRS directement par Palo Alto Networks, les integrations post-acquisition modifiant l\'offre a court terme. Voyez aussi [la conformite en entreprise avec les LLM locaux](/fr/local-llms/enterprise-compliance-local-llms).',
          '**Equipes appelant un seul fournisseur a faible volume** → aucune passerelle. Appelez le SDK directement et reexaminez la question quand vous ajouterez un second fournisseur.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Les passerelles LLM dans l\'UE, au Japon et en Chine',
        content: 'L\'endroit ou tourne la passerelle determine ou vont vos prompts. Cela fait du choix de passerelle une decision de conformite sur trois grands marches, et pas seulement une question de cout.',
        subsections: [
          {
            title: 'Union europeenne',
            content: 'Une passerelle hebergee route le contenu des prompts vers le fournisseur qu\'elle selectionne ; si celui-ci se trouve hors de l\'EEE, cela peut constituer un transfert hors UE au sens des articles 44 a 49 du RGPD. Une instance LiteLLM auto-hebergee vous permet de fixer la chaine de failover uniquement sur des points de terminaison en region UE et de journaliser precisement ce qui a quitte le perimetre, ce qui rend aussi defendable en audit la minimisation des donnees de l\'article 5. La CNIL attend que cette politique de routage soit documentee et techniquement imposee, et non deleguee a la substitution automatique de modeles par un fournisseur ; sa recommandation d\'une IA locale pour les donnees professionnelles sensibles (financieres, medicales, juridiques) va dans le meme sens.',
          },
          {
            title: 'Japon',
            content: 'Le programme du METI sur la gouvernance de l\'IA et la souverainete nationale pousse les entreprises japonaises vers l\'inference sur site et des chemins de donnees auditables. Une passerelle auto-hebergee correspond directement a cette posture : LiteLLM peut se placer devant des serveurs de modeles nationaux faisant tourner Qwen2.5 ou des poids de la famille Llama, aux cotes de fournisseurs heberges, en gardant le trafic regule sur une infrastructure situee au Japon tout en offrant aux developpeurs une API unique. Une passerelle exclusivement hebergee, avec substitution automatique de fournisseur, se concilie plus difficilement avec cette exigence.',
          },
          {
            title: 'Chine',
            content: 'Sous la loi sur la securite des donnees (数据安全法) et les regles de la CAC sur les transferts transfrontaliers, le probleme de conformite est le routage du contenu des prompts vers des fournisseurs de modeles etrangers, pas la passerelle elle-meme. Les deploiements servant des utilisateurs de Chine continentale font generalement tourner la passerelle sur une infrastructure nationale et ne routent que vers des modeles domestiques conformes comme Qwen2.5 ou Baichuan. Le proxy auto-heberge de LiteLLM est ici l\'option viable ; le routage automatique d\'OpenRouter vers le fournisseur disponible est exactement le comportement que les regles de la CAC n\'autorisent pas.',
          },
        ],
        note: 'Utilisez une passerelle auto-hebergee sur tout marche ou vous devez pouvoir declarer par ecrit quel fournisseur a traite une requete donnee. Une passerelle hebergee suffit la ou aucune restriction de transfert hors frontieres ne s\'applique a vos donnees.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes au moment de choisir une passerelle LLM',
        numberedItems: [
          {
            title: 'Supposer que « passerelle » designe la meme chose dans les trois outils',
            whyItMatters: 'LiteLLM est un proxy auto-heberge, OpenRouter une API hebergee, et Portkey fait desormais partie d\'une plateforme de securite. Lisez la page produit actuelle de chaque editeur avant de comparer des listes de fonctionnalites : la parite n\'est pas acquise.',
          },
          {
            title: 'Choisir OpenRouter pour une production a fort volume sans modeliser la commission',
            whyItMatters: 'A 10 000 $ de depenses mensuelles en modeles, la commission d\'environ 5,5 % represente environ 550 $ par mois, soit 6 600 $ par an. Faites ce calcul sur vos depenses reelles, pas seulement sur le gain de confort.',
          },
          {
            title: 'Adopter une passerelle avant d\'avoir un second fournisseur en production',
            whyItMatters: 'La valeur centrale d\'une passerelle est le routage multi-fournisseurs avec failover. Avec un seul modele chez un seul fournisseur, vous ajoutez une couche d\'abstraction, un nouveau mode de panne et une courbe d\'apprentissage sans contrepartie.',
          },
          {
            title: 'Citer des tarifs Portkey releves avant mai 2026',
            whyItMatters: 'Les pages tarifaires et articles anterieurs a l\'acquisition par Palo Alto peuvent ne plus refleter les conditions actuelles de Prisma AIRS. Faites-les confirmer avant de fonder une decision d\'achat sur une ancienne capture.',
          },
          {
            title: 'Lire les etoiles GitHub comme un comparatif de fonctionnalites',
            whyItMatters: 'Les quelque 57,5k etoiles de LiteLLM traduisent la confiance de la communaute et la probabilite que le projet soit encore maintenu dans deux ans, pas qu\'il ait plus de fonctionnalites que Portkey ou OpenRouter. Fiez-vous au tableau comparatif, pas au signal d\'adoption.',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: 'Passez completement de la passerelle si…',
        content: '**Si vous appelez un seul fournisseur de LLM a volume faible et previsible, sans projet d\'en ajouter un second a court terme, laissez les trois de cote.** Une passerelle ajoute de la complexite operationnelle (auto-hebergee) ou une commission en pourcentage (hebergee) en echange d\'un benefice multi-fournisseurs dont vous ne vous servez pas encore.\n\nAppelez directement le SDK du fournisseur et reexaminez la question le jour ou vous ajouterez reellement un second modele ou fournisseur. La meme logique vaut un cran plus bas : si vous hesitez encore a appeler des API hebergees, lisez d\'abord [LLM locaux vs API cloud](/fr/local-llms/local-llms-vs-cloud-apis) — la passerelle la moins chere est celle dont vous n\'avez jamais eu besoin.',
        callouts: [
          {
            type: 'tip',
            text: 'Un declencheur utile : ajoutez une passerelle la premiere fois que vous ecrivez dans votre propre code une bifurcation propre a un fournisseur. C\'est exactement ce code de liaison qu\'une passerelle existe pour supprimer.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions frequentes',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'une passerelle API LLM ?',
            a: 'C\'est une couche de routage qui donne a votre application une API unique et coherente pour appeler plusieurs fournisseurs de LLM, en ajoutant generalement failover, suivi des couts et limitation de debit par-dessus les API d\'origine. Vous appelez la passerelle ; elle gere le format propre a chaque fournisseur et l\'authentification. Le benefice n\'apparait qu\'a partir de deux fournisseurs en production.',
          },
          {
            q: 'LiteLLM est-il vraiment gratuit ?',
            a: 'Le coeur open source est gratuit et auto-heberge, sans cout de licence, d\'apres la page tarifaire de LiteLLM en aout 2026. Il n\'y a aucune majoration par requete, quel que soit le volume. L\'offre Enterprise — SSO, SCIM, support dedie, deploiement isole du reseau — est tarifee annuellement sur devis selon votre volume de requetes et inclut un essai de 30 jours.',
          },
          {
            q: 'OpenRouter facture-t-il a la requete ?',
            a: 'Pas directement. La commission d\'OpenRouter porte sur l\'alimentation du compte : environ 5,5 % sur les achats de credit via Stripe avec un minimum de 0,80 $, ou 5 % en crypto. Des frais BYOK distincts de 5 % ne s\'appliquent qu\'au-dela de 25 000 $ de depenses mensuelles routees en BYOK en paiement a l\'usage, ou 200 000 $ sur l\'offre entreprise.',
          },
          {
            q: 'Portkey est-il encore une entreprise independante ?',
            a: 'Non. Palo Alto Networks a finalise l\'acquisition de Portkey le 29 mai 2026 et l\'integre comme passerelle IA centrale de sa plateforme de securite Prisma AIRS, selon le communique de Palo Alto Networks. Considerez toute information tarifaire ou de feuille de route anterieure a mai 2026 comme potentiellement perimee.',
          },
          {
            q: 'Quelle passerelle prend en charge le plus de fournisseurs ?',
            a: 'OpenRouter liste plus de 380 modeles sur son propre site en aout 2026. La documentation de LiteLLM decrit plus de 100 integrations de fournisseurs, ce qui est une unite differente puisqu\'un fournisseur expose plusieurs modeles. Le depot de Portkey annoncait plus de 1 600 LLM, chiffre qu\'il convient de reverifier apres l\'acquisition.',
          },
          {
            q: 'Puis-je auto-heberger Portkey ?',
            a: 'Portkey/Prisma AIRS proposait un deploiement en cloud prive sur l\'offre Enterprise d\'apres les pages tarifaires anterieures a l\'acquisition. Faites confirmer les conditions actuelles d\'auto-hebergement directement par Palo Alto Networks : les integrations post-acquisition modifient souvent les options de deploiement la premiere annee.',
          },
          {
            q: 'L\'un de ces trois a-t-il un programme d\'affiliation ?',
            a: 'Aucun programme d\'affiliation ou de parrainage public et verifiable n\'a ete trouve pour LiteLLM, Portkey ou OpenRouter en aout 2026. Tous les liens produit de cette page sont de simples liens declares qui ne rapportent rien a PromptQuorum. Si cela change, la page sera mise a jour avec une mention conforme aux conditions reelles du programme.',
          },
          {
            q: 'Comment choisir entre auto-hebergement et passerelle hebergee ?',
            a: 'Comparez 5,5 % de vos depenses mensuelles en modeles au cout d\'exploitation d\'un petit service permanent. En dessous de ce point de bascule, OpenRouter revient moins cher une fois votre temps compte ; au-dessus, LiteLLM auto-heberge gagne en valeur absolue. Ajoutez un second test de conformite : si vous devez pouvoir declarer quel fournisseur a traite une requete, auto-hebergez quelle que soit l\'arithmetique.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict final',
        items: [
          '**Utilisez LiteLLM si** vous pouvez auto-heberger et voulez zero frais recurrent avec un controle total du routage — etape suivante : deployez le proxy open source et pointez l\'URL de base de votre application dessus.',
          '**Utilisez OpenRouter si** vous voulez un acces multi-modeles des aujourd\'hui sans infrastructure — etape suivante : creez une cle API et creditez le compte en prevoyant la commission d\'environ 5,5 %.',
          '**Utilisez Portkey / Prisma AIRS si** vous achetez deja de la securite Palo Alto Networks et voulez le routage de passerelle inclus — etape suivante : contactez Palo Alto Networks pour reverifier les conditions actuelles apres l\'acquisition.',
          '**Laissez les trois de cote si** vous appelez un seul fournisseur a faible volume sans projet multi-fournisseurs a court terme — etape suivante : reexaminez la question quand vous ajouterez un second fournisseur.',
        ],
        note: 'Les liens produit de cette page mènent au site de chaque editeur. PromptQuorum n\'a aucune relation d\'affiliation avec LiteLLM, OpenRouter ou Portkey / Palo Alto Networks et ne gagne rien sur ces liens.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'Page tarifaire officielle de LiteLLM', description: 'Detail des offres open source et Enterprise, directement chez l\'editeur.' },
          { url: 'https://github.com/BerriAI/litellm', title: 'BerriAI/litellm sur GitHub', description: 'Etoiles et forks du depot, licence et description des fonctionnalites.' },
          { url: 'https://openrouter.ai/docs/faq', title: 'FAQ OpenRouter', description: 'Pourcentages de commission sur les achats de credit et paliers des frais BYOK, directement chez l\'editeur.' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'Documentation des limites de l\'API OpenRouter', description: 'Limites de debit de l\'offre gratuite et regles d\'acces base sur le credit.' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'Palo Alto Networks finalise l\'acquisition de Portkey', description: 'Date de finalisation de l\'acquisition et plan d\'integration a Prisma AIRS.' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'Portkey-AI/gateway sur GitHub', description: 'Depot open source de la passerelle et chiffres annonces de fournisseurs.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associees',
        items: [
          '[Exposer une API compatible OpenAI sur un LLM local](/fr/local-llms/local-llm-openai-compatible-api) — le runtime devant lequel se place une passerelle',
          '[LLM locaux vs API cloud : que faut-il appeler ?](/fr/local-llms/local-llms-vs-cloud-apis) — tranchez cela avant de choisir une passerelle',
          '[La pile de developpement pour LLM locaux](/fr/local-llms/local-llm-developer-stack) — ou se place une passerelle dans la chaine d\'outils',
          '[Comparatif de location de GPU cloud 2026](/fr/local-llms/cloud-gpu-rental-comparison-2026) — louer du calcul plutot que router vers des modeles heberges',
          '[Calculateur de couts : acheter ou louer pour les LLM locaux](/fr/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — la meme arithmetique appliquee au materiel',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM vs OpenRouter vs Portkey : meilleure passerelle LLM 2026',
      description: 'Comparatif de LiteLLM, OpenRouter et Portkey/Prisma AIRS comme passerelles API LLM : tarifs reels, options d\'auto-hebergement, controle du failover et l\'acquisition par Palo Alto qui a change la categorie de Portkey. Verifie en aout 2026.',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/fr/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'fr',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Passerelle API LLM' },
        { '@type': 'Thing', name: 'Routage multi-modeles' },
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
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'une passerelle API LLM ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une couche de routage qui donne a votre application une API unique pour appeler plusieurs fournisseurs de LLM, en ajoutant failover, suivi des couts et limitation de debit par-dessus les API d\'origine.',
          },
        },
        {
          '@type': 'Question',
          name: 'LiteLLM est-il vraiment gratuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le coeur open source est gratuit et auto-heberge, sans cout de licence ni majoration par requete quel que soit le volume, d\'apres sa page tarifaire en aout 2026. L\'offre Enterprise est tarifee annuellement sur devis.',
          },
        },
        {
          '@type': 'Question',
          name: 'OpenRouter facture-t-il a la requete ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. OpenRouter preleve environ 5,5 % sur les achats de credit via Stripe (minimum 0,80 $) ou 5 % en crypto, plus des frais BYOK de 5 % seulement au-dela de 25 000 $/mois de depenses routees en BYOK, ou 200 000 $/mois en entreprise.',
          },
        },
        {
          '@type': 'Question',
          name: 'Portkey est-il encore une entreprise independante ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Palo Alto Networks a finalise l\'acquisition le 29 mai 2026 et integre Portkey comme passerelle IA au sein de la plateforme de securite Prisma AIRS.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment choisir entre auto-hebergement et passerelle LLM hebergee ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Comparez 5,5 % de vos depenses mensuelles en modeles au cout d\'exploitation d\'un petit service permanent. Au-dessus de ce point de bascule, LiteLLM auto-heberge gagne ; en dessous, OpenRouter l\'emporte une fois votre temps compte.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleures passerelles API LLM (aout 2026)',
      inLanguage: 'fr',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: 'Meilleur choix global — proxy open source gratuit et auto-heberge, plus de 100 API de fournisseurs, aucune majoration par requete' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: 'Meilleure passerelle sans configuration — plus de 380 modeles avec une cle API, commission d\'environ 5,5 % sur le credit' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: 'Achat securite d\'entreprise — offre Production a 49 $/mois, desormais integree a Prisma AIRS de Palo Alto Networks' },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM vs OpenRouter vs Portkey: melhor gateway LLM 2026',
    seoTitle: 'Melhor gateway de API LLM 2026: LiteLLM ou OpenRouter',
    metaDescription: 'O proxy do LiteLLM é gratuito e auto-hospedado, o OpenRouter cobra ~5,5% sobre o saldo comprado e o Portkey agora faz parte do Prisma AIRS da Palo Alto.',
    educationalLevel: 'Advanced',
    audience: 'Desenvolvedores que criam aplicações LLM multimodelo',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11 min de leitura',
    primaryTerm: 'gateway de API LLM',
    targetKeywords: [
      'melhor gateway LLM 2026',
      'LiteLLM vs OpenRouter',
      'comparativo gateway API LLM',
      'proxy LLM auto-hospedado',
      'taxas OpenRouter',
    ],
    leadAnswerBlock: '**O LiteLLM é o melhor gateway de API LLM para a maioria dos desenvolvedores em 2026: o proxy open source é gratuito, auto-hospedado e roteia mais de 100 APIs de provedores por uma única interface compatível com OpenAI, sem acréscimo por requisição. O OpenRouter é a melhor escolha se você quer mais de 380 modelos hoje sem nenhuma infraestrutura — em troca, cobra cerca de 5,5% sobre compras de saldo via Stripe. O Portkey não é mais um gateway independente: a Palo Alto Networks concluiu a aquisição em 29 de maio de 2026 e está integrando-o à plataforma de segurança Prisma AIRS.**',
    quickAnswerTop: {
      question: 'Qual é o melhor gateway de API LLM em 2026?',
      answer: '**O LiteLLM vence para times que conseguem operar um serviço; o OpenRouter para os que não conseguem.** O núcleo open source do LiteLLM não custa nada independentemente do volume e mantém a lógica de roteamento e a residência dos dados sob seu controle. O OpenRouter elimina todo o trabalho de infraestrutura e cobra ~5,5% sobre compras de saldo via Stripe (5% em cripto), mais uma taxa BYOK de 5% acima da franquia gratuita. O Portkey só existe hoje como o gateway de IA dentro do Prisma AIRS da Palo Alto Networks — avalie-o como uma compra de segurança corporativa, não como uma ferramenta leve.',
      bullets: [
        '**Melhor no geral:** LiteLLM — gratuito, auto-hospedado, ~53,8 mil estrelas no GitHub, mais de 100 APIs de provedores',
        '**Melhor sem configuração:** OpenRouter — mais de 380 modelos com uma única API key, taxa de ~5,5% sobre o saldo',
        '**Compra de segurança corporativa:** Portkey / Prisma AIRS — US$ 49/mês no plano Production, agora da Palo Alto',
        '**Ponto de virada:** auto-hospedar vence assim que 5,5% do seu gasto mensal com modelos superar a conta de hospedagem do proxy',
        '⚠️ Nenhum dos três tem programa público de afiliados — todos os links aqui são links de produto',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Melhor escolha: auto-hospedar ou alugar?', anchor: 'best-choice' },
      { label: 'O que é um gateway de API LLM?', anchor: 'what-is-a-gateway' },
      { label: 'Tabela comparativa completa', anchor: 'comparison' },
      { label: 'A via auto-hospedada: LiteLLM', anchor: 'self-hosted-track' },
      { label: 'A via hospedada: OpenRouter e Prisma AIRS', anchor: 'hosted-track' },
      { label: 'Quanto custa cada gateway em escala?', anchor: 'cost-at-scale' },
      { label: 'Por que a mudança de dono do Portkey importa', anchor: 'portkey-acquisition' },
      { label: 'Como cada gateway lida com falhas', anchor: 'failover' },
      { label: 'Quem deve usar cada gateway?', anchor: 'who-should-use' },
      { label: 'Contexto regional: UE, Japão e China', anchor: 'regional-context' },
      { label: 'Erros comuns', anchor: 'common-mistakes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito final', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**O proxy open source do LiteLLM é gratuito em qualquer volume** — mais de 100 APIs de provedores atrás de um único endpoint compatível com OpenAI, com controle de gastos, orçamentos e rate limiting já no plano gratuito.',
          'O OpenRouter não cobra assinatura, mas fica com ~5,5% sobre compras de saldo via Stripe (mínimo US$ 0,80), 5% em cripto, mais taxa BYOK de 5% acima de US$ 25.000/mês (pagamento por uso) ou US$ 200.000/mês (corporativo).',
          'O Portkey foi adquirido pela Palo Alto Networks (concluída em 29 de maio de 2026) e está sendo integrado ao Prisma AIRS — trate-o agora como compra de segurança corporativa.',
          'O repositório do LiteLLM no GitHub tem ~53,8 mil estrelas e ~9,8 mil forks em agosto de 2026 — o sinal público de adoção mais claro entre os três.',
          'O OpenRouter lista mais de 380 modelos e é o caminho mais rápido entre o cadastro e uma chamada multimodelo funcionando.',
          'O ponto de virada honesto: auto-hospedar fica mais barato assim que 5,5% do seu gasto mensal com modelos superar o custo de operar o proxy.',
          '**Dispense o gateway por completo** se você chama um único provedor com volume baixo e previsível e não planeja adicionar um segundo.',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 Melhor escolha: auto-hospedar ou alugar o gateway?',
        content: '**Rode o LiteLLM você mesmo se tiver onde rodá-lo; use o OpenRouter se não tiver.** Essa única pergunta resolve a decisão com mais segurança do que qualquer lista de recursos, porque as três ferramentas já cobrem o trabalho central de um gateway: uma API, failover e controle de custos.',
        decisionBlock: {
          title: 'Auto-hospedar ou gateway hospedado?',
          localIf: [
            'Você já opera serviços e consegue manter um proxy — o LiteLLM não acrescenta nenhum percentual, em nenhum volume',
            'Seu gasto mensal com modelos é alto o bastante para que 5% seja dinheiro de verdade (acima de cerca de US$ 500/mês isso supera a maioria das contas de hospedagem pequenas)',
            'Você precisa controlar exatamente qual provedor atende uma requisição que falhou — por exemplo, para permanecer dentro de um limite de residência de dados da UE',
            'Você precisa de implantação isolada de rede (o LiteLLM Enterprise suporta isso explicitamente)',
          ],
          cloudIf: [
            'Você não tem capacidade de DevOps e não quer assumir um serviço em operação',
            'Você quer estar chamando mais de 380 modelos dentro de uma hora — o OpenRouter só exige uma API key',
            'Seu gasto é modesto o bastante para que ~5,5% seja irrelevante diante do tempo economizado',
            'Você já compra ferramentas de segurança da Palo Alto Networks e quer governar o gateway dentro do Prisma AIRS',
          ],
          quick: [
            'Gratuito e auto-hospedado → **LiteLLM** (núcleo OSS sob licença Apache, ~53,8 mil estrelas)',
            'Zero infraestrutura, modelos hoje → **OpenRouter** (mais de 380 modelos, taxa de ~5,5% sobre o saldo)',
            'Governança de segurança corporativa → **Portkey / Prisma AIRS** (US$ 49/mês Production, Enterprise sob consulta)',
            'Um provedor, volume baixo → **nenhum gateway** — chame o SDK diretamente',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: 'Gratuito (núcleo open source)',
            label: 'LiteLLM — comece grátis (auto-hospedado)',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: 'Sem assinatura; taxa de ~5,5% sobre o saldo',
            label: 'OpenRouter — ver preços',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: 'O que é um gateway de API LLM?',
        content: '**Um gateway de API LLM é uma camada de roteamento entre sua aplicação e vários provedores de modelos que expõe uma única API consistente.** Em vez de escrever código de integração separado para OpenAI, Anthropic, Google e todos os demais, você chama o gateway uma vez e ele cuida do formato específico de cada provedor, da autenticação, do failover e — na maioria das implementações — do controle de custos e do rate limiting.\n\nO ganho só existe a partir do momento em que há mais de um provedor em produção. Numa aplicação com um único provedor, o gateway é uma camada de abstração sem contrapartida. Use um gateway se a dispersão de provedores já estiver custando código de cola e plantão; caso contrário, dispense.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Um gateway de API LLM roteia as chamadas da sua aplicação para vários provedores de modelos por uma única interface compatível com OpenAI, acrescentando failover, controle de custos e rate limiting sobre as APIs originais.',
          },
          {
            type: 'plain-terms',
            text: 'Pense num adaptador de tomada para modelos de IA. Seu código encaixa numa única tomada; o adaptador lida com o fato de cada provedor ter um plugue diferente. Se você só usa um plugue, não precisa do adaptador.',
          },
        ],
        note: 'Um gateway não é o mesmo que um runtime local. Se você quer servir modelos no seu próprio hardware em vez de rotear para provedores hospedados, veja o [guia de API compatível com OpenAI para LLMs locais](/pt/local-llms/local-llm-openai-compatible-api) e o [comparativo llama.cpp vs Ollama vs vLLM](/pt/local-llms/llamacpp-vs-ollama-vs-vllm) — são runtimes, e o gateway fica na frente deles.',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM vs OpenRouter vs Portkey: o comparativo completo',
        content: '**Nenhum gateway vence em todas as categorias: o LiteLLM lidera em custo e controle, o OpenRouter na rapidez de configuração e o Prisma AIRS em governança corporativa.** Preços e detalhes verificados nas páginas dos próprios fornecedores em 27 de agosto de 2026 — confira de novo se esta página estiver no ar há mais de 90 dias, já que os preços de gateways se moveram várias vezes neste ano.',
        tableFormat: true,
        columns: ['Critério', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { Critério: 'Melhor para', LiteLLM: 'Times que auto-hospedam, controle total, sem taxas', OpenRouter: 'Trabalho multimodelo rápido sem infraestrutura', 'Portkey (Prisma AIRS)': 'Empresas que já compram segurança da Palo Alto' },
          { Critério: 'Preço', LiteLLM: 'Gratuito (OSS); Enterprise anual sob consulta', OpenRouter: 'Sem assinatura; ~5,5% via Stripe, 5% em cripto', 'Portkey (Prisma AIRS)': 'Grátis 10 mil logs/mês; US$ 49/mês Production; Enterprise sob consulta' },
          { Critério: 'Auto-hospedagem', LiteLLM: 'Sim — é o desenho base, mais um proxy gerenciado opcional', OpenRouter: 'Não — apenas acesso por API hospedada', 'Portkey (Prisma AIRS)': 'Implantação em nuvem privada no Enterprise' },
          { Critério: 'Provedores / modelos', LiteLLM: 'Mais de 100 APIs de provedores', OpenRouter: 'Mais de 380 modelos listados', 'Portkey (Prisma AIRS)': 'O repositório já anunciou mais de 1.600 LLMs' },
          { Critério: 'Failover', LiteLLM: 'Sim — cadeias configuráveis no plano OSS', OpenRouter: 'Sim — automático, no nível da plataforma', 'Portkey (Prisma AIRS)': 'Sim — fallbacks e balanceamento em todos os planos' },
          { Critério: 'Controle de custos', LiteLLM: 'Sim — gastos e orçamentos no plano OSS', OpenRouter: 'Sim — painel de saldo por requisição', 'Portkey (Prisma AIRS)': 'Sim — atribuição de custo e orçamento por chave virtual' },
          { Critério: 'Rate limiting', LiteLLM: 'Sim — plano OSS', OpenRouter: 'Global, no nível da conta (não configurável)', 'Portkey (Prisma AIRS)': 'Controle granular no Enterprise' },
          { Critério: 'Programa de afiliados', LiteLLM: 'Nenhum encontrado', OpenRouter: 'Nenhum encontrado', 'Portkey (Prisma AIRS)': 'Nenhum encontrado (o da Palo Alto é B2B)' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Preços capturados antes de maio de 2026 já não descrevem o Portkey. Confirme as condições atuais do Prisma AIRS com a Palo Alto Networks antes de citar um número de artigo ou captura antigos.',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: 'A via auto-hospedada: por que o LiteLLM é o padrão',
        content: '**O LiteLLM é o padrão da comunidade porque o plano gratuito é o produto inteiro, não uma versão de teste.** Controle de gastos, orçamentos, rate limiting e cadeias de failover estão no núcleo open source — o plano Enterprise acrescenta SSO, SCIM, suporte dedicado e implantação isolada de rede, não o roteamento em si.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O proxy open source do LiteLLM chama mais de 100 APIs de provedores de LLM por uma interface compatível com OpenAI, sem custo de licença e sem acréscimo por requisição, em qualquer volume.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — melhor gateway no geral',
            tagline: 'Gratuito, auto-hospedado, ~53,8 mil estrelas no GitHub — o mais próximo de um padrão',
            verdict: 'O proxy central do LiteLLM é gratuito e open source e roteia mais de 100 APIs de provedores por um endpoint compatível com OpenAI. É a única opção aqui sem acréscimo percentual sobre o gasto com modelos, e é isso que a torna a mais barata em valores absolutos quando o volume importa. Suas ~53,8 mil estrelas e ~9,8 mil forks (agosto de 2026) são o sinal público de manutenção mais forte entre as três ferramentas — relevante quando você aposta uma camada de roteamento em produção em um projeto que precisa continuar mantido daqui a dois anos. O custo que você paga é operacional: você opera, monitora e atualiza um serviço.',
            pros: [
              'Sem taxa por requisição nem percentual — gratuito em qualquer volume',
              'Cadeias de failover, orçamentos e limites de taxa, tudo no plano OSS gratuito',
              'Controle total sobre a lógica de roteamento e a residência dos dados',
              'O plano Enterprise suporta implantação isolada de rede de forma explícita',
            ],
            cons: [
              'Disponibilidade, correções e monitoramento do serviço ficam por sua conta',
              'O preço Enterprise é sob consulta — não há número publicado para orçar',
              'Escolha errada para um time sem nenhuma capacidade de DevOps',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: 'Gratuito (núcleo OSS); Enterprise anual sob consulta',
                label: 'LiteLLM — comece grátis',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'LiteLLM no GitHub',
                productCategory: 'dev-tool',
                priceRange: 'Gratuito',
                label: 'Ver o código-fonte (BerriAI/litellm)',
              },
            ],
          },
        ],
        note: 'Use o LiteLLM se quiser zero taxa recorrente e controle total do roteamento. Evite-o se ninguém no time tiver capacidade de operar um proxy — esse custo é real mesmo com a licença gratuita.',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: 'A via hospedada: OpenRouter e Prisma AIRS',
        content: 'Há razões honestas, não publicitárias, para alugar o gateway em vez de operá-lo. Você economiza trabalho real de infraestrutura: disponibilidade, atualizações, gestão de segredos e o plantão que acompanha qualquer serviço no caminho das requisições. Um gateway hospedado também entrega uma cobertura de provedores que você integraria um a um.\n\n**A contrapartida é uma taxa percentual que cresce com o gasto e menos controle fino sobre o failover.** É uma boa troca em volume moderado e uma troca ruim em volume alto — a [seção de custos abaixo](#cost-at-scale) traz a aritmética exata do ponto de virada.',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — melhor gateway sem configuração',
            tagline: 'Mais de 380 modelos com uma API key, nenhum servidor para operar',
            verdict: 'O OpenRouter é o caminho mais rápido entre o zero e uma aplicação multimodelo funcionando: cadastre-se, pegue uma API key e chame no mesmo dia mais de 380 modelos listados. Não há assinatura — a taxa incide sobre a recarga da conta, em torno de 5,5% sobre compras de saldo via Stripe (mínimo US$ 0,80) ou 5% em cripto. A taxa BYOK de 5% só vale acima de US$ 25.000 de gasto mensal roteado por BYOK (pagamento por uso) ou US$ 200.000 (plano corporativo), então uso leve não paga nada a mais ali. O failover é automático, mas no nível da plataforma: se um provedor falha, o OpenRouter pode rotear para um modelo equivalente sem que você configure a cadeia.',
            pros: [
              'Nenhuma infraestrutura — uma API key é toda a configuração',
              'Mais de 380 modelos listados, muito além do que você integraria manualmente',
              'Sem assinatura; uso leve de BYOK fica dentro da franquia gratuita',
              'Failover automático entre provedores, sem configuração',
            ],
            cons: [
              'A taxa de ~5,5% se acumula e fica cara em volume alto',
              'O rate limiting é global, no nível da conta, e não configurável por você',
              'Menos controle sobre qual provedor atende uma requisição que falhou — um problema sob regras estritas de residência de dados',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'Sem assinatura; ~5,5% sobre compras de saldo via Stripe',
                label: 'OpenRouter — ver preços',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'Documentação de taxas do OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'Consulta gratuita',
                label: 'Conferir a tabela de taxas atual',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — a compra de segurança corporativa',
            tagline: 'Agora o gateway de IA dentro da plataforma de segurança da Palo Alto Networks',
            verdict: 'O Portkey continua fazendo o trabalho de gateway: fallbacks automáticos, balanceamento de carga, atribuição de custos e orçamento por chave virtual em todos os planos, com um plano Developer gratuito de 10.000 logs/mês e um plano Production de US$ 49/mês com 100.000 logs/mês. O que mudou foi a categoria: desde que a Palo Alto Networks concluiu a aquisição em 29 de maio de 2026, ele é posicionado como o gateway de IA dentro da plataforma de segurança Prisma AIRS, e não como um roteador independente. Isso serve bem se você já está comprando governança de IA corporativa e serve mal se você queria uma ferramenta ágil e independente.',
            pros: [
              'Fallbacks e balanceamento de carga em todos os planos, inclusive no gratuito',
              'Atribuição de custos e orçamento por chave virtual embutidos',
              'Implantação em nuvem privada disponível no Enterprise',
              'Combina o roteamento do gateway com governança de segurança de IA mais ampla',
            ],
            cons: [
              'Não é mais independente — roadmap e preços agora seguem um grande fornecedor de segurança',
              'Preços e estrutura de planos anteriores a maio de 2026 podem já estar defasados',
              'Escolha errada se a neutralidade de fornecedor era parte do motivo para ter um gateway',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: 'Plano gratuito; US$ 49/mês Production; Enterprise sob consulta',
                label: 'Portkey — comece grátis (10 mil logs/mês)',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: 'Preço corporativo sob consulta',
                label: 'Prisma AIRS — ver planos',
              },
            ],
          },
        ],
        note: 'Use o OpenRouter se "qualquer modelo comparável continuar funcionando" for uma política de failover aceitável. Evite-o se precisar de garantias contratuais sobre exatamente qual provedor absorve o tráfego excedente.',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: 'Quanto custa cada gateway em escala?',
        content: '**O núcleo open source do LiteLLM segue gratuito independentemente do volume; o custo do OpenRouter é um percentual de cada dólar creditado; o do Portkey cresce com o volume de logs e as condições contratuais.** A tabela abaixo é aritmética direta sobre a taxa Stripe publicada de ~5,5% — não é estimativa, e é o número que decide esta compra.\n\nDeliberadamente não damos um valor em dólares para operar o LiteLLM: o proxy é um serviço pequeno e permanente, e o custo depende inteiramente de onde você o executa. Coloque sua própria conta de hospedagem na última coluna e a decisão se resolve sozinha.\n\nObservação para leitores no Brasil: os três fornecedores cobram em dólares americanos. Não existe tabela em reais, então sua fatura soma câmbio e, conforme o cartão, IOF e spread.',
        tableFormat: true,
        columns: ['Gasto mensal com modelos', 'Taxa OpenRouter (~5,5%)', 'Custo de licença LiteLLM', 'Auto-hospedar vence abaixo de'],
        rows: [
          { 'Gasto mensal com modelos': 'US$ 200', 'Taxa OpenRouter (~5,5%)': '~US$ 11/mês (~US$ 132/ano)', 'Custo de licença LiteLLM': 'US$ 0', 'Auto-hospedar vence abaixo de': 'US$ 11/mês' },
          { 'Gasto mensal com modelos': 'US$ 500', 'Taxa OpenRouter (~5,5%)': '~US$ 27,50/mês (~US$ 330/ano)', 'Custo de licença LiteLLM': 'US$ 0', 'Auto-hospedar vence abaixo de': 'US$ 27,50/mês' },
          { 'Gasto mensal com modelos': 'US$ 2.000', 'Taxa OpenRouter (~5,5%)': '~US$ 110/mês (~US$ 1.320/ano)', 'Custo de licença LiteLLM': 'US$ 0', 'Auto-hospedar vence abaixo de': 'US$ 110/mês' },
          { 'Gasto mensal com modelos': 'US$ 10.000', 'Taxa OpenRouter (~5,5%)': '~US$ 550/mês (~US$ 6.600/ano)', 'Custo de licença LiteLLM': 'US$ 0', 'Auto-hospedar vence abaixo de': 'US$ 550/mês' },
        ],
        callouts: [
          {
            type: 'info',
            text: 'A taxa incide sobre o saldo que você compra, não sobre cada requisição — e a taxa BYOK separada de 5% só começa acima de US$ 25.000/mês de gasto roteado por BYOK (pagamento por uso) ou US$ 200.000/mês (corporativo). Abaixo dessa franquia, BYOK não custa nada a mais.',
          },
        ],
        note: 'Use o LiteLLM se o gasto mensal com modelos for alto o bastante para que um acréscimo de 5% pese em termos absolutos. Use o OpenRouter se a taxa custar menos que as horas de engenharia para operar um proxy. Para a mesma aritmética aplicada a hardware, veja a [calculadora de custos de LLMs locais](/pt/local-llms/local-llm-cost-calculator-build-vs-rent-2026).',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'Por que a mudança de dono do Portkey importa para esta decisão',
        content: '**O Portkey não é mais um produto independente: a Palo Alto Networks concluiu a aquisição em 29 de maio de 2026 e está integrando-o à plataforma de segurança Prisma AIRS.** Isso não é uma troca de marca. Um gateway adotado hoje como ferramenta leve pode, em um ciclo de produto, ser reprecificado, ter o escopo alterado ou passar a ser vendido apenas dentro de uma suíte de segurança maior.\n\nSe você estava avaliando o Portkey justamente por ser um produto ágil de startup, essa premissa não vale mais. Confirme as condições atuais diretamente com a Palo Alto Networks antes de se comprometer — produtos adquiridos mudam preços, estrutura de planos e modelos de suporte com frequência nos primeiros 6 a 12 meses de integração.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A Palo Alto Networks concluiu a aquisição do Portkey em 29 de maio de 2026 e o está integrando como o gateway de IA dentro da plataforma de segurança Prisma AIRS.',
          },
        ],
        note: 'Use o Portkey / Prisma AIRS se quiser roteamento de gateway junto de uma governança de segurança de IA que você compraria de qualquer forma. Evite-o se a independência do roadmap de um grande fornecedor de segurança importar para a sua arquitetura.',
      },
      failover: {
        id: 'failover',
        title: 'Como cada gateway lida com o failover?',
        content: '**Os três suportam failover automático quando um provedor falha — a diferença está em quem escreve a política de failover.** LiteLLM e Portkey permitem definir cadeias de failover e regras de balanceamento em uma configuração que você controla. O OpenRouter resolve isso no nível da plataforma: se um provedor dá erro, ele pode rotear automaticamente para um modelo equivalente, com menos controle fino sobre qual.',
        items: [
          '**LiteLLM** — cadeias de failover definidas na sua própria configuração; o maior controle sobre qual modelo reserva atende uma requisição que falhou',
          '**Portkey / Prisma AIRS** — fallbacks automáticos e balanceamento de carga disponíveis em todos os planos, configurados na plataforma',
          '**OpenRouter** — failover automático entre provedores no nível da plataforma; nenhuma cadeia para configurar e nenhuma garantia sobre qual provedor assume',
        ],
        note: 'Para times com exigência rígida sobre qual modelo reserva atende uma requisição que falhou — permanecer dentro de um limite de residência de dados da UE, por exemplo — a configuração auto-hospedada do LiteLLM é a única das três que permite escrever essa política.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deve usar cada gateway?',
        content: '**Desenvolvedores com infraestrutura devem escolher o LiteLLM por padrão; times que querem acesso multimodelo sem operação, o OpenRouter; empresas dentro de um stack da Palo Alto devem avaliar o Prisma AIRS.** Além dessa divisão, o tamanho do time, os requisitos de conformidade e a tolerância à carga operacional decidem o resto.',
        items: [
          '**Desenvolvedores solo e startups pequenas prototipando com vários modelos** → OpenRouter. Uma API key, mais de 380 modelos, nenhum servidor para cuidar. Dispense se for muito sensível a custo em volume alto: a taxa se acumula.',
          '**Times de plataforma com aplicações multimodelo em produção** → LiteLLM auto-hospedado. Gratuito, é o padrão da comunidade, e você mantém o controle do roteamento e da residência dos dados. Evite sem capacidade de operar um serviço.',
          '**Empresas que já adquirem produtos da Palo Alto Networks** → Portkey dentro do Prisma AIRS. Agora ele é entregue como camada de governança e segurança, então a proposta é outra em relação a um ano atrás.',
          '**Setores regulados que precisam de implantação isolada de rede** → o LiteLLM Enterprise suporta isso explicitamente; confirme as opções atuais de implantação do Prisma AIRS diretamente com a Palo Alto Networks, já que integrações pós-aquisição mudam a oferta no curto prazo. Veja também [conformidade corporativa com LLMs locais](/pt/local-llms/enterprise-compliance-local-llms).',
          '**Times que chamam um provedor com volume baixo** → nenhum gateway. Chame o SDK diretamente e reavalie quando adicionar um segundo provedor.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Gateways LLM na UE, no Japão e na China',
        content: 'Onde o gateway roda determina para onde vão seus prompts. Isso torna a escolha do gateway uma decisão de conformidade em três grandes mercados, não apenas uma questão de custo.',
        subsections: [
          {
            title: 'União Europeia',
            content: 'Um gateway hospedado roteia o conteúdo dos prompts para o provedor que ele selecionar e, se esse provedor estiver fora do EEE, isso pode constituir transferência internacional sob os artigos 44 a 49 do RGPD. Uma instância auto-hospedada do LiteLLM permite fixar a cadeia de failover apenas em endpoints da região da UE e registrar exatamente o que saiu do perímetro — que é também o que torna defensável em auditoria a minimização de dados do artigo 5. Organizações que respondem a autoridades europeias normalmente precisam dessa política de roteamento documentada e imposta tecnicamente, não delegada à substituição automática de modelos por um fornecedor.',
          },
          {
            title: 'Japão',
            content: 'O programa do METI de governança de IA e soberania nacional empurra as empresas japonesas para inferência on-premises e caminhos de dados auditáveis. Um gateway auto-hospedado se encaixa diretamente nessa postura: o LiteLLM pode ficar à frente de servidores de modelos domésticos rodando Qwen2.5 ou pesos da família Llama, ao lado de provedores hospedados, mantendo o tráfego regulado em infraestrutura dentro do Japão e ainda oferecendo aos desenvolvedores uma única API. Um gateway exclusivamente hospedado, com substituição automática de provedor, é mais difícil de conciliar com essa exigência.',
          },
          {
            title: 'China',
            content: 'Sob a Lei de Segurança de Dados (数据安全法) e as regras da CAC sobre transferência transfronteiriça, o problema de conformidade é rotear o conteúdo dos prompts para provedores de modelos estrangeiros — não o gateway em si. Implantações que atendem usuários da China continental normalmente rodam o gateway em infraestrutura doméstica e roteiam apenas para modelos locais em conformidade, como Qwen2.5 ou Baichuan. O proxy auto-hospedado do LiteLLM é a opção viável aqui; o roteamento automático do OpenRouter para o provedor que estiver disponível é exatamente o comportamento que as regras da CAC não permitem.',
          },
        ],
        note: 'Use um gateway auto-hospedado em qualquer mercado onde você precise declarar por escrito qual provedor atendeu determinada requisição. Use um hospedado onde nenhuma restrição de transferência internacional se aplique aos seus dados.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao escolher um gateway LLM',
        numberedItems: [
          {
            title: 'Supor que "gateway" significa a mesma coisa nas três ferramentas',
            whyItMatters: 'O LiteLLM é um proxy auto-hospedado, o OpenRouter é uma API hospedada e o Portkey agora faz parte de uma plataforma de segurança. Leia a página de produto atual de cada fornecedor antes de comparar listas de recursos — não presuma paridade.',
          },
          {
            title: 'Escolher o OpenRouter para produção de alto volume sem modelar a taxa',
            whyItMatters: 'Com US$ 10.000/mês de gasto em modelos, a taxa de ~5,5% dá cerca de US$ 550 por mês, ou US$ 6.600 por ano. Faça essa conta com o seu gasto real, não apenas com o ganho de conveniência.',
          },
          {
            title: 'Adotar um gateway antes de ter um segundo provedor em produção',
            whyItMatters: 'O valor central de um gateway é o roteamento multiprovedor com failover. Com um modelo de um provedor, você está acrescentando uma camada de abstração, um novo modo de falha e uma curva de aprendizado sem retorno ainda.',
          },
          {
            title: 'Citar preços do Portkey capturados antes de maio de 2026',
            whyItMatters: 'Páginas de preços e artigos anteriores à aquisição pela Palo Alto podem não refletir as condições atuais do Prisma AIRS. Confirme com o fornecedor antes de basear uma decisão de compra em uma captura antiga.',
          },
          {
            title: 'Tratar estrelas do GitHub como comparativo de recursos',
            whyItMatters: 'As ~53,8 mil estrelas do LiteLLM indicam confiança da comunidade e a probabilidade de o projeto seguir mantido daqui a dois anos — não que ele tenha mais recursos que Portkey ou OpenRouter. Use a tabela comparativa, não o sinal de adoção.',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: 'Dispense o gateway por completo se…',
        content: '**Se você chama um único provedor de LLM com volume baixo e previsível e não planeja adicionar um segundo em breve, deixe os três de lado.** Um gateway acrescenta complexidade operacional (auto-hospedado) ou uma taxa percentual (hospedado) em troca de um benefício multiprovedor que você ainda não usa.\n\nChame o SDK do provedor diretamente e reavalie no dia em que realmente adicionar um segundo modelo ou provedor. A mesma lógica vale um nível abaixo: se você ainda está decidindo se vai chamar APIs hospedadas, leia primeiro [LLMs locais vs APIs em nuvem](/pt/local-llms/local-llms-vs-cloud-apis) — o gateway mais barato é aquele de que você nunca precisou.',
        callouts: [
          {
            type: 'tip',
            text: 'Um gatilho útil: adicione um gateway na primeira vez que escrever no seu próprio código uma ramificação específica de provedor. Esse condicional é o código de cola que um gateway existe para eliminar.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é um gateway de API LLM?',
            a: 'É uma camada de roteamento que dá à sua aplicação uma única API consistente para chamar vários provedores de LLM, normalmente acrescentando failover, controle de custos e rate limiting sobre as APIs originais. Você chama o gateway; ele cuida do formato específico de cada provedor e da autenticação. O benefício só se materializa quando há mais de um provedor em produção.',
          },
          {
            q: 'O LiteLLM é realmente gratuito?',
            a: 'O núcleo open source é gratuito e auto-hospedado, sem custo de licença, conforme a própria página de preços do LiteLLM em agosto de 2026. Não há acréscimo por requisição em nenhum volume. O plano Enterprise — SSO, SCIM, suporte dedicado e implantação isolada de rede — tem preço anual sob consulta conforme o volume de requisições e inclui teste de 30 dias.',
          },
          {
            q: 'O OpenRouter cobra por requisição?',
            a: 'Não diretamente. A taxa do OpenRouter incide sobre a recarga da conta: cerca de 5,5% sobre compras de saldo via Stripe, com mínimo de US$ 0,80, ou 5% em cripto. Uma taxa BYOK separada de 5% se aplica apenas quando o gasto mensal roteado por BYOK ultrapassa US$ 25.000 no pagamento por uso, ou US$ 200.000 no plano corporativo.',
          },
          {
            q: 'O Portkey ainda é uma empresa independente?',
            a: 'Não. A Palo Alto Networks concluiu a aquisição do Portkey em 29 de maio de 2026 e o está integrando como gateway de IA central da sua plataforma de segurança Prisma AIRS, conforme o comunicado da própria Palo Alto Networks. Trate qualquer informação de preço ou roadmap anterior a maio de 2026 como potencialmente defasada.',
          },
          {
            q: 'Qual gateway suporta mais provedores?',
            a: 'O OpenRouter lista mais de 380 modelos no próprio site em agosto de 2026. A documentação do LiteLLM descreve mais de 100 integrações de provedores — uma unidade diferente, já que um provedor expõe muitos modelos. O repositório do Portkey já anunciou mais de 1.600 LLMs, número que deveria ser reverificado após a aquisição.',
          },
          {
            q: 'Posso auto-hospedar o Portkey?',
            a: 'O Portkey/Prisma AIRS oferecia implantação em nuvem privada no plano Enterprise conforme as páginas de preços anteriores à aquisição. Confirme as condições atuais de auto-hospedagem diretamente com a Palo Alto Networks, já que integrações pós-aquisição costumam mudar as opções de implantação no primeiro ano.',
          },
          {
            q: 'Algum dos três tem programa de afiliados?',
            a: 'Nenhum programa público e verificável de afiliados ou indicação foi encontrado para LiteLLM, Portkey ou OpenRouter em agosto de 2026. Todos os links de produto desta página são links simples e declarados que não rendem nada à PromptQuorum. Se isso mudar, a página será atualizada com uma divulgação compatível com os termos reais do programa.',
          },
          {
            q: 'Como decidir entre auto-hospedar e um gateway hospedado?',
            a: 'Compare 5,5% do seu gasto mensal com modelos ao custo de operar um serviço pequeno e permanente. Abaixo desse ponto de virada, o OpenRouter sai mais barato depois de contar o seu tempo; acima dele, o LiteLLM auto-hospedado vence em valores absolutos. Acrescente um segundo teste de conformidade: se você precisa declarar qual provedor atendeu uma requisição, auto-hospede independentemente da aritmética.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito final',
        items: [
          '**Use o LiteLLM se** você puder auto-hospedar e quiser zero taxa recorrente com controle total do roteamento — próximo passo: implante o proxy open source e aponte a URL base da sua aplicação para ele.',
          '**Use o OpenRouter se** quiser acesso multimodelo hoje sem infraestrutura — próximo passo: crie uma API key e credite a conta, prevendo a taxa de ~5,5%.',
          '**Use o Portkey / Prisma AIRS se** já estiver comprando segurança da Palo Alto Networks e quiser roteamento de gateway incluído — próximo passo: fale com a Palo Alto Networks para reverificar as condições atuais após a aquisição.',
          '**Dispense os três se** chamar um único provedor com volume baixo e sem planos multiprovedor no curto prazo — próximo passo: reavalie quando adicionar um segundo provedor.',
        ],
        note: 'Os links de produto desta página levam ao site de cada fornecedor. A PromptQuorum não mantém relação de afiliação com LiteLLM, OpenRouter ou Portkey / Palo Alto Networks e não ganha nada com esses links.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'Página oficial de preços do LiteLLM', description: 'Detalhamento dos planos open source e Enterprise, direto do fornecedor.' },
          { url: 'https://github.com/BerriAI/litellm', title: 'BerriAI/litellm no GitHub', description: 'Estrelas e forks do repositório, licença e descrição de recursos.' },
          { url: 'https://openrouter.ai/docs/faq', title: 'FAQ do OpenRouter', description: 'Percentuais de taxa sobre compras de saldo e faixas da taxa BYOK, direto do fornecedor.' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'Documentação de limites da API do OpenRouter', description: 'Limites de taxa do plano gratuito e regras de acesso baseado em saldo.' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'Palo Alto Networks conclui a aquisição do Portkey', description: 'Data de conclusão da aquisição e plano de integração ao Prisma AIRS.' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'Portkey-AI/gateway no GitHub', description: 'Repositório open source do gateway e números declarados de provedores.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Rode uma API compatível com OpenAI sobre um LLM local](/pt/local-llms/local-llm-openai-compatible-api) — o runtime na frente do qual um gateway fica',
          '[LLMs locais vs APIs em nuvem: o que chamar](/pt/local-llms/local-llms-vs-cloud-apis) — decida isso antes de escolher um gateway',
          '[O stack de desenvolvimento para LLMs locais](/pt/local-llms/local-llm-developer-stack) — onde um gateway se encaixa na cadeia de ferramentas',
          '[Comparativo de aluguel de GPU em nuvem 2026](/pt/local-llms/cloud-gpu-rental-comparison-2026) — alugar computação em vez de rotear para modelos hospedados',
          '[Calculadora de custo: construir ou alugar para LLMs locais](/pt/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — a mesma aritmética aplicada a hardware',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM vs OpenRouter vs Portkey: melhor gateway LLM 2026',
      description: 'Comparativo de LiteLLM, OpenRouter e Portkey/Prisma AIRS como gateways de API LLM: preços reais, opções de auto-hospedagem, controle de failover e a aquisição pela Palo Alto que mudou a categoria do Portkey.',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/pt/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'pt-BR',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Gateway de API LLM' },
        { '@type': 'Thing', name: 'Roteamento multimodelo' },
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
      inLanguage: 'pt-BR',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é um gateway de API LLM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Uma camada de roteamento que dá à sua aplicação uma única API consistente para chamar vários provedores de LLM, acrescentando failover, controle de custos e rate limiting sobre as APIs originais.',
          },
        },
        {
          '@type': 'Question',
          name: 'O LiteLLM é realmente gratuito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O núcleo open source é gratuito e auto-hospedado, sem custo de licença e sem acréscimo por requisição em nenhum volume, conforme a própria página de preços em agosto de 2026. O plano Enterprise tem preço anual sob consulta.',
          },
        },
        {
          '@type': 'Question',
          name: 'O OpenRouter cobra por requisição?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. O OpenRouter cobra cerca de 5,5% sobre compras de saldo via Stripe (mínimo US$ 0,80) ou 5% em cripto, mais taxa BYOK de 5% apenas acima de US$ 25.000/mês de gasto roteado por BYOK no pagamento por uso, ou US$ 200.000/mês no corporativo.',
          },
        },
        {
          '@type': 'Question',
          name: 'O Portkey ainda é uma empresa independente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. A Palo Alto Networks concluiu a aquisição em 29 de maio de 2026 e está integrando o Portkey como gateway de IA dentro da plataforma de segurança Prisma AIRS.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como decidir entre auto-hospedar e um gateway LLM hospedado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Compare 5,5% do seu gasto mensal com modelos ao custo de operar um serviço pequeno e permanente. Acima desse ponto de virada, o LiteLLM auto-hospedado vence; abaixo dele, o OpenRouter ganha depois de contar o seu tempo.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Melhores gateways de API LLM (agosto de 2026)',
      inLanguage: 'pt-BR',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: 'Melhor no geral — proxy open source gratuito e auto-hospedado, mais de 100 APIs de provedores, sem acréscimo por requisição' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: 'Melhor gateway sem configuração — mais de 380 modelos com uma API key, taxa de ~5,5% sobre o saldo creditado' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: 'Compra de segurança corporativa — plano Production de US$ 49/mês, agora parte do Prisma AIRS da Palo Alto Networks' },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM vs OpenRouter vs Portkey：最適なLLMゲートウェイ 2026',
    seoTitle: '最適なLLM APIゲートウェイ2026：LiteLLMかOpenRouterか',
    metaDescription: 'LiteLLMのプロキシは無料・セルフホスト、OpenRouterはクレジット購入に約5.5%、Portkeyは現在Palo AltoのPrisma AIRSの一部。',
    educationalLevel: 'Advanced',
    audience: 'マルチモデルLLMアプリケーションを構築する開発者',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11分で読める',
    primaryTerm: 'LLM APIゲートウェイ',
    targetKeywords: [
      '最適なLLMゲートウェイ 2026',
      'LiteLLM vs OpenRouter',
      'LLM APIゲートウェイ 比較',
      'セルフホスト LLMプロキシ',
      'OpenRouter 手数料',
    ],
    leadAnswerBlock: '**2026年、ほとんどの開発者にとって最適なLLM APIゲートウェイはLiteLLMです。オープンソースのプロキシは無料・セルフホストで、100以上のプロバイダーAPIを単一のOpenAI互換インターフェース経由でルーティングし、リクエストごとの上乗せがありません。インフラを一切用意せず今日から380以上のモデルを使いたい場合はOpenRouterが最適で、その代わりStripeでのクレジット購入に約5.5%がかかります。Portkeyはすでに独立したゲートウェイではありません。Palo Alto Networksが2026年5月29日に買収を完了し、セキュリティ基盤Prisma AIRSへ統合を進めています。**',
    quickAnswerTop: {
      question: '2026年に最適なLLM APIゲートウェイはどれですか？',
      answer: '**サービスを運用できるチームにはLiteLLM、運用できないチームにはOpenRouterが向きます。** LiteLLMのオープンソース中核は利用量にかかわらず無料で、ルーティングロジックとデータ所在地を自社の管理下に保てます。OpenRouterはインフラ作業を完全に不要にする代わり、Stripeでのクレジット購入に約5.5%（暗号資産では5%）、さらに無料枠を超えた分に5%のBYOK手数料を課します。PortkeyはPalo Alto NetworksのPrisma AIRS内のAIゲートウェイとしてのみ提供されており、軽量ツールではなくエンタープライズ・セキュリティ製品として評価してください。',
      bullets: [
        '**総合最良：** LiteLLM — 無料・セルフホスト、GitHubスター約57.5k、100以上のプロバイダーAPI',
        '**設定不要で最良：** OpenRouter — APIキー1つで380以上のモデル、クレジットに約5.5%の手数料',
        '**エンタープライズ・セキュリティ購入：** Portkey / Prisma AIRS — Production版は月額49ドル、現在はPalo Alto傘下',
        '**損益分岐点：** 月間モデル費用の5.5%がプロキシのホスティング費用を上回った時点でセルフホストが有利',
        '⚠️ 3社とも公開されたアフィリエイト／紹介プログラムはありません。本記事のリンクはすべて通常の製品リンクです',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: '要点', anchor: 'tldr' },
      { label: '最良の選択：セルフホストか、借りるか', anchor: 'best-choice' },
      { label: 'LLM APIゲートウェイとは何か', anchor: 'what-is-a-gateway' },
      { label: '完全比較表', anchor: 'comparison' },
      { label: 'セルフホストの道：LiteLLM', anchor: 'self-hosted-track' },
      { label: 'ホスティングの道：OpenRouterとPrisma AIRS', anchor: 'hosted-track' },
      { label: '規模が大きくなると各ゲートウェイはいくらかかるか', anchor: 'cost-at-scale' },
      { label: 'Portkeyの資本変更が重要な理由', anchor: 'portkey-acquisition' },
      { label: '各ゲートウェイの障害時の挙動', anchor: 'failover' },
      { label: 'どのゲートウェイを誰が使うべきか', anchor: 'who-should-use' },
      { label: '地域別の文脈：EU・日本・中国', anchor: 'regional-context' },
      { label: 'よくある間違い', anchor: 'common-mistakes' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '最終結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**LiteLLMのオープンソース・プロキシは利用量にかかわらず無料** — 単一のOpenAI互換エンドポイントの背後に100以上のプロバイダーAPIを置き、支出追跡・予算・レート制限まで無料枠に含まれます。',
          'OpenRouterはサブスクリプション不要ですが、Stripeでのクレジット購入に約5.5%（最低0.80ドル）、暗号資産で5%、さらに月額25,000ドル（従量課金）または200,000ドル（エンタープライズ）を超える分に5%のBYOK手数料がかかります。',
          'PortkeyはPalo Alto Networksに買収され（2026年5月29日完了）、Prisma AIRSへ統合されています。現在はエンタープライズ・セキュリティ購入として扱ってください。',
          'LiteLLMのGitHubリポジトリは2026年8月時点でスター約57.5k、フォーク約11.0k — 3者の中で最も明確な普及シグナルです。',
          'OpenRouterは380以上のモデルを掲載しており、登録からマルチモデル呼び出しの動作までが最短です。',
          '正直な損益分岐点：月間モデル費用の5.5%がプロキシ運用コストを上回った時点で、セルフホストのほうが安くなります。',
          '**ゲートウェイ自体を見送るべき場合**：単一プロバイダーを低頻度かつ予測可能な量で呼び出しており、2社目の予定がないとき。',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 最良の選択：セルフホストか、ゲートウェイを借りるか',
        content: '**動かす場所があるならLiteLLMを自前で運用し、ないならOpenRouterを使ってください。** この一点が、どんな機能一覧よりも確実にこの選択を決めます。3つのツールはいずれも、単一API・フェイルオーバー・コスト追跡というゲートウェイの中核業務をすでに満たしているからです。',
        decisionBlock: {
          title: 'セルフホストか、ホスト型ゲートウェイか',
          localIf: [
            'すでにサービスを運用しており、プロキシの保守ができる — LiteLLMはどの利用量でも上乗せなし',
            '月間モデル費用が十分に大きく、5%が実額として効いてくる（月500ドルを超えると、多くの小規模ホスティング費用を上回ります）',
            '失敗したリクエストをどのプロバイダーが処理するかを正確に制御する必要がある（EUのデータ所在地の境界内に留めるなど）',
            'エアギャップ環境での導入が必要（LiteLLM Enterpriseが明示的に対応）',
          ],
          cloudIf: [
            'DevOpsの余力がなく、稼働中のサービスを抱えたくない',
            '1時間以内に380以上のモデルを呼び出したい — OpenRouterに必要なのはAPIキーだけ',
            '支出が控えめで、節約できる時間に比べれば約5.5%は誤差の範囲',
            'すでにPalo Alto Networksのセキュリティ製品を購入しており、Prisma AIRS内でゲートウェイを統制したい',
          ],
          quick: [
            '無料でセルフホスト → **LiteLLM**（Apacheライセンスのオープンソース中核、スター約57.5k）',
            'インフラ不要、今日からモデルを → **OpenRouter**（380以上のモデル、クレジットに約5.5%）',
            'エンタープライズのAIセキュリティ統制 → **Portkey / Prisma AIRS**（Production月額49ドル、Enterpriseは要問い合わせ）',
            'プロバイダー1社・低頻度 → **ゲートウェイ不要** — SDKを直接呼び出してください',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: '無料（オープンソース中核）',
            label: 'LiteLLM — 無料で始める（セルフホスト）',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: 'サブスクなし。クレジット購入に約5.5%',
            label: 'OpenRouter — 料金を見る',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: 'LLM APIゲートウェイとは何か',
        content: '**LLM APIゲートウェイとは、アプリケーションと複数のモデルプロバイダーの間に入り、単一で一貫したAPIを提供するルーティング層です。** OpenAI、Anthropic、Googleなどそれぞれに個別の連携コードを書く代わりに、ゲートウェイを一度呼び出せば、プロバイダー固有のフォーマット、認証、フェイルオーバー、そして多くの実装ではコスト追跡とレート制限まで面倒を見てくれます。\n\nこの効果は、本番環境でプロバイダーが2社以上になって初めて生まれます。単一プロバイダーのアプリケーションでは、ゲートウェイは見返りのない抽象化層にすぎません。プロバイダーの乱立がすでにグルーコードやオンコール対応のコストを生んでいるなら導入し、そうでなければ見送ってください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLM APIゲートウェイは、アプリケーションからの呼び出しを単一のOpenAI互換インターフェース経由で複数のモデルプロバイダーへルーティングし、元のAPIの上にフェイルオーバー、コスト追跡、レート制限を追加します。',
          },
          {
            type: 'plain-terms',
            text: 'AIモデル用の電源変換アダプターだと考えてください。コードは1つの差込口に挿すだけで、プロバイダーごとにプラグ形状が違う問題はアダプターが吸収します。使うプラグが1種類だけなら、アダプターは不要です。',
          },
        ],
        note: 'ゲートウェイはローカルランタイムとは別物です。ホスト型プロバイダーへルーティングするのではなく自前のハードウェアでモデルを動かしたい場合は、[ローカルLLM向けOpenAI互換APIガイド](/ja/local-llms/local-llm-openai-compatible-api)と[llama.cpp vs Ollama vs vLLM比較](/ja/local-llms/llamacpp-vs-ollama-vs-vllm)をご覧ください。これらはランタイムであり、ゲートウェイはその前段に置かれます。',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM vs OpenRouter vs Portkey：完全比較',
        content: '**すべての項目で勝つゲートウェイはありません。コストと制御ではLiteLLM、導入の速さではOpenRouter、エンタープライズ統制ではPrisma AIRSが優れます。** 価格とプログラム内容は2026年8月27日に各社の公式ページで確認しました。ゲートウェイの価格は今年何度も動いているため、本ページの公開から90日以上経過している場合は再確認してください。',
        tableFormat: true,
        columns: ['評価軸', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { 評価軸: '最適な対象', LiteLLM: 'セルフホストで完全な制御を求め、手数料を避けたいチーム', OpenRouter: 'インフラなしで素早くマルチモデルを扱いたい場合', 'Portkey (Prisma AIRS)': 'すでにPalo Altoのセキュリティを購入している企業' },
          { 評価軸: '価格', LiteLLM: '無料（OSS）／Enterpriseは年額・要問い合わせ', OpenRouter: 'サブスクなし。Stripeで約5.5%、暗号資産で5%', 'Portkey (Prisma AIRS)': '無料枠は月1万ログ／Production月額49ドル／Enterpriseは要問い合わせ' },
          { 評価軸: 'セルフホスト', LiteLLM: '可 — 設計の中心。マネージドプロキシも選択可', OpenRouter: '不可 — ホスト型APIのみ', 'Portkey (Prisma AIRS)': 'Enterpriseでプライベートクラウド導入が可能' },
          { 評価軸: 'プロバイダー／モデル', LiteLLM: '100以上のプロバイダーAPI', OpenRouter: '380以上のモデルを掲載', 'Portkey (Prisma AIRS)': 'リポジトリは以前1,600以上のLLMを掲げていた' },
          { 評価軸: 'フェイルオーバー', LiteLLM: '可 — OSS版で設定可能なチェーン', OpenRouter: '可 — プラットフォーム側で自動', 'Portkey (Prisma AIRS)': '可 — 全プランでフォールバックと負荷分散' },
          { 評価軸: 'コスト追跡', LiteLLM: '可 — OSS版で支出追跡と予算', OpenRouter: '可 — リクエスト単位のクレジット画面', 'Portkey (Prisma AIRS)': '可 — コスト按分と仮想キー単位の予算' },
          { 評価軸: 'レート制限', LiteLLM: '可 — OSS版', OpenRouter: 'アカウント単位でグローバル（利用者側で設定不可）', 'Portkey (Prisma AIRS)': 'Enterpriseで細かな制御' },
          { 評価軸: 'アフィリエイト', LiteLLM: '確認できず', OpenRouter: '確認できず', 'Portkey (Prisma AIRS)': '確認できず（Palo AltoのものはB2B）' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年5月より前に取得した価格情報は、もはやPortkeyの実態を表していません。古い記事やスクリーンショットの数字を引用する前に、Prisma AIRSの現行条件をPalo Alto Networksに確認してください。',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: 'セルフホストの道：LiteLLMが既定である理由',
        content: '**LiteLLMがコミュニティの既定になっているのは、無料枠が製品そのものであり、試用版ではないからです。** 支出追跡、予算、レート制限、フェイルオーバー・チェーンはすべてオープンソース中核に含まれます。Enterpriseが追加するのはSSO、SCIM、専任サポート、エアギャップ導入であって、ルーティング機能そのものではありません。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LiteLLMのオープンソース・プロキシは、100以上のLLMプロバイダーAPIをOpenAI互換インターフェース経由で呼び出します。ライセンス費用もリクエストごとの上乗せもなく、これはどの利用量でも変わりません。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — 総合的に最良のゲートウェイ',
            tagline: '無料・セルフホスト・GitHubスター約57.5k — 事実上の標準に最も近い存在',
            verdict: 'LiteLLMの中核プロキシは無料かつオープンソースで、100以上のプロバイダーAPIをOpenAI互換エンドポイント経由でルーティングします。ここで唯一、モデル費用に対する割合上乗せがない選択肢であり、相応の利用量になれば絶対額で最も安くなる理由もそこにあります。約57.5kのスターと約11.0kのフォーク（2026年8月）は3ツール中で最も強い保守継続シグナルで、本番のルーティング層を2年後も保守されている前提で預けるなら重要な指標です。支払う対価は運用面にあります。サービスを運用し、監視し、更新するのは自分たちです。',
            pros: [
              'リクエスト単位の課金も割合上乗せもなし — どの利用量でも無料',
              'フェイルオーバー・チェーン、予算、レート制限がすべて無料のOSS版に含まれる',
              'ルーティングロジックとデータ所在地を完全に制御できる',
              'Enterpriseはエアギャップ導入に明示的に対応',
            ],
            cons: [
              '可用性、パッチ適用、監視の責任は自社が負う',
              'Enterprise価格は要問い合わせで、予算化できる公開数値がない',
              'DevOpsの余力がまったくないチームには不向き',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: '無料（OSS中核）／Enterpriseは年額・要問い合わせ',
                label: 'LiteLLM — 無料で始める',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'GitHub上のLiteLLM',
                productCategory: 'dev-tool',
                priceRange: '無料',
                label: 'ソースコードを見る（BerriAI/litellm）',
              },
            ],
          },
        ],
        note: '継続課金をゼロにし、ルーティングを完全に制御したいならLiteLLMを選んでください。プロキシを運用できる人員がチームにいない場合は避けるべきです。ライセンスが無料でも、この運用コストは実在します。',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: 'ホスティングの道：OpenRouterとPrisma AIRS',
        content: 'ゲートウェイを自前で運用せず借りることには、宣伝文句ではない実際的な理由があります。可用性、アップデート、シークレット管理、そしてリクエスト経路上のあらゆるサービスに付いて回るオンコール対応という、現実のインフラ作業を回避できます。ホスト型ゲートウェイは、自前なら1社ずつ統合するしかないプロバイダー網も提供します。\n\n**その代償が、支出に比例して増える割合手数料と、フェイルオーバー制御の粒度の粗さです。** 利用量が中程度なら良い取引、大きければ悪い取引になります。損益分岐点の正確な計算は[下のコストの節](#cost-at-scale)にあります。',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — 設定不要で最良のゲートウェイ',
            tagline: 'APIキー1つで380以上のモデル、運用するサーバーはゼロ',
            verdict: 'OpenRouterは、ゼロの状態から動くマルチモデル・アプリケーションまでが最短の経路です。登録してAPIキーを取得すれば、その日のうちに掲載された380以上のモデルを呼び出せます。サブスクリプションはなく、手数料はアカウントへの入金にかかります。Stripeでのクレジット購入に約5.5%（最低0.80ドル）、暗号資産では5%です。5%のBYOK手数料は、BYOK経由の月間支出が25,000ドル（従量課金）または200,000ドル（エンタープライズ）を超えて初めて発生するため、軽い利用では追加費用は生じません。フェイルオーバーは自動ですがプラットフォーム側の処理で、プロバイダーがエラーを返すと、こちらでチェーンを設定しなくても同等モデルへ振り替えられます。',
            pros: [
              'インフラは一切不要 — APIキーがあれば準備は完了',
              '掲載モデルは380以上。手作業で統合できる数をはるかに超える',
              'サブスク不要。BYOKの軽い利用は無料枠に収まる',
              '設定不要でプロバイダー間の自動フェイルオーバー',
            ],
            cons: [
              '約5.5%の手数料は積み上がり、利用量が大きいと高くつく',
              'レート制限はアカウント単位でグローバル、利用者側では設定できない',
              '失敗したリクエストをどのプロバイダーが処理するかの制御が弱く、厳格なデータ所在地要件では問題になる',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'サブスクなし。Stripeでのクレジット購入に約5.5%',
                label: 'OpenRouter — 料金を見る',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'OpenRouterの手数料ドキュメント',
                productCategory: 'cloud-ai',
                priceRange: '閲覧は無料',
                label: '現行の手数料体系を確認する',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — エンタープライズ・セキュリティ購入',
            tagline: '現在はPalo Alto Networksのセキュリティ基盤内のAIゲートウェイ',
            verdict: 'Portkeyは今もゲートウェイの仕事をこなします。自動フォールバック、負荷分散、コスト按分、仮想キー単位の予算管理が全プランで使え、無料のDeveloperプランは月1万ログ、Productionプランは月額49ドルで月10万ログです。変わったのはカテゴリーです。Palo Alto Networksが2026年5月29日に買収を完了して以降、独立したルーターではなくPrisma AIRSセキュリティ基盤内のAIゲートウェイとして位置づけられています。エンタープライズのAI統制をすでに調達しているなら好相性で、身軽で独立したツールを求めていたなら不適合です。',
            pros: [
              '無料プランを含む全プランでフォールバックと負荷分散が使える',
              'コスト按分と仮想キー単位の予算管理を標準搭載',
              'Enterpriseではプライベートクラウド導入が可能',
              'ゲートウェイのルーティングと広範なAIセキュリティ統制を統合',
            ],
            cons: [
              'すでに独立ではなく、ロードマップと価格は大手セキュリティ企業に従う',
              '2026年5月より前の価格やプラン構成はすでに古い可能性がある',
              'ベンダー中立性がゲートウェイ導入の理由だったなら不適合',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: '無料プランあり／Production月額49ドル／Enterpriseは要問い合わせ',
                label: 'Portkey — 無料で始める（月1万ログ）',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: 'エンタープライズ価格は要問い合わせ',
                label: 'Prisma AIRS — プランを見る',
              },
            ],
          },
        ],
        note: '「同等のモデルが動き続けさえすればよい」がフェイルオーバー方針として許容できるならOpenRouterを使ってください。あふれたトラフィックをどのプロバイダーが処理するかについて契約上の保証が必要なら避けるべきです。',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: '規模が大きくなると各ゲートウェイはいくらかかるか',
        content: '**LiteLLMのオープンソース中核は利用量にかかわらず無料のままです。OpenRouterのコストは入金額に対する割合、Portkeyのコストはログ量と契約条件に応じて増えます。** 下の表は、公開されている約5.5%のStripe手数料に対する単純な計算です。推計ではなく、この選択を決める数字そのものです。\n\nLiteLLMの運用費をあえてドル額で示していません。プロキシは小さな常駐サービスであり、その費用はどこで動かすかに完全に依存するためです。最後の列に自社のホスティング費用を入れれば、判断はおのずと決まります。\n\n日本の読者向けの注記：3社とも米ドル建てで請求します。円建ての価格表はないため、明細には為替レートと、カードによっては海外事務手数料が上乗せされます。',
        tableFormat: true,
        columns: ['月間モデル費用', 'OpenRouter手数料（約5.5%）', 'LiteLLMライセンス費', 'セルフホストが有利になる目安'],
        rows: [
          { '月間モデル費用': '200ドル', 'OpenRouter手数料（約5.5%）': '約11ドル/月（約132ドル/年）', 'LiteLLMライセンス費': '0ドル', 'セルフホストが有利になる目安': '月11ドル未満' },
          { '月間モデル費用': '500ドル', 'OpenRouter手数料（約5.5%）': '約27.50ドル/月（約330ドル/年）', 'LiteLLMライセンス費': '0ドル', 'セルフホストが有利になる目安': '月27.50ドル未満' },
          { '月間モデル費用': '2,000ドル', 'OpenRouter手数料（約5.5%）': '約110ドル/月（約1,320ドル/年）', 'LiteLLMライセンス費': '0ドル', 'セルフホストが有利になる目安': '月110ドル未満' },
          { '月間モデル費用': '10,000ドル', 'OpenRouter手数料（約5.5%）': '約550ドル/月（約6,600ドル/年）', 'LiteLLMライセンス費': '0ドル', 'セルフホストが有利になる目安': '月550ドル未満' },
        ],
        callouts: [
          {
            type: 'info',
            text: '手数料は購入したクレジットにかかるもので、リクエストごとではありません。別枠の5%のBYOK手数料も、BYOK経由の月間支出が25,000ドル（従量課金）または200,000ドル（エンタープライズ）を超えて初めて発生します。その枠内であればBYOKに追加費用はかかりません。',
          },
        ],
        note: '月間モデル費用が十分に大きく、5%超の上乗せが絶対額として効いてくるならLiteLLMを選んでください。手数料がプロキシ運用に要するエンジニア工数より安いならOpenRouterが妥当です。同じ計算をハードウェアに当てはめたものは[ローカルLLMのコスト計算](/ja/local-llms/local-llm-cost-calculator-build-vs-rent-2026)にあります。',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'Portkeyの資本変更がこの判断にとって重要な理由',
        content: '**Portkeyはすでに独立した製品ではありません。Palo Alto Networksが2026年5月29日に買収を完了し、セキュリティ基盤Prisma AIRSへ統合を進めています。** これは名称変更ではありません。今日は軽量ツールとして採用したゲートウェイが、製品サイクル1回のうちに価格改定・位置づけ変更を受けたり、より大きなセキュリティ製品群の一部としてのみ販売されるようになったりし得ます。\n\n身軽なスタートアップ製品だという理由でPortkeyを評価していたのであれば、その前提はもう成り立ちません。導入を決める前に、現行条件をPalo Alto Networksに直接確認してください。買収された製品は、統合の最初の6〜12か月で価格・プラン構成・サポート体制が変わることが珍しくありません。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Palo Alto Networksは2026年5月29日にPortkeyの買収を完了し、セキュリティ基盤Prisma AIRS内のAIゲートウェイとして統合を進めています。',
          },
        ],
        note: 'どのみち購入する予定のAIセキュリティ統制とゲートウェイのルーティングをまとめたいならPortkey / Prisma AIRSを選んでください。大手セキュリティ企業のロードマップからの独立性がアーキテクチャ上重要なら避けるべきです。',
      },
      failover: {
        id: 'failover',
        title: '各ゲートウェイはフェイルオーバーをどう扱うか',
        content: '**3つともプロバイダー障害時の自動フェイルオーバーに対応していますが、違いはフェイルオーバー方針を誰が書くかにあります。** LiteLLMとPortkeyは、フェイルオーバー・チェーンと負荷分散ルールを自分の管理下の設定で定義できます。OpenRouterはプラットフォーム側で処理し、プロバイダーがエラーを返すと自動的に同等モデルへ振り替えますが、どのモデルになるかの細かな制御はできません。',
        items: [
          '**LiteLLM** — 自分の設定ファイルで定義するフェイルオーバー・チェーン。失敗したリクエストをどの代替モデルが処理するかを最も細かく制御できる',
          '**Portkey / Prisma AIRS** — 全プランで自動フォールバックと負荷分散が利用でき、プラットフォーム上で設定する',
          '**OpenRouter** — プラットフォーム側でのプロバイダー自動フェイルオーバー。設定するチェーンはなく、どのプロバイダーが引き継ぐかの保証もない',
        ],
        note: '失敗したリクエストをどの代替モデルが処理するかに厳格な要件があるチーム — たとえばEUのデータ所在地の境界内に留める必要がある場合 — にとって、その方針を自ら書けるのは3つのうちLiteLLMのセルフホスト設定だけです。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'どのゲートウェイを誰が使うべきか',
        content: '**インフラを持つ開発者は既定でLiteLLM、運用不要のマルチモデル利用を求めるチームはOpenRouter、Palo Altoの基盤内にいる企業はPrisma AIRSを検討してください。** その先は、チーム規模、コンプライアンス要件、運用負荷への許容度が決めます。',
        items: [
          '**複数モデルで試作する個人開発者や小規模スタートアップ** → OpenRouter。APIキー1つ、380以上のモデル、面倒を見るサーバーはゼロ。利用量が大きくコストに敏感な場合は不向きで、手数料が積み上がります。',
          '**本番でマルチモデル・アプリを運用するプラットフォームチーム** → セルフホストのLiteLLM。無料でコミュニティの既定、ルーティングとデータ所在地の制御も手元に残ります。サービスを運用する余力がなければ避けてください。',
          '**すでにPalo Alto Networks製品を調達している企業** → Prisma AIRS内のPortkey。現在は統制・セキュリティ層として提供されるため、1年前とは提案内容が異なります。',
          '**エアギャップ導入が必要な規制業種** → LiteLLM Enterpriseが明示的に対応。Prisma AIRSの現行の導入形態はPalo Alto Networksに直接確認してください。買収後の統合では短期的に提供内容が変わります。[ローカルLLMのエンタープライズ・コンプライアンス](/ja/local-llms/enterprise-compliance-local-llms)も参照してください。',
          '**単一プロバイダーを低頻度で呼び出すチーム** → ゲートウェイは不要。SDKを直接呼び出し、2社目を追加する時点で再検討してください。',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'EU・日本・中国におけるLLMゲートウェイ',
        content: 'ゲートウェイがどこで動くかが、プロンプトの行き先を決めます。そのため主要3市場では、ゲートウェイ選定はコストだけでなくコンプライアンスの判断になります。',
        subsections: [
          {
            title: '日本',
            content: 'METIのAIガバナンスおよび国内AI主権の取り組みは、日本企業をオンプレミス推論と監査可能なデータ経路へと向かわせています。セルフホストのゲートウェイはこの方針に直接合致します。LiteLLMは、Qwen2.5やLlama系の重みを動かす国内のモデルサーバーの前段に立ち、ホスト型プロバイダーと併存させながら、規制対象のトラフィックを日本国内のインフラに留めたまま、開発者には単一のAPIを提供できます。プロバイダーを自動で振り替えるホスト型専用のゲートウェイは、この要件との両立が困難です。',
          },
          {
            title: 'アジア太平洋',
            content: '域内では、越境データ移転の枠組みが国ごとに異なるため、どのプロバイダーがリクエストを処理したかを記録できることが実務上の要件になります。セルフホストのゲートウェイであれば、フェイルオーバー先を特定リージョンのエンドポイントに限定し、境界を越えた通信を正確に記録できます。ホスト型の自動振り替えでは、この記録を自社で担保できません。',
          },
          {
            title: 'グローバル運用',
            content: '金融・医療・法務など規制の厳しい業種では、プロンプト内容が国外のモデルプロバイダーへ渡ること自体が問題になります。中国本土向けの展開では、データセキュリティ法（数据安全法）とCACの越境データ規則の下、通常はゲートウェイを国内インフラで運用し、Qwen2.5やBaichuanなど適合する国内モデルにのみルーティングします。LiteLLMのセルフホスト・プロキシが現実的な選択肢であり、利用可能なプロバイダーへ自動で振り替えるOpenRouterの挙動は、まさにCAC規則が認めないものです。',
          },
        ],
        note: 'どのプロバイダーが特定のリクエストを処理したかを書面で示す必要がある市場では、セルフホストのゲートウェイを使ってください。自社データに越境移転の制限がかからない市場では、ホスト型で問題ありません。',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'LLMゲートウェイ選定でよくある間違い',
        numberedItems: [
          {
            title: '3つのツールで「ゲートウェイ」が同じ意味だと思い込む',
            whyItMatters: 'LiteLLMはセルフホストのプロキシ、OpenRouterはホスト型API、Portkeyは現在セキュリティ基盤の一部です。機能一覧を比べる前に各社の現行の製品ページを読んでください。同等だと前提してはいけません。',
          },
          {
            title: '手数料を試算せずに大規模本番でOpenRouterを選ぶ',
            whyItMatters: '月10,000ドルのモデル費用では、約5.5%の手数料は月およそ550ドル、年6,600ドルになります。利便性だけでなく、実際の支出額でこの計算をしてください。',
          },
          {
            title: '2社目のプロバイダーが本番に入る前にゲートウェイを導入する',
            whyItMatters: 'ゲートウェイの中核価値は、フェイルオーバーを伴うマルチプロバイダー・ルーティングです。1社の1モデルだけなら、抽象化層と新たな障害点と学習コストを、見返りなしに増やすことになります。',
          },
          {
            title: '2026年5月より前のPortkeyの価格を引用する',
            whyItMatters: 'Palo Altoによる買収前の価格ページやブログ記事は、現行のPrisma AIRSの条件を反映していない可能性があります。古いスクリーンショットを根拠に調達判断を下す前に、ベンダーに確認してください。',
          },
          {
            title: 'GitHubスターを機能比較として読む',
            whyItMatters: 'LiteLLMの約57.5kのスターは、コミュニティの信頼と、2年後もプロジェクトが保守されている見込みを示すものであって、PortkeyやOpenRouterより機能が多いことを意味しません。普及シグナルではなく比較表を見てください。',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: 'ゲートウェイ自体を見送るべき場合',
        content: '**単一のLLMプロバイダーを低頻度かつ予測可能な量で呼び出しており、近いうちに2社目を追加する予定がないなら、3つとも見送ってください。** ゲートウェイは、運用の複雑さ（セルフホスト）または割合手数料（ホスト型）と引き換えに、まだ使っていないマルチプロバイダーの利点をもたらすものです。\n\nプロバイダーのSDKを直接呼び出し、実際に2つ目のモデルやプロバイダーを追加する日に判断し直してください。同じ論理は一段下の階層にも当てはまります。そもそもホスト型APIを呼ぶべきか迷っているなら、まず[ローカルLLM vs クラウドAPI](/ja/local-llms/local-llms-vs-cloud-apis)を読んでください。最も安いゲートウェイは、必要にならなかったゲートウェイです。',
        callouts: [
          {
            type: 'tip',
            text: '有効な判断基準：自分のコードにプロバイダー固有の分岐を初めて書いたときが、ゲートウェイを導入する合図です。その分岐こそ、ゲートウェイが消すために存在するグルーコードです。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LLM APIゲートウェイとは何ですか？',
            a: '複数のLLMプロバイダーを呼び出すための単一で一貫したAPIをアプリケーションに提供するルーティング層で、通常は元のAPIの上にフェイルオーバー、コスト追跡、レート制限を追加します。呼び出すのはゲートウェイで、プロバイダー固有のフォーマットと認証はそちらが処理します。この利点は、本番でプロバイダーが2社以上になって初めて現れます。',
          },
          {
            q: 'LiteLLMは本当に無料ですか？',
            a: '2026年8月時点のLiteLLM公式の価格ページによれば、オープンソース中核は無料かつセルフホストで、ライセンス費用はかかりません。どの利用量でもリクエストごとの上乗せはありません。SSO、SCIM、専任サポート、エアギャップ導入を含むEnterpriseは、リクエスト量に応じた年額の個別見積もりで、30日間の試用が付きます。',
          },
          {
            q: 'OpenRouterはリクエストごとに課金しますか？',
            a: '直接には課金しません。OpenRouterの手数料はアカウントへの入金にかかり、Stripeでのクレジット購入に約5.5%（最低0.80ドル）、暗号資産では5%です。別枠の5%のBYOK手数料は、BYOK経由の月間支出が従量課金で25,000ドル、エンタープライズで200,000ドルを超えた場合にのみ適用されます。',
          },
          {
            q: 'Portkeyはまだ独立企業ですか？',
            a: 'いいえ。Palo Alto Networks自身のプレスリリースによれば、同社は2026年5月29日にPortkeyの買収を完了し、セキュリティ基盤Prisma AIRSの中核AIゲートウェイとして統合を進めています。2026年5月より前の価格やロードマップの情報は、古くなっている可能性があるものとして扱ってください。',
          },
          {
            q: '最も多くのプロバイダーに対応しているのはどれですか？',
            a: 'OpenRouterは2026年8月時点で自社サイトに380以上のモデルを掲載しています。LiteLLMのドキュメントは100以上のプロバイダー統合を挙げていますが、1つのプロバイダーが多数のモデルを提供するため、単位が異なります。Portkeyのゲートウェイ・リポジトリは以前1,600以上のLLMを掲げていましたが、買収を踏まえて再確認すべき数字です。',
          },
          {
            q: 'Portkeyをセルフホストできますか？',
            a: '買収前の価格ページによれば、Portkey/Prisma AIRSはEnterpriseプランでプライベートクラウド導入を提供していました。買収後の統合では初年度に導入形態が変わることが多いため、現行のセルフホスト条件はPalo Alto Networksに直接確認してください。',
          },
          {
            q: '3社のいずれかにアフィリエイト・プログラムはありますか？',
            a: '2026年8月時点で、LiteLLM、Portkey、OpenRouterのいずれについても、公開され確認可能なアフィリエイトや紹介プログラムは見つかりませんでした。本ページの製品リンクはすべて、PromptQuorumに収益をもたらさない通常の開示済みリンクです。状況が変われば、実際のプログラム条件に沿った開示を加えて本ページを更新します。',
          },
          {
            q: 'セルフホストとホスト型ゲートウェイはどう選び分けますか？',
            a: '月間モデル費用の5.5%と、小さな常駐サービスを運用する費用を比べてください。この損益分岐点より下なら、自分の時間を計算に入れるとOpenRouterのほうが安く済みます。上回るなら、絶対額ではセルフホストのLiteLLMが有利です。コンプライアンスの観点でもう一つの基準を加えてください。どのプロバイダーがリクエストを処理したかを示す必要があるなら、計算にかかわらずセルフホストです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '最終結論',
        items: [
          '**LiteLLMを選ぶべき場合：** セルフホストが可能で、継続課金ゼロと完全なルーティング制御を求めるとき — 次の一手：オープンソース・プロキシを配備し、アプリのベースURLをそこに向けてください。',
          '**OpenRouterを選ぶべき場合：** インフラなしで今日からマルチモデルを使いたいとき — 次の一手：APIキーを作成してアカウントに入金し、約5.5%の手数料を見込んでおいてください。',
          '**Portkey / Prisma AIRSを選ぶべき場合：** すでにPalo Alto Networksのセキュリティを購入・検討しており、ゲートウェイ機能もまとめたいとき — 次の一手：買収後の現行条件をPalo Alto Networksに直接確認してください。',
          '**3つとも見送るべき場合：** 単一プロバイダーを低頻度で呼び出し、当面マルチプロバイダーの予定がないとき — 次の一手：2社目を追加する時点で判断し直してください。',
        ],
        note: '本ページの製品リンクは各社の公式サイトへ移動します。PromptQuorumはLiteLLM、OpenRouter、Portkey / Palo Alto Networksとアフィリエイト関係を持たず、これらのリンクから収益を得ていません。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'LiteLLM公式価格ページ', description: 'オープンソース版とEnterprise版の内訳。提供元による情報。' },
          { url: 'https://github.com/BerriAI/litellm', title: 'GitHub上のBerriAI/litellm', description: 'リポジトリのスター数・フォーク数、ライセンス、機能説明。' },
          { url: 'https://openrouter.ai/docs/faq', title: 'OpenRouter FAQ', description: 'クレジット購入手数料の料率とBYOK手数料の区分。提供元による情報。' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'OpenRouter APIの上限に関するドキュメント', description: '無料枠のレート制限とクレジットベースのアクセス規則。' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'Palo Alto NetworksによるPortkey買収完了の発表', description: '買収完了日とPrisma AIRSへの統合方針。' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'GitHub上のPortkey-AI/gateway', description: 'オープンソースのゲートウェイ・リポジトリとプロバイダー数の記載。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルLLMでOpenAI互換APIを動かす](/ja/local-llms/local-llm-openai-compatible-api) — ゲートウェイが前段に立つランタイム',
          '[ローカルLLM vs クラウドAPI：どちらを呼ぶか](/ja/local-llms/local-llms-vs-cloud-apis) — ゲートウェイ選定の前に決めるべきこと',
          '[ローカルLLMの開発者スタック](/ja/local-llms/local-llm-developer-stack) — ツールチェーンの中でゲートウェイが占める位置',
          '[クラウドGPUレンタル比較 2026](/ja/local-llms/cloud-gpu-rental-comparison-2026) — ホスト型モデルへのルーティングではなく計算資源を借りる選択',
          '[ローカルLLMの自作vsレンタル コスト計算](/ja/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 同じ計算をハードウェアに当てはめたもの',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM vs OpenRouter vs Portkey：最適なLLMゲートウェイ 2026',
      description: 'LLM APIゲートウェイとしてのLiteLLM、OpenRouter、Portkey/Prisma AIRSの比較。実際の価格、セルフホストの選択肢、フェイルオーバー制御、そしてPortkeyのカテゴリーを変えたPalo Altoによる買収。',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/ja/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'ja',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'LLM APIゲートウェイ' },
        { '@type': 'Thing', name: 'マルチモデル・ルーティング' },
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
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'LLM APIゲートウェイとは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '複数のLLMプロバイダーを呼び出すための単一で一貫したAPIをアプリケーションに提供し、フェイルオーバー、コスト追跡、レート制限を元のAPIの上に追加するルーティング層です。',
          },
        },
        {
          '@type': 'Question',
          name: 'LiteLLMは本当に無料ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2026年8月時点の公式価格ページによれば、オープンソース中核は無料かつセルフホストで、ライセンス費用もリクエストごとの上乗せもありません。Enterpriseは年額の個別見積もりです。',
          },
        },
        {
          '@type': 'Question',
          name: 'OpenRouterはリクエストごとに課金しますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。Stripeでのクレジット購入に約5.5%（最低0.80ドル）、暗号資産で5%です。5%のBYOK手数料は、BYOK経由の月間支出が従量課金で25,000ドル、エンタープライズで200,000ドルを超えた場合にのみ発生します。',
          },
        },
        {
          '@type': 'Question',
          name: 'Portkeyはまだ独立企業ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。Palo Alto Networksは2026年5月29日に買収を完了し、Portkeyをセキュリティ基盤Prisma AIRS内のAIゲートウェイとして統合しています。',
          },
        },
        {
          '@type': 'Question',
          name: 'セルフホストとホスト型LLMゲートウェイはどう選び分けますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '月間モデル費用の5.5%と、小さな常駐サービスの運用費用を比べてください。損益分岐点を上回ればセルフホストのLiteLLMが有利、下回れば自分の時間を含めるとOpenRouterが有利です。',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '最適なLLM APIゲートウェイ（2026年8月）',
      inLanguage: 'ja',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: '総合最良 — 無料でセルフホストのオープンソース・プロキシ、100以上のプロバイダーAPI、リクエストごとの上乗せなし' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: '設定不要で最良のゲートウェイ — APIキー1つで380以上のモデル、入金額に約5.5%の手数料' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: 'エンタープライズ・セキュリティ購入 — Production版は月額49ドル、現在はPalo Alto NetworksのPrisma AIRSの一部' },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM vs OpenRouter vs Portkey：2026年最佳LLM网关',
    seoTitle: '2026年最佳LLM API网关：选LiteLLM还是OpenRouter',
    metaDescription: 'LiteLLM的代理免费且可自托管，OpenRouter对充值收取约5.5%，Portkey现已并入Palo Alto的Prisma AIRS。',
    educationalLevel: 'Advanced',
    audience: '构建多模型LLM应用的开发者',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '阅读约11分钟',
    primaryTerm: 'LLM API网关',
    targetKeywords: [
      '2026最佳LLM网关',
      'LiteLLM vs OpenRouter',
      'LLM API网关对比',
      '自托管LLM代理',
      'OpenRouter 手续费',
    ],
    leadAnswerBlock: '**2026年，对多数开发者而言最佳的LLM API网关是LiteLLM：其开源代理免费、可自托管，通过一个兼容OpenAI的接口路由100多个提供方API，且不对每次请求加价。如果你想今天就用上380多个模型且完全不搭建基础设施，OpenRouter是更好的选择，代价是通过Stripe充值时约收取5.5%。Portkey已不再是独立网关：Palo Alto Networks于2026年5月29日完成收购，正将其并入Prisma AIRS安全平台。**',
    quickAnswerTop: {
      question: '2026年最佳的LLM API网关是哪一个？',
      answer: '**能运维一个服务的团队选LiteLLM，不能的选OpenRouter。** LiteLLM的开源核心无论用量多大都不收费，并把路由逻辑与数据驻留留在你自己手中。OpenRouter免去全部基础设施工作，代价是对Stripe充值收取约5.5%（加密货币5%），以及超出免费额度后5%的BYOK费用。Portkey如今只作为Palo Alto Networks旗下Prisma AIRS平台内的AI网关提供——请把它当作企业安全采购来评估，而不是一款轻量工具。',
      bullets: [
        '**综合最佳：** LiteLLM — 免费、自托管，GitHub约5.75万星，100多个提供方API',
        '**零配置最佳：** OpenRouter — 一个API密钥即可调用380多个模型，充值约收5.5%',
        '**企业安全采购：** Portkey / Prisma AIRS — Production版每月49美元，现属Palo Alto',
        '**盈亏平衡点：** 当每月模型支出的5.5%超过你的代理托管费用时，自托管更划算',
        '⚠️ 三家均无公开的联盟或推荐计划——本文所有链接均为普通产品链接',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '最佳选择：自托管还是租用？', anchor: 'best-choice' },
      { label: '什么是LLM API网关？', anchor: 'what-is-a-gateway' },
      { label: '完整对比表', anchor: 'comparison' },
      { label: '自托管路线：LiteLLM', anchor: 'self-hosted-track' },
      { label: '托管路线：OpenRouter与Prisma AIRS', anchor: 'hosted-track' },
      { label: '规模化后每个网关要花多少钱？', anchor: 'cost-at-scale' },
      { label: 'Portkey易主为何影响这个决定', anchor: 'portkey-acquisition' },
      { label: '各网关如何处理故障转移', anchor: 'failover' },
      { label: '谁该用哪个网关？', anchor: 'who-should-use' },
      { label: '区域背景：欧盟、日本与中国', anchor: 'regional-context' },
      { label: '常见错误', anchor: 'common-mistakes' },
      { label: '常见问题', anchor: 'faq' },
      { label: '最终结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**LiteLLM的开源代理在任何用量下都免费** — 一个兼容OpenAI的端点背后接入100多个提供方API，支出跟踪、预算和限流都包含在免费版中。',
          'OpenRouter不收订阅费，但对Stripe充值收取约5.5%（最低0.80美元）、加密货币5%，并在每月超过25,000美元（按量付费）或200,000美元（企业版）后收取5%的BYOK费用。',
          'Portkey已被Palo Alto Networks收购（2026年5月29日完成），正并入Prisma AIRS——现在请把它当作企业安全采购。',
          '截至2026年8月，LiteLLM的GitHub仓库约有5.75万星和1.1万个分支，是三者中最清晰的公开采用信号。',
          'OpenRouter列出380多个模型，是从注册到跑通多模型调用最快的路径。',
          '真实的盈亏平衡点：当每月模型支出的5.5%超过运维代理的成本时，自托管就更便宜。',
          '**完全不用网关的情况**：你只调用一个提供方，用量低且可预测，且没有接入第二家的计划。',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 最佳选择：自托管还是租用网关？',
        content: '**有地方跑就自己运维LiteLLM；没有就用OpenRouter。** 这一个问题比任何功能清单都更可靠地决定了这笔采购，因为三款工具都已覆盖网关的核心职责：统一API、故障转移、成本跟踪。',
        decisionBlock: {
          title: '自托管还是托管网关？',
          localIf: [
            '你本来就在运维服务，能够为代理打补丁——LiteLLM在任何用量下都不加价',
            '你每月的模型支出足够高，5%已是实打实的钱（超过约500美元/月时，就超过了多数小型托管账单）',
            '你需要精确控制由哪个提供方处理失败请求——例如必须留在欧盟数据驻留边界内',
            '你需要气隙部署（LiteLLM Enterprise明确支持）',
          ],
          cloudIf: [
            '你没有DevOps人力，也不想背负一个在跑的服务',
            '你想在一小时内调用380多个模型——OpenRouter只需要一个API密钥',
            '你的支出足够小，相比省下的时间，约5.5%微不足道',
            '你本来就在采购Palo Alto Networks的安全产品，希望在Prisma AIRS内统一治理网关',
          ],
          quick: [
            '免费且自托管 → **LiteLLM**（Apache许可的开源核心，约5.75万星）',
            '零基础设施、今天就要模型 → **OpenRouter**（380多个模型，充值约5.5%）',
            '企业级AI安全治理 → **Portkey / Prisma AIRS**（Production每月49美元，Enterprise需咨询）',
            '一个提供方、低用量 → **不用网关** — 直接调用SDK',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: '免费（开源核心）',
            label: 'LiteLLM — 免费开始（自托管）',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: '无订阅费；充值约收5.5%',
            label: 'OpenRouter — 查看价格',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: '什么是LLM API网关？',
        content: '**LLM API网关是位于你的应用与多个模型提供方之间的路由层，对外暴露一个统一一致的API。** 你无需为OpenAI、Anthropic、Google以及其他每一家分别编写集成代码，只需调用网关一次，由它处理各提供方特有的格式、认证、故障转移，以及在多数实现中还包括成本跟踪与限流。\n\n只有当生产环境中的提供方超过一家时，这种收益才真正存在。在只有单一提供方的应用里，网关只是一层没有回报的抽象。如果提供方分散已经在消耗你的胶水代码和值班精力，就引入网关；否则不必。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLM API网关通过一个兼容OpenAI的统一接口，把你的应用调用路由到多个模型提供方，并在原始API之上补充故障转移、成本跟踪与限流。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成AI模型的电源转换插头。你的代码只插一个插口，各提供方插头形状不同的问题由转换头吸收。如果你只用一种插头，就不需要转换头。',
          },
        ],
        note: '网关不等同于本地运行时。如果你想在自己的硬件上运行模型，而不是路由到托管提供方，请参阅[本地LLM的OpenAI兼容API指南](/zh/local-llms/local-llm-openai-compatible-api)和[llama.cpp vs Ollama vs vLLM对比](/zh/local-llms/llamacpp-vs-ollama-vs-vllm)——那些是运行时，网关位于它们之前。',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM vs OpenRouter vs Portkey：完整对比',
        content: '**没有哪个网关能在所有维度取胜：成本与控制力上LiteLLM领先，上手速度上OpenRouter领先，企业治理上Prisma AIRS领先。** 价格与计划细节于2026年8月27日在各厂商官网核实；若本页上线已超过90天请重新核对，因为今年网关价格已多次变动。',
        tableFormat: true,
        columns: ['维度', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { 维度: '最适合', LiteLLM: '希望完全掌控且不付手续费的自托管团队', OpenRouter: '无基础设施、快速开展多模型工作', 'Portkey (Prisma AIRS)': '已在采购Palo Alto安全产品的企业' },
          { 维度: '价格', LiteLLM: '免费（开源）；Enterprise按年、需咨询', OpenRouter: '无订阅；Stripe约5.5%，加密货币5%', 'Portkey (Prisma AIRS)': '免费版每月1万条日志；Production每月49美元；Enterprise需咨询' },
          { 维度: '自托管', LiteLLM: '支持——本就是核心设计，另有托管代理可选', OpenRouter: '不支持——仅托管API访问', 'Portkey (Prisma AIRS)': 'Enterprise提供私有云部署' },
          { 维度: '提供方/模型', LiteLLM: '100多个提供方API', OpenRouter: '列出380多个模型', 'Portkey (Prisma AIRS)': '其仓库曾宣称超过1,600个LLM' },
          { 维度: '故障转移', LiteLLM: '支持——开源版可配置链路', OpenRouter: '支持——平台层自动处理', 'Portkey (Prisma AIRS)': '支持——所有档位均有回退与负载均衡' },
          { 维度: '成本跟踪', LiteLLM: '支持——开源版含支出跟踪与预算', OpenRouter: '支持——按请求的额度面板', 'Portkey (Prisma AIRS)': '支持——成本归因与虚拟密钥预算' },
          { 维度: '限流', LiteLLM: '支持——开源版', OpenRouter: '账户级全局限流（用户不可配置）', 'Portkey (Prisma AIRS)': 'Enterprise提供细粒度控制' },
          { 维度: '联盟计划', LiteLLM: '未发现', OpenRouter: '未发现', 'Portkey (Prisma AIRS)': '未发现（Palo Alto的是B2B合作）' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年5月之前记录的价格已不再适用于Portkey。在引用旧文章或截图中的数字之前，请向Palo Alto Networks确认Prisma AIRS的现行条款。',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: '自托管路线：LiteLLM为何是默认选择',
        content: '**LiteLLM成为社区默认，是因为免费版就是完整产品，而不是试用版。** 支出跟踪、预算、限流和故障转移链路全都在开源核心里——Enterprise增加的是SSO、SCIM、专属支持和气隙部署，而不是路由本身。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LiteLLM的开源代理通过一个兼容OpenAI的接口调用100多个LLM提供方API，没有许可费用，也不对每次请求加价，任何请求量下都是如此。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — 综合最佳网关',
            tagline: '免费、自托管、GitHub约5.75万星——最接近事实标准的存在',
            verdict: 'LiteLLM的核心代理免费且开源，通过一个兼容OpenAI的端点路由100多个提供方API。它是这里唯一不对模型支出按比例加价的选项，这正是它在有意义的用量下按绝对金额算最便宜的原因。约5.75万星和1.1万个分支（2026年8月）是三款工具中最强的维护信号——当你要把生产环境的路由层押注在一个两年后仍需有人维护的项目上时，这一点很重要。你确实要付出的成本是运维层面的：服务由你来跑、来监控、来升级。',
            pros: [
              '没有按请求收费，也没有比例加价——任何用量下都免费',
              '故障转移链路、预算和限流全部包含在免费的开源版中',
              '完全掌控路由逻辑与数据驻留',
              'Enterprise明确支持气隙部署',
            ],
            cons: [
              '可用性、补丁与监控都由你自己负责',
              'Enterprise价格需询价——没有可用于做预算的公开数字',
              '对完全没有DevOps人力的团队并不合适',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: '免费（开源核心）；Enterprise按年、需咨询',
                label: 'LiteLLM — 免费开始',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'GitHub上的LiteLLM',
                productCategory: 'dev-tool',
                priceRange: '免费',
                label: '查看源码（BerriAI/litellm）',
              },
            ],
          },
        ],
        note: '如果你想要零经常性费用和完全的路由控制权，就用LiteLLM。如果团队里没人有余力运维一个代理，就别用——即便许可免费，这份运维成本也是真实存在的。',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: '托管路线：OpenRouter与Prisma AIRS',
        content: '选择租用网关而非自己运维，有实实在在、并非营销话术的理由。你可以省下真实的基础设施工作：可用性、升级、密钥管理，以及任何位于请求路径上的服务都免不了的值班。托管网关还带来一份你本来需要逐一对接的提供方覆盖面。\n\n**代价是一笔随支出增长的比例费用，以及对故障转移更粗的控制粒度。** 在中等用量下这是划算的交易，在高用量下则不然——[下方的成本一节](#cost-at-scale)给出了盈亏平衡点的确切算法。',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — 零配置的最佳网关',
            tagline: '一个API密钥调用380多个模型，无需运维任何服务器',
            verdict: 'OpenRouter是从零到跑通一个多模型应用最快的路径：注册、拿到API密钥，当天就能调用其列出的380多个模型。这里没有订阅费——费用发生在给账户充值时，通过Stripe购买额度约收5.5%（最低0.80美元），用加密货币则为5%。5%的BYOK费用只有在每月经BYOK路由的支出超过25,000美元（按量付费）或200,000美元（企业版）后才开始计收，因此轻度使用不会产生额外费用。故障转移是自动的，但发生在平台层：某个提供方报错时，OpenRouter可以在你不配置任何链路的情况下转到等效模型。',
            pros: [
              '完全无需基础设施——一个API密钥就是全部准备工作',
              '列出380多个模型，远超你手工能对接的数量',
              '无订阅费；轻度BYOK使用仍在免费额度内',
              '提供方之间自动故障转移，无需配置',
            ],
            cons: [
              '约5.5%的费用会累积，用量大时开销可观',
              '限流是账户级全局设置，用户无法自行配置',
              '对由哪个提供方处理失败请求控制较弱——在严格的数据驻留要求下会成为问题',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: '无订阅；Stripe充值约收5.5%',
                label: 'OpenRouter — 查看价格',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'OpenRouter费用文档',
                productCategory: 'cloud-ai',
                priceRange: '免费查阅',
                label: '查看当前费率表',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — 企业安全采购',
            tagline: '现为Palo Alto Networks安全平台内的AI网关',
            verdict: 'Portkey依然在做网关该做的事：所有档位都提供自动回退、负载均衡、成本归因和虚拟密钥预算，免费的Developer版每月1万条日志，Production版每月49美元、10万条日志。变化的是品类：自Palo Alto Networks于2026年5月29日完成收购以来，它被定位为Prisma AIRS安全平台内的AI网关，而不再是一个独立路由器。如果你本就在采购企业级AI治理，这很合适；如果你想要的是一款灵活独立的工具，就并不匹配。',
            pros: [
              '所有档位（包括免费版）都提供回退与负载均衡',
              '内置成本归因与按虚拟密钥的预算管理',
              'Enterprise可用私有云部署',
              '把网关路由与更广泛的AI安全治理整合在一起',
            ],
            cons: [
              '不再独立——路线图与定价现在跟随一家大型安全厂商',
              '2026年5月之前的价格与档位结构可能已经过时',
              '如果厂商中立性正是你想要网关的原因之一，那就不合适',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: '有免费版；Production每月49美元；Enterprise需咨询',
                label: 'Portkey — 免费开始（每月1万条日志）',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: '企业定价需咨询',
                label: 'Prisma AIRS — 查看方案',
              },
            ],
          },
        ],
        note: '如果“只要有任何可比的模型还能跑通”就足以作为你的故障转移策略，那就用OpenRouter。如果你需要就哪一家提供方承接溢出流量获得合同保证，就别用。',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: '规模化后每个网关要花多少钱？',
        content: '**LiteLLM的开源核心无论用量多大都免费；OpenRouter的成本是你每充一美元的一个百分比；Portkey的成本随日志量与合同条款增长。** 下表是对OpenRouter公开的约5.5% Stripe费率所做的直接算术——不是估算，而是决定这笔采购的那个数字。\n\n我们刻意不给出运维LiteLLM的美元金额：这个代理是一个常驻的小服务，其成本完全取决于你把它放在哪里跑。把你自己的托管账单填进最后一列，答案自然浮现。\n\n给中文读者的提示：三家厂商均以美元计费，没有人民币价目表，因此你的账单还会叠加汇率以及可能的境外交易手续费。',
        tableFormat: true,
        columns: ['每月模型支出', 'OpenRouter费用（约5.5%）', 'LiteLLM许可费', '自托管更划算的门槛'],
        rows: [
          { '每月模型支出': '200美元', 'OpenRouter费用（约5.5%）': '约11美元/月（约132美元/年）', 'LiteLLM许可费': '0美元', '自托管更划算的门槛': '低于11美元/月' },
          { '每月模型支出': '500美元', 'OpenRouter费用（约5.5%）': '约27.50美元/月（约330美元/年）', 'LiteLLM许可费': '0美元', '自托管更划算的门槛': '低于27.50美元/月' },
          { '每月模型支出': '2,000美元', 'OpenRouter费用（约5.5%）': '约110美元/月（约1,320美元/年）', 'LiteLLM许可费': '0美元', '自托管更划算的门槛': '低于110美元/月' },
          { '每月模型支出': '10,000美元', 'OpenRouter费用（约5.5%）': '约550美元/月（约6,600美元/年）', 'LiteLLM许可费': '0美元', '自托管更划算的门槛': '低于550美元/月' },
        ],
        callouts: [
          {
            type: 'info',
            text: '该费用针对你购买的额度，而非每一次请求——OpenRouter另行计算的5%的BYOK费用，也只有在每月经BYOK路由的支出超过25,000美元（按量付费）或200,000美元（企业版）后才开始。在额度以内，BYOK不产生额外费用。',
          },
        ],
        note: '如果你的每月模型支出高到让5%以上的加价在绝对金额上显著，就选LiteLLM。如果这笔费用低于运维一个代理所需的工程工时，就选OpenRouter。把同样的算术套用到硬件上，见[本地LLM成本计算器](/zh/local-llms/local-llm-cost-calculator-build-vs-rent-2026)。',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'Portkey易主为何影响这个决定',
        content: '**Portkey已不再是独立产品：Palo Alto Networks于2026年5月29日完成收购，正将其并入Prisma AIRS安全平台。** 这不是简单的改名。今天作为轻量工具引入的网关，可能在一个产品周期内被重新定价、重新定位，或只能作为更大安全套件的一部分购买。\n\n如果你正是因为Portkey是一家灵活的初创产品才在评估它，这个前提已经不成立。在做出承诺前，请直接向Palo Alto Networks确认现行条款——被收购的产品在整合的头6到12个月里，价格、档位结构和支持模式经常发生变化。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Palo Alto Networks于2026年5月29日完成对Portkey的收购，正将其作为AI网关并入Prisma AIRS安全平台。',
          },
        ],
        note: '如果你想把网关路由与本来就要采购的AI安全治理打包在一起，就用Portkey / Prisma AIRS。如果不受大型安全厂商路线图约束对你的架构很重要，就别用。',
      },
      failover: {
        id: 'failover',
        title: '各网关如何处理故障转移？',
        content: '**三者都支持提供方故障时的自动转移，区别在于由谁来写这条故障转移策略。** LiteLLM和Portkey都允许你在自己掌控的配置中定义故障转移链路与负载均衡规则。OpenRouter在平台层处理：某个提供方报错时，它可以自动转到等效模型，但你对具体转到哪一个控制得更粗。',
        items: [
          '**LiteLLM** — 在你自己的配置中定义故障转移链路；对由哪个备用模型承接失败请求的控制最细',
          '**Portkey / Prisma AIRS** — 所有档位均提供自动回退与负载均衡，在平台上配置',
          '**OpenRouter** — 平台层的提供方自动故障转移；没有链路需要配置，也不保证由哪个提供方接手',
        ],
        note: '对于必须严格规定由哪个备用模型承接失败请求的团队——例如必须留在欧盟数据驻留边界内——三者之中只有LiteLLM的自托管配置允许你自己写下这条策略。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁该用哪个网关？',
        content: '**有基础设施的开发者应默认选择LiteLLM；想要免运维多模型访问的团队选OpenRouter；已处在Palo Alto技术栈内的企业应评估Prisma AIRS。** 在此之外，团队规模、合规要求以及对运维负担的容忍度决定其余部分。',
        items: [
          '**跨多个模型做原型的独立开发者与小型初创** → OpenRouter。一个API密钥、380多个模型、没有服务器要照看。如果你用量大且对成本极敏感就别用，费用会累积。',
          '**在生产环境运行多模型应用的平台团队** → 自托管LiteLLM。免费、社区默认，路由与数据驻留的控制权都留在你手上。没有运维服务的人力就别选。',
          '**已在采购Palo Alto Networks产品的企业** → Prisma AIRS内的Portkey。它现在是作为治理与安全层交付的，因此卖点与一年前不同。',
          '**需要气隙部署的受监管行业** → LiteLLM Enterprise明确支持；请直接向Palo Alto Networks确认Prisma AIRS当前的部署选项，因为收购后的整合会在短期内改变可提供的内容。另见[本地LLM的企业合规](/zh/local-llms/enterprise-compliance-local-llms)。',
          '**只调用一个提供方且用量低的团队** → 不用网关。直接调用SDK，等到真正接入第二家时再重新评估。',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: '欧盟、日本与中国的LLM网关',
        content: '网关在哪里运行，决定了你的提示词去往何处。这使得在三大市场中，网关选型是一个合规决策，而不只是成本问题。',
        subsections: [
          {
            title: '中国（数据安全法）',
            content: '在《数据安全法》与网信办（CAC）跨境数据规则之下，合规问题在于把提示词内容路由给境外模型提供方，而不在网关本身。面向中国大陆用户的部署通常在境内基础设施上运行网关，并且只路由到合规的境内模型，例如Qwen2.5或Baichuan。LiteLLM的自托管代理是这里可行的选项；OpenRouter自动转到任意可用提供方的行为，恰恰是CAC规则所不允许的。',
          },
          {
            title: '亚太地区（数据跨境）',
            content: '亚太各司法辖区的跨境数据框架并不一致，因此实务要求是能够记录并证明由哪个提供方处理了某次请求。自托管网关可以把故障转移目标限定在特定区域的端点上，并精确记录哪些内容越过了边界。托管方案的自动替换则无法由你自己担保这份记录。',
          },
          {
            title: '企业部署',
            content: '银行、医院与律所等受严格监管的机构，通常要求提示词内容不得离开既定边界，并要求留存可审计的处理记录。欧盟方面，托管网关若把内容路由至欧洲经济区之外的提供方，可能构成《通用数据保护条例》第44至49条下的跨境传输；自托管的LiteLLM允许把故障转移链路固定在欧盟区域端点，并记录究竟有什么离开了边界。日本方面，经济产业省（METI）的AI治理与本国AI主权方向推动企业采用本地推理与可审计的数据路径，自托管网关正好契合这一取向。',
          },
        ],
        note: '在任何你必须以书面说明由哪个提供方处理了某次请求的市场，都应使用自托管网关。在你的数据不受跨境传输限制的市场，托管网关即可。',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '选择LLM网关时的常见错误',
        numberedItems: [
          {
            title: '以为“网关”在三款工具中是同一个意思',
            whyItMatters: 'LiteLLM是自托管代理，OpenRouter是托管API，而Portkey现在是安全平台的一部分。在比较功能清单之前，请阅读各厂商当前的产品页——不要假定它们对等。',
          },
          {
            title: '没算清费用就为高用量生产环境选择OpenRouter',
            whyItMatters: '当每月模型支出为10,000美元时，约5.5%的费用约合每月550美元、每年6,600美元。请用你的真实支出去算这笔账，而不只看便利性。',
          },
          {
            title: '在第二个提供方进入生产之前就引入网关',
            whyItMatters: '网关的核心价值是带故障转移的多提供方路由。只有一家提供方的一个模型时，你增加的只是一层抽象、一个新的故障点和一条学习曲线，暂时没有任何回报。',
          },
          {
            title: '引用2026年5月之前记录的Portkey价格',
            whyItMatters: 'Palo Alto收购之前的价格页与博客文章，可能已不反映Prisma AIRS的现行条款。在依据旧截图做采购决定之前，请向厂商确认。',
          },
          {
            title: '把GitHub星标当作功能对比',
            whyItMatters: 'LiteLLM约5.75万星表明的是社区信任度，以及该项目两年后仍被维护的可能性，而不是它的功能比Portkey或OpenRouter更多。请看对比表，而不是采用度信号。',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: '完全不用网关的情况',
        content: '**如果你只调用一个LLM提供方，用量低且可预测，短期内也没有接入第二家的计划，那就把这三者都放一边。** 网关带来的是运维复杂度（自托管）或比例费用（托管），换来的却是你尚未使用的多提供方能力。\n\n直接调用提供方的SDK，等到真正接入第二个模型或提供方的那天再重新判断。同样的逻辑在下一层同样成立：如果你还在犹豫要不要调用托管API，请先读[本地LLM vs 云API](/zh/local-llms/local-llms-vs-cloud-apis)——最便宜的网关是你从未需要的那个。',
        callouts: [
          {
            type: 'tip',
            text: '一个实用的触发条件：当你第一次在自己的代码里写下针对某个提供方的分支时，就该引入网关了。那段条件判断正是网关存在的意义所在——把这类胶水代码消灭掉。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '什么是LLM API网关？',
            a: '它是一个路由层，为你的应用提供调用多个LLM提供方的统一一致API，通常还在原始API之上补充故障转移、成本跟踪与限流。你调用网关，由它处理各提供方特有的格式与认证。只有当生产环境中有不止一个提供方时，这份收益才会真正体现。',
          },
          {
            q: 'LiteLLM真的免费吗？',
            a: '根据LiteLLM自家价格页在2026年8月的说明，开源核心免费且可自托管，没有许可费用，任何用量下也不对每次请求加价。Enterprise档位（SSO、SCIM、专属支持、气隙部署）按你的请求量以年度定制报价，并包含30天试用。',
          },
          {
            q: 'OpenRouter按请求收费吗？',
            a: '并非直接按请求收费。OpenRouter的费用发生在给账户充值时：通过Stripe购买额度约收5.5%，最低0.80美元；用加密货币则为5%。另有5%的BYOK费用，仅当每月经BYOK路由的支出在按量付费下超过25,000美元、或在企业版下超过200,000美元时才适用。',
          },
          {
            q: 'Portkey还是一家独立公司吗？',
            a: '不是。根据Palo Alto Networks自己的新闻稿，该公司已于2026年5月29日完成对Portkey的收购，并正将其作为核心AI网关并入Prisma AIRS安全平台。请把2026年5月之前的任何价格或路线图信息视为可能已经过时。',
          },
          {
            q: '哪个网关支持的提供方最多？',
            a: '截至2026年8月，OpenRouter在自家网站上列出380多个模型。LiteLLM的文档描述了100多个提供方集成——这是不同的计量单位，因为一个提供方会暴露许多模型。Portkey的网关仓库此前曾宣称超过1,600个LLM，但考虑到此次收购，这个数字应当重新核实。',
          },
          {
            q: '可以自托管Portkey吗？',
            a: '根据收购前的价格页，Portkey/Prisma AIRS在Enterprise档位提供私有云部署。请直接向Palo Alto Networks确认当前的自托管条款，因为收购后的整合常常在第一年内改变部署选项。',
          },
          {
            q: '这三家有联盟计划吗？',
            a: '截至2026年8月，未发现LiteLLM、Portkey或OpenRouter有公开且可核查的联盟或推荐计划。本页所有产品链接都是普通的、已声明的链接，不会为PromptQuorum带来任何收益。若情况变化，本页会更新为与实际计划条款一致的披露说明。',
          },
          {
            q: '如何在自托管与托管网关之间做选择？',
            a: '把每月模型支出的5.5%与运维一个常驻小服务的成本相比较。低于这个盈亏平衡点时，把你的时间算进去后OpenRouter更便宜；高于它时，自托管的LiteLLM在绝对金额上取胜。再加一条合规判据：如果你必须能够说明由哪个提供方处理了某次请求，那么无论算术结果如何都应自托管。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '最终结论',
        items: [
          '**选择LiteLLM，如果**你能自托管，并且想要零经常性费用与完全的路由控制权——下一步：部署开源代理，把应用的基础URL指向它。',
          '**选择OpenRouter，如果**你想在没有基础设施的情况下今天就获得多模型访问能力——下一步：创建API密钥并给账户充值，同时把约5.5%的费用计入预算。',
          '**选择Portkey / Prisma AIRS，如果**你本就在采购或评估Palo Alto Networks的安全产品，并希望把网关能力一并纳入——下一步：直接联系Palo Alto Networks，重新核实收购后的现行条款。',
          '**三者都不选，如果**你只调用一个提供方、用量低，且短期内没有多提供方计划——下一步：等到接入第二个提供方时再重新评估。',
        ],
        note: '本页的产品链接均指向各厂商自己的网站。PromptQuorum与LiteLLM、OpenRouter或Portkey / Palo Alto Networks均无联盟关系，也不会从这些链接中获得任何收益。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'LiteLLM官方价格页', description: '开源版与Enterprise档位的明细，来自厂商本身。' },
          { url: 'https://github.com/BerriAI/litellm', title: 'GitHub上的BerriAI/litellm', description: '仓库的星标与分支数、许可证与功能说明。' },
          { url: 'https://openrouter.ai/docs/faq', title: 'OpenRouter常见问题', description: '额度购买费率与BYOK费用分档，来自厂商本身。' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'OpenRouter API限制文档', description: '免费档的限流规则与基于额度的访问规则。' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'Palo Alto Networks完成对Portkey的收购', description: '收购完成日期与并入Prisma AIRS的整合计划。' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'GitHub上的Portkey-AI/gateway', description: '开源网关仓库及其宣称的提供方数量。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[在本地LLM上运行OpenAI兼容API](/zh/local-llms/local-llm-openai-compatible-api) — 网关所处位置之前的运行时',
          '[本地LLM vs 云API：该调用哪个](/zh/local-llms/local-llms-vs-cloud-apis) — 在选网关之前先决定这件事',
          '[本地LLM开发者技术栈](/zh/local-llms/local-llm-developer-stack) — 网关在整条工具链中的位置',
          '[2026年云GPU租用对比](/zh/local-llms/cloud-gpu-rental-comparison-2026) — 租算力而非路由到托管模型',
          '[本地LLM自建与租用成本计算器](/zh/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 把同样的算术套用到硬件上',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM vs OpenRouter vs Portkey：2026年最佳LLM网关',
      description: '把LiteLLM、OpenRouter与Portkey/Prisma AIRS作为LLM API网关进行对比：真实价格、自托管选项、故障转移控制，以及改变了Portkey品类的Palo Alto收购案。',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/zh/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'zh',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'LLM API网关' },
        { '@type': 'Thing', name: '多模型路由' },
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
      inLanguage: 'zh',
      mainEntity: [
        {
          '@type': 'Question',
          name: '什么是LLM API网关？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '一个路由层，为你的应用提供调用多个LLM提供方的统一API，并在原始API之上补充故障转移、成本跟踪与限流。',
          },
        },
        {
          '@type': 'Question',
          name: 'LiteLLM真的免费吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '根据其2026年8月的官方价格页，开源核心免费且可自托管，没有许可费用，任何用量下也不对每次请求加价。Enterprise档位按年定制报价。',
          },
        },
        {
          '@type': 'Question',
          name: 'OpenRouter按请求收费吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不。OpenRouter对Stripe额度购买约收5.5%（最低0.80美元）或加密货币5%，另有5%的BYOK费用，仅在每月经BYOK路由的支出超过25,000美元（按量付费）或200,000美元（企业版）后适用。',
          },
        },
        {
          '@type': 'Question',
          name: 'Portkey还是一家独立公司吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不是。Palo Alto Networks已于2026年5月29日完成收购，正将Portkey作为AI网关并入Prisma AIRS安全平台。',
          },
        },
        {
          '@type': 'Question',
          name: '如何在自托管与托管LLM网关之间做选择？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '把每月模型支出的5.5%与运维一个常驻小服务的成本相比较。高于这个盈亏平衡点时自托管的LiteLLM取胜；低于它时，把你的时间算进去后OpenRouter更划算。',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '最佳LLM API网关（2026年8月）',
      inLanguage: 'zh',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: '综合最佳 — 免费、可自托管的开源代理，100多个提供方API，不按请求加价' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: '零配置最佳网关 — 一个API密钥调用380多个模型，充值约收5.5%' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: '企业安全采购 — Production版每月49美元，现为Palo Alto Networks Prisma AIRS的一部分' },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM مقابل OpenRouter مقابل Portkey: أفضل بوابة LLM 2026',
    seoTitle: 'أفضل بوابة API لنماذج LLM 2026: LiteLLM أم OpenRouter',
    metaDescription: 'وكيل LiteLLM مجاني وذاتي الاستضافة، وOpenRouter يقتطع نحو 5.5% عند شراء الرصيد، وPortkey صار جزءاً من Prisma AIRS لدى Palo Alto. تحقّق: أغسطس 2026.',
    educationalLevel: 'Advanced',
    audience: 'المطوّرون الذين يبنون تطبيقات LLM متعددة النماذج',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11 دقائق للقراءة',
    primaryTerm: 'بوابة API لنماذج LLM',
    targetKeywords: [
      'أفضل بوابة LLM 2026',
      'LiteLLM مقابل OpenRouter',
      'مقارنة بوابات API لنماذج LLM',
      'وكيل LLM ذاتي الاستضافة',
      'رسوم OpenRouter',
    ],
    leadAnswerBlock: '**‏LiteLLM هو أفضل بوابة API لنماذج LLM لمعظم المطوّرين في 2026: الوكيل مفتوح المصدر مجاني وذاتي الاستضافة، ويوجّه أكثر من 100 واجهة برمجية لمزوّدين عبر واجهة واحدة متوافقة مع OpenAI، دون أي هامش إضافي لكل طلب. أما OpenRouter فهو الخيار الأفضل إن أردت الوصول اليوم إلى أكثر من 380 نموذجاً بلا أي بنية تحتية، مقابل نحو 5.5% على مشتريات الرصيد عبر Stripe. ولم يعد Portkey بوابة مستقلة: أتمّت Palo Alto Networks الاستحواذ عليه في 29 مايو 2026 وتدمجه ضمن منصّة الأمن Prisma AIRS.**',
    quickAnswerTop: {
      question: 'ما أفضل بوابة API لنماذج LLM في 2026؟',
      answer: '**‏LiteLLM هو الأنسب للفرق القادرة على تشغيل خدمة، وOpenRouter للفرق غير القادرة على ذلك.** لا تكلّف نواة LiteLLM مفتوحة المصدر شيئاً مهما بلغ حجم الاستخدام، وتُبقي منطق التوجيه ومكان بقاء البيانات تحت سيطرتك. ويُلغي OpenRouter عمل البنية التحتية بالكامل مقابل نحو 5.5% على مشتريات الرصيد عبر Stripe (و5% عبر العملات الرقمية)، إضافة إلى رسوم BYOK بنسبة 5% فوق الحد المجاني. ولا يتوفّر Portkey اليوم إلا كبوابة ذكاء اصطناعي داخل منصّة Prisma AIRS التابعة لـPalo Alto Networks، فقيّمه بوصفه شراءً أمنياً مؤسسياً لا أداة خفيفة.',
      bullets: [
        '**الأفضل إجمالاً:** LiteLLM — مجاني وذاتي الاستضافة، نحو 57.5 ألف نجمة على GitHub، وأكثر من 100 واجهة برمجية لمزوّدين',
        '**الأفضل بلا إعداد:** OpenRouter — أكثر من 380 نموذجاً بمفتاح API واحد، برسوم نحو 5.5% على الرصيد',
        '**شراء أمني مؤسسي:** Portkey / Prisma AIRS — 49 دولاراً شهرياً لخطة Production، وهو الآن ضمن Palo Alto',
        '**نقطة التعادل:** تصبح الاستضافة الذاتية أوفر حين تتجاوز نسبة 5.5% من إنفاقك الشهري على النماذج فاتورة استضافة الوكيل',
        '⚠️ لا يملك أي من الثلاثة برنامج إحالة أو شراكة عامّاً — وكل الروابط هنا روابط منتج عادية',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: 'الخلاصة', anchor: 'tldr' },
      { label: 'الخيار الأفضل: استضافة ذاتية أم استئجار؟', anchor: 'best-choice' },
      { label: 'ما بوابة API لنماذج LLM؟', anchor: 'what-is-a-gateway' },
      { label: 'جدول المقارنة الكامل', anchor: 'comparison' },
      { label: 'مسار الاستضافة الذاتية: LiteLLM', anchor: 'self-hosted-track' },
      { label: 'المسار المُستضاف: OpenRouter وPrisma AIRS', anchor: 'hosted-track' },
      { label: 'كم تكلّف كل بوابة عند التوسّع؟', anchor: 'cost-at-scale' },
      { label: 'لماذا يهمّ تغيّر ملكية Portkey', anchor: 'portkey-acquisition' },
      { label: 'كيف تعالج كل بوابة الأعطال', anchor: 'failover' },
      { label: 'من ينبغي أن يستخدم كل بوابة؟', anchor: 'who-should-use' },
      { label: 'السياق الإقليمي: الاتحاد الأوروبي واليابان والصين', anchor: 'regional-context' },
      { label: 'أخطاء شائعة', anchor: 'common-mistakes' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**وكيل LiteLLM مفتوح المصدر مجاني عند أي حجم استخدام** — أكثر من 100 واجهة برمجية لمزوّدين خلف نقطة نهاية واحدة متوافقة مع OpenAI، مع تتبّع الإنفاق والميزانيات وتحديد المعدّل ضمن الخطة المجانية.',
          'لا يفرض OpenRouter اشتراكاً، لكنه يقتطع نحو 5.5% على مشتريات الرصيد عبر Stripe (بحد أدنى 0.80 دولار)، و5% عبر العملات الرقمية، إضافة إلى رسوم BYOK بنسبة 5% فوق 25,000 دولار شهرياً (الدفع حسب الاستخدام) أو 200,000 دولار شهرياً (للمؤسسات).',
          'استحوذت Palo Alto Networks على Portkey (اكتمل في 29 مايو 2026) وتدمجه في Prisma AIRS — تعامل معه الآن بوصفه شراءً أمنياً مؤسسياً.',
          'يضمّ مستودع LiteLLM على GitHub نحو 57.5 ألف نجمة و11 ألف نسخة معدّلة حتى أغسطس 2026 — وهو أوضح مؤشر عام على التبنّي بين الثلاثة.',
          'يعرض OpenRouter أكثر من 380 نموذجاً، وهو أسرع طريق من التسجيل إلى استدعاء متعدد النماذج يعمل فعلياً.',
          'نقطة التعادل الصادقة: تصبح الاستضافة الذاتية أرخص فور أن تتجاوز نسبة 5.5% من إنفاقك الشهري على النماذج تكلفة تشغيل الوكيل.',
          '**استغنِ عن البوابة تماماً** إن كنت تستدعي مزوّداً واحداً بحجم منخفض ويمكن التنبؤ به، ولا تخطّط لإضافة مزوّد ثانٍ.',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 الخيار الأفضل: استضافة ذاتية أم استئجار البوابة؟',
        content: '**شغّل LiteLLM بنفسك إن كان لديك مكان تشغّله فيه، واستخدم OpenRouter إن لم يكن.** هذا السؤال وحده يحسم القرار بموثوقية أكبر من أي قائمة ميزات، لأن الأدوات الثلاث تغطّي أصلاً العمل الجوهري لأي بوابة: واجهة واحدة، وتحويل عند الأعطال، وتتبّع للتكلفة.',
        decisionBlock: {
          title: 'استضافة ذاتية أم بوابة مُستضافة؟',
          localIf: [
            'أنت تشغّل خدمات بالفعل وتستطيع صيانة وكيل — لا يضيف LiteLLM أي هامش عند أي حجم',
            'إنفاقك الشهري على النماذج مرتفع بما يكفي ليصبح 5% مبلغاً حقيقياً (فوق نحو 500 دولار شهرياً يتجاوز ذلك معظم فواتير الاستضافة الصغيرة)',
            'تحتاج إلى تحديد المزوّد الذي يعالج الطلب الفاشل بدقّة — مثل البقاء داخل حدود إقامة البيانات في الاتحاد الأوروبي',
            'تحتاج إلى نشر معزول عن الشبكة (يدعمه LiteLLM Enterprise صراحةً)',
          ],
          cloudIf: [
            'لا تملك طاقة DevOps ولا ترغب في تحمّل خدمة قيد التشغيل',
            'تريد استدعاء أكثر من 380 نموذجاً خلال ساعة — لا يحتاج OpenRouter سوى مفتاح API',
            'إنفاقك متواضع بما يكفي ليصبح نحو 5.5% أمراً هامشياً مقابل الوقت الموفَّر',
            'أنت تشتري بالفعل أدوات أمن من Palo Alto Networks وتريد حوكمة البوابة داخل Prisma AIRS',
          ],
          quick: [
            'مجاني وذاتي الاستضافة → **LiteLLM** (نواة مفتوحة المصدر برخصة Apache، نحو 57.5 ألف نجمة)',
            'بلا بنية تحتية ونماذج اليوم → **OpenRouter** (أكثر من 380 نموذجاً، رسوم نحو 5.5% على الرصيد)',
            'حوكمة أمن الذكاء الاصطناعي للمؤسسات → **Portkey / Prisma AIRS** (49 دولاراً شهرياً لخطة Production، والمؤسسات بالطلب)',
            'مزوّد واحد وحجم منخفض → **بلا بوابة** — استدعِ حزمة التطوير مباشرةً',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: 'مجاني (النواة مفتوحة المصدر)',
            label: 'LiteLLM — ابدأ مجاناً (استضافة ذاتية)',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: 'بلا اشتراك؛ رسوم نحو 5.5% على الرصيد',
            label: 'OpenRouter — اطّلع على الأسعار',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: 'ما بوابة API لنماذج LLM؟',
        content: '**بوابة API لنماذج LLM هي طبقة توجيه بين تطبيقك وعدّة مزوّدي نماذج، تعرض واجهة برمجية واحدة متسقة.** فبدل كتابة شيفرة تكامل منفصلة لكل من OpenAI وAnthropic وGoogle وسواها، تستدعي البوابة مرّة واحدة فتتولّى هي الصيغ الخاصة بكل مزوّد والمصادقة والتحويل عند الأعطال، وفي معظم التطبيقات تتبّع التكلفة وتحديد المعدّل كذلك.\n\nلا تتحقّق هذه الفائدة إلا حين يصبح لديك أكثر من مزوّد واحد في الإنتاج. أما في تطبيق بمزوّد واحد فالبوابة طبقة تجريد بلا مقابل. استخدم بوابة إن كان تشتّت المزوّدين يكلّفك بالفعل شيفرة ربط ووقت مناوبة، وتجاوزها إن لم يكن كذلك.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'توجّه بوابة API لنماذج LLM استدعاءات تطبيقك إلى عدّة مزوّدي نماذج عبر واجهة واحدة متوافقة مع OpenAI، وتضيف فوق الواجهات الأصلية تحويلاً عند الأعطال وتتبّعاً للتكلفة وتحديداً للمعدّل.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّلها محوّل قابس كهربائي لنماذج الذكاء الاصطناعي. شيفرتك تدخل في مقبس واحد، ويتكفّل المحوّل بأن لكل مزوّد شكل قابس مختلفاً. وإن كنت تستخدم قابساً واحداً فقط فلا حاجة للمحوّل أصلاً.',
          },
        ],
        note: 'البوابة ليست بيئة تشغيل محلية. إن أردت تشغيل النماذج على عتادك بدل التوجيه إلى مزوّدين مُستضافين، فراجع [دليل واجهة متوافقة مع OpenAI لنماذج LLM المحلية](/ar/local-llms/local-llm-openai-compatible-api) و[مقارنة llama.cpp وOllama وvLLM](/ar/local-llms/llamacpp-vs-ollama-vs-vllm) — فتلك بيئات تشغيل تقف البوابة أمامها.',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM مقابل OpenRouter مقابل Portkey: المقارنة الكاملة',
        content: '**لا تتفوّق بوابة واحدة في كل الفئات: يتقدّم LiteLLM في التكلفة والتحكّم، وOpenRouter في سرعة الإعداد، وPrisma AIRS في الحوكمة المؤسسية.** جرى التحقّق من الأسعار وتفاصيل الخطط على صفحات كل مزوّد في 27 أغسطس 2026 — أعد التحقّق إن مضى على نشر هذه الصفحة أكثر من 90 يوماً، فأسعار البوابات تغيّرت مراراً هذا العام.',
        tableFormat: true,
        columns: ['المعيار', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { المعيار: 'الأنسب لـ', LiteLLM: 'فرق تستضيف ذاتياً وتريد تحكّماً كاملاً بلا رسوم', OpenRouter: 'عمل سريع متعدد النماذج بلا بنية تحتية', 'Portkey (Prisma AIRS)': 'مؤسسات تشتري بالفعل أمن Palo Alto' },
          { المعيار: 'السعر', LiteLLM: 'مجاني (مفتوح المصدر)؛ والمؤسسات سنوياً بالطلب', OpenRouter: 'بلا اشتراك؛ نحو 5.5% عبر Stripe و5% بالعملات الرقمية', 'Portkey (Prisma AIRS)': 'مجاني 10 آلاف سجل شهرياً؛ 49 دولاراً شهرياً لـProduction؛ والمؤسسات بالطلب' },
          { المعيار: 'الاستضافة الذاتية', LiteLLM: 'نعم — هي التصميم الأساسي، مع وكيل مُدار اختياري', OpenRouter: 'لا — وصول عبر واجهة مُستضافة فقط', 'Portkey (Prisma AIRS)': 'نشر على سحابة خاصة في خطة المؤسسات' },
          { المعيار: 'المزوّدون / النماذج', LiteLLM: 'أكثر من 100 واجهة برمجية لمزوّدين', OpenRouter: 'أكثر من 380 نموذجاً معروضاً', 'Portkey (Prisma AIRS)': 'أعلن مستودعه سابقاً أكثر من 1600 نموذج' },
          { المعيار: 'التحويل عند الأعطال', LiteLLM: 'نعم — سلاسل قابلة للضبط في النسخة المفتوحة', OpenRouter: 'نعم — تلقائي على مستوى المنصّة', 'Portkey (Prisma AIRS)': 'نعم — بدائل وموازنة حمل في كل الخطط' },
          { المعيار: 'تتبّع التكلفة', LiteLLM: 'نعم — تتبّع للإنفاق وميزانيات في النسخة المفتوحة', OpenRouter: 'نعم — لوحة رصيد لكل طلب', 'Portkey (Prisma AIRS)': 'نعم — توزيع للتكلفة وميزانيات لكل مفتاح افتراضي' },
          { المعيار: 'تحديد المعدّل', LiteLLM: 'نعم — في النسخة المفتوحة', OpenRouter: 'عام على مستوى الحساب (غير قابل للضبط)', 'Portkey (Prisma AIRS)': 'تحكّم دقيق في خطة المؤسسات' },
          { المعيار: 'برنامج الإحالة', LiteLLM: 'لم يُعثر عليه', OpenRouter: 'لم يُعثر عليه', 'Portkey (Prisma AIRS)': 'لم يُعثر عليه (برنامج Palo Alto موجّه للشركات)' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'الأسعار المسجَّلة قبل مايو 2026 لم تعد تصف Portkey. تأكّد من شروط Prisma AIRS الحالية لدى Palo Alto Networks قبل اقتباس أي رقم من مقال أو لقطة شاشة قديمة.',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: 'مسار الاستضافة الذاتية: لماذا LiteLLM هو الخيار الافتراضي',
        content: '**‏LiteLLM هو الخيار الافتراضي لدى المجتمع لأن النسخة المجانية هي المنتج كاملاً، لا نسخة تجريبية منه.** فتتبّع الإنفاق والميزانيات وتحديد المعدّل وسلاسل التحويل عند الأعطال كلها ضمن النواة مفتوحة المصدر، بينما تضيف خطة المؤسسات تسجيل الدخول الموحّد وSCIM ودعماً مخصّصاً ونشراً معزولاً عن الشبكة، لا التوجيه نفسه.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يستدعي وكيل LiteLLM مفتوح المصدر أكثر من 100 واجهة برمجية لمزوّدي نماذج LLM عبر واجهة متوافقة مع OpenAI، بلا كلفة ترخيص وبلا هامش لكل طلب، عند أي حجم استخدام.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — أفضل بوابة إجمالاً',
            tagline: 'مجاني وذاتي الاستضافة، نحو 57.5 ألف نجمة على GitHub — الأقرب إلى معيار فعلي',
            verdict: 'وكيل LiteLLM الأساسي مجاني ومفتوح المصدر، ويوجّه أكثر من 100 واجهة برمجية لمزوّدين عبر نقطة نهاية متوافقة مع OpenAI. وهو الخيار الوحيد هنا بلا هامش نسبي على إنفاق النماذج، وهذا تحديداً ما يجعله الأرخص بالقيمة المطلقة عند أي حجم استخدام معتبر. ونحو 57.5 ألف نجمة و11 ألف نسخة معدّلة (أغسطس 2026) هي أقوى مؤشر عام على استمرار الصيانة بين الأدوات الثلاث — وهو أمر يهمّ حين تراهن بطبقة توجيه إنتاجية على مشروع يُفترض أن يظلّ مصاناً بعد عامين. أما الكلفة التي تدفعها فعلاً فتشغيلية: أنت من يشغّل الخدمة ويراقبها ويحدّثها.',
            pros: [
              'لا رسوم لكل طلب ولا نسبة مئوية — مجاني عند أي حجم',
              'سلاسل التحويل عند الأعطال والميزانيات وحدود المعدّل كلها في النسخة المجانية مفتوحة المصدر',
              'تحكّم كامل بمنطق التوجيه وبمكان بقاء البيانات',
              'خطة المؤسسات تدعم النشر المعزول عن الشبكة صراحةً',
            ],
            cons: [
              'الجاهزية والترقيع والمراقبة كلها على عاتقك',
              'سعر خطة المؤسسات بالطلب — لا رقم منشور تبني عليه ميزانيتك',
              'خيار غير مناسب لفريق بلا أي طاقة DevOps',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: 'مجاني (النواة المفتوحة)؛ والمؤسسات سنوياً بالطلب',
                label: 'LiteLLM — ابدأ مجاناً',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'LiteLLM على GitHub',
                productCategory: 'dev-tool',
                priceRange: 'مجاني',
                label: 'اطّلع على الشيفرة (BerriAI/litellm)',
              },
            ],
          },
        ],
        note: 'استخدم LiteLLM إن أردت صفر رسوم متكرّرة وتحكّماً كاملاً بالتوجيه. وتجنّبه إن لم يكن في الفريق من لديه طاقة لتشغيل وكيل — فهذه الكلفة حقيقية وإن كانت الرخصة مجانية.',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: 'المسار المُستضاف: OpenRouter وPrisma AIRS',
        content: 'ثمّة أسباب صادقة، لا تسويقية، لاستئجار البوابة بدل تشغيلها. فأنت توفّر عملاً حقيقياً في البنية التحتية: الجاهزية والتحديثات وإدارة الأسرار والمناوبة التي ترافق أي خدمة تقع في مسار الطلبات. كما تمنحك البوابة المُستضافة تغطية مزوّدين كنت ستدمجها واحداً تلو الآخر.\n\n**والمقابل رسم نسبي يزداد مع الإنفاق، وتحكّم أقلّ دقّة في التحويل عند الأعطال.** وهي مقايضة جيّدة عند حجم متوسط وسيّئة عند حجم كبير — ويقدّم [قسم التكلفة أدناه](#cost-at-scale) الحساب الدقيق لنقطة التعادل.',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — أفضل بوابة بلا إعداد',
            tagline: 'أكثر من 380 نموذجاً بمفتاح API واحد، وبلا أي خادم تشغّله',
            verdict: 'يمثّل OpenRouter أسرع طريق من الصفر إلى تطبيق متعدد النماذج يعمل فعلياً: سجّل، واحصل على مفتاح API، واستدعِ في اليوم نفسه أكثر من 380 نموذجاً معروضاً. ولا يوجد اشتراك — فالرسم يقع على شحن الحساب، بنحو 5.5% على مشتريات الرصيد عبر Stripe (بحد أدنى 0.80 دولار) أو 5% عبر العملات الرقمية. أما رسم BYOK البالغ 5% فلا يُطبَّق إلا بعد تجاوز الإنفاق الشهري المُوجَّه عبر BYOK حاجز 25,000 دولار (الدفع حسب الاستخدام) أو 200,000 دولار (خطة المؤسسات)، أي أن الاستخدام الخفيف لا يدفع شيئاً إضافياً هناك. والتحويل عند الأعطال تلقائي لكنه على مستوى المنصّة: فحين يفشل مزوّد، يستطيع OpenRouter التوجيه إلى نموذج مكافئ دون أن تضبط أنت السلسلة.',
            pros: [
              'بلا أي بنية تحتية — مفتاح API واحد هو كل الإعداد',
              'أكثر من 380 نموذجاً معروضاً، وهو أكثر بكثير مما ستدمجه يدوياً',
              'بلا اشتراك؛ والاستخدام الخفيف لـBYOK يبقى ضمن الحد المجاني',
              'تحويل تلقائي بين المزوّدين عند الأعطال بلا أي ضبط',
            ],
            cons: [
              'رسم الـ5.5% تقريباً يتراكم ويصبح مكلفاً عند الحجم الكبير',
              'تحديد المعدّل عام على مستوى الحساب وغير قابل للضبط من جانبك',
              'تحكّم أقل بالمزوّد الذي يعالج الطلب الفاشل — وهي مشكلة تحت قواعد صارمة لإقامة البيانات',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'بلا اشتراك؛ نحو 5.5% على مشتريات الرصيد عبر Stripe',
                label: 'OpenRouter — اطّلع على الأسعار',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'وثائق رسوم OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: 'الاطّلاع مجاني',
                label: 'راجع جدول الرسوم الحالي',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — الشراء الأمني المؤسسي',
            tagline: 'صار الآن بوابة الذكاء الاصطناعي داخل منصّة الأمن لدى Palo Alto Networks',
            verdict: 'ما زال Portkey يؤدّي عمل البوابة: بدائل تلقائية وموازنة حمل وتوزيع للتكلفة وميزانيات لكل مفتاح افتراضي في جميع الخطط، مع خطة Developer مجانية بـ10 آلاف سجل شهرياً وخطة Production بـ49 دولاراً شهرياً و100 ألف سجل. الذي تغيّر هو الفئة: فمنذ أن أتمّت Palo Alto Networks الاستحواذ في 29 مايو 2026، صار يُقدَّم بوصفه بوابة الذكاء الاصطناعي داخل منصّة الأمن Prisma AIRS لا موجّهاً مستقلاً. وهذا مناسب تماماً إن كنت تشتري أصلاً حوكمة ذكاء اصطناعي مؤسسية، وغير مناسب إن كنت تريد أداة رشيقة ومستقلة.',
            pros: [
              'بدائل وموازنة حمل في كل الخطط بما فيها المجانية',
              'توزيع للتكلفة وميزانيات لكل مفتاح افتراضي مدمجة',
              'نشر على سحابة خاصة متاح في خطة المؤسسات',
              'يجمع توجيه البوابة مع حوكمة أوسع لأمن الذكاء الاصطناعي',
            ],
            cons: [
              'لم يعد مستقلاً — فخارطة الطريق والأسعار تتبع الآن مورّد أمن كبيراً',
              'الأسعار وبنية الخطط السابقة لمايو 2026 قد تكون تجاوزها الزمن',
              'خيار غير مناسب إن كان حياد المورّد جزءاً من سبب رغبتك في بوابة',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: 'خطة مجانية؛ 49 دولاراً شهرياً لـProduction؛ والمؤسسات بالطلب',
                label: 'Portkey — ابدأ مجاناً (10 آلاف سجل شهرياً)',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: 'أسعار المؤسسات بالطلب',
                label: 'Prisma AIRS — اطّلع على الخطط',
              },
            ],
          },
        ],
        note: 'استخدم OpenRouter إن كان «أن يستمرّ أي نموذج مكافئ في العمل» سياسة مقبولة للتحويل عند الأعطال. وتجنّبه إن كنت تحتاج ضمانات تعاقدية بشأن المزوّد الذي يستوعب حركة الفائض تحديداً.',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: 'كم تكلّف كل بوابة عند التوسّع؟',
        content: '**تبقى نواة LiteLLM مفتوحة المصدر مجانية مهما بلغ الحجم؛ وتكلفة OpenRouter نسبة من كل دولار تشحنه؛ وتكلفة Portkey تزداد مع حجم السجلات وشروط العقد.** والجدول أدناه حساب مباشر على رسم Stripe المنشور البالغ نحو 5.5% — ليس تقديراً، بل هو الرقم الذي يحسم هذا القرار.\n\nلم نذكر عمداً مبلغاً بالدولار لتشغيل LiteLLM: فالوكيل خدمة صغيرة دائمة التشغيل، وكلفتها تتوقّف كلياً على المكان الذي تشغّلها فيه. ضع فاتورة استضافتك أنت في العمود الأخير، وسيتّضح القرار من تلقاء نفسه.\n\nملاحظة للقرّاء في المنطقة: الشركات الثلاث تفوتر بالدولار الأمريكي، ولا توجد قائمة أسعار بالعملات المحلية، لذا يُضاف إلى كشف حسابك سعر الصرف وربما رسوم تحويل العملة بحسب بنكك.',
        tableFormat: true,
        columns: ['الإنفاق الشهري على النماذج', 'رسم OpenRouter (نحو 5.5%)', 'كلفة ترخيص LiteLLM', 'الاستضافة الذاتية أوفر دون'],
        rows: [
          { 'الإنفاق الشهري على النماذج': '200 دولار', 'رسم OpenRouter (نحو 5.5%)': 'نحو 11 دولاراً شهرياً (نحو 132 دولاراً سنوياً)', 'كلفة ترخيص LiteLLM': '0 دولار', 'الاستضافة الذاتية أوفر دون': '11 دولاراً شهرياً' },
          { 'الإنفاق الشهري على النماذج': '500 دولار', 'رسم OpenRouter (نحو 5.5%)': 'نحو 27.50 دولاراً شهرياً (نحو 330 دولاراً سنوياً)', 'كلفة ترخيص LiteLLM': '0 دولار', 'الاستضافة الذاتية أوفر دون': '27.50 دولاراً شهرياً' },
          { 'الإنفاق الشهري على النماذج': '2,000 دولار', 'رسم OpenRouter (نحو 5.5%)': 'نحو 110 دولارات شهرياً (نحو 1,320 دولاراً سنوياً)', 'كلفة ترخيص LiteLLM': '0 دولار', 'الاستضافة الذاتية أوفر دون': '110 دولارات شهرياً' },
          { 'الإنفاق الشهري على النماذج': '10,000 دولار', 'رسم OpenRouter (نحو 5.5%)': 'نحو 550 دولاراً شهرياً (نحو 6,600 دولار سنوياً)', 'كلفة ترخيص LiteLLM': '0 دولار', 'الاستضافة الذاتية أوفر دون': '550 دولاراً شهرياً' },
        ],
        callouts: [
          {
            type: 'info',
            text: 'يُطبَّق الرسم على الرصيد الذي تشتريه لا على كل طلب — كما أن رسم BYOK المنفصل البالغ 5% لا يبدأ إلا فوق 25,000 دولار شهرياً من الإنفاق المُوجَّه عبر BYOK (الدفع حسب الاستخدام) أو 200,000 دولار شهرياً (للمؤسسات). ودون هذا الحد لا يكلّف BYOK شيئاً إضافياً.',
          },
        ],
        note: 'استخدم LiteLLM إن كان إنفاقك الشهري على النماذج مرتفعاً بما يكفي ليصبح هامش 5% وأكثر مبلغاً معتبراً بالقيمة المطلقة. واستخدم OpenRouter إن كان الرسم أقل من ساعات الهندسة اللازمة لتشغيل وكيل. ولتطبيق الحساب نفسه على العتاد، راجع [حاسبة تكلفة نماذج LLM المحلية](/ar/local-llms/local-llm-cost-calculator-build-vs-rent-2026).',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'لماذا يهمّ تغيّر ملكية Portkey في هذا القرار',
        content: '**لم يعد Portkey منتجاً مستقلاً: فقد أتمّت Palo Alto Networks الاستحواذ عليه في 29 مايو 2026 وتدمجه في منصّة الأمن Prisma AIRS.** وهذا ليس مجرّد تغيير اسم. فالبوابة التي تتبنّاها اليوم بوصفها أداة خفيفة قد يُعاد تسعيرها أو تحديد نطاقها أو تُباع حصراً ضمن حزمة أمنية أكبر خلال دورة منتج واحدة.\n\nوإن كنت تقيّم Portkey تحديداً لأنه منتج شركة ناشئة رشيقة، فهذا الافتراض لم يعد قائماً. تأكّد من الشروط الحالية مباشرةً لدى Palo Alto Networks قبل الالتزام — فالمنتجات المستحوذ عليها كثيراً ما تغيّر الأسعار وبنية الخطط ونماذج الدعم خلال أول 6 إلى 12 شهراً من الدمج.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أتمّت Palo Alto Networks الاستحواذ على Portkey في 29 مايو 2026 وتدمجه بوصفه بوابة الذكاء الاصطناعي داخل منصّة الأمن Prisma AIRS.',
          },
        ],
        note: 'استخدم Portkey / Prisma AIRS إن أردت توجيه البوابة مضموماً إلى حوكمة أمن ذكاء اصطناعي كنت ستشتريها على أي حال. وتجنّبه إن كان الاستقلال عن خارطة طريق مورّد أمن كبير أمراً مهماً لبنيتك.',
      },
      failover: {
        id: 'failover',
        title: 'كيف تعالج كل بوابة التحويل عند الأعطال؟',
        content: '**الثلاث جميعها تدعم التحويل التلقائي عند فشل مزوّد، والفرق في من يكتب سياسة التحويل.** فـLiteLLM وPortkey يتيحان لك تعريف سلاسل التحويل وقواعد موازنة الحمل في إعداد تتحكّم أنت به. أما OpenRouter فيعالج ذلك على مستوى المنصّة: فحين يفشل مزوّد يمكنه التوجيه تلقائياً إلى نموذج مكافئ، مع تحكّم أقل دقّة في تحديد أيّها.',
        items: [
          '**LiteLLM** — سلاسل تحويل مُعرَّفة في إعدادك أنت؛ وأدقّ تحكّم بالنموذج البديل الذي يعالج الطلب الفاشل',
          '**Portkey / Prisma AIRS** — بدائل تلقائية وموازنة حمل متاحة في كل الخطط، وتُضبط من المنصّة',
          '**OpenRouter** — تحويل تلقائي بين المزوّدين على مستوى المنصّة؛ بلا سلسلة تضبطها وبلا ضمان بشأن المزوّد الذي يتولّى المهمّة',
        ],
        note: 'للفرق التي لديها اشتراط صارم بشأن النموذج البديل الذي يخدم طلباً فاشلاً — كالبقاء داخل حدود إقامة البيانات في الاتحاد الأوروبي مثلاً — فإن الإعداد ذاتي الاستضافة لـLiteLLM هو الوحيد بين الثلاثة الذي يتيح لك كتابة تلك السياسة بنفسك.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من ينبغي أن يستخدم كل بوابة؟',
        content: '**ينبغي للمطوّرين الذين يملكون بنية تحتية أن يختاروا LiteLLM افتراضياً؛ وللفرق التي تريد وصولاً متعدد النماذج بلا تشغيل أن تختار OpenRouter؛ وللمؤسسات داخل منظومة Palo Alto أن تقيّم Prisma AIRS.** وما عدا ذلك يحسمه حجم الفريق ومتطلبات الامتثال ومدى احتمال العبء التشغيلي.',
        items: [
          '**المطوّرون المنفردون والشركات الناشئة الصغيرة الذين يجرّبون عدّة نماذج** ← OpenRouter. مفتاح API واحد، وأكثر من 380 نموذجاً، وبلا خادم ترعاه. تجنّبه إن كنت شديد الحساسية للتكلفة عند حجم كبير، فالرسم يتراكم.',
          '**فرق المنصّات التي تشغّل تطبيقات متعددة النماذج في الإنتاج** ← LiteLLM ذاتي الاستضافة. مجاني، وهو خيار المجتمع الافتراضي، وتحتفظ بالتحكّم بالتوجيه وبمكان بقاء البيانات. تجنّبه إن لم تكن لديك طاقة لتشغيل خدمة.',
          '**المؤسسات التي تشتري بالفعل منتجات Palo Alto Networks** ← Portkey داخل Prisma AIRS. فهو يُقدَّم الآن طبقةَ حوكمة وأمن، أي أن العرض يختلف عمّا كان قبل عام.',
          '**القطاعات الخاضعة للتنظيم التي تحتاج نشراً معزولاً عن الشبكة** ← يدعم LiteLLM Enterprise ذلك صراحةً؛ وتأكّد من خيارات نشر Prisma AIRS الحالية مباشرةً لدى Palo Alto Networks، فعمليات الدمج بعد الاستحواذ تغيّر المعروض على المدى القصير. راجع أيضاً [الامتثال المؤسسي مع نماذج LLM المحلية](/ar/local-llms/enterprise-compliance-local-llms).',
          '**الفرق التي تستدعي مزوّداً واحداً بحجم منخفض** ← بلا بوابة. استدعِ حزمة التطوير مباشرةً، وأعد النظر حين تضيف مزوّداً ثانياً.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'بوابات LLM في الاتحاد الأوروبي واليابان والصين',
        content: 'المكان الذي تعمل فيه البوابة هو ما يحدّد وجهة موجّهاتك. وهذا يجعل اختيار البوابة قراراً يتعلّق بالامتثال في ثلاثة أسواق كبرى، لا مجرّد مسألة تكلفة.',
        subsections: [
          {
            title: 'الاتحاد الأوروبي',
            content: 'توجّه البوابة المُستضافة محتوى الموجّهات إلى المزوّد الذي تختاره هي، وإن كان ذلك المزوّد خارج المنطقة الاقتصادية الأوروبية فقد يشكّل ذلك نقلاً عابراً للحدود بموجب المواد 44 إلى 49 من اللائحة العامة لحماية البيانات. أما نسخة LiteLLM ذاتية الاستضافة فتتيح لك تثبيت سلسلة التحويل على نقاط نهاية داخل الاتحاد الأوروبي حصراً، وتسجيل ما غادر النطاق بدقّة — وهو أيضاً ما يجعل مبدأ تقليل البيانات في المادة 5 قابلاً للدفاع عنه أمام التدقيق. وتتوقّع الجهات الرقابية الأوروبية أن تكون سياسة التوجيه هذه موثّقة ومفروضة تقنياً، لا متروكة لاستبدال تلقائي للنماذج من طرف مزوّد.',
          },
          {
            title: 'اليابان',
            content: 'يدفع برنامج وزارة الاقتصاد والتجارة والصناعة (METI) لحوكمة الذكاء الاصطناعي والسيادة الوطنية الشركات اليابانية نحو الاستدلال داخل المنشأة ومسارات بيانات قابلة للتدقيق. والبوابة ذاتية الاستضافة تناسب هذا التوجّه مباشرةً: إذ يستطيع LiteLLM أن يقف أمام خوادم نماذج محلية تشغّل Qwen2.5 أو أوزان عائلة Llama إلى جانب مزوّدين مُستضافين، فيبقي الحركة الخاضعة للتنظيم على بنية تحتية داخل اليابان مع منح المطوّرين واجهة واحدة. أما البوابة المُستضافة حصراً، مع استبدال تلقائي للمزوّد، فيصعب التوفيق بينها وبين هذا الاشتراط.',
          },
          {
            title: 'الصين',
            content: 'بموجب قانون أمن البيانات (数据安全法) وقواعد إدارة الفضاء السيبراني (CAC) لنقل البيانات عبر الحدود، تكمن مشكلة الامتثال في توجيه محتوى الموجّهات إلى مزوّدي نماذج خارج البلاد، لا في البوابة نفسها. وعادةً ما تشغّل عمليات النشر التي تخدم مستخدمي البرّ الرئيسي البوابةَ على بنية تحتية محلية، ولا توجّه إلا إلى نماذج محلية متوافقة مثل Qwen2.5 أو Baichuan. ووكيل LiteLLM ذاتي الاستضافة هو الخيار العملي هنا؛ أما توجيه OpenRouter التلقائي إلى أي مزوّد متاح فهو بالضبط السلوك الذي لا تسمح به قواعد CAC.',
          },
        ],
        note: 'استخدم بوابة ذاتية الاستضافة في أي سوق يلزمك فيه أن تُثبت كتابةً أي مزوّد عالج طلباً بعينه. واستخدم بوابة مُستضافة حيث لا ينطبق على بياناتك أي قيد على النقل عبر الحدود.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'أخطاء شائعة عند اختيار بوابة LLM',
        numberedItems: [
          {
            title: 'افتراض أن كلمة «بوابة» تعني الشيء نفسه في الأدوات الثلاث',
            whyItMatters: '‏LiteLLM وكيل ذاتي الاستضافة، وOpenRouter واجهة مُستضافة، وPortkey صار جزءاً من منصّة أمن. اقرأ صفحة المنتج الحالية لكل مزوّد قبل مقارنة قوائم الميزات، ولا تفترض التكافؤ.',
          },
          {
            title: 'اختيار OpenRouter لإنتاج بحجم كبير دون حساب الرسم',
            whyItMatters: 'عند إنفاق شهري قدره 10,000 دولار على النماذج، يبلغ رسم الـ5.5% تقريباً نحو 550 دولاراً شهرياً، أي 6,600 دولار سنوياً. أجرِ هذا الحساب على إنفاقك الفعلي لا على عامل الراحة وحده.',
          },
          {
            title: 'تبنّي بوابة قبل وجود مزوّد ثانٍ في الإنتاج',
            whyItMatters: 'القيمة الجوهرية للبوابة هي التوجيه متعدد المزوّدين مع التحويل عند الأعطال. وبنموذج واحد من مزوّد واحد فأنت تضيف طبقة تجريد ووضع فشل جديداً ومنحنى تعلّم بلا أي مقابل بعد.',
          },
          {
            title: 'اقتباس أسعار Portkey المسجَّلة قبل مايو 2026',
            whyItMatters: 'قد لا تعكس صفحات الأسعار والمقالات السابقة لاستحواذ Palo Alto شروط Prisma AIRS الحالية. تأكّد لدى المورّد قبل بناء قرار شراء على لقطة شاشة قديمة.',
          },
          {
            title: 'قراءة نجوم GitHub بوصفها مقارنة ميزات',
            whyItMatters: 'نحو 57.5 ألف نجمة لـLiteLLM تدلّ على ثقة المجتمع وعلى احتمال بقاء المشروع مصاناً بعد عامين، لا على أنه يملك ميزات أكثر من Portkey أو OpenRouter. راجع جدول المقارنة لا مؤشر التبنّي.',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: 'استغنِ عن البوابة تماماً إن…',
        content: '**إن كنت تستدعي مزوّد LLM واحداً بحجم منخفض ويمكن التنبؤ به، ولا تخطّط لإضافة ثانٍ قريباً، فدع الثلاثة جانباً.** فالبوابة تضيف تعقيداً تشغيلياً (في الاستضافة الذاتية) أو رسماً نسبياً (في المُستضافة) مقابل فائدة تعدّد المزوّدين التي لا تستعملها بعد.\n\nاستدعِ حزمة تطوير المزوّد مباشرةً، وأعد النظر في القرار يوم تضيف فعلاً نموذجاً أو مزوّداً ثانياً. وينطبق المنطق نفسه على مستوى أدنى: إن كنت لا تزال تقرّر ما إذا كنت ستستدعي واجهات مُستضافة أصلاً، فاقرأ أولاً [نماذج LLM المحلية مقابل واجهات السحابة](/ar/local-llms/local-llms-vs-cloud-apis) — فأرخص بوابة هي تلك التي لم تحتجها قطّ.',
        callouts: [
          {
            type: 'tip',
            text: 'مؤشّر عملي: أضف بوابة أول مرة تكتب فيها في شيفرتك تفرّعاً خاصاً بمزوّد بعينه. فذلك الشرط هو بالضبط شيفرة الربط التي وُجدت البوابة لإزالتها.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          {
            q: 'ما بوابة API لنماذج LLM؟',
            a: 'هي طبقة توجيه تمنح تطبيقك واجهة برمجية واحدة متسقة لاستدعاء عدّة مزوّدي LLM، وتضيف عادةً فوق الواجهات الأصلية تحويلاً عند الأعطال وتتبّعاً للتكلفة وتحديداً للمعدّل. أنت تستدعي البوابة، وهي تتولّى الصيغ الخاصة بكل مزوّد والمصادقة. ولا تتحقّق الفائدة إلا حين يصبح لديك أكثر من مزوّد في الإنتاج.',
          },
          {
            q: 'هل LiteLLM مجاني فعلاً؟',
            a: 'النواة مفتوحة المصدر مجانية وذاتية الاستضافة بلا رسوم ترخيص، وفق صفحة أسعار LiteLLM نفسها في أغسطس 2026. ولا يوجد هامش لكل طلب عند أي حجم. أما خطة المؤسسات — تسجيل الدخول الموحّد وSCIM والدعم المخصّص والنشر المعزول عن الشبكة — فتُسعَّر سنوياً بالطلب بحسب حجم طلباتك وتشمل تجربة لمدة 30 يوماً.',
          },
          {
            q: 'هل يفرض OpenRouter رسماً على كل طلب؟',
            a: 'ليس مباشرةً. فرسم OpenRouter يقع على شحن الحساب: نحو 5.5% على مشتريات الرصيد عبر Stripe بحد أدنى 0.80 دولار، أو 5% عبر العملات الرقمية. أما رسم BYOK المنفصل البالغ 5% فينطبق فقط حين يتجاوز الإنفاق الشهري المُوجَّه عبر BYOK حاجز 25,000 دولار في الدفع حسب الاستخدام، أو 200,000 دولار في خطة المؤسسات.',
          },
          {
            q: 'هل ما زال Portkey شركة مستقلة؟',
            a: 'لا. فقد أتمّت Palo Alto Networks الاستحواذ على Portkey في 29 مايو 2026 وتدمجه بوصفه بوابة الذكاء الاصطناعي الأساسية داخل منصّة الأمن Prisma AIRS، وفق البيان الصحفي لـPalo Alto Networks نفسها. وتعامل مع أي معلومات أسعار أو خارطة طريق سابقة لمايو 2026 على أنها قد تكون تجاوزها الزمن.',
          },
          {
            q: 'أي بوابة تدعم أكبر عدد من المزوّدين؟',
            a: 'يعرض OpenRouter أكثر من 380 نموذجاً على موقعه في أغسطس 2026. وتصف وثائق LiteLLM أكثر من 100 تكامل مع مزوّدين — وهي وحدة قياس مختلفة، إذ يعرض المزوّد الواحد نماذج كثيرة. أما مستودع بوابة Portkey فقد أعلن سابقاً أكثر من 1600 نموذج، وهو رقم ينبغي إعادة التحقّق منه في ضوء الاستحواذ.',
          },
          {
            q: 'هل يمكنني استضافة Portkey ذاتياً؟',
            a: 'كان Portkey/Prisma AIRS يوفّر نشراً على سحابة خاصة في خطة المؤسسات وفق صفحات الأسعار السابقة للاستحواذ. تأكّد من شروط الاستضافة الذاتية الحالية مباشرةً لدى Palo Alto Networks، فعمليات الدمج بعد الاستحواذ كثيراً ما تغيّر خيارات النشر في السنة الأولى.',
          },
          {
            q: 'هل لدى أي من الثلاثة برنامج إحالة؟',
            a: 'لم يُعثر على أي برنامج إحالة أو شراكة عام وقابل للتحقّق لـLiteLLM أو Portkey أو OpenRouter حتى أغسطس 2026. وكل روابط المنتجات في هذه الصفحة روابط عادية معلَنة لا تدرّ على PromptQuorum شيئاً. وإن تغيّر ذلك فستُحدَّث الصفحة بإفصاح يطابق شروط البرنامج الفعلية.',
          },
          {
            q: 'كيف أختار بين الاستضافة الذاتية والبوابة المُستضافة؟',
            a: 'قارن نسبة 5.5% من إنفاقك الشهري على النماذج بتكلفة تشغيل خدمة صغيرة دائمة. فدون نقطة التعادل يكون OpenRouter أرخص متى احتسبت وقتك؛ وفوقها يتفوّق LiteLLM ذاتي الاستضافة بالقيمة المطلقة. وأضف اختباراً ثانياً للامتثال: إن لزمك أن تُثبت أي مزوّد عالج طلباً بعينه، فاستضف ذاتياً بصرف النظر عن الحساب.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        items: [
          '**استخدم LiteLLM إن** كنت تستطيع الاستضافة الذاتية وتريد صفر رسوم متكرّرة مع تحكّم كامل بالتوجيه — الخطوة التالية: انشر الوكيل مفتوح المصدر ووجّه عنوان تطبيقك الأساسي إليه.',
          '**استخدم OpenRouter إن** أردت وصولاً متعدد النماذج اليوم بلا بنية تحتية — الخطوة التالية: أنشئ مفتاح API واشحن الحساب مع احتساب رسم الـ5.5% تقريباً.',
          '**استخدم Portkey / Prisma AIRS إن** كنت تشتري أو تقيّم بالفعل أدوات أمن من Palo Alto Networks وتريد ضمّ توجيه البوابة — الخطوة التالية: تواصل مع Palo Alto Networks لإعادة التحقّق من الشروط الحالية بعد الاستحواذ.',
          '**تجاوز الثلاثة إن** كنت تستدعي مزوّداً واحداً بحجم منخفض وبلا خطط قريبة لتعدّد المزوّدين — الخطوة التالية: أعد النظر حين تضيف مزوّداً ثانياً.',
        ],
        note: 'روابط المنتجات في هذه الصفحة تقود إلى موقع كل مورّد. ولا تربط PromptQuorum أي علاقة إحالة بـLiteLLM أو OpenRouter أو Portkey / Palo Alto Networks، ولا تكسب شيئاً من هذه الروابط.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'صفحة أسعار LiteLLM الرسمية', description: 'تفصيل الخطة مفتوحة المصدر وخطة المؤسسات، من المورّد مباشرةً.' },
          { url: 'https://github.com/BerriAI/litellm', title: 'BerriAI/litellm على GitHub', description: 'عدد نجوم المستودع ونسخه المعدّلة، والرخصة، ووصف الميزات.' },
          { url: 'https://openrouter.ai/docs/faq', title: 'الأسئلة الشائعة لـOpenRouter', description: 'نسب رسوم شراء الرصيد وشرائح رسم BYOK، من المورّد مباشرةً.' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'وثائق حدود واجهة OpenRouter', description: 'حدود المعدّل في الخطة المجانية وقواعد الوصول القائم على الرصيد.' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'إتمام Palo Alto Networks الاستحواذ على Portkey', description: 'تاريخ إتمام الاستحواذ وخطة الدمج في Prisma AIRS.' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'Portkey-AI/gateway على GitHub', description: 'مستودع البوابة مفتوح المصدر وأرقام المزوّدين المعلَنة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[شغّل واجهة متوافقة مع OpenAI على نموذج LLM محلي](/ar/local-llms/local-llm-openai-compatible-api) — بيئة التشغيل التي تقف البوابة أمامها',
          '[نماذج LLM المحلية مقابل واجهات السحابة: أيّها تستدعي](/ar/local-llms/local-llms-vs-cloud-apis) — احسم هذا قبل اختيار بوابة',
          '[حزمة أدوات المطوّر لنماذج LLM المحلية](/ar/local-llms/local-llm-developer-stack) — أين تقع البوابة في سلسلة الأدوات',
          '[مقارنة استئجار وحدات GPU السحابية 2026](/ar/local-llms/cloud-gpu-rental-comparison-2026) — استئجار الحوسبة بدل التوجيه إلى نماذج مُستضافة',
          '[حاسبة التكلفة: الشراء أم الاستئجار لنماذج LLM المحلية](/ar/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — الحساب نفسه مطبَّقاً على العتاد',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM مقابل OpenRouter مقابل Portkey: أفضل بوابة LLM 2026',
      description: 'مقارنة بين LiteLLM وOpenRouter وPortkey/Prisma AIRS بوصفها بوابات API لنماذج LLM: أسعار حقيقية، وخيارات استضافة ذاتية، وتحكّم في التحويل عند الأعطال، والاستحواذ الذي غيّر فئة Portkey. تحقّق: أغسطس 2026.',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/ar/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'ar',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'بوابة API لنماذج LLM' },
        { '@type': 'Thing', name: 'التوجيه متعدد النماذج' },
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
      inLanguage: 'ar',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ما بوابة API لنماذج LLM؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'طبقة توجيه تمنح تطبيقك واجهة برمجية واحدة متسقة لاستدعاء عدّة مزوّدي LLM، وتضيف فوق الواجهات الأصلية تحويلاً عند الأعطال وتتبّعاً للتكلفة وتحديداً للمعدّل.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل LiteLLM مجاني فعلاً؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'النواة مفتوحة المصدر مجانية وذاتية الاستضافة بلا رسوم ترخيص وبلا هامش لكل طلب عند أي حجم، وفق صفحة أسعارها في أغسطس 2026. أما خطة المؤسسات فتُسعَّر سنوياً بالطلب.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يفرض OpenRouter رسماً على كل طلب؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا. يقتطع OpenRouter نحو 5.5% على مشتريات الرصيد عبر Stripe (بحد أدنى 0.80 دولار) أو 5% بالعملات الرقمية، إضافة إلى رسم BYOK بنسبة 5% فقط فوق 25,000 دولار شهرياً من الإنفاق المُوجَّه عبر BYOK، أو 200,000 دولار شهرياً للمؤسسات.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل ما زال Portkey شركة مستقلة؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا. أتمّت Palo Alto Networks الاستحواذ في 29 مايو 2026 وتدمج Portkey بوصفه بوابة الذكاء الاصطناعي داخل منصّة الأمن Prisma AIRS.',
          },
        },
        {
          '@type': 'Question',
          name: 'كيف أختار بين الاستضافة الذاتية وبوابة LLM مُستضافة؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'قارن نسبة 5.5% من إنفاقك الشهري على النماذج بتكلفة تشغيل خدمة صغيرة دائمة. ففوق نقطة التعادل يتفوّق LiteLLM ذاتي الاستضافة، ودونها يتفوّق OpenRouter متى احتسبت وقتك.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'أفضل بوابات API لنماذج LLM (أغسطس 2026)',
      inLanguage: 'ar',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: 'الأفضل إجمالاً — وكيل مفتوح المصدر مجاني وذاتي الاستضافة، وأكثر من 100 واجهة برمجية لمزوّدين، وبلا هامش لكل طلب' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: 'أفضل بوابة بلا إعداد — أكثر من 380 نموذجاً بمفتاح API واحد، ورسوم نحو 5.5% على الرصيد المشحون' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: 'شراء أمني مؤسسي — خطة Production بـ49 دولاراً شهرياً، وهو الآن جزء من Prisma AIRS لدى Palo Alto Networks' },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    theme: 'Tools & Interfaces',
    title: 'LiteLLM vs OpenRouter vs Portkey: 최고의 LLM 게이트웨이 2026',
    seoTitle: '2026 최고의 LLM API 게이트웨이: LiteLLM인가 OpenRouter인가',
    metaDescription: 'LiteLLM 프록시는 무료이며 셀프 호스팅이 가능하고, OpenRouter는 충전 금액의 약 5.5%를 받으며, Portkey는 이제 Palo Alto의 Prisma AIRS에 속합니다.',
    educationalLevel: 'Advanced',
    audience: '멀티모델 LLM 애플리케이션을 개발하는 개발자',
    affiliateDisclosure: true,
    publishDate: '2026-08-27',
    dateModified: '2026-08-27',
    readTime: '11분 읽기',
    primaryTerm: 'LLM API 게이트웨이',
    targetKeywords: [
      '2026 최고의 LLM 게이트웨이',
      'LiteLLM vs OpenRouter',
      'LLM API 게이트웨이 비교',
      '셀프 호스팅 LLM 프록시',
      'OpenRouter 수수료',
    ],
    leadAnswerBlock: '**2026년 대다수 개발자에게 최적의 LLM API 게이트웨이는 LiteLLM입니다. 오픈소스 프록시는 무료이고 셀프 호스팅이 가능하며, 100개가 넘는 공급자 API를 OpenAI 호환 인터페이스 하나로 라우팅하면서 요청당 추가 비용을 붙이지 않습니다. 인프라를 전혀 두지 않고 오늘 바로 380개 이상의 모델을 쓰고 싶다면 OpenRouter가 더 낫고, 대신 Stripe 충전액의 약 5.5%가 부과됩니다. Portkey는 더 이상 독립 게이트웨이가 아닙니다. Palo Alto Networks가 2026년 5월 29일 인수를 완료했고 보안 플랫폼 Prisma AIRS에 통합하고 있습니다.**',
    quickAnswerTop: {
      question: '2026년 최고의 LLM API 게이트웨이는 무엇입니까?',
      answer: '**서비스를 운영할 수 있는 팀에는 LiteLLM이, 그렇지 못한 팀에는 OpenRouter가 적합합니다.** LiteLLM의 오픈소스 코어는 사용량과 무관하게 비용이 들지 않으며, 라우팅 로직과 데이터 소재지를 여러분의 통제 아래 둡니다. OpenRouter는 인프라 작업을 전부 없애 주는 대신 Stripe 충전액의 약 5.5%(암호화폐는 5%)와 무료 한도를 초과한 부분에 5%의 BYOK 수수료를 부과합니다. Portkey는 이제 Palo Alto Networks의 Prisma AIRS 플랫폼 안에 있는 AI 게이트웨이로만 제공되므로, 가벼운 도구가 아니라 엔터프라이즈 보안 구매로 평가하십시오.',
      bullets: [
        '**종합 최적:** LiteLLM — 무료, 셀프 호스팅, GitHub 스타 약 5.75만 개, 100개 이상의 공급자 API',
        '**설정 없이 최적:** OpenRouter — API 키 하나로 380개 이상의 모델, 충전액에 약 5.5% 수수료',
        '**엔터프라이즈 보안 구매:** Portkey / Prisma AIRS — Production 요금제 월 49달러, 현재 Palo Alto 소속',
        '**손익분기점:** 월 모델 지출의 5.5%가 프록시 호스팅 비용을 넘어서는 순간부터 셀프 호스팅이 유리',
        '⚠️ 세 곳 모두 공개된 제휴·추천 프로그램이 없습니다. 이 글의 모든 링크는 일반 제품 링크입니다',
      ],
      updatedDate: '2026-08-27',
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '최선의 선택: 셀프 호스팅인가 임대인가', anchor: 'best-choice' },
      { label: 'LLM API 게이트웨이란 무엇입니까', anchor: 'what-is-a-gateway' },
      { label: '전체 비교표', anchor: 'comparison' },
      { label: '셀프 호스팅 경로: LiteLLM', anchor: 'self-hosted-track' },
      { label: '호스팅 경로: OpenRouter와 Prisma AIRS', anchor: 'hosted-track' },
      { label: '규모가 커지면 각 게이트웨이 비용은 얼마입니까', anchor: 'cost-at-scale' },
      { label: 'Portkey의 소유권 변경이 중요한 이유', anchor: 'portkey-acquisition' },
      { label: '각 게이트웨이의 장애 대응 방식', anchor: 'failover' },
      { label: '누가 어떤 게이트웨이를 써야 합니까', anchor: 'who-should-use' },
      { label: '지역별 맥락: EU, 일본, 중국', anchor: 'regional-context' },
      { label: '흔한 실수', anchor: 'common-mistakes' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '최종 결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '함께 읽기', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        items: [
          '**LiteLLM의 오픈소스 프록시는 사용량과 무관하게 무료입니다** — OpenAI 호환 엔드포인트 하나 뒤에 100개 이상의 공급자 API를 두고, 지출 추적·예산·레이트 리밋까지 무료 요금제에 포함됩니다.',
          'OpenRouter는 구독료를 받지 않지만 Stripe 충전액의 약 5.5%(최소 0.80달러), 암호화폐는 5%를 가져가며, 월 25,000달러(종량제) 또는 200,000달러(엔터프라이즈)를 넘는 부분에 5%의 BYOK 수수료가 붙습니다.',
          'Portkey는 Palo Alto Networks에 인수되었고(2026년 5월 29일 완료) Prisma AIRS에 통합되는 중입니다. 이제는 엔터프라이즈 보안 구매로 다루십시오.',
          'LiteLLM의 GitHub 저장소는 2026년 8월 기준 약 5.75만 개의 스타와 1.1만 개의 포크를 보유하고 있으며, 세 제품 중 가장 명확한 공개 채택 지표입니다.',
          'OpenRouter는 380개 이상의 모델을 제공하며, 가입에서 멀티모델 호출이 실제로 동작하기까지 가장 빠른 경로입니다.',
          '솔직한 손익분기점: 월 모델 지출의 5.5%가 프록시 운영 비용을 넘어서는 순간부터 셀프 호스팅이 더 저렴해집니다.',
          '**게이트웨이 자체를 건너뛰어야 하는 경우:** 단일 공급자를 낮고 예측 가능한 사용량으로 호출하고 있으며, 두 번째 공급자를 추가할 계획이 없을 때입니다.',
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '🏆 최선의 선택: 셀프 호스팅인가, 게이트웨이 임대인가',
        content: '**돌릴 곳이 있다면 LiteLLM을 직접 운영하고, 없다면 OpenRouter를 쓰십시오.** 이 질문 하나가 어떤 기능 목록보다 확실하게 이 선택을 결정합니다. 세 도구 모두 단일 API, 장애 대응, 비용 추적이라는 게이트웨이의 핵심 역할은 이미 충족하고 있기 때문입니다.',
        decisionBlock: {
          title: '셀프 호스팅인가, 호스팅형 게이트웨이인가',
          localIf: [
            '이미 서비스를 운영하고 있고 프록시를 유지 보수할 수 있음 — LiteLLM은 어떤 사용량에서도 추가 요금이 없습니다',
            '월 모델 지출이 충분히 커서 5%가 실제 금액으로 다가옴(월 500달러를 넘으면 대부분의 소규모 호스팅 비용을 초과합니다)',
            '실패한 요청을 어느 공급자가 처리할지 정확히 통제해야 함 — 예를 들어 EU 데이터 소재지 경계 안에 머물러야 하는 경우',
            '망 분리 환경 배포가 필요함(LiteLLM Enterprise가 명시적으로 지원)',
          ],
          cloudIf: [
            'DevOps 여력이 없고 운영 중인 서비스를 떠안고 싶지 않음',
            '한 시간 안에 380개 이상의 모델을 호출하고 싶음 — OpenRouter에 필요한 것은 API 키 하나뿐입니다',
            '지출 규모가 작아서 절약되는 시간에 비하면 약 5.5%가 미미함',
            '이미 Palo Alto Networks 보안 제품을 구매하고 있고 Prisma AIRS 안에서 게이트웨이를 통제하고 싶음',
          ],
          quick: [
            '무료이며 셀프 호스팅 → **LiteLLM**(Apache 라이선스 오픈소스 코어, 스타 약 5.75만 개)',
            '인프라 없이 오늘 바로 모델을 → **OpenRouter**(380개 이상의 모델, 충전액에 약 5.5%)',
            '엔터프라이즈 AI 보안 거버넌스 → **Portkey / Prisma AIRS**(Production 월 49달러, Enterprise는 문의)',
            '공급자 한 곳, 낮은 사용량 → **게이트웨이 불필요** — SDK를 직접 호출하십시오',
          ],
        },
        affiliateLinks: [
          {
            url: 'https://www.litellm.ai/',
            productName: 'LiteLLM',
            productCategory: 'dev-tool',
            priceRange: '무료(오픈소스 코어)',
            label: 'LiteLLM — 무료로 시작(셀프 호스팅)',
          },
          {
            url: 'https://openrouter.ai/',
            productName: 'OpenRouter',
            productCategory: 'cloud-ai',
            priceRange: '구독 없음; 충전액에 약 5.5% 수수료',
            label: 'OpenRouter — 가격 보기',
          },
        ],
      },
      whatIsAGateway: {
        id: 'what-is-a-gateway',
        title: 'LLM API 게이트웨이란 무엇입니까',
        content: '**LLM API 게이트웨이는 애플리케이션과 여러 모델 공급자 사이에 놓여 일관된 단일 API를 제공하는 라우팅 계층입니다.** OpenAI, Anthropic, Google을 비롯한 각 공급자마다 별도의 연동 코드를 작성하는 대신, 게이트웨이를 한 번 호출하면 공급자별 형식과 인증, 장애 대응을 처리하고 대부분의 구현에서는 비용 추적과 레이트 리밋까지 맡습니다.\n\n이 이점은 프로덕션에 공급자가 둘 이상일 때에만 생깁니다. 공급자가 하나뿐인 애플리케이션에서 게이트웨이는 대가 없는 추상화 계층일 뿐입니다. 공급자 난립이 이미 접착 코드와 온콜 대응 비용을 초래하고 있다면 도입하고, 그렇지 않다면 넘어가십시오.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLM API 게이트웨이는 애플리케이션의 호출을 OpenAI 호환 단일 인터페이스를 통해 여러 모델 공급자로 라우팅하고, 원래 API 위에 장애 대응·비용 추적·레이트 리밋을 더합니다.',
          },
          {
            type: 'plain-terms',
            text: 'AI 모델용 전원 어댑터라고 생각하십시오. 코드는 하나의 콘센트에만 꽂고, 공급자마다 플러그 모양이 다른 문제는 어댑터가 흡수합니다. 플러그를 하나만 쓴다면 어댑터는 필요 없습니다.',
          },
        ],
        note: '게이트웨이는 로컬 런타임과 다릅니다. 호스팅 공급자로 라우팅하는 대신 자체 하드웨어에서 모델을 서빙하려면 [로컬 LLM용 OpenAI 호환 API 가이드](/ko/local-llms/local-llm-openai-compatible-api)와 [llama.cpp vs Ollama vs vLLM 비교](/ko/local-llms/llamacpp-vs-ollama-vs-vllm)를 참고하십시오. 그것들은 런타임이며 게이트웨이는 그 앞단에 놓입니다.',
      },
      comparison: {
        id: 'comparison',
        title: 'LiteLLM vs OpenRouter vs Portkey: 전체 비교',
        content: '**모든 항목에서 이기는 게이트웨이는 없습니다. 비용과 통제력은 LiteLLM, 도입 속도는 OpenRouter, 엔터프라이즈 거버넌스는 Prisma AIRS가 앞섭니다.** 가격과 요금제 내용은 2026년 8월 27일 각 공급사 공식 페이지에서 확인했습니다. 올해 게이트웨이 가격이 여러 차례 바뀌었으므로 이 페이지가 게시된 지 90일이 넘었다면 다시 확인하십시오.',
        tableFormat: true,
        columns: ['기준', 'LiteLLM', 'OpenRouter', 'Portkey (Prisma AIRS)'],
        rows: [
          { 기준: '적합 대상', LiteLLM: '완전한 통제를 원하고 수수료를 피하려는 셀프 호스팅 팀', OpenRouter: '인프라 없이 빠르게 멀티모델 작업', 'Portkey (Prisma AIRS)': '이미 Palo Alto 보안을 구매 중인 기업' },
          { 기준: '가격', LiteLLM: '무료(오픈소스); Enterprise는 연간·문의', OpenRouter: '구독 없음; Stripe 약 5.5%, 암호화폐 5%', 'Portkey (Prisma AIRS)': '무료 월 1만 로그; Production 월 49달러; Enterprise 문의' },
          { 기준: '셀프 호스팅', LiteLLM: '가능 — 핵심 설계이며 매니지드 프록시도 선택 가능', OpenRouter: '불가 — 호스팅 API 접근만 제공', 'Portkey (Prisma AIRS)': 'Enterprise에서 프라이빗 클라우드 배포 가능' },
          { 기준: '공급자 / 모델', LiteLLM: '100개 이상의 공급자 API', OpenRouter: '380개 이상의 모델 제공', 'Portkey (Prisma AIRS)': '저장소가 이전에 1,600개 이상 LLM을 표방' },
          { 기준: '장애 대응', LiteLLM: '가능 — 오픈소스 버전에서 체인 설정 가능', OpenRouter: '가능 — 플랫폼 차원에서 자동 처리', 'Portkey (Prisma AIRS)': '가능 — 모든 요금제에서 폴백과 부하 분산' },
          { 기준: '비용 추적', LiteLLM: '가능 — 오픈소스 버전에 지출 추적과 예산 포함', OpenRouter: '가능 — 요청별 크레딧 대시보드', 'Portkey (Prisma AIRS)': '가능 — 비용 배분과 가상 키별 예산' },
          { 기준: '레이트 리밋', LiteLLM: '가능 — 오픈소스 버전', OpenRouter: '계정 단위 전역(사용자 설정 불가)', 'Portkey (Prisma AIRS)': 'Enterprise에서 세밀한 제어' },
          { 기준: '제휴 프로그램', LiteLLM: '확인되지 않음', OpenRouter: '확인되지 않음', 'Portkey (Prisma AIRS)': '확인되지 않음(Palo Alto의 것은 B2B)' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 5월 이전에 기록된 가격은 더 이상 Portkey를 설명하지 못합니다. 오래된 기사나 스크린샷의 수치를 인용하기 전에 Prisma AIRS의 현행 조건을 Palo Alto Networks에 확인하십시오.',
          },
        ],
      },
      selfHostedTrack: {
        id: 'self-hosted-track',
        title: '셀프 호스팅 경로: LiteLLM이 기본 선택인 이유',
        content: '**LiteLLM이 커뮤니티의 기본 선택인 이유는 무료 버전이 체험판이 아니라 제품 전체이기 때문입니다.** 지출 추적, 예산, 레이트 리밋, 장애 대응 체인이 모두 오픈소스 코어에 들어 있습니다. Enterprise가 더하는 것은 SSO, SCIM, 전담 지원, 망 분리 배포이지 라우팅 자체가 아닙니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LiteLLM의 오픈소스 프록시는 100개가 넘는 LLM 공급자 API를 OpenAI 호환 인터페이스로 호출하며, 라이선스 비용도 요청당 추가 비용도 없고 이는 어떤 사용량에서도 동일합니다.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'LiteLLM — 종합적으로 최적의 게이트웨이',
            tagline: '무료, 셀프 호스팅, GitHub 스타 약 5.75만 개 — 사실상의 표준에 가장 가까운 존재',
            verdict: 'LiteLLM의 핵심 프록시는 무료이자 오픈소스이며, 100개가 넘는 공급자 API를 OpenAI 호환 엔드포인트로 라우팅합니다. 여기서 유일하게 모델 지출에 비율 가산을 붙이지 않는 선택지이고, 의미 있는 사용량에서 절대 금액 기준으로 가장 저렴한 이유도 바로 그것입니다. 약 5.75만 개의 스타와 1.1만 개의 포크(2026년 8월)는 세 도구 중 가장 강력한 유지 보수 지표로, 프로덕션 라우팅 계층을 2년 뒤에도 관리될 프로젝트에 맡기는 상황에서는 중요한 신호입니다. 실제로 지불하는 대가는 운영입니다. 서비스를 돌리고 모니터링하고 업데이트하는 것은 여러분입니다.',
            pros: [
              '요청당 과금도 비율 가산도 없음 — 어떤 사용량에서도 무료',
              '장애 대응 체인, 예산, 레이트 리밋이 모두 무료 오픈소스 버전에 포함',
              '라우팅 로직과 데이터 소재지를 완전히 통제',
              'Enterprise가 망 분리 배포를 명시적으로 지원',
            ],
            cons: [
              '가용성, 패치, 모니터링의 책임은 모두 여러분에게 있음',
              'Enterprise 가격은 문의 방식이라 예산 수립에 쓸 공개 수치가 없음',
              'DevOps 여력이 전혀 없는 팀에는 맞지 않음',
            ],
            affiliateLinks: [
              {
                url: 'https://www.litellm.ai/',
                productName: 'LiteLLM',
                productCategory: 'dev-tool',
                priceRange: '무료(오픈소스 코어); Enterprise는 연간·문의',
                label: 'LiteLLM — 무료로 시작',
              },
              {
                url: 'https://github.com/BerriAI/litellm',
                productName: 'GitHub의 LiteLLM',
                productCategory: 'dev-tool',
                priceRange: '무료',
                label: '소스 코드 보기(BerriAI/litellm)',
              },
            ],
          },
        ],
        note: '반복 비용을 없애고 라우팅을 완전히 통제하고 싶다면 LiteLLM을 쓰십시오. 팀에 프록시를 운영할 여력이 있는 사람이 없다면 피하십시오. 라이선스가 무료여도 이 운영 비용은 실재합니다.',
      },
      hostedTrack: {
        id: 'hosted-track',
        title: '호스팅 경로: OpenRouter와 Prisma AIRS',
        content: '게이트웨이를 직접 운영하는 대신 임대하는 데에는 홍보 문구가 아닌 실질적인 이유가 있습니다. 가용성, 업데이트, 시크릿 관리, 그리고 요청 경로에 놓인 서비스라면 피할 수 없는 온콜 대응 같은 진짜 인프라 작업을 덜 수 있습니다. 호스팅형 게이트웨이는 직접이라면 하나씩 연동해야 할 공급자 커버리지도 함께 제공합니다.\n\n**대가는 지출에 비례해 늘어나는 수수료와, 장애 대응에 대한 덜 정밀한 통제입니다.** 사용량이 중간 수준이면 괜찮은 거래이고, 크면 나쁜 거래입니다. 손익분기점의 정확한 계산은 [아래 비용 섹션](#cost-at-scale)에 있습니다.',
        rankedItems: [
          {
            rank: 1,
            name: 'OpenRouter — 설정이 필요 없는 최적의 게이트웨이',
            tagline: 'API 키 하나로 380개 이상의 모델, 운영할 서버는 없음',
            verdict: 'OpenRouter는 아무것도 없는 상태에서 동작하는 멀티모델 애플리케이션까지 가는 가장 빠른 경로입니다. 가입하고 API 키를 받으면 같은 날 380개 이상의 모델을 호출할 수 있습니다. 구독료는 없고 수수료는 계정 충전에 붙습니다. Stripe 크레딧 구매 시 약 5.5%(최소 0.80달러), 암호화폐는 5%입니다. 5%의 BYOK 수수료는 BYOK로 라우팅된 월 지출이 25,000달러(종량제) 또는 200,000달러(엔터프라이즈)를 넘어야 발생하므로, 가벼운 사용에서는 추가 비용이 없습니다. 장애 대응은 자동이지만 플랫폼 차원에서 이뤄집니다. 공급자에 오류가 나면 여러분이 체인을 설정하지 않아도 동등한 모델로 넘길 수 있습니다.',
            pros: [
              '인프라가 전혀 필요 없음 — API 키 하나가 준비의 전부',
              '380개 이상의 모델 제공으로, 수작업으로 연동할 수 있는 수를 훨씬 넘어섬',
              '구독 없음; 가벼운 BYOK 사용은 무료 한도 안에 머무름',
              '설정 없이 공급자 간 자동 장애 대응',
            ],
            cons: [
              '약 5.5%의 수수료가 누적되어 사용량이 크면 부담이 커짐',
              '레이트 리밋이 계정 단위 전역이라 사용자가 직접 설정할 수 없음',
              '실패한 요청을 어느 공급자가 처리하는지에 대한 통제가 약해, 엄격한 데이터 소재지 규정에서는 문제가 됨',
            ],
            affiliateLinks: [
              {
                url: 'https://openrouter.ai/',
                productName: 'OpenRouter',
                productCategory: 'cloud-ai',
                priceRange: '구독 없음; Stripe 크레딧 구매에 약 5.5%',
                label: 'OpenRouter — 가격 보기',
              },
              {
                url: 'https://openrouter.ai/docs/faq',
                productName: 'OpenRouter 수수료 문서',
                productCategory: 'cloud-ai',
                priceRange: '열람 무료',
                label: '현행 수수료표 확인',
              },
            ],
          },
          {
            rank: 2,
            name: 'Portkey / Prisma AIRS — 엔터프라이즈 보안 구매',
            tagline: '이제 Palo Alto Networks 보안 플랫폼 안의 AI 게이트웨이',
            verdict: 'Portkey는 여전히 게이트웨이의 역할을 합니다. 모든 요금제에서 자동 폴백, 부하 분산, 비용 배분, 가상 키별 예산 관리를 제공하며, 무료 Developer 요금제는 월 1만 로그, Production 요금제는 월 49달러에 10만 로그입니다. 바뀐 것은 범주입니다. Palo Alto Networks가 2026년 5월 29일 인수를 완료한 이후로는 독립 라우터가 아니라 Prisma AIRS 보안 플랫폼 안의 AI 게이트웨이로 자리매김했습니다. 이미 엔터프라이즈 AI 거버넌스를 도입하는 중이라면 잘 맞고, 민첩하고 독립적인 도구를 원했다면 맞지 않습니다.',
            pros: [
              '무료 요금제를 포함한 전 요금제에서 폴백과 부하 분산 제공',
              '비용 배분과 가상 키별 예산 관리 기본 탑재',
              'Enterprise에서 프라이빗 클라우드 배포 가능',
              '게이트웨이 라우팅과 폭넓은 AI 보안 거버넌스를 결합',
            ],
            cons: [
              '더 이상 독립적이지 않으며 로드맵과 가격이 대형 보안 기업을 따라감',
              '2026년 5월 이전의 가격과 요금제 구조는 이미 낡았을 수 있음',
              '벤더 중립성이 게이트웨이를 원한 이유의 일부였다면 맞지 않음',
            ],
            affiliateLinks: [
              {
                url: 'https://portkey.ai/',
                productName: 'Portkey',
                productCategory: 'cloud-ai',
                priceRange: '무료 요금제; Production 월 49달러; Enterprise 문의',
                label: 'Portkey — 무료로 시작(월 1만 로그)',
              },
              {
                url: 'https://www.paloaltonetworks.com/prisma/prisma-airs',
                productName: 'Palo Alto Networks Prisma AIRS',
                productCategory: 'cloud-ai',
                priceRange: '엔터프라이즈 가격 문의',
                label: 'Prisma AIRS — 요금제 보기',
              },
            ],
          },
        ],
        note: '"비슷한 모델이 계속 동작하기만 하면 된다"가 받아들일 만한 장애 대응 정책이라면 OpenRouter를 쓰십시오. 초과 트래픽을 정확히 어느 공급자가 받는지에 대한 계약상 보장이 필요하다면 피하십시오.',
      },
      costAtScale: {
        id: 'cost-at-scale',
        title: '규모가 커지면 각 게이트웨이 비용은 얼마입니까',
        content: '**LiteLLM의 오픈소스 코어는 사용량과 무관하게 무료로 유지되고, OpenRouter의 비용은 충전한 금액에 대한 비율이며, Portkey의 비용은 로그 규모와 계약 조건에 따라 늘어납니다.** 아래 표는 공개된 약 5.5%의 Stripe 수수료에 대한 단순 계산입니다. 추정치가 아니라 이 선택을 좌우하는 바로 그 숫자입니다.\n\nLiteLLM 운영 비용을 달러로 제시하지 않은 것은 의도적입니다. 이 프록시는 상시 구동되는 작은 서비스이고, 그 비용은 어디에서 돌리는지에 전적으로 달려 있습니다. 마지막 열에 여러분의 호스팅 비용을 넣으면 결론은 저절로 나옵니다.\n\n한국 독자를 위한 참고: 세 공급사 모두 미국 달러로 청구하며 원화 가격표는 없습니다. 따라서 명세서에는 환율과 카드사에 따라 해외 이용 수수료가 더해집니다.',
        tableFormat: true,
        columns: ['월 모델 지출', 'OpenRouter 수수료(약 5.5%)', 'LiteLLM 라이선스 비용', '셀프 호스팅이 유리한 기준'],
        rows: [
          { '월 모델 지출': '200달러', 'OpenRouter 수수료(약 5.5%)': '약 11달러/월(약 132달러/년)', 'LiteLLM 라이선스 비용': '0달러', '셀프 호스팅이 유리한 기준': '월 11달러 미만' },
          { '월 모델 지출': '500달러', 'OpenRouter 수수료(약 5.5%)': '약 27.50달러/월(약 330달러/년)', 'LiteLLM 라이선스 비용': '0달러', '셀프 호스팅이 유리한 기준': '월 27.50달러 미만' },
          { '월 모델 지출': '2,000달러', 'OpenRouter 수수료(약 5.5%)': '약 110달러/월(약 1,320달러/년)', 'LiteLLM 라이선스 비용': '0달러', '셀프 호스팅이 유리한 기준': '월 110달러 미만' },
          { '월 모델 지출': '10,000달러', 'OpenRouter 수수료(약 5.5%)': '약 550달러/월(약 6,600달러/년)', 'LiteLLM 라이선스 비용': '0달러', '셀프 호스팅이 유리한 기준': '월 550달러 미만' },
        ],
        callouts: [
          {
            type: 'info',
            text: '수수료는 구매한 크레딧에 부과되며 요청 건마다 붙지 않습니다. 별도의 5% BYOK 수수료도 BYOK로 라우팅된 월 지출이 25,000달러(종량제) 또는 200,000달러(엔터프라이즈)를 넘어야 시작됩니다. 그 한도 안에서는 BYOK에 추가 비용이 없습니다.',
          },
        ],
        note: '월 모델 지출이 충분히 커서 5% 이상의 가산이 절대 금액으로 유의미하다면 LiteLLM을 쓰십시오. 그 수수료가 프록시 운영에 드는 엔지니어링 시간보다 저렴하다면 OpenRouter를 쓰십시오. 같은 계산을 하드웨어에 적용한 내용은 [로컬 LLM 비용 계산기](/ko/local-llms/local-llm-cost-calculator-build-vs-rent-2026)에 있습니다.',
      },
      portkeyAcquisition: {
        id: 'portkey-acquisition',
        title: 'Portkey의 소유권 변경이 이 결정에 중요한 이유',
        content: '**Portkey는 더 이상 독립 제품이 아닙니다. Palo Alto Networks가 2026년 5월 29일 인수를 완료했고 보안 플랫폼 Prisma AIRS에 통합하고 있습니다.** 이것은 단순한 명칭 변경이 아닙니다. 오늘 가벼운 도구로 도입한 게이트웨이가 제품 주기 한 번 안에 가격이 재조정되거나 범위가 바뀌거나 더 큰 보안 제품군의 일부로만 판매될 수 있습니다.\n\n민첩한 스타트업 제품이라는 이유로 Portkey를 검토하고 있었다면 그 전제는 더 이상 성립하지 않습니다. 확정하기 전에 현행 조건을 Palo Alto Networks에 직접 확인하십시오. 인수된 제품은 통합 첫 6~12개월 사이에 가격, 요금제 구조, 지원 모델이 바뀌는 일이 흔합니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Palo Alto Networks는 2026년 5월 29일 Portkey 인수를 완료했으며, 이를 보안 플랫폼 Prisma AIRS 안의 AI 게이트웨이로 통합하고 있습니다.',
          },
        ],
        note: '어차피 구매할 AI 보안 거버넌스와 게이트웨이 라우팅을 묶고 싶다면 Portkey / Prisma AIRS를 쓰십시오. 대형 보안 기업의 로드맵으로부터 독립적인 것이 아키텍처상 중요하다면 피하십시오.',
      },
      failover: {
        id: 'failover',
        title: '각 게이트웨이는 장애 대응을 어떻게 처리합니까',
        content: '**세 제품 모두 공급자 장애 시 자동 전환을 지원하며, 차이는 그 정책을 누가 작성하는가에 있습니다.** LiteLLM과 Portkey는 장애 대응 체인과 부하 분산 규칙을 여러분이 통제하는 설정에서 정의할 수 있게 합니다. OpenRouter는 플랫폼 차원에서 처리합니다. 공급자에 오류가 나면 자동으로 동등한 모델로 넘길 수 있지만, 어느 모델로 넘길지에 대한 통제는 덜 정밀합니다.',
        items: [
          '**LiteLLM** — 자체 설정에서 정의하는 장애 대응 체인; 실패한 요청을 어느 대체 모델이 처리할지에 대해 가장 정밀한 통제 제공',
          '**Portkey / Prisma AIRS** — 전 요금제에서 자동 폴백과 부하 분산을 제공하며 플랫폼에서 설정',
          '**OpenRouter** — 플랫폼 차원의 공급자 자동 전환; 설정할 체인도 없고 어느 공급자가 넘겨받을지에 대한 보장도 없음',
        ],
        note: '실패한 요청을 어느 대체 모델이 처리할지에 엄격한 요건이 있는 팀 — 예컨대 EU 데이터 소재지 경계 안에 머물러야 하는 경우 — 에게는 세 제품 중 그 정책을 직접 작성할 수 있는 것은 LiteLLM의 셀프 호스팅 설정뿐입니다.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '누가 어떤 게이트웨이를 써야 합니까',
        content: '**인프라를 갖춘 개발자는 기본적으로 LiteLLM을, 운영 부담 없는 멀티모델 접근을 원하는 팀은 OpenRouter를, Palo Alto 스택 안에 있는 기업은 Prisma AIRS를 검토해야 합니다.** 그 이후는 팀 규모, 컴플라이언스 요건, 운영 부담에 대한 감내 수준이 결정합니다.',
        items: [
          '**여러 모델로 시제품을 만드는 1인 개발자와 소규모 스타트업** → OpenRouter. API 키 하나, 380개 이상의 모델, 돌볼 서버 없음. 사용량이 크고 비용에 매우 민감하다면 피하십시오. 수수료가 누적됩니다.',
          '**프로덕션에서 멀티모델 애플리케이션을 운영하는 플랫폼 팀** → 셀프 호스팅 LiteLLM. 무료이고 커뮤니티의 기본 선택이며, 라우팅과 데이터 소재지 통제권을 유지합니다. 서비스를 운영할 여력이 없다면 피하십시오.',
          '**이미 Palo Alto Networks 제품을 도입 중인 기업** → Prisma AIRS 안의 Portkey. 이제 거버넌스·보안 계층으로 제공되므로 1년 전과는 제안 내용이 다릅니다.',
          '**망 분리 배포가 필요한 규제 산업** → LiteLLM Enterprise가 명시적으로 지원합니다. Prisma AIRS의 현행 배포 옵션은 Palo Alto Networks에 직접 확인하십시오. 인수 후 통합은 단기적으로 제공 범위를 바꿉니다. [로컬 LLM의 엔터프라이즈 컴플라이언스](/ko/local-llms/enterprise-compliance-local-llms)도 참고하십시오.',
          '**단일 공급자를 낮은 사용량으로 호출하는 팀** → 게이트웨이 불필요. SDK를 직접 호출하고 두 번째 공급자를 추가할 때 다시 검토하십시오.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'EU, 일본, 중국의 LLM 게이트웨이',
        content: '게이트웨이가 어디서 동작하는지가 프롬프트의 행선지를 결정합니다. 그래서 세 주요 시장에서 게이트웨이 선택은 비용 문제가 아니라 컴플라이언스 결정이 됩니다.',
        subsections: [
          {
            title: '유럽연합',
            content: '호스팅형 게이트웨이는 프롬프트 내용을 자신이 선택한 공급자로 라우팅하며, 그 공급자가 유럽경제지역 밖에 있다면 GDPR 제44조에서 제49조에 따른 국외 이전에 해당할 수 있습니다. 셀프 호스팅 LiteLLM 인스턴스는 장애 대응 체인을 EU 리전 엔드포인트로만 고정하고 경계를 벗어난 내용을 정확히 기록할 수 있게 하며, 이는 제5조의 데이터 최소화 원칙을 감사에서 방어 가능하게 만드는 근거이기도 합니다. 유럽 감독기관은 이러한 라우팅 정책이 문서화되고 기술적으로 강제되기를 기대하며, 공급자의 자동 모델 대체에 맡기는 방식을 인정하지 않습니다.',
          },
          {
            title: '일본',
            content: '경제산업성(METI)의 AI 거버넌스 및 국가 AI 주권 프로그램은 일본 기업을 온프레미스 추론과 감사 가능한 데이터 경로로 이끌고 있습니다. 셀프 호스팅 게이트웨이는 이 방향과 정확히 맞습니다. LiteLLM은 Qwen2.5나 Llama 계열 가중치를 구동하는 국내 모델 서버 앞단에 서서 호스팅 공급자와 함께 운용될 수 있고, 규제 대상 트래픽을 일본 내 인프라에 유지하면서 개발자에게는 단일 API를 제공합니다. 공급자를 자동으로 대체하는 호스팅 전용 게이트웨이는 이 요건과 조화시키기가 더 어렵습니다.',
          },
          {
            title: '중국',
            content: '데이터보안법(数据安全法)과 국가인터넷정보판공실(CAC)의 국경 간 데이터 규정 아래에서는 프롬프트 내용을 해외 모델 공급자로 라우팅하는 것이 컴플라이언스 문제이며, 게이트웨이 자체가 문제인 것은 아닙니다. 중국 본토 사용자를 대상으로 하는 배포는 대개 국내 인프라에서 게이트웨이를 운영하고 Qwen2.5나 Baichuan 같은 규정 준수 국내 모델로만 라우팅합니다. 여기서 현실적인 선택지는 LiteLLM의 셀프 호스팅 프록시이며, 사용 가능한 공급자로 자동 전환하는 OpenRouter의 동작이야말로 CAC 규정이 허용하지 않는 바로 그 방식입니다.',
          },
        ],
        note: '특정 요청을 어느 공급자가 처리했는지 서면으로 밝혀야 하는 시장에서는 셀프 호스팅 게이트웨이를 쓰십시오. 여러분의 데이터에 국경 간 이전 제한이 적용되지 않는 시장에서는 호스팅형으로 충분합니다.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'LLM 게이트웨이 선택 시 흔한 실수',
        numberedItems: [
          {
            title: '세 도구에서 "게이트웨이"가 같은 뜻이라고 가정하는 것',
            whyItMatters: 'LiteLLM은 셀프 호스팅 프록시, OpenRouter는 호스팅 API, Portkey는 이제 보안 플랫폼의 일부입니다. 기능 목록을 비교하기 전에 각 공급사의 현행 제품 페이지를 읽으십시오. 동등하다고 가정해서는 안 됩니다.',
          },
          {
            title: '수수료를 계산하지 않고 대규모 프로덕션에 OpenRouter를 선택하는 것',
            whyItMatters: '월 모델 지출이 10,000달러라면 약 5.5%의 수수료는 월 약 550달러, 연 6,600달러입니다. 편의성만이 아니라 실제 지출로 이 계산을 해보십시오.',
          },
          {
            title: '두 번째 공급자가 프로덕션에 들어오기 전에 게이트웨이를 도입하는 것',
            whyItMatters: '게이트웨이의 핵심 가치는 장애 대응을 갖춘 다중 공급자 라우팅입니다. 공급자 하나에 모델 하나뿐이라면 추상화 계층과 새로운 장애 지점, 학습 곡선을 아무 대가 없이 더하는 셈입니다.',
          },
          {
            title: '2026년 5월 이전에 기록된 Portkey 가격을 인용하는 것',
            whyItMatters: 'Palo Alto 인수 이전의 가격 페이지와 블로그 글은 현행 Prisma AIRS 조건을 반영하지 못할 수 있습니다. 오래된 스크린샷을 근거로 구매를 결정하기 전에 공급사에 확인하십시오.',
          },
          {
            title: 'GitHub 스타를 기능 비교로 읽는 것',
            whyItMatters: 'LiteLLM의 약 5.75만 개 스타는 커뮤니티 신뢰와 2년 뒤에도 프로젝트가 관리될 가능성을 뜻하는 것이지, Portkey나 OpenRouter보다 기능이 많다는 뜻이 아닙니다. 채택 지표가 아니라 비교표를 보십시오.',
          },
        ],
      },
      skipThisIf: {
        id: 'skip-this-if',
        title: '게이트웨이 자체를 건너뛰어야 하는 경우',
        content: '**단일 LLM 공급자를 낮고 예측 가능한 사용량으로 호출하고 있으며 가까운 시일 내에 두 번째를 추가할 계획이 없다면, 세 제품 모두 제쳐 두십시오.** 게이트웨이는 운영 복잡도(셀프 호스팅)나 비율 수수료(호스팅형)를 더하는 대신, 아직 쓰지도 않는 다중 공급자 이점을 제공할 뿐입니다.\n\n공급자의 SDK를 직접 호출하고, 실제로 두 번째 모델이나 공급자를 추가하는 날 이 판단을 다시 하십시오. 한 단계 아래에도 같은 논리가 적용됩니다. 호스팅 API를 호출할지 자체를 아직 고민 중이라면 [로컬 LLM vs 클라우드 API](/ko/local-llms/local-llms-vs-cloud-apis)를 먼저 읽으십시오. 가장 저렴한 게이트웨이는 끝내 필요하지 않았던 게이트웨이입니다.',
        callouts: [
          {
            type: 'tip',
            text: '유용한 기준: 자신의 코드에 특정 공급자 전용 분기를 처음 쓰게 되는 순간이 게이트웨이를 도입할 때입니다. 그 조건문이야말로 게이트웨이가 없애기 위해 존재하는 접착 코드입니다.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LLM API 게이트웨이란 무엇입니까?',
            a: '여러 LLM 공급자를 호출하기 위한 일관된 단일 API를 애플리케이션에 제공하는 라우팅 계층이며, 대개 원래 API 위에 장애 대응, 비용 추적, 레이트 리밋을 더합니다. 여러분은 게이트웨이를 호출하고, 공급자별 형식과 인증은 게이트웨이가 처리합니다. 이 이점은 프로덕션에 공급자가 둘 이상일 때에만 실현됩니다.',
          },
          {
            q: 'LiteLLM은 정말 무료입니까?',
            a: '2026년 8월 기준 LiteLLM 자체 가격 페이지에 따르면 오픈소스 코어는 무료이자 셀프 호스팅이며 라이선스 비용이 없습니다. 어떤 사용량에서도 요청당 가산이 없습니다. Enterprise 요금제(SSO, SCIM, 전담 지원, 망 분리 배포)는 요청 규모에 맞춘 연간 맞춤 가격이며 30일 체험이 포함됩니다.',
          },
          {
            q: 'OpenRouter는 요청 건당 과금합니까?',
            a: '직접 과금하지는 않습니다. OpenRouter의 수수료는 계정 충전에 부과되며, Stripe 크레딧 구매 시 약 5.5%(최소 0.80달러), 암호화폐는 5%입니다. 별도의 5% BYOK 수수료는 BYOK로 라우팅된 월 지출이 종량제에서 25,000달러, 엔터프라이즈에서 200,000달러를 넘을 때에만 적용됩니다.',
          },
          {
            q: 'Portkey는 아직 독립 회사입니까?',
            a: '아닙니다. Palo Alto Networks 자체 보도자료에 따르면 이 회사는 2026년 5월 29일 Portkey 인수를 완료했으며, 이를 보안 플랫폼 Prisma AIRS의 핵심 AI 게이트웨이로 통합하고 있습니다. 2026년 5월 이전의 가격이나 로드맵 정보는 낡았을 수 있는 것으로 다루십시오.',
          },
          {
            q: '가장 많은 공급자를 지원하는 게이트웨이는 무엇입니까?',
            a: 'OpenRouter는 2026년 8월 기준 자체 사이트에 380개 이상의 모델을 게시하고 있습니다. LiteLLM 문서는 100개 이상의 공급자 연동을 설명하는데, 공급자 하나가 여러 모델을 제공하므로 단위가 다릅니다. Portkey의 게이트웨이 저장소는 이전에 1,600개 이상의 LLM을 표방했으나, 인수를 고려하면 다시 확인해야 할 수치입니다.',
          },
          {
            q: 'Portkey를 셀프 호스팅할 수 있습니까?',
            a: '인수 이전 가격 페이지에 따르면 Portkey/Prisma AIRS는 Enterprise 요금제에서 프라이빗 클라우드 배포를 제공했습니다. 인수 후 통합은 첫해에 배포 옵션을 자주 바꾸므로, 현행 셀프 호스팅 조건은 Palo Alto Networks에 직접 확인하십시오.',
          },
          {
            q: '세 곳 중 제휴 프로그램이 있는 곳이 있습니까?',
            a: '2026년 8월 기준 LiteLLM, Portkey, OpenRouter 어디에서도 공개되고 확인 가능한 제휴나 추천 프로그램을 찾지 못했습니다. 이 페이지의 모든 제품 링크는 PromptQuorum에 아무런 수익도 발생시키지 않는 일반 공개 링크입니다. 상황이 바뀌면 실제 프로그램 조건에 맞는 고지를 담아 이 페이지를 갱신하겠습니다.',
          },
          {
            q: '셀프 호스팅과 호스팅형 게이트웨이 중 무엇을 골라야 합니까?',
            a: '월 모델 지출의 5.5%를 상시 구동되는 작은 서비스의 운영 비용과 비교하십시오. 손익분기점 아래에서는 여러분의 시간까지 계산에 넣으면 OpenRouter가 더 저렴하고, 그 위에서는 셀프 호스팅 LiteLLM이 절대 금액에서 앞섭니다. 컴플라이언스 기준을 하나 더 더하십시오. 어느 공급자가 요청을 처리했는지 밝혀야 한다면 계산과 무관하게 셀프 호스팅입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '최종 결론',
        items: [
          '**LiteLLM을 쓰십시오, 만약** 셀프 호스팅이 가능하고 반복 비용 없이 라우팅을 완전히 통제하고 싶다면 — 다음 단계: 오픈소스 프록시를 배포하고 애플리케이션의 기본 URL을 그쪽으로 지정하십시오.',
          '**OpenRouter를 쓰십시오, 만약** 인프라 없이 오늘 바로 멀티모델 접근이 필요하다면 — 다음 단계: API 키를 만들고 계정을 충전하되 약 5.5%의 수수료를 예산에 반영하십시오.',
          '**Portkey / Prisma AIRS를 쓰십시오, 만약** 이미 Palo Alto Networks 보안 제품을 구매하거나 검토 중이고 게이트웨이 기능까지 함께 묶고 싶다면 — 다음 단계: Palo Alto Networks에 직접 연락해 인수 후 현행 조건을 다시 확인하십시오.',
          '**세 제품 모두 건너뛰십시오, 만약** 단일 공급자를 낮은 사용량으로 호출하고 가까운 시일 내 다중 공급자 계획이 없다면 — 다음 단계: 두 번째 공급자를 추가할 때 다시 검토하십시오.',
        ],
        note: '이 페이지의 제품 링크는 각 공급사의 자체 사이트로 연결됩니다. PromptQuorum은 LiteLLM, OpenRouter, Portkey / Palo Alto Networks와 어떠한 제휴 관계도 없으며 이 링크로 수익을 얻지 않습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        links: [
          { url: 'https://www.litellm.ai/pricing', title: 'LiteLLM 공식 가격 페이지', description: '오픈소스 및 Enterprise 요금제 상세. 공급사 제공 정보.' },
          { url: 'https://github.com/BerriAI/litellm', title: 'GitHub의 BerriAI/litellm', description: '저장소 스타·포크 수, 라이선스, 기능 설명.' },
          { url: 'https://openrouter.ai/docs/faq', title: 'OpenRouter 자주 묻는 질문', description: '크레딧 구매 수수료율과 BYOK 수수료 구간. 공급사 제공 정보.' },
          { url: 'https://openrouter.ai/docs/api-reference/limits', title: 'OpenRouter API 한도 문서', description: '무료 요금제의 레이트 리밋과 크레딧 기반 접근 규칙.' },
          { url: 'https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents', title: 'Palo Alto Networks의 Portkey 인수 완료', description: '인수 완료일과 Prisma AIRS 통합 계획.' },
          { url: 'https://github.com/portkey-ai/gateway', title: 'GitHub의 Portkey-AI/gateway', description: '오픈소스 게이트웨이 저장소와 공급자 수 주장.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '함께 읽기',
        items: [
          '[로컬 LLM에서 OpenAI 호환 API 실행하기](/ko/local-llms/local-llm-openai-compatible-api) — 게이트웨이가 앞에 놓이는 런타임',
          '[로컬 LLM vs 클라우드 API: 무엇을 호출할 것인가](/ko/local-llms/local-llms-vs-cloud-apis) — 게이트웨이를 고르기 전에 정할 문제',
          '[로컬 LLM 개발자 스택](/ko/local-llms/local-llm-developer-stack) — 도구 체인에서 게이트웨이의 위치',
          '[2026 클라우드 GPU 임대 비교](/ko/local-llms/cloud-gpu-rental-comparison-2026) — 호스팅 모델로 라우팅하는 대신 연산 자원을 빌리기',
          '[로컬 LLM 구축 vs 임대 비용 계산기](/ko/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 같은 계산을 하드웨어에 적용한 내용',
        ],
      },
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'LiteLLM vs OpenRouter vs Portkey: 최고의 LLM 게이트웨이 2026',
      description: 'LLM API 게이트웨이로서 LiteLLM, OpenRouter, Portkey/Prisma AIRS 비교: 실제 가격, 셀프 호스팅 옵션, 장애 대응 통제, 그리고 Portkey의 범주를 바꾼 Palo Alto 인수.',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      url: 'https://www.promptquorum.com/ko/local-llms/best-llm-api-gateway-2026',
      inLanguage: 'ko',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'LLM API 게이트웨이' },
        { '@type': 'Thing', name: '멀티모델 라우팅' },
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
      inLanguage: 'ko',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'LLM API 게이트웨이란 무엇입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '여러 LLM 공급자를 호출하기 위한 일관된 단일 API를 애플리케이션에 제공하고, 원래 API 위에 장애 대응·비용 추적·레이트 리밋을 더하는 라우팅 계층입니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'LiteLLM은 정말 무료입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2026년 8월 기준 공식 가격 페이지에 따르면 오픈소스 코어는 무료이자 셀프 호스팅이며, 라이선스 비용도 요청당 가산도 없습니다. Enterprise 요금제는 연간 맞춤 가격입니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'OpenRouter는 요청 건당 과금합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아닙니다. Stripe 크레딧 구매에 약 5.5%(최소 0.80달러) 또는 암호화폐 5%를 받으며, 5% BYOK 수수료는 BYOK 라우팅 월 지출이 종량제 25,000달러 또는 엔터프라이즈 200,000달러를 넘을 때에만 적용됩니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Portkey는 아직 독립 회사입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아닙니다. Palo Alto Networks가 2026년 5월 29일 인수를 완료했으며, Portkey를 보안 플랫폼 Prisma AIRS 안의 AI 게이트웨이로 통합하고 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '셀프 호스팅과 호스팅형 LLM 게이트웨이 중 무엇을 골라야 합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '월 모델 지출의 5.5%를 상시 구동되는 작은 서비스의 운영 비용과 비교하십시오. 손익분기점 위에서는 셀프 호스팅 LiteLLM이, 아래에서는 여러분의 시간까지 넣으면 OpenRouter가 유리합니다.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '최고의 LLM API 게이트웨이(2026년 8월)',
      inLanguage: 'ko',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LiteLLM', description: '종합 최적 — 무료 셀프 호스팅 오픈소스 프록시, 100개 이상의 공급자 API, 요청당 가산 없음' },
        { '@type': 'ListItem', position: 2, name: 'OpenRouter', description: '설정이 필요 없는 최적의 게이트웨이 — API 키 하나로 380개 이상의 모델, 충전액에 약 5.5% 수수료' },
        { '@type': 'ListItem', position: 3, name: 'Portkey (Prisma AIRS)', description: '엔터프라이즈 보안 구매 — Production 요금제 월 49달러, 현재 Palo Alto Networks Prisma AIRS의 일부' },
      ],
    },
  },
}
