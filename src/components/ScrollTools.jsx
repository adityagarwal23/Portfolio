import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./Icons";

export const ScrollTools = () => {
  const progressRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0})`;
      setVisible(window.scrollY > window.innerHeight);
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);
  return <>
    <div className="reading-progress" aria-hidden="true"><div ref={progressRef} /></div>
    <a href="#home" className={"back-to-top " + (visible ? "is-visible" : "")} aria-label="Back to top" tabIndex={visible ? 0 : -1} aria-hidden={!visible}><ArrowIcon /></a>
  </>;
};
