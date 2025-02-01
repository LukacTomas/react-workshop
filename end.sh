#!/bin/bash

# Ensure we are inside a Git repository
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo "Not inside a Git repository!"
    exit 1
fi

git checkout main
