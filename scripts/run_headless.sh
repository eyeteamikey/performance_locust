#!/bin/bash
# Run Locust in headless mode

locust -f locustfile.py --headless -u 25 -r 5 -t 1m --host=https://reqres.in --csv=reports/test_run
