# Academy — decisions after Phase 0

Newest first. Each entry: date, who decided, what, and what it changes in [SPEC.md](SPEC.md).

## 2026-11-20 (Hans, after the Phase 0 report of the master spec)

- **Architecture stays as built:** Academy lives inside the website repo, same linking as now. The master spec's separate repo, subdomain and Phase 1/8 plans are overridden (note at the top of [SPEC.md](SPEC.md)). Verification page, when built: `/academy/verify/<ID>`.
- **Consent / Clarity (F2):** Academy does exactly what the general website does. No Academy-specific rule; the master spec's "no analytics before consent" does not apply to Academy separately. Any site-wide change is a separate decision.
- **Bot protection and spend limit:** wanted, but low priority during development (a bot hit is unlikely; the worst case is the API budget running out and Academy stopping). When done: simple per-day usage cap and global daily ceiling, bot protection optional. Not built yet.
- **Old replaced by new:** `docs/academy/SPEC.md` is now the 20 Nov master spec (the 17 Nov spec is gone). `DISCOVERY.md` stays as background; the 20 Nov Phase 0 findings are in the report next to the master spec.
- **Feedback by email (spec 10.1b):** built. A "Send feedback by email" link in the Academy privacy strip (visible on every screen, incl. results) opens the visitor's mail program to hello@promptquorum.com; the mail carries only the language and page, no learner content. The click is counted anonymously (`academy:count:feedback_mail`, via `/api/academy/event`). Texts in 9 locales (`feedbackLink`, `feedbackNote`, `feedbackMail*`); geo-translation rules applied.
- Open, not asked: diagnostic size (spec 3/6 vs built 5/6/8) and registry storage (Redis vs database) stay as built until decided.
- Note: the Academy privacy text still says "If you leave feedback, we store the rating, the comment and the subject". That describes the planned ratings feature (not built); the email link stores nothing on our server.

### 2026-11-20 (later the same day): answers to the open-items list, and what was built

- **Quick check:** 3 questions under 60 minutes, 6 from 60 minutes up (SPEC 5.2). Final test (6/10/15) and lesson quiz (3) sizes stay as built.
- **Registry:** Redis for the test phase (one hash `academy:cert:<ID>`, sequential number via `academy:cert:seq`). QR code, Course Documentation and the public verification page `/academy/verify/<ID>` (9 locales, always noindex) are built. Upgrade to a database once usage grows.
- **Any language:** the programme language is a site language or any language the learner names ("Other language…", checked by `/api/academy/language`). The interface stays in the page language; the AI writes lessons, questions, explanations and tutor answers in the chosen language. Certificate and Course Documentation: the learner picks one of the 9 site languages before they are created (default: the programme language if the site has it, else the page language).
- **Names:** "Certificate of Completion" and "Course Documentation"; German "Teilnahmebescheinigung" and "Kursdokumentation"; the other languages use the same restraint (fr attestation, es constancia, pt comprovante, zh 完成证明, ar إفادة). `npm run validate:academy-words` checks all Academy texts against the forbidden-words list (SPEC 18).
- **Feedback is email-only and nothing written is stored:** this reverses the 2026-11-17 decision to store comments (max 500 characters). Ratings are anonymous counters (one star click = a number), exactly like Ask Hans; a 1-3 star rating offers an email to the owner; "Report a problem" opens an email with the question prefilled; tutor thumbs are counters. Comments are therefore never published or stored. `npm run academy:stats` shows the totals.
- **Build everything, owner decides order:** built in one run: tutor (functions 1-6, quiz lock, caps 30/8, rephrase half), ratings (lesson and programme separately), report-a-problem, QR registry, Course Documentation, cost controls (per-visitor daily cap 150, whole-site daily ceiling 4000, both env-configurable; cross-site POST refused), header graduation-cap link (F16), open-ratings notice on the Ask Hans statistics block.
- **Ask Hans ratings are public** (the statistics block on /askhans shows people who rated and average stars). The open-ratings notice was added there in 9 languages; the "How our ratings work" page is part of tomorrow's legal papers.
- **F14 not done:** removing `unsafe-inline` needs nonces, and nonces need dynamic rendering of every page (Next.js docs, content-security-policy guide). That would end static caching site-wide and repeat the June 2026 outage class. **F15 not done:** needs the `[locale]` refactor (reminder 2026-11-29).
- **Postponed to the next day (owner):** legal papers (privacy policy, Terms, ratings page, Art. 30 record, DPIA and AI Act notes, launch gate).
- Processor facts checked 2026-11-20 (secondary sources, see DISCOVERY.md addendum): Anthropic API default retention 30 days; EU-US Data Privacy Framework status of Anthropic is reported inconsistently, verify at dataprivacyframework.gov.

