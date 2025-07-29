// src/components/StartPage.js
import React, { useState } from "react";
import { fetchQuestions } from "../utils/fetchQuestions";

export default function StartPage({ setStage, setEmail, setQuestions }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  async function handleStart() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
      setError("Enter a valid email!");
      return;
    }
    setEmail(input);
    const questions = await fetchQuestions();
    setQuestions(questions);
    setStage("quiz");
  }

  return (
    <div className="start-page">
      <h2>Start Quiz</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}
