"""
Locust CSV Analysis Tool
------------------------
This script loads the `_stats.csv` file produced by Locust's `--csv` option
and prints a summary of SLA violations and performance insights.

Usage:
python analyze_locust_csv.py results/your_test_stats.csv
"""

import sys
import pandas as pd

SLA_RESPONSE_TIME_MS = 500  # SLA max average response time
SLA_FAILURE_RATE = 0.01     # SLA max failure rate (1%)

def analyze_locust_csv(file_path):
    df = pd.read_csv(file_path)

    print(f"Analyzing: {file_path}\n")

    for _, row in df.iterrows():
        if row["Name"] == "Aggregated":
            continue

        name = row["Name"]
        avg_rt = row["Average Response Time"]
        fail_rate = row["Failure Count"] / max(row["Request Count"], 1)

        print(f"Task: {name}")
        print(f"  Avg Response Time: {avg_rt} ms")
        print(f"  Failure Rate: {fail_rate:.2%}")

        if avg_rt > SLA_RESPONSE_TIME_MS:
            print("  ❌ SLA Violation: Response time too high")
        if fail_rate > SLA_FAILURE_RATE:
            print("  ❌ SLA Violation: Too many failures")
        if avg_rt <= SLA_RESPONSE_TIME_MS and fail_rate <= SLA_FAILURE_RATE:
            print("  ✅ SLA Met")

        print("-" * 40)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python analyze_locust_csv.py path_to_stats.csv")
    else:
        analyze_locust_csv(sys.argv[1])
