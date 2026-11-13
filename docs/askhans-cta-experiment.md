# Ask Hans button-wording experiment (askhans-cta-v1)

Question: do "Chat with Ask Hans" (A, brand-led), "Start an AI conversation" (B, function-led) or "Get your personal AI recommendation" (C, benefit-led) make more visitors start and continue a conversation? Only the wording and its subtitle differ. Ask Hans itself (models, prompts, sources, API, MCP, window design) is untouched.

## Where the wording appears (and where it does not)
| Entry point | Component | What changes | Subtitle |
|---|---|---|---|
| Header pill, every page | `search/SearchTrigger.tsx` | label (desktop), tooltip + accessible name (desktop + phone icon) | tooltip / accessible name |
| Floating "Ask Hans" pill (after a chat was closed) | `askhans/AskHansLogo.tsx` | label | tooltip / accessible name |
| About page ecosystem card | `AboutAskHansButton.tsx` | label | visible line under the button |
| /askhans (all 9 locales) | `tools/AskHansOpenButton.tsx` | label | visible line under the button |

Untouched on purpose: the promo slots (`PromoSlot`, their own pilot copy and events), the Ask Hans window, Power Mode, ⌘K. The header pill opens the existing search box first; the assistant opens when the question is sent. On phones the header shows an icon only, so the wording is visible there only on the floating pill, About and /askhans.

Copy: `src/components/askhans/copy/*.ts` → `ctaVariants` (9 locales, the existing Ask Hans copy files). English is exactly as specified; the other eight were written natively, following `docs/geo-translation.md` (Sie / vous / tú / você / です・ます / 합쇼체 registers; brand name "Ask Hans" stays Latin). geo-translation: APPLIED.

## Assignment
`src/lib/askhans/experiment/variant.ts`. Uniform random A/B/C (`crypto.getRandomValues`, rejection sampling), stored in `sessionStorage` key `askhans.cta.v1` with the experiment id: stable on every page and across client-side navigation of a visit. A new browser session draws again (no persistent storage before consent, TDDDG §25), so a returning visitor is re-randomised. Storage blocked: assignment lives in memory for the page's lifetime. Automated browsers (`navigator.webdriver`, bot user agents) and visitors sending Do-Not-Track / Global Privacy Control still see a wording but are never counted. Before the variant is known (server render) the original "Ask Hans" text stays in the DOM, invisible, inside a box reserved for the longest variant, so nothing shifts.

## Events (`src/lib/askhans/experiment/track.ts` → `/api/ask/exp`, mirrored to Umami under the same name)
Every event carries: experiment id, variant, language, device (mobile/desktop), page category.
| Event | Fires when | Consent |
|---|---|---|
| `ask_hans_button_impression` | the button has been ≥50% visible for ≥1 s, once per button per page view (client navigation = new page view). Rendered-but-unseen buttons do not count; the hidden twin of the header pill (mobile/desktop) never intersects. | none (anonymous counter, like Umami) |
| `ask_hans_button_click` | click on an experiment button. Carries `via` (header / floating / about / page). | none |
| `ask_hans_opened` | the window really opens (closed → open). `via` = the experiment button that asked for it, else `other` (⌘K, promo slots). | none |
| `ask_hans_first_question` / `_second_question` / `_three_questions` | a question received a non-empty answer (empty or failed requests never count), 1st / 2nd / 3rd successful question of a conversation. Each fires once per conversation. | "Yes" |
| `ask_hans_conversation_completed` | first click from an answer through to a site page (the existing click-through success measure), once per session. Closing the window does not count. | "Yes" |
| `ask_hans_return_visit` | the visitor said Yes and `touchUsage()` reports a returning visit; once per session. | "Yes" |
| `ask_hans_power_mode_used` | the Power Mode screen is entered; once per session. Existing per-report Power Mode totals are untouched. | "Yes" |
| `ask_hans_session_end` | window closed / page left after ≥1 answer: sums of conversations, questions, active seconds (for averages). | "Yes" |
| `ask_hans_consent_choice` | the consent step was answered (`yes`/`no`). Lets the dashboard check that the consent share is equal across variants. | none |

No double counting: all counters live under `askhans:exp:<id>`, separate from the existing `askhans:*` keys (`/api/ask/event` is unchanged). The one existing Umami event with a clashing name (`ask_hans_button_click` from the floating pill) is suppressed while the experiment is on, because the experiment sends the same name with more properties (including `source_page`).

Privacy: no IP, no text, no visitor ID in the experiment keys. `sid` (random, per session) is only added to a Redis HyperLogLog (PFADD) to estimate unique sessions; HyperLogLog cannot be read back as a list. Server whitelists every field. Add one sentence to the privacy policy before launch (see "Before launch").

## KPIs
Primary: first-question sessions / exposed sessions (unique sessions, both HyperLogLog estimates ≈1% error). Secondary: CTR, opening rate (via button / clicks), second/first, three/first, average questions per conversation, average active seconds per Ask Hans visit, return visits, Power Mode use, impressions per exposed session, conversations per 1,000 exposed sessions and per 1,000 impressions. Total question volume is not used as a success metric.

## Dashboard
`/askhans/experiment?key=<ASK_HANS_EXPERIMENT_KEY>` (noindex; 404 without the key). Table by variant, Bayesian comparison (beta-binomial, uniform prior, 20,000 draws, fixed seed = reproducible), relative and absolute difference, credible intervals, P(best), language / device / page-category breakdowns (rows under 500 impressions per variant greyed out), start date, days elapsed, limitations. A leader is named only when ALL hold: ≥14 days, ≥3,000 exposed sessions and ≥30 first-question sessions per variant, P(best) ≥ 95%, median lift ≥ 10% over the runner-up, 95% interval of the lift excludes zero. Otherwise "no winner". Run for 14 days minimum, 21 preferred.

## Switching on / off / rolling out
- Start: set `NEXT_PUBLIC_ASK_HANS_CTA_EXPERIMENT=true` (+ `ASK_HANS_EXPERIMENT_KEY`) in Vercel and redeploy (`scripts/deploy.sh` when the owner says ship). Both are build-time/runtime env, no code change.
- Stop: set it to `false`. Everybody sees the original "Ask Hans" wording again; assignment and events stop; the server route returns 404; data stays in Redis for 120 days.
- Roll out a winner: stop the experiment, set `NEXT_PUBLIC_ASK_HANS_CTA_WINNER=A|B|C`, redeploy. That wording is shown to everyone, no assignment, no tracking. To make it permanent, set the winner's strings as the default in the components and drop the env switch.
- A visitor returning after the experiment ended gets the rollout policy above (winner if set, otherwise the original wording). Nothing from the old assignment is used.

## Limits
- "Visitor" = browser session; no cross-session or cross-device linking; return visits are attributed to the return session's variant.
- First question and later steps exist only for visitors who said Yes (existing rule); absolute rates are understated by the consent share; variants are comparable if that share is equal (dashboard shows it).
- Impressions/clicks/openings are counted without consent; users blocking `/api/ask/exp` or sending DNT/GPC are missing.
- The header pill adds the search box between click and open; phones see the wording only on floating pill, About, /askhans.
- No unchanged-wording control arm (the three variants replace "Ask Hans").
- Subgroup rows are event counts, not unique sessions.

## Before launch
1. Owner review of the privacy wording: one sentence in the privacy policy stating that anonymous aggregate counters for button wording (variant, language, device, page category; no ID) are collected without consent, like the existing Umami events. (Not edited here: legal text is owner-reviewed.)
2. Set the env vars above in Vercel.
3. Test: `npm run test:askhans-experiment`.
