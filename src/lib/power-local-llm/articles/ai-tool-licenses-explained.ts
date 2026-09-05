// Power Local LLM — AI & Open-Source Software Licenses Explained
// Slug: ai-tool-licenses-explained
// Evergreen reference/taxonomy article: explains license FAMILIES (permissive, copyleft,
// AGPL/network copyleft, source-available/fair-code, proprietary, AI-model-specific) —
// not a tool-by-tool license lookup table. Companion piece to the many power-local-llm
// tool reviews that name a license (MIT, Apache-2.0, AGPL-3.0, "Free (closed)", etc.)
// without ever explaining what it means — see local-llm-software-directory-2026.ts's
// License column and dify-ai-workflow-builder-review.ts for examples of the gap this fills.
// All 9 locales authored (en/de/fr/ja/zh/es/pt/ar/ko).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'AI & Open-Source Software Licenses Explained: MIT vs Apache vs GPL vs AGPL vs Proprietary',
    seoTitle: 'AI & Open-Source Licenses Explained (MIT, GPL, AGPL)',
    intro:
      'Every local-LLM tool, RAG framework, and AI coding assistant reviewed on this site ships under a license — MIT, Apache-2.0, AGPL-3.0, a source-available license, or a closed "free" desktop app — and that license decides more about whether you can actually use the tool than any feature comparison does. This guide explains the license families you will encounter across open-source software and AI models: what each one permits and requires, where it came from, who it is built for, and the specific things to check before you deploy a tool under it, whether that is a hobby project, a startup product, an internal enterprise system, or a client deployment you plan to resell. It is a taxonomy, not a lookup table — it will not tell you which license a specific reviewed tool uses (see the individual review or the [software directory](/power-local-llm/local-llm-software-directory) for that), but it explains what that license actually means once you know it.',
    metaDescription:
      'Open-source and AI-tool license types explained: permissive, copyleft, AGPL, source-available, and AI-model licenses — what to check before deploying any tool.',
    twitterDescription:
      'MIT, Apache-2.0, GPL, AGPL, source-available, and AI-model licenses explained in plain terms — what each requires, who it suits, and what to check before you deploy.',
    audience:
      'Developers, startup founders, and technical decision-makers choosing which open-source or AI-tool license fits their project, product, or deployment.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'open-source software license types',
    targetKeywords: [
      'open source license types explained',
      'MIT vs Apache vs GPL license',
      'what is AGPL license',
      'source-available license explained',
      'AI model license open weights',
    ],
    leadAnswerBlock:
      '**Open-source and AI-tool licenses fall into five practical families — permissive (MIT, Apache-2.0, BSD), copyleft (GPL, LGPL), network copyleft (AGPL-3.0), source-available (BSL, SSPL), and proprietary/closed-free — plus a separate set of AI-model-specific licenses (RAIL, open-weight community licenses) with their own usage restrictions.** Which one matters to you depends on whether you are a hobbyist, a startup shipping a commercial product, or an enterprise embedding a tool internally — not on which license is "better."',
    quickAnswerTop: {
      en: {
        question: 'What is the difference between MIT, Apache-2.0, GPL, and AGPL licenses?',
        answer:
          'MIT and Apache-2.0 are permissive — you can use, modify, and resell the code with almost no obligations beyond keeping the license notice. GPL is copyleft — if you distribute a modified version, you must release your modifications under the same license. AGPL-3.0 extends that obligation to software you only run as a network service, closing the gap GPL leaves open for SaaS. Proprietary and source-available licenses (BSL, SSPL) sit outside the open-source definition entirely and restrict specific commercial uses, most often competing with the license holder\'s own hosted product.',
        bullets: [
          'MIT and Apache-2.0 (permissive): use, modify, resell freely — only obligation is keeping the license/copyright notice',
          'GPL and LGPL (copyleft): distributing a modified version requires releasing your changes under the same license',
          'AGPL-3.0 (network copyleft): the same obligation applies even if you only run the software as a hosted service, not distribute it',
          'BSL/SSPL (source-available): source is visible but usage is restricted — typically not OSI-approved "open source" despite the marketing',
          'AI model licenses (RAIL, open-weight community licenses) often add acceptable-use and field-of-use restrictions beyond a standard code license',
          'Always read the actual LICENSE file in the repository, not a landing page claim, before you build on a tool',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Permissive Licenses: MIT, Apache-2.0, BSD', anchor: '#permissive-licenses' },
      { label: 'Copyleft: The GPL and LGPL Family', anchor: '#copyleft-gpl' },
      { label: 'How AGPL-3.0 Closes the SaaS Loophole', anchor: '#agpl-saas-loophole' },
      { label: 'Source-Available & "Fair-Code" Licenses', anchor: '#source-available-fair-code' },
      { label: 'Proprietary & Freemium "Free" Licenses', anchor: '#proprietary-freemium' },
      { label: 'AI Model Licenses: RAIL & Open Weights', anchor: '#ai-model-licenses' },
      { label: 'Who Should Care About Which License?', anchor: '#who-should-care' },
      { label: 'Pre-Adoption License Checklist', anchor: '#pre-adoption-checklist' },
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
          '**License families group into five practical buckets: permissive, copyleft, network copyleft, source-available, and proprietary/closed — plus a separate set of AI-model-specific licenses.** Knowing which bucket a tool sits in tells you more about whether you can use it than any feature list does.',
          '**Permissive licenses (MIT, Apache-2.0, BSD) impose almost no obligations.** You can embed the code in a closed commercial product and never publish your own source.',
          '**Copyleft licenses (GPL, LGPL) are "viral" in a specific, narrow sense.** Distributing a modified version of the covered code requires releasing your changes under the same license — the obligation does not reach into unrelated software you merely run alongside it.',
          '**AGPL-3.0 closes the loophole GPL leaves open for hosted services.** If you modify AGPL-licensed code and only offer it over a network (SaaS), you still must publish your modified source, which GPL alone does not require.',
          '**Source-available licenses like BSL and SSPL are not OSI-approved open source, no matter what a landing page calls them.** They restrict specific commercial uses, usually to stop a cloud provider from reselling the project as a competing hosted service.',
          '**The license file in the repository is the only reliable source — not a pricing page, README badge, or marketing claim.** This guide is general information, not legal advice; consult counsel for a deployment where license terms materially affect your business.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-source and AI-tool licenses split into five practical families — permissive, copyleft, network copyleft (AGPL), source-available, and proprietary — each imposing different obligations on how you can use, modify, and redistribute the software.',
          },
          {
            type: 'plain-terms',
            text: 'A software license is the rulebook for what you are allowed to do with someone else\'s code. Permissive licenses let you do almost anything; copyleft licenses require you to share your changes back; source-available licenses let you look at the code but restrict how you can use it commercially.',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**MIT** is the shortest and most common permissive license — roughly 170 words, no patent clause.',
          '**Apache-2.0** adds an explicit patent grant that MIT does not have, which is why many companies prefer it for corporate-authored projects.',
          '**GPL** requires source disclosure only when you distribute the software; AGPL-3.0 extends that requirement to running it as a network service.',
          '**OSI-approved "open source"** is a specific certification from the Open Source Initiative; "source-available" and "fair-code" are marketing terms for licenses that do not meet that definition.',
          '**AI model licenses are a separate category from code licenses.** A tool\'s code can be Apache-2.0 while the model weights it downloads carry entirely different, more restrictive terms.',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: 'What Are Permissive Licenses? MIT, Apache-2.0, and BSD',
        content:
          '**Permissive licenses let you use, modify, and redistribute code — including inside a closed commercial product — with almost no obligations beyond preserving the copyright notice.** They are the least restrictive license family and the default choice for infrastructure projects that want the widest possible adoption, including by companies that will never publish a line of their own code.',
        items: [
          '**MIT License** originated at the Massachusetts Institute of Technology as a way to release university-authored software with minimal restriction. It is roughly 170 words, grants near-unlimited rights, and asks only that the original copyright and license text stay attached to any copy or substantial portion you redistribute.',
          '**Apache License 2.0** comes from the Apache Software Foundation, formed to give corporate and community contributors a shared legal framework for large collaborative projects. Unlike MIT, it includes an explicit patent grant — contributors license their patent claims covering the code to users — which is why many companies with patent portfolios prefer it.',
          '**BSD licenses** (2-clause and 3-clause) originated at the University of California, Berkeley, for the Berkeley Software Distribution operating system. The 3-clause variant adds a non-endorsement clause preventing you from using the original authors\' names to promote a derived product without permission.',
          '**Practical effect for adopters:** you can fork, modify, embed, and sell a permissively licensed tool as part of a closed product and never release your own source code — the only real risk is dropping the required copyright/license notice from your distribution.',
          '**Real examples from this site\'s reviews:** Ollama and llama.cpp both ship under MIT; vLLM ships under Apache-2.0 — all three can be embedded in a commercial product without triggering any source-disclosure obligation.',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: 'What Is Copyleft? The GPL and LGPL Family',
        content:
          '**Copyleft licenses require that if you distribute a modified version of the covered code, you release your modifications under the same license.** The obligation attaches to the code itself, not to every program that happens to run alongside it — the common "viral license" framing overstates how far the obligation actually reaches.',
        items: [
          '**The GNU General Public License (GPL)** was written by Richard Stallman and the Free Software Foundation as the license for the GNU Project, built on the idea that software freedom should be preserved forward — anyone who receives a modified copy should have the same rights the original author had.',
          '**GPL v2 and GPL v3** differ mainly in patent language and compatibility provisions; v3 added explicit patent-retaliation and anti-tivoization clauses (preventing hardware that blocks you from running modified software you are legally entitled to run).',
          '**The GNU Lesser General Public License (LGPL)** relaxes GPL for libraries specifically — you can link an LGPL library into a proprietary application without open-sourcing the application itself, as long as the library component stays swappable and its own source stays available.',
          '**What actually triggers the obligation:** distributing a modified copy of the GPL-covered code. Merely using unmodified GPL software internally, or running proprietary software on a GPL-licensed operating system, does not by itself pull your own code under GPL.',
          '**Who should be cautious:** a startup planning to fork and modify a GPL tool as the core of a commercial product needs a plan for either open-sourcing those modifications or avoiding the fork; a company merely running an unmodified GPL tool internally faces no such obligation.',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'How AGPL-3.0 Closes the SaaS Loophole',
        content:
          '**The GNU Affero General Public License (AGPL-3.0) adds one requirement GPL does not have: if you modify AGPL-covered code and make it available to users over a network, you must offer those users the modified source, even if you never physically distribute a copy of the software.** This is the license family\'s defining feature and the one most likely to surprise a team that assumes "we never distribute it, we only host it" is a safe reading.',
        items: [
          '**The gap it closes:** under plain GPL, running a modified version of the software as a hosted web service is not "distribution" in the legal sense the license triggers — a company could take GPL code, modify it, offer it only as a SaaS product, and never have to release the modifications. This became known informally as the "ASP loophole" (application service provider) or "SaaS loophole."',
          '**AGPL-3.0 was written specifically to close that gap** by adding a network-interaction clause: offering the modified software\'s functionality to users over a network counts as triggering the same source-availability obligation that distributing a physical copy would.',
          '**Why it matters for hosting and reselling:** an agency or hosting provider that takes an AGPL-licensed tool, modifies it, and offers it to clients as a hosted service must make the modified source available to those users — running it unmodified carries no such obligation.',
          '**Real examples from this site\'s reviews:** Jan, KoboldCpp, SillyTavern, and text-generation-webui ship under AGPL-3.0 — fine to self-host unmodified for personal or internal use; a materially different question the moment you modify one and resell hosted access to it.',
          '**This is general information about how the license mechanism works, not legal advice** — whether a specific deployment counts as "offering it over a network" under AGPL-3.0\'s exact wording is a question for counsel reviewing your specific architecture.',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: 'What Are Source-Available and "Fair-Code" Licenses?',
        content:
          '**Source-available licenses let anyone read the code but restrict specific commercial uses, most commonly offering the software as a competing hosted service.** They are frequently marketed as "open source," but licenses like the Business Source License (BSL/BUSL) and the Server Side Public License (SSPL) are not approved by the Open Source Initiative and do not meet its open-source definition.',
        items: [
          '**The Business Source License (BSL, also called BUSL)** grants source access and broad usage rights up front, with a defined future date at which the license converts to a genuinely open-source license (often Apache-2.0 or a similar permissive license) — until that conversion, a stated commercial-use restriction applies, typically aimed at preventing a competing hosted offering.',
          '**The Server Side Public License (SSPL)**, created by MongoDB, requires that anyone offering the software as a service must also open-source the entire service stack they built around it — a far broader obligation than AGPL-3.0\'s, deliberately written to make commercial hosting impractical for a rival cloud provider.',
          '**The Commons Clause** is an add-on restriction layered on top of an otherwise permissive or copyleft base license, specifically prohibiting selling the software or offering it as a paid hosted service, while still allowing free use and modification.',
          '**Why projects move to these licenses:** a project that starts under a fully open license and later adopts a source-available one is typically responding to a large cloud provider offering the project as a hosted service without contributing back — moving to a source-available license lets the maintainer keep most of the openness while blocking that specific competing use.',
          '**Practical effect for adopters:** you can usually read, self-host, and modify source-available software for internal use without issue; the restriction bites when you try to resell it as a hosted product competing with the license holder\'s own offering — read the specific commercial-use clause, since wording varies significantly between projects.',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: 'What Do Proprietary and Freemium "Free" Licenses Mean?',
        content:
          '**A tool labeled "free" on its download page is not necessarily open source — many popular desktop AI apps are proprietary, closed-source software distributed at no cost, with no license granting you the right to view, modify, or redistribute the underlying code.** That distinction matters most for continuity: a proprietary vendor can change pricing, add restrictions, or discontinue the product entirely, and you have no legal right to keep an independent fork running.',
        items: [
          '**"Free (closed)" on a comparison table means no-cost proprietary software.** You may use the compiled application under the vendor\'s terms of service, but you have no access to the source code and no right to modify, audit, or fork it.',
          '**The core trade-off versus open-source alternatives:** a proprietary free app is often more polished and easier to install, since a single vendor controls the whole user experience — but you depend entirely on that vendor\'s continued willingness to keep it free, secure, and maintained.',
          '**Vendor lock-in risk:** without source access, you cannot self-host a modified version, audit exactly what the application does with your data, or continue development if the vendor stops maintaining it, changes the pricing model, or shuts down.',
          '**Who should care most:** anyone building a workflow or business process around a proprietary free tool should have a documented fallback plan — the same due diligence you would apply to any vendor dependency, since "free" does not mean "permanent" or "guaranteed."',
          '**Not the same as source-available:** source-available licenses (BSL, SSPL) at least let you read and audit the code even if commercial use is restricted; a fully proprietary tool gives you neither the code nor those assurances.',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: 'How Do AI Model Licenses Work? Open Weights, RAIL, and Acceptable-Use Restrictions',
        content:
          '**A model\'s license is a separate legal document from the license covering the software that runs it — a tool\'s code can be Apache-2.0 while the model weights it downloads carry a different, sometimes more restrictive, license entirely.** AI-model licensing is younger and less standardized than software licensing, and terms vary widely between model releases.',
        items: [
          '**Fully permissive weights:** some model families release weights under a standard permissive software license (commonly Apache-2.0), granting the same broad usage rights that license gives to code, including commercial use with no field-of-use restriction.',
          '**RAIL and OpenRAIL licenses** (Responsible AI License) originated with BigScience\'s release of the BLOOM model and were designed jointly with legal researchers to pair open access with a specific list of prohibited uses — commonly barring uses like generating disinformation, discriminatory decision-making, or content that violates law, while otherwise permitting broad commercial use.',
          '**Custom "community" or "open-weight" licenses:** several major model providers release weights under a bespoke license that reads like an open license but adds field-of-use conditions. The most widely cited example is the community license Meta attaches to its openly released model weights, which grants broad free use but adds a usage-scale threshold above which a separate commercial agreement is required, along with acceptable-use restrictions.',
          '**What to check specifically:** whether commercial use is permitted at all, whether there is a usage-scale or revenue threshold that changes the terms, what the acceptable-use policy prohibits, and whether the license restricts using the model\'s outputs to train a competing model — a restriction that has appeared in several model-specific licenses and has no equivalent in standard software licenses.',
          '**This is not legal advice** — model license terms change between releases from the same provider, so verify the exact license text attached to the specific model weights you plan to deploy rather than assuming continuity with an earlier release from the same organization.',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: 'Who Should Care About Which License?',
        content:
          '**The license that is a non-issue for a hobbyist can be a real liability for a startup or agency.** The same license terms apply to everyone, but the consequences of triggering an obligation scale with how commercial and how public your use is.',
        columns: ['Who you are', 'What matters most', 'What to do'],
        rows: [
          {
            'Who you are': 'Hobbyist / personal use',
            'What matters most': 'Almost any license works — you are not distributing or hosting for others',
            'What to do': 'Confirm you are not publicly redistributing modified code if the tool is copyleft',
          },
          {
            'Who you are': 'Startup building a commercial product on a tool',
            'What matters most': 'Copyleft, and especially AGPL-3.0, can force you to open-source your own additions',
            'What to do': 'Check the base license before architecting around a tool you plan to modify and sell',
          },
          {
            'Who you are': 'Enterprise embedding a tool internally',
            'What matters most': 'Copyleft obligations trigger on distribution/hosting, not internal-only use — but scale changes the risk',
            'What to do': 'Get a license review from legal before an unmodified copyleft tool becomes core infrastructure',
          },
          {
            'Who you are': 'Agency or freelancer reselling deployments',
            'What matters most': 'AGPL-3.0 plus modification plus hosting for a client often means publishing the modified source',
            'What to do': 'Confirm whether you are modifying the code, not just configuring or self-hosting it unmodified',
          },
          {
            'Who you are': 'Anyone concerned about vendor lock-in',
            'What matters most': 'Proprietary "free" and source-available tools can change terms, add fees, or shut down',
            'What to do': 'Prefer a permissive or copyleft alternative if long-term independence matters more than polish',
          },
          {
            'Who you are': 'EU/GDPR-conscious teams evaluating data residency',
            'What matters most': 'License risk is a separate axis from compliance risk — a permissive license does not solve data residency',
            'What to do': 'Evaluate license terms and data-residency requirements as two separate checklists, not one',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: 'Pre-Adoption License Checklist: 7 Things to Verify Before You Deploy a Tool',
        content:
          '**Verifying a tool\'s license takes minutes and prevents the kind of legal surprise that costs far more to unwind after a product ships.** Work through these seven checks before you commit to building on any open-source or AI tool.',
        numberedItems: [
          {
            title: 'Read the actual LICENSE file in the repository',
            whyItMatters: 'A landing page\'s "open source" claim can be marketing, not a legal fact — the LICENSE (or NOTICE/COPYING) file in the source repository is the authoritative document, not a badge or pricing page.',
          },
          {
            title: 'Check whether the license has changed since the project started',
            whyItMatters: 'Some projects relicense from a permissive or copyleft license to a source-available one after gaining commercial traction — this pattern has recurred across the software industry as cloud providers began hosting popular open-source projects without contributing back. Check the repository\'s license history, not just the license file as it reads today.',
          },
          {
            title: 'Verify the license is actually OSI-approved if that matters to you',
            whyItMatters: 'Source-available licenses like BSL and SSPL are commonly marketed as open source but are not on the Open Source Initiative\'s approved list — if OSI approval is a requirement for your use case, check the list directly rather than trusting a project\'s own description.',
          },
          {
            title: 'Read the commercial-use and field-of-use clauses for AI models specifically',
            whyItMatters: 'A model\'s license can permit commercial use broadly, restrict it above a usage-scale threshold, or prohibit specific applications outright — these clauses sit outside standard software-license language and are easy to miss if you only check the code license.',
          },
          {
            title: 'Determine whether self-hosting vs SaaS-hosting changes your obligations',
            whyItMatters: 'Under AGPL-3.0, offering modified software over a network triggers the same disclosure obligation that distributing a copy does under GPL — confirm which category your planned deployment falls into before you modify the code.',
          },
          {
            title: 'Check for a contributor license agreement (CLA) if you plan to contribute back',
            whyItMatters: 'A CLA can grant the project maintainer broader rights over your contribution than the project\'s own license grants to users — relevant mainly if you intend to submit code back to the project, not if you are only consuming it.',
          },
          {
            title: 'Check trademark restrictions separately from the code license',
            whyItMatters: 'A permissive or copyleft code license does not automatically grant rights to the project\'s name or logo — forking and rebranding a tool can be blocked by trademark law even when the code license would otherwise allow the fork.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        content:
          '**Most license-related problems come from skipping the source document, not from misunderstanding a license once it has actually been read.**',
        items: [
          'Trusting a marketing page\'s "open source" claim instead of reading the actual LICENSE file in the repository.',
          'Assuming AGPL-3.0 only matters if you distribute a copy of the software — it also applies to offering modified code as a hosted service.',
          'Treating a model\'s code license and its weights license as the same document — they frequently are not.',
          'Forking and rebranding a tool without checking trademark restrictions separate from the code license.',
          'Assuming a license that was permissive when a project started still applies after a later relicensing — check the license actually shown in the repository, not the one you remember.',
          'Skipping legal review for a copyleft or source-available tool because "it is free" — free-to-use and free-of-obligation are not the same thing.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — the formal definition a license must meet to be certified OSI-approved open source.',
          '[GNU Project — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — the Free Software Foundation\'s own explanations of GPL, LGPL, and AGPL.',
          '[Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — full license text.',
          '[MIT License text (Open Source Initiative)](https://opensource.org/license/mit) — full license text.',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — SSPL\'s own terms and rationale.',
          '[Business Source License FAQ](https://mariadb.com/bsl-faq-mariadb/) — an explanation of how BSL/BUSL conversion works from a widely cited adopter of the license.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is MIT or Apache-2.0 the better license for my project?',
            a: 'Both are permissive with almost no obligations for users. Apache-2.0\'s main practical difference is an explicit patent grant, which matters more to organizations with patent portfolios; MIT is shorter and slightly more common for small individual projects. Neither restricts commercial use or requires you to open-source anything built on top.',
          },
          {
            q: 'Does using AGPL-3.0 software mean my whole company has to go open source?',
            a: 'No. AGPL-3.0\'s obligation triggers on distributing or offering a modified version of the covered code over a network — using an unmodified AGPL tool internally, or as a component your product calls without modifying its source, does not pull unrelated parts of your codebase under the license. It becomes relevant specifically if you modify the AGPL code itself and offer that modified version to users.',
          },
          {
            q: 'Is "source-available" the same thing as open source?',
            a: 'No, and the distinction matters. Open source is a certification from the Open Source Initiative based on a specific definition that includes the right to redistribute and modify without restricting commercial use. Source-available licenses like BSL and SSPL let you read the code but restrict specific commercial uses, most often competing hosted offerings — they do not meet the OSI\'s open-source definition even when a project describes itself as open source.',
          },
          {
            q: 'Can I use a "free" proprietary AI app for my business?',
            a: 'Generally yes, under the vendor\'s terms of service, but you take on vendor-dependency risk: no source access means no ability to audit what the software does with your data, no right to self-host a modified version, and no guarantee the vendor keeps the product free, unrestricted, or maintained. Read the terms of service, not just the price.',
          },
          {
            q: 'Do AI model licenses work the same way as software licenses?',
            a: 'Not exactly. Model licenses are newer and less standardized. Some releases use a standard permissive software license applied directly to the weights; others use a purpose-built license like RAIL/OpenRAIL with a specific list of prohibited uses; others use a custom community license with usage-scale thresholds and field-of-use restrictions. Always check the specific license attached to the model weights you are downloading, separately from the license covering any code you use to run it.',
          },
          {
            q: 'Why do some open-source projects switch to a more restrictive license later?',
            a: 'The most commonly cited driver is a large cloud provider offering the project as a competing hosted service without contributing back to development — moving to a source-available license (BSL, SSPL) or adding a restriction like the Commons Clause lets the maintainer keep the code visible and mostly usable while blocking that specific competing use. This pattern has recurred across the software industry.',
          },
          {
            q: 'What should a startup check before building a commercial product on an open-source tool?',
            a: 'Read the actual license file, not a landing page; determine whether you plan to modify the underlying code, which is what typically triggers copyleft and AGPL-3.0 obligations; check for a usage-scale or field-of-use threshold if an AI model is involved; and get a license review from counsel before the tool becomes core infrastructure your product depends on.',
          },
          {
            q: 'Is this article legal advice?',
            a: 'No. This article explains how common license mechanisms generally work, in plain language, for orientation purposes. License terms vary by project and version, interpretation can depend on jurisdiction, and the consequences of getting it wrong scale with how commercial your deployment is — consult a qualified attorney for guidance on a specific tool, deployment, or business decision.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — 160+ local LLM tools with the license listed for each entry.',
          '[Dify AI Workflow Builder Review](/power-local-llm/dify-ai-workflow-builder-review) — a platform review that names its license; use this guide to understand what that license means for your deployment.',
          '[AI-Generated Content and IP Risk](/power-local-llm/ai-generated-content-ip-risk) — the intellectual-property questions that sit alongside licensing when you deploy AI-generated output commercially.',
          '[Agentic AI Security: Identity & Access](/power-local-llm/agentic-ai-security-identity-access) — security and governance considerations for self-hosted AI deployments, a companion concern to license compliance.',
          '[GDPR-Compliant Local RAG for Sensitive Documents](/power-local-llm/local-rag-for-private-business-data) — license risk and data-residency/compliance risk are separate checklists; this guide covers the compliance side.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AI & Open-Source Software Licenses Explained: MIT vs Apache vs GPL vs AGPL vs Proprietary',
      description: 'Open-source and AI-tool license types explained: permissive, copyleft, AGPL, source-available, and AI-model licenses — what to check before deploying any tool.',
      url: 'https://www.promptquorum.com/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'en',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers, startup founders, and technical decision-makers' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com](https://www.promptquorum.com)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/power-local-llm](https://www.promptquorum.com/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'AI & Open-Source Software Licenses Explained', item: '[www.promptquorum.com/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
  de: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'KI- und Open-Source-Softwarelizenzen erklärt: MIT vs. Apache vs. GPL vs. AGPL vs. proprietär',
    seoTitle: 'KI- & Open-Source-Lizenzen erklärt (MIT, GPL, AGPL)',
    intro:
      'Jedes lokale LLM-Tool, RAG-Framework und jeder KI-Coding-Assistent, der auf dieser Seite besprochen wird, läuft unter einer Lizenz — MIT, Apache-2.0, AGPL-3.0, eine Source-Available-Lizenz oder eine geschlossene "kostenlose" Desktop-App — und diese Lizenz entscheidet mehr darüber, ob Sie das Tool tatsächlich einsetzen dürfen, als jeder Funktionsvergleich. Dieser Leitfaden erklärt die Lizenzfamilien, denen Sie bei Open-Source-Software und KI-Modellen begegnen: was jede erlaubt und verlangt, woher sie stammt, für wen sie gedacht ist, und was Sie konkret prüfen müssen, bevor Sie ein Tool damit einsetzen — ob als Hobbyprojekt, Startup-Produkt, internes Unternehmenssystem oder Kundenprojekt, das Sie weiterverkaufen. Es ist eine Taxonomie, keine Nachschlagetabelle — welche Lizenz ein bestimmtes besprochenes Tool nutzt, steht in der jeweiligen Review oder im [Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory); hier erfahren Sie, was diese Lizenz tatsächlich bedeutet, sobald Sie sie kennen.',
    metaDescription:
      'Open-Source- und KI-Tool-Lizenzen erklärt: permissiv, Copyleft, AGPL, Source-Available und KI-Modell-Lizenzen — was Sie vor dem Einsatz jedes Tools prüfen sollten.',
    twitterDescription:
      'MIT, Apache-2.0, GPL, AGPL, Source-Available und KI-Modell-Lizenzen einfach erklärt — was jede verlangt, für wen sie passt und was vor dem Einsatz zu prüfen ist.',
    audience:
      'Entwickler, Startup-Gründer und technische Entscheider, die prüfen, welche Open-Source- oder KI-Tool-Lizenz zu ihrem Projekt, Produkt oder Einsatz passt.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Open-Source-Softwarelizenztypen',
    targetKeywords: [
      'open source lizenzen erklärt',
      'MIT vs Apache vs GPL Lizenz',
      'was ist eine AGPL-Lizenz',
      'source-available lizenz erklärt',
      'ki modell lizenz open weights',
    ],
    leadAnswerBlock:
      '**Open-Source- und KI-Tool-Lizenzen lassen sich in fünf praktische Familien einteilen — permissiv (MIT, Apache-2.0, BSD), Copyleft (GPL, LGPL), Netzwerk-Copyleft (AGPL-3.0), Source-Available (BSL, SSPL) und proprietär/geschlossen-kostenlos — dazu eine eigene Gruppe KI-modellspezifischer Lizenzen (RAIL, Open-Weight-Community-Lizenzen) mit eigenen Nutzungsbeschränkungen.** Welche für Sie relevant ist, hängt davon ab, ob Sie Hobbyist, Startup mit kommerziellem Produkt oder Unternehmen mit interner Einbettung sind — nicht davon, welche Lizenz "besser" ist.',
    quickAnswerTop: {
      de: {
        question: 'Was ist der Unterschied zwischen MIT-, Apache-2.0-, GPL- und AGPL-Lizenzen?',
        answer:
          'MIT und Apache-2.0 sind permissiv — Sie dürfen den Code nutzen, verändern und weiterverkaufen, mit kaum Pflichten außer dem Erhalt des Lizenzhinweises. GPL ist Copyleft — verteilen Sie eine veränderte Version, müssen Sie Ihre Änderungen unter derselben Lizenz veröffentlichen. AGPL-3.0 erweitert diese Pflicht auf Software, die Sie nur als Netzwerkdienst betreiben, und schließt damit die Lücke, die GPL für SaaS offenlässt. Proprietäre und Source-Available-Lizenzen (BSL, SSPL) fallen ganz aus der Open-Source-Definition heraus und beschränken bestimmte kommerzielle Nutzungen, meist um mit dem eigenen gehosteten Produkt des Rechteinhabers zu konkurrieren.',
        bullets: [
          'MIT und Apache-2.0 (permissiv): frei nutzen, verändern, weiterverkaufen — einzige Pflicht ist der Erhalt des Lizenz-/Copyright-Hinweises',
          'GPL und LGPL (Copyleft): eine veränderte Version zu verteilen verlangt, Ihre Änderungen unter derselben Lizenz freizugeben',
          'AGPL-3.0 (Netzwerk-Copyleft): dieselbe Pflicht gilt auch, wenn Sie die Software nur als gehosteten Dienst betreiben, nicht verteilen',
          'BSL/SSPL (Source-Available): Quellcode ist einsehbar, Nutzung aber eingeschränkt — meist nicht OSI-zertifizierte "Open Source" trotz Marketing',
          'KI-Modell-Lizenzen (RAIL, Open-Weight-Community-Lizenzen) fügen oft Nutzungs- und Anwendungsbeschränkungen hinzu, die über eine Standard-Codelizenz hinausgehen',
          'Lesen Sie immer die tatsächliche LICENSE-Datei im Repository, nicht die Aussage einer Landingpage, bevor Sie auf einem Tool aufbauen',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Kernaussagen', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Permissive Lizenzen: MIT, Apache-2.0, BSD', anchor: '#permissive-licenses' },
      { label: 'Copyleft: die GPL- und LGPL-Familie', anchor: '#copyleft-gpl' },
      { label: 'Wie AGPL-3.0 die SaaS-Lücke schließt', anchor: '#agpl-saas-loophole' },
      { label: 'Source-Available- und "Fair-Code"-Lizenzen', anchor: '#source-available-fair-code' },
      { label: 'Proprietäre und "kostenlose" Freemium-Lizenzen', anchor: '#proprietary-freemium' },
      { label: 'KI-Modell-Lizenzen: RAIL & Open Weights', anchor: '#ai-model-licenses' },
      { label: 'Wen betrifft welche Lizenz?', anchor: '#who-should-care' },
      { label: 'Checkliste vor der Tool-Auswahl', anchor: '#pre-adoption-checklist' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Lizenzfamilien lassen sich in fünf praktische Gruppen einteilen: permissiv, Copyleft, Netzwerk-Copyleft, Source-Available und proprietär/geschlossen — dazu eine eigene Gruppe KI-modellspezifischer Lizenzen.** Zu wissen, in welche Gruppe ein Tool fällt, sagt mehr darüber aus, ob Sie es nutzen dürfen, als jede Funktionsliste.',
          '**Permissive Lizenzen (MIT, Apache-2.0, BSD) verlangen fast nichts.** Sie können den Code in ein geschlossenes kommerzielles Produkt einbetten und müssen nie eigenen Quellcode veröffentlichen.',
          '**Copyleft-Lizenzen (GPL, LGPL) sind nur in einem engen, spezifischen Sinn "viral".** Wer eine veränderte Version des lizenzierten Codes verteilt, muss die Änderungen unter derselben Lizenz freigeben — die Pflicht greift nicht auf fremde Software über, die lediglich daneben läuft.',
          '**AGPL-3.0 schließt die Lücke, die GPL für gehostete Dienste offenlässt.** Wer AGPL-lizenzierten Code verändert und nur als Netzwerkdienst (SaaS) anbietet, muss trotzdem den veränderten Quellcode veröffentlichen — das verlangt GPL allein nicht.',
          '**Source-Available-Lizenzen wie BSL und SSPL sind keine OSI-zertifizierte Open Source, egal was eine Landingpage behauptet.** Sie beschränken bestimmte kommerzielle Nutzungen, meist um einen Cloud-Anbieter am Weiterverkauf als konkurrierenden gehosteten Dienst zu hindern.',
          '**Die LICENSE-Datei im Repository ist die einzig verlässliche Quelle — keine Preisseite, kein README-Badge, keine Marketingaussage.** Dieser Leitfaden ist eine allgemeine Orientierung, keine Rechtsberatung; ziehen Sie einen Anwalt hinzu, wenn Lizenzbedingungen Ihr Geschäft wesentlich betreffen.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Open-Source- und KI-Tool-Lizenzen gliedern sich in fünf praktische Familien — permissiv, Copyleft, Netzwerk-Copyleft (AGPL), Source-Available und proprietär —, die jeweils unterschiedliche Pflichten für Nutzung, Veränderung und Weiterverbreitung der Software mit sich bringen.',
          },
          {
            type: 'plain-terms',
            text: 'Eine Softwarelizenz ist das Regelwerk dafür, was Sie mit fremdem Code tun dürfen. Permissive Lizenzen erlauben fast alles; Copyleft-Lizenzen verlangen, dass Sie Ihre Änderungen zurückgeben; Source-Available-Lizenzen lassen Sie den Code einsehen, schränken die kommerzielle Nutzung aber ein.',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**MIT** ist die kürzeste und verbreitetste permissive Lizenz — rund 170 Wörter, keine Patentklausel.',
          '**Apache-2.0** enthält eine explizite Patentgewährung, die MIT fehlt — deshalb bevorzugen viele Unternehmen sie für firmeneigene Projekte.',
          '**GPL** verlangt Quellcode-Offenlegung nur bei Verteilung der Software; AGPL-3.0 erweitert diese Pflicht auf den Betrieb als Netzwerkdienst.',
          '**OSI-zertifizierte "Open Source"** ist eine konkrete Zertifizierung der Open Source Initiative; "Source-Available" und "Fair-Code" sind Marketingbegriffe für Lizenzen, die diese Definition nicht erfüllen.',
          '**KI-Modell-Lizenzen sind eine eigene Kategorie neben Codelizenzen.** Der Code eines Tools kann Apache-2.0 sein, während die heruntergeladenen Modellgewichte völlig andere, restriktivere Bedingungen tragen.',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: 'Was sind permissive Lizenzen? MIT, Apache-2.0 und BSD',
        content:
          '**Permissive Lizenzen erlauben Nutzung, Veränderung und Weitergabe von Code — auch innerhalb eines geschlossenen kommerziellen Produkts — mit kaum Pflichten außer dem Erhalt des Copyright-Hinweises.** Sie sind die am wenigsten einschränkende Lizenzfamilie und die Standardwahl für Infrastrukturprojekte, die möglichst breite Verbreitung anstreben, auch durch Unternehmen, die selbst nie eigenen Code veröffentlichen.',
        items: [
          '**Die MIT-Lizenz** entstand am Massachusetts Institute of Technology als Möglichkeit, universitär entwickelte Software mit minimalen Einschränkungen freizugeben. Sie umfasst rund 170 Wörter, gewährt nahezu unbegrenzte Rechte und verlangt lediglich, dass der ursprüngliche Copyright- und Lizenztext bei jeder weitergegebenen Kopie oder wesentlichen Teilkopie erhalten bleibt.',
          '**Die Apache License 2.0** stammt von der Apache Software Foundation, gegründet, um Unternehmen und Community-Mitwirkenden einen gemeinsamen rechtlichen Rahmen für große Gemeinschaftsprojekte zu geben. Anders als MIT enthält sie eine explizite Patentgewährung — Mitwirkende lizenzieren ihre den Code betreffenden Patentansprüche an Nutzer —, weshalb viele Unternehmen mit Patentportfolios sie bevorzugen.',
          '**BSD-Lizenzen** (2-Klausel und 3-Klausel) entstanden an der University of California, Berkeley, für das Betriebssystem Berkeley Software Distribution. Die 3-Klausel-Variante enthält zusätzlich eine Non-Endorsement-Klausel, die verbietet, die Namen der Originalautoren ohne Erlaubnis zur Bewerbung eines abgeleiteten Produkts zu nutzen.',
          '**Praktische Auswirkung für Nutzer:** Sie können ein permissiv lizenziertes Tool forken, verändern, einbetten und als Teil eines geschlossenen Produkts verkaufen, ohne je eigenen Quellcode zu veröffentlichen — das eigentliche Risiko besteht nur darin, den erforderlichen Copyright-/Lizenzhinweis bei der Weitergabe zu vergessen.',
          '**Reale Beispiele aus den Reviews dieser Seite:** Ollama und llama.cpp laufen beide unter MIT; vLLM unter Apache-2.0 — alle drei lassen sich ohne Offenlegungspflicht in ein kommerzielles Produkt einbetten.',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: 'Was ist Copyleft? Die GPL- und LGPL-Familie',
        content:
          '**Copyleft-Lizenzen verlangen: Wer eine veränderte Version des lizenzierten Codes verteilt, muss die eigenen Änderungen unter derselben Lizenz freigeben.** Die Pflicht bezieht sich auf den Code selbst, nicht auf jedes Programm, das nur daneben läuft — die verbreitete Einordnung als "virale Lizenz" übertreibt, wie weit die Pflicht tatsächlich reicht.',
        items: [
          '**Die GNU General Public License (GPL)** wurde von Richard Stallman und der Free Software Foundation als Lizenz für das GNU-Projekt geschrieben, basierend auf der Idee, dass Softwarefreiheit weitergegeben werden muss — wer eine veränderte Kopie erhält, soll dieselben Rechte haben wie der ursprüngliche Autor.',
          '**GPL v2 und GPL v3** unterscheiden sich vor allem in Patentklauseln und Kompatibilitätsregeln; v3 fügte explizite Patent-Vergeltungs- und Anti-Tivoisierungsklauseln hinzu (die Hardware verhindern sollen, die Ihnen das Ausführen veränderter Software untersagt, obwohl Sie dazu rechtlich berechtigt sind).',
          '**Die GNU Lesser General Public License (LGPL)** lockert GPL speziell für Bibliotheken — Sie können eine LGPL-Bibliothek in eine proprietäre Anwendung einbinden, ohne die Anwendung selbst offenzulegen, solange die Bibliothekskomponente austauschbar bleibt und ihr eigener Quellcode verfügbar ist.',
          '**Was die Pflicht tatsächlich auslöst:** die Verteilung einer veränderten Kopie des GPL-Codes. Die bloße interne Nutzung unveränderter GPL-Software oder das Ausführen proprietärer Software auf einem GPL-lizenzierten Betriebssystem stellt Ihren eigenen Code nicht automatisch unter GPL.',
          '**Wer vorsichtig sein sollte:** Ein Startup, das ein GPL-Tool forken und als Kern eines kommerziellen Produkts verändern will, braucht einen Plan — entweder die Änderungen offenzulegen oder den Fork zu vermeiden; ein Unternehmen, das ein unverändertes GPL-Tool nur intern nutzt, hat diese Pflicht nicht.',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'Wie AGPL-3.0 die SaaS-Lücke schließt',
        content:
          '**Die GNU Affero General Public License (AGPL-3.0) fügt eine Pflicht hinzu, die GPL nicht kennt: Wer AGPL-lizenzierten Code verändert und Nutzern über ein Netzwerk zugänglich macht, muss diesen Nutzern den veränderten Quellcode anbieten — selbst wenn nie physisch eine Kopie der Software verteilt wird.** Das ist das definierende Merkmal dieser Lizenzfamilie und überrascht Teams am häufigsten, die annehmen, "wir verteilen es nie, wir hosten es nur" sei eine sichere Lesart.',
        items: [
          '**Die geschlossene Lücke:** Unter reiner GPL gilt der Betrieb einer veränderten Version als gehosteter Webdienst nicht als "Verteilung" im rechtlichen Sinn, den die Lizenz auslöst — ein Unternehmen könnte GPL-Code nehmen, verändern, nur als SaaS-Produkt anbieten und müsste die Änderungen nie veröffentlichen. Das wurde informell als "ASP-Lücke" (Application Service Provider) oder "SaaS-Lücke" bekannt.',
          '**AGPL-3.0 wurde gezielt geschrieben, um diese Lücke zu schließen**, indem eine Netzwerk-Interaktionsklausel hinzukommt: Wer die Funktionalität der veränderten Software Nutzern über ein Netzwerk anbietet, löst dieselbe Offenlegungspflicht aus wie bei der Verteilung einer physischen Kopie.',
          '**Warum das für Hosting und Weiterverkauf zählt:** Eine Agentur oder ein Hosting-Anbieter, die ein AGPL-lizenziertes Tool nehmen, verändern und Kunden als gehosteten Dienst anbieten, müssen den veränderten Quellcode diesen Nutzern zugänglich machen — der unveränderte Betrieb löst diese Pflicht nicht aus.',
          '**Reale Beispiele aus den Reviews dieser Seite:** Jan, KoboldCpp, SillyTavern und text-generation-webui laufen unter AGPL-3.0 — für privates oder internes Self-Hosting unverändert unproblematisch; sobald Sie eines verändern und gehosteten Zugang weiterverkaufen, ändert sich die rechtliche Lage grundlegend.',
          '**Dies ist eine allgemeine Erklärung des Lizenzmechanismus, keine Rechtsberatung** — ob ein konkreter Einsatz als "Anbieten über ein Netzwerk" im genauen Wortlaut von AGPL-3.0 gilt, ist eine Frage für einen Anwalt, der Ihre spezifische Architektur prüft.',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: 'Was sind Source-Available- und "Fair-Code"-Lizenzen?',
        content:
          '**Source-Available-Lizenzen erlauben jedem, den Code zu lesen, schränken aber bestimmte kommerzielle Nutzungen ein — am häufigsten das Anbieten der Software als konkurrierenden gehosteten Dienst.** Sie werden oft als "Open Source" beworben, doch Lizenzen wie die Business Source License (BSL/BUSL) und die Server Side Public License (SSPL) sind nicht von der Open Source Initiative anerkannt und erfüllen deren Open-Source-Definition nicht.',
        items: [
          '**Die Business Source License (BSL, auch BUSL genannt)** gewährt zunächst Quellcode-Zugang und weitreichende Nutzungsrechte, mit einem festgelegten künftigen Datum, an dem die Lizenz in eine echte Open-Source-Lizenz übergeht (häufig Apache-2.0 oder eine ähnliche permissive Lizenz) — bis dahin gilt eine ausdrückliche Beschränkung der kommerziellen Nutzung, meist gegen ein konkurrierendes gehostetes Angebot gerichtet.',
          '**Die Server Side Public License (SSPL)**, entwickelt von MongoDB, verlangt, dass jeder, der die Software als Dienst anbietet, den gesamten darum gebauten Dienst-Stack ebenfalls offenlegen muss — eine deutlich weitreichendere Pflicht als bei AGPL-3.0, bewusst darauf ausgelegt, kommerzielles Hosting für einen konkurrierenden Cloud-Anbieter unpraktikabel zu machen.',
          '**Die Commons Clause** ist eine Zusatzbeschränkung, die auf eine ansonsten permissive oder Copyleft-Basislizenz aufgesetzt wird und speziell den Verkauf der Software oder das Anbieten als kostenpflichtigen gehosteten Dienst verbietet, während freie Nutzung und Veränderung weiterhin erlaubt bleiben.',
          '**Warum Projekte zu solchen Lizenzen wechseln:** Ein Projekt, das unter einer vollständig offenen Lizenz startet und später zu einer Source-Available-Lizenz wechselt, reagiert typischerweise darauf, dass ein großer Cloud-Anbieter das Projekt als gehosteten Dienst anbietet, ohne zur Entwicklung beizutragen — der Wechsel zur Source-Available-Lizenz erhält die weitgehende Offenheit, blockiert aber diese spezifische konkurrierende Nutzung.',
          '**Praktische Auswirkung für Nutzer:** In der Regel dürfen Sie Source-Available-Software für interne Zwecke problemlos lesen, selbst hosten und verändern; die Beschränkung greift, sobald Sie versuchen, sie als gehostetes Produkt weiterzuverkaufen, das mit dem Angebot des Rechteinhabers konkurriert — lesen Sie die konkrete Klausel zur kommerziellen Nutzung, da die Formulierungen zwischen Projekten stark variieren.',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: 'Was bedeuten proprietäre und "kostenlose" Freemium-Lizenzen?',
        content:
          '**Ein auf der Download-Seite als "kostenlos" bezeichnetes Tool ist nicht zwangsläufig Open Source — viele populäre Desktop-KI-Apps sind proprietäre, geschlossene Software, die kostenlos vertrieben wird, ohne dass eine Lizenz Ihnen das Recht einräumt, den zugrunde liegenden Code einzusehen, zu verändern oder weiterzugeben.** Diese Unterscheidung zählt vor allem für die Kontinuität: Ein proprietärer Anbieter kann Preise ändern, Einschränkungen hinzufügen oder das Produkt ganz einstellen, ohne dass Sie ein rechtliches Mittel haben, einen unabhängigen Fork weiterzubetreiben.',
        items: [
          '**"Kostenlos (geschlossen)" in einer Vergleichstabelle bedeutet kostenlose proprietäre Software.** Sie dürfen die kompilierte Anwendung gemäß den Nutzungsbedingungen des Anbieters verwenden, haben aber keinen Zugang zum Quellcode und kein Recht, ihn zu verändern, zu prüfen oder zu forken.',
          '**Der zentrale Kompromiss gegenüber Open-Source-Alternativen:** Eine proprietäre kostenlose App ist oft ausgereifter und einfacher zu installieren, da ein einzelner Anbieter die gesamte Nutzererfahrung kontrolliert — Sie hängen aber vollständig von dessen fortgesetzter Bereitschaft ab, das Produkt kostenlos, sicher und gepflegt zu halten.',
          '**Risiko der Anbieterbindung (Vendor Lock-in):** Ohne Quellcode-Zugang können Sie keine veränderte Version selbst hosten, nicht genau prüfen, was die Anwendung mit Ihren Daten macht, und die Entwicklung nicht fortsetzen, falls der Anbieter die Pflege einstellt, das Preismodell ändert oder schließt.',
          '**Wer besonders vorsichtig sein sollte:** Wer einen Workflow oder Geschäftsprozess um ein proprietäres kostenloses Tool herum aufbaut, sollte einen dokumentierten Ausweichplan haben — dieselbe Sorgfalt, die Sie bei jeder Anbieterabhängigkeit anwenden würden, denn "kostenlos" bedeutet nicht "dauerhaft" oder "garantiert".',
          '**Nicht dasselbe wie Source-Available:** Source-Available-Lizenzen (BSL, SSPL) erlauben zumindest das Lesen und Prüfen des Codes, auch wenn die kommerzielle Nutzung eingeschränkt ist; ein vollständig proprietäres Tool bietet weder den Code noch diese Sicherheit.',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: 'Wie funktionieren KI-Modell-Lizenzen? Open Weights, RAIL und Nutzungsbeschränkungen',
        content:
          '**Die Lizenz eines Modells ist ein eigenständiges rechtliches Dokument, getrennt von der Lizenz der Software, die es ausführt — der Code eines Tools kann Apache-2.0 sein, während die heruntergeladenen Modellgewichte eine völlig andere, mitunter restriktivere Lizenz tragen.** KI-Modell-Lizenzierung ist jünger und weniger standardisiert als Softwarelizenzierung, und die Bedingungen variieren stark zwischen einzelnen Modell-Veröffentlichungen.',
        items: [
          '**Vollständig permissive Gewichte:** Manche Modellfamilien veröffentlichen ihre Gewichte unter einer Standard-Softwarelizenz (meist Apache-2.0) und gewähren dieselben weitreichenden Nutzungsrechte, die diese Lizenz auch für Code gewährt — einschließlich kommerzieller Nutzung ohne Anwendungsbeschränkung.',
          '**RAIL- und OpenRAIL-Lizenzen** (Responsible AI License) entstanden mit BigSciences Veröffentlichung des Modells BLOOM und wurden gemeinsam mit Rechtsforschern entwickelt, um offenen Zugang mit einer konkreten Liste verbotener Nutzungen zu verbinden — üblicherweise das Erzeugen von Desinformation, diskriminierende Entscheidungsfindung oder rechtswidrige Inhalte, während kommerzielle Nutzung ansonsten breit erlaubt bleibt.',
          '**Eigene "Community"- oder "Open-Weight"-Lizenzen:** Mehrere große Modellanbieter veröffentlichen Gewichte unter einer maßgeschneiderten Lizenz, die wie eine offene Lizenz klingt, aber Anwendungsbedingungen hinzufügt. Das meistzitierte Beispiel ist die Community-Lizenz, die Meta an seine offen veröffentlichten Modellgewichte knüpft — sie erlaubt breite kostenlose Nutzung, fügt aber ab einer Nutzungsgrößenschwelle die Pflicht zu einer separaten kommerziellen Vereinbarung sowie Nutzungsbeschränkungen hinzu.',
          '**Was konkret zu prüfen ist:** ob kommerzielle Nutzung überhaupt erlaubt ist, ob eine Nutzungsgrößen- oder Umsatzschwelle die Bedingungen ändert, was die Acceptable-Use-Richtlinie verbietet, und ob die Lizenz einschränkt, mit den Modellausgaben ein konkurrierendes Modell zu trainieren — eine Einschränkung, die in mehreren modellspezifischen Lizenzen vorkommt und bei Standard-Softwarelizenzen kein Gegenstück hat.',
          '**Dies ist keine Rechtsberatung** — Modell-Lizenzbedingungen ändern sich zwischen Veröffentlichungen desselben Anbieters, prüfen Sie daher den genauen Lizenztext der konkreten Modellgewichte, die Sie einsetzen wollen, statt Kontinuität mit einer früheren Veröffentlichung derselben Organisation vorauszusetzen.',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: 'Wen betrifft welche Lizenz?',
        content:
          '**Eine Lizenz, die für einen Hobbyisten kein Thema ist, kann für ein Startup oder eine Agentur ein echtes Risiko sein.** Dieselben Lizenzbedingungen gelten für alle, aber die Konsequenzen einer ausgelösten Pflicht skalieren mit dem Grad an Kommerzialität und Öffentlichkeit Ihrer Nutzung.',
        columns: ['Wer Sie sind', 'Worauf es ankommt', 'Was zu tun ist'],
        rows: [
          {
            'Wer Sie sind': 'Hobbyist / private Nutzung',
            'Worauf es ankommt': 'Fast jede Lizenz funktioniert — Sie verteilen oder hosten nicht für Dritte',
            'Was zu tun ist': 'Prüfen Sie, dass Sie bei einem Copyleft-Tool keinen veränderten Code öffentlich weitergeben',
          },
          {
            'Wer Sie sind': 'Startup mit kommerziellem Produkt auf einem Tool',
            'Worauf es ankommt': 'Copyleft, insbesondere AGPL-3.0, kann zwingen, eigene Ergänzungen offenzulegen',
            'Was zu tun ist': 'Prüfen Sie die Basislizenz, bevor Sie um ein Tool herum planen, das Sie verändern und verkaufen wollen',
          },
          {
            'Wer Sie sind': 'Unternehmen mit interner Einbettung eines Tools',
            'Worauf es ankommt': 'Copyleft-Pflichten greifen bei Verteilung/Hosting, nicht bei rein interner Nutzung — Skalierung ändert das Risiko',
            'Was zu tun ist': 'Holen Sie eine Rechtsprüfung ein, bevor ein unverändertes Copyleft-Tool zur Kerninfrastruktur wird',
          },
          {
            'Wer Sie sind': 'Agentur oder Freelancer mit Kundenprojekten',
            'Worauf es ankommt': 'AGPL-3.0 plus Änderung plus Hosting für einen Kunden bedeutet oft: veränderten Quellcode veröffentlichen',
            'Was zu tun ist': 'Klären Sie, ob Sie den Code tatsächlich verändern oder nur unverändert konfigurieren/hosten',
          },
          {
            'Wer Sie sind': 'Alle, die Anbieterbindung vermeiden wollen',
            'Worauf es ankommt': 'Proprietäre "kostenlose" und Source-Available-Tools können Bedingungen ändern, Gebühren einführen oder schließen',
            'Was zu tun ist': 'Bevorzugen Sie eine permissive oder Copyleft-Alternative, wenn langfristige Unabhängigkeit wichtiger ist als Politur',
          },
          {
            'Wer Sie sind': 'DSGVO-bewusste Teams mit Fragen zur Datenresidenz',
            'Worauf es ankommt': 'Lizenzrisiko ist eine eigene Achse neben Compliance-Risiko — eine permissive Lizenz löst keine Datenresidenzpflicht',
            'Was zu tun ist': 'Bewerten Sie Lizenzbedingungen und Datenresidenz-Anforderungen als zwei getrennte Checklisten',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: 'Checkliste vor der Tool-Auswahl: 7 Punkte vor dem Einsatz eines Tools',
        content:
          '**Die Lizenzprüfung eines Tools dauert Minuten und verhindert genau die Art rechtlicher Überraschung, die nach dem Produktivstart deutlich teurer wird.** Arbeiten Sie diese sieben Punkte durch, bevor Sie sich festlegen, auf einem Open-Source- oder KI-Tool aufzubauen.',
        numberedItems: [
          {
            title: 'Die tatsächliche LICENSE-Datei im Repository lesen',
            whyItMatters: 'Eine "Open Source"-Aussage auf einer Landingpage kann Marketing sein, kein rechtlicher Fakt — die LICENSE- (oder NOTICE-/COPYING-)Datei im Quell-Repository ist das maßgebliche Dokument, kein Badge und keine Preisseite.',
          },
          {
            title: 'Prüfen, ob sich die Lizenz kürzlich geändert hat',
            whyItMatters: 'Manche Projekte wechseln nach kommerziellem Erfolg von einer permissiven oder Copyleft-Lizenz zu einer Source-Available-Lizenz — dieses Muster hat sich in der Softwarebranche wiederholt, seit Cloud-Anbieter beliebte Open-Source-Projekte hosten, ohne beizutragen. Prüfen Sie die Lizenzhistorie des Repositorys, nicht nur die aktuelle Datei.',
          },
          {
            title: 'Verifizieren, ob die Lizenz tatsächlich OSI-zertifiziert ist, falls das relevant ist',
            whyItMatters: 'Source-Available-Lizenzen wie BSL und SSPL werden oft als Open Source beworben, stehen aber nicht auf der Liste der von der Open Source Initiative anerkannten Lizenzen — wenn OSI-Zertifizierung für Ihren Anwendungsfall Pflicht ist, prüfen Sie die Liste direkt statt der Selbstbeschreibung eines Projekts zu vertrauen.',
          },
          {
            title: 'Klauseln zu kommerzieller Nutzung und Anwendungsbereich speziell bei KI-Modellen lesen',
            whyItMatters: 'Die Lizenz eines Modells kann kommerzielle Nutzung breit erlauben, ab einer Nutzungsgrößenschwelle einschränken oder bestimmte Anwendungen ganz verbieten — diese Klauseln liegen außerhalb der üblichen Softwarelizenz-Sprache und werden leicht übersehen, wenn nur die Codelizenz geprüft wird.',
          },
          {
            title: 'Klären, ob Self-Hosting oder SaaS-Hosting Ihre Pflichten ändert',
            whyItMatters: 'Unter AGPL-3.0 löst das Anbieten veränderter Software über ein Netzwerk dieselbe Offenlegungspflicht aus wie die Verteilung einer Kopie unter GPL — klären Sie, in welche Kategorie Ihr geplanter Einsatz fällt, bevor Sie den Code verändern.',
          },
          {
            title: 'Bei geplanten Beiträgen eine Contributor License Agreement (CLA) prüfen',
            whyItMatters: 'Eine CLA kann dem Projekt-Maintainer weitergehende Rechte an Ihrem Beitrag einräumen, als die Projektlizenz selbst Nutzern gewährt — relevant vor allem, wenn Sie Code an das Projekt zurückgeben wollen, nicht wenn Sie es nur nutzen.',
          },
          {
            title: 'Markenrechtliche Beschränkungen getrennt von der Codelizenz prüfen',
            whyItMatters: 'Eine permissive oder Copyleft-Codelizenz gewährt nicht automatisch Rechte am Namen oder Logo des Projekts — das Forken und Rebranding eines Tools kann durch Markenrecht blockiert sein, selbst wenn die Codelizenz den Fork sonst erlauben würde.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        content:
          '**Die meisten lizenzbezogenen Probleme entstehen dadurch, dass die Quelle nicht gelesen wird — nicht dadurch, dass eine tatsächlich gelesene Lizenz missverstanden wird.**',
        items: [
          'Der "Open Source"-Aussage einer Marketingseite vertrauen, statt die tatsächliche LICENSE-Datei im Repository zu lesen.',
          'Annehmen, AGPL-3.0 spiele nur eine Rolle bei der Verteilung einer Kopie — es gilt ebenso beim Anbieten veränderten Codes als gehosteten Dienst.',
          'Codelizenz und Modell-Gewichte-Lizenz eines KI-Modells als dasselbe Dokument behandeln — sie sind es häufig nicht.',
          'Ein Tool forken und umbenennen, ohne markenrechtliche Beschränkungen getrennt von der Codelizenz zu prüfen.',
          'Annehmen, eine anfangs permissive Lizenz gelte noch nach einer späteren Relizenzierung — die aktuelle Lizenz prüfen, nicht die erinnerte.',
          'Die Rechtsprüfung eines Copyleft- oder Source-Available-Tools überspringen, weil es "kostenlos" ist — kostenlos nutzbar und pflichtenfrei sind nicht dasselbe.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — die formale Definition, die eine Lizenz erfüllen muss, um als OSI-zertifizierte Open Source zu gelten.',
          '[GNU-Projekt — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — die eigenen Erklärungen der Free Software Foundation zu GPL, LGPL und AGPL.',
          '[Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — vollständiger Lizenztext.',
          '[MIT-Lizenztext (Open Source Initiative)](https://opensource.org/license/mit) — vollständiger Lizenztext.',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — eigene Bedingungen und Begründung der SSPL.',
          '[Business Source License FAQ](https://mariadb.com/bsl-faq-mariadb/) — Erklärung, wie die BSL/BUSL-Umwandlung funktioniert, von einem prominenten Anwender der Lizenz.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist MIT oder Apache-2.0 die bessere Lizenz für mein Projekt?',
            a: 'Beide sind permissiv mit kaum Pflichten für Nutzer. Der wesentliche praktische Unterschied bei Apache-2.0 ist die explizite Patentgewährung, die für Organisationen mit Patentportfolios wichtiger ist; MIT ist kürzer und bei kleinen Einzelprojekten etwas verbreiteter. Keine der beiden schränkt kommerzielle Nutzung ein oder verlangt, dass Sie darauf aufbauende Software offenlegen.',
          },
          {
            q: 'Bedeutet die Nutzung von AGPL-3.0-Software, dass mein ganzes Unternehmen Open Source werden muss?',
            a: 'Nein. Die Pflicht bei AGPL-3.0 greift bei Verteilung oder Anbieten einer veränderten Version des lizenzierten Codes über ein Netzwerk — die interne Nutzung eines unveränderten AGPL-Tools oder seine Einbindung als Komponente, deren Quellcode Sie nicht verändern, zieht nicht automatisch unabhängige Teile Ihrer eigenen Codebasis unter die Lizenz. Relevant wird es genau dann, wenn Sie den AGPL-Code selbst verändern und diese veränderte Version Nutzern anbieten.',
          },
          {
            q: 'Ist "Source-Available" dasselbe wie Open Source?',
            a: 'Nein, und der Unterschied ist relevant. Open Source ist eine Zertifizierung der Open Source Initiative nach einer konkreten Definition, die auch das Recht zur Weitergabe und Veränderung ohne Einschränkung kommerzieller Nutzung umfasst. Source-Available-Lizenzen wie BSL und SSPL erlauben das Lesen des Codes, schränken aber bestimmte kommerzielle Nutzungen ein, meist konkurrierende gehostete Angebote — sie erfüllen die Open-Source-Definition der OSI nicht, auch wenn sich ein Projekt selbst als Open Source bezeichnet.',
          },
          {
            q: 'Darf ich eine "kostenlose" proprietäre KI-App für mein Unternehmen nutzen?',
            a: 'In der Regel ja, gemäß den Nutzungsbedingungen des Anbieters, aber Sie gehen ein Abhängigkeitsrisiko ein: Ohne Quellcode-Zugang können Sie nicht prüfen, was die Software mit Ihren Daten macht, kein selbst gehostetes verändertes Exemplar betreiben und nicht garantieren, dass der Anbieter das Produkt kostenlos, sicher und gepflegt hält. Lesen Sie die Nutzungsbedingungen, nicht nur den Preis.',
          },
          {
            q: 'Funktionieren KI-Modell-Lizenzen genauso wie Softwarelizenzen?',
            a: 'Nicht ganz. Modell-Lizenzen sind jünger und weniger standardisiert. Manche Veröffentlichungen nutzen eine Standard-Softwarelizenz direkt für die Gewichte; andere eine eigens dafür geschaffene Lizenz wie RAIL/OpenRAIL mit einer konkreten Liste verbotener Nutzungen; wieder andere eine eigene Community-Lizenz mit Nutzungsgrößenschwellen und Anwendungsbeschränkungen. Prüfen Sie stets die konkrete Lizenz der heruntergeladenen Modellgewichte, getrennt von der Lizenz des Codes, mit dem Sie sie ausführen.',
          },
          {
            q: 'Warum wechseln manche Open-Source-Projekte später zu einer restriktiveren Lizenz?',
            a: 'Der meistgenannte Auslöser ist ein großer Cloud-Anbieter, der das Projekt als konkurrierenden gehosteten Dienst anbietet, ohne zur Entwicklung beizutragen — der Wechsel zu einer Source-Available-Lizenz (BSL, SSPL) oder das Hinzufügen einer Beschränkung wie der Commons Clause erhält die Sichtbarkeit und weitgehende Nutzbarkeit des Codes, blockiert aber diese spezifische konkurrierende Nutzung. Dieses Muster wiederholt sich in der Softwarebranche.',
          },
          {
            q: 'Was sollte ein Startup vor dem Aufbau eines kommerziellen Produkts auf einem Open-Source-Tool prüfen?',
            a: 'Die tatsächliche Lizenzdatei lesen, nicht eine Landingpage; klären, ob der zugrunde liegende Code verändert werden soll, da das typischerweise Copyleft- und AGPL-3.0-Pflichten auslöst; bei KI-Modellen auf eine Nutzungsgrößen- oder Anwendungsschwelle prüfen; und eine Rechtsprüfung einholen, bevor das Tool zur Kerninfrastruktur des eigenen Produkts wird.',
          },
          {
            q: 'Ist dieser Artikel Rechtsberatung?',
            a: 'Nein. Dieser Artikel erklärt, wie gängige Lizenzmechanismen in der Regel funktionieren, allgemeinverständlich und zur Orientierung. Lizenzbedingungen variieren nach Projekt und Version, die Auslegung kann von der Rechtsordnung abhängen, und die Folgen eines Fehlers skalieren mit dem Grad der Kommerzialität Ihres Einsatzes — konsultieren Sie einen qualifizierten Anwalt für ein konkretes Tool, einen konkreten Einsatz oder eine Geschäftsentscheidung.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Das vollständige Local-LLM-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory) — über 160 lokale LLM-Tools mit der jeweiligen Lizenz.',
          '[Dify AI Workflow Builder Review](/de/power-local-llm/dify-ai-workflow-builder-review) — eine Review, die die Lizenz nennt; nutzen Sie diesen Leitfaden, um zu verstehen, was diese Lizenz für Ihren Einsatz bedeutet.',
          '[KI-generierte Inhalte und IP-Risiko](/de/power-local-llm/ai-generated-content-ip-risk) — die urheberrechtlichen Fragen, die neben der Lizenzierung stehen, wenn Sie KI-generierte Ausgaben kommerziell einsetzen.',
          '[Agentic-AI-Sicherheit: Identität & Zugriff](/de/power-local-llm/agentic-ai-security-identity-access) — Sicherheits- und Governance-Aspekte für selbst gehostete KI-Einsätze, ein Begleitthema zur Lizenz-Compliance.',
          '[DSGVO-konformes lokales RAG für sensible Dokumente](/de/power-local-llm/local-rag-for-private-business-data) — Lizenzrisiko und Datenresidenz-/Compliance-Risiko sind getrennte Checklisten; dieser Leitfaden behandelt die Compliance-Seite.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'KI- und Open-Source-Softwarelizenzen erklärt: MIT vs. Apache vs. GPL vs. AGPL vs. proprietär',
      description: 'Open-Source- und KI-Tool-Lizenzen erklärt: permissiv, Copyleft, AGPL, Source-Available und KI-Modell-Lizenzen — was Sie vor dem Einsatz jedes Tools prüfen sollten.',
      url: 'https://www.promptquorum.com/de/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'de',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, Startup-Gründer und technische Entscheider' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com/de](https://www.promptquorum.com/de)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/de/power-local-llm](https://www.promptquorum.com/de/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'KI- und Open-Source-Softwarelizenzen erklärt', item: '[www.promptquorum.com/de/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/de/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
  fr: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'Licences logicielles IA et open source expliquées : MIT vs Apache vs GPL vs AGPL vs propriétaire',
    seoTitle: 'Licences IA & open source expliquées (MIT, GPL, AGPL)',
    intro:
      'Chaque outil de LLM local, framework RAG et assistant de codage IA présenté sur ce site est distribué sous une licence — MIT, Apache-2.0, AGPL-3.0, une licence source-available, ou une application de bureau "gratuite" fermée — et cette licence détermine bien plus si vous pouvez réellement utiliser l\'outil qu\'un comparatif de fonctionnalités. Ce guide explique les familles de licences que vous rencontrerez dans les logiciels open source et les modèles d\'IA : ce que chacune permet et exige, d\'où elle vient, à qui elle s\'adresse, et ce qu\'il faut vérifier avant de déployer un outil sous cette licence — pour un projet personnel, un produit de startup, un système d\'entreprise interne ou un déploiement client que vous revendez. Il s\'agit d\'une taxonomie, pas d\'un tableau de correspondance — il ne vous dira pas quelle licence utilise tel outil déjà passé en revue (voir la review concernée ou le [répertoire logiciel](/fr/power-local-llm/local-llm-software-directory) pour cela), mais il explique ce que cette licence signifie réellement une fois que vous la connaissez.',
    metaDescription:
      'Licences open source et IA expliquées : permissive, copyleft, AGPL, source-available et licences de modèles IA — ce qu\'il faut vérifier avant de déployer un outil.',
    twitterDescription:
      'MIT, Apache-2.0, GPL, AGPL, source-available et licences de modèles IA expliquées simplement — ce que chacune exige, à qui elle convient, et quoi vérifier avant de déployer.',
    audience:
      'Développeurs, fondateurs de startup et décideurs techniques choisissant la licence open source ou IA adaptée à leur projet, produit ou déploiement.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'types de licences logicielles open source',
    targetKeywords: [
      'types de licences open source expliquées',
      'licence MIT vs Apache vs GPL',
      'qu\'est-ce que la licence AGPL',
      'licence source-available expliquée',
      'licence modèle IA open weights',
    ],
    leadAnswerBlock:
      '**Les licences open source et IA se répartissent en cinq familles pratiques — permissive (MIT, Apache-2.0, BSD), copyleft (GPL, LGPL), copyleft réseau (AGPL-3.0), source-available (BSL, SSPL) et propriétaire/gratuite fermée — plus un groupe distinct de licences spécifiques aux modèles d\'IA (RAIL, licences communautaires open-weight) avec leurs propres restrictions d\'usage.** Celle qui vous concerne dépend de si vous êtes un particulier, une startup lançant un produit commercial, ou une entreprise intégrant un outil en interne — pas de quelle licence est "meilleure".',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la différence entre les licences MIT, Apache-2.0, GPL et AGPL ?',
        answer:
          'MIT et Apache-2.0 sont permissives — vous pouvez utiliser, modifier et revendre le code avec quasiment aucune obligation hormis conserver la mention de licence. GPL est copyleft — si vous distribuez une version modifiée, vous devez publier vos modifications sous la même licence. AGPL-3.0 étend cette obligation aux logiciels que vous exploitez uniquement comme service réseau, comblant la brèche que GPL laisse ouverte pour le SaaS. Les licences propriétaires et source-available (BSL, SSPL) sortent entièrement de la définition open source et restreignent certains usages commerciaux, le plus souvent pour ne pas concurrencer l\'offre hébergée du titulaire de la licence.',
        bullets: [
          'MIT et Apache-2.0 (permissive) : utiliser, modifier, revendre librement — seule obligation : conserver la mention de licence/copyright',
          'GPL et LGPL (copyleft) : distribuer une version modifiée exige de publier vos changements sous la même licence',
          'AGPL-3.0 (copyleft réseau) : la même obligation s\'applique même si vous ne faites qu\'héberger le logiciel comme service, sans le distribuer',
          'BSL/SSPL (source-available) : le code source est visible mais l\'usage est restreint — généralement pas de l\'open source certifié OSI malgré le marketing',
          'Les licences de modèles IA (RAIL, licences communautaires open-weight) ajoutent souvent des restrictions d\'usage au-delà d\'une licence de code standard',
          'Lisez toujours le fichier LICENSE réel du dépôt, pas l\'affirmation d\'une page marketing, avant de construire sur un outil',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Repères rapides', anchor: '#quick-facts' },
      { label: 'Licences permissives : MIT, Apache-2.0, BSD', anchor: '#permissive-licenses' },
      { label: 'Copyleft : la famille GPL et LGPL', anchor: '#copyleft-gpl' },
      { label: 'Comment AGPL-3.0 comble la brèche du SaaS', anchor: '#agpl-saas-loophole' },
      { label: 'Licences source-available et "fair-code"', anchor: '#source-available-fair-code' },
      { label: 'Licences propriétaires et freemium "gratuites"', anchor: '#proprietary-freemium' },
      { label: 'Licences de modèles IA : RAIL et open weights', anchor: '#ai-model-licenses' },
      { label: 'Qui doit se soucier de quelle licence ?', anchor: '#who-should-care' },
      { label: 'Checklist avant d\'adopter un outil', anchor: '#pre-adoption-checklist' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Pour aller plus loin', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Les familles de licences se regroupent en cinq catégories pratiques : permissive, copyleft, copyleft réseau, source-available et propriétaire/fermée — plus un groupe distinct de licences spécifiques aux modèles d\'IA.** Savoir dans quelle catégorie se situe un outil en dit plus sur votre droit de l\'utiliser que n\'importe quelle liste de fonctionnalités.',
          '**Les licences permissives (MIT, Apache-2.0, BSD) n\'imposent presque aucune obligation.** Vous pouvez intégrer le code dans un produit commercial fermé sans jamais publier votre propre code source.',
          '**Les licences copyleft (GPL, LGPL) sont "virales" dans un sens précis et étroit.** Distribuer une version modifiée du code couvert exige de publier vos changements sous la même licence — l\'obligation ne s\'étend pas à un logiciel distinct qui s\'exécute simplement à côté.',
          '**AGPL-3.0 comble la brèche que GPL laisse ouverte pour les services hébergés.** Si vous modifiez du code sous AGPL et ne le proposez que via un réseau (SaaS), vous devez quand même publier votre code source modifié — ce que GPL seule n\'exige pas.',
          '**Les licences source-available comme BSL et SSPL ne sont pas de l\'open source certifié OSI, quoi qu\'en dise une page d\'accueil.** Elles restreignent des usages commerciaux précis, généralement pour empêcher un fournisseur cloud de revendre le projet comme service hébergé concurrent.',
          '**Le fichier de licence du dépôt est la seule source fiable — pas une page tarifaire, un badge README ou une affirmation marketing.** Ce guide est une information générale, pas un conseil juridique ; consultez un avocat pour un déploiement où les conditions de licence affectent significativement votre activité.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les licences open source et IA se répartissent en cinq familles pratiques — permissive, copyleft, copyleft réseau (AGPL), source-available et propriétaire — chacune imposant des obligations différentes sur l\'usage, la modification et la redistribution du logiciel.',
          },
          {
            type: 'plain-terms',
            text: 'Une licence logicielle est le règlement qui définit ce que vous avez le droit de faire avec le code de quelqu\'un d\'autre. Les licences permissives autorisent presque tout ; les licences copyleft exigent de partager vos modifications ; les licences source-available permettent de consulter le code mais limitent son usage commercial.',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Repères rapides',
        items: [
          '**MIT** est la licence permissive la plus courte et la plus répandue — environ 170 mots, sans clause de brevet.',
          '**Apache-2.0** ajoute une concession de brevet explicite que MIT n\'a pas, ce qui explique la préférence de nombreuses entreprises pour les projets d\'origine corporate.',
          '**GPL** n\'exige la divulgation du code source qu\'en cas de distribution du logiciel ; AGPL-3.0 étend cette obligation à l\'exploitation comme service réseau.',
          '**L\'"open source" certifié OSI** est une certification précise de l\'Open Source Initiative ; "source-available" et "fair-code" sont des termes marketing pour des licences qui ne répondent pas à cette définition.',
          '**Les licences de modèles IA forment une catégorie distincte des licences de code.** Le code d\'un outil peut être sous Apache-2.0 alors que les poids du modèle qu\'il télécharge portent des conditions entièrement différentes, souvent plus restrictives.',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: 'Que sont les licences permissives ? MIT, Apache-2.0 et BSD',
        content:
          '**Les licences permissives autorisent l\'usage, la modification et la redistribution du code — y compris dans un produit commercial fermé — avec quasiment aucune obligation hormis préserver la mention de copyright.** Elles constituent la famille de licences la moins restrictive et le choix par défaut des projets d\'infrastructure visant l\'adoption la plus large possible, y compris par des entreprises qui ne publieront jamais une ligne de leur propre code.',
        items: [
          '**La licence MIT** est née au Massachusetts Institute of Technology comme moyen de diffuser des logiciels universitaires avec un minimum de restrictions. Elle compte environ 170 mots, accorde des droits quasi illimités, et exige seulement que le texte original de copyright et de licence reste attaché à toute copie ou portion substantielle redistribuée.',
          '**La licence Apache 2.0** provient de l\'Apache Software Foundation, créée pour offrir aux contributeurs corporate et communautaires un cadre juridique commun pour de grands projets collaboratifs. Contrairement à MIT, elle inclut une concession de brevet explicite — les contributeurs concèdent aux utilisateurs leurs droits de brevet couvrant le code — ce qui explique la préférence de nombreuses entreprises détentrices de portefeuilles de brevets.',
          '**Les licences BSD** (2 clauses et 3 clauses) sont nées à l\'Université de Californie à Berkeley pour le système d\'exploitation Berkeley Software Distribution. La variante à 3 clauses ajoute une clause de non-approbation interdisant d\'utiliser le nom des auteurs originaux pour promouvoir un produit dérivé sans autorisation.',
          '**Effet pratique pour les utilisateurs :** vous pouvez forker, modifier, intégrer et vendre un outil sous licence permissive dans un produit fermé sans jamais publier votre propre code source — le seul risque réel est d\'omettre la mention de copyright/licence requise dans votre distribution.',
          '**Exemples réels tirés des reviews de ce site :** Ollama et llama.cpp sont tous deux sous MIT ; vLLM est sous Apache-2.0 — les trois peuvent être intégrés dans un produit commercial sans déclencher d\'obligation de divulgation du code source.',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: 'Qu\'est-ce que le copyleft ? La famille GPL et LGPL',
        content:
          '**Les licences copyleft exigent que si vous distribuez une version modifiée du code couvert, vous publiiez vos modifications sous la même licence.** L\'obligation porte sur le code lui-même, pas sur tout programme qui s\'exécute simplement à côté — le qualificatif courant de "licence virale" exagère la portée réelle de l\'obligation.',
        items: [
          '**La GNU General Public License (GPL)** a été rédigée par Richard Stallman et la Free Software Foundation comme licence du projet GNU, fondée sur l\'idée que la liberté logicielle doit se transmettre en aval — quiconque reçoit une copie modifiée doit avoir les mêmes droits que l\'auteur original.',
          '**GPL v2 et GPL v3** diffèrent surtout par le langage relatif aux brevets et les dispositions de compatibilité ; la v3 a ajouté des clauses explicites de rétorsion en matière de brevets et anti-tivoïsation (empêchant un matériel de bloquer l\'exécution d\'un logiciel modifié que vous avez pourtant le droit légal d\'exécuter).',
          '**La GNU Lesser General Public License (LGPL)** assouplit GPL spécifiquement pour les bibliothèques — vous pouvez lier une bibliothèque LGPL à une application propriétaire sans ouvrir le code de l\'application elle-même, tant que le composant bibliothèque reste remplaçable et que son propre code source reste disponible.',
          '**Ce qui déclenche réellement l\'obligation :** distribuer une copie modifiée du code sous GPL. Le simple usage interne d\'un logiciel GPL non modifié, ou l\'exécution d\'un logiciel propriétaire sur un système d\'exploitation sous GPL, ne place pas automatiquement votre propre code sous GPL.',
          '**Qui doit être prudent :** une startup prévoyant de forker et modifier un outil GPL comme cœur d\'un produit commercial a besoin d\'un plan — soit ouvrir ces modifications, soit éviter le fork ; une entreprise se contentant d\'exécuter en interne un outil GPL non modifié n\'a pas cette obligation.',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'Comment AGPL-3.0 comble la brèche du SaaS',
        content:
          '**La GNU Affero General Public License (AGPL-3.0) ajoute une exigence que GPL n\'a pas : si vous modifiez du code couvert par AGPL et le rendez accessible à des utilisateurs via un réseau, vous devez leur proposer le code source modifié, même si vous ne distribuez jamais physiquement une copie du logiciel.** C\'est la caractéristique déterminante de cette famille de licences, et celle qui surprend le plus les équipes supposant que "nous ne le distribuons jamais, nous l\'hébergeons seulement" est une lecture sûre.',
        items: [
          '**La brèche comblée :** sous GPL seule, exploiter une version modifiée comme service web hébergé ne constitue pas une "distribution" au sens juridique que déclenche la licence — une entreprise pouvait prendre du code GPL, le modifier, ne l\'offrir que comme produit SaaS, et n\'avoir jamais à publier les modifications. Ce phénomène est devenu connu de manière informelle comme la "brèche ASP" (application service provider) ou "brèche SaaS".',
          '**AGPL-3.0 a été rédigée spécifiquement pour combler cette brèche** en ajoutant une clause d\'interaction réseau : proposer la fonctionnalité du logiciel modifié à des utilisateurs via un réseau déclenche la même obligation de mise à disposition du code source que la distribution d\'une copie physique.',
          '**Pourquoi cela compte pour l\'hébergement et la revente :** une agence ou un hébergeur qui prend un outil sous AGPL, le modifie et l\'offre à des clients comme service hébergé doit rendre le code source modifié accessible à ces utilisateurs — l\'exécuter sans modification ne déclenche aucune obligation de ce type.',
          '**Exemples réels tirés des reviews de ce site :** Jan, KoboldCpp, SillyTavern et text-generation-webui sont sous AGPL-3.0 — sans problème pour un auto-hébergement non modifié à usage personnel ou interne ; la question change radicalement dès que vous en modifiez un et revendez un accès hébergé.',
          '**Ceci est une explication générale du fonctionnement du mécanisme de licence, pas un conseil juridique** — savoir si un déploiement précis constitue un "proposer via un réseau" au sens exact d\'AGPL-3.0 est une question à poser à un avocat examinant votre architecture spécifique.',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: 'Que sont les licences source-available et "fair-code" ?',
        content:
          '**Les licences source-available permettent à quiconque de lire le code mais restreignent des usages commerciaux précis, le plus souvent proposer le logiciel comme service hébergé concurrent.** Elles sont fréquemment présentées comme "open source", mais des licences comme la Business Source License (BSL/BUSL) et la Server Side Public License (SSPL) ne sont pas approuvées par l\'Open Source Initiative et ne répondent pas à sa définition de l\'open source.',
        items: [
          '**La Business Source License (BSL, aussi appelée BUSL)** accorde d\'emblée un accès au code source et de larges droits d\'usage, avec une date future définie à laquelle la licence bascule vers une licence réellement open source (souvent Apache-2.0 ou une licence permissive similaire) — jusqu\'à cette bascule, une restriction d\'usage commercial s\'applique, généralement destinée à empêcher une offre hébergée concurrente.',
          '**La Server Side Public License (SSPL)**, créée par MongoDB, exige que quiconque propose le logiciel comme service ouvre également l\'intégralité de la pile de service construite autour — une obligation bien plus large que celle d\'AGPL-3.0, délibérément conçue pour rendre l\'hébergement commercial impraticable pour un fournisseur cloud concurrent.',
          '**La Commons Clause** est une restriction additionnelle superposée à une licence de base autrement permissive ou copyleft, interdisant spécifiquement de vendre le logiciel ou de le proposer comme service hébergé payant, tout en autorisant l\'usage et la modification libres.',
          '**Pourquoi des projets adoptent ces licences :** un projet qui démarre sous une licence entièrement ouverte puis adopte une licence source-available réagit typiquement à un grand fournisseur cloud proposant le projet comme service hébergé sans contribuer en retour — basculer vers une licence source-available permet au mainteneur de conserver l\'essentiel de l\'ouverture tout en bloquant cet usage concurrent précis.',
          '**Effet pratique pour les utilisateurs :** vous pouvez généralement lire, auto-héberger et modifier un logiciel source-available pour un usage interne sans problème ; la restriction s\'applique lorsque vous tentez de le revendre comme produit hébergé concurrençant l\'offre du titulaire de la licence — lisez la clause d\'usage commercial précise, car les formulations varient fortement selon les projets.',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: 'Que signifient les licences propriétaires et freemium "gratuites" ?',
        content:
          '**Un outil étiqueté "gratuit" sur sa page de téléchargement n\'est pas forcément open source — de nombreuses applications de bureau IA populaires sont des logiciels propriétaires à code fermé, distribués sans frais, sans aucune licence vous accordant le droit de consulter, modifier ou redistribuer le code sous-jacent.** Cette distinction compte surtout pour la continuité : un éditeur propriétaire peut modifier ses tarifs, ajouter des restrictions ou abandonner le produit, sans que vous ayez de droit légal de maintenir un fork indépendant.',
        items: [
          '**"Gratuit (fermé)" dans un tableau comparatif signifie logiciel propriétaire sans frais.** Vous pouvez utiliser l\'application compilée selon les conditions d\'utilisation de l\'éditeur, mais vous n\'avez aucun accès au code source ni aucun droit de le modifier, l\'auditer ou le forker.',
          '**Le compromis principal face aux alternatives open source :** une application propriétaire gratuite est souvent plus soignée et plus simple à installer, un éditeur unique contrôlant toute l\'expérience utilisateur — mais vous dépendez entièrement de sa volonté continue de la maintenir gratuite, sécurisée et à jour.',
          '**Risque de dépendance à l\'éditeur (vendor lock-in) :** sans accès au code source, vous ne pouvez pas auto-héberger une version modifiée, auditer précisément ce que l\'application fait de vos données, ni poursuivre le développement si l\'éditeur cesse la maintenance, change son modèle tarifaire ou ferme.',
          '**Qui doit être le plus attentif :** quiconque construit un workflow ou un processus métier autour d\'un outil propriétaire gratuit devrait disposer d\'un plan de repli documenté — la même diligence que pour toute dépendance à un fournisseur, car "gratuit" ne signifie ni "permanent" ni "garanti".',
          '**Ce n\'est pas équivalent à source-available :** les licences source-available (BSL, SSPL) permettent au moins de lire et d\'auditer le code même si l\'usage commercial est restreint ; un outil totalement propriétaire n\'offre ni le code ni ces garanties.',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: 'Comment fonctionnent les licences de modèles IA ? Open weights, RAIL et restrictions d\'usage',
        content:
          '**La licence d\'un modèle est un document juridique distinct de la licence couvrant le logiciel qui l\'exécute — le code d\'un outil peut être sous Apache-2.0 alors que les poids du modèle qu\'il télécharge portent une licence différente, parfois plus restrictive.** Les licences de modèles d\'IA sont plus récentes et moins standardisées que les licences logicielles, et les conditions varient fortement d\'une publication de modèle à l\'autre.',
        items: [
          '**Poids entièrement permissifs :** certaines familles de modèles publient leurs poids sous une licence logicielle permissive standard (souvent Apache-2.0), accordant les mêmes droits d\'usage étendus que cette licence confère au code, y compris un usage commercial sans restriction de domaine.',
          '**Les licences RAIL et OpenRAIL** (Responsible AI License) sont nées avec la publication du modèle BLOOM par BigScience et ont été conçues conjointement avec des chercheurs en droit pour associer accès ouvert et liste précise d\'usages interdits — interdisant généralement la génération de désinformation, une prise de décision discriminatoire ou du contenu contraire à la loi, tout en autorisant par ailleurs un large usage commercial.',
          '**Licences "communautaires" ou "open-weight" sur mesure :** plusieurs grands fournisseurs de modèles publient leurs poids sous une licence taillée sur mesure qui ressemble à une licence ouverte mais ajoute des conditions de domaine d\'usage. L\'exemple le plus cité est la licence communautaire que Meta attache à ses poids de modèles publiés ouvertement, qui accorde un large usage gratuit mais ajoute un seuil d\'échelle d\'usage au-delà duquel un accord commercial séparé est requis, avec des restrictions d\'usage acceptable.',
          '**Ce qu\'il faut vérifier précisément :** si l\'usage commercial est autorisé du tout, s\'il existe un seuil d\'échelle d\'usage ou de revenu modifiant les conditions, ce qu\'interdit la politique d\'usage acceptable, et si la licence restreint l\'usage des sorties du modèle pour entraîner un modèle concurrent — une restriction apparue dans plusieurs licences spécifiques à des modèles et sans équivalent dans les licences logicielles standards.',
          '**Ceci n\'est pas un conseil juridique** — les conditions de licence des modèles changent d\'une publication à l\'autre chez un même fournisseur ; vérifiez donc le texte exact de licence attaché aux poids de modèle précis que vous comptez déployer plutôt que de supposer une continuité avec une publication antérieure de la même organisation.',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: 'Qui doit se soucier de quelle licence ?',
        content:
          '**Une licence sans enjeu pour un particulier peut représenter un vrai risque pour une startup ou une agence.** Les mêmes conditions de licence s\'appliquent à tous, mais les conséquences d\'une obligation déclenchée sont proportionnelles au caractère commercial et public de votre usage.',
        columns: ['Qui vous êtes', 'Ce qui compte le plus', 'Ce qu\'il faut faire'],
        rows: [
          {
            'Qui vous êtes': 'Particulier / usage personnel',
            'Ce qui compte le plus': 'Presque toute licence convient — vous ne distribuez ni n\'hébergez pour des tiers',
            'Ce qu\'il faut faire': 'Vérifiez que vous ne redistribuez pas publiquement du code modifié si l\'outil est copyleft',
          },
          {
            'Qui vous êtes': 'Startup construisant un produit commercial sur un outil',
            'Ce qui compte le plus': 'Le copyleft, et surtout AGPL-3.0, peut vous forcer à ouvrir vos propres ajouts',
            'Ce qu\'il faut faire': 'Vérifiez la licence de base avant de bâtir votre architecture sur un outil que vous comptez modifier et vendre',
          },
          {
            'Qui vous êtes': 'Entreprise intégrant un outil en interne',
            'Ce qui compte le plus': 'Les obligations copyleft se déclenchent à la distribution/l\'hébergement, pas au simple usage interne — mais l\'échelle change le risque',
            'Ce qu\'il faut faire': 'Obtenez une revue juridique avant qu\'un outil copyleft non modifié ne devienne une infrastructure centrale',
          },
          {
            'Qui vous êtes': 'Agence ou freelance revendant des déploiements',
            'Ce qui compte le plus': 'AGPL-3.0 plus modification plus hébergement pour un client signifie souvent publier le code source modifié',
            'Ce qu\'il faut faire': 'Vérifiez si vous modifiez réellement le code, ou si vous ne faites que le configurer/l\'héberger sans modification',
          },
          {
            'Qui vous êtes': 'Toute personne préoccupée par la dépendance à un éditeur',
            'Ce qui compte le plus': 'Les outils propriétaires "gratuits" et source-available peuvent changer de conditions, ajouter des frais ou fermer',
            'Ce qu\'il faut faire': 'Préférez une alternative permissive ou copyleft si l\'indépendance à long terme compte plus que la finition',
          },
          {
            'Qui vous êtes': 'Équipes soucieuses du RGPD évaluant la résidence des données',
            'Ce qui compte le plus': 'Le risque de licence est un axe distinct du risque de conformité — une licence permissive ne règle pas la résidence des données',
            'Ce qu\'il faut faire': 'Évaluez les conditions de licence et les exigences de résidence des données comme deux checklists séparées',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: 'Checklist avant d\'adopter un outil : 7 points à vérifier',
        content:
          '**Vérifier la licence d\'un outil prend quelques minutes et évite le type de surprise juridique bien plus coûteuse à résoudre après le lancement d\'un produit.** Parcourez ces sept vérifications avant de vous engager à construire sur un outil open source ou IA.',
        numberedItems: [
          {
            title: 'Lire le fichier LICENSE réel du dépôt',
            whyItMatters: 'L\'affirmation "open source" d\'une page d\'accueil peut relever du marketing, pas d\'un fait juridique — le fichier LICENSE (ou NOTICE/COPYING) du dépôt source est le document faisant foi, pas un badge ou une page tarifaire.',
          },
          {
            title: 'Vérifier si la licence a récemment changé',
            whyItMatters: 'Certains projets rebasculent d\'une licence permissive ou copyleft vers une licence source-available après avoir gagné en traction commerciale — ce schéma s\'est répété dans l\'industrie logicielle à mesure que des fournisseurs cloud hébergeaient des projets open source populaires sans contribuer en retour. Vérifiez l\'historique de licence du dépôt, pas seulement le fichier actuel.',
          },
          {
            title: 'Vérifier si la licence est réellement certifiée OSI, si cela compte pour vous',
            whyItMatters: 'Des licences source-available comme BSL et SSPL sont couramment présentées comme open source mais ne figurent pas sur la liste approuvée par l\'Open Source Initiative — si la certification OSI est une exigence pour votre cas d\'usage, vérifiez la liste directement plutôt que de faire confiance à la description d\'un projet.',
          },
          {
            title: 'Lire les clauses d\'usage commercial et de domaine d\'usage spécifiques aux modèles IA',
            whyItMatters: 'La licence d\'un modèle peut autoriser largement l\'usage commercial, le restreindre au-delà d\'un seuil d\'échelle d\'usage, ou interdire purement et simplement certaines applications — ces clauses sortent du langage habituel des licences logicielles et sont faciles à manquer si vous ne vérifiez que la licence du code.',
          },
          {
            title: 'Déterminer si l\'auto-hébergement ou l\'hébergement SaaS change vos obligations',
            whyItMatters: 'Sous AGPL-3.0, proposer un logiciel modifié via un réseau déclenche la même obligation de divulgation que la distribution d\'une copie sous GPL — confirmez dans quelle catégorie tombe votre déploiement prévu avant de modifier le code.',
          },
          {
            title: 'Vérifier l\'existence d\'un accord de licence de contributeur (CLA) en cas de contribution',
            whyItMatters: 'Un CLA peut accorder au mainteneur du projet des droits plus étendus sur votre contribution que ceux que la licence du projet accorde aux utilisateurs — pertinent surtout si vous comptez soumettre du code au projet, pas si vous ne faites que le consommer.',
          },
          {
            title: 'Vérifier les restrictions de marque séparément de la licence du code',
            whyItMatters: 'Une licence de code permissive ou copyleft n\'accorde pas automatiquement de droits sur le nom ou le logo du projet — forker et rebrander un outil peut être bloqué par le droit des marques même quand la licence du code autoriserait par ailleurs le fork.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes',
        content:
          '**La plupart des problèmes liés aux licences viennent du fait de ne pas consulter le document source — pas d\'une mauvaise compréhension d\'une licence effectivement lue.**',
        items: [
          'Faire confiance à l\'affirmation "open source" d\'une page marketing au lieu de lire le fichier LICENSE réel du dépôt.',
          'Supposer qu\'AGPL-3.0 ne concerne que la distribution d\'une copie du logiciel — elle s\'applique aussi à proposer du code modifié comme service hébergé.',
          'Traiter la licence du code d\'un modèle et la licence de ses poids comme un seul et même document — elles diffèrent fréquemment.',
          'Forker et rebrander un outil sans vérifier les restrictions de marque, distinctes de la licence du code.',
          'Supposer qu\'une licence permissive au lancement d\'un projet le reste après une relicenciation ultérieure — vérifiez la licence actuelle, pas celle dont vous vous souvenez.',
          'Se dispenser d\'une revue juridique pour un outil copyleft ou source-available parce qu\'il est "gratuit" — gratuit à l\'usage et sans obligation ne sont pas la même chose.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — la définition formelle qu\'une licence doit remplir pour être certifiée open source par l\'OSI.',
          '[Projet GNU — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — les explications de la Free Software Foundation sur GPL, LGPL et AGPL.',
          '[Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — texte intégral de la licence.',
          '[Texte de la licence MIT (Open Source Initiative)](https://opensource.org/license/mit) — texte intégral de la licence.',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — les conditions et la justification propres à la SSPL.',
          '[FAQ de la Business Source License](https://mariadb.com/bsl-faq-mariadb/) — explication du fonctionnement de la conversion BSL/BUSL par un adoptant notable de la licence.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'MIT ou Apache-2.0 : quelle est la meilleure licence pour mon projet ?',
            a: 'Les deux sont permissives, avec quasiment aucune obligation pour les utilisateurs. La principale différence pratique d\'Apache-2.0 est une concession de brevet explicite, plus pertinente pour les organisations dotées de portefeuilles de brevets ; MIT est plus courte et légèrement plus répandue pour les petits projets individuels. Aucune des deux ne restreint l\'usage commercial ni n\'exige d\'ouvrir ce que vous construisez par-dessus.',
          },
          {
            q: 'Utiliser un logiciel sous AGPL-3.0 signifie-t-il que toute mon entreprise doit passer à l\'open source ?',
            a: 'Non. L\'obligation d\'AGPL-3.0 se déclenche lorsque vous distribuez ou proposez une version modifiée du code couvert via un réseau — utiliser en interne un outil AGPL non modifié, ou l\'appeler comme composant sans en modifier le code source, n\'entraîne pas des parties indépendantes de votre propre base de code sous cette licence. Cela devient pertinent précisément si vous modifiez le code AGPL lui-même et proposez cette version modifiée à des utilisateurs.',
          },
          {
            q: '"Source-available" est-il équivalent à l\'open source ?',
            a: 'Non, et la distinction compte. L\'open source est une certification de l\'Open Source Initiative fondée sur une définition précise qui inclut le droit de redistribuer et modifier sans restreindre l\'usage commercial. Les licences source-available comme BSL et SSPL permettent de lire le code mais restreignent des usages commerciaux précis, le plus souvent des offres hébergées concurrentes — elles ne répondent pas à la définition open source de l\'OSI même quand un projet se qualifie lui-même d\'open source.',
          },
          {
            q: 'Puis-je utiliser une application IA propriétaire "gratuite" pour mon activité ?',
            a: 'Généralement oui, selon les conditions d\'utilisation de l\'éditeur, mais vous assumez un risque de dépendance : sans accès au code source, impossible d\'auditer ce que le logiciel fait de vos données, aucun droit d\'auto-héberger une version modifiée, et aucune garantie que l\'éditeur maintienne le produit gratuit, sans restriction ou à jour. Lisez les conditions d\'utilisation, pas seulement le prix.',
          },
          {
            q: 'Les licences de modèles IA fonctionnent-elles comme les licences logicielles ?',
            a: 'Pas exactement. Les licences de modèles sont plus récentes et moins standardisées. Certaines publications utilisent une licence logicielle permissive standard directement appliquée aux poids ; d\'autres une licence conçue spécifiquement comme RAIL/OpenRAIL avec une liste précise d\'usages interdits ; d\'autres encore une licence communautaire sur mesure avec seuils d\'échelle d\'usage et restrictions de domaine. Vérifiez toujours la licence précise attachée aux poids de modèle téléchargés, séparément de la licence couvrant le code utilisé pour les exécuter.',
          },
          {
            q: 'Pourquoi certains projets open source basculent-ils plus tard vers une licence plus restrictive ?',
            a: 'Le facteur le plus souvent cité est un grand fournisseur cloud proposant le projet comme service hébergé concurrent sans contribuer en retour au développement — basculer vers une licence source-available (BSL, SSPL) ou ajouter une restriction comme la Commons Clause permet au mainteneur de garder le code visible et largement utilisable tout en bloquant cet usage concurrent précis. Ce schéma s\'est répété dans l\'industrie logicielle.',
          },
          {
            q: 'Que doit vérifier une startup avant de construire un produit commercial sur un outil open source ?',
            a: 'Lire le fichier de licence réel, pas une page d\'accueil ; déterminer si vous comptez modifier le code sous-jacent, ce qui déclenche typiquement les obligations copyleft et AGPL-3.0 ; vérifier un éventuel seuil d\'échelle d\'usage ou de domaine si un modèle d\'IA est impliqué ; et obtenir une revue juridique avant que l\'outil ne devienne une infrastructure centrale de votre produit.',
          },
          {
            q: 'Cet article constitue-t-il un conseil juridique ?',
            a: 'Non. Cet article explique en termes simples, à des fins d\'orientation, comment fonctionnent généralement les mécanismes de licence courants. Les conditions de licence varient selon le projet et la version, l\'interprétation peut dépendre de la juridiction, et les conséquences d\'une erreur sont proportionnelles au caractère commercial de votre déploiement — consultez un avocat qualifié pour un outil, un déploiement ou une décision d\'affaires précis.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Le répertoire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — plus de 160 outils de LLM local avec la licence de chaque entrée.',
          '[Review de Dify AI Workflow Builder](/fr/power-local-llm/dify-ai-workflow-builder-review) — une review qui nomme sa licence ; utilisez ce guide pour comprendre ce qu\'elle signifie pour votre déploiement.',
          '[Contenu généré par IA et risque de propriété intellectuelle](/fr/power-local-llm/ai-generated-content-ip-risk) — les questions de propriété intellectuelle qui accompagnent la licence lorsque vous exploitez commercialement des sorties générées par IA.',
          '[Sécurité de l\'IA agentique : identité et accès](/fr/power-local-llm/agentic-ai-security-identity-access) — considérations de sécurité et de gouvernance pour les déploiements d\'IA auto-hébergés, un enjeu complémentaire à la conformité des licences.',
          '[RAG local conforme au RGPD pour documents sensibles](/fr/power-local-llm/local-rag-for-private-business-data) — le risque de licence et le risque de résidence des données/conformité sont deux checklists distinctes ; ce guide couvre le volet conformité.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Licences logicielles IA et open source expliquées : MIT vs Apache vs GPL vs AGPL vs propriétaire',
      description: 'Licences open source et IA expliquées : permissive, copyleft, AGPL, source-available et licences de modèles IA — ce qu\'il faut vérifier avant de déployer un outil.',
      url: 'https://www.promptquorum.com/fr/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'fr',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs, fondateurs de startup et décideurs techniques' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com/fr](https://www.promptquorum.com/fr)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/fr/power-local-llm](https://www.promptquorum.com/fr/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'Licences logicielles IA et open source expliquées', item: '[www.promptquorum.com/fr/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/fr/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
  es: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'Licencias de software de IA y open source explicadas: MIT vs Apache vs GPL vs AGPL vs propietaria',
    seoTitle: 'Licencias de IA y open source explicadas (MIT, GPL, AGPL)',
    intro:
      'Cada herramienta de LLM local, framework RAG y asistente de codificación con IA reseñado en este sitio se distribuye bajo una licencia — MIT, Apache-2.0, AGPL-3.0, una licencia source-available o una app de escritorio "gratuita" cerrada — y esa licencia determina si realmente puedes usar la herramienta mucho más que cualquier comparación de funciones. Esta guía explica las familias de licencias que encontrarás en software open source y modelos de IA: qué permite y exige cada una, de dónde viene, para quién está pensada, y qué revisar concretamente antes de desplegar una herramienta bajo ella, ya sea un proyecto personal, un producto de startup, un sistema interno empresarial o un despliegue para un cliente que revendes. Es una taxonomía, no una tabla de referencia: no te dirá qué licencia usa una herramienta reseñada en particular (para eso, consulta la reseña o el [directorio de software](/es/power-local-llm/local-llm-software-directory)), pero sí explica qué significa realmente esa licencia una vez que la conoces.',
    metaDescription:
      'Licencias de software open source y de IA explicadas: permisivas, copyleft, AGPL, source-available y licencias de modelos de IA — qué revisar antes de usar cualquier herramienta.',
    twitterDescription:
      'MIT, Apache-2.0, GPL, AGPL, source-available y licencias de modelos de IA explicadas en términos claros — qué exige cada una, para quién es adecuada y qué revisar antes de desplegar.',
    audience:
      'Desarrolladores, fundadores de startups y responsables técnicos que eligen qué licencia open source o de IA se ajusta a su proyecto, producto o despliegue.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'tipos de licencias de software open source',
    targetKeywords: [
      'tipos de licencias open source explicadas',
      'licencia MIT vs Apache vs GPL',
      'qué es la licencia AGPL',
      'licencia source-available explicada',
      'licencia de modelo de IA open weights',
    ],
    leadAnswerBlock:
      '**Las licencias de software open source y de IA se dividen en cinco familias prácticas — permisiva (MIT, Apache-2.0, BSD), copyleft (GPL, LGPL), copyleft de red (AGPL-3.0), source-available (BSL, SSPL) y propietaria/gratuita cerrada — más un grupo aparte de licencias específicas para modelos de IA (RAIL, licencias comunitarias open-weight) con sus propias restricciones de uso.** Cuál te importa depende de si eres un hobbyista, una startup lanzando un producto comercial o una empresa integrando una herramienta internamente, no de cuál licencia es "mejor".',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la diferencia entre las licencias MIT, Apache-2.0, GPL y AGPL?',
        answer:
          'MIT y Apache-2.0 son permisivas: puedes usar, modificar y revender el código con casi ninguna obligación más allá de conservar el aviso de licencia. GPL es copyleft: si distribuyes una versión modificada, debes liberar tus cambios bajo la misma licencia. AGPL-3.0 extiende esa obligación al software que solo ejecutas como servicio de red, cerrando el vacío que GPL deja abierto para el SaaS. Las licencias propietarias y source-available (BSL, SSPL) quedan fuera por completo de la definición de open source y restringen usos comerciales concretos, casi siempre para no competir con la oferta alojada del titular de la licencia.',
        bullets: [
          'MIT y Apache-2.0 (permisiva): usar, modificar y revender libremente — la única obligación es conservar el aviso de licencia/copyright',
          'GPL y LGPL (copyleft): distribuir una versión modificada exige liberar tus cambios bajo la misma licencia',
          'AGPL-3.0 (copyleft de red): la misma obligación aplica aunque solo ejecutes el software como servicio alojado, sin distribuirlo',
          'BSL/SSPL (source-available): el código es visible pero el uso está restringido — normalmente no es open source aprobado por la OSI pese al marketing',
          'Las licencias de modelos de IA (RAIL, licencias comunitarias open-weight) suelen añadir restricciones de uso más allá de una licencia de código estándar',
          'Lee siempre el archivo LICENSE real del repositorio, no una afirmación de una landing page, antes de construir sobre una herramienta',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Licencias permisivas: MIT, Apache-2.0, BSD', anchor: '#permissive-licenses' },
      { label: 'Copyleft: la familia GPL y LGPL', anchor: '#copyleft-gpl' },
      { label: 'Cómo AGPL-3.0 cierra el vacío del SaaS', anchor: '#agpl-saas-loophole' },
      { label: 'Licencias source-available y "fair-code"', anchor: '#source-available-fair-code' },
      { label: 'Licencias propietarias y freemium "gratis"', anchor: '#proprietary-freemium' },
      { label: 'Licencias de modelos de IA: RAIL y open weights', anchor: '#ai-model-licenses' },
      { label: '¿A quién le importa cada licencia?', anchor: '#who-should-care' },
      { label: 'Checklist antes de adoptar una herramienta', anchor: '#pre-adoption-checklist' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Las familias de licencias se agrupan en cinco categorías prácticas: permisiva, copyleft, copyleft de red, source-available y propietaria/cerrada, más un grupo aparte de licencias específicas para modelos de IA.** Saber en qué categoría cae una herramienta dice más sobre si puedes usarla que cualquier lista de funciones.',
          '**Las licencias permisivas (MIT, Apache-2.0, BSD) casi no imponen obligaciones.** Puedes incorporar el código en un producto comercial cerrado y nunca publicar tu propio código fuente.',
          '**Las licencias copyleft (GPL, LGPL) son "virales" en un sentido concreto y limitado.** Distribuir una versión modificada del código exige liberar tus cambios bajo la misma licencia; la obligación no se extiende a software ajeno que simplemente se ejecuta al lado.',
          '**AGPL-3.0 cierra el vacío que GPL deja abierto para servicios alojados.** Si modificas código bajo AGPL y solo lo ofreces por red (SaaS), igualmente debes publicar tu código fuente modificado, algo que GPL por sí sola no exige.',
          '**Licencias source-available como BSL y SSPL no son open source aprobado por la OSI, sin importar lo que diga una landing page.** Restringen usos comerciales concretos, normalmente para impedir que un proveedor cloud revenda el proyecto como servicio alojado competidor.',
          '**El archivo de licencia del repositorio es la única fuente fiable — no una página de precios, una insignia del README ni una afirmación de marketing.** Esta guía es información general, no asesoría legal; consulta a un abogado si los términos de licencia afectan de forma significativa tu negocio.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Las licencias de software open source y de IA se dividen en cinco familias prácticas — permisiva, copyleft, copyleft de red (AGPL), source-available y propietaria — cada una con obligaciones distintas sobre cómo puedes usar, modificar y redistribuir el software.',
          },
          {
            type: 'plain-terms',
            text: 'Una licencia de software es el reglamento sobre lo que puedes hacer con el código de otra persona. Las licencias permisivas permiten casi todo; las copyleft exigen compartir tus cambios; las source-available dejan ver el código pero limitan su uso comercial.',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**MIT** es la licencia permisiva más corta y común — unas 170 palabras, sin cláusula de patentes.',
          '**Apache-2.0** añade una concesión de patente explícita que MIT no tiene, por lo que muchas empresas la prefieren para proyectos de origen corporativo.',
          '**GPL** exige divulgar el código fuente solo al distribuir el software; AGPL-3.0 extiende esa exigencia a ejecutarlo como servicio de red.',
          '**El "open source" aprobado por la OSI** es una certificación concreta de la Open Source Initiative; "source-available" y "fair-code" son términos de marketing para licencias que no cumplen esa definición.',
          '**Las licencias de modelos de IA son una categoría aparte de las licencias de código.** El código de una herramienta puede ser Apache-2.0 mientras que los pesos del modelo que descarga llevan condiciones totalmente distintas, a menudo más restrictivas.',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: '¿Qué son las licencias permisivas? MIT, Apache-2.0 y BSD',
        content:
          '**Las licencias permisivas permiten usar, modificar y redistribuir código — incluso dentro de un producto comercial cerrado — con casi ninguna obligación más allá de conservar el aviso de copyright.** Son la familia de licencias menos restrictiva y la opción por defecto para proyectos de infraestructura que buscan la adopción más amplia posible, incluida la de empresas que nunca publicarán una línea de su propio código.',
        items: [
          '**La licencia MIT** se originó en el Massachusetts Institute of Technology como forma de liberar software desarrollado en la universidad con restricciones mínimas. Tiene unas 170 palabras, otorga derechos casi ilimitados y solo pide que el texto original de copyright y licencia se mantenga en cualquier copia o parte sustancial que redistribuyas.',
          '**La Apache License 2.0** proviene de la Apache Software Foundation, creada para dar a colaboradores corporativos y comunitarios un marco legal común para proyectos colaborativos grandes. A diferencia de MIT, incluye una concesión de patente explícita — los colaboradores otorgan a los usuarios sus derechos de patente sobre el código — por lo que muchas empresas con carteras de patentes la prefieren.',
          '**Las licencias BSD** (de 2 y 3 cláusulas) se originaron en la Universidad de California en Berkeley para el sistema operativo Berkeley Software Distribution. La variante de 3 cláusulas añade una cláusula de no aprobación que impide usar el nombre de los autores originales para promocionar un producto derivado sin permiso.',
          '**Efecto práctico para quien la adopta:** puedes hacer fork, modificar, incorporar y vender una herramienta con licencia permisiva como parte de un producto cerrado sin publicar nunca tu propio código fuente — el único riesgo real es omitir el aviso de copyright/licencia requerido en tu distribución.',
          '**Ejemplos reales de las reseñas de este sitio:** Ollama y llama.cpp usan MIT; vLLM usa Apache-2.0 — las tres se pueden incorporar en un producto comercial sin generar ninguna obligación de divulgar el código fuente.',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: '¿Qué es el copyleft? La familia GPL y LGPL',
        content:
          '**Las licencias copyleft exigen que, si distribuyes una versión modificada del código cubierto, liberes tus modificaciones bajo la misma licencia.** La obligación recae sobre el propio código, no sobre cualquier programa que simplemente se ejecute al lado — el marco habitual de "licencia viral" exagera hasta dónde llega realmente la obligación.',
        items: [
          '**La GNU General Public License (GPL)** fue escrita por Richard Stallman y la Free Software Foundation como licencia del Proyecto GNU, basada en la idea de que la libertad del software debe preservarse hacia adelante — quien reciba una copia modificada debe tener los mismos derechos que el autor original.',
          '**GPL v2 y GPL v3** difieren sobre todo en el lenguaje sobre patentes y las disposiciones de compatibilidad; la v3 añadió cláusulas explícitas de represalia por patentes y anti-tivoización (para impedir hardware que bloquee ejecutar software modificado que tienes derecho legal a ejecutar).',
          '**La GNU Lesser General Public License (LGPL)** relaja GPL específicamente para bibliotecas — puedes enlazar una biblioteca LGPL en una aplicación propietaria sin abrir el código de la aplicación en sí, siempre que el componente de biblioteca siga siendo intercambiable y su propio código fuente esté disponible.',
          '**Lo que realmente activa la obligación:** distribuir una copia modificada del código cubierto por GPL. Usar internamente software GPL sin modificar, o ejecutar software propietario sobre un sistema operativo con licencia GPL, no somete por sí solo tu propio código a GPL.',
          '**Quién debe tener cuidado:** una startup que planee hacer fork y modificar una herramienta GPL como núcleo de un producto comercial necesita un plan — abrir esas modificaciones o evitar el fork; una empresa que solo ejecuta internamente una herramienta GPL sin modificar no tiene esa obligación.',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'Cómo AGPL-3.0 cierra el vacío del SaaS',
        content:
          '**La GNU Affero General Public License (AGPL-3.0) añade un requisito que GPL no tiene: si modificas código cubierto por AGPL y lo pones a disposición de usuarios a través de una red, debes ofrecerles el código fuente modificado, incluso si nunca distribuyes físicamente una copia del software.** Esta es la característica definitoria de esta familia de licencias, y la que más sorprende a equipos que asumen que "nunca lo distribuimos, solo lo alojamos" es una interpretación segura.',
        items: [
          '**El vacío que cierra:** bajo GPL sola, ejecutar una versión modificada como servicio web alojado no constituye "distribución" en el sentido legal que activa la licencia — una empresa podía tomar código GPL, modificarlo, ofrecerlo solo como producto SaaS, y nunca tener que liberar las modificaciones. Esto se conoció informalmente como el "vacío ASP" (application service provider) o "vacío SaaS".',
          '**AGPL-3.0 se escribió específicamente para cerrar ese vacío** añadiendo una cláusula de interacción por red: ofrecer la funcionalidad del software modificado a usuarios a través de una red activa la misma obligación de disponibilidad de código fuente que distribuir una copia física.',
          '**Por qué importa para el hosting y la reventa:** una agencia o proveedor de hosting que toma una herramienta con AGPL, la modifica y la ofrece a clientes como servicio alojado debe poner el código fuente modificado a disposición de esos usuarios — ejecutarla sin modificar no genera esa obligación.',
          '**Ejemplos reales de las reseñas de este sitio:** Jan, KoboldCpp, SillyTavern y text-generation-webui usan AGPL-3.0 — sin problema para autohospedaje sin modificar para uso personal o interno; la situación cambia radicalmente en cuanto modificas una y revendes acceso alojado a ella.',
          '**Esto es una explicación general de cómo funciona el mecanismo de la licencia, no asesoría legal** — si un despliegue concreto cuenta como "ofrecerlo a través de una red" según el texto exacto de AGPL-3.0 es una pregunta para un abogado que revise tu arquitectura específica.',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: '¿Qué son las licencias source-available y "fair-code"?',
        content:
          '**Las licencias source-available permiten a cualquiera leer el código pero restringen usos comerciales concretos, casi siempre ofrecer el software como servicio alojado competidor.** Se anuncian con frecuencia como "open source", pero licencias como la Business Source License (BSL/BUSL) y la Server Side Public License (SSPL) no están aprobadas por la Open Source Initiative ni cumplen su definición de open source.',
        items: [
          '**La Business Source License (BSL, también llamada BUSL)** otorga desde el inicio acceso al código fuente y amplios derechos de uso, con una fecha futura definida en la que la licencia se convierte en una licencia genuinamente open source (a menudo Apache-2.0 u otra licencia permisiva similar) — hasta esa conversión, aplica una restricción declarada de uso comercial, dirigida típicamente a impedir una oferta alojada competidora.',
          '**La Server Side Public License (SSPL)**, creada por MongoDB, exige que quien ofrezca el software como servicio también libere como open source toda la pila de servicio construida a su alrededor — una obligación mucho más amplia que la de AGPL-3.0, escrita deliberadamente para hacer impráctico el hosting comercial por parte de un proveedor cloud rival.',
          '**La Commons Clause** es una restricción adicional superpuesta a una licencia base por lo demás permisiva o copyleft, que prohíbe específicamente vender el software u ofrecerlo como servicio alojado de pago, mientras sigue permitiendo el uso y la modificación libres.',
          '**Por qué algunos proyectos migran a estas licencias:** un proyecto que empieza bajo una licencia totalmente abierta y luego adopta una source-available suele estar respondiendo a un gran proveedor cloud que ofrece el proyecto como servicio alojado sin contribuir de vuelta — migrar a una licencia source-available permite al mantenedor conservar la mayor parte de la apertura mientras bloquea ese uso competidor concreto.',
          '**Efecto práctico para quien la adopta:** normalmente puedes leer, autohospedar y modificar software source-available para uso interno sin problema; la restricción actúa cuando intentas revenderlo como producto alojado que compite con la oferta del titular de la licencia — lee la cláusula concreta de uso comercial, ya que la redacción varía mucho entre proyectos.',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: '¿Qué significan las licencias propietarias y freemium "gratis"?',
        content:
          '**Una herramienta etiquetada como "gratis" en su página de descarga no es necesariamente open source — muchas apps de escritorio de IA populares son software propietario de código cerrado, distribuido sin costo, sin ninguna licencia que te otorgue el derecho de ver, modificar o redistribuir el código subyacente.** Esa distinción importa sobre todo por la continuidad: un proveedor propietario puede cambiar precios, añadir restricciones o descontinuar el producto por completo, y no tienes derecho legal a mantener un fork independiente en funcionamiento.',
        items: [
          '**"Gratis (cerrado)" en una tabla comparativa significa software propietario sin costo.** Puedes usar la aplicación compilada según los términos de servicio del proveedor, pero no tienes acceso al código fuente ni derecho a modificarlo, auditarlo o hacer fork.',
          '**El compromiso principal frente a alternativas open source:** una app gratuita propietaria suele ser más pulida y fácil de instalar, ya que un único proveedor controla toda la experiencia — pero dependes por completo de su disposición continuada a mantenerla gratis, segura y actualizada.',
          '**Riesgo de dependencia del proveedor (vendor lock-in):** sin acceso al código fuente, no puedes autohospedar una versión modificada, auditar exactamente qué hace la aplicación con tus datos, ni continuar el desarrollo si el proveedor deja de mantenerla, cambia el modelo de precios o cierra.',
          '**Quién debe prestar más atención:** cualquiera que construya un flujo de trabajo o proceso de negocio alrededor de una herramienta gratuita propietaria debería tener un plan de respaldo documentado — la misma diligencia que aplicarías a cualquier dependencia de proveedor, porque "gratis" no significa "permanente" ni "garantizado".',
          '**No es lo mismo que source-available:** las licencias source-available (BSL, SSPL) al menos permiten leer y auditar el código aunque el uso comercial esté restringido; una herramienta totalmente propietaria no ofrece ni el código ni esas garantías.',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: '¿Cómo funcionan las licencias de modelos de IA? Open weights, RAIL y restricciones de uso',
        content:
          '**La licencia de un modelo es un documento legal separado de la licencia que cubre el software que lo ejecuta — el código de una herramienta puede ser Apache-2.0 mientras que los pesos del modelo que descarga llevan una licencia distinta, a veces más restrictiva.** El licenciamiento de modelos de IA es más reciente y menos estandarizado que el de software, y las condiciones varían mucho entre lanzamientos de modelos.',
        items: [
          '**Pesos totalmente permisivos:** algunas familias de modelos publican sus pesos bajo una licencia de software permisiva estándar (habitualmente Apache-2.0), otorgando los mismos derechos amplios de uso que esa licencia da al código, incluido el uso comercial sin restricción de ámbito.',
          '**Las licencias RAIL y OpenRAIL** (Responsible AI License) surgieron con el lanzamiento del modelo BLOOM por parte de BigScience y se diseñaron junto con investigadores legales para combinar acceso abierto con una lista concreta de usos prohibidos — normalmente vetando la generación de desinformación, la toma de decisiones discriminatoria o contenido que viole la ley, mientras permiten un uso comercial amplio por lo demás.',
          '**Licencias "comunitarias" o "open-weight" a medida:** varios proveedores importantes de modelos publican sus pesos bajo una licencia hecha a medida que se lee como una licencia abierta pero añade condiciones de ámbito de uso. El ejemplo más citado es la licencia comunitaria que Meta adjunta a los pesos de modelo que publica abiertamente, que otorga uso gratuito amplio pero añade un umbral de escala de uso por encima del cual se requiere un acuerdo comercial aparte, junto con restricciones de uso aceptable.',
          '**Qué revisar específicamente:** si el uso comercial está permitido en absoluto, si hay un umbral de escala de uso o ingresos que cambia los términos, qué prohíbe la política de uso aceptable, y si la licencia restringe usar las salidas del modelo para entrenar un modelo competidor — una restricción que ha aparecido en varias licencias específicas de modelos y no tiene equivalente en las licencias de software estándar.',
          '**Esto no es asesoría legal** — los términos de licencia de los modelos cambian entre lanzamientos del mismo proveedor, así que verifica el texto exacto de licencia adjunto a los pesos de modelo concretos que planeas desplegar en lugar de asumir continuidad con un lanzamiento anterior de la misma organización.',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: '¿A quién le importa cada licencia?',
        content:
          '**Una licencia que no supone ningún problema para un hobbyista puede ser un riesgo real para una startup o una agencia.** Los mismos términos de licencia aplican a todos, pero las consecuencias de activar una obligación escalan según cuán comercial y cuán público sea tu uso.',
        columns: ['Quién eres', 'Qué es lo más importante', 'Qué hacer'],
        rows: [
          {
            'Quién eres': 'Hobbyista / uso personal',
            'Qué es lo más importante': 'Casi cualquier licencia funciona — no estás distribuyendo ni alojando para terceros',
            'Qué hacer': 'Confirma que no redistribuyes públicamente código modificado si la herramienta es copyleft',
          },
          {
            'Quién eres': 'Startup construyendo un producto comercial sobre una herramienta',
            'Qué es lo más importante': 'El copyleft, y sobre todo AGPL-3.0, puede obligarte a liberar tus propias adiciones',
            'Qué hacer': 'Revisa la licencia base antes de diseñar tu arquitectura sobre una herramienta que planeas modificar y vender',
          },
          {
            'Quién eres': 'Empresa que integra una herramienta internamente',
            'Qué es lo más importante': 'Las obligaciones copyleft se activan con la distribución/el hosting, no con el uso puramente interno — pero la escala cambia el riesgo',
            'Qué hacer': 'Obtén una revisión legal antes de que una herramienta copyleft sin modificar se convierta en infraestructura central',
          },
          {
            'Quién eres': 'Agencia o freelancer que revende despliegues',
            'Qué es lo más importante': 'AGPL-3.0 más modificación más hosting para un cliente suele significar publicar el código fuente modificado',
            'Qué hacer': 'Confirma si realmente modificas el código, o solo lo configuras/autohospedas sin modificarlo',
          },
          {
            'Quién eres': 'Cualquiera preocupado por la dependencia del proveedor',
            'Qué es lo más importante': 'Las herramientas propietarias "gratis" y source-available pueden cambiar términos, añadir cuotas o cerrar',
            'Qué hacer': 'Prefiere una alternativa permisiva o copyleft si la independencia a largo plazo importa más que el acabado',
          },
          {
            'Quién eres': 'Equipos con foco en RGPD evaluando residencia de datos',
            'Qué es lo más importante': 'El riesgo de licencia es un eje distinto del riesgo de cumplimiento — una licencia permisiva no resuelve la residencia de datos',
            'Qué hacer': 'Evalúa los términos de licencia y los requisitos de residencia de datos como dos checklists separadas',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: 'Checklist antes de adoptar una herramienta: 7 puntos a verificar',
        content:
          '**Verificar la licencia de una herramienta toma minutos y evita el tipo de sorpresa legal que cuesta mucho más resolver después de lanzar un producto.** Revisa estos siete puntos antes de comprometerte a construir sobre cualquier herramienta open source o de IA.',
        numberedItems: [
          {
            title: 'Lee el archivo LICENSE real del repositorio',
            whyItMatters: 'La afirmación "open source" de una landing page puede ser marketing, no un hecho legal — el archivo LICENSE (o NOTICE/COPYING) del repositorio fuente es el documento con autoridad, no una insignia ni una página de precios.',
          },
          {
            title: 'Revisa si la licencia cambió recientemente',
            whyItMatters: 'Algunos proyectos migran de una licencia permisiva o copyleft a una source-available tras ganar tracción comercial — este patrón se ha repetido en la industria del software conforme proveedores cloud alojaban proyectos open source populares sin contribuir de vuelta. Revisa el historial de licencia del repositorio, no solo el archivo actual.',
          },
          {
            title: 'Verifica si la licencia está realmente aprobada por la OSI, si eso te importa',
            whyItMatters: 'Licencias source-available como BSL y SSPL suelen anunciarse como open source pero no están en la lista aprobada por la Open Source Initiative — si la aprobación de la OSI es un requisito para tu caso de uso, revisa la lista directamente en lugar de confiar en la descripción del proyecto.',
          },
          {
            title: 'Lee las cláusulas de uso comercial y ámbito de uso específicas de modelos de IA',
            whyItMatters: 'La licencia de un modelo puede permitir el uso comercial ampliamente, restringirlo por encima de un umbral de escala de uso, o prohibir aplicaciones específicas por completo — estas cláusulas quedan fuera del lenguaje habitual de las licencias de software y son fáciles de pasar por alto si solo revisas la licencia del código.',
          },
          {
            title: 'Determina si autohospedar o alojar como SaaS cambia tus obligaciones',
            whyItMatters: 'Bajo AGPL-3.0, ofrecer software modificado a través de una red activa la misma obligación de divulgación que distribuir una copia bajo GPL — confirma en qué categoría cae tu despliegue planeado antes de modificar el código.',
          },
          {
            title: 'Revisa si existe un acuerdo de licencia de colaborador (CLA) si piensas contribuir',
            whyItMatters: 'Un CLA puede otorgar al mantenedor del proyecto derechos más amplios sobre tu contribución que los que la propia licencia del proyecto otorga a los usuarios — relevante sobre todo si planeas enviar código de vuelta al proyecto, no si solo lo consumes.',
          },
          {
            title: 'Revisa las restricciones de marca por separado de la licencia del código',
            whyItMatters: 'Una licencia de código permisiva o copyleft no otorga automáticamente derechos sobre el nombre o logo del proyecto — hacer fork y renombrar una herramienta puede estar bloqueado por derecho de marca aunque la licencia del código permitiría el fork.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        content:
          '**La mayoría de los problemas relacionados con licencias vienen de no consultar el documento fuente, no de malinterpretar una licencia que sí se ha leído.**',
        items: [
          'Confiar en la afirmación "open source" de una página de marketing en lugar de leer el archivo LICENSE real del repositorio.',
          'Suponer que AGPL-3.0 solo importa si distribuyes una copia del software — también aplica al ofrecer código modificado como servicio alojado.',
          'Tratar la licencia del código de un modelo y la licencia de sus pesos como el mismo documento — con frecuencia no lo son.',
          'Hacer fork y renombrar una herramienta sin revisar las restricciones de marca, separadas de la licencia del código.',
          'Suponer que una licencia permisiva al inicio de un proyecto sigue aplicando tras una relicenciación posterior — revisa la licencia actual, no la que recuerdas.',
          'Saltarte la revisión legal de una herramienta copyleft o source-available porque "es gratis" — gratis de usar y libre de obligaciones no son lo mismo.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — la definición formal que una licencia debe cumplir para certificarse como open source por la OSI.',
          '[Proyecto GNU — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — las explicaciones de la Free Software Foundation sobre GPL, LGPL y AGPL.',
          '[Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — texto completo de la licencia.',
          '[Texto de la licencia MIT (Open Source Initiative)](https://opensource.org/license/mit) — texto completo de la licencia.',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — términos y justificación propios de la SSPL.',
          '[FAQ de la Business Source License](https://mariadb.com/bsl-faq-mariadb/) — explicación de cómo funciona la conversión de BSL/BUSL, de un adoptante ampliamente citado de la licencia.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es MIT o Apache-2.0 la mejor licencia para mi proyecto?',
            a: 'Ambas son permisivas, con casi ninguna obligación para los usuarios. La principal diferencia práctica de Apache-2.0 es una concesión de patente explícita, más relevante para organizaciones con carteras de patentes; MIT es más corta y algo más común en proyectos individuales pequeños. Ninguna restringe el uso comercial ni exige abrir lo que construyas encima.',
          },
          {
            q: '¿Usar software bajo AGPL-3.0 significa que toda mi empresa debe pasarse a open source?',
            a: 'No. La obligación de AGPL-3.0 se activa al distribuir u ofrecer una versión modificada del código cubierto a través de una red — usar internamente una herramienta AGPL sin modificar, o como componente al que tu producto llama sin modificar su código fuente, no arrastra partes independientes de tu propia base de código bajo la licencia. Se vuelve relevante específicamente si modificas el código AGPL en sí y ofreces esa versión modificada a usuarios.',
          },
          {
            q: '¿"Source-available" es lo mismo que open source?',
            a: 'No, y la distinción importa. Open source es una certificación de la Open Source Initiative basada en una definición concreta que incluye el derecho a redistribuir y modificar sin restringir el uso comercial. Las licencias source-available como BSL y SSPL permiten leer el código pero restringen usos comerciales concretos, casi siempre ofertas alojadas competidoras — no cumplen la definición de open source de la OSI aunque un proyecto se describa a sí mismo como open source.',
          },
          {
            q: '¿Puedo usar una app de IA propietaria "gratis" para mi negocio?',
            a: 'Generalmente sí, según los términos de servicio del proveedor, pero asumes un riesgo de dependencia: sin acceso al código fuente no puedes auditar qué hace el software con tus datos, no tienes derecho a autohospedar una versión modificada, y no hay garantía de que el proveedor mantenga el producto gratis, sin restricciones o actualizado. Lee los términos de servicio, no solo el precio.',
          },
          {
            q: '¿Las licencias de modelos de IA funcionan igual que las licencias de software?',
            a: 'No exactamente. Las licencias de modelos son más recientes y menos estandarizadas. Algunos lanzamientos usan una licencia de software permisiva estándar aplicada directamente a los pesos; otros usan una licencia diseñada a propósito como RAIL/OpenRAIL con una lista concreta de usos prohibidos; otros usan una licencia comunitaria a medida con umbrales de escala de uso y restricciones de ámbito. Revisa siempre la licencia específica adjunta a los pesos de modelo que descargas, por separado de la licencia que cubre el código que usas para ejecutarlos.',
          },
          {
            q: '¿Por qué algunos proyectos open source cambian después a una licencia más restrictiva?',
            a: 'El motivo más citado es un gran proveedor cloud que ofrece el proyecto como servicio alojado competidor sin contribuir de vuelta al desarrollo — migrar a una licencia source-available (BSL, SSPL) o añadir una restricción como la Commons Clause permite al mantenedor mantener el código visible y mayormente usable mientras bloquea ese uso competidor concreto. Este patrón se ha repetido en la industria del software.',
          },
          {
            q: '¿Qué debería revisar una startup antes de construir un producto comercial sobre una herramienta open source?',
            a: 'Leer el archivo de licencia real, no una landing page; determinar si planea modificar el código subyacente, que es lo que típicamente activa las obligaciones de copyleft y AGPL-3.0; revisar si hay un umbral de escala de uso o ámbito si hay un modelo de IA implicado; y obtener una revisión legal antes de que la herramienta se convierta en infraestructura central de la que depende su producto.',
          },
          {
            q: '¿Este artículo es asesoría legal?',
            a: 'No. Este artículo explica en lenguaje sencillo, con fines orientativos, cómo funcionan generalmente los mecanismos de licencia comunes. Los términos de licencia varían según el proyecto y la versión, la interpretación puede depender de la jurisdicción, y las consecuencias de un error escalan según cuán comercial sea tu despliegue — consulta a un abogado cualificado para orientación sobre una herramienta, un despliegue o una decisión de negocio concretos.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[El directorio completo de software de LLM local](/es/power-local-llm/local-llm-software-directory) — más de 160 herramientas de LLM local con la licencia de cada entrada.',
          '[Reseña de Dify AI Workflow Builder](/es/power-local-llm/dify-ai-workflow-builder-review) — una reseña que nombra su licencia; usa esta guía para entender qué significa esa licencia para tu despliegue.',
          '[Contenido generado por IA y riesgo de propiedad intelectual](/es/power-local-llm/ai-generated-content-ip-risk) — las cuestiones de propiedad intelectual que acompañan a la licencia cuando despliegas comercialmente salidas generadas por IA.',
          '[Seguridad de la IA agéntica: identidad y acceso](/es/power-local-llm/agentic-ai-security-identity-access) — consideraciones de seguridad y gobernanza para despliegues de IA autohospedados, un aspecto complementario al cumplimiento de licencias.',
          '[RAG local compatible con RGPD para documentos sensibles](/es/power-local-llm/local-rag-for-private-business-data) — el riesgo de licencia y el riesgo de residencia de datos/cumplimiento son checklists separadas; esta guía cubre el lado del cumplimiento.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Licencias de software de IA y open source explicadas: MIT vs Apache vs GPL vs AGPL vs propietaria',
      description: 'Licencias de software open source y de IA explicadas: permisivas, copyleft, AGPL, source-available y licencias de modelos de IA — qué revisar antes de usar cualquier herramienta.',
      url: 'https://www.promptquorum.com/es/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'es',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores, fundadores de startups y responsables técnicos' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com/es](https://www.promptquorum.com/es)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/es/power-local-llm](https://www.promptquorum.com/es/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'Licencias de software de IA y open source explicadas', item: '[www.promptquorum.com/es/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/es/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
  pt: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'Licenças de software de IA e open source explicadas: MIT vs Apache vs GPL vs AGPL vs proprietária',
    seoTitle: 'Licenças de IA e open source explicadas (MIT, GPL, AGPL)',
    intro:
      'Toda ferramenta de LLM local, framework de RAG e assistente de codificação com IA analisado neste site é distribuído sob uma licença — MIT, Apache-2.0, AGPL-3.0, uma licença source-available ou um app de desktop "gratuito" fechado — e essa licença determina se você realmente pode usar a ferramenta muito mais do que qualquer comparação de recursos. Este guia explica as famílias de licenças que você vai encontrar em software open source e modelos de IA: o que cada uma permite e exige, de onde ela veio, para quem ela foi pensada, e o que verificar especificamente antes de implantar uma ferramenta sob ela — seja um projeto pessoal, um produto de startup, um sistema interno corporativo ou uma entrega para cliente que você revende. É uma taxonomia, não uma tabela de consulta — não vai dizer qual licença uma ferramenta específica já analisada usa (veja a resenha individual ou o [diretório de software](/pt/power-local-llm/local-llm-software-directory) para isso), mas explica o que essa licença realmente significa assim que você a identifica.',
    metaDescription:
      'Licenças de software open source e de IA explicadas: permissiva, copyleft, AGPL, source-available e licenças de modelos de IA — o que verificar antes de usar qualquer ferramenta.',
    twitterDescription:
      'MIT, Apache-2.0, GPL, AGPL, source-available e licenças de modelos de IA explicadas em termos simples — o que cada uma exige, para quem serve e o que verificar antes de implantar.',
    audience:
      'Desenvolvedores, fundadores de startups e tomadores de decisão técnica escolhendo qual licença open source ou de IA se encaixa no seu projeto, produto ou implantação.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'tipos de licença de software open source',
    targetKeywords: [
      'tipos de licença open source explicados',
      'licença MIT vs Apache vs GPL',
      'o que é licença AGPL',
      'licença source-available explicada',
      'licença de modelo de IA open weights',
    ],
    leadAnswerBlock:
      '**Licenças de software open source e de IA se dividem em cinco famílias práticas — permissiva (MIT, Apache-2.0, BSD), copyleft (GPL, LGPL), copyleft de rede (AGPL-3.0), source-available (BSL, SSPL) e proprietária/gratuita fechada — mais um grupo separado de licenças específicas de modelos de IA (RAIL, licenças comunitárias open-weight) com suas próprias restrições de uso.** Qual delas importa para você depende de você ser um hobbyista, uma startup lançando um produto comercial, ou uma empresa incorporando uma ferramenta internamente — não de qual licença é "melhor".',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a diferença entre as licenças MIT, Apache-2.0, GPL e AGPL?',
        answer:
          'MIT e Apache-2.0 são permissivas — você pode usar, modificar e revender o código com quase nenhuma obrigação além de manter o aviso de licença. GPL é copyleft — se você distribuir uma versão modificada, precisa liberar suas modificações sob a mesma licença. AGPL-3.0 estende essa obrigação para software que você apenas executa como serviço de rede, fechando a brecha que a GPL deixa aberta para SaaS. Licenças proprietárias e source-available (BSL, SSPL) ficam totalmente fora da definição de open source e restringem usos comerciais específicos, quase sempre para não competir com a oferta hospedada do detentor da licença.',
        bullets: [
          'MIT e Apache-2.0 (permissiva): usar, modificar e revender livremente — a única obrigação é manter o aviso de licença/copyright',
          'GPL e LGPL (copyleft): distribuir uma versão modificada exige liberar suas mudanças sob a mesma licença',
          'AGPL-3.0 (copyleft de rede): a mesma obrigação se aplica mesmo se você apenas executar o software como serviço hospedado, sem distribuí-lo',
          'BSL/SSPL (source-available): o código é visível, mas o uso é restrito — normalmente não é open source aprovado pela OSI apesar do marketing',
          'Licenças de modelos de IA (RAIL, licenças comunitárias open-weight) costumam adicionar restrições de uso além de uma licença de código padrão',
          'Sempre leia o arquivo LICENSE real no repositório, não uma afirmação de landing page, antes de construir sobre uma ferramenta',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Principais pontos', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Licenças permissivas: MIT, Apache-2.0, BSD', anchor: '#permissive-licenses' },
      { label: 'Copyleft: a família GPL e LGPL', anchor: '#copyleft-gpl' },
      { label: 'Como a AGPL-3.0 fecha a brecha do SaaS', anchor: '#agpl-saas-loophole' },
      { label: 'Licenças source-available e "fair-code"', anchor: '#source-available-fair-code' },
      { label: 'Licenças proprietárias e freemium "gratuitas"', anchor: '#proprietary-freemium' },
      { label: 'Licenças de modelos de IA: RAIL e open weights', anchor: '#ai-model-licenses' },
      { label: 'Quem deve se importar com qual licença?', anchor: '#who-should-care' },
      { label: 'Checklist antes de adotar uma ferramenta', anchor: '#pre-adoption-checklist' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Famílias de licenças se agrupam em cinco categorias práticas: permissiva, copyleft, copyleft de rede, source-available e proprietária/fechada — mais um grupo separado de licenças específicas de modelos de IA.** Saber em qual categoria uma ferramenta se encaixa diz mais sobre se você pode usá-la do que qualquer lista de recursos.',
          '**Licenças permissivas (MIT, Apache-2.0, BSD) quase não impõem obrigações.** Você pode incorporar o código em um produto comercial fechado e nunca publicar seu próprio código-fonte.',
          '**Licenças copyleft (GPL, LGPL) são "virais" em um sentido específico e limitado.** Distribuir uma versão modificada do código coberto exige liberar suas mudanças sob a mesma licença — a obrigação não alcança software não relacionado que só roda ao lado.',
          '**A AGPL-3.0 fecha a brecha que a GPL deixa aberta para serviços hospedados.** Se você modificar código sob AGPL e apenas oferecê-lo por rede (SaaS), ainda assim precisa publicar seu código-fonte modificado — algo que a GPL sozinha não exige.',
          '**Licenças source-available como BSL e SSPL não são open source aprovado pela OSI, não importa o que uma landing page diga.** Elas restringem usos comerciais específicos, geralmente para impedir que um provedor de nuvem revenda o projeto como serviço hospedado concorrente.',
          '**O arquivo de licença no repositório é a única fonte confiável — não uma página de preços, um selo no README ou uma afirmação de marketing.** Este guia é informação geral, não aconselhamento jurídico; consulte um advogado para uma implantação em que os termos de licença afetem materialmente seu negócio.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Licenças de software open source e de IA se dividem em cinco famílias práticas — permissiva, copyleft, copyleft de rede (AGPL), source-available e proprietária — cada uma impondo obrigações diferentes sobre como você pode usar, modificar e redistribuir o software.',
          },
          {
            type: 'plain-terms',
            text: 'Uma licença de software é o regulamento sobre o que você pode fazer com o código de outra pessoa. Licenças permissivas permitem quase tudo; licenças copyleft exigem que você compartilhe suas mudanças de volta; licenças source-available deixam você ver o código, mas restringem o uso comercial.',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**MIT** é a licença permissiva mais curta e comum — cerca de 170 palavras, sem cláusula de patente.',
          '**Apache-2.0** adiciona uma concessão explícita de patente que a MIT não tem, por isso muitas empresas a preferem para projetos de origem corporativa.',
          '**A GPL** exige divulgação de código-fonte apenas ao distribuir o software; a AGPL-3.0 estende essa exigência para a execução como serviço de rede.',
          '**"Open source" aprovado pela OSI** é uma certificação específica da Open Source Initiative; "source-available" e "fair-code" são termos de marketing para licenças que não atendem a essa definição.',
          '**Licenças de modelos de IA são uma categoria separada das licenças de código.** O código de uma ferramenta pode ser Apache-2.0 enquanto os pesos do modelo que ela baixa carregam termos completamente diferentes, muitas vezes mais restritivos.',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: 'O que são licenças permissivas? MIT, Apache-2.0 e BSD',
        content:
          '**Licenças permissivas permitem usar, modificar e redistribuir código — inclusive dentro de um produto comercial fechado — com quase nenhuma obrigação além de preservar o aviso de copyright.** São a família de licenças menos restritiva e a escolha padrão para projetos de infraestrutura que buscam a maior adoção possível, inclusive por empresas que nunca vão publicar uma linha do próprio código.',
        items: [
          '**A licença MIT** teve origem no Massachusetts Institute of Technology como forma de liberar software desenvolvido na universidade com restrição mínima. Tem cerca de 170 palavras, concede direitos quase ilimitados e exige apenas que o texto original de copyright e licença permaneça em qualquer cópia ou parte substancial redistribuída.',
          '**A Apache License 2.0** vem da Apache Software Foundation, criada para dar a colaboradores corporativos e da comunidade uma estrutura jurídica comum para grandes projetos colaborativos. Diferente da MIT, ela inclui uma concessão explícita de patente — colaboradores licenciam suas reivindicações de patente sobre o código para os usuários — por isso muitas empresas com portfólios de patentes a preferem.',
          '**As licenças BSD** (2 cláusulas e 3 cláusulas) tiveram origem na University of California, Berkeley, para o sistema operacional Berkeley Software Distribution. A variante de 3 cláusulas adiciona uma cláusula de não endosso, impedindo o uso do nome dos autores originais para promover um produto derivado sem permissão.',
          '**Efeito prático para quem adota:** você pode fazer fork, modificar, incorporar e vender uma ferramenta com licença permissiva como parte de um produto fechado e nunca liberar seu próprio código-fonte — o único risco real é remover o aviso de copyright/licença exigido da sua distribuição.',
          '**Exemplos reais das análises deste site:** Ollama e llama.cpp usam MIT; vLLM usa Apache-2.0 — as três podem ser incorporadas em um produto comercial sem gerar qualquer obrigação de divulgação de código-fonte.',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: 'O que é copyleft? A família GPL e LGPL',
        content:
          '**Licenças copyleft exigem que, se você distribuir uma versão modificada do código coberto, libere suas modificações sob a mesma licença.** A obrigação está ligada ao próprio código, não a qualquer programa que apenas roda ao lado — o enquadramento comum de "licença viral" exagera o alcance real da obrigação.',
        items: [
          '**A GNU General Public License (GPL)** foi escrita por Richard Stallman e a Free Software Foundation como a licença do Projeto GNU, baseada na ideia de que a liberdade do software deve ser preservada adiante — quem recebe uma cópia modificada deve ter os mesmos direitos que o autor original.',
          '**GPL v2 e GPL v3** diferem principalmente na linguagem sobre patentes e nas disposições de compatibilidade; a v3 adicionou cláusulas explícitas de retaliação de patentes e anti-tivoização (impedindo hardware que bloqueie a execução de software modificado que você tem o direito legal de executar).',
          '**A GNU Lesser General Public License (LGPL)** relaxa a GPL especificamente para bibliotecas — você pode vincular uma biblioteca LGPL a uma aplicação proprietária sem abrir o código da aplicação em si, desde que o componente de biblioteca permaneça substituível e seu próprio código-fonte fique disponível.',
          '**O que realmente ativa a obrigação:** distribuir uma cópia modificada do código coberto pela GPL. Apenas usar internamente software GPL sem modificar, ou rodar software proprietário sobre um sistema operacional licenciado sob GPL, não coloca automaticamente seu próprio código sob GPL.',
          '**Quem deve ter cuidado:** uma startup planejando fazer fork e modificar uma ferramenta GPL como núcleo de um produto comercial precisa de um plano — abrir essas modificações ou evitar o fork; uma empresa que apenas roda internamente uma ferramenta GPL sem modificar não tem essa obrigação.',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'Como a AGPL-3.0 fecha a brecha do SaaS',
        content:
          '**A GNU Affero General Public License (AGPL-3.0) adiciona uma exigência que a GPL não tem: se você modificar código coberto pela AGPL e disponibilizá-lo a usuários por rede, precisa oferecer a esses usuários o código-fonte modificado, mesmo que nunca distribua fisicamente uma cópia do software.** Essa é a característica definidora dessa família de licenças, e a que mais surpreende equipes que assumem que "nunca distribuímos, só hospedamos" é uma leitura segura.',
        items: [
          '**A brecha que ela fecha:** sob a GPL pura, rodar uma versão modificada como serviço web hospedado não conta como "distribuição" no sentido jurídico que a licença aciona — uma empresa podia pegar código GPL, modificá-lo, oferecê-lo apenas como produto SaaS, e nunca precisar liberar as modificações. Isso ficou conhecido informalmente como a "brecha ASP" (application service provider) ou "brecha SaaS".',
          '**A AGPL-3.0 foi escrita especificamente para fechar essa brecha**, adicionando uma cláusula de interação em rede: oferecer a funcionalidade do software modificado a usuários por rede conta como acionar a mesma obrigação de disponibilidade de código-fonte que distribuir uma cópia física.',
          '**Por que isso importa para hospedagem e revenda:** uma agência ou provedor de hospedagem que pega uma ferramenta sob AGPL, a modifica e a oferece a clientes como serviço hospedado precisa disponibilizar o código-fonte modificado a esses usuários — rodá-la sem modificação não gera essa obrigação.',
          '**Exemplos reais das análises deste site:** Jan, KoboldCpp, SillyTavern e text-generation-webui usam AGPL-3.0 — tranquilo para autoalojamento sem modificação para uso pessoal ou interno; a questão muda substancialmente no momento em que você modifica uma delas e revende acesso hospedado a ela.',
          '**Isso é uma explicação geral de como o mecanismo da licença funciona, não aconselhamento jurídico** — se uma implantação específica conta como "oferecer por rede" segundo o texto exato da AGPL-3.0 é uma questão para um advogado avaliar sua arquitetura específica.',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: 'O que são licenças source-available e "fair-code"?',
        content:
          '**Licenças source-available permitem que qualquer pessoa leia o código, mas restringem usos comerciais específicos, geralmente oferecer o software como serviço hospedado concorrente.** Elas costumam ser divulgadas como "open source", mas licenças como a Business Source License (BSL/BUSL) e a Server Side Public License (SSPL) não são aprovadas pela Open Source Initiative e não atendem à sua definição de open source.',
        items: [
          '**A Business Source License (BSL, também chamada BUSL)** concede desde o início acesso ao código-fonte e amplos direitos de uso, com uma data futura definida em que a licença se converte em uma licença genuinamente open source (frequentemente Apache-2.0 ou licença permissiva semelhante) — até essa conversão, aplica-se uma restrição declarada de uso comercial, tipicamente voltada a impedir uma oferta hospedada concorrente.',
          '**A Server Side Public License (SSPL)**, criada pela MongoDB, exige que quem oferece o software como serviço também abra como open source toda a pilha de serviço construída em torno dele — uma obrigação bem mais ampla que a da AGPL-3.0, deliberadamente escrita para tornar a hospedagem comercial impraticável para um provedor de nuvem rival.',
          '**A Commons Clause** é uma restrição adicional sobreposta a uma licença base, do contrário permissiva ou copyleft, proibindo especificamente vender o software ou oferecê-lo como serviço hospedado pago, ao mesmo tempo em que permite uso e modificação livres.',
          '**Por que projetos migram para essas licenças:** um projeto que começa sob uma licença totalmente aberta e depois adota uma source-available geralmente está respondendo a um grande provedor de nuvem que oferece o projeto como serviço hospedado sem contribuir de volta — migrar para uma licença source-available permite que o mantenedor preserve a maior parte da abertura enquanto bloqueia esse uso concorrente específico.',
          '**Efeito prático para quem adota:** normalmente você pode ler, autoalojar e modificar software source-available para uso interno sem problemas; a restrição entra em ação quando você tenta revendê-lo como produto hospedado que compete com a oferta do detentor da licença — leia a cláusula específica de uso comercial, já que a redação varia bastante entre projetos.',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: 'O que significam licenças proprietárias e freemium "gratuitas"?',
        content:
          '**Uma ferramenta rotulada como "gratuita" na página de download não é necessariamente open source — muitos apps de desktop de IA populares são software proprietário, de código fechado, distribuído sem custo, sem nenhuma licença que conceda a você o direito de ver, modificar ou redistribuir o código subjacente.** Essa distinção importa principalmente pela continuidade: um fornecedor proprietário pode mudar preços, adicionar restrições ou descontinuar o produto por completo, e você não tem direito legal de manter um fork independente funcionando.',
        items: [
          '**"Gratuito (fechado)" em uma tabela comparativa significa software proprietário sem custo.** Você pode usar o aplicativo compilado sob os termos de serviço do fornecedor, mas não tem acesso ao código-fonte nem direito de modificá-lo, auditá-lo ou fazer fork.',
          '**A principal contrapartida frente a alternativas open source:** um app gratuito proprietário costuma ser mais polido e fácil de instalar, já que um único fornecedor controla toda a experiência do usuário — mas você depende inteiramente da disposição contínua desse fornecedor em mantê-lo gratuito, seguro e atualizado.',
          '**Risco de dependência de fornecedor (vendor lock-in):** sem acesso ao código-fonte, você não pode autoalojar uma versão modificada, auditar exatamente o que o aplicativo faz com seus dados, nem continuar o desenvolvimento se o fornecedor parar de mantê-lo, mudar o modelo de preços ou encerrar.',
          '**Quem deve se preocupar mais:** qualquer pessoa que construa um fluxo de trabalho ou processo de negócio em torno de uma ferramenta gratuita proprietária deveria ter um plano de contingência documentado — a mesma diligência que você aplicaria a qualquer dependência de fornecedor, já que "gratuito" não significa "permanente" nem "garantido".',
          '**Não é o mesmo que source-available:** licenças source-available (BSL, SSPL) pelo menos permitem ler e auditar o código mesmo que o uso comercial seja restrito; uma ferramenta totalmente proprietária não oferece nem o código nem essas garantias.',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: 'Como funcionam as licenças de modelos de IA? Open weights, RAIL e restrições de uso',
        content:
          '**A licença de um modelo é um documento jurídico separado da licença que cobre o software que o executa — o código de uma ferramenta pode ser Apache-2.0 enquanto os pesos do modelo que ela baixa carregam uma licença diferente, às vezes mais restritiva.** O licenciamento de modelos de IA é mais recente e menos padronizado que o de software, e os termos variam muito entre lançamentos de modelos.',
        items: [
          '**Pesos totalmente permissivos:** algumas famílias de modelos liberam seus pesos sob uma licença de software permissiva padrão (geralmente Apache-2.0), concedendo os mesmos amplos direitos de uso que essa licença dá ao código, incluindo uso comercial sem restrição de finalidade.',
          '**As licenças RAIL e OpenRAIL** (Responsible AI License) surgiram com o lançamento do modelo BLOOM pela BigScience e foram projetadas junto com pesquisadores jurídicos para combinar acesso aberto com uma lista específica de usos proibidos — normalmente vetando geração de desinformação, tomada de decisão discriminatória ou conteúdo que viole a lei, enquanto permitem amplo uso comercial no restante.',
          '**Licenças "comunitárias" ou "open-weight" personalizadas:** vários grandes provedores de modelos liberam pesos sob uma licença sob medida que se lê como uma licença aberta, mas adiciona condições de finalidade de uso. O exemplo mais citado é a licença comunitária que a Meta anexa aos pesos de modelo que libera abertamente, que concede amplo uso gratuito mas adiciona um limite de escala de uso acima do qual um acordo comercial separado é exigido, junto com restrições de uso aceitável.',
          '**O que verificar especificamente:** se o uso comercial é permitido de forma geral, se há um limite de escala de uso ou receita que muda os termos, o que a política de uso aceitável proíbe, e se a licença restringe usar as saídas do modelo para treinar um modelo concorrente — uma restrição que apareceu em várias licenças específicas de modelos e não tem equivalente em licenças de software padrão.',
          '**Isso não é aconselhamento jurídico** — os termos de licença de modelos mudam entre lançamentos do mesmo fornecedor, então verifique o texto exato de licença anexado aos pesos de modelo específicos que você planeja implantar, em vez de presumir continuidade com um lançamento anterior da mesma organização.',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: 'Quem deve se importar com qual licença?',
        content:
          '**Uma licença que não é problema para um hobbyista pode ser um risco real para uma startup ou agência.** Os mesmos termos de licença se aplicam a todos, mas as consequências de acionar uma obrigação escalam de acordo com quão comercial e quão público é o seu uso.',
        columns: ['Quem você é', 'O que mais importa', 'O que fazer'],
        rows: [
          {
            'Quem você é': 'Hobbyista / uso pessoal',
            'O que mais importa': 'Quase qualquer licença funciona — você não está distribuindo ou hospedando para terceiros',
            'O que fazer': 'Confirme que não está redistribuindo publicamente código modificado se a ferramenta for copyleft',
          },
          {
            'Quem você é': 'Startup construindo um produto comercial sobre uma ferramenta',
            'O que mais importa': 'Copyleft, e especialmente AGPL-3.0, pode obrigar você a liberar suas próprias adições',
            'O que fazer': 'Verifique a licença base antes de projetar a arquitetura em torno de uma ferramenta que planeja modificar e vender',
          },
          {
            'Quem você é': 'Empresa incorporando uma ferramenta internamente',
            'O que mais importa': 'Obrigações copyleft se ativam com distribuição/hospedagem, não com uso puramente interno — mas a escala muda o risco',
            'O que fazer': 'Obtenha uma revisão jurídica antes de uma ferramenta copyleft não modificada virar infraestrutura central',
          },
          {
            'Quem você é': 'Agência ou freelancer revendendo implantações',
            'O que mais importa': 'AGPL-3.0 mais modificação mais hospedagem para um cliente costuma significar publicar o código-fonte modificado',
            'O que fazer': 'Confirme se você está realmente modificando o código, ou apenas configurando/autoalojando sem modificar',
          },
          {
            'Quem você é': 'Qualquer pessoa preocupada com dependência de fornecedor',
            'O que mais importa': 'Ferramentas proprietárias "gratuitas" e source-available podem mudar termos, adicionar taxas ou encerrar',
            'O que fazer': 'Prefira uma alternativa permissiva ou copyleft se independência de longo prazo importa mais que polimento',
          },
          {
            'Quem você é': 'Equipes atentas à LGPD avaliando residência de dados',
            'O que mais importa': 'Risco de licença é um eixo separado do risco de conformidade — uma licença permissiva não resolve residência de dados',
            'O que fazer': 'Avalie termos de licença e requisitos de residência de dados como duas checklists separadas',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: 'Checklist antes de adotar uma ferramenta: 7 pontos a verificar',
        content:
          '**Verificar a licença de uma ferramenta leva minutos e evita o tipo de surpresa jurídica que custa muito mais para resolver depois que um produto já foi lançado.** Passe por essas sete verificações antes de se comprometer a construir sobre qualquer ferramenta open source ou de IA.',
        numberedItems: [
          {
            title: 'Leia o arquivo LICENSE real no repositório',
            whyItMatters: 'A afirmação "open source" de uma landing page pode ser marketing, não um fato jurídico — o arquivo LICENSE (ou NOTICE/COPYING) no repositório-fonte é o documento com autoridade, não um selo ou página de preços.',
          },
          {
            title: 'Verifique se a licença mudou recentemente',
            whyItMatters: 'Alguns projetos migram de uma licença permissiva ou copyleft para uma source-available depois de ganhar tração comercial — esse padrão tem se repetido na indústria de software conforme provedores de nuvem passaram a hospedar projetos open source populares sem contribuir de volta. Verifique o histórico de licença do repositório, não só o arquivo atual.',
          },
          {
            title: 'Verifique se a licença é realmente aprovada pela OSI, se isso importa para você',
            whyItMatters: 'Licenças source-available como BSL e SSPL costumam ser divulgadas como open source, mas não estão na lista aprovada pela Open Source Initiative — se a aprovação da OSI é um requisito para o seu caso de uso, verifique a lista diretamente em vez de confiar na descrição do próprio projeto.',
          },
          {
            title: 'Leia as cláusulas de uso comercial e finalidade de uso específicas de modelos de IA',
            whyItMatters: 'A licença de um modelo pode permitir amplamente o uso comercial, restringi-lo acima de um limite de escala de uso, ou proibir aplicações específicas por completo — essas cláusulas ficam fora da linguagem padrão de licenças de software e são fáceis de passar despercebidas se você só verificar a licença do código.',
          },
          {
            title: 'Determine se autoalojar versus hospedar como SaaS muda suas obrigações',
            whyItMatters: 'Sob AGPL-3.0, oferecer software modificado por rede aciona a mesma obrigação de divulgação que distribuir uma cópia aciona sob GPL — confirme em qual categoria sua implantação planejada se enquadra antes de modificar o código.',
          },
          {
            title: 'Verifique se há um acordo de licença de colaborador (CLA) caso planeje contribuir',
            whyItMatters: 'Um CLA pode conceder ao mantenedor do projeto direitos mais amplos sobre sua contribuição do que a própria licença do projeto concede aos usuários — relevante principalmente se você pretende enviar código de volta ao projeto, não se apenas o consome.',
          },
          {
            title: 'Verifique restrições de marca separadamente da licença do código',
            whyItMatters: 'Uma licença de código permissiva ou copyleft não concede automaticamente direitos sobre o nome ou logotipo do projeto — fazer fork e rebatizar uma ferramenta pode ser bloqueado por direito de marca mesmo quando a licença do código de outra forma permitiria o fork.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        content:
          '**A maioria dos problemas relacionados a licenças vem de não consultar o documento-fonte, não de interpretar mal uma licença que já foi realmente lida.**',
        items: [
          'Confiar na afirmação "open source" de uma página de marketing em vez de ler o arquivo LICENSE real no repositório.',
          'Presumir que AGPL-3.0 só importa se você distribuir uma cópia do software — ela também se aplica a oferecer código modificado como serviço hospedado.',
          'Tratar a licença de código de um modelo e a licença de seus pesos como o mesmo documento — frequentemente não são.',
          'Fazer fork e rebatizar uma ferramenta sem verificar restrições de marca separadamente da licença do código.',
          'Presumir que uma licença permissiva no início de um projeto ainda se aplica após uma relicenciação posterior — verifique a licença atual, não a que você lembra.',
          'Pular a revisão jurídica de uma ferramenta copyleft ou source-available porque "é gratuita" — gratuito para usar e livre de obrigações não são a mesma coisa.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — a definição formal que uma licença deve cumprir para ser certificada como open source pela OSI.',
          '[Projeto GNU — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — as próprias explicações da Free Software Foundation sobre GPL, LGPL e AGPL.',
          '[Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — texto completo da licença.',
          '[Texto da licença MIT (Open Source Initiative)](https://opensource.org/license/mit) — texto completo da licença.',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — termos e justificativa próprios da SSPL.',
          '[FAQ da Business Source License](https://mariadb.com/bsl-faq-mariadb/) — explicação de como funciona a conversão de BSL/BUSL, de uma adotante amplamente citada da licença.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'MIT ou Apache-2.0 é a melhor licença para o meu projeto?',
            a: 'Ambas são permissivas, com quase nenhuma obrigação para os usuários. A principal diferença prática da Apache-2.0 é uma concessão explícita de patente, mais relevante para organizações com portfólios de patentes; a MIT é mais curta e um pouco mais comum em pequenos projetos individuais. Nenhuma das duas restringe o uso comercial nem exige que você abra o que constrói em cima.',
          },
          {
            q: 'Usar software sob AGPL-3.0 significa que toda a minha empresa precisa virar open source?',
            a: 'Não. A obrigação da AGPL-3.0 é acionada ao distribuir ou oferecer uma versão modificada do código coberto por rede — usar internamente uma ferramenta AGPL sem modificar, ou como componente que seu produto chama sem modificar seu código-fonte, não arrasta partes não relacionadas da sua própria base de código para a licença. Torna-se relevante especificamente se você modificar o próprio código AGPL e oferecer essa versão modificada a usuários.',
          },
          {
            q: '"Source-available" é a mesma coisa que open source?',
            a: 'Não, e a distinção importa. Open source é uma certificação da Open Source Initiative baseada em uma definição específica que inclui o direito de redistribuir e modificar sem restringir o uso comercial. Licenças source-available como BSL e SSPL permitem ler o código, mas restringem usos comerciais específicos, quase sempre ofertas hospedadas concorrentes — elas não atendem à definição de open source da OSI mesmo quando um projeto se descreve como open source.',
          },
          {
            q: 'Posso usar um app de IA proprietário "gratuito" para o meu negócio?',
            a: 'Geralmente sim, sob os termos de serviço do fornecedor, mas você assume um risco de dependência: sem acesso ao código-fonte não é possível auditar o que o software faz com seus dados, não há direito de autoalojar uma versão modificada, e não há garantia de que o fornecedor manterá o produto gratuito, sem restrições ou atualizado. Leia os termos de serviço, não só o preço.',
          },
          {
            q: 'Licenças de modelos de IA funcionam do mesmo jeito que licenças de software?',
            a: 'Não exatamente. Licenças de modelos são mais recentes e menos padronizadas. Alguns lançamentos usam uma licença de software permissiva padrão aplicada diretamente aos pesos; outros usam uma licença criada especificamente como RAIL/OpenRAIL com uma lista específica de usos proibidos; outros usam uma licença comunitária personalizada com limites de escala de uso e restrições de finalidade. Sempre verifique a licença específica anexada aos pesos de modelo que você está baixando, separadamente da licença que cobre o código usado para executá-los.',
          },
          {
            q: 'Por que alguns projetos open source mudam depois para uma licença mais restritiva?',
            a: 'O motivo mais citado é um grande provedor de nuvem oferecendo o projeto como serviço hospedado concorrente sem contribuir de volta para o desenvolvimento — migrar para uma licença source-available (BSL, SSPL) ou adicionar uma restrição como a Commons Clause permite ao mantenedor manter o código visível e majoritariamente utilizável enquanto bloqueia esse uso concorrente específico. Esse padrão tem se repetido na indústria de software.',
          },
          {
            q: 'O que uma startup deve verificar antes de construir um produto comercial sobre uma ferramenta open source?',
            a: 'Ler o arquivo de licença real, não uma landing page; determinar se planeja modificar o código subjacente, o que tipicamente aciona obrigações de copyleft e AGPL-3.0; verificar um possível limite de escala de uso ou finalidade se um modelo de IA estiver envolvido; e obter uma revisão jurídica antes que a ferramenta se torne infraestrutura central da qual seu produto depende.',
          },
          {
            q: 'Este artigo é aconselhamento jurídico?',
            a: 'Não. Este artigo explica em linguagem simples, para fins de orientação, como os mecanismos de licença comuns geralmente funcionam. Os termos de licença variam por projeto e versão, a interpretação pode depender da jurisdição, e as consequências de um erro escalam de acordo com quão comercial é sua implantação — consulte um advogado qualificado para orientação sobre uma ferramenta, implantação ou decisão de negócio específica.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — mais de 160 ferramentas de LLM local com a licença listada em cada entrada.',
          '[Análise do Dify AI Workflow Builder](/pt/power-local-llm/dify-ai-workflow-builder-review) — uma análise que nomeia sua licença; use este guia para entender o que essa licença significa para sua implantação.',
          '[Conteúdo gerado por IA e risco de propriedade intelectual](/pt/power-local-llm/ai-generated-content-ip-risk) — as questões de propriedade intelectual que acompanham o licenciamento quando você implanta comercialmente saídas geradas por IA.',
          '[Segurança de IA agêntica: identidade e acesso](/pt/power-local-llm/agentic-ai-security-identity-access) — considerações de segurança e governança para implantações de IA autoalojadas, uma preocupação complementar à conformidade de licenças.',
          '[RAG local compatível com LGPD para documentos sensíveis](/pt/power-local-llm/local-rag-for-private-business-data) — risco de licença e risco de residência de dados/conformidade são checklists separadas; este guia cobre o lado da conformidade.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Licenças de software de IA e open source explicadas: MIT vs Apache vs GPL vs AGPL vs proprietária',
      description: 'Licenças de software open source e de IA explicadas: permissiva, copyleft, AGPL, source-available e licenças de modelos de IA — o que verificar antes de usar qualquer ferramenta.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores, fundadores de startups e tomadores de decisão técnica' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com/pt](https://www.promptquorum.com/pt)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/pt/power-local-llm](https://www.promptquorum.com/pt/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'Licenças de software de IA e open source explicadas', item: '[www.promptquorum.com/pt/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/pt/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
  ja: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'AI・オープンソースソフトウェアライセンス完全解説：MIT・Apache・GPL・AGPL・プロプライエタリの違い',
    seoTitle: 'AI・OSSライセンス解説（MIT・GPL・AGPL）',
    intro:
      'このサイトでレビューしているローカルLLMツール、RAGフレームワーク、AIコーディングアシスタントはすべて、MIT・Apache-2.0・AGPL-3.0・source-availableライセンス・クローズドな「無料」デスクトップアプリのいずれかのライセンスで配布されています。そのライセンスは、機能比較よりもはるかに大きく「実際にそのツールを使えるかどうか」を左右します。本ガイドでは、オープンソースソフトウェアとAIモデルで出会うライセンスファミリーを解説します — それぞれが何を許可し何を要求するか、由来、想定される対象者、そして趣味プロジェクト・スタートアップ製品・社内システム・再販するクライアント案件のどれであっても導入前に確認すべき具体的なポイントです。これは分類ガイドであり個別ツールの一覧表ではありません — 特定のレビュー済みツールがどのライセンスかは各レビューまたは[ソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory)を参照してください。本記事は、そのライセンス名が分かった後で「実際に何を意味するのか」を説明します。',
    metaDescription:
      'オープンソース・AIツールライセンス解説：permissive、copyleft、AGPL、source-available、AIモデルライセンス — ツール導入前に確認すべきポイント。',
    twitterDescription:
      'MIT、Apache-2.0、GPL、AGPL、source-available、AIモデルライセンスを平易に解説。それぞれの要件、向いている人、導入前のチェックポイントまで。',
    audience:
      '自分のプロジェクト・製品・導入案件に合うオープンソース/AIツールライセンスを見極めたい開発者、スタートアップ創業者、技術的な意思決定者。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'オープンソースソフトウェアライセンスの種類',
    targetKeywords: [
      'オープンソース ライセンス 種類 解説',
      'MIT Apache GPL ライセンス 違い',
      'AGPL ライセンスとは',
      'source-available ライセンス 解説',
      'AIモデル ライセンス open weights',
    ],
    leadAnswerBlock:
      '**オープンソース・AIツールのライセンスは実務上5つのファミリーに分かれます — permissive（MIT、Apache-2.0、BSD）、copyleft（GPL、LGPL）、network copyleft（AGPL-3.0）、source-available（BSL、SSPL）、プロプライエタリ/クローズド無料。加えて、独自の利用制限を持つAIモデル固有ライセンス（RAIL、open-weightコミュニティライセンス）が別カテゴリとして存在します。**どれが重要かは、あなたが趣味利用者か、商用製品を出すスタートアップか、社内でツールを組み込む企業かによって決まります — 「どのライセンスが優れているか」ではありません。',
    quickAnswerTop: {
      ja: {
        question: 'MIT、Apache-2.0、GPL、AGPLライセンスの違いは何ですか？',
        answer:
          'MITとApache-2.0はpermissive（許容的）です — ライセンス表記を残すこと以外ほぼ義務なく、コードを利用・改変・再販できます。GPLはcopyleftです — 改変版を配布する場合、その改変部分を同じライセンスで公開する必要があります。AGPL-3.0はこの義務をネットワークサービスとして運用するだけの場合にも拡張し、GPLがSaaSに残す抜け道を塞ぎます。プロプライエタリおよびsource-availableライセンス（BSL、SSPL）はオープンソースの定義から完全に外れ、特定の商用利用（多くはライセンス保有者自身のホスティング製品と競合する利用）を制限します。',
        bullets: [
          'MIT・Apache-2.0（permissive）：自由に利用・改変・再販可能 — 義務はライセンス/著作権表記の保持のみ',
          'GPL・LGPL（copyleft）：改変版の配布には、変更部分を同じライセンスで公開することが必要',
          'AGPL-3.0（network copyleft）：配布せずホスティングサービスとして運用するだけでも同じ義務が発生',
          'BSL/SSPL（source-available）：ソースは閲覧可能だが利用制限あり — マーケティング上の「オープンソース」表記に反し、通常OSI承認のオープンソースには該当しない',
          'AIモデルライセンス（RAIL、open-weightコミュニティライセンス）は標準的なコードライセンスを超える利用条件・用途制限を追加することが多い',
          'ツールを土台に構築する前に、ランディングページの主張ではなくリポジトリ内の実際のLICENSEファイルを必ず確認すること',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'Permissiveライセンス：MIT・Apache-2.0・BSD', anchor: '#permissive-licenses' },
      { label: 'Copyleftとは：GPL・LGPLファミリー', anchor: '#copyleft-gpl' },
      { label: 'AGPL-3.0がSaaSの抜け道を塞ぐ仕組み', anchor: '#agpl-saas-loophole' },
      { label: 'Source-Available/「フェアコード」ライセンス', anchor: '#source-available-fair-code' },
      { label: 'プロプライエタリ／Freemium「無料」ライセンス', anchor: '#proprietary-freemium' },
      { label: 'AIモデルライセンス：RAILとOpen Weights', anchor: '#ai-model-licenses' },
      { label: '誰がどのライセンスを気にすべきか', anchor: '#who-should-care' },
      { label: '導入前ライセンスチェックリスト', anchor: '#pre-adoption-checklist' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**ライセンスファミリーは実務上5つに分類できます：permissive、copyleft、network copyleft、source-available、プロプライエタリ/クローズド。加えて独自カテゴリのAIモデル固有ライセンスがあります。** ツールがどのグループに属するかを知ることは、機能一覧よりも「使ってよいかどうか」を明確にします。',
          '**Permissiveライセンス（MIT、Apache-2.0、BSD）はほぼ義務を課しません。** クローズドな商用製品にコードを組み込み、自社のソースコードを一切公開しなくても構いません。',
          '**Copyleftライセンス（GPL、LGPL）が「ウイルス的」なのは、限定的かつ具体的な意味においてです。** 対象コードの改変版を配布する場合、その変更部分を同じライセンスで公開する義務がありますが、単に隣接して動くだけの無関係なソフトウェアにまで義務は及びません。',
          '**AGPL-3.0は、GPLがホスティングサービスに残す抜け道を塞ぎます。** AGPLライセンスのコードを改変し、ネットワーク（SaaS）経由でのみ提供する場合でも、改変後のソースコードを公開しなければなりません。これはGPL単体では要求されません。',
          '**BSLやSSPLのようなsource-availableライセンスは、ランディングページが何と言おうとOSI承認のオープンソースではありません。** 特定の商用利用、通常はクラウドプロバイダーが競合ホスティングサービスとして再販することを防ぐ目的で制限がかけられています。',
          '**リポジトリ内のライセンスファイルだけが唯一信頼できる情報源です — 価格ページやREADMEのバッジ、マーケティングの主張ではありません。** 本ガイドは一般的な情報提供であり法的助言ではありません。ライセンス条件がビジネスに重大な影響を与える導入案件では弁護士にご相談ください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'オープンソース・AIツールのライセンスは実務上5つのファミリー — permissive、copyleft、network copyleft（AGPL）、source-available、プロプライエタリ — に分かれ、それぞれソフトウェアの利用・改変・再配布に異なる義務を課す。',
          },
          {
            type: 'plain-terms',
            text: 'ソフトウェアライセンスとは、他人のコードで何をしてよいかを定めたルールブックです。permissiveライセンスはほぼ何でも許可し、copyleftライセンスは変更部分を公開する義務を課し、source-availableライセンスはコードの閲覧は許すものの商用利用を制限します。',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**MIT**は最も短く一般的なpermissiveライセンス — 約170語、特許条項なし。',
          '**Apache-2.0**にはMITにない明示的な特許許諾条項があり、企業発プロジェクトで好まれる理由の一つです。',
          '**GPL**はソフトウェアを配布する場合にのみソースコード開示を要求し、AGPL-3.0はこの要求をネットワークサービスとしての運用にも拡張します。',
          '**OSI承認の「オープンソース」**はOpen Source Initiativeによる具体的な認証であり、「source-available」「fair-code」はこの定義を満たさないライセンスを指すマーケティング用語です。',
          '**AIモデルライセンスはコードライセンスとは別カテゴリです。** ツールのコードはApache-2.0でも、ダウンロードするモデルの重みはまったく異なる、より制限の強い条件を持つ場合があります。',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: 'Permissiveライセンスとは？MIT・Apache-2.0・BSD',
        content:
          '**Permissiveライセンスは、著作権表記の保持以外ほぼ義務なく、クローズドな商用製品への組み込みも含めてコードの利用・改変・再配布を許可します。** 最も制限の少ないライセンスファミリーであり、自社コードを一切公開しない企業を含め、最大限の採用を狙うインフラ系プロジェクトのデフォルトの選択肢です。',
        items: [
          '**MITライセンス**はマサチューセッツ工科大学（MIT）で誕生し、大学発ソフトウェアを最小限の制限で公開する手段として使われました。約170語という短さで、ほぼ無制限の権利を付与し、再配布するコピーや実質的な部分に元の著作権・ライセンス文を残すことのみを求めます。',
          '**Apache License 2.0**はApache Software Foundationに由来し、企業やコミュニティの貢献者が大規模な協業プロジェクトで共有できる法的枠組みとして生まれました。MITと異なり明示的な特許許諾条項を含み、貢献者はコードに関する特許権をユーザーにライセンスします — これが特許ポートフォリオを持つ企業に好まれる理由です。',
          '**BSDライセンス**（2条項・3条項）は、カリフォルニア大学バークレー校がBerkeley Software Distributionオペレーティングシステム向けに生み出したものです。3条項版には、無許可でオリジナル作者の名前を派生製品の宣伝に使うことを禁じる非推奨条項が追加されています。',
          '**利用者にとっての実務的な効果：**permissiveライセンスのツールをフォーク・改変・組み込み・クローズド製品の一部として販売しても、自社のソースコードを公開する必要は一切ありません — 実際のリスクは、配布物から必須の著作権/ライセンス表記を落としてしまうことだけです。',
          '**このサイトのレビューにおける実例：**Ollamaとllama.cppはいずれもMIT、vLLMはApache-2.0です — 3つともソース開示義務を発生させずに商用製品へ組み込めます。',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: 'Copyleftとは？GPL・LGPLファミリー',
        content:
          '**Copyleftライセンスは、対象コードの改変版を配布する場合、その変更部分を同じライセンスで公開することを求めます。** この義務はコード自体に付随するものであり、単に隣接して動作するあらゆるプログラムに及ぶわけではありません — よくある「ウイルス的ライセンス」という表現は、実際の義務の範囲を過大に描いています。',
        items: [
          '**GNU General Public License（GPL）**はリチャード・ストールマンとFree Software FoundationがGNUプロジェクトのライセンスとして書いたもので、「ソフトウェアの自由は下流に保存されるべき」という考えに基づいています — 改変版を受け取った人は、元の作者と同じ権利を持つべきという発想です。',
          '**GPL v2とGPL v3**は主に特許に関する文言と互換性規定で異なります。v3では特許報復条項と反ティボ条項（法的に実行する権利がある改変済みソフトウェアの実行をブロックするハードウェアを防ぐ条項）が明示的に追加されました。',
          '**GNU Lesser General Public License（LGPL）**は、ライブラリに限定してGPLを緩和したものです — ライブラリコンポーネントが差し替え可能で、その独自のソースコードが入手可能である限り、LGPLライブラリをプロプライエタリなアプリケーションにリンクしても、アプリケーション自体をオープンソース化する必要はありません。',
          '**義務を実際に発生させるもの：**GPL対象コードの改変版を配布することです。単に社内で未改変のGPLソフトウェアを使う、あるいはGPLライセンスのOSの上でプロプライエタリなソフトウェアを動かすだけでは、自社コードが自動的にGPL下に置かれることはありません。',
          '**注意すべき対象：**GPLツールをフォークして商用製品の中核として改変する予定のスタートアップは、その変更を公開するか、フォークを避けるかの計画が必要です。未改変のGPLツールを社内でのみ利用する企業には、この義務は発生しません。',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'AGPL-3.0がSaaSの抜け道を塞ぐ仕組み',
        content:
          '**GNU Affero General Public License（AGPL-3.0）は、GPLにはない要件を1つ追加しています：AGPL対象コードを改変し、ネットワーク経由でユーザーに利用可能にする場合、物理的にコピーを配布しなくても、そのユーザーに改変後のソースコードを提供しなければなりません。** これがこのライセンスファミリーを定義する特徴であり、「配布はしていない、ホスティングしているだけ」という解釈が安全だと思い込むチームを最も驚かせるポイントです。',
        items: [
          '**塞がれた抜け道：**純粋なGPLの下では、改変版をホスティングされたWebサービスとして運用することは、ライセンスが発動する法的な意味での「配布」に該当しません — 企業はGPLコードを取得し、改変し、SaaS製品としてのみ提供し、その変更を公開する必要が一切ないという状況が生まれ得ました。これは非公式に「ASPの抜け道」（application service provider）や「SaaSの抜け道」と呼ばれるようになりました。',
          '**AGPL-3.0はこの抜け道を塞ぐために特別に書かれました。**ネットワーク相互作用条項を追加することで、改変されたソフトウェアの機能をネットワーク経由でユーザーに提供することが、物理的なコピーを配布するのと同じソース開示義務を発生させるようにしています。',
          '**ホスティングや再販にとって重要な理由：**AGPLライセンスのツールを取得し、改変し、ホスティングサービスとしてクライアントに提供する代理店やホスティングプロバイダーは、そのユーザーに改変後のソースコードを提供しなければなりません — 未改変のまま運用する場合、この義務は発生しません。',
          '**このサイトのレビューにおける実例：**Jan、KoboldCpp、SillyTavern、text-generation-webuiはAGPL-3.0で提供されています — 個人利用や社内利用として未改変のまま自己ホスティングする分には問題ありませんが、それを改変してホスティングアクセスを再販する時点で法的な状況は大きく変わります。',
          '**これはライセンスの仕組みに関する一般的な説明であり、法的助言ではありません。**具体的な導入がAGPL-3.0の正確な文言における「ネットワーク経由で提供する」に該当するかどうかは、あなたの特定のアーキテクチャを確認する弁護士に相談すべき事項です。',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: 'Source-Available・「フェアコード」ライセンスとは？',
        content:
          '**Source-Availableライセンスは誰でもコードを読むことを許可しますが、特定の商用利用（多くの場合、競合するホスティングサービスとしての提供）を制限します。** しばしば「オープンソース」として宣伝されますが、Business Source License（BSL/BUSL）やServer Side Public License（SSPL）といったライセンスはOpen Source Initiativeの承認を受けておらず、その定義を満たしていません。',
        items: [
          '**Business Source License（BSL、BUSLとも呼ばれる）**は、当初からソースコードへのアクセスと広範な利用権を付与し、将来のある特定の日付でライセンスが真のオープンソースライセンス（多くの場合Apache-2.0や類似のpermissiveライセンス）に転換するという構造を持ちます — その転換までは、通常は競合するホスティング提供を防ぐ目的の商用利用制限が適用されます。',
          '**Server Side Public License（SSPL）**はMongoDBが作成したもので、ソフトウェアをサービスとして提供する者に対し、その周囲に構築されたサービススタック全体もオープンソース化することを要求します — AGPL-3.0よりはるかに広範な義務であり、競合するクラウドプロバイダーによる商用ホスティングを実質的に不可能にする意図で書かれています。',
          '**Commons Clause**は、それ以外は許容的またはcopyleftのベースライセンスに追加される制限で、自由な利用・改変は認めつつ、ソフトウェアの販売や有料ホスティングサービスとしての提供を特に禁止します。',
          '**プロジェクトがこうしたライセンスへ移行する理由：**完全にオープンなライセンスで始まったプロジェクトが後にsource-availableライセンスを採用するのは、多くの場合、大手クラウドプロバイダーが開発への貢献なしにそのプロジェクトをホスティングサービスとして提供していることへの対応です。source-availableライセンスへの移行により、メンテナーはオープン性の大部分を保ちつつ、この特定の競合利用を阻止できます。',
          '**利用者にとっての実務的な効果：**通常、社内利用目的でsource-availableソフトウェアを読み、自己ホスティングし、改変することに問題はありません。制限が発動するのは、ライセンス保有者自身の提供物と競合するホスティング製品として再販しようとする時です — 文言はプロジェクトごとに大きく異なるため、具体的な商用利用条項を必ず読んでください。',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: 'プロプライエタリ・Freemium「無料」ライセンスとは？',
        content:
          '**ダウンロードページで「無料」と表示されているツールが、必ずしもオープンソースとは限りません — 人気の高いデスクトップAIアプリの多くはプロプライエタリなクローズドソースソフトウェアで、無償配布されていても、基盤コードを閲覧・改変・再配布する権利を与えるライセンスは存在しません。** この区別が最も重要になるのは継続性の観点です：プロプライエタリなベンダーは価格を変更したり制限を追加したり、製品を完全に終了したりでき、あなたには独立したフォークを維持し続ける法的権利がありません。',
        items: [
          '**比較表の「無料（クローズド）」は無償のプロプライエタリソフトウェアを意味します。**コンパイル済みアプリケーションをベンダーの利用規約の下で使用できますが、ソースコードへのアクセス権はなく、改変・監査・フォークする権利もありません。',
          '**オープンソース代替との主なトレードオフ：**単一ベンダーがユーザー体験全体をコントロールするため、プロプライエタリな無料アプリはしばしば洗練されておりインストールも簡単です — しかし、そのベンダーが今後も無料・安全・メンテナンス済みの状態を保つ意思を持ち続けるかどうかに完全に依存することになります。',
          '**ベンダーロックインのリスク：**ソースコードへのアクセスがないため、改変版を自己ホスティングすること、アプリケーションがデータをどう扱っているか正確に監査すること、ベンダーがメンテナンスを止めたり価格モデルを変更したり閉鎖したりした場合に開発を継続することができません。',
          '**特に注意すべき対象：**プロプライエタリな無料ツールを中心にワークフローや業務プロセスを構築する場合は、文書化された代替計画を持つべきです — どのベンダー依存にも適用すべきなのと同じデューデリジェンスです。「無料」は「永続的」でも「保証された」ものでもありません。',
          '**Source-Availableとは異なる点：**Source-Availableライセンス（BSL、SSPL）は商用利用が制限されていても少なくともコードを読み監査することを許しますが、完全にプロプライエタリなツールは、そのコードも保証も提供しません。',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: 'AIモデルライセンスの仕組み：Open Weights、RAIL、利用制限条項',
        content:
          '**モデルのライセンスは、それを実行するソフトウェアを対象とするライセンスとは別個の法的文書です — ツールのコードがApache-2.0であっても、ダウンロードするモデルの重みはまったく別の、より制限的な場合もあるライセンスを持つことがあります。** AIモデルのライセンスはソフトウェアライセンスに比べて歴史が浅く標準化も進んでおらず、モデルのリリースごとに条件が大きく異なります。',
        items: [
          '**完全にpermissiveな重み：**一部のモデルファミリーは、標準的なpermissiveソフトウェアライセンス（多くの場合Apache-2.0）で重みを公開し、コードに与えるのと同じ広範な利用権 — 用途制限のない商用利用を含む — を付与します。',
          '**RAILおよびOpenRAILライセンス**（Responsible AI License）は、BigScienceによるBLOOMモデルの公開に伴って誕生し、法律研究者と共同で設計され、オープンアクセスと具体的な禁止用途のリストを組み合わせています — 一般的に偽情報の生成、差別的な意思決定、法律違反となるコンテンツを禁じる一方、それ以外の広範な商用利用は認めます。',
          '**独自の「コミュニティ」または「open-weight」ライセンス：**複数の主要モデル提供元は、オープンライセンスのように見えつつ用途条件を追加する独自ライセンスで重みを公開しています。最もよく引用される例は、Metaがオープン公開しているモデルの重みに付与するコミュニティライセンスです — 広範な無料利用を認めつつ、一定の利用規模のしきい値を超えると別途商用契約が必要になる条件と、許容利用制限を追加しています。',
          '**具体的に確認すべき点：**商用利用がそもそも許可されているか、条件が変わる利用規模や収益のしきい値があるか、許容利用ポリシーが何を禁止しているか、そしてモデルの出力を使って競合モデルを学習することをライセンスが制限しているか — この最後の制限は複数のモデル固有ライセンスに見られ、標準的なソフトウェアライセンスには相当する項目がありません。',
          '**これは法的助言ではありません。**モデルのライセンス条件は同じ提供元のリリース間でも変わるため、同じ組織の以前のリリースとの継続性を前提とせず、実際に導入予定の特定のモデルの重みに付随する正確なライセンス文を確認してください。',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: '誰がどのライセンスを気にすべきか',
        content:
          '**趣味利用者にとって問題にならないライセンスが、スタートアップや代理店にとっては現実的なリスクになり得ます。** 同じライセンス条件が全員に適用されますが、義務が発生した場合の影響は、利用がどれだけ商用的かつ公開的かに応じて大きくなります。',
        columns: ['あなたの立場', '最も重要な点', 'すべきこと'],
        rows: [
          {
            'あなたの立場': '趣味利用者・個人利用',
            '最も重要な点': 'ほぼどのライセンスでも問題ない — 第三者への配布やホスティングを行っていないため',
            'すべきこと': 'ツールがcopyleftの場合、改変したコードを公にには再配布していないことを確認する',
          },
          {
            'あなたの立場': 'ツールの上に商用製品を構築するスタートアップ',
            '最も重要な点': 'copyleft、特にAGPL-3.0は、自社で追加した部分の公開を強制する可能性がある',
            'すべきこと': '改変・販売予定のツールを中心に設計する前にベースライセンスを確認する',
          },
          {
            'あなたの立場': 'ツールを社内で組み込む企業',
            '最も重要な点': 'copyleftの義務は配布/ホスティングで発動し、純粋な社内利用では発動しない — ただし規模の拡大でリスクが変わる',
            'すべきこと': '未改変のcopyleftツールが中核インフラになる前に法務によるライセンスレビューを受ける',
          },
          {
            'あなたの立場': '導入案件を再販する代理店・フリーランサー',
            '最も重要な点': 'AGPL-3.0＋改変＋クライアント向けホスティングは、多くの場合改変後のソースコード公開を意味する',
            'すべきこと': 'コードを実際に改変しているのか、単に未改変のまま設定/ホスティングしているだけなのかを確認する',
          },
          {
            'あなたの立場': 'ベンダーロックインを懸念するすべての人',
            '最も重要な点': 'プロプライエタリな「無料」ツールやsource-availableツールは条件変更、有料化、サービス終了があり得る',
            'すべきこと': '洗練度より長期的な独立性を重視するなら、permissiveまたはcopyleftの代替を優先する',
          },
          {
            'あなたの立場': 'データレジデンシーを評価するGDPR意識の高いチーム',
            '最も重要な点': 'ライセンスリスクはコンプライアンスリスクとは別の軸 — permissiveライセンスはデータレジデンシー要件を解決しない',
            'すべきこと': 'ライセンス条件とデータレジデンシー要件を2つの別々のチェックリストとして評価する',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: '導入前ライセンスチェックリスト：ツール導入前に確認すべき7項目',
        content:
          '**ツールのライセンス確認には数分しかかかりませんが、製品リリース後に解消するにははるかにコストがかかる法的な想定外を防げます。** オープンソースやAIツールの上に構築すると決める前に、この7項目を確認してください。',
        numberedItems: [
          {
            title: 'リポジトリ内の実際のLICENSEファイルを読む',
            whyItMatters: 'ランディングページの「オープンソース」という主張は法的な事実ではなくマーケティングである場合があります — ソースリポジトリ内のLICENSE（またはNOTICE/COPYING）ファイルこそが正式な文書であり、バッジや価格ページではありません。',
          },
          {
            title: 'ライセンスが最近変更されていないか確認する',
            whyItMatters: '商用的な牽引力を得た後、permissiveまたはcopyleftライセンスからsource-availableライセンスへ移行するプロジェクトがあります — この動きは、クラウドプロバイダーが人気オープンソースプロジェクトを貢献なしにホスティングし始めて以来、ソフトウェア業界で繰り返されてきました。現在のファイルだけでなく、リポジトリのライセンス履歴を確認してください。',
          },
          {
            title: '重要であれば、そのライセンスが実際にOSI承認かどうかを確認する',
            whyItMatters: 'BSLやSSPLのようなsource-availableライセンスは一般にオープンソースとして宣伝されますが、Open Source Initiativeの承認リストには載っていません — OSI承認がユースケース上の要件であれば、プロジェクト自身の説明を鵜呑みにせず直接リストを確認してください。',
          },
          {
            title: 'AIモデルに特有の商用利用条項・用途制限条項を読む',
            whyItMatters: 'モデルのライセンスは、商用利用を広く許可することも、利用規模のしきい値を超えると制限することも、特定の用途を完全に禁止することもあります — これらの条項は標準的なソフトウェアライセンスの文言の外にあり、コードライセンスだけを確認していると見落としやすい部分です。',
          },
          {
            title: '自己ホスティングかSaaSホスティングかで義務が変わるかを確認する',
            whyItMatters: 'AGPL-3.0の下では、改変ソフトウェアをネットワーク経由で提供することが、GPLの下でコピーを配布するのと同じ開示義務を発生させます — コードを改変する前に、予定している導入がどちらのカテゴリに該当するかを確認してください。',
          },
          {
            title: 'コード貢献を予定している場合はContributor License Agreement（CLA）を確認する',
            whyItMatters: 'CLAは、プロジェクトのライセンス自体がユーザーに与える以上の広範な権利を、あなたの貢献に対してプロジェクトメンテナーに与える場合があります — これはプロジェクトへコードを送り返す予定がある場合に主に関係し、単に利用するだけであれば関係ありません。',
          },
          {
            title: '商標に関する制限をコードライセンスとは別に確認する',
            whyItMatters: 'permissiveまたはcopyleftのコードライセンスは、自動的にプロジェクトの名称やロゴに対する権利を付与するものではありません — コードライセンス上はフォークが許可されていても、商標法によってツールのフォーク・リブランディングがブロックされる場合があります。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        content:
          '**ライセンス関連の問題の多くは、実際に読んだライセンスを誤解することよりも、ソース文書を読まずに済ませてしまうことから発生します。**',
        items: [
          'リポジトリ内の実際のLICENSEファイルを読まず、マーケティングページの「オープンソース」という主張を鵜呑みにする。',
          'AGPL-3.0はソフトウェアのコピーを配布する場合だけ関係すると思い込む — 改変コードをホスティングサービスとして提供する場合にも適用される。',
          'モデルのコードライセンスと重みのライセンスを同じ文書として扱う — 実際には別物であることが多い。',
          'コードライセンスとは別の商標制限を確認せずに、ツールをフォークしてリブランディングする。',
          'プロジェクト開始時にpermissiveだったライセンスが、その後の再ライセンス後も同じままだと思い込む — 記憶ではなく現在のライセンスを確認する。',
          '「無料だから」という理由でcopyleftやsource-availableツールの法務レビューを省略する — 無料で使えることと義務がないことは同じではない。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — OSI承認のオープンソースとして認定されるためにライセンスが満たすべき正式な定義。',
          '[GNUプロジェクト — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — GPL、LGPL、AGPLについてのFree Software Foundation自身による解説。',
          '[Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — ライセンス全文。',
          '[MITライセンス全文（Open Source Initiative）](https://opensource.org/license/mit) — ライセンス全文。',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — SSPL自身の条件と根拠。',
          '[Business Source License FAQ](https://mariadb.com/bsl-faq-mariadb/) — このライセンスの著名な採用元によるBSL/BUSL転換の仕組みの解説。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'MITとApache-2.0、自分のプロジェクトに良いのはどちらですか？',
            a: 'どちらもpermissiveで、ユーザーへの義務はほぼありません。Apache-2.0の主な実務上の違いは明示的な特許許諾条項で、特許ポートフォリオを持つ組織にとってより重要です。MITはより短く、小規模な個人プロジェクトでやや多く使われます。どちらも商用利用を制限したり、上に構築したものの公開を求めたりしません。',
          },
          {
            q: 'AGPL-3.0のソフトウェアを使うと、会社全体をオープンソース化しなければなりませんか？',
            a: 'いいえ。AGPL-3.0の義務は、対象コードの改変版をネットワーク経由で配布または提供する場合に発動します — 未改変のAGPLツールを社内で使う、あるいはソースコードを改変せずに製品が呼び出すコンポーネントとして使う場合、コードベースの無関係な部分がライセンスの対象になることはありません。関係してくるのは、AGPLコード自体を改変し、その改変版をユーザーに提供する場合です。',
          },
          {
            q: '「Source-Available」はオープンソースと同じですか？',
            a: 'いいえ、この違いは重要です。オープンソースはOpen Source Initiativeによる認証であり、商用利用を制限せずに再配布・改変する権利を含む具体的な定義に基づいています。BSLやSSPLのようなsource-availableライセンスはコードの閲覧を許しますが、特定の商用利用（多くは競合するホスティング提供）を制限します — プロジェクト自身がオープンソースを名乗っていても、OSIのオープンソース定義は満たしません。',
          },
          {
            q: '「無料」のプロプライエタリAIアプリをビジネスで使ってもいいですか？',
            a: '一般的にはベンダーの利用規約の下で使用可能ですが、ベンダー依存のリスクを負うことになります：ソースコードへのアクセスがないため、ソフトウェアがデータをどう扱っているか監査できず、改変版を自己ホスティングする権利もなく、ベンダーが製品を無料・無制限・メンテナンス済みのまま維持する保証もありません。価格だけでなく利用規約を読んでください。',
          },
          {
            q: 'AIモデルライセンスはソフトウェアライセンスと同じように機能しますか？',
            a: '完全には同じではありません。モデルライセンスはより新しく、標準化が進んでいません。一部のリリースは標準的なpermissiveソフトウェアライセンスを重みに直接適用しますが、RAIL/OpenRAILのように具体的な禁止用途リストを持つ目的別ライセンスを使うものもあれば、利用規模のしきい値や用途制限を伴う独自のコミュニティライセンスを使うものもあります。実行に使うコードのライセンスとは別に、ダウンロードするモデルの重みに付随する具体的なライセンスを必ず確認してください。',
          },
          {
            q: '一部のオープンソースプロジェクトが後により制限的なライセンスに切り替えるのはなぜですか？',
            a: '最もよく挙げられる要因は、大手クラウドプロバイダーが開発への貢献なしにそのプロジェクトを競合ホスティングサービスとして提供することです — source-availableライセンス（BSL、SSPL）への移行や、Commons Clauseのような制限の追加により、メンテナーはコードの可視性と大部分の利用可能性を保ちながら、その特定の競合利用だけを阻止できます。このパターンはソフトウェア業界で繰り返されてきました。',
          },
          {
            q: 'オープンソースツールの上に商用製品を構築する前に、スタートアップは何を確認すべきですか？',
            a: 'ランディングページではなく実際のライセンスファイルを読むこと、基盤コードを改変する予定があるかどうか（これがcopyleftやAGPL-3.0の義務を典型的に発動させる要因）を見極めること、AIモデルが関係する場合は利用規模や用途のしきい値を確認すること、そしてそのツールが製品の中核インフラになる前に法務によるライセンスレビューを受けることです。',
          },
          {
            q: 'この記事は法的助言ですか？',
            a: 'いいえ。この記事は、一般的なライセンスの仕組みが通常どう機能するかを、平易な言葉でオリエンテーション目的に解説したものです。ライセンス条件はプロジェクトやバージョンによって異なり、解釈は法域によって左右され得ます。誤った判断の結果は、導入がどれだけ商用的であるかに応じて大きくなります — 特定のツール、導入、ビジネス上の判断については、資格を持つ弁護士に相談してください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory) — 160以上のローカルLLMツールと、各項目に記載されたライセンス。',
          '[Dify AI Workflow Builderレビュー](/ja/power-local-llm/dify-ai-workflow-builder-review) — ライセンスを明記したレビュー。そのライセンスが自分の導入案件にとって何を意味するか、本ガイドで理解できます。',
          '[AI生成コンテンツとIPリスク](/ja/power-local-llm/ai-generated-content-ip-risk) — AI生成出力を商用利用する際にライセンスと並んで検討すべき知的財産権の論点。',
          '[エージェンティックAIのセキュリティ：ID・アクセス管理](/ja/power-local-llm/agentic-ai-security-identity-access) — 自己ホスティングAI導入におけるセキュリティ・ガバナンスの検討事項。ライセンスコンプライアンスと並ぶ論点。',
          '[機密文書向けGDPR準拠のローカルRAG](/ja/power-local-llm/local-rag-for-private-business-data) — ライセンスリスクとデータレジデンシー/コンプライアンスリスクは別々のチェックリスト。本記事はコンプライアンス側を扱います。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AI・オープンソースソフトウェアライセンス完全解説：MIT・Apache・GPL・AGPL・プロプライエタリの違い',
      description: 'オープンソース・AIツールライセンス解説：permissive、copyleft、AGPL、source-available、AIモデルライセンス — ツール導入前に確認すべきポイント。',
      url: 'https://www.promptquorum.com/ja/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'ja',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '開発者、スタートアップ創業者、技術的な意思決定者' },
      about: [
        { '@type': 'Thing', name: 'MITライセンス' },
        { '@type': 'Thing', name: 'AGPL-3.0' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com/ja](https://www.promptquorum.com/ja)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/ja/power-local-llm](https://www.promptquorum.com/ja/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'AI・オープンソースソフトウェアライセンス完全解説', item: '[www.promptquorum.com/ja/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/ja/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
  zh: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'AI与开源软件许可证详解：MIT vs Apache vs GPL vs AGPL vs 专有许可证',
    seoTitle: 'AI与开源许可证详解（MIT、GPL、AGPL）',
    intro:
      '本站评测过的每一款本地LLM工具、RAG框架和AI编程助手都在某种许可证下发布——MIT、Apache-2.0、AGPL-3.0、source-available许可证，或封闭的"免费"桌面应用——而这份许可证对你能否真正使用该工具的影响,远大于任何功能对比。本指南解释你会在开源软件和AI模型中遇到的许可证族群:每种许可证允许什么、要求什么、起源于何处、面向哪类用户,以及在个人项目、创业产品、企业内部系统或转售给客户的部署之前具体需要检查什么。这是一份分类指南,不是逐个工具的许可证对照表——它不会告诉你某个具体评测工具用的是哪种许可证(那部分请查看对应评测或[软件目录](/zh/power-local-llm/local-llm-software-directory)),但一旦你知道某个许可证的名字,本文会解释它到底意味着什么。',
    metaDescription:
      '开源与AI工具许可证详解:permissive、copyleft、AGPL、source-available和AI模型许可证——部署任何工具前应检查的要点。',
    twitterDescription:
      'MIT、Apache-2.0、GPL、AGPL、source-available与AI模型许可证通俗讲解——各自要求什么、适合谁,以及部署前该检查什么。',
    audience:
      '需要为项目、产品或部署选择合适开源或AI工具许可证的开发者、创业公司创始人及技术决策者。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '开源软件许可证类型',
    targetKeywords: [
      '开源许可证类型详解',
      'MIT vs Apache vs GPL 许可证',
      'AGPL许可证是什么',
      'source-available许可证详解',
      'AI模型许可证 open weights',
    ],
    leadAnswerBlock:
      '**开源与AI工具许可证在实践中分为五大类——permissive宽松型(MIT、Apache-2.0、BSD)、copyleft著佐权型(GPL、LGPL)、网络著佐权型(AGPL-3.0)、source-available源码可见型(BSL、SSPL)、专有/封闭免费型——外加一组带有自身使用限制的AI模型专属许可证(RAIL、开放权重社区许可证)。**哪一种与你相关,取决于你是个人爱好者、正在推出商业产品的创业公司,还是在内部集成工具的企业,而不是取决于哪种许可证"更好"。',
    quickAnswerTop: {
      zh: {
        question: 'MIT、Apache-2.0、GPL和AGPL许可证有什么区别?',
        answer:
          'MIT和Apache-2.0是宽松型许可证——你几乎无需承担任何义务(除了保留许可证声明)即可使用、修改和转售代码。GPL是著佐权许可证——若你分发修改版本,必须以相同许可证发布你的修改内容。AGPL-3.0将这一义务延伸到你仅作为网络服务运行的软件,从而堵住了GPL为SaaS留下的漏洞。专有和source-available许可证(BSL、SSPL)完全不在开源定义之内,限制特定商业用途,最常见的是防止与许可证持有方自身的托管产品形成竞争。',
        bullets: [
          'MIT和Apache-2.0(宽松型):自由使用、修改、转售——唯一义务是保留许可证/版权声明',
          'GPL和LGPL(著佐权型):分发修改版本需以相同许可证发布你的修改',
          'AGPL-3.0(网络著佐权型):即使仅作为托管服务运行而不分发,同样的义务依然适用',
          'BSL/SSPL(source-available):源码可见但使用受限——尽管有营销宣传,通常不属于OSI认证的"开源"',
          'AI模型许可证(RAIL、开放权重社区许可证)常常在标准代码许可证之外增加可接受使用和用途限制',
          '在基于某个工具构建之前,务必阅读代码仓库中实际的LICENSE文件,而不是登陆页面上的说法',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '速览要点', anchor: '#quick-facts' },
      { label: '宽松型许可证:MIT、Apache-2.0、BSD', anchor: '#permissive-licenses' },
      { label: '什么是著佐权?GPL与LGPL家族', anchor: '#copyleft-gpl' },
      { label: 'AGPL-3.0如何堵住SaaS漏洞', anchor: '#agpl-saas-loophole' },
      { label: 'Source-Available与"公平代码"许可证', anchor: '#source-available-fair-code' },
      { label: '专有与Freemium"免费"许可证', anchor: '#proprietary-freemium' },
      { label: 'AI模型许可证:RAIL与开放权重', anchor: '#ai-model-licenses' },
      { label: '谁该关心哪种许可证?', anchor: '#who-should-care' },
      { label: '采用前许可证核对清单', anchor: '#pre-adoption-checklist' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '参考来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**许可证族群在实践中分为五大类:宽松型、著佐权型、网络著佐权型、source-available型和专有/封闭型,外加一组独立的AI模型专属许可证。**了解一个工具属于哪一类,比任何功能列表都更能说明你能否使用它。',
          '**宽松型许可证(MIT、Apache-2.0、BSD)几乎不设义务。**你可以把代码嵌入封闭商业产品,永远不必公开自己的源码。',
          '**著佐权许可证(GPL、LGPL)的"传染性"仅限于一个特定而狭窄的范围。**分发受保护代码的修改版本需要以相同许可证公开你的修改,但这一义务不会波及只是与之并存运行的无关软件。',
          '**AGPL-3.0堵住了GPL为托管服务留下的漏洞。**如果你修改了AGPL许可的代码,并且只通过网络(SaaS)提供,你仍然必须公开修改后的源码——单靠GPL并不要求这样做。',
          '**像BSL和SSPL这样的source-available许可证,不管登陆页面怎么宣传,都不是OSI认证的开源。**它们限制特定商业用途,通常是为了阻止云服务商将该项目转售为竞争性托管服务。',
          '**代码仓库中的许可证文件才是唯一可靠的来源——不是定价页面、README徽章或营销说法。**本指南提供一般性信息,不构成法律意见;如果许可证条款对你的业务有重大影响,请咨询律师。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '开源与AI工具许可证在实践中分为五大类——宽松型、著佐权型、网络著佐权型(AGPL)、source-available型和专有型——各自对如何使用、修改和再分发软件施加不同义务。',
          },
          {
            type: 'plain-terms',
            text: '软件许可证是关于你能对别人的代码做什么的规则手册。宽松型许可证几乎允许任何操作;著佐权许可证要求你把修改回馈开源社区;source-available许可证允许你查看代码,但限制商业用途。',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览要点',
        items: [
          '**MIT**是最短、最常见的宽松型许可证——约170个单词,没有专利条款。',
          '**Apache-2.0**加入了MIT没有的明确专利授权条款,这也是许多企业主导项目更偏好它的原因。',
          '**GPL**仅在分发软件时要求公开源码;AGPL-3.0将这一要求延伸到作为网络服务运行的情形。',
          '**OSI认证的"开源"**是Open Source Initiative给出的具体认证;"source-available"和"fair-code"是营销术语,指那些不符合该定义的许可证。',
          '**AI模型许可证是与代码许可证完全独立的类别。**一个工具的代码可能是Apache-2.0,而它下载的模型权重却带有完全不同、往往更严格的条款。',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: '什么是宽松型许可证?MIT、Apache-2.0与BSD',
        content:
          '**宽松型许可证允许你使用、修改和再分发代码——包括嵌入封闭商业产品——几乎不设义务,只需保留版权声明。**这是限制最少的许可证族群,也是希望获得最广泛采用的基础设施类项目的默认选择,包括那些永远不会公开自己一行代码的公司。',
        items: [
          '**MIT许可证**起源于麻省理工学院(MIT),用来以最小限制发布大学开发的软件。全文约170个单词,授予近乎无限的权利,仅要求在任何再分发的副本或实质性部分中保留原始版权和许可证文本。',
          '**Apache License 2.0**来自Apache软件基金会,该基金会的成立是为了让企业与社区贡献者在大型协作项目中拥有共同的法律框架。与MIT不同,它包含明确的专利授权条款——贡献者将其涵盖代码的专利权授予用户——这也是许多拥有专利组合的公司偏好它的原因。',
          '**BSD许可证**(2条款和3条款版本)起源于加州大学伯克利分校,用于Berkeley Software Distribution操作系统。3条款版本额外增加了一条"不得背书"条款,禁止在未经许可的情况下使用原作者姓名来宣传衍生产品。',
          '**对使用者的实际影响:**你可以对宽松型许可证的工具进行fork、修改、嵌入,并作为封闭产品的一部分销售,永远不必公开自己的源码——真正的风险仅在于分发时遗漏了必须保留的版权/许可证声明。',
          '**本站评测中的真实例子:**Ollama和llama.cpp均采用MIT许可证;vLLM采用Apache-2.0许可证——三者都可以嵌入商业产品而不会触发任何源码公开义务。',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: '什么是著佐权(Copyleft)?GPL与LGPL家族',
        content:
          '**著佐权许可证要求:如果你分发受保护代码的修改版本,必须以相同许可证公开你的修改内容。**这一义务附着在代码本身上,而不是附着在与之并存运行的每一个程序上——常见的"传染性许可证"说法夸大了这一义务的实际覆盖范围。',
        items: [
          '**GNU通用公共许可证(GPL)**由Richard Stallman和自由软件基金会撰写,作为GNU项目的许可证,其理念是软件自由应当向下游持续传递——收到修改版本的人应享有与原作者相同的权利。',
          '**GPL v2与GPL v3**的主要区别在于专利相关条款和兼容性规定;v3增加了明确的专利报复条款和反"提沃化"条款(防止出现阻止你运行有权合法运行的修改软件的硬件)。',
          '**GNU宽通用公共许可证(LGPL)**专门为库放宽了GPL的限制——只要库组件保持可替换、并且它自身的源码保持可获取,你就可以将LGPL库链接到专有应用程序中,而无需开源应用程序本身。',
          '**真正触发义务的行为:**分发GPL代码的修改版本。仅在内部使用未修改的GPL软件,或在GPL许可的操作系统上运行专有软件,本身并不会使你自己的代码自动落入GPL的约束。',
          '**谁需要格外谨慎:**计划fork并修改GPL工具作为商业产品核心的创业公司,需要一个计划——要么开源那些修改,要么避免fork;而只在内部运行未修改GPL工具的公司,并不承担这项义务。',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'AGPL-3.0如何堵住SaaS漏洞',
        content:
          '**GNU Affero通用公共许可证(AGPL-3.0)增加了一项GPL没有的要求:如果你修改了AGPL代码并通过网络向用户提供,即使你从未以物理形式分发过软件副本,也必须向这些用户提供修改后的源码。**这是这一许可证族群的核心特征,也是最容易让团队意外踩坑的地方——他们以为"我们从未分发,只是托管"就是安全的解读。',
        items: [
          '**它堵住的漏洞:**在纯GPL下,将修改版本作为托管网络服务运行,不构成触发许可证义务的法律意义上的"分发"——一家公司完全可以拿走GPL代码,修改后仅作为SaaS产品提供,却从不必公开这些修改。这种做法被非正式地称为"ASP漏洞"(应用服务提供商漏洞)或"SaaS漏洞"。',
          '**AGPL-3.0正是为了堵住这个漏洞而专门撰写的**,它增加了一条网络交互条款:通过网络向用户提供修改后软件的功能,与分发实体副本一样,同样触发源码公开义务。',
          '**这对托管和转售为何重要:**如果一家代理商或托管服务商拿走AGPL许可的工具、加以修改,再作为托管服务提供给客户,就必须向这些用户提供修改后的源码——未经修改直接运行则不会触发这项义务。',
          '**本站评测中的真实例子:**Jan、KoboldCpp、SillyTavern和text-generation-webui均采用AGPL-3.0许可证——出于个人或内部用途未经修改地自行托管完全没有问题;但一旦你修改其中之一并转售托管访问权限,法律局面就会发生实质变化。',
          '**这是对许可证机制运作方式的一般性说明,不构成法律意见**——某个具体部署是否构成AGPL-3.0确切条文中的"通过网络提供",需要由熟悉你具体架构的律师来判断。',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: '什么是Source-Available与"公平代码"许可证?',
        content:
          '**Source-available许可证允许任何人阅读代码,但限制特定商业用途,最常见的是将该软件作为竞争性托管服务提供。**它们经常被宣传为"开源",但像Business Source License(BSL/BUSL)和Server Side Public License(SSPL)这类许可证并未获得Open Source Initiative的批准,也不符合其开源定义。',
        items: [
          '**Business Source License(BSL,也称BUSL)**一开始就授予源码访问权和广泛的使用权,并设定一个未来的确定日期,届时许可证会转换为真正的开源许可证(通常是Apache-2.0或类似的宽松型许可证)——在转换之前,会适用一条明确的商业用途限制,目的通常是阻止形成竞争性托管产品。',
          '**Server Side Public License(SSPL)**由MongoDB创建,要求任何将该软件作为服务提供的一方,也必须开源他们围绕该软件构建的整套服务栈——这比AGPL-3.0的义务要宽泛得多,其撰写目的正是让竞争性云服务商的商业托管变得不切实际。',
          '**Commons Clause**是叠加在原本宽松或著佐权基础许可证之上的附加限制条款,专门禁止销售该软件或将其作为付费托管服务提供,同时仍允许自由使用和修改。',
          '**项目转向此类许可证的原因:**一个最初采用完全开放许可证、后来又改用source-available许可证的项目,通常是在应对某个大型云服务商在不回馈开发的情况下,将该项目作为托管服务提供——转向source-available许可证让维护者能够保留大部分开放性,同时阻止这种特定的竞争性使用。',
          '**对使用者的实际影响:**通常你可以毫无问题地阅读、自行托管并修改source-available软件用于内部用途;当你试图将其转售为与许可证持有方自身产品竞争的托管产品时,限制才会生效——请务必阅读具体的商业用途条款,因为不同项目之间的措辞差异很大。',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: '专有与Freemium"免费"许可证意味着什么?',
        content:
          '**下载页面上标注"免费"的工具未必是开源软件——许多流行的桌面AI应用其实是专有的闭源软件,虽然免费分发,但没有任何许可证赋予你查看、修改或再分发底层代码的权利。**这一区别对延续性最为关键:专有厂商可以随时改变定价、增加限制,或彻底停止该产品,而你没有任何法律权利去维护一个独立的fork继续运行。',
        items: [
          '**对比表中的"免费(封闭)"意味着无成本的专有软件。**你可以按照厂商的服务条款使用编译后的应用程序,但你无法访问源码,也没有权利修改、审计或fork它。',
          '**相对于开源替代方案的核心权衡:**由于单一厂商掌控整个用户体验,专有免费应用往往更精致、更易安装——但你完全依赖该厂商是否愿意持续保持它免费、安全和维护良好。',
          '**厂商锁定风险:**由于没有源码访问权,你无法自行托管修改版本,无法准确审计该应用如何处理你的数据,也无法在厂商停止维护、更改定价模式或关闭产品时继续开发。',
          '**最应该关心这一点的人:**任何围绕专有免费工具构建工作流程或业务流程的人,都应该有一份文档化的备用方案——这与你对待任何厂商依赖时应有的尽职调查是一样的,因为"免费"不等于"永久"或"有保障"。',
          '**这与source-available不同:**source-available许可证(BSL、SSPL)至少允许你阅读和审计代码,即使商业用途受限;而完全专有的工具既不提供代码,也不提供这些保障。',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: 'AI模型许可证如何运作?开放权重、RAIL与可接受使用限制',
        content:
          '**模型的许可证是与运行该模型的软件所适用许可证完全独立的法律文件——一个工具的代码可能是Apache-2.0,而它下载的模型权重却可能带有完全不同、有时更严格的许可证。**AI模型许可证比软件许可证出现得更晚,标准化程度也更低,不同模型发布之间的条款差异很大。',
        items: [
          '**完全宽松型权重:**部分模型系列以标准的宽松型软件许可证(通常是Apache-2.0)发布权重,赋予与该许可证对代码相同的广泛使用权,包括不受用途限制的商业使用。',
          '**RAIL和OpenRAIL许可证**(负责任AI许可证)起源于BigScience发布BLOOM模型时,由法律研究人员共同设计,将开放访问与一份具体的禁止用途清单结合——通常禁止生成虚假信息、歧视性决策或违法内容,同时在其他方面允许广泛的商业使用。',
          '**定制的"社区"或"开放权重"许可证:**多家主要模型提供方以量身定制的许可证发布权重,读起来像开放许可证,却附加了用途条件。被引用最多的例子是Meta附加在其公开发布模型权重上的社区许可证——它允许广泛的免费使用,但设置了一个使用规模门槛,一旦超过就需要单独的商业协议,同时还附有可接受使用限制。',
          '**具体需要检查的内容:**是否完全允许商业使用、是否存在会改变条款的使用规模或营收门槛、可接受使用政策禁止什么,以及许可证是否限制用模型输出去训练竞争模型——这最后一项限制已出现在多份模型专属许可证中,而标准软件许可证中没有对应条款。',
          '**这不构成法律意见**——同一提供方在不同发布版本之间的模型许可证条款可能变化,请核实你计划部署的具体模型权重所附的确切许可证文本,而不要假设它与该组织此前的发布版本保持一致。',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: '谁该关心哪种许可证?',
        content:
          '**对个人爱好者来说不成问题的许可证,对创业公司或代理商而言可能是真实的风险。**同样的许可证条款适用于所有人,但一旦触发义务,后果的严重程度会随着你的使用有多商业化、多公开而放大。',
        columns: ['你的身份', '最重要的事', '该怎么做'],
        rows: [
          {
            '你的身份': '爱好者/个人使用',
            '最重要的事': '几乎任何许可证都可行——你没有为他人分发或托管',
            '该怎么做': '如果工具是著佐权许可证,确认你没有公开再分发修改后的代码',
          },
          {
            '你的身份': '在某工具之上构建商业产品的创业公司',
            '最重要的事': '著佐权,尤其是AGPL-3.0,可能迫使你开源自己新增的部分',
            '该怎么做': '在围绕计划修改并出售的工具设计架构之前,先检查基础许可证',
          },
          {
            '你的身份': '在内部集成某工具的企业',
            '最重要的事': '著佐权义务在分发/托管时触发,而非纯内部使用——但规模扩大会改变风险',
            '该怎么做': '在未修改的著佐权工具成为核心基础设施之前,先获得法务的许可证审查',
          },
          {
            '你的身份': '转售部署服务的代理商或自由职业者',
            '最重要的事': 'AGPL-3.0加上修改再加上为客户托管,通常意味着必须公开修改后的源码',
            '该怎么做': '确认自己是否真的修改了代码,还是只是在未修改的情况下进行配置/托管',
          },
          {
            '你的身份': '担心厂商锁定的任何人',
            '最重要的事': '专有"免费"和source-available工具可能改变条款、增加费用或直接关闭',
            '该怎么做': '如果长期独立性比精致度更重要,优先选择宽松型或著佐权型替代方案',
          },
          {
            '你的身份': '正在评估数据驻留问题、重视GDPR的团队',
            '最重要的事': '许可证风险与合规风险是两条独立的维度——宽松型许可证并不能解决数据驻留问题',
            '该怎么做': '把许可证条款和数据驻留要求当作两份独立的核对清单分别评估',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: '采用前许可证核对清单:部署工具前应检查的7件事',
        content:
          '**核实一个工具的许可证只需几分钟,却能避免产品上线后代价高得多的法律意外。**在决定基于任何开源或AI工具进行构建之前,先完成这七项检查。',
        numberedItems: [
          {
            title: '阅读代码仓库中实际的LICENSE文件',
            whyItMatters: '登陆页面上的"开源"说法可能只是营销用语,而非法律事实——源码仓库中的LICENSE(或NOTICE/COPYING)文件才是权威文档,而不是徽章或定价页面。',
          },
          {
            title: '检查许可证是否最近发生过变更',
            whyItMatters: '一些项目在获得商业牵引力后,会从宽松型或著佐权型许可证转向source-available许可证——随着云服务商开始在不回馈的情况下托管热门开源项目,这种模式在软件行业反复出现。请查看仓库的许可证历史,而不仅仅是当前文件。',
          },
          {
            title: '如果你在意,请核实该许可证是否真的通过了OSI认证',
            whyItMatters: 'BSL和SSPL这类source-available许可证常被宣传为开源,但并不在Open Source Initiative批准的清单上——如果OSI认证是你用例的要求,请直接查阅该清单,而不是相信项目自己的描述。',
          },
          {
            title: '专门阅读AI模型的商业用途和用途限制条款',
            whyItMatters: '模型的许可证可能广泛允许商业使用,也可能在超过使用规模门槛后加以限制,或者直接禁止特定应用——这些条款超出了标准软件许可证的常规措辞,如果只检查代码许可证,很容易被忽略。',
          },
          {
            title: '确定自行托管与SaaS托管是否会改变你的义务',
            whyItMatters: '在AGPL-3.0下,通过网络提供修改后的软件,与在GPL下分发副本,会触发同样的公开义务——在修改代码之前,先确认你计划的部署属于哪一类。',
          },
          {
            title: '如果计划回馈代码,请检查是否存在贡献者许可协议(CLA)',
            whyItMatters: 'CLA可能赋予项目维护者比项目自身许可证赋予用户更广泛的权利来使用你的贡献——这主要与你打算向项目提交代码有关,如果你只是使用它,则关系不大。',
          },
          {
            title: '将商标限制与代码许可证分开检查',
            whyItMatters: '宽松型或著佐权型代码许可证并不自动授予你使用项目名称或标志的权利——即使代码许可证本身允许fork,商标法仍可能阻止你fork并重新命名一个工具。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        content:
          '**大多数与许可证相关的问题,源于没有查阅原始文档,而不是误解了一份已经真正读过的许可证。**',
        items: [
          '相信营销页面上"开源"的说法,而不去阅读代码仓库中实际的LICENSE文件。',
          '以为AGPL-3.0只在分发软件副本时才有意义——它同样适用于将修改后的代码作为托管服务提供的情况。',
          '把模型的代码许可证和权重许可证当作同一份文档处理——它们往往并不相同。',
          'fork并重新命名一个工具,却没有单独检查与代码许可证不同的商标限制。',
          '假设项目最初宽松的许可证在后来重新授权后依然适用——请核实当前的许可证,而不是你记忆中的那一份。',
          '因为工具"免费"就跳过对著佐权或source-available工具的法务审查——免费使用和没有义务并不是一回事。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — 许可证要获得OSI认证为开源必须满足的正式定义。',
          '[GNU项目 — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — 自由软件基金会对GPL、LGPL和AGPL的官方解释。',
          '[Apache软件基金会 — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — 许可证全文。',
          '[MIT许可证全文(Open Source Initiative)](https://opensource.org/license/mit) — 许可证全文。',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — SSPL的官方条款与说明。',
          '[Business Source License常见问题](https://mariadb.com/bsl-faq-mariadb/) — 由该许可证的一位知名采用方解释BSL/BUSL转换机制。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我的项目应该用MIT还是Apache-2.0许可证?',
            a: '两者都是宽松型许可证,对用户几乎没有义务。Apache-2.0在实践中的主要区别是明确的专利授权条款,这对拥有专利组合的组织更重要;MIT更短,在小型个人项目中略更常见。两者都不限制商业使用,也都不要求你开源基于它们构建的内容。',
          },
          {
            q: '使用AGPL-3.0软件是否意味着我整个公司都必须开源?',
            a: '不是。AGPL-3.0的义务在你通过网络分发或提供受保护代码的修改版本时触发——在内部使用未修改的AGPL工具,或者作为组件调用而不修改其源码,并不会把你代码库中无关的部分纳入该许可证。只有当你修改了AGPL代码本身,并将这个修改版本提供给用户时,这才变得相关。',
          },
          {
            q: '"Source-Available"等同于开源吗?',
            a: '不等同,而且这个区别很重要。开源是Open Source Initiative基于一份具体定义给出的认证,该定义包括在不限制商业使用的前提下再分发和修改的权利。像BSL和SSPL这样的source-available许可证允许阅读代码,但限制特定商业用途,最常见的是竞争性托管服务——即使一个项目自称开源,它们也不符合OSI的开源定义。',
          },
          {
            q: '我可以在业务中使用"免费"的专有AI应用吗?',
            a: '通常可以,按照厂商的服务条款使用,但你需要承担厂商依赖风险:没有源码访问权,就无法审计该软件如何处理你的数据,也没有权利自行托管修改版本,更无法保证厂商会持续让该产品保持免费、无限制或维护良好。请阅读服务条款,而不只是价格。',
          },
          {
            q: 'AI模型许可证的运作方式和软件许可证一样吗?',
            a: '并不完全一样。模型许可证出现得更晚,标准化程度更低。一些发布版本直接对权重套用标准的宽松型软件许可证;另一些使用像RAIL/OpenRAIL这样专门设计、带有具体禁止用途清单的许可证;还有一些使用带有使用规模门槛和用途限制的定制社区许可证。请务必检查你下载的具体模型权重所附的许可证,并将其与你用来运行它们的代码所适用的许可证区分开来。',
          },
          {
            q: '为什么有些开源项目后来会转向更严格的许可证?',
            a: '最常被提及的原因是某个大型云服务商在不回馈开发的情况下,将该项目作为竞争性托管服务提供——转向source-available许可证(BSL、SSPL)或增加像Commons Clause这样的限制条款,能让维护者保持代码的可见性和大部分可用性,同时阻止这种特定的竞争性使用。这种模式已在软件行业反复出现。',
          },
          {
            q: '创业公司在基于开源工具构建商业产品之前应该检查什么?',
            a: '阅读实际的许可证文件,而不是登陆页面;确定自己是否计划修改底层代码,因为这通常是触发著佐权和AGPL-3.0义务的关键;如果涉及AI模型,检查是否存在使用规模或用途门槛;并在该工具成为你产品所依赖的核心基础设施之前,获得法务的许可证审查。',
          },
          {
            q: '这篇文章算法律意见吗?',
            a: '不算。本文以通俗语言解释常见许可证机制的一般运作方式,目的是提供方向性信息。许可证条款会因项目和版本而异,解释也可能因司法辖区而不同,一旦出错,后果会随部署的商业化程度而放大——针对具体工具、具体部署或具体商业决策,请咨询合格的律师。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[完整本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory) — 160多款本地LLM工具,每个条目均标注许可证。',
          '[Dify AI工作流构建器评测](/zh/power-local-llm/dify-ai-workflow-builder-review) — 一篇明确标注许可证的评测;结合本指南理解该许可证对你的部署意味着什么。',
          '[AI生成内容与知识产权风险](/zh/power-local-llm/ai-generated-content-ip-risk) — 在商业化部署AI生成输出时,与许可证问题并存的知识产权问题。',
          '[代理式AI安全:身份与访问控制](/zh/power-local-llm/agentic-ai-security-identity-access) — 自托管AI部署的安全与治理考量,是与许可证合规并行的关注点。',
          '[面向敏感文档的GDPR合规本地RAG](/zh/power-local-llm/local-rag-for-private-business-data) — 许可证风险与数据驻留/合规风险是两份独立的核对清单;本指南涵盖合规部分。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AI与开源软件许可证详解:MIT vs Apache vs GPL vs AGPL vs 专有许可证',
      description: '开源与AI工具许可证详解:permissive、copyleft、AGPL、source-available和AI模型许可证——部署任何工具前应检查的要点。',
      url: 'https://www.promptquorum.com/zh/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'zh',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '开发者、创业公司创始人及技术决策者' },
      about: [
        { '@type': 'Thing', name: 'MIT许可证' },
        { '@type': 'Thing', name: 'AGPL-3.0' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com/zh](https://www.promptquorum.com/zh)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/zh/power-local-llm](https://www.promptquorum.com/zh/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'AI与开源软件许可证详解', item: '[www.promptquorum.com/zh/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/zh/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
  ar: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'شرح تراخيص برمجيات الذكاء الاصطناعي ومفتوحة المصدر: MIT مقابل Apache مقابل GPL مقابل AGPL مقابل الترخيص الملكي',
    seoTitle: 'شرح تراخيص الذكاء الاصطناعي ومفتوحة المصدر (MIT، GPL، AGPL)',
    intro:
      'كل أداة LLM محلية وإطار عمل RAG ومساعد برمجة بالذكاء الاصطناعي تمت مراجعته على هذا الموقع يُوزَّع بموجب ترخيص ما — MIT أو Apache-2.0 أو AGPL-3.0 أو ترخيص source-available أو تطبيق سطح مكتب "مجاني" مغلق المصدر — وهذا الترخيص يحدد ما إذا كان بإمكانك فعلاً استخدام الأداة أكثر بكثير من أي مقارنة ميزات. يشرح هذا الدليل عائلات التراخيص التي ستواجهها في البرمجيات مفتوحة المصدر ونماذج الذكاء الاصطناعي: ما يسمح به كل ترخيص وما يتطلبه، ومن أين نشأ، ولمن هو موجَّه، وما الذي يجب التحقق منه تحديداً قبل نشر أداة بموجبه — سواء كان مشروعاً شخصياً أو منتج شركة ناشئة أو نظاماً داخلياً في مؤسسة أو نشراً لعميل تعيد بيعه. هذا تصنيف عام وليس جدول بحث لكل أداة — لن يخبرك بالترخيص الذي تستخدمه أداة معينة تمت مراجعتها (راجع المراجعة الفردية أو [دليل البرمجيات](/ar/power-local-llm/local-llm-software-directory) لذلك)، لكنه يشرح ما يعنيه ذلك الترخيص فعلياً بمجرد معرفته.',
    metaDescription:
      'شرح أنواع تراخيص البرمجيات مفتوحة المصدر وأدوات الذكاء الاصطناعي: permissive وcopyleft وAGPL وsource-available وتراخيص نماذج الذكاء الاصطناعي — ما يجب التحقق منه قبل نشر أي أداة.',
    twitterDescription:
      'شرح مبسّط لتراخيص MIT وApache-2.0 وGPL وAGPL وsource-available ونماذج الذكاء الاصطناعي — ما يتطلبه كل منها، ولمن يناسب، وما يجب التحقق منه قبل النشر.',
    audience:
      'المطورون ومؤسسو الشركات الناشئة وصنّاع القرار التقني الذين يختارون ترخيص البرمجيات مفتوحة المصدر أو أدوات الذكاء الاصطناعي المناسب لمشروعهم أو منتجهم أو نشرهم.',
    readTime: '11 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'أنواع تراخيص البرمجيات مفتوحة المصدر',
    targetKeywords: [
      'أنواع تراخيص مفتوحة المصدر',
      'ترخيص MIT مقابل Apache مقابل GPL',
      'ما هو ترخيص AGPL',
      'شرح ترخيص source-available',
      'ترخيص نموذج الذكاء الاصطناعي open weights',
    ],
    leadAnswerBlock:
      '**تنقسم تراخيص البرمجيات مفتوحة المصدر وأدوات الذكاء الاصطناعي عملياً إلى خمس عائلات — permissive المتساهلة (MIT، Apache-2.0، BSD)، وcopyleft (GPL، LGPL)، وcopyleft الشبكي (AGPL-3.0)، وsource-available (BSL، SSPL)، والترخيص الملكي/المجاني المغلق — إضافة إلى مجموعة منفصلة من تراخيص نماذج الذكاء الاصطناعي المخصصة (RAIL، تراخيص المجتمع مفتوحة الأوزان) ذات قيودها الخاصة على الاستخدام.** أي منها يهمك يعتمد على ما إذا كنت هاوياً، أو شركة ناشئة تطلق منتجاً تجارياً، أو مؤسسة تدمج أداة داخلياً — وليس على أي ترخيص "أفضل".',
    quickAnswerTop: {
      ar: {
        question: 'ما الفرق بين تراخيص MIT وApache-2.0 وGPL وAGPL؟',
        answer:
          'ترخيصا MIT وApache-2.0 متساهلان — يمكنك استخدام الكود وتعديله وإعادة بيعه بالتزامات تكاد تنعدم عدا الحفاظ على إشعار الترخيص. أما GPL فهو copyleft — إذا وزّعت نسخة معدّلة، يجب عليك إصدار تعديلاتك بموجب الترخيص نفسه. يوسّع AGPL-3.0 هذا الالتزام ليشمل البرمجيات التي تشغّلها فقط كخدمة عبر الشبكة، مما يسدّ الثغرة التي يتركها GPL مفتوحة أمام نماذج SaaS. أما التراخيص الملكية وsource-available (مثل BSL وSSPL) فهي خارج تعريف المصدر المفتوح تماماً، وتقيّد استخدامات تجارية محددة، غالباً لمنافسة الخدمة المستضافة الخاصة بمالك الترخيص نفسه.',
        bullets: [
          'MIT وApache-2.0 (متساهل): استخدم وعدّل وأعد البيع بحرية — الالتزام الوحيد هو الحفاظ على إشعار الترخيص/حقوق النشر',
          'GPL وLGPL (copyleft): توزيع نسخة معدّلة يتطلب إصدار تعديلاتك بموجب الترخيص نفسه',
          'AGPL-3.0 (copyleft شبكي): ينطبق الالتزام نفسه حتى لو كنت تشغّل البرمجية فقط كخدمة مستضافة دون توزيعها',
          'BSL/SSPL (source-available): الكود مرئي لكن الاستخدام مقيّد — وعادةً ليس مصدراً مفتوحاً معتمداً من OSI رغم التسويق',
          'تراخيص نماذج الذكاء الاصطناعي (RAIL، تراخيص المجتمع مفتوحة الأوزان) غالباً ما تضيف قيود استخدام مقبول ومجال استخدام تتجاوز ترخيص الكود القياسي',
          'اقرأ دائماً ملف LICENSE الفعلي في المستودع، لا ما تدّعيه صفحة تسويقية، قبل البناء على أي أداة',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'أهم النقاط', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'التراخيص المتساهلة: MIT وApache-2.0 وBSD', anchor: '#permissive-licenses' },
      { label: 'ما هو Copyleft؟ عائلة GPL وLGPL', anchor: '#copyleft-gpl' },
      { label: 'كيف يسد AGPL-3.0 ثغرة SaaS', anchor: '#agpl-saas-loophole' },
      { label: 'تراخيص Source-Available و"الكود العادل"', anchor: '#source-available-fair-code' },
      { label: 'التراخيص الملكية وFreemium "المجانية"', anchor: '#proprietary-freemium' },
      { label: 'تراخيص نماذج الذكاء الاصطناعي: RAIL وOpen Weights', anchor: '#ai-model-licenses' },
      { label: 'من يجب أن يهتم بأي ترخيص؟', anchor: '#who-should-care' },
      { label: 'قائمة التحقق قبل اعتماد أداة', anchor: '#pre-adoption-checklist' },
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
          '**تنقسم عائلات التراخيص عملياً إلى خمس فئات: permissive، وcopyleft، وcopyleft الشبكي، وsource-available، والملكي/المغلق — إضافة إلى مجموعة منفصلة من تراخيص نماذج الذكاء الاصطناعي المخصصة.** معرفة الفئة التي تنتمي إليها أداة ما تخبرك عن إمكانية استخدامها أكثر من أي قائمة ميزات.',
          '**التراخيص المتساهلة (MIT، Apache-2.0، BSD) لا تفرض التزامات تقريباً.** يمكنك دمج الكود في منتج تجاري مغلق دون نشر كودك المصدري إطلاقاً.',
          '**تراخيص Copyleft (GPL، LGPL) "معدية" بمعنى محدد وضيّق فقط.** توزيع نسخة معدّلة من الكود المشمول يتطلب إصدار تعديلاتك بموجب الترخيص نفسه — لكن الالتزام لا يمتد إلى برمجيات غير ذات صلة تعمل ببساطة إلى جانبه.',
          '**يسد AGPL-3.0 الثغرة التي يتركها GPL مفتوحة أمام الخدمات المستضافة.** إذا عدّلت كوداً مرخّصاً بموجب AGPL وقدّمته فقط عبر الشبكة (SaaS)، فما زال يتوجب عليك نشر الكود المصدري المعدّل — وهو ما لا يتطلبه GPL وحده.',
          '**تراخيص source-available مثل BSL وSSPL ليست مصدراً مفتوحاً معتمداً من OSI، بغض النظر عمّا تدّعيه أي صفحة تسويقية.** تقيّد استخدامات تجارية محددة، عادة لمنع مزوّد سحابي من إعادة بيع المشروع كخدمة مستضافة منافسة.',
          '**ملف الترخيص في المستودع هو المصدر الموثوق الوحيد — وليس صفحة الأسعار أو شارة README أو أي ادعاء تسويقي.** هذا الدليل معلومات عامة وليس استشارة قانونية؛ استشر محامياً عندما تؤثر شروط الترخيص جوهرياً على عملك.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تنقسم تراخيص البرمجيات مفتوحة المصدر وأدوات الذكاء الاصطناعي عملياً إلى خمس عائلات — permissive، وcopyleft، وcopyleft الشبكي (AGPL)، وsource-available، والملكية — كل منها يفرض التزامات مختلفة على كيفية استخدام البرمجية وتعديلها وإعادة توزيعها.',
          },
          {
            type: 'plain-terms',
            text: 'ترخيص البرمجيات هو دليل القواعد لما يُسمح لك فعله بكود شخص آخر. التراخيص المتساهلة تسمح بأي شيء تقريباً؛ تراخيص copyleft تُلزمك بإعادة مشاركة تعديلاتك؛ تراخيص source-available تتيح لك رؤية الكود لكنها تقيّد استخدامه التجاري.',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**MIT** هو أقصر وأشهر ترخيص متساهل — نحو 170 كلمة، دون بند خاص بالبراءات.',
          '**Apache-2.0** يضيف منح براءة اختراع صريح لا يملكه MIT، وهذا سبب تفضيل شركات كثيرة له في المشاريع ذات الأصل المؤسسي.',
          '**GPL** يشترط الإفصاح عن الكود المصدري فقط عند توزيع البرمجية؛ يوسّع AGPL-3.0 هذا الشرط ليشمل تشغيلها كخدمة عبر الشبكة.',
          '**"المصدر المفتوح" المعتمد من OSI** شهادة محددة تمنحها Open Source Initiative؛ أما "source-available" و"fair-code" فهما مصطلحان تسويقيان لتراخيص لا تستوفي ذلك التعريف.',
          '**تراخيص نماذج الذكاء الاصطناعي فئة منفصلة تماماً عن تراخيص الكود.** قد يكون كود أداة ما مرخّصاً بموجب Apache-2.0 بينما تحمل أوزان النموذج التي تنزّلها شروطاً مختلفة تماماً وأكثر تقييداً.',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: 'ما هي التراخيص المتساهلة؟ MIT وApache-2.0 وBSD',
        content:
          '**التراخيص المتساهلة تتيح استخدام الكود وتعديله وإعادة توزيعه — حتى داخل منتج تجاري مغلق — دون التزامات تقريباً باستثناء الحفاظ على إشعار حقوق النشر.** إنها أقل عائلة تراخيص تقييداً، والخيار الافتراضي لمشاريع البنية التحتية التي تسعى لأوسع تبنٍّ ممكن، بما في ذلك من شركات لن تنشر أبداً سطراً واحداً من كودها الخاص.',
        items: [
          '**ترخيص MIT** نشأ في معهد ماساتشوستس للتقنية (MIT) كوسيلة لإصدار برمجيات طوّرتها الجامعة بأقل قيود ممكنة. يبلغ طوله نحو 170 كلمة، ويمنح حقوقاً تكاد تكون غير محدودة، ولا يطلب سوى بقاء نص حقوق النشر والترخيص الأصلي مرفقاً بأي نسخة أو جزء جوهري تعيد توزيعه.',
          '**رخصة Apache 2.0** تأتي من مؤسسة Apache Software Foundation، التي تأسست لتمنح المساهمين من الشركات والمجتمع إطاراً قانونياً مشتركاً للمشاريع التعاونية الكبيرة. وخلافاً لـMIT، تتضمن منح براءة اختراع صريح — يمنح المساهمون حقوق براءاتهم المتعلقة بالكود للمستخدمين — وهذا سبب تفضيل كثير من الشركات ذات محافظ البراءات لها.',
          '**تراخيص BSD** (بنسختَي بندَين وثلاثة بنود) نشأت في جامعة كاليفورنيا في بيركلي لنظام تشغيل Berkeley Software Distribution. تضيف نسخة الثلاثة بنود شرط "عدم التأييد" الذي يمنع استخدام أسماء المؤلفين الأصليين للترويج لمنتج مشتق دون إذن.',
          '**الأثر العملي على من يعتمدها:** يمكنك عمل fork وتعديل ودمج وبيع أداة مرخّصة ترخيصاً متساهلاً كجزء من منتج مغلق دون نشر كودك المصدري إطلاقاً — الخطر الحقيقي الوحيد هو إسقاط إشعار حقوق النشر/الترخيص المطلوب من توزيعك.',
          '**أمثلة حقيقية من مراجعات هذا الموقع:** يُوزَّع كل من Ollama وllama.cpp بموجب MIT؛ ويُوزَّع vLLM بموجب Apache-2.0 — يمكن دمج الثلاثة في منتج تجاري دون تفعيل أي التزام بالإفصاح عن الكود المصدري.',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: 'ما هو Copyleft؟ عائلة GPL وLGPL',
        content:
          '**تشترط تراخيص Copyleft أنه إذا وزّعت نسخة معدّلة من الكود المشمول، فعليك إصدار تعديلاتك بموجب الترخيص نفسه.** يرتبط الالتزام بالكود نفسه، وليس بكل برنامج يعمل مصادفة إلى جانبه — الوصف الشائع "الترخيص المعدي" يبالغ في مدى امتداد الالتزام الفعلي.',
        items: [
          '**رخصة GNU العمومية العامة (GPL)** كتبها ريتشارد ستولمان ومؤسسة البرمجيات الحرة كترخيص لمشروع GNU، مبنية على فكرة أن حرية البرمجيات يجب أن تُحفظ للمستقبل — من يتلقى نسخة معدّلة يجب أن يتمتع بالحقوق نفسها التي كانت للمؤلف الأصلي.',
          '**يختلف GPL v2 وGPL v3** بشكل أساسي في لغة البراءات وأحكام التوافق؛ أضاف الإصدار 3 بنوداً صريحة للانتقام من البراءات ومكافحة "التيفوة" (منع أجهزة تعرقل تشغيل برمجية معدّلة لديك الحق القانوني في تشغيلها).',
          '**تُخفّف رخصة GNU العمومية الصغرى (LGPL)** من قيود GPL خصيصاً للمكتبات — يمكنك ربط مكتبة LGPL بتطبيق ملكي دون فتح مصدر التطبيق نفسه، طالما بقي مكوّن المكتبة قابلاً للاستبدال وبقي كوده المصدري الخاص متاحاً.',
          '**ما الذي يفعّل الالتزام فعلياً:** توزيع نسخة معدّلة من الكود المشمول بـGPL. مجرد استخدام برمجية GPL غير معدّلة داخلياً، أو تشغيل برمجية ملكية على نظام تشغيل مرخّص بموجب GPL، لا يُخضع كودك الخاص تلقائياً لـGPL.',
          '**من يجب أن يتوخى الحذر:** شركة ناشئة تخطط لعمل fork لأداة GPL وتعديلها لتكون نواة منتج تجاري تحتاج إلى خطة — إما فتح تلك التعديلات أو تجنب الـfork؛ أما شركة تشغّل أداة GPL غير معدّلة داخلياً فقط، فلا يقع عليها هذا الالتزام.',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'كيف يسد AGPL-3.0 ثغرة SaaS',
        content:
          '**تضيف رخصة GNU Affero العمومية العامة (AGPL-3.0) شرطاً لا يملكه GPL: إذا عدّلت كوداً مشمولاً بـAGPL وأتحته للمستخدمين عبر الشبكة، يجب أن تقدّم لهم الكود المصدري المعدّل، حتى لو لم توزّع نسخة فعلية من البرمجية إطلاقاً.** هذه هي السمة المحدِّدة لهذه العائلة من التراخيص، والأكثر إثارة للمفاجأة لفرق تفترض أن "نحن لا نوزّعها إطلاقاً، بل نستضيفها فقط" قراءة آمنة.',
        items: [
          '**الثغرة التي يسدّها:** بموجب GPL وحده، تشغيل نسخة معدّلة كخدمة ويب مستضافة لا يشكّل "توزيعاً" بالمعنى القانوني الذي يفعّل الترخيص — كان بإمكان شركة أخذ كود GPL وتعديله وتقديمه فقط كمنتج SaaS دون الحاجة أبداً لنشر التعديلات. عُرف هذا بشكل غير رسمي بـ"ثغرة ASP" (مزود خدمة التطبيقات) أو "ثغرة SaaS".',
          '**كُتب AGPL-3.0 خصيصاً لسد هذه الثغرة** بإضافة بند تفاعل عبر الشبكة: تقديم وظائف البرمجية المعدّلة للمستخدمين عبر الشبكة يُعدّ بمثابة تفعيل التزام إتاحة الكود المصدري نفسه الذي تفعّله توزيع نسخة فعلية.',
          '**لماذا يهم ذلك للاستضافة وإعادة البيع:** وكالة أو مزوّد استضافة يأخذ أداة مرخّصة بموجب AGPL ويعدّلها ويقدّمها للعملاء كخدمة مستضافة يجب أن يُتيح الكود المصدري المعدّل لهؤلاء المستخدمين — تشغيلها دون تعديل لا يُنشئ هذا الالتزام.',
          '**أمثلة حقيقية من مراجعات هذا الموقع:** يُوزَّع كل من Jan وKoboldCpp وSillyTavern وtext-generation-webui بموجب AGPL-3.0 — لا مشكلة في الاستضافة الذاتية غير المعدّلة للاستخدام الشخصي أو الداخلي؛ لكن الأمر يختلف جوهرياً بمجرد تعديل إحداها وإعادة بيع وصول مستضاف إليها.',
          '**هذا شرح عام لآلية عمل الترخيص، وليس استشارة قانونية** — ما إذا كان نشر معيّن يُعدّ "تقديماً عبر الشبكة" وفق النص الدقيق لـAGPL-3.0 هو سؤال يستحق استشارة محامٍ يراجع بنيتك المعمارية المحددة.',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: 'ما هي تراخيص Source-Available و"الكود العادل"؟',
        content:
          '**تتيح تراخيص source-available لأي شخص قراءة الكود لكنها تقيّد استخدامات تجارية محددة، وأكثرها شيوعاً تقديم البرمجية كخدمة مستضافة منافسة.** تُسوَّق غالباً على أنها "مصدر مفتوح"، لكن تراخيص مثل Business Source License (BSL/BUSL) وServer Side Public License (SSPL) غير معتمدة من Open Source Initiative ولا تستوفي تعريفها للمصدر المفتوح.',
        items: [
          '**رخصة Business Source License (BSL، وتُعرف أيضاً بـBUSL)** تمنح منذ البداية وصولاً للكود المصدري وحقوق استخدام واسعة، مع تاريخ مستقبلي محدد تتحوّل عنده الرخصة إلى ترخيص مصدر مفتوح حقيقي (غالباً Apache-2.0 أو ترخيص متساهل مشابه) — وحتى ذلك التحول، ينطبق قيد استخدام تجاري معلن، يهدف عادة لمنع عرض مستضاف منافس.',
          '**رخصة Server Side Public License (SSPL)**، التي أنشأتها MongoDB، تشترط على من يقدّم البرمجية كخدمة أن يفتح أيضاً مصدر كامل مكدس الخدمة الذي بناه حولها — التزام أوسع بكثير من التزام AGPL-3.0، كُتب عمداً لجعل الاستضافة التجارية غير عملية لمزوّد سحابي منافس.',
          '**بند Commons Clause** قيد إضافي يُضاف فوق ترخيص أساسي متساهل أو copyleft، يحظر تحديداً بيع البرمجية أو تقديمها كخدمة مستضافة مدفوعة، مع السماح مع ذلك بالاستخدام والتعديل الحرَّين.',
          '**سبب انتقال بعض المشاريع لهذه التراخيص:** مشروع يبدأ بترخيص مفتوح بالكامل ثم يعتمد لاحقاً ترخيص source-available يستجيب عادة لمزوّد سحابي كبير يقدّم المشروع كخدمة مستضافة دون المساهمة في تطويره — الانتقال إلى ترخيص source-available يتيح للقائم على الصيانة الحفاظ على معظم الانفتاح مع منع هذا الاستخدام المنافس المحدد.',
          '**الأثر العملي على من يعتمدها:** عادة يمكنك قراءة برمجية source-available واستضافتها ذاتياً وتعديلها للاستخدام الداخلي دون مشكلة؛ يُفعَّل القيد عندما تحاول إعادة بيعها كمنتج مستضاف ينافس عرض مالك الترخيص نفسه — اقرأ بند الاستخدام التجاري المحدد، لأن الصياغة تختلف كثيراً بين المشاريع.',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: 'ماذا تعني التراخيص الملكية وFreemium "المجانية"؟',
        content:
          '**أداة موسومة بـ"مجانية" على صفحة تنزيلها ليست بالضرورة مفتوحة المصدر — كثير من تطبيقات سطح المكتب الشهيرة للذكاء الاصطناعي برمجيات ملكية مغلقة المصدر تُوزَّع دون تكلفة، دون أي ترخيص يمنحك حق الاطلاع على الكود الأساسي أو تعديله أو إعادة توزيعه.** هذا التمييز مهم أكثر ما يكون من ناحية الاستمرارية: يمكن لمزوّد ملكي تغيير الأسعار أو إضافة قيود أو إيقاف المنتج تماماً، ولا تملك أي حق قانوني في إبقاء نسخة fork مستقلة عاملة.',
        items: [
          '**"مجاني (مغلق)" في جدول مقارنة يعني برمجية ملكية دون تكلفة.** يمكنك استخدام التطبيق المُجمَّع بموجب شروط خدمة المزوّد، لكن ليس لديك وصول للكود المصدري ولا حق في تعديله أو تدقيقه أو عمل fork له.',
          '**المقايضة الأساسية مقابل بدائل المصدر المفتوح:** يميل تطبيق ملكي مجاني إلى أن يكون أكثر صقلاً وأسهل تركيباً، لأن مزوّداً واحداً يتحكم في كامل تجربة المستخدم — لكنك تعتمد كلياً على استمرار رغبة ذلك المزوّد في إبقائه مجانياً وآمناً ومصاناً.',
          '**مخاطر الارتباط بمزوّد واحد (vendor lock-in):** دون وصول للكود المصدري، لا يمكنك استضافة نسخة معدّلة ذاتياً، ولا تدقيق ما يفعله التطبيق بدقة ببياناتك، ولا مواصلة التطوير إذا توقف المزوّد عن الصيانة أو غيّر نموذج التسعير أو أغلق.',
          '**من يجب أن يهتم أكثر:** أي شخص يبني سير عمل أو عملية تجارية حول أداة ملكية مجانية ينبغي أن تكون لديه خطة بديلة موثّقة — العناية الواجبة نفسها التي تطبّقها على أي اعتماد على مزوّد، لأن "مجاني" لا تعني "دائم" أو "مضمون".',
          '**ليست مثل source-available:** تراخيص source-available (BSL، SSPL) تتيح على الأقل قراءة الكود وتدقيقه حتى لو كان الاستخدام التجاري مقيّداً؛ أما الأداة الملكية بالكامل فلا تمنحك لا الكود ولا تلك الضمانات.',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: 'كيف تعمل تراخيص نماذج الذكاء الاصطناعي؟ Open Weights وRAIL وقيود الاستخدام المقبول',
        content:
          '**ترخيص النموذج وثيقة قانونية منفصلة عن الترخيص الذي يغطي البرمجية التي تشغّله — قد يكون كود أداة ما مرخّصاً بموجب Apache-2.0 بينما تحمل أوزان النموذج التي تنزّلها ترخيصاً مختلفاً تماماً، وأحياناً أكثر تقييداً.** ترخيص نماذج الذكاء الاصطناعي أحدث وأقل معيارية من ترخيص البرمجيات، وتتفاوت الشروط بشكل كبير بين إصدارات النماذج.',
        items: [
          '**أوزان متساهلة بالكامل:** تصدر بعض عائلات النماذج أوزانها بموجب ترخيص برمجيات متساهل قياسي (غالباً Apache-2.0)، مما يمنح نفس حقوق الاستخدام الواسعة التي يمنحها ذلك الترخيص للكود، بما في ذلك الاستخدام التجاري دون قيد على مجال الاستخدام.',
          '**تراخيص RAIL وOpenRAIL** (ترخيص الذكاء الاصطناعي المسؤول) نشأت مع إصدار BigScience لنموذج BLOOM، وصُممت بالتعاون مع باحثين قانونيين للجمع بين الوصول المفتوح وقائمة محددة من الاستخدامات المحظورة — عادة تمنع استخدامات مثل توليد المعلومات المضللة أو اتخاذ قرارات تمييزية أو محتوى يخالف القانون، مع السماح بخلاف ذلك باستخدام تجاري واسع.',
          '**تراخيص "مجتمعية" أو "مفتوحة الأوزان" مخصصة:** يصدر عدد من مزوّدي النماذج الرئيسيين أوزانهم بموجب ترخيص مصمَّم خصيصاً يبدو كترخيص مفتوح لكنه يضيف شروط مجال استخدام. المثال الأكثر استشهاداً هو الترخيص المجتمعي الذي تلحقه Meta بأوزان النماذج التي تصدرها علناً، والذي يمنح استخداماً مجانياً واسعاً لكنه يضيف عتبة حجم استخدام يتطلب تجاوزها اتفاقاً تجارياً منفصلاً، إلى جانب قيود استخدام مقبول.',
          '**ما يجب التحقق منه تحديداً:** هل الاستخدام التجاري مسموح به أصلاً، وهل توجد عتبة حجم استخدام أو إيرادات تغيّر الشروط، وما الذي تحظره سياسة الاستخدام المقبول، وهل يقيّد الترخيص استخدام مخرجات النموذج لتدريب نموذج منافس — وهو قيد ظهر في عدة تراخيص خاصة بنماذج ولا يوجد له نظير في تراخيص البرمجيات القياسية.',
          '**هذا ليس استشارة قانونية** — تتغير شروط ترخيص النماذج بين الإصدارات من المزوّد نفسه، لذا تحقق من نص الترخيص الدقيق المرفق بأوزان النموذج المحددة التي تخطط لنشرها بدلاً من افتراض استمرارية مع إصدار سابق من المؤسسة نفسها.',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: 'من يجب أن يهتم بأي ترخيص؟',
        content:
          '**الترخيص الذي لا يشكّل مشكلة لهاوٍ قد يكون التزاماً حقيقياً لشركة ناشئة أو وكالة.** تنطبق شروط الترخيص نفسها على الجميع، لكن عواقب تفعيل التزام ما تتصاعد بحسب مدى تجارية استخدامك ومدى علنيته.',
        columns: ['من أنت', 'الأكثر أهمية', 'ما ينبغي فعله'],
        rows: [
          {
            'من أنت': 'هاوٍ / استخدام شخصي',
            'الأكثر أهمية': 'يعمل أي ترخيص تقريباً — أنت لا توزّع ولا تستضيف لأطراف أخرى',
            'ما ينبغي فعله': 'تأكد من أنك لا تعيد توزيع كود معدّل علنياً إذا كانت الأداة copyleft',
          },
          {
            'من أنت': 'شركة ناشئة تبني منتجاً تجارياً فوق أداة',
            'الأكثر أهمية': 'يمكن أن يجبرك copyleft، وAGPL-3.0 خصوصاً، على فتح مصدر إضافاتك الخاصة',
            'ما ينبغي فعله': 'راجع الترخيص الأساسي قبل تصميم بنيتك حول أداة تخطط لتعديلها وبيعها',
          },
          {
            'من أنت': 'مؤسسة تدمج أداة داخلياً',
            'الأكثر أهمية': 'تُفعَّل التزامات copyleft عند التوزيع/الاستضافة، لا عند الاستخدام الداخلي فقط — لكن الحجم يغيّر المخاطر',
            'ما ينبغي فعله': 'احصل على مراجعة قانونية قبل أن تصبح أداة copyleft غير معدّلة بنية تحتية أساسية',
          },
          {
            'من أنت': 'وكالة أو مستقل يعيد بيع عمليات نشر',
            'الأكثر أهمية': 'AGPL-3.0 مع تعديل مع استضافة لعميل غالباً ما يعني نشر الكود المصدري المعدّل',
            'ما ينبغي فعله': 'تأكد ما إذا كنت تعدّل الكود فعلياً، أو فقط تهيّئه/تستضيفه ذاتياً دون تعديل',
          },
          {
            'من أنت': 'أي شخص قلق بشأن الارتباط بمزوّد واحد',
            'الأكثر أهمية': 'يمكن للأدوات الملكية "المجانية" وsource-available تغيير الشروط أو إضافة رسوم أو الإغلاق',
            'ما ينبغي فعله': 'فضّل بديلاً متساهلاً أو copyleft إذا كان الاستقلال طويل الأمد أهم من الصقل',
          },
          {
            'من أنت': 'فرق مهتمة بحماية البيانات (GDPR) تقيّم إقامة البيانات',
            'الأكثر أهمية': 'مخاطر الترخيص محور منفصل عن مخاطر الامتثال — الترخيص المتساهل لا يحل مسألة إقامة البيانات',
            'ما ينبغي فعله': 'قيّم شروط الترخيص ومتطلبات إقامة البيانات كقائمتَي تحقق منفصلتين',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: 'قائمة التحقق قبل اعتماد أداة: 7 أمور للتحقق قبل نشرها',
        content:
          '**التحقق من ترخيص أداة يستغرق دقائق ويمنع نوع المفاجأة القانونية التي تكلّف أكثر بكثير لحلها بعد إطلاق المنتج.** راجع هذه النقاط السبع قبل الالتزام بالبناء فوق أي أداة مفتوحة المصدر أو ذكاء اصطناعي.',
        numberedItems: [
          {
            title: 'اقرأ ملف LICENSE الفعلي في المستودع',
            whyItMatters: 'قد يكون ادعاء "مصدر مفتوح" على صفحة هبوط تسويقاً لا حقيقة قانونية — ملف LICENSE (أو NOTICE/COPYING) في مستودع المصدر هو الوثيقة الرسمية، لا شارة أو صفحة أسعار.',
          },
          {
            title: 'تحقق مما إذا تغيّر الترخيص مؤخراً',
            whyItMatters: 'تنتقل بعض المشاريع من ترخيص متساهل أو copyleft إلى ترخيص source-available بعد اكتساب زخم تجاري — تكرر هذا النمط عبر صناعة البرمجيات مع بدء مزوّدين سحابيين استضافة مشاريع مفتوحة المصدر شهيرة دون المساهمة بالمقابل. تحقق من تاريخ ترخيص المستودع، لا الملف الحالي فقط.',
          },
          {
            title: 'تحقق مما إذا كان الترخيص معتمداً فعلياً من OSI إذا كان ذلك مهماً لك',
            whyItMatters: 'تُسوَّق تراخيص source-available مثل BSL وSSPL عادة كمصدر مفتوح لكنها ليست ضمن قائمة Open Source Initiative المعتمدة — إذا كانت موافقة OSI شرطاً لحالة استخدامك، تحقق من القائمة مباشرة بدلاً من الوثوق بوصف المشروع لنفسه.',
          },
          {
            title: 'اقرأ بنود الاستخدام التجاري ومجال الاستخدام الخاصة بنماذج الذكاء الاصطناعي تحديداً',
            whyItMatters: 'قد يسمح ترخيص نموذج ما بالاستخدام التجاري على نطاق واسع، أو يقيّده فوق عتبة حجم استخدام، أو يحظر تطبيقات محددة تماماً — تقع هذه البنود خارج لغة تراخيص البرمجيات القياسية ويسهل إغفالها إذا اكتفيت بفحص ترخيص الكود.',
          },
          {
            title: 'حدد ما إذا كانت الاستضافة الذاتية مقابل استضافة SaaS تغيّر التزاماتك',
            whyItMatters: 'بموجب AGPL-3.0، يُفعّل تقديم برمجية معدّلة عبر الشبكة نفس التزام الإفصاح الذي تفعّله توزيع نسخة بموجب GPL — تأكد من الفئة التي يقع فيها نشرك المخطط قبل تعديل الكود.',
          },
          {
            title: 'تحقق من وجود اتفاقية ترخيص مساهم (CLA) إذا كنت تخطط للمساهمة',
            whyItMatters: 'قد تمنح CLA للقائم على صيانة المشروع حقوقاً أوسع على مساهمتك مما يمنحه ترخيص المشروع نفسه للمستخدمين — يهم هذا بشكل أساسي إذا كنت تنوي إرسال كود إلى المشروع، لا إذا كنت تستهلكه فقط.',
          },
          {
            title: 'تحقق من قيود العلامة التجارية بشكل منفصل عن ترخيص الكود',
            whyItMatters: 'لا يمنح ترخيص كود متساهل أو copyleft تلقائياً حقوقاً على اسم المشروع أو شعاره — يمكن أن يمنع قانون العلامات التجارية عمل fork وإعادة تسمية أداة حتى عندما يسمح ترخيص الكود بالـfork من الناحية الأخرى.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        content:
          '**تنشأ معظم المشكلات المتعلقة بالترخيص من تخطي الوثيقة المصدرية، وليس من سوء فهم ترخيص قُرئ فعلياً.**',
        items: [
          'الوثوق بادعاء "مصدر مفتوح" في صفحة تسويقية بدلاً من قراءة ملف LICENSE الفعلي في المستودع.',
          'افتراض أن AGPL-3.0 يهم فقط إذا وزّعت نسخة من البرمجية — فهو ينطبق أيضاً على تقديم كود معدّل كخدمة مستضافة.',
          'معاملة ترخيص كود النموذج وترخيص أوزانه كوثيقة واحدة — غالباً ما لا يكونان كذلك.',
          'عمل fork وإعادة تسمية أداة دون التحقق من قيود العلامة التجارية بشكل منفصل عن ترخيص الكود.',
          'افتراض أن ترخيصاً كان متساهلاً عند إطلاق مشروع ما زال ساري المفعول بعد إعادة ترخيص لاحقة — تحقق من الترخيص الحالي، لا الذي تتذكره.',
          'تخطي المراجعة القانونية لأداة copyleft أو source-available لأنها "مجانية" — المجانية في الاستخدام والخلو من الالتزامات ليسا الشيء نفسه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — التعريف الرسمي الذي يجب أن يستوفيه الترخيص ليُعتمد كمصدر مفتوح من OSI.',
          '[مشروع GNU — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — شرح مؤسسة البرمجيات الحرة الخاص بـGPL وLGPL وAGPL.',
          '[مؤسسة Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — النص الكامل للترخيص.',
          '[نص ترخيص MIT (Open Source Initiative)](https://opensource.org/license/mit) — النص الكامل للترخيص.',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — شروط SSPL وتبريراتها الخاصة.',
          '[الأسئلة الشائعة حول Business Source License](https://mariadb.com/bsl-faq-mariadb/) — شرح لكيفية عمل تحويل BSL/BUSL من جهة معتمِدة معروفة للترخيص.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل MIT أم Apache-2.0 أفضل ترخيص لمشروعي؟',
            a: 'كلاهما متساهل والتزاماته على المستخدمين تكاد تنعدم. الفارق العملي الرئيسي في Apache-2.0 هو منح براءة اختراع صريح، وهو أهم للمؤسسات ذات محافظ البراءات؛ أما MIT فأقصر وأكثر شيوعاً قليلاً في المشاريع الفردية الصغيرة. لا يقيّد أي منهما الاستخدام التجاري ولا يشترط فتح مصدر ما تبنيه فوقهما.',
          },
          {
            q: 'هل استخدام برمجية بموجب AGPL-3.0 يعني أن شركتي بأكملها يجب أن تصبح مفتوحة المصدر؟',
            a: 'لا. يُفعَّل التزام AGPL-3.0 عند توزيع أو تقديم نسخة معدّلة من الكود المشمول عبر الشبكة — استخدام أداة AGPL غير معدّلة داخلياً، أو كمكوّن يستدعيه منتجك دون تعديل كودها المصدري، لا يُخضع أجزاء غير ذات صلة من قاعدة الكود الخاصة بك للترخيص. يصبح الأمر ذا صلة تحديداً إذا عدّلت كود AGPL نفسه وقدّمت تلك النسخة المعدّلة للمستخدمين.',
          },
          {
            q: 'هل "source-available" هو نفسه المصدر المفتوح؟',
            a: 'لا، والتمييز مهم. المصدر المفتوح شهادة من Open Source Initiative مبنية على تعريف محدد يشمل حق إعادة التوزيع والتعديل دون تقييد الاستخدام التجاري. تراخيص source-available مثل BSL وSSPL تتيح قراءة الكود لكنها تقيّد استخدامات تجارية محددة، وأكثرها شيوعاً عروض مستضافة منافسة — لا تستوفي تعريف OSI للمصدر المفتوح حتى عندما يصف مشروع نفسه بأنه مفتوح المصدر.',
          },
          {
            q: 'هل يمكنني استخدام تطبيق ذكاء اصطناعي ملكي "مجاني" لعملي؟',
            a: 'بشكل عام نعم، بموجب شروط خدمة المزوّد، لكنك تتحمّل مخاطر الاعتماد على مزوّد واحد: دون وصول للكود المصدري لا يمكنك تدقيق ما يفعله البرنامج ببياناتك، ولا حق لك في استضافة نسخة معدّلة ذاتياً، ولا ضمان بأن يبقي المزوّد المنتج مجانياً وغير مقيّد ومصاناً. اقرأ شروط الخدمة، لا السعر فقط.',
          },
          {
            q: 'هل تعمل تراخيص نماذج الذكاء الاصطناعي مثل تراخيص البرمجيات؟',
            a: 'ليس تماماً. تراخيص النماذج أحدث وأقل معيارية. تستخدم بعض الإصدارات ترخيص برمجيات متساهل قياسي يُطبَّق مباشرة على الأوزان؛ ويستخدم غيرها ترخيصاً مصمَّماً خصيصاً مثل RAIL/OpenRAIL بقائمة استخدامات محظورة محددة؛ ويستخدم آخرون ترخيصاً مجتمعياً مخصصاً بعتبات حجم استخدام وقيود مجال استخدام. تحقق دائماً من الترخيص المحدد المرفق بأوزان النموذج التي تنزّلها، بمعزل عن ترخيص الكود الذي تستخدمه لتشغيلها.',
          },
          {
            q: 'لماذا تنتقل بعض مشاريع المصدر المفتوح لاحقاً إلى ترخيص أكثر تقييداً؟',
            a: 'الدافع الأكثر استشهاداً هو مزوّد سحابي كبير يقدّم المشروع كخدمة مستضافة منافسة دون المساهمة في تطويره — الانتقال إلى ترخيص source-available (BSL، SSPL) أو إضافة قيد مثل Commons Clause يتيح للقائم على الصيانة إبقاء الكود مرئياً وقابلاً للاستخدام في معظمه مع منع هذا الاستخدام المنافس المحدد. تكرر هذا النمط عبر صناعة البرمجيات.',
          },
          {
            q: 'ما الذي يجب أن تتحقق منه شركة ناشئة قبل بناء منتج تجاري فوق أداة مفتوحة المصدر؟',
            a: 'اقرأ ملف الترخيص الفعلي، لا صفحة هبوط؛ وحدد ما إذا كنت تخطط لتعديل الكود الأساسي، وهو ما يفعّل عادة التزامات copyleft وAGPL-3.0؛ وتحقق من وجود عتبة حجم استخدام أو مجال استخدام إذا كان الأمر يتعلق بنموذج ذكاء اصطناعي؛ واحصل على مراجعة قانونية قبل أن تصبح الأداة بنية تحتية أساسية يعتمد عليها منتجك.',
          },
          {
            q: 'هل هذا المقال استشارة قانونية؟',
            a: 'لا. يشرح هذا المقال بلغة بسيطة، لأغراض توجيهية، كيف تعمل آليات الترخيص الشائعة عموماً. تتفاوت شروط الترخيص حسب المشروع والإصدار، وقد يعتمد التفسير على الولاية القضائية، وتتصاعد عواقب الخطأ بحسب مدى تجارية نشرك — استشر محامياً مؤهلاً للحصول على إرشاد بشأن أداة أو نشر أو قرار عمل محدد.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) — أكثر من 160 أداة LLM محلية مع الترخيص المذكور لكل عنصر.',
          '[مراجعة Dify AI Workflow Builder](/ar/power-local-llm/dify-ai-workflow-builder-review) — مراجعة تذكر ترخيصها؛ استخدم هذا الدليل لفهم ما يعنيه ذلك الترخيص لنشرك.',
          '[المحتوى المولَّد بالذكاء الاصطناعي ومخاطر الملكية الفكرية](/ar/power-local-llm/ai-generated-content-ip-risk) — مسائل الملكية الفكرية المصاحبة للترخيص عند نشرك مخرجات مولَّدة بالذكاء الاصطناعي تجارياً.',
          '[أمن الذكاء الاصطناعي الوكيلي: الهوية والوصول](/ar/power-local-llm/agentic-ai-security-identity-access) — اعتبارات الأمن والحوكمة لعمليات نشر الذكاء الاصطناعي المستضافة ذاتياً، مسألة مصاحبة للامتثال للترخيص.',
          '[RAG محلي متوافق مع GDPR للمستندات الحساسة](/ar/power-local-llm/local-rag-for-private-business-data) — مخاطر الترخيص ومخاطر إقامة البيانات/الامتثال قائمتا تحقق منفصلتان؛ يغطي هذا الدليل جانب الامتثال.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'شرح تراخيص برمجيات الذكاء الاصطناعي ومفتوحة المصدر: MIT مقابل Apache مقابل GPL مقابل AGPL مقابل الترخيص الملكي',
      description: 'شرح أنواع تراخيص البرمجيات مفتوحة المصدر وأدوات الذكاء الاصطناعي: permissive وcopyleft وAGPL وsource-available وتراخيص نماذج الذكاء الاصطناعي — ما يجب التحقق منه قبل نشر أي أداة.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'ar',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المطورون ومؤسسو الشركات الناشئة وصنّاع القرار التقني' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com/ar](https://www.promptquorum.com/ar)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/ar/power-local-llm](https://www.promptquorum.com/ar/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'شرح تراخيص برمجيات الذكاء الاصطناعي ومفتوحة المصدر', item: '[www.promptquorum.com/ar/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/ar/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
  ko: {
    freshness_tier: 'evergreen',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    theme: 'Overview & Reference',
    title: 'AI 및 오픈소스 소프트웨어 라이선스 완벽 해설: MIT vs Apache vs GPL vs AGPL vs 독점 라이선스',
    seoTitle: 'AI·오픈소스 라이선스 해설 (MIT, GPL, AGPL)',
    intro:
      '이 사이트에서 리뷰한 모든 로컬 LLM 도구, RAG 프레임워크, AI 코딩 어시스턴트는 MIT, Apache-2.0, AGPL-3.0, source-available 라이선스, 혹은 폐쇄형 "무료" 데스크톱 앱 중 하나의 라이선스로 배포됩니다. 이 라이선스는 기능 비교보다 훨씬 더 크게 "실제로 그 도구를 사용할 수 있는지"를 좌우합니다. 본 가이드는 오픈소스 소프트웨어와 AI 모델에서 마주치게 되는 라이선스 계열을 설명합니다 — 각각 무엇을 허용하고 무엇을 요구하는지, 어디서 유래했는지, 누구를 위한 것인지, 그리고 취미 프로젝트든 스타트업 제품이든 사내 시스템이든 재판매하는 클라이언트 배포든 도구를 도입하기 전에 구체적으로 확인해야 할 사항입니다. 이는 분류 체계이지 개별 도구별 라이선스 조회표가 아닙니다 — 특정 리뷰 대상 도구가 어떤 라이선스를 쓰는지는 해당 리뷰나 [소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory)를 참고하시고, 본 문서는 그 라이선스 이름을 알게 된 후 실제로 무엇을 의미하는지 설명합니다.',
    metaDescription:
      '오픈소스 및 AI 도구 라이선스 해설: permissive, copyleft, AGPL, source-available, AI 모델 라이선스 — 도구 도입 전 확인해야 할 사항.',
    twitterDescription:
      'MIT, Apache-2.0, GPL, AGPL, source-available, AI 모델 라이선스를 쉽게 설명합니다 — 각각 무엇을 요구하는지, 누구에게 적합한지, 도입 전 확인 사항까지.',
    audience:
      '자신의 프로젝트, 제품, 배포 환경에 맞는 오픈소스 또는 AI 도구 라이선스를 선택하려는 개발자, 스타트업 창업자, 기술 의사결정자.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '오픈소스 소프트웨어 라이선스 유형',
    targetKeywords: [
      '오픈소스 라이선스 종류 해설',
      'MIT vs Apache vs GPL 라이선스',
      'AGPL 라이선스란',
      'source-available 라이선스 설명',
      'AI 모델 라이선스 open weights',
    ],
    leadAnswerBlock:
      '**오픈소스 및 AI 도구 라이선스는 실무적으로 다섯 가지 계열로 나뉩니다 — permissive 허용형(MIT, Apache-2.0, BSD), copyleft형(GPL, LGPL), 네트워크 copyleft형(AGPL-3.0), source-available형(BSL, SSPL), 독점/폐쇄형 무료 라이선스입니다. 여기에 더해 자체적인 사용 제한을 가진 AI 모델 전용 라이선스(RAIL, 오픈 웨이트 커뮤니티 라이선스)가 별도 그룹으로 존재합니다.** 어떤 라이선스가 중요한지는 당신이 취미 사용자인지, 상업 제품을 출시하는 스타트업인지, 사내에 도구를 통합하는 기업인지에 따라 달라집니다 — 어떤 라이선스가 "더 나은지"의 문제가 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'MIT, Apache-2.0, GPL, AGPL 라이선스의 차이는 무엇입니까?',
        answer:
          'MIT와 Apache-2.0은 permissive형입니다 — 라이선스 표기를 유지하는 것 외에는 거의 의무 없이 코드를 사용, 수정, 재판매할 수 있습니다. GPL은 copyleft형입니다 — 수정 버전을 배포할 경우, 그 변경 사항을 동일한 라이선스로 공개해야 합니다. AGPL-3.0은 이 의무를 네트워크 서비스로만 운영하는 소프트웨어에까지 확장하여, GPL이 SaaS에 남겨두는 허점을 막습니다. 독점 및 source-available 라이선스(BSL, SSPL)는 오픈소스 정의에서 완전히 벗어나며, 특정 상업적 이용(대부분 라이선스 보유자 자체의 호스팅 제품과 경쟁하는 이용)을 제한합니다.',
        bullets: [
          'MIT·Apache-2.0(permissive): 자유롭게 사용·수정·재판매 가능 — 유일한 의무는 라이선스/저작권 표기 유지',
          'GPL·LGPL(copyleft): 수정 버전을 배포하려면 변경 사항을 동일한 라이선스로 공개해야 함',
          'AGPL-3.0(네트워크 copyleft): 배포하지 않고 호스팅 서비스로만 운영해도 동일한 의무가 적용됨',
          'BSL/SSPL(source-available): 소스는 열람 가능하나 사용은 제한됨 — 마케팅과 달리 대개 OSI 승인 "오픈소스"에 해당하지 않음',
          'AI 모델 라이선스(RAIL, 오픈 웨이트 커뮤니티 라이선스)는 표준 코드 라이선스를 넘어서는 허용 사용·용도 제한을 추가하는 경우가 많음',
          '도구를 기반으로 구축하기 전, 랜딩 페이지의 주장이 아니라 저장소의 실제 LICENSE 파일을 반드시 확인할 것',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실 정리', anchor: '#quick-facts' },
      { label: 'Permissive 라이선스: MIT, Apache-2.0, BSD', anchor: '#permissive-licenses' },
      { label: 'Copyleft란? GPL·LGPL 계열', anchor: '#copyleft-gpl' },
      { label: 'AGPL-3.0이 SaaS 허점을 막는 방식', anchor: '#agpl-saas-loophole' },
      { label: 'Source-Available·"페어코드" 라이선스', anchor: '#source-available-fair-code' },
      { label: '독점 및 Freemium "무료" 라이선스', anchor: '#proprietary-freemium' },
      { label: 'AI 모델 라이선스: RAIL과 Open Weights', anchor: '#ai-model-licenses' },
      { label: '누가 어떤 라이선스를 신경 써야 하는가', anchor: '#who-should-care' },
      { label: '도입 전 라이선스 체크리스트', anchor: '#pre-adoption-checklist' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**라이선스 계열은 실무적으로 다섯 가지 범주로 묶입니다: permissive, copyleft, 네트워크 copyleft, source-available, 독점/폐쇄형. 여기에 별도 그룹으로 AI 모델 전용 라이선스가 존재합니다.** 도구가 어느 범주에 속하는지 아는 것은 어떤 기능 목록보다도 사용 가능 여부를 잘 말해줍니다.',
          '**Permissive 라이선스(MIT, Apache-2.0, BSD)는 거의 의무를 부과하지 않습니다.** 폐쇄형 상업 제품에 코드를 내장하고 자체 소스코드를 전혀 공개하지 않아도 됩니다.',
          '**Copyleft 라이선스(GPL, LGPL)가 "전염성"을 갖는 것은 특정하고 제한된 의미에서만입니다.** 대상 코드의 수정 버전을 배포하려면 변경 사항을 동일한 라이선스로 공개해야 하지만, 이 의무는 단순히 옆에서 함께 실행되는 무관한 소프트웨어에까지 미치지 않습니다.',
          '**AGPL-3.0은 GPL이 호스팅 서비스에 남겨두는 허점을 막습니다.** AGPL 라이선스 코드를 수정해 네트워크(SaaS)로만 제공하더라도, 여전히 수정된 소스코드를 공개해야 합니다. 이는 GPL만으로는 요구되지 않는 사항입니다.',
          '**BSL, SSPL 같은 source-available 라이선스는 랜딩 페이지가 무엇이라 주장하든 OSI 승인 오픈소스가 아닙니다.** 특정 상업적 이용, 대개 클라우드 제공업체가 해당 프로젝트를 경쟁 호스팅 서비스로 재판매하는 것을 막기 위해 제한이 걸려 있습니다.',
          '**저장소의 라이선스 파일만이 유일하게 신뢰할 수 있는 출처입니다 — 가격 페이지, README 배지, 마케팅 주장이 아닙니다.** 본 가이드는 일반 정보 제공이며 법률 자문이 아닙니다. 라이선스 조건이 사업에 실질적으로 영향을 미치는 배포라면 변호사와 상담하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '오픈소스 및 AI 도구 라이선스는 실무적으로 다섯 가지 계열 — permissive, copyleft, 네트워크 copyleft(AGPL), source-available, 독점 — 로 나뉘며, 각각 소프트웨어를 사용·수정·재배포하는 방식에 서로 다른 의무를 부과한다.',
          },
          {
            type: 'plain-terms',
            text: '소프트웨어 라이선스는 다른 사람의 코드로 무엇을 할 수 있는지에 대한 규칙집입니다. permissive 라이선스는 거의 모든 것을 허용하고, copyleft 라이선스는 변경 사항을 다시 공개하도록 요구하며, source-available 라이선스는 코드는 볼 수 있게 하되 상업적 이용은 제한합니다.',
          },
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실 정리',
        items: [
          '**MIT**는 가장 짧고 흔한 permissive 라이선스입니다 — 약 170단어, 특허 조항 없음.',
          '**Apache-2.0**은 MIT에 없는 명시적 특허 허여 조항을 추가하며, 이는 많은 기업이 기업 주도 프로젝트에 Apache-2.0을 선호하는 이유입니다.',
          '**GPL**은 소프트웨어를 배포할 때만 소스코드 공개를 요구하고, AGPL-3.0은 이 요구를 네트워크 서비스 운영에까지 확장합니다.',
          '**OSI 승인 "오픈소스"**는 Open Source Initiative가 부여하는 구체적인 인증이며, "source-available"과 "fair-code"는 이 정의를 충족하지 못하는 라이선스를 가리키는 마케팅 용어입니다.',
          '**AI 모델 라이선스는 코드 라이선스와 완전히 별개의 범주입니다.** 도구의 코드는 Apache-2.0이더라도, 다운로드하는 모델 가중치는 전혀 다른, 종종 더 제한적인 조건을 가질 수 있습니다.',
        ],
      },
      permissiveLicenses: {
        id: 'permissive-licenses',
        title: 'Permissive 라이선스란? MIT, Apache-2.0, BSD',
        content:
          '**Permissive 라이선스는 저작권 표시 유지 외에는 거의 의무 없이, 폐쇄형 상업 제품 내 사용을 포함해 코드를 사용·수정·재배포할 수 있게 합니다.** 가장 제약이 적은 라이선스 계열이며, 자체 코드를 한 줄도 공개하지 않을 기업을 포함해 최대한 폭넓은 채택을 원하는 인프라 프로젝트의 기본 선택지입니다.',
        items: [
          '**MIT 라이선스**는 매사추세츠 공과대학교(MIT)에서 대학이 개발한 소프트웨어를 최소한의 제약으로 공개하는 방법으로 시작되었습니다. 약 170단어로 이루어져 있으며 거의 무제한의 권리를 부여하고, 재배포하는 사본이나 실질적인 부분에 원저작권 및 라이선스 문구를 유지할 것만을 요구합니다.',
          '**Apache License 2.0**은 Apache Software Foundation에서 나왔으며, 기업 및 커뮤니티 기여자들에게 대규모 협업 프로젝트를 위한 공통 법적 프레임워크를 제공하기 위해 설립되었습니다. MIT와 달리 명시적 특허 허여 조항을 포함하는데 — 기여자가 코드에 관한 특허권을 사용자에게 라이선스하는 것으로, 특허 포트폴리오를 보유한 많은 기업이 이를 선호하는 이유입니다.',
          '**BSD 라이선스**(2조항 및 3조항)는 캘리포니아 대학교 버클리(UC Berkeley)에서 Berkeley Software Distribution 운영체제를 위해 만들어졌습니다. 3조항 버전은 허가 없이 원저작자의 이름을 파생 제품 홍보에 사용하는 것을 금지하는 비승인 조항을 추가로 포함합니다.',
          '**도입자 입장의 실질적 효과:** permissive 라이선스가 적용된 도구를 포크·수정·내장하여 폐쇄형 제품의 일부로 판매하면서도 자체 소스코드를 전혀 공개하지 않아도 됩니다 — 실제 위험은 배포물에서 필수 저작권/라이선스 표시를 누락하는 것뿐입니다.',
          '**이 사이트 리뷰의 실제 사례:** Ollama와 llama.cpp는 모두 MIT를 사용하며, vLLM은 Apache-2.0을 사용합니다 — 세 가지 모두 소스 공개 의무를 발생시키지 않고 상업 제품에 내장할 수 있습니다.',
        ],
      },
      copyleftFamily: {
        id: 'copyleft-gpl',
        title: 'Copyleft란? GPL·LGPL 계열',
        content:
          '**Copyleft 라이선스는 대상 코드의 수정 버전을 배포할 경우, 그 변경 사항을 동일한 라이선스로 공개할 것을 요구합니다.** 이 의무는 코드 자체에 결부되며, 단순히 옆에서 함께 실행되는 모든 프로그램에 적용되지 않습니다 — 흔히 쓰이는 "전염성 라이선스"라는 표현은 실제 의무의 범위를 과장합니다.',
        items: [
          '**GNU General Public License(GPL)**는 리처드 스톨먼과 자유소프트웨어재단(FSF)이 GNU 프로젝트의 라이선스로 작성했으며, 소프트웨어의 자유가 이후로도 계속 보존되어야 한다는 개념에 기반합니다 — 수정된 사본을 받는 사람은 원저작자와 동일한 권리를 가져야 한다는 것입니다.',
          '**GPL v2와 GPL v3**는 주로 특허 관련 문구와 호환성 조항에서 차이가 있습니다. v3는 명시적인 특허 보복 조항과 반(反)티보화 조항(법적으로 실행할 권리가 있는 수정 소프트웨어의 실행을 막는 하드웨어를 방지하는 조항)을 추가했습니다.',
          '**GNU Lesser General Public License(LGPL)**는 라이브러리에 한해 GPL을 완화합니다 — 라이브러리 구성 요소가 교체 가능한 상태를 유지하고 그 자체 소스코드가 공개되어 있는 한, LGPL 라이브러리를 독점 애플리케이션에 링크하면서도 애플리케이션 자체는 오픈소스화하지 않아도 됩니다.',
          '**실제로 의무를 발생시키는 것:** GPL 대상 코드의 수정 사본을 배포하는 행위입니다. 단순히 수정되지 않은 GPL 소프트웨어를 사내에서 사용하거나, GPL 라이선스 운영체제 위에서 독점 소프트웨어를 실행하는 것만으로는 자체 코드가 자동으로 GPL의 적용을 받지 않습니다.',
          '**주의해야 할 대상:** GPL 도구를 포크해 수정하여 상업 제품의 핵심으로 삼으려는 스타트업은 그 수정 사항을 공개하거나 포크를 피하는 계획이 필요합니다. 수정되지 않은 GPL 도구를 사내에서만 실행하는 기업에는 이러한 의무가 없습니다.',
        ],
      },
      agplLoophole: {
        id: 'agpl-saas-loophole',
        title: 'AGPL-3.0이 SaaS 허점을 막는 방식',
        content:
          '**GNU Affero General Public License(AGPL-3.0)는 GPL에는 없는 요구 사항을 하나 추가합니다: AGPL 대상 코드를 수정해 네트워크를 통해 사용자가 이용할 수 있도록 하는 경우, 소프트웨어 사본을 물리적으로 배포하지 않더라도 그 사용자에게 수정된 소스코드를 제공해야 합니다.** 이는 이 라이선스 계열을 정의하는 핵심 특징이며, "우리는 배포한 적이 없다, 호스팅만 할 뿐이다"라는 해석이 안전하다고 가정하는 팀들이 가장 자주 놀라는 지점입니다.',
        items: [
          '**막힌 허점:** 순수 GPL 하에서는 수정 버전을 호스팅된 웹 서비스로 운영하는 것이 라이선스를 발동시키는 법적 의미의 "배포"에 해당하지 않았습니다 — 기업은 GPL 코드를 가져와 수정하고 SaaS 제품으로만 제공하면서 그 수정 사항을 공개할 필요가 전혀 없었습니다. 이는 비공식적으로 "ASP 허점"(application service provider) 또는 "SaaS 허점"으로 알려지게 되었습니다.',
          '**AGPL-3.0은 바로 이 허점을 막기 위해 작성되었습니다.** 네트워크 상호작용 조항을 추가하여, 수정된 소프트웨어의 기능을 네트워크를 통해 사용자에게 제공하는 것이 물리적 사본을 배포하는 것과 동일한 소스 공개 의무를 발동시키도록 했습니다.',
          '**호스팅 및 재판매에서 중요한 이유:** AGPL 라이선스 도구를 가져와 수정한 뒤 클라이언트에게 호스팅 서비스로 제공하는 대행사나 호스팅 제공업체는 그 사용자에게 수정된 소스코드를 제공해야 합니다 — 수정 없이 그대로 운영하는 경우 이 의무는 발생하지 않습니다.',
          '**이 사이트 리뷰의 실제 사례:** Jan, KoboldCpp, SillyTavern, text-generation-webui는 AGPL-3.0으로 제공됩니다 — 개인 또는 사내 용도로 수정 없이 자체 호스팅하는 데는 문제가 없지만, 이 중 하나를 수정해 호스팅 접근을 재판매하는 순간 법적 상황이 크게 달라집니다.',
          '**이는 라이선스 메커니즘 작동 방식에 대한 일반적인 설명이며 법률 자문이 아닙니다.** 특정 배포가 AGPL-3.0의 정확한 문구상 "네트워크를 통해 제공"에 해당하는지는 귀하의 구체적인 아키텍처를 검토하는 변호사에게 확인해야 할 사항입니다.',
        ],
      },
      sourceAvailable: {
        id: 'source-available-fair-code',
        title: 'Source-Available·"페어코드" 라이선스란?',
        content:
          '**Source-Available 라이선스는 누구나 코드를 읽을 수 있게 하지만, 특정 상업적 이용, 가장 흔하게는 해당 소프트웨어를 경쟁 호스팅 서비스로 제공하는 것을 제한합니다.** 종종 "오픈소스"로 홍보되지만, Business Source License(BSL/BUSL)나 Server Side Public License(SSPL) 같은 라이선스는 Open Source Initiative의 승인을 받지 못했으며 그 오픈소스 정의를 충족하지 않습니다.',
        items: [
          '**Business Source License(BSL, BUSL이라고도 함)**는 처음부터 소스코드 접근권과 폭넓은 사용권을 부여하며, 향후 정해진 날짜에 라이선스가 진정한 오픈소스 라이선스(흔히 Apache-2.0이나 유사한 permissive 라이선스)로 전환됩니다 — 그 전환 전까지는 대개 경쟁 호스팅 제공을 막기 위한 명시된 상업적 이용 제한이 적용됩니다.',
          '**Server Side Public License(SSPL)**는 MongoDB가 만든 것으로, 소프트웨어를 서비스로 제공하는 자는 그 주변에 구축한 서비스 스택 전체도 오픈소스화해야 한다고 요구합니다 — AGPL-3.0보다 훨씬 광범위한 의무로, 경쟁 클라우드 제공업체의 상업적 호스팅을 사실상 불가능하게 만들도록 의도적으로 작성되었습니다.',
          '**Commons Clause**는 그 외에는 permissive이거나 copyleft인 기본 라이선스 위에 추가되는 제한 조항으로, 자유로운 사용과 수정은 허용하면서도 소프트웨어 판매나 유료 호스팅 서비스로의 제공은 특별히 금지합니다.',
          '**프로젝트가 이러한 라이선스로 옮겨가는 이유:** 완전히 개방된 라이선스로 시작했다가 이후 source-available 라이선스를 채택하는 프로젝트는 대개 대형 클라우드 제공업체가 개발에 기여하지 않으면서 해당 프로젝트를 호스팅 서비스로 제공하는 상황에 대응하는 것입니다 — source-available 라이선스로 전환하면 유지관리자는 대부분의 개방성을 유지하면서 그 특정 경쟁적 이용만 차단할 수 있습니다.',
          '**도입자 입장의 실질적 효과:** 대개 내부 용도로는 source-available 소프트웨어를 문제없이 읽고, 자체 호스팅하고, 수정할 수 있습니다. 제한이 발동하는 것은 라이선스 보유자 자체의 제공물과 경쟁하는 호스팅 제품으로 재판매하려 할 때입니다 — 프로젝트마다 문구가 크게 다르므로 구체적인 상업적 이용 조항을 반드시 읽으십시오.',
        ],
      },
      proprietaryFreemium: {
        id: 'proprietary-freemium',
        title: '독점 및 Freemium "무료" 라이선스는 무엇을 의미하는가?',
        content:
          '**다운로드 페이지에 "무료"라고 표시된 도구가 반드시 오픈소스인 것은 아닙니다 — 인기 있는 많은 데스크톱 AI 앱은 무료로 배포되는 독점적, 폐쇄형 소프트웨어이며, 기반 코드를 열람·수정·재배포할 권리를 부여하는 라이선스가 존재하지 않습니다.** 이 구분이 가장 중요해지는 지점은 지속성입니다 — 독점 벤더는 가격을 바꾸거나 제한을 추가하거나 제품을 완전히 중단할 수 있으며, 귀하에게는 독립적인 포크를 계속 운영할 법적 권리가 없습니다.',
        items: [
          '**비교표의 "무료(폐쇄형)"는 무비용 독점 소프트웨어를 의미합니다.** 벤더의 서비스 약관에 따라 컴파일된 애플리케이션을 사용할 수 있지만, 소스코드에 접근할 수 없으며 이를 수정·감사·포크할 권리도 없습니다.',
          '**오픈소스 대안과 비교한 핵심 트레이드오프:** 단일 벤더가 사용자 경험 전체를 통제하기 때문에 독점 무료 앱은 흔히 더 완성도가 높고 설치가 쉽습니다 — 그러나 그 제품을 계속 무료·안전·유지보수 상태로 유지할지는 전적으로 해당 벤더의 지속적인 의지에 달려 있습니다.',
          '**벤더 종속(vendor lock-in) 위험:** 소스코드 접근권이 없으면 수정 버전을 자체 호스팅할 수 없고, 그 애플리케이션이 데이터를 정확히 어떻게 처리하는지 감사할 수 없으며, 벤더가 유지보수를 중단하거나 가격 모델을 바꾸거나 서비스를 종료할 경우 개발을 계속할 수 없습니다.',
          '**가장 신경 써야 할 대상:** 독점 무료 도구를 중심으로 워크플로나 비즈니스 프로세스를 구축하는 사람은 문서화된 대체 계획을 갖추어야 합니다 — 어떤 벤더 종속에도 적용해야 할 것과 동일한 실사이며, "무료"는 "영구적"이나 "보장됨"을 의미하지 않기 때문입니다.',
          '**Source-Available과는 다릅니다:** source-available 라이선스(BSL, SSPL)는 상업적 이용이 제한되더라도 최소한 코드를 읽고 감사할 수는 있게 하지만, 완전히 독점적인 도구는 코드도 그러한 보장도 제공하지 않습니다.',
        ],
      },
      aiModelLicenses: {
        id: 'ai-model-licenses',
        title: 'AI 모델 라이선스는 어떻게 작동하는가: Open Weights, RAIL, 허용 사용 제한',
        content:
          '**모델의 라이선스는 이를 실행하는 소프트웨어를 대상으로 하는 라이선스와는 별개의 법적 문서입니다 — 도구의 코드는 Apache-2.0이더라도, 다운로드하는 모델 가중치는 전혀 다른, 때로 더 제한적인 라이선스를 가질 수 있습니다.** AI 모델 라이선싱은 소프트웨어 라이선싱보다 역사가 짧고 표준화가 덜 되어 있으며, 모델 릴리스마다 조건이 크게 다릅니다.',
        items: [
          '**완전히 permissive한 가중치:** 일부 모델 계열은 표준 permissive 소프트웨어 라이선스(흔히 Apache-2.0)로 가중치를 공개하여, 코드에 부여하는 것과 동일한 폭넓은 사용권 — 용도 제한 없는 상업적 이용을 포함 — 을 부여합니다.',
          '**RAIL 및 OpenRAIL 라이선스**(Responsible AI License)는 BigScience의 BLOOM 모델 공개와 함께 등장했으며, 개방적 접근과 구체적인 금지 용도 목록을 결합하기 위해 법률 연구자들과 공동으로 설계되었습니다 — 일반적으로 허위정보 생성, 차별적 의사결정, 법률 위반 콘텐츠 같은 용도를 금지하는 한편, 그 외 폭넓은 상업적 이용은 허용합니다.',
          '**맞춤형 "커뮤니티" 또는 "open-weight" 라이선스:** 여러 주요 모델 제공업체는 개방형 라이선스처럼 보이지만 용도 제한 조건을 추가한 맞춤형 라이선스로 가중치를 공개합니다. 가장 자주 인용되는 예는 Meta가 공개적으로 배포하는 모델 가중치에 첨부하는 커뮤니티 라이선스로, 폭넓은 무료 사용을 허용하지만 일정 사용 규모 임계값을 초과하면 별도의 상업 계약이 필요하도록 하고, 허용 사용 제한도 함께 부과합니다.',
          '**구체적으로 확인해야 할 사항:** 상업적 이용이 애초에 허용되는지, 조건을 바꾸는 사용 규모나 매출 임계값이 있는지, 허용 사용 정책이 무엇을 금지하는지, 그리고 라이선스가 모델 출력을 이용해 경쟁 모델을 학습시키는 것을 제한하는지 — 이 마지막 제한은 여러 모델 전용 라이선스에서 나타나며 표준 소프트웨어 라이선스에는 상응하는 조항이 없습니다.',
          '**이는 법률 자문이 아닙니다.** 모델 라이선스 조건은 동일한 제공업체의 릴리스 간에도 변경되므로, 동일 조직의 이전 릴리스와 연속성이 있다고 가정하지 말고 배포하려는 특정 모델 가중치에 첨부된 정확한 라이선스 문구를 확인하십시오.',
        ],
      },
      whoShouldCare: {
        id: 'who-should-care',
        itemHeadings: true,
        title: '누가 어떤 라이선스를 신경 써야 하는가',
        content:
          '**취미 사용자에게는 문제되지 않는 라이선스가 스타트업이나 대행사에는 실질적인 위험이 될 수 있습니다.** 동일한 라이선스 조건이 모두에게 적용되지만, 의무가 발동될 경우의 결과는 이용이 얼마나 상업적이고 얼마나 공개적인지에 따라 커집니다.',
        columns: ['당신의 입장', '가장 중요한 것', '해야 할 일'],
        rows: [
          {
            '당신의 입장': '취미 사용자 / 개인 사용',
            '가장 중요한 것': '거의 모든 라이선스가 문제없음 — 타인을 위해 배포하거나 호스팅하지 않기 때문',
            '해야 할 일': '도구가 copyleft라면 수정된 코드를 공개적으로 재배포하지 않는지 확인',
          },
          {
            '당신의 입장': '도구 위에 상업 제품을 구축하는 스타트업',
            '가장 중요한 것': 'copyleft, 특히 AGPL-3.0은 자체 추가 사항을 공개하도록 강제할 수 있음',
            '해야 할 일': '수정 후 판매할 계획인 도구를 중심으로 아키텍처를 설계하기 전에 기본 라이선스를 확인',
          },
          {
            '당신의 입장': '도구를 사내에 통합하는 기업',
            '가장 중요한 것': 'copyleft 의무는 배포/호스팅 시 발동하며 순수 내부 이용 시에는 발동하지 않음 — 다만 규모가 커지면 위험도 달라짐',
            '해야 할 일': '수정되지 않은 copyleft 도구가 핵심 인프라가 되기 전에 법무팀의 라이선스 검토를 받을 것',
          },
          {
            '당신의 입장': '배포를 재판매하는 대행사 또는 프리랜서',
            '가장 중요한 것': 'AGPL-3.0 더하기 수정 더하기 클라이언트를 위한 호스팅은 대개 수정된 소스코드 공개를 의미함',
            '해야 할 일': '실제로 코드를 수정하는지, 아니면 수정 없이 단순히 설정/자체 호스팅만 하는지 확인',
          },
          {
            '당신의 입장': '벤더 종속을 우려하는 모든 사람',
            '가장 중요한 것': '독점 "무료" 및 source-available 도구는 조건 변경, 요금 추가, 서비스 종료가 가능함',
            '해야 할 일': '완성도보다 장기적 독립성이 더 중요하다면 permissive나 copyleft 대안을 우선 고려',
          },
          {
            '당신의 입장': '데이터 레지던시를 평가하는 GDPR에 민감한 팀',
            '가장 중요한 것': '라이선스 위험은 컴플라이언스 위험과는 별개의 축 — permissive 라이선스가 데이터 레지던시 문제를 해결해주지 않음',
            '해야 할 일': '라이선스 조건과 데이터 레지던시 요구사항을 별개의 두 체크리스트로 평가',
          },
        ],
      },
      preAdoptionChecklist: {
        id: 'pre-adoption-checklist',
        title: '도입 전 라이선스 체크리스트: 도구 도입 전 확인할 7가지',
        content:
          '**도구의 라이선스를 확인하는 데는 몇 분이면 충분하며, 이는 제품 출시 후 해결하는 데 훨씬 큰 비용이 드는 법적 문제를 예방합니다.** 오픈소스나 AI 도구 위에 무언가를 구축하기로 결정하기 전에 다음 일곱 가지를 확인하십시오.',
        numberedItems: [
          {
            title: '저장소의 실제 LICENSE 파일을 읽는다',
            whyItMatters: '랜딩 페이지의 "오픈소스"라는 주장은 법적 사실이 아니라 마케팅일 수 있습니다 — 소스 저장소 안의 LICENSE(또는 NOTICE/COPYING) 파일이 권위 있는 문서이며, 배지나 가격 페이지가 아닙니다.',
          },
          {
            title: '라이선스가 최근 변경되었는지 확인한다',
            whyItMatters: '일부 프로젝트는 상업적 성공을 거둔 후 permissive나 copyleft 라이선스에서 source-available 라이선스로 재라이선싱합니다 — 클라우드 제공업체가 기여 없이 인기 오픈소스 프로젝트를 호스팅하기 시작한 이후 이 패턴은 소프트웨어 업계 전반에서 반복되었습니다. 현재 파일만이 아니라 저장소의 라이선스 이력을 확인하십시오.',
          },
          {
            title: '중요하다면 라이선스가 실제로 OSI 승인인지 확인한다',
            whyItMatters: 'BSL, SSPL 같은 source-available 라이선스는 흔히 오픈소스로 홍보되지만 Open Source Initiative의 승인 목록에는 없습니다 — OSI 승인이 사용 사례의 요건이라면 프로젝트 자체의 설명을 믿기보다 목록을 직접 확인하십시오.',
          },
          {
            title: 'AI 모델에 특화된 상업적 이용 및 용도 제한 조항을 읽는다',
            whyItMatters: '모델의 라이선스는 상업적 이용을 폭넓게 허용할 수도, 사용 규모 임계값 이상에서 제한할 수도, 특정 응용을 아예 금지할 수도 있습니다 — 이 조항들은 표준 소프트웨어 라이선스 문구 밖에 있으며 코드 라이선스만 확인하면 놓치기 쉽습니다.',
          },
          {
            title: '자체 호스팅과 SaaS 호스팅 중 어느 쪽이 의무를 바꾸는지 판단한다',
            whyItMatters: 'AGPL-3.0 하에서는 수정된 소프트웨어를 네트워크를 통해 제공하는 것이 GPL 하에서 사본을 배포하는 것과 동일한 공개 의무를 발동시킵니다 — 코드를 수정하기 전에 계획 중인 배포가 어느 범주에 해당하는지 확인하십시오.',
          },
          {
            title: '기여를 계획한다면 기여자 라이선스 계약(CLA)이 있는지 확인한다',
            whyItMatters: 'CLA는 프로젝트 유지관리자에게 프로젝트 자체 라이선스가 사용자에게 부여하는 것보다 더 폭넓은 권리를 귀하의 기여물에 대해 부여할 수 있습니다 — 이는 주로 프로젝트에 코드를 되돌려 보낼 계획이 있을 때 관련이 있으며, 단순히 소비만 한다면 관련이 없습니다.',
          },
          {
            title: '코드 라이선스와는 별도로 상표 제한을 확인한다',
            whyItMatters: 'permissive나 copyleft 코드 라이선스가 자동으로 프로젝트의 이름이나 로고에 대한 권리를 부여하지는 않습니다 — 코드 라이선스가 포크를 허용하더라도 상표법에 의해 도구의 포크 및 리브랜딩이 막힐 수 있습니다.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        content:
          '**라이선스 관련 문제의 대부분은 실제로 읽은 라이선스를 오해하는 데서가 아니라, 원본 문서를 읽지 않고 넘어가는 데서 발생합니다.**',
        items: [
          '저장소의 실제 LICENSE 파일을 읽지 않고 마케팅 페이지의 "오픈소스" 주장을 그대로 믿는 것.',
          'AGPL-3.0이 소프트웨어 사본을 배포할 때만 문제가 된다고 가정하는 것 — 수정된 코드를 호스팅 서비스로 제공하는 경우에도 적용됨.',
          '모델의 코드 라이선스와 가중치 라이선스를 동일한 문서로 취급하는 것 — 실제로는 다른 경우가 많음.',
          '코드 라이선스와는 별도인 상표 제한을 확인하지 않고 도구를 포크·리브랜딩하는 것.',
          '프로젝트 시작 당시 permissive였던 라이선스가 이후 재라이선싱 후에도 그대로라고 가정하는 것 — 기억이 아니라 현재 라이선스를 확인해야 함.',
          '"무료니까"라는 이유로 copyleft나 source-available 도구의 법무 검토를 생략하는 것 — 무료 사용 가능과 의무 없음은 같은 말이 아님.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Open Source Initiative — The Open Source Definition](https://opensource.org/osd) — 라이선스가 OSI 승인 오픈소스로 인증받기 위해 충족해야 하는 공식 정의.',
          '[GNU 프로젝트 — Free Software Licenses](https://www.gnu.org/licenses/licenses.html) — GPL, LGPL, AGPL에 대한 자유소프트웨어재단 자체 설명.',
          '[Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) — 라이선스 전문.',
          '[MIT 라이선스 전문(Open Source Initiative)](https://opensource.org/license/mit) — 라이선스 전문.',
          '[MongoDB — Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) — SSPL 자체 조건과 근거.',
          '[Business Source License FAQ](https://mariadb.com/bsl-faq-mariadb/) — 이 라이선스를 널리 채택한 사례를 통해 BSL/BUSL 전환 방식을 설명.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'MIT와 Apache-2.0 중 제 프로젝트에 더 나은 라이선스는 무엇입니까?',
            a: '둘 다 permissive이며 사용자에게 의무가 거의 없습니다. Apache-2.0의 주된 실질적 차이는 명시적 특허 허여이며, 특허 포트폴리오를 보유한 조직에 더 중요합니다. MIT는 더 짧고 소규모 개인 프로젝트에서 약간 더 흔합니다. 둘 다 상업적 이용을 제한하지 않으며, 그 위에 구축한 것을 오픈소스화하도록 요구하지 않습니다.',
          },
          {
            q: 'AGPL-3.0 소프트웨어를 사용하면 회사 전체가 오픈소스가 되어야 합니까?',
            a: '아닙니다. AGPL-3.0의 의무는 대상 코드의 수정 버전을 네트워크를 통해 배포하거나 제공할 때 발동합니다 — 수정되지 않은 AGPL 도구를 사내에서 사용하거나, 소스코드를 수정하지 않고 제품이 호출하는 구성 요소로 사용하는 경우에는 코드베이스의 무관한 부분까지 라이선스 대상이 되지 않습니다. AGPL 코드 자체를 수정해 그 수정 버전을 사용자에게 제공할 때 비로소 관련이 있어집니다.',
          },
          {
            q: '"Source-Available"은 오픈소스와 같은 것입니까?',
            a: '아닙니다. 이 구분은 중요합니다. 오픈소스는 Open Source Initiative가 상업적 이용을 제한하지 않고 재배포와 수정할 권리를 포함하는 구체적 정의에 기반해 부여하는 인증입니다. BSL, SSPL 같은 source-available 라이선스는 코드를 읽는 것은 허용하지만 특정 상업적 이용, 대개 경쟁 호스팅 제공을 제한합니다 — 프로젝트가 스스로를 오픈소스라고 설명하더라도 OSI의 오픈소스 정의는 충족하지 않습니다.',
          },
          {
            q: '"무료"인 독점 AI 앱을 사업에 사용해도 됩니까?',
            a: '대체로 벤더의 서비스 약관에 따라 가능하지만, 벤더 종속 위험을 떠안게 됩니다: 소스코드 접근이 없으면 소프트웨어가 데이터를 어떻게 처리하는지 감사할 수 없고, 수정 버전을 자체 호스팅할 권리도 없으며, 벤더가 제품을 계속 무료·무제한·유지보수 상태로 둘 것이라는 보장도 없습니다. 가격만이 아니라 서비스 약관을 읽으십시오.',
          },
          {
            q: 'AI 모델 라이선스는 소프트웨어 라이선스와 같은 방식으로 작동합니까?',
            a: '정확히 같지는 않습니다. 모델 라이선스는 더 최근에 등장했고 표준화가 덜 되어 있습니다. 일부 릴리스는 표준 permissive 소프트웨어 라이선스를 가중치에 직접 적용하고, 다른 릴리스는 구체적인 금지 용도 목록을 가진 RAIL/OpenRAIL 같은 목적별 라이선스를 사용하며, 또 다른 릴리스는 사용 규모 임계값과 용도 제한이 있는 맞춤형 커뮤니티 라이선스를 사용합니다. 실행에 사용하는 코드의 라이선스와는 별도로, 다운로드하는 모델 가중치에 첨부된 구체적인 라이선스를 항상 확인하십시오.',
          },
          {
            q: '일부 오픈소스 프로젝트가 나중에 더 제한적인 라이선스로 전환하는 이유는 무엇입니까?',
            a: '가장 자주 언급되는 원인은 대형 클라우드 제공업체가 개발에 기여하지 않으면서 해당 프로젝트를 경쟁 호스팅 서비스로 제공하는 것입니다 — source-available 라이선스(BSL, SSPL)로 전환하거나 Commons Clause 같은 제한을 추가하면 유지관리자는 코드를 대부분 공개적이고 사용 가능한 상태로 유지하면서 그 특정 경쟁적 이용만 차단할 수 있습니다. 이 패턴은 소프트웨어 업계에서 반복되어 왔습니다.',
          },
          {
            q: '오픈소스 도구 위에 상업 제품을 구축하기 전에 스타트업은 무엇을 확인해야 합니까?',
            a: '랜딩 페이지가 아니라 실제 라이선스 파일을 읽고, 기반 코드를 수정할 계획인지 판단하십시오 — 이는 대개 copyleft와 AGPL-3.0 의무를 발동시키는 요인입니다. AI 모델이 관련되어 있다면 사용 규모나 용도 임계값을 확인하고, 그 도구가 제품이 의존하는 핵심 인프라가 되기 전에 법무팀의 라이선스 검토를 받으십시오.',
          },
          {
            q: '이 글은 법률 자문입니까?',
            a: '아닙니다. 이 글은 일반적인 라이선스 메커니즘이 대체로 어떻게 작동하는지를 방향 제시 목적으로 평이한 언어로 설명합니다. 라이선스 조건은 프로젝트와 버전에 따라 다르고, 해석은 관할권에 따라 달라질 수 있으며, 잘못 판단했을 때의 결과는 배포가 얼마나 상업적인지에 따라 커집니다 — 특정 도구, 배포, 사업적 결정에 대해서는 자격을 갖춘 변호사와 상담하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 LLM 소프트웨어 완전 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 항목마다 라이선스가 명시된 160개 이상의 로컬 LLM 도구.',
          '[Dify AI Workflow Builder 리뷰](/ko/power-local-llm/dify-ai-workflow-builder-review) — 라이선스를 명시한 리뷰. 이 가이드를 통해 그 라이선스가 귀하의 배포에 어떤 의미인지 이해할 수 있습니다.',
          '[AI 생성 콘텐츠와 지식재산권 위험](/ko/power-local-llm/ai-generated-content-ip-risk) — AI 생성 결과물을 상업적으로 배포할 때 라이선스와 함께 고려해야 할 지식재산권 문제.',
          '[에이전틱 AI 보안: 아이덴티티와 접근 관리](/ko/power-local-llm/agentic-ai-security-identity-access) — 자체 호스팅 AI 배포의 보안 및 거버넌스 고려사항, 라이선스 준수와 함께 검토해야 할 사항.',
          '[민감 문서를 위한 GDPR 준수 로컬 RAG](/ko/power-local-llm/local-rag-for-private-business-data) — 라이선스 위험과 데이터 레지던시/컴플라이언스 위험은 별개의 체크리스트이며, 이 가이드는 컴플라이언스 측면을 다룹니다.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'AI 및 오픈소스 소프트웨어 라이선스 완벽 해설: MIT vs Apache vs GPL vs AGPL vs 독점 라이선스',
      description: '오픈소스 및 AI 도구 라이선스 해설: permissive, copyleft, AGPL, source-available, AI 모델 라이선스 — 도구 도입 전 확인해야 할 사항.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/ai-tool-licenses-explained',
      inLanguage: 'ko',
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '개발자, 스타트업 창업자, 기술 의사결정자' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '[www.promptquorum.com/ko](https://www.promptquorum.com/ko)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/ko/power-local-llm](https://www.promptquorum.com/ko/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'AI 및 오픈소스 소프트웨어 라이선스 완벽 해설', item: '[www.promptquorum.com/ko/power-local-llm/ai-tool-licenses-explained](https://www.promptquorum.com/ko/power-local-llm/ai-tool-licenses-explained)' },
      ],
    },
  },
}
