"""
Endurance POST Test Script
--------------------------
Simulates long-term POST traffic to test database write endurance and backend stability.

Purpose:
- Check how the system handles continuous user creation over extended time
- Watch for DB write bottlenecks or memory leaks

Run with:
locust -f endurance/endurance_post_users.py --host=https://fakerestapi.azurewebsites.net --headless -u 30 -r 1 -t 1h
"""

from locust import HttpUser, task, between
import random
import string

def generate_user():
    username = ''.join(random.choices(string.ascii_lowercase, k=8))
    return {
        "id": random.randint(1000, 9999),
        "userName": username,
        "password": "Secure1234",
        "email": f"{username}@test.com"
    }

class EndurancePostTest(HttpUser):
    wait_time = between(3, 6)

    @task
    def create_user(self):
        user = generate_user()
        with self.client.post("/api/v1/Users", json=user, catch_response=True) as response:
            if response.status_code != 200:
                response.failure(f"Failed to POST /Users: {response.status_code}")
            else:
                response.success()
