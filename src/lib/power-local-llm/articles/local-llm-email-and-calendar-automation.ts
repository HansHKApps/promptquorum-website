// Power Local LLM — Local LLM for Email and Calendar Automation (2026)
// Slug: local-llm-email-and-calendar-automation
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Local AI for Email and Calendar: Triage Without Sending Data to Google (2026)',
    seoTitle: 'Local AI Email and Calendar Triage 2026',
    intro:
      'Local LLMs can draft email replies, summarise inboxes, generate meeting agendas, and classify calendar events — all without sending your messages to a cloud API. This guide covers the practical architectures: local IMAP automation with Ollama, open-source email clients with local AI plugins, and the privacy case for keeping communication data on-device.',
    metaDescription:
      'How to automate email drafting, inbox summarisation, and calendar management with a local LLM. Ollama, IMAP integration, and privacy-first communication automation.',
    twitterDescription:
      'Local LLM email automation: draft replies, summarise inboxes, generate meeting agendas — all local, no cloud API. Setup guide for Ollama + IMAP workflows.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      'Professionals, small business owners, and privacy-conscious individuals who want to automate email drafting, inbox summarisation, and calendar management without sending communication data to cloud AI services.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM email automation',
    targetKeywords: [
      'local llm email automation',
      'ollama email drafting',
      'local ai inbox summarisation',
      'local llm calendar automation',
      'private ai email assistant',
      'imap local llm workflow',
    ],
    leadAnswerBlock:
      '**Local LLM email automation works best as a two-step pipeline: the email client or IMAP script fetches the raw message, strips headers, and passes the plain-text body to Ollama via its API; the model generates a draft reply or summary which you review before sending. No email content leaves your machine. The three most practical setups in 2026 are: (1) a Python IMAP script that calls Ollama on a schedule — 50 lines, fully automatable; (2) Thunderbird with the Ollama Compose plugin — GUI-based, no code; (3) n8n self-hosted with a local Ollama node — visual workflow builder for users who want conditional logic, multi-step filtering, and calendar integration without coding. For calendar automation, the same Ollama API call works against exported ICS files or the Google Calendar API with local credentials — generating meeting agendas, summarising the week, and drafting follow-up emails from event details.**',
    quickAnswerTop: {
      en: {
        question: 'How do I automate email drafting with a local LLM without sending my emails to the cloud?',
        answer:
          'The fastest local email automation setup is a Python IMAP script that fetches unread emails, strips headers, passes the plain-text body to Ollama\'s local API, and saves the draft reply to a local file or Drafts folder. Under 50 lines of Python. No email data leaves your machine. For a GUI alternative, Thunderbird with the Ollama Compose extension lets you right-click any email and generate a reply without leaving the email client. For workflow automation, n8n self-hosted with a local Ollama node handles conditional logic, multi-step filtering, and calendar event integration without cloud dependencies.',
        bullets: [
          'IMAP + Python + Ollama: 50-line script, runs on a schedule, saves drafts locally — the simplest setup.',
          'Thunderbird + Ollama Compose plugin: GUI-based, no code, right-click to generate reply in the email client.',
          'n8n self-hosted + Ollama node: visual workflow builder for conditional logic, filtering, and calendar integration.',
          'Calendar automation: export ICS file or use Google Calendar API locally to generate meeting agendas and follow-up drafts.',
          'Best model for email: Qwen3 14B or Phi-4 Mini — fast generation, low VRAM, adequate quality for business correspondence.',
          'Privacy: IMAP credentials and email content never leave your machine; no cloud API calls in any of these setups.',
          'Review-before-send is mandatory: local models make factual errors and tone mismatches; treat all output as a first draft.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Why Use a Local LLM for Email?', anchor: '#why-local' },
      { label: 'Approach Comparison', anchor: '#approach-comparison' },
      { label: 'Setup 1: IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: 'Setup 2: Thunderbird + Ollama Plugin', anchor: '#thunderbird' },
      { label: 'Setup 3: n8n Self-Hosted + Ollama', anchor: '#n8n' },
      { label: 'Triage and Weekly Review Prompt Templates', anchor: '#triage-prompts' },
      { label: 'Calendar Automation', anchor: '#calendar' },
      { label: 'Model Recommendations', anchor: '#models' },
      { label: 'Privacy and Security', anchor: '#privacy' },
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
          '**Three setups cover 95% of local email automation use cases.** IMAP + Python + Ollama (50 lines, fully scriptable), Thunderbird + Ollama Compose (GUI, no code), n8n self-hosted + Ollama node (visual workflow, conditional logic). Pick the simplest one that fits your workflow.',
          '**Smaller models are better for email than for creative work.** Email drafting requires coherence, not creativity. Qwen3 14B and Phi-4 Mini generate business-quality draft replies in 2–5 seconds on a 16 GB system. Llama 3.3 70B is overkill for most email tasks.',
          '**Review-before-send is not optional.** Local models make tone errors (too formal, too casual), factual mistakes (wrong meeting time, wrong recipient name), and occasionally confabulate content from unrelated context. Always read the draft before sending.',
          '**No email content leaves your machine in any of these setups.** IMAP connections go to your mail server, not to a cloud AI. The Ollama API is local. n8n self-hosted runs on your machine. The privacy advantage is genuine.',
          '**Calendar automation works best with exported ICS or a local Google Calendar API call.** Export the week\'s events to an ICS file, pass it to Ollama, and ask it to generate a meeting agenda, a prep checklist, or a week-summary email to your team.',
          '**IMAP credentials are sensitive.** Store them in environment variables or a local secrets manager, never in the script source. Rotate email-specific app passwords rather than using your primary account password.',
          '**n8n self-hosted is the right pick for conditional logic.** If you want "summarise all emails from [domain] daily" or "generate a follow-up email when a calendar event ends", n8n\'s visual workflow builder handles this without custom Python.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Setups covered:** IMAP + Python + Ollama, Thunderbird + Ollama Compose, n8n self-hosted + Ollama node.',
          '**Best model for email:** Qwen3 14B (fast, low VRAM, adequate business quality) or Phi-4 Mini (fastest, 4 GB VRAM).',
          '**VRAM required:** Qwen3 14B at Q4 = ~9 GB; Phi-4 Mini at Q4 = ~3 GB; Llama 3.3 70B at Q4 = ~42 GB.',
          '**Email formats supported:** plain-text IMAP (MIME decoded), EML files, Gmail API (local credentials), Outlook via IMAP.',
          '**Calendar formats:** ICS export (universal), Google Calendar API (local OAuth), Nextcloud Calendar (CalDAV).',
          '**Script complexity:** IMAP + Python = ~50 lines; n8n workflow = visual, no code; Thunderbird = plugin install only.',
          '**Privacy:** no email data sent to any cloud API in any setup; IMAP connects to your mail server only.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Why Use a Local LLM for Email Automation?',
        content:
          '**The core reason is privacy: every email you paste into a cloud AI assistant is potentially logged, used for training, and subject to that provider\'s data retention policy.** Business correspondence, client communications, and personal email contain information you do not want in a third-party training dataset. A local LLM processes your emails on your hardware, returns a draft, and retains nothing.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local LLM email automation keeps all email content on your machine — no cloud API receives your messages, no third party logs or trains on your correspondence, and the draft generation works without an internet connection.',
          },
          {
            type: 'plain-terms',
            text: 'When you paste an email into ChatGPT or Claude.ai to ask for a draft reply, that email is processed on OpenAI\'s or Anthropic\'s servers. For most people, most of the time, this is acceptable. For business correspondence, client details, contract discussions, or any communication that includes sensitive information, it is not. A local LLM set up through Ollama processes the same email on your computer and never sends it anywhere.',
          },
        ],
        items: [
          '**Data sovereignty:** email content, sender information, and thread context stay on your machine. No cloud retention policy applies.',
          '**Offline operation:** once Ollama is running and the model is downloaded, email drafting works without internet access.',
          '**No usage limits:** cloud AI APIs enforce rate limits and token caps. A local setup has no per-request cost and no daily limit.',
          '**Regulatory compliance:** GDPR, HIPAA, and professional privilege requirements may prohibit sending client communications to a third-party AI. Local processing eliminates this concern.',
          '**Speed for short tasks:** a small model (Qwen3 14B, Phi-4 Mini) generates a business email draft in 2–5 seconds on consumer hardware — faster than most cloud round-trips for short prompts.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Local email automation is not a replacement for an email client — it is a drafting assistant that slots into your existing workflow. You still use Thunderbird, Apple Mail, or Gmail to send; the local LLM generates text that you review, edit, and send from your existing client.',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: 'Approach Comparison',
        content:
          '**The three setups differ on five axes that matter to most users: setup difficulty, 30-day reliability, privacy posture, and the user profile each one suits.** Pick the simplest option that covers your workflow rather than the most powerful.',
        columns: ['Approach', 'Setup', 'Reliability (30d)', 'Privacy', 'Best for'],
        rows: [
          { 'Approach': 'Thunderbird + Ollama Compose', 'Setup': 'Easy', 'Reliability (30d)': 'High (no background process)', 'Privacy': 'Local-only', 'Best for': 'Solo professionals, daily triage, GUI users' },
          { 'Approach': 'Python + IMAP + cron', 'Setup': 'Hard (50 LOC + scheduling)', 'Reliability (30d)': 'Very high (scriptable, observable)', 'Privacy': 'Local-only', 'Best for': 'Developers wanting full control + custom logic' },
          { 'Approach': 'n8n self-hosted + Ollama', 'Setup': 'Medium (visual workflow editor)', 'Reliability (30d)': 'High (with self-host monitoring)', 'Privacy': 'Local-only with self-host', 'Best for': 'Workflow-heavy users replacing Zapier; conditional logic' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: 'Setup 1: IMAP + Python + Ollama',
        content:
          '**The most scriptable setup: a Python script fetches unread emails via IMAP, strips headers and HTML, passes the plain-text body to Ollama\'s local API, and saves the draft reply.** Runs on a schedule with cron or Task Scheduler. Fifty lines of Python, no external dependencies beyond the Ollama Python client.',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'IMAP + Python + Ollama local email draft pipeline: 4 steps from fetching an unread email to saving the draft, using Qwen3 14B (9 GB VRAM) via Ollama\'s local API — no cloud API calls.',
        promptExamples: [
          {
            label: 'IMAP Email Fetch + Ollama Draft (Python skeleton)',
            text: 'import imaplib, email, os\nimport ollama\n\n# Connect to IMAP\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# Fetch unread emails\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # Generate draft with Ollama\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "You are a professional email assistant. Write concise, polite business replies. Match the formality of the incoming email."},\n        {"role": "user", "content": f"Email from: {sender}\\nSubject: {subject}\\n\\nBody:\\n{body[:2000]}\\n\\nWrite a draft reply."}\n    ])\n    draft = response["message"]["content"]\n    print(f"DRAFT for: {subject}\\n{draft}\\n---")',
          },
        ],
        items: [
          '**IMAP credentials:** store in environment variables (`IMAP_HOST`, `IMAP_USER`, `IMAP_PASS`) — never in source code. Use an app-specific password rather than your primary account password.',
          '**Body truncation:** limit the email body to 2,000–3,000 characters before passing to Ollama. Long email threads rarely add useful context for a reply draft and slow generation.',
          '**HTML stripping:** if the email body is HTML, use `html.parser` or `BeautifulSoup` to extract plain text before passing to the model. HTML tags degrade generation quality.',
          '**Scheduling:** on macOS/Linux, add a cron entry (`crontab -e`) to run the script every 30 minutes. On Windows, use Task Scheduler with a Python interpreter path.',
          '**Draft storage:** write drafts to a local text file per email (named by timestamp + subject slug) or push to a "Drafts" IMAP folder using `mail.append()`. Reading text files is safer for review; IMAP Drafts lets you send from any client.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not enable auto-send. No local LLM produces email drafts reliable enough to send without human review. Tone errors, wrong dates, confabulated facts, and reply-to-wrong-thread mistakes all occur regularly. The automation saves you drafting time; the review step is mandatory.',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: 'Setup 2: Thunderbird + Ollama Compose Plugin',
        content:
          '**Thunderbird with the Ollama Compose extension is the no-code option.** Install Thunderbird, install Ollama, pull a model, install the extension — email generation is a right-click away in the compose window.',
        items: [
          '**Install Thunderbird** from thunderbird.net. Available for macOS, Windows, and Linux.',
          '**Install Ollama and pull a model:** `ollama pull qwen3:14b` (recommended for email work). Start `ollama serve`.',
          '**Install the Ollama Compose extension** from the Thunderbird Add-ons Manager. Search "Ollama" or install from the extension XPI file from the project repository.',
          '**Configure the extension** to point at `http://localhost:11434` and select your model (Qwen3 14B or Phi-4 Mini recommended).',
          '**In the compose window:** right-click in the body area and select "Generate with Ollama" — the extension sends the quoted original email and your cursor position to Ollama and inserts the draft reply.',
          '**Model switching:** the extension lets you switch models from the compose toolbar. Use Phi-4 Mini for quick replies; switch to Qwen3 14B or Llama 3.3 70B for complex or sensitive correspondence.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Set a custom system prompt in the Ollama Compose settings. The default prompt is generic; a customised one produces better results. Example: "You write professional email replies for [Your Name], a [Your Role] at [Company]. Replies are concise (under 150 words unless the context requires more), professionally warm, and match the formality of the incoming email. Never add disclaimers or signature lines."',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: 'Setup 3: n8n Self-Hosted + Ollama Node',
        content:
          '**n8n self-hosted with a local Ollama node is the right choice for conditional automation: filter emails by sender domain, summarise daily, generate follow-ups when calendar events end, or route different email types to different model prompts — all without writing code.**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: 'n8n self-hosted workflow for email and calendar automation: an IMAP trigger and domain filter route emails to a local Ollama node, while a parallel calendar branch turns ICS or Google Calendar events into meeting agendas — one Ollama instance, no cloud API.',
        items: [
          '**Install n8n self-hosted:** `npm install -g n8n && n8n start` or `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`. The workflow editor runs at `http://localhost:5678`.',
          '**Add Ollama node:** in the n8n workflow editor, search for the "Ollama" node (built-in as of n8n v1.2+). Point it at `http://localhost:11434` and select your model.',
          '**IMAP trigger:** add an IMAP Email node as the workflow trigger — configure with your IMAP credentials. The node polls for new emails and passes each as a JSON object to the next step.',
          '**Filter logic:** add an IF node to route emails by sender domain, subject keywords, or time of day. Route to different Ollama prompts based on email type (client emails, newsletter digests, internal team messages).',
          '**Calendar integration:** add a Google Calendar node (using local OAuth credentials) or an ICS file reader to pull upcoming events. Pass event details to the Ollama node to generate a meeting agenda or prep checklist.',
          '**Output options:** write drafts to a local file, push to IMAP Drafts, send via Slack message to yourself, or save to a Notion/Obsidian page — all via n8n output nodes.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'n8n self-hosted is the best integration point for calendar + email workflows. The typical pattern: IMAP trigger receives a meeting confirmation email → extract meeting details → call Google Calendar API (local OAuth) to fetch attendees → pass all context to Ollama → generate a meeting agenda → save to a designated folder. This takes about 20 minutes to wire in the n8n visual editor.',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: 'Triage and Weekly Review Prompt Templates',
        content:
          '**Two prompts that handle the highest-frequency email tasks: per-email triage classification and a weekly inbox review.** Drop them into any of the three setups (Python script, Thunderbird system prompt, or n8n Ollama node body) — they are deliberately model-agnostic.',
        promptExamples: [
          {
            label: 'Triage Prompt Template',
            text: 'You are an email triage assistant. Given the following email, classify it into one of these categories and explain in one sentence:\n- URGENT: requires reply within 4 hours\n- IMPORTANT: requires reply within 24 hours\n- INFO: read for awareness, no reply needed\n- PROMOTIONAL: marketing or newsletter, can be archived\n- SPAM: unwanted, recommend filtering\n\nEmail:\nFrom: {sender}\nSubject: {subject}\nBody: {body[:1500]}\n\nOutput format:\nCategory: [URGENT|IMPORTANT|INFO|PROMOTIONAL|SPAM]\nReasoning: [one sentence]\nSuggested action: [reply | archive | flag | delete]',
          },
          {
            label: 'Weekly Review Prompt Template',
            text: 'Summarise the following 50 emails from the past week into 3 sections:\n1. URGENT or IMPORTANT items still needing action (with sender + 1-line summary)\n2. Themes (e.g., "Q4 planning came up in 12 emails this week")\n3. People I owe replies to (sender + days outstanding)\n\nEmails (subject + first 200 chars of each body):\n[paste batched email list]\n\nOutput format: 3 markdown sections.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For the Triage prompt, pair it with the n8n IF node to route by category: URGENT → push notification, IMPORTANT → save to "needs-reply" folder, PROMOTIONAL → auto-archive, SPAM → flag for filter rule. The classification is what makes downstream automation safe — without it, the pipeline cannot distinguish a client follow-up from a marketing email.',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: 'Calendar Automation with Local LLMs',
        content:
          '**Calendar automation with a local LLM works in two modes: passive (export ICS, pass to Ollama for summarisation or agenda generation) and active (Google Calendar API with local OAuth credentials for real-time event access).** Passive mode is simpler; active mode enables scheduled workflows.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local LLM calendar automation generates meeting agendas, week summaries, and follow-up email drafts by passing exported ICS file content or Google Calendar API data to Ollama — no calendar data touches a cloud AI.',
          },
          {
            type: 'plain-terms',
            text: 'The simplest calendar automation: export your week\'s events as an ICS file from any calendar app (Google Calendar, Apple Calendar, Nextcloud), open a terminal, pass the ICS content to Ollama with a "generate a meeting agenda for each event" prompt, and copy the output into your notes. Takes 30 seconds and keeps your calendar data local.',
          },
        ],
        promptExamples: [
          {
            label: 'ICS-to-Agenda Prompt Template',
            text: 'Here is my calendar for the week in ICS format:\n\n[paste ICS content]\n\nFor each meeting event:\n1. Generate a 5-point meeting agenda based on the event title and description.\n2. If attendees are listed, note who should lead each agenda item.\n3. If the event has no description, generate a generic agenda appropriate for a [meeting type] meeting.\n\nFormat as plain text. One section per event, separated by ---.',
          },
        ],
        items: [
          '**ICS export (passive):** Google Calendar, Apple Calendar, Nextcloud, and Outlook all export ICS files. Export weekly or daily, pass to Ollama via the terminal or a script, generate agendas or summaries.',
          '**Google Calendar API (active):** create a local OAuth credential in Google Cloud Console (personal project), download the credentials JSON, and use the `google-auth-oauthlib` Python library to fetch events. The OAuth token is stored locally and the API calls go directly to Google Calendar — no AI intermediary.',
          '**Meeting agenda generation prompt:** title + attendees + description → "Generate a 5-item meeting agenda with time allocations. If the meeting description is empty, suggest a generic agenda for a [meeting type] meeting."',
          '**Week summary prompt:** all events for the week → "Summarise the week\'s meetings in 3 sentences. Highlight any back-to-back blocks or unusually long meetings."',
          '**Follow-up email draft:** after a meeting (triggered by event end time) → "Write a follow-up email for the meeting \'[title]\' that thanks attendees and summarises the next steps. Use this event description for context: [description]."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Keep your calendar data in plaintext where possible. ICS is plain text; it is easy to pass to Ollama directly. If you use a proprietary calendar format or a locked-down enterprise system, export to ICS first. The ICS standard is universal and supported by every major calendar application.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Model Recommendations for Email and Calendar Tasks',
        content:
          '**Email and calendar automation tasks favour small, fast models over large, capable ones.** Drafting a business email reply, generating a meeting agenda, or summarising an inbox does not require Llama 3.3 70B — it requires a model that is fast enough to feel interactive and coherent enough to produce usable business text. For the broader model landscape across all use cases, see [Best Local LLMs in 2026](/local-llms/best-local-llms-2026).',
        columns: ['Task', 'Recommended Model', 'VRAM (Q4)', 'Why'],
        rows: [
          { 'Task': 'Email reply drafting', 'Recommended Model': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Why': 'Best balance of business-writing quality and generation speed; handles formal and casual registers' },
          { 'Task': 'Quick one-line replies', 'Recommended Model': 'Phi-4 Mini', 'VRAM (Q4)': '~3 GB', 'Why': 'Fastest option; adequate for simple acknowledgements and scheduling replies' },
          { 'Task': 'Meeting agenda generation', 'Recommended Model': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Why': 'Good at structured list generation; agenda format is well within its capabilities' },
          { 'Task': 'Long email thread summarisation', 'Recommended Model': 'Llama 3.3 70B or Qwen3 32B', 'VRAM (Q4)': '~42 GB / ~20 GB', 'Why': 'Long context adherence matters for multi-message threads; smaller models miss details' },
          { 'Task': 'Sensitive / legal correspondence', 'Recommended Model': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Why': 'Best reasoning quality; worth the hardware cost when errors are high-stakes' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For most email tasks on a 16 GB system, Qwen3 14B is the right default. Pull it once with `ollama pull qwen3:14b` and use it for all email and calendar automation. Only switch to a larger model when you encounter a task type where the 14B output quality is consistently inadequate.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Security',
        content:
          '**The privacy advantage of local email automation is real, but it requires correct setup.** Three things can undermine it: accidental cloud sync of IMAP credentials, email content in logs accessible to third-party tools, and misconfigured n8n instances that expose the workflow to the network. For the broader "replace SaaS with local AI" pattern across other tools, see [Replace Grammarly and Notion AI With Local Models](/power-local-llm/replace-grammarly-notion-ai-with-local).',
        items: [
          '**IMAP credentials:** store in environment variables or a local secrets manager (macOS Keychain, Linux `secret-tool`, Windows Credential Manager). Never store in script source code or a file that might be synced to a cloud repository.',
          '**Email content in logs:** Python scripts that print email content to stdout/stderr will write email data to log files if run via cron with logging enabled. Redirect logs to `/dev/null` or use a log level that excludes email content.',
          '**n8n network exposure:** n8n self-hosted binds to `localhost:5678` by default, which is local-only. If you expose it to your home network or beyond (e.g., for mobile access), add authentication and ensure the Ollama API is also restricted to localhost.',
          '**App passwords:** configure a dedicated app-specific password for IMAP access in Gmail, Outlook, and Apple Mail rather than using your primary account password. Revoke it immediately if the script is compromised.',
          '**Git repositories:** if you version-control your automation scripts, add a `.gitignore` that excludes any `.env` file containing credentials. Never commit credentials to a public or private repository.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Cloud sync risk. If your home directory is synced to iCloud, Google Drive, or OneDrive, any `.env` file or credentials file in a synced directory will be uploaded to the cloud. Store credentials in a directory explicitly excluded from cloud sync, or use your operating system\'s native secrets manager.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Auto-sending drafts without review.** No local model produces reliable-enough output to send without human review. Tone errors, wrong dates, and confabulated facts are common. Always read before sending.',
          '**Passing entire email threads to the model.** Long threads contain redundant context that wastes tokens and slows generation. Strip quoted reply blocks and pass only the most recent 2–3 messages.',
          '**Using Llama 3.3 70B for all email tasks.** For most email drafting, Qwen3 14B is faster and uses less VRAM. Reserve the 70B for genuinely complex or high-stakes correspondence.',
          '**Storing IMAP credentials in the script.** Credentials in source code are one `git push` away from being public. Use environment variables.',
          '**Not setting a word ceiling on draft prompts.** Without a word ceiling, models pad business replies with unnecessary context, caveats, and pleasantries. Add "Reply in under 150 words" to every email prompt.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Qwen3 14B model card — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Phi-4 Mini technical report — [Microsoft Research](https://microsoft.com/research)',
          'Ollama API documentation — [Ollama](https://ollama.com/docs)',
          'n8n self-hosted documentation — [n8n.io](https://docs.n8n.io)',
          'GDPR Article 28 — processor data processing obligations — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does this work with Gmail?',
            a: 'Yes. Gmail supports IMAP access with an app-specific password. Enable IMAP in Gmail settings, generate an app password in your Google Account security settings, and use those credentials in the IMAP script. Gmail also exposes the Gmail API for more structured access — useful for n8n workflows that need label management, thread operations, or attachment handling.',
          },
          {
            q: 'Which is better for email automation: IMAP + Python or n8n?',
            a: 'IMAP + Python is better if you are comfortable writing and maintaining a script and want full control. n8n is better if you want conditional logic (route emails by sender, time, or content), calendar integration, or multiple output destinations without writing code. Both use Ollama as the local model backend; the difference is the orchestration layer around it.',
          },
          {
            q: 'Can a local LLM summarise an entire email inbox?',
            a: 'Yes, with caveats. A weekly inbox summary (50–100 emails) works well: fetch subjects and first 200 characters of each body, concatenate, pass to Qwen3 14B with a "summarise by theme and urgency" prompt. For a full inbox of thousands of emails, batch the summarisation (50 emails per API call) and aggregate the batch summaries. Passing 1,000 emails in one call exceeds context limits and produces unreliable output.',
          },
          {
            q: 'What is the best local LLM for drafting formal business emails?',
            a: 'Qwen3 14B produces the best quality-to-speed ratio for formal business correspondence on consumer hardware. It handles formal register, appropriate hedging, and professional closings reliably. For very high-stakes correspondence (legal notices, executive communications, contract negotiations), use Llama 3.3 70B — the quality difference is visible for complex or sensitive topics.',
          },
          {
            q: 'Can I use this on Windows?',
            a: 'Yes. Ollama runs on Windows (download from ollama.com). The IMAP Python script runs on any Python 3.8+ installation on Windows. Thunderbird and the Ollama Compose extension are cross-platform. n8n self-hosted runs on Windows via npm or Docker Desktop.',
          },
          {
            q: 'How do I handle email threads with multiple previous replies?',
            a: 'Strip quoted content before passing to the model. Use Python\'s `email` library to extract only the latest reply (the portion above the first `>` prefix or `--- Original Message ---` divider). Pass only the last 2–3 messages with a 3,000-character total limit. The model rarely needs the full thread history to generate an appropriate reply.',
          },
          {
            q: 'Is this GDPR-compliant for business use?',
            a: 'Local processing is more defensible under GDPR than cloud AI processing for personal data. When data stays on your machine, you do not create a new data processor relationship (Article 28). However, GDPR compliance depends on your specific role, the nature of the data, and your organisation\'s existing data protection policies. Consult your data protection officer before using this setup to process personal data of clients or employees.',
          },
          {
            q: 'Can I use this to reply on behalf of someone else?',
            a: 'Technically yes — the script can be configured to access any IMAP account you have credentials for. Legally and ethically, generating email replies on behalf of another person without their knowledge raises significant consent and impersonation issues. Use this automation only for accounts and correspondence you are personally responsible for.',
          },
          {
            q: 'Can I trigger AI on incoming emails?',
            a: 'Yes, via three patterns. (1) Python + IMAP + cron: schedule the script to run every 30 min, fetch new unread emails, generate drafts. (2) n8n IMAP trigger node: polls every 1–5 min, triggers the workflow on each new email immediately. (3) Thunderbird filter rules: use a "Run a script" filter action that calls Ollama via curl. The n8n approach is most reliable for real-time triage; cron is simpler if 30-min latency is acceptable.',
          },
          {
            q: 'Can I sync email AI across devices?',
            a: 'The drafts can sync via your existing IMAP Drafts folder — write the AI-generated draft to the IMAP "Drafts" folder using `mail.append()`, and any device with IMAP access (phone, tablet, second laptop) sees it instantly. The Ollama backend itself does not sync — it runs on whichever machine you set up. Mobile devices need network access to the home machine running Ollama (LAN IP or Tailscale). Plan: home server runs Ollama + automation; all devices read drafts from IMAP Drafts folder. Single AI generation, multi-device review and send.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Replace Zapier with Local AI Agents](/power-local-llm/replace-zapier-with-local-ai-agents) — local workflow automation using n8n, Ollama, and Python for business process automation.',
          '[Local AI Agents for Business Workflows: EU Compliance](/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — GDPR, EU AI Act, and DACH compliance context for deploying local AI in business settings.',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data) — how to set up document Q&A over private business data without cloud APIs.',
          '[Local AI Agents with MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — MCP (Model Context Protocol) for connecting local LLMs to email clients, calendars, and other tools as agent contexts.',
          '[Autonomous Local Agents: What Actually Works](/power-local-llm/autonomous-local-agents-actually-work) — honest assessment of what local AI agents can and cannot do in 2026.',
          '[Replace Grammarly and Notion AI With Local Models](/power-local-llm/replace-grammarly-notion-ai-with-local) — adjacent SaaS-replacement pattern for writing tools, complementing the email/calendar replacement here.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — broader model authority for picking the chat model behind any of these three setups.',
          '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) — when to include example emails in the prompt and when to withhold them for better generalisation.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — directory listings for Ollama, n8n, Thunderbird, and other components in this stack.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Lokale KI für E-Mail und Kalender: Automatisierung ohne Cloud-API (2026)',
    seoTitle: 'Lokale KI-Automatisierung für E-Mail und Kalender 2026',
    intro:
      'Lokale LLMs können E-Mail-Antworten entwerfen, Posteingänge zusammenfassen, Besprechungsagenden generieren und Kalenderereignisse klassifizieren — alles ohne Ihre Nachrichten an eine Cloud-API zu senden. Dieser Leitfaden behandelt die praktischen Architekturen: lokale IMAP-Automatisierung mit Ollama, Open-Source-E-Mail-Clients mit lokalen KI-Plugins und die Sicherheitsgrundlagen für die lokale Speicherung von Kommunikationsdaten.',
    metaDescription:
      'Lokale LLM-E-Mail- und Kalender-Automatisierung 2026: private KI für Posteingang und Termine. Ohne Cloud, ohne Datenweitergabe. Workflows mit lokalen Modellen.',
    twitterDescription:
      'Lokale LLM-E-Mail-Automatisierung: Antworten entwerfen, Posteingänge zusammenfassen, Besprechungsagenden generieren — alles lokal, keine Cloud-API. Setup-Anleitung für Ollama + IMAP-Workflows.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      'Fachleute, Kleinunternehmer und datenschutzbewusste Einzelpersonen, die E-Mail-Entwürfe automatisieren, Posteingänge zusammenfassen und Kalender verwalten möchten, ohne Kommunikationsdaten an Cloud-KI-Dienste zu senden.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale LLM E-Mail-Automatisierung',
    targetKeywords: [
      'lokale llm e-mail automatisierung',
      'ollama e-mail entwurf',
      'lokale ki posteingang zusammenfassung',
      'lokale llm kalender automatisierung',
      'private ki e-mail assistent',
      'imap lokale llm workflow',
    ],
    leadAnswerBlock:
      '**Lokale LLM-E-Mail-Automatisierung funktioniert am besten als zweistufige Pipeline: Der E-Mail-Client oder IMAP-Script ruft die rohe Nachricht ab, entfernt Header und übergibt den reinen Text an Ollama über dessen API; das Modell generiert einen Antwortentwurf, den Sie vor dem Versand überprüfen. Keine E-Mail-Inhalte verlassen Ihren Computer. Die drei praktischsten Setups in 2026 sind: (1) ein Python-IMAP-Script, das Ollama nach einem Zeitplan aufruft — 50 Zeilen, vollständig automatisierbar; (2) Thunderbird mit dem Ollama-Compose-Plugin — GUI-basiert, kein Code erforderlich; (3) n8n selbst gehostet mit einem lokalen Ollama-Knoten — visueller Workflow-Builder für Benutzer, die bedingte Logik, mehrstufige Filterung und Kalenderintegration ohne Programmierung wünschen. Für die Kalenderautomation funktioniert derselbe Ollama-API-Aufruf gegen exportierte ICS-Dateien oder die Google Calendar API mit lokalen Anmeldedaten — Generierung von Besprechungsagenden, Zusammenfassung der Woche und Entwurf von Folge-E-Mails aus Ereignisdetails.**',
    quickAnswerTop: {
      de: {
        question: 'Wie automatisiere ich E-Mail-Entwürfe mit einer lokalen KI, ohne meine E-Mails in die Cloud zu senden?',
        answer:
          'Das schnellste lokale E-Mail-Automatisierungs-Setup ist ein Python-IMAP-Script, das ungelesene E-Mails abruft, Header entfernt, den reinen Text an die lokale API von Ollama übergibt und den Antwortentwurf in einer lokalen Datei oder im Entwürfe-Ordner speichert. Unter 50 Zeilen Python. Keine E-Mail-Daten verlassen Ihren Computer. Als GUI-Alternative ermöglicht Thunderbird mit der Ollama-Compose-Erweiterung, dass Sie mit der rechten Maustaste auf eine E-Mail klicken und eine Antwort generieren, ohne den E-Mail-Client zu verlassen. Für die Workflow-Automatisierung verwaltet n8n selbst gehostet mit einem lokalen Ollama-Knoten bedingte Logik, mehrstufige Filterung und Kalenderintegration ohne Cloud-Abhängigkeiten.',
        bullets: [
          'IMAP + Python + Ollama: 50-Zeilen-Script, läuft nach Zeitplan, speichert Entwürfe lokal — das einfachste Setup.',
          'Thunderbird + Ollama-Compose-Plugin: GUI-basiert, kein Code erforderlich, mit der rechten Maustaste im E-Mail-Client auf Antwort generieren klicken.',
          'n8n selbst gehostet + Ollama-Knoten: visueller Workflow-Builder für bedingte Logik, Filterung und Kalenderintegration.',
          'Kalenderautomation: Exportieren Sie die ICS-Datei oder verwenden Sie lokal die Google Calendar API, um Besprechungsagenden und Folge-Entwürfe zu generieren.',
          'Bestes Modell für E-Mail: Qwen3 14B oder Phi-4 Mini — schnelle Generierung, geringer VRAM-Bedarf, ausreichende Qualität für geschäftliche Kommunikation.',
          'Datenschutz: IMAP-Anmeldedaten und E-Mail-Inhalte verlassen Ihren Computer nie; keine Cloud-API-Aufrufe in einem dieser Setups.',
          'Überprüfung vor dem Versand ist erforderlich: Lokale Modelle machen Fehler bei Fakten und Ton; behandeln Sie alle Ausgaben als ersten Entwurf.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Schnelle Fakten', anchor: '#quick-facts' },
      { label: 'Warum eine lokale KI für E-Mail nutzen?', anchor: '#why-local' },
      { label: 'Vergleich der Ansätze', anchor: '#approach-comparison' },
      { label: 'Setup 1: IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: 'Setup 2: Thunderbird + Ollama-Plugin', anchor: '#thunderbird' },
      { label: 'Setup 3: n8n Self-Hosted + Ollama', anchor: '#n8n' },
      { label: 'Triage- und Überblicks-Prompt-Templates', anchor: '#triage-prompts' },
      { label: 'Kalenderautomation', anchor: '#calendar' },
      { label: 'Modellempfehlungen', anchor: '#models' },
      { label: 'Datenschutz und Sicherheit', anchor: '#privacy' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Im DACH-Kontext', anchor: '#dach-context' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Drei Setups decken 95 % der lokalen E-Mail-Automatisierungsanwendungsfälle ab.** IMAP + Python + Ollama (50 Zeilen, vollständig skriptierbar), Thunderbird + Ollama-Compose (GUI, kein Code), n8n selbst gehostet + Ollama-Knoten (visueller Workflow, bedingte Logik). Wählen Sie die einfachste Option, die zu Ihrem Workflow passt.',
          '**Kleinere Modelle sind besser für E-Mail als für kreative Aufgaben.** E-Mail-Entwürfe erfordern Kohärenz, nicht Kreativität. Qwen3 14B und Phi-4 Mini generieren geschäftsgeeignete Antwortentwürfe in 2–5 Sekunden auf einem System mit 16 GB. Llama 3.3 70B ist für die meisten E-Mail-Aufgaben zu groß.',
          '**Überprüfung vor dem Versand ist nicht optional.** Lokale Modelle machen Fehler beim Ton (zu formell, zu locker), sachliche Fehler (falsche Uhrzeit, falscher Empfängername) und erfinden gelegentlich Inhalte aus unzusammenhängendem Kontext. Lesen Sie den Entwurf immer vor dem Versand durch.',
          '**Keine E-Mail-Inhalte verlassen Ihren Computer in einem dieser Setups.** IMAP-Verbindungen gehen zu Ihrem E-Mail-Server, nicht zu einer Cloud-KI. Die Ollama-API ist lokal. n8n selbst gehostet läuft auf Ihrem Computer. Der Datenschutzvorteil ist real.',
          '**Kalenderautomation funktioniert am besten mit exportierten ICS-Dateien oder einem lokalen Google Calendar API-Aufruf.** Exportieren Sie die Wochenereignisse in eine ICS-Datei, übergeben Sie sie an Ollama und bitten Sie, eine Besprechungsagenda, eine Vorbereitungscheckliste oder eine Wochenübersicht-E-Mail an Ihr Team zu generieren.',
          '**IMAP-Anmeldedaten sind empfindlich.** Speichern Sie sie in Umgebungsvariablen oder einem lokalen Secrets Manager, niemals im Script-Quellcode. Verwenden Sie app-spezifische Passwörter statt Ihres primären Kontokennworts.',
          '**n8n selbst gehostet ist die richtige Wahl für bedingte Logik.** Wenn Sie "alle E-Mails von [Domain] täglich zusammenfassen" oder "eine Folge-E-Mail generieren, wenn ein Kalenderereignis endet" möchten, verwaltet der visuelle Workflow-Builder von n8n dies ohne benutzerdefinierten Python-Code.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**Behandelte Setups:** IMAP + Python + Ollama, Thunderbird + Ollama-Compose, n8n selbst gehostet + Ollama-Knoten.',
          '**Bestes Modell für E-Mail:** Qwen3 14B (schnell, geringer VRAM-Bedarf, ausreichende Geschäftsqualität) oder Phi-4 Mini (am schnellsten, 4 GB VRAM).',
          '**Erforderlicher VRAM:** Qwen3 14B bei Q4 = ~9 GB; Phi-4 Mini bei Q4 = ~3 GB; Llama 3.3 70B bei Q4 = ~42 GB.',
          '**Unterstützte E-Mail-Formate:** reiner Text IMAP (MIME decodiert), EML-Dateien, Gmail API (lokale Anmeldedaten), Outlook über IMAP.',
          '**Kalenderformate:** ICS-Export (universell), Google Calendar API (lokales OAuth), Nextcloud Calendar (CalDAV).',
          '**Script-Komplexität:** IMAP + Python = ~50 Zeilen; n8n-Workflow = visuell, kein Code; Thunderbird = nur Plugin-Installation.',
          '**Datenschutz:** Keine E-Mail-Daten werden in einem Setup an eine Cloud-API gesendet; IMAP verbindet sich nur mit Ihrem E-Mail-Server.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Warum eine lokale KI für E-Mail-Automatisierung nutzen?',
        content:
          '**Der Kerngrund ist der Datenschutz: Jede E-Mail, die Sie in eine Cloud-KI einfügen, wird möglicherweise protokolliert, zum Training verwendet und unterliegt der Datenspeicherungsrichtlinie dieses Anbieters.** Geschäftliche Korrespondenz, Kundenkommunikation und persönliche E-Mails enthalten Informationen, die Sie nicht in einem Datensatz eines Drittanbieters haben möchten. Eine lokale KI verarbeitet Ihre E-Mails auf Ihrer Hardware, gibt einen Entwurf zurück und speichert nichts.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die Automatisierung von E-Mails mit lokalen KIs hält alle E-Mail-Inhalte auf Ihrem Computer — keine Cloud-API erhält Ihre Nachrichten, kein Dritter protokolliert oder trainiert mit Ihrer Korrespondenz, und die Entwurfsgenerierung funktioniert ohne Internetverbindung.',
          },
          {
            type: 'plain-terms',
            text: 'Wenn Sie eine E-Mail in ChatGPT oder Claude.ai einfügen und um einen Antwortentwurf bitten, wird diese E-Mail auf den Servern von OpenAI oder Anthropic verarbeitet. Für die meisten Menschen und für die meisten Gelegenheiten ist dies akzeptabel. Für geschäftliche Korrespondenz, Kundendetails, Vertragsdiskussionen oder jede Kommunikation, die vertrauliche Informationen enthält, ist dies nicht der Fall. Eine lokale KI, die über Ollama eingerichtet ist, verarbeitet dieselbe E-Mail auf Ihrem Computer und sendet sie nirgendwo hin.',
          },
        ],
        items: [
          '**Datensouveränität:** E-Mail-Inhalte, Absenderinformationen und Thread-Kontext bleiben auf Ihrem Computer. Keine Cloud-Aufbewahrungsrichtlinie gilt.',
          '**Offline-Betrieb:** Sobald Ollama läuft und das Modell heruntergeladen ist, funktioniert die E-Mail-Generierung ohne Internetverbindung.',
          '**Keine Nutzungsbeschränkungen:** Cloud-KI-APIs erzwingen Ratenbegrenzungen und Token-Limits. Ein lokales Setup hat keine Pro-Request-Kosten und kein Tageslimit.',
          '**Einhaltung von Vorschriften:** DSGVO, HIPAA und Anforderungen zur beruflichen Geheimhaltung können das Senden von Kundenkommunikation an eine KI eines Drittanbieters verbieten. Die lokale Verarbeitung beseitigt diese Bedenken.',
          '**Geschwindigkeit für kurze Aufgaben:** Ein kleines Modell (Qwen3 14B, Phi-4 Mini) generiert einen geschäftlichen E-Mail-Entwurf in 2–5 Sekunden auf Consumer-Hardware — schneller als die meisten Cloud-Roundtrips für kurze Prompts.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die lokale E-Mail-Automatisierung ist kein Ersatz für einen E-Mail-Client — sie ist ein Entwurfshilfe-Assistent, der sich in Ihren bestehenden Workflow einfügt. Sie nutzen Thunderbird, Apple Mail oder Gmail weiterhin zum Versand; die lokale KI generiert Text, den Sie überprüfen, bearbeiten und von Ihrem bestehenden Client aus versenden.',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: 'Vergleich der Ansätze',
        content:
          '**Die drei Setups unterscheiden sich in fünf Dimensionen, die für die meisten Benutzer wichtig sind: Einrichtungsschwierigkeit, 30-Tage-Zuverlässigkeit, Datenschutz und das Benutzerprofil, für das jedes Setup am besten geeignet ist.** Wählen Sie die einfachste Option, die Ihren Workflow abdeckt, anstelle der leistungsfähigsten.',
        columns: ['Ansatz', 'Einrichtung', 'Zuverlässigkeit (30 Tage)', 'Datenschutz', 'Am besten geeignet für'],
        rows: [
          { 'Ansatz': 'Thunderbird + Ollama-Compose', 'Einrichtung': 'Einfach', 'Zuverlässigkeit (30 Tage)': 'Hoch (kein Hintergrundprozess)', 'Datenschutz': 'Nur lokal', 'Am besten geeignet für': 'Einzelne Fachleute, tägliche Triage, GUI-Benutzer' },
          { 'Ansatz': 'Python + IMAP + Cron', 'Einrichtung': 'Schwierig (50 LOC + Planung)', 'Zuverlässigkeit (30 Tage)': 'Sehr hoch (skriptierbar, beobachtbar)', 'Datenschutz': 'Nur lokal', 'Am besten geeignet für': 'Entwickler, die volle Kontrolle und benutzerdefinierte Logik möchten' },
          { 'Ansatz': 'n8n selbst gehostet + Ollama', 'Einrichtung': 'Mittel (visueller Workflow-Editor)', 'Zuverlässigkeit (30 Tage)': 'Hoch (mit Self-Host-Überwachung)', 'Datenschutz': 'Lokal mit Self-Host', 'Am besten geeignet für': 'Workflow-intensive Benutzer, die Zapier ersetzen; bedingte Logik' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: 'Setup 1: IMAP + Python + Ollama',
        content:
          '**Das skriptierbarste Setup: Ein Python-Script ruft ungelesene E-Mails über IMAP ab, entfernt Header und HTML, übergibt den reinen Text an die lokale API von Ollama und speichert den Antwortentwurf.** Läuft nach einem Zeitplan mit Cron oder Task Scheduler. Fünfzig Zeilen Python, keine externen Abhängigkeiten außer dem Ollama-Python-Client.',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'IMAP + Python + Ollama lokale E-Mail-Entwurfs-Pipeline: 4 Schritte vom Abrufen einer ungelesenen E-Mail bis zum Speichern des Entwurfs, mit Qwen3 14B (9 GB VRAM) über die lokale API von Ollama — keine Cloud-API-Aufrufe.',
        promptExamples: [
          {
            label: 'IMAP-E-Mail-Abruf + Ollama-Entwurf (Python-Skelett)',
            text: 'import imaplib, email, os\nimport ollama\n\n# Mit IMAP verbinden\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# Ungelesene E-Mails abrufen\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # Entwurf mit Ollama generieren\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "Sie sind ein professioneller E-Mail-Assistent. Schreiben Sie prägnante, höfliche geschäftliche Antworten. Passen Sie die Formalität der eingehenden E-Mail an."},\n        {"role": "user", "content": f"E-Mail von: {sender}\\nBetreff: {subject}\\n\\nText:\\n{body[:2000]}\\n\\nSchreiben Sie einen Antwortentwurf."}\n    ])\n    draft = response["message"]["content"]\n    print(f"ENTWURF für: {subject}\\n{draft}\\n---")',
          },
        ],
        items: [
          '**IMAP-Anmeldedaten:** Speichern Sie sie in Umgebungsvariablen (`IMAP_HOST`, `IMAP_USER`, `IMAP_PASS`) — niemals im Quellcode. Verwenden Sie ein app-spezifisches Passwort, nicht Ihr primäres Kontokennwort.',
          '**Textverkürzung:** Begrenzen Sie den E-Mail-Text auf 2.000–3.000 Zeichen, bevor Sie ihn an Ollama übergeben. Lange E-Mail-Threads fügen selten nützlichen Kontext für einen Antwortentwurf hinzu und verlangsamen die Generierung.',
          '**HTML-Entfernung:** Wenn der E-Mail-Text HTML ist, verwenden Sie `html.parser` oder `BeautifulSoup`, um reinen Text zu extrahieren, bevor Sie ihn an das Modell übergeben. HTML-Tags verschlechtern die Generierungsqualität.',
          '**Planung:** Auf macOS/Linux fügen Sie einen Cron-Eintrag (`crontab -e`) hinzu, um das Script alle 30 Minuten auszuführen. Auf Windows verwenden Sie Task Scheduler mit einem Python-Interpreter-Pfad.',
          '**Entwurfsspeicherung:** Schreiben Sie Entwürfe in eine lokale Textdatei pro E-Mail (benannt nach Zeitstempel + Betreffslug) oder pushen Sie in einen IMAP-Ordner "Entwürfe" mit `mail.append()`. Das Lesen von Textdateien ist sicherer zur Überprüfung; IMAP-Entwürfe ermöglichen es Ihnen, von jedem Client aus zu versenden.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aktivieren Sie nicht das automatische Versenden. Keine lokale KI erzeugt E-Mail-Entwürfe, die zuverlässig genug sind, um ohne menschliche Überprüfung zu versenden. Tonfehler, falsche Daten, erfundene Tatsachen und Antwort-an-falschen-Thread-Fehler treten regelmäßig auf. Die Automatisierung spart Ihnen Zeit beim Entwurf; der Überprüfungsschritt ist erforderlich.',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: 'Setup 2: Thunderbird + Ollama-Compose-Plugin',
        content:
          '**Thunderbird mit der Ollama-Compose-Erweiterung ist die Code-freie Option.** Installieren Sie Thunderbird, installieren Sie Ollama, laden Sie ein Modell herunter, installieren Sie die Erweiterung — E-Mail-Generierung ist nur einen Rechtsklick im Composefenster entfernt.',
        items: [
          '**Thunderbird installieren** von thunderbird.net. Verfügbar für macOS, Windows und Linux.',
          '**Ollama installieren und ein Modell laden:** `ollama pull qwen3:14b` (empfohlen für E-Mail-Arbeit). Starten Sie `ollama serve`.',
          '**Die Ollama-Compose-Erweiterung installieren** vom Thunderbird-Add-ons-Manager. Suchen Sie "Ollama" oder installieren Sie aus der XPI-Datei der Erweiterung aus dem Projekt-Repository.',
          '**Die Erweiterung konfigurieren** um auf `http://localhost:11434` zu zeigen und wählen Sie Ihr Modell (Qwen3 14B oder Phi-4 Mini empfohlen).',
          '**Im Composefenster:** Rechtsklick im Textbereich und wählen Sie "Mit Ollama generieren" — die Erweiterung sendet die zitierte Original-E-Mail und Ihre Cursor-Position an Ollama und fügt den Antwortentwurf ein.',
          '**Modellwechsel:** Die Erweiterung ermöglicht es Ihnen, Modelle aus der Compose-Symbolleiste zu wechseln. Verwenden Sie Phi-4 Mini für schnelle Antworten; wechseln Sie zu Qwen3 14B oder Llama 3.3 70B für komplexe oder vertrauliche Korrespondenz.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Legen Sie einen benutzerdefinierten System-Prompt in den Ollama-Compose-Einstellungen fest. Der Standard-Prompt ist generisch; ein angepasster erzeugt bessere Ergebnisse. Beispiel: "Sie schreiben professionelle E-Mail-Antworten für [Ihr Name], ein [Ihre Rolle] bei [Unternehmen]. Antworten sind prägnant (unter 150 Wörtern, es sei denn, der Kontext erfordert mehr), professionell warmherzig und passen zur Formalität der eingehenden E-Mail. Fügen Sie nie Disclaimers oder Signaturzeilen hinzu."',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: 'Setup 3: n8n Self-Hosted + Ollama-Knoten',
        content:
          '**n8n selbst gehostet mit einem lokalen Ollama-Knoten ist die richtige Wahl für bedingte Automatisierung: E-Mails nach Absender-Domain filtern, täglich zusammenfassen, Folge-Entwürfe generieren, wenn Kalenderereignisse enden, oder verschiedene E-Mail-Typen zu verschiedenen Modell-Prompts leiten — alles ohne Code zu schreiben.**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: 'n8n-Self-Hosted-Workflow für E-Mail- und Kalenderautomatisierung: Ein IMAP-Trigger und ein Domain-Filter leiten E-Mails an einen lokalen Ollama-Knoten weiter, während ein paralleler Kalenderzweig ICS- oder Google-Kalender-Ereignisse in Besprechungsagenden umwandelt — eine Ollama-Instanz, keine Cloud-API.',
        items: [
          '**n8n selbst gehostet installieren:** `npm install -g n8n && n8n start` oder `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`. Der Workflow-Editor läuft unter `http://localhost:5678`.',
          '**Ollama-Knoten hinzufügen:** Suchen Sie im n8n-Workflow-Editor nach dem Knoten "Ollama" (ab n8n v1.2+ eingebaut). Zeigen Sie auf `http://localhost:11434` und wählen Sie Ihr Modell.',
          '**IMAP-Trigger:** Fügen Sie einen IMAP-E-Mail-Knoten als Workflow-Trigger hinzu — konfigurieren Sie mit Ihren IMAP-Anmeldedaten. Der Knoten fragt neue E-Mails ab und übergibt jede als JSON-Objekt zum nächsten Schritt.',
          '**Filterlogik:** Fügen Sie einen IF-Knoten hinzu, um E-Mails nach Absender-Domain, Betreffschlüsselwörtern oder Tageszeit zu leiten. Leiten Sie zu verschiedenen Ollama-Prompts basierend auf E-Mail-Typ weiter (Client-E-Mails, Newsletter-Digests, interne Team-Nachrichten).',
          '**Kalenderintegration:** Fügen Sie einen Google Calendar-Knoten hinzu (mit lokalen OAuth-Anmeldedaten) oder einen ICS-Datei-Reader, um bevorstehende Ereignisse abzurufen. Übergeben Sie Ereignisdetails an den Ollama-Knoten, um eine Besprechungsagenda oder Vorbereitungscheckliste zu generieren.',
          '**Ausgabeoptionen:** Schreiben Sie Entwürfe in eine lokale Datei, pushen Sie in IMAP-Entwürfe, versenden Sie per Slack-Nachricht an sich selbst oder speichern Sie in einer Notion/Obsidian-Seite — alles über n8n-Ausgabeknoten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'n8n selbst gehostet ist der beste Integrationspunkt für Kalender + E-Mail-Workflows. Das typische Muster: IMAP-Trigger empfängt eine Besprechungsbestätigungs-E-Mail → Besprechungsdetails extrahieren → Google Calendar API aufrufen (lokales OAuth), um Teilnehmer abzurufen → alle Kontexte an Ollama übergeben → Besprechungsagenda generieren → in einen designierten Ordner speichern. Dies dauert etwa 20 Minuten zum Verdrahten im visuellen n8n-Editor.',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: 'Triage- und Überblicks-Prompt-Templates',
        content:
          '**Zwei Prompts, die die häufigsten E-Mail-Aufgaben bewältigen: Klassifizierung pro E-Mail und wöchentliche Posteingangsüberprüfung.** Legen Sie sie in einem der drei Setups ab (Python-Script, Thunderbird-System-Prompt oder n8n-Ollama-Knoten-Text) — sie sind bewusst modellunabhängig.',
        promptExamples: [
          {
            label: 'Triage-Prompt-Template',
            text: 'Sie sind ein E-Mail-Triage-Assistent. Klassifizieren Sie die folgende E-Mail in eine dieser Kategorien und erklären Sie in einem Satz:\n- DRINGEND: Antwort erforderlich innerhalb von 4 Stunden\n- WICHTIG: Antwort erforderlich innerhalb von 24 Stunden\n- INFO: Zum Verständnis lesen, keine Antwort erforderlich\n- WERBUNG: Marketing oder Newsletter, kann archiviert werden\n- SPAM: Unerwünscht, Filterung empfohlen\n\nE-Mail:\nVon: {sender}\nBetreff: {subject}\nText: {body[:1500]}\n\nAusgabeformat:\nKategorie: [DRINGEND|WICHTIG|INFO|WERBUNG|SPAM]\nBegründung: [ein Satz]\nEmpfohlene Aktion: [antworten | archivieren | markieren | löschen]',
          },
          {
            label: 'Wöchentliches Überblicks-Prompt-Template',
            text: 'Fassen Sie die folgenden 50 E-Mails der letzten Woche in 3 Abschnitte zusammen:\n1. DRINGENDE oder WICHTIGE Elemente, die noch Maßnahmen erfordern (mit Absender + 1-Zeilen-Zusammenfassung)\n2. Themen (z.B. "Q4-Planung kam in 12 E-Mails diese Woche vor")\n3. Personen, an die ich noch antworte (Absender + ausstehende Tage)\n\nE-Mails (Betreff + erste 200 Zeichen jedes Texts):\n[geben Sie batched E-Mail-Liste ein]\n\nAusgabeformat: 3 Markdown-Abschnitte.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für den Triage-Prompt kombinieren Sie ihn mit dem n8n-IF-Knoten, um nach Kategorie zu leiten: DRINGEND → Push-Benachrichtigung, WICHTIG → speichern Sie in den Ordner "benötigt-Antwort", WERBUNG → automatisch archivieren, SPAM → zur Filterregel kennzeichnen. Die Klassifizierung macht die nachgelagerte Automatisierung sicher — ohne sie kann die Pipeline nicht zwischen einer Client-Nachverfolgung und einer Marketing-E-Mail unterscheiden.',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: 'Kalenderautomation mit lokalen LLMs',
        content:
          '**Kalenderautomation mit einer lokalen KI funktioniert in zwei Modi: passiv (ICS exportieren, an Ollama übergeben zur Zusammenfassung oder Agenda-Generierung) und aktiv (Google Calendar API mit lokalen OAuth-Anmeldedaten für Echtzeitzugriff auf Ereignisse).** Der passive Modus ist einfacher; der aktive Modus ermöglicht geplante Workflows.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die lokale KI-Kalenderautomation generiert Besprechungsagenden, Wochenzusammenfassungen und E-Mail-Entwürfe für Folgeschritte, indem exportierter ICS-Dateiinhalt oder Google Calendar API-Daten an Ollama übergeben werden — keine Kalenderdaten berühren eine Cloud-KI.',
          },
          {
            type: 'plain-terms',
            text: 'Die einfachste Kalenderautomation: Exportieren Sie die Wochenereignisse als ICS-Datei aus einer beliebigen Kalender-App (Google Calendar, Apple Calendar, Nextcloud), öffnen Sie ein Terminal, übergeben Sie den ICS-Inhalt an Ollama mit einem "generieren Sie eine Besprechungsagenda für jedes Ereignis"-Prompt und kopieren Sie die Ausgabe in Ihre Notizen. Dauert 30 Sekunden und hält Ihre Kalenderdaten lokal.',
          },
        ],
        promptExamples: [
          {
            label: 'ICS-zu-Agenda-Prompt-Template',
            text: 'Hier ist mein Kalender für die Woche im ICS-Format:\n\n[geben Sie ICS-Inhalt ein]\n\nFür jedes Besprechungsereignis:\n1. Generieren Sie eine 5-Punkte-Besprechungsagenda basierend auf dem Ereignistitel und der Beschreibung.\n2. Wenn Teilnehmer aufgelistet sind, vermerken Sie, wer jedes Agenda-Element leiten sollte.\n3. Wenn das Ereignis keine Beschreibung hat, generieren Sie eine generische Agenda für eine [Besprechungstyp]-Besprechung.\n\nFormatieren Sie als Klartext. Ein Abschnitt pro Ereignis, getrennt durch ---.',
          },
        ],
        items: [
          '**ICS-Export (passiv):** Google Calendar, Apple Calendar, Nextcloud und Outlook exportieren alle ICS-Dateien. Exportieren Sie wöchentlich oder täglich, übergeben Sie an Ollama über das Terminal oder ein Script, generieren Sie Agenden oder Zusammenfassungen.',
          '**Google Calendar API (aktiv):** Erstellen Sie eine lokale OAuth-Anmeldedaten in der Google Cloud Console (persönliches Projekt), laden Sie die Credentials-JSON herunter und verwenden Sie die `google-auth-oauthlib`-Python-Bibliothek zum Abrufen von Ereignissen. Das OAuth-Token wird lokal gespeichert und die API-Aufrufe gehen direkt zu Google Calendar — keine KI als Zwischenschicht.',
          '**Besprechungsagenda-Generierungs-Prompt:** Titel + Teilnehmer + Beschreibung → "Generieren Sie eine 5-Punkte-Besprechungsagenda mit Zeitzuordnungen. Wenn die Besprechungsbeschreibung leer ist, schlagen Sie eine generische Agenda für eine [Besprechungstyp]-Besprechung vor."',
          '**Wochenzusammenfassung-Prompt:** alle Ereignisse der Woche → "Fassen Sie die Besprechungen der Woche in 3 Sätzen zusammen. Heben Sie alle aufeinanderfolgenden Blöcke oder ungewöhnlich lange Besprechungen hervor."',
          '**E-Mail-Entwurf folgen:** Nach einer Besprechung (ausgelöst durch Ereignisendzeit) → "Schreiben Sie eine Folge-E-Mail für die Besprechung \'[Titel]\', die die Teilnehmer dankt und die nächsten Schritte zusammenfasst. Verwenden Sie diese Ereignisbeschreibung für Kontext: [Beschreibung]."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Halten Sie Ihre Kalenderdaten, wo möglich, im Klartext. ICS ist Klartext; es ist einfach, direkt an Ollama zu übergeben. Wenn Sie ein proprietäres Kalenderformat oder ein gesperrtes Enterprise-System verwenden, exportieren Sie zuerst zu ICS. Der ICS-Standard ist universell und wird von jeder großen Kalender-Anwendung unterstützt.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Modellempfehlungen für E-Mail- und Kalenderaufgaben',
        content:
          '**E-Mail- und Kalenderautomisierungsaufgaben bevorzugen kleine, schnelle Modelle gegenüber großen, leistungsstarken.** Das Entwerfen einer geschäftlichen E-Mail-Antwort, das Generieren einer Besprechungsagenda oder das Zusammenfassen eines Posteingangs erfordert nicht Llama 3.3 70B — es erfordert ein Modell, das schnell genug ist, um sich interaktiv anzufühlen und kohärent genug, um brauchbaren Geschäftstext zu erzeugen. Für die umfassendere Modelllandschaft über alle Anwendungsfälle hinweg, siehe [Beste lokale LLMs in 2026](/de/local-llms/best-local-llms-2026).',
        columns: ['Aufgabe', 'Empfohlenes Modell', 'VRAM (Q4)', 'Warum'],
        rows: [
          { 'Aufgabe': 'E-Mail-Antwort-Entwurf', 'Empfohlenes Modell': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Warum': 'Beste Balance von Geschäftsschreib-Qualität und Generierungsgeschwindigkeit; verarbeitet formale und ungezwungene Register' },
          { 'Aufgabe': 'Schnelle Einzeilen-Antworten', 'Empfohlenes Modell': 'Phi-4 Mini', 'VRAM (Q4)': '~3 GB', 'Warum': 'Schnellste Option; ausreichend für einfache Bestätigungen und Planungsantworten' },
          { 'Aufgabe': 'Besprechungsagenda-Generierung', 'Empfohlenes Modell': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Warum': 'Gut in strukturierter Listenerstellung; Agenda-Format liegt gut in seinen Möglichkeiten' },
          { 'Aufgabe': 'Zusammenfassung langer E-Mail-Threads', 'Empfohlenes Modell': 'Llama 3.3 70B oder Qwen3 32B', 'VRAM (Q4)': '~42 GB / ~20 GB', 'Warum': 'Kontext-Treue wichtig für Multi-Nachrichten-Threads; kleinere Modelle verpassen Details' },
          { 'Aufgabe': 'Vertrauliche / rechtliche Korrespondenz', 'Empfohlenes Modell': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Warum': 'Beste Reasoning-Qualität; wert der Hardware-Kosten, wenn Fehler hochriskant sind' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für die meisten E-Mail-Aufgaben auf einem System mit 16 GB ist Qwen3 14B die richtige Standard-Wahl. Laden Sie es einmal mit `ollama pull qwen3:14b` herunter und verwenden Sie es für alle E-Mail- und Kalenderautomatisierung. Wechseln Sie nur zu einem größeren Modell, wenn Sie auf eine Aufgabengattung stoßen, bei der die Ausgabequalität des 14B konsistent unzureichend ist.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Sicherheit',
        content:
          '**Der Datenschutzvorteil der lokalen E-Mail-Automatisierung ist real, erfordert aber eine korrekte Einrichtung.** Drei Dinge können ihn untergraben: versehentliche Cloud-Synchronisierung von IMAP-Anmeldedaten, E-Mail-Inhalte in Protokollen, die für Drittanbieter-Tools zugänglich sind, und falsch konfigurierte n8n-Instanzen, die den Workflow dem Netzwerk aussetzen. Für das umfassendere Muster "SaaS durch lokale KI ersetzen" über andere Tools hinweg, siehe [Grammarly und Notion AI durch lokale Modelle ersetzen](/de/power-local-llm/replace-grammarly-notion-ai-with-local).',
        items: [
          '**IMAP-Anmeldedaten:** Speichern Sie in Umgebungsvariablen oder einem lokalen Secrets Manager (macOS Keychain, Linux `secret-tool`, Windows Credential Manager). Speichern Sie nie im Script-Quellcode oder einer Datei, die mit einem Cloud-Repository synchronisiert werden könnte.',
          '**E-Mail-Inhalte in Protokollen:** Python-Scripts, die E-Mail-Inhalte auf stdout/stderr drucken, schreiben E-Mail-Daten in Protokolldateien, wenn sie über Cron mit aktivierter Protokollierung ausgeführt werden. Leiten Sie Protokolle auf `/dev/null` um oder verwenden Sie eine Protokollstufe, die E-Mail-Inhalte ausschließt.',
          '**n8n-Netzwerk-Exposition:** n8n selbst gehostet bindet sich standardmäßig an `localhost:5678`, was lokal ist. Wenn Sie es für Ihr Heimnetzwerk oder darüber hinaus verfügbar machen (z.B. für mobilen Zugriff), fügen Sie Authentifizierung hinzu und stellen Sie sicher, dass die Ollama-API auch auf localhost beschränkt ist.',
          '**App-Passwörter:** Konfigurieren Sie ein dediziertes App-spezifisches Passwort für IMAP-Zugriff in Gmail, Outlook und Apple Mail, anstatt Ihr primäres Kontopasswort zu verwenden. Widerrufen Sie es sofort, wenn das Script kompromittiert ist.',
          '**Git-Repositories:** Wenn Sie Ihre Automatisierungs-Scripts versionskontrollieren, fügen Sie eine `.gitignore` hinzu, die alle `.env`-Dateien mit Anmeldedaten ausschließt. Verpflegen Sie niemals Anmeldedaten in einem öffentlichen oder privaten Repository.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Cloud-Sync-Risiko. Wenn Ihr Home-Verzeichnis mit iCloud, Google Drive oder OneDrive synchronisiert wird, wird eine `.env`-Datei oder Credentials-Datei in einem synchronisierten Verzeichnis in die Cloud hochgeladen. Speichern Sie Anmeldedaten in einem Verzeichnis, das ausdrücklich von Cloud-Sync ausgeschlossen ist, oder verwenden Sie den nativen Secrets Manager Ihres Betriebssystems.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Automatisches Versenden von Entwürfen ohne Überprüfung.** Keine lokale KI erzeugt zuverlässig genug Output zum Versenden ohne menschliche Überprüfung. Tonfehler, falsche Daten und erfundene Tatsachen sind häufig. Lesen Sie immer vor dem Versenden durch.',
          '**Ganze E-Mail-Threads an das Modell übergeben.** Lange Threads enthalten redundanten Kontext, der Token verschwendet und die Generierung verlangsamt. Entfernen Sie zitierte Antwort-Blöcke und übergeben Sie nur die letzten 2–3 Nachrichten.',
          '**Llama 3.3 70B für alle E-Mail-Aufgaben verwenden.** Für die meisten E-Mail-Entwürfe ist Qwen3 14B schneller und verbraucht weniger VRAM. Reservieren Sie die 70B für wirklich komplexe oder hochriskante Korrespondenz.',
          '**IMAP-Anmeldedaten im Script speichern.** Anmeldedaten im Quellcode sind nur ein `git push` entfernt, um öffentlich zu sein. Verwenden Sie Umgebungsvariablen.',
          '**Keinen Wort-Limit für Entwürfe-Prompts setzen.** Ohne Wort-Limit polstern Modelle geschäftliche Antworten mit unnötigen Kontexten, Caveats und Höflichkeitsfloskeln. Fügen Sie "Antwort unter 150 Wörtern" zu jedem E-Mail-Prompt hinzu.',
        ],
      },
      dachContext: {
        id: 'dach-context',
        title: 'Im DACH-Kontext',
        content:
          '**Für Organisationen in Deutschland, Österreich und der Schweiz bietet die lokale E-Mail-Automatisierung zusätzliche Compliance-Vorteile, die Cloud-Automatisierungslösungen nicht bieten. Die DSGVO, BSI-Grundschutz-Kataloge und Anforderungen an Auftragsverarbeiter machen lokale Verarbeitung zur bevorzugten Architektur für geschäftliche E-Mail in der DACH-Region.**',
        items: [
          '**DSGVO Artikel 28 — Auftragsverarbeiter:** Wenn Sie Cloud-KI-Dienste für E-Mail-Verarbeitung verwenden, etablieren Sie eine "Auftragsverarbeitung"-Beziehung mit dem KI-Anbieter. Das erfordert einen Datenverarbeitungsvertrag (DPA), regelmäßige Audits und dokumentierte Datenschutz-Impact-Assessments. Lokale Verarbeitung entfällt diese Anforderung — Ihre Daten bleiben in Ihrem Verantwortungsbereich.',
          '**BSI-Grundschutz-Kataloge:** Das Bundesamt für Sicherheit in der Informationstechnik empfiehlt für sensible Organisationen (Regierungsbehörden, Finanzdienstleistungen, Gesundheitswesen, Infrastruktur) lokale Datenverarbeitung ohne Übertragung an Dritte. Die Automation mit Ollama erfüllt die "lokal gespeicherte" und "begrenzte Datenfluss"-Anforderungen der Kataloge.',
          '**Mittelstand-Compliance:** Deutsche, österreichische und schweizer KMU unterliegen oft lokalen Industriestandards und Kundenanforderungen für IT-Sicherheit. Die Fähigkeit, "unsere E-Mail verlässt nie unseren Computer" zu sagen, ist für Aufträge mit öffentlichen Institutionen, Finanzpartnern und streng regulierten Clients von Vorteil.',
          '**Datenspeicherung und Aufbewahrung:** Cloud-KI-Anbieter behalten Verarbeitungsverlauf und Logs oft monatelang. DSGVO Artikel 17 (Recht auf Vergessenwerden) wird kompliziert, wenn Ihr E-Mail-Inhalt in den Trainingsdaten oder Logs eines Drittanbieters liegt. Lokale Verarbeitung garantiert sofortige Löschung — keine Trainingsdaten-Kontamination.',
          '**Wirtschaftlichkeit:** Kleine bis mittlere Organisationen sparen durch lokale Automation im Vergleich zu Cloud-KI-APIs Kosten. Statt fortlaufender API-Kosten für jede verarbeitete E-Mail, ist Ollama eine einmalige Software-Investition + Hardware.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie in Deutschland, Österreich oder der Schweiz tätig sind und Kundenkommunikation oder interne E-Mail-Sensitivität zu dokumentieren haben, empfehlen Sie die Automatisierung mit lokalen Modellen als "Datenschutz-by-Design"-Architektur gegenüber Compliance-Offiziellen und Stakeholder-Meetings. Die Nachricht: "Lokale Verarbeitung, keine Drittanbieter-APIs, keine Trainingsdaten-Nutzung" überzeugt regelmäßig.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Qwen3 14B-Modellkarte — [Alibaba Cloud / Qwen-Team](https://qwenlm.github.io)',
          'Phi-4 Mini Technical Report — [Microsoft Research](https://microsoft.com/research)',
          'Ollama API-Dokumentation — [Ollama](https://ollama.com/docs)',
          'n8n Self-Hosted-Dokumentation — [n8n.io](https://docs.n8n.io)',
          'DSGVO Artikel 28 — Anforderungen an die Auftragsverarbeitung — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert dies mit Gmail?',
            a: 'Ja. Gmail unterstützt IMAP-Zugriff mit einem App-spezifischen Passwort. Aktivieren Sie IMAP in den Gmail-Einstellungen, generieren Sie ein App-Passwort in den Sicherheitseinstellungen Ihres Google-Kontos und verwenden Sie diese Anmeldedaten im IMAP-Script. Gmail stellt auch die Gmail API zur Verfügung, um strukturiertere Zugriffe zu ermöglichen — nützlich für n8n-Workflows, die Label-Verwaltung, Thread-Operationen oder Anhang-Handhabung benötigen.',
          },
          {
            q: 'Was ist besser für E-Mail-Automatisierung: IMAP + Python oder n8n?',
            a: 'IMAP + Python ist besser, wenn Sie sich wohlfühlen, ein Script zu schreiben und zu pflegen und volle Kontrolle möchten. n8n ist besser, wenn Sie bedingte Logik (E-Mails nach Absender, Zeit oder Inhalt weiterleiten), Kalenderintegration oder mehrere Ausgabeorte ohne Code möchten. Beide verwenden Ollama als lokales Modell-Backend; der Unterschied ist die Orchestrierungs-Ebene drumherum.',
          },
          {
            q: 'Kann eine lokale KI einen ganzen E-Mail-Posteingang zusammenfassen?',
            a: 'Ja, mit Einschränkungen. Eine wöchentliche Posteingang-Zusammenfassung (50–100 E-Mails) funktioniert gut: Betreffszeilen und erste 200 Zeichen jedes Textes abrufen, verketten, an Qwen3 14B übergeben mit einem "Zusammenfassung nach Thema und Dringlichkeit"-Prompt. Für einen kompletten Posteingang mit Tausenden E-Mails, batchen Sie die Zusammenfassung (50 E-Mails pro API-Aufruf) und aggregieren Sie die Batch-Zusammenfassungen. Das Übergeben von 1.000 E-Mails in einem Aufruf überschreitet Context-Limits und erzeugt unzuverlässige Ausgabe.',
          },
          {
            q: 'Welches lokale LLM ist das beste für formale geschäftliche E-Mails?',
            a: 'Qwen3 14B erzeugt das beste Qualitäts-zu-Geschwindigkeits-Verhältnis für formale geschäftliche Korrespondenz auf Consumer-Hardware. Es verarbeitet formales Register, angemessene Absicherung und professionelle Schlussformeln zuverlässig. Für sehr hochrisikante Korrespondenz (rechtliche Mitteilungen, Executive-Kommunikation, Vertragsverhandlung), verwenden Sie Llama 3.3 70B — der Qualitätsunterschied ist für komplexe oder sensible Themen sichtbar.',
          },
          {
            q: 'Funktioniert dies auf Windows?',
            a: 'Ja. Ollama läuft auf Windows (Download von ollama.com). Das IMAP-Python-Script läuft auf jeder Python 3.8+-Installation auf Windows. Thunderbird und die Ollama-Compose-Erweiterung sind Cross-Platform. n8n Self-Hosted läuft auf Windows über npm oder Docker Desktop.',
          },
          {
            q: 'Wie gehe ich mit E-Mail-Threads mit mehreren vorherigen Antworten um?',
            a: 'Entfernen Sie zitierte Inhalte vor der Übergabe an das Modell. Verwenden Sie die `email`-Bibliothek von Python, um nur die neueste Antwort zu extrahieren (den Teil über dem ersten `>`-Präfix oder Divider `--- Original Message ---`). Übergeben Sie nur die letzten 2–3 Nachrichten mit einem 3.000-Zeichen-Gesamtlimit. Das Modell benötigt selten die komplette Thread-Historie, um eine angemessene Antwort zu generieren.',
          },
          {
            q: 'Ist dies DSGVO-konform für geschäftliche Nutzung?',
            a: 'Lokale Verarbeitung ist unter der DSGVO defensiver als Cloud-KI-Verarbeitung für personenbezogene Daten. Wenn Daten auf Ihrem Computer bleiben, begründen Sie nicht automatisch eine neue Auftragsverarbeitungs-Beziehung (Artikel 28). Jedoch hängt die DSGVO-Konformität von Ihrer spezifischen Rolle, der Art der Daten und den bestehenden Datenschutzrichtlinien Ihrer Organisation ab. Konsultieren Sie Ihren Datenschutzbeauftragten, bevor Sie dieses Setup für die Verarbeitung personenbezogener Daten von Kunden oder Mitarbeitern verwenden.',
          },
          {
            q: 'Kann ich damit im Auftrag einer anderen Person antworten?',
            a: 'Technisch ja — das Script kann so konfiguriert werden, dass es auf jeden IMAP-Account zugegriffen wird, für den Sie Anmeldedaten haben. Rechtlich und ethisch setzt das Generieren von E-Mail-Antworten im Auftrag einer anderen Person ohne deren Wissen erhebliche Zustimmungs- und Personalisierungsfragen voraus. Verwenden Sie diese Automatisierung nur für Konten und Korrespondenz, für die Sie persönlich verantwortlich sind.',
          },
          {
            q: 'Kann ich KI auf eingehende E-Mails auslösen?',
            a: 'Ja, über drei Muster. (1) Python + IMAP + Cron: Planen Sie das Script alle 30 Min. aus, rufen Sie neue ungelesene E-Mails ab und generieren Sie Entwürfe. (2) n8n IMAP-Trigger-Knoten: fragt alle 1–5 Min. ab, löst den Workflow bei jeder neuen E-Mail sofort aus. (3) Thunderbird-Filterregeln: verwenden Sie eine "Script ausführen"-Filteraktion, die Ollama über Curl aufruft. Der n8n-Ansatz ist am zuverlässigsten für echte Echtzeit-Triage; Cron ist einfacher, wenn 30-Min-Latenz akzeptabel ist.',
          },
          {
            q: 'Kann ich E-Mail-KI über Geräte synchronisieren?',
            a: 'Die Entwürfe können sich über Ihren bestehenden IMAP-Entwürfe-Ordner synchronisieren — schreiben Sie den KI-generierten Entwurf in den IMAP-Ordner "Entwürfe" mit `mail.append()`, und jedes Gerät mit IMAP-Zugriff (Telefon, Tablet, zweiter Laptop) sieht ihn sofort. Das Ollama-Backend selbst synchronisiert nicht — es läuft auf dem Computer, auf dem Sie es einrichten. Mobile Geräte benötigen Netzwerk-Zugriff zum Home-Computer mit laufendem Ollama (Heimnetzwerk-IP oder Tailscale). Plan: Home-Server läuft Ollama + Automatisierung; alle Geräte lesen Entwürfe aus dem IMAP-Entwürfe-Ordner. Eine KI-Generierung, Multi-Device-Überprüfung und Versand.',
          },
          {
            q: 'Muss ich bei der Verwendung von lokalen LLMs für E-Mail-Automatisierung die DSGVO beachten?',
            a: 'Ja, das gilt für jede Verarbeitung personenbezogener Daten. Bei lokaler Verarbeitung bleibt der Datenschutz jedoch in Ihrer Kontrolle — Sie müssen keinen Auftragsverarbeitungsvertrag mit einem KI-Anbieter schließen, wenn alles lokal läuft. Jedoch müssen Sie immer noch sicherstellen, dass Ihre Automatisierung mit der DSGVO konform ist: Verlangen Sie Zustimmung, wenn E-Mails persönliche Daten von Kunden enthalten; dokumentieren Sie Ihre Zwecke und Rechtsgrundlage für die Verarbeitung; löschen Sie E-Mail-Daten, wenn die Aufbewahrungsfrist endet. Die DSGVO betrifft Daten-Governance, nicht die Wahl zwischen lokal und Cloud. Lokal ist einfacher zu dokumentieren und zu kontrollieren.',
          },
          {
            q: 'Ist diese Automatisierung für den deutschen Mittelstand geeignet?',
            a: 'Ja, besonders für KMU mit besonderen Datenschutz- oder Compliance-Anforderungen. Kleine deutsche und österreichische Unternehmen mit Kundenkommunikation oder sensiblen Geschäftsdaten können die lokale E-Mail-Automatisierung als Teil ihrer "IT-Sicherheit in Eigenregie"-Strategie nutzen, besonders wenn ihre Kunden oder Geschäftspartner Daten-Residenz-Anforderungen haben. Das Setup erfordert etwas technisches Know-how, aber nicht mehr als das Einrichten eines VPN oder eines lokalen NAS-Servers. Das BSI-Grundschutz-Katalog-Profil für Mittelstand-IT empfiehlt solche lokal verwalteten Systeme gerade. Für Organisationen mit IT-Personal ist dies ein Win-Win: Compliance in eigenem Recht + Kostenersparnisse gegenüber Cloud-APIs.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Zapier durch lokale KI-Agenten ersetzen](/de/power-local-llm/replace-zapier-with-local-ai-agents) — lokale Workflow-Automatisierung mit n8n, Ollama und Python für Geschäftsprozess-Automatisierung.',
          '[Lokale KI-Agenten für Geschäfts-Workflows: EU-Compliance](/de/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — DSGVO, EU-KI-Gesetz und DACH-Compliance-Kontext zur Bereitstellung lokaler KI in Geschäftsumgebungen.',
          '[Lokale RAG für private Geschäftsdaten](/de/power-local-llm/local-rag-for-private-business-data) — Einrichtung von Dokument-Q&A über private Geschäftsdaten ohne Cloud-APIs.',
          '[Lokale KI-Agenten mit MCP 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026) — MCP (Model Context Protocol) zum Verbinden lokaler LLMs mit E-Mail-Clients, Kalendern und anderen Tools als Agent-Kontexte.',
          '[Autonome lokale Agenten: Was wirklich funktioniert](/de/power-local-llm/autonomous-local-agents-actually-work) — ehrliche Bewertung dessen, was lokale KI-Agenten 2026 können und nicht können.',
          '[Grammarly und Notion AI durch lokale Modelle ersetzen](/de/power-local-llm/replace-grammarly-notion-ai-with-local) — benachbarte SaaS-Ersatz-Muster für Schreib-Tools, ergänzend zur E-Mail/Kalender-Ersetzung hier.',
          '[Beste lokale LLMs in 2026](/de/local-llms/best-local-llms-2026) — umfassendere Modell-Autorität zum Auswählen des Chat-Modells hinter einem dieser drei Setups.',
          '[Zero-Shot vs Few-Shot Prompting](/de/prompt-engineering/zero-shot-vs-few-shot) — wann Beispiel-E-Mails im Prompt einzubeziehen sind und wann nicht für bessere Generalisierung.',
          '[Lokales LLM-Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — Verzeichnislistungen für Ollama, n8n, Thunderbird und andere Komponenten in diesem Stack.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'IA locale pour l\'e-mail et le calendrier : automatisation sans API cloud (2026)',
    seoTitle: 'Automatisation locale de l\'e-mail et du calendrier 2026',
    intro:
      'Les LLMs locaux peuvent rédiger des réponses, résumer des boîtes aux lettres, générer des ordres du jour et classifier les événements calendaires — sans jamais envoyer vos messages à une API cloud. Ce guide couvre les architectures pratiques : automatisation IMAP locale avec Ollama, clients e-mail open-source avec plugins IA locaux, et les fondamentaux de confidentialité pour garder les données de communication sur votre machine.',
    metaDescription:
      'Automatisation e-mail et calendrier avec LLM local 2026 : IA privée pour boîte mail et agenda. Sans cloud, sans partage de données. Workflows avec modèles locaux.',
    twitterDescription:
      'Automatisation e-mail avec LLM local : rédiger des réponses, résumer la boîte, générer des ordres du jour — tout localement, pas d\'API cloud. Guide de configuration pour Ollama + workflows IMAP.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      'Professionnels, propriétaires de petites entreprises et individus soucieux de la confidentialité qui souhaitent automatiser la rédaction d\'e-mails, résumer les boîtes de réception et gérer les calendriers sans envoyer les données de communication aux services d\'IA cloud.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'automatisation e-mail avec LLM local',
    targetKeywords: [
      'automatisation e-mail avec llm local',
      'rédaction e-mail ollama',
      'résumé boîte aux lettres ia locale',
      'automatisation calendrier llm local',
      'assistant e-mail ia privé',
      'workflow imap llm local',
    ],
    leadAnswerBlock:
      '**L\'automatisation e-mail avec LLM local fonctionne mieux comme pipeline à deux étapes : le client e-mail ou le script IMAP récupère le message brut, supprime les en-têtes et transmet le texte pur à l\'API locale d\'Ollama ; le modèle génère un brouillon que vous vérifiez avant d\'envoyer. Aucun contenu d\'e-mail ne quitte votre machine. Les trois configurations les plus pratiques en 2026 sont : (1) un script IMAP Python qui appelle Ollama selon un calendrier — 50 lignes, entièrement automatisable ; (2) Thunderbird avec le plugin Ollama Compose — basé sur GUI, aucun code requis ; (3) n8n self-hébergé avec un nœud Ollama local — générateur de workflow visuel pour les utilisateurs souhaitant une logique conditionnelle, un filtrage multi-étapes et une intégration calendaire sans codage. Pour l\'automatisation calendaire, le même appel API Ollama fonctionne contre les fichiers ICS exportés ou l\'API Google Calendar avec des credentials locales — génération d\'ordres du jour, résumés hebdomadaires et brouillons d\'e-mails de suivi à partir des détails d\'événement.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment automatiser la rédaction d\'e-mail avec une IA locale sans envoyer mes e-mails au cloud ?',
        answer:
          'La configuration d\'automatisation e-mail locale la plus rapide est un script IMAP Python qui récupère les e-mails non lus, supprime les en-têtes, transmet le texte pur à l\'API locale d\'Ollama et enregistre le brouillon dans un fichier local ou un dossier Brouillons. Moins de 50 lignes de Python. Aucune donnée d\'e-mail ne quitte votre machine. Comme alternative GUI, Thunderbird avec l\'extension Ollama Compose vous permet de cliquer avec le bouton droit sur un e-mail et de générer une réponse sans quitter le client. Pour l\'automatisation de workflow, n8n auto-hébergé avec un nœud Ollama local gère la logique conditionnelle, le filtrage multi-étapes et l\'intégration calendaire sans dépendances cloud.',
        bullets: [
          'IMAP + Python + Ollama : script de 50 lignes, s\'exécute selon un calendrier, enregistre les brouillons localement — la configuration la plus simple.',
          'Thunderbird + plugin Ollama Compose : basé sur GUI, aucun code requis, clic droit pour générer une réponse dans le client e-mail.',
          'n8n auto-hébergé + nœud Ollama : générateur de workflow visuel pour la logique conditionnelle, le filtrage et l\'intégration calendaire.',
          'Automatisation calendaire : exportez le fichier ICS ou utilisez localement l\'API Google Calendar pour générer des ordres du jour et des brouillons de suivi.',
          'Meilleur modèle pour e-mail : Qwen3 14B ou Phi-4 Mini — génération rapide, faible VRAM, qualité adéquate pour la correspondance professionnelle.',
          'Confidentialité : les credentials IMAP et le contenu d\'e-mail ne quittent jamais votre machine ; aucun appel API cloud dans aucune de ces configurations.',
          'La vérification avant envoi est obligatoire : les modèles locaux commettent des erreurs de ton et de faits ; traitez toutes les sorties comme un premier brouillon.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Pourquoi utiliser une IA locale pour l\'e-mail ?', anchor: '#why-local' },
      { label: 'Comparaison des approches', anchor: '#approach-comparison' },
      { label: 'Configuration 1 : IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: 'Configuration 2 : Thunderbird + Plugin Ollama', anchor: '#thunderbird' },
      { label: 'Configuration 3 : n8n Self-Hosted + Ollama', anchor: '#n8n' },
      { label: 'Modèles de prompts de triage et d\'examen', anchor: '#triage-prompts' },
      { label: 'Automatisation du calendrier', anchor: '#calendar' },
      { label: 'Recommandations de modèles', anchor: '#models' },
      { label: 'Confidentialité et sécurité', anchor: '#privacy' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Trois configurations couvrent 95 % des cas d\'utilisation d\'automatisation e-mail locale.** IMAP + Python + Ollama (50 lignes, entièrement scriptable), Thunderbird + Ollama Compose (GUI, aucun code), n8n self-hébergé + nœud Ollama (workflow visuel, logique conditionnelle). Choisissez l\'option la plus simple qui convient à votre workflow.',
          '**Les modèles plus petits sont meilleurs pour l\'e-mail que pour le travail créatif.** La rédaction d\'e-mail nécessite de la cohérence, pas de la créativité. Qwen3 14B et Phi-4 Mini génèrent des brouillons de réponses de qualité professionnelle en 2–5 secondes sur un système 16 GB. Llama 3.3 70B est surdimensionné pour la plupart des tâches e-mail.',
          '**La vérification avant envoi n\'est pas optionnelle.** Les modèles locaux commettent des erreurs de ton (trop formel, trop décontracté), des inexactitudes factuelles (mauvaise heure, mauvais destinataire) et confabulent occasionnellement du contenu issu du contexte non pertinent. Lisez toujours le brouillon avant d\'envoyer.',
          '**Aucun contenu d\'e-mail ne quitte votre machine dans aucune de ces configurations.** Les connexions IMAP vont à votre serveur e-mail, pas à une IA cloud. L\'API Ollama est locale. n8n auto-hébergé s\'exécute sur votre machine. L\'avantage de confidentialité est authentique.',
          '**L\'automatisation calendaire fonctionne mieux avec les fichiers ICS exportés ou un appel API Google Calendar local.** Exportez les événements de la semaine dans un fichier ICS, transmettez-le à Ollama et demandez de générer un ordre du jour, une liste de contrôle préparatoire ou un e-mail récapitulatif hebdomadaire à votre équipe.',
          '**Les credentials IMAP sont sensibles.** Stockez-les dans des variables d\'environnement ou un gestionnaire de secrets local, jamais dans le code source du script. Utilisez des mots de passe spécifiques à l\'application plutôt que votre mot de passe de compte principal.',
          '**n8n self-hébergé est le bon choix pour la logique conditionnelle.** Si vous souhaitez "résumer tous les e-mails de [domaine] quotidiennement" ou "générer un e-mail de suivi quand un événement calendaire se termine", le générateur de workflow visuel de n8n gère cela sans code Python personnalisé.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Configurations couverts :** IMAP + Python + Ollama, Thunderbird + Ollama Compose, n8n self-hébergé + nœud Ollama.',
          '**Meilleur modèle pour e-mail :** Qwen3 14B (rapide, faible VRAM, qualité professionnelle) ou Phi-4 Mini (plus rapide, 4 GB VRAM).',
          '**VRAM requis :** Qwen3 14B à Q4 = ~9 GB ; Phi-4 Mini à Q4 = ~3 GB ; Llama 3.3 70B à Q4 = ~42 GB.',
          '**Formats e-mail pris en charge :** texte brut IMAP (MIME décodé), fichiers EML, API Gmail (credentials locaux), Outlook via IMAP.',
          '**Formats calendaires :** export ICS (universel), API Google Calendar (OAuth local), Nextcloud Calendar (CalDAV).',
          '**Complexité du script :** IMAP + Python = ~50 lignes ; workflow n8n = visuel, aucun code ; Thunderbird = installation du plugin seulement.',
          '**Confidentialité :** aucune donnée d\'e-mail n\'est envoyée à une API cloud dans aucune configuration ; IMAP se connecte à votre serveur e-mail uniquement.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Pourquoi utiliser une IA locale pour l\'e-mail ?',
        content:
          '**La raison fondamentale est la confidentialité : chaque e-mail que vous collez dans une IA cloud est potentiellement enregistré, utilisé pour la formation et soumis à la politique de rétention de données de ce fournisseur.** La correspondance professionnelle, les communications client et les e-mails personnels contiennent des informations que vous ne voulez pas dans un ensemble de données tiers. Une IA locale traite vos e-mails sur votre matériel, retourne un brouillon et ne conserve rien.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'L\'automatisation e-mail avec IA locale garde tout le contenu de votre e-mail sur votre ordinateur — aucune API cloud ne reçoit vos messages, aucun tiers n\'enregistre ou ne s\'entraîne sur votre correspondance, et la génération de brouillon fonctionne sans connexion Internet.',
          },
          {
            type: 'plain-terms',
            text: 'Quand vous collez un e-mail dans ChatGPT ou Claude.ai pour demander un brouillon de réponse, cet e-mail est traité sur les serveurs d\'OpenAI ou d\'Anthropic. Pour la plupart des gens, la plupart du temps, c\'est acceptable. Pour la correspondance professionnelle, les détails client, les discussions contractuelles ou toute communication contenant des informations sensibles, ce ne l\'est pas. Une IA locale configurée via Ollama traite le même e-mail sur votre ordinateur et ne l\'envoie nulle part.',
          },
        ],
        items: [
          '**Souveraineté des données :** le contenu e-mail, les informations d\'expéditeur et le contexte du fil de discussion restent sur votre machine. Aucune politique de rétention cloud ne s\'applique.',
          '**Fonctionnement hors ligne :** une fois que Ollama s\'exécute et que le modèle est téléchargé, la génération d\'e-mail fonctionne sans accès Internet.',
          '**Pas de limites d\'utilisation :** les APIs d\'IA cloud imposent des limites de débit et des plafonds de tokens. Une configuration locale n\'a pas de coûts par requête et pas de limite quotidienne.',
          '**Conformité réglementaire :** le RGPD, la HIPAA et les exigences de confidentialité professionnelle peuvent interdire d\'envoyer les communications client à une IA tierce. Le traitement local élimine cette préoccupation.',
          '**Vitesse pour les tâches courtes :** un modèle petit (Qwen3 14B, Phi-4 Mini) génère un brouillon d\'e-mail professionnel en 2–5 secondes sur du matériel grand public — plus rapide que la plupart des allers-retours cloud pour les prompts courts.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'L\'automatisation e-mail locale n\'est pas un remplacement pour un client e-mail — c\'est un assistant rédactionnel qui s\'intègre dans votre workflow existant. Vous utilisez toujours Thunderbird, Apple Mail ou Gmail pour envoyer ; l\'IA locale génère du texte que vous vérifiez, modifiez et envoyez depuis votre client existant.',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: 'Comparaison des approches',
        content:
          '**Les trois configurations diffèrent sur cinq dimensions pertinentes pour la plupart des utilisateurs : difficulté de configuration, fiabilité sur 30 jours, posture de confidentialité et profil utilisateur pour lequel chacun convient le mieux.** Choisissez l\'option la plus simple qui couvre votre workflow plutôt que la plus puissante.',
        columns: ['Approche', 'Configuration', 'Fiabilité (30j)', 'Confidentialité', 'Meilleure pour'],
        rows: [
          { 'Approche': 'Thunderbird + Ollama Compose', 'Configuration': 'Facile', 'Fiabilité (30j)': 'Élevée (pas de processus arrière-plan)', 'Confidentialité': 'Local uniquement', 'Meilleure pour': 'Professionnels solo, triage quotidien, utilisateurs GUI' },
          { 'Approche': 'Python + IMAP + Cron', 'Configuration': 'Difficile (50 LOC + planification)', 'Fiabilité (30j)': 'Très élevée (scriptable, observable)', 'Confidentialité': 'Local uniquement', 'Meilleure pour': 'Développeurs voulant contrôle total + logique personnalisée' },
          { 'Approche': 'n8n self-hébergé + Ollama', 'Configuration': 'Moyen (éditeur de workflow visuel)', 'Fiabilité (30j)': 'Élevée (avec surveillance self-host)', 'Confidentialité': 'Local avec self-host', 'Meilleure pour': 'Utilisateurs workflow-lourds remplaçant Zapier ; logique conditionnelle' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: 'Configuration 1 : IMAP + Python + Ollama',
        content:
          '**La configuration la plus scriptable : un script Python récupère les e-mails non lus via IMAP, supprime les en-têtes et HTML, transmet le texte pur à l\'API locale d\'Ollama et enregistre le brouillon de réponse.** S\'exécute selon un calendrier avec Cron ou Task Scheduler. Cinquante lignes de Python, aucune dépendance externe au-delà du client Ollama Python.',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'Pipeline locale de brouillons d\'e-mails IMAP + Python + Ollama : 4 étapes de la récupération d\'un e-mail non lu à l\'enregistrement du brouillon, avec Qwen3 14B (9 Go de VRAM) via l\'API locale d\'Ollama — aucun appel API cloud.',
        promptExamples: [
          {
            label: 'Récupération e-mail IMAP + brouillon Ollama (squelette Python)',
            text: 'import imaplib, email, os\nimport ollama\n\n# Connexion IMAP\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# Récupérer les e-mails non lus\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # Générer un brouillon avec Ollama\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "Vous êtes un assistant e-mail professionnel. Rédigez des réponses concises et polies. Adaptez le registre à l\'e-mail entrant."},\n        {"role": "user", "content": f"E-mail de : {sender}\\nSujet : {subject}\\n\\nCorps :\\n{body[:2000]}\\n\\nRédiger un brouillon de réponse."}\n    ])\n    draft = response["message"]["content"]\n    print(f"BROUILLON pour : {subject}\\n{draft}\\n---")',
          },
        ],
        items: [
          '**Credentials IMAP :** stockez dans les variables d\'environnement (`IMAP_HOST`, `IMAP_USER`, `IMAP_PASS`) — jamais dans le code source. Utilisez un mot de passe spécifique à l\'application plutôt que votre mot de passe de compte principal.',
          '**Troncature de corps :** limitez le corps de l\'e-mail à 2.000–3.000 caractères avant de le transmettre à Ollama. Les longs fils d\'e-mail ajoutent rarement un contexte utile pour un brouillon et ralentissent la génération.',
          '**Suppression de HTML :** si le corps est HTML, utilisez `html.parser` ou `BeautifulSoup` pour extraire du texte brut avant de transmettre au modèle. Les balises HTML dégradent la qualité de la génération.',
          '**Planification :** sur macOS/Linux, ajoutez une entrée Cron (`crontab -e`) pour exécuter le script toutes les 30 minutes. Sur Windows, utilisez le Planificateur de tâches avec un chemin d\'interpréteur Python.',
          '**Stockage des brouillons :** écrivez les brouillons dans un fichier texte local par e-mail (nommé par horodatage + slug de sujet) ou poussez vers un dossier IMAP "Brouillons" en utilisant `mail.append()`. La lecture des fichiers texte est plus sûre pour la vérification ; les brouillons IMAP vous permettent d\'envoyer depuis n\'importe quel client.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne pas activer l\'envoi automatique. Aucune IA locale ne produit des brouillons d\'e-mail fiables pour envoyer sans vérification humaine. Les erreurs de ton, les mauvaises données, les faits confabulés et les erreurs de fil de discussion mal orienté se produisent régulièrement. L\'automatisation vous fait gagner du temps de rédaction ; l\'étape de vérification est obligatoire.',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: 'Configuration 2 : Thunderbird + Plugin Ollama Compose',
        content:
          '**Thunderbird avec l\'extension Ollama Compose est l\'option sans code.** Installez Thunderbird, installez Ollama, téléchargez un modèle, installez l\'extension — la génération d\'e-mail est à un clic droit près dans la fenêtre de composition.',
        items: [
          '**Installer Thunderbird** depuis thunderbird.net. Disponible pour macOS, Windows et Linux.',
          '**Installer Ollama et télécharger un modèle :** `ollama pull qwen3:14b` (recommandé pour le travail d\'e-mail). Démarrer `ollama serve`.',
          '**Installer l\'extension Ollama Compose** depuis le gestionnaire de modules complémentaires Thunderbird. Recherchez "Ollama" ou installez depuis le fichier XPI du projet.',
          '**Configurer l\'extension** pour pointer vers `http://localhost:11434` et sélectionnez votre modèle (Qwen3 14B ou Phi-4 Mini recommandé).',
          '**Dans la fenêtre de composition :** cliquez avec le bouton droit sur la zone de texte et sélectionnez "Générer avec Ollama" — l\'extension envoie l\'e-mail d\'origine cité et votre position du curseur à Ollama et insère le brouillon.',
          '**Commutation de modèle :** l\'extension vous permet de basculer entre les modèles depuis la barre d\'outils de composition. Utilisez Phi-4 Mini pour les réponses rapides ; basculez sur Qwen3 14B ou Llama 3.3 70B pour la correspondance complexe ou sensible.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Définissez un système prompt personnalisé dans les paramètres d\'Ollama Compose. Le prompt par défaut est générique ; un personnalisé produit de meilleurs résultats. Exemple : "Vous rédigez des réponses e-mail professionnelles pour [Votre Nom], un [Votre Rôle] chez [Entreprise]. Les réponses sont concises (moins de 150 mots sauf si le contexte exige plus), professionnellement chaleureuses et correspondent à la formalité de l\'e-mail entrant. N\'ajoutez jamais de clauses de non-responsabilité ou de lignes de signature."',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: 'Configuration 3 : n8n Self-Hosted + Ollama',
        content:
          '**n8n self-hébergé avec un nœud Ollama local est le bon choix pour l\'automatisation conditionnelle : filtrer les e-mails par domaine d\'expéditeur, résumer quotidiennement, générer des brouillons de suivi quand les événements calendaires se terminent, ou acheminer différents types d\'e-mails vers différents prompts de modèle — tout sans écrire de code.**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: 'Workflow n8n self-hébergé pour l\'automatisation des e-mails et du calendrier : un déclencheur IMAP et un filtre de domaine acheminent les e-mails vers un nœud Ollama local, tandis qu\'une branche calendrier parallèle transforme les événements ICS ou Google Agenda en ordres du jour de réunion — une seule instance Ollama, aucune API cloud.',
        items: [
          '**Installer n8n self-hébergé :** `npm install -g n8n && n8n start` ou `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`. L\'éditeur de workflow s\'exécute sur `http://localhost:5678`.',
          '**Ajouter le nœud Ollama :** dans l\'éditeur de workflow n8n, recherchez le nœud "Ollama" (intégré à partir de n8n v1.2+). Pointez vers `http://localhost:11434` et sélectionnez votre modèle.',
          '**Déclencheur IMAP :** ajoutez un nœud E-mail IMAP comme déclencheur de workflow — configurez avec vos credentials IMAP. Le nœud interroge les nouveaux e-mails et transmet chacun au prochain pas en tant qu\'objet JSON.',
          '**Logique de filtrage :** ajoutez un nœud IF pour acheminer les e-mails par domaine d\'expéditeur, mots-clés de sujet ou heure de la journée. Acheminez vers différents prompts Ollama basés sur le type d\'e-mail (e-mails client, digests d\'actualités, messages d\'équipe interne).',
          '**Intégration calendaire :** ajoutez un nœud Google Calendar (avec des credentials OAuth locaux) ou un lecteur de fichier ICS pour extraire les événements à venir. Transmettez les détails d\'événement au nœud Ollama pour générer un ordre du jour ou une liste de préparation.',
          '**Options de sortie :** écrivez les brouillons dans un fichier local, poussez vers les brouillons IMAP, envoyez via message Slack à vous-même ou enregistrez dans une page Notion/Obsidian — tout via les nœuds de sortie n8n.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'n8n self-hébergé est le meilleur point d\'intégration pour les workflows calendrier + e-mail. Le schéma typique : le déclencheur IMAP reçoit un e-mail de confirmation de réunion → extraire les détails de réunion → appeler l\'API Google Calendar (OAuth local) pour récupérer les participants → transmettre tous les contextes à Ollama → générer un ordre du jour → enregistrer dans un dossier désigné. Cela prend environ 20 minutes à configurer dans l\'éditeur visuel n8n.',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: 'Modèles de prompts de triage et d\'examen hebdomadaire',
        content:
          '**Deux prompts qui gèrent les tâches e-mail les plus fréquentes : classification par e-mail et examen de boîte aux lettres hebdomadaire.** Déposez-les dans l\'une des trois configurations (script Python, prompt système Thunderbird ou corps du nœud Ollama n8n) — ils sont délibérément agnostiques au modèle.',
        promptExamples: [
          {
            label: 'Modèle de prompt de triage',
            text: 'Vous êtes un assistant de triage d\'e-mail. Classifiez l\'e-mail suivant dans l\'une de ces catégories et expliquez en une phrase :\n- URGENT : réponse requise dans les 4 heures\n- IMPORTANT : réponse requise dans les 24 heures\n- INFO : lire pour connaissance, aucune réponse nécessaire\n- PROMOTIONNEL : marketing ou infolettre, peut être archivé\n- SPAM : indésirable, filtrage recommandé\n\nE-mail :\nDe : {sender}\nSujet : {subject}\nCorps : {body[:1500]}\n\nFormat de sortie :\nCatégorie : [URGENT|IMPORTANT|INFO|PROMOTIONNEL|SPAM]\nJustification : [une phrase]\nAction suggérée : [répondre | archiver | marquer | supprimer]',
          },
          {
            label: 'Modèle de prompt d\'examen hebdomadaire',
            text: 'Résumez les 50 e-mails suivants de la semaine écoulée en 3 sections :\n1. Éléments URGENTS ou IMPORTANTS nécessitant encore des mesures (avec expéditeur + résumé 1 ligne)\n2. Thèmes (p.ex. "La planification Q4 est apparue dans 12 e-mails cette semaine")\n3. Personnes à qui je dois répondre (expéditeur + jours en attente)\n\nE-mails (sujet + premiers 200 caractères de chaque corps) :\n[collez la liste d\'e-mails par lot]\n\nFormat de sortie : 3 sections markdown.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour le prompt de triage, associez-le au nœud IF n8n pour acheminer par catégorie : URGENT → notification push, IMPORTANT → enregistrez dans le dossier "besoin-réponse", PROMOTIONNEL → archive automatique, SPAM → marquez pour règle de filtre. La classification est ce qui rend l\'automatisation en aval sûre — sans elle, le pipeline ne peut pas distinguer un suivi client d\'un e-mail marketing.',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: 'Automatisation du calendrier avec des LLMs locaux',
        content:
          '**L\'automatisation du calendrier avec une IA locale fonctionne en deux modes : passif (exporter ICS, transmettre à Ollama pour résumé ou génération d\'agenda) et actif (API Google Calendar avec credentials OAuth locaux pour accès événement en temps réel).** Le mode passif est plus simple ; le mode actif active les workflows planifiés.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'L\'automatisation calendaire avec IA locale génère des ordres du jour, des résumés hebdomadaires et des brouillons d\'e-mail de suivi en transmettant le contenu du fichier ICS exporté ou les données de l\'API Google Calendar à Ollama — aucune donnée calendaire ne touche une IA cloud.',
          },
          {
            type: 'plain-terms',
            text: 'L\'automatisation calendaire la plus simple : exportez les événements de la semaine en tant que fichier ICS depuis n\'importe quelle application calendaire (Google Calendar, Apple Calendar, Nextcloud), ouvrez un terminal, transmettez le contenu ICS à Ollama avec un prompt "générer un ordre du jour pour chaque événement" et copiez la sortie dans vos notes. Prend 30 secondes et garde vos données calendaires locales.',
          },
        ],
        promptExamples: [
          {
            label: 'Modèle de prompt ICS-vers-Agenda',
            text: 'Voici mon calendrier pour la semaine au format ICS :\n\n[collez le contenu ICS]\n\nPour chaque événement de réunion :\n1. Générez un ordre du jour à 5 points basé sur le titre et la description de l\'événement.\n2. Si les participants sont listés, notez qui devrait diriger chaque point de l\'ordre du jour.\n3. Si l\'événement n\'a pas de description, générez un ordre du jour générique approprié pour une réunion [type].\n\nFormatez en texte brut. Une section par événement, séparée par ---.',
          },
        ],
        items: [
          '**Export ICS (passif) :** Google Calendar, Apple Calendar, Nextcloud et Outlook exportent tous les fichiers ICS. Exportez hebdomadairement ou quotidiennement, transmettez à Ollama via terminal ou script, générez des agendas ou des résumés.',
          '**API Google Calendar (actif) :** créez des credentials OAuth locaux dans Google Cloud Console (projet personnel), téléchargez le JSON des credentials et utilisez la bibliothèque `google-auth-oauthlib` Python pour récupérer les événements. Le token OAuth est stocké localement et les appels API vont directement à Google Calendar — pas d\'intermédiaire IA.',
          '**Prompt de génération d\'agenda de réunion :** titre + participants + description → "Générez un ordre du jour à 5 points avec allocations de temps. Si la description de réunion est vide, proposez un ordre du jour générique pour une réunion [type]."',
          '**Prompt de résumé hebdomadaire :** tous les événements de la semaine → "Résumez les réunions de la semaine en 3 phrases. Mettez en évidence les blocs consécutifs ou les réunions inhabituellement longues."',
          '**Brouillon d\'e-mail de suivi :** après une réunion (déclenchée par l\'heure de fin d\'événement) → "Rédigez un e-mail de suivi pour la réunion \'[titre]\' qui remercie les participants et résume les prochaines étapes. Utilisez cette description d\'événement pour le contexte : [description]."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Conservez vos données calendaires en texte brut où possible. ICS est du texte brut ; il est facile de transmettre directement à Ollama. Si vous utilisez un format calendaire propriétaire ou un système d\'entreprise verrouillé, d\'abord exporter vers ICS. Le standard ICS est universel et pris en charge par toutes les grandes applications calendaires.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recommandations de modèles pour tâches e-mail et calendaire',
        content:
          '**Les tâches d\'automatisation e-mail et calendaire favorisent les petits modèles rapides plutôt que les grands modèles puissants.** Rédiger une réponse e-mail professionnelle, générer un agenda ou résumer une boîte aux lettres ne nécessite pas Llama 3.3 70B — cela nécessite un modèle assez rapide pour se sentir interactif et cohérent pour produire du texte professionnel utilisable. Pour le paysage de modèle plus large dans tous les cas d\'usage, voir [Meilleurs LLMs locaux en 2026](/fr/local-llms/best-local-llms-2026).',
        columns: ['Tâche', 'Modèle recommandé', 'VRAM (Q4)', 'Pourquoi'],
        rows: [
          { 'Tâche': 'Rédaction brouillon e-mail', 'Modèle recommandé': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Pourquoi': 'Meilleur équilibre qualité d\'écriture professionnelle et vitesse de génération ; gère registres formel et décontracté' },
          { 'Tâche': 'Réponses rapides d\'une seule ligne', 'Modèle recommandé': 'Phi-4 Mini', 'VRAM (Q4)': '~3 GB', 'Pourquoi': 'Option la plus rapide ; adéquate pour les reconnaissances simples et réponses de planification' },
          { 'Tâche': 'Génération d\'agenda de réunion', 'Modèle recommandé': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Pourquoi': 'Bon à la génération de liste structurée ; le format agenda est bien dans ses capacités' },
          { 'Tâche': 'Résumé long fil e-mail', 'Modèle recommandé': 'Llama 3.3 70B ou Qwen3 32B', 'VRAM (Q4)': '~42 GB / ~20 GB', 'Pourquoi': 'L\'adhérence à la fenêtre de contexte long importe pour les fils multi-messages ; petits modèles ratent détails' },
          { 'Tâche': 'Correspondance sensible / légale', 'Modèle recommandé': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Pourquoi': 'Meilleure qualité de raisonnement ; vaut le coût du matériel quand les erreurs sont à haut risque' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour la plupart des tâches e-mail sur un système 16 GB, Qwen3 14B est le bon choix par défaut. Téléchargez-le une fois avec `ollama pull qwen3:14b` et utilisez-le pour toute l\'automatisation e-mail et calendaire. Basculez vers un plus grand modèle uniquement quand vous rencontrez un type de tâche où la qualité de sortie du 14B est systématiquement insuffisante.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et sécurité',
        content:
          '**L\'avantage de confidentialité de l\'automatisation e-mail locale est réel, mais nécessite une configuration correcte.** Trois choses peuvent le saper : synchronisation cloud accidentelle des credentials IMAP, contenu e-mail dans les journaux accessibles aux outils tiers, et instances n8n mal configurées qui exposent le workflow au réseau. Pour le schéma plus large "remplacer SaaS par IA locale" dans d\'autres outils, voir [Remplacer Grammarly et Notion AI par des modèles locaux](/fr/power-local-llm/replace-grammarly-notion-ai-with-local).',
        items: [
          '**Credentials IMAP :** stockez dans les variables d\'environnement ou un gestionnaire de secrets local (Keychain macOS, Linux `secret-tool`, Credential Manager Windows). N\'enregistrez jamais dans le code source du script ou un fichier qui pourrait être synchronisé à un référentiel cloud.',
          '**Contenu e-mail dans les journaux :** les scripts Python qui impriment le contenu e-mail sur stdout/stderr écriront les données d\'e-mail dans les fichiers journaux s\'ils s\'exécutent via Cron avec la journalisation activée. Redirigez les journaux vers `/dev/null` ou utilisez un niveau de journal qui exclut le contenu e-mail.',
          '**Exposition réseau n8n :** n8n self-hébergé se lie à `localhost:5678` par défaut, qui est local. Si vous l\'exposez à votre réseau domestique ou au-delà (p.ex. pour accès mobile), ajoutez l\'authentification et assurez-vous que l\'API Ollama soit aussi restreinte à localhost.',
          '**Mots de passe d\'application :** configurez un mot de passe spécifique à l\'application dédié pour l\'accès IMAP dans Gmail, Outlook et Apple Mail plutôt que d\'utiliser votre mot de passe de compte principal. Révoquez-le immédiatement si le script est compromis.',
          '**Référentiels Git :** si vous versionnez vos scripts d\'automatisation, ajoutez une `.gitignore` qui exclut tout fichier `.env` contenant des credentials. N\'enregistrez jamais les credentials dans un référentiel public ou privé.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Risque de synchronisation cloud. Si votre répertoire personnel est synchronisé avec iCloud, Google Drive ou OneDrive, tout fichier `.env` ou fichier credentials dans un répertoire synchronisé sera téléchargé vers le cloud. Stockez les credentials dans un répertoire explicitement exclu de la synchronisation cloud ou utilisez le gestionnaire de secrets natif de votre système d\'exploitation.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Envoi automatique de brouillons sans vérification.** Aucun modèle local ne produit une sortie assez fiable pour envoyer sans vérification humaine. Les erreurs de ton, les mauvaises données et les faits confabulés sont courants. Lisez toujours avant d\'envoyer.',
          '**Transmettre les fils e-mail complets au modèle.** Les longs fils contiennent le contexte redondant qui gaspille les tokens et ralentit la génération. Supprimez les blocs de réponse cités et transmettez uniquement les 2–3 derniers messages.',
          '**Utiliser Llama 3.3 70B pour toutes les tâches e-mail.** Pour la plupart de la rédaction d\'e-mail, Qwen3 14B est plus rapide et utilise moins de VRAM. Réservez le 70B pour une correspondance véritablement complexe ou à haut enjeu.',
          '**Stocker les credentials IMAP dans le script.** Les credentials dans le code source sont à un `git push` de devenir publics. Utilisez les variables d\'environnement.',
          '**Ne pas fixer de limite de mots pour les prompts de brouillon.** Sans limite de mots, les modèles remplissent les réponses professionnelles avec contexte inutile, caveats et fleurons de politesse. Ajoutez "Répondre en moins de 150 mots" à chaque prompt e-mail.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Fiche technique du modèle Qwen3 14B — [Alibaba Cloud / Équipe Qwen](https://qwenlm.github.io)',
          'Rapport technique Phi-4 Mini — [Recherche Microsoft](https://microsoft.com/research)',
          'Documentation API Ollama — [Ollama](https://ollama.com/docs)',
          'Documentation n8n Self-Hosted — [n8n.io](https://docs.n8n.io)',
          'Article 28 RGPD — obligations du responsable du traitement — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Cela fonctionne-t-il avec Gmail ?',
            a: 'Oui. Gmail supporte l\'accès IMAP avec un mot de passe spécifique à l\'application. Activez IMAP dans les paramètres Gmail, générez un mot de passe d\'application dans vos paramètres de sécurité Google Account et utilisez ces credentials dans le script IMAP. Gmail expose également l\'API Gmail pour un accès plus structuré — utile pour les workflows n8n qui nécessitent la gestion des étiquettes, des opérations de fil ou la manipulation des pièces jointes.',
          },
          {
            q: 'Lequel est meilleur pour l\'automatisation e-mail : IMAP + Python ou n8n ?',
            a: 'IMAP + Python est meilleur si vous êtes à l\'aise d\'écrire et maintenir un script et voulez le contrôle total. n8n est meilleur si vous voulez la logique conditionnelle (acheminer les e-mails par expéditeur, heure ou contenu), intégration calendaire ou plusieurs destinations de sortie sans code. Les deux utilisent Ollama comme backend de modèle local ; la différence est la couche d\'orchestration autour.',
          },
          {
            q: 'Une IA locale peut-elle résumer une boîte aux lettres entière ?',
            a: 'Oui, avec des limitations. Un résumé de boîte aux lettres hebdomadaire (50–100 e-mails) fonctionne bien : récupérez les sujets et les premiers 200 caractères de chaque corps, concaténez, transmettez à Qwen3 14B avec un prompt "résumez par thème et urgence". Pour une boîte aux lettres complète avec des milliers d\'e-mails, par lot le résumé (50 e-mails par appel API) et agrégez les résumés par lot. Transmettre 1.000 e-mails en un appel dépasse les limites de contexte et produit une sortie peu fiable.',
          },
          {
            q: 'Quel LLM local est le meilleur pour les e-mails professionnels formels ?',
            a: 'Qwen3 14B produit le meilleur ratio qualité-vitesse pour la correspondance professionnelle formelle sur du matériel grand public. Il gère le registre formel, les couvertures appropriées et les fermetures professionnelles de façon fiable. Pour la correspondance très à haut enjeu (avis légaux, communications exécutives, négociations contractuelles), utilisez Llama 3.3 70B — la différence de qualité est visible pour les sujets complexes ou sensibles.',
          },
          {
            q: 'Cela fonctionne-t-il sur Windows ?',
            a: 'Oui. Ollama s\'exécute sur Windows (téléchargez depuis ollama.com). Le script Python IMAP s\'exécute sur toute installation Python 3.8+ sur Windows. Thunderbird et l\'extension Ollama Compose sont multiplateforme. n8n self-hébergé s\'exécute sur Windows via npm ou Docker Desktop.',
          },
          {
            q: 'Comment gérer les fils e-mail avec plusieurs réponses antérieures ?',
            a: 'Supprimez le contenu cité avant transmission au modèle. Utilisez la bibliothèque `email` de Python pour extraire uniquement la dernière réponse (la portion au-dessus du premier préfixe `>` ou du séparateur `--- Message Original ---`). Transmettez uniquement les 2–3 derniers messages avec une limite totale de 3.000 caractères. Le modèle a rarement besoin de l\'historique de fil complet pour générer une réponse appropriée.',
          },
          {
            q: 'Cela est-il conforme au RGPD pour usage professionnel ?',
            a: 'Le traitement local est plus défendable sous le RGPD que le traitement IA cloud pour les données personnelles. Quand les données restent sur votre machine, vous ne créez pas automatiquement une nouvelle relation de responsable du traitement (Article 28). Cependant, la conformité RGPD dépend de votre rôle spécifique, de la nature des données et des politiques existantes de protection des données de votre organisation. Consultez votre délégué à la protection des données avant d\'utiliser cette configuration pour traiter les données personnelles de clients ou d\'employés.',
          },
          {
            q: 'Puis-je l\'utiliser pour répondre pour quelqu\'un d\'autre ?',
            a: 'Techniquement oui — le script peut être configuré pour accéder à n\'importe quel compte IMAP pour lequel vous avez des credentials. Légalement et éthiquement, générer des réponses e-mail au nom d\'une autre personne sans son consentement soulève des questions importantes de consentement et d\'usurpation d\'identité. Utilisez cette automatisation uniquement pour les comptes et la correspondance pour lesquels vous êtes personnellement responsable.',
          },
          {
            q: 'Puis-je déclencher l\'IA sur les e-mails entrants ?',
            a: 'Oui, via trois modèles. (1) Python + IMAP + Cron : planifiez le script pour s\'exécuter toutes les 30 minutes, récupérez les nouveaux e-mails non lus, générez les brouillons. (2) Nœud déclencheur IMAP n8n : interroge toutes les 1–5 minutes, déclenche le workflow immédiatement sur chaque nouvel e-mail. (3) Règles de filtre Thunderbird : utilisez une action "Exécuter un script" qui appelle Ollama via curl. L\'approche n8n est la plus fiable pour un véritable triage en temps réel ; Cron est plus simple si une latence de 30 minutes est acceptable.',
          },
          {
            q: 'Puis-je synchroniser l\'IA e-mail sur les appareils ?',
            a: 'Les brouillons peuvent se synchroniser via votre dossier IMAP Brouillons existant — écrivez le brouillon généré par IA dans le dossier IMAP "Brouillons" en utilisant `mail.append()` et n\'importe quel appareil avec accès IMAP (téléphone, tablette, deuxième ordinateur portable) le voit immédiatement. Le backend Ollama lui-même ne se synchronise pas — il s\'exécute sur la machine où vous l\'avez configuré. Les appareils mobiles ont besoin d\'accès réseau à la machine domestique exécutant Ollama (IP LAN ou Tailscale). Plan : serveur domestique exécute Ollama + automatisation ; tous les appareils lisent les brouillons depuis le dossier IMAP Brouillons. Une génération d\'IA, vérification multi-appareil et envoi.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Remplacer Zapier par des agents IA locaux](/fr/power-local-llm/replace-zapier-with-local-ai-agents) — automatisation de workflow locale utilisant n8n, Ollama et Python pour automatisation de processus métier.',
          '[Agents IA locaux pour workflows métier : conformité UE](/fr/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexte RGPD, loi UE sur l\'IA et conformité pour déploiement d\'IA locale dans paramètres métier.',
          '[RAG local pour données métier privées](/fr/power-local-llm/local-rag-for-private-business-data) — mise en place de Q&R de documents sur données métier privées sans APIs cloud.',
          '[Agents IA locaux avec MCP 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026) — MCP (Model Context Protocol) pour connecter les LLMs locaux aux clients e-mail, calendriers et autres outils comme contextes d\'agent.',
          '[Agents locaux autonomes : ce qui marche vraiment](/fr/power-local-llm/autonomous-local-agents-actually-work) — évaluation honnête de ce que les agents IA locaux peuvent et ne peuvent pas faire en 2026.',
          '[Remplacer Grammarly et Notion AI par des modèles locaux](/fr/power-local-llm/replace-grammarly-notion-ai-with-local) — schéma de remplacement SaaS adjacent pour outils d\'écriture, complétant le remplacement e-mail/calendrier ici.',
          '[Meilleurs LLMs locaux en 2026](/fr/local-llms/best-local-llms-2026) — autorité de modèle plus large pour choisir le modèle de chat derrière l\'un de ces trois configurations.',
          '[Prompting Zero-Shot vs Few-Shot](/fr/prompt-engineering/zero-shot-vs-few-shot) — quand inclure des exemples d\'e-mail dans le prompt et quand les retenir pour meilleure généralisation.',
          '[Répertoire logiciels LLM locaux 2026](/fr/power-local-llm/local-llm-software-directory-2026) — listes de répertoire pour Ollama, n8n, Thunderbird et autres composants de cette pile.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'IA local para email y calendario: automatización sin API en la nube (2026)',
    seoTitle: 'Automatización local de email y calendario con IA 2026',
    intro:
      'Los LLMs locales pueden redactar respuestas de email, resumir bandejas de entrada, generar agendas de reuniones y clasificar eventos del calendario — todo sin enviar tus mensajes a una API en la nube. Esta guía cubre las arquitecturas prácticas: automatización IMAP local con Ollama, clientes de email open-source con plugins de IA local, y los fundamentos de privacidad para mantener los datos de comunicación en tu máquina.',
    metaDescription:
      'Automatiza emails, resumen de bandeja y gestión de calendario con un LLM local. Ollama, integración IMAP y automatización privada de comunicaciones.',
    twitterDescription:
      'Automatización de email con LLM local: redacta respuestas, resume bandejas de entrada, genera agendas — todo local, sin API en la nube. Guía de configuración para flujos de trabajo Ollama + IMAP.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      'Profesionales, pequeños empresarios e individuos preocupados por la privacidad que desean automatizar la redacción de emails, resumir bandejas de entrada y gestionar calendarios sin enviar datos de comunicación a servicios de IA en la nube.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'automatización de email con LLM local',
    targetKeywords: [
      'automatización email llm local',
      'redacción email ollama',
      'resumen bandeja de entrada ia local',
      'automatización calendario llm local',
      'asistente email ia privado',
      'flujo de trabajo imap llm local',
    ],
    leadAnswerBlock:
      '**La automatización de email con LLM local funciona mejor como un pipeline de dos pasos: el cliente de email o el script IMAP obtiene el mensaje en bruto, elimina los encabezados y pasa el texto plano a Ollama a través de su API; el modelo genera un borrador de respuesta que tú revisas antes de enviar. Ningún contenido de email abandona tu máquina. Las tres configuraciones más prácticas en 2026 son: (1) un script Python con IMAP que llama a Ollama según un horario — 50 líneas, totalmente automatizable; (2) Thunderbird con el plugin Ollama Compose — basado en GUI, sin código; (3) n8n autoalojado con un nodo Ollama local — generador de flujos de trabajo visual para usuarios que quieren lógica condicional, filtrado en múltiples pasos e integración con el calendario sin programar. Para la automatización del calendario, la misma llamada a la API de Ollama funciona con archivos ICS exportados o la API de Google Calendar con credenciales locales — generando agendas de reuniones, resúmenes semanales y borradores de emails de seguimiento a partir de los detalles del evento.**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo automatizo la redacción de emails con un LLM local sin enviar mis emails a la nube?',
        answer:
          'La configuración de automatización de email local más rápida es un script Python con IMAP que obtiene emails no leídos, elimina encabezados, pasa el texto plano a la API local de Ollama y guarda el borrador en un archivo local o en la carpeta Borradores. Menos de 50 líneas de Python. Ningún dato de email abandona tu máquina. Como alternativa con GUI, Thunderbird con la extensión Ollama Compose te permite hacer clic derecho en cualquier email y generar una respuesta sin salir del cliente. Para la automatización de flujos de trabajo, n8n autoalojado con un nodo Ollama local maneja la lógica condicional, el filtrado en múltiples pasos y la integración con el calendario sin dependencias en la nube.',
        bullets: [
          'IMAP + Python + Ollama: script de 50 líneas, se ejecuta según un horario, guarda borradores localmente — la configuración más sencilla.',
          'Thunderbird + plugin Ollama Compose: basado en GUI, sin código, clic derecho para generar respuesta en el cliente de email.',
          'n8n autoalojado + nodo Ollama: generador de flujos de trabajo visual para lógica condicional, filtrado e integración con el calendario.',
          'Automatización del calendario: exporta el archivo ICS o usa la API de Google Calendar localmente para generar agendas de reuniones y borradores de seguimiento.',
          'Mejor modelo para email: Qwen3 14B o Phi-4 Mini — generación rápida, bajo uso de VRAM, calidad adecuada para correspondencia de negocios.',
          'Privacidad: las credenciales IMAP y el contenido del email nunca abandonan tu máquina; sin llamadas a API en la nube en ninguna de estas configuraciones.',
          'La revisión antes de enviar es obligatoria: los modelos locales cometen errores de tono y de hechos; trata toda la salida como un primer borrador.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Por qué usar una IA local para el email?', anchor: '#why-local' },
      { label: 'Comparación de enfoques', anchor: '#approach-comparison' },
      { label: 'Configuración 1: IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: 'Configuración 2: Thunderbird + Plugin Ollama', anchor: '#thunderbird' },
      { label: 'Configuración 3: n8n autoalojado + Ollama', anchor: '#n8n' },
      { label: 'Plantillas de prompts de triaje y revisión semanal', anchor: '#triage-prompts' },
      { label: 'Automatización del calendario', anchor: '#calendar' },
      { label: 'Recomendaciones de modelos', anchor: '#models' },
      { label: 'Privacidad y seguridad', anchor: '#privacy' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Tres configuraciones cubren el 95% de los casos de uso de automatización local de email.** IMAP + Python + Ollama (50 líneas, totalmente scriptable), Thunderbird + Ollama Compose (GUI, sin código), n8n autoalojado + nodo Ollama (flujo de trabajo visual, lógica condicional). Elige la opción más sencilla que se adapte a tu flujo de trabajo.',
          '**Los modelos más pequeños son mejores para el email que para el trabajo creativo.** La redacción de emails requiere coherencia, no creatividad. Qwen3 14B y Phi-4 Mini generan borradores de respuesta de calidad empresarial en 2–5 segundos en un sistema de 16 GB. Llama 3.3 70B es excesivo para la mayoría de las tareas de email.',
          '**La revisión antes de enviar no es opcional.** Los modelos locales cometen errores de tono (demasiado formal, demasiado informal), errores de hechos (hora de reunión incorrecta, nombre del destinatario equivocado) y ocasionalmente inventan contenido de contexto no relacionado. Siempre lee el borrador antes de enviar.',
          '**Ningún contenido de email abandona tu máquina en ninguna de estas configuraciones.** Las conexiones IMAP van a tu servidor de email, no a una IA en la nube. La API de Ollama es local. n8n autoalojado se ejecuta en tu máquina. La ventaja de privacidad es genuina.',
          '**La automatización del calendario funciona mejor con ICS exportado o una llamada local a la API de Google Calendar.** Exporta los eventos de la semana a un archivo ICS, pásalo a Ollama y pídele que genere una agenda de reunión, una lista de verificación de preparación o un email de resumen semanal para tu equipo.',
          '**Las credenciales IMAP son sensibles.** Almacénalas en variables de entorno o en un gestor de secretos local, nunca en el código fuente del script. Usa contraseñas de aplicación específicas en lugar de la contraseña principal de tu cuenta.',
          '**n8n autoalojado es la elección correcta para la lógica condicional.** Si quieres "resumir todos los emails de [dominio] diariamente" o "generar un email de seguimiento cuando termina un evento del calendario", el generador de flujos de trabajo visual de n8n lo maneja sin Python personalizado.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Configuraciones cubiertas:** IMAP + Python + Ollama, Thunderbird + Ollama Compose, n8n autoalojado + nodo Ollama.',
          '**Mejor modelo para email:** Qwen3 14B (rápido, bajo uso de VRAM, calidad empresarial adecuada) o Phi-4 Mini (el más rápido, 4 GB VRAM).',
          '**VRAM requerido:** Qwen3 14B en Q4 = ~9 GB; Phi-4 Mini en Q4 = ~3 GB; Llama 3.3 70B en Q4 = ~42 GB.',
          '**Formatos de email compatibles:** texto plano IMAP (MIME decodificado), archivos EML, API de Gmail (credenciales locales), Outlook vía IMAP.',
          '**Formatos de calendario:** exportación ICS (universal), API de Google Calendar (OAuth local), Nextcloud Calendar (CalDAV).',
          '**Complejidad del script:** IMAP + Python = ~50 líneas; flujo de trabajo n8n = visual, sin código; Thunderbird = solo instalación del plugin.',
          '**Privacidad:** ningún dato de email se envía a ninguna API en la nube en ninguna configuración; IMAP se conecta solo a tu servidor de email.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '¿Por qué usar una IA local para la automatización de email?',
        content:
          '**La razón principal es la privacidad: cada email que pegas en un asistente de IA en la nube es potencialmente registrado, usado para entrenamiento y sujeto a la política de retención de datos de ese proveedor.** La correspondencia de negocios, las comunicaciones con clientes y el email personal contienen información que no quieres en un conjunto de datos de terceros. Un LLM local procesa tus emails en tu hardware, devuelve un borrador y no retiene nada.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La automatización de email con IA local mantiene todo el contenido del email en tu máquina — ninguna API en la nube recibe tus mensajes, ningún tercero registra ni entrena con tu correspondencia, y la generación de borradores funciona sin conexión a internet.',
          },
          {
            type: 'plain-terms',
            text: 'Cuando pegas un email en ChatGPT o Claude.ai para pedir un borrador de respuesta, ese email se procesa en los servidores de OpenAI o Anthropic. Para la mayoría de las personas, la mayoría de las veces, esto es aceptable. Para correspondencia de negocios, detalles de clientes, discusiones de contratos o cualquier comunicación que incluya información sensible, no lo es. Un LLM local configurado a través de Ollama procesa el mismo email en tu computadora y nunca lo envía a ningún lugar.',
          },
        ],
        items: [
          '**Soberanía de datos:** el contenido del email, la información del remitente y el contexto del hilo permanecen en tu máquina. Ninguna política de retención en la nube aplica.',
          '**Operación sin conexión:** una vez que Ollama está en ejecución y el modelo descargado, la redacción de emails funciona sin acceso a internet.',
          '**Sin límites de uso:** las APIs de IA en la nube imponen límites de velocidad y topes de tokens. Una configuración local no tiene costo por solicitud ni límite diario.',
          '**Cumplimiento normativo:** el RGPD, la HIPAA y los requisitos de privilegio profesional pueden prohibir enviar comunicaciones de clientes a una IA de terceros. El procesamiento local elimina esta preocupación.',
          '**Velocidad para tareas cortas:** un modelo pequeño (Qwen3 14B, Phi-4 Mini) genera un borrador de email de negocios en 2–5 segundos en hardware de consumo — más rápido que la mayoría de las llamadas de ida y vuelta a la nube para prompts cortos.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La automatización local de email no es un reemplazo de un cliente de email — es un asistente de redacción que se integra en tu flujo de trabajo existente. Sigues usando Thunderbird, Apple Mail o Gmail para enviar; el LLM local genera texto que tú revisas, editas y envías desde tu cliente existente.',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: 'Comparación de enfoques',
        content:
          '**Las tres configuraciones difieren en cinco ejes relevantes para la mayoría de los usuarios: dificultad de configuración, fiabilidad a 30 días, postura de privacidad y el perfil de usuario para el que cada una es más adecuada.** Elige la opción más sencilla que cubra tu flujo de trabajo en lugar de la más potente.',
        columns: ['Enfoque', 'Configuración', 'Fiabilidad (30 días)', 'Privacidad', 'Ideal para'],
        rows: [
          { 'Enfoque': 'Thunderbird + Ollama Compose', 'Configuración': 'Fácil', 'Fiabilidad (30 días)': 'Alta (sin proceso en segundo plano)', 'Privacidad': 'Solo local', 'Ideal para': 'Profesionales individuales, triaje diario, usuarios de GUI' },
          { 'Enfoque': 'Python + IMAP + cron', 'Configuración': 'Difícil (50 LOC + programación)', 'Fiabilidad (30 días)': 'Muy alta (scriptable, observable)', 'Privacidad': 'Solo local', 'Ideal para': 'Desarrolladores que quieren control total + lógica personalizada' },
          { 'Enfoque': 'n8n autoalojado + Ollama', 'Configuración': 'Media (editor de flujo de trabajo visual)', 'Fiabilidad (30 días)': 'Alta (con monitoreo del servidor propio)', 'Privacidad': 'Local con autoalojamiento', 'Ideal para': 'Usuarios con muchos flujos de trabajo que reemplazan Zapier; lógica condicional' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: 'Configuración 1: IMAP + Python + Ollama',
        content:
          '**La configuración más scriptable: un script Python obtiene emails no leídos vía IMAP, elimina encabezados y HTML, pasa el texto plano a la API local de Ollama y guarda el borrador de respuesta.** Se ejecuta según un horario con cron o el Programador de tareas. Cincuenta líneas de Python, sin dependencias externas más allá del cliente Python de Ollama.',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'Pipeline local de borradores de email IMAP + Python + Ollama: 4 pasos desde obtener un email no leído hasta guardar el borrador, usando Qwen3 14B (9 GB de VRAM) a través de la API local de Ollama — sin llamadas a APIs en la nube.',
        promptExamples: [
          {
            label: 'Obtención de email IMAP + borrador Ollama (esqueleto Python)',
            text: 'import imaplib, email, os\nimport ollama\n\n# Conectar a IMAP\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# Obtener emails no leídos\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # Generar borrador con Ollama\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "Eres un asistente de email profesional. Escribe respuestas de negocios concisas y corteses. Adapta el nivel de formalidad al email entrante."},\n        {"role": "user", "content": f"Email de: {sender}\\nAsunto: {subject}\\n\\nCuerpo:\\n{body[:2000]}\\n\\nEscribe un borrador de respuesta."}\n    ])\n    draft = response["message"]["content"]\n    print(f"BORRADOR para: {subject}\\n{draft}\\n---")',
          },
        ],
        items: [
          '**Credenciales IMAP:** almacénalas en variables de entorno (`IMAP_HOST`, `IMAP_USER`, `IMAP_PASS`) — nunca en el código fuente. Usa una contraseña específica de aplicación en lugar de la contraseña principal de tu cuenta.',
          '**Truncamiento del cuerpo:** limita el cuerpo del email a 2.000–3.000 caracteres antes de pasarlo a Ollama. Los hilos de email largos rara vez añaden contexto útil para un borrador de respuesta y ralentizan la generación.',
          '**Eliminación de HTML:** si el cuerpo del email es HTML, usa `html.parser` o `BeautifulSoup` para extraer texto plano antes de pasarlo al modelo. Las etiquetas HTML degradan la calidad de la generación.',
          '**Programación:** en macOS/Linux, añade una entrada cron (`crontab -e`) para ejecutar el script cada 30 minutos. En Windows, usa el Programador de tareas con la ruta del intérprete de Python.',
          '**Almacenamiento de borradores:** escribe los borradores en un archivo de texto local por email (con nombre según la marca de tiempo + slug del asunto) o empuja a una carpeta IMAP "Borradores" usando `mail.append()`. Leer archivos de texto es más seguro para la revisión; los borradores IMAP te permiten enviar desde cualquier cliente.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No habilites el envío automático. Ningún LLM local produce borradores de email lo suficientemente fiables para enviar sin revisión humana. Los errores de tono, las fechas incorrectas, los hechos inventados y los errores de respuesta al hilo equivocado ocurren con regularidad. La automatización te ahorra tiempo de redacción; el paso de revisión es obligatorio.',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: 'Configuración 2: Thunderbird + Plugin Ollama Compose',
        content:
          '**Thunderbird con la extensión Ollama Compose es la opción sin código.** Instala Thunderbird, instala Ollama, descarga un modelo, instala la extensión — la generación de email está a un clic derecho en la ventana de composición.',
        items: [
          '**Instala Thunderbird** desde thunderbird.net. Disponible para macOS, Windows y Linux.',
          '**Instala Ollama y descarga un modelo:** `ollama pull qwen3:14b` (recomendado para el trabajo de email). Inicia `ollama serve`.',
          '**Instala la extensión Ollama Compose** desde el Gestor de complementos de Thunderbird. Busca "Ollama" o instala desde el archivo XPI del repositorio del proyecto.',
          '**Configura la extensión** para apuntar a `http://localhost:11434` y selecciona tu modelo (se recomienda Qwen3 14B o Phi-4 Mini).',
          '**En la ventana de composición:** haz clic derecho en el área del cuerpo y selecciona "Generar con Ollama" — la extensión envía el email original citado y la posición del cursor a Ollama e inserta el borrador de respuesta.',
          '**Cambio de modelo:** la extensión te permite cambiar de modelo desde la barra de herramientas de composición. Usa Phi-4 Mini para respuestas rápidas; cambia a Qwen3 14B o Llama 3.3 70B para correspondencia compleja o sensible.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Establece un prompt de sistema personalizado en la configuración de Ollama Compose. El prompt predeterminado es genérico; uno personalizado produce mejores resultados. Ejemplo: "Escribes respuestas de email profesionales para [Tu nombre], un [Tu rol] en [Empresa]. Las respuestas son concisas (menos de 150 palabras a menos que el contexto requiera más), cálidas de manera profesional y coinciden con la formalidad del email entrante. Nunca añadas avisos legales ni líneas de firma."',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: 'Configuración 3: n8n autoalojado + nodo Ollama',
        content:
          '**n8n autoalojado con un nodo Ollama local es la elección correcta para la automatización condicional: filtra emails por dominio del remitente, resume diariamente, genera seguimientos cuando terminan los eventos del calendario, o enruta diferentes tipos de emails a diferentes prompts de modelo — todo sin escribir código.**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: 'Flujo de trabajo n8n autoalojado para automatización de email y calendario: un disparador IMAP y un filtro de dominio enrutan los emails a un nodo Ollama local, mientras una rama paralela de calendario convierte eventos ICS o de Google Calendar en agendas de reunión — una sola instancia de Ollama, sin API en la nube.',
        items: [
          '**Instala n8n autoalojado:** `npm install -g n8n && n8n start` o `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`. El editor de flujos de trabajo se ejecuta en `http://localhost:5678`.',
          '**Añade el nodo Ollama:** en el editor de flujos de trabajo de n8n, busca el nodo "Ollama" (integrado a partir de n8n v1.2+). Apúntalo a `http://localhost:11434` y selecciona tu modelo.',
          '**Disparador IMAP:** añade un nodo de Email IMAP como disparador del flujo de trabajo — configúralo con tus credenciales IMAP. El nodo sondea los nuevos emails y pasa cada uno como objeto JSON al siguiente paso.',
          '**Lógica de filtrado:** añade un nodo IF para enrutar emails por dominio del remitente, palabras clave del asunto o hora del día. Enruta a diferentes prompts de Ollama según el tipo de email (emails de clientes, resúmenes de boletines, mensajes internos del equipo).',
          '**Integración con el calendario:** añade un nodo de Google Calendar (usando credenciales OAuth locales) o un lector de archivos ICS para obtener los próximos eventos. Pasa los detalles del evento al nodo Ollama para generar una agenda de reunión o una lista de verificación de preparación.',
          '**Opciones de salida:** escribe los borradores en un archivo local, empuja a Borradores IMAP, envía a través de un mensaje de Slack a ti mismo, o guarda en una página de Notion/Obsidian — todo a través de los nodos de salida de n8n.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'n8n autoalojado es el mejor punto de integración para los flujos de trabajo de calendario + email. El patrón típico: el disparador IMAP recibe un email de confirmación de reunión → extrae los detalles de la reunión → llama a la API de Google Calendar (OAuth local) para obtener los asistentes → pasa todo el contexto a Ollama → genera una agenda de reunión → guarda en una carpeta designada. Esto lleva unos 20 minutos de configuración en el editor visual de n8n.',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: 'Plantillas de prompts de triaje y revisión semanal',
        content:
          '**Dos prompts que gestionan las tareas de email más frecuentes: clasificación por email y revisión semanal de la bandeja de entrada.** Incorpóralos en cualquiera de las tres configuraciones (script Python, prompt de sistema de Thunderbird o cuerpo del nodo Ollama de n8n) — están diseñados deliberadamente para ser agnósticos al modelo.',
        promptExamples: [
          {
            label: 'Plantilla de prompt de triaje',
            text: 'Eres un asistente de triaje de email. Dado el siguiente email, clasifícalo en una de estas categorías y explica en una oración:\n- URGENTE: requiere respuesta en 4 horas\n- IMPORTANTE: requiere respuesta en 24 horas\n- INFO: leer para estar al tanto, no se necesita respuesta\n- PROMOCIONAL: marketing o boletín, se puede archivar\n- SPAM: no deseado, se recomienda filtrar\n\nEmail:\nDe: {sender}\nAsunto: {subject}\nCuerpo: {body[:1500]}\n\nFormato de salida:\nCategoría: [URGENTE|IMPORTANTE|INFO|PROMOCIONAL|SPAM]\nRazonamiento: [una oración]\nAcción sugerida: [responder | archivar | marcar | eliminar]',
          },
          {
            label: 'Plantilla de prompt de revisión semanal',
            text: 'Resume los siguientes 50 emails de la semana pasada en 3 secciones:\n1. Elementos URGENTES o IMPORTANTES que aún requieren acción (con remitente + resumen de 1 línea)\n2. Temas (p. ej., "La planificación del Q4 apareció en 12 emails esta semana")\n3. Personas a las que les debo respuesta (remitente + días pendientes)\n\nEmails (asunto + primeros 200 caracteres de cada cuerpo):\n[pega la lista de emails en lotes]\n\nFormato de salida: 3 secciones en markdown.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para el prompt de triaje, combínalo con el nodo IF de n8n para enrutar por categoría: URGENTE → notificación push, IMPORTANTE → guarda en la carpeta "necesita-respuesta", PROMOCIONAL → archivar automáticamente, SPAM → marcar para regla de filtro. La clasificación es lo que hace que la automatización posterior sea segura — sin ella, el pipeline no puede distinguir un seguimiento de cliente de un email de marketing.',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: 'Automatización del calendario con LLMs locales',
        content:
          '**La automatización del calendario con un LLM local funciona en dos modos: pasivo (exportar ICS, pasar a Ollama para resumen o generación de agenda) y activo (API de Google Calendar con credenciales OAuth locales para acceso en tiempo real a los eventos).** El modo pasivo es más sencillo; el modo activo habilita flujos de trabajo programados.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La automatización del calendario con IA local genera agendas de reuniones, resúmenes semanales y borradores de emails de seguimiento al pasar el contenido del archivo ICS exportado o los datos de la API de Google Calendar a Ollama — ningún dato del calendario toca una IA en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'La automatización de calendario más sencilla: exporta los eventos de tu semana como un archivo ICS desde cualquier aplicación de calendario (Google Calendar, Apple Calendar, Nextcloud), abre una terminal, pasa el contenido del ICS a Ollama con un prompt "genera una agenda de reunión para cada evento" y copia la salida en tus notas. Lleva 30 segundos y mantiene los datos de tu calendario de forma local.',
          },
        ],
        promptExamples: [
          {
            label: 'Plantilla de prompt ICS-a-Agenda',
            text: 'Aquí está mi calendario de la semana en formato ICS:\n\n[pega el contenido ICS]\n\nPara cada evento de reunión:\n1. Genera una agenda de reunión de 5 puntos basada en el título y la descripción del evento.\n2. Si se listan asistentes, indica quién debería liderar cada punto de la agenda.\n3. Si el evento no tiene descripción, genera una agenda genérica apropiada para una reunión de tipo [tipo de reunión].\n\nFormato como texto plano. Una sección por evento, separada por ---.',
          },
        ],
        items: [
          '**Exportación ICS (pasivo):** Google Calendar, Apple Calendar, Nextcloud y Outlook todos exportan archivos ICS. Exporta semanal o diariamente, pasa a Ollama a través de la terminal o un script, genera agendas o resúmenes.',
          '**API de Google Calendar (activo):** crea una credencial OAuth local en Google Cloud Console (proyecto personal), descarga el JSON de credenciales y usa la biblioteca Python `google-auth-oauthlib` para obtener eventos. El token OAuth se almacena localmente y las llamadas a la API van directamente a Google Calendar — sin intermediario de IA.',
          '**Prompt de generación de agenda de reunión:** título + asistentes + descripción → "Genera una agenda de reunión de 5 puntos con asignaciones de tiempo. Si la descripción de la reunión está vacía, sugiere una agenda genérica para una reunión de tipo [tipo de reunión]."',
          '**Prompt de resumen semanal:** todos los eventos de la semana → "Resume las reuniones de la semana en 3 oraciones. Destaca cualquier bloque consecutivo o reuniones inusualmente largas."',
          '**Borrador de email de seguimiento:** después de una reunión (activado por la hora de fin del evento) → "Escribe un email de seguimiento para la reunión \'[título]\' que agradezca a los asistentes y resuma los próximos pasos. Usa esta descripción del evento como contexto: [descripción]."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mantén los datos de tu calendario en texto plano donde sea posible. ICS es texto plano; es fácil pasarlo directamente a Ollama. Si usas un formato de calendario propietario o un sistema empresarial cerrado, primero expórtalo a ICS. El estándar ICS es universal y es compatible con todas las principales aplicaciones de calendario.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recomendaciones de modelos para tareas de email y calendario',
        content:
          '**Las tareas de automatización de email y calendario favorecen los modelos pequeños y rápidos sobre los grandes y potentes.** Redactar una respuesta de email de negocios, generar una agenda de reunión o resumir una bandeja de entrada no requiere Llama 3.3 70B — requiere un modelo que sea lo suficientemente rápido para sentirse interactivo y lo suficientemente coherente para producir texto empresarial utilizable. Para el panorama más amplio de modelos en todos los casos de uso, consulta [Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026).',
        columns: ['Tarea', 'Modelo recomendado', 'VRAM (Q4)', 'Por qué'],
        rows: [
          { 'Tarea': 'Redacción de borradores de respuesta de email', 'Modelo recomendado': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Por qué': 'Mejor equilibrio entre calidad de escritura empresarial y velocidad de generación; gestiona registros formal e informal' },
          { 'Tarea': 'Respuestas rápidas de una línea', 'Modelo recomendado': 'Phi-4 Mini', 'VRAM (Q4)': '~3 GB', 'Por qué': 'Opción más rápida; adecuada para confirmaciones simples y respuestas de programación' },
          { 'Tarea': 'Generación de agenda de reunión', 'Modelo recomendado': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Por qué': 'Bueno para la generación de listas estructuradas; el formato de agenda está dentro de sus capacidades' },
          { 'Tarea': 'Resumen de hilos de email largos', 'Modelo recomendado': 'Llama 3.3 70B o Qwen3 32B', 'VRAM (Q4)': '~42 GB / ~20 GB', 'Por qué': 'La adherencia al contexto largo importa para los hilos de múltiples mensajes; los modelos más pequeños pierden detalles' },
          { 'Tarea': 'Correspondencia sensible / legal', 'Modelo recomendado': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Por qué': 'Mejor calidad de razonamiento; vale el costo de hardware cuando los errores son de alto riesgo' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para la mayoría de las tareas de email en un sistema de 16 GB, Qwen3 14B es la opción predeterminada correcta. Descárgalo una vez con `ollama pull qwen3:14b` y úsalo para toda la automatización de email y calendario. Solo cambia a un modelo más grande cuando encuentres un tipo de tarea en el que la calidad de salida del 14B sea consistentemente inadecuada.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y seguridad',
        content:
          '**La ventaja de privacidad de la automatización local de email es real, pero requiere una configuración correcta.** Tres cosas pueden socavarla: la sincronización accidental en la nube de las credenciales IMAP, el contenido del email en registros accesibles para herramientas de terceros, y las instancias de n8n mal configuradas que exponen el flujo de trabajo a la red. Para el patrón más amplio de "reemplazar SaaS con IA local" en otras herramientas, consulta [Reemplazar Grammarly y Notion AI con modelos locales](/es/power-local-llm/replace-grammarly-notion-ai-with-local).',
        items: [
          '**Credenciales IMAP:** almacénalas en variables de entorno o en un gestor de secretos local (macOS Keychain, Linux `secret-tool`, Administrador de credenciales de Windows). Nunca las almacenes en el código fuente del script ni en un archivo que pueda sincronizarse con un repositorio en la nube.',
          '**Contenido del email en registros:** los scripts Python que imprimen el contenido del email en stdout/stderr escribirán datos de email en archivos de registro si se ejecutan a través de cron con el registro habilitado. Redirige los registros a `/dev/null` o usa un nivel de registro que excluya el contenido del email.',
          '**Exposición de red de n8n:** n8n autoalojado se vincula a `localhost:5678` de forma predeterminada, lo cual es solo local. Si lo expones a tu red doméstica o más allá (p. ej., para acceso móvil), añade autenticación y asegúrate de que la API de Ollama también esté restringida a localhost.',
          '**Contraseñas de aplicación:** configura una contraseña específica de aplicación dedicada para el acceso IMAP en Gmail, Outlook y Apple Mail en lugar de usar la contraseña principal de tu cuenta. Revócala inmediatamente si el script se ve comprometido.',
          '**Repositorios Git:** si controlas versiones de tus scripts de automatización, añade un `.gitignore` que excluya cualquier archivo `.env` que contenga credenciales. Nunca hagas commit de credenciales a un repositorio público o privado.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Riesgo de sincronización en la nube. Si tu directorio personal está sincronizado con iCloud, Google Drive o OneDrive, cualquier archivo `.env` o archivo de credenciales en un directorio sincronizado se subirá a la nube. Almacena las credenciales en un directorio explícitamente excluido de la sincronización en la nube, o usa el gestor de secretos nativo de tu sistema operativo.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Enviar borradores automáticamente sin revisión.** Ningún modelo local produce una salida lo suficientemente fiable para enviar sin revisión humana. Los errores de tono, las fechas incorrectas y los hechos inventados son comunes. Siempre lee antes de enviar.',
          '**Pasar hilos de email completos al modelo.** Los hilos largos contienen contexto redundante que desperdicia tokens y ralentiza la generación. Elimina los bloques de respuesta citados y pasa solo los últimos 2–3 mensajes.',
          '**Usar Llama 3.3 70B para todas las tareas de email.** Para la mayoría de la redacción de emails, Qwen3 14B es más rápido y usa menos VRAM. Reserva el 70B para correspondencia genuinamente compleja o de alto riesgo.',
          '**Almacenar credenciales IMAP en el script.** Las credenciales en el código fuente están a un `git push` de hacerse públicas. Usa variables de entorno.',
          '**No establecer un límite de palabras en los prompts de borrador.** Sin un límite de palabras, los modelos rellenan las respuestas de negocios con contexto innecesario, advertencias y cortesías. Añade "Responde en menos de 150 palabras" a cada prompt de email.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Ficha del modelo Qwen3 14B — [Alibaba Cloud / Equipo Qwen](https://qwenlm.github.io)',
          'Informe técnico Phi-4 Mini — [Microsoft Research](https://microsoft.com/research)',
          'Documentación de la API de Ollama — [Ollama](https://ollama.com/docs)',
          'Documentación de n8n autoalojado — [n8n.io](https://docs.n8n.io)',
          'RGPD Artículo 28 — obligaciones de procesamiento de datos del procesador — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona esto con Gmail?',
            a: 'Sí. Gmail admite acceso IMAP con una contraseña específica de aplicación. Habilita IMAP en la configuración de Gmail, genera una contraseña de aplicación en la configuración de seguridad de tu cuenta de Google y usa esas credenciales en el script IMAP. Gmail también expone la API de Gmail para un acceso más estructurado — útil para flujos de trabajo de n8n que necesitan gestión de etiquetas, operaciones de hilos o manejo de archivos adjuntos.',
          },
          {
            q: '¿Cuál es mejor para la automatización de email: IMAP + Python o n8n?',
            a: 'IMAP + Python es mejor si te sientes cómodo escribiendo y manteniendo un script y quieres control total. n8n es mejor si quieres lógica condicional (enrutar emails por remitente, hora o contenido), integración con el calendario o múltiples destinos de salida sin escribir código. Ambos usan Ollama como backend de modelo local; la diferencia es la capa de orquestación que los rodea.',
          },
          {
            q: '¿Puede un LLM local resumir toda una bandeja de entrada de email?',
            a: 'Sí, con advertencias. Un resumen semanal de la bandeja de entrada (50–100 emails) funciona bien: obtén los asuntos y los primeros 200 caracteres de cada cuerpo, concaténalos, pásalos a Qwen3 14B con un prompt "resumir por tema y urgencia". Para una bandeja de entrada completa con miles de emails, procesa el resumen en lotes (50 emails por llamada a la API) y agrega los resúmenes de los lotes. Pasar 1.000 emails en una sola llamada excede los límites de contexto y produce una salida poco fiable.',
          },
          {
            q: '¿Cuál es el mejor LLM local para redactar emails de negocios formales?',
            a: 'Qwen3 14B produce la mejor relación calidad-velocidad para la correspondencia de negocios formal en hardware de consumo. Gestiona el registro formal, los matices apropiados y los cierres profesionales de manera fiable. Para la correspondencia de muy alto riesgo (avisos legales, comunicaciones ejecutivas, negociaciones de contratos), usa Llama 3.3 70B — la diferencia de calidad es visible para temas complejos o sensibles.',
          },
          {
            q: '¿Funciona esto en Windows?',
            a: 'Sí. Ollama se ejecuta en Windows (descarga desde ollama.com). El script Python con IMAP se ejecuta en cualquier instalación de Python 3.8+ en Windows. Thunderbird y la extensión Ollama Compose son multiplataforma. n8n autoalojado se ejecuta en Windows a través de npm o Docker Desktop.',
          },
          {
            q: '¿Cómo manejo los hilos de email con múltiples respuestas anteriores?',
            a: 'Elimina el contenido citado antes de pasarlo al modelo. Usa la biblioteca `email` de Python para extraer solo la respuesta más reciente (la porción por encima del primer prefijo `>` o del divisor `--- Original Message ---`). Pasa solo los últimos 2–3 mensajes con un límite total de 3.000 caracteres. El modelo rara vez necesita el historial completo del hilo para generar una respuesta apropiada.',
          },
          {
            q: '¿Es esto compatible con el RGPD para uso empresarial?',
            a: 'El procesamiento local es más defendible bajo el RGPD que el procesamiento de IA en la nube para datos personales. Cuando los datos permanecen en tu máquina, no creas una nueva relación de procesador de datos (Artículo 28). Sin embargo, el cumplimiento del RGPD depende de tu función específica, la naturaleza de los datos y las políticas de protección de datos existentes de tu organización. Consulta a tu oficial de protección de datos antes de usar esta configuración para procesar datos personales de clientes o empleados.',
          },
          {
            q: '¿Puedo usar esto para responder en nombre de otra persona?',
            a: 'Técnicamente sí — el script puede configurarse para acceder a cualquier cuenta IMAP para la que tengas credenciales. Legal y éticamente, generar respuestas de email en nombre de otra persona sin su conocimiento plantea problemas importantes de consentimiento e impersonación. Usa esta automatización solo para cuentas y correspondencia de las que seas personalmente responsable.',
          },
          {
            q: '¿Puedo activar la IA en emails entrantes?',
            a: 'Sí, a través de tres patrones. (1) Python + IMAP + cron: programa el script para ejecutarse cada 30 minutos, obtén los nuevos emails no leídos, genera borradores. (2) Nodo disparador IMAP de n8n: sondea cada 1–5 minutos, activa el flujo de trabajo en cada nuevo email de inmediato. (3) Reglas de filtro de Thunderbird: usa una acción "Ejecutar un script" que llame a Ollama a través de curl. El enfoque de n8n es el más fiable para el triaje en tiempo real; cron es más sencillo si una latencia de 30 minutos es aceptable.',
          },
          {
            q: '¿Puedo sincronizar la IA de email entre dispositivos?',
            a: 'Los borradores pueden sincronizarse a través de tu carpeta IMAP Borradores existente — escribe el borrador generado por IA en la carpeta IMAP "Borradores" usando `mail.append()`, y cualquier dispositivo con acceso IMAP (teléfono, tableta, segundo portátil) lo verá al instante. El backend de Ollama en sí no se sincroniza — se ejecuta en la máquina en la que lo configuraste. Los dispositivos móviles necesitan acceso de red a la máquina doméstica que ejecuta Ollama (IP de LAN o Tailscale). Plan: el servidor doméstico ejecuta Ollama + automatización; todos los dispositivos leen los borradores de la carpeta IMAP Borradores. Una sola generación de IA, revisión y envío en múltiples dispositivos.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reemplazar Zapier con agentes de IA locales](/es/power-local-llm/replace-zapier-with-local-ai-agents) — automatización de flujos de trabajo local usando n8n, Ollama y Python para la automatización de procesos de negocio.',
          '[Agentes de IA locales para flujos de trabajo empresariales: cumplimiento en la UE](/es/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexto de RGPD, Ley de IA de la UE y cumplimiento para desplegar IA local en entornos empresariales.',
          '[RAG local para datos empresariales privados](/es/power-local-llm/local-rag-for-private-business-data) — cómo configurar Q&A de documentos sobre datos empresariales privados sin APIs en la nube.',
          '[Agentes de IA locales con MCP 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026) — MCP (Model Context Protocol) para conectar LLMs locales a clientes de email, calendarios y otras herramientas como contextos de agente.',
          '[Agentes locales autónomos: lo que realmente funciona](/es/power-local-llm/autonomous-local-agents-actually-work) — evaluación honesta de lo que los agentes de IA locales pueden y no pueden hacer en 2026.',
          '[Reemplazar Grammarly y Notion AI con modelos locales](/es/power-local-llm/replace-grammarly-notion-ai-with-local) — patrón adyacente de sustitución de SaaS para herramientas de escritura, complementando la sustitución de email/calendario aquí.',
          '[Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026) — autoridad de modelo más amplia para elegir el modelo de chat detrás de cualquiera de estas tres configuraciones.',
          '[Prompting Zero-Shot vs Few-Shot](/es/prompt-engineering/zero-shot-vs-few-shot) — cuándo incluir emails de ejemplo en el prompt y cuándo omitirlos para una mejor generalización.',
          '[Directorio de software de LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — listados de directorio para Ollama, n8n, Thunderbird y otros componentes en esta pila.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'IA local para email y calendario: automatización sin API en la nube (2026)',
      description: 'Cómo automatizar la redacción de emails, el resumen de la bandeja de entrada y la gestión del calendario con un LLM local. Ollama, integración IMAP y automatización de comunicaciones con privacidad.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-llm-email-and-calendar-automation',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},



  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'IA local para e-mail e calendário: triagem sem API na nuvem (2026)',
    seoTitle: 'Triagem local de e-mail e calendário com IA 2026',
    intro:
      'LLMs locais podem redigir respostas de e-mail, resumir caixas de entrada, gerar pautas de reunião e classificar eventos do calendário — tudo sem enviar suas mensagens a uma API na nuvem. Este guia cobre as arquiteturas práticas: automação IMAP local com Ollama, clientes de e-mail open source com plugins de IA local, e os fundamentos de privacidade para manter os dados de comunicação no dispositivo.',
    metaDescription:
      'Como automatizar a redação de e-mails, o resumo da caixa de entrada e a gestão de calendário com um LLM local. Ollama, integração IMAP e automação de comunicação com privacidade em primeiro lugar.',
    twitterDescription:
      'Automação de e-mail com LLM local: redija respostas, resuma caixas de entrada, gere pautas de reunião — tudo local, sem API na nuvem. Guia de configuração para fluxos de trabalho Ollama + IMAP.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      'Profissionais, donos de pequenos negócios e pessoas preocupadas com privacidade que querem automatizar a redação de e-mails, o resumo da caixa de entrada e a gestão de calendário sem enviar dados de comunicação a serviços de IA na nuvem.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'automação de e-mail com LLM local',
    targetKeywords: [
      'automação e-mail llm local',
      'redação e-mail ollama',
      'resumo caixa de entrada ia local',
      'automação calendário llm local',
      'assistente e-mail ia privado',
      'fluxo de trabalho imap llm local',
    ],
    leadAnswerBlock:
      '**A automação de e-mail com LLM local funciona melhor como um pipeline de dois passos: o cliente de e-mail ou o script IMAP busca a mensagem bruta, remove os cabeçalhos e passa o corpo em texto plano para o Ollama via sua API; o modelo gera um rascunho de resposta ou resumo que você revisa antes de enviar. Nenhum conteúdo de e-mail sai da sua máquina. As três configurações mais práticas em 2026 são: (1) um script Python com IMAP que chama o Ollama em um agendamento — 50 linhas, totalmente automatizável; (2) Thunderbird com o plugin Ollama Compose — baseado em GUI, sem código; (3) n8n auto-hospedado com um nó Ollama local — construtor de fluxo de trabalho visual para usuários que querem lógica condicional, filtragem em múltiplos passos e integração com calendário sem programar. Para a automação de calendário, a mesma chamada à API do Ollama funciona com arquivos ICS exportados ou a API do Google Calendar com credenciais locais — gerando pautas de reunião, resumindo a semana e redigindo e-mails de acompanhamento a partir dos detalhes do evento.**',
    quickAnswerTop: {
      pt: {
        question: 'Como automatizo a redação de e-mails com um LLM local sem enviar meus e-mails para a nuvem?',
        answer:
          'A configuração mais rápida de automação de e-mail local é um script Python com IMAP que busca e-mails não lidos, remove cabeçalhos, passa o corpo em texto plano para a API local do Ollama e salva o rascunho de resposta em um arquivo local ou na pasta Rascunhos. Menos de 50 linhas de Python. Nenhum dado de e-mail sai da sua máquina. Para uma alternativa com GUI, o Thunderbird com a extensão Ollama Compose permite clicar com o botão direito em qualquer e-mail e gerar uma resposta sem sair do cliente. Para automação de fluxos de trabalho, o n8n auto-hospedado com um nó Ollama local lida com lógica condicional, filtragem em múltiplos passos e integração com calendário sem dependências na nuvem.',
        bullets: [
          'IMAP + Python + Ollama: script de 50 linhas, roda em um agendamento, salva rascunhos localmente — a configuração mais simples.',
          'Thunderbird + plugin Ollama Compose: baseado em GUI, sem código, clique com o botão direito para gerar resposta no cliente de e-mail.',
          'n8n auto-hospedado + nó Ollama: construtor de fluxo de trabalho visual para lógica condicional, filtragem e integração com calendário.',
          'Automação de calendário: exporte o arquivo ICS ou use a API do Google Calendar localmente para gerar pautas de reunião e rascunhos de acompanhamento.',
          'Melhor modelo para e-mail: Qwen3 14B ou Phi-4 Mini — geração rápida, baixo uso de VRAM, qualidade adequada para correspondência de negócios.',
          'Privacidade: as credenciais IMAP e o conteúdo do e-mail nunca saem da sua máquina; sem chamadas à API na nuvem em nenhuma dessas configurações.',
          'A revisão antes de enviar é obrigatória: os modelos locais cometem erros factuais e de tom; trate toda a saída como um primeiro rascunho.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Por que usar um LLM local para e-mail?', anchor: '#why-local' },
      { label: 'Comparação de abordagens', anchor: '#approach-comparison' },
      { label: 'Configuração 1: IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: 'Configuração 2: Thunderbird + Plugin Ollama', anchor: '#thunderbird' },
      { label: 'Configuração 3: n8n auto-hospedado + Ollama', anchor: '#n8n' },
      { label: 'Modelos de prompt de triagem e revisão semanal', anchor: '#triage-prompts' },
      { label: 'Automação de calendário', anchor: '#calendar' },
      { label: 'Recomendações de modelos', anchor: '#models' },
      { label: 'Privacidade e segurança', anchor: '#privacy' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Três configurações cobrem 95% dos casos de uso de automação local de e-mail.** IMAP + Python + Ollama (50 linhas, totalmente scriptável), Thunderbird + Ollama Compose (GUI, sem código), n8n auto-hospedado + nó Ollama (fluxo de trabalho visual, lógica condicional). Escolha a opção mais simples que se encaixe no seu fluxo de trabalho.',
          '**Modelos menores são melhores para e-mail do que para trabalho criativo.** A redação de e-mail exige coerência, não criatividade. Qwen3 14B e Phi-4 Mini geram rascunhos de resposta de qualidade empresarial em 2–5 segundos em um sistema de 16 GB. Llama 3.3 70B é exagero para a maioria das tarefas de e-mail.',
          '**A revisão antes de enviar não é opcional.** Os modelos locais cometem erros de tom (formal demais, informal demais), erros factuais (horário de reunião errado, nome de destinatário errado) e ocasionalmente inventam conteúdo de contexto não relacionado. Sempre leia o rascunho antes de enviar.',
          '**Nenhum conteúdo de e-mail sai da sua máquina em nenhuma dessas configurações.** As conexões IMAP vão para o seu servidor de e-mail, não para uma IA na nuvem. A API do Ollama é local. O n8n auto-hospedado roda na sua máquina. A vantagem de privacidade é genuína.',
          '**A automação de calendário funciona melhor com ICS exportado ou uma chamada local à API do Google Calendar.** Exporte os eventos da semana para um arquivo ICS, passe-o para o Ollama e peça que ele gere uma pauta de reunião, uma lista de preparação ou um e-mail de resumo semanal para a sua equipe.',
          '**As credenciais IMAP são sensíveis.** Armazene-as em variáveis de ambiente ou em um gerenciador de segredos local, nunca no código-fonte do script. Use senhas de aplicativo específicas em vez da senha principal da sua conta.',
          '**n8n auto-hospedado é a escolha certa para lógica condicional.** Se você quer "resumir todos os e-mails de [domínio] diariamente" ou "gerar um e-mail de acompanhamento quando um evento do calendário termina", o construtor de fluxo de trabalho visual do n8n lida com isso sem Python personalizado.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Configurações cobertas:** IMAP + Python + Ollama, Thunderbird + Ollama Compose, n8n auto-hospedado + nó Ollama.',
          '**Melhor modelo para e-mail:** Qwen3 14B (rápido, baixo uso de VRAM, qualidade empresarial adequada) ou Phi-4 Mini (o mais rápido, 4 GB VRAM).',
          '**VRAM necessária:** Qwen3 14B em Q4 = ~9 GB; Phi-4 Mini em Q4 = ~3 GB; Llama 3.3 70B em Q4 = ~42 GB.',
          '**Formatos de e-mail suportados:** texto plano IMAP (MIME decodificado), arquivos EML, API do Gmail (credenciais locais), Outlook via IMAP.',
          '**Formatos de calendário:** exportação ICS (universal), API do Google Calendar (OAuth local), Nextcloud Calendar (CalDAV).',
          '**Complexidade do script:** IMAP + Python = ~50 linhas; fluxo de trabalho n8n = visual, sem código; Thunderbird = apenas instalação do plugin.',
          '**Privacidade:** nenhum dado de e-mail é enviado a qualquer API na nuvem em nenhuma configuração; o IMAP conecta apenas ao seu servidor de e-mail.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Por que usar um LLM local para automação de e-mail?',
        content:
          '**A razão central é a privacidade: cada e-mail que você cola em um assistente de IA na nuvem é potencialmente registrado, usado para treinamento e sujeito à política de retenção de dados daquele provedor.** A correspondência de negócios, as comunicações com clientes e o e-mail pessoal contêm informações que você não quer em um conjunto de dados de treinamento de terceiros. Um LLM local processa seus e-mails no seu hardware, retorna um rascunho e não retém nada.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A automação de e-mail com LLM local mantém todo o conteúdo do e-mail na sua máquina — nenhuma API na nuvem recebe suas mensagens, nenhum terceiro registra ou treina com a sua correspondência, e a geração de rascunhos funciona sem conexão com a internet.',
          },
          {
            type: 'plain-terms',
            text: 'Quando você cola um e-mail no ChatGPT ou no Claude.ai para pedir um rascunho de resposta, esse e-mail é processado nos servidores da OpenAI ou da Anthropic. Para a maioria das pessoas, na maior parte do tempo, isso é aceitável. Para correspondência de negócios, detalhes de clientes, discussões de contrato ou qualquer comunicação que inclua informação sensível, não é. Um LLM local configurado por meio do Ollama processa o mesmo e-mail no seu computador e nunca o envia a lugar nenhum.',
          },
        ],
        items: [
          '**Soberania de dados:** o conteúdo do e-mail, a informação do remetente e o contexto do thread permanecem na sua máquina. Nenhuma política de retenção na nuvem se aplica.',
          '**Operação offline:** uma vez que o Ollama esteja rodando e o modelo baixado, a redação de e-mail funciona sem acesso à internet.',
          '**Sem limites de uso:** as APIs de IA na nuvem impõem limites de taxa e tetos de tokens. Uma configuração local não tem custo por requisição nem limite diário.',
          '**Conformidade regulatória:** o GDPR, a HIPAA e os requisitos de privilégio profissional podem proibir o envio de comunicações de clientes a uma IA de terceiros. O processamento local elimina essa preocupação.',
          '**Velocidade para tarefas curtas:** um modelo pequeno (Qwen3 14B, Phi-4 Mini) gera um rascunho de e-mail de negócios em 2–5 segundos em hardware de consumidor — mais rápido que a maioria das idas e voltas à nuvem para prompts curtos.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A automação local de e-mail não é um substituto para um cliente de e-mail — é um assistente de redação que se encaixa no seu fluxo de trabalho existente. Você ainda usa Thunderbird, Apple Mail ou Gmail para enviar; o LLM local gera texto que você revisa, edita e envia a partir do seu cliente existente.',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: 'Comparação de abordagens',
        content:
          '**As três configurações diferem em cinco eixos que importam para a maioria dos usuários: dificuldade de configuração, confiabilidade em 30 dias, postura de privacidade e o perfil de usuário que cada uma atende.** Escolha a opção mais simples que cobre o seu fluxo de trabalho em vez da mais poderosa.',
        columns: ['Abordagem', 'Configuração', 'Confiabilidade (30 dias)', 'Privacidade', 'Melhor para'],
        rows: [
          { 'Abordagem': 'Thunderbird + Ollama Compose', 'Configuração': 'Fácil', 'Confiabilidade (30 dias)': 'Alta (sem processo em segundo plano)', 'Privacidade': 'Apenas local', 'Melhor para': 'Profissionais individuais, triagem diária, usuários de GUI' },
          { 'Abordagem': 'Python + IMAP + cron', 'Configuração': 'Difícil (50 LOC + agendamento)', 'Confiabilidade (30 dias)': 'Muito alta (scriptável, observável)', 'Privacidade': 'Apenas local', 'Melhor para': 'Desenvolvedores que querem controle total + lógica personalizada' },
          { 'Abordagem': 'n8n auto-hospedado + Ollama', 'Configuração': 'Média (editor de fluxo de trabalho visual)', 'Confiabilidade (30 dias)': 'Alta (com monitoramento do servidor próprio)', 'Privacidade': 'Local com auto-hospedagem', 'Melhor para': 'Usuários com muitos fluxos de trabalho substituindo o Zapier; lógica condicional' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: 'Configuração 1: IMAP + Python + Ollama',
        content:
          '**A configuração mais scriptável: um script Python busca e-mails não lidos via IMAP, remove cabeçalhos e HTML, passa o corpo em texto plano para a API local do Ollama e salva o rascunho de resposta.** Roda em um agendamento com cron ou o Agendador de Tarefas. Cinquenta linhas de Python, sem dependências externas além do cliente Python do Ollama.',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'Pipeline local de rascunhos de e-mail IMAP + Python + Ollama: 4 etapas desde buscar um e-mail não lido até salvar o rascunho, usando Qwen3 14B (9 GB de VRAM) via API local do Ollama — sem chamadas a APIs na nuvem.',
        promptExamples: [
          {
            label: 'Busca de e-mail IMAP + rascunho Ollama (esqueleto Python)',
            text: 'import imaplib, email, os\nimport ollama\n\n# Conectar ao IMAP\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# Buscar e-mails não lidos\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # Gerar rascunho com Ollama\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "Você é um assistente de e-mail profissional. Escreva respostas de negócios concisas e educadas. Adeque o nível de formalidade ao e-mail recebido."},\n        {"role": "user", "content": f"E-mail de: {sender}\\nAssunto: {subject}\\n\\nCorpo:\\n{body[:2000]}\\n\\nEscreva um rascunho de resposta."}\n    ])\n    draft = response["message"]["content"]\n    print(f"RASCUNHO para: {subject}\\n{draft}\\n---")',
          },
        ],
        items: [
          '**Credenciais IMAP:** armazene em variáveis de ambiente (`IMAP_HOST`, `IMAP_USER`, `IMAP_PASS`) — nunca no código-fonte. Use uma senha específica de aplicativo em vez da senha principal da sua conta.',
          '**Truncamento do corpo:** limite o corpo do e-mail a 2.000–3.000 caracteres antes de passar para o Ollama. Threads de e-mail longos raramente adicionam contexto útil para um rascunho de resposta e deixam a geração mais lenta.',
          '**Remoção de HTML:** se o corpo do e-mail for HTML, use `html.parser` ou `BeautifulSoup` para extrair texto plano antes de passar ao modelo. As tags HTML degradam a qualidade da geração.',
          '**Agendamento:** no macOS/Linux, adicione uma entrada cron (`crontab -e`) para rodar o script a cada 30 minutos. No Windows, use o Agendador de Tarefas com o caminho do interpretador Python.',
          '**Armazenamento de rascunhos:** escreva os rascunhos em um arquivo de texto local por e-mail (nomeado por carimbo de data/hora + slug do assunto) ou empurre para uma pasta IMAP "Rascunhos" usando `mail.append()`. Ler arquivos de texto é mais seguro para revisão; os rascunhos IMAP permitem enviar de qualquer cliente.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não habilite o envio automático. Nenhum LLM local produz rascunhos de e-mail confiáveis o suficiente para enviar sem revisão humana. Erros de tom, datas erradas, fatos inventados e erros de responder ao thread errado ocorrem com regularidade. A automação economiza o seu tempo de redação; o passo de revisão é obrigatório.',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: 'Configuração 2: Thunderbird + Plugin Ollama Compose',
        content:
          '**Thunderbird com a extensão Ollama Compose é a opção sem código.** Instale o Thunderbird, instale o Ollama, baixe um modelo, instale a extensão — a geração de e-mail está a um clique direito de distância na janela de composição.',
        items: [
          '**Instale o Thunderbird** em thunderbird.net. Disponível para macOS, Windows e Linux.',
          '**Instale o Ollama e baixe um modelo:** `ollama pull qwen3:14b` (recomendado para trabalho de e-mail). Inicie `ollama serve`.',
          '**Instale a extensão Ollama Compose** pelo Gerenciador de Complementos do Thunderbird. Busque "Ollama" ou instale a partir do arquivo XPI da extensão do repositório do projeto.',
          '**Configure a extensão** para apontar para `http://localhost:11434` e selecione o seu modelo (Qwen3 14B ou Phi-4 Mini recomendados).',
          '**Na janela de composição:** clique com o botão direito na área do corpo e selecione "Generate with Ollama" — a extensão envia o e-mail original citado e a posição do cursor para o Ollama e insere o rascunho de resposta.',
          '**Troca de modelo:** a extensão permite trocar de modelo a partir da barra de ferramentas de composição. Use Phi-4 Mini para respostas rápidas; mude para Qwen3 14B ou Llama 3.3 70B para correspondência complexa ou sensível.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Defina um system prompt personalizado nas configurações do Ollama Compose. O prompt padrão é genérico; um personalizado produz melhores resultados. Exemplo: "Você escreve respostas de e-mail profissionais para [Seu nome], um [Seu cargo] na [Empresa]. As respostas são concisas (menos de 150 palavras, a menos que o contexto exija mais), profissionalmente calorosas e combinam com a formalidade do e-mail recebido. Nunca adicione avisos legais ou linhas de assinatura."',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: 'Configuração 3: n8n auto-hospedado + nó Ollama',
        content:
          '**n8n auto-hospedado com um nó Ollama local é a escolha certa para automação condicional: filtre e-mails por domínio do remetente, resuma diariamente, gere acompanhamentos quando os eventos do calendário terminam, ou encaminhe diferentes tipos de e-mail para diferentes prompts de modelo — tudo sem escrever código.**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: 'Fluxo de trabalho n8n auto-hospedado para automação de e-mail e calendário: um gatilho IMAP e um filtro de domínio direcionam e-mails para um nó Ollama local, enquanto um ramo paralelo de calendário transforma eventos ICS ou do Google Calendar em pautas de reunião — uma única instância do Ollama, sem API na nuvem.',
        items: [
          '**Instale o n8n auto-hospedado:** `npm install -g n8n && n8n start` ou `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`. O editor de fluxos de trabalho roda em `http://localhost:5678`.',
          '**Adicione o nó Ollama:** no editor de fluxos de trabalho do n8n, busque o nó "Ollama" (integrado a partir do n8n v1.2+). Aponte-o para `http://localhost:11434` e selecione o seu modelo.',
          '**Gatilho IMAP:** adicione um nó de E-mail IMAP como gatilho do fluxo de trabalho — configure com as suas credenciais IMAP. O nó faz polling de novos e-mails e passa cada um como objeto JSON para o próximo passo.',
          '**Lógica de filtragem:** adicione um nó IF para encaminhar e-mails por domínio do remetente, palavras-chave do assunto ou hora do dia. Encaminhe para diferentes prompts do Ollama conforme o tipo de e-mail (e-mails de clientes, resumos de newsletters, mensagens internas da equipe).',
          '**Integração com calendário:** adicione um nó do Google Calendar (usando credenciais OAuth locais) ou um leitor de arquivos ICS para obter os próximos eventos. Passe os detalhes do evento para o nó Ollama para gerar uma pauta de reunião ou uma lista de preparação.',
          '**Opções de saída:** escreva os rascunhos em um arquivo local, empurre para os Rascunhos IMAP, envie por uma mensagem do Slack para você mesmo, ou salve em uma página do Notion/Obsidian — tudo pelos nós de saída do n8n.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O n8n auto-hospedado é o melhor ponto de integração para fluxos de trabalho de calendário + e-mail. O padrão típico: o gatilho IMAP recebe um e-mail de confirmação de reunião → extrai os detalhes da reunião → chama a API do Google Calendar (OAuth local) para buscar os participantes → passa todo o contexto para o Ollama → gera uma pauta de reunião → salva em uma pasta designada. Isso leva cerca de 20 minutos para montar no editor visual do n8n.',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: 'Modelos de prompt de triagem e revisão semanal',
        content:
          '**Dois prompts que lidam com as tarefas de e-mail mais frequentes: classificação de triagem por e-mail e uma revisão semanal da caixa de entrada.** Incorpore-os em qualquer uma das três configurações (script Python, system prompt do Thunderbird ou corpo do nó Ollama do n8n) — eles são deliberadamente agnósticos ao modelo.',
        promptExamples: [
          {
            label: 'Modelo de prompt de triagem',
            text: 'Você é um assistente de triagem de e-mail. Dado o seguinte e-mail, classifique-o em uma destas categorias e explique em uma frase:\n- URGENTE: requer resposta em 4 horas\n- IMPORTANTE: requer resposta em 24 horas\n- INFO: ler para ficar a par, sem necessidade de resposta\n- PROMOCIONAL: marketing ou newsletter, pode ser arquivado\n- SPAM: indesejado, recomendar filtragem\n\nE-mail:\nDe: {sender}\nAssunto: {subject}\nCorpo: {body[:1500]}\n\nFormato de saída:\nCategoria: [URGENTE|IMPORTANTE|INFO|PROMOCIONAL|SPAM]\nRaciocínio: [uma frase]\nAção sugerida: [responder | arquivar | sinalizar | excluir]',
          },
          {
            label: 'Modelo de prompt de revisão semanal',
            text: 'Resuma os seguintes 50 e-mails da semana passada em 3 seções:\n1. Itens URGENTES ou IMPORTANTES que ainda precisam de ação (com remetente + resumo de 1 linha)\n2. Temas (p. ex., "O planejamento do Q4 apareceu em 12 e-mails esta semana")\n3. Pessoas a quem devo respostas (remetente + dias pendentes)\n\nE-mails (assunto + primeiros 200 caracteres de cada corpo):\n[cole a lista de e-mails em lotes]\n\nFormato de saída: 3 seções em markdown.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para o prompt de triagem, combine-o com o nó IF do n8n para encaminhar por categoria: URGENTE → notificação push, IMPORTANTE → salvar na pasta "precisa-responder", PROMOCIONAL → arquivar automaticamente, SPAM → sinalizar para regra de filtro. A classificação é o que torna a automação posterior segura — sem ela, o pipeline não consegue distinguir um acompanhamento de cliente de um e-mail de marketing.',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: 'Automação de calendário com LLMs locais',
        content:
          '**A automação de calendário com um LLM local funciona em dois modos: passivo (exportar ICS, passar para o Ollama para resumo ou geração de pauta) e ativo (API do Google Calendar com credenciais OAuth locais para acesso em tempo real aos eventos).** O modo passivo é mais simples; o modo ativo habilita fluxos de trabalho agendados.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A automação de calendário com LLM local gera pautas de reunião, resumos da semana e rascunhos de e-mail de acompanhamento ao passar o conteúdo do arquivo ICS exportado ou os dados da API do Google Calendar para o Ollama — nenhum dado de calendário toca uma IA na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'A automação de calendário mais simples: exporte os eventos da sua semana como um arquivo ICS de qualquer app de calendário (Google Calendar, Apple Calendar, Nextcloud), abra um terminal, passe o conteúdo do ICS para o Ollama com um prompt "gere uma pauta de reunião para cada evento" e copie a saída para as suas notas. Leva 30 segundos e mantém os dados do seu calendário locais.',
          },
        ],
        promptExamples: [
          {
            label: 'Modelo de prompt ICS-para-Pauta',
            text: 'Aqui está meu calendário da semana em formato ICS:\n\n[cole o conteúdo ICS]\n\nPara cada evento de reunião:\n1. Gere uma pauta de reunião de 5 pontos baseada no título e na descrição do evento.\n2. Se houver participantes listados, indique quem deve liderar cada item da pauta.\n3. Se o evento não tiver descrição, gere uma pauta genérica apropriada para uma reunião do tipo [tipo de reunião].\n\nFormate como texto plano. Uma seção por evento, separada por ---.',
          },
        ],
        items: [
          '**Exportação ICS (passivo):** Google Calendar, Apple Calendar, Nextcloud e Outlook todos exportam arquivos ICS. Exporte semanal ou diariamente, passe para o Ollama via terminal ou um script, gere pautas ou resumos.',
          '**API do Google Calendar (ativo):** crie uma credencial OAuth local no Google Cloud Console (projeto pessoal), baixe o JSON de credenciais e use a biblioteca Python `google-auth-oauthlib` para buscar eventos. O token OAuth é armazenado localmente e as chamadas à API vão direto ao Google Calendar — sem intermediário de IA.',
          '**Prompt de geração de pauta de reunião:** título + participantes + descrição → "Gere uma pauta de reunião de 5 itens com alocações de tempo. Se a descrição da reunião estiver vazia, sugira uma pauta genérica para uma reunião do tipo [tipo de reunião]."',
          '**Prompt de resumo da semana:** todos os eventos da semana → "Resuma as reuniões da semana em 3 frases. Destaque quaisquer blocos consecutivos ou reuniões excepcionalmente longas."',
          '**Rascunho de e-mail de acompanhamento:** após uma reunião (acionado pelo horário de fim do evento) → "Escreva um e-mail de acompanhamento para a reunião \'[título]\' que agradeça aos participantes e resuma os próximos passos. Use esta descrição do evento como contexto: [descrição]."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mantenha os dados do seu calendário em texto plano sempre que possível. O ICS é texto plano; é fácil passá-lo diretamente para o Ollama. Se você usa um formato de calendário proprietário ou um sistema empresarial fechado, exporte para ICS primeiro. O padrão ICS é universal e suportado por todos os principais aplicativos de calendário.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recomendações de modelos para tarefas de e-mail e calendário',
        content:
          '**As tarefas de automação de e-mail e calendário favorecem modelos pequenos e rápidos em vez de grandes e capazes.** Redigir uma resposta de e-mail de negócios, gerar uma pauta de reunião ou resumir uma caixa de entrada não exige o Llama 3.3 70B — exige um modelo rápido o suficiente para parecer interativo e coerente o suficiente para produzir texto empresarial utilizável. Para o panorama mais amplo de modelos em todos os casos de uso, veja [Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026).',
        columns: ['Tarefa', 'Modelo recomendado', 'VRAM (Q4)', 'Por quê'],
        rows: [
          { 'Tarefa': 'Redação de rascunhos de resposta de e-mail', 'Modelo recomendado': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Por quê': 'Melhor equilíbrio entre qualidade de escrita empresarial e velocidade de geração; lida com registros formal e informal' },
          { 'Tarefa': 'Respostas rápidas de uma linha', 'Modelo recomendado': 'Phi-4 Mini', 'VRAM (Q4)': '~3 GB', 'Por quê': 'Opção mais rápida; adequada para confirmações simples e respostas de agendamento' },
          { 'Tarefa': 'Geração de pauta de reunião', 'Modelo recomendado': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'Por quê': 'Bom em geração de listas estruturadas; o formato de pauta está dentro de suas capacidades' },
          { 'Tarefa': 'Resumo de threads de e-mail longos', 'Modelo recomendado': 'Llama 3.3 70B ou Qwen3 32B', 'VRAM (Q4)': '~42 GB / ~20 GB', 'Por quê': 'A aderência ao contexto longo importa para threads de múltiplas mensagens; modelos menores perdem detalhes' },
          { 'Tarefa': 'Correspondência sensível / jurídica', 'Modelo recomendado': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'Por quê': 'Melhor qualidade de raciocínio; vale o custo de hardware quando os erros são de alto risco' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para a maioria das tarefas de e-mail em um sistema de 16 GB, o Qwen3 14B é o padrão certo. Baixe-o uma vez com `ollama pull qwen3:14b` e use-o para toda a automação de e-mail e calendário. Só mude para um modelo maior quando encontrar um tipo de tarefa em que a qualidade de saída do 14B seja consistentemente inadequada.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e segurança',
        content:
          '**A vantagem de privacidade da automação local de e-mail é real, mas exige configuração correta.** Três coisas podem comprometê-la: a sincronização acidental na nuvem das credenciais IMAP, o conteúdo do e-mail em logs acessíveis a ferramentas de terceiros, e instâncias de n8n mal configuradas que expõem o fluxo de trabalho à rede. Para o padrão mais amplo de "substituir SaaS por IA local" em outras ferramentas, veja [Substitua Grammarly e Notion AI por modelos locais](/pt/power-local-llm/replace-grammarly-notion-ai-with-local).',
        items: [
          '**Credenciais IMAP:** armazene em variáveis de ambiente ou em um gerenciador de segredos local (macOS Keychain, Linux `secret-tool`, Gerenciador de Credenciais do Windows). Nunca as armazene no código-fonte do script nem em um arquivo que possa ser sincronizado a um repositório na nuvem.',
          '**Conteúdo do e-mail em logs:** scripts Python que imprimem o conteúdo do e-mail em stdout/stderr escreverão dados de e-mail em arquivos de log se rodados via cron com logging habilitado. Redirecione os logs para `/dev/null` ou use um nível de log que exclua o conteúdo do e-mail.',
          '**Exposição de rede do n8n:** o n8n auto-hospedado vincula-se a `localhost:5678` por padrão, o que é apenas local. Se você o expõe à sua rede doméstica ou além (p. ex., para acesso móvel), adicione autenticação e garanta que a API do Ollama também esteja restrita a localhost.',
          '**Senhas de aplicativo:** configure uma senha específica de aplicativo dedicada para o acesso IMAP no Gmail, Outlook e Apple Mail em vez de usar a senha principal da sua conta. Revogue-a imediatamente se o script for comprometido.',
          '**Repositórios Git:** se você versiona seus scripts de automação, adicione um `.gitignore` que exclua qualquer arquivo `.env` contendo credenciais. Nunca faça commit de credenciais a um repositório público ou privado.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Risco de sincronização na nuvem. Se o seu diretório pessoal está sincronizado com iCloud, Google Drive ou OneDrive, qualquer arquivo `.env` ou arquivo de credenciais em um diretório sincronizado será enviado para a nuvem. Armazene as credenciais em um diretório explicitamente excluído da sincronização na nuvem, ou use o gerenciador de segredos nativo do seu sistema operacional.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Enviar rascunhos automaticamente sem revisão.** Nenhum modelo local produz saída confiável o suficiente para enviar sem revisão humana. Erros de tom, datas erradas e fatos inventados são comuns. Sempre leia antes de enviar.',
          '**Passar threads de e-mail inteiros ao modelo.** Threads longos contêm contexto redundante que desperdiça tokens e deixa a geração mais lenta. Remova os blocos de resposta citados e passe apenas as últimas 2–3 mensagens.',
          '**Usar o Llama 3.3 70B para todas as tarefas de e-mail.** Para a maioria da redação de e-mail, o Qwen3 14B é mais rápido e usa menos VRAM. Reserve o 70B para correspondência genuinamente complexa ou de alto risco.',
          '**Armazenar credenciais IMAP no script.** Credenciais no código-fonte estão a um `git push` de se tornarem públicas. Use variáveis de ambiente.',
          '**Não definir um teto de palavras nos prompts de rascunho.** Sem um teto de palavras, os modelos enchem as respostas de negócios com contexto desnecessário, ressalvas e amenidades. Adicione "Responda em menos de 150 palavras" a cada prompt de e-mail.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Ficha do modelo Qwen3 14B — [Alibaba Cloud / Equipe Qwen](https://qwenlm.github.io)',
          'Relatório técnico Phi-4 Mini — [Microsoft Research](https://microsoft.com/research)',
          'Documentação da API do Ollama — [Ollama](https://ollama.com/docs)',
          'Documentação do n8n auto-hospedado — [n8n.io](https://docs.n8n.io)',
          'GDPR Artigo 28 — obrigações de processamento de dados do operador — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Isso funciona com o Gmail?',
            a: 'Sim. O Gmail suporta acesso IMAP com uma senha específica de aplicativo. Habilite o IMAP nas configurações do Gmail, gere uma senha de aplicativo nas configurações de segurança da sua Conta do Google e use essas credenciais no script IMAP. O Gmail também expõe a API do Gmail para acesso mais estruturado — útil para fluxos de trabalho do n8n que precisam de gerenciamento de marcadores, operações de thread ou manuseio de anexos.',
          },
          {
            q: 'Qual é melhor para automação de e-mail: IMAP + Python ou n8n?',
            a: 'IMAP + Python é melhor se você se sente confortável escrevendo e mantendo um script e quer controle total. n8n é melhor se você quer lógica condicional (encaminhar e-mails por remetente, hora ou conteúdo), integração com calendário ou múltiplos destinos de saída sem escrever código. Ambos usam o Ollama como backend de modelo local; a diferença é a camada de orquestração ao redor dele.',
          },
          {
            q: 'Um LLM local consegue resumir uma caixa de entrada de e-mail inteira?',
            a: 'Sim, com ressalvas. Um resumo semanal da caixa de entrada (50–100 e-mails) funciona bem: busque os assuntos e os primeiros 200 caracteres de cada corpo, concatene, passe para o Qwen3 14B com um prompt "resumir por tema e urgência". Para uma caixa de entrada completa com milhares de e-mails, faça o resumo em lotes (50 e-mails por chamada à API) e agregue os resumos dos lotes. Passar 1.000 e-mails em uma chamada excede os limites de contexto e produz saída não confiável.',
          },
          {
            q: 'Qual é o melhor LLM local para redigir e-mails de negócios formais?',
            a: 'O Qwen3 14B produz a melhor relação qualidade-velocidade para correspondência de negócios formal em hardware de consumidor. Ele lida com registro formal, ressalvas apropriadas e fechamentos profissionais de forma confiável. Para correspondência de altíssimo risco (avisos legais, comunicações executivas, negociações de contrato), use o Llama 3.3 70B — a diferença de qualidade é visível para temas complexos ou sensíveis.',
          },
          {
            q: 'Isso funciona no Windows?',
            a: 'Sim. O Ollama roda no Windows (baixe em ollama.com). O script Python com IMAP roda em qualquer instalação de Python 3.8+ no Windows. O Thunderbird e a extensão Ollama Compose são multiplataforma. O n8n auto-hospedado roda no Windows via npm ou Docker Desktop.',
          },
          {
            q: 'Como lido com threads de e-mail com várias respostas anteriores?',
            a: 'Remova o conteúdo citado antes de passar ao modelo. Use a biblioteca `email` do Python para extrair apenas a resposta mais recente (a porção acima do primeiro prefixo `>` ou do divisor `--- Original Message ---`). Passe apenas as últimas 2–3 mensagens com um limite total de 3.000 caracteres. O modelo raramente precisa do histórico completo do thread para gerar uma resposta apropriada.',
          },
          {
            q: 'Isso é compatível com o GDPR para uso empresarial?',
            a: 'O processamento local é mais defensável sob o GDPR do que o processamento de IA na nuvem para dados pessoais. Quando os dados ficam na sua máquina, você não cria uma nova relação de operador de dados (Artigo 28). No entanto, a conformidade com o GDPR depende da sua função específica, da natureza dos dados e das políticas de proteção de dados existentes da sua organização. Consulte o seu encarregado de proteção de dados antes de usar esta configuração para processar dados pessoais de clientes ou funcionários.',
          },
          {
            q: 'Posso usar isso para responder em nome de outra pessoa?',
            a: 'Tecnicamente sim — o script pode ser configurado para acessar qualquer conta IMAP para a qual você tenha credenciais. Legal e eticamente, gerar respostas de e-mail em nome de outra pessoa sem o conhecimento dela levanta questões significativas de consentimento e personificação. Use esta automação apenas para contas e correspondência pelas quais você é pessoalmente responsável.',
          },
          {
            q: 'Posso acionar a IA em e-mails recebidos?',
            a: 'Sim, por três padrões. (1) Python + IMAP + cron: agende o script para rodar a cada 30 min, buscar os novos e-mails não lidos, gerar rascunhos. (2) Nó gatilho IMAP do n8n: faz polling a cada 1–5 min, aciona o fluxo de trabalho em cada novo e-mail imediatamente. (3) Regras de filtro do Thunderbird: use uma ação de filtro "Executar um script" que chame o Ollama via curl. A abordagem do n8n é a mais confiável para triagem em tempo real; o cron é mais simples se uma latência de 30 min for aceitável.',
          },
          {
            q: 'Posso sincronizar a IA de e-mail entre dispositivos?',
            a: 'Os rascunhos podem sincronizar pela sua pasta IMAP Rascunhos existente — escreva o rascunho gerado pela IA na pasta IMAP "Rascunhos" usando `mail.append()`, e qualquer dispositivo com acesso IMAP (telefone, tablet, segundo notebook) o vê instantaneamente. O backend do Ollama em si não sincroniza — ele roda na máquina em que você o configurou. Os dispositivos móveis precisam de acesso de rede à máquina doméstica que roda o Ollama (IP de LAN ou Tailscale). Plano: o servidor doméstico roda o Ollama + automação; todos os dispositivos leem os rascunhos da pasta IMAP Rascunhos. Uma única geração de IA, revisão e envio em múltiplos dispositivos.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Substitua o Zapier por agentes de IA locais](/pt/power-local-llm/replace-zapier-with-local-ai-agents) — automação de fluxos de trabalho local usando n8n, Ollama e Python para automação de processos de negócio.',
          '[Agentes de IA locais para fluxos de trabalho empresariais: conformidade na UE](/pt/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexto de GDPR, EU AI Act e conformidade DACH para implantar IA local em ambientes de negócio.',
          '[RAG local para dados empresariais privados](/pt/power-local-llm/local-rag-for-private-business-data) — como configurar Q&A de documentos sobre dados empresariais privados sem APIs na nuvem.',
          '[Agentes de IA locais com MCP 2026](/pt/power-local-llm/local-ai-agents-with-mcp-2026) — MCP (Model Context Protocol) para conectar LLMs locais a clientes de e-mail, calendários e outras ferramentas como contextos de agente.',
          '[Agentes locais autônomos: o que realmente funciona](/pt/power-local-llm/autonomous-local-agents-actually-work) — avaliação honesta do que os agentes de IA locais podem e não podem fazer em 2026.',
          '[Substitua Grammarly e Notion AI por modelos locais](/pt/power-local-llm/replace-grammarly-notion-ai-with-local) — padrão adjacente de substituição de SaaS para ferramentas de escrita, complementando a substituição de e-mail/calendário aqui.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — autoridade de modelo mais ampla para escolher o modelo de chat por trás de qualquer uma dessas três configurações.',
          '[Prompting Zero-Shot vs Few-Shot](/pt/prompt-engineering/zero-shot-vs-few-shot) — quando incluir e-mails de exemplo no prompt e quando omiti-los para melhor generalização.',
          '[Diretório de software de LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — listagens de diretório para Ollama, n8n, Thunderbird e outros componentes desta pilha.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'IA local para e-mail e calendário: triagem sem API na nuvem (2026)',
      description: 'Como automatizar a redação de e-mails, o resumo da caixa de entrada e a gestão do calendário com um LLM local. Ollama, integração IMAP e automação de comunicação com privacidade.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-llm-email-and-calendar-automation',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'ローカルLLMでメール・カレンダー自動化：クラウドAPIなし (2026)',
    seoTitle: 'ローカルLLM メール・カレンダー自動化 2026',
    intro:
      'ローカルLLMsは、メール返信案を作成し、受信トレイを要約し、会議アジェンダを生成し、カレンダーイベントを分類できます——あなたのメッセージをクラウドAPIに送信することなく。このガイドは実践的なアーキテクチャを扱います：OllamaによるローカルIMAP自動化、ローカルAIプラグイン付きのオープンソースメールクライアント、そしてあなたのマシンに通信データを保つためのプライバシーの基礎知識。',
    metaDescription:
      'ローカルLLMsでメールドラフト作成、受信トレイ整理、カレンダー管理を自動化します。Ollama、IMAP統合、プライバシーを尊重する通信自動化。',
    twitterDescription:
      'ローカルLLMメール自動化：返信案を作成、受信トレイを要約、会議アジェンダを生成——すべてローカル、クラウドAPIなし。Ollama + IMAPワークフローセットアップガイド。',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      'メール作成の自動化、受信トレイの要約、カレンダー管理をしたい専門家、小企業オーナー、プライバシー意識の高い個人。クラウドAIサービスに通信データを送信したくない方向け。',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルLLM メール自動化',
    targetKeywords: [
      'ローカルllmメール自動化',
      'ollama メール作成',
      'ローカルai 受信トレイ要約',
      'ローカルllm カレンダー自動化',
      'プライベートai メールアシスタント',
      'imap ローカルllm ワークフロー',
    ],
    leadAnswerBlock:
      '**ローカルLLMメール自動化は、2段階パイプラインとして最適に機能します：メールクライアントまたはIMAPスクリプトが生のメッセージを取得し、ヘッダーを削除し、プレーンテキストをOllamaのローカルAPIに送信します。モデルはあなたが送信前に確認するドラフトを生成します。メールコンテンツはあなたのマシンから出ません。2026年で最も実用的な3つのセットアップは：(1) スケジュール通りにOllamaを呼び出すPython IMAPスクリプト——50行、完全に自動化可能；(2) Thunderbird + Ollama Composeプラグイン——GUIベース、コード不要；(3) n8n自己ホスト + ローカルOllamaノード——条件付きロジック、マルチステップフィルタリング、カレンダー統合を希望するユーザー向けの視覚的ワークフロービルダー。カレンダー自動化の場合、同じOllama APIコールがエクスポートされたICSファイルまたはローカルcredentialsを持つGoogle Calendar APIに対して機能します——会議アジェンダの生成、週間要約、イベント詳細からのフォローアップメール作成。**',
    quickAnswerTop: {
      ja: {
        question: 'ローカルAIを使ってメール作成を自動化し、メールをクラウドに送信しない方法は？',
        answer:
          '最速のローカルメール自動化セットアップはPython IMAPスクリプトです。未読メールを取得し、ヘッダーを削除し、プレーンテキストをOllamaのローカルAPIに渡し、ドラフト返信をローカルファイルまたはドラフトフォルダに保存します。Python 50行以下。メールデータはあなたのマシンを離れません。GUI選択肢として、Thunderbird + Ollama Compose拡張機能は、メールを右クリックして、メールクライアントを離れずに返信を生成できます。ワークフロー自動化の場合、n8n自己ホスト + ローカルOllamaノードは条件付きロジック、マルチステップフィルタリング、クラウド依存性なしのカレンダー統合を管理します。',
        bullets: [
          'IMAP + Python + Ollama：50行スクリプト、スケジュール通り実行、ドラフトをローカルに保存——最もシンプルなセットアップ。',
          'Thunderbird + Ollama Composeプラグイン：GUIベース、コード不要、メールクライアントで右クリックして返信生成。',
          'n8n自己ホスト + Ollama ノード：条件付きロジック、フィルタリング、カレンダー統合用の視覚的ワークフロービルダー。',
          'カレンダー自動化：ICSファイルをエクスポートするか、Google Calendar APIをローカルで使用して、アジェンダとフォローアップドラフトを生成。',
          'メール用ベストモデル：Qwen3 14B または Phi-4 Mini——高速生成、低VRAM、ビジネス通信に十分な品質。',
          'プライバシー：IMAPクレデンシャルとメールコンテンツはあなたのマシンから出ません；これらのセットアップのいずれでもクラウドAPI呼び出しなし。',
          '送信前の確認は必須：ローカルモデルはトーンと事実で誤りを犯します；すべての出力を第一ドラフトとして扱う。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '重要な事実', anchor: '#quick-facts' },
      { label: 'なぜメール用にローカルAIを使うのか？', anchor: '#why-local' },
      { label: 'アプローチの比較', anchor: '#approach-comparison' },
      { label: 'セットアップ1：IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: 'セットアップ2：Thunderbird + Ollama プラグイン', anchor: '#thunderbird' },
      { label: 'セットアップ3：n8n Self-Hosted + Ollama', anchor: '#n8n' },
      { label: 'トライアージと週間レビュー プロンプト', anchor: '#triage-prompts' },
      { label: 'カレンダー自動化', anchor: '#calendar' },
      { label: 'モデル推奨事項', anchor: '#models' },
      { label: 'プライバシーとセキュリティ', anchor: '#privacy' },
      { label: '一般的な誤り', anchor: '#common-mistakes' },
      { label: '日本ユーザーのための活用ポイント', anchor: '#japan-context' },
      { label: '参考文献', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**3つのセットアップがローカルメール自動化の95%をカバーします。** IMAP + Python + Ollama (50行、完全スクリプト可能)、Thunderbird + Ollama Compose (GUI、コード不要)、n8n自己ホスト + Ollama ノード (視覚的ワークフロー、条件付きロジック)。あなたのワークフローに合わせた最もシンプルなオプションを選択してください。',
          '**小さいモデルは創作作業よりメールに適しています。** メール作成には創造性ではなく一貫性が必要です。Qwen3 14B と Phi-4 Mini は16 GBシステムで2〜5秒でビジネス品質の返信ドラフトを生成します。Llama 3.3 70Bはほとんどのメールタスクには過剰です。',
          '**送信前の確認は必須ではなく絶対です。** ローカルモデルはトーンエラー（非常にフォーマル、非常にカジュアル）、事実の不正確さ（間違った時間、間違った受信者名）を犯し、時々無関係なコンテキストから内容を作り上げます。常に送信前にドラフトを読んでください。',
          '**メールコンテンツはこれらのセットアップのいずれでもあなたのマシンを離れません。** IMAP接続はあなたのメールサーバーに、クラウドAIには行きません。Ollama APIはローカルです。n8n自己ホストはあなたのマシン上で実行されます。プライバシー利点は本当です。',
          '**カレンダー自動化はエクスポートされたICSファイルまたはローカルGoogle Calendar API呼び出しで最適に動作します。** 週のイベントをICSファイルにエクスポートし、Ollama に渡し、会議アジェンダ、準備チェックリスト、またはあなたのチーム向け週間要約メールを生成するよう依頼します。',
          '**IMAPクレデンシャルは機密です。** スクリプトソースコードではなく、環境変数またはローカルシークレットマネージャーに保存してください。プライマリアカウントパスワードではなくアプリ固有のパスワードを使用してください。',
          '**n8nは条件付きロジックの正しい選択です。** 「[ドメイン]からのすべてのメールを毎日要約する」または「カレンダーイベントが終わるときにフォローアップメールを生成する」場合、n8n の視覚的ワークフロービルダーはカスタムPythonなしでこれを処理します。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '重要な事実',
        items: [
          '**カバーされるセットアップ：** IMAP + Python + Ollama、Thunderbird + Ollama Compose、n8n自己ホスト + Ollama ノード。',
          '**メール向けベストモデル：** Qwen3 14B (高速、低VRAM、ビジネス品質) または Phi-4 Mini (最速、4 GB VRAM)。',
          '**必要なVRAM：** Qwen3 14B (Q4) = ~9 GB；Phi-4 Mini (Q4) = ~3 GB；Llama 3.3 70B (Q4) = ~42 GB。',
          '**サポートされるメール形式：** プレーンテキストIMAP (MIME デコード)、EMLファイル、Gmail API (ローカルcredentials)、Outlook経由IMAP。',
          '**カレンダーフォーマット：** ICS エクスポート (ユニバーサル)、Google Calendar API (ローカルOAuth)、Nextcloud Calendar (CalDAV)。',
          '**スクリプト複雑性：** IMAP + Python = ~50行；n8n ワークフロー = 視覚的、コードなし；Thunderbird = プラグインインストールのみ。',
          '**プライバシー：** これらのセットアップのどれでもメールデータはクラウドAPIに送信されません；IMAP はあなたのメールサーバーのみに接続。',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'なぜメール用にローカルAIを使うのか？',
        content:
          '**基本的な理由はプライバシーです：クラウドAIに貼り付けるすべてのメールは潜在的にログされ、トレーニングに使用され、そのプロバイダーのデータ保持ポリシーの対象となります。** ビジネス対応、顧客通信、個人メールには、サードパーティのデータセットに含めたくない情報が含まれています。ローカルAIはあなたのメールをあなたのハードウェアで処理し、ドラフトを返し、何も保持しません。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルAIでのメール自動化は、すべてのメールコンテンツをあなたのコンピュータに保ちます——クラウドAPIはあなたのメッセージを受け取りません、サードパーティはあなたの通信をログまたはトレーニングしません、ドラフト生成はインターネット接続なしで機能します。',
          },
          {
            type: 'plain-terms',
            text: 'メールをChatGPTまたはClaude.aiに貼り付けて返信ドラフトを依頼すると、そのメールはOpenAIまたはAnthropicのサーバーで処理されます。ほとんどの人、ほとんどの時間、これは受け入れられます。ビジネス対応、顧客の詳細、契約の議論、または機密情報を含む通信の場合、そうではありません。Ollama経由で設定されたローカルAIは同じメールをあなたのコンピュータで処理し、どこにも送信しません。',
          },
        ],
        items: [
          '**データ主権：** メールコンテンツ、送信者情報、スレッドコンテキストはあなたのマシンに残ります。クラウド保持ポリシーは適用されません。',
          '**オフライン操作：** Ollama が実行されていてモデルがダウンロードされたら、インターネットアクセスなしでメール生成が機能します。',
          '**使用制限なし：** クラウドAI API はレート制限とトークンキャップを強制します。ローカル設定にはリクエストごとのコストと1日の制限がありません。',
          '**規制遵守：** GDPR、HIPAA、職業上の秘密保持要件は、顧客通信をサードパーティAIに送信することを禁止する場合があります。ローカル処理はこの懸念を排除します。',
          '**短いタスクの速度：** 小さいモデル (Qwen3 14B、Phi-4 Mini) は消費者ハードウェアで2〜5秒でビジネスメールドラフトを生成します——短いプロンプトのほとんどのクラウドラウンドトリップより高速。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ローカルメール自動化はメールクライアントの代わりではなく、既存のワークフローに統合されるドラフト作成アシスタントです。メールを送信するためにThunderbird、Apple Mail、またはGmailを引き続き使用します；ローカルAIはあなたが確認、編集し、既存のクライアントから送信するテキストを生成します。',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: 'アプローチの比較',
        content:
          '**3つのセットアップはほとんどのユーザーに関連する5つの側面で異なります：セットアップの難しさ、30日間の信頼性、プライバシー態度、それぞれが最適なユーザープロフィール。** 最も強力なものではなく、あなたのワークフローをカバーする最もシンプルなオプションを選択してください。',
        columns: ['アプローチ', 'セットアップ', '信頼性 (30日)', 'プライバシー', '最適な用途'],
        rows: [
          { 'アプローチ': 'Thunderbird + Ollama Compose', 'セットアップ': '簡単', '信頼性 (30日)': '高い (バックグラウンドプロセスなし)', 'プライバシー': 'ローカルのみ', '最適な用途': 'ソロプロフェッショナル、毎日のトライアージ、GUIユーザー' },
          { 'アプローチ': 'Python + IMAP + Cron', 'セットアップ': '難しい (50 LOC + スケジューリング)', '信頼性 (30日)': '非常に高い (スクリプト化可能、監視可能)', 'プライバシー': 'ローカルのみ', '最適な用途': '完全制御 + カスタムロジックが欲しい開発者' },
          { 'アプローチ': 'n8n自己ホスト + Ollama', 'セットアップ': '中程度 (視覚的ワークフロー編集)', '信頼性 (30日)': '高い (自己ホスト監視付き)', 'プライバシー': 'ローカル (自己ホスト付き)', '最適な用途': 'ワークフロー集約的ユーザー、Zapier置換；条件付きロジック' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: 'セットアップ1：IMAP + Python + Ollama',
        content:
          '**最も自動化スクリプト可能なセットアップ：Python スクリプトが IMAP 経由で未読メールを取得し、ヘッダーと HTML を削除し、プレーンテキストを Ollama のローカル API に渡し、返信ドラフトを保存します。** Cron または Task Scheduler を使用してスケジュール通り実行。Python 50行、Ollama Python クライアント以外の外部依存なし。',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'IMAP + Python + Ollama ローカルメール下書きパイプライン：未読メールの取得から下書き保存までの4ステップ、Qwen3 14B（VRAM 9GB）を Ollama のローカル API 経由で使用——クラウド API 呼び出しなし。',
        promptExamples: [
          {
            label: 'IMAP メール取得 + Ollama ドラフト (Python スケルトン)',
            text: 'import imaplib, email, os\nimport ollama\n\n# IMAP に接続\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# 未読メール取得\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # Ollama でドラフト生成\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "あなたはプロフェッショナルメール アシスタント。簡潔で丁寧なビジネス返信を書く。受信メールの礼儀正しさに合わせる。"},\n        {"role": "user", "content": f"メール差出人：{sender}\\n件名：{subject}\\n\\n本文：\\n{body[:2000]}\\n\\n返信ドラフトを作成。"}\n    ])\n    draft = response["message"]["content"]\n    print(f"ドラフト：{subject}\\n{draft}\\n---")',
          },
        ],
        items: [
          '**IMAP クレデンシャル：** 環境変数 (`IMAP_HOST`, `IMAP_USER`, `IMAP_PASS`) に保存——スクリプトソースコードに絶対にしない。プライマリパスワードではなくアプリ固有のパスワードを使用。',
          '**本文切り詰め：** Ollama に渡す前にメール本文を 2,000〜3,000 文字に制限。長いメールスレッドはドラフト返信に有用なコンテキストをめったに追加せず、生成を遅くします。',
          '**HTML削除：** メール本文が HTML の場合、`html.parser` または `BeautifulSoup` を使用してプレーンテキストを抽出してからモデルに渡す。HTML タグは生成品質を低下させます。',
          '**スケジューリング：** macOS/Linux では Cron エントリ (`crontab -e`) を追加してスクリプトを 30 分ごとに実行。Windows では Task Scheduler を Python インタープリタパスで使用。',
          '**ドラフト保存：** ドラフトをメール参照のローカルテキストファイルに書き込む (タイムスタンプ + サブジェクトスラグで命名) または `mail.append()` を使用して IMAP「ドラフト」フォルダにプッシュ。テキストファイル読み取りは確認用としてより安全；IMAP ドラフトはどのクライアントからでも送信を許可。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '自動送信を有効にしないでください。ローカルAIはヒューマンレビューなしで送信するのに十分な信頼性でメールドラフトを生成しません。トーンエラー、悪いデータ、作り上げられた事実、スレッド誤り送信は定期的に発生。自動化は作成時間を節約します；確認ステップは必須。',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: 'セットアップ2：Thunderbird + Ollama Compose プラグイン',
        content:
          '**Ollama Compose 拡張機能付きの Thunderbird はノーコードオプション。** Thunderbird をインストール、Ollama をインストール、モデルをプル、拡張機能をインストール——メール生成は作成ウィンドウで右クリック一つ先。',
        items: [
          '**Thunderbird をインストール** thunderbird.net から。macOS、Windows、Linux で利用可能。',
          '**Ollama をインストールしてモデルをプル：** `ollama pull qwen3:14b` (メール作業に推奨)。`ollama serve` を起動。',
          '**Ollama Compose 拡張機能をインストール** Thunderbird アドオンマネージャーから。「Ollama」を検索またはプロジェクトリポジトリから XPI ファイルをインストール。',
          '**拡張機能を設定** して `http://localhost:11434` を指す、モデルを選択 (Qwen3 14B または Phi-4 Mini 推奨)。',
          '**作成ウィンドウで：** テキスト領域を右クリックして「Ollama で生成」を選択——拡張機能が引用元メールとカーソル位置を Ollama に送り、ドラフト返信を挿入。',
          '**モデル切り替え：** 拡張機能は作成ツールバーからモデル切り替えを許可。高速返信で Phi-4 Mini を使用；複雑または機密通信で Qwen3 14B または Llama 3.3 70B に切り替え。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ollama Compose 設定でカスタム システムプロンプトを定義。デフォルトプロンプトはジェネリック；カスタマイズされたものはより良い結果を生成。例：「あなたは [あなたの名前]、[あなたの役割] at [会社] のプロフェッショナルメール返信を作成。返信は簡潔 (コンテキストがより多く必要な場合以外は150語未満)、専門的に温かく、受信メールの礼儀正しさと合致。免責事項や署名行は追加しない。」',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: 'セットアップ3：n8n Self-Hosted + Ollama',
        content:
          '**ローカル Ollama ノード付き n8n 自己ホストは条件付き自動化の正しい選択：送信者ドメインでメールをフィルタ、毎日要約、カレンダーイベント終了時にフォローアップ生成、異なるメールタイプを異なるモデルプロンプトにルーティング——コード作成なし。**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: 'n8n セルフホストによるメールとカレンダー自動化ワークフロー：IMAP トリガーとドメインフィルターがメールをローカル Ollama ノードにルーティングし、並行するカレンダーブランチが ICS または Google カレンダーのイベントを会議アジェンダに変換——単一の Ollama インスタンス、クラウド API なし。',
        items: [
          '**n8n 自己ホストをインストール：** `npm install -g n8n && n8n start` または `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`。ワークフロー編集は `http://localhost:5678` で実行。',
          '**Ollama ノードを追加：** n8n ワークフロー編集で「Ollama」ノードを検索 (n8n v1.2+ 組込)。`http://localhost:11434` を指し、モデルを選択。',
          '**IMAP トリガー：** ワークフロートリガーとして IMAP メールノードを追加——IMAP クレデンシャルで設定。ノードは新しいメールをポーリングして JSON オブジェクトとして各メールを次のステップに渡す。',
          '**フィルタ論理：** IF ノードを追加してメールを送信者ドメイン、件名キーワード、または時刻でルーティング。メールタイプに基づいて異なる Ollama プロンプト (顧客メール、ニュースレターダイジェスト、内部チームメッセージ) にルーティング。',
          '**カレンダー統合：** Google Calendar ノード (ローカル OAuth クレデンシャル付き) または ICS ファイルリーダーを追加して近来イベント取得。イベント詳細を Ollama ノードに渡してアジェンダまたは準備チェックリスト生成。',
          '**出力オプション：** ドラフトをローカルファイルに書き込む、IMAP ドラフトにプッシュ、Slack メッセージ自分に送信、Notion/Obsidian ページに保存——すべて n8n 出力ノード経由。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'n8n 自己ホストはカレンダー + メール ワークフローの最良統合ポイント。典型的パターン：IMAP トリガーが会議確認メール受け取る → 会議詳細抽出 → Google Calendar API 呼び出し (ローカル OAuth) 出席者取得 → すべてのコンテキストを Ollama に渡す → 会議アジェンダ生成 → 指定フォルダに保存。n8n ビジュアル編集で約20分でセットアップ可能。',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: 'トライアージと週間レビュー プロンプト テンプレート',
        content:
          '**最も高頻度のメールタスク 2 つを処理するプロンプト：メール別分類と週間受信トレイレビュー。** 3 つのセットアップのいずれかに投入 (Python スクリプト、Thunderbird システムプロンプト、n8n Ollama ノード本文)——意図的にモデル不知。',
        promptExamples: [
          {
            label: 'トライアージ プロンプト テンプレート',
            text: 'あなたはメール トライアージ アシスタント。以下のメールをこれらのカテゴリのいずれかに分類し、1 文で説明：\n- 緊急：4 時間以内に返信が必要\n- 重要：24 時間以内に返信が必要\n- 情報：認識のために読む、返信不要\n- プロモーション：マーケティングまたはニュースレター、アーカイブ可能\n- スパム：不要、フィルタリング推奨\n\nメール：\n差出人：{sender}\n件名：{subject}\n本文：{body[:1500]}\n\n出力フォーマット：\nカテゴリ：[緊急|重要|情報|プロモーション|スパム]\n推論：[1 文]\n推奨アクション：[返信 | アーカイブ | マーク | 削除]',
          },
          {
            label: '週間レビュー プロンプト テンプレート',
            text: '過去 1 週間の以下 50 メールを 3 セクションに要約：\n1. まだアクションが必要な「緊急」または「重要」アイテム (差出人 + 1 行要約付き)\n2. テーマ (例：「Q4 計画はこの週 12 メールに現れた」)\n3. 返信が必要な人 (差出人 + 日数保留中)\n\nメール (件名 + 各本文最初 200 文字)：\n[メール一覧をまとめて貼り付け]\n\n出力フォーマット：3 つのマークダウン セクション。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'トライアージプロンプトについて、n8n IF ノードでカテゴリ別ルーティング：緊急 → プッシュ通知、重要 → 「need-reply」フォルダに保存、プロモーション → 自動アーカイブ、スパム → フィルタルール標記。分類は下流自動化を安全にします——それなしでパイプラインは顧客フォローアップとマーケティングメールを区別できません。',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: 'ローカルLLMsでのカレンダー自動化',
        content:
          '**ローカルAIでのカレンダー自動化は 2 モードで動作：パッシブ (ICS エクスポート、要約または agenda 生成用に Ollama に渡す) とアクティブ (リアルタイムイベント アクセス用のローカル OAuth credentials 付き Google Calendar API)。** パッシブは簡単；アクティブはスケジュール済みワークフローを有効。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカル AI でのカレンダー自動化は、エクスポート ICS ファイルコンテンツまたは Google Calendar API データを Ollama に渡すことで会議アジェンダ、週間要約、フォローアップメール ドラフトを生成します——カレンダーデータはクラウド AI に接触しません。',
          },
          {
            type: 'plain-terms',
            text: '最も簡単なカレンダー自動化：任意のカレンダー app (Google Calendar、Apple Calendar、Nextcloud) から週のイベントを ICS ファイルとしてエクスポート、ターミナルを開く、ICS コンテンツを「各イベント用にアジェンダを生成」プロンプト付き Ollama に渡す、出力をノートにコピー。30 秒で、カレンダーデータはローカル。',
          },
        ],
        promptExamples: [
          {
            label: 'ICS-to-Agenda プロンプト テンプレート',
            text: 'これが ICS フォーマットでの私の週間カレンダーです：\n\n[ICS コンテンツ貼り付け]\n\n各会議イベント：\n1. イベント件名と説明に基づいて 5 ポイント会議アジェンダを生成。\n2. 出席者がリストされている場合、各アジェンダアイテムをリード誰が注記。\n3. イベントが説明ない場合、[会議タイプ] 会議用ジェネリック agenda を生成。\n\nプレーンテキストとしてフォーマット。イベントあたり 1 セクション、--- で区切られ。',
          },
        ],
        items: [
          '**ICS エクスポート (パッシブ)：** Google Calendar、Apple Calendar、Nextcloud、Outlook はすべて ICS ファイルをエクスポート。毎週または毎日エクスポート、ターミナル経由または script で Ollama に渡す、agendas または要約を生成。',
          '**Google Calendar API (アクティブ)：** Google Cloud Console (personal project) でローカル OAuth credentials を作成、credentials JSON をダウンロード、イベント取得用に `google-auth-oauthlib` Python library を使用。OAuth token はローカルに保存、API calls は直接 Google Calendar に——AI intermediary なし。',
          '**会議 agenda 生成 prompt：** title + attendees + description → 「時間割り当て付き 5 ポイント会議 agenda を生成。会議説明が空の場合、[会議タイプ] 会議用ジェネリック agenda を提案。」',
          '**週間要約 prompt：** 週すべてのイベント → 「週の会議を 3 文で要約。背中合わせのブロックまたは異常に長い会議をハイライト。」',
          '**フォローアップ email ドラフト：** 会議後 (イベント終了時間でトリガー) → 「会議 \'[title]\' 用フォローアップ email を作成。出席者に感謝し、次のステップを要約。コンテキスト用このイベント説明を使用：[説明]。」',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'カレンダーデータをプレーンテキストで可能に保つ。ICS はプレーンテキスト；Ollama に直接渡すのは簡単。proprietary calendar format または locked-down enterprise system を使用する場合、最初に ICS にエクスポート。ICS standard はユニバーサル、すべての major calendar application でサポート。',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'メール・カレンダータスク用モデル推奨',
        content:
          '**メール・カレンダー自動化タスクは大型の強力モデルより小型の高速モデルを優先します。** ビジネス email 返信作成、会議アジェンダ生成、受信トレイ要約には Llama 3.3 70B は不要——interactive に感じ、使用可能なビジネステキストを生成できるほど高速で一貫性があるモデルが必要。すべての use cases 上の broader モデルランドスケープについて、[2026 年のベスト ローカル LLMs](/ja/local-llms/best-local-llms-2026) を参照。',
        columns: ['タスク', '推奨モデル', 'VRAM (Q4)', 'なぜ'],
        rows: [
          { 'タスク': 'Email 返信ドラフト作成', '推奨モデル': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'なぜ': 'ビジネス writing quality と生成速度の最良バランス；フォーマルと casual registers を処理' },
          { 'タスク': 'クイック 1 行返信', '推奨モデル': 'Phi-4 Mini', 'VRAM (Q4)': '~3 GB', 'なぜ': '最速オプション；シンプルな承認と scheduling 返信で十分' },
          { 'タスク': '会議 agenda 生成', '推奨モデル': 'Qwen3 14B', 'VRAM (Q4)': '~9 GB', 'なぜ': '構造化リスト生成で良好；agenda format はその能力内' },
          { 'タスク': '長 email thread 要約', '推奨モデル': 'Llama 3.3 70B or Qwen3 32B', 'VRAM (Q4)': '~42 GB / ~20 GB', 'なぜ': 'Long context adherence はマルチメッセージ threads に重要；小型モデルは詳細を見落とす' },
          { 'タスク': '機密/法的通信', '推奨モデル': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 GB', 'なぜ': 'ベスト reasoning quality；エラーが high-stakes の場合、ハードウェアコストの価値あり' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ほとんどの email タスク (16 GB system) で、Qwen3 14B は正しいデフォルト選択。`ollama pull qwen3:14b` でダウンロード 1 度、すべての email・カレンダー自動化に使用。14B output quality が consistently inadequate なタスクタイプを遭遇したときだけ大型モデルに切り替え。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとセキュリティ',
        content:
          '**ローカル email 自動化のプライバシー利点は本当ですが、正しい設定が必要です。** 3 つのことがそれを損なう可能性：IMAP credentials の偶発的 cloud 同期、サードパーティ tools accessible な logs の email コンテンツ、workflow をネットワークに露出させる誤った設定 n8n instances。他の tools で「SaaS をローカル AI で置換」する wider pattern については、[Grammarly と Notion AI をローカルモデルで置換](/ja/power-local-llm/replace-grammarly-notion-ai-with-local) を参照。',
        items: [
          '**IMAP credentials：** environment variables またはローカル secrets manager に保存 (macOS Keychain、Linux `secret-tool`、Windows Credential Manager)。script source code または cloud repository に同期される可能性ファイルに絶対に保存しない。',
          '**Logs 内の email コンテンツ：** stdout/stderr に email コンテンツを print する Python scripts はログ有効で Cron 経由実行時、email データを log files に書き込み。Logs を `/dev/null` にリダイレクトまたは email コンテンツを除外する log level を使用。',
          '**n8n ネットワーク露出：** n8n 自己ホスト は default で `localhost:5678` にバインド、ローカル。home network またはそれ以降に露出させる場合 (mobile access など)、authentication を追加、Ollama API も localhost に制限されることを確認。',
          '**App パスワード：** Gmail、Outlook、Apple Mail での IMAP access 用に dedicated app-specific password を設定——primary account password ではなく。script が compromised 場合すぐ revoke。',
          '**Git repositories：** automation scripts をバージョン管理する場合、credentials 含む `.env` ファイルを除外する `.gitignore` を追加。public または private repository に credentials を commit しない。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Cloud sync リスク。home directory が iCloud、Google Drive、OneDrive に同期される場合、synced directory の `.env` または credentials ファイルは cloud にアップロード。cloud sync から明示的に除外されたディレクトリに credentials を保存、または OS の native secrets manager を使用。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '一般的な誤り',
        items: [
          '**verification なしでドラフト自動送信。** ローカル AI はヒューマン verification なしで送信するのに十分な信頼性でドラフトを生成しない。Tone errors、悪いデータ、fabricated facts は一般的。常に送信前に読む。',
          '**entire email threads をモデルに渡す。** Long threads は redundant context を含み、tokens を浪費、生成を遅くする。Quoted reply blocks を削除、最後 2–3 messages のみを渡す。',
          '**すべての email タスクで Llama 3.3 70B を使用。** ほとんどの email 作成では、Qwen3 14B はより高速、より少ない VRAM を使用。Reserve 70B を truly complex または high-stakes correspondence のため。',
          '**IMAP credentials をスクリプトに保存。** Source code のクレデンシャルは 1 つの `git push` で public になる。Environment variables を使用。',
          '**ドラフト prompts のための word limit を設定しない。** Word limit なし、models はビジネス返信を unnecessary context、caveats、politeness flourishes でパッド。Add「150 words 未満で返信」をすべての email prompt に。',
        ],
      },
      japanContext: {
        id: 'japan-context',
        title: '日本ユーザーのための活用ポイント',
        content:
          '**日本の組織にとって、ローカル email 自動化は METI AI Governance 要件、enterprise security standards、east asia データ residency frameworks の下でおよび beyond の compliance advantages を提供します。** Cloud automation solutions では提供されないプライバシーと control。',
        items: [
          '**METI AI Governance (2026)：** 経済産業省は sensitive organization (government、finance、healthcare、infrastructure) のためにローカルデータ処理 third parties への transmission なしを推奨。Ollama での automation は「locally stored」と「limited data flow」の METI guideline を満たす。',
          '**東アジア データ residency：** Japan、Malaysia、Singapore、Korea のために enterprise は regional data residency を要求。ローカル processing はこの要件を満たし、cross-border data フレームワークを避ける (ASEAN、CPTPP context)。',
          '**日本 Enterprise Security Standards：** US/EU standards とは異なる。BSI Guidelines の equivalent として Japanese organizations は local IT security preferences を持つ。ローカル solution は「it governed locally, not US cloud-dependent」を demonstrate。',
          '**Data 保持と Right to Forgotten (GDPR 等価)：** Cloud AI providers はProcessing history・logs をしばしば months 保持。Sensitive data の場合、ローカル processing は immediate deletion を保証——no training データ contamination。',
          '**Cost efficiency for SME：** Small・mid-size Japanese organizations は cloud API continuous costs より ローカル automation を prefer。One-time Ollama investment + hardware と API per-use costs の against を compare。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '日本で operate・customer communication または internal email sensitivity を document する場合、compliance officer・stakeholder meetings でローカル models を「Data-Governance-by-Design」architecture として recommend。Message：「Local processing、no third-party APIs、no training data use」は consistently convinces。METI・BSI・enterprise security context で「compliant in own right」と「cost savings vs cloud APIs」を frame。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考文献',
        items: [
          'Qwen3 14B モデルカード — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Phi-4 Mini テクニカルレポート — [Microsoft Research](https://microsoft.com/research)',
          'Ollama API ドキュメンテーション — [Ollama](https://ollama.com/docs)',
          'n8n Self-Hosted ドキュメンテーション — [n8n.io](https://docs.n8n.io)',
          'GDPR 記事 28 — Data processor obligations — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'これ Gmail で動きますか？',
            a: 'はい。Gmail は app-specific password でIMAP access をサポート。Gmail settings で IMAP を有効化、Google Account security settings で app password を生成、IMAP script でこれらの credentials を使用。Gmail は構造化アクセス用に Gmail API も expose——label management、thread operations、attachment handling が必要な n8n workflows に有用。',
          },
          {
            q: 'Email 自動化で IMAP + Python または n8n どちらが良い？',
            a: 'Script を書き・maintain する comfort、full control が欲しい場合は IMAP + Python が better。Conditional logic (sender・time・content でメール route)、calendar integration、複数 output destinations が欲しい場合は n8n が better (code なし)。Both は Ollama を local モデル backend として use；difference は その周りの orchestration layer。',
          },
          {
            q: 'ローカル AI は entire email inbox を要約できますか？',
            a: 'はい、limitations 付き。Weekly inbox summary (50–100 emails) は well-works：subjects と各body 最初 200 characters を fetch、concatenate、"summarize by theme and urgency" prompt で Qwen3 14B に渡す。Thousands emails の complete inbox については、summary を batch (API call あたり 50 emails)、batch summaries を aggregate。1,000 emails を 1 call で pass context limits を exceed、unreliable output を produce。',
          },
          {
            q: 'フォーマル・ビジネス email 用、ベストローカル LLM は？',
            a: 'Qwen3 14B は consumer hardware でフォーマル・ビジネス correspondence の best quality-to-speed ratio を produce。Formal register、appropriate hedging、professional closings を reliably handle。Very high-stakes correspondence (legal notices、executive communication、contract negotiation) については、Llama 3.3 70B を use——quality difference は complex・sensitive topics で visible。',
          },
          {
            q: 'これ Windows で動きますか？',
            a: 'はい。Ollama は Windows で run (ollama.com からダウンロード)。IMAP Python script は Windows の任意 Python 3.8+ installation で run。Thunderbird と Ollama Compose 拡張機能は cross-platform。n8n self-hosted は Windows で npm または Docker Desktop で run。',
          },
          {
            q: 'Multiple previous replies を持つ email threads をどう処理？',
            a: 'Model に渡す前に quoted content を remove。Python `email` library を use して latest reply only を extract (first `>` prefix または `--- Original Message ---` divider 上の portion)。Last 2–3 messages のみ total 3,000-character limit で pass。Model は comprehensive thread history を rarely need adequate reply を generate。',
          },
          {
            q: 'これ GDPR compliant はビジネス用？',
            a: 'Local processing は personal data のクラウド AI processing より GDPR-defensive。Data がマシンに stay、自動的に new data processor relationship を create しない (Article 28)。しかし GDPR compliance はあなたの specific role、data nature、organization existing data protection policies に depend。Customer・employee personal data を process する前に Data Protection Officer に consult。',
          },
          {
            q: 'これを別人のために返信作成するのに use できますか？',
            a: 'Technically はい——credentials を持つあらゆる IMAP account にアクセスするよう script を configure 可。法的・倫理的に、consent なしに別人のために email replies を generate は consent・impersonation の serious questions を raise。この自動化はあなたが personally responsible なアカウント・通信のためだけに use。',
          },
          {
            q: 'Incoming emails 上で AI をトリガーできますか？',
            a: 'はい、3 patterns で。(1) Python + IMAP + Cron：30-minute ごとに run するよう script をスケジュール、新 unread メール取得、ドラフト生成。(2) n8n IMAP trigger ノード：1–5-minute ごと poll、immediate に各新 email で workflow をトリガー。(3) Thunderbird filter rules：Ollama を curl で call する「Run a script」filter action を use。n8n approach が true real-time triage で most reliable；Cron は 30-minute latency で simple なら。',
          },
          {
            q: 'Email AI を devices 間で sync できますか？',
            a: 'Drafts は existing IMAP Drafts folder で sync 可能——AI-generated ドラフトを IMAP「Drafts」folder に write (`mail.append()` で)、IMAP access を持つ any device (phone、tablet、second laptop) が immediately see。Ollama backend itself は sync せず——configure した machine で run。Mobile devices は Ollama running home machine への network access が必要 (LAN IP または Tailscale)。Plan：home server run Ollama + automation；all devices read drafts from IMAP Drafts folder。Single AI generation、multi-device review・send。',
          },
          {
            q: 'ローカル LLMs をメール自動化で使用する場合、GDPR を守る必要がありますか？',
            a: 'はい、personal data のあらゆる processing について。ローカル processing では、ただし control は remaining——third-party AI provider との data processor relationship を create しない、全 local stay の場合。然し、GDPR compliance は data governance についてです、local vs cloud の選択ではなく：consent を demand (emails が customer personal data を contain する場合)；document purposes・legal basis for processing；retention period が end の場合 email data を delete。Local は easier to document・control；message は「local processing is more defensible」です。',
          },
          {
            q: 'この自動化は日本の Mittelstand (SME) に適していますか？',
            a: 'はい、特に special data-protection・compliance requirements を持つ KMU のため。Small・mid-size 日本・オーストリア・スイス companies は customer communication・sensitive business data のため、ローカル LLM 自動化を「IT security in-house」strategy の part として use できます。特に customers・business partners が data residency requirements を持つ場合。Setup は technical know-how が必要ですが、VPN・local NAS server setup より more ではない。BSI-Grundschutz-Katalog profile for Mittelstand IT は exactly such locally-managed systems を recommend。IT-skilled organizations のため、「compliant in own right」+ 「cloud APIs vs cost savings」の win-win。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[Zapier をローカル AI エージェントで置換](/ja/power-local-llm/replace-zapier-with-local-ai-agents) — n8n、Ollama、Python を使用したローカル workflow 自動化。',
          '[ローカル AI エージェント、ビジネス workflows：EU Compliance](/ja/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — GDPR、EU AI Act、ビジネス setting でのローカル AI deployment のための DACH compliance context。',
          '[ローカル RAG、private ビジネスデータ](/ja/power-local-llm/local-rag-for-private-business-data) — cloud APIs なしで private ビジネスデータ上で document Q&A setup。',
          '[ローカル AI エージェント、MCP 2026](/ja/power-local-llm/local-ai-agents-with-mcp-2026) — local LLMs を email clients、calendars、他の tools に接続するための MCP (Model Context Protocol)。',
          '[自律ローカル エージェント：実際に動くもの](/ja/power-local-llm/autonomous-local-agents-actually-work) — 2026年、ローカル AI エージェントが出来・出来ないことの正直な評価。',
          '[Grammarly と Notion AI をローカルモデルで置換](/ja/power-local-llm/replace-grammarly-notion-ai-with-local) — writing tools のための adjacent SaaS-replacement pattern、email/calendar replacement を complement。',
          '[2026年のベストローカル LLMs](/ja/local-llms/best-local-llms-2026) — これら 3 つの setups のいずれか後ろの chat モデルを pick するための broader モデル authority。',
          '[Zero-Shot vs Few-Shot Prompting](/ja/prompt-engineering/zero-shot-vs-few-shot) — prompt に email examples を include いつ vs better generalization のため hold いつ。',
          '[ローカル LLM ソフトウェア ディレクトリ 2026](/ja/power-local-llm/local-llm-software-directory-2026) — このstack のコンポーネント、Ollama、n8n、Thunderbird などのためのディレクトリ listings。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: '本地AI进行电子邮件和日历自动化：无需将数据发送到谷歌 (2026)',
    seoTitle: '本地AI 电子邮件日历自动化 2026',
    intro:
      '本地LLMs可以起草电子邮件回复、汇总收件箱、生成会议议程和分类日历事件——所有这些都无需将您的邮件发送到云API。本指南涵盖了实用的架构：Ollama本地IMAP自动化、配备本地AI插件的开源电子邮件客户端，以及在设备上保留通信数据的隐私理由。',
    metaDescription:
      '使用本地LLMs自动化电子邮件草稿、收件箱整理和日历管理。Ollama、IMAP集成和隐私优先的通信自动化。',
    twitterDescription:
      '本地LLM电子邮件自动化：起草回复、汇总收件箱、生成会议议程——全部本地运行，无云API。Ollama + IMAP工作流设置指南。',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      '想要自动化电子邮件起草、收件箱汇总和日历管理但不想将通信数据发送到云AI服务的专业人士、小企业主和隐私意识强的个人。',
    readTime: '阅读时间：12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地LLM电子邮件自动化',
    targetKeywords: [
      '本地llm电子邮件自动化',
      'ollama电子邮件草稿',
      '本地ai收件箱汇总',
      '本地llm日历自动化',
      '私密ai电子邮件助手',
      'imap本地llm工作流',
    ],
    leadAnswerBlock:
      '**本地LLM电子邮件自动化最适合作为两步管道运行：电子邮件客户端或IMAP脚本获取原始邮件、删除标题、将纯文本正文传递到Ollama的本地API；模型生成您在发送前审查的草稿回复。没有电子邮件内容离开您的计算机。2026年最实用的三种设置是：(1) 按计划调用Ollama的Python IMAP脚本——50行、完全可自动化；(2) Thunderbird配合Ollama Compose插件——基于GUI、无需代码；(3) n8n自托管配合本地Ollama节点——视觉工作流构建器，适合需要条件逻辑、多步筛选和日历集成而不想编码的用户。对于日历自动化，同一个Ollama API调用可以针对导出的ICS文件或配合本地凭据的谷歌日历API工作——生成会议议程、汇总一周时间、根据事件详情起草后续电子邮件。**',
    quickAnswerTop: {
      zh: {
        question: '如何使用本地AI自动化电子邮件起草，而不将电子邮件发送到云端？',
        answer:
          '最快的本地电子邮件自动化设置是Python IMAP脚本，它获取未读电子邮件、删除标题、将纯文本正文传递到Ollama的本地API，并将草稿回复保存到本地文件或草稿文件夹。少于50行Python代码。没有电子邮件数据离开您的计算机。作为GUI替代方案，Thunderbird配合Ollama Compose扩展让您右键单击任何电子邮件并生成回复，无需离开电子邮件客户端。对于工作流自动化，n8n自托管配合本地Ollama节点处理条件逻辑、多步筛选和日历事件集成，无需云依赖。',
        bullets: [
          'IMAP + Python + Ollama：50行脚本、按计划运行、本地保存草稿——最简单的设置。',
          'Thunderbird + Ollama Compose插件：基于GUI、无需代码、在电子邮件客户端中右键单击生成回复。',
          'n8n自托管 + Ollama节点：用于条件逻辑、筛选和日历集成的视觉工作流构建器。',
          '日历自动化：导出ICS文件或在本地使用谷歌日历API来生成会议议程和后续草稿。',
          '电子邮件最佳模型：Qwen3 14B或Phi-4 Mini——快速生成、低VRAM、足够的商业通信质量。',
          '隐私：IMAP凭据和电子邮件内容永远不会离开您的计算机；这些设置中的任何一个都没有云API调用。',
          '审查前发送是必须的：本地模型会犯语调和事实错误；将所有输出视为初稿。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '关键要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '为什么使用本地LLM进行电子邮件自动化？', anchor: '#why-local' },
      { label: '方法对比', anchor: '#approach-comparison' },
      { label: '设置1：IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: '设置2：Thunderbird + Ollama插件', anchor: '#thunderbird' },
      { label: '设置3：n8n自托管 + Ollama', anchor: '#n8n' },
      { label: '分类和周报告提示模板', anchor: '#triage-prompts' },
      { label: '日历自动化', anchor: '#calendar' },
      { label: '模型推荐', anchor: '#models' },
      { label: '隐私和安全', anchor: '#privacy' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关资料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**三种设置覆盖本地电子邮件自动化用例的95%。** IMAP + Python + Ollama（50行、完全可脚本化）、Thunderbird + Ollama Compose（GUI、无需代码）、n8n自托管 + Ollama节点（视觉工作流、条件逻辑）。选择最适合您工作流的最简单选项。',
          '**较小的模型比创意工作更适合电子邮件。** 电子邮件起草需要连贯性而不是创意。Qwen3 14B和Phi-4 Mini在16GB系统上用2–5秒生成商业级质量的草稿回复。Llama 3.3 70B对大多数电子邮件任务来说是多余的。',
          '**发送前审查不是可选的。** 本地模型会犯语调错误（太正式、太随意）、事实错误（错误的会议时间、错误的收件人姓名），有时会从无关背景中捏造内容。发送前总是阅读草稿。',
          '**这些设置中的任何一个都不会有电子邮件内容离开您的计算机。** IMAP连接到您的邮件服务器，而不是云AI。Ollama API是本地的。n8n自托管在您的计算机上运行。隐私优势是真实的。',
          '**日历自动化最适合使用导出的ICS或本地谷歌日历API调用。** 将一周的事件导出到ICS文件、传递给Ollama，并要求它生成会议议程、准备检查表或发送给您的团队的周汇总电子邮件。',
          '**IMAP凭据很敏感。** 将它们存储在环境变量或本地秘密管理器中，永远不要在脚本源代码中。轮换电子邮件特定的应用密码，而不是使用您的主帐户密码。',
          '**n8n自托管是条件逻辑的正确选择。** 如果您想要"每天汇总来自[域]的所有电子邮件"或"在日历事件结束时生成后续电子邮件"，n8n的视觉工作流构建器可以在不编写自定义Python的情况下处理此问题。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**涵盖的设置：** IMAP + Python + Ollama、Thunderbird + Ollama Compose、n8n自托管 + Ollama节点。',
          '**电子邮件最佳模型：** Qwen3 14B（快速、低VRAM、足够的商业质量）或Phi-4 Mini（最快、4GB VRAM）。',
          '**所需VRAM：** Qwen3 14B在Q4 = ~9GB；Phi-4 Mini在Q4 = ~3GB；Llama 3.3 70B在Q4 = ~42GB。',
          '**支持的电子邮件格式：** 纯文本IMAP（MIME解码）、EML文件、谷歌日历API（本地凭据）、通过IMAP的Outlook。',
          '**日历格式：** ICS导出（通用）、谷歌日历API（本地OAuth）、Nextcloud日历（CalDAV）。',
          '**脚本复杂性：** IMAP + Python = ~50行；n8n工作流 = 视觉、无代码；Thunderbird = 仅插件安装。',
          '**隐私：** 这些设置中的任何一个都不会将电子邮件数据发送到任何云API；IMAP仅连接到您的邮件服务器。',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '为什么使用本地LLM进行电子邮件自动化？',
        content:
          '**核心原因是隐私：您粘贴到云AI助手中的每封电子邮件都可能被记录、用于训练，并受该提供商的数据保留政策约束。** 商业通信、客户沟通和个人电子邮件包含您不希望出现在第三方训练数据集中的信息。本地LLM在您的硬件上处理您的电子邮件、返回草稿并保留任何内容。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地LLM电子邮件自动化在您的计算机上保留所有电子邮件内容——没有云API接收您的邮件、没有第三方记录或训练您的通信、草稿生成在没有互联网连接的情况下工作。',
          },
          {
            type: 'plain-terms',
            text: '当您将电子邮件粘贴到ChatGPT或Claude.ai中要求草稿回复时，该电子邮件在OpenAI或Anthropic的服务器上处理。对于大多数人来说，大多数时候，这是可以接受的。对于商业通信、客户详细信息、合同讨论或任何包含敏感信息的通信，情况并非如此。通过Ollama设置的本地LLM在您的计算机上处理相同的电子邮件，永远不会将其发送到任何地方。',
          },
        ],
        items: [
          '**数据主权：** 电子邮件内容、发件人信息和线程背景保留在您的计算机上。没有云保留政策适用。',
          '**离线操作：** 一旦Ollama运行且模型已下载，电子邮件草稿在没有互联网访问的情况下工作。',
          '**没有使用限制：** 云AI API强制执行速率限制和令牌上限。本地设置没有每个请求的成本和每日限制。',
          '**监管合规性：** GDPR、HIPAA和专业特权要求可能禁止将客户通信发送给第三方AI。本地处理消除了这个顾虑。',
          '**短期任务的速度：** 小模型（Qwen3 14B、Phi-4 Mini）在消费者硬件上用2–5秒生成商业电子邮件草稿——比大多数短提示的云往返更快。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '本地电子邮件自动化不是电子邮件客户端的替代品——它是一个融入您现有工作流的起草助手。您仍然使用Thunderbird、Apple Mail或Gmail来发送；本地LLM生成您审查、编辑和从现有客户端发送的文本。',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: '方法对比',
        content:
          '**三种设置在对大多数用户重要的五个维度上有所不同：设置难度、30天可靠性、隐私态度和每种设置最适合的用户配置。** 选择覆盖您工作流的最简单选项，而不是最强大的选项。',
        columns: ['方法', '设置', '可靠性 (30天)', '隐私', '最适合'],
        rows: [
          { '方法': 'Thunderbird + Ollama Compose', '设置': '简单', '可靠性 (30天)': '高（无后台进程）', '隐私': '仅本地', '最适合': '独立专业人士、日常分类、GUI用户' },
          { '方法': 'Python + IMAP + cron', '设置': '困难（50行代码 + 调度）', '可靠性 (30天)': '非常高（可脚本化、可观察）', '隐私': '仅本地', '最适合': '想要完全控制和自定义逻辑的开发者' },
          { '方法': 'n8n自托管 + Ollama', '设置': '中等（视觉工作流编辑器）', '可靠性 (30天)': '高（带自托管监控）', '隐私': '仅本地（自托管）', '最适合': '工作流密集型用户替换Zapier；条件逻辑' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: '设置1：IMAP + Python + Ollama',
        content:
          '**最可脚本化的设置：Python脚本通过IMAP获取未读电子邮件、删除标题和HTML、将纯文本正文传递到Ollama的本地API并保存草稿回复。** 使用cron或Task Scheduler按计划运行。50行Python代码，除了Ollama Python客户端外没有外部依赖。',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'IMAP + Python + Ollama 本地邮件草稿流程：从获取未读邮件到保存草稿共4个步骤，通过Ollama本地API使用Qwen3 14B（9 GB显存）——无需调用云端API。',
        promptExamples: [
          {
            label: 'IMAP电子邮件获取 + Ollama草稿 (Python骨架)',
            text: 'import imaplib, email, os\nimport ollama\n\n# 连接到IMAP\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# 获取未读电子邮件\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # 使用Ollama生成草稿\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "您是一个专业电子邮件助手。写出简洁、礼貌的商务回复。匹配传入电子邮件的正式程度。"},\n        {"role": "user", "content": f"来自：{sender}\\n主题：{subject}\\n\\n正文：\\n{body[:2000]}\\n\\n写一个草稿回复。"}\n    ])\n    draft = response["message"]["content"]\n    print(f"草稿：{subject}\\n{draft}\\n---")',
          },
        ],
        items: [
          '**IMAP凭据：** 存储在环境变量（`IMAP_HOST`、`IMAP_USER`、`IMAP_PASS`）中——永远不要在源代码中。使用应用特定密码而不是您的主帐户密码。',
          '**正文截断：** 在传递给Ollama之前，将电子邮件正文限制为2,000–3,000个字符。长电子邮件线程很少为回复草稿添加有用的背景，并会减慢生成速度。',
          '**HTML删除：** 如果电子邮件正文是HTML，使用`html.parser`或`BeautifulSoup`在传递给模型之前提取纯文本。HTML标记会降低生成质量。',
          '**调度：** 在macOS/Linux上，添加cron条目（`crontab -e`）以每30分钟运行一次脚本。在Windows上，使用Task Scheduler配合Python解释器路径。',
          '**草稿存储：** 将草稿写入每个电子邮件的本地文本文件（按时间戳和主题slug命名）或使用`mail.append()`推送到"草稿"IMAP文件夹。读取文本文件对于审查更安全；IMAP草稿允许从任何客户端发送。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '不要启用自动发送。没有本地LLM可以生成足够可靠的电子邮件草稿而无需人工审查就可以发送。语调错误、错误的日期、捏造的事实和回复错误线程的错误定期发生。自动化为您节省起草时间；审查步骤是必须的。',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: '设置2：Thunderbird + Ollama Compose插件',
        content:
          '**Thunderbird配合Ollama Compose扩展是无需代码的选项。** 安装Thunderbird、安装Ollama、拉取模型、安装扩展——电子邮件生成在编写窗口中只需右键单击即可。',
        items: [
          '**从thunderbird.net安装Thunderbird**。适用于macOS、Windows和Linux。',
          '**安装Ollama并拉取模型：** `ollama pull qwen3:14b`（推荐用于电子邮件工作）。启动`ollama serve`。',
          '**从Thunderbird附加组件管理器安装Ollama Compose扩展**。搜索"Ollama"或从项目存储库安装XPI文件。',
          '**配置扩展**以指向`http://localhost:11434`并选择您的模型（推荐使用Qwen3 14B或Phi-4 Mini）。',
          '**在编写窗口中：** 右键单击正文区域并选择"使用Ollama生成"——扩展将引用的原始电子邮件和光标位置发送到Ollama并插入草稿回复。',
          '**模型切换：** 扩展允许您从编写工具栏切换模型。对于快速回复使用Phi-4 Mini；对于复杂或敏感通信切换到Qwen3 14B或Llama 3.3 70B。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在Ollama Compose设置中设置自定义系统提示。默认提示是通用的；自定义的提示会产生更好的结果。示例："您为[您的姓名]（[您的角色]在[公司]）撰写专业电子邮件回复。回复简洁（除非背景需要超过150字）、专业温暖，并与传入电子邮件的正式程度相匹配。永远不要添加免责声明或签名行。"',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: '设置3：n8n自托管 + Ollama',
        content:
          '**n8n自托管配合本地Ollama节点是条件自动化的正确选择：按发件人域筛选电子邮件、每日汇总、在日历事件结束时生成后续、或将不同电子邮件类型路由到不同的模型提示——所有这些都无需编写代码。**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: '用于邮件和日历自动化的n8n自托管工作流：IMAP触发器和域名过滤器将邮件路由到本地Ollama节点，同时并行的日历分支将ICS或谷歌日历事件转换为会议议程——单一Ollama实例，无云端API。',
        items: [
          '**安装n8n自托管：** `npm install -g n8n && n8n start`或`docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`。工作流编辑器在`http://localhost:5678`运行。',
          '**添加Ollama节点：** 在n8n工作流编辑器中，搜索"Ollama"节点（从n8n v1.2+开始内置）。指向`http://localhost:11434`并选择您的模型。',
          '**IMAP触发器：** 添加IMAP电子邮件节点作为工作流触发器——使用您的IMAP凭据配置。该节点轮询新电子邮件并将每个作为JSON对象传递到下一步。',
          '**筛选逻辑：** 添加IF节点以按发件人域、主题关键字或时间筛选电子邮件。根据电子邮件类型（客户电子邮件、通讯摘要、内部团队消息）路由到不同的Ollama提示。',
          '**日历集成：** 添加谷歌日历节点（使用本地OAuth凭据）或ICS文件阅读器来提取即将发生的事件。将事件详情传递到Ollama节点以生成会议议程或准备检查表。',
          '**输出选项：** 将草稿写入本地文件、推送到IMAP草稿、通过Slack消息发送给自己或保存到Notion/Obsidian页面——所有都通过n8n输出节点。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'n8n自托管是日历+电子邮件工作流的最佳集成点。典型模式：IMAP触发器接收会议确认电子邮件→提取会议详情→调用谷歌日历API（本地OAuth）获取与会者→将所有背景传递给Ollama→生成会议议程→保存到指定文件夹。这在n8n视觉编辑器中大约需要20分钟来连接。',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: '分类和周报告提示模板',
        content:
          '**处理最高频率电子邮件任务的两个提示：每封电子邮件分类和周收件箱审查。** 将它们投入到三种设置中的任何一种（Python脚本、Thunderbird系统提示或n8n Ollama节点正文）——它们特意是模型不知道的。',
        promptExamples: [
          {
            label: '分类提示模板',
            text: '您是一个电子邮件分类助手。给定以下电子邮件，将其分类为以下类别之一，并用一句话解释：\n- 紧急：需要在4小时内回复\n- 重要：需要在24小时内回复\n- 信息：阅读以获知，不需要回复\n- 促销：营销或通讯，可以存档\n- 垃圾邮件：不需要，建议筛选\n\n电子邮件：\n来自：{sender}\n主题：{subject}\n正文：{body[:1500]}\n\n输出格式：\n类别：[紧急|重要|信息|促销|垃圾邮件]\n推理：[一句话]\n建议操作：[回复 | 存档 | 标记 | 删除]',
          },
          {
            label: '周报告提示模板',
            text: '将以下过去一周的50封电子邮件汇总成3个部分：\n1. 仍需采取措施的紧急或重要项目（带发件人+1行摘要）\n2. 主题（例如，"Q4计划本周在12封电子邮件中出现"）\n3. 我欠回复的人（发件人+待处理天数）\n\n电子邮件（主题+每个正文前200个字符）：\n[粘贴批量电子邮件列表]\n\n输出格式：3个markdown部分。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于分类提示，将其与n8n IF节点配对以按类别路由：紧急→推送通知、重要→保存到"需要回复"文件夹、促销→自动存档、垃圾邮件→标记用于过滤规则。分类是使下游自动化安全的关键——没有它，管道无法区分客户跟进和营销电子邮件。',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: '使用本地LLMs进行日历自动化',
        content:
          '**使用本地LLM进行日历自动化的工作模式有两种：被动模式（导出ICS、传递给Ollama进行汇总或议程生成）和主动模式（配合本地OAuth凭据的谷歌日历API进行实时事件访问）。** 被动模式更简单；主动模式支持预定工作流。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地LLM日历自动化通过将导出的ICS文件内容或谷歌日历API数据传递给Ollama来生成会议议程、周汇总和后续电子邮件草稿——没有日历数据接触云AI。',
          },
          {
            type: 'plain-terms',
            text: '最简单的日历自动化：从任何日历应用程序（谷歌日历、Apple日历、Nextcloud）将您一周的事件导出为ICS文件、打开终端、将ICS内容传递给Ollama配合"为每个事件生成会议议程"提示、将输出复制到您的笔记。花30秒，您的日历数据保持本地。',
          },
        ],
        promptExamples: [
          {
            label: 'ICS至议程提示模板',
            text: '这是我的本周日历（ICS格式）：\n\n[粘贴ICS内容]\n\n对于每个会议事件：\n1. 根据事件标题和描述生成5点会议议程。\n2. 如果列出与会者，请注明每个议程项目应由谁领导。\n3. 如果事件没有描述，为[会议类型]会议生成通用议程。\n\n格式为纯文本。每个事件一个部分，用---分隔。',
          },
        ],
        items: [
          '**ICS导出（被动）：** 谷歌日历、Apple日历、Nextcloud和Outlook都导出ICS文件。每周或每天导出，通过终端或脚本传递给Ollama，生成议程或汇总。',
          '**谷歌日历API（主动）：** 在谷歌云控制台（个人项目）中创建本地OAuth凭据、下载凭据JSON、使用`google-auth-oauthlib` Python库来获取事件。OAuth令牌存储在本地，API调用直接进入谷歌日历——没有AI中介。',
          '**会议议程生成提示：** 标题+与会者+描述→"生成一个5项会议议程，带有时间分配。如果会议描述为空，为[会议类型]会议建议一个通用议程。"',
          '**周汇总提示：** 本周所有事件→"用3句话汇总本周的会议。突出任何连续块或异常长的会议。"',
          '**后续电子邮件草稿：** 会议后（由事件结束时间触发）→"为会议"[标题]"写一个感谢与会者并汇总后续步骤的后续电子邮件。使用此事件描述作为背景：[描述]。"',
        ],
        callouts: [
          {
            type: 'tip',
            text: '尽可能将您的日历数据保持为纯文本。ICS是纯文本；直接传递给Ollama很容易。如果您使用专有日历格式或锁定的企业系统，首先导出到ICS。ICS标准是通用的，由每个主要日历应用程序支持。',
          },
        ],
      },
      models: {
        id: 'models',
        title: '电子邮件和日历任务的模型推荐',
        content:
          '**电子邮件和日历自动化任务倾向于小型快速模型而不是大型强大的模型。** 起草商业电子邮件回复、生成会议议程或汇总收件箱不需要Llama 3.3 70B——它需要一个足够快以感到交互的模型和足够连贯以生成可用商业文本的模型。对于所有用例中更广泛的模型景观，请参阅[2026年最佳本地LLMs](/zh/local-llms/best-local-llms-2026)。',
        columns: ['任务', '推荐模型', 'VRAM (Q4)', '为什么'],
        rows: [
          { '任务': '电子邮件回复起草', '推荐模型': 'Qwen3 14B', 'VRAM (Q4)': '~9GB', '为什么': '商业写作质量和生成速度的最佳平衡；处理正式和随意的语气' },
          { '任务': '快速单行回复', '推荐模型': 'Phi-4 Mini', 'VRAM (Q4)': '~3GB', '为什么': '最快的选项；足以满足简单的确认和调度回复' },
          { '任务': '会议议程生成', '推荐模型': 'Qwen3 14B', 'VRAM (Q4)': '~9GB', '为什么': '结构化列表生成良好；议程格式在其能力范围内' },
          { '任务': '长电子邮件线程汇总', '推荐模型': 'Llama 3.3 70B或Qwen3 32B', 'VRAM (Q4)': '~42GB / ~20GB', '为什么': '长上下文坚持对多消息线程很重要；较小的模型会遗漏细节' },
          { '任务': '敏感/法律通信', '推荐模型': 'Llama 3.3 70B', 'VRAM (Q4)': '~42GB', '为什么': '最佳推理质量；当错误风险高时值得硬件成本' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '在16GB系统上进行大多数电子邮件任务，Qwen3 14B是正确的默认设置。使用`ollama pull qwen3:14b`拉取一次并将其用于所有电子邮件和日历自动化。仅当您遇到14B输出质量持续不足的任务类型时，才切换到更大的模型。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私和安全',
        content:
          '**本地电子邮件自动化的隐私优势是真实的，但它需要正确的设置。** 三件事可能会破坏它：IMAP凭据的意外云同步、第三方工具可访问的日志中的电子邮件内容，以及将工作流暴露给网络的错误配置的n8n实例。对于其他工具中"用本地AI替换SaaS"的更广泛模式，请参阅[用本地模型替换Grammarly和Notion AI](/zh/power-local-llm/replace-grammarly-notion-ai-with-local)。',
        items: [
          '**IMAP凭据：** 存储在环境变量或本地秘密管理器中（macOS Keychain、Linux`secret-tool`、Windows凭据管理器）。永远不要存储在脚本源代码或可能同步到云存储库的文件中。',
          '**日志中的电子邮件内容：** 将电子邮件内容打印到stdout/stderr的Python脚本会在通过cron运行且启用日志时将电子邮件数据写入日志文件。将日志重定向到`/dev/null`或使用排除电子邮件内容的日志级别。',
          '**n8n网络暴露：** n8n自托管默认绑定到`localhost:5678`，这是本地的。如果您将其暴露给您的家庭网络或更远的地方（例如，为了移动访问），添加身份验证并确保Ollama API也仅限于localhost。',
          '**应用密码：** 为Gmail、Outlook和Apple Mail上的IMAP访问设置专用应用特定密码——而不是主帐户密码。如果脚本受到危害，立即撤销。',
          '**Git存储库：** 当将自动化脚本放入版本控制时，添加`.gitignore`以排除包含凭据的`.env`文件。永远不要将凭据提交到公开或私有存储库。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '云同步风险。如果您的主目录同步到iCloud、谷歌云端硬盘或OneDrive，则同步目录中的`.env`或凭据文件将被上传到云。将凭据存储在明确从云同步中排除的目录中，或使用操作系统的本地秘密管理器。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**在未经人工审查的情况下自动发送草稿。** 没有本地LLM可以生成足够可靠的电子邮件草稿而无需人工审查就可以发送。语调错误、错误的数据和捏造的事实很常见。发送前总是阅读。',
          '**将整个电子邮件线程传递给模型。** 长线程包含冗余背景，浪费令牌，减慢生成。删除引用的回复块，仅传递最后2–3条消息。',
          '**对所有电子邮件任务使用Llama 3.3 70B。** 对于大多数电子邮件起草，Qwen3 14B更快，使用更少的VRAM。为真正复杂或高风险的通信保留70B。',
          '**在脚本中存储IMAP凭据。** 源代码中的凭据在一个`git push`中变为公开。使用环境变量。',
          '**不为草稿提示设置字数限制。** 没有字数限制，模型会用不必要的背景、警告和礼貌装饰来填充商业回复。将"少于150字的回复"添加到所有电子邮件提示。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'Qwen3 14B模型卡 — [阿里巴巴云 / Qwen团队](https://qwenlm.github.io)',
          'Phi-4 Mini技术报告 — [微软研究院](https://microsoft.com/research)',
          'Ollama API文档 — [Ollama](https://ollama.com/docs)',
          'n8n自托管文档 — [n8n.io](https://docs.n8n.io)',
          'GDPR第28条 — 数据处理器义务 — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '这与Gmail一起工作吗？',
            a: '是的。Gmail支持通过应用特定密码的IMAP访问。在Gmail设置中启用IMAP，在Google帐户安全设置中生成应用密码，在IMAP脚本中使用这些凭据。Gmail还公开Gmail API用于结构化访问——对于需要标签管理、线程操作和附件处理的n8n工作流很有用。',
          },
          {
            q: '对于电子邮件自动化，IMAP + Python还是n8n更好？',
            a: '如果您熟悉编写和维护脚本并想要完全控制，IMAP + Python更好。如果您想要条件逻辑（按发件人、时间或内容路由电子邮件）、日历集成或多个输出目的地，n8n更好（无需代码）。两者都使用Ollama作为本地模型后端；区别在于周围的编排层。',
          },
          {
            q: '本地AI可以汇总整个电子邮件收件箱吗？',
            a: '是的，有限制。每周收件箱汇总（50–100封电子邮件）效果很好：获取主题和每个正文的前200个字符、连接、使用"按主题和紧急性汇总"提示将其传递给Qwen3 14B。对于数千封电子邮件的完整收件箱，批处理汇总（每个API调用50封电子邮件），然后聚合批处理汇总。在一次调用中传递1,000封电子邮件超过背景限制，会产生不可靠的输出。',
          },
          {
            q: '对于正式商业电子邮件，最好的本地LLM是什么？',
            a: 'Qwen3 14B在消费者硬件上为正式商业通信产生最佳的质量对速度比。它可靠地处理正式的语气、适当的措辞和专业的结尾。对于非常高风险的通信（法律通知、行政通信、合同谈判），使用Llama 3.3 70B——质量差异在复杂和敏感的主题上是可见的。',
          },
          {
            q: '这在Windows上工作吗？',
            a: '是的。Ollama在Windows上运行（从ollama.com下载）。IMAP Python脚本在Windows上的任何Python 3.8+安装中运行。Thunderbird和Ollama Compose扩展是跨平台的。n8n自托管在Windows上通过npm或Docker Desktop运行。',
          },
          {
            q: '如何处理具有多个以前回复的电子邮件线程？',
            a: '在传递给模型之前删除引用的内容。使用Python`email`库仅提取最新回复（在第一个`>`前缀或`---原始消息---`分隔符上方的部分）。仅在总3,000字符限制内传递最后2–3条消息。模型很少需要完整的线程历史来生成足够的回复。',
          },
          {
            q: '这对商业用途符合GDPR吗？',
            a: '本地处理比云AI处理个人数据更符合GDPR。数据保留在您的计算机上，不会自动创建新的数据处理器关系（第28条）。但是，GDPR合规性取决于您的具体角色、数据性质和组织现有的数据保护政策。在处理客户或员工个人数据之前，请咨询您的数据保护官员。',
          },
          {
            q: '我可以为别人使用这个来起草回复吗？',
            a: '从技术上讲，是的——您可以配置脚本以使用您拥有凭据的任何IMAP帐户。在法律和道德上，在未经他人同意的情况下为他人生成电子邮件回复会引发关于同意和冒充的严肃问题。仅对您个人负责的帐户和通信使用此自动化。',
          },
          {
            q: '我可以在传入电子邮件上触发AI吗？',
            a: '是的，有3种模式。(1) Python + IMAP + Cron：计划脚本每30分钟运行一次、获取新的未读电子邮件、生成草稿。(2) n8n IMAP触发器节点：每1–5分钟轮询、立即为每个新电子邮件触发工作流。(3) Thunderbird过滤规则：使用curl调用Ollama的"运行脚本"过滤操作。n8n方法在真正的实时分类中最可靠；Cron在简单情况下使用30分钟延迟很好。',
          },
          {
            q: '我可以跨设备同步电子邮件AI吗？',
            a: '草稿可以通过现有IMAP草稿文件夹进行同步——将AI生成的草稿写入IMAP"草稿"文件夹（使用`mail.append()`），任何拥有IMAP访问权限的设备（手机、平板电脑、第二台笔记本电脑）都可以立即看到。Ollama后端本身不同步——在配置的机器上运行。移动设备需要网络访问到运行Ollama的家庭机器（LAN IP或Tailscale）。计划：主家庭服务器运行Ollama +自动化；所有设备从IMAP草稿文件夹读取。单个AI生成、多设备审查和发送。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关资料',
        items: [
          '[用本地AI代理替换Zapier](/zh/power-local-llm/replace-zapier-with-local-ai-agents) — 使用n8n、Ollama和Python进行本地工作流自动化。',
          '[本地AI代理，商业工作流：欧盟合规性](/zh/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — GDPR、欧盟AI法案和商业设置中本地AI部署的DACH合规性背景。',
          '[本地RAG、私密商业数据](/zh/power-local-llm/local-rag-for-private-business-data) — 在私密商业数据上设置文档Q&A而无需云API。',
          '[本地AI代理，MCP 2026](/zh/power-local-llm/local-ai-agents-with-mcp-2026) — MCP（模型背景协议）将本地LLM连接到电子邮件客户端、日历和其他工具作为代理背景。',
          '[自主本地代理：实际有效的](/zh/power-local-llm/autonomous-local-agents-actually-work) — 2026年，本地AI代理能做和不能做的诚实评估。',
          '[用本地模型替换Grammarly和Notion AI](/zh/power-local-llm/replace-grammarly-notion-ai-with-local) — 写作工具的相邻SaaS替换模式，补充电子邮件/日历替换。',
          '[2026年最佳本地LLMs](/zh/local-llms/best-local-llms-2026) — 这三个设置之一后面的聊天模型选择的更广泛模型权威。',
          '[零样本对比少样本提示](/zh/prompt-engineering/zero-shot-vs-few-shot) — 何时在提示中包含电子邮件示例与何时保留以获得更好的泛化。',
          '[本地LLM软件目录2026](/zh/power-local-llm/local-llm-software-directory-2026) — 此堆栈的组件目录列表，Ollama、n8n、Thunderbird等。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'الذكاء الاصطناعي المحلي للبريد الإلكتروني والتقويم: أتمتة بدون إرسال البيانات إلى السحابة (⁨2026⁩)',
    seoTitle: 'أتمتة البريد والتقويم بـ ⁨LLM⁩ محلي: ⁨Ollama + IMAP⁩',
    intro:
      'يمكن لنماذج اللغة المحلية الكبيرة صياغة ردود البريد الإلكتروني، وتلخيص صناديق الوارد، وإنشاء جداول أعمال الاجتماعات، وتصنيف أحداث التقويم — كل ذلك دون إرسال رسائلك إلى واجهة برمجة تطبيقات سحابية. تستعرض هذه الدليل البنى العملية: أتمتة IMAP المحلية مع Ollama، وعملاء البريد الإلكتروني مفتوحة المصدر مع إضافات الذكاء الاصطناعي المحلي، والحجة الخصوصية للحفاظ على بيانات الاتصالات على الجهاز.',
    metaDescription:
      'Ollama وn8n وتكامل IMAP يُصيّفون البريد الوارد ويصيغون الردود ويُحلّلون التقويم محلياً. مُختبَر لـ Qwen3 14B وPhi-4 Mini بلا API سحابي.',
    twitterDescription:
      'أتمتة البريد الإلكتروني بنموذج LLM محلي: صياغة الردود، وتلخيص صندوق الوارد، وإنشاء جداول الأعمال — كل ذلك محلياً بدون API سحابي. دليل إعداد سير عمل Ollama + IMAP.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      'المحترفون وأصحاب الأعمال الصغيرة والأفراد المهتمون بالخصوصية الذين يرغبون في أتمتة صياغة البريد الإلكتروني وتلخيص صندوق الوارد وإدارة التقويم دون إرسال بيانات الاتصالات إلى خدمات الذكاء الاصطناعي السحابية.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'أتمتة البريد الإلكتروني بنموذج LLM محلي',
    targetKeywords: [
      'أتمتة البريد الإلكتروني بنموذج llm محلي',
      'صياغة البريد الإلكتروني بـ ollama',
      'تلخيص صندوق الوارد بالذكاء الاصطناعي المحلي',
      'أتمتة التقويم بنموذج llm محلي',
      'مساعد بريد إلكتروني ذكاء اصطناعي خاص',
      'سير عمل imap مع نموذج llm محلي',
    ],
    leadAnswerBlock:
      '**أتمتة البريد الإلكتروني بنموذج LLM محلي تعمل بشكل أفضل كخط أنابيب من خطوتين: يجلب عميل البريد الإلكتروني أو سكريبت IMAP الرسالة الخام، ويحذف الرؤوس، ويمرر نص الرسالة العادي إلى Ollama عبر واجهة برمجة التطبيقات المحلية؛ يُنشئ النموذج مسودة رد تراجعها قبل الإرسال. لا يغادر أي محتوى بريد إلكتروني جهازك. الإعدادات الثلاثة الأكثر عملية في 2026 هي: (1) سكريبت Python مع IMAP يستدعي Ollama وفق جدول — 50 سطراً، قابل للأتمتة الكاملة؛ (2) Thunderbird مع إضافة Ollama Compose — واجهة رسومية بدون كود؛ (3) n8n مستضاف ذاتياً مع عقدة Ollama محلية — منشئ سير عمل مرئي للمستخدمين الراغبين في المنطق الشرطي والتصفية متعددة الخطوات وتكامل التقويم دون برمجة. لأتمتة التقويم، يعمل نفس استدعاء Ollama API مع ملفات ICS المُصدَّرة أو Google Calendar API بالاعتمادات المحلية — لإنشاء جداول أعمال الاجتماعات وتلخيص الأسبوع وصياغة رسائل متابعة من تفاصيل الأحداث.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أُؤتمت صياغة البريد الإلكتروني بنموذج LLM محلي دون إرسال رسائلي إلى السحابة؟',
        answer:
          'أسرع إعداد لأتمتة البريد الإلكتروني المحلي هو سكريبت Python مع IMAP يجلب الرسائل غير المقروءة، ويحذف الرؤوس، ويمرر النص العادي إلى Ollama API المحلي، ويحفظ مسودة الرد في ملف محلي أو مجلد المسودات. أقل من 50 سطراً من Python. لا تغادر بيانات البريد الإلكتروني جهازك. كبديل بواجهة رسومية، يتيح لك Thunderbird مع إضافة Ollama Compose النقر بزر الماوس الأيمن على أي بريد إلكتروني وإنشاء رد دون مغادرة العميل. لأتمتة سير العمل، يتعامل n8n المستضاف ذاتياً مع عقدة Ollama المحلية مع المنطق الشرطي والتصفية متعددة الخطوات وتكامل أحداث التقويم بدون تبعيات سحابية.',
        bullets: [
          'IMAP + Python + Ollama: سكريبت من 50 سطراً، يعمل وفق جدول، يحفظ المسودات محلياً — أبسط إعداد.',
          'Thunderbird + إضافة Ollama Compose: واجهة رسومية بدون كود، انقر بزر الماوس الأيمن لإنشاء رد في عميل البريد الإلكتروني.',
          'n8n مستضاف ذاتياً + عقدة Ollama: منشئ سير عمل مرئي للمنطق الشرطي والتصفية وتكامل التقويم.',
          'أتمتة التقويم: صدّر ملف ICS أو استخدم Google Calendar API محلياً لإنشاء جداول أعمال الاجتماعات ومسودات المتابعة.',
          'أفضل نموذج للبريد الإلكتروني: Qwen3 14B أو Phi-4 Mini — توليد سريع، استهلاك VRAM منخفض، جودة كافية للمراسلات التجارية.',
          'الخصوصية: بيانات اعتماد IMAP ومحتوى البريد الإلكتروني لا تغادر جهازك أبداً؛ لا استدعاءات API سحابية في أي من هذه الإعدادات.',
          'المراجعة قبل الإرسال إلزامية: تقع أخطاء في النبرة والحقائق لدى النماذج المحلية؛ عامل كل مخرج باعتباره مسودة أولى.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'لماذا استخدام ذكاء اصطناعي محلي للبريد الإلكتروني؟', anchor: '#why-local' },
      { label: 'مقارنة الأساليب', anchor: '#approach-comparison' },
      { label: 'الإعداد 1: IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: 'الإعداد 2: Thunderbird + إضافة Ollama', anchor: '#thunderbird' },
      { label: 'الإعداد 3: n8n مستضاف ذاتياً + Ollama', anchor: '#n8n' },
      { label: 'قوالب موجّهات الفرز والمراجعة الأسبوعية', anchor: '#triage-prompts' },
      { label: 'أتمتة التقويم', anchor: '#calendar' },
      { label: 'توصيات النماذج', anchor: '#models' },
      { label: 'الخصوصية والأمان', anchor: '#privacy' },
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
          '**ثلاثة إعدادات تغطي 95% من حالات استخدام أتمتة البريد الإلكتروني المحلي.** IMAP + Python + Ollama (50 سطراً، قابل للسكرتة بالكامل)، وThunderbird + Ollama Compose (واجهة رسومية، بدون كود)، وn8n مستضاف ذاتياً + عقدة Ollama (سير عمل مرئي، منطق شرطي). اختر الخيار الأبسط الذي يلائم سير عملك.',
          '**النماذج الأصغر أفضل للبريد الإلكتروني من العمل الإبداعي.** صياغة البريد الإلكتروني تتطلب الاتساق لا الإبداع. يُنشئ Qwen3 14B وPhi-4 Mini مسودات ردود بجودة تجارية في 2–5 ثوانٍ على نظام بـ 16 جيجابايت. Llama 3.3 70B مبالغة لمعظم مهام البريد الإلكتروني.',
          '**المراجعة قبل الإرسال ليست اختيارية.** تقع أخطاء في النبرة والحقائق والاختراعات لدى النماذج المحلية بانتظام. اقرأ دائماً المسودة قبل الإرسال.',
          '**لا يغادر أي محتوى بريد إلكتروني جهازك في أي من هذه الإعدادات.** اتصالات IMAP تذهب إلى خادم بريدك، لا إلى ذكاء اصطناعي سحابي. Ollama API محلي. n8n المستضاف ذاتياً يعمل على جهازك. ميزة الخصوصية حقيقية.',
          '**أتمتة التقويم تعمل بشكل أفضل مع ICS المُصدَّر أو استدعاء Google Calendar API محلياً.** صدّر أحداث الأسبوع إلى ملف ICS، ومرره إلى Ollama، واطلب منه إنشاء جدول أعمال الاجتماع أو قائمة فحص التحضير أو رسالة ملخص أسبوعي لفريقك.',
          '**بيانات اعتماد IMAP حساسة.** خزّنها في متغيرات البيئة أو مدير أسرار محلي، وليس مطلقاً في كود المصدر. استخدم كلمات مرور خاصة بالتطبيق بدلاً من كلمة المرور الرئيسية لحسابك.',
          '**n8n المستضاف ذاتياً هو الخيار الصحيح للمنطق الشرطي.** إذا أردت "تلخيص جميع رسائل [نطاق] يومياً" أو "إنشاء بريد إلكتروني متابعة عند انتهاء حدث تقويم"، فمنشئ سير العمل المرئي لـ n8n يتعامل مع ذلك بدون Python مخصص.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الإعدادات المشمولة:** IMAP + Python + Ollama، وThunderbird + Ollama Compose، وn8n مستضاف ذاتياً + عقدة Ollama.',
          '**أفضل نموذج للبريد الإلكتروني:** Qwen3 14B (سريع، استهلاك VRAM منخفض، جودة تجارية كافية) أو Phi-4 Mini (الأسرع، 4 جيجابايت VRAM).',
          '**VRAM المطلوب:** Qwen3 14B بـ Q4 = ~9 جيجابايت؛ Phi-4 Mini بـ Q4 = ~3 جيجابايت؛ Llama 3.3 70B بـ Q4 = ~42 جيجابايت.',
          '**تنسيقات البريد الإلكتروني المدعومة:** نص IMAP العادي (MIME مفكوك)، وملفات EML، وGmail API (اعتمادات محلية)، وOutlook عبر IMAP.',
          '**تنسيقات التقويم:** تصدير ICS (شامل)، وGoogle Calendar API (OAuth محلي)، وNextcloud Calendar (CalDAV).',
          '**تعقيد السكريبت:** IMAP + Python = ~50 سطراً؛ سير عمل n8n = مرئي، بدون كود؛ Thunderbird = تثبيت الإضافة فقط.',
          '**الخصوصية:** لا تُرسَل بيانات البريد الإلكتروني إلى أي API سحابي في أي إعداد؛ IMAP يتصل فقط بخادم بريدك.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'لماذا استخدام ذكاء اصطناعي محلي لأتمتة البريد الإلكتروني؟',
        content:
          '**السبب الرئيسي هو الخصوصية: كل بريد إلكتروني تلصقه في مساعد ذكاء اصطناعي سحابي يُسجَّل على الأرجح ويُستخدَم في التدريب ويخضع لسياسة الاحتفاظ بالبيانات لدى ذلك المزوّد.** المراسلات التجارية واتصالات العملاء والبريد الإلكتروني الشخصي تحتوي على معلومات لا تريدها في مجموعة بيانات طرف ثالث. يعالج نموذج LLM المحلي رسائلك على جهازك، ويعيد مسودة، ولا يحتفظ بشيء.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أتمتة البريد الإلكتروني بالذكاء الاصطناعي المحلي تُبقي جميع محتوى البريد الإلكتروني على جهازك — لا تتلقى API سحابية رسائلك، ولا يُسجّل طرف ثالث أو يتدرب على مراسلاتك، وتوليد المسودات يعمل بدون اتصال بالإنترنت.',
          },
          {
            type: 'plain-terms',
            text: 'عندما تلصق بريداً إلكترونياً في ChatGPT أو Claude.ai لطلب مسودة رد، يُعالَج ذلك البريد على خوادم OpenAI أو Anthropic. لمعظم الناس في معظم الأوقات، هذا مقبول. للمراسلات التجارية وتفاصيل العملاء ومناقشات العقود وأي اتصال يتضمن معلومات حساسة، ليس كذلك. يُعالج نموذج LLM محلي مُعدّ عبر Ollama نفس البريد الإلكتروني على جهازك ولا يُرسله في أي مكان.',
          },
        ],
        items: [
          '**سيادة البيانات:** محتوى البريد الإلكتروني ومعلومات المرسل وسياق الخيط تبقى على جهازك. لا تنطبق سياسة الاحتفاظ السحابية.',
          '**التشغيل دون اتصال:** بمجرد تشغيل Ollama وتنزيل النموذج، تعمل صياغة البريد الإلكتروني بدون الوصول إلى الإنترنت.',
          '**بدون حدود استخدام:** تفرض واجهات برمجة تطبيقات الذكاء الاصطناعي السحابية حدوداً للمعدل وقيوداً للرموز. الإعداد المحلي لا تكلفة فيه لكل طلب ولا حد يومي.',
          '**الامتثال التنظيمي:** قد تحظر اللائحة العامة لحماية البيانات وHIPAA ومتطلبات الامتياز المهني إرسال اتصالات العملاء إلى ذكاء اصطناعي تابع لطرف ثالث. تُزيل المعالجة المحلية هذا القلق.',
          '**السرعة للمهام القصيرة:** يُنشئ نموذج صغير (Qwen3 14B، Phi-4 Mini) مسودة بريد إلكتروني تجاري في 2–5 ثوانٍ على أجهزة المستهلكين — أسرع من معظم استدعاءات الذهاب والعودة السحابية للموجّهات القصيرة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أتمتة البريد الإلكتروني المحلي ليست بديلاً عن عميل البريد الإلكتروني — إنها مساعد صياغة يتكامل مع سير عملك الحالي. لا تزال تستخدم Thunderbird أو Apple Mail أو Gmail للإرسال؛ يُنشئ نموذج LLM المحلي نصاً تراجعه وتحرره وترسله من عميلك الحالي.',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: 'مقارنة الأساليب',
        content:
          '**تختلف الإعدادات الثلاثة في خمسة محاور ذات صلة بمعظم المستخدمين: صعوبة الإعداد، والموثوقية على مدى 30 يوماً، وموقف الخصوصية، وملف تعريف المستخدم الذي يناسب كل منها.** اختر الخيار الأبسط الذي يغطي سير عملك بدلاً من الأقوى.',
        columns: ['الأسلوب', 'الإعداد', 'الموثوقية (30 يوماً)', 'الخصوصية', 'مثالي لـ'],
        rows: [
          { 'الأسلوب': 'Thunderbird + Ollama Compose', 'الإعداد': 'سهل', 'الموثوقية (30 يوماً)': 'عالية (بدون عملية خلفية)', 'الخصوصية': 'محلي فقط', 'مثالي لـ': 'المحترفون الأفراد، الفرز اليومي، مستخدمو الواجهة الرسومية' },
          { 'الأسلوب': 'Python + IMAP + cron', 'الإعداد': 'صعب (50 سطراً + جدولة)', 'الموثوقية (30 يوماً)': 'عالية جداً (قابل للسكرتة والمراقبة)', 'الخصوصية': 'محلي فقط', 'مثالي لـ': 'المطورون الراغبون في التحكم الكامل + المنطق المخصص' },
          { 'الأسلوب': 'n8n مستضاف ذاتياً + Ollama', 'الإعداد': 'متوسط (محرر سير عمل مرئي)', 'الموثوقية (30 يوماً)': 'عالية (مع مراقبة الخادم الخاص)', 'الخصوصية': 'محلي مع الاستضافة الذاتية', 'مثالي لـ': 'المستخدمون ذوو سير عمل متعددة يستبدلون Zapier؛ المنطق الشرطي' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: 'الإعداد 1: IMAP + Python + Ollama',
        content:
          '**الإعداد الأكثر قابلية للسكرتة: سكريبت Python يجلب الرسائل غير المقروءة عبر IMAP، ويحذف الرؤوس والـ HTML، ويمرر النص العادي إلى Ollama API المحلي، ويحفظ مسودة الرد.** يعمل وفق جدول مع cron أو Task Scheduler. خمسون سطراً من Python، بدون تبعيات خارجية إلى جانب عميل Ollama لـ Python.',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'خط أنابيب محلي لمسودات البريد الإلكتروني عبر IMAP + Python + Ollama: 4 خطوات من جلب رسالة غير مقروءة إلى حفظ المسودة، باستخدام Qwen3 14B (9 GB VRAM) عبر واجهة Ollama المحلية — بدون أي استدعاءات لواجهة برمجة سحابية.',
        promptExamples: [
          {
            label: 'جلب بريد IMAP + مسودة Ollama (هيكل Python)',
            text: 'import imaplib, email, os\nimport ollama\n\n# Conectar a IMAP\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# Obtener emails no leídos\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # Generar borrador con Ollama\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "You are a professional email assistant. Write concise, polite business replies. Match the formality level of the incoming email."},\n        {"role": "user", "content": f"Email from: {sender}\\nSubject: {subject}\\n\\nBody:\\n{body[:2000]}\\n\\nWrite a draft reply."}\n    ])\n    draft = response["message"]["content"]\n    print(f"DRAFT for: {subject}\\n{draft}\\n---")',
          },
        ],
        items: [
          '**بيانات اعتماد IMAP:** خزّنها في متغيرات البيئة (`IMAP_HOST`، و`IMAP_USER`، و`IMAP_PASS`) — وليس مطلقاً في كود المصدر. استخدم كلمة مرور خاصة بالتطبيق بدلاً من كلمة المرور الرئيسية لحسابك.',
          '**اقتطاع الجسم:** قيّد جسم البريد الإلكتروني بـ 2000–3000 حرف قبل تمريره إلى Ollama. نادراً ما تضيف خيوط البريد الإلكتروني الطويلة سياقاً مفيداً لمسودة الرد وتُبطئ التوليد.',
          '**إزالة HTML:** إذا كان جسم البريد الإلكتروني بـ HTML، استخدم `html.parser` أو `BeautifulSoup` لاستخراج النص العادي قبل تمريره إلى النموذج. تقلل علامات HTML من جودة التوليد.',
          '**الجدولة:** على macOS/Linux، أضف إدخال cron (`crontab -e`) لتشغيل السكريبت كل 30 دقيقة. على Windows، استخدم Task Scheduler مع مسار مفسر Python.',
          '**تخزين المسودات:** اكتب المسودات في ملف نصي محلي لكل بريد إلكتروني (مُسمى بالطابع الزمني + slug الموضوع) أو ادفعها إلى مجلد IMAP "Drafts" باستخدام `mail.append()`. قراءة الملفات النصية أأمن للمراجعة؛ مسودات IMAP تتيح لك الإرسال من أي عميل.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تُفعّل الإرسال التلقائي. لا يُنتج أي نموذج LLM محلي مسودات بريد إلكتروني موثوقة بما يكفي للإرسال بدون مراجعة بشرية. تقع أخطاء النبرة والتواريخ الخاطئة والحقائق المخترعة وأخطاء الرد على الخيط الخطأ بانتظام. تُوفّر الأتمتة وقت الصياغة؛ خطوة المراجعة إلزامية.',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: 'الإعداد 2: Thunderbird + إضافة Ollama Compose',
        content:
          '**تطبيق Thunderbird مع إضافة Ollama Compose هو الخيار بدون كود.** ثبّت Thunderbird، وثبّت Ollama، ونزّل نموذجاً، وثبّت الإضافة — توليد البريد الإلكتروني على بُعد نقرة يمين في نافذة التأليف.',
        items: [
          '**ثبّت Thunderbird** من thunderbird.net. متاح لنظامي macOS وWindows وLinux.',
          '**ثبّت Ollama ونزّل نموذجاً:** `ollama pull qwen3:14b` (موصى به لعمل البريد الإلكتروني). شغّل `ollama serve`.',
          '**ثبّت إضافة Ollama Compose** من مدير إضافات Thunderbird. ابحث عن "Ollama" أو ثبّت من ملف XPI من مستودع المشروع.',
          '**هيّئ الإضافة** للإشارة إلى `http://localhost:11434` واختر نموذجك (يُوصى بـ Qwen3 14B أو Phi-4 Mini).',
          '**في نافذة التأليف:** انقر بزر الماوس الأيمن على منطقة الجسم واختر "Generate with Ollama" — ترسل الإضافة البريد الإلكتروني الأصلي المقتبس وموضع المؤشر إلى Ollama وتُدرج مسودة الرد.',
          '**تبديل النموذج:** تتيح لك الإضافة تبديل النماذج من شريط أدوات التأليف. استخدم Phi-4 Mini للردود السريعة؛ انتقل إلى Qwen3 14B أو Llama 3.3 70B للمراسلات المعقدة أو الحساسة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ضع موجّه نظام مخصصاً في إعدادات Ollama Compose. الموجّه الافتراضي عام؛ الموجّه المخصص يُنتج نتائج أفضل. مثال: "تكتب ردود بريد إلكتروني مهنية لـ [اسمك]، وهو [دورك] في [الشركة]. الردود موجزة (أقل من 150 كلمة إلا إذا استدعى السياق أكثر)، دافئة بشكل مهني، وتتطابق مع رسمية البريد الإلكتروني الوارد. لا تضف أبداً إخلاء مسؤولية قانونياً أو أسطر توقيع."',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: 'الإعداد 3: n8n مستضاف ذاتياً + عقدة Ollama',
        content:
          '**أداة n8n المستضافة ذاتياً مع عقدة Ollama المحلية هي الخيار الصحيح للأتمتة الشرطية: فلترة الرسائل حسب نطاق المرسل، والتلخيص اليومي، وإنشاء المتابعات عند انتهاء أحداث التقويم، أو توجيه أنواع مختلفة من الرسائل إلى موجّهات نموذج مختلفة — كل ذلك دون كتابة كود.**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: 'سير عمل n8n مستضاف ذاتياً لأتمتة البريد الإلكتروني والتقويم: يوجّه مشغّل IMAP وفلتر النطاق الرسائل إلى عقدة Ollama محلية، بينما يحوّل فرع تقويم موازٍ أحداث ICS أو تقويم جوجل إلى جداول أعمال الاجتماعات — نسخة واحدة من Ollama، بدون واجهة برمجة سحابية.',
        items: [
          '**ثبّت n8n مستضافاً ذاتياً:** `npm install -g n8n && n8n start` أو `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`. محرر سير العمل يعمل على `http://localhost:5678`.',
          '**أضف عقدة Ollama:** في محرر سير عمل n8n، ابحث عن عقدة "Ollama" (مدمجة منذ n8n الإصدار 1.2+). أشر إليها على `http://localhost:11434` واختر نموذجك.',
          '**مُشغّل IMAP:** أضف عقدة IMAP Email كمُشغّل لسير العمل — هيّئها ببيانات اعتماد IMAP الخاصة بك. تستطلع العقدة الرسائل الجديدة وتمرر كل واحدة كمخرج JSON إلى الخطوة التالية.',
          '**منطق التصفية:** أضف عقدة IF لتوجيه الرسائل حسب نطاق المرسل أو الكلمات المفتاحية في الموضوع أو وقت اليوم. وجّه إلى موجّهات Ollama مختلفة حسب نوع البريد الإلكتروني (رسائل العملاء وملخصات النشرات الإخبارية والرسائل الداخلية).',
          '**تكامل التقويم:** أضف عقدة Google Calendar (باستخدام اعتمادات OAuth محلية) أو قارئ ملفات ICS للحصول على الأحداث القادمة. مرّر تفاصيل الحدث إلى عقدة Ollama لإنشاء جدول أعمال اجتماع أو قائمة فحص تحضير.',
          '**خيارات الإخراج:** اكتب المسودات في ملف محلي، أو ادفع إلى مسودات IMAP، أو أرسل عبر رسالة Slack إلى نفسك، أو احفظ في صفحة Notion/Obsidian — كل ذلك عبر عقد إخراج n8n.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'n8n المستضاف ذاتياً هو أفضل نقطة تكامل لسير عمل التقويم + البريد الإلكتروني. النمط النموذجي: مُشغّل IMAP يستقبل بريد تأكيد اجتماع ← يستخرج تفاصيل الاجتماع ← يستدعي Google Calendar API (OAuth محلي) للحصول على الحاضرين ← يمرر السياق الكامل إلى Ollama ← يُنشئ جدول أعمال الاجتماع ← يحفظ في مجلد مخصص. هذا يستغرق نحو 20 دقيقة إعداد في محرر n8n المرئي.',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: 'قوالب موجّهات الفرز والمراجعة الأسبوعية',
        content:
          '**موجّهان يتعاملان مع مهام البريد الإلكتروني الأكثر شيوعاً: التصنيف لكل بريد إلكتروني والمراجعة الأسبوعية لصندوق الوارد.** ادمجهما في أي من الإعدادات الثلاثة (سكريبت Python، أو موجّه نظام Thunderbird، أو جسم عقدة Ollama لـ n8n) — صُمِّما عمداً ليكونا محايدَي النموذج.',
        promptExamples: [
          {
            label: 'قالب موجّه الفرز',
            text: 'أنت مساعد فرز بريد إلكتروني. بالنظر إلى البريد الإلكتروني التالي، صنّفه في إحدى هذه الفئات واشرح في جملة واحدة:\n- عاجل: يتطلب رداً في غضون 4 ساعات\n- مهم: يتطلب رداً في غضون 24 ساعة\n- معلومات: للقراءة فقط، لا يلزم رد\n- ترويجي: تسويق أو نشرة إخبارية، يمكن أرشفتها\n- بريد مزعج: غير مرغوب، يُوصى بالتصفية\n\nالبريد الإلكتروني:\nمن: {sender}\nالموضوع: {subject}\nالجسم: {body[:1500]}\n\nتنسيق الإخراج:\nالفئة: [عاجل|مهم|معلومات|ترويجي|بريد مزعج]\nالتفسير: [جملة واحدة]\nالإجراء المقترح: [رد | أرشفة | تمييز | حذف]',
          },
          {
            label: 'قالب موجّه المراجعة الأسبوعية',
            text: 'لخّص الرسائل الخمسين التالية من الأسبوع الماضي في 3 أقسام:\n1. البنود العاجلة أو المهمة التي لا تزال تتطلب إجراءً (مع المرسل + ملخص سطر واحد)\n2. الموضوعات (مثل "ظهر تخطيط الربع الرابع في 12 رسالة هذا الأسبوع")\n3. الأشخاص الذين أنا مدين بردّ لهم (المرسل + أيام التأخير)\n\nالرسائل (الموضوع + أول 200 حرف من كل جسم):\n[الصق قائمة الرسائل على دفعات]\n\nتنسيق الإخراج: 3 أقسام بـ markdown.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'لموجّه الفرز، ادمجه مع عقدة IF في n8n للتوجيه حسب الفئة: عاجل ← إشعار فوري، مهم ← احفظ في مجلد "يحتاج-رداً"، ترويجي ← أرشف تلقائياً، بريد مزعج ← ضع علامة لقاعدة التصفية. التصنيف هو ما يجعل الأتمتة اللاحقة آمنة — بدونه لا يستطيع خط الأنابيب التمييز بين متابعة عميل وبريد تسويقي.',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: 'أتمتة التقويم بنماذج LLM المحلية',
        content:
          '**تعمل أتمتة التقويم بنموذج LLM محلي في وضعين: سلبي (تصدير ICS، تمريره إلى Ollama للتلخيص أو إنشاء جدول الأعمال) وفعّال (Google Calendar API باعتمادات OAuth محلية للوصول الفوري للأحداث).** الوضع السلبي أبسط؛ الوضع الفعّال يُتيح سير عمل مجدوَلة.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تُنشئ أتمتة التقويم بالذكاء الاصطناعي المحلي جداول أعمال الاجتماعات وملخصات الأسبوع ومسودات رسائل المتابعة عن طريق تمرير محتوى ملف ICS المُصدَّر أو بيانات Google Calendar API إلى Ollama — لا تلمس بيانات التقويم أي ذكاء اصطناعي سحابي.',
          },
          {
            type: 'plain-terms',
            text: 'أبسط أتمتة للتقويم: صدّر أحداث أسبوعك كملف ICS من أي تطبيق تقويم (Google Calendar أو Apple Calendar أو Nextcloud)، وافتح طرفية، ومرّر محتوى ICS إلى Ollama مع موجّه "أنشئ جدول أعمال اجتماع لكل حدث" وانسخ المخرج إلى ملاحظاتك. يستغرق 30 ثانية ويُبقي بيانات تقويمك محلية.',
          },
        ],
        promptExamples: [
          {
            label: 'قالب موجّه ICS إلى جدول أعمال',
            text: 'هذا تقويمي للأسبوع بتنسيق ICS:\n\n[الصق محتوى ICS]\n\nلكل حدث اجتماع:\n1. أنشئ جدول أعمال اجتماع من 5 نقاط بناءً على عنوان الحدث ووصفه.\n2. إذا كان الحاضرون مدرجين، حدد من يجب أن يقود كل نقطة في جدول الأعمال.\n3. إذا لم يكن للحدث وصف، أنشئ جدول أعمال عاماً مناسباً لاجتماع من نوع [نوع الاجتماع].\n\nتنسيق كنص عادي. قسم واحد لكل حدث، مفصول بـ ---.',
          },
        ],
        items: [
          '**تصدير ICS (سلبي):** Google Calendar وApple Calendar وNextcloud وOutlook كلها تُصدّر ملفات ICS. صدّر أسبوعياً أو يومياً، ومرّر إلى Ollama عبر الطرفية أو سكريبت، وأنشئ جداول أعمال أو ملخصات.',
          '**Google Calendar API (فعّال):** أنشئ اعتماد OAuth محلياً في Google Cloud Console (مشروع شخصي)، ونزّل JSON الاعتمادات، واستخدم مكتبة Python `google-auth-oauthlib` لجلب الأحداث. يُخزَّن رمز OAuth محلياً واستدعاءات API تذهب مباشرة إلى Google Calendar — بدون وسيط ذكاء اصطناعي.',
          '**موجّه إنشاء جدول أعمال الاجتماع:** عنوان + حاضرون + وصف ← "أنشئ جدول أعمال اجتماع من 5 نقاط مع تخصيصات الوقت. إذا كان وصف الاجتماع فارغاً، اقترح جدول أعمال عاماً لاجتماع من نوع [نوع الاجتماع]."',
          '**موجّه الملخص الأسبوعي:** جميع أحداث الأسبوع ← "لخّص اجتماعات الأسبوع في 3 جمل. أبرز أي كتل متتالية أو اجتماعات طويلة بشكل غير معتاد."',
          '**مسودة بريد المتابعة:** بعد الاجتماع (مُفعَّل بوقت انتهاء الحدث) ← "اكتب بريداً إلكترونياً للمتابعة بعد اجتماع \'[العنوان]\' يشكر الحاضرين ويلخص الخطوات التالية. استخدم وصف الحدث هذا كسياق: [الوصف]."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'احتفظ ببيانات تقويمك كنص عادي حيثما أمكن. ICS نص عادي؛ من السهل تمريره مباشرة إلى Ollama. إذا كنت تستخدم تنسيق تقويم خاصاً أو نظاماً مؤسسياً مغلقاً، صدّره أولاً إلى ICS. معيار ICS شامل وتدعمه جميع تطبيقات التقويم الرئيسية.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'توصيات النماذج لمهام البريد الإلكتروني والتقويم',
        content:
          '**تُفضّل مهام أتمتة البريد الإلكتروني والتقويم النماذج الأصغر والأسرع على الكبيرة والأقوى.** صياغة رد بريد إلكتروني تجاري، وإنشاء جدول أعمال اجتماع، وتلخيص صندوق وارد — لا تتطلب Llama 3.3 70B؛ تتطلب نموذجاً سريعاً بما يكفي ليبدو تفاعلياً ومتسقاً بما يكفي لإنتاج نص تجاري قابل للاستخدام. للاطلاع على مشهد النماذج الأشمل عبر جميع حالات الاستخدام، راجع [أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026).',
        columns: ['المهمة', 'النموذج الموصى به', 'VRAM (Q4)', 'السبب'],
        rows: [
          { 'المهمة': 'صياغة مسودات ردود البريد الإلكتروني', 'النموذج الموصى به': 'Qwen3 14B', 'VRAM (Q4)': '~9 جيجابايت', 'السبب': 'أفضل توازن بين جودة كتابة الأعمال وسرعة التوليد؛ يتعامل مع الأسلوبين الرسمي وغير الرسمي' },
          { 'المهمة': 'ردود سريعة من سطر واحد', 'النموذج الموصى به': 'Phi-4 Mini', 'VRAM (Q4)': '~3 جيجابايت', 'السبب': 'الأسرع؛ مناسب للتأكيدات البسيطة وردود الجدولة' },
          { 'المهمة': 'إنشاء جدول أعمال الاجتماع', 'النموذج الموصى به': 'Qwen3 14B', 'VRAM (Q4)': '~9 جيجابايت', 'السبب': 'جيد لتوليد القوائم المنظمة؛ تنسيق جدول الأعمال ضمن قدراته' },
          { 'المهمة': 'تلخيص خيوط بريد إلكتروني طويلة', 'النموذج الموصى به': 'Llama 3.3 70B أو Qwen3 32B', 'VRAM (Q4)': '~42 جيجابايت / ~20 جيجابايت', 'السبب': 'التمسك بالسياق الطويل مهم للخيوط متعددة الرسائل؛ النماذج الأصغر تُضيّع التفاصيل' },
          { 'المهمة': 'المراسلات الحساسة / القانونية', 'النموذج الموصى به': 'Llama 3.3 70B', 'VRAM (Q4)': '~42 جيجابايت', 'السبب': 'أفضل جودة استدلال؛ يستحق تكلفة الأجهزة عندما تكون الأخطاء عالية المخاطر' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'لمعظم مهام البريد الإلكتروني على نظام بـ 16 جيجابايت، Qwen3 14B هو الخيار الافتراضي الصحيح. نزّله مرة واحدة بـ `ollama pull qwen3:14b` واستخدمه لجميع أتمتة البريد الإلكتروني والتقويم. انتقل فقط إلى نموذج أكبر عندما تجد نوع مهمة تكون فيه جودة مخرجات 14B غير كافية باستمرار.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والأمان',
        content:
          '**ميزة خصوصية أتمتة البريد الإلكتروني المحلي حقيقية، لكنها تتطلب إعداداً صحيحاً.** ثلاثة أشياء يمكنها تقويضها: المزامنة السحابية العرضية لبيانات اعتماد IMAP، ومحتوى البريد الإلكتروني في سجلات يمكن لأدوات الطرف الثالث الوصول إليها، وحالات n8n المهيأة بشكل خاطئ التي تكشف سير العمل للشبكة. للنمط الأشمل لـ "استبدال SaaS بالذكاء الاصطناعي المحلي" في الأدوات الأخرى، راجع [استبدال Grammarly وNotion AI بنماذج محلية](/ar/power-local-llm/replace-grammarly-notion-ai-with-local).',
        items: [
          '**بيانات اعتماد IMAP:** خزّنها في متغيرات البيئة أو مدير أسرار محلي (macOS Keychain أو Linux `secret-tool` أو Credential Manager في Windows). لا تخزّنها مطلقاً في كود المصدر للسكريبت أو في ملف يمكن مزامنته مع مستودع سحابي.',
          '**محتوى البريد الإلكتروني في السجلات:** سكريبتات Python التي تطبع محتوى البريد الإلكتروني على stdout/stderr ستكتب بيانات البريد في ملفات السجل إذا شُغّلت عبر cron مع تفعيل التسجيل. أعد توجيه السجلات إلى `/dev/null` أو استخدم مستوى تسجيل يستثني محتوى البريد الإلكتروني.',
          '**كشف شبكة n8n:** يرتبط n8n المستضاف ذاتياً بـ `localhost:5678` افتراضياً، وهو محلي فقط. إذا كشفته لشبكتك المنزلية أو أبعد (مثل الوصول المحمول)، أضف مصادقة وتأكد أن Ollama API مقيّد أيضاً بـ localhost.',
          '**كلمات مرور التطبيقات:** هيّئ كلمة مرور خاصة بالتطبيق لوصول IMAP في Gmail وOutlook وApple Mail بدلاً من استخدام كلمة المرور الرئيسية لحسابك. ألغِها فوراً إذا تعرّض السكريبت للاختراق.',
          '**مستودعات Git:** إذا كنت تتحكم في إصدار سكريبتات الأتمتة، أضف `.gitignore` يستثني أي ملف `.env` يحتوي على اعتمادات. لا تلتزم مطلقاً ببيانات الاعتماد في مستودع عام أو خاص.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'خطر المزامنة السحابية. إذا كان دليلك الرئيسي يتزامن مع iCloud أو Google Drive أو OneDrive، فأي ملف `.env` أو ملف اعتمادات في دليل متزامن سيُحمَّل إلى السحابة. خزّن الاعتمادات في دليل مستثنى صراحةً من المزامنة السحابية، أو استخدم مدير الأسرار الأصلي لنظام تشغيلك.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**إرسال المسودات تلقائياً بدون مراجعة.** لا يُنتج أي نموذج محلي مخرجات موثوقة بما يكفي للإرسال بدون مراجعة بشرية. أخطاء النبرة والتواريخ الخاطئة والحقائق المخترعة شائعة. اقرأ دائماً قبل الإرسال.',
          '**تمرير خيوط بريد إلكتروني كاملة إلى النموذج.** الخيوط الطويلة تحتوي على سياق مكرر يُهدر الرموز ويُبطئ التوليد. احذف كتل الردود المقتبسة ومرّر فقط آخر 2–3 رسائل.',
          '**استخدام Llama 3.3 70B لجميع مهام البريد الإلكتروني.** لمعظم صياغة البريد الإلكتروني، Qwen3 14B أسرع ويستهلك VRAM أقل. احتفظ بنموذج 70B للمراسلات المعقدة أو عالية المخاطر فعلاً.',
          '**تخزين بيانات اعتماد IMAP في السكريبت.** الاعتمادات في كود المصدر على بُعد `git push` واحد من أن تصبح عامة. استخدم متغيرات البيئة.',
          '**عدم تحديد حد كلمات في موجّهات المسودة.** بدون حد كلمات، تُحشو النماذج ردود الأعمال بسياق غير ضروري وتحذيرات ومجاملات. أضف "الرد في أقل من 150 كلمة" إلى كل موجّه بريد إلكتروني.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'بطاقة نموذج Qwen3 14B — [Alibaba Cloud / فريق Qwen](https://qwenlm.github.io)',
          'التقرير التقني لـ Phi-4 Mini — [Microsoft Research](https://microsoft.com/research)',
          'توثيق Ollama API — [Ollama](https://ollama.com/docs)',
          'توثيق n8n المستضاف ذاتياً — [n8n.io](https://docs.n8n.io)',
          'GDPR المادة 28 — التزامات معالج البيانات — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل هذا مع Gmail؟',
            a: 'نعم. يدعم Gmail الوصول عبر IMAP بكلمة مرور خاصة بالتطبيق. فعّل IMAP في إعدادات Gmail، وأنشئ كلمة مرور تطبيق في إعدادات أمان حساب Google الخاص بك، واستخدم تلك الاعتمادات في سكريبت IMAP. يكشف Gmail أيضاً Gmail API للوصول الأكثر تنظيماً — مفيد لسير عمل n8n التي تحتاج إدارة التصنيفات وعمليات الخيوط ومعالجة المرفقات.',
          },
          {
            q: 'أيهما أفضل لأتمتة البريد الإلكتروني: IMAP + Python أم n8n؟',
            a: 'IMAP + Python أفضل إذا كنت مرتاحاً لكتابة وصيانة سكريبت وتريد التحكم الكامل. n8n أفضل إذا أردت منطقاً شرطياً (توجيه الرسائل حسب المرسل أو الوقت أو المحتوى)، أو تكامل التقويم، أو عدة وجهات إخراج بدون كتابة كود. كلاهما يستخدم Ollama كواجهة خلفية للنموذج المحلي؛ الفرق هو طبقة التنسيق المحيطة بهما.',
          },
          {
            q: 'هل يمكن لذكاء اصطناعي محلي تلخيص صندوق وارد بريد إلكتروني كامل؟',
            a: 'نعم، مع تحفظات. ملخص صندوق الوارد الأسبوعي (50–100 رسالة) يعمل بشكل جيد: اجلب الموضوعات وأول 200 حرف من كل جسم، وسلسلها، ومررها إلى Qwen3 14B مع موجّه "لخّص حسب الموضوع والإلحاح". لصندوق وارد كامل بآلاف الرسائل، معالجة الملخص على دفعات (50 رسالة لكل استدعاء API) ثم تجميع ملخصات الدفعات. تمرير 1000 رسالة في استدعاء واحد يتجاوز حدود السياق وينتج مخرجات غير موثوقة.',
          },
          {
            q: 'ما أفضل نموذج LLM محلي لصياغة رسائل الأعمال الرسمية؟',
            a: 'يُنتج Qwen3 14B أفضل نسبة جودة-سرعة للمراسلات التجارية الرسمية على أجهزة المستهلكين. يتعامل بشكل موثوق مع الأسلوب الرسمي والصياغة المناسبة والختامات المهنية. للمراسلات عالية المخاطر جداً (الإشعارات القانونية والاتصالات التنفيذية وتفاوضات العقود)، استخدم Llama 3.3 70B — فارق الجودة مرئي للموضوعات المعقدة والحساسة.',
          },
          {
            q: 'هل يعمل هذا على Windows؟',
            a: 'نعم. يعمل Ollama على Windows (التنزيل من ollama.com). يعمل سكريبت Python مع IMAP على أي تثبيت Python 3.8+ على Windows. Thunderbird وإضافة Ollama Compose متعددا المنصات. يعمل n8n المستضاف ذاتياً على Windows عبر npm أو Docker Desktop.',
          },
          {
            q: 'كيف أتعامل مع خيوط البريد الإلكتروني ذات الردود المتعددة السابقة؟',
            a: 'احذف المحتوى المقتبس قبل تمريره إلى النموذج. استخدم مكتبة `email` في Python لاستخراج الرد الأخير فقط (الجزء فوق أول بادئة `>` أو مُفصِّل `--- Original Message ---`). مرّر فقط آخر 2–3 رسائل بحد إجمالي 3000 حرف. نادراً ما يحتاج النموذج إلى السجل الكامل للخيط لتوليد رد مناسب.',
          },
          {
            q: 'هل هذا متوافق مع اللائحة العامة لحماية البيانات (GDPR) للاستخدام التجاري؟',
            a: 'المعالجة المحلية أكثر قابلية للدفاع عنها في إطار اللائحة العامة لحماية البيانات من معالجة الذكاء الاصطناعي السحابي للبيانات الشخصية. عندما تبقى البيانات على جهازك، لا تنشئ علاقة معالج بيانات جديدة (المادة 28). ومع ذلك، يعتمد الامتثال للائحة العامة لحماية البيانات على دورك المحدد وطبيعة البيانات وسياسات حماية البيانات الموجودة في مؤسستك. استشر مسؤول حماية البيانات لديك قبل استخدام هذا الإعداد لمعالجة البيانات الشخصية للعملاء أو الموظفين.',
          },
          {
            q: 'هل يمكنني استخدام هذا لصياغة ردود نيابةً عن شخص آخر؟',
            a: 'من الناحية التقنية نعم — يمكن تهيئة السكريبت للوصول إلى أي حساب IMAP تمتلك اعتماداته. من الناحية القانونية والأخلاقية، يُثير توليد ردود بريد إلكتروني نيابةً عن شخص آخر بدون علمه مخاوف جدية تتعلق بالموافقة والانتحال. استخدم هذه الأتمتة فقط للحسابات والمراسلات التي أنت مسؤول عنها شخصياً.',
          },
          {
            q: 'هل يمكنني تفعيل الذكاء الاصطناعي على الرسائل الواردة؟',
            a: 'نعم، عبر ثلاثة أنماط. (1) Python + IMAP + cron: جدوِل السكريبت للتشغيل كل 30 دقيقة، واجلب الرسائل غير المقروءة الجديدة، وأنشئ مسودات. (2) عقدة مُشغّل IMAP في n8n: استطلاع كل 1–5 دقائق، تفعيل سير العمل فوراً لكل بريد إلكتروني جديد. (3) قواعد تصفية Thunderbird: استخدم إجراء تصفية "تشغيل سكريبت" يستدعي Ollama عبر curl. نهج n8n هو الأكثر موثوقية للفرز الفوري الفعلي؛ cron أبسط إذا كان تأخير 30 دقيقة مقبولاً.',
          },
          {
            q: 'هل يمكنني مزامنة ذكاء اصطناعي البريد الإلكتروني عبر الأجهزة؟',
            a: 'يمكن مزامنة المسودات عبر مجلد IMAP Drafts الحالي — اكتب المسودة التي أنشأها الذكاء الاصطناعي في مجلد IMAP "Drafts" (باستخدام `mail.append()`)، وأي جهاز يمتلك وصول IMAP (هاتف أو جهاز لوحي أو حاسوب محمول ثانٍ) سيراها فوراً. واجهة Ollama الخلفية نفسها لا تتزامن — تعمل على الجهاز الذي هيّأته عليه. تحتاج الأجهزة المحمولة إلى وصول شبكي إلى الجهاز المنزلي الذي يشغّل Ollama (IP LAN أو Tailscale). الخطة: الخادم المنزلي يشغّل Ollama + الأتمتة؛ جميع الأجهزة تقرأ المسودات من مجلد IMAP Drafts. توليد ذكاء اصطناعي واحد، مراجعة وإرسال على أجهزة متعددة.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[استبدال Zapier بوكلاء الذكاء الاصطناعي المحلية](/ar/power-local-llm/replace-zapier-with-local-ai-agents) — أتمتة سير العمل المحلية باستخدام n8n وOllama وPython لأتمتة العمليات التجارية.',
          '[وكلاء الذكاء الاصطناعي المحلية لسير العمل التجاري: الامتثال في الاتحاد الأوروبي](/ar/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — سياق GDPR وقانون الذكاء الاصطناعي للاتحاد الأوروبي والامتثال لنشر الذكاء الاصطناعي المحلي في البيئات التجارية.',
          '[RAG المحلي لبيانات الأعمال الخاصة](/ar/power-local-llm/local-rag-for-private-business-data) — كيفية إعداد الأسئلة والأجوبة على المستندات للبيانات التجارية الخاصة بدون واجهات API سحابية.',
          '[وكلاء الذكاء الاصطناعي المحلية مع MCP 2026](/ar/power-local-llm/local-ai-agents-with-mcp-2026) — MCP (بروتوكول سياق النماذج) لربط نماذج LLM المحلية بعملاء البريد الإلكتروني والتقويمات وأدوات أخرى كسياقات وكيل.',
          '[الوكلاء المحليون المستقلون: ما يعمل فعلاً](/ar/power-local-llm/autonomous-local-agents-actually-work) — تقييم صادق لما يمكن وما لا يمكن لوكلاء الذكاء الاصطناعي المحلية فعله في 2026.',
          '[استبدال Grammarly وNotion AI بنماذج محلية](/ar/power-local-llm/replace-grammarly-notion-ai-with-local) — نمط استبدال SaaS المجاور لأدوات الكتابة، يُكمّل استبدال البريد الإلكتروني/التقويم هنا.',
          '[أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026) — المرجع الأشمل للنماذج لاختيار نموذج الدردشة خلف أي من هذه الإعدادات الثلاثة.',
          '[الموجّه الصفري مقابل الموجّه القليل الأمثلة](/ar/prompt-engineering/zero-shot-vs-few-shot) — متى تُضمّن أمثلة البريد الإلكتروني في الموجّه ومتى تحذفها لتعميم أفضل.',
          '[دليل برامج LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — قوائم الدليل لمكونات هذه الحزمة: Ollama وn8n وThunderbird وغيرها.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'الذكاء الاصطناعي المحلي للبريد الإلكتروني والتقويم: أتمتة بدون API سحابي (2026)',
      description: 'كيفية أتمتة صياغة البريد الإلكتروني وتلخيص صندوق الوارد وإدارة التقويم باستخدام نموذج LLM محلي. Ollama وتكامل IMAP وأتمتة الاتصالات مع الخصوصية.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-llm-email-and-calendar-automation',
      inLanguage: 'ar',
      datePublished: '2026-05-07',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: '로컬 LLM으로 이메일·캘린더 자동화: 클라우드 API 없이 처리하기 (2026)',
    seoTitle: '로컬 AI 이메일·캘린더 자동화 2026',
    intro:
      '로컬 LLM은 이메일 답장 초안 작성, 받은 편지함 요약, 회의 안건 생성, 캘린더 이벤트 분류를 클라우드 API에 메시지를 전송하지 않고 수행할 수 있습니다. 이 가이드는 실용적인 아키텍처를 다룹니다. Ollama를 활용한 로컬 IMAP 자동화, 로컬 AI 플러그인이 포함된 오픈소스 이메일 클라이언트, 그리고 통신 데이터를 자신의 기기에서 유지하기 위한 개인정보 보호 기초 사항입니다.',
    metaDescription:
      '로컬 LLM으로 이메일 작성, 받은 편지함 요약, 캘린더 관리를 자동화하는 방법. Ollama, IMAP 연동, 개인정보를 우선시하는 통신 자동화.',
    twitterDescription:
      '로컬 LLM 이메일 자동화: 답장 초안 작성, 받은 편지함 요약, 회의 안건 생성 — 모두 로컬에서, 클라우드 API 없이. Ollama + IMAP 워크플로우 설정 가이드.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral Small',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4070 12 GB',
    ],
    audience:
      '이메일 작성 자동화, 받은 편지함 요약, 캘린더 관리를 클라우드 AI 서비스에 통신 데이터를 전송하지 않고 처리하고 싶은 전문직 종사자, 소규모 사업자, 개인정보 보호를 중시하는 개인.',
    readTime: '12분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 LLM 이메일 자동화',
    targetKeywords: [
      '로컬 llm 이메일 자동화',
      'ollama 이메일 초안 작성',
      '로컬 ai 받은편지함 요약',
      '로컬 llm 캘린더 자동화',
      '개인정보 보호 ai 이메일 도우미',
      '로컬 llm imap 워크플로우',
    ],
    leadAnswerBlock:
      '**로컬 LLM 이메일 자동화는 2단계 파이프라인으로 가장 잘 작동합니다. 이메일 클라이언트 또는 IMAP 스크립트가 원본 메시지를 가져와 헤더를 제거한 후 일반 텍스트 본문을 API를 통해 Ollama에 전달하고, 모델이 전송 전에 검토하는 답장 초안을 생성합니다. 이메일 내용은 기기 밖으로 나가지 않습니다. 2026년에 가장 실용적인 세 가지 설정은 다음과 같습니다. (1) 일정에 따라 Ollama를 호출하는 IMAP + Python 스크립트 — 50줄, 완전 자동화 가능. (2) Ollama Compose 플러그인이 포함된 Thunderbird — GUI 기반, 코드 불필요. (3) 로컬 Ollama 노드가 있는 자체 호스팅 n8n — 코딩 없이 조건부 로직, 다단계 필터링, 캘린더 연동을 원하는 사용자를 위한 시각적 워크플로우 빌더. 캘린더 자동화의 경우, 동일한 Ollama API 호출이 내보낸 ICS 파일이나 로컬 자격 증명이 있는 Google Calendar API와 함께 작동합니다. 이벤트 세부 정보에서 회의 안건, 주간 요약, 후속 이메일 초안을 생성합니다.**',
    quickAnswerTop: {
      ko: {
        question: '클라우드에 이메일을 전송하지 않고 로컬 LLM으로 이메일 작성을 자동화하려면 어떻게 해야 합니까?',
        answer:
          '가장 빠른 로컬 이메일 자동화 설정은 읽지 않은 이메일을 가져오고, 헤더를 제거하고, 일반 텍스트 본문을 Ollama 로컬 API에 전달하고, 답장 초안을 로컬 파일 또는 임시보관함 폴더에 저장하는 Python IMAP 스크립트입니다. 50줄 미만의 Python 코드이며, 이메일 데이터는 기기 밖으로 나가지 않습니다. GUI 대안으로는 Ollama Compose 확장 기능이 포함된 Thunderbird를 사용하면 클라이언트를 벗어나지 않고 이메일을 우클릭하여 답장을 생성할 수 있습니다. 워크플로우 자동화의 경우, 로컬 Ollama 노드가 있는 자체 호스팅 n8n이 클라우드 의존 없이 조건부 로직, 다단계 필터링, 캘린더 연동을 처리합니다.',
        bullets: [
          'IMAP + Python + Ollama: 50줄 스크립트, 일정에 따라 실행, 초안을 로컬에 저장 — 가장 간단한 설정.',
          'Thunderbird + Ollama Compose 플러그인: GUI 기반, 코드 불필요, 이메일 클라이언트에서 우클릭으로 답장 생성.',
          '자체 호스팅 n8n + Ollama 노드: 조건부 로직, 필터링, 캘린더 연동을 위한 시각적 워크플로우 빌더.',
          '캘린더 자동화: ICS 파일을 내보내거나 로컬에서 Google Calendar API를 사용하여 회의 안건과 후속 이메일 초안 생성.',
          '이메일에 가장 적합한 모델: Qwen3 14B 또는 Phi-4 Mini — 빠른 생성, 낮은 VRAM 사용량, 업무 서신에 충분한 품질.',
          '개인정보 보호: IMAP 자격 증명과 이메일 내용은 기기를 벗어나지 않습니다. 어떤 설정에서도 클라우드 API 호출 없음.',
          '전송 전 검토는 필수입니다. 로컬 모델은 어조 오류와 사실 오류를 범하므로 모든 출력을 첫 번째 초안으로 취급하십시오.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 정보', anchor: '#quick-facts' },
      { label: '이메일에 로컬 AI를 사용하는 이유', anchor: '#why-local' },
      { label: '접근 방식 비교', anchor: '#approach-comparison' },
      { label: '설정 1: IMAP + Python + Ollama', anchor: '#imap-python' },
      { label: '설정 2: Thunderbird + Ollama 플러그인', anchor: '#thunderbird' },
      { label: '설정 3: 자체 호스팅 n8n + Ollama', anchor: '#n8n' },
      { label: '분류 및 주간 검토 프롬프트 템플릿', anchor: '#triage-prompts' },
      { label: '캘린더 자동화', anchor: '#calendar' },
      { label: '모델 권장 사항', anchor: '#models' },
      { label: '개인정보 보호 및 보안', anchor: '#privacy' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '참고 자료', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽기', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**세 가지 설정으로 로컬 이메일 자동화 사용 사례의 95%를 커버합니다.** IMAP + Python + Ollama (50줄, 완전 스크립팅 가능), Thunderbird + Ollama Compose (GUI, 코드 불필요), 자체 호스팅 n8n + Ollama 노드 (시각적 워크플로우, 조건부 로직). 워크플로우에 맞는 가장 간단한 옵션을 선택하십시오.',
          '**창의적 작업보다 이메일에는 소형 모델이 더 적합합니다.** 이메일 작성에는 창의성이 아닌 일관성이 필요합니다. Qwen3 14B와 Phi-4 Mini는 16 GB 시스템에서 2~5초 만에 업무 품질의 답장 초안을 생성합니다. 대부분의 이메일 작업에 Llama 3.3 70B는 과분합니다.',
          '**전송 전 검토는 선택 사항이 아닙니다.** 로컬 모델은 어조 오류 (지나치게 격식체, 지나치게 구어체), 사실 오류 (잘못된 회의 시간, 잘못된 수신자 이름), 관련 없는 내용 날조 등의 실수를 범합니다. 항상 초안을 읽고 전송하십시오.',
          '**어떤 설정에서도 이메일 내용은 기기를 벗어나지 않습니다.** IMAP 연결은 클라우드 AI가 아닌 이메일 서버로 이동합니다. Ollama API는 로컬입니다. 자체 호스팅 n8n은 기기에서 실행됩니다. 개인정보 보호 이점은 실질적입니다.',
          '**캘린더 자동화는 내보낸 ICS 또는 Google Calendar API 로컬 호출로 가장 잘 작동합니다.** 해당 주의 이벤트를 ICS 파일로 내보내고 Ollama에 전달하여 회의 안건, 준비 체크리스트, 또는 팀을 위한 주간 요약 이메일을 생성하십시오.',
          '**IMAP 자격 증명은 민감합니다.** 환경 변수 또는 로컬 비밀 관리자에 저장하십시오. 스크립트 소스 코드에는 절대 저장하지 마십시오. 기본 계정 암호 대신 앱별 암호를 사용하십시오.',
          '**자체 호스팅 n8n은 조건부 로직에 적합한 선택입니다.** "[도메인]에서 온 모든 이메일을 매일 요약" 또는 "캘린더 이벤트가 종료될 때 후속 이메일 생성"이 필요한 경우 n8n의 시각적 워크플로우 빌더가 사용자 정의 Python 없이 처리합니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 정보',
        items: [
          '**다루는 설정:** IMAP + Python + Ollama, Thunderbird + Ollama Compose, 자체 호스팅 n8n + Ollama 노드.',
          '**이메일에 가장 적합한 모델:** Qwen3 14B (빠름, 낮은 VRAM 사용량, 적절한 업무 품질) 또는 Phi-4 Mini (가장 빠름, 4 GB VRAM).',
          '**필요한 VRAM:** Qwen3 14B Q4 = 약 9 GB; Phi-4 Mini Q4 = 약 3 GB; Llama 3.3 70B Q4 = 약 42 GB.',
          '**지원되는 이메일 형식:** IMAP 일반 텍스트 (MIME 디코딩), EML 파일, Gmail API (로컬 자격 증명), IMAP을 통한 Outlook.',
          '**캘린더 형식:** ICS 내보내기 (범용), Google Calendar API (로컬 OAuth), Nextcloud Calendar (CalDAV).',
          '**스크립트 복잡성:** IMAP + Python = 약 50줄; n8n 워크플로우 = 시각적, 코드 없음; Thunderbird = 플러그인 설치만.',
          '**개인정보 보호:** 어떤 설정에서도 이메일 데이터가 클라우드 API로 전송되지 않습니다. IMAP은 이메일 서버에만 연결됩니다.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '이메일 자동화에 로컬 AI를 사용하는 이유',
        content:
          '**핵심 이유는 개인정보 보호입니다. 클라우드 AI 어시스턴트에 붙여넣는 모든 이메일은 잠재적으로 기록되고, 학습에 사용되며, 해당 제공업체의 데이터 보존 정책의 적용을 받습니다.** 업무 서신, 고객 커뮤니케이션, 개인 이메일에는 제3자 데이터셋에 포함시키고 싶지 않은 정보가 포함되어 있습니다. 로컬 LLM은 자신의 하드웨어에서 이메일을 처리하고, 초안을 반환하며, 아무것도 보존하지 않습니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 LLM 이메일 자동화는 모든 이메일 내용을 기기 내에 유지합니다. 클라우드 API는 메시지를 수신하지 않고, 제3자는 서신을 기록하거나 학습에 사용하지 않으며, 초안 생성은 인터넷 연결 없이도 작동합니다.',
          },
          {
            type: 'plain-terms',
            text: '답장 초안을 요청하기 위해 ChatGPT나 Claude.ai에 이메일을 붙여넣으면 해당 이메일은 OpenAI 또는 Anthropic 서버에서 처리됩니다. 대부분의 사람들에게, 대부분의 경우 이는 허용 가능합니다. 그러나 업무 서신, 고객 정보, 계약 논의, 또는 민감한 정보가 포함된 커뮤니케이션의 경우에는 그렇지 않습니다. Ollama를 통해 설정된 로컬 LLM은 동일한 이메일을 사용자의 컴퓨터에서 처리하고 어디에도 전송하지 않습니다.',
          },
        ],
        items: [
          '**데이터 주권:** 이메일 내용, 발신자 정보, 스레드 컨텍스트가 사용자의 기기에 유지됩니다. 클라우드 보존 정책이 적용되지 않습니다.',
          '**오프라인 작동:** Ollama가 실행 중이고 모델이 다운로드되면 인터넷 연결 없이도 이메일 작성이 가능합니다.',
          '**사용 한도 없음:** 클라우드 AI API는 속도 제한과 토큰 한도를 부과합니다. 로컬 설정은 요청당 비용이나 일일 한도가 없습니다.',
          '**규정 준수:** GDPR, HIPAA, 직업적 비밀 특권 요건으로 인해 고객 커뮤니케이션을 제3자 AI에 전송하는 것이 금지될 수 있습니다. 로컬 처리는 이 우려를 해소합니다.',
          '**짧은 작업의 속도:** 소형 모델 (Qwen3 14B, Phi-4 Mini)은 소비자 하드웨어에서 2~5초 만에 업무 이메일 초안을 생성합니다. 짧은 프롬프트의 경우 대부분의 클라우드 왕복보다 빠릅니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '로컬 이메일 자동화는 이메일 클라이언트의 대체물이 아닙니다. 기존 워크플로우에 통합되는 작성 도우미입니다. 여전히 Thunderbird, Apple Mail, Gmail을 사용하여 전송하고, 로컬 LLM은 검토, 편집 후 기존 클라이언트에서 전송할 텍스트를 생성합니다.',
          },
        ],
      },
      approachComparison: {
        id: 'approach-comparison',
        title: '접근 방식 비교',
        content:
          '**세 가지 설정은 대부분의 사용자에게 중요한 다섯 가지 축에서 차이가 있습니다. 설정 난이도, 30일 신뢰성, 개인정보 보호 태도, 각각이 가장 잘 맞는 사용자 프로필입니다.** 가장 강력한 옵션 대신 워크플로우를 커버하는 가장 간단한 옵션을 선택하십시오.',
        columns: ['접근 방식', '설정', '신뢰성 (30일)', '개인정보 보호', '적합한 대상'],
        rows: [
          { '접근 방식': 'Thunderbird + Ollama Compose', '설정': '쉬움', '신뢰성 (30일)': '높음 (백그라운드 프로세스 없음)', '개인정보 보호': '로컬 전용', '적합한 대상': '개인 전문가, 일일 분류, GUI 사용자' },
          { '접근 방식': 'Python + IMAP + cron', '설정': '어려움 (50 LOC + 스케줄링)', '신뢰성 (30일)': '매우 높음 (스크립팅 가능, 관찰 가능)', '개인정보 보호': '로컬 전용', '적합한 대상': '완전한 제어 + 사용자 정의 로직을 원하는 개발자' },
          { '접근 방식': '자체 호스팅 n8n + Ollama', '설정': '중간 (시각적 워크플로우 편집기)', '신뢰성 (30일)': '높음 (자체 서버 모니터링 필요)', '개인정보 보호': '자체 호스팅으로 로컬', '적합한 대상': 'Zapier를 대체하려는 다중 워크플로우 사용자; 조건부 로직' },
        ],
      },
      imapPython: {
        id: 'imap-python',
        title: '설정 1: IMAP + Python + Ollama',
        content:
          '**가장 스크립팅 가능한 설정입니다. Python 스크립트가 IMAP을 통해 읽지 않은 이메일을 가져오고, 헤더와 HTML을 제거하고, 일반 텍스트 본문을 Ollama 로컬 API에 전달하고, 답장 초안을 저장합니다.** cron 또는 작업 스케줄러를 사용하여 일정에 따라 실행됩니다. Python 50줄, Ollama Python 클라이언트 외 외부 의존성 없음.',
        image: '/images/local-llm-email-and-calendar-automation-imap-pipeline-en.svg',
        imageCaption: 'IMAP + Python + Ollama 로컬 이메일 초안 파이프라인: 읽지 않은 이메일 가져오기부터 초안 저장까지 4단계, Ollama 로컬 API를 통해 Qwen3 14B(VRAM 9GB) 사용 — 클라우드 API 호출 없음.',
        promptExamples: [
          {
            label: 'IMAP 이메일 가져오기 + Ollama 초안 (Python 골격)',
            text: 'import imaplib, email, os\nimport ollama\n\n# IMAP 연결\nmail = imaplib.IMAP4_SSL(os.environ["IMAP_HOST"])\nmail.login(os.environ["IMAP_USER"], os.environ["IMAP_PASS"])\nmail.select("INBOX")\n\n# 읽지 않은 이메일 가져오기\n_, msgnums = mail.search(None, "UNSEEN")\nfor num in msgnums[0].split():\n    _, data = mail.fetch(num, "(RFC822)")\n    msg = email.message_from_bytes(data[0][1])\n    body = msg.get_payload(decode=True).decode("utf-8", errors="ignore")\n    subject = msg["Subject"]\n    sender = msg["From"]\n\n    # Ollama로 초안 생성\n    response = ollama.chat(model="qwen3:14b", messages=[\n        {"role": "system", "content": "귀하는 전문 이메일 어시스턴트입니다. 간결하고 정중한 업무 답장을 작성하십시오. 수신 이메일의 격식 수준에 맞추십시오."},\n        {"role": "user", "content": f"이메일 발신자: {sender}\\n제목: {subject}\\n\\n본문:\\n{body[:2000]}\\n\\n답장 초안을 작성하십시오."}\n    ])\n    draft = response["message"]["content"]\n    print(f"초안 - {subject}:\n{draft}\n---")',
          },
        ],
        items: [
          '**IMAP 자격 증명:** 환경 변수에 저장하십시오 (`IMAP_HOST`, `IMAP_USER`, `IMAP_PASS`). 소스 코드에는 절대 저장하지 마십시오. 기본 계정 암호 대신 앱별 암호를 사용하십시오.',
          '**본문 잘라내기:** Ollama에 전달하기 전에 이메일 본문을 2,000~3,000자로 제한하십시오. 긴 이메일 스레드는 답장 초안에 유용한 컨텍스트를 거의 추가하지 않으며 생성을 느리게 합니다.',
          '**HTML 제거:** 이메일 본문이 HTML인 경우, 모델에 전달하기 전에 `html.parser` 또는 `BeautifulSoup`을 사용하여 일반 텍스트를 추출하십시오. HTML 태그는 생성 품질을 저하시킵니다.',
          '**스케줄링:** macOS/Linux에서는 cron 항목 (`crontab -e`)을 추가하여 30분마다 스크립트를 실행하십시오. Windows에서는 Python 인터프리터 경로와 함께 작업 스케줄러를 사용하십시오.',
          '**초안 저장:** 이메일당 로컬 텍스트 파일 (타임스탬프 + 제목 슬러그 이름)에 초안을 저장하거나 `mail.append()`를 사용하여 IMAP "임시보관함" 폴더에 넣으십시오. 텍스트 파일 읽기가 검토에 더 안전합니다. IMAP 임시보관함은 어떤 클라이언트에서도 전송할 수 있게 합니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '자동 전송을 활성화하지 마십시오. 어떤 로컬 LLM도 사람의 검토 없이 전송할 만큼 신뢰할 수 있는 이메일 초안을 생성하지 않습니다. 어조 오류, 잘못된 날짜, 날조된 사실, 잘못된 스레드에 답장하는 오류가 정기적으로 발생합니다. 자동화는 작성 시간을 절약합니다. 검토 단계는 필수입니다.',
          },
        ],
      },
      thunderbird: {
        id: 'thunderbird',
        title: '설정 2: Thunderbird + Ollama Compose 플러그인',
        content:
          '**Ollama Compose 확장 기능이 포함된 Thunderbird는 코드 없는 옵션입니다.** Thunderbird를 설치하고, Ollama를 설치하고, 모델을 다운로드하고, 확장 기능을 설치하면 작성 창에서 우클릭으로 이메일을 생성할 수 있습니다.',
        items: [
          '**Thunderbird 설치**: thunderbird.net에서 설치하십시오. macOS, Windows, Linux에서 사용 가능합니다.',
          '**Ollama 설치 및 모델 다운로드:** `ollama pull qwen3:14b` (이메일 작업에 권장). `ollama serve`를 시작하십시오.',
          '**Ollama Compose 확장 기능 설치**: Thunderbird 부가 기능 관리자에서 설치하십시오. "Ollama"를 검색하거나 프로젝트 저장소의 XPI 파일에서 설치하십시오.',
          '**확장 기능 구성**: `http://localhost:11434`를 가리키도록 설정하고 모델을 선택하십시오 (Qwen3 14B 또는 Phi-4 Mini 권장).',
          '**작성 창에서:** 본문 영역을 우클릭하고 "Generate with Ollama"를 선택하십시오. 확장 기능이 인용된 원본 이메일과 커서 위치를 Ollama에 전달하고 답장 초안을 삽입합니다.',
          '**모델 전환:** 확장 기능을 통해 작성 도구 모음에서 모델을 전환할 수 있습니다. 빠른 답장에는 Phi-4 Mini를 사용하고, 복잡하거나 민감한 서신에는 Qwen3 14B 또는 Llama 3.3 70B로 전환하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ollama Compose 설정에서 사용자 정의 시스템 프롬프트를 설정하십시오. 기본 프롬프트는 일반적입니다. 사용자 정의 프롬프트는 더 나은 결과를 제공합니다. 예시: "귀하는 [회사]의 [직책]인 [이름]을 위한 전문 이메일 답장을 작성합니다. 답장은 간결하고 (컨텍스트상 필요하지 않으면 150단어 미만), 전문적으로 따뜻하며, 수신 이메일의 격식 수준과 일치합니다. 법적 고지나 서명 줄을 추가하지 마십시오."',
          },
        ],
      },
      n8n: {
        id: 'n8n',
        title: '설정 3: 자체 호스팅 n8n + Ollama 노드',
        content:
          '**로컬 Ollama 노드가 있는 자체 호스팅 n8n은 조건부 자동화에 적합한 선택입니다. 발신자 도메인별 이메일 필터링, 매일 요약, 캘린더 이벤트 종료 시 후속 메일 생성, 또는 다른 이메일 유형을 다른 모델 프롬프트로 라우팅 — 모두 코드 작성 없이 가능합니다.**',
        image: '/images/local-llm-email-and-calendar-automation-n8n-workflow-en.svg',
        imageCaption: '이메일 및 캘린더 자동화를 위한 자체 호스팅 n8n 워크플로우: IMAP 트리거와 도메인 필터가 이메일을 로컬 Ollama 노드로 라우팅하고, 병렬 캘린더 브랜치가 ICS 또는 Google 캘린더 이벤트를 회의 안건으로 변환합니다 — 단일 Ollama 인스턴스, 클라우드 API 없음.',
        items: [
          '**자체 호스팅 n8n 설치:** `npm install -g n8n && n8n start` 또는 `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`. 워크플로우 편집기는 `http://localhost:5678`에서 실행됩니다.',
          '**Ollama 노드 추가:** n8n 워크플로우 편집기에서 "Ollama" 노드를 검색하십시오 (n8n v1.2+ 내장). `http://localhost:11434`를 가리키도록 설정하고 모델을 선택하십시오.',
          '**IMAP 트리거:** IMAP 이메일 노드를 워크플로우 트리거로 추가하십시오. IMAP 자격 증명으로 구성하십시오. 노드가 새 이메일을 폴링하고 각 이메일을 JSON 객체로 다음 단계에 전달합니다.',
          '**필터링 로직:** IF 노드를 추가하여 발신자 도메인, 제목 키워드, 또는 시간대별로 이메일을 라우팅하십시오. 이메일 유형별로 (고객 이메일, 뉴스레터 요약, 내부 팀 메시지) 다른 Ollama 프롬프트로 라우팅하십시오.',
          '**캘린더 연동:** Google Calendar 노드 (로컬 OAuth 자격 증명 사용) 또는 ICS 파일 리더를 추가하여 예정된 이벤트를 가져오십시오. 이벤트 세부 정보를 Ollama 노드에 전달하여 회의 안건 또는 준비 체크리스트를 생성하십시오.',
          '**출력 옵션:** 로컬 파일에 초안 저장, IMAP 임시보관함에 넣기, Slack 메시지로 자신에게 전송, 또는 Notion/Obsidian 페이지에 저장 — 모두 n8n 출력 노드를 통해 가능합니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '자체 호스팅 n8n은 캘린더 + 이메일 워크플로우의 최적 통합 지점입니다. 일반적인 패턴: IMAP 트리거가 회의 확인 이메일을 수신 → 회의 세부 정보 추출 → 참석자 가져오기 위해 Google Calendar API (로컬 OAuth) 호출 → 모든 컨텍스트를 Ollama에 전달 → 회의 안건 생성 → 지정 폴더에 저장. n8n 시각적 편집기에서 약 20분이면 설정 가능합니다.',
          },
        ],
      },
      triagePrompts: {
        id: 'triage-prompts',
        title: '분류 및 주간 검토 프롬프트 템플릿',
        content:
          '**가장 빈번한 이메일 작업 두 가지를 처리하는 프롬프트: 이메일별 분류와 주간 받은 편지함 검토.** 세 가지 설정 중 어느 것에나 통합하십시오 (Python 스크립트, Thunderbird 시스템 프롬프트, 또는 n8n Ollama 노드 본문). 의도적으로 모델 불가지론적으로 설계되었습니다.',
        promptExamples: [
          {
            label: '분류 프롬프트 템플릿',
            text: '귀하는 이메일 분류 어시스턴트입니다. 다음 이메일을 이러한 카테고리 중 하나로 분류하고 한 문장으로 설명하십시오:\n- 긴급: 4시간 이내 답장 필요\n- 중요: 24시간 이내 답장 필요\n- 정보: 인식을 위해 읽기, 답장 불필요\n- 홍보: 마케팅 또는 뉴스레터, 보관 가능\n- 스팸: 원하지 않음, 필터링 권장\n\n이메일:\n발신자: {sender}\n제목: {subject}\n본문: {body[:1500]}\n\n출력 형식:\n카테고리: [긴급|중요|정보|홍보|스팸]\n이유: [한 문장]\n권장 조치: [답장 | 보관 | 표시 | 삭제]',
          },
          {
            label: '주간 검토 프롬프트 템플릿',
            text: '지난 주의 다음 50개 이메일을 3개 섹션으로 요약하십시오:\n1. 아직 조치가 필요한 긴급 또는 중요 항목 (발신자 + 1줄 요약 포함)\n2. 주제 (예: "Q4 계획이 이번 주 12개 이메일에 등장했습니다")\n3. 답장이 필요한 사람 (발신자 + 대기 일수)\n\n이메일 (제목 + 각 본문 처음 200자):\n[이메일 목록을 일괄 붙여넣기]\n\n출력 형식: 마크다운 3개 섹션.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '분류 프롬프트의 경우 n8n IF 노드와 결합하여 카테고리별로 라우팅하십시오. 긴급 → 푸시 알림, 중요 → "답장 필요" 폴더에 저장, 홍보 → 자동 보관, 스팸 → 필터 규칙 표시. 분류는 하류 자동화를 안전하게 만드는 요소입니다. 분류 없이는 파이프라인이 고객 후속 메일과 마케팅 이메일을 구별할 수 없습니다.',
          },
        ],
      },
      calendar: {
        id: 'calendar',
        title: '로컬 LLM을 활용한 캘린더 자동화',
        content:
          '**로컬 AI를 사용한 캘린더 자동화는 두 가지 모드로 작동합니다. 수동 모드 (ICS 내보내기, 요약 또는 안건 생성을 위해 Ollama에 전달)와 능동 모드 (실시간 이벤트 액세스를 위한 로컬 OAuth 자격 증명이 있는 Google Calendar API). 수동 모드가 더 간단하고, 능동 모드는 예약된 워크플로우를 지원합니다.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 AI 캘린더 자동화는 내보낸 ICS 파일 내용이나 Google Calendar API 데이터를 Ollama에 전달하여 회의 안건, 주간 요약, 후속 이메일 초안을 생성합니다. 캘린더 데이터는 클라우드 AI에 전달되지 않습니다.',
          },
          {
            type: 'plain-terms',
            text: '가장 간단한 캘린더 자동화: 캘린더 앱 (Google Calendar, Apple Calendar, Nextcloud)에서 한 주의 이벤트를 ICS 파일로 내보내고, 터미널을 열어 "각 이벤트에 대한 안건을 생성하십시오"라는 프롬프트와 함께 ICS 내용을 Ollama에 전달하고, 출력을 메모에 복사하십시오. 30초면 완료되고, 캘린더 데이터는 로컬에 유지됩니다.',
          },
        ],
        promptExamples: [
          {
            label: 'ICS-to-안건 프롬프트 템플릿',
            text: '다음은 ICS 형식의 이번 주 캘린더입니다:\n\n[ICS 내용 붙여넣기]\n\n각 회의 이벤트에 대해:\n1. 이벤트 제목과 설명을 기반으로 5가지 회의 안건을 생성하십시오.\n2. 참석자가 나열되어 있는 경우 각 안건 항목을 이끌어야 할 사람을 기재하십시오.\n3. 이벤트에 설명이 없는 경우 [회의 유형] 회의에 적합한 일반 안건을 생성하십시오.\n\n일반 텍스트로 형식화하십시오. 이벤트당 한 섹션, ---로 구분.',
          },
        ],
        items: [
          '**ICS 내보내기 (수동):** Google Calendar, Apple Calendar, Nextcloud, Outlook은 모두 ICS 파일을 내보냅니다. 주간 또는 일간으로 내보내고, 터미널 또는 스크립트를 통해 Ollama에 전달하고, 안건 또는 요약을 생성하십시오.',
          '**Google Calendar API (능동):** Google Cloud Console (개인 프로젝트)에서 로컬 OAuth 자격 증명을 생성하고, 자격 증명 JSON을 다운로드하고, 이벤트를 가져오기 위해 Python `google-auth-oauthlib` 라이브러리를 사용하십시오. OAuth 토큰은 로컬에 저장되고 API 호출은 Google Calendar로 직접 전달됩니다. AI 중개자 없음.',
          '**회의 안건 생성 프롬프트:** 제목 + 참석자 + 설명 → "시간 배분이 포함된 5가지 회의 안건을 생성하십시오. 회의 설명이 없는 경우 [회의 유형] 회의에 적합한 일반 안건을 제안하십시오."',
          '**주간 요약 프롬프트:** 해당 주의 모든 이벤트 → "이번 주 회의를 3문장으로 요약하십시오. 연속 블록이나 비정상적으로 긴 회의를 강조하십시오."',
          '**후속 이메일 초안:** 회의 후 (이벤트 종료 시간으로 트리거) → "\'[제목]\' 회의를 위한 후속 이메일을 작성하십시오. 참석자에게 감사하고 다음 단계를 요약하십시오. 이 이벤트 설명을 컨텍스트로 사용하십시오: [설명]."',
        ],
        callouts: [
          {
            type: 'tip',
            text: '가능한 경우 캘린더 데이터를 일반 텍스트로 유지하십시오. ICS는 일반 텍스트이므로 Ollama에 직접 전달하기 쉽습니다. 독점 캘린더 형식이나 폐쇄형 기업 시스템을 사용하는 경우 먼저 ICS로 내보내십시오. ICS 표준은 범용이며 모든 주요 캘린더 앱에서 지원됩니다.',
          },
        ],
      },
      models: {
        id: 'models',
        title: '이메일 및 캘린더 작업을 위한 모델 권장 사항',
        content:
          '**이메일 및 캘린더 자동화 작업은 크고 강력한 모델보다 작고 빠른 모델을 선호합니다.** 업무 이메일 답장 초안 작성, 회의 안건 생성, 받은 편지함 요약에는 Llama 3.3 70B가 필요하지 않습니다. 대화형으로 느껴질 만큼 충분히 빠르고 사용 가능한 업무 텍스트를 생성할 만큼 충분히 일관된 모델이 필요합니다. 모든 사용 사례에 걸친 더 넓은 모델 환경에 대해서는 [2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026)을 참조하십시오.',
        columns: ['작업', '권장 모델', 'VRAM (Q4)', '이유'],
        rows: [
          { '작업': '이메일 답장 초안 작성', '권장 모델': 'Qwen3 14B', 'VRAM (Q4)': '약 9 GB', '이유': '업무 작성 품질과 생성 속도의 최적 균형; 격식체와 비격식체 모두 처리' },
          { '작업': '빠른 한 줄 답장', '권장 모델': 'Phi-4 Mini', 'VRAM (Q4)': '약 3 GB', '이유': '가장 빠른 옵션; 간단한 확인 및 일정 조정 답장에 충분' },
          { '작업': '회의 안건 생성', '권장 모델': 'Qwen3 14B', 'VRAM (Q4)': '약 9 GB', '이유': '구조화된 목록 생성에 우수; 안건 형식은 해당 모델의 능력 범위 내' },
          { '작업': '긴 이메일 스레드 요약', '권장 모델': 'Llama 3.3 70B 또는 Qwen3 32B', 'VRAM (Q4)': '약 42 GB / 약 20 GB', '이유': '다중 메시지 스레드에서 장문 컨텍스트 준수가 중요; 소형 모델은 세부 정보를 놓침' },
          { '작업': '민감한/법적 서신', '권장 모델': 'Llama 3.3 70B', 'VRAM (Q4)': '약 42 GB', '이유': '최고의 추론 품질; 오류가 고위험일 때 하드웨어 비용 가치 있음' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '16 GB 시스템의 대부분의 이메일 작업에서 Qwen3 14B가 올바른 기본 선택입니다. `ollama pull qwen3:14b`로 한 번 다운로드하고 모든 이메일 및 캘린더 자동화에 사용하십시오. 14B 출력 품질이 지속적으로 부족한 작업 유형을 발견할 때만 더 큰 모델로 전환하십시오.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호 및 보안',
        content:
          '**로컬 이메일 자동화의 개인정보 보호 이점은 실질적이지만 올바른 구성이 필요합니다.** 세 가지가 이를 손상시킬 수 있습니다. IMAP 자격 증명의 우발적 클라우드 동기화, 제3자 도구에서 액세스 가능한 로그의 이메일 내용, 워크플로우를 네트워크에 노출시키는 잘못 구성된 n8n 인스턴스입니다. 다른 도구에서 "SaaS를 로컬 AI로 대체"하는 더 넓은 패턴에 대해서는 [Grammarly와 Notion AI를 로컬 모델로 대체하기](/ko/power-local-llm/replace-grammarly-notion-ai-with-local)를 참조하십시오.',
        items: [
          '**IMAP 자격 증명:** 환경 변수 또는 로컬 비밀 관리자에 저장하십시오 (macOS Keychain, Linux `secret-tool`, Windows 자격 증명 관리자). 클라우드 저장소와 동기화될 수 있는 스크립트 소스 코드나 파일에는 절대 저장하지 마십시오.',
          '**로그의 이메일 내용:** stdout/stderr에 이메일 내용을 인쇄하는 Python 스크립트는 로그가 활성화된 상태로 cron을 통해 실행될 때 이메일 데이터를 로그 파일에 기록합니다. 로그를 `/dev/null`로 리디렉션하거나 이메일 내용을 제외하는 로그 레벨을 사용하십시오.',
          '**n8n 네트워크 노출:** 자체 호스팅 n8n은 기본적으로 `localhost:5678`에 바인딩되며 이는 로컬입니다. 홈 네트워크나 그 이상으로 노출하는 경우 (예: 모바일 액세스) 인증을 추가하고 Ollama API도 localhost로 제한되어 있는지 확인하십시오.',
          '**앱 암호:** 기본 계정 암호 대신 Gmail, Outlook, Apple Mail에서의 IMAP 액세스를 위한 전용 앱별 암호를 설정하십시오. 스크립트가 침해된 경우 즉시 취소하십시오.',
          '**Git 저장소:** 자동화 스크립트를 버전 관리하는 경우 자격 증명이 포함된 `.env` 파일을 제외하는 `.gitignore`를 추가하십시오. 공개 또는 개인 저장소에 자격 증명을 커밋하지 마십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '클라우드 동기화 위험. 홈 디렉토리가 iCloud, Google Drive, OneDrive와 동기화되는 경우 동기화된 디렉토리의 `.env` 또는 자격 증명 파일이 클라우드에 업로드됩니다. 클라우드 동기화에서 명시적으로 제외된 디렉토리에 자격 증명을 저장하거나 운영 체제의 기본 비밀 관리자를 사용하십시오.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**검토 없이 초안을 자동 전송.** 어떤 로컬 모델도 사람의 검토 없이 전송할 만큼 신뢰할 수 있는 출력을 생성하지 않습니다. 어조 오류, 잘못된 날짜, 날조된 사실은 흔합니다. 항상 전송 전에 읽으십시오.',
          '**전체 이메일 스레드를 모델에 전달.** 긴 스레드는 토큰을 낭비하고 생성을 느리게 하는 중복 컨텍스트를 포함합니다. 인용된 답장 블록을 제거하고 최근 2~3개 메시지만 전달하십시오.',
          '**모든 이메일 작업에 Llama 3.3 70B 사용.** 대부분의 이메일 작성에서 Qwen3 14B가 더 빠르고 VRAM을 적게 사용합니다. 진정으로 복잡하거나 고위험 서신에만 70B를 사용하십시오.',
          '**IMAP 자격 증명을 스크립트에 저장.** 소스 코드의 자격 증명은 `git push` 한 번으로 공개될 수 있습니다. 환경 변수를 사용하십시오.',
          '**초안 프롬프트에 단어 제한을 설정하지 않음.** 단어 제한 없이 모델은 불필요한 컨텍스트, 주의 사항, 과도한 정중함으로 업무 답장을 채웁니다. 모든 이메일 프롬프트에 "150단어 미만으로 답변하십시오"를 추가하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '참고 자료',
        items: [
          'Qwen3 14B 모델 카드 — [Alibaba Cloud / Qwen 팀](https://qwenlm.github.io)',
          'Phi-4 Mini 기술 보고서 — [Microsoft Research](https://microsoft.com/research)',
          'Ollama API 문서 — [Ollama](https://ollama.com/docs)',
          'n8n 자체 호스팅 문서 — [n8n.io](https://docs.n8n.io)',
          'GDPR 제28조 — 데이터 처리자 의무 — [EUR-Lex](https://eur-lex.europa.eu)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Gmail에서도 작동합니까?',
            a: '예. Gmail은 앱별 암호를 사용한 IMAP 액세스를 지원합니다. Gmail 설정에서 IMAP을 활성화하고, Google 계정 보안 설정에서 앱 암호를 생성하고, IMAP 스크립트에서 해당 자격 증명을 사용하십시오. Gmail은 더 구조화된 액세스를 위해 Gmail API도 제공합니다. 레이블 관리, 스레드 작업, 첨부 파일 처리가 필요한 n8n 워크플로우에 유용합니다.',
          },
          {
            q: '이메일 자동화에는 IMAP + Python과 n8n 중 어느 것이 더 낫습니까?',
            a: '스크립트를 작성하고 유지 관리하는 데 익숙하고 완전한 제어를 원한다면 IMAP + Python이 더 좋습니다. 조건부 로직 (발신자, 시간, 내용에 따른 이메일 라우팅), 캘린더 연동, 또는 코드 작성 없이 여러 출력 대상이 필요하다면 n8n이 더 좋습니다. 두 방법 모두 Ollama를 로컬 모델 백엔드로 사용합니다. 차이점은 주변의 오케스트레이션 레이어입니다.',
          },
          {
            q: '로컬 AI가 전체 받은 편지함을 요약할 수 있습니까?',
            a: '예, 제한 사항이 있습니다. 주간 받은 편지함 요약 (50~100개 이메일)은 잘 작동합니다. 제목과 각 본문 처음 200자를 가져오고, 연결하고, "주제와 긴급도별로 요약하십시오" 프롬프트와 함께 Qwen3 14B에 전달하십시오. 수천 개의 이메일이 있는 전체 받은 편지함의 경우 요약을 일괄 처리하고 (API 호출당 50개 이메일) 일괄 요약을 집계하십시오. 한 번의 호출에 1,000개의 이메일을 전달하면 컨텍스트 한도를 초과하고 신뢰할 수 없는 출력을 생성합니다.',
          },
          {
            q: '공식 업무 이메일 작성에 가장 좋은 로컬 LLM은 무엇입니까?',
            a: 'Qwen3 14B는 소비자 하드웨어에서 공식 업무 서신에 가장 좋은 품질 대비 속도 비율을 제공합니다. 격식체, 적절한 완화 표현, 전문적인 마무리를 안정적으로 처리합니다. 매우 고위험 서신 (법적 고지, 임원 커뮤니케이션, 계약 협상)의 경우 Llama 3.3 70B를 사용하십시오. 복잡하거나 민감한 주제에서 품질 차이가 두드러집니다.',
          },
          {
            q: 'Windows에서도 작동합니까?',
            a: '예. Ollama는 Windows에서 실행됩니다 (ollama.com에서 다운로드). IMAP Python 스크립트는 Windows의 모든 Python 3.8+ 설치에서 실행됩니다. Thunderbird와 Ollama Compose 확장 기능은 크로스 플랫폼입니다. 자체 호스팅 n8n은 npm 또는 Docker Desktop을 통해 Windows에서 실행됩니다.',
          },
          {
            q: '이전 답장이 여러 개 있는 이메일 스레드를 어떻게 처리합니까?',
            a: '모델에 전달하기 전에 인용된 내용을 제거하십시오. Python `email` 라이브러리를 사용하여 최신 답장만 추출하십시오 (첫 번째 `>` 접두사 또는 `--- Original Message ---` 구분자 위 부분). 총 3,000자 제한으로 최근 2~3개 메시지만 전달하십시오. 모델은 적절한 답장을 생성하기 위해 전체 스레드 기록이 거의 필요하지 않습니다.',
          },
          {
            q: '업무용으로 GDPR을 준수합니까?',
            a: '로컬 처리는 개인 데이터의 클라우드 AI 처리보다 GDPR상 더 방어 가능합니다. 데이터가 기기에 남아 있을 때 새로운 데이터 처리자 관계를 생성하지 않습니다 (제28조). 그러나 GDPR 준수는 특정 역할, 데이터 특성, 조직의 기존 데이터 보호 정책에 따라 달라집니다. 고객 또는 직원 개인 데이터를 처리하기 위해 이 설정을 사용하기 전에 데이터 보호 책임자와 상담하십시오.',
          },
          {
            q: '다른 사람을 대신하여 답장을 작성하는 데 사용할 수 있습니까?',
            a: '기술적으로는 가능합니다. 자격 증명이 있는 모든 IMAP 계정에 액세스하도록 스크립트를 구성할 수 있습니다. 법적, 윤리적으로는 동의 없이 다른 사람을 위한 이메일 답장을 생성하는 것은 동의 및 위장 관련 중대한 문제를 제기합니다. 이 자동화는 개인적으로 책임지는 계정과 서신에만 사용하십시오.',
          },
          {
            q: '수신 이메일에서 AI를 트리거할 수 있습니까?',
            a: '예, 세 가지 패턴을 통해 가능합니다. (1) Python + IMAP + cron: 30분마다 실행되도록 스크립트를 예약하고, 읽지 않은 새 이메일을 가져오고, 초안을 생성합니다. (2) n8n IMAP 트리거 노드: 1~5분마다 폴링하고 각 새 이메일에서 즉시 워크플로우를 트리거합니다. (3) Thunderbird 필터 규칙: curl을 통해 Ollama를 호출하는 "스크립트 실행" 필터 액션을 사용합니다. n8n 방식이 실시간 분류에 가장 신뢰할 수 있습니다. 30분 지연이 허용 가능한 경우 cron이 더 간단합니다.',
          },
          {
            q: '이메일 AI를 여러 기기 간에 동기화할 수 있습니까?',
            a: '초안은 기존 IMAP 임시보관함 폴더를 통해 동기화할 수 있습니다. `mail.append()`를 사용하여 AI 생성 초안을 IMAP "임시보관함" 폴더에 저장하면 IMAP 액세스가 있는 모든 기기 (휴대폰, 태블릿, 두 번째 노트북)에서 즉시 확인할 수 있습니다. Ollama 백엔드 자체는 동기화되지 않습니다. 구성된 기기에서 실행됩니다. 모바일 기기는 Ollama가 실행 중인 홈 기기에 대한 네트워크 액세스가 필요합니다 (LAN IP 또는 Tailscale). 계획: 홈 서버에서 Ollama + 자동화 실행, 모든 기기에서 IMAP 임시보관함 폴더의 초안 읽기. 단일 AI 생성, 여러 기기에서 검토 및 전송.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[로컬 AI 에이전트로 Zapier 대체하기](/ko/power-local-llm/replace-zapier-with-local-ai-agents) — 비즈니스 프로세스 자동화를 위해 n8n, Ollama, Python을 사용한 로컬 워크플로우 자동화.',
          '[비즈니스 워크플로우를 위한 로컬 AI 에이전트: EU 규정 준수](/ko/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — 기업 환경에 로컬 AI를 배포하기 위한 GDPR, EU AI 법, 규정 준수 컨텍스트.',
          '[개인 비즈니스 데이터를 위한 로컬 RAG](/ko/power-local-llm/local-rag-for-private-business-data) — 클라우드 API 없이 개인 비즈니스 데이터에 대한 문서 Q&A를 설정하는 방법.',
          '[2026년 MCP를 활용한 로컬 AI 에이전트](/ko/power-local-llm/local-ai-agents-with-mcp-2026) — 이메일 클라이언트, 캘린더, 기타 에이전트 컨텍스트 도구에 로컬 LLM을 연결하기 위한 MCP (Model Context Protocol).',
          '[자율 로컬 에이전트: 실제로 작동하는 것들](/ko/power-local-llm/autonomous-local-agents-actually-work) — 2026년에 로컬 AI 에이전트가 할 수 있는 것과 할 수 없는 것에 대한 솔직한 평가.',
          '[Grammarly와 Notion AI를 로컬 모델로 대체하기](/ko/power-local-llm/replace-grammarly-notion-ai-with-local) — 이메일/캘린더 대체를 보완하는 작성 도구를 위한 인접 SaaS 대체 패턴.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 이 세 가지 설정 뒤의 채팅 모델 선택을 위한 더 넓은 모델 권위.',
          '[Zero-Shot 대 Few-Shot 프롬프팅](/ko/prompt-engineering/zero-shot-vs-few-shot) — 프롬프트에 이메일 예시를 포함할 때와 더 나은 일반화를 위해 생략할 때.',
          '[2026년 로컬 LLM 소프트웨어 디렉토리](/ko/power-local-llm/local-llm-software-directory-2026) — 이 스택의 Ollama, n8n, Thunderbird 및 기타 구성 요소에 대한 디렉토리 목록.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 LLM으로 이메일·캘린더 자동화: 클라우드 API 없이 처리하기 (2026)',
      description: '로컬 LLM으로 이메일 작성 자동화, 받은 편지함 요약, 캘린더 관리를 수행하는 방법. Ollama, IMAP 연동, 개인정보를 보호하는 통신 자동화.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-llm-email-and-calendar-automation',
      inLanguage: 'ko',
      datePublished: '2026-05-07',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
}
