import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  const colors = ["#0ff", "#0f0", "#f00", "#ff0", "#f0f", "#0af", "#fa0"];

  const colorizeExpression = (expr) =>
    expr.split("").map((ch, i) => (
      <span
        key={i}
        style={{ color: colors[i % colors.length], margin: "0 4px" }}
      >
        {ch}
      </span>
    ));

  const generateTask = async () => {
    const res = await fetch("http://127.0.0.1:5000/generate");
    const data = await res.json();
    setTask(data);
    setResult(null);
    setAnswer("");
  };

  const submitAnswer = async () => {
    const res = await fetch("http://127.0.0.1:5000/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task_id: task.task_id, answer: Number(answer) }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="app-container">
      <div className="card">
        {!task && <button onClick={generateTask}>Start</button>}

        {task && (
          <div>
            <div className="question">{colorizeExpression(task.question)}</div>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <br />
            <button onClick={submitAnswer}>Submit</button>
          </div>
        )}

        {result && (
          <div className="result">
            <p className={result.correct ? "correct" : "wrong"}>
              {result.correct ? "Correct!" : "Wrong!"}
            </p>
            <p>Time: {result.time} s</p>
            <button onClick={generateTask}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
