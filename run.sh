#!/usr/bin/env sh

[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache

exec node server.js
