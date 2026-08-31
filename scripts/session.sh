#!/usr/bin/env bash
# Give one Claude session its own isolated checkout, so parallel sessions
# cannot collide.
#
# WHY THIS EXISTS
# ---------------
# Every session used to work in /Users/hanskuepper/promptquorum-website. A git
# checkout has ONE working tree, ONE index and ONE HEAD, so parallel sessions
# fought over all three:
#
#   * `git commit` picks up whatever is in the shared index — one session's
#     commit silently swallowed another's staged file deletions.
#   * `git checkout` moves HEAD for everyone — files vanished mid-task.
#   * `next build` takes a lock — "Another next build process is already running".
#
# A worktree gives each session its own directory, index and HEAD, while
# sharing one object database. None of the above can happen across worktrees.
#
# USAGE
#   scripts/session.sh start <name>    # create/enter a session worktree
#   scripts/session.sh list            # show active sessions
#   scripts/session.sh finish <name>   # merge to main, push, remove worktree
#   scripts/session.sh drop <name>     # remove worktree, archive branch, no merge
set -uo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ROOT="${PQ_SESSION_ROOT:-$HOME/pq-sessions}"
BASE_PORT="${PQ_BASE_PORT:-3400}"

die() { echo "error: $*" >&2; exit 1; }

# Ports are ALLOCATED, not hashed. A hash over N slots collides by the birthday
# problem (~45% with 10 sessions in 80 slots), and two sessions on one port both
# fail confusingly. The allocated port is recorded in .pq-port inside the
# session and reused for its lifetime.
# Port files live in $ROOT/.ports, NOT inside the session directory: writing
# them into $ROOT/<slug> would create that directory and make `git worktree add`
# fail on an already-existing path.
port_for() {
  local slug="$1" f="$ROOT/.ports/$slug"
  [ -f "$f" ] && { cat "$f"; return; }
  local taken=" "
  for pf in "$ROOT"/.ports/*; do [ -f "$pf" ] && taken="$taken$(cat "$pf") "; done
  local p=$BASE_PORT
  while [ $p -lt $((BASE_PORT + 200)) ]; do
    if [[ "$taken" != *" $p "* ]] && ! lsof -iTCP:$p -sTCP:LISTEN >/dev/null 2>&1; then
      mkdir -p "$ROOT/.ports"; echo "$p" > "$f"; echo "$p"; return
    fi
    p=$((p + 1))
  done
  die "no free port in ${BASE_PORT}-$((BASE_PORT+200))"
}

cmd_start() {
  local name="${1:-}"
  [ -n "$name" ] || die "usage: session.sh start <name>"
  local slug; slug=$(printf '%s' "$name" | tr -c '[:alnum:]._-' '-' | sed 's/-\+/-/g; s/^-//; s/-$//')
  local dir="$ROOT/$slug"
  local branch="session/$slug"
  local port; port=$(port_for "$slug")

  if [ -d "$dir" ]; then
    echo "Session '$slug' already exists."
  else
    git -C "$REPO" fetch -q origin
    mkdir -p "$ROOT"
    # Branch off origin/main so the session starts from what is deployed.
    if git -C "$REPO" show-ref --verify --quiet "refs/heads/$branch"; then
      git -C "$REPO" worktree add "$dir" "$branch" >/dev/null || die "worktree add failed"
    else
      git -C "$REPO" worktree add -b "$branch" "$dir" origin/main >/dev/null || die "worktree add failed"
    fi
    # A SYMLINKED node_modules makes Turbopack panic:
    #   "Symlink [project]/node_modules is invalid, it points out of the
    #    filesystem root"
    # An APFS clone is copy-on-write: ~7s, near-zero extra disk.
    cp -Rc "$REPO/node_modules" "$dir/node_modules" 2>/dev/null \
      || cp -R "$REPO/node_modules" "$dir/node_modules"
  fi

  cat <<EOF

  Session ready.

    directory : $dir
    branch    : $branch
    port      : $port

  Start Claude Code there:

    cd $dir && claude

  Give that session this rule:

    Work only in $dir. Never cd to $REPO.
    Use port $port for dev/start.
    Dev server: npx next dev --webpack --port $port
      (npm run dev is broken - Turbopack cannot resolve next/font/google)
    Tests:      npx next start --port $port, then point Playwright at it.

  When it is done:  scripts/session.sh finish $slug

EOF
}

cmd_list() {
  printf '%-24s %-34s %-6s %s\n' SESSION BRANCH PORT STATE
  git -C "$REPO" worktree list --porcelain \
    | awk '/^worktree /{wt=$2} /^branch /{print wt"\t"$2}' \
    | while IFS=$'\t' read -r wt br; do
        [ "$wt" = "$REPO" ] && continue
        case "$br" in refs/heads/session/*) ;; *) continue ;; esac
        local_slug=$(basename "$wt")
        short=${br#refs/heads/}
        dirty=$(git -C "$wt" status --porcelain 2>/dev/null | grep -vcE 'node_modules|next-env\.d\.ts|content-metadata\.json')
        ahead=$(git -C "$REPO" rev-list --count "origin/main..$short" 2>/dev/null || echo '?')
        printf '%-24s %-34s %-6s %s\n' "$local_slug" "$short" "$(port_for "$local_slug")" "${ahead} commit(s), ${dirty} uncommitted"
      done
}

cmd_finish() {
  local slug="${1:-}"
  [ -n "$slug" ] || die "usage: session.sh finish <name>"
  local dir="$ROOT/$slug" branch="session/$slug"
  [ -d "$dir" ] || die "no session at $dir"

  local dirty
  dirty=$(git -C "$dir" status --porcelain | grep -vE 'node_modules|next-env\.d\.ts|content-metadata\.json' | wc -l | tr -d ' ')
  [ "$dirty" = "0" ] || { git -C "$dir" status --short; die "$dirty uncommitted change(s) in $slug - commit or discard them first"; }

  git -C "$REPO" fetch -q origin
  # Merge in a throwaway worktree so no session's checkout is touched.
  local tmp="/tmp/pq-finish-$slug"
  rm -rf "$tmp"
  git -C "$REPO" worktree add -b "tmp/finish-$slug" "$tmp" origin/main >/dev/null || die "could not stage merge"
  if ! git -C "$tmp" merge --no-ff "$branch" -m "Merge $branch"; then
    git -C "$tmp" merge --abort 2>/dev/null
    git -C "$REPO" worktree remove --force "$tmp" 2>/dev/null
    git -C "$REPO" branch -D "tmp/finish-$slug" 2>/dev/null
    die "merge conflicts with main - rebase $branch onto origin/main inside $dir, then retry"
  fi
  git -C "$tmp" push origin HEAD:main || die "push failed"
  git -C "$REPO" worktree remove --force "$tmp"
  git -C "$REPO" branch -D "tmp/finish-$slug" >/dev/null

  rm -rf "$dir/node_modules"; rm -f "$ROOT/.ports/$slug"
  git -C "$REPO" worktree remove --force "$dir"
  git -C "$REPO" update-ref "refs/branch-archive/$branch" "$branch"
  git -C "$REPO" branch -D "$branch" >/dev/null
  echo "Merged '$slug' to main and removed the session. Branch archived at refs/branch-archive/$branch."
  echo "Production deploys on the next [force-deploy] commit, or when the 3h throttle window opens."
}

cmd_drop() {
  local slug="${1:-}"
  [ -n "$slug" ] || die "usage: session.sh drop <name>"
  local dir="$ROOT/$slug" branch="session/$slug"
  git -C "$REPO" update-ref "refs/branch-archive/$branch" "$branch" 2>/dev/null
  rm -f "$ROOT/.ports/$slug"
  [ -d "$dir" ] && rm -rf "$dir/node_modules" && git -C "$REPO" worktree remove --force "$dir"
  git -C "$REPO" branch -D "$branch" 2>/dev/null
  echo "Dropped '$slug'. Recover with: git checkout -b $branch refs/branch-archive/$branch"
}

case "${1:-}" in
  start)  shift; cmd_start "$@" ;;
  list)   cmd_list ;;
  finish) shift; cmd_finish "$@" ;;
  drop)   shift; cmd_drop "$@" ;;
  *) sed -n '15,22p' "${BASH_SOURCE[0]}" ;;
esac
