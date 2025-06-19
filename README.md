# Locust Performance Testing Framework

This project is a modular and extensible performance testing framework built with **Locust**, designed to test REST APIs like [fakerestapi.azurewebsites.net](https://fakerestapi.azurewebsites.net).

It supports:

- ✅ Load Testing  
- ✅ Stress Testing  
- ✅ Spike Testing  
- ✅ Endurance Testing  
- ✅ Scalability & Volume Testing  
- ✅ SLA Monitoring  
- ✅ CSV-based Test Data  
- ✅ Grafana Monitoring Integration  

---

## 📁 Project Structure

```
locust_fakerestapi/
├── data/                      # CSV test data (e.g., test_users.csv)
├── endurance/                 # Long-running tests
├── load/                      # Load testing scripts
├── reports/                   # Locust-generated CSVs
├── scalability/               # Scalability test logic
├── scripts/                   # Shell runners (optional)
├── shape/                     # Custom load profiles (e.g., step shape)
├── spike/                     # Spike testing scripts
├── stress/                    # Stress testing logic
├── tools/                     # Analytics & Grafana dashboard
│   ├── analyze_locust_csv.py
│   └── locust_grafana_dashboard.json
├── volume/                    # Volume test scenarios
├── locustfile.py              # Optional shared entry
├── requirements.txt           # Python dependencies
└── README.md                  # You're here
```

---

## 🧪 Test Examples

### Load Tests

- `load_test.py`: Basic GET `/Books`
- `multi_task_load_test.py`: GET `/Books`, `/Users`, `/Authors`
- `post_user_load_test.py`: POST `/Users` with randomized data
- `load_test_csv_users.py`: Loads users from CSV and posts them
- `load_test_user_journey.py`: Create → Read → Delete simulation
- `load_test_sla_checker.py`: Flags responses > 500ms

### Endurance Tests

- `endurance_test_books.py`: GET `/Books` over 1+ hour
- `endurance_post_users.py`: POST `/Users` under continuous write load
- `endurance_mixed.py`: GET `/Books`, `/Users`, `/Authors` evenly

### Scalability Tests

- `scalability_horizontal.py`: Simulate concurrency by increasing users
- `scalability_vertical.py`: Simulate complex requests per user
- `scalability_staggered_scaling.py`: Simulate both user growth and payload complexity
- `scalability_api_growth.py`: Gradually expand endpoints hit during the test
- `scalability_payload_size_curve.py`: Increase payload size each request

### Spike Tests

- `spike_test_books.py`: Sudden burst of GET `/Books`
- `spike_post_users.py`: Burst of POST `/Users`
- `spike_user_journey.py`: Full user journey during traffic spike
- `spike_random_reads.py`: Random GETs across endpoints under surge

### Stress Tests

- `stress_get_books.py`: Hammering GET `/Books` without pause
- `stress_large_post_users.py`: Flood of huge `POST /Users`
- `stress_mixed_endpoints.py`: Multiple endpoints hit under pressure
- `stress_post_delete_loop.py`: Looping `POST` and `DELETE /Users`

### Volume Tests

- `volume_large_get_books.py`: Test large dataset via `GET /Books`
- `volume_post_big_field.py`: Large record fields sent to `POST /Users`
- `volume_csv_simulation.py`: Simulate large CSV import of 200 users
- `volume_high_read_load.py`: Fast GETs across multiple endpoints

---

## 🚀 How to Run

```bash
locust -f load/load_test.py --host=https://fakerestapi.azurewebsites.net
```

### Headless Example

```bash
locust -f endurance/endurance_test_books.py   --host=https://fakerestapi.azurewebsites.net   --headless -u 50 -r 2 -t 1h   --csv=reports/summary_stats
```

---

## 📈 Analyze Results

### With Python

```bash
python tools/analyze_locust_csv.py reports/summary_stats_stats.csv
```

### With Grafana

1. Start Prometheus + Grafana stack  
2. Import `tools/locust_grafana_dashboard.json`  
3. Set Prometheus as the data source  

---

## 🧠 Key Concepts

- **Concurrency**: Users or requests handled at the same time  
- **Throughput**: Requests per second processed successfully  
- **Memory Leaks**: Gradual RAM usage increase not released  
- **CPU Degradation**: CPU load increases or slows down over time  
- **Horizontal Scaling**: Add more machines  
- **Vertical Scaling**: Add more CPU/RAM to one machine  

---

## 🧠 Interview Summary

Be ready to discuss:

- Each performance test type and when to use it  
- Locust’s core design: users, tasks, wait times  
- Test structure, metrics monitored, CSV inputs  
- Headless and UI modes, SLAs, scaling patterns  
- Tools used: Grafana, Python CLI, CSV analysis  

---

## 📦 Requirements

```bash
pip install -r requirements.txt
```

> Requires Python 3.7+

---

Made with ❤️ for robust, scalable, and realistic performance testing.
