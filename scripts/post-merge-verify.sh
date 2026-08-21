#!/bin/bash
# Post-merge verification — run once #215, #216, #217, #223, #220, #221, #222
# are all live on production. Nothing here mutates anything; safe to re-run.
set -uo pipefail
BASE="https://www.promptquorum.com"

echo "================================================================"
echo "1) robots.txt — #215 unblocks /_next/static/ and /download"
echo "================================================================"
echo "Expect: no lines below"
curl -s "$BASE/robots.txt" | grep -E '_next/static|Disallow: /download'
echo "(empty above = fix landed)"
echo

echo "================================================================"
echo "2) local-llms article schema — #216, raw HTML, no JS"
echo "================================================================"
echo "--- DE: troubleshooting-local-llm-setup ---"
curl -s "$BASE/de/local-llms/troubleshooting-local-llm-setup" | grep -o 'TechArticle\|FAQPage\|HowTo' | sort -u
echo "--- KO: best-beginner-local-llm-models ---"
curl -s "$BASE/ko/local-llms/best-beginner-local-llm-models" | grep -o 'TechArticle\|FAQPage\|HowTo' | sort -u
echo "(expect all three types on both lines above)"
echo

echo "================================================================"
echo "3) Migrated image URLs — #217, spot-check 5"
echo "================================================================"
declare -a urls=(
  "$BASE/api/og/build-your-own-prompt-framework?lang=de"
  "$BASE/api/og/prompt-security-tools-injection-testing?lang=ja"
  "$BASE/api/og/best-local-llm-apps-android-2026?lang=ko"
  "$BASE/images/future-of-local-llms-trends-timeline-ar.svg"
  "$BASE/api/og/anythingllm-vs-privategpt-vs-openwebui-rag?lang=zh"
)
for u in "${urls[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$u")
  echo "$code  $u"
done
echo "(all should be 200)"
echo

echo "================================================================"
echo "4) sameAs entity graph — #217, Substack present"
echo "================================================================"
curl -s "$BASE/" | grep -o "https://substack.com/@promptquorum" | head -1
echo "(one match above = Organization.sameAs includes Substack)"
echo

echo "================================================================"
echo "5) howToName language leak fix — #220, JA/ZH in their own language"
echo "================================================================"
echo "--- JA: ai-powered-research ---"
curl -s "$BASE/ja/prompt-engineering/ai-powered-research" \
  | grep -o '"@type":"HowTo"[^}]*"name":"[^"]*"' | head -1
echo "--- ZH: ai-powered-research ---"
curl -s "$BASE/zh/prompt-engineering/ai-powered-research" \
  | grep -o '"@type":"HowTo"[^}]*"name":"[^"]*"' | head -1
echo "(expect Japanese / Chinese characters in the \"name\" value above, not English)"
echo

echo "================================================================"
echo "6) x-vercel-cache sanity — confirm no caching regression"
echo "================================================================"
echo "--- first request ---"
curl -sI "$BASE/de/" | grep -i "x-vercel-cache"
echo "--- second request (should read HIT) ---"
curl -sI "$BASE/de/" | grep -i "x-vercel-cache"
echo

echo "================================================================"
echo "7) BlogPostClient CTA translation — #221"
echo "================================================================"
echo "--- DE: any blog post, footer CTA should not contain English 'Join the PromptQuorum Waitlist' ---"
SLUG=$(curl -s "$BASE/sitemap.xml" | grep -oE '/blog/[a-z0-9-]+' | head -1 | sed 's#/blog/##')
curl -s "$BASE/de/blog/${SLUG:-prompt-frameworks}" | grep -c "Join the PromptQuorum Waitlist"
echo "(expect 0 — German page should not contain the English CTA string)"
echo

echo "================================================================"
echo "8) Korean webfont — #222, computed font-family (requires a browser;"
echo "   curl can only confirm the CSS rule shipped, not the computed style)"
echo "================================================================"
curl -s "$BASE/_next/static/css/"*.css 2>/dev/null | grep -o 'html\[lang="ko"\][^}]*}' | head -1
echo "(if empty, check the actual CSS bundle path — Next.js hashes filenames per build;"
echo " the reliable check is a real browser: getComputedStyle(document.body).fontFamily on /ko/)"
