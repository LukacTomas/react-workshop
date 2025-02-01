#!/bin/bash

# Ensure we are inside a Git repository
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo "Not inside a Git repository!"
    exit 1
fi

# Check if we're at the first commit
if [ "$(git rev-list --count HEAD)" -eq 1 ]; then
    echo "Already at the first commit."
    exit 1
fi

# Reset working directory and move back
git reset --hard HEAD
git checkout HEAD~1
