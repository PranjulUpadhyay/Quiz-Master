import React from "react";

/**
 * Quiz results page component
 * Shows score summary and detailed question-by-question results
 */
function ReportPage({ questions, userAnswers }) {
  // Calculate quiz statistics
  const totalQuestions = questions.length;
  const correctAnswers = questions.filter((q, idx) => userAnswers[idx] === q.correct).length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Determine score category for styling
  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'excellent';
    if (percentage >= 60) return 'good';
    if (percentage >= 40) return 'average';
    return 'poor';
  };

  // Get encouraging message based on score
  const getScoreMessage = (percentage) => {
    if (percentage >= 80) return 'Excellent work!';
    if (percentage >= 60) return 'Good job!';
    if (percentage >= 40) return 'Keep practicing!';
    return 'Study more and try again!';
  };

  return (
    <div className="report-page-modern">
      {/* Page header */}
      <div className="report-header">
        <h1 className="report-title">Quiz Results</h1>
        <p className="report-subtitle">Here's how you performed</p>
      </div>

      {/* Score summary section */}
      <div className="score-summary">
        <div className="score-card-main">
          {/* Circular score display */}
          <div className={`score-circle ${getScoreColor(scorePercentage)}`}>
            <span className="score-percentage">{scorePercentage}%</span>
            <span className="score-label">Score</span>
          </div>
          {/* Score details and statistics */}
          <div className="score-details">
            <h2 className="score-message">{getScoreMessage(scorePercentage)}</h2>
            <div className="score-stats">
              <div className="stat-item correct">
                <span className="stat-number">{correctAnswers}</span>
                <span className="stat-label">Correct</span>
              </div>
              <div className="stat-item incorrect">
                <span className="stat-number">{incorrectAnswers}</span>
                <span className="stat-label">Incorrect</span>
              </div>
              <div className="stat-item total">
                <span className="stat-number">{totalQuestions}</span>
                <span className="stat-label">Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed question-by-question results */}
      <div className="detailed-results">
        <h3 className="results-heading">Detailed Results</h3>
        <div className="results-table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th className="col-number">#</th>
                <th className="col-question">Question</th>
                <th className="col-your-answer">Your Answer</th>
                <th className="col-correct-answer">Correct Answer</th>
                <th className="col-status">Status</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q, idx) => {
                const userAnswer = userAnswers[idx];
                const isCorrect = userAnswer === q.correct;
                const isAnswered = userAnswer && userAnswer.trim() !== '';
                
                return (
                  <tr key={idx} className={`result-row ${isCorrect ? 'correct' : isAnswered ? 'incorrect' : 'unanswered'}`}>
                    <td className="question-number">
                      <span className="number-badge">{idx + 1}</span>
                    </td>
                    <td className="question-text" dangerouslySetInnerHTML={{ __html: q.question }} />
                    <td className="user-answer">
                      {userAnswer ? (
                        <span dangerouslySetInnerHTML={{ __html: userAnswer }} />
                      ) : (
                        <span className="no-answer">Not answered</span>
                      )}
                    </td>
                    <td className="correct-answer" dangerouslySetInnerHTML={{ __html: q.correct }} />
                    <td className="answer-status">
                      <span className={`status-badge ${isCorrect ? 'correct' : isAnswered ? 'incorrect' : 'unanswered'}`}>
                        {isCorrect ? '✓' : isAnswered ? '✗' : '—'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;
