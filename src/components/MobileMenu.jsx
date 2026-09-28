import { navItems } from "./navigation";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useRef } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen, theme, toggleTheme }) => {
  const menuRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const trigger = document.activeElement;
    const menu = menuRef.current;
    menu.querySelector("a")?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "Tab") {
        const items = [document.querySelector(".menu-toggle"), ...menu.querySelectorAll("a, button")].filter(Boolean);
        const index = items.indexOf(document.activeElement);
        event.preventDefault();
        items[(index + (event.shiftKey ? -1 : 1) + items.length) % items.length].focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", handleKey);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", handleKey);
      if (trigger?.getClientRects().length) trigger.focus();
    };
  }, [menuOpen, setMenuOpen]);
  const linkClass = "mobile-nav-link " + (menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4");

  return (
    <div ref={menuRef} id="mobile-menu" className={"mobile-menu " + (menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} aria-hidden={!menuOpen} inert={!menuOpen}>
      <div className="mobile-menu-grid" aria-hidden="true" />
      <p className="section-kicker mb-6"><span>PORTFOLIO</span><span>// NAVIGATION</span></p>
      {navItems.map(([id, label, number], index) => (
        <a
          key={id}
          href={"#" + id}
          onClick={() => setMenuOpen(false)}
          className={linkClass}
          style={{ transitionDelay: menuOpen ? (index * 45) + "ms" : "0ms" }}
          tabIndex={menuOpen ? 0 : -1}
        >
          <span className="font-mono text-sm text-cyan-500">[{number}]</span>{label}
        </a>
      ))}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="mt-8" />
    </div>
  );
};
