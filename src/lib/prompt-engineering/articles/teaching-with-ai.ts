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
      seoTitle: 'Teaching With AI: Tools, Outcomes & Prompts (2026)',
      metaDescription: 'AI tutoring doubles learning outcomes in 18% less study time. Compare 6 teaching tools, prompt templates, detection limits, and EU AI Act compliance rules.',
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
        { label: 'Step-by-Step Workflow: Teaching With AI', anchor: '#step-by-step-workflow-teaching-with-ai' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Frequently Asked Questions', anchor: '#frequently-asked-questions' },
        { label: 'Sources & Further Reading', anchor: '#sources-further-reading' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
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
        name: 'How to Teach With AI',
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
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — structuring AI-generated educational materials and prompts for accuracy',
            '[AI Limitations — What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — why AI hallucination affects educational tools and how to design around it',
            '[AI-Powered Research](/prompt-engineering/ai-powered-research) — verification workflows for AI-generated content applicable to student and teacher research tasks',
            '[Persona Prompting](/prompt-engineering/persona-prompting) — how role definitions like "experienced 5th-grade teacher" change AI output quality and consistency',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — the reasoning technique behind Socratic AI tutors like Khanmigo',
          ],
        },
        howToStart: {
          title: 'Step-by-Step Workflow: Teaching With AI',
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
            '[Kestin & Miller, 2024. "AI tutoring outperforms active learning classrooms — Harvard RCT"](https://www.hellopraxis.com/en/praxisnotes/ai-tutors-outperform-traditional-teaching-methods-in-groundbreaking-harvard-study) — randomized controlled trial with 194 students; effect size 0.73–1.3 SD',
            '[Kwak, 2025. "The Effectiveness of AI-Driven Tools in Improving Student Learning Outcomes"](https://iacis.org/iis/2025/4_iis_2025_233-247.pdf) — systematic review of 21 studies; 15–35% performance gains; r = 0.781',
            '[EU AI Act, 2024. Annex III — High-Risk AI Systems in Education](https://eaea.org/2025/05/15/artificial-intelligence-and-education-ethics-and-legal-aspects/) — classifies educational assessment AI as high-risk with mandatory oversight requirements',
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
      seoTitle: 'Mit KI unterrichten: Tools, Ergebnisse & Prompts',
      metaDescription: 'KI-Nachhilfe verdoppelt Lernergebnisse in 18 % weniger Lernzeit. Vergleichen Sie 6 Lehrkräfte-Tools, Prompt-Vorlagen, Erkennungsgrenzen und EU AI Act-Compliance.',
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
        { label: 'Schritt-für-Schritt-Workflow: Mit KI unterrichten', anchor: '#step-by-step-workflow-teaching-with-ai' },
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
        name: 'So unterrichten Sie mit KI',
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
            '[Schreiben Sie besseren Code mit KI](/prompt-engineering/write-better-code-with-ai?lang=de) — Strukturierung von KI-generierten Unterrichtsmaterialien und Prompts für Genauigkeit',
            '[KI-Einschränkungen — Was LLMs nicht können](/prompt-engineering/ai-limitations-what-llms-cant-do?lang=de) — warum KI-Halluzination Lehrkräfte-Tools beeinflusst und wie man drumherum entwirft',
            '[KI-gestützte Forschung](/prompt-engineering/ai-powered-research?lang=de) — Validierungs-Workflows für KI-generierte Inhalte, anwendbar auf Schüler- und Lehrkräfte-Forschungsaufgaben',
            '[Persona-Prompting](/prompt-engineering/persona-prompting?lang=de) — wie Rollen-Definitionen wie „erfahrener Fünftklasse-Mathematik-Lehrer\" KI-Output-Qualität und Konsistenz ändern',
            '[Chain-of-Thought-Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de) — die Reasoning-Technik hinter sokratischen KI-Tutoren wie Khanmigo',
          ],
        },
        howToStart: {
          title: 'Schritt-für-Schritt-Workflow: Mit KI unterrichten',
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
            '[Kestin & Miller, 2024. \"AI tutoring outperforms active learning classrooms — Harvard RCT\"](https://www.hellopraxis.com/en/praxisnotes/ai-tutors-outperform-traditional-teaching-methods-in-groundbreaking-harvard-study) — randomisierte kontrollierte Studie mit 194 Schülern; Effektstärke 0,73–1,3 SD',
            '[Kwak, 2025. \"The Effectiveness of AI-Driven Tools in Improving Student Learning Outcomes\"](https://iacis.org/iis/2025/4_iis_2025_233-247.pdf) — systematische Überprüfung von 21 Studien; 15–35 % Leistungsgewinne; r = 0,781',
            '[EU AI Act, 2024. Annex III — High-Risk AI Systems in Education](https://eaea.org/2025/05/15/artificial-intelligence-and-education-ethics-and-legal-aspects/) — klassifiziert Bildungs-Bewertungs-KI als hochriskant mit obligatorischen Überwachungsanforderungen',
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
  seoTitle: 'Enseigner avec l\'IA : outils, résultats & prompts',
  metaDescription: 'Le tutorat IA double les résultats en 18 % moins de temps. Comparez 6 outils pédagogiques, modèles de prompts, limites de détection et conformité à la Loi IA.',
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
    { label: 'Flux de travail pas à pas : enseigner avec l\'IA', anchor: '#step-by-step-workflow-teaching-with-ai' },
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
    name: 'Comment enseigner avec l\'IA',
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
      blockquote: 'Tu es un enseignant expérimenté de mathématiques en cinquième année. Crée une leçon de 45 minutes sur l\'addition de fractions avec des dénominateurs différents. Les élèves comprennent les fractions équivalentes mais ne les ont pas encore combinées. Fournis : un échauffement de 10 minutes avec modèles visuels, 15 minutes d\'enseignement direct avec trois exemples travaillés, 15 minutes de pratique en paires, et un billet de sortie de 5 minutes. Alignement Common Core 5.NF.A.1. Donne uniquement le plan de leçon avec en-têtes de section, allocations de temps et une liste de matériaux.',
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
        'La Loi IA de l\'UE interdit complètement les systèmes de reconnaissance d\'émotions dans les établissements éducatifs — affectant directement les outils suivant l\'engagement des élèves par analyse faciale. Les établissements éducatifs chinois déploient des outils IA selon les mesures intermédiaires chinoises pour l\'IA générative (2023), exigeant que le contenu pédagogique généré par l\'IA soit étiqueté comme tel. Le ministère japonais de l\'Éducation (MEXT) a publié en 2023 des directives mettant en garde contre l\'utilisation d\'IA dans certains contextes d\'évaluation, tout en reconnaissant l\'IA comme une compétence pédagogique fondamentale.',
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
      title: 'Flux de travail pas à pas : enseigner avec l\'IA',
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
    },
    relatedReading: {
      title: 'Lectures complémentaires',
      items: [
        '[Qu\'est-ce que l\'engineering des prompts ?](/prompt-engineering/what-is-prompt-engineering?lang=fr) — les principes fondamentaux derrière les instructions IA efficaces',
        '[Écrivez un meilleur code avec l\'IA](/prompt-engineering/write-better-code-with-ai?lang=fr) — structuration du contenu pédagogique généré par IA et prompts pour précision',
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
        '[Kestin & Miller, 2024. « AI tutoring outperforms active learning classrooms — Harvard RCT »](https://www.hellopraxis.com/en/praxisnotes/ai-tutors-outperform-traditional-teaching-methods-in-groundbreaking-harvard-study) — étude randomisée contrôlée avec 194 élèves ; taille d\'effet 0,73–1,3 SD',
        '[Kwak, 2025. « The Effectiveness of AI-Driven Tools in Improving Student Learning Outcomes »](https://iacis.org/iis/2025/4_iis_2025_233-247.pdf) — examen systématique de 21 études ; gains de performance 15–35 % ; r = 0,781',
        '[Loi IA de l\'UE, 2024. Annexe III — Systèmes IA à Haut Risque en Éducation](https://eaea.org/2025/05/15/artificial-intelligence-and-education-ethics-and-legal-aspects/) — classifie l\'IA d\'évaluation éducative comme haut risque avec obligations de supervision obligatoires',
      ],
    },
  },
},
    ja: { theme: 'Use Cases', title: '', intro: '', publishDate: '2026-03-23', readTime: '', sections: {} },
    zh: { theme: 'Use Cases', title: '', intro: '', publishDate: '2026-03-23', readTime: '', sections: {} },
  };
