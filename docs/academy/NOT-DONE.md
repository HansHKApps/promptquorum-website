# Academy: what is not done yet (2026-11-20)

Written at the end of the "build everything" run. Branch `session/academy-feedback-mail`: committed, **not merged, not deployed**. Everything below is honest about what was and was not checked. Items marked **never run** are code that was typechecked and unit-tested but never exercised against the real Anthropic API, real Redis or a real phone.

## 1. Postponed to tomorrow (your decision)

- Privacy policy: update the Academy section for the tutor, the optional registry (what is stored, deletion by email), anonymous rating counters, the free-language choice; Anthropic retention and DPF wording (see DISCOVERY.md addendum).
- Terms of Use: rename "learning certificate" to "Certificate of Completion", add registry, tutor and the age rule; still your legal call (F8). The forbidden-words check does not cover the Terms page yet.
- "How our ratings work" page and the public display of Academy ratings with the short notice (`/api/academy/ratings-summary` exists, nothing shows it). The notice is already on the Ask Hans statistics block, without a link to the page.
- Art. 30 record of processing, DPIA screening note, AI Act screening note, launch-gate checklist (SPEC 17.12) and the dated "residual risk accepted" line.

## 2. Not done, with the reason

- **F14 (remove `unsafe-inline` from the CSP):** needs nonces, which need dynamic rendering of every page; that would end static caching site-wide (the June 2026 outage class). Not attempted.
- **F15 (`<html lang>` on the server):** needs the `[locale]` refactor, due 2026-11-29 (memory reminder). Not attempted.
- **Bot protection (Turnstile or BotID):** not built. In place instead: same-origin check, per-route hourly limits, per-visitor daily cap (150), whole-site daily ceiling (4000), Redis limiter fails closed in production. Tune with `ACADEMY_DAILY_PER_IP` / `ACADEMY_DAILY_GLOBAL`.
- **Certificate / Course Documentation in "Other" languages:** only the 9 site languages (choice before creation). A Farsi programme gets its documentation text from the AI in Farsi where the lesson text is, but headings and labels come from one of the 9.
- **Fonts for rare scripts:** both PDFs are drawn by the browser with system fonts. Latin, Cyrillic, Arabic, CJK work on common systems; scripts without an installed font (e.g. Amharic, Khmer) are **unverified**.
- **Per-question answer time** is not recorded, so the Course Documentation lacks it (SPEC 12.3 item 5).
- **Registry subject check** is syntactic only (length, no links or markup); no model check.
- **The documentation fingerprint** matches only the exact PDF created at registration; the same documentation created again (other browser, later) has other bytes. The verification page says so.
- **Further-reading links for non-site languages** point to the English article without an "in English" label.
- **EU AI Act labels:** visible "AI-generated" badges exist; the machine-readable marking and the Commission's icon scheme ([Verify] in the spec) are not done.
- **Terms/legal text in 8 languages for the new notices** (registry, verification page) are machine-drafted: `copy/extra.ts`. Native review recommended (de first).

## 3. Never run for real (please try in the tool)

- Language check route (`/api/academy/language`) with a real language, a made-up one and an injection attempt.
- Tutor streaming in all six triggers, quiz lock, caps (30 per programme, 8 per lesson, rephrase half), thumbs.
- Quick check with 3 and 6 questions; lesson follow-up chips (new `followUpQuestions` field in the lesson schema).
- Registration against real Redis: number, repeat call returns the same number, second call stores the hash, `/academy/verify/<ID>`, hash check with the real PDF, deletion (`npm run academy:delete-certificate -- <ID>`).
- QR code scan from a screen and from a printed A4 (print test), certificate in all 9 languages, Course Documentation page breaks with long lessons and RTL.
- Layout of the new panels on a phone; star keyboard use and screen-reader pass.
- `npm run academy:stats` against production Redis.

## 4. Decisions still open

- Course Documentation appendix with the full lesson text: built as the spec default; you said you want to talk about it later if it means more than the certificate PDF.
- Tutor message caps and rate limits are assumptions; measure cost per programme first.
- Final-test and lesson-quiz sizes stay as built (6/10/15 and 3).

## 5. Ship steps (nothing was merged or deployed)

1. `scripts/session.sh finish academy-feedback-mail` merges to main (do this when you are ready; it pushes).
2. Optional Vercel env vars: `ACADEMY_DAILY_PER_IP`, `ACADEMY_DAILY_GLOBAL`, `ACADEMY_TUTOR_MODEL`, `NEXT_PUBLIC_ACADEMY_ENABLED=false` hides the new header link.
3. Deploy on demand (`scripts/deploy.sh`).
