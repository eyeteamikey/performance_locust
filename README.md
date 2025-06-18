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

### Endurance Tests

- `endurance_test_books.py`: GET `/Books` over 1+ hour
- `endurance_post_users.py`: POST `/Users` under continuous write load
- `endurance_mixed.py`: GET `/Books`, `/Users`, `/Authors` evenly

### Advanced Load

- `load_test_csv_users.py`: Loads users from CSV and posts them
- `load_test_user_journey.py`: Create → Read → Delete simulation
- `load_test_sla_checker.py`: Flags responses > 500ms

---

## 🚀 How to Run

```bash
locust -f load/load_test.py --host=https://fakerestapi.azurewebsites.net
```

### Headless Example

```bash
locust -f endurance/endurance_test_books.py \
  --host=https://fakerestapi.azurewebsites.net \
  --headless -u 50 -r 2 -t 1h \
  --csv=reports/summary_stats
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

## 📦 Requirements

```bash
pip install -r requirements.txt
```

> Requires Python 3.7+

---

## 🧠 Notes

- Test data lives in `data/`
- All tests use `catch_response=True` for custom pass/fail tracking
- Modular design = easier CI/CD integration

---

## 📌 To Do

- [ ] Add chaos testing module
- [ ] Integrate with Docker Compose
- [ ] Add test result visualizer (e.g. HTML dashboard)

---

Made with ❤️ for robust, scalable, and realistic performance testing.
