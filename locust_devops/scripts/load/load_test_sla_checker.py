"""
SLA Threshold Checker
---------------------
Tests response times and flags requests that exceed defined SLA limit.

Purpose:
- Enforces SLAs (e.g., response time < 500ms)
- Logs and fails slow requests
- Demonstrates awareness of performance baselines
"""

from locust import HttpUser, task, between

SLA_THRESHOLD_SEC = 0.5  # 500ms

class SLATest(HttpUser):
    wait_time = between(1, 2)

    @task
    def check_sla_response_time(self):
        with self.client.get("/api/v1/Books", catch_response=True) as response:
            if response.elapsed.total_seconds() > SLA_THRESHOLD_SEC:
                response.failure(f"Response too slow: {response.elapsed.total_seconds()}s")
            else:
                response.success()
