"""
Stress Testing Script
---------------------
Gradually increases load to simulate 1,000 to 10,000 users hitting POST /api/v1/Activities.
Goal: Identify when the system begins to degrade or fail (5xx errors).
"""

from locust import HttpUser, task, constant
import random

class StressTestUser(HttpUser):
    wait_time = constant(1)

    @task
    def post_activity(self):
        self.client.post("/api/v1/Activities", json={
            "id": random.randint(1000, 9999),
            "title": "Load Activity",
            "dueDate": "2025-12-31T00:00:00.000Z",
            "completed": False
        })
