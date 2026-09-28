import { ProfileTerminal } from "../ProfileTerminal";
import { ArrowIcon, GithubIcon, LinkedinIcon, LocationIcon, MailIcon } from "../Icons";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
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
            <a href={import.meta.env.BASE_URL + "Resume_Aditya_Agarwal.pdf"} className="button button-secondary" target="_blank" rel="noopener noreferrer">View résumé <ArrowIcon /></a>
          </div>
          <div className="social-row" aria-label="Social and contact links">
            <a href="https://github.com/adityagarwal23" target="_blank" rel="noopener noreferrer" aria-label="Aditya Agarwal on GitHub"><GithubIcon /> GitHub</a>
            <a href="https://www.linkedin.com/in/aditya-agarwal-433630243" target="_blank" rel="noopener noreferrer" aria-label="Aditya Agarwal on LinkedIn"><LinkedinIcon /> LinkedIn</a>
            <a href="mailto:adityagarwal05@gmail.com" aria-label="Email Aditya Agarwal"><MailIcon /> Email</a>
          </div>
          <p className="hero-location"><LocationIcon /> Lynchburg, Virginia</p>
        </RevealOnScroll>
        <RevealOnScroll className="terminal-wrap" delay={120}>
          <ProfileTerminal />
        </RevealOnScroll>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i /></a>
    </section>
  );
};
