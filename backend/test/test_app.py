import pytest
import json
from app.app import app

@pytest.fixture
def client():
    app.testing = True
    with app.test_client() as client:
        yield client

def test_generate_task(client):
    res = client.get("/generate")
    data = json.loads(res.data)
    assert "task_id" in data
    assert "question" in data

def test_answer_correct(client):
    res = client.get("/generate")
    task = res.get_json()
    task_id = task["task_id"]
    expr = task["question"]

    correct = eval(expr)

    res = client.post("/answer", json={"task_id": task_id, "answer": correct})
    data = res.get_json()
    assert data["correct"] is True
    assert "time" in data

def test_answer_wrong(client):
    res = client.get("/generate")
    task = res.get_json()

    res = client.post("/answer", json={"task_id": task["task_id"], "answer": 9999})
    data = res.get_json()
    assert data["correct"] is False
