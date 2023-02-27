#!/bin/sh -l
echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"

echo "hello $1"

time=$(date)
echo "::set-output name=time::$time"
echo '::set-env name=HELLO:hello'