#!/usr/bin/env bash

# Tab completion for make targets
# Source credit: http://stackoverflow.com/questions/4188324/bash-completion-of-makefile-target#answer-38415982
complete -W "\`grep -oE '^[a-zA-Z0-9_-]+:([^=]|$)' Makefile | sed 's/[^a-zA-Z0-9_-]*$//'\`" make
