from locust import LoadTestShape

class StepLoadShape(LoadTestShape):
    step_time = 30
    step_load = 10
    spawn_rate = 2
    max_users = 50

    def tick(self):
        run_time = self.get_run_time()
        if run_time < self.step_time * (self.max_users // self.step_load):
            current_step = run_time // self.step_time
            return (current_step * self.step_load, self.spawn_rate)
        return None