## 2026-11-19 (QA audit): open items needing an owner decision

- **F2 pre-consent Clarity:** Clarity loads cookieless before consent by design (`ClarityLoader.tsx`, asserted in `tests/consent.spec.ts`), site-wide. Loading it only after consent is a site-wide analytics/legal decision.
- **F4 tutor, F5 certificate:** not built (Phases 5/6); the certificate button is disabled "until Phase 6", there is no time gate.
- **F8 Terms page:** no Terms page exists; its text (incl. "16 years or older") is a legal document.
- **F14 (decided by Claude, 2026-11-19):** HSTS stays as is (`includeSubDomains`/`preload` would bind every subdomain, irreversible for a preload list). CSP `unsafe-inline`/`unsafe-eval` stay: removing them needs per-request nonces, which makes every page dynamic and loses the static/CDN caching, and `unsafe-eval` cannot be dropped safely without testing Clarity and OneSignal in a production build. Revisit together with the `[locale]` refactor.
- **F15:** root `<html lang/dir>` stays hardcoded until the `[locale]` refactor.
- **F16 nav link:** later (owner, 2026-11-19). Not done now.

## 2026-11-18 (Hans): Academy is a website tool like Ask Hans, not a separate app

> "This should be just normally on my website. This is just another tool like Ask Hans, nothing special. Same format."

Supersedes SPEC 2 #9 and #10, SPEC 4.1 and SPEC 12, plus the 2026-11-17 MCP-key decision.

**Where it lives**
- Academy lives in the website repo (`promptquorum-website`) at `/academy`, with path-prefixed locales (`/de/academy`, …) like every other page. There is no separate repo, no subdomain and no separate Vercel project.
- The local folder `~/promptquorum-academy` (Phase 1 attempt as its own app) is obsolete.

**How it is built, mirroring Ask Hans**

| Part | Location |
|---|---|
| Server page shared by 9 thin locale routes | `src/components/academy/AcademyPage.tsx`; `src/app/{,de,fr,…}/academy/page.tsx` |
| Client tool | `src/components/academy/AcademyApp.tsx` |
| UI copy per language | `src/components/academy/copy/*.ts` |
| Logic | `src/lib/academy/*` |
| Kill switch | `ACADEMY_ENABLED` (pages 404 while off), like `ASK_HANS_ENABLED` |

- The learner flow (setup → quick check → programme → lessons → tests → results) consists of **screens inside the one tool**, not URLs. SPEC 5's routes (`/diagnostic`, `/lesson/[n]`, …) become views. No learner page ever exists as a URL, so none needs noindex. `/academy` itself is a normal indexable tool page.

**Content access, cost controls and infrastructure**
- Content access is **in-process**, exactly like Ask Hans (`src/lib/mcp/tools.ts` functions, `generated-corpus/` data files). The HTTP MCP client, the separate MCP key, the shared-rate-limit problem and the `utm_source=mcp` problem from DISCOVERY.md section 3 all disappear.
- API routes will live under `src/app/api/academy/*` and reuse the existing Anthropic SDK, Upstash rate limiting, `IP_HASH_SALT` and Resend setup.

**What happens to SPEC 12 (header cap + explainer)**
- The explainer content goes onto `/academy` itself, below or around the tool.
- The header icon links to `/academy`.
- No separate explainer page and no "Start learning" hop to another domain.

