"""
Endurance Testing Script
------------------------
Simulates 250 users calling GET /api/v1/Users every few seconds over a long duration.
Goal: Monitor for memory leaks or degradation over time.
"""

from locust import HttpUser, task, between

class EnduranceTestUser(HttpUser):
    wait_time = between(2, 4)

    @task
    def get_users(self):
        self.client.get("/api/v1/Users")
