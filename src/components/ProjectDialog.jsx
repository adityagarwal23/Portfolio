import { useEffect, useRef } from "react";
import { ArrowIcon } from "./Icons";

export const ProjectDialog = ({ project, onClose }) => {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return (
    <dialog ref={ref} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="project-dialog-inner">
        <div className="dialog-topline"><span className="micro-label">PROJECT NOTES / {project.number}</span><button type="button" className="dialog-close" onClick={onClose} aria-label="Close project details" autoFocus>×</button></div>
        <p className="project-dialog-category">{project.category}</p>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p className="dialog-description">{project.description}</p>
        <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-notes">
          <section><h3>The idea</h3><p>{project.idea}</p></section>
          <section><h3>What it does</h3><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          <section><h3>The outcome</h3><p>{project.impact}</p></section>
        </div>
        <a className="button button-secondary" href={`mailto:adityagarwal05@gmail.com?subject=${encodeURIComponent(`Let's talk about ${project.title}`)}`}>Ask me about this project <ArrowIcon /></a>
      </div>
    </dialog>
  );
};
