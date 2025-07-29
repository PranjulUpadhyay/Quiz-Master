import React, { useState, useEffect } from "react";
import Question from "./Question";
import OverviewPanel from "./OverviewPanel";
import Timer from "./Timer";

/**
 * Main quiz page component
 * Manages quiz state, navigation, and timer
 */
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
  // Current question index (0-based)
  const [curr, setCurr] = useState(0);
  // Quiz duration in seconds (30 minutes)
  const duration = 30 * 60;

  // Mark current question as visited when user navigates to it
  useEffect(() => {
    setVisited({ ...visited, [curr]: true });
  }, [curr]);

  // Handle answer selection for a question
  function answerHandler(idx, ans) {
    const ua = { ...userAnswers, [idx]: ans };
    setUserAnswers(ua);
    setAttempted({ ...attempted, [idx]: true });
  }

  // Submit quiz and go to results page
  function onSubmit() {
    setStage("report");
  }return (
    <div className="quiz-page-compact">
      {/* Top bar with question counter and timer */}
      <div className="quiz-top-bar">
        <div className="question-info">
          <span className="question-counter-compact">
            {curr + 1} / {questions.length}
          </span>
        </div>
        <Timer
          duration={duration}
          onEnd={() => {
            setTimeUp(true);
            setStage("report");
          }}
          timeUp={timeUp}
        />
      </div>
      
      {/* Main content area with navigation and question */}
      <div className="quiz-main-content">
        {/* Left panel with overview and navigation controls */}
        <div className="quiz-left-panel">
          <OverviewPanel
            count={questions.length}
            visited={visited}
            attempted={attempted}
            current={curr}
            jump={setCurr}
          />
          <div className="quiz-controls-compact">
            {/* Previous question button */}
            <button
              onClick={() => setCurr(curr - 1)}
              disabled={curr === 0}
              className="nav-btn-compact prev-btn"
            >
              ← Prev
            </button>
            {/* Next question button */}
            <button
              onClick={() => setCurr(curr + 1)}
              disabled={curr === questions.length - 1}
              className="nav-btn-compact next-btn"
            >
              Next →
            </button>
            {/* Submit quiz button */}
            <button onClick={onSubmit} className="submit-btn-compact">
              Submit
            </button>
          </div>
        </div>
        
        {/* Right panel with current question */}
        <div className="quiz-right-panel">
          <Question
            question={questions[curr]}
            selectedAnswer={userAnswers[curr]}
            onAnswerSelect={answerHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
