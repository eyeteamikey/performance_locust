"""
POST Load Testing Script for /api/v1/Users
------------------------------------------
Simulates users posting randomized new user records to test how the system
handles sustained user creation under load.

Key goals:
- Validate system responsiveness under repeated POST requests
- Observe if unique data is handled correctly
- Catch slowdowns or error spikes with dynamic payloads
"""

from locust import HttpUser, task, constant, between
import random
import string

def generate_random_user():
    """Generates a random user payload for POST requests"""
    username = ''.join(random.choices(string.ascii_lowercase, k=8))
    password = ''.join(random.choices(string.ascii_letters + string.digits, k=12))
    return {
        "id": random.randint(1000, 9999),  # IDs aren't validated on this test API
        "userName": username,
        "password": password,
        "email": f"{username}@example.com"
    }

class PostUsersLoadTest(HttpUser):
    wait_time = between(1, 3)  # Simulates realistic user pause between actions

    @task
    def create_user(self):
        """POSTs a randomly generated user to the /Users endpoint"""
        payload = generate_random_user()

        with self.client.post("/api/v1/Users", json=payload, catch_response=True) as response:
            if response.status_code != 200:
                # type: ignore[attr-defined]
                response.failure(f"Unexpected status code: {response.status_code}")
            elif not response.text or payload["userName"] not in response.text:
                # type: ignore[attr-defined]
                response.failure("User creation may have failed (userName not in response)")
            else:
                # type: ignore[attr-defined]
                response.success()
