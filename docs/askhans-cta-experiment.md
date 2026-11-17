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
`src/lib/askhans/experiment/variant.ts`. Uniform random A/B/C (`crypto.getRandomValues`, rejection sampling), held in memory only (a module variable): nothing is written to cookies, localStorage, sessionStorage or IndexedDB. Stable across client-side navigation; every full page load draws again, so no visitor or session can be linked. Automated browsers (`navigator.webdriver`, bot user agents) and visitors sending Do-Not-Track / Global Privacy Control still see a wording but are never counted. Before the variant is known (server render) the original "Ask Hans" text stays in the DOM, invisible, inside a box reserved for the longest variant, so nothing shifts.

## Events (`src/lib/askhans/experiment/track.ts` → `/api/ask/exp`, mirrored to Umami under the same name)
Every event carries: experiment id, variant, language, device (mobile/desktop), page category.
| Event | Fires when | Consent |
|---|---|---|
| ~~`ask_hans_button_impression`~~ | **Removed 2026-11-14** (Umami event quota) and dropped from the event whitelist. Exposure now comes from page loads (see KPIs). The historical counter stays in Redis for 120 days but is not read. Not to be restored, also not as a Redis-only counter. | n/a |
| `ask_hans_button_click` | click on an experiment button. Carries `via` (header / floating / about / page). | none |
| `ask_hans_opened` | the window really opens (closed → open). `via` = the experiment button that asked for it, else `other` (⌘K, promo slots). | none |
| `ask_hans_first_question` / `_second_question` / `_three_questions` | a question received a non-empty answer (empty or failed requests never count), 1st / 2nd / 3rd successful question of a conversation. Each fires once per conversation. | "Yes" |
| `ask_hans_conversation_completed` | first click from an answer through to a site page (the existing click-through success measure), once per page load. Closing the window does not count. | "Yes" |
| `ask_hans_return_visit` | the visitor said Yes and `touchUsage()` reports a returning visit; once per page load. | "Yes" |
| `ask_hans_power_mode_used` | the Power Mode screen is entered; once per page load. Existing per-report Power Mode totals are untouched. | "Yes" |
| `ask_hans_session_end` | window closed / page left after ≥1 answer: sums of conversations, questions, active seconds (for averages). | "Yes" |
| `ask_hans_consent_choice` | the consent step was answered (`yes`/`no`). Lets the dashboard check that the consent share is equal across variants. | none |

No double counting: all counters live under `askhans:exp:<id>`, separate from the existing `askhans:*` keys (`/api/ask/event` is unchanged). The one existing Umami event with a clashing name (`ask_hans_button_click` from the floating pill) is suppressed while the experiment is on, because the experiment sends the same name with more properties (including `source_page`).

Privacy: no IP, no text, no visitor or session ID anywhere (client or server). Only aggregated counters per variant, language, device type and page category; the IP is only hashed with a salt as a short-lived rate-limit key. Nothing is written to browser storage (pre-check for the privacy paragraph, 2026-11-13). Server whitelists every field. The privacy policy paragraph (9 locales) is a separate branch and must ship with this one.

## KPIs
**Exposure** (replaces impressions): tracked page loads on pages with the button / 3. The button is in the header of every page, and assignment is uniform (`variant.ts`, rejection sampling), so each variant gets one third of the page loads. The page-load total is Umami pageviews from the experiment start date (shown on the dashboard) to today. It is **typed into the dashboard URL** (`&pageviews=N`), because there is no Umami API key; without it no leader is named.

**Primary comparison:** `ask_hans_button_click` per variant, as click-through = clicks / exposure (Bayesian, same method as before). **Then, per click:** `ask_hans_opened` via a button / clicks, `ask_hans_first_question` / clicks, `ask_hans_conversation_completed` / clicks. Secondary: second/first, three/first, average questions per conversation, average active seconds, return visits, Power Mode use, consent share. Total question volume is not a success metric.

