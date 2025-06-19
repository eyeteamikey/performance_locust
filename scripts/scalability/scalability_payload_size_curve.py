"""
Payload Size Curve Test
------------------------
Simulates the gradual increase in the size of request payloads
to evaluate how the system handles large data submissions.

Purpose:
- Stress test memory handling, JSON parsing, and input validation
- Simulates scenarios like image uploads or long-form data entry

Behavior:
- Sends growing JSON payloads to /Users by adding dummy data fields
"""

from locust import HttpUser, task, between
import random
import string

class PayloadSizeCurveUser(HttpUser):
    wait_time = between(1, 2)

    def on_start(self):
        self.size_factor = 1

    def generate_large_user(self):
        base_length = 10 * self.size_factor
        filler = ''.join(random.choices(string.ascii_letters, k=base_length))
        return {
            "id": random.randint(1000, 9999),
            "userName": f"user_{filler}",
            "password": f"pass_{filler}",
            "email": f"{filler}@example.com",
            "notes": filler * 5  # artificial payload inflation
        }

    @task
    def post_large_payload(self):
        user = self.generate_large_user()
        with self.client.post("/api/v1/Users", json=user, catch_response=True) as response:
            if response.status_code != 200:
                response.failure(f"Large payload POST failed (factor {self.size_factor})")
            else:
                response.success()
        self.size_factor += 1
