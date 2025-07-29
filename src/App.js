import React, { useState } from "react";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import ReportPage from "./components/ReportPage";
import "./styles.css";

/**
 * Main application component
 * Manages app navigation between start, quiz, and report pages
 */
function App() {
  // Current app stage: "start" | "quiz" | "report"
  const [stage, setStage] = useState("start");
  // Questions fetched from API
  const [questions, setQuestions] = useState([]);
  // User's answers for each question
  const [userAnswers, setUserAnswers] = useState({});
  // Questions that user has navigated to
  const [visited, setVisited] = useState({});
  // Questions that user has answered
  const [attempted, setAttempted] = useState({});
  // Whether quiz time has run out
  const [timeUp, setTimeUp] = useState(false);

  return (
    <div className="App">
      {/* Welcome/Start Page */}
      {stage === "start" && (
        <StartPage
          setStage={setStage}
          setQuestions={setQuestions}
        />
      )}
      {/* Quiz Taking Page */}
      {stage === "quiz" && (
        <QuizPage
          questions={questions}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          setStage={setStage}
          visited={visited}
          setVisited={setVisited}
          attempted={attempted}
          setAttempted={setAttempted}
          setTimeUp={setTimeUp}
          timeUp={timeUp}
        />
      )}
      {/* Results/Report Page */}
      {stage === "report" && (
        <ReportPage
          questions={questions}
          userAnswers={userAnswers}
        />
      )}
    </div>
  );
}

export default App;
