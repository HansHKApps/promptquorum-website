#!/usr/bin/env bash
# Run a command while holding one of N build slots.
#
# Worktrees make git safe for parallel sessions, but not RAM. build-with-fix.js
# runs next build with --max-old-space-size=4096, so each concurrent build can
# take ~4-5 GB. On a 24 GB machine, 8 simultaneous builds would swap and crawl.
# This caps how many run at once; the rest wait rather than thrash.
#
# Editing, type-checking and running a dev server are cheap and stay unlimited —
# only the build is gated.
#
#   scripts/with-build-lock.sh npm run build
#   PQ_BUILD_SLOTS=3 scripts/with-build-lock.sh npm run build
#
# On Vercel there is only ever one build per container, so the lock is skipped.
set -uo pipefail

[ -n "${VERCEL:-}${CI:-}" ] && exec "$@"

SLOTS="${PQ_BUILD_SLOTS:-2}"
LOCKDIR="${TMPDIR:-/tmp}/pq-build-slots"
WAITED=0

mkdir -p "$LOCKDIR"

# mkdir is atomic on macOS, so it works as a mutex without flock.
acquire() {
  local i
  while :; do
    for (( i = 0; i < SLOTS; i++ )); do
      if mkdir "$LOCKDIR/slot-$i" 2>/dev/null; then
        # Record the owner so a stale slot can be identified.
        echo "$$ $(date +%s) ${PWD}" > "$LOCKDIR/slot-$i/owner"
        SLOT="$LOCKDIR/slot-$i"
        return 0
      fi
      # Reclaim a slot whose owning process is gone (crash, Ctrl-C, kill -9).
      local pid
      pid=$(awk '{print $1}' "$LOCKDIR/slot-$i/owner" 2>/dev/null)
      if [ -n "$pid" ] && ! kill -0 "$pid" 2>/dev/null; then
        rm -rf "$LOCKDIR/slot-$i"
      fi
    done
    if [ "$WAITED" = 0 ]; then
      echo "[build-lock] all $SLOTS build slots busy; waiting..." >&2
      WAITED=1
    fi
    sleep 3
  done
}

acquire
trap 'rm -rf "$SLOT"' EXIT INT TERM
[ "$WAITED" = 1 ] && echo "[build-lock] slot acquired, building." >&2

"$@"
