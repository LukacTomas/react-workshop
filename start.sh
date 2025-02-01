#!/bin/bash

# Ensure we are inside a Git repository
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo "Not inside a Git repository!"
    exit 1
fi

# Get the first commit hash
FIRST_COMMIT=$(git rev-list --max-parents=0 HEAD)

if [ "$(git rev-parse HEAD)" = "$FIRST_COMMIT" ]; then
    echo "Already at the initial commit."
    exit 0
fi

# Reset working directory and move to the first commit
git reset --hard HEAD
git checkout "$FIRST_COMMIT"
