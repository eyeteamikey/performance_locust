#!/bin/bash
# Run Locust headless test
# Usage: ./run_headless.sh load/load_test.py

if [ -z "$1" ]; then
  echo "Usage: ./run_headless.sh <test_file>"
  exit 1
fi

locust -f "$1" --headless -u 500 -r 50 -t 1m --host=https://fakerestapi.azurewebsites.net --csv=reports/summary_stats