Exposure limits: Umami pageviews may include visitors the experiment never tracks (Do-Not-Track / Global Privacy Control, if Umami counts them), so exposure is slightly overstated for all three variants alike: comparisons hold, absolute click-through is understated. Reloads count as new page loads (a reload re-draws the variant).

## Dashboard
`/askhans/experiment?key=<ASK_HANS_EXPERIMENT_KEY>` (noindex; 404 without the key). Table by variant, Bayesian comparison of click-through (beta-binomial, uniform prior, 20,000 draws, fixed seed = reproducible), relative and absolute difference, credible intervals, P(best), language / device / page-category breakdowns (clicks → first questions; rows with fewer than 20 clicks in any variant greyed out; page loads per subgroup do not exist), start date, days elapsed, limitations. URL: `/askhans/experiment?key=<ASK_HANS_EXPERIMENT_KEY>&pageviews=<N>`. A leader is named only when ALL hold: ≥14 days, `CTA_MIN_EXPOSED_PER_VARIANT` = 3,000 exposures (page loads / 3) and `CTA_MIN_CLICKS_PER_VARIANT` = 100 button clicks per variant, P(best) ≥ 95%, median lift ≥ 10% over the runner-up, 95% interval of the lift excludes zero. Otherwise "no winner". At about 25 clicks a day (about 8 per variant), 100 clicks per variant takes roughly 12 days, so 14 days minimum is the binding guard, 21 preferred. The old guard of 30 first questions per variant is gone: first questions are a per-click secondary metric now.

## Switching on / off / rolling out
- Start: set `NEXT_PUBLIC_ASK_HANS_CTA_EXPERIMENT=true` (+ `ASK_HANS_EXPERIMENT_KEY`) in Vercel and redeploy (`scripts/deploy.sh` when the owner says ship). Both are build-time/runtime env, no code change.
- Stop: set it to `false`. Everybody sees the original "Ask Hans" wording again; assignment and events stop; the server route returns 404; data stays in Redis for 120 days.
- Roll out a winner: stop the experiment, set `NEXT_PUBLIC_ASK_HANS_CTA_WINNER=A|B|C`, redeploy. That wording is shown to everyone, no assignment, no tracking. To make it permanent, set the winner's strings as the default in the components and drop the env switch.
- A visitor returning after the experiment ended gets the rollout policy above (winner if set, otherwise the original wording). Nothing from the old assignment is used.

## Limits
- "Visitor" = browser session; no cross-session or cross-device linking; return visits are attributed to the return session's variant.
- First question and later steps exist only for visitors who said Yes (existing rule); absolute rates are understated by the consent share; variants are comparable if that share is equal (dashboard shows it).
- Clicks/openings are counted without consent; users blocking `/api/ask/exp` or sending DNT/GPC are missing from them. Exposure (Umami page loads / 3) is a different source from the click counters, so the click-through rate mixes two sources; see the KPI limits.
- The header pill adds the search box between click and open; phones see the wording only on floating pill, About, /askhans.
- No unchanged-wording control arm (the three variants replace "Ask Hans").
- Nothing is linked across page loads (no visitor or session ID): a reload re-draws the variant.

## Before launch
1. Owner review of the privacy wording (paragraph on branch session/askhans-privacy-paragraph, 9 locales): anonymous aggregate counters for button wording (variant, language, device, page category; no ID) are collected without consent, like the existing Umami events. (Not edited here: legal text is owner-reviewed.)
2. Set the env vars above in Vercel.
3. Test: `npm run test:askhans-experiment`.

## Cost of bringing impressions back (for the record, NOT implemented)
Owner decision 2026-11-16: no impression event in Umami (quota) and no Redis-only impressions. For the record, one Redis-only impression through `/api/ask/exp` costs about 8 commands: 1 rate-limit call, `hsetnx`, 4 `hincrby` (total, language, device, category), 1 more `hincrby` when `via` is set, and `expire`. At a 5% sample (random draw per page load, kept in memory, results multiplied by 20) that is about 0.4 commands per page load: for example 1,000 exposures a day cost about 400 commands a day, 5,000 a day about 2,000 a day.
