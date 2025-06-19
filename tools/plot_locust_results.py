import pandas as pd
import matplotlib.pyplot as plt
import glob
import os

# Locate all Locust summary stats CSV files
report_files = glob.glob("reports/*_stats.csv")

if not report_files:
    print("Error: No Locust CSV stat files found.")
    exit()

for file_path in report_files:
    if os.stat(file_path).st_size == 0:
        print(f"Error: Skipping empty file: {file_path}")
        continue

    df = pd.read_csv(file_path)
    if 'Name' not in df.columns or 'Average Response Time' not in df.columns:
        print(f"Required columns missing in: {file_path}")
        continue

    plt.figure(figsize=(10, 6))
    plt.bar(df['Name'], df['Average Response Time'], color='mediumseagreen')
    plt.ylabel('Avg Response Time (ms)')
    plt.title(f"Performance: {os.path.basename(file_path).replace('_stats.csv', '')}")
    plt.xticks(rotation=45)
    plt.tight_layout()

    output_path = file_path.replace('_stats.csv', '_chart.png')
    plt.savefig(output_path)
    print(f"Saved chart: {output_path}")
