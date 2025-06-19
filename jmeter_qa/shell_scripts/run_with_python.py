# Python runner script to execute JMeter test plans
import subprocess

def run_jmeter(plan_path, result_path):
    cmd = [
        'jmeter', '-n', '-t', plan_path,
        '-l', result_path, '-e', '-o', 'jmeter_qa/reports/html_report'
    ]
    subprocess.run(cmd)
