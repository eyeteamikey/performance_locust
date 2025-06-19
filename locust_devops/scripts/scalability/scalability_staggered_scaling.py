"""
Staggered Scaling Test
----------------------
Simulates simultaneous growth in both:
1. Number of users (horizontal scaling)
2. Request complexity (vertical scaling via larger payloads)

Purpose:
- Models realistic product growth where user base and feature usage both increase
- Evaluates how the system performs under multi-dimensional scaling pressure

Behavior:
- Each user submits a user object with an increasingly long username/password on each run
"""

from locust import HttpUser, task, between
import random
import string

class StaggeredScalingUser(HttpUser):
    wait_time = between(1, 2)

    def on_start(self):
        self.scale_factor = 1  # Controls payload complexity

    def generate_scaled_user(self):
        # Longer names and passwords as scale increases
        length = 10 * self.scale_factor
        name = ''.join(random.choices(string.ascii_letters, k=length))
        password = ''.join(random.choices(string.ascii_letters + string.digits, k=length))
        email = f"{name}@example.com"
        return {
            "id": random.randint(1000, 9999),
            "userName": name,
            "password": password,
            "email": email
        }

    @task
    def post_user_with_scaling(self):
        user = self.generate_scaled_user()
        with self.client.post("/api/v1/Users", json=user, catch_response=True) as response:
            if response.status_code != 200:
                response.failure(f"POST failed at scale {self.scale_factor}")
            else:
                response.success()
        self.scale_factor += 1  # Increase payload size next time
