"""
Scalability Testing Script
--------------------------
Designed to be used with ramping configuration (external).
GET /api/v1/Books/1 with increasing user count.
Goal: Observe system's behavior as concurrency grows.
"""

from locust import HttpUser, task, between

class ScalabilityTestUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def get_book_by_id(self):
        self.client.get("/api/v1/Books/1")
