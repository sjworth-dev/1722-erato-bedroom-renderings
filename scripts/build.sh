#!/bin/sh
set -eu
mkdir -p dist/client dist/server
cp -R public/. dist/client/
cp src/worker.js dist/server/index.js
