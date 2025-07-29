import React from "react";

/**
 * Display a single quiz question with multiple choice answers
 * Shows radio buttons for answer selection
 */
function Question({ question, selectedAnswer, onAnswerSelect }) {
  // Don't render anything if no question is provided
  if (!question) return null;

  // Handle when user clicks on an answer choice
  const handleAnswerClick = (answer) => {
    onAnswerSelect(question.id, answer);
  };
  return (
    <div className="question">
      {/* Question text displayed as HTML */}
      <div className="question-title">
        <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
      </div>      
      {/* List of answer choices with radio buttons */}
      <ul className="choices-list">
        {question.choices.map((choice) => (
          <li key={choice} className="choice-item">
            <label className="choice-label">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={choice}
                checked={selectedAnswer === choice}
                onChange={() => handleAnswerClick(choice)}
              />
              {/* Answer text displayed as HTML */}
              <span 
                className="choice-text"
                dangerouslySetInnerHTML={{ __html: choice }} 
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
