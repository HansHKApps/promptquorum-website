# PromptQuorum Academy — Master Specification v1 (combined)

> **Override note 2026-11-20 (Hans):** Academy stays **inside the website repo** at `/academy`, with the same linking as today
> (see [DECISIONS.md](DECISIONS.md)). Wherever this spec says separate repo, Vercel project, `academy.promptquorum.com`,
> `/diagnostic`, `/lesson/[n]`-style routes or "Phase 1: new repo", read it as: in-repo, screens inside the one tool, URLs under
> `/academy` (e.g. verification page `/academy/verify/<ID>`). Consent and analytics follow the general website (no Academy-specific rule).
> This file replaces the 17 Nov spec (`academy-v1-build-spec.md`) that used to live here.


Date: 20 Nov 2026 · Owner: Hans (PromptQuorum) · Target: launch Nov 2026 (soft launch first)
This file **replaces and merges**: `academy-v1-build-spec.md` (17 Nov 2026), `academy-tutor-spec.md`, `academy-spec-addendum-2026-11-20.md`, `ratings-transparency-policy.md`. Where an older document disagrees, this file wins. Save it in the Academy repo as `docs/SPEC.md`.

Source material: "PromptQuorum Academy — Complete Product Documentation" (16 Nov 2026) plus all decisions made by Hans on 17 and 20 Nov 2026.

Working principle from Hans: **always transparency** (what is verified and what is not, what is stored, what is AI-generated, how ratings work).

---

## 0. How Claude Code must process this file

### 0.1 Tags
| Tag | Meaning | What you do |
|---|---|---|
| **[Decided]** | Decided by Hans | Implement as written |
| **[Doc]** | Stated in the product documentation | Implement as written |
| **[Assumption]** | Proposal or default, not confirmed by Hans | Implement the default, list it in your phase report so Hans can change it |
| **[Verify]** | Must be checked in code or against a primary source | Check first, record evidence in the report, adapt if the check contradicts this file |
| **[Pending]** | Not decided | Do **not** build. List it in the report and ask |

### 0.2 Workflow
1. Read this whole file before doing anything.
2. **Phase 0 first (read-only).** No code changes. Produce `docs/DISCOVERY.md` (section 20, Phase 0). Stop and report.
3. Then work phase by phase (section 20). Each phase has acceptance criteria. Do not start phase N+1 before phase N passes.
4. Every claim in a report must be backed by data from the code, a command output or a primary source. Mark statements as **fact (measured)** or **assumption (inference)**.
5. Report format after every phase: what changed; evidence (command output); what is still unverified; assumptions you applied; items that need a decision from Hans.
6. If this file contradicts what you find in the code, do not silently choose: list the contradiction in the report.
7. Do not guess a [Pending] item. Do not invent legal text beyond the drafts here; mark drafts as "for review".

### 0.3 Repo and git rules (from existing repo rules, both repos)
- Read-only diagnosis before any fix.
- Feature branch per phase off main; land before starting the next; two or more unmerged branches means stop and report.
- Never `git add -A`; stage explicit files. No history rewriting on shared main. Use `git worktree` if other sessions may be active.
- Run all validators and the build before every commit. **Do not push to main; Hans pushes** (your safety classifier refuses pushes to main).
- Website repo: never put `headers()`, `cookies()` or `useSearchParams()` in the root layout or header (the June 2026 caching outage was caused by `headers()` in the root layout). Verify `x-vercel-cache: HIT` after header changes.
- Secrets only via env vars; never commit keys.

---

## 1. Product in one paragraph [Doc]

Academy is a free, personalized AI learning platform at its own subdomain. A learner states a subject, available time and knowledge level (and chooses any language), answers diagnostic questions, receives a generated programme of text lessons grounded in PromptQuorum content, asks an AI tutor questions in context, takes three-answer multiple-choice tests with explanations, rates lessons and programmes, and downloads a one-page Certificate of Completion plus a multi-page Course Documentation. Academy is a separate application from Ask Hans and reuses its interface concepts and infrastructure.

## 2. Decisions locked [Decided]

| # | Topic | Decision |
|---|---|---|
| 1 | Programme structure | Dynamic: the AI decides lesson count and structure within hard code-enforced limits (7.3) |
| 2 | Assessment | Learner chooses at start: **None / Final test only / Per-lesson quiz + final test** |
| 3 | Scoring | Overall % + per-topic breakdown. Pass mark 70% overall |
| 4 | Certificate | Certificate of Completion (1 page) + Course Documentation (multi-page), unique ID, sequential number, QR verification (section 12) |
| 5 | Persistence | Browser storage only for learner data; no accounts. Writing to the device only after an explicit learner choice (17.4). Exception: optional opt-in certificate registry and anonymous feedback/ratings on the server |
| 6 | My Academy | After validation, not in v1 |
| 7 | Teacher features | None in v1, no architecture preparation |
| 8 | Content grounding | PromptQuorum content as grounding and further reading, plus independent AI explanations allowed |
| 9 | Hosting | App at `academy.promptquorum.com` (separate application). Explainer page at `promptquorum.com/academy` |
| 10 | Entry point | Graduation-cap icon in the main site header opens the explainer; explainer has "Start learning" |
| 11 | Business model | Free for learners; revenue later via ads, affiliate links, commercial visibility. **No ads in v1** |
| 12 | Language | The whole programme runs in any language the learner chooses (section 11) |
| 13 | AI provider | Anthropic (stated by Hans; Phase 0 confirms in code). Standard terms and DPA, nothing separate signed (17.3) |
| 14 | Legal review | No lawyer engaged now (no budget, no usage); residual risk accepted by Hans; revisit before promotion, ads or employer-facing use (17.12) |
| 15 | Terminology | "Certificate of Completion" and "Course Documentation"; never "diploma" etc. (18) |
| 16 | Ratings | Open rating system, published with a mandatory transparency notice (10.2) |
| 17 | Registry score | Simple: browser sends score and time; the verification page says openly it is not independently calculated (12.6) |
| 18 | Learner name | Not stored on the server (12.6) |

## 3. Scope

**In v1:** separate Academy app · Ask-Hans-like interface · subject, time, level, language inputs · diagnostic · personalized programme · generated text lessons · PromptQuorum content integration · AI tutor (functions 1–6) · three-answer questions with explanations · results · Certificate of Completion + Course Documentation · QR verification registry (opt-in) · issue counter · learner feedback and ratings · external "Search YouTube" button · usage analytics · cost and abuse controls · privacy notices · graduation-cap header entry and explainer page.

**Out of v1:** accounts · My Academy · teacher/classroom · institutional programmes · audio and embedded video · spaced repetition · knowledge maps · uploads · server-side learner data (except the opt-in registry and anonymous feedback) · ads and affiliate links · tutor functions 7–11 · stronger score verification.

---

## 4. Architecture

### 4.1 Repos and deployment
- [Assumption] New repo `promptquorum-academy`. Next.js (App Router) + TypeScript + Tailwind, separate Vercel project with domain `academy.promptquorum.com`.
- [Verify] Check the website repo for Next.js version, Tailwind version (v4 migration done), package manager, lint/CI (PR CI gate exists) and mirror them.
- The explainer page and the header cap live in the **website repo** (`/academy`, all 9 locales).

### 4.2 Reuse from Ask Hans [Verify]
Locate and document, read-only: (1) how Ask Hans calls the LLM (provider, SDK, model, streaming, env vars, key handling); (2) how it calls the PromptQuorum MCP/API (endpoint, auth, tool signatures); (3) UI components for layout (primary area + context panel + chat); (4) existing rate limiting, bot protection, analytics; (5) **how Ask Hans shows and collects ratings or reviews** (section 10.2). Reuse by copying or extracting a shared package; do not import across repos at runtime.

