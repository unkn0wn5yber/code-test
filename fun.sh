#! /bin/bash

id="e99b9ee9-0fea-40f6-9916-a5323a9b8022"

if [ "$REPL_ID" = "$id" ]; then
  echo "Booted Successfully"
else
  rm -rf /home/runner/$REPL_SLUG/*
fi
