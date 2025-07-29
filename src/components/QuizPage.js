// src/components/QuizPage.js
import React, { useState, useEffect } from "react";
import Question from "./Question";
import OverviewPanel from "./OverviewPanel";
import Timer from "./Timer";

function QuizPage({
  questions,
  userAnswers,
  setUserAnswers,
  setStage,
  visited,
  setVisited,
  attempted,
  setAttempted,
  setTimeUp,
  timeUp,
}) {
  const [curr, setCurr] = useState(0);
  const duration = 30 * 60; // 30 min in seconds

  useEffect(() => {
    setVisited({ ...visited, [curr]: true });
  }, [curr]);

  function answerHandler(idx, ans) {
    const ua = { ...userAnswers, [idx]: ans };
    setUserAnswers(ua);
    setAttempted({ ...attempted, [idx]: true });
  }

  function onSubmit() {
    setStage("report");
  }

  return (
    <div className="quiz-page">
      <Timer
        duration={duration}
        onEnd={() => {
          setTimeUp(true);
          setStage("report");
        }}
        timeUp={timeUp}
      />
      <OverviewPanel
        count={questions.length}
        visited={visited}
        attempted={attempted}
        current={curr}
        jump={setCurr}
      />
      <Question
        q={questions[curr]}
        idx={curr}
        chosen={userAnswers[curr]}
        answerHandler={answerHandler}
      />
      <div className="quiz-controls">
        <button
          onClick={() => setCurr(curr - 1)}
          disabled={curr === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setCurr(curr + 1)}
          disabled={curr === questions.length - 1}
        >
          Next
        </button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default QuizPage;
