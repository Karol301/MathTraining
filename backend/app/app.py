from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time

app = Flask(__name__)
CORS(app)

tasks = {}
task_counter = 0

@app.route("/generate", methods=["GET"])
def generate_task():
    global task_counter
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    op = random.choice(["+", "-"])
    expression = f"{a} {op} {b}"
    correct = eval(expression)

    task_counter += 1
    tasks[task_counter] = {"correct": correct, "start": time.time()}
    return jsonify({"task_id": task_counter, "question": expression})

@app.route("/answer", methods=["POST"])
def check_answer():
    data = request.get_json()
    task_id = data.get("task_id")
    answer = data.get("answer")

    if task_id not in tasks:
        return jsonify({"error": "Invalid task_id"}), 400

    task = tasks[task_id]
    elapsed = time.time() - task["start"]
    correct = (answer == task["correct"])
    return jsonify({"correct": correct, "time": round(elapsed, 2)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
