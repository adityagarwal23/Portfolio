import { useEffect, useState } from "react";
import { ArrowIcon, GithubIcon, LinkedinIcon, LocationIcon, MailIcon } from "../Icons";
import { RevealOnScroll } from "../RevealOnScroll";

const commands = [
  { command: "whoami", lines: ["CS @ Virginia Tech", "Secure Computing", "Software Engineer"] },
  { command: "experience --latest", lines: ["Wells Fargo · SWE Intern", "CloudFit · SWE + Cybersecurity", "Virginia Tech · Teaching Assistant"] },
  { command: "location", lines: ["Lynchburg, Virginia", "graduating: December 2026", "status: open to opportunities"] },
];

export const Home = () => {
  const [commandIndex, setCommandIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => setCommandIndex((index) => (index + 1) % commands.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  const current = commands[commandIndex];
  return (
    <section id="home" className="hero-section">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="page-container hero-grid">
        <RevealOnScroll className="hero-copy">
          <div className="section-kicker"><span>[01]</span><span>HOME</span><span className="status-dot" /><span>GRADUATING DEC 2026</span></div>
          <p className="hero-eyebrow">Computer Science / Secure Computing</p>
          <h1>Aditya<br /><span>Agarwal.</span></h1>
          <p className="hero-lede">Building useful software and understanding how systems break.</p>
          <p className="hero-support">Virginia Tech computer science student specializing in Secure Computing with a minor in Mathematics.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View projects <ArrowIcon /></a>
            <a href="#contact" className="button button-secondary">Contact me</a>
          </div>
          <div className="social-row" aria-label="Social and contact links">
            <a href="https://github.com/adityagarwal23" target="_blank" rel="noopener noreferrer" aria-label="Aditya Agarwal on GitHub"><GithubIcon /> GitHub</a>
            <a href="https://www.linkedin.com/in/aditya-agarwal-433630243" target="_blank" rel="noopener noreferrer" aria-label="Aditya Agarwal on LinkedIn"><LinkedinIcon /> LinkedIn</a>
            <a href="mailto:adityagarwal05@gmail.com" aria-label="Email Aditya Agarwal"><MailIcon /> Email</a>
          </div>
          <p className="hero-location"><LocationIcon /> Lynchburg, Virginia</p>
        </RevealOnScroll>
        <RevealOnScroll className="terminal-wrap">
          <div className="terminal-card corner-frame" aria-label="Animated terminal profile">
            <div className="terminal-bar">
              <div className="terminal-dots" aria-hidden="true"><span /><span /><span /></div>
              <span>identity.sh</span><span>SECURE</span>
            </div>
            <div className="terminal-body" aria-live="polite">
              <p className="terminal-path">aditya@portfolio:<span>~</span>$ <strong>{current.command}</strong></p>
              <div key={current.command} className="terminal-output">
                {current.lines.map((line) => <p key={line}><span className="terminal-chevron">&gt;</span>{line}</p>)}
              </div>
              <p className="terminal-prompt">aditya@portfolio:<span>~</span>$ <i className="terminal-cursor" /></p>
            </div>
            <div className="terminal-footer"><span>SESSION 01</span><span>ENCRYPTED CONNECTION</span></div>
          </div>
        </RevealOnScroll>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i /></a>
    </section>
  );
};
