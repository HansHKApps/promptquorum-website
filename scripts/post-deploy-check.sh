#!/usr/bin/env bash
# post-deploy-check.sh — run immediately after every production deploy.
# Prints PASS/FAIL lines for git state, freshness, live content, sitemaps,
# and HTTP 200 status. Read expected markers from scripts/post-deploy-markers.txt
# (lines: `has|lacks <path> <text>`).
#
# Usage: bash scripts/post-deploy-check.sh
# No arguments. Run from the repo root.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
BASE_URL="https://www.promptquorum.com"
TODAY="$(date +%Y-%m-%d)"
MARKERS_FILE="$SCRIPT_DIR/post-deploy-markers.txt"

# ── colour helpers ──────────────────────────────────────────────────────────
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'
pass() { echo -e "${GREEN}PASS${NC}  $*"; }
fail() { echo -e "${RED}FAIL${NC}  $*"; }
info() { echo -e "${YELLOW}INFO${NC}  $*"; }

FAILURES=0
flag_fail() { FAILURES=$((FAILURES + 1)); fail "$@"; }

# ── 1. GIT SECTION ──────────────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════"
echo "  1. GIT STATE"
echo "═══════════════════════════════════════════════"

cd "$ROOT"

echo ""
info "git pull --ff-only"
git pull --ff-only 2>&1 || flag_fail "git pull failed — repo may be ahead of remote"

echo ""
info "git status"
GIT_STATUS="$(git status --short)"
if [ -z "$GIT_STATUS" ]; then
  pass "Working tree clean"
else
  info "Uncommitted changes:"
  echo "$GIT_STATUS"
fi

echo ""
info "Last 8 commits:"
git log --oneline -8

echo ""
info "Last 3 [force-deploy] commits:"
git log --oneline --grep='\[force-deploy\]' -3 || info "(none found)"

echo ""
info "Last 2 mark.*deploy commits:"
git log --oneline --grep='mark.*deploy\|mark-deployed' -2 || info "(none found)"

echo ""
info "Leftover ~/pq-sessions/refresh-* worktrees:"
LEFTOVER=$(ls -d ~/pq-sessions/refresh-* 2>/dev/null || true)
if [ -z "$LEFTOVER" ]; then
  pass "No leftover refresh-* session directories"
else
  flag_fail "Leftover refresh session directories found (may be safe to drop):"
  echo "$LEFTOVER"
fi

# ── 2. FRESHNESS ────────────────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════"
echo "  2. FRESHNESS"
echo "═══════════════════════════════════════════════"

echo ""
info "Running scripts/freshness.mjs (first 26 lines + 121+ priority list)..."
FRESH_OUT="$(node "$SCRIPT_DIR/freshness.mjs" 2>&1)"
echo "$FRESH_OUT" | head -26

echo ""
info "121+ days overdue:"
echo "$FRESH_OUT" | grep -A 999 "121+" | head -20 || info "(section not found in output)"

# ── 3. LIVE CONTENT SPOT-CHECKS ─────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════"
echo "  3. LIVE CONTENT (markers)"
echo "═══════════════════════════════════════════════"

# has <path> <text>  — page must contain the text
# lacks <path> <text> — page must NOT contain the text
has() {
  local path="$1"
  local text="$2"
  local url="${BASE_URL}${path}"
  local body
  body="$(curl -s -L --max-time 40 "$url")"
  if echo "$body" | grep -qF "$text"; then
    pass "has  ${path}  →  ${text:0:60}"
  else
    flag_fail "has  ${path}  missing: ${text:0:60}"
  fi
}

lacks() {
  local path="$1"
  local text="$2"
  local url="${BASE_URL}${path}"
  local body
  body="$(curl -s -L --max-time 40 "$url")"
  if echo "$body" | grep -qF "$text"; then
    flag_fail "lacks  ${path}  still present: ${text:0:60}"
  else
    pass "lacks  ${path}  absent: ${text:0:60}"
  fi
}

echo ""
if [ -f "$MARKERS_FILE" ]; then
  info "Reading markers from $MARKERS_FILE"
  while IFS= read -r line || [ -n "$line" ]; do
    # Skip blank lines and comments
    [[ -z "$line" || "$line" == \#* ]] && continue
    TYPE="$(echo "$line" | awk '{print $1}')"
    PATH_PART="$(echo "$line" | awk '{print $2}')"
    TEXT="$(echo "$line" | cut -d' ' -f3-)"
    if [ "$TYPE" = "has" ]; then
      has "$PATH_PART" "$TEXT"
    elif [ "$TYPE" = "lacks" ]; then
      lacks "$PATH_PART" "$TEXT"
    else
      info "Unknown marker type '$TYPE' — skipping: $line"
    fi
  done < "$MARKERS_FILE"
else
  info "No $MARKERS_FILE found — skipping content spot-checks"
  info "Create that file with lines: has|lacks <path> <text>"
fi

# ── 4. SITEMAP <lastmod> TODAY COUNTS ───────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════"
echo "  4. SITEMAP lastmod counts (today = $TODAY)"
echo "═══════════════════════════════════════════════"

CLUSTERS=(local-llms prompt-engineering power-local-llm prompt-bites smart-home balcony-solar blog static)
echo ""
for cluster in "${CLUSTERS[@]}"; do
  URL="${BASE_URL}/sitemaps/${cluster}.xml"
  COUNT="$(curl -s -L --max-time 40 "$URL" | grep -c "<lastmod>${TODAY}</lastmod>" || true)"
  if [ "$COUNT" -gt 0 ]; then
    pass "${cluster}: ${COUNT} URLs with today's lastmod"
  else
    info "${cluster}: 0 URLs with today's lastmod (may be expected if cluster had no updates)"
  fi
done

# ── 5. HTTP 200 — balcony-solar cluster ─────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════"
echo "  5. HTTP 200 — balcony-solar EN URLs"
echo "═══════════════════════════════════════════════"

echo ""
BSOL_SITEMAP="$(curl -s -L --max-time 40 "${BASE_URL}/sitemaps/balcony-solar.xml")"
BSOL_URLS="$(echo "$BSOL_SITEMAP" | grep -oP '(?<=<loc>)[^<]+' | grep -v '/de/\|/fr/\|/ja/\|/zh/\|/es/\|/pt/\|/ar/\|/ko/' || true)"

if [ -z "$BSOL_URLS" ]; then
  info "No EN balcony-solar URLs found in sitemap — check sitemap fetch"
else
  while IFS= read -r url; do
    HTTP_CODE="$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 20 "$url")"
    if [ "$HTTP_CODE" = "200" ]; then
      pass "200  $url"
    else
      flag_fail "${HTTP_CODE}  $url"
    fi
  done <<< "$BSOL_URLS"
fi

# ── SUMMARY ─────────────────────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════"
if [ "$FAILURES" -eq 0 ]; then
  echo -e "  ${GREEN}ALL CHECKS PASSED${NC}"
else
  echo -e "  ${RED}${FAILURES} CHECK(S) FAILED — review FAIL lines above${NC}"
fi
echo "═══════════════════════════════════════════════"
echo ""

exit "$FAILURES"
