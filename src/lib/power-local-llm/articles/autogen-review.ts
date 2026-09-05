import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// STATUS: EN-only draft. Not wired into slugs.ts / articles-barrel.ts / published.ts —
// do not publish until de/fr/ja/zh/es/pt/ar/ko blocks are added via the geo-translation
// skill, hero images are generated for all 9 locales, and this file passes
// npm run validate-translations + the risk-checker skill.
//
// TODO (needs a human/founder call, not a guess): AutoGen's current relationship to
// Microsoft Agent Framework and to the AG2 community fork is a genuine three-way split
// (Microsoft-controlled AutoGen in maintenance mode since October 2025 / Microsoft Agent
// Framework as the GA'd successor since 2026-04-02 / AG2, the community fork led by the
// original AutoGen authors after they left Microsoft). This draft states each precisely
// with sources, but the framing (how much weight to give AG2 vs. MAF as "the successor")
// is an editorial call worth a second look before publish.
export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/autogen-review-hero-en.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-05',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    educationalLevel: 'Advanced',
    audience: 'Developers and technical teams evaluating multi-agent orchestration frameworks for LLM applications',
    primaryTerm: 'AutoGen',
    title: 'AutoGen Review 2026: Features, Pricing, Alternatives',
    seoTitle: 'AutoGen Review 2026: Multi-Agent Framework Status & Pricing',
    intro: "AutoGen is an open-source, Python multi-agent framework originally built by Microsoft Research for LLM applications that coordinate multiple conversational agents — including agents that write and execute code. Since its August 2023 research paper, the project has split three ways: Microsoft's own AutoGen repository has been in maintenance mode since October 2025, its intended successor is the GA'd Microsoft Agent Framework, and a community-led fork called AG2 continues active development under the original authors after they left Microsoft.",
    metaDescription: "AutoGen is Microsoft Research's open-source multi-agent framework, now in maintenance mode. Verified history, the AG2 fork, Microsoft Agent Framework succession, code examples, and pricing.",
    readTime: '12 min read',
    targetKeywords: [
      'AutoGen review',
      'AutoGen vs AG2',
      'is AutoGen still maintained',
      'AutoGen Microsoft Agent Framework',
      'AutoGen multi-agent framework',
      'AutoGen pricing',
    ],
    leadAnswerBlock: "AutoGen is a free, open-source multi-agent framework originally created by Microsoft Research, now in maintenance mode as of October 2025 — Microsoft's own recommended successor is the Microsoft Agent Framework (GA April 2026), while a separate community fork called AG2, led by AutoGen's original authors, continues independent active development.",
    quickAnswerTop: {
      en: {
        question: 'Is AutoGen still maintained, and what replaced it?',
        answer: "Microsoft's own microsoft/autogen repository has been in maintenance mode since October 2025 — it receives bug and security fixes only, no new features, and Microsoft directs new users to the Microsoft Agent Framework instead. Separately, AutoGen's original creators left Microsoft in late 2024 and continue active, independent development under a community fork called AG2.",
        bullets: [
          'Origin: Microsoft Research, first described in an arXiv paper (August 2023) by lead authors Chi Wang and Qingyun Wu',
          'Microsoft placed the microsoft/autogen repository into community-managed maintenance mode in October 2025',
          'Microsoft Agent Framework (MAF), unifying AutoGen and Semantic Kernel, reached general availability on April 2, 2026 — Microsoft\'s stated successor',
          'AG2 (ag2.ai): a separate, actively developed community fork started in late 2024 by AutoGen\'s original authors after leaving Microsoft',
          'License: MIT for code, CC BY 4.0 for documentation, on the Microsoft repository; AG2 uses Apache 2.0 from v0.3 onward',
          'Over 60,000 GitHub stars on microsoft/autogen',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Who Built AutoGen?', anchor: 'who-built-autogen' },
      { label: 'What Is AutoGen?', anchor: 'what-is-autogen' },
      { label: 'AutoGen Pricing', anchor: 'autogen-pricing' },
      { label: 'How to Install AutoGen', anchor: 'how-to-install-autogen' },
      { label: 'Who Should Use AutoGen', anchor: 'who-should-use-autogen' },
      { label: 'When NOT to Use AutoGen', anchor: 'when-not-to-use-autogen' },
      { label: 'AutoGen vs. Alternatives', anchor: 'autogen-vs-alternatives' },
      { label: 'Common Mistakes', anchor: 'common-mistakes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR — AutoGen in 2026',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AutoGen is a free, open-source Python framework for multi-agent LLM applications, originally built by Microsoft Research and now in maintenance mode, with Microsoft directing new users to the Microsoft Agent Framework and a separate community fork (AG2) continuing independent development.' },
          { type: 'plain-terms', text: "AutoGen lets you define several LLM-powered agents — a coder, a critic, a user proxy that can run code — and have them talk to each other and to tools until a task is done, instead of writing one long single-agent prompt chain by hand." },
        ],
        items: [
          'Originated at Microsoft Research; first described in an arXiv paper published August 2023, with Chi Wang and Qingyun Wu as lead authors',
          'The v0.4 release was a full architectural rewrite (Core, AgentChat, and Extensions layers) replacing the original v0.2 design',
          'Microsoft placed microsoft/autogen into community-managed maintenance mode in October 2025 — bug and security fixes only, no new features',
          'Microsoft Agent Framework (MAF) reached general availability on April 2, 2026, converging AutoGen and Semantic Kernel into one supported platform — this is Microsoft\'s stated successor',
          "AG2 (ag2.ai): a separate, actively developed fork started in late 2024 by AutoGen's original authors after leaving Microsoft; it inherited the `autogen`/`pyautogen` PyPI package names and moved to the Apache 2.0 license from v0.3 onward",
          'Free and open-source under the MIT license (code) on the Microsoft repository — there is no separate paid product bolted on, unlike LangChain/LangSmith',
          'Over 60,000 GitHub stars on the microsoft/autogen repository',
        ],
        callouts: [
          { type: 'note', text: 'AutoGen is a framework you write Python against, not a downloadable app. Because the project has split into three distinct efforts since 2024 — Microsoft\'s maintenance-mode AutoGen, the Microsoft Agent Framework, and the community-led AG2 fork — this review is scoped specifically to the original, Microsoft-controlled microsoft/autogen project and states clearly where each successor diverges.' },
        ],
      },
      history: {
        id: 'who-built-autogen',
        title: 'Who Built AutoGen, and What Happened to It?',
        content: [
          "**AutoGen originated at Microsoft Research and was first described in an arXiv paper published in August 2023, with Qingyun Wu and Chi Wang as lead authors** — work that also involved researchers at Penn State University and the University of Washington. The framework introduced a conversation-driven pattern for multi-agent LLM applications: agents (a coder, a critic, a user proxy that can execute code) exchange messages until a task converges.",
          "In September–November 2024, Chi Wang and Qingyun Wu left Microsoft and founded AG2AI, forking the codebase into a new project called AG2 — citing a desire to develop faster outside a single company's roadmap and to build a vendor-neutral home for contributions. AG2 inherited the original `autogen` and `pyautogen` PyPI package names and the project's Discord community, and moved to the Apache 2.0 license starting with its v0.3 release; it remains under active, independent development in 2026, working toward a 1.0 release.",
          "Microsoft, meanwhile, continued developing the `microsoft/autogen` repository under its own roadmap, shipping the v0.4 architectural rewrite (splitting the framework into Core, AgentChat, and Extensions layers) before placing the project into community-managed maintenance mode in October 2025 — no new features, bug and security fixes only. Microsoft's stated successor is the Microsoft Agent Framework (MAF), announced as a convergence of AutoGen and Semantic Kernel and reaching general availability on April 2, 2026.",
        ],
        itemHeadings: true,
        rows: [
          { 'Milestone': 'Research paper', 'Date': '2023-08', 'What it means': 'Qingyun Wu and Chi Wang publish the AutoGen arXiv paper describing the multi-agent conversation framework' },
          { 'Milestone': 'v0.4 rewrite', 'Date': '2024', 'What it means': 'Full architectural rewrite into Core, AgentChat, and Extensions layers, replacing the original v0.2 API' },
          { 'Milestone': 'AG2 fork founded', 'Date': '2024-09/11', 'What it means': "Original authors leave Microsoft, found AG2AI, fork the project as AG2 under Apache 2.0" },
          { 'Milestone': 'AutoGen maintenance mode', 'Date': '2025-10', 'What it means': "Microsoft's microsoft/autogen moves to community-managed maintenance: bug/security fixes only" },
          { 'Milestone': 'Microsoft Agent Framework GA', 'Date': '2026-04-02', 'What it means': 'MAF reaches general availability, positioned by Microsoft as the successor to both AutoGen and Semantic Kernel' },
        ],
        columns: ['Milestone', 'Date', 'What it means'],
        callouts: [
          { type: 'note', text: "AutoGen (Microsoft's repository), AG2 (the community fork), and Microsoft Agent Framework are three distinct, currently-existing projects with a shared ancestry — not renames of the same thing. Confirm which one a tutorial or package refers to before following it, since `pip install autogen` historically pointed at different packages depending on the moment in this history." },
        ],
      },
      overview: {
        id: 'what-is-autogen',
        title: 'What Is AutoGen?',
        content: "AutoGen (the Microsoft-controlled `microsoft/autogen` repository) is an open-source Python framework for building applications where multiple LLM-powered agents converse with each other, use tools, and — distinctively — execute code, to complete a task collaboratively rather than through a single linear prompt chain.",
        items: [
          'AgentChat: the high-level API for defining agents with roles (assistant, user proxy, critic) and running multi-agent conversations or group chats',
          'Core: the lower-level, event-driven runtime AgentChat is built on, for teams that need custom orchestration logic',
          'Code-execution agents: a signature AutoGen pattern — an agent can write Python code, hand it to a code-executor agent (commonly sandboxed in Docker), and use the output to continue the conversation',
          'Group chat orchestration: multiple agents participate in a shared conversation with a manager agent deciding turn order, useful for tasks needing several specialist roles (e.g., planner, coder, reviewer)',
          'Extensions: first- and third-party integrations for model providers, tools, and memory beyond the Core/AgentChat layers',
        ],
        codeBlock: 'from autogen_agentchat.agents import AssistantAgent\nfrom autogen_agentchat.teams import RoundRobinGroupChat\nfrom autogen_agentchat.conditions import TextMentionTermination\nfrom autogen_ext.models.openai import OpenAIChatCompletionClient\n\nmodel_client = OpenAIChatCompletionClient(model="gpt-4o-mini")\nassistant = AssistantAgent("assistant", model_client=model_client)\ncritic = AssistantAgent(\n    "critic",\n    model_client=model_client,\n    system_message="Review the answer and reply APPROVE if correct.",\n)\n\nteam = RoundRobinGroupChat(\n    [assistant, critic],\n    termination_condition=TextMentionTermination("APPROVE"),\n)\n\nawait team.run(task="Summarize what AutoGen does in one sentence.")',
        codeLanguage: 'python',
        subsections: [
          {
            title: 'Code-execution agents',
            content: 'A `CodeExecutorAgent` runs code blocks that another agent writes — commonly sandboxed in a Docker container via `DockerCommandLineCodeExecutor` — and returns the output to the conversation, letting an agent team iteratively debug and re-run code until a task succeeds.',
          },
        ],
        note: "See the [official AutoGen documentation](https://microsoft.github.io/autogen/) for the current, runnable version of this example and the full list of supported model providers. Because AutoGen is in maintenance mode, Microsoft's own docs now lead with a migration guide toward the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) rather than new AutoGen features.",
      },
      pricing: {
        id: 'autogen-pricing',
        title: 'How Much Does AutoGen Cost?',
        content: "**AutoGen itself is completely free — there is no paid tier, no hosted product, and no separate observability add-on bolted on by Microsoft**, unlike LangChain's paid LangSmith. Model API costs (OpenAI, Anthropic, Azure OpenAI, or a self-hosted model) are the only real cost, and those are billed by whichever model provider you connect.",
        items: [
          'AutoGen (the framework): free forever under the MIT license (code) / CC BY 4.0 (documentation), for any use including commercial products',
          'No AutoGen-branded paid tier, hosted service, or enterprise SKU exists as of this review — Microsoft\'s commercial agent offering going forward is the Microsoft Agent Framework, which is itself open source, with paid cost coming from whichever Azure services you choose to attach (e.g., Azure AI Foundry hosting)',
          'AG2, the community fork, is likewise free under the Apache 2.0 license, with commercial support offered separately by AG2AI rather than bundled into the framework',
          'Model API usage is billed by the model provider you connect (OpenAI, Anthropic, Azure OpenAI, or your own self-hosted model), not by AutoGen',
        ],
        columns: ['Component', 'Price', 'Notes'],
        rows: [
          { 'Component': 'AutoGen framework', 'Price': 'Free (MIT/CC BY 4.0)', 'Notes': 'No usage caps, self-hostable' },
          { 'Component': 'AG2 fork', 'Price': 'Free (Apache 2.0)', 'Notes': 'Independent community project' },
          { 'Component': 'Microsoft Agent Framework', 'Price': 'Free (open source)', 'Notes': 'Attach paid Azure services separately if desired' },
          { 'Component': 'Model API calls', 'Price': 'Billed by provider', 'Notes': 'Not part of AutoGen pricing' },
        ],
        note: "Verified against the [microsoft/autogen GitHub repository](https://github.com/microsoft/autogen) and [Microsoft Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/) as of September 2026 — check the live sources before budgeting, since Microsoft's agent product lineup has changed twice within the past year.",
      },
      setupGuide: {
        id: 'how-to-install-autogen',
        title: 'How Do You Install and Get Started With AutoGen?',
        content: "**Installing AutoGen takes one pip command — no account or license key required.** Because the project is in maintenance mode, evaluate whether the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) or [AG2](https://github.com/ag2ai/ag2) is a better starting point for a new project before committing to AutoGen itself.",
        numberedItems: [
          'Install the AgentChat package and a model extension: `pip install -U "autogen-agentchat" "autogen-ext[openai]"` (requires Python 3.10+).',
          "Set your model provider's API key as an environment variable (for example `OPENAI_API_KEY`) — AutoGen does not provide or proxy model access itself.",
          'Define one or more `AssistantAgent` instances with a model client, and combine them into a team (e.g., `RoundRobinGroupChat`) with a termination condition.',
          'For code-execution workflows, add a `CodeExecutorAgent` backed by a sandboxed executor (Docker is the documented default) so generated code runs in isolation, not on the host machine.',
          'Read the [official AutoGen documentation](https://microsoft.github.io/autogen/) for the current API reference, and review the migration guide if starting a new project, since Microsoft now points new users toward the Microsoft Agent Framework.',
        ],
        faqs: [
          { q: 'Do I need an OpenAI or Azure account to use AutoGen?', a: "You need an account and API key with whichever model provider you choose to call — AutoGen itself does not host or resell model access. It supports OpenAI, Azure OpenAI, and other providers through its Extensions package, plus self-hosted models via compatible local API servers." },
          { q: 'Is AutoGen safe to run code-execution agents with?', a: "Only when the code executor is sandboxed. AutoGen's documented default is a Docker-based executor (DockerCommandLineCodeExecutor); running generated code directly on the host machine without a sandbox is explicitly discouraged in the official docs." },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use-autogen',
        title: 'Who Should Use AutoGen?',
        content: "**AutoGen fits teams that specifically want the conversation-driven, code-execution multi-agent pattern it pioneered, and who are comfortable building on a project Microsoft has placed in maintenance mode.** Most new projects should compare it against its two active successors first.",
        subsections: [
          {
            title: 'Use AutoGen if',
            list: [
              'You are maintaining or extending an existing AutoGen-based application and a migration to Microsoft Agent Framework or AG2 is not yet justified',
              'You specifically need the group-chat, multiple-specialist-agent conversation pattern AutoGen popularized, with code-execution agents as a first-class citizen',
              'You want a framework with no vendor lock-in to a paid observability or hosting product — AutoGen has never bundled one',
              'You are evaluating the AutoGen research paper\'s ideas academically, where the original framework (rather than its successors) is the relevant reference implementation',
            ],
          },
          {
            title: 'Avoid AutoGen if',
            list: [
              'You are starting a new production project — Microsoft itself recommends new users start with the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) instead, since AutoGen receives no new features',
              'You want active, fast-moving open-source development from the framework\'s original authors — that continues at [AG2](https://github.com/ag2ai/ag2), not at microsoft/autogen',
              'You need enterprise support, long-term API stability guarantees, or Azure-native hosting — Microsoft Agent Framework is the supported path for that, not maintenance-mode AutoGen',
              'You need a role-based, opinionated "crew" abstraction rather than free-form agent conversation — CrewAI is built specifically around that pattern',
            ],
          },
        ],
      },
      whenNotToUse: {
        id: 'when-not-to-use-autogen',
        title: 'When Should You NOT Use AutoGen?',
        content: "**Skip AutoGen for any new production project as of this review — it is in maintenance mode, and both Microsoft and the original authors have moved active development elsewhere.** A few concrete situations where a different tool wins.",
        items: [
          "A new project with no existing AutoGen code — start with the Microsoft Agent Framework (Microsoft's stated successor) or AG2 (the actively developed community fork) instead",
          'A team that needs Microsoft enterprise support commitments or long-term API stability guarantees on a Microsoft-maintained product — Microsoft Agent Framework carries those, AutoGen does not',
          "A team that wants fast-moving open-source feature development — that happens at AG2 now, led by AutoGen's original authors, not at microsoft/autogen",
          'A project that wants a structured, role-based agent abstraction out of the box rather than assembling conversation patterns manually — CrewAI or [LangGraph](/power-local-llm/langchain-review) fit that better',
          'Use AutoGen only when you are maintaining an existing AutoGen application and a migration has not yet been scoped',
        ],
        note: "This is not a criticism of AutoGen's original design — the conversation-driven, code-execution multi-agent pattern it introduced influenced the whole category. It reflects Microsoft's own October 2025 maintenance-mode announcement and its explicit redirection of new users to the Microsoft Agent Framework, not an editorial judgment about code quality.",
      },
      comparisonTable: {
        id: 'autogen-vs-alternatives',
        title: 'AutoGen vs. Alternatives',
        content: 'AutoGen shares ancestry with two active successors and competes with other multi-agent frameworks, each with a different orchestration philosophy.',
        columns: ['Tool', 'Interface', 'License', 'Backing', 'Best For'],
        rows: [
          { 'Tool': '[AutoGen](https://microsoft.github.io/autogen/)', 'Interface': 'Python code', 'License': 'MIT / CC BY 4.0', 'Backing': 'Microsoft (maintenance mode)', 'Best For': 'Existing AutoGen apps only' },
          { 'Tool': '[AG2](https://github.com/ag2ai/ag2)', 'Interface': 'Python code', 'License': 'Apache 2.0', 'Backing': 'AG2AI (community, original authors)', 'Best For': 'Active fork of the same pattern' },
          { 'Tool': '[Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/)', 'Interface': 'Python / .NET', 'License': 'MIT (open source)', 'Backing': 'Microsoft', 'Best For': 'New Microsoft-ecosystem projects' },
          { 'Tool': '[LangChain / LangGraph](/power-local-llm/langchain-review)', 'Interface': 'Python / JS code', 'License': 'MIT', 'Backing': 'LangChain Inc. (VC-backed)', 'Best For': 'General-purpose LLM apps & agents' },
          { 'Tool': 'CrewAI', 'Interface': 'Python code', 'License': 'MIT (core)', 'Backing': 'CrewAI Inc. (VC-backed)', 'Best For': 'Role-based multi-agent crews' },
          { 'Tool': 'OpenAI Agents SDK', 'Interface': 'Python code', 'License': 'MIT', 'Backing': 'OpenAI', 'Best For': 'OpenAI-model-first agent apps' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Evaluating AutoGen',
        content: 'These mistakes come from conflating AutoGen with its successors, or missing the maintenance-mode status entirely.',
        subsections: [
          {
            title: 'Mistake 1: Assuming AutoGen, AG2, and Microsoft Agent Framework are the same project under different names',
            content: 'They share ancestry but are three separately maintained codebases with different governance and different licenses (MIT/CC BY 4.0 for AutoGen, Apache 2.0 for AG2, MIT for Microsoft Agent Framework). A tutorial or package written for one does not necessarily apply to the others.',
          },
          {
            title: "Mistake 2: Starting a new project on microsoft/autogen without checking its status",
            content: "Microsoft placed the repository into community-managed maintenance mode in October 2025: bug and security fixes only, no new features. New projects should evaluate the Microsoft Agent Framework or AG2 first, per Microsoft's own migration guidance.",
          },
          {
            title: "Mistake 3: Assuming AutoGen has a paid tier like LangChain's LangSmith",
            content: "AutoGen has never bundled a paid observability or hosting product. Any cost comes from the model API you connect (OpenAI, Azure OpenAI, or similar) or from Azure services you separately choose to attach when using the Microsoft Agent Framework.",
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is AutoGen free to use?', a: 'Yes. The microsoft/autogen framework is open-source under the MIT license (code) and CC BY 4.0 (documentation), free for any use including commercial products, with no usage limits. There is no paid AutoGen tier.' },
          { q: 'Who created AutoGen?', a: 'AutoGen originated at Microsoft Research, first described in an arXiv paper published in August 2023 with Qingyun Wu and Chi Wang as lead authors, alongside researchers at Penn State University and the University of Washington.' },
          { q: 'Is AutoGen still maintained?', a: "Microsoft's microsoft/autogen repository has been in community-managed maintenance mode since October 2025 — it receives bug and security fixes but no new features. Microsoft's stated successor is the Microsoft Agent Framework." },
          { q: 'What is AG2, and how is it different from AutoGen?', a: "AG2 is a separate, actively developed community fork of AutoGen, started in late 2024 by AutoGen's original authors (Chi Wang and Qingyun Wu) after they left Microsoft. It uses the Apache 2.0 license from v0.3 onward and inherited the original `autogen`/`pyautogen` PyPI package names." },
          { q: 'What is the Microsoft Agent Framework, and does it replace AutoGen?', a: "The Microsoft Agent Framework (MAF) is Microsoft's stated successor to both AutoGen and Semantic Kernel, converging the two into one supported, open-source platform. It reached general availability on April 2, 2026." },
          { q: 'How much does AutoGen cost?', a: 'AutoGen itself is free under the MIT license, with no separate paid tier or hosted product. The only real cost is the model API you connect it to (OpenAI, Azure OpenAI, or a self-hosted model), billed by that provider.' },
          { q: 'How many GitHub stars does AutoGen have?', a: 'The microsoft/autogen repository has passed 60,000 GitHub stars.' },
          { q: 'Can I run AutoGen with local, self-hosted models instead of a cloud API?', a: "Yes, through AutoGen's Extensions package and any OpenAI-API-compatible local model server, though official first-party support and testing focuses primarily on OpenAI and Azure OpenAI." },
          { q: 'Should I start a new project on AutoGen, AG2, or the Microsoft Agent Framework?', a: "For a new project, evaluate the Microsoft Agent Framework (Microsoft's supported successor) or AG2 (the actively developed community fork) rather than microsoft/autogen, which receives no new features. Choose based on whether you need Microsoft's enterprise support path (Agent Framework) or an independently governed open-source project (AG2)." },
          { q: 'Is AutoGen better than CrewAI?', a: "They target different patterns. AutoGen (and its successors) favor free-form, conversation-driven multi-agent orchestration with code execution; CrewAI provides a more structured, role-based 'crew' abstraction with defined tasks. Which fits better depends on how much structure your workflow needs." },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://github.com/microsoft/autogen', title: 'microsoft/autogen on GitHub', description: 'The source repository, license files (LICENSE, LICENSE-CODE), README maintenance-mode notice, and migration guidance.' },
          { url: 'https://microsoft.github.io/autogen/', title: 'AutoGen Documentation', description: 'Official docs covering installation, AgentChat, Core, and code-execution agents.' },
          { url: 'https://arxiv.org/abs/2308.08155', title: 'AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework', description: 'The original August 2023 research paper by Qingyun Wu, Chi Wang, and co-authors.' },
          { url: 'https://learn.microsoft.com/en-us/agent-framework/', title: 'Microsoft Agent Framework Documentation', description: "Microsoft's documentation for the successor platform converging AutoGen and Semantic Kernel." },
          { url: 'https://github.com/ag2ai/ag2', title: 'ag2ai/ag2 on GitHub', description: "The community fork's source repository, license (Apache 2.0), and release history." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LangChain Review: Features, Pricing, Alternatives](/power-local-llm/langchain-review) — the general-purpose framework most often compared against AutoGen, including its LangGraph agent runtime.',
          '[Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — the full catalog of local AI tools this article belongs to, including where multi-agent frameworks fit.',
        ],
      },
    },
  },
}
