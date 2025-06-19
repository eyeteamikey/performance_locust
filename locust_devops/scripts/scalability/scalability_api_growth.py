"""
API Growth Over Time Test
-------------------------
Simulates a scenario where the application scales in functionality,
gradually exposing more API endpoints to users over time.

Purpose:
- Test how well the system handles increasing functional coverage
- Detect bottlenecks across different resources (Books, Users, Authors, etc.)
"""

from locust import HttpUser, task, between
import random

class APIGrowthUser(HttpUser):
    wait_time = between(1, 2)

    def on_start(self):
        self.endpoint_stage = 0  # Controls API growth stage

    @task
    def call_growing_apis(self):
        self.endpoint_stage += 1

        if self.endpoint_stage == 1:
            self.client.get("/api/v1/Books")
        elif self.endpoint_stage == 2:
            self.client.get("/api/v1/Books")
            self.client.get("/api/v1/Users")
        elif self.endpoint_stage >= 3:
            self.client.get("/api/v1/Books")
            self.client.get("/api/v1/Users")
            self.client.get("/api/v1/Authors")
