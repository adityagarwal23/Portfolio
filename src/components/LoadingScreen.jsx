import { useEffect, useState } from "react";

const logs = ["PROFILE.............. OK", "SECURE CHANNEL....... OK", "INTERFACE............ OK", "READY"];

export const LoadingScreen = ({ onComplete }) => {
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const timers = logs.map((_, index) => window.setTimeout(() => setLineCount(index + 1), 350 + index * 300));
    timers.push(window.setTimeout(() => onComplete?.(), 1900));
    return () => timers.forEach(window.clearTimeout);
  }, [onComplete]);

  return (
    <div className="loader" role="status" aria-label="Loading portfolio">
      <div className="loader-grid" aria-hidden="true" />
      <span className="loader-corner loader-corner-tl" /><span className="loader-corner loader-corner-tr" />
      <span className="loader-corner loader-corner-bl" /><span className="loader-corner loader-corner-br" />
      <div className="loader-content">
        <p className="loader-system">SYSTEM // PORTFOLIO ACCESS</p>
        <h1>HELLO<span>_</span></h1>
        <div className="loader-terminal">
          <p className="loader-command">aditya@portfolio:~$ initialize</p>
          {logs.slice(0, lineCount).map((line) => <p key={line}><span>›</span> {line}</p>)}
        </div>
        <div className="loader-progress"><i style={{ width: ((lineCount / logs.length) * 100) + "%" }} /></div>
        <div className="loader-meta"><span>ESTABLISHING SESSION</span><span>{Math.round((lineCount / logs.length) * 100)}%</span></div>
      </div>
    </div>
  );
};
