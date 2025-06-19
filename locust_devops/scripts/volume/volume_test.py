"""
Volume Testing Script
---------------------
Sends large POST payloads to /api/v1/Users to simulate volume processing.
Goal: Validate system response to large data bodies under low concurrency.
"""

from locust import HttpUser, task, constant

class VolumeTestUser(HttpUser):
    wait_time = constant(2)

    @task
    def post_large_user(self):
        self.client.post("/api/v1/Users", json={
            "id": 0,
            "userName": "test_user_" + "x" * 1000,
            "password": "pass" * 500,
            "email": "test@example.com"
        })