### 4.3 Components
Learner interface (setup wizard, learning workspace, results) · programme engine (diagnostic + programme) · learning engine (lessons, tutor) · assessment engine (questions, validation, scoring) · progress engine (client-side) · PDF generators (certificate, documentation) · registry and verification service · feedback and ratings service.

### 4.4 Runtime flow
Browser (state in memory; localStorage only after explicit save choice) ⇄ Next.js route handlers (stateless; LLM + MCP calls) ⇄ Anthropic API and PromptQuorum MCP/API. The server stores nothing about learners except: anonymous feedback and ratings (10), and the opt-in certificate record (12.6).

---

## 5. Learner flow and screens

1. **Start** (`/`): input "What do you want to learn?", suggested topics (from `list_categories` / `list_clusters`), time selector, level selector (Beginner / Some knowledge / Experienced), test option (None / Final only / Every lesson + final), **language selector (section 11)**, notice "Please do not enter personal data."
2. **Diagnostic** (`/diagnostic`): AI-generated three-answer questions (same engine as tests, `kind: "diagnostic"`), no pass/fail, one at a time. **Number of questions [Decided]: 3 if the selected time is under 60 minutes; 6 if it is 60 minutes or more** (exactly 60 → 6). With 3 questions, the engine picks the three most informative topics. Output: knowledge-gap list per topic. The diagnostic time counts inside the selected time.
3. **Programme overview** (`/programme`): objectives, lesson list with estimated minutes, test plan, total time. "Start".
4. **Learning workspace** (`/lesson/[n]`): lesson text in sections; side column with objectives, progress, further reading, "Search YouTube" button (13); tutor panel (section 8); lesson rating at the end (10).
5. **Quiz** (`/quiz/[n]`, `/final`): one question at a time, 3 options, immediate feedback with explanation, "Report a problem", "Why?" tutor button after answering; results at the end of each quiz.
6. **Results** (`/results`): overall %, per-topic bars, pass/fail vs 70%, time spent, per-question review; programme rating (once); "Download certificate" if passed; "Retake weak topics" if not. Does not block the download.
7. **Resume**: if the learner chose "Save my progress in this browser" and a programme is found, offer "Continue" or "Start new".

Navigation rule: the learner always sees current subject, objective, lesson x of y and progress. All screens are shown in the chosen language (section 11), all generated content labelled "AI-generated" (17.6).

---

## 6. Data model (client-side TypeScript)

Storage key `pq_academy_v1` (one JSON object, only after the explicit save choice). Version field for migrations. All reads/writes in try/catch.

```ts
type Level = "beginner" | "some" | "experienced";
type TestMode = "none" | "final" | "per_lesson_and_final";

interface Programme {
  id: string;                  // uuid v4
  createdAt: string;           // ISO
  language: { code: string; name: string; rtl: boolean };   // any language, see section 11
  subject: string;
  availableMinutes: number;
  selfLevel: Level;
  testMode: TestMode;
  diagnostic: { questions: Question[]; answers: Record<string,string>; gaps: string[]; estimatedLevel: Level };
  objectives: string[];
  lessons: Lesson[];           // 3..12
  finalTest?: Question[];
  progress: {
    currentLesson: number;
    lessonStatus: Record<string, "todo"|"viewed"|"done">;
    quizResults: QuizResult[];      // one per attempt
    finalResults: QuizResult[];     // one per attempt
    secondsSpent: number;           // active time, see 6.1
    secondsPerLesson: Record<string, number>;
    startedAt: string; completedAt?: string;
  };
  certificate?: { id: string; number?: number; learnerName: string; issuedAt: string; registered: boolean };
}

interface Lesson {
  id: string; title: string; topic: string; estimatedMinutes: number;
  objectiveIds: number[];
  sections: { heading: string; body: string }[];   // markdown, short sections
  furtherReading: { title: string; url: string; source: "promptquorum" | "external"; langNote?: "in_english" }[];
  followUpQuestions: [string, string, string];     // tutor chips, generated with the lesson
  quiz?: Question[];
}

interface Question {
  id: string; topic: string; kind: "diagnostic" | "lesson" | "final";
  prompt: string;
  options: [string, string, string];               // exactly 3
  correctIndex: 0 | 1 | 2;
  explanationCorrect: string;
  explanationWrong: [string?, string?, string?];
}

interface QuizResult {
  quizId: string; attemptNumber: number;
  answers: Record<string, number>;
  secondsToAnswer: Record<string, number>;
  correct: number; total: number;
  byTopic: Record<string, { correct: number; total: number }>;
  takenAt: string;
}
```

### 6.1 Time tracking [Doc]
Count active time only: increment while the tab is visible and the user interacted within the last 60 seconds. Cap per lesson to avoid inflated values. Certificate and documentation show recorded active time.

---

## 7. Server API (stateless route handlers)

All endpoints: POST, JSON in/out, zod-validated input, rate limited (section 14), no personal data stored or logged beyond operational metadata. Every endpoint receives the language value (section 11).

| Endpoint | Purpose |
|---|---|
| `/api/topics` | Suggested subjects from MCP `list_categories`, `list_clusters` (cached 24 h) |
| `/api/language` | Validate a free-text language entry; return name + code or reject (11.2) |
| `/api/ui-strings` | Interface string pack for a language outside the reviewed set (11.3), cached |
| `/api/diagnostic` | Generate diagnostic questions (count per section 5 rule) |
| `/api/programme` | Generate programme structure |
| `/api/lesson` | Generate one lesson (+ optional quiz), lazily per lesson |
| `/api/final-test` | Generate final test across all lessons |
| `/api/tutor` | Streaming tutor answer |
| `/api/feedback` | Ratings, comments, error reports, topic requests (anonymous, 10) |
| `/api/ratings-summary` | Public read-only aggregate (counts, distribution, averages), cached |
| `/api/register` | Opt-in certificate registration (12.6): returns certificate number |
| `/verify/<ID>` page | Public verification page (12.6) |

### 7.1 Generation approach
- Structured output / JSON mode with the schemas in section 6; validate every response with zod. On failure retry once with the validation error appended; on second failure return a friendly error.
- Generate lessons lazily (on first open), cache in the client Programme object.
- [Verify] Use the same model and SDK as Ask Hans unless Phase 0 shows a reason not to. Model name as env var.

### 7.2 Grounding with PromptQuorum content [Decided]
For each lesson, before generation:
1. `search_promptquorum` with the lesson topic → up to 3 relevant articles.
2. `get_article` for the top 1–2 → trimmed text (cap ~3,000 tokens total) as grounding.
3. For application topics `search_apps` / `get_app_details` / `compare_apps`; for licensing `explain_license`.
4. Rule: facts about specific tools, prices, hardware or licences must come from retrieved material; general concepts may be explained independently; if material is missing for a specific claim, the lesson must not assert it.
5. `furtherReading` contains only URLs returned by the MCP/API, validated against the returned set; drop anything else.
6. Mark each item `source: "promptquorum"` with a small "From PromptQuorum" label.
7. **Links and language:** PromptQuorum articles exist in the 9 site languages. For those, link to the learner's language version. For any other language, link to the English version and show "in English". (Fact: no translated page exists.)

[Verify] Exact MCP tool names and argument shapes (documented list: `list_categories, search_apps, get_app_details, compare_apps, explain_license, list_clusters, search_promptquorum, get_article`).

### 7.3 Programme structure limits
- 3 ≤ lessons ≤ 12 (code-enforced). [Assumption for the limits]
- Sum of `estimatedMinutes` within ±20% of `availableMinutes` (minus diagnostic and test time). If outside: one automatic regeneration, then clamp.
- Objectives 3–8; each lesson maps to at least one objective.
- Topics the diagnostic shows as known are skipped or compressed to a recap.

