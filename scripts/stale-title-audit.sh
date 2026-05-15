#!/bin/bash
# Stale Title Audit — Find articles not modified in N days
# Usage: bash scripts/stale-title-audit.sh
# Output: /tmp/stale-pages.txt

THRESHOLD_DAYS=30
CUTOFF=$(date -v-${THRESHOLD_DAYS}d +%Y-%m-%d 2>/dev/null || date -d "${THRESHOLD_DAYS} days ago" +%Y-%m-%d)

echo "=== Pages NOT modified since $CUTOFF ===" >&2
echo "Checking: src/lib/{local-llms,power-local-llm,prompt-engineering}/articles/*.ts" >&2
echo "" >&2

RESULTS=()

# Find all English article files in the three content sections
for f in src/lib/local-llms/articles/*.ts \
         src/lib/power-local-llm/articles/*.ts \
         src/lib/prompt-engineering/articles/*.ts; do

  # Skip if file doesn't exist (glob expansion failed)
  [[ ! -f "$f" ]] && continue

  # Get last modification date from git
  last_mod=$(git log -1 --format="%ai" -- "$f" 2>/dev/null | cut -d' ' -f1)
  if [[ -z "$last_mod" ]]; then
    continue
  fi

  # Compare dates: if last_mod < CUTOFF, file is stale
  if [[ "$last_mod" < "$CUTOFF" ]]; then
    # Extract slug from filename (remove .ts extension)
    slug=$(basename "$f" .ts)

    # Calculate days ago
    last_mod_epoch=$(date -j -f "%Y-%m-%d" "$last_mod" +%s 2>/dev/null || date -d "$last_mod" +%s)
    now_epoch=$(date +%s)
    days_ago=$(( (now_epoch - last_mod_epoch) / 86400 ))

    RESULTS+=("$last_mod  $days_ago  $slug")
  fi
done

# Sort by days ago (descending) and output to temp file
printf "%s\n" "${RESULTS[@]}" | sort -r > /tmp/stale-pages.txt

# Print summary to stderr
wc -l < /tmp/stale-pages.txt | xargs -I {} echo "Found {} stale pages" >&2
echo "" >&2
echo "Output saved to: /tmp/stale-pages.txt" >&2
