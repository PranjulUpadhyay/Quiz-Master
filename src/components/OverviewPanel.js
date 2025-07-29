import React from "react";

/**
 * Question navigation overview panel
 * Shows numbered buttons for each question with status indicators
 */
function OverviewPanel({ count, visited, attempted, current, jump }) {
  return (
    <div className="overview-panel">
      {/* Create a button for each question */}
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