## 2026-11-17 (Hans, after reading DISCOVERY.md)

1. ~~MCP access uses a separate Academy key, added later.~~ **Obsolete since 2026-11-18:** in-process access needs no key.
2. **Free-text feedback comments may be stored server-side.** SPEC 8a stands as written: max 500 characters, "no personal data" notice. This differs from Ask Hans, which accepts no free text. The privacy policy needs an Academy section before launch (SPEC 14).
3. **Unmerged-branch rule (SPEC 17) applies to Academy work only.** Hans left it to Claude: at most one open Academy branch at a time. Website branches from other, unrelated sessions do not count.

## Phase 4 choices (Claude, 2026-11-18, open to change)

**One route for both quiz kinds**
- `POST /api/academy/quiz` with `kind: lesson | final` serves the lesson quiz and the final test (SPEC 7 names `/api/final-test` separately).
- Rate limit 20 per IP hash per hour. `maxDuration` 120 s: up to two generation rounds plus two verification calls.

**Question generation and verification (SPEC 7.4)**
- **Source text:** what the learner actually read. Lesson quiz: that lesson, up to 4,000 characters. Final test: every lesson, up to 2,500 characters each.
- **Verification:** a separate call gets the source text and the questions in their shuffled order, without the key, and answers 1/2/3, or 0 if none is clearly right. Any disagreement discards the question.
- **Extras and top-up:** 30% extra questions are generated. If too many fail, one more round generates replacements (max 2 rounds).
- **Minimum size:** below it, the request fails and the learner sees a retry instead of a short quiz. Lesson quiz: 2 of 3. Final test: 80% of its size.
- **Topic balance:** the final test is spread evenly over the lesson topics (round robin, SPEC 7.5).

**Scoring (SPEC 8)**
- Pure functions in `src/lib/academy/scoring.ts`.
- **Every-lesson mode:** pools the lesson quizzes and the final test.
- **Final-only mode:** counts only the final test.
- **Pass mark:** 70%, inclusive. Topics below 70% are flagged "below the pass mark".
- **Retakes:** a retake generates new questions; every attempt is kept. The FIRST passing attempt counts (that is the certificate score).
- **Completion (SPEC 9):** all lessons done, all lesson quizzes taken (every-lesson mode), and a pass.

**Quiz flow and results screen**
- One question at a time. An answer shows "Correct." / "Not quite.", the explanation, and the reason the chosen wrong answer is wrong. The quiz in progress survives a reload.
- In every-lesson mode the lesson quiz follows "Done" right away. The programme screen offers "Continue the quiz" / a missing lesson quiz / "Start the final test" / "See results".
- The results screen shows the overall %, per-topic bars, pass/fail, learning time, the attempt number and a per-question review. If not passed: the weak topics plus a retake button. If passed: the certificate button, disabled until Phase 6.

**Acceptance (unit tests)**
- A planted question with a wrong "correct" answer is rejected by verification.
- The correct-answer position is roughly uniform over 100 generated questions.
- Scoring and pass logic are covered.
- The real-model rejection rate is printed by `npm run academy:regression`, which now also generates a verified lesson-1 quiz per subject.

## Phase 3 choices (Claude, 2026-11-18, open to change)

**Generation**
- Lessons are generated on first open (`POST /api/academy/lesson`) and stored in the learner's programme, so each lesson costs one generation per learner. Rate limit: 40 per IP hash per hour.

**Grounding (SPEC 7.2)**
- Two in-process searches: lesson title + topic, and topic + subject.
- Only real article pages count. Site pages and the bare `/directory` link are dropped.
- The top 2 articles are read with `getArticle`. Their prose (titles, paragraphs, lists, FAQs, HTML removed) is passed as at most 10,000 characters, about 3,000 tokens.
- The app tools (`search_apps` / `compare_apps` / `explain_license`) are not used yet.

**Further reading: cannot contain an invented URL**
- The model picks pages by number from the numbered list of found pages.
- Code maps numbers to the URLs from the search, drops unknown numbers and removes duplicates.
- Every link, bare URL, HTML tag and heading marker in the lesson text is stripped.
- Acceptance test: `test:academy`, "further-reading URLs are 100% from the content search".

