import React, { useEffect, useState } from "react";

/**
 * Countdown timer component for the quiz
 * Shows time remaining and triggers callback when time runs out
 */
const Timer = ({ duration, onEnd, timeUp }) => {
  // Current seconds remaining
  const [seconds, setSeconds] = useState(duration);

  // Timer countdown logic
  useEffect(() => {
    // Stop timer if time is already up
    if (timeUp) return;
    
    // Trigger end callback when timer reaches zero
    if (seconds === 0) {
      onEnd();
      return;
    }
    
    // Decrease seconds by 1 every second
    const t = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, timeUp, onEnd]);

  // Format time as MM:SS
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  
  return (
    <div className={`timer${seconds < 60 ? " danger" : ""}`}>
      {mm}:{ss}
    </div>
  );
};

export default Timer;
