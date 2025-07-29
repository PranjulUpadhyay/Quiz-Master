import React, { useState } from "react";
import { fetchQuestions } from "../utils/fetchQuestions";
import EmailInput from "./EmailInput";

/**
 * Welcome page component - first screen users see
 * Shows app features and handles email input to start quiz
 */
export default function StartPage({ setStage, setQuestions }) {
  // Loading state for when fetching quiz questions
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle email submission and quiz initialization
  const handleEmailSubmit = async (email) => {
    setIsLoading(true);
    
    try {
      // Fetch quiz questions from API
      const questions = await fetchQuestions();
      setQuestions(questions);
      setStage("quiz");
    } catch (error) {
      console.error("Failed to load quiz questions:", error);
    } finally {
      setIsLoading(false);
    }  };
  
  return (
    <div className="start-page">
      <div className="content-container">
        {/* Welcome section with app title and feature cards */}
        <div className="welcome-cards-container">
          <div className="welcome-section">
            <h1 className="welcome-heading">Welcome to QuizMaster</h1>
            <p className="welcome-subtitle">Test your knowledge and challenge yourself with our interactive quiz platform</p>
          </div>

          {/* Feature highlight cards */}
          <div className="features-cards">
            <div className="feature-card">
              <div className="card-icon">📝</div>
              <h3 className="card-title">Smart Questions</h3>
            </div>
            
            <div className="feature-card">
              <div className="card-icon">⏱️</div>
              <h3 className="card-title">Timed Challenge</h3>
            </div>
            
            <div className="feature-card">
              <div className="card-icon">📊</div>
              <h3 className="card-title">Detailed Results</h3>
            </div>
          </div>
        </div>

        {/* Email input section */}
        <div className="email-section">
          <EmailInput onSubmit={handleEmailSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
