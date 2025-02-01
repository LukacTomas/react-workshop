#!/bin/bash

# Ensure we are inside a Git repository
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo "Not inside a Git repository!"
    exit 1
fi

# Get the current commit hash
CURRENT_COMMIT=$(git rev-parse HEAD)

# Find the next commit in the history
NEXT_COMMIT=$(git rev-list --topo-order --reverse HEAD..@{u} 2>/dev/null | head -n1)

# If there's no upstream, fall back to local history
if [ -z "$NEXT_COMMIT" ]; then
    NEXT_COMMIT=$(git rev-list --topo-order --reverse HEAD.. --all | head -n1)
fi

if [ -z "$NEXT_COMMIT" ]; then
    echo "Already at the latest commit."
    exit 1
fi

# Reset working directory and move forward
git reset --hard HEAD
git checkout "$NEXT_COMMIT"
