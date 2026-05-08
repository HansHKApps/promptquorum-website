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
      'Mistral 7B',
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
        title: 'FAQ',
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
          '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting) — when to include example emails in the prompt and when to withhold them for better generalisation.',
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
      'Automatisierung von E-Mail-Entwürfen, Posteingangsorganisation und Kalendereverwaltung mit lokalen LLMs. Ollama, IMAP-Integration und datenschutzgerichtete Kommunikationsautomation.',
    twitterDescription:
      'Lokale LLM-E-Mail-Automatisierung: Antworten entwerfen, Posteingänge zusammenfassen, Besprechungsagenden generieren — alles lokal, keine Cloud-API. Setup-Anleitung für Ollama + IMAP-Workflows.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 14B',
      'Mistral 7B',
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
          '**E-Mail- und Kalenderautomisierungsaufgaben bevorzugen kleine, schnelle Modelle gegenüber großen, leistungsstarken.** Das Entwerfen einer geschäftlichen E-Mail-Antwort, das Generieren einer Besprechungsagenda oder das Zusammenfassen eines Posteingangs erfordert nicht Llama 3.3 70B — es erfordert ein Modell, das schnell genug ist, um sich interaktiv anzufühlen und kohärent genug, um brauchbaren Geschäftstext zu erzeugen. Für die umfassendere Modelllandschaft über alle Anwendungsfälle hinweg, siehe [Beste lokale LLMs in 2026](/local-llms/best-local-llms-2026?lang=de).',
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
          '**Der Datenschutzvorteil der lokalen E-Mail-Automatisierung ist real, erfordert aber eine korrekte Einrichtung.** Drei Dinge können ihn untergraben: versehentliche Cloud-Synchronisierung von IMAP-Anmeldedaten, E-Mail-Inhalte in Protokollen, die für Drittanbieter-Tools zugänglich sind, und falsch konfigurierte n8n-Instanzen, die den Workflow dem Netzwerk aussetzen. Für das umfassendere Muster "SaaS durch lokale KI ersetzen" über andere Tools hinweg, siehe [Grammarly und Notion AI durch lokale Modelle ersetzen](/power-local-llm/replace-grammarly-notion-ai-with-local?lang=de).',
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
        title: 'FAQ',
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
          '[Zapier durch lokale KI-Agenten ersetzen](/power-local-llm/replace-zapier-with-local-ai-agents?lang=de) — lokale Workflow-Automatisierung mit n8n, Ollama und Python für Geschäftsprozess-Automatisierung.',
          '[Lokale KI-Agenten für Geschäfts-Workflows: EU-Compliance](/power-local-llm/local-ai-agents-business-workflows-eu-compliance?lang=de) — DSGVO, EU-KI-Gesetz und DACH-Compliance-Kontext zur Bereitstellung lokaler KI in Geschäftsumgebungen.',
          '[Lokale RAG für private Geschäftsdaten](/power-local-llm/local-rag-for-private-business-data?lang=de) — Einrichtung von Dokument-Q&A über private Geschäftsdaten ohne Cloud-APIs.',
          '[Lokale KI-Agenten mit MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=de) — MCP (Model Context Protocol) zum Verbinden lokaler LLMs mit E-Mail-Clients, Kalendern und anderen Tools als Agent-Kontexte.',
          '[Autonome lokale Agenten: Was wirklich funktioniert](/power-local-llm/autonomous-local-agents-actually-work?lang=de) — ehrliche Bewertung dessen, was lokale KI-Agenten 2026 können und nicht können.',
          '[Grammarly und Notion AI durch lokale Modelle ersetzen](/power-local-llm/replace-grammarly-notion-ai-with-local?lang=de) — benachbarte SaaS-Ersatz-Muster für Schreib-Tools, ergänzend zur E-Mail/Kalender-Ersetzung hier.',
          '[Beste lokale LLMs in 2026](/local-llms/best-local-llms-2026?lang=de) — umfassendere Modell-Autorität zum Auswählen des Chat-Modells hinter einem dieser drei Setups.',
          '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting?lang=de) — wann Beispiel-E-Mails im Prompt einzubeziehen sind und wann nicht für bessere Generalisierung.',
          '[Lokales LLM-Software-Verzeichnis 2026](/power-local-llm/local-llm-software-directory-2026?lang=de) — Verzeichnislistungen für Ollama, n8n, Thunderbird und andere Komponenten in diesem Stack.',
        ],
      },
    },
  },
}
