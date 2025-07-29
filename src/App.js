// src/App.js
import React, { useState } from "react";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import ReportPage from "./components/ReportPage";
import "./styles.css";

function App() {
  const [stage, setStage] = useState("start"); // start | quiz | report
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [visited, setVisited] = useState({});
  const [attempted, setAttempted] = useState({});
  const [timeUp, setTimeUp] = useState(false);

  return (
    <div className="App">
      {stage === "start" && (
        <StartPage
          setStage={setStage}
          setEmail={setEmail}
          setQuestions={setQuestions}
        />
      )}
      {stage === "quiz" && (
        <QuizPage
          questions={questions}
          email={email}
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
      {stage === "report" && (
        <ReportPage
          questions={questions}
          userAnswers={userAnswers}
          email={email}
        />
      )}
    </div>
  );
}

export default App;
