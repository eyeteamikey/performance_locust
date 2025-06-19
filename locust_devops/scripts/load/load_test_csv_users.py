"""
CSV-Based Load Test
-------------------
Simulates POSTing user data (creating new users) loaded from a CSV file to test data-driven load patterns.

Purpose:
- Replays realistic, external user data
- Shows the ability to load payloads dynamically
- Demonstrates parameterized testing under load
"""

import csv
import random
from locust import HttpUser, task, between

class CSVUserLoadTest(HttpUser):
    wait_time = between(1, 3)

    def on_start(self):
        """Load CSV data into memory once at user start."""
        with open("locust_devops/data/test_users.csv", newline='') as csvfile:
            self.user_data = list(csv.DictReader(csvfile))

    @task
    def post_user_from_csv(self):
        """Post a random user from CSV file."""
        user = random.choice(self.user_data)
        user["id"] = random.randint(1000, 9999)
        with self.client.post("/api/v1/Users", json=user, catch_response=True) as response:
            if response.status_code != 200:
                response.failure(f"Failed to post user: {user['userName']}")
            else:
                response.success()
