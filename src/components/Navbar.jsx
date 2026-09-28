import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { navItems } from "./navigation";

export const Navbar = ({ menuOpen, setMenuOpen, theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60%", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="page-container">
        <div className="flex h-[72px] items-center justify-between">
          <a href="#home" className="brand-mark" aria-label="Aditya Agarwal, home">
            <span aria-hidden="true">&lt;</span>adityaagarwal <span aria-hidden="true">/&gt;</span>
          </a>
          <button
            type="button"
            className={"menu-toggle md:hidden " + (menuOpen ? "is-open" : "")}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map(([id, label]) => (
              <a key={id} href={"#" + id} className={"nav-link " + (activeSection === id ? "is-active" : "")} aria-current={activeSection === id ? "page" : undefined}>
                {label}
              </a>
            ))}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
};
