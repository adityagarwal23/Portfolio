import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.classList.add("visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -30px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={"reveal " + className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};
