export type Framework = {
  slug: string
  name: string
  expansion: string
  tagline: string
  complexity: 'Low' | 'Medium' | 'High'
  fields: { name: string; description: string }[]
  bestFor: string[]
  notFor: string[]
  example: { scenario: string; prompt: string }
  badge?: string
  related: string[]
  faq: { q: string; a: string }[]
}

export const FRAMEWORKS: Framework[] = [
  {
    slug: 'co-star',
    name: 'CO-STAR',
    expansion: 'Context · Objective · Style · Tone · Audience · Response',
    tagline: 'The Singapore GPT-4 competition winner. Maximum control over voice, audience, and output format.',
    complexity: 'Medium',
    badge: 'Won Singapore GPT-4 Competition',
    fields: [
      { name: 'Context', description: 'Background information the AI needs to understand the task and situation.' },
      { name: 'Objective', description: 'The specific goal or outcome you want the AI to achieve.' },
      { name: 'Style', description: 'The writing style — e.g., formal, conversational, journalistic, academic.' },
      { name: 'Tone', description: 'The emotional register — e.g., persuasive, empathetic, authoritative, friendly.' },
      { name: 'Audience', description: 'Who the output is for. Shapes vocabulary, depth, and assumptions.' },
      { name: 'Response', description: 'The exact output format — e.g., bullet list, 500-word article, JSON, table.' },
    ],
    bestFor: [
      'Business communication and marketing copy',
      'Content where voice and tone matter (brand writing)',
      'Professional writing for a specific audience',
      'Any task where you need to control style separately from tone',
    ],
    notFor: [
      'Quick one-off queries where structure adds no value',
      'Sequential multi-step tasks (use RISEN instead)',
      'Technical tasks where examples matter more (use TRACE)',
    ],
    example: {
      scenario: 'Writing a product launch email for a SaaS tool targeting CTOs',
      prompt: 'Context: PromptQuorum is a multi-model AI tool launching in April 2026. Objective: Write a product launch email that drives signups. Style: Clear and direct, no fluff. Tone: Confident and professional. Audience: CTOs at mid-size tech companies. Response: 200-word email with subject line.',
    },
    related: ['craft', 'specs', 'rtf'],
    faq: [
      { q: 'What does CO-STAR stand for?', a: 'CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response — six fields that give you precise control over AI output.' },
      { q: 'Why did CO-STAR win the Singapore GPT-4 competition?', a: 'CO-STAR won because it separates Style (presentation) from Tone (emotion), giving more precise control than frameworks that treat them as one field.' },
      { q: 'When should I use CO-STAR vs CRAFT?', a: 'Use CO-STAR when you need fine-grained control over voice and audience. Use CRAFT when you want a Role-based framing with a clear Target persona.' },
    ],
  },
  {
    slug: 'craft',
    name: 'CRAFT',
    expansion: 'Context · Role · Action · Format · Target',
    tagline: 'Role-based framing with a clear target audience. Great for marketing, copywriting, and creative work.',
    complexity: 'Medium',
    fields: [
      { name: 'Context', description: 'Background the AI needs — what project, product, or situation this relates to.' },
      { name: 'Role', description: 'The persona the AI should adopt — e.g., expert copywriter, senior developer, UX researcher.' },
      { name: 'Action', description: 'The specific task — what you want the AI to do.' },
      { name: 'Format', description: 'How the output should be structured — e.g., numbered list, email, code block, table.' },
      { name: 'Target', description: 'The intended audience for the output. Defines vocabulary, depth, and angle.' },
    ],
    bestFor: [
      'Marketing copy and content creation',
      'Creative writing and storytelling',
      'Any task where a specific expert persona improves quality',
      'Writing targeted at a defined reader',
    ],
    notFor: [
      'Tasks requiring fine-grained tone/style separation (use CO-STAR)',
      'Sequential step-by-step processes (use RISEN)',
      'Tasks where few-shot examples are the key signal (use TRACE)',
    ],
    example: {
      scenario: 'Writing a LinkedIn post for a new AI product launch',
      prompt: 'Context: PromptQuorum is launching a multi-AI comparison tool. Role: You are a B2B SaaS marketing expert. Action: Write a LinkedIn post announcing the product. Format: 3 short paragraphs + 5 hashtags. Target: Startup founders and AI-curious professionals.',
    },
    related: ['co-star', 'rtf', 'google-prompt'],
    faq: [
      { q: 'What does CRAFT stand for?', a: 'CRAFT stands for Context, Role, Action, Format, and Target — five fields that combine role-based framing with a clear audience definition.' },
      { q: 'How is CRAFT different from CO-STAR?', a: 'CRAFT uses a Role field (giving the AI a persona) while CO-STAR splits style and tone separately. CRAFT is simpler; CO-STAR gives more voice control.' },
      { q: 'What is CRAFT best used for?', a: 'CRAFT excels at marketing copy and creative writing where assigning an expert persona and defining a target audience significantly improves output quality.' },
    ],
  },
  {
    slug: 'risen',
    name: 'RISEN',
    expansion: 'Role · Instructions · Steps · End Goal · Narrowing',
    tagline: 'Built for multi-step enterprise tasks. The Narrowing field keeps AI output on-track and within constraints.',
    complexity: 'High',
    fields: [
      { name: 'Role', description: 'The expert persona the AI should adopt for this task.' },
      { name: 'Instructions', description: 'Clear directives about how the AI should approach and execute the task.' },
      { name: 'Steps', description: 'The sequential steps the AI should follow, in order.' },
      { name: 'End Goal', description: 'The final deliverable or outcome you want to achieve.' },
      { name: 'Narrowing', description: 'Constraints, exclusions, and guardrails — what the AI should NOT do or include.' },
    ],
    bestFor: [
      'Enterprise workflows with sequential steps',
      'Complex processes requiring a specific order of operations',
      'Tasks where you need strict constraints on output',
      'Multi-stage research or analysis tasks',
    ],
    notFor: [
      'Simple one-answer questions (use APE or RTF)',
      'Tasks focused on tone and voice (use CO-STAR)',
      'Creative writing where constraints reduce quality',
    ],
    example: {
      scenario: 'Building a competitive analysis report',
      prompt: 'Role: Senior market analyst. Instructions: Analyze the multi-LLM tool market objectively. Steps: 1) List top 5 competitors, 2) Compare features, 3) Identify gaps. End Goal: A structured report with actionable insights. Narrowing: Do not include tools with fewer than 1000 users. Focus on tools launched after 2023.',
    },
    related: ['trace', 'specs', 'co-star'],
    faq: [
      { q: 'What does RISEN stand for?', a: 'RISEN stands for Role, Instructions, Steps, End Goal, and Narrowing — a framework designed for sequential, multi-step enterprise tasks.' },
      { q: 'What makes the Narrowing field useful?', a: 'The Narrowing field lets you define explicit constraints — what to exclude, avoid, or stay within. This prevents AI from going off-topic or including irrelevant content.' },
      { q: 'When should I use RISEN instead of SPECS?', a: 'Use RISEN when your task has a clear sequence of steps to follow. Use SPECS when you need to define complex technical requirements without a fixed step order.' },
    ],
  },
  {
    slug: 'trace',
    name: 'TRACE',
    expansion: 'Task · Request · Action · Context · Example',
    tagline: 'Show, don\'t tell. The Example field teaches the AI exactly what you want better than any description.',
    complexity: 'High',
    fields: [
      { name: 'Task', description: 'The broad category or type of task you are asking the AI to perform.' },
      { name: 'Request', description: 'The specific, precise request — what exactly you need.' },
      { name: 'Action', description: 'The concrete action the AI should take to fulfil the request.' },
      { name: 'Context', description: 'Relevant background, constraints, and situational information.' },
      { name: 'Example', description: 'A concrete example of what good output looks like. The most powerful field in TRACE.' },
    ],
    bestFor: [
      'Tasks where you have an example of the ideal output',
      'Few-shot prompting scenarios',
      'Replicating a writing style or format',
      'Generating structured data when you can show the schema',
    ],
    notFor: [
      'Tasks where no good example exists',
      'Creative tasks where examples constrain originality',
      'Simple factual questions (use APE)',
    ],
    example: {
      scenario: 'Generating structured product descriptions in a specific format',
      prompt: 'Task: Product description writing. Request: Write a product description for PromptQuorum. Action: Follow the exact structure in the example. Context: B2B SaaS tool, technical audience. Example: "Notion — The all-in-one workspace. Write, plan, collaborate, and get organized. Notion is everything you need — in one tool."',
    },
    related: ['risen', 'craft', 'specs'],
    faq: [
      { q: 'What does TRACE stand for?', a: 'TRACE stands for Task, Request, Action, Context, and Example — a few-shot framework where providing an example teaches the AI precisely what output you want.' },
      { q: 'Why is the Example field so powerful in TRACE?', a: 'Showing beats telling. A concrete example communicates format, tone, length, and style simultaneously — more efficiently than any written description.' },
      { q: 'How is TRACE different from RISEN?', a: 'TRACE uses examples to guide AI output; RISEN uses explicit sequential steps. Use TRACE when you can show what good looks like; use RISEN for ordered workflows.' },
    ],
  },
  {
    slug: 'ape',
    name: 'APE',
    expansion: 'Action · Purpose · Expectation',
    tagline: 'Three fields, high impact. The fastest framework — ideal for everyday prompts before graduating to more complex structures.',
    complexity: 'Low',
    fields: [
      { name: 'Action', description: 'What you want the AI to do — the verb of your request.' },
      { name: 'Purpose', description: 'Why you need it — the goal or use case behind the request.' },
      { name: 'Expectation', description: 'What a good response looks like — format, length, tone, or specific requirements.' },
    ],
    bestFor: [
      'Quick, everyday prompts',
      'First-pass drafts before refining with a more detailed framework',
      'Situations where time matters more than polish',
      'Users new to prompt engineering',
    ],
    notFor: [
      'Complex multi-step tasks (use RISEN)',
      'Tasks requiring precise voice control (use CO-STAR)',
      'Tasks where audience definition is critical (use CRAFT)',
    ],
    example: {
      scenario: 'Summarising a long document quickly',
      prompt: 'Action: Summarise the following meeting transcript. Purpose: I need a quick reference for what was decided. Expectation: 5 bullet points, each under 20 words, decisions only.',
    },
    related: ['rtf', 'craft', 'single-prompt-line'],
    faq: [
      { q: 'What does APE stand for?', a: 'APE stands for Action, Purpose, and Expectation — a minimal 3-field framework ideal for quick, everyday prompts.' },
      { q: 'When should I upgrade from APE to a more complex framework?', a: 'Upgrade when your output quality plateaus. If APE gives inconsistent results, switch to CRAFT or CO-STAR for more control over voice, format, and audience.' },
      { q: 'Is APE good for beginners?', a: 'Yes. APE is the best starting framework for beginners — it teaches the habit of structured prompting without overwhelming complexity.' },
    ],
  },
  {
    slug: 'specs',
    name: 'SPECS',
    expansion: 'Situation · Purpose · Expected Output · Context · Style',
    tagline: 'Detail-oriented and precise. The Expected Output field eliminates guesswork and is ideal for complex technical tasks.',
    complexity: 'High',
    fields: [
      { name: 'Situation', description: 'The current state or problem that needs to be addressed.' },
      { name: 'Purpose', description: 'Why this task matters — the business or personal goal behind it.' },
      { name: 'Expected Output', description: 'An exact description of what the output should contain, formatted as, and deliver.' },
      { name: 'Context', description: 'Constraints, background, relevant data, or domain-specific information.' },
      { name: 'Style', description: 'The voice, format, and presentation style for the output.' },
    ],
    bestFor: [
      'Complex technical analysis and research tasks',
      'Tasks with precise output requirements',
      'Scenarios where the AI needs extensive context',
      'Professional deliverables with defined specifications',
    ],
    notFor: [
      'Quick everyday tasks (use APE or RTF)',
      'Creative tasks where open-endedness is valuable',
      'Tasks with a natural step-by-step flow (use RISEN)',
    ],
    example: {
      scenario: 'Producing a technical specification document',
      prompt: 'Situation: We need an API integration between our CRM and email platform. Purpose: Automate lead nurturing workflows. Expected Output: A 500-word technical spec with endpoint list, auth method, and error handling requirements. Context: REST APIs, OAuth 2.0, 10k contacts. Style: Technical, structured with headers.',
    },
    related: ['risen', 'co-star', 'trace'],
    faq: [
      { q: 'What does SPECS stand for?', a: 'SPECS stands for Situation, Purpose, Expected Output, Context, and Style — a high-detail framework ideal for complex technical and professional tasks.' },
      { q: 'What makes the Expected Output field unique?', a: 'The Expected Output field forces you to define exactly what success looks like before you ask the AI, preventing vague or misaligned responses.' },
      { q: 'How is SPECS different from CO-STAR?', a: 'SPECS focuses on defining output requirements precisely; CO-STAR focuses on controlling voice, tone, and audience. Use SPECS for technical deliverables, CO-STAR for content.' },
    ],
  },
  {
    slug: 'rtf',
    name: 'RTF',
    expansion: 'Role · Task · Format',
    tagline: 'Minimum viable prompt structure. Three fields that cover the three most impactful variables in any prompt.',
    complexity: 'Low',
    fields: [
      { name: 'Role', description: 'The expert persona the AI should adopt — what specialist knowledge to draw on.' },
      { name: 'Task', description: 'Precisely what you want the AI to do.' },
      { name: 'Format', description: 'How the output should be structured and presented.' },
    ],
    bestFor: [
      'Professional tasks where a role matters',
      'When you want structured output without verbose setup',
      'Training and educational content generation',
      'When APE is too minimal but full frameworks are overkill',
    ],
    notFor: [
      'Tasks requiring audience definition (use CRAFT)',
      'Tasks needing tone/style separation (use CO-STAR)',
      'Complex multi-step workflows (use RISEN)',
    ],
    example: {
      scenario: 'Creating a training module on prompt engineering',
      prompt: 'Role: Instructional designer with 10 years of corporate training experience. Task: Create a 30-minute training module on prompt engineering fundamentals for non-technical employees. Format: Module outline with 5 sections, learning objectives, and a quiz at the end.',
    },
    related: ['ape', 'craft', 'co-star'],
    faq: [
      { q: 'What does RTF stand for?', a: 'RTF stands for Role, Task, and Format — a minimal three-field framework covering the three highest-impact variables in any prompt.' },
      { q: 'When should I use RTF instead of APE?', a: 'Use RTF when assigning an expert role improves output quality. Use APE when the task is simple enough that a role would add no value.' },
      { q: 'Is RTF good for generating training content?', a: 'Yes. RTF works especially well for training and educational content because the Role field sets expert authority and the Format field ensures consistent structure.' },
    ],
  },
  {
    slug: 'google-prompt',
    name: 'Google Prompt',
    expansion: 'Task · Context · Persona',
    tagline: 'Developed and recommended by Google. Optimised for Gemini and professional workplace tasks.',
    complexity: 'Low',
    fields: [
      { name: 'Task', description: 'What you want the AI to do — clear, specific, action-oriented.' },
      { name: 'Context', description: 'Relevant background, constraints, and situational information the AI needs.' },
      { name: 'Persona', description: 'The role or perspective the AI should adopt when responding.' },
    ],
    bestFor: [
      'Business and professional tasks',
      'Google Workspace workflows (Docs, Gmail, Slides)',
      'Users working primarily with Gemini',
      'Clean, professional output without over-engineering',
    ],
    notFor: [
      'Complex multi-step processes (use RISEN)',
      'Tasks requiring fine-grained style control (use CO-STAR)',
      'Creative tasks where open persona works better',
    ],
    example: {
      scenario: 'Drafting a professional meeting summary',
      prompt: 'Task: Summarise the key decisions and action items from this meeting transcript. Context: Weekly product team meeting, 8 attendees, 45 minutes. Three major decisions were made about the Q2 roadmap. Persona: Executive assistant to the CPO.',
    },
    related: ['rtf', 'craft', 'ape'],
    faq: [
      { q: 'Who created the Google Prompt framework?', a: 'The Google Prompt framework (Task, Context, Persona) was developed and recommended by Google as a structured approach for professional AI prompting, optimised for Gemini.' },
      { q: 'How is Google Prompt different from RTF?', a: 'Both are three-field frameworks. Google Prompt uses Task-Context-Persona; RTF uses Role-Task-Format. Google Prompt is context-first; RTF is format-first.' },
      { q: 'Is Google Prompt framework good for Gemini?', a: 'Yes. The framework was designed to work with Gemini and integrates well with Google Workspace tools like Docs, Gmail, and Slides.' },
    ],
  },
  {
    slug: 'single-prompt-line',
    name: 'Single Prompt Line',
    expansion: 'One clear, direct sentence',
    tagline: 'No framework fields — just a single well-crafted sentence. Faster to write, still effective for simple queries.',
    complexity: 'Low',
    fields: [
      { name: 'Prompt', description: 'One complete, specific sentence that contains your entire request. No separate fields — all context, action, and expectations in one line.' },
    ],
    bestFor: [
      'Quick factual lookups',
      'Brainstorming and idea generation',
      'Testing how a model responds before adding structure',
      'Conversational follow-up questions in a chat session',
    ],
    notFor: [
      'Complex deliverables requiring precise output format',
      'Tasks where tone, audience, or style need control',
      'Professional content where quality and consistency matter',
    ],
    example: {
      scenario: 'Quick research question',
      prompt: 'What are the three most commonly cited reasons why AI models hallucinate factual information?',
    },
    related: ['ape', 'rtf', 'craft'],
    faq: [
      { q: 'When is a single prompt line better than a structured framework?', a: 'When speed matters more than precision — quick lookups, brainstorming, or testing model responses before investing in full prompt engineering.' },
      { q: 'How do I write a good single prompt line?', a: 'Be specific, include your context inline, and state the output format in the same sentence. Vague single-line prompts produce vague results.' },
      { q: 'Should I always use a framework instead of a single prompt line?', a: 'No. Frameworks add structure overhead. For simple queries, a well-crafted single sentence often produces better results faster than filling out 5-6 fields.' },
    ],
  },
]

export const FRAMEWORK_SLUGS = FRAMEWORKS.map(f => f.slug)

export function getFramework(slug: string): Framework | undefined {
  return FRAMEWORKS.find(f => f.slug === slug)
}
