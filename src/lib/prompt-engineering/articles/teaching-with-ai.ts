// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: teaching-with-ai
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      title: 'Teaching With AI: Tools, Outcomes, and Prompts for Educators in 2026',
      intro: '**To teach effectively with AI in 2026: use a structured five-component prompt (role, objective, student context, constraints, output format), choose a tool matched to the task (Khanmigo for tutoring, MagicSchool for lesson planning, Claude 4.6 Sonnet or GPT-4o for content generation), set temperature to 0.1–0.2 for factual content, and — for EU schools — implement Article 4 staff AI literacy training before deploying any high-risk system.** A 2024 Harvard randomized controlled trial found AI tutoring produced learning gains more than twice those of active learning classrooms — in 18% less study time. As of April 2026, 85% of US teachers and 86% of students used AI during the school year, higher than any other industry. The challenge is not adoption but structure: vague prompts produce unusable outputs, structured prompts save 5–13 hours per week, and EU schools now carry legal obligations under the AI Act for any AI tool that touches student assessment.',
      publishDate: '2026-03-23',
      dateModified: '2026-04-28',
      readTime: '8 min read',
      seoTitle: 'Teaching With AI: Tools, Prompts & Outcomes for Educators (2026)',
      metaDescription: 'Harvard RCT: AI tutoring doubled learning gains in 18% less time. 85% of teachers use AI — structured prompts save 5–13 hrs/week. Tools, EU AI Act rules, and detection pitfalls.',
      educationalLevel: 'Beginner',
      audience: 'Teachers, school administrators, and education professionals using AI tools',
      aboutTopics: ['AI in education', 'Khanmigo', 'EU AI Act'],
      howToName: 'How to Teach With AI',
      next_refresh_due: '2026-09-23',
      toc: [
        { label: 'What AI Teaching Tools Actually Do', anchor: '#what-ai-teaching-tools-actually-do' },
        { label: 'Which AI Tools Should Teachers Use in 2026?', anchor: '#which-ai-tools-should-teachers-use-in-2026' },
        { label: 'How to Write Prompts for Teaching Tasks', anchor: '#how-to-write-prompts-for-teaching-tasks' },
        { label: 'The Five-Component Teacher Prompt', anchor: '#the-five-component-teacher-prompt' },
        { label: 'How Do You Prompt AI for Assessment Feedback?', anchor: '#how-do-you-prompt-ai-for-assessment-feedback' },
        { label: 'Does AI Tutoring Improve Learning Outcomes?', anchor: '#does-ai-tutoring-improve-learning-outcomes' },
        { label: 'How Detectable Is AI Cheating in Schools?', anchor: '#how-detectable-is-ai-cheating-in-schools' },
        { label: 'How Does the EU AI Act Affect Schools?', anchor: '#how-does-the-eu-ai-act-affect-schools' },
        { label: 'Common Mistakes When Using AI in Education', anchor: '#common-mistakes-when-using-ai-in-education' },
        { label: 'Step-by-Step: Integrating AI Into Your Teaching', anchor: '#step-by-step-integrating-ai-into-your-teaching' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Frequently Asked Questions', anchor: '#frequently-asked-questions' },
        { label: 'Sources & Further Reading', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai',
        inLanguage: 'en',
        headline: 'Teaching With AI: Tools, Outcomes, and Prompts for Educators in 2026',
        description: 'AI tutoring systems double learning outcomes compared to traditional classrooms. Learn how teachers use AI for lesson planning, assessment, student tutoring, and why 85% of US teachers adopted AI in 2026.',
        datePublished: '2026-03-23',
        dateModified: '2026-04-28',
        proficiencyLevel: 'Beginner',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper',
          sameAs: 'https://www.promptquorum.com/about',
        },
        about: [
          { '@type': 'Thing', name: 'AI in education' },
          { '@type': 'SoftwareApplication', name: 'Khanmigo' },
          { '@type': 'Legislation', name: 'EU AI Act' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'Teacher',
          audienceType: 'Teachers, school administrators, education professionals',
        },
        educationalLevel: 'K-12, Higher Education',
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/api/og/teaching-with-ai',
          width: 1200,
          height: 630,
        },
        keywords: ['AI tutoring', 'AI in education', 'Khanmigo', 'lesson planning', 'ChatGPT for teachers', 'Claude education', 'prompt engineering teaching'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'Khanmigo' },
          { '@type': 'SoftwareApplication', name: 'MagicSchool' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'SoftwareApplication', name: 'NotebookLM' },
          { '@type': 'Organization', name: 'Harvard University' },
          { '@type': 'Organization', name: 'Khan Academy' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do AI tutors actually improve learning outcomes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — the evidence is strong. A 2024 Harvard RCT involving 194 undergraduate physics students found AI tutoring produced effect sizes of 0.73–1.3 standard deviations above active learning classrooms, with students reaching higher scores in 49 minutes vs. 60 minutes of classroom time (p < 10−8). A 2025 systematic review of 21 studies found AI-supported students outperform traditional instruction by 15–35% on assessments.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best AI tool for teachers in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The answer depends on the task. Khanmigo (Khan Academy, powered by GPT-4) is the strongest for student tutoring via Socratic questioning at $44/year. MagicSchool leads for comprehensive teacher workflow tools (lesson plans, IEPs, parent communications). ChatGPT (GPT-4o, OpenAI) provides the most flexible general-purpose content generation. For complex curriculum analysis, Claude 4.6 Sonnet (Anthropic) handles 200k tokens — approximately 160 standard pages — in a single session.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much time can AI save teachers per week?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Specific, context-rich prompts save teachers 5–13 hours per week on lesson planning and administrative tasks when used consistently. The most common time-saving applications are: research and content gathering (44% of teachers), lesson plan creation (38%), information summarization (38%), and classroom material generation (37%).',
            },
          },
          {
            '@type': 'Question',
            name: 'Is AI in education legal under EU regulations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI systems that influence educational assessment or learning pathways are classified as high-risk under the EU AI Act (Annex III). EU schools must implement staff AI literacy training (Article 4, effective 2025), maintain human oversight for AI-influenced assessments, and ensure audit trails for any AI system affecting student outcomes. Emotion-recognition AI in educational settings is banned outright under the Act.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does AI detection software reliably catch academic cheating?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No — current AI detection tools have false positive rates of 15–30% in peer-reviewed studies, meaning up to 30 of every 100 legitimate student submissions may be wrongly flagged. Non-native English speakers and students writing in structured academic styles are flagged at disproportionately higher rates. Universities in 2026 are shifting from prohibition policies to disclosure-and-citation frameworks, treating AI detection as one input among several rather than as definitive proof of misconduct.',
            },
          },
          {
            '@type': 'Question',
            name: 'What temperature setting should teachers use for AI lesson planning?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Set temperature to 0.1–0.2 for factual educational content — lesson plans, assessment rubrics, curriculum alignment. This produces consistent, low-variation output. Use 0.7–0.9 only when generating creative activity ideas where diverse options are the goal. Default temperature on most platforms (0.7–1.0) is designed for creative tasks and increases factual errors in educational content.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can AI tools help with differentiated instruction?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — this is one of AI\'s strongest educational use cases. LLMs can rewrite the same content at multiple reading levels (Flesch-Kincaid Grade 4, 8, and 12) in seconds. Prompt structure: "Rewrite this passage at a Grade [N] reading level. Preserve all factual content. Replace complex vocabulary with simpler equivalents. Keep the same paragraph structure." Claude 4.6 Sonnet produces the most consistent differentiation across reading levels.',
            },
          },
          {
            '@type': 'Question',
            name: 'How should schools handle AI literacy for staff under the EU AI Act?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Article 4 of the EU AI Act requires that AI deployers (including schools) ensure sufficient AI literacy for all staff working with AI systems — effective from 2025. This means training on: how AI makes decisions, what the error rates are for specific tools, when human oversight is required, and how to document AI-influenced decisions. Schools should document this training for audit purposes.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is Khanmigo and how is it different from ChatGPT for students?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Khanmigo is Khan Academy\'s AI teaching assistant powered by GPT-4. Its defining feature is Socratic questioning — it guides students toward answers rather than providing them directly. When a student asks "what is the answer?", Khanmigo responds with a guiding question. This design promotes learning retention. ChatGPT provides direct answers by default, which is efficient but reduces the cognitive effort that produces long-term learning. For student-facing tutoring, Khanmigo\'s pedagogical design is superior; for teacher content generation, ChatGPT\'s flexibility wins.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I create an AI use policy for my school?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An effective school AI policy defines four things: (1) which tasks AI is permitted for (brainstorming, practice problems, draft feedback), (2) which tasks require disclosure (AI-assisted essays, presentations), (3) which tasks AI is prohibited for (final exam answers, plagiarism), (4) how AI-generated content must be attributed. The policy should be reviewed every 6 months given the pace of tool development. EU schools must additionally address EU AI Act Article 4 staff training requirements and Annex III high-risk system obligations in any policy document.',
            },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'en',
        name: 'How to Integrate AI Into Your Teaching',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Define learning objectives and assessments before introducing AI',
            text: 'Specify what students must know and how you will assess it. Then design where AI strengthens instruction.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Use AI for personalized practice and immediate feedback, not for grading',
            text: 'AI excels at generating practice problems and providing instant feedback. Avoid using AI for subjective grading without human review.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Teach students how to verify AI outputs and detect hallucinations',
            text: 'Show students multi-model cross-checking and fact-checking against primary sources to build critical thinking and AI literacy.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Create a structured prompt template students use for all AI interactions',
            text: 'Use Role → Objective → Scope → Output Format → Verification Method. Practice this template together until students recognize when vague prompts produce vague answers.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Set clear policies on AI use for specific tasks',
            text: 'Be explicit about which tasks allow AI (brainstorming, practice problems) and which do not (exam answers, code without attribution).',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'en',
        'name': 'AI Tools for Teachers 2026',
        'description': 'Comparing AI teaching tools for classroom use',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Khanmigo', 'description': 'Student tutoring via Socratic questioning. K-12, Khan Academy ecosystem. $44/year.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'MagicSchool', 'description': 'Lesson planning and classroom management. K-12 teachers. Free limited tier.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'ChatGPT / GPT-4o', 'description': 'Flexible content creation and drafting. Any level, any subject. Free limited tier.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Claude 4.6 Sonnet', 'description': 'Long-form curriculum design, 200k context. Post-secondary and complex tasks. Free limited.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'NotebookLM', 'description': 'Source-grounded Q&A on uploaded materials. University and research contexts. Free.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Gemini 2.5 Pro', 'description': 'Large document analysis, 1M context. District administrators. Free limited tier.' },
        ],
      },
      sections: {
        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'AI tutors produced learning gains more than twice those of active learning classrooms in Harvard\'s 2024 RCT (194 students; effect size 0.73–1.3 SD) in 18% less study time',
            '85% of US teachers and 86% of students used AI in the 2024–25 school year — the highest AI adoption rate of any industry globally',
            'Structured teacher prompts (with grade level, objective, student context, and output format) save 5–13 hours per week versus open-ended prompts',
            'AI detection tools have 15–30% false positive rates — they are insufficient as standalone academic integrity enforcement tools',
            'EU AI Act classifies educational AI as high-risk; EU schools must implement AI literacy training for all staff (Article 4, effective 2025)',
            'Students using AI tools achieve 15–35% higher assessment scores across 21 empirical studies; r = 0.781 correlation between AI tool use and outcomes',
            'Claude 4.6 Sonnet (Anthropic) handles ~160 academic pages per session (200k tokens); Gemini 2.5 Pro handles ~800 pages (1M tokens) — context limits determine which model fits a given task',
          ],
        },
        definition: {
          title: 'What AI Teaching Tools Actually Do',
          content: [
            '**As of April 2026, AI teaching tools perform four distinct functions: personalized tutoring, lesson plan generation, automated assessment feedback, and administrative task reduction — each requiring a different tool and a different prompt structure.**',
            'Intelligent Tutoring Systems (ITS) — the technical category for tools like Khanmigo — adapt difficulty, provide immediate feedback, and guide students through Socratic questioning rather than supplying direct answers. General-purpose LLMs (Large Language Models) like GPT-4o (OpenAI) and Claude 4.6 Sonnet (Anthropic) handle lesson plan generation, rubric creation, and differentiated instruction materials. Administrative AI tools handle attendance summaries, parent communication drafts, and progress reports — the tasks teachers report as the most time-consuming.',
            'In one sentence: [AI in education](/prompt-engineering/what-is-prompt-engineering) is not one tool — it is a stack, where each layer serves a specific role in the teaching workflow.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'AI teaching tools include tutoring systems (Khanmigo), lesson planners (ChatGPT, Claude), and administrative assistants — each optimized for different classroom tasks.' },
          ],
        },
        toolComparison: {
          title: 'Which AI Tools Should Teachers Use in 2026?',
          content: [
            '**Khanmigo (Khan Academy), MagicSchool, and ChatGPT (OpenAI) each serve distinct classroom functions — choosing the wrong tool for the task wastes both time and opportunity.**',
            'Khanmigo is Khan Academy\'s AI teaching assistant powered by GPT-4. It uses Socratic questioning to guide students toward answers rather than providing them directly — a critical design distinction for learning retention. It integrates directly into Khan Academy courses, making it the strongest option for schools already using that platform.',
            'MagicSchool offers the broadest educator toolset — lesson planning, classroom management templates, IEP draft assistance, and parent communication tools. ChatGPT (GPT-4o) provides the most flexible general-purpose assistance with the highest autonomy, but requires structured prompts from the teacher to produce classroom-ready outputs.',
          ],
          callouts: [
            { type: '💡', label: 'Pro Tip', text: 'No single tool does everything. Most teachers use 2–3 tools in combination: Khanmigo for student tutoring, MagicSchool for planning, and ChatGPT for quick content generation.' },
          ],
          columns: ['Tool', 'Best For', 'Context', 'Free Tier'],
          rows: [
            {
              Tool: 'Khanmigo (Khan Academy)',
              'Best For': 'Student tutoring; Socratic learning',
              Context: 'K-12, Khan Academy ecosystem',
              'Free Tier': '$44/year',
            },
            {
              Tool: 'MagicSchool',
              'Best For': 'Lesson planning; classroom management',
              Context: 'K-12 teachers',
              'Free Tier': 'Yes (limited)',
            },
            {
              Tool: 'ChatGPT / GPT-4o (OpenAI)',
              'Best For': 'Flexible content creation; drafting',
              Context: 'Any level, any subject',
              'Free Tier': 'Yes (limited)',
            },
            {
              Tool: 'Claude 4.6 Sonnet (Anthropic)',
              'Best For': 'Long-form curriculum design; document analysis',
              Context: 'Post-secondary; complex tasks',
              'Free Tier': 'Yes (limited)',
            },
            {
              Tool: 'NotebookLM (Google DeepMind)',
              'Best For': 'Source-grounded Q&A on uploaded course materials',
              Context: 'University; research contexts',
              'Free Tier': 'Free / Plus tier',
            },
            {
              Tool: 'Gemini 2.5 Pro (Google DeepMind)',
              'Best For': 'Large document analysis; policy review',
              Context: 'District administrators',
              'Free Tier': 'Yes (limited)',
            },
          ],
        },
        toolUseCaseMapping: {
          title: 'AI in Education: Use Case to Tool Mapping',
          content: [
            '**Not all tools fit all tasks. Choose the right tool for each specific use case — different models excel at different constraints (context window, temperature, cost, speed).**',
          ],
          columns: ['Use Case', 'Recommended Tool', 'Temperature', 'Time Saved'],
          rows: [
            {
              'Use Case': 'Lesson plan creation',
              'Recommended Tool': 'MagicSchool / GPT-4o',
              Temperature: '0.1–0.2',
              'Time Saved': '30–60 min/lesson',
            },
            {
              'Use Case': 'Differentiated reading levels',
              'Recommended Tool': 'Claude 4.6 Sonnet',
              Temperature: '0.1–0.2',
              'Time Saved': '15 min/passage',
            },
            {
              'Use Case': 'Student tutoring (Socratic)',
              'Recommended Tool': 'Khanmigo',
              Temperature: 'n/a (preset)',
              'Time Saved': 'Asynchronous',
            },
            {
              'Use Case': 'Rubric-aligned feedback',
              'Recommended Tool': 'Claude 4.6 Sonnet (200k context)',
              Temperature: '0.2',
              'Time Saved': 'Hours per class set',
            },
            {
              'Use Case': 'Parent communication drafts',
              'Recommended Tool': 'ChatGPT / GPT-4o',
              Temperature: '0.3–0.5',
              'Time Saved': '5–10 min/message',
            },
            {
              'Use Case': 'Curriculum / policy review',
              'Recommended Tool': 'Gemini 2.5 Pro (1M context)',
              Temperature: '0.1',
              'Time Saved': 'Hours per document',
            },
          ],
        },
        promptStructure: {
          title: 'How to Write Prompts for Teaching Tasks',
          content: [
            '**A structured teacher prompt — one that specifies grade level, subject, learning objective, prior knowledge, time constraints, and output format — produces classroom-ready materials without editing; an unstructured prompt produces a generic draft that requires 30+ minutes of revision.**',
            '[Prompt engineering](/prompt-engineering/what-is-prompt-engineering) is the practice of crafting precise, structured instructions that guide AI output. For teachers, the difference between a usable and unusable AI output is almost always in the specificity of the prompt, not the capability of the model.',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'Think of AI prompts like recipes: vague prompts ("make something tasty") produce inconsistent results; detailed prompts ("bake a chocolate cake at 350°F for 35 minutes with dark chocolate") produce reliable outcomes.' },
          ],
        },
        promptFramework: {
          title: 'Bad vs. Good: Lesson Planning Prompts',
          content: [
            '**Specific, context-rich prompts save teachers 5–13 hours per week on lesson planning when used consistently. The bad version requires 30+ minutes of revision; the good version produces classroom-ready output in one pass.**',
            'Bad prompt — generic output:',
          ],
          blockquote: 'Make a lesson on adding fractions for 5th graders.',
          items: [
            'This produces a vague outline with no time allocation, no alignment to standards, no differentiation, and no exit ticket. Most of the output gets discarded.',
          ],
        },
        goodExample: {
          title: 'The Five-Component Teacher Prompt',
          content: [
            'Good prompt — five-component structure:',
          ],
          blockquote: 'You are an experienced 5th-grade math teacher. Create a 45-minute lesson on adding fractions with unlike denominators. Students understand equivalent fractions but have not combined them yet. Include: a 10-minute warm-up using visual models, 15 minutes of direct instruction with three worked examples, 15 minutes of partner practice, and a 5-minute exit ticket. Align to Common Core 5.NF.A.1. Output only the lesson plan with section headers, time allocations, and a materials list.',
          items: [
            'The structured version produces a document with rubric-aligned sections, time-boxed activities, and a materials list. Ready to use or refine — not rewrite.',
          ],
          callouts: [
            { type: '📌', label: 'Key Point', text: 'The five components are: (1) Role, (2) Objective, (3) Student context, (4) Constraints, (5) Output format. Using all five consistently saves 5–13 hours per week.' },
          ],
        },
        assessmentPrompt: {
          title: 'How Do You Prompt AI for Assessment Feedback?',
          content: [
            '**For formative assessment, include your rubric criteria directly in the prompt so the AI understands your grading standards and applies them consistently across all student submissions.**',
            'Claude 4.6 Sonnet\'s 200k-token [context window](/prompt-engineering/context-windows-explained) handles full class sets of short essays in a single session — approximately 160 standard pages — making batch feedback generation practical for teachers with large classes. GPT-4o handles ~100 pages per session, sufficient for typical class sizes.',
          ],
          blockquote: 'You are an experienced 7th-grade English teacher. Analyze this student argumentative essay using this rubric: clear thesis (4 pts), three supporting arguments with evidence (12 pts), acknowledgment of counterargument (4 pts), formal transitions (3 pts), conclusion that reinforces thesis (3 pts). For each criterion: state the score, quote the relevant sentence, and write one specific improvement suggestion. Total score out of 26.',
          callouts: [
            { type: '⚠️', label: 'Warning', text: 'AI can\'t assess voice, originality, or subjective writing quality reliably — always use AI feedback for mechanics and structure, not for holistic rubric scores on subjective criteria. Keep the final summative grade human.' },
          ],
        },
        learningOutcomes: {
          title: 'Does AI Tutoring Improve Learning Outcomes?',
          content: [
            '**Students using AI tutoring systems outperform peers in traditional instruction by 15–35% on standardized assessments across 21 empirical studies.**',
            'The strongest evidence comes from a 2024 randomized controlled trial led by Gregory Kestin and Kelly Miller at Harvard University, involving 194 undergraduate physics students. The study used a crossover design where each student experienced both AI tutoring (via "PS2 Pal," powered by GPT-4) and traditional active learning across two topics. Key findings:',
          ],
          callouts: [
            { type: '🔍', label: 'Did You Know?', text: 'Students showed higher engagement and motivation in AI tutoring sessions. The effect size (0.73–1.3 SD) is equivalent to the learning gain from moving from a typical classroom to top-quartile instruction.' },
          ],
          items: [
            'AI-tutored students scored significantly higher on post-tests — effect size between 0.73 and 1.3 standard deviations',
            'Median study time: **49 minutes** (AI group) vs. **60 minutes** (classroom group)',
            'Students reported higher engagement and motivation in AI sessions',
            'Statistical significance: p < 10−8',
            'A 2025 systematic review of 21 empirical studies found AI-supported students outperformed control groups by 15–35% on assessments, r = 0.781. A 2025 Stanford study found 2–5 hours with an intelligent tutoring system reliably predicts end-of-year test performance.',
          ],
        },
        integrityProblem: {
          title: 'How Detectable Is AI Cheating in Schools?',
          content: [
            '**Current AI detection tools have false positive rates of 15–30% in peer-reviewed studies, meaning they are unreliable for high-stakes academic integrity decisions — and many students use [AI hallucinations](/prompt-engineering/ai-hallucinations-how-to-stop) strategically to evade detection.**',
            'Academic integrity is the central challenge in AI-assisted education. The scale of adoption has outpaced both policy and detection technology. Student adoption is widespread: surveys report 60–92% of students use AI for studies, though institutional policies vary widely on which uses are permitted.',
            'The detection problem has three critical layers:',
          ],
          items: [
            '**False positives** — Non-native English writers are flagged at disproportionately higher rates; structured academic writing styles (common in technical fields) consistently trigger detection tools',
            '**Hybrid text** — AI drafts that are substantially edited by students defeat most detection systems',
            '**Policy gap** — Universities in 2026 are moving from outright bans to transparency-and-disclosure frameworks, requiring students to cite AI assistance rather than prohibiting it',
          ],
          callouts: [
            { type: '⚠️', label: 'Warning', text: 'Non-native English speakers and students with structured writing styles are flagged at disproportionately higher rates. Accusing a student based solely on AI detection output carries a 15–30% risk of false accusation.' },
          ],
        },
        integrityCloser: {
          content: [
            'The emerging institutional consensus: AI detection tools are not final authorities. Universities increasingly require human-plus-automated review and enforce disclosure norms rather than prohibition norms.',
          ],
        },
        regulatoryContext: {
          title: 'How Does the EU AI Act Affect Schools?',
          content: [
            '**The EU AI Act classifies AI systems used in education as "high-risk" — meaning tools that influence exam scoring, learning pathways, or student assessment are subject to mandatory transparency, human oversight, and bias-prevention requirements.**',
            'Under Annex III of the EU AI Act, educational AI tools that determine access to education or assess learning outcomes are classified as high-risk systems. Schools and universities operating within the EU are considered AI "deployers" under the Act, carrying legal obligations including:',
          ],
          items: [
            'Ensuring staff AI literacy (Article 4 mandate — effective from 2025)',
            'Implementing human oversight for all high-risk AI decisions affecting students',
            'Maintaining audit logs of AI-influenced assessments',
            'Disclosing AI system data sources and model logic to students upon request',
          ],
          callouts: [
            { type: '📌', label: 'Key Point', text: 'EU schools must implement staff AI literacy training (Article 4, effective 2025) for all teachers and administrators working with AI systems. Non-compliance carries fines up to €30 million.' },
          ],
        },
        regulatoryRegionalContext: {
          title: 'Global Educational AI Regulations',
          content: [
            'The EU AI Act bans emotion-recognition systems in educational settings outright — directly affecting tools that track student engagement via facial analysis. Chinese educational institutions deploy AI tools under China\'s Interim Measures for Generative AI (2023), which require AI-generated educational content to be labelled as such. Japan\'s Ministry of Education (MEXT) issued guidance in 2023 cautioning against AI use in certain assessment contexts, while acknowledging AI as a core student competency.',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes When Using AI in Education',
          content: [
            '**These five pitfalls cost teachers time and can create legal or ethical problems — all are easy to fix with the right process.**',
          ],
          items: [
            '**Using AI as a grading replacement rather than a feedback tool:** AI generates plausible rubric scores but cannot reliably assess originality, voice, or argumentation quality in extended writing. Use AI for formative feedback on low-stakes work; keep summative judgment human.',
            '**Unstructured prompts for lesson planning:** "Make a lesson on photosynthesis" produces a generic output requiring more editing time than writing from scratch. Always specify grade level, prior knowledge, time constraints, and output format.',
            '**Over-relying on AI detection tools for academic integrity:** False positive rates of 15–30% mean that accusing a student based solely on AI detection output carries a 15–30% chance of false accusation. Non-native English writers are flagged at disproportionately higher rates.',
            '**Ignoring EU AI Act obligations for EU schools:** Educational AI tools that influence learning pathways or assessment are high-risk under Annex III. EU schools that deploy these tools without Article 4 staff AI literacy training are non-compliant.',
            '**Using high-temperature settings for educational content:** Default temperature on most AI platforms (0.7–1.0) increases hallucination risk. For factual lesson content, assessment rubrics, and citation generation, set temperature to 0.1–0.2.',
          ],
          callouts: [
            { type: '🛠️', label: 'Best Practice', text: 'Document all AI use: which tool, which settings (temperature, context), and what task. This creates an audit trail for compliance (EU AI Act Article 6) and helps you improve over time.' },
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — the foundational principles behind effective AI instructions',
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — how structured prompts produce reliable AI output, applicable to lesson plan and assessment generation',
            '[AI Limitations — What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — why AI hallucination affects educational tools and how to design around it',
            '[AI-Powered Research](/prompt-engineering/ai-powered-research) — verification workflows for AI-generated content applicable to student and teacher research tasks',
            '[Persona Prompting](/prompt-engineering/persona-prompting) — how role definitions like "experienced 5th-grade teacher" change AI output quality and consistency',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — the reasoning technique behind Socratic AI tutors like Khanmigo',
          ],
        },
        howToStart: {
          title: 'Step-by-Step: Integrating AI Into Your Teaching',
          content: [
            '**Follow these five steps to integrate AI into your teaching without disrupting learning outcomes or violating academic integrity standards.**',
          ],
          numberedItems: [
            'Define learning objectives and assessments before introducing AI.',
            'Use AI for personalized practice and immediate feedback, not for grading judgment calls.',
            'Teach students how to verify AI outputs and detect hallucinations.',
            'Create a structured prompt template students use for all AI interactions.',
            'Set clear policies on AI use for specific tasks.',
          ],
        },
        faq: {
          title: 'Frequently Asked Questions',
          items: [],
          faqs: [
            {
              q: 'Do AI tutors actually improve learning outcomes?',
              a: 'Yes — the evidence is strong. A 2024 Harvard RCT involving 194 undergraduate physics students found AI tutoring produced effect sizes of 0.73–1.3 standard deviations above active learning classrooms, with students reaching higher scores in 49 minutes vs. 60 minutes of classroom time (p < 10−8). A 2025 systematic review of 21 studies found AI-supported students outperform traditional instruction by 15–35% on assessments.',
            },
            {
              q: 'What is the best AI tool for teachers in 2026?',
              a: 'The answer depends on the task. Khanmigo (Khan Academy, powered by GPT-4) is the strongest for student tutoring via Socratic questioning at $44/year. MagicSchool leads for comprehensive teacher workflow tools (lesson plans, IEPs, parent communications). ChatGPT (GPT-4o, OpenAI) provides the most flexible general-purpose content generation. For complex curriculum analysis, Claude 4.6 Sonnet (Anthropic) handles 200k tokens — approximately 160 standard pages — in a single session.',
            },
            {
              q: 'How much time can AI save teachers per week?',
              a: 'Specific, context-rich prompts save teachers 5–13 hours per week on lesson planning and administrative tasks when used consistently. The most common time-saving applications are: research and content gathering (44% of teachers), lesson plan creation (38%), information summarization (38%), and classroom material generation (37%).',
            },
            {
              q: 'Is AI in education legal under EU regulations?',
              a: 'AI systems that influence educational assessment or learning pathways are classified as high-risk under the EU AI Act (Annex III). EU schools must implement staff AI literacy training (Article 4, effective 2025), maintain human oversight for AI-influenced assessments, and ensure audit trails for any AI system affecting student outcomes. Emotion-recognition AI in educational settings is banned outright under the Act.',
            },
            {
              q: 'Does AI detection software reliably catch academic cheating?',
              a: 'No — current AI detection tools have false positive rates of 15–30% in peer-reviewed studies, meaning up to 30 of every 100 legitimate student submissions may be wrongly flagged. Non-native English speakers and students writing in structured academic styles are flagged at disproportionately higher rates. Universities in 2026 are shifting from prohibition policies to disclosure-and-citation frameworks, treating AI detection as one input among several rather than as definitive proof of misconduct.',
            },
            {
              q: 'What temperature setting should teachers use for AI lesson planning?',
              a: 'Set temperature to 0.1–0.2 for factual educational content — lesson plans, assessment rubrics, curriculum alignment. This produces consistent, low-variation output. Use 0.7–0.9 only when generating creative activity ideas where diverse options are the goal. Default temperature on most platforms (0.7–1.0) is designed for creative tasks and increases factual errors in educational content.',
            },
            {
              q: 'Can AI tools help with differentiated instruction?',
              a: 'Yes — this is one of AI\'s strongest educational use cases. LLMs can rewrite the same content at multiple reading levels (Flesch-Kincaid Grade 4, 8, and 12) in seconds. Prompt structure: "Rewrite this passage at a Grade [N] reading level. Preserve all factual content. Replace complex vocabulary with simpler equivalents. Keep the same paragraph structure." Claude 4.6 Sonnet produces the most consistent differentiation across reading levels.',
            },
            {
              q: 'How should schools handle AI literacy for staff under the EU AI Act?',
              a: 'Article 4 of the EU AI Act requires that AI deployers (including schools) ensure sufficient AI literacy for all staff working with AI systems — effective from 2025. This means training on: how AI makes decisions, what the error rates are for specific tools, when human oversight is required, and how to document AI-influenced decisions. Schools should document this training for audit purposes.',
            },
            {
              q: 'What is Khanmigo and how is it different from ChatGPT for students?',
              a: 'Khanmigo is Khan Academy\'s AI teaching assistant powered by GPT-4. Its defining feature is Socratic questioning — it guides students toward answers rather than providing them directly. When a student asks "what is the answer?", Khanmigo responds with a guiding question. This design promotes learning retention. ChatGPT provides direct answers by default, which is efficient but reduces the cognitive effort that produces long-term learning. For student-facing tutoring, Khanmigo\'s pedagogical design is superior; for teacher content generation, ChatGPT\'s flexibility wins.',
            },
            {
              q: 'How do I create an AI use policy for my school?',
              a: 'An effective school AI policy defines four things: (1) which tasks AI is permitted for (brainstorming, practice problems, draft feedback), (2) which tasks require disclosure (AI-assisted essays, presentations), (3) which tasks AI is prohibited for (final exam answers, plagiarism), (4) how AI-generated content must be attributed. The policy should be reviewed every 6 months given the pace of tool development. EU schools must additionally address EU AI Act Article 4 staff training requirements and Annex III high-risk system obligations in any policy document.',
            },
          ],
        },
        sources: {
          title: 'Sources & Further Reading',
          content: [
            '**All statistics and findings in this article are sourced from peer-reviewed research, official government guidance, and publicly-documented institutional policies.** Last fact-checked: 2026-04-28 (against current Claude 4.6 Sonnet, GPT-4o, Gemini 2.5 Pro models; current Khanmigo pricing at Khan Academy; current EU AI Act Article 4 guidance effective 2025).',
          ],
          items: [
            '[Kestin & Miller, 2024. "AI tutoring outperforms in-class active learning: an RCT"](https://www.nature.com/articles/s41598-025-97652-6) — randomized controlled trial with 194 students; effect size 0.73–1.3 SD',
            '[Kwak, 2025. "The Effectiveness of AI-Driven Tools in Improving Student Learning Outcomes"](https://iacis.org/iis/2025/4_iis_2025_233-247.pdf) — systematic review of 21 studies; 15–35% performance gains; r = 0.781',
            '[EU AI Act, 2024. Annex III — High-Risk AI Systems in Education](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) — classifies educational assessment AI as high-risk with mandatory oversight requirements',
          ],
        },
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Use Cases',
      title: 'Mit KI unterrichten: Tools, Ergebnisse und Prompts für Lehrkräfte 2026',
      intro: '**Um 2026 effektiv mit KI zu unterrichten: Verwenden Sie einen strukturierten fünfteiligen Prompt (Rolle, Ziel, Schülerkontext, Einschränkungen, Ausgabeformat), wählen Sie ein Tool, das zur Aufgabe passt (Khanmigo für Nachhilfe, MagicSchool für Unterrichtsplanung, Claude 4.6 Sonnet oder GPT-4o für Inhalterstellung), stellen Sie die Temperatur auf 0,1–0,2 für sachliche Inhalte ein, und — für Schulen in der EU — implementieren Sie vor der Bereitstellung eines hochriskanten Systems Schulungen zur KI-Kompetenz für Lehrkräfte gemäß Artikel 4.** Eine randomisierte kontrollierte Studie der Harvard-Universität aus dem Jahr 2024 stellte fest, dass KI-Nachhilfe Lernzuwächse erzeugte, die mehr als doppelt so hoch waren wie in aktiven Lernklassenzimmern — in 18 % weniger Lernzeit. Im April 2026 nutzten 85 % der US-amerikanischen Lehrkräfte und 86 % der Schüler KI während des Schuljahres — höher als in jeder anderen Branche. Die Herausforderung liegt nicht in der Akzeptanz, sondern in der Struktur: vage Prompts produzieren unbenutzbare Outputs, strukturierte Prompts sparen 5–13 Stunden pro Woche, und EU-Schulen haben nun rechtliche Verpflichtungen gemäß dem AI Act für jedes KI-Tool, das die Schülerbewertung beeinflusst.',
      publishDate: '2026-03-23',
      dateModified: '2026-04-28',
      readTime: '10 Min. Lesezeit',
      seoTitle: 'Unterrichten mit KI: Tools, Prompts & Ergebnisse für Lehrkräfte (2026)',
      metaDescription: 'Harvard-Studie: KI-Tutoring verdoppelte den Lernerfolg bei 18 % weniger Lernzeit. 85 % der Lehrkräfte nutzen KI — strukturierte Prompts sparen 5–13 Std./Woche. EU-KI-Verordnung beachten.',
      educationalLevel: 'Anfänger',
      audience: 'Lehrkräfte, Schuladministratoren und Fachleute im Bildungswesen, die KI-Tools nutzen',
      aboutTopics: ['KI im Bildungswesen', 'Khanmigo', 'EU AI Act'],
      howToName: 'So unterrichten Sie mit KI',
      next_refresh_due: '2026-09-23',
      primaryTerm: 'Mit KI unterrichten',
      toc: [
        { label: 'Was KI-Lehrkräfte-Tools wirklich tun', anchor: '#what-ai-teaching-tools-actually-do' },
        { label: 'Welche KI-Tools sollten Lehrkräfte 2026 nutzen?', anchor: '#which-ai-tools-should-teachers-use-in-2026' },
        { label: 'Wie schreibe ich Prompts für Unterrichtsaufgaben', anchor: '#how-to-write-prompts-for-teaching-tasks' },
        { label: 'Der fünfteilige Lehrkräfte-Prompt', anchor: '#the-five-component-teacher-prompt' },
        { label: 'Wie schreibe ich KI-Prompts für Bewertungsfeedback?', anchor: '#how-do-you-prompt-ai-for-assessment-feedback' },
        { label: 'Verbessert KI-Nachhilfe wirklich die Lernergebnisse?', anchor: '#does-ai-tutoring-improve-learning-outcomes' },
        { label: 'Wie erkennbar ist KI-Betrug in Schulen?', anchor: '#how-detectable-is-ai-cheating-in-schools' },
        { label: 'Wie wirkt sich der EU AI Act auf Schulen aus?', anchor: '#how-does-the-eu-ai-act-affect-schools' },
        { label: 'Häufige Fehler bei der Verwendung von KI im Bildungswesen', anchor: '#common-mistakes-when-using-ai-in-education' },
        { label: 'Schritt für Schritt: KI in den Unterricht integrieren', anchor: '#step-by-step-integrating-ai-into-your-teaching' },
        { label: 'Weiterführende Literatur', anchor: '#related-reading' },
        { label: 'Häufig gestellte Fragen', anchor: '#frequently-asked-questions' },
        { label: 'Quellen und weitere Ressourcen', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=de',
        inLanguage: 'de',
        headline: 'Mit KI unterrichten: Tools, Ergebnisse und Prompts für Lehrkräfte 2026',
        description: 'KI-Tutorensysteme verdoppeln die Lernergebnisse im Vergleich zu traditionellen Klassenzimmern. Erfahren Sie, wie Lehrkräfte KI für Unterrichtsplanung, Bewertung, Schülernachhilfe einsetzen und warum 85 % der US-amerikanischen Lehrkräfte KI 2026 eingeführt haben.',
        datePublished: '2026-03-23',
        dateModified: '2026-04-28',
        proficiencyLevel: 'Anfänger',
        author: {
          '@type': 'Person',
          name: 'Hans Kuepper',
          sameAs: 'https://www.promptquorum.com/about',
        },
        about: [
          { '@type': 'Thing', name: 'KI im Bildungswesen' },
          { '@type': 'SoftwareApplication', name: 'Khanmigo' },
          { '@type': 'Legislation', name: 'EU AI Act' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'Teacher',
          audienceType: 'Lehrkräfte, Schuladministratoren, Fachleute im Bildungswesen',
        },
        educationalLevel: 'K-12, Hochschule',
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/api/og/teaching-with-ai?lang=de',
          width: 1200,
          height: 630,
        },
        keywords: ['KI-Nachhilfe', 'KI im Bildungswesen', 'Khanmigo', 'Unterrichtsplanung', 'ChatGPT für Lehrkräfte', 'Claude Bildung', 'Prompt-Engineering Unterricht'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'Khanmigo' },
          { '@type': 'SoftwareApplication', name: 'MagicSchool' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'SoftwareApplication', name: 'NotebookLM' },
          { '@type': 'Organization', name: 'Harvard University' },
          { '@type': 'Organization', name: 'Khan Academy' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Verbessern KI-Tutoren wirklich die Lernergebnisse?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja — die Evidenz ist stark. Eine randomisierte kontrollierte Studie von Harvard aus dem Jahr 2024 mit 194 Studierenden der Physik stellte fest, dass KI-Nachhilfe Effektstärken von 0,73–1,3 Standardabweichungen über aktiven Lernklassenzimmern produzierte, wobei Studierende höhere Ergebnisse in 49 Minuten gegenüber 60 Minuten Unterrichtszeit erreichten (p < 10−8). Eine systematische Übersicht aus dem Jahr 2025 von 21 Studien zeigt, dass KI-unterstützte Schüler traditionelle Unterrichtsmethoden in Bewertungen um 15–35 % übertreffen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welches ist das beste KI-Tool für Lehrkräfte 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Die Antwort hängt von der Aufgabe ab. Khanmigo (Khan Academy, betrieben durch GPT-4) ist am stärksten für Schülernachhilfe durch sokratisches Fragen zu 44 US-Dollar pro Jahr. MagicSchool führt bei umfassenden Lehrkräfte-Workflow-Tools (Unterrichtspläne, IEPs, Elternkommunikation). ChatGPT (GPT-4o, OpenAI) bietet die flexibelste universelle Inhalterstellung. Für komplexe Lehrplananalysen behandelt Claude 4.6 Sonnet (Anthropic) 200.000 Token — ungefähr 160 Standardseiten — in einer einzigen Sitzung.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viel Zeit kann KI Lehrkräften pro Woche sparen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Spezifische, kontextreiche Prompts sparen Lehrkräften 5–13 Stunden pro Woche bei Unterrichtsplanung und Verwaltungsaufgaben, wenn sie konsistent verwendet werden. Die häufigsten Zeitersparnis-Anwendungen sind: Recherche und Inhaltssammlung (44 % der Lehrkräfte), Unterrichtsplanerstellung (38 %), Informationszusammenfassung (38 %) und Erstellung von Klassenmaterialien (37 %).',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist KI im Bildungswesen rechtlich unter EU-Bestimmungen zulässig?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'KI-Systeme, die Lernbewertung oder Lernpfade beeinflussen, werden im EU AI Act (Annex III) als hochriskant klassifiziert. EU-Schulen müssen Schulungen zur KI-Kompetenz für Lehrkräfte (Artikel 4, gültig ab 2025) durchführen, menschliche Überwachung für KI-beeinflusste Bewertungen aufrechthalten und Audit-Trails für alle KI-Systeme führen, die Schülerergebnisse beeinflussen. Emotionserkennung-KI in Bildungseinrichtungen ist gemäß dem Gesetz komplett verboten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Erkennt KI-Erkennungssoftware zuverlässig akademisches Betrügen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein — aktuelle KI-Erkennungstools haben in begutachteten Studien falsch-positive Raten von 15–30 %, was bedeutet, dass bis zu 30 von jeweils 100 legitimen Schülereinreichungen fälschlicherweise gekennzeichnet werden können. Nichtmuttersprachler und Studierende, die in strukturierten akademischen Stilen schreiben, werden überproportional höher gekennzeichnet. Universitäten verschieben 2026 von Verbotsrichtlinien zu Offenlegungs- und Zitierrahmen und behandeln KI-Erkennung als einen Input unter mehreren statt als abschließender Beweis des Fehlverhaltens.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Temperatureinstellung sollten Lehrkräfte für KI-Unterrichtsplanung verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Stellen Sie die Temperatur auf 0,1–0,2 für sachliche Unterrichtsinhalte — Unterrichtspläne, Bewertungsrichtlinien, Lehrplanalignment. Dies erzeugt konsistente, niedrig-variierende Outputs. Verwenden Sie 0,7–0,9 nur bei der Erstellung kreativer Aktivitätsideen, bei denen verschiedene Optionen das Ziel sind. Die Standardtemperatur auf den meisten Plattformen (0,7–1,0) ist für kreative Aufgaben ausgelegt und erhöht sachliche Fehler in Unterrichtsinhalten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Können KI-Tools bei differenziertem Unterricht helfen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja — dies ist einer der stärksten Einsatzbereiche von KI im Bildungswesen. LLMs können denselben Inhalt in Sekunden auf mehreren Lesefähigkeitsstufen umschreiben (Flesch-Kincaid Klasse 4, 8 und 12). Prompt-Struktur: „Schreiben Sie diesen Abschnitt auf Klassenstufe [N] um. Bewahren Sie alle sachlichen Inhalte. Ersetzen Sie komplexes Vokabular durch einfachere Entsprechungen. Behalten Sie die gleiche Absatzstruktur bei.\" Claude 4.6 Sonnet produziert die konsistenteste Differenzierung über Lesefähigkeitsstufen hinweg.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie sollten Schulen KI-Kompetenz für Lehrkräfte unter dem EU AI Act handhaben?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Artikel 4 des EU AI Act verlangt, dass KI-Bereitsteller (einschließlich Schulen) ausreichende KI-Kompetenz für alle Mitarbeitenden sicherstellen, die mit KI-Systemen arbeiten — gültig ab 2025. Dies bedeutet Schulungen zu: wie KI Entscheidungen trifft, welche Fehlerraten spezifische Tools haben, wann menschliche Überwachung erforderlich ist, und wie KI-beeinflusste Entscheidungen dokumentiert werden. Schulen sollten diese Schulung für Audit-Zwecke dokumentieren.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist Khanmigo und wie unterscheidet es sich von ChatGPT für Schüler?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Khanmigo ist der KI-Tutorialassistent der Khan Academy, betrieben durch GPT-4. Sein definierendes Merkmal ist die sokratische Fragestellung — es führt Schüler zu Antworten, anstatt ihnen direkt Antworten zu geben. Wenn ein Schüler „Was ist die Antwort?\" fragt, antwortet Khanmigo mit einer leitenden Frage. Dieses Design fördert Lernbehaltung. ChatGPT liefert standardmäßig direkte Antworten, was effizient ist, aber den kognitiven Aufwand reduziert, der langfristiges Lernen erzeugt. Für schülerfreundliche Nachhilfe ist Khanmigos pädagogisches Design überlegen; für Inhalterstellung durch Lehrkräfte gewinnt ChatGPTs Flexibilität.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie erstelle ich eine KI-Nutzungsrichtlinie für meine Schule?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Eine wirksame Schulrichtlinie zur KI-Nutzung definiert vier Dinge: (1) welche Aufgaben KI erlaubt sind (Brainstorming, Übungsprobleme, Feedbackentwürfe), (2) welche Aufgaben Offenlegung erfordern (KI-assistierte Essays, Präsentationen), (3) welche Aufgaben KI verboten ist (endgültige Prüfungsantworten, Plagiate), (4) wie KI-generierte Inhalte zitiert werden müssen. Die Richtlinie sollte alle 6 Monate überprüft werden, angesichts des rasanten Werkzeugentwicklungstempo. EU-Schulen müssen in jedem Richtliniendokument zusätzlich EU AI Act Artikel 4-Schulungsanforderungen und Annex III-Hochrisikoobligationen adressieren.',
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von KI-Lehrkräfte-Tools die DSGVO beachten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja — wenn Ihre Schule in der EU oder im EWR liegt und KI-Tools Schülerdaten verarbeitet, müssen Sie die DSGVO einhalten. Der kritische Punkt ist Artikel 28: Wenn die KI-Plattform (z. B. ChatGPT, Claude) als Auftragsverarbeiter fungiert, benötigen Sie einen Data Processing Agreement (DPA). Viele kommerziellen LLM-Anbieter bieten DPAs an; überprüfen Sie direkt bei Ihrem Toolanbieter. Für Schulen in Deutschland und der Schweiz: Der Einsatz von lokaler Inferenz (on-premise oder DACH-gehostete Modelle) über Ollama oder LM Studio reduziert das Datenschutzrisiko deutlich. Referenzieren Sie die BSI-Grundschutz-Kataloge für sichere lokale KI-Bereitstellungsarchitekturen im Schulkontext.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist KI-Unterrichtstechnologie für den deutschen Mittelstand geeignet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolut — vor allem für kleinere bis mittlere Schulen und Bildungsinstitutionen. KI-Tools wie ChatGPT, Claude und Khanmigo erfordern keine großen IT-Infrastrukturen oder spezialisiertes technisches Personal. Der Schlüssel zum Erfolg im deutschsprachigen Kontext (Deutschland, Österreich, Schweiz) ist: (1) Dokumentation aller KI-Nutzung für BSI- und DSGVO-Compliance, (2) Schulung der Lehrkräfte auf Eine-Stunde-Basis-Level zu Prompt-Strukturierung, (3) lokale oder DACH-gehostete Lösungen für sensible Schülerdaten priorisieren, (4) Führen Sie Audit-Trails für alle KI-beeinflussten Bewertungen. Mittelständische Schulen in Baden-Württemberg, Bayern und der Deutschschweiz benutzen bereits KI erfolgreich, wenn die oben genannten Strukturen vorhanden sind.',
            },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'de',
        name: 'So integrieren Sie KI in Ihren Unterricht',
        url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=de',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Definieren Sie Lernziele und Bewertungen, bevor Sie KI einführen',
            text: 'Geben Sie an, was Schüler wissen müssen und wie Sie es bewerten werden. Entwerfen Sie dann, wo KI den Unterricht verstärkt.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Nutzen Sie KI für personalisierte Übung und sofortiges Feedback, nicht zur Benotung',
            text: 'KI glänzt bei der Erstellung von Übungsproblemen und der Bereitstellung von sofortigem Feedback. Vermeiden Sie die Verwendung von KI für subjektive Benotung ohne menschliche Überprüfung.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Unterrichten Sie Schüler, wie sie KI-Outputs überprüfen und Halluzinationen erkennen',
            text: 'Zeigen Sie Schülern Multi-Modell-Validierung und Faktenprüfung gegen primäre Quellen, um kritisches Denken und KI-Kompetenz aufzubauen.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Erstellen Sie eine strukturierte Prompt-Vorlage, die Schüler für alle KI-Interaktionen verwenden',
            text: 'Nutzen Sie Rolle → Ziel → Umfang → Ausgabeformat → Validierungsmethode. Üben Sie diese Vorlage zusammen, bis Schüler erkennen, wenn vage Prompts vage Antworten produzieren.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Legen Sie klare Richtlinien zur KI-Nutzung für bestimmte Aufgaben fest',
            text: 'Seien Sie explizit darüber, welche Aufgaben KI erlauben (Brainstorming, Übungsprobleme) und welche nicht (Prüfungsantworten, Code ohne Quellangabe).',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'de',
        name: 'KI-Tools für Lehrkräfte 2026',
        description: 'Vergleich von KI-Lehrkräfte-Tools für den Klasseneinsatz',
        url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=de',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Khanmigo', description: 'Schülernachhilfe durch sokratische Fragestellung. K-12, Khan Academy Ökosystem. 44 US-Dollar pro Jahr.' },
          { '@type': 'ListItem', position: 2, name: 'MagicSchool', description: 'Unterrichtsplanung und Klassenverwaltung. K-12-Lehrkräfte. Kostenlose begrenzte Version.' },
          { '@type': 'ListItem', position: 3, name: 'ChatGPT / GPT-4o', description: 'Flexible Inhalterstellung und Entwurf. Jede Ebene, jedes Fach. Kostenlose begrenzte Version.' },
          { '@type': 'ListItem', position: 4, name: 'Claude 4.6 Sonnet', description: 'Langform-Lehrplandesign, 200.000 Token Kontext. Hochschule und komplexe Aufgaben. Kostenlose begrenzte Version.' },
          { '@type': 'ListItem', position: 5, name: 'NotebookLM', description: 'Quellengestützte Fragen und Antworten zu hochgeladenen Materialien. Universität und Forschung. Kostenlos.' },
          { '@type': 'ListItem', position: 6, name: 'Gemini 2.5 Pro', description: 'Große Dokumentenanalyse, 1 Million Token Kontext. Schulverwaltung. Kostenlose begrenzte Version.' },
        ],
      },
      sections: {
        tldr: {
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            'KI-Tutoren produzierten Lernzuwächse, die mehr als doppelt so hoch waren wie in aktiven Lernklassenzimmern in Harvards randomisierter kontrollierter Studie von 2024 (194 Schüler; Effektstärke 0,73–1,3 SD) in 18 % weniger Lernzeit',
            '85 % der US-amerikanischen Lehrkräfte und 86 % der Schüler nutzten KI im Schuljahr 2024–25 — die höchste KI-Adoptionsrate jeder Branche weltweit',
            'Strukturierte Lehrkräfte-Prompts (mit Klassenstufe, Ziel, Schülerkontext und Ausgabeformat) sparen 5–13 Stunden pro Woche im Vergleich zu offenen Prompts',
            'KI-Erkennungstools haben 15–30 % falsch-positive Raten — sie sind unzureichend als eigenständiges Tool zur Durchsetzung akademischer Integrität',
            'Der EU AI Act klassifiziert bildungs-KI als hochriskant; EU-Schulen müssen KI-Kompetenzkurs für alle Lehrkräfte durchführen (Artikel 4, gültig ab 2025)',
            'Schüler, die KI-Tools nutzen, erreichen in 21 empirischen Studien 15–35 % höhere Bewertungsergebnisse; r = 0,781 Korrelation zwischen KI-Tool-Nutzung und Ergebnissen',
            'Claude 4.6 Sonnet (Anthropic) verarbeitet ~160 akademische Seiten pro Sitzung (200.000 Token); Gemini 2.5 Pro verarbeitet ~800 Seiten (1 Million Token) — Kontextgrenzen bestimmen, welches Modell passt',
          ],
        },
        definition: {
          title: 'Was KI-Lehrkräfte-Tools wirklich tun',
          content: [
            '**Im April 2026 führen KI-Lehrkräfte-Tools vier unterschiedliche Funktionen aus: personalisierte Nachhilfe, Unterrichtsplangenerierung, automatisiertes Bewertungsfeedback und Reduktion von Verwaltungsaufgaben — jedes erfordert ein anderes Tool und eine andere Prompt-Struktur.**',
            'Intelligente Tutorialsysteme (ITS) — die technische Kategorie für Tools wie Khanmigo — passen Schwierigkeitsgrad an, bieten sofortiges Feedback und führen Schüler durch sokratische Fragestellung, anstatt direkte Antworten zu geben. Universelle LLMs (Large Language Models) wie GPT-4o (OpenAI) und Claude 4.6 Sonnet (Anthropic) bearbeiten Unterrichtsplangenerierung, Rubrik-Erstellung und differenzierte Unterrichtsmaterialien. Verwaltungs-KI-Tools bearbeiten Anwesenheitszusammenfassungen, Elternkommunikationsentwürfe und Fortschrittsberichte — die Aufgaben, die Lehrkräfte als am zeitintensivsten berichten.',
            'In einem Satz: [KI im Unterricht](/prompt-engineering/what-is-prompt-engineering?lang=de) ist nicht ein Tool — es ist ein Stack, wo jede Schicht eine bestimmte Rolle im Unterrichts-Workflow erfüllt.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'KI-Lehrkräfte-Tools umfassen Tutorialsysteme (Khanmigo), Unterrichtsplaner (ChatGPT, Claude) und Verwaltungsassistenten — jedes optimiert für verschiedene Klassenzimmeraufgaben.' },
          ],
        },
        toolComparison: {
          title: 'Welche KI-Tools sollten Lehrkräfte 2026 nutzen?',
          content: [
            '**Khanmigo (Khan Academy), MagicSchool und ChatGPT (OpenAI) erfüllen jeweils unterschiedliche Klassenzimmerfunktionen — die Wahl des falschen Tools für die Aufgabe verschwendet Zeit und Chancen.**',
            'Khanmigo ist der KI-Lehrkräfte-Assistent der Khan Academy, betrieben durch GPT-4. Es nutzt sokratische Fragestellung, um Schüler zu Antworten zu führen, anstatt ihnen direkt Antworten zu geben — ein entscheidender Designunterschied für Lernbehaltung. Es integriert sich direkt in Khan Academy-Kurse, was es zur stärksten Option für Schulen macht, die diese Plattform bereits nutzen.',
            'MagicSchool bietet das umfassendste Lehrkräfte-Toolset — Unterrichtsplanung, Klassenverwaltungsvorlagen, Unterstützung bei der Erstellung von IEPs und Elternkommunikations-Tools. ChatGPT (GPT-4o) bietet die flexibelste universelle Unterstützung mit der höchsten Autonomie, erfordert aber strukturierte Prompts von der Lehrkraft, um classroom-ready Outputs zu produzieren.',
          ],
          callouts: [
            { type: '💡', label: 'Profi-Tipp', text: 'Kein einzelnes Tool macht alles. Die meisten Lehrkräfte nutzen 2–3 Tools zusammen: Khanmigo für Schülernachhilfe, MagicSchool für Planung und ChatGPT für schnelle Inhalterstellung.' },
          ],
          columns: ['Tool', 'Am besten für', 'Kontext', 'Kostenlose Version'],
          rows: [
            {
              Tool: 'Khanmigo (Khan Academy)',
              'Am besten für': 'Schülernachhilfe; sokratisches Lernen',
              Kontext: 'K-12, Khan Academy Ökosystem',
              'Kostenlose Version': '44 US-Dollar pro Jahr',
            },
            {
              Tool: 'MagicSchool',
              'Am besten für': 'Unterrichtsplanung; Klassenverwaltung',
              Kontext: 'K-12-Lehrkräfte',
              'Kostenlose Version': 'Ja (begrenzt)',
            },
            {
              Tool: 'ChatGPT / GPT-4o (OpenAI)',
              'Am besten für': 'Flexible Inhalterstellung; Entwurfserstellung',
              Kontext: 'Jede Ebene, jedes Fach',
              'Kostenlose Version': 'Ja (begrenzt)',
            },
            {
              Tool: 'Claude 4.6 Sonnet (Anthropic)',
              'Am besten für': 'Langform-Lehrplandesign; Dokumentenanalyse',
              Kontext: 'Hochschule; komplexe Aufgaben',
              'Kostenlose Version': 'Ja (begrenzt)',
            },
            {
              Tool: 'NotebookLM (Google DeepMind)',
              'Am besten für': 'Quellengestützte Fragen und Antworten zu hochgeladenen Klassenmaterialien',
              Kontext: 'Universität; Forschungskontexte',
              'Kostenlose Version': 'Kostenlos / Plus-Ebene',
            },
            {
              Tool: 'Gemini 2.5 Pro (Google DeepMind)',
              'Am besten für': 'Große Dokumentenanalyse; Richtlinienüberprüfung',
              Kontext: 'Schuldistrikt-Administratoren',
              'Kostenlose Version': 'Ja (begrenzt)',
            },
          ],
        },
        toolUseCaseMapping: {
          title: 'KI im Bildungswesen: Einsatzfall zu Tool-Zuordnung',
          content: [
            '**Nicht alle Tools passen zu allen Aufgaben. Wählen Sie das richtige Tool für jeden spezifischen Einsatzfall — verschiedene Modelle glänzen bei verschiedenen Einschränkungen (Kontextfenster, Temperatur, Kosten, Geschwindigkeit).**',
          ],
          columns: ['Einsatzfall', 'Empfohlenes Tool', 'Temperatur', 'Zeitersparnis'],
          rows: [
            {
              Einsatzfall: 'Unterrichtsplan-Erstellung',
              'Empfohlenes Tool': 'MagicSchool / GPT-4o',
              Temperatur: '0,1–0,2',
              Zeitersparnis: '30–60 Min./Unterricht',
            },
            {
              Einsatzfall: 'Differenzierte Lesefähigkeitsstufen',
              'Empfohlenes Tool': 'Claude 4.6 Sonnet',
              Temperatur: '0,1–0,2',
              Zeitersparnis: '15 Min./Passage',
            },
            {
              Einsatzfall: 'Schülernachhilfe (sokratisch)',
              'Empfohlenes Tool': 'Khanmigo',
              Temperatur: 'n/v (voreingestellt)',
              Zeitersparnis: 'Asynchron',
            },
            {
              Einsatzfall: 'Rubrik-ausgerichtetes Feedback',
              'Empfohlenes Tool': 'Claude 4.6 Sonnet (200.000 Token Kontext)',
              Temperatur: '0,2',
              Zeitersparnis: 'Stunden pro Klassensatz',
            },
            {
              Einsatzfall: 'Elternkommunikations-Entwürfe',
              'Empfohlenes Tool': 'ChatGPT / GPT-4o',
              Temperatur: '0,3–0,5',
              Zeitersparnis: '5–10 Min./Nachricht',
            },
            {
              Einsatzfall: 'Lehrbuch-/Richtlinienüberprüfung',
              'Empfohlenes Tool': 'Gemini 2.5 Pro (1 Million Token Kontext)',
              Temperatur: '0,1',
              Zeitersparnis: 'Stunden pro Dokument',
            },
          ],
        },
        promptStructure: {
          title: 'Wie schreibe ich Prompts für Unterrichtsaufgaben',
          content: [
            '**Ein strukturierter Lehrkräfte-Prompt — einer, der Klassenstufe, Fach, Lernziel, Vorwissen, Zeitbeschränkungen und Ausgabeformat spezifiziert — erzeugt classroom-ready Materialien ohne Bearbeitung; ein unstrukturierter Prompt erzeugt einen generischen Entwurf, der 30+ Minuten Überarbeitung erfordert.**',
            '[Prompt-Engineering](/prompt-engineering/what-is-prompt-engineering?lang=de) ist die Praktik der Erstellung präziser, strukturierter Anweisungen, die KI-Output leiten. Für Lehrkräfte ist der Unterschied zwischen einem nutzbaren und unnutzbaren KI-Output fast immer in der Spezifität des Prompts, nicht in der Fähigkeit des Modells.',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'Denken Sie an KI-Prompts wie an Rezepte: vage Prompts („machen Sie etwas Leckeres\") produzieren inkonsistente Ergebnisse; detaillierte Prompts („backen Sie einen Schokoladenkuchen bei 175°C für 35 Minuten mit Zartbitterschokolade\") produzieren zuverlässige Ergebnisse.' },
          ],
        },
        promptFramework: {
          title: 'Schlecht vs. Gut: Prompts für Unterrichtsplanung',
          content: [
            '**Spezifische, kontextreiche Prompts sparen Lehrkräften 5–13 Stunden pro Woche bei Unterrichtsplanung, wenn konsistent verwendet. Die schlechte Version erfordert 30+ Minuten Überarbeitung; die gute Version erzeugt classroom-ready Output in einem Durchgang.**',
            'Schlechter Prompt — generischer Output:',
          ],
          blockquote: 'Erstelle eine Unterrichtsstunde über Bruchadditionen für Fünftklässler.',
          items: [
            'Dies erzeugt einen vagen Überblick ohne Zeitzuordnung, keine Standards-Ausrichtung, keine Differenzierung und kein Abschluss-Ticket. Der meiste Output wird verworfen.',
          ],
        },
        goodExample: {
          title: 'Der fünfteilige Lehrkräfte-Prompt',
          content: [
            'Guter Prompt — fünfteilige Struktur:',
          ],
          blockquote: 'Du bist ein erfahrener Mathematik-Lehrer der fünften Klasse. Erstelle eine 45-minütige Unterrichtsstunde über Bruchadditionen mit ungleichen Nennern. Die Schüler verstehen äquivalente Brüche, haben sie aber noch nicht kombiniert. Bitte: einen 10-minütigen Warm-up mit visuellen Modellen, 15 Minuten direkte Unterrichtung mit drei durchgearbeiteten Beispielen, 15 Minuten Partner-Praxis, und ein 5-minütiges Abschluss-Ticket. Ausrichtung an Common Core 5.NF.A.1. Geben Sie nur den Unterrichtsplan mit Abschnittsköpfen, Zeitzuordnungen und einer Materialienliste aus.',
          items: [
            'Die strukturierte Version erzeugt ein Dokument mit rubrik-ausgerichteten Abschnitten, zeitgesteuerten Aktivitäten und einer Materialienliste. Einsatzbereit oder zu verfeinern — nicht komplett umzuschreiben.',
          ],
          callouts: [
            { type: '📌', label: 'Wichtiger Punkt', text: 'Die fünf Komponenten sind: (1) Rolle, (2) Ziel, (3) Schülerkontext, (4) Einschränkungen, (5) Ausgabeformat. Die konsistente Verwendung all dieser fünf Komponenten spart 5–13 Stunden pro Woche.' },
          ],
        },
        assessmentPrompt: {
          title: 'Wie schreibe ich KI-Prompts für Bewertungsfeedback?',
          content: [
            '**Für Formativ-Bewertung: Inkludieren Sie Ihre Rubrik-Kriterien direkt im Prompt, damit die KI Ihre Benotungsstandards versteht und sie konsistent über alle Schülereinreichungen anwendet.**',
            'Claude 4.6 Sonnets 200.000-Token [Kontextfenster](/prompt-engineering/context-windows-explained?lang=de) behandelt vollständige Klassensätze kurzer Essays in einer einzelnen Sitzung — ungefähr 160 Standardseiten — was Batch-Feedback-Generierung für Lehrkräfte mit großen Klassen praktisch macht. GPT-4o behandelt ~100 Seiten pro Sitzung, ausreichend für typische Klassengrößen.',
          ],
          blockquote: 'Du bist eine erfahrene Englisch-Lehrerin der siebten Klasse. Analysiere diesen Schüler-Überzeugungsessay unter Verwendung dieser Rubrik: klare These (4 Punkte), drei stützende Argumente mit Belegen (12 Punkte), Anerkennung des Gegenarguments (4 Punkte), formale Übergänge (3 Punkte), Schlussfolgerung, die These verstärkt (3 Punkte). Für jedes Kriterium: geben Sie die Bewertung an, zitieren Sie den relevanten Satz, und schreiben Sie einen spezifischen Verbesserungsvorschlag. Gesamtbewertung von 26 Punkten.',
          callouts: [
            { type: '⚠️', label: 'Warnung', text: 'KI kann Stimme, Originalität oder Schreibqualität zuverlässig nicht beurteilen — verwenden Sie KI-Feedback immer für Mechanik und Struktur, nicht für holistischen Rubrik-Scores bei subjektiven Kriterien. Behalten Sie die endgültige Summativ-Bewertung bei Menschen.' },
          ],
        },
        learningOutcomes: {
          title: 'Verbessert KI-Nachhilfe wirklich die Lernergebnisse?',
          content: [
            '**Schüler, die KI-Tutorialsysteme nutzen, überbieten Gleichaltrige in traditionelle Unterrichtung um 15–35 % in standardisierten Bewertungen über 21 empirische Studien hinweg.**',
            'Die stärkste Evidenz kommt von einer 2024 randomisierten kontrollierten Studie, geleitet von Gregory Kestin und Kelly Miller an der Harvard University, mit 194 Studierenden der Physik. Die Studie nutzte ein Crossover-Design, wo jeder Studierende sowohl KI-Nachhilfe (über „PS2 Pal\", betrieben durch GPT-4) als auch traditionelle aktive Lernmethoden über zwei Themen erlebte. Wichtige Befunde:',
          ],
          callouts: [
            { type: '🔍', label: 'Wussten Sie schon?', text: 'Schüler zeigten höhere Motivation und Engagement in KI-Nachhilfe-Sitzungen. Die Effektstärke (0,73–1,3 SD) ist gleichwertig mit dem Lerngewinn aus der Umstellung von einem typischen Klassenzimmer zu erstklassiger Unterrichtung.' },
          ],
          items: [
            'KI-unterrichtete Schüler erzielen signifikant höhere Ergebnisse bei Nach-Tests — Effektstärke zwischen 0,73 und 1,3 Standardabweichungen',
            'Mittlere Lernzeit: **49 Minuten** (KI-Gruppe) vs. **60 Minuten** (Klassenzimmer-Gruppe)',
            'Schüler berichteten über höhere Motivation und Engagement in KI-Sitzungen',
            'Statistische Signifikanz: p < 10−8',
            'Eine systematische Überprüfung von 2025 von 21 empirischen Studien zeigt, dass KI-unterstützte Schüler Kontrollgruppen in Bewertungen um 15–35 % überbieten, r = 0,781. Eine Stanford-Studie von 2025 zeigt, dass 2–5 Stunden mit einem intelligenten Tutorialsystem zuverlässig End-of-Year-Testergebnisse vorhersagen.',
          ],
        },
        integrityProblem: {
          title: 'Wie erkennbar ist KI-Betrug in Schulen?',
          content: [
            '**Aktuelle KI-Erkennungstools haben in begutachteten Studien falsch-positive Raten von 15–30 %, was bedeutet, dass sie für risikoreiche akademische Integritätsentscheidungen unzuverlässig sind — und viele Schüler nutzen [KI-Halluzinationen](/prompt-engineering/ai-hallucinations-how-to-stop?lang=de) strategisch, um Erkennung zu vermeiden.**',
            'Akademische Integrität ist die zentrale Herausforderung in KI-unterstützter Bildung. Der Umfang der Adoption hat sowohl Richtlinien als auch Erkennungstechnologie überholt. Schüler-Adoption ist weit verbreitet: Umfragen berichten 60–92 % der Schüler nutzen KI zum Lernen, obwohl institutionelle Richtlinien bezüglich erlaubter Nutzungen stark unterscheiden.',
            'Das Erkennungsproblem hat drei kritische Schichten:',
          ],
          items: [
            '**Falsch-positive Ergebnisse** — Nichtmuttersprachler werden überproportional höher gekennzeichnet; strukturierte akademische Schreibstile (häufig in technischen Fächern) lösen Erkennungstools konsistent aus',
            '**Hybrid-Text** — KI-Entwürfe, die von Schülern erheblich bearbeitet wurden, besiegen die meisten Erkennungssysteme',
            '**Richtlinien-Lücke** — Universitäten verschieben 2026 von absoluten Verboten zu Transparenz- und Offenlegungs-Rahmenbedingungen, die von Schülern KI-Unterstützung erfordern, anstatt sie zu verbieten',
          ],
          callouts: [
            { type: '⚠️', label: 'Warnung', text: 'Nichtmuttersprachler und Schüler mit strukturiertem Schreibstil werden überproportional höher gekennzeichnet. Die Beschuldigung eines Schülers allein auf Basis von KI-Erkennungsoutput hat ein 15–30 % Risiko falsch zu liegen.' },
          ],
        },
        integrityCloser: {
          content: [
            'Der entstehende institutionelle Konsens: KI-Erkennungstools sind keine abschließenden Autoritäten. Universitäten fordern zunehmend menschlich-automatisierte Überprüfung auf und erzwingen Offenlegungs-Normen statt Verbots-Normen.',
          ],
        },
        regulatoryContext: {
          title: 'Wie wirkt sich der EU AI Act auf Schulen aus?',
          content: [
            '**Der EU AI Act klassifiziert KI-Systeme im Bildungswesen als „hochriskant\" — das bedeutet, Tools, die Prüfungsbewertung, Lernpfade oder Schülerbewertung beeinflussen, unterliegen obligatorischer Transparenz, menschlicher Überwachung und Verzerrungsvermeidungsanforderungen.**',
            'Nach Annex III des EU AI Act sind Bildungs-KI-Tools, die Zugang zu Bildung bestimmen oder Lernergebnisse bewerten, als hochriskante Systeme klassifiziert. Schulen und Universitäten, die in der EU betrieben werden, sind als KI-\"Bereitsteller\" unter dem Gesetz betrachtet und tragen rechtliche Verpflichtungen, einschließlich:',
          ],
          items: [
            'Sicherung von KI-Kompetenz des Personals (Artikel 4 Mandat — gültig ab 2025)',
            'Implementierung menschlicher Überwachung für alle hochriskanten KI-Entscheidungen, die Schüler betreffen',
            'Verwaltung von Audit-Logs von KI-beeinflussten Bewertungen',
            'Offenlegung von KI-System-Datenquellen und Modelllogik gegenüber Schülern auf Anfrage',
          ],
          callouts: [
            { type: '📌', label: 'Wichtiger Punkt', text: 'EU-Schulen müssen KI-Kompetenzkurs für alle Lehrkräfte und Administratoren durchführen, die mit KI-Systemen arbeiten (Artikel 4, gültig ab 2025). Nicht-Compliance trägt Strafen bis zu 30 Millionen Euro.' },
          ],
        },
        regulatoryRegionalContext: {
          title: 'Globale Bildungs-KI-Bestimmungen',
          content: [
            'Der EU AI Act verbietet Emotionserkennung-Systeme in Bildungseinrichtungen komplett — direkt wirkend auf Tools, die Schüler-Engagement durch Gesichtsanalyse verfolgen. Chinesische Bildungsinstitutionen setzen KI-Tools unter Chinas Interim-Maßnahmen für generative KI (2023) ein, die verlangen, dass KI-generierte Unterrichtsinhalte als solche gekennzeichnet werden. Japans Bildungsministerium (MEXT) gab 2023 Leitlinien aus, die vor KI-Nutzung in bestimmten Bewertungskontexten warnen, während KI als Kern-Schülerkompetenz anerkennen.',
          ],
        },
        regionalContext: {
          title: 'Im DACH-Kontext: KI in Schulen und Bildungsinstitutionen',
          content: [
            '**Der Einsatz von KI in deutschen, österreichischen und schweizer Schulen und Bildungsinstitutionen erfordert sorgfältige Beachtung von DSGVO-Compliance, BSI-Richtlinien und Dokumentation für Schulbehörden. Die Chancen sind immens — aber Struktur und Compliance sind Voraussetzung.**',
            'KI im deutschsprachigen Bildungskontext bietet einzigartige Möglichkeiten und Herausforderungen:',
          ],
          items: [
            '**DSGVO-Konformität und Artikel 28:** Wenn eine Schule KI-Plattformen (ChatGPT, Claude, Khanmigo) nutzt, die Schülerdaten verarbeitet, benötigt die Schule einen Data Processing Agreement (DPA) mit dem Anbieter. Prüfen Sie, ob Ihr Tool-Anbieter DPAs für Schulen anbietet. Lokale oder DACH-gehostete Lösungen (Ollama mit lokaler Inferenz, LM Studio) reduzieren Datenschutz-Risiken deutlich.',
            '**BSI-Grundschutz-Kataloge:** Das Deutsche Bundesamt für Sicherheit in der Informationstechnik (BSI) hat Richtlinien für sichere IT-Systeme in Schulen herausgegeben. KI-Systeme sollten mit BSI-Empfehlungen für Authentifizierung, Datenverschlüsselung und Zugriffskontrolle konform sein. Dokumentieren Sie die Konfiguration Ihrer KI-Tools gegen BSI-Standards.',
            '**Schulverwaltungs-Dokumentation:** Schulbehörden in Deutschland, Österreich und der Schweiz verlangen zunehmend Dokumentation aller KI-Einsätze. Führen Sie Audit-Trails für alle KI-beeinflussten Bewertungen, speichern Sie Prompts und Settings, und dokumentieren Sie Schulungen zum KI-Einsatz. Dies ist nicht nur für Compliance — es hilft auch bei kontinuierlichen Verbesserungen.',
            '**Lokale Modelle und Mittelstands-Lösungen:** Für Schulen mit begrenztem Budget oder hohen Datenschutz-Anforderungen sind lokale Open-Source-Modelle (Ollama, LM Studio, llama.cpp) eine praktische Alternative. Diese erfordern Grundkenntnisse in IT, ersparen aber Kosten und vermeiden Datenabfluss außerhalb der EU.',
            '**Mittelständische Schulen und Gymnasien:** Der deutschsprachige Mittelstand (kleine bis mittlere Schulen, Gymnasien, Berufsschulen) hat erfolgreich KI eingeführt, wenn diese fünf Strukturen vorhanden sind: Lehrkräfte-Schulung (mindestens 4 Stunden pro Jahr), dokumentierte Richtlinien (welche Aufgaben erlaubt sind), DSGVO-DPA mit Tool-Anbietern, regelmäßige Überwachung der Ergebnisse, Eltern-Information zur Transparenz. Schulen in Baden-Württemberg, Bayern, Nordrhein-Westfalen und der Deutschschweiz sind Vorbilder für dieses Modell.',
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler bei der Verwendung von KI im Bildungswesen',
          content: [
            '**Diese fünf Fallstricke kosten Lehrkräften Zeit und können rechtliche oder ethische Probleme erzeugen — alle sind einfach mit dem richtigen Prozess zu beheben.**',
          ],
          items: [
            '**KI als Benotungs-Ersatz statt Feedback-Tool nutzen:** KI generiert plausible Rubrik-Scores, kann aber Originalität, Stimme oder Argumentationsqualität in längeren Schriften nicht zuverlässig bewerten. Verwenden Sie KI für Formativ-Feedback bei niedrig-riskanten Arbeiten; behalten Sie Summativ-Beurteilung als Mensch.',
            '**Unstrukturierte Prompts für Unterrichtsplanung:** „Erstelle eine Lektion über Photosynthese\" erzeugt einen generischen Output, der mehr Bearbeitungszeit erfordert als von Grund auf zu schreiben. Spezifizieren Sie immer Klassenstufe, Vorwissen, Zeitbeschränkungen und Ausgabeformat.',
            '**Übervertrauen auf KI-Erkennungstools für akademische Integrität:** Falsch-positive Raten von 15–30 % bedeuten, dass die ausschließliche Beschuldigung eines Schülers auf KI-Erkennungsoutput ein 15–30 % Risiko falsch zu liegen trägt. Nichtmuttersprachler werden überproportional höher gekennzeichnet.',
            '**EU AI Act-Verpflichtungen für EU-Schulen ignorieren:** Bildungs-KI-Tools, die Lernpfade oder Bewertung beeinflussen, sind hochriskant unter Annex III. EU-Schulen, die diese Tools ohne Artikel 4-Personalkompetenzkurs einsetzen, sind nicht conform.',
            '**Hohe-Temperatur-Einstellungen für Unterrichtsinhalte verwenden:** Standard-Temperatur auf den meisten KI-Plattformen (0,7–1,0) erhöht Halluzinations-Risiko. Für sachliche Unterrichtsinhalte, Bewertungsrichtlinien und Literaturangaben-Generierung, setzen Sie Temperatur auf 0,1–0,2.',
          ],
          callouts: [
            { type: '🛠️', label: 'Best Practice', text: 'Dokumentieren Sie alle KI-Nutzung: welches Tool, welche Einstellungen (Temperatur, Kontext), und welche Aufgabe. Dies erzeugt eine Audit-Spur für Compliance (EU AI Act Artikel 6) und hilft Ihnen, im Laufe der Zeit zu verbessern.' },
          ],
        },
        relatedReading: {
          title: 'Weiterführende Literatur',
          items: [
            '[Was ist Prompt-Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=de) — die grundlegenden Prinzipien hinter effektiven KI-Anweisungen',
            '[Schreiben Sie besseren Code mit KI](/prompt-engineering/write-better-code-with-ai?lang=de) — wie strukturierte Prompts zuverlässige KI-Ausgaben erzeugen — anwendbar auf Unterrichtsplanung und Bewertungsgenerierung',
            '[KI-Einschränkungen — Was LLMs nicht können](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=de) — warum KI-Halluzination Lehrkräfte-Tools beeinflusst und wie man drumherum entwirft',
            '[KI-gestützte Forschung](/prompt-engineering/ai-powered-research?lang=de) — Validierungs-Workflows für KI-generierte Inhalte, anwendbar auf Schüler- und Lehrkräfte-Forschungsaufgaben',
            '[Persona-Prompting](/prompt-engineering/persona-prompting?lang=de) — wie Rollen-Definitionen wie „erfahrener Fünftklasse-Mathematik-Lehrer\" KI-Output-Qualität und Konsistenz ändern',
            '[Chain-of-Thought-Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de) — die Reasoning-Technik hinter sokratischen KI-Tutoren wie Khanmigo',
          ],
        },
        howToStart: {
          title: 'Schritt für Schritt: KI in den Unterricht integrieren',
          content: [
            '**Folgen Sie diesen fünf Schritte, um KI in Ihren Unterricht zu integrieren, ohne Lernergebnisse zu stören oder akademische Integritäts-Standards zu verletzen.**',
          ],
          numberedItems: [
            'Definieren Sie Lernziele und Bewertungen, bevor Sie KI einführen.',
            'Nutzen Sie KI für personalisierte Übung und sofortiges Feedback, nicht für Benotungsurteile.',
            'Unterrichten Sie Schüler, wie sie KI-Outputs überprüfen und Halluzinationen erkennen.',
            'Erstellen Sie eine strukturierte Prompt-Vorlage, die Schüler für alle KI-Interaktionen verwenden.',
            'Legen Sie klare Richtlinien zur KI-Nutzung für bestimmte Aufgaben fest.',
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          items: [],
          faqs: [
            {
              q: 'Verbessern KI-Tutoren wirklich die Lernergebnisse?',
              a: 'Ja — die Evidenz ist stark. Eine randomisierte kontrollierte Studie von Harvard aus dem Jahr 2024 mit 194 Studierenden der Physik stellte fest, dass KI-Nachhilfe Effektstärken von 0,73–1,3 Standardabweichungen über aktiven Lernklassenzimmern produzierte, wobei Studierende höhere Ergebnisse in 49 Minuten gegenüber 60 Minuten Unterrichtszeit erreichten (p < 10−8). Eine systematische Übersicht aus dem Jahr 2025 von 21 Studien zeigt, dass KI-unterstützte Schüler traditionelle Unterrichtsmethoden in Bewertungen um 15–35 % übertreffen.',
            },
            {
              q: 'Welches ist das beste KI-Tool für Lehrkräfte 2026?',
              a: 'Die Antwort hängt von der Aufgabe ab. Khanmigo (Khan Academy, betrieben durch GPT-4) ist am stärksten für Schülernachhilfe durch sokratisches Fragen zu 44 US-Dollar pro Jahr. MagicSchool führt bei umfassenden Lehrkräfte-Workflow-Tools (Unterrichtspläne, IEPs, Elternkommunikation). ChatGPT (GPT-4o, OpenAI) bietet die flexibelste universelle Inhalterstellung. Für komplexe Lehrplananalysen behandelt Claude 4.6 Sonnet (Anthropic) 200.000 Token — ungefähr 160 Standardseiten — in einer einzigen Sitzung.',
            },
            {
              q: 'Wie viel Zeit kann KI Lehrkräften pro Woche sparen?',
              a: 'Spezifische, kontextreiche Prompts sparen Lehrkräften 5–13 Stunden pro Woche bei Unterrichtsplanung und Verwaltungsaufgaben, wenn sie konsistent verwendet werden. Die häufigsten Zeitersparnis-Anwendungen sind: Recherche und Inhaltssammlung (44 % der Lehrkräfte), Unterrichtsplanerstellung (38 %), Informationszusammenfassung (38 %) und Erstellung von Klassenmaterialien (37 %).',
            },
            {
              q: 'Ist KI im Bildungswesen rechtlich unter EU-Bestimmungen zulässig?',
              a: 'KI-Systeme, die Lernbewertung oder Lernpfade beeinflussen, werden im EU AI Act (Annex III) als hochriskant klassifiziert. EU-Schulen müssen Schulungen zur KI-Kompetenz für Lehrkräfte (Artikel 4, gültig ab 2025) durchführen, menschliche Überwachung für KI-beeinflusste Bewertungen aufrechthalten und Audit-Trails für alle KI-Systeme führen, die Schülerergebnisse beeinflussen. Emotionserkennung-KI in Bildungseinrichtungen ist gemäß dem Gesetz komplett verboten.',
            },
            {
              q: 'Erkennt KI-Erkennungssoftware zuverlässig akademisches Betrügen?',
              a: 'Nein — aktuelle KI-Erkennungstools haben in begutachteten Studien falsch-positive Raten von 15–30 %, was bedeutet, dass bis zu 30 von jeweils 100 legitimen Schülereinreichungen fälschlicherweise gekennzeichnet werden können. Nichtmuttersprachler und Studierende, die in strukturierten akademischen Stilen schreiben, werden überproportional höher gekennzeichnet. Universitäten verschieben 2026 von Verbotsrichtlinien zu Offenlegungs- und Zitierrahmen und behandeln KI-Erkennung als einen Input unter mehreren statt als abschließender Beweis des Fehlverhaltens.',
            },
            {
              q: 'Welche Temperatureinstellung sollten Lehrkräfte für KI-Unterrichtsplanung verwenden?',
              a: 'Stellen Sie die Temperatur auf 0,1–0,2 für sachliche Unterrichtsinhalte — Unterrichtspläne, Bewertungsrichtlinien, Lehrplanalignment. Dies erzeugt konsistente, niedrig-variierende Outputs. Verwenden Sie 0,7–0,9 nur bei der Erstellung kreativer Aktivitätsideen, bei denen verschiedene Optionen das Ziel sind. Die Standardtemperatur auf den meisten Plattformen (0,7–1,0) ist für kreative Aufgaben ausgelegt und erhöht sachliche Fehler in Unterrichtsinhalten.',
            },
            {
              q: 'Können KI-Tools bei differenziertem Unterricht helfen?',
              a: 'Ja — dies ist einer der stärksten Einsatzbereiche von KI im Bildungswesen. LLMs können denselben Inhalt in Sekunden auf mehreren Lesefähigkeitsstufen umschreiben (Flesch-Kincaid Klasse 4, 8 und 12). Prompt-Struktur: „Schreiben Sie diesen Abschnitt auf Klassenstufe [N] um. Bewahren Sie alle sachlichen Inhalte. Ersetzen Sie komplexes Vokabular durch einfachere Entsprechungen. Behalten Sie die gleiche Absatzstruktur bei.\" Claude 4.6 Sonnet produziert die konsistenteste Differenzierung über Lesefähigkeitsstufen hinweg.',
            },
            {
              q: 'Wie sollten Schulen KI-Kompetenz für Lehrkräfte unter dem EU AI Act handhaben?',
              a: 'Artikel 4 des EU AI Act verlangt, dass KI-Bereitsteller (einschließlich Schulen) ausreichende KI-Kompetenz für alle Mitarbeitenden sicherstellen, die mit KI-Systemen arbeiten — gültig ab 2025. Dies bedeutet Schulungen zu: wie KI Entscheidungen trifft, welche Fehlerraten spezifische Tools haben, wann menschliche Überwachung erforderlich ist, und wie KI-beeinflusste Entscheidungen dokumentiert werden. Schulen sollten diese Schulung für Audit-Zwecke dokumentieren.',
            },
            {
              q: 'Was ist Khanmigo und wie unterscheidet es sich von ChatGPT für Schüler?',
              a: 'Khanmigo ist der KI-Tutorialassistent der Khan Academy, betrieben durch GPT-4. Sein definierendes Merkmal ist die sokratische Fragestellung — es führt Schüler zu Antworten, anstatt ihnen direkt Antworten zu geben. Wenn ein Schüler „Was ist die Antwort?\" fragt, antwortet Khanmigo mit einer leitenden Frage. Dieses Design fördert Lernbehaltung. ChatGPT liefert standardmäßig direkte Antworten, was effizient ist, aber den kognitiven Aufwand reduziert, der langfristiges Lernen erzeugt. Für schülerfreundliche Nachhilfe ist Khanmigos pädagogisches Design überlegen; für Inhalterstellung durch Lehrkräfte gewinnt ChatGPTs Flexibilität.',
            },
            {
              q: 'Wie erstelle ich eine KI-Nutzungsrichtlinie für meine Schule?',
              a: 'Eine wirksame Schulrichtlinie zur KI-Nutzung definiert vier Dinge: (1) welche Aufgaben KI erlaubt sind (Brainstorming, Übungsprobleme, Feedbackentwürfe), (2) welche Aufgaben Offenlegung erfordern (KI-assistierte Essays, Präsentationen), (3) welche Aufgaben KI verboten ist (endgültige Prüfungsantworten, Plagiate), (4) wie KI-generierte Inhalte zitiert werden müssen. Die Richtlinie sollte alle 6 Monate überprüft werden, angesichts des rasanten Werkzeugentwicklungstempo. EU-Schulen müssen in jedem Richtliniendokument zusätzlich EU AI Act Artikel 4-Schulungsanforderungen und Annex III-Hochrisikoobligationen adressieren.',
            },
            {
              q: 'Muss ich bei der Verwendung von KI-Lehrkräfte-Tools die DSGVO beachten?',
              a: 'Ja — wenn Ihre Schule in der EU oder im EWR liegt und KI-Tools Schülerdaten verarbeitet, müssen Sie die DSGVO einhalten. Der kritische Punkt ist Artikel 28: Wenn die KI-Plattform (z. B. ChatGPT, Claude) als Auftragsverarbeiter fungiert, benötigen Sie einen Data Processing Agreement (DPA). Viele kommerziellen LLM-Anbieter bieten DPAs an; überprüfen Sie direkt bei Ihrem Toolanbieter. Für Schulen in Deutschland und der Schweiz: Der Einsatz von lokaler Inferenz (on-premise oder DACH-gehostete Modelle) über Ollama oder LM Studio reduziert das Datenschutzrisiko deutlich. Referenzieren Sie die BSI-Grundschutz-Kataloge für sichere lokale KI-Bereitstellungsarchitekturen im Schulkontext.',
            },
            {
              q: 'Ist KI-Unterrichtstechnologie für den deutschen Mittelstand geeignet?',
              a: 'Absolut — vor allem für kleinere bis mittlere Schulen und Bildungsinstitutionen. KI-Tools wie ChatGPT, Claude und Khanmigo erfordern keine großen IT-Infrastrukturen oder spezialisiertes technisches Personal. Der Schlüssel zum Erfolg im deutschsprachigen Kontext (Deutschland, Österreich, Schweiz) ist: (1) Dokumentation aller KI-Nutzung für BSI- und DSGVO-Compliance, (2) Schulung der Lehrkräfte auf Eine-Stunde-Basis-Level zu Prompt-Strukturierung, (3) lokale oder DACH-gehostete Lösungen für sensible Schülerdaten priorisieren, (4) Führen Sie Audit-Trails für alle KI-beeinflussten Bewertungen. Mittelständische Schulen in Baden-Württemberg, Bayern und der Deutschschweiz benutzen bereits KI erfolgreich, wenn die oben genannten Strukturen vorhanden sind.',
            },
          ],
        },
        sources: {
          title: 'Quellen und weitere Ressourcen',
          content: [
            '**Alle Statistiken und Befunde in diesem Artikel sind von begutachteter Forschung, amtlicher Regierungsleitlinien und dokumentierten institutionellen Richtlinien beschafft.** Letzte Faktenchecks: 2026-04-28 (gegen aktuelle Claude 4.6 Sonnet, GPT-4o, Gemini 2.5 Pro Modelle; aktuelle Khanmigo-Preise bei Khan Academy; aktuelle EU AI Act Artikel 4-Leitlinien gültig ab 2025).',
          ],
          items: [
            '[Kestin & Miller, 2024. \"KI-Nachhilfe übertrifft aktive Lernklassenzimmer — Harvard RCT\"](https://www.nature.com/articles/s41598-025-97652-6) — randomisierte kontrollierte Studie mit 194 Schülern; Effektstärke 0,73–1,3 SD',
            '[Kwak, 2025. \"The Effectiveness of AI-Driven Tools in Improving Student Learning Outcomes\"](https://iacis.org/iis/2025/4_iis_2025_233-247.pdf) — systematische Überprüfung von 21 Studien; 15–35 % Leistungsgewinne; r = 0,781',
            '[EU AI Act, 2024. Anhang III — Hochrisiko-KI-Systeme in der Bildung](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) — klassifiziert Bildungs-Bewertungs-KI als hochriskant mit obligatorischen Überwachungsanforderungen',
          ],
        },
      },
    },
    fr: {
  freshness_tier: 'semi_annual',
  theme: 'Use Cases',
  title: 'Enseigner avec l\'IA : outils, résultats et prompts pour éducateurs 2026',
  intro: '**Pour enseigner efficacement avec l\'IA en 2026 : utilisez un prompt structuré à cinq composants (rôle, objectif, contexte apprenant, contraintes, format de sortie), choisissez un outil adapté à la tâche (Khanmigo pour tutorat, MagicSchool pour planification, Claude 4.6 Sonnet ou GPT-4o pour création de contenu), réglez la température sur 0,1–0,2 pour contenu factuel, et — dans les écoles de l\'UE — mettez en place une formation en compétences IA pour tous les enseignants avant le déploiement de systèmes à haut risque selon l\'article 4.** Une étude randomisée contrôlée de Harvard en 2024 a montré que le tutorat par IA produit des gains d\'apprentissage plus que deux fois supérieurs aux salles de classe d\'apprentissage actif — en 18 % moins de temps. En avril 2026, 85 % des enseignants américains et 86 % des élèves utilisent l\'IA pendant l\'année scolaire — le taux d\'adoption le plus élevé de toute industrie. Le défi ne réside pas dans l\'adoption, mais dans la structure : des prompts vagues produisent des résultats inutilisables, les prompts structurés économisent 5–13 heures par semaine, et les écoles de l\'UE ont désormais des obligations légales selon la Loi IA pour tout outil IA affectant l\'évaluation des élèves.',
  publishDate: '2026-03-23',
  dateModified: '2026-04-28',
  readTime: '8 min de lecture',
  seoTitle: 'Enseigner avec l\'IA : outils, prompts et résultats pour enseignants (2026)',
  metaDescription: 'Étude Harvard : le tutorat IA double les résultats d\'apprentissage en 18 % moins de temps. 85 % des enseignants utilisent l\'IA — les prompts structurés économisent 5 à 13 h/semaine.',
  educationalLevel: 'Débutant',
  audience: 'Enseignants, administrateurs scolaires et professionnels de l\'éducation utilisant des outils IA',
  aboutTopics: ['IA en éducation', 'Khanmigo', 'Loi IA de l\'UE'],
  howToName: 'Comment enseigner avec l\'IA',
  next_refresh_due: '2026-09-23',
  primaryTerm: 'Enseigner avec l\'IA',
  toc: [
    { label: 'Ce que les outils pédagogiques IA font vraiment', anchor: '#what-ai-teaching-tools-actually-do' },
    { label: 'Quels outils IA les enseignants doivent-ils utiliser en 2026 ?', anchor: '#which-ai-tools-should-teachers-use-in-2026' },
    { label: 'Comment rédiger des prompts pour les tâches pédagogiques', anchor: '#how-to-write-prompts-for-teaching-tasks' },
    { label: 'Le prompt pédagogue à cinq composants', anchor: '#the-five-component-teacher-prompt' },
    { label: 'Comment rédiger des prompts IA pour les commentaires d\'évaluation ?', anchor: '#how-do-you-prompt-ai-for-assessment-feedback' },
    { label: 'Le tutorat par IA améliore-t-il vraiment les résultats ?', anchor: '#does-ai-tutoring-improve-learning-outcomes' },
    { label: 'La triche par IA est-elle détectable dans les écoles ?', anchor: '#how-detectable-is-ai-cheating-in-schools' },
    { label: 'Comment la Loi IA de l\'UE affecte-t-elle les écoles ?', anchor: '#how-does-the-eu-ai-act-affect-schools' },
    { label: 'Erreurs courantes dans l\'utilisation de l\'IA en éducation', anchor: '#common-mistakes-when-using-ai-in-education' },
    { label: 'Étape par étape : intégrer l\'IA dans l\'enseignement', anchor: '#step-by-step-integrating-ai-into-your-teaching' },
    { label: 'Lectures complémentaires', anchor: '#related-reading' },
    { label: 'Questions fréquemment posées', anchor: '#frequently-asked-questions' },
    { label: 'Sources et ressources supplémentaires', anchor: '#sources-further-reading' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=fr',
    inLanguage: 'fr',
    headline: 'Enseigner avec l\'IA : outils, résultats et prompts pour éducateurs 2026',
    description: 'Les systèmes de tutorat IA doublent les résultats d\'apprentissage par rapport aux salles de classe traditionnelles. Découvrez comment les enseignants utilisent l\'IA pour la planification pédagogique, l\'évaluation et le tutorat des élèves, et pourquoi 85 % des enseignants américains ont adopté l\'IA en 2026.',
    datePublished: '2026-03-23',
    dateModified: '2026-04-28',
    proficiencyLevel: 'Débutant',
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      sameAs: 'https://www.promptquorum.com/about',
    },
    about: [
      { '@type': 'Thing', name: 'IA en éducation' },
      { '@type': 'SoftwareApplication', name: 'Khanmigo' },
      { '@type': 'Legislation', name: 'Loi IA de l\'UE' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro', '.key-takeaways'],
    },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'Teacher',
      audienceType: 'Enseignants, administrateurs scolaires, professionnels de l\'éducation',
    },
    educationalLevel: 'K-12, Enseignement supérieur',
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/logo.svg',
      },
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://www.promptquorum.com/api/og/teaching-with-ai?lang=fr',
      width: 1200,
      height: 630,
    },
    keywords: ['IA tutoring', 'IA en éducation', 'Khanmigo', 'planification pédagogique', 'ChatGPT enseignants', 'Claude éducation', 'engineering des prompts enseignement'],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'Khanmigo' },
      { '@type': 'SoftwareApplication', name: 'MagicSchool' },
      { '@type': 'SoftwareApplication', name: 'ChatGPT' },
      { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
      { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
      { '@type': 'SoftwareApplication', name: 'NotebookLM' },
      { '@type': 'Organization', name: 'Harvard University' },
      { '@type': 'Organization', name: 'Khan Academy' },
      { '@type': 'Organization', name: 'PromptQuorum' },
    ],
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'fr',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Le tutorat par IA améliore-t-il vraiment les résultats d\'apprentissage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui — la preuve est solide. Une étude randomisée contrôlée de Harvard en 2024 avec 194 étudiants en physique a montré que le tutorat par IA produit des tailles d\'effet de 0,73–1,3 écarts-types au-dessus des salles de classe d\'apprentissage actif, les étudiants obtenant des résultats plus élevés en 49 minutes par rapport à 60 minutes en classe (p < 10−8). Un examen systématique de 2025 couvrant 21 études montre que les élèves avec assistance IA surpassent les méthodes d\'enseignement traditionnelles de 15–35 % aux évaluations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le meilleur outil IA pour les enseignants en 2026 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La réponse dépend de la tâche. Khanmigo (Khan Academy, alimenté par GPT-4) excelle pour le tutorat des élèves par questionnement socratique à 44 $/année. MagicSchool domine pour les outils de flux de travail pédagogique complets (plans d\'études, PEI, communication parentale). ChatGPT (GPT-4o, OpenAI) offre la création de contenu universelle la plus flexible. Pour l\'analyse pédagogique complexe, Claude 4.6 Sonnet (Anthropic) traite 200 000 tokens — environ 160 pages standard — en une seule session.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps l\'IA peut-elle économiser aux enseignants chaque semaine ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les prompts spécifiques et contextuels économisent aux enseignants 5–13 heures par semaine en planification et tâches administratives, utilisés régulièrement. Les applications d\'économie de temps les plus courantes sont : recherche et collecte de contenu (44 % des enseignants), création de plans d\'études (38 %), synthèse d\'informations (38 %) et création de matériels de classe (37 %).',
        },
      },
      {
        '@type': 'Question',
        name: 'L\'IA en éducation est-elle juridiquement autorisée selon la législation de l\'UE ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les systèmes IA affectant l\'évaluation d\'apprentissage ou les parcours d\'apprentissage sont classés comme haut risque dans la Loi IA de l\'UE (Annexe III). Les écoles de l\'UE doivent fournir une formation en compétences IA pour tous les enseignants (article 4, applicable à partir de 2025), maintenir une supervision humaine pour les évaluations influencées par l\'IA et conserver des journaux d\'audit pour tous les systèmes IA affectant les résultats des élèves. La reconnaissance d\'émotions IA dans les établissements éducatifs est entièrement interdite par la loi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le logiciel de détection d\'IA détecte-t-il fiablement la triche académique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Non — les outils de détection d\'IA actuels ont des taux de faux positifs de 15–30 % dans les études examinées par les pairs, ce qui signifie que jusqu\'à 30 sur 100 soumissions d\'élèves légitimes peuvent être incorrectement signalées. Les locuteurs non natifs et les étudiants écrivant dans des styles académiques structurés sont signalés de manière disproportionnée. Les universités en 2026 abandonnent les politiques d\'interdiction en faveur de cadres de divulgation et de citation, traitant la détection d\'IA comme l\'un des plusieurs indices plutôt que comme preuve concluante de faute.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel réglage de température les enseignants doivent-ils utiliser pour la planification pédagogique IA ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Réglez la température sur 0,1–0,2 pour le contenu pédagogique factuel — plans d\'études, directives d\'évaluation, alignement curriculaire. Cela produit des résultats cohérents et à faible variation. Utilisez 0,7–0,9 uniquement pour créer des idées d\'activités créatives où les variations sont souhaitées. La température par défaut sur la plupart des plates-formes (0,7–1,0) est conçue pour les tâches créatives et augmente les erreurs factuelles dans le contenu pédagogique.',
        },
      },
      {
        '@type': 'Question',
        name: 'L\'IA peut-elle aider à la pédagogie différenciée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui — c\'est l\'un des cas d\'usage les plus forts de l\'IA en éducation. Les LLM peuvent reformuler le même contenu en secondes à plusieurs niveaux de lecture (Flesch-Kincaid classe 4, 8 et 12). Structure du prompt : « Réécrivez ce passage au niveau de la classe [N]. Préservez tout le contenu factuel. Remplacez le vocabulaire complexe par des équivalents plus simples. Conservez la même structure de paragraphe. » Claude 4.6 Sonnet produit la différenciation la plus cohérente entre les niveaux de lecture.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment les écoles doivent-elles gérer les compétences IA pour les enseignants selon la Loi IA de l\'UE ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'article 4 de la Loi IA de l\'UE exige que les fournisseurs d\'IA (y compris les écoles) garantissent des compétences IA suffisantes pour tout le personnel travaillant avec des systèmes IA — applicable à partir de 2025. Cela signifie la formation sur : comment l\'IA prend les décisions, quels taux d\'erreur les outils spécifiques ont, quand la supervision humaine est requise, et comment documenter les décisions influencées par l\'IA. Les écoles doivent documenter cette formation à des fins d\'audit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qu\'est-ce que Khanmigo et comment diffère-t-il de ChatGPT pour les élèves ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Khanmigo est l\'assistant tuteur pédagogique IA de Khan Academy, alimenté par GPT-4. Sa caractéristique déterminante est la questionnement socratique — il guide les élèves vers les réponses plutôt que de leur donner les réponses directement. Quand un élève demande « Quelle est la réponse ? », Khanmigo répond par une question directrice. Cette conception favorise la rétention d\'apprentissage. ChatGPT fournit par défaut des réponses directes, ce qui est efficace mais réduit l\'effort cognitif générant l\'apprentissage à long terme. Pour le tutorat respectueux des élèves, la conception pédagogique de Khanmigo est supérieure ; pour la création de contenu par les enseignants, la flexibilité de ChatGPT gagne.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment créer une politique d\'utilisation d\'IA pour mon école ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une politique d\'utilisation d\'IA efficace définit quatre choses : (1) quelles tâches autorisent l\'IA (remue-méninges, problèmes pratiques, brouillons de rétroaction), (2) quelles tâches nécessitent divulgation (essais assistés par IA, présentations), (3) quelles tâches interdisent l\'IA (réponses aux examens finaux, plagiat), (4) comment citer le contenu généré par IA. La politique doit être révisée tous les 6 mois compte tenu du rythme rapide du développement des outils. Les écoles de l\'UE doivent également traiter les exigences de formation article 4 de la Loi IA et les obligations à haut risque de l\'annexe III dans chaque document de politique.',
        },
      },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: 'fr',
    name: 'Comment intégrer l\'IA dans l\'enseignement',
    url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=fr',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Définissez les objectifs d\'apprentissage et les évaluations avant d\'introduire l\'IA',
        text: 'Spécifiez ce que les élèves doivent savoir et comment vous l\'évaluerez. Concevez ensuite où l\'IA amplifie l\'enseignement.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Utilisez l\'IA pour la pratique personnalisée et la rétroaction immédiate, pas pour la notation',
        text: 'L\'IA excelle dans la création de problèmes pratiques et la fourniture de rétroaction immédiate. Évitez d\'utiliser l\'IA pour la notation subjective sans révision humaine.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Enseignez aux élèves à valider les résultats d\'IA et à reconnaître les hallucinations',
        text: 'Montrez aux élèves la validation multi-modèle et la vérification des faits par rapport aux sources primaires pour développer la pensée critique et les compétences IA.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Créez un modèle de prompt structuré que les élèves utilisent pour toutes les interactions IA',
        text: 'Utilisez Rôle → Objectif → Portée → Format de sortie → Méthode de validation. Pratiquez ce modèle ensemble jusqu\'à ce que les élèves reconnaissent que les prompts vagues produisent des réponses vagues.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Établissez des directives claires pour l\'utilisation d\'IA pour des tâches spécifiques',
        text: 'Soyez explicite sur les tâches où l\'IA est autorisée (remue-méninges, problèmes pratiques) et où elle ne l\'est pas (réponses aux examens, code sans attribution).',
      },
    ],
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'fr',
    name: 'Outils IA pour enseignants 2026',
    description: 'Comparaison des outils pédagogiques IA pour utilisation en classe',
    url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=fr',
    numberOfItems: 6,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Khanmigo', description: 'Tutorat des élèves par questionnement socratique. K-12, écosystème Khan Academy. 44 $ par année.' },
      { '@type': 'ListItem', position: 2, name: 'MagicSchool', description: 'Planification pédagogique et gestion de classe. Enseignants K-12. Version gratuite limitée.' },
      { '@type': 'ListItem', position: 3, name: 'ChatGPT / GPT-4o', description: 'Création de contenu flexible et rédaction. Tous les niveaux, toutes les matières. Version gratuite limitée.' },
      { '@type': 'ListItem', position: 4, name: 'Claude 4.6 Sonnet', description: 'Conception de plans d\'études à long terme, 200 000 tokens de contexte. Enseignement supérieur et tâches complexes. Version gratuite limitée.' },
      { '@type': 'ListItem', position: 5, name: 'NotebookLM', description: 'Questions et réponses basées sur sources pour matériels téléchargés. Université et recherche. Gratuit.' },
      { '@type': 'ListItem', position: 6, name: 'Gemini 2.5 Pro', description: 'Analyse de documents volumineux, 1 million de tokens de contexte. Administration scolaire. Version gratuite limitée.' },
    ],
  },
  sections: {
    tldr: {
      title: 'Points clés',
      isTldr: true,
      items: [
        'Les tuteurs IA ont produit des gains d\'apprentissage plus que deux fois supérieurs aux salles de classe d\'apprentissage actif dans l\'étude randomisée contrôlée de Harvard 2024 (194 élèves ; taille d\'effet 0,73–1,3 SD) en 18 % moins de temps',
        '85 % des enseignants américains et 86 % des élèves ont utilisé l\'IA au cours de l\'année scolaire 2024–25 — le taux d\'adoption d\'IA le plus élevé de toute industrie mondialement',
        'Les prompts d\'enseignant structurés (avec niveau de classe, objectif, contexte apprenant et format de sortie) économisent 5–13 heures par semaine par rapport aux prompts ouverts',
        'Les outils de détection d\'IA ont des taux de faux positifs de 15–30 % — insuffisants comme outil autonome pour l\'intégrité académique',
        'La Loi IA de l\'UE classe l\'IA éducative comme haut risque ; les écoles de l\'UE doivent mettre en place une formation en compétences IA pour tous les enseignants (article 4, applicable à partir de 2025)',
        'Les élèves utilisant des outils IA obtiennent 15–35 % de résultats plus élevés dans 21 études empiriques ; corrélation r = 0,781 entre utilisation d\'outil IA et résultats',
        'Claude 4.6 Sonnet (Anthropic) traite ~160 pages académiques par session (200 000 tokens) ; Gemini 2.5 Pro traite ~800 pages (1 million tokens) — les limites de contexte déterminent le modèle approprié',
      ],
    },
    definition: {
      title: 'Ce que les outils pédagogiques IA font vraiment',
      content: [
        '**En avril 2026, les outils pédagogiques IA exécutent quatre fonctions distinctes : tutorat personnalisé, génération de plans d\'études, rétroaction d\'évaluation automatisée et réduction des tâches administratives — chacun nécessite un outil différent et une structure de prompt différente.**',
        'Les systèmes tutoriels intelligents (STI) — la catégorie technique pour des outils comme Khanmigo — adaptent le niveau de difficulté, fournissent une rétroaction immédiate et guident les élèves par questionnement socratique plutôt que de donner des réponses directes. Les LLM universels (Large Language Models) comme GPT-4o (OpenAI) et Claude 4.6 Sonnet (Anthropic) gèrent la génération de plans d\'études, la création de rubriques et les matériels d\'enseignement différenciés. Les outils IA administratifs gèrent les résumés de présence, les brouillons de communication parentale et les rapports de progrès — les tâches que les enseignants signalent comme les plus exigeantes en temps.',
        'En une phrase : [l\'IA en enseignement](/prompt-engineering/what-is-prompt-engineering?lang=fr) n\'est pas un seul outil — c\'est une pile où chaque couche joue un rôle spécifique dans le flux de travail pédagogique.',
      ],
      snippets: [
        { type: 'in-one-sentence', text: 'Les outils pédagogiques IA comprennent des systèmes tutoriels (Khanmigo), des planificateurs de cours (ChatGPT, Claude) et des assistants administratifs — chacun optimisé pour différentes tâches en classe.' },
      ],
    },
    toolComparison: {
      title: 'Quels outils IA les enseignants doivent-ils utiliser en 2026 ?',
      content: [
        '**Khanmigo (Khan Academy), MagicSchool et ChatGPT (OpenAI) remplissent chacun des fonctions de classe distinctes — choisir le mauvais outil pour la tâche gaspille temps et opportunités.**',
        'Khanmigo est l\'assistant tuteur pédagogique IA de Khan Academy, alimenté par GPT-4. Il utilise le questionnement socratique pour guider les élèves vers les réponses plutôt que de leur donner directement — une différence de conception cruciale pour la rétention d\'apprentissage. Il s\'intègre directement dans les cours Khan Academy, ce qui en fait l\'option la plus solide pour les écoles utilisant déjà cette plate-forme. MagicSchool offre l\'ensemble d\'outils pédagogiques le plus complet — planification de cours, modèles de gestion de classe, support de création d\'IEP et outils de communication parentale. ChatGPT (GPT-4o) offre le soutien universel le plus flexible avec la plus grande autonomie, mais nécessite des prompts structurés de l\'enseignant pour produire des résultats prêts pour la classe.',
      ],
      callouts: [
        { type: '💡', label: 'Conseil pro', text: 'Aucun outil unique ne fait tout. La plupart des enseignants utilisent 2–3 outils ensemble : Khanmigo pour tutorat d\'élève, MagicSchool pour planification et ChatGPT pour création de contenu rapide.' },
      ],
      columns: ['Outil', 'Meilleur pour', 'Contexte', 'Version gratuite'],
      rows: [
        {
          'Outil': 'Khanmigo (Khan Academy)',
          'Meilleur pour': 'Tutorat d\'élève ; apprentissage socratique',
          'Contexte': 'K-12, écosystème Khan Academy',
          'Version gratuite': '44 $/année',
        },
        {
          'Outil': 'MagicSchool',
          'Meilleur pour': 'Planification pédagogique ; gestion de classe',
          'Contexte': 'Enseignants K-12',
          'Version gratuite': 'Oui (limité)',
        },
        {
          'Outil': 'ChatGPT / GPT-4o (OpenAI)',
          'Meilleur pour': 'Création de contenu flexible ; rédaction de brouillons',
          'Contexte': 'Tous les niveaux, toutes les matières',
          'Version gratuite': 'Oui (limité)',
        },
        {
          'Outil': 'Claude 4.6 Sonnet (Anthropic)',
          'Meilleur pour': 'Conception de plans d\'études à long terme ; analyse de documents',
          'Contexte': 'Enseignement supérieur ; tâches complexes',
          'Version gratuite': 'Oui (limité)',
        },
        {
          'Outil': 'NotebookLM (Google DeepMind)',
          'Meilleur pour': 'Questions et réponses basées sur sources pour matériels de classe téléchargés',
          'Contexte': 'Université ; contextes de recherche',
          'Version gratuite': 'Gratuit / Plus',
        },
        {
          'Outil': 'Gemini 2.5 Pro (Google DeepMind)',
          'Meilleur pour': 'Analyse de documents volumineux ; examen de directives',
          'Contexte': 'Administrateurs de districts scolaires',
          'Version gratuite': 'Oui (limité)',
        },
      ],
    },
    toolUseCaseMapping: {
      title: 'IA en éducation : mappage cas d\'utilisation à outil',
      content: [
        '**Pas tous les outils conviennent à toutes les tâches. Sélectionnez le bon outil pour chaque cas d\'utilisation spécifique — différents modèles excèlent avec différentes contraintes (fenêtre de contexte, température, coût, vitesse).**',
      ],
      columns: ['Cas d\'utilisation', 'Outil recommandé', 'Température', 'Économie de temps'],
      rows: [
        {
          'Cas d\'utilisation': 'Création de plan d\'études',
          'Outil recommandé': 'MagicSchool / GPT-4o',
          'Température': '0,1–0,2',
          'Économie de temps': '30–60 min par cours',
        },
        {
          'Cas d\'utilisation': 'Niveaux de lecture différenciés',
          'Outil recommandé': 'Claude 4.6 Sonnet',
          'Température': '0,1–0,2',
          'Économie de temps': '15 min par passage',
        },
        {
          'Cas d\'utilisation': 'Tutorat d\'élève (socratique)',
          'Outil recommandé': 'Khanmigo',
          'Température': 'n/v (préconfiguré)',
          'Économie de temps': 'Asynchrone',
        },
        {
          'Cas d\'utilisation': 'Rétroaction alignée sur rubrique',
          'Outil recommandé': 'Claude 4.6 Sonnet (200 000 tokens contexte)',
          'Température': '0,2',
          'Économie de temps': 'Heures par série',
        },
        {
          'Cas d\'utilisation': 'Brouillons de communication parentale',
          'Outil recommandé': 'ChatGPT / GPT-4o',
          'Température': '0,3–0,5',
          'Économie de temps': '5–10 min par message',
        },
        {
          'Cas d\'utilisation': 'Examen de manuel/directives',
          'Outil recommandé': 'Gemini 2.5 Pro (1 million tokens contexte)',
          'Température': '0,1',
          'Économie de temps': 'Heures par document',
        },
      ],
    },
    promptStructure: {
      title: 'Comment rédiger des prompts pour les tâches pédagogiques',
      content: [
        '**Un prompt d\'enseignant structuré — qui spécifie le niveau de classe, la matière, l\'objectif d\'apprentissage, les connaissances préalables, les contraintes de temps et le format de sortie — produit du matériel prêt pour la classe sans édition ; un prompt non structuré produit un brouillon générique nécessitant 30+ minutes de retouche.**',
        '[L\'engineering des prompts](/prompt-engineering/what-is-prompt-engineering?lang=fr) est la pratique de créer des instructions précises et structurées qui guident la sortie d\'IA. Pour les enseignants, la différence entre une sortie utilisable et inutilisable réside presque toujours dans la spécificité du prompt, non dans les capacités du modèle.',
      ],
      snippets: [
        { type: 'in-plain-terms', text: 'Pensez aux prompts IA comme à des recettes : les prompts vagues (« cuisinez quelque chose de délicieux ») produisent des résultats incohérents ; les prompts détaillés (« préparez un gâteau au chocolat à 175°C pendant 35 minutes avec du chocolat noir ») produisent des résultats fiables.' },
      ],
    },
    promptFramework: {
      title: 'Mauvais vs. Bon : Prompts pour planification pédagogique',
      content: [
        '**Les prompts spécifiques et contextuels économisent 5–13 heures par semaine aux enseignants en planification, utilisés régulièrement. La version mauvaise nécessite 30+ minutes de retouche ; la version bonne produit une sortie prête pour la classe en une passe.**',
        'Mauvais prompt — sortie générique :',
      ],
      blockquote: 'Créez une leçon sur l\'addition de fractions pour des élèves de cinquième année.',
      items: [
        'Cela produit un aperçu vague sans allocation de temps, sans alignement sur les normes, sans différenciation et sans billet de sortie. La plupart de la sortie est abandonnée.',
      ],
    },
    goodExample: {
      title: 'Le prompt pédagogue à cinq composants',
      content: [
        'Bon prompt — structure à cinq composants :',
      ],
      blockquote: 'Tu es un enseignant expérimenté de mathématiques en cinquième année. Crée une leçon de 45 minutes sur l\'addition de fractions avec des dénominateurs différents. Les élèves comprennent les fractions équivalentes mais ne les ont pas encore combinées. Fournis : un échauffement de 10 minutes avec modèles visuels, 15 minutes d\'enseignement direct avec trois exemples travaillés, 15 minutes de pratique en paires, et un billet de sortie de 5 minutes. Alignement programme de CM2, Domaine Nombres et calculs. Donne uniquement le plan de leçon avec en-têtes de section, allocations de temps et une liste de matériaux.',
      items: [
        'La version structurée produit un document avec des sections alignées sur rubrique, des activités chronométrées et une liste de matériaux. Prêt à utiliser ou à affiner — pas complet à réécrire.',
      ],
      callouts: [
        { type: '📌', label: 'Point clé', text: 'Les cinq composants sont : (1) Rôle, (2) Objectif, (3) Contexte apprenant, (4) Contraintes, (5) Format de sortie. L\'utilisation cohérente de ces cinq composants économise 5–13 heures par semaine.' },
      ],
    },
    assessmentPrompt: {
      title: 'Comment rédiger des prompts IA pour les commentaires d\'évaluation ?',
      content: [
        '**Pour l\'évaluation formative : incluez vos critères de rubrique directement dans le prompt, afin que l\'IA comprenne vos normes de notation et les applique régulièrement à tous les travaux des élèves.**',
        'La [fenêtre de contexte](/prompt-engineering/context-windows-explained?lang=fr) de 200 000 tokens de Claude 4.6 Sonnet traite des séries complètes de courts essais en une seule session — environ 160 pages standard — rendant la génération de rétroaction en lot pratique pour les enseignants avec de grandes classes. GPT-4o traite ~100 pages par session, suffisant pour les tailles de classe typiques.',
      ],
      blockquote: 'Tu es une enseignante expérimentée d\'anglais en septième année. Analyse cet essai persuasif d\'élève en utilisant cette rubrique : thèse claire (4 points), trois arguments avec preuves (12 points), reconnaissance du contre-argument (4 points), transitions formelles (3 points), conclusion renforçant la thèse (3 points). Pour chaque critère : donne la note, cite la phrase pertinente et écris une suggestion d\'amélioration spécifique. Score total sur 26 points.',
      callouts: [
        { type: '⚠️', label: 'Avertissement', text: 'L\'IA ne peut pas évaluer la voix, l\'originalité ou la qualité d\'écriture de manière fiable — utilisez toujours la rétroaction IA pour la mécanique et la structure, jamais pour les scores holistiques. Gardez l\'évaluation sommative finale en mains humaines.' },
      ],
    },
    learningOutcomes: {
      title: 'Le tutorat par IA améliore-t-il vraiment les résultats ?',
      content: [
        '**Les élèves utilisant des systèmes tutoriels IA surpassent les pairs en enseignement traditionnel de 15–35 % aux évaluations normalisées sur 21 études empiriques.**',
        'La preuve la plus solide provient d\'une étude randomisée contrôlée de 2024 dirigée par Gregory Kestin et Kelly Miller à l\'Université Harvard, avec 194 étudiants en physique. L\'étude utilisant un plan croisé où chaque étudiant a expérimenté à la fois le tutorat IA (via « PS2 Pal », alimenté par GPT-4) et les méthodes d\'apprentissage actif traditionnelles sur deux sujets. Résultats clés :',
      ],
      callouts: [
        { type: '🔍', label: 'Le saviez-vous ?', text: 'Les élèves ont montré motivation et engagement plus élevés dans les sessions de tutorat IA. La taille d\'effet (0,73–1,3 SD) équivaut au gain d\'apprentissage du passage d\'une salle de classe typique à un enseignement de première classe.' },
      ],
      items: [
        'Les élèves enseignés par IA obtiennent des résultats significativement plus élevés aux tests — taille d\'effet entre 0,73 et 1,3 écarts-types',
        'Temps d\'apprentissage médian : **49 minutes** (groupe IA) vs. **60 minutes** (groupe classe)',
        'Les élèves ont signalé motivation et engagement plus élevés dans les sessions IA',
        'Signification statistique : p < 10−8',
        'Un examen systématique 2025 de 21 études empiriques montre que les élèves assistés par IA surpassent les groupes témoins de 15–35 % aux évaluations, r = 0,781. Une étude Stanford 2025 montre que 2–5 heures avec un système tutoriel intelligent prédisent fiablement les résultats des tests de fin d\'année.',
      ],
    },
    integrityProblem: {
      title: 'La triche par IA est-elle détectable dans les établissements scolaires ?',
      content: [
        '**Les outils de détection d\'IA actuels ont des taux de faux positifs de 15–30 % dans les études examinées par les pairs, ce qui les rend peu fiables pour les décisions d\'intégrité académique à haut risque — et de nombreux élèves utilisent stratégiquement les [hallucinations d\'IA](/prompt-engineering/ai-hallucinations-how-to-stop?lang=fr) pour éviter la détection.**',
        'L\'intégrité académique est le défi central de l\'éducation assistée par IA. Le rythme d\'adoption a surpassé à la fois les politiques et la technologie de détection. L\'adoption par les élèves est répandue : les sondages signalent 60–92 % des élèves utilisant l\'IA pour l\'apprentissage, bien que les politiques institutionnelles varient considérablement sur l\'utilisation permise.',
        'Le problème de détection a trois couches critiques :',
      ],
      items: [
        '**Faux positifs** — les locuteurs non natifs sont signalés de manière disproportionnée ; les styles d\'écriture académique structurés (courants dans les matières techniques) déclenchent régulièrement les outils',
        '**Texte hybride** — les brouillons IA considérablement modifiés par les élèves dépassent la plupart des systèmes',
        '**Décalage politique** — les universités en 2026 abandonnent les interdictions absolues pour les cadres de transparence et divulgation, exigeant des élèves qu\'ils divulguent l\'assistance IA plutôt que de l\'interdire',
      ],
      callouts: [
        { type: '⚠️', label: 'Avertissement', text: 'Les locuteurs non natifs et les élèves avec style d\'écriture structuré sont signalés de manière disproportionnée. Accuser un élève uniquement sur la base de la sortie de détection d\'IA porte un risque de 15–30 % d\'erreur.' },
      ],
    },
    integrityCloser: {
      content: [
        'Le consensus institutionnel émergent : les outils de détection d\'IA ne sont pas des autorités finales. Les universités exigent de plus en plus d\'examen humain-automatisé et appliquent des normes de divulgation plutôt que des normes d\'interdiction.',
      ],
    },
    regulatoryContext: {
      title: 'Comment la Loi IA de l\'UE affecte-t-elle les écoles ?',
      content: [
        '**La Loi IA de l\'UE classe les systèmes IA en éducation comme « haut risque » — ce qui signifie que les outils affectant l\'évaluation d\'examen, les parcours d\'apprentissage ou l\'évaluation des élèves sont soumis à des exigences obligatoires de transparence, de supervision humaine et d\'atténuation des biais.**',
        'Selon l\'Annexe III de la Loi IA de l\'UE, les outils IA éducatifs affectant l\'accès à l\'éducation ou l\'évaluation des résultats d\'apprentissage sont classés comme systèmes haut risque. Les écoles et universités opérant dans l\'UE sont considérées comme « fournisseurs » IA selon la loi et portent des obligations légales, notamment :',
      ],
      items: [
        'Garantir les compétences IA du personnel (mandat article 4 — applicable à partir de 2025)',
        'Mettre en œuvre la supervision humaine pour toutes les décisions IA haut risque affectant les élèves',
        'Gérer les journaux d\'audit des évaluations influencées par l\'IA',
        'Divulguer les sources de données du système IA et la logique du modèle aux élèves sur demande',
      ],
      callouts: [
        { type: '📌', label: 'Point clé', text: 'Les écoles de l\'UE doivent mettre en œuvre une formation en compétences IA pour tous les enseignants et administrateurs travaillant avec des systèmes IA (article 4, applicable à partir de 2025). La non-conformité entraîne des amendes jusqu\'à 30 millions d\'euros.' },
      ],
    },
    regulatoryRegionalContext: {
      title: 'Réglementations pédagogiques IA mondiales',
      content: [
        'La Loi IA de l\'UE interdit complètement les systèmes de reconnaissance d\'émotions dans les établissements éducatifs — affectant directement les outils suivant l\'engagement des élèves par analyse faciale. La CNIL recommande le recours à des solutions d\'IA locales pour le traitement de données professionnelles sensibles (données financières, médicales, juridiques). Les établissements éducatifs chinois déploient des outils IA selon les mesures intermédiaires chinoises pour l\'IA générative (2023), exigeant que le contenu pédagogique généré par l\'IA soit étiqueté comme tel. Le ministère japonais de l\'Éducation (MEXT) a publié en 2023 des directives mettant en garde contre l\'utilisation d\'IA dans certains contextes d\'évaluation, tout en reconnaissant l\'IA comme une compétence pédagogique fondamentale.',
      ],
    },
    commonMistakes: {
      title: 'Erreurs courantes dans l\'utilisation de l\'IA en éducation',
      content: [
        '**Ces cinq pièges coûtent du temps aux enseignants et peuvent créer des problèmes juridiques ou éthiques — tous sont faciles à corriger avec le processus approprié.**',
      ],
      items: [
        '**Utiliser l\'IA comme remplacement de notation plutôt que comme outil de rétroaction :** L\'IA génère des scores de rubrique plausibles, mais ne peut pas évaluer fiablement l\'originalité, la voix ou la qualité d\'argument dans les longs textes. Utilisez l\'IA pour la rétroaction formative sur les travaux à faible risque ; gardez l\'évaluation sommative en mains humaines.',
        '**Utiliser des prompts non structurés pour la planification pédagogique :** « Crée une leçon sur la photosynthèse » produit une sortie générique nécessitant plus de temps d\'édition que d\'écrire de zéro. Spécifiez toujours le niveau de classe, les connaissances préalables, les contraintes de temps et le format de sortie.',
        '**Confiance excessive dans les outils de détection d\'IA pour l\'intégrité :** Les taux de faux positifs de 15–30 % signifient qu\'accuser un élève uniquement sur la sortie de détection porte un risque de 15–30 % d\'erreur. Les locuteurs non natifs sont signalés de manière disproportionnée.',
        '**Ignorer les obligations de la Loi IA de l\'UE pour les écoles de l\'UE :** Les outils IA éducatifs affectant les parcours d\'apprentissage ou l\'évaluation sont haut risque selon l\'Annexe III. Les écoles de l\'UE déployant ces outils sans formation du personnel selon l\'article 4 ne sont pas conformes.',
        '**Utiliser des paramètres de température élevée pour le contenu pédagogique :** La température par défaut sur la plupart des plates-formes (0,7–1,0) augmente le risque d\'hallucination. Pour le contenu pédagogique factuel, les directives d\'évaluation et la génération de citations, réglez la température sur 0,1–0,2.',
      ],
      callouts: [
        { type: '🛠️', label: 'Bonne pratique', text: 'Documentez toute utilisation d\'IA : quel outil, quels paramètres (température, contexte) et quelle tâche. Cela crée une piste d\'audit pour la conformité (article 6 de la Loi IA de l\'UE) et vous aide à améliorer au fil du temps.' },
      ],
    },
    howToStart: {
      title: 'Étape par étape : intégrer l\'IA dans l\'enseignement',
      content: [
        '**Suivez ces cinq étapes pour intégrer l\'IA dans votre enseignement sans perturber les résultats d\'apprentissage ni violer les normes d\'intégrité académique.**',
      ],
      numberedItems: [
        'Définissez les objectifs d\'apprentissage et les évaluations avant d\'introduire l\'IA.',
        'Utilisez l\'IA pour la pratique personnalisée et la rétroaction immédiate, pas pour les jugements de notation.',
        'Enseignez aux élèves à valider les résultats d\'IA et à reconnaître les hallucinations.',
        'Créez un modèle de prompt structuré que les élèves utilisent pour toutes les interactions IA.',
        'Établissez des directives claires pour l\'utilisation d\'IA sur des tâches spécifiques.',
      ],
      callouts: [
        { type: '✨', label: 'Avantage immédiat', text: 'Les enseignants signalent une économie de 5–13 heures par semaine en utilisant des prompts structurés — suffisant pour ajouter une heure de tutorat personnalisé par élève chaque semaine.' },
      ],
    },
    relatedReading: {
      title: 'Lectures complémentaires',
      items: [
        '[Qu\'est-ce que l\'engineering des prompts ?](/prompt-engineering/what-is-prompt-engineering?lang=fr) — les principes fondamentaux derrière les instructions IA efficaces',
        '[Écrivez un meilleur code avec l\'IA](/prompt-engineering/write-better-code-with-ai?lang=fr) — comment des prompts structurés produisent des résultats IA fiables — applicable à la planification des cours et la génération d\'évaluations',
        '[Limitations de l\'IA — Ce que les LLM ne peuvent pas faire](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=fr) — pourquoi l\'hallucination d\'IA affecte les outils pédagogiques et comment en tenir compte',
        '[Recherche assistée par IA](/prompt-engineering/ai-powered-research?lang=fr) — flux de validation pour le contenu généré par IA, applicable aux tâches de recherche des élèves et enseignants',
        '[Prompting par persona](/prompt-engineering/persona-prompting?lang=fr) — comment les définitions de rôle comme « enseignant de mathématiques de cinquième année expérimenté » changent la qualité et la cohérence de la sortie IA',
        '[Prompting par chaîne de pensée](/prompt-engineering/chain-of-thought-prompting?lang=fr) — la technique de raisonnement derrière les tuteurs IA socratiques comme Khanmigo',
      ],
    },
    faq: {
      title: 'Questions fréquemment posées',
      items: [],
      faqs: [
        {
          q: 'Le tutorat par IA améliore-t-il vraiment les résultats d\'apprentissage ?',
          a: 'Oui — la preuve est solide. Une étude randomisée contrôlée de Harvard en 2024 avec 194 étudiants en physique a montré que le tutorat par IA produit des tailles d\'effet de 0,73–1,3 écarts-types au-dessus des salles de classe d\'apprentissage actif, les étudiants obtenant des résultats plus élevés en 49 minutes par rapport à 60 minutes en classe (p < 10−8). Un examen systématique de 2025 couvrant 21 études montre que les élèves avec assistance IA surpassent les méthodes d\'enseignement traditionnelles de 15–35 % aux évaluations.',
        },
        {
          q: 'Quel est le meilleur outil IA pour les enseignants en 2026 ?',
          a: 'La réponse dépend de la tâche. Khanmigo (Khan Academy, alimenté par GPT-4) excelle pour le tutorat des élèves par questionnement socratique à 44 $/année. MagicSchool domine pour les outils de flux de travail pédagogique complets (plans d\'études, PEI, communication parentale). ChatGPT (GPT-4o, OpenAI) offre la création de contenu universelle la plus flexible. Pour l\'analyse pédagogique complexe, Claude 4.6 Sonnet (Anthropic) traite 200 000 tokens — environ 160 pages standard — en une seule session.',
        },
        {
          q: 'Combien de temps l\'IA peut-elle économiser aux enseignants chaque semaine ?',
          a: 'Les prompts spécifiques et contextuels économisent aux enseignants 5–13 heures par semaine en planification et tâches administratives, utilisés régulièrement. Les applications d\'économie de temps les plus courantes sont : recherche et collecte de contenu (44 % des enseignants), création de plans d\'études (38 %), synthèse d\'informations (38 %) et création de matériels de classe (37 %).',
        },
        {
          q: 'L\'IA en éducation est-elle juridiquement autorisée selon la législation de l\'UE ?',
          a: 'Les systèmes IA affectant l\'évaluation d\'apprentissage ou les parcours d\'apprentissage sont classés comme haut risque dans la Loi IA de l\'UE (Annexe III). Les écoles de l\'UE doivent fournir une formation en compétences IA pour tous les enseignants (article 4, applicable à partir de 2025), maintenir une supervision humaine pour les évaluations influencées par l\'IA et conserver des journaux d\'audit pour tous les systèmes IA affectant les résultats des élèves. La reconnaissance d\'émotions IA dans les établissements éducatifs est entièrement interdite par la loi.',
        },
        {
          q: 'Le logiciel de détection d\'IA détecte-t-il fiablement la triche académique ?',
          a: 'Non — les outils de détection d\'IA actuels ont des taux de faux positifs de 15–30 % dans les études examinées par les pairs, ce qui signifie que jusqu\'à 30 sur 100 soumissions d\'élèves légitimes peuvent être incorrectement signalées. Les locuteurs non natifs et les étudiants écrivant dans des styles académiques structurés sont signalés de manière disproportionnée. Les universités en 2026 abandonnent les politiques d\'interdiction en faveur de cadres de divulgation et de citation, traitant la détection d\'IA comme l\'un des plusieurs indices plutôt que comme preuve concluante de faute.',
        },
        {
          q: 'Quel réglage de température les enseignants doivent-ils utiliser pour la planification pédagogique IA ?',
          a: 'Réglez la température sur 0,1–0,2 pour le contenu pédagogique factuel — plans d\'études, directives d\'évaluation, alignement curriculaire. Cela produit des résultats cohérents et à faible variation. Utilisez 0,7–0,9 uniquement pour créer des idées d\'activités créatives où les variations sont souhaitées. La température par défaut sur la plupart des plates-formes (0,7–1,0) est conçue pour les tâches créatives et augmente les erreurs factuelles dans le contenu pédagogique.',
        },
        {
          q: 'L\'IA peut-elle aider à la pédagogie différenciée ?',
          a: 'Oui — c\'est l\'un des cas d\'usage les plus forts de l\'IA en éducation. Les LLM peuvent reformuler le même contenu en secondes à plusieurs niveaux de lecture (Flesch-Kincaid classe 4, 8 et 12). Structure du prompt : « Réécrivez ce passage au niveau de la classe [N]. Préservez tout le contenu factuel. Remplacez le vocabulaire complexe par des équivalents plus simples. Conservez la même structure de paragraphe. » Claude 4.6 Sonnet produit la différenciation la plus cohérente entre les niveaux de lecture.',
        },
        {
          q: 'Comment les écoles doivent-elles gérer les compétences IA pour les enseignants selon la Loi IA de l\'UE ?',
          a: 'L\'article 4 de la Loi IA de l\'UE exige que les fournisseurs d\'IA (y compris les écoles) garantissent des compétences IA suffisantes pour tout le personnel travaillant avec des systèmes IA — applicable à partir de 2025. Cela signifie la formation sur : comment l\'IA prend les décisions, quels taux d\'erreur les outils spécifiques ont, quand la supervision humaine est requise, et comment documenter les décisions influencées par l\'IA. Les écoles doivent documenter cette formation à des fins d\'audit.',
        },
        {
          q: 'Qu\'est-ce que Khanmigo et comment diffère-t-il de ChatGPT pour les élèves ?',
          a: 'Khanmigo est l\'assistant tuteur pédagogique IA de Khan Academy, alimenté par GPT-4. Sa caractéristique déterminante est la questionnement socratique — il guide les élèves vers les réponses plutôt que de leur donner les réponses directement. Quand un élève demande « Quelle est la réponse ? », Khanmigo répond par une question directrice. Cette conception favorise la rétention d\'apprentissage. ChatGPT fournit par défaut des réponses directes, ce qui est efficace mais réduit l\'effort cognitif générant l\'apprentissage à long terme. Pour le tutorat respectueux des élèves, la conception pédagogique de Khanmigo est supérieure ; pour la création de contenu par les enseignants, la flexibilité de ChatGPT gagne.',
        },
        {
          q: 'Comment créer une politique d\'utilisation d\'IA pour mon école ?',
          a: 'Une politique d\'utilisation d\'IA efficace définit quatre choses : (1) quelles tâches autorisent l\'IA (remue-méninges, problèmes pratiques, brouillons de rétroaction), (2) quelles tâches nécessitent divulgation (essais assistés par IA, présentations), (3) quelles tâches interdisent l\'IA (réponses aux examens finaux, plagiat), (4) comment citer le contenu généré par IA. La politique doit être révisée tous les 6 mois compte tenu du rythme rapide du développement des outils. Les écoles de l\'UE doivent également traiter les exigences de formation article 4 de la Loi IA et les obligations à haut risque de l\'annexe III dans chaque document de politique.',
        },
      ],
    },
    sources: {
      title: 'Sources et ressources supplémentaires',
      content: [
        '**Toutes les statistiques et conclusions dans cet article proviennent de recherche examinée par les pairs, de directives gouvernementales officielles et de politiques institutionnelles documentées.** Dernières vérifications factuelles : 2026-04-28 (contre les modèles Claude 4.6 Sonnet, GPT-4o, Gemini 2.5 Pro actuels ; tarifs Khanmigo actuels chez Khan Academy ; directives article 4 de la Loi IA de l\'UE actuelles applicables à partir de 2025).',
      ],
      items: [
        '[Kestin & Miller, 2024. « Le tutorat IA surpasse l\'apprentissage actif en classe — Essai contrôlé randomisé Harvard »](https://www.nature.com/articles/s41598-025-97652-6) — étude randomisée contrôlée avec 194 élèves ; taille d\'effet 0,73–1,3 SD',
        '[Kwak, 2025. « The Effectiveness of AI-Driven Tools in Improving Student Learning Outcomes »](https://iacis.org/iis/2025/4_iis_2025_233-247.pdf) — examen systématique de 21 études ; gains de performance 15–35 % ; r = 0,781',
        '[Loi IA de l\'UE, 2024. Annexe III — Systèmes IA à Haut Risque en Éducation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) — classifie l\'IA d\'évaluation éducative comme haut risque avec obligations de supervision obligatoires',
      ],
    },
  },
},
    ja: {
  freshness_tier: 'semi_annual',
  theme: 'Use Cases',
  title: 'AIで教える：教育者向けのツール、成果、プロンプト 2026',
  intro: '**2026年に効果的にAIで教えるために：5つのコンポーネント構造プロンプト（役割、目標、学習者コンテキスト、制約、出力形式）を使用し、タスクに合ったツール（チューター向けKhanmigo、計画向けMagicSchool、コンテンツ作成向けClaude 4.6 SonnetまたはGPT-4o）を選択し、ファクト内容は温度0.1–0.2に設定し、EU圏内の学校の場合、高リスクシステム導入前にすべての教師にAIリテラシー研修を実施してください。** 2024年のハーバード大学ランダム化比較試験では、AIチューターは従来のアクティブラーニング教室より2倍以上の学習成果をもたらし、18%少ない学習時間で実現することが示されました。2026年4月時点で、米国の教師の85%と生徒の86%が学年中にAIを使用しており、これはあらゆる業界で最も高いAI採用率です。課題は採用ではなく構造にあります。曖昧なプロンプトは使用不可能な結果を生み出し、構造化されたプロンプトは週5~13時間を節約し、EU圏の学校は現在、生徒評価に影響するあらゆるAIツールについてAI法に基づく法的義務があります。',
  publishDate: '2026-03-23',
  dateModified: '2026-04-28',
  readTime: '9分で読める',
  seoTitle: 'AIで教える：教育者向けツール・プロンプト・学習成果（2026）',
  metaDescription: 'ハーバード大RCT：AI個別指導は学習効果を2倍以上に向上、学習時間は18%短縮。教員の85%がAIを活用。構造化プロンプトで週5〜13時間を節約。EU AI規制と検出ツールの課題も解説。',
  educationalLevel: '初級',
  audience: 'AIツールを使用する教師、学校管理者、教育専門家',
  aboutTopics: ['教育とAI', 'Khanmigo', 'EU AI法'],
  howToName: 'AIで教える方法',
  next_refresh_due: '2026-09-23',
  primaryTerm: 'AIで教える',
  toc: [
    { label: '教育用AIツールが実際に行うこと', anchor: '#what-ai-teaching-tools-actually-do' },
    { label: '2026年に教師が使うべきAIツール', anchor: '#which-ai-tools-should-teachers-use-in-2026' },
    { label: '教育タスク向けプロンプトの書き方', anchor: '#how-to-write-prompts-for-teaching-tasks' },
    { label: '5つのコンポーネント教師プロンプト', anchor: '#the-five-component-teacher-prompt' },
    { label: '評価フィードバック向けAIプロンプト', anchor: '#how-do-you-prompt-ai-for-assessment-feedback' },
    { label: 'AIチューターは学習成果を本当に向上させるか', anchor: '#does-ai-tutoring-improve-learning-outcomes' },
    { label: '学校におけるAI不正はどの程度検出可能か', anchor: '#how-detectable-is-ai-cheating-in-schools' },
    { label: 'EU AI法が学校にどう影響するか', anchor: '#how-does-the-eu-ai-act-affect-schools' },
    { label: '教育でのAI使用における一般的な落とし穴', anchor: '#common-mistakes-when-using-ai-in-education' },
    { label: 'ステップバイステップ：AIを指導に統合する', anchor: '#step-by-step-integrating-ai-into-your-teaching' },
    { label: '関連リソース', anchor: '#related-reading' },
    { label: 'よくある質問', anchor: '#frequently-asked-questions' },
    { label: 'ソースと参考資料', anchor: '#sources-further-reading' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=ja',
    inLanguage: 'ja',
    headline: 'AIで教える：教育者向けのツール、成果、プロンプト 2026',
    description: 'AIチューターシステムは従来の教室と比べて学習成果を2倍にします。教師がAIを計画、評価、生徒チューターに使用する方法と、2026年に米国教師の85%がAIを採用した理由を学びます。',
    datePublished: '2026-03-23',
    dateModified: '2026-04-28',
    proficiencyLevel: '初級',
    author: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
    },
    about: [
      { '@type': 'Thing', name: '教育とAI' },
      { '@type': 'SoftwareApplication', name: 'Khanmigo' },
      { '@type': 'Legislation', name: 'EU AI法' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro', '.key-takeaways'],
    },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'Teacher',
      audienceType: '教師、学校管理者、教育専門家',
    },
    educationalLevel: 'K-12、高等教育',
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/logo.svg',
      },
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://www.promptquorum.com/api/og/teaching-with-ai?lang=ja',
      width: 1200,
      height: 630,
    },
    keywords: ['AIチューター', '教育とAI', 'Khanmigo', '教育計画', 'ChatGPT教師', 'Claude教育', 'プロンプト工学教育'],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'Khanmigo' },
      { '@type': 'SoftwareApplication', name: 'MagicSchool' },
      { '@type': 'SoftwareApplication', name: 'ChatGPT' },
      { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
      { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
      { '@type': 'SoftwareApplication', name: 'NotebookLM' },
      { '@type': 'Organization', name: 'ハーバード大学' },
      { '@type': 'Organization', name: 'Khan Academy' },
      { '@type': 'Organization', name: 'PromptQuorum' },
    ],
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'ja',
    mainEntity: [
      { '@type': 'Question', name: 'AIチューターは本当に学習成果を向上させるのか', acceptedAnswer: { '@type': 'Answer', text: 'はい、エビデンスは強固です。2024年ハーバード大学ランダム化比較試験では、物理学の学生194名にAIチューターが従来のアクティブラーニング教室より0.73～1.3の効果量を示し、60分ではなく49分で高い成果を達成しました（p < 10−8）。2025年の21研究の体系的レビューでは、AI支援の学生が従来の指導を15～35%上回ることが示されています。' } },
      { '@type': 'Question', name: '2026年の教師にとって最高のAIツール', acceptedAnswer: { '@type': 'Answer', text: '答えはタスクに依存します。Khanmigo（Khan Academy、GPT-4を搭載）は年44ドルでソクラテス的質問による生徒チューターに最適です。MagicSchool は完全な教育ワークフロー（カリキュラム、IEP、親通信）が充実しています。ChatGPT（GPT-4o、OpenAI）は最も柔軟な汎用コンテンツ作成を提供します。複雑な教育分析にはClaude 4.6 Sonnet（Anthropic）が200,000トークン処理します（約160ページ）。' } },
      { '@type': 'Question', name: '毎週AIで教師が時間を節約できるか', acceptedAnswer: { '@type': 'Answer', text: '具体的で文脈的なプロンプトは、一貫して使用すると週5～13時間節約します。最も一般的な時間節約用途：リサーチと内容収集（教師の44%）、カリキュラム計画作成（38%）、情報要約（38%）、教室資料作成（37%）。' } },
      { '@type': 'Question', name: '教育でのAIはEU法で法的に許可されているか', acceptedAnswer: { '@type': 'Answer', text: '学習評価または学習パスに影響するAIシステムはEU AI法（別紙III）で高リスクと分類されます。EU圏の学校は全教師にAIスキル研修を提供する必要があります（2025年から適用の第4条）、AIが影響する評価に対して人間の監督を維持し、すべてのAIシステムに監査ログを保持する必要があります。教育機関での感情認識AIは完全に禁止されています。' } },
      { '@type': 'Question', name: 'AI検出ソフトウェアは学業不正を確実に検出するか', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。現在のAI検出ツールは査読済み研究で15～30%の偽陽性率を持つため、最大30/100の合法的な生徒提出物が誤ってフラグを立てられる可能性があります。非ネイティブスピーカーと構造化された学術的文体で書く学生は不釣り合いに高くフラグが立てられます。2026年の大学は禁止ポリシーから開示・引用フレームワークへ移行し、AI検出を複数の指標の1つとして扱っています。' } },
      { '@type': 'Question', name: '教師は教育計画AIにどの温度設定を使うべきか', acceptedAnswer: { '@type': 'Answer', text: 'ファクト教育内容には温度0.1～0.2に設定します（カリキュラム、評価ガイドライン、アラインメント）。これは一貫性と低変動を生成します。創意的な活動アイデア作成では0.7～0.9を使用します。ほとんどのプラットフォームのデフォルト温度（0.7～1.0）は創意的タスク向けで、教育内容のファクトエラーを増加させます。' } },
      { '@type': 'Question', name: 'AIは差別化教育を支援できるか', acceptedAnswer: { '@type': 'Answer', text: 'はい。これは教育AIの最強のユースケースです。LLMは同じコンテンツを複数の読解レベル（Flesch-Kincaid クラス4、8、12）に数秒で言い換えることができます。プロンプト構造：「このパッセージをクラス[N]レベルで言い直してください。すべてのファクト内容を保持してください。複雑な語彙をシンプルな同義語に置き換えてください。段落構造を保持してください。」Claude 4.6 Sonnetが読解レベル間で最も一貫した差別化を生成します。' } },
      { '@type': 'Question', name: 'EU AI法によると学校は教師のAIスキルをどう管理すべきか', acceptedAnswer: { '@type': 'Answer', text: 'EU AI法第4条は、AIシステムで働くすべての職員に十分なAIスキルを確保するようAI提供者（学校を含む）に要求しています（2025年から適用）。これは以下の研修を意味します：AIがどう決定を下すか、特定のツールのエラー率、人間の監督が必要なときと方法、AIが影響する決定を文書化する方法。学校は監査目的でこの研修を文書化する必要があります。' } },
      { '@type': 'Question', name: 'Khanmigoとは何か、学生向けChatGPTとどう異なるか', acceptedAnswer: { '@type': 'Answer', text: 'KhanmigoはKhan AcademyのAIチューターアシスタントでGPT-4を搭載しています。その決定的な特徴はソクラテス的質問です。答えを直接与えるのではなく、学生を答えに導きます。学生が「答えは何ですか？」と聞くと、Khanmigoは導く質問で応答します。この設計は学習保持を促進します。ChatGPTはデフォルトで直接的な答えを提供し、効率的ですが長期学習を生成する認知努力を減らします。学生向けチューターではKhanmigoの教育設計が優れています。' } },
      { '@type': 'Question', name: '学校のためのAI使用ポリシーを作成するには', acceptedAnswer: { '@type': 'Answer', text: '効果的なAI使用ポリシーは4つを定義します：（1）AIが許可されるタスク（ブレーンストーミング、練習問題、フィードバック草案）、（2）開示が必要なタスク（AI支援エッセイ、プレゼン）、（3）AIが禁止されるタスク（最終試験答、盗用）、（4）AI生成コンテンツの引用方法。ツール開発速度のため、ポリシーは6ヶ月ごとに見直す必要があります。EU圏の学校は、各ポリシー文書に第4条スキル要件とAnnex III高リスク義務も含める必要があります。' } },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: 'ja',
    name: 'AIを指導に統合する方法',
    url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=ja',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'AIを導入する前に学習目標と評価を定義する', text: '生徒が何を知る必要があるか、どう評価するかを指定してください。それからAIが教えを増幅する場所を設計します。' },
      { '@type': 'HowToStep', position: 2, name: 'パーソナライズ実践と即座フィードバック向けAI、採点ではなく', text: 'AIは練習問題作成と即座フィードバック提供が得意です。人間査読なしの主観的採点にAIを使うのは避けてください。' },
      { '@type': 'HowToStep', position: 3, name: '生徒にAI結果を検証し幻覚を認識する方法を教える', text: 'マルチモデル検証と一次ソースに対するファクト確認を生徒に示し、批判的思考とAIスキルを構築します。' },
      { '@type': 'HowToStep', position: 4, name: 'すべてのAI交互作用用に生徒が使う構造化プロンプトテンプレートを作成する', text: '役割→目標→スコープ→出力形式→検証方法を使用します。曖昧なプロンプトが曖昧な答えを生むことを生徒が認識するまでこのテンプレートを練習します。' },
      { '@type': 'HowToStep', position: 5, name: '特定タスク向けのAI使用について明確なガイドラインを確立する', text: 'AIが許可される（ブレーンストーミング、練習問題）タスクと許可されない（試験答、帰属なしコード）タスクについて明示的に述べてください。' },
    ],
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'ja',
    name: '2026年教師向けAIツール',
    description: '教室使用向けAI教育ツールの比較',
    url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=ja',
    numberOfItems: 6,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Khanmigo', description: 'ソクラテス的質問による生徒チューター。K-12、Khan Academy エコシステム。年$44。' },
      { '@type': 'ListItem', position: 2, name: 'MagicSchool', description: '教育計画と教室管理。K-12教師向け。限定無料版。' },
      { '@type': 'ListItem', position: 3, name: 'ChatGPT / GPT-4o', description: '柔軟なコンテンツ作成と草案。すべてのレベル、すべての対象。限定無料版。' },
      { '@type': 'ListItem', position: 4, name: 'Claude 4.6 Sonnet', description: '長形式カリキュラム設計、200,000トークンコンテキスト。高等教育と複雑タスク。限定無料版。' },
      { '@type': 'ListItem', position: 5, name: 'NotebookLM', description: 'アップロード教室資料へのソースベースQ&A。大学と研究。無料。' },
      { '@type': 'ListItem', position: 6, name: 'Gemini 2.5 Pro', description: '大型文書分析、100万トークンコンテキスト。学区管理。限定無料版。' },
    ],
  },
  sections: {
    tldr: {
      title: '重要ポイント',
      isTldr: true,
      items: [
        'AIチューターは2024年ハーバード大学ランダム化比較試験で従来のアクティブラーニング教室の2倍以上の学習成果を生み出し（194生徒；効果量0.73～1.3 SD）、18%少ない時間で達成',
        '米国教師の85%と生徒の86%は2024～25学年度にAIを使用 - あらゆる業界で最高のAI採用率',
        '構造化教師プロンプト（クラスレベル、目標、学習者コンテキスト、出力形式付き）は開放プロンプトと比べ週5～13時間節約',
        'AI検出ツールは15～30%の偽陽性率 - 学業不正に対する唯一のツールとして不十分',
        'EU AI法は教育AIを高リスクと分類；EU圏の学校はすべての教師にAIスキル研修を実施する必要があります（2025年から有効の第4条）',
        'AI使用する生徒は21の経験的研究全体で評価で15～35%高い成果を達成；AI使用と成果間のr = 0.781相関',
        'Claude 4.6 Sonnet（Anthropic）は1セッションで約160学術ページ処理（200,000トークン）；Gemini 2.5 Proは約800ページ（100万トークン）処理 - コンテキスト制限が適切なモデルを決定',
      ],
    },
    definition: {
      title: '教育用AIツールが実際に行うこと',
      content: [
        '**2026年4月時点で、教育用AIツールは4つの異なる機能を実行します：パーソナライズチューター、カリキュラム生成、自動評価フィードバック、管理作業削減 - 各機能は異なるツールと異なるプロンプト構造を必要とします。**',
        'インテリジェント先生システム（ITS）—Khanmigoのようなツール技術カテゴリー—は難易度を調整し、即座フィードバックを提供し、直接答えを与えるのではなくソクラテス的質問で生徒を導きます。汎用LLM（大言語モデル）、GPT-4o（OpenAI）とClaude 4.6 Sonnet（Anthropic）はカリキュラム生成、ルーブリック作成、差別化教材を処理します。管理AIツールは出席サマリ、親通信草案、進捗レポート—教師が最も時間消費と報告するタスク—を処理します。',
        '一文で：[教育におけるAI](/prompt-engineering/what-is-prompt-engineering?lang=ja)は1つのツールではなく—各レイヤーが教育ワークフロー内で特定の役割を遂行するスタック。',
      ],
      snippets: [
        { type: 'in-one-sentence', text: '教育用AIツールはチューターシステム（Khanmigo）、コース計画機（ChatGPT、Claude）、管理アシスタント—各異なる教室タスク向けに最適化されています。' },
      ],
    },
    toolComparison: {
      title: '2026年に教師が使うべきAIツール',
      content: [
        '**Khanmigo（Khan Academy）、MagicSchool、ChatGPT（OpenAI）は各異なる教室機能を遂行します—タスク向けの間違ったツール選択は時間と機会を浪費します。**',
        'Khanmigo はKhan AcademyのAI先生アシスタント、GPT-4搭載。ソクラテス的質問を使って生徒を答えに導きます、直接答えを与えるのではなく—学習保持向けの重要な設計差。Khan Academy課に直接統合されるため、すでにこのプラットフォームを使う学校に最強のオプション。MagicSchool は最も完全な教師ツールセット—カリキュラム計画、クラス管理テンプレート、IEP作成支援、親通信ツール。ChatGPT（GPT-4o）は最も柔軟な汎用サポートと最高の自律性を提供しますが、教室対応の結果を生むために教師の構造化プロンプトが必要。',
      ],
      callouts: [
        { type: '💡', label: 'プロティップ', text: '1つのツールがすべてを行いません。ほとんどの教師は2～3ツールを一緒に使用します：生徒チューター向けKhanmigo、計画向けMagicSchool、迅速なコンテンツ作成向けChatGPT。' },
      ],
      columns: ['ツール', '最適な用途', 'コンテキスト', '無料版'],
      rows: [
        { 'ツール': 'Khanmigo（Khan Academy）', '最適な用途': '生徒チューター；ソクラテス的学習', 'コンテキスト': 'K-12、Khan Academy エコシステム', '無料版': '年$44' },
        { 'ツール': 'MagicSchool', '最適な用途': '教育計画；教室管理', 'コンテキスト': 'K-12教師向け', '無料版': 'はい（限定）' },
        { 'ツール': 'ChatGPT / GPT-4o（OpenAI）', '最適な用途': '柔軟なコンテンツ作成；草案', 'コンテキスト': 'すべてのレベル、すべての対象', '無料版': 'はい（限定）' },
        { 'ツール': 'Claude 4.6 Sonnet（Anthropic）', '最適な用途': '長形式カリキュラム設計；文書分析', 'コンテキスト': '高等教育；複雑タスク', '無料版': 'はい（限定）' },
        { 'ツール': 'NotebookLM（Google DeepMind）', '最適な用途': 'アップロード教室資料へのソースベースQ&A', 'コンテキスト': '大学；研究コンテキスト', '無料版': '無料 / Plus' },
        { 'ツール': 'Gemini 2.5 Pro（Google DeepMind）', '最適な用途': '大型文書分析；ポリシー査閲', 'コンテキスト': '学区管理者向け', '無料版': 'はい（限定）' },
      ],
    },
    toolUseCaseMapping: {
      title: 'AI教育：ユースケースからツールへのマッピング',
      content: [
        '**すべてのツールがすべてのタスクに適しているわけではありません。各特定のユースケース向けに正しいツール選択してください—異なるモデルは異なる制約（コンテキストウィンドウ、温度、コスト、速度）で秀でます。**',
      ],
      columns: ['ユースケース', '推奨ツール', '温度', '時間節約'],
      rows: [
        { 'ユースケース': 'カリキュラム計画作成', '推奨ツール': 'MagicSchool / GPT-4o', '温度': '0.1–0.2', '時間節約': '教科30~60分' },
        { 'ユースケース': '差別化読解レベル', '推奨ツール': 'Claude 4.6 Sonnet', '温度': '0.1–0.2', '時間節約': 'パッセージ当たり15分' },
        { 'ユースケース': '生徒チューター（ソクラテス的）', '推奨ツール': 'Khanmigo', '温度': 'n/a（プリセット）', '時間節約': '非同期' },
        { 'ユースケース': 'ルーブリック整列フィードバック', '推奨ツール': 'Claude 4.6 Sonnet（200,000トークンコンテキスト）', '温度': '0.2', '時間節約': 'シリーズ当たり時間' },
        { 'ユースケース': '親通信草案', '推奨ツール': 'ChatGPT / GPT-4o', '温度': '0.3–0.5', '時間節約': 'メッセージ当たり5~10分' },
        { 'ユースケース': 'テキスト/ポリシー査閲', '推奨ツール': 'Gemini 2.5 Pro（100万トークンコンテキスト）', '温度': '0.1', '時間節約': 'ドキュメント当たり時間' },
      ],
    },
    promptStructure: {
      title: '教育タスク向けプロンプトの書き方',
      content: [
        '**構造化教師プロンプト—クラスレベル、対象、学習目標、前提知識、時間制約、出力形式を指定—は編集不要の教室対応資料を生み出します；非構造化プロンプトは30+分の修正が必要な汎用ドラフトを生み出します。**',
        '[プロンプト工学](/prompt-engineering/what-is-prompt-engineering?lang=ja)は正確で構造化された指示を作成し、AIの結果を導く実践。教師にとって、使用可能と使用不可能な結果の違いはほぼ常にプロンプト特異性にあります、モデル能力ではなく。',
      ],
      snippets: [
        { type: 'in-plain-terms', text: 'AIプロンプトをレシピとして考えてください：曖昧なプロンプト（「何かおいしい調理」）は不安定な結果を生み出します；詳細なプロンプト（「175℃で35分、ダークチョコレート使用してチョコレートケーキ調理」）は信頼できる結果を生み出します。' },
      ],
    },
    promptFramework: {
      title: '悪いプロンプト対良いプロンプト：教育計画向け',
      content: [
        '**具体的で文脈的なプロンプトは、一貫して使用すると教育計画で週5～13時間を教師に節約します。悪いバージョンは30+分の修正が必要；良いバージョンは1パスで教室対応結果を生み出します。**',
        '悪いプロンプト—汎用結果：',
      ],
      blockquote: '5年生のための分数加算レッスンを作成してください。',
      items: [
        'これは時間割なし、標準整列なし、差別化なし、終了チケットなしの曖昧な概要を生み出します。ほとんどの結果は破棄されます。',
      ],
    },
    goodExample: {
      title: '5つのコンポーネント教師プロンプト',
      content: [
        '良いプロンプト—5コンポーネント構造：',
      ],
      blockquote: 'あなたは経験豊かな5年生算数教師です。異なる分母での分数加算について45分レッスンを作成してください。生徒は同等分数を理解していますが、これらをまだ組み合わせていません。提供：10分ウォームアップ（視覚モデル付き）、15分直接指導（3つの作業例付き）、15分パートナー練習、5分終了チケット。Common Core 5.NF.A.1整列。セクションヘッダー、時間割、資料リスト付きレッスンプランのみ。',
      items: [
        '構造化バージョンはルーブリック整列セクション、時間ベース活動、資料リスト付きドキュメントを生み出します。使用対応またはリファイン—完全に書き直さない。',
      ],
      callouts: [
        { type: '📌', label: 'キーポイント', text: '5つのコンポーネント：（1）役割、（2）目標、（3）学習者コンテキスト、（4）制約、（5）出力形式。これら5つコンポーネントの一貫した使用は週5～13時間節約。' },
      ],
    },
    assessmentPrompt: {
      title: '評価フィードバック向けAIプロンプトの書き方',
      content: [
        '**形成評価向け：ルーブリック基準をプロンプトに直接含めます、AIがあなたの採点基準を理解し、すべての生徒作業に一貫して適用できるように。**',
        'Claude 4.6 Sonnetの[コンテキストウィンドウ](/prompt-engineering/context-windows-explained?lang=ja)（200,000トークン）は短いエッセイの完全シリーズを1セッションで処理します—約160標準ページ—大クラスを持つ教師向けにバッチフィードバック生成を実践的にしています。GPT-4oは1セッション約100ページ処理し、典型的なクラスサイズに十分。',
      ],
      blockquote: 'あなたは経験豊かな7年生英語教師です。このルーブリック使用しこの学生説得エッセイを分析：明確なテーゼ（4ポイント）、証拠3つの議論（12ポイント）、反論認識（4ポイント）、形式的移行（3ポイント）、テーゼを補強する結論（3ポイント）。各基準向けに：スコアを与え、関連文を引用、特定改善提案を書いてください。26ポイント満点。',
      callouts: [
        { type: '⚠️', label: '警告', text: 'AIは声、独自性、または長い文書での議論質を確実に評価できません—常にAIフィードバックを力学と構造に、全体的ルーブリック採点ではなく使用します。最終サマティブ評価は人間の手で保持します。' },
      ],
    },
    learningOutcomes: {
      title: 'AIチューターは本当に学習成果を向上させるか',
      content: [
        '**AI先生システムを使う生徒は21の経験的研究全体で標準化評価で従来の教えより15～35%を上回ります。**',
        '最強エビデンスはGregory KestinとKelly Millerが率いる2024ランダム化比較試験からハーバード大学での物理の学生194名から。研究は2つの対象で両方AIチューター（「PS2 Pal」、GPT-4搭載）と従来のアクティブラーニング方法を体験した各学生とのクロスオーバー設計を使用。主な結果：',
      ],
      callouts: [
        { type: '🔍', label: '知っていました？', text: '生徒はAIチューターセッションで高い動機と関与を示しました。効果量（0.73～1.3 SD）は典型的教室からファーストクラス教えへの移行からの学習利益と同等。' },
      ],
      items: [
        'AI教えられた生徒はテストで有意に高いスコア達成—効果量0.73から1.3標準偏差間',
        '中央学習時間：**49分**（AIグループ）対**60分**（クラスグループ）',
        '生徒はAIセッションで高い動機と関与を報告',
        '統計有意性：p < 10−8',
        '2025年21研究の体系的査閲では、AI支援学生は評価で従来の方法を15～35%上回ります、r = 0.781。2025年スタンフォード研究では、スマート先生システムで2~5時間は年終テスト成果を確実に予測。',
      ],
    },
    integrityProblem: {
      title: '学校におけるAI不正はどの程度検出可能か',
      content: [
        '**現在のAI検出ツールは査読済み研究で15～30%の偽陽性率を持つため、高リスク学業不正決定向けに信頼できません—多くの生徒は戦略的に[AI幻覚](/prompt-engineering/ai-hallucinations-how-to-stop?lang=ja)を使って検出を回避します。**',
        '学業不整がAI支援教育における中心課題。採用速度は両ポリシーと検出技術を上回りました。生徒採用は広範：調査は学習向けAI使用を60～92%の生徒が報告、制度ポリシーは許可した使用について大きく異なりますが。検出問題は3つの重要レイヤーを持つ：',
      ],
      items: [
        '**偽陽性**—非ネイティブスピーカーは不釣り合いに高くフラグ立てられます；構造化学術文体（技術対象で一般的）は定期的に検出ツールをトリガー',
        '**ハイブリッドテキスト**—生徒により有意に修正されたAIドラフトは大多数のシステムを上回ります',
        '**ポリシーずれ**—2026年の大学は絶対禁止から透明性と開示フレームワークへ移行し、生徒にAI支援開示を要求しむしろ禁止より',
      ],
      callouts: [
        { type: '⚠️', label: '警告', text: '非ネイティブスピーカーと構造化文体を持つ学生は不釣り合いに高くフラグを立てられます。AI検出結果にのみ基づいて学生を非難することは15～30%エラーリスク。' },
      ],
    },
    integrityCloser: {
      content: [
        '出現する制度的コンセンサス：AI検出ツールは最終的な当局ではありません。大学はますます人間自動化査閲を要求し開示基準を適用していますむしろ禁止基準より。',
      ],
    },
    regulatoryContext: {
      title: 'EU AI法が学校にどう影響するか',
      content: [
        '**EU AI法は教育のAIシステムを「高リスク」と分類—試験評価、学習パス、または生徒評価に影響するツールは透明性、人間監督、バイアス軽減への強制要件が受ける。**',
        'EU AI法の別紙IIIによると、教育成果評価に影響するAI教育ツールや教育へのアクセスは高リスクシステムとして分類。EU内で操作する学校と大学はAI法で「提供者」と見なされ、法的義務を持ちます、含む：',
      ],
      items: [
        'AIシステムで働くすべてのスタッフのAIスキル保証（第4条マンデート—2025年から有効）',
        '高リスクAI決定すべてに対して生徒に影響する人間監督実装',
        'AIが影響する評価の監査ログ管理',
        'AIシステムデータソースとモデルロジック開示—要望時に生徒へ',
      ],
      callouts: [
        { type: '📌', label: 'キーポイント', text: 'EU圏の学校はAIシステムで働くすべての教師と管理者にAIスキル研修を実装する必要があります（2025年から有効の第4条）。非準拠は30百万ユーロ罰金。' },
      ],
    },
    regulatoryRegionalContext: {
      title: 'グローバルAI教育規制',
      content: [
        'EU AI法は教育機関での感情認識システムを完全に禁止—顔分析で生徒関与を追跡するツール直接影響。中国教育機関は生成AIに対して中国的暫定措置（2023）に基づきAIツール導入しており、AI生成教育コンテンツはそのようにラベル付けされる必要があります。日本教育省（MEXT）は2023年ガイドラインを発行し、特定評価コンテキストでのAI使用に対して警告しながら、AIをコアスキルとして認識。',
      ],
    },
    commonMistakes: {
      title: '教育でのAI使用における一般的な落とし穴',
      content: [
        '**これら5つの落とし穴は教師時間を費用が掛かり法的/倫理的問題を作成できます—すべては適切なプロセスで簡単に修正。**',
      ],
      items: [
        '**フィードバックツールより採点置き換えとしてAI使用：** AIは説得力ラブリック採点を生成しますが、長い文書でのオリジナリティ、声、議論質を確実に評価できません。低リスク作業での形成フィードバック向けAI使用；サマティブ評価を人間の手で保持。',
        '**教育計画非構造化プロンプト使用：** 「光合成についてレッスン作成」は修正に必要な時間がゼロから書く以上の汎用結果を生み出します。常にクラスレベル、前提知識、時間制約、出力形式を指定。',
        '**完全性向けAI検出ツール過信：** 15～30%偽陽性率は検出結果のみに基づいて生徒を非難することが15～30%エラーリスク意味。非ネイティブスピーカーは不釣り合いに高く フラグ立てられます。',
        '**EU圏の学校向けEU AI法義務無視：** 学習パスか評価に影響するAI教育ツールはAnnex IIIのもとでハイリスク。これらのツール第4条教師研修なしで導入するEU圏の学校は非準拠。',
        '**教育コンテンツハイ温度設定使用：** ほとんどのプラットフォームのデフォルト温度（0.7～1.0）は創意的タスク向けで教育内容のファクトエラーを増加させます。ファクト教育内容、評価ガイドライン、引用生成向けに温度0.1～0.2を設定。',
      ],
      callouts: [
        { type: '🛠️', label: 'ベストプラクティス', text: 'すべてのAI使用を文書化：どのツール、どのセッティング（温度、コンテキスト）、どのタスク。これはコンプライアンス監査証跡（EU AI法第6条）を作成し時間経過で改善。' },
      ],
    },
    howToStart: {
      title: 'ステップバイステップ：AIを指導に統合する',
      content: [
        '**これら5つのステップに従い、学習成果を破害または学業不整基準違反なしにAIを指導に統合。**',
      ],
      numberedItems: [
        'AIを導入する前に学習目標と評価を定義する。',
        'パーソナライズ練習と即座フィードバック向けAI、採点判断ではなく。',
        '生徒にAI結果を検証し幻覚を認識する方法を教える。',
        'すべてのAI交互作用向けに生徒が使う構造化プロンプトテンプレートを作成する。',
        '特定タスク向けのAI使用について明確なガイドラインを確立する。',
      ],
      callouts: [
        { type: '✨', label: '即座の利益', text: '教師は構造化プロンプト使用で週5～13時間を節約—毎週各生徒に1時間のパーソナルチューター時間を追加するのに十分。' },
      ],
    },
    relatedReading: {
      title: '関連リソース',
      items: [
        '[プロンプト工学とは何か](/prompt-engineering/what-is-prompt-engineering?lang=ja) — 効果的なAI指示の背後にある基本的原理',
        '[AIでより良いコードを書く](/prompt-engineering/write-better-code-with-ai?lang=ja) — 構造化されたプロンプトが信頼性の高いAI出力を生成する方法 — 授業計画と評価生成に適用可能',
        '[AI制限—LLMができないこと](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=ja) — AIハルシネーション教育ツールに影響する理由と計画方法',
        '[AI支援研究](/prompt-engineering/ai-powered-research?lang=ja) — AIで生成コンテンツ検証フロー、生徒と教師研究タスク適用可能',
        '[ペルソナプロンプティング](/prompt-engineering/persona-prompting?lang=ja) — 「経験豊かな5年生算数教師」のような役割定義がAI出力品質と一貫性を変える方法',
        '[チェーン・オブ・シンク・プロンプティング](/prompt-engineering/chain-of-thought-prompting?lang=ja) — Khanmigoのようなソクラテス的AIチューターの背後の推理技術',
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [],
      faqs: [
        { q: 'AIチューターは本当に学習成果を向上させるのか', a: 'はい、エビデンスは強固です。2024年ハーバード大学ランダム化比較試験では、物理学の学生194名にAIチューターが従来のアクティブラーニング教室より0.73～1.3の効果量を示し、60分ではなく49分で高い成果を達成しました（p < 10−8）。2025年の21研究の体系的レビューでは、AI支援の学生が従来の指導を15～35%上回ることが示されています。' },
        { q: '2026年の教師にとって最高のAIツール', a: '答えはタスクに依存します。Khanmigo（Khan Academy、GPT-4を搭載）は年44ドルでソクラテス的質問による生徒チューターに最適です。MagicSchool は完全な教育ワークフロー（カリキュラム、IEP、親通信）が充実しています。ChatGPT（GPT-4o、OpenAI）は最も柔軟な汎用コンテンツ作成を提供します。複雑な教育分析にはClaude 4.6 Sonnet（Anthropic）が200,000トークン処理します（約160ページ）。' },
        { q: '毎週AIで教師が時間を節約できるか', a: '具体的で文脈的なプロンプトは、一貫して使用すると週5～13時間節約します。最も一般的な時間節約用途：リサーチと内容収集（教師の44%）、カリキュラム計画作成（38%）、情報要約（38%）、教室資料作成（37%）。' },
        { q: '教育でのAIはEU法で法的に許可されているか', a: '学習評価または学習パスに影響するAIシステムはEU AI法（別紙III）で高リスクと分類されます。EU圏の学校は全教師にAIスキル研修を提供する必要があります（2025年から適用の第4条）、AIが影響する評価に対して人間の監督を維持し、すべてのAIシステムに監査ログを保持する必要があります。教育機関での感情認識AIは完全に禁止されています。' },
        { q: 'AI検出ソフトウェアは学業不正を確実に検出するか', a: 'いいえ。現在のAI検出ツールは査読済み研究で15～30%の偽陽性率を持つため、最大30/100の合法的な生徒提出物が誤ってフラグを立てられる可能性があります。非ネイティブスピーカーと構造化された学術的文体で書く学生は不釣り合いに高くフラグが立てられます。2026年の大学は禁止ポリシーから開示・引用フレームワークへ移行し、AI検出を複数の指標の1つとして扱っています。' },
        { q: '教師は教育計画AIにどの温度設定を使うべきか', a: 'ファクト教育内容には温度0.1～0.2に設定します（カリキュラム、評価ガイドライン、アラインメント）。これは一貫性と低変動を生成します。創意的な活動アイデア作成では0.7～0.9を使用します。ほとんどのプラットフォームのデフォルト温度（0.7～1.0）は創意的タスク向けで、教育内容のファクトエラーを増加させます。' },
        { q: 'AIは差別化教育を支援できるか', a: 'はい。これは教育AIの最強のユースケースです。LLMは同じコンテンツを複数の読解レベル（Flesch-Kincaid クラス4、8、12）に数秒で言い換えることができます。プロンプト構造：「このパッセージをクラス[N]レベルで言い直してください。すべてのファクト内容を保持してください。複雑な語彙をシンプルな同義語に置き換えてください。段落構造を保持してください。」Claude 4.6 Sonnetが読解レベル間で最も一貫した差別化を生成します。' },
        { q: 'EU AI法によると学校は教師のAIスキルをどう管理すべきか', a: 'EU AI法第4条は、AIシステムで働くすべての職員に十分なAIスキルを確保するようAI提供者（学校を含む）に要求しています（2025年から適用）。これは以下の研修を意味します：AIがどう決定を下すか、特定のツールのエラー率、人間の監督が必要なときと方法、AIが影響する決定を文書化する方法。学校は監査目的でこの研修を文書化する必要があります。' },
        { q: 'Khanmigoとは何か、学生向けChatGPTとどう異なるか', a: 'KhanmigoはKhan AcademyのAIチューターアシスタントでGPT-4を搭載しています。その決定的な特徴はソクラテス的質問です。答えを直接与えるのではなく、学生を答えに導きます。学生が「答えは何ですか？」と聞くと、Khanmigoは導く質問で応答します。この設計は学習保持を促進します。ChatGPTはデフォルトで直接的な答えを提供し、効率的ですが長期学習を生成する認知努力を減らします。学生向けチューターではKhanmigoの教育設計が優れています。' },
        { q: '学校のためのAI使用ポリシーを作成するには', a: '効果的なAI使用ポリシーは4つを定義します：（1）AIが許可されるタスク（ブレーンストーミング、練習問題、フィードバック草案）、（2）開示が必要なタスク（AI支援エッセイ、プレゼン）、（3）AIが禁止されるタスク（最終試験答、盗用）、（4）AI生成コンテンツの引用方法。ツール開発速度のため、ポリシーは6ヶ月ごとに見直す必要があります。EU圏の学校は、各ポリシー文書に第4条スキル要件とAnnex III高リスク義務も含める必要があります。' },
      ],
    },
    sources: {
      title: 'ソースと参考資料',
      content: [
        '**この記事内のすべての統計と結論は査読済み研究、政府ガイドラインとドキュメント制度ポリシーから取得されます。** 最終ファクトチェック：2026-04-28（現在Claude 4.6 Sonnet、GPT-4o、Gemini 2.5 Proモデル；Khan AcademyでのKhanmigo現在価格；2025年から有効のEU AI法第4条ガイドライン）。',
      ],
      items: [
        '[Kestin & Miller, 2024. 「AIチュータリングが対面アクティブラーニングを上回る — ハーバード大RCT」](https://www.nature.com/articles/s41598-025-97652-6) — 194生徒でのランダム化比較試験；効果量0.73～1.3 SD',
        '[Kwak, 2025. 「The Effectiveness of AI-Driven Tools in Improving Student Learning Outcomes」](https://iacis.org/iis/2025/4_iis_2025_233-247.pdf) — 21研究の体系的レビュー；性能利益15～35%；r = 0.781',
        '[EU AI法、2024。附属書III — 教育における高リスクAIシステム](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) — 教育評価AIを高リスクとして分類、強制監督要件付き',
      ],
    },
  },
},
    zh: {
      freshness_tier: 'semi_annual',
      theme: '应用案例',
      title: '教学中的AI：工具、学习成效与教师提示词框架（2026）',
      intro: '**有效地在2026年用AI教学：采用结构化五步提示词（角色、目标、学生背景、约束条件、输出格式），选择与任务匹配的工具（Khanmigo用于辅导、MagicSchool用于课程规划、Claude 4.6 Sonnet或GPT-4o用于内容生成），将温度设置为0.1–0.2处理事实性内容，对于欧盟学校，在部署任何高风险系统前实施第4条员工AI素养培训。** 2024年哈佛大学随机对照试验发现AI辅导的学习增长是主动学习课堂的两倍以上——用时减少18%。截至2026年4月，85%的美国教师和86%的学生在学年中使用了AI，超过任何其他行业。挑战不在于采用，而在于结构：模糊提示词产生无法使用的输出，结构化提示词每周节省5–13小时，欧盟学校现在对任何涉及学生评估的AI工具承担AI法的法律义务。',
      publishDate: '2026-03-23',
      dateModified: '2026-04-28',
      readTime: '阅读约8分钟',
      seoTitle: '用AI教学：教育者工具、提示词与学习成果（2026）',
      metaDescription: '哈佛RCT研究：AI辅导使学习效果提升2倍以上，学习时间减少18%。85%的教师使用AI——结构化提示词每周节省5–13小时。EU AI法案合规与AI检测工具误判率解析。',
      educationalLevel: 'Beginner',
      audience: '使用AI工具的教师、学校管理人员和教育专业人士',
      aboutTopics: ['教育中的AI', 'Khanmigo', 'EU AI Act'],
      howToName: '如何用AI进行教学',
      next_refresh_due: '2026-09-23',
      toc: [
        { label: 'AI教学工具的实际功能', anchor: '#what-ai-teaching-tools-actually-do' },
        { label: '2026年教师应该选择哪些AI工具？', anchor: '#which-ai-tools-should-teachers-use-in-2026' },
        { label: '如何为教学任务编写提示词', anchor: '#how-to-write-prompts-for-teaching-tasks' },
        { label: '五步教师提示词框架', anchor: '#the-five-component-teacher-prompt' },
        { label: '如何用AI生成评估反馈？', anchor: '#how-do-you-prompt-ai-for-assessment-feedback' },
        { label: 'AI辅导是否真的能改善学习成效？', anchor: '#does-ai-tutoring-improve-learning-outcomes' },
        { label: '学校的AI作弊检测有多可靠？', anchor: '#how-detectable-is-ai-cheating-in-schools' },
        { label: '中国、亚太和企业的AI监管', anchor: '#how-does-the-eu-ai-act-affect-schools' },
        { label: 'AI在教学中的常见误区', anchor: '#common-mistakes-when-using-ai-in-education' },
        { label: '分步指南：将AI融入教学实践', anchor: '#step-by-step-integrating-ai-into-your-teaching' },
        { label: '相关资源', anchor: '#related-reading' },
        { label: '常见问题', anchor: '#frequently-asked-questions' },
        { label: '信息来源', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/teaching-with-ai?lang=zh',
        inLanguage: 'zh',
        headline: '教学中的AI：工具、学习成效与教师提示词框架（2026）',
        description: 'AI辅导系统将学习成效提升至传统课堂的两倍。了解教师如何将AI用于课程规划、评估、学生辅导，以及为什么85%的美国教师在2026年采用了AI。',
        datePublished: '2026-03-23',
        dateModified: '2026-04-28',
        proficiencyLevel: 'Beginner',
        author: {
          '@type': 'Organization',
          name: 'PromptQuorum',
        },
        about: [
          { '@type': 'Thing', name: '教育中的AI' },
          { '@type': 'SoftwareApplication', name: 'Khanmigo' },
          { '@type': 'Legislation', name: 'EU AI Act' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: '教师',
          audienceType: '教师、学校管理人员、教育专业人士',
        },
        educationalLevel: 'K-12、高等教育',
        publisher: {
          '@type': 'Organization',
          name: 'PromptQuorum',
          url: 'https://www.promptquorum.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.promptquorum.com/logo.svg',
          },
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/api/og/teaching-with-ai',
          width: 1200,
          height: 630,
        },
        keywords: ['AI辅导', '教育中的AI', 'Khanmigo', '课程规划', '教师ChatGPT', 'Claude教育', '提示词工程教学'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'Khanmigo' },
          { '@type': 'SoftwareApplication', name: 'MagicSchool' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'SoftwareApplication', name: 'NotebookLM' },
          { '@type': 'Organization', name: '哈佛大学' },
          { '@type': 'Organization', name: 'Khan Academy' },
          { '@type': 'Organization', name: 'PromptQuorum' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'AI辅导是否真的能改善学习成效？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '是的——证据是确凿的。2024年哈佛大学随机对照试验涉及194名物理学本科生，发现AI辅导的效果量为0.73–1.3标准差，超过主动学习课堂，学生用49分钟而非60分钟达到更高分数（p < 10−8）。2025年21项研究的系统综述发现AI支持的学生在评估中比传统教学表现高15–35%。',
            },
          },
          {
            '@type': 'Question',
            name: '2026年教师最好的AI工具是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '答案取决于任务。Khanmigo（Khan Academy，GPT-4驱动）最适合通过苏格拉底式提问进行学生辅导，每年$44。MagicSchool在全面教师工作流工具中领先（课程计划、IEP、家长沟通）。ChatGPT（GPT-4o，OpenAI）提供最灵活的通用内容生成。对于复杂课程分析，Claude 4.6 Sonnet（Anthropic）在单个会话中处理200,000个令牌——约160个标准页面。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI每周能为教师节省多少时间？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '具体、上下文丰富的提示词在一致使用时每周为教师节省5–13小时的课程规划和行政任务。最常见的时间节省应用是：研究和内容收集（44%的教师）、课程计划创建（38%）、信息摘要（38%）和课堂材料生成（37%）。',
            },
          },
          {
            '@type': 'Question',
            name: '教育中的AI在欧盟法律下是否合法？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '影响教育评估或学习路径的AI系统在EU AI法（附件III）下被归类为高风险。欧盟学校必须实施员工AI素养培训（第4条，自2025年起生效），为AI影响的评估维持人类监督，并为任何影响学生成果的AI系统保持审计跟踪。教育环境中的情感识别AI被完全禁止。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI检测软件是否能可靠地发现学业不诚实？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '否——当前的AI检测工具在同行评审研究中的假阳性率为15–30%，意味着每100份合法的学生提交作业中最多30份可能被错误标记。非英语使用者和采用结构化学术写作风格的学生被标记的比率不成比例地高。2026年的大学正在从禁止政策转向披露和引用框架，将AI检测视为众多指标中的一项，而非确定性证明。',
            },
          },
          {
            '@type': 'Question',
            name: '教师应该为AI课程规划使用什么温度设置？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '对于事实性教育内容——课程计划、评估标准、课程对齐——将温度设置为0.1–0.2。这产生一致、低变异输出。仅在生成创意活动想法时使用0.7–0.9，其中多样化选项是目标。大多数平台上的默认温度（0.7–1.0）为创意任务而设计，会增加教育内容的事实性错误。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI工具能帮助进行差异化教学吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '是的——这是AI最强的教育用例之一。LLM可以在数秒内将相同内容改写为多个阅读水平（Flesch-Kincaid等级4、8和12）。提示词结构：「将此段落改写为[N]年级阅读水平。保留所有事实内容。用更简单的同义词替换复杂词汇。保持相同的段落结构。」Claude 4.6 Sonnet在各阅读水平间产生最一致的差异化。',
            },
          },
          {
            '@type': 'Question',
            name: '学校应如何根据EU AI法处理员工AI素养？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'EU AI法第4条要求AI部署者（包括学校）确保所有与AI系统协作的员工具有充分的AI素养——自2025年起生效。这意味着培训涵盖：AI如何做出决定、特定工具的错误率、何时需要人类监督、如何记录AI影响的决策。学校应该为审计目的记录此培训。',
            },
          },
          {
            '@type': 'Question',
            name: 'Khanmigo是什么，它与学生用的ChatGPT有何不同？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Khanmigo是Khan Academy的AI教学助手，由GPT-4驱动。其定义特征是苏格拉底式提问——它引导学生走向答案，而不是直接提供答案。当学生问「答案是什么？」时，Khanmigo用引导问题回应。这种设计促进学习保留。ChatGPT在默认情况下提供直接答案，这很有效率，但减少了产生长期学习的认知努力。对于学生面向辅导，Khanmigo的教学设计更优；对于教师内容生成，ChatGPT的灵活性获胜。',
            },
          },
          {
            '@type': 'Question',
            name: '我如何为学校制定AI使用政策？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '有效的学校AI政策定义四个事项：（1）AI允许用于的任务（头脑风暴、练习题、草稿反馈），（2）需要披露的任务（AI辅助论文、演示），（3）AI禁止的任务（期末考试答案、剽窃），（4）AI生成内容如何被归属。考虑到工具开发的步伐，该政策应每6个月审查一次。欧盟学校还必须在任何政策文件中处理EU AI法第4条员工培训要求和附件III高风险系统义务。',
            },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'zh',
        name: '如何将AI融入教学实践',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: '在引入AI前定义学习目标和评估',
            text: '明确说明学生必须了解什么以及如何评估。然后设计AI在哪里加强教学。',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: '将AI用于个性化练习和即时反馈，而非评分',
            text: 'AI擅长生成练习题和提供即时反馈。避免在无人工审查的情况下使用AI进行主观评分。',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: '为每个任务类型构建结构化提示词框架',
            text: '不同的教学任务需要不同的提示词结构。为课程规划、反馈、创意想法和分析创建模板。',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: '教导学生验证AI输出并识别幻觉',
            text: '不要将学生设定为AI输出的被动消费者。建立课堂练习，学生检查事实、识别错误、识别偏见。',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: '为所有AI交互创建学生用提示词模板',
            text: '给学生一个他们在所有任务中可以使用的结构化提示词模板。这训练批判性思维，确保一致的输出质量。',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'zh',
        name: '2026年教学AI工具对比',
        description: '为教师提供的6款领先AI工具的比较：功能、用例、定价、学习曲线。',
        numberOfItems: 6,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Khanmigo',
            description: '基于GPT-4、专为学生辅导设计、采用苏格拉底式提问，每年$44。适合数学、科学、英文文学。',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'MagicSchool',
            description: '完整的教师工作流平台：课程计划、差异化内容、IEP协助、家长沟通模板。年度订阅$199。',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'ChatGPT（GPT-4o）',
            description: '通用内容生成：课程计划、测验创建、论文反馈、研究摘要。按需或订阅$20/月。',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Claude 4.6 Sonnet',
            description: '复杂分析、长文档处理（200k令牌）、详细反馈。按需计费；API/Pro订阅可用。',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Gemini 2.5 Pro',
            description: '多模态输入：图像识别、语音、文本。用于创意资源生成和差异化文本。免费+Pro选项。',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'NotebookLM',
            description: '将学生论文、教科书章节、课程转换为笔记、学习指南、音频讲座。谷歌出品。',
          },
        ],
      },
      sections: {
        definition: {
          title: 'AI教学工具的实际功能',
          content: [
            '**AI教学工具不替代教师——它们增强特定任务的效率，使教师从管理性工作中解放出来投入教学。** AI在课程规划、学生评估反馈、个性化练习生成和内容改写中最有效。AI不适合进行主观评分（论文成绩）或学生面向的开放式对话，除非有人类审查。',
            'AI辅导系统（如Khanmigo）通过苏格拉底式提问引导学生，而不是直接提供答案。这设计模仿有经验的人工导师的行为，产生更高的保留率。相比之下，ChatGPT直接回答，在教师使用时很有效，但对学生使用时会减少认知工作。',
            '在教学中使用AI的关键是构建：明确的提示词、特定的学生背景、以及所需输出的具体格式。「生成一个5年级的乘法工作表」产生通用、无差异的内容。「为会话数学学习者生成一个乘法工作表，使用真实情景（杂货店价格），避免进位」产生有针对性、与学生需求匹配的内容。',
          ],
        },
        toolComparison: {
          title: '2026年教师应该选择哪些AI工具？',
          content: [
            '**每个AI工具在教学中有不同的目的。** 选择应基于任务（课程规划vs.学生辅导）、所需的工具深度（快速内容生成vs.完整工作流平台）和预算。',
            '以下是6款2026年最常用的教学AI工具的对比。这个表包括定价（截至2026年4月），学习难度和最适合的用例。',
          ],
          tableFormat: true,
          columns: ['工具', '定价', '最佳用途', '学习曲线', '高风险功能'],
          rows: [
            {
              '工具': 'Khanmigo',
              '定价': '$44/年',
              '最佳用途': '学生数学/科学辅导（苏格拉底式）',
              '学习曲线': '低——预配置的提问风格',
              '高风险功能': '否；仅供学生使用',
            },
            {
              '工具': 'MagicSchool',
              '定价': '$199/年',
              '最佳用途': '课程计划、差异化、IEP协助',
              '学习曲线': '低——针对教师的GUI',
              '高风险功能': '是；生成评估内容',
            },
            {
              '工具': 'ChatGPT（GPT-4o）',
              '定价': '$20/月或按需',
              '最佳用途': '内容生成、论文反馈、研究摘要',
              '学习曲线': '中——提示词质量决定输出',
              '高风险功能': '是；用于评估反馈',
            },
            {
              '工具': 'Claude 4.6 Sonnet',
              '定价': '$20/月 Pro或按需',
              '最佳用途': '长文档分析、复杂反馈、课程改编',
              '学习曲线': '中——处理200k令牌需要结构',
              '高风险功能': '是；复杂评估分析',
            },
            {
              '工具': 'Gemini 2.5 Pro',
              '定价': '免费+Pro',
              '最佳用途': '多模态（图像、语音、文本）资源',
              '学习曲线': '低——自动化多种输入',
              '高风险功能': '否；主要用于资源生成',
            },
            {
              '工具': 'NotebookLM',
              '定价': '免费（谷歌）',
              '最佳用途': '教科书/讲座→笔记、学习指南、播客',
              '学习曲线': '极低——上传→生成',
              '高风险功能': '否；学生学习资源',
            },
          ],
        },
        promptStructure: {
          title: '如何为教学任务编写提示词',
          content: [
            '**结构化提示词的五个要素产生可预测的、高质量的教学AI输出：** 角色（「你是一位有15年经验的高中化学教师」）、目标（「创建一个关于分子键的引入课程」）、学生背景（「适合11年级，包括2名有学习障碍的学生」）、约束条件（「避免方程——侧重概念」）和输出格式（「Markdown大纲，包括引入钩子、主要概念、检查理解问题」）。',
            '不含这五个要素的提示词导致通用、不适用的输出。例如，「为生物学创建一个课程」可能产生一个包含26个科目的100页教材。「为11年级生物学创建一个90分钟的课程，关于光合作用，包括15分钟的动手活动、概念检查问题和差异化练习集（高级和基础读者版本）」产生有针对性的、立即可用的教学资源。',
            '使用一致的提示词框架在整个学年中。这建立学生期望、确保输出的一致性、并将AI使用规范化为教学工作流的一部分。',
          ],
        },
        promptFramework: {
          title: '五步教师提示词框架',
          content: [
            '**此五步提示词框架适用于任何教学任务——课程计划、反馈、创意资源生成或学生辅导。复制此模板，为您的特定学生和目标进行定制。** 这是迄今为止产生一致、高质量教学AI输出的最可靠方法。',
          ],
          codeBlock: `你是一个有[X年]经验的[科目]教师，专门教授[学生群体]。

目标：[创建...]/[评估...]/[提供反馈...] 关于 [具体概念]

学生背景：
- 年级/年龄：[具体]
- 学习风格：[视觉/听觉/动觉/混合]
- 特殊需求：[包括任何IEP考虑因素]
- 先验知识：[他们已知的]

约束条件：
- 长度：[例如，90秒解释]
- 避免：[例如，方程式、技术术语、PDF格式]
- 包括：[例如，真实例子、视觉元素]
- 风格：[例如，对话、正式、以故事为中心]

输出格式：
[选择一个：单个段落] / [3点项目符号] / [分步说明] / [对话脚本] / [Markdown大纲]`,
          codeLanguage: 'plaintext',
        },
        assessmentPrompt: {
          title: '如何用AI生成评估反馈？',
          content: [
            '**有效的评估反馈需要三个要素：明确的标准（学生知道什么是优秀）、具体的证据（「你在第3段使用了三个过渡词」）和可行的改进路径（「下次尝试……」）。** 大多数学生提交作业从AI得到的反馈是笼统的（「很好的工作！」），这在改进学习中无效。',
            '用此结构为任何科目的学生论文、测验或项目生成反馈：',
            '[学生年级和科目的背景]',
            '[学生提交的工作（粘贴正文或描述）]',
            '[分配的标准或评分标准]',
            '请：',
            '1. 识别学生做对的三件事（具体的例子）',
            '2. 确定一个改进的关键领域（最重要的概念或技能）',
            '3. 提供一个明确的、可行的后续步骤（「改写第2段以……」）',
            '4. 用学生能理解的语言（不要用教师术语）',
            '5. 提供一个提问而非陈述的反问（苏格拉底式方法：「你认为这句话如何支持你的论点？」）',
            '将输出格式为直接可用的学生反馈。',
          ],
        },
        learningOutcomes: {
          title: 'AI辅导是否真的能改善学习成效？',
          content: [
            '**是的——证据是强有力的且不断增长的。** 2024年哈佛大学的一项随机对照试验涉及194名本科物理学生，发现AI辅导产生的学习增长是主动学习课堂的两倍以上，学生用更少的时间完成相同的成果。',
            '这项研究的关键发现：',
            '- AI辅导组与传统讲座组相比显示0.73–1.3的效果量（标准差）',
            '- 学生在49分钟内达到的分数与传统课堂在60分钟内达到的相同',
            '- 增长在数学、物理、编程和语言学习中是一致的',
            '- 优势对低起点学生尤其强劲',
            '2025年的系统综述研究了21项关于AI支持学习的研究，发现学生在正式评估中平均超过传统教学15–35%。',
            '但这些增长取决于两个条件：（1）AI辅导使用对学习者有意义的问题（Khanmigo通过苏格拉底式提问做这个），和（2）学生投入时间与系统互动。被动观看AI生成的内容不会产生增长。',
          ],
        },
        integrityProblem: {
          title: '学校的AI作弊检测有多可靠？',
          content: [
            '**AI检测工具的可靠性远低于教育者认为的。** 目前的AI检测软件有15–30%的假阳性率，意味着每100份完全合法的学生提交中，最多30份可能被错误标记为AI生成的。',
            '关键数据点：',
            '- Turnitin的AI检测在独立评估中显示23%的假阳性（合法学生工作被标记为AI）',
            '- 非英语使用者被错误标记的比率是英语使用者的3倍',
            '- 采用结构化学术风格写作的学生（论文陈述、主题句）更可能被标记，尽管没有AI',
            '- 学生使用AI协助学习（改写理解）与学生用AI提交AI生成的工作无法区分',
            '2026年的大学政策正在从「AI禁止，检测器作为证据」转向「披露和引用框架」——学生可以使用AI，但必须说明其角色并引用其使用。检测器被视为多个指标中的一个，而非确定性证明。',
            '对于K-12：与其依赖检测器，建立标准框架：「AI允许用于头脑风暴和草稿反馈。最后的工作必须代表学生的思维。」学生知道期望什么会减少不诚实。',
          ],
        },
        regulatoryContext: {
          title: '中国、亚太和企业的AI监管',
          content: [
            '**不同地区对教育AI有不同的监管框架。** 全球学校应了解其司法管辖区的要求。',
            '### 中国（数据安全法）',
            '中国的2021年《数据安全法》要求任何处理学生数据（年龄、考试分数、学习历史、生物识别）的系统都必须符合数据分类和控制要求。在本地运行的AI系统（如Qwen2.5在学校服务器上）优于云系统，因为数据驻留在中国，满足《数据安全法》第10条的要求。',
            '对于中国学校：优先考虑本地推理（在学校硬件上运行的模型）以满足数据驻留。Qwen2.5和其他开源模型可在标准学校硬件（GPU：NVIDIA H100或类似）上本地部署。',
            '### 亚太地区（数据跨境合规）',
            '新加坡、日本和南韩有数据跨境限制：学生数据不能无同意转移到新加坡/日本领土外。东盟和太平洋地区日益采取多国合规框架，允许地区内云托管而不允许美国或欧洲转移。',
            '对于亚太学校：验证您的AI工具提供商是否提供本地数据中心或合同承诺将学生数据保持在区域内（新加坡、日本、悉尼）。全球提供商（OpenAI、Google）通常在美国处理数据，这可能违反当地法律。',
            '### 企业与机构部署',
            '大型学区和高等教育机构必须维持：',
            '- 审计跟踪（记录谁使用AI、用于什么、何时，用于后续审查）',
            '- 人类监督过程（AI不能进行最终评分；必须是建议）',
            '- 透明政策（学生和家长知道如何使用AI及其限制）',
            '- 例外处理和上报路线（当AI做出错误决定时会发生什么）',
          ],
        },
        commonMistakes: {
          title: 'AI在教学中的常见误区',
          content: [
            '**误区1：直接向学生展示AI答案。** 学生学习通过做（认知努力），而不是通过观看。给学生一个AI生成的论文大纲而不让他们思考问题会削弱学习。改为：使用AI生成多个大纲选项，让学生选择和改进。',
            '**误区2：使用AI来评分主观工作（论文、艺术、讨论）。** AI在数学或事实性评估中可以评分。在批判性思维、创意性或论证中，没有人类背景下的AI分数会不公平。改为：使用AI生成初步反馈，由您或同龄人进行最终评分。',
            '**误区3：假设高温度（0.7–1.0）对事实性内容很好。** 高温度增加多样性但也增加幻觉和错误。事实性内容（历史日期、科学事实、公式）在温度0.1–0.2时更好。改为：为事实创建模板（0.1–0.2），为创意活动使用高温度（0.7–0.9）。',
            '**误区4：不教学生验证AI输出。** 学生认为AI总是正确的。加强课堂活动，学生检查AI答案对错。改为：课堂练习，学生评估AI反馈或提议的解决方案。',
            '**误区5：对所有工作使用相同的提示词。** 笼统的提示词（「创建一个课程」）产生笼统的结果。针对具体学生、年级、学习风格的提示词产生有用的结果。改为：使用五步框架为每种任务类型定制提示词。',
          ],
        },
        howToStart: {
          title: '分步指南：将AI融入教学实践',
          content: [
            '**开始使用AI进行教学的最快方法：从一个小任务开始，如课程计划或反馈，并扩大。** 这是分步工作流：',
            '1. **明确您的学习目标。** 在向AI询问之前，知道学生需要学什么。AI可以帮助实现目标，但不能替代设定它们。',
            '2. **选择一个特定的教学任务。** 课程规划？学生反馈？练习生成？每个都有不同的提示词策略。不要一次尝试所有。',
            '3. **构建您的提示词。** 使用五步框架（角色、目标、学生背景、约束条件、输出格式）。测试它两三次，调整。存储有效的提示词以供重复使用。',
            '4. **评估输出。** AI的输出是好的吗？准确吗？您能在课堂中使用吗？如果是，保存它。如果否，细化提示词并重试。',
            '5. **立即使用它。** 不要完善提示词——使用足够好的输出，改进是在实践中进行的。',
            '6. **扩展到新任务。** 一旦您对一个任务有信心，为另一个任务创建提示词（反馈、差异化、资源生成）。',
            '大多数教师在这个过程中花费3–4周就能有效地使用AI。学习曲线最陡的部分是编写好的提示词——但一旦您做了，您可以重复使用它们每年。',
          ],
          callouts: [
            { type: '✨', label: '立即收益', text: '教师使用结构化提示词每周节省5–13小时——足以为每个学生每周添加1小时的个性化辅导。' },
          ],
        },
        relatedReading: {
          title: '相关资源',
          items: [
            '[什么是提示词工程](/prompt-engineering/what-is-prompt-engineering?lang=zh) — 有效AI指令背后的基本原理',
            '[用AI写更好的代码](/prompt-engineering/write-better-code-with-ai?lang=zh) — 结构化提示词如何产生可靠的AI输出 — 适用于课程规划和评估生成',
            '[AI局限——LLM无法做什么](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=zh) — AI幻觉如何影响教学工具以及如何规划',
            '[AI支持的研究](/prompt-engineering/ai-powered-research?lang=zh) — AI生成内容验证工作流，可应用于学生和教师研究任务',
            '[角色提示词](/prompt-engineering/persona-prompting?lang=zh) — 角色定义（如「经验丰富的五年级数学教师」）如何改变AI输出质量和一致性',
            '[链式思维提示词](/prompt-engineering/chain-of-thought-prompting?lang=zh) — Khanmigo等苏格拉底式AI导师背后的推理技术',
          ],
        },
        faq: {
          title: '常见问题',
          items: [],
          faqs: [
            { q: 'AI辅导是否真的能改善学习成效？', a: '是的——证据是确凿的。2024年哈佛大学随机对照试验涉及194名物理学本科生，发现AI辅导的效果量为0.73–1.3标准差，超过主动学习课堂，学生用49分钟而非60分钟达到更高分数（p < 10−8）。2025年21项研究的系统综述发现AI支持的学生在评估中比传统教学表现高15–35%。' },
            { q: '2026年教师最好的AI工具是什么？', a: '答案取决于任务。Khanmigo（Khan Academy，GPT-4驱动）最适合通过苏格拉底式提问进行学生辅导，每年$44。MagicSchool在全面教师工作流工具中领先（课程计划、IEP、家长沟通）。ChatGPT（GPT-4o，OpenAI）提供最灵活的通用内容生成。对于复杂课程分析，Claude 4.6 Sonnet（Anthropic）在单个会话中处理200,000个令牌——约160个标准页面。' },
            { q: 'AI每周能为教师节省多少时间？', a: '具体、上下文丰富的提示词在一致使用时每周为教师节省5–13小时的课程规划和行政任务。最常见的时间节省应用是：研究和内容收集（44%的教师）、课程计划创建（38%）、信息摘要（38%）和课堂材料生成（37%）。' },
            { q: '教育中的AI在欧盟法律下是否合法？', a: '影响教育评估或学习路径的AI系统在EU AI法（附件III）下被归类为高风险。欧盟学校必须实施员工AI素养培训（第4条，自2025年起生效），为AI影响的评估维持人类监督，并为任何影响学生成果的AI系统保持审计跟踪。教育环境中的情感识别AI被完全禁止。' },
            { q: 'AI检测软件是否能可靠地发现学业不诚实？', a: '否——当前的AI检测工具在同行评审研究中的假阳性率为15–30%，意味着每100份合法的学生提交作业中最多30份可能被错误标记。非英语使用者和采用结构化学术写作风格的学生被标记的比率不成比例地高。2026年的大学正在从禁止政策转向披露和引用框架，将AI检测视为众多指标中的一项，而非确定性证明。' },
            { q: '教师应该为AI课程规划使用什么温度设置？', a: '对于事实性教育内容——课程计划、评估标准、课程对齐——将温度设置为0.1–0.2。这产生一致、低变异输出。仅在生成创意活动想法时使用0.7–0.9，其中多样化选项是目标。大多数平台上的默认温度（0.7–1.0）为创意任务而设计，会增加教育内容的事实性错误。' },
            { q: 'AI工具能帮助进行差异化教学吗？', a: '是的——这是AI最强的教育用例之一。LLM可以在数秒内将相同内容改写为多个阅读水平（Flesch-Kincaid等级4、8和12）。提示词结构：「将此段落改写为[N]年级阅读水平。保留所有事实内容。用更简单的同义词替换复杂词汇。保持相同的段落结构。」Claude 4.6 Sonnet在各阅读水平间产生最一致的差异化。' },
            { q: '学校应如何根据EU AI法处理员工AI素养？', a: 'EU AI法第4条要求AI部署者（包括学校）确保所有与AI系统协作的员工具有充分的AI素养——自2025年起生效。这意味着培训涵盖：AI如何做出决定、特定工具的错误率、何时需要人类监督、如何记录AI影响的决策。学校应该为审计目的记录此培训。' },
            { q: 'Khanmigo是什么，它与学生用的ChatGPT有何不同？', a: 'Khanmigo是Khan Academy的AI教学助手，由GPT-4驱动。其定义特征是苏格拉底式提问——它引导学生走向答案，而不是直接提供答案。当学生问「答案是什么？」时，Khanmigo用引导问题回应。这种设计促进学习保留。ChatGPT在默认情况下提供直接答案，这很有效率，但减少了产生长期学习的认知努力。对于学生面向辅导，Khanmigo的教学设计更优；对于教师内容生成，ChatGPT的灵活性获胜。' },
            { q: '我如何为学校制定AI使用政策？', a: '有效的学校AI政策定义四个事项：（1）AI允许用于的任务（头脑风暴、练习题、草稿反馈），（2）需要披露的任务（AI辅助论文、演示），（3）AI禁止的任务（期末考试答案、剽窃），（4）AI生成内容如何被归属。考虑到工具开发的步伐，该政策应每6个月审查一次。欧盟学校还必须在任何政策文件中处理EU AI法第4条员工培训要求和附件III高风险系统义务。' },
          ],
        },
        sources: {
          title: '信息来源',
          content: [
            '**此文章中的所有统计数据和结论均来自同行评审研究、政府指南和机构政策。** 最终事实检查：2026-04-28（当前模型：Claude 4.6 Sonnet、GPT-4o、Gemini 2.5 Pro；Khan Academy上Khanmigo的当前价格；EU AI法第4条指南自2025年起生效）。',
          ],
          items: [
            '[Kestin & Miller, 2024. 《AI辅导优于课堂主动学习 — 哈佛随机对照试验》](https://www.nature.com/articles/s41598-025-97652-6) — 194名学生的随机对照试验；效果量0.73–1.3 SD',
            '[Kwak, 2025. 「The Effectiveness of AI-Driven Tools in Improving Student Learning Outcomes」](https://iacis.org/iis/2025/4_iis_2025_233-247.pdf) — 21项研究的系统综述；性能增益15–35%；r = 0.781',
            '[欧盟AI法案，2024。附件III——教育中的高风险AI系统](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689) — 将教育评估AI分类为高风险，强制监督要求',
          ],
        },
      },
    },
  };
