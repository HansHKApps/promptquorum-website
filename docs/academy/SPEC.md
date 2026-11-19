# PromptQuorum Academy — v1 Build Specification

Status: ready for Claude Code · Date: 17 Nov 2026 · Target: launch Nov 2026
Source: "PromptQuorum Academy — Complete Product Documentation" (16 Nov 2026) + decisions made 17 Nov 2026.

> Saved verbatim from the version Hans handed over on 2026-11-17. **Read [DECISIONS.md](DECISIONS.md) first:** since
> 2026-11-18 Academy is a website tool at `/academy` like Ask Hans (no separate repo, subdomain or Vercel project),
> which overrides sections 2 #9-#10, 4.1, 5 (routes) and 12. Phase 0 findings: [DISCOVERY.md](DISCOVERY.md).

Legend: **[Decided]** = decided by Hans. **[Doc]** = stated in the product documentation. **[Assumption]** = proposal, not yet confirmed. **[Verify]** = Claude Code must verify in the codebase before building (read-only diagnosis first).

---

## 0. How to use this with Claude Code

1. Give Claude Code this file (save it in the new Academy repo as `docs/SPEC.md`) plus the kickoff prompt in section 20.
2. Work phase by phase (section 16). Each phase has acceptance criteria. Do not let Claude Code start phase N+1 until phase N passes.
3. Phase 0 is read-only discovery of the existing Ask Hans app and website, because this spec does not know their internals.
4. Hans pushes to main himself (known: Claude Code's safety classifier refuses pushes to main). Work happens on feature branches.

---

## 1. Product in one paragraph [Doc]

Academy is a free, personalized AI learning platform at its own subdomain. A learner states a subject, available time and knowledge level, answers diagnostic questions, receives a generated programme of text lessons grounded in PromptQuorum content, asks an AI tutor questions in context, takes three-answer multiple-choice tests with explanations, and downloads a PDF certificate with results. Academy is a separate application from Ask Hans and reuses its interface concepts and infrastructure.

## 2. Decisions locked [Decided]

| # | Topic | Decision |
|---|---|---|
| 1 | Programme structure | Dynamic: the AI decides lesson count and structure, within hard code-enforced limits (section 7.3) |
| 2 | Assessment | Configurable by learner at programme start: **None / Final test only / Per-lesson quiz + final test** |
| 3 | Scoring | Overall % + per-topic breakdown. Pass mark 70% overall |
| 4 | Certificate | Full content (objectives, topics, scores, dates, duration) + unique certificate ID |
| 5 | Persistence | Browser storage only. No accounts |
| 6 | My Academy | After validation (not in v1) |
| 7 | Teacher features | None in v1, no architecture preparation |
| 8 | Content grounding | PromptQuorum content as grounding and further reading, plus independent AI explanations allowed |
| 9 | Hosting | App at `academy.promptquorum.com` (separate application). Explainer page at `promptquorum.com/academy` |
| 10 | Entry point | Graduation-cap icon in the main site header opens the explainer page; explainer has a "Start learning" button into the app |
| 11 | Business model | Free for learners. Revenue via ads, affiliate links, commercial visibility (later) |

## 3. Scope

### In v1 [Doc, table 16.1]
Separate Academy app · Ask-Hans-like interface · subject, time, level inputs · diagnostic questions · personalized programme · generated text lessons · PromptQuorum content integration · interactive three-answer questions · answer explanations · assessment results · PDF certificate.

### Added by this spec
Graduation-cap header entry · public explainer page (SEO, localized) · in-lesson tutor chat · learner feedback (star ratings, comments, error reports) · usage analytics events · cost and abuse controls · privacy notice.

### Out of v1
Accounts · My Academy · teacher/classroom · institutional programmes · audio/YouTube · spaced repetition · knowledge maps · uploads · server-side learner data.

---

## 4. Architecture

### 4.1 Repos and deployment
- [Assumption] New repo `promptquorum-academy` (existing structure is website / app / marketing repos). Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel as a separate project with domain `academy.promptquorum.com`.
- [Verify] Check the website repo for Next.js version, Tailwind version (v4 migration done), package manager, lint/CI setup (PR CI gate exists) and mirror them.
- Explainer page lives in the **website repo** at `/academy` (all 9 locales), not in the Academy repo.
- Header cap lives in the **website repo**.

### 4.2 Reuse from Ask Hans [Verify]
Claude Code must first locate and document, read-only:
1. How Ask Hans calls the LLM (provider, SDK, model, streaming, env vars, key handling).
2. How Ask Hans calls PromptQuorum MCP/API (endpoint, auth, tool signatures).
3. The UI components for layout (primary area + context panel + chat).
4. Existing rate limiting, bot protection and analytics.
Output of Phase 0 is a short `docs/DISCOVERY.md`. Reuse by copying or extracting a shared package; do not import across repos at runtime.

### 4.3 Components (from section 15 of the documentation)
- Learner interface: setup wizard, learning workspace, results page.
- Programme engine: diagnostics + programme generation.
- Learning engine: lesson generation, tutor.
- Assessment engine: question generation, validation, scoring.
- Progress engine (v1: client-side only).
- PDF certificate generator.

### 4.4 Runtime flow
Browser (state in localStorage) ⇄ Next.js route handlers (stateless, LLM + MCP calls) ⇄ LLM provider and PromptQuorum MCP/API. The server stores nothing about learners in v1.

---

## 5. Learner flow and screens

1. **Landing / Start** (`/`): one input "What do you want to learn?", suggested topics (from `list_categories` / `list_clusters`), time selector, level selector (Beginner / Some knowledge / Experienced), test option (None / Final only / Every lesson + final), language selector.
2. **Diagnostic** (`/diagnostic`): 5–8 AI-generated three-answer questions (same engine as tests, flagged `kind: "diagnostic"`), no pass/fail, shown one at a time. Output: knowledge-gap list per topic.
3. **Programme overview** (`/programme`): objectives, lesson list with estimated minutes, test plan, total time. Button "Start".
4. **Learning workspace** (`/lesson/[n]`): main area = lesson text in sections; side panel = objectives, progress, further-reading links; chat tutor at the bottom or side. Layout comparable to Ask Hans.
5. **Quiz** (`/quiz/[n]` and `/final`): one question at a time, 3 options, immediate feedback with explanation, results at end of each quiz.
6. **Results** (`/results`): overall %, per-topic bars, pass/fail vs 70%, time spent, per-question review, "Download certificate" if passed, "Retake weak topics" if not.
7. **Resume**: on return, if a programme is found in localStorage, offer "Continue" or "Start new".

Navigation rule: the learner always sees current subject, objective, lesson x of y, and progress.

---

## 6. Data model (client-side, TypeScript)

Storage key: `pq_academy_v1` (one JSON object). Version field for migrations. Wrap all reads/writes in try/catch; storage can be unavailable.

```ts
type Level = "beginner" | "some" | "experienced";
type TestMode = "none" | "final" | "per_lesson_and_final";

interface Programme {
  id: string;                 // uuid v4
  createdAt: string;          // ISO
  language: string;           // one of 9 site locales
  subject: string;
  availableMinutes: number;
  selfLevel: Level;
  testMode: TestMode;
  diagnostic: { questions: Question[]; answers: Record<string,string>; gaps: string[]; estimatedLevel: Level };
  objectives: string[];
  lessons: Lesson[];          // 3..12
  finalTest?: Question[];
  progress: {
    currentLesson: number;
    lessonStatus: Record<string, "todo"|"viewed"|"done">;
    quizResults: QuizResult[];
    finalResult?: QuizResult;
    secondsSpent: number;     // see 6.1
    startedAt: string; completedAt?: string;
  };
  certificate?: { id: string; learnerName: string; issuedAt: string };
}

interface Lesson {
  id: string; title: string; topic: string; estimatedMinutes: number;
  objectiveIds: number[];
  sections: { heading: string; body: string }[];  // markdown, short sections
  furtherReading: { title: string; url: string; source: "promptquorum" | "external" }[];
  quiz?: Question[];          // present when testMode = per_lesson_and_final
}

interface Question {
  id: string; topic: string; kind: "diagnostic" | "lesson" | "final";
  prompt: string;
  options: [string, string, string];   // exactly 3
  correctIndex: 0 | 1 | 2;
  explanationCorrect: string;
  explanationWrong: [string?, string?, string?];  // why each wrong option is wrong
}

interface QuizResult { quizId: string; answers: Record<string, number>; correct: number; total: number; byTopic: Record<string,{correct:number,total:number}>; takenAt: string }
```

### 6.1 Time tracking
Count active time only: increment while the tab is visible and the user interacted within the last 60 seconds. Cap per lesson to avoid inflated values. Certificate shows recorded active time.

---

## 7. Server API (stateless route handlers)

All endpoints: POST, JSON in/out, input validated with zod, rate limited (section 11), no personal data stored or logged beyond operational metadata.

| Endpoint | Purpose | Notes |
|---|---|---|
| `/api/topics` | Suggested subjects | Calls MCP `list_categories` and `list_clusters`, cached 24h |
| `/api/diagnostic` | Generate diagnostic questions | Input: subject, minutes, selfLevel, language |
| `/api/programme` | Generate programme structure | Input: subject, minutes, diagnostic result, testMode, language |
| `/api/lesson` | Generate one lesson (+ optional quiz) | Called lazily per lesson, not all at once |
| `/api/final-test` | Generate final test across all lessons | Input: objectives + lesson topics |
| `/api/tutor` | Streaming tutor answer | Input: programme context summary, current lesson id, history (last N turns), question |
| `/api/certificate` | Render PDF | Or client-side rendering, see section 10 |
| `/api/feedback` | Store ratings, comments, error reports | Anonymous, see section 8a |

### 7.1 Generation approach
- Use structured output / JSON mode with the schemas in section 6. Validate every response with zod. On failure retry once with the validation error appended; on second failure return a friendly error and let the learner retry.
- Generate lessons lazily (on first open) and cache in the client Programme object. This keeps cost proportional to actual use.
- [Verify] Use the same model and SDK as Ask Hans unless Phase 0 shows a reason not to. Make the model name an env var.

### 7.2 Grounding with PromptQuorum content [Decided #8]
For each lesson, before generation:
1. `search_promptquorum` with lesson topic → pick up to 3 relevant articles.
2. `get_article` for the top 1–2 → pass trimmed text (cap ~3,000 tokens total) as grounding.
3. For application topics, `search_apps` / `get_app_details` / `compare_apps`; for licensing `explain_license`.
4. Prompt rule: facts about specific tools, prices, hardware or licences must come from retrieved material; general concepts may be explained independently. If retrieved material is missing for a specific claim, the lesson must not assert it.
5. `furtherReading` must contain only URLs returned by the MCP/API (never invented). Validate URLs against returned set; drop anything else.
6. Mark each further-reading item `source: "promptquorum"` and show a small "From PromptQuorum" label.

[Verify] Exact MCP tool names and argument shapes: documented list is `list_categories, search_apps, get_app_details, compare_apps, explain_license, list_clusters, search_promptquorum, get_article`.

### 7.3 Programme structure limits [Decided #1, limits are an Assumption]
- AI chooses lesson count, but code enforces **3 ≤ lessons ≤ 12**.
- Sum of `estimatedMinutes` must be within ±20% of `availableMinutes` (minus test time). If outside, one automatic regeneration, then clamp.
- Programme must include objectives (3–8) and each lesson must map to at least one objective.
- Level adaptation: topics the diagnostic shows as known are skipped or compressed to a recap.

### 7.4 Question quality rules (critical, because a certificate depends on it)
- Exactly 3 options, exactly 1 correct. Correct position randomized in code (shuffle after generation), never trusted from the model.
- Wrong options must be plausible but unambiguously wrong; no "all of the above", no negations.
- Question must test understanding (why/when/which), not term recognition.
- **Verification pass**: second LLM call (or same model, separate prompt) receives the question and the lesson text and answers it without seeing `correctIndex`. If its answer differs from `correctIndex`, discard the question and regenerate (max 2 attempts). This is the main defence against wrong "correct" answers.
- Each question carries an explanation of the correct answer and a short reason per wrong option.
- Generate ~30% extra questions and drop failures so quizzes reach their target size.

### 7.5 Quiz sizes [Assumption]
Diagnostic 5–8 · lesson quiz 3 questions · final test 10 questions for programmes ≤ 60 min, 15 for longer. Final test draws on all objectives with per-topic balance.

### 7.6 Tutor
- System prompt: you are the Academy tutor for programme X; current lesson Y; learner level Z. Explain, give examples, clarify mistakes. Do not reveal answers to unanswered quiz questions during an active quiz. Stay within the programme subject; for unrelated requests, politely redirect (optionally link to Ask Hans).
- Context sent per call: subject, objectives, current lesson text (trimmed), last 6 turns. Never send learner name.
- Streaming response, max tokens capped, per-session message cap (section 11).
- Product principle [Doc]: AI interaction supports learning; it does not replace the test.

---

## 8. Scoring [Decided #3]

- Per quiz: correct/total. Per topic: correct/total, aggregated across all lesson quizzes and the final test.
- **Overall score** = (all correct answers across scored quizzes) / (all scored questions) × 100, rounded to integer. Diagnostic questions are excluded.
- Test mode "none": no score and no certificate (certificate requires at least a final test) — the results page says so and offers "add a final test".
- Test mode "final": score = final test only.
- Test mode "per_lesson_and_final": score = all lesson quizzes + final test pooled.
- **Pass** = overall ≥ 70%. Failing learners can retake the final test (new generated questions) and see weak topics. Retake count stored; certificate shows the score of the passing attempt.
- Results page shows per-topic bars and flags topics below 70%.

---

## 8a. Learner feedback (stars, comments, error reports) [Added 17 Nov 2026 at Hans's request]

Purpose: learn whether Academy is useful and catch wrong content early. Feedback must be quick (one click) and optional, never blocking.

### Feedback points
| Where | Control | Stored fields |
|---|---|---|
| End of each lesson | 1–5 stars, optional one-line comment | `type:"lesson"`, lessonId, stars, comment |
| Results page (end of programme) | 1–5 stars for the overall programme + optional comment + "Would you recommend Academy?" (Yes / Not sure / No) | `type:"programme"`, stars, recommend, comment |
| After each tutor answer | Thumbs up / thumbs down | `type:"tutor"`, up/down |
| Every question (after answering) and every lesson | "Report a problem" link: reasons = *Wrong answer marked correct / Unclear question / Factual error / Other* + optional text | `type:"report"`, questionId or lessonId, reason, text |
| Setup wizard / footer | "Suggest a topic" free text | `type:"topic_request"`, text |

### Rules
- Star widget: 5 clickable stars, keyboard accessible, labelled ("1 of 5 stars"), submits on click, with a short "Thanks" confirmation and an optional comment box that appears after the click. Do not interrupt the flow: lesson rating is a small inline element, not a modal.
- Programme rating is shown on the results page before the certificate download but must not block the download.
- Show the programme-rating prompt once per programme; do not re-ask on resume.
- **Report a problem** is the most valuable feedback type: it is how wrong quiz answers get found. Reports for a question must include the full question text, options, `correctIndex` and the lesson topic so the issue can be reviewed without the learner's browser state.
- Comments: max 500 characters; show the notice "Please do not include personal data."

### Storage and delivery
- New endpoint `POST /api/feedback`, zod-validated, rate limited (e.g. 20 per IP per day), bot-protected with the same mechanism as programme creation.
- [Assumption] Store feedback server-side in a small table (Vercel Postgres/KV or whichever store Phase 0 finds in use), anonymous: no name, no IP, no programme ID that links to a person. Store the language, subject text, app version and timestamp only.
- [Assumption] Optionally forward `report` entries and low ratings (≤2 stars with comment) by email to hello@promptquorum.com using the existing Resend infrastructure, so errors are seen quickly. [Verify] Resend is already in use on the website; reuse it only if Academy can access it without sharing secrets between repos.
- Add an internal read-only view (`/admin/feedback`, protected by a secret) listing feedback sorted by newest, with filters by type, stars and language, and a CSV export. Minimal v1: a protected JSON endpoint plus a script that prints a summary table (average stars per lesson/programme, number of reports) is enough.
- Because there is no account, duplicate submissions per learner cannot be fully prevented; limit one rating per lesson per browser using localStorage and accept residual noise.

### Public display of ratings
- [Assumption] Do **not** show a public star average at launch. Reasons: sample size will be small, and a self-reported average on your own page invites distrust. Revisit once there are at least ~50 programme ratings.
- [Verify] Do not add `AggregateRating` structured data in v1. Google restricts review markup that a site writes about its own organization or service, so check current Google guidelines before ever adding it.

### Product use of feedback
- Weekly review: lowest-rated lessons (by subject and topic), most-reported questions, topic requests, thumbs-down rate on the tutor.
- Any question with ≥ 2 "Wrong answer marked correct" reports is flagged for review and, if generation is cached anywhere, purged.
- Feed the three key numbers into the launch scorecard: average programme stars, recommend % (Yes / total), report rate (reports per 100 questions answered).

### Privacy
Feedback is the only learner-originated data stored server-side in v1. State this on the explainer page (privacy section) and in the app footer: "If you leave feedback, we store the rating, comment and the subject you studied, without your name or any account."

---

## 9. Learning-time and completion
Completion requires: all lessons marked done, required tests taken, and pass mark reached. Certificate states "Completed" only when all conditions hold [Doc: certificate documents whether programme was completed].

---

## 10. PDF certificate [Decided #4]

Fields: learner name · subject · programme objectives · topics covered · start and completion dates · recorded active learning time · test mode · overall score and per-topic scores · pass status · unique certificate ID · issue date · PromptQuorum Academy branding · footer statement.

- **Learner name**: entered by the learner at download time, stored only in the browser. The PDF must state "Name as entered by the learner" [Assumption, avoids implying identity verification].
- **Mandatory disclaimer** [Doc]: "This is an Academy-issued learning certificate based on activities and results recorded by PromptQuorum. It is not an externally accredited academic qualification."
- **Certificate ID**: `PQA-YYYY-` + 10 random base32 chars (crypto-random). [Assumption] Because there are no accounts and no server storage in v1, the ID is a reference label, not a verifiable record. The PDF must not claim it is verifiable. Verification page is a documented later option (store ID + score hash server-side).
- Rendering: [Assumption] client-side with `pdf-lib` or `@react-pdf/renderer` (open source, cross-platform), so no learner data touches the server. Must support the language of the programme including Arabic (RTL) and CJK: embed suitable open fonts (e.g. Noto family) [Verify font licensing and bundle size].
- Layout: A4 landscape, one page, per-topic score table, QR-free in v1.
- Filename: `PromptQuorum-Academy-Certificate-<subject-slug>-<ID>.pdf`.

---

## 11. Cost and abuse controls (mandatory before launch)

Because Academy is free and ad-funded, each programme costs LLM money. [Assumption] Controls:
- Per-IP rate limits on every endpoint (e.g. programmes per hour/day, tutor messages per programme), via Vercel KV/Upstash or equivalent [Verify what Ask Hans already uses and reuse it].
- Bot protection on programme creation (Cloudflare Turnstile or Vercel BotID).
- Hard token caps per call; lesson length cap (~600–900 words per lesson).
- Global daily spend ceiling: when reached, show "Academy is busy, try again later" instead of failing silently. Env-configurable.
- Log per-call token usage (no learner content) to measure cost per completed programme. This is a launch metric.
- Cache non-personal calls (`/api/topics`, MCP article lookups).

---

## 12. Entry point and explainer page (website repo)

### 12.1 Graduation-cap header icon [Decided #10]
- Mortarboard icon (inline SVG, project uses SVG-only images) in the main site header on all pages and all 9 locales.
- Tooltip / aria-label localized: e.g. "PromptQuorum Academy – free personalized AI learning".
- Links to `/academy` (locale-prefixed: `/de/academy`, etc.).
- **Critical constraint [Verify, from past incident]**: the header must stay statically rendered. Do **not** use `headers()`, `cookies()` or `useSearchParams()` in the root layout or header; the June 2026 caching outage was caused by `headers()` in the root layout. After the change, verify `x-vercel-cache: HIT` on sample pages (EN and one non-EN).
- Small "New" badge for the first weeks is optional.

### 12.2 Explainer page `/academy` (9 locales)
Content outline (all details explained, per Hans's request):
1. Hero: "Learn. Practice. Demonstrate." + one-sentence promise + **Start learning** button → `https://academy.promptquorum.com`.
2. How it works: the 7 steps (Choose, Diagnose, Personalize, Learn, Interact, Test, Certify) with a short description each.
3. What you can learn: examples from PromptQuorum (local AI, running local models, hardware requirements, choosing AI apps, AI workflows). Pull a few live examples from the directory clusters.
4. Personalization explained: subject, time, level, diagnostic questions, adaptive structure.
5. The AI tutor: what it can do, and that it supports but does not replace the test.
6. Tests and results: three-answer questions, explanations, configurable intensity, 70% pass mark, per-topic breakdown.
7. The certificate: what is on it, plus the clear statement that it is not an accredited qualification.
8. Free: what free means and how Academy is funded (ads, affiliate links), and a statement that recommendations come from relevance.
9. Privacy: no account needed; progress is saved in your browser only; what is sent to the AI provider (subject, answers, questions, never name); how to delete (clear data button/browser storage).
10. Limitations: AI-generated content can contain errors; tell us if you find one (contact link).
10b. Feedback: explain that learners can rate lessons and programmes with stars, report wrong questions, and suggest topics, and that feedback is anonymous.
11. FAQ (also as FAQPage JSON-LD): Is it really free? Do I need an account? Is the certificate official? Can I use it on my phone? Which languages? Where is my progress stored? Can teachers use it? ("planned, not yet available")
12. Final CTA: Start learning.

SEO and publishing [Verify against existing pipeline]:
- Goes through the existing pipeline: scaffold (noindex) → EN body → translation gated by validators → internal linking → noindex removal + sitemap flip → IndexNow ping.
- Schema: `WebPage` + `FAQPage` + `BreadcrumbList` + `Organization`; use existing shared schema helpers (avoid forking per locale, a known past failure).
- hreflang for all 9 locales; canonical per locale.
- Add to `llms.txt` and sitemap.
- Internal links: add contextual links to `/academy` from relevant local-AI cluster pages; validators (`validate-internal-links.mjs`) must pass.
- The Academy **app** (`academy.promptquorum.com`) is `noindex` except the start page; learner pages (`/programme`, `/lesson/*`, `/results`) are `noindex` always [Doc 14.4].
- Affiliate/ads on the explainer must pass `validate-affiliate-disclosure.mjs`.
- [Assumption] Launch with EN + DE explainer first if the 9-locale translation cannot finish in time; remaining locales follow through the normal pipeline. Header cap tooltip needs all 9 locales at launch (short string).

---

## 13. Analytics (metrics from documentation section 17)

Privacy-friendly, no learner content, no name. [Verify existing analytics tooling (Clarity, GSC, Vercel analytics) and use it.] Events:

`feedback_submitted` (type, stars band, no text) · `question_reported` · `academy_visit` · `programme_start` · `diagnostic_complete` · `lesson_complete` · `quiz_start` · `quiz_complete` (with score band) · `final_complete` · `certificate_generated` · `programme_resume` (returning learner) · `directory_referral` (click to directory/app/article) · `askhans_referral` · `generation_error` · `cost_per_programme` (server-side tokens).

Funnel levels [Doc]: Acquisition (visits) → Activation (programme start + meaningful part completed) → Retention (returning learners). Define "meaningful part" as ≥ 50% of lessons completed.

Header-cap CTR: track clicks on the cap and the explainer's "Start learning" button separately to see where visitors drop.

---

## 14. Privacy and compliance [Assumption: confirm with legal context]

- No accounts, no server-side learner storage except anonymous feedback (section 8a). Browser storage only; add a "Delete my data" button (it clears local data; submitted feedback is anonymous and cannot be linked back, state this).
- Subject text, answers and tutor messages are sent to the LLM provider: disclose on the explainer and in the app footer. Check the provider's data retention and training terms and the existing DPA [Verify against existing compliance setup].
- Learner name never sent to any server (PDF is generated client-side).
- Consent management for ads/affiliate cookies reuses the main site's setup. No ads inside quiz screens.
- Link to existing Impressum and Privacy Policy from the app footer. Update the privacy policy for Academy before launch.
- Do not index personal/learning URLs (see 12.2).

---

## 15. Monetization hooks (v1: light) [Doc section 13]

- "Further reading" and "Try it" blocks in lessons link to PromptQuorum directory entries and articles (relevance-based).
- Affiliate links only where the existing site already has them, with disclosure.
- Ad slots only on setup/results pages, never inside lessons or quizzes. [Assumption] Start without ads in v1 and add after the first usage data, since the goal is to validate learning.

---

## 16. Implementation phases with acceptance criteria

**Phase 0 — Discovery (read-only), ~2 h**
Produce `docs/DISCOVERY.md` per section 4.2. Acceptance: LLM call pattern, MCP access, UI components, rate limiting and analytics documented with file paths. No code changes.

**Phase 1 — App skeleton and setup flow, ~3 h**
New repo, Vercel project, subdomain, layout (Ask-Hans-like), setup wizard, localStorage store with versioning, topic suggestions from MCP.
Acceptance: wizard saves a Programme draft; page reload restores it; builds on Vercel preview.

**Phase 2 — Diagnostic and programme generation, ~4 h**
Endpoints `/api/diagnostic`, `/api/programme`, zod schemas, retry logic, limits from 7.3.
Acceptance: 20 test subjects produce valid programmes within lesson and time limits; schema failure rate logged.

**Phase 3 — Lessons with grounding, ~4 h**
`/api/lesson`, MCP retrieval, further-reading URL validation, lesson page UI, progress and time tracking.
Acceptance: further-reading URLs are 100% from MCP results (automated check); lessons render on mobile.

**Phase 4 — Quiz engine and scoring, ~4 h**
Question generation, shuffle, verification pass, quiz UI with explanations, scoring and results page, test-mode switch.
Acceptance: unit tests for scoring and pass logic; verification pass rejects a deliberately wrong planted question; correct-answer position distribution roughly uniform over 100 generated questions.

**Phase 5 — Tutor, ~2 h**
Streaming `/api/tutor`, context handling, message caps, no answer leak during active quiz.
Acceptance: manual tests including an attempt to extract quiz answers.

**Phase 5b — Feedback, ~3 h**
Section 8a: star widgets (lesson, programme), thumbs on tutor, "Report a problem" on questions and lessons, `/api/feedback`, storage, email alert for reports, protected summary view.
Acceptance: all five feedback types stored and visible in the summary; rate limit works; a report contains full question context; feedback never blocks lesson, quiz or certificate flow; keyboard and screen-reader test of the star widget.

**Phase 6 — Certificate, ~3 h**
Client-side PDF, ID generation, disclaimer, language/font support including one RTL and one CJK sample.
Acceptance: PDF opens correctly in common viewers; all fields present; Arabic and Japanese render.

**Phase 7 — Cost controls, bot protection, analytics, privacy, ~3 h**
Section 11, 13, 14.
Acceptance: rate limit and spend ceiling tested; events visible in analytics; delete-data button works.

**Phase 8 — Website: header cap + explainer, ~4 h (website repo, separate branch)**
Section 12 including pipeline and validators.
Acceptance: all validators pass; `x-vercel-cache: HIT` on EN and one non-EN page after change; cap visible on 9 locales; explainer indexable, app learner pages noindex.

**Phase 9 — QA and launch, ~2 h**
End-to-end run on three subjects in two languages, mobile check, privacy policy updated, launch checklist.

[Assumption] The documentation estimates about two days for the core. Hours above total roughly 34 h, so the two-day target is only realistic for Phases 1–6 (Phase 5b can slip to right after launch if time is short, but the "Report a problem" link should ship at launch) with a focused session; Phases 7–9 are required for a safe public launch. Hans to decide whether to soft-launch (unlinked) after Phase 6.

---

## 17. Rules for Claude Code (from existing repo rules, apply to both repos)

- Read-only diagnosis before any fix. Every claim in reports backed by data from the code or a tool result.
- Feature branch per phase off main; land before starting the next; two or more unmerged branches means stop and report.
- Never `git add -A`; stage explicit files. No history rewriting on shared main. Use `git worktree` if other sessions may be active.
- Run all validators and the build before every commit. Do not push to main; Hans pushes.
- Never put `headers()`, `cookies()` or `useSearchParams()` in root layout or header in the website repo.
- Secrets only via env vars; never commit keys.
- Report format: what changed, evidence (command output), what is still unverified.

---

## 18. Test plan summary

- Unit: scoring, pass logic, time tracking cap, certificate ID format, storage migration, URL whitelist.
- Contract: zod validation of every LLM response; fixtures for malformed outputs.
- LLM quality: 20-subject regression set; question verification-pass rejection rate logged; manual review of 30 questions for correctness before launch.
- E2E (Playwright): full learner journey; resume after reload; failure path with retake.
- Non-functional: mobile layout, RTL, rate limits, spend ceiling, Vercel cache headers on website after header change.

---

## 19. Open items and risks

| Item | Status |
|---|---|
| LLM cost per completed programme | Unknown until measured; ceiling and logging required |
| Certificate verification | Open; v1 ID is a label only |
| Quality of generated "correct" answers | Mitigated by verification pass; residual risk remains |
| 9-locale explainer translations | May stagger after launch |
| Ask Hans internals | Unknown to this spec, resolved in Phase 0 |
| Ads/affiliate in Academy | Deferred until usage data |
| Legal review of certificate wording and privacy text | Recommended before launch |
| No-account persistence | Progress lost if browser data cleared; state this on the results page |

---

## 20. Kickoff prompt for Claude Code (paste as first message)

```
Read docs/SPEC.md completely. We are building PromptQuorum Academy v1.
Start with Phase 0 only: read-only discovery of the Ask Hans app and the
website repo as described in section 4.2. Do not change any code.
Produce docs/DISCOVERY.md with file paths and evidence for each finding
and list anything in SPEC.md that contradicts what you found.
Follow section 17 rules. Stop after Phase 0 and report.
```
