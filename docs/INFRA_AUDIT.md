# INFRA_AUDIT.md — PromptQuorum Infrastructure Audit Checklist
# Companion to REAUDIT.md (content audit) and GEO_WRITING_GUIDELINES.md
# Version 1.0 — May 2026
#
# PURPOSE: Catch infrastructure-level issues that content audits miss.
# RUN: Weekly, before every deploy, and after any next-sitemap or i18n change.
#
# HISTORY OF WHY THIS EXISTS:
# 1. GEO_WRITING_GUIDELINES.md grew to 90,000+ lines — no file size guard
# 2. hreflang/i18n setup had bare ?lang= params submitted as separate URLs
# 3. Sitemap included /_next/static/css/, /api/og/ routes, .js build artifacts
# All three were infrastructure failures invisible to content-level audits.

---

## HOW TO USE

- Run ALL sections below as a checklist
- Any single FAIL = block deploy until fixed
- Log results in INFRA_AUDIT_LOG.md with date and pass/fail per section
- Automate what you can as pre-deploy hooks or CI steps

---

## 1. SITEMAP HYGIENE

Run: `curl -s https://www.promptquorum.com/sitemap.xml | grep -oP '(?<=<loc>).*?(?=</loc>)'`

| # | Check | Pass condition | How to verify |
|---|---|---|---|
| 1.1 | No build artifacts | Zero `/_next/*` URLs | `grep '_next/' sitemap.xml` returns nothing |
| 1.2 | No API routes | Zero `/api/*` URLs | `grep '/api/' sitemap.xml` returns nothing |
| 1.3 | No static files | Zero `.css`, `.js`, `.json` file URLs | `grep -E '\.(css|js|json)' sitemap.xml` returns nothing |
| 1.4 | No bare lang params | Zero `?lang=` URLs as standalone entries | `grep '?lang=' sitemap.xml` returns nothing |
| 1.5 | URL count matches | Total URLs ≈ expected page count (±5%) | Count `<loc>` tags, compare to known page inventory |
| 1.6 | All URLs return 200 | No 404s, no 301s, no 5xx | Script: loop all URLs, check HTTP status |
| 1.7 | No Coming Soon pages | Zero placeholder pages in sitemap | Cross-reference with known Coming Soon list |
| 1.8 | lastmod present | Every `<url>` has `<lastmod>` | `grep -c '<lastmod>' sitemap.xml` = URL count |
| 1.9 | No duplicate URLs | Zero exact duplicates | `sort sitemap_urls.txt | uniq -d` returns nothing |

### next-sitemap.config.js required exclusions

```js
exclude: [
  '/_next/*',
  '/api/*',
  '/*?lang=*',
],
```

FAIL condition: Any of 1.1–1.9 fails → do not deploy. Fix config, rebuild, recheck.

---

## 2. ROBOTS.TXT

Run: `curl -s https://www.promptquorum.com/robots.txt`

| # | Check | Pass condition |
|---|---|---|
| 2.1 | Disallow /_next/ | `Disallow: /_next/` present for `User-agent: *` |
| 2.2 | Disallow /api/ | `Disallow: /api/` present for `User-agent: *` |
| 2.3 | AI bots allowed | No `Disallow` for GPTBot, Google-Extended, ClaudeBot, PerplexityBot, Bytespider |
| 2.4 | Sitemap declared | `Sitemap: https://www.promptquorum.com/sitemap.xml` present |
| 2.5 | No blanket disallow | No `Disallow: /` for any user-agent |
| 2.6 | HTTPS URL | Sitemap URL uses https, not http |

FAIL condition: 2.1 or 2.2 missing → /_next/ and /api/ are crawlable. Fix immediately.

---

## 3. INTERNATIONALIZATION / HREFLANG

| # | Check | Pass condition | How to verify |
|---|---|---|---|
| 3.1 | All 6 hreflang tags | Every EN page has: en, de, fr, ja, zh, x-default | View source → count `hreflang` tags |
| 3.2 | Absolute URLs | All hreflang hrefs start with `https://www.promptquorum.com/` | No relative paths like `/prompt-engineering/...` |
| 3.3 | Self-referencing | Each language variant's hreflang includes itself | DE page has `hreflang="de"` pointing to itself |
| 3.4 | x-default = EN | `x-default` points to the English version | View source on any page |
| 3.5 | Body matches lang | `?lang=de` page has German body text, not English | Spot-check 3 random pages per language |
| 3.6 | No orphan lang URLs | No `?lang=` URL exists without corresponding hreflang on the EN page | Cross-check sitemap vs hreflang tags |
| 3.7 | Canonical correct | `?lang=de` canonical points to itself, not EN version | View source → `<link rel="canonical">` |
| 3.8 | Language switcher | Shows correct flag for current variant | Visual check on live site |

FAIL condition: 3.1 or 3.2 fails → Google treats language variants as duplicates. High priority fix.

---

## 4. INSTRUCTION FILE SIZE GUARD

