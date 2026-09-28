import { ArrowIcon, GithubIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon } from "../Icons";
import { RevealOnScroll } from "../RevealOnScroll";
import { CopyEmail } from "../CopyEmail";

export const Contact = () => (
  <>
    <section id="contact" className="contact-section">
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="page-container">
        <RevealOnScroll>
          <div className="contact-inner corner-frame">
            <p className="section-kicker justify-center"><span>[05]</span><span>CONTACT</span><span className="status-dot" /><span>CHANNEL OPEN</span></p>
            <h2>Have something interesting<br />in mind?</h2>
            <p>Let's build something useful.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:adityagarwal05@gmail.com"><MailIcon /> Email me <ArrowIcon /></a>
              <a className="contact-link" href="https://www.linkedin.com/in/aditya-agarwal-433630243" target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a>
              <a className="contact-link" href="https://github.com/adityagarwal23" target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>
              <a className="contact-link" href={import.meta.env.BASE_URL + "Resume_Aditya_Agarwal.pdf"} target="_blank" rel="noopener noreferrer">Resume <ArrowIcon /></a>
            </div>
            <div className="contact-details">
              <a href="mailto:adityagarwal05@gmail.com"><MailIcon /> adityagarwal05@gmail.com</a>
              <a href="tel:+14342290618"><PhoneIcon /> 434-229-0618</a>
              <span><LocationIcon /> Lynchburg, Virginia</span>
            </div>
            <CopyEmail />
          </div>
        </RevealOnScroll>
      </div>
    </section>
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <p><span className="status-dot" /> status: graduating December 2026</p>
        <p>Designed & built by Aditya Agarwal <span>© {new Date().getFullYear()}</span></p>
      </div>
    </footer>
  </>
);