### 7.4 Question quality rules (a certificate depends on it)
- Exactly 3 options, exactly 1 correct. Correct position randomized in code after generation, never trusted from the model.
- Wrong options plausible but unambiguously wrong; no "all of the above", no negations; test understanding (why/when/which).
- **Verification pass:** a second LLM call receives the question and the lesson text and answers without seeing `correctIndex`. If its answer differs, discard and regenerate (max 2 attempts). It runs in the learner's language. Log the rejection rate per language [Verify whether quality is lower in less common languages; not known].
- Each question carries an explanation of the correct answer and a short reason per wrong option.
- Generate ~30% extra questions and drop failures so quizzes reach their target size.

### 7.5 Quiz sizes
- Diagnostic: 3 (under 60 min) or 6 (60 min or more) [Decided].
- Final test and lesson quizzes scale with the selected time [Assumption: proposed by Claude, Hans has not confirmed; implement as default and report]:

| Selected time | Final test | Quiz after each lesson (if chosen) |
|---|---|---|
| Under 30 min | 5 questions | 2 |
| 30–59 min | 8 | 3 |
| 60–119 min | 10 | 3 |
| 120 min or more | 15 | 3 |

Final test draws on all objectives with per-topic balance.

---

## 8. AI tutor [Decided functions and rules; numbers Assumption]

### 8.1 Principles
1. The tutor never starts by itself. It runs only when the learner triggers it. 2. Every trigger opens the same tutor panel. 3. AI supports learning; it does not replace the test. 4. Stateless server: context is sent per call; history lives in memory and is persisted only if the learner chose "Save my progress" (17.4).

### 8.2 Functions
| # | Function | Trigger | Release |
|---|---|---|---|
| 1 | Free question in context | Typed in the panel | v1 |
| 2 | One-click rephrase: Simpler / With example / Go deeper / Summarize | Buttons under each lesson section | v1 |
| 3 | Explain selected text | Select text → floating "Explain this" | v1 |
| 4 | Post-answer "Why?" | Button in quiz feedback after the question is answered | v1 |
| 5 | Follow-up chips (3 suggested questions) | End of lesson; generated with the lesson | v1 |
| 6 | Redirect and link out | Off-topic input, or in-subject answers that fit an article | v1 |
| 7 | Practice mode "Quiz me" (unscored, same verification pass) | Panel button | v2 |
| 8 | Weak-topic coaching | "Coach me on weak topics" after a failed final test | v2 |
| 9 | Socratic mode "Guide me" | Panel toggle | v2 |
| 10 | "Too hard / Too easy" adjustment of remaining lessons | Panel buttons with confirmation | later |
| 11 | Deep dive on one topic (optional extra module, MCP-grounded, AI-labelled, unscored, does not change score or pass mark) | Panel/lesson button | v2 [Assumption; proposed by Claude, not objected] |

Functions 7–11 occupy reserved slots in the panel, hidden until built. Do not build them in v1.