| # | Check | Pass condition | How to verify |
|---|---|---|---|
| 4.1 | GEO_WRITING_GUIDELINES.md | Under 5,000 lines | `wc -l GEO_WRITING_GUIDELINES.md` |
| 4.2 | REAUDIT.md | Under 2,000 lines | `wc -l REAUDIT.md` |
| 4.3 | INFRA_AUDIT.md (this file) | Under 1,000 lines | `wc -l INFRA_AUDIT.md` |
| 4.4 | PRE_RULES.md | Under 2,000 lines | `wc -l PRE_RULES.md` |
| 4.5 | POST_CHECKS.md | Under 2,000 lines | `wc -l POST_CHECKS.md` |
| 4.6 | Any .md in repo | No single .md exceeds 10,000 lines | `find . -name '*.md' -exec wc -l {} + | sort -rn | head` |
| 4.7 | No duplicate content | Instruction files do not repeat same rules | Manual review quarterly |

FAIL condition: Any file exceeds its limit → split or prune before next Claude Code session.
Claude Code performs worse with instruction files over 5,000 lines — context window saturation.

### Pre-deploy hook (add to package.json scripts):

```bash
#!/bin/bash
MAX_LINES=10000
OVER=$(find . -name '*.md' -not -path './node_modules/*' | xargs wc -l | awk -v max=$MAX_LINES '$1 > max {print $0}')
if [ -n "$OVER" ]; then
  echo "FAIL: .md files over $MAX_LINES lines:"
  echo "$OVER"
  exit 1
fi
```

---

## 5. SCHEMA VALIDATION

| # | Check | Pass condition | How to verify |
|---|---|---|---|
| 5.1 | SoftwareApplication | Present on homepage | View source → `"@type": "SoftwareApplication"` |
| 5.2 | Organization | Present on homepage | View source → `"@type": "Organization"` |
| 5.3 | WebSite | Present on homepage | View source → `"@type": "WebSite"` |
| 5.4 | FAQPage on articles | Every article page has FAQPage schema | Spot-check 5 random articles |
| 5.5 | Article/TechArticle | Every blog/PE/LLM page has Article schema | Spot-check 5 random pages |
| 5.6 | BreadcrumbList | Present on all non-homepage pages | View source → `"@type": "BreadcrumbList"` |
| 5.7 | Rich Results Test | Zero errors on homepage + 3 random articles | https://search.google.com/test/rich-results |
| 5.8 | FAQ count ≥ 8 | FAQPage mainEntity has 8+ questions | Count entries in JSON-LD |
| 5.9 | No schema warnings in GSC | Search Console → Enhancements → zero warnings | Check GSC weekly |

FAIL condition: 5.1–5.3 missing → core product schema gone. Emergency fix.

---

## 6. BUILD & DEPLOY HEALTH

| # | Check | Pass condition | How to verify |
|---|---|---|---|
| 6.1 | npm run build | 0 errors, 0 warnings | Terminal output |
| 6.2 | SSR working | Homepage renders full HTML server-side | `curl -s https://www.promptquorum.com | grep '<h1>'` returns content |
| 6.3 | No client-only rendering | Article body text visible in curl output | `curl -s [article-url] | grep 'article-intro'` |
| 6.4 | Cookie consent | Banner appears on first visit, localStorage-based | Manual check in incognito |
| 6.5 | GA4 firing | Google Analytics events visible in Realtime | Check GA4 dashboard |
| 6.6 | Footer email | Shows `hello@promptquorum.com` | Never `promptquorum@gmail.com` |
| 6.7 | Social links | X, Bluesky, Discord, LinkedIn all link correctly | Click each one |
| 6.8 | HTTPS enforced | HTTP redirects to HTTPS | `curl -I http://www.promptquorum.com` → 301 to https |
| 6.9 | www canonical | Non-www redirects to www (or vice versa — pick one) | `curl -I https://promptquorum.com` → 301 |

FAIL condition: 6.1 fails → never deploy. 6.2–6.3 fail → SSR broken, Google sees blank pages.

---

## 7. CRAWL BUDGET & INDEXING

| # | Check | Pass condition | How to verify |
|---|---|---|---|
| 7.1 | GSC coverage | Indexed page count growing week-over-week | Search Console → Pages |
| 7.2 | No "Crawled - not indexed" spike | Count stable or declining | Search Console → Pages → Not indexed |
| 7.3 | No "Duplicate without canonical" | Zero pages in this bucket | Search Console → Pages |
| 7.4 | No soft 404s | Zero soft 404s reported | Search Console → Pages |
| 7.5 | Crawl stats healthy | Avg response time < 500ms | Search Console → Settings → Crawl stats |
| 7.6 | IndexNow pinging | Bing Webmaster shows recent pings | Bing Webmaster Tools |
| 7.7 | Coming Soon pages | All noindexed OR removed from sitemap | Cross-check page list |

FAIL condition: 7.3 > 0 → canonicals broken somewhere. Investigate immediately.

---

## 8. SECURITY & COMPLIANCE

