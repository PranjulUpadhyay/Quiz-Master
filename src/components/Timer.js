// src/components/Timer.js
import React, { useEffect, useState } from "react";

const Timer = ({ duration, onEnd, timeUp }) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    if (timeUp) return;
    if (seconds === 0) {
      onEnd();
      return;
    }
    const t = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, timeUp, onEnd]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return (
    <div className={`timer${seconds < 60 ? " danger" : ""}`}>
      {mm}:{ss}
    </div>
  );
};

export default Timer;
