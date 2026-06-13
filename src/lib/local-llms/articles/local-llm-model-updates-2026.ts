// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llm-model-updates-2026
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Local LLM Model Updates 2026: Every Major Open-Weight Release This Year',
      seoTitle: 'Local LLM 2026: Every Major Model Release + Ollama Status',
      intro: 'As of April 2026, the most significant local LLM releases this year include Meta Llama 3.3 70B (December 2025), DeepSeek-R1 (January 2025), Qwen3 and Qwen3-Coder families (September 2025), Microsoft Phi-4 (December 2024), and Google Gemma 3 (February 2026). This article tracks all major model releases with their key specifications and Ollama availability.',
      metaDescription: 'Local LLM model updates 2026: Gemma 3, Llama 4 Scout, Q1 releases tracked with specs, MMLU benchmarks, and Ollama availability. April 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**As of April 2026, the most significant local LLM releases this year include Meta Llama 3.3 70B (December 2025), DeepSeek-R1 (January 2025), Qwen3 and Qwen3-Coder families (September 2025), Microso.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM updates 2026',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Q1 2026 Releases', anchor: '#q1-2026-releases' },
        { label: 'Q4 2025 Releases', anchor: '#q4-2025-releases' },
        { label: 'Q3 2025 Releases', anchor: '#q3-2025-releases' },
        { label: 'Quality Improvement 2024 to 2026', anchor: '#quality-improvement' },
        { label: 'How to Stay Updated', anchor: '#how-to-stay-updated' },
        { label: 'Regional Context', anchor: '#regional-context' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Biggest Q1 2026 release**: Google Gemma 3 (February 2026) -- 1B, 4B, 9B, and 27B variants, vision support on all sizes, Apache 2.0 licence.',
            '**Best reasoning model release**: DeepSeek-R1 (January 2025) -- chain-of-thought reasoning, 52% MATH at 7B scale, disrupted the 7B benchmark landscape.',
            '**Largest quality jump in 2025**: Llama 3.3 70B (December 2025) -- matches GPT-4 (2023) on MMLU, available via `ollama run llama3.3:70b`.',
            '**Fastest-growing model family in 2025**: Qwen3 -- surpassed Mistral Small in Ollama downloads by Q4 2025.',
            'As of April 2026, the quality gap between locally-runnable models and frontier cloud models has narrowed to roughly 18-24 months of equivalent capability.',
          ],
        },
        q12026: {
          title: 'Which Local LLM Models Were Released in Q1 2026?',
          content: 'As of April 2026, the notable open-weight model releases from January-April 2026. All models below are available in various quantization formats -- see [quantization guide](/local-llms/llm-quantization-explained) for details on Q4 vs Q5 tradeoffs:',
          image: '/images/q1-2026-model-releases-timeline-en.svg',
          imageCaption: 'Q1 2026 local LLM releases timeline: Phi-4 Mini (January, 3.8B), Gemma 3 (February, vision-capable on all sizes), Llama 4 Scout (March, MoE architecture), and Mistral Small 3.2 (April). All released to Ollama within days of open-weight announcement.',
          rows: [
            { 'Model': 'Gemma 3 (all sizes)', 'Released': 'February 2026', 'Developer': 'Google', 'Key Feature': 'Vision on all sizes, 128K context, Apache 2.0', 'Ollama': 'ollama run gemma3:9b' },
            { 'Model': 'Llama 4 Scout (preview)', 'Released': 'March 2026', 'Developer': 'Meta', 'Key Feature': 'MoE architecture preview, 10M token context claimed', 'Ollama': 'Not yet available' },
            { 'Model': 'Mistral Small 3.2', 'Released': 'February 2026', 'Developer': 'Mistral AI', 'Key Feature': 'Improved instruction-following over Small 3.1', 'Ollama': 'ollama run mistral-small3.2' },
            { 'Model': 'Phi-4 Mini', 'Released': 'January 2026', 'Developer': 'Microsoft', 'Key Feature': '3.8B, 70% HumanEval, 128K context', 'Ollama': 'ollama run phi4-mini' },
          ],
          columns: ['Model', 'Released', 'Developer', 'Key Feature', 'Ollama'],
        },
        q42025: {
          title: 'Which Q4 2025 Models Are Still the Most Important in 2026?',
          image: '/images/model-comparison-2026-en.svg',
          imageCaption: 'April 2026 local LLM model comparison: Llama 3.3 70B leads at 82% MMLU with 42GB VRAM, Qwen3 7B provides best multilingual support at 74% MMLU and 5GB VRAM, Gemma 3 9B adds vision capabilities, DeepSeek-R1 7B specializes in reasoning tasks at 52% MATH. All runnable via Ollama.',
          rows: [
            { 'Model': 'Llama 3.3 70B', 'Released': 'December 2025', 'Key Specs': '82% MMLU, 88% HumanEval, 128K context', 'Still Relevant': 'Yes -- best 70B option' },
            { 'Model': 'Phi-4 14B', 'Released': 'December 2024', 'Key Specs': '84% MMLU -- above its size class', 'Still Relevant': 'Yes -- strong 14B reasoning model' },
            { 'Model': 'Qwen3 full family', 'Released': 'September 2025', 'Key Specs': '0.5B-72B range, 29 languages, Apache 2.0', 'Still Relevant': 'Yes -- current best multilingual family' },
            { 'Model': 'DeepSeek-R1', 'Released': 'January 2025', 'Key Specs': 'Reasoning model, 52% MATH at 7B, MoE at large scale', 'Still Relevant': 'Yes -- best reasoning locally' },
          ],
          columns: ['Model', 'Released', 'Key Specs', 'Still Relevant'],
        },
        q32025: {
          title: 'Which Q3 2025 Models Are Still Widely Used?',
          content: [
            '**Several 2025 releases remain widely deployed in 2026 due to tool compatibility and community documentation:**',
          ],
          items: [
            '**Llama 3.3 8B** (July 2025) -- still the most documented 8B model, preferred by beginners for its extensive guides and tool integrations.',
            '**Mistral Small v0.3** (May 2025) -- lower benchmark scores than current alternatives, but Apache 2.0 licence and Mistral EU provenance make it preferred in some European deployments.',
            '**Llama 3.2 3B and 1B** (September 2025) -- still the default first-install recommendation due to small size and widespread documentation.',
          ],
        },
        whatChanged: {
          id: 'quality-improvement',
          title: 'How Much Has Local LLM Quality Improved from 2024 to 2026?',
          content: [
            '**The two-year improvement in locally-runnable model quality is substantial.** As of April 2026, a 7B model (Qwen3 7B, 74% MMLU) matches the benchmark performance of a 13B model from early 2024. A 70B model (Llama 3.3 70B, 82% MMLU) matches GPT-4 (2023) performance -- a model that required billion-dollar server infrastructure 3 years ago now runs on a Mac Studio. For hardware recommendations matching each model class, see [local LLM hardware guide 2026](/local-llms/local-llm-hardware-guide-2026).',
          ],
          image: '/images/llm-quality-improvement-2024-2026-en.svg',
          imageCaption: 'Local LLM quality improvement 2024-2026: 7B-class models improved from 64% MMLU (Mistral Small, early 2024) to 74% (Qwen3 7B, April 2026). 70B-class improved from 75% (Llama 3.3 70B) to 82-84% (Llama 3.3 70B and Qwen3 72B). Every 18-24 months, local model quality advances by one model generation.',
          rows: [
            { 'Year': 'Early 2024', 'Best 7B MMLU': '~64% (Mistral Small)', 'Best Local 70B MMLU': '~75% (Llama 3.3 70B)', 'Hardware Needed': '7B: 8 GB RAM; 70B: 48 GB RAM' },
            { 'Year': 'Late 2025', 'Best 7B MMLU': '~74% (Qwen3 7B)', 'Best Local 70B MMLU': '~82% (Llama 3.3 70B)', 'Hardware Needed': '7B: 5 GB RAM; 70B: 40 GB RAM' },
            { 'Year': 'April 2026', 'Best 7B MMLU': '~74% (Qwen3 7B)', 'Best Local 70B MMLU': '~84% (Qwen3 72B)', 'Hardware Needed': '7B: 4.7 GB RAM; 70B: 43 GB RAM' },
          ],
          columns: ['Year', 'Best 7B MMLU', 'Best Local 70B MMLU', 'Hardware Needed'],
        },
        stayUpdated: {
          title: 'How Do You Stay Updated on New Local LLM Releases?',
          items: [
            '**Ollama blog** (ollama.com/blog) -- announces new models added to the Ollama library, typically within days of open-weight releases.',
            '**Hugging Face Open LLM Leaderboard** (huggingface.co/spaces/open-llm-leaderboard) -- tracks benchmark scores for all newly released models.',
            '**r/LocalLLaMA** (reddit.com/r/LocalLLaMA) -- the most active community for local AI news, benchmarks, and hardware discussion.',
            '**GitHub Releases**: follow the repositories for llama.cpp (github.com/ggerganov/llama.cpp) and Ollama (github.com/ollama/ollama) to track engine updates that enable new models.',
            '**PromptQuorum**: this guide is updated when major model releases change the recommendations. Check the dateModified field for the most recent update.',
          ],
        },
        regionalContext: {
          title: 'Local LLM Model Updates 2026: Regional Context',
          content: [
            '**EU / GDPR + AI Act:** The EU AI Act (effective February 2025) introduced documentation requirements for AI systems used in regulated contexts. As new local models release in 2026, EU organizations should note: Mistral AI (France) remains the only major EU-based open-weight model developer. Mistral Small 3.2 (February 2026) and Mistral Small continue to carry Apache 2.0 licences -- the cleanest compliance choice for regulated sectors. German BSI and French CNIL both recommend local inference for high-risk AI applications. For non-EU models (Llama, Qwen, Gemma, DeepSeek): all are usable under GDPR for local inference since no data leaves the organization. The compliance difference is in supplier documentation, not data handling. When upgrading to a new model, update the AI tool documentation with the new model version, quantization level, and GGUF filename.',
            '**Japan (METI):** METI AI Governance Guidelines require documenting model version changes in production AI systems. When upgrading from Llama 3.3 8B to a newer model, document: previous model tag, new model tag, upgrade date, and reason for change. The `ollama show <model>` command provides the exact version string for compliance records. For Japanese-language deployments, Qwen3 remains the recommended family in 2026 due to its native CJK tokenizer.',
            '**China:** Under China\'s CAC Generative AI Interim Measures (2023), organizations providing AI services to the public must register models with regulators. Local deployments for internal use are outside this scope. For Chinese-language deployments, Qwen3 (Alibaba, Apache 2.0) and DeepSeek-R1 (DeepSeek, MIT) are the primary choices. Qwen3 received significant model family updates in Q3 2025 -- organizations still running Qwen2 should upgrade to Qwen3 for improved performance and the expanded 29-language support.',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes When Tracking and Upgrading Local LLM Models',
          items: [
            '**Upgrading to every new release unnecessarily:** New model releases happen monthly. If your current model satisfies your use case, upgrading is optional. Evaluate a new model only when you hit specific quality limits: poor reasoning on complex tasks, weak multilingual output, or coding failures. Downloading a 4-40 GB model for marginal benchmark gains is wasted time and disk space.',
            '**Using the wrong slug when looking up models in Ollama after a release:** Model names on Hugging Face differ from Ollama tags. Meta Llama 3.3 is `llama3.3` in Ollama, not `llama-3.3` or `meta-llama-3.3`. Always verify the exact Ollama tag at ollama.com/library before using in scripts.',
            '**Not updating Ollama itself before pulling new models:** New model support often requires an updated Ollama version. Before pulling a recently released model, update Ollama: macOS auto-updates; Linux: re-run `curl -fsSL https://ollama.com/install.sh | sh`; Windows: download the latest installer. Running an outdated Ollama version may cause a new model to fail silently.',
            '**Assuming newer = better for your specific task:** Gemma 3 9B (February 2026) scores higher than Llama 3.3 8B (July 2025) on most benchmarks, but Llama 3.3 8B has 18+ months of community fine-tunes, system prompts, and documented use cases. For established workflows with community resources, the older model may be the better practical choice.',
          ],
        },
        relatedReading: {
          id: 'related',
          title: 'Related Reading',
          items: [
            '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) -- current rankings of the top 5 models by task, hardware, and quality including all 2026 releases.',
            '[LLM Quantization Explained](/local-llms/llm-quantization-explained) -- understand Q4_K_M vs Q5_K_M when downloading new model releases.',
            '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral) -- full benchmark comparison of the three main model families with latest 2026 data.',
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) -- check if your hardware supports the latest model releases before downloading.',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- update Ollama and pull the latest models with correct version tags.',
            '[Top Open Source Models on Ollama](/local-llms/top-open-source-models-ollama) -- full library of available models with pull commands and performance data.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Local LLM Model Updates in 2026?',
          faqs: [
            {
              q: 'How quickly do new models appear in Ollama after their open-weight release?',
              a: 'Typically 1-7 days for major model releases from Meta, Google, Mistral, and Alibaba. The Ollama team prioritizes high-profile releases -- Llama 3.3 70B appeared in the Ollama library 3 days after Meta\'s open-weight release. Smaller or community models may take 2-4 weeks.',
            },
            {
              q: 'Should I upgrade from Llama 3.3 8B to a newer model?',
              a: 'If you use Llama 3.3 8B for general tasks and are satisfied with quality, upgrading is optional. Qwen3 7B scores slightly higher on benchmarks and has better multilingual and coding support. For most English-focused general use, the practical quality difference is small. Upgrade if your current model struggles on specific tasks.',
            },
            {
              q: 'Will local models ever match current frontier cloud model quality?',
              a: 'The trend suggests yes -- with a lag of 18-24 months. GPT-4 (2023, estimated 1.7T parameters) is matched by Llama 3.3 70B (2025, locally runnable). GPT-5.5 (2024) will likely have a locally-runnable equivalent by late 2026 or 2027. The limiting factor is compute efficiency, not algorithmic capability.',
            },
            {
              q: 'What happened with DeepSeek and why was it significant?',
              a: 'DeepSeek-R1 (January 2025) demonstrated that a Chinese AI lab could produce reasoning-capable models competitive with OpenAI o1 at lower training cost. The open-weight release made a frontier-class reasoning model locally available for the first time. DeepSeek-R1 7B achieves 52% on MATH -- nearly double the 28% of Mistral Small -- specifically because of its chain-of-thought training methodology.',
            },
            {
              q: 'What is Llama 4 and is it available locally yet?',
              a: 'As of April 2026, Meta released a preview of Llama 4 Scout -- a mixture-of-experts model claiming up to 10M token context. The full open-weight release is not yet available for local inference. The Ollama library does not yet include Llama 4 variants. This page will be updated when Llama 4 becomes available for local deployment.',
            },
            {
              q: 'Are there any local models specifically for enterprise or regulated industries in 2026?',
              a: 'Mistral AI provides enterprise-grade support contracts for Mistral models. Their European origin is relevant for GDPR compliance (EU AI Act effective February 2025). For healthcare (HIPAA) or finance (SOC 2), any locally-deployed model can meet data residency requirements -- the model itself is data-neutral. The compliance work is in the deployment infrastructure, not the model selection.',
            },
            {
              q: 'Which model should a complete beginner start with in 2026?',
              a: 'Llama 3.2 3B or Gemma 3 4B are the best beginner choices. Both run on modest hardware (4-6 GB VRAM), have extensive documentation, and perform well on general tasks. Llama 3.2 3B has more community guides and tool integrations. Gemma 3 4B is newer, slightly faster, and supports vision capabilities. For non-technical users, LM Studio makes both easy to install and use without the command line.',
            },
            {
              q: 'Are new models worth the effort to update if my current model works well?',
              a: 'Only if you hit specific quality limits with your current model. If your 7B or 8B model satisfies your use cases, upgrading is optional. However, if you notice reasoning errors, poor multilingual support, or weak coding ability, testing a newer model is worthwhile. Qwen3 7B (2025) outperforms Llama 3.3 8B on most benchmarks, making it a safe upgrade target for users seeking incremental improvement.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Hugging Face. (2026). "Open LLM Leaderboard." https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard -- Real-time benchmark rankings for all open-weight model releases.',
            'Google DeepMind. (2026). "Gemma 3 Technical Report." https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf -- Architecture, benchmarks, and vision capability data for all Gemma 3 variants.',
            'Meta AI. (2025). "Llama 3.3 Release." https://ai.meta.com/blog/llama-3-3/ -- Official announcement and specifications for Llama 3.3 70B.',
            'DeepSeek AI. (2025). "DeepSeek-R1 Technical Paper." https://arxiv.org/abs/2501.12948 -- Chain-of-thought architecture and MATH benchmark results for DeepSeek-R1.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Local LLM Model Updates 2026: Every Major Open-Weight Release This Year',
        'url': 'https://www.promptquorum.com/local-llms/local-llm-model-updates-2026',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'proficiencyLevel': 'Intermediate',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'about': [
          { '@type': 'Thing', 'name': 'Gemma 3' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'Open-weight LLM 2026' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Major Local LLM Releases Q1 2026',
        'numberOfItems': 4,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Gemma 3 (all sizes)',
            'description': 'Released February 2026 by Google. Vision on all sizes. 128K context. Apache 2.0. ollama run gemma3:9b',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Llama 4 Scout (preview)',
            'description': 'Released March 2026 by Meta. MoE architecture. 10M token context claimed. Not yet available in Ollama.',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Mistral Small 3.2',
            'description': 'Released February 2026 by Mistral AI. Improved instruction-following over Small 3.1. ollama run mistral-small3.2',
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Phi-4 Mini',
            'description': 'Released January 2026 by Microsoft. 3.8B parameters. 70% HumanEval. 128K context. ollama run phi4-mini',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How quickly do new models appear in Ollama after release?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Typically 1-7 days for major releases from Meta, Google, Mistral, and Alibaba. Llama 3.3 70B appeared in the Ollama library 3 days after Meta\'s open-weight release. Smaller or community models may take 2-4 weeks.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Should I upgrade from Llama 3.3 8B to a newer model?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Upgrading is optional if you are satisfied with current quality. Qwen3 7B scores slightly higher on benchmarks with better multilingual and coding support. For most English-focused general use, the practical quality difference is small.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Will local models ever match current frontier cloud model quality?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The trend suggests yes -- with a lag of 18-24 months. GPT-4 (2023) is matched by Llama 3.3 70B (2025, locally runnable). GPT-5.5 (2024) will likely have a locally-runnable equivalent by late 2026 or 2027.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What happened with DeepSeek and why was it significant?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DeepSeek-R1 (January 2025) demonstrated a Chinese AI lab could produce reasoning-capable models competitive with OpenAI o1 at lower training cost. The open-weight release made a frontier-class reasoning model locally available. DeepSeek-R1 7B achieves 52% on MATH vs 28% for Mistral Small due to chain-of-thought training.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What is Llama 4 and is it available locally yet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'As of April 2026, Meta released a preview of Llama 4 Scout -- a mixture-of-experts model claiming up to 10M token context. The full open-weight release is not yet available for local inference. The Ollama library does not yet include Llama 4 variants.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Are there local models for enterprise or regulated industries?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Mistral AI provides enterprise-grade support for Mistral models. Their European origin is relevant for GDPR compliance under the EU AI Act (effective February 2025). Any locally-deployed model can meet data residency requirements -- compliance work is in deployment infrastructure, not model selection.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Which model should a complete beginner start with in 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Llama 3.2 3B or Gemma 3 4B. Both run on modest hardware (4-6 GB VRAM), have extensive documentation, and perform well on general tasks. Llama 3.2 3B has more community guides. Gemma 3 4B is newer, slightly faster, and supports vision. For non-technical users, LM Studio makes both easy without the command line.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Are new models worth the effort to update if my current model works well?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Only if you hit specific quality limits. If your 7B or 8B model satisfies your use cases, upgrading is optional. Upgrade if you notice reasoning errors, poor multilingual support, or weak coding ability. Qwen3 7B outperforms Llama 3.3 8B on most benchmarks and is a safe upgrade target.',
            },
          },
        ],
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Actualizaciones de modelos LLM locales 2026: Todos los lanzamientos open-weight importantes del año',
      seoTitle: 'LLM locales 2026: lanzamientos y estado en Ollama',
      intro: 'A abril de 2026, los lanzamientos de LLM locales más significativos de este año incluyen Meta Llama 3.3 70B (diciembre de 2025), DeepSeek-R1 (enero de 2025), las familias Qwen3 y Qwen3-Coder (septiembre de 2025), Microsoft Phi-4 (diciembre de 2024) y Google Gemma 3 (febrero de 2026). Este artículo registra todos los lanzamientos principales de modelos con sus especificaciones clave y disponibilidad en Ollama.',
      metaDescription: 'Actualizaciones de LLM locales 2026: Gemma 3, Llama 4 Scout y lanzamientos del Q1 con especificaciones, benchmarks MMLU y disponibilidad en Ollama.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**A abril de 2026, los lanzamientos de LLM locales más significativos de este año incluyen Meta Llama 3.3 70B (diciembre de 2025), DeepSeek-R1 (enero de 2025), las familias Qwen3 y Qwen3-Coder (septiembre de 2025) y Microsoft Phi-4.**',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '8 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'actualizaciones LLM locales 2026',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Lanzamientos Q1 2026', anchor: '#q1-2026-releases' },
        { label: 'Lanzamientos Q4 2025', anchor: '#q4-2025-releases' },
        { label: 'Lanzamientos Q3 2025', anchor: '#q3-2025-releases' },
        { label: 'Mejora de calidad 2024 a 2026', anchor: '#quality-improvement' },
        { label: 'Cómo mantenerse actualizado', anchor: '#how-to-stay-updated' },
        { label: 'Contexto regional', anchor: '#regional-context' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Lectura relacionada', anchor: '#related-reading' },
        { label: 'Preguntas frecuentes', anchor: '#faq' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Mayor lanzamiento del Q1 2026**: Google Gemma 3 (febrero de 2026) -- variantes de 1B, 4B, 9B y 27B, soporte de visión en todos los tamaños, licencia Apache 2.0.',
            '**Mejor lanzamiento de modelo de razonamiento**: DeepSeek-R1 (enero de 2025) -- razonamiento chain-of-thought, 52% MATH a escala 7B, transformó el panorama de benchmarks 7B.',
            '**Mayor salto de calidad en 2025**: Llama 3.3 70B (diciembre de 2025) -- iguala GPT-4 (2023) en MMLU, disponible mediante `ollama run llama3.3:70b`.',
            '**Familia de modelos de mayor crecimiento en 2025**: Qwen3 -- superó a Mistral Small en descargas de Ollama para el Q4 2025.',
            'A abril de 2026, la brecha de calidad entre los modelos ejecutables localmente y los modelos frontier en la nube se ha reducido a aproximadamente 18-24 meses de capacidad equivalente.',
          ],
        },
        q12026: {
          title: '¿Qué modelos LLM locales se lanzaron en el Q1 2026?',
          content: 'A abril de 2026, los lanzamientos notables de modelos open-weight de enero a abril de 2026. Todos los modelos a continuación están disponibles en varios formatos de cuantización -- consulta la [guía de cuantización](/es/local-llms/llm-quantization-explained) para conocer los detalles sobre las diferencias entre Q4 y Q5:',
          image: '/images/q1-2026-model-releases-timeline-es.svg',
          imageCaption: 'Línea de tiempo de lanzamientos de LLM locales del Q1 2026: Phi-4 Mini (enero, 3.8B), Gemma 3 (febrero, visión en todos los tamaños), Llama 4 Scout (marzo, arquitectura MoE) y Mistral Small 3.2 (abril). Todos se añadieron a Ollama en días tras el anuncio open-weight.',
          rows: [
            { 'Modelo': 'Gemma 3 (todos los tamaños)', 'Lanzamiento': 'Febrero 2026', 'Desarrollador': 'Google', 'Característica clave': 'Visión en todos los tamaños, contexto 128K, Apache 2.0', 'Ollama': 'ollama run gemma3:9b' },
            { 'Modelo': 'Llama 4 Scout (vista previa)', 'Lanzamiento': 'Marzo 2026', 'Desarrollador': 'Meta', 'Característica clave': 'Vista previa de arquitectura MoE, contexto de 10M tokens declarado', 'Ollama': 'No disponible aún' },
            { 'Modelo': 'Mistral Small 3.2', 'Lanzamiento': 'Febrero 2026', 'Desarrollador': 'Mistral AI', 'Característica clave': 'Seguimiento de instrucciones mejorado respecto a Small 3.1', 'Ollama': 'ollama run mistral-small3.2' },
            { 'Modelo': 'Phi-4 Mini', 'Lanzamiento': 'Enero 2026', 'Desarrollador': 'Microsoft', 'Característica clave': '3.8B, 70% HumanEval, contexto 128K', 'Ollama': 'ollama run phi4-mini' },
          ],
          columns: ['Modelo', 'Lanzamiento', 'Desarrollador', 'Característica clave', 'Ollama'],
        },
        q42025: {
          title: '¿Qué modelos del Q4 2025 siguen siendo los más importantes en 2026?',
          image: '/images/model-comparison-2026-es.svg',
          imageCaption: 'Comparación de modelos LLM locales en abril de 2026: Llama 3.3 70B lidera con 82% MMLU y 42 GB VRAM, Qwen3 7B ofrece el mejor soporte multilingüe con 74% MMLU y 5 GB VRAM, Gemma 3 9B añade capacidades de visión, DeepSeek-R1 7B se especializa en tareas de razonamiento con 52% MATH. Todos ejecutables mediante Ollama.',
          rows: [
            { 'Modelo': 'Llama 3.3 70B', 'Lanzamiento': 'Diciembre 2025', 'Especificaciones clave': '82% MMLU, 88% HumanEval, contexto 128K', 'Sigue siendo relevante': 'Sí -- mejor opción 70B' },
            { 'Modelo': 'Phi-4 14B', 'Lanzamiento': 'Diciembre 2024', 'Especificaciones clave': '84% MMLU -- por encima de su clase de tamaño', 'Sigue siendo relevante': 'Sí -- sólido modelo de razonamiento 14B' },
            { 'Modelo': 'Familia completa Qwen3', 'Lanzamiento': 'Septiembre 2025', 'Especificaciones clave': 'Rango de 0.5B a 72B, 29 idiomas, Apache 2.0', 'Sigue siendo relevante': 'Sí -- actualmente la mejor familia multilingüe' },
            { 'Modelo': 'DeepSeek-R1', 'Lanzamiento': 'Enero 2025', 'Especificaciones clave': 'Modelo de razonamiento, 52% MATH a 7B, MoE a gran escala', 'Sigue siendo relevante': 'Sí -- mejor razonamiento local' },
          ],
          columns: ['Modelo', 'Lanzamiento', 'Especificaciones clave', 'Sigue siendo relevante'],
        },
        q32025: {
          title: '¿Qué modelos del Q3 2025 siguen siendo ampliamente usados?',
          content: [
            '**Varios lanzamientos de 2025 continúan ampliamente desplegados en 2026 debido a la compatibilidad de herramientas y la documentación comunitaria:**',
          ],
          items: [
            '**Llama 3.3 8B** (julio de 2025) -- sigue siendo el modelo 8B mejor documentado, preferido por principiantes por sus extensas guías e integraciones de herramientas.',
            '**Mistral Small v0.3** (mayo de 2025) -- puntuaciones de benchmark inferiores a las alternativas actuales, pero la licencia Apache 2.0 y el origen europeo de Mistral lo hacen preferido en algunos despliegues europeos.',
            '**Llama 3.2 3B y 1B** (septiembre de 2025) -- siguen siendo la recomendación estándar para la primera instalación debido a su pequeño tamaño y documentación extensa.',
          ],
        },
        whatChanged: {
          id: 'quality-improvement',
          title: '¿Cuánto ha mejorado la calidad de los LLM locales de 2024 a 2026?',
          content: [
            '**La mejora de dos años en la calidad de los modelos ejecutables localmente es sustancial.** A abril de 2026, un modelo de 7B (Qwen3 7B, 74% MMLU) iguala el rendimiento en benchmark de un modelo de 13B de principios de 2024. Un modelo de 70B (Llama 3.3 70B, 82% MMLU) iguala el rendimiento de GPT-4 (2023) -- un modelo que hace 3 años requería infraestructura de servidores de mil millones de dólares ahora funciona en un Mac Studio. Para recomendaciones de hardware según cada clase de modelo, consulta la [guía de hardware LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026).',
          ],
          image: '/images/llm-quality-improvement-2024-2026-es.svg',
          imageCaption: 'Mejora de calidad de LLM locales 2024-2026: los modelos de clase 7B mejoraron del 64% MMLU (Mistral Small, principios de 2024) al 74% (Qwen3 7B, abril de 2026). La clase 70B mejoró del 75% (Llama 3.3 70B) al 82-84% (Llama 3.3 70B y Qwen3 72B). Cada 18-24 meses, la calidad de los modelos locales avanza una generación.',
          rows: [
            { 'Año': 'Principios de 2024', 'Mejor 7B MMLU': '~64% (Mistral Small)', 'Mejor 70B local MMLU': '~75% (Llama 3.3 70B)', 'Hardware necesario': '7B: 8 GB RAM; 70B: 48 GB RAM' },
            { 'Año': 'Finales de 2025', 'Mejor 7B MMLU': '~74% (Qwen3 7B)', 'Mejor 70B local MMLU': '~82% (Llama 3.3 70B)', 'Hardware necesario': '7B: 5 GB RAM; 70B: 40 GB RAM' },
            { 'Año': 'Abril de 2026', 'Mejor 7B MMLU': '~74% (Qwen3 7B)', 'Mejor 70B local MMLU': '~84% (Qwen3 72B)', 'Hardware necesario': '7B: 4.7 GB RAM; 70B: 43 GB RAM' },
          ],
          columns: ['Año', 'Mejor 7B MMLU', 'Mejor 70B local MMLU', 'Hardware necesario'],
        },
        stayUpdated: {
          title: '¿Cómo mantenerse actualizado sobre los nuevos lanzamientos de LLM locales?',
          items: [
            '**Blog de Ollama** (ollama.com/blog) -- anuncia los nuevos modelos añadidos a la biblioteca de Ollama, normalmente en días tras los lanzamientos open-weight.',
            '**Hugging Face Open LLM Leaderboard** (huggingface.co/spaces/open-llm-leaderboard) -- rastrea las puntuaciones de benchmark de todos los modelos recién lanzados.',
            '**r/LocalLLaMA** (reddit.com/r/LocalLLaMA) -- la comunidad más activa para noticias de IA local, benchmarks y debates sobre hardware.',
            '**GitHub Releases**: sigue los repositorios de llama.cpp (github.com/ggerganov/llama.cpp) y Ollama (github.com/ollama/ollama) para rastrear las actualizaciones del motor que habilitan nuevos modelos.',
            '**PromptQuorum**: esta guía se actualiza cuando los principales lanzamientos de modelos cambian las recomendaciones. Consulta el campo dateModified para ver la última actualización.',
          ],
        },
        regionalContext: {
          title: 'Actualizaciones de modelos LLM locales 2026: Contexto regional',
          content: [
            '**UE / RGPD + AI Act:** La Ley de IA de la UE (en vigor desde febrero de 2025) introdujo requisitos de documentación para sistemas de IA en contextos regulados. A medida que se lancen nuevos modelos locales en 2026, las organizaciones de la UE deben tener en cuenta: Mistral AI (Francia) sigue siendo el único desarrollador principal de modelos open-weight con sede en la UE. Mistral Small 3.2 (febrero de 2026) y Mistral Small mantienen licencias Apache 2.0 -- la opción de cumplimiento más limpia para sectores regulados. Tanto el BSI alemán como la CNIL francesa recomiendan la inferencia local para aplicaciones de IA de alto riesgo. Para modelos no europeos (Llama, Qwen, Gemma, DeepSeek): todos son utilizables bajo el RGPD para inferencia local ya que ningún dato abandona la organización. La diferencia en cumplimiento está en la documentación del proveedor, no en el tratamiento de datos. Al actualizar a un nuevo modelo, actualiza la documentación de la herramienta de IA con la nueva versión del modelo, el nivel de cuantización y el nombre del archivo GGUF.',
            '**Japón (METI):** Las Directrices de Gobernanza de IA del METI requieren documentar los cambios de versión del modelo en sistemas de IA en producción. Al actualizar de Llama 3.3 8B a un modelo más reciente, documenta: etiqueta del modelo anterior, nueva etiqueta del modelo, fecha de actualización y motivo del cambio. El comando `ollama show <model>` proporciona la cadena de versión exacta para los registros de cumplimiento. Para despliegues en japonés, Qwen3 sigue siendo la familia recomendada en 2026 por su tokenizador CJK nativo.',
            '**China:** Bajo las Medidas Provisionales de IA Generativa del CAC de China (2023), las organizaciones que prestan servicios de IA al público deben registrar los modelos ante los reguladores. Los despliegues locales para uso interno quedan fuera de este ámbito. Para despliegues en chino, Qwen3 (Alibaba, Apache 2.0) y DeepSeek-R1 (DeepSeek, MIT) son las opciones principales. Qwen3 recibió importantes actualizaciones de familia de modelos en el Q3 2025 -- las organizaciones que aún usan Qwen2 deberían actualizar a Qwen3 para mejorar el rendimiento y el soporte ampliado de 29 idiomas.',
          ],
        },
        commonMistakes: {
          title: 'Errores comunes al rastrear y actualizar modelos LLM locales',
          items: [
            '**Actualizar a cada nuevo lanzamiento sin necesidad:** Los nuevos lanzamientos de modelos ocurren mensualmente. Si tu modelo actual satisface tu caso de uso, actualizar es opcional. Evalúa un nuevo modelo solo cuando alcances límites de calidad específicos: razonamiento deficiente en tareas complejas, salida multilingüe débil o fallos en código. Descargar un modelo de 4-40 GB por ganancias marginales en benchmarks es tiempo y espacio en disco desperdiciados.',
            '**Usar el slug incorrecto al buscar modelos en Ollama tras un lanzamiento:** Los nombres de modelos en Hugging Face difieren de las etiquetas de Ollama. Meta Llama 3.3 es `llama3.3` en Ollama, no `llama-3.3` ni `meta-llama-3.3`. Verifica siempre la etiqueta exacta de Ollama en ollama.com/library antes de usarla en scripts.',
            '**No actualizar Ollama antes de descargar nuevos modelos:** El soporte de nuevos modelos suele requerir una versión actualizada de Ollama. Antes de descargar un modelo recién lanzado, actualiza Ollama: macOS se actualiza automáticamente; Linux: vuelve a ejecutar `curl -fsSL https://ollama.com/install.sh | sh`; Windows: descarga el instalador más reciente. Ejecutar una versión desactualizada de Ollama puede hacer que un nuevo modelo falle silenciosamente.',
            '**Asumir que más nuevo = mejor para tu tarea específica:** Gemma 3 9B (febrero de 2026) puntúa más alto que Llama 3.3 8B (julio de 2025) en la mayoría de benchmarks, pero Llama 3.3 8B tiene más de 18 meses de fine-tunes comunitarios, prompts de sistema y casos de uso documentados. Para flujos de trabajo establecidos con recursos comunitarios, el modelo más antiguo puede ser la mejor opción práctica.',
          ],
        },
        relatedReading: {
          id: 'related',
          title: 'Lectura relacionada',
          items: [
            '[Mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) -- clasificaciones actuales de los 5 mejores modelos por tarea, hardware y calidad, incluyendo todos los lanzamientos de 2026.',
            '[Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) -- entiende Q4_K_M vs Q5_K_M al descargar nuevos lanzamientos de modelos.',
            '[Qwen vs Llama vs Mistral](/es/local-llms/qwen-vs-llama-vs-mistral) -- comparación completa de benchmarks de las tres principales familias de modelos con datos más recientes de 2026.',
            '[Guía de hardware LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) -- comprueba si tu hardware soporta los últimos lanzamientos de modelos antes de descargarlos.',
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- actualiza Ollama y descarga los últimos modelos con las etiquetas de versión correctas.',
            '[Mejores modelos open source en Ollama](/es/local-llms/top-open-source-models-ollama) -- biblioteca completa de modelos disponibles con comandos de descarga y datos de rendimiento.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes sobre actualizaciones de modelos LLM locales en 2026',
          faqs: [
            {
              q: '¿Con qué rapidez aparecen los nuevos modelos en Ollama tras su lanzamiento open-weight?',
              a: 'Normalmente entre 1 y 7 días para lanzamientos principales de Meta, Google, Mistral y Alibaba. El equipo de Ollama prioriza los lanzamientos de alto perfil -- Llama 3.3 70B apareció en la biblioteca de Ollama 3 días después del lanzamiento open-weight de Meta. Los modelos más pequeños o comunitarios pueden tardar entre 2 y 4 semanas.',
            },
            {
              q: '¿Debería actualizar de Llama 3.3 8B a un modelo más reciente?',
              a: 'Si usas Llama 3.3 8B para tareas generales y estás satisfecho con la calidad, actualizar es opcional. Qwen3 7B puntúa ligeramente más alto en benchmarks y tiene mejor soporte multilingüe y de código. Para la mayoría de usos generales en inglés, la diferencia de calidad práctica es pequeña. Actualiza si tu modelo actual tiene dificultades con tareas específicas.',
            },
            {
              q: '¿Alcanzarán alguna vez los modelos locales la calidad de los modelos frontier en la nube?',
              a: 'La tendencia sugiere que sí -- con un retraso de 18-24 meses. GPT-4 (2023, con aproximadamente 1.7 billones de parámetros estimados) es igualado por Llama 3.3 70B (2025, ejecutable localmente). GPT-5.5 (2024) probablemente tendrá un equivalente ejecutable localmente a finales de 2026 o en 2027. El factor limitante es la eficiencia de cómputo, no la capacidad algorítmica.',
            },
            {
              q: '¿Qué pasó con DeepSeek y por qué fue significativo?',
              a: 'DeepSeek-R1 (enero de 2025) demostró que un laboratorio de IA chino podía producir modelos con capacidades de razonamiento competitivas con OpenAI o1 a menor coste de entrenamiento. El lanzamiento open-weight puso a disposición local por primera vez un modelo de razonamiento de clase frontier. DeepSeek-R1 7B alcanza el 52% en MATH -- casi el doble del 28% de Mistral Small -- específicamente gracias a su metodología de entrenamiento chain-of-thought.',
            },
            {
              q: '¿Qué es Llama 4 y está disponible localmente?',
              a: 'A abril de 2026, Meta lanzó una vista previa de Llama 4 Scout -- un modelo mixture-of-experts que declara hasta 10M de contexto de tokens. El lanzamiento open-weight completo todavía no está disponible para inferencia local. La biblioteca de Ollama aún no incluye variantes de Llama 4. Esta página se actualizará cuando Llama 4 esté disponible para despliegue local.',
            },
            {
              q: '¿Existen modelos locales específicamente para empresas o sectores regulados en 2026?',
              a: 'Mistral AI ofrece contratos de soporte empresarial para los modelos Mistral. Su origen europeo es relevante para el cumplimiento del RGPD (Ley de IA de la UE en vigor desde febrero de 2025). Para sanidad (HIPAA) o finanzas (SOC 2), cualquier modelo desplegado localmente puede cumplir los requisitos de residencia de datos -- el modelo en sí es neutral respecto a los datos. El trabajo de cumplimiento está en la infraestructura de despliegue, no en la selección del modelo.',
            },
            {
              q: '¿Con qué modelo debería empezar un principiante completo en 2026?',
              a: 'Llama 3.2 3B o Gemma 3 4B son las mejores opciones para principiantes. Ambos funcionan con hardware modesto (4-6 GB VRAM), tienen documentación extensa y rinden bien en tareas generales. Llama 3.2 3B tiene más guías comunitarias e integraciones de herramientas. Gemma 3 4B es más reciente, algo más rápido y soporta capacidades de visión. Para usuarios no técnicos, LM Studio hace que ambos sean fáciles de instalar y usar sin línea de comandos.',
            },
            {
              q: '¿Merece la pena actualizar a nuevos modelos si el actual funciona bien?',
              a: 'Solo si alcanzas límites de calidad específicos. Si tu modelo de 7B u 8B satisface tus casos de uso, actualizar es opcional. Sin embargo, si notas errores de razonamiento, soporte multilingüe deficiente o capacidad de código débil, probar un modelo más reciente es recomendable. Qwen3 7B (2025) supera a Llama 3.3 8B en la mayoría de benchmarks, convirtiéndolo en un objetivo de actualización seguro para quienes busquen una mejora incremental.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            'Hugging Face. (2026). "Open LLM Leaderboard." https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard -- Clasificaciones de benchmark en tiempo real para todos los lanzamientos de modelos open-weight.',
            'Google DeepMind. (2026). "Gemma 3 Technical Report." https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf -- Arquitectura, benchmarks y datos de capacidad de visión para todas las variantes de Gemma 3.',
            'Meta AI. (2025). "Llama 3.3 Release." https://ai.meta.com/blog/llama-3-3/ -- Anuncio oficial y especificaciones de Llama 3.3 70B.',
            'DeepSeek AI. (2025). "DeepSeek-R1 Technical Paper." https://arxiv.org/abs/2501.12948 -- Arquitectura chain-of-thought y resultados de benchmark MATH para DeepSeek-R1.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Actualizaciones de modelos LLM locales 2026: Todos los lanzamientos open-weight importantes del año',
        'url': 'https://www.promptquorum.com/es/local-llms/local-llm-model-updates-2026',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'about': [
          { '@type': 'Thing', 'name': 'Gemma 3' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'Open-weight LLM 2026' },
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'LM Studio' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Principales lanzamientos de LLM locales del Q1 2026',
        'url': 'https://www.promptquorum.com/es/local-llms/local-llm-model-updates-2026',
        'numberOfItems': 4,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Gemma 3 (todos los tamaños)',
            'description': 'Lanzado en febrero de 2026 por Google. Visión en todos los tamaños. Contexto 128K. Apache 2.0. ollama run gemma3:9b',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Llama 4 Scout (vista previa)',
            'description': 'Lanzado en marzo de 2026 por Meta. Arquitectura MoE. Contexto de 10M tokens declarado. Aún no disponible en Ollama.',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Mistral Small 3.2',
            'description': 'Lanzado en febrero de 2026 por Mistral AI. Seguimiento de instrucciones mejorado respecto a Small 3.1. ollama run mistral-small3.2',
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Phi-4 Mini',
            'description': 'Lanzado en enero de 2026 por Microsoft. 3.8B parámetros. 70% HumanEval. Contexto 128K. ollama run phi4-mini',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Con qué rapidez aparecen los nuevos modelos en Ollama tras su lanzamiento open-weight?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Normalmente entre 1 y 7 días para lanzamientos principales de Meta, Google, Mistral y Alibaba. Llama 3.3 70B apareció en la biblioteca de Ollama 3 días después del lanzamiento open-weight de Meta. Los modelos más pequeños o comunitarios pueden tardar entre 2 y 4 semanas.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Debería actualizar de Llama 3.3 8B a un modelo más reciente?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Actualizar es opcional si estás satisfecho con la calidad actual. Qwen3 7B puntúa ligeramente más alto en benchmarks con mejor soporte multilingüe y de código. Para la mayoría de usos generales en inglés, la diferencia de calidad práctica es pequeña.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Alcanzarán alguna vez los modelos locales la calidad de los modelos frontier en la nube?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La tendencia sugiere que sí -- con un retraso de 18-24 meses. GPT-4 (2023) es igualado por Llama 3.3 70B (2025, ejecutable localmente). GPT-5.5 (2024) probablemente tendrá un equivalente ejecutable localmente a finales de 2026 o en 2027.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué pasó con DeepSeek y por qué fue significativo?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DeepSeek-R1 (enero de 2025) demostró que un laboratorio de IA chino podía producir modelos con capacidades de razonamiento competitivas con OpenAI o1 a menor coste. La versión open-weight puso a disposición local por primera vez un modelo de razonamiento de clase frontier. DeepSeek-R1 7B alcanza el 52% en MATH frente al 28% de Mistral Small gracias al entrenamiento chain-of-thought.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué es Llama 4 y está disponible localmente?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A abril de 2026, Meta lanzó una vista previa de Llama 4 Scout -- un modelo mixture-of-experts con hasta 10M de contexto de tokens declarado. El lanzamiento open-weight completo aún no está disponible para inferencia local. La biblioteca de Ollama aún no incluye variantes de Llama 4.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Hay modelos locales para empresas o sectores regulados en 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Mistral AI ofrece contratos de soporte empresarial para los modelos Mistral. Su origen europeo es relevante para el cumplimiento del RGPD bajo la Ley de IA de la UE (en vigor desde febrero de 2025). Cualquier modelo desplegado localmente puede cumplir los requisitos de residencia de datos -- el trabajo de cumplimiento está en la infraestructura, no en la selección del modelo.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Con qué modelo debería empezar un principiante en 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Llama 3.2 3B o Gemma 3 4B. Ambos funcionan con hardware modesto (4-6 GB VRAM), tienen documentación extensa y rinden bien en tareas generales. Llama 3.2 3B tiene más guías comunitarias. Gemma 3 4B es más reciente, algo más rápido y soporta visión. Para usuarios no técnicos, LM Studio hace que ambos sean fáciles sin línea de comandos.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Merece la pena actualizar a nuevos modelos si el actual funciona bien?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Solo si alcanzas límites de calidad específicos. Si tu modelo de 7B u 8B satisface tus casos de uso, actualizar es opcional. Actualiza si notas errores de razonamiento, soporte multilingüe deficiente o capacidad de código débil. Qwen3 7B supera a Llama 3.3 8B en la mayoría de benchmarks y es un objetivo de actualización seguro.',
            },
          },
        ],
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'تحديثات نماذج LLM المحلية 2026: جميع الإصدارات مفتوحة الأوزان المهمة في العام',
      seoTitle: 'تحديثات نماذج LLM 2026: Llama وGemma وQwen في Ollama',
      intro: 'اعتباراً من أبريل 2026، تشمل أهم إصدارات نماذج LLM المحلية لهذا العام Meta Llama 3.3 70B (ديسمبر 2025)، وDeepSeek-R1 (يناير 2025)، وعائلتي Qwen3 وQwen3-Coder (سبتمبر 2025)، وMicrosoft Phi-4 (ديسمبر 2024)، وGoogle Gemma 3 (فبراير 2026). يسجّل هذا المقال جميع إصدارات النماذج الرئيسية بمواصفاتها الأساسية وتوافرها في Ollama.',
      metaDescription: 'Gemma 3 وLlama 4 Scout وQwen3 وDeepSeek-R1 — أبرز إصدارات نماذج LLM المفتوحة في 2026 بالمواصفات ونتائج MMLU وتوافرها الفوري في Ollama.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**اعتباراً من أبريل 2026، تشمل أهم إصدارات نماذج LLM المحلية لهذا العام Meta Llama 3.3 70B (ديسمبر 2025)، وDeepSeek-R1 (يناير 2025)، وعائلتي Qwen3 وQwen3-Coder (سبتمبر 2025)، وMicrosoft Phi-4.**',
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي لهم على عتاد استهلاكي',
      readTime: '8 دقائق للقراءة',
      educationalLevel: 'Beginner',
      primaryTerm: 'تحديثات نماذج LLM المحلية 2026',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'إصدارات الربع الأول 2026', anchor: '#q1-2026-releases' },
        { label: 'إصدارات الربع الرابع 2025', anchor: '#q4-2025-releases' },
        { label: 'إصدارات الربع الثالث 2025', anchor: '#q3-2025-releases' },
        { label: 'تحسّن الجودة من 2024 إلى 2026', anchor: '#quality-improvement' },
        { label: 'كيف تبقى محدّثاً', anchor: '#how-to-stay-updated' },
        { label: 'السياق الإقليمي', anchor: '#regional-context' },
        { label: 'أخطاء شائعة', anchor: '#common-mistakes' },
        { label: 'قراءة ذات صلة', anchor: '#related-reading' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**أكبر إصدار في الربع الأول 2026**: Google Gemma 3 (فبراير 2026) -- نسخ 1B و4B و9B و27B، دعم الرؤية في جميع الأحجام، رخصة Apache 2.0.',
            '**أفضل إصدار نموذج استدلال**: DeepSeek-R1 (يناير 2025) -- استدلال بسلسلة تفكير، 52% MATH على نطاق 7B، غيّر مشهد اختبارات 7B.',
            '**أكبر قفزة جودة في 2025**: Llama 3.3 70B (ديسمبر 2025) -- يضاهي GPT-4 (2023) في MMLU، متوفر عبر `ollama run llama3.3:70b`.',
            '**عائلة النماذج الأسرع نمواً في 2025**: Qwen3 -- تفوقت على Mistral Small في تنزيلات Ollama بحلول الربع الرابع 2025.',
            'اعتباراً من أبريل 2026، تقلّصت فجوة الجودة بين النماذج القابلة للتشغيل محلياً والنماذج الرائدة السحابية إلى نحو 18-24 شهراً من القدرة المكافئة.',
          ],
        },
        q12026: {
          title: 'أي نماذج LLM محلية صدرت في الربع الأول 2026؟',
          content: 'اعتباراً من أبريل 2026، إصدارات النماذج مفتوحة الأوزان الملحوظة من يناير إلى أبريل 2026. جميع النماذج أدناه متوفرة بصيغ تكميم مختلفة -- راجع [دليل التكميم](/ar/local-llms/llm-quantization-explained) لمعرفة التفاصيل حول الفروق بين Q4 وQ5:',
          image: '/images/q1-2026-model-releases-timeline-es.svg',
          imageCaption: 'الجدول الزمني لإصدارات نماذج LLM المحلية في الربع الأول 2026: Phi-4 Mini (يناير، 3.8B)، Gemma 3 (فبراير، الرؤية في جميع الأحجام)، Llama 4 Scout (مارس، بنية MoE) وMistral Small 3.2 (أبريل). جميعها أُضيفت إلى Ollama خلال أيام من إعلان فتح الأوزان.',
          rows: [
            { 'النموذج': 'Gemma 3 (جميع الأحجام)', 'الإصدار': 'فبراير 2026', 'المطوّر': 'Google', 'الميزة الرئيسية': 'الرؤية في جميع الأحجام، سياق 128K، Apache 2.0', 'Ollama': 'ollama run gemma3:9b' },
            { 'النموذج': 'Llama 4 Scout (معاينة)', 'الإصدار': 'مارس 2026', 'المطوّر': 'Meta', 'الميزة الرئيسية': 'معاينة بنية MoE، سياق 10M رمز مُعلَن', 'Ollama': 'غير متوفر بعد' },
            { 'النموذج': 'Mistral Small 3.2', 'الإصدار': 'فبراير 2026', 'المطوّر': 'Mistral AI', 'الميزة الرئيسية': 'اتباع تعليمات محسّن مقارنة بـ Small 3.1', 'Ollama': 'ollama run mistral-small3.2' },
            { 'النموذج': 'Phi-4 Mini', 'الإصدار': 'يناير 2026', 'المطوّر': 'Microsoft', 'الميزة الرئيسية': '3.8B، 70% HumanEval، سياق 128K', 'Ollama': 'ollama run phi4-mini' },
          ],
          columns: ['النموذج', 'الإصدار', 'المطوّر', 'الميزة الرئيسية', 'Ollama'],
        },
        q42025: {
          title: 'أي نماذج من الربع الرابع 2025 لا تزال الأهم في 2026؟',
          image: '/images/model-comparison-2026-es.svg',
          imageCaption: 'مقارنة نماذج LLM المحلية في أبريل 2026: يتصدّر Llama 3.3 70B بـ 82% MMLU و42 GB VRAM، يقدّم Qwen3 7B أفضل دعم متعدد اللغات بـ 74% MMLU و5 GB VRAM، يضيف Gemma 3 9B قدرات الرؤية، يتخصص DeepSeek-R1 7B في مهام الاستدلال بـ 52% MATH. جميعها قابلة للتشغيل عبر Ollama.',
          rows: [
            { 'النموذج': 'Llama 3.3 70B', 'الإصدار': 'ديسمبر 2025', 'المواصفات الرئيسية': '82% MMLU، 88% HumanEval، سياق 128K', 'لا يزال وثيق الصلة': 'نعم -- أفضل خيار 70B' },
            { 'النموذج': 'Phi-4 14B', 'الإصدار': 'ديسمبر 2024', 'المواصفات الرئيسية': '84% MMLU -- فوق فئة حجمه', 'لا يزال وثيق الصلة': 'نعم -- نموذج استدلال 14B متين' },
            { 'النموذج': 'عائلة Qwen3 الكاملة', 'الإصدار': 'سبتمبر 2025', 'المواصفات الرئيسية': 'نطاق من 0.5B إلى 72B، 29 لغة، Apache 2.0', 'لا يزال وثيق الصلة': 'نعم -- حالياً أفضل عائلة متعددة اللغات' },
            { 'النموذج': 'DeepSeek-R1', 'الإصدار': 'يناير 2025', 'المواصفات الرئيسية': 'نموذج استدلال، 52% MATH عند 7B، MoE واسع النطاق', 'لا يزال وثيق الصلة': 'نعم -- أفضل استدلال محلي' },
          ],
          columns: ['النموذج', 'الإصدار', 'المواصفات الرئيسية', 'لا يزال وثيق الصلة'],
        },
        q32025: {
          title: 'أي نماذج من الربع الثالث 2025 لا تزال مستخدمة على نطاق واسع؟',
          content: [
            '**عدة إصدارات من 2025 لا تزال منتشرة على نطاق واسع في 2026 بسبب توافق الأدوات وتوثيق المجتمع:**',
          ],
          items: [
            '**Llama 3.3 8B** (يوليو 2025) -- لا يزال نموذج 8B الأفضل توثيقاً، مفضّل لدى المبتدئين لأدلته الواسعة وتكاملات الأدوات.',
            '**Mistral Small v0.3** (مايو 2025) -- نتائج اختبار أدنى من البدائل الحالية، لكن رخصة Apache 2.0 والمنشأ الأوروبي لـ Mistral تجعله مفضّلاً في بعض عمليات النشر الأوروبية.',
            '**Llama 3.2 3B و1B** (سبتمبر 2025) -- لا تزال التوصية القياسية للتثبيت الأول بسبب حجمها الصغير وتوثيقها الواسع.',
          ],
        },
        whatChanged: {
          id: 'quality-improvement',
          title: 'كم تحسّنت جودة نماذج LLM المحلية من 2024 إلى 2026؟',
          content: [
            '**تحسّن السنتين في جودة النماذج القابلة للتشغيل محلياً كبير.** اعتباراً من أبريل 2026، يضاهي نموذج 7B (Qwen3 7B، 74% MMLU) أداء اختبار نموذج 13B من أوائل 2024. ويضاهي نموذج 70B (Llama 3.3 70B، 82% MMLU) أداء GPT-4 (2023) -- نموذج كان يتطلب قبل 3 سنوات بنية تحتية لخوادم بمليارات الدولارات يعمل الآن على Mac Studio. لتوصيات العتاد حسب كل فئة نموذج، راجع [دليل عتاد LLM المحلي 2026](/ar/local-llms/local-llm-hardware-guide-2026).',
          ],
          image: '/images/llm-quality-improvement-2024-2026-es.svg',
          imageCaption: 'تحسّن جودة نماذج LLM المحلية 2024-2026: تحسّنت نماذج فئة 7B من 64% MMLU (Mistral Small، أوائل 2024) إلى 74% (Qwen3 7B، أبريل 2026). تحسّنت فئة 70B من 75% (Llama 3.3 70B) إلى 82-84% (Llama 3.3 70B وQwen3 72B). كل 18-24 شهراً، تتقدم جودة النماذج المحلية جيلاً.',
          rows: [
            { 'السنة': 'أوائل 2024', 'أفضل 7B MMLU': '~64% (Mistral Small)', 'أفضل 70B محلي MMLU': '~75% (Llama 3.3 70B)', 'العتاد المطلوب': '7B: 8 GB RAM؛ 70B: 48 GB RAM' },
            { 'السنة': 'أواخر 2025', 'أفضل 7B MMLU': '~74% (Qwen3 7B)', 'أفضل 70B محلي MMLU': '~82% (Llama 3.3 70B)', 'العتاد المطلوب': '7B: 5 GB RAM؛ 70B: 40 GB RAM' },
            { 'السنة': 'أبريل 2026', 'أفضل 7B MMLU': '~74% (Qwen3 7B)', 'أفضل 70B محلي MMLU': '~84% (Qwen3 72B)', 'العتاد المطلوب': '7B: 4.7 GB RAM؛ 70B: 43 GB RAM' },
          ],
          columns: ['السنة', 'أفضل 7B MMLU', 'أفضل 70B محلي MMLU', 'العتاد المطلوب'],
        },
        stayUpdated: {
          title: 'كيف تبقى محدّثاً بشأن إصدارات نماذج LLM المحلية الجديدة؟',
          items: [
            '**مدونة Ollama** (ollama.com/blog) -- تعلن عن النماذج الجديدة المضافة إلى مكتبة Ollama، عادةً خلال أيام من إصدارات فتح الأوزان.',
            '**Hugging Face Open LLM Leaderboard** (huggingface.co/spaces/open-llm-leaderboard) -- يتتبع نتائج اختبارات جميع النماذج الصادرة حديثاً.',
            '**r/LocalLLaMA** (reddit.com/r/LocalLLaMA) -- المجتمع الأكثر نشاطاً لأخبار الذكاء الاصطناعي المحلي والاختبارات ونقاشات العتاد.',
            '**GitHub Releases**: تابع مستودعي llama.cpp (github.com/ggerganov/llama.cpp) وOllama (github.com/ollama/ollama) لتتبع تحديثات المحرك التي تتيح نماذج جديدة.',
            '**PromptQuorum**: يُحدَّث هذا الدليل عندما تغيّر إصدارات النماذج الرئيسية التوصيات. راجع حقل dateModified لرؤية آخر تحديث.',
          ],
        },
        regionalContext: {
          title: 'تحديثات نماذج LLM المحلية 2026: السياق الإقليمي',
          content: [
            '**الاتحاد الأوروبي / GDPR + قانون الذكاء الاصطناعي:** أدخل قانون الذكاء الاصطناعي للاتحاد الأوروبي (الساري منذ فبراير 2025) متطلبات توثيق لأنظمة الذكاء الاصطناعي في السياقات المنظمة. مع صدور نماذج محلية جديدة في 2026، يجب على مؤسسات الاتحاد الأوروبي مراعاة: Mistral AI (فرنسا) لا تزال المطوّر الرئيسي الوحيد لنماذج مفتوحة الأوزان ومقره الاتحاد الأوروبي. يحافظ Mistral Small 3.2 (فبراير 2026) وMistral Small على رخص Apache 2.0 -- خيار الامتثال الأنظف للقطاعات المنظمة. يوصي كل من BSI الألماني وCNIL الفرنسي بالاستدلال المحلي لتطبيقات الذكاء الاصطناعي عالية الخطورة. للنماذج غير الأوروبية (Llama، Qwen، Gemma، DeepSeek): جميعها قابلة للاستخدام بموجب GDPR للاستدلال المحلي إذ لا تغادر أي بيانات المؤسسة. الفرق في الامتثال يكمن في توثيق المزوّد، وليس في معالجة البيانات. عند الترقية إلى نموذج جديد، حدّث توثيق أداة الذكاء الاصطناعي بإصدار النموذج الجديد ومستوى التكميم واسم ملف GGUF.',
            '**اليابان (METI):** تتطلب إرشادات حوكمة الذكاء الاصطناعي من METI توثيق تغييرات إصدار النموذج في أنظمة الذكاء الاصطناعي في الإنتاج. عند الترقية من Llama 3.3 8B إلى نموذج أحدث، وثّق: وسم النموذج السابق، وسم النموذج الجديد، تاريخ الترقية، وسبب التغيير. يوفّر أمر `ollama show <model>` سلسلة الإصدار الدقيقة لسجلات الامتثال. لعمليات النشر باليابانية، Qwen3 لا يزال العائلة الموصى بها في 2026 لمُرمِّزه CJK الأصلي.',
            '**الصين:** بموجب التدابير المؤقتة للذكاء الاصطناعي التوليدي من CAC الصيني (2023)، يجب على المؤسسات التي تقدّم خدمات ذكاء اصطناعي للجمهور تسجيل النماذج لدى الجهات التنظيمية. تقع عمليات النشر المحلية للاستخدام الداخلي خارج هذا النطاق. لعمليات النشر بالصينية، Qwen3 (Alibaba، Apache 2.0) وDeepSeek-R1 (DeepSeek، MIT) هما الخياران الرئيسيان. تلقى Qwen3 تحديثات مهمة لعائلة النماذج في الربع الثالث 2025 -- ينبغي للمؤسسات التي لا تزال تستخدم Qwen2 الترقية إلى Qwen3 لتحسين الأداء ودعم 29 لغة الموسّع.',
          ],
        },
        commonMistakes: {
          title: 'أخطاء شائعة عند تتبّع وتحديث نماذج LLM المحلية',
          items: [
            '**الترقية إلى كل إصدار جديد دون حاجة:** تحدث إصدارات النماذج الجديدة شهرياً. إذا كان نموذجك الحالي يلبّي حالة استخدامك، فالترقية اختيارية. قيّم نموذجاً جديداً فقط عندما تصل إلى حدود جودة محددة: استدلال ضعيف في المهام المعقدة، أو مخرجات متعددة اللغات ضعيفة، أو إخفاقات في الكود. تنزيل نموذج بحجم 4-40 GB مقابل مكاسب اختبار هامشية هو إهدار للوقت ومساحة القرص.',
            '**استخدام المعرّف الخاطئ عند البحث عن النماذج في Ollama بعد إصدار:** تختلف أسماء النماذج في Hugging Face عن وسوم Ollama. Meta Llama 3.3 هو `llama3.3` في Ollama، وليس `llama-3.3` ولا `meta-llama-3.3`. تحقق دائماً من وسم Ollama الدقيق في ollama.com/library قبل استخدامه في السكربتات.',
            '**عدم تحديث Ollama قبل تنزيل نماذج جديدة:** يتطلب دعم النماذج الجديدة غالباً نسخة محدّثة من Ollama. قبل تنزيل نموذج صادر حديثاً، حدّث Ollama: يتحدّث macOS تلقائياً؛ Linux: أعد تشغيل `curl -fsSL https://ollama.com/install.sh | sh`؛ Windows: نزّل أحدث مثبّت. تشغيل نسخة قديمة من Ollama قد يجعل نموذجاً جديداً يفشل بصمت.',
            '**افتراض أن الأحدث = أفضل لمهمتك المحددة:** يحقق Gemma 3 9B (فبراير 2026) نتيجة أعلى من Llama 3.3 8B (يوليو 2025) في معظم الاختبارات، لكن Llama 3.3 8B يملك أكثر من 18 شهراً من النماذج المضبوطة المجتمعية وموجّهات النظام وحالات الاستخدام الموثّقة. لسير العمل الراسخ بموارد مجتمعية، قد يكون النموذج الأقدم الخيار العملي الأفضل.',
          ],
        },
        relatedReading: {
          id: 'related',
          title: 'قراءة ذات صلة',
          items: [
            '[أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026) -- تصنيفات حالية لأفضل 5 نماذج حسب المهمة والعتاد والجودة، تشمل جميع إصدارات 2026.',
            '[شرح تكميم LLM](/ar/local-llms/llm-quantization-explained) -- افهم Q4_K_M مقابل Q5_K_M عند تنزيل إصدارات نماذج جديدة.',
            '[Qwen مقابل Llama مقابل Mistral](/ar/local-llms/qwen-vs-llama-vs-mistral) -- مقارنة اختبارات كاملة لعائلات النماذج الرئيسية الثلاث بأحدث بيانات 2026.',
            '[دليل عتاد LLM المحلي 2026](/ar/local-llms/local-llm-hardware-guide-2026) -- تحقق مما إذا كان عتادك يدعم أحدث إصدارات النماذج قبل تنزيلها.',
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- حدّث Ollama ونزّل أحدث النماذج بوسوم الإصدار الصحيحة.',
            '[أفضل النماذج مفتوحة المصدر في Ollama](/ar/local-llms/top-open-source-models-ollama) -- مكتبة كاملة بالنماذج المتاحة مع أوامر التنزيل وبيانات الأداء.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'الأسئلة الشائعة حول تحديثات نماذج LLM المحلية في 2026',
          faqs: [
            {
              q: 'ما مدى سرعة ظهور النماذج الجديدة في Ollama بعد إصدار فتح أوزانها؟',
              a: 'عادةً بين 1 و7 أيام للإصدارات الرئيسية من Meta وGoogle وMistral وAlibaba. يعطي فريق Ollama الأولوية للإصدارات البارزة -- ظهر Llama 3.3 70B في مكتبة Ollama بعد 3 أيام من إصدار Meta لفتح الأوزان. النماذج الأصغر أو المجتمعية قد تستغرق بين أسبوعين و4 أسابيع.',
            },
            {
              q: 'هل يجب أن أرقّي من Llama 3.3 8B إلى نموذج أحدث؟',
              a: 'إذا كنت تستخدم Llama 3.3 8B للمهام العامة وأنت راضٍ عن الجودة، فالترقية اختيارية. يحقق Qwen3 7B نتيجة أعلى قليلاً في الاختبارات ويملك دعماً أفضل متعدد اللغات وللكود. لمعظم الاستخدامات العامة بالإنجليزية، فرق الجودة العملي صغير. رقِّ إذا كان نموذجك الحالي يواجه صعوبة مع مهام محددة.',
            },
            {
              q: 'هل ستصل النماذج المحلية يوماً إلى جودة النماذج الرائدة السحابية؟',
              a: 'يشير الاتجاه إلى نعم -- بتأخير 18-24 شهراً. يضاهي Llama 3.3 70B (2025، قابل للتشغيل محلياً) نموذج GPT-4 (2023، بنحو 1.7 تريليون معامل مقدّر). من المرجّح أن يكون لـ GPT-5.5 (2024) مكافئ قابل للتشغيل محلياً في أواخر 2026 أو 2027. العامل المحدّد هو كفاءة الحوسبة، وليس القدرة الخوارزمية.',
            },
            {
              q: 'ماذا حدث مع DeepSeek ولماذا كان مهماً؟',
              a: 'أثبت DeepSeek-R1 (يناير 2025) أن مختبر ذكاء اصطناعي صينياً يمكنه إنتاج نماذج بقدرات استدلال تنافس OpenAI o1 بتكلفة تدريب أقل. أتاح إصدار فتح الأوزان لأول مرة نموذج استدلال من الفئة الرائدة محلياً. يحقق DeepSeek-R1 7B 52% في MATH -- نحو ضعف 28% لـ Mistral Small -- تحديداً بفضل منهجية تدريبه بسلسلة التفكير.',
            },
            {
              q: 'ما هو Llama 4 وهل هو متاح محلياً؟',
              a: 'اعتباراً من أبريل 2026، أصدرت Meta معاينة لـ Llama 4 Scout -- نموذج خليط من الخبراء يعلن عن سياق يصل إلى 10M رمز. لم يتوفر بعد إصدار فتح الأوزان الكامل للاستدلال المحلي. لا تتضمن مكتبة Ollama نسخ Llama 4 بعد. ستُحدَّث هذه الصفحة عندما يصبح Llama 4 متاحاً للنشر المحلي.',
            },
            {
              q: 'هل توجد نماذج محلية مخصصة للمؤسسات أو القطاعات المنظمة في 2026؟',
              a: 'تقدّم Mistral AI عقود دعم مؤسسي لنماذج Mistral. منشأها الأوروبي وثيق الصلة بالامتثال لـ GDPR (قانون الذكاء الاصطناعي للاتحاد الأوروبي الساري منذ فبراير 2025). للرعاية الصحية (HIPAA) أو المالية (SOC 2)، يمكن لأي نموذج منشور محلياً تلبية متطلبات إقامة البيانات -- النموذج نفسه محايد تجاه البيانات. يكمن عمل الامتثال في بنية النشر التحتية، وليس في اختيار النموذج.',
            },
            {
              q: 'بأي نموذج يجب أن يبدأ مبتدئ تماماً في 2026؟',
              a: 'Llama 3.2 3B أو Gemma 3 4B هما أفضل خياري المبتدئين. كلاهما يعمل بعتاد متواضع (4-6 GB VRAM)، ويملكان توثيقاً واسعاً، ويؤديان جيداً في المهام العامة. يملك Llama 3.2 3B أدلة مجتمعية وتكاملات أدوات أكثر. Gemma 3 4B أحدث وأسرع قليلاً ويدعم قدرات الرؤية. للمستخدمين غير التقنيين، يجعل LM Studio كليهما سهل التثبيت والاستخدام دون سطر أوامر.',
            },
            {
              q: 'هل تستحق الترقية إلى نماذج جديدة إذا كان الحالي يعمل جيداً؟',
              a: 'فقط إذا وصلت إلى حدود جودة محددة. إذا كان نموذجك 7B أو 8B يلبّي حالات استخدامك، فالترقية اختيارية. مع ذلك، إذا لاحظت أخطاء استدلال أو دعماً ضعيفاً متعدد اللغات أو قدرة كود ضعيفة، فتجربة نموذج أحدث موصى بها. يتفوق Qwen3 7B (2025) على Llama 3.3 8B في معظم الاختبارات، مما يجعله هدف ترقية آمناً لمن يبحث عن تحسن تدريجي.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            'Hugging Face. (2026). "Open LLM Leaderboard." https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard -- تصنيفات اختبار فورية لجميع إصدارات النماذج مفتوحة الأوزان.',
            'Google DeepMind. (2026). "Gemma 3 Technical Report." https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf -- البنية والاختبارات وبيانات قدرة الرؤية لجميع نسخ Gemma 3.',
            'Meta AI. (2025). "Llama 3.3 Release." https://ai.meta.com/blog/llama-3-3/ -- الإعلان الرسمي ومواصفات Llama 3.3 70B.',
            'DeepSeek AI. (2025). "DeepSeek-R1 Technical Paper." https://arxiv.org/abs/2501.12948 -- بنية سلسلة التفكير ونتائج اختبار MATH لـ DeepSeek-R1.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'تحديثات نماذج LLM المحلية 2026: جميع الإصدارات مفتوحة الأوزان المهمة في العام',
        'url': 'https://www.promptquorum.com/ar/local-llms/local-llm-model-updates-2026',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'about': [
          { '@type': 'Thing', 'name': 'Gemma 3' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'نماذج LLM مفتوحة الأوزان 2026' },
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'LM Studio' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'أبرز إصدارات نماذج LLM المحلية في الربع الأول 2026',
        'url': 'https://www.promptquorum.com/ar/local-llms/local-llm-model-updates-2026',
        'numberOfItems': 4,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Gemma 3 (جميع الأحجام)',
            'description': 'صدر في فبراير 2026 من Google. الرؤية في جميع الأحجام. سياق 128K. Apache 2.0. ollama run gemma3:9b',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Llama 4 Scout (معاينة)',
            'description': 'صدر في مارس 2026 من Meta. بنية MoE. سياق 10M رمز مُعلَن. غير متوفر بعد في Ollama.',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Mistral Small 3.2',
            'description': 'صدر في فبراير 2026 من Mistral AI. اتباع تعليمات محسّن مقارنة بـ Small 3.1. ollama run mistral-small3.2',
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Phi-4 Mini',
            'description': 'صدر في يناير 2026 من Microsoft. 3.8B معامل. 70% HumanEval. سياق 128K. ollama run phi4-mini',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'ما مدى سرعة ظهور النماذج الجديدة في Ollama بعد إصدار فتح أوزانها؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'عادةً بين 1 و7 أيام للإصدارات الرئيسية من Meta وGoogle وMistral وAlibaba. ظهر Llama 3.3 70B في مكتبة Ollama بعد 3 أيام من إصدار Meta لفتح الأوزان. النماذج الأصغر أو المجتمعية قد تستغرق بين أسبوعين و4 أسابيع.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يجب أن أرقّي من Llama 3.3 8B إلى نموذج أحدث؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'الترقية اختيارية إذا كنت راضياً عن الجودة الحالية. يحقق Qwen3 7B نتيجة أعلى قليلاً في الاختبارات بدعم أفضل متعدد اللغات وللكود. لمعظم الاستخدامات العامة بالإنجليزية، فرق الجودة العملي صغير.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل ستصل النماذج المحلية يوماً إلى جودة النماذج الرائدة السحابية؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يشير الاتجاه إلى نعم -- بتأخير 18-24 شهراً. يضاهي Llama 3.3 70B (2025، قابل للتشغيل محلياً) نموذج GPT-4 (2023). من المرجّح أن يكون لـ GPT-5.5 (2024) مكافئ قابل للتشغيل محلياً في أواخر 2026 أو 2027.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ماذا حدث مع DeepSeek ولماذا كان مهماً؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'أثبت DeepSeek-R1 (يناير 2025) أن مختبر ذكاء اصطناعي صينياً يمكنه إنتاج نماذج بقدرات استدلال تنافس OpenAI o1 بتكلفة أقل. أتاحت نسخة فتح الأوزان لأول مرة نموذج استدلال من الفئة الرائدة محلياً. يحقق DeepSeek-R1 7B 52% في MATH مقابل 28% لـ Mistral Small بفضل التدريب بسلسلة التفكير.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما هو Llama 4 وهل هو متاح محلياً؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'اعتباراً من أبريل 2026، أصدرت Meta معاينة لـ Llama 4 Scout -- نموذج خليط من الخبراء بسياق يصل إلى 10M رمز مُعلَن. لم يتوفر بعد إصدار فتح الأوزان الكامل للاستدلال المحلي. لا تتضمن مكتبة Ollama نسخ Llama 4 بعد.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل توجد نماذج محلية للمؤسسات أو القطاعات المنظمة في 2026؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'تقدّم Mistral AI عقود دعم مؤسسي لنماذج Mistral. منشأها الأوروبي وثيق الصلة بالامتثال لـ GDPR بموجب قانون الذكاء الاصطناعي للاتحاد الأوروبي (الساري منذ فبراير 2025). يمكن لأي نموذج منشور محلياً تلبية متطلبات إقامة البيانات -- يكمن عمل الامتثال في البنية التحتية، وليس في اختيار النموذج.',
            },
          },
          {
            '@type': 'Question',
            'name': 'بأي نموذج يجب أن يبدأ مبتدئ في 2026؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Llama 3.2 3B أو Gemma 3 4B. كلاهما يعمل بعتاد متواضع (4-6 GB VRAM)، ويملكان توثيقاً واسعاً، ويؤديان جيداً في المهام العامة. يملك Llama 3.2 3B أدلة مجتمعية أكثر. Gemma 3 4B أحدث وأسرع قليلاً ويدعم الرؤية. للمستخدمين غير التقنيين، يجعل LM Studio كليهما سهلاً دون سطر أوامر.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل تستحق الترقية إلى نماذج جديدة إذا كان الحالي يعمل جيداً؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'فقط إذا وصلت إلى حدود جودة محددة. إذا كان نموذجك 7B أو 8B يلبّي حالات استخدامك، فالترقية اختيارية. رقِّ إذا لاحظت أخطاء استدلال أو دعماً ضعيفاً متعدد اللغات أو قدرة كود ضعيفة. يتفوق Qwen3 7B على Llama 3.3 8B في معظم الاختبارات وهو هدف ترقية آمن.',
            },
          },
        ],
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Atualizações de modelos LLM locais 2026: Todos os grandes lançamentos open-weight do ano',
      seoTitle: 'LLMs locais 2026: lançamentos e status no Ollama',
      intro: 'A partir de abril de 2026, os maiores lançamentos de LLM local do ano são: Meta Llama 3.3 70B (dezembro de 2025), DeepSeek-R1 (janeiro de 2025), famílias Qwen3 e Qwen3-Coder (setembro de 2025), Microsoft Phi-4 (dezembro de 2024) e Google Gemma 3 (fevereiro de 2026). Este artigo rastreia todos os grandes lançamentos de modelos com suas especificações principais e disponibilidade no Ollama.',
      metaDescription: 'Atualizações de LLM local 2026: Gemma 3 (fev), Llama 4 Scout (mar) e 4 lançamentos do T1 com especificações, benchmarks MMLU e status no Ollama. Abril 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**A partir de abril de 2026, os maiores lançamentos de LLM local são: Meta Llama 3.3 70B, DeepSeek-R1, famílias Qwen3/Qwen3-Coder, Microsoft Phi-4 e Google Gemma 3. Todos disponíveis via Ollama e LM Studio.**',
      audience: 'Desenvolvedores que acompanham lançamentos de modelos open-weight e disponibilidade no Ollama',
      readTime: '8 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'atualizações de modelos LLM locais',
      toc: [
        { label: 'Pontos principais', anchor: '#tldr' },
        { label: 'Lançamentos do T1 2026', anchor: '#q1-releases' },
        { label: 'Modelos recomendados por tarefa', anchor: '#recommended' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Atualizações de modelos LLM locais 2026: Todos os grandes lançamentos open-weight do ano',
        'description': 'Rastreamento de atualizações de LLM local 2026: Gemma 3, Llama 4 Scout e lançamentos do T1 com especificações, benchmarks MMLU e status no Ollama. Abril 2026.',
        'url': 'https://www.promptquorum.com/pt/local-llms/local-llm-model-updates-2026',
        'inLanguage': 'pt-BR',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            'Llama 3.3 70B (dez 2025): disponível via `ollama pull llama3.3:70b`. Melhor modelo open-weight de propósito geral.',
            'Qwen3 32B (set 2025): excelente para código e multilíngue. `ollama pull qwen3:32b`.',
            'DeepSeek-R1 (jan 2025): raciocínio passo a passo. `ollama pull deepseek-r1:14b`.',
            'Gemma 3 (fev 2026): eficiente, bom para hardware com 8 GB de VRAM.',
            'Phi-4 Mini (dez 2024): leve, excelente desempenho em hardware de baixo custo.',
          ],
        },
      },
    },
    ja: {
      theme: 'ベストモデル',
      title: 'ローカルLLMモデルアップデート2026年：すべての大型オープンウェイトリリース',
      seoTitle: 'ローカルLLM 2026年：すべての主要モデルリリース + Ollama対応',
      intro: '2026年4月の現在、今年最大のローカルLLMリリースは以下の通りです：Meta Llama 3.3 70B（2025年12月）、DeepSeek-R1（2025年1月）、Qwen3 と Qwen3-Coder ファミリー（2025年9月）、Microsoft Phi-4（2024年12月）、Google Gemma 3（2026年2月）。この記事では、すべての大型モデルリリースを主要仕様と Ollama の可用性とともに追跡します。',
      metaDescription: 'ローカルLLMモデル更新2026：Gemma 3、Llama 4 Scout、Q1発布4件追跡、規格・MMUベンチマーク・Ollama対応。2026年4月。',
      publishDate: '2026-04-04',
      readTime: '8分で読める',
      educationalLevel: 'Beginner',
      primaryTerm: 'ローカルLLMアップデート2026',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: '2026年Q1リリース', anchor: '#q1-2026-releases' },
        { label: '2025年Q4リリース', anchor: '#q4-2025-releases' },
        { label: '2025年Q3リリース', anchor: '#q3-2025-releases' },
        { label: '品質改善 2024～2026', anchor: '#quality-improvement' },
        { label: 'アップデート情報の入手方法', anchor: '#how-to-stay-updated' },
        { label: 'リージョナルコンテキスト', anchor: '#regional-context' },
        { label: 'よくある間違い', anchor: '#common-mistakes' },
        { label: '関連資料', anchor: '#related-reading' },
        { label: 'よくある質問', anchor: '#faq' },
        { label: 'ソース', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          title: '重要ポイント',
          items: [
            '**Q1 2026 最大リリース**：Google Gemma 3（2026年2月）-- 1B、4B、9B、27B バリアント、全サイズでビジョン対応、Apache 2.0 ライセンス。',
            '**最高の推論モデルリリース**：DeepSeek-R1（2025年1月）-- チェーンオブソート推論、7B スケールで52% MATH、7Bベンチマークランドスケープをディスラプト。',
            '**2025年最大の品質向上**：Llama 3.3 70B（2025年12月）-- MMLU で GPT-4（2023）に相当、`ollama run llama3.3:70b` で利用可能。',
            '**2025年最速成長モデルファミリー**：Qwen3 -- Q4 2025 までに Ollama ダウンロードで Mistral Small を上回った。',
            '2026年4月現在、ローカル実行可能モデルとフロンティアクラウドモデルの品質ギャップは、約18～24か月相当の能力に縮小。',
          ],
        },
        q12026: {
          title: 'Q1 2026 でリリースされたローカルLLMモデルは？',
          content: '2026年4月現在、2026年1月～4月の主要なオープンウェイトモデルリリース。以下のモデルはすべてさまざまな量子化フォーマットで利用可能です -- [量子化ガイド](/ja/local-llms/llm-quantization-explained) で Q4 vs Q5 のトレードオフについて詳細をご覧ください：',
          image: '/images/q1-2026-model-releases-timeline-ja.svg',
          imageCaption: 'Q1 2026 ローカルLLMリリースタイムライン：Phi-4 Mini（1月、3.8B）、Gemma 3（2月、全サイズでビジョン対応）、Llama 4 Scout（3月、MoEアーキテクチャ）、Mistral Small 3.2（4月）。すべてオープンウェイト発表から数日以内に Ollama に追加。',
          rows: [
            { 'モデル': 'Gemma 3（全サイズ）', 'リリース': '2026年2月', '開発': 'Google', '主要機能': '全サイズでビジョン、128K コンテキスト、Apache 2.0', 'Ollama': 'ollama run gemma3:9b' },
            { 'モデル': 'Llama 4 Scout（プレビュー）', 'リリース': '2026年3月', '開発': 'Meta', '主要機能': 'MoE アーキテクチャプレビュー、1000万トークンコンテキスト主張', 'Ollama': 'まだ利用不可' },
            { 'モデル': 'Mistral Small 3.2', 'リリース': '2026年2月', '開発': 'Mistral AI', '主要機能': 'Small 3.1 より指令追従性が改善', 'Ollama': 'ollama run mistral-small3.2' },
            { 'モデル': 'Phi-4 Mini', 'リリース': '2026年1月', '開発': 'Microsoft', '主要機能': '3.8B、70% HumanEval、128K コンテキスト', 'Ollama': 'ollama run phi4-mini' },
          ],
          columns: ['モデル', 'リリース', '開発', '主要機能', 'Ollama'],
        },
        q42025: {
          title: 'Q4 2025 モデルの中で 2026 年も最も重要なものは？',
          image: '/images/model-comparison-2026-ja.svg',
          imageCaption: '2026年4月ローカルLLMモデル比較：Llama 3.3 70B がトップ（MMLU 82%、VRAM 42GB）、Qwen3 7B が多言語対応で最良（MMLU 74%、VRAM 5GB）、Gemma 3 9B でビジョン機能追加、DeepSeek-R1 7B が推論タスク特化（MATH 52%）。すべて Ollama で実行可能。',
          rows: [
            { 'モデル': 'Llama 3.3 70B', 'リリース': '2025年12月', '主要仕様': '82% MMLU、88% HumanEval、128K コンテキスト', 'まだ関連': 'はい -- 最高の70Bオプション' },
            { 'モデル': 'Phi-4 14B', 'リリース': '2024年12月', '主要仕様': '84% MMLU -- そのサイズクラスを上回る', 'まだ関連': 'はい -- 強力な14B推論モデル' },
            { 'モデル': 'Qwen3 全ファミリー', 'リリース': '2025年9月', '主要仕様': '0.5B～72B範囲、29言語、Apache 2.0', 'まだ関連': 'はい -- 現在最高の多言語ファミリー' },
            { 'モデル': 'DeepSeek-R1', 'リリース': '2025年1月', '主要仕様': '推論モデル、7B で 52% MATH、大規模で MoE', 'まだ関連': 'はい -- ローカルで最高の推論' },
          ],
          columns: ['モデル', 'リリース', '主要仕様', 'まだ関連'],
        },
        q32025: {
          title: 'Q3 2025 モデルの中で今もまだ広く使われているものは？',
          content: [
            '**複数の2025年リリースがツール互換性とコミュニティドキュメンテーションにより2026年も広く展開されています：**',
          ],
          items: [
            '**Llama 3.3 8B**（2025年7月）-- 依然として最も充実した8Bモデル、初心者向けガイドとツール統合が豊富。',
            '**Mistral Small v0.3**（2025年5月）-- 現在の代替案よりベンチマークスコアが低い、しかし Apache 2.0 ライセンスと Mistral EU 由来により一部のヨーロッパ展開で優先。',
            '**Llama 3.2 3B と 1B**（2025年9月）-- サイズが小さく広範なドキュメンテーション available により依然として最初のインストール推奨。',
          ],
        },
        whatChanged: {
          id: 'quality-improvement',
          title: '2024年から2026年にかけてローカルLLMの品質はどのくらい改善されました？',
          content: [
            '**ローカル実行可能モデル品質の2年間の改善は大幅です。** 2026年4月現在、7Bモデル（Qwen3 7B、74% MMLU）は2024年初頭の13Bモデルのベンチマーク性能に相当します。70Bモデル（Llama 3.3 70B、82% MMLU）は GPT-4（2023）の性能に相当します -- 3年前に数十億ドルのサーバーインフラストラクチャが必要だったモデルが現在 Mac Studio で実行されます。各モデルクラスに対応するハードウェア推奨については、[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) を参照してください。',
          ],
          image: '/images/llm-quality-improvement-2024-2026-ja.svg',
          imageCaption: 'ローカルLLM品質の改善2024～2026：7Bクラスモデルは64%（Mistral Small、2024初）から74%（Qwen3 7B、2026年4月）に改善。70Bクラスは75%（Llama 3.3 70B）から82～84%（Llama 3.3 70B と Qwen3 72B）に改善。18～24か月ごとにローカルモデル品質は1世代進化。',
          rows: [
            { '年': '2024年初', '最高の7B MMLU': '~64%（Mistral Small）', '最高のローカル70B MMLU': '~75%（Llama 3.3 70B）', 'ハードウェア要件': '7B: 8 GB RAM；70B: 48 GB RAM' },
            { '年': '2025年後期', '最高の7B MMLU': '~74%（Qwen3 7B）', '最高のローカル70B MMLU': '~82%（Llama 3.3 70B）', 'ハードウェア要件': '7B: 5 GB RAM；70B: 40 GB RAM' },
            { '年': '2026年4月', '最高の7B MMLU': '~74%（Qwen3 7B）', '最高のローカル70B MMLU': '~84%（Qwen3 72B）', 'ハードウェア要件': '7B: 4.7 GB RAM；70B: 43 GB RAM' },
          ],
          columns: ['年', '最高の7B MMLU', '最高のローカル70B MMLU', 'ハードウェア要件'],
        },
        stayUpdated: {
          title: 'ローカルLLMの新しいリリースについてどのように情報を得ていますか？',
          items: [
            '**Ollama ブログ**（ollama.com/blog）-- Ollama ライブラリに追加された新しいモデルを発表、通常はオープンウェイトリリースから数日以内。',
            '**Hugging Face Open LLM Leaderboard**（huggingface.co/spaces/open-llm-leaderboard）-- すべての新しくリリースされたモデルのベンチマークスコアを追跡。',
            '**r/LocalLLaMA**（reddit.com/r/LocalLLaMA）-- ローカルAIニュース、ベンチマーク、ハードウェアディスカッションの最も活発なコミュニティ。',
            '**GitHub Releases**：llama.cpp（github.com/ggerganov/llama.cpp）と Ollama（github.com/ollama/ollama）のリポジトリをフォローして、新しいモデルを有効にするエンジンアップデートを追跡します。',
            '**PromptQuorum**：このガイドは大型モデルリリースが推奨を変更するときに更新されます。最新の更新については dateModified フィールドを確認してください。',
          ],
        },
        regionalContext: {
          title: 'ローカルLLMモデルアップデート2026：リージョナルコンテキスト',
          content: [
            '**日本（METI）**：METI AI ガバナンスガイドラインでは、本番AI システムでのモデルバージョン変更の文書化が必要です。Llama 3.3 8B から新しいモデルにアップグレードする場合、以下を文書化します：前のモデルタグ、新しいモデルタグ、アップグレード日、変更理由。`ollama show <model>` コマンドはコンプライアンス記録用の正確なバージョン文字列を提供します。日本語展開の場合、Qwen3 はネイティブ CJK トークナイザーのため 2026 年も推奨ファミリーのままです。',
            '**東アジア・APAC（マルチリージョン準拠）**：マレーシア、タイ、ベトナムなどの東南アジア諸国では、データ残存地要件は厳しくなりつつあります。Qwen3 は ASEAN 地域でネイティブ言語対応の最良の選択肢です。シンガポール、香港などの国際金融センターでは PDPA（個人データ保護法）が適用される場合があり、ローカル推論がコンプライアンスの容易化につながります。',
            '**グローバル標準**：ローカル推論はいかなる場合でも企業データが外部サーバーに送信されないため、GDPR、PDPA、その他のデータ保護規制の下では有利です。モデルの選択より展開インフラストラクチャが重要です。',
          ],
        },
        commonMistakes: {
          title: 'ローカルLLMモデルの追跡とアップグレード時のよくある間違い',
          items: [
            '**不必要に新しいリリースにアップグレードする**：新しいモデルリリースは月単位で発生します。現在のモデルがユースケースを満たしている場合、アップグレードはオプションです。特定の品質制限に達した場合のみ新しいモデルを評価します：複雑なタスクの推論不足、弱い多言語出力、またはコーディング不足。限界的なベンチマーク向上のための 4～40GB モデルのダウンロードは時間とディスク容量の無駄です。',
            '**リリース後 Ollama でモデルを検索するときに間違ったスラッグを使用する**：Hugging Face のモデル名は Ollama タグと異なります。Meta Llama 3.3 は Ollama では `llama3.3` であり、`llama-3.3` または `meta-llama-3.3` ではありません。スクリプトで使用する前に、常に ollama.com/library で正確な Ollama タグを確認してください。',
            '**新しいモデルを引き出す前に Ollama 自体を更新しない**：新しいモデル対応には多くの場合、Ollama のアップデート版が必要です。新しくリリースされたモデルを引き出す前に、Ollama をアップデートしてください：macOS は自動更新、Linux：`curl -fsSL https://ollama.com/install.sh | sh` を再実行、Windows：最新のインストーラーをダウンロード。古い Ollama バージョンを実行すると、新しいモデルがサイレント失敗することがあります。',
            '**特定のタスクでは新しい = 優れていると仮定する**：Gemma 3 9B（2026年2月）は Llama 3.3 8B（2025年7月）よりほとんどのベンチマークでスコアが高いが、Llama 3.3 8B には18か月以上のコミュニティファイン・チューン、システムプロンプト、文書化されたユースケースがあります。確立されたワークフローでコミュニティリソースがある場合、古いモデルがより実用的な選択肢になる可能性があります。',
          ],
        },
        relatedReading: {
          id: 'related',
          title: '関連資料',
          items: [
            '[ベストローカルLLM2026](/ja/local-llms/best-local-llms-2026) -- 2026年すべてのリリースを含むタスク、ハードウェア、品質別のトップ5モデルの現在ランキング。',
            '[LLM量子化の説明](/ja/local-llms/llm-quantization-explained) -- 新しいモデルリリースをダウンロードするときの Q4_K_M vs Q5_K_M を理解します。',
            '[Qwen vs Llama vs Mistral](/ja/local-llms/qwen-vs-llama-vs-mistral) -- 最新の2026年データを含む3つの主要モデルファミリーの完全なベンチマーク比較。',
            '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) -- ダウンロード前に、ハードウェアが最新のモデルリリースをサポートするかチェックしてください。',
            '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) -- Ollama をアップデートして、正確なバージョンタグで最新のモデルをプルします。',
            '[Ollama のトップオープンソースモデル](/ja/local-llms/top-open-source-models-ollama) -- プルコマンドとパフォーマンスデータを含む利用可能なモデルの完全なライブラリ。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '2026年のローカルLLMモデルアップデートについてよくある質問',
          faqs: [
            {
              q: 'オープンウェイトリリース後、新しいモデルが Ollama にどのくらい素早く表示されますか？',
              a: 'Meta、Google、Mistral、Alibaba からのメジャーリリースの場合、通常1～7日です。Ollama チームはハイプロファイルリリースを優先します -- Llama 3.3 70B は Meta のオープンウェイトリリースの3日後に Ollama ライブラリに表示されました。小さいまたはコミュニティモデルは2～4週間かかることがあります。',
            },
            {
              q: 'Llama 3.3 8B からより新しいモデルにアップグレードすべきですか？',
              a: 'Llama 3.3 8B を一般的なタスク用に使用していて品質に満足している場合、アップグレードはオプションです。Qwen3 7B はベンチマークで若干高いスコアで、多言語とコーディング対応が優れています。ほとんどの英語中心の一般的な使用では、実用的な品質差は小さいです。現在のモデルが特定のタスクで苦労している場合はアップグレードしてください。',
            },
            {
              q: 'ローカルモデルは現在のフロンティアクラウドモデル品質に到達しますか？',
              a: 'トレンドははい、18～24か月の遅延で提案しています。GPT-4（2023、推定1.7T パラメータ）は Llama 3.3 70B（2025、ローカル実行可能）と一致しています。GPT-5.5（2024）は 2026年後期または2027年までにローカル実行可能な同等品を持つ可能性があります。制限要因はアルゴリズムの能力ではなく計算効率です。',
            },
            {
              q: 'DeepSeek で何が起こったのか、なぜそれが重要だったのか？',
              a: 'DeepSeek-R1（2025年1月）は中国のAIラボが OpenAI o1 とより低い訓練コストで競争可能な推論モデルを生産できることを実証しました。オープンウェイトリリースにより、フロンティアクラスの推論モデルが初めてローカルで利用可能になりました。DeepSeek-R1 7B は MATH で 52% を達成します -- Mistral Small の 28% のほぼ2倍です -- チェーンオブソート訓練方法学によって特に。',
            },
            {
              q: 'Llama 4 とは何ですか、ローカルで利用可能ですか？',
              a: '2026年4月の現在、Meta は Llama 4 Scout のプレビューをリリースしました -- 1000万トークンコンテキストまでクレームする混合専門家モデル。完全なオープンウェイトリリースはまだローカル推論用に利用不可です。Ollama ライブラリにはまだ Llama 4 バリアントが含まれていません。このページは Llama 4 がローカル展開で利用可能になるときに更新されます。',
            },
            {
              q: '2026年企業または規制産業向けのローカルモデルはありますか？',
              a: 'Mistral AI は Mistral モデル用のエンタープライズグレードサポート契約を提供しています。ヨーロッパの原産地は GDPR コンプライアンスに関連しています（EU AI Act は2025年2月に有効）。ヘルスケア（HIPAA）またはファイナンス（SOC 2）の場合、ローカルに展開されたモデルはデータ常駐要件を満たすことができます -- モデル自体はデータニュートラルです。コンプライアンス作業は展開インフラストラクチャにあり、モデル選択ではありません。',
            },
            {
              q: '初心者が2026年に開始すべきモデルはどれですか？',
              a: 'Llama 3.2 3B または Gemma 3 4B がベストの初心者選択です。どちらも控えめなハードウェア（4～6 GB VRAM）で実行され、一般的なタスクで優れた広範なドキュメンテーションとパフォーマンスがあります。Llama 3.2 3B にはより多くのコミュニティガイドとツール統合があります。Gemma 3 4B はより新しく、やや速く、ビジョン機能をサポートしています。非技術的ユーザーの場合、LM Studio はコマンドラインなしで両方を簡単にします。',
            },
            {
              q: '現在のモデルがうまく機能している場合、アップグレードする価値はありますか？',
              a: '特定の品質制限に達した場合のみです。7B または 8B モデルがユースケースを満たしている場合、アップグレードはオプションです。推論エラー、弱い多言語対応、または弱いコーディング能力に気づいた場合は、新しいモデルをテストする価値があります。Qwen3 7B（2025）はほとんどのベンチマークで Llama 3.3 8B を上回り、段階的な改善を求めるユーザーの安全なアップグレードターゲットです。',
            },
            {
              q: 'モデルパフォーマンスの品質は地域により異なりますか？',
              a: 'ローカルモデルの品質はハードウェアとサイズに基づいており、地域による変動はありません。ただし、多言語対応は異なります：Qwen3 は 29 の言語でトレーニングされ、Llama モデルは主に英語です。日本語展開の場合、Qwen3 は最高の多言語パフォーマンス供給です。',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'ソース',
          items: [
            'Hugging Face.（2026）."Open LLM Leaderboard." https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard -- すべてのオープンウェイトモデルリリースのリアルタイムベンチマークランキング。',
            'Google DeepMind.（2026）."Gemma 3 Technical Report." https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf -- すべての Gemma 3 バリアントのアーキテクチャ、ベンチマーク、ビジョン機能データ。',
            'Meta AI.（2025）."Llama 3.3 Release." https://ai.meta.com/blog/llama-3-3/ -- Llama 3.3 70B の公式発表と仕様。',
            'DeepSeek AI.（2025）."DeepSeek-R1 Technical Paper." https://arxiv.org/abs/2501.12948 -- DeepSeek-R1 のチェーンオブソートアーキテクチャと MATH ベンチマーク結果。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/ja/local-llms/local-llm-model-updates-2026',
        'headline': 'ローカルLLMモデルアップデート2026年：すべての大型オープンウェイトリリース',
        'description': 'ローカルLLMモデルアップデート2026：Gemma 3、Llama 4 Scout、DeepSeek-R1 を含むすべての大型オープンウェイトリリース、仕様、ベンチマーク、Ollama 対応。2026年4月更新。',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
          { '@type': 'Thing', 'name': 'Phi-4' },
          { '@type': 'Thing', 'name': 'Gemma 3' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Q1 2026 ローカルLLMリリース',
        'url': 'https://www.promptquorum.com/ja/local-llms/local-llm-model-updates-2026',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Gemma 3（全サイズ）', 'description': '2026年2月 Google リリース。全サイズでビジョン。128K コンテキスト。Apache 2.0。ollama run gemma3:9b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 4 Scout（プレビュー）', 'description': '2026年3月 Meta リリース。MoE アーキテクチャ。1000万トークンコンテキスト主張。Ollama ではまだ利用不可。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mistral Small 3.2', 'description': '2026年2月 Mistral AI リリース。Small 3.1 より指令追従性が改善。ollama run mistral-small3.2' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Phi-4 Mini', 'description': '2026年1月 Microsoft リリース。3.8B パラメータ。70% HumanEval。128K コンテキスト。ollama run phi4-mini' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'オープンウェイトリリース後、新しいモデルが Ollama にどのくらい素早く表示されますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Meta、Google、Mistral、Alibaba からのメジャーリリースの場合、通常1～7日です。Llama 3.3 70B は Meta のオープンウェイトリリースの3日後に Ollama ライブラリに表示されました。小さいまたはコミュニティモデルは2～4週間かかることがあります。' } },
          { '@type': 'Question', 'name': 'Llama 3.3 8B からより新しいモデルにアップグレードすべきですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 8B を一般的なタスク用に使用していて品質に満足している場合、アップグレードはオプションです。Qwen3 7B はベンチマークで若干高いスコアで、多言語とコーディング対応が優れています。ほとんどの英語中心の一般的な使用では、実用的な品質差は小さいです。' } },
          { '@type': 'Question', 'name': 'ローカルモデルは現在のフロンティアクラウドモデル品質に到達しますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'トレンドははい、18～24か月の遅延で提案しています。GPT-4（2023）は Llama 3.3 70B（2025、ローカル実行可能）と一致しています。GPT-5.5（2024）は 2026年後期または2027年までにローカル実行可能な同等品を持つ可能性があります。' } },
          { '@type': 'Question', 'name': 'DeepSeek で何が起こったのか、なぜそれが重要だったのか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek-R1（2025年1月）は中国のAIラボが OpenAI o1 とより低い訓練コストで競争可能な推論モデルを生産できることを実証しました。DeepSeek-R1 7B は MATH で 52% を達成します -- Mistral Small の 28% のほぼ2倍です。' } },
          { '@type': 'Question', 'name': 'Llama 4 とは何ですか、ローカルで利用可能ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '2026年4月の現在、Meta は Llama 4 Scout のプレビューをリリースしました -- 1000万トークンコンテキストまでクレームする混合専門家モデル。完全なオープンウェイトリリースはまだローカル推論用に利用不可です。' } },
          { '@type': 'Question', 'name': '2026年企業または規制産業向けのローカルモデルはありますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Mistral AI は Mistral モデル用のエンタープライズグレードサポート契約を提供しています。ローカルに展開されたモデルはデータ常駐要件を満たすことができます -- モデル自体はデータニュートラルです。コンプライアンス作業は展開インフラストラクチャにあります。' } },
          { '@type': 'Question', 'name': '初心者が2026年に開始すべきモデルはどれですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.2 3B または Gemma 3 4B がベストの初心者選択です。どちらも控えめなハードウェア（4～6 GB VRAM）で実行され、一般的なタスクで優れた広範なドキュメンテーションとパフォーマンスがあります。' } },
          { '@type': 'Question', 'name': '現在のモデルがうまく機能している場合、アップグレードする価値はありますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '特定の品質制限に達した場合のみです。7B または 8B モデルがユースケースを満たしている場合、アップグレードはオプションです。推論エラー、弱い多言語対応、または弱いコーディング能力に気づいた場合はテストする価値があります。' } },
          { '@type': 'Question', 'name': 'モデルパフォーマンスの品質は地域により異なりますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'ローカルモデルの品質はハードウェアとサイズに基づいており、地域による変動はありません。ただし、多言語対応は異なります：Qwen3 は 29 の言語でトレーニングされ、Llama モデルは主に英語です。' } },
          { '@type': 'Question', 'name': 'あるモデルで特定のタスクを処理する方法を学ぶのにどのくらい時間がかかりますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'コミュニティサポートによります。Llama 3.3 8B には 18 か月以上のファイン・チューン、システムプロンプト、ドキュメント化されたユースケースがあります。Gemma 3 9B はより新しく、サンプルが少なくなります。確立されたモデルの方が実用的です。' } },
        ],
      },
    },
    de: {
      theme: 'Beste Modelle',
      title: 'Lokale LLM-Modell-Updates 2026: Alle großen Open-Weight-Releases dieses Jahr',
      seoTitle: 'Lokale LLMs 2026: Gemma 3, Llama 4 und Ollama-Status',
      intro: 'Stand April 2026 sind die bedeutendsten lokalen LLM-Releases dieses Jahr: Meta Llama 3.3 70B (Dezember 2025), DeepSeek-R1 (Januar 2025), Qwen3 und Qwen3-Coder Familien (September 2025), Microsoft Phi-4 (Dezember 2024) und Google Gemma 3 (Februar 2026). Dieser Artikel verfolgt alle großen Modell-Releases mit ihren Schlüsselspezifikationen und Ollama-Verfügbarkeit.',
      metaDescription: 'Lokale LLM-Updates 2026: Gemma 3 (Feb), Llama 4 Scout (Mrz) und 4 Q1-Releases mit Spezifikationen, MMLU-Benchmarks und Ollama-Status. April 2026.',
      publishDate: '2026-04-04',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'lokale LLM-Updates 2026',
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Q1 2026 Releases', anchor: '#q1-2026-releases' },
        { label: 'Q4 2025 Releases', anchor: '#q4-2025-releases' },
        { label: 'Q3 2025 Releases', anchor: '#q3-2025-releases' },
        { label: 'Qualitätsverbesserung 2024 bis 2026', anchor: '#quality-improvement' },
        { label: 'Wie Sie auf dem Laufenden bleiben', anchor: '#how-to-stay-updated' },
        { label: 'Regionales Umfeld', anchor: '#regional-context' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Weiterführendes Material', anchor: '#related-reading' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Größter Q1 2026 Release**: Google Gemma 3 (Februar 2026) -- 1B, 4B, 9B und 27B Varianten, Vision-Support auf allen Größen, Apache 2.0 Lizenz.',
            '**Beste Reasoning-Modell-Release**: DeepSeek-R1 (Januar 2025) -- Chain-of-Thought Reasoning, 52 % MATH bei 7B Skalierung, disruptiver für die 7B Benchmark-Landschaft.',
            '**Größter Qualitätssprung in 2025**: Llama 3.3 70B (Dezember 2025) -- entspricht GPT-4 (2023) bei MMLU, verfügbar über `ollama run llama3.3:70b`.',
            '**Am schnellsten wachsende Modellfamilie in 2025**: Qwen3 -- übertraf Mistral Small bei Ollama-Downloads bis Q4 2025.',
            'Stand April 2026 hat sich die Qualitätslücke zwischen lokal lauffähigen Modellen und Frontier Cloud-Modellen auf etwa 18-24 Monate äquivalenter Kapazität verengt.',
          ],
        },
        q12026: {
          title: 'Welche lokalen LLM-Modelle wurden in Q1 2026 veröffentlicht?',
          content: 'Stand April 2026, die bemerkenswerten Open-Weight-Modell-Releases von Januar-April 2026. Alle Modelle unten sind in verschiedenen Quantisierungsformaten verfügbar -- siehe [Quantisierungsleitfaden](/de/local-llms/llm-quantization-explained) für Details zu Q4 vs. Q5 Abwägungen:',
          image: '/images/q1-2026-model-releases-timeline-de.svg',
          imageCaption: 'Q1 2026 lokale LLM-Release-Timeline: Phi-4 Mini (Januar, 3.8B), Gemma 3 (Februar, Vision auf allen Größen), Llama 4 Scout (März, MoE-Architektur) und Mistral Small 3.2 (April). Alle wurden Ollama innerhalb von Tagen nach Open-Weight-Ankündigung hinzugefügt.',
          rows: [
            { 'Modell': 'Gemma 3 (alle Größen)', 'Veröffentlicht': 'Februar 2026', 'Entwickler': 'Google', 'Wichtigstes Feature': 'Vision auf allen Größen, 128K Kontext, Apache 2.0', 'Ollama': 'ollama run gemma3:9b' },
            { 'Modell': 'Llama 4 Scout (Vorschau)', 'Veröffentlicht': 'März 2026', 'Entwickler': 'Meta', 'Wichtigstes Feature': 'MoE-Architektur Vorschau, 10M Token Kontext behauptet', 'Ollama': 'Noch nicht verfügbar' },
            { 'Modell': 'Mistral Small 3.2', 'Veröffentlicht': 'Februar 2026', 'Entwickler': 'Mistral AI', 'Wichtigstes Feature': 'Verbesserte Anweisungsfolge gegenüber Small 3.1', 'Ollama': 'ollama run mistral-small3.2' },
            { 'Modell': 'Phi-4 Mini', 'Veröffentlicht': 'Januar 2026', 'Entwickler': 'Microsoft', 'Wichtigstes Feature': '3,8B, 70 % HumanEval, 128K Kontext', 'Ollama': 'ollama run phi4-mini' },
          ],
          columns: ['Modell', 'Veröffentlicht', 'Entwickler', 'Wichtigstes Feature', 'Ollama'],
        },
        q42025: {
          title: 'Welche Q4 2025 Modelle sind 2026 noch am wichtigsten?',
          image: '/images/model-comparison-2026-de.svg',
          imageCaption: 'April 2026 lokale LLM-Modellvergleich: Llama 3.3 70B führt mit 82 % MMLU und 42 GB VRAM, Qwen3 7B bietet beste mehrsprachige Unterstützung bei 74 % MMLU und 5 GB VRAM, Gemma 3 9B mit Vision-Fähigkeiten, DeepSeek-R1 7B spezialisiert auf Reasoning-Aufgaben mit 52 % MATH. Alle über Ollama lauffähig.',
          rows: [
            { 'Modell': 'Llama 3.3 70B', 'Veröffentlicht': 'Dezember 2025', 'Wichtigste Specs': '82 % MMLU, 88 % HumanEval, 128K Kontext', 'Noch relevant': 'Ja -- beste 70B-Option' },
            { 'Modell': 'Phi-4 14B', 'Veröffentlicht': 'Dezember 2024', 'Wichtigste Specs': '84 % MMLU -- über seiner Größenklasse', 'Noch relevant': 'Ja -- starkes 14B-Reasoning-Modell' },
            { 'Modell': 'Qwen3 vollständige Familie', 'Veröffentlicht': 'September 2025', 'Wichtigste Specs': '0,5B-72B Bereich, 29 Sprachen, Apache 2.0', 'Noch relevant': 'Ja -- derzeit beste multilinguale Familie' },
            { 'Modell': 'DeepSeek-R1', 'Veröffentlicht': 'Januar 2025', 'Wichtigste Specs': 'Reasoning-Modell, 52 % MATH bei 7B, MoE bei großer Skalierung', 'Noch relevant': 'Ja -- bestes Reasoning lokal' },
          ],
          columns: ['Modell', 'Veröffentlicht', 'Wichtigste Specs', 'Noch relevant'],
        },
        q32025: {
          title: 'Welche Q3 2025 Modelle werden noch weit verbreitet genutzt?',
          content: [
            '**Mehrere 2025 Releases bleiben 2026 weit verbreitet eingesetzt, aufgrund von Tool-Kompatibilität und Community-Dokumentation:**',
          ],
          items: [
            '**Llama 3.3 8B** (Juli 2025) -- immer noch das am besten dokumentierte 8B-Modell, bevorzugt von Anfängern für umfangreiche Leitfäden und Tool-Integrationen.',
            '**Mistral Small v0.3** (Mai 2025) -- niedrigere Benchmark-Scores als aktuelle Alternativen, aber Apache 2.0 Lizenz und Mistral EU-Herkunft machen es in einigen europäischen Bereitstellungen bevorzugt.',
            '**Llama 3.2 3B und 1B** (September 2025) -- immer noch die Standardempfehlung für die erste Installation aufgrund der geringen Größe und weit verbreiteten Dokumentation.',
          ],
        },
        whatChanged: {
          id: 'quality-improvement',
          title: 'Um wie viel hat sich die Qualität lokaler LLMs von 2024 bis 2026 verbessert?',
          content: [
            '**Die zweijährige Verbesserung der Qualität lokal lauffähiger Modelle ist erheblich.** Stand April 2026 entspricht ein 7B-Modell (Qwen3 7B, 74 % MMLU) der Benchmark-Leistung eines 13B-Modells von Anfang 2024. Ein 70B-Modell (Llama 3.3 70B, 82 % MMLU) entspricht GPT-4 (2023) Leistung -- ein Modell, das vor 3 Jahren eine Milliarden-Dollar-Server-Infrastruktur benötigte, läuft jetzt auf einem Mac Studio. Für Hardware-Empfehlungen, die jeder Modellklasse entsprechen, siehe [lokaler LLM Hardware-Leitfaden 2026](/de/local-llms/local-llm-hardware-guide-2026).',
          ],
          image: '/images/llm-quality-improvement-2024-2026-de.svg',
          imageCaption: 'Lokale LLM-Qualitätsverbesserung 2024-2026: 7B-Klasse-Modelle verbessert sich von 64 % MMLU (Mistral Small, Anfang 2024) auf 74 % (Qwen3 7B, April 2026). 70B-Klasse verbessert sich von 75 % (Llama 3.3 70B) auf 82-84 % (Llama 3.3 70B und Qwen3 72B). Alle 18-24 Monate rückt die lokale Modellqualität eine Generation vor.',
          rows: [
            { 'Jahr': 'Anfang 2024', 'Beste 7B MMLU': '~64 % (Mistral Small)', 'Beste lokale 70B MMLU': '~75 % (Llama 3.3 70B)', 'Benötigte Hardware': '7B: 8 GB RAM; 70B: 48 GB RAM' },
            { 'Jahr': 'Ende 2025', 'Beste 7B MMLU': '~74 % (Qwen3 7B)', 'Beste lokale 70B MMLU': '~82 % (Llama 3.3 70B)', 'Benötigte Hardware': '7B: 5 GB RAM; 70B: 40 GB RAM' },
            { 'Jahr': 'April 2026', 'Beste 7B MMLU': '~74 % (Qwen3 7B)', 'Beste lokale 70B MMLU': '~84 % (Qwen3 72B)', 'Benötigte Hardware': '7B: 4,7 GB RAM; 70B: 43 GB RAM' },
          ],
          columns: ['Jahr', 'Beste 7B MMLU', 'Beste lokale 70B MMLU', 'Benötigte Hardware'],
        },
        stayUpdated: {
          title: 'Wie bleiben Sie über neue lokale LLM-Releases auf dem Laufenden?',
          items: [
            '**Ollama Blog** (ollama.com/blog) -- kündigt neue Modelle an, die der Ollama-Bibliothek hinzugefügt werden, typischerweise innerhalb von Tagen nach Open-Weight-Releases.',
            '**Hugging Face Open LLM Leaderboard** (huggingface.co/spaces/open-llm-leaderboard) -- verfolgt Benchmark-Scores für alle neu veröffentlichten Modelle.',
            '**r/LocalLLaMA** (reddit.com/r/LocalLLaMA) -- die aktivste Community für lokale KI-Nachrichten, Benchmarks und Hardware-Diskussionen.',
            '**GitHub Releases**: folgen Sie den Repositories für llama.cpp (github.com/ggerganov/llama.cpp) und Ollama (github.com/ollama/ollama), um Engine-Updates zu verfolgen, die neue Modelle ermöglichen.',
            '**PromptQuorum**: dieser Leitfaden wird aktualisiert, wenn große Modell-Releases die Empfehlungen ändern. Überprüfen Sie das Feld dateModified für die neueste Aktualisierung.',
          ],
        },
        regionalContext: {
          title: 'Lokale LLM-Modell-Updates 2026: Regionales Umfeld',
          content: [
            '**EU / GDPR + AI Act:** Das EU AI Act (Gültig ab Februar 2025) führte Dokumentationsanforderungen für KI-Systeme in regulierten Kontexten ein. Wenn neue lokale Modelle 2026 veröffentlicht werden, sollten EU-Organisationen beachten: Mistral AI (Frankreich) bleibt der einzige große EU-basierte Open-Weight-Modellentwickler. Mistral Small 3.2 (Februar 2026) und Mistral Small tragen weiterhin Apache 2.0 Lizenzen -- die sauberste Compliance-Wahl für regulierte Sektoren. Deutsche BSI und französische CNIL empfehlen beide lokale Inferenz für hochriskante KI-Anwendungen. Für Non-EU-Modelle (Llama, Qwen, Gemma, DeepSeek): Alle sind unter GDPR für lokale Inferenz nutzbar, da keine Daten die Organisation verlassen. Der Compliance-Unterschied liegt in der Lieferanten-Dokumentation, nicht in der Datenbehandlung. Beim Upgrade auf ein neues Modell aktualisieren Sie die KI-Tool-Dokumentation mit der neuen Modellversion, Quantisierungslevel und GGUF-Dateiname. **BSI-Grundschutz-Kataloge:** Der deutsche BSI-Grundschutz-Katalog fordert die Dokumentation von KI-Systemversionsänderungen in Produktionsumgebungen. Lokale Open-Weight-Modelle unterliegen nicht den Registrierungsanforderungen wie Cloud-Services. DACH-Unternehmen (Deutschland, Österreich, Schweiz) in regulierten Sektoren (Finanzdienstleistungen, Gesundheitswesen, Recht) sollten sicherstellen, dass Modell-Upgrades im Risiko-Management-Prozess dokumentiert werden.',
            '**Japan (METI):** METI AI Governance Guidelines erfordern die Dokumentation von Modellversionsänderungen in produktiven KI-Systemen. Beim Upgrade von Llama 3.3 8B auf ein neueres Modell dokumentieren Sie: vorherige Modell-Tag, neue Modell-Tag, Upgrade-Datum und Grund für die Änderung. Der `ollama show <model>` Befehl stellt die genaue Versionszeichenkette für Compliance-Aufzeichnungen bereit. Für japanischsprachige Bereitstellungen bleibt Qwen3 die empfohlene Familie in 2026 aufgrund des nativen CJK-Tokenizers.',
            '**China:** Unter Chinas CAC Generative AI Interim Measures (2023) müssen Organisationen, die KI-Services für die Öffentlichkeit bereitstellen, Modelle bei Regulatoren registrieren. Lokale Bereitstellungen für interne Nutzung fallen außerhalb dieses Bereichs. Für chinesischsprachige Bereitstellungen sind Qwen3 (Alibaba, Apache 2.0) und DeepSeek-R1 (DeepSeek, MIT) die primären Optionen. Qwen3 erhielt erhebliche Modellzerfallsupdates in Q3 2025 -- Organisationen, die noch Qwen2 verwenden, sollten auf Qwen3 upgraden für verbesserte Leistung und die erweiterte 29-Sprachen-Unterstützung.',
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler beim Tracking und Upgrade lokaler LLM-Modelle',
          items: [
            '**Unnötiges Upgrade auf jeden neuen Release:** Neue Modell-Releases passieren monatlich. Wenn Ihr aktuelles Modell Ihren Use-Case erfüllt, ist ein Upgrade optional. Bewerten Sie ein neues Modell nur, wenn Sie spezifische Qualitätsgrenzen erreichen: schlechtes Reasoning bei komplexen Aufgaben, schwache multilinguale Ausgabe oder Codier-Fehler. Das Herunterladen eines 4-40 GB Modells für marginale Benchmark-Gewinne ist verschwendete Zeit und Speicherplatz.',
            '**Verwendung des falschen Slugs beim Modell-Lookup in Ollama nach einem Release:** Modellnamen auf Hugging Face unterscheiden sich von Ollama-Tags. Meta Llama 3.3 ist `llama3.3` in Ollama, nicht `llama-3.3` oder `meta-llama-3.3`. Überprüfen Sie immer den genauen Ollama-Tag unter ollama.com/library, bevor Sie ihn in Skripten verwenden.',
            '**Ollama selbst nicht aktualisieren, bevor neue Modelle gezogen werden:** Neue Modell-Unterstützung erfordert oft eine aktualisierte Ollama-Version. Bevor Sie ein kürzlich veröffentlichtes Modell ziehen, aktualisieren Sie Ollama: macOS auto-aktualisiert; Linux: Führen Sie erneut `curl -fsSL https://ollama.com/install.sh | sh` aus; Windows: Laden Sie das neueste Installationsprogramm herunter. Das Ausführen einer veralteten Ollama-Version kann dazu führen, dass ein neues Modell stillschweigend fehlschlägt.',
            '**Annahme, dass neuer = besser für Ihre spezifische Aufgabe:** Gemma 3 9B (Februar 2026) hat höhere Scores als Llama 3.3 8B (Juli 2025) bei den meisten Benchmarks, aber Llama 3.3 8B hat 18+ Monate Community Fine-Tunes, System-Prompts und dokumentierte Use-Cases. Für etablierte Workflows mit Community-Ressourcen kann das ältere Modell die bessere praktische Wahl sein.',
          ],
        },
        relatedReading: {
          id: 'related',
          title: 'Weiterführendes Material',
          items: [
            '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) -- aktuelle Rankings der Top 5 Modelle nach Task, Hardware und Qualität, einschließlich aller 2026 Releases.',
            '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) -- verstehen Sie Q4_K_M vs. Q5_K_M beim Herunterladen neuer Modell-Releases.',
            '[Qwen vs. Llama vs. Mistral](/de/local-llms/qwen-vs-llama-vs-mistral) -- vollständiger Benchmark-Vergleich der drei Hauptmodellfamilien mit neuesten 2026 Daten.',
            '[Lokaler LLM Hardware-Leitfaden 2026](/de/local-llms/local-llm-hardware-guide-2026) -- überprüfen Sie, ob Ihre Hardware die neuesten Modell-Releases unterstützt, bevor Sie sie herunterladen.',
            '[Ollama installieren](/de/local-llms/how-to-install-ollama) -- aktualisieren Sie Ollama und ziehen Sie die neuesten Modelle mit korrekten Versions-Tags.',
            '[Top Open Source Modelle auf Ollama](/de/local-llms/top-open-source-models-ollama) -- vollständige Bibliothek verfügbarer Modelle mit Pull-Befehlen und Performance-Daten.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen zu lokalen LLM-Modell-Updates 2026?',
          faqs: [
            { q: 'Wie schnell erscheinen neue Modelle in Ollama nach ihrem Open-Weight-Release?', a: 'Typischerweise 1-7 Tage für große Modell-Releases von Meta, Google, Mistral und Alibaba. Das Ollama-Team priorisiert hochkarätige Releases -- Llama 3.3 70B erschien 3 Tage nach Metas Open-Weight-Release in der Ollama-Bibliothek. Kleinere oder Community-Modelle können 2-4 Wochen dauern.' },
            { q: 'Sollte ich von Llama 3.3 8B auf ein neueres Modell upgraden?', a: 'Wenn Sie Llama 3.3 8B für allgemeine Aufgaben verwenden und mit der Qualität zufrieden sind, ist ein Upgrade optional. Qwen3 7B hat leicht höhere Benchmark-Scores und bessere multilinguale und Codierungs-Unterstützung. Für die meisten englischsprachigen allgemeinen Verwendungen ist der praktische Qualitätsunterschied klein. Upgraden Sie, wenn Ihr aktuelles Modell bei spezifischen Aufgaben Schwierigkeiten hat.' },
            { q: 'Werden lokale Modelle jemals die aktuelle Frontier Cloud-Modell-Qualität erreichen?', a: 'Der Trend deutet auf Ja hin -- mit einer Verzögerung von 18-24 Monaten. GPT-4 (2023, geschätzt 1,7 Billionen Parameter) wird durch Llama 3.3 70B (2025, lokal lauffähig) angepasst. GPT-5.5 (2024) wird wahrscheinlich bis Ende 2026 oder 2027 ein lokal lauffähiges Äquivalent haben. Der begrenzende Faktor ist Compute-Effizienz, nicht algorithmische Kapazität.' },
            { q: 'Was ist mit DeepSeek passiert und warum war es bedeutsam?', a: 'DeepSeek-R1 (Januar 2025) demonstrierte, dass ein chinesisches KI-Labor Reasoning-fähige Modelle produzieren kann, die mit OpenAI o1 bei niedrigeren Trainingskosten konkurrierbar sind. Der Open-Weight-Release machte ein Frontier-Klasse-Reasoning-Modell erstmals lokal verfügbar. DeepSeek-R1 7B erreicht 52 % bei MATH -- fast doppelt so viel wie die 28 % von Mistral Small -- speziell wegen seiner Chain-of-Thought-Trainingsmethodologie.' },
            { q: 'Was ist Llama 4 und ist es lokal noch verfügbar?', a: 'Stand April 2026 veröffentlichte Meta eine Vorschau von Llama 4 Scout -- ein Mixture-of-Experts-Modell mit Anspruch auf bis zu 10M Token Kontext. Der vollständige Open-Weight-Release ist noch nicht für lokale Inferenz verfügbar. Die Ollama-Bibliothek beinhaltet noch nicht Llama 4 Varianten. Diese Seite wird aktualisiert, wenn Llama 4 für die lokale Bereitstellung verfügbar wird.' },
            { q: 'Gibt es 2026 lokale Modelle speziell für Unternehmen oder regulierte Branchen?', a: 'Mistral AI bietet Enterprise-Grade-Support-Verträge für Mistral-Modelle an. Ihre europäische Herkunft ist relevant für GDPR-Compliance (EU AI Act gültig ab Februar 2025). Für Gesundheitswesen (HIPAA) oder Finanzen (SOC 2) kann jedes lokal eingesetztes Modell die Daten-Residency-Anforderungen erfüllen -- das Modell selbst ist daten-neutral. Die Compliance-Arbeit liegt in der Bereitstellungs-Infrastruktur, nicht in der Modellauswahl.' },
            { q: 'Welches Modell sollte ein absoluter Anfänger 2026 starten?', a: 'Llama 3.2 3B oder Gemma 3 4B sind die besten Anfänger-Optionen. Beide laufen auf bescheidener Hardware (4-6 GB VRAM), haben umfangreiche Dokumentation und funktionieren gut bei allgemeinen Aufgaben. Llama 3.2 3B hat mehr Community-Leitfäden und Tool-Integrationen. Gemma 3 4B ist neuer, etwas schneller und unterstützt Vision-Fähigkeiten. Für nicht-technische Benutzer macht LM Studio beide einfach zu installieren und zu verwenden ohne die Befehlszeile.' },
            { q: 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?', a: 'Lokale LLMs sind DSGVO-konform für die Inferenz, da keine Daten externe Server verlassen. Sie müssen Artikel 28 Datenverarbeitungsverträge für Trainings-Datensätze dokumentieren, falls vorhanden. Der deutsche BSI-Grundschutz-Katalog und die französische CNIL empfehlen lokale Inferenz für hochsensible Verarbeitungsfälle (Finanzen, Gesundheit, Recht). Beim Upgrade auf ein neues Modell aktualisieren Sie die IT-Dokumentation mit dem neuen Modellnamen und der Quantisierungsversion -- das reicht für Compliance-Aufzeichnungen aus.' },
            { q: 'Sind diese Modelle für den deutschen Mittelstand geeignet?', a: 'Ja. Kleine und mittlere Unternehmen (KMU) mit 10-500 Mitarbeitern können lokale Modelle für Dokumentzusammenfassung, E-Mail-Verfassung und interne Wissenssysteme einsetzen ohne Cloud-Abhängigkeiten. Llama 3.3 8B läuft auf einem Standard-Laptop oder Mini-PC für einen Mittelständler, der interne Daten verarbeiten muss. Mistral Small ist die bevorzugte europäische Option für Mittelstand, die unter DSGVO und BSI-Standards arbeiten. Hardware-Investition: Ein Mini-PC mit RTX 4060 (€500-800) deckt produktive Inference für 5-10 gleichzeitige Benutzer ab -- einmalige Investition statt monatliche Cloud-Kosten.' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'Hugging Face. (2026). "Open LLM Leaderboard." https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard -- Echtzeit-Benchmark-Rankings für alle Open-Weight-Modell-Releases.',
            'Google DeepMind. (2026). "Gemma 3 Technical Report." https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf -- Architektur, Benchmarks und Vision-Fähigkeits-Daten für alle Gemma 3 Varianten.',
            'Meta AI. (2025). "Llama 3.3 Release." https://ai.meta.com/blog/llama-3-3/ -- Offizielle Ankündigung und Spezifikationen für Llama 3.3 70B.',
            'DeepSeek AI. (2025). "DeepSeek-R1 Technical Paper." https://arxiv.org/abs/2501.12948 -- Chain-of-Thought-Architektur und MATH Benchmark-Ergebnisse für DeepSeek-R1.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Lokale LLM-Modell-Updates 2026: Alle großen Open-Weight-Releases dieses Jahr',
        'url': 'https://www.promptquorum.com/de/local-llms/local-llm-model-updates-2026',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'proficiencyLevel': 'Intermediate',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
        'about': [
          { '@type': 'Thing', 'name': 'Gemma 3' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'Open-Weight LLM 2026' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Große lokale LLM-Releases Q1 2026',
        'url': 'https://www.promptquorum.com/de/local-llms/local-llm-model-updates-2026',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Gemma 3 (alle Größen)', 'description': 'Februar 2026 von Google veröffentlicht. Vision auf allen Größen. 128K Kontext. Apache 2.0. ollama run gemma3:9b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 4 Scout (Vorschau)', 'description': 'März 2026 von Meta veröffentlicht. MoE-Architektur. 10M Token Kontext behauptet. Noch nicht in Ollama verfügbar.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mistral Small 3.2', 'description': 'Februar 2026 von Mistral AI veröffentlicht. Verbesserte Anweisungsfolge gegenüber Small 3.1. ollama run mistral-small3.2' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Phi-4 Mini', 'description': 'Januar 2026 von Microsoft veröffentlicht. 3,8B Parameter. 70 % HumanEval. 128K Kontext. ollama run phi4-mini' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Wie schnell erscheinen neue Modelle in Ollama nach ihrem Open-Weight-Release?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Typischerweise 1-7 Tage für große Modell-Releases von Meta, Google, Mistral und Alibaba. Llama 3.3 70B erschien 3 Tage nach Metas Open-Weight-Release in der Ollama-Bibliothek. Kleinere oder Community-Modelle können 2-4 Wochen dauern.' } },
          { '@type': 'Question', 'name': 'Sollte ich von Llama 3.3 8B auf ein neueres Modell upgraden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Wenn Sie Llama 3.3 8B für allgemeine Aufgaben verwenden und mit der Qualität zufrieden sind, ist ein Upgrade optional. Qwen3 7B hat etwas höhere Benchmark-Scores mit besserer mehrsprachiger und Codierungsunterstützung. Für die meisten englischsprachigen allgemeinen Verwendungen ist der praktische Qualitätsunterschied klein.' } },
          { '@type': 'Question', 'name': 'Werden lokale Modelle jemals die aktuelle Frontier Cloud-Modell-Qualität erreichen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Der Trend deutet auf Ja hin -- mit einer Verzögerung von 18-24 Monaten. GPT-4 (2023) wird durch Llama 3.3 70B (2025, lokal lauffähig) angepasst. GPT-5.5 (2024) wird wahrscheinlich bis Ende 2026 oder 2027 ein lokal lauffähiges Äquivalent haben.' } },
          { '@type': 'Question', 'name': 'Was ist mit DeepSeek passiert und warum war es bedeutsam?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek-R1 (Januar 2025) zeigte, dass ein chinesisches KI-Labor Reasoning-Modelle produzieren kann, die mit OpenAI o1 bei niedrigeren Trainingskosten konkurrierbar sind. Die Open-Weight-Release machte ein Frontier-Klasse-Reasoning-Modell erstmals lokal verfügbar. DeepSeek-R1 7B erreicht 52 % bei MATH vs. 28 % für Mistral Small wegen Chain-of-Thought-Training.' } },
          { '@type': 'Question', 'name': 'Was ist Llama 4 und ist es lokal noch verfügbar?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Stand April 2026 veröffentlichte Meta eine Vorschau von Llama 4 Scout -- ein Mixture-of-Experts-Modell mit Anspruch auf bis zu 10M Token Kontext. Der vollständige Open-Weight-Release ist noch nicht für lokale Inferenz verfügbar. Die Ollama-Bibliothek beinhaltet noch nicht Llama 4 Varianten.' } },
          { '@type': 'Question', 'name': 'Gibt es lokale Modelle für Unternehmen oder regulierte Branchen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Mistral AI bietet Enterprise-Grade-Support für Mistral-Modelle an. Ihre europäische Herkunft ist relevant für GDPR-Compliance unter dem EU AI Act (gültig ab Februar 2025). Jedes lokal eingesetztes Modell kann Daten-Residency-Anforderungen erfüllen -- Compliance-Arbeit liegt in der Bereitstellungs-Infrastruktur, nicht in der Modellauswahl.' } },
          { '@type': 'Question', 'name': 'Welches Modell sollte ein absoluter Anfänger 2026 starten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.2 3B oder Gemma 3 4B. Beide laufen auf bescheidener Hardware (4-6 GB VRAM), haben umfangreiche Dokumentation und funktionieren gut bei allgemeinen Aufgaben. Llama 3.2 3B hat mehr Community-Leitfäden. Gemma 3 4B ist neuer, etwas schneller und unterstützt Vision. Für nicht-technische Benutzer macht LM Studio beide einfach ohne die Befehlszeile.' } },
          { '@type': 'Question', 'name': 'Muss ich bei der Verwendung von lokalen LLMs die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Lokale LLMs sind DSGVO-konform für die Inferenz, da keine Daten externe Server verlassen. Sie müssen Artikel 28 Datenverarbeitungsverträge für Trainings-Datensätze dokumentieren. Der deutsche BSI-Grundschutz-Katalog und die französische CNIL empfehlen lokale Inferenz für hochsensible Verarbeitungsfälle. Beim Upgrade aktualisieren Sie die IT-Dokumentation mit dem neuen Modellnamen und der Quantisierungsversion.' } },
          { '@type': 'Question', 'name': 'Sind diese Modelle für den deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Kleine und mittlere Unternehmen (KMU) mit 10-500 Mitarbeitern können lokale Modelle für Dokumentzusammenfassung, E-Mail-Verfassung und interne Wissenssysteme einsetzen ohne Cloud-Abhängigkeiten. Llama 3.3 8B läuft auf Standard-Laptop oder Mini-PC. Mistral Small ist die bevorzugte Option für Mittelstand unter DSGVO und BSI-Standards. Hardware-Investition: Mini-PC mit RTX 4060 (€500-800) deckt produktive Inference für 5-10 gleichzeitige Benutzer.' } },
        ],
      },
    },
    zh: {
      theme: '最佳模型',
      title: '本地LLM模型更新2026年：所有大型开源权重发布',
      seoTitle: '本地LLM新模型2026：Gemma 3、Llama 4与Ollama支持',
      intro: '截至2026年4月，今年最重要的本地LLM发布包括：Meta Llama 3.3 70B（2025年12月）、DeepSeek-R1（2025年1月）、Qwen3和Qwen3-Coder系列（2025年9月）、Microsoft Phi-4（2024年12月）和Google Gemma 3（2026年2月）。本文追踪所有主要模型发布及其关键规格和Ollama可用性。',
      metaDescription: '本地LLM模型更新2026：Gemma 3（2月）、Llama 4 Scout（3月）等6款Q1发布，含规格、MMLU基准和Ollama命令。2026年4月更新。',
      publishDate: '2026-04-04',
      readTime: '阅读约8分钟',
      educationalLevel: 'Beginner',
      primaryTerm: '本地LLM模型更新2026',
      toc: [{ label: '核心要点', anchor: '#key-takeaways' }, { label: '2026年Q1发布', anchor: '#q1-2026-releases' }, { label: '2025年Q4发布', anchor: '#q4-2025-releases' }, { label: '2025年Q3发布', anchor: '#q3-2025-releases' }, { label: '2025年Q2发布', anchor: '#q2-2025-releases' }, { label: '2025年Q1发布', anchor: '#q1-2025-releases' }, { label: '2024年Q4发布', anchor: '#q4-2024-releases' }, { label: '比较：模型性能概览', anchor: '#comparison-model-performance-overview' }, { label: '常见问题', anchor: '#faq-section' }, { label: '相关阅读', anchor: '#related-reading' }, { label: '来源', anchor: '#sources' }],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Q1 2026最重要发布**：Google Gemma 3（2026年2月）-- 1B、4B、9B、27B多种规格，全部支持视觉能力，Apache 2.0许可。',
            '**最强推理模型**：DeepSeek-R1（2025年1月）-- 思维链推理，7B规模达到52% MATH，颠覆了7B基准测试格局。',
            '**2025最大质量飞跃**：Llama 3.3 70B（2025年12月）-- MMLU达到82%，相当于GPT-4（2023），可通过`ollama run llama3.3:70b`使用。',
            '**2025增长最快模型家族**：Qwen3 -- 在Ollama下载中到Q4 2025已超越Mistral Small。',
            '2026年4月，本地运行模型与前沿云API的质量差距已缩小至约18-24个月相当的能力。',
          ],
        },
        q12026: {
          title: '2026年Q1发布了哪些本地LLM？',
          content: '2026年4月，2026年1月-4月的重要开源模型发布。以下所有模型均支持多种量化格式 -- 详见[量子化指南](/zh/local-llms/llm-quantization-explained)了解Q4与Q5的权衡：',
          image: '/images/q1-2026-model-releases-timeline-zh.svg',
          imageCaption: 'Q1 2026本地LLM发布时间线：Phi-4 Mini（1月，3.8B，70% HumanEval）、Gemma 3（2月，全规格支持视觉）、Llama 4 Scout（3月，MoE架构）、Mistral Small 3.2（4月）。所有模型在开源发布后数日内加入Ollama。',
          rows: [
            { '模型': 'Gemma 3（全规格）', '发布': '2026年2月', '开发者': 'Google', '关键特性': '全规格支持视觉、128K上下文、Apache 2.0', 'Ollama': 'ollama run gemma3:9b' },
            { '模型': 'Llama 4 Scout（预览）', '发布': '2026年3月', '开发者': 'Meta', '关键特性': 'MoE架构预览、声称10M令牌上下文', 'Ollama': '暂不可用' },
            { '模型': 'Mistral Small 3.2', '发布': '2026年2月', '开发者': 'Mistral AI', '关键特性': '相比Small 3.1指令跟随能力改进', 'Ollama': 'ollama run mistral-small3.2' },
            { '模型': 'Phi-4 Mini', '发布': '2026年1月', '开发者': 'Microsoft', '关键特性': '3.8B、70% HumanEval、128K上下文', 'Ollama': 'ollama run phi4-mini' },
          ],
          columns: ['模型', '发布', '开发者', '关键特性', 'Ollama'],
        },
        q42025: {
          title: 'Q4 2025的模型中，2026年仍最重要的是哪些？',
          image: '/images/model-comparison-2026-zh.svg',
          imageCaption: '2026年4月本地LLM模型对比：Llama 3.3 70B领先（MMLU 82%、VRAM 42GB）、Qwen3 7B多语言最优（MMLU 74%、VRAM 5GB、中文支持卓越）、Gemma 3 9B增加视觉、DeepSeek-R1 7B专攻推理（MATH 52%）。全部可通过Ollama运行。',
          rows: [
            { '模型': 'Llama 3.3 70B', '发布': '2025年12月', '关键规格': '82% MMLU、88% HumanEval、128K上下文', '仍相关': '是 -- 最佳70B选择' },
            { '模型': 'Phi-4 14B', '发布': '2024年12月', '关键规格': '84% MMLU -- 超越其规模等级', '仍相关': '是 -- 强大的14B推理模型' },
            { '模型': 'Qwen3全系列', '发布': '2025年9月', '关键规格': '0.5B-72B范围、29种语言、Apache 2.0', '仍相关': '是 -- 目前最优多语言家族' },
            { '模型': 'DeepSeek-R1', '发布': '2025年1月', '关键规格': '推理模型、7B达52% MATH、大规模MoE', '仍相关': '是 -- 本地最优推理' },
          ],
          columns: ['模型', '发布', '关键规格', '仍相关'],
        },
        q32025: {
          title: 'Q3 2025的模型中，现在仍被广泛使用的有哪些？',
          content: [
            '**多个2025年发布的模型由于工具兼容性和社区文档，在2026年仍被广泛部署：**',
          ],
          items: [
            '**Llama 3.3 8B**（2025年7月）-- 仍是最有文档的8B模型，初学者偏好其大量指南和工具集成。',
            '**Mistral Small v0.3**（2025年5月）-- 基准分数低于当前替代方案，但Apache 2.0许可和Mistral EU原产地使其在某些欧洲部署中更受欢迎。',
            '**Llama 3.2 3B和1B**（2025年9月）-- 由于规模小和文档广泛，仍是首选推荐方案。',
          ],
        },
        whatChanged: {
          id: 'quality-improvement',
          title: '2024年到2026年本地LLM质量提升了多少？',
          content: [
            '**两年间本地运行模型质量的提升幅度巨大。** 2026年4月，一个7B模型（Qwen3 7B、74% MMLU）的性能相当于2024年初的13B模型。一个70B模型（Llama 3.3 70B、82% MMLU）相当于GPT-4（2023）-- 三年前需要数十亿美元服务器基础设施的模型现在能在Mac Studio上运行。针对各模型等级的硬件建议，参见[2026本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide-2026)。',
          ],
          image: '/images/llm-quality-improvement-2024-2026-zh.svg',
          imageCaption: '本地LLM质量改进（2024-2026）：7B级模型从64%（Mistral Small、2024初）提升到74%（Qwen3 7B、2026年4月）。70B级从75%（Llama 3.3 70B）提升到82-84%（Llama 3.3 70B和Qwen3 72B）。每18-24个月本地模型质量进步一代。',
          rows: [
            { '年份': '2024年初', '最佳7B MMLU': '~64%（Mistral Small）', '最佳本地70B MMLU': '~75%（Llama 3.3 70B）', '所需硬件': '7B: 8 GB RAM；70B: 48 GB RAM' },
            { '年份': '2025年末', '最佳7B MMLU': '~74%（Qwen3 7B）', '最佳本地70B MMLU': '~82%（Llama 3.3 70B）', '所需硬件': '7B: 5 GB RAM；70B: 40 GB RAM' },
            { '年份': '2026年4月', '最佳7B MMLU': '~74%（Qwen3 7B）', '最佳本地70B MMLU': '~84%（Qwen3 72B）', '所需硬件': '7B: 4.7 GB RAM；70B: 43 GB RAM' },
          ],
          columns: ['年份', '最佳7B MMLU', '最佳本地70B MMLU', '所需硬件'],
        },
        stayUpdated: {
          title: '如何获取新本地LLM发布的信息？',
          items: [
            '**Ollama博客**（ollama.com/blog）-- 发布添加到Ollama库的新模型，通常在开源发布后数天内。',
            '**Hugging Face开源LLM排行榜**（huggingface.co/spaces/open-llm-leaderboard）-- 追踪所有新发布模型的基准分数。',
            '**r/LocalLLaMA**（reddit.com/r/LocalLLaMA）-- 本地AI新闻、基准测试和硬件讨论最活跃的社区。',
            '**GitHub发布**：关注llama.cpp（github.com/ggerganov/llama.cpp）和Ollama（github.com/ollama/ollama）仓库以跟踪支持新模型的引擎更新。',
            '**PromptQuorum**：此指南在重大模型发布改变推荐时会更新。查看dateModified字段了解最新更新。',
          ],
        },
        regionalContext: {
          title: '本地LLM模型更新2026：区域背景',
          content: [
            '**中国（数据安全法）:** 中国《生成式人工智能服务管理暂行办法》（2023）规定，向公众提供AI服务的组织必须向监管部门登记模型。用于内部使用的本地部署不在此范围内。对于中文部署，Qwen3（阿里巴巴、Apache 2.0）和DeepSeek-R1（DeepSeek、MIT）是主要选择。Qwen3在Q3 2025进行了显著的模型系列更新 -- 仍使用Qwen2的组织应升级到Qwen3以获得改进的性能和扩展的29语言支持。',
            '**亚太地区（数据跨界）:** 东南亚和亚太地区的许多国家实施数据本地化要求。在跨国部署本地模型时，考虑数据驻留政策。Qwen3支持30多种亚太地区语言，使其成为多区域部署的理想选择。新加坡、日本、澳大利亚的金融机构可用本地推理来满足数据主权要求。',
            '**企业部署:** 2026年，中国大型企业部署本地LLM的关键考量包括：金融机构（交易数据敏感性）、医疗机构（患者隐私HIPAA等效）、律师事务所和政府承包商。Qwen3 72B或Llama 3.3 70B可在企业数据中心部署，提供GPU集群支持。部署成本：RTX 6000 Ada（约$6,500）提供企业级推理，5-10个并发用户场景成本约$30K-50K，相比云API年度成本优势显著。',
          ],
        },
        commonMistakes: {
          title: '追踪和升级本地LLM模型时的常见错误',
          items: [
            '**不必要地升级到每个新发布：** 新模型发布每月发生。如果当前模型满足用例，升级是可选的。仅当遇到具体质量限制时评估新模型：复杂任务上推理能力差、多语言输出弱或代码生成失败。为边际基准增益而下载4-40 GB模型是浪费时间和磁盘空间。',
            '**发布后查找Ollama中模型时使用错误的标签：** Hugging Face上的模型名与Ollama标签不同。Meta Llama 3.3在Ollama中是`llama3.3`，不是`llama-3.3`或`meta-llama-3.3`。使用脚本前，始终在ollama.com/library验证确切的Ollama标签。',
            '**在拉取新模型前未更新Ollama本身：** 新模型支持通常需要更新的Ollama版本。拉取最近发布的模型前，更新Ollama：macOS自动更新；Linux：重新运行`curl -fsSL https://ollama.com/install.sh | sh`；Windows：下载最新安装程序。运行过期的Ollama版本可能导致新模型无声失败。',
            '**假设对特定任务来说更新=更好：** Gemma 3 9B（2026年2月）在大多数基准上分数高于Llama 3.3 8B（2025年7月），但Llama 3.3 8B有18+个月的社区微调、系统提示和文档化用例。对于有社区资源的已建立工作流，旧模型可能是更好的实际选择。',
          ],
        },
        relatedReading: {
          id: 'related',
          title: '相关阅读',
          items: [
            '[2026最佳本地LLM](/zh/local-llms/best-local-llms-2026) -- 按任务、硬件和质量排名前5模型的当前排序。',
            '[LLM量子化解释](/zh/local-llms/llm-quantization-explained) -- 下载新模型发布时理解Q4_K_M与Q5_K_M。',
            '[Qwen vs Llama vs Mistral](/zh/local-llms/qwen-vs-llama-vs-mistral) -- 三大模型家族的完整基准对比，含最新2026数据。',
            '[2026本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide-2026) -- 拉取最新模型发布前检查硬件是否支持。',
            '[如何安装Ollama](/zh/local-llms/how-to-install-ollama) -- 更新Ollama并用正确版本标签拉取最新模型。',
            '[Ollama上的顶级开源模型](/zh/local-llms/top-open-source-models-ollama) -- 包含拉取命令和性能数据的完整可用模型库。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '2026年本地LLM模型更新的常见问题？',
          faqs: [
            {
              q: '新模型在开源发布后多久出现在Ollama中？',
              a: '通常1-7天用于Meta、Google、Mistral和Alibaba的重大发布。Ollama团队优先考虑高调发布 -- Llama 3.3 70B在Meta开源发布后3天出现在Ollama库中。更小或社区模型可能需要2-4周。',
            },
            {
              q: '我应该从Llama 3.3 8B升级到更新模型吗？',
              a: '如果你用Llama 3.3 8B处理一般任务且对质量满意，升级是可选的。Qwen3 7B基准分数略高，多语言和代码支持更好。对于大多数英文一般用途，实际质量差异很小。如果当前模型在特定任务上遇到困难，升级是值得的。',
            },
            {
              q: '本地模型会否达到当前前沿云模型的质量？',
              a: '趋势表明是的 -- 滞后18-24个月。GPT-4（2023、估计1.7万亿参数）由本地运行的Llama 3.3 70B（2025）匹配。GPT-5.5（2024）到2026年末或2027年可能有本地运行等价物。限制因素是计算效率，非算法能力。',
            },
            {
              q: 'DeepSeek发生了什么，为什么意义重大？',
              a: 'DeepSeek-R1（2025年1月）证明中国AI实验室能以较低训练成本开发与OpenAI o1竞争的推理能力模型。开源发布使前沿推理模型首次在本地可用。DeepSeek-R1 7B在MATH上达52% -- 几乎是Mistral Small的28%的两倍 -- 特别是因为其思维链训练方法。',
            },
            {
              q: 'Llama 4是什么，现在可本地运行吗？',
              a: '2026年4月，Meta发布了Llama 4 Scout预览 -- 混合专家模型，声称最高10M令牌上下文。完整的开源发布还不可用于本地推理。Ollama库还不包含Llama 4变体。当Llama 4可用于本地部署时此页面会更新。',
            },
            {
              q: '2026年本地是否有专针对企业或受管制行业的模型？',
              a: 'Mistral AI为Mistral模型提供企业级支持合同。其欧洲原产地与GDPR合规相关（欧盟AI法2025年2月生效）。用于医疗（HIPAA）或金融（SOC 2），任何本地部署模型都能满足数据驻留要求 -- 模型本身是数据中立的。合规工作在部署基础设施中，非模型选择中。',
            },
            {
              q: '完全初学者在2026年应从哪个模型开始？',
              a: 'Llama 3.2 3B或Gemma 3 4B是最佳初学者选择。两者都在有限硬件（4-6 GB VRAM）上运行，有广泛文档且在一般任务表现良好。Llama 3.2 3B有更多社区指南和工具集成。Gemma 3 4B更新、稍快且支持视觉能力。对于非技术用户，LM Studio使两者易于安装使用，无需命令行。',
            },
            {
              q: '如果我的当前模型运行良好，升级新模型值得花费精力吗？',
              a: '仅当遇到具体质量限制时。如果你的7B或8B模型满足用例，升级是可选的。仅当注意到推理错误、多语言支持差或代码能力弱时升级才值得。Qwen3 7B在大多数基准上超越Llama 3.3 8B，是追求增量改进的用户的安全升级目标。',
            },
            {
              q: '本地LLM是否支持中文？',
              a: 'Qwen3全系列、Llama 3.3 70B、Gemma 3和DeepSeek-R1都支持中文。Qwen3中文优化最充分，支持29种语言包括中文、日文和英文。即使是最小量化（Q3_K_M）也保持中文质量。',
            },
            {
              q: '代码生成最适合用哪个模型？',
              a: 'Qwen3-Coder全系列。DeepSeek-R1 7B/70B也很优秀。支持最新编程语言。对于专业开发者，Qwen3-Coder系列提供最佳代码补全和错误修复。',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            'Hugging Face。（2026）。"开源LLM排行榜"。https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard -- 所有开源模型发布的实时基准排名。',
            'Google DeepMind。（2026）。"Gemma 3技术报告"。https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf -- 所有Gemma 3变体的架构、基准和视觉能力数据。',
            'Meta AI。（2025）。"Llama 3.3发布"。https://ai.meta.com/blog/llama-3-3/ -- Llama 3.3 70B的官方声明和规格。',
            'DeepSeek AI。（2025）。"DeepSeek-R1技术论文"。https://arxiv.org/abs/2501.12948 -- DeepSeek-R1的思维链架构和MATH基准结果。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '本地LLM模型更新2026：所有重大开源权重发布',
        'url': 'https://www.promptquorum.com/zh/local-llms/local-llm-model-updates-2026',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Gemma 3' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': '开源LLM 2026' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '2026年Q1重大本地LLM发布',
        'url': 'https://www.promptquorum.com/zh/local-llms/local-llm-model-updates-2026',
        'numberOfItems': 4,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Gemma 3（全规格）',
            'description': '2026年2月由Google发布。全规格支持视觉。128K上下文。Apache 2.0。ollama run gemma3:9b',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Llama 4 Scout（预览）',
            'description': '2026年3月由Meta发布。MoE架构。声称10M令牌上下文。暂不在Ollama中可用。',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Mistral Small 3.2',
            'description': '2026年2月由Mistral AI发布。相比Small 3.1指令跟随改进。ollama run mistral-small3.2',
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Phi-4 Mini',
            'description': '2026年1月由Microsoft发布。3.8B参数。70% HumanEval。128K上下文。ollama run phi4-mini',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '新模型在开源发布后多久出现在Ollama中？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '通常1-7天用于Meta、Google、Mistral和Alibaba的重大发布。Ollama团队优先考虑高调发布 -- Llama 3.3 70B在Meta开源发布后3天出现在Ollama库中。更小或社区模型可能需要2-4周。',
            },
          },
          {
            '@type': 'Question',
            'name': '我应该从Llama 3.3 8B升级吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '如果对当前质量满意，升级是可选的。Qwen3 7B基准分数略高，多语言和代码支持更好。对大多数英文一般用途，实际质量差异很小。当遇到具体任务困难时升级值得。',
            },
          },
          {
            '@type': 'Question',
            'name': '本地模型会否达到前沿云模型质量？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '趋势表明是的 -- 滞后18-24个月。GPT-4（2023）由本地Llama 3.3 70B（2025）匹配。GPT-5.5（2024）到2026年末或2027年可能有本地等价物。',
            },
          },
          {
            '@type': 'Question',
            'name': 'DeepSeek有什么重要意义？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DeepSeek-R1（2025年1月）证明中国AI实验室能以较低成本开发与OpenAI o1竞争的推理模型。开源发布使前沿推理模型首次本地可用。DeepSeek-R1 7B在MATH达52%，是Mistral Small的28%的近两倍。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Llama 4现在可本地运行吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '2026年4月，Meta发布Llama 4 Scout预览 -- MoE模型声称10M令牌上下文。完整开源发布还不可用于本地推理。Ollama库还不包含Llama 4变体。当可用时此页面会更新。',
            },
          },
          {
            '@type': 'Question',
            'name': '企业或受管制行业是否有专用本地模型？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Mistral AI为Mistral模型提供企业级支持。其欧洲原产地与GDPR合规相关（欧盟AI法2025年2月生效）。任何本地部署模型都能满足数据驻留要求 -- 模型本身是数据中立的。合规工作在部署基础设施中。',
            },
          },
          {
            '@type': 'Question',
            'name': '初学者2026年应从哪个模型开始？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Llama 3.2 3B或Gemma 3 4B。两者都在有限硬件（4-6 GB VRAM）运行，有广泛文档且一般任务表现良好。Llama 3.2 3B社区指南更多。Gemma 3 4B更新、稍快且支持视觉。非技术用户可用LM Studio，无需命令行。',
            },
          },
          {
            '@type': 'Question',
            'name': '如果当前模型运行良好，升级值得吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '仅遇到具体质量限制时。如果满足用例，升级可选。当注意到推理错误、多语言差或代码能力弱时值得。Qwen3 7B超越Llama 3.3 8B，是追求增量改进的安全升级目标。',
            },
          },
          {
            '@type': 'Question',
            'name': '哪些模型支持中文？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3全系列、Llama 3.3 70B、Gemma 3和DeepSeek-R1都支持中文。Qwen3中文优化最充分，支持29种语言。即使最小量化也保持中文质量。',
            },
          },
          {
            '@type': 'Question',
            'name': '代码生成最适合哪个模型？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3-Coder全系列。DeepSeek-R1 7B/70B也很优秀。支持最新编程语言。对专业开发者，Qwen3-Coder提供最佳代码补全和错误修复。',
            },
          },
        ],
      },
    },
    fr: {
      theme: 'Meilleurs modèles',
      title: 'Mises à jour des LLM locaux 2026 : Chaque release open-weight majeure de l\'année',
      seoTitle: 'LLM locaux 2026: Gemma 3, Llama 4 et disponibilité Ollama',
      intro: 'En avril 2026, les mises à jour les plus importantes des LLM locaux de cette année incluent Meta Llama 3.3 70B (décembre 2025), DeepSeek-R1 (janvier 2025), les familles Qwen3 et Qwen3-Coder (septembre 2025), Microsoft Phi-4 (décembre 2024) et Google Gemma 3 (février 2026). Cet article suit toutes les releases de modèles majeurs avec leurs spécifications clés et la disponibilité Ollama.',
      metaDescription: 'Mises à jour LLM locaux 2026: Gemma 3, Llama 4 Scout, Q1 releases avec spécifications, benchmarks MMLU et Ollama. Avril 2026.',
      publishDate: '2026-04-04',
      readTime: '8 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'mises à jour des LLM locaux 2026',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Releases Q1 2026', anchor: '#q1-2026-releases' },
        { label: 'Releases Q4 2025', anchor: '#q4-2025-releases' },
        { label: 'Releases Q3 2025', anchor: '#q3-2025-releases' },
        { label: 'Amélioration de la qualité 2024 à 2026', anchor: '#quality-improvement' },
        { label: 'Comment rester à jour', anchor: '#how-to-stay-updated' },
        { label: 'Contexte régional', anchor: '#regional-context' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Lectures connexes', anchor: '#related-reading' },
        { label: 'Questions fréquentes', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Plus grande release Q1 2026** : Google Gemma 3 (février 2026) -- variantes 1B, 4B, 9B et 27B, support vision sur toutes les tailles, licence Apache 2.0.',
            '**Meilleure release de modèle de raisonnement** : DeepSeek-R1 (janvier 2025) -- chain-of-thought reasoning, 52% MATH à l\'échelle 7B, disruptif pour le paysage des benchmarks 7B.',
            '**Plus grand saut de qualité en 2025** : Llama 3.3 70B (décembre 2025) -- correspond à GPT-4 (2023) sur MMLU, disponible via `ollama run llama3.3:70b`.',
            '**Famille de modèles à la croissance la plus rapide en 2025** : Qwen3 -- a surpassé Mistral Small dans les téléchargements Ollama jusqu\'à Q4 2025.',
            'En avril 2026, l\'écart de qualité entre les modèles exécutables localement et les modèles cloud frontier s\'est réduit à environ 18-24 mois de capacité équivalente.',
          ],
        },
        q12026: {
          title: 'Quels modèles LLM locaux ont été publiés en Q1 2026 ?',
          content: 'En avril 2026, les releases de modèles open-weight notables de janvier à avril 2026. Tous les modèles ci-dessous sont disponibles dans divers formats de quantification -- voir [guide de quantification](/fr/local-llms/llm-quantization-explained) pour les détails des compromis Q4 vs Q5 :',
          image: '/images/q1-2026-model-releases-timeline-fr.svg',
          imageCaption: 'Chronologie des releases LLM locaux Q1 2026 : Phi-4 Mini (janvier, 3.8B), Gemma 3 (février, capacités vision sur toutes les tailles), Llama 4 Scout (mars, architecture MoE) et Mistral Small 3.2 (avril). Toutes les releases ajoutées à Ollama dans les jours suivant l\'annonce des poids open-weight.',
          rows: [
            { 'Modèle': 'Gemma 3 (toutes les tailles)', 'Publié': 'Février 2026', 'Développeur': 'Google', 'Caractéristique clé': 'Vision sur toutes les tailles, contexte 128K, Apache 2.0', 'Ollama': 'ollama run gemma3:9b' },
            { 'Modèle': 'Llama 4 Scout (aperçu)', 'Publié': 'Mars 2026', 'Développeur': 'Meta', 'Caractéristique clé': 'Aperçu d\'architecture MoE, contexte 10M tokens revendiqué', 'Ollama': 'Pas encore disponible' },
            { 'Modèle': 'Mistral Small 3.2', 'Publié': 'Février 2026', 'Développeur': 'Mistral AI', 'Caractéristique clé': 'Suivi d\'instructions amélioré par rapport à Small 3.1', 'Ollama': 'ollama run mistral-small3.2' },
            { 'Modèle': 'Phi-4 Mini', 'Publié': 'Janvier 2026', 'Développeur': 'Microsoft', 'Caractéristique clé': '3.8B, 70% HumanEval, contexte 128K', 'Ollama': 'ollama run phi4-mini' },
          ],
          columns: ['Modèle', 'Publié', 'Développeur', 'Caractéristique clé', 'Ollama'],
        },
        q42025: {
          title: 'Quels modèles Q4 2025 sont toujours les plus importants en 2026 ?',
          image: '/images/model-comparison-2026-fr.svg',
          imageCaption: 'Comparaison des modèles LLM locaux avril 2026 : Llama 3.3 70B en tête avec 82% MMLU et 42 GB VRAM, Qwen3 7B offre le meilleur support multilingue à 74% MMLU et 5 GB VRAM, Gemma 3 9B ajoute les capacités vision, DeepSeek-R1 7B spécialisé dans les tâches de raisonnement avec 52% MATH. Tous exécutables via Ollama.',
          rows: [
            { 'Modèle': 'Llama 3.3 70B', 'Publié': 'Décembre 2025', 'Specs clés': '82% MMLU, 88% HumanEval, contexte 128K', 'Toujours pertinent': 'Oui -- meilleure option 70B' },
            { 'Modèle': 'Phi-4 14B', 'Publié': 'Décembre 2024', 'Specs clés': '84% MMLU -- au-dessus de sa catégorie de taille', 'Toujours pertinent': 'Oui -- modèle de raisonnement 14B solide' },
            { 'Modèle': 'Famille Qwen3 complète', 'Publié': 'Septembre 2025', 'Specs clés': 'Gamme 0.5B-72B, 29 langues, Apache 2.0', 'Toujours pertinent': 'Oui -- meilleure famille multilingue actuellement' },
            { 'Modèle': 'DeepSeek-R1', 'Publié': 'Janvier 2025', 'Specs clés': 'Modèle de raisonnement, 52% MATH à 7B, MoE à grande échelle', 'Toujours pertinent': 'Oui -- meilleur raisonnement localement' },
          ],
          columns: ['Modèle', 'Publié', 'Specs clés', 'Toujours pertinent'],
        },
        q32025: {
          title: 'Quels modèles Q3 2025 sont toujours largement utilisés ?',
          content: [
            '**Plusieurs releases 2025 restent largement déployées en 2026 en raison de la compatibilité des outils et de la documentation communautaire :**',
          ],
          items: [
            '**Llama 3.3 8B** (juillet 2025) -- toujours le modèle 8B le mieux documenté, préféré des débutants pour ses guides complets et intégrations d\'outils.',
            '**Mistral Small v0.3** (mai 2025) -- scores de benchmark inférieurs aux alternatives actuelles, mais licence Apache 2.0 et provenance EU Mistral le rendent préféré dans certains déploiements européens.',
            '**Llama 3.2 3B et 1B** (septembre 2025) -- toujours la recommandation par défaut pour l\'installation initiale en raison de la petite taille et la documentation généralisée.',
          ],
        },
        whatChanged: {
          id: 'quality-improvement',
          title: 'De combien la qualité des LLM locaux a-t-elle progressé de 2024 à 2026 ?',
          content: [
            '**L\'amélioration de la qualité des modèles exécutables localement sur deux ans est substantielle.** En avril 2026, un modèle 7B (Qwen3 7B, 74% MMLU) correspond à la performance de benchmark d\'un modèle 13B du début 2024. Un modèle 70B (Llama 3.3 70B, 82% MMLU) correspond à la performance de GPT-4 (2023) -- un modèle qui nécessitait une infrastructure serveur d\'un milliard de dollars il y a 3 ans fonctionne maintenant sur un Mac Studio. Pour les recommandations matérielles correspondant à chaque classe de modèle, voir [guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026).',
          ],
          image: '/images/llm-quality-improvement-2024-2026-fr.svg',
          imageCaption: 'Amélioration de la qualité des LLM locaux 2024-2026 : les modèles de classe 7B se sont améliorés de 64% MMLU (Mistral Small, début 2024) à 74% (Qwen3 7B, avril 2026). La classe 70B s\'est améliorée de 75% (Llama 3.3 70B) à 82-84% (Llama 3.3 70B et Qwen3 72B). Tous les 18-24 mois, la qualité des modèles locaux progresse d\'une génération.',
          rows: [
            { 'Période': 'Début 2024', 'Meilleur 7B MMLU': '~64% (Mistral Small)', 'Meilleur 70B local MMLU': '~75% (Llama 3.3 70B)', 'Matériel requis': '7B : 8 GB RAM ; 70B : 48 GB RAM' },
            { 'Période': 'Fin 2025', 'Meilleur 7B MMLU': '~74% (Qwen3 7B)', 'Meilleur 70B local MMLU': '~82% (Llama 3.3 70B)', 'Matériel requis': '7B : 5 GB RAM ; 70B : 40 GB RAM' },
            { 'Période': 'Avril 2026', 'Meilleur 7B MMLU': '~74% (Qwen3 7B)', 'Meilleur 70B local MMLU': '~84% (Qwen3 72B)', 'Matériel requis': '7B : 4.7 GB RAM ; 70B : 43 GB RAM' },
          ],
          columns: ['Période', 'Meilleur 7B MMLU', 'Meilleur 70B local MMLU', 'Matériel requis'],
        },
        stayUpdated: {
          title: 'Comment rester à jour sur les nouvelles releases de LLM locaux ?',
          items: [
            '**Blog Ollama** (ollama.com/blog) -- annonce les nouveaux modèles ajoutés à la bibliothèque Ollama, généralement dans les jours suivant les releases open-weight.',
            '**Hugging Face Open LLM Leaderboard** (huggingface.co/spaces/open-llm-leaderboard) -- suit les scores de benchmark pour tous les modèles nouvellement publiés.',
            '**r/LocalLLaMA** (reddit.com/r/LocalLLaMA) -- la communauté la plus active pour les nouvelles IA locales, benchmarks et discussions matérielles.',
            '**GitHub Releases** : suivez les repositories pour llama.cpp (github.com/ggerganov/llama.cpp) et Ollama (github.com/ollama/ollama) pour suivre les mises à jour du moteur qui activent les nouveaux modèles.',
            '**PromptQuorum** : ce guide est mis à jour lorsque les grandes releases de modèles changent les recommandations. Vérifiez le champ dateModified pour la mise à jour la plus récente.',
          ],
        },
        regionalContext: {
          title: 'Mises à jour des LLM locaux 2026 : Contexte régional',
          content: [
            '**UE / RGPD + AI Act** : l\'AI Act de l\'UE (en vigueur depuis février 2025) a introduit des exigences de documentation pour les systèmes d\'IA dans les contextes réglementés. Lorsque de nouveaux modèles locaux sortent en 2026, les organisations de l\'UE doivent noter : Mistral AI (France) reste le seul développeur majeur de modèles open-weight basé en UE. Mistral Small 3.2 (février 2026) et Mistral Small portent toujours des licences Apache 2.0 -- le choix de conformité le plus propre pour les secteurs réglementés. German BSI et French CNIL recommandent tous deux l\'inférence locale pour les applications d\'IA à haut risque. Pour les modèles non-UE (Llama, Qwen, Gemma, DeepSeek) : tous peuvent être utilisés en vertu du RGPD pour l\'inférence locale puisqu\'aucune donnée ne quitte l\'organisation. La différence de conformité réside dans la documentation du fournisseur, non dans le traitement des données. Lors de la mise à niveau vers un nouveau modèle, mettez à jour la documentation de l\'outil IA avec la nouvelle version de modèle, le niveau de quantification et le nom du fichier GGUF. **CNIL - Données sensibles** : la Commission Nationale de l\'Informatique et des Libertés (CNIL) recommande l\'inférence locale lorsqu\'elle traite des données professionnelles sensibles (données financières, médicales, légales). L\'utilisation de modèles locaux open-weight pour ces cas d\'usage satisfait aux recommandations de la CNIL sans modification supplémentaire.',
            '**Japon (METI)** : les lignes directrices de gouvernance IA du METI exigent de documenter les changements de version de modèle dans les systèmes d\'IA en production. Lors de la mise à niveau de Llama 3.3 8B vers un modèle plus récent, documentez : balise de modèle antérieure, nouvelle balise de modèle, date de mise à niveau et raison du changement. La commande `ollama show <model>` fournit la chaîne de version exacte pour les dossiers de conformité. Pour les déploiements en langue japonaise, Qwen3 reste la famille recommandée en 2026 en raison de son tokenizer CJK natif.',
            '**Chine** : selon les mesures provisoires chinoises sur l\'IA générative du CAC (2023), les organisations qui fournissent des services d\'IA au public doivent enregistrer les modèles auprès des régulateurs. Les déploiements locaux pour utilisation interne se situent en dehors de cette portée. Pour les déploiements en langue chinoise, Qwen3 (Alibaba, Apache 2.0) et DeepSeek-R1 (DeepSeek, MIT) sont les options principales. Qwen3 a reçu des mises à jour majeures de la famille de modèles en Q3 2025 -- les organisations utilisant toujours Qwen2 devraient mettre à niveau vers Qwen3 pour des performances améliorées et le support étendu de 29 langues.',
          ],
        },
        commonMistakes: {
          title: 'Erreurs courantes lors du suivi et de la mise à niveau des modèles LLM locaux',
          items: [
            '**Mise à niveau inutile vers chaque nouvelle release** : les releases de nouveaux modèles se produisent mensuellement. Si votre modèle actuel satisfait votre cas d\'utilisation, la mise à niveau est facultative. Évaluez un nouveau modèle uniquement lorsque vous atteignez des limites de qualité spécifiques : raisonnement faible sur les tâches complexes, sortie multilingue faible ou échecs de codage. Télécharger un modèle de 4-40 GB pour des gains de benchmark marginaux est du temps et de l\'espace disque gaspillés.',
            '**Utilisation du mauvais slug lors de la recherche de modèles dans Ollama après une release** : les noms de modèles sur Hugging Face diffèrent des balises Ollama. Meta Llama 3.3 est `llama3.3` dans Ollama, pas `llama-3.3` ou `meta-llama-3.3`. Vérifiez toujours la balise Ollama exacte sur ollama.com/library avant de l\'utiliser dans les scripts.',
            '**Ne pas mettre à jour Ollama lui-même avant de tirer les nouveaux modèles** : le support des nouveaux modèles nécessite souvent une version Ollama mise à jour. Avant de tirer un modèle récemment publié, mettez à jour Ollama : macOS se met à jour automatiquement ; Linux : réexécutez `curl -fsSL https://ollama.com/install.sh | sh`; Windows : téléchargez le dernier installateur. L\'exécution d\'une version Ollama obsolète peut causer l\'échec silencieux d\'un nouveau modèle.',
            '**Supposer que plus récent = meilleur pour votre tâche spécifique** : Gemma 3 9B (février 2026) a des scores plus élevés que Llama 3.3 8B (juillet 2025) sur la plupart des benchmarks, mais Llama 3.3 8B a 18+ mois de fine-tunes communautaires, de prompts système et de cas d\'utilisation documentés. Pour les workflows établis avec des ressources communautaires, le modèle plus ancien peut être le meilleur choix pratique.',
          ],
        },
        relatedReading: {
          id: 'related',
          title: 'Lectures connexes',
          items: [
            '[Meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) -- classements actuels des 5 meilleurs modèles par tâche, matériel et qualité incluant toutes les releases 2026.',
            '[Quantification LLM expliquée](/fr/local-llms/llm-quantization-explained) -- comprenez Q4_K_M vs Q5_K_M lors du téléchargement de nouvelles releases de modèles.',
            '[Qwen vs Llama vs Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral) -- comparaison complète de benchmark des trois principales familles de modèles avec données 2026 les plus récentes.',
            '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) -- vérifiez si votre matériel supporte les dernières releases de modèles avant de les télécharger.',
            '[Installer Ollama](/fr/local-llms/how-to-install-ollama) -- mettez à jour Ollama et tirez les derniers modèles avec les balises de version correctes.',
            '[Top modèles open source sur Ollama](/fr/local-llms/top-open-source-models-ollama) -- bibliothèque complète des modèles disponibles avec commandes pull et données de performance.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquentes sur les mises à jour des modèles LLM locaux en 2026 ?',
          faqs: [
            { q: 'À quelle vitesse les nouveaux modèles apparaissent-ils dans Ollama après leur release open-weight ?', a: 'Généralement 1-7 jours pour les releases majeures de Meta, Google, Mistral et Alibaba. L\'équipe Ollama priorise les releases très connues -- Llama 3.3 70B est apparu dans la bibliothèque Ollama 3 jours après la release open-weight de Meta. Les modèles plus petits ou communautaires peuvent prendre 2-4 semaines.' },
            { q: 'Dois-je mettre à niveau Llama 3.3 8B vers un modèle plus récent ?', a: 'Si vous utilisez Llama 3.3 8B pour des tâches générales et êtes satisfait de la qualité, la mise à niveau est facultative. Qwen3 7B a des scores de benchmark légèrement plus élevés et un meilleur support multilingue et de codage. Pour la plupart des utilisations générales en anglais, la différence de qualité pratique est mineure. Mettez à niveau si votre modèle actuel rencontre des problèmes sur des tâches spécifiques.' },
            { q: 'Les modèles locaux atteindront-ils un jour la qualité actuelle des modèles cloud frontier ?', a: 'La tendance suggère oui -- avec un décalage de 18-24 mois. GPT-4 (2023, estimé à 1.7 trillion de paramètres) correspond à Llama 3.3 70B (2025, exécutable localement). GPT-5.5 (2024) aura probablement un équivalent exécutable localement d\'ici fin 2026 ou 2027. Le facteur limitant est l\'efficacité de calcul, non la capacité algorithmique.' },
            { q: 'Qu\'est-il arrivé avec DeepSeek et pourquoi c\'était significatif ?', a: 'DeepSeek-R1 (janvier 2025) a démontré qu\'un laboratoire d\'IA chinois pouvait produire des modèles dotés de capacités de raisonnement compétitives avec OpenAI o1 à des coûts d\'entraînement inférieurs. La release open-weight rendait un modèle de raisonnement de classe frontier disponible localement pour la première fois. DeepSeek-R1 7B atteint 52% en MATH -- près du double des 28% de Mistral Small -- en raison de sa méthodologie d\'entraînement chain-of-thought.' },
            { q: 'Qu\'est-ce que Llama 4 et est-il disponible localement pour le moment ?', a: 'En avril 2026, Meta a publié un aperçu de Llama 4 Scout -- un modèle mixture-of-experts prétendant jusqu\'à 10M de contexte de tokens. La release open-weight complète n\'est pas encore disponible pour l\'inférence locale. La bibliothèque Ollama n\'inclut pas encore de variantes Llama 4. Cette page sera mise à jour lorsque Llama 4 deviendra disponible pour le déploiement local.' },
            { q: 'Y a-t-il des modèles locaux spécifiquement pour l\'entreprise ou les industries réglementées en 2026 ?', a: 'Mistral AI fournit des contrats de support de niveau entreprise pour les modèles Mistral. Leur origine européenne est pertinente pour la conformité RGPD (AI Act de l\'UE en vigueur depuis février 2025). Pour la santé (HIPAA) ou la finance (SOC 2), tout modèle déployé localement peut satisfaire les exigences de résidence des données -- le modèle lui-même est neutre en matière de données. Le travail de conformité réside dans l\'infrastructure de déploiement, non dans la sélection du modèle.' },
            { q: 'Quel modèle un débutant complet devrait-il commencer en 2026 ?', a: 'Llama 3.2 3B ou Gemma 3 4B sont les meilleures options pour débutants. Les deux fonctionnent sur du matériel modeste (4-6 GB VRAM), disposent d\'une documentation complète et fonctionnent bien sur les tâches générales. Llama 3.2 3B dispose de plus de guides communautaires et d\'intégrations d\'outils. Gemma 3 4B est plus récent, légèrement plus rapide et supporte les capacités de vision. Pour les utilisateurs non techniques, LM Studio rend les deux faciles à installer et utiliser sans ligne de commande.' },
            { q: 'La mise à niveau vers les nouveaux modèles en vaut-elle la peine si mon modèle actuel fonctionne bien ?', a: 'Uniquement si vous atteignez des limites de qualité spécifiques. Si votre modèle 7B ou 8B satisfait vos cas d\'utilisation, la mise à niveau est facultative. Cependant, si vous remarquez des erreurs de raisonnement, un support multilingue faible ou une faible capacité de codage, tester un modèle plus récent vaut la peine. Qwen3 7B (2025) surpasse Llama 3.3 8B sur la plupart des benchmarks et est une cible de mise à niveau sûre pour les utilisateurs cherchant une amélioration progressive.' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Hugging Face. (2026). « Open LLM Leaderboard ». https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard -- Classements de benchmark en temps réel pour toutes les releases de modèles open-weight.',
            'Google DeepMind. (2026). « Gemma 3 Technical Report ». https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf -- Architecture, benchmarks et données de capacité vision pour toutes les variantes Gemma 3.',
            'Meta AI. (2025). « Llama 3.3 Release ». https://ai.meta.com/blog/llama-3-3/ -- Annonce officielle et spécifications pour Llama 3.3 70B.',
            'DeepSeek AI. (2025). « DeepSeek-R1 Technical Paper ». https://arxiv.org/abs/2501.12948 -- Architecture chain-of-thought et résultats de benchmark MATH pour DeepSeek-R1.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Mises à jour des LLM locaux 2026 : Chaque release open-weight majeure de l\'année',
        'url': 'https://www.promptquorum.com/fr/local-llms/local-llm-model-updates-2026',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'proficiencyLevel': 'Intermediate',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
        'about': [
          { '@type': 'Thing', 'name': 'Gemma 3' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'Open-Weight LLM 2026' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Releases LLM locaux majeurs Q1 2026',
        'url': 'https://www.promptquorum.com/fr/local-llms/local-llm-model-updates-2026',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Gemma 3 (toutes les tailles)', 'description': 'Publié février 2026 par Google. Vision sur toutes les tailles. Contexte 128K. Apache 2.0. ollama run gemma3:9b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Llama 4 Scout (aperçu)', 'description': 'Publié mars 2026 par Meta. Architecture MoE. Contexte 10M tokens revendiqué. Pas encore disponible dans Ollama.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mistral Small 3.2', 'description': 'Publié février 2026 par Mistral AI. Suivi d\'instructions amélioré par rapport à Small 3.1. ollama run mistral-small3.2' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Phi-4 Mini', 'description': 'Publié janvier 2026 par Microsoft. 3.8B paramètres. 70% HumanEval. Contexte 128K. ollama run phi4-mini' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'À quelle vitesse les nouveaux modèles apparaissent-ils dans Ollama après leur release open-weight ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Généralement 1-7 jours pour les releases majeures de Meta, Google, Mistral et Alibaba. L\'équipe Ollama priorise les releases très connues -- Llama 3.3 70B est apparu dans la bibliothèque Ollama 3 jours après la release open-weight de Meta. Les modèles plus petits ou communautaires peuvent prendre 2-4 semaines.' } },
          { '@type': 'Question', 'name': 'Dois-je mettre à niveau Llama 3.3 8B vers un modèle plus récent ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Si vous utilisez Llama 3.3 8B pour des tâches générales et êtes satisfait de la qualité, la mise à niveau est facultative. Qwen3 7B a des scores de benchmark légèrement plus élevés et un meilleur support multilingue et de codage. Pour la plupart des utilisations générales en anglais, la différence de qualité pratique est mineure.' } },
          { '@type': 'Question', 'name': 'Les modèles locaux atteindront-ils un jour la qualité actuelle des modèles cloud frontier ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'La tendance suggère oui -- avec un décalage de 18-24 mois. GPT-4 (2023) correspond à Llama 3.3 70B (2025, exécutable localement). GPT-5.5 (2024) aura probablement un équivalent exécutable localement d\'ici fin 2026 ou 2027.' } },
          { '@type': 'Question', 'name': 'Qu\'est-il arrivé avec DeepSeek et pourquoi c\'était significatif ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'DeepSeek-R1 (janvier 2025) a démontré qu\'un laboratoire d\'IA chinois pouvait produire des modèles dotés de capacités de raisonnement compétitives avec OpenAI o1 à des coûts d\'entraînement inférieurs. La release open-weight rendait un modèle de raisonnement de classe frontier disponible localement pour la première fois. DeepSeek-R1 7B atteint 52% en MATH vs 28% pour Mistral Small en raison de son entraînement chain-of-thought.' } },
          { '@type': 'Question', 'name': 'Qu\'est-ce que Llama 4 et est-il disponible localement pour le moment ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'En avril 2026, Meta a publié un aperçu de Llama 4 Scout -- un modèle mixture-of-experts prétendant jusqu\'à 10M de contexte de tokens. La release open-weight complète n\'est pas encore disponible pour l\'inférence locale. La bibliothèque Ollama n\'inclut pas encore de variantes Llama 4.' } },
          { '@type': 'Question', 'name': 'Y a-t-il des modèles locaux spécifiquement pour l\'entreprise ou les industries réglementées ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Mistral AI fournit des contrats de support de niveau entreprise pour les modèles Mistral. Leur origine européenne est pertinente pour la conformité RGPD en vertu de l\'AI Act de l\'UE (en vigueur depuis février 2025). Tout modèle déployé localement peut satisfaire les exigences de résidence des données -- le travail de conformité réside dans l\'infrastructure de déploiement, non dans la sélection du modèle.' } },
          { '@type': 'Question', 'name': 'Quel modèle un débutant complet devrait-il commencer en 2026 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.2 3B ou Gemma 3 4B. Les deux fonctionnent sur du matériel modeste (4-6 GB VRAM), disposent d\'une documentation complète et fonctionnent bien sur les tâches générales. Llama 3.2 3B dispose de plus de guides communautaires. Gemma 3 4B est plus récent, légèrement plus rapide et supporte les capacités de vision. Pour les utilisateurs non techniques, LM Studio rend les deux faciles sans ligne de commande.' } },
          { '@type': 'Question', 'name': 'La mise à niveau vers les nouveaux modèles en vaut-elle la peine si mon modèle actuel fonctionne bien ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Uniquement si vous atteignez des limites de qualité spécifiques. Si votre modèle 7B ou 8B satisfait vos cas d\'utilisation, la mise à niveau est facultative. Cependant, si vous remarquez des erreurs de raisonnement, un support multilingue faible ou une faible capacité de codage, tester un modèle plus récent vaut la peine. Qwen3 7B est une cible de mise à niveau sûre pour une amélioration progressive.' } },
        ],
      },
    },
  ko: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: '로컬 LLM 모델 업데이트 2026: 올해 출시된 주요 오픈 웨이트 모델 총정리',
      seoTitle: '로컬 LLM 2026: 주요 모델 출시 현황 + Ollama 지원 여부',
      intro: '2026년 4월 기준, 올해의 가장 중요한 로컬 LLM 출시 모델로는 Meta Llama 3.3 70B (2025년 12월), DeepSeek-R1 (2025년 1월), Qwen3 및 Qwen3-Coder 패밀리 (2025년 9월), Microsoft Phi-4 (2024년 12월), 그리고 Google Gemma 3 (2026년 2월)가 있습니다. 본 문서는 모든 주요 모델 출시 현황을 주요 사양 및 Ollama 지원 여부와 함께 추적합니다.',
      metaDescription: '로컬 LLM 모델 업데이트 2026: Gemma 3, Llama 4 Scout, Q1 출시 모델을 사양, MMLU 벤치마크, Ollama 지원 여부와 함께 정리했습니다. 2026년 4월 기준.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**2026년 4월 기준, 올해의 가장 중요한 로컬 LLM 출시 모델로는 Meta Llama 3.3 70B (2025년 12월), DeepSeek-R1 (2025년 1월), Qwen3 및 Qwen3-Coder 패밀리 (2025년 9월), Microsoft Phi-4 (2024년 12월)가 있습니다.**',
      audience: '소비자용 하드웨어에서 처음으로 로컬 LLM을 실행하는 초보자',
      readTime: '8분 소요',
      educationalLevel: 'Beginner',
      primaryTerm: '로컬 LLM 업데이트 2026',
      toc: [
        { label: '핵심 요약', anchor: '#key-takeaways' },
        { label: '2026년 Q1 출시 모델', anchor: '#q1-2026-releases' },
        { label: '2025년 Q4 출시 모델', anchor: '#q4-2025-releases' },
        { label: '2025년 Q3 출시 모델', anchor: '#q3-2025-releases' },
        { label: '2024년부터 2026년까지의 품질 향상', anchor: '#quality-improvement' },
        { label: '최신 정보를 유지하는 방법', anchor: '#how-to-stay-updated' },
        { label: '지역별 컨텍스트', anchor: '#regional-context' },
        { label: '일반적인 실수', anchor: '#common-mistakes' },
        { label: '관련 자료', anchor: '#related-reading' },
        { label: '자주 묻는 질문', anchor: '#faq' },
        { label: '출처', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**2026년 Q1 최대 출시작**: Google Gemma 3 (2026년 2월) -- 1B, 4B, 9B, 27B 변형, 모든 크기에서 비전 지원, Apache 2.0 라이선스.',
            '**최고의 추론 모델 출시**: DeepSeek-R1 (2025년 1월) -- 연쇄 사고 추론 방식, 7B 규모에서 MATH 52% 달성, 7B 벤치마크 구도를 뒤흔들었습니다.',
            '**2025년 가장 큰 품질 도약**: Llama 3.3 70B (2025년 12월) -- MMLU에서 GPT-4 (2023년)와 동등한 성능, `ollama run llama3.3:70b`로 실행 가능합니다.',
            '**2025년 가장 빠르게 성장한 모델 패밀리**: Qwen3 -- 2025년 Q4 기준 Ollama 다운로드 수에서 Mistral Small을 추월했습니다.',
            '2026년 4월 기준, 로컬에서 실행 가능한 모델과 최첨단 클라우드 모델 사이의 품질 격차는 약 18~24개월의 성능 차이로 좁혀졌습니다.',
          ],
        },
        q12026: {
          title: '2026년 Q1에 출시된 로컬 LLM 모델은 무엇입니까?',
          content: '2026년 4월 기준, 2026년 1월~4월 사이에 출시된 주목할 만한 오픈 웨이트 모델들입니다. 아래의 모든 모델은 다양한 양자화 형식으로 제공됩니다 -- Q4 대비 Q5 트레이드오프에 대한 자세한 내용은 [양자화 가이드](/local-llms/llm-quantization-explained)를 참조하십시오.',
          image: '/images/q1-2026-model-releases-timeline-en.svg',
          imageCaption: '2026년 Q1 로컬 LLM 출시 타임라인: Phi-4 Mini (1월, 3.8B), Gemma 3 (2월, 모든 크기에서 비전 지원), Llama 4 Scout (3월, MoE 아키텍처), Mistral Small 3.2 (4월). 모두 오픈 웨이트 발표 후 며칠 내에 Ollama에 출시되었습니다.',
          rows: [
            { 'Model': 'Gemma 3 (전 크기)', 'Released': '2026년 2월', 'Developer': 'Google', 'Key Feature': '모든 크기에서 비전 지원, 128K 컨텍스트, Apache 2.0', 'Ollama': 'ollama run gemma3:9b' },
            { 'Model': 'Llama 4 Scout (프리뷰)', 'Released': '2026년 3월', 'Developer': 'Meta', 'Key Feature': 'MoE 아키텍처 프리뷰, 10M 토큰 컨텍스트 주장', 'Ollama': '아직 사용 불가' },
            { 'Model': 'Mistral Small 3.2', 'Released': '2026년 2월', 'Developer': 'Mistral AI', 'Key Feature': 'Small 3.1 대비 향상된 명령어 수행 능력', 'Ollama': 'ollama run mistral-small3.2' },
            { 'Model': 'Phi-4 Mini', 'Released': '2026년 1월', 'Developer': 'Microsoft', 'Key Feature': '3.8B, HumanEval 70%, 128K 컨텍스트', 'Ollama': 'ollama run phi4-mini' },
          ],
          columns: ['Model', 'Released', 'Developer', 'Key Feature', 'Ollama'],
        },
        q42025: {
          title: '2026년에도 가장 중요한 2025년 Q4 모델은 무엇입니까?',
          image: '/images/model-comparison-2026-en.svg',
          imageCaption: '2026년 4월 로컬 LLM 모델 비교: Llama 3.3 70B는 42GB VRAM으로 MMLU 82%를 달성하며 선두를 유지하고, Qwen3 7B는 5GB VRAM으로 MMLU 74%의 최고 다국어 지원을 제공하며, Gemma 3 9B는 비전 기능을 추가하고, DeepSeek-R1 7B는 MATH 52%로 추론 작업에 특화되어 있습니다. 모두 Ollama를 통해 실행 가능합니다.',
          rows: [
            { 'Model': 'Llama 3.3 70B', 'Released': '2025년 12월', 'Key Specs': 'MMLU 82%, HumanEval 88%, 128K 컨텍스트', 'Still Relevant': '예 -- 최고의 70B 옵션' },
            { 'Model': 'Phi-4 14B', 'Released': '2024년 12월', 'Key Specs': 'MMLU 84% -- 파라미터 규모를 초월한 성능', 'Still Relevant': '예 -- 강력한 14B 추론 모델' },
            { 'Model': 'Qwen3 전 패밀리', 'Released': '2025년 9월', 'Key Specs': '0.5B~72B 범위, 29개 언어, Apache 2.0', 'Still Relevant': '예 -- 현재 최고의 다국어 패밀리' },
            { 'Model': 'DeepSeek-R1', 'Released': '2025년 1월', 'Key Specs': '추론 모델, 7B에서 MATH 52%, 대규모에서 MoE 아키텍처', 'Still Relevant': '예 -- 로컬 최고의 추론 모델' },
          ],
          columns: ['Model', 'Released', 'Key Specs', 'Still Relevant'],
        },
        q32025: {
          title: '현재도 널리 사용되는 2025년 Q3 모델은 무엇입니까?',
          content: [
            '**도구 호환성과 커뮤니티 문서화 덕분에 여러 2025년 출시 모델이 2026년에도 광범위하게 사용되고 있습니다:**',
          ],
          items: [
            '**Llama 3.3 8B** (2025년 7월) -- 방대한 가이드와 도구 통합으로 가장 문서화가 잘 된 8B 모델로 초보자들이 선호합니다.',
            '**Mistral Small v0.3** (2025년 5월) -- 현재 대안들보다 벤치마크 점수가 낮지만, Apache 2.0 라이선스와 Mistral EU 출처 덕분에 일부 유럽 배포 환경에서 선호됩니다.',
            '**Llama 3.2 3B 및 1B** (2025년 9월) -- 작은 크기와 광범위한 문서화로 여전히 첫 번째 설치 추천 모델입니다.',
          ],
        },
        whatChanged: {
          id: 'quality-improvement',
          title: '2024년부터 2026년까지 로컬 LLM 품질은 얼마나 향상되었습니까?',
          content: [
            '**로컬에서 실행 가능한 모델 품질의 2년간 향상은 상당합니다.** 2026년 4월 기준, 7B 모델(Qwen3 7B, MMLU 74%)은 2024년 초 13B 모델의 벤치마크 성능과 동등합니다. 70B 모델(Llama 3.3 70B, MMLU 82%)은 GPT-4 (2023년) 성능과 동등한데, 3년 전에는 수십억 달러의 서버 인프라가 필요하던 모델이 이제 Mac Studio에서 실행됩니다. 각 모델 클래스에 맞는 하드웨어 추천은 [로컬 LLM 하드웨어 가이드 2026](/local-llms/local-llm-hardware-guide-2026)을 참조하십시오.',
          ],
          image: '/images/llm-quality-improvement-2024-2026-en.svg',
          imageCaption: '로컬 LLM 품질 향상 2024~2026: 7B급 모델은 MMLU 64% (Mistral Small, 2024년 초)에서 74% (Qwen3 7B, 2026년 4월)로 향상되었습니다. 70B급은 75% (Llama 3.3 70B)에서 82~84% (Llama 3.3 70B 및 Qwen3 72B)로 향상되었습니다. 18~24개월마다 로컬 모델 품질이 한 세대 발전합니다.',
          rows: [
            { 'Year': '2024년 초', 'Best 7B MMLU': '~64% (Mistral Small)', 'Best Local 70B MMLU': '~75% (Llama 3.3 70B)', 'Hardware Needed': '7B: RAM 8 GB; 70B: RAM 48 GB' },
            { 'Year': '2025년 후반', 'Best 7B MMLU': '~74% (Qwen3 7B)', 'Best Local 70B MMLU': '~82% (Llama 3.3 70B)', 'Hardware Needed': '7B: RAM 5 GB; 70B: RAM 40 GB' },
            { 'Year': '2026년 4월', 'Best 7B MMLU': '~74% (Qwen3 7B)', 'Best Local 70B MMLU': '~84% (Qwen3 72B)', 'Hardware Needed': '7B: RAM 4.7 GB; 70B: RAM 43 GB' },
          ],
          columns: ['Year', 'Best 7B MMLU', 'Best Local 70B MMLU', 'Hardware Needed'],
        },
        stayUpdated: {
          title: '새로운 로컬 LLM 출시 정보를 어떻게 최신 상태로 유지합니까?',
          items: [
            '**Ollama 블로그** (ollama.com/blog) -- 오픈 웨이트 출시 후 보통 며칠 내에 Ollama 라이브러리에 추가된 새 모델을 발표합니다.',
            '**Hugging Face Open LLM Leaderboard** (huggingface.co/spaces/open-llm-leaderboard) -- 새로 출시된 모든 모델의 벤치마크 점수를 실시간으로 추적합니다.',
            '**r/LocalLLaMA** (reddit.com/r/LocalLLaMA) -- 로컬 AI 뉴스, 벤치마크, 하드웨어 논의를 위한 가장 활발한 커뮤니티입니다.',
            '**GitHub Releases**: llama.cpp (github.com/ggerganov/llama.cpp) 및 Ollama (github.com/ollama/ollama) 저장소를 팔로우하여 새 모델을 지원하는 엔진 업데이트를 추적하십시오.',
            '**PromptQuorum**: 주요 모델 출시로 추천 사항이 변경될 때 이 가이드가 업데이트됩니다. 가장 최근 업데이트는 dateModified 필드를 확인하십시오.',
          ],
        },
        regionalContext: {
          title: '로컬 LLM 모델 업데이트 2026: 지역별 컨텍스트',
          content: [
            '**EU / GDPR + AI 법**: 2025년 2월부터 발효된 EU AI 법은 규제 환경에서 사용되는 AI 시스템에 대한 문서화 요구 사항을 도입했습니다. 2026년에 새로운 로컬 모델이 출시됨에 따라 EU 조직들은 다음을 유의해야 합니다: Mistral AI (프랑스)는 주요 EU 기반 오픈 웨이트 모델 개발사로 유일합니다. Mistral Small 3.2 (2026년 2월)와 Mistral Small은 계속해서 Apache 2.0 라이선스를 제공합니다 -- 규제 분야에서 가장 깔끔한 컴플라이언스 선택입니다. 독일 BSI와 프랑스 CNIL은 고위험 AI 애플리케이션에 로컬 추론을 권장합니다. EU 외 모델(Llama, Qwen, Gemma, DeepSeek)의 경우: 데이터가 조직 외부로 나가지 않으므로 로컬 추론에서 GDPR 하에 모두 사용 가능합니다. 컴플라이언스 차이는 공급업체 문서화에 있으며 데이터 처리 방식에 있지 않습니다. 새 모델로 업그레이드할 때는 AI 도구 문서를 새 모델 버전, 양자화 수준, GGUF 파일명으로 업데이트하십시오.',
            '**일본 (METI)**: METI AI 거버넌스 가이드라인은 프로덕션 AI 시스템에서 모델 버전 변경 사항을 문서화하도록 요구합니다. Llama 3.3 8B에서 최신 모델로 업그레이드할 때 이전 모델 태그, 새 모델 태그, 업그레이드 날짜, 변경 이유를 문서화하십시오. `ollama show <model>` 명령어는 컴플라이언스 기록을 위한 정확한 버전 문자열을 제공합니다. 일본어 배포 환경에서는 네이티브 CJK 토크나이저 덕분에 2026년에도 Qwen3 패밀리가 추천됩니다.',
            '**중국**: 중국 CAC 생성형 AI 임시 조치 (2023년)에 따라, 대중에게 AI 서비스를 제공하는 조직은 규제 당국에 모델을 등록해야 합니다. 내부 사용을 위한 로컬 배포는 이 범위에 해당하지 않습니다. 중국어 배포 환경에서는 Qwen3 (Alibaba, Apache 2.0)와 DeepSeek-R1 (DeepSeek, MIT)가 주요 선택지입니다. Qwen3는 2025년 Q3에 주요 모델 패밀리 업데이트를 받았습니다 -- 여전히 Qwen2를 실행하는 조직은 향상된 성능과 확장된 29개 언어 지원을 위해 Qwen3로 업그레이드해야 합니다.',
          ],
        },
        commonMistakes: {
          title: '로컬 LLM 모델 추적 및 업그레이드 시 일반적인 실수',
          items: [
            '**불필요하게 모든 새 출시 버전으로 업그레이드하기**: 새 모델 출시는 매달 이루어집니다. 현재 모델이 사용 목적을 충족한다면 업그레이드는 선택 사항입니다. 특정 품질 한계에 도달했을 때만 새 모델을 평가하십시오: 복잡한 작업에서의 낮은 추론 능력, 약한 다국어 출력, 또는 코딩 실패. 미미한 벤치마크 향상을 위해 4~40 GB 모델을 다운로드하는 것은 시간과 디스크 공간 낭비입니다.',
            '**출시 후 Ollama에서 모델을 조회할 때 잘못된 슬러그 사용**: Hugging Face의 모델 이름과 Ollama 태그는 다릅니다. Meta Llama 3.3은 Ollama에서 `llama3.3`으로 표시되며, `llama-3.3` 또는 `meta-llama-3.3`이 아닙니다. 스크립트에서 사용하기 전에 항상 ollama.com/library에서 정확한 Ollama 태그를 확인하십시오.',
            '**새 모델을 가져오기 전에 Ollama 자체를 업데이트하지 않기**: 새 모델 지원에는 종종 업데이트된 Ollama 버전이 필요합니다. 최근에 출시된 모델을 가져오기 전에 Ollama를 업데이트하십시오: macOS는 자동 업데이트됩니다; Linux는 `curl -fsSL https://ollama.com/install.sh | sh`를 다시 실행하십시오; Windows는 최신 설치 프로그램을 다운로드하십시오. 구버전 Ollama를 실행하면 새 모델이 자동으로 실패할 수 있습니다.',
            '**특정 작업에서 최신 = 최고라고 가정하기**: Gemma 3 9B (2026년 2월)는 대부분의 벤치마크에서 Llama 3.3 8B (2025년 7월)보다 높은 점수를 기록하지만, Llama 3.3 8B는 18개월 이상의 커뮤니티 파인튠, 시스템 프롬프트, 문서화된 사용 사례를 보유하고 있습니다. 커뮤니티 리소스가 있는 기존 워크플로의 경우 이전 모델이 더 나은 실용적 선택일 수 있습니다.',
          ],
        },
        relatedReading: {
          id: 'related',
          title: '관련 자료',
          items: [
            '[최고의 로컬 LLM 2026](/local-llms/best-local-llms-2026) -- 2026년 전체 출시 모델을 포함한 작업, 하드웨어, 품질별 상위 5개 모델의 현재 순위.',
            '[LLM 양자화 설명](/local-llms/llm-quantization-explained) -- 새 모델 출시 버전 다운로드 시 Q4_K_M 대비 Q5_K_M 이해.',
            '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral) -- 최신 2026년 데이터를 포함한 세 주요 모델 패밀리의 전체 벤치마크 비교.',
            '[로컬 LLM 하드웨어 가이드 2026](/local-llms/local-llm-hardware-guide-2026) -- 다운로드 전에 하드웨어가 최신 모델 출시를 지원하는지 확인.',
            '[Ollama 설치 방법](/local-llms/how-to-install-ollama) -- Ollama를 업데이트하고 올바른 버전 태그로 최신 모델을 가져오기.',
            '[Ollama의 상위 오픈 소스 모델](/local-llms/top-open-source-models-ollama) -- pull 명령어와 성능 데이터가 포함된 사용 가능한 모델의 전체 라이브러리.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '2026년 로컬 LLM 모델 업데이트에 관한 자주 묻는 질문',
          faqs: [
            {
              q: '오픈 웨이트 출시 후 새 모델은 Ollama에 얼마나 빨리 등장합니까?',
              a: 'Meta, Google, Mistral, Alibaba의 주요 모델 출시는 보통 1~7일 내에 등록됩니다. Ollama 팀은 주요 출시를 우선순위로 처리합니다 -- Llama 3.3 70B는 Meta의 오픈 웨이트 출시 3일 후 Ollama 라이브러리에 등록되었습니다. 소규모 또는 커뮤니티 모델은 2~4주가 걸릴 수 있습니다.',
            },
            {
              q: 'Llama 3.3 8B에서 더 새로운 모델로 업그레이드해야 합니까?',
              a: '일반 작업에 Llama 3.3 8B를 사용하고 품질에 만족한다면 업그레이드는 선택 사항입니다. Qwen3 7B는 벤치마크 점수가 약간 더 높고 다국어 및 코딩 지원이 더 우수합니다. 대부분의 영어 중심 일반 사용에서 실용적 품질 차이는 작습니다. 현재 모델이 특정 작업에서 어려움을 겪을 때 업그레이드하십시오.',
            },
            {
              q: '로컬 모델이 언젠가 현재 최첨단 클라우드 모델 품질과 동등해질 수 있습니까?',
              a: '추세는 그렇습니다 -- 18~24개월의 지연과 함께. GPT-4 (2023년, 추정 1.7조 파라미터)는 Llama 3.3 70B (2025년, 로컬 실행 가능)와 동등한 성능을 보입니다. GPT-5.5 (2024년)는 2026년 후반 또는 2027년까지 로컬에서 실행 가능한 동등 모델이 등장할 것으로 예상됩니다. 제한 요소는 알고리즘 능력이 아니라 컴퓨팅 효율성입니다.',
            },
            {
              q: 'DeepSeek에서 무슨 일이 있었으며 왜 중요합니까?',
              a: 'DeepSeek-R1 (2025년 1월)은 중국 AI 연구소가 더 낮은 훈련 비용으로 OpenAI o1과 경쟁하는 추론 가능한 모델을 개발할 수 있음을 입증했습니다. 오픈 웨이트 출시로 최첨단 추론 모델이 처음으로 로컬에서 사용 가능해졌습니다. DeepSeek-R1 7B는 MATH에서 52%를 달성했는데, 이는 연쇄 사고 훈련 방법론 덕분에 Mistral Small의 28%의 거의 두 배에 해당합니다.',
            },
            {
              q: 'Llama 4는 무엇이며 로컬에서 아직 사용 가능합니까?',
              a: '2026년 4월 기준, Meta는 최대 10M 토큰 컨텍스트를 주장하는 혼합 전문가 모델인 Llama 4 Scout의 프리뷰를 출시했습니다. 전체 오픈 웨이트 출시는 아직 로컬 추론에 사용할 수 없습니다. Ollama 라이브러리에는 아직 Llama 4 변형이 포함되지 않았습니다. Llama 4가 로컬 배포에 사용 가능해지면 이 페이지가 업데이트될 것입니다.',
            },
            {
              q: '2026년에 기업 또는 규제 산업을 위한 로컬 모델이 있습니까?',
              a: 'Mistral AI는 Mistral 모델에 대한 엔터프라이즈급 지원 계약을 제공합니다. 유럽 출처는 GDPR 컴플라이언스 (2025년 2월 발효 EU AI 법)와 관련이 있습니다. 의료 (HIPAA) 또는 금융 (SOC 2)의 경우 로컬로 배포된 모든 모델이 데이터 잔존 요구 사항을 충족할 수 있습니다 -- 모델 자체는 데이터 중립적입니다. 컴플라이언스 작업은 모델 선택이 아닌 배포 인프라에 있습니다.',
            },
            {
              q: '2026년에 완전한 초보자는 어떤 모델로 시작해야 합니까?',
              a: 'Llama 3.2 3B 또는 Gemma 3 4B가 최고의 초보자 선택입니다. 두 모델 모두 보통 수준의 하드웨어(VRAM 4~6 GB)에서 실행되고, 광범위한 문서화가 있으며, 일반 작업에서 우수한 성능을 보입니다. Llama 3.2 3B는 더 많은 커뮤니티 가이드와 도구 통합이 있습니다. Gemma 3 4B는 더 최신이며 약간 더 빠르고 비전 기능을 지원합니다. 비기술적 사용자를 위해 LM Studio는 명령줄 없이 두 모델을 쉽게 설치할 수 있게 해줍니다.',
            },
            {
              q: '현재 모델이 잘 작동한다면 새 모델로 업데이트할 가치가 있습니까?',
              a: '현재 모델에서 특정 품질 한계에 도달했을 때만 업데이트하십시오. 7B 또는 8B 모델이 사용 사례를 충족한다면 업그레이드는 선택 사항입니다. 추론 오류, 낮은 다국어 지원, 또는 약한 코딩 능력이 발견되면 새로운 모델 테스트가 가치 있습니다. Qwen3 7B (2025년)는 대부분의 벤치마크에서 Llama 3.3 8B보다 성능이 뛰어나 점진적 개선을 원하는 사용자들에게 안전한 업그레이드 대상입니다.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            'Hugging Face. (2026). "Open LLM Leaderboard." https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard -- 모든 오픈 웨이트 모델 출시에 대한 실시간 벤치마크 순위.',
            'Google DeepMind. (2026). "Gemma 3 Technical Report." https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf -- 모든 Gemma 3 변형의 아키텍처, 벤치마크, 비전 기능 데이터.',
            'Meta AI. (2025). "Llama 3.3 Release." https://ai.meta.com/blog/llama-3-3/ -- Llama 3.3 70B의 공식 발표 및 사양.',
            'DeepSeek AI. (2025). "DeepSeek-R1 Technical Paper." https://arxiv.org/abs/2501.12948 -- DeepSeek-R1의 연쇄 사고 아키텍처 및 MATH 벤치마크 결과.',
          ],
        },
      },
    },
  };
