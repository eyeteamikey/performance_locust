"""
Load Testing Script
-------------------
Simulates 500 users repeatedly calling GET /api/v1/Books to test system behavior under expected load.
Goal: Ensure average response time remains < 300ms and error rate < 1%.
"""

from locust import HttpUser, task, between

class LoadTestUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def get_books(self):
        self.client.get("/api/v1/Books")
