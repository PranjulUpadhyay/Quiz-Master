// src/components/OverviewPanel.js
import React from "react";

function OverviewPanel({ count, visited, attempted, current, jump }) {
  return (
    <div className="overview-panel">
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          className={`overview-btn 
            ${current === idx ? "current" : ""}
            ${visited[idx] ? "visited" : ""}
            ${attempted[idx] ? "attempted" : ""}
          `}
          onClick={() => jump(idx)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}

export default OverviewPanel;
