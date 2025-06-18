"""
Full User Journey Test (Create → Read → Delete)
-----------------------------------------------
Simulates a realistic scenario of a user being created, retrieved, and deleted.

Purpose:
- Mimics real business flow
- Validates API state changes
- Ensures resources are cleaned up
"""

from locust import HttpUser, task, between
import random
import string

def generate_user():
    username = ''.join(random.choices(string.ascii_lowercase, k=8))
    return {
        "id": random.randint(1000, 9999),
        "userName": username,
        "password": "TestPass123",
        "email": f"{username}@test.com"
    }

class UserJourneyTest(HttpUser):
    wait_time = between(1, 2)

    @task
    def user_create_read_delete(self):
        user = generate_user()
        # Create
        with self.client.post("/api/v1/Users", json=user, catch_response=True) as res_create:
            if res_create.status_code != 200:
                res_create.failure("Create failed")
                return
        # Read
        with self.client.get(f"/api/v1/Users/{user['id']}", catch_response=True) as res_read:
            if res_read.status_code != 200:
                res_read.failure("Read failed")
        # Delete
        with self.client.delete(f"/api/v1/Users/{user['id']}", catch_response=True) as res_delete:
            if res_delete.status_code != 200:
                res_delete.failure("Delete failed")
