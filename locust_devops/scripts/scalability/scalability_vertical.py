"""
Vertical Scalability Test
-------------------------
Simulates a smaller number of users making more complex or heavier requests.

Purpose:
- Tests performance with richer request patterns per user
- Useful when expecting power users or large transactions
"""

from locust import HttpUser, task, between
import random
import string

class VerticalScaleUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def post_complex_user(self):
        payload_size = 300  # Simulate growing complexity
        name = ''.join(random.choices(string.ascii_letters, k=payload_size))
        user = {
            "id": random.randint(1000, 9999),
            "userName": f"user_{name}",
            "password": f"pass_{name}",
            "email": f"{name}@example.com"
        }
        with self.client.post("/api/v1/Users", json=user, catch_response=True) as response:
            if response.status_code != 200:
                response.failure("POST failed under vertical load")
            else:
                response.success()
