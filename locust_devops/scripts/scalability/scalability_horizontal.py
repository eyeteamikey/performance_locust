"""
Horizontal Scalability Test
---------------------------
Simulates increasing numbers of virtual users all performing the same task.

Purpose:
- Tests how well the system handles concurrency
- Observes backend load balancing and stability under pressure
"""

from locust import HttpUser, task, between

class HorizontalScaleUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def get_books(self):
        self.client.get("/api/v1/Books")
