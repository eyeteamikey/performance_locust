# Python-Based Performance Testing Framework with Locust

This framework uses [Locust](https://locust.io/) to simulate performance testing for REST APIs.

## How to Run

### 1. Install Requirements
```bash
pip install -r requirements.txt
```

### 2. Run Locust
```bash
locust -f locustfile.py --host=https://reqres.in
```

Then open `http://localhost:8089` to access the UI.

### 3. Headless Mode (Optional)
```bash
locust -f locustfile.py --headless -u 20 -r 5 -t 1m --host=https://reqres.in --csv=reports/test_run
```

## Project Structure

- `locustfile.py`: Main load test definitions.
- `config/`: Optional test configs.
- `data/`: Placeholder for CSV or test data.
- `reports/`: Test result exports.
- `scripts/`: Shell scripts for automation.