**Length (SPEC 11)**
- Budget: 150 words per minute, at least 250 and at most 900. Recaps at most 300.
- Japanese and Chinese are counted as characters / 2.
- Over budget by more than 30%: one retry; after that the lesson is accepted, because length is a cost guard, not a correctness rule.

**Lesson screen and progress**
- The lesson screen always shows the subject, "lesson x of y", a progress bar and the lesson's objectives.
- Further reading carries a "From PromptQuorum" label. The text is rendered with the Ask Hans markdown component (React nodes only, no raw HTML).
- Active time (SPEC 6.1) counts in 5-second ticks while the tab is visible and the learner interacted within the last 60 seconds. It is capped at 3× the lesson estimate. The total time is shown on the programme screen.
- Lessons can be opened in any order from the programme screen.
- With test mode "none", all lessons done completes the programme (SPEC 9). Otherwise it waits for the tests (Phase 4).

## Phase 2 choices (Claude, 2026-11-18, open to change)

**Model and generation**
- **Model:** `claude-haiku-5-5`, the same default as Ask Hans, overridable with `ACADEMY_MODEL`.
- **Structured outputs:** generation uses `messages.parse` with `zodOutputFormat` at effort `medium`.
- **Checks and retry:** the business rules are checked in code. If a check fails, the request is repeated once with the problems appended. If the programme still breaks a rule, the second answer is clamped (SPEC 7.3); no third call is made.
- **Answer position:** the model always puts the correct answer first; code moves it with `crypto.randomInt`. The unit test checks for a uniform spread over 3,000 draws.

**Quick check**
- **Size:** 5 questions up to 30 minutes, 6 up to 90, 8 above. An "I'm not sure" option counts as wrong.
- **No pass/fail**, and no verification pass (SPEC 7.4): quick-check answers are never scored. The verification pass starts with lesson and final tests in Phase 4.
- **Subject scope:** the model decides `subjectSupported`. Allowed: AI, software, computer hardware, smart home, home energy / balcony solar and closely related technology. Anything else gets a friendly "choose a subject from these areas", with no retry button.
- **Privacy:** only the per-topic summary (estimated level, gap topics, known topics) is sent to `/api/academy/programme`, never the individual answers.

**Programme time budget**
- **Test time:** 0.75 minutes per question, capped at half the available time, so a 15-minute programme with tests still has reading time.
- **Reading time:** total time minus test time, ±20% (SPEC 7.3).
- **Grounding:** the programme prompt gets the titles and descriptions of up to 8 matching PromptQuorum pages (in-process `searchPromptquorum`, in the programme language).

**Abuse and cost controls**
- **Rate limits:** 10 quick checks and 10 programmes per IP hash per hour (Upstash, prefix `rl:academy:*`). In production it fails closed, like `/api/ask`.
- **Not yet built:** the global daily spend ceiling and bot protection (Phase 7).
- **Logging:** token usage per call goes to `console.log('[academy] generation', …)` without learner text.

**Phase 2 acceptance run (`npm run academy:regression`)**
- 20 subjects in 9 languages, including one out-of-scope subject.
- Not run yet: no API key on the development machine. It runs wherever `ANTHROPIC_API_KEY` is set.

## Implementation choices (Claude, open to change)

- **App UI in all 9 languages.** The page language picks the UI copy, as with Ask Hans. The programme language is a separate choice on the setup screen, preset to the page language.
- **Subject suggestions are built on the server at render time** (`src/lib/academy/topics.ts`), so no `/api/topics` endpoint is needed:
  - six content hubs, labelled from the Academy copy;
  - the 12 largest directory categories, labelled from the localized taxonomy.
- **Not in the sitemap and `llms.txt` yet.** `/academy` gets added to the sitemap (`src/lib/sitemap/pages/static.ts`) and `llms.txt` in the same run that switches it on for launch. Until then the page is a 404, like Ask Hans while off.
