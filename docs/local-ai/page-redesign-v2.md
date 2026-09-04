# Directory page — audit of the live build (4 Sept 2026) and v2 layout spec

Live page inspected in Chrome at 1568×522 and via page text. Claude Code has already shipped the data layer and an embedded directory widget inside the article. What is wrong with it, and the fix, in one column top-down.

## 1. Audit of the live page (facts unless marked)

| # | Observed | Why it reads as a mess | Fix in v2 |
|---|---|---|---|
| 1 | Page order: hero → TL;DR → intro → dark Quick-answer box → slide-deck carousel (1/14) → Contents → Key takeaways → 10-layer SVG → **directory** → About this data → stacks → How current → Sources → FAQ → Related | The product (directory) starts ~5 screens down; four different "summary" blocks compete above it | Directory is the page. Order: header → "I want to…" → filter bar → cards → Quick answer → stacks → layers → how current → FAQ → disclaimer |
| 2 | Filter sidebar hangs left of the ~750 px article column; cards 3-up inside that column | Widget was dropped into the article template instead of getting its own full-width container | Full-width container (1280 px). Filters are a collapsible **top bar**, not a rail |
| 3 | All 129 cards rendered at once, no paging | ~28,000 px of scrolling (assumption from ~215 px/card) | 24 cards, then "Show 24 more · N remaining" |
| 4 | Two card formats: first block without stars, second block with stars — looks like two lists glued together | Sort by stars falls through to insertion order for entries with `stars = 0` | One card format; stars shown as "—" for closed source; sort ties broken by name |
| 5 | Card shows only LISTED / "Not yet researched" / licence — no locality badge, no works-with, no hardware, no platforms, no link | The interesting fields are not rendered even where present | Card = name + locality badge · layer · tagline · engine · works-with · hardware meters · platforms · status · Get it ↗ |
| 6 | Header says 160+, widget says 129 tools; filter counts (Fully local 12 / Hybrid 9 / Linux 21 / Free 21) cover only 21 records | ~108 records have empty `dataLocality`, `platforms`, `pricing` — filters silently exclude them | Data gap, not layout: fill the four core fields for every record before anything else. Show "not yet recorded" on cards, never drop entries from filters silently |
| 7 | "DALL-E 3 Local … Licence: TODO"; "Ollama vision models — Various" | Placeholder text on a public page | Validator: no `TODO`/`Various` values; entry stays hidden until fields pass |
| 8 | Contents TOC lists "1. Runtimes… 8. Mobile" sections that no longer exist as sections | Broken anchors (assumption — not clicked) | Remove TOC; the Layer filter replaces it |
| 9 | Slide-deck carousel above the directory | 14 pages of paging UI before the content | Move to a single "Download PDF reference card" link under the FAQ |
| 10 | Viewport 1568×522 (wide, short): sidebar + 3 cards + article column — nothing lines up | No breakpoints designed for the widget | Breakpoints below |

## 2. One format, top-down

```
┌ header: eyebrow · H1 · one-line sub · meta (updated / cadence / author) · stat strip (apps · local · hybrid · cloud)
├ "I want to…" chips (horizontal scroll on mobile)
├ sticky filter bar: [Filters ▾] [search] [my machine] [sort] [cards|table] [n of N]
│   └ panel (collapsed by default): Runs · How it runs models · Works with · Platform · Layer · Price
│   └ active-filter chips with ×
├ card grid  4 / 3 / 2 / 1 columns
├ Show more
├ article column (760 px): Quick answer · Real-world stacks · How the layers fit · How current · FAQ (accordion) · PDF + sources
└ data disclaimer
```

Breakpoints: ≥1180 px four columns; 860–1179 three; 560–859 two; <560 one, stat strip becomes a 4-cell row, toolbar wraps (search full width), chips scroll horizontally, detail panel full width.

The old SVG diagrams, Key takeaways and TL;DR are folded into "Quick answer" and "How the layers fit" — one summary, not four.

## 3. Card (identical for every entry)

Name + locality badge · layer · tagline (2 lines, clamp) · engine line · works-with tags (or dashed "not yet recorded") · RAM/VRAM meters (or unified on Apple) · platforms · status badge · ★ stars · 📄 articles · [Get it ↗] [Details]. Fixed structure — equal heights — no ragged grid.

## 4. What Claude Code changes (in order)

1. Fill `dataLocality`, `platforms`, `pricing`, `engine` for all records (script + review); validator rejects `TODO`/`Various`/empty on these four.
2. Move the widget out of the article body into a full-width section above the article content; article sections reordered as in §2; delete TOC, carousel above the fold, duplicate summary boxes.
3. Replace the sidebar with the filter bar + panel; add paging; unify the card.
4. Breakpoints as in §2; test at 390, 768, 1024, 1280, 1568×522.

Prototype v2 (artifact + `local-ai-app-directory-prototype.html`) implements §2–§3 exactly and is the reference.
