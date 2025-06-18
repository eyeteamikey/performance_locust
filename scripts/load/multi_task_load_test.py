"""
Multi-Task Load Testing Script
------------------------------
Simulates users repeatedly calling multiple endpoints:
- GET /api/v1/Books
- GET /api/v1/Authors
- GET /api/v1/Users

Goal: Measure system stability under diverse, repeated load.
"""

from locust import HttpUser, task, between

class MultiTaskLoadUser(HttpUser):
    wait_time = between(1, 3)  # Random wait to simulate user delay

    @task(3)
    def get_books(self):
        """Simulates a frequent action: browsing books."""
        self.client.get("/api/v1/Books")

    @task(2)
    def get_authors(self):
        """Simulates moderate use: checking author information."""
        self.client.get("/api/v1/Authors")

    @task(1)
    def get_users(self):
        """Simulates less common use: admin user list check."""
        self.client.get("/api/v1/Users")
