"""
Spike Testing Script
--------------------
Simulates a sudden burst of 1,000 users hitting GET /api/v1/Authors/1.
Goal: Assess latency or error spikes during sudden surges in traffic.
"""

from locust import HttpUser, task, constant

class SpikeTestUser(HttpUser):
    wait_time = constant(0.5)

    @task
    def get_author(self):
        self.client.get("/api/v1/Authors/1")
