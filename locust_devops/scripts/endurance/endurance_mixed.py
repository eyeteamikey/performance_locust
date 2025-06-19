"""
Mixed Endpoint Endurance Test Script
------------------------------------
Simulates steady traffic across multiple API endpoints over time to evaluate system endurance.

Purpose:
- Mimic realistic usage with varied resource access
- Identify bottlenecks in endpoint-specific handling

Run with:
locust -f endurance/endurance_mixed.py --host=https://fakerestapi.azurewebsites.net --headless -u 40 -r 2 -t 1h
"""

from locust import HttpUser, task, between
import random
import string

class MixedEnduranceTest(HttpUser):
    wait_time = between(2, 4)

    @task(3)
    def get_books(self):
        self.client.get("/api/v1/Books")

    @task(2)
    def get_authors(self):
        self.client.get("/api/v1/Authors")

    @task(1)
    def get_users(self):
        self.client.get("/api/v1/Users")
