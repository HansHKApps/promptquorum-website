#!/usr/bin/env bash
# SessionStart hook: refuse to let a session quietly do work in the SHARED
# checkout, where parallel sessions overwrite each other.
#
# Emits JSON on stdout:
#   systemMessage -> shown to the user
#   additionalContext -> injected into the model's context, so the session sets
#                        up its own worktree without the user having to ask.
#
# Prints nothing when the session already runs in a worktree.
set -uo pipefail

SHARED="/Users/hanskuepper/promptquorum-website"

# The hook payload carries cwd; fall back to $PWD if jq or the field is absent.
PAYLOAD="$(cat 2>/dev/null || true)"
CWD="$(printf '%s' "$PAYLOAD" | jq -r '.cwd // empty' 2>/dev/null)"
[ -n "$CWD" ] || CWD="$PWD"

# Physical path, so a symlinked route to the shared checkout is still caught.
CWD="$(cd "$CWD" 2>/dev/null && pwd -P || printf '%s' "$CWD")"
SHARED_P="$(cd "$SHARED" 2>/dev/null && pwd -P || printf '%s' "$SHARED")"

[ "$CWD" = "$SHARED_P" ] || exit 0

BRANCH="$(git -C "$SHARED_P" branch --show-current 2>/dev/null || echo unknown)"
OTHERS="$(git -C "$SHARED_P" worktree list 2>/dev/null | grep -c 'pq-sessions' || true)"

jq -n --arg branch "$BRANCH" --arg others "$OTHERS" '
{
  systemMessage: ("⚠️  This session started in the SHARED checkout (branch: " + $branch +
    ").\nParallel sessions here overwrite each other. Run:  scripts/session.sh start <task-name>\nthen work in the directory it prints. " +
    $others + " session worktree(s) currently active."),
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext: ("You are in the SHARED promptquorum-website checkout, which is NOT safe for parallel work: it has one working tree, one git index and one HEAD, so concurrent sessions corrupt each other (a commit here has already swallowed another session'"'"'s staged deletions, and a branch switch deleted another session'"'"'s files mid-task).\n\nBefore ANY edit, build, or commit for a real task, move this session into its own worktree — two steps:\n\n  1. Run:  scripts/session.sh start <short-task-name>\n     It prints a DIRECTORY, a session/<name> branch and a dedicated PORT.\n  2. Call the EnterWorktree tool with path set to that directory, so this\n     session'"'"'s own working directory moves there. Do not skip this — without\n     it you are still editing the shared checkout.\n\nThen do all work there, using the printed port for dev/start. Note npm run dev is broken (Turbopack cannot resolve next/font/google): use npx next dev --webpack --port <yours>. Build via scripts/with-build-lock.sh npm run build, never bare npm run build. Finish with scripts/session.sh finish <name> (merges to main and pushes) or scripts/session.sh drop <name>.\n\nStaying in the shared checkout is acceptable ONLY for read-only inspection or for running session.sh itself. See the \"Parallel Sessions\" section of CLAUDE.md.")
  }
}'
