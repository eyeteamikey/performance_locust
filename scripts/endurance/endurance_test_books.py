"""
Endurance Test Script
---------------------
Simulates continuous user activity over an extended time period to detect performance degradation.

Purpose:
- Test for memory leaks, DB pooling issues, or cumulative slowdowns
- Observe how the API handles steady traffic over time

Scenario:
- Repeatedly fetch book data at a steady rate
- Designed to run for 1+ hours (controlled via Locust CLI)

Recommendation:
Use with headless execution and monitor system metrics.

Example run:
locust -f endurance/endurance_test_books.py --host=https://fakerestapi.azurewebsites.net --headless -u 50 -r 2 -t 1h
"""

from locust import HttpUser, task, between

class EnduranceTestUser(HttpUser):
    wait_time = between(2, 5)  # Slightly slower pace to simulate long-term user activity

    @task
    def get_books(self):
        """Continuously requests book data to simulate long-term read access."""
        with self.client.get("/api/v1/Books", catch_response=True) as response:
            if response.status_code != 200:
                response.failure(f"GET /Books failed with status {response.status_code}")
            else:
                response.success()
