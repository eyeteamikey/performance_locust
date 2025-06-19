import os
import shutil
import subprocess

# Define test parameters
jmeter_path = "apache-jmeter-5.6.3/bin/jmeter"  # Adjust if needed
test_plan = "jmeter_qa/test_scripts/load/get_books_load_test.jmx"
jtl_output = "jmeter_qa/reports/load_get_books.jtl"
html_output = "jmeter_qa/reports/load_get_books_html"

# Remove previous HTML output if it exists
if os.path.exists(html_output):
    print(f"Removing existing HTML report at: {html_output}")
    shutil.rmtree(html_output)

# Build the JMeter command
cmd = [
    jmeter_path,
    "-n",
    "-t", test_plan,
    "-l", jtl_output,
    "-e",
    "-o", html_output
]

# Run the JMeter test
print("Running JMeter test...")
subprocess.run(cmd, check=True)
print("Test complete.")
