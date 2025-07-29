// src/components/ReportPage.js
import React from "react";

function ReportPage({ questions, userAnswers }) {
  return (
    <div className="report-page">
      <h2>Your Results</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, idx) => {
            const user = userAnswers[idx];
            const correct = user === q.correct;
            return (
              <tr key={idx} className={correct ? "right" : "wrong"}>
                <td>{idx + 1}</td>
                <td dangerouslySetInnerHTML={{ __html: q.question }} />
                <td dangerouslySetInnerHTML={{ __html: user || "--" }} />
                <td dangerouslySetInnerHTML={{ __html: q.correct }} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ReportPage;
