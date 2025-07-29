// src/components/Question.js
import React from "react";

function Question({ q, idx, chosen, answerHandler }) {
  return (
    <div className="question">
      <div
        className="question-title"
        dangerouslySetInnerHTML={{ __html: q.question }}
      />
      <ul>
        {q.choices.map(c => (
          <li key={c}>
            <label>
              <input
                type="radio"
                name={`q${idx}`}
                value={c}
                checked={chosen === c}
                onChange={() => answerHandler(idx, c)}
              />
              <span dangerouslySetInnerHTML={{ __html: c }} />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