| # | Check | Pass condition | How to verify |
|---|---|---|---|
| 8.1 | Privacy Policy live | /privacy-policy returns 200 | curl check |
| 8.2 | Impressum live | /impressum or /legal returns 200 (German law) | curl check |
| 8.3 | Cookie consent GDPR | No cookies set before consent | Check in incognito with DevTools |
| 8.4 | No exposed API keys | No keys in client-side JS bundles | `grep -r 'sk-' .next/static/` returns nothing |
| 8.5 | CSP headers | Content-Security-Policy header present | `curl -I` check |
| 8.6 | HSTS header | Strict-Transport-Security present | `curl -I` check |

FAIL condition: 8.1 or 8.2 missing → legal exposure under German law. Fix same day.

---

## AUTOMATION SCRIPT

Save as `scripts/infra-audit.sh` in the website repo.
Run manually or as CI pre-deploy step.

```bash
#!/bin/bash
set -e
echo "=== INFRA AUDIT — $(date) ==="
FAIL=0

# 1. Sitemap checks
echo "--- SITEMAP ---"
SITEMAP=$(curl -s https://www.promptquorum.com/sitemap.xml)
URLS=$(echo "$SITEMAP" | grep -oP '(?<=<loc>).*?(?=</loc>)')

NEXT_URLS=$(echo "$URLS" | grep '_next/' | wc -l)
API_URLS=$(echo "$URLS" | grep '/api/' | wc -l)
STATIC_URLS=$(echo "$URLS" | grep -E '\.(css|js|json)$' | wc -l)
LANG_URLS=$(echo "$URLS" | grep '?lang=' | wc -l)
TOTAL=$(echo "$URLS" | wc -l)
DUPES=$(echo "$URLS" | sort | uniq -d | wc -l)

[ "$NEXT_URLS" -gt 0 ] && echo "FAIL: $NEXT_URLS /_next/ URLs in sitemap" && FAIL=1
[ "$API_URLS" -gt 0 ] && echo "FAIL: $API_URLS /api/ URLs in sitemap" && FAIL=1
[ "$STATIC_URLS" -gt 0 ] && echo "FAIL: $STATIC_URLS static file URLs in sitemap" && FAIL=1
[ "$LANG_URLS" -gt 0 ] && echo "FAIL: $LANG_URLS bare ?lang= URLs in sitemap" && FAIL=1
[ "$DUPES" -gt 0 ] && echo "FAIL: $DUPES duplicate URLs in sitemap" && FAIL=1
echo "Total sitemap URLs: $TOTAL"

# 2. robots.txt checks
echo "--- ROBOTS.TXT ---"
ROBOTS=$(curl -s https://www.promptquorum.com/robots.txt)
echo "$ROBOTS" | grep -q 'Disallow: /_next/' || { echo "FAIL: /_next/ not disallowed"; FAIL=1; }
echo "$ROBOTS" | grep -q 'Disallow: /api/' || { echo "FAIL: /api/ not disallowed"; FAIL=1; }
echo "$ROBOTS" | grep -q 'Sitemap:' || { echo "FAIL: no Sitemap directive"; FAIL=1; }

# 3. Instruction file sizes
echo "--- FILE SIZES ---"
for f in GEO_WRITING_GUIDELINES.md REAUDIT.md INFRA_AUDIT.md PRE_RULES.md POST_CHECKS.md; do
  if [ -f "$f" ]; then
    LINES=$(wc -l < "$f")
    [ "$LINES" -gt 10000 ] && echo "FAIL: $f has $LINES lines (max 10000)" && FAIL=1
    echo "$f: $LINES lines"
  fi
done

# 4. Build check
echo "--- BUILD ---"
npm run build 2>&1 | tail -5
[ $? -ne 0 ] && echo "FAIL: npm run build failed" && FAIL=1

# 5. SSR check
echo "--- SSR ---"
HOMEPAGE=$(curl -s https://www.promptquorum.com)
echo "$HOMEPAGE" | grep -q '<h1' || { echo "FAIL: no <h1> in SSR output"; FAIL=1; }

# 6. Footer email
echo "$HOMEPAGE" | grep -q 'hello@promptquorum.com' || { echo "FAIL: footer email wrong"; FAIL=1; }
echo "$HOMEPAGE" | grep -q 'promptquorum@gmail.com' && { echo "FAIL: old gmail still in footer"; FAIL=1; }

# Result
echo "==========================="
if [ "$FAIL" -eq 0 ]; then
  echo "ALL CHECKS PASSED"
else
  echo "AUDIT FAILED — fix before deploy"
  exit 1
fi
```

---

## AUDIT CADENCE

| Frequency | What to run |
|---|---|
| **Every deploy** | Sections 1, 2, 4, 6 (automated via script) |
| **Weekly** | Full checklist sections 1–7 |
| **Monthly** | Section 8 (security/compliance) + GSC deep review |
| **After any i18n change** | Section 3 in full |
| **After any schema change** | Section 5 in full |

---

## CHANGELOG

| Date | Version | Change |
|---|---|---|
| May 2026 | 1.0 | Initial version — covers sitemap, robots, i18n, file sizes, schema, build, crawl budget, security |