### 8.3 Interface
Desktop: lesson text in the main area; side column with objectives, progress, further reading; tutor panel below that column, collapsible. Mobile: bottom sheet [Assumption]. Panel header: "AI tutor — answers are generated by AI and may contain errors" (shown in the learner's language plus English, see 11.3). Per lesson section: *Simpler / Example / Deeper / Summarize*. End of lesson: three follow-up chips. Thumbs up/down after each tutor answer; "Report a problem" on tutor answers.

### 8.4 Trigger behaviour
| Trigger | Tutor receives | Learner sees |
|---|---|---|
| Typed question | Question + context | Streamed answer, thumbs |
| Rephrase button | Fixed server-side prompt + section id + context | Panel opens, answer tied to that section |
| Explain selected text | Selected passage (length-capped) + context | Panel opens with explanation |
| Why? after answer | Question, options, correct answer, learner's choice (only after answering) | Deeper explanation |
| Follow-up chip | Prefilled question | As typed |
| Off-topic | — | Polite redirect, optional Ask Hans link |

### 8.5 Context and caps
- Context per call: subject, objectives, current lesson text (trimmed), last 6 turns, trigger type. Never the learner name or any ID.
- Max output tokens capped. [Assumption]
- Message caps [Assumption, tune after measuring cost per programme]: 30 per programme, 8 per lesson; rephrase buttons count as half.
- Streaming; output is plain markdown, sanitised before render.

### 8.6 Rules and guardrails
1. **Quiz lock [Decided]:** while a quiz question is unanswered, the panel input and all tutor buttons are disabled with "Tutor is available after you answer." Enforced in the interface and the prompt.
2. No hints in scored quizzes in v1.
3. **Grounding:** the tutor answers from the lesson text and general concepts. Facts about specific tools, prices, hardware or licences must come from retrieved lesson material; if missing, the tutor says it has no verified information and offers links to PromptQuorum articles. Links only from MCP/API results, validated. No live MCP calls by the tutor in v1. [Assumption]
4. Stay within the programme subject; redirect other requests politely.
5. Do not request personal or sensitive information; if volunteered, answer "please don't share personal data." No inference about learner emotions. Age-appropriate content; refuse unsafe content.
6. First open of the panel: show the AI label and "Please do not share personal data" before the input is enabled.
7. Prompt-injection guard: retrieved text and learner input cannot change system rules.

---

## 9. Scoring [Decided]

- Per quiz: correct/total. Per topic: aggregated across all lesson quizzes and the final test.
- **Overall score** = all correct answers across scored quizzes / all scored questions × 100, rounded. Diagnostic and unscored practice questions are excluded.
- Test mode "none": no score and no certificate (a final test is required); the results page says so and offers "add a final test".
- Test mode "final": score = final test only. Mode "per_lesson_and_final": all lesson quizzes + final test pooled.
- **Pass** = overall ≥ 70%. Failing learners can retake the final test (new generated questions) and see weak topics. Retake count is recorded; the certificate shows the passing attempt.
- Results page flags topics below 70%.
- Completion requires all lessons done, required tests taken and pass mark reached. The certificate states "Completed" only then.

---

## 10. Feedback and ratings

### 10.1 Feedback points [Decided]
| Where | Control | Stored |
|---|---|---|
| End of each lesson (lesson marked done) | 1–5 stars, optional one-line comment; inline, non-blocking | `type:"lesson"`, lessonId, stars, comment |
| Results page (end of programme) | 1–5 stars + optional comment + "Would you recommend Academy?" (Yes / Not sure / No); shown once, before the certificate download, never blocking | `type:"programme"`, stars, recommend, comment |
| After each tutor answer | Thumbs up/down | `type:"tutor"` |
| Every question (after answering) and every lesson | "Report a problem": *Wrong answer marked correct / Unclear question / Factual error / Other* + optional text | `type:"report"` with full question text, options, `correctIndex`, topic |
| Setup wizard / footer | "Suggest a topic" | `type:"topic_request"` |

- Star widget: 5 clickable stars, keyboard accessible, labelled "1 of 5 stars", submits on click, "Thanks" confirmation, optional comment box after the click. Comments max 500 characters with "Please do not include personal data."
- **Lesson ratings and programme ratings are stored and counted separately** (own count, average, distribution).
- No localStorage-based duplicate check (it would need consent, 17.4). Duplicates are limited only by per-IP rate limiting with a salted, rotating hash. One person can therefore rate more than once; this is stated openly (10.2).
- Storage: anonymous table in the store found in Phase 0 (no name, no IP, no linkable programme id; language, subject text, app version, timestamp). Retention for comments: 12 months [Assumption].
- Email alert (Resend, only if Academy can use it without sharing secrets between repos [Verify]) for `report` entries and ratings ≤2 stars with comment.
- Internal read-only view `/admin/feedback` (secret-protected): filters by type, stars, language; CSV export. Minimal v1: protected JSON endpoint + summary script.
- Weekly review: lowest-rated lessons, most-reported questions, topic requests, tutor thumbs-down rate. A question with ≥2 "Wrong answer marked correct" reports is flagged and purged from any cache.
- Launch scorecard numbers: average programme stars, recommend %, report rate per 100 questions answered.
- **Comments are not published in v1** [Assumption: proposed default, Hans has not confirmed; alternative: publish after review].

### 10.1b "Send feedback" by email [Decided by Hans 20 Nov 2026]
- A permanent, always-visible "Send feedback" control (footer of the Academy tool and on the results page) lets any learner write to **hello@promptquorum.com** and say what they think of the tool.
- Mechanism: a `mailto:` link through the learner's own mail program, exactly like Ask Hans (`FeedbackBar.tsx`, `ASK_HANS_CONTACT_EMAIL`). Subject "Academy feedback"; body prefilled with language, app version and a blank "What I think:" line. **No programme content, subject text or answers are prefilled unless the learner ticks a box**; nothing is stored on our server, no IP, no cookie. Copy the prefill text to the clipboard as a fallback when no mail program opens.
- Anonymous aggregate counter `feedback_mail_click` (language only), like Ask Hans `fb_mail`.
- Notice next to the link: "Opens your email program. Your email address is visible to us. Please do not include personal data you do not want us to see." Translated in all 9 locales (geo-translation gate applies).
- Never blocks any lesson, quiz, certificate or download. Reuse the Ask Hans copy and component where possible.
- Acceptance: link present on every Academy screen; opens a prefilled mail to hello@promptquorum.com; counter increments; no network request carries learner content.

### 10.2 Public ratings and transparency policy [Decided; applies to every product]
**Applies to every place PromptQuorum shows ratings or reviews: Academy, Ask Hans (existing), the website, future products.**

Legal background (fact, from secondary sources, verified 20 Nov 2026): § 5b Abs. 3 UWG (from Directive (EU) 2019/2161, in force since 28 May 2022) requires a business that shows consumer reviews to state whether and how it checks that they come from people who actually used the service. Verification itself is not required; the information is. If no checks are made, that must be stated. Misleading consumers about the authenticity of reviews is always prohibited (annex item 23b to § 3 Abs. 3 UWG). Whether our free products count is an [Assumption]: treat them as covered. Counsel not consulted.

**Our mechanism, described honestly:** an *open rating system*. Anyone can click; there are no accounts or logins; we do not check that the person used the service or completed anything; one person can rate more than once; ratings can easily be manipulated. When the prompt appears (Ask Hans: when a user starts working with the system [Verify]; Academy: after a lesson or programme) is only a user-interface choice and proves nothing.

**Rules for every rating display:**
1. A short notice sits directly next to every published rating or average, not only in the footer, linking to the full page "How our ratings work".
2. Show the number of ratings and the star distribution with every average. **Averages are shown from the first rating [Decided]**, e.g. "5.0 stars (1 rating)".
3. Lesson ratings and programme ratings are shown separately.
4. Publish all ratings; no selection; no deletion for being negative. Remove content only for legal reasons or abuse.
5. No incentives for ratings; a rating never blocks any feature, certificate or download.
6. No `AggregateRating`/`Review` structured data on our own pages (Google treats a review about an entity on that entity's own site as self-serving) [Verify current Google guidelines before ever changing this].
7. Never describe ratings as "verified", "authentic" or "from real users" unless a real check exists and is described. If a check is introduced later (e.g. a signed token after a completed test), update the notices and the date first.
8. Comments are not published (v1).

**Short notice (English) [Decided content; wording Assumption]:** "Open ratings: anyone can submit a rating, we do not check whether the person used the service, and ratings can be manipulated. Details: How our ratings work."
**Short notice (German) [Assumption, native review recommended]:** "Offene Bewertungen: Jeder kann eine Bewertung abgeben. Wir prüfen nicht, ob die Person den Dienst genutzt hat. Bewertungen können manipuliert werden. Details: So funktionieren unsere Bewertungen."
**Full page "How our ratings work":** what is rated; anyone can rate, no account, no check of use; repeated ratings possible and rate-limited with a privacy-preserving method; ratings can be manipulated, treat as an indication only; all ratings published including low ones; no incentives; number of ratings shown with every average; comments not published; last-updated date.

**Display:** summary of lesson and programme ratings on the Academy explainer page and the app start page, loaded from `/api/ratings-summary` (cached) so the website pages stay statically served [Assumption: client-side fetch or revalidation; keep `x-vercel-cache: HIT`].

**Ask Hans (existing) [Verify in Phase 0]:** where ratings are displayed to visitors, whether average or individual ratings are public, accompanying text, when the prompt appears, limits. If ratings are displayed publicly without this notice, add the notice **now**, independently of Academy [Assumption: possible current exposure].

**Website validators:** add a check that every page showing ratings includes the short notice and link, and that "verified" and similar words do not appear next to ratings.

---

## 11. Language: the programme runs in the learner's language [Decided]

### 11.1 Requirement
Everything the learner sees is in the chosen language: interface, headings, buttons, lessons, diagnostic and quiz questions, answers and explanations, tutor answers, notices, certificate and Course Documentation, link labels. Example from Hans: a learner who wants Russian gets the whole programme and the tests in Russian.

### 11.2 Selector
The language selector offers the 9 site languages plus a tenth box **"Other (choose yourself)"**. It opens a pop-up with a searchable list of the world's languages and a free-text field. A free-text entry is validated by `/api/language` (strict structured call or lookup against ISO 639) that returns a name and code, or rejects. Free text is never inserted unchecked into prompts. [Assumption: mechanism]. Note shown in the chosen language and English: "AI quality can be lower in less common languages. Please report mistakes."

### 11.3 Interface texts
- The 9 site languages use prepared, checked interface strings.
- Other languages [Assumption]: the AI produces the string pack once per language from the English source; validated for completeness (all keys present, placeholders intact); cached on the server (contains no learner data). If validation fails: English interface text, generated content still in the chosen language, learner is told.
- Fixed notices with legal weight (AI label, "do not enter personal data", certificate disclaimers, verification notice, ratings notice): shown in the chosen language **and** with the English wording directly beneath, for languages outside the 9 reviewed ones [Assumption].

### 11.4 Generated content
Lessons, questions, explanations, tutor answers and link labels are generated in the chosen language. The verification pass runs in that language. Links per 7.2 item 7.

### 11.5 PDFs
Both PDFs render in the chosen language, RTL where needed. Fonts: open fonts (Noto family) covering the script, loaded on demand per script [Verify coverage, licensing and bundle size]. The certificate title appears in the chosen language with the English "Certificate of Completion" beneath [Assumption]; check translated titles against the forbidden-words list (18). File names use English words plus the ID.

### 11.6 Impact
Every endpoint takes a language value; analytics record language only; regression tests include Russian and one "Other" language (e.g. Swahili or Hindi). Extra effort across Phases 1–6 is not estimated.

---

## 12. Certificate of Completion, Course Documentation, verification

### 12.1 Two files [Decided]
1. **Certificate of Completion:** one page, A4 landscape, made to be printed and framed.
2. **Course Documentation:** multi-page PDF, any length, the evidence behind the certificate. The certificate says "See Course Documentation"; both carry the same certificate ID and issue date.
- Filenames: `PromptQuorum-Academy-Certificate-<subject-slug>-<ID>.pdf`, `PromptQuorum-Academy-Course-Documentation-<subject-slug>-<ID>.pdf`.
- Both PDFs are generated in the browser (`pdf-lib` or `@react-pdf/renderer` [Assumption]). Name and answers stay in the browser; the server receives only the opt-in registry record (12.6).

### 12.2 Certificate page [Decided unless marked]
- Style: formal, wall-ready, framed-document tradition: ornamental SVG border, large serif title, centred layout, date, ID, QR code. **No** seal, crest, motto or Latin text imitating a real university or accrediting body; a PromptQuorum Academy emblem is fine.
- Title: **"Certificate of Completion"** (German: "Teilnahmebescheinigung"; other languages per 11.5).
- **The subject is the visual focus:** largest text on the page, bright brand colour, clearly set apart.
- Branding: "PromptQuorum Academy" prominent in the header, logo/wordmark, promptquorum.com in the footer.
- Content: title; "This certifies that" [Assumption: if ever reviewed and challenged, "This is to confirm that"]; learner name (as entered); subject; overall score and pass status; date issued; certificate ID; certificate number; "See Course Documentation" with the ID; QR code with "Scan to verify" (only if registered; otherwise "Not registered for online verification"); short disclaimer; AI-generated statement.
- **Short disclaimer on this page:** "Academy-issued learning certificate based on activities recorded by PromptQuorum. Not an externally accredited qualification. Name entered by the learner, not verified. Content generated by AI." The longer notice about employment and formal qualifications is **not** on this page; it is on the Course Documentation cover (12.3).
- Signature: founder name and signature are added later [Decided]; leave a reserved empty signature area.
- QR code: quiet margin and minimum printed size about 2.5 cm [Assumption].
- Learner name is entered at download time, stored only in the browser, and the PDF states "Name as entered by the learner."

### 12.3 Course Documentation contents [Decided]
1. Cover/summary: certificate ID, number, issue date, subject, language, learner name (as entered), start and completion dates, recorded active time, test mode, number of attempts, overall and per-topic scores, pass status.
2. **Cover notice [Decided; wording Assumption]:** "This is a self-study learning record generated by PromptQuorum Academy from the learner's recorded activity. It is not a substitute for formal qualifications and must not be used as the sole basis for admission, grading or employment decisions. Questions and lessons were generated by AI."
3. Programme: objectives, lesson list with estimated and recorded minutes per lesson.
4. Diagnostic (marked not scored): questions and answers.
5. Every quiz and test attempt in order: question text, all three options, the learner's answer, the correct answer, right or wrong, explanation, topic, time taken. Wrong answers clearly marked; retakes shown as separate attempts, passing attempt flagged.
6. Lessons as presented: titles and section text in full as an appendix [Assumption]; further-reading links as shown.
7. Not included by default: tutor chat history (may contain personal data). Optional later, only on explicit learner choice.
8. Footer on every page: certificate ID, page x of y, issue date, AI-generated statement.

### 12.4 Number, counter, date [Decided]
- Certificate number: sequential ("No. 1,284"), assigned by the server at registration. The certificate ID is a random `PQA-YYYY-` + 10 crypto-random base32 characters (about 50 bits) so IDs cannot be guessed.
- Issued-certificates counter: registry row count; certificates without registration are counted by the aggregate `certificate_generated` event.
- **The explainer page shows the real total from the start [Decided: transparency]**, split into "registered" and "not registered for online verification". No estimates or rounding up.
- Issue date on the certificate and on every Documentation page.

### 12.5 Certificate ID is a reference label
Without registration the ID is only a reference label and the certificate must not claim it is verifiable.

### 12.6 QR code and verification registry [Decided by Hans; details marked]
**Goal:** an employer or other reader scans the QR code and sees the recorded data so a faked certificate can be detected (analogy: COVID certificate QR codes).

Mechanism:
1. At issue time the browser asks the learner to **opt in**: "Register this certificate so others can verify it online. We store the data listed below. You can ask us to delete it." Unticked by default [Assumption: clear consent basis]. Without opt-in: no QR code.
2. On opt-in the browser calls `/api/register`; the server stores one record in a hosted database (provider decided in Phase 0) and returns the certificate number.
3. The QR code encodes `https://academy.promptquorum.com/verify/<certificate ID>`, generated in the browser (open-source library). The URL and ID are also printed in text.
4. `/verify/<ID>` shows the stored record and the notice below.

Stored record: certificate ID, certificate number, issue date, overall score, pass status, recorded active learning time, subject, language, test mode, SHA-256 hash of the Course Documentation data. (Date, number, score and time requested by Hans; the rest Assumption.) **Learner name is not stored [Decided].** Never stored: answers, lesson text, tutor chat, IP, email, name. The subject text (learner-typed) passes the same content check as programme creation before storing; if it fails, no registration [Assumption]. Retention as long as the service runs [Assumption]; deletion on request to hello@promptquorum.com by certificate ID, after which the page says "no record found".

**Verification page notice [Decided: transparent; wording Assumption]:** "This page confirms that PromptQuorum Academy registered a certificate with these details. It does not show or verify the name or identity of the holder, and it does not verify that the holder completed the work themselves. Score and time were submitted by the learner's browser and were not independently calculated. Questions and lessons were generated by AI. This is a self-study learning record, not an externally accredited qualification." Shown in the page language, with English beneath for non-reviewed languages.

Page shows: certificate number, issue date, subject, score, pass status, active learning time, language, "Record created by PromptQuorum Academy". Optional Documentation check: the reader selects the PDF, the browser hashes it locally and compares with the stored hash ("matches"/"does not match"); the file never leaves the reader's browser; specify the exact hashing method in Phase 6. `noindex` on `/verify/*`; no listing, search or browsing.

Security: rate limiting on registration and `/verify` (salted hashed IP), bot protection on registration, zod-validated input, only operational metadata in logs.

**Score source [Decided: Simple]:** the browser sends score and time; the server stores them. A technically skilled person can submit invented values; the verification page says so. A stronger option (server signs the final test and calculates the score from returned answers) is **later**, once employers use the QR codes.

What the registry proves: that the record exists and was not altered since issue. It does not prove who did the work, that no outside help was used, or that the score came from a real test.

Privacy and legal updates required: privacy policy and explainer privacy section (new processing, purpose, consent via opt-in, recipient = data store provider, retention, deletion route); records of processing and DPIA screening note updated; standard DPA of the data store provider accepted (17.1).

### 12.7 Acceptance criteria (Phase 6)
- Certificate: one A4 landscape page with every field in 12.2, subject visibly dominant, "See Course Documentation", short disclaimer readable, reserved signature area, QR only when registered, none of the forbidden words in 18 (except in the negative disclaimer).
- Course Documentation: all items in 12.3; for a test programme with a failed and a passed attempt, both attempts, all wrong answers and times appear.
- Same ID and issue date on both files; page numbers on every documentation page.
- Both files render correctly for Latin, Arabic (RTL), Japanese, Cyrillic and one language entered through "Other".
- QR scans from a printed A4 and a framed print at arm's length with two common phone apps and lands on the correct URL.
- Registration: opt-in unticked by default; no record without opt-in; record contains only the fields in 12.6; number unique and sequential; re-download of the same certificate creates no second record.
- `/verify`: shows data and notice; unknown or deleted ID → "no record found"; no enumeration (rate-limit test); `noindex`; hash check "matches" for the original and "does not match" for an edited file.
- Deletion removes the record and the page reflects it. Public total on the explainer equals real counts.
- Print test: A4 landscape on paper and "fit to page" in common viewers.

---

## 13. Lesson page: "Search YouTube" button (external link) [Decided]

- Button in the lesson side column under further reading: "Search YouTube for this topic (opens youtube.com)" (learner's language).
- Click opens a confirm step: "You are leaving Academy. The search term below will be sent to YouTube. Search results are not checked by PromptQuorum." The exact search term is shown. *Open YouTube* / *Cancel*.
- *Open YouTube* opens `https://www.youtube.com/results?search_query=<encoded term>` in a new tab with `rel="noopener noreferrer"`.
- Search term built in code from lesson title + subject + language, not by the model [Assumption].
- No "don't show again" option (would write to the device); the confirm is remembered in memory for the session only.
- No YouTube API, no embed, no Google script, no cookie or storage added by Academy. Embedded video is out of v1.
- [Assumption, counsel not consulted] Academy loads nothing from Google; the learner leaves by their own click; judged not to touch the 17.4 rule. Mention in the privacy policy.
- Events: `video_search_click` and `lesson_view` (first-party aggregate counters; no identifiers, no search text; language and lesson number only).
- **Decision rule [Assumption, thresholds adjustable]:** after about 500 lesson views: click rate ≥ ~5% → build an integrated version (curated videos, click-to-load, consent reviewed); < ~2% → drop; in between keep and reassess.

---

## 14. Cost and abuse controls (mandatory before launch)

Because Academy is free, each programme costs LLM money. [Assumption] controls:
- Per-IP rate limits on every endpoint (programmes per hour/day, tutor messages, registrations, `/verify`) via Vercel KV/Upstash or what Ask Hans uses [Verify]. IPs only as salted hashes with a rotating salt and ~24 h TTL.
- Bot protection on programme creation and registration (Cloudflare Turnstile or Vercel BotID).
- Hard token caps per call; lesson length cap ~600–900 words.
- Global daily spend ceiling with a friendly "Academy is busy, try again later"; env-configurable.
- Log per-call token usage (no learner content) to measure cost per completed programme (launch metric).
- Cache non-personal calls (`/api/topics`, MCP article lookups, UI string packs, ratings summary).

---

## 15. Entry point and explainer page (website repo)

### 15.1 Graduation-cap header icon [Decided]
- Mortarboard icon (inline SVG) in the main site header on all pages and all 9 locales; localized tooltip/aria-label, e.g. "PromptQuorum Academy – free personalized AI learning"; links to `/academy` (locale-prefixed). The cap is allowed as a symbol with explicit surrounding text "free learning programme" (18).
- **Header must stay statically rendered:** no `headers()`, `cookies()`, `useSearchParams()` in the root layout or header. After the change verify `x-vercel-cache: HIT` on EN and one non-EN page.
- Optional "New" badge for the first weeks.

### 15.2 Explainer page `/academy` (9 locales)
Outline: 1 Hero ("Learn. Practice. Demonstrate.", promise, **Start learning** → `https://academy.promptquorum.com`) · 2 How it works (7 steps: Choose, Diagnose, Personalize, Learn, Interact, Test, Certify) · 3 What you can learn (live examples from directory clusters) · 4 Personalization (subject, time, level, **any language**, diagnostic, adaptive structure) · 5 The AI tutor (supports, does not replace the test) · 6 Tests and results (three-answer questions, explanations, configurable intensity, 70% pass mark, per-topic breakdown) · 7 The certificate and Course Documentation (what is on them, QR verification, the clear statement that it is not an accredited qualification, **public total of certificates issued**) · 8 Free (how funded; recommendations from relevance; no ads in v1) · 9 Privacy (no account; progress only in your browser if you choose to save; what is sent to the AI provider: subject, answers, questions, never your name; optional registry; delete options) · 10 Limitations (AI-generated content can contain errors; tell us) · 10b Feedback and ratings (how to rate and report; **ratings summary with the open-rating notice**, 10.2) · 11 FAQ (also FAQPage JSON-LD): Is it free? Account? Is the certificate official (no)? Phone? Languages (any)? Where is my progress stored? Can employers verify? Can teachers use it ("planned, not yet available")? · 12 Final CTA.

SEO and publishing [Verify against the existing pipeline]: scaffold (noindex) → EN body → translation gated by validators → internal linking → noindex removal + sitemap flip → IndexNow ping. Schema: `WebPage` + `FAQPage` + `BreadcrumbList` + `Organization` via existing shared helpers (no per-locale forks); **no review markup**. hreflang for all 9 locales; canonical per locale; add to `llms.txt` and sitemap. Contextual internal links from local-AI cluster pages; `validate-internal-links.mjs` must pass. The Academy app is `noindex` except the start page; `/programme`, `/lesson/*`, `/results`, `/verify/*` always `noindex`. Affiliate/ads on the explainer must pass `validate-affiliate-disclosure.mjs` (none in v1). [Assumption] Launch EN + DE explainer first if translation cannot finish; cap tooltip in all 9 languages at launch. The learning product itself supports any language (11).

---

## 16. Analytics

Privacy-friendly, no learner content, no name; first-party aggregate counters without identifiers, cookies or localStorage; no third-party analytics, session recording (e.g. Clarity), tag managers or ad scripts before consent (17.4). [Verify existing tooling.]

Events: `academy_visit` · `programme_start` · `diagnostic_complete` · `lesson_view` · `lesson_complete` · `quiz_start` · `quiz_complete` (score band) · `final_complete` · `certificate_generated` · `certificate_registered` · `programme_resume` · `rating_submitted` (type, stars band, no text) · `question_reported` · `video_search_click` · `directory_referral` · `askhans_referral` · `generation_error` · `cost_per_programme` (server-side tokens). All carry language only as a dimension.

Funnel [Doc]: Acquisition (visits) → Activation (programme start + ≥50% of lessons completed) → Retention (returning learners). Header-cap clicks and the explainer "Start learning" clicks are tracked separately.

---

## 17. Privacy, legal and consent (engineering checklist, not legal advice)

**Limits of this section.** Built from research on 17–20 Nov 2026, mostly from secondary sources. No document guarantees "no legal risk". **No lawyer is engaged now [Decided by Hans]**; the owner accepts the residual risk (17.12). Claude Code verifies every [Verify] item against primary sources (EUR-Lex, Commission guidance, Anthropic's current pages) and records evidence in `docs/legal-evidence/`.

### 17.1 Roles and legal bases
- Controller: the PromptQuorum operator (Hans). Processors: Anthropic (LLM), Vercel (hosting), the registry/feedback data store, Resend (alerts), any rate-limit provider.
- **Contracts [Decided]:** no separately signed contracts. Standard data processing terms accepted online by accepting the provider's terms are used. Phase 0 and Phase 7b list, per processor, which accepted terms cover it [Verify; Assumption that standard terms exist for each].
- Legal bases [Assumption]: lessons and quizzes from the learner's input = Art. 6(1)(b); anonymous feedback and ratings, abuse prevention, aggregate statistics = Art. 6(1)(f) with a short balancing note; registry record = consent via opt-in; non-essential storage, third-party analytics, advertising = consent.
- Add an Academy entry to the Art. 30 records of processing and a one-page DPIA screening note (no accounts, no special-category data requested, no profiling with legal effect) [Assumption].

### 17.2 Data minimisation (build requirements)
- Do not ask for or process name, email, age or location, except the optional certificate name, which stays in the browser.
- Show "Please do not enter personal data." at the setup input, tutor chat, feedback and rating fields.
- Only subject text, quiz answers and tutor messages go to the LLM provider; no IDs, IP or name.
- No server logs of prompts, answers or tutor messages; operational logs hold timestamp, endpoint, status, token counts only; retention max 14 days [Assumption].
- IPs for rate limiting: salted hash with rotating salt, TTL ~24 h; never raw IPs in application storage.
- Feedback comments: retention 12 months then delete or anonymise [Assumption]; deletion requests to hello@promptquorum.com; the policy explains that anonymous feedback cannot always be matched to a requester (Art. 11 GDPR).

### 17.3 AI provider (Anthropic) [Decided; facts verified 20 Nov 2026]
- Hans states the code uses Anthropic. **Phase 0 confirms** [Verify].
- Facts from Anthropic's own pages: the data processing addendum with Standard Contractual Clauses is incorporated automatically into the Commercial Terms of Service; accepting the terms accepts the addendum. By default Anthropic does not use inputs or outputs of its commercial products, including the API, to train its models.
- **Retention [Verify]:** Anthropic's sources differ. One page says prompts and outputs are deleted within 30 days (90 days if flagged as a possible policy violation). A newer API documentation page says conversation content is not retained by default for the API except for specific "covered models". Determine which applies to the model and features used; state it in the privacy policy with a link to Anthropic's current page.
- Option A (standard processing, no EU-region inference) for v1; EU-region inference is a later option. Record in `docs/PRIVACY-DECISIONS.md`. The privacy policy names the provider, purpose and transfer mechanism (SCCs in the DPA); [Verify] whether Anthropic is certified under the EU–US Data Privacy Framework. (From secondary sources: the DPF stayed valid after the General Court's decision of 3 Sep 2025; an appeal is pending.)

### 17.4 Browser storage and consent (Germany, § 25 TDDDG)
- Research finding (secondary): consent is needed before storing or accessing information on a device, including localStorage and sessionStorage, unless strictly necessary for a service the user expressly requested; German authorities read this narrowly; reject must be as easy as accept; no pre-ticked boxes.
- **Spec:** Academy works fully in memory. Persistent saving only after an explicit, unticked choice: a button "Save my progress in this browser" with a one-sentence explanation. Without it nothing is written to the device. Build the consent hook so either "explicit save counts" or "consent banner entry" works [Assumption].
- Warn the learner that unsaved progress and certificate data are lost when the tab closes; offer the downloads before leaving.
- Consent management: reuse the main site's mechanism on `academy.promptquorum.com` [Verify: how the website handles consent, whether the state is shared across subdomains, whether Clarity or other analytics load only after consent]. Withdrawal as easy as giving consent (footer link "Privacy settings").
- Ads and affiliate tracking: not in v1.

### 17.5 Children and minors
Terms state Academy is intended for users aged 16 and over; younger users need a parent or guardian's approval (Germany applies 16 under Art. 8 GDPR [secondary source]). No age verification in v1. No personalized advertising, no profiling, no ads in v1; no teacher/classroom features until a separate legal review. Tutor content must be age-appropriate and refuse unsafe content.

### 17.6 EU AI Act (Regulation (EU) 2024/1689, as amended by the Digital Omnibus)
- Research finding (secondary): Article 50 transparency duties apply since 2 Aug 2026; Article 50(1) requires informing people they interact with an AI system. [Verify] the Commission's Article 50 guidelines (20 Jul 2026) and the transparency Code of Practice for text and apply the result.
- Build: (1) persistent tutor label "AI tutor — answers are generated by AI and may contain errors" before the first message and in the panel header; (2) every generated lesson, quiz and explanation carries a visible "AI-generated" label (Commission's voluntary icon scheme if suitable [Verify]); (3) [Verify] whether machine-readable marking of generated text is required and how (metadata in API responses and exported PDFs); (4) certificate and Documentation state that questions and lessons are AI-generated.
- High-risk screening (Annex III, point 3, evaluating learning outcomes in education institutions): judged unlikely for a self-study consumer tool outside institutions [Assumption]; document in `docs/AI-ACT-SCREENING.md`. Risk rises with institutional use or if results steer access or assessment decisions. Hans's intended employer verification invites such use: the Course Documentation cover notice (12.3) and the verification page notice (12.6) carry the limits; **revisit the screening note before actively promoting employer verification.**
- No emotion recognition or inference about learners. Keep a short technical documentation file for the AI features.

### 17.7 Transparency documents (must exist at launch)
1. Privacy policy section for Academy (Art. 13): controller and contact; purposes and legal bases; recipients (Anthropic, hosting, data store, email provider); transfers and safeguards; retention; rights and how to exercise them; no automated decision-making with legal effect; right to complain; feedback and registration voluntary; no accounts; YouTube external link; ratings policy. EN and DE at least, others following [Assumption].
2. Terms of use: purpose (self-study aid), age 16+, free, AI content may be inaccurate, no professional advice, certificate not accredited, acceptable use, availability without guarantee; liability wording to be drafted without a lawyer is a risk (German standard-terms law limits liability exclusions) — draft conservatively and mark "not legally reviewed".
3. Impressum (§ 5 DDG) reachable from every Academy page [Verify same notice as main site].
4. Consent notice for the Academy domain (17.4).
5. In-product notices: AI label, "no personal data" hint, feedback anonymity, ratings notice (10.2).
6. "How our ratings work" page (10.2).

### 17.8 Certificate and marketing language
No wording suggesting an official, state-recognised or university qualification. Required statements on the certificate page are in 12.2; the longer notice is on the Documentation cover (12.3). No unbackable claims ("best", "guaranteed results", "recognised by employers"). [Verify, informally] whether "Academy" plus the cap icon raises any protected-term issue in Germany ("Hochschule", "Universität" are protected; "Academy" is expected to be fine, unverified).

### 17.9 Advertising and affiliate rules
Not in v1. When introduced: clearly labelled, separate from lesson content, never in quizzes or on the certificate, no ads before consent, no personalised advertising, "sponsored"/"ad" labels, `validate-affiliate-disclosure.mjs`.

### 17.10 Security and data protection by design
HTTPS only; security headers (CSP, HSTS, nonce for inline scripts); secrets only in env vars; treat MCP/article content and learner input as untrusted (prompt-injection guard; tutor output as plain markdown, sanitised); no raw HTML from the model; zod validation of every model response; rate limiting and bot protection (14); feedback and registry store with restricted access, encrypted at rest by the provider; breach plan: follow the existing breach-notification procedure (72 h to the authority where required) [Verify existing procedure].

### 17.11 Data subject rights
Contact hello@promptquorum.com; response within one month. Most learner data lives in the learner's browser ("Delete my data" button). Registry records deletable by certificate ID. Feedback entries deletable if the requester can identify them. Keep a simple register of processors, accepted terms, retention periods, consent configuration and decisions.

### 17.12 Launch gate (go/no-go)
The header cap (Phase 8) must not go live and no marketing may start until:
- [ ] Accepted standard terms/DPAs and transfer mechanism recorded for every processor (17.1, 17.3)
- [ ] Privacy policy and terms of use published (17.7)
- [ ] Consent mechanism live; clean-browser test shows nothing non-essential loads or is stored before consent (screenshots of network tab and storage as evidence)
- [ ] AI labels and tutor notice live (17.6)
- [ ] Certificate and Documentation notices present (12.2, 12.3)
- [ ] Ratings notice and "How our ratings work" page live wherever ratings show, including Ask Hans (10.2)
- [ ] Records of processing, DPIA screening note and AI Act screening note written
- [ ] Forbidden-words check passed across all locale strings, PDFs, verification page and explainer (18)
- [ ] Feedback and registry retention and deletion process tested
- [ ] Legal review: **not engaged; residual risk accepted by Hans on <date>**; revisit before promotion, ads or employer-facing use
Soft launch: the app may go live at its subdomain, unlinked and `noindex`, for testing before the gate is passed; do not promote it.

---

## 18. Terminology [Decided: avoid any risk]

- The documents are called **"Certificate of Completion"** and **"Course Documentation"**.
- **Never use** in the product, explainer, PDFs, verification page or marketing: "diploma", "degree", "accredited" (except in the negative disclaimer), "certified"/"certification", "university", "official", "qualification" (as a claim), "graduate". The graduation-cap icon is allowed as a symbol with explicit text such as "free learning programme".
- German: default titles **"Teilnahmebescheinigung"** and **"Kursdokumentation"** ("Zertifikat" can suggest an audited certification in German usage) [Assumption]. Other languages: same restraint; check each translated title against this list with a model pass.
- Maintain forbidden-word lists (English, German) in the repo; check them in CI and in the launch gate.

## 19. Monetization hooks

Further-reading and "Try it" blocks link to PromptQuorum directory entries and articles (relevance-based). Affiliate links only where the site already has them, with disclosure. **No ads in v1**; revisit after the first usage data. No ads on setup, lesson, quiz, results or certificate screens in v1.

---

## 20. Implementation phases with acceptance criteria

**Phase 0 — Discovery (read-only), ~2 h.** Produce `docs/DISCOVERY.md` with file paths and evidence for: LLM call pattern and **confirmation that Anthropic is the provider**; model and SDK; MCP/API access and exact tool names; UI components for the Ask-Hans-like layout; rate limiting; bot protection; analytics tooling; consent mechanism (and whether it is shared across subdomains); data store options and processors in use (with which accepted terms); Resend usage; **how Ask Hans shows and collects ratings (10.2)**; Anthropic retention page applicable to the model; DPF certification status; Next.js/Tailwind/package manager/CI setup; font coverage and licensing for scripts. List anything in this file that contradicts what you find. No code changes. Stop and report.

**Phase 1 — App skeleton and setup flow, ~3 h (+language selector effort).** New repo, Vercel project, subdomain, layout, setup wizard (including language selector with "Other" pop-up, time/level/test options), in-memory store with explicit save-progress opt-in and versioned localStorage, topic suggestions from MCP, `/api/language`. Acceptance: wizard creates a Programme draft; after the opt-in a reload restores it; without opt-in nothing is written to the device; builds on a Vercel preview.

**Phase 2 — Diagnostic and programme generation, ~4 h.** `/api/diagnostic` (3 or 6 questions per rule), `/api/programme`, zod schemas, retry logic, limits from 7.3, UI strings for non-reviewed languages (`/api/ui-strings`). Acceptance: 20 test subjects (including Russian and one "Other" language) produce valid programmes within limits; diagnostic count is 3 below 60 min and 6 from 60 min; schema failure rate logged.

**Phase 3 — Lessons with grounding, ~4 h.** `/api/lesson`, MCP retrieval, further-reading URL validation and language-version links, lesson page UI, "Search YouTube" button with confirm step, progress and time tracking. Acceptance: further-reading URLs 100% from MCP results (automated check); lessons render on mobile; YouTube button opens only after the confirm step and adds no third-party request on page load.

**Phase 4 — Quiz engine and scoring, ~4 h.** Question generation, shuffle, verification pass, scaled quiz sizes (7.5), quiz UI with explanations, scoring and results page, test-mode switch, per-attempt and per-question timing. Acceptance: unit tests for scoring and pass logic; the verification pass rejects a deliberately wrong planted question; correct-answer position roughly uniform over 100 generated questions; rejection rate logged per language.

**Phase 5 — Tutor, ~4 h.** Functions 1–6, panel UI, quiz lock, caps, AI label and notice, streaming `/api/tutor`. Acceptance: all six triggers open the panel and stream an answer with the right section context; quiz lock: input and buttons disabled during an unanswered question, an extraction attempt fails, an automated test confirms the question payload is not sent before answering; caps enforced; AI label and "no personal data" notice before the first message; off-topic requests redirected; article links 100% from MCP results; no tutor content in server logs.

**Phase 5b — Feedback and ratings, ~4 h.** Section 10: star widgets (lesson and programme, counted separately), tutor thumbs, "Report a problem", topic requests, `/api/feedback`, storage, alert email, protected summary view, `/api/ratings-summary`, public ratings display with the short notice and the "How our ratings work" page (EN, DE first). Acceptance: all feedback types stored and visible in the summary; rate limit works; a report contains full question context; feedback never blocks lesson, quiz or certificate flow; keyboard and screen-reader test of the star widget; averages shown from the first rating with the count; notice next to every rating display; no review structured data; no localStorage used for duplicate checks. The "Report a problem" link must ship at launch.

**Phase 6 — Certificate, Course Documentation, registry, ~8–10 h (estimate, Assumption).** Section 12: both PDFs, QR code, opt-in registration, `/api/register`, `/verify/<ID>` page with notice and hash check, sequential number, public counter data. Acceptance: criteria in 12.7.

**Phase 7 — Cost controls, bot protection, analytics, ~3 h.** Sections 14 and 16. Acceptance: rate limit and spend ceiling tested; events visible in analytics; "Delete my data" works.

**Phase 7b — Legal, GDPR, consent implementation, ~6 h.** Section 17: consent hook, AI labels, minimisation, hashed-IP rate limiting, retention jobs, footer links (Impressum, privacy, terms, privacy settings), drafts of the privacy section, terms of use, ratings page and the three internal notes (records entry, DPIA screening, AI Act screening) marked "not legally reviewed". Acceptance: launch-gate checklist (17.12) complete; clean-browser test shows no storage or third-party requests before consent; AI labels visible on all generated content; evidence in `docs/legal-evidence/`.

**Phase 8 — Website: header cap + explainer + Ask Hans ratings notice, ~4 h (website repo, separate branch). Blocked for public go-live of the cap until the 17.12 gate passes.** Section 15. Also: if Phase 0 found public Ask Hans ratings without the notice, add the notice (this part is not blocked by the gate). Acceptance: all validators pass; `x-vercel-cache: HIT` on EN and one non-EN page after the change; cap visible on 9 locales; explainer indexable, app learner pages `noindex`; ratings notice validator passes.

**Phase 9 — QA and launch, ~2 h.** End-to-end run on three subjects in two languages (include Russian), mobile check, privacy policy updated, launch checklist.

[Assumption] Hours total roughly 45 h plus the unestimated language work. The documentation's two-day estimate is realistic only for Phases 1–6 with a focused session (Phase 5b may slip right after launch, but "Report a problem" ships at launch). Phases 7–9 are required for a safe public launch. Hans decides whether to soft-launch after Phase 6.

---

## 21. Test plan

- **Unit:** scoring and pass logic; diagnostic count rule (59 → 3, 60 → 6); scaled quiz sizes; time-tracking cap; certificate ID format; sequential number; storage migration; URL whitelist; forbidden-words check; ratings summary counts (lesson and programme separate).
- **Contract:** zod validation of every LLM response; fixtures for malformed outputs; language-validation endpoint rejects non-languages and injection attempts.
- **LLM quality:** 20-subject regression set including Russian and one "Other" language; verification-pass rejection rate per language; manual review of 30 questions for correctness before launch.
- **E2E (Playwright):** full learner journey; resume after the explicit save; failure path with retake; quiz lock; certificate + documentation download; registration and verification; rating submission and public display.
- **Non-functional:** mobile layout; RTL; rate limits; spend ceiling; Vercel cache headers on the website after the header change; clean-browser consent test; print test of the certificate.

---

## 22. Open items and risks

| Item | Status |
|---|---|
| LLM cost per completed programme | Unknown until measured; ceiling and logging required |
| Quality of generated "correct" answers | Mitigated by the verification pass; residual risk remains; unknown for less common languages |
| Score in the registry | Simple (Decided); stronger option later |
| Comments published or private | Private in v1 [Assumption, Hans has not confirmed] |
| Scaled final-test and quiz sizes | Proposed table 7.5 [Assumption, Hans has not confirmed] |
| Founder name and signature on the certificate | Later [Decided]; reserved area in layout |
| Tutor functions 7–11 (incl. deep dive) | v2/later [Assumption for deep dive] |
| Stronger score verification, embedded video, ads | Later |
| Legal review | Not engaged; residual risk accepted by Hans; revisit before promotion, ads, employer-facing use |
| Employer use vs AI Act screening | Notices carry the limits; revisit screening before promoting employer verification |
| Anthropic retention for our model/features | [Verify] in Phase 0 |
| German short rating notice and German titles | Machine-drafted; native review recommended |
| Ask Hans rating display | [Verify] in Phase 0; add notice now if public without it |
| No-account persistence | Progress is lost if the tab closes or browser data is cleared; state this on the results page |
| Language work effort | Not estimated |

---

## 23. Kickoff prompt for Claude Code (paste as the first message)

```
Read docs/SPEC.md completely (it is the combined master spec of 20 Nov 2026
and supersedes all earlier Academy documents). We are building PromptQuorum
Academy v1.

Start with Phase 0 only: read-only discovery of the Ask Hans app and the
website repo as described in section 20, Phase 0 and section 4.2. Do not
change any code. Produce docs/DISCOVERY.md with file paths and evidence for
each finding. Label every statement as fact (measured) or assumption.
List anything in SPEC.md that contradicts what you found, every [Verify]
item you could resolve, and every [Pending] or unconfirmed [Assumption]
that needs a decision from Hans.

Follow section 0 and the repo rules in 0.3. Stop after Phase 0 and report.
```
