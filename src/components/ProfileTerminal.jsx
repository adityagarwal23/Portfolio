import { useState } from "react";

const commands = {
  whoami: ["CS @ Virginia Tech", "Specialization: Secure Computing", "Software engineer. Curious problem solver."],
  experience: ["Wells Fargo / Software Engineering", "CloudFit / Software + Cybersecurity", "Virginia Tech / Teaching Assistant"],
  interests: ["Useful software. Safer systems.", "Platform automation & developer tools", "Teaching, mentoring & sharing what I learn"],
  contact: ["Email: adityagarwal05@gmail.com", "Based in Lynchburg, Virginia", "Graduating December 2026"],
  help: ["Try whoami, experience, interests or contact.", "Use the shortcuts below, or type a command.", "Type clear to reset the terminal."],
};

export const ProfileTerminal = () => {
  const [command, setCommand] = useState("whoami");
  const [input, setInput] = useState("");
  const [lines, setLines] = useState(commands.whoami);
  const run = (value) => {
    const next = value.trim().toLowerCase();
    if (!next) return;
    setCommand(next);
    setLines(next === "clear" ? [] : Object.hasOwn(commands, next) ? commands[next] : [`Command not found: ${value.trim()}`, "Type help to see available commands."]);
    setInput("");
  };

  return (
    <div className="terminal-card corner-frame" aria-label="Interactive profile terminal">
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true"><span /><span /><span /></div>
        <span>meet-aditya.sh</span><span>INTERACTIVE</span>
      </div>
      <div className="terminal-body">
        <p className="terminal-path">aditya@portfolio:<span>~</span>$ <strong>{command}</strong></p>
        <div className="terminal-output" key={command} role="status" aria-atomic="true">
          {lines.map((line) => <p key={line}><span className="terminal-chevron">&gt;</span>{line}</p>)}
        </div>
        <form className="terminal-input-row" onSubmit={(event) => { event.preventDefault(); run(input); }}>
          <label htmlFor="terminal-command"><span aria-hidden="true">~ $</span><span className="sr-only">Terminal command</span></label>
          <input id="terminal-command" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type help to get started" autoComplete="off" spellCheck="false" maxLength={80} />
          <button type="submit" aria-label="Run command">↵</button>
        </form>
      </div>
      <div className="terminal-shortcuts" aria-label="Terminal shortcuts">
        {["whoami", "experience", "interests", "contact"].map((item) => <button type="button" key={item} aria-pressed={command === item} onClick={() => run(item)}>{item}</button>)}
      </div>
      <div className="terminal-footer"><span>A LITTLE ABOUT ME</span><span>YOUR TURN TO EXPLORE ↵</span></div>
    </div>
  );
};
